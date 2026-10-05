import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppContext } from "../context/AppContext";
import { ShieldAlert } from "lucide-react";
import AuthModal from "./AuthModal";
import Loader from "./Loader";
export default function ProtectedRoute({ children, allowedRoles }) {
    const { isAuthenticated, user, loading, setAuthModalOpen } = useAppContext();
    if (loading) {
        return _jsx(Loader, { text: "Loading Club Access..." });
    }
    if (!isAuthenticated) {
        return (_jsx("div", { className: "min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-center", children: _jsxs("div", { className: "max-w-md bg-white border border-outline-variant/20 p-10 ambient-shadow rounded-lg flex flex-col items-center", children: [_jsx(ShieldAlert, { size: 40, className: "text-secondary mb-6" }), _jsx("h2", { className: "font-display text-2xl text-primary mb-3", children: "Login to continue" }), _jsx("p", { className: "text-sm text-black/55 mb-8 leading-relaxed", children: "Reservation booking and dashboard management are reserved exclusively for registered QuickDine members." }), _jsxs("div", { className: "flex flex-col gap-3 w-full", children: [_jsx("button", { onClick: () => setAuthModalOpen(true), className: "w-full bg-primary hover:bg-primary-container text-white py-3.5 px-4 text-xs font-medium tracking-widest uppercase hover:text-secondary focus:outline-none transition-colors cursor-pointer", children: "AUTHENTICATE" }), _jsx(AuthModal, {})] })] }) }));
    }
    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        return (_jsx("div", { className: "min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-center", children: _jsxs("div", { className: "max-w-md bg-white border border-outline-variant/20 p-10 ambient-shadow rounded-lg flex flex-col items-center", children: [_jsx(ShieldAlert, { size: 40, className: "text-error mb-6" }), _jsx("h2", { className: "font-display text-2xl text-primary mb-3", children: "Access Denied" }), _jsx("p", { className: "text-sm text-black/55 mb-8 leading-relaxed", children: "You do not have the required permissions to access this dashboard." })] }) }));
    }
    return _jsx(_Fragment, { children: children });
}
