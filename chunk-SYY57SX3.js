import{$ as _,$a as Re,Ba as Dt,Ca as zt,Fa as ae,Ga as oe,Gb as Gt,Ha as R,Hb as kn,Ia as Wt,Ib as Kt,J as Ut,Ja as k,Jb as Mn,Ka as _e,Kb as Bn,L as D,M as ie,Mb as w,Na as Ln,Nb as Hn,O as se,Ob as Yt,Pb as Ye,Q as ve,Qa as le,Qb as Ze,R as g,Ra as F,S as An,Sa as Rn,Ta as Ct,Ua as xn,Va as Oe,X as de,_ as Fn,_a as Le,a as T,aa as Tn,ab as fe,bb as St,cb as vt,db as Nn,ea as yt,fa as In,fb as B,gb as A,h as Te,ha as pe,hb as $n,ia as Ee,ib as X,ja as we,jb as We,kb as Ve,lb as je,na as Ie,nb as Ge,ob as Ke,pb as Vt,qb as Pn,sb as Et,tb as wt,ua as N,va as On,wa as Ue,wb as W,ya as ze,yb as jt,za as L}from"./chunk-AJFWK4UQ.js";var K=new se("");var Wn=null;function _t(){return Wn}function Eo(e){Wn??=e}var Zt=class{},qt=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:()=>g(Vn),providedIn:"platform"})}return e})();var Vn=(()=>{class e extends qt{_location;_history;_doc=g(K);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return _t().getBaseHref(this._doc)}onPopState(t){let n=_t().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=_t().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,o){this._history.pushState(t,n,o)}replaceState(t,n,o){this._history.replaceState(t,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function jn(e,i){return e?i?e.endsWith("/")?i.startsWith("/")?e+i.slice(1):e+i:i.startsWith("/")?e+i:`${e}/${i}`:e:i}function Un(e){let i=e.search(/#|\?|$/);return e[i-1]==="/"?e.slice(0,i-1)+e.slice(i):e}function he(e){return e&&e[0]!=="?"?`?${e}`:e}var At=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:()=>g(Kn),providedIn:"root"})}return e})(),Gn=new se(""),Kn=(()=>{class e extends At{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??g(K).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return jn(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+he(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${n}${o}`:n}pushState(t,n,o,r){let s=this.prepareExternalUrl(o+he(r));this._platformLocation.pushState(t,n,s)}replaceState(t,n,o,r){let s=this.prepareExternalUrl(o+he(r));this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||e)(ve(qt),ve(Gn,8))};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Yn=(()=>{class e{_subject=new Te;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=Ao(Un(zn(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+he(n))}normalize(t){return e.stripTrailingSlash(_o(this._basePath,zn(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",o=null){this._locationStrategy.pushState(o,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+he(n)),o)}replaceState(t,n="",o=null){this._locationStrategy.replaceState(o,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+he(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(o=>o(t,n))}subscribe(t,n,o){return this._subject.subscribe({next:t,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=he;static joinWithSlash=jn;static stripTrailingSlash=Un;static \u0275fac=function(n){return new(n||e)(ve(At))};static \u0275prov=D({token:e,factory:()=>wo(),providedIn:"root"})}return e})();function wo(){return new Yn(ve(At))}function _o(e,i){if(!e||!i.startsWith(e))return i;let t=i.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:i}function zn(e){return e.replace(/\/index.html$/,"")}function Ao(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var ti={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},on=function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e}(on||{});var $=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}($||{}),b=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(b||{}),H=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(H||{}),U={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ni(e){return B(e)[A.LocaleId]}function ii(e,i,t){let n=B(e),o=[n[A.DayPeriodsFormat],n[A.DayPeriodsStandalone]],r=Z(o,i);return Z(r,t)}function oi(e,i,t){let n=B(e),o=[n[A.DaysFormat],n[A.DaysStandalone]],r=Z(o,i);return Z(r,t)}function ri(e,i,t){let n=B(e),o=[n[A.MonthsFormat],n[A.MonthsStandalone]],r=Z(o,i);return Z(r,t)}function si(e,i){let n=B(e)[A.Eras];return Z(n,i)}function qe(e,i){let t=B(e);return Z(t[A.DateFormat],i)}function Xe(e,i){let t=B(e);return Z(t[A.TimeFormat],i)}function Qe(e,i){let n=B(e)[A.DateTimeFormat];return Z(n,i)}function re(e,i){let t=B(e),n=t[A.NumberSymbols][i];if(typeof n>"u"){if(i===U.CurrencyDecimal)return t[A.NumberSymbols][U.Decimal];if(i===U.CurrencyGroup)return t[A.NumberSymbols][U.Group]}return n}function ai(e,i){return B(e)[A.NumberFormats][i]}function Fo(e){return B(e)[A.Currencies]}function li(e){if(!e[A.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[A.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function ui(e){let i=B(e);return li(i),(i[A.ExtraData][2]||[]).map(n=>typeof n=="string"?Xt(n):[Xt(n[0]),Xt(n[1])])}function ci(e,i,t){let n=B(e);li(n);let o=[n[A.ExtraData][0],n[A.ExtraData][1]],r=Z(o,i)||[];return Z(r,t)||[]}function Z(e,i){for(let t=i;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new Error("Locale data API: locale data undefined")}function Xt(e){let[i,t]=e.split(":");return{hours:+i,minutes:+t}}function di(e,i,t="en"){let n=Fo(t)[e]||ti[e]||[],o=n[1];return i==="narrow"&&typeof o=="string"?o:n[0]||e}var To=2;function pi(e){let i,t=ti[e];return t&&(i=t[2]),typeof i=="number"?i:To}var Io=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Ft={},Oo=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function fi(e,i,t,n){let o=Bo(e);i=ue(t,i)||i;let s=[],a;for(;i;)if(a=Oo.exec(i),a){s=s.concat(a.slice(1));let c=s.pop();if(!c)break;i=c}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=gi(n,l),o=Mo(o,n));let u="";return s.forEach(c=>{let d=Po(c);u+=d?d(o,t,l):c==="''"?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function Rt(e,i,t){let n=new Date(0);return n.setFullYear(e,i,t),n.setHours(0,0,0),n}function ue(e,i){let t=ni(e);if(Ft[t]??={},Ft[t][i])return Ft[t][i];let n="";switch(i){case"shortDate":n=qe(e,H.Short);break;case"mediumDate":n=qe(e,H.Medium);break;case"longDate":n=qe(e,H.Long);break;case"fullDate":n=qe(e,H.Full);break;case"shortTime":n=Xe(e,H.Short);break;case"mediumTime":n=Xe(e,H.Medium);break;case"longTime":n=Xe(e,H.Long);break;case"fullTime":n=Xe(e,H.Full);break;case"short":let o=ue(e,"shortTime"),r=ue(e,"shortDate");n=Tt(Qe(e,H.Short),[o,r]);break;case"medium":let s=ue(e,"mediumTime"),a=ue(e,"mediumDate");n=Tt(Qe(e,H.Medium),[s,a]);break;case"long":let l=ue(e,"longTime"),u=ue(e,"longDate");n=Tt(Qe(e,H.Long),[l,u]);break;case"full":let c=ue(e,"fullTime"),d=ue(e,"fullDate");n=Tt(Qe(e,H.Full),[c,d]);break}return n&&(Ft[t][i]=n),n}function Tt(e,i){return i&&(e=e.replace(/\{([^}]+)}/g,function(t,n){return i!=null&&n in i?i[n]:t})),e}function Q(e,i,t="-",n,o){let r="";(e<0||o&&e<=0)&&(o?e=-e+1:(e=-e,r=t));let s=String(e);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function Lo(e,i){return Q(e,3).substring(0,i)}function I(e,i,t=0,n=!1,o=!1){return function(r,s){let a=Ro(e,r);if((t>0||a>-t)&&(a+=t),e===3)a===0&&t===-12&&(a=12);else if(e===6)return Lo(a,i);let l=re(s,U.MinusSign);return Q(a,i,l,n,o)}}function Ro(e,i){switch(e){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function C(e,i,t=$.Format,n=!1){return function(o,r){return xo(o,r,e,i,t,n)}}function xo(e,i,t,n,o,r){switch(t){case 2:return ri(i,o,n)[e.getMonth()];case 1:return oi(i,o,n)[e.getDay()];case 0:let s=e.getHours(),a=e.getMinutes();if(r){let u=ui(i),c=ci(i,o,n),d=u.findIndex(f=>{if(Array.isArray(f)){let[p,h]=f,m=s>=p.hours&&a>=p.minutes,S=s<h.hours||s===h.hours&&a<h.minutes;if(p.hours<h.hours){if(m&&S)return!0}else if(m||S)return!0}else if(f.hours===s&&f.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return ii(i,o,n)[s<12?0:1];case 3:return si(i,n)[e.getFullYear()<=0?0:1];default:let l=t;throw new Error(`unexpected translation type ${l}`)}}function It(e){return function(i,t,n){let o=-1*n,r=re(t,U.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case 0:return(o>=0?"+":"")+Q(s,2,r)+Q(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+Q(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+Q(s,2,r)+":"+Q(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+Q(s,2,r)+":"+Q(Math.abs(o%60),2,r);default:throw new Error(`Unknown zone width "${e}"`)}}}var No=0,Lt=4;function $o(e){let i=Rt(e,No,1).getDay();return Rt(e,0,1+(i<=Lt?Lt:Lt+7)-i)}function hi(e){let i=e.getDay(),t=i===0?-3:Lt-i;return Rt(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Qt(e,i=!1){return function(t,n){let o;if(i){let r=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,s=t.getDate();o=1+Math.floor((s+r)/7)}else{let r=hi(t),s=$o(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return Q(o,e,re(n,U.MinusSign))}}function Ot(e,i=!1){return function(t,n){let r=hi(t).getFullYear();return Q(r,e,re(n,U.MinusSign),i)}}var Jt={};function Po(e){if(Jt[e])return Jt[e];let i;switch(e){case"G":case"GG":case"GGG":i=C(3,b.Abbreviated);break;case"GGGG":i=C(3,b.Wide);break;case"GGGGG":i=C(3,b.Narrow);break;case"y":i=I(0,1,0,!1,!0);break;case"yy":i=I(0,2,0,!0,!0);break;case"yyy":i=I(0,3,0,!1,!0);break;case"yyyy":i=I(0,4,0,!1,!0);break;case"Y":i=Ot(1);break;case"YY":i=Ot(2,!0);break;case"YYY":i=Ot(3);break;case"YYYY":i=Ot(4);break;case"M":case"L":i=I(1,1,1);break;case"MM":case"LL":i=I(1,2,1);break;case"MMM":i=C(2,b.Abbreviated);break;case"MMMM":i=C(2,b.Wide);break;case"MMMMM":i=C(2,b.Narrow);break;case"LLL":i=C(2,b.Abbreviated,$.Standalone);break;case"LLLL":i=C(2,b.Wide,$.Standalone);break;case"LLLLL":i=C(2,b.Narrow,$.Standalone);break;case"w":i=Qt(1);break;case"ww":i=Qt(2);break;case"W":i=Qt(1,!0);break;case"d":i=I(2,1);break;case"dd":i=I(2,2);break;case"c":case"cc":i=I(7,1);break;case"ccc":i=C(1,b.Abbreviated,$.Standalone);break;case"cccc":i=C(1,b.Wide,$.Standalone);break;case"ccccc":i=C(1,b.Narrow,$.Standalone);break;case"cccccc":i=C(1,b.Short,$.Standalone);break;case"E":case"EE":case"EEE":i=C(1,b.Abbreviated);break;case"EEEE":i=C(1,b.Wide);break;case"EEEEE":i=C(1,b.Narrow);break;case"EEEEEE":i=C(1,b.Short);break;case"a":case"aa":case"aaa":i=C(0,b.Abbreviated);break;case"aaaa":i=C(0,b.Wide);break;case"aaaaa":i=C(0,b.Narrow);break;case"b":case"bb":case"bbb":i=C(0,b.Abbreviated,$.Standalone,!0);break;case"bbbb":i=C(0,b.Wide,$.Standalone,!0);break;case"bbbbb":i=C(0,b.Narrow,$.Standalone,!0);break;case"B":case"BB":case"BBB":i=C(0,b.Abbreviated,$.Format,!0);break;case"BBBB":i=C(0,b.Wide,$.Format,!0);break;case"BBBBB":i=C(0,b.Narrow,$.Format,!0);break;case"h":i=I(3,1,-12);break;case"hh":i=I(3,2,-12);break;case"H":i=I(3,1);break;case"HH":i=I(3,2);break;case"m":i=I(4,1);break;case"mm":i=I(4,2);break;case"s":i=I(5,1);break;case"ss":i=I(5,2);break;case"S":i=I(6,1);break;case"SS":i=I(6,2);break;case"SSS":i=I(6,3);break;case"Z":case"ZZ":case"ZZZ":i=It(0);break;case"ZZZZZ":i=It(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=It(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=It(2);break;default:return null}return Jt[e]=i,i}function gi(e,i){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?i:t}function ko(e,i){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+i),e}function Mo(e,i,t){let o=e.getTimezoneOffset(),r=gi(i,o);return ko(e,-1*(r-o))}function Bo(e){if(Zn(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[o,r=1,s=1]=e.split("-").map(a=>+a);return Rt(o,r-1,s)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let n;if(n=e.match(Io))return Ho(n)}let i=new Date(e);if(!Zn(i))throw new Error(`Unable to convert "${e}" into a date`);return i}function Ho(e){let i=new Date(0),t=0,n=0,o=e[8]?i.setUTCFullYear:i.setFullYear,r=e[8]?i.setUTCHours:i.setHours;e[9]&&(t=Number(e[9]+e[10]),n=Number(e[9]+e[11])),o.call(i,Number(e[1]),Number(e[2])-1,Number(e[3]));let s=Number(e[4]||0)-t,a=Number(e[5]||0)-n,l=Number(e[6]||0),u=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(i,s,a,l,u),i}function Zn(e){return e instanceof Date&&!isNaN(e.valueOf())}var Uo=/^(\d+)?\.((\d+)(-(\d+))?)?$/,qn=22,xt=".",Je="0",zo=";",Wo=",",en="#",Xn="\xA4";function Vo(e,i,t,n,o,r,s=!1){let a="",l=!1;if(!isFinite(e))a=re(t,U.Infinity);else{let u=Ko(e);s&&(u=Go(u));let c=i.minInt,d=i.minFrac,f=i.maxFrac;if(r){let E=r.match(Uo);if(E===null)throw new Error(`${r} is not a valid digit info`);let ne=E[1],P=E[3],Se=E[5];ne!=null&&(c=tn(ne)),P!=null&&(d=tn(P)),Se!=null?f=tn(Se):P!=null&&d>f&&(f=d)}Yo(u,d,f);let p=u.digits,h=u.integerLen,m=u.exponent,S=[];for(l=p.every(E=>!E);h<c;h++)p.unshift(0);for(;h<0;h++)p.unshift(0);h>0?S=p.splice(h,p.length):(S=p,p=[0]);let O=[];for(p.length>=i.lgSize&&O.unshift(p.splice(-i.lgSize,p.length).join(""));p.length>i.gSize;)O.unshift(p.splice(-i.gSize,p.length).join(""));p.length&&O.unshift(p.join("")),a=O.join(re(t,n)),S.length&&(a+=re(t,o)+S.join("")),m&&(a+=re(t,U.Exponential)+"+"+m)}return e<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function mi(e,i,t,n,o){let r=ai(i,on.Currency),s=jo(r,re(i,U.MinusSign));return s.minFrac=pi(n),s.maxFrac=s.minFrac,Vo(e,s,i,U.CurrencyGroup,U.CurrencyDecimal,o).replace(Xn,t).replace(Xn,"").trim()}function jo(e,i="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=e.split(zo),o=n[0],r=n[1],s=o.indexOf(xt)!==-1?o.split(xt):[o.substring(0,o.lastIndexOf(Je)+1),o.substring(o.lastIndexOf(Je)+1)],a=s[0],l=s[1]||"";t.posPre=a.substring(0,a.indexOf(en));for(let c=0;c<l.length;c++){let d=l.charAt(c);d===Je?t.minFrac=t.maxFrac=c+1:d===en?t.maxFrac=c+1:t.posSuf+=d}let u=a.split(Wo);if(t.gSize=u[1]?u[1].length:0,t.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let c=o.length-t.posPre.length-t.posSuf.length,d=r.indexOf(en);t.negPre=r.substring(0,d).replace(/'/g,""),t.negSuf=r.slice(d+c).replace(/'/g,"")}else t.negPre=i+t.posPre,t.negSuf=t.posSuf;return t}function Go(e){if(e.digits[0]===0)return e;let i=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(i===0?e.digits.push(0,0):i===1&&e.digits.push(0),e.integerLen+=2),e}function Ko(e){let i=Math.abs(e)+"",t=0,n,o,r,s,a;for((o=i.indexOf(xt))>-1&&(i=i.replace(xt,"")),(r=i.search(/e/i))>0?(o<0&&(o=r),o+=+i.slice(r+1),i=i.substring(0,r)):o<0&&(o=i.length),r=0;i.charAt(r)===Je;r++);if(r===(a=i.length))n=[0],o=1;else{for(a--;i.charAt(a)===Je;)a--;for(o-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(i.charAt(r))}return o>qn&&(n=n.splice(0,qn-1),t=o-1,o=1),{digits:n,exponent:t,integerLen:o}}function Yo(e,i,t){if(i>t)throw new Error(`The minimum number of digits after fraction (${i}) is higher than the maximum (${t}).`);let n=e.digits,o=n.length-e.integerLen,r=Math.min(Math.max(i,o),t),s=r+e.integerLen,a=n[s];if(s>0){n.splice(Math.max(e.integerLen,s));for(let d=s;d<n.length;d++)n[d]=0}else{o=Math.max(0,o),e.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let d=1;d<s;d++)n[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[s-1]++;for(;o<Math.max(0,r);o++)n.push(0);let l=r!==0,u=i+e.integerLen,c=n.reduceRight(function(d,f,p,h){return f=f+d,h[p]=f<10?f:f-10,l&&(h[p]===0&&p>=u?h.pop():l=!1),f>=10?1:0},0);c&&(n.unshift(c),e.integerLen++)}function tn(e){let i=parseInt(e);if(isNaN(i))throw new Error("Invalid integer literal when parsing "+e);return i}var nn=/\s+/,Qn=[],rn=(()=>{class e{_ngEl;_renderer;initialClasses=Qn;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(nn):Qn}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(nn):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let o=this.stateMap.get(t);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],o=t[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(nn).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||e)(L(Ee),L(ze))};static \u0275dir=R({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var Nt=class{$implicit;ngForOf;index;count;constructor(i,t,n,o){this.$implicit=i,this.ngForOf=t,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},bi=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,o){this._viewContainer=t,this._template=n,this._differs=o}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new Nt(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),Jn(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}t.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);Jn(r,o)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(L(Dt),L(Ue),L(Mn))};static \u0275dir=R({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function Jn(e,i){e.context.$implicit=i.item}var sn=(()=>{class e{_viewContainer;_context=new $t;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){ei(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){ei(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(L(Dt),L(Ue))};static \u0275dir=R({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),$t=class{$implicit=null;ngIf=null};function ei(e,i){if(e&&!e.createEmbeddedView)throw new Ut(2020,!1)}var an=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,n,o){this._ngEl=t,this._differs=n,this._renderer=o}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[o,r]=t.split("."),s=o.indexOf("-")===-1?void 0:On.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||e)(L(Ee),L(Bn),L(ze))};static \u0275dir=R({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})(),ln=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(t,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||e)(L(Dt))};static \u0275dir=R({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[de]})}return e})();function yi(e,i){return new Ut(2100,!1)}var Zo="mediumDate",Di=new se(""),Ci=new se(""),qo=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,n,o){this.locale=t,this.defaultTimezone=n,this.defaultOptions=o}transform(t,n,o,r){if(t==null||t===""||t!==t)return null;try{let s=n??this.defaultOptions?.dateFormat??Zo,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return fi(t,s,r||this.locale,a)}catch(s){throw yi(e,s.message)}}static \u0275fac=function(n){return new(n||e)(L(Gt,16),L(Di,24),L(Ci,24))};static \u0275pipe=Wt({name:"date",type:e,pure:!0})}return e})();var Xo=(()=>{class e{_locale;_defaultCurrencyCode;constructor(t,n="USD"){this._locale=t,this._defaultCurrencyCode=n}transform(t,n=this._defaultCurrencyCode,o="symbol",r,s){if(!Qo(t))return null;s||=this._locale,typeof o=="boolean"&&(o=o?"symbol":"code");let a=n||this._defaultCurrencyCode;o!=="code"&&(o==="symbol"||o==="symbol-narrow"?a=di(a,o==="symbol"?"wide":"narrow",s):a=o);try{let l=Jo(t);return mi(l,s,a,n,r)}catch(l){throw yi(e,l.message)}}static \u0275fac=function(n){return new(n||e)(L(Gt,16),L(kn,16))};static \u0275pipe=Wt({name:"currency",type:e,pure:!0})}return e})();function Qo(e){return!(e==null||e===""||e!==e)}function Jo(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new Error(`${e} is not a number`);return e}var ge=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=oe({type:e});static \u0275inj=ie({})}return e})();function er(e,i){i=encodeURIComponent(i);for(let t of e.split(";")){let n=t.indexOf("="),[o,r]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Si="browser",vi="server";function et(e){return e===Si}function cn(e){return e===vi}var un=class{};function Ei(e,i){return e?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}function me(e,i){if(e&&i){let t=n=>{Ei(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function nr(){return window.innerWidth-document.documentElement.offsetWidth}function xe(e){for(let i of document?.styleSheets)try{for(let t of i?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function Da(e="p-overflow-hidden"){let i=xe(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,nr()+"px"),me(document.body,e)}function Ae(e,i){if(e&&i){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Ca(e="p-overflow-hidden"){let i=xe(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),Ae(document.body,e)}function wi(e){let i={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),i}function _i(){let e=window,i=document,t=i.documentElement,n=i.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:o,height:r}}function ir(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function or(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Sa(e,i,t=!0){var n,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:wi(e),l=a.height,u=a.width,c=i.offsetHeight,d=i.offsetWidth,f=i.getBoundingClientRect(),p=or(),h=ir(),m=_i(),S,O,E="top";f.top+c+l>m.height?(S=f.top+p-l,E="bottom",S<0&&(S=p)):S=c+f.top+p,f.left+u>m.width?O=Math.max(0,f.left+h+d-u):O=f.left+h,e.style.top=S+"px",e.style.left=O+"px",e.style.transformOrigin=E,t&&(e.style.marginTop=E==="bottom"?`calc(${(o=(n=xe(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=xe(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function va(e,i){e&&(typeof i=="string"?e.style.cssText=i:Object.entries(i||{}).forEach(([t,n])=>e.style[t]=n))}function Ai(e,i){if(e instanceof HTMLElement){let t=e.offsetWidth;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function Ea(e,i,t=!0){var n,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:wi(e),l=i.offsetHeight,u=i.getBoundingClientRect(),c=_i(),d,f,p="top";u.top+l+a.height>c.height?(d=-1*a.height,p="bottom",u.top+d<0&&(d=-1*u.top)):d=l,a.width>c.width?f=u.left*-1:u.left+a.width>c.width?f=(u.left+a.width-c.width)*-1:f=0,e.style.top=d+"px",e.style.left=f+"px",e.style.transformOrigin=p,t&&(e.style.marginTop=p==="bottom"?`calc(${(o=(n=xe(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=xe(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function tt(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function rr(e){let i=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?i=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?i=e.el.nativeElement:i=e.el)),tt(i)?i:void 0}function wa(e,i){let t=rr(e);if(t)t.appendChild(i);else throw new Error("Cannot append "+i+" to "+e)}function dn(e,i={}){if(tt(e)){let t=(n,o)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?t(n,u):Object.entries(u).map(([f,p])=>n==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?dn(e,o):(o=n==="class"?[...new Set(t("class",o))].join(" ").trim():n==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=o),e.setAttribute(n,o))}})}}function sr(e,i){return tt(e)?Array.from(e.querySelectorAll(i)):[]}function Ne(e,i){return tt(e)?e.matches(i)?e:e.querySelector(i):null}function _a(e,i=""){let t=sr(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function pn(e){if(e){let i=e.offsetHeight,t=getComputedStyle(e);return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),i}return 0}function ar(e){if(e){let i=e.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Aa(e){var i;if(e){let t=(i=ar(e))==null?void 0:i.childNodes,n=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return n;t[o].nodeType===1&&n++}}return-1}function Fi(e){if(e){let i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Ti(e,i){if(e){let t=e.offsetHeight;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function Fa(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function fn(e){if(e){let i=e.offsetWidth,t=getComputedStyle(e);return i-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),i}return 0}function Ta(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ii(e){var i;e&&("remove"in Element.prototype?e.remove():(i=e.parentNode)==null||i.removeChild(e))}function Oi(e,i="",t){tt(e)&&t!==null&&t!==void 0&&e.setAttribute(i,t)}function Li(){let e=new Map;return{on(i,t){let n=e.get(i);return n?n.push(t):n=[t],e.set(i,n),this},off(i,t){let n=e.get(i);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(i,t){let n=e.get(i);n&&n.slice().map(o=>{o(t)})},clear(){e.clear()}}}var lr=Object.defineProperty,Ri=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable,xi=(e,i,t)=>i in e?lr(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,dr=(e,i)=>{for(var t in i||(i={}))ur.call(i,t)&&xi(e,t,i[t]);if(Ri)for(var t of Ri(i))cr.call(i,t)&&xi(e,t,i[t]);return e};function M(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function hn(e,i,t=new WeakSet){if(e===i)return!0;if(!e||!i||typeof e!="object"||typeof i!="object"||t.has(e)||t.has(i))return!1;t.add(e).add(i);let n=Array.isArray(e),o=Array.isArray(i),r,s,a;if(n&&o){if(s=e.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!hn(e[r],i[r],t))return!1;return!0}if(n!=o)return!1;let l=e instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return e.getTime()==i.getTime();let c=e instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return e.toString()==i.toString();let f=Object.keys(e);if(s=f.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,f[r]))return!1;for(r=s;r--!==0;)if(a=f[r],!hn(e[a],i[a],t))return!1;return!0}function pr(e,i){return hn(e,i)}function $i(e){return!!(e&&e.constructor&&e.call&&e.apply)}function v(e){return!M(e)}function gn(e,i){if(!e||!i)return null;try{let t=e[i];if(v(t))return t}catch{}if(Object.keys(e).length){if($i(i))return i(e);if(i.indexOf(".")===-1)return e[i];{let t=i.split("."),n=e;for(let o=0,r=t.length;o<r;++o){if(n==null)return null;n=n[t[o]]}return n}}return null}function Pi(e,i,t){return t?gn(e,t)===gn(i,t):pr(e,i)}function Ra(e,i){if(e!=null&&i&&i.length){for(let t of i)if(Pi(e,t))return!0}return!1}function J(e,i=!0){return e instanceof Object&&e.constructor===Object&&(i||Object.keys(e).length!==0)}function q(e,...i){return $i(e)?e(...i):e}function be(e,i=!0){return typeof e=="string"&&(i||e!=="")}function Ni(e){return be(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Pt(e,i="",t={}){let n=Ni(i).split("."),o=n.shift();return o?J(e)?Pt(q(e[Object.keys(e).find(r=>Ni(r)===o)||""],t),n.join("."),t):void 0:q(e,t)}function kt(e,i=!0){return Array.isArray(e)&&(i||e.length!==0)}function xa(e){return e instanceof Date&&e.constructor===Date}function ki(e){return v(e)&&!isNaN(e)}function V(e,i){if(i){let t=i.test(e);return i.lastIndex=0,t}return!1}function nt(...e){let i=(t={},n={})=>{let o=dr({},t);return Object.keys(n).forEach(r=>{J(n[r])&&r in t&&J(t[r])?o[r]=i(t[r],n[r]):o[r]=n[r]}),o};return e.reduce((t,n,o)=>o===0?n:i(t,n),{})}function Fe(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Mt(e){return be(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,t)=>t===0?i:"-"+i.toLowerCase()).toLowerCase():e}function mn(e){return be(e)?e.replace(/[A-Z]/g,(i,t)=>t===0?i:"."+i.toLowerCase()).toLowerCase():e}var Bt={};function it(e="pui_id_"){return Bt.hasOwnProperty(e)||(Bt[e]=0),Bt[e]++,`${e}${Bt[e]}`}function fr(){let e=[],i=(s,a,l=999)=>{let u=o(s,a,l),c=u.value+(u.key===s?0:l)+1;return e.push({key:s,value:c}),c},t=s=>{e=e.filter(a=>a.value!==s)},n=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...e].reverse().find(u=>a?!0:u.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Pa=fr();var x=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var qa=(()=>{class e{clickSource=new Te;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Mi=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(L(Ue))};static \u0275dir=R({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),ye=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=oe({type:e});static \u0275inj=ie({imports:[ge]})}return e})(),Xa=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})();var hr=Object.defineProperty,gr=Object.defineProperties,mr=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertySymbols,Ui=Object.prototype.hasOwnProperty,zi=Object.prototype.propertyIsEnumerable,Bi=(e,i,t)=>i in e?hr(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,te=(e,i)=>{for(var t in i||(i={}))Ui.call(i,t)&&Bi(e,t,i[t]);if(Ht)for(var t of Ht(i))zi.call(i,t)&&Bi(e,t,i[t]);return e},bn=(e,i)=>gr(e,mr(i)),ce=(e,i)=>{var t={};for(var n in e)Ui.call(e,n)&&i.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Ht)for(var n of Ht(e))i.indexOf(n)<0&&zi.call(e,n)&&(t[n]=e[n]);return t};function el(...e){return nt(...e)}var br=Li(),j=br;function Hi(e,i){kt(e)?e.push(...i||[]):J(e)&&Object.assign(e,i)}function yr(e){return J(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Dr(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function yn(e="",i=""){return Dr(`${be(e,!1)&&be(i,!1)?`${e}-`:e}${i}`)}function Wi(e="",i=""){return`--${yn(e,i)}`}function Cr(e=""){let i=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(i+t)%2!==0}function Vi(e,i="",t="",n=[],o){if(be(e)){let r=/{([^}]*)}/g,s=e.trim();if(Cr(s))return;if(V(s,r)){let a=s.replaceAll(r,c=>{let f=c.replace(/{|}/g,"").split(".").filter(p=>!n.some(h=>V(p,h)));return`var(${Wi(t,Mt(f.join("-")))}${v(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return V(a.replace(u,"0"),l)?`calc(${a})`:a}return s}else if(ki(e))return e}function Sr(e,i,t){be(i,!1)&&e.push(`${i}:${t};`)}function $e(e,i){return e?`${e}{${i}}`:""}var Pe=(...e)=>vr(y.getTheme(),...e),vr=(e={},i,t,n)=>{if(i){let{variable:o,options:r}=y.defaults||{},{prefix:s,transform:a}=e?.options||r||{},u=V(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||M(n)&&a==="strict"?y.getTokenValue(i):Vi(u,void 0,s,[o.excludedKeyRegex],t)}return""};function Er(e,i={}){let t=y.defaults.variable,{prefix:n=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=i,s=(u,c="")=>Object.entries(u).reduce((d,[f,p])=>{let h=V(f,r)?yn(c):yn(c,Mt(f)),m=yr(p);if(J(m)){let{variables:S,tokens:O}=s(m,h);Hi(d.tokens,O),Hi(d.variables,S)}else d.tokens.push((n?h.replace(`${n}-`,""):h).replaceAll("-",".")),Sr(d.variables,Wi(h),Vi(m,h,n,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,n);return{value:a,tokens:l,declarations:a.join(""),css:$e(o,a.join(""))}}var ee={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let i=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=i.map(o=>o.resolve(t)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,i){return Er(e,{prefix:i?.prefix})},getCommon({name:e="",theme:i={},params:t,set:n,defaults:o}){var r,s,a,l,u,c,d;let{preset:f,options:p}=i,h,m,S,O,E,ne,P;if(v(f)&&p.transform!=="strict"){let{primitive:Se,semantic:ot,extend:rt}=f,Me=ot||{},{colorScheme:st}=Me,at=ce(Me,["colorScheme"]),lt=rt||{},{colorScheme:ut}=lt,Be=ce(lt,["colorScheme"]),He=st||{},{dark:ct}=He,dt=ce(He,["dark"]),pt=ut||{},{dark:ft}=pt,ht=ce(pt,["dark"]),gt=v(Se)?this._toVariables({primitive:Se},p):{},mt=v(at)?this._toVariables({semantic:at},p):{},bt=v(dt)?this._toVariables({light:dt},p):{},vn=v(ct)?this._toVariables({dark:ct},p):{},En=v(Be)?this._toVariables({semantic:Be},p):{},wn=v(ht)?this._toVariables({light:ht},p):{},_n=v(ft)?this._toVariables({dark:ft},p):{},[oo,ro]=[(r=gt.declarations)!=null?r:"",gt.tokens],[so,ao]=[(s=mt.declarations)!=null?s:"",mt.tokens||[]],[lo,uo]=[(a=bt.declarations)!=null?a:"",bt.tokens||[]],[co,po]=[(l=vn.declarations)!=null?l:"",vn.tokens||[]],[fo,ho]=[(u=En.declarations)!=null?u:"",En.tokens||[]],[go,mo]=[(c=wn.declarations)!=null?c:"",wn.tokens||[]],[bo,yo]=[(d=_n.declarations)!=null?d:"",_n.tokens||[]];h=this.transformCSS(e,oo,"light","variable",p,n,o),m=ro;let Do=this.transformCSS(e,`${so}${lo}`,"light","variable",p,n,o),Co=this.transformCSS(e,`${co}`,"dark","variable",p,n,o);S=`${Do}${Co}`,O=[...new Set([...ao,...uo,...po])];let So=this.transformCSS(e,`${fo}${go}color-scheme:light`,"light","variable",p,n,o),vo=this.transformCSS(e,`${bo}color-scheme:dark`,"dark","variable",p,n,o);E=`${So}${vo}`,ne=[...new Set([...ho,...mo,...yo])],P=q(f.css,{dt:Pe})}return{primitive:{css:h,tokens:m},semantic:{css:S,tokens:O},global:{css:E,tokens:ne},style:P}},getPreset({name:e="",preset:i={},options:t,params:n,set:o,defaults:r,selector:s}){var a,l,u;let c,d,f;if(v(i)&&t.transform!=="strict"){let p=e.replace("-directive",""),h=i,{colorScheme:m,extend:S,css:O}=h,E=ce(h,["colorScheme","extend","css"]),ne=S||{},{colorScheme:P}=ne,Se=ce(ne,["colorScheme"]),ot=m||{},{dark:rt}=ot,Me=ce(ot,["dark"]),st=P||{},{dark:at}=st,lt=ce(st,["dark"]),ut=v(E)?this._toVariables({[p]:te(te({},E),Se)},t):{},Be=v(Me)?this._toVariables({[p]:te(te({},Me),lt)},t):{},He=v(rt)?this._toVariables({[p]:te(te({},rt),at)},t):{},[ct,dt]=[(a=ut.declarations)!=null?a:"",ut.tokens||[]],[pt,ft]=[(l=Be.declarations)!=null?l:"",Be.tokens||[]],[ht,gt]=[(u=He.declarations)!=null?u:"",He.tokens||[]],mt=this.transformCSS(p,`${ct}${pt}`,"light","variable",t,o,r,s),bt=this.transformCSS(p,ht,"dark","variable",t,o,r,s);c=`${mt}${bt}`,d=[...new Set([...dt,...ft,...gt])],f=q(O,{dt:Pe})}return{css:c,tokens:d,style:f}},getPresetC({name:e="",theme:i={},params:t,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:o})},getPresetD({name:e="",theme:i={},params:t,set:n,defaults:o}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=i,u=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:u,options:l,params:t,set:n,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,i){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?i.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:i.options.darkModeSelector):[]},getLayerOrder(e,i={},t,n){let{cssLayer:o}=i;return o?`@layer ${q(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:i,params:t,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(c?.css){let d=Fe(c?.css),f=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){var s;let a={name:e,theme:i,params:t,set:o,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,f])=>c.push(`${d}="${f}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${Fe(l)}</style>`:""},createTokens(e={},i,t="",n="",o={}){return Object.entries(e).forEach(([r,s])=>{let a=V(r,i.variable.excludedKeyRegex)?t:t?`${t}.${mn(r)}`:mn(r),l=n?`${n}.${r}`:r;J(s)?this.createTokens(s,i,a,l,o):(o[a]||(o[a]={paths:[],computed(u,c={}){var d,f;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,c.binding):u&&u!=="none"?(f=this.paths.find(p=>p.scheme===u))==null?void 0:f.computed(u,c.binding):this.paths.map(p=>p.computed(p.scheme,c[p.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(u,c={}){let d=/{([^}]*)}/g,f=s;if(c.name=this.path,c.binding||(c.binding={}),V(s,d)){let h=s.trim().replaceAll(d,O=>{var E;let ne=O.replace(/{|}/g,""),P=(E=o[ne])==null?void 0:E.computed(u,c);return kt(P)&&P.length===2?`light-dark(${P[0].value},${P[1].value})`:P?.value}),m=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,S=/var\([^)]+\)/g;f=V(h.replace(S,"0"),m)?`calc(${h})`:h}return M(c.binding)&&delete c.binding,{colorScheme:u,path:this.path,paths:c,value:f.includes("undefined")?void 0:f}}}))}),o},getTokenValue(e,i,t){var n;let r=(l=>l.split(".").filter(c=>!V(c.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=e[r])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},u)=>{let c=u,{colorScheme:d}=c,f=ce(c,["colorScheme"]);return l[d]=f,l},void 0)},getSelectorRule(e,i,t,n){return t==="class"||t==="attr"?$e(v(i)?`${e}${i},${e} ${i}`:e,n):$e(e,v(i)?$e(i,n):n)},transformCSS(e,i,t,n,o={},r,s,a){if(v(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=t==="dark"?u.reduce((c,{type:d,selector:f})=>(v(f)&&(c+=f.includes("[CSS]")?f.replace("[CSS]",i):this.getSelectorRule(f,a,d,i)),c),""):$e(a??":root",i)}if(l){let u={name:"primeui",order:"primeui"};J(l)&&(u.name=q(l.name,{name:e,type:n})),v(u.name)&&(i=$e(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},y={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:i}=e;i&&(this._theme=bn(te({},i),{options:te(te({},this.defaults.options),i.options)}),this._tokens=ee.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),j.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=bn(te({},this.theme),{preset:e}),this._tokens=ee.createTokens(e,this.defaults),this.clearLoadedStyleNames(),j.emit("preset:change",e),j.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=bn(te({},this.theme),{options:e}),this.clearLoadedStyleNames(),j.emit("options:change",e),j.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return ee.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",i){return ee.getCommon({name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ee.getPresetC(t)},getDirective(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ee.getPresetD(t)},getCustomPreset(e="",i,t,n){let o={name:e,preset:i,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ee.getPreset(o)},getLayerOrderCSS(e=""){return ee.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",i,t="style",n){return ee.transformCSS(e,i,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",i,t={}){return ee.getCommonStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,i,t={}){return ee.getStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),j.emit(`theme:${i}:load`,e),!this._loadingStyles.size&&j.emit("theme:load"))}};var wr=0,ji=(()=>{class e{document=g(K);use(t,n={}){let o=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++wr}`,id:c=void 0,media:d=void 0,nonce:f=void 0,first:p=!1,props:h={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=t,dn(s,{type:"text/css",media:d,nonce:f});let m=this.document.head;p&&m.firstChild?m.insertBefore(s,m.firstChild):m.appendChild(s),Oi(s,"data-primeng-style-id",u)}return s.textContent!==r&&(s.textContent=r),{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ke={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},_r=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Ar=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,z=(()=>{class e{name="base";useStyle=g(ji);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,n={},o=r=>r)=>{let r=o(q(t,{dt:Pe}));return r?this.useStyle.use(Fe(r),T({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(o="")=>y.transformCSS(t.name||this.name,`${o}${n}`));loadGlobalCSS=(t={})=>this.load(Ar,t);loadGlobalTheme=(t={},n="")=>this.load(_r,t,(o="")=>y.transformCSS(t.name||this.name,`${o}${n}`));getCommonTheme=t=>y.getCommon(this.name,t);getComponentTheme=t=>y.getComponent(this.name,t);getDirectiveTheme=t=>y.getDirective(this.name,t);getPresetTheme=(t,n,o)=>y.getCustomPreset(this.name,t,n,o);getLayerOrderThemeCSS=()=>y.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let o=q(this.css,{dt:Pe}),r=Fe(`${o}${t}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>y.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let o=[y.getStyleSheet(this.name,t,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=q(this.theme,{dt:Pe}),a=Fe(y.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Fr=(()=>{class e{theme=we(void 0);csp=we({nonce:void 0});isThemeChanged=!1;document=g(K);baseStyle=g(z);constructor(){Ze(()=>{j.on("theme:change",t=>{Yt(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),Ze(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){y.clearLoadedStyleNames(),j.clear()}onThemeChange(t){y.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!y.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,T({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,T({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,T({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(T({name:"global-style"},s),r),y.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:o}=t||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Dn=(()=>{class e extends Fr{ripple=we(!1);platformId=g(Ie);inputStyle=we(null);inputVariant=we(null);overlayOptions={};csp=we({nonce:void 0});filterMatchModeOptions={text:[x.STARTS_WITH,x.CONTAINS,x.NOT_CONTAINS,x.ENDS_WITH,x.EQUALS,x.NOT_EQUALS],numeric:[x.EQUALS,x.NOT_EQUALS,x.LESS_THAN,x.LESS_THAN_OR_EQUAL_TO,x.GREATER_THAN,x.GREATER_THAN_OR_EQUAL_TO],date:[x.DATE_IS,x.DATE_IS_NOT,x.DATE_BEFORE,x.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Te;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=T(T({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c}=t||{};n&&this.csp.set(n),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Tr=new se("PRIME_NG_CONFIG");function Ol(...e){let i=e?.map(n=>({provide:Tr,useValue:n,multi:!1})),t=Ln(()=>{let n=g(Dn);e?.forEach(o=>n.setConfig(o))});return An([...i,t])}var Gi=(()=>{class e extends z{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),G=(()=>{class e{document=g(K);platformId=g(Ie);el=g(Ee);injector=g(Tn);cd=g(Kt);renderer=g(ze);config=g(Dn);baseComponentStyle=g(Gi);baseStyle=g(z);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=it("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return Pt(t,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!cn(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>j.off("theme:change",t))}_loadStyles(){let t=()=>{ke.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),ke.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!ke.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),ke.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!y.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,T({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,T({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,T({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(T({name:"global-style"},this.styleOptions),r),y.setLoadedStyleName("common")}if(!y.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,T({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(T({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),y.setLoadedStyleName(this.componentStyle?.name)}if(!y.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,T({name:"layer-order",first:!0},this.styleOptions)),y.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,T({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){ke.clearLoadedStyleNames(),j.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let n=this.componentStyle?.inlineStyles?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:T({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||e)};static \u0275dir=R({type:e,inputs:{dt:"dt"},features:[W([Gi,z]),de]})}return e})();var Cn=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=E=>{if(E)return getComputedStyle(E).getPropertyValue("position")==="relative"?E:r(E.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),p=r(t)?.getBoundingClientRect()||{top:-1*u,left:-1*c},h,m;l.top+a+s.height>d.height?(h=l.top-p.top-s.height,t.style.transformOrigin="bottom",l.top+h<0&&(h=-1*l.top)):(h=a+l.top-p.top,t.style.transformOrigin="top");let S=l.left+s.width-d.width,O=l.left-p.left;s.width>d.width?m=(l.left-p.left)*-1:S>0?m=O-S:m=l.left-p.left,t.style.top=h+"px",t.style.left=m+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),p=this.getViewport(),h,m;c.top+l+s>p.height?(h=c.top+d-s,t.style.transformOrigin="bottom",h<0&&(h=d)):(h=l+c.top+d,t.style.transformOrigin="top"),c.left+a>p.width?m=Math.max(0,c.left+f+u-a):m=c.left+f,t.style.top=h+"px",t.style.left=m+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,f=t.clientHeight,p=this.getOuterHeight(n);c<0?t.scrollTop=d+c:c+p>f&&(t.scrollTop=d+c-f+p)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?o(r,u):Object.entries(u).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),Ki=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=Cn.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Yi=(()=>{class e extends G{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(Ie);document=g(K);host=g(Ee);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){et(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=Cn.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275dir=R({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",w],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[k]})}return e})();var Ir=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Or={root:({props:e,instance:i})=>["p-badge p-component",{"p-badge-circle":v(e.value)&&String(e.value).length===1,"p-badge-dot":M(e.value)&&!i.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Zi=(()=>{class e extends z{name="badge";theme=Ir;classes=Or;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Sn=(()=>{class e extends G{styleClass=pe();style=pe();badgeSize=pe();size=pe();severity=pe();value=pe();badgeDisabled=pe(!1,{transform:w});_componentStyle=g(Zi);containerClass=Ye(()=>{let t="p-badge p-component";return v(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),M(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=ae({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(xn(o.style()),Oe(o.containerClass()),Rn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[W([Zi]),k],decls:1,vars:1,template:function(n,o){n&1&&Et(0),n&2&&wt(o.value())},dependencies:[ge,ye],encapsulation:2,changeDetection:0})}return e})(),qi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=oe({type:e});static \u0275inj=ie({imports:[Sn,ye,ye]})}return e})();var Rr=["*"],xr=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Nr=(()=>{class e extends z{name="baseicon";inlineStyles=xr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Xi=(()=>{class e extends G{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=M(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=ae({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",w],styleClass:"styleClass"},features:[W([Nr]),k],ngContentSelectors:Rr,decls:1,vars:0,template:function(n,o){n&1&&(We(),Ve(0))},encapsulation:2,changeDetection:0})}return e})();var Qi=(()=>{class e extends Xi{pathId;ngOnInit(){this.pathId="url(#"+it()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=ae({type:e,selectors:[["SpinnerIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Fn(),Le(0,"svg",0)(1,"g"),fe(2,"path",1),Re(),Le(3,"defs")(4,"clipPath",2),fe(5,"rect",3),Re()()()),n&2&&(Oe(o.getClassNames()),le("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),N(),le("clip-path",o.pathId),N(3),F("id",o.pathId))},encapsulation:2})}return e})();var $r=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Pr={root:"p-ink"},Ji=(()=>{class e extends z{name="ripple";theme=$r;classes=Pr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var eo=(()=>{class e extends G{zone=g(In);_componentStyle=g(Ji);animationListener;mouseDownListener;timeout;constructor(){super(),Ze(()=>{et(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Ae(n,"p-ink-active"),!pn(n)&&!fn(n)){let a=Math.max(Ai(this.el.nativeElement),Ti(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=Fi(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-fn(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-pn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),me(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Ae(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Ae(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Ae(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ii(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=R({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[W([Ji]),k]})}return e})();var kr=["content"],Mr=["loadingicon"],Br=["icon"],Hr=["*"],io=e=>({class:e});function Ur(e,i){e&1&&Nn(0)}function zr(e,i){if(e&1&&fe(0,"span",8),e&2){let t=X(3);F("ngClass",t.iconClass()),le("aria-hidden",!0)("data-pc-section","loadingicon")}}function Wr(e,i){if(e&1&&fe(0,"SpinnerIcon",9),e&2){let t=X(3);F("styleClass",t.spinnerIconClass())("spin",!0),le("aria-hidden",!0)("data-pc-section","loadingicon")}}function Vr(e,i){if(e&1&&(St(0),_e(1,zr,1,3,"span",6)(2,Wr,1,4,"SpinnerIcon",7),vt()),e&2){let t=X(2);N(),F("ngIf",t.loadingIcon),N(),F("ngIf",!t.loadingIcon)}}function jr(e,i){}function Gr(e,i){if(e&1&&_e(0,jr,0,0,"ng-template",10),e&2){let t=X(2);F("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Kr(e,i){if(e&1&&(St(0),_e(1,Vr,3,2,"ng-container",2)(2,Gr,1,1,null,5),vt()),e&2){let t=X();N(),F("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),N(),F("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",jt(3,io,t.iconClass()))}}function Yr(e,i){if(e&1&&fe(0,"span",8),e&2){let t=X(2);Oe(t.icon),F("ngClass",t.iconClass()),le("data-pc-section","icon")}}function Zr(e,i){}function qr(e,i){if(e&1&&_e(0,Zr,0,0,"ng-template",10),e&2){let t=X(2);F("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Xr(e,i){if(e&1&&(St(0),_e(1,Yr,1,4,"span",11)(2,qr,1,1,null,5),vt()),e&2){let t=X();N(),F("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),N(),F("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",jt(3,io,t.iconClass()))}}function Qr(e,i){if(e&1&&(Le(0,"span",12),Et(1),Re()),e&2){let t=X();le("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),N(),wt(t.label)}}function Jr(e,i){if(e&1&&fe(0,"p-badge",13),e&2){let t=X();F("value",t.badge)("severity",t.badgeSeverity)}}var es=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ts={root:({instance:e,props:i})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Ce=(()=>{class e extends z{name="button";theme=es;classes=ts;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var De={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},to=(()=>{class e extends G{_componentStyle=g(Ce);static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275dir=R({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&Ct("p-button-label",!0)},features:[W([Ce]),k]})}return e})(),no=(()=>{class e extends G{_componentStyle=g(Ce);static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275dir=R({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&Ct("p-button-icon",!0)},features:[W([Ce]),k]})}return e})(),ec=(()=>{class e extends G{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=zt(no);labelSignal=zt(to);isIconOnly=Ye(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(De);isTextButton=Ye(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(Ce);ngAfterViewInit(){super.ngAfterViewInit(),me(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let t=[De.button,De.component];return this.icon&&!this.label&&M(this.htmlElement.textContent)&&t.push(De.iconOnly),this.loading&&(t.push(De.disabled,De.loading),!this.icon&&this.label&&t.push(De.labelOnly),this.icon&&!this.label&&!M(this.htmlElement.textContent)&&t.push(De.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return M(this.fluid)?!!n:this.fluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>t.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Ne(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Ne(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&me(n,o);let r=this.getIconClass();r&&me(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=Ne(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=Ne(this.htmlElement,".p-button-icon"),n=Ne(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275dir=R({type:e,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(Vt(r,o.iconSignal,no,5),Vt(r,o.labelSignal,to,5)),n&2&&Pn(2)},hostVars:4,hostBindings:function(n,o){n&2&&Ct("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",w],rounded:[2,"rounded","rounded",w],text:[2,"text","text",w],outlined:[2,"outlined","outlined",w],size:"size",plain:[2,"plain","plain",w],fluid:[2,"fluid","fluid",w],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[W([Ce]),k,de]})}return e})(),ns=(()=>{class e extends G{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new yt;onFocus=new yt;onBlur=new yt;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return M(this.fluid)?!!n:this.fluid}_componentStyle=g(Ce);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=ae({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(je(r,kr,5),je(r,Mr,5),je(r,Br,5),je(r,Mi,4)),n&2){let s;Ge(s=Ke())&&(o.contentTemplate=s.first),Ge(s=Ke())&&(o.loadingIconTemplate=s.first),Ge(s=Ke())&&(o.iconTemplate=s.first),Ge(s=Ke())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",w],loading:[2,"loading","loading",w],loadingIcon:"loadingIcon",raised:[2,"raised","raised",w],rounded:[2,"rounded","rounded",w],text:[2,"text","text",w],plain:[2,"plain","plain",w],severity:"severity",outlined:[2,"outlined","outlined",w],link:[2,"link","link",w],tabindex:[2,"tabindex","tabindex",Hn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",w],fluid:[2,"fluid","fluid",w],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[W([Ce]),k,de],ngContentSelectors:Hr,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(We(),Le(0,"button",0),$n("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Ve(1),_e(2,Ur,1,0,"ng-container",1)(3,Kr,3,5,"ng-container",2)(4,Xr,3,5,"ng-container",2)(5,Qr,2,3,"span",3)(6,Jr,1,2,"p-badge",4),Re()),n&2&&(F("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),le("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),N(2),F("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),N(),F("ngIf",o.loading),N(),F("ngIf",!o.loading),N(),F("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),N(),F("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ge,rn,sn,ln,an,eo,Yi,Qi,qi,Sn,ye],encapsulation:2,changeDetection:0})}return e})(),tc=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=oe({type:e});static \u0275inj=ie({imports:[ge,ns,ye,ye]})}return e})();export{K as a,_t as b,Eo as c,Zt as d,Yn as e,rn as f,bi as g,sn as h,an as i,ln as j,qo as k,Xo as l,ge as m,er as n,Si as o,cn as p,un as q,Ei as r,me as s,Da as t,Ca as u,Sa as v,va as w,Ai as x,Ea as y,wa as z,sr as A,Ne as B,_a as C,Aa as D,Fa as E,Ta as F,Oi as G,M as H,v as I,Pi as J,Ra as K,xa as L,it as M,qa as N,Mi as O,ye as P,Xa as Q,el as R,z as S,Ol as T,G as U,Ki as V,Yi as W,Xi as X,eo as Y,ec as Z,ns as _,tc as $};
