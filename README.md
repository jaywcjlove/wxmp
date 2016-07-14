# Wxmp

chrome 小插件，优化在微信公众账号中发文章，因复制粘贴带过去的`font-family` CSS 样式，导致被微信过滤样式全无。使用此插件删除提交文章上所有HTML节点上的`font-family`，让复制过去的样式保持一致。  

目前删除这些标签上的`font-family`样式

> `code`,`pre`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p`,`div`,`span`

![界面预览](https://raw.githubusercontent.com/jaywcjlove/wxmp/master/wxmq.png)


## 已经实现功能

- [x] 过滤 `font-family`；
- [x] 代码高亮区域有背景颜色；
- [x] 代码高亮区域有横向滚动条强制不换行；
- [x] 增加iOS滚动滚动弹性；
- [ ] 添加设置标题工具；
- [ ] 添加字段高亮工具；
- [ ] 添加删除线工具，如：<del>删除线</del>；

# 直接安装

1. 下载扩展程序[Wxmp.crx](https://github.com/jaywcjlove/wxmp/releases) 文件
2. 在chrome里面器地址输入`chrome://extensions/` 打开插件界面
3. 将`Wxmp.crx`文件拖入chrome浏览器的扩展程序列表中

# 开发模式插件安装 

1. 下载文件压缩包解压
2. 在chrome里面器地址输入`chrome://extensions/` 打开插件界面
3. 点击`加载已解压的扩展程序...` 
4. 选择插件所在的目录


# 使用方法

1. 打开微信公众平台，新建图文消息，复制文章到编辑器中
2. 在右上角点击微信图标
3. 点击弹出的模态框上的删除按钮
4. 如果成功会在按钮后面提示`更改成功！！`