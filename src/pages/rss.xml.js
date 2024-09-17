import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

// Sort the array by date in descending order
function getFeedItems(posts, projects) {
  const blog = posts.map((post) => ({
    ...post.data,
    link: `/blog/${post.slug}/`,
    date: new Date(post.data.pubDate),
    categories:
      post.data.tags && post.data.tags.length > 1
        ? ["blog", ...post.data.tags]
        : ["blog"],
    author: SITE_TITLE,
  }));

  const portfolio = projects.map((project) => ({
    ...project.data,
    link: `/portfolio/${project.slug}/`,
    date: new Date(project.data.pubDate),
    categories:
      project.data.tags && project.data.tags.length > 1
        ? ["portfolio", ...project.data.tags]
        : ["portfolio"],
    author: SITE_TITLE,
  }));

  // Sort by date in descending order
  const data = blog.concat(portfolio);
  data.sort((a, b) => b.date - a.date);
  return data;
}

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  const projects = await getCollection("portfolio", ({ data }) => {
    return data.draft !== true;
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: getFeedItems(posts, projects).map((item) => ({
      ...item,
      date: item.date.toISOString(), // Convert date back to string format for the RSS feed
    })),
  });
}
