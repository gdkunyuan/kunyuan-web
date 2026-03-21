# gdkunyuan.cn 域名配置步骤

## 当前状态

✅ 域名已购买：`gdkunyuan.cn`

---

## 重要提示：Vercel 不需要备案！

好消息：**Vercel 托管的网站不需要备案**，可以立即访问！

如果您希望立即让国内用户访问到网站，请**用 Vercel 部署**。备案等您有更多时间再处理。

---

## 配置方案对比

| 方案 | 是否需要备案 | 国内访问速度 | 立即上线 | 推荐度 |
|------|-----------|------------|---------|--------|
| **Vercel + 域名** | ❌ 不需要 | 快（有国内节点） | ✅ 10 分钟 | ⭐⭐⭐⭐⭐ |
| 腾讯云 CDN + 域名 | ✅ 需要备案 | 最快 | ❌ 需等 7-20 天 | ⭐⭐⭐ |

---

## 推荐配置方案：Vercel（无需备案）

### 第一步：部署网站到 Vercel

#### 方式一：直接上传 dist 文件（最简单）

1. 打开 Vercel：
   👉 **https://vercel.com**

2. 注册/登录账号（用 GitHub 或邮箱）

3. 点击 **「Add New...」** → **「Project」**

4. 点击 **「Upload」** 按钮

5. 选择并拖拽整个文件夹：
   ```
   C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
   ```

6. 等待上传完成，点击 **「Deploy」**

7. 1-2 分钟后，网站就上线了！

   Vercel 会给您一个默认域名，例如：
   ```
   https://kunyuan-web-xxx.vercel.app
   ```

#### 方式二：通过 GitHub 部署（推荐，方便后续更新）

如果您有 GitHub 账号，这样做更好：

1. **初始化 Git 仓库**
   ```bash
   cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
   git init
   git add .
   git commit -m "Initial commit: 广东坤元企业官网"
   ```

2. **在 GitHub 创建仓库**

   - 打开 GitHub → **「+」** → **「New repository」**
   - 仓库名：`kunyuan-web`
   - 点击 **「Create repository」**

3. **推送到 GitHub**
   
   请把 `<你的用户名>` 替换为您的 GitHub 用户名，然后执行：

   ```bash
   git remote add origin https://github.com/<你的用户名>/kunyuan-web.git
   git branch -M main
   git push -u origin main
   ```

4. **在 Vercel 导入**

   - 进入 Vercel Dashboard
   - 点击 **「Add New...」** → **「Project」**
   - 选择 **「Import Git Repository」**
   - 找到 `kunyuan-web` 项目，点击 **「Import」**

5. **配置并部署**

   | 配置项 | 填写值 |
   |--------|--------|
   | Framework Preset | Vite |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

   点击 **「Deploy」**

---

### 第二步：在 Vercel 添加域名

网站部署成功后：

1. 进入 Vercel Dashboard
2. 找到 `kunyuan-web` 项目
3. 点击 **「Settings」**
4. 进入 **「Domains」**
5. 输入域名：`gdkunyuan.cn`
6. 点击 **「Add」**

Vercel 会显示一个 **CNAME 地址**，例如：
```
cname.vercel-dns.com
```

**复制这个 CNAME 地址！**

---

### 第三步：配置 DNS 解析

1. 打开腾讯云 DNS 控制台：
   👉 **https://console.cloud.tencent.com/cns**

2. 找到域名 `gdkunyuan.cn`，点击 **「解析」**

3. 添加解析记录：

   | 主机记录 | 记录类型 | 线路类型 | 记录值 | TTL |
   |---------|---------|---------|--------|-----|
   | `www` | **CNAME** | 默认 | `cname.vercel-dns.com`（从 Vercel 复制的） | 600 |
   | `@` | **CNAME** | 默认 | `cname.vercel-dns.com`（从 Vercel 复制的） | 600 |

   > `@` 表示根域名，这样 `gdkunyuan.cn` 也能访问

4. 点击 **「保存」**

---

### 第四步：等待 DNS 生效

DNS 解析生效时间：
- **通常：** 5-10 分钟
- **最长：** 48 小时（很少情况）

---

### 第五步：验证域名访问

DNS 生效后，您可以访问：

| 访问地址 | 说明 |
|---------|------|
| `https://gdkunyuan.cn` | 根域名访问 |
| `https://www.gdkunyuan.cn` | www 子域名访问 |
| `https://kunyuan-web-xxx.vercel.app` | Vercel 默认域名（备选） |

---

## 域名备案（可选）

如果您希望网站长期在国内托管（比如以后用腾讯云），需要备案。

### 备案流程

1. 进入腾讯云备案系统：
   👉 **https://console.cloud.tencent.com/beian**

2. 点击 **「首次备案」**

3. 按提示填写：
   - 主体信息（个人/企业）
   - 网站信息
   - 上传证件照片

4. 提交后等待审核：
   - 腾讯云初审：1-2 天
   - 管局审核：7-20 天

5. 备案通过后，可以迁移到腾讯云 CDN

---

## 更新网站内容

### 方式一：通过 GitHub（推荐）

修改本地文件后：
```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
git add .
git commit -m "更新内容"
git push
```

Vercel 会**自动检测并重新部署**！

### 方式二：通过 Vercel Dashboard

1. 进入 Vercel Dashboard
2. 找到项目
3. 点击 **「Deployments」**
4. 点击 **「Redeploy」**

---

## 常见问题

### Q: Vercel 托管在国内访问快吗？
A: Vercel 在国内有 CDN 节点，访问速度很快。

### Q: HTTPS 证书需要申请吗？
A: Vercel 自动为所有域名提供免费 HTTPS 证书，无需手动申请。

### Q: Vercel 有流量限制吗？
A: 有，但静态网站通常用不完：
   - 带宽：100GB/月
   - 执行时间：10000 分钟/月

### Q: 以后可以迁移到腾讯云吗？
A: 可以，随时可以迁移到腾讯云或其他平台。

---

## 需要帮助？

如果配置过程中遇到任何问题：
1. 截图发给我
2. 告诉我具体在哪一步出错
3. 我帮您排查解决

---

## 下一步

现在开始：
1. [ ] 确认域名实名认证状态
2. [ ] 部署网站到 Vercel
3. [ ] 在 Vercel 添加 gdkunyuan.cn 域名
4. [ ] 配置 DNS 解析
5. [ ] 验证域名访问

告诉我您的进度，我来帮您继续！
