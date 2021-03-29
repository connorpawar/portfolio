const baseUrl = 'https://github.com/connorpawar/portfolio';

const siteConfig = {
	copyright: `Copyright © ${new Date().getFullYear()} Connor Pawar. All Rights Reserved.`,
	author: {
		name: 'Connor Pawar',
		github: 'https://github.com/connorpawar',
		linkedin: 'https://linkedin.com/in/connorpawar',
		email: 'connorpawar@gmail.com',
	},
	repo: {
		url: baseUrl,
		editUrl: `${baseUrl}/edit/develop`,
	},
	seo: {
		title: 'Connor Pawar',
		titleTemplate: '%s - Connor Pawar',
		description:
			'Connor Pawar - Fullstack Software Developer',
		siteUrl: 'https://connorpawar.com',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: 'https://connorpawar.com',
			title: 'Connor Pawar',
			description:
				'Connor Pawar - Fullstack Software Developer',
			site_name: `Connor Pawar's Portfolio Site!`,
			images: [
				{
					url: '/og-image.png',
					width: 1240,
					height: 480,
					alt:
						'Connor Pawar - Fullstack Software Developer',
				},
			],
		},
	},
};

export default siteConfig;
