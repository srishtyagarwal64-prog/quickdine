import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import api from "../lib/api";
import toast from "react-hot-toast";
import Hero from "../components/home/Hero";
import CuisineBrowse from "../components/home/CuisineBrowse";
import TrendingRow from "../components/home/TrendingRow";
import MembershipSection from "../components/home/MembershipSection";
import NewsletterCTA from "../components/home/NewsletterCTA";
export default function Home() {
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const res = await api.get("/restaurants/featured");
                setTrending(res.data);
            }
            catch (error) {
                toast.error(error?.response?.data?.message || error?.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchTrending();
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-surface flex flex-col pt-0", children: [_jsx(Navbar, {}), _jsx(AuthModal, {}), _jsxs("main", { className: "flex-1", children: [_jsx(Hero, {}), _jsx(CuisineBrowse, {}), _jsx(TrendingRow, { trending: trending, loading: loading }), _jsx(MembershipSection, {}), _jsx(NewsletterCTA, {})] }), _jsx(Footer, {})] }));
}
