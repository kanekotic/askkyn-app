(this["webpackJsonptogglee-generator"]=this["webpackJsonptogglee-generator"]||[]).push([[0],{61:function(e,t,n){},67:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(21),a=n.n(s),i=(n(61),n(7)),u=n(23),o=n(55),j=n(45),b=n(87),l=n(89),d=n(8),f=n.n(d),O=n(13),h=(n(67),n(90)),p=n(88),x=n(2),v=function(e){var t=e.navigate,n=e.finishedLoading,c=e.create,s=e.join,a=Object(r.useState)(""),i=Object(u.a)(a,2),o=i[0],j=i[1],b=Object(r.useState)(""),l=Object(u.a)(b,2),d=l[0],v=l[1];Object(r.useEffect)(n,[n]);var m=function(){var e=Object(O.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:(n=e.sent).success&&t("/session/".concat(n.identifier,"/questionnaire"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d,o);case 2:e.sent.success&&t("/session/".concat(d,"/answers/").concat(o));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{id:"container",children:[Object(x.jsx)(h.a,{className:"btn-start",onClick:m,children:" Create New"}),Object(x.jsx)(p.a.Control,{className:"form-control-start",type:"text",placeholder:"Enter Name",value:o,onChange:function(e){return j(e.target.value)}}),Object(x.jsx)(p.a.Control,{className:"form-control-start",type:"text",placeholder:"Enter Identifier",value:d,onChange:function(e){return v(e.target.value)}}),Object(x.jsx)(h.a,{className:"btn-start",onClick:g,children:" Join "})]})},m=function(e){return Object(x.jsx)(v,Object(i.a)({},e))},g=n(29),w=n(32),k=(n(70),n(86)),C=n(28),y=function(e){var t=e.navigate,n=e.sessionId,c=e.finishedLoading,s=e.submit,a=Object(r.useState)([]),o=Object(u.a)(a,2),j=o[0],b=o[1];Object(r.useEffect)(c,[c]);var l=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n,j);case 2:e.sent.success&&t("/session/".concat(n,"/summary"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(e,t,n){return b(j.map((function(r,c){return e===c?Object(i.a)(Object(i.a)({},r),{},Object(g.a)({},t,n)):r})))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(k.a,{striped:!0,hover:!0,size:"sm","data-testid":"main-table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Question"}),Object(x.jsx)("th",{children:"Answers"}),Object(x.jsx)("th",{children:Object(x.jsxs)("div",{className:"actions",children:["Actions",Object(x.jsx)(h.a,{onClick:function(){return b([].concat(Object(w.a)(j),[{question:"",answers:[]}]))},children:Object(x.jsx)(C.a,{icon:["fas","plus"]})})]})})]})}),Object(x.jsx)("tbody",{children:j.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(p.a.Control,{type:"text",placeholder:"Enter Question",value:e.question,onChange:function(e){return d(t,"question",e.target.value)}})}),Object(x.jsx)("td",{children:e.answers.map((function(e,n){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a.Control,{type:"text",placeholder:"Enter Answer",value:e.value,onChange:function(e){return function(e,t,n,r){return d(e,"answers",j[e].answers.map((function(e,c){return t===c?Object(i.a)(Object(i.a)({},e),{},Object(g.a)({},n,r)):e})))}(t,n,"value",e.target.value)}}),Object(x.jsx)(h.a,{onClick:function(){return r=n,d(e=t,"answers",j[e].answers.filter((function(e,t){return t!==r})));var e,r},children:Object(x.jsx)(C.a,{icon:["fas","trash"]})})]})}))}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:"actions",children:[Object(x.jsx)(h.a,{onClick:function(){return d(e=t,"answers",[].concat(Object(w.a)(j[e].answers),[{value:""}]));var e},children:Object(x.jsx)(C.a,{icon:["fas","plus"]})}),Object(x.jsx)(h.a,{onClick:function(){return e=t,b(j.filter((function(t,n){return n!==e})));var e},children:Object(x.jsx)(C.a,{icon:["fas","trash"]})})]})})]},"question_".concat(t))}))})]}),Object(x.jsx)(h.a,{onClick:l,children:Object(x.jsx)(C.a,{icon:["fas","play"]})})]})},E=function(e){return Object(x.jsx)(y,Object(i.a)({},e))},I=(n(73),function(e){var t=e.sessionId,n=e.finishedLoading;return Object(r.useEffect)(n,[n]),Object(x.jsxs)("div",{id:"container",children:["Summary: ",t," "]})}),N=function(e){return Object(x.jsx)(I,Object(i.a)({},e))},q=(n(74),function(e){var t=e.sessionId,n=e.username,c=e.finishedLoading;return Object(r.useEffect)(c,[c]),Object(x.jsxs)("div",{id:"container",children:["Answers: ",t," for ",n]})}),S=function(e){return Object(x.jsx)(q,Object(i.a)({},e))},F=n(49),L=(n(75),n(24)),A=n(51),B=n(52),J=n(53),z=n(50),D=function(){return Math.random().toString(36).replace("0.","").substr(1,5)},M=function(){return Date.now()},P=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r,c,s,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:D,r=a.length>2&&void 0!==a[2]?a[2]:M,c=n(),s=r(),e.prev=4,e.next=7,t.put({_id:c,createdOn:s,players:[],questions:[]});case 7:return e.sent,e.abrupt("return",{success:!0,identifier:c});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",{success:!1});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(O.a)(f.a.mark((function e(t,n,r){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get(n);case 3:return c=e.sent,e.next=6,t.put(Object(i.a)(Object(i.a)({},c),{},{players:[].concat(Object(w.a)(c.players),[r])}));case 6:return e.abrupt("return",{success:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(O.a)(f.a.mark((function e(t,n,r){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get(n);case 3:return c=e.sent,e.next=6,t.put(Object(i.a)(Object(i.a)({},c),{},{questions:r}));case 6:return e.abrupt("return",{success:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),_=new z.a("".concat("https://askkyn.herokuapp.com","/db/askkyn")),G=function(){return P(_)},H=function(e,t){return Q(_,e,t)},K=function(e,t){return T(_,e,t)};L.b.add(A.a,B.a,J.a);var R=function(e){var t=e.Component,n=Object(o.a)(e,["Component"]),c=Object(r.useState)(!0),s=Object(u.a)(c,2),a=s[0],l=s[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(t,Object(i.a)(Object(i.a)({},n),{},{finishedLoading:function(e){l(!1),e&&Object(j.b)("/error/".concat(e))}})),Object(x.jsx)(b.a,{show:a,keyboard:!1,backdrop:"static",size:"sm",centered:!0,children:Object(x.jsx)(b.a.Body,{children:Object(x.jsx)(F.Grid,{})})})]})},U=function(e){var t=Object.assign({},e);return Object(x.jsx)(R,Object(i.a)({},t))},V=function(){return Object(x.jsxs)("div",{id:"main",children:[Object(x.jsx)(l.a,{children:Object(x.jsxs)(l.a.Brand,{href:"/",children:[Object(x.jsx)("img",{alt:"",src:"./logo.webp",width:"42",height:"42",className:"d-inline-block align-top"})," Askkyn"]})}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(U,{default:!0,path:"default",Component:m,create:G,join:H}),Object(x.jsx)(U,{path:"session/:sessionId/questionnaire",Component:E,db:_,submit:K}),Object(x.jsx)(U,{path:"session/:sessionId/summary",Component:N,db:_}),Object(x.jsx)(U,{path:"session/:sessionId/answers/:username",Component:S,db:_})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(82);a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root")),W()}},[[83,1,2]]]);
//# sourceMappingURL=main.7102694e.chunk.js.map