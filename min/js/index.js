"use strict";function main(){for(var e=document.getElementById("dates"),n="",t=18;25>t;t++)n+="<li class='date' value="+t+"> "+t+" апреля </li>";e.innerHTML=n,e.children[0].classList.add("cur-date"),load_program(0);for(var l=document.getElementsByClassName("channel"),d=0;d<l.length;d++)l[d].value=d,l[d].addEventListener("click",changeChannel);window.addEventListener("scroll",handleScrollEvent),document.getElementById("with-scroll-block").addEventListener("scroll",handleScrollEvent),document.getElementById("pop-up-wind-back").addEventListener("click",close_film_descr)}document.body.onload=main,document.addEventListener("click",function(e){var n=e.target;return"close-btn"==n.id?close_film_descr():n.parentElement.classList.contains("film")?open_film_descr.bind(n.parentElement)():n.classList.contains("date")?changeDate.bind(n)():void 0});