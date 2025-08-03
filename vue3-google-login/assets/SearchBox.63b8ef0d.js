import{I as y,j as L,J as P,_ as E,f as N,p as D,u as R,o as p,c as d,K as U,$ as z,a as m,D as b,X as k,F as G,l as I,m as A,O as H,t as v,a0 as M}from"./app.47dc43ac.js";const ne={},B=[{path:"/",title:"",pathLocale:"/",contents:[{header:"Vue 3 Google Login",content:""},{header:"Overview",slug:"overview",content:`This is a lightweight plugin to implement log-in and sign-up flows using Google Identity Services with the help of Google 3P Authorization JavaScript Library
This allows you to implement the following features Login with Google button
Login using One Tap prompt
Automatic Login without any user interaction
Login with Google using a custom button`},{header:"Prerequisites",slug:"prerequisites",content:`This plugin needs vue version 3.0.3 or above to work properly
To enable Login With Google on your website, you first need to set up your Google API client ID. To do so, follow these steps
For testing in local evironment, you need to add http://localhost and http://localhost:<port_number> to the Authorized JavaScript origins`},{header:"Basic Setup",slug:"basic-setup",content:""},{header:"Installation",slug:"installation",content:`Installation via NPM
npm install vue3-google-login
Installation via Yarn
yarn add vue3-google-login
Installation via CDN
If you prefer to use vue3-google-login via a CDN, you can include the following script in your HTML file:
<script src="https://cdn.jsdelivr.net/npm/vue3-google-login@2.0.31/dist/index.umd.min.js"><\/script>`},{header:"Initialize the plugin",slug:"initialize-the-plugin",content:`Initialize the vue3-google-login plugin in main.js, this will register a component GoogleLogin globally
import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login' const app = createApp(App) app.use(vue3GoogleLogin, { clientId: 'YOUR_GOOGLE_CLIENT_ID'
}) app.mount('#app') \u{1F4A1} If you dont want to initialize and register GoogleLogin component, you can directly import this from vue3-google-login package and use the client-id prop, also some functions accepts a clientId option which can be used to avoid initializing the plugin, see here for more info`},{header:"GoogleLogin component",slug:"googlelogin-component",content:`Once the plugin is installed you can use the component GoogleLogin anywhere in your project, this will render a log in button which opens a popup for Google login
<script setup>
const callback = (response) => { // This callback will be triggered when the user selects or login to // his Google account from the popup console.log("Handle the response", response)
}
<\/script> <template> <GoogleLogin :callback="callback"/>
</template>
Here is an image showing log in button rendered by Google`},{header:"One Tap prompt",slug:"one-tap-prompt",content:`For this feature set the prop prompt to true, this will open a prompt with the list of logged in Google accounts of the user, now user can just tap on his prefered account to easily login to your application
<script setup>
const callback = (response) => { // This callback will be triggered when user click on the One Tap prompt // This callback will be also triggered when user click on login button // and selects or login to his Google account from the popup console.log("Handle the response", response)
}
<\/script> <template> <GoogleLogin :callback="callback" prompt/>
</template>
Or use googleOneTap function
<script setup>
import { onMounted } from "vue"
import { googleOneTap } from "vue3-google-login" onMounted(() => { googleOneTap() .then((response) => { // This promise is resolved when user selects an account from the the One Tap prompt console.log("Handle the response", response) }) .catch((error) => { console.log("Handle the error", error) })
}) <\/script> <template> <div>One-Tap prompt will be shown once this component is mounted</div>
</template> \u2139\uFE0F If the user closes the One Tap prompt manually, the One Tap prompt will be suppressed, see here for more info Here is an image showing One Tap prompt`},{header:"Use of googleLogout function",slug:"use-of-googlelogout-function",content:`While using One-tap feature, a dead-loop UX issue may occur. To resolve this issue, in your logout function run googleLogout funtion
import { googleLogout } from "vue3-google-login"
const yourLogoutFunction = () => { // your logout logics googleLogout()
} \u2757 Function googleLogout is used to temporarily disable One Tap Automatic sign-in for one day. This API does not sign out your users out of your website or any Google websites.`},{header:"Automatic Login",slug:"automatic-login",content:`To enable this feature, set the prop autoLogin to true, this will automatically detects whether only one Google account is logged in, if yes then prompt will automatically log in and will trigger the callback without any user interactions, to make this work prompt must be set to true
<script setup>
const callback = (response) => { // This callback will be triggered automatically // if one single Google account is already logged in console.log("Handle the response", response)
}
<\/script> <template> <GoogleLogin :callback="callback" prompt auto-login/>
</template>
Or use googleOneTap function and set autoLogin option to true
<script setup>
import { onMounted } from "vue"
import { googleOneTap } from "vue3-google-login" onMounted(() => { googleOneTap({ autoLogin: true }) .then((response) => { // This promise is resolved when user selects an account from the the One Tap prompt console.log("Handle the response", response) }) .catch((error) => { console.log("Handle the error", error) })
})
<\/script> <template> <div>One-Tap prompt will be shown once this component is mounted</div>
</template> Here is an image showing how the prompt detects the logged in Google account and logs in automatically`},{header:"Get User Data",slug:"get-user-data",content:`In the triggered callback after login you will get a JWT credential string which can be decoded using decodeCredential function to retrive users basic data
<script setup>
import { decodeCredential } from 'vue3-google-login'
const callback = (response) => { // decodeCredential will retrive the JWT payload from the credential const userData = decodeCredential(response.credential) console.log("Handle the userData", userData)
}
<\/script> <template> <GoogleLogin :callback="callback" prompt auto-login/>
</template> \u2757 You cannot use decodeCredential function to retrive user data when you are using Custom Login Button, because it doesn't give a JWT credential, instead it gives an authorization code or access token, see here for more info`},{header:"Custom Login Button",slug:"custom-login-button",content:`\u2757 For custom buttons this plugin use google.accounts.oauth2.initCodeClient and google.accounts.oauth2.initTokenClient under the hoods which gives OAuth2 authorization code and Access Token respectively in the callback response, but Google rendered login button and One Tap prompt gives a CredentialResponse with a JWT credential field, so if you are using a combination of these, validating your callback response on server-side can be a little tricky, this is more explained here Some times you may not need the default button rendered by Google, you can create your own button and can make it behave like a login with Google button
This can be done in three ways`},{header:"Custom Button As Slot",slug:"custom-button-as-slot",content:`Create your own button component and keep it inside GoogleLogin component, default slot content of GoogleLogin component is considered as a custom login button and it will act as a login with Google button
<script setup>
const callback = (response) => { console.log("Handle the response", response)
}
<\/script> <template> <GoogleLogin :callback="callback"> <button>Login Using Google</button> </GoogleLogin>
</template> \u{1F4A1} By default this will give Auth code in response, you can use the prop popup-type="TOKEN" to get Access Token instead`},{header:"googleAuthCodeLogin function",slug:"googleauthcodelogin-function",content:`You can use googleAuthCodeLogin function to dynamically trigger the opening of login popup, response will have an OAuth2 authorization code
<script setup>
import { googleAuthCodeLogin } from "vue3-google-login"
const login = () => { googleAuthCodeLogin().then((response) => { console.log("Handle the response", response) })
}
<\/script> <template> <button @click="login">Login Using Google</button>
</template>`},{header:"googleTokenLogin function",slug:"googletokenlogin-function",content:`Just like googleAuthCodeLogin function you can use googleTokenLogin function to trigger the opening of login popup that gives an Access Token instead of an Auth code
<script setup>
import { googleTokenLogin } from "vue3-google-login"
const login = () => { googleTokenLogin().then((response) => { console.log("Handle the response", response) })
}
<\/script> <template> <button @click="login">Login Using Google</button>
</template>
Here is an image showing how a custom button opens the Google login popup`},{header:"Using Google SDK",slug:"using-google-sdk",content:`If you want to directly use the API provided by Google Identity Services JavaScript SDK without even initializing the plugin, you can use googleSdkLoaded wrapper function to do that. This will run an action in which you can use the API directly, and under the hoods it will make sure that this action is performed only after the SDK library is fully loaded.
Here is an example showing how we can use googleSdkLoaded wrapper function to create a custom login button
<script setup>
import { googleSdkLoaded } from "vue3-google-login"
const login = () => { googleSdkLoaded((google) => { google.accounts.oauth2.initCodeClient({ client_id: '352931034399-ht1i7mqefgrbsn67a4b1nm991bvat47l.apps.googleusercontent.com', scope: 'email profile openid', callback: (response) => { console.log("Handle the response", response) } }).requestCode() })
}
<\/script> <template> <button @click="login">Login Using Google</button>
</template> \u{1F4A1} You can find the docs on how to use this SDK here and here`},{header:"TypeScript",slug:"typescript",content:"If you are using Vue 3 with TypeScript you may need to add type to the callback function triggered by GoogleLogin component, you can do this by importing CallbackTypes \u26A0\uFE0F If you are trying to implement a custom button and one-tap login using GoogleLogin component alone like this, you cannot add type to the callback instead you can add any type to the callback response or the recomended way is to implement this using googleOneTap and googleAuthCodeLogin/googleTokenLogin funtions"},{header:"CredentialCallback",slug:"credentialcallback",content:`Use CredentialCallback type for the callback of Google rendered login button using GoogleLogin component, you can also use this type for the callback from One-Tap/Automatic Login prompts
<script setup lang="ts">
import type { CallbackTypes } from "vue3-google-login";
const callback: CallbackTypes.CredentialCallback = (response) => { // This callback will be triggered when the user selects or login to // his Google account from the popup console.log("Credential JWT string", response.credential);
};
<\/script> <template> <GoogleLogin :callback="callback" />
</template>`},{header:"CodeResponseCallback",slug:"coderesponsecallback",content:`Use CodeResponseCallback type for the callback trigered by GoogleLogin component when a custom button is kept as slot
<script setup lang="ts">
import type { CallbackTypes } from "vue3-google-login";
const callback: CallbackTypes.CodeResponseCallback = (response) => { console.log("Authorisation code", response.code);
};
<\/script> <template> <GoogleLogin :callback="callback"> <button>Login Using Google</button> </GoogleLogin>
</template>`},{header:"TokenResponseCallback",slug:"tokenresponsecallback",content:`Use TokenResponseCallback type for the callback trigered by GoogleLogin component when a custom button is kept as slot and popup-type prop is set to TOKEN
<script setup lang="ts">
import type { CallbackTypes } from "vue3-google-login";
const callback: CallbackTypes.TokenResponseCallback = (response) => { console.log("Access token", response.access_token);
};
<\/script> <template> <GoogleLogin :callback="callback" popup-type="TOKEN"> <button>Login Using Google</button> </GoogleLogin>
</template>`},{header:"Server-side Validation",slug:"server-side-validation",content:"Once the callback is triggered you need to validate the callback response using your Server-side endpoints, but this is done differently for the callback triggered by Google rendered login button/One Tap prompts and callback triggered by Custom Login Button"},{header:"Google rendered login button/One Tap prompts",slug:"google-rendered-login-button-one-tap-prompts",content:`Callback will be triggered with a CredentialResponse with a JWT credential string
Here is a sample Node.js code snippet for validating the JWT credential string
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("YOUR_GOOGLE_CLIENT_ID") // Call this function to validate the JWT credential sent from client-side
async function verifyCredentials(credential) { const ticket = await client.verifyIdToken({ idToken: credential, }) const payload = ticket.getPayload() return payload
} verifyCredentials('JWT_CREDENTIAL_STRING_FROM_CLIENT_SIDE').then((userInfo) => { // use userInfo and do your server-side logics here
}).catch((error) => { // validation failed and userinfo was not obtained
})`},{header:"Custom Login Button",slug:"custom-login-button-1",content:""},{header:"Validating Auth Code",slug:"validating-auth-code",content:`If you are using googleAuthCodeLogin function or google.accounts.oauth2.initCodeClient, the response you get on successfull login contains an OAuth2 authorization code
Here is a sample Node.js code snippet for validating this OAuth2 authorization code from the response
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client( { clientId: 'YOUR_GOOGLE_CLIENT_ID', clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET', redirectUri: 'YOUR_GOOGLE_REDIRECT_URI' }
) // Call this function to validate OAuth2 authorization code sent from client-side
async function verifyCode(code) { let { tokens } = await client.getToken(code) client.setCredentials({ access_token: tokens.access_token }) const userinfo = await client.request({ url: 'https://www.googleapis.com/oauth2/v3/userinfo' }) return userinfo.data
} verifyCode('AUTHORIZATION_CODE_FROM_CLIENT_SIDE').then((userInfo) => { // use userInfo and do your server-side logics here
}).catch((error) => { // validation failed and userinfo was not obtained
})`},{header:"Validating Access Token",slug:"validating-access-token",content:`If you are using googleTokenLogin function or google.accounts.oauth2.initTokenClient, the response you get on successfull login contains an Access Token
Here is a sample Node.js code snippet for validating this Access Token from the response
const { OAuth2Client } = require("google-auth-library")
const client = new OAuth2Client() // Call this function to validate OAuth2 authorization code sent from client-side
async function verifyToken(token) { client.setCredentials({ access_token: token }) const userinfo = await client.request({ url: "https://www.googleapis.com/oauth2/v3/userinfo", }); return userinfo.data
} verifyToken("ACCESS_TOKEN_FROM_CLIENT_SIDE") .then((userInfo) => { console.log(userInfo) }) .catch((error) => { console.log(error) })`},{header:"Combination of One Tap Prompt and Custom Button",slug:"combination-of-one-tap-prompt-and-custom-button",content:`If you are using the combination of these like below, then the response caught in callback function can be different based on the user action, you can handle this by making serverside endpoints which accepts both type of responses and in callback function conditionally call these endpoints
<script setup>
const callback = (response) => { if(response.credential) { console.log("Call the endpoint which validates JWT credential string") } else { console.log("Call the endpoint which validates authorization code") }
}
<\/script> <template> <GoogleLogin :callback="callback" prompt auto-login> <button>Add</button> </GoogleLogin>
</template>`},{header:"Nuxt 3",slug:"nuxt-3",content:""},{header:"Initialize vue3-google-login inside the plugins directory",slug:"initialize-vue3-google-login-inside-the-plugins-directory",content:`For example, create a file named vue3-google-login.client.ts and place it inside the plugins directory, this will register GoogleLogin component globally \u2757 Make sure to use .client suffix in the file name to load the plugin only on the client side. // plugins/vue3-google-login.client.ts
import vue3GoogleLogin from 'vue3-google-login' export default defineNuxtPlugin((nuxtApp) => { nuxtApp.vueApp.use(vue3GoogleLogin, { clientId: 'YOUR_GOOGLE_CLIENT_ID' })
});`},{header:"No SSR support",slug:"no-ssr-support",content:"The GoogleLogin component doesn't render properly on the server side because the Google login button relies on an iframe button provided by Google and needs the Google 3P Authorization JavaScript Library to be loaded on the client side. So, if you are using SSR-supporting frameworks like Nuxt 3 or Quasar, make sure the GoogleLogin component is rendered on the client side. \u{1F4A1} You can also directly import the GoogleLogin component and utilize the client-id prop if you don't wish to initialize the plugin at the framework entry point and register the GoogleLogin component globally."},{header:"Nuxt 3",slug:"nuxt-3-1",content:'On Nuxt 3 application, wrap the GoogleLogin component in the ClientOnly component, which is used for purposely rendering a component only on client side. <ClientOnly> <GoogleLogin :callback="callback" client-id="YOUR_GOOGLE_CLIENT_ID"/> </ClientOnly>'},{header:"Quasar in SSR mode",slug:"quasar-in-ssr-mode",content:'You can use QNoSsr component for rendering the login button on client side while running a Quasar app on SSR mode. <q-no-ssr> <GoogleLogin :callback="callback" client-id="YOUR_GOOGLE_CLIENT_ID"/> </q-no-ssr>'},{header:"Vike",slug:"vike",content:`In Vike applications, you can use the clientOnly helper, which is used for purposely rendering a component only on client side.
<template> <GoogleLogin :callback="callback" client-id="YOUR_GOOGLE_CLIENT_ID"/>
</template> <script setup lang="ts">
import { clientOnly } from 'vike-vue/clientOnly'
const GoogleLogin = clientOnly(async () => (await import('vue3-google-login')).GoogleLogin);
<\/script>`},{header:"Options",slug:"options",content:""},{header:"Plugin options and GoogleLogin component props",slug:"plugin-options-and-googlelogin-component-props",content:`Options of plugin used at initializing in main.js and prop values in GoogleLogin component are similar. Name
Type
Description clientId
String
Google API client ID prompt
Boolean
Set this to true to display the One Tap promptSetting this value as a prop of GoogleLogin component will be ignored if this is set as option on initializing the plugin autoLogin
Boolean
Setting this value to true will make the prompt to automatically log in without any user interactionsFor this to work prompt must be set to trueSetting this value as a prop of GoogleLogin component will be ignored if this is set as option on initializing the plugin popupType
String
Type of callback response, accepts either CODE or TOKEN, this only works if a custom button is added as a slot button callback
Function
The callback function which will be trigger with a response object once the login is completed error
Function
An error function which will be triggered on any error encountered while showing the prompts/popups idConfiguration
Object
IdConfiguration object for initializing, see list of fields and descriptions of the IdConfiguration here buttonConfig
Object
Configuration of the login button rendered by Google, see list of fields and descriptions of these configurations here`},{header:"Function googleOneTap",slug:"function-googleonetap",content:`googleOneTap function accepts the following options Name
Type
Description clientId
String
Google API client ID context
String
The title and words in the One Tap prompt, this can be signin|signup|use see here for more info autoLogin
Boolean
Set this to true if you want the one-tap promt to automatically login cancelOnTapOutside
Boolean
Controls whether to cancel the prompt if the user clicks outside of the prompt`},{header:"Function googleAuthCodeLogin and googleTokenLogin",slug:"function-googleauthcodelogin-and-googletokenlogin",content:`googleAuthCodeLogin and googleTokenLogin functions accepts an object with client id, this is useful if you are not planning to initialize the plugin in main.js Name
Type
Description clientId
String
Google API client ID`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],x="update-vuepress-plugin-full-text-search2-search-index";var C=y(B),j=L(()=>{const e=new Map;for(const o of C.value)e.set(o.path,o);return e});ne.webpackHot&&(__VUE_HMR_RUNTIME__[x]=e=>{C.value=e});function F(e){const o=y([]);let a=null;return P(e,()=>{a&&clearTimeout(a),a=setTimeout(i,100)}),o;function i(){const u=e.value.toLowerCase().trim();if(!u){o.value=[];return}const l=new Map,c=new Set;for(const t of C.value)for(const s of J(t,u)){c.add(s.parentPageTitle);let r=l.get(s.parentPageTitle);r||(r=[],l.set(s.parentPageTitle,r)),r.push(s)}const n=[...c].sort((t,s)=>{const r=l.get(t);return l.get(s).length-r.length});o.value=[...l].flatMap(([,t])=>t).sort((t,s)=>t.parentPagePriority-s.parentPagePriority||n.indexOf(t.parentPageTitle)-n.indexOf(s.parentPageTitle)||t.priority-s.priority)}}function*J(e,o){const a=T(e.title,o);if(a){yield{path:e.path,parentPageTitle:w(e),title:e.title,display:a,page:e,content:null,parentPagePriority:1,priority:1};return}for(const i of e.contents){const u=T(i.header,o);if(u){yield{path:e.path+(i.slug?`#${i.slug}`:""),parentPageTitle:w(e),title:e.title,display:u,page:e,content:null,parentPagePriority:10,priority:2};continue}const l=T(i.content,o);l&&(yield{path:e.path+(i.slug?`#${i.slug}`:""),parentPageTitle:w(e),title:e.title,display:[{type:"header",str:`${i.header}
`},...l],page:e,content:null,parentPagePriority:10,priority:10})}}function w(e){const o=e.path.split("/");let a="/";return o[1]&&(a=`/${o[1]}/`),(j.value.get(a)||e).title}function T(e,o){const a=[];let i=0;const u=e.toLowerCase().replace(/\s/gu," ");let l=0,c=u.indexOf(o,l);if(c<0)return null;for(;c>=0;){const t=c+o.length;if(n(e.slice(l,c),"normal"),n(e.slice(c,t),"highlight"),l=t,c=u.indexOf(o,l),i>100)break}return n(e.slice(l),"normal"),a.filter(t=>t.str);function n(t,s){let r=t;s==="normal"&&r.length>100&&i===0&&(r=`\u2026 ${r.slice(-10)}`);let h=!1;if(i+r.length>100){if(a.some(f=>f.type==="ellipsis"))return;r=r.slice(0,Math.max(100-i,1)),h=!0}a.push({type:s,str:r}),i+=r.length,h&&(a.push({type:"ellipsis",str:" \u2026"}),i+=2)}}const Y={},$=N({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>Y}},setup(e){const{locales:o}=D(e),a=y(""),i=y(!1),u=y(-1),l=F(a),c=L(()=>a.value&&i.value&&l.value.length),n=H(),t=R(),s=L(()=>{var g;return(g=o.value[t.value])!=null?g:{}});function r(){if(!c.value)return;let g=u.value-1;g<0&&(g=l.value.length-1),f(g)}function h(){if(!c.value)return;let g=u.value+1;g>=l.value.length&&(g=0),f(g)}function f(g){u.value=g}function S(){u.value=-1}function _(g){if(!c.value)return;const O=l.value[g];O&&n.push(O.path)}return{query:a,focused:i,focusIndex:u,suggestions:l,activeSuggestion:c,onUp:r,onDown:h,focus:f,unfocus:S,go:_,locale:s}}}),q={class:"search-box",role:"search"},K=["placeholder"],W=["onMousedown","onMouseenter"],V=["href"],Q={key:0,class:"parent-page-title"},X={class:"suggestion-row"},Z={class:"page-title"},ee={class:"suggestion-content"};function oe(e,o,a,i,u,l){var c;return p(),d("div",q,[U(m("input",{ref:"input","onUpdate:modelValue":o[0]||(o[0]=n=>e.query=n),"aria-label":"Search",class:b({focused:e.focused}),placeholder:(c=e.locale.placeholder)!=null?c:"Search",autocomplete:"off",spellcheck:"false",onFocus:o[1]||(o[1]=()=>e.focused=!0),onBlur:o[2]||(o[2]=()=>e.focused=!1),onKeyup:[o[3]||(o[3]=k(n=>e.go(e.focusIndex),["enter"])),o[4]||(o[4]=k((...n)=>e.onUp&&e.onUp(...n),["up"])),o[5]||(o[5]=k((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,K),[[z,e.query]]),e.activeSuggestion?(p(),d("ul",{key:0,class:"suggestions",onMouseleave:o[7]||(o[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(p(!0),d(G,null,I(e.suggestions,(n,t)=>(p(),d("li",{key:t,class:b(["suggestion",{focused:t===e.focusIndex}]),onMousedown:s=>e.go(t),onMouseenter:s=>e.focus(t)},[m("a",{href:n.path,onClick:o[6]||(o[6]=M(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[t-1]||e.suggestions[t-1].parentPageTitle!==n.parentPageTitle)?(p(),d("div",Q,v(n.parentPageTitle),1)):A("",!0),m("div",X,[m("div",Z,v(n.title||n.path),1),m("div",ee,[(p(!0),d(G,null,I(n.display,(s,r)=>(p(),d("span",{key:r,class:b(s.type)},v(s.str),3))),128))])])],8,V)],42,W))),128))],32)):A("",!0)])}var ie=E($,[["render",oe],["__scopeId","data-v-5cdeda06"],["__file","SearchBox.vue"]]);export{ie as default};
