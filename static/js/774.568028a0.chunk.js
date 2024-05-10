(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[774],{8774:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>at});var r=n(3553),a=n(5431);const i=e=>e.contactsFilter,o=e=>e.contacts.items,s=e=>e.contacts.status,l=(0,r.P1)([i,o],((e,t)=>t.filter((t=>t.name.toLowerCase().includes(e.toLowerCase()))))),c=(0,r.P1)([s,e=>e.contacts.operation,e=>e.contacts.error],((e,t,n)=>{switch(t){case"loadData":return a.Z.loadData(e);case"addContact":return a.Z.addContact(e);case"deleteContact":return a.Z.deleteContact(e);case"duplicateContact":return n;default:return null}}));var d,p,u,h=n(4420),m=n(2791),g=n(9924),x=n(168),v=n(7924);const f=v.ZP.form(d||(d=(0,x.Z)(["\n  display: flex;\n  width: fit-content;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),b=v.ZP.div(p||(p=(0,x.Z)(["\n  display: flex;\n  width: fit-content;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n"]))),y=v.ZP.div(u||(u=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n"])));var Z=n(2591),w=n(4294),j=n(7632),S=n(8905),I=n(184);const C=()=>{const[e,t]=(0,m.useState)(""),[n,r]=(0,m.useState)(""),[a,i]=(0,m.useState)(null),[s,l]=(0,m.useState)(null),c=(0,h.I0)(),d=(0,h.v9)(o);return(0,I.jsx)(y,{children:(0,I.jsxs)(f,{onSubmit:a=>{a.preventDefault();const o=j.Z.checkName(e),s=j.Z.checkPhone(n),p=j.Z.checkContact(d,e);if(i(o),l(s),p){const e={error:p,operation:"duplicateContact"};c((0,S.Z)(e))}if(!o&&!s&&!p){const a={name:e,number:n};c((0,g.uK)(a)),t(""),r("")}},children:[(0,I.jsxs)(b,{children:[(0,I.jsx)(Z.Z,{error:!!a,type:"text",id:"name",label:"Name",helperText:a||"Please enter the contact's name",size:"small",color:"warning",value:e,onChange:e=>t(e.target.value),sx:{minWidth:"28ch"}}),(0,I.jsx)(Z.Z,{error:!!s,type:"tel",id:"phone",label:"Phone",helperText:s||"Please enter the contact's phone",size:"small",color:"warning",value:n,onChange:e=>r(e.target.value),sx:{width:"100%"}})]}),(0,I.jsx)(w.Z,{type:"submit",variant:"outlined",size:"small",color:"warning",sx:{fontWeight:900,width:"100%"},children:"Add contact"})]})})};var P=n(7382);const L=()=>{const e=(0,h.v9)(i),t=(0,h.I0)();return(0,I.jsx)(Z.Z,{type:"search",id:"serach-bar",label:"Search contacts by name",helperText:"Enter a letter to start searching",size:"small",color:"warning",value:e,onChange:e=>t((0,P.T)(e.target.value)),sx:{minWidth:"28ch"}})};var k=n(493),A=n(7462),R=n(3366),M=n(3733),N=n(627),T=n(838),F=n(90),W=n(4524),G=n(6983),V=n(533),_=n(5925),z=n(162),D=n(2071),O=n(6199),B=n(9703),E=n(4657);function q(e){return(0,E.ZP)("MuiListItem",e)}const H=(0,B.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const K=(0,B.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function U(e){return(0,E.ZP)("MuiListItemSecondaryAction",e)}(0,B.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);const X=["className"],Q=(0,W.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:e=>{let{ownerState:t}=e;return t.disableGutters},style:{right:0}}]}),Y=m.forwardRef((function(e,t){const n=(0,G.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:r}=n,a=(0,R.Z)(n,X),i=m.useContext(O.Z),o=(0,A.Z)({},n,{disableGutters:i.disableGutters}),s=(e=>{const{disableGutters:t,classes:n}=e,r={root:["root",t&&"disableGutters"]};return(0,T.Z)(r,U,n)})(o);return(0,I.jsx)(Q,(0,A.Z)({className:(0,M.Z)(s.root,r),ownerState:o,ref:t},a))}));Y.muiName="ListItemSecondaryAction";const J=Y,$=["className"],ee=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],te=(0,W.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((e=>{let{theme:t}=e;return{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",["&.".concat(H.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(H.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,F.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(H.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,F.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(H.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:e=>{let{ownerState:t}=e;return!t.disablePadding},style:{paddingTop:8,paddingBottom:8}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&t.dense},style:{paddingTop:4,paddingBottom:4}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!!t.secondaryAction},style:{paddingRight:48}},{props:e=>{let{ownerState:t}=e;return!!t.secondaryAction},style:{["& > .".concat(K.root)]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"}},{props:e=>{let{ownerState:t}=e;return t.button},style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(H.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,F.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,F.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}},{props:e=>{let{ownerState:t}=e;return t.hasSecondaryAction},style:{paddingRight:48}}]}})),ne=(0,W.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),re=m.forwardRef((function(e,t){const n=(0,G.Z)({props:e,name:"MuiListItem"}),{alignItems:r="center",autoFocus:a=!1,button:i=!1,children:o,className:s,component:l,components:c={},componentsProps:d={},ContainerComponent:p="li",ContainerProps:{className:u}={},dense:h=!1,disabled:g=!1,disableGutters:x=!1,disablePadding:v=!1,divider:f=!1,focusVisibleClassName:b,secondaryAction:y,selected:Z=!1,slotProps:w={},slots:j={}}=n,S=(0,R.Z)(n.ContainerProps,$),C=(0,R.Z)(n,ee),P=m.useContext(O.Z),L=m.useMemo((()=>({dense:h||P.dense||!1,alignItems:r,disableGutters:x})),[r,P.dense,h,x]),k=m.useRef(null);(0,z.Z)((()=>{a&&k.current&&k.current.focus()}),[a]);const F=m.Children.toArray(o),W=F.length&&(0,_.Z)(F[F.length-1],["ListItemSecondaryAction"]),B=(0,A.Z)({},n,{alignItems:r,autoFocus:a,button:i,dense:L.dense,disabled:g,disableGutters:x,disablePadding:v,divider:f,hasSecondaryAction:W,selected:Z}),E=(e=>{const{alignItems:t,button:n,classes:r,dense:a,disabled:i,disableGutters:o,disablePadding:s,divider:l,hasSecondaryAction:c,selected:d}=e,p={root:["root",a&&"dense",!o&&"gutters",!s&&"padding",l&&"divider",i&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",d&&"selected"],container:["container"]};return(0,T.Z)(p,q,r)})(B),K=(0,D.Z)(k,t),U=j.root||c.Root||te,X=w.root||d.root||{},Q=(0,A.Z)({className:(0,M.Z)(E.root,X.className,s),disabled:g},C);let Y=l||"li";return i&&(Q.component=l||"div",Q.focusVisibleClassName=(0,M.Z)(H.focusVisible,b),Y=V.Z),W?(Y=Q.component||l?Y:"div","li"===p&&("li"===Y?Y="div":"li"===Q.component&&(Q.component="div")),(0,I.jsx)(O.Z.Provider,{value:L,children:(0,I.jsxs)(ne,(0,A.Z)({as:p,className:(0,M.Z)(E.container,u),ref:K,ownerState:B},S,{children:[(0,I.jsx)(U,(0,A.Z)({},X,!(0,N.X)(U)&&{as:Y,ownerState:(0,A.Z)({},B,X.ownerState)},Q,{children:F})),F.pop()]}))})):(0,I.jsx)(O.Z.Provider,{value:L,children:(0,I.jsxs)(U,(0,A.Z)({},X,{as:Y,ref:K},!(0,N.X)(U)&&{ownerState:(0,A.Z)({},B,X.ownerState)},Q,{children:[F,y&&(0,I.jsx)(J,{children:y})]}))})}));var ae=n(3400);function ie(e){return(0,E.ZP)("MuiListItemIcon",e)}(0,B.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);const oe=["className"],se=(0,W.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((e=>{let{theme:t,ownerState:n}=e;return(0,A.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),le=m.forwardRef((function(e,t){const n=(0,G.Z)({props:e,name:"MuiListItemIcon"}),{className:r}=n,a=(0,R.Z)(n,oe),i=m.useContext(O.Z),o=(0,A.Z)({},n,{alignItems:i.alignItems}),s=(e=>{const{alignItems:t,classes:n}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,T.Z)(r,ie,n)})(o);return(0,I.jsx)(se,(0,A.Z)({className:(0,M.Z)(s.root,r),ownerState:o,ref:t},a))}));var ce=n(2947);function de(e){return(0,E.ZP)("MuiListItemText",e)}const pe=(0,B.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ue=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],he=(0,W.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{["& .".concat(pe.primary)]:t.primary},{["& .".concat(pe.secondary)]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,variants:[{props:e=>{let{ownerState:t}=e;return t.primary&&t.secondary},style:{marginTop:6,marginBottom:6}},{props:e=>{let{ownerState:t}=e;return t.inset},style:{paddingLeft:56}}]}),me=m.forwardRef((function(e,t){const n=(0,G.Z)({props:e,name:"MuiListItemText"}),{children:r,className:a,disableTypography:i=!1,inset:o=!1,primary:s,primaryTypographyProps:l,secondary:c,secondaryTypographyProps:d}=n,p=(0,R.Z)(n,ue),{dense:u}=m.useContext(O.Z);let h=null!=s?s:r,g=c;const x=(0,A.Z)({},n,{disableTypography:i,inset:o,primary:!!h,secondary:!!g,dense:u}),v=(e=>{const{classes:t,inset:n,primary:r,secondary:a,dense:i}=e,o={root:["root",n&&"inset",i&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,T.Z)(o,de,t)})(x);return null==h||h.type===ce.Z||i||(h=(0,I.jsx)(ce.Z,(0,A.Z)({variant:u?"body2":"body1",className:v.primary,component:null!==l&&void 0!==l&&l.variant?void 0:"span",display:"block"},l,{children:h}))),null==g||g.type===ce.Z||i||(g=(0,I.jsx)(ce.Z,(0,A.Z)({variant:"body2",className:v.secondary,color:"text.secondary",display:"block"},d,{children:g}))),(0,I.jsxs)(he,(0,A.Z)({className:(0,M.Z)(v.root,a),ownerState:x,ref:t},p,{children:[h,g]}))}));var ge=n(2588);function xe(e){return(0,E.ZP)("MuiDivider",e)}(0,B.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const ve=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],fe=(0,ge.Uu)("MuiDivider"),be=(0,W.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((e=>{let{theme:t}=e;return{margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,F.Fq)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:e=>{let{ownerState:t}=e;return!!t.children},style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}},{props:e=>{let{ownerState:t}=e;return t.children&&"vertical"!==t.orientation},style:{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}}},{props:e=>{let{ownerState:t}=e;return"vertical"===t.orientation&&t.children},style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}}},{props:e=>{let{ownerState:t}=e;return"right"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:e=>{let{ownerState:t}=e;return"left"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}})),ye=(0,W.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((e=>{let{theme:t}=e;return{display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)"),variants:[{props:{orientation:"vertical"},style:{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")}}]}})),Ze=m.forwardRef((function(e,t){const n=fe({props:e,name:"MuiDivider"}),{absolute:r=!1,children:a,className:i,component:o=(a?"div":"hr"),flexItem:s=!1,light:l=!1,orientation:c="horizontal",role:d=("hr"!==o?"separator":void 0),textAlign:p="center",variant:u="fullWidth"}=n,h=(0,R.Z)(n,ve),m=(0,A.Z)({},n,{absolute:r,component:o,flexItem:s,light:l,orientation:c,role:d,textAlign:p,variant:u}),g=(e=>{const{absolute:t,children:n,classes:r,flexItem:a,light:i,orientation:o,textAlign:s,variant:l}=e,c={root:["root",t&&"absolute",l,i&&"light","vertical"===o&&"vertical",a&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,T.Z)(c,xe,r)})(m);return(0,I.jsx)(be,(0,A.Z)({as:o,className:(0,M.Z)(g.root,i),role:d,ref:t,ownerState:m},h,{children:a?(0,I.jsx)(ye,{className:g.wrapper,ownerState:m,children:a}):null}))}));Ze&&(Ze.muiSkipListHighlight=!0);const we=Ze;var je,Se,Ie=n(7247),Ce=n(151);const Pe=v.ZP.div(je||(je=(0,x.Z)(["\n  width: 350px;\n\n  @media screen and (min-width: 1024px) {\n    max-height: 160px;\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 100%;\n    max-width: 320px;\n  }\n"]))),Le=v.ZP.div(Se||(Se=(0,x.Z)(["\n  height: 100%;\n\n  @media screen and (min-width: 1024px) {\n    overflow: auto;\n\n    &::-webkit-scrollbar {\n      width: 4px;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: white;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: rgb(237, 108, 2);\n    }\n\n    &::-webkit-scrollbar-thumb:hover {\n      background: rgb(230, 81, 0);\n    }\n  }\n"])));var ke=n(2837),Ae=n(9889),Re=n(1075);const Me=()=>{const e=(0,h.v9)(l),t=(0,h.v9)(ke.vI),n=(0,h.I0)(),r=(0,Re.ac)({maxWidth:1023});return(0,m.useEffect)((()=>{t&&Ae.Z.setRequestURL(t)}),[t]),(0,m.useEffect)((()=>{n((0,g.yF)())}),[n]),(0,I.jsx)(Pe,{children:(0,I.jsx)(Le,{children:(0,I.jsx)(k.Z,{"aria-label":"contacts",disablePadding:!0,sx:{marginRight:"".concat(!r&&"10px")},children:e.map((t=>(0,I.jsxs)("div",{children:[(0,I.jsxs)(re,{secondaryAction:(0,I.jsx)(ae.Z,{edge:"end","aria-label":"delete",onClick:()=>n((0,g.GK)(t.id)),children:(0,I.jsx)(Ie.Z,{})}),children:[(0,I.jsx)(le,{children:(0,I.jsx)(Ce.Z,{sx:{fill:"#d89c92"}})}),(0,I.jsx)(me,{primary:t.name}),(0,I.jsx)(me,{secondary:t.number})]}),e.length-1!==e.indexOf(t)&&(0,I.jsx)(we,{})]},t.id)))})})})};var Ne,Te,Fe,We=n(4503);const Ge=v.ZP.div(Ne||(Ne=(0,x.Z)(["\n  display: flex;\n  height: inherit;\n  justify-content: center;\n\n  @media screen and (min-width: 1024px) {\n    align-items: center;\n  }\n\n  @media screen and (max-width: 1023px) {\n    overflow: auto;\n  }\n"]))),Ve={height:"fit-content",backgroundColor:"#fae5d6",border:"3px solid #d89c92",borderRadius:"30px"},_e=v.ZP.div(Te||(Te=(0,x.Z)(["\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    height: 400px;\n  }\n"]))),ze=v.ZP.div(Fe||(Fe=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"])));var De,Oe,Be,Ee=n(5527),qe=n(7689),He=n(306);const Ke=v.ZP.section(De||(De=(0,x.Z)(["\n  display: flex;\n  padding: 20px;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    min-width: 400px;\n    min-height: 300px;\n    padding: 50px;\n  }\n"]))),Ue=v.ZP.div(Oe||(Oe=(0,x.Z)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n"]))),Xe=v.ZP.div(Be||(Be=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n    gap: 8px;\n  }\n"]))),Qe=e=>{let{name:t,descr:n,children:r}=e;return(0,I.jsx)(Ke,{children:(0,I.jsxs)(Ue,{children:[(0,I.jsxs)(Xe,{children:[(0,I.jsx)(ce.Z,{variant:"h5",ml:1.5,children:t}),(0,I.jsx)(ce.Z,{varaian:"h6",children:n})]}),r]})})};var Ye,Je;const $e=v.ZP.div(Ye||(Ye=(0,x.Z)(["\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 40px;\n  background-color: #d09f94;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n"]))),et=v.ZP.div(Je||(Je=(0,x.Z)(["\n  display: flex;\n  height: inherit;\n  margin-right: 80px;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n  color: white;\n\n  @media screen and (max-width: 767px) {\n    margin-right: 40px;\n  }\n"])));const tt=(0,n(6189).Z)((0,I.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout");var nt=n(7207);const rt=()=>{const e=(0,h.v9)(ke.zD),t=(0,h.I0)();return(0,I.jsx)($e,{children:(0,I.jsxs)(et,{children:[(0,I.jsx)(ce.Z,{variant:"button",children:e}),(0,I.jsx)(we,{orientation:"vertical"}),(0,I.jsx)(ae.Z,{sx:{padding:0},onClick:()=>t((0,nt.Kv)()),children:(0,I.jsx)(tt,{sx:{fill:"white"}})})]})})},at=()=>{const e=(0,h.v9)(s),t=(0,h.v9)(ke.Qb),n=(0,h.v9)(c),r=(0,qe.s0)(),a=(0,Re.ac)({maxWidth:1023,minWidth:768}),i=(0,Re.ac)({maxWidth:767});return(0,m.useEffect)((()=>{t||r("/login")}),[t,r]),(0,I.jsxs)(I.Fragment,{children:["loading"===e&&(0,I.jsx)(We.a,{}),"succeeded"===e&&(0,I.jsx)(He.Z,{type:"success",message:n}),"failed"===e&&(0,I.jsx)(He.Z,{type:"error",message:n}),(0,I.jsx)(rt,{}),(0,I.jsx)(Ge,{children:(0,I.jsx)(Ee.Z,{elevation:6,sx:{...Ve,margin:"".concat(a?"90px 0 50px":i&&"55px 15px 15px"),width:"".concat(i?"100%":"fit-content"),maxWidth:"".concat(i&&"400px")},children:(0,I.jsxs)(_e,{children:[(0,I.jsx)(Qe,{name:"Create contact",descr:"Do you have a new contact? Add it",children:(0,I.jsx)(C,{})}),(0,I.jsx)(we,{variant:"fullwidth",orientation:"".concat(a?"horizontal":"vertical")}),(0,I.jsx)(Qe,{name:"Contacts",descr:"Looking for a contact? Use the search bar",children:(0,I.jsxs)(ze,{children:[(0,I.jsx)(L,{}),(0,I.jsx)(Me,{})]})})]})})})]})}},7247:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var a=r(n(5649)),i=n(184);t.Z=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},151:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var a=r(n(5649)),i=n(184);t.Z=(0,a.default)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},5649:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(9353)},9353:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>a.Z,createChainedFunction:()=>i,createSvgIcon:()=>o.Z,debounce:()=>s.Z,deprecatedPropType:()=>l,isMuiElement:()=>c.Z,ownerDocument:()=>d.Z,ownerWindow:()=>p.Z,requirePropFactory:()=>u,setRef:()=>h,unstable_ClassNameGenerator:()=>Z,unstable_useEnhancedEffect:()=>m.Z,unstable_useId:()=>g,unsupportedProp:()=>x,useControlled:()=>v.Z,useEventCallback:()=>f.Z,useForkRef:()=>b.Z,useIsFocusVisible:()=>y.Z});var r=n(4925),a=n(4036);const i=n(5253).Z;var o=n(6189),s=n(3199);const l=function(e,t){return()=>null};var c=n(5925),d=n(8301),p=n(7602);n(7462);const u=function(e,t){return()=>null};const h=n(7576).Z;var m=n(162);const g=n(6046).Z;const x=function(e,t,n,r,a){return null};var v=n(9552),f=n(9683),b=n(2071),y=n(6943);const Z={configure:e=>{r.Z.configure(e)}}},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=774.568028a0.chunk.js.map