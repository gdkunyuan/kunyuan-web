# COS 静态网站 Content-Type 修复指南

## 问题现象
访问 https://kunyuan-1257542161.cos-website.ap-guangzhou.myqcloud.com
浏览器直接下载 index.html，而不是打开网页

## 原因
index.html 的 Content-Type 设置错误，需要改为 `text/html`

---

## 解决方案

### 方案一：手动修改 Content-Type（适用于文件少）

1. 登录腾讯云控制台 → 对象存储 COS → 进入存储桶
2. 进入「文件列表」
3. 找到 `index.html` → 点击右侧「更多」→「设置元数据」
4. 修改 `Content-Type` 的值为：
   ```
   text/html; charset=utf-8
   ```
5. 点击「保存」

同样设置其他文件：

| 文件 | Content-Type |
|------|-------------|
| `index.html` | `text/html; charset=utf-8` |
| `index-xxx.css` | `text/css` |
| `index-xxx.js` | `application/javascript` |
| `favicon.svg` | `image/svg+xml` |

---

### 方案二：删除重传（推荐，自动识别正确类型）

1. 删除存储桶内所有文件
2. 用 coscmd 重新上传（会自动识别 Content-Type）

#### 安装 coscmd
```bash
pip install coscmd
```

#### 配置
在控制台获取 API 密钥：
1. 右上角头像 → 「访问管理」→ 「API密钥管理」
2. 新建密钥，获取 `SecretId` 和 `SecretKey`
3. 执行：
```bash
coscmd config -a <SecretId> -s <SecretKey> -b kunyuan-1257542161 -r ap-guangzhou
```

#### 上传
```bash
# 删除旧文件
coscmd delete -r /

# 重新上传
coscmd upload -r dist/ /
```

---

### 方案三：在控制台批量上传时勾选「自动识别」

如果 COS 控制台最新版本有「自动识别 Content-Type」选项，勾选它后再上传。

---

## 验证
修改后，刷新浏览器页面（Ctrl + F5），应该能正常显示网站。
