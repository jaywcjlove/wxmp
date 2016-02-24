$('.warpper a.btn_del_family').on('click',function(){
    var self = this 
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendRequest(tab.id, {"hello": "btn_del_family"}, function (response) {
            $(self).find('span').html(response.msg);
            setTimeout(function(){
                $(self).find('span').html('');
            }, 2000);
        });
    });
})

$('.warpper a.btn_del_fonts').on('click',function(){
    console.log("btn_del_fonts");
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendRequest(tab.id, {"hello": "btn_del_fonts"}, function (response) {
            console.log("response",response);
        });
    });
})