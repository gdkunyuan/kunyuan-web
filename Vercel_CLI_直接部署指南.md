# Vercel CLI 直接部署（不需要 Git）

## 优势
- ✅ 无需安装 Git
- ✅ 无需 GitHub 账号
- ✅ 最快速简单

---

## 第一步：安装 Vercel CLI

打开 PowerShell 或命令提示符，执行：

```bash
npm install -g vercel
```

**注意**：需要先安装 Node.js，如果没有安装，访问：https://nodejs.org/

---

## 第二步：登录 Vercel

```bash
vercel login
```

按照提示：
- 选择登录方式（推荐用邮箱）
- 输入 `gdkunyuan@163.com`
- 验证邮箱

---

## 第三步：首次部署

```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web
vercel
```

按提示操作（全部按回车使用默认设置）：

```
? Set up and deploy "~/kunyuan-web"? [Y/n] y
? Which scope do you want to deploy to? gdkunyuan
? Link to existing project? [y/N] n
? What's your project's name? kunyuan-web
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

---

## 第四步：部署到生产环境

```bash
vercel --prod
```

---

## 第五步：完成！

部署完成后，会得到一个类似这样的地址：
```
https://kunyuan-web-xxxxxx.vercel.app
```

点击访问，网站就上线了！🎉

---

## 后续更新代码

修改代码后，重新执行：

```bash
vercel --prod
```

---

## 查看已部署的项目

```bash
vercel list
```
