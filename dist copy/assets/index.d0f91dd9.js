(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function on(){}function tc(r,e){for(const t in e)r[t]=e[t];return r}function ol(r){return r()}function ma(){return Object.create(null)}function ni(r){r.forEach(ol)}function Ks(r){return typeof r=="function"}function st(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function nc(r){return Object.keys(r).length===0}function Js(r,...e){if(r==null)return on;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function In(r){let e;return Js(r,t=>e=t)(),e}function et(r,e,t){r.$$.on_destroy.push(Js(e,t))}function Kt(r,e,t,n){if(r){const i=ll(r,e,t,n);return r[0](i)}}function ll(r,e,t,n){return r[1]&&n?tc(t.ctx.slice(),r[1](n(e))):t.ctx}function Jt(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function $t(r,e,t,n,i,s){if(i){const a=ll(e,t,n,s);r.p(a,i)}}function en(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function es(r,e,t){return r.set(t),e}function ic(r){return r&&Ks(r.destroy)?r.destroy:on}function St(r,e,t){r.insertBefore(e,t||null)}function Mt(r){r.parentNode.removeChild(r)}function cl(r){return document.createElement(r)}function rc(r){return document.createTextNode(r)}function Ft(){return rc(" ")}function Bn(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function ul(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function sc(r){return Array.from(r.childNodes)}function ac(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}let Ji;function Ki(r){Ji=r}function nr(){if(!Ji)throw new Error("Function called outside component initialization");return Ji}function oc(r){nr().$$.on_mount.push(r)}function tt(r){nr().$$.on_destroy.push(r)}function ir(){const r=nr();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=ac(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function sn(r,e){return nr().$$.context.set(r,e),e}function Mn(r){return nr().$$.context.get(r)}function He(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Xi=[],un=[],Or=[],Bs=[],hl=Promise.resolve();let ks=!1;function fl(){ks||(ks=!0,hl.then(dl))}function $i(){return fl(),hl}function Vs(r){Or.push(r)}function ii(r){Bs.push(r)}const ts=new Set;let or=0;function dl(){const r=Ji;do{for(;or<Xi.length;){const e=Xi[or];or++,Ki(e),lc(e.$$)}for(Ki(null),Xi.length=0,or=0;un.length;)un.pop()();for(let e=0;e<Or.length;e+=1){const t=Or[e];ts.has(t)||(ts.add(t),t())}Or.length=0}while(Xi.length);for(;Bs.length;)Bs.pop()();ks=!1,ts.clear(),Ki(r)}function lc(r){if(r.fragment!==null){r.update(),ni(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Vs)}}const Fr=new Set;let Zn;function pl(){Zn={r:0,c:[],p:Zn}}function ml(){Zn.r||ni(Zn.c),Zn=Zn.p}function ve(r,e){r&&r.i&&(Fr.delete(r),r.i(e))}function ye(r,e,t,n){if(r&&r.o){if(Fr.has(r))return;Fr.add(r),Zn.c.push(()=>{Fr.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function ri(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function Ue(r){r&&r.c()}function Fe(r,e,t,n){const{fragment:i,on_mount:s,on_destroy:a,after_update:o}=r.$$;i&&i.m(e,t),n||Vs(()=>{const l=s.map(ol).filter(Ks);a?a.push(...l):ni(l),r.$$.on_mount=[]}),o.forEach(Vs)}function ze(r,e){const t=r.$$;t.fragment!==null&&(ni(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function cc(r,e){r.$$.dirty[0]===-1&&(Xi.push(r),fl(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function ht(r,e,t,n,i,s,a,o=[-1]){const l=Ji;Ki(r);const c=r.$$={fragment:null,ctx:null,props:s,update:on,not_equal:i,bound:ma(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ma(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(h,f,...m)=>{const x=m.length?m[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=x)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](x),u&&cc(r,h)),f}):[],c.update(),u=!0,ni(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=sc(e.target);c.fragment&&c.fragment.l(h),h.forEach(Mt)}else c.fragment&&c.fragment.c();e.intro&&ve(r.$$.fragment),Fe(r,e.target,e.anchor,e.customElement),dl()}Ki(l)}class ft{$destroy(){ze(this,1),this.$destroy=on}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!nc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ci=[];function gl(r,e){return{subscribe:Et(r,e).subscribe}}function Et(r,e=on){let t;const n=new Set;function i(o){if(st(r,o)&&(r=o,t)){const l=!ci.length;for(const c of n)c[1](),ci.push(c,r);if(l){for(let c=0;c<ci.length;c+=2)ci[c][0](ci[c+1]);ci.length=0}}}function s(o){i(o(r))}function a(o,l=on){const c=[o,l];return n.add(c),n.size===1&&(t=e(i)||on),o(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}function uc(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return gl(t,a=>{let o=!1;const l=[];let c=0,u=on;const h=()=>{if(c)return;u();const m=e(n?l[0]:l,a);s?a(m):u=Ks(m)?m:on},f=i.map((m,x)=>Js(m,p=>{l[x]=p,c&=~(1<<x),o&&h()},()=>{c|=1<<x}));return o=!0,h(),function(){ni(f),u()}})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="145",ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hc=0,ga=1,fc=2,_l=1,vl=2,qi=3,Di=0,Wt=1,bn=2,On=0,Li=1,_a=2,va=3,xa=4,dc=5,Ti=100,pc=101,mc=102,ba=103,Ma=104,gc=200,_c=201,vc=202,xc=203,xl=204,bl=205,bc=206,Mc=207,wc=208,Sc=209,yc=210,Ec=0,Tc=1,Ac=2,Gs=3,Cc=4,Lc=5,Pc=6,Dc=7,Ml=0,Rc=1,Ic=2,ln=0,Oc=1,Fc=2,zc=3,wl=4,Nc=5,Sl=300,Ri=301,Ii=302,Hs=303,Ws=304,Br=306,js=1e3,Qt=1001,Xs=1002,Tt=1003,wa=1004,Sa=1005,Gt=1006,Uc=1007,kr=1008,ti=1009,Bc=1010,kc=1011,yl=1012,Vc=1013,Qn=1014,Kn=1015,er=1016,Gc=1017,Hc=1018,Pi=1020,Wc=1021,jc=1022,an=1023,Xc=1024,qc=1025,$n=1026,Oi=1027,Yc=1028,Zc=1029,Qc=1030,Kc=1031,Jc=1033,ns=33776,is=33777,rs=33778,ss=33779,ya=35840,Ea=35841,Ta=35842,Aa=35843,$c=36196,Ca=37492,La=37496,Pa=37808,Da=37809,Ra=37810,Ia=37811,Oa=37812,Fa=37813,za=37814,Na=37815,Ua=37816,Ba=37817,ka=37818,Va=37819,Ga=37820,Ha=37821,Wa=36492,Fn=3e3,Ze=3001,eu=3200,tu=3201,El=0,nu=1,vn="srgb",Jn="srgb-linear",as=7680,iu=519,ja=35044,Xa="300 es",qs=1035;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],os=Math.PI/180,qa=180/Math.PI;function rr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function ru(r,e){return(r%e+e)%e}function ls(r,e,t){return(1-t)*r+t*e}function Ya(r){return(r&r-1)===0&&r!==0}function Ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],x=n[8],p=i[0],d=i[3],g=i[6],_=i[1],w=i[4],M=i[7],b=i[2],y=i[5],O=i[8];return s[0]=a*p+o*_+l*b,s[3]=a*d+o*w+l*y,s[6]=a*g+o*M+l*O,s[1]=c*p+u*_+h*b,s[4]=c*d+u*w+h*y,s[7]=c*g+u*M+h*O,s[2]=f*p+m*_+x*b,s[5]=f*d+m*w+x*y,s[8]=f*g+m*M+x*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,x=t*h+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Tl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ei(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const cs={[vn]:{[Jn]:ei},[Jn]:{[vn]:zr}},Xt={legacyMode:!0,get workingColorSpace(){return Jn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(cs[e]&&cs[e][t]!==void 0){const n=cs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},qt={h:0,s:0,l:0},cr={h:0,s:0,l:0};function us(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ur(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jn){return this.r=e,this.g=t,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jn){if(e=ru(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=us(a,s,e+1/3),this.g=us(a,s,e),this.b=us(a,s,e-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Xt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Xt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Xt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=vn){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Xt.fromWorkingColorSpace(ur(this,lt),e),At(lt.r*255,0,255)<<16^At(lt.g*255,0,255)<<8^At(lt.b*255,0,255)<<0}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jn){Xt.fromWorkingColorSpace(ur(this,lt),t);const n=lt.r,i=lt.g,s=lt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Jn){return Xt.fromWorkingColorSpace(ur(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=vn){return Xt.fromWorkingColorSpace(ur(this,lt),e),e!==vn?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(cr);const n=ls(qt.h,cr.h,t),i=ls(qt.s,cr.s,t),s=ls(qt.l,cr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}De.NAMES=Al;let fi;class Cl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=tr("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ei(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ll{constructor(e=null){this.isSource=!0,this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(hs(i[a].image)):s.push(hs(i[a]))}else s=hs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let su=0;class jt extends si{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Qt,i=Qt,s=Gt,a=kr,o=an,l=ti,c=1,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=rr(),this.name="",this.source=new Ll(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Sl;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(m+1)/2,b=(g+1)/2,y=(u+f)/4,O=(h+p)/4,v=(x+d)/4;return w>M&&w>b?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=y/n,s=O/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=y/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=O/s,i=v/s),this.set(n,i,s,t),this}let _=Math.sqrt((d-x)*(d-x)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(d-x)/_,this.y=(h-p)/_,this.z=(f-u)/_,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends si{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pl extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],x=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(h!==p||l!==f||c!==m||u!==x){let d=1-o;const g=l*f+c*m+u*x+h*p,_=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const b=Math.sqrt(w),y=Math.atan2(b,g*_);d=Math.sin(d*y)/b,o=Math.sin(o*y)/b}const M=o*_;if(l=l*d+f*M,c=c*d+m*M,u=u*d+x*M,h=h*d+p*M,d===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*m-c*f,e[t+1]=l*x+u*f+c*h-o*m,e[t+2]=c*x+u*m+o*f-l*h,e[t+3]=u*x-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),x=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fs.copy(this).projectOnVector(e),this.sub(fs)}reflect(e){return this.sub(fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fs=new R,Za=new gt;class sr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)kn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(kn)}else n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox),ds.applyMatrix4(e.matrixWorld),this.union(ds);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),hr.subVectors(this.max,Vi),di.subVectors(e.a,Vi),pi.subVectors(e.b,Vi),mi.subVectors(e.c,Vi),En.subVectors(pi,di),Tn.subVectors(mi,pi),Vn.subVectors(di,mi);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Vn.z,Vn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Vn.z,0,-Vn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Vn.y,Vn.x,0];return!ps(t,di,pi,mi,hr)||(t=[1,0,0,0,1,0,0,0,1],!ps(t,di,pi,mi,hr))?!1:(fr.crossVectors(En,Tn),t=[fr.x,fr.y,fr.z],ps(t,di,pi,mi,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new R,new R,new R,new R,new R,new R,new R,new R],kn=new R,ds=new sr,di=new R,pi=new R,mi=new R,En=new R,Tn=new R,Vn=new R,Vi=new R,hr=new R,fr=new R,Gn=new R;function ps(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Gn.fromArray(r,s);const o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ou=new sr,Qa=new R,dr=new R,ms=new R;class Vr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ou.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ms.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?dr.set(0,0,1).multiplyScalar(e.radius):dr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Qa.copy(e.center).add(dr)),this.expandByPoint(Qa.copy(e.center).sub(dr)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new R,gs=new R,pr=new R,An=new R,_s=new R,mr=new R,vs=new R;class ea{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gs.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(gs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=An.dot(this.direction),l=-An.dot(pr),c=An.lengthSq(),u=Math.abs(1-a*a);let h,f,m,x;if(u>0)if(h=a*l-o,f=a*o-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const p=1/u;h*=p,f*=p,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(pr).multiplyScalar(f).add(gs),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,s){_s.subVectors(t,e),mr.subVectors(n,e),vs.crossVectors(_s,mr);let a=this.direction.dot(vs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(mr.crossVectors(An,mr));if(l<0)return null;const c=o*this.direction.dot(_s.cross(An));if(c<0||l+c>a)return null;const u=-o*An.dot(vs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,h,f,m,x,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=x,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,x=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,x=c*u,p=c*h;t[0]=f+p*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=p+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,x=c*u,p=c*h;t[0]=f-p*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=p-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,x=o*u,p=o*h;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=p-f*h,t[8]=x*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+x,t[10]=f-p*h}else if(e.order==="XZY"){const f=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=a*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lu,e,cu)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Cn.crossVectors(n,Rt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Cn.crossVectors(n,Rt)),Cn.normalize(),gr.crossVectors(Rt,Cn),i[0]=Cn.x,i[4]=gr.x,i[8]=Rt.x,i[1]=Cn.y,i[5]=gr.y,i[9]=Rt.y,i[2]=Cn.z,i[6]=gr.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],x=n[2],p=n[6],d=n[10],g=n[14],_=n[3],w=n[7],M=n[11],b=n[15],y=i[0],O=i[4],v=i[8],E=i[12],A=i[1],U=i[5],Z=i[9],L=i[13],z=i[2],F=i[6],V=i[10],I=i[14],X=i[3],B=i[7],j=i[11],D=i[15];return s[0]=a*y+o*A+l*z+c*X,s[4]=a*O+o*U+l*F+c*B,s[8]=a*v+o*Z+l*V+c*j,s[12]=a*E+o*L+l*I+c*D,s[1]=u*y+h*A+f*z+m*X,s[5]=u*O+h*U+f*F+m*B,s[9]=u*v+h*Z+f*V+m*j,s[13]=u*E+h*L+f*I+m*D,s[2]=x*y+p*A+d*z+g*X,s[6]=x*O+p*U+d*F+g*B,s[10]=x*v+p*Z+d*V+g*j,s[14]=x*E+p*L+d*I+g*D,s[3]=_*y+w*A+M*z+b*X,s[7]=_*O+w*U+M*F+b*B,s[11]=_*v+w*Z+M*V+b*j,s[15]=_*E+w*L+M*I+b*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],p=e[7],d=e[11],g=e[15];return x*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+p*(+t*l*m-t*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+d*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+g*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],p=e[13],d=e[14],g=e[15],_=h*d*c-p*f*c+p*l*m-o*d*m-h*l*g+o*f*g,w=x*f*c-u*d*c-x*l*m+a*d*m+u*l*g-a*f*g,M=u*p*c-x*h*c+x*o*m-a*p*m-u*o*g+a*h*g,b=x*h*l-u*p*l-x*o*f+a*p*f+u*o*d-a*h*d,y=t*_+n*w+i*M+s*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/y;return e[0]=_*O,e[1]=(p*f*s-h*d*s-p*i*m+n*d*m+h*i*g-n*f*g)*O,e[2]=(o*d*s-p*l*s+p*i*c-n*d*c-o*i*g+n*l*g)*O,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*O,e[4]=w*O,e[5]=(u*d*s-x*f*s+x*i*m-t*d*m-u*i*g+t*f*g)*O,e[6]=(x*l*s-a*d*s-x*i*c+t*d*c+a*i*g-t*l*g)*O,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*m+t*l*m)*O,e[8]=M*O,e[9]=(x*h*s-u*p*s-x*n*m+t*p*m+u*n*g-t*h*g)*O,e[10]=(a*p*s-x*o*s+x*n*c-t*p*c-a*n*g+t*o*g)*O,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*O,e[12]=b*O,e[13]=(u*p*i-x*h*i+x*n*f-t*p*f-u*n*d+t*h*d)*O,e[14]=(x*o*i-a*p*i-x*n*l+t*p*l+a*n*d-t*o*d)*O,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,x=s*h,p=a*u,d=a*h,g=o*h,_=l*c,w=l*u,M=l*h,b=n.x,y=n.y,O=n.z;return i[0]=(1-(p+g))*b,i[1]=(m+M)*b,i[2]=(x-w)*b,i[3]=0,i[4]=(m-M)*y,i[5]=(1-(f+g))*y,i[6]=(d+_)*y,i[7]=0,i[8]=(x+w)*O,i[9]=(d-_)*O,i[10]=(1-(f+p))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gi.set(i[0],i[1],i[2]).length();const a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);const c=1/s,u=1/a,h=1/o;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,f=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new R,Yt=new Ye,lu=new R(0,0,0),cu=new R(1,1,1),Cn=new R,gr=new R,Rt=new R,Ka=new Ye,Ja=new gt;class Ni{constructor(e=0,t=0,n=0,i=Ni.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ka,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ni.DefaultOrder="XYZ";Ni.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uu=0;const $a=new R,_i=new gt,pn=new Ye,_r=new R,Gi=new R,hu=new R,fu=new gt,eo=new R(1,0,0),to=new R(0,1,0),no=new R(0,0,1),du={type:"added"},io={type:"removed"};class We extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const e=new R,t=new Ni,n=new gt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ht}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=We.DefaultMatrixWorldAutoUpdate,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(eo,e)}rotateY(e){return this.rotateOnAxis(to,e)}rotateZ(e){return this.rotateOnAxis(no,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eo,e)}translateY(e){return this.translateOnAxis(to,e)}translateZ(e){return this.translateOnAxis(no,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Gi,_r,this.up):pn.lookAt(_r,Gi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(pn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(du)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(io)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(io)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}We.DefaultUp=new R(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.DefaultMatrixWorldAutoUpdate=!0;const Zt=new R,mn=new R,xs=new R,gn=new R,vi=new R,xi=new R,ro=new R,bs=new R,Ms=new R,ws=new R;class xn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zt.subVectors(e,t),i.cross(Zt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Zt.subVectors(i,t),mn.subVectors(n,t),xs.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(mn),l=Zt.dot(xs),c=mn.dot(mn),u=mn.dot(xs),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,x=(a*u-o*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,gn),l.set(0,0),l.addScaledVector(s,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l}static isFrontFacing(e,t,n,i){return Zt.subVectors(n,t),mn.subVectors(e,t),Zt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Zt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return xn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;vi.subVectors(i,n),xi.subVectors(s,n),bs.subVectors(e,n);const l=vi.dot(bs),c=xi.dot(bs);if(l<=0&&c<=0)return t.copy(n);Ms.subVectors(e,i);const u=vi.dot(Ms),h=xi.dot(Ms);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(vi,a);ws.subVectors(e,s);const m=vi.dot(ws),x=xi.dot(ws);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(xi,o);const d=u*x-m*h;if(d<=0&&h-u>=0&&m-x>=0)return ro.subVectors(s,i),o=(h-u)/(h-u+(m-x)),t.copy(i).addScaledVector(ro,o);const g=1/(d+p+f);return a=p*g,o=f*g,t.copy(n).addScaledVector(vi,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pu=0;class Ui extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Li,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xl,this.blendDst=bl,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gr extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new R,vr=new we;class cn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ja,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dl extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rl extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ge extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mu=0;const Vt=new Ye,Ss=new We,bi=new R,It=new sr,Hi=new sr,dt=new R;class _t extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tl(e)?Rl:Dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Ss.lookAt(e),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(It.min,Hi.min),It.expandByPoint(dt),dt.addVectors(It.max,Hi.max),It.expandByPoint(dt)):(It.expandByPoint(Hi.min),It.expandByPoint(Hi.max))}It.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(bi.fromBufferAttribute(e,c),dt.add(bi)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new R,u[A]=new R;const h=new R,f=new R,m=new R,x=new we,p=new we,d=new we,g=new R,_=new R;function w(A,U,Z){h.fromArray(i,A*3),f.fromArray(i,U*3),m.fromArray(i,Z*3),x.fromArray(a,A*2),p.fromArray(a,U*2),d.fromArray(a,Z*2),f.sub(h),m.sub(h),p.sub(x),d.sub(x);const L=1/(p.x*d.y-d.x*p.y);!isFinite(L)||(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(L),_.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(L),c[A].add(g),c[U].add(g),c[Z].add(g),u[A].add(_),u[U].add(_),u[Z].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,U=M.length;A<U;++A){const Z=M[A],L=Z.start,z=Z.count;for(let F=L,V=L+z;F<V;F+=3)w(n[F+0],n[F+1],n[F+2])}const b=new R,y=new R,O=new R,v=new R;function E(A){O.fromArray(s,A*3),v.copy(O);const U=c[A];b.copy(U),b.sub(O.multiplyScalar(O.dot(U))).normalize(),y.crossVectors(v,U);const L=y.dot(u[A])<0?-1:1;l[A*4]=b.x,l[A*4+1]=b.y,l[A*4+2]=b.z,l[A*4+3]=L}for(let A=0,U=M.length;A<U;++A){const Z=M[A],L=Z.start,z=Z.count;for(let F=L,V=L+z;F<V;F+=3)E(n[F+0]),E(n[F+1]),E(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,s=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let g=0;g<u;g++)f[x++]=c[m++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new Ye,Mi=new ea,ys=new Vr,Ln=new R,Pn=new R,Dn=new R,Es=new R,Ts=new R,As=new R,xr=new R,br=new R,Mr=new R,wr=new we,Sr=new we,yr=new we,Cs=new R,Er=new R;class le extends We{constructor(e=new _t,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),e.ray.intersectsSphere(ys)===!1)||(so.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(so),n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,x=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],_=i[g.materialIndex],w=Math.max(g.start,x.start),M=Math.min(o.count,Math.min(g.start+g.count,x.start+x.count));for(let b=w,y=M;b<y;b+=3){const O=o.getX(b),v=o.getX(b+1),E=o.getX(b+2);a=Tr(this,_,e,Mi,l,c,u,h,f,O,v,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,x.start),d=Math.min(o.count,x.start+x.count);for(let g=p,_=d;g<_;g+=3){const w=o.getX(g),M=o.getX(g+1),b=o.getX(g+2);a=Tr(this,i,e,Mi,l,c,u,h,f,w,M,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],_=i[g.materialIndex],w=Math.max(g.start,x.start),M=Math.min(l.count,Math.min(g.start+g.count,x.start+x.count));for(let b=w,y=M;b<y;b+=3){const O=b,v=b+1,E=b+2;a=Tr(this,_,e,Mi,l,c,u,h,f,O,v,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,x.start),d=Math.min(l.count,x.start+x.count);for(let g=p,_=d;g<_;g+=3){const w=g,M=g+1,b=g+2;a=Tr(this,i,e,Mi,l,c,u,h,f,w,M,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function gu(r,e,t,n,i,s,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==bn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:r}}function Tr(r,e,t,n,i,s,a,o,l,c,u,h){Ln.fromBufferAttribute(i,c),Pn.fromBufferAttribute(i,u),Dn.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){xr.set(0,0,0),br.set(0,0,0),Mr.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const d=f[x],g=s[x];d!==0&&(Es.fromBufferAttribute(g,c),Ts.fromBufferAttribute(g,u),As.fromBufferAttribute(g,h),a?(xr.addScaledVector(Es,d),br.addScaledVector(Ts,d),Mr.addScaledVector(As,d)):(xr.addScaledVector(Es.sub(Ln),d),br.addScaledVector(Ts.sub(Pn),d),Mr.addScaledVector(As.sub(Dn),d)))}Ln.add(xr),Pn.add(br),Dn.add(Mr)}r.isSkinnedMesh&&(r.boneTransform(c,Ln),r.boneTransform(u,Pn),r.boneTransform(h,Dn));const m=gu(r,e,t,n,Ln,Pn,Dn,Cs);if(m){o&&(wr.fromBufferAttribute(o,c),Sr.fromBufferAttribute(o,u),yr.fromBufferAttribute(o,h),m.uv=xn.getUV(Cs,Ln,Pn,Dn,wr,Sr,yr,new we)),l&&(wr.fromBufferAttribute(l,c),Sr.fromBufferAttribute(l,u),yr.fromBufferAttribute(l,h),m.uv2=xn.getUV(Cs,Ln,Pn,Dn,wr,Sr,yr,new we));const x={a:c,b:u,c:h,normal:new R,materialIndex:0};xn.getNormal(Ln,Pn,Dn,x.normal),m.face=x}return m}class $e extends _t{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(h,2));function x(p,d,g,_,w,M,b,y,O,v,E){const A=M/O,U=b/v,Z=M/2,L=b/2,z=y/2,F=O+1,V=v+1;let I=0,X=0;const B=new R;for(let j=0;j<V;j++){const D=j*U-L;for(let J=0;J<F;J++){const $=J*A-Z;B[p]=$*_,B[d]=D*w,B[g]=z,c.push(B.x,B.y,B.z),B[p]=0,B[d]=0,B[g]=y>0?1:-1,u.push(B.x,B.y,B.z),h.push(J/O),h.push(1-j/v),I+=1}}for(let j=0;j<v;j++)for(let D=0;D<O;D++){const J=f+D+F*j,$=f+D+F*(j+1),se=f+(D+1)+F*(j+1),me=f+(D+1)+F*j;l.push(J,$,me),l.push($,se,me),X+=6}o.addGroup(m,X,E),m+=X,f+=I}}static fromJSON(e){return new $e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(r){const e={};for(let t=0;t<r.length;t++){const n=Fi(r[t]);for(const i in n)e[i]=n[i]}return e}function _u(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Il={clone:Fi,merge:xt};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=_u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class na extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends na{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=90,Si=1;class bu extends We{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ot(wi,Si,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const s=new Ot(wi,Si,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const a=new Ot(wi,Si,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const o=new Ot(wi,Si,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new Ot(wi,Si,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new Ot(wi,Si,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ln,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ol extends jt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mu extends zn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ol(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $e(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:On});s.uniforms.tEquirect.value=t;const a=new le(i,s),o=t.minFilter;return t.minFilter===kr&&(t.minFilter=Gt),new bu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ls=new R,wu=new R,Su=new Ht;class Wn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ls.subVectors(n,t).cross(wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ls),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Su.getNormalMatrix(e),i=this.coplanarPoint(Ls).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Vr,Ar=new R;class Hr{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],x=n[10],p=n[11],d=n[12],g=n[13],_=n[14],w=n[15];return t[0].setComponents(o-i,h-l,p-f,w-d).normalize(),t[1].setComponents(o+i,h+l,p+f,w+d).normalize(),t[2].setComponents(o+s,h+c,p+m,w+g).normalize(),t[3].setComponents(o-s,h-c,p-m,w-g).normalize(),t[4].setComponents(o-a,h-u,p-x,w-_).normalize(),t[5].setComponents(o+a,h+u,p+x,w+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ar.x=i.normal.x>0?e.max.x:e.min.x,Ar.y=i.normal.y>0?e.max.y:e.min.y,Ar.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(h instanceof Int16Array)x=5122;else if(h instanceof Uint32Array)x=5125;else if(h instanceof Int32Array)x=5124;else if(h instanceof Int8Array)x=5120;else if(h instanceof Uint8Array)x=5121;else if(h instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Wr extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,m=[],x=[],p=[],d=[];for(let g=0;g<u;g++){const _=g*f-a;for(let w=0;w<c;w++){const M=w*h-s;x.push(M,-_,0),p.push(0,0,1),d.push(w/o),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){const w=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),y=_+1+c*g;m.push(w,M,y),m.push(M,b,y)}this.setIndex(m),this.setAttribute("position",new Ge(x,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(d,2))}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du="vec3 transformed = vec3( position );",Ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ou=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,th=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ch=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ph=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,_h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ch=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Bh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$h=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_f=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Of=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ed=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:Eu,alphamap_pars_fragment:Tu,alphatest_fragment:Au,alphatest_pars_fragment:Cu,aomap_fragment:Lu,aomap_pars_fragment:Pu,begin_vertex:Du,beginnormal_vertex:Ru,bsdfs:Iu,iridescence_fragment:Ou,bumpmap_pars_fragment:Fu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Bu,color_fragment:ku,color_pars_fragment:Vu,color_pars_vertex:Gu,color_vertex:Hu,common:Wu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:Xu,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:Zu,emissivemap_pars_fragment:Qu,encodings_fragment:Ku,encodings_pars_fragment:Ju,envmap_fragment:$u,envmap_common_pars_fragment:eh,envmap_pars_fragment:th,envmap_pars_vertex:nh,envmap_physical_pars_fragment:ph,envmap_vertex:ih,fog_vertex:rh,fog_pars_vertex:sh,fog_fragment:ah,fog_pars_fragment:oh,gradientmap_pars_fragment:lh,lightmap_fragment:ch,lightmap_pars_fragment:uh,lights_lambert_fragment:hh,lights_lambert_pars_fragment:fh,lights_pars_begin:dh,lights_toon_fragment:mh,lights_toon_pars_fragment:gh,lights_phong_fragment:_h,lights_phong_pars_fragment:vh,lights_physical_fragment:xh,lights_physical_pars_fragment:bh,lights_fragment_begin:Mh,lights_fragment_maps:wh,lights_fragment_end:Sh,logdepthbuf_fragment:yh,logdepthbuf_pars_fragment:Eh,logdepthbuf_pars_vertex:Th,logdepthbuf_vertex:Ah,map_fragment:Ch,map_pars_fragment:Lh,map_particle_fragment:Ph,map_particle_pars_fragment:Dh,metalnessmap_fragment:Rh,metalnessmap_pars_fragment:Ih,morphcolor_vertex:Oh,morphnormal_vertex:Fh,morphtarget_pars_vertex:zh,morphtarget_vertex:Nh,normal_fragment_begin:Uh,normal_fragment_maps:Bh,normal_pars_fragment:kh,normal_pars_vertex:Vh,normal_vertex:Gh,normalmap_pars_fragment:Hh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:jh,clearcoat_pars_fragment:Xh,iridescence_pars_fragment:qh,output_fragment:Yh,packing:Zh,premultiplied_alpha_fragment:Qh,project_vertex:Kh,dithering_fragment:Jh,dithering_pars_fragment:$h,roughnessmap_fragment:ef,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:rf,shadowmap_vertex:sf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:uf,specularmap_fragment:hf,specularmap_pars_fragment:ff,tonemapping_fragment:df,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:vf,uv_vertex:xf,uv2_pars_fragment:bf,uv2_pars_vertex:Mf,uv2_vertex:wf,worldpos_vertex:Sf,background_vert:yf,background_frag:Ef,cube_vert:Tf,cube_frag:Af,depth_vert:Cf,depth_frag:Lf,distanceRGBA_vert:Pf,distanceRGBA_frag:Df,equirect_vert:Rf,equirect_frag:If,linedashed_vert:Of,linedashed_frag:Ff,meshbasic_vert:zf,meshbasic_frag:Nf,meshlambert_vert:Uf,meshlambert_frag:Bf,meshmatcap_vert:kf,meshmatcap_frag:Vf,meshnormal_vert:Gf,meshnormal_frag:Hf,meshphong_vert:Wf,meshphong_frag:jf,meshphysical_vert:Xf,meshphysical_frag:qf,meshtoon_vert:Yf,meshtoon_frag:Zf,points_vert:Qf,points_frag:Kf,shadow_vert:Jf,shadow_frag:$f,sprite_vert:ed,sprite_frag:td},ie={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ht},uv2Transform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}}},rn={basic:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new De(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:xt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:xt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new De(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:xt([ie.points,ie.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:xt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:xt([ie.common,ie.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:xt([ie.sprite,ie.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},cube:{uniforms:xt([ie.envmap,{opacity:{value:1}}]),vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:xt([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:xt([ie.lights,ie.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};rn.physical={uniforms:xt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};function nd(r,e,t,n,i,s){const a=new De(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function m(p,d){let g=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=e.get(_));const w=r.xr,M=w.getSession&&w.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?x(a,o):_&&_.isColor&&(x(_,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Br)?(c===void 0&&(c=new le(new $e(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Fi(rn.cube.uniforms),vertexShader:rn.cube.vertexShader,fragmentShader:rn.cube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,(u!==_||h!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new le(new Wr(2,2),new wn({name:"BackgroundMaterial",uniforms:Fi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,x(a,o)},render:m}}function id(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function h(z,F,V,I,X){let B=!1;if(a){const j=p(I,V,F);c!==j&&(c=j,m(c.object)),B=g(z,I,V,X),B&&_(z,I,V,X)}else{const j=F.wireframe===!0;(c.geometry!==I.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=I.id,c.program=V.id,c.wireframe=j,B=!0)}X!==null&&t.update(X,34963),(B||u)&&(u=!1,v(z,F,V,I),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function x(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,F,V){const I=V.wireframe===!0;let X=o[z.id];X===void 0&&(X={},o[z.id]=X);let B=X[F.id];B===void 0&&(B={},X[F.id]=B);let j=B[I];return j===void 0&&(j=d(f()),B[I]=j),j}function d(z){const F=[],V=[],I=[];for(let X=0;X<i;X++)F[X]=0,V[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:I,object:z,attributes:{},index:null}}function g(z,F,V,I){const X=c.attributes,B=F.attributes;let j=0;const D=V.getAttributes();for(const J in D)if(D[J].location>=0){const se=X[J];let me=B[J];if(me===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(me=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(me=z.instanceColor)),se===void 0||se.attribute!==me||me&&se.data!==me.data)return!0;j++}return c.attributesNum!==j||c.index!==I}function _(z,F,V,I){const X={},B=F.attributes;let j=0;const D=V.getAttributes();for(const J in D)if(D[J].location>=0){let se=B[J];se===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(se=z.instanceColor));const me={};me.attribute=se,se&&se.data&&(me.data=se.data),X[J]=me,j++}c.attributes=X,c.attributesNum=j,c.index=I}function w(){const z=c.newAttributes;for(let F=0,V=z.length;F<V;F++)z[F]=0}function M(z){b(z,0)}function b(z,F){const V=c.newAttributes,I=c.enabledAttributes,X=c.attributeDivisors;V[z]=1,I[z]===0&&(r.enableVertexAttribArray(z),I[z]=1),X[z]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,F),X[z]=F)}function y(){const z=c.newAttributes,F=c.enabledAttributes;for(let V=0,I=F.length;V<I;V++)F[V]!==z[V]&&(r.disableVertexAttribArray(V),F[V]=0)}function O(z,F,V,I,X,B){n.isWebGL2===!0&&(V===5124||V===5125)?r.vertexAttribIPointer(z,F,V,X,B):r.vertexAttribPointer(z,F,V,I,X,B)}function v(z,F,V,I){if(n.isWebGL2===!1&&(z.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const X=I.attributes,B=V.getAttributes(),j=F.defaultAttributeValues;for(const D in B){const J=B[D];if(J.location>=0){let $=X[D];if($===void 0&&(D==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),D==="instanceColor"&&z.instanceColor&&($=z.instanceColor)),$!==void 0){const se=$.normalized,me=$.itemSize,k=t.get($);if(k===void 0)continue;const fe=k.buffer,be=k.type,Se=k.bytesPerElement;if($.isInterleavedBufferAttribute){const he=$.data,Be=he.stride,Ce=$.offset;if(he.isInstancedInterleavedBuffer){for(let _e=0;_e<J.locationSize;_e++)b(J.location+_e,he.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let _e=0;_e<J.locationSize;_e++)M(J.location+_e);r.bindBuffer(34962,fe);for(let _e=0;_e<J.locationSize;_e++)O(J.location+_e,me/J.locationSize,be,se,Be*Se,(Ce+me/J.locationSize*_e)*Se)}else{if($.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)b(J.location+he,$.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let he=0;he<J.locationSize;he++)M(J.location+he);r.bindBuffer(34962,fe);for(let he=0;he<J.locationSize;he++)O(J.location+he,me/J.locationSize,be,se,me*Se,me/J.locationSize*he*Se)}}else if(j!==void 0){const se=j[D];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(J.location,se);break;case 3:r.vertexAttrib3fv(J.location,se);break;case 4:r.vertexAttrib4fv(J.location,se);break;default:r.vertexAttrib1fv(J.location,se)}}}}y()}function E(){Z();for(const z in o){const F=o[z];for(const V in F){const I=F[V];for(const X in I)x(I[X].object),delete I[X];delete F[V]}delete o[z]}}function A(z){if(o[z.id]===void 0)return;const F=o[z.id];for(const V in F){const I=F[V];for(const X in I)x(I[X].object),delete I[X];delete F[V]}delete o[z.id]}function U(z){for(const F in o){const V=o[F];if(V[z.id]===void 0)continue;const I=V[z.id];for(const X in I)x(I[X].object),delete I[X];delete V[z.id]}}function Z(){L(),u=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:M,disableUnusedAttributes:y}}function rd(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function sd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),x=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),_=r.getParameter(36349),w=f>0,M=a||e.has("OES_texture_float"),b=w&&M,y=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:w,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:y}}function ad(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Wn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const x=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,m){const x=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,g=r.get(h);if(!i||x===null||x.length===0||s&&!d)s?u(null):c();else{const _=s?0:n,w=_*4;let M=g.clippingState||null;l.value=M,M=u(x,f,w,m);for(let b=0;b!==w;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,x){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,x!==!0||d===null){const g=m+p*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(d===null||d.length<g)&&(d=new Float32Array(g));for(let w=0,M=m;w!==p;++w,M+=4)a.copy(h[w]).applyMatrix4(_,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function od(r){let e=new WeakMap;function t(a,o){return o===Hs?a.mapping=Ri:o===Ws&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Hs||o===Ws)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mu(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jr extends na{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,ao=[.125,.215,.35,.446,.526,.582],qn=20,Ps=new jr,oo=new De;let Ds=null;const jn=(1+Math.sqrt(5))/2,Ei=1/jn,lo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,jn,Ei),new R(0,jn,-Ei),new R(Ei,0,jn),new R(-Ei,0,jn),new R(jn,Ei,0),new R(-jn,Ei,0)];class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ds=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds),e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:er,format:an,encoding:Fn,depthBuffer:!1},i=uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ld(s)),this._blurMaterial=cd(s,e,t)}return i}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,i){const o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(oo),u.toneMapping=ln,u.autoClear=!1;const m=new Gr({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),x=new le(new $e,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(oo),p=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):_===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const w=this._cubeSize;Cr(i,_*w,g>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ri||e.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=lo[(i-1)%lo.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new le(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qn-1),p=s/x,d=isFinite(s)?1+Math.floor(u*p):qn;d>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${qn}`);const g=[];let _=0;for(let O=0;O<qn;++O){const v=O/p,E=Math.exp(-v*v/2);g.push(E),O===0?_+=E:O<d&&(_+=2*E)}for(let O=0;O<g.length;O++)g[O]=g[O]/_;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-n;const M=this._sizeLods[i],b=3*M*(i>w-Ai?i-w+Ai:0),y=4*(this._cubeSize-M);Cr(t,b,y,3*M,2*M),l.setRenderTarget(t),l.render(h,Ps)}}function ld(r){const e=[],t=[],n=[];let i=r;const s=r-Ai+1+ao.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ai?l=ao[a-r+Ai-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,p=3,d=2,g=1,_=new Float32Array(p*x*m),w=new Float32Array(d*x*m),M=new Float32Array(g*x*m);for(let y=0;y<m;y++){const O=y%3*2/3-1,v=y>2?0:-1,E=[O,v,0,O+2/3,v,0,O+2/3,v+1,0,O,v,0,O+2/3,v+1,0,O,v+1,0];_.set(E,p*x*y),w.set(f,d*x*y);const A=[y,y,y,y,y,y];M.set(A,g*x*y)}const b=new _t;b.setAttribute("position",new cn(_,p)),b.setAttribute("uv",new cn(w,d)),b.setAttribute("faceIndex",new cn(M,g)),e.push(b),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uo(r,e,t){const n=new zn(r,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cd(r,e,t){const n=new Float32Array(qn),i=new R(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ho(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function fo(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ud(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hs||l===Ws,u=l===Ri||l===Ii;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new co(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new co(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fd(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],34962);const m=h.morphAttributes;for(const x in m){const p=m[x];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let p=0;if(m!==null){const _=m.array;p=m.version;for(let w=0,M=_.length;w<M;w+=3){const b=_[w+0],y=_[w+1],O=_[w+2];f.push(b,y,y,O,O,b)}}else{const _=x.array;p=x.version;for(let w=0,M=_.length/3-1;w<M;w+=3){const b=w+0,y=w+1,O=w+2;f.push(b,y,y,O,O,b)}}const d=new(Tl(f)?Rl:Dl)(f,1);d.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dd(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,x){if(x===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,f*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function pd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function md(r,e){return r[0]-e[0]}function gd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function _d(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==d){let V=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var x=V;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),b===!0&&(A=2),y===!0&&(A=3);let U=u.attributes.position.count*A,Z=1;U>e.maxTextureSize&&(Z=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const L=new Float32Array(U*Z*4*d),z=new Pl(L,U,Z,d);z.type=Kn,z.needsUpdate=!0;const F=A*4;for(let I=0;I<d;I++){const X=O[I],B=v[I],j=E[I],D=U*Z*4*I;for(let J=0;J<X.count;J++){const $=J*F;M===!0&&(a.fromBufferAttribute(X,J),L[D+$+0]=a.x,L[D+$+1]=a.y,L[D+$+2]=a.z,L[D+$+3]=0),b===!0&&(a.fromBufferAttribute(B,J),L[D+$+4]=a.x,L[D+$+5]=a.y,L[D+$+6]=a.z,L[D+$+7]=0),y===!0&&(a.fromBufferAttribute(j,J),L[D+$+8]=a.x,L[D+$+9]=a.y,L[D+$+10]=a.z,L[D+$+11]=j.itemSize===4?a.w:1)}}g={count:d,texture:z,size:new we(U,Z)},s.set(u,g),u.addEventListener("dispose",V)}let _=0;for(let M=0;M<m.length;M++)_+=m[M];const w=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",w),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];n[u.id]=d}for(let b=0;b<p;b++){const y=d[b];y[0]=b,y[1]=m[b]}d.sort(gd);for(let b=0;b<8;b++)b<p&&d[b][1]?(o[b][0]=d[b][0],o[b][1]=d[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(md);const g=u.morphAttributes.position,_=u.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const y=o[b],O=y[0],v=y[1];O!==Number.MAX_SAFE_INTEGER&&v?(g&&u.getAttribute("morphTarget"+b)!==g[O]&&u.setAttribute("morphTarget"+b,g[O]),_&&u.getAttribute("morphNormal"+b)!==_[O]&&u.setAttribute("morphNormal"+b,_[O]),i[b]=v,w+=v):(g&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const M=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function vd(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const zl=new jt,Nl=new Pl,Ul=new au,Bl=new Ol,po=[],mo=[],go=new Float32Array(16),_o=new Float32Array(9),vo=new Float32Array(4);function Bi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=po[i];if(s===void 0&&(s=new Float32Array(i),po[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xr(r,e){let t=mo[e];t===void 0&&(t=new Int32Array(e),mo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function xd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function bd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function Md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function Sd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;vo.set(n),r.uniformMatrix2fv(this.addr,!1,vo),ut(t,n)}}function yd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;_o.set(n),r.uniformMatrix3fv(this.addr,!1,_o),ut(t,n)}}function Ed(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;go.set(n),r.uniformMatrix4fv(this.addr,!1,go),ut(t,n)}}function Td(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ad(r,e){const t=this.cache;ct(t,e)||(r.uniform2iv(this.addr,e),ut(t,e))}function Cd(r,e){const t=this.cache;ct(t,e)||(r.uniform3iv(this.addr,e),ut(t,e))}function Ld(r,e){const t=this.cache;ct(t,e)||(r.uniform4iv(this.addr,e),ut(t,e))}function Pd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dd(r,e){const t=this.cache;ct(t,e)||(r.uniform2uiv(this.addr,e),ut(t,e))}function Rd(r,e){const t=this.cache;ct(t,e)||(r.uniform3uiv(this.addr,e),ut(t,e))}function Id(r,e){const t=this.cache;ct(t,e)||(r.uniform4uiv(this.addr,e),ut(t,e))}function Od(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||zl,i)}function Fd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ul,i)}function zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bl,i)}function Nd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nl,i)}function Ud(r){switch(r){case 5126:return xd;case 35664:return bd;case 35665:return Md;case 35666:return wd;case 35674:return Sd;case 35675:return yd;case 35676:return Ed;case 5124:case 35670:return Td;case 35667:case 35671:return Ad;case 35668:case 35672:return Cd;case 35669:case 35673:return Ld;case 5125:return Pd;case 36294:return Dd;case 36295:return Rd;case 36296:return Id;case 35678:case 36198:case 36298:case 36306:case 35682:return Od;case 35679:case 36299:case 36307:return Fd;case 35680:case 36300:case 36308:case 36293:return zd;case 36289:case 36303:case 36311:case 36292:return Nd}}function Bd(r,e){r.uniform1fv(this.addr,e)}function kd(r,e){const t=Bi(e,this.size,2);r.uniform2fv(this.addr,t)}function Vd(r,e){const t=Bi(e,this.size,3);r.uniform3fv(this.addr,t)}function Gd(r,e){const t=Bi(e,this.size,4);r.uniform4fv(this.addr,t)}function Hd(r,e){const t=Bi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wd(r,e){const t=Bi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jd(r,e){const t=Bi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xd(r,e){r.uniform1iv(this.addr,e)}function qd(r,e){r.uniform2iv(this.addr,e)}function Yd(r,e){r.uniform3iv(this.addr,e)}function Zd(r,e){r.uniform4iv(this.addr,e)}function Qd(r,e){r.uniform1uiv(this.addr,e)}function Kd(r,e){r.uniform2uiv(this.addr,e)}function Jd(r,e){r.uniform3uiv(this.addr,e)}function $d(r,e){r.uniform4uiv(this.addr,e)}function ep(r,e,t){const n=this.cache,i=e.length,s=Xr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||zl,s[a])}function tp(r,e,t){const n=this.cache,i=e.length,s=Xr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ul,s[a])}function np(r,e,t){const n=this.cache,i=e.length,s=Xr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Bl,s[a])}function ip(r,e,t){const n=this.cache,i=e.length,s=Xr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nl,s[a])}function rp(r){switch(r){case 5126:return Bd;case 35664:return kd;case 35665:return Vd;case 35666:return Gd;case 35674:return Hd;case 35675:return Wd;case 35676:return jd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Zd;case 5125:return Qd;case 36294:return Kd;case 36295:return Jd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ud(t.type)}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rp(t.type)}}class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function xo(r,e){r.seq.push(e),r.map[e.id]=e}function lp(r,e,t){const n=r.name,i=n.length;for(Rs.lastIndex=0;;){const s=Rs.exec(n),a=Rs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){xo(t,c===void 0?new sp(o,r,e):new ap(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new op(o),xo(t,h)),t=h}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);lp(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function bo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let cp=0;function up(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function hp(r){switch(r){case Fn:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Mo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+up(r.getShaderSource(e),a)}else return i}function fp(r,e){const t=hp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dp(r,e){let t;switch(e){case Oc:t="Linear";break;case Fc:t="Reinhard";break;case zc:t="OptimizedCineon";break;case wl:t="ACESFilmic";break;case Nc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pp(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function mp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gp(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Yi(r){return r!==""}function wo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function So(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(r){return r.replace(_p,vp)}function vp(r,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zs(t)}const xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(r){return r.replace(xp,bp)}function bp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Eo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function wp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ri:case Ii:e="ENVMAP_TYPE_CUBE";break;case Br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function yp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Rc:e="ENVMAP_BLENDING_MIX";break;case Ic:e="ENVMAP_BLENDING_ADD";break}return e}function Ep(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tp(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Mp(t),c=wp(t),u=Sp(t),h=yp(t),f=Ep(t),m=t.isWebGL2?"":pp(t),x=mp(s),p=i.createProgram();let d,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(Yi).join(`
`),d.length>0&&(d+=`
`),g=[m,x].filter(Yi).join(`
`),g.length>0&&(g+=`
`)):(d=[Eo(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),g=[m,Eo(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Pe.tonemapping_pars_fragment:"",t.toneMapping!==ln?dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,fp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),a=Zs(a),a=wo(a,t),a=So(a,t),o=Zs(o),o=wo(o,t),o=So(o,t),a=yo(a),o=yo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=_+d+a,M=_+g+o,b=bo(i,35633,w),y=bo(i,35632,M);if(i.attachShader(p,b),i.attachShader(p,y),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),A=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(y).trim();let Z=!0,L=!0;if(i.getProgramParameter(p,35714)===!1){Z=!1;const z=Mo(i,b,"vertex"),F=Mo(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+z+`
`+F)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(A===""||U==="")&&(L=!1);L&&(this.diagnostics={runnable:Z,programLog:E,vertexShader:{log:A,prefix:d},fragmentShader:{log:U,prefix:g}})}i.deleteShader(b),i.deleteShader(y);let O;this.getUniforms=function(){return O===void 0&&(O=new Nr(i,p)),O};let v;return this.getAttributes=function(){return v===void 0&&(v=gp(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=cp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=y,this}let Ap=0;class Cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lp(e),t.set(e,n)),n}}class Lp{constructor(e){this.id=Ap++,this.code=e,this.usedTimes=0}}function Pp(r,e,t,n,i,s,a){const o=new ta,l=new Cp,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,A,U,Z){const L=U.fog,z=Z.geometry,F=v.isMeshStandardMaterial?U.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),I=!!V&&V.mapping===Br?V.image.height:null,X=x[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const B=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,j=B!==void 0?B.length:0;let D=0;z.morphAttributes.position!==void 0&&(D=1),z.morphAttributes.normal!==void 0&&(D=2),z.morphAttributes.color!==void 0&&(D=3);let J,$,se,me;if(X){const Be=rn[X];J=Be.vertexShader,$=Be.fragmentShader}else J=v.vertexShader,$=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);const k=r.getRenderTarget(),fe=v.alphaTest>0,be=v.clearcoat>0,Se=v.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:v.type,vertexShader:J,fragmentShader:$,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:k===null?r.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:Fn,map:!!v.map,matcap:!!v.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:I,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===nu,tangentSpaceNormalMap:v.normalMapType===El,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ze,clearcoat:be,clearcoatMap:be&&!!v.clearcoatMap,clearcoatRoughnessMap:be&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!v.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!v.iridescenceMap,iridescenceThicknessMap:Se&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Li,alphaMap:!!v.alphaMap,alphaTest:fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!z.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:D,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:ln,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===Wt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)E.push(A),E.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(g(E,v),_(E,v),E.push(r.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),v.push(o.mask)}function w(v){const E=x[v.type];let A;if(E){const U=rn[E];A=Il.clone(U.uniforms)}else A=v.uniforms;return A}function M(v,E){let A;for(let U=0,Z=c.length;U<Z;U++){const L=c[U];if(L.cacheKey===E){A=L,++A.usedTimes;break}}return A===void 0&&(A=new Tp(r,E,v,s),c.push(A)),A}function b(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function y(v){l.remove(v)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:M,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:O}}function Dp(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Rp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function To(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ao(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,x,p,d){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:p,group:d},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function o(h,f,m,x,p,d){const g=a(h,f,m,x,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,x,p,d){const g=a(h,f,m,x,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||Rp),n.length>1&&n.sort(f||To),i.length>1&&i.sort(f||To)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Ip(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ao,r.set(n,[a])):i>=s.length?(a=new Ao,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Op(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new De};break;case"SpotLight":t={position:new R,direction:new R,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function Fp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zp=0;function Np(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Up(r,e){const t=new Op,n=Fp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new R);const s=new R,a=new Ye,o=new Ye;function l(u,h){let f=0,m=0,x=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,d=0,g=0,_=0,w=0,M=0,b=0,y=0,O=0,v=0;u.sort(Np);const E=h!==!0?Math.PI:1;for(let U=0,Z=u.length;U<Z;U++){const L=u[U],z=L.color,F=L.intensity,V=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=z.r*F*E,m+=z.g*F*E,x+=z.b*F*E;else if(L.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],F);else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const B=L.shadow,j=n.get(L);j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(F*E),X.distance=V,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[g]=X;const B=L.shadow;if(L.map&&(i.spotLightMap[O]=L.map,O++,B.updateMatrices(L),L.castShadow&&v++),i.spotLightMatrix[g]=B.matrix,L.castShadow){const j=n.get(L);j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.spotShadow[g]=j,i.spotShadowMap[g]=I,y++}g++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(z).multiplyScalar(F),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=X,_++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),X.distance=L.distance,X.decay=L.decay,L.castShadow){const B=L.shadow,j=n.get(L);j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,i.pointShadow[d]=j,i.pointShadowMap[d]=I,i.pointShadowMatrix[d]=L.shadow.matrix,b++}i.point[d]=X,d++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(F*E),X.groundColor.copy(L.groundColor).multiplyScalar(F*E),i.hemi[w]=X,w++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const A=i.hash;(A.directionalLength!==p||A.pointLength!==d||A.spotLength!==g||A.rectAreaLength!==_||A.hemiLength!==w||A.numDirectionalShadows!==M||A.numPointShadows!==b||A.numSpotShadows!==y||A.numSpotMaps!==O)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=_,i.point.length=d,i.hemi.length=w,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+O-v,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=v,A.directionalLength=p,A.pointLength=d,A.spotLength=g,A.rectAreaLength=_,A.hemiLength=w,A.numDirectionalShadows=M,A.numPointShadows=b,A.numSpotShadows=y,A.numSpotMaps=O,i.version=zp++)}function c(u,h){let f=0,m=0,x=0,p=0,d=0;const g=h.matrixWorldInverse;for(let _=0,w=u.length;_<w;_++){const M=u[_];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(M.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),x++}else if(M.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),a.copy(M.matrixWorld),a.premultiply(g),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const b=i.hemi[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),d++}}}return{setup:l,setupView:c,state:i}}function Co(r,e){const t=new Up(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Bp(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Co(r,e),t.set(s,[l])):a>=o.length?(l=new Co(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class kp extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vp extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wp(r,e,t){let n=new Hr;const i=new we,s=new we,a=new pt,o=new kp({depthPacking:tu}),l=new Vp,c={},u=t.maxTextureSize,h={0:Wt,1:Di,2:bn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Gp,fragmentShader:Hp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new _t;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new le(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l,this.render=function(M,b,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const O=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),A=r.state;A.setBlending(On),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let U=0,Z=M.length;U<Z;U++){const L=M[U],z=L.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const F=z.getFrameExtents();if(i.multiply(F),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,z.mapSize.y=s.y)),z.map===null){const I=this.type!==qi?{minFilter:Tt,magFilter:Tt}:{};z.map=new zn(i.x,i.y,I),z.map.texture.name=L.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const V=z.getViewportCount();for(let I=0;I<V;I++){const X=z.getViewport(I);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),A.viewport(a),z.updateMatrices(L,I),n=z.getFrustum(),w(b,y,z.camera,L,this.type)}z.isPointLightShadow!==!0&&this.type===qi&&g(z,y),z.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(O,v,E)};function g(M,b){const y=e.update(p);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,y,f,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,y,m,p,null)}function _(M,b,y,O,v,E){let A=null;const U=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0?A=U:A=y.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const Z=A.uuid,L=b.uuid;let z=c[Z];z===void 0&&(z={},c[Z]=z);let F=z[L];F===void 0&&(F=A.clone(),z[L]=F),A=F}return A.visible=b.visible,A.wireframe=b.wireframe,E===qi?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:h[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(y.matrixWorld),A.nearDistance=O,A.farDistance=v),A}function w(M,b,y,O,v){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===qi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const U=e.update(M),Z=M.material;if(Array.isArray(Z)){const L=U.groups;for(let z=0,F=L.length;z<F;z++){const V=L[z],I=Z[V.materialIndex];if(I&&I.visible){const X=_(M,I,O,y.near,y.far,v);r.renderBufferDirect(y,null,U,X,M,V)}}}else if(Z.visible){const L=_(M,Z,O,y.near,y.far,v);r.renderBufferDirect(y,null,U,L,M,null)}}const A=M.children;for(let U=0,Z=A.length;U<Z;U++)w(A[U],b,y,O,v)}}function jp(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const oe=new pt;let ne=null;const K=new pt(0,0,0,0);return{setMask:function(re){ne!==re&&!N&&(r.colorMask(re,re,re,re),ne=re)},setLocked:function(re){N=re},setClear:function(re,Me,Xe,Je,Sn){Sn===!0&&(re*=Je,Me*=Je,Xe*=Je),oe.set(re,Me,Xe,Je),K.equals(oe)===!1&&(r.clearColor(re,Me,Xe,Je),K.copy(oe))},reset:function(){N=!1,ne=null,K.set(-1,0,0,0)}}}function s(){let N=!1,oe=null,ne=null,K=null;return{setTest:function(re){re?fe(2929):be(2929)},setMask:function(re){oe!==re&&!N&&(r.depthMask(re),oe=re)},setFunc:function(re){if(ne!==re){switch(re){case Ec:r.depthFunc(512);break;case Tc:r.depthFunc(519);break;case Ac:r.depthFunc(513);break;case Gs:r.depthFunc(515);break;case Cc:r.depthFunc(514);break;case Lc:r.depthFunc(518);break;case Pc:r.depthFunc(516);break;case Dc:r.depthFunc(517);break;default:r.depthFunc(515)}ne=re}},setLocked:function(re){N=re},setClear:function(re){K!==re&&(r.clearDepth(re),K=re)},reset:function(){N=!1,oe=null,ne=null,K=null}}}function a(){let N=!1,oe=null,ne=null,K=null,re=null,Me=null,Xe=null,Je=null,Sn=null;return{setTest:function(Qe){N||(Qe?fe(2960):be(2960))},setMask:function(Qe){oe!==Qe&&!N&&(r.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,hn,Bt){(ne!==Qe||K!==hn||re!==Bt)&&(r.stencilFunc(Qe,hn,Bt),ne=Qe,K=hn,re=Bt)},setOp:function(Qe,hn,Bt){(Me!==Qe||Xe!==hn||Je!==Bt)&&(r.stencilOp(Qe,hn,Bt),Me=Qe,Xe=hn,Je=Bt)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Sn!==Qe&&(r.clearStencil(Qe),Sn=Qe)},reset:function(){N=!1,oe=null,ne=null,K=null,re=null,Me=null,Xe=null,Je=null,Sn=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,p=[],d=null,g=!1,_=null,w=null,M=null,b=null,y=null,O=null,v=null,E=!1,A=null,U=null,Z=null,L=null,z=null;const F=r.getParameter(35661);let V=!1,I=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=I>=1):X.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=I>=2);let B=null,j={};const D=r.getParameter(3088),J=r.getParameter(2978),$=new pt().fromArray(D),se=new pt().fromArray(J);function me(N,oe,ne){const K=new Uint8Array(4),re=r.createTexture();r.bindTexture(N,re),r.texParameteri(N,10241,9728),r.texParameteri(N,10240,9728);for(let Me=0;Me<ne;Me++)r.texImage2D(oe+Me,0,6408,1,1,0,6408,5121,K);return re}const k={};k[3553]=me(3553,3553,1),k[34067]=me(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(2929),l.setFunc(Gs),at(!1),Lt(ga),fe(2884),nt(On);function fe(N){f[N]!==!0&&(r.enable(N),f[N]=!0)}function be(N){f[N]!==!1&&(r.disable(N),f[N]=!1)}function Se(N,oe){return m[N]!==oe?(r.bindFramebuffer(N,oe),m[N]=oe,n&&(N===36009&&(m[36160]=oe),N===36160&&(m[36009]=oe)),!0):!1}function he(N,oe){let ne=p,K=!1;if(N)if(ne=x.get(oe),ne===void 0&&(ne=[],x.set(oe,ne)),N.isWebGLMultipleRenderTargets){const re=N.texture;if(ne.length!==re.length||ne[0]!==36064){for(let Me=0,Xe=re.length;Me<Xe;Me++)ne[Me]=36064+Me;ne.length=re.length,K=!0}}else ne[0]!==36064&&(ne[0]=36064,K=!0);else ne[0]!==1029&&(ne[0]=1029,K=!0);K&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Be(N){return d!==N?(r.useProgram(N),d=N,!0):!1}const Ce={[Ti]:32774,[pc]:32778,[mc]:32779};if(n)Ce[ba]=32775,Ce[Ma]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ce[ba]=N.MIN_EXT,Ce[Ma]=N.MAX_EXT)}const _e={[gc]:0,[_c]:1,[vc]:768,[xl]:770,[yc]:776,[wc]:774,[bc]:772,[xc]:769,[bl]:771,[Sc]:775,[Mc]:773};function nt(N,oe,ne,K,re,Me,Xe,Je){if(N===On){g===!0&&(be(3042),g=!1);return}if(g===!1&&(fe(3042),g=!0),N!==dc){if(N!==_||Je!==E){if((w!==Ti||y!==Ti)&&(r.blendEquation(32774),w=Ti,y=Ti),Je)switch(N){case Li:r.blendFuncSeparate(1,771,1,771);break;case _a:r.blendFunc(1,1);break;case va:r.blendFuncSeparate(0,769,0,1);break;case xa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Li:r.blendFuncSeparate(770,771,1,771);break;case _a:r.blendFunc(770,1);break;case va:r.blendFuncSeparate(0,769,0,1);break;case xa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,O=null,v=null,_=N,E=Je}return}re=re||oe,Me=Me||ne,Xe=Xe||K,(oe!==w||re!==y)&&(r.blendEquationSeparate(Ce[oe],Ce[re]),w=oe,y=re),(ne!==M||K!==b||Me!==O||Xe!==v)&&(r.blendFuncSeparate(_e[ne],_e[K],_e[Me],_e[Xe]),M=ne,b=K,O=Me,v=Xe),_=N,E=null}function mt(N,oe){N.side===bn?be(2884):fe(2884);let ne=N.side===Wt;oe&&(ne=!ne),at(ne),N.blending===Li&&N.transparent===!1?nt(On):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const K=N.stencilWrite;c.setTest(K),K&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(32926):be(32926)}function at(N){A!==N&&(N?r.frontFace(2304):r.frontFace(2305),A=N)}function Lt(N){N!==hc?(fe(2884),N!==U&&(N===ga?r.cullFace(1029):N===fc?r.cullFace(1028):r.cullFace(1032))):be(2884),U=N}function ot(N){N!==Z&&(V&&r.lineWidth(N),Z=N)}function ke(N,oe,ne){N?(fe(32823),(L!==oe||z!==ne)&&(r.polygonOffset(oe,ne),L=oe,z=ne)):be(32823)}function Nt(N){N?fe(3089):be(3089)}function Ut(N){N===void 0&&(N=33984+F-1),B!==N&&(r.activeTexture(N),B=N)}function C(N,oe,ne){ne===void 0&&(B===null?ne=33984+F-1:ne=B);let K=j[ne];K===void 0&&(K={type:void 0,texture:void 0},j[ne]=K),(K.type!==N||K.texture!==oe)&&(B!==ne&&(r.activeTexture(ne),B=ne),r.bindTexture(N,oe||k[N]),K.type=N,K.texture=oe)}function S(){const N=j[B];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){$.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),$.copy(N))}function ue(N){se.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),se.copy(N))}function pe(N,oe){let ne=h.get(oe);ne===void 0&&(ne=new WeakMap,h.set(oe,ne));let K=ne.get(N);K===void 0&&(K=r.getUniformBlockIndex(oe,N.name),ne.set(N,K))}function Ee(N,oe){const K=h.get(oe).get(N);u.get(N)!==K&&(r.uniformBlockBinding(oe,K,N.__bindingPointIndex),u.set(N,K))}function Oe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},B=null,j={},m={},x=new WeakMap,p=[],d=null,g=!1,_=null,w=null,M=null,b=null,y=null,O=null,v=null,E=!1,A=null,U=null,Z=null,L=null,z=null,$.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:be,bindFramebuffer:Se,drawBuffers:he,useProgram:Be,setBlending:nt,setMaterial:mt,setFlipSided:at,setCullFace:Lt,setLineWidth:ot,setPolygonOffset:ke,setScissorTest:Nt,activeTexture:Ut,bindTexture:C,unbindTexture:S,compressedTexImage2D:q,texImage2D:H,texImage3D:ce,updateUBOMapping:pe,uniformBlockBinding:Ee,texStorage2D:xe,texStorage3D:P,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:ae,scissor:de,viewport:ue,reset:Oe}}function Xp(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return g?new OffscreenCanvas(C,S):tr("canvas")}function w(C,S,q,ee){let te=1;if((C.width>ee||C.height>ee)&&(te=ee/Math.max(C.width,C.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=S?Ys:Math.floor,xe=ae(te*C.width),P=ae(te*C.height);p===void 0&&(p=_(xe,P));const H=q?_(xe,P):p;return H.width=xe,H.height=P,H.getContext("2d").drawImage(C,0,0,xe,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xe+"x"+P+")."),H}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return Ya(C.width)&&Ya(C.height)}function b(C){return o?!1:C.wrapS!==Qt||C.wrapT!==Qt||C.minFilter!==Tt&&C.minFilter!==Gt}function y(C,S){return C.generateMipmaps&&S&&C.minFilter!==Tt&&C.minFilter!==Gt}function O(C){r.generateMipmap(C)}function v(C,S,q,ee,te=!1){if(o===!1)return S;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=S;return S===6403&&(q===5126&&(ae=33326),q===5131&&(ae=33325),q===5121&&(ae=33321)),S===33319&&(q===5126&&(ae=33328),q===5131&&(ae=33327),q===5121&&(ae=33323)),S===6408&&(q===5126&&(ae=34836),q===5131&&(ae=34842),q===5121&&(ae=ee===Ze&&te===!1?35907:32856),q===32819&&(ae=32854),q===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function E(C,S,q){return y(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Tt&&C.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){return C===Tt||C===wa||C===Sa?9728:9729}function U(C){const S=C.target;S.removeEventListener("dispose",U),L(S),S.isVideoTexture&&x.delete(S)}function Z(C){const S=C.target;S.removeEventListener("dispose",Z),F(S)}function L(C){const S=n.get(C);if(S.__webglInit===void 0)return;const q=C.source,ee=d.get(q);if(ee){const te=ee[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&z(C),Object.keys(ee).length===0&&d.delete(q)}n.remove(C)}function z(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const q=C.source,ee=d.get(q);delete ee[S.__cacheKey],a.memory.textures--}function F(C){const S=C.texture,q=n.get(C),ee=n.get(S);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(q.__webglFramebuffer[te]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let te=0;te<q.__webglColorRenderbuffer.length;te++)q.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[te]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,ae=S.length;te<ae;te++){const xe=n.get(S[te]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(C)}let V=0;function I(){V=0}function X(){const C=V;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),V+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function j(C,S){const q=n.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,C,S);return}}t.bindTexture(3553,q.__webglTexture,33984+S)}function D(C,S){const q=n.get(C);if(C.version>0&&q.__version!==C.version){be(q,C,S);return}t.bindTexture(35866,q.__webglTexture,33984+S)}function J(C,S){const q=n.get(C);if(C.version>0&&q.__version!==C.version){be(q,C,S);return}t.bindTexture(32879,q.__webglTexture,33984+S)}function $(C,S){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Se(q,C,S);return}t.bindTexture(34067,q.__webglTexture,33984+S)}const se={[js]:10497,[Qt]:33071,[Xs]:33648},me={[Tt]:9728,[wa]:9984,[Sa]:9986,[Gt]:9729,[Uc]:9985,[kr]:9987};function k(C,S,q){if(q?(r.texParameteri(C,10242,se[S.wrapS]),r.texParameteri(C,10243,se[S.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,se[S.wrapR]),r.texParameteri(C,10240,me[S.magFilter]),r.texParameteri(C,10241,me[S.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(S.wrapS!==Qt||S.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,A(S.magFilter)),r.texParameteri(C,10241,A(S.minFilter)),S.minFilter!==Tt&&S.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===er&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function fe(C,S){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",U));const ee=S.source;let te=d.get(ee);te===void 0&&(te={},d.set(ee,te));const ae=B(S);if(ae!==C.__cacheKey){te[ae]===void 0&&(te[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),te[ae].usedTimes++;const xe=te[C.__cacheKey];xe!==void 0&&(te[C.__cacheKey].usedTimes--,xe.usedTimes===0&&z(S)),C.__cacheKey=ae,C.__webglTexture=te[ae].texture}return q}function be(C,S,q){let ee=3553;S.isDataArrayTexture&&(ee=35866),S.isData3DTexture&&(ee=32879);const te=fe(C,S),ae=S.source;t.bindTexture(ee,C.__webglTexture,33984+q);const xe=n.get(ae);if(ae.version!==xe.__version||te===!0){t.activeTexture(33984+q),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const P=b(S)&&M(S.image)===!1;let H=w(S.image,P,!1,u);H=Ut(S,H);const ce=M(H)||o,de=s.convert(S.format,S.encoding);let ue=s.convert(S.type),pe=v(S.internalFormat,de,ue,S.encoding,S.isVideoTexture);k(ee,S,ce);let Ee;const Oe=S.mipmaps,N=o&&S.isVideoTexture!==!0,oe=xe.__version===void 0||te===!0,ne=E(S,H,ce);if(S.isDepthTexture)pe=6402,o?S.type===Kn?pe=36012:S.type===Qn?pe=33190:S.type===Pi?pe=35056:pe=33189:S.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===$n&&pe===6402&&S.type!==yl&&S.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Qn,ue=s.convert(S.type)),S.format===Oi&&pe===6402&&(pe=34041,S.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Pi,ue=s.convert(S.type))),oe&&(N?t.texStorage2D(3553,1,pe,H.width,H.height):t.texImage2D(3553,0,pe,H.width,H.height,0,de,ue,null));else if(S.isDataTexture)if(Oe.length>0&&ce){N&&oe&&t.texStorage2D(3553,ne,pe,Oe[0].width,Oe[0].height);for(let K=0,re=Oe.length;K<re;K++)Ee=Oe[K],N?t.texSubImage2D(3553,K,0,0,Ee.width,Ee.height,de,ue,Ee.data):t.texImage2D(3553,K,pe,Ee.width,Ee.height,0,de,ue,Ee.data);S.generateMipmaps=!1}else N?(oe&&t.texStorage2D(3553,ne,pe,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,de,ue,H.data)):t.texImage2D(3553,0,pe,H.width,H.height,0,de,ue,H.data);else if(S.isCompressedTexture){N&&oe&&t.texStorage2D(3553,ne,pe,Oe[0].width,Oe[0].height);for(let K=0,re=Oe.length;K<re;K++)Ee=Oe[K],S.format!==an?de!==null?N?t.compressedTexSubImage2D(3553,K,0,0,Ee.width,Ee.height,de,Ee.data):t.compressedTexImage2D(3553,K,pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(3553,K,0,0,Ee.width,Ee.height,de,ue,Ee.data):t.texImage2D(3553,K,pe,Ee.width,Ee.height,0,de,ue,Ee.data)}else if(S.isDataArrayTexture)N?(oe&&t.texStorage3D(35866,ne,pe,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,de,ue,H.data)):t.texImage3D(35866,0,pe,H.width,H.height,H.depth,0,de,ue,H.data);else if(S.isData3DTexture)N?(oe&&t.texStorage3D(32879,ne,pe,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,de,ue,H.data)):t.texImage3D(32879,0,pe,H.width,H.height,H.depth,0,de,ue,H.data);else if(S.isFramebufferTexture){if(oe)if(N)t.texStorage2D(3553,ne,pe,H.width,H.height);else{let K=H.width,re=H.height;for(let Me=0;Me<ne;Me++)t.texImage2D(3553,Me,pe,K,re,0,de,ue,null),K>>=1,re>>=1}}else if(Oe.length>0&&ce){N&&oe&&t.texStorage2D(3553,ne,pe,Oe[0].width,Oe[0].height);for(let K=0,re=Oe.length;K<re;K++)Ee=Oe[K],N?t.texSubImage2D(3553,K,0,0,de,ue,Ee):t.texImage2D(3553,K,pe,de,ue,Ee);S.generateMipmaps=!1}else N?(oe&&t.texStorage2D(3553,ne,pe,H.width,H.height),t.texSubImage2D(3553,0,0,0,de,ue,H)):t.texImage2D(3553,0,pe,de,ue,H);y(S,ce)&&O(ee),xe.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Se(C,S,q){if(S.image.length!==6)return;const ee=fe(C,S),te=S.source;t.bindTexture(34067,C.__webglTexture,33984+q);const ae=n.get(te);if(te.version!==ae.__version||ee===!0){t.activeTexture(33984+q),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,H=[];for(let K=0;K<6;K++)!xe&&!P?H[K]=w(S.image[K],!1,!0,c):H[K]=P?S.image[K].image:S.image[K],H[K]=Ut(S,H[K]);const ce=H[0],de=M(ce)||o,ue=s.convert(S.format,S.encoding),pe=s.convert(S.type),Ee=v(S.internalFormat,ue,pe,S.encoding),Oe=o&&S.isVideoTexture!==!0,N=ae.__version===void 0||ee===!0;let oe=E(S,ce,de);k(34067,S,de);let ne;if(xe){Oe&&N&&t.texStorage2D(34067,oe,Ee,ce.width,ce.height);for(let K=0;K<6;K++){ne=H[K].mipmaps;for(let re=0;re<ne.length;re++){const Me=ne[re];S.format!==an?ue!==null?Oe?t.compressedTexSubImage2D(34069+K,re,0,0,Me.width,Me.height,ue,Me.data):t.compressedTexImage2D(34069+K,re,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+K,re,0,0,Me.width,Me.height,ue,pe,Me.data):t.texImage2D(34069+K,re,Ee,Me.width,Me.height,0,ue,pe,Me.data)}}}else{ne=S.mipmaps,Oe&&N&&(ne.length>0&&oe++,t.texStorage2D(34067,oe,Ee,H[0].width,H[0].height));for(let K=0;K<6;K++)if(P){Oe?t.texSubImage2D(34069+K,0,0,0,H[K].width,H[K].height,ue,pe,H[K].data):t.texImage2D(34069+K,0,Ee,H[K].width,H[K].height,0,ue,pe,H[K].data);for(let re=0;re<ne.length;re++){const Xe=ne[re].image[K].image;Oe?t.texSubImage2D(34069+K,re+1,0,0,Xe.width,Xe.height,ue,pe,Xe.data):t.texImage2D(34069+K,re+1,Ee,Xe.width,Xe.height,0,ue,pe,Xe.data)}}else{Oe?t.texSubImage2D(34069+K,0,0,0,ue,pe,H[K]):t.texImage2D(34069+K,0,Ee,ue,pe,H[K]);for(let re=0;re<ne.length;re++){const Me=ne[re];Oe?t.texSubImage2D(34069+K,re+1,0,0,ue,pe,Me.image[K]):t.texImage2D(34069+K,re+1,Ee,ue,pe,Me.image[K])}}}y(S,de)&&O(34067),ae.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function he(C,S,q,ee,te){const ae=s.convert(q.format,q.encoding),xe=s.convert(q.type),P=v(q.internalFormat,ae,xe,q.encoding);n.get(S).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,P,S.width,S.height,S.depth,0,ae,xe,null):t.texImage2D(te,0,P,S.width,S.height,0,ae,xe,null)),t.bindFramebuffer(36160,C),ke(S)?f.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(q).__webglTexture,0,ot(S)):r.framebufferTexture2D(36160,ee,te,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(C,S,q){if(r.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(q||ke(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Kn?ee=36012:te.type===Qn&&(ee=33190));const ae=ot(S);ke(S)?f.renderbufferStorageMultisampleEXT(36161,ae,ee,S.width,S.height):r.renderbufferStorageMultisample(36161,ae,ee,S.width,S.height)}else r.renderbufferStorage(36161,ee,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const ee=ot(S);q&&ke(S)===!1?r.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):ke(S)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ee.length;te++){const ae=ee[te],xe=s.convert(ae.format,ae.encoding),P=s.convert(ae.type),H=v(ae.internalFormat,xe,P,ae.encoding),ce=ot(S);q&&ke(S)===!1?r.renderbufferStorageMultisample(36161,ce,H,S.width,S.height):ke(S)?f.renderbufferStorageMultisampleEXT(36161,ce,H,S.width,S.height):r.renderbufferStorage(36161,H,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function Ce(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,te=ot(S);if(S.depthTexture.format===$n)ke(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===Oi)ke(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function _e(C){const S=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,C)}else if(q){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=r.createRenderbuffer(),Be(S.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Be(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function nt(C,S,q){const ee=n.get(C);S!==void 0&&he(ee.__webglFramebuffer,C,C.texture,36064,3553),q!==void 0&&_e(C)}function mt(C){const S=C.texture,q=n.get(C),ee=n.get(S);C.addEventListener("dispose",Z),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=S.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,xe=M(C)||o;if(te){q.__webglFramebuffer=[];for(let P=0;P<6;P++)q.__webglFramebuffer[P]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const P=C.texture;for(let H=0,ce=P.length;H<ce;H++){const de=n.get(P[H]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ke(C)===!1){const P=ae?S:[S];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let H=0;H<P.length;H++){const ce=P[H];q.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer[H]);const de=s.convert(ce.format,ce.encoding),ue=s.convert(ce.type),pe=v(ce.internalFormat,de,ue,ce.encoding,C.isXRRenderTarget===!0),Ee=ot(C);r.renderbufferStorageMultisample(36161,Ee,pe,C.width,C.height),r.framebufferRenderbuffer(36160,36064+H,36161,q.__webglColorRenderbuffer[H])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),k(34067,S,xe);for(let P=0;P<6;P++)he(q.__webglFramebuffer[P],C,S,36064,34069+P);y(S,xe)&&O(34067),t.unbindTexture()}else if(ae){const P=C.texture;for(let H=0,ce=P.length;H<ce;H++){const de=P[H],ue=n.get(de);t.bindTexture(3553,ue.__webglTexture),k(3553,de,xe),he(q.__webglFramebuffer,C,de,36064+H,3553),y(de,xe)&&O(3553)}t.unbindTexture()}else{let P=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?P=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,ee.__webglTexture),k(P,S,xe),he(q.__webglFramebuffer,C,S,36064,P),y(S,xe)&&O(P),t.unbindTexture()}C.depthBuffer&&_e(C)}function at(C){const S=M(C)||o,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,te=q.length;ee<te;ee++){const ae=q[ee];if(y(ae,S)){const xe=C.isWebGLCubeRenderTarget?34067:3553,P=n.get(ae).__webglTexture;t.bindTexture(xe,P),O(xe),t.unbindTexture()}}}function Lt(C){if(o&&C.samples>0&&ke(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,ee=C.height;let te=16384;const ae=[],xe=C.stencilBuffer?33306:36096,P=n.get(C),H=C.isWebGLMultipleRenderTargets===!0;if(H)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){ae.push(36064+ce),C.depthBuffer&&ae.push(xe);const de=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(te|=256),C.stencilBuffer&&(te|=1024)),H&&r.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[ce]),de===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),H){const ue=n.get(S[ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ue,0)}r.blitFramebuffer(0,0,q,ee,0,0,q,ee,te,9728),m&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,P.__webglColorRenderbuffer[ce]);const de=n.get(S[ce]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,de,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function ot(C){return Math.min(h,C.samples)}function ke(C){const S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Nt(C){const S=a.render.frame;x.get(C)!==S&&(x.set(C,S),C.update())}function Ut(C,S){const q=C.encoding,ee=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===qs||q!==Fn&&(q===Ze?o===!1?e.has("EXT_sRGB")===!0&&ee===an?(C.format=qs,C.minFilter=Gt,C.generateMipmaps=!1):S=Cl.sRGBToLinear(S):(ee!==an||te!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),S}this.allocateTextureUnit=X,this.resetTextureUnits=I,this.setTexture2D=j,this.setTexture2DArray=D,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=nt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ke}function qp(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===ti)return 5121;if(s===Gc)return 32819;if(s===Hc)return 32820;if(s===Bc)return 5120;if(s===kc)return 5122;if(s===yl)return 5123;if(s===Vc)return 5124;if(s===Qn)return 5125;if(s===Kn)return 5126;if(s===er)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wc)return 6406;if(s===an)return 6408;if(s===Xc)return 6409;if(s===qc)return 6410;if(s===$n)return 6402;if(s===Oi)return 34041;if(s===Yc)return 6403;if(s===jc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===qs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Zc)return 36244;if(s===Qc)return 33319;if(s===Kc)return 33320;if(s===Jc)return 36249;if(s===ns||s===is||s===rs||s===ss)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===is)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ss)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ya||s===Ea||s===Ta||s===Aa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ya)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ea)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ta)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Aa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$c)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ca||s===La)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ca)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===La)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pa||s===Da||s===Ra||s===Ia||s===Oa||s===Fa||s===za||s===Na||s===Ua||s===Ba||s===ka||s===Va||s===Ga||s===Ha)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Pa)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Da)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ra)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ia)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oa)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fa)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===za)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Na)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ua)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ba)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ka)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Va)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ga)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ha)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Wa)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Pi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Yp extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zp={type:"move"};class Is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const _=new Lr;_.matrixAutoUpdate=!1,_.visible=!1,c.joints[p.jointName]=_,c.add(_)}const g=c.joints[p.jointName];d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Qp extends jt{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:$n,u!==$n&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$n&&(n=Qn),n===void 0&&u===Oi&&(n=Pi),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1}}class Kp extends si{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const g=[],_=[],w=new Ot;w.layers.enable(1),w.viewport=new pt;const M=new Ot;M.layers.enable(2),M.viewport=new pt;const b=[w,M],y=new Yp;y.layers.enable(1),y.layers.enable(2);let O=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=g[B];return j===void 0&&(j=new Is,g[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=g[B];return j===void 0&&(j=new Is,g[B]=j),j.getGripSpace()},this.getHand=function(B){let j=g[B];return j===void 0&&(j=new Is,g[B]=j),j.getHandSpace()};function E(B){const j=_.indexOf(B.inputSource);if(j===-1)return;const D=g[j];D!==void 0&&D.dispatchEvent({type:B.type,data:B.inputSource})}function A(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",A),i.removeEventListener("inputsourceschange",U);for(let B=0;B<g.length;B++){const j=_[B];j!==null&&(_[B]=null,g[B].disconnect(j))}O=null,v=null,e.setRenderTarget(p),f=null,h=null,u=null,i=null,d=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",A),i.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),d=new zn(f.framebufferWidth,f.framebufferHeight,{format:an,type:ti,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let j=null,D=null,J=null;x.depth&&(J=x.stencil?35056:33190,j=x.stencil?Oi:$n,D=x.stencil?Pi:Qn);const $={colorFormat:32856,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer($),i.updateRenderState({layers:[h]}),d=new zn(h.textureWidth,h.textureHeight,{format:an,type:ti,depthTexture:new Qp(h.textureWidth,h.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const se=e.properties.get(d);se.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(B){for(let j=0;j<B.removed.length;j++){const D=B.removed[j],J=_.indexOf(D);J>=0&&(_[J]=null,g[J].dispatchEvent({type:"disconnected",data:D}))}for(let j=0;j<B.added.length;j++){const D=B.added[j];let J=_.indexOf(D);if(J===-1){for(let se=0;se<g.length;se++)if(se>=_.length){_.push(D),J=se;break}else if(_[se]===null){_[se]=D,J=se;break}if(J===-1)break}const $=g[J];$&&$.dispatchEvent({type:"connected",data:D})}}const Z=new R,L=new R;function z(B,j,D){Z.setFromMatrixPosition(j.matrixWorld),L.setFromMatrixPosition(D.matrixWorld);const J=Z.distanceTo(L),$=j.projectionMatrix.elements,se=D.projectionMatrix.elements,me=$[14]/($[10]-1),k=$[14]/($[10]+1),fe=($[9]+1)/$[5],be=($[9]-1)/$[5],Se=($[8]-1)/$[0],he=(se[8]+1)/se[0],Be=me*Se,Ce=me*he,_e=J/(-Se+he),nt=_e*-Se;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(nt),B.translateZ(_e),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const mt=me+_e,at=k+_e,Lt=Be-nt,ot=Ce+(J-nt),ke=fe*k/at*mt,Nt=be*k/at*mt;B.projectionMatrix.makePerspective(Lt,ot,ke,Nt,mt,at)}function F(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;y.near=M.near=w.near=B.near,y.far=M.far=w.far=B.far,(O!==y.near||v!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,v=y.far);const j=B.parent,D=y.cameras;F(y,j);for(let $=0;$<D.length;$++)F(D[$],j);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),B.matrix.copy(y.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const J=B.children;for(let $=0,se=J.length;$<se;$++)J[$].updateMatrixWorld(!0);D.length===2?z(y,w,M):y.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let V=null;function I(B,j){if(c=j.getViewerPose(l||a),m=j,c!==null){const D=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let J=!1;D.length!==y.cameras.length&&(y.cameras.length=0,J=!0);for(let $=0;$<D.length;$++){const se=D[$];let me=null;if(f!==null)me=f.getViewport(se);else{const fe=u.getViewSubImage(h,se);me=fe.viewport,$===0&&(e.setRenderTargetTextures(d,fe.colorTexture,h.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(d))}let k=b[$];k===void 0&&(k=new Ot,k.layers.enable($),k.viewport=new pt,b[$]=k),k.matrix.fromArray(se.transform.matrix),k.projectionMatrix.fromArray(se.projectionMatrix),k.viewport.set(me.x,me.y,me.width,me.height),$===0&&y.matrix.copy(k.matrix),J===!0&&y.cameras.push(k)}}for(let D=0;D<g.length;D++){const J=_[D],$=g[D];J!==null&&$!==void 0&&$.update(J,j,l||a)}V&&V(B,j),m=null}const X=new Fl;X.setAnimationLoop(I),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function Jp(r,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,_,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),c(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,w)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),x(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,g,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Wt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Wt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let _;d.map?_=d.map:d.specularMap?_=d.specularMap:d.displacementMap?_=d.displacementMap:d.normalMap?_=d.normalMap:d.bumpMap?_=d.bumpMap:d.roughnessMap?_=d.roughnessMap:d.metalnessMap?_=d.metalnessMap:d.alphaMap?_=d.alphaMap:d.emissiveMap?_=d.emissiveMap:d.clearcoatMap?_=d.clearcoatMap:d.clearcoatNormalMap?_=d.clearcoatNormalMap:d.clearcoatRoughnessMap?_=d.clearcoatRoughnessMap:d.iridescenceMap?_=d.iridescenceMap:d.iridescenceThicknessMap?_=d.iridescenceThicknessMap:d.specularIntensityMap?_=d.specularIntensityMap:d.specularColorMap?_=d.specularColorMap:d.transmissionMap?_=d.transmissionMap:d.thicknessMap?_=d.thicknessMap:d.sheenColorMap?_=d.sheenColorMap:d.sheenRoughnessMap&&(_=d.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,g,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=_*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Wt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function $p(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(_,w){const M=w.program;n.uniformBlockBinding(_,M)}function c(_,w){let M=i[_.id];M===void 0&&(x(_),M=u(_),i[_.id]=M,_.addEventListener("dispose",d));const b=w.program;n.updateUBOMapping(_,b);const y=e.render.frame;s[_.id]!==y&&(f(_),s[_.id]=y)}function u(_){const w=h();_.__bindingPointIndex=w;const M=r.createBuffer(),b=_.__size,y=_.usage;return r.bindBuffer(35345,M),r.bufferData(35345,b,y),r.bindBuffer(35345,null),r.bindBufferBase(35345,w,M),M}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const w=i[_.id],M=_.uniforms,b=_.__cache;r.bindBuffer(35345,w);for(let y=0,O=M.length;y<O;y++){const v=M[y];if(m(v,y,b)===!0){const E=v.value,A=v.__offset;typeof E=="number"?(v.__data[0]=E,r.bufferSubData(35345,A,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):E.toArray(v.__data),r.bufferSubData(35345,A,v.__data))}}r.bindBuffer(35345,null)}function m(_,w,M){const b=_.value;if(M[w]===void 0)return typeof b=="number"?M[w]=b:M[w]=b.clone(),!0;if(typeof b=="number"){if(M[w]!==b)return M[w]=b,!0}else{const y=M[w];if(y.equals(b)===!1)return y.copy(b),!0}return!1}function x(_){const w=_.uniforms;let M=0;const b=16;let y=0;for(let O=0,v=w.length;O<v;O++){const E=w[O],A=p(E);if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,O>0){y=M%b;const U=b-y;y!==0&&U-A.boundary<0&&(M+=b-y,E.__offset=M)}M+=A.storage}return y=M%b,y>0&&(M+=b-y),_.__size=M,_.__cache={},this}function p(_){const w=_.value,M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function d(_){const w=_.target;w.removeEventListener("dispose",d);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}function em(){const r=tr("canvas");return r.style.display="block",r}function kl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:em(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fn,this.physicallyCorrectLights=!1,this.toneMapping=ln,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,g=0,_=0,w=null,M=-1,b=null;const y=new pt,O=new pt;let v=null,E=e.width,A=e.height,U=1,Z=null,L=null;const z=new pt(0,0,E,A),F=new pt(0,0,E,A);let V=!1;const I=new Hr;let X=!1,B=!1,j=null;const D=new Ye,J=new we,$=new R,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return w===null?U:1}let k=t;function fe(T,W){for(let Y=0;Y<T.length;Y++){const G=T[Y],Q=e.getContext(G,W);if(Q!==null)return Q}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$s}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),k===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),k=fe(W,T),k===null)throw fe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,Se,he,Be,Ce,_e,nt,mt,at,Lt,ot,ke,Nt,Ut,C,S,q,ee,te,ae,xe,P,H,ce;function de(){be=new hd(k),Se=new sd(k,be,r),be.init(Se),P=new qp(k,be,Se),he=new jp(k,be,Se),Be=new pd,Ce=new Dp,_e=new Xp(k,be,he,Ce,Se,P,Be),nt=new od(p),mt=new ud(p),at=new yu(k,Se),H=new id(k,be,at,Se),Lt=new fd(k,at,Be,H),ot=new vd(k,Lt,at,Be),te=new _d(k,Se,_e),S=new ad(Ce),ke=new Pp(p,nt,mt,be,Se,H,S),Nt=new Jp(p,Ce),Ut=new Ip,C=new Bp(be,Se),ee=new nd(p,nt,he,ot,u,a),q=new Wp(p,ot,Se),ce=new $p(k,Be,Se,he),ae=new rd(k,be,Be,Se),xe=new dd(k,be,Be,Se),Be.programs=ke.programs,p.capabilities=Se,p.extensions=be,p.properties=Ce,p.renderLists=Ut,p.shadowMap=q,p.state=he,p.info=Be}de();const ue=new Kp(p,k);this.xr=ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(E,A,!1))},this.getSize=function(T){return T.set(E,A)},this.setSize=function(T,W,Y){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,A=W,e.width=Math.floor(T*U),e.height=Math.floor(W*U),Y!==!1&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(E*U,A*U).floor()},this.setDrawingBufferSize=function(T,W,Y){E=T,A=W,U=Y,e.width=Math.floor(T*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,W,Y,G){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,W,Y,G),he.viewport(y.copy(z).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,W,Y,G){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,W,Y,G),he.scissor(O.copy(F).multiplyScalar(U).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){he.setScissorTest(V=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,W=!0,Y=!0){let G=0;T&&(G|=16384),W&&(G|=256),Y&&(G|=1024),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),Ut.dispose(),C.dispose(),Ce.dispose(),nt.dispose(),mt.dispose(),ot.dispose(),H.dispose(),ce.dispose(),ke.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Me),ue.removeEventListener("sessionend",Xe),j&&(j.dispose(),j=null),Je.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Be.autoReset,W=q.enabled,Y=q.autoUpdate,G=q.needsUpdate,Q=q.type;de(),Be.autoReset=T,q.enabled=W,q.autoUpdate=Y,q.needsUpdate=G,q.type=Q}function Oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function N(T){const W=T.target;W.removeEventListener("dispose",N),oe(W)}function oe(T){ne(T),Ce.remove(T)}function ne(T){const W=Ce.get(T).programs;W!==void 0&&(W.forEach(function(Y){ke.releaseProgram(Y)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,Y,G,Q,ge){W===null&&(W=se);const Te=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=Kl(T,W,Y,G,Q);he.setMaterial(G,Te);let Ae=Y.index;const Ve=Y.attributes.position;if(Ae===null){if(Ve===void 0||Ve.count===0)return}else if(Ae.count===0)return;let Re=1;G.wireframe===!0&&(Ae=Lt.getWireframeAttribute(Y),Re=2),H.setup(Q,G,Le,Y,Ae);let Ie,Ke=ae;Ae!==null&&(Ie=at.get(Ae),Ke=xe,Ke.setIndex(Ie));const Nn=Ae!==null?Ae.count:Ve.count,ai=Y.drawRange.start*Re,oi=Y.drawRange.count*Re,tn=ge!==null?ge.start*Re:0,Ne=ge!==null?ge.count*Re:1/0,li=Math.max(ai,tn),it=Math.min(Nn,ai+oi,tn+Ne)-1,kt=Math.max(0,it-li+1);if(kt!==0){if(Q.isMesh)G.wireframe===!0?(he.setLineWidth(G.wireframeLinewidth*me()),Ke.setMode(1)):Ke.setMode(4);else if(Q.isLine){let yn=G.linewidth;yn===void 0&&(yn=1),he.setLineWidth(yn*me()),Q.isLineSegments?Ke.setMode(1):Q.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else Q.isPoints?Ke.setMode(0):Q.isSprite&&Ke.setMode(4);if(Q.isInstancedMesh)Ke.renderInstances(li,kt,Q.count);else if(Y.isInstancedBufferGeometry){const yn=Math.min(Y.instanceCount,Y._maxInstanceCount);Ke.renderInstances(li,kt,yn)}else Ke.render(li,kt)}},this.compile=function(T,W){function Y(G,Q,ge){G.transparent===!0&&G.side===bn?(G.side=Wt,G.needsUpdate=!0,ar(G,Q,ge),G.side=Di,G.needsUpdate=!0,ar(G,Q,ge),G.side=bn):ar(G,Q,ge)}f=C.get(T),f.init(),x.push(f),T.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(G){const Q=G.material;if(Q)if(Array.isArray(Q))for(let ge=0;ge<Q.length;ge++){const Te=Q[ge];Y(Te,T,G)}else Y(Q,T,G)}),x.pop(),f=null};let K=null;function re(T){K&&K(T)}function Me(){Je.stop()}function Xe(){Je.start()}const Je=new Fl;Je.setAnimationLoop(re),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(T){K=T,ue.setAnimationLoop(T),T===null?Je.stop():Je.start()},ue.addEventListener("sessionstart",Me),ue.addEventListener("sessionend",Xe),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(W),W=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,W,w),f=C.get(T,x.length),f.init(),x.push(f),D.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),I.setFromProjectionMatrix(D),B=this.localClippingEnabled,X=S.init(this.clippingPlanes,B,W),h=Ut.get(T,m.length),h.init(),m.push(h),Sn(T,W,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Z,L),X===!0&&S.beginShadows();const Y=f.state.shadowsArray;if(q.render(Y,T,W),X===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,T),f.setupLights(p.physicallyCorrectLights),W.isArrayCamera){const G=W.cameras;for(let Q=0,ge=G.length;Q<ge;Q++){const Te=G[Q];Qe(h,T,Te,Te.viewport)}}else Qe(h,T,W);w!==null&&(_e.updateMultisampleRenderTarget(w),_e.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(p,T,W),H.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Sn(T,W,Y,G){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||I.intersectsSprite(T)){G&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Te=ot.update(T),Le=T.material;Le.visible&&h.push(T,Te,Le,Y,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||I.intersectsObject(T))){G&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Te=ot.update(T),Le=T.material;if(Array.isArray(Le)){const Ae=Te.groups;for(let Ve=0,Re=Ae.length;Ve<Re;Ve++){const Ie=Ae[Ve],Ke=Le[Ie.materialIndex];Ke&&Ke.visible&&h.push(T,Te,Ke,Y,$.z,Ie)}}else Le.visible&&h.push(T,Te,Le,Y,$.z,null)}}const ge=T.children;for(let Te=0,Le=ge.length;Te<Le;Te++)Sn(ge[Te],W,Y,G)}function Qe(T,W,Y,G){const Q=T.opaque,ge=T.transmissive,Te=T.transparent;f.setupLightsView(Y),ge.length>0&&hn(Q,W,Y),G&&he.viewport(y.copy(G)),Q.length>0&&Bt(Q,W,Y),ge.length>0&&Bt(ge,W,Y),Te.length>0&&Bt(Te,W,Y),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function hn(T,W,Y){const G=Se.isWebGL2;j===null&&(j=new zn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?er:ti,minFilter:kr,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(J),G?j.setSize(J.x,J.y):j.setSize(Ys(J.x),Ys(J.y));const Q=p.getRenderTarget();p.setRenderTarget(j),p.clear();const ge=p.toneMapping;p.toneMapping=ln,Bt(T,W,Y),p.toneMapping=ge,_e.updateMultisampleRenderTarget(j),_e.updateRenderTargetMipmap(j),p.setRenderTarget(Q)}function Bt(T,W,Y){const G=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,ge=T.length;Q<ge;Q++){const Te=T[Q],Le=Te.object,Ae=Te.geometry,Ve=G===null?Te.material:G,Re=Te.group;Le.layers.test(Y.layers)&&Ql(Le,W,Y,Ae,Ve,Re)}}function Ql(T,W,Y,G,Q,ge){T.onBeforeRender(p,W,Y,G,Q,ge),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(p,W,Y,G,T,ge),Q.transparent===!0&&Q.side===bn?(Q.side=Wt,Q.needsUpdate=!0,p.renderBufferDirect(Y,W,G,Q,T,ge),Q.side=Di,Q.needsUpdate=!0,p.renderBufferDirect(Y,W,G,Q,T,ge),Q.side=bn):p.renderBufferDirect(Y,W,G,Q,T,ge),T.onAfterRender(p,W,Y,G,Q,ge)}function ar(T,W,Y){W.isScene!==!0&&(W=se);const G=Ce.get(T),Q=f.state.lights,ge=f.state.shadowsArray,Te=Q.state.version,Le=ke.getParameters(T,Q.state,ge,W,Y),Ae=ke.getProgramCacheKey(Le);let Ve=G.programs;G.environment=T.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(T.isMeshStandardMaterial?mt:nt).get(T.envMap||G.environment),Ve===void 0&&(T.addEventListener("dispose",N),Ve=new Map,G.programs=Ve);let Re=Ve.get(Ae);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===Te)return da(T,Le),Re}else Le.uniforms=ke.getUniforms(T),T.onBuild(Y,Le,p),T.onBeforeCompile(Le,p),Re=ke.acquireProgram(Le,Ae),Ve.set(Ae,Re),G.uniforms=Le.uniforms;const Ie=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=S.uniform),da(T,Le),G.needsLights=$l(T),G.lightsStateVersion=Te,G.needsLights&&(Ie.ambientLightColor.value=Q.state.ambient,Ie.lightProbe.value=Q.state.probe,Ie.directionalLights.value=Q.state.directional,Ie.directionalLightShadows.value=Q.state.directionalShadow,Ie.spotLights.value=Q.state.spot,Ie.spotLightShadows.value=Q.state.spotShadow,Ie.rectAreaLights.value=Q.state.rectArea,Ie.ltc_1.value=Q.state.rectAreaLTC1,Ie.ltc_2.value=Q.state.rectAreaLTC2,Ie.pointLights.value=Q.state.point,Ie.pointLightShadows.value=Q.state.pointShadow,Ie.hemisphereLights.value=Q.state.hemi,Ie.directionalShadowMap.value=Q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ie.spotShadowMap.value=Q.state.spotShadowMap,Ie.spotLightMatrix.value=Q.state.spotLightMatrix,Ie.spotLightMap.value=Q.state.spotLightMap,Ie.pointShadowMap.value=Q.state.pointShadowMap,Ie.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Ke=Re.getUniforms(),Nn=Nr.seqWithValue(Ke.seq,Ie);return G.currentProgram=Re,G.uniformsList=Nn,Re}function da(T,W){const Y=Ce.get(T);Y.outputEncoding=W.outputEncoding,Y.instancing=W.instancing,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function Kl(T,W,Y,G,Q){W.isScene!==!0&&(W=se),_e.resetTextureUnits();const ge=W.fog,Te=G.isMeshStandardMaterial?W.environment:null,Le=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Fn,Ae=(G.isMeshStandardMaterial?mt:nt).get(G.envMap||Te),Ve=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Re=!!G.normalMap&&!!Y.attributes.tangent,Ie=!!Y.morphAttributes.position,Ke=!!Y.morphAttributes.normal,Nn=!!Y.morphAttributes.color,ai=G.toneMapped?p.toneMapping:ln,oi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tn=oi!==void 0?oi.length:0,Ne=Ce.get(G),li=f.state.lights;if(X===!0&&(B===!0||T!==b)){const Pt=T===b&&G.id===M;S.setState(G,T,Pt)}let it=!1;G.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==li.state.version||Ne.outputEncoding!==Le||Q.isInstancedMesh&&Ne.instancing===!1||!Q.isInstancedMesh&&Ne.instancing===!0||Q.isSkinnedMesh&&Ne.skinning===!1||!Q.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ae||G.fog===!0&&Ne.fog!==ge||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==S.numPlanes||Ne.numIntersection!==S.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Re||Ne.morphTargets!==Ie||Ne.morphNormals!==Ke||Ne.morphColors!==Nn||Ne.toneMapping!==ai||Se.isWebGL2===!0&&Ne.morphTargetsCount!==tn)&&(it=!0):(it=!0,Ne.__version=G.version);let kt=Ne.currentProgram;it===!0&&(kt=ar(G,W,Q));let yn=!1,ki=!1,Kr=!1;const wt=kt.getUniforms(),Un=Ne.uniforms;if(he.useProgram(kt.program)&&(yn=!0,ki=!0,Kr=!0),G.id!==M&&(M=G.id,ki=!0),yn||b!==T){if(wt.setValue(k,"projectionMatrix",T.projectionMatrix),Se.logarithmicDepthBuffer&&wt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,ki=!0,Kr=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Pt=wt.map.cameraPosition;Pt!==void 0&&Pt.setValue(k,$.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&wt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||Q.isSkinnedMesh)&&wt.setValue(k,"viewMatrix",T.matrixWorldInverse)}if(Q.isSkinnedMesh){wt.setOptional(k,Q,"bindMatrix"),wt.setOptional(k,Q,"bindMatrixInverse");const Pt=Q.skeleton;Pt&&(Se.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),wt.setValue(k,"boneTexture",Pt.boneTexture,_e),wt.setValue(k,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jr=Y.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&Se.isWebGL2===!0)&&te.update(Q,Y,G,kt),(ki||Ne.receiveShadow!==Q.receiveShadow)&&(Ne.receiveShadow=Q.receiveShadow,wt.setValue(k,"receiveShadow",Q.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Un.envMap.value=Ae,Un.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ki&&(wt.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&Jl(Un,Kr),ge&&G.fog===!0&&Nt.refreshFogUniforms(Un,ge),Nt.refreshMaterialUniforms(Un,G,U,A,j),Nr.upload(k,Ne.uniformsList,Un,_e)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Nr.upload(k,Ne.uniformsList,Un,_e),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&wt.setValue(k,"center",Q.center),wt.setValue(k,"modelViewMatrix",Q.modelViewMatrix),wt.setValue(k,"normalMatrix",Q.normalMatrix),wt.setValue(k,"modelMatrix",Q.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Pt=G.uniformsGroups;for(let $r=0,ec=Pt.length;$r<ec;$r++)if(Se.isWebGL2){const pa=Pt[$r];ce.update(pa,kt),ce.bind(pa,kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kt}function Jl(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function $l(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,W,Y){Ce.get(T.texture).__webglTexture=W,Ce.get(T.depthTexture).__webglTexture=Y;const G=Ce.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Y===void 0,G.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const Y=Ce.get(T);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,Y=0){w=T,g=W,_=Y;let G=!0;if(T){const Ae=Ce.get(T);Ae.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),G=!1):Ae.__webglFramebuffer===void 0?_e.setupRenderTarget(T):Ae.__hasExternalTextures&&_e.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture)}let Q=null,ge=!1,Te=!1;if(T){const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture)&&(Te=!0);const Ve=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Q=Ve[W],ge=!0):Se.isWebGL2&&T.samples>0&&_e.useMultisampledRTT(T)===!1?Q=Ce.get(T).__webglMultisampledFramebuffer:Q=Ve,y.copy(T.viewport),O.copy(T.scissor),v=T.scissorTest}else y.copy(z).multiplyScalar(U).floor(),O.copy(F).multiplyScalar(U).floor(),v=V;if(he.bindFramebuffer(36160,Q)&&Se.drawBuffers&&G&&he.drawBuffers(T,Q),he.viewport(y),he.scissor(O),he.setScissorTest(v),ge){const Ae=Ce.get(T.texture);k.framebufferTexture2D(36160,36064,34069+W,Ae.__webglTexture,Y)}else if(Te){const Ae=Ce.get(T.texture),Ve=W||0;k.framebufferTextureLayer(36160,36064,Ae.__webglTexture,Y||0,Ve)}M=-1},this.readRenderTargetPixels=function(T,W,Y,G,Q,ge,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){he.bindFramebuffer(36160,Le);try{const Ae=T.texture,Ve=Ae.format,Re=Ae.type;if(Ve!==an&&P.convert(Ve)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===er&&(be.has("EXT_color_buffer_half_float")||Se.isWebGL2&&be.has("EXT_color_buffer_float"));if(Re!==ti&&P.convert(Re)!==k.getParameter(35738)&&!(Re===Kn&&(Se.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-G&&Y>=0&&Y<=T.height-Q&&k.readPixels(W,Y,G,Q,P.convert(Ve),P.convert(Re),ge)}finally{const Ae=w!==null?Ce.get(w).__webglFramebuffer:null;he.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(T,W,Y=0){const G=Math.pow(2,-Y),Q=Math.floor(W.image.width*G),ge=Math.floor(W.image.height*G);_e.setTexture2D(W,0),k.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,Q,ge),he.unbindTexture()},this.copyTextureToTexture=function(T,W,Y,G=0){const Q=W.image.width,ge=W.image.height,Te=P.convert(Y.format),Le=P.convert(Y.type);_e.setTexture2D(Y,0),k.pixelStorei(37440,Y.flipY),k.pixelStorei(37441,Y.premultiplyAlpha),k.pixelStorei(3317,Y.unpackAlignment),W.isDataTexture?k.texSubImage2D(3553,G,T.x,T.y,Q,ge,Te,Le,W.image.data):W.isCompressedTexture?k.compressedTexSubImage2D(3553,G,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Te,W.mipmaps[0].data):k.texSubImage2D(3553,G,T.x,T.y,Te,Le,W.image),G===0&&Y.generateMipmaps&&k.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,W,Y,G,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Ae=P.convert(G.format),Ve=P.convert(G.type);let Re;if(G.isData3DTexture)_e.setTexture3D(G,0),Re=32879;else if(G.isDataArrayTexture)_e.setTexture2DArray(G,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,G.flipY),k.pixelStorei(37441,G.premultiplyAlpha),k.pixelStorei(3317,G.unpackAlignment);const Ie=k.getParameter(3314),Ke=k.getParameter(32878),Nn=k.getParameter(3316),ai=k.getParameter(3315),oi=k.getParameter(32877),tn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;k.pixelStorei(3314,tn.width),k.pixelStorei(32878,tn.height),k.pixelStorei(3316,T.min.x),k.pixelStorei(3315,T.min.y),k.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(Re,Q,W.x,W.y,W.z,ge,Te,Le,Ae,Ve,tn.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Re,Q,W.x,W.y,W.z,ge,Te,Le,Ae,tn.data)):k.texSubImage3D(Re,Q,W.x,W.y,W.z,ge,Te,Le,Ae,Ve,tn),k.pixelStorei(3314,Ie),k.pixelStorei(32878,Ke),k.pixelStorei(3316,Nn),k.pixelStorei(3315,ai),k.pixelStorei(32877,oi),Q===0&&G.generateMipmaps&&k.generateMipmap(Re),he.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?_e.setTextureCube(T,0):T.isData3DTexture?_e.setTexture3D(T,0):T.isDataArrayTexture?_e.setTexture2DArray(T,0):_e.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){g=0,_=0,w=null,he.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class tm extends kl{}tm.prototype.isWebGL1Renderer=!0;class nm extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ra extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lo=new R,Po=new R,Do=new Ye,Os=new ea,Pr=new Vr;class _n extends We{constructor(e=new _t,t=new ra){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Lo.fromBufferAttribute(t,i-1),Po.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lo.distanceTo(Po);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;Do.copy(i).invert(),Os.copy(e.ray).applyMatrix4(Do);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,h=new R,f=new R,m=this.isLineSegments?2:1,x=n.index,d=n.attributes.position;if(x!==null){const g=Math.max(0,a.start),_=Math.min(x.count,a.start+a.count);for(let w=g,M=_-1;w<M;w+=m){const b=x.getX(w),y=x.getX(w+1);if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,y),Os.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let w=g,M=_-1;w<M;w+=m){if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,w+1),Os.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ro=new R,Io=new R;class im extends _n{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ro.fromBufferAttribute(t,i),Io.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ro.distanceTo(Io);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bt extends _t{constructor(e=1,t=1,n=1,i=8,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],m=[];let x=0;const p=[],d=n/2;let g=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(m,2));function _(){const M=new R,b=new R;let y=0;const O=(t-e)/n;for(let v=0;v<=s;v++){const E=[],A=v/s,U=A*(t-e)+e;for(let Z=0;Z<=i;Z++){const L=Z/i,z=L*l+o,F=Math.sin(z),V=Math.cos(z);b.x=U*F,b.y=-A*n+d,b.z=U*V,h.push(b.x,b.y,b.z),M.set(F,O,V).normalize(),f.push(M.x,M.y,M.z),m.push(L,1-A),E.push(x++)}p.push(E)}for(let v=0;v<i;v++)for(let E=0;E<s;E++){const A=p[E][v],U=p[E+1][v],Z=p[E+1][v+1],L=p[E][v+1];u.push(A,U,L),u.push(U,Z,L),y+=6}c.addGroup(g,y,0),g+=y}function w(M){const b=x,y=new we,O=new R;let v=0;const E=M===!0?e:t,A=M===!0?1:-1;for(let Z=1;Z<=i;Z++)h.push(0,d*A,0),f.push(0,A,0),m.push(.5,.5),x++;const U=x;for(let Z=0;Z<=i;Z++){const z=Z/i*l+o,F=Math.cos(z),V=Math.sin(z);O.x=E*V,O.y=d*A,O.z=E*F,h.push(O.x,O.y,O.z),f.push(0,A,0),y.x=F*.5+.5,y.y=V*.5*A+.5,m.push(y.x,y.y),x++}for(let Z=0;Z<i;Z++){const L=b+Z,z=U+Z;M===!0?u.push(z,z+1,L):u.push(z+1,z,L),v+=3}c.addGroup(g,v,M===!0?1:2),g+=v}}static fromJSON(e){return new bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const w=new R,M=new R,b=new R;for(let y=0;y<t.length;y+=3)m(t[y+0],w),m(t[y+1],M),m(t[y+2],b),l(w,M,b,_)}function l(_,w,M,b){const y=b+1,O=[];for(let v=0;v<=y;v++){O[v]=[];const E=_.clone().lerp(M,v/y),A=w.clone().lerp(M,v/y),U=y-v;for(let Z=0;Z<=U;Z++)Z===0&&v===y?O[v][Z]=E:O[v][Z]=E.clone().lerp(A,Z/U)}for(let v=0;v<y;v++)for(let E=0;E<2*(y-v)-1;E++){const A=Math.floor(E/2);E%2===0?(f(O[v][A+1]),f(O[v+1][A]),f(O[v][A])):(f(O[v][A+1]),f(O[v+1][A+1]),f(O[v+1][A]))}}function c(_){const w=new R;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(_),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function u(){const _=new R;for(let w=0;w<s.length;w+=3){_.x=s[w+0],_.y=s[w+1],_.z=s[w+2];const M=d(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;a.push(M,1-b)}x(),h()}function h(){for(let _=0;_<a.length;_+=6){const w=a[_+0],M=a[_+2],b=a[_+4],y=Math.max(w,M,b),O=Math.min(w,M,b);y>.9&&O<.1&&(w<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function m(_,w){const M=_*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function x(){const _=new R,w=new R,M=new R,b=new R,y=new we,O=new we,v=new we;for(let E=0,A=0;E<s.length;E+=9,A+=6){_.set(s[E+0],s[E+1],s[E+2]),w.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),y.set(a[A+0],a[A+1]),O.set(a[A+2],a[A+3]),v.set(a[A+4],a[A+5]),b.copy(_).add(w).add(M).divideScalar(3);const U=d(b);p(y,A+0,_,U),p(O,A+2,w,U),p(v,A+4,M,U)}}function p(_,w,M,b){b<0&&_.x===1&&(a[w]=_.x-1),M.x===0&&M.z===0&&(a[w]=b/2/Math.PI+.5)}function d(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}static fromJSON(e){return new sa(e.vertices,e.indices,e.radius,e.details)}}class Ci extends sa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ci(e.radius,e.detail)}}class aa extends _t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new R,f=new R,m=[],x=[],p=[],d=[];for(let g=0;g<=n;g++){const _=[],w=g/n;let M=0;g==0&&a==0?M=.5/t:g==n&&l==Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){const y=b/t;h.x=-e*Math.cos(i+y*s)*Math.sin(a+w*o),h.y=e*Math.cos(a+w*o),h.z=e*Math.sin(i+y*s)*Math.sin(a+w*o),x.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(y+M,1-w),_.push(c++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){const w=u[g][_+1],M=u[g][_],b=u[g+1][_],y=u[g+1][_+1];(g!==0||a>0)&&m.push(w,M,y),(g!==n-1||l<Math.PI)&&m.push(M,b,y)}this.setIndex(m),this.setAttribute("position",new Ge(x,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(d,2))}static fromJSON(e){return new aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yn extends _t{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new R,h=new R,f=new R;for(let m=0;m<=n;m++)for(let x=0;x<=i;x++){const p=x/i*s,d=m/n*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(p),h.y=(e+t*Math.cos(d))*Math.sin(p),h.z=t*Math.sin(d),o.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(x/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=i;x++){const p=(i+1)*m+x-1,d=(i+1)*(m-1)+x-1,g=(i+1)*(m-1)+x,_=(i+1)*m+x;a.push(p,d,_),a.push(d,g,_)}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}static fromJSON(e){return new Yn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rm extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class sm{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const am=new sm;class Vl{constructor(e){this.manager=e!==void 0?e:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class om extends Vl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Oo.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=tr("img");function l(){u(),Oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Fo extends Vl{constructor(e){super(e)}load(e,t,n,i){const s=new jt,a=new om(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class lm extends We{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fs=new Ye,zo=new R,No=new R;class cm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(zo),No.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(No),t.updateMatrixWorld(),Fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class um extends cm{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hm extends lm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uo(){return(typeof performance>"u"?Date:performance).now()}class Hl{constructor(e,t,n=0,i=1/0){this.ray=new ea(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qs(e,this,n,t),n.sort(Bo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Qs(e[i],this,n,t);return n.sort(Bo),n}}function Bo(r,e){return r.distance-e.distance}function Qs(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Qs(i[s],e,t,!0)}}class ko{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fm extends im{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,x=-o;f<=t;f++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const p=f===s?n:i;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const u=new _t;u.setAttribute("position",new Ge(l,3)),u.setAttribute("color",new Ge(c,3));const h=new ra({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class dm extends $e{constructor(e,t,n,i,s,a){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,a)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);const Vo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class qr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const pm=new jr(-1,1,1,-1,0,1),oa=new _t;oa.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3));oa.setAttribute("uv",new Ge([0,2,0,0,2,0],2));class mm{constructor(e){this._mesh=new le(oa,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Go extends qr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Il.clone(e.uniforms),this.material=new wn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new mm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Ho extends qr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class gm extends qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _m{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new we);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Vo===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Go===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Go(Vo),this.clock=new Gl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ho!==void 0&&(a instanceof Ho?n=!0:a instanceof gm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new jr(-1,1,1,-1,0,1);const Wl=new _t;Wl.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3));Wl.setAttribute("uv",new Ge([0,2,0,0,2,0],2));class jl extends qr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const vm=(r,e,t)=>{r.renderer=new kl({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new _m(r.renderer),r.composer.addPass(new jl(r.scene,In(r.camera)))},Wo=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=Fn:r.renderer.outputEncoding=Ze,t?r.renderer.toneMapping=ln:r.renderer.toneMapping=wl)},jo=(r,e,t)=>{!r.renderer||!r.composer||(r.renderer.setSize(e.width,e.height),r.renderer.setPixelRatio(t),r.composer.setSize(e.width,e.height),r.composer.setPixelRatio(t))},Xo=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Ct=r=>r.userData,xm=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Xl=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),bm=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,Mm=(r,e,t)=>{let n=In(r.camera);const i=r.camera.subscribe(c=>n=c);tt(i);let s=In(r.pointer);const a=r.pointer.subscribe(c=>s=c);tt(a);let o;const l=c=>{var f,m;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,xm(r,c);const h=wm(e,s,n);if(u==="pointerdown"&&(o=h?{object:h.object,instanceId:h.instanceId}:null),u==="click"){if(!Sm(h,o)){o=null;return}o=null}!h||(m=(f=Ct(h.object)).eventDispatcher)==null||m.call(f,u,{...h,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function wm(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Xl(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function Sm(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const ym=(r,e)=>{let t=In(r.pointerOverCanvas);const n=r.pointerOverCanvas.subscribe(c=>t=c);tt(n);let i=In(r.camera);const s=r.camera.subscribe(c=>i=c);tt(s);let a=In(r.pointer);const o=r.pointer.subscribe(c=>a=c);return tt(o),{raycast:()=>{var h,f,m,x,p,d,g,_;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Xl(e,a,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&bm(e.lastIntersection,u)&&((d=(p=Ct(e.lastIntersection.object)).eventDispatcher)==null||d.call(p,"pointerleave",e.lastIntersection),(_=(g=Ct(u.object)).eventDispatcher)==null||_.call(g,"pointerenter",u)):(x=(m=Ct(u.object)).eventDispatcher)==null||x.call(m,"pointerenter",u):e.lastIntersection&&((f=(h=Ct(e.lastIntersection.object)).eventDispatcher)==null||f.call(h,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Yr=typeof window<"u",Em=r=>{if(!Yr)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),tt(()=>{!e||cancelAnimationFrame(e)})},Tm=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var a,o;return((a=i.order)!=null?a:0)>((o=s.order)!=null?o:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},Am=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},Cm=(r,e,t,n)=>{let i=In(r.camera);const s=r.camera.subscribe(o=>i=o);tt(s);const{raycast:a}=ym(r,e);Em(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!i||!r.composer||!r.renderer||(Tm(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),Am(t),t.frameInvalidated=!1,t.advance=!1))})},Lm=()=>{const r=new Ot(75,0,.1,1e3);return Ct(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},Pm=r=>{const e=r.size.subscribe(t=>{Ct(In(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});tt(e)},Dm=(r,e,t,n,i,s,a)=>{const o={audioListeners:new Map,addAudioListener:(g,_)=>{if(_=_!=null?_:"default",o.audioListeners.has(_)){console.warn(`An AudioListener with the id "${_}" has already been added, aborting.`);return}o.audioListeners.set(_,g)},removeAudioListener:g=>{if(g=g!=null?g:"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}o.audioListeners.delete(g)},getAudioListener:g=>{if(g=g!=null?g:"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return o.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:uc([n,i],([g,_])=>g||_),pointer:Et(new we),pointerOverCanvas:Et(!1),clock:new Gl,camera:Et(Lm()),scene:new nm,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:Et(e),linear:Et(r),dpr:Et(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(_=>{_ instanceof jl&&(_.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Hl,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{!c.composer||(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{!c.composer||(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}},h={dispose:async(g=!1)=>{await $i(),!(!h.shouldDispose&&!g)&&(h.disposableObjects.forEach((_,w)=>{var M;(_===0||g)&&((M=w==null?void 0:w.dispose)==null||M.call(w),h.disposableObjects.delete(w))}),h.shouldDispose=!1)},collectDisposableObjects:(g,_)=>{const w=_!=null?_:[];return g&&((g==null?void 0:g.dispose)&&typeof g.dispose=="function"&&g.type!=="Scene"&&w.push(g),Object.entries(g).forEach(([M,b])=>{if(M==="parent"||M==="children"||typeof b!="object")return;const y=b;y!=null&&y.dispose&&h.collectDisposableObjects(y,w)})),w},addDisposableObjects:g=>{g.forEach(_=>{const w=h.disposableObjects.get(_);w?h.disposableObjects.set(_,w+1):h.disposableObjects.set(_,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(_=>{const w=h.disposableObjects.get(_);w&&w>0&&h.disposableObjects.set(_,w-1)}),h.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return sn("threlte",c),sn("threlte-root",u),sn("threlte-render-context",l),sn("threlte-audio-context",o),sn("threlte-disposal-context",h),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,disposalCtx:h,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>h}};function Zr(r,e){const t=Et(r);let n=r;const i=t.subscribe(o=>n=o);return tt(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const zt=()=>Mn("threlte");function Rm(r){let e;const t=r[8].default,n=Kt(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&$t(n,t,i,i[7],e?Jt(t,i[7],s,null):en(i[7]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}const Im=()=>({onChildMount:Mn("threlte-hierarchical-object-on-mount"),onChildDestroy:Mn("threlte-hierarchical-object-on-destroy")}),la=()=>Mn("threlte-hierarchical-parent-context");function Om(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=_=>{o.push(_),t(1,o),l==null||l(_)};let{onChildDestroy:u=void 0}=e;const h=_=>{const w=o.findIndex(M=>M.uuid===_.uuid);w!==-1&&o.splice(w,1),t(1,o),u==null||u(_)},{invalidate:f}=zt(),m=la();et(r,m,_=>t(6,n=_));let{parent:x=n}=e;const p=Im();a&&((g=p.onChildMount)==null||g.call(p,a),f("HierarchicalObject: object added"));const d=Zr(a,(_,w)=>{var M,b;w&&((M=p.onChildDestroy)==null||M.call(p,w),f("HierarchicalObject: object added")),_&&((b=p.onChildMount)==null||b.call(p,_),f("HierarchicalObject: object removed"))});return tt(()=>{var _;a&&((_=p.onChildDestroy)==null||_.call(p,a),f("HierarchicalObject: object removed"))}),sn("threlte-hierarchical-object-on-mount",c),sn("threlte-hierarchical-object-on-destroy",h),sn("threlte-hierarchical-parent-context",d),r.$$set=_=>{"object"in _&&t(3,a=_.object),"children"in _&&t(1,o=_.children),"onChildMount"in _&&t(4,l=_.onChildMount),"onChildDestroy"in _&&t(5,u=_.onChildDestroy),"parent"in _&&t(2,x=_.parent),"$$scope"in _&&t(7,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,x=n),r.$$.dirty&8&&d.set(a)},[m,o,x,a,l,u,n,s,i]}class Fm extends ft{constructor(e){super(),ht(this,e,Om,Rm,st,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function zm(r){let e;const t=r[1].default,n=Kt(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&$t(n,t,i,i[4],e?Jt(t,i[4],s,null):en(i[4]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function Nm(r){let e,t;return e=new Fm({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[zm]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},m(n,i){Fe(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){ze(e,n)}}}function Um(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,a,o,i]}class ca extends ft{constructor(e){super(),ht(this,e,Um,Nm,st,{object:0})}}const Bm=()=>{const r=Et({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(a=>e=a);tt(t);let n;const i=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&r.set({width:o,height:l})},s=a=>{n=a,i(),window.addEventListener("resize",i)};return Yr?(tt(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function qo(r){let e,t;return e=new ca({props:{object:r[0].scene,$$slots:{default:[km]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},m(n,i){Fe(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){ze(e,n)}}}function km(r){let e;const t=r[29].default,n=Kt(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&$t(n,t,i,i[33],e?Jt(t,i[33],s,null):en(i[33]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function Vm(r){let e,t,n,i,s=r[2]&&qo(r);return{c(){e=cl("canvas"),s&&s.c(),ul(e,"class","svelte-o3oskp")},m(a,o){St(a,e,o),s&&s.m(e,null),r[30](e),t=!0,n||(i=[ic(r[3].call(null,e)),Bn(e,"click",r[9]),Bn(e,"contextmenu",r[10]),Bn(e,"pointerup",r[13]),Bn(e,"pointerdown",r[11]),Bn(e,"pointermove",r[12]),Bn(e,"pointerenter",r[31]),Bn(e,"pointerleave",r[32])],n=!0)},p(a,o){a[2]?s?(s.p(a,o),o[0]&4&&ve(s,1)):(s=qo(a),s.c(),ve(s,1),s.m(e,null)):s&&(pl(),ye(s,1,1,()=>{s=null}),ml())},i(a){t||(ve(s),t=!0)},o(a){ye(s),t=!1},d(a){a&&Mt(e),s&&s.d(),r[30](null),n=!1,ni(i)}}}const Yo=new Set;function Gm(r,e,t){let n,i,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=Yr?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:x=!0}=e,{shadowMapType:p=vl}=e,{size:d=void 0}=e,{rendererParameters:g=void 0}=e,_,w=!1;const M=Et(d),{parentSize:b,parentSizeAction:y}=Bm(),O=Dm(h,u,c,M,b,m,f),{getCtx:v,renderCtx:E,disposalCtx:A}=O,{ctx:U,rootCtx:Z,audioCtx:L}=O;Pm(U),Yo.add(U.invalidate),tt(()=>{Yo.delete(U.invalidate)});const{size:z,scene:F}=U;et(r,z,fe=>t(26,i=fe));const{flat:V,linear:I,dpr:X}=Z;et(r,V,fe=>t(27,s=fe)),et(r,I,fe=>t(28,a=fe)),et(r,X,fe=>t(25,n=fe)),sn("threlte-parent",Et(F)),oc(()=>{!_||(vm(U,_,g),Wo(U,a,s),jo(U,i,n),Xo(U,x,p),t(2,w=!0))}),Cm(U,Z,E,A);const{onClick:B,onContextMenu:j,onPointerDown:D,onPointerMove:J,onPointerUp:$}=Mm(U,Z,E);tt(()=>{A.dispose(!0)});function se(fe){un[fe?"unshift":"push"](()=>{_=fe,t(1,_)})}const me=()=>v().pointerOverCanvas.set(!0),k=()=>v().pointerOverCanvas.set(!1);return r.$$set=fe=>{"dpr"in fe&&t(14,c=fe.dpr),"flat"in fe&&t(15,u=fe.flat),"linear"in fe&&t(16,h=fe.linear),"frameloop"in fe&&t(17,f=fe.frameloop),"debugFrameloop"in fe&&t(18,m=fe.debugFrameloop),"shadows"in fe&&t(19,x=fe.shadows),"shadowMapType"in fe&&t(20,p=fe.shadowMapType),"size"in fe&&t(21,d=fe.size),"rendererParameters"in fe&&t(22,g=fe.rendererParameters),"$$scope"in fe&&t(33,l=fe.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&M.set(d),r.$$.dirty[0]&65536&&es(I,a=h,a),r.$$.dirty[0]&32768&&es(V,s=u,s),r.$$.dirty[0]&16384&&es(X,n=c,n),r.$$.dirty[0]&402653184&&Wo(v(),a,s),r.$$.dirty[0]&100663296&&jo(v(),i,n),r.$$.dirty[0]&1572864&&Xo(v(),x,p)},[U,_,w,y,v,z,V,I,X,B,j,D,J,$,c,u,h,f,m,x,p,d,g,Z,L,n,i,s,a,o,se,me,k,l]}class Hm extends ft{constructor(e){super(),ht(this,e,Gm,Vm,st,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const ua=()=>Mn("threlte-root"),Wm=()=>Mn("threlte-disposal-context");function jm(r){let e;const t=r[9].default,n=Kt(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&$t(n,t,i,i[8],e?Jt(t,i[8],s,null):en(i[8]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}const Zo="threlte-disposable-object-context";function Xm(r,e,t){var d;let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=Wm();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const m=Mn(Zo);et(r,m,g=>t(7,i=g));const x=Et((d=f!=null?f:i)!=null?d:!0);et(r,x,g=>t(6,n=g)),sn(Zo,x);let p=n?o(u):[];return l(p),tt(()=>{c(p)}),r.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,f=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},r.$$.update=()=>{var g;r.$$.dirty&136&&x.set((g=f!=null?f:i)!=null?g:!0),r.$$.dirty&116&&u!==h&&(c(p),t(5,p=n?o(u):[]),l(p),t(4,h=u))},[m,x,u,f,h,p,n,i,a,s]}class zi extends ft{constructor(e){super(),ht(this,e,Xm,jm,st,{object:2,dispose:3})}}function qm(r,e,t){let n,i,{object:s}=e;const a=Zr(s);et(r,a,c=>t(4,i=c));const o=Mn("threlte-layers");et(r,o,c=>t(3,n=c));const{invalidate:l}=zt();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&a.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[a,o,s,n,i]}class ql extends ft{constructor(e){super(),ht(this,e,qm,null,st,{object:2})}}const Qr=(r,e)=>{var o;if(!Yr)return{start:()=>{},stop:()=>{},started:gl(!1)};const t=Mn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Et(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},a=()=>{t.frameHandlers.add(n),i.set(!0)};return((o=e==null?void 0:e.autostart)==null||o)&&a(),tt(()=>{s()}),{start:a,stop:s,started:{subscribe:i.subscribe}}},Yl=()=>{const r=Et(!1);return(async()=>{await $i(),r.set(!0)})(),r};function Ym(r,e,t){let n,i,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new R,h=ir(),{invalidate:f}=zt(),m=Yl();et(r,m,w=>t(8,i=w));const x=async()=>{i||await $i(),h("transform")},p=async()=>{f("TransformableObject: transformed"),await x()};Ct(s).onTransform=p;const{start:d,stop:g}=Qr(async()=>{c&&!l&&c instanceof We&&(c.getWorldPosition(u),s.lookAt(u),await x())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),_=Zr(s);return et(r,_,w=>t(7,n=w)),r.$$set=w=>{"object"in w&&t(2,s=w.object),"position"in w&&t(3,a=w.position),"scale"in w&&t(4,o=w.scale),"rotation"in w&&t(5,l=w.rotation),"lookAt"in w&&t(6,c=w.lookAt)},r.$$.update=()=>{var w,M,b,y,O,v,E,A,U,Z,L,z,F;r.$$.dirty&4&&_.set(s),r.$$.dirty&232&&(a&&(n.position.set((w=a.x)!=null?w:0,(M=a.y)!=null?M:0,(b=a.z)!=null?b:0),p()),c&&!l&&(c instanceof We?d():(g(),n.lookAt((y=c.x)!=null?y:0,(O=c.y)!=null?O:0,(v=c.z)!=null?v:0),p())),c||g()),r.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set((E=o.x)!=null?E:1,(A=o.y)!=null?A:1,(U=o.z)!=null?U:1),p()),r.$$.dirty&160&&l&&(n.rotation.set((Z=l.x)!=null?Z:0,(L=l.y)!=null?L:0,(z=l.z)!=null?z:0,(F=l.order)!=null?F:"XYZ"),p())},[m,_,s,a,o,l,c,n]}class ha extends ft{constructor(e){super(),ht(this,e,Ym,null,st,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function Zm(r,e,t){let n,i,s,{object:a}=e,{viewportAware:o=!1}=e;const l=ir(),{camera:c,invalidate:u}=zt();et(r,c,y=>t(8,s=y));const h=new Hr,f=new Ye,m=y=>y.type==="Mesh",x=new R,p=()=>s?(f.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),h.setFromProjectionMatrix(f),m(a)?h.intersectsObject(a):(a.getWorldPosition(x),h.containsPoint(x))):!0,d=Yl();et(r,d,y=>t(7,i=y));let{inViewport:g=p()}=e;const _=async y=>{y?(i||await $i(),l("viewportenter",a)):(i||await $i(),l("viewportleave",a))},{start:w,stop:M,started:b}=Qr(()=>{const y=p();g===void 0?(t(3,g=p()),_(g)):y!==g&&(_(y),t(3,g=y))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return et(r,b,y=>t(6,n=y)),u("ViewportAwareObject"),r.$$set=y=>{"object"in y&&t(4,a=y.object),"viewportAware"in y&&t(5,o=y.viewportAware),"inViewport"in y&&t(3,g=y.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(o&&!n?w():!o&&n&&M())},[c,d,b,g,a,o,n]}class Qm extends ft{constructor(e){super(),ht(this,e,Zm,null,st,{object:4,viewportAware:5,inViewport:3})}}function Km(r){let e;const t=r[14].default,n=Kt(t,r,r[18],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&$t(n,t,i,i[18],e?Jt(t,i[18],s,null):en(i[18]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function Jm(r){let e,t;return e=new ca({props:{object:r[1],$$slots:{default:[Km]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},m(n,i){Fe(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){ze(e,n)}}}function $m(r){let e,t,n,i,s,a,o,l,c;e=new ql({props:{object:r[1]}}),n=new ha({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new zi({props:{object:r[1],dispose:r[7],$$slots:{default:[Jm]},$$scope:{ctx:r}}});function u(f){r[15](f)}let h={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(h.inViewport=r[0]),o=new Qm({props:h}),un.push(()=>ri(o,"inViewport",u)),o.$on("viewportenter",r[16]),o.$on("viewportleave",r[17]),{c(){Ue(e.$$.fragment),t=Ft(),Ue(n.$$.fragment),i=Ft(),Ue(s.$$.fragment),a=Ft(),Ue(o.$$.fragment)},m(f,m){Fe(e,f,m),St(f,t,m),Fe(n,f,m),St(f,i,m),Fe(s,f,m),St(f,a,m),Fe(o,f,m),c=!0},p(f,[m]){const x={};m&2&&(x.object=f[1]),e.$set(x);const p={};m&2&&(p.object=f[1]),m&4&&(p.position=f[2]),m&16&&(p.rotation=f[4]),m&8&&(p.scale=f[3]),m&32&&(p.lookAt=f[5]),n.$set(p);const d={};m&2&&(d.object=f[1]),m&128&&(d.dispose=f[7]),m&262146&&(d.$$scope={dirty:m,ctx:f}),s.$set(d);const g={};m&2&&(g.object=f[1]),m&64&&(g.viewportAware=f[6]),!l&&m&1&&(l=!0,g.inViewport=f[0],ii(()=>l=!1)),o.$set(g)},i(f){c||(ve(e.$$.fragment,f),ve(n.$$.fragment,f),ve(s.$$.fragment,f),ve(o.$$.fragment,f),c=!0)},o(f){ye(e.$$.fragment,f),ye(n.$$.fragment,f),ye(s.$$.fragment,f),ye(o.$$.fragment,f),c=!1},d(f){ze(e,f),f&&Mt(t),ze(n,f),f&&Mt(i),ze(s,f),f&&Mt(a),ze(o,f)}}}function eg(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:x=void 0}=e,{renderOrder:p=void 0}=e,{visible:d=void 0}=e,{dispose:g=void 0}=e,{userData:_=void 0}=e;const{invalidate:w}=zt(),M=()=>s;function b(v){h=v,t(0,h)}function y(v){He.call(this,r,v)}function O(v){He.call(this,r,v)}return r.$$set=v=>{"object"in v&&t(1,s=v.object),"position"in v&&t(2,a=v.position),"scale"in v&&t(3,o=v.scale),"rotation"in v&&t(4,l=v.rotation),"lookAt"in v&&t(5,c=v.lookAt),"viewportAware"in v&&t(6,u=v.viewportAware),"inViewport"in v&&t(0,h=v.inViewport),"castShadow"in v&&t(8,f=v.castShadow),"receiveShadow"in v&&t(9,m=v.receiveShadow),"frustumCulled"in v&&t(10,x=v.frustumCulled),"renderOrder"in v&&t(11,p=v.renderOrder),"visible"in v&&t(12,d=v.visible),"dispose"in v&&t(7,g=v.dispose),"userData"in v&&t(13,_=v.userData),"$$scope"in v&&t(18,i=v.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(d!==void 0&&(M().visible=d),f!==void 0&&(M().castShadow=f),m!==void 0&&(M().receiveShadow=m),x!==void 0&&(M().frustumCulled=x),p!==void 0&&(M().renderOrder=p),_!==void 0&&(M().userData={...M().userData,..._}),w("Object3DInstance: props changed"))},[h,s,a,o,l,c,u,g,f,m,x,p,d,_,n,b,y,O,i]}class fa extends ft{constructor(e){super(),ht(this,e,eg,$m,st,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function tg(r){let e;const t=r[17].default,n=Kt(t,r,r[21],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&$t(n,t,i,i[21],e?Jt(t,i[21],s,null):en(i[21]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function ng(r){let e,t,n;function i(a){r[18](a)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[tg]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new fa({props:s}),un.push(()=>ri(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){Ue(e.$$.fragment)},m(a,o){Fe(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&2097152&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],ii(()=>t=!1)),e.$set(l)},i(a){n||(ve(e.$$.fragment,a),n=!0)},o(a){ye(e.$$.fragment,a),n=!1},d(a){ze(e,a)}}}function ig(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:x=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:d=void 0}=e,{visible:g=void 0}=e,{userData:_=void 0}=e,{dispose:w=void 0}=e,{useCamera:M=!1}=e;const b=Zr(a);et(r,b,A=>t(16,n=A));const{setCamera:y}=ua();function O(A){f=A,t(0,f)}function v(A){He.call(this,r,A)}function E(A){He.call(this,r,A)}return r.$$set=A=>{"camera"in A&&t(1,a=A.camera),"position"in A&&t(2,o=A.position),"scale"in A&&t(3,l=A.scale),"rotation"in A&&t(4,c=A.rotation),"lookAt"in A&&t(5,u=A.lookAt),"viewportAware"in A&&t(6,h=A.viewportAware),"inViewport"in A&&t(0,f=A.inViewport),"castShadow"in A&&t(7,m=A.castShadow),"receiveShadow"in A&&t(8,x=A.receiveShadow),"frustumCulled"in A&&t(9,p=A.frustumCulled),"renderOrder"in A&&t(10,d=A.renderOrder),"visible"in A&&t(11,g=A.visible),"userData"in A&&t(12,_=A.userData),"dispose"in A&&t(13,w=A.dispose),"useCamera"in A&&t(15,M=A.useCamera),"$$scope"in A&&t(21,s=A.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&b.set(a),r.$$.dirty&98304&&M&&y(n)},[f,a,o,l,c,u,h,m,x,p,d,g,_,w,b,M,n,i,O,v,E,s]}class rg extends ft{constructor(e){super(),ht(this,e,ig,ng,st,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function sg(r){let e;const t=r[20].default,n=Kt(t,r,r[24],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&$t(n,t,i,i[24],e?Jt(t,i[24],s,null):en(i[24]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function ag(r){let e,t,n;function i(a){r[21](a)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[sg]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new rg({props:s}),un.push(()=>ri(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){Ue(e.$$.fragment)},m(a,o){Fe(e,a,o),n=!0},p(a,[o]){const l={};o&1&&(l.camera=a[0]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.userData=a[11]),o&4096&&(l.dispose=a[12]),o&8192&&(l.viewportAware=a[13]),o&32&&(l.lookAt=a[5]),o&16384&&(l.useCamera=a[14]),o&16777216&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],ii(()=>t=!1)),e.$set(l)},i(a){n||(ve(e.$$.fragment,a),n=!0)},o(a){ye(e.$$.fragment,a),n=!1},d(a){ze(e,a)}}}function og(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:m=void 0}=e,{visible:x=void 0}=e,{userData:p=void 0}=e,{dispose:d=void 0}=e,{viewportAware:g=!1}=e,{inViewport:_=!1}=e,{useCamera:w=!0}=e,{near:M=void 0}=e,{far:b=void 0}=e,{fov:y=void 0}=e;const{size:O,invalidate:v}=zt();et(r,O,L=>t(19,n=L));const E=new Ot(y,n.width/n.height,M,b);function A(L){_=L,t(1,_)}function U(L){He.call(this,r,L)}function Z(L){He.call(this,r,L)}return r.$$set=L=>{"position"in L&&t(2,a=L.position),"scale"in L&&t(3,o=L.scale),"rotation"in L&&t(4,l=L.rotation),"lookAt"in L&&t(5,c=L.lookAt),"castShadow"in L&&t(6,u=L.castShadow),"receiveShadow"in L&&t(7,h=L.receiveShadow),"frustumCulled"in L&&t(8,f=L.frustumCulled),"renderOrder"in L&&t(9,m=L.renderOrder),"visible"in L&&t(10,x=L.visible),"userData"in L&&t(11,p=L.userData),"dispose"in L&&t(12,d=L.dispose),"viewportAware"in L&&t(13,g=L.viewportAware),"inViewport"in L&&t(1,_=L.inViewport),"useCamera"in L&&t(14,w=L.useCamera),"near"in L&&t(16,M=L.near),"far"in L&&t(17,b=L.far),"fov"in L&&t(18,y=L.fov),"$$scope"in L&&t(24,s=L.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,E.aspect=n.width/n.height,E),E.updateProjectionMatrix(),v("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(M!==void 0&&t(0,E.near=M,E),b!==void 0&&t(0,E.far=b,E),y!==void 0&&t(0,E.fov=y,E),E.updateProjectionMatrix(),v("PerspectiveCamera: props changed"))},[E,_,a,o,l,c,u,h,f,m,x,p,d,g,w,O,M,b,y,n,i,A,U,Z,s]}class lg extends ft{constructor(e){super(),ht(this,e,og,ag,st,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Qo=[],cg=(r,e)=>{const t=Qo.find(i=>i instanceof r);if(t)return t;const n=e();return Qo.push(n),n},Ko={type:"change"},zs={type:"start"},Jo={type:"end"};class ug extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ut),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ko),n.update(),s=i.NONE},this.update=function(){const P=new R,H=new gt().setFromUnitVectors(e.up,new R(0,1,0)),ce=H.clone().invert(),de=new R,ue=new gt,pe=2*Math.PI;return function(){const Oe=n.object.position;P.copy(Oe).sub(n.target),P.applyQuaternion(H),o.setFromVector3(P),n.autoRotate&&s===i.NONE&&E(O()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let N=n.minAzimuthAngle,oe=n.maxAzimuthAngle;return isFinite(N)&&isFinite(oe)&&(N<-Math.PI?N+=pe:N>Math.PI&&(N-=pe),oe<-Math.PI?oe+=pe:oe>Math.PI&&(oe-=pe),N<=oe?o.theta=Math.max(N,Math.min(oe,o.theta)):o.theta=o.theta>(N+oe)/2?Math.max(N,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(o),P.applyQuaternion(ce),Oe.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||de.distanceToSquared(n.object.position)>a||8*(1-ue.dot(n.object.quaternion))>a?(n.dispatchEvent(Ko),de.copy(n.object.position),ue.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",nt),n.domElement.removeEventListener("pointercancel",Lt),n.domElement.removeEventListener("wheel",Nt),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",at),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ut)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new ko,l=new ko;let c=1;const u=new R;let h=!1;const f=new we,m=new we,x=new we,p=new we,d=new we,g=new we,_=new we,w=new we,M=new we,b=[],y={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(P){l.theta-=P}function A(P){l.phi-=P}const U=function(){const P=new R;return function(ce,de){P.setFromMatrixColumn(de,0),P.multiplyScalar(-ce),u.add(P)}}(),Z=function(){const P=new R;return function(ce,de){n.screenSpacePanning===!0?P.setFromMatrixColumn(de,1):(P.setFromMatrixColumn(de,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ce),u.add(P)}}(),L=function(){const P=new R;return function(ce,de){const ue=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;P.copy(pe).sub(n.target);let Ee=P.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ce*Ee/ue.clientHeight,n.object.matrix),Z(2*de*Ee/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ce*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),Z(de*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(P){f.set(P.clientX,P.clientY)}function I(P){_.set(P.clientX,P.clientY)}function X(P){p.set(P.clientX,P.clientY)}function B(P){m.set(P.clientX,P.clientY),x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;E(2*Math.PI*x.x/H.clientHeight),A(2*Math.PI*x.y/H.clientHeight),f.copy(m),n.update()}function j(P){w.set(P.clientX,P.clientY),M.subVectors(w,_),M.y>0?z(v()):M.y<0&&F(v()),_.copy(w),n.update()}function D(P){d.set(P.clientX,P.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),L(g.x,g.y),p.copy(d),n.update()}function J(P){P.deltaY<0?F(v()):P.deltaY>0&&z(v()),n.update()}function $(P){let H=!1;switch(P.code){case n.keys.UP:L(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:L(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:L(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:L(-n.keyPanSpeed,0),H=!0;break}H&&(P.preventDefault(),n.update())}function se(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),H=.5*(b[0].pageY+b[1].pageY);f.set(P,H)}}function me(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),H=.5*(b[0].pageY+b[1].pageY);p.set(P,H)}}function k(){const P=b[0].pageX-b[1].pageX,H=b[0].pageY-b[1].pageY,ce=Math.sqrt(P*P+H*H);_.set(0,ce)}function fe(){n.enableZoom&&k(),n.enablePan&&me()}function be(){n.enableZoom&&k(),n.enableRotate&&se()}function Se(P){if(b.length==1)m.set(P.pageX,P.pageY);else{const ce=xe(P),de=.5*(P.pageX+ce.x),ue=.5*(P.pageY+ce.y);m.set(de,ue)}x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;E(2*Math.PI*x.x/H.clientHeight),A(2*Math.PI*x.y/H.clientHeight),f.copy(m)}function he(P){if(b.length===1)d.set(P.pageX,P.pageY);else{const H=xe(P),ce=.5*(P.pageX+H.x),de=.5*(P.pageY+H.y);d.set(ce,de)}g.subVectors(d,p).multiplyScalar(n.panSpeed),L(g.x,g.y),p.copy(d)}function Be(P){const H=xe(P),ce=P.pageX-H.x,de=P.pageY-H.y,ue=Math.sqrt(ce*ce+de*de);w.set(0,ue),M.set(0,Math.pow(w.y/_.y,n.zoomSpeed)),z(M.y),_.copy(w)}function Ce(P){n.enableZoom&&Be(P),n.enablePan&&he(P)}function _e(P){n.enableZoom&&Be(P),n.enableRotate&&Se(P)}function nt(P){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",mt),n.domElement.addEventListener("pointerup",at)),ee(P),P.pointerType==="touch"?C(P):ot(P))}function mt(P){n.enabled!==!1&&(P.pointerType==="touch"?S(P):ke(P))}function at(P){te(P),b.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",at)),n.dispatchEvent(Jo),s=i.NONE}function Lt(P){te(P)}function ot(P){let H;switch(P.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case ui.DOLLY:if(n.enableZoom===!1)return;I(P),s=i.DOLLY;break;case ui.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),s=i.PAN}else{if(n.enableRotate===!1)return;V(P),s=i.ROTATE}break;case ui.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;V(P),s=i.ROTATE}else{if(n.enablePan===!1)return;X(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(zs)}function ke(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;B(P);break;case i.DOLLY:if(n.enableZoom===!1)return;j(P);break;case i.PAN:if(n.enablePan===!1)return;D(P);break}}function Nt(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(zs),J(P),n.dispatchEvent(Jo))}function Ut(P){n.enabled===!1||n.enablePan===!1||$(P)}function C(P){switch(ae(P),b.length){case 1:switch(n.touches.ONE){case hi.ROTATE:if(n.enableRotate===!1)return;se(),s=i.TOUCH_ROTATE;break;case hi.PAN:if(n.enablePan===!1)return;me(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(),s=i.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(zs)}function S(P){switch(ae(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(P),n.update();break;default:s=i.NONE}}function q(P){n.enabled!==!1&&P.preventDefault()}function ee(P){b.push(P)}function te(P){delete y[P.pointerId];for(let H=0;H<b.length;H++)if(b[H].pointerId==P.pointerId){b.splice(H,1);return}}function ae(P){let H=y[P.pointerId];H===void 0&&(H=new we,y[P.pointerId]=H),H.set(P.pageX,P.pageY)}function xe(P){const H=P.pointerId===b[0].pointerId?b[1]:b[0];return y[H.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",nt),n.domElement.addEventListener("pointercancel",Lt),n.domElement.addEventListener("wheel",Nt,{passive:!1}),this.update()}}function hg(r){let e,t,n,i;return e=new zi({props:{dispose:r[2],object:r[0]}}),n=new ha({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Ue(e.$$.fragment),t=Ft(),Ue(n.$$.fragment)},m(s,a){Fe(e,s,a),St(s,t,a),Fe(n,s,a),i=!0},p(s,a){const o={};a[0]&4&&(o.dispose=s[2]),a[0]&1&&(o.object=s[0]),e.$set(o);const l={};a[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(ve(e.$$.fragment,s),ve(n.$$.fragment,s),i=!0)},o(s){ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!1},d(s){ze(e,s),s&&Mt(t),ze(n,s)}}}function fg(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:o=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:h=void 0}=e,{keyPanSpeed:f=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:x=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:d=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:_=void 0}=e,{minDistance:w=void 0}=e,{minPolarAngle:M=void 0}=e,{minZoom:b=void 0}=e,{mouseButtons:y=void 0}=e,{panSpeed:O=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:E=void 0}=e,{touches:A=void 0}=e,{zoomSpeed:U=void 0}=e,{target:Z=void 0}=e,{dispose:L=void 0}=e;const z=la();et(r,z,k=>t(30,n=k));const{renderer:F,invalidate:V}=zt();if(!F)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof na))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const I=ir(),X=()=>{V("Orbitcontrols: change event"),I("change")},B=()=>I("start"),j=()=>I("end"),D=new ug(n,F.domElement);Ct(n).orbitControls=D,D.addEventListener("change",X),D.addEventListener("start",B),D.addEventListener("end",j),tt(()=>{n&&delete Ct(n).orbitControls,D.removeEventListener("change",X),D.removeEventListener("start",B),D.removeEventListener("end",j)});const{start:J,stop:$}=Qr(()=>D.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),se=new We,me=()=>{t(0,D.target=se.position,D),D.update(),V("OrbitControls: target changed")};return r.$$set=k=>{"autoRotate"in k&&t(6,i=k.autoRotate),"autoRotateSpeed"in k&&t(7,s=k.autoRotateSpeed),"dampingFactor"in k&&t(8,a=k.dampingFactor),"enableDamping"in k&&t(9,o=k.enableDamping),"enabled"in k&&t(10,l=k.enabled),"enablePan"in k&&t(11,c=k.enablePan),"enableRotate"in k&&t(12,u=k.enableRotate),"enableZoom"in k&&t(13,h=k.enableZoom),"keyPanSpeed"in k&&t(14,f=k.keyPanSpeed),"keys"in k&&t(15,m=k.keys),"maxAzimuthAngle"in k&&t(16,x=k.maxAzimuthAngle),"maxDistance"in k&&t(17,p=k.maxDistance),"maxPolarAngle"in k&&t(18,d=k.maxPolarAngle),"maxZoom"in k&&t(19,g=k.maxZoom),"minAzimuthAngle"in k&&t(20,_=k.minAzimuthAngle),"minDistance"in k&&t(21,w=k.minDistance),"minPolarAngle"in k&&t(22,M=k.minPolarAngle),"minZoom"in k&&t(23,b=k.minZoom),"mouseButtons"in k&&t(24,y=k.mouseButtons),"panSpeed"in k&&t(25,O=k.panSpeed),"rotateSpeed"in k&&t(26,v=k.rotateSpeed),"screenSpacePanning"in k&&t(27,E=k.screenSpacePanning),"touches"in k&&t(28,A=k.touches),"zoomSpeed"in k&&t(29,U=k.zoomSpeed),"target"in k&&t(1,Z=k.target),"dispose"in k&&t(2,L=k.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,D.autoRotate=i,D),s!==void 0&&t(0,D.autoRotateSpeed=s,D),a!==void 0&&t(0,D.dampingFactor=a,D),o!==void 0&&t(0,D.enableDamping=o,D),l!==void 0&&t(0,D.enabled=l,D),c!==void 0&&t(0,D.enablePan=c,D),u!==void 0&&t(0,D.enableRotate=u,D),h!==void 0&&t(0,D.enableZoom=h,D),f!==void 0&&t(0,D.keyPanSpeed=f,D),m!==void 0&&t(0,D.keys=m,D),x!==void 0&&t(0,D.maxAzimuthAngle=x,D),p!==void 0&&t(0,D.maxDistance=p,D),d!==void 0&&t(0,D.maxPolarAngle=d,D),g!==void 0&&t(0,D.maxZoom=g,D),_!==void 0&&t(0,D.minAzimuthAngle=_,D),w!==void 0&&t(0,D.minDistance=w,D),M!==void 0&&t(0,D.minPolarAngle=M,D),b!==void 0&&t(0,D.minZoom=b,D),y!==void 0&&t(0,D.mouseButtons=y,D),O!==void 0&&t(0,D.panSpeed=O,D),v!==void 0&&t(0,D.rotateSpeed=v,D),E!==void 0&&t(0,D.screenSpacePanning=E,D),A!==void 0&&t(0,D.touches=A,D),U!==void 0&&t(0,D.zoomSpeed=U,D),D.update(),V("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||o?J():$())},[D,Z,L,z,se,me,i,s,a,o,l,c,u,h,f,m,x,p,d,g,_,w,M,b,y,O,v,E,A,U]}class dg extends ft{constructor(e){super(),ht(this,e,fg,hg,st,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const Hn=new Hl,yt=new R,Rn=new R,qe=new gt,$o={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},Ns={type:"change"},el={type:"mouseDown"},tl={type:"mouseUp",mode:null},nl={type:"objectChange"};class pg extends We{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new bg;this._gizmo=n,this.add(n);const i=new Mg;this._plane=i,this.add(i);const s=this;function a(_,w){let M=w;Object.defineProperty(s,_,{get:function(){return M!==void 0?M:w},set:function(b){M!==b&&(M=b,i[_]=b,n[_]=b,s.dispatchEvent({type:_+"-changed",value:b}),s.dispatchEvent(Ns))}}),s[_]=w,i[_]=w,n[_]=w}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new R,l=new R,c=new gt,u=new gt,h=new R,f=new gt,m=new R,x=new R,p=new R,d=0,g=new R;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",u),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",x),a("rotationAxis",p),a("rotationAngle",d),a("eye",g),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new gt,this._parentQuaternionInv=new gt,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new gt,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new gt,this._scaleStart=new R,this._getPointer=mg.bind(this),this._onPointerDown=_g.bind(this),this._onPointerHover=gg.bind(this),this._onPointerMove=vg.bind(this),this._onPointerUp=xg.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Hn.setFromCamera(e,this.camera);const t=Us(this._gizmo.picker[this.mode],Hn);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Hn.setFromCamera(e,this.camera);const t=Us(this._plane,Hn,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,el.mode=this.mode,this.dispatchEvent(el)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;Hn.setFromCamera(e,this.camera);const a=Us(this._plane,Hn,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(qe.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(yt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(yt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),Rn.set(o,o,o)}else yt.copy(this.pointStart),Rn.copy(this.pointEnd),yt.applyQuaternion(this._worldQuaternionInv),Rn.applyQuaternion(this._worldQuaternionInv),Rn.divide(yt),t.search("X")===-1&&(Rn.x=1),t.search("Y")===-1&&(Rn.y=1),t.search("Z")===-1&&(Rn.z=1);i.scale.copy(this._scaleStart).multiply(Rn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(yt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(yt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy($o[t]),yt.copy($o[t]),s==="local"&&yt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(yt.cross(this.eye).normalize())*o),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(qe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(qe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ns),this.dispatchEvent(nl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(tl.mode=this.mode,this.dispatchEvent(tl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ns),this.dispatchEvent(nl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Hn}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function mg(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function gg(r){if(!!this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function _g(r){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function vg(r){!this.enabled||this.pointerMove(this._getPointer(r))}function xg(r){!this.enabled||(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function Us(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Dr=new Ni,je=new R(0,1,0),il=new R(0,0,0),rl=new Ye,Rr=new gt,Ur=new gt,nn=new R,sl=new Ye,Zi=new R(1,0,0),Xn=new R(0,1,0),Qi=new R(0,0,1),Ir=new R,Wi=new R,ji=new R;class bg extends We{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Gr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ra({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const x=e.clone();x.color.setHex(7895160);const p=new bt(0,.04,.1,12);p.translate(0,.05,0);const d=new $e(.08,.08,.08);d.translate(0,.04,0);const g=new _t;g.setAttribute("position",new Ge([0,0,0,1,0,0],3));const _=new bt(.0075,.0075,.5,3);_.translate(0,.25,0);function w(F,V){const I=new Yn(F,.0075,3,64,V*Math.PI*2);return I.rotateY(Math.PI/2),I.rotateX(Math.PI/2),I}function M(){const F=new _t;return F.setAttribute("position",new Ge([0,0,0,1,1,1],3)),F}const b={X:[[new le(p,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(p,s),[-.5,0,0],[0,0,Math.PI/2]],[new le(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new le(p,a),[0,.5,0]],[new le(p,a),[0,-.5,0],[Math.PI,0,0]],[new le(_,a)]],Z:[[new le(p,o),[0,0,.5],[Math.PI/2,0,0]],[new le(p,o),[0,0,-.5],[-Math.PI/2,0,0]],[new le(_,o),null,[Math.PI/2,0,0]]],XYZ:[[new le(new Ci(.1,0),h.clone()),[0,0,0]]],XY:[[new le(new $e(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new le(new $e(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new $e(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},y={X:[[new le(new bt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new bt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new bt(.2,0,.6,4),n),[0,.3,0]],[new le(new bt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new bt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new bt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new le(new Ci(.2,0),n)]],XY:[[new le(new $e(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new $e(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new $e(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},O={START:[[new le(new Ci(.01,2),i),null,null,null,"helper"]],END:[[new le(new Ci(.01,2),i),null,null,null,"helper"]],DELTA:[[new _n(M(),i),null,null,null,"helper"]],X:[[new _n(g,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new _n(g,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new _n(g,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},v={XYZE:[[new le(w(.5,1),x),null,[0,Math.PI/2,0]]],X:[[new le(w(.5,.5),s)]],Y:[[new le(w(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new le(w(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new le(w(.75,1),f),null,[0,Math.PI/2,0]]]},E={AXIS:[[new _n(g,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},A={XYZE:[[new le(new aa(.25,10,8),n)]],X:[[new le(new Yn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new le(new Yn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new le(new Yn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new le(new Yn(.75,.1,2,24),n)]]},U={X:[[new le(d,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(_,s),[0,0,0],[0,0,-Math.PI/2]],[new le(d,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new le(d,a),[0,.5,0]],[new le(_,a)],[new le(d,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new le(d,o),[0,0,.5],[Math.PI/2,0,0]],[new le(_,o),[0,0,0],[Math.PI/2,0,0]],[new le(d,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new le(new $e(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new le(new $e(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new $e(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new $e(.1,.1,.1),h.clone())]]},Z={X:[[new le(new bt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new bt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new bt(.2,0,.6,4),n),[0,.3,0]],[new le(new bt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new bt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new bt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new le(new $e(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new $e(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new $e(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new $e(.2,.2,.2),n),[0,0,0]]]},L={X:[[new _n(g,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new _n(g,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new _n(g,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(F){const V=new We;for(const I in F)for(let X=F[I].length;X--;){const B=F[I][X][0].clone(),j=F[I][X][1],D=F[I][X][2],J=F[I][X][3],$=F[I][X][4];B.name=I,B.tag=$,j&&B.position.set(j[0],j[1],j[2]),D&&B.rotation.set(D[0],D[1],D[2]),J&&B.scale.set(J[0],J[1],J[2]),B.updateMatrix();const se=B.geometry.clone();se.applyMatrix4(B.matrix),B.geometry=se,B.renderOrder=1/0,B.position.set(0,0,0),B.rotation.set(0,0,0),B.scale.set(1,1,1),V.add(B)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(b)),this.add(this.gizmo.rotate=z(v)),this.add(this.gizmo.scale=z(U)),this.add(this.picker.translate=z(y)),this.add(this.picker.rotate=z(A)),this.add(this.picker.scale=z(Z)),this.add(this.helper.translate=z(O)),this.add(this.helper.rotate=z(E)),this.add(this.helper.scale=z(L)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ur;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const a=i[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.position.copy(this.worldPositionStart),a.visible=!!this.axis,this.axis==="X"&&(qe.setFromEuler(Dr.set(0,0,0)),a.quaternion.copy(n).multiply(qe),Math.abs(je.copy(Zi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(qe.setFromEuler(Dr.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(qe),Math.abs(je.copy(Xn).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(qe.setFromEuler(Dr.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(qe),Math.abs(je.copy(Qi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(qe.setFromEuler(Dr.set(0,Math.PI/2,0)),je.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(rl.lookAt(il,je,Xn)),a.quaternion.multiply(qe),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),yt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),yt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(yt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(je.copy(Zi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(je.copy(Xn).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(je.copy(Qi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(je.copy(Qi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(je.copy(Zi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(je.copy(Xn).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Rr.copy(n),je.copy(this.eye).applyQuaternion(qe.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(rl.lookAt(this.eye,il,Xn)),a.name==="X"&&(qe.setFromAxisAngle(Zi,Math.atan2(-je.y,je.z)),qe.multiplyQuaternions(Rr,qe),a.quaternion.copy(qe)),a.name==="Y"&&(qe.setFromAxisAngle(Xn,Math.atan2(je.x,je.z)),qe.multiplyQuaternions(Rr,qe),a.quaternion.copy(qe)),a.name==="Z"&&(qe.setFromAxisAngle(Qi,Math.atan2(je.y,je.x)),qe.multiplyQuaternions(Rr,qe),a.quaternion.copy(qe))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class Mg extends le{constructor(){super(new Wr(1e5,1e5,2,2),new Gr({visible:!1,wireframe:!0,side:bn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ir.copy(Zi).applyQuaternion(t==="local"?this.worldQuaternion:Ur),Wi.copy(Xn).applyQuaternion(t==="local"?this.worldQuaternion:Ur),ji.copy(Qi).applyQuaternion(t==="local"?this.worldQuaternion:Ur),je.copy(Wi),this.mode){case"translate":case"scale":switch(this.axis){case"X":je.copy(this.eye).cross(Ir),nn.copy(Ir).cross(je);break;case"Y":je.copy(this.eye).cross(Wi),nn.copy(Wi).cross(je);break;case"Z":je.copy(this.eye).cross(ji),nn.copy(ji).cross(je);break;case"XY":nn.copy(ji);break;case"YZ":nn.copy(Ir);break;case"XZ":je.copy(ji),nn.copy(Wi);break;case"XYZ":case"E":nn.set(0,0,0);break}break;case"rotate":default:nn.set(0,0,0)}nn.length()===0?this.quaternion.copy(this.cameraQuaternion):(sl.lookAt(yt.set(0,0,0),nn,je),this.quaternion.setFromRotationMatrix(sl)),super.updateMatrixWorld(e)}}function wg(r){let e,t,n,i;return e=new zi({props:{dispose:r[0],object:r[1]}}),n=new ql({props:{object:r[1]}}),{c(){Ue(e.$$.fragment),t=Ft(),Ue(n.$$.fragment)},m(s,a){Fe(e,s,a),St(s,t,a),Fe(n,s,a),i=!0},p(s,[a]){const o={};a&1&&(o.dispose=s[0]),a&2&&(o.object=s[1]),e.$set(o);const l={};a&2&&(l.object=s[1]),n.$set(l)},i(s){i||(ve(e.$$.fragment,s),ve(n.$$.fragment,s),i=!0)},o(s){ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!1},d(s){ze(e,s),s&&Mt(t),ze(n,s)}}}function Sg(r,e,t){let n,i,{autoPauseOrbitControls:s=!0}=e,{mode:a=void 0}=e,{axis:o=null}=e,{dragging:l=!1}=e,{enabled:c=void 0}=e,{translationSnap:u=void 0}=e,{scaleSnap:h=void 0}=e,{rotationSnap:f=void 0}=e,{showX:m=void 0}=e,{showY:x=void 0}=e,{showZ:p=void 0}=e,{size:d=void 0}=e,{space:g=void 0}=e,{dispose:_=void 0}=e;const{camera:w,renderer:M,invalidate:b,scene:y}=zt();et(r,w,I=>t(20,i=I));const O=la();if(et(r,O,I=>t(19,n=I)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const v=ir(),E=()=>{if(!!i)return Ct(i).orbitControls};let A;const U=()=>{if(A!==void 0){const I=E();I&&(I.enabled=A),A=void 0}};tt(U);const Z={change:I=>{var X,B;n&&((B=(X=Ct(n)).onTransform)==null||B.call(X)),b("TransformControls: change event"),v("change",I)},"camera-changed":I=>v("camera-changed",I),"object-changed":I=>v("object-changed",I),"enabled-changed":I=>v("enabled-changed",I),"axis-changed":I=>{t(4,o=I.value),v("axis-changed",I)},"mode-changed":I=>v("mode-changed",I),"translationSnap-changed":I=>v("translationSnap-changed",I),"rotationSnap-changed":I=>v("rotationSnap-changed",I),"scaleSnap-changed":I=>v("scaleSnap-changed",I),"space-changed":I=>v("space-changed",I),"size-changed":I=>v("size-changed",I),"dragging-changed":I=>{t(5,l=I.value);e:if(s){const X=E();if(!X)break e;const B=!I.value;if(X.enabled===B)break e;A=X.enabled,X.enabled=B}v("dragging-changed",I)},"showX-changed":I=>v("showX-changed",I),"showY-changed":I=>v("showY-changed",I),"showZ-changed":I=>v("showZ-changed",I),"worldPosition-changed":I=>v("worldPosition-changed",I),"worldPositionStart-changed":I=>v("worldPositionStart-changed",I),"worldQuaternion-changed":I=>v("worldQuaternion-changed",I),"worldQuaternionStart-changed":I=>v("worldQuaternionStart-changed",I),"cameraPosition-changed":I=>v("cameraPosition-changed",I),"cameraQuaternion-changed":I=>v("cameraQuaternion-changed",I),"pointStart-changed":I=>v("pointStart-changed",I),"pointEnd-changed":I=>v("pointEnd-changed",I),"rotationAxis-changed":I=>v("rotationAxis-changed",I),"rotationAngle-changed":I=>v("rotationAngle-changed",I),"eye-changed":I=>v("eye-changed",I)};if(!M)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const L=new pg(i,M.domElement),z=()=>L.reset();L.attach(n);const F=()=>{Object.entries(Z).forEach(([I,X])=>{L.addEventListener(I,X)})},V=()=>{Object.entries(Z).forEach(([I,X])=>{L.removeEventListener(I,X)})};return F(),y.add(L),tt(()=>{L.detach(),y.remove(L),V()}),r.$$set=I=>{"autoPauseOrbitControls"in I&&t(6,s=I.autoPauseOrbitControls),"mode"in I&&t(7,a=I.mode),"axis"in I&&t(4,o=I.axis),"dragging"in I&&t(5,l=I.dragging),"enabled"in I&&t(8,c=I.enabled),"translationSnap"in I&&t(9,u=I.translationSnap),"scaleSnap"in I&&t(10,h=I.scaleSnap),"rotationSnap"in I&&t(11,f=I.rotationSnap),"showX"in I&&t(12,m=I.showX),"showY"in I&&t(13,x=I.showY),"showZ"in I&&t(14,p=I.showZ),"size"in I&&t(15,d=I.size),"space"in I&&t(16,g=I.space),"dispose"in I&&t(0,_=I.dispose)},r.$$.update=()=>{r.$$.dirty&64&&(s||U()),r.$$.dirty&256&&c!==void 0&&t(1,L.enabled=c,L),r.$$.dirty&4096&&m!==void 0&&t(1,L.showX=m,L),r.$$.dirty&8192&&x!==void 0&&t(1,L.showY=x,L),r.$$.dirty&16384&&p!==void 0&&t(1,L.showZ=p,L),r.$$.dirty&130&&a!==void 0&&L.setMode(a),r.$$.dirty&514&&u!==void 0&&L.setTranslationSnap(u),r.$$.dirty&1026&&h!==void 0&&L.setScaleSnap(h),r.$$.dirty&2050&&f!==void 0&&L.setRotationSnap(f),r.$$.dirty&32770&&d!==void 0&&L.setSize(d),r.$$.dirty&65538&&g!==void 0&&L.setSpace(g)},[_,L,w,O,o,l,s,a,c,u,h,f,m,x,p,d,g,z]}class yg extends ft{constructor(e){super(),ht(this,e,Sg,wg,st,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}const Eg=(r,e)=>e?new De(r):new De().setHex(new De(r).getHex()).convertSRGBToLinear();function Tg(r){let e;const t=r[18].default,n=Kt(t,r,r[22],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4194304)&&$t(n,t,i,i[22],e?Jt(t,i[22],s,null):en(i[22]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function Ag(r){let e,t,n;function i(a){r[19](a)}let s={object:r[0],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[Tg]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new fa({props:s}),un.push(()=>ri(e,"inViewport",i)),e.$on("viewportenter",r[20]),e.$on("viewportleave",r[21]),{c(){Ue(e.$$.fragment)},m(a,o){Fe(e,a,o),n=!0},p(a,[o]){const l={};o&1&&(l.object=a[0]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&4194304&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],ii(()=>t=!1)),e.$set(l)},i(a){n||(ve(e.$$.fragment,a),n=!0)},o(a){ye(e.$$.fragment,a),n=!1},d(a){ze(e,a)}}}function Cg(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{light:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:x=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:d=void 0}=e,{visible:g=void 0}=e,{userData:_=void 0}=e,{dispose:w=void 0}=e,{color:M=void 0}=e,{intensity:b=void 0}=e;const{invalidate:y}=zt(),{linear:O}=ua();et(r,O,U=>t(17,n=U));function v(U){f=U,t(1,f)}function E(U){He.call(this,r,U)}function A(U){He.call(this,r,U)}return r.$$set=U=>{"light"in U&&t(0,a=U.light),"position"in U&&t(2,o=U.position),"scale"in U&&t(3,l=U.scale),"rotation"in U&&t(4,c=U.rotation),"lookAt"in U&&t(5,u=U.lookAt),"viewportAware"in U&&t(6,h=U.viewportAware),"inViewport"in U&&t(1,f=U.inViewport),"castShadow"in U&&t(7,m=U.castShadow),"receiveShadow"in U&&t(8,x=U.receiveShadow),"frustumCulled"in U&&t(9,p=U.frustumCulled),"renderOrder"in U&&t(10,d=U.renderOrder),"visible"in U&&t(11,g=U.visible),"userData"in U&&t(12,_=U.userData),"dispose"in U&&t(13,w=U.dispose),"color"in U&&t(15,M=U.color),"intensity"in U&&t(16,b=U.intensity),"$$scope"in U&&t(22,s=U.$$scope)},r.$$.update=()=>{r.$$.dirty&229376&&(b!==void 0&&t(0,a.intensity=b,a),M!==void 0&&t(0,a.color=Eg(M,n),a),y("LightInstance: props changed"))},[a,f,o,l,c,u,h,m,x,p,d,g,_,w,O,M,b,n,i,v,E,A,s]}class Lg extends ft{constructor(e){super(),ht(this,e,Cg,Ag,st,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function al(r){let e,t,n,i,s,a;return e=new ca({props:{object:r[16]}}),n=new ha({props:{object:r[16],position:r[15]}}),s=new zi({props:{dispose:r[10],object:r[15]}}),{c(){Ue(e.$$.fragment),t=Ft(),Ue(n.$$.fragment),i=Ft(),Ue(s.$$.fragment)},m(o,l){Fe(e,o,l),St(o,t,l),Fe(n,o,l),St(o,i,l),Fe(s,o,l),a=!0},p(o,l){const c={};l&32768&&(c.position=o[15]),n.$set(c);const u={};l&1024&&(u.dispose=o[10]),l&32768&&(u.object=o[15]),s.$set(u)},i(o){a||(ve(e.$$.fragment,o),ve(n.$$.fragment,o),ve(s.$$.fragment,o),a=!0)},o(o){ye(e.$$.fragment,o),ye(n.$$.fragment,o),ye(s.$$.fragment,o),a=!1},d(o){ze(e,o),o&&Mt(t),ze(n,o),o&&Mt(i),ze(s,o)}}}function Pg(r){let e;const t=r[18].default,n=Kt(t,r,r[22],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4194304)&&$t(n,t,i,i[22],e?Jt(t,i[22],s,null):en(i[22]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function Dg(r){let e,t,n,i,s=r[15]&&!(r[15]instanceof We)&&al(r);function a(l){r[19](l)}let o={light:r[1],position:r[2],scale:r[3],rotation:r[4],castShadow:!!r[14],receiveShadow:r[5],frustumCulled:r[6],renderOrder:r[7],visible:r[8],userData:r[9],dispose:r[10],viewportAware:r[11],color:r[12],intensity:r[13],$$slots:{default:[Pg]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.inViewport=r[0]),t=new Lg({props:o}),un.push(()=>ri(t,"inViewport",a)),t.$on("viewportenter",r[20]),t.$on("viewportleave",r[21]),{c(){s&&s.c(),e=Ft(),Ue(t.$$.fragment)},m(l,c){s&&s.m(l,c),St(l,e,c),Fe(t,l,c),i=!0},p(l,[c]){l[15]&&!(l[15]instanceof We)?s?(s.p(l,c),c&32768&&ve(s,1)):(s=al(l),s.c(),ve(s,1),s.m(e.parentNode,e)):s&&(pl(),ye(s,1,1,()=>{s=null}),ml());const u={};c&2&&(u.light=l[1]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&16384&&(u.castShadow=!!l[14]),c&32&&(u.receiveShadow=l[5]),c&64&&(u.frustumCulled=l[6]),c&128&&(u.renderOrder=l[7]),c&256&&(u.visible=l[8]),c&512&&(u.userData=l[9]),c&1024&&(u.dispose=l[10]),c&2048&&(u.viewportAware=l[11]),c&4096&&(u.color=l[12]),c&8192&&(u.intensity=l[13]),c&4194304&&(u.$$scope={dirty:c,ctx:l}),!n&&c&1&&(n=!0,u.inViewport=l[0],ii(()=>n=!1)),t.$set(u)},i(l){i||(ve(s),ve(t.$$.fragment,l),i=!0)},o(l){ye(s),ye(t.$$.fragment,l),i=!1},d(l){s&&s.d(l),l&&Mt(e),ze(t,l)}}}function Rg(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:c=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:h=void 0}=e,{visible:f=void 0}=e,{userData:m=void 0}=e,{dispose:x=void 0}=e,{viewportAware:p=!1}=e,{inViewport:d=!1}=e,{color:g=void 0}=e,{intensity:_=void 0}=e,{shadow:w=void 0}=e,{target:M=void 0}=e;const b=new hm(g,_),{invalidate:y}=zt(),O=b.target,{start:v,stop:E,started:A}=Qr(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});et(r,A,V=>t(23,n=V));const U=V=>{V&&V instanceof We&&!n?(t(1,b.target=V,b),v(),y("DirectionalLight: target changed")):(!V||!(V instanceof We))&&n&&(t(1,b.target=O,b),E(),y("DirectionalLight: target changed"))},Z=V=>{if(V){const{mapSize:I=[512,512],camera:{left:X=-5,bottom:B=-5,right:j=5,top:D=5,near:J=.5,far:$=500}={},bias:se=0,radius:me=1}=V===!0?{}:V;b.shadow.mapSize.set(I[0],I[1]),t(1,b.shadow.camera.left=X,b),t(1,b.shadow.camera.top=D,b),t(1,b.shadow.camera.right=j,b),t(1,b.shadow.camera.bottom=B,b),t(1,b.shadow.camera.near=J,b),t(1,b.shadow.camera.far=$,b),t(1,b.shadow.bias=se,b),t(1,b.shadow.radius=me,b)}y("DirectionalLight: shadow changed")};function L(V){d=V,t(0,d)}function z(V){He.call(this,r,V)}function F(V){He.call(this,r,V)}return r.$$set=V=>{"position"in V&&t(2,a=V.position),"scale"in V&&t(3,o=V.scale),"rotation"in V&&t(4,l=V.rotation),"receiveShadow"in V&&t(5,c=V.receiveShadow),"frustumCulled"in V&&t(6,u=V.frustumCulled),"renderOrder"in V&&t(7,h=V.renderOrder),"visible"in V&&t(8,f=V.visible),"userData"in V&&t(9,m=V.userData),"dispose"in V&&t(10,x=V.dispose),"viewportAware"in V&&t(11,p=V.viewportAware),"inViewport"in V&&t(0,d=V.inViewport),"color"in V&&t(12,g=V.color),"intensity"in V&&t(13,_=V.intensity),"shadow"in V&&t(14,w=V.shadow),"target"in V&&t(15,M=V.target),"$$scope"in V&&t(22,s=V.$$scope)},r.$$.update=()=>{r.$$.dirty&32768&&U(M),r.$$.dirty&16384&&Z(w)},[d,b,a,o,l,c,u,h,f,m,x,p,g,_,w,M,O,A,i,L,z,F,s]}class Ig extends ft{constructor(e){super(),ht(this,e,Rg,Dg,st,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function Og(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:a=!1}=e;const o=ir(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:h}=ua(),{invalidate:f}=zt(),m=p=>{h(p),c(p),delete Ct(p).eventDispatcher},x=(p,d,g)=>{Ct(p).eventDispatcher=o,d?(h(p),c(p)):(u(p),g?l(p):c(p))};return tt(()=>{m(n),f("InteractiveObject: object removed")}),r.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,s=p.interactive),"ignorePointer"in p&&t(2,a=p.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(m(i),x(n,a,s),f("InteractiveObject: object changed"),t(3,i=n)):n===i&&(x(n,a,s),f("InteractiveObject: props changed")))},[n,s,a,i]}class Fg extends ft{constructor(e){super(),ht(this,e,Og,null,st,{object:0,interactive:1,ignorePointer:2})}}function zg(r){let e;const t=r[16].default,n=Kt(t,r,r[27],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&134217728)&&$t(n,t,i,i[27],e?Jt(t,i[27],s,null):en(i[27]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function Ng(r){let e,t,n,i,s;function a(l){r[17](l)}let o={object:r[1],lookAt:r[5],position:r[2],scale:r[3],rotation:r[4],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],visible:r[11],userData:r[12],dispose:r[13],viewportAware:r[6],$$slots:{default:[zg]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.inViewport=r[0]),e=new fa({props:o}),un.push(()=>ri(e,"inViewport",a)),e.$on("viewportenter",r[18]),e.$on("viewportleave",r[19]),i=new Fg({props:{object:r[1],interactive:r[14],ignorePointer:r[15]}}),i.$on("click",r[20]),i.$on("contextmenu",r[21]),i.$on("pointerup",r[22]),i.$on("pointerdown",r[23]),i.$on("pointerenter",r[24]),i.$on("pointerleave",r[25]),i.$on("pointermove",r[26]),{c(){Ue(e.$$.fragment),n=Ft(),Ue(i.$$.fragment)},m(l,c){Fe(e,l,c),St(l,n,c),Fe(i,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],ii(()=>t=!1)),e.$set(u);const h={};c&2&&(h.object=l[1]),c&16384&&(h.interactive=l[14]),c&32768&&(h.ignorePointer=l[15]),i.$set(h)},i(l){s||(ve(e.$$.fragment,l),ve(i.$$.fragment,l),s=!0)},o(l){ye(e.$$.fragment,l),ye(i.$$.fragment,l),s=!1},d(l){ze(e,l),l&&Mt(n),ze(i,l)}}}function Ug(r,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:x=void 0}=e,{renderOrder:p=void 0}=e,{visible:d=void 0}=e,{userData:g=void 0}=e,{dispose:_=void 0}=e,{interactive:w=!1}=e,{ignorePointer:M=!1}=e;function b(F){h=F,t(0,h)}function y(F){He.call(this,r,F)}function O(F){He.call(this,r,F)}function v(F){He.call(this,r,F)}function E(F){He.call(this,r,F)}function A(F){He.call(this,r,F)}function U(F){He.call(this,r,F)}function Z(F){He.call(this,r,F)}function L(F){He.call(this,r,F)}function z(F){He.call(this,r,F)}return r.$$set=F=>{"mesh"in F&&t(1,s=F.mesh),"position"in F&&t(2,a=F.position),"scale"in F&&t(3,o=F.scale),"rotation"in F&&t(4,l=F.rotation),"lookAt"in F&&t(5,c=F.lookAt),"viewportAware"in F&&t(6,u=F.viewportAware),"inViewport"in F&&t(0,h=F.inViewport),"castShadow"in F&&t(7,f=F.castShadow),"receiveShadow"in F&&t(8,m=F.receiveShadow),"frustumCulled"in F&&t(9,x=F.frustumCulled),"renderOrder"in F&&t(10,p=F.renderOrder),"visible"in F&&t(11,d=F.visible),"userData"in F&&t(12,g=F.userData),"dispose"in F&&t(13,_=F.dispose),"interactive"in F&&t(14,w=F.interactive),"ignorePointer"in F&&t(15,M=F.ignorePointer),"$$scope"in F&&t(27,i=F.$$scope)},[h,s,a,o,l,c,u,f,m,x,p,d,g,_,w,M,n,b,y,O,v,E,A,U,Z,L,z,i]}class Bg extends ft{constructor(e){super(),ht(this,e,Ug,Ng,st,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function kg(r){let e;const t=r[20].default,n=Kt(t,r,r[31],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&1)&&$t(n,t,i,i[31],e?Jt(t,i[31],s,null):en(i[31]),null)},i(i){e||(ve(n,i),e=!0)},o(i){ye(n,i),e=!1},d(i){n&&n.d(i)}}}function Vg(r){let e,t,n,i,s,a,o;e=new zi({props:{dispose:r[11],object:r[15]}}),n=new zi({props:{dispose:r[11],object:r[16]}});function l(u){r[21](u)}let c={mesh:r[17],position:r[1],scale:r[2],rotation:r[3],lookAt:r[14],castShadow:r[5],receiveShadow:r[6],frustumCulled:r[7],renderOrder:r[8],visible:r[9],interactive:r[12],ignorePointer:r[13],userData:r[10],dispose:r[11],viewportAware:r[4],$$slots:{default:[kg]},$$scope:{ctx:r}};return r[0]!==void 0&&(c.inViewport=r[0]),s=new Bg({props:c}),un.push(()=>ri(s,"inViewport",l)),s.$on("click",r[22]),s.$on("contextmenu",r[23]),s.$on("pointerup",r[24]),s.$on("pointerdown",r[25]),s.$on("pointerenter",r[26]),s.$on("pointerleave",r[27]),s.$on("pointermove",r[28]),s.$on("viewportenter",r[29]),s.$on("viewportleave",r[30]),{c(){Ue(e.$$.fragment),t=Ft(),Ue(n.$$.fragment),i=Ft(),Ue(s.$$.fragment)},m(u,h){Fe(e,u,h),St(u,t,h),Fe(n,u,h),St(u,i,h),Fe(s,u,h),o=!0},p(u,h){const f={};h[0]&2048&&(f.dispose=u[11]),h[0]&32768&&(f.object=u[15]),e.$set(f);const m={};h[0]&2048&&(m.dispose=u[11]),h[0]&65536&&(m.object=u[16]),n.$set(m);const x={};h[0]&2&&(x.position=u[1]),h[0]&4&&(x.scale=u[2]),h[0]&8&&(x.rotation=u[3]),h[0]&16384&&(x.lookAt=u[14]),h[0]&32&&(x.castShadow=u[5]),h[0]&64&&(x.receiveShadow=u[6]),h[0]&128&&(x.frustumCulled=u[7]),h[0]&256&&(x.renderOrder=u[8]),h[0]&512&&(x.visible=u[9]),h[0]&4096&&(x.interactive=u[12]),h[0]&8192&&(x.ignorePointer=u[13]),h[0]&1024&&(x.userData=u[10]),h[0]&2048&&(x.dispose=u[11]),h[0]&16&&(x.viewportAware=u[4]),h[1]&1&&(x.$$scope={dirty:h,ctx:u}),!a&&h[0]&1&&(a=!0,x.inViewport=u[0],ii(()=>a=!1)),s.$set(x)},i(u){o||(ve(e.$$.fragment,u),ve(n.$$.fragment,u),ve(s.$$.fragment,u),o=!0)},o(u){ye(e.$$.fragment,u),ye(n.$$.fragment,u),ye(s.$$.fragment,u),o=!1},d(u){ze(e,u),u&&Mt(t),ze(n,u),u&&Mt(i),ze(s,u)}}}function Gg(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:m=void 0}=e,{visible:x=void 0}=e,{userData:p=void 0}=e,{dispose:d=void 0}=e,{interactive:g=!1}=e,{ignorePointer:_=!1}=e,{lookAt:w=void 0}=e,{geometry:M}=e,{material:b}=e,y=b,O=M;const{invalidate:v}=zt(),E=new le(M,b),A=()=>E;function U(D){c=D,t(0,c)}function Z(D){He.call(this,r,D)}function L(D){He.call(this,r,D)}function z(D){He.call(this,r,D)}function F(D){He.call(this,r,D)}function V(D){He.call(this,r,D)}function I(D){He.call(this,r,D)}function X(D){He.call(this,r,D)}function B(D){He.call(this,r,D)}function j(D){He.call(this,r,D)}return r.$$set=D=>{"position"in D&&t(1,s=D.position),"scale"in D&&t(2,a=D.scale),"rotation"in D&&t(3,o=D.rotation),"viewportAware"in D&&t(4,l=D.viewportAware),"inViewport"in D&&t(0,c=D.inViewport),"castShadow"in D&&t(5,u=D.castShadow),"receiveShadow"in D&&t(6,h=D.receiveShadow),"frustumCulled"in D&&t(7,f=D.frustumCulled),"renderOrder"in D&&t(8,m=D.renderOrder),"visible"in D&&t(9,x=D.visible),"userData"in D&&t(10,p=D.userData),"dispose"in D&&t(11,d=D.dispose),"interactive"in D&&t(12,g=D.interactive),"ignorePointer"in D&&t(13,_=D.ignorePointer),"lookAt"in D&&t(14,w=D.lookAt),"geometry"in D&&t(15,M=D.geometry),"material"in D&&t(16,b=D.material),"$$scope"in D&&t(31,i=D.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&327680&&(b!==y?(A().material=b,v("Mesh: material changed")):v("Mesh: material props changed"),t(18,y=b)),r.$$.dirty[0]&557056&&(M!==O?(A().geometry=M,v("Mesh: geometry changed")):v("Mesh: geometry props changed"),t(19,O=M))},[c,s,a,o,l,u,h,f,m,x,p,d,g,_,w,M,b,E,y,O,n,U,Z,L,z,F,V,I,X,B,j,i]}class Hg extends ft{constructor(e){super(),ht(this,e,Gg,Vg,st,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const Zl=new We;Zl.scale.set(0,0,0);Zl.matrix;new Ye().fromArray(new Array(16).fill(0));new De(16777215);cg(Fo,()=>new Fo);function Wg(r){let e,t;return e=new dg({}),{c(){Ue(e.$$.fragment)},m(n,i){Fe(e,n,i),t=!0},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){ze(e,n)}}}function jg(r){let e,t;return e=new yg({props:{translationSnap:1,showY:!1}}),{c(){Ue(e.$$.fragment)},m(n,i){Fe(e,n,i),t=!0},p:on,i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){ze(e,n)}}}function Xg(r){let e,t,n,i,s,a;return e=new lg({props:{position:{y:5,z:10,x:10},lookAt:{y:.5},$$slots:{default:[Wg]},$$scope:{ctx:r}}}),n=new Ig({props:{position:{y:10,z:10}}}),s=new Hg({props:{position:{y:1},geometry:new dm(2,2,2),material:new rm,$$slots:{default:[jg]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment),t=Ft(),Ue(n.$$.fragment),i=Ft(),Ue(s.$$.fragment)},m(o,l){Fe(e,o,l),St(o,t,l),Fe(n,o,l),St(o,i,l),Fe(s,o,l),a=!0},p(o,[l]){const c={};l&4&&(c.$$scope={dirty:l,ctx:o}),e.$set(c);const u={};l&4&&(u.$$scope={dirty:l,ctx:o}),s.$set(u)},i(o){a||(ve(e.$$.fragment,o),ve(n.$$.fragment,o),ve(s.$$.fragment,o),a=!0)},o(o){ye(e.$$.fragment,o),ye(n.$$.fragment,o),ye(s.$$.fragment,o),a=!1},d(o){ze(e,o),o&&Mt(t),ze(n,o),o&&Mt(i),ze(s,o)}}}function qg(r){const e=new fm(10,10),{scene:t}=zt();return t.add(e),tt(()=>{t.remove(e)}),[]}class Yg extends ft{constructor(e){super(),ht(this,e,qg,Xg,st,{})}}function Zg(r){let e,t;return e=new Yg({}),{c(){Ue(e.$$.fragment)},m(n,i){Fe(e,n,i),t=!0},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){ze(e,n)}}}function Qg(r){let e,t,n;return t=new Hm({props:{size:{width:1280,height:720},$$slots:{default:[Zg]},$$scope:{ctx:r}}}),{c(){e=cl("div"),Ue(t.$$.fragment),ul(e,"class","svelte-1aboi1f")},m(i,s){St(i,e,s),Fe(t,e,null),n=!0},p(i,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:i}),t.$set(a)},i(i){n||(ve(t.$$.fragment,i),n=!0)},o(i){ye(t.$$.fragment,i),n=!1},d(i){i&&Mt(e),ze(t)}}}class Kg extends ft{constructor(e){super(),ht(this,e,null,Qg,st,{})}}new Kg({target:document.getElementById("app")});
