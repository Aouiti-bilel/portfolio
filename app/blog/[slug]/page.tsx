"use client";

import { useState } from "react";
import Article1Modal from "@/components/Article1Modal";

// add 4 & 5 when needed

export default function BlogPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center">Technical Articles</h1>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* ARTICLE 1 */}
        <div
          className="rounded-xl overflow-hidden shadow cursor-pointer bg-white/50 dark:bg-white/10"
          onClick={() => setOpenModal("article1")}
        >
          <img src="/blog/graphql-rest.jpg" className="w-full h-40 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg">GraphQL vs REST</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              Learn the biggest differences between GraphQL and REST.
            </p>
          </div>
        </div>

        {/* ARTICLE 2 */}
        <div
          className="rounded-xl overflow-hidden shadow cursor-pointer bg-white/50 dark:bg-white/10"
          onClick={() => setOpenModal("article2")}
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

      {/* MODALS */}
      {openModal === "article1" && <Article1Modal onClose={() => setOpenModal(null)} />}
      {/* {openModal === "article2" && <Article2Modal onClose={() => setOpenModal(null)} />} */}
      {/* add more */}
    </div>
  );
}
