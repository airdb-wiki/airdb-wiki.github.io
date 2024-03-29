---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

# Arch

## Questions

在新项目开发中如何？

在老项目维护中如何？

在技术构架演化中如何？

[怎么提高自己的系统架构水平](https://my.oschina.net/u/4662964/blog/5135740)
[DDD 实战课](https://zq99299.github.io/note-book2/ddd/)

## 什么是架构

> **_架构_**  是指构成一个系统的主要元素及它们之间的主要关联，这些元素和关联能够反映该系统的本质特征。

选择架构应该了解架构的来源和所要解决的问题，从业务和问题出发，避免滥用架构。

### 分层架构

分层架构是一种历史悠久的架构，通过分层架构，可以将系统按不同职责组织成有序层次，由于这种划分往往比较容易界定，也算是最常见和最受欢迎的一种架构

### DDD分层架构

不过从分层架构图中可以发现，将基础设施层放入底层是存在缺点的，领域层依赖于基础设施层，这对领域层的内聚性产生影响。一个解决方案就是依赖倒置。

### 依赖倒置

- 高层模块不应该依赖于底层模块，两者都应该依赖于抽象
- 抽象不应该依赖于实现细节，实现细节应该依赖于接口

DIP分层

采用了依赖注入方式后，其实可以发现事实上已经没有分层概念了。无论高层还是底层，实际只依赖于抽象，整个分层好像被推平了，这就引入下一个架构六边形架构。

## 六边形架构（Hexagonal architecture）

六边形架构是Alistair Cockburn在2005年提出，解决了传统的分层架构所带来的问题，实际上它也是一种分层架构，只不过不是上下或左右，而是变成了内部和外部

六边形架构的功能非常强大，可以作为基层架构并用于支持系统的其他架构。

六边形的内部代表了application和domain层。外部代表应用的驱动逻辑、基础设施或其他应用。内部通过端口和外部系统通信，端口代表了一定协议，以API呈现。

## Good Repo

<https://go-zero.dev/>

<https://github.com/polarismesh/polaris/blob/main/README-zh.md>

[OpenSergo](https://opensergo.io/zh-cn/docs/what-is-opensergo/intro/)
