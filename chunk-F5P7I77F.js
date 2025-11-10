import{h as dt}from"./chunk-7NHFVDL3.js";import{c as lt,d as Ve,f as De,h as Me}from"./chunk-F2X3VGZZ.js";import{aa as ct,b as be,g as ot,i as st,k as rt,n as at,pa as ut,qa as se,ta as re,va as ae,wa as ht}from"./chunk-HTSZVAD5.js";import{$a as p,Ab as q,Ca as _,Db as Ke,Eb as Je,Fb as et,Ga as ie,Ha as r,K as te,L as h,M as $,N as w,Nb as u,Oa as qe,P as F,Pa as A,Pb as Ce,Qa as l,Qb as tt,S as N,Sa as c,Ua as b,Wa as Qe,Y as T,Yb as nt,Z as Ue,_ as ze,_a as S,aa as m,bb as U,bc as it,ca as Le,eb as V,f as je,fc as O,ga as C,hc as x,i as Ge,ib as k,ic as Q,jb as P,kb as z,la as ne,ma as I,nb as oe,o as Be,ob as Ze,rb as D,sb as d,t as He,tb as Ye,ub as Xe,xb as L,za as We,zb as W}from"./chunk-NGP2J4BU.js";import{a as g,b as v}from"./chunk-ODN5LVDJ.js";var Dt=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(r(ie),r(ne))};static \u0275dir=l({type:e})}return e})(),Ee=(()=>{class e extends Dt{static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=l({type:e,features:[c]})}return e})(),G=new F("");var Kt={provide:G,useExisting:h(()=>Mt),multi:!0};function Jt(){let e=be()?be().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var en=new F(""),Mt=(()=>{class e extends Dt{_compositionMode;_composing=!1;constructor(t,i,o){super(t,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Jt())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(r(ie),r(ne),r(en,8))};static \u0275dir=l({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&D("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[u([Kt]),c]})}return e})();function Fe(e){return e==null||Ie(e)===0}function Ie(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var M=new F(""),B=new F(""),tn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pt=class{static min(n){return wt(n)}static max(n){return At(n)}static required(n){return nn(n)}static requiredTrue(n){return on(n)}static email(n){return sn(n)}static minLength(n){return rn(n)}static maxLength(n){return xt(n)}static pattern(n){return an(n)}static nullValidator(n){return ce()}static compose(n){return $t(n)}static composeAsync(n){return Tt(n)}};function wt(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function At(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function nn(e){return Fe(e.value)?{required:!0}:null}function on(e){return e.value===!0?null:{required:!0}}function sn(e){return Fe(e.value)||tn.test(e.value)?null:{email:!0}}function rn(e){return n=>{let t=n.value?.length??Ie(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function xt(e){return n=>{let t=n.value?.length??Ie(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function an(e){if(!e)return ce;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(Fe(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function ce(e){return null}function Et(e){return e!=null}function Ft(e){return Qe(e)?Ge(e):e}function It(e){let n={};return e.forEach(t=>{n=t!=null?g(g({},n),t):n}),Object.keys(n).length===0?null:n}function St(e,n){return n.map(t=>t(e))}function ln(e){return!e.validate}function Ot(e){return e.map(n=>ln(n)?n:t=>n.validate(t))}function $t(e){if(!e)return null;let n=e.filter(Et);return n.length==0?null:function(t){return It(St(t,n))}}function Nt(e){return e!=null?$t(Ot(e)):null}function Tt(e){if(!e)return null;let n=e.filter(Et);return n.length==0?null:function(t){let i=St(t,n).map(Ft);return He(i).pipe(Be(It))}}function kt(e){return e!=null?Tt(Ot(e)):null}function ft(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Pt(e){return e._rawValidators}function Rt(e){return e._rawAsyncValidators}function we(e){return e?Array.isArray(e)?e:[e]:[]}function ue(e,n){return Array.isArray(e)?e.includes(n):e===n}function gt(e,n){let t=we(n);return we(e).forEach(o=>{ue(t,o)||t.push(o)}),t}function mt(e,n){return we(n).filter(t=>!ue(e,t))}var de=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Nt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=kt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},f=class extends de{name;get formDirective(){return null}get path(){return null}},y=class extends de{_parent=null;name=null;valueAccessor=null},he=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},cn={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ni=v(g({},cn),{"[class.ng-submitted]":"isSubmitted"}),Ti=(()=>{class e extends he{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(r(y,2))};static \u0275dir=l({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&U("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[c]})}return e})(),ki=(()=>{class e extends he{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(r(f,10))};static \u0275dir=l({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&U("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[c]})}return e})();var Z="VALID",le="INVALID",R="PENDING",Y="DISABLED",E=class{},pe=class extends E{value;source;constructor(n,t){super(),this.value=n,this.source=t}},X=class extends E{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},K=class extends E{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},j=class extends E{status;source;constructor(n,t){super(),this.status=n,this.source=t}},Ae=class extends E{source;constructor(n){super(),this.source=n}},xe=class extends E{source;constructor(n){super(),this.source=n}};function Se(e){return(ve(e)?e.validators:e)||null}function un(e){return Array.isArray(e)?Nt(e):e||null}function Oe(e,n){return(ve(n)?n.asyncValidators:e)||null}function dn(e){return Array.isArray(e)?kt(e):e||null}function ve(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function jt(e,n,t){let i=e.controls;if(!(n?Object.keys(i):i).length)throw new te(1e3,"");if(!i[t])throw new te(1001,"")}function Gt(e,n,t){e._forEachChild((i,o)=>{if(t[o]===void 0)throw new te(1002,"")})}var J=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return x(this.statusReactive)}set status(n){x(()=>this.statusReactive.set(n))}_status=Q(()=>this.statusReactive());statusReactive=I(void 0);get valid(){return this.status===Z}get invalid(){return this.status===le}get pending(){return this.status==R}get disabled(){return this.status===Y}get enabled(){return this.status!==Y}errors;get pristine(){return x(this.pristineReactive)}set pristine(n){x(()=>this.pristineReactive.set(n))}_pristine=Q(()=>this.pristineReactive());pristineReactive=I(!0);get dirty(){return!this.pristine}get touched(){return x(this.touchedReactive)}set touched(n){x(()=>this.touchedReactive.set(n))}_touched=Q(()=>this.touchedReactive());touchedReactive=I(!1);get untouched(){return!this.touched}_events=new je;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(gt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(gt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(mt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(mt(n,this._rawAsyncValidators))}hasValidator(n){return ue(this._rawValidators,n)}hasAsyncValidator(n){return ue(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(v(g({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new K(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new K(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(v(g({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new X(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new X(!0,i))}markAsPending(n={}){this.status=R;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new j(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(v(g({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Y,this.errors=null,this._forEachChild(o=>{o.disable(v(g({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new pe(this.value,i)),this._events.next(new j(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(g({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Z,this._forEachChild(i=>{i.enable(v(g({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(v(g({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Z||this.status===R)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new pe(this.value,t)),this._events.next(new j(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(v(g({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Y:Z}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=R,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Ft(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new j(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?Y:this.errors?le:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(R)?R:this._anyControlsHaveStatus(le)?le:Z}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new X(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new K(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ve(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=un(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=dn(this._rawAsyncValidators)}},_t=class extends J{constructor(n,t,i){super(Se(t),Oe(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){Gt(this,!0,n),Object.keys(n).forEach(i=>{jt(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,s)=>{i=t(i,o,s)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var H=new F("",{providedIn:"root",factory:()=>ee}),ee="always";function ye(e,n){return[...n.path,e]}function fe(e,n,t=ee){$e(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),pn(e,n),gn(e,n),fn(e,n),hn(e,n)}function ge(e,n,t=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),_e(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function me(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function hn(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function $e(e,n){let t=Pt(e);n.validator!==null?e.setValidators(ft(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=Rt(e);n.asyncValidator!==null?e.setAsyncValidators(ft(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();me(n._rawValidators,o),me(n._rawAsyncValidators,o)}function _e(e,n){let t=!1;if(e!==null){if(n.validator!==null){let o=Pt(e);if(Array.isArray(o)&&o.length>0){let s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(n.asyncValidator!==null){let o=Rt(e);if(Array.isArray(o)&&o.length>0){let s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}let i=()=>{};return me(n._rawValidators,i),me(n._rawAsyncValidators,i),t}function pn(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Bt(e,n)})}function fn(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Bt(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function Bt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function gn(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function mn(e,n){e==null,$e(e,n)}function _n(e,n){return _e(e,n)}function Ne(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function vn(e){return Object.getPrototypeOf(e.constructor)===Ee}function yn(e,n){e._syncPendingControls(),n.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Te(e,n){if(!n)return null;Array.isArray(n);let t,i,o;return n.forEach(s=>{s.constructor===Mt?t=s:vn(s)?i=s:o=s}),o||i||t||null}function Cn(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function vt(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function yt(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Ht=class extends J{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(Se(t),Oe(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ve(t)&&(t.nonNullable||t.initialValueIsDefault)&&(yt(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){vt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){vt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){yt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var bn=e=>e instanceof Ht,Vn=(()=>{class e extends f{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return ye(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=l({type:e,standalone:!1,features:[c]})}return e})();var Dn={provide:y,useExisting:h(()=>ke)},Ct=Promise.resolve(),ke=(()=>{class e extends y{_changeDetectorRef;callSetDisabledState;control=new Ht;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new C;constructor(t,i,o,s,a,Xt){super(),this._changeDetectorRef=a,this.callSetDisabledState=Xt,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Te(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ne(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){fe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ct.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&O(i);Ct.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ye(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(r(f,9),r(M,10),r(B,10),r(G,10),r(it,8),r(H,8))};static \u0275dir=l({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[u([Dn]),c,T]})}return e})();var Ri=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=l({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})(),Mn={provide:G,useExisting:h(()=>wn),multi:!0},wn=(()=>{class e extends Ee{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=l({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&D("input",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[u([Mn]),c]})}return e})(),An={provide:G,useExisting:h(()=>En),multi:!0};var xn=(()=>{class e{_accessors=[];add(t,i){this._accessors.push([t,i])}remove(t){for(let i=this._accessors.length-1;i>=0;--i)if(this._accessors[i][1]===t){this._accessors.splice(i,1);return}}select(t){this._accessors.forEach(i=>{this._isSameGroup(i,t)&&i[1]!==t&&i[1].fireUncheck(t.value)})}_isSameGroup(t,i){return t[0].control?t[0]._parent===i._control._parent&&t[1].name===i.name:!1}static \u0275fac=function(i){return new(i||e)};static \u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),En=(()=>{class e extends Ee{_registry;_injector;_state;_control;_fn;setDisabledStateFired=!1;onChange=()=>{};name;formControlName;value;callSetDisabledState=N(H,{optional:!0})??ee;constructor(t,i,o,s){super(t,i),this._registry=o,this._injector=s}ngOnInit(){this._control=this._injector.get(y),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static \u0275fac=function(i){return new(i||e)(r(ie),r(ne),r(xn),r(Le))};static \u0275dir=l({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(i,o){i&1&&D("change",function(){return o.onChange()})("blur",function(){return o.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},standalone:!1,features:[u([An]),c]})}return e})();var Pe=new F(""),Fn={provide:y,useExisting:h(()=>In)},In=(()=>{class e extends y{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new C;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,o,s,a){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=a,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Te(this,o)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&ge(i,this,!1),fe(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Ne(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ge(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||e)(r(M,10),r(B,10),r(G,10),r(Pe,8),r(H,8))};static \u0275dir=l({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[u([Fn]),c,T]})}return e})(),Sn={provide:f,useExisting:h(()=>Ut)},Ut=(()=>{class e extends f{callSetDisabledState;get submitted(){return x(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Q(()=>this._submittedReactive());_submittedReactive=I(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new C;constructor(t,i,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(_e(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return fe(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){ge(t.control||null,t,!1),Cn(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),yn(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Ae(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new xe(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,o=this.form.get(t.path);i!==o&&(ge(i||null,t),bn(o)&&(fe(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);mn(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&_n(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){$e(this.form,this),this._oldForm&&_e(this._oldForm,this)}static \u0275fac=function(i){return new(i||e)(r(M,10),r(B,10),r(H,8))};static \u0275dir=l({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&D("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[u([Sn]),c,T]})}return e})(),On={provide:f,useExisting:h(()=>zt)},zt=(()=>{class e extends Vn{name=null;constructor(t,i,o){super(),this._parent=t,this._setValidators(i),this._setAsyncValidators(o)}_checkParentType(){Wt(this._parent)}static \u0275fac=function(i){return new(i||e)(r(f,13),r(M,10),r(B,10))};static \u0275dir=l({type:e,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[u([On]),c]})}return e})(),$n={provide:f,useExisting:h(()=>Lt)},Lt=(()=>{class e extends f{_parent;name=null;constructor(t,i,o){super(),this._parent=t,this._setValidators(i),this._setAsyncValidators(o)}ngOnInit(){Wt(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return ye(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(i){return new(i||e)(r(f,13),r(M,10),r(B,10))};static \u0275dir=l({type:e,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[u([$n]),c]})}return e})();function Wt(e){return!(e instanceof zt)&&!(e instanceof Ut)&&!(e instanceof Lt)}var Nn={provide:y,useExisting:h(()=>Tn)},Tn=(()=>{class e extends y{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new C;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,o,s,a){super(),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Te(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Ne(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ye(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||e)(r(f,13),r(M,10),r(B,10),r(G,10),r(Pe,8))};static \u0275dir=l({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[u([Nn]),c,T]})}return e})();function kn(e){return typeof e=="number"?e:parseInt(e,10)}function qt(e){return typeof e=="number"?e:parseFloat(e)}var Re=(()=>{class e{_validator=ce;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ce,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||e)};static \u0275dir=l({type:e,features:[T]})}return e})(),Pn={provide:M,useExisting:h(()=>Rn),multi:!0},Rn=(()=>{class e extends Re{max;inputName="max";normalizeInput=t=>qt(t);createValidator=t=>At(t);static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=l({type:e,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,o){i&2&&S("max",o._enabled?o.max:null)},inputs:{max:"max"},standalone:!1,features:[u([Pn]),c]})}return e})(),jn={provide:M,useExisting:h(()=>Gn),multi:!0},Gn=(()=>{class e extends Re{min;inputName="min";normalizeInput=t=>qt(t);createValidator=t=>wt(t);static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=l({type:e,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,o){i&2&&S("min",o._enabled?o.min:null)},inputs:{min:"min"},standalone:!1,features:[u([jn]),c]})}return e})();var Bn={provide:M,useExisting:h(()=>Hn),multi:!0},Hn=(()=>{class e extends Re{maxlength;inputName="maxlength";normalizeInput=t=>kn(t);createValidator=t=>xt(t);static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=l({type:e,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(i,o){i&2&&S("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[u([Bn]),c]})}return e})();var Qt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=w({})}return e})(),bt=class extends J{constructor(n,t,i){super(Se(t),Oe(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){Gt(this,!1,n),n.forEach((i,o)=>{jt(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var ji=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:H,useValue:t.callSetDisabledState??ee}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=w({imports:[Qt]})}return e})(),Gi=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Pe,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:H,useValue:t.callSetDisabledState??ee}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=w({imports:[Qt]})}return e})();var zn=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Ln={root:({instance:e,props:n})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":n.size==="small","p-inputtext-lg":n.size==="large","p-invalid":n.invalid,"p-variant-filled":n.variant==="filled","p-inputtext-fluid":n.fluid}]},Zt=(()=>{class e extends re{name="inputtext";theme=zn;classes=Ln;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=$({token:e,factory:e.\u0275fac})}return e})();var Ki=(()=>{class e extends ae{ngModel;variant;fluid;pSize;filled;_componentStyle=N(Zt);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return ct(this.fluid)?!!i:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||e)(r(ke,8))};static \u0275dir=l({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,o){if(i&1&&D("input",function(a){return o.onInput(a)}),i&2){let s;U("p-filled",o.filled)("p-variant-filled",((s=o.variant)!==null&&s!==void 0?s:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",O],pSize:"pSize"},features:[u([Zt]),c]})}return e})(),Ji=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=w({})}return e})();var Wn=["container"],qn=["icon"],Qn=["closeicon"],Zn=["*"],Yn=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),Xn=e=>({value:"visible()",params:e}),Kn=e=>({closeCallback:e});function Jn(e,n){e&1&&oe(0)}function ei(e,n){if(e&1&&b(0,Jn,1,0,"ng-container",7),e&2){let t=d(2);p("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function ti(e,n){if(e&1&&z(0,"i",3),e&2){let t=d(2);p("ngClass",t.icon)}}function ni(e,n){if(e&1&&z(0,"span",9),e&2){let t=d(3);p("ngClass",t.cx("text"))("innerHTML",t.text,We)}}function ii(e,n){if(e&1&&(k(0,"div"),b(1,ni,1,2,"span",8),P()),e&2){let t=d(2);_(),p("ngIf",!t.escape)}}function oi(e,n){if(e&1&&(k(0,"span",5),Je(1),P()),e&2){let t=d(3);p("ngClass",t.cx("text")),_(),et(t.text)}}function si(e,n){if(e&1&&b(0,oi,2,2,"span",10),e&2){let t=d(2);p("ngIf",t.escape&&t.text)}}function ri(e,n){e&1&&oe(0)}function ai(e,n){if(e&1&&b(0,ri,1,0,"ng-container",11),e&2){let t=d(2);p("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",Ce(2,Kn,t.close.bind(t)))}}function li(e,n){if(e&1&&(k(0,"span",5),Xe(1),P()),e&2){let t=d(2);p("ngClass",t.cx("text"))}}function ci(e,n){if(e&1&&z(0,"i",13),e&2){let t=d(3);p("ngClass",t.closeIcon)}}function ui(e,n){e&1&&oe(0)}function di(e,n){if(e&1&&b(0,ui,1,0,"ng-container",7),e&2){let t=d(3);p("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function hi(e,n){e&1&&z(0,"TimesIcon",14)}function pi(e,n){if(e&1){let t=Ze();k(0,"button",12),D("click",function(o){Ue(t);let s=d(2);return ze(s.close(o))}),b(1,ci,1,1,"i",13)(2,di,1,1,"ng-container")(3,hi,1,0,"TimesIcon",14),P()}if(e&2){let t=d(2);S("aria-label",t.closeAriaLabel),_(),V(t.closeIcon?1:-1),_(),V(t.closeIconTemplate||t._closeIconTemplate?2:-1),_(),V(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function fi(e,n){if(e&1&&(k(0,"div",1)(1,"div",2),b(2,ei,1,1,"ng-container")(3,ti,1,1,"i",3)(4,ii,2,1,"div",4)(5,si,1,1,"ng-template",null,0,nt)(7,ai,1,4,"ng-container")(8,li,2,1,"span",5)(9,pi,4,4,"button",6),P()()),e&2){let t=Ke(6),i=d();p("ngClass",i.containerClass)("@messageAnimation",Ce(13,Xn,tt(10,Yn,i.showTransitionOptions,i.hideTransitionOptions))),S("aria-live","polite")("role","alert"),_(2),V(i.iconTemplate||i._iconTemplate?2:-1),_(),V(i.icon?3:-1),_(),p("ngIf",!i.escape)("ngIfElse",t),_(3),V(i.containerTemplate||i._containerTemplate?7:8),_(2),V(i.closable?9:-1)}}var gi=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,mi={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Yt=(()=>{class e extends re{name="message";theme=gi;classes=mi;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=$({token:e,factory:e.\u0275fac})}return e})();var _i=(()=>{class e extends ae{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new C;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=I(!0);_componentStyle=N(Yt);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=qe({type:e,selectors:[["p-message"]],contentQueries:function(i,o,s){if(i&1&&(L(s,Wn,4),L(s,qn,4),L(s,Qn,4),L(s,ut,4)),i&2){let a;W(a=q())&&(o.containerTemplate=a.first),W(a=q())&&(o.iconTemplate=a.first),W(a=q())&&(o.closeIconTemplate=a.first),W(a=q())&&(o.templates=a)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",O],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",O],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[u([Yt]),c],ngContentSelectors:Zn,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,o){i&1&&(Ye(),b(0,fi,10,15,"div",1)),i&2&&V(o.visible()?0:-1)},dependencies:[at,ot,st,rt,dt,ht,se],encapsulation:2,data:{animation:[lt("messageAnimation",[Me(":enter",[De({opacity:0,transform:"translateY(-25%)"}),Ve("{{showTransitionParams}}")]),Me(":leave",[Ve("{{hideTransitionParams}}",De({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),Co=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=w({imports:[_i,se,se]})}return e})();export{G as a,Mt as b,pt as c,y as d,Ti as e,ki as f,_t as g,Ht as h,ke as i,Ri as j,wn as k,En as l,In as m,Ut as n,Lt as o,Tn as p,Rn as q,Gn as r,Hn as s,bt as t,ji as u,Gi as v,Ki as w,Ji as x,_i as y,Co as z};
