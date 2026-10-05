import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import RestaurantDetail from "./pages/RestaurantDetail";
import BookingConfirmation from "./pages/BookingConfirmation";
import Dashboard from "./pages/Dashboard";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Toaster, { position: "bottom-right", toastOptions: {
                    style: {
                        background: "#1a1c1c",
                        color: "#ffffff",
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "12px",
                        letterSpacing: "0.02em",
                        borderRadius: "4px",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                    },
                } }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/search", element: _jsx(Search, {}) }), _jsx(Route, { path: "/restaurant/:slug", element: _jsx(RestaurantDetail, {}) }), _jsx(Route, { path: "/booking/:slug", element: _jsx(ProtectedRoute, { children: _jsx(BookingConfirmation, {}) }) }), _jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "/owner/dashboard", element: _jsx(ProtectedRoute, { allowedRoles: ["owner"], children: _jsx(OwnerDashboard, {}) }) }), _jsx(Route, { path: "/admin/dashboard", element: _jsx(ProtectedRoute, { allowedRoles: ["admin"], children: _jsx(AdminDashboard, {}) }) })] })] }));
}
