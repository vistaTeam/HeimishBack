(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[188],{2491:function(e,a,t){"use strict";t.r(a);var l=t(14),c=t(115),n=t(173),r=t(172),m=t(1220),s=t(192),i=t(193),o=t(1213),p=t(1158),h=t(630),E=t(207),d=t(1211),f=t(42),u=t(1221),x=t(208),N=t(48),b=t.n(N),w=t(2),v=t(0),j=t.n(v),O=Object(d.a)({title:{color:s.a[800]},url:{color:i.a[800]}});a.default=function(){var e=O(),a=Object(f.a)(),t=Object(v.useState)([]),s=Object(l.a)(t,2),i=s[0],d=s[1];return Object(v.useEffect)((function(){b.a.get("/api/search").then((function(e){d(e.data)}))}),[]),j.a.createElement(r.a,{header:j.a.createElement("div",{className:"flex flex-1 items-center p-16 sm:p-24 max-w-md"},j.a.createElement(u.a,{theme:a},j.a.createElement(E.a,{className:"flex items-center h-44 w-full px-16 rounded-8 shadow"},j.a.createElement(h.a,{placeholder:"Search...",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"}}),j.a.createElement(o.a,{color:"action"},"search")))),content:j.a.createElement("div",{className:"p-16 pt-0 sm:p-24 sm:pt-0 max-w-md"},j.a.createElement(c.a,{delay:200},j.a.createElement(x.a,{color:"textSecondary",className:"text-13 mt-12 mb-24"},i.length," results")),j.a.createElement(n.a,{enter:{animation:"transition.slideUpBigIn"}},i.map((function(a){return j.a.createElement("div",{className:"mb-28",key:a.id},j.a.createElement(x.a,{className:Object(w.default)(e.title,"text-18 cursor-pointer")},a.title),j.a.createElement(x.a,{className:Object(w.default)(e.url)},a.url),j.a.createElement(x.a,{className:"text-13"},a.excerpt))}))),j.a.createElement("div",{className:"flex justify-center mt-32"},j.a.createElement("div",{className:"flex item-center"},j.a.createElement(p.a,{className:"w-32"},j.a.createElement(o.a,{className:"text-20"},"ltr"===a.direction?"chevron_left":"chevron_right")),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"1"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"2"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"3"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"4"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"5"),j.a.createElement(p.a,{className:"w-32"},j.a.createElement(o.a,{className:"text-20"},"ltr"===a.direction?"chevron_right":"chevron_left")))))})}}}]);