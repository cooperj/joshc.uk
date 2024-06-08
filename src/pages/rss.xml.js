import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// Sort the array by date in descending order
function getFeedItems(posts, projects) {
	const blog = posts.map((post) => ({
		...post.data,
		link: `/blog/${post.slug}/`,
		date: new Date(post.data.pubDate),
		categories: ['blog'],
		author: SITE_TITLE,
	}));

	const portfolio = projects.map((project) => ({
		...project.data,
		link: `/portfolio/${project.slug}/`,
		date: new Date(project.data.pubDate),
		categories: ['portfolio'],
		author: SITE_TITLE,
	}));

	const data = blog.concat(portfolio);

	// Sort by date in descending order
	data.sort((a, b) => b.date - a.date);

	return data;
}

export async function GET(context) {
	const posts = await getCollection('blog');
	const projects = await getCollection('portfolio');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: getFeedItems(posts, projects).map(item => ({
			...item,
			date: item.date.toISOString(),  // Convert date back to string format for the RSS feed
		})),
	});
}
