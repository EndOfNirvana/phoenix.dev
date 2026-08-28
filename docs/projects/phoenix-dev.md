# phoenix.dev 建站记录

phoenix.dev 是一个以 VitePress 为基础的个人内容网站，目标是简单、免费、稳定，并且方便长期用 Markdown 维护。

## 项目原则

- 内容优先
- 结构清晰
- 桌面端阅读体验优先
- 不引入数据库、后端 API 或复杂第三方服务

## 部署方式

提交到 `main` 分支后，GitHub Actions 会构建 VitePress，并把 `docs/.vitepress/dist` 发布到 GitHub Pages。
