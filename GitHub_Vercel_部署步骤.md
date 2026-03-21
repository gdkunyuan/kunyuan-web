# GitHub + Vercel 部署完整步骤

## 第一步：注册 GitHub 账号

### 如果还没有 GitHub 账号

1. 打开 GitHub 注册页面：
   👉 **https://github.com/signup**

2. 填写注册信息：

   | 字段 | 填写内容 |
   |------|---------|
   | **Email address** | `gdkunyuan@163.com` |
   | **Password** | 自行设置一个安全密码（不要用网易邮箱密码） |
   | **Username** | `gdkunyuan`（如果被占用，加数字如 `gdkunyuan01`） |
   | **Country/Region** | China |

3. 点击 **「Continue」**

4. 检查邮箱，点击 GitHub 发送的验证链接

5. 完成！

### 如果已有 GitHub 账号

直接登录即可。

---

## 第二步：在 GitHub 创建仓库

1. 登录 GitHub 后，点击右上角 **「+」** → **「New repository」**

2. 填写仓库信息：

   | 字段 | 填写内容 |
   |------|---------|
   | **Repository name** | `kunyuan-web` |
   | **Description** | 广东坤元企业管理咨询有限公司官网 |
   | **Public/Private** | 选择 **Public**（公开，免费托管） |

3. 点击 **「Create repository」**

4. 记住您的 GitHub 用户名（例如：`gdkunyuan`）

---

## 第三步：安装 Git（如果没有）

### 检查是否已安装 Git

打开 PowerShell（或 Git Bash），输入：
```bash
git --version
```

如果显示版本号（如 `git version 2.xx.x`），说明已安装，跳过此步。

### 安装 Git

如果没有安装：

1. 打开 Git 官网下载：
   👉 **https://git-scm.com/download/win**

2. 下载 Windows 版本并安装

3. 安装时全部使用默认选项，一路点击 **「Next」**

4. 安装完成后，重启 PowerShell

---

## 第四步：初始化 Git 仓库

打开 PowerShell，执行以下命令：

```bash
# 进入项目目录
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: 广东坤元企业官网"
```

---

## 第五步：连接 GitHub 仓库

**注意：** 将 `<你的用户名>` 替换为实际的 GitHub 用户名

```bash
# 添加远程仓库（替换用户名）
git remote add origin https://github.com/<你的用户名>/kunyuan-web.git

# 设置主分支
git branch -M main

# 推送到 GitHub
git push -u origin main
```

如果提示输入用户名和密码：
- **Username**: 输入您的 GitHub 用户名
- **Password**: 输入 GitHub 的 **Personal Access Token**（不是邮箱密码！）

### 获取 Personal Access Token

1. 在 GitHub 登录后，点击右上角头像 → **「Settings」**
2. 左侧菜单 → 最底部 **「Developer settings」**
3. **「Personal access tokens」** → **「Tokens (classic)」**
4. 点击 **「Generate new token (classic)」**
5. 设置：
   - **Note**: `kunyuan-web deployment`
   - **Expiration**: 选一个有效期（如 90 days 或 No expiration）
   - **Select scopes**: 勾选 `repo`（这个最重要）
6. 点击 **「Generate token」**
7. **复制生成的 token**（只显示一次，务必保存！）

---

## 第六步：在 Vercel 导入 GitHub 项目

1. 打开 Vercel：
   👉 **https://vercel.com**

2. 登录/注册账号（推荐用 GitHub 账号登录，这样 Vercel 可以自动访问您的仓库）

3. 登录后，点击 **「Add New...」** → **「Project」**

4. 在 **「Import Git Repository」** 部分，找到 `kunyuan-web` 项目

5. 点击 **「Import」**

6. 配置项目：

   | 配置项 | 填写值 |
   |--------|--------|
   | **Framework Preset** | Vite |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
   | **Install Command** | `npm install` |
   | **Project Name** | `kunyuan-web` |

7. 点击 **「Deploy」**

8. 等待 1-2 分钟，部署完成！

---

## 第七步：访问网站

部署成功后，Vercel 会给您一个默认域名：

```
https://kunyuan-web-xxx.vercel.app
```

点击这个地址，网站就上线了！

---

## 第八步：绑定 gdkunyuan.cn 域名

### 8.1 在 Vercel 添加域名

1. 进入 Vercel Dashboard，找到 `kunyuan-web` 项目
2. 点击 **「Settings」**
3. 进入 **「Domains」**
4. 输入域名：`gdkunyuan.cn`
5. 点击 **「Add」**

6. Vercel 会显示 CNAME 地址，例如：
   ```
   cname.vercel-dns.com
   ```

   **复制这个 CNAME 地址！**

### 8.2 配置 DNS 解析

1. 打开腾讯云 DNS 控制台：
   👉 **https://console.cloud.tencent.com/cns**

2. 找到域名 `gdkunyuan.cn`，点击 **「解析」**

3. 添加解析记录：

   | 主机记录 | 记录类型 | 线路类型 | 记录值 | TTL |
   |---------|---------|---------|--------|-----|
   | `www` | **CNAME** | 默认 | `cname.vercel-dns.com`（从 Vercel 复制的） | 600 |
   | `@` | **CNAME** | 默认 | `cname.vercel-dns.com`（从 Vercel 复制的） | 600 |

   > `@` 表示根域名

4. 点击 **「保存」**

### 8.3 等待 DNS 生效

DNS 解析生效时间：
- **通常**：5-10 分钟
- **最长**：48 小时（很少情况）

### 8.4 验证域名访问

DNS 生效后，访问：
- `https://gdkunyuan.cn`
- `https://www.gdkunyuan.cn`

---

## 更新网站内容

### 修改本地文件

修改 `kunyuan-web` 项目中的任何文件。

### 推送更新

```bash
cd C:\Users\oucx\WorkBuddy\20260320112509\kunyuan-web

# 添加修改的文件
git add .

# 提交
git commit -m "更新描述"

# 推送到 GitHub
git push
```

Vercel 会**自动检测并重新部署**（约 1 分钟）！

---

## 常见问题

### Q: Git push 时提示密码错误？
A: GitHub 不再支持密码登录，必须使用 **Personal Access Token**。详见上面第五步的说明。

### Q: Vercel 部署失败？
A: 检查 `package.json` 中的构建脚本是否正确：
```json
"scripts": {
  "build": "vite build"
}
```

### Q: 域名访问不到？
A:
1. 检查 DNS 解析是否生效
2. 在 Vercel Domains 页面查看域名状态（是否显示 ✅ Valid Configuration）
3. 清除浏览器缓存

### Q: HTTPS 证书多久生效？
A: Vercel 自动为域名申请 SSL 证书，通常几分钟内生效。

---

## 总结

| 步骤 | 所需时间 | 状态 |
|------|---------|------|
| 注册 GitHub | 5 分钟 | ⬜ 待完成 |
| 创建仓库 | 2 分钟 | ⬜ 待完成 |
| 推送代码到 GitHub | 3 分钟 | ⬜ 待完成 |
| Vercel 部署 | 2 分钟 | ⬜ 待完成 |
| 绑定域名 | 5 分钟 | ⬜ 待完成 |
| DNS 生效 | 10 分钟 | ⬜ 待完成 |

**总时间：约 30 分钟**（不包括域名实名认证时间）

---

## 需要帮助？

如果在任何步骤遇到问题：
1. 截图发给我
2. 告诉我具体的错误信息
3. 我帮您排查解决

现在开始吧！建议先完成 GitHub 注册和仓库创建。
