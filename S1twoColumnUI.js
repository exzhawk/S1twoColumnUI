// ==UserScript==
// @name         Two Column S1
// @namespace    http://exz.me/
// @version      0.1
// @description  two colomn ui for s1
// @author       Epix
// @match        http://bbs.saraba1st.com/2b/*
// @grant        GM_addStyle
// ==/UserScript==
var width = 48;
var list_on_left = true;
if (location.href.startsWith('http://bbs.saraba1st.com/2b/forum-') || (new RegExp("mod=forumdisplay")).test(location.href)) {
    var wp = document.querySelector('#wp');
    wp.style.width = width + '%';
    wp.style.position = 'absolute';
    if (list_on_left) {
        wp.style.left = '0';
    } else {
        wp.style.right = '0';
    }
    wp.style.minWidth = '0px';

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
            document.getElementById('frame').src=target.querySelector('th>a').href;
        } else if (target.nodeName == "A" && (target.href.startsWith("thread-")||target.href.search("mod=viewthread")!=-1)) {
            document.getElementById('frame').src=target.href;
        }
        event.preventDefault();
    };

} else if (self != top && location.href.startsWith('http://bbs.saraba1st.com/2b/thread') || (new RegExp("mod=viewthread")).test(location.href)) {
    GM_addStyle('#toptb,#hd{display:none}');
}