# 第一篇随笔

这是 phoenix.dev 的第一篇示例文章。你以后可以直接复制这类 Markdown 文件，改标题、正文和侧边栏配置，就能发布新的内容。

## 为什么建这个站点

我希望有一个足够简单、可长期维护的地方，用来保存那些值得反复回看的内容。它不需要账号系统、后台服务或复杂 CMS，只需要 Markdown、GitHub 和一个稳定的静态站点生成器。

## 写作方式

每篇文章都是一个 Markdown 文件。图片放在 `docs/public/images/`，正文中可以这样引用：

```md
![图片说明](/phoenix.dev/images/example.png)
```

## 下一步

把真实文章放进对应目录，然后在 `docs/.vitepress/config.mts` 的 `sidebar` 中加入链接。
