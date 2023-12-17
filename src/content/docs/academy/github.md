---
title: github pages
description: github pages
---

Github 作为一个代码托管平台，除了可以托管代码，还可以托管静态网页。这个功能叫做 Github Pages。
本文主要是介绍如何使用 Github Pages 来托管个人博客。

## Profile page

### Badge

<https://home.aveek.io/GitHub-Profile-Badges/>



## 一、如何使用github
https://guides.github.com/activities/hello-world/

## 二、如何进行PR
https://help.github.com/articles/creating-a-pull-request/

## 三、创建组织 or Team
https://github.com/organizations/new

## 四、创建个人博客
https://pages.github.com/
1.  dns cname
2.  repo create CNAME file

docker jekyll/jekyll


## 五、github webhook
https://github.com/adnanh/webhook
1. 主要是用于做自动化部署
2. 工作量衡量变更监控
需要注意的是 id 就是请求链接，需请求地址是example.com/hooks/howto, 则id为 hooks.json 中id对应的值为 howto,  一个json文件可以支持多个webhook
