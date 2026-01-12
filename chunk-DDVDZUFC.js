import{a as rt,b as at}from"./chunk-J2OQKHI6.js";import{a as lt,b as st,c as ct}from"./chunk-R337KO4K.js";import"./chunk-TGHFNB2O.js";import{a as Re}from"./chunk-3W6SY3FJ.js";import"./chunk-X5YLR3NI.js";import{a as et,b as it}from"./chunk-6SU3I34H.js";import{a as Je,b as Ke}from"./chunk-257UBBKA.js";import"./chunk-LNELZQBX.js";import"./chunk-HGCMJYCF.js";import"./chunk-R6JJTMSQ.js";import"./chunk-LXNEV3HK.js";import"./chunk-VGXG2YJV.js";import{a as nt,b as ot}from"./chunk-WM5XU3X5.js";import"./chunk-X6KCAY4D.js";import{a as je,b as We}from"./chunk-CDAJFNTU.js";import{c as Fe,e as He}from"./chunk-24XCOXEM.js";import{b as Xe,c as Ze,d as tt}from"./chunk-ISHDA547.js";import{A as Ue,b as Ie,c as F,d as Te,e as Ee,f as Me,j as Pe,k as $e,o as Ve,p as Ne,q as ze,r as Le,w as Be,y as Ae,z as Ge}from"./chunk-TMU4BSEA.js";import"./chunk-VBVEJT47.js";import"./chunk-F2X3VGZZ.js";import"./chunk-IQ756M4J.js";import"./chunk-HLDOTEFS.js";import{Ca as M,Fa as P,Ra as Qe,Sa as Ye,j as G,l as Se,m as De,n as we,o as qe,q as E,ya as U,za as w}from"./chunk-KHBOZFX4.js";import{$a as W,Ba as me,Bb as ee,Cb as te,Da as l,Gb as s,Hb as y,Ia as J,Ib as ie,Jb as ke,K as $,Lb as ne,Mb as oe,Nb as re,P as k,Pa as H,Pb as T,Q as V,Qa as z,Qb as B,Ra as ge,Ta as R,V as _,Va as v,Zb as ae,_b as le,aa as f,ab as p,ba as m,bb as he,ca as ue,cb as _e,da as S,db as L,eb as ve,fb as I,gb as be,hb as K,ib as X,j as O,ja as fe,jb as r,jc as A,k as j,kb as a,lb as u,mb as xe,nb as ye,o as q,pa as N,pb as D,tb as g,u as de,ub as d,vb as Ce,wb as Oe,zb as Z}from"./chunk-OF4FCVTH.js";import{a as h,b}from"./chunk-ODN5LVDJ.js";var vt=["icon"],bt=["*"];function xt(t,n){if(t&1&&u(0,"span",4),t&2){let e=d(2);p("ngClass",e.icon)}}function yt(t,n){if(t&1&&(xe(0),v(1,xt,1,1,"span",3),ye()),t&2){let e=d();l(),p("ngIf",e.icon)}}function Ct(t,n){}function Ot(t,n){t&1&&v(0,Ct,0,0,"ng-template")}function kt(t,n){if(t&1&&(r(0,"span",5),v(1,Ot,1,0,null,6),a()),t&2){let e=d();l(),p("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var St=({dt:t})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${t("tag.primary.background")};
    color: ${t("tag.primary.color")};
    font-size: ${t("tag.font.size")};
    font-weight: ${t("tag.font.weight")};
    padding: ${t("tag.padding")};
    border-radius: ${t("tag.border.radius")};
    gap: ${t("tag.gap")};
}

.p-tag-icon {
    font-size: ${t("tag.icon.size")};
    width: ${t("tag.icon.size")};
    height:${t("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${t("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${t("tag.success.background")};
    color: ${t("tag.success.color")};
}

.p-tag-info {
    background: ${t("tag.info.background")};
    color: ${t("tag.info.color")};
}

.p-tag-warn {
    background: ${t("tag.warn.background")};
    color: ${t("tag.warn.color")};
}

.p-tag-danger {
    background: ${t("tag.danger.background")};
    color: ${t("tag.danger.color")};
}

.p-tag-secondary {
    background: ${t("tag.secondary.background")};
    color: ${t("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${t("tag.contrast.background")};
    color: ${t("tag.contrast.color")};
}
`,Dt={root:({props:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},pt=(()=>{class t extends M{name="tag";theme=St;classes=Dt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var se=(()=>{class t extends P{get style(){return this._style}set style(e){this._style=e,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=_(pt);ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break}})}containerClass(){let e="p-tag p-component";return this.severity&&(e+=` p-tag-${this.severity}`),this.rounded&&(e+=" p-tag-rounded"),this.styleClass&&(e+=` ${this.styleClass}`),e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-tag"]],contentQueries:function(i,o,c){if(i&1&&(Z(c,vt,4),Z(c,U,4)),i&2){let x;ee(x=te())&&(o.iconTemplate=x.first),ee(x=te())&&(o.templates=x)}},hostVars:4,hostBindings:function(i,o){i&2&&(L(o.style),ve(o.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",A]},features:[T([pt]),R],ngContentSelectors:bt,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(i,o){i&1&&(Ce(),Oe(0),v(1,yt,2,1,"ng-container",0)(2,kt,2,1,"span",1),r(3,"span",2),s(4),a()),i&2&&(l(),p("ngIf",!o.iconTemplate&&!o._iconTemplate),l(),p("ngIf",o.iconTemplate||o._iconTemplate),l(2),y(o.value))},dependencies:[E,G,Se,we,w],encapsulation:2,changeDetection:0})}return t})(),ut=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[se,w,w]})}return t})();var qt=({dt:t})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${t("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${t("progressspinner.colorOne")};
    }
    40% {
        stroke: ${t("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${t("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${t("progressspinner.colorFour")};
    }
}
`,Ft={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ft=(()=>{class t extends M{name="progressspinner";theme=qt;classes=Ft;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var ce=(()=>{class t extends P{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=_(ft);static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[T([ft]),R],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(i,o){i&1&&(r(0,"div",0),ue(),r(1,"svg",1),u(2,"circle",2),a()()),i&2&&(p("ngStyle",o.style)("ngClass",o.styleClass),W("aria-label",o.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),l(),he("animation-duration",o.animationDuration),W("data-pc-section","root"),l(),W("fill",o.fill)("stroke-width",o.strokeWidth))},dependencies:[E,G,De,w],encapsulation:2,changeDetection:0})}return t})(),mt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[ce,w,w]})}return t})();var It=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")}
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}`,Tt={root:({instance:t,props:n})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":n.autoResize,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":n.fluid}]},gt=(()=>{class t extends M{name="textarea";theme=It;classes=Tt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var ht=(()=>{class t extends P{ngModel;control;autoResize;variant;fluid=!1;onResize=new fe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=_(gt);constructor(e,i){super(),this.ngModel=e,this.control=i,console.log("pInputTextarea directive is deprecated in v18. Use pTextarea directive instead")}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(J(Pe,8),J(Te,8))};static \u0275dir=ge({type:t,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:8,hostBindings:function(i,o){i&1&&g("input",function(x){return o.onInput(x)}),i&2&&_e("p-filled",o.filled)("p-textarea-resizable",o.autoResize)("p-variant-filled",o.variant==="filled"||o.config.inputStyle()==="filled"||o.config.inputVariant()==="filled")("p-textarea-fluid",o.hasFluid)},inputs:{autoResize:[2,"autoResize","autoResize",A],variant:"variant",fluid:[2,"fluid","fluid",A]},outputs:{onResize:"onResize"},features:[T([gt]),R]})}return t})();var Y=class t{supabase=_(Re);getHotelOffersByRequestId(n){return O(this.supabase.client.from("hotel_offers").select(`
          *,
          hotel_options(
            *,
            hotel_rooms(*)
          )
        `).eq("request_id",n).order("created_at",{ascending:!0})).pipe(q(({data:e,error:i})=>{if(i)throw new Error(`Failed to fetch hotel offers: ${i.message}`);return(e||[]).map(o=>this.mapDatabaseToHotelOffer(o))}))}getHotelOfferById(n){return O(this.supabase.client.from("hotel_offers").select(`
          *,
          hotel_options(
            *,
            hotel_rooms(*)
          )
        `).eq("id",n).single()).pipe(q(({data:e,error:i})=>{if(i){if(i.code==="PGRST116")return null;throw new Error(`Failed to fetch hotel offer: ${i.message}`)}return this.mapDatabaseToHotelOffer(e)}))}createHotelOffer(n,e){let i={request_id:n,location:e.location,check_in:this.formatDateForDatabase(e.checkIn)??"",check_out:this.formatDateForDatabase(e.checkOut)??""};return O(this.supabase.client.from("hotel_offers").insert(i).select().single()).pipe($(({data:o,error:c})=>{if(c)throw new Error(`Failed to create hotel offer: ${c.message}`);let x=o.id;return e.hotels&&e.hotels.length>0?this.insertHotelsWithRooms(x,e.hotels).pipe(q(C=>this.mapDatabaseToHotelOffer(b(h({},o),{hotel_options:C})))):j(this.mapDatabaseToHotelOffer(b(h({},o),{hotel_options:[]})))}))}updateHotelOffer(n,e){let i=this.formatDateForDatabase(e.checkIn),o=this.formatDateForDatabase(e.checkOut),c=h(h({location:e.location},i&&{check_in:i}),o&&{check_out:o});return O(this.supabase.client.from("hotel_offers").update(c).eq("id",n).select().single()).pipe($(({data:x,error:C})=>{if(C)throw new Error(`Failed to update hotel offer: ${C.message}`);return this.replaceHotelsForOffer(n,e,x)}))}deleteHotelOffer(n){return O(this.supabase.client.from("hotel_offers").delete().eq("id",n)).pipe(q(({error:e})=>{if(e)throw new Error(`Failed to delete hotel offer: ${e.message}`)}))}replaceHotelsForOffer(n,e,i){return O(this.supabase.client.from("hotel_options").delete().eq("offer_id",n)).pipe($(()=>e.hotels&&e.hotels.length>0?this.insertHotelsWithRooms(n,e.hotels).pipe(q(o=>this.mapDatabaseToHotelOffer(b(h({},i),{hotel_options:o})))):j(this.mapDatabaseToHotelOffer(b(h({},i),{hotel_options:[]})))))}insertHotelsWithRooms(n,e){let i=e.map(o=>this.insertSingleHotelWithRooms(n,o));return de(i)}insertSingleHotelWithRooms(n,e){let i={offer_id:n,hotel_name:e.hotelName,hotel_link:e.hotelLink??null};return O(this.supabase.client.from("hotel_options").insert(i).select().single()).pipe($(({data:o,error:c})=>{if(c)throw new Error(`Failed to insert hotel: ${c.message}`);return this.insertRoomsForHotel(o,e.rooms)}))}insertRoomsForHotel(n,e){if(e&&e.length>0){let i=this.buildRoomInserts(n.id,e);return O(this.supabase.client.from("hotel_rooms").insert(i).select()).pipe(q(({data:o,error:c})=>{if(c)throw new Error(`Failed to insert rooms: ${c.message}`);return b(h({},n),{hotel_rooms:o||[]})}))}return j(b(h({},n),{hotel_rooms:[]}))}buildRoomInserts(n,e){return e.map(i=>({hotel_option_id:n,room_name:i.roomName,room_size:i.roomSize??null,people_count:i.peopleCount??null,breakfast:i.breakfast??!1,selected_payment:i.selectedPayment??null,selected_cancellation_policy:i.selectedCancellationPolicy??null,cancellation_date:i.cancellationDate??null,price:i.price??null,price_equivalent:i.priceEquivalent??null,currency:i.currency??null,price_direct:i.priceDirect??null,price_expedia:i.priceExpedia??null,price_sabre:i.priceSabre??null,price_source:i.priceSource??null}))}formatDateForDatabase(n){if(!n)return null;let e=typeof n=="string"?new Date(n):new Date(n),i=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),c=String(e.getDate()).padStart(2,"0");return`${i}-${o}-${c}`}mapDatabaseToHotelOffer(n){return{id:n.id,location:n.location,checkIn:n.check_in,checkOut:n.check_out,hotels:n.hotel_options?.map(e=>({hotelName:e.hotel_name,hotelLink:e.hotel_link??void 0,rooms:e.hotel_rooms?.map(i=>({roomName:i.room_name,roomSize:i.room_size??void 0,peopleCount:i.people_count??void 0,breakfast:i.breakfast??!1,selectedPayment:i.selected_payment??void 0,selectedCancellationPolicy:i.selected_cancellation_policy??void 0,cancellationDate:i.cancellation_date??void 0,price:i.price??void 0,priceEquivalent:i.price_equivalent??void 0,currency:i.currency??void 0,priceDirect:i.price_direct??void 0,priceExpedia:i.price_expedia??void 0,priceSabre:i.price_sabre??void 0,priceSource:i.price_source??void 0}))??[]}))??[]}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};var Et=()=>({width:"500px"}),Mt=()=>({width:"90vw",height:"90vh"}),Pt=()=>[],$t=()=>({"min-width":"50rem"}),Vt=(t,n)=>n.url;function Nt(t,n){t&1&&(r(0,"div",1),u(1,"p-progressSpinner"),a())}function zt(t,n){if(t&1&&(r(0,"div",34)(1,"div")(2,"h1",35),s(3),a(),r(4,"p",36),s(5),a()(),u(6,"p-tag",37),a()),t&2){let e=d(2);l(3),y(e.request().title),l(2),ie("Request #",e.request().id,""),l(),p("value",e.getStatusLabel(e.request().status))("severity",e.getStatusSeverity(e.request().status))}}function Lt(t,n){if(t&1&&(r(0,"div",6)(1,"h3",7),s(2,"Description"),a(),r(3,"p",38),s(4),a()(),u(5,"p-divider")),t&2){let e=d(2);l(4),y(e.request().description)}}function Bt(t,n){if(t&1&&(r(0,"div",40)(1,"div",41),u(2,"i",42),r(3,"div",43)(4,"span",44),s(5),a(),r(6,"a",45),s(7),u(8,"i",46),a()()()()),t&2){let e=n.$implicit;l(5),y(e.description),l(),p("href",e.url,me),l(),ie(" ",e.url," ")}}function At(t,n){if(t&1&&(r(0,"div",6)(1,"h3",7),s(2,"Related Links"),a(),r(3,"div",39),K(4,Bt,9,3,"div",40,Vt),a()(),u(6,"p-divider")),t&2){let e=d(2);l(4),X(e.request().links)}}function jt(t,n){t&1&&(r(0,"tr")(1,"th"),s(2,"#"),a(),r(3,"th"),s(4,"Location"),a(),r(5,"th"),s(6,"Check-in"),a(),r(7,"th"),s(8,"Check-out"),a(),r(9,"th"),s(10,"Hotels"),a(),r(11,"th"),s(12,"Created"),a(),r(13,"th"),s(14,"Actions"),a()())}function Wt(t,n){if(t&1){let e=D();r(0,"tr")(1,"td"),s(2),a(),r(3,"td"),s(4),a(),r(5,"td"),s(6),ae(7,"date"),a(),r(8,"td"),s(9),ae(10,"date"),a(),r(11,"td")(12,"span",49),s(13),a()(),u(14,"td"),r(15,"td")(16,"div",50)(17,"p-button",51),g("onClick",function(){let o=f(e).$implicit,c=d(3);return m(c.viewHotelOffer(o))}),a(),r(18,"p-button",52),g("onClick",function(){let o=f(e).$implicit,c=d(3);return m(c.generateConfirmation(o))}),a()()()()}if(t&2){let e=n.$implicit,i=n.rowIndex;l(2),y(i+1),l(2),y(e.location),l(2),y(le(7,8,e.checkIn,"mediumDate")),l(3),y(le(10,11,e.checkOut,"mediumDate")),l(4),ke(" ",e.hotels.length," ",e.hotels.length===1?"hotel":"hotels"," "),l(4),p("outlined",!0),l(),p("outlined",!0)}}function Gt(t,n){t&1&&(r(0,"tr")(1,"td",53)(2,"p",54),s(3,"No hotel offers yet."),a()()())}function Ut(t,n){if(t&1&&(r(0,"p-table",13),v(1,jt,15,0,"ng-template",4)(2,Wt,19,14,"ng-template",47)(3,Gt,4,0,"ng-template",48),a()),t&2){let e,i=d(2);p("value",(e=i.request().hotelOffers)!==null&&e!==void 0?e:B(2,Pt))("tableStyle",B(3,$t))}}function Qt(t,n){t&1&&(r(0,"div",14),u(1,"i",55),r(2,"p",56),s(3,' No hotel offers yet. Click "Add Hotel Offer" to create one. '),a()())}function Yt(t,n){if(t&1){let e=D();r(0,"div",57)(1,"p-button",58),g("click",function(){f(e);let o=d(2);return m(o.openEditDialog())}),a(),u(2,"p-button",59),a()}t&2&&(l(),p("outlined",!0),l(),p("outlined",!0))}function Jt(t,n){t&1&&(r(0,"small",21),s(1,"Title is required"),a())}function Kt(t,n){if(t&1){let e=D();r(0,"div",32)(1,"div",50)(2,"div",60)(3,"p-floatlabel",18),u(4,"input",61),r(5,"label",62),s(6,"URL "),r(7,"span",21),s(8,"*"),a()()()(),r(9,"p-button",63),g("click",function(){let o=f(e).$index,c=d(2);return m(c.removeLink(o))}),a()(),r(10,"div",64)(11,"p-floatlabel",18),u(12,"input",65),r(13,"label",62),s(14,"Description "),r(15,"span",21),s(16,"*"),a()()()()()}if(t&2){let e=n.$index;p("formGroupName",e),l(4),p("id","url-"+e),l(),p("for","url-"+e),l(4),p("text",!0),l(3),p("id","description-"+e),l(),p("for","description-"+e)}}function Xt(t,n){if(t&1){let e=D();r(0,"div",57)(1,"p-button",66),g("click",function(){f(e);let o=d(2);return m(o.closeEditDialog())}),a(),r(2,"p-button",67),g("click",function(){f(e);let o=d(2);return m(o.saveRequest())}),a()()}if(t&2){let e=d(2);l(),p("outlined",!0)("disabled",e.isSaving()),l(),p("loading",e.isSaving())}}function Zt(t,n){if(t&1){let e=D();r(0,"div",57)(1,"p-button",68),g("onClick",function(){f(e);let o=d(2);return m(o.closeHotelOfferDialog())}),a(),r(2,"p-button",69),g("onClick",function(){f(e);let o=d(2);return m(o.saveHotelOffer())}),a()()}if(t&2){let e=d(2);l(),p("outlined",!0)("disabled",e.isSaving()),l(),p("label",e.currentOfferId?"Update Offer":"Save Offer")("loading",e.isSaving())("disabled",e.hotelOfferFormService.generalInfoForm.invalid||e.hotelOfferFormService.hotelOptionsArray.length===0||e.isSaving())}}function ei(t,n){if(t&1){let e=D();r(0,"div",2)(1,"div")(2,"p-button",3),g("onClick",function(){f(e);let o=d();return m(o.goBack())}),a()()(),r(3,"p-card"),v(4,zt,7,4,"ng-template",4),r(5,"div",5)(6,"div",6)(7,"h3",7),s(8,"Client Information"),a(),r(9,"div",8)(10,"span",9),s(11,"Client Name:"),a(),r(12,"span",10),s(13),a()()(),u(14,"p-divider"),v(15,Lt,6,1)(16,At,7,0),r(17,"div",6)(18,"div",2)(19,"h3",11),s(20,"Hotel Offers"),a(),r(21,"p-button",12),g("onClick",function(){f(e);let o=d();return m(o.openHotelOfferDialog())}),a()(),v(22,Ut,4,4,"p-table",13)(23,Qt,4,0,"div",14),a()(),v(24,Yt,3,2,"ng-template",15),a(),r(25,"p-dialog",16),re("visibleChange",function(o){f(e);let c=d();return oe(c.showEditDialog,o)||(c.showEditDialog=o),m(o)}),g("onHide",function(){f(e);let o=d();return m(o.closeEditDialog())}),r(26,"form",17)(27,"div")(28,"p-floatlabel",18),u(29,"input",19),r(30,"label",20),s(31,"Title "),r(32,"span",21),s(33,"*"),a()()(),v(34,Jt,2,0,"small",21),a(),r(35,"div")(36,"p-floatlabel",18),u(37,"input",22),r(38,"label",23),s(39,"Client Name"),a()()(),r(40,"div")(41,"p-floatlabel",18),u(42,"p-select",24),r(43,"label",25),s(44,"Status "),r(45,"span",21),s(46,"*"),a()()()(),r(47,"div")(48,"p-floatlabel",18),u(49,"textarea",26),r(50,"label",27),s(51,"Description"),a()()(),r(52,"div")(53,"div",28)(54,"span",29),s(55,"Related Links"),a(),r(56,"p-button",30),g("click",function(){f(e);let o=d();return m(o.addLink())}),a()(),r(57,"div",31),K(58,Kt,17,6,"div",32,be),a()()(),v(60,Xt,3,3,"ng-template",15),a(),r(61,"p-dialog",33),re("visibleChange",function(o){f(e);let c=d();return oe(c.showHotelOfferDialog,o)||(c.showHotelOfferDialog=o),m(o)}),g("onHide",function(){f(e);let o=d();return m(o.closeHotelOfferDialog())}),u(62,"app-hotel-offer"),v(63,Zt,3,5,"ng-template",15),a()}if(t&2){let e,i=d();l(2),p("text",!0),l(11),y(i.request().clientName||"N/A"),l(2),I(i.request().description?15:-1),l(),I(i.request().links&&i.request().links.length>0?16:-1),l(6),I(i.request().hotelOffers&&i.request().hotelOffers.length>0?22:23),l(3),L(B(19,Et)),p("modal",!0),ne("visible",i.showEditDialog),l(),p("formGroup",i.editRequestForm),l(8),I((e=i.editRequestForm.get("title"))!=null&&e.invalid&&((e=i.editRequestForm.get("title"))!=null&&e.touched)?34:-1),l(8),p("options",i.statusOptions),l(14),p("text",!0),l(2),X(i.links.controls),l(3),L(B(20,Mt)),p("header",i.currentOfferId?"View/Edit Hotel Offer":"Create Hotel Offer")("modal",!0)("maximizable",!0),ne("visible",i.showHotelOfferDialog)}}function ti(t,n){if(t&1){let e=D();r(0,"p-card")(1,"div",70),u(2,"i",71),r(3,"h2",72),s(4,"Request Not Found"),a(),r(5,"p",73),s(6," The request you're looking for doesn't exist. "),a(),r(7,"p-button",74),g("onClick",function(){f(e);let o=d();return m(o.goBack())}),a()()()}}var _t=class t{route=_(Fe);router=_(He);fb=_(Be);hotelOfferFormService=_(et);requestsService=_(ct);hotelOffersService=_(Y);notificationService=_(tt);request=N(null);requestId=N(null);showHotelOfferDialog=!1;showEditDialog=!1;currentOfferId=null;isLoading=N(!1);isSaving=N(!1);statusOptions=[{label:"Inbox",value:"inbox"},{label:"Active Work",value:"active_work"},{label:"Waiting Client",value:"waiting_client"},{label:"Booked",value:"booked"},{label:"Travel",value:"travel"},{label:"Follow Up",value:"follow_up"}];editRequestForm=this.fb.group({title:["",F.required],clientName:[""],status:["inbox",F.required],description:[""],links:this.fb.array([])});ngOnInit(){this.route.paramMap.subscribe(n=>{let e=n.get("id");e&&(this.requestId.set(e),this.loadRequest(e))})}get links(){return this.editRequestForm.get("links")}goBack(){this.router.navigate(["/requests"])}getStatusSeverity(n){return{booked:"success",active_work:"info",waiting_client:"warn",inbox:"secondary",travel:"info",follow_up:"info"}[n]||"info"}openEditDialog(){let n=this.request();if(n){if(this.editRequestForm.patchValue({title:n.title,clientName:n.clientName||"",status:n.status,description:n.description||""}),this.links.clear(),n.links)for(let e of n.links)this.links.push(this.fb.group({url:[e.url,F.required],description:[e.description,F.required]}));this.showEditDialog=!0}}closeEditDialog(){this.showEditDialog=!1,this.editRequestForm.reset(),this.links.clear()}addLink(){this.links.push(this.fb.group({url:["",F.required],description:["",F.required]}))}removeLink(n){this.links.removeAt(n)}getValidLinks(){let e=this.editRequestForm.value.links?.filter(i=>i.url&&i.description).map(i=>({url:i.url,description:i.description}));return e&&e.length>0?e:void 0}saveRequest(){if(this.editRequestForm.invalid){this.notificationService.error("Please fill in all required fields");return}let n=this.request(),e=this.requestId();if(!n||!e)return;this.isSaving.set(!0);let i=b(h({},n),{title:this.editRequestForm.value.title,clientName:this.editRequestForm.value.clientName||void 0,status:this.editRequestForm.value.status,description:this.editRequestForm.value.description||void 0,links:this.getValidLinks()});this.requestsService.updateRequest(e,i).subscribe({next:o=>{this.request.set(o),this.notificationService.success("Request updated successfully"),this.closeEditDialog(),this.isSaving.set(!1)},error:o=>{console.error("Failed to update request:",o),this.notificationService.error("Failed to update request"),this.isSaving.set(!1)}})}openHotelOfferDialog(){this.currentOfferId=null,this.showHotelOfferDialog=!0,this.hotelOfferFormService.isPreviewVisible.set(!1)}viewHotelOffer(n){this.currentOfferId=n.id,this.loadHotelOfferToForm(n.id),this.showHotelOfferDialog=!0,this.hotelOfferFormService.isPreviewVisible.set(!1)}closeHotelOfferDialog(){this.showHotelOfferDialog=!1,this.currentOfferId=null,this.hotelOfferFormService.generalInfoForm.reset(),this.hotelOfferFormService.hotelOptionsArray.clear()}generateConfirmation(n){this.router.navigate(["/hotel-confirmation"],{state:{offer:n,requestId:this.requestId()}})}saveHotelOffer(){let n=this.request();if(!n)return;this.isSaving.set(!0);let e=this.buildOfferDataFromForm(),i={location:e.generalInfo.location,checkIn:this.formatDateToLocalString(e.generalInfo.checkIn),checkOut:this.formatDateToLocalString(e.generalInfo.checkOut),hotels:e.hotels};this.currentOfferId?this.updateExistingHotelOffer(this.currentOfferId,i):this.createNewHotelOffer(n.id,i)}updateExistingHotelOffer(n,e){this.hotelOffersService.updateHotelOffer(n,b(h({},e),{id:n})).subscribe({next:i=>{this.updateOfferInRequest(i),this.notificationService.success("Hotel offer updated successfully"),this.closeHotelOfferDialog(),this.isSaving.set(!1)},error:i=>{console.error("Failed to update hotel offer:",i),this.notificationService.error("Failed to update hotel offer"),this.isSaving.set(!1)}})}createNewHotelOffer(n,e){this.hotelOffersService.createHotelOffer(n,e).subscribe({next:i=>{this.addOfferToRequest(i),this.notificationService.success("Hotel offer created successfully"),this.closeHotelOfferDialog(),this.isSaving.set(!1)},error:i=>{console.error("Failed to create hotel offer:",i),this.notificationService.error("Failed to create hotel offer"),this.isSaving.set(!1)}})}updateOfferInRequest(n){this.request.update(e=>{if(!e)return e;let i=e.hotelOffers||[],o=i.findIndex(c=>c.id===this.currentOfferId);return o!==-1&&(i[o]=n),b(h({},e),{hotelOffers:[...i]})})}addOfferToRequest(n){this.request.update(e=>{if(!e)return e;let i=e.hotelOffers||[];return b(h({},e),{hotelOffers:[...i,n]})})}buildOfferDataFromForm(){return{generalInfo:this.mapGeneralInfo(this.hotelOfferFormService.generalInfoForm.value),hotels:this.mapHotels(this.hotelOfferFormService.hotelOptionsArray.value||[])}}mapGeneralInfo(n){return{location:n.location||"",checkIn:n.checkIn||new Date,checkOut:n.checkOut||new Date}}mapHotels(n){return n.map(e=>({hotelName:e.hotelName||"",hotelLink:e.hotelLink||void 0,rooms:(e.rooms||[]).map(i=>this.mapRoomData(i))}))}mapRoomData(n){return{roomName:n.roomName||"",roomSize:n.roomSize??void 0,peopleCount:n.peopleCount??void 0,breakfast:n.breakfast??!1,selectedPayment:n.selectedPayment??void 0,selectedCancellationPolicy:n.selectedCancellationPolicy??void 0,cancellationDate:n.cancellationDate?this.formatDateToLocalString(new Date(n.cancellationDate)):void 0,price:n.price??void 0,priceEquivalent:n.priceEquivalent??void 0,currency:n.currency??void 0,priceDirect:n.priceDirect??void 0,priceExpedia:n.priceExpedia??void 0,priceSabre:n.priceSabre??void 0,priceSource:n.priceSource??void 0}}loadHotelOfferToForm(n){let e=this.request();if(!e?.hotelOffers)return;let i=e.hotelOffers.find(o=>o.id===n);i&&(this.loadGeneralInfoToForm(i),this.hotelOfferFormService.hotelOptionsArray.clear(),this.loadHotelsToForm(i))}loadGeneralInfoToForm(n){this.hotelOfferFormService.generalInfoForm.patchValue({location:n.location,checkIn:new Date(n.checkIn),checkOut:new Date(n.checkOut)})}loadHotelsToForm(n){for(let e of n.hotels){this.hotelOfferFormService.addHotelOption();let i=this.hotelOfferFormService.hotelOptionsArray.length-1,o=this.hotelOfferFormService.hotelOptionsArray.at(i);o.patchValue({hotelName:e.hotelName,hotelLink:e.hotelLink}),this.loadRoomsToForm(e,i,o)}}loadRoomsToForm(n,e,i){for(let o of n.rooms){this.hotelOfferFormService.addRoomOption(e);let c=i.get("rooms"),x=(c.value?.length??1)-1,C=c.at(x);if(C){let pe=this.restorePriceFromSource(o);C.patchValue({roomName:o.roomName,roomSize:o.roomSize??null,peopleCount:o.peopleCount??null,breakfast:o.breakfast??!1,selectedPayment:o.selectedPayment??null,selectedCancellationPolicy:o.selectedCancellationPolicy??null,cancellationDate:o.cancellationDate?new Date(o.cancellationDate):null,price:pe??null,priceEquivalent:o.priceEquivalent??null,currency:o.currency??null,priceDirect:o.priceDirect??null,priceExpedia:o.priceExpedia??null,priceSabre:o.priceSabre??null,priceSource:o.priceSource??null}),pe&&o.currency&&setTimeout(()=>{C.get("price")?.updateValueAndValidity({emitEvent:!0}),C.get("currency")?.updateValueAndValidity({emitEvent:!0})},0)}}}restorePriceFromSource(n){return n.price?n.price:n.priceSource?{priceDirect:n.priceDirect,priceExpedia:n.priceExpedia,priceSabre:n.priceSabre}[n.priceSource]??void 0:void 0}getStatusLabel(n){return{inbox:"Inbox",active_work:"Active Work",waiting_client:"Waiting Client",booked:"Booked",travel:"Travel",follow_up:"Follow Up"}[n]||n}loadRequest(n){this.isLoading.set(!0),this.requestsService.getRequestById(n).subscribe({next:e=>{this.hotelOffersService.getHotelOffersByRequestId(n).subscribe({next:i=>{this.request.set(b(h({},e),{hotelOffers:i})),this.isLoading.set(!1)},error:i=>{console.error("Failed to load hotel offers:",i),this.request.set(b(h({},e),{hotelOffers:[]})),this.isLoading.set(!1)}})},error:e=>{console.error("Failed to load request:",e),this.notificationService.error("Failed to load request"),this.isLoading.set(!1),this.router.navigate(["/requests"])}})}formatDateToLocalString(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=H({type:t,selectors:[["app-request-detail"]],decls:4,vars:1,consts:[[1,"request-detail-container"],[1,"flex","justify-center","p-8"],[1,"mb-4","flex","items-center","justify-between"],["icon","pi pi-arrow-left","label","Back to Requests",3,"onClick","text"],["pTemplate","header"],[1,"request-details"],[1,"detail-section"],[1,"section-title"],[1,"detail-row"],[1,"detail-label"],[1,"detail-value"],[1,"section-title","mb-0"],["label","Add Hotel Offer","icon","pi pi-plus","size","small",3,"onClick"],["styleClass","p-datatable-striped",3,"value","tableStyle"],[1,"empty-state"],["pTemplate","footer"],["header","Edit Request",3,"visibleChange","onHide","modal","visible"],[1,"flex","flex-col","gap-4",3,"formGroup"],["variant","on"],["pInputText","","id","title","formControlName","title",1,"w-full"],["for","title"],[1,"text-red-600"],["pInputText","","id","clientName","formControlName","clientName",1,"w-full"],["for","clientName"],["id","status","formControlName","status","optionLabel","label","optionValue","value",1,"w-full",3,"options"],["for","status"],["pInputTextarea","","id","description","formControlName","description","rows","4",1,"w-full"],["for","description"],[1,"mb-2","flex","items-center","justify-between"],[1,"font-semibold"],["label","Add Link","icon","pi pi-plus","size","small",3,"click","text"],["formArrayName","links",1,"flex","flex-col","gap-3"],[1,"link-form-group",3,"formGroupName"],[3,"visibleChange","onHide","header","modal","maximizable","visible"],[1,"card-header"],[1,"text-2xl","font-bold"],[1,"text-surface-600","dark:text-surface-400","mt-1"],[3,"value","severity"],[1,"detail-description"],[1,"links-list"],[1,"link-item"],[1,"link-content"],[1,"pi","pi-link"],[1,"link-info"],[1,"link-description"],["target","_blank","rel","noopener noreferrer",1,"link-url",3,"href"],[1,"pi","pi-external-link"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"hotels-count"],[1,"flex","gap-2"],["icon","pi pi-eye","severity","info","size","small",3,"onClick","outlined"],["icon","pi pi-file-edit","label","Generate Confirmation","severity","success","size","small",3,"onClick","outlined"],["colspan","7",1,"text-center"],[1,"empty-message"],[1,"pi","pi-building","text-surface-300","mb-3","text-4xl"],[1,"text-surface-500"],[1,"flex","justify-end","gap-2"],["label","Edit Request","icon","pi pi-pencil",3,"click","outlined"],["label","Delete Request","icon","pi pi-trash","severity","danger",3,"outlined"],[1,"flex-1"],["pInputText","","formControlName","url",1,"w-full",3,"id"],[3,"for"],["icon","pi pi-trash","severity","danger",3,"click","text"],[1,"mt-2"],["pInputText","","formControlName","description",1,"w-full",3,"id"],["label","Cancel","icon","pi pi-times",3,"click","outlined","disabled"],["label","Save","icon","pi pi-check",3,"click","loading"],["label","Cancel","severity","secondary",3,"onClick","outlined","disabled"],["icon","pi pi-check",3,"onClick","label","loading","disabled"],[1,"py-8","text-center"],[1,"pi","pi-exclamation-triangle","text-surface-400","text-4xl"],[1,"mt-4","text-xl","font-semibold"],[1,"text-surface-600","dark:text-surface-400","mt-2"],["label","Back to Requests","icon","pi pi-arrow-left",1,"mt-4",3,"onClick"]],template:function(e,i){e&1&&(r(0,"div",0),v(1,Nt,2,0,"div",1)(2,ei,64,21)(3,ti,8,0,"p-card"),a()),e&2&&(l(),I(i.isLoading()?1:i.request()?2:3))},dependencies:[E,qe,Ae,$e,Ie,Ee,Me,Ve,Le,Ne,ze,We,je,U,Ye,Qe,Ze,Xe,ut,se,st,lt,at,rt,mt,ce,Ue,Ge,Ke,Je,ht,ot,nt,it],styles:[".request-detail-container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;padding:1.5rem;gap:1rem}.request-details[_ngcontent-%COMP%]{padding:.5rem 0}.detail-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.section-title[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;color:var(--text-color);margin-bottom:1rem}.detail-row[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start}.detail-label[_ngcontent-%COMP%]{font-weight:600;color:var(--text-color-secondary);min-width:120px}.detail-value[_ngcontent-%COMP%]{color:var(--text-color)}.detail-description[_ngcontent-%COMP%]{color:var(--text-color);line-height:1.6;white-space:pre-wrap}.links-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.link-item[_ngcontent-%COMP%]{padding:1rem;border:1px solid var(--surface-border);border-radius:.5rem;background-color:var(--surface-50);transition:all .2s}.link-item[_ngcontent-%COMP%]:hover{background-color:var(--surface-100);border-color:var(--primary-color)}.link-content[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:flex-start}.link-content[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--primary-color);margin-top:.25rem}.link-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;flex:1}.link-description[_ngcontent-%COMP%]{font-weight:600;color:var(--text-color)}.link-url[_ngcontent-%COMP%]{color:var(--primary-color);text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;font-size:.875rem;word-break:break-all}.link-url[_ngcontent-%COMP%]:hover{text-decoration:underline}.link-url[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.75rem}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 2rem;text-align:center}.hotels-count[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.25rem;padding:.25rem .5rem;border-radius:.25rem;background-color:var(--primary-100);color:var(--primary-700);font-size:.875rem;font-weight:500}.empty-message[_ngcontent-%COMP%]{padding:1rem;color:var(--text-color-secondary)}:is()   .p-tag[_ngcontent-%COMP%]{font-size:.875rem;padding:.5rem 1rem}:is()   .p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{background-color:var(--surface-50);color:var(--text-color);font-weight:600;padding:1rem}:is()   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:1rem}:is()   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover{background-color:var(--surface-50)}:is()   .p-dialog[_ngcontent-%COMP%]   .p-dialog-content[_ngcontent-%COMP%]{padding:0;overflow-y:auto}:is()   .p-dialog[_ngcontent-%COMP%]   .p-dialog-header[_ngcontent-%COMP%]{padding:1.5rem}:is()   .p-dialog[_ngcontent-%COMP%]   .p-dialog-footer[_ngcontent-%COMP%]{padding:1rem 1.5rem}"],changeDetection:0})};export{_t as RequestDetailComponent};
