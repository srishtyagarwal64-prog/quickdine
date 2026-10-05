import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Users, ShieldCheck, Utensils, Calendar } from "lucide-react";
export default function AdminStats({ stats }) {
    if (!stats)
        return null;
    const kpiCards = [
        { title: "Active Diners", value: stats.users?.totalUsers, icon: Users },
        { title: "Partners", value: stats.users?.totalOwners, icon: ShieldCheck },
        { title: "Total Venues", value: stats.restaurants?.total, icon: Utensils },
        { title: "Bookings", value: stats.bookings?.total, icon: Calendar },
    ];
    return (_jsxs("div", { className: "space-y-8 text-left", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: kpiCards.map(({ title, value, icon: Icon }) => (_jsxs("div", { className: "bg-white border border-outline-variant/20 p-5 rounded-md shadow-sm space-y-2", children: [_jsxs("span", { className: "text-[10px] font-medium tracking-wider text-black/55 uppercase flex items-center gap-1.5", children: [_jsx(Icon, { size: 12, className: "text-secondary" }), title] }), _jsx("h4", { className: "font-display text-2xl font-medium text-primary", children: value })] }, title))) }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-display text-lg font-medium text-primary", children: "Recent Bookings Activity" }), stats.latestBookings?.length === 0 ? (_jsx("p", { className: "text-xs text-black/40 italic", children: "No bookings recorded on the platform." })) : (_jsx("div", { className: "bg-white border border-outline-variant/20 rounded-md overflow-hidden shadow-sm", children: _jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [_jsx("thead", { children: _jsx("tr", { className: "bg-surface-container-low border-b border-outline-variant/10 text-[10px] tracking-wider text-black/55 uppercase", children: ["Ref Code", "Diner", "Restaurant", "Details", "Status"].map((header) => (_jsx("th", { className: `p-4 ${header === "Status" ? "text-right" : ""}`, children: header }, header))) }) }), _jsx("tbody", { className: "divide-y divide-outline-variant/10", children: stats.latestBookings.map((b) => (_jsxs("tr", { className: "hover:bg-surface/50", children: [_jsx("td", { className: "p-4 text-primary", children: b.bookingId }), _jsxs("td", { className: "p-4", children: [_jsx("div", { className: "text-primary", children: b.user?.name }), _jsx("div", { className: "text-[10px] text-black/50", children: b.user?.email })] }), _jsx("td", { className: "p-4 text-primary", children: b.restaurant?.name || "Deleted Restaurant" }), _jsxs("td", { className: "p-4 text-black/55", children: [new Date(b.date).toLocaleDateString(), " at ", b.time, " PM \u2022 ", b.guests, " Guests"] }), _jsx("td", { className: "p-4 text-right", children: _jsx("span", { className: `inline-block py-0.5 px-2 text-[9px] tracking-wider uppercase rounded-sm ${b.status === "confirmed"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : b.status === "completed"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-error-container text-on-error-container"}`, children: b.status }) })] }, b._id))) })] }) }))] })] }));
}
