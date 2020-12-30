(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[137],{1419:function(e,t,a){"use strict";a.r(t),t.default="const settingsConfig = {\n\tlayout: {\n\t\tstyle: 'layout1', // layout-1 layout-2 layout-3\n\t\tconfig: {} // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js\n\t},\n\tcustomScrollbars: false,\n\tanimations: true,\n\tdirection: 'rtl', // rtl, ltr\n\ttheme: {\n\t\tmain: 'light5',\n\t\tnavbar: 'mainThemeLight',\n\t\ttoolbar: 'mainThemeLight',\n\t\tfooter: 'mainThemeDark'\n\t}\n};\n\nexport default settingsConfig;\n"},2457:function(e,t,a){"use strict";a.r(t);var n=a(128),l=a(208),r=a(0),o=a.n(r);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{variant:"h4",className:"mb-24"},"RTL Support"),o.a.createElement(l.a,{className:"mb-16",component:"p"},"Fuse React supports Right-to-left languages such as Arabic, Persian or Hebrew, etc."),o.a.createElement(l.a,{className:"mb-8",variant:"h5"},"Development"),o.a.createElement(l.a,{className:"mb-16",component:"p"},"There are two plugins"," ",o.a.createElement("a",{href:"https://github.com/RonMelkhior/tailwindcss-dir",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("code",null,"tailwindcss-dir"))," ","and"," ",o.a.createElement("a",{href:"https://github.com/alitaheri/jss-rtl",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("code",null,"jss-rtl"))," ","that we use to develop RTL support of the Fuse React."),o.a.createElement(l.a,{className:"mb-16",component:"p"},o.a.createElement("a",{href:"https://github.com/alitaheri/jss-rtl",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("code",null,"jss-rtl"))," ","enables right-to-left support by flipping every rule of the jss styles on the x-axis. You can write the application left-to-right and then turn it into right-to-left using this plugin. Or you can start right-to-left and turn it into left-to-right."),o.a.createElement(l.a,{className:"mb-16",component:"p"},o.a.createElement("a",{href:"https://github.com/RonMelkhior/tailwindcss-dir",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("code",null,"tailwindcss-dir"))," ","adds a custom direction variant to your tailwind project, letting you have custom CSS rules for LTR and RTL layouts. For example:"),o.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},'\n                            <div class="text-green text-2xl ltr:pl-4 rtl:pr-4">\n                                Hello, world.\n                            </div>\n                        '),o.a.createElement(l.a,{className:"mb-8",variant:"h5"},"Configuration"),o.a.createElement(l.a,{className:"mb-16",component:"p"},"To change the default direction of the Fuse React, you need to change ",o.a.createElement("code",null,"direction"),"setting in the file ",o.a.createElement("code",null,"src/app/fuse-configs/settingsConfig.js")),o.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},a(1419)),o.a.createElement(l.a,{className:"mb-8",variant:"h5"},"Dynamically Direction Changing"),o.a.createElement(l.a,{className:"mb-16",component:"p"},"If you need to change theme direction dynamically, for example when you need to change LTR to RTL language, you need dispatch an action as below:"),o.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},"\n                            dispatch(setDefaultSettings({direction: 'rtl'}));\n                        "),o.a.createElement(l.a,{className:"mb-16",component:"p"},"Checkout example usage at",o.a.createElement("code",null,"src/app/fuse-layouts/shared-components/LanguageSwitcher.js")))}}}]);