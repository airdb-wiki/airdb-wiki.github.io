---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

# DDD - 领域驱动开发

Domain-Drive Desgin

## 实体

- 当一个对象由其标识（而不是属性）区分时，这种对象称为实体（Entity）。
- 例：最简单的，公安系统的身份信息录入，对于人的模拟，即认为是实体，因为每个人是独一无二的，且其具有唯一标识（如公安系统分发的身份证号码）。

在实践上建议将属性的验证放到实体中。

## 值对象

- 当一个对象用于对事务进行描述而没有唯一标识时，它被称作值对象（Value Object）。
- 例：比如颜色信息，我们只需要知道{“name”:“黑色”，”css”:“#000000”}这样的值信息就能够满足要求了，这避免了我们对标识追踪带来的系统复杂性。

值对象很重要，在习惯了使用数据库的数据建模后，很容易将所有对象看作实体。使用值对象，可以更好地做系统优化、精简设计。
它具有不变性、相等性和可替换性。

在实践中，需要保证值对象创建后就不能被修改，即不允许外部再修改其属性。在不同上下文集成时，会出现模型概念的公用，如商品模型会存在于电商的各个上下文中。在订单上下文中如果你只关注下单时商品信息快照，那么将商品对象视为值对象是很好的选择。

### 聚合根

- Aggregate(聚合）是一组相关对象的集合，作为一个整体被外界访问，聚合根（Aggregate Root）是这个聚合的根节点。

聚合是一个非常重要的概念，核心领域往往都需要用聚合来表达。其次，聚合在技术上有非常高的价值，可以指导详细设计。

聚合由根实体，值对象和实体组成。

### 领域服务

- 一些重要的领域行为或操作，可以归类为领域服务。它既不是实体，也不是值对象的范畴。

当我们采用了微服务架构风格，一切领域逻辑的对外暴露均需要通过领域服务来进行。如原本由聚合根暴露的业务逻辑也需要依托于领域服务。

### 领域事件

领域事件是对领域内发生的活动进行的建模。

Reference:

[The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule)
[美团-领域驱动设计在互联网业务开发中的实践](https://tech.meituan.com/2017/12/22/ddd-in-practice.html)
[浅析DDD(领域驱动设计)](https://www.jianshu.com/p/b6ec06d6b594)
[DDD 领域驱动设计 - 架构（分层/六边形/RESTful）](https://blog.csdn.net/qianshangding0708/article/details/106232926)
[领域驱动设计（DDD）：分层架构的三种模式](https://mp.weixin.qq.com/s/LzC4lfaNeabRfzyvl0rf1Q)
[Golang领域模型-六边形架构](https://mp.weixin.qq.com/s/wXzfJ9HNAdk6QEyw8ez-Yw)
