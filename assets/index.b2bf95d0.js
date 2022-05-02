var Tv=Object.defineProperty,Iv=Object.defineProperties;var Sv=Object.getOwnPropertyDescriptors;var Vi=Object.getOwnPropertySymbols;var eh=Object.prototype.hasOwnProperty,th=Object.prototype.propertyIsEnumerable;var Zu=(t,e,n)=>e in t?Tv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Oe=(t,e)=>{for(var n in e||(e={}))eh.call(e,n)&&Zu(t,n,e[n]);if(Vi)for(var n of Vi(e))th.call(e,n)&&Zu(t,n,e[n]);return t},Ft=(t,e)=>Iv(t,Sv(e));var Ma=(t,e)=>{var n={};for(var s in t)eh.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&Vi)for(var s of Vi(t))e.indexOf(s)<0&&th.call(t,s)&&(n[s]=t[s]);return n};const Cv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Cv();function hc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const kv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Av=hc(kv);function Od(t){return!!t||t===""}function fc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=He(s)?xv(s):fc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(He(t))return t;if(Ue(t))return t}}const Rv=/;(?![^(]*\))/g,Nv=/:(.+)/;function xv(t){const e={};return t.split(Rv).forEach(n=>{if(n){const s=n.split(Nv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function dc(t){let e="";if(He(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=dc(t[n]);s&&(e+=s+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iN=t=>He(t)?t:t==null?"":ne(t)||Ue(t)&&(t.toString===Ud||!oe(t.toString))?JSON.stringify(t,Dd,2):String(t),Dd=(t,e)=>e&&e.__v_isRef?Dd(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!ne(e)&&!Fd(e)?String(e):e,Ce={},Os=[],Lt=()=>{},Pv=()=>!1,Ov=/^on[^a-z]/,Wo=t=>Ov.test(t),pc=t=>t.startsWith("onUpdate:"),je=Object.assign,gc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dv=Object.prototype.hasOwnProperty,ge=(t,e)=>Dv.call(t,e),ne=Array.isArray,Ds=t=>Go(t)==="[object Map]",Ld=t=>Go(t)==="[object Set]",oe=t=>typeof t=="function",He=t=>typeof t=="string",mc=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Md=t=>Ue(t)&&oe(t.then)&&oe(t.catch),Ud=Object.prototype.toString,Go=t=>Ud.call(t),Lv=t=>Go(t).slice(8,-1),Fd=t=>Go(t)==="[object Object]",yc=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mv=/-(\w)/g,Vs=Yo(t=>t.replace(Mv,(e,n)=>n?n.toUpperCase():"")),Uv=/\B([A-Z])/g,nr=Yo(t=>t.replace(Uv,"-$1").toLowerCase()),$d=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=Yo(t=>t?`on${$d(t)}`:""),zr=(t,e)=>!Object.is(t,e),Fa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nh;const Fv=()=>nh||(nh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Bt;class Vd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Bt&&(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function qd(t){return new Vd(t)}function $v(t,e=Bt){e&&e.active&&e.effects.push(t)}const vc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jd=t=>(t.w&An)>0,Hd=t=>(t.n&An)>0,Bv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=An},Vv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];jd(r)&&!Hd(r)?r.delete(t):e[n++]=r,r.w&=~An,r.n&=~An}e.length=n}},pl=new WeakMap;let Tr=0,An=1;const gl=30;let Nt;const Jn=Symbol(""),ml=Symbol("");class wc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$v(this,s)}run(){if(!this.active)return this.fn();let e=Nt,n=Tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,Tn=!0,An=1<<++Tr,Tr<=gl?Bv(this):sh(this),this.fn()}finally{Tr<=gl&&Vv(this),An=1<<--Tr,Nt=this.parent,Tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(sh(this),this.onStop&&this.onStop(),this.active=!1)}}function sh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tn=!0;const zd=[];function sr(){zd.push(Tn),Tn=!1}function rr(){const t=zd.pop();Tn=t===void 0?!0:t}function wt(t,e,n){if(Tn&&Nt){let s=pl.get(t);s||pl.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=vc()),Kd(r)}}function Kd(t,e){let n=!1;Tr<=gl?Hd(t)||(t.n|=An,n=!jd(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function sn(t,e,n,s,r,i){const o=pl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?yc(n)&&a.push(o.get("length")):(a.push(o.get(Jn)),Ds(t)&&a.push(o.get(ml)));break;case"delete":ne(t)||(a.push(o.get(Jn)),Ds(t)&&a.push(o.get(ml)));break;case"set":Ds(t)&&a.push(o.get(Jn));break}if(a.length===1)a[0]&&yl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yl(vc(l))}}function yl(t,e){for(const n of ne(t)?t:[...t])(n!==Nt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const qv=hc("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(mc)),jv=_c(),Hv=_c(!1,!0),zv=_c(!0),rh=Kv();function Kv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=me(this);for(let i=0,o=this.length;i<o;i++)wt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(me)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sr();const s=me(this)[e].apply(this,n);return rr(),s}}),t}function _c(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?lw:Jd:e?Xd:Qd).get(s))return s;const o=ne(s);if(!t&&o&&ge(rh,r))return Reflect.get(rh,r,i);const a=Reflect.get(s,r,i);return(mc(r)?Wd.has(r):qv(r))||(t||wt(s,"get",r),e)?a:De(a)?!o||!yc(r)?a.value:a:Ue(a)?t?Zd(a):Ln(a):a}}const Wv=Gd(),Gv=Gd(!0);function Gd(t=!1){return function(n,s,r,i){let o=n[s];if(Kr(o)&&De(o)&&!De(r))return!1;if(!t&&!Kr(r)&&(ep(r)||(r=me(r),o=me(o)),!ne(n)&&De(o)&&!De(r)))return o.value=r,!0;const a=ne(n)&&yc(s)?Number(s)<n.length:ge(n,s),l=Reflect.set(n,s,r,i);return n===me(i)&&(a?zr(r,o)&&sn(n,"set",s,r):sn(n,"add",s,r)),l}}function Yv(t,e){const n=ge(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&sn(t,"delete",e,void 0),s}function Qv(t,e){const n=Reflect.has(t,e);return(!mc(e)||!Wd.has(e))&&wt(t,"has",e),n}function Xv(t){return wt(t,"iterate",ne(t)?"length":Jn),Reflect.ownKeys(t)}const Yd={get:jv,set:Wv,deleteProperty:Yv,has:Qv,ownKeys:Xv},Jv={get:zv,set(t,e){return!0},deleteProperty(t,e){return!0}},Zv=je({},Yd,{get:Hv,set:Gv}),bc=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function qi(t,e,n=!1,s=!1){t=t.__v_raw;const r=me(t),i=me(e);e!==i&&!n&&wt(r,"get",e),!n&&wt(r,"get",i);const{has:o}=Qo(r),a=s?bc:n?Ic:Wr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ji(t,e=!1){const n=this.__v_raw,s=me(n),r=me(t);return t!==r&&!e&&wt(s,"has",t),!e&&wt(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Hi(t,e=!1){return t=t.__v_raw,!e&&wt(me(t),"iterate",Jn),Reflect.get(t,"size",t)}function ih(t){t=me(t);const e=me(this);return Qo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function oh(t,e){e=me(e);const n=me(this),{has:s,get:r}=Qo(n);let i=s.call(n,t);i||(t=me(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?zr(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function ah(t){const e=me(this),{has:n,get:s}=Qo(e);let r=n.call(e,t);r||(t=me(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&sn(e,"delete",t,void 0),i}function lh(){const t=me(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function zi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=me(o),l=e?bc:t?Ic:Wr;return!t&&wt(a,"iterate",Jn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Ki(t,e,n){return function(...s){const r=this.__v_raw,i=me(r),o=Ds(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?bc:e?Ic:Wr;return!e&&wt(i,"iterate",l?ml:Jn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:this}}function ew(){const t={get(i){return qi(this,i)},get size(){return Hi(this)},has:ji,add:ih,set:oh,delete:ah,clear:lh,forEach:zi(!1,!1)},e={get(i){return qi(this,i,!1,!0)},get size(){return Hi(this)},has:ji,add:ih,set:oh,delete:ah,clear:lh,forEach:zi(!1,!0)},n={get(i){return qi(this,i,!0)},get size(){return Hi(this,!0)},has(i){return ji.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:zi(!0,!1)},s={get(i){return qi(this,i,!0,!0)},get size(){return Hi(this,!0)},has(i){return ji.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ki(i,!1,!1),n[i]=Ki(i,!0,!1),e[i]=Ki(i,!1,!0),s[i]=Ki(i,!0,!0)}),[t,n,e,s]}const[tw,nw,sw,rw]=ew();function Ec(t,e){const n=e?t?rw:sw:t?nw:tw;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ge(n,r)&&r in s?n:s,r,i)}const iw={get:Ec(!1,!1)},ow={get:Ec(!1,!0)},aw={get:Ec(!0,!1)},Qd=new WeakMap,Xd=new WeakMap,Jd=new WeakMap,lw=new WeakMap;function cw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uw(t){return t.__v_skip||!Object.isExtensible(t)?0:cw(Lv(t))}function Ln(t){return Kr(t)?t:Tc(t,!1,Yd,iw,Qd)}function hw(t){return Tc(t,!1,Zv,ow,Xd)}function Zd(t){return Tc(t,!0,Jv,aw,Jd)}function Tc(t,e,n,s,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=uw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function In(t){return Kr(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function Kr(t){return!!(t&&t.__v_isReadonly)}function ep(t){return!!(t&&t.__v_isShallow)}function tp(t){return In(t)||Kr(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function rn(t){return ho(t,"__v_skip",!0),t}const Wr=t=>Ue(t)?Ln(t):t,Ic=t=>Ue(t)?Zd(t):t;function np(t){Tn&&Nt&&(t=me(t),Kd(t.dep||(t.dep=vc())))}function sp(t,e){t=me(t),t.dep&&yl(t.dep)}function De(t){return!!(t&&t.__v_isRef===!0)}function $e(t){return rp(t,!1)}function fw(t){return rp(t,!0)}function rp(t,e){return De(t)?t:new dw(t,e)}class dw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:Wr(e)}get value(){return np(this),this._value}set value(e){e=this.__v_isShallow?e:me(e),zr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Wr(e),sp(this))}}function tn(t){return De(t)?t.value:t}const pw={get:(t,e,n)=>tn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return De(r)&&!De(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ip(t){return In(t)?t:new Proxy(t,pw)}function gw(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=yw(t,n);return e}class mw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function yw(t,e,n){const s=t[e];return De(s)?s:new mw(t,e,n)}class vw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new wc(e,()=>{this._dirty||(this._dirty=!0,sp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=me(this);return np(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ww(t,e,n=!1){let s,r;const i=oe(t);return i?(s=t,r=Lt):(s=t.get,r=t.set),new vw(s,r,i||!r,n)}function Sn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Xo(i,e,n)}return r}function Ct(t,e,n,s){if(oe(t)){const i=Sn(t,e,n,s);return i&&Md(i)&&i.catch(o=>{Xo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ct(t[i],e,n,s));return r}function Xo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[t,o,a]);return}}_w(t,n,r,s)}function _w(t,e,n,s=!0){console.error(t)}let fo=!1,vl=!1;const yt=[];let Xt=0;const Or=[];let Ir=null,Cs=0;const Dr=[];let gn=null,ks=0;const op=Promise.resolve();let Sc=null,wl=null;function qt(t){const e=Sc||op;return t?e.then(this?t.bind(this):t):e}function bw(t){let e=Xt+1,n=yt.length;for(;e<n;){const s=e+n>>>1;Gr(yt[s])<t?e=s+1:n=s}return e}function ap(t){(!yt.length||!yt.includes(t,fo&&t.allowRecurse?Xt+1:Xt))&&t!==wl&&(t.id==null?yt.push(t):yt.splice(bw(t.id),0,t),lp())}function lp(){!fo&&!vl&&(vl=!0,Sc=op.then(hp))}function Ew(t){const e=yt.indexOf(t);e>Xt&&yt.splice(e,1)}function cp(t,e,n,s){ne(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),lp()}function Tw(t){cp(t,Ir,Or,Cs)}function Iw(t){cp(t,gn,Dr,ks)}function Cc(t,e=null){if(Or.length){for(wl=e,Ir=[...new Set(Or)],Or.length=0,Cs=0;Cs<Ir.length;Cs++)Ir[Cs]();Ir=null,Cs=0,wl=null,Cc(t,e)}}function up(t){if(Dr.length){const e=[...new Set(Dr)];if(Dr.length=0,gn){gn.push(...e);return}for(gn=e,gn.sort((n,s)=>Gr(n)-Gr(s)),ks=0;ks<gn.length;ks++)gn[ks]();gn=null,ks=0}}const Gr=t=>t.id==null?1/0:t.id;function hp(t){vl=!1,fo=!0,Cc(t),yt.sort((n,s)=>Gr(n)-Gr(s));const e=Lt;try{for(Xt=0;Xt<yt.length;Xt++){const n=yt[Xt];n&&n.active!==!1&&Sn(n,null,14)}}finally{Xt=0,yt.length=0,up(),fo=!1,Sc=null,(yt.length||Or.length||Dr.length)&&hp(t)}}function Sw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ce;f?r=n.map(p=>p.trim()):h&&(r=n.map(Bd))}let a,l=s[a=Ua(e)]||s[a=Ua(Vs(e))];!l&&i&&(l=s[a=Ua(nr(e))]),l&&Ct(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(c,t,6,r)}}function fp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!oe(t)){const l=c=>{const u=fp(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(s.set(t,null),null):(ne(i)?i.forEach(l=>o[l]=null):je(o,i),s.set(t,o),o)}function Jo(t,e){return!t||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,nr(e))||ge(t,e))}let Ot=null,dp=null;function po(t){const e=Ot;return Ot=t,dp=t&&t.type.__scopeId||null,e}function Sr(t,e=Ot,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vh(-1);const i=po(e),o=t(...r);return po(i),s._d&&vh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function $a(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:T}=t;let w,E;const N=po(t);try{if(n.shapeFlag&4){const P=r||s;w=Vt(u.call(P,P,h,i,p,f,m)),E=l}else{const P=e;w=Vt(P.length>1?P(i,{attrs:l,slots:a,emit:c}):P(i,null)),E=e.props?l:Cw(l)}}catch(P){Mr.length=0,Xo(P,t,1),w=qe(Mt)}let L=w;if(E&&T!==!1){const P=Object.keys(E),{shapeFlag:Y}=L;P.length&&Y&7&&(o&&P.some(pc)&&(E=kw(E,o)),L=rs(L,E))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),w=L,po(N),w}const Cw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wo(n))&&((e||(e={}))[n]=t[n]);return e},kw=(t,e)=>{const n={};for(const s in t)(!pc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Aw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ch(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Jo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ch(s,o,c):!0:!!o;return!1}function ch(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Jo(n,i))return!0}return!1}function Rw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nw=t=>t.__isSuspense;function xw(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Iw(t)}function Lr(t,e){if(Ye){let n=Ye.provides;const s=Ye.parent&&Ye.parent.provides;s===n&&(n=Ye.provides=Object.create(s)),n[t]=e}}function jt(t,e,n=!1){const s=Ye||Ot;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&oe(e)?e.call(s.proxy):e}}const uh={};function xt(t,e,n){return pp(t,e,n)}function pp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ce){const a=Ye;let l,c=!1,u=!1;if(De(t)?(l=()=>t.value,c=ep(t)):In(t)?(l=()=>t,s=!0):ne(t)?(u=!0,c=t.some(In),l=()=>t.map(E=>{if(De(E))return E.value;if(In(E))return Gn(E);if(oe(E))return Sn(E,a,2)})):oe(t)?e?l=()=>Sn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ct(t,a,3,[f])}:l=Lt,e&&s){const E=l;l=()=>Gn(E())}let h,f=E=>{h=w.onStop=()=>{Sn(E,a,4)}};if(Jr)return f=Lt,e?n&&Ct(e,a,3,[l(),u?[]:void 0,f]):l(),Lt;let p=u?[]:uh;const m=()=>{if(!!w.active)if(e){const E=w.run();(s||c||(u?E.some((N,L)=>zr(N,p[L])):zr(E,p)))&&(h&&h(),Ct(e,a,3,[E,p===uh?void 0:p,f]),p=E)}else w.run()};m.allowRecurse=!!e;let T;r==="sync"?T=m:r==="post"?T=()=>ft(m,a&&a.suspense):T=()=>{!a||a.isMounted?Tw(m):m()};const w=new wc(l,T);return e?n?m():p=w.run():r==="post"?ft(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&gc(a.scope.effects,w)}}function Pw(t,e,n){const s=this.proxy,r=He(t)?t.includes(".")?gp(s,t):()=>s[t]:t.bind(s,s);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Ye;js(this);const a=pp(r,i.bind(s),n);return o?js(o):es(),a}function gp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Gn(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))Gn(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(Ld(t)||Ds(t))t.forEach(n=>{Gn(n,e)});else if(Fd(t))for(const n in t)Gn(t[n],e);return t}function mp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qs(()=>{t.isMounted=!0}),on(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],Ow={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(t,{slots:e}){const n=Wt(),s=mp();let r;return()=>{const i=e.default&&kc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==Mt){o=T;break}}const a=me(t),{mode:l}=a;if(s.isLeaving)return Ba(o);const c=hh(o);if(!c)return Ba(o);const u=Yr(c,a,s,n);Qr(c,u);const h=n.subTree,f=h&&hh(h);let p=!1;const{getTransitionKey:m}=c.type;if(m){const T=m();r===void 0?r=T:T!==r&&(r=T,p=!0)}if(f&&f.type!==Mt&&(!Kn(c,f)||p)){const T=Yr(f,a,s,n);if(Qr(f,T),l==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update()},Ba(o);l==="in-out"&&c.type!==Mt&&(T.delayLeave=(w,E,N)=>{const L=vp(s,f);L[String(f.key)]=f,w._leaveCb=()=>{E(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},yp=Ow;function vp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Yr(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:T,onAppear:w,onAfterAppear:E,onAppearCancelled:N}=e,L=String(t.key),P=vp(n,t),Y=(M,fe)=>{M&&Ct(M,s,9,fe)},$={mode:i,persisted:o,beforeEnter(M){let fe=a;if(!n.isMounted)if(r)fe=T||a;else return;M._leaveCb&&M._leaveCb(!0);const ie=P[L];ie&&Kn(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),Y(fe,[M])},enter(M){let fe=l,ie=c,_e=u;if(!n.isMounted)if(r)fe=w||l,ie=E||c,_e=N||u;else return;let Ae=!1;const F=M._enterCb=ae=>{Ae||(Ae=!0,ae?Y(_e,[M]):Y(ie,[M]),$.delayedLeave&&$.delayedLeave(),M._enterCb=void 0)};fe?(fe(M,F),fe.length<=1&&F()):F()},leave(M,fe){const ie=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return fe();Y(h,[M]);let _e=!1;const Ae=M._leaveCb=F=>{_e||(_e=!0,fe(),F?Y(m,[M]):Y(p,[M]),M._leaveCb=void 0,P[ie]===t&&delete P[ie])};P[ie]=t,f?(f(M,Ae),f.length<=1&&Ae()):Ae()},clone(M){return Yr(M,e,n,s)}};return $}function Ba(t){if(Zo(t))return t=rs(t),t.children=null,t}function hh(t){return Zo(t)?t.children?t.children[0]:void 0:t}function Qr(t,e){t.shapeFlag&6&&t.component?Qr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kc(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===St?(o.patchFlag&128&&r++,s=s.concat(kc(o.children,e,a))):(e||o.type!==Mt)&&s.push(a!=null?rs(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ac(t){return oe(t)?{setup:t,name:t.name}:t}const _l=t=>!!t.type.__asyncLoader,Zo=t=>t.type.__isKeepAlive;function wp(t,e){bp(t,"a",e)}function _p(t,e){bp(t,"da",e)}function bp(t,e,n=Ye){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ea(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Zo(r.parent.vnode)&&Dw(s,e,n,r),r=r.parent}}function Dw(t,e,n,s){const r=ea(e,t,s,!0);Rc(()=>{gc(s[e],r)},n)}function ea(t,e,n=Ye,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sr(),js(n);const a=Ct(e,n,t,o);return es(),rr(),a});return s?r.unshift(i):r.push(i),i}}const cn=t=>(e,n=Ye)=>(!Jr||t==="sp")&&ea(t,e,n),Lw=cn("bm"),qs=cn("m"),Mw=cn("bu"),Ep=cn("u"),on=cn("bum"),Rc=cn("um"),Uw=cn("sp"),Fw=cn("rtg"),$w=cn("rtc");function Bw(t,e=Ye){ea("ec",t,e)}let bl=!0;function Vw(t){const e=Ip(t),n=t.proxy,s=t.ctx;bl=!1,e.beforeCreate&&fh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:T,deactivated:w,beforeDestroy:E,beforeUnmount:N,destroyed:L,unmounted:P,render:Y,renderTracked:$,renderTriggered:M,errorCaptured:fe,serverPrefetch:ie,expose:_e,inheritAttrs:Ae,components:F,directives:ae,filters:ue}=e;if(c&&qw(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const be=o[de];oe(be)&&(s[de]=be.bind(n))}if(r){const de=r.call(n,n);Ue(de)&&(t.data=Ln(de))}if(bl=!0,i)for(const de in i){const be=i[de],Be=oe(be)?be.bind(n,n):oe(be.get)?be.get.bind(n,n):Lt,Gt=!oe(be)&&oe(be.set)?be.set.bind(n):Lt,bt=z({get:Be,set:Gt});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>bt.value,set:gt=>bt.value=gt})}if(a)for(const de in a)Tp(a[de],s,n,de);if(l){const de=oe(l)?l.call(n):l;Reflect.ownKeys(de).forEach(be=>{Lr(be,de[be])})}u&&fh(u,t,"c");function X(de,be){ne(be)?be.forEach(Be=>de(Be.bind(n))):be&&de(be.bind(n))}if(X(Lw,h),X(qs,f),X(Mw,p),X(Ep,m),X(wp,T),X(_p,w),X(Bw,fe),X($w,$),X(Fw,M),X(on,N),X(Rc,P),X(Uw,ie),ne(_e))if(_e.length){const de=t.exposed||(t.exposed={});_e.forEach(be=>{Object.defineProperty(de,be,{get:()=>n[be],set:Be=>n[be]=Be})})}else t.exposed||(t.exposed={});Y&&t.render===Lt&&(t.render=Y),Ae!=null&&(t.inheritAttrs=Ae),F&&(t.components=F),ae&&(t.directives=ae)}function qw(t,e,n=Lt,s=!1){ne(t)&&(t=El(t));for(const r in t){const i=t[r];let o;Ue(i)?"default"in i?o=jt(i.from||r,i.default,!0):o=jt(i.from||r):o=jt(i),De(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function fh(t,e,n){Ct(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tp(t,e,n,s){const r=s.includes(".")?gp(n,s):()=>n[s];if(He(t)){const i=e[t];oe(i)&&xt(r,i)}else if(oe(t))xt(r,t.bind(n));else if(Ue(t))if(ne(t))t.forEach(i=>Tp(i,e,n,s));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&xt(r,i,t)}}function Ip(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>go(l,c,o,!0)),go(l,e,o)),i.set(e,l),l}function go(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&go(t,i,n,!0),r&&r.forEach(o=>go(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=jw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jw={data:dh,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:qn,directives:qn,watch:zw,provide:dh,inject:Hw};function dh(t,e){return e?t?function(){return je(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function Hw(t,e){return qn(El(t),El(e))}function El(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?je(je(Object.create(null),t),e):e}function zw(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const s in e)n[s]=at(t[s],e[s]);return n}function Kw(t,e,n,s=!1){const r={},i={};ho(i,ta,1),t.propsDefaults=Object.create(null),Sp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:hw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ww(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=me(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Jo(t.emitsOptions,f))continue;const p=e[f];if(l)if(ge(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const m=Vs(f);r[m]=Tl(l,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{Sp(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=nr(h))===h||!ge(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Tl(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ge(e,h)&&!0)&&(delete i[h],c=!0)}c&&sn(t,"set","$attrs")}function Sp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zi(l))continue;const c=e[l];let u;r&&ge(r,u=Vs(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Jo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=me(n),c=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Tl(r,l,h,c[h],t,!ge(c,h))}}return o}function Tl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&oe(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(js(r),s=c[n]=l.call(null,e),es())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===nr(n))&&(s=!0))}return s}function Cp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!oe(t)){const u=h=>{l=!0;const[f,p]=Cp(h,e,!0);je(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return s.set(t,Os),Os;if(ne(i))for(let u=0;u<i.length;u++){const h=Vs(i[u]);ph(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=Vs(u);if(ph(h)){const f=i[u],p=o[h]=ne(f)||oe(f)?{type:f}:f;if(p){const m=yh(Boolean,p.type),T=yh(String,p.type);p[0]=m>-1,p[1]=T<0||m<T,(m>-1||ge(p,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function ph(t){return t[0]!=="$"}function gh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function mh(t,e){return gh(t)===gh(e)}function yh(t,e){return ne(e)?e.findIndex(n=>mh(n,t)):oe(e)&&mh(e,t)?0:-1}const kp=t=>t[0]==="_"||t==="$stable",Nc=t=>ne(t)?t.map(Vt):[Vt(t)],Gw=(t,e,n)=>{const s=Sr((...r)=>Nc(e(...r)),n);return s._c=!1,s},Ap=(t,e,n)=>{const s=t._ctx;for(const r in t){if(kp(r))continue;const i=t[r];if(oe(i))e[r]=Gw(r,i,s);else if(i!=null){const o=Nc(i);e[r]=()=>o}}},Rp=(t,e)=>{const n=Nc(e);t.slots.default=()=>n},Yw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),ho(e,"_",n)):Ap(e,t.slots={})}else t.slots={},e&&Rp(t,e);ho(t.slots,ta,1)},Qw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ap(e,r)),o=e}else e&&(Rp(t,e),o={default:1});if(i)for(const a in r)!kp(a)&&!(a in o)&&delete r[a]};function Np(t,e){const n=Ot;if(n===null)return t;const s=sa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Ce]=e[i];oe(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function $n(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(sr(),Ct(l,n,8,[t.el,a,t,e]),rr())}}function xp(){return{app:null,config:{isNativeTag:Pv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xw=0;function Jw(t,e){return function(s,r=null){oe(s)||(s=Object.assign({},s)),r!=null&&!Ue(r)&&(r=null);const i=xp(),o=new Set;let a=!1;const l=i.app={_uid:Xw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:v_,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=qe(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,sa(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Il(t,e,n,s,r=!1){if(ne(t)){t.forEach((f,p)=>Il(f,e&&(ne(e)?e[p]:e),n,s,r));return}if(_l(s)&&!r)return;const i=s.shapeFlag&4?sa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(He(c)?(u[c]=null,ge(h,c)&&(h[c]=null)):De(c)&&(c.value=null)),oe(l))Sn(l,a,12,[o,u]);else{const f=He(l),p=De(l);if(f||p){const m=()=>{if(t.f){const T=f?u[l]:l.value;r?ne(T)&&gc(T,i):ne(T)?T.includes(i)||T.push(i):f?(u[l]=[i],ge(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ge(h,l)&&(h[l]=o)):De(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ft(m,n)):m()}}}const ft=xw;function Zw(t){return e_(t)}function e_(t,e){const n=Fv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Lt,cloneNode:m,insertStaticContent:T}=t,w=(d,g,v,C=null,y=null,b=null,A=!1,S=null,R=!!g.dynamicChildren)=>{if(d===g)return;d&&!Kn(d,g)&&(C=K(d),ot(d,y,b,!0),d=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:_,ref:U,shapeFlag:x}=g;switch(_){case xc:E(d,g,v,C);break;case Mt:N(d,g,v,C);break;case Va:d==null&&L(g,v,C,A);break;case St:ae(d,g,v,C,y,b,A,S,R);break;default:x&1?$(d,g,v,C,y,b,A,S,R):x&6?ue(d,g,v,C,y,b,A,S,R):(x&64||x&128)&&_.process(d,g,v,C,y,b,A,S,R,Te)}U!=null&&y&&Il(U,d&&d.ref,b,g||d,!g)},E=(d,g,v,C)=>{if(d==null)s(g.el=a(g.children),v,C);else{const y=g.el=d.el;g.children!==d.children&&c(y,g.children)}},N=(d,g,v,C)=>{d==null?s(g.el=l(g.children||""),v,C):g.el=d.el},L=(d,g,v,C)=>{[d.el,d.anchor]=T(d.children,g,v,C,d.el,d.anchor)},P=({el:d,anchor:g},v,C)=>{let y;for(;d&&d!==g;)y=f(d),s(d,v,C),d=y;s(g,v,C)},Y=({el:d,anchor:g})=>{let v;for(;d&&d!==g;)v=f(d),r(d),d=v;r(g)},$=(d,g,v,C,y,b,A,S,R)=>{A=A||g.type==="svg",d==null?M(g,v,C,y,b,A,S,R):_e(d,g,y,b,A,S,R)},M=(d,g,v,C,y,b,A,S)=>{let R,_;const{type:U,props:x,shapeFlag:V,transition:J,patchFlag:he,dirs:Ie}=d;if(d.el&&m!==void 0&&he===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,b,x&&x.is,x),V&8?u(R,d.children):V&16&&ie(d.children,R,null,C,y,b&&U!=="foreignObject",A,S),Ie&&$n(d,null,C,"created"),x){for(const Re in x)Re!=="value"&&!Zi(Re)&&i(R,Re,null,x[Re],b,d.children,C,y,D);"value"in x&&i(R,"value",null,x.value),(_=x.onVnodeBeforeMount)&&$t(_,C,d)}fe(R,d,d.scopeId,A,C)}Ie&&$n(d,null,C,"beforeMount");const ve=(!y||y&&!y.pendingBranch)&&J&&!J.persisted;ve&&J.beforeEnter(R),s(R,g,v),((_=x&&x.onVnodeMounted)||ve||Ie)&&ft(()=>{_&&$t(_,C,d),ve&&J.enter(R),Ie&&$n(d,null,C,"mounted")},y)},fe=(d,g,v,C,y)=>{if(v&&p(d,v),C)for(let b=0;b<C.length;b++)p(d,C[b]);if(y){let b=y.subTree;if(g===b){const A=y.vnode;fe(d,A,A.scopeId,A.slotScopeIds,y.parent)}}},ie=(d,g,v,C,y,b,A,S,R=0)=>{for(let _=R;_<d.length;_++){const U=d[_]=S?mn(d[_]):Vt(d[_]);w(null,U,g,v,C,y,b,A,S)}},_e=(d,g,v,C,y,b,A)=>{const S=g.el=d.el;let{patchFlag:R,dynamicChildren:_,dirs:U}=g;R|=d.patchFlag&16;const x=d.props||Ce,V=g.props||Ce;let J;v&&Bn(v,!1),(J=V.onVnodeBeforeUpdate)&&$t(J,v,g,d),U&&$n(g,d,v,"beforeUpdate"),v&&Bn(v,!0);const he=y&&g.type!=="foreignObject";if(_?Ae(d.dynamicChildren,_,S,v,C,he,b):A||Be(d,g,S,null,v,C,he,b,!1),R>0){if(R&16)F(S,g,x,V,v,C,y);else if(R&2&&x.class!==V.class&&i(S,"class",null,V.class,y),R&4&&i(S,"style",x.style,V.style,y),R&8){const Ie=g.dynamicProps;for(let ve=0;ve<Ie.length;ve++){const Re=Ie[ve],At=x[Re],ws=V[Re];(ws!==At||Re==="value")&&i(S,Re,At,ws,y,d.children,v,C,D)}}R&1&&d.children!==g.children&&u(S,g.children)}else!A&&_==null&&F(S,g,x,V,v,C,y);((J=V.onVnodeUpdated)||U)&&ft(()=>{J&&$t(J,v,g,d),U&&$n(g,d,v,"updated")},C)},Ae=(d,g,v,C,y,b,A)=>{for(let S=0;S<g.length;S++){const R=d[S],_=g[S],U=R.el&&(R.type===St||!Kn(R,_)||R.shapeFlag&70)?h(R.el):v;w(R,_,U,null,C,y,b,A,!0)}},F=(d,g,v,C,y,b,A)=>{if(v!==C){for(const S in C){if(Zi(S))continue;const R=C[S],_=v[S];R!==_&&S!=="value"&&i(d,S,_,R,A,g.children,y,b,D)}if(v!==Ce)for(const S in v)!Zi(S)&&!(S in C)&&i(d,S,v[S],null,A,g.children,y,b,D);"value"in C&&i(d,"value",v.value,C.value)}},ae=(d,g,v,C,y,b,A,S,R)=>{const _=g.el=d?d.el:a(""),U=g.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:V,slotScopeIds:J}=g;J&&(S=S?S.concat(J):J),d==null?(s(_,v,C),s(U,v,C),ie(g.children,v,U,y,b,A,S,R)):x>0&&x&64&&V&&d.dynamicChildren?(Ae(d.dynamicChildren,V,v,y,b,A,S),(g.key!=null||y&&g===y.subTree)&&Pp(d,g,!0)):Be(d,g,v,U,y,b,A,S,R)},ue=(d,g,v,C,y,b,A,S,R)=>{g.slotScopeIds=S,d==null?g.shapeFlag&512?y.ctx.activate(g,v,C,A,R):j(g,v,C,y,b,A,R):X(d,g,R)},j=(d,g,v,C,y,b,A)=>{const S=d.component=f_(d,C,y);if(Zo(d)&&(S.ctx.renderer=Te),d_(S),S.asyncDep){if(y&&y.registerDep(S,de),!d.el){const R=S.subTree=qe(Mt);N(null,R,g,v)}return}de(S,d,g,v,y,b,A)},X=(d,g,v)=>{const C=g.component=d.component;if(Aw(d,g,v))if(C.asyncDep&&!C.asyncResolved){be(C,g,v);return}else C.next=g,Ew(C.update),C.update();else g.component=d.component,g.el=d.el,C.vnode=g},de=(d,g,v,C,y,b,A)=>{const S=()=>{if(d.isMounted){let{next:U,bu:x,u:V,parent:J,vnode:he}=d,Ie=U,ve;Bn(d,!1),U?(U.el=he.el,be(d,U,A)):U=he,x&&Fa(x),(ve=U.props&&U.props.onVnodeBeforeUpdate)&&$t(ve,J,U,he),Bn(d,!0);const Re=$a(d),At=d.subTree;d.subTree=Re,w(At,Re,h(At.el),K(At),d,y,b),U.el=Re.el,Ie===null&&Rw(d,Re.el),V&&ft(V,y),(ve=U.props&&U.props.onVnodeUpdated)&&ft(()=>$t(ve,J,U,he),y)}else{let U;const{el:x,props:V}=g,{bm:J,m:he,parent:Ie}=d,ve=_l(g);if(Bn(d,!1),J&&Fa(J),!ve&&(U=V&&V.onVnodeBeforeMount)&&$t(U,Ie,g),Bn(d,!0),x&&ee){const Re=()=>{d.subTree=$a(d),ee(x,d.subTree,d,y,null)};ve?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Re()):Re()}else{const Re=d.subTree=$a(d);w(null,Re,v,C,d,y,b),g.el=Re.el}if(he&&ft(he,y),!ve&&(U=V&&V.onVnodeMounted)){const Re=g;ft(()=>$t(U,Ie,Re),y)}g.shapeFlag&256&&d.a&&ft(d.a,y),d.isMounted=!0,g=v=C=null}},R=d.effect=new wc(S,()=>ap(d.update),d.scope),_=d.update=R.run.bind(R);_.id=d.uid,Bn(d,!0),_()},be=(d,g,v)=>{g.component=d;const C=d.vnode.props;d.vnode=g,d.next=null,Ww(d,g.props,C,v),Qw(d,g.children,v),sr(),Cc(void 0,d.update),rr()},Be=(d,g,v,C,y,b,A,S,R=!1)=>{const _=d&&d.children,U=d?d.shapeFlag:0,x=g.children,{patchFlag:V,shapeFlag:J}=g;if(V>0){if(V&128){bt(_,x,v,C,y,b,A,S,R);return}else if(V&256){Gt(_,x,v,C,y,b,A,S,R);return}}J&8?(U&16&&D(_,y,b),x!==_&&u(v,x)):U&16?J&16?bt(_,x,v,C,y,b,A,S,R):D(_,y,b,!0):(U&8&&u(v,""),J&16&&ie(x,v,C,y,b,A,S,R))},Gt=(d,g,v,C,y,b,A,S,R)=>{d=d||Os,g=g||Os;const _=d.length,U=g.length,x=Math.min(_,U);let V;for(V=0;V<x;V++){const J=g[V]=R?mn(g[V]):Vt(g[V]);w(d[V],J,v,null,y,b,A,S,R)}_>U?D(d,y,b,!0,!1,x):ie(g,v,C,y,b,A,S,R,x)},bt=(d,g,v,C,y,b,A,S,R)=>{let _=0;const U=g.length;let x=d.length-1,V=U-1;for(;_<=x&&_<=V;){const J=d[_],he=g[_]=R?mn(g[_]):Vt(g[_]);if(Kn(J,he))w(J,he,v,null,y,b,A,S,R);else break;_++}for(;_<=x&&_<=V;){const J=d[x],he=g[V]=R?mn(g[V]):Vt(g[V]);if(Kn(J,he))w(J,he,v,null,y,b,A,S,R);else break;x--,V--}if(_>x){if(_<=V){const J=V+1,he=J<U?g[J].el:C;for(;_<=V;)w(null,g[_]=R?mn(g[_]):Vt(g[_]),v,he,y,b,A,S,R),_++}}else if(_>V)for(;_<=x;)ot(d[_],y,b,!0),_++;else{const J=_,he=_,Ie=new Map;for(_=he;_<=V;_++){const mt=g[_]=R?mn(g[_]):Vt(g[_]);mt.key!=null&&Ie.set(mt.key,_)}let ve,Re=0;const At=V-he+1;let ws=!1,Qu=0;const vr=new Array(At);for(_=0;_<At;_++)vr[_]=0;for(_=J;_<=x;_++){const mt=d[_];if(Re>=At){ot(mt,y,b,!0);continue}let Ut;if(mt.key!=null)Ut=Ie.get(mt.key);else for(ve=he;ve<=V;ve++)if(vr[ve-he]===0&&Kn(mt,g[ve])){Ut=ve;break}Ut===void 0?ot(mt,y,b,!0):(vr[Ut-he]=_+1,Ut>=Qu?Qu=Ut:ws=!0,w(mt,g[Ut],v,null,y,b,A,S,R),Re++)}const Xu=ws?t_(vr):Os;for(ve=Xu.length-1,_=At-1;_>=0;_--){const mt=he+_,Ut=g[mt],Ju=mt+1<U?g[mt+1].el:C;vr[_]===0?w(null,Ut,v,Ju,y,b,A,S,R):ws&&(ve<0||_!==Xu[ve]?gt(Ut,v,Ju,2):ve--)}}},gt=(d,g,v,C,y=null)=>{const{el:b,type:A,transition:S,children:R,shapeFlag:_}=d;if(_&6){gt(d.component.subTree,g,v,C);return}if(_&128){d.suspense.move(g,v,C);return}if(_&64){A.move(d,g,v,Te);return}if(A===St){s(b,g,v);for(let x=0;x<R.length;x++)gt(R[x],g,v,C);s(d.anchor,g,v);return}if(A===Va){P(d,g,v);return}if(C!==2&&_&1&&S)if(C===0)S.beforeEnter(b),s(b,g,v),ft(()=>S.enter(b),y);else{const{leave:x,delayLeave:V,afterLeave:J}=S,he=()=>s(b,g,v),Ie=()=>{x(b,()=>{he(),J&&J()})};V?V(b,he,Ie):Ie()}else s(b,g,v)},ot=(d,g,v,C=!1,y=!1)=>{const{type:b,props:A,ref:S,children:R,dynamicChildren:_,shapeFlag:U,patchFlag:x,dirs:V}=d;if(S!=null&&Il(S,null,v,d,!0),U&256){g.ctx.deactivate(d);return}const J=U&1&&V,he=!_l(d);let Ie;if(he&&(Ie=A&&A.onVnodeBeforeUnmount)&&$t(Ie,g,d),U&6)H(d.component,v,C);else{if(U&128){d.suspense.unmount(v,C);return}J&&$n(d,null,g,"beforeUnmount"),U&64?d.type.remove(d,g,v,y,Te,C):_&&(b!==St||x>0&&x&64)?D(_,g,v,!1,!0):(b===St&&x&384||!y&&U&16)&&D(R,g,v),C&&Et(d)}(he&&(Ie=A&&A.onVnodeUnmounted)||J)&&ft(()=>{Ie&&$t(Ie,g,d),J&&$n(d,null,g,"unmounted")},v)},Et=d=>{const{type:g,el:v,anchor:C,transition:y}=d;if(g===St){I(v,C);return}if(g===Va){Y(d);return}const b=()=>{r(v),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:S}=y,R=()=>A(v,b);S?S(d.el,b,R):R()}else b()},I=(d,g)=>{let v;for(;d!==g;)v=f(d),r(d),d=v;r(g)},H=(d,g,v)=>{const{bum:C,scope:y,update:b,subTree:A,um:S}=d;C&&Fa(C),y.stop(),b&&(b.active=!1,ot(A,d,g,v)),S&&ft(S,g),ft(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(d,g,v,C=!1,y=!1,b=0)=>{for(let A=b;A<d.length;A++)ot(d[A],g,v,C,y)},K=d=>d.shapeFlag&6?K(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Ee=(d,g,v)=>{d==null?g._vnode&&ot(g._vnode,null,null,!0):w(g._vnode||null,d,g,null,null,null,v),up(),g._vnode=d},Te={p:w,um:ot,m:gt,r:Et,mt:j,mc:ie,pc:Be,pbc:Ae,n:K,o:t};let le,ee;return e&&([le,ee]=e(Te)),{render:Ee,hydrate:le,createApp:Jw(Ee,le)}}function Bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pp(t,e,n=!1){const s=t.children,r=e.children;if(ne(s)&&ne(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=mn(r[i]),a.el=o.el),n||Pp(o,a))}}function t_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const n_=t=>t.__isTeleport,s_=Symbol(),St=Symbol(void 0),xc=Symbol(void 0),Mt=Symbol(void 0),Va=Symbol(void 0),Mr=[];let Zn=null;function mo(t=!1){Mr.push(Zn=t?null:[])}function r_(){Mr.pop(),Zn=Mr[Mr.length-1]||null}let yo=1;function vh(t){yo+=t}function Op(t){return t.dynamicChildren=yo>0?Zn||Os:null,r_(),yo>0&&Zn&&Zn.push(t),t}function i_(t,e,n,s,r,i){return Op(Xr(t,e,n,s,r,i,!0))}function Pc(t,e,n,s,r){return Op(qe(t,e,n,s,r,!0))}function Sl(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const ta="__vInternal",Dp=({key:t})=>t!=null?t:null,eo=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||De(t)||oe(t)?{i:Ot,r:t,k:e,f:!!n}:t:null;function Xr(t,e=null,n=null,s=0,r=null,i=t===St?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dp(e),ref:e&&eo(e),scopeId:dp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Oc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),yo>0&&!o&&Zn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Zn.push(l),l}const qe=o_;function o_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===s_)&&(t=Mt),Sl(t)){const a=rs(t,e,!0);return n&&Oc(a,n),a}if(y_(t)&&(t=t.__vccOpts),e){e=a_(e);let{class:a,style:l}=e;a&&!He(a)&&(e.class=dc(a)),Ue(l)&&(tp(l)&&!ne(l)&&(l=je({},l)),e.style=fc(l))}const o=He(t)?1:Nw(t)?128:n_(t)?64:Ue(t)?4:oe(t)?2:0;return Xr(t,e,n,s,r,o,i,!0)}function a_(t){return t?tp(t)||ta in t?je({},t):t:null}function rs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?l_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dp(a),ref:e&&e.ref?n&&r?ne(r)?r.concat(eo(e)):[r,eo(e)]:eo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor}}function na(t=" ",e=0){return qe(xc,null,t,e)}function Lp(t="",e=!1){return e?(mo(),Pc(Mt,null,t)):qe(Mt,null,t)}function Vt(t){return t==null||typeof t=="boolean"?qe(Mt):ne(t)?qe(St,null,t.slice()):typeof t=="object"?mn(t):qe(xc,null,String(t))}function mn(t){return t.el===null||t.memo?t:rs(t)}function Oc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ta in e)?e._ctx=Ot:r===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),s&64?(n=16,e=[na(e)]):n=8);t.children=e,t.shapeFlag|=n}function l_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=dc([e.class,s.class]));else if(r==="style")e.style=fc([e.style,s.style]);else if(Wo(r)){const i=e[r],o=s[r];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function $t(t,e,n,s=null){Ct(t,e,7,[n,s])}function oN(t,e,n,s){let r;const i=n&&n[s];if(ne(t)||He(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Cl=t=>t?Mp(t)?sa(t)||t.proxy:Cl(t.parent):null,vo=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cl(t.parent),$root:t=>Cl(t.root),$emit:t=>t.emit,$options:t=>Ip(t),$forceUpdate:t=>()=>ap(t.update),$nextTick:t=>qt.bind(t.proxy),$watch:t=>Pw.bind(t)}),c_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Ce&&ge(s,e))return o[e]=1,s[e];if(r!==Ce&&ge(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=3,i[e];if(n!==Ce&&ge(n,e))return o[e]=4,n[e];bl&&(o[e]=0)}}const u=vo[e];let h,f;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&ge(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ge(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Ce&&ge(r,e)?(r[e]=n,!0):s!==Ce&&ge(s,e)?(s[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&ge(t,o)||e!==Ce&&ge(e,o)||(a=i[0])&&ge(a,o)||ge(s,o)||ge(vo,o)||ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},u_=xp();let h_=0;function f_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||u_,i={uid:h_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(s,r),emitsOptions:fp(s,r),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Sw.bind(null,i),t.ce&&t.ce(i),i}let Ye=null;const Wt=()=>Ye||Ot,js=t=>{Ye=t,t.scope.on()},es=()=>{Ye&&Ye.scope.off(),Ye=null};function Mp(t){return t.vnode.shapeFlag&4}let Jr=!1;function d_(t,e=!1){Jr=e;const{props:n,children:s}=t.vnode,r=Mp(t);Kw(t,n,r,e),Yw(t,s);const i=r?p_(t,e):void 0;return Jr=!1,i}function p_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rn(new Proxy(t.ctx,c_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?m_(t):null;js(t),sr();const i=Sn(s,t,0,[t.props,r]);if(rr(),es(),Md(i)){if(i.then(es,es),e)return i.then(o=>{wh(t,o,e)}).catch(o=>{Xo(o,t,0)});t.asyncDep=i}else wh(t,i,e)}else Up(t,e)}function wh(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=ip(e)),Up(t,n)}let _h;function Up(t,e,n){const s=t.type;if(!t.render){if(!e&&_h&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=je(je({isCustomElement:i,delimiters:a},o),l);s.render=_h(r,c)}}t.render=s.render||Lt}js(t),sr(),Vw(t),rr(),es()}function g_(t){return new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}})}function m_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=g_(t))},slots:t.slots,emit:t.emit,expose:e}}function sa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ip(rn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vo)return vo[n](t)}}))}function y_(t){return oe(t)&&"__vccOpts"in t}const z=(t,e)=>ww(t,e,Jr);function W(t,e,n){const s=arguments.length;return s===2?Ue(e)&&!ne(e)?Sl(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Sl(n)&&(n=[n]),qe(t,e,n))}const v_="3.2.33",w_="http://www.w3.org/2000/svg",Wn=typeof document!="undefined"?document:null,bh=Wn&&Wn.createElement("template"),__={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Wn.createElementNS(w_,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{bh.innerHTML=s?`<svg>${t}</svg>`:t;const a=bh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function b_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function E_(t,e,n){const s=t.style,r=He(n);if(n&&!r){for(const i in n)kl(s,i,n[i]);if(e&&!He(e))for(const i in e)n[i]==null&&kl(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Eh=/\s*!important$/;function kl(t,e,n){if(ne(n))n.forEach(s=>kl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=T_(t,e);Eh.test(n)?t.setProperty(nr(s),n.replace(Eh,""),"important"):t[s]=n}}const Th=["Webkit","Moz","ms"],qa={};function T_(t,e){const n=qa[e];if(n)return n;let s=Vs(e);if(s!=="filter"&&s in t)return qa[e]=s;s=$d(s);for(let r=0;r<Th.length;r++){const i=Th[r]+s;if(i in t)return qa[e]=i}return e}const Ih="http://www.w3.org/1999/xlink";function I_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ih,e.slice(6,e.length)):t.setAttributeNS(Ih,e,n);else{const i=Av(e);n==null||i&&!Od(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function S_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Od(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Fp,C_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Al=0;const k_=Promise.resolve(),A_=()=>{Al=0},R_=()=>Al||(k_.then(A_),Al=Fp());function N_(t,e,n,s){t.addEventListener(e,n,s)}function x_(t,e,n,s){t.removeEventListener(e,n,s)}function P_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=O_(e);if(s){const c=i[e]=D_(s,r);N_(t,a,c,l)}else o&&(x_(t,a,o,l),i[e]=void 0)}}const Sh=/(?:Once|Passive|Capture)$/;function O_(t){let e;if(Sh.test(t)){e={};let n;for(;n=t.match(Sh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[nr(t.slice(2)),e]}function D_(t,e){const n=s=>{const r=s.timeStamp||Fp();(C_||r>=n.attached-1)&&Ct(L_(s,n.value),e,5,[s])};return n.value=t,n.attached=R_(),n}function L_(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ch=/^on[a-z]/,M_=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?b_(t,s,r):e==="style"?E_(t,n,s):Wo(e)?pc(e)||P_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U_(t,e,s,r))?S_(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),I_(t,e,s,r))};function U_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ch.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ch.test(e)&&He(n)?!1:e in t}const hn="transition",wr="animation",Dc=(t,{slots:e})=>W(yp,Bp(t),e);Dc.displayName="Transition";const $p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F_=Dc.props=je({},yp.props,$p),Vn=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},kh=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Bp(t){const e={};for(const F in t)F in $p||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=$_(r),T=m&&m[0],w=m&&m[1],{onBeforeEnter:E,onEnter:N,onEnterCancelled:L,onLeave:P,onLeaveCancelled:Y,onBeforeAppear:$=E,onAppear:M=N,onAppearCancelled:fe=L}=e,ie=(F,ae,ue)=>{jn(F,ae?u:a),jn(F,ae?c:o),ue&&ue()},_e=(F,ae)=>{jn(F,p),jn(F,f),ae&&ae()},Ae=F=>(ae,ue)=>{const j=F?M:N,X=()=>ie(ae,F,ue);Vn(j,[ae,X]),Ah(()=>{jn(ae,F?l:i),Yt(ae,F?u:a),kh(j)||Rh(ae,s,T,X)})};return je(e,{onBeforeEnter(F){Vn(E,[F]),Yt(F,i),Yt(F,o)},onBeforeAppear(F){Vn($,[F]),Yt(F,l),Yt(F,c)},onEnter:Ae(!1),onAppear:Ae(!0),onLeave(F,ae){const ue=()=>_e(F,ae);Yt(F,h),qp(),Yt(F,f),Ah(()=>{jn(F,h),Yt(F,p),kh(P)||Rh(F,s,w,ue)}),Vn(P,[F,ue])},onEnterCancelled(F){ie(F,!1),Vn(L,[F])},onAppearCancelled(F){ie(F,!0),Vn(fe,[F])},onLeaveCancelled(F){_e(F),Vn(Y,[F])}})}function $_(t){if(t==null)return null;if(Ue(t))return[ja(t.enter),ja(t.leave)];{const e=ja(t);return[e,e]}}function ja(t){return Bd(t)}function Yt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function jn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ah(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let B_=0;function Rh(t,e,n,s){const r=t._endId=++B_,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Vp(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=p=>{p.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function Vp(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(hn+"Delay"),i=s(hn+"Duration"),o=Nh(r,i),a=s(wr+"Delay"),l=s(wr+"Duration"),c=Nh(a,l);let u=null,h=0,f=0;e===hn?o>0&&(u=hn,h=o,f=i.length):e===wr?c>0&&(u=wr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?hn:wr:null,f=u?u===hn?i.length:l.length:0);const p=u===hn&&/\b(transform|all)(,|$)/.test(n[hn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function Nh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>xh(n)+xh(t[s])))}function xh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function qp(){return document.body.offsetHeight}const jp=new WeakMap,Hp=new WeakMap,V_={name:"TransitionGroup",props:je({},F_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Wt(),s=mp();let r,i;return Ep(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!K_(r[0].el,n.vnode.el,o))return;r.forEach(j_),r.forEach(H_);const a=r.filter(z_);qp(),a.forEach(l=>{const c=l.el,u=c.style;Yt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,jn(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=me(t),a=Bp(o);let l=o.tag||St;r=i,i=e.default?kc(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&Qr(u,Yr(u,a,s,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Qr(u,Yr(u,a,s,n)),jp.set(u,u.el.getBoundingClientRect())}return qe(l,null,i)}}},q_=V_;function j_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function H_(t){Hp.set(t,t.el.getBoundingClientRect())}function z_(t){const e=jp.get(t),n=Hp.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function K_(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Vp(s);return r.removeChild(s),i}const W_=["ctrl","shift","alt","meta"],G_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>W_.some(n=>t[`${n}Key`]&&!e.includes(n))},aN=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=G_[e[r]];if(i&&i(n,e))return}return t(n,...s)},Y_=je({patchProp:M_},__);let Ph;function Q_(){return Ph||(Ph=Zw(Y_))}const zp=(...t)=>{const e=Q_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=X_(s);if(!r)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function X_(t){return He(t)?document.querySelector(t):t}var J_=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Kp;const ra=t=>Kp=t,Wp=Symbol();function Rl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ur;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ur||(Ur={}));function Z_(){const t=qd(!0),e=t.run(()=>$e({}));let n=[],s=[];const r=rn({install(i){ra(r),r._a=i,i.provide(Wp,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!J_?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Gp=()=>{};function Oh(t,e,n,s=Gp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Wt()&&Rc(r),r}function _s(t,...e){t.slice().forEach(n=>{n(...e)})}function Nl(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Rl(r)&&Rl(s)&&t.hasOwnProperty(n)&&!De(s)&&!In(s)?t[n]=Nl(r,s):t[n]=s}return t}const eb=Symbol();function tb(t){return!Rl(t)||!t.hasOwnProperty(eb)}const{assign:Qt}=Object;function nb(t){return!!(De(t)&&t.effect)}function sb(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=gw(n.state.value[t]);return Qt(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=rn(z(()=>{ra(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return l=Yp(t,c,e,n),l.$reset=function(){const h=r?r():{};this.$patch(f=>{Qt(f,h)})},l}function Yp(t,e,n={},s,r){let i;const o=n.state,a=Qt({actions:{}},n),l={deep:!0};let c,u,h=rn([]),f=rn([]),p;const m=s.state.value[t];!o&&!m&&(s.state.value[t]={}),$e({});function T($){let M;c=u=!1,typeof $=="function"?($(s.state.value[t]),M={type:Ur.patchFunction,storeId:t,events:p}):(Nl(s.state.value[t],$),M={type:Ur.patchObject,payload:$,storeId:t,events:p}),qt().then(()=>{c=!0}),u=!0,_s(h,M,s.state.value[t])}const w=Gp;function E(){i.stop(),h=[],f=[],s._s.delete(t)}function N($,M){return function(){ra(s);const fe=Array.from(arguments),ie=[],_e=[];function Ae(ue){ie.push(ue)}function F(ue){_e.push(ue)}_s(f,{args:fe,name:$,store:P,after:Ae,onError:F});let ae;try{ae=M.apply(this&&this.$id===t?this:P,fe)}catch(ue){throw _s(_e,ue),ue}return ae instanceof Promise?ae.then(ue=>(_s(ie,ue),ue)).catch(ue=>(_s(_e,ue),Promise.reject(ue))):(_s(ie,ae),ae)}}const L={_p:s,$id:t,$onAction:Oh.bind(null,f),$patch:T,$reset:w,$subscribe($,M={}){const fe=Oh(h,$,M.detached,()=>ie()),ie=i.run(()=>xt(()=>s.state.value[t],_e=>{(M.flush==="sync"?u:c)&&$({storeId:t,type:Ur.direct,events:p},_e)},Qt({},l,M)));return fe},$dispose:E},P=Ln(Qt({},L));s._s.set(t,P);const Y=s._e.run(()=>(i=qd(),i.run(()=>e())));for(const $ in Y){const M=Y[$];if(De(M)&&!nb(M)||In(M))o||(m&&tb(M)&&(De(M)?M.value=m[$]:Nl(M,m[$])),s.state.value[t][$]=M);else if(typeof M=="function"){const fe=N($,M);Y[$]=fe,a.actions[$]=M}}return Qt(P,Y),Qt(me(P),Y),Object.defineProperty(P,"$state",{get:()=>s.state.value[t],set:$=>{T(M=>{Qt(M,$)})}}),s._p.forEach($=>{Qt(P,i.run(()=>$({store:P,app:s._a,pinia:s,options:a})))}),m&&o&&n.hydrate&&n.hydrate(P.$state,m),c=!0,u=!0,P}function rb(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=Wt();return a=a||c&&jt(Wp),a&&ra(a),a=Kp,a._s.has(s)||(i?Yp(s,e,r,a):sb(s,r,a)),a._s.get(s)}return o.$id=s,o}function Lc(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0})}const Rn=$e(!1);let ia;function ib(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function ob(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Qp="ontouchstart"in window||window.navigator.maxTouchPoints>0;function ab(t){ia={is:Oe({},t)},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function lb(t){const e=t.toLowerCase(),n=ob(e),s=ib(e,n),r={};s.browser&&(r[s.browser]=!0,r.version=s.version,r.versionNumber=parseInt(s.versionNumber,10)),s.platform&&(r[s.platform]=!0);const i=r.android||r.ios||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"];return i===!0||e.indexOf("mobile")>-1?(r.mobile=!0,r.edga||r.edgios?(r.edge=!0,s.browser="edge"):r.crios?(r.chrome=!0,s.browser="chrome"):r.fxios&&(r.firefox=!0,s.browser="firefox")):r.desktop=!0,(r.ipod||r.ipad||r.iphone)&&(r.ios=!0),r["windows phone"]&&(r.winphone=!0,delete r["windows phone"]),(r.chrome||r.opr||r.safari||r.vivaldi||r.mobile===!0&&r.ios!==!0&&i!==!0)&&(r.webkit=!0),r.edg&&(s.browser="edgechromium",r.edgeChromium=!0),(r.safari&&r.blackberry||r.bb)&&(s.browser="blackberry",r.blackberry=!0),r.safari&&r.playbook&&(s.browser="playbook",r.playbook=!0),r.opr&&(s.browser="opera",r.opera=!0),r.safari&&r.android&&(s.browser="android",r.android=!0),r.safari&&r.kindle&&(s.browser="kindle",r.kindle=!0),r.safari&&r.silk&&(s.browser="silk",r.silk=!0),r.vivaldi&&(s.browser="vivaldi",r.vivaldi=!0),r.name=s.browser,r.platform=s.platform,e.indexOf("electron")>-1?r.electron=!0:document.location.href.indexOf("-extension://")>-1?r.bex=!0:(window.Capacitor!==void 0?(r.capacitor=!0,r.nativeMobile=!0,r.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(r.cordova=!0,r.nativeMobile=!0,r.nativeMobileWrapper="cordova"),Qp===!0&&r.mac===!0&&(r.desktop===!0&&r.safari===!0||r.nativeMobile===!0&&r.android!==!0&&r.ios!==!0&&r.ipad!==!0)&&ab(r)),r}const Dh=navigator.userAgent||navigator.vendor||window.opera,cb={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Dt={userAgent:Dh,is:lb(Dh),has:{touch:Qp},within:{iframe:window.self!==window.top}},xl={install(t){const{$q:e}=t;Rn.value===!0?(t.onSSRHydrated.push(()=>{Rn.value=!1,Object.assign(e.platform,Dt),ia=void 0}),e.platform=Ln(this)):e.platform=this}};{let t;Lc(Dt.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Dt.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),Rn.value===!0?Object.assign(xl,Dt,ia,cb):Object.assign(xl,Dt)}var oa=(t,e)=>{const n=Ln(t);for(const s in t)Lc(e,s,()=>n[s],r=>{n[s]=r});return e};const is={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(is,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Nn(){}function ub(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function Xp(t){t.stopPropagation()}function Jp(t){t.cancelable!==!1&&t.preventDefault()}function Hn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function hb(t,e,n){const s=`__q_${e}_evt`;t[s]=t[s]!==void 0?t[s].concat(n):n,n.forEach(r=>{r[0].addEventListener(r[1],t[r[2]],is[r[3]])})}function fb(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(s=>{s[0].removeEventListener(s[1],t[s[2]],is[s[3]])}),t[n]=void 0)}function db(t,e=250,n){let s;function r(){const i=arguments,o=()=>{s=void 0,n!==!0&&t.apply(this,i)};clearTimeout(s),n===!0&&s===void 0&&t.apply(this,i),s=setTimeout(o,e)}return r.cancel=()=>{clearTimeout(s)},r}const Ha=["sm","md","lg","xl"],{passive:Lh}=is;var pb=oa({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Nn,setDebounce:Nn,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,s=n||window,r=document.scrollingElement||document.documentElement,i=n===void 0||Dt.is.mobile===!0?()=>[Math.max(window.innerWidth,r.clientWidth),Math.max(window.innerHeight,r.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-r.clientWidth,n.height*n.scale+window.innerHeight-r.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[f,p]=i();if(p!==this.height&&(this.height=p),f!==this.width)this.width=f;else if(h!==!0)return;let m=this.sizes;this.gt.xs=f>=m.sm,this.gt.sm=f>=m.md,this.gt.md=f>=m.lg,this.gt.lg=f>=m.xl,this.lt.sm=f<m.sm,this.lt.md=f<m.md,this.lt.lg=f<m.lg,this.lt.xl=f<m.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,m=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",m!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${m}`)),this.name=m)};let a,l={},c=16;this.setSizes=h=>{Ha.forEach(f=>{h[f]!==void 0&&(l[f]=h[f])})},this.setDebounce=h=>{c=h};const u=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&Ha.forEach(f=>{this.sizes[f]=parseInt(h.getPropertyValue(`--q-size-${f}`),10)}),this.setSizes=f=>{Ha.forEach(p=>{f[p]&&(this.sizes[p]=f[p])}),this.__update(!0)},this.setDebounce=f=>{a!==void 0&&s.removeEventListener("resize",a,Lh),a=f>0?db(this.__update,f):this.__update,s.addEventListener("resize",a,Lh)},this.setDebounce(c),Object.keys(l).length>0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Rn.value===!0?e.push(u):u()}});const tt=oa({isActive:!1,mode:!1},{__media:void 0,set(t){tt.mode=t,t==="auto"?(tt.__media===void 0&&(tt.__media=window.matchMedia("(prefers-color-scheme: dark)"),tt.__updateMedia=()=>{tt.set("auto")},tt.__media.addListener(tt.__updateMedia)),t=tt.__media.matches):tt.__media!==void 0&&(tt.__media.removeListener(tt.__updateMedia),tt.__media=void 0),tt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){tt.set(tt.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:s}=t.config;if(t.dark=this,this.__installed===!0&&s===void 0)return;this.isActive=s===!0;const r=s!==void 0?s:!1;if(Rn.value===!0){const i=a=>{this.__fromSSR=a},o=this.set;this.set=i,i(r),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(r)}}),Zp=()=>!0;function gb(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function mb(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function yb(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Zp;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(gb).map(mb)),()=>e.includes(window.location.hash)}var vb={__history:[],add:Nn,remove:Nn,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Dt.is;if(e!==!0&&n!==!0)return;const s=t.config[e===!0?"cordova":"capacitor"];if(s!==void 0&&s.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Zp),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const r=yb(Object.assign({backButtonExit:!0},s)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else r()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},Mh={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Uh(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const yn=oa({__langPack:{}},{getLocale:Uh,set(t=Mh,e){const n=Ft(Oe({},t),{rtl:t.rtl===!0,getLocale:Uh});{const s=document.documentElement;s.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),s.setAttribute("lang",n.isoName),n.set=yn.set,Object.assign(yn.__langPack,n),yn.props=n,yn.isoName=n.isoName,yn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=yn.__langPack,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Mh)}});function wb(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let eg=!1;function _b(t){eg=t.isComposing===!0}function tg(t){return eg===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function wo(t,e){return tg(t)===!0?!1:[].concat(e).includes(t.keyCode)}function bb(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function Eb({is:t,has:e,within:n},s){const r=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const i=bb(t);i!==void 0&&r.push("platform-"+i)}if(t.nativeMobile===!0){const i=t.nativeMobileWrapper;r.push(i),r.push("native-mobile"),t.ios===!0&&(s[i]===void 0||s[i].iosStatusBarPadding!==!1)&&r.push("q-ios-padding")}else t.electron===!0?r.push("electron"):t.bex===!0&&r.push("bex");return n.iframe===!0&&r.push("within-iframe"),r}function Tb(){const t=document.body.className;let e=t;ia!==void 0&&(e=e.replace("desktop","platform-ios mobile")),Dt.has.touch===!0&&(e=e.replace("no-touch","touch")),Dt.within.iframe===!0&&(e+=" within-iframe"),t!==e&&(document.body.className=e)}function Ib(t){for(const e in t)wb(e,t[e])}var Sb={install(t){if(this.__installed!==!0){if(Rn.value===!0)Tb();else{const{$q:e}=t;e.config.brand!==void 0&&Ib(e.config.brand);const n=Eb(Dt,e.config);document.body.classList.add.apply(document.body.classList,n)}Dt.is.ios===!0&&document.body.addEventListener("touchstart",Nn),window.addEventListener("keydown",_b,!0)}}},Cb={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const _o=oa({iconMapFn:null,__icons:{}},{set(t,e){const n=Ft(Oe({},t),{rtl:t.rtl===!0});n.set=_o.set,Object.assign(_o.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,Lc(t,"iconMapFn",()=>this.iconMapFn,s=>{this.iconMapFn=s}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Cb)}}),kb="_q_",lN="_q_fo_",ng="_q_tabs_",bo={};let sg=!1;function Ab(){sg=!0}function Zr(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const Fh=[xl,Sb,tt,pb,vb,yn,_o];function Rb(t,e){const n=zp(t);n.config.globalProperties=e.config.globalProperties;const i=e._context,{reload:s}=i,r=Ma(i,["reload"]);return Object.assign(n._context,r),n}function $h(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function Nb(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(kb,n.$q),$h(n,Fh),e.components!==void 0&&Object.values(e.components).forEach(s=>{Zr(s)===!0&&s.name!==void 0&&t.component(s.name,s)}),e.directives!==void 0&&Object.values(e.directives).forEach(s=>{Zr(s)===!0&&s.name!==void 0&&t.directive(s.name,s)}),e.plugins!==void 0&&$h(n,Object.values(e.plugins).filter(s=>typeof s.install=="function"&&Fh.includes(s)===!1)),Rn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(s=>{s()}),n.$q.onSSRHydrated=()=>{}})}var xb=function(t,e={}){const n={version:"2.6.6"};sg===!1?(e.config!==void 0&&Object.assign(bo,e.config),n.config=Oe({},bo),Ab()):n.config=e.config||{},Nb(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},Pb={version:"2.6.6",install:xb,lang:yn,iconSet:_o};const Pl={xs:18,sm:24,md:32,lg:38,xl:46},Mc={size:String};function Uc(t,e=Pl){return z(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const Mn=t=>rn(Ac(t)),Ob=t=>rn(t);function rg(t,e){return t!==void 0&&t()||e}function Ns(t,e){return t!==void 0?e.concat(t()):e}function Db(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}const Bh="0 0 24 24",Vh=t=>t,za=t=>`ionicons ${t}`,ig={"mdi-":t=>`mdi ${t}`,"icon-":Vh,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":za,"ion-ios":za,"ion-logo":za,"iconfont ":Vh,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},og={o_:"-outlined",r_:"-round",s_:"-sharp"},Lb=new RegExp("^("+Object.keys(ig).join("|")+")"),Mb=new RegExp("^("+Object.keys(og).join("|")+")"),Ub=/^[Mm]\s?[-+]?\.?\d/,Fb=/^img:/,$b=/^svguse:/,Bb=/^ion-/,Vb=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var xn=Mn({name:"QIcon",props:Ft(Oe({},Mc),{tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean}),setup(t,{slots:e}){const{proxy:{$q:n}}=Wt(),s=Uc(t),r=z(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),i=z(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(Ub.test(a)===!0){const[u,h=Bh]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(f=>{const[p,m,T]=f.split("@@");return W("path",{style:m,d:p,transform:T})})}}if(Fb.test(a)===!0)return{img:!0,src:a.substring(4)};if($b.test(a)===!0){const[u,h=Bh]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let l=" ";const c=a.match(Lb);if(c!==null)o=ig[c[1]](a);else if(Vb.test(a)===!0)o=a;else if(Bb.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else{o="notranslate material-icons";const u=a.match(Mb);u!==null&&(a=a.substring(2),o+=og[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:r.value,style:s.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?W(t.tag,o,rg(e.default)):i.value.img===!0?W("span",o,Ns(e.default,[W("img",{src:i.value.src})])):i.value.svg===!0?W("span",o,Ns(e.default,[W("svg",{viewBox:i.value.viewBox},i.value.nodes)])):i.value.svguse===!0?W("span",o,Ns(e.default,[W("svg",{viewBox:i.value.viewBox},[W("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(o.class+=" "+i.value.cls),W(t.tag,o,Ns(e.default,[i.value.content])))}}}),qb=Mn({name:"QAvatar",props:Ft(Oe({},Mc),{fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean}),setup(t,{slots:e}){const n=Uc(t),s=z(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),r=z(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const i=t.icon!==void 0?[W(xn,{name:t.icon})]:void 0;return W("div",{class:s.value,style:n.value},[W("div",{class:"q-avatar__content row flex-center overflow-hidden",style:r.value},Db(e.default,i))])}}});const jb={size:{type:[Number,String],default:"1em"},color:String};function Hb(t){return{cSize:z(()=>t.size in Pl?`${Pl[t.size]}px`:t.size),classes:z(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var ag=Mn({name:"QSpinner",props:Ft(Oe({},jb),{thickness:{type:Number,default:5}}),setup(t){const{cSize:e,classes:n}=Hb(t);return()=>W("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[W("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function zb(t,e){const n=t.style;for(const s in e)n[s]=e[s]}function Kb(t,e=250){let n=!1,s;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),s=t.apply(this,arguments)),s}}function qh(t,e,n,s){n.modifiers.stop===!0&&Xp(t);const r=n.modifiers.color;let i=n.modifiers.center;i=i===!0||s===!0;const o=document.createElement("span"),a=document.createElement("span"),l=ub(t),{left:c,top:u,width:h,height:f}=e.getBoundingClientRect(),p=Math.sqrt(h*h+f*f),m=p/2,T=`${(h-p)/2}px`,w=i?T:`${l.left-c-m}px`,E=`${(f-p)/2}px`,N=i?E:`${l.top-u-m}px`;a.className="q-ripple__inner",zb(a,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${w},${N},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${r?" text-"+r:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const L=()=>{o.remove(),clearTimeout(P)};n.abort.push(L);let P=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${T},${E},0) scale3d(1,1,1)`,a.style.opacity=.2,P=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,P=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(L),1)},275)},250)},50)}function jh(t,{modifiers:e,value:n,arg:s,instance:r}){const i=Object.assign({},r.$q.config.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||s,keyCodes:[].concat(i.keyCodes||13)}}var lg=Ob({name:"ripple",beforeMount(t,e){const n={enabled:e.value!==!1,modifiers:{},abort:[],start(s){n.enabled===!0&&s.qSkipRipple!==!0&&(n.modifiers.early===!0?["mousedown","touchstart"].includes(s.type)===!0:s.type==="click")&&qh(s,t,n,s.qKeyEvent===!0)},keystart:Kb(s=>{n.enabled===!0&&s.qSkipRipple!==!0&&wo(s,n.modifiers.keyCodes)===!0&&s.type===`key${n.modifiers.early===!0?"down":"up"}`&&qh(s,t,n,!0)},300)};jh(n,e),t.__qripple=n,hb(n,"main",[[t,"mousedown","start","passive"],[t,"touchstart","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&jh(n,e)}},beforeUnmount(t){const e=t.__qripple;e.abort.forEach(n=>{n()}),fb(e,"main"),delete t._qripple}});const cg={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Wb=Object.keys(cg),Gb={align:{type:String,validator:t=>Wb.includes(t)}};function Yb(t){return z(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${cg[e]}`})}function Qb(t){return t.appContext.config.globalProperties.$router!==void 0}function Hh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function zh(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xb(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(Array.isArray(r)===!1||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Kh(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Jb(t,e){return Array.isArray(t)===!0?Kh(t,e):Array.isArray(e)===!0?Kh(e,t):t===e}function Zb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(Jb(t[n],e[n])===!1)return!1;return!0}const ug={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function hg(t){const e=Wt(),{props:n,proxy:s}=e,r=Qb(e),i=z(()=>n.disable!==!0&&n.href!==void 0),o=z(()=>r===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),a=z(()=>{if(o.value===!0)try{return s.$router.resolve(n.to)}catch{}return null}),l=z(()=>a.value!==null),c=z(()=>i.value===!0||l.value===!0),u=z(()=>n.type==="a"||c.value===!0?"a":n.tag||t||"div"),h=z(()=>i.value===!0?{href:n.href,target:n.target}:l.value===!0?{href:a.value.href,target:n.target}:{}),f=z(()=>{if(l.value===!1)return null;const{matched:E}=a.value,{length:N}=E,L=E[N-1];if(L===void 0)return-1;const P=s.$route.matched;if(P.length===0)return-1;const Y=P.findIndex(zh.bind(null,L));if(Y>-1)return Y;const $=Hh(E[N-2]);return N>1&&Hh(L)===$&&P[P.length-1].path!==$?P.findIndex(zh.bind(null,E[N-2])):Y}),p=z(()=>l.value===!0&&f.value>-1&&Xb(s.$route.params,a.value.params)),m=z(()=>p.value===!0&&f.value===s.$route.matched.length-1&&Zb(s.$route.params,a.value.params)),T=z(()=>l.value===!0?m.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function w(E){return n.disable===!0||E.metaKey||E.altKey||E.ctrlKey||E.shiftKey||E.__qNavigate!==!0&&E.defaultPrevented===!0||E.button!==void 0&&E.button!==0||n.target==="_blank"?!1:(Jp(E),s.$router[n.replace===!0?"replace":"push"](n.to).catch(N=>N))}return{hasRouterLink:l,hasHrefLink:i,hasLink:c,linkTag:u,linkRoute:a,linkIsActive:p,linkIsExactActive:m,linkClass:T,linkProps:h,navigateToRouterLink:w}}const Wh={none:0,xs:4,sm:8,md:16,lg:24,xl:32},e0={xs:8,sm:10,md:14,lg:20,xl:24},t0=["button","submit","reset"],n0=/[^\s]\/[^\s]/,s0=Ft(Oe(Oe({},Mc),ug),{type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:Ft(Oe({},Gb.align),{default:"center"}),stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean});function r0(t){const e=Uc(t,e0),n=Yb(t),{hasRouterLink:s,hasLink:r,linkTag:i,linkProps:o,navigateToRouterLink:a}=hg("button"),l=z(()=>{const w=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},w,{padding:t.padding.split(/\s+/).map(E=>E in Wh?Wh[E]+"px":E).join(" "),minWidth:"0",minHeight:"0"}):w}),c=z(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=z(()=>t.disable!==!0&&t.loading!==!0),h=z(()=>u.value===!0?t.tabindex||0:-1),f=z(()=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":"standard"),p=z(()=>{const w={tabindex:h.value};return r.value===!0?Object.assign(w,o.value):t0.includes(t.type)===!0&&(w.type=t.type),i.value==="a"?(t.disable===!0?w["aria-disabled"]="true":w.href===void 0&&(w.role="button"),s.value!==!0&&n0.test(t.type)===!0&&(w.type=t.type)):t.disable===!0&&(w.disabled="",w["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(w,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),w}),m=z(()=>{let w;return t.color!==void 0?t.flat===!0||t.outline===!0?w=`text-${t.textColor||t.color}`:w=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(w=`text-${t.textColor}`),`q-btn--${f.value} q-btn--${t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":""}`}`+(w!==void 0?" "+w:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")}),T=z(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:l,innerClasses:T,attributes:p,hasRouterLink:s,hasLink:r,linkTag:i,navigateToRouterLink:a,isActionable:u}}const{passiveCapture:It}=is;let bs=null,Es=null,Ts=null;var i0=Mn({name:"QBtn",props:Ft(Oe({},s0),{percentage:Number,darkPercentage:Boolean}),emits:["click","keydown","touchstart","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:s}=Wt(),{classes:r,style:i,innerClasses:o,attributes:a,hasRouterLink:l,hasLink:c,linkTag:u,navigateToRouterLink:h,isActionable:f}=r0(t),p=$e(null),m=$e(null);let T=null,w,E;const N=z(()=>t.label!==void 0&&t.label!==null&&t.label!==""),L=z(()=>t.disable===!0||t.ripple===!1?!1:Oe({keyCodes:c.value===!0?[13,32]:[13]},t.ripple===!0?{}:t.ripple)),P=z(()=>({center:t.round})),Y=z(()=>{const j=Math.max(0,Math.min(100,t.percentage));return j>0?{transition:"transform 0.6s",transform:`translateX(${j-100}%)`}:{}}),$=z(()=>t.loading===!0?{onMousedown:ue,onTouchstartPassive:ue,onClick:ue,onKeydown:ue,onKeyup:ue}:f.value===!0?{onClick:fe,onKeydown:ie,onMousedown:Ae,onTouchstart:_e}:{onClick:Hn}),M=z(()=>Oe(Oe({ref:p,class:"q-btn q-btn-item non-selectable no-outline "+r.value,style:i.value},a.value),$.value));function fe(j){if(p.value!==null){if(j!==void 0){if(j.defaultPrevented===!0)return;const X=document.activeElement;if(t.type==="submit"&&X!==document.body&&p.value.contains(X)===!1&&X.contains(p.value)===!1){p.value.focus();const de=()=>{document.removeEventListener("keydown",Hn,!0),document.removeEventListener("keyup",de,It),p.value!==null&&p.value.removeEventListener("blur",de,It)};document.addEventListener("keydown",Hn,!0),document.addEventListener("keyup",de,It),p.value.addEventListener("blur",de,It)}}if(l.value===!0){const X=()=>{j.__qNavigate=!0,h(j)};n("click",j,X),j.defaultPrevented!==!0&&X()}else n("click",j)}}function ie(j){p.value!==null&&(n("keydown",j),wo(j,[13,32])===!0&&Es!==p.value&&(Es!==null&&ae(),j.defaultPrevented!==!0&&(p.value.focus(),Es=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("keyup",F,!0),p.value.addEventListener("blur",F,It)),Hn(j)))}function _e(j){p.value!==null&&(n("touchstart",j),j.defaultPrevented!==!0&&(bs!==p.value&&(bs!==null&&ae(),bs=p.value,T=j.target,T.addEventListener("touchcancel",F,It),T.addEventListener("touchend",F,It)),w=!0,clearTimeout(E),E=setTimeout(()=>{w=!1},200)))}function Ae(j){p.value!==null&&(j.qSkipRipple=w===!0,n("mousedown",j),j.defaultPrevented!==!0&&Ts!==p.value&&(Ts!==null&&ae(),Ts=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("mouseup",F,It)))}function F(j){if(p.value!==null&&!(j!==void 0&&j.type==="blur"&&document.activeElement===p.value)){if(j!==void 0&&j.type==="keyup"){if(Es===p.value&&wo(j,[13,32])===!0){const X=new MouseEvent("click",j);X.qKeyEvent=!0,j.defaultPrevented===!0&&Jp(X),j.cancelBubble===!0&&Xp(X),p.value.dispatchEvent(X),Hn(j),j.qKeyEvent=!0}n("keyup",j)}ae()}}function ae(j){const X=m.value;j!==!0&&(bs===p.value||Ts===p.value)&&X!==null&&X!==document.activeElement&&(X.setAttribute("tabindex",-1),X.focus()),bs===p.value&&(T!==null&&(T.removeEventListener("touchcancel",F,It),T.removeEventListener("touchend",F,It)),bs=T=null),Ts===p.value&&(document.removeEventListener("mouseup",F,It),Ts=null),Es===p.value&&(document.removeEventListener("keyup",F,!0),p.value!==null&&p.value.removeEventListener("blur",F,It),Es=null),p.value!==null&&p.value.classList.remove("q-btn--active")}function ue(j){Hn(j),j.qSkipRipple=!0}return on(()=>{ae(!0)}),Object.assign(s,{click:fe}),()=>{let j=[];t.icon!==void 0&&j.push(W(xn,{name:t.icon,left:t.stack===!1&&N.value===!0,role:"img","aria-hidden":"true"})),N.value===!0&&j.push(W("span",{class:"block"},[t.label])),j=Ns(e.default,j),t.iconRight!==void 0&&t.round===!1&&j.push(W(xn,{name:t.iconRight,right:t.stack===!1&&N.value===!0,role:"img","aria-hidden":"true"}));const X=[W("span",{class:"q-focus-helper",ref:m})];return t.loading===!0&&t.percentage!==void 0&&X.push(W("span",{class:"q-btn__progress absolute-full overflow-hidden"},[W("span",{class:"q-btn__progress-indicator fit block"+(t.darkPercentage===!0?" q-btn__progress--dark":""),style:Y.value})])),X.push(W("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},j)),t.loading!==null&&X.push(W(Dc,{name:"q-transition--fade"},()=>t.loading===!0?[W("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[W(ag)])]:null)),Np(W(u.value,M.value,X),[[lg,L.value,void 0,P.value]])}}});let o0=document.body;function a0(t){const e=document.createElement("div");if(t!==void 0&&(e.id=t),bo.globalNodes!==void 0){const n=bo.globalNodes.class;n!==void 0&&(e.className=n)}return o0.appendChild(e),e}let l0=0;const to={},no={},Rt={},fg={},c0=/^\s*$/,dg=[],Fc=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],u0=["top-left","top-right","bottom-left","bottom-right"],As={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function pg(t,e,n){if(!t)return _r("parameter required");let s;const r={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(r,to),Zr(t)===!1&&(r.type&&Object.assign(r,As[r.type]),t={message:t}),Object.assign(r,As[t.type||r.type],t),typeof r.icon=="function"&&(r.icon=r.icon(e)),r.spinner?(r.spinner===!0&&(r.spinner=ag),r.spinner=rn(r.spinner)):r.spinner=!1,r.meta={hasMedia:Boolean(r.spinner!==!1||r.icon||r.avatar),hasText:Gh(r.message)||Gh(r.caption)},r.position){if(Fc.includes(r.position)===!1)return _r("wrong position",t)}else r.position="bottom";if(r.timeout===void 0)r.timeout=5e3;else{const l=parseInt(r.timeout,10);if(isNaN(l)||l<0)return _r("wrong timeout",t);r.timeout=l}r.timeout===0?r.progress=!1:r.progress===!0&&(r.meta.progressClass="q-notification__progress"+(r.progressClass?` ${r.progressClass}`:""),r.meta.progressStyle={animationDuration:`${r.timeout+1e3}ms`});const i=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(to.actions)===!0?to.actions:[]).concat(As[t.type]!==void 0&&Array.isArray(As[t.type].actions)===!0?As[t.type].actions:[]),{closeBtn:o}=r;if(o&&i.push({label:typeof o=="string"?o:e.lang.label.close}),r.actions=i.map(h=>{var f=h,{handler:l,noDismiss:c}=f,u=Ma(f,["handler","noDismiss"]);return Ft(Oe({flat:!0},u),{onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})}),r.multiLine===void 0&&(r.multiLine=r.actions.length>1),Object.assign(r.meta,{class:`q-notification row items-stretch q-notification--${r.multiLine===!0?"multi-line":"standard"}`+(r.color!==void 0?` bg-${r.color}`:"")+(r.textColor!==void 0?` text-${r.textColor}`:"")+(r.classes!==void 0?` ${r.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(r.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(r.multiLine===!0?"":" col"),leftClass:r.meta.hasText===!0?"additional":"single",attrs:Oe({role:"alert"},r.attrs)}),r.group===!1?(r.group=void 0,r.meta.group=void 0):((r.group===void 0||r.group===!0)&&(r.group=[r.message,r.caption,r.multiline].concat(r.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),r.meta.group=r.group+"|"+r.position),r.actions.length===0?r.actions=void 0:r.meta.actionsClass="q-notification__actions row items-center "+(r.multiLine===!0?"justify-end":"col-auto")+(r.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){clearTimeout(n.notif.meta.timer),r.meta.uid=n.notif.meta.uid;const l=Rt[r.position].value.indexOf(n.notif);Rt[r.position].value[l]=r}else{const l=no[r.meta.group];if(l===void 0){if(r.meta.uid=l0++,r.meta.badge=1,["left","right","center"].indexOf(r.position)!==-1)Rt[r.position].value.splice(Math.floor(Rt[r.position].value.length/2),0,r);else{const c=r.position.indexOf("top")>-1?"unshift":"push";Rt[r.position].value[c](r)}r.group!==void 0&&(no[r.meta.group]=r)}else{if(clearTimeout(l.meta.timer),r.badgePosition!==void 0){if(u0.includes(r.badgePosition)===!1)return _r("wrong badgePosition",t)}else r.badgePosition=`top-${r.position.indexOf("left")>-1?"right":"left"}`;r.meta.uid=l.meta.uid,r.meta.badge=l.meta.badge+1,r.meta.badgeClass=`q-notification__badge q-notification__badge--${r.badgePosition}`+(r.badgeColor!==void 0?` bg-${r.badgeColor}`:"")+(r.badgeTextColor!==void 0?` text-${r.badgeTextColor}`:"")+(r.badgeClass?` ${r.badgeClass}`:"");const c=Rt[r.position].value.indexOf(l);Rt[r.position].value[c]=no[r.meta.group]=r}}const a=()=>{h0(r),s=void 0};if(r.timeout>0&&(r.meta.timer=setTimeout(()=>{a()},r.timeout+1e3)),r.group!==void 0)return l=>{l!==void 0?_r("trying to update a grouped one which is forbidden",t):a()};if(s={dismiss:a,config:t,notif:r},n!==void 0){Object.assign(n,s);return}return l=>{if(s!==void 0)if(l===void 0)s.dismiss();else{const c=Object.assign({},s.config,l,{group:!1,position:r.position});pg(c,e,s)}}}function h0(t){clearTimeout(t.meta.timer);const e=Rt[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete no[t.meta.group];const n=dg[""+t.meta.uid];if(n){const{width:s,height:r}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=s,n.style.height=r}Rt[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function Gh(t){return t!=null&&c0.test(t)!==!0}function _r(t,e){return console.error(`Notify: ${t}`,e),!1}function f0(){return Mn({name:"QNotifications",devtools:{hide:!0},setup(){return()=>W("div",{class:"q-notifications"},Fc.map(t=>W(q_,{key:t,class:fg[t],tag:"div",name:`q-notification--${t}`},()=>Rt[t].value.map(e=>{const n=e.meta,s=[];if(n.hasMedia===!0&&(e.spinner!==!1?s.push(W(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?s.push(W(xn,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&s.push(W(qb,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>W("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let i;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];i=e.caption?[W("div",a),W("div",{class:"q-notification__caption"},[e.caption])]:a}s.push(W("div",o,i))}const r=[W("div",{class:n.contentClass},s)];return e.progress===!0&&r.push(W("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&r.push(W("div",{class:n.actionsClass},e.actions.map(i=>W(i0,i)))),n.badge>1&&r.push(W("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),W("div",Oe({ref:i=>{dg[""+n.uid]=i},key:n.uid,class:n.class},n.attrs),[W("div",{class:n.wrapperClass},r)])}))))}})}var d0={setDefaults(t){Zr(t)===!0&&Object.assign(to,t)},registerType(t,e){Zr(e)===!0&&(As[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>pg(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){Fc.forEach(s=>{Rt[s]=$e([]);const r=["left","center","right"].includes(s)===!0?"center":s.indexOf("top")>-1?"top":"bottom",i=s.indexOf("left")>-1?"start":s.indexOf("right")>-1?"end":"center",o=["left","right"].includes(s)?`items-${s==="left"?"start":"end"} justify-center`:s==="center"?"flex-center":`items-${i}`;fg[s]=`q-notifications__list q-notifications__list--${r} fixed column no-wrap ${o}`});const n=a0("q-notify");Rb(f0(),e).mount(n)}}};let p0=0;const g0=["click","keydown"],m0={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${p0++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function y0(t,e,n,s){const r=jt(ng,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:i}=Wt(),o=$e(null),a=$e(null),l=$e(null),c=z(()=>t.disable===!0||t.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},t.ripple===!0?{}:t.ripple)),u=z(()=>r.currentModel.value===t.name),h=z(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(u.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(t.icon&&t.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(t.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(t.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(s!==void 0&&s.linkClass.value!==""?` ${s.linkClass.value}`:"")),f=z(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(t.contentClass!==void 0?` ${t.contentClass}`:"")),p=z(()=>t.disable===!0||r.hasFocus.value===!0?-1:t.tabindex||0);function m(L,P){if(P!==!0&&o.value!==null&&o.value.focus(),t.disable!==!0){let Y;if(s!==void 0)if(s.hasRouterLink.value===!0)Y=()=>{L.__qNavigate=!0,r.avoidRouteWatcher=!0;const $=s.navigateToRouterLink(L);$===!1?r.avoidRouteWatcher=!1:$.then(M=>{r.avoidRouteWatcher=!1,M===void 0&&r.updateModel({name:t.name,fromRoute:!0})})};else{n("click",L);return}else Y=()=>{r.updateModel({name:t.name,fromRoute:!1})};n("click",L,Y),L.defaultPrevented!==!0&&Y()}}function T(L){wo(L,[13,32])?m(L,!0):tg(L)!==!0&&L.keyCode>=35&&L.keyCode<=40&&r.onKbdNavigate(L.keyCode,i.$el)===!0&&Hn(L),n("keydown",L)}function w(){const L=r.tabProps.value.narrowIndicator,P=[],Y=W("div",{ref:l,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});t.icon!==void 0&&P.push(W(xn,{class:"q-tab__icon",name:t.icon})),t.label!==void 0&&P.push(W("div",{class:"q-tab__label"},t.label)),t.alert!==!1&&P.push(t.alertIcon!==void 0?W(xn,{class:"q-tab__alert-icon",color:t.alert!==!0?t.alert:void 0,name:t.alertIcon}):W("div",{class:"q-tab__alert"+(t.alert!==!0?` text-${t.alert}`:"")})),L===!0&&P.push(Y);const $=[W("div",{class:"q-focus-helper",tabindex:-1,ref:o}),W("div",{class:f.value},Ns(e.default,P))];return L===!1&&$.push(Y),$}const E={name:z(()=>t.name),rootRef:a,tabIndicatorRef:l,routerProps:s};on(()=>{r.unregisterTab(E),r.recalculateScroll()}),qs(()=>{r.registerTab(E),r.recalculateScroll()});function N(L,P){const Y=Oe({ref:a,class:h.value,tabindex:p.value,role:"tab","aria-selected":u.value===!0?"true":"false","aria-disabled":t.disable===!0?"true":void 0,onClick:m,onKeydown:T},P);return Np(W(L,Y,w()),[[lg,c.value]])}return{renderTab:N,$tabs:r}}var Ka=Mn({name:"QRouteTab",props:Oe(Oe({},ug),m0),emits:g0,setup(t,{slots:e,emit:n}){const s=hg(),{renderTab:r,$tabs:i}=y0(t,e,n,Oe({exact:z(()=>t.exact)},s));return xt(()=>t.name+t.exact+(s.linkRoute.value||{}).href,()=>{i.verifyRouteModel()}),()=>r(s.linkTag.value,s.linkProps.value)}});function v0(){const t=$e(!Rn.value);return t.value===!1&&qs(()=>{t.value=!0}),t}const gg=typeof ResizeObserver!="undefined",Yh=gg===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var w0=Mn({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,s,r={width:-1,height:-1};function i(l){l===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(clearTimeout(n),n=null,s){const{offsetWidth:l,offsetHeight:c}=s;(l!==r.width||c!==r.height)&&(r={width:l,height:c},e("resize",r))}}const a=Wt();if(Object.assign(a.proxy,{trigger:i}),gg===!0){let l;return qs(()=>{qt(()=>{s=a.proxy.$el.parentNode,s&&(l=new ResizeObserver(i),l.observe(s),o())})}),on(()=>{clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():s&&l.unobserve(s))}),Nn}else{let u=function(){clearTimeout(n),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",i,is.passive),c=void 0)},h=function(){u(),s&&s.contentDocument&&(c=s.contentDocument.defaultView,c.addEventListener("resize",i,is.passive),o())};const l=v0();let c;return qs(()=>{qt(()=>{s=a.proxy.$el,s&&h()})}),on(u),()=>{if(l.value===!0)return W("object",{style:Yh.style,tabindex:-1,type:"text/html",data:Yh.url,"aria-hidden":"true",onLoad:h})}}}});function _0(){let t;return on(()=>{t=void 0}),{registerTick(e){t=e,qt(()=>{t===e&&(t(),t=void 0)})},removeTick(){t=void 0}}}function Qh(){let t;return on(()=>{clearTimeout(t)}),{registerTimeout(e,n){clearTimeout(t),t=setTimeout(e,n)},removeTimeout(){clearTimeout(t)}}}let mg=!1;{const t=document.createElement("div"),e=document.createElement("div");t.setAttribute("dir","rtl"),t.style.width="1px",t.style.height="1px",t.style.overflow="auto",e.style.width="1000px",e.style.height="1px",document.body.appendChild(t),t.appendChild(e),t.scrollLeft=-1e3,mg=t.scrollLeft>=0,t.remove()}function b0(t,e,n){const s=n===!0?["left","right"]:["top","bottom"];return`absolute-${e===!0?s[0]:s[1]}${t?` text-${t}`:""}`}const E0=["left","center","right","justify"],Xh=()=>{};var T0=Mn({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:t=>E0.includes(t)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(t,{slots:e,emit:n}){const s=Wt(),{proxy:{$q:r}}=s,{registerTick:i}=_0(),{registerTimeout:o,removeTimeout:a}=Qh(),{registerTimeout:l}=Qh(),c=$e(null),u=$e(null),h=$e(t.modelValue),f=$e(!1),p=$e(!0),m=$e(!1),T=$e(!1),w=z(()=>r.platform.is.desktop===!0||t.mobileArrows===!0),E=[],N=$e(!1);let L=!1,P,Y,$,M=w.value===!0?Gt:Nn;const fe=z(()=>({activeClass:t.activeClass,activeColor:t.activeColor,activeBgColor:t.activeBgColor,indicatorClass:b0(t.indicatorColor,t.switchIndicator,t.vertical),narrowIndicator:t.narrowIndicator,inlineLabel:t.inlineLabel,noCaps:t.noCaps})),ie=z(()=>`q-tabs__content--align-${f.value===!0?"left":T.value===!0?"justify":t.align}`),_e=z(()=>`q-tabs row no-wrap items-center q-tabs--${f.value===!0?"":"not-"}scrollable q-tabs--${t.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${w.value===!0&&t.outsideArrows===!0?"outside":"inside"}`+(t.dense===!0?" q-tabs--dense":"")+(t.shrink===!0?" col-shrink":"")+(t.stretch===!0?" self-stretch":"")),Ae=z(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+ie.value+(t.contentClass!==void 0?` ${t.contentClass}`:"")+(r.platform.is.mobile===!0?" scroll":"")),F=z(()=>t.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ae=z(()=>t.vertical!==!0&&r.lang.rtl===!0),ue=z(()=>mg===!1&&ae.value===!0);xt(ae,M),xt(()=>t.modelValue,y=>{j({name:y,setCurrent:!0,skipEmit:!0})}),xt(()=>t.outsideArrows,()=>{qt(X())}),xt(w,y=>{M=y===!0?Gt:Nn,qt(X())});function j({name:y,setCurrent:b,skipEmit:A,fromRoute:S}){h.value!==y&&(A!==!0&&n("update:modelValue",y),(b===!0||t["onUpdate:modelValue"]===void 0)&&(be(h.value,y),h.value=y)),S!==void 0&&(L=S)}function X(){i(()=>{s.isDeactivated!==!0&&s.isUnmounted!==!0&&de({width:c.value.offsetWidth,height:c.value.offsetHeight})})}function de(y){if(F.value===void 0||u.value===null)return;const b=y[F.value.container],A=Math.min(u.value[F.value.scroll],Array.prototype.reduce.call(u.value.children,(_,U)=>_+(U[F.value.content]||0),0)),S=b>0&&A>b;f.value!==S&&(f.value=S),S===!0&&qt(M);const R=b<parseInt(t.breakpoint,10);T.value!==R&&(T.value=R)}function be(y,b){const A=y!=null&&y!==""?E.find(R=>R.name.value===y):null,S=b!=null&&b!==""?E.find(R=>R.name.value===b):null;if(A&&S){const R=A.tabIndicatorRef.value,_=S.tabIndicatorRef.value;clearTimeout(P),R.style.transition="none",R.style.transform="none",_.style.transition="none",_.style.transform="none";const U=R.getBoundingClientRect(),x=_.getBoundingClientRect();_.style.transform=t.vertical===!0?`translate3d(0,${U.top-x.top}px,0) scale3d(1,${x.height?U.height/x.height:1},1)`:`translate3d(${U.left-x.left}px,0,0) scale3d(${x.width?U.width/x.width:1},1,1)`,qt(()=>{P=setTimeout(()=>{_.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",_.style.transform="none"},70)})}S&&f.value===!0&&Be(S.rootRef.value)}function Be(y){const{left:b,width:A,top:S,height:R}=u.value.getBoundingClientRect(),_=y.getBoundingClientRect();let U=t.vertical===!0?_.top-S:_.left-b;if(U<0){u.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(U),M();return}U+=t.vertical===!0?_.height-R:_.width-A,U>0&&(u.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(U),M())}function Gt(){const y=u.value;if(y!==null){const b=y.getBoundingClientRect(),A=t.vertical===!0?y.scrollTop:Math.abs(y.scrollLeft);ae.value===!0?(p.value=Math.ceil(A+b.width)<y.scrollWidth-1,m.value=A>0):(p.value=A>0,m.value=t.vertical===!0?Math.ceil(A+b.height)<y.scrollHeight:Math.ceil(A+b.width)<y.scrollWidth)}}function bt(y){Et(),D(y),Y=setInterval(()=>{D(y)===!0&&Et()},5)}function gt(){bt(ue.value===!0?Number.MAX_SAFE_INTEGER:0)}function ot(){bt(ue.value===!0?0:Number.MAX_SAFE_INTEGER)}function Et(){clearInterval(Y)}function I(y,b){const A=Array.prototype.filter.call(u.value.children,x=>x===b||x.matches&&x.matches(".q-tab.q-focusable")===!0),S=A.length;if(S===0)return;if(y===36)return Be(A[0]),!0;if(y===35)return Be(A[S-1]),!0;const R=y===(t.vertical===!0?38:37),_=y===(t.vertical===!0?40:39),U=R===!0?-1:_===!0?1:void 0;if(U!==void 0){const x=ae.value===!0?-1:1,V=A.indexOf(b)+U*x;return V>=0&&V<S&&(Be(A[V]),A[V].focus({preventScroll:!0})),!0}}const H=z(()=>ue.value===!0?{get:y=>Math.abs(y.scrollLeft),set:(y,b)=>{y.scrollLeft=-b}}:t.vertical===!0?{get:y=>y.scrollTop,set:(y,b)=>{y.scrollTop=b}}:{get:y=>y.scrollLeft,set:(y,b)=>{y.scrollLeft=b}});function D(y){const b=u.value,{get:A,set:S}=H.value;let R=!1,_=A(b);const U=y<_?-1:1;return _+=U*5,_<0?(R=!0,_=0):(U===-1&&_<=y||U===1&&_>=y)&&(R=!0,_=y),S(b,_),M(),R}function K(){return E.filter(y=>y.routerProps!==void 0&&y.routerProps.hasRouterLink.value===!0)}function Ee(){let y=null,b=L;const A={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:S}=s.proxy.$route,R=h.value;let _=b===!0?Xh:x=>{R===x.name.value&&(b=!0,_=Xh)};const U=K();for(const x of U){const V=x.routerProps.exact.value===!0;if(x.routerProps[V===!0?"linkIsExactActive":"linkIsActive"].value!==!0||A.exact===!0&&V!==!0){_(x);continue}const J=x.routerProps.linkRoute.value,he=J.hash;if(V===!0){if(S===he){y=x.name.value;break}else if(S!==""&&he!==""){_(x);continue}}const Ie=J.matched.length,ve=J.href.length-he.length;if(Ie===A.matchedLen?ve>A.hrefLen:Ie>A.matchedLen){y=x.name.value,Object.assign(A,{matchedLen:Ie,hrefLen:ve,exact:V});continue}_(x)}(b===!0||y!==null)&&j({name:y,setCurrent:!0,fromRoute:!0})}function Te(y){if(a(),N.value!==!0&&c.value!==null&&y.target&&typeof y.target.closest=="function"){const b=y.target.closest(".q-tab");b&&c.value.contains(b)===!0&&(N.value=!0)}}function le(){o(()=>{N.value=!1},30)}function ee(){v.avoidRouteWatcher!==!0&&l(Ee)}function d(y){E.push(y),K().length>0&&($===void 0&&($=xt(()=>s.proxy.$route,ee)),ee())}function g(y){E.splice(E.indexOf(y),1),$!==void 0&&(K().length===0&&($(),$=void 0),ee())}const v={currentModel:h,tabProps:fe,hasFocus:N,registerTab:d,unregisterTab:g,verifyRouteModel:ee,updateModel:j,recalculateScroll:X,onKbdNavigate:I,avoidRouteWatcher:!1};Lr(ng,v),on(()=>{clearTimeout(P),$!==void 0&&$()});let C=!1;return _p(()=>{C=!0}),wp(()=>{C===!0&&X()}),()=>{const y=[W(w0,{onResize:de}),W("div",{ref:u,class:Ae.value,onScroll:M},rg(e.default))];return w.value===!0&&y.push(W(xn,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(p.value===!0?"":" q-tabs__arrow--faded"),name:t.leftIcon||r.iconSet.tabs[t.vertical===!0?"up":"left"],onMousedown:gt,onTouchstartPassive:gt,onMouseup:Et,onMouseleave:Et,onTouchend:Et}),W(xn,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(m.value===!0?"":" q-tabs__arrow--faded"),name:t.rightIcon||r.iconSet.tabs[t.vertical===!0?"down":"right"],onMousedown:ot,onTouchstartPassive:ot,onMouseup:Et,onMouseleave:Et,onTouchend:Et})),W("div",{ref:c,class:_e.value,role:"tablist",onFocusin:Te,onFocusout:le},y)}}});/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ir=t=>yg?Symbol(t):"_vr_"+t,I0=ir("rvlm"),Jh=ir("rvd"),$c=ir("r"),vg=ir("rl"),Ol=ir("rvl"),Rs=typeof window!="undefined";function S0(t){return t.__esModule||yg&&t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Wa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Fr=()=>{},C0=/\/$/,k0=t=>t.replace(C0,"");function Ga(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=x0(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function A0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function R0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hs(e.matched[s],n.matched[r])&&wg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!N0(t[n],e[n]))return!1;return!0}function N0(t,e){return Array.isArray(t)?ef(t,e):Array.isArray(e)?ef(e,t):t===e}function ef(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function x0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var $r;(function(t){t.back="back",t.forward="forward",t.unknown=""})($r||($r={}));function P0(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),k0(t)}const O0=/^[^#]+#/;function D0(t,e){return t.replace(O0,"#")+e}function L0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function M0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=L0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tf(t,e){return(history.state?history.state.position-e:-1)+t}const Dl=new Map;function U0(t,e){Dl.set(t,e)}function F0(t){const e=Dl.get(t);return Dl.delete(t),e}let $0=()=>location.protocol+"//"+location.host;function _g(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Zh(l,"")}return Zh(n,t)+s+r}function B0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=_g(t,location),m=n.value,T=e.value;let w=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}w=T?f.position-T.position:0}else s(p);r.forEach(E=>{E(n.value,m,{delta:w,type:ei.pop,direction:w?w>0?$r.forward:$r.back:$r.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(Se({},f.state,{scroll:aa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function nf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?aa():null}}function V0(t){const{history:e,location:n}=window,s={value:_g(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:$0()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=Se({},e.state,nf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=Se({},r.value,e.state,{forward:l,scroll:aa()});i(u.current,u,!0);const h=Se({},nf(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function q0(t){t=P0(t);const e=V0(t),n=B0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Se({location:"",base:t,go:s,createHref:D0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function j0(t){return typeof t=="string"||t&&typeof t=="object"}function bg(t){return typeof t=="string"||typeof t=="symbol"}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Eg=ir("nf");var sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sf||(sf={}));function zs(t,e){return Se(new Error,{type:t,[Eg]:!0},e)}function dn(t,e){return t instanceof Error&&Eg in t&&(e==null||!!(t.type&e))}const rf="[^/]+?",H0={sensitive:!1,strict:!1,start:!0,end:!0},z0=/[.+*?^${}()[\]/\\]/g;function K0(t,e){const n=Se({},H0,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(z0,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:T,optional:w,regexp:E}=f;i.push({name:m,repeatable:T,optional:w});const N=E||rf;if(N!==rf){p+=10;try{new RegExp(`(${N})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+P.message)}}let L=T?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(L=w&&c.length<2?`(?:/${L})`:"/"+L),w&&(L+="?"),r+=L,p+=20,w&&(p+=-8),T&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:T,optional:w}=p,E=m in c?c[m]:"";if(Array.isArray(E)&&!T)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=Array.isArray(E)?E.join("/"):E;if(!N)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function W0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function G0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=W0(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Y0={type:0,value:""},Q0=/[a-zA-Z0-9_]/;function X0(t){if(!t)return[[]];if(t==="/")return[[Y0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:Q0.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function J0(t,e,n){const s=K0(X0(t.path),n),r=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Z0(t,e){const n=[],s=new Map;e=af({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const p=!f,m=tE(u);m.aliasOf=f&&f.record;const T=af(e,u),w=[m];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of L)w.push(Se({},m,{components:f?f.record.components:m.components,path:P,aliasOf:f?f.record:m}))}let E,N;for(const L of w){const{path:P}=L;if(h&&P[0]!=="/"){const Y=h.record.path,$=Y[Y.length-1]==="/"?"":"/";L.path=h.record.path+(P&&$+P)}if(E=J0(L,h,T),f?f.alias.push(E):(N=N||E,N!==E&&N.alias.push(E),p&&u.name&&!of(E)&&o(u.name)),"children"in m){const Y=m.children;for(let $=0;$<Y.length;$++)i(Y[$],E,f&&f.children[$])}f=f||E,l(E)}return N?()=>{o(N)}:Fr}function o(u){if(bg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&G0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Tg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!of(u)&&s.set(u.record.name,u)}function c(u,h){let f,p={},m,T;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw zs(1,{location:u});T=f.record.name,p=Se(eE(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(N=>N.re.test(m)),f&&(p=f.parse(m),T=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw zs(1,{location:u,currentLocation:h});T=f.record.name,p=Se({},h.params,u.params),m=f.stringify(p)}const w=[];let E=f;for(;E;)w.unshift(E.record),E=E.parent;return{name:T,path:m,params:p,matched:w,meta:sE(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function eE(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function tE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:nE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function nE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sE(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function af(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Tg(t,e){return e.children.some(n=>n===t||Tg(t,n))}const Ig=/#/g,rE=/&/g,iE=/\//g,oE=/=/g,aE=/\?/g,Sg=/\+/g,lE=/%5B/g,cE=/%5D/g,Cg=/%5E/g,uE=/%60/g,kg=/%7B/g,hE=/%7C/g,Ag=/%7D/g,fE=/%20/g;function Bc(t){return encodeURI(""+t).replace(hE,"|").replace(lE,"[").replace(cE,"]")}function dE(t){return Bc(t).replace(kg,"{").replace(Ag,"}").replace(Cg,"^")}function Ll(t){return Bc(t).replace(Sg,"%2B").replace(fE,"+").replace(Ig,"%23").replace(rE,"%26").replace(uE,"`").replace(kg,"{").replace(Ag,"}").replace(Cg,"^")}function pE(t){return Ll(t).replace(oE,"%3D")}function gE(t){return Bc(t).replace(Ig,"%23").replace(aE,"%3F")}function mE(t){return t==null?"":gE(t).replace(iE,"%2F")}function Eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Sg," "),o=i.indexOf("="),a=Eo(o<0?i:i.slice(0,o)),l=o<0?null:Eo(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function lf(t){let e="";for(let n in t){const s=t[n];if(n=pE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Ll(i)):[s&&Ll(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function vE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function br(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function vn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(zs(4,{from:n,to:e})):h instanceof Error?a(h):j0(h)?a(zs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ya(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(wE(a)){const c=(a.__vccOpts||a)[e];c&&r.push(vn(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=S0(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&vn(f,n,s,i,o)()}))}}return r}function wE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cf(t){const e=jt($c),n=jt(vg),s=z(()=>e.resolve(tn(t.to))),r=z(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Hs.bind(null,u));if(f>-1)return f;const p=uf(l[c-2]);return c>1&&uf(u)===p&&h[h.length-1].path!==p?h.findIndex(Hs.bind(null,l[c-2])):f}),i=z(()=>r.value>-1&&TE(n.params,s.value.params)),o=z(()=>r.value>-1&&r.value===n.matched.length-1&&wg(n.params,s.value.params));function a(l={}){return EE(l)?e[tn(t.replace)?"replace":"push"](tn(t.to)).catch(Fr):Promise.resolve()}return{route:s,href:z(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const _E=Ac({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cf,setup(t,{slots:e}){const n=Ln(cf(t)),{options:s}=jt($c),r=z(()=>({[hf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:W("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),bE=_E;function EE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TE(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function uf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hf=(t,e,n)=>t!=null?t:e!=null?e:n,IE=Ac({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=jt(Ol),r=z(()=>t.route||s.value),i=jt(Jh,0),o=z(()=>r.value.matched[i]);Lr(Jh,i+1),Lr(I0,o),Lr(Ol,r);const a=$e();return xt(()=>[a.value,o.value,t.name],([l,c,u],[h,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===h&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Hs(c,f)||!h)&&(c.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],h=t.name;if(!u)return ff(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,T=W(u,Se({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(c.instances[h]=null)},ref:a}));return ff(n.default,{Component:T,route:l})||T}}});function ff(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vc=IE;function SE(t){const e=Z0(t.routes,t),n=t.parseQuery||yE,s=t.stringifyQuery||lf,r=t.history,i=br(),o=br(),a=br(),l=fw(fn);let c=fn;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wa.bind(null,I=>""+I),h=Wa.bind(null,mE),f=Wa.bind(null,Eo);function p(I,H){let D,K;return bg(I)?(D=e.getRecordMatcher(I),K=H):K=I,e.addRoute(K,D)}function m(I){const H=e.getRecordMatcher(I);H&&e.removeRoute(H)}function T(){return e.getRoutes().map(I=>I.record)}function w(I){return!!e.getRecordMatcher(I)}function E(I,H){if(H=Se({},H||l.value),typeof I=="string"){const ee=Ga(n,I,H.path),d=e.resolve({path:ee.path},H),g=r.createHref(ee.fullPath);return Se(ee,d,{params:f(d.params),hash:Eo(ee.hash),redirectedFrom:void 0,href:g})}let D;if("path"in I)D=Se({},I,{path:Ga(n,I.path,H.path).path});else{const ee=Se({},I.params);for(const d in ee)ee[d]==null&&delete ee[d];D=Se({},I,{params:h(I.params)}),H.params=h(H.params)}const K=e.resolve(D,H),Ee=I.hash||"";K.params=u(f(K.params));const Te=A0(s,Se({},I,{hash:dE(Ee),path:K.path})),le=r.createHref(Te);return Se({fullPath:Te,hash:Ee,query:s===lf?vE(I.query):I.query||{}},K,{redirectedFrom:void 0,href:le})}function N(I){return typeof I=="string"?Ga(n,I,l.value.path):Se({},I)}function L(I,H){if(c!==I)return zs(8,{from:H,to:I})}function P(I){return M(I)}function Y(I){return P(Se(N(I),{replace:!0}))}function $(I){const H=I.matched[I.matched.length-1];if(H&&H.redirect){const{redirect:D}=H;let K=typeof D=="function"?D(I):D;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=N(K):{path:K},K.params={}),Se({query:I.query,hash:I.hash,params:I.params},K)}}function M(I,H){const D=c=E(I),K=l.value,Ee=I.state,Te=I.force,le=I.replace===!0,ee=$(D);if(ee)return M(Se(N(ee),{state:Ee,force:Te,replace:le}),H||D);const d=D;d.redirectedFrom=H;let g;return!Te&&R0(s,K,D)&&(g=zs(16,{to:d,from:K}),Gt(K,K,!0,!1)),(g?Promise.resolve(g):ie(d,K)).catch(v=>dn(v)?dn(v,2)?v:Be(v):de(v,d,K)).then(v=>{if(v){if(dn(v,2))return M(Se(N(v.to),{state:Ee,force:Te,replace:le}),H||d)}else v=Ae(d,K,!0,le,Ee);return _e(d,K,v),v})}function fe(I,H){const D=L(I,H);return D?Promise.reject(D):Promise.resolve()}function ie(I,H){let D;const[K,Ee,Te]=CE(I,H);D=Ya(K.reverse(),"beforeRouteLeave",I,H);for(const ee of K)ee.leaveGuards.forEach(d=>{D.push(vn(d,I,H))});const le=fe.bind(null,I,H);return D.push(le),Is(D).then(()=>{D=[];for(const ee of i.list())D.push(vn(ee,I,H));return D.push(le),Is(D)}).then(()=>{D=Ya(Ee,"beforeRouteUpdate",I,H);for(const ee of Ee)ee.updateGuards.forEach(d=>{D.push(vn(d,I,H))});return D.push(le),Is(D)}).then(()=>{D=[];for(const ee of I.matched)if(ee.beforeEnter&&!H.matched.includes(ee))if(Array.isArray(ee.beforeEnter))for(const d of ee.beforeEnter)D.push(vn(d,I,H));else D.push(vn(ee.beforeEnter,I,H));return D.push(le),Is(D)}).then(()=>(I.matched.forEach(ee=>ee.enterCallbacks={}),D=Ya(Te,"beforeRouteEnter",I,H),D.push(le),Is(D))).then(()=>{D=[];for(const ee of o.list())D.push(vn(ee,I,H));return D.push(le),Is(D)}).catch(ee=>dn(ee,8)?ee:Promise.reject(ee))}function _e(I,H,D){for(const K of a.list())K(I,H,D)}function Ae(I,H,D,K,Ee){const Te=L(I,H);if(Te)return Te;const le=H===fn,ee=Rs?history.state:{};D&&(K||le?r.replace(I.fullPath,Se({scroll:le&&ee&&ee.scroll},Ee)):r.push(I.fullPath,Ee)),l.value=I,Gt(I,H,D,le),Be()}let F;function ae(){F=r.listen((I,H,D)=>{const K=E(I),Ee=$(K);if(Ee){M(Se(Ee,{replace:!0}),K).catch(Fr);return}c=K;const Te=l.value;Rs&&U0(tf(Te.fullPath,D.delta),aa()),ie(K,Te).catch(le=>dn(le,12)?le:dn(le,2)?(M(le.to,K).then(ee=>{dn(ee,20)&&!D.delta&&D.type===ei.pop&&r.go(-1,!1)}).catch(Fr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),de(le,K,Te))).then(le=>{le=le||Ae(K,Te,!1),le&&(D.delta?r.go(-D.delta,!1):D.type===ei.pop&&dn(le,20)&&r.go(-1,!1)),_e(K,Te,le)}).catch(Fr)})}let ue=br(),j=br(),X;function de(I,H,D){Be(I);const K=j.list();return K.length?K.forEach(Ee=>Ee(I,H,D)):console.error(I),Promise.reject(I)}function be(){return X&&l.value!==fn?Promise.resolve():new Promise((I,H)=>{ue.add([I,H])})}function Be(I){return X||(X=!I,ae(),ue.list().forEach(([H,D])=>I?D(I):H()),ue.reset()),I}function Gt(I,H,D,K){const{scrollBehavior:Ee}=t;if(!Rs||!Ee)return Promise.resolve();const Te=!D&&F0(tf(I.fullPath,0))||(K||!D)&&history.state&&history.state.scroll||null;return qt().then(()=>Ee(I,H,Te)).then(le=>le&&M0(le)).catch(le=>de(le,I,H))}const bt=I=>r.go(I);let gt;const ot=new Set;return{currentRoute:l,addRoute:p,removeRoute:m,hasRoute:w,getRoutes:T,resolve:E,options:t,push:P,replace:Y,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:be,install(I){const H=this;I.component("RouterLink",bE),I.component("RouterView",Vc),I.config.globalProperties.$router=H,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>tn(l)}),Rs&&!gt&&l.value===fn&&(gt=!0,P(r.location).catch(Ee=>{}));const D={};for(const Ee in fn)D[Ee]=z(()=>l.value[Ee]);I.provide($c,H),I.provide(vg,Ln(D)),I.provide(Ol,l);const K=I.unmount;ot.add(I),I.unmount=function(){ot.delete(I),ot.size<1&&(c=fn,F&&F(),l.value=fn,gt=!1,X=!1),K()}}}}function Is(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function CE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Hs(c,l))||r.push(l))}return[n,s,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},kE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},AE=function(t){const e=Rg(t);return Ng.encodeByteArray(e,!0)},To=function(t){return AE(t).replace(/\./g,"")},RE=function(t){try{return Ng.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[To(JSON.stringify(n)),To(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Pg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PE(){return ze().indexOf("Electron/")>=0}function Dg(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OE(){return ze().indexOf("MSAppHost/")>=0}function DE(){return typeof indexedDB=="object"}function LE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="FirebaseError";class ms extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ME,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?UE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ms(r,a,s)}}function UE(t,e){return t.replace(FE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const FE=/\{\$([^}]+)}/g;function $E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Io(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(df(i)&&df(o)){if(!Io(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function df(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function kr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BE(t,e){const n=new VE(t,e);return n.subscribe.bind(n)}class VE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Qa),r.error===void 0&&(r.error=Qa),r.complete===void 0&&(r.complete=Qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){return new Promise((n,s)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class pf{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Lg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Mg(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Lg{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Mg(this._transaction.objectStore(e))}}class Mg{constructor(e){this._store=e}index(e){return new gf(this._store.index(e))}createIndex(e,n,s){return new gf(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return Ar(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return Ar(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Ar(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Ar(e,"Error clearing IndexedDB object store")}}class gf{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Ar(n,"Error reading from IndexedDB")}}function jE(t,e,n){return new Promise((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{s(new pf(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new pf(i.result),o.oldVersion,o.newVersion,new Lg(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new NE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KE(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(t){return t===zn?void 0:t}function KE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const GE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},YE=ye.INFO,QE={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},XE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=QE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qc{constructor(e){this.name=e,this._logLevel=YE,this._logHandler=XE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ZE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ml="@firebase/app",mf="0.7.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new qc("@firebase/app"),eT="@firebase/app-compat",tT="@firebase/analytics-compat",nT="@firebase/analytics",sT="@firebase/app-check-compat",rT="@firebase/app-check",iT="@firebase/auth",oT="@firebase/auth-compat",aT="@firebase/database",lT="@firebase/database-compat",cT="@firebase/functions",uT="@firebase/functions-compat",hT="@firebase/installations",fT="@firebase/installations-compat",dT="@firebase/messaging",pT="@firebase/messaging-compat",gT="@firebase/performance",mT="@firebase/performance-compat",yT="@firebase/remote-config",vT="@firebase/remote-config-compat",wT="@firebase/storage",_T="@firebase/storage-compat",bT="@firebase/firestore",ET="@firebase/firestore-compat",TT="firebase",IT="9.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="[DEFAULT]",ST={[Ml]:"fire-core",[eT]:"fire-core-compat",[nT]:"fire-analytics",[tT]:"fire-analytics-compat",[rT]:"fire-app-check",[sT]:"fire-app-check-compat",[iT]:"fire-auth",[oT]:"fire-auth-compat",[aT]:"fire-rtdb",[lT]:"fire-rtdb-compat",[cT]:"fire-fn",[uT]:"fire-fn-compat",[hT]:"fire-iid",[fT]:"fire-iid-compat",[dT]:"fire-fcm",[pT]:"fire-fcm-compat",[gT]:"fire-perf",[mT]:"fire-perf-compat",[yT]:"fire-rc",[vT]:"fire-rc-compat",[wT]:"fire-gcs",[_T]:"fire-gcs-compat",[bT]:"fire-fst",[ET]:"fire-fst-compat","fire-js":"fire-js",[TT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Map,Ul=new Map;function CT(t,e){try{t.container.addComponent(e)}catch(n){jc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(Ul.has(e))return jc.debug(`There were multiple attempts to register component ${e}.`),!1;Ul.set(e,t);for(const n of ti.values())CT(n,t);return!0}function Hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},as=new yi("app","Firebase",kT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=IT;function RT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ug,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw as.create("bad-app-name",{appName:String(s)});const r=ti.get(s);if(r){if(Io(t,r.options)&&Io(n,r.config))return r;throw as.create("duplicate-app",{appName:s})}const i=new WE(s);for(const a of Ul.values())i.addComponent(a);const o=new AT(t,n,i);return ti.set(s,o),o}function Fg(t=Ug){const e=ti.get(t);if(!e)throw as.create("no-app",{appName:t});return e}function NT(){return Array.from(ti.values())}function Cn(t,e,n){var s;let r=(s=ST[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jc.warn(a.join(" "));return}Ks(new os(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="firebase-heartbeat-database",PT=1,ni="firebase-heartbeat-store";let Xa=null;function $g(){return Xa||(Xa=jE(xT,PT,(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}).catch(t=>{throw as.create("storage-open",{originalErrorMessage:t.message})})),Xa}async function OT(t){try{return(await $g()).transaction(ni).objectStore(ni).get(Bg(t))}catch(e){throw as.create("storage-get",{originalErrorMessage:e.message})}}async function yf(t,e){try{const s=(await $g()).transaction(ni,"readwrite");return await s.objectStore(ni).put(e,Bg(t)),s.complete}catch(n){throw as.create("storage-set",{originalErrorMessage:n.message})}}function Bg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1024,LT=30*24*60*60*1e3;class MT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=LT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vf(),{heartbeatsToSend:n,unsentEntries:s}=UT(this._heartbeatsCache.heartbeats),r=To(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vf(){return new Date().toISOString().substring(0,10)}function UT(t,e=DT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),wf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),wf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class FT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DE()?LE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wf(t){return To(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){Ks(new os("platform-logger",e=>new JE(e),"PRIVATE")),Ks(new os("heartbeat",e=>new MT(e),"PRIVATE")),Cn(Ml,mf,t),Cn(Ml,mf,"esm2017"),Cn("fire-js","")}$T("");function zc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Vg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BT=Vg,qg=new yi("auth","Firebase",Vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new qc("@firebase/auth");function so(t,...e){_f.logLevel<=ye.ERROR&&_f.error(`Auth (${wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw Kc(t,...e)}function Ht(t,...e){return Kc(t,...e)}function jg(t,e,n){const s=Object.assign(Object.assign({},BT()),{[e]:n});return new yi("auth","Firebase",s).create(e,{appName:t.name})}function VT(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&kt(t,"argument-error"),jg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return qg.create(t,...e)}function Z(t,e,...n){if(!t)throw Kc(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function an(t,e){t||Jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Map;function Zt(t){an(t instanceof Function,"Expected a class definition");let e=bf.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e){const n=Hc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Io(i,e!=null?e:{}))return r;kt(r,"already-initialized")}return n.initialize({options:e})}function jT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HT(){return Ef()==="http:"||Ef()==="https:"}function Ef(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HT()||Pg()||"connection"in navigator)?navigator.onLine:!0}function KT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=xg()||Og()}get(){return zT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new _i(3e4,6e4);function bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,s,r={}){return zg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Hg.fetch()(Kg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function zg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},WT),e);try{const r=new YT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jg(t,u,c);kt(t,u)}}catch(r){if(r instanceof ms)throw r;kt(t,"network-request-failed")}}async function Ti(t,e,n,s,r={}){const i=await Ei(t,e,n,s,r);return"mfaPendingCredential"in i&&kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Kg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Wc(t.config,r):`${t.config.apiScheme}://${r}`}class YT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),GT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ja(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ht(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function XT(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JT(t,e=!1){const n=pt(t),s=await n.getIdToken(e),r=Gc(s);Z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Br(Za(r.auth_time)),issuedAtTime:Br(Za(r.iat)),expirationTime:Br(Za(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Za(t){return Number(t)*1e3}function Gc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const r=RE(n);return r?JSON.parse(r):(so("Failed to decode base64 JWT payload"),null)}catch(r){return so("Caught error parsing JWT payload as JSON",r),null}}function ZT(t){const e=Gc(t);return Z(e,"internal-error"),Z(typeof e.exp!="undefined","internal-error"),Z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ms&&eI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function eI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){var e;const n=t.auth,s=await t.getIdToken(),r=await si(t,XT(n,{idToken:s}));Z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rI(i.providerUserInfo):[],a=sI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function nI(t){const e=pt(t);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function rI(t){return t.map(e=>{var{providerId:n}=e,s=zc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e){const n=await zg(t,{},async()=>{const s=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Kg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken!="undefined","internal-error"),Z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ZT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await iI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ri;return s&&(Z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){Z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ts{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=zc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JT(this,e)}reload(){return nI(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await si(this,QT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:P,isAnonymous:Y,providerData:$,stsTokenManager:M}=n;Z(L&&M,e,"internal-error");const fe=ri.fromJSON(this.name,M);Z(typeof L=="string",e,"internal-error"),pn(h,e.name),pn(f,e.name),Z(typeof P=="boolean",e,"internal-error"),Z(typeof Y=="boolean",e,"internal-error"),pn(p,e.name),pn(m,e.name),pn(T,e.name),pn(w,e.name),pn(E,e.name),pn(N,e.name);const ie=new ts({uid:L,auth:e,email:f,emailVerified:P,displayName:h,isAnonymous:Y,photoURL:m,phoneNumber:p,tenantId:T,stsTokenManager:fe,createdAt:E,lastLoginAt:N});return $&&Array.isArray($)&&(ie.providerData=$.map(_e=>Object.assign({},_e))),w&&(ie._redirectEventId=w),ie}static async _fromIdTokenResponse(e,n,s=!1){const r=new ri;r.updateFromServerResponse(n);const i=new ts({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await So(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gg.type="NONE";const Tf=Gg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ro(this.userKey,r.apiKey,i),this.fullPersistenceKey=ro("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ls(Zt(Tf),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Zt(Tf);const o=ro(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ts._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ls(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ls(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zg(e))return"Blackberry";if(em(e))return"Webos";if(Yc(e))return"Safari";if((e.includes("chrome/")||Qg(e))&&!e.includes("edge/"))return"Chrome";if(Jg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yg(t=ze()){return/firefox\//i.test(t)}function Yc(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qg(t=ze()){return/crios\//i.test(t)}function Xg(t=ze()){return/iemobile/i.test(t)}function Jg(t=ze()){return/android/i.test(t)}function Zg(t=ze()){return/blackberry/i.test(t)}function em(t=ze()){return/webos/i.test(t)}function la(t=ze()){return/iphone|ipad|ipod/i.test(t)}function oI(t=ze()){var e;return la(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aI(){return Dg()&&document.documentMode===10}function tm(t=ze()){return la(t)||Jg(t)||em(t)||Zg(t)||/windows phone/i.test(t)||Xg(t)}function lI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e=[]){let n;switch(t){case"Browser":n=If(ze());break;case"Worker":n=`${If(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sf(this),this.idTokenSubscription=new Sf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function or(t){return pt(t)}class Sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=BE(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function uI(t,e,n){const s=or(t);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=sm(e),{host:o,port:a}=hI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||fI()}function sm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hI(t){const e=sm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Cf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Cf(o)}}}function Cf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function dI(t,e){return Ei(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){return Ti(t,"POST","/v1/accounts:signInWithPassword",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}async function mI(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Qc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ii(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ii(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return pI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gI(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mI(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return Ti(t,"POST","/v1/accounts:signInWithIdp",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="http://localhost";class ls extends Qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=zc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ls(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:yI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wI(t){const e=Cr(kr(t)).link,n=e?Cr(kr(e)).deep_link_id:null,s=Cr(kr(t)).deep_link_id;return(s?Cr(kr(s)).link:null)||s||n||e||t}class Xc{constructor(e){var n,s,r,i,o,a;const l=Cr(kr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=vI((r=l.mode)!==null&&r!==void 0?r:null);Z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wI(e);try{return new Xc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(e,n){return ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xc.parseLink(n);return Z(s,"argument-error"),ii._fromEmailAndCode(e,s.code,s.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Jc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ii{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return _n.credential(n,s)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ii{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ii{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return En.credential(n,s)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e){return Ti(t,"POST","/v1/accounts:signUp",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ts._fromIdTokenResponse(e,s,r),o=kf(s);return new cs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=kf(s);return new cs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends ms{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Co(e,n,s,r)}}function rm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(t,i,e,s):i})}async function bI(t,e,n=!1){const s=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await si(t,rm(s,r,e,t),n);Z(i.idToken,s,"internal-error");const o=Gc(i.idToken);Z(o,s,"internal-error");const{sub:a}=o;return Z(t.uid===a,s,"user-mismatch"),cs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(t,e,n=!1){const s="signIn",r=await rm(t,s,e),i=await cs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function TI(t,e){return im(or(t),e)}async function cN(t,e,n){const s=or(t),r=await _I(s,{returnSecureToken:!0,email:e,password:n}),i=await cs._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function uN(t,e,n){return TI(pt(t),ar.credential(e,n))}function II(t,e,n,s){return pt(t).onAuthStateChanged(e,n,s)}function SI(t){return pt(t).signOut()}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){const t=ze();return Yc(t)||la(t)}const kI=1e3,AI=10;class am extends om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CI()&&lI(),this.fallbackToPolling=tm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);aI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,AI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},kI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}am.type="LOCAL";const RI=am;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lm.type="SESSION";const cm=lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ca(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await NI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Zc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function PI(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){return typeof zt().WorkerGlobalScope!="undefined"&&typeof zt().importScripts=="function"}async function OI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LI(){return um()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firebaseLocalStorageDb",MI=1,Ao="firebaseLocalStorage",fm="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function UI(){const t=indexedDB.deleteDatabase(hm);return new Si(t).toPromise()}function $l(){const t=indexedDB.open(hm,MI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ao,{keyPath:fm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ao)?e(s):(s.close(),await UI(),e(await $l()))})})}async function Af(t,e,n){const s=ua(t,!0).put({[fm]:e,value:n});return new Si(s).toPromise()}async function FI(t,e){const n=ua(t,!1).get(e),s=await new Si(n).toPromise();return s===void 0?null:s.value}function Rf(t,e){const n=ua(t,!0).delete(e);return new Si(n).toPromise()}const $I=800,BI=3;class dm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>BI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(LI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OI(),!this.activeServiceWorker)return;this.sender=new xI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $l();return await Af(e,ko,"1"),await Rf(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Af(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>FI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ua(r,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dm.type="LOCAL";const VI=dm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ht("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",qI().appendChild(s)})}function HI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new _i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){return e?Zt(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Qc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zI(t){return im(t.auth,new eu(t),t.bypassAuthState)}function KI(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),EI(n,new eu(t),t.bypassAuthState)}async function WI(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),bI(n,new eu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zI;case"linkViaPopup":case"linkViaRedirect":return WI;case"reauthViaPopup":case"reauthViaRedirect":return KI;default:kt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new _i(2e3,1e4);async function hN(t,e,n){const s=or(t);VT(t,e,Jc);const r=pm(s,n);return new Yn(s,"signInViaPopup",e,r).executeNotNull()}class Yn extends gm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,GI.get())};e()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="pendingRedirect",el=new Map;class QI extends gm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const s=await XI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XI(t,e){const n=ZI(e),s=JI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function JI(t){return Zt(t._redirectPersistence)}function ZI(t){return ro(YI,t.config.apiKey,t.name)}async function eS(t,e,n=!1){const s=or(t),r=pm(s,e),o=await new QI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=10*60*1e3;class nS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!mm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nf(e))}saveEventToCache(e){this.cachedEventUids.add(Nf(e)),this.lastProcessedEventTime=Date.now()}}function Nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oS=/^https?/;async function aS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rS(t);for(const n of e)try{if(lS(n))return}catch{}kt(t,"unauthorized-domain")}function lS(t){const e=Fl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!oS.test(n))return!1;if(iS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new _i(3e4,6e4);function xf(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uS(t){return new Promise((e,n)=>{var s,r,i;function o(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),n(Ht(t,"network-request-failed"))},timeout:cS.get()})}if(!((r=(s=zt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=HI("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},jI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw io=null,e})}let io=null;function hS(t){return io=io||uS(t),io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=new _i(5e3,15e3),dS="__/auth/iframe",pS="emulator/auth/iframe",gS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yS(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wc(e,pS):`https://${t.config.authDomain}/${dS}`,s={apiKey:e.apiKey,appName:t.name,v:wi},r=mS.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${vi(s).slice(1)}`}async function vS(t){const e=await hS(t),n=zt().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:yS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gS,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},fS.get());function l(){zt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_S=500,bS=600,ES="_blank",TS="http://localhost";class Pf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IS(t,e,n,s=_S,r=bS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wS),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ze().toLowerCase();n&&(a=Qg(c)?ES:n),Yg(c)&&(e=e||TS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(oI(c)&&a!=="_self")return SS(e||"",a),new Pf(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Pf(h)}function SS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="__/auth/handler",kS="emulator/auth/handler";function Of(t,e,n,s,r,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:wi,eventId:r};if(e instanceof Jc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$E(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Ii){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${AS(t)}?${vi(a).slice(1)}`}function AS({config:t}){return t.emulator?Wc(t,kS):`https://${t.authDomain}/${CS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class RS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cm,this._completeRedirectFn=eS}async _openPopup(e,n,s,r){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Of(e,n,s,Fl(),r);return IS(e,o,Zc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),PI(Of(e,n,s,Fl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(an(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vS(e),s=new nS(e);return n.register("authEvent",r=>(Z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tl,{type:tl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[tl];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tm()||Yc()||la()}}const NS=RS;var Df="@firebase/auth",Lf="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OS(t){Ks(new os("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{Z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),Z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nm(t)},u=new cI(a,l,c);return jT(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ks(new os("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(s=>new xS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(Df,Lf,PS(t)),Cn(Df,Lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t=Fg()){const e=Hc(t,"auth");return e.isInitialized()?e.getImmediate():qT(t,{popupRedirectResolver:NS,persistence:[VI,RI,cm]})}OS("Browser");const ym=rb({id:"app",state:()=>({loggedInUser:null}),getters:{isLoggedIn(){return this.loggedInUser!==null}},actions:{setUser(t){this.loggedInUser=t}}}),LS="modulepreload",Mf={},MS="/",Wi=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${MS}${s}`,s in Mf)return;Mf[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":LS,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},US={setup(t){const e=ym();return(n,s)=>tn(e).isLoggedIn?(mo(),Pc(tn(Vc),{key:0})):Lp("",!0)}},Rr=SE({history:q0("/"),routes:[{path:"/login",name:"login",component:()=>Wi(()=>import("./Login.ebc59663.js"),["assets/Login.ebc59663.js","assets/use-quasar.21eab2cc.js"]),meta:{public:!0,onlyNotLoggedIn:!0}},{path:"/register",name:"register",component:()=>Wi(()=>import("./Register.573686c3.js"),["assets/Register.573686c3.js","assets/use-quasar.21eab2cc.js"]),meta:{public:!0,onlyNotLoggedIn:!0}},{path:"/",name:"mainLayout",component:US,children:[{path:"/",name:"home",component:()=>Wi(()=>import("./HomeView.3367785d.js"),[])},{path:"/blogs",name:"blogs",component:()=>Wi(()=>import("./BlogsView.8f6902c3.js"),["assets/BlogsView.8f6902c3.js","assets/use-quasar.21eab2cc.js"])}]}]});var FS="firebase",$S="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(FS,$S,"app");var BS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B,tu=tu||{},te=BS||self;function Ro(){}function Bl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VS(t){return Object.prototype.hasOwnProperty.call(t,nl)&&t[nl]||(t[nl]=++qS)}var nl="closure_uid_"+(1e9*Math.random()>>>0),qS=0;function jS(t,e,n){return t.call.apply(t.bind,arguments)}function HS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=jS:Qe=HS,Qe.apply(null,arguments)}function Gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function et(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Un(){this.s=this.s,this.o=this.o}var zS=0,KS={};Un.prototype.s=!1;Un.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),zS!=0)){var t=VS(this);delete KS[t]}};Un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},wm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function WS(t){e:{var e=FC;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Uf(t){return Array.prototype.concat.apply([],arguments)}function nu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function No(t){return/^[\s\xa0]*$/.test(t)}var Ff=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lt(t,e){return t.indexOf(e)!=-1}function sl(t,e){return t<e?-1:t>e?1:0}var ct;e:{var $f=te.navigator;if($f){var Bf=$f.userAgent;if(Bf){ct=Bf;break e}}ct=""}function su(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function _m(t){const e={};for(const n in t)e[n]=t[n];return e}var Vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Vf.length;i++)n=Vf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ru(t){return ru[" "](t),t}ru[" "]=Ro;function GS(t){var e=XS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var YS=lt(ct,"Opera"),Ws=lt(ct,"Trident")||lt(ct,"MSIE"),Em=lt(ct,"Edge"),Vl=Em||Ws,Tm=lt(ct,"Gecko")&&!(lt(ct.toLowerCase(),"webkit")&&!lt(ct,"Edge"))&&!(lt(ct,"Trident")||lt(ct,"MSIE"))&&!lt(ct,"Edge"),QS=lt(ct.toLowerCase(),"webkit")&&!lt(ct,"Edge");function Im(){var t=te.document;return t?t.documentMode:void 0}var xo;e:{var rl="",il=function(){var t=ct;if(Tm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Em)return/Edge\/([\d\.]+)/.exec(t);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QS)return/WebKit\/(\S+)/.exec(t);if(YS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(il&&(rl=il?il[1]:""),Ws){var ol=Im();if(ol!=null&&ol>parseFloat(rl)){xo=String(ol);break e}}xo=rl}var XS={};function JS(){return GS(function(){let t=0;const e=Ff(String(xo)).split("."),n=Ff("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=sl(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||sl(r[2].length==0,i[2].length==0)||sl(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ql;if(te.document&&Ws){var qf=Im();ql=qf||parseInt(xo,10)||void 0}else ql=void 0;var ZS=ql,eC=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",Ro,e),te.removeEventListener("test",Ro,e)}catch{}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};function oi(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tm){e:{try{ru(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:tC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oi.Z.h.call(this)}}et(oi,rt);var tC={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),nC=0;function sC(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++nC,this.ca=this.fa=!1}function ha(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function fa(t){this.src=t,this.g={},this.h=0}fa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Hl(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new sC(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function jl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=vm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ha(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var iu="closure_lm_"+(1e6*Math.random()|0),al={};function Sm(t,e,n,s,r){if(s&&s.once)return km(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sm(t,e[i],n,s,r);return null}return n=lu(n),t&&t[ki]?t.N(e,n,Ci(s)?!!s.capture:!!s,r):Cm(t,e,n,!1,s,r)}function Cm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ci(r)?!!r.capture:!!r,a=au(t);if(a||(t[iu]=a=new fa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=rC(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)eC||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Rm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rC(){function t(n){return e.call(t.src,t.listener,n)}var e=iC;return t}function km(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)km(t,e[i],n,s,r);return null}return n=lu(n),t&&t[ki]?t.O(e,n,Ci(s)?!!s.capture:!!s,r):Cm(t,e,n,!0,s,r)}function Am(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Am(t,e[i],n,s,r);else s=Ci(s)?!!s.capture:!!s,n=lu(n),t&&t[ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Hl(i,n,s,r),-1<n&&(ha(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=au(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hl(e,n,s,r)),(n=-1<t?e[t]:null)&&ou(n))}function ou(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ki])jl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Rm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=au(e))?(jl(n,t),n.h==0&&(n.src=null,e[iu]=null)):ha(t)}}}function Rm(t){return t in al?al[t]:al[t]="on"+t}function iC(t,e){if(t.ca)t=!0;else{e=new oi(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ou(t),t=n.call(s,e)}return t}function au(t){return t=t[iu],t instanceof fa?t:null}var ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function lu(t){return typeof t=="function"?t:(t[ll]||(t[ll]=function(e){return t.handleEvent(e)}),t[ll])}function Ke(){Un.call(this),this.i=new fa(this),this.P=this,this.I=null}et(Ke,Un);Ke.prototype[ki]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){Am(this,t,e,n,s)};function Xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var r=e;e=new rt(s,t),bm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Yi(o,s,!0,e)&&r}if(o=e.g=t,r=Yi(o,s,!0,e)&&r,r=Yi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Yi(o,s,!1,e)&&r}Ke.prototype.M=function(){if(Ke.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ha(n[s]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Yi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&jl(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var cu=te.JSON.stringify;function oC(){var t=xm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aC{constructor(){this.h=this.g=null}add(e,n){const s=Nm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Nm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lC,t=>t.reset());class lC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cC(t){te.setTimeout(()=>{throw t},0)}function uu(t,e){zl||uC(),Kl||(zl(),Kl=!0),xm.add(t,e)}var zl;function uC(){var t=te.Promise.resolve(void 0);zl=function(){t.then(hC)}}var Kl=!1,xm=new aC;function hC(){for(var t;t=oC();){try{t.h.call(t.g)}catch(n){cC(n)}var e=Nm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kl=!1}function da(t,e){Ke.call(this),this.h=t||1,this.g=e||te,this.j=Qe(this.kb,this),this.l=Date.now()}et(da,Ke);B=da.prototype;B.da=!1;B.S=null;B.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Xe(this,"tick"),this.da&&(hu(this),this.start()))}};B.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}B.M=function(){da.Z.M.call(this),hu(this),delete this.g};function fu(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Pm(t){t.g=fu(()=>{t.g=null,t.i&&(t.i=!1,Pm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fC extends Un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pm(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(t){Un.call(this),this.h=t,this.g={}}et(ai,Un);var jf=[];function Om(t,e,n,s){Array.isArray(n)||(n&&(jf[0]=n.toString()),n=jf);for(var r=0;r<n.length;r++){var i=Sm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Dm(t){su(t.g,function(e,n){this.g.hasOwnProperty(n)&&ou(e)},t),t.g={}}ai.prototype.M=function(){ai.Z.M.call(this),Dm(this)};ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pa(){this.g=!0}pa.prototype.Aa=function(){this.g=!1};function dC(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function pC(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function xs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mC(t,n)+(s?" "+s:"")})}function gC(t,e){t.info(function(){return"TIMEOUT: "+e})}pa.prototype.info=function(){};function mC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return cu(n)}catch{return e}}var ys={},Hf=null;function ga(){return Hf=Hf||new Ke}ys.Ma="serverreachability";function Lm(t){rt.call(this,ys.Ma,t)}et(Lm,rt);function li(t){const e=ga();Xe(e,new Lm(e,t))}ys.STAT_EVENT="statevent";function Mm(t,e){rt.call(this,ys.STAT_EVENT,t),this.stat=e}et(Mm,rt);function ut(t){const e=ga();Xe(e,new Mm(e,t))}ys.Na="timingevent";function Um(t,e){rt.call(this,ys.Na,t),this.size=e}et(Um,rt);function Ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var ma={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Fm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function du(){}du.prototype.h=null;function zf(t){return t.h||(t.h=t.i())}function $m(){}var Ri={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pu(){rt.call(this,"d")}et(pu,rt);function gu(){rt.call(this,"c")}et(gu,rt);var Wl;function ya(){}et(ya,du);ya.prototype.g=function(){return new XMLHttpRequest};ya.prototype.i=function(){return{}};Wl=new ya;function Ni(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new ai(this),this.P=yC,t=Vl?125:void 0,this.W=new da(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Bm}function Bm(){this.i=null,this.g="",this.h=!1}var yC=45e3,Gl={},Po={};B=Ni.prototype;B.setTimeout=function(t){this.P=t};function Yl(t,e,n){t.K=1,t.v=wa(ln(e)),t.s=n,t.U=!0,Vm(t,null)}function Vm(t,e){t.F=Date.now(),xi(t),t.A=ln(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Gm(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Bm,t.g=py(t.l,n?e:null,!t.s),0<t.O&&(t.L=new fC(Qe(t.Ia,t,t.g),t.O)),Om(t.V,t.g,"readystatechange",t.gb),e=t.H?_m(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),li(1),dC(t.j,t.u,t.A,t.m,t.X,t.s)}B.gb=function(t){t=t.target;const e=this.L;e&&en(t)==3?e.l():this.Ia(t)};B.Ia=function(t){try{if(t==this.g)e:{const u=en(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Vl||this.g&&(this.h.h||this.g.ga()||Yf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?li(3):li(2)),va(this);var n=this.g.ba();this.N=n;t:if(qm(this)){var s=Yf(this.g);t="";var r=s.length,i=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Qn(this),Vr(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,pC(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!No(a)){var c=a;break t}}c=null}if(n=c)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ql(this,n);else{this.i=!1,this.o=3,ut(12),Qn(this),Vr(this);break e}}this.U?(jm(this,u,o),Vl&&this.i&&u==3&&(Om(this.V,this.W,"tick",this.fb),this.W.start())):(xs(this.j,this.m,o,null),Ql(this,o)),u==4&&Qn(this),this.i&&!this.I&&(u==4?uy(this.l,this):(this.i=!1,xi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Qn(this),Vr(this)}}}catch{}finally{}};function qm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function jm(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=vC(t,n),r==Po){e==4&&(t.o=4,ut(14),s=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Gl){t.o=4,ut(15),xs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else xs(t.j,t.m,r,null),Ql(t,r);qm(t)&&r!=Po&&r!=Gl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Iu(e),e.L=!0,ut(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Vr(t))}B.fb=function(){if(this.g){var t=en(this.g),e=this.g.ga();this.C<e.length&&(va(this),jm(this,t,e),this.i&&t!=4&&xi(this))}};function vC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Po:(n=Number(e.substring(n,s)),isNaN(n)?Gl:(s+=1,s+n>e.length?Po:(e=e.substr(s,n),t.C=s+n,e)))}B.cancel=function(){this.I=!0,Qn(this)};function xi(t){t.Y=Date.now()+t.P,Hm(t,t.P)}function Hm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ai(Qe(t.eb,t),e)}function va(t){t.B&&(te.clearTimeout(t.B),t.B=null)}B.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gC(this.j,this.A),this.K!=2&&(li(3),ut(17)),Qn(this),this.o=2,Vr(this)):Hm(this,this.Y-t)};function Vr(t){t.l.G==0||t.I||uy(t.l,t)}function Qn(t){va(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,hu(t.W),Dm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ql(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Xl(n.i,t))){if(n.I=t.N,!t.J&&Xl(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Mo(n),Ea(n);else break e;Tu(n),ut(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ai(Qe(n.ab,n),6e3));if(1>=Xm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&Mo(n),!No(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(lt(m,"spdy")||lt(m,"quic")||lt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(vu(i,i.h),i.h=null))}if(s.D){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.sa=T,Pe(s.F,s.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=dy(s,s.H?s.la:null,s.W),o.J){Jm(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(va(a),xi(a)),s.g=o}else ly(s);0<n.l.length&&Ta(n)}else c[0]!="stop"&&c[0]!="close"||Xn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Xn(n,7):Eu(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}li(4)}catch{}}function wC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Bl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function mu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bl(t)||typeof t=="string")wm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Bl(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=wC(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function lr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof lr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}B=lr.prototype;B.R=function(){yu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};B.T=function(){return yu(this),this.g.concat()};function yu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];us(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],us(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}B.get=function(t,e){return us(this.h,t)?this.h[t]:e};B.set=function(t,e){us(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};B.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function us(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var zm=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _C(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function hs(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof hs){this.g=e!==void 0?e:t.g,Oo(this,t.j),this.s=t.s,Do(this,t.i),Lo(this,t.m),this.l=t.l,e=t.h;var n=new ci;n.i=e.i,e.g&&(n.g=new lr(e.g),n.h=e.h),Kf(this,n),this.o=t.o}else t&&(n=String(t).match(zm))?(this.g=!!e,Oo(this,n[1]||"",!0),this.s=qr(n[2]||""),Do(this,n[3]||"",!0),Lo(this,n[4]),this.l=qr(n[5]||"",!0),Kf(this,n[6]||"",!0),this.o=qr(n[7]||"")):(this.g=!!e,this.h=new ci(null,this.g))}hs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Nr(e,Wf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Nr(e,Wf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Nr(n,n.charAt(0)=="/"?SC:IC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Nr(n,kC)),t.join("")};function ln(t){return new hs(t)}function Oo(t,e,n){t.j=n?qr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Do(t,e,n){t.i=n?qr(e,!0):e}function Lo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kf(t,e,n){e instanceof ci?(t.h=e,AC(t.h,t.g)):(n||(e=Nr(e,CC)),t.h=new ci(e,t.g))}function Pe(t,e,n){t.h.set(e,n)}function wa(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bC(t){return t instanceof hs?ln(t):new hs(t,void 0)}function EC(t,e,n,s){var r=new hs(null,void 0);return t&&Oo(r,t),e&&Do(r,e),n&&Lo(r,n),s&&(r.l=s),r}function qr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Nr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wf=/[#\/\?@]/g,IC=/[#\?:]/g,SC=/[#\?]/g,CC=/[#\?@]/g,kC=/#/g;function ci(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new lr,t.h=0,t.i&&_C(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=ci.prototype;B.add=function(t,e){Fn(this),this.i=null,t=cr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Km(t,e){Fn(t),e=cr(t,e),us(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,us(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&yu(t)))}function Wm(t,e){return Fn(t),e=cr(t,e),us(t.g.h,e)}B.forEach=function(t,e){Fn(this),this.g.forEach(function(n,s){wm(n,function(r){t.call(e,r,s,this)},this)},this)};B.T=function(){Fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};B.R=function(t){Fn(this);var e=[];if(typeof t=="string")Wm(this,t)&&(e=Uf(e,this.g.get(cr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Uf(e,t[n])}return e};B.set=function(t,e){return Fn(this),this.i=null,t=cr(this,t),Wm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Gm(t,e,n){Km(t,e),0<n.length&&(t.i=null,t.g.set(cr(t,e),nu(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function cr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function AC(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Km(this,s),Gm(this,r,n))},t)),t.j=e}var RC=class{constructor(t,e){this.h=t,this.g=e}};function Ym(t){this.l=t||NC,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ea&&te.g.Ea()&&te.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NC=10;function Qm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xm(t){return t.h?1:t.g?t.g.size:0}function Xl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vu(t,e){t.g?t.g.add(e):t.h=e}function Jm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ym.prototype.cancel=function(){if(this.i=Zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return nu(t.i)}function wu(){}wu.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};wu.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function xC(){this.g=new wu}function PC(t,e,n){const s=n||"";try{mu(t,function(r,i){let o=r;Ci(r)&&(o=cu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function OC(t,e){const n=new pa;if(te.Image){const s=new Image;s.onload=Gi(Qi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Gi(Qi,n,s,"TestLoadImage: error",!1,e),s.onabort=Gi(Qi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Gi(Qi,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Pi(t){this.l=t.$b||null,this.j=t.ib||!1}et(Pi,du);Pi.prototype.g=function(){return new _a(this.l,this.j)};Pi.prototype.i=function(t){return function(){return t}}({});function _a(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_u,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(_a,Ke);var _u=0;B=_a.prototype;B.open=function(t,e){if(this.readyState!=_u)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ui(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=_u};B.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof te.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ey(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ey(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}B.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oi(this):ui(this),this.readyState==3&&ey(this)}};B.Ua=function(t){this.g&&(this.response=this.responseText=t,Oi(this))};B.Ta=function(t){this.g&&(this.response=t,Oi(this))};B.ha=function(){this.g&&Oi(this)};function Oi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ui(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ui(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DC=te.JSON.parse;function Fe(t){Ke.call(this),this.headers=new lr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ty,this.K=this.L=!1}et(Fe,Ke);var ty="",LC=/^https?$/i,MC=["POST","PUT"];B=Fe.prototype;B.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wl.g(),this.C=this.u?zf(this.u):zf(Wl),this.g.onreadystatechange=Qe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Gf(this,i);return}t=n||"";const r=new lr(this.headers);s&&mu(s,function(i,o){r.set(o,i)}),s=WS(r.T()),n=te.FormData&&t instanceof te.FormData,!(0<=vm(MC,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ry(this),0<this.B&&((this.K=UC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.pa,this)):this.A=fu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Gf(this,i)}};function UC(t){return Ws&&JS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function FC(t){return t.toLowerCase()=="content-type"}B.pa=function(){typeof tu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Gf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ny(t),ba(t)}function ny(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),ba(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ba(this,!0)),Fe.Z.M.call(this)};B.Fa=function(){this.s||(this.F||this.v||this.l?sy(this):this.cb())};B.cb=function(){sy(this)};function sy(t){if(t.h&&typeof tu!="undefined"&&(!t.C[1]||en(t)!=4||t.ba()!=2)){if(t.v&&en(t)==4)fu(t.Fa,0,t);else if(Xe(t,"readystatechange"),en(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(zm)[1]||null;if(!r&&te.self&&te.self.location){var i=te.self.location.protocol;r=i.substr(0,i.length-1)}s=!LC.test(r?r.toLowerCase():"")}n=s}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<en(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",ny(t)}}finally{ba(t)}}}}function ba(t,e){if(t.g){ry(t);const n=t.g,s=t.C[0]?Ro:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function ry(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function en(t){return t.g?t.g.readyState:0}B.ba=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}};B.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DC(e)}};function Yf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ty:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Da=function(){return this.m};B.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function $C(t){let e="";return su(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function bu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=$C(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function iy(t){this.za=0,this.l=[],this.h=new pa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Er("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Er("baseRetryDelayMs",5e3,t),this.$a=Er("retryDelaySeedMs",1e4,t),this.Ya=Er("forwardChannelMaxRetries",2,t),this.ra=Er("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ym(t&&t.concurrentRequestLimit),this.Ca=new xC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}B=iy.prototype;B.ma=8;B.G=1;function Eu(t){if(oy(t),t.G==3){var e=t.V++,n=ln(t.F);Pe(n,"SID",t.J),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Di(t,n),e=new Ni(t,t.h,e,void 0),e.K=2,e.v=wa(ln(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=py(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xi(e)}fy(t)}B.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ea(t){t.g&&(Iu(t),t.g.cancel(),t.g=null)}function oy(t){Ea(t),t.u&&(te.clearTimeout(t.u),t.u=null),Mo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function cl(t,e){t.l.push(new RC(t.Za++,e)),t.G==3&&Ta(t)}function Ta(t){Qm(t.i)||t.m||(t.m=!0,uu(t.Ha,t),t.C=0)}function BC(t,e){return Xm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ai(Qe(t.Ha,t,e),hy(t,t.C)),t.C++,!0)}B.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ni(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=_m(i),bm(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ay(this,r,e),n=ln(this.F),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),Di(this,n),this.o&&i&&bu(n,this.o,i),vu(this.i,r),this.Ra&&Pe(n,"TYPE","init"),this.ja?(Pe(n,"$req",e),Pe(n,"SID","null"),r.$=!0,Yl(r,n,null)):Yl(r,n,e),this.G=2}}else this.G==3&&(t?Qf(this,t):this.l.length==0||Qm(this.i)||Qf(this))};function Qf(t,e){var n;e?n=e.m:n=t.V++;const s=ln(t.F);Pe(s,"SID",t.J),Pe(s,"RID",n),Pe(s,"AID",t.U),Di(t,s),t.o&&t.s&&bu(s,t.o,t.s),n=new Ni(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ay(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),vu(t.i,n),Yl(n,s,e)}function Di(t,e){t.j&&mu({},function(n,s){Pe(e,s,n)})}function ay(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Qe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{PC(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function ly(t){t.g||t.u||(t.Y=1,uu(t.Ga,t),t.A=0)}function Tu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ai(Qe(t.Ga,t),hy(t,t.A)),t.A++,!0)}B.Ga=function(){if(this.u=null,cy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ai(Qe(this.bb,this),t)}};B.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ut(10),Ea(this),cy(this))};function Iu(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function cy(t){t.g=new Ni(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ln(t.oa);Pe(e,"RID","rpc"),Pe(e,"SID",t.J),Pe(e,"CI",t.N?"0":"1"),Pe(e,"AID",t.U),Di(t,e),Pe(e,"TYPE","xmlhttp"),t.o&&t.s&&bu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=wa(ln(e)),n.s=null,n.U=!0,Vm(n,t)}B.ab=function(){this.v!=null&&(this.v=null,Ea(this),Tu(this),ut(19))};function Mo(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function uy(t,e){var n=null;if(t.g==e){Mo(t),Iu(t),t.g=null;var s=2}else if(Xl(t.i,e))n=e.D,Jm(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ga(),Xe(s,new Um(s,n,e,r)),Ta(t)}else ly(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&BC(t,e)||s==2&&Tu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function hy(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Xn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Qe(t.jb,t);n||(n=new hs("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Oo(n,"https"),wa(n)),OC(n.toString(),s)}else ut(2);t.G=0,t.j&&t.j.va(e),fy(t),oy(t)}B.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ut(2)):(this.h.info("Failed to ping google.com"),ut(1))};function fy(t){t.G=0,t.I=-1,t.j&&((Zm(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,nu(t.l),t.l.length=0),t.j.ua())}function dy(t,e,n){let s=bC(n);if(s.i!="")e&&Do(s,e+"."+s.i),Lo(s,s.m);else{const r=te.location;s=EC(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&su(t.aa,function(r,i){Pe(s,i,r)}),e=t.D,n=t.sa,e&&n&&Pe(s,e,n),Pe(s,"VER",t.ma),Di(t,s),s}function py(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fe(new Pi({ib:!0})):new Fe(t.qa),e.L=t.H,e}function gy(){}B=gy.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Oa=function(){};function Uo(){if(Ws&&!(10<=Number(ZS)))throw Error("Environmental error: no available transport.")}Uo.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){Ke.call(this),this.g=new iy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!No(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!No(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ur(this)}et(_t,Ke);_t.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),uu(Qe(t.hb,t,e))),ut(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=dy(t,null,t.W),Ta(t)};_t.prototype.close=function(){Eu(this.g)};_t.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,cl(this.g,e)}else this.v?(e={},e.__data__=cu(t),cl(this.g,e)):cl(this.g,t)};_t.prototype.M=function(){this.g.j=null,delete this.j,Eu(this.g),delete this.g,_t.Z.M.call(this)};function my(t){pu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(my,pu);function yy(){gu.call(this),this.status=1}et(yy,gu);function ur(t){this.g=t}et(ur,gy);ur.prototype.xa=function(){Xe(this.g,"a")};ur.prototype.wa=function(t){Xe(this.g,new my(t))};ur.prototype.va=function(t){Xe(this.g,new yy(t))};ur.prototype.ua=function(){Xe(this.g,"b")};Uo.prototype.createWebChannel=Uo.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;ma.NO_ERROR=0;ma.TIMEOUT=8;ma.HTTP_ERROR=6;Fm.COMPLETE="complete";$m.EventType=Ri;Ri.OPEN="a";Ri.CLOSE="b";Ri.ERROR="c";Ri.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Fe.prototype.listenOnce=Fe.prototype.O;Fe.prototype.getLastError=Fe.prototype.La;Fe.prototype.getLastErrorCode=Fe.prototype.Da;Fe.prototype.getStatus=Fe.prototype.ba;Fe.prototype.getResponseJson=Fe.prototype.Qa;Fe.prototype.getResponseText=Fe.prototype.ga;Fe.prototype.send=Fe.prototype.ea;var VC=function(){return new Uo},qC=function(){return ga()},ul=ma,jC=Fm,HC=ys,Xf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},zC=Pi,Xi=$m,KC=Fe;const Jf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new qc("@firebase/firestore");function Zf(){return fs.logLevel}function G(t,...e){if(fs.logLevel<=ye.DEBUG){const n=e.map(Su);fs.debug(`Firestore (${hr}): ${t}`,...n)}}function Pn(t,...e){if(fs.logLevel<=ye.ERROR){const n=e.map(Su);fs.error(`Firestore (${hr}): ${t}`,...n)}}function Jl(t,...e){if(fs.logLevel<=ye.WARN){const n=e.map(Su);fs.warn(`Firestore (${hr}): ${t}`,...n)}}function Su(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function ke(t,e){t||se()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ms{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class GC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YC{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ns,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ns)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ke(typeof s.accessToken=="string"),new vy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new nt(e)}}class QC{constructor(e,n,s){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class XC{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new QC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.p=n.token,new JC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cu.A=-1;class wy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ek(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function we(t,e){return t<e?-1:t>e?1:0}function Gs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new it(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new it(0,0))}static max(){return new ce(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _y(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s){n===void 0?n=0:n>e.length&&se(),s===void 0?s=e.length-n:s>e.length-n&&se(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends hi{construct(e,n,s){return new Ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const tk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends hi{construct(e,n,s){return new dt(e,n,s)}static isValidIdentifier(e){return tk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.fields=e,e.sort(dt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const nk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(ke(!!t),typeof t=="string"){let e=0;const n=nk.exec(t);if(ke(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ey(t){const e=t.mapValue.fields.__previous_value__;return by(e)?Ey(e):e}function fi(t){const e=On(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){return t==null}function Fo(t){return t===0&&1/t==-1/0}function rk(t){return typeof t=="number"&&Number.isInteger(t)&&!Fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ne.fromString(e))}static fromName(e){return new Q(Ne.fromString(e).popFirst(5))}static empty(){return new Q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ne(e.slice()))}}function ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?by(t)?4:ik(t)?9:10:se()}function Kt(t,e){if(t===e)return!0;const n=ds(t);if(n!==ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=On(s.timestampValue),o=On(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ys(s.bytesValue).isEqual(Ys(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Me(s.geoPointValue.latitude)===Me(r.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Me(s.integerValue)===Me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Me(s.doubleValue),o=Me(r.doubleValue);return i===o?Fo(i)===Fo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ed(i)!==ed(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Kt(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function di(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=ds(t),s=ds(e);if(n!==s)return we(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Me(r.integerValue||r.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return td(t.timestampValue,e.timestampValue);case 4:return td(fi(t),fi(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ys(r),a=Ys(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=we(o[l],a[l]);if(c!==0)return c}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=we(Me(r.latitude),Me(i.latitude));return o!==0?o:we(Me(r.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Xs(o[l],a[l]);if(c)return c}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=we(a[u],c[u]);if(h!==0)return h;const f=Xs(o[a[u]],l[c[u]]);if(f!==0)return f}return we(a.length,c.length)}(t.mapValue,e.mapValue);default:throw se()}}function td(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=On(t),s=On(e),r=we(n.seconds,s.seconds);return r!==0?r:we(n.nanos,s.nanos)}function Us(t){return ec(t)}function ec(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=On(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ys(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ec(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ec(s.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function nd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tc(t){return!!t&&"integerValue"in t}function ku(t){return!!t&&"arrayValue"in t}function sd(t){return!!t&&"nullValue"in t}function rd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oo(t){return!!t&&"mapValue"in t}function jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=jr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ik(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(n)}setAll(e){let n=dt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=jr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];oo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){fr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Pt(jr(this.value))}}function Ty(t){const e=[];return fr(t.fields,(n,s)=>{const r=new dt([n]);if(oo(s)){const i=Ty(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Zl(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new st(e,0,ce.min(),ce.min(),Pt.empty(),0)}static newFoundDocument(e,n,s){return new st(e,1,n,ce.min(),s,0)}static newNoDocument(e,n){return new st(e,2,n,ce.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,ce.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function ok(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ce.fromTimestamp(s===1e9?new it(n+1,0):new it(n,s));return new Js(r,Q.empty(),e)}function ak(t){return new Js(t.readTime,t.key,-1)}class Js{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Js(ce.min(),Q.empty(),-1)}static max(){return new Js(ce.max(),Q.empty(),-1)}}function lk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function id(t,e=null,n=[],s=[],r=null,i=null,o=null){return new ck(t,e,n,s,r,i,o)}function Au(t){const e=re(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Us(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),dr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Us(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Us(s)).join(",")),e.P=n}return e.P}function uk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Us(s.value)}`;var s}).join(", ")}]`),dr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Us(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Us(n)).join(",")),`Target(${e})`}function Ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!vk(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Kt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ad(t.startAt,e.startAt)&&ad(t.endAt,e.endAt)}function nc(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ht extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new hk(e,n,s):n==="array-contains"?new pk(e,s):n==="in"?new gk(e,s):n==="not-in"?new mk(e,s):n==="array-contains-any"?new yk(e,s):new ht(e,n,s)}static V(e,n,s){return n==="in"?new fk(e,s):new dk(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Xs(n,this.value)):n!==null&&ds(this.value)===ds(n)&&this.v(Xs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hk extends ht{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.v(n)}}class fk extends ht{constructor(e,n){super(e,"in",n),this.keys=Iy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dk extends ht{constructor(e,n){super(e,"not-in",n),this.keys=Iy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Iy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class pk extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ku(n)&&di(n.arrayValue,this.value)}}class gk extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class mk extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!di(this.value.arrayValue,n)}}class yk extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>di(this.value.arrayValue,s))}}class $o{constructor(e,n){this.position=e,this.inclusive=n}}class Fs{constructor(e,n="asc"){this.field=e,this.dir=n}}function vk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function od(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=Xs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ad(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function wk(t,e,n,s,r,i,o,a){return new pr(t,e,n,s,r,i,o,a)}function Nu(t){return new pr(t)}function ao(t){return!dr(t.limit)&&t.limitType==="F"}function Bo(t){return!dr(t.limit)&&t.limitType==="L"}function xu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pu(t){for(const e of t.filters)if(e.S())return e.field;return null}function Sy(t){return t.collectionGroup!==null}function pi(t){const e=re(t);if(e.D===null){e.D=[];const n=Pu(e),s=xu(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Fs(n)),e.D.push(new Fs(dt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Fs(dt.keyField(),i))}}}return e.D}function ps(t){const e=re(t);if(!e.C)if(e.limitType==="F")e.C=id(e.path,e.collectionGroup,pi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of pi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Fs(i.field,o))}const s=e.endAt?new $o(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new $o(e.startAt.position,!e.startAt.inclusive):null;e.C=id(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function _k(t,e,n){return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ia(t,e){return Ru(ps(t),ps(e))&&t.limitType===e.limitType}function Cy(t){return`${Au(ps(t))}|lt:${t.limitType}`}function sc(t){return`Query(target=${uk(ps(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=od(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,pi(n),s)||n.endAt&&!function(r,i,o){const a=od(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,pi(n),s))}(t,e)}function bk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ky(t){return(e,n)=>{let s=!1;for(const r of pi(t)){const i=Ek(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ek(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Xs(a,l):se()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fo(e)?"-0":e}}function Ry(t){return{integerValue:""+t}}function Tk(t,e){return rk(e)?Ry(e):Ay(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this._=void 0}}function Ik(t,e,n){return t instanceof Vo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof gi?xy(t,e):t instanceof mi?Py(t,e):function(s,r){const i=Ny(s,r),o=ld(i)+ld(s.k);return tc(i)&&tc(s.k)?Ry(o):Ay(s.M,o)}(t,e)}function Sk(t,e,n){return t instanceof gi?xy(t,e):t instanceof mi?Py(t,e):n}function Ny(t,e){return t instanceof qo?tc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Vo extends Sa{}class gi extends Sa{constructor(e){super(),this.elements=e}}function xy(t,e){const n=Oy(e);for(const s of t.elements)n.some(r=>Kt(r,s))||n.push(s);return{arrayValue:{values:n}}}class mi extends Sa{constructor(e){super(),this.elements=e}}function Py(t,e){let n=Oy(e);for(const s of t.elements)n=n.filter(r=>!Kt(r,s));return{arrayValue:{values:n}}}class qo extends Sa{constructor(e,n){super(),this.M=e,this.k=n}}function ld(t){return Me(t.integerValue||t.doubleValue)}function Oy(t){return ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ck(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof gi&&s instanceof gi||n instanceof mi&&s instanceof mi?Gs(n.elements,s.elements,Kt):n instanceof qo&&s instanceof qo?Kt(n.k,s.k):n instanceof Vo&&s instanceof Vo}(t.transform,e.transform)}class kk{constructor(e,n){this.version=e,this.transformResults=n}}class $s{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $s}static exists(e){return new $s(void 0,e)}static updateTime(e){return new $s(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function Ak(t,e,n){t instanceof ka?function(s,r,i){const o=s.value.clone(),a=hd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Li?function(s,r,i){if(!lo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=hd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Dy(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function rc(t,e,n){t instanceof ka?function(s,r,i){if(!lo(s.precondition,r))return;const o=s.value.clone(),a=fd(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(ud(r),o).setHasLocalMutations()}(t,e,n):t instanceof Li?function(s,r,i){if(!lo(s.precondition,r))return;const o=fd(s.fieldTransforms,i,r),a=r.data;a.setAll(Dy(s)),a.setAll(o),r.convertToFoundDocument(ud(r),a).setHasLocalMutations()}(t,e,n):function(s,r){lo(s.precondition,r)&&r.convertToNoDocument(ce.min())}(t,e)}function Rk(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ny(s.transform,r||null);i!=null&&(n==null&&(n=Pt.empty()),n.set(s.field,i))}return n||null}function cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Gs(n,s,(r,i)=>Ck(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ud(t){return t.isFoundDocument()?t.version:ce.min()}class ka extends Ca{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Li extends Ca{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Dy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function hd(t,e,n){const s=new Map;ke(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Sk(o,a,n[r]))}return s}function fd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ik(i,o,e))}return s}class Nk extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class xk extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,pe;function Ok(t){switch(t){default:return se();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Ly(t){if(t===void 0)return Pn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Le.OK:return k.OK;case Le.CANCELLED:return k.CANCELLED;case Le.UNKNOWN:return k.UNKNOWN;case Le.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Le.INTERNAL:return k.INTERNAL;case Le.UNAVAILABLE:return k.UNAVAILABLE;case Le.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Le.NOT_FOUND:return k.NOT_FOUND;case Le.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Le.ABORTED:return k.ABORTED;case Le.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Le.DATA_LOSS:return k.DATA_LOSS;default:return se()}}(pe=Le||(Le={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _y(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ge.RED,this.left=r!=null?r:Ge.EMPTY,this.right=i!=null?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ge(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new We(Q.comparator);function gs(){return Dk}const Lk=new We(Q.comparator);function ic(){return Lk}function hl(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mk=new We(Q.comparator),Uk=new Je(Q.comparator);function xe(...t){let e=Uk;for(const n of t)e=e.add(n);return e}const Fk=new Je(we);function My(){return Fk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Aa(ce.min(),s,My(),gs(),xe())}}class Mi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Mi(Ze.EMPTY_BYTE_STRING,n,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Uy{constructor(e,n){this.targetId=e,this.$=n}}class Fy{constructor(e,n,s=Ze.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class pd{constructor(){this.B=0,this.L=md(),this.U=Ze.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=xe(),n=xe(),s=xe();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:se()}}),new Mi(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=md()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class $k{constructor(e){this.nt=e,this.st=new Map,this.it=gs(),this.rt=gd(),this.ot=new Je(we)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(nc(i))if(s===0){const o=new Q(i.path);this.ct(n,o,st.newNoDocument(o,ce.min()))}else ke(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&nc(a.target)){const l=new Q(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,st.newNoDocument(l,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=xe();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.wt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new Aa(e,n,this.ot,this.it,s);return this.it=gs(),this.rt=gd(),this.ot=new Je(we),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new pd,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Je(we),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new pd),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function gd(){return new We(Q.comparator)}function md(){return new We(Q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class qk{constructor(e,n){this.databaseId=e,this.N=n}}function jo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $y(t,e){return t.N?e.toBase64():e.toUint8Array()}function jk(t,e){return jo(t,e.toTimestamp())}function nn(t){return ke(!!t),ce.fromTimestamp(function(e){const n=On(e);return new it(n.seconds,n.nanos)}(t))}function Du(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function By(t){const e=Ne.fromString(t);return ke(jy(e)),e}function oc(t,e){return Du(t.databaseId,e.path)}function fl(t,e){const n=By(e);if(n.get(1)!==t.databaseId.projectId)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Vy(n))}function ac(t,e){return Du(t.databaseId,e)}function Hk(t){const e=By(t);return e.length===4?Ne.emptyPath():Vy(e)}function lc(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vy(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yd(t,e,n){return{name:oc(t,e),fields:n.value.mapValue.fields}}function zk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,c){return l.N?(ke(c===void 0||typeof c=="string"),Ze.fromBase64String(c||"")):(ke(c===void 0||c instanceof Uint8Array),Ze.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?k.UNKNOWN:Ly(l.code);return new q(c,l.message||"")}(o);n=new Fy(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=fl(t,s.document.name),i=nn(s.document.updateTime),o=new Pt({mapValue:{fields:s.document.fields}}),a=st.newFoundDocument(r,i,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new co(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=fl(t,s.document),i=s.readTime?nn(s.readTime):ce.min(),o=st.newNoDocument(r,i),a=s.removedTargetIds||[];n=new co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=fl(t,s.document),i=s.removedTargetIds||[];n=new co([],i,r,null)}else{if(!("filter"in e))return se();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Pk(r),o=s.targetId;n=new Uy(o,i)}}return n}function Kk(t,e){let n;if(e instanceof ka)n={update:yd(t,e.key,e.value)};else if(e instanceof Nk)n={delete:oc(t,e.key)};else if(e instanceof Li)n={update:yd(t,e.key,e.data),updateMask:nA(e.fieldMask)};else{if(!(e instanceof xk))return se();n={verify:oc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Vo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof gi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof mi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw se()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:jk(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:se()}(t,e.precondition)),n}function Wk(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?nn(s.updateTime):nn(r);return i.isEqual(ce.min())&&(i=nn(r)),new kk(i,s.transformResults||[])}(n,e))):[]}function Gk(t,e){return{documents:[ac(t,e.path)]}}function Yk(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ac(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ac(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(rd(h.value))return{unaryFilter:{field:Ss(h.field),op:"IS_NAN"}};if(sd(h.value))return{unaryFilter:{field:Ss(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(rd(h.value))return{unaryFilter:{field:Ss(h.field),op:"IS_NOT_NAN"}};if(sd(h.value))return{unaryFilter:{field:Ss(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(h.field),op:Zk(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Ss(u.field),direction:Jk(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.N||dr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Qk(t){let e=Hk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ke(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=qy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Fs(Ps(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,dr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new $o(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new $o(f,h)}(n.endAt)),wk(e,r,o,i,a,"F",l,c)}function Xk(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function qy(t){return t?t.unaryFilter!==void 0?[tA(t)]:t.fieldFilter!==void 0?[eA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>qy(e)).reduce((e,n)=>e.concat(n)):se():[]}function Jk(t){return Bk[t]}function Zk(t){return Vk[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Ps(t){return dt.fromServerFormat(t.fieldPath)}function eA(t){return ht.create(Ps(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}function tA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ps(t.unaryFilter.field);return ht.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ps(t.unaryFilter.field);return ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ps(t.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ps(t.unaryFilter.field);return ht.create(r,"!=",{nullValue:"NULL_VALUE"});default:return se()}}function nA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,s)=>{n(e)})}static reject(e){return new O((n,s)=>{s(e)})}static waitFor(e){return new O((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=O.resolve(!1);for(const s of e)n=n.next(r=>r?O.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Ak(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&rc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&rc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(ce.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xe())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,s)=>cd(n,s))&&Gs(this.baseMutations,e.baseMutations,(n,s)=>cd(n,s))}}class Lu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ke(e.mutations.length===s.length);let r=Mk;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Lu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,s,r,i=ce.min(),o=ce.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.Jt=e}}function lA(t){const e=Qk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_k(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.qe=new uA}addToCollectionParentIndex(e,n){return this.qe.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getFieldIndex(e,n){return O.resolve(null)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}updateCollectionGroup(e,n,s){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class uA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Je(Ne.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Je(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Zs(0)}static yn(){return new Zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==sA)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return Q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):Sy(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new Q(n)).next(s=>{let r=ic();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=ic();return this.indexManager.getCollectionParents(e,r).next(o=>O.forEach(o,a=>{const l=function(c,u){return new pr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.zs(e,l,s).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const l=a.key;let c=r.get(l);c==null&&(c=st.newInvalidDocument(l),r=r.insert(l,c)),rc(a,c,o.localWriteTime),c.isFoundDocument()||(r=r.remove(l))}}).next(()=>(r.forEach((i,o)=>{Ou(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=xe(),r=xe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{Xs(e){this.Zs=e}Qs(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(ce.min())?this.ti(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.ei(n,i);return(ao(n)||Bo(n))&&this.ni(n.limitType,o,r,s)?this.ti(e,n):(Zf()<=ye.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sc(n)),this.Zs.Qs(e,n,ok(s,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let s=new Je(ky(e));return n.forEach((r,i)=>{Ou(e,i)&&(s=s.add(i))}),s}ni(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(e,n){return Zf()<=ye.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",sc(n)),this.Zs.Qs(e,n,Js.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,s,r){this.persistence=e,this.si=n,this.M=r,this.ii=new We(we),this.ri=new gr(i=>Au(i),Ru),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(s)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new fA(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function gA(t,e,n,s){return new pA(t,e,n,s)}async function Hy(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.ai(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=xe();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.ci.Ks(s,l).next(c=>({hi:c,removedBatchIds:o,addedBatchIds:a}))})})}function mA(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=O.resolve();return h.forEach(p=>{f=f.next(()=>c.getEntry(a,p)).next(m=>{const T=l.docVersions.get(p);ke(T!==null),m.version.compareTo(T)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.ci.Ks(s,r))})}function zy(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function yA(t,e){const n=re(t),s=e.snapshotVersion;let r=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});r=n.ii;const a=[];e.targetChanges.forEach((c,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,c.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,c.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Ze.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,s)),r=r.insert(u,f),function(p,m,T){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,f,c)&&a.push(n.fs.updateTargetData(i,f))});let l=gs();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(vA(i,o,e.documentUpdates).next(c=>{l=c})),!s.isEqual(ce.min())){const c=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(c)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,l)).next(()=>l)}).then(i=>(n.ii=r,i))}function vA(t,e,n){let s=xe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=gs();return n.forEach((o,a)=>{const l=r.get(o);a.isNoDocument()&&a.version.isEqual(ce.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):G("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),i})}function wA(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function _A(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,O.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new ss(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ii.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(s.targetId,s),n.ri.set(e,s.targetId)),s})}async function cc(t,e,n){const s=re(t),r=s.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ui(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ii=s.ii.remove(e),s.ri.delete(r.target)}function vd(t,e,n){const s=re(t);let r=ce.min(),i=xe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=re(a),h=u.ri.get(c);return h!==void 0?O.resolve(u.ii.get(h)):u.fs.getTargetData(l,c)}(s,o,ps(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.si.Qs(o,e,n?r:ce.min(),n?i:xe())).next(a=>(bA(s,bk(e),a),{documents:a,li:i})))}function bA(t,e,n){let s=ce.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.oi.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return O.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var s;return this.wi.set(n.id,{id:(s=n).id,version:s.version,createTime:nn(s.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(s){return{name:s.name,query:lA(s.bundledQuery),readTime:nn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.overlays=new We(Q.comparator),this.gi=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.gi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(s)),O.resolve()}getOverlaysForCollection(e,n,s){const r=hl(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return O.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new We((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=hl(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=hl(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return O.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.gi.get(r.largestBatchId).delete(s.key);this.gi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new oA(n,s));let i=this.gi.get(n);i===void 0&&(i=xe(),this.gi.set(n,i)),this.gi.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.yi=new Je(Ve.pi),this.Ii=new Je(Ve.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const s=new Ve(e,n);this.yi=this.yi.add(s),this.Ii=this.Ii.add(s)}Ei(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ai(new Ve(e,n))}Ri(e,n){e.forEach(s=>this.removeReference(s,n))}Pi(e){const n=new Q(new Ne([])),s=new Ve(n,e),r=new Ve(n,e+1),i=[];return this.Ii.forEachInRange([s,r],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new Q(new Ne([])),s=new Ve(n,e),r=new Ve(n,e+1);let i=xe();return this.Ii.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),s=this.yi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ve{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return Q.comparator(e.key,n.key)||we(e.vi,n.vi)}static Ti(e,n){return we(e.vi,n.vi)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new Je(Ve.pi)}checkEmpty(e){return O.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new iA(i,n,s,r);this.Bs.push(o);for(const a of r)this.Di=this.Di.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.xi(s),i=r<0?0:r;return O.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return O.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ve(n,0),r=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([s,r],o=>{const a=this.Ci(o.vi);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Je(we);return n.forEach(r=>{const i=new Ve(r,0),o=new Ve(r,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{s=s.add(a.vi)})}),O.resolve(this.Ni(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Q.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new Q(i),0);let a=new Je(we);return this.Di.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.vi)),!0)},o),O.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(s=>{const r=this.Ci(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ke(this.ki(n.batchId,"removed")===0),this.Bs.shift();let s=this.Di;return O.forEach(n.mutations,r=>{const i=new Ve(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Di=s})}_n(e){}containsKey(e,n){const s=new Ve(n,0),r=this.Di.firstAfterOrEqual(s);return O.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,O.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.Mi=e,this.docs=new We(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mi(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let s=gs();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():st.newInvalidDocument(r))}),O.resolve(s)}getAllFromCollection(e,n,s){let r=gs();const i=new Q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||lk(ak(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return O.resolve(r)}getAllFromCollectionGroup(e,n,s,r){se()}Oi(e,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new CA(this)}getSize(e){return O.resolve(this.size)}}class CA extends hA{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),O.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.persistence=e,this.Fi=new gr(n=>Au(n),Ru),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Uu,this.targetCount=0,this.Li=Zs.gn()}forEachTarget(e,n){return this.Fi.forEach((s,r)=>n(r)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),O.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Tn(n),O.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),O.waitFor(i).next(()=>r)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fi.get(n)||null;return O.resolve(s)}addMatchingKeys(e,n,s){return this.Bi.Ei(n,s),O.resolve()}removeMatchingKeys(e,n,s){this.Bi.Ri(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),O.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Bi.Vi(n);return O.resolve(s)}containsKey(e,n){return O.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.Ui={},this.overlays={},this.es=new Cu(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new kA(this),this.indexManager=new cA,this.ds=function(s){return new SA(s)}(s=>this.referenceDelegate.qi(s)),this.M=new aA(n),this._s=new EA(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ui[e.toKey()];return s||(s=new IA(n,this.referenceDelegate),this.Ui[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){G("MemoryPersistence","Starting transaction:",e);const r=new RA(this.es.next());return this.referenceDelegate.Ki(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Qi(e,n){return O.or(Object.values(this.Ui).map(s=>()=>s.containsKey(e,n)))}}class RA extends rA{constructor(e){super(),this.currentSequenceNumber=e}}class Fu{constructor(e){this.persistence=e,this.ji=new Uu,this.Wi=null}static zi(e){return new Fu(e)}get Hi(){if(this.Wi)return this.Wi;throw se()}addReference(e,n,s){return this.ji.addReference(s,n),this.Hi.delete(s.toString()),O.resolve()}removeReference(e,n,s){return this.ji.removeReference(s,n),this.Hi.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),O.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(r=>this.Hi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Hi,s=>{const r=Q.fromPath(s);return this.Ji(e,r).next(i=>{i||n.removeEntry(r,ce.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(s=>{s?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return O.or([()=>O.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class wd{constructor(){this.activeTargetIds=My()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NA{constructor(){this.$r=new wd,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,s){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new wd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,s,r,i){const o=this.uo(e,n);G("RestConnection","Sending: ",o,s);const a={};return this.ao(a,r,i),this.co(e,o,a,s).then(l=>(G("RestConnection","Received: ",l),l),l=>{throw Jl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}ho(e,n,s,r,i){return this.oo(e,n,s,r,i)}ao(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+hr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}uo(e,n){const s=PA[e];return`${this.io}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new KC;a.listenOnce(jC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ul.NO_ERROR:const c=a.getResponseJson();G("Connection","XHR received:",JSON.stringify(c)),i(c);break;case ul.TIMEOUT:G("Connection",'RPC "'+e+'" timed out'),o(new q(k.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const u=a.getStatus();if(G("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(m)>=0?m:k.UNKNOWN}(h.status);o(new q(f,h.message))}else o(new q(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(k.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{G("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}lo(e,n,s){const r=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=VC(),o=qC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zC({})),this.ao(a.initMessageHeaders,n,s),xg()||Og()||PE()||Dg()||OE()||Pg()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");G("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let u=!1,h=!1;const f=new OA({Wr:m=>{h?G("Connection","Not sending because WebChannel is closed:",m):(u||(G("Connection","Opening WebChannel transport."),c.open(),u=!0),G("Connection","WebChannel sending:",m),c.send(m))},zr:()=>c.close()}),p=(m,T,w)=>{m.listen(T,E=>{try{w(E)}catch(N){setTimeout(()=>{throw N},0)}})};return p(c,Xi.EventType.OPEN,()=>{h||G("Connection","WebChannel transport opened.")}),p(c,Xi.EventType.CLOSE,()=>{h||(h=!0,G("Connection","WebChannel transport closed"),f.no())}),p(c,Xi.EventType.ERROR,m=>{h||(h=!0,Jl("Connection","WebChannel transport errored:",m),f.no(new q(k.UNAVAILABLE,"The operation could not be completed")))}),p(c,Xi.EventType.MESSAGE,m=>{var T;if(!h){const w=m.data[0];ke(!!w);const E=w,N=E.error||((T=E[0])===null||T===void 0?void 0:T.error);if(N){G("Connection","WebChannel received error:",N);const L=N.status;let P=function($){const M=Le[$];if(M!==void 0)return Ly(M)}(L),Y=N.message;P===void 0&&(P=k.INTERNAL,Y="Unknown error status: "+L+" with message "+N.message),h=!0,f.no(new q(P,Y)),c.close()}else G("Connection","WebChannel received:",w),f.so(w)}}),p(o,HC.STAT_EVENT,m=>{m.stat===Xf.PROXY?G("Connection","Detected buffering proxy"):m.stat===Xf.NOPROXY&&G("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function dl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){return new qk(t,!0)}class Ky{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=s,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),s=Math.max(0,Date.now()-this.po),r=Math.max(0,n-s);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n,s,r,i,o,a,l){this.Yn=e,this.Ro=s,this.Po=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Ky(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.qo(s,r)},s=>{e(()=>{const r=new q(k.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ko(r)})})}qo(e,n){const s=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{s(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(r=>{s(()=>this.Ko(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LA extends Wy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=zk(this.M,e),s=function(r){if(!("targetChange"in r))return ce.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ce.min():i.readTime?nn(i.readTime):ce.min()}(e);return this.listener.Qo(n,s)}jo(e){const n={};n.database=lc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=nc(a)?{documents:Gk(r,a)}:{query:Yk(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=$y(r,i.resumeToken):i.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=jo(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=Xk(this.M,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=lc(this.M),n.removeTarget=e,this.Fo(n)}}class MA extends Wy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=Wk(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.Yo(s,n)}return ke(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=lc(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Kk(this.M,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.M=r,this.tu=!1}eu(){if(this.tu)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.oo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(k.UNKNOWN,r.toString())})}ho(e,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ho(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(k.UNKNOWN,r.toString())})}terminate(){this.tu=!0}}class FA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Pn(n),this.iu=!1):G("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{s.enqueueAndForget(async()=>{vs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=re(a);l.fu.add(4),await $i(l),l.wu.set("Unknown"),l.fu.delete(4),await Na(l)}(this))})}),this.wu=new FA(s,r)}}async function Na(t){if(vs(t))for(const e of t.du)await e(!0)}async function $i(t){for(const e of t.du)await e(!1)}function Gy(t,e){const n=re(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Vu(n)?Bu(n):mr(n).xo()&&$u(n,e))}function Yy(t,e){const n=re(t),s=mr(n);n.lu.delete(e),s.xo()&&Qy(n,e),n.lu.size===0&&(s.xo()?s.Mo():vs(n)&&n.wu.set("Unknown"))}function $u(t,e){t.mu.Z(e.targetId),mr(t).jo(e)}function Qy(t,e){t.mu.Z(e),mr(t).Wo(e)}function Bu(t){t.mu=new $k({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),mr(t).start(),t.wu.ru()}function Vu(t){return vs(t)&&!mr(t).Co()&&t.lu.size>0}function vs(t){return re(t).fu.size===0}function Xy(t){t.mu=void 0}async function BA(t){t.lu.forEach((e,n)=>{$u(t,e)})}async function VA(t,e){Xy(t),Vu(t)?(t.wu.au(e),Bu(t)):t.wu.set("Unknown")}async function qA(t,e,n){if(t.wu.set("Online"),e instanceof Fy&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.lu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.lu.delete(o),s.mu.removeTarget(o))}(t,e)}catch(s){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ho(t,s)}else if(e instanceof co?t.mu.ut(e):e instanceof Uy?t.mu._t(e):t.mu.ht(e),!n.isEqual(ce.min()))try{const s=await zy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.mu.yt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.lu.get(l);c&&r.lu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.lu.get(a);if(!l)return;r.lu.set(a,l.withResumeToken(Ze.EMPTY_BYTE_STRING,l.snapshotVersion)),Qy(r,a);const c=new ss(l.target,a,1,l.sequenceNumber);$u(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){G("RemoteStore","Failed to raise snapshot:",s),await Ho(t,s)}}async function Ho(t,e,n){if(!Ui(e))throw e;t.fu.add(1),await $i(t),t.wu.set("Offline"),n||(n=()=>zy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Na(t)})}function Jy(t,e){return e().catch(n=>Ho(t,n,e))}async function xa(t){const e=re(t),n=Dn(e);let s=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;jA(e);)try{const r=await wA(e.localStore,s);if(r===null){e.hu.length===0&&n.Mo();break}s=r.batchId,HA(e,r)}catch(r){await Ho(e,r)}Zy(e)&&ev(e)}function jA(t){return vs(t)&&t.hu.length<10}function HA(t,e){t.hu.push(e);const n=Dn(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function Zy(t){return vs(t)&&!Dn(t).Co()&&t.hu.length>0}function ev(t){Dn(t).start()}async function zA(t){Dn(t).Zo()}async function KA(t){const e=Dn(t);for(const n of t.hu)e.Jo(n.mutations)}async function WA(t,e,n){const s=t.hu.shift(),r=Lu.from(s,e,n);await Jy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await xa(t)}async function GA(t,e){e&&Dn(t).Ho&&await async function(n,s){if(r=s.code,Ok(r)&&r!==k.ABORTED){const i=n.hu.shift();Dn(n).ko(),await Jy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xa(n)}var r}(t,e),Zy(t)&&ev(t)}async function bd(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const s=vs(n);n.fu.add(3),await $i(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Na(n)}async function YA(t,e){const n=re(t);e?(n.fu.delete(2),await Na(n)):e||(n.fu.add(2),await $i(n),n.wu.set("Unknown"))}function mr(t){return t.gu||(t.gu=function(e,n,s){const r=re(e);return r.eu(),new LA(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Hr:BA.bind(null,t),Yr:VA.bind(null,t),Qo:qA.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Vu(t)?Bu(t):t.wu.set("Unknown")):(await t.gu.stop(),Xy(t))})),t.gu}function Dn(t){return t.yu||(t.yu=function(e,n,s){const r=re(e);return r.eu(),new MA(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Hr:zA.bind(null,t),Yr:GA.bind(null,t),Xo:KA.bind(null,t),Yo:WA.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await xa(t)):(await t.yu.stop(),t.hu.length>0&&(G("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new qu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Ui(t))return new q(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Q.comparator(n.key,s.key):(n,s)=>Q.comparator(n.key,s.key),this.keyedMap=ic(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Bs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.pu=new We(Q.comparator)}track(e){const n=e.doc.key,s=this.pu.get(n);s?e.type!==0&&s.type===3?this.pu=this.pu.insert(n,e):e.type===3&&s.type!==1?this.pu=this.pu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pu=this.pu.remove(n):e.type===1&&s.type===2?this.pu=this.pu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):se():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,s)=>{e.push(s)}),e}}class er{constructor(e,n,s,r,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new er(e,n,Bs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.Tu=void 0,this.listeners=[]}}class XA{constructor(){this.queries=new gr(e=>Cy(e),Ia),this.onlineState="Unknown",this.Eu=new Set}}async function JA(t,e){const n=re(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new QA),r)try{i.Tu=await n.onListen(s)}catch(o){const a=ju(o,`Initialization of query '${sc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Hu(n)}async function ZA(t,e){const n=re(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function eR(t,e){const n=re(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(r)&&(s=!0);o.Tu=r}}s&&Hu(n)}function tR(t,e,n){const s=re(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Hu(t){t.Eu.forEach(e=>{e.next()})}class nR{constructor(e,n,s){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}Ru(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new er(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Cu||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.key=e}}class nv{constructor(e){this.key=e}}class sR{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=xe(),this.mutatedKeys=xe(),this.Uu=ky(e),this.qu=new Bs(this.Uu)}get Ku(){return this.$u}Gu(e,n){const s=n?n.Qu:new Ed,r=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=ao(this.query)&&r.size===this.query.limit?r.last():null,c=Bo(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=Ou(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?m!==T&&(s.track({type:3,doc:p}),w=!0):this.ju(f,p)||(s.track({type:2,doc:p}),w=!0,(l&&this.Uu(p,l)>0||c&&this.Uu(p,c)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),w=!0):f&&!p&&(s.track({type:1,doc:f}),w=!0,(l||c)&&(a=!0)),w&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),ao(this.query)||Bo(this.query))for(;o.size>this.query.limit;){const u=ao(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{qu:o,Qu:s,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((c,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return p(h)-p(f)}(c.type,u.type)||this.Uu(c.doc,u.doc)),this.Wu(s);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,i.length!==0||l?{snapshot:new er(this.query,e.qu,r,i,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Ed,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=xe(),this.qu.forEach(s=>{this.Ju(s.key)&&(this.Lu=this.Lu.add(s.key))});const n=[];return e.forEach(s=>{this.Lu.has(s)||n.push(new nv(s))}),this.Lu.forEach(s=>{e.has(s)||n.push(new tv(s))}),n}Yu(e){this.$u=e.li,this.Lu=xe();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return er.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class rR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class iR{constructor(e){this.key=e,this.Zu=!1}}class oR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new gr(a=>Cy(a),Ia),this.na=new Map,this.sa=new Set,this.ia=new We(Q.comparator),this.ra=new Map,this.oa=new Uu,this.ua={},this.aa=new Map,this.ca=Zs.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function aR(t,e){const n=yR(t);let s,r;const i=n.ea.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Xu();else{const o=await _A(n.localStore,ps(e));n.isPrimaryClient&&Gy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await lR(n,e,s,a==="current")}return r}async function lR(t,e,n,s){t.la=(u,h,f)=>async function(p,m,T,w){let E=m.view.Gu(T);E.ni&&(E=await vd(p.localStore,m.query,!1).then(({documents:P})=>m.view.Gu(P,E)));const N=w&&w.targetChanges.get(m.targetId),L=m.view.applyChanges(E,p.isPrimaryClient,N);return Id(p,m.targetId,L.Hu),L.snapshot}(t,u,h,f);const r=await vd(t.localStore,e,!0),i=new sR(e,r.li),o=i.Gu(r.documents),a=Mi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);Id(t,n,l.Hu);const c=new rR(e,n,i);return t.ea.set(e,c),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function cR(t,e){const n=re(t),s=n.ea.get(e),r=n.na.get(s.targetId);if(r.length>1)return n.na.set(s.targetId,r.filter(i=>!Ia(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await cc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Yy(n.remoteStore,s.targetId),uc(n,s.targetId)}).catch(Fi)):(uc(n,s.targetId),await cc(n.localStore,s.targetId,!0))}async function uR(t,e,n){const s=vR(t);try{const r=await function(i,o){const a=re(i),l=it.now(),c=o.reduce((h,f)=>h.add(f.key),xe());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,c).next(f=>{u=f;const p=[];for(const m of o){const T=Rk(m,u.get(m.key));T!=null&&p.push(new Li(m.key,T,Ty(T.value.mapValue),$s.exists(!0)))}return a.Bs.addMutationBatch(h,l,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.ua[i.currentUser.toKey()];l||(l=new We(we)),l=l.insert(o,a),i.ua[i.currentUser.toKey()]=l}(s,r.batchId,n),await Bi(s,r.changes),await xa(s.remoteStore)}catch(r){const i=ju(r,"Failed to persist write");n.reject(i)}}async function sv(t,e){const n=re(t);try{const s=await yA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ra.get(i);o&&(ke(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Zu=!0:r.modifiedDocuments.size>0?ke(o.Zu):r.removedDocuments.size>0&&(ke(o.Zu),o.Zu=!1))}),await Bi(n,s,e)}catch(s){await Fi(s)}}function Td(t,e,n){const s=re(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=re(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Au(o)&&(l=!0)}),l&&Hu(a)}(s.eventManager,e),r.length&&s.ta.Qo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hR(t,e,n){const s=re(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ra.get(e),i=r&&r.key;if(i){let o=new We(Q.comparator);o=o.insert(i,st.newNoDocument(i,ce.min()));const a=xe().add(i),l=new Aa(ce.min(),new Map,new Je(we),o,a);await sv(s,l),s.ia=s.ia.remove(i),s.ra.delete(e),zu(s)}else await cc(s.localStore,e,!1).then(()=>uc(s,e,n)).catch(Fi)}async function fR(t,e){const n=re(t),s=e.batch.batchId;try{const r=await mA(n.localStore,e);iv(n,s,null),rv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Bi(n,r)}catch(r){await Fi(r)}}async function dR(t,e,n){const s=re(t);try{const r=await function(i,o){const a=re(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.Bs.lookupMutationBatch(l,o).next(u=>(ke(u!==null),c=u.keys(),a.Bs.removeMutationBatch(l,u))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,c))})}(s.localStore,e);iv(s,e,n),rv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Bi(s,r)}catch(r){await Fi(r)}}function rv(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function iv(t,e,n){const s=re(t);let r=s.ua[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ua[s.currentUser.toKey()]=r}}function uc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.na.get(e))t.ea.delete(s),n&&t.ta.fa(s,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(s=>{t.oa.containsKey(s)||ov(t,s)})}function ov(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(Yy(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),zu(t))}function Id(t,e,n){for(const s of n)s instanceof tv?(t.oa.addReference(s.key,e),pR(t,s)):s instanceof nv?(G("SyncEngine","Document no longer in limbo: "+s.key),t.oa.removeReference(s.key,e),t.oa.containsKey(s.key)||ov(t,s.key)):se()}function pR(t,e){const n=e.key,s=n.path.canonicalString();t.ia.get(n)||t.sa.has(s)||(G("SyncEngine","New document in limbo: "+n),t.sa.add(s),zu(t))}function zu(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Q(Ne.fromString(e)),s=t.ca.next();t.ra.set(s,new iR(n)),t.ia=t.ia.insert(n,s),Gy(t.remoteStore,new ss(ps(Nu(n.path)),s,2,Cu.A))}}async function Bi(t,e,n){const s=re(t),r=[],i=[],o=[];s.ea.isEmpty()||(s.ea.forEach((a,l)=>{o.push(s.la(l,e,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Mu.Ys(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.ta.Qo(r),await async function(a,l){const c=re(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(l,h=>O.forEach(h.Hs,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.Js,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ui(u))throw u;G("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.ii.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);c.ii=c.ii.insert(h,m)}}}(s.localStore,i))}async function gR(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const s=await Hy(n.localStore,e);n.currentUser=e,function(r,i){r.aa.forEach(o=>{o.forEach(a=>{a.reject(new q(k.CANCELLED,i))})}),r.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Bi(n,s.hi)}}function mR(t,e){const n=re(t),s=n.ra.get(e);if(s&&s.Zu)return xe().add(s.key);{let r=xe();const i=n.na.get(e);if(!i)return r;for(const o of i){const a=n.ea.get(o);r=r.unionWith(a.view.Ku)}return r}}function yR(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hR.bind(null,e),e.ta.Qo=eR.bind(null,e.eventManager),e.ta.fa=tR.bind(null,e.eventManager),e}function vR(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dR.bind(null,e),e}class wR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ra(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return gA(this.persistence,new dA,e.initialUser,this.M)}wa(e){return new AA(Fu.zi,this.M)}_a(e){return new NA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _R{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Td(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gR.bind(null,this.syncEngine),await YA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new XA}createDatastore(e){const n=Ra(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new DA(r));var r;return function(i,o,a,l){return new UA(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Td(this.syncEngine,a,0),o=_d.vt()?new _d:new xA,new $A(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,c){const u=new oR(s,r,i,o,a,l);return c&&(u.ha=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);G("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await $i(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=wy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ju(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function TR(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Hy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SR(t);G("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>bd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bd(e.remoteStore,i)),t.onlineComponents=e}async function SR(t){return t.offlineComponents||(G("FirestoreClient","Using default OfflineComponentProvider"),await TR(t,new wR)),t.offlineComponents}async function av(t){return t.onlineComponents||(G("FirestoreClient","Using default OnlineComponentProvider"),await IR(t,new _R)),t.onlineComponents}function CR(t){return av(t).then(e=>e.syncEngine)}async function Sd(t){const e=await av(t),n=e.eventManager;return n.onListen=aR.bind(null,e.syncEngine),n.onUnlisten=cR.bind(null,e.syncEngine),n}const Cd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e,n){if(!n)throw new q(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kR(t,e,n,s){if(e===!0&&s===!0)throw new q(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kd(t){if(!Q.isDocumentKey(t))throw new q(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ad(t){if(Q.isDocumentKey(t))throw new q(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pa(t);throw new q(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rd({}),this._settingsFrozen=!1,e instanceof Qs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new q(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(r.options.projectId)}(e))}get app(){if(!this._app)throw new q(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WC;switch(n.type){case"gapi":const s=n.client;return ke(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new XC(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new q(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cd.get(e);n&&(G("ComponentProvider","Removing Datastore"),Cd.delete(e),n.terminate())}(this),Promise.resolve()}}function AR(t,e,n,s={}){var r;const i=(t=Hr(t,Oa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Jl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=nt.MOCK_USER;else{o=xE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new q(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(l)}t._authCredentials=new GC(new vy(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class yr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class kn extends yr{constructor(e,n,s){super(e,n,Nu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Q(e))}withConverter(e){return new kn(this.firestore,e,this._path)}}function fN(t,e,...n){if(t=pt(t),lv("collection","path",e),t instanceof Oa){const s=Ne.fromString(e,...n);return Ad(s),new kn(t,null,s)}{if(!(t instanceof vt||t instanceof kn))throw new q(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return Ad(s),new kn(t.firestore,null,s)}}function RR(t,e,...n){if(t=pt(t),arguments.length===1&&(e=wy.R()),lv("doc","path",e),t instanceof Oa){const s=Ne.fromString(e,...n);return kd(s),new vt(t,null,new Q(s))}{if(!(t instanceof vt||t instanceof kn))throw new q(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return kd(s),new vt(t.firestore,t instanceof kn?t.converter:null,new Q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Ky(this,"async_queue_retry"),this.qa=()=>{const n=dl();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=dl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new ns;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Ui(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(s=>{this.$a=s,this.Ba=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Pn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ba=!1,s))));return this.ka=n,n}enqueueAfterDelay(e,n,s){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const r=qu.createAndSchedule(this,e,n,s,i=>this.ja(i));return this.Fa.push(r),r}Ka(){this.$a&&se()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function Nd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class zo extends Oa{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new NR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||uv(this),this._firestoreClient.terminate()}}function xR(t=Fg()){return Hc(t,"firestore").getImmediate()}function cv(t){return t._firestoreClient||uv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uv(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new sk(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ER(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tr(Ze.fromBase64String(e))}catch(n){throw new q(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tr(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=/^__.*__$/;class OR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Li(e,this.data,this.fieldMask,n,this.fieldTransforms):new ka(e,this.data,n,this.fieldTransforms)}}function fv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Gu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new Gu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Za({path:s,ec:!1});return r.nc(e),r}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Za({path:s,ec:!1});return r.Ya(),r}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Ko(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(fv(this.Xa)&&PR.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class DR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||Ra(e)}ac(e,n,s,r=!1){return new Gu({Xa:e,methodName:n,uc:s,path:dt.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function dv(t){const e=t._freezeSettings(),n=Ra(t._databaseId);return new DR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LR(t,e,n,s,r,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,r);mv("Data must be an object, but it was:",o,s);const a=pv(s,o);let l,c;if(i.merge)l=new Zl(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=UR(e,h,n);if(!o.contains(f))throw new q(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$R(u,f)||u.push(f)}l=new Zl(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new OR(new Pt(a),l,c)}function MR(t,e,n,s=!1){return Yu(n,t.ac(s?4:3,e))}function Yu(t,e){if(gv(t=pt(t)))return mv("Unsupported field value:",e,t),pv(t,e);if(t instanceof hv)return function(n,s){if(!fv(s.Xa))throw s.rc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.rc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Yu(o,s.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Tk(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=it.fromDate(n);return{timestampValue:jo(s.M,r)}}if(n instanceof it){const r=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jo(s.M,r)}}if(n instanceof Wu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof tr)return{bytesValue:$y(s.M,n._byteString)};if(n instanceof vt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Du(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.rc(`Unsupported field value: ${Pa(n)}`)}(t,e)}function pv(t,e){const n={};return _y(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(s,r)=>{const i=Yu(r,e.tc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function gv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Wu||t instanceof tr||t instanceof vt||t instanceof hv)}function mv(t,e,n){if(!gv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Pa(n);throw s==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+s)}}function UR(t,e,n){if((e=pt(e))instanceof Ku)return e._internalPath;if(typeof e=="string")return yv(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const FR=new RegExp("[~\\*/\\[\\]]");function yv(t,e,n){if(e.search(FR)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ku(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new q(k.INVALID_ARGUMENT,a+t+l)}function $R(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Da("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BR extends vv{data(){return super.data()}}function Da(t,e){return typeof e=="string"?yv(t,e):e instanceof Ku?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wv extends vv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Da("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class uo extends wv{data(e={}){return super.data(e)}}class VR{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new xr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new uo(this._firestore,this._userDataWriter,s.key,s,new xr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:qR(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){if(Bo(t)&&t.explicitOrderBy.length===0)throw new q(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _v{}function dN(t,...e){for(const n of e)t=n._apply(t);return t}class HR extends _v{constructor(e,n,s){super(),this.lc=e,this.fc=n,this.dc=s,this.type="where"}_apply(e){const n=dv(e.firestore),s=function(r,i,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new q(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Pd(u,c);const p=[];for(const m of u)p.push(xd(a,r,m));h={arrayValue:{values:p}}}else h=xd(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Pd(u,c),h=MR(o,i,u,c==="in"||c==="not-in");const f=ht.create(l,c,h);return function(p,m){if(m.S()){const w=Pu(p);if(w!==null&&!w.isEqual(m.field))throw new q(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${m.field.toString()}'`);const E=xu(p);E!==null&&bv(p,m.field,E)}const T=function(w,E){for(const N of w.filters)if(E.indexOf(N.op)>=0)return N.op;return null}(p,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(T!==null)throw T===m.op?new q(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new q(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${T.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.lc,this.fc,this.dc);return new yr(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new pr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function pN(t,e,n){const s=e,r=Da("where",t);return new HR(r,s,n)}class zR extends _v{constructor(e,n){super(),this.lc=e,this._c=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new q(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Fs(r,i);return function(a,l){if(xu(a)===null){const c=Pu(a);c!==null&&bv(a,c,l.field)}}(s,o),o}(e._query,this.lc,this._c);return new yr(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new pr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function gN(t,e="asc"){const n=e,s=Da("orderBy",t);return new zR(s,n)}function xd(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new q(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sy(e)&&n.indexOf("/")!==-1)throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ne.fromString(n));if(!Q.isDocumentKey(s))throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return nd(t,new Q(s))}if(n instanceof vt)return nd(t,n._key);throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pa(n)}.`)}function Pd(t,e){if(!Array.isArray(t)||t.length===0)throw new q(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new q(k.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function bv(t,e,n){if(!n.isEqual(e))throw new q(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{convertValue(e,n="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const s={};return fr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Wu(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ey(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const n=On(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ne.fromString(e);ke(jy(s));const r=new Qs(s.get(1),s.get(3)),i=new Q(s.popFirst(5));return r.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Ev extends KR{constructor(e){super(),this.firestore=e}convertBytes(e){return new tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function mN(t,e){const n=Hr(t.firestore,zo),s=RR(t),r=WR(t.converter,e);return GR(n,[LR(dv(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,$s.exists(!1))]).then(()=>s)}function yN(t,...e){var n,s,r;t=pt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Nd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof vt)c=Hr(t.firestore,zo),u=Nu(t._key.path),l={next:h=>{e[o]&&e[o](YR(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Hr(t,yr);c=Hr(h.firestore,zo),u=h._query;const f=new Ev(c);l={next:p=>{e[o]&&e[o](new VR(c,f,h,p))},error:e[o+1],complete:e[o+2]},jR(t._query)}return function(h,f,p,m){const T=new bR(m),w=new nR(f,T,p);return h.asyncQueue.enqueueAndForget(async()=>JA(await Sd(h),w)),()=>{T.Ia(),h.asyncQueue.enqueueAndForget(async()=>ZA(await Sd(h),w))}}(cv(c),u,a,l)}function GR(t,e){return function(n,s){const r=new ns;return n.asyncQueue.enqueueAndForget(async()=>uR(await CR(n),s,r)),r.promise}(cv(t),e)}function YR(t,e,n){const s=n.docs.get(e._key),r=new Ev(t);return new wv(t,r,e._key,s,new xr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){hr=n})(wi),Ks(new os("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new zo(r,new YC(n.getProvider("auth-internal")),new ZC(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Cn(Jf,"3.4.8",t),Cn(Jf,"3.4.8","esm2017")})();const QR={apiKey:"AIzaSyC6PFc1B5DPTgESueGZ9JSTBbnHdWoMrWI",authDomain:"baji-firebase-learning.firebaseapp.com",databaseURL:"https://baji-firebase-learning.firebaseio.com",projectId:"baji-firebase-learning",storageBucket:"baji-firebase-learning.appspot.com",messagingSenderId:"167045327952",appId:"1:167045327952:web:95e4db439e2bf9ebd5f555",measurementId:"G-90C8T90JGH"};NT().length===0&&RT(QR);const XR=xR(),Pr=DS();location.hostname==="localhost"&&(AR(XR,"localhost",8080),uI(Pr,"http://localhost:9099"));const JR=Xr("h3",null,"Fireblogs",-1),ZR={class:"wrapper"},eN=na("Home"),tN=na("Blogs"),nN=na("Logout"),sN={setup(t){const e=ym();II(Pr,s=>{e.setUser(s);const r=Rr.currentRoute._rawValue;!Pr.currentUser&&!r.meta.public?Rr.replace({path:"/login"}):Pr.currentUser&&r.meta.onlyNotLoggedIn&&Rr.replace({path:"/"})});const n=()=>{SI(Pr).then(()=>{Rr.push("/login")}).catch(s=>{console.log(s)})};return(s,r)=>(mo(),i_(St,null,[Xr("header",null,[JR,Xr("div",ZR,[tn(e).isLoggedIn?(mo(),Pc(T0,{key:0,class:"navigation",align:"left",position:"top","no-pane-border":""},{default:Sr(()=>[qe(Ka,{to:"/"},{default:Sr(()=>[eN]),_:1}),qe(Ka,{to:"/blogs"},{default:Sr(()=>[tN]),_:1}),qe(Ka,{onClick:n},{default:Sr(()=>[nN]),_:1})]),_:1})):Lp("",!0)])]),qe(tn(Vc))],64))}};const La=zp(sN);La.use(Z_());La.use(Rr);La.use(Pb,{plugins:{Notify:d0}});La.mount("#app");export{oN as $,Mw as A,Hn as B,qt as C,_p as D,wp as E,qs as F,_n as G,Rn as H,Jp as I,rg as J,xn as K,ag as L,tg as M,Xp as N,Lr as O,kb as P,i0 as Q,cN as R,Ns as S,Dc as T,rb as U,fN as V,dN as W,gN as X,pN as Y,yN as Z,St as _,qe as a,tn as a0,XR as a1,Pc as a2,iN as a3,mN as a4,Xr as b,i_ as c,Pr as d,Rr as e,aN as f,na as g,hN as h,z as i,jt as j,lN as k,xt as l,on as m,Wt as n,mo as o,Mc as p,Mn as q,$e as r,uN as s,Uc as t,ym as u,W as v,Sr as w,Db as x,db as y,Lc as z};
