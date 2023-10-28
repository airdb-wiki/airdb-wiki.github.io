---
title: region
description: region
---

在云计算中，region 和 available zone 是两个重要的概念。region 是指一个地理位置，在该地理位置上有多个可用区。available zone 是指一个独立的物理位置，在该位置上有多个数据中心。

## 优势

使用 region 和 available zone 有以下几个好处：

提高可用性：将资源分布在多个 region 和 available zone 上，可以提高系统的可用性。如果一个 region 或 available zone 发生故障，其他 region 或 available zone 上的资源仍可正常运行。

提高性能：将资源分布在多个 region 和 available zone 上，可以提高系统的性能。例如，可以将数据库服务器部署在一个 region 上，而将应用服务器部署在另一个 region 上，从而减少网络延迟。

降低成本：将资源分布在多个 region 和 available zone 上，可以降低成本。例如，可以将低流量应用部署在低成本的 region 或 available zone 上。

## 用途

具体来说，region 和 available zone 的用途如下：

region：region 是云计算基础设施的逻辑划分，通常由多个可用区组成。region 的名称通常以字母或数字开头，后面跟着一个数字。例如，亚马逊云计算的 region 名称包括 us-east-1、us-west-2 等。

available zone：available zone 是云计算基础设施的物理划分，通常由多个数据中心组成。available zone 的名称通常以字母或数字开头，后面跟着一个数字。例如，亚马逊云计算的 available zone 名称包括 us-east-1a、us-west-2a 等。

在实际使用中，可以根据业务需求来选择 region 和 available zone。例如，如果业务对可用性要求很高，可以将资源分布在多个 region 和 available zone 上。如果业务对性能要求很高，可以将资源分布在同一 region 内的多个 available zone 上。如果业务对成本要求很高，可以将资源分布在低成本的 region 或 available zone 上。

## 规范

以城市或者单位为单位划分 region, 命名{$contry}-{$city}-{$num}, 如下：

- 中国区： cn-hangzhou-1, cn-beijing-1,  cn-shanghai-1
- 美国区： us-west-1, us-east-1
- 新加坡： sg-singapore-1
