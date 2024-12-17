### 简介
这是我的github.io博客仓库，我在这里介绍它的实现方式。  
如果你还没看过它的话，你可以点击->[我的博客](http://nivdc.github.io/)<-访问。
  
其主要灵感来源于我看过的很多简洁的博客，和Apache的IndexOf页。  
我发现我并不需要很复杂的设计，只需要简单的markdown转html就能够实现不错的效果。  
**注意：** 如果你要复用我的博客代码，请不要使用fork，不然仓库的历史记录中仍会保留我的博客内容。
  
编写博客并不困难，难的是写完了以后还要进行一系列繁杂的部署流程才能更新到网站上。  
我的解决办法是制作一个特殊的主页分发markdown渲染库和md文件，然后直接使用浏览器渲染md文件。  
这个方法的几个小缺点在于:
1. 由于没有构建过程，哪怕是加载一个极其简单的目录页也要下载大约128kb的依赖库文件。  
2. 由于路由功能是在前端实现的，当访问文章的时候刷新页面的时候会导致404。应用到gituhb pages上面的时候，
3. 由于单页面应用本身的特性，搜索引擎无法抓取完整的内容。由于这个原因我决定转换技术方向。

在可预见的未来，也许我们最终还是要引入一个构建过程来解决文章分类的问题。  
一个解决的思路是使用[git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
在提交前生成文件并随附提交。  
不过这个问题我们最好留到文章多到需要分类的时候在解决。  

#### 使用技术
* [Marked](https://marked.js.org/) - markdown渲染库
* [Alpinejs](https://alpinejs.dev/) - modern jQuery
* [giscus](https://giscus.app/zh-CN) - 利用 GitHub Discussions 实现的评论系统 (comming soon)
* CDN服务提供商 - [ZSTATIC](https://zstatic.net/)

<!-- * [octokit.js](https://github.com/octokit/octokit.js/) - github SDK -->
<!-- 上面这个SDK在国内的网络环境下无法使用。 -->