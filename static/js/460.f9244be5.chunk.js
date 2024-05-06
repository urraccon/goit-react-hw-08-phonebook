(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[460],{8460:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ke});var r,a,i,o=n(2947),s=n(168),l=n(7924);const c=l.ZP.section(r||(r=(0,s.Z)(["\n  width: 400px;\n  height: calc(100% - 50px * 2);\n  padding: 50px;\n"]))),d=l.ZP.div(a||(a=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),p=l.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"])));var u=n(184);const m=e=>{let{name:t,descr:n,children:r}=e;return(0,u.jsx)(c,{children:(0,u.jsxs)(d,{children:[(0,u.jsxs)(p,{children:[(0,u.jsx)(o.Z,{variant:"h5",ml:1.5,children:t}),(0,u.jsx)(o.Z,{varaian:"h6",children:n})]}),r]})})};var h=n(3553),g=n(5431);const v=e=>e.contactsFilter,x=e=>e.contacts.items,f=e=>e.contacts.status,b=(0,h.P1)([v,x],((e,t)=>t.filter((t=>t.name.toLowerCase().includes(e.toLowerCase()))))),y=(0,h.P1)([f,e=>e.contacts.operation,e=>e.contacts.error],((e,t,n)=>{switch(t){case"loadData":return g.Z.loadData(e);case"addContact":return g.Z.addContact(e);case"deleteContact":return g.Z.deleteContact(e);case"duplicateContact":return n;default:return null}}));var Z,w,S,I=n(4420),C=n(2791),j=n(9924);const P=l.ZP.form(Z||(Z=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: fit-content;\n"]))),A=l.ZP.div(w||(w=(0,s.Z)(["\n  display: flex;\n  width: fit-content;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n"]))),L=l.ZP.div(S||(S=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n"])));var k=n(4252),R=n(4294),M=n(7632),N=n(8905);const T=()=>{const[e,t]=(0,C.useState)(""),[n,r]=(0,C.useState)(""),[a,i]=(0,C.useState)(null),[o,s]=(0,C.useState)(null),l=(0,I.I0)(),c=(0,I.v9)(x);return(0,u.jsx)(L,{children:(0,u.jsxs)(P,{onSubmit:a=>{a.preventDefault();const o=M.Z.checkName(e),d=M.Z.checkPhone(n),p=M.Z.checkContact(c,e);if(i(o),s(d),p&&(l((0,N.Tf)("failed")),l((0,N.sT)(p)),l((0,N.I)("duplicateContact"))),!o&&!d&&!p){const a={name:e,number:n};l((0,j.uK)(a)),t(""),r("")}},children:[(0,u.jsxs)(A,{children:[(0,u.jsx)(k.Z,{error:!!a,type:"text",id:"name",label:"Name",helperText:a||"Please enter the contact's name",size:"small",color:"warning",value:e,onChange:e=>t(e.target.value),sx:{minWidth:"28ch"}}),(0,u.jsx)(k.Z,{error:!!o,type:"tel",id:"phone",label:"Phone",helperText:o||"Please enter the contact's phone",size:"small",color:"warning",value:n,onChange:e=>r(e.target.value),sx:{width:"100%"}})]}),(0,u.jsx)(R.Z,{type:"submit",variant:"outlined",size:"small",color:"warning",sx:{fontWeight:900,width:"100%"},children:"Add contact"})]})})};var F=n(7382);const G=()=>{const e=(0,I.v9)(v),t=(0,I.I0)();return(0,u.jsx)(k.Z,{type:"search",id:"serach-bar",label:"Search contacts by name",helperText:"Enter a letter to start searching",size:"small",color:"warning",value:e,onChange:e=>t((0,F.T)(e.target.value)),sx:{minWidth:"28ch"}})};var _=n(493),O=n(7462),V=n(3366),D=n(3733),W=n(627),z=n(838),B=n(90),E=n(4524),q=n(6983),H=n(533),K=n(5925),U=n(162),X=n(2071),Q=n(6199),Y=n(9703),J=n(4657);function $(e){return(0,J.ZP)("MuiListItem",e)}const ee=(0,Y.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const te=(0,Y.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function ne(e){return(0,J.ZP)("MuiListItemSecondaryAction",e)}(0,Y.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);const re=["className"],ae=(0,E.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:e=>{let{ownerState:t}=e;return t.disableGutters},style:{right:0}}]}),ie=C.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:r}=n,a=(0,V.Z)(n,re),i=C.useContext(Q.Z),o=(0,O.Z)({},n,{disableGutters:i.disableGutters}),s=(e=>{const{disableGutters:t,classes:n}=e,r={root:["root",t&&"disableGutters"]};return(0,z.Z)(r,ne,n)})(o);return(0,u.jsx)(ae,(0,O.Z)({className:(0,D.Z)(s.root,r),ownerState:o,ref:t},a))}));ie.muiName="ListItemSecondaryAction";const oe=ie,se=["className"],le=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],ce=(0,E.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((e=>{let{theme:t}=e;return{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",["&.".concat(ee.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(ee.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,B.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(ee.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,B.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(ee.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:e=>{let{ownerState:t}=e;return!t.disablePadding},style:{paddingTop:8,paddingBottom:8}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&t.dense},style:{paddingTop:4,paddingBottom:4}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!!t.secondaryAction},style:{paddingRight:48}},{props:e=>{let{ownerState:t}=e;return!!t.secondaryAction},style:{["& > .".concat(te.root)]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"}},{props:e=>{let{ownerState:t}=e;return t.button},style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(ee.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,B.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,B.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}},{props:e=>{let{ownerState:t}=e;return t.hasSecondaryAction},style:{paddingRight:48}}]}})),de=(0,E.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),pe=C.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiListItem"}),{alignItems:r="center",autoFocus:a=!1,button:i=!1,children:o,className:s,component:l,components:c={},componentsProps:d={},ContainerComponent:p="li",ContainerProps:{className:m}={},dense:h=!1,disabled:g=!1,disableGutters:v=!1,disablePadding:x=!1,divider:f=!1,focusVisibleClassName:b,secondaryAction:y,selected:Z=!1,slotProps:w={},slots:S={}}=n,I=(0,V.Z)(n.ContainerProps,se),j=(0,V.Z)(n,le),P=C.useContext(Q.Z),A=C.useMemo((()=>({dense:h||P.dense||!1,alignItems:r,disableGutters:v})),[r,P.dense,h,v]),L=C.useRef(null);(0,U.Z)((()=>{a&&L.current&&L.current.focus()}),[a]);const k=C.Children.toArray(o),R=k.length&&(0,K.Z)(k[k.length-1],["ListItemSecondaryAction"]),M=(0,O.Z)({},n,{alignItems:r,autoFocus:a,button:i,dense:A.dense,disabled:g,disableGutters:v,disablePadding:x,divider:f,hasSecondaryAction:R,selected:Z}),N=(e=>{const{alignItems:t,button:n,classes:r,dense:a,disabled:i,disableGutters:o,disablePadding:s,divider:l,hasSecondaryAction:c,selected:d}=e,p={root:["root",a&&"dense",!o&&"gutters",!s&&"padding",l&&"divider",i&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",d&&"selected"],container:["container"]};return(0,z.Z)(p,$,r)})(M),T=(0,X.Z)(L,t),F=S.root||c.Root||ce,G=w.root||d.root||{},_=(0,O.Z)({className:(0,D.Z)(N.root,G.className,s),disabled:g},j);let B=l||"li";return i&&(_.component=l||"div",_.focusVisibleClassName=(0,D.Z)(ee.focusVisible,b),B=H.Z),R?(B=_.component||l?B:"div","li"===p&&("li"===B?B="div":"li"===_.component&&(_.component="div")),(0,u.jsx)(Q.Z.Provider,{value:A,children:(0,u.jsxs)(de,(0,O.Z)({as:p,className:(0,D.Z)(N.container,m),ref:T,ownerState:M},I,{children:[(0,u.jsx)(F,(0,O.Z)({},G,!(0,W.X)(F)&&{as:B,ownerState:(0,O.Z)({},M,G.ownerState)},_,{children:k})),k.pop()]}))})):(0,u.jsx)(Q.Z.Provider,{value:A,children:(0,u.jsxs)(F,(0,O.Z)({},G,{as:B,ref:T},!(0,W.X)(F)&&{ownerState:(0,O.Z)({},M,G.ownerState)},_,{children:[k,y&&(0,u.jsx)(oe,{children:y})]}))})}));var ue=n(3400);function me(e){return(0,J.ZP)("MuiListItemIcon",e)}(0,Y.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);const he=["className"],ge=(0,E.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((e=>{let{theme:t,ownerState:n}=e;return(0,O.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),ve=C.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiListItemIcon"}),{className:r}=n,a=(0,V.Z)(n,he),i=C.useContext(Q.Z),o=(0,O.Z)({},n,{alignItems:i.alignItems}),s=(e=>{const{alignItems:t,classes:n}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,z.Z)(r,me,n)})(o);return(0,u.jsx)(ge,(0,O.Z)({className:(0,D.Z)(s.root,r),ownerState:o,ref:t},a))}));function xe(e){return(0,J.ZP)("MuiListItemText",e)}const fe=(0,Y.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),be=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ye=(0,E.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{["& .".concat(fe.primary)]:t.primary},{["& .".concat(fe.secondary)]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,variants:[{props:e=>{let{ownerState:t}=e;return t.primary&&t.secondary},style:{marginTop:6,marginBottom:6}},{props:e=>{let{ownerState:t}=e;return t.inset},style:{paddingLeft:56}}]}),Ze=C.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiListItemText"}),{children:r,className:a,disableTypography:i=!1,inset:s=!1,primary:l,primaryTypographyProps:c,secondary:d,secondaryTypographyProps:p}=n,m=(0,V.Z)(n,be),{dense:h}=C.useContext(Q.Z);let g=null!=l?l:r,v=d;const x=(0,O.Z)({},n,{disableTypography:i,inset:s,primary:!!g,secondary:!!v,dense:h}),f=(e=>{const{classes:t,inset:n,primary:r,secondary:a,dense:i}=e,o={root:["root",n&&"inset",i&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,z.Z)(o,xe,t)})(x);return null==g||g.type===o.Z||i||(g=(0,u.jsx)(o.Z,(0,O.Z)({variant:h?"body2":"body1",className:f.primary,component:null!==c&&void 0!==c&&c.variant?void 0:"span",display:"block"},c,{children:g}))),null==v||v.type===o.Z||i||(v=(0,u.jsx)(o.Z,(0,O.Z)({variant:"body2",className:f.secondary,color:"text.secondary",display:"block"},p,{children:v}))),(0,u.jsxs)(ye,(0,O.Z)({className:(0,D.Z)(f.root,a),ownerState:x,ref:t},m,{children:[g,v]}))}));var we=n(2588);function Se(e){return(0,J.ZP)("MuiDivider",e)}(0,Y.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Ie=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Ce=(0,we.Uu)("MuiDivider"),je=(0,E.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((e=>{let{theme:t}=e;return{margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,B.Fq)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:e=>{let{ownerState:t}=e;return!!t.children},style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}},{props:e=>{let{ownerState:t}=e;return t.children&&"vertical"!==t.orientation},style:{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}}},{props:e=>{let{ownerState:t}=e;return"vertical"===t.orientation&&t.children},style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}}},{props:e=>{let{ownerState:t}=e;return"right"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:e=>{let{ownerState:t}=e;return"left"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}})),Pe=(0,E.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((e=>{let{theme:t}=e;return{display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)"),variants:[{props:{orientation:"vertical"},style:{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")}}]}})),Ae=C.forwardRef((function(e,t){const n=Ce({props:e,name:"MuiDivider"}),{absolute:r=!1,children:a,className:i,component:o=(a?"div":"hr"),flexItem:s=!1,light:l=!1,orientation:c="horizontal",role:d=("hr"!==o?"separator":void 0),textAlign:p="center",variant:m="fullWidth"}=n,h=(0,V.Z)(n,Ie),g=(0,O.Z)({},n,{absolute:r,component:o,flexItem:s,light:l,orientation:c,role:d,textAlign:p,variant:m}),v=(e=>{const{absolute:t,children:n,classes:r,flexItem:a,light:i,orientation:o,textAlign:s,variant:l}=e,c={root:["root",t&&"absolute",l,i&&"light","vertical"===o&&"vertical",a&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,z.Z)(c,Se,r)})(g);return(0,u.jsx)(je,(0,O.Z)({as:o,className:(0,D.Z)(v.root,i),role:d,ref:t,ownerState:g},h,{children:a?(0,u.jsx)(Pe,{className:v.wrapper,ownerState:g,children:a}):null}))}));Ae&&(Ae.muiSkipListHighlight=!0);const Le=Ae;var ke,Re=n(7247),Me=n(151);const Ne=l.ZP.div(ke||(ke=(0,s.Z)(["\n  height: 160px;\n  overflow: auto;\n  width: 85%;\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: rgb(237, 108, 2);\n    border-radius: 2px;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: rgb(230, 81, 0);\n  }\n"]))),Te=()=>{const e=(0,I.v9)(b),t=(0,I.I0)();return(0,C.useEffect)((()=>{t((0,j.yF)())}),[t]),(0,u.jsx)(Ne,{children:(0,u.jsx)(_.Z,{"aria-label":"contacts",disablePadding:!0,sx:{marginRight:"10px"},children:e.map((n=>(0,u.jsxs)("div",{children:[(0,u.jsxs)(pe,{secondaryAction:(0,u.jsx)(ue.Z,{edge:"end","aria-label":"delete",onClick:()=>t((0,j.GK)(n.id)),children:(0,u.jsx)(Re.Z,{})}),children:[(0,u.jsx)(ve,{children:(0,u.jsx)(Me.Z,{sx:{fill:"#d89c92"}})}),(0,u.jsx)(Ze,{primary:n.name}),(0,u.jsx)(Ze,{secondary:n.number})]}),e.length-1!==e.indexOf(n)&&(0,u.jsx)(Le,{})]},n.id)))})})};var Fe,Ge,_e,Oe=n(4503);const Ve=l.ZP.div(Fe||(Fe=(0,s.Z)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),De={backgroundColor:"#fae5d6",border:"3px solid #d89c92",borderRadius:"30px"},We=l.ZP.div(Ge||(Ge=(0,s.Z)(["\n  display: flex;\n  height: 400px;\n"]))),ze=l.ZP.div(_e||(_e=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n"])));var Be=n(5527),Ee=n(2837),qe=n(7689),He=n(3955);const Ke=()=>{const e=(0,I.v9)(f),t=(0,I.v9)(Ee.Qb),n=(0,I.v9)(y),r=(0,I.I0)(),a=(0,qe.s0)();return(0,C.useEffect)((()=>{"succeeded"!==e&&"failed"!==e||setTimeout((()=>{r((0,N.vn)())}),2e3)}),[e,r]),(0,C.useEffect)((()=>{t||a("/login")}),[t,a]),(0,u.jsxs)(u.Fragment,{children:["loading"===e&&(0,u.jsx)(Oe.a,{}),"succeeded"===e&&(0,u.jsx)(He.Z,{type:"success",message:n}),"failed"===e&&(0,u.jsx)(He.Z,{type:"error",message:n}),(0,u.jsx)(Ve,{children:(0,u.jsx)(Be.Z,{elevation:6,sx:De,children:(0,u.jsxs)(We,{children:[(0,u.jsx)(m,{name:"Create contact",descr:"Do you have a new contact? Add it",children:(0,u.jsx)(T,{})}),(0,u.jsx)(Le,{variant:"fullwidth",orientation:"vertical"}),(0,u.jsx)(m,{name:"Contacts",descr:"Looking for a contact? Use the search bar",children:(0,u.jsxs)(ze,{children:[(0,u.jsx)(G,{}),(0,u.jsx)(Te,{})]})})]})})})]})}},7247:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var a=r(n(5649)),i=n(184);t.Z=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},151:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var a=r(n(5649)),i=n(184);t.Z=(0,a.default)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},5649:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(9353)},9353:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>a.Z,createChainedFunction:()=>i,createSvgIcon:()=>o.Z,debounce:()=>s.Z,deprecatedPropType:()=>l,isMuiElement:()=>c.Z,ownerDocument:()=>d.Z,ownerWindow:()=>p.Z,requirePropFactory:()=>u,setRef:()=>m,unstable_ClassNameGenerator:()=>Z,unstable_useEnhancedEffect:()=>h.Z,unstable_useId:()=>g,unsupportedProp:()=>v,useControlled:()=>x.Z,useEventCallback:()=>f.Z,useForkRef:()=>b.Z,useIsFocusVisible:()=>y.Z});var r=n(4925),a=n(4036);const i=n(5253).Z;var o=n(6189),s=n(3199);const l=function(e,t){return()=>null};var c=n(5925),d=n(8301),p=n(7602);n(7462);const u=function(e,t){return()=>null};const m=n(7576).Z;var h=n(162);const g=n(6046).Z;const v=function(e,t,n,r,a){return null};var x=n(9552),f=n(9683),b=n(2071),y=n(6943);const Z={configure:e=>{r.Z.configure(e)}}},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=460.f9244be5.chunk.js.map