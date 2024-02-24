import{I as b,j as L,J as _,_ as E,f as D,p as R,O as U,u as N,o as p,c as d,K as H,$ as B,a as m,D as y,X as k,F as G,l as I,m as A,t as w,a0 as M}from"./app.693af8bb.js";const te={},z=[{path:"/",title:"",pathLocale:"/",contents:[{header:"Vue 3 Google Login",content:""},{header:"Overview",slug:"overview",content:`This is a lightweight plugin to implement log-in and sign-up flows using Google Identity Services with the help of Google 3P Authorization JavaScript Library
This allows you to implement the following features Login with Google button
Login using One Tap prompt
Automatic Login without any user interaction
Login with Google using a custom button`},{header:"Prerequisites",slug:"prerequisites",content:`This plugin needs vue version 3.0.3 or above to work properly
To enable Login With Google on your website, you first need to set up your Google API client ID. To do so, follow these steps
For testing in local evironment, you need to add http://localhost and http://localhost:<port_number> to the Authorized JavaScript origins`},{header:"Basic Setup",slug:"basic-setup",content:""},{header:"Installation",slug:"installation",content:`First step is to install it using npm
npm install vue3-google-login
Or using yarn
yarn add vue3-google-login`},{header:"Initialize the plugin",slug:"initialize-the-plugin",content:`Initialize the vue3-google-login plugin in main.js, this will register a component GoogleLogin globally
import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login' const app = createApp(App) app.use(vue3GoogleLogin, { clientId: 'YOUR_GOOGLE_CLIENT_ID'
}) app.mount('#app') \u{1F4A1} If you dont want to initialize and register GoogleLogin component, you can directly import this from vue3-google-login package and use the client-id prop, also some functions accepts a clientId option which can be used to avoid initialising the plugin, see here for more info`},{header:"GoogleLogin component",slug:"googlelogin-component",content:`Once the plugin is installed you can use the component GoogleLogin anywhere in your project, this will render a log in button which opens a popup for Google login
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
const yourLogoutFunction() { // your logout logics googleLogout()
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
</template>`},{header:"Options",slug:"options",content:""},{header:"Plugin options and GoogleLogin component props",slug:"plugin-options-and-googlelogin-component-props",content:`Options of plugin used at initializing in main.js and prop values in GoogleLogin component are similar Name
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
Controls whether to cancel the prompt if the user clicks outside of the prompt onNotification
Function
The One Tap prompt might not be displayed is some cases. To get notified on the UI status for different moments, pass a function to onNotification to recive a notification object, see here for more info`},{header:"Function googleAuthCodeLogin and googleTokenLogin",slug:"function-googleauthcodelogin-and-googletokenlogin",content:`googleAuthCodeLogin and googleTokenLogin functions accepts an object with client id, this is useful if you are not planning to initialize the plugin in main.js Name
Type
Description clientId
String
Google API client ID`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],F="update-vuepress-plugin-full-text-search2-search-index";var C=b(z),j=L(()=>{const e=new Map;for(const o of C.value)e.set(o.path,o);return e});te.webpackHot&&(__VUE_HMR_RUNTIME__[F]=e=>{C.value=e});function J(e){const o=b([]);let a=null;return _(e,()=>{a&&clearTimeout(a),a=setTimeout(i,100)}),o;function i(){const u=e.value.toLowerCase().trim();if(!u){o.value=[];return}const s=new Map,c=new Set;for(const n of C.value)for(const l of $(n,u)){c.add(l.parentPageTitle);let r=s.get(l.parentPageTitle);r||(r=[],s.set(l.parentPageTitle,r)),r.push(l)}const t=[...c].sort((n,l)=>{const r=s.get(n);return s.get(l).length-r.length});o.value=[...s].flatMap(([,n])=>n).sort((n,l)=>n.parentPagePriority-l.parentPagePriority||t.indexOf(n.parentPageTitle)-t.indexOf(l.parentPageTitle)||n.priority-l.priority)}}function*$(e,o){const a=T(e.title,o);if(a){yield{path:e.path,parentPageTitle:v(e),title:e.title,display:a,page:e,content:null,parentPagePriority:1,priority:1};return}for(const i of e.contents){const u=T(i.header,o);if(u){yield{path:e.path+(i.slug?`#${i.slug}`:""),parentPageTitle:v(e),title:e.title,display:u,page:e,content:null,parentPagePriority:10,priority:2};continue}const s=T(i.content,o);s&&(yield{path:e.path+(i.slug?`#${i.slug}`:""),parentPageTitle:v(e),title:e.title,display:[{type:"header",str:`${i.header}
`},...s],page:e,content:null,parentPagePriority:10,priority:10})}}function v(e){const o=e.path.split("/");let a="/";return o[1]&&(a=`/${o[1]}/`),(j.value.get(a)||e).title}function T(e,o){const a=[];let i=0;const u=e.toLowerCase().replace(/\s/gu," ");let s=0,c=u.indexOf(o,s);if(c<0)return null;for(;c>=0;){const n=c+o.length;if(t(e.slice(s,c),"normal"),t(e.slice(c,n),"highlight"),s=n,c=u.indexOf(o,s),i>100)break}return t(e.slice(s),"normal"),a.filter(n=>n.str);function t(n,l){let r=n;l==="normal"&&r.length>100&&i===0&&(r=`\u2026 ${r.slice(-10)}`);let h=!1;if(i+r.length>100){if(a.some(f=>f.type==="ellipsis"))return;r=r.slice(0,Math.max(100-i,1)),h=!0}a.push({type:l,str:r}),i+=r.length,h&&(a.push({type:"ellipsis",str:" \u2026"}),i+=2)}}const K={},W=D({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>K}},setup(e){const{locales:o}=R(e),a=b(""),i=b(!1),u=b(-1),s=J(a),c=L(()=>a.value&&i.value&&s.value.length),t=U(),n=N(),l=L(()=>{var g;return(g=o.value[n.value])!=null?g:{}});function r(){if(!c.value)return;let g=u.value-1;g<0&&(g=s.value.length-1),f(g)}function h(){if(!c.value)return;let g=u.value+1;g>=s.value.length&&(g=0),f(g)}function f(g){u.value=g}function S(){u.value=-1}function P(g){if(!c.value)return;const O=s.value[g];O&&t.push(O.path)}return{query:a,focused:i,focusIndex:u,suggestions:s,activeSuggestion:c,onUp:r,onDown:h,focus:f,unfocus:S,go:P,locale:l}}}),q={class:"search-box",role:"search"},V=["placeholder"],Y=["onMousedown","onMouseenter"],x=["href"],X={key:0,class:"parent-page-title"},Z={class:"suggestion-row"},Q={class:"page-title"},ee={class:"suggestion-content"};function oe(e,o,a,i,u,s){var c;return p(),d("div",q,[H(m("input",{ref:"input","onUpdate:modelValue":o[0]||(o[0]=t=>e.query=t),"aria-label":"Search",class:y({focused:e.focused}),placeholder:(c=e.locale.placeholder)!=null?c:"Search",autocomplete:"off",spellcheck:"false",onFocus:o[1]||(o[1]=()=>e.focused=!0),onBlur:o[2]||(o[2]=()=>e.focused=!1),onKeyup:[o[3]||(o[3]=k(t=>e.go(e.focusIndex),["enter"])),o[4]||(o[4]=k((...t)=>e.onUp&&e.onUp(...t),["up"])),o[5]||(o[5]=k((...t)=>e.onDown&&e.onDown(...t),["down"]))]},null,42,V),[[B,e.query]]),e.activeSuggestion?(p(),d("ul",{key:0,class:"suggestions",onMouseleave:o[7]||(o[7]=(...t)=>e.unfocus&&e.unfocus(...t))},[(p(!0),d(G,null,I(e.suggestions,(t,n)=>(p(),d("li",{key:n,class:y(["suggestion",{focused:n===e.focusIndex}]),onMousedown:l=>e.go(n),onMouseenter:l=>e.focus(n)},[m("a",{href:t.path,onClick:o[6]||(o[6]=M(()=>{},["prevent"]))},[t.parentPageTitle&&(!e.suggestions[n-1]||e.suggestions[n-1].parentPageTitle!==t.parentPageTitle)?(p(),d("div",X,w(t.parentPageTitle),1)):A("",!0),m("div",Z,[m("div",Q,w(t.title||t.path),1),m("div",ee,[(p(!0),d(G,null,I(t.display,(l,r)=>(p(),d("span",{key:r,class:y(l.type)},w(l.str),3))),128))])])],8,x)],42,Y))),128))],32)):A("",!0)])}var ie=E(W,[["render",oe],["__scopeId","data-v-5cdeda06"],["__file","SearchBox.vue"]]);export{ie as default};
