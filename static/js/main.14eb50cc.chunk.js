(this.webpackJsonp33_todo=this.webpackJsonp33_todo||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(8),s=n.n(o),i=(n(14),n(15),n(9)),r=n(5),d=n(4),u=n(7),j=n(22),l=(n(16),n(0)),b=function(e){var t=e.addTodo,n={task:""},a=Object(c.useState)(n),o=Object(r.a)(a,2),s=o[0],i=o[1];return Object(l.jsxs)("form",{className:"NewTodoForm",onSubmit:function(e){e.preventDefault(),t(Object(u.a)(Object(u.a)({},s),{},{id:Object(j.a)(),isChecked:!1})),i(n)},children:[Object(l.jsx)("label",{className:"NewTodoForm-label",htmlFor:"new-task",children:"New task"}),Object(l.jsx)("input",{type:"text",id:"new-task",className:"NewTodoForm-input",name:"task",value:s.task,placeholder:"Honey-Do List Items",onChange:function(e){var t=e.target,n=t.name,c=t.value;i((function(){return Object(d.a)({},n,c)}))}}),Object(l.jsx)("button",{children:"Add Task"})]})},h=(n(18),n(19),function(e){var t=e.id,n=e.task,c=e.isChecked,a=e.updateCheck,o=c?Object(l.jsx)("span",{style:{textDecoration:"line-through"},children:n}):Object(l.jsx)("span",{children:n});return Object(l.jsxs)("li",{className:"Todo-noBullet",children:[Object(l.jsx)("label",{htmlFor:t}),Object(l.jsx)("input",{id:t,name:"checkbox",type:"checkbox",onChange:function(e){var t=e.target.id;a({isChecked:c=!c,id:t,task:n})},className:"Todo-input"}),o]})}),O=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=function(e){a((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{addTodo:function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))}}),Object(l.jsx)("button",{className:"TodoList-remove",onClick:function(){a((function(e){return e.filter((function(e){return!e.isChecked}))}))},children:"Remove Task"}),Object(l.jsx)("ul",{className:"TodoList-ul",children:n.map((function(e){var t=e.id,n=e.task,c=e.isChecked;return Object(l.jsx)(h,{id:t,task:n,isChecked:c,updateCheck:o},t)}))})]})};var f=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"Honey-Do List"})}),Object(l.jsx)("main",{className:"App-main",children:Object(l.jsx)(O,{})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),m()}],[[20,1,2]]]);
//# sourceMappingURL=main.14eb50cc.chunk.js.map