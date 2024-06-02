import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// TODO: Sort this array 
function getFeedItems(posts, projects) {
	const blog = posts.map((post) => ({
		...post.data,
		link: `/blog/${post.slug}/`,
	}))

	const portfolio = (projects.map((project) => ({
		...project.data,
		link: `/portfolio/${project.slug}/`,
	})))

	const data = blog.concat(portfolio)

	return data
}

export async function GET(context) {
	const posts = await getCollection('blog');
	const projects = await getCollection('portfolio');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: getFeedItems(posts, projects),
	});
}
