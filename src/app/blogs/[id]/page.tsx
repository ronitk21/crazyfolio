"use client";

import { blogs } from "@/data/blogs";
import { usePathname } from "next/navigation";

const BlogPage = () => {
  const path = usePathname();
  const slug = path.split("/blogs/")[1];

  const blog = blogs.find((blog) => blog.link == slug);

  if (!blog) return <p>Could not find blog</p>;

  return (
    <div className="my-10 flex flex-col text-pretty space-y-4">
      <h1 className="text-4xl sm:text-6xl font-instrument ">{blog.title}</h1>
      <p className="text-muted-foreground">{blog.description}</p>
      <p>coming soon...</p>
    </div>
  );
};

export default BlogPage;
