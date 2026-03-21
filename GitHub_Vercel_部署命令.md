# Vercel 部署 - GitHub 推送命令

## 第一步：初始化 Git 仓库（如果还没有）

```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
git init
git add .
git commit -m "Initial commit: 广东坤元企业官网"
```

## 第二步：连接到 GitHub 仓库

### 方式 A：在 GitHub 创建新仓库，然后推送

1. 访问 https://github.com/new
2. 仓库名：`kunyuan-web`
3. 点击 "Create repository"
4. 复制您的仓库地址（格式：https://github.com/你的用户名/kunyuan-web.git）

然后执行：
```bash
git remote add origin https://github.com/你的用户名/kunyuan-web.git
git branch -M main
git push -u origin main
```

### 方式 B：使用 GitHub CLI 创建仓库（需要先安装 gh）

```bash
gh repo create kunyuan-web --public --source=. --remote=origin --push
```

## 第三步：在 Vercel 导入项目

1. 访问 https://vercel.com/new
2. 登录您的账号
3. 点击 "Import Git Repository"
4. 找到 `kunyuan-web` 仓库
5. 点击 "Import"

## 第四步：配置构建设置（Vercel 会自动识别，通常不需要手动修改）

Vercel 会自动检测到这是 Vite 项目，配置如下：

| 配置项 | 自动识别值 |
|--------|-----------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

如果配置不对，可以手动修改。

## 第五步：点击 Deploy

等待 30-60 秒，部署完成后会得到一个类似这样的地址：
```
https://kunyuan-web-xxxxxx.vercel.app
```

## 后续更新代码

每次修改代码后：

```bash
git add .
git commit -m "更新描述"
git push
```

Vercel 会自动检测并重新部署！
