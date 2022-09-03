<div align="center">
  <h1 align="center">微信公众号 Markdown 编辑器</h1>
</div>

![微信公众号 Markdown 编辑器](https://user-images.githubusercontent.com/1680273/188264183-a6b8cb6a-92e1-4a73-afc5-4f0234b26ed3.png)

微信公众号文章 Markdown 在线编辑器，使用 markdown 语法创建一篇简介美观大方的微信公众号图文。由于发版本麻烦，和一些功能无法扩展停滞开发了，未来不再开发 Chrome 的插件(暂存在 chrome 分支)，通过 web 版本定制更丰富的功能。

## 功能特性

开发计划和一些功能介绍，有需求可以在 issue 中提，使得工具变得更加完善。下面示例用于 web 应用中效果展示。

- [x] 支持 Markdown 所有基础语法
- [x] 支持自定义 CSS 样式
- [x] 支持主题选择 & 编辑预览。
- [x] 支持明暗两种主题预览。
- [ ] 支持代码块主题样式选择。
- [ ] 支持全局字号大小选择。
- [ ] 支持色盘取色，快速替换文章整体色调
- [x] 支持 URL 参数加载 Markdown 内容。
- [x] 支持 URL 参数选择预览主题。

### 支持代码块样式

下面是 `jsx` 代码块展示示例，并高亮代码，用于 web 应用中效果展示。

```jsx
function Demo() {
  return <div className="demo">Hello World!</div>
}
```

下面是 `css` 代码块展示示例，并高亮代码，用于 web 应用中效果展示。

```css
li {
  font-size: 16px;
  margin: 0;
  line-height: 26px;
  color: rgb(30 41 59);
  font-family:-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif;
}
```

### 支持内联代码

> 用于 web 应用中效果展示。

Inline Code `{code: 0}`

### 支持表格

表格无法使用自定义样式，暂时没找到解决途径

| Header 1 | Header 2 |
| --- | --- |
| Key 1 | Value 1 |
| Key 2 | Value 2 |
| Key 3 | Value 3 |

### 支持 GFM 脚注

这是一个简单的 Markdown[^1] 语法的脚注[^2]。 页面最后有一些额外的文字描述。注意这不是完整的注脚[^3]特性。

[^1]: GitHub 风格的 Markdown 规范 https://github.github.com/gfm/
[^2]: 脚注 https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/
[^3]: 微信文章不支持锚点跳转和打开第三方 URL 超链接，所以不支持完整的注脚特性。

### 支持注释

```html
<ruby>
  汉 <rt>Han</rt>
</ruby>
```

汉字注音效果：
<ruby>
  汉 <rt>Han</rt>
  字 <rt>zi</rt>
  拼 <rt>pin</rt>
  音 <rt>yin</rt>
  注 <rt>zhu</rt>
  音 <rt>yin</rt>
</ruby>

### 支持自定义样式
<!--rehype:style=color: red;-->

在 Markdown 中 HTML 注释也可以用在 markdown 中，利用这一特点，为一些内容自定一样式。使用 HTML 注释 `<!--rehype:xxx-->`<!--rehype:style=color: red;background: #ff000033;--> 让 Markdown 支持样式自定义。

```markdown
## 定义标题样式
<!--rehype:style=display: flex; height: 230px; align-items: center; justify-content: center; font-size: 38px;-->

支持对某些文字变更样式，如_文字颜色_<!--rehype:style=color: red;-->，文字颜色将被设置为红色(red)。
```

⚠️ 注意：这一特性可能适用于有一定 css 前端基础知识的用户，不过它也非常简单，使用 `<!--rehype:style=` 开始，`-->` 结束，中间包裹 css 样式，如 `color: red;` 设置文字红色。


### 标记忽略内容

此特性利用 HTML 注释在 markdown 中被忽略的特性，标记需要忽略的内容，标记开始 `<!--rehype:ignore:start-->`，标记结束 `<!--rehype:ignore:end-->`，被标记的内容在微信 Markdown 编辑器预览中不显示。在其它预览工具中展示内容，比如 GitHub 中能展示。

```markdown
# 注释忽略

<!--rehype:ignore:start-->内容在微信 Markdown 编辑器预览中不显示。在其它预览工具中展示内容。<!--rehype:ignore:end-->
```

### 支持 URL 参数加载 Markdown 内容

```
https://<URL>?md=<Markdown 资源 URL>
```

加载 Markdown 内容的示例 URL：

```
https://jaywcjlove.github.io/wxmp/#/?theme=underscore&md=https://raw.githubusercontent.com/jaywcjlove/c-tutorial/master/README.md

Markdown URL 地址: https://raw.githubusercontent.com/jaywcjlove/c-tutorial/master/README.md
```

## 主题定制

在目录 `src/themes` 中存放默认主题，在 `src/store/context.tsx` 中配置主题，主题使用 css 定义样式，不支持复杂的选择器。提供在线主题编辑器，欢迎修改并 PR 进仓库供大家使用。

```css
/* 1~6 标题样式定义 */
h1 {} h2 {} h3 {} h4 {} h5 {} h6 {}
a { color: red; } /* 超链接样式定义 */
strong {} /* 加粗样式定义 */
del {} /* 删除线样式定义 */
em {}  /* 下划线样式定义 */
u {}   /* 下划线样式定义 */
p {}   /* 段落样式定义 */
ul {}  /* 无序列表样式定义 */
ol {}  /* 有序列表样式定义 */
li {}  /* 列表条目样式定义 */
blockquote {} /* 块级引用样式定义 */
table {}
td {}
th {}
pre {}        /* 样式定义 */
.code-highlight {} /* 代码块样式定义 */
.code-line {}      /* 代码块行样式定义 */
.code-spans {}     /* 代码块行样式定义 */

sup {} /* GFM 脚注样式定义 */
.footnotes-title {} /* GFM 脚注，参考标题样式定义 */
.footnotes-list {} /* GFM 脚注，参考列表样式定义 */

.image-warpper {} /* 图片父节点样式定义 */
.image {} /* 图片样式定义 */

/* 部分代码高亮样式 */
.comment {}
.property {}
.function {}
.keyword {}
.punctuation {}
.unit {}
.tag {}
.color {}
.selector {}
.quote {}
.number {}
.attr-name {}
.attr-value {}
```

## 部署

[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/wxmp?logo=docker)](https://hub.docker.com/r/wcjiang/wxmp) [![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/wxmp?logo=docker)](https://hub.docker.com/r/wcjiang/wxmp) [![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/wxmp?logo=docker)](https://hub.docker.com/r/wcjiang/wxmp)

轻松通过 docker 部署《微信公众号 Markdown 编辑器》网站应用。

```bash
docker pull wcjiang/wxmp
# Or
docker pull ghcr.io/jaywcjlove/wxmp:latest
```

```bash
docker run --name wxmp --rm -d -p 96611:3000 wcjiang/wxmp:latest
# Or
docker run --name wxmp -itd -p 96611:3000 wcjiang/wxmp:latest
# Or
docker run --name wxmp -itd -p 96611:3000 ghcr.io/jaywcjlove/wxmp:latest
```

在浏览器中访问以下 URL

```
http://localhost:96611/
```

## 贡献者

一如既往，感谢我们出色的贡献者！

<a href="https://github.com/jaywcjlove/wxmp/graphs/contributors">
  <img src="https://jaywcjlove.github.io/wxmp/CONTRIBUTORS.svg" />
</a>

上图贡献者列表，由 [action-contributors](https://github.com/jaywcjlove/github-action-contributors)[^4] 自动生成贡献者图片。


[^4]: Action Contributors https://github.com/jaywcjlove/github-action-contributors

## License

根据 MIT 许可证获得许可。
