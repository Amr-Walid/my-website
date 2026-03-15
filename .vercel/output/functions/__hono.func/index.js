var _t=Object.defineProperty;var ot=e=>{throw TypeError(e)};var Ut=(e,t,a)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var p=(e,t,a)=>Ut(e,typeof t!="symbol"?t+"":t,a),Je=(e,t,a)=>t.has(e)||ot("Cannot "+a);var o=(e,t,a)=>(Je(e,t,"read from private field"),a?a.call(e):t.get(e)),g=(e,t,a)=>t.has(e)?ot("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),h=(e,t,a,r)=>(Je(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),x=(e,t,a)=>(Je(e,t,"access private method"),a);var lt=(e,t,a,r)=>({set _(s){h(e,t,s,a)},get _(){return o(e,t,r)}});import{Http2ServerRequest as Fe}from"http2";import{Readable as ct}from"stream";import zt from"crypto";var dt=(e,t,a)=>(r,s)=>{let n=-1;return i(0);async function i(l){if(l<=n)throw new Error("next() called multiple times");n=l;let c,d=!1,u;if(e[l]?(u=e[l][0][0],r.req.routeIndex=l):u=l===e.length&&s||void 0,u)try{c=await u(r,()=>i(l+1))}catch(f){if(f instanceof Error&&t)r.error=f,c=await t(f,r),d=!0;else throw f}else r.finalized===!1&&a&&(c=await a(r));return c&&(r.finalized===!1||d)&&(r.res=c),r}},Qt=Symbol(),Vt=async(e,t=Object.create(null))=>{const{all:a=!1,dot:r=!1}=t,n=(e instanceof At?e.raw.headers:e.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?Jt(e,{all:a,dot:r}):{}};async function Jt(e,t){const a=await e.formData();return a?Kt(a,t):{}}function Kt(e,t){const a=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?Yt(a,s,r):a[s]=r}),t.dot&&Object.entries(a).forEach(([r,s])=>{r.includes(".")&&(Xt(a,r,s),delete a[r])}),a}var Yt=(e,t,a)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(a):e[t]=[e[t],a]:t.endsWith("[]")?e[t]=[a]:e[t]=a},Xt=(e,t,a)=>{let r=e;const s=t.split(".");s.forEach((n,i)=>{i===s.length-1?r[n]=a:((!r[n]||typeof r[n]!="object"||Array.isArray(r[n])||r[n]instanceof File)&&(r[n]=Object.create(null)),r=r[n])})},vt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Zt=e=>{const{groups:t,path:a}=ea(e),r=vt(a);return ta(r,t)},ea=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(a,r)=>{const s=`@${r}`;return t.push([s,a]),s}),{groups:t,path:e}},ta=(e,t)=>{for(let a=t.length-1;a>=0;a--){const[r]=t[a];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[a][1]);break}}return e},Me={},aa=(e,t)=>{if(e==="*")return"*";const a=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(a){const r=`${e}#${t}`;return Me[r]||(a[2]?Me[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,a[1],new RegExp(`^${a[2]}(?=/${t})`)]:[e,a[1],new RegExp(`^${a[2]}$`)]:Me[r]=[e,a[1],!0]),Me[r]}return null},rt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,a=>{try{return t(a)}catch{return a}})}},ra=e=>rt(e,decodeURI),yt=e=>{const t=e.url,a=t.indexOf("/",t.indexOf(":")+4);let r=a;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const n=t.indexOf("?",r),i=t.indexOf("#",r),l=n===-1?i===-1?void 0:i:i===-1?n:Math.min(n,i),c=t.slice(a,l);return ra(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(s===63||s===35)break}return t.slice(a,r)},sa=e=>{const t=yt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},le=(e,t,...a)=>(a.length&&(t=le(t,...a)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),wt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),a=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){a.length===0&&r===""?a.push("/"):a.push(r);const n=s.replace("?","");r+="/"+n,a.push(r)}else r+="/"+s}),a.filter((s,n,i)=>i.indexOf(s)===n)},Ke=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?rt(e,Et):e):e,kt=(e,t,a)=>{let r;if(!a&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const c=i+t.length+2,d=e.indexOf("&",c);return Ke(e.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let n=e.indexOf("?",8);for(;n!==-1;){const i=e.indexOf("&",n+1);let l=e.indexOf("=",n);l>i&&i!==-1&&(l=-1);let c=e.slice(n+1,l===-1?i===-1?void 0:i:l);if(r&&(c=Ke(c)),n=i,c==="")continue;let d;l===-1?d="":(d=e.slice(l+1,i===-1?void 0:i),r&&(d=Ke(d))),a?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(d)):s[c]??(s[c]=d)}return t?s[t]:s},na=kt,ia=(e,t)=>kt(e,t,!0),Et=decodeURIComponent,ut=e=>rt(e,Et),fe,j,N,Pt,St,et,U,ht,At=(ht=class{constructor(e,t="/",a=[[]]){g(this,N);p(this,"raw");g(this,fe);g(this,j);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});g(this,U,e=>{const{bodyCache:t,raw:a}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(n=>(s==="json"&&(n=JSON.stringify(n)),new Response(n)[e]())):t[e]=a[e]()});this.raw=e,this.path=t,h(this,j,a),h(this,fe,{})}param(e){return e?x(this,N,Pt).call(this,e):x(this,N,St).call(this)}query(e){return na(this.url,e)}queries(e){return ia(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((a,r)=>{t[r]=a}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Vt(this,e))}json(){return o(this,U).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,U).call(this,"text")}arrayBuffer(){return o(this,U).call(this,"arrayBuffer")}blob(){return o(this,U).call(this,"blob")}formData(){return o(this,U).call(this,"formData")}addValidatedData(e,t){o(this,fe)[e]=t}valid(e){return o(this,fe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Qt](){return o(this,j)}get matchedRoutes(){return o(this,j)[0].map(([[,e]])=>e)}get routePath(){return o(this,j)[0].map(([[,e]])=>e)[this.routeIndex].path}},fe=new WeakMap,j=new WeakMap,N=new WeakSet,Pt=function(e){const t=o(this,j)[0][this.routeIndex][1][e],a=x(this,N,et).call(this,t);return a&&/\%/.test(a)?ut(a):a},St=function(){const e={},t=Object.keys(o(this,j)[0][this.routeIndex][1]);for(const a of t){const r=x(this,N,et).call(this,o(this,j)[0][this.routeIndex][1][a]);r!==void 0&&(e[a]=/\%/.test(r)?ut(r):r)}return e},et=function(e){return o(this,j)[1]?o(this,j)[1][e]:e},U=new WeakMap,ht),oa={Stringify:1},jt=async(e,t,a,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const n=e.callbacks;return n!=null&&n.length?(s?s[0]+=e:s=[e],Promise.all(n.map(l=>l({phase:t,buffer:s,context:r}))).then(l=>Promise.all(l.filter(Boolean).map(c=>jt(c,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},la="text/plain; charset=UTF-8",Ye=(e,t)=>({"Content-Type":e,...t}),Se,je,I,he,H,P,Re,pe,ge,te,Ce,De,z,ce,pt,ca=(pt=class{constructor(e,t){g(this,z);g(this,Se);g(this,je);p(this,"env",{});g(this,I);p(this,"finalized",!1);p(this,"error");g(this,he);g(this,H);g(this,P);g(this,Re);g(this,pe);g(this,ge);g(this,te);g(this,Ce);g(this,De);p(this,"render",(...e)=>(o(this,pe)??h(this,pe,t=>this.html(t)),o(this,pe).call(this,...e)));p(this,"setLayout",e=>h(this,Re,e));p(this,"getLayout",()=>o(this,Re));p(this,"setRenderer",e=>{h(this,pe,e)});p(this,"header",(e,t,a)=>{this.finalized&&h(this,P,new Response(o(this,P).body,o(this,P)));const r=o(this,P)?o(this,P).headers:o(this,te)??h(this,te,new Headers);t===void 0?r.delete(e):a!=null&&a.append?r.append(e,t):r.set(e,t)});p(this,"status",e=>{h(this,he,e)});p(this,"set",(e,t)=>{o(this,I)??h(this,I,new Map),o(this,I).set(e,t)});p(this,"get",e=>o(this,I)?o(this,I).get(e):void 0);p(this,"newResponse",(...e)=>x(this,z,ce).call(this,...e));p(this,"body",(e,t,a)=>x(this,z,ce).call(this,e,t,a));p(this,"text",(e,t,a)=>!o(this,te)&&!o(this,he)&&!t&&!a&&!this.finalized?new Response(e):x(this,z,ce).call(this,e,t,Ye(la,a)));p(this,"json",(e,t,a)=>x(this,z,ce).call(this,JSON.stringify(e),t,Ye("application/json",a)));p(this,"html",(e,t,a)=>{const r=s=>x(this,z,ce).call(this,s,t,Ye("text/html; charset=UTF-8",a));return typeof e=="object"?jt(e,oa.Stringify,!1,{}).then(r):r(e)});p(this,"redirect",(e,t)=>{const a=String(e);return this.header("Location",/[^\x00-\xFF]/.test(a)?encodeURI(a):a),this.newResponse(null,t??302)});p(this,"notFound",()=>(o(this,ge)??h(this,ge,()=>new Response),o(this,ge).call(this,this)));h(this,Se,e),t&&(h(this,H,t.executionCtx),this.env=t.env,h(this,ge,t.notFoundHandler),h(this,De,t.path),h(this,Ce,t.matchResult))}get req(){return o(this,je)??h(this,je,new At(o(this,Se),o(this,De),o(this,Ce))),o(this,je)}get event(){if(o(this,H)&&"respondWith"in o(this,H))return o(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,H))return o(this,H);throw Error("This context has no ExecutionContext")}get res(){return o(this,P)||h(this,P,new Response(null,{headers:o(this,te)??h(this,te,new Headers)}))}set res(e){if(o(this,P)&&e){e=new Response(e.body,e);for(const[t,a]of o(this,P).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=o(this,P).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,a)}h(this,P,e),this.finalized=!0}get var(){return o(this,I)?Object.fromEntries(o(this,I)):{}}},Se=new WeakMap,je=new WeakMap,I=new WeakMap,he=new WeakMap,H=new WeakMap,P=new WeakMap,Re=new WeakMap,pe=new WeakMap,ge=new WeakMap,te=new WeakMap,Ce=new WeakMap,De=new WeakMap,z=new WeakSet,ce=function(e,t,a){const r=o(this,P)?new Headers(o(this,P).headers):o(this,te)??new Headers;if(typeof t=="object"&&"headers"in t){const n=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of n)i.toLowerCase()==="set-cookie"?r.append(i,l):r.set(i,l)}if(a)for(const[n,i]of Object.entries(a))if(typeof i=="string")r.set(n,i);else{r.delete(n);for(const l of i)r.append(n,l)}const s=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,he);return new Response(e,{status:s,headers:r})},pt),y="ALL",da="all",ua=["get","post","put","delete","options","patch"],Rt="Can not add a route since the matcher is already built.",Ct=class extends Error{},fa="__COMPOSED_HANDLER",ha=e=>e.text("404 Not Found",404),ft=(e,t)=>{if("getResponse"in e){const a=e.getResponse();return t.newResponse(a.body,a)}return console.error(e),t.text("Internal Server Error",500)},C,w,Dt,D,Y,Ne,qe,me,pa=(me=class{constructor(t={}){g(this,w);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");g(this,C,"/");p(this,"routes",[]);g(this,D,ha);p(this,"errorHandler",ft);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(h(this,D,t),this));p(this,"fetch",(t,...a)=>x(this,w,qe).call(this,t,a[1],a[0],t.method));p(this,"request",(t,a,r,s)=>t instanceof Request?this.fetch(a?new Request(t,a):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${le("/",t)}`,a),r,s)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,w,qe).call(this,t.request,t,void 0,t.request.method))})});[...ua,da].forEach(n=>{this[n]=(i,...l)=>(typeof i=="string"?h(this,C,i):x(this,w,Y).call(this,n,o(this,C),i),l.forEach(c=>{x(this,w,Y).call(this,n,o(this,C),c)}),this)}),this.on=(n,i,...l)=>{for(const c of[i].flat()){h(this,C,c);for(const d of[n].flat())l.map(u=>{x(this,w,Y).call(this,d.toUpperCase(),o(this,C),u)})}return this},this.use=(n,...i)=>(typeof n=="string"?h(this,C,n):(h(this,C,"*"),i.unshift(n)),i.forEach(l=>{x(this,w,Y).call(this,y,o(this,C),l)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??yt:sa}route(t,a){const r=this.basePath(t);return a.routes.map(s=>{var i;let n;a.errorHandler===ft?n=s.handler:(n=async(l,c)=>(await dt([],a.errorHandler)(l,()=>s.handler(l,c))).res,n[fa]=s.handler),x(i=r,w,Y).call(i,s.method,s.path,n)}),this}basePath(t){const a=x(this,w,Dt).call(this);return a._basePath=le(this._basePath,t),a}mount(t,a,r){let s,n;r&&(typeof r=="function"?n=r:(n=r.optionHandler,r.replaceRequest===!1?s=c=>c:s=r.replaceRequest));const i=n?c=>{const d=n(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};s||(s=(()=>{const c=le(this._basePath,t),d=c==="/"?0:c.length;return u=>{const f=new URL(u.url);return f.pathname=f.pathname.slice(d)||"/",new Request(f,u)}})());const l=async(c,d)=>{const u=await a(s(c.req.raw),...i(c));if(u)return u;await d()};return x(this,w,Y).call(this,y,le(t,"*"),l),this}},C=new WeakMap,w=new WeakSet,Dt=function(){const t=new me({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,h(t,D,o(this,D)),t.routes=this.routes,t},D=new WeakMap,Y=function(t,a,r){t=t.toUpperCase(),a=le(this._basePath,a);const s={basePath:this._basePath,path:a,method:t,handler:r};this.router.add(t,a,[r,s]),this.routes.push(s)},Ne=function(t,a){if(t instanceof Error)return this.errorHandler(t,a);throw t},qe=function(t,a,r,s){if(s==="HEAD")return(async()=>new Response(null,await x(this,w,qe).call(this,t,a,r,"GET")))();const n=this.getPath(t,{env:r}),i=this.router.match(s,n),l=new ca(t,{path:n,matchResult:i,env:r,executionCtx:a,notFoundHandler:o(this,D)});if(i[0].length===1){let d;try{d=i[0][0][0][0](l,async()=>{l.res=await o(this,D).call(this,l)})}catch(u){return x(this,w,Ne).call(this,u,l)}return d instanceof Promise?d.then(u=>u||(l.finalized?l.res:o(this,D).call(this,l))).catch(u=>x(this,w,Ne).call(this,u,l)):d??o(this,D).call(this,l)}const c=dt(i[0],this.errorHandler,o(this,D));return(async()=>{try{const d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return x(this,w,Ne).call(this,d,l)}})()},me),Tt=[];function ga(e,t){const a=this.buildAllMatchers(),r=((s,n)=>{const i=a[s]||a[y],l=i[2][n];if(l)return l;const c=n.match(i[0]);if(!c)return[[],Tt];const d=c.indexOf("",1);return[i[1][d],c]});return this.match=r,r(e,t)}var We="[^/]+",Ee=".*",Ae="(?:|/.*)",de=Symbol(),ma=new Set(".\\+*[^]$()");function xa(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ee||e===Ae?1:t===Ee||t===Ae?-1:e===We?1:t===We?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ae,re,T,ie,ba=(ie=class{constructor(){g(this,ae);g(this,re);g(this,T,Object.create(null))}insert(t,a,r,s,n){if(t.length===0){if(o(this,ae)!==void 0)throw de;if(n)return;h(this,ae,a);return}const[i,...l]=t,c=i==="*"?l.length===0?["","",Ee]:["","",We]:i==="/*"?["","",Ae]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(c){const u=c[1];let f=c[2]||We;if(u&&c[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw de;if(d=o(this,T)[f],!d){if(Object.keys(o(this,T)).some(m=>m!==Ee&&m!==Ae))throw de;if(n)return;d=o(this,T)[f]=new ie,u!==""&&h(d,re,s.varIndex++)}!n&&u!==""&&r.push([u,o(d,re)])}else if(d=o(this,T)[i],!d){if(Object.keys(o(this,T)).some(u=>u.length>1&&u!==Ee&&u!==Ae))throw de;if(n)return;d=o(this,T)[i]=new ie}d.insert(l,a,r,s,n)}buildRegExpStr(){const a=Object.keys(o(this,T)).sort(xa).map(r=>{const s=o(this,T)[r];return(typeof o(s,re)=="number"?`(${r})@${o(s,re)}`:ma.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof o(this,ae)=="number"&&a.unshift(`#${o(this,ae)}`),a.length===0?"":a.length===1?a[0]:"(?:"+a.join("|")+")"}},ae=new WeakMap,re=new WeakMap,T=new WeakMap,ie),Ue,Te,gt,va=(gt=class{constructor(){g(this,Ue,{varIndex:0});g(this,Te,new ba)}insert(e,t,a){const r=[],s=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const d=`@\\${i}`;return s[i]=[d,c],i++,l=!0,d}),!l)break}const n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=s.length-1;i>=0;i--){const[l]=s[i];for(let c=n.length-1;c>=0;c--)if(n[c].indexOf(l)!==-1){n[c]=n[c].replace(l,s[i][1]);break}}return o(this,Te).insert(n,t,r,o(this,Ue),a),r}buildRegExp(){let e=o(this,Te).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const a=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,n,i)=>n!==void 0?(a[++t]=Number(n),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),a,r]}},Ue=new WeakMap,Te=new WeakMap,gt),ya=[/^$/,[],Object.create(null)],$e=Object.create(null);function Lt(e){return $e[e]??($e[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,a)=>a?`\\${a}`:"(?:|/.*)")}$`))}function wa(){$e=Object.create(null)}function ka(e){var d;const t=new va,a=[];if(e.length===0)return ya;const r=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,f],[m,v])=>u?1:m?-1:f.length-v.length),s=Object.create(null);for(let u=0,f=-1,m=r.length;u<m;u++){const[v,S,$]=r[u];v?s[S]=[$.map(([A])=>[A,Object.create(null)]),Tt]:f++;let b;try{b=t.insert(S,f,v)}catch(A){throw A===de?new Ct(S):A}v||(a[f]=$.map(([A,G])=>{const Ie=Object.create(null);for(G-=1;G>=0;G--){const[He,L]=b[G];Ie[He]=L}return[A,Ie]}))}const[n,i,l]=t.buildRegExp();for(let u=0,f=a.length;u<f;u++)for(let m=0,v=a[u].length;m<v;m++){const S=(d=a[u][m])==null?void 0:d[1];if(!S)continue;const $=Object.keys(S);for(let b=0,A=$.length;b<A;b++)S[$[b]]=l[S[$[b]]]}const c=[];for(const u in i)c[u]=a[i[u]];return[n,c,s]}function oe(e,t){if(e){for(const a of Object.keys(e).sort((r,s)=>s.length-r.length))if(Lt(a).test(t))return[...e[a]]}}var Q,V,ze,Ot,mt,Ea=(mt=class{constructor(){g(this,ze);p(this,"name","RegExpRouter");g(this,Q);g(this,V);p(this,"match",ga);h(this,Q,{[y]:Object.create(null)}),h(this,V,{[y]:Object.create(null)})}add(e,t,a){var l;const r=o(this,Q),s=o(this,V);if(!r||!s)throw new Error(Rt);r[e]||[r,s].forEach(c=>{c[e]=Object.create(null),Object.keys(c[y]).forEach(d=>{c[e][d]=[...c[y][d]]})}),t==="/*"&&(t="*");const n=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=Lt(t);e===y?Object.keys(r).forEach(d=>{var u;(u=r[d])[t]||(u[t]=oe(r[d],t)||oe(r[y],t)||[])}):(l=r[e])[t]||(l[t]=oe(r[e],t)||oe(r[y],t)||[]),Object.keys(r).forEach(d=>{(e===y||e===d)&&Object.keys(r[d]).forEach(u=>{c.test(u)&&r[d][u].push([a,n])})}),Object.keys(s).forEach(d=>{(e===y||e===d)&&Object.keys(s[d]).forEach(u=>c.test(u)&&s[d][u].push([a,n]))});return}const i=wt(t)||[t];for(let c=0,d=i.length;c<d;c++){const u=i[c];Object.keys(s).forEach(f=>{var m;(e===y||e===f)&&((m=s[f])[u]||(m[u]=[...oe(r[f],u)||oe(r[y],u)||[]]),s[f][u].push([a,n-d+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,V)).concat(Object.keys(o(this,Q))).forEach(t=>{e[t]||(e[t]=x(this,ze,Ot).call(this,t))}),h(this,Q,h(this,V,void 0)),wa(),e}},Q=new WeakMap,V=new WeakMap,ze=new WeakSet,Ot=function(e){const t=[];let a=e===y;return[o(this,Q),o(this,V)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(n=>[n,r[e][n]]):[];s.length!==0?(a||(a=!0),t.push(...s)):e!==y&&t.push(...Object.keys(r[y]).map(n=>[n,r[y][n]]))}),a?ka(t):null},mt),J,M,xt,Aa=(xt=class{constructor(e){p(this,"name","SmartRouter");g(this,J,[]);g(this,M,[]);h(this,J,e.routers)}add(e,t,a){if(!o(this,M))throw new Error(Rt);o(this,M).push([e,t,a])}match(e,t){if(!o(this,M))throw new Error("Fatal error");const a=o(this,J),r=o(this,M),s=a.length;let n=0,i;for(;n<s;n++){const l=a[n];try{for(let c=0,d=r.length;c<d;c++)l.add(...r[c]);i=l.match(e,t)}catch(c){if(c instanceof Ct)continue;throw c}this.match=l.match.bind(l),h(this,J,[l]),h(this,M,void 0);break}if(n===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(o(this,M)||o(this,J).length!==1)throw new Error("No active router has been determined yet.");return o(this,J)[0]}},J=new WeakMap,M=new WeakMap,xt),ke=Object.create(null),K,E,se,xe,k,B,X,be,Pa=(be=class{constructor(t,a,r){g(this,B);g(this,K);g(this,E);g(this,se);g(this,xe,0);g(this,k,ke);if(h(this,E,r||Object.create(null)),h(this,K,[]),t&&a){const s=Object.create(null);s[t]={handler:a,possibleKeys:[],score:0},h(this,K,[s])}h(this,se,[])}insert(t,a,r){h(this,xe,++lt(this,xe)._);let s=this;const n=Zt(a),i=[];for(let l=0,c=n.length;l<c;l++){const d=n[l],u=n[l+1],f=aa(d,u),m=Array.isArray(f)?f[0]:d;if(m in o(s,E)){s=o(s,E)[m],f&&i.push(f[1]);continue}o(s,E)[m]=new be,f&&(o(s,se).push(f),i.push(f[1])),s=o(s,E)[m]}return o(s,K).push({[t]:{handler:r,possibleKeys:i.filter((l,c,d)=>d.indexOf(l)===c),score:o(this,xe)}}),s}search(t,a){var c;const r=[];h(this,k,ke);let n=[this];const i=vt(a),l=[];for(let d=0,u=i.length;d<u;d++){const f=i[d],m=d===u-1,v=[];for(let S=0,$=n.length;S<$;S++){const b=n[S],A=o(b,E)[f];A&&(h(A,k,o(b,k)),m?(o(A,E)["*"]&&r.push(...x(this,B,X).call(this,o(A,E)["*"],t,o(b,k))),r.push(...x(this,B,X).call(this,A,t,o(b,k)))):v.push(A));for(let G=0,Ie=o(b,se).length;G<Ie;G++){const He=o(b,se)[G],L=o(b,k)===ke?{}:{...o(b,k)};if(He==="*"){const W=o(b,E)["*"];W&&(r.push(...x(this,B,X).call(this,W,t,o(b,k))),h(W,k,L),v.push(W));continue}const[Gt,it,we]=He;if(!f&&!(we instanceof RegExp))continue;const O=o(b,E)[Gt],Wt=i.slice(d).join("/");if(we instanceof RegExp){const W=we.exec(Wt);if(W){if(L[it]=W[0],r.push(...x(this,B,X).call(this,O,t,o(b,k),L)),Object.keys(o(O,E)).length){h(O,k,L);const Ve=((c=W[0].match(/\//))==null?void 0:c.length)??0;(l[Ve]||(l[Ve]=[])).push(O)}continue}}(we===!0||we.test(f))&&(L[it]=f,m?(r.push(...x(this,B,X).call(this,O,t,L,o(b,k))),o(O,E)["*"]&&r.push(...x(this,B,X).call(this,o(O,E)["*"],t,L,o(b,k)))):(h(O,k,L),v.push(O)))}}n=v.concat(l.shift()??[])}return r.length>1&&r.sort((d,u)=>d.score-u.score),[r.map(({handler:d,params:u})=>[d,u])]}},K=new WeakMap,E=new WeakMap,se=new WeakMap,xe=new WeakMap,k=new WeakMap,B=new WeakSet,X=function(t,a,r,s){const n=[];for(let i=0,l=o(t,K).length;i<l;i++){const c=o(t,K)[i],d=c[a]||c[y],u={};if(d!==void 0&&(d.params=Object.create(null),n.push(d),r!==ke||s&&s!==ke))for(let f=0,m=d.possibleKeys.length;f<m;f++){const v=d.possibleKeys[f],S=u[d.score];d.params[v]=s!=null&&s[v]&&!S?s[v]:r[v]??(s==null?void 0:s[v]),u[d.score]=!0}}return n},be),ne,bt,Sa=(bt=class{constructor(){p(this,"name","TrieRouter");g(this,ne);h(this,ne,new Pa)}add(e,t,a){const r=wt(t);if(r){for(let s=0,n=r.length;s<n;s++)o(this,ne).insert(e,r[s],a);return}o(this,ne).insert(e,t,a)}match(e,t){return o(this,ne).search(e,t)}},ne=new WeakMap,bt),It=class extends pa{constructor(e={}){super(e),this.router=e.router??new Aa({routers:[new Ea,new Sa]})}},ja=e=>t=>e.fetch(t),Ra=e=>{const a={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(n=>typeof n=="string"?n==="*"?()=>n:i=>n===i?i:null:typeof n=="function"?n:i=>n.includes(i)?i:null)(a.origin),s=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(a.allowMethods);return async function(i,l){var u;function c(f,m){i.res.headers.set(f,m)}const d=await r(i.req.header("origin")||"",i);if(d&&c("Access-Control-Allow-Origin",d),a.credentials&&c("Access-Control-Allow-Credentials","true"),(u=a.exposeHeaders)!=null&&u.length&&c("Access-Control-Expose-Headers",a.exposeHeaders.join(",")),i.req.method==="OPTIONS"){a.origin!=="*"&&c("Vary","Origin"),a.maxAge!=null&&c("Access-Control-Max-Age",a.maxAge.toString());const f=await s(i.req.header("origin")||"",i);f.length&&c("Access-Control-Allow-Methods",f.join(","));let m=a.allowHeaders;if(!(m!=null&&m.length)){const v=i.req.header("Access-Control-Request-Headers");v&&(m=v.split(/\s*,\s*/))}return m!=null&&m.length&&(c("Access-Control-Allow-Headers",m.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),a.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};const R=new It;R.use("/api/*",Ra());const q={personal:{name:"Amr Walid",title:"Data Engineer",headline:"Building Scalable Data Pipelines & Analytics Infrastructure",tagline:"I transform raw, chaotic data into structured, reliable assets that power business decisions.",email:"amr.walid2022@feps.edu.eg",location:"Cairo, Egypt",linkedin:"https://www.linkedin.com/in/amrwalidmaher",github:"https://github.com/Amr-Walid",avatar:"https://avatars.githubusercontent.com/u/Amr-Walid"},summary:"Data Engineer with a deep focus on building and maintaining robust, scalable data pipelines. I specialize in the complete data lifecycle — from extraction and transformation to orchestration and delivery — ensuring data is not only accessible but actionable. My expertise spans ETL/ELT design, data modeling, workflow automation, and cloud-native data architectures. I combine strong engineering fundamentals with analytical thinking to build systems that turn raw data into strategic business assets.",skills:{"Data Engineering":[{name:"ETL/ELT Pipeline Design",level:90},{name:"Data Modeling",level:85},{name:"Data Warehousing",level:85},{name:"Workflow Orchestration",level:80},{name:"Data Quality & Testing",level:80},{name:"Stream Processing",level:75}],"Languages & Frameworks":[{name:"Python",level:92},{name:"SQL",level:90},{name:"PySpark",level:80},{name:"Pandas",level:90},{name:"Bash / Shell",level:75}],"Cloud & Infrastructure":[{name:"Docker",level:85},{name:"GitHub Actions (CI/CD)",level:88},{name:"Google BigQuery",level:80},{name:"AWS Redshift",level:75},{name:"Microsoft Fabric",level:70}],"Data Platforms & Tools":[{name:"Apache Airflow",level:80},{name:"Apache Spark",level:78},{name:"dbt",level:75},{name:"PostgreSQL",level:85},{name:"Git & Version Control",level:92}],"BI & Visualization":[{name:"Power BI",level:88},{name:"Tableau",level:78},{name:"Looker Studio",level:75},{name:"Excel (Advanced)",level:90},{name:"Power Query",level:88}]},projects:[{id:"crypto-etl-pipeline",title:"Automated Crypto Price ETL Pipeline",category:"Data Engineering",featured:!0,image:"chart-line",imageUrl:"assets/project-etl.png",problem:"Cryptocurrency markets generate massive volumes of real-time price data across multiple exchanges. Manually tracking and recording this data for historical analysis is unreliable, inconsistent, and doesn't scale.",solution:"Designed and built a fully automated, cloud-hosted ETL pipeline that extracts live cryptocurrency market data from the CoinGecko API, transforms it using Python and Pandas into a structured schema, and loads it into a continuously growing time-series CSV dataset — all orchestrated by GitHub Actions running on an hourly cron schedule.",architecture:"CoinGecko API → Python (requests) → Pandas Transform → CSV Append → GitHub Actions (hourly cron) → Auto-commit to Repository",techStack:["Python","Pandas","REST API","GitHub Actions","CI/CD","Git"],impact:["Fully autonomous — zero manual intervention after deployment","Runs 24/7 with hourly data collection cycles","Builds a growing historical time-series dataset automatically","Production-grade version control with atomic commits"],github:"https://github.com/Amr-Walid/crypto-price-analyzer",tags:["ETL","Automation","CI/CD","API Integration","Time-Series"]},{id:"docker-etl-pipeline",title:"Dockerized ETL Pipeline with PostgreSQL",category:"Data Engineering",featured:!0,image:"database",imageUrl:"assets/project-workflow.png",problem:"ETL processes often break due to environment inconsistencies between development, testing, and production. Dependencies, database connections, and configurations differ across machines, making pipelines fragile.",solution:"Built a containerized ETL pipeline using Docker and Docker Compose that packages the entire data workflow — extraction, transformation, and loading into PostgreSQL — into reproducible, isolated containers. A single command spins up the full environment.",architecture:"Source Data → Python ETL Container → Transform Layer → PostgreSQL Container → Docker Compose Orchestration",techStack:["Python","Docker","Docker Compose","PostgreSQL","SQL","Environment Variables"],impact:["100% reproducible environment with a single docker compose up","Complete isolation between ETL logic and database layer","Secure credential management via .env files","Production-ready containerization pattern"],github:"https://github.com/Amr-Walid/docker-etl-pipeline",tags:["Docker","ETL","PostgreSQL","Containerization","DevOps"]},{id:"adventure-works-dashboard",title:"AdventureWorks Sales Analytics Dashboard",category:"Data Analysis",featured:!0,image:"chart-bar",imageUrls:["assets/project-sales.png","assets/project-sales-new.png"],problem:"A global manufacturing company had thousands of rows of unstructured sales data across multiple dimensions — products, customers, geography, and time — with no unified view for executive decision-making.",solution:"Designed and built a comprehensive interactive Excel dashboard using the AdventureWorks dataset. Applied Power Query for data cleaning, built a multi-table data model with proper relationships, and created dynamic PivotTable reports with slicers and timelines for self-service analytics.",architecture:"Raw Data → Power Query (Clean & Transform) → Data Model (Relationships) → PivotTables → Interactive Dashboard (Slicers, Timelines, Charts)",techStack:["Excel","Power Query","PivotTables","Data Modeling","Business Intelligence"],impact:["Unified view across sales, products, customers, and geography","Interactive slicers enable self-service exploration","Identifies top-performing products, regions, and seasonal trends","Supports strategic pricing and marketing decisions"],github:"https://github.com/Amr-Walid/Excel-Dashboard",tags:["BI","Dashboard","Excel","Data Analysis","Power Query"]},{id:"simple-orchestrator",title:"Simple Task Orchestrator (DAG Engine)",category:"Data Engineering",featured:!1,image:"sitemap",problem:"Data pipelines consist of interdependent tasks that must execute in a specific order. Without proper orchestration, managing dependencies, execution order, and failure handling becomes chaotic.",solution:"Built a lightweight task orchestrator from scratch using Python, implementing core computer science concepts: Directed Acyclic Graphs (DAGs) for dependency mapping, Topological Sort for execution ordering, Queues for task scheduling, and Dictionaries for fast state lookups. A miniature Airflow built from first principles.",architecture:"Task Definitions (JSON) → DAG Builder (Graphs) → Topological Sort → Queue-based Executor → State Management (Dictionaries)",techStack:["Python","Data Structures","Algorithms","Graphs","Topological Sort","JSON"],impact:["Demonstrates deep understanding of orchestration internals","Implements core Airflow concepts from scratch","Handles complex task dependencies correctly","Educational reference for DAG-based pipeline design"],github:"https://github.com/Amr-Walid",tags:["Orchestration","Algorithms","DAG","Python","Architecture"]},{id:"git-mastery",title:"Git & Version Control Mastery",category:"DevOps",featured:!1,image:"code-branch",problem:"Many data professionals lack structured version control practices, leading to lost work, merge conflicts, and untracked changes in data pipeline codebases.",solution:"Completed an intensive hands-on project covering the full Git lifecycle: repository initialization, branching strategies, merge conflict resolution, feature branches, atomic commits, and remote synchronization with GitHub.",architecture:"Local Git → Feature Branches → Merge Strategies → Remote GitHub → Collaboration Workflows",techStack:["Git","GitHub","Version Control","Branching Strategies"],impact:["Mastered feature-branch workflow used in production teams","Practiced atomic commits for clean project history","Resolved merge conflicts in complex branching scenarios","Foundation for all CI/CD pipeline development"],github:"https://github.com/Amr-Walid/git-mastery-project",tags:["Git","Version Control","DevOps","Best Practices"]}],experience:[{title:"Junior Data Engineer",type:"Self-Directed Professional Development",period:"2024 — Present",description:"Building production-grade data engineering projects focused on ETL pipeline design, containerization, workflow automation, and cloud-native data architectures. Actively developing expertise across the modern data stack.",highlights:["Designed and deployed automated ETL pipelines with CI/CD using GitHub Actions","Built containerized data workflows with Docker and PostgreSQL","Implemented data modeling and BI solutions using Power BI and Excel","Studying for Microsoft DP-700 (Fabric Data Engineer) certification"]},{title:"Economics Student — Data Engineering Focus",type:"Faculty of Economics & Political Science, Cairo University",period:"2022 — Present",description:"Pursuing an economics degree with a self-directed specialization in data engineering. Combining quantitative economic analysis with modern data infrastructure skills.",highlights:["Applied statistical analysis and data modeling to economic datasets","Self-taught Python, SQL, and the modern data stack alongside academic studies","Built data-driven projects that bridge economics and engineering","Active in data engineering communities and continuous learning"]}],certifications:[{title:"Get Started with Lakehouses in Microsoft Fabric",issuer:"Microsoft",date:"January 2026",icon:"microsoft",description:"Completed training on Microsoft Fabric lakehouse architecture, covering data ingestion, transformation, and storage patterns in the Microsoft data ecosystem.",credential:"Microsoft Learn"},{title:"DP-700: Fabric Data Engineer Associate",issuer:"Microsoft",date:"In Progress",icon:"microsoft",description:"Preparing for the DP-700 certification exam, focused on designing and implementing data solutions with Microsoft Fabric, including data pipelines, lakehouses, and data warehouses.",credential:"Microsoft Certified"}],blogPosts:[{id:"building-automated-etl-pipeline",title:"How I Built a Self-Updating ETL Pipeline with GitHub Actions",excerpt:"A deep dive into designing a fully automated cryptocurrency data pipeline that runs 24/7 without manual intervention, using Python, Pandas, and GitHub Actions as a free orchestration layer.",date:"2026-01-15",readTime:"8 min read",tags:["ETL","GitHub Actions","Python","Automation"],category:"Data Engineering"},{id:"docker-for-data-engineers",title:"Why Every Data Engineer Should Containerize Their Pipelines",excerpt:"How Docker transforms fragile data pipelines into reproducible, portable systems. A practical guide with real examples from building a Dockerized ETL pipeline with PostgreSQL.",date:"2026-02-01",readTime:"6 min read",tags:["Docker","DevOps","ETL","PostgreSQL"],category:"Data Engineering"},{id:"data-structures-for-orchestration",title:"The Data Structures Behind Airflow: Building an Orchestrator from Scratch",excerpt:"Understanding how Graphs, Topological Sort, and Queues power modern workflow orchestrators like Apache Airflow — by building a simplified version from first principles.",date:"2026-01-28",readTime:"10 min read",tags:["Algorithms","Airflow","Python","Architecture"],category:"Engineering Deep Dives"}]};R.get("/api/portfolio",e=>e.json(q));R.get("/api/projects",e=>e.json(q.projects));R.get("/api/projects/:id",e=>{const t=q.projects.find(a=>a.id===e.req.param("id"));return t?e.json(t):e.json({error:"Project not found"},404)});R.get("/api/skills",e=>e.json(q.skills));R.get("/api/experience",e=>e.json(q.experience));R.get("/api/certifications",e=>e.json(q.certifications));R.get("/api/blog",e=>e.json(q.blogPosts));R.get("/api/blog/:id",e=>{const t=q.blogPosts.find(a=>a.id===e.req.param("id"));return t?e.json(t):e.json({error:"Post not found"},404)});R.post("/api/contact",async e=>{try{const t=await e.req.json(),{name:a,email:r,subject:s,message:n}=t;return!a||!r||!n?e.json({error:"Name, email, and message are required"},400):e.json({success:!0,message:"Message received! I will get back to you soon."})}catch{return e.json({error:"Invalid request body"},400)}});const Ca=()=>`<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amr Walid | Data Engineer — Pipelines, Automation & Analytics</title>
  <meta name="description" content="Data Engineer specializing in building scalable data pipelines, ETL automation, and analytics infrastructure. Python, SQL, Spark, Docker, Airflow.">
  <meta name="keywords" content="Data Engineer, ETL, Data Pipeline, Python, SQL, Spark, Airflow, Docker, Power BI, Portfolio">
  <meta name="author" content="Amr Walid">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Amr Walid | Data Engineer">
  <meta property="og:description" content="Building scalable data pipelines, automation systems, and analytics infrastructure.">
  <meta property="og:type" content="website">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#9881;</text></svg>">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Icons -->
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" rel="stylesheet">
  
  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          },
          colors: {
            brand: {
              50: '#eef7ff',
              100: '#d9ecff',
              200: '#bcdfff',
              300: '#8eccff',
              400: '#59b0ff',
              500: '#3b8fff',
              600: '#1b6ff5',
              700: '#1459e1',
              800: '#1748b6',
              900: '#193f8f',
              950: '#142857'
            },
            accent: {
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7'
            }
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'slide-up': 'slideUp 0.6s ease-out',
            'slide-down': 'slideDown 0.3s ease-out',
            'fade-in': 'fadeIn 0.8s ease-out',
            'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite'
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
            },
            slideUp: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideDown: {
              '0%': { opacity: '0', transform: 'translateY(-10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
            }
          }
        }
      }
    }
  <\/script>
  <style>
    * { scrollbar-width: thin; scrollbar-color: #3b8fff #1e293b; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #3b8fff; border-radius: 3px; }
    
    .gradient-text {
      background: linear-gradient(135deg, #3b8fff 0%, #38bdf8 50%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .glass {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 143, 255, 0.1);
    }
    
    .glass-light {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    
    .card-hover {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 60px -12px rgba(59, 143, 255, 0.25);
    }
    
    .hero-gradient {
      background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 143, 255, 0.15), transparent),
                  radial-gradient(ellipse 60% 40% at 80% 50%, rgba(56, 189, 248, 0.08), transparent);
    }
    
    .hero-gradient-light {
      background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 143, 255, 0.08), transparent),
                  radial-gradient(ellipse 60% 40% at 80% 50%, rgba(56, 189, 248, 0.05), transparent);
    }
    
    .skill-bar {
      background: linear-gradient(90deg, #3b8fff, #38bdf8);
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes flow {
      0% { background-position: 0% 0%; }
      100% { background-position: 0% 100%; }
    }
    
    .pipeline-line {
      background: linear-gradient(180deg, #3b8fff, #38bdf8, #818cf8, #3b8fff);
      background-size: 100% 200%;
      animation: flow 3s linear infinite;
    }
    
    .glow {
      box-shadow: 0 0 40px rgba(59, 143, 255, 0.15);
    }
    
    .tag {
      transition: all 0.2s ease;
    }
    .tag:hover {
      background: rgba(59, 143, 255, 0.2);
      transform: scale(1.05);
    }

    [data-animate] {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    [data-animate].visible {
      opacity: 1;
      transform: translateY(0);
    }

    .nav-link {
      position: relative;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b8fff, #38bdf8);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after, .nav-link.active::after {
      width: 100%;
    }

    .light .glass {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    
    @keyframes gridMove {
      0% { transform: translate(0, 0); }
      100% { transform: translate(40px, 40px); }
    }
    .grid-bg {
      background-image: radial-gradient(circle, rgba(59,143,255,0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      animation: gridMove 20s linear infinite;
    }
    .dark .grid-bg {
      background-image: radial-gradient(circle, rgba(59,143,255,0.12) 1px, transparent 1px);
    }
  </style>
</head>
<body class="bg-white text-slate-900 font-sans antialiased transition-colors duration-500">
  
  <!-- ============ NAVIGATION ============ -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            AW
          </div>
          <div class="hidden sm:block">
            <span class="font-bold text-lg text-slate-900">Amr Walid</span>
            <span class="block text-xs text-brand-400 font-mono -mt-0.5">Data Engineer</span>
          </div>
        </a>
        
        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a href="#about" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">About</a>
          <a href="#projects" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Projects</a>
          <a href="#experience" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Experience</a>
          <a href="#certifications" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Certifications</a>
          <a href="#blog" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Blog</a>
          <a href="#contact" class="ml-4 px-5 py-2.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5">
            Let's Talk
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-3 md:hidden">
          <button id="mobileMenuBtn" class="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-slate-700">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden md:hidden glass glass-light animate-slide-down">
      <div class="px-4 py-6 space-y-1">
        <a href="#about" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">About</a>
        <a href="#projects" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Projects</a>
        <a href="#experience" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Experience</a>
        <a href="#certifications" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Certifications</a>
        <a href="#blog" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Blog</a>
        <a href="#contact" class="block px-4 py-3 mt-4 bg-gradient-to-r from-brand-600 to-accent-500 text-white text-center rounded-xl font-semibold">Let's Talk</a>
      </div>
    </div>
  </nav>

  <!-- ============ HERO SECTION ============ -->
  <section id="hero" class="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-24 lg:pt-32">
    <div class="grid-bg absolute inset-0 opacity-60"></div>
    
    <!-- Floating Elements -->
    <div class="absolute top-1/4 left-10 w-3 h-3 bg-brand-500 rounded-full animate-float opacity-40"></div>
    <div class="absolute top-1/3 right-20 w-2 h-2 bg-accent-400 rounded-full animate-float opacity-30" style="animation-delay: 2s"></div>
    <div class="absolute bottom-1/3 left-1/4 w-4 h-4 bg-brand-400/20 rounded-full animate-float" style="animation-delay: 4s"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Column -->
        <div class="space-y-8 animate-slide-up">
          <!-- Status Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/5 border border-brand-500/10">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-brand-600">Open to Opportunities</span>
          </div>
          
          <!-- Heading -->
          <div>
            <p class="text-lg sm:text-xl text-gray-500 font-medium mb-3">Hi, I'm</p>
            <h1 class="text-[clamp(2.75rem,9vw,4.5rem)] sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight whitespace-nowrap">
              <span class="text-slate-900">Amr</span>
              <span class="gradient-text"> Walid</span>
            </h1>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mt-3">
              Data Engineer
            </h2>
          </div>
          
          <!-- Tagline -->
          <p class="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl">
            I build <span class="text-brand-400 font-semibold">scalable data pipelines</span>, 
            <span class="text-accent-400 font-semibold">automation systems</span>, and 
            <span class="text-purple-400 font-semibold">analytics infrastructure</span> 
            that turn raw data into strategic business assets.
          </p>
          
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Python</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">SQL</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Spark</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Docker</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Airflow</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Power BI</span>
          </div>
          
          <!-- CTAs -->
          <div class="flex flex-wrap gap-4">
            <a href="#projects" class="group px-7 py-3.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-1 flex items-center gap-2">
              View My Work
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="https://github.com/Amr-Walid" target="_blank" class="px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-brand-500/50 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-sm">
              <i class="fab fa-github"></i>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-brand-500/50 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-sm">
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
        
        <!-- Right Column — Profile Picture -->
        <div class="hidden lg:block relative flex items-center justify-center">
          <div class="relative w-72 h-72 xl:w-80 xl:h-80 mx-auto">
            <!-- Decorative rings -->
            <div class="absolute inset-0 border border-brand-500/30 rounded-full animate-spin-slow" style="animation-duration: 15s;"></div>
            <div class="absolute inset-4 border border-accent-500/20 rounded-full animate-[spin_20s_linear_reverse]"></div>
            
            <!-- Profile Image Container -->
            <div class="absolute inset-8 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-brand-500/20 glass">
              <img src="/assets/profile.jpg" alt="Amr Walid" class="w-full h-full object-cover object-[center_top]" />
            </div>

            <!-- Floating tech icons -->
            <div class="absolute top-0 right-10 w-12 h-12 bg-slate-800 rounded-xl shadow-lg flex items-center justify-center animate-float border border-slate-700 p-2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-full h-full" />
            </div>
            <div class="absolute bottom-10 left-0 w-12 h-12 bg-slate-800 rounded-xl shadow-lg flex items-center justify-center animate-float border border-slate-700 p-2" style="animation-delay: 1.5s;">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#about" class="dark:text-gray-500 text-gray-400 hover:text-brand-400 transition-colors">
        <i class="fas fa-chevron-down text-xl"></i>
      </a>
    </div>
  </section>

  <!-- ============ ABOUT SECTION ============ -->
  <section id="about" class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-5 gap-16 items-start" data-animate>
        <div class="lg:col-span-3 space-y-6">
          <div>
            <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// About Me</p>
            <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
              Turning Raw Data Into
              <span class="gradient-text"> Strategic Assets</span>
            </h2>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed">
            I'm a Data Engineer based in Cairo, Egypt, with a deep focus on building and maintaining robust, scalable data pipelines. I specialize in the complete data lifecycle — from extraction and transformation to orchestration and delivery — ensuring data is not only accessible but actionable.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            My expertise spans <strong class="dark:text-white text-slate-900">ETL/ELT design</strong>, <strong class="dark:text-white text-slate-900">data modeling</strong>, <strong class="dark:text-white text-slate-900">workflow automation</strong>, and <strong class="dark:text-white text-slate-900">cloud-native data architectures</strong>. I combine strong engineering fundamentals with analytical thinking to build systems that turn raw data into strategic business assets.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Currently studying Economics at Cairo University's Faculty of Economics & Political Science, I bring a unique perspective that bridges quantitative analysis with modern data infrastructure engineering.
          </p>
        </div>
        
        <!-- Stats -->
        <div class="lg:col-span-2 grid grid-cols-2 gap-4">
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">5+</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">Data Projects</div>
          </div>
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">10+</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">Technologies</div>
          </div>
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">3+</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">ETL Pipelines</div>
          </div>
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">1</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">Certification</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PROJECTS SECTION ============ -->
  <section id="projects" class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Featured Work</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Project <span class="gradient-text">Case Studies</span>
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Real-world data engineering projects with documented architectures, tech decisions, and measurable impact.</p>
      </div>
      
      <!-- Project Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12" data-animate>
        <button class="filter-btn active px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="all">All Projects</button>
        <button class="filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="Data Engineering">Data Engineering</button>
        <button class="filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="Data Analysis">Data Analysis</button>
        <button class="filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="DevOps">DevOps</button>
      </div>
      
      <!-- Project Cards -->
      <div id="projectsGrid" class="grid lg:grid-cols-2 gap-8">
        <!-- Cards injected by JS -->
      </div>
    </div>
  </section>

  <!-- ============ EXPERIENCE SECTION ============ -->
  <section id="experience" class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Career Path</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Experience <span class="gradient-text">Timeline</span>
        </h2>
      </div>
      
      <div class="relative" data-animate>
        <!-- Timeline Line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 pipeline-line hidden sm:block"></div>
        
        <!-- Timeline Item 1 -->
        <div class="relative flex gap-6 sm:gap-10 mb-12">
          <div class="hidden sm:flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center z-10 shadow-lg shadow-brand-500/25">
              <i class="fas fa-database text-white text-xl"></i>
            </div>
          </div>
          <div class="flex-1 glass glass-light rounded-2xl p-6 lg:p-8 card-hover">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="px-3 py-1 bg-brand-500/10 text-brand-400 text-xs font-bold rounded-lg">2024 — Present</span>
              <span class="sm:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center"><i class="fas fa-database text-white text-sm"></i></span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">Junior Data Engineer</h3>
            <p class="text-brand-400 font-medium text-sm mb-4">Self-Directed Professional Development</p>
            <p class="dark:text-gray-400 text-gray-600 mb-4">Building production-grade data engineering projects focused on ETL pipeline design, containerization, workflow automation, and cloud-native data architectures.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Designed automated ETL pipelines with CI/CD using GitHub Actions</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Built containerized data workflows with Docker and PostgreSQL</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Implemented data modeling and BI solutions with Power BI & Excel</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Preparing for Microsoft DP-700 (Fabric Data Engineer) certification</li>
            </ul>
          </div>
        </div>
        
        <!-- Timeline Item 2 -->
        <div class="relative flex gap-6 sm:gap-10">
          <div class="hidden sm:flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center z-10 shadow-lg shadow-purple-500/25">
              <i class="fas fa-graduation-cap text-white text-xl"></i>
            </div>
          </div>
          <div class="flex-1 glass glass-light rounded-2xl p-6 lg:p-8 card-hover">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-lg">2022 — Present</span>
              <span class="sm:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center"><i class="fas fa-graduation-cap text-white text-sm"></i></span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">Economics Student — Data Engineering Focus</h3>
            <p class="text-purple-400 font-medium text-sm mb-4">Faculty of Economics & Political Science, Cairo University</p>
            <p class="dark:text-gray-400 text-gray-600 mb-4">Pursuing an economics degree with a self-directed specialization in data engineering. Bridging quantitative economic analysis with modern data infrastructure skills.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Applied statistical analysis to economic datasets</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Self-taught Python, SQL, and the modern data stack</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Built data-driven projects bridging economics and engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CERTIFICATIONS SECTION ============ -->
  <section id="certifications" class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Credentials</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Certifications & <span class="gradient-text">Learning</span>
        </h2>
      </div>
      
      <div class="space-y-6" data-animate>
        <!-- Cert 1 (In Progress DP-700) -->
        <div class="glass glass-light rounded-2xl p-6 lg:p-8 card-hover flex flex-col sm:flex-row gap-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 shadow-lg">
            <i class="fab fa-microsoft text-white text-2xl"></i>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h3 class="font-bold text-lg text-slate-900">DP-700: Fabric Data Engineer Associate</h3>
              <span class="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-lg">In Progress</span>
            </div>
            <p class="text-sm text-gray-500 mb-2">Microsoft Certified &bull; Expected 2026</p>
            <p class="dark:text-gray-400 text-gray-600 text-sm">Preparing for the DP-700 certification — designing and implementing data solutions with Microsoft Fabric, including pipelines, lakehouses, and data warehouses.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ BLOG SECTION ============ -->
  <section id="blog" class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Insights & Learning</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          From the <span class="gradient-text">Blog</span>
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Deep dives into data engineering concepts, project retrospectives, and technical insights.</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8" data-animate>
        <!-- Blog 1 -->
        <article class="glass glass-light rounded-2xl overflow-hidden card-hover group">
          <div class="h-48 bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center relative overflow-hidden">
            <i class="fas fa-robot text-white/20 text-7xl absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform"></i>
            <div class="relative z-10 text-center">
              <i class="fas fa-cogs text-white text-4xl mb-2"></i>
              <p class="text-white/80 text-sm font-mono">ETL Automation</p>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xs text-gray-400 font-mono">Jan 15, 2026</span>
              <span class="text-xs text-gray-300">&bull;</span>
              <span class="text-xs text-brand-400 font-medium">8 min read</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-400 transition-colors">How I Built a Self-Updating ETL Pipeline with GitHub Actions</h3>
            <p class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-4">A deep dive into designing a fully automated cryptocurrency data pipeline that runs 24/7 without manual intervention.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">ETL</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">GitHub Actions</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Python</span>
            </div>
          </div>
        </article>
        
        <!-- Blog 2 -->
        <article class="glass glass-light rounded-2xl overflow-hidden card-hover group">
          <div class="h-48 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative overflow-hidden">
            <i class="fab fa-docker text-white/20 text-7xl absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform"></i>
            <div class="relative z-10 text-center">
              <i class="fab fa-docker text-white text-4xl mb-2"></i>
              <p class="text-white/80 text-sm font-mono">Containerization</p>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xs text-gray-400 font-mono">Feb 01, 2026</span>
              <span class="text-xs text-gray-300">&bull;</span>
              <span class="text-xs text-brand-400 font-medium">6 min read</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-400 transition-colors">Why Every Data Engineer Should Containerize Their Pipelines</h3>
            <p class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-4">How Docker transforms fragile data pipelines into reproducible, portable systems. A practical guide with real examples.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Docker</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">PostgreSQL</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">DevOps</span>
            </div>
          </div>
        </article>
        
        <!-- Blog 3 -->
        <article class="glass glass-light rounded-2xl overflow-hidden card-hover group">
          <div class="h-48 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
            <i class="fas fa-project-diagram text-white/20 text-7xl absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform"></i>
            <div class="relative z-10 text-center">
              <i class="fas fa-sitemap text-white text-4xl mb-2"></i>
              <p class="text-white/80 text-sm font-mono">Architecture</p>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xs text-gray-400 font-mono">Jan 28, 2026</span>
              <span class="text-xs text-gray-300">&bull;</span>
              <span class="text-xs text-brand-400 font-medium">10 min read</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-400 transition-colors">The Data Structures Behind Airflow: Building an Orchestrator from Scratch</h3>
            <p class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-4">Understanding how Graphs, Topological Sort, and Queues power modern workflow orchestrators like Apache Airflow.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Algorithms</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Airflow</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Python</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ============ GITHUB SECTION ============ -->
  <section class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass glass-light rounded-3xl p-8 lg:p-12 text-center card-hover" data-animate>
        <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <i class="fab fa-github text-white text-4xl"></i>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Explore My Code</h2>
        <p class="dark:text-gray-400 text-gray-600 mb-8 max-w-xl mx-auto text-lg">All my data engineering projects, ETL pipelines, and automation scripts are open-source on GitHub. Explore the code, architecture, and documentation.</p>
        
        <!-- GitHub Stats -->
        <div class="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
          <div class="glass glass-light rounded-xl p-4">
            <div class="text-2xl font-bold gradient-text">5</div>
            <div class="text-xs text-gray-400 mt-1">Repositories</div>
          </div>
          <div class="glass glass-light rounded-xl p-4">
            <div class="text-2xl font-bold gradient-text">3</div>
            <div class="text-xs text-gray-400 mt-1">Languages</div>
          </div>
          <div class="glass glass-light rounded-xl p-4">
            <div class="text-2xl font-bold gradient-text">CI/CD</div>
            <div class="text-xs text-gray-400 mt-1">Automated</div>
          </div>
        </div>
        
        <a href="https://github.com/Amr-Walid" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
          <i class="fab fa-github text-xl"></i>
          Visit My GitHub Profile
          <i class="fas fa-external-link-alt text-sm ml-1"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT SECTION ============ -->
  <section id="contact" class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Get in Touch</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Let's <span class="gradient-text">Connect</span>
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-xl mx-auto">Have a data challenge? Looking for a data engineer? Or just want to chat about pipelines? Reach out.</p>
      </div>
      
      <div class="grid lg:grid-cols-5 gap-8" data-animate>
        <!-- Contact Info -->
        <div class="lg:col-span-2 space-y-4">
          <a href="mailto:amr.walid2022@feps.edu.eg" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <i class="fas fa-envelope text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">Email</p>
              <p class="font-medium text-slate-900 text-sm">amr.walid2022@feps.edu.eg</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <i class="fab fa-linkedin-in text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">LinkedIn</p>
              <p class="font-medium text-slate-900 text-sm">Amr Walid</p>
            </div>
          </a>
          
          <a href="https://github.com/Amr-Walid" target="_blank" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <i class="fab fa-github text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">GitHub</p>
              <p class="font-medium text-slate-900 text-sm">Amr-Walid</p>
            </div>
          </a>
          
          <div class="glass glass-light rounded-2xl p-5 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shrink-0">
              <i class="fas fa-map-marker-alt text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">Location</p>
              <p class="font-medium text-slate-900 text-sm">Cairo, Egypt</p>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <form id="contactForm" class="glass glass-light rounded-2xl p-6 lg:p-8 space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-2">Name *</label>
                <input type="text" name="name" required class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="Your name">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-2">Email *</label>
                <input type="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="you@email.com">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Subject</label>
              <input type="text" name="subject" class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="What's this about?">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Message *</label>
              <textarea name="message" required rows="5" class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
            </div>
            <button type="submit" id="submitBtn" class="w-full py-3.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <i class="fas fa-paper-plane"></i>
              Send Message
            </button>
            <div id="formMessage" class="hidden text-center text-sm font-medium py-3 rounded-xl"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer class="dark:bg-slate-900 bg-white border-t border-gray-200 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">AW</div>
          <div>
            <span class="font-bold text-slate-900">Amr Walid</span>
            <span class="block text-xs text-gray-400 font-mono">Data Engineer</span>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <a href="https://github.com/Amr-Walid" target="_blank" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:amr.walid2022@feps.edu.eg" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
        
        <p class="text-sm text-gray-400">
          &copy; 2026 Amr Walid. Built with passion.
        </p>
      </div>
    </div>
  </footer>

  <!-- ============ JAVASCRIPT ============ -->
  <script>
    // ===== PORTFOLIO DATA =====
    const projects = ${JSON.stringify(q.projects)};

    // ===== RENDER PROJECTS =====
    function renderProjects(filter = 'all') {
      const grid = document.getElementById('projectsGrid');
      const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
      
      grid.innerHTML = filtered.map(p => {
        const urls = p.imageUrls || (p.imageUrl ? [p.imageUrl] : []);
        let imageHeader = '';
        if (urls.length > 0) {
          imageHeader = \`<div class="w-full h-48 sm:h-56 relative bg-slate-200/50 border-b border-gray-200 flex flex-row overflow-hidden">
            \${urls.map((url, i) => \`
              <div class="flex-1 h-full flex items-center justify-center p-2 sm:p-3 relative group/img \${i > 0 ? 'border-l border-gray-300/50' : ''}">
                <img src="\${url}" alt="\${p.title} - Image \${i + 1}" class="max-w-full max-h-full object-contain rounded shadow-sm group-hover/img:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            \`).join('')}
          </div>\`;
        }

        return \`
        <div class="glass glass-light rounded-2xl overflow-hidden card-hover group project-card flex flex-col h-full" data-category="\${p.category}">
          <!-- Project Image Header -->
          \${imageHeader}
          
          <!-- Content Body -->
          <div class="p-6 lg:p-8 flex flex-col flex-grow">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shrink-0 shadow-lg">
                  <i class="fas fa-\${p.image} text-white text-lg"></i>
                </div>
                <div>
                  <span class="text-xs font-bold text-brand-400 font-mono uppercase tracking-wider">\${p.category}</span>
                  \${p.featured ? '<span class="ml-2 text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md font-bold">Featured</span>' : ''}
                </div>
              </div>
              <a href="\${p.github}" target="_blank" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all shrink-0">
                <i class="fab fa-github"></i>
              </a>
            </div>
            
            <h3 class="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-400 transition-colors">\${p.title}</h3>
            
            <!-- Problem & Solution Section -->
            <div class="mb-4">
              <p class="text-xs font-bold text-red-400 font-mono uppercase tracking-wider mb-1">Problem</p>
              <p class="text-sm text-gray-600 leading-relaxed">\${p.problem}</p>
            </div>
            
            <!-- Solution -->
            <div class="mb-4">
              <p class="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider mb-1">Solution</p>
              <p class="text-sm text-gray-600 leading-relaxed">\${p.solution}</p>
            </div>
            
            <!-- Architecture -->
            <div class="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
              <p class="text-xs font-bold text-purple-400 font-mono uppercase tracking-wider mb-1">Architecture</p>
              <p class="text-xs text-gray-500 font-mono leading-relaxed">\${p.architecture}</p>
            </div>
            
            <!-- Impact -->
            <div class="mb-5">
              <p class="text-xs font-bold text-accent-400 font-mono uppercase tracking-wider mb-2">Impact</p>
              <ul class="space-y-1.5">
                \${p.impact.map(i => \`<li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-0.5 text-xs"></i>\${i}</li>\`).join('')}
              </ul>
            </div>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              \${p.techStack.map(t => \`<span class="tag px-2.5 py-1 bg-brand-500/5 text-brand-400 text-xs rounded-lg font-mono font-medium border border-brand-500/10 cursor-default">\${t}</span>\`).join('')}
            </div>
          </div>
        </div>
      \`}).join('');
    }

    // ===== PROJECT FILTERS =====
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
      });
    });

    // Style filter buttons
    function styleFilters() {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.classList.contains('active')) {
          btn.className = 'filter-btn active px-5 py-2 rounded-xl text-sm font-semibold transition-all bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-500/25';
        } else {
          btn.className = 'filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all bg-gray-100 text-gray-600 hover:text-brand-400 border-gray-200 border';
        }
      });
    }
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', styleFilters);
    });

    // ===== CONTACT FORM =====
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      const msg = document.getElementById('formMessage');
      const form = e.target;
      
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;
      
      try {
        const data = Object.fromEntries(new FormData(form));
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        
        if (result.success) {
          msg.textContent = 'Message sent successfully! I will get back to you soon.';
          msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
          form.reset();
        } else {
          throw new Error(result.error);
        }
      } catch (err) {
        msg.textContent = err.message || 'Something went wrong. Please try again.';
        msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20';
      }
      
      msg.classList.remove('hidden');
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.disabled = false;
      
      setTimeout(() => msg.classList.add('hidden'), 5000);
    });
    // ===== MOBILE MENU =====
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
      });
    });

    // ===== NAVBAR SCROLL =====
    let tickingNavbar = false;
    window.addEventListener('scroll', () => {
      if (!tickingNavbar) {
        window.requestAnimationFrame(() => {
          const navbar = document.getElementById('navbar');
          const scroll = window.scrollY;
          
          if (scroll > 50) {
            navbar.classList.add('glass', 'glass-light', 'shadow-lg', 'py-0');
            navbar.classList.remove('py-2');
          } else {
            navbar.classList.remove('glass', 'glass-light', 'shadow-lg', 'py-0');
            navbar.classList.add('py-2');
          }
          tickingNavbar = false;
        });
        tickingNavbar = true;
      }
    }, { passive: true });

    // ===== SCROLL ANIMATIONS =====
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section[id]');
    let tickingNavLinks = false;
    window.addEventListener('scroll', () => {
      if (!tickingNavLinks) {
        window.requestAnimationFrame(() => {
          const scroll = window.scrollY + 200;
          sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector('a[href="#' + id + '"]');
            if (link && link.classList.contains('nav-link')) {
              if (scroll >= top && scroll < top + height) {
                link.classList.add('active', 'text-brand-400');
              } else {
                link.classList.remove('active', 'text-brand-400');
              }
            }
          });
          tickingNavLinks = false;
        });
        tickingNavLinks = true;
      }
    }, { passive: true });

    // ===== INIT =====
    renderProjects();
    styleFilters();
  <\/script>
</body>
</html>`;R.get("/",e=>e.html(Ca()));const Da=ja(R);var Z=class extends Error{constructor(e,t){super(e,t),this.name="RequestError"}},Ta=e=>e instanceof Z?e:new Z(e.message,{cause:e}),La=global.Request,Pe=class extends La{constructor(t,a){var r;typeof t=="object"&&ye in t&&(t=t[ye]()),typeof((r=a==null?void 0:a.body)==null?void 0:r.getReader)<"u"&&(a.duplex??(a.duplex="half")),super(t,a)}},Oa=e=>{const t=[],a=e.rawHeaders;for(let r=0;r<a.length;r+=2){const{[r]:s,[r+1]:n}=a;s.charCodeAt(0)!==58&&t.push([s,n])}return new Headers(t)},Ht=Symbol("wrapBodyStream"),Ia=(e,t,a,r,s)=>{const n={method:e,headers:a,signal:s.signal};if(e==="TRACE"){n.method="GET";const i=new Pe(t,n);return Object.defineProperty(i,"method",{get(){return"TRACE"}}),i}if(!(e==="GET"||e==="HEAD"))if("rawBody"in r&&r.rawBody instanceof Buffer)n.body=new ReadableStream({start(i){i.enqueue(r.rawBody),i.close()}});else if(r[Ht]){let i;n.body=new ReadableStream({async pull(l){try{i||(i=ct.toWeb(r).getReader());const{done:c,value:d}=await i.read();c?l.close():l.enqueue(d)}catch(c){l.error(c)}}})}else n.body=ct.toWeb(r);return new Pe(t,n)},ye=Symbol("getRequestCache"),Xe=Symbol("requestCache"),Ge=Symbol("incomingKey"),_e=Symbol("urlKey"),Ze=Symbol("headersKey"),_=Symbol("abortControllerKey"),Ha=Symbol("getAbortController"),Qe={get method(){return this[Ge].method||"GET"},get url(){return this[_e]},get headers(){return this[Ze]||(this[Ze]=Oa(this[Ge]))},[Ha](){return this[ye](),this[_]},[ye](){return this[_]||(this[_]=new AbortController),this[Xe]||(this[Xe]=Ia(this.method,this[_e],this.headers,this[Ge],this[_]))}};["body","bodyUsed","cache","credentials","destination","integrity","mode","redirect","referrer","referrerPolicy","signal","keepalive"].forEach(e=>{Object.defineProperty(Qe,e,{get(){return this[ye]()[e]}})});["arrayBuffer","blob","clone","formData","json","text"].forEach(e=>{Object.defineProperty(Qe,e,{value:function(){return this[ye]()[e]()}})});Object.setPrototypeOf(Qe,Pe.prototype);var Ma=(e,t)=>{const a=Object.create(Qe);a[Ge]=e;const r=e.url||"";if(r[0]!=="/"&&(r.startsWith("http://")||r.startsWith("https://"))){if(e instanceof Fe)throw new Z("Absolute URL for :path is not allowed in HTTP/2");try{const l=new URL(r);a[_e]=l.href}catch(l){throw new Z("Invalid absolute URL",{cause:l})}return a}const s=(e instanceof Fe?e.authority:e.headers.host)||t;if(!s)throw new Z("Missing host header");let n;if(e instanceof Fe){if(n=e.scheme,!(n==="http"||n==="https"))throw new Z("Unsupported scheme")}else n=e.socket&&e.socket.encrypted?"https":"http";const i=new URL(`${n}://${s}${r}`);if(i.hostname.length!==s.length&&i.hostname!==s.replace(/:\d+$/,""))throw new Z("Invalid host header");return a[_e]=i.href,a},Be=Symbol("responseCache"),ue=Symbol("getResponseCache"),ee=Symbol("cache"),st=global.Response,Le,F,ve,Oe=(ve=class{constructor(t,a){g(this,Le);g(this,F);let r;if(h(this,Le,t),a instanceof ve){const s=a[Be];if(s){h(this,F,s),this[ue]();return}else h(this,F,o(a,F)),r=new Headers(o(a,F).headers)}else h(this,F,a);(typeof t=="string"||typeof(t==null?void 0:t.getReader)<"u"||t instanceof Blob||t instanceof Uint8Array)&&(r||(r=(a==null?void 0:a.headers)||{"content-type":"text/plain; charset=UTF-8"}),this[ee]=[(a==null?void 0:a.status)||200,t,r])}[ue](){return delete this[ee],this[Be]||(this[Be]=new st(o(this,Le),o(this,F)))}get headers(){const t=this[ee];return t?(t[2]instanceof Headers||(t[2]=new Headers(t[2])),t[2]):this[ue]().headers}get status(){var t;return((t=this[ee])==null?void 0:t[0])??this[ue]().status}get ok(){const t=this.status;return t>=200&&t<300}},Le=new WeakMap,F=new WeakMap,ve);["body","bodyUsed","redirected","statusText","trailers","type","url"].forEach(e=>{Object.defineProperty(Oe.prototype,e,{get(){return this[ue]()[e]}})});["arrayBuffer","blob","clone","formData","json","text"].forEach(e=>{Object.defineProperty(Oe.prototype,e,{value:function(){return this[ue]()[e]()}})});Object.setPrototypeOf(Oe,st);Object.setPrototypeOf(Oe.prototype,st.prototype);async function Ba(e){return Promise.race([e,Promise.resolve().then(()=>Promise.resolve(void 0))])}function Mt(e,t,a){const r=l=>{e.cancel(l).catch(()=>{})};return t.on("close",r),t.on("error",r),(a??e.read()).then(i,s),e.closed.finally(()=>{t.off("close",r),t.off("error",r)});function s(l){l&&t.destroy(l)}function n(){e.read().then(i,s)}function i({done:l,value:c}){try{if(l)t.end();else if(!t.write(c))t.once("drain",n);else return e.read().then(i,s)}catch(d){s(d)}}}function Fa(e,t){if(e.locked)throw new TypeError("ReadableStream is locked.");return t.destroyed?void 0:Mt(e.getReader(),t)}var Bt=e=>{const t={};e instanceof Headers||(e=new Headers(e??void 0));const a=[];for(const[r,s]of e)r==="set-cookie"?a.push(s):t[r]=s;return a.length>0&&(t["set-cookie"]=a),t["content-type"]??(t["content-type"]="text/plain; charset=UTF-8"),t},Na="x-hono-already-sent";typeof global.crypto>"u"&&(global.crypto=zt);var nt=Symbol("outgoingEnded"),qa=()=>new Response(null,{status:400}),Ft=e=>new Response(null,{status:e instanceof Error&&(e.name==="TimeoutError"||e.constructor.name==="TimeoutError")?504:500}),tt=(e,t)=>{const a=e instanceof Error?e:new Error("unknown error",{cause:e});a.code==="ERR_STREAM_PREMATURE_CLOSE"?console.info("The user aborted a request."):(console.error(e),t.headersSent||t.writeHead(500,{"Content-Type":"text/plain"}),t.end(`Error: ${a.message}`),t.destroy(a))},Nt=e=>{"flushHeaders"in e&&e.writable&&e.flushHeaders()},qt=async(e,t)=>{var n,i;let[a,r,s]=e[ee];s instanceof Headers&&(s=Bt(s)),typeof r=="string"?s["Content-Length"]=Buffer.byteLength(r):r instanceof Uint8Array?s["Content-Length"]=r.byteLength:r instanceof Blob&&(s["Content-Length"]=r.size),t.writeHead(a,s),typeof r=="string"||r instanceof Uint8Array?t.end(r):r instanceof Blob?t.end(new Uint8Array(await r.arrayBuffer())):(Nt(t),await((n=Fa(r,t))==null?void 0:n.catch(l=>tt(l,t)))),(i=t[nt])==null||i.call(t)},$a=e=>typeof e.then=="function",Ga=async(e,t,a={})=>{var s;if($a(e))if(a.errorHandler)try{e=await e}catch(n){const i=await a.errorHandler(n);if(!i)return;e=i}else e=await e.catch(Ft);if(ee in e)return qt(e,t);const r=Bt(e.headers);if(e.body){const n=e.body.getReader(),i=[];let l=!1,c;if(r["transfer-encoding"]!=="chunked"){let d=2;for(let u=0;u<d;u++){c||(c=n.read());const f=await Ba(c).catch(m=>{console.error(m),l=!0});if(!f){if(u===1){await new Promise(m=>setTimeout(m)),d=3;continue}break}if(c=void 0,f.value&&i.push(f.value),f.done){l=!0;break}}l&&!("content-length"in r)&&(r["content-length"]=i.reduce((u,f)=>u+f.length,0))}t.writeHead(e.status,r),i.forEach(d=>{t.write(d)}),l?t.end():(i.length===0&&Nt(t),await Mt(n,t,c))}else r[Na]||(t.writeHead(e.status,r),t.end());(s=t[nt])==null||s.call(t)},Wa=(e,t={})=>{const a=t.autoCleanupIncoming??!0;return t.overrideGlobalObjects!==!1&&global.Request!==Pe&&(Object.defineProperty(global,"Request",{value:Pe}),Object.defineProperty(global,"Response",{value:Oe})),async(r,s)=>{let n,i;try{i=Ma(r,t.hostname);let l=!a||r.method==="GET"||r.method==="HEAD";if(l||(r[Ht]=!0,r.on("end",()=>{l=!0}),r instanceof Fe&&(s[nt]=()=>{l||setTimeout(()=>{l||setTimeout(()=>{r.destroy(),s.destroy()})})})),s.on("close",()=>{i[_]&&(r.errored?i[_].abort(r.errored.toString()):s.writableFinished||i[_].abort("Client connection prematurely closed.")),l||setTimeout(()=>{l||setTimeout(()=>{r.destroy()})})}),n=e(i,{incoming:r,outgoing:s}),ee in n)return qt(n,s)}catch(l){if(n)return tt(l,s);if(t.errorHandler){if(n=await t.errorHandler(i?l:Ta(l)),!n)return}else i?n=Ft(l):n=qa()}try{return await Ga(n,s,t)}catch(l){return tt(l,s)}}},_a=e=>Wa(e.fetch);const at=new It,Ua=Object.assign({"/index.tsx":Da});let $t=!1;for(const[,e]of Object.entries(Ua))e&&(at.all("*",t=>{let a;try{a=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,a)}),at.notFound(t=>{let a;try{a=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,a)}),$t=!0);if(!$t)throw new Error("Can't import modules from ['/index.tsx']");const Xa=_a(at);export{Xa as default};
