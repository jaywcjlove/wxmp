<div align="center">

<h1 align="center">微信公众号 Markdown 编辑器</h1>

</div>

微信公众号文章 Markdown 编辑器，使用 markdown 语法创建一篇简介美观大方的微信公众号图文。由于发版本麻烦，和一些功能无法扩展停滞开发了，未来不再开发 Chrome 的工具(暂存在 chrome 分支)，通过 web 版本定制更丰富的功能。

## 功能特性

开发计划和一些功能介绍，有需求可以在 issue 中提，使得工具变得更加完善。下面示例用于 web 应用中效果展示。

- [x] 支持 Markdown 所有基础语法
- [x] 支持自定义 CSS 样式
- [ ] 支持主题选择 & 配置。
- [x] 支持明暗两种主题预览。
- [ ] 支持色盘取色，快速替换文章整体色调

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

这是一个简单的脚注[^1]。 页面最后有一些额外的文字描述。注意这不是完整的注脚[^2]。

[^1]: https://github.github.com/gfm/
[^2]: 微信文章不支持锚点跳转和打开第三方 URL 超链接，所以不支持完整的注脚

### 支持注释

<ruby>
  汉 <rp></rp><rt>Han</rt><rp></rp>
  字 <rp></rp><rt>zi</rt><rp></rp>
  拼 <rp></rp><rt>pin</rt><rp></rp>
  音 <rp></rp><rt>yin</rt><rp></rp>
  注 <rp></rp><rt>zhu</rt><rp></rp>
  音 <rp></rp><rt>yin</rt><rp></rp>
</ruby>

## License

Licensed under the MIT License.
