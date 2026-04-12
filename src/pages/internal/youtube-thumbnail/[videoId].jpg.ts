// Get a youtube video thumbnail and cache it at build time.
// This is to preserve user privacy when they hit a youtube embed on this site.

import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths: GetStaticPaths = async () => {
  const blog = await getCollection("blog");
  const portfolio = await getCollection("portfolio");

  const videoIds = [...blog, ...portfolio]
    .flatMap(
      (entry) => entry.body?.match(/videoId=\{"?([a-zA-Z0-9_-]+)"?\}/g) ?? [],
    )
    .map((match) => match.replace(/videoId=\{"?([a-zA-Z0-9_-]+)"?\}/, "$1"));

  return [...new Set(videoIds)].map((videoId) => ({ params: { videoId } }));
};

export const GET: APIRoute = async ({ params }) => {
  const res = await fetch(
    `https://i.ytimg.com/vi/${params.videoId}/hqdefault.jpg`,
  );
  if (!res.ok) return new Response("Not found", { status: 404 });

  return new Response(res.body, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
