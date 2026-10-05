import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XIcon } from "lucide-react";
export default function RequestRejected({ restaurantName }) {
    return (_jsxs("div", { className: "max-w-xl mx-auto bg-white border border-outline-variant/20 p-8 text-center shadow-sm rounded-md space-y-6", children: [_jsx(XIcon, { size: 40, className: "mx-auto text-red-300" }), _jsx("h2", { className: "font-display text-xl font-medium text-primary", children: "Registration Denied" }), _jsxs("p", { className: "text-sm text-black/55 leading-relaxed", children: ["Unfortunately, your request to list ", _jsx("strong", { children: restaurantName }), " has been rejected by our administration team."] }), _jsx("p", { className: "text-xs text-black/55 italic", children: "Please contact customer support for further information." })] }));
}
