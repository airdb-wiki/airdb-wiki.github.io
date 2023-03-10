dev:
	 pnpm docs:dev

build:
	 pnpm i
	 pnpm docs:build

install:
	pnpm add -D vuepress@next @vuepress/client@next vue vuepress-theme-hope
