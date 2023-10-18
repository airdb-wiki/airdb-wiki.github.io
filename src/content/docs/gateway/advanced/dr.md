---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

# Disaster Recovery 容灾方案

## DNS 容灾

- GEO Location
- Weight
- Network provider
- 机房、AZ 容灾

## 4层 网络容灾 - NLB

- anycast
- DPVS and other LB
- 机房容灾

## 7层 应用容灾

- 前端 - CDN 容灾
- 前端 - 全局配置，服务降级策略，防止前端，app 重试导致雪崩。
- 前端 - Regional 配置, 服务降级策略
- APP 移动端
- 后端 - 限速限流
- 后端 - 网络调度
- 接入调度, DoH, DNS over TLS, etc...
- 消息队列 - 熔断, 限流
- 推广、营销策略
