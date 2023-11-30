---
title: awk & sed
description: awk & sed
---


## awk

```bash
awk '{sum[$2]+=1} END {for(k in sum) printf("%s %s %d %s\n", $1, k, sum[k], $NF)}' | sort -n -r -k 3

awk -F '|' '{sum += $1} END {print sum}'

awk '{sum[$2]+=1} END {for(k in sum) printf("%s %s %d %s\n", $1, k, sum[k], $NF)}' | sort -n -r -k 3

# 求总和
awk -F '|' '{sum += $1} END {print "Sum =", sum}'

# 求平均
cat data|awk '{sum+=$1} END {print "Average = ", sum/NR}'

# 求最大值
cat data|awk 'BEGIN {max = 0} {if ($1>max) max=$1 fi} END {print "Max=", max}'

# 求最小值
awk 'BEGIN {min = 1999999} {if ($1<min) min=$1 fi} END {print "Min=", min}'


awk 统计文件中按照某列统计某列的和(sum) 转载

把第一列相同的名称的第二列加起来：

[root@localhost cc]# cat 1.txt
aaa 10
bbb 20
aaa 30
ccc 40
ccc 20
ccc 40

[root@localhost cc]# cat 1.txt |awk '{sum[$1]+=$2}END{for(i in sum)print i,sum[i]}'
aaa 40
bbb 20
ccc 100

统计第一列名称出现的次数：

[root@localhost cc]# cat 1.txt |awk '{sum[$1]+=1}END{for(i in sum)print i,sum[i]}'
aaa 2
bbb 1
ccc 3

或[root@localhost cc]# cat 1.txt |awk '{sum[$1]++}END{for(i in sum)print i,sum[i]}'
aaa 2
bbb 1
ccc 3

统计第一列第二列重复出现的次数：

[root@localhost cc]# cat 1.txt |awk '{sum[$1" "$2]++}END{for(i in sum)print i,sum[i]}'
aaa 10 1
ccc 20 1
aaa 30 1
ccc 40 2
bbb 20 1

简单的把第二列加起来：
 [root@localhost cc]# cat 1.txt |awk '{a+=$2}END{print a}'
160
```
