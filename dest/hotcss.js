!function(e,t){"use strict";!function(){var i=t.querySelector('meta[name="viewport"]'),n=e.devicePixelRatio||1,r=1/n,s="width=device-width, initial-scale="+r+", minimum-scale="+r+", maximum-scale="+r+", user-scalable=no";i?i.setAttribute("content",s):(i=t.createElement("meta"),i.setAttribute("name","viewport"),i.setAttribute("content",s),t.head.appendChild(i))}();var i={};i.px2rem=function(e,t){return t||(t=parseInt(i.designWidth,10)),320*parseInt(e,10)/t/20},i.mresize=function(){var i=e.innerWidth;return i?void(t.documentElement.style.fontSize=20*i/320+"px"):!1},i.mresize(),e.addEventListener("resize",i.mresize,!1),e.addEventListener("load",i.mresize,!1),setTimeout(function(){i.mresize()},0),e.hotcss=i}(window,document);