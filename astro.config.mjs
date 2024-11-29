import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import markdocGrammar from './grammars/markdoc.tmLanguage.json';
import expressiveCode from 'astro-expressive-code';

export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
};

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://airdb.wiki/';
const ogUrl = new URL('og.jpg?v=1', site).href;
const ogImageAlt = 'Make your docs shine with Starlight';


const title = 'Learn. Build. Grow. Earn. Together.';
const description =
	'Airdb Wiki - Learn from the web’s leading experts. Build something new. Grow your career. Let’s do it together.';

const shareTitle = 'Learn With Airdb Wiki';


export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		expressiveCode(),
		starlight({
			title: 'airdb.wiki',
			favicon: '/favicon.png',
			social: {
				github: 'https://github.com/airdb/',
				discord: 'https://discord.com/invite/Mp4xttEqnF'
			},
			head: [
				{
					tag: 'script',
					attrs: {
						//src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'airdb',
						defer: true,
					},
				},
			],
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
			locales,
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						'zh-CN': '从这里开始',
					},
					items: [
						{
							label: 'Guide',
							translations: {
								'zh-CN': '指南',
							},
							link: '/guides/example',
							badge: 'Welcome',
						},
						{
							label: 'Today',
							translations: {
								'zh-CN': '今日',
							},
							link: '/guides/today',
							badge: 'New',
						},
						{
							label: '开发环境',
							translations: {
								'zh-CN': '开发环境',
							},
							link: '/guides/dev',
						}
					]
				},
				{
					label: 'AI',
					translations: {
						'zh-CN': '人工智能',
					},
					collapsed: true,
					autogenerate: { directory: 'ai' },
				},
				{
					label: 'Blockchain',
					translations: {
						'zh-CN': '区块链',
					},
					collapsed: true,
					autogenerate: { directory: 'blockchain' },
				},
				{
					label: 'Cloud Computing',
					translations: {
						'zh-CN': '云计算',
					},
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'BigData',
					translations: {
						'zh-CN': '大数据',
					},
					collapsed: true,
					autogenerate: {
						directory: 'data'
					},
				},
				{
					label: 'Security',
					translations: {
						'zh-CN': '安全',
					},
					collapsed: true,
					autogenerate: {
						directory: 'security'
					},
				},
				{
					label: 'Fintech',
					translations: {
						'zh-CN': '金融科技',
					},
					collapsed: true,
					autogenerate: {
						directory: 'fintech'
					},
				},

				{
					label: 'DevOps',
					translations: {
						'zh-CN': '开发运维',
					},
					collapsed: true,
					autogenerate: {
						directory: 'devops'
					},
				},
				{
					label: 'Team',
					translations: {
						'zh-CN': '团队',
					},
					collapsed: true,
					items: [{
						label: 'Team Management',
						translations: {
							'zh-CN': '团队管理',
						},
						collapsed: true,
						autogenerate: {
							directory: 'mgmt'
						}
					}, {
						label: 'Culture',
						translations: {
							'zh-CN': '文化',
						},
						collapsed: true,
						autogenerate: {
							directory: 'culture'
						}
					}, {
						label: 'Interview',
						translations: {
							'zh-CN': '面试',
						},
						collapsed: true,
						autogenerate: {
							directory: 'interview'
						}
					}, {
						label: 'Style',
						translations: {
							'zh-CN': '风格',
						},
						collapsed: true,
						autogenerate: {
							directory: 'style'
						}
					}]
				}, {
					label: 'Academy',
					translations: {
						'zh-CN': '学院',
					},
					collapsed: true,
					autogenerate: {
						directory: 'academy'
					}
				}, {
					label: 'About',
					translations: {
						'zh-CN': '关于',
					},
					collapsed: true,
					autogenerate: {
						directory: 'about'
					},
				},
			],
			expressiveCode: { shiki: { langs: [markdocGrammar] } },
			plugins: process.env.CHECK_LINKS
				? [
					starlightLinksValidator({
						errorOnFallbackPages: false,
						errorOnInconsistentLocale: true,
					}),
				]
				: [],
		}),
	],
});
