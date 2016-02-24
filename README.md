# Wxmp

chrome 小插件，优化在微信公众账号中发文章，因复制粘贴带过去的`font-family` CSS 样式，导致被微信过滤样式全无。使用此插件删除提交文章上所有HTML节点上的`font-family`，让复制过去的样式保持一致。  

目前删除这些标签上的`font-family`样式

> `code`,`pre`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p`,`div`,`span`

![界面预览](https://raw.githubusercontent.com/jaywcjlove/wxmp/master/wxmq.png)


# 插件安装 

1. 下载文件压缩包解压
2. 在chrome里面器地址输入`chrome://extensions/` 打开插件界面
3. 点击`加载已解压的扩展程序...` 
4. 选择插件所在的目录


# 使用方法

1. 打开微信公众平台，新建图文消息，复制文章到编辑器中
2. 在右上角点击微信图标
3. 点击弹出的模态框上的删除按钮
4. 如果成功会在按钮后面提示`更改成功！！`