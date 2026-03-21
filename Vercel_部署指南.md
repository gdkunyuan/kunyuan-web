# Vercel 网页版部署指南（无需命令行）

## 为什么选择 Vercel？

- ✅ **完全免费**：静态网站永久免费托管
- ✅ **全球 CDN**：访问速度极快
- ✅ **自动 HTTPS**：无需配置 SSL 证书
- ✅ **即时部署**：1-2 分钟上线
- ✅ **无需备案**：不用等 7-20 天

---

## 部署步骤（3 分钟）

### 第一步：准备 Vercel 账号

1. 打开 Vercel 官网：
   👉 **https://vercel.com**

2. 点击 **「Sign Up」** 注册账号
   - 可以用 **GitHub、GitLab、Bitbucket** 或 **邮箱** 注册
   - 推荐用 GitHub 账号（最方便）

---

### 第二步：导入项目

注册登录后：

#### 方法一：从 GitHub 导入（推荐）

1. 将项目推送到 GitHub
   ```bash
   cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
   git init
   git add .
   git commit -m "Initial commit: 广东坤元企业官网"
   ```

2. 在 GitHub 创建一个新仓库（如果还没有）
   - 登录 GitHub → 点击 **「+」** → **「New repository」**
   - 仓库名：`kunyuan-web`
   - 点击 **「Create repository」**

3. 推送到 GitHub
   ```bash
   git remote add origin https://github.com/你的用户名/kunyuan-web.git
   git branch -M main
   git push -u origin main
   ```

4. 在 Vercel 导入
   - 进入 Vercel Dashboard
   - 点击 **「Add New...」** → **「Project」**
   - 选择 **「Import Git Repository」**
   - 找到 `kunyuan-web` 项目，点击 **「Import」**

#### 方法二：直接上传 dist 文件

1. 在 Vercel 点击 **「Add New...」** → **「Project」**
2. 点击 **「Upload」**（或直接拖拽文件夹）
3. 选择整个 `kunyuan-web` 文件夹

---

### 第三步：配置项目设置

导入后，Vercel 会自动检测到这是 Vite + React 项目。

**默认配置即可，但需要修改一点：**

#### Build & Development Settings

| 配置项 | 修改为 |
|--------|--------|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

点击 **「Deploy」** 开始部署。

---

### 第四步：等待部署完成

- 部署通常需要 **30-60 秒**
- 完成后会显示 **「Production」** 和一个访问地址：
  ```
  https://kunyuan-web-xxx.vercel.app
  ```

点击这个地址，网站就上线了！

---

## 验证网站

打开浏览器访问 Vercel 给您的域名，确认：
- 网页正常显示（不会下载）
- 所有页面可以正常跳转
- 图片和样式加载正常

---

## 后续更新网站

### 方式一：更新 GitHub 代码

修改本地文件后：
```bash
git add .
git commit -m "更新内容"
git push
```

Vercel 会**自动检测并重新部署**（约 1 分钟）

### 方式二：直接在 Vercel Dashboard 操作

1. 进入 Vercel Dashboard
2. 找到项目
3. 点击 **「Deployments」**
4. 点击 **「Redeploy」**

---

## 绑定自定义域名（可选）

等您的 `gdkunyuan.cn` 备案通过后，可以绑定到 Vercel：

1. 进入 Vercel Dashboard → 项目 **「Settings」** → **「Domains」**
2. 添加域名：`gdkunyuan.cn` 和 `www.gdkunyuan.cn`
3. Vercel 会给出 CNAME 地址，复制它
4. 在域名注册商（DNSPod）添加 CNAME 解析：
   - 主机记录：`www`
   - 记录值：`cname.vercel-dns.com`
5. 等待 DNS 生效（几分钟到几小时）

之后就可以用 `https://www.gdkunyuan.cn` 访问了！

---

## 常见问题

### Q: 需要信用卡吗？
A: 不需要，Vercel 个人版完全免费。

### Q: 有流量限制吗？
A: 有，但静态网站通常用不完：
   - 带宽：100GB/月
   - 执行时间：10000分钟/月
   - 文件大小：单个文件 50MB

### Q: 可以关闭广告吗？
A: Vercel 是专业平台，不会有广告。

### Q: 服务器在国外，国内访问慢吗？
A: Vercel 在国内有 CDN 节点，访问速度很快。

---

## 总结

| 平台 | 免费额度 | 备案要求 | 速度 | 推荐度 |
|------|---------|---------|------|--------|
| **Vercel** | ✅ 永久免费 | ❌ 不需要 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| GitHub Pages | ✅ 免费但限流 | ❌ 不需要 | ⭐⭐⭐ | ⭐⭐⭐ |
| 腾讯云 COS + CDN | 有限制 | ✅ 需要备案 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**立即开始：**
1. 注册 Vercel 账号
2. 推送代码到 GitHub
3. 在 Vercel 导入项目
4. 1 分钟后上线！

---

需要我帮您推送代码到 GitHub 吗？告诉我您的 GitHub 用户名，我来写具体命令。
