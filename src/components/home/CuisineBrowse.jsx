import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cuisines } from "../../assets/assets";
export default function CuisineBrowse() {
    const navigate = useNavigate();
    const handleCuisineClick = (cuisineName) => {
        navigate(`/search?cuisine=${cuisineName}`);
    };
    return (_jsxs("section", { className: "py-24 max-w-7xl mx-auto px-6 md:px-10", children: [_jsxs("div", { className: "flex justify-between items-end mb-12", children: [_jsxs("div", { children: [_jsx("span", { className: "text-[10px] text-secondary tracking-[0.2em] block mb-2 uppercase", children: "CURATED SELECTION" }), _jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold text-primary", children: "Browse by Cuisine" })] }), _jsxs(Link, { to: "/search", className: "text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1.5 group", children: ["EXPLORE ALL ", _jsx(ArrowRight, { size: 14, className: "group-hover:translate-x-1 transition-transform" })] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6", children: cuisines.map((c) => {
                    const Icon = c.icon;
                    return (_jsxs("button", { onClick: () => handleCuisineClick(c.name), className: "group cursor-pointer text-center py-8 bg-white border border-outline-variant/20 hover:border-secondary transition-soft flex flex-col items-center justify-center", children: [_jsx(Icon, { size: 32, strokeWidth: 1.1, className: "text-black/55 group-hover:text-secondary mb-4 transition-colors" }), _jsx("span", { className: "text-[10px] tracking-widest text-primary", children: c.label })] }, c.name));
                }) })] }));
}
