import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { assets } from "../../assets/assets";
export default function Hero() {
    const navigate = useNavigate();
    // Search input states
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("2");
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchQuery)
            params.append("search", searchQuery);
        if (location)
            params.append("location", location);
        if (date)
            params.append("date", date);
        if (guests)
            params.append("guests", guests);
        navigate(`/search?${params.toString()}`);
    };
    return (_jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("img", { alt: "Elegant Dining Room", className: "w-full h-full object-cover brightness-70", src: assets.hero_bg_img }), _jsx("div", { className: "absolute inset-0 bg-black/30" })] }), _jsxs("div", { className: "relative z-10 w-full max-w-7xl px-6 md:px-10 text-center", children: [_jsx("span", { className: "text-sm text-secondary-container tracking-[0.25em] uppercase block mb-4", children: "EXQUISITE DINING EXPERIENCES" }), _jsx("h1", { className: "font-display text-4xl md:text-6xl text-white mb-12 max-w-3xl mx-auto leading-[1.15] font-medium tracking-tight drop-shadow-md", children: "Curation for the Discerning Palette" }), _jsxs("form", { onSubmit: handleSearchSubmit, className: "bg-white p-3 md:p-2.5 ambient-shadow max-w-4xl mx-auto flex flex-col md:flex-row gap-2 ", children: [_jsxs("div", { className: "flex-1 flex items-center border-b md:border-b-0 md:border-r border-outline-variant/30 px-4 py-3", children: [_jsx(Search, { className: "text-outline-variant mr-3 shrink-0", size: 18 }), _jsx("input", { className: "w-full bg-transparent border-none focus:outline-none text-sm text-on-surface placeholder:text-black/55/70", placeholder: "Search cuisines, restaurants...", type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) })] }), _jsxs("div", { className: "flex-1 flex items-center border-b md:border-b-0 md:border-r border-outline-variant/30 px-4 py-3", children: [_jsx(MapPin, { className: "text-outline-variant mr-3 shrink-0", size: 18 }), _jsx("input", { className: "w-full bg-transparent border-none focus:outline-none text-sm text-on-surface placeholder:text-black/55/70", placeholder: "Location (e.g. Manhattan)", type: "text", value: location, onChange: (e) => setLocation(e.target.value) })] }), _jsxs("div", { className: "flex-1 flex items-center border-b md:border-b-0 md:border-r border-outline-variant/30 px-4 py-3", children: [_jsx(Calendar, { className: "text-outline-variant mr-3 shrink-0", size: 18 }), _jsx("input", { className: "w-full bg-transparent border-none focus:outline-none text-sm text-on-surface placeholder:text-black/55/70 cursor-pointer", type: "date", value: date, onChange: (e) => setDate(e.target.value) })] }), _jsxs("div", { className: "flex-1 flex items-center border-b md:border-b-0 md:border-r border-outline-variant/30 px-4 py-3", children: [_jsx(Users, { className: "text-outline-variant mr-3 shrink-0", size: 18 }), _jsxs("select", { className: "w-full bg-transparent border-none focus:outline-none text-sm text-on-surface cursor-pointer", value: guests, onChange: (e) => setGuests(e.target.value), children: [_jsx("option", { value: "1", children: "1 Guest" }), _jsx("option", { value: "2", children: "2 Guests" }), _jsx("option", { value: "4", children: "4 Guests" }), _jsx("option", { value: "6", children: "6 Guests" }), _jsx("option", { value: "8", children: "8 Guests" })] })] }), _jsx("button", { type: "submit", className: "bg-primary text-on-primary text-xs tracking-widest uppercase px-8 py-4 md:py-3 hover:bg-secondary hover:text-white transition-soft cursor-pointer", children: "FIND A TABLE" })] })] })] }));
}
