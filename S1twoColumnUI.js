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

    window.changetarget = function () {
        var arr = document.querySelectorAll('#threadlist .common a');
        for (var i = 0; i < arr.length; ++i) {
            a = arr[i];
            if ((new RegExp("mod=viewthread")).test(a.href) || (new RegExp("thread-")).test(a.href)) {
                a.target = 'frame';
                a.onclick = function () {
                };
            }
        }
        var a = document.querySelectorAll('#threadlisttableid>tbody');
        for (var j = 0; j < a.length; ++j) {
            a[j].onclick = function () {
                var f = document.querySelector('#frame');
                f.src = this.querySelector('tr>th>a').href;
            };
        }
    };
    changetarget();
    document.getElementById('autopbn').addEventListener("click", function () {
        changetarget();
    });
} else if (self != top && location.href.startsWith('http://bbs.saraba1st.com/2b/thread') || (new RegExp("mod=viewthread")).test(location.href)) {
    GM_addStyle('#toptb,#hd{display:none}');
}