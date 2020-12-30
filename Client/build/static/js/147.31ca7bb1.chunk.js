(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[147],{2464:function(e,n,a){"use strict";a.r(n);var t=a(128),o=a(208),r=a(0),l=a.n(r);n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{variant:"h4",className:"mb-24"},"Routing"),l.a.createElement(o.a,{className:"mb-16",component:"p"},"Fuse React routing system based on"," ",l.a.createElement("a",{href:"https://reacttraining.com/react-router/",target:"_blank",rel:"noopener noreferrer"},"react-router")," ","and its package"," ",l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config",target:"_blank",rel:"noopener noreferrer"},"react-router-config"),"."),l.a.createElement(o.a,{className:"mb-16",component:"p"},"For the modular approach and route based Fuse settings, we are using config files and generate routes from those files."),l.a.createElement(o.a,{className:"mb-16",component:"p"},"For example, have a look at the code below",l.a.createElement("code",null,"MailAppConfig.js"),". You can override all settings for a particular route as"," ",l.a.createElement("code",null,"/apps/mail")," for this example."),l.a.createElement(t.a,{component:"pre",className:"language-jsx mb-32"},"\n                            import MailApp from './MailApp';\n                            import React from 'react';\n                            import {Redirect} from 'react-router-dom';\n\n                            export const MailAppConfig = {\n                                settings: {\n                                    layout          : {\n                                        style : 'layout1',\n                                        config: {\n                                            scroll : 'content',\n                                            navbar : {\n                                                display : true,\n                                                folded  : false,\n                                                position: 'left'\n                                            },\n                                            toolbar: {\n                                                display : true,\n                                                style   : 'fixed',\n                                                position: 'below'\n                                            },\n                                            footer : {\n                                                display : true,\n                                                style   : 'fixed',\n                                                position: 'below'\n                                            },\n                                            mode   : 'fullwidth'\n                                        }\n                                    },\n                                    customScrollbars: true,\n                                    theme           : {\n                                        main   : 'default',\n                                        navbar : 'mainThemeDark',\n                                        toolbar: 'mainThemeLight',\n                                        footer : 'mainThemeDark'\n                                    }\n                                },\n                                routes  : [\n                                    {\n                                        path     : '/apps/mail/label/:labelHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail/filter/:filterHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail/:folderHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail',\n                                        component: () => <Redirect to=\"/apps/mail/inbox\"/>\n                                    }\n                                ]\n                            };\n                            "),l.a.createElement(o.a,{className:"mb-16",component:"p"},"Then we import and generate routes from that file in ",l.a.createElement("code",null,"fuse-configs/routesConfig")),l.a.createElement(t.a,{component:"pre",className:"language-jsx mb-32"},"\n                                import {appsRoutes} from 'app/main/apps/mail/MailAppConfig.js';\n                                import FuseUtils from '@fuse/utils';\n                                import {Redirect} from 'react-router-dom';\n                                import React from 'react';\n\n                                const routeConfigs = [\n                                    MailAppConfig\n                                ];\n\n                                export const routes = [\n                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),\n                                    {\n                                        path     : '/',\n                                        component: () => <Redirect to=\"/pages/errors/error-404\"/>\n                                    }\n                                ];\n                            "))}}}]);