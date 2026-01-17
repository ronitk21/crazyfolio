// app/sitemap.ts
import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ronitkedia.com";

  const staticRoutes = ["", "/contact", "/projects", "/hire-me"];

  const blogRoutes = blogs.map((blog) => `/blogs/${blog.link}`);

  const projectRoutes = projects
    .map((project) => project.page)
    .filter((page): page is string => Boolean(page && page.startsWith("/")));

  const allRoutes = [...staticRoutes, ...blogRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
