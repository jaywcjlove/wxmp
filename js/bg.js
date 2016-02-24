chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if (request.hello == "btn_del_family") {
            var bodys = document.querySelectorAll('iframe#ueditor_0')
            if(bodys&&bodys.length>0&&bodys[0].contentDocument){
                var body = bodys[0].contentDocument;
                if(body){
                    var elms = body.querySelectorAll('code,pre,h1,h2,h3,h4,h5,h6,p,div,span');
                    for (var i = 0; i < elms.length; i++) {
                        var styl = elms[i].getAttribute('style');
                        if(styl){
                            styl = styl.replace(/font-family\:[\s\S]*?\;/g,'')
                            elms[i].setAttribute('style',styl)
                        }

                        if(elms[i].tagName === 'PRE'){
                            elms[i].setAttribute('style','box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; padding: 5px; border: 0px; outline: 0px; vertical-align: baseline; overflow: auto; border-radius: 3px; word-break: break-all; word-wrap: break-word; font-stretch: normal; line-height: normal; color: rgb(51, 51, 51); background-color: rgb(247, 247, 249); ') 
                        }
                    }
                }
            }
            sendResponse({ msg: '更改完毕！！' });
        }
    }
); 