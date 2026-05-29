import{c as tt}from"./chunk-B5LGF5BI.js";import{c as _}from"./chunk-IJ2HBMGD.js";import{La as Y,Wa as et,fa as J,ga as K,h as H,ja as X}from"./chunk-SKX5JZ4P.js";import{j as $,l as q,m as z,n as G,s as W,v as T}from"./chunk-OERL6A4R.js";import{c as Z,d as v,f as S,g as C,h as x}from"./chunk-F2X3VGZZ.js";import{$a as a,$b as b,Ab as N,Bb as r,Gb as f,Ia as u,Ib as y,Jb as g,Nb as A,R as w,Va as L,X as I,Za as k,_b as B,ac as Q,bc as j,ca as p,da as m,fa as h,fb as P,gb as i,kb as O,mc as U,qb as D,rb as E,sb as d,tb as F,ub as V,wb as M,wc as R}from"./chunk-JT2GHYKL.js";var ot=["icon"],it=(e,l)=>({showTransitionParams:e,hideTransitionParams:l}),rt=e=>({value:"open",params:e}),lt=()=>({styleClass:"p-scrolltop-icon"}),st=()=>({"font-size":"1rem",scale:"1.5"});function at(e,l){if(e&1&&d(0,"span",7),e&2){let t=r(4);O(t._icon),i("ngClass","p-scrolltop-icon")}}function ct(e,l){e&1&&d(0,"ChevronUpIcon",8),e&2&&i("styleClass","p-scrolltop-icon")("ngStyle",b(2,st))}function pt(e,l){if(e&1&&(F(0),a(1,at,1,3,"span",5)(2,ct,1,3,"ChevronUpIcon",6),V()),e&2){let t=r(3);u(),i("ngIf",t._icon),u(),i("ngIf",!t._icon)}}function mt(e,l){}function ut(e,l){if(e&1&&a(0,mt,0,0,"ng-template",9),e&2){r(2);let t=A(2);i("ngIf",!t)}}function _t(e,l){if(e&1&&a(0,pt,3,2,"ng-container",3)(1,ut,1,1,null,4),e&2){let t=r(2);i("ngIf",!t.iconTemplate&&!t._iconTemplate),u(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",b(3,lt))}}function ht(e,l){if(e&1){let t=M();D(0,"p-button",2),N("@animation.start",function(n){p(t);let s=r();return m(s.onEnter(n))})("@animation.done",function(n){p(t);let s=r();return m(s.onLeave(n))})("click",function(){p(t);let n=r();return m(n.onClick())}),a(1,_t,2,4,"ng-template",null,0,U),E()}if(e&2){let t=r();i("@animation",Q(8,rt,j(5,it,t.showTransitionOptions,t.hideTransitionOptions)))("styleClass",t.getStyleClass())("ngStyle",t.style)("buttonProps",t.buttonProps),P("aria-label",t.buttonAriaLabel)}}var dt=({dt:e})=>`
.p-scrolltop.p-button {
    position: fixed;
    bottom: 20px;
    inset-inline-end: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky;
    display: flex;
    margin-left: auto;
}

.p-scrolltop-sticky.p-button:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}

/* For PrimeNG */
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
`,ft={root:({props:e})=>["p-scrolltop",{"p-scrolltop-sticky":e.target!=="window"}],icon:"p-scrolltop-icon"},nt=(()=>{class e extends X{name="scrolltop";theme=dt;classes=ft;static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Qt=(()=>{class e extends Y{styleClass;style;target="window";threshold=400;get icon(){return this._icon}behavior="smooth";showTransitionOptions=".15s";hideTransitionOptions=".15s";buttonAriaLabel;buttonProps={rounded:!0};iconTemplate;templates;_iconTemplate;_icon;set icon(t){this._icon=t}documentScrollListener;parentScrollListener;visible=!1;overlay;_componentStyle=I(nt);ngOnInit(){super.ngOnInit(),this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}onClick(){(this.target==="window"?this.document.defaultView:this.el.nativeElement.parentElement).scroll({top:0,behavior:this.behavior})}onEnter(t){switch(t.toState){case"open":this.overlay=t.element,_.set("overlay",this.overlay,this.config.zIndex.overlay);break;case"void":this.overlay=null;break}}onLeave(t){switch(t.toState){case"void":_.clear(t.element);break}}checkVisibility(t){t>this.threshold?this.visible=!0:this.visible=!1,this.cd.markForCheck()}bindParentScrollListener(){T(this.platformId)&&(this.parentScrollListener=this.renderer.listen(this.el.nativeElement.parentElement,"scroll",()=>{this.checkVisibility(this.el.nativeElement.parentElement.scrollTop)}))}bindDocumentScrollListener(){T(this.platformId)&&(this.documentScrollListener=this.renderer.listen(this.document.defaultView,"scroll",()=>{this.checkVisibility(H())}))}unbindParentScrollListener(){this.parentScrollListener&&(this.parentScrollListener(),this.parentScrollListener=null)}unbindDocumentScrollListener(){this.documentScrollListener&&(this.documentScrollListener(),this.documentScrollListener=null)}getStyleClass(){return`p-scrolltop p-button${this.styleClass?` ${this.styleClass}`:""}${this.target!=="window"?" p-scrolltop-sticky":""}`}ngOnDestroy(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.overlay&&(_.clear(this.overlay),this.overlay=null),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=L({type:e,selectors:[["p-scrollTop"],["p-scrolltop"],["p-scroll-top"]],contentQueries:function(o,n,s){if(o&1&&(f(s,ot,4),f(s,J,4)),o&2){let c;y(c=g())&&(n.iconTemplate=c.first),y(c=g())&&(n.templates=c)}},inputs:{styleClass:"styleClass",style:"style",target:"target",threshold:[2,"threshold","threshold",R],icon:"icon",behavior:"behavior",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonAriaLabel:"buttonAriaLabel",buttonProps:"buttonProps"},features:[B([nt]),k],decls:1,vars:1,consts:[["icon",""],["type","button",3,"styleClass","ngStyle","buttonProps","click",4,"ngIf"],["type","button",3,"click","styleClass","ngStyle","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"ngClass"],[3,"styleClass","ngStyle"],[3,"ngIf"]],template:function(o,n){o&1&&a(0,ht,3,10,"p-button",1),o&2&&i("ngIf",n.visible)},dependencies:[W,$,q,G,z,tt,et,K],encapsulation:2,data:{animation:[Z("animation",[C("void",S({opacity:0})),C("open",S({opacity:1})),x("void => open",v("{{showTransitionParams}}")),x("open => void",v("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})();export{Qt as a};
