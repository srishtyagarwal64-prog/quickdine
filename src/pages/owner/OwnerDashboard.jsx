import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import api from "../../lib/api";
import toast from "react-hot-toast";
import { CalendarIcon, SettingsIcon } from "lucide-react";
import RestaurantWizard from "../../components/owner/RestaurantWizard";
import PendingApproval from "../../components/owner/PendingApproval";
import RequestRejected from "../../components/owner/RequestRejected";
import OwnerBookings from "../../components/owner/OwnerBookings";
import OwnerProfileDetails from "../../components/owner/OwnerProfileDetails";
export default function OwnerDashboard() {
    const { logout } = useAppContext();
    const [restaurant, setRestaurant] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("bookings");
    const fetchOwnerData = async () => {
        try {
            setLoading(true);
            const res = await api.get("/owner/restaurant");
            setRestaurant(res.data);
            if (res.data) {
                if (res.data.status === "approved") {
                    // Fetch bookings
                    const bookingsRes = await api.get("/owner/bookings");
                    setBookings(bookingsRes.data);
                }
            }
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "Failed to load dashboard data");
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        (async () => await fetchOwnerData())();
    }, []);
    if (loading) {
        return _jsx(Loader, { text: "Loading Owner Dashboard..." });
    }
    return (_jsxs("div", { className: "min-h-screen bg-surface flex flex-col pt-20", children: [_jsx(Navbar, {}), _jsxs("main", { className: "grow max-w-7xl w-full mx-auto px-6 md:px-10 py-12", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant/10 pb-8 mb-8", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-display text-2xl md:text-3xl text-primary", children: "Restaurant Portal" }), _jsx("p", { className: "text-xs text-black/55 mt-1.5", children: "Review capacity limits and process live reservations." })] }), _jsx("button", { onClick: logout, className: "bg-error-container hover:bg-error-container/85 text-error px-4 py-2 text-[10px] font-medium tracking-widest uppercase transition-colors", children: "Sign Out" })] }), !restaurant ? (_jsx(RestaurantWizard, { setRestaurant: setRestaurant })) : restaurant.status === "pending" ? (
                    /* Case 2: Profile Pending Approval */
                    _jsx(PendingApproval, { restaurant: restaurant })) : restaurant.status === "rejected" ? (
                    /* Case 3: Rejected */
                    _jsx(RequestRejected, { restaurantName: restaurant.name })) : (
                    /* Case 4: Approved - Full Dashboard Panel */
                    _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [_jsxs("aside", { className: "lg:col-span-3 space-y-6 bg-white border border-outline-variant/20 p-6 rounded-md shadow-sm h-fit", children: [_jsxs("div", { className: "flex items-center gap-3.5 border-b border-outline-variant/10 pb-5", children: [_jsx("span", { className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium text-base", children: restaurant.name.charAt(0) }), _jsxs("div", { children: [_jsx("h4", { className: "font-display font-medium text-primary text-base line-clamp-1", children: restaurant.name }), _jsx("span", { className: "text-[9px] text-secondary tracking-widest uppercase bg-secondary-container/20 px-2 py-0.5 rounded-sm inline-block mt-0.5", children: "APPROVED" })] })] }), _jsxs("nav", { className: "flex flex-col gap-1.5", children: [_jsxs("button", { onClick: () => setActiveTab("bookings"), className: `w-full flex items-center gap-3 px-4 py-3 text-xs font-medium tracking-wider uppercase text-left rounded-sm cursor-pointer transition-colors ${activeTab === "bookings" ? "bg-primary text-white" : "text-black/55 hover:bg-surface"}`, children: [_jsx(CalendarIcon, { size: 14 }), "Bookings (", bookings.length, ")"] }), _jsxs("button", { onClick: () => setActiveTab("details"), className: `w-full flex items-center gap-3 px-4 py-3 text-xs font-medium tracking-wider uppercase text-left rounded-sm cursor-pointer transition-colors ${activeTab === "details" ? "bg-primary text-white" : "text-black/55 hover:bg-surface"}`, children: [_jsx(SettingsIcon, { size: 14 }), "Profile Details"] })] })] }), _jsxs("div", { className: "lg:col-span-9 space-y-8", children: [activeTab === "bookings" && (_jsx(OwnerBookings, { bookings: bookings, setBookings: setBookings, totalSeats: restaurant.totalSeats })), activeTab === "details" && _jsx(OwnerProfileDetails, { restaurant: restaurant, setRestaurant: setRestaurant })] })] }))] }), _jsx(Footer, {})] }));
}
