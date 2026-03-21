# Vercel 部署 - 具体操作命令（gdkunyuan@163.com）

## 前提条件
- GitHub 账号：gdkunyuan@163.com
- 项目路径：C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web

---

## 第一步：初始化 Git 仓库

打开 PowerShell 或命令提示符，依次执行：

```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
git init
git add .
git commit -m "Initial commit: 广东坤元企业官网"
```

---

## 第二步：在 GitHub 创建新仓库

### 方式 A：通过网页创建（推荐）

1. 访问：https://github.com/new
2. 仓库名（Repository name）：`kunyuan-web`
3. 描述（Description，可选）：`广东坤元企业官网`
4. 选择 **Public**（公开）或 **Private**（私有）
5. **不要**勾选 "Add a README file"（我们已经有代码了）
6. 点击 **Create repository**

### 方式 B：通过 GitHub CLI 创建（需要先安装）

```bash
gh repo create kunyuan-web --public --source=. --remote=origin --push
```

如果执行这个命令成功，可以直接跳到**第五步**

---

## 第三步：获取 GitHub 仓库地址

创建仓库后，GitHub 会显示类似这样的地址：

```
https://github.com/gdkunyuan163/kunyuan-web.git
```

**注意**：GitHub 用户名是邮箱前缀还是需要确认。如果不确定，请查看 GitHub 个人主页。

---

## 第四步：连接 Git 并推送代码

**⚠️ 重要**：请将 `gdkunyuan163` 替换为您的实际 GitHub 用户名！

```bash
git remote add origin https://github.com/gdkunyuan163/kunyuan-web.git
git branch -M main
git push -u origin main
```

如果提示输入用户名和密码：
- **用户名**：输入您的 GitHub 用户名（不是邮箱）
- **密码**：输入 **Personal Access Token**（不是 GitHub 登录密码）

---

## 获取 Personal Access Token（如需要）

如果 `git push` 时提示密码验证失败，需要创建 Token：

1. 访问：https://github.com/settings/tokens
2. 点击 **Generate new token** → **Generate new token (classic)**
3. Note：填写 `Vercel Deploy`
4. Expiration：选择有效期（推荐 90 days）
5. 勾选权限：✅ **repo**（完整的仓库控制权限）
6. 点击 **Generate token**
7. 复制生成的 Token（**只显示一次，请妥善保存**）

然后重新执行 `git push`，密码输入这个 Token。

---

## 第五步：在 Vercel 导入项目

### 方式 A：通过 Vercel 网页导入

1. 访问：https://vercel.com/new
2. 使用 `gdkunyuan@163.com` 登录 Vercel
3. 点击 **Continue with GitHub**
4. 授权 Vercel 访问您的 GitHub 仓库
5. 找到 `kunyuan-web` 仓库，点击 **Import**

### 方式 B：通过 Vercel CLI 导入

```bash
vercel link
```

选择 **Link to existing project**，然后在网页中选择您的项目。

---

## 第六步：配置并部署

导入后，Vercel 会自动检测项目配置：

| 配置项 | 自动识别值 | 确认是否正确 |
|--------|-----------|------------|
| Framework Preset | Vite | ✅ |
| Build Command | `npm run build` | ✅ |
| Output Directory | `dist` | ✅ |
| Install Command | `npm install` | ✅ |

如果配置都正确，点击 **Deploy**。

---

## 第七步：等待部署完成

- 部署时间：30-60 秒
- 完成后会显示：**Deployment Successful**
- 访问地址：`https://kunyuan-web-xxxxxx.vercel.app`

点击这个地址，网站就上线了！

---

## 后续更新代码

每次修改代码后，执行：

```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
git add .
git commit -m "更新描述"
git push
```

Vercel 会自动检测并重新部署（约 1 分钟）！

---

## 查看部署状态

访问 Vercel Dashboard：
1. 进入 https://vercel.com/dashboard
2. 找到 `kunyuan-web` 项目
3. 点击 **Deployments** 查看所有部署记录

---

## 绑定自定义域名 `gdkunyuan.cn`

等域名 DNS 解析配置完成后（参考之前提供的 A 记录配置）：

1. 进入 Vercel Dashboard → 项目 **Settings** → **Domains**
2. 添加域名：`gdkunyuan.cn`
3. Vercel 会自动验证 DNS 配置
4. 验证通过后，就可以用 `https://gdkunyuan.cn` 访问了！

---

## 常见问题

### Q1: GitHub 用户名是什么？

访问 https://github.com/settings/profile，查看 **Username** 字段。

### Q2: git push 时提示认证失败？

使用 Personal Access Token 替代密码（见上方获取步骤）。

### Q3: Vercel 部署失败？

查看部署日志：
- Vercel Dashboard → 项目 → Deployments → 选择部署 → **View Logs**

### Q4: 如何回滚到之前的版本？

- Vercel Dashboard → 项目 → Deployments
- 找到之前的部署
- 点击右侧的 **...** → **Promote to Production**

---

## 快速检查清单

- [ ] Git 仓库已初始化
- [ ] 代码已提交到本地
- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] Vercel 账号已登录
- [ ] Vercel 项目已导入
- [ ] 构建配置已确认
- [ ] 部署已完成
- [ ] 网站可正常访问

---

需要帮助？遇到问题随时告诉我！
