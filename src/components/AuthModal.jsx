import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { X, Mail, Lock, User, Phone } from "lucide-react";
export default function AuthModal() {
    const { isAuthModalOpen, setAuthModalOpen, login, register } = useAppContext();
    const [isLoginTab, setIsLoginTab] = useState(true);
    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isOwner, setIsOwner] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    if (!isAuthModalOpen)
        return null;
    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setIsOwner(false);
    };
    const handleClose = () => {
        resetForm();
        setAuthModalOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        let success;
        if (isLoginTab) {
            success = await login(email, password);
        }
        else {
            success = await register(name, email, password, phone, isOwner ? "owner" : "user");
        }
        setFormLoading(false);
        if (success) {
            handleClose();
        }
    };
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: [_jsx("div", { className: "absolute inset-0", onClick: handleClose }), _jsxs("div", { className: "relative w-full max-w-md bg-white border border-outline-variant/30 ambient-shadow rounded-lg overflow-hidden z-10 transition-soft transform scale-100 flex flex-col", children: [_jsx("button", { onClick: handleClose, className: "absolute top-4 right-4 text-black/55 hover:text-primary transition-colors cursor-pointer", "aria-label": "Close", children: _jsx(X, { size: 20 }) }), _jsxs("div", { className: "flex border-b border-outline-variant/20", children: [_jsx("button", { onClick: () => setIsLoginTab(true), className: `flex-1 py-5 text-center text-xs font-medium tracking-widest transition-soft cursor-pointer ${isLoginTab
                                    ? "text-primary border-b-2 border-primary bg-surface-container-lowest"
                                    : "text-black/55 hover:text-primary bg-surface-container-low/50"}`, children: "SIGN IN" }), _jsx("button", { onClick: () => setIsLoginTab(false), className: `flex-1 py-5 text-center text-xs font-medium tracking-widest transition-soft cursor-pointer ${!isLoginTab
                                    ? "text-primary border-b-2 border-primary bg-surface-container-lowest"
                                    : "text-black/55 hover:text-primary bg-surface-container-low/50"}`, children: "SIGN UP" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "p-8 space-y-6 flex-1 flex flex-col justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "font-display text-2xl font-medium text-primary tracking-tight", children: "Welcome to QuickDine" }), _jsx("p", { className: "text-xs text-black/55 mt-2 leading-relaxed", children: "Access your exclusive reservations and curated dining profile." })] }), _jsxs("div", { className: "space-y-5", children: [!isLoginTab && (_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "FULL NAME" }), _jsxs("div", { className: "relative", children: [_jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55", children: _jsx(User, { size: 16 }) }), _jsx("input", { type: "text", required: !isLoginTab, value: name, onChange: (e) => setName(e.target.value), placeholder: "Sarah Jenkins", className: "w-full pl-7 pb-2 pt-1 text-sm bg-transparent border-b border-outline-variant/60 focus:border-secondary focus:outline-none transition-colors" })] })] })), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "EMAIL ADDRESS" }), _jsxs("div", { className: "relative", children: [_jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55", children: _jsx(Mail, { size: 16 }) }), _jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@example.com", className: "w-full pl-7 pb-2 pt-1 text-sm bg-transparent border-b border-outline-variant/60 focus:border-secondary focus:outline-none transition-colors" })] })] }), !isLoginTab && (_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "PHONE NUMBER (OPTIONAL)" }), _jsxs("div", { className: "relative", children: [_jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55", children: _jsx(Phone, { size: 16 }) }), _jsx("input", { type: "tel", value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "+1 (555) 000-0000", className: "w-full pl-7 pb-2 pt-1 text-sm bg-transparent border-b border-outline-variant/60 focus:border-secondary focus:outline-none transition-colors" })] })] })), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase", children: "PASSWORD" }), _jsxs("div", { className: "relative", children: [_jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55", children: _jsx(Lock, { size: 16 }) }), _jsx("input", { type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "w-full pl-7 pb-2 pt-1 text-sm bg-transparent border-b border-outline-variant/60 focus:border-secondary focus:outline-none transition-colors" })] })] }), !isLoginTab && (_jsxs("div", { className: "flex items-center gap-2.5 pt-2", children: [_jsx("input", { type: "checkbox", id: "isOwner", checked: isOwner, onChange: (e) => setIsOwner(e.target.checked), className: "h-4 w-4 accent-secondary rounded border-outline-variant/60 cursor-pointer" }), _jsx("label", { htmlFor: "isOwner", className: "text-xs text-black/55 select-none cursor-pointer", children: "I am a Restaurant Owner / Manager" })] }))] })] }), _jsxs("div", { className: "mt-8", children: [_jsx("button", { type: "submit", disabled: formLoading, className: "w-full bg-primary hover:bg-primary-container text-white py-3.5 px-4 text-xs font-medium tracking-widest uppercase hover:text-secondary focus:outline-none transition-colors disabled:opacity-75 cursor-pointer", children: formLoading ? "PROCESSING..." : isLoginTab ? "LOGIN" : "CREATE ACCOUNT" }), _jsxs("p", { className: "text-center text-[11px] text-black/55/80 mt-4 leading-relaxed", children: ["By signing in, you agree to our", " ", _jsx("a", { href: "#", className: "underline hover:text-primary", children: "Terms of Service" }), "."] })] })] })] })] }));
}
