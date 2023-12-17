---
title: Blue Sky Rescuse
description: Blue Sky Rescuse
---

当前蓝天救援队，现状是他们基本上没有系统，只有一个腾讯乐享的平台

电话找人  ->   内部再找区域的队长，  -》区域队长再安排人

### 痛点

找人和调度都不方便

### 解决方式

1. 记录志愿者的信息，尤其是急救能力
2. 调度中心在平台分配调度，宣导规则
3. 如果没有人，再区域然后推送

电话是最主要的方式
微信 通知 + 急救手册 + 准则等等

## 需求

一个急救员守护方圆一公里；
平台：接到报案，通知出事点方圆三公里范围内的急救员，前来施救；
急救员：在地图上开启我的守护雷达，填写3-7个常住地址+当前定位；
用户（现场人员）：电话求救，微信扫码求救（自动定位+文字准确描述）；
急救员板块：我的技能证书 常驻地址 打卡签到地址（签到送积分，一天最多三次） 守护时长 积分系统；

## 产品设计

1. 用户角色：求助人，急救队员，急救队长，客服，调度员
2. 核心功能：

- 用户角色管理：
- 急救员管理，我的技能 +  我的装备， 签到打卡
- 信息管理：求助者登记、或客服收集录入急救信息，急救员更新救助信息，结束救援
- 调度中心：救助事件定级， 救助需求（技能+装备），  救助工单派送， 增派急救员
- 推送：救助信息推送 （重大事件）

3. 辅助后续功能：

- 公益时长管理
- 证书管理
- 技能培训
- 装配配置
- 救援准则

## Usage

下载后在 vscode 用 <https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced> 打开

## 急救关系图

plantuml

```txt
@startuml

left to right direction

package 用户中心 {
    actor 救助者 as u1
    actor 被救助者 as u2
    actor 志愿者 as u3
    actor 客服 as u4
    actor 工作人员 as u5
}

note left of 用户中心 : 不同用户有不同的角色标签、单用户可以有多种标签
note right of u5 : 按救助领域施救

package 调度中心 {
    usecase "s1. 协调救助、事件上报" as s1
    usecase "s2. 救助定级、转接" as s2
    usecase "s3. 指导求助、宣传准则" as s3
    usecase "s4. 信息搜集、录入" as s4
}

package 资源中心 {
    usecase "r1.政府跨区调试" as r1
    usecase "r2.专业求助" as r2
    usecase "r3.社会团体" as r3
    usecase "r4.志愿者" as r4
}

u1 --> u4 : s1、s2、s3、s4
u2 --> u4 : 咨询
u3 --> u4 : s1、s2、s3、s4

u4 --> 调度中心 : 录入

调度中心 --> u5 : 调度

资源中心 <--> u5 : 轮班、替换

@enduml
```
