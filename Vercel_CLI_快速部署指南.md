# Vercel CLI 快速部署指南

## 第一步：安装 Vercel CLI

打开 PowerShell 或命令提示符，执行：

```bash
npm install -g vercel
```

## 第二步：登录 Vercel

```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
vercel login
```

按照提示：
- 选择登录方式（推荐用 GitHub 邮箱）
- 输入邮箱并验证

## 第三步：首次部署（预览环境）

在项目目录执行：

```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
vercel
```

系统会提示配置，可以直接按回车使用默认配置：

```
? Set up and deploy "~/kunyuan-web"? [Y/n] y
? Which scope do you want to deploy to? (您的用户名)
? Link to existing project? [y/N] n
? What's your project's name? kunyuan-web
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

首次部署会生成一个预览 URL，类似：
```
https://kunyuan-web-xxxxxx.vercel.app
```

## 第四步：部署到生产环境

正式上线时，使用：

```bash
vercel --prod
```

这样会覆盖之前的部署，访问地址会固定下来。

## 后续更新代码

修改代码后，重新执行：

```bash
vercel --prod
```

## 查看已部署的项目

```bash
vercel list
```

## 删除部署

```bash
vercel remove kunyuan-web
```

---

## 配置文件（可选）

如果 Vercel 识别有误，可以在项目根目录创建 `vercel.json`：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 常见问题

### Q: 部署后网站显示 404？
A: 检查 Output Directory 是否为 `dist`

### Q: 想要每次修改自动部署？
A: 建议使用 GitHub + Vercel 的方式（见 GitHub_Vercel_部署命令.md）

### Q: 如何查看部署日志？
A: 访问 Vercel Dashboard → 项目 → Deployments → 选择部署 → 点击 "View Logs"
