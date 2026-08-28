# phoenix.dev

个人内容网站，使用 VitePress、Markdown、GitHub Pages 和 GitHub Actions 构建。

线上地址：

https://endofnirvana.github.io/phoenix.dev/

## 本地启动

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run docs:dev
```

构建检查：

```bash
npm run docs:build
```

预览构建结果：

```bash
npm run docs:preview
```

## 新建文章

文章统一放在 `docs/` 下的分类目录中，例如：

```text
docs/notes/my-new-note.md
docs/study/my-study-note.md
docs/projects/my-project.md
docs/tools/my-tool-list.md
```

新建 Markdown 文件后，在 `docs/.vitepress/config.mts` 的 `themeConfig.sidebar` 中加入对应链接：

```ts
{ text: '文章标题', link: '/notes/my-new-note' }
```

VitePress 会自动生成右侧文章目录，也会自动处理上一篇 / 下一篇导航。

## 添加图片

图片统一放在：

```text
docs/public/images/
```

Markdown 中使用站点 base 路径引用：

```md
![图片说明](/phoenix.dev/images/example.png)
```

## 修改导航

顶部导航在 `docs/.vitepress/config.mts` 的 `themeConfig.nav` 中维护。

左侧侧边栏在 `docs/.vitepress/config.mts` 的 `themeConfig.sidebar` 中维护。

首页内容在 `docs/index.md` 中维护。

## 部署网站

把代码推送到 `main` 分支：

```bash
git add .
git commit -m "Initialize VitePress site"
git push -u origin main
```

GitHub Actions 会自动运行 `.github/workflows/deploy.yml`，构建完成后发布到 GitHub Pages。

首次使用 GitHub Pages 时，请在仓库 Settings -> Pages 中确认 Source 选择为 GitHub Actions。

## 项目结构

```text
docs/
  index.md
  about.md
  notes/
  study/
  projects/
  tools/
  public/
    images/
  .vitepress/
    config.mts
    theme/
.github/
  workflows/
    deploy.yml
```
