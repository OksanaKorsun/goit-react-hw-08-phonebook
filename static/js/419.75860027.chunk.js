"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[419],{5419:function(n,e,r){r.r(e),r.d(e,{default:function(){return W}});var o,t,i,a,x,p,d,s,c,u,l,m=r(2791),b=r(4420),h=r(6351),f=r(168),g=r(7924),j=r(203),Z=(0,g.ZP)(j.Xm5)(o||(o=(0,f.Z)(["\n  color: #1C56C3;\n  &:hover {\n    color: #0E45AB ;\n  }\n"]))),v=g.ZP.ul(t||(t=(0,f.Z)(["\n  width: 90%;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 30px auto;\n"]))),y=g.ZP.li(i||(i=(0,f.Z)(["\n  margin-bottom: 10px;\n  padding: 14px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,\n    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;\n  border-radius: 4px;\n  background-color: #C4D2EE ;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),k=g.ZP.div(a||(a=(0,f.Z)(["\n  font-size: 16px;\n"]))),w=g.ZP.button(x||(x=(0,f.Z)(["\n  background-color: inherit;\n  color: #fff;\n  border: none;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n  border-radius: 4px;\n"]))),C=r(914),z=r(9589),P=r(184),F=function(){var n=(0,b.I0)(),e=(0,b.v9)(h.hF);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z.X,{as:"h2",size:"md",children:"Your contacts"}),(0,P.jsx)(v,{children:e.map((function(e){var r=e.id,o=e.name,t=e.number;return(0,P.jsxs)(y,{children:[(0,P.jsxs)(k,{children:[o," - ",t]}),(0,P.jsx)(w,{onClick:function(){return n((0,C.GK)(r))},children:(0,P.jsx)(Z,{size:22})})]},r)}))})]})},A=r(5705),q=r(5264),E=(0,g.ZP)(A.l0)(p||(p=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 90%;\n  margin: 0 auto;\n  text-align: center;\n  /* padding: 20px; */\n  /* box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,\n    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;\n  border-radius: 8px; */\n  /* background-color: rgb(254, 236, 224); */\n  background-color: inherit;\n"]))),R=g.ZP.label(d||(d=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),_=(0,g.ZP)(A.gN)(s||(s=(0,f.Z)(["\n  font-size: 16px;\n  border: 1px solid #1C56C3;\n  border-radius: 4px;\n  outline: none;\n  padding: 14px;\n"]))),I=g.ZP.button(c||(c=(0,f.Z)(["\n  background-color: #1C56C3;\n  color: #fff;\n  border: none;\n  padding: 14px 20px;\n  font-size: 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,\n    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color:#0E45AB ;\n  }\n"]))),N=(0,g.ZP)(A.Bc)(u||(u=(0,f.Z)(["\n  font-size: 14;\n  color: #d15803;\n"]))),S=r(8007),B=S.Ry().shape({name:S.Z_().min(3,"Too Short!").max(30,"Too Long!").required("Required"),number:S.Rx().integer("Must be an integer").min(1e6,"Must be at least 7 digits").required("Required")}),L=function(){var n=(0,b.I0)(),e=(0,b.v9)(h.Af);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z.X,{as:"h1",size:"md",children:"Add contact"}),(0,P.jsx)(A.J9,{initialValues:{name:"",number:""},validationSchema:B,onSubmit:function(r,o){!function(r){e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?q.Notify.warning("".concat(r.name," is already in contacts."),{width:"400px",position:"center-center",timeout:2e3,fontSize:"20px"}):n((0,C.uK)(r))}(r),o.resetForm()},children:(0,P.jsxs)(E,{children:[(0,P.jsxs)(R,{htmlFor:"name",children:["Name:",(0,P.jsx)(_,{name:"name"}),(0,P.jsx)(N,{name:"name",component:"span"})]}),(0,P.jsxs)(R,{htmlFor:"number",children:["Number:",(0,P.jsx)(_,{name:"number",type:"tel"}),(0,P.jsx)(N,{name:"number",component:"span"})]}),(0,P.jsx)(I,{type:"submit",children:"Add contact"})]})})]})},T=r(8410),X=r(6895),D=g.ZP.input(l||(l=(0,f.Z)(["\ndisplay: block;\n  width: 90%;\n  font-size: 16px;\n  border: 1px solid #1C56C3;\n  border-radius: 4px;\n  outline: none;\n  padding: 14px;\n  margin: 20px auto;\n"]))),K=function(){var n=(0,b.I0)(),e=(0,b.v9)(h.AD);return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(D,{type:"text",name:"filter",value:e,placeholder:"Find contacts by name:",onChange:function(e){return n((0,X.Tv)(e.target.value))},required:!0})})},M=r(9662);function W(){var n=(0,b.I0)(),e=(0,b.v9)(h.xU),r=(0,b.v9)(h.zh),o=(0,b.v9)(h.Af);return(0,m.useEffect)((function(){n((0,C.yF)())}),[n]),(0,P.jsxs)(T.W,{maxW:"md",borderRadius:"md",children:[e&&(0,P.jsx)(M.a,{}),(0,P.jsx)(L,{}),(0,P.jsx)(K,{}),r?(0,P.jsx)("p",{children:"error"}):(0,P.jsx)(F,{}),0===o.length&&!r&&!e&&(0,P.jsx)("p",{children:"no contacts"})]})}}}]);
//# sourceMappingURL=419.75860027.chunk.js.map