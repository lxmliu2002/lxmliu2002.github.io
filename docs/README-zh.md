# 刘修铭的学术主页

[English](../README.md) | 简体中文

这是[刘修铭个人学术主页](https://lxmliu2002.github.io/)的源代码。网站使用 Jekyll 构建，并通过 GitHub Pages 部署。

## 主要功能

- 在同一 URL 内切换中英文，并在浏览器中保存语言选择。
- 适配桌面端和移动端的响应式布局。
- 支持浅色与深色主题。
- 以结构化板块展示个人简介、动态、教育经历、科研与产业经历、论文、项目、荣誉、学术服务和联系方式。
- 动态与邮箱列表默认折叠，避免页面初始信息过密。
- 从 `main` 分支直接通过 GitHub Pages 部署。

## 项目结构

| 路径 | 用途 |
| --- | --- |
| [`_pages/about.md`](../_pages/about.md) | 英文主页内容 |
| [`_pages/about_zh.md`](../_pages/about_zh.md) | 中文主页内容 |
| [`_data/navigation.yml`](../_data/navigation.yml) | 中英文导航文字 |
| [`_layouts/home.html`](../_layouts/home.html) | 主页文档布局 |
| [`_includes/home-masthead.html`](../_includes/home-masthead.html) | 页头、导航、主题与语言控件 |
| [`assets/css/home.scss`](../assets/css/home.scss) | 主页样式与响应式规则 |
| [`assets/js/home.js`](../assets/js/home.js) | 主题、语言、导航和折叠列表交互 |
| [`images/`](../images/) | 头像、机构标志和站点图片 |

中英文内容文件使用相同的章节结构和 ID。中文内容作为页内模板加载，因此切换语言时不会添加 `/zh/`，也不会离开当前主页。

## 本地开发

### 环境要求

- Ruby 3.3.12
- Bundler
- 兼容 Jekyll 的构建环境

安装依赖：

```bash
bundle install
```

启动支持实时刷新的本地服务器：

```bash
bash run_server.sh
```

在浏览器中打开 [http://127.0.0.1:4000](http://127.0.0.1:4000)。修改 `_config.yml` 后需要重启服务器，因为 Jekyll 不会自动重新加载配置文件。

## 构建检查

提交前运行以下检查：

```bash
bundle exec jekyll build
node --check assets/js/home.js
git diff --check
```

构建结果会生成在 `_site/` 目录中。

## 部署

代码推送到 `main` 后，GitHub Pages 会自动构建并发布网站：

```bash
git push origin main
```

线上地址为 [https://lxmliu2002.github.io/](https://lxmliu2002.github.io/)。

## 内容维护约定

- 新增或调整章节顺序时，保持 `_pages/about.md` 与 `_pages/about_zh.md` 的结构一致。
- 保持 `_data/navigation.yml` 中英文导航的顺序与正文板块一致。
- 展示样式和交互逻辑应分别放在 `assets/css/home.scss` 与 `assets/js/home.js` 中，页面文件只维护内容。
- 未明确批准公开传播时，不要将私有稿件或审稿中的论文文件发布到网站。

## 致谢

主页设计参考了 [Weiyuan Li 的个人主页](https://github.com/KuroIsCoding/KuroIsCoding.github.io)和 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io)。相关上游署名与许可证说明保留在本文档和 [`LICENSE`](../LICENSE) 中。

AcadHomepage 使用了 [Font Awesome](https://fontawesome.com/)，并受到 [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)与 [Academic Pages](https://github.com/academicpages/academicpages.github.io)的启发。项目早期开发也参考了[通义千问（Qwen）](https://chat.qwen.ai/)提供的技术资料与思路。

## 许可证

许可证及上游署名详情请参见 [`LICENSE`](../LICENSE)。
