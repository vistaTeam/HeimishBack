(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[162],{2367:function(e,t,a){"use strict";a.r(t);var i=a(128),n=a(208),l=a(0),r=a.n(l),s=a(27),m=[{id:"full-width",title:"Full Width",type:"item",url:"/ui/page-layouts/simple/full-width"},{id:"left-sidebar",title:"Left Sidebar",type:"item",url:"/ui/page-layouts/simple/left-sidebar"},{id:"left-sidebar-2",title:"Left Sidebar 2",type:"item",url:"/ui/page-layouts/simple/left-sidebar-2"},{id:"left-sidebar-3",title:"Left Sidebar 3",type:"item",url:"/ui/page-layouts/simple/left-sidebar-3"},{id:"right-sidebar",title:"Right Sidebar",type:"item",url:"/ui/page-layouts/simple/right-sidebar"},{id:"right-sidebar-2",title:"Right Sidebar 2",type:"item",url:"/ui/page-layouts/simple/right-sidebar-2"},{id:"right-sidebar-3",title:"Right Sidebar 3",type:"item",url:"/ui/page-layouts/simple/right-sidebar-3"},{id:"tabbed",title:"Tabbed",type:"item",url:"/ui/page-layouts/simple/tabbed"}];t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(n.a,{variant:"h4",className:"mb-24"},"FusePageSimple"),r.a.createElement(n.a,{className:"mb-16",component:"p"},r.a.createElement("code",null,"FusePageSimple")," is the simple page layout component of the Fuse React."),r.a.createElement(n.a,{className:"mb-16",component:"p"},"The component has layout areas to easily enter the contents of the app."),r.a.createElement(n.a,{className:"mb-16",component:"p"},"You can extend the class names injected by the classes property"),r.a.createElement(i.a,{component:"pre",className:"language-jsx"},"\n                                   <FusePageSimple\n                                        classes={{\n                                            root: classes.layoutRoot\n                                        }}\n                                        header={\n                                            Header\n                                        }\n                                        contentToolbar={\n                                            Content Toolbar\n                                        }\n                                        content={\n                                            Content\n                                        }\n                                        leftSidebarHeader={\n                                            Left Sidebar Header\n                                        }\n                                        leftSidebarContent={\n                                            Left Sidebar Content\n                                        }\n                                        rightSidebarHeader={\n                                            Right Sidebar Header\n                                        }\n                                        rightSidebarContent={\n                                            Right Sidebar Content\n                                        }\n                                        ref={pageLayout}\n                                        innerScroll\n                                        sidebarInner\n                                    />\n                                "),r.a.createElement(n.a,{className:"mt-32 mb-8",variant:"h5"},"Demos"),r.a.createElement("ul",null,m.map((function(e){return r.a.createElement("li",{key:e.url,className:"mb-8"},r.a.createElement(s.a,{to:e.url},e.title))}))))}}}]);