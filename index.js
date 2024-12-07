// 注意：github的contents api只能够申请到1,000个文件，https://docs.github.com/zh/rest/repos/contents
// 如果要进一步扩展需要使用trees api，不过我不认为我能写出一千篇博客，笑...想想还蛮可悲的...哭

const hostname = window.location.hostname
const repo = hostname
const owner = hostname.split('.')[0]
// const repo = 'lobby'
// const owner = 'nivdc'

document.addEventListener('alpine:init', () => {
    Alpine.data('body', () => {
        const body = {
            async init(){
                this.nav.clickButton({innerText:"文章列表"})

                window.addEventListener("popstate", async (event) => {
                    if(window.location.pathname === "/") 
                        this.article.html = ""
                    else {
                        const md = await (await fetch(event.state.download_url)).text()
                        this.article.html = marked.parse(md)
                    }
                })
            },

            header:{
                get show(){
                    return body.$data.article.html.length > 0 === false
                }
            },

            nav:{
                get show(){
                    return body.$data.article.html.length > 0 === false
                },
                info:"",
                files:[],
                async clickButton(element){
                    this.info = ""
                    switch(element.innerText){
                        case '文章列表':{
                            var response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/public/articles`)
                            // var response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/`)
                        break}

                        case '草稿列表':{
                            var response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/public/drafts`)
                        break}
                    }

                    if(response && response.ok){
                        this.files = await response.json()
                    }else{
                        this.files = []
                    }


                    if(this.files.length === 0) this.info = "如果你看见这个，说明在这个列表下我还什么都没有写。";
                },
                async clickFile(fileObject){
                    if(fileObject.name.endsWith('.md')){
                        const md = await (await fetch(fileObject.download_url)).text()
                        this.article.html = marked.parse(md)
                        history.pushState(cloneDeep(fileObject), "", `./${fileObject.path.split('.')[0]}`)
                    }
                }
            },

            article:{
                html:"",
                get show(){
                    return this.html.length > 0
                }
            }
        }

        return body
    })

})

function cloneDeep(o){
    return JSON.parse(JSON.stringify(o))
}