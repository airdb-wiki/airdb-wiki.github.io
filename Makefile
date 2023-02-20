dev:
	 yarn run docs:dev

build: install
	 yarn run docs:build
	 > docs/.vuepress/dist/.nojekyll
	 echo 'airdb.wiki' > docs/.vuepress/dist/CNAME

install:
	yarn add -D vuepress@next
