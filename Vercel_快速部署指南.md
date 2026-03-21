# Vercel 快速部署指南（5 分钟上线）

## 准备工作

### 第一步：准备上传文件

#### 删除不需要的文件夹

打开文件夹：
```
C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
```

删除以下文件夹（如果不删除，上传会很慢）：
- ❌ `node_modules/`
- ❌ `dist/`
- ❌ `.workbuddy/`

#### 确认保留的文件

**必须上传的文件：**
- ✅ `package.json`
- ✅ `vite.config.ts`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.js`
- ✅ `index.html`
- ✅ `.gitignore`
- ✅ `src/` 文件夹（整个文件夹）
- ✅ `public/` 文件夹（整个文件夹）

---

## 部署步骤

### 第二步：注册/登录 Vercel

1. 打开 👉 https://vercel.com

2. 点击右上角 **「Sign Up」** 或 **「Log In」**

3. 选择注册方式（任选其一）：
   - GitHub（推荐）
   - GitLab
   - Bitbucket
   - Email

4. 完成注册/登录

---

### 第三步：创建新项目

1. 登录后，点击 **「Add New」** 按钮

2. 选择 **「Project」**

3. 选择上传方式：
   - **方式 A：从 GitHub 导入**（推荐，方便后续更新）
     - 点击 **「Import Git Repository」**
     - 需要先将代码推送到 GitHub

   - **方式 B：直接上传文件**（快速）
     - 点击 **「Upload」**

---

### 第四步：上传文件（推荐方式 B）

#### 方式 B：直接上传文件（快速）

1. 点击 **「Upload」**

2. 点击 **「Upload a folder or file」**

3. 选择文件夹：
   ```
   C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
   ```
   （确保已删除 `node_modules` 和 `dist`）

4. 拖拽或选择整个文件夹

5. 等待上传完成（可能需要 1-2 分钟）

---

### 第五步：配置项目

Vercel 会自动识别为 Vite 项目，直接使用默认配置：

**默认配置（无需修改）：**
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

### 第六步：部署

1. 检查配置无误

2. 点击 **「Deploy」** 按钮

3. 等待部署（1-2 分钟）

4. 部署成功！

---

### 第七步：访问网站

Vercel 会生成一个临时域名：
```
https://kunyuan-web-xxx.vercel.app
```

**直接访问这个域名，网站应该正常显示，不会下载！**

---

## 绑定自定义域名（可选）

### 第八步：在 Vercel 添加域名

1. 在 Vercel Dashboard，找到 `kunyuan-web` 项目

2. 点击 **「Domains」** 标签

3. 点击 **「Add Domain」**

4. 输入域名：`gdkunyuan.cn`

5. 点击 **「Add」**

---

### 第九步：配置 DNS 解析

#### 方式 A：在 DNSPod 配置（推荐）

1. 打开 DNSPod 控制台
   👉 https://console.cloud.tencent.com/cns

2. 找到域名 `gdkunyuan.cn`

3. 点击 **「解析」**

4. 添加记录：

| 主机记录 | 记录类型 | 线路类型 | 记录值 | TTL |
|---------|---------|---------|-------|-----|
| `@` | `CNAME` | 默认 | `cname.vercel-dns.com` | 600 |

5. 点击 **「保存」**

#### 方式 B：在腾讯云域名解析配置

1. 打开腾讯云域名控制台
   👉 https://console.cloud.tencent.com/domain

2. 找到 `gdkunyuan.cn`

3. 点击 **「解析」**

4. 添加 CNAME 记录：
   - 主机记录：`@`
   - 记录类型：`CNAME`
   - 记录值：`cname.vercel-dns.com`

5. 保存

---

### 第十步：验证域名访问

等待 10-30 分钟，访问：
```
https://gdkunyuan.cn
```

**网站应该正常显示！**

---

## 快速检查清单

- [ ] 已删除 `node_modules` 和 `dist` 文件夹
- [ ] 已注册/登录 Vercel 账号
- [ ] 已上传项目到 Vercel
- [ ] 部署成功
- [ ] 临时域名可访问
- [ ] （可选）已绑定自定义域名
- [ ] （可选）DNS 解析已配置
- [ ] （可选）自定义域名可访问

---

## 常见问题

### Q1: 上传时提示"文件太大"？

**A:** 删除 `node_modules` 文件夹，这个文件夹通常有几百 MB。

### Q2: 部署失败？

**A:** 检查：
- 是否删除了 `node_modules`
- `package.json` 是否完整
- 网络连接是否正常

### Q3: 网站显示"404 Not Found"？

**A:** 检查：
- `index.html` 是否在根目录
- 文件夹结构是否正确

### Q4: 自定义域名无法访问？

**A:**
1. 检查 DNS 解析是否配置正确
2. 等待 10-30 分钟让 DNS 生效
3. 清除浏览器缓存重试

---

## 下一步

### 立即可用

- Vercel 临时域名：立即可用
- 自定义域名：DNS 生效后可用

### 备案通过后

- 切换到腾讯云 CDN（更稳定）
- 保留 Vercel 作为备份

---

## 需要帮助吗？

- 上传遇到问题？告诉我错误信息
- 部署失败？截图发给我
- 域名配置出错？截图发给我
- 其他问题？描述一下

**告诉我您的进度或问题！**
