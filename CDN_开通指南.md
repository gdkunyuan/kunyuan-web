# 开通 CDN 加速详细步骤

## 第一步：进入 CDN 控制台

打开：https://console.cloud.tencent.com/cdn

## 第二步：添加加速域名

点击 **「添加域名」**，填写如下：

| 字段 | 值 |
|------|-----|
| 加速域名 | `kunyuan-1257542161.cos.ap-guangzhou.myqcloud.com` （注意是 .cos 不是 .cos-website） |
| 业务类型 | **静态加速** |
| 源站类型 | **COS 源** |
| 源站地址 | 选择存储桶 `kunyuan-1257542161`，地域 `华南地区（广州）` |
| 服务区域 | **中国大陆** |
| 回源协议 | **HTTP** |

## 第三步：配置域名 CNAME

提交后，CDN 会给一个 CNAME 地址，格式类似：
```
kunyuan-xxx.cdn.dnsv1.com
```

需要在域名服务商处添加 CNAME 解析（如果用腾讯云域名，在「DNSPod」配置）。

## 第四步：验证

等待几分钟生效后，访问：
```
http://kunyuan-1257542161.cos.ap-guangzhou.myqcloud.com
```

## 注意事项

- cos-website 域名是「静态网站」专用域名
- cos 域名是「CDN 加速」用源站域名
- CDN 会自动设置正确的 Content-Type 和缓存策略
