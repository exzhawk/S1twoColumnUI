// ==UserScript==
// @name         Two Column S1
// @namespace    http://exz.me/
// @version      0.6
// @description  two colomn ui for s1
// @author       Epix
// @match        http://bbs.saraba1st.com/2b/*
// @grant        GM_addStyle
// ==/UserScript==
var width = 48;
var list_on_left = true;
if (self==top && location.href.startsWith('http://bbs.saraba1st.com/2b/forum-') || (new RegExp("mod=forumdisplay")).test(location.href)) {
    var wp = document.querySelector('#wp');
    wp.style.width = width + '%';
    wp.style.position = 'absolute';
    if (list_on_left) {
        wp.style.left = '0';
    } else {
        wp.style.right = '0';
    }
    wp.style.minWidth = '0px';
    if(list_on_left){
        GM_addStyle( '#um{margin-right:55%} #qmenu{margin-right:55% !important} #myprompt_menu{left: 445.5px !important;}' );
    }
    var f = document.createElement("iframe");
    f.id = 'frame';
    f.name = 'frame';
    f.style.width = (99 - width) + '%';
    f.style.height = '95%';
    f.style.position = 'fixed';
    if (list_on_left) {
        f.style.right = '0';
    }
    else {
        f.style.left = '0';
    }
    f.style.bottom = '0';
    document.body.appendChild(f);

    document.onclick = function (event) {
        var target = event.target;
        //console.log(target.nodeName,target.href);
        //return;
        if (target.nodeName == "TH" && target.parentNode.parentNode.parentNode.id == "threadlisttableid") {
            document.getElementById('frame').src = target.querySelector('th>a').href;
        } else if (target.nodeName == "A" && (target.href.search("thread-")!=-1 || target.href.search("mod=viewthread") != -1)) {
            document.getElementById('frame').src = target.href;
            event.preventDefault();
        }

    };

} else if (self != top && location.href.startsWith('http://bbs.saraba1st.com/2b/thread') || (new RegExp("mod=viewthread")).test(location.href)) {
    GM_addStyle('#toptb,#hd{display:none}');
}
if (location.href.startsWith('http://bbs.saraba1st.com/2b/thread') || (new RegExp("mod=viewthread")).test(location.href)) {
    var td = document.querySelectorAll('.plhin tbody tr:first-child td.pls:first-child');
    for (i in td) {
        td[i].rowSpan = "4";
    }
    GM_addStyle('\
.favatar {\
    height: 150px !important;\
    overflow: hidden !important;\
}\
.favatar:hover {\
    height: auto !important;\
    overflow: visible !important;\
}\
.favatar .pi {\
    position: absolute;\
}\
.favatar:hover .pi {\
    position: initial;\
}\
.favatar .authi {\
    background: white;\
    padding: 5px;\
}\
.favatar:hover .authi {\
    background: none;\
    padding: 0;\
}\
.t_fsz {\
    min-height: 0 !important;\
}\
.sign {\
    max-height: 20px !important;\
    padding: 0 !important;\
    position: relative;\
    width: 600px;\
    top: 10px;\
    margin-left: 70px;\
    margin-bottom: 0 !important;\
    background: rgb(246, 247, 235);\
    height: 0;\
    overflow: visible;\
    opacity: 0.01;\
}\
.sign:hover {\
    max-height: 200px !important;\
    opacity: 1;\
}\
.plhin > tbody > tr:nth-child(4) > td:first-child {\
        display: none;\
}\
#p_btn {\
    padding: 0 !important;\
    margin-top: 0 !important;\
    margin-bottom: 0 !important;\
}')

}
