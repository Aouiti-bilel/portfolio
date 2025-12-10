"use client";
import Link from "next/link";
import Slider from "react-slick";
import { SiGraphql, SiNodedotjs as SiRest, SiNextdotjs, SiRemix, SiTailwindcss } from "react-icons/si";
import { useState } from "react";
import Article1Modal from "./Article1Modal";

type Comparison = {
    id: string;
    title: string;
    description: string;
    slug: string;
    icons: React.ReactNode[];
};

const comparisons: Comparison[] = [
    {
        id: "1",
        title: "GraphQL vs REST",
        description: "Compare pros, cons, and key differences between GraphQL and REST APIs.",
        slug: "graphql-vs-rest",
        icons: [<SiGraphql size={28} />, <SiRest size={28} />],
    },
    {
        id: "2",
        title: "Next.js vs Remix",
        description: "Learn which framework fits your project needs and why.",
        slug: "nextjs-vs-remix",
        icons: [<SiNextdotjs size={28} />, <SiRemix size={28} />],
    },
    {
        id: "3",
        title: "Tailwind vs CSS Modules",
        description: "A quick comparison of utility-first vs component-scoped styling.",
        slug: "tailwind-vs-css-modules",
        icons: [<SiTailwindcss size={28} />],
    },
    {
        id: "4",
        title: "Node.js vs Deno",
        description: "Compare runtime performance, ecosystem, and developer experience.",
        slug: "node-vs-deno",
        icons: [],
    },
    {
        id: "5",
        title: "pnpm vs npm",
        description: "A quick look at package managers and productivity differences.",
        slug: "pnpm-vs-npm",
        icons: [],
    },
];

export default function HeadToHeadSlick() {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (<>
        {openModal === "1" && <Article1Modal onClose={() => setOpenModal(null)} />}
        {openModal === "2" && <Article1Modal onClose={() => setOpenModal(null)} />}
        {openModal === "3" && <Article1Modal onClose={() => setOpenModal(null)} />}
        {openModal === "4" && <Article1Modal onClose={() => setOpenModal(null)} />}
        {openModal === "5" && <Article1Modal onClose={() => setOpenModal(null)} />}

        <section className="relative container mx-auto px-8 py-20 overflow-hidden">
            {/* Background floating shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Title */}
            <div className="text-center mb-12 relative z-10">
                <h2 className="text-4xl font-bold mb-2">Head-to-Head Comparisons</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                    Quickly compare technologies, frameworks, or tools at a glance.
                </p>
            </div>

            {/* Slider */}
            <Slider {...settings}>
                {comparisons.map((comp) => (
                    <div key={comp.id} className="px-2">
                        <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border shadow-md hover:shadow-xl transition-all">
                            <div className="flex gap-2 mb-4">{comp.icons.map((icon, idx) => <div key={idx}>{icon}</div>)}</div>
                            <h3 className="text-xl font-semibold mb-2">{comp.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{comp.description}</p>
                            <div
                                className="rounded-xl overflow-hidden shadow cursor-pointer bg-white/50 dark:bg-white/10"
                                onClick={() => setOpenModal()}
                            >
                                <img src="/blog/webperf.jpg" className="w-full h-40 object-cover" />
                                <div className="p-5">
                                    <h3 className="font-semibold text-lg">Web Performance in 2025</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        Modern techniques to speed up real-world apps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    </>
    );
}
