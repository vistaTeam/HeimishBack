(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[191],{2494:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(115),c=t(172),r=t(1220),s=t(1213),m=t(630),i=t(207),o=t(42),u=t(1221),f=t(208),x=t(48),d=t.n(x),E=t(0),p=t.n(E);a.default=function(){var e=Object(o.a)(),a=Object(E.useState)(""),t=Object(n.a)(a,2),x=t[0],h=t[1],b=Object(E.useState)(null),v=Object(n.a)(b,2),w=v[0],N=v[1],j=Object(E.useState)(null),g=Object(n.a)(j,2),y=g[0],O=g[1];function S(e){h(e.target.value)}return Object(E.useEffect)((function(){d.a.get("/api/icons").then((function(e){N(e.data)}))}),[]),Object(E.useEffect)((function(){O(x.length>0?w.filter((function(e){if(e.name.includes(x))return!0;for(var a=0;a<e.tags.length;a+=1){if(e.tags[a].includes(x))return!0}return!1})):w)}),[w,x]),p.a.createElement(c.a,{classes:{content:"flex"},header:p.a.createElement("div",{className:"flex flex-wrap flex-1 items-center justify-between p-12 md:p-24"},p.a.createElement("div",{className:"flex flex-col w-full sm:w-auto"},p.a.createElement("div",{className:"flex items-center mb-4"},p.a.createElement(s.a,{className:"text-18",color:"action"},"home"),p.a.createElement(s.a,{className:"text-16",color:"action"},"chevron_right"),p.a.createElement(f.a,{color:"textSecondary"},"User Interface")),p.a.createElement(l.a,null,p.a.createElement(f.a,{variant:"h6",className:"text-18 sm:text-20"},"Icons"))),p.a.createElement("div",{className:"flex flex-1 items-center justify-center w-full sm:w-auto sm:px-12"},p.a.createElement(u.a,{theme:e},p.a.createElement(i.a,{className:"flex items-center min-w-full sm:min-w-0 w-full max-w-512 px-8 py-4 rounded-8 shdaow"},p.a.createElement(s.a,{color:"action"},"search"),Object(E.useMemo)((function(){return p.a.createElement(m.a,{placeholder:"Search...",className:"flex flex-1 px-8",disableUnderline:!0,fullWidth:!0,value:x,onChange:S,inputProps:{"aria-label":"Search"}})}),[x])))),p.a.createElement(r.a,{className:"normal-case ml-8 sm:ml-0",variant:"outlined",component:"a",href:"https://material.io/icons/",target:"_blank",role:"button",color:"default"},p.a.createElement(s.a,null,"link"),p.a.createElement("span",{className:"mx-4 hidden sm:flex"},"Reference"))),content:p.a.createElement("div",{className:"py-24 max-w-2xl mx-auto"},Object(E.useMemo)((function(){return y&&(y.length>0?p.a.createElement(l.a,{animation:"transition.slideUpBigIn",delay:300},p.a.createElement("div",{className:"flex flex-wrap justify-center"},y.map((function(e){return p.a.createElement("div",{className:"w-1/3 h-128 p-8 sm:w-160 sm:p-16 flex flex-col items-center justify-center",key:e.name},p.a.createElement(s.a,{className:"text-48",color:"action"},e.name),p.a.createElement(f.a,{variant:"caption",className:"mt-4"},e.name))})))):p.a.createElement(l.a,{animation:"transition.slideUpBigIn",delay:300},p.a.createElement("div",{className:"flex flex-auto items-center justify-center w-full h-full"},p.a.createElement(f.a,{color:"textSecondary",variant:"h5"},"No results!"))))}),[y]))})}}}]);