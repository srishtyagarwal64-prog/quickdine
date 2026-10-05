import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, Users } from "lucide-react";
export default function BookingWidget({ restaurant, selectedDate, setSelectedDate, selectedGuests, setSelectedGuests, selectedSlot, setSelectedSlot, slotsAvailability, loadingSlots, isAuthenticated, handleReserveClick, }) {
    if (!restaurant)
        return null;
    return (_jsxs("div", { className: "bg-white border border-outline-variant/20 p-6 rounded-md shadow-sm text-left", children: [_jsx("h3", { className: "font-display text-lg font-medium text-primary mb-4 pb-3 border-b border-outline-variant/10", children: "Book a Table" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "PARTY SIZE" }), _jsxs("div", { className: "relative", children: [_jsx(Users, { className: "absolute left-3 top-3 text-black/55", size: 16 }), _jsxs("select", { value: selectedGuests, onChange: (e) => setSelectedGuests(e.target.value), className: "w-full bg-surface-container-low/30 pl-9 pr-3 py-2.5 text-xs border border-outline-variant/40 focus:border-secondary focus:outline-none rounded-md cursor-pointer", children: [_jsx("option", { value: "1", children: "1 Guest" }), _jsx("option", { value: "2", children: "2 Guests" }), _jsx("option", { value: "4", children: "4 Guests" }), _jsx("option", { value: "6", children: "6 Guests" }), _jsx("option", { value: "8", children: "8 Guests" })] })] })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "DATE" }), _jsxs("div", { className: "relative", children: [_jsx(Calendar, { className: "absolute left-3 top-3 text-black/55", size: 16 }), _jsx("input", { type: "date", value: selectedDate, onChange: (e) => setSelectedDate(e.target.value), min: new Date().toISOString().split("T")[0], className: "w-full bg-surface-container-low/30 pl-9 pr-3 py-2.5 text-xs border border-outline-variant/40 focus:border-secondary focus:outline-none rounded-md cursor-pointer" })] })] }), _jsxs("div", { className: "space-y-2 pt-2", children: [_jsx("span", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "AVAILABLE TIMES" }), _jsx("div", { className: "grid grid-cols-3 gap-2", children: loadingSlots ? (_jsx("div", { className: "col-span-3 py-4 text-center flex justify-center", children: _jsx("div", { className: "w-5 h-5 border-2 border-outline-variant/30 border-t-secondary rounded-full animate-spin" }) })) : ((() => {
                                    const todayStr = new Date().toISOString().split("T")[0];
                                    const isToday = selectedDate === todayStr;
                                    const allSlots = slotsAvailability.length > 0
                                        ? slotsAvailability
                                        : (restaurant.availableSlots || []).map((s) => ({
                                            time: s,
                                            availableSeats: 20,
                                            isAvailable: true,
                                        }));
                                    return allSlots.filter((slotInfo) => {
                                        if (!isToday)
                                            return true;
                                        const [slotHour, slotMinute] = slotInfo.time.split(":").map(Number);
                                        const now = new Date();
                                        const currentHour = now.getHours();
                                        const currentMinute = now.getMinutes();
                                        return slotHour > currentHour || (slotHour === currentHour && slotMinute > currentMinute);
                                    });
                                })().map((slotInfo) => {
                                    const slot = slotInfo.time;
                                    const isSelected = selectedSlot === slot;
                                    const isFull = !slotInfo.isAvailable || slotInfo.availableSeats < Number(selectedGuests);
                                    return (_jsxs("button", { type: "button", disabled: isFull, onClick: () => setSelectedSlot(slot), className: `py-2 px-1 text-center text-[10px] font-medium tracking-wider uppercase border transition-all rounded-sm ${isSelected
                                            ? "bg-secondary border-secondary text-white shadow-sm cursor-pointer"
                                            : isFull
                                                ? "bg-black/5 border-outline-variant/10 text-black/25 cursor-not-allowed opacity-50"
                                                : "border-outline-variant/40 text-black/55 hover:border-primary hover:text-primary cursor-pointer"}`, children: [slot, isFull && _jsx("span", { className: "block text-[8px] text-error uppercase mt-0.5", children: "Full" })] }, slot));
                                })) })] }), _jsx("button", { onClick: handleReserveClick, className: "w-full bg-primary hover:bg-secondary text-on-primary py-4 mt-6 text-xs font-medium tracking-widest uppercase transition-colors cursor-pointer", children: isAuthenticated ? "RESERVE NOW" : "AUTHENTICATE TO RESERVE" }), _jsx("p", { className: "text-center text-[10px] text-black/55 mt-3 leading-relaxed", children: "No reservation fee. Cancel for free up to 24 hours prior." })] })] }));
}
