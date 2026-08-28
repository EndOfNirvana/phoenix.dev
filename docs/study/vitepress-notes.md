# VitePress 学习记录

VitePress 适合用来维护以 Markdown 为主的个人文档站。内容和代码都放在 Git 仓库里，部署到 GitHub Pages 后，维护成本很低。

## 当前配置

- 站点根目录：`docs/`
- 配置文件：`docs/.vitepress/config.mts`
- 静态资源：`docs/public/`
- 构建输出：`docs/.vitepress/dist`

## 关键点

仓库名是 `phoenix.dev`，GitHub Pages 使用 project site 路径，因此 `base` 需要设置为 `/phoenix.dev/`。
