"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts, Post } from "@/data/posts";



export default function BlogPage() {

  return (
    <main className="w-full px-6 md:px-12 py-20">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition duration-300">
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-6">
                {/* <CardHeader className="p-0 mb-4">
                  <CardTitle className="mb-2">{post.title}</CardTitle>
                  <Badge>{post.category}</Badge>
                </CardHeader> */}

                <CardDescription className="mb-4">
                  {post.description}
                </CardDescription>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>

                  <Link href={`/blog/${post.slug}`}>
                    <Button size="sm">Read more →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
