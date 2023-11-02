import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '',
	integrations: [
		starlight({
			title: 'airdb.wiki',
			social: {
				github: 'https://github.com/airdb-wiki/airdb-wiki.github.io',
				discord: 'https://discord.com/invite/Mp4xttEqnF',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guide', link: '/guides/example', badge: 'Welcome' },
						{ label: 'Today', link: '/guides/today', badge: 'New' },
					],
				},
				{ label: 'AI', collapsed: true, autogenerate: { directory: 'ai' },},
				{ label: 'Blockchain', collapsed: true, autogenerate: { directory: 'blockchain' },},
				{ label: 'Cloud Computing', collapsed: true, autogenerate: { directory: 'blockchain' }, },
				{ label: 'Data', collapsed: true, autogenerate: { directory: 'bigdata' }, },
				{ label: 'Energy', collapsed: true, autogenerate: { directory: 'energy' }, },
				{ label: 'Fintech', collapsed: true, autogenerate: { directory: 'fintech' },},
				{ label: 'Security', collapsed: true, autogenerate: { directory: 'security' },},
				{ label: 'DevOps', collapsed: true, autogenerate: { directory: 'devops' },},
				{
					label: 'Team', collapsed: true,
					items: [
						{ label: 'Team Management', collapsed: true, autogenerate: { directory: 'mgmt' },},
						{ label: 'Culture', collapsed: true, autogenerate: { directory: 'culture' },},
						{ label: 'Academy', collapsed: true, autogenerate: { directory: 'academy' },},
						{ label: 'Interview', collapsed: true, autogenerate: { directory: 'interview' },},
						{ label: 'Style', collapsed: true, autogenerate: { directory: 'style' }, },
					],
				},
				{
					label: 'IaaS', collapsed: true,
						items: [
						{ label: 'Network', collapsed: true, autogenerate: { directory: 'network' },},
						{ label: 'OS',collapsed: true, autogenerate: { directory: 'os' },},
						{ label: 'Gateway', collapsed: true, autogenerate: { directory: 'gateway' },},
					],
				},
				{
					label: 'About', collapsed: true,
						items: [
							{ label: 'Contribution', collapsed: true, autogenerate: { directory: 'contribution' }, },
							{ label: 'Fundation', collapsed: true,	autogenerate: { directory: 'fund' },},
							{ label: 'About', collapsed: true, autogenerate: { directory: 'about' }, }
					],
				},
			],
		}),
	],
});
