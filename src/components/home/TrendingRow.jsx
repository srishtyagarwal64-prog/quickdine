import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RestaurantCard from "../RestaurantCard";
export default function TrendingRow({ trending, loading }) {
    return (_jsx("section", { className: "py-24 bg-surface-container-low/50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-10", children: [_jsxs("div", { className: "flex justify-between items-end mb-12", children: [_jsxs("div", { children: [_jsx("span", { className: "text-[10px] text-secondary tracking-[0.2em] block mb-2 uppercase", children: "CURRENTLY TRENDING" }), _jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold text-primary", children: "Trending Fine Dining" })] }), _jsxs(Link, { to: "/search", className: "text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1.5 group", children: ["VIEW ALL ", _jsx(ArrowRight, { size: 14, className: "group-hover:translate-x-1 transition-transform" })] })] }), loading ? (_jsx("div", { className: "flex justify-center py-16", children: _jsx("div", { className: "w-8 h-8 border-2 border-outline-variant/30 border-t-secondary rounded-full animate-spin" }) })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: trending.slice(0, 3).map((r) => (_jsx(RestaurantCard, { restaurant: r }, r._id))) }))] }) }));
}
