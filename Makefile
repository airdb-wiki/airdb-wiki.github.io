dev:
	 pnpm docs:dev

build: install
	 pnpm docs:build
	 > docs/.vuepress/dist/.nojekyll
	 echo 'airdb.wiki' > docs/.vuepress/dist/CNAME

install:
	pnpm add -D vuepress@next @vuepress/client@next vue vuepress-theme-hope
