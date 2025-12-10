// data/posts.ts

export type Post = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  content: string; // full HTML or markdown later
};

export const posts: Post[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2025",
    slug: "future-of-web-development-2025",
    description: "A deep dive into modern frameworks, AI-assisted coding, and the evolution of UX/UI.",
    image: "/images/posts/post1.jpg",
    date: "2025-01-06",
    author: "Bilel",
    tags: ["Next.js", "Frontend", "AI"],
    content: `
      <p>Web development is changing faster than ever...</p>
      <p>This is the full article content...</p>
    `,
  },

  {
    id: "2",
    title: "How I Built My Portfolio with Next.js & shadcn/ui",
    slug: "portfolio-with-nextjs-shadcn",
    description: "Everything from components, animations, themes, and performance tips.",
    image: "/images/posts/post2.jpg",
    date: "2025-01-04",
    author: "Bilel",
    tags: ["Portfolio", "Next.js", "UI"],
    content: `
      <p>Building a modern portfolio requires clean design...</p>
    `,
  },

  {
    id: "3",
    title: "Understanding React Server Components",
    slug: "react-server-components",
    description: "RSC is the present and future of fast web apps.",
    image: "/images/posts/post3.jpg",
    date: "2025-01-02",
    author: "Bilel",
    tags: ["React", "RSC"],
    content: `
      <p>React Server Components allow you to...</p>
    `,
  },

,

  {
    id: "5",
    title: "Why Developers Should Learn TypeScript in 2025",
    slug: "learn-typescript-2025",
    description: "TypeScript isn't optional anymore — here's why.",
    image: "/images/posts/post5.jpg",
    date: "2024-12-28",
    author: "Bilel",
    tags: ["TypeScript"],
    content: "<p>TypeScript helps you avoid bugs...</p>",
  },

  {
    id: "6",
    title: "Building Fast UIs with Server Actions",
    slug: "server-actions-guide",
    description: "A simple explanation of how Server Actions work in Next.js 15/16.",
    image: "/images/posts/post6.jpg",
    date: "2024-12-20",
    author: "Bilel",
    tags: ["Next.js", "Backend"],
    content: "<p>Server actions are the future of backend inside Next.js...</p>",
  },
];
