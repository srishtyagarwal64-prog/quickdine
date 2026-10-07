import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Star } from "lucide-react";

import { dummyRating, dummyReviewCount } from "../../assets/assets";

export default function RestaurantHero({ restaurant }) {

    if (!restaurant)
        return null;

    return (_jsxs("section", {
        className: "relative h-[480px] w-full overflow-hidden text-left animate-in fade-in duration-500",
        children: [
            _jsx("img", {
                src: restaurant?._id
                    ? `${import.meta.env.VITE_API_URL}/restaurants/${restaurant._id}/image`
                    : "",
                alt: restaurant.name,
                className: "w-full h-full object-cover brightness-[0.7]"
            }),

            _jsx("div", {
                className: "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
            }),

            _jsx("div", {
                className: "absolute bottom-0 inset-x-0 py-12",
                children: _jsx("div", {
                    className: "max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6",
                    children: _jsxs("div", {
                        className: "space-y-3",
                        children: [
                            _jsxs("div", {
                                className: "flex flex-wrap gap-2 items-center",
                                children: [
                                    _jsx("span", {
                                        className: "text-[10px] font-medium tracking-widest text-secondary-container bg-secondary py-1 px-3 uppercase",
                                        children: restaurant.cuisine
                                    }),

                                    restaurant.exclusive && (_jsx("span", {
                                        className: "text-[10px] font-medium tracking-widest text-white bg-primary border border-white/20 py-1 px-3 uppercase",
                                        children: "EXCLUSIVE CLUB"
                                    }))
                                ]
                            }),

                            _jsx("h1", {
                                className: "font-display text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight",
                                children: restaurant.name
                            }),

                            _jsxs("div", {
                                className: "flex items-center gap-4 text-white/90 text-xs",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-1 text-secondary-container",
                                        children: [
                                            _jsx(Star, {
                                                size: 14,
                                                fill: "currentColor"
                                            }),
                                            _jsx("span", {
                                                className: "font-medium text-white",
                                                children: dummyRating.toFixed(1)
                                            })
                                        ]
                                    }),

                                    _jsx("span", {
                                        children: "\u2022"
                                    }),

                                    _jsxs("span", {
                                        children: [
                                            dummyReviewCount,
                                            " Reviews"
                                        ]
                                    }),

                                    _jsx("span", {
                                        children: "\u2022"
                                    }),

                                    _jsxs("span", {
                                        children: [
                                            "Price: ",
                                            restaurant.priceRange
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
}
