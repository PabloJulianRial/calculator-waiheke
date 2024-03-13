(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))b(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&b(s)}).observe(document,{childList:!0,subtree:!0});function x(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function b(o){if(o.ep)return;o.ep=!0;const r=x(o);fetch(o.href,r)}})();window.onload=()=>{var e;(e=document.getElementById("input1"))==null||e.focus()};const R=document.querySelectorAll(".button"),i=document.querySelectorAll(".button__number"),_=document.querySelectorAll(".button__operator"),a=document.querySelectorAll(".button__toDisable"),t=document.querySelector(".display__text"),n=document.querySelector(".display__text__second"),h=document.querySelector(".button__clear"),f=document.querySelector(".button__clearEntry"),y=document.querySelector(".button__plus"),S=document.querySelector(".button__minus"),g=document.querySelector(".button__divide"),q=document.querySelector(".button__times"),E=document.querySelector(".button__equals"),m=document.querySelector(".button__decimal"),p=document.querySelector(".button__percent"),L=document.querySelector(".signChange"),d=document.querySelector("#input1"),k=document.querySelector(".button__round"),N=document.querySelector(".button__square"),C=document.querySelector(".button__cube"),O=document.querySelector(".button__root"),P=document.querySelector(".button__fraction"),B=document.querySelector(".button__rightBracket"),M=document.querySelector(".button__leftBracket"),A=document.querySelector(".button__memoryOne"),D=document.querySelector(".button__memoryTwo");if(i.length===0||_.length===0||!i||!t||!h||!f||!y||!S||!g||!q||!E||!m||!p||!n||!L||!d||!k||!N||!O||!C||!P||!B||!M||!A||!D)throw new Error("Issues with Selector");let c=0,u=0,T=!1,v=!1,$=!1,w=!1;const F=e=>{if(d.value.length<d.maxLength){const l=e.currentTarget;t.value+=l.innerText,n.value+=l.innerText}},I=()=>{t.value="",n.value="",location.reload()},K=()=>{t.value=t.value.slice(0,-1),n.value=n.value.slice(0,-1)},j=()=>{u+=Number(t.value),t.value="",m.className="button button__number button__decimal"},z=()=>{a.forEach(e=>{e.classList.add("disable")})},G=e=>{const l=e.currentTarget;l.className="button button__number button__decimal disable"},H=()=>{T=!0,n.value+="-"},J=()=>{w=!0,n.value+="+"},Q=()=>{$=!0,n.value+="/"},U=()=>{v=!0,n.value+="×"},V=()=>{v&&(c=u/100*Number(t.value),t.value=`${c.toString()}%`,n.value=`${n.value}%`)},W=()=>{const e=Number(t.value)**2;t.value=e.toString(),n.value=`${n.value}²`},X=()=>{const e=Number(t.value)**3;t.value=e.toString(),n.value=`${n.value}³`},Y=()=>{const e=Math.sqrt(Number(t.value));t.value=e.toString(),n.value=`${n.value}√`},Z=()=>{a.forEach(e=>{e.classList.remove("disable")})},ee=()=>{a.forEach(e=>{e.classList.remove("disable")})},te=()=>{T&&(c=u-Number(t.value),t.value=c.toString()),w&&(c=u+Number(t.value),t.value=c.toString()),$&&(c=u/Number(t.value),t.value=c.toString()),v&&(c=u*Number(t.value),t.value=c.toString())},ne=()=>{t.value=c.toFixed(3)},oe=()=>{t.value=`${(Number(t.value)*-1).toString()}`},re=()=>{R.forEach(e=>{e.style.backgroundColor=`rgb(${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)})`})};S.addEventListener("click",H);y.addEventListener("click",J);g.addEventListener("click",Q);q.addEventListener("click",U);E.addEventListener("click",te);m.addEventListener("click",G);p.addEventListener("click",V);h.addEventListener("click",I);f.addEventListener("click",K);L.addEventListener("click",oe);k.addEventListener("click",ne);N.addEventListener("click",W);C.addEventListener("click",X);O.addEventListener("click",Y);B.addEventListener("click",ee);M.addEventListener("click",Z);P.addEventListener("click",re);i.forEach(e=>{e.addEventListener("click",F)});_.forEach(e=>{e.addEventListener("click",j)});a.forEach(e=>{e.addEventListener("click",z)});