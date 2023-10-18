---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

# Kubernetes 集群

Hack with kube.

[Kubernetes 源码阅读 - 田飞雨](https://blog.tianfeiyu.com/source-code-reading-notes/kubernetes/)

<https://feisky.gitbooks.io/kubernetes/content/introduction/cluster.html>

# helm install mina-api mina-api/ --set service.gdbc==""

# helm install mina-api mina-api/ --set service.gdbc=""

# helm install mina-api airdb/mina-api --set service.gdbc=""

docker exec -it --env COLUMNS=`tput cols` --env LINES=`tput lines`  dns bash

helm install --name mysql --set mysqlRootPassword=rootpassword,mysqlUser=mysql,mysqlPassword=my-password,mysqlDatabase=mydatabase,persistence.existingClaim=mysql-pvc stable/mysql

当确定了所需的一切后，请记住：

* 使用版本控制：应该使用版本控制来跟踪所有内容。
* 编码一切：什么都不应该手动完成。 使用代码描述所需的状态。
* 幂等：无论执行多少次，您编写的代码的每个结果都应始终产生相同的结果。
* 使代码模块化。
* 测试，测试，测试
* 再次强调，使用版本控制。 永远不要忘记这一点。

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml

kubectl run web --image=gcr.io/google-samples/hello-app:1.0 --port=8080

kubectl expose deployment web --target-port=8080 --type=NodePort

kubectl get services
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP          114d
web          NodePort    10.103.84.84   <none>        8080:32062/TCP   24m
```
