var Me=Object.defineProperty,Ie=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var pe=(l,t,e)=>t in l?Me(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,Y=(l,t)=>{for(var e in t||(t={}))He.call(t,e)&&pe(l,e,t[e]);if(de)for(var e of de(t))Pe.call(t,e)&&pe(l,e,t[e]);return l},J=(l,t)=>Ie(l,De(t));import{_ as L,r as E,o,c,b as y,f as S,i as P,j as _,k as me,h as a,F as I,l as R,a as h,t as T,m as C,n as z,p as Q,q as x,w as B,s as _e,v as w,e as j,x as X,y as Ae,z as Ee,A as Re,B as Z,C as ee,D as A,E as G,G as fe,H as be,u as ge,g as M,T as ke,I as O,J as ye,K,L as q,M as Fe,N as Oe,O as te,P as $e,Q as Le,d as je,R as we,S as ze,U,V as ae,W as We,X as Ve,Y as Ue,Z as Ge}from"./app.92b94cd0.js";var Ke="/vue3-google-login/images/buyme-coffee.webp",qe="/vue3-google-login/images/paypal.png",Xe="/vue3-google-login/images/buyme-coffee-small.webp",Ye="/vue3-google-login/images/paypal-small.png";const Je={},Qe={class:"theme-default-content custom"};function Ze(l,t){const e=E("Content");return o(),c("div",Qe,[y(e)])}var et=L(Je,[["render",Ze],["__file","HomeContent.vue"]]);const tt={key:0,class:"features"},at=S({name:"HomeFeatures",setup(l){const t=P(),e=_(()=>me(t.value.features)?t.value.features:[]);return(u,r)=>a(e).length?(o(),c("div",tt,[(o(!0),c(I,null,R(a(e),d=>(o(),c("div",{key:d.title,class:"feature"},[h("h2",null,T(d.title),1),h("p",null,T(d.details),1)]))),128))])):C("",!0)}});var nt=L(at,[["__file","HomeFeatures.vue"]]);const ot=["innerHTML"],rt=["textContent"],st=S({name:"HomeFooter",setup(l){const t=P(),e=_(()=>t.value.footer),u=_(()=>t.value.footerHtml);return(r,d)=>a(e)?(o(),c(I,{key:0},[a(u)?(o(),c("div",{key:0,class:"footer",innerHTML:a(e)},null,8,ot)):(o(),c("div",{key:1,class:"footer",textContent:T(a(e))},null,8,rt))],64)):C("",!0)}});var lt=L(st,[["__file","HomeFooter.vue"]]);const it=["href","rel","target","aria-label"],ut=S({inheritAttrs:!1}),ct=S(J(Y({},ut),{name:"AutoLink",props:{item:{type:Object,required:!0}},setup(l){const t=l,e=z(),u=Re(),{item:r}=Q(t),d=_(()=>X(r.value.link)),f=_(()=>Ae(r.value.link)||Ee(r.value.link)),m=_(()=>{if(!f.value){if(r.value.target)return r.value.target;if(d.value)return"_blank"}}),n=_(()=>m.value==="_blank"),s=_(()=>!d.value&&!f.value&&!n.value),i=_(()=>{if(!f.value){if(r.value.rel)return r.value.rel;if(n.value)return"noopener noreferrer"}}),v=_(()=>r.value.ariaLabel||r.value.text),p=_(()=>{const $=Object.keys(u.value.locales);return $.length?!$.some(b=>b===r.value.link):r.value.link!=="/"}),g=_(()=>p.value?e.path.startsWith(r.value.link):!1),k=_(()=>s.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):g.value:!1);return($,b)=>{const N=E("RouterLink"),D=E("AutoLinkExternalIcon");return a(s)?(o(),x(N,_e({key:0,class:{"router-link-active":a(k)},to:a(r).link,"aria-label":a(v)},$.$attrs),{default:B(()=>[w($.$slots,"before"),j(" "+T(a(r).text)+" ",1),w($.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),c("a",_e({key:1,class:"external-link",href:a(r).link,rel:a(i),target:a(m),"aria-label":a(v)},$.$attrs),[w($.$slots,"before"),j(" "+T(a(r).text)+" ",1),a(n)?(o(),x(D,{key:0})):C("",!0),w($.$slots,"after")],16,it))}}}));var H=L(ct,[["__file","AutoLink.vue"]]);const vt={class:"hero"},dt={key:0,id:"main-title"},pt={key:1,class:"description"},_t={key:2,class:"actions"},ht=S({name:"HomeHero",setup(l){const t=P(),e=Z(),u=ee(),r=_(()=>u.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),d=_(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=_(()=>t.value.heroAlt||d.value||"hero"),m=_(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),n=_(()=>me(t.value.actions)?t.value.actions.map(({text:i,link:v,type:p="primary"})=>({text:i,link:v,type:p})):[]),s=()=>{if(!r.value)return null;const i=G("img",{src:fe(r.value),alt:f.value});return t.value.heroImageDark===void 0?i:G(be,()=>i)};return(i,v)=>(o(),c("header",vt,[y(s),a(d)?(o(),c("h1",dt,T(a(d)),1)):C("",!0),a(m)?(o(),c("p",pt,T(a(m)),1)):C("",!0),a(n).length?(o(),c("p",_t,[(o(!0),c(I,null,R(a(n),p=>(o(),x(H,{key:p.text,class:A(["action-button",[p.type]]),item:p},null,8,["class","item"]))),128))])):C("",!0)]))}});var mt=L(ht,[["__file","HomeHero.vue"]]);const ft={class:"home"},bt=S({name:"Home",setup(l){return(t,e)=>(o(),c("main",ft,[y(mt),y(nt),y(et),y(lt)]))}});var gt=L(bt,[["__file","Home.vue"]]);const kt=S({name:"NavbarBrand",setup(l){const t=ge(),e=Z(),u=M(),r=ee(),d=_(()=>u.value.home||t.value),f=_(()=>e.value.title),m=_(()=>r.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),n=()=>{if(!m.value)return null;const s=G("img",{class:"logo",src:fe(m.value),alt:f.value});return u.value.logoDark===void 0?s:G(be,()=>s)};return(s,i)=>{const v=E("RouterLink");return o(),x(v,{to:a(d)},{default:B(()=>[y(n),a(f)?(o(),c("span",{key:0,class:A(["site-name",{"can-hide":a(m)}])},T(a(f)),3)):C("",!0)]),_:1},8,["to"])}}});var yt=L(kt,[["__file","NavbarBrand.vue"]]);const $t=S({name:"DropdownTransition",setup(l){const t=u=>{u.style.height=u.scrollHeight+"px"},e=u=>{u.style.height=""};return(u,r)=>(o(),x(ke,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:B(()=>[w(u.$slots,"default")]),_:3}))}});var Ce=L($t,[["__file","DropdownTransition.vue"]]);const Lt=["aria-label"],wt={class:"title"},Ct=h("span",{class:"arrow down"},null,-1),St=["aria-label"],xt={class:"title"},Tt={class:"navbar-dropdown"},Bt={class:"navbar-dropdown-subtitle"},Nt={key:1},Mt={class:"navbar-dropdown-subitem-wrapper"},It=S({name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=Q(t),u=_(()=>e.value.ariaLabel||e.value.text),r=O(!1),d=z();ye(()=>d.path,()=>{r.value=!1});const f=n=>{n.detail===0?r.value=!r.value:r.value=!1},m=(n,s)=>s[s.length-1]===n;return(n,s)=>(o(),c("div",{class:A(["navbar-dropdown-wrapper",{open:r.value}])},[h("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(u),onClick:f},[h("span",wt,T(a(e).text),1),Ct],8,Lt),h("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(u),onClick:s[0]||(s[0]=i=>r.value=!r.value)},[h("span",xt,T(a(e).text),1),h("span",{class:A(["arrow",r.value?"down":"right"])},null,2)],8,St),y(Ce,null,{default:B(()=>[K(h("ul",Tt,[(o(!0),c(I,null,R(a(e).children,i=>(o(),c("li",{key:i.text,class:"navbar-dropdown-item"},[i.children?(o(),c(I,{key:0},[h("h4",Bt,[i.link?(o(),x(H,{key:0,item:i,onFocusout:v=>m(i,a(e).children)&&i.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(o(),c("span",Nt,T(i.text),1))]),h("ul",Mt,[(o(!0),c(I,null,R(i.children,v=>(o(),c("li",{key:v.link,class:"navbar-dropdown-subitem"},[y(H,{item:v,onFocusout:p=>m(v,i.children)&&m(i,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),x(H,{key:1,item:i,onFocusout:v=>m(i,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[q,r.value]])]),_:1})],2))}});var Dt=L(It,[["__file","NavbarDropdown.vue"]]);const he=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ht=(l,t)=>{if(t.hash===l)return!0;const e=he(t.path),u=he(l);return e===u},Se=(l,t)=>l.link&&Ht(l.link,t)?!0:l.children?l.children.some(e=>Se(e,t)):!1,xe=l=>!X(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,Pt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},At=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=xe(l);return e!==null?Pt[e]:null},Et=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:u,editLinkPattern:r})=>{if(!u)return null;const d=At({docsRepo:l,editLinkPattern:r});return d?d.replace(/:repo/,X(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Fe(`${Oe(e)}/${u}`)):null},Rt={key:0,class:"navbar-items"},Ft=S({name:"NavbarItems",setup(l){const t=()=>{const s=te(),i=ge(),v=Z(),p=M();return _(()=>{var N,D;const g=Object.keys(v.value.locales);if(g.length<2)return[];const k=s.currentRoute.value.path,$=s.currentRoute.value.fullPath;return[{text:(N=p.value.selectLanguageText)!=null?N:"unknown language",ariaLabel:(D=p.value.selectLanguageAriaLabel)!=null?D:"unkown language",children:g.map(F=>{var re,se,le,ie,ue,ce;const W=(se=(re=v.value.locales)==null?void 0:re[F])!=null?se:{},ne=(ie=(le=p.value.locales)==null?void 0:le[F])!=null?ie:{},oe=`${W.lang}`,Be=(ue=ne.selectLanguageName)!=null?ue:oe;let V;if(oe===v.value.lang)V=$;else{const ve=k.replace(i.value,F);s.getRoutes().some(Ne=>Ne.path===ve)?V=ve:V=(ce=ne.home)!=null?ce:F}return{text:Be,link:V}})}]})},e=()=>{const s=M(),i=_(()=>s.value.repo),v=_(()=>i.value?xe(i.value):null),p=_(()=>i.value&&!X(i.value)?`https://github.com/${i.value}`:i.value),g=_(()=>p.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return _(()=>!p.value||!g.value?[]:[{text:g.value,link:p.value}])},u=s=>$e(s)?Le(s):s.children?J(Y({},s),{children:s.children.map(u)}):s,d=(()=>{const s=M();return _(()=>(s.value.navbar||[]).map(u))})(),f=t(),m=e(),n=_(()=>[...d.value,...f.value,...m.value]);return(s,i)=>a(n).length?(o(),c("nav",Rt,[(o(!0),c(I,null,R(a(n),v=>(o(),c("div",{key:v.text,class:"navbar-item"},[v.children?(o(),x(Dt,{key:0,item:v},null,8,["item"])):(o(),x(H,{key:1,item:v},null,8,["item"]))]))),128))])):C("",!0)}});var Te=L(Ft,[["__file","NavbarItems.vue"]]);const Ot=["title"],jt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},zt=je('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Wt=[zt],Vt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ut=h("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Gt=[Ut],Kt=S({name:"ToggleDarkModeButton",setup(l){const t=M(),e=ee(),u=()=>{e.value=!e.value};return(r,d)=>(o(),c("button",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:u},[K((o(),c("svg",jt,Wt,512)),[[q,!a(e)]]),K((o(),c("svg",Vt,Gt,512)),[[q,a(e)]])],8,Ot))}});var qt=L(Kt,[["__file","ToggleDarkModeButton.vue"]]);const Xt=["title"],Yt=h("div",{class:"icon","aria-hidden":"true"},[h("span"),h("span"),h("span")],-1),Jt=[Yt],Qt=S({name:"ToggleSidebarButton",emits:["toggle"],setup(l){const t=M();return(e,u)=>(o(),c("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>e.$emit("toggle"))},Jt,8,Xt))}});var Zt=L(Qt,[["__file","ToggleSidebarButton.vue"]]);const ea=S({name:"Navbar",emits:["toggle-sidebar"],setup(l){const t=M(),e=O(null),u=O(null),r=O(0),d=_(()=>r.value?{maxWidth:r.value+"px"}:{}),f=_(()=>t.value.darkMode);we(()=>{const s=m(e.value,"paddingLeft")+m(e.value,"paddingRight"),i=()=>{var v;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-s-(((v=u.value)==null?void 0:v.offsetWidth)||0)};i(),window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1)});function m(n,s){var p,g,k;const i=(k=(g=(p=n==null?void 0:n.ownerDocument)==null?void 0:p.defaultView)==null?void 0:g.getComputedStyle(n,null))==null?void 0:k[s],v=Number.parseInt(i,10);return Number.isNaN(v)?0:v}return(n,s)=>{const i=E("NavbarSearch");return o(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[y(Zt,{onToggle:s[0]||(s[0]=v=>n.$emit("toggle-sidebar"))}),h("span",{ref_key:"navbarBrand",ref:u},[y(yt)],512),h("div",{class:"navbar-items-wrapper",style:ze(a(d))},[w(n.$slots,"before"),y(Te,{class:"can-hide"}),w(n.$slots,"after"),a(f)?(o(),x(qt,{key:0})):C("",!0),y(i)],4)],512)}}});var ta=L(ea,[["__file","Navbar.vue"]]);const aa={class:"page-meta"},na={key:0,class:"meta-item edit-link"},oa={key:1,class:"meta-item last-updated"},ra={class:"meta-item-label"},sa={class:"meta-item-info"},la={key:2,class:"meta-item contributors"},ia={class:"meta-item-label"},ua={class:"meta-item-info"},ca=["title"],va=j(", "),da=S({name:"PageMeta",setup(l){const t=()=>{const n=M(),s=U(),i=P();return _(()=>{var D,F,W;if(!((F=(D=i.value.editLink)!=null?D:n.value.editLink)!=null?F:!0))return null;const{repo:p,docsRepo:g=p,docsBranch:k="main",docsDir:$="",editLinkText:b}=n.value;if(!g)return null;const N=Et({docsRepo:g,docsBranch:k,docsDir:$,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=i.value.editLinkPattern)!=null?W:n.value.editLinkPattern});return N?{text:b!=null?b:"Edit this page",link:N}:null})},e=()=>{const n=M(),s=U(),i=P();return _(()=>{var g,k,$,b;return!((k=(g=i.value.lastUpdated)!=null?g:n.value.lastUpdated)!=null?k:!0)||!(($=s.value.git)!=null&&$.updatedTime)?null:new Date((b=s.value.git)==null?void 0:b.updatedTime).toLocaleString()})},u=()=>{const n=M(),s=U(),i=P();return _(()=>{var p,g,k,$;return((g=(p=i.value.contributors)!=null?p:n.value.contributors)!=null?g:!0)&&($=(k=s.value.git)==null?void 0:k.contributors)!=null?$:null})},r=M(),d=t(),f=e(),m=u();return(n,s)=>{const i=E("ClientOnly");return o(),c("footer",aa,[a(d)?(o(),c("div",na,[y(H,{class:"meta-item-label",item:a(d)},null,8,["item"])])):C("",!0),a(f)?(o(),c("div",oa,[h("span",ra,T(a(r).lastUpdatedText)+": ",1),y(i,null,{default:B(()=>[h("span",sa,T(a(f)),1)]),_:1})])):C("",!0),a(m)&&a(m).length?(o(),c("div",la,[h("span",ia,T(a(r).contributorsText)+": ",1),h("span",ua,[(o(!0),c(I,null,R(a(m),(v,p)=>(o(),c(I,{key:p},[h("span",{class:"contributor",title:`email: ${v.email}`},T(v.name),9,ca),p!==a(m).length-1?(o(),c(I,{key:0},[va],64)):C("",!0)],64))),128))])])):C("",!0)])}}});var pa=L(da,[["__file","PageMeta.vue"]]);const _a={key:0,class:"page-nav"},ha={class:"inner"},ma={key:0,class:"prev"},fa={key:1,class:"next"},ba=S({name:"PageNav",setup(l){const t=n=>n===!1?null:$e(n)?Le(n):We(n)?n:!1,e=(n,s,i)=>{const v=n.findIndex(p=>p.link===s);if(v!==-1){const p=n[v+i];return p!=null&&p.link?p:null}for(const p of n)if(p.children){const g=e(p.children,s,i);if(g)return g}return null},u=P(),r=ae(),d=z(),f=_(()=>{const n=t(u.value.prev);return n!==!1?n:e(r.value,d.path,-1)}),m=_(()=>{const n=t(u.value.next);return n!==!1?n:e(r.value,d.path,1)});return(n,s)=>a(f)||a(m)?(o(),c("nav",_a,[h("p",ha,[a(f)?(o(),c("span",ma,[y(H,{item:a(f)},null,8,["item"])])):C("",!0),a(m)?(o(),c("span",fa,[y(H,{item:a(m)},null,8,["item"])])):C("",!0)])])):C("",!0)}});var ga=L(ba,[["__file","PageNav.vue"]]);const ka={class:"page"},ya={class:"theme-default-content"},$a=S({name:"Page",setup(l){return(t,e)=>{const u=E("Content");return o(),c("main",ka,[w(t.$slots,"top"),h("div",ya,[y(u)]),y(pa),y(ga),w(t.$slots,"bottom")])}}});var La=L($a,[["__file","Page.vue"]]);const wa={class:"sidebar-item-children"},Ca=S({name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:u}=Q(t),r=z(),d=te(),f=_(()=>Se(e.value,r)),m=_(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:f.value,collapsible:e.value.collapsible})),n=O(!0),s=O(void 0);return e.value.collapsible&&(n.value=f.value,s.value=()=>{n.value=!n.value},d.afterEach(()=>{n.value=f.value})),(i,v)=>{var g;const p=E("SidebarItem",!0);return o(),c("li",null,[a(e).link?(o(),x(H,{key:0,class:A(a(m)),item:a(e)},null,8,["class","item"])):(o(),c("p",{key:1,tabindex:"0",class:A(a(m)),onClick:v[0]||(v[0]=(...k)=>s.value&&s.value(...k)),onKeydown:v[1]||(v[1]=Ve((...k)=>s.value&&s.value(...k),["enter"]))},[j(T(a(e).text)+" ",1),a(e).collapsible?(o(),c("span",{key:0,class:A(["arrow",n.value?"down":"right"])},null,2)):C("",!0)],34)),(g=a(e).children)!=null&&g.length?(o(),x(Ce,{key:2},{default:B(()=>[K(h("ul",wa,[(o(!0),c(I,null,R(a(e).children,k=>(o(),x(p,{key:`${a(u)}${k.text}${k.link}`,item:k,depth:a(u)+1},null,8,["item","depth"]))),128))],512),[[q,n.value]])]),_:1})):C("",!0)])}}});var Sa=L(Ca,[["__file","SidebarItem.vue"]]);const xa={key:0,class:"sidebar-items"},Ta=S({name:"SidebarItems",setup(l){const t=z(),e=ae();return ye(()=>t.hash,u=>{const r=document.querySelector(".sidebar");if(!r)return;const d=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${u}"]`);if(!d)return;const f=r.getBoundingClientRect().top,m=r.getBoundingClientRect().height,n=d.getBoundingClientRect().top,s=d.getBoundingClientRect().height;n<f?d.scrollIntoView(!0):n+s>f+m&&d.scrollIntoView(!1)}),(u,r)=>a(e).length?(o(),c("ul",xa,[(o(!0),c(I,null,R(a(e),d=>(o(),x(Sa,{key:d.link||d.text,item:d},null,8,["item"]))),128))])):C("",!0)}});var Ba=L(Ta,[["__file","SidebarItems.vue"]]);const Na={class:"sidebar"},Ma=S({name:"Sidebar",setup(l){return(t,e)=>(o(),c("aside",Na,[y(Te),w(t.$slots,"top"),y(Ba),w(t.$slots,"bottom")]))}});var Ia=L(Ma,[["__file","Sidebar.vue"]]);const Da=S({name:"Layout",setup(l){const t=U(),e=P(),u=M(),r=_(()=>e.value.navbar!==!1&&u.value.navbar!==!1),d=ae(),f=O(!1),m=b=>{f.value=typeof b=="boolean"?b:!f.value},n={x:0,y:0},s=b=>{n.x=b.changedTouches[0].clientX,n.y=b.changedTouches[0].clientY},i=b=>{const N=b.changedTouches[0].clientX-n.x,D=b.changedTouches[0].clientY-n.y;Math.abs(N)>Math.abs(D)&&Math.abs(N)>40&&(N>0&&n.x<=80?m(!0):m(!1))},v=_(()=>[{"no-navbar":!r.value,"no-sidebar":!d.value.length,"sidebar-open":f.value},e.value.pageClass]);let p;we(()=>{p=te().afterEach(()=>{m(!1)})}),Ue(()=>{p()});const g=Ge(),k=g.resolve,$=g.pending;return(b,N)=>(o(),c("div",{class:A(["theme-container",a(v)]),onTouchstart:s,onTouchend:i},[w(b.$slots,"navbar",{},()=>[a(r)?(o(),x(ta,{key:0,onToggleSidebar:m},{before:B(()=>[w(b.$slots,"navbar-before")]),after:B(()=>[w(b.$slots,"navbar-after")]),_:3})):C("",!0)]),h("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=D=>m(!1))}),w(b.$slots,"sidebar",{},()=>[y(Ia,null,{top:B(()=>[w(b.$slots,"sidebar-top")]),bottom:B(()=>[w(b.$slots,"sidebar-bottom")]),_:3})]),w(b.$slots,"page",{},()=>[a(e).home?(o(),x(gt,{key:0})):(o(),x(ke,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(k),onBeforeLeave:a($)},{default:B(()=>[(o(),x(La,{key:a(t).path},{top:B(()=>[w(b.$slots,"page-top")]),bottom:B(()=>[w(b.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Ha=L(Da,[["__file","Layout.vue"]]);const Pa=h("div",{class:"my-navbar"},[h("a",{href:"https://www.buymeacoffee.com/developerbaji",target:"_blank"},[h("img",{src:Ke,alt:"Buy Me A Coffee",class:"buy-me-coffee"})]),h("a",{href:"https://paypal.me/devbaji",target:"_blank"},[h("img",{src:qe,alt:"Paypal",class:"paypal"})]),h("a",{href:"https://www.buymeacoffee.com/developerbaji",target:"_blank"},[h("img",{src:Xe,alt:"Buy Me A Coffee",class:"buy-me-coffee-small"})]),h("a",{href:"https://paypal.me/devbaji",target:"_blank"},[h("img",{src:Ye,alt:"Paypal",class:"paypal-small"})]),h("a",{href:"https://github.com/devbaji/vue3-google-login/"},[h("img",{src:"https://devbaji.github.io/images/github.svg?sdsd=45"}),j(" GitHub ")])],-1),Aa=h("div",{class:"my-footer"},[j(" MIT Licensed | Copyright \xA9 2022-present "),h("a",{href:"https://devbaji.github.io"},"Ananthakrishnan Baji")],-1),Ea={name:"Layout",setup(l){return(t,e)=>(o(),x(Ha,null,{"navbar-after":B(()=>[Pa]),"page-bottom":B(()=>[Aa]),_:1}))}};var Oa=L(Ea,[["__file","Layout.vue"]]);export{Oa as default};