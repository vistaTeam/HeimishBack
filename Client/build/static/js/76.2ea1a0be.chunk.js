(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[76],{1176:function(e,a,t){"use strict";t.r(a);var n=t(411);t.d(a,"default",(function(){return n.a}))},1249:function(e,a,t){"use strict";var n=t(633);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=c.default.memo(c.default.forwardRef((function(a,t){return c.default.createElement(l.default,(0,r.default)({ref:t},a),e)})));0;return t.muiName=l.default.muiName,t};var r=n(t(140)),c=n(t(0)),l=n(t(1176))},1288:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(4),t(2)),o=t(8),s=c.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.dividers,i=void 0!==s&&s,u=Object(r.a)(e,["classes","className","dividers"]);return c.createElement("div",Object(n.a)({className:Object(l.default)(t.root,o,i&&t.dividers),ref:a},u))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},1294:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(4),t(2)),o=t(8),s=c.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,s=e.classes,i=e.className,u=Object(r.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(n.a)({className:Object(l.default)(s.root,i,!o&&s.spacing),ref:a},u))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},1300:function(e,a,t){"use strict";var n=t(633);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1249)).default)(r.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");a.default=c},1301:function(e,a,t){"use strict";var n=t(633);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1249)).default)(r.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");a.default=c},1391:function(e,a,t){"use strict";var n=t(633);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1249)).default)(r.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");a.default=c},1392:function(e,a,t){"use strict";var n=t(633);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1249)).default)(r.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");a.default=c},1514:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(4),t(2)),o=t(8),s=c.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.component,i=void 0===s?"div":s,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(i,Object(n.a)({ref:a,className:Object(l.default)(t.root,o)},u))}));a.a=Object(o.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(s)},2524:function(e,a,t){"use strict";t.r(a);var n,r=t(172),c=t(241),l=t(0),o=t.n(l),s=t(6),i=t(46),u=t(141),m=t(9),d=t(247),p=t(1222),f=t(1246),b=t(1220),v=t(1208),E=t(1294),g=t(1288),h=t(1213),x=t(1158),N=t(1234),j=t(1223),w=t(208),y=t(30),O=t(28),C=t.n(O),k=t(52),S=t(21),P=t(48),A=t.n(P),T=Object(S.b)("contactsApp/user/getUserData",Object(k.a)(C.a.mark((function e(){var a,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/api/contacts-app/user");case 2:return a=e.sent,e.next=5,a.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))),I=Object(S.d)({name:"contactsApp/user",initialState:{},reducers:{},extraReducers:Object(y.a)({},T.fulfilled,(function(e,a){return a.payload}))}).reducer,R=Object(S.b)("contactsApp/contacts/getContacts",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getState,a=a||n().contactsApp.contacts.routeParams,e.next=4,A.a.get("/api/contacts-app/contacts",{params:a});case 4:return r=e.sent,e.next=7,r.data;case 7:return c=e.sent,e.abrupt("return",{data:c,routeParams:a});case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),D=Object(S.b)("contactsApp/contacts/addContact",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/add-contact",{contact:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(R()),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),M=Object(S.b)("contactsApp/contacts/updateContact",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/update-contact",{contact:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(R()),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),L=Object(S.b)("contactsApp/contacts/removeContact",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/remove-contact",{contactId:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(R()),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),W=Object(S.b)("contactsApp/contacts/removeContacts",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/remove-contacts",{contactIds:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(R()),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),_=Object(S.b)("contactsApp/contacts/toggleStarredContact",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/toggle-starred-contact",{contactId:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(T()),n(R()),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),H=(Object(S.b)("contactsApp/contacts/toggleStarredContacts",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/toggle-starred-contacts",{contactIds:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(T()),n(R()),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),Object(S.b)("contactsApp/contacts/setContactsStarred",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/set-contacts-starred",{contactIds:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(T()),n(R()),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}())),F=Object(S.b)("contactsApp/contacts/setContactsUnstarred",function(){var e=Object(k.a)(C.a.mark((function e(a,t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,A.a.post("/api/contacts-app/set-contacts-unstarred",{contactIds:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,n(T()),n(R()),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),z=Object(S.c)({}),B=z.getSelectors((function(e){return e.contactsApp.contacts})),U=B.selectAll,G=(B.selectById,Object(S.d)({name:"contactsApp/contacts",initialState:z.getInitialState({searchText:"",routeParams:{},contactDialog:{type:"new",props:{open:!1},data:null}}),reducers:{setContactsSearchText:{reducer:function(e,a){e.searchText=a.payload},prepare:function(e){return{payload:e.target.value||""}}},openNewContactDialog:function(e,a){e.contactDialog={type:"new",props:{open:!0},data:null}},closeNewContactDialog:function(e,a){e.contactDialog={type:"new",props:{open:!1},data:null}},openEditContactDialog:function(e,a){e.contactDialog={type:"edit",props:{open:!0},data:a.payload}},closeEditContactDialog:function(e,a){e.contactDialog={type:"edit",props:{open:!1},data:null}}},extraReducers:(n={},Object(y.a)(n,M.fulfilled,z.upsertOne),Object(y.a)(n,D.fulfilled,z.addOne),Object(y.a)(n,R.fulfilled,(function(e,a){var t=a.payload,n=t.data,r=t.routeParams;z.setAll(e,n),e.routeParams=r,e.searchText=""})),n)})),J=G.actions,q=J.setContactsSearchText,K=J.openNewContactDialog,V=J.closeNewContactDialog,X=J.openEditContactDialog,Y=J.closeEditContactDialog,Q=G.reducer,Z={id:"",name:"",lastName:"",avatar:"assets/images/avatars/profile.jpg",nickname:"",company:"",jobTitle:"",email:"",phone:"",address:"",birthday:"",notes:""};var $=function(e){var a=Object(s.c)(),t=Object(s.d)((function(e){return e.contactsApp.contacts.contactDialog})),n=Object(u.c)(Z),r=n.form,c=n.handleChange,i=n.setForm,y=Object(l.useCallback)((function(){"edit"===t.type&&t.data&&i(Object(m.a)({},t.data)),"new"===t.type&&i(Object(m.a)(Object(m.a)(Object(m.a)({},Z),t.data),{},{id:d.a.generateGUID()}))}),[t.data,t.type,i]);function O(){return"edit"===t.type?a(Y()):a(V())}function C(){return r.name.length>0}function k(e){e.preventDefault(),"new"===t.type?a(D(r)):a(M(r)),O()}return Object(l.useEffect)((function(){t.props.open&&y()}),[t.props.open,y]),o.a.createElement(v.a,Object.assign({classes:{paper:"m-24 rounded-8"}},t.props,{onClose:O,fullWidth:!0,maxWidth:"xs"}),o.a.createElement(p.a,{position:"static",className:"shadow-md"},o.a.createElement(j.a,{className:"flex w-full"},o.a.createElement(w.a,{variant:"subtitle1",color:"inherit"},"new"===t.type?"New Contact":"Edit Contact")),o.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},o.a.createElement(f.a,{className:"w-96 h-96",alt:"contact avatar",src:r.avatar}),"edit"===t.type&&o.a.createElement(w.a,{variant:"h6",color:"inherit",className:"pt-8"},r.name))),o.a.createElement("form",{noValidate:!0,onSubmit:k,className:"flex flex-col md:overflow-hidden"},o.a.createElement(g.a,{classes:{root:"p-24"}},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"account_circle")),o.a.createElement(N.a,{className:"mb-24",label:"Name",autoFocus:!0,id:"name",name:"name",value:r.name,onChange:c,variant:"outlined",required:!0,fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"}),o.a.createElement(N.a,{className:"mb-24",label:"Last name",id:"lastName",name:"lastName",value:r.lastName,onChange:c,variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"star")),o.a.createElement(N.a,{className:"mb-24",label:"Nickname",id:"nickname",name:"nickname",value:r.nickname,onChange:c,variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"phone")),o.a.createElement(N.a,{className:"mb-24",label:"Phone",id:"phone",name:"phone",value:r.phone,onChange:c,variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"email")),o.a.createElement(N.a,{className:"mb-24",label:"Email",id:"email",name:"email",value:r.email,onChange:c,variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"domain")),o.a.createElement(N.a,{className:"mb-24",label:"Company",id:"company",name:"company",value:r.company,onChange:c,variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"work")),o.a.createElement(N.a,{className:"mb-24",label:"Job title",id:"jobTitle",name:"jobTitle",value:r.jobTitle,onChange:c,variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"cake")),o.a.createElement(N.a,{className:"mb-24",id:"birthday",label:"Birthday",type:"date",value:r.birthday,onChange:c,InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"home")),o.a.createElement(N.a,{className:"mb-24",label:"Address",id:"address",name:"address",value:r.address,onChange:c,variant:"outlined",fullWidth:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(h.a,{color:"action"},"note")),o.a.createElement(N.a,{className:"mb-24",label:"Notes",id:"notes",name:"notes",value:r.notes,onChange:c,variant:"outlined",multiline:!0,rows:5,fullWidth:!0}))),"new"===t.type?o.a.createElement(E.a,{className:"justify-between p-8"},o.a.createElement("div",{className:"px-16"},o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:k,type:"submit",disabled:!C()},"Add"))):o.a.createElement(E.a,{className:"justify-between p-8"},o.a.createElement("div",{className:"px-16"},o.a.createElement(b.a,{variant:"contained",color:"primary",type:"submit",onClick:k,disabled:!C()},"Save")),o.a.createElement(x.a,{onClick:function(){a(L(r.id)),O()}},o.a.createElement(h.a,null,"delete")))))},ee=t(115),ae=t(1243),te=t(630),ne=t(207),re=t(1221),ce=t(31);var le=function(e){var a=Object(s.c)(),t=Object(s.d)((function(e){return e.contactsApp.contacts.searchText})),n=Object(s.d)(ce.e);return o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-4 sm:p-24"},o.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},o.a.createElement(ae.a,{lgUp:!0},o.a.createElement(x.a,{onClick:function(a){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},o.a.createElement(h.a,null,"menu"))),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(ee.a,{animation:"transition.expandIn",delay:300},o.a.createElement(h.a,{className:"text-32"},"account_box")),o.a.createElement(ee.a,{animation:"transition.slideLeftIn",delay:300},o.a.createElement(w.a,{variant:"h6",className:"mx-12 hidden sm:flex"},"Contacts")))),o.a.createElement("div",{className:"flex flex-1 items-center justify-center px-8 sm:px-12"},o.a.createElement(re.a,{theme:n},o.a.createElement(ee.a,{animation:"transition.slideLeftIn",delay:300},o.a.createElement(ne.a,{className:"flex p-4 items-center w-full max-w-512 h-48 px-8 py-4 rounded-8 shadow"},o.a.createElement(h.a,{color:"action"},"search"),o.a.createElement(te.a,{placeholder:"Search for anything",className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a(q(e))}}))))))},oe=t(14),se=t(29),ie=t(1235),ue=t(1226),me=t(616),de=t(1215),pe=t(1162);var fe=function(e){var a=Object(s.c)(),t=e.selectedContactIds,n=Object(l.useState)(null),r=Object(oe.a)(n,2),c=r[0],i=r[1];function u(){i(null)}return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{className:"p-0","aria-owns":c?"selectedContactsMenu":null,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},o.a.createElement(h.a,null,"more_horiz")),o.a.createElement(me.a,{id:"selectedContactsMenu",anchorEl:c,open:Boolean(c),onClose:u},o.a.createElement(pe.a,null,o.a.createElement(de.a,{onClick:function(){a(W(t)),u()}},o.a.createElement(ie.a,{className:"min-w-40"},o.a.createElement(h.a,null,"delete")),o.a.createElement(ue.a,{primary:"Remove"})),o.a.createElement(de.a,{onClick:function(){a(H(t)),u()}},o.a.createElement(ie.a,{className:"min-w-40"},o.a.createElement(h.a,null,"star")),o.a.createElement(ue.a,{primary:"Starred"})),o.a.createElement(de.a,{onClick:function(){a(F(t)),u()}},o.a.createElement(ie.a,{className:"min-w-40"},o.a.createElement(h.a,null,"star_border")),o.a.createElement(ue.a,{primary:"Unstarred"})))))},be=t(13),ve=t(171),Ee=t(1242),ge=t(1315),he=t(1318),xe=t(1302),Ne=t(1514),je=t(1316),we=t(2335),ye=t(1317),Oe=t(2533),Ce=t(1439),ke=t(2),Se=t(1392),Pe=t.n(Se),Ae=t(1301),Te=t.n(Ae),Ie=t(1300),Re=t.n(Ie),De=t(1391),Me=t.n(De),Le=t(42),We=function(e){var a=Object(Le.a)(),t=e.count,n=e.page,r=e.rowsPerPage,c=e.onChangePage;return o.a.createElement("div",{className:"flex-shrink-0 px-12 overflow-hidden"},o.a.createElement(x.a,{onClick:function(e){c(e,0)},disabled:0===n,"aria-label":"first page"},"rtl"===a.direction?o.a.createElement(Me.a,null):o.a.createElement(Pe.a,null)),o.a.createElement(x.a,{onClick:function(e){c(e,n-1)},disabled:0===n,"aria-label":"previous page"},"rtl"===a.direction?o.a.createElement(Re.a,null):o.a.createElement(Te.a,null)),o.a.createElement(x.a,{onClick:function(e){c(e,n+1)},disabled:n>=Math.ceil(t/r)-1,"aria-label":"next page"},"rtl"===a.direction?o.a.createElement(Te.a,null):o.a.createElement(Re.a,null)),o.a.createElement(x.a,{onClick:function(e){c(e,Math.max(0,Math.ceil(t/r)-1))},disabled:n>=Math.ceil(t/r)-1,"aria-label":"last page"},"rtl"===a.direction?o.a.createElement(Pe.a,null):o.a.createElement(Me.a,null)))},_e=o.a.forwardRef((function(e,a){var t=e.indeterminate,n=Object(ve.a)(e,["indeterminate"]),r=o.a.useRef(),c=a||r;return o.a.useEffect((function(){c.current.indeterminate=t}),[c,t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ee.a,Object.assign({ref:c},n)))})),He=function(e){var a=e.columns,t=e.data,n=e.onRowClick,r=Object(Ce.useTable)({columns:a,data:t,autoResetPage:!0},Ce.useGlobalFilter,Ce.useSortBy,Ce.usePagination,Ce.useRowSelect,(function(e){e.allColumns.push((function(e){return[{id:"selection",sortable:!1,Header:function(e){var a=e.getToggleAllRowsSelectedProps;return o.a.createElement("div",null,o.a.createElement(_e,a()))},Cell:function(e){var a=e.row;return o.a.createElement("div",null,o.a.createElement(_e,Object.assign({},a.getToggleRowSelectedProps(),{onClick:function(e){return e.stopPropagation()}})))}}].concat(Object(be.a)(e))}))})),c=r.getTableProps,l=r.headerGroups,s=r.prepareRow,i=r.page,u=r.gotoPage,m=r.setPageSize,d=r.state,p=d.pageIndex,f=d.pageSize;return o.a.createElement("div",{className:"flex flex-col min-h-full sm:border-1 sm:rounded-16 overflow-hidden"},o.a.createElement(Ne.a,{className:"flex flex-1"},o.a.createElement(ge.a,Object.assign({},c(),{stickyHeader:!0}),o.a.createElement(je.a,null,l.map((function(e){return o.a.createElement(ye.a,e.getHeaderGroupProps(),e.headers.map((function(e){return o.a.createElement(xe.a,Object.assign({className:"whitespace-nowrap p-4 md:p-12"},e.sortable?e.getHeaderProps(e.getSortByToggleProps()):e.getHeaderProps()),e.render("Header"),e.sortable?o.a.createElement(Oe.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null)})))}))),o.a.createElement(he.a,null,i.map((function(e,a){return s(e),o.a.createElement(ye.a,Object.assign({},e.getRowProps(),{onClick:function(a){return n(a,e)},className:"truncate cursor-pointer"}),e.cells.map((function(e){return o.a.createElement(xe.a,Object.assign({},e.getCellProps(),{className:Object(ke.default)("p-4 md:p-12",e.column.className)}),e.render("Cell"))})))}))))),o.a.createElement(we.a,{component:"div",classes:{root:"flex-shrink-0 border-t-1"},rowsPerPageOptions:[5,10,25,{label:"All",value:t.length+1}],colSpan:5,count:t.length,rowsPerPage:f,page:p,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!1},onChangePage:function(e,a){u(a)},onChangeRowsPerPage:function(e){m(Number(e.target.value))},ActionsComponent:We}))};var Fe=function(e){var a=Object(s.c)(),t=Object(s.d)(U),n=Object(s.d)((function(e){return e.contactsApp.contacts.searchText})),r=Object(s.d)((function(e){return e.contactsApp.user})),c=Object(l.useState)(null),i=Object(oe.a)(c,2),u=i[0],m=i[1],d=o.a.useMemo((function(){return[{Header:function(e){var a=e.selectedFlatRows,t=a.map((function(e){return e.original.id}));return a.length>0&&o.a.createElement(fe,{selectedContactIds:t})},accessor:"avatar",Cell:function(e){var a=e.row;return o.a.createElement(f.a,{className:"mx-8",alt:a.original.name,src:a.original.avatar})},className:"justify-center",width:64,sortable:!1},{Header:"First Name",accessor:"name",className:"font-bold",sortable:!0},{Header:"Last Name",accessor:"lastName",className:"font-bold",sortable:!0},{Header:"Company",accessor:"company",sortable:!0},{Header:"Job Title",accessor:"jobTitle",sortable:!0},{Header:"Email",accessor:"email",sortable:!0},{Header:"Phone",accessor:"phone",sortable:!0},{id:"action",width:128,sortable:!1,Cell:function(e){var t=e.row;return o.a.createElement("div",{className:"flex items-center"},o.a.createElement(x.a,{onClick:function(e){e.stopPropagation(),a(_(t.original.id))}},r.starred&&r.starred.includes(t.original.id)?o.a.createElement(h.a,null,"star"):o.a.createElement(h.a,null,"star_border")),o.a.createElement(x.a,{onClick:function(e){e.stopPropagation(),a(L(t.original.id))}},o.a.createElement(h.a,null,"delete")))}}]}),[a,r.starred]);return Object(l.useEffect)((function(){var e;t&&m(0===(e=n).length?t:se.a.filterArrayByString(t,e))}),[t,n]),u?0===u.length?o.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},o.a.createElement(w.a,{color:"textSecondary",variant:"h5"},"There are no contacts!")):o.a.createElement(ee.a,{animation:"transition.slideUpIn",delay:300},o.a.createElement(He,{columns:d,data:u,onRowClick:function(e,t){t&&a(X(t.original))}})):null},ze=t(100),Be=t(1230),Ue=t(1163),Ge=t(1164),Je=t(1211),qe=Object(Je.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}}}}));var Ke=function(e){var a=Object(s.d)((function(e){return e.contactsApp.user})),t=Object(s.c)(),n=qe(e);return o.a.createElement("div",{className:"p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4"},o.a.createElement(ee.a,{animation:"transition.slideLeftIn",delay:200},o.a.createElement(ne.a,{className:"rounded-0 shadow-none lg:rounded-8 lg:shadow"},o.a.createElement("div",{className:"p-24 flex items-center"},o.a.createElement(f.a,{alt:a.name,src:a.avatar}),o.a.createElement(w.a,{className:"mx-12"},a.name)),o.a.createElement(Be.a,null),o.a.createElement("div",{className:"p-24"},o.a.createElement(b.a,{variant:"contained",color:"primary",className:"w-full",onClick:function(e){return t(K())}},"New Contact")),o.a.createElement(Ue.a,{className:"pt-0"},o.a.createElement(Ge.a,{button:!0,component:ze.a,to:"/apps/contacts/all",activeClassName:"active",className:n.listItem},o.a.createElement(h.a,{className:"list-item-icon text-16",color:"action"},"people"),o.a.createElement(ue.a,{className:"truncate",primary:"All contacts",disableTypography:!0})),o.a.createElement(Ge.a,{button:!0,component:ze.a,to:"/apps/contacts/frequent",activeClassName:"active",className:n.listItem},o.a.createElement(h.a,{className:"list-item-icon text-16",color:"action"},"restore"),o.a.createElement(ue.a,{className:"truncate",primary:"Frequently contacted",disableTypography:!0})),o.a.createElement(Ge.a,{button:!0,component:ze.a,to:"/apps/contacts/starred",activeClassName:"active",className:n.listItem},o.a.createElement(h.a,{className:"list-item-icon text-16",color:"action"},"star"),o.a.createElement(ue.a,{className:"truncate",primary:"Starred contacts",disableTypography:!0}))))))},Ve=t(112),Xe=Object(Ve.c)({contacts:Q,user:I});a.default=Object(c.a)("contactsApp",Xe)((function(e){var a=Object(s.c)(),t=Object(l.useRef)(null),n=Object(i.i)();return Object(u.b)((function(){a(R(n)),a(T())}),[a,n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{classes:{contentWrapper:"p-0 sm:p-24 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136",wrapper:"min-h-0"},header:o.a.createElement(le,{pageLayout:t}),content:o.a.createElement(Fe,null),leftSidebarContent:o.a.createElement(Ke,null),sidebarInner:!0,ref:t,innerScroll:!0}),o.a.createElement($,null))}))}}]);