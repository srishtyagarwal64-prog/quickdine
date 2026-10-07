import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { Star, MapPinIcon } from "lucide-react";
import { dummyRating } from "../assets/assets";

export default function RestaurantCard({ restaurant }) {
    const navigate = useNavigate();

    const handleSlotClick = (e, slot) => {
        e.preventDefault();
        e.stopPropagation();

        const today = new Date().toISOString().split("T")[0];

        // Redirect to booking details confirmation with slot and today's date pre-selected
        navigate(`/booking/${restaurant.slug}?slot=${slot}&date=${today}`);
    };

    return (_jsxs("div", {
        className: "group relative bg-white border border-outline-variant/10 card-hover-effect overflow-hidden rounded-md flex flex-col h-full",

        children: [
            _jsxs(Link, {
                to: `/restaurant/${restaurant.slug}`,
                className: "relative h-60 overflow-hidden block",

                children: [
                    _jsx("img", {
                        src: restaurant?._id
                            ? `${import.meta.env.VITE_API_URL}/restaurants/${restaurant._id}/image`
                            : "",
                        alt: restaurant.name,
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                        loading: "lazy"
                    }),

                    _jsx("div", {
                        className: "absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"
                    }),

                    _jsxs("div", {
                        className: "absolute bottom-4 left-4 flex flex-wrap gap-2",

                        children: [
                            restaurant.exclusive && (_jsx("span", {
                                className: "text-[9px] font-medium tracking-widest text-white bg-secondary py-1 px-2.5 uppercase",
                                children: "EXCLUSIVE"
                            })),

                            restaurant.featured && (_jsx("span", {
                                className: "text-[9px] font-medium tracking-widest text-on-primary bg-primary py-1 px-2.5 uppercase",
                                children: "RECOMMENDED"
                            }))
                        ]
                    })
                ]
            }),

            // baaki tumhara existing code same rahega...
        ]
    }));
}
