# 无 Git 安装：GitHub 上传指南

## 方案：直接在 GitHub 网页上传文件（无需 Git）

---

## 第一步：准备上传的文件

您需要上传整个 `kunyuan-web` 文件夹到 GitHub。

**重要：先删除不需要上传的文件夹**
- 删除 `node_modules/`（如果不删除，上传会非常慢）
- 删除 `dist/`（Vercel 会自动构建）

---

## 第二步：在 GitHub 上传

### 1. 打开您的仓库
```
https://github.com/gdkunyuan/kunyuan-web
```

### 2. 点击「上传文件」

点击仓库页面右上角的 **「Add file」** → **「Upload files」**

### 3. 拖拽文件

将以下文件和文件夹拖到上传区域：

**必须上传的文件：**
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `package.json`
- `tailwind.config.js`
- `.gitignore`
- `src/` 文件夹（整个文件夹）
- `public/` 文件夹（整个文件夹）

**不需要上传：**
- ❌ `node_modules/`（删除或跳过）
- ❌ `dist/`（删除或跳过）
- ❌ `.workbuddy/`（跳过）

### 4. 提交

在 "Commit changes" 框中填写：
- 标题：`Initial commit: 广东坤元企业官网`
- 描述：`企业官网 Vite + React 项目`
- 点击绿色按钮 **「Commit changes」**

---

## 第三步：在 Vercel 部署

上传完成后，在 Vercel 导入项目：

1. 打开 👉 **https://vercel.com**
2. 用 GitHub 账号登录
3. 点击 **「Add New」** → **「Project」**
4. 找到 `kunyuan-web` → **「Import」**
5. Vercel 会自动识别 Vite 项目
6. 点击 **「Deploy」**

---

## 第四步：部署完成

等待 1-2 分钟，Vercel 会生成一个访问地址：
```
https://kunyuan-web-xxx.vercel.app
```

**直接访问这个地址，网站就正常显示了！**

---

## 下一步：绑定域名

等待域名实名认证通过后：
1. 在 Vercel → **「Domains」** → **「Add Domain」**
2. 输入 `gdkunyuan.cn`
3. 复制 CNAME 地址
4. 在 DNSPod 添加 CNAME 解析

详细步骤见：`gdkunyuan.cn_配置指南.md`

---

## 需要帮助吗？

- 文件太多不知道怎么上传？我可以用压缩包方式帮您
- Vercel 部署失败？截图发给我
- 其他问题？告诉我
