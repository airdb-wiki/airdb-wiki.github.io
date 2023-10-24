---
title: Time Style
description: Time style
---

## Time Format

unix timestrap

time uint64

## Open/Close Time

```json
work_time: {
default: [
    { start_time: 0, send_time: 86399 }
],
monday: [
    { start_time: 0, send_time: 86399 }
],
tuesday: [
    { start_time: 0, send_time: 86399 }
],
wednesday: [
    { start_time: 0, send_time: 86399 }
],
thursday: [
    { start_time: 0, send_time: 86399 }
],
friday: [
    { start_time: 0, send_time: 86399 }
],
saturday: [
    off: true,
    { start_time: 0, send_time: 86399 }
],
sunday: [
    off: true,
    { start_time: 0, send_time: 86399 }
]
}
```
