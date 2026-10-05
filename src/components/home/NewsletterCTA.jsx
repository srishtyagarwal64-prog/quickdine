import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import toast from "react-hot-toast";
export default function NewsletterCTA() {
    const handleSubscribe = (e) => {
        e.preventDefault();
        toast.success("Thank you for joining the Culinary Inner Circle!");
    };
    return (_jsx("section", { className: "bg-primary-container text-on-primary py-20 xl:py-32 text-center", children: _jsxs("div", { className: "max-w-2xl mx-auto px-6", children: [_jsx("h2", { className: "font-display text-2xl md:text-3xl text-white mb-4", children: "Join the Culinary Inner Circle" }), _jsx("p", { className: "text-sm text-on-primary-container mb-8 leading-relaxed", children: "Subscribe to receive first access to new openings and seasonal tasting menus." }), _jsxs("form", { onSubmit: handleSubscribe, className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [_jsx("input", { className: "flex-1 bg-white/10 border-b border-on-primary-container/30 focus:border-white text-white text-sm py-3 px-4 outline-none placeholder:text-on-primary-container/70", placeholder: "Email Address", type: "email", required: true }), _jsx("button", { type: "submit", className: "bg-white text-primary hover:bg-secondary hover:text-white transition-soft text-xs tracking-widest uppercase py-3 px-8 cursor-pointer", children: "SUBSCRIBE" })] })] }) }));
}
