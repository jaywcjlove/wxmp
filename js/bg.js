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
                        if(elms[i].tagName === 'PRE'){
                            elms[i].setAttribute('style',' word-wrap: normal!important;box-sizing: border-box; overflow: auto;font-size: 0.93em; padding: 1em; margin-top: 1.5em; margin-bottom: 1.5em; line-height: 1.3; word-break: break-all; word-wrap: break-word; color: rgb(101, 123, 131); border: none; border-radius: 3px; max-height: 35em;  background-color:#E1E1E9;') 
                        }else if(elms[i].tagName === 'CODE'){
                            elms[i].setAttribute('style','box-sizing: border-box;font-size: 1em; color: inherit; border-radius: 0px; white-space: inherit; overflow-wrap: normal; background: none;') 
                        }else{
                            if(styl){
                                styl = styl.replace(/font-family\:[\s\S]*?\;/g,'');
                                elms[i].setAttribute('style',styl);
                            }
                        }
                    }
                }
            }
            sendResponse({ msg: '更改完毕！！' });
        }
    }
); 