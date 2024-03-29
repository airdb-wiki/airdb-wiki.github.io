---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

---

title: Serverless 实战 - 无服务器编程
bookCollapseSection: true
weight: 20
---

# Serverless 实战 - 无服务器编程

## Serverless 是什么？

Serverless 架构是不是就不要服务器了？回答这个问题，我们需要了解下 Serverless 是什么。

Serverless 架构近几年频繁出现在一些技术架构大会的演讲标题中，很多人对于 Serverless，只是从字面意义上理解——无服务器架构，但是它真正的含义是开发者再也不用过多考虑服务器的问题，当然，这并不代表完全去除服务器，而是我们依靠第三方资源服务器后端。

从 2014 年开始，经过这么多年的发展，各大云服务商基本都提供了 Serverless 服务。 比如 Amazon Web Services(AWS) Lambda,  阿里云函数计算(Function Compute),  腾讯云函数计算(Serverless Compute Function).

## 选型

由于现有服务使用腾讯云，所以开通了serverless 服务。  本文将使用 腾讯云 serverless  + Golang 方案。

## 实战内容

- 实战准备：手把手带你准备一个实验环境，部署实战项目，开通和配置用到的数据库，Make 使用。

- 实战 1: 规范设计，详细介绍开发中的 10 大常见的规范，例如目录规范、日志规范、错误码规范、Commit 规范等，带你掌握设计常见规范的方法，为高效开发一个高质量、易阅读、易维护的 Go 应用打好基础。

- 实战 2: 基础功能设计或开发，教你设计和开发 Go 应用开发中的基础功能，这些功能会影响整个应用的构建方式，例如日志包、错误包、错误码等。

- 实战 3: 服务开发，带你解析一个企业级的 Go 项目代码，进而学会如何开发 Go 应用。同时，详细讲解 Go 开发阶段的各个技能点，例如如何设计和开发 API 服务、Go SDK、客户端工具、错误码、日志包等。

- 实战 4: 服务测试。这个模块围绕实战项目，讲解单元测试、功能测试、性能分析和性能调优的方法，交付给你一个性能和稳定性都经过充分测试、生产级可用的服务。

- 实战 5: 六边形架构
