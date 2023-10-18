import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '',
	integrations: [
		starlight({
			title: 'airdb.wiki',
			social: {
				github: 'https://github.com/airdb/wiki',
				discord: 'https://discord.com/invite/Mp4xttEqnF',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guide', link: '/guides/example', badge: 'Welcome' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
					
				},
				{
					label: 'Cloud-Native',
					collapsed: true,
					items: [
						{
							label: 'docker', items: [
								{ label: 'Example Guide', link: '/cloud-native/docker/readme' , badge: 'New',},
								{ label: 'Example Guide 2', link: '/cloud-native/docker/compose', badge: { text: 'Experimental', variant: 'caution' }, },
							]
						},
						{
							label: 'kube', items: [
								{ label: 'Example Guide', link: '/cloud-native/kube/readme' },
								{ label: 'Example Guide 2', link: '/cloud-native/kube/1-kubernetes-on-macos' },
								{ label: 'Example Guide 3', link: '/cloud-native/kube/helm' },
								{ label: 'Example Guide 5', link: '/cloud-native/kube/9-faq' },
								{ label: 'Example Guide 6', link: '/cloud-native/kube/2-ingress-exmaple' },
								{ label: 'Example Guide 7', link: '/cloud-native/kube/5-helm' },
							]
						},
					]
				},
				{
					label: 'AI', collapsed: true, items: [
						{ label: 'Example Guide', link: '/ai/aigc/' },
						{ label: 'Example Guide', link: '/ai/algorithm/' },
						{ label: 'Example Guide', link: '/ai/fine-tune/' },
						{ label: 'Example Guide', link: '/ai/awesome' },

					]
				},
				{ label: 'Arch', collapsed: true, autogenerate: { directory: 'arch' },},
				{ label: 'DevOps', collapsed: true, autogenerate: { directory: 'devops' },},
				{ label: 'Fintech', collapsed: true, autogenerate: { directory: 'fintech' },},
				{ label: 'fund', collapsed: true,	autogenerate: { directory: 'fund' },},
				{ label: 'interview', collapsed: true, autogenerate: { directory: 'interview' },},
				{ label: 'mgmt', collapsed: true, autogenerate: { directory: 'mgmt' },},
				{ label: 'network', collapsed: true, autogenerate: { directory: 'network' },},
				{ label: 'OS',collapsed: true, autogenerate: { directory: 'os' },},
				{ label: 'Gateway', collapsed: true, autogenerate: { directory: 'gateway' },},
				{ label: 'security', collapsed: true, autogenerate: { directory: 'security' },},
				{ label: 'style', collapsed: true, autogenerate: { directory: 'style' }, }
			],
		}),
	],
});
