// ==UserScript==
// @name         Two Column S1
// @namespace    http://exz.me/
// @version      0.1
// @description  two colomn ui for s1
// @author       Epix
// @match        http://bbs.saraba1st.com/2b/*
// @grant        GM_addStyle
// ==/UserScript==

if(location.href.startsWith('http://bbs.saraba1st.com/2b/forum-'))
{
    var wp =document.querySelector('#wp');
    wp.style.width='48%';
    wp.style.float='left';
    wp.style.minWidth='0px';

    var f=document.createElement("iframe");
    f.id='frame';
    f.style.width='51.5%';
    f.style.height='95%';
    f.style.position='fixed';
    f.style.right='0';
    f.style.bottom='0';
    document.body.appendChild(f);

    function openpost(p){
        var f=document.querySelector('#frame');
        f.src=p.querySelector('tr>th>a').href;
    }
    var a=document.querySelectorAll('#threadlisttableid>tbody');

    for (var index = 0; index < a.length; ++index) {
        a[index].onclick=function(){openpost(this);};
    }
}else if(self!=top && location.href.startsWith('http://bbs.saraba1st.com/2b/thread'))
{
    GM_addStyle('#toptb,#hd{display:none}');
}