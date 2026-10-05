import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../lib/api";
import { ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import BookingSuccess from "../components/booking/BookingSuccess";
import BookingSummary from "../components/booking/BookingSummary";
import BookingForm from "../components/booking/BookingForm";
export default function BookingConfirmation() {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const { user } = useAppContext();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [confirming, setConfirming] = useState(false);
    const [confirmedBooking, setConfirmedBooking] = useState(null);
    // Form inputs
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [occasion, setOccasion] = useState("");
    const [specialRequests, setSpecialRequests] = useState("");
    // From Query Params
    const slot = searchParams.get("slot") || "";
    const date = searchParams.get("date") || "";
    const guests = searchParams.get("guests") || "2";
    useEffect(() => {
        // Prefill form when user details load
        if (user) {
            (() => {
                setName(user.name);
                setEmail(user.email);
                if (user.phone)
                    setPhone(user.phone);
            })();
        }
    }, [user]);
    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                setLoading(true);
                const res = await api.get(`/restaurants/${slug}`);
                setRestaurant(res.data);
            }
            catch (error) {
                toast.error(error?.response?.data?.message || error?.message);
                navigate("/");
            }
            finally {
                setLoading(false);
            }
        };
        if (slug) {
            fetchRestaurant();
        }
    }, [slug, navigate]);
    if (loading) {
        return _jsx(Loader, { text: "Retrieving Dining Details..." });
    }
    if (!restaurant)
        return null;
    const handleConfirmSubmit = async (e) => {
        e.preventDefault();
        if (!slot || !date) {
            toast.error("Reservation details are missing. Return to restaurant details.");
            return;
        }
        try {
            setConfirming(true);
            const res = await api.post("/bookings", { restaurantId: restaurant._id, date, time: slot, guests, occasion, specialRequests });
            setConfirmedBooking(res.data);
            toast.success("Reservation confirmed!");
        }
        catch (error) {
            toast.error(error?.response?.data?.message || error?.message);
        }
        finally {
            setConfirming(false);
        }
    };
    // Render Success Screen
    if (confirmedBooking) {
        return (_jsxs("div", { className: "min-h-screen bg-surface flex flex-col pt-20", children: [_jsx(Navbar, {}), _jsx("main", { className: "grow flex items-center justify-center py-12 px-6", children: _jsx(BookingSuccess, { confirmedBooking: confirmedBooking, restaurant: restaurant, date: date, slot: slot, guests: guests }) }), _jsx(Footer, {})] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-surface flex flex-col pt-20", children: [_jsx(Navbar, {}), _jsxs("main", { className: "grow max-w-7xl w-full mx-auto px-6 md:px-10 py-12", children: [_jsxs("div", { className: "flex items-center gap-2 mb-10 pb-4 border-b border-outline-variant/10 text-xs text-black/55", children: [_jsx(Link, { to: `/restaurant/${restaurant.slug}`, className: "hover:text-primary transition-colors", children: restaurant.name }), _jsx(ChevronRight, { size: 14 }), _jsx("span", { className: "text-primary", children: "Details & Confirmation" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start", children: [_jsx("div", { className: "lg:col-span-5", children: _jsx(BookingSummary, { restaurant: restaurant, date: date, slot: slot, guests: guests }) }), _jsx("div", { className: "lg:col-span-7", children: _jsx(BookingForm, { name: name, setName: setName, email: email, setEmail: setEmail, phone: phone, setPhone: setPhone, occasion: occasion, setOccasion: setOccasion, specialRequests: specialRequests, setSpecialRequests: setSpecialRequests, confirming: confirming, onSubmit: handleConfirmSubmit }) })] })] }), _jsx(Footer, {})] }));
}
