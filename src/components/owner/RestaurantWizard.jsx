import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Utensils, Upload, Image } from "lucide-react";
import api from "../../lib/api";
import toast from "react-hot-toast";
export default function RestaurantWizard({ setRestaurant }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [priceRange, setPriceRange] = useState("$$");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [chef, setChef] = useState("");
    const [tags, setTags] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [availableSlots, setAvailableSlots] = useState([
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
    ]);
    const [totalSeats, setTotalSeats] = useState("20");
    const [formLoading, setFormLoading] = useState(false);
    const defaultSlots = [
        "12:00",
        "13:00",
        "14:00",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
    ];
    const toggleSlot = (slot) => {
        if (availableSlots.includes(slot)) {
            setAvailableSlots(availableSlots.filter((s) => s !== slot));
        }
        else {
            setAvailableSlots([...availableSlots, slot].sort());
        }
    };
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };
    const handleCreateRestaurant = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("cuisine", cuisine);
            formData.append("priceRange", priceRange);
            formData.append("location", location);
            formData.append("address", address);
            formData.append("chef", chef);
            formData.append("tags", tags);
            formData.append("availableSlots", availableSlots.join(","));
            formData.append("totalSeats", totalSeats);
            if (imageFile) {
                formData.append("image", imageFile);
            }
            const res = await api.post("/owner/restaurant", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setRestaurant(res.data);
            toast.success("Restaurant profile submitted successfully! Awaiting Admin approval.");
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "Failed to register restaurant");
        }
        finally {
            setFormLoading(false);
        }
    };
    return (_jsxs("div", { className: "max-w-2xl mx-auto bg-white border border-outline-variant/20 p-8 md:p-10 shadow-sm rounded-md space-y-6", children: [_jsxs("div", { className: "text-center space-y-2 pb-6 border-b border-outline-variant/10", children: [_jsx(Utensils, { size: 36, className: "mx-auto text-secondary" }), _jsx("h2", { className: "font-display text-xl font-medium text-primary", children: "Setup Restaurant Profile" }), _jsx("p", { className: "text-xs text-black/55", children: "Please create your restaurant details. Once submitted, it will be pending approval from the Admin." })] }), _jsxs("form", { onSubmit: handleCreateRestaurant, className: "space-y-5 text-left", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Restaurant Name" }), _jsx("input", { type: "text", required: true, value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. L'Artiste", className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Cuisine Type" }), _jsx("input", { type: "text", required: true, value: cuisine, onChange: (e) => setCuisine(e.target.value), placeholder: "e.g. French, Omakase", className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm" })] })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Description" }), _jsx("textarea", { required: true, rows: 4, value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Describe the gastronomical experience, atmosphere, and dining philosophy...", className: "w-full bg-surface-container-low/30 border border-outline-variant/40 p-3 text-xs focus:border-secondary focus:outline-none rounded-sm" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Restaurant Cover Image" }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center bg-surface-container-low/30 border border-outline-variant/40 p-4 rounded-sm", children: [_jsx("div", { className: "relative w-32 h-24 bg-surface border border-outline-variant/30 rounded-sm overflow-hidden shrink-0 flex items-center justify-center", children: imagePreview ? (_jsx("img", { src: imagePreview, alt: "Preview", className: "w-full h-full object-cover" })) : (_jsx(Image, { size: 24, className: "text-black/30" })) }), _jsxs("div", { className: "grow space-y-2 text-center md:text-left w-full", children: [_jsx("p", { className: "text-[11px] text-black/55 leading-relaxed", children: "Upload a high-resolution banner photo for your restaurant page. Supports JPG, PNG." }), _jsxs("label", { className: "inline-flex items-center gap-1.5 px-4 py-2 border border-outline-variant/40 hover:border-primary hover:text-primary transition-colors text-[10px] font-medium tracking-wider uppercase rounded-sm cursor-pointer bg-white", children: [_jsx(Upload, { size: 12 }), imageFile ? "Change Image" : "Upload Image", _jsx("input", { type: "file", accept: "image/*", onChange: handleImageChange, className: "hidden" })] }), imageFile && (_jsxs("span", { className: "block text-[10px] text-secondary font-medium", children: ["Selected: ", imageFile.name] }))] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Price Range" }), _jsxs("select", { value: priceRange, onChange: (e) => setPriceRange(e.target.value), className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm", children: [_jsx("option", { value: "$", children: "$ (Casual)" }), _jsx("option", { value: "$$", children: "$$ (Moderate)" }), _jsx("option", { value: "$$$", children: "$$$ (Upscale)" }), _jsx("option", { value: "$$$$", children: "$$$$ (Fine Dining)" })] })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Location (City)" }), _jsx("input", { type: "text", required: true, value: location, onChange: (e) => setLocation(e.target.value), placeholder: "e.g. Manhattan, NY", className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Total Capacity (Seats)" }), _jsx("input", { type: "number", min: "1", required: true, value: totalSeats, onChange: (e) => setTotalSeats(e.target.value), className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Address" }), _jsx("input", { type: "text", required: true, value: address, onChange: (e) => setAddress(e.target.value), placeholder: "123 Gastronomy Lane, New York", className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Executive Chef" }), _jsx("input", { type: "text", required: true, value: chef, onChange: (e) => setChef(e.target.value), placeholder: "Chef Jean-Luc", className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm" })] })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Tags (comma separated)" }), _jsx("input", { type: "text", value: tags, onChange: (e) => setTags(e.target.value), placeholder: "Michelin Star, Romantic, Rooftop", className: "w-full bg-surface-container-low/30 border border-outline-variant/40 px-3 py-2.5 text-xs focus:border-secondary focus:outline-none rounded-sm" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "block text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "Available Slots" }), _jsx("div", { className: "flex flex-wrap gap-2", children: defaultSlots.map((slot) => {
                                    const isSelected = availableSlots.includes(slot);
                                    return (_jsx("button", { type: "button", onClick: () => toggleSlot(slot), className: `py-1.5 px-3 text-[10px] border transition-colors cursor-pointer rounded-sm ${isSelected
                                            ? "bg-primary border-primary text-white"
                                            : "border-outline-variant/40 text-black/55 hover:border-primary"}`, children: slot }, slot));
                                }) })] }), _jsx("button", { type: "submit", disabled: formLoading, className: "w-full bg-primary hover:bg-secondary text-white text-xs font-medium tracking-widest uppercase py-3.5 transition-colors cursor-pointer", children: formLoading ? "SUBMITTING..." : "REGISTER RESTAURANT" })] })] }));
}
