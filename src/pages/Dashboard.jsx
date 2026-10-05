import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestaurantCard from "../components/RestaurantCard";
import AuthModal from "../components/AuthModal";
import api from "../lib/api";
import { CalendarIcon, UsersIcon, ClockIcon, MapPinIcon, CalendarDaysIcon } from "lucide-react";
import toast from "react-hot-toast";
export default function Dashboard() {
    const { user } = useAppContext();
    const [bookings, setBookings] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [loadingBookings, setLoadingBookings] = useState(true);
    // Fetch user bookings
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                setLoadingBookings(true);
                const res = await api.get("/bookings/my");
                setBookings(res.data);
            }
            catch (error) {
                toast.error(error?.response?.data?.message || error?.message);
            }
            finally {
                setLoadingBookings(false);
            }
        };
        if (user) {
            fetchBookings();
        }
    }, [user]);
    // Fetch generic recommendations
    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const res = await api.get("/restaurants/featured");
                setRecommendations(res.data);
            }
            catch (error) {
                toast.error(error?.response?.data?.message || error?.message);
            }
        };
        fetchRecommendations();
    }, []);
    const handleCancelBooking = async (bookingId) => {
        if (!window.confirm("Are you sure you want to cancel this booking?")) {
            return;
        }
        try {
            await api.put(`/bookings/${bookingId}/cancel`);
            // Update local state
            setBookings((prev) => prev.map((b) => (b._id === bookingId ? { ...b, status: "cancelled" } : b)));
            toast.success("Reservation cancelled successfully.");
        }
        catch (error) {
            toast.error(error?.response?.data?.message || error?.message);
        }
    };
    if (!user)
        return null;
    // Filter bookings into upcoming and past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcomingBookings = bookings.filter((b) => {
        const bDate = new Date(b.date);
        return bDate >= today && b.status === "confirmed";
    });
    const pastBookings = bookings.filter((b) => {
        const bDate = new Date(b.date);
        return bDate < today || b.status !== "confirmed";
    });
    return (_jsxs("div", { className: "min-h-screen bg-surface flex flex-col pt-20", children: [_jsx(Navbar, {}), _jsx(AuthModal, {}), _jsx("main", { className: "grow max-w-7xl w-full mx-auto px-6 md:px-10 py-12", children: _jsxs("div", { className: "grow space-y-10", children: [_jsxs("div", { className: "pb-4 border-b border-outline-variant/10", children: [_jsxs("h2", { className: "font-display text-2xl md:text-3xl font-semibold text-primary", children: ["Welcome back, ", user.name.split(" ")[0]] }), _jsx("p", { className: "text-xs text-black/55 mt-1.5", children: "Manage your upcoming dining experiences." })] }), _jsxs("div", { className: "space-y-10", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-display text-lg font-medium text-primary", children: "Upcoming Bookings" }), loadingBookings ? (_jsx("div", { className: "bg-white border border-outline-variant/10 p-12 text-center flex justify-center", children: _jsx("div", { className: "w-6 h-6 border-2 border-outline-variant/30 border-t-secondary rounded-full animate-spin" }) })) : upcomingBookings.length === 0 ? (_jsxs("div", { className: "bg-white border border-outline-variant/10 p-12 text-center rounded-md", children: [_jsx(CalendarDaysIcon, { size: 36, className: "mx-auto text-outline-variant mb-2" }), _jsx("p", { className: "text-xs text-black/55 italic", children: "No upcoming reservations scheduled." }), _jsx(Link, { to: "/search", className: "inline-block mt-4 bg-primary hover:bg-secondary text-white text-[10px] font-medium tracking-widest uppercase px-6 py-2.5 transition-colors", children: "Book a Table" })] })) : (_jsx("div", { className: "space-y-4", children: upcomingBookings.map((b) => (_jsxs("div", { className: "bg-white border border-outline-variant/20 rounded-md p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6", children: [_jsxs("div", { className: "flex gap-4", children: [_jsx("div", { className: "w-16 h-16 rounded-sm overflow-hidden shrink-0 bg-surface", children: _jsx("img", { src: b.restaurant?.image, alt: b.restaurant?.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "space-y-1", children: [_jsx("span", { className: "text-[9px] font-medium text-secondary tracking-widest uppercase", children: b.restaurant?.cuisine }), _jsx("h4", { className: "font-display text-base font-medium text-primary", children: b.restaurant?.name }), _jsxs("p", { className: "text-xs text-black/55 flex items-center gap-1", children: [_jsx(MapPinIcon, { size: 12 }), b.restaurant?.location] })] })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-6 text-xs text-on-surface bg-surface-container-low p-4 rounded-md border border-outline-variant/10 w-full md:w-auto", children: [_jsxs("div", { className: "flex items-center gap-2 pr-4 md:border-r border-outline-variant/20", children: [_jsx(CalendarIcon, { size: 14, className: "text-secondary" }), _jsx("span", { className: "font-medium", children: new Date(b.date).toLocaleDateString() })] }), _jsxs("div", { className: "flex items-center gap-2 pr-4 md:border-r border-outline-variant/20", children: [_jsx(ClockIcon, { size: 14, className: "text-secondary" }), _jsxs("span", { className: "font-medium", children: [b.time, " PM"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(UsersIcon, { size: 14, className: "text-secondary" }), _jsxs("span", { className: "font-medium", children: [b.guests, " Guests"] })] })] }), _jsx("div", { className: "flex gap-3 w-full md:w-auto justify-end", children: _jsx("button", { onClick: () => handleCancelBooking(b._id), className: "px-5 py-2.5 text-[10px] font-medium tracking-widest uppercase text-error hover:bg-error-container/20 border border-outline-variant/40 rounded-sm cursor-pointer transition-colors", children: "Cancel" }) })] }, b._id))) }))] }), _jsx("div", { className: "space-y-4", children: loadingBookings
                                        ? null
                                        : pastBookings.length !== 0 && (_jsxs(_Fragment, { children: [_jsx("h3", { className: "font-display text-lg font-medium text-primary", children: "Dining History" }), _jsx("div", { className: "bg-white border border-outline-variant/20 rounded-md overflow-hidden shadow-sm", children: _jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-surface-container-low border-b border-outline-variant/10 text-[10px] font-medium tracking-wider text-black/55 uppercase", children: [_jsx("th", { className: "p-4", children: "Restaurant" }), _jsx("th", { className: "p-4", children: "Date & Time" }), _jsx("th", { className: "p-4", children: "Party" }), _jsx("th", { className: "p-4", children: "Status" })] }) }), _jsx("tbody", { className: "divide-y divide-outline-variant/10", children: pastBookings.map((b) => (_jsxs("tr", { className: "hover:bg-surface/50", children: [_jsx("td", { className: "p-4 font-medium text-primary", children: _jsx(Link, { to: `/restaurant/${b.restaurant?.slug}`, className: "hover:text-secondary", children: b.restaurant?.name }) }), _jsxs("td", { className: "p-4", children: [new Date(b.date).toLocaleDateString(), " at ", b.time, " PM"] }), _jsxs("td", { className: "p-4", children: [b.guests, " ", b.guests === 1 ? "Guest" : "Guests"] }), _jsx("td", { className: "p-4", children: _jsx("span", { className: `inline-block py-0.5 px-2 text-[9px] font-medium tracking-wider uppercase rounded-sm ${b.status === "confirmed"
                                                                                    ? "bg-secondary-container/30 text-on-secondary-container"
                                                                                    : b.status === "completed"
                                                                                        ? "bg-green-100 text-green-800"
                                                                                        : "bg-error-container text-on-error-container"}`, children: b.status }) })] }, b._id))) })] }) })] })) })] }), recommendations.length > 0 && (_jsxs("div", { className: "space-y-4 pt-10 border-t border-outline-variant/10", children: [_jsx("h3", { className: "font-display text-lg font-medium text-primary", children: "Recommended for You" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: recommendations.slice(0, 3).map((r) => (_jsx(RestaurantCard, { restaurant: r }, r._id))) })] }))] }) }), _jsx(Footer, {})] }));
}
