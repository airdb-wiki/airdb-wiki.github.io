---
bookCollapseSection: true
weight: 10
title: "Golang"
---

# 学习资料

- [Golang Gin 实践](https://www.jishuchi.com/read/gin-practice/3824)
- [gin源码分析](https://www.crblog.cc/golang/_book/gin/gin%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html)

# Golang 常见问题收录

## Golang 常见问题
- [Go sync.Pool 浅析](https://mp.weixin.qq.com/s/MTf_4WEvCnCMKeQC_Wm_xw)
- [[典藏版]Golang调度器GPM原理与调度全分析](https://zhuanlan.zhihu.com/p/323271088)


## 开源项目
- [Plugin 热更新问题](https://github.com/campoy/golang-plugins)

## 解析范式

[Go Channel的实现](https://studygolang.com/articles/12023)

G-P-M模型
```
G:
表示goroutine，存储了goroutine的执行stack信息、goroutine状态以及goroutine的任务函数等；另外G对象是可以重用的。
P:
表示逻辑processor，P的数量决定了系统内最大可并行的G的数量（前提：系统的物理cpu核数>=P的数量）；P的最大作用还是其拥有的各种G对象队列、链表、一些cache和状态。
M:
M代表着真正的执行计算资源。在绑定有效的p后，进入schedule循环；而schedule循环的机制大致是从各种队列、p的本地队列中获取G，切换到G的执行栈上并执行G的函数，调用goexit做清理工作并回到m，如此反复。M并不保留G状态，这是G可以跨M调度的基础。
```


![](/images/goroutine-scheduler-model.png "goroutine")


