(this["webpackJsonptodo-freestyle"]=this["webpackJsonptodo-freestyle"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),l=a.n(c),r=(a(11),a(2)),i=a(5),u=(a(12),a(13),a(1)),s=function(e){var t=e.cats,a=e.todoItemAdd,c=Object(n.useState)(""),l=Object(r.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)(0),d=Object(r.a)(m,2),p=d[0],E=d[1],f=Object(n.useState)(4),b=Object(r.a)(f,2),v=b[0],y=b[1],g=Object(n.useCallback)((function(e){s(e.target.value)}),[]),h=Object(n.useCallback)((function(e){E(parseInt(e.target.value))}),[]),C=Object(n.useCallback)((function(e){y(parseInt(e.target.value))}),[]),O=Object(n.useCallback)((function(e){a(i,p,v),s(""),e.preventDefault()}),[a,i,p,v]);return o.a.createElement("div",{className:"inputBox"},o.a.createElement("form",{onSubmit:O},o.a.createElement("input",{className:"todoInputText",type:"text",placeholder:"new entry",value:i,onChange:g}),o.a.createElement("button",{className:"todoInputButton",type:"submit"},o.a.createElement(u.a,null)),o.a.createElement("div",{className:"inputOptionCat"},o.a.createElement("select",{onChange:h},o.a.createElement("option",{value:"0"},"uncategorized"),t.map((function(e){return o.a.createElement("option",{value:e.id,key:e.id},e.name)})))),o.a.createElement("div",{className:"inputOptionPrio"},o.a.createElement("input",{type:"radio",id:"inputPriority1",name:"inputPriority",value:"1",onChange:C}),o.a.createElement("label",{htmlFor:"inputPriority1"},o.a.createElement(u.d,{style:{color:"#C33"},alt:"priority_first"})),o.a.createElement("input",{type:"radio",id:"inputPriority2",name:"inputPriority",value:"2",onChange:C}),o.a.createElement("label",{htmlFor:"inputPriority2"},o.a.createElement(u.d,{style:{color:"#33A"},alt:"priority_high"})),o.a.createElement("input",{type:"radio",id:"inputPriority3",name:"inputPriority",value:"3",onChange:C}),o.a.createElement("label",{htmlFor:"inputPriority3"},o.a.createElement(u.d,{style:{color:"#3A3"},alt:"priority_mendium"})),o.a.createElement("input",{type:"radio",id:"inputPriority4",name:"inputPriority",value:"4",onChange:C,defaultChecked:!0}),o.a.createElement("label",{htmlFor:"inputPriority4"},o.a.createElement(u.d,{style:{color:"#999"},alt:"priority_low"})))))},m=(a(14),o.a.memo((function(e){var t=e.cats,a=e.todos,n=e.openCatsModal;return o.a.createElement("div",null,o.a.createElement("ul",{className:"TodoListCatsList"},o.a.createElement("li",{className:"TodoListCat currentCat"},"all (",a.length,")"),t.map((function(e){return o.a.createElement("li",{className:"TodoListCat",key:e.id},e.name," (",a.filter((function(t){return t.cate===e.id})).length,")")})),o.a.createElement("li",{className:"TodoListCat TodoListCatAdd",onClick:function(){return n()}},o.a.createElement(u.c,null))),o.a.createElement("div",{className:"TodoListCatsListBottom"}))}))),d=(a(15),o.a.memo((function(e){var t=e.cats,a=e.todo,n=e.todoItemToggle,c=e.todoItemRemove,l=a.id,r=a.checked,i=a.cate,s=a.prior,m=a.text,d=t.find((function(e){return e.id===i}));return o.a.createElement("li",{className:"todoListItem todoListPriority"+s+" todoChecked_"+r,"data-id":l,"data-priority":s},o.a.createElement("button",{className:"checkBox",onClick:function(){return n(l)}},r?o.a.createElement(u.b,null):o.a.createElement(u.g,null)),o.a.createElement("span",{className:"todoText"},m||"-"),void 0!==d?o.a.createElement("span",{className:"catLabel"},d.name||"-"):null,o.a.createElement("button",{className:"editButton"},o.a.createElement(u.f,null)),o.a.createElement("button",{className:"deleteButton",onClick:function(){return c(l)}},o.a.createElement(u.e,null)))}))),p=(a(16),o.a.memo((function(e){var t=e.cats,a=e.todos,n=e.todoItemToggle,c=e.todoItemRemove;return o.a.createElement("div",{className:"TodoListPage"},o.a.createElement("ul",null,a.map((function(e){return o.a.createElement(d,{cats:t,todo:e,key:e.id,todoItemToggle:n,todoItemRemove:c})}))))}))),E=(a(17),a(18),function(e){var t=e.todos,a=e.cats,n=e.catRemove;return o.a.createElement("ul",{className:"catsList"},a.map((function(e){return o.a.createElement("li",{className:"catsListItem","data-id":e.id,key:e.id},o.a.createElement("span",null,e.name," (",t.filter((function(t){return t.cate===e.id})).length,")"),o.a.createElement("button",{className:"editButton"},o.a.createElement(u.f,null)),o.a.createElement("button",{className:"deleteButton",onClick:function(){return function(e,t,a){var o="You have  "+a+"  todo items in this category :  "+t+"\n\nThese todo items will lose their category tags.\nAre you sure you want to delete this category?";if(0===a)n(e);else{if(!(a>0&&window.confirm(o)))return;n(e)}}(e.id,e.name,t.filter((function(t){return t.cate===e.id})).length)}},o.a.createElement(u.e,null)))})))}),f=o.a.memo((function(e){var t=e.todos,a=e.catsModalState,c=e.cats,l=e.closeCatsModal,i=e.catAdd,s=e.catRemove,m=a?"modalTrue":"modalFalse",d=Object(n.useState)(""),p=Object(r.a)(d,2),f=p[0],b=p[1],v=Object(n.useCallback)((function(e){b(e.target.value)}),[]),y=Object(n.useCallback)((function(e){console.log(f),i(f),b(""),e.preventDefault()}),[f,i]);return o.a.createElement("div",{className:"modalWrapper "+m},o.a.createElement("div",{className:"catsModal"},o.a.createElement("button",{className:"closeModal",onClick:l},"X"),o.a.createElement("h3",null,"Manage Categories"),o.a.createElement(E,{todos:t,cats:c,catRemove:s}),o.a.createElement("form",{onSubmit:y},o.a.createElement("input",{className:"todoInputText",type:"text",placeholder:"new category",value:f,onChange:v}),o.a.createElement("button",{className:"catAdd",type:"submit"},o.a.createElement(u.a,null)))),o.a.createElement("div",{className:"modalBg",onClick:l}))})),b=[{id:1,sort:1,name:"people"},{id:2,sort:2,name:"cats"},{id:3,sort:3,name:"dogs"},{id:4,sort:4,name:"plants"}],v=5;function y(){for(var e=[],t=1;t<=v;t++)e.push({id:t,checked:!1,cate:0,prior:4,text:"todo bbbbbitem #".concat(t)});return e}function g(e,t){switch(t.type){case"INSERT":return console.log("add t"),e.concat(t.todo);case"REMOVE":return console.log("remove t"),e.filter((function(e){return e.id!==t.todoItemId}));case"TOGGLE":return console.log("toggle t"),e.map((function(e){return e.id===t.todoItemId?Object(i.a)({},e,{checked:!e.checked}):e}));default:return e}}function h(e,t){switch(t.type){case"INSERT":return console.log("add cat"),e.concat(t.newCat);case"REMOVE":return console.log("remove cat"),e.filter((function(e){return e.id!==t.catItemId}));default:return e}}var C=function(){var e=Object(n.useReducer)(g,void 0,y),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(n.useReducer)(h,b),i=Object(r.a)(l,2),u=i[0],d=i[1],E=Object(n.useState)(!1),C=Object(r.a)(E,2),O=C[0],k=C[1],N=Object(n.useRef)(v+1),I=Object(n.useRef)(5),j=Object(n.useCallback)((function(e,t,a){var n={id:N.current,checked:!1,cate:t,prior:a,text:e};c({type:"INSERT",todo:n}),N.current+=1}),[]),T=Object(n.useCallback)((function(e){c({type:"REMOVE",todoItemId:e})}),[]),w=Object(n.useCallback)((function(e){c({type:"TOGGLE",todoItemId:e})}),[]),R=Object(n.useCallback)((function(){k(!0)}),[]),L=Object(n.useCallback)((function(){k(!1)}),[]),P=Object(n.useCallback)((function(e){var t={id:I.current,sort:2,name:e};d({type:"INSERT",newCat:t}),I.current+=1}),[]),A=Object(n.useCallback)((function(e){d({type:"REMOVE",catItemId:e})}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"Kitty Needs Kibbles"),o.a.createElement("main",{className:"App-main"},o.a.createElement(f,{todos:a,catsModalState:O,cats:u,closeCatsModal:L,catAdd:P,catRemove:A}),o.a.createElement(s,{cats:u,todoItemAdd:j}),o.a.createElement(m,{cats:u,todos:a,openCatsModal:R}),o.a.createElement(p,{cats:u,todos:a,todoItemToggle:w,todoItemRemove:T})),o.a.createElement("footer",{className:"App-footer"},"you need new socks in 2020"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.95f13b27.chunk.js.map