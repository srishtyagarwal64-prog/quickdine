import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import api from "../../lib/api";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { ShieldCheckIcon, CheckCircleIcon, BarChart3Icon } from "lucide-react";
// Subcomponents
import AdminApprovals from "../../components/admin/AdminApprovals";
import AdminStats from "../../components/admin/AdminStats";
export default function AdminDashboard() {
    const { logout } = useAppContext();
    const [restaurants, setRestaurants] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("approvals");
    const [btnLoading, setBtnLoading] = useState(null);
    const fetchAdminData = async () => {
        try {
            setLoading(true);
            const rRes = await api.get("/admin/restaurants");
            setRestaurants(rRes.data);
            const sRes = await api.get("/admin/stats");
            setStats(sRes.data);
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "Failed to retrieve administrator data");
        }
        finally {
            setLoading(false);
        }
    };
    const handleApproveStatus = async (restaurantId, status) => {
        try {
            setBtnLoading(restaurantId);
            await api.put(`/admin/restaurants/${restaurantId}/approve`, { status });
            toast.success(`Restaurant has been marked as ${status.toUpperCase()}`);
            // Reload local list and stats
            const rRes = await api.get("/admin/restaurants");
            setRestaurants(rRes.data);
            const sRes = await api.get("/admin/stats");
            setStats(sRes.data);
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "Failed to update restaurant approval status");
        }
        finally {
            setBtnLoading(null);
        }
    };
    useEffect(() => {
        (async () => await fetchAdminData())();
    }, []);
    if (loading) {
        return _jsx(Loader, { text: "Loading Master Admin Console..." });
    }
    // Segregate pending / other restaurants
    const pendingRestaurants = restaurants.filter((r) => r.status === "pending");
    const otherRestaurants = restaurants.filter((r) => r.status !== "pending");
    return (_jsxs("div", { className: "min-h-screen bg-surface flex flex-col pt-20", children: [_jsx(Navbar, {}), _jsxs("main", { className: "grow max-w-7xl w-full mx-auto px-6 md:px-10 py-12", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant/10 pb-8 mb-8 text-left", children: [_jsxs("div", { children: [_jsxs("h1", { className: "font-display text-2xl md:text-3xl font-medium text-primary flex items-center gap-2", children: [_jsx(ShieldCheckIcon, { size: 28, className: "text-secondary" }), " Admin Console"] }), _jsx("p", { className: "text-xs text-black/55 mt-1.5", children: "Approve new restaurant partners, audit active slots listings, and review platform booking metrics." })] }), _jsx("button", { onClick: logout, className: "bg-error-container hover:bg-error-container/85 text-error px-4 py-2 text-[10px] font-medium tracking-widest uppercase transition-colors rounded-sm cursor-pointer", children: "Sign Out" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [_jsx("aside", { className: "lg:col-span-3 space-y-6 bg-white border border-outline-variant/20 p-6 rounded-md shadow-sm h-fit", children: _jsxs("nav", { className: "flex flex-col gap-1.5", children: [_jsxs("button", { onClick: () => setActiveTab("approvals"), className: `w-full flex items-center gap-3 px-4 py-3 text-xs font-medium tracking-wider uppercase text-left rounded-sm cursor-pointer transition-colors ${activeTab === "approvals" ? "bg-primary text-white" : "text-black/55 hover:bg-surface"}`, children: [_jsx(CheckCircleIcon, { size: 14 }), "Approvals (", pendingRestaurants.length, " Pending)"] }), _jsxs("button", { onClick: () => setActiveTab("stats"), className: `w-full flex items-center gap-3 px-4 py-3 text-xs font-medium tracking-wider uppercase text-left rounded-sm cursor-pointer transition-colors ${activeTab === "stats" ? "bg-primary text-white" : "text-black/55 hover:bg-surface"}`, children: [_jsx(BarChart3Icon, { size: 14 }), "Analytics & Stats"] })] }) }), _jsxs("div", { className: "lg:col-span-9 space-y-8", children: [activeTab === "approvals" && (_jsx(AdminApprovals, { pendingRestaurants: pendingRestaurants, otherRestaurants: otherRestaurants, btnLoading: btnLoading, onApproveStatus: handleApproveStatus })), activeTab === "stats" && stats && _jsx(AdminStats, { stats: stats })] })] })] }), _jsx(Footer, {})] }));
}
