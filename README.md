### 简介
这是我的github.io博客仓库，我在这里介绍它的实现方式。  
如果你还没看过它的话，你可以点击->[我的博客](http://nivdc.github.io/)<-访问。
  
其主要灵感来源于我看过的很多简洁的博客(特别是[Blog of Ziyao](https://ziyao233.github.io/))，和Apache的IndexOf页。  
我发现我并不需要很复杂的设计，只需要简单的markdown转html就能够实现不错的效果。  
**注意：** 如果你要复用我的博客代码，请不要使用fork，不然仓库的历史记录中仍会保留我的博客内容。
  
编写博客并不困难，难的是写完了以后还要进行一系列繁杂的部署流程才能更新到网站上。  
我的解决办法是编写一个[git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
脚本，在提交前生成文件并随附提交。  
git hooks本身支持多种脚本语言，而我希望能够尽可能地开箱即用，因此就需要使用一种普遍流行的脚本语言。  
那么，还能有什么脚本语言能比python更流行呢？  

另外，注意github pages本身也有一个[自带的静态站点生成器Jekyll](https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)可以实现类似的功能，
你只要在仓库里上传自己的md文件Jekyll就会自动为你生成html。

#### 使用技术
* [python-markdown2](https://github.com/trentm/python-markdown2) - markdown渲染库
* [Alpinejs](https://alpinejs.dev/) - modern jQuery
* [giscus](https://giscus.app/zh-CN) - 利用 GitHub Discussions 实现的评论系统 (comming soon)
* CDN服务提供商 - [ZSTATIC](https://zstatic.net/)

<!-- * [octokit.js](https://github.com/octokit/octokit.js/) - github SDK -->
<!-- 上面这个SDK在国内的网络环境下无法使用。 -->