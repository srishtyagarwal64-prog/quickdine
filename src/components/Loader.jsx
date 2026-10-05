import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Loader({ text }) {
    return (_jsxs("div", { className: "min-h-screen bg-surface flex flex-col justify-center items-center", children: [_jsx("div", { className: "w-12 h-12 border-2 border-outline-variant/30 border-t-secondary rounded-full animate-spin" }), _jsx("p", { className: "font-display text-sm tracking-widest text-black/55 mt-4 animate-pulse uppercase", children: text })] }));
}
