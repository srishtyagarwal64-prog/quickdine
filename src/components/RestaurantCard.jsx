import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { Star, MapPinIcon } from "lucide-react";
import { dummyRating } from "../assets/assets";
export default function RestaurantCard({ restaurant }) {
    const navigate = useNavigate();
    const handleSlotClick = (e, slot) => {
        e.preventDefault();
        e.stopPropagation();
        const today = new Date().toISOString().split("T")[0];
        // Redirect to booking details confirmation with slot and today's date pre-selected
        navigate(`/booking/${restaurant.slug}?slot=${slot}&date=${today}`);
    };
    return (_jsxs("div", { className: "group relative bg-white border border-outline-variant/10 card-hover-effect overflow-hidden rounded-md flex flex-col h-full", children: [_jsxs(Link, { to: `/restaurant/${restaurant.slug}`, className: "relative h-60 overflow-hidden block", children: [_jsx("img", { src: restaurant.image, alt: restaurant.name, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }), _jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" }), _jsxs("div", { className: "absolute bottom-4 left-4 flex flex-wrap gap-2", children: [restaurant.exclusive && (_jsx("span", { className: "text-[9px] font-medium tracking-widest text-white bg-secondary py-1 px-2.5 uppercase", children: "EXCLUSIVE" })), restaurant.featured && (_jsx("span", { className: "text-[9px] font-medium tracking-widest text-on-primary bg-primary py-1 px-2.5 uppercase", children: "RECOMMENDED" }))] })] }), _jsxs("div", { className: "p-5 flex-1 flex flex-col justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { className: "text-[10px] font-medium text-secondary tracking-widest uppercase", children: restaurant.cuisine }), _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("span", { className: "text-[10px] font-medium text-black/55", children: restaurant.priceRange }), _jsx("span", { className: "text-black/55/30 text-xs", children: "\u2022" }), _jsxs("div", { className: "flex items-center gap-0.5 text-secondary", children: [_jsx(Star, { size: 12, fill: "currentColor" }), _jsx("span", { className: "text-xs font-medium text-primary", children: dummyRating.toFixed(1) })] })] })] }), _jsx(Link, { to: `/restaurant/${restaurant.slug}`, className: "block mb-2", children: _jsx("h3", { className: "font-display text-lg font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-1", children: restaurant.name }) }), _jsxs("p", { className: "text-xs text-black/55 mb-4 flex items-center gap-1", children: [_jsx(MapPinIcon, { size: 14, className: "text-black/55/70" }), restaurant.location] })] }), _jsxs("div", { children: [_jsx("div", { className: "border-t border-outline-variant/10 my-3" }), _jsx("span", { className: "block text-[9px] font-medium text-black/55 tracking-wider uppercase mb-2", children: "QUICK RESERVATION" }), _jsxs("div", { className: "flex flex-wrap gap-1.5", children: [restaurant.availableSlots
                                        .filter((slot) => {
                                        const [slotHour, slotMinute] = slot.split(":").map(Number);
                                        const now = new Date();
                                        const currentHour = now.getHours();
                                        const currentMinute = now.getMinutes();
                                        return slotHour > currentHour || (slotHour === currentHour && slotMinute > currentMinute);
                                    })
                                        .slice(0, 3)
                                        .map((slot) => (_jsx("button", { onClick: (e) => handleSlotClick(e, slot), className: "text-[10px] font-medium border border-outline-variant/60 hover:border-primary px-3 py-1.5 transition-colors cursor-pointer text-black/55 hover:text-primary bg-surface", children: slot }, slot))), _jsx(Link, { to: `/restaurant/${restaurant.slug}`, className: "text-[10px] font-medium border border-outline-variant/20 px-3 py-1.5 transition-colors cursor-pointer text-secondary hover:bg-secondary hover:text-white", children: "ALL SLOTS" })] })] })] })] }));
}
