import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Calendar, Users, Clock } from "lucide-react";
import api from "../../lib/api";
import toast from "react-hot-toast";
export default function OwnerBookings({ bookings, setBookings, totalSeats }) {
    const handleUpdateBookingStatus = async (bookingId, newStatus) => {
        try {
            await api.put(`/owner/bookings/${bookingId}/status`, { status: newStatus });
            setBookings((prev) => prev.map((b) => (b._id === bookingId ? { ...b, status: newStatus } : b)));
            toast.success(`Booking status updated to ${newStatus}`);
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "Update status failed");
        }
    };
    return (_jsxs("div", { className: "space-y-6 text-left", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h3", { className: "font-display text-lg font-medium text-primary", children: "Active Reservations" }), _jsxs("span", { className: "text-xs text-black/55", children: ["Total capacity: ", totalSeats, " seats"] })] }), bookings.length === 0 ? (_jsxs("div", { className: "bg-white border border-outline-variant/10 p-12 text-center rounded-md", children: [_jsx(Calendar, { size: 32, className: "mx-auto text-outline-variant mb-2" }), _jsx("p", { className: "text-xs text-black/55 italic", children: "No booking records found." })] })) : (_jsx("div", { className: "space-y-4", children: bookings.map((b) => (_jsxs("div", { className: "bg-white border border-outline-variant/20 rounded-md p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6", children: [_jsxs("div", { className: "space-y-1.5 flex-1", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h4", { className: "font-display text-base font-medium text-primary", children: b.user?.name }), _jsx("span", { className: "text-[9px] text-black/50 border border-outline-variant/30 px-1.5 py-0.5", children: b.bookingId })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-black/55", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Users, { size: 12 }), " ", b.guests, " Guests"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { size: 12 }), " ", b.time, " PM"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Calendar, { size: 12 }), " ", new Date(b.date).toLocaleDateString()] })] }), b.specialRequests && (_jsxs("p", { className: "text-xs text-secondary/80 bg-secondary/5 px-3 py-1.5 rounded-sm border-l-2 border-secondary mt-2", children: [_jsx("strong", { children: "Requests:" }), " ", b.specialRequests] }))] }), _jsxs("div", { className: "flex flex-wrap items-center gap-3 w-full md:w-auto justify-end", children: [_jsx("span", { className: `text-[9px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-sm ${b.status === "confirmed"
                                        ? "bg-blue-100 text-blue-800"
                                        : b.status === "completed"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-error-container text-on-error-container"}`, children: b.status }), b.status === "confirmed" && (_jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => handleUpdateBookingStatus(b._id, "completed"), className: "px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-[9px] font-medium tracking-wider uppercase transition-colors rounded-sm cursor-pointer", children: "Complete" }), _jsx("button", { onClick: () => handleUpdateBookingStatus(b._id, "cancelled"), className: "px-3 py-1.5 bg-error hover:bg-error/85 text-white text-[9px] font-medium tracking-wider uppercase transition-colors rounded-sm cursor-pointer", children: "Cancel" })] }))] })] }, b._id))) }))] }));
}
