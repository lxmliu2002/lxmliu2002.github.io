# Contribution Guide

本文档用于规范本仓库的提交流程和 Git commit message 格式，便于后续维护、回溯和自动化处理。

## 提交流程

1. 从最新主分支创建新分支：

   ```bash
   git checkout main
   git pull
   git checkout -b docs/update-news
   ```

2. 修改文件后检查改动：

   ```bash
   git status
   git diff
   ```

3. 暂存需要提交的文件：

   ```bash
   git add _pages/about.md
   ```

4. 按标准格式提交：

   ```bash
   git commit -m "docs(news): add NII internship offer"
   ```

5. 推送到远程仓库：

   ```bash
   git push origin docs/update-news
   ```

## Commit Message 格式

推荐使用 Conventional Commits 风格：

```text
type(scope): subject
```

当需要补充更多信息时，可以使用多行格式：

```text
type(scope): subject

body

footer
```

### 字段说明

- `type`: 本次提交的类型，必须使用小写英文。
- `scope`: 本次提交影响的范围，可选，建议简短明确。
- `subject`: 本次提交的简短说明，使用英文，首字母小写，不以句号结尾。
- `body`: 可选，用于说明背景、原因或重要实现细节。
- `footer`: 可选，用于关联 issue、PR 或标记破坏性变更。

## 常用 Type

- `feat`: 新增功能或页面内容。
- `fix`: 修复问题。
- `docs`: 修改文档、主页文字、新闻、说明文件。
- `style`: 仅调整格式、空格、换行、样式，不改变功能。
- `refactor`: 重构代码，不新增功能也不修复 bug。
- `perf`: 性能优化。
- `test`: 新增或修改测试。
- `build`: 构建配置、依赖、打包相关改动。
- `ci`: GitHub Actions 等 CI 配置改动。
- `chore`: 其他维护性改动。

## Scope 示例

- `news`: News 区域。
- `profile`: 个人介绍。
- `publication`: 论文列表。
- `project`: 项目展示。
- `internship`: 实习经历。
- `config`: 站点配置。
- `assets`: 图片、字体、脚本、样式等静态资源。

## Commit 示例

```bash
git commit -m "docs(news): add NII internship offer"
git commit -m "docs(profile): update education information"
git commit -m "feat(project): add new research project"
git commit -m "fix(styles): correct mobile layout overflow"
git commit -m "chore(deps): update jekyll dependencies"
```

## 写法要求

- 一次提交只做一类相关改动，避免把无关修改混在一起。
- `subject` 控制在 50 个字符左右，尽量清楚说明结果。
- 不使用模糊描述，例如 `update`, `change`, `fix bug`。
- 涉及公开页面内容时，提交前应检查链接、日期和显示文本。
- 修改个人主页内容时，优先使用 `docs(...)` 类型。

## 本仓库推荐提交

本次新增 NII 国际交换 offer 新闻，可以使用：

```bash
git add _pages/about.md CONTRIBUTING.md
git commit -m "docs(news): add NII internship offer"
```
