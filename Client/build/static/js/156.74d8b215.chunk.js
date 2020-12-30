(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[156],{2374:function(e,a,t){"use strict";t.r(a);var n=t(14),c=t(115),l=t(128),r=t(1231),s=t(1165),i=t(630),o=t(1171),m=t(1215),u=t(1174),f=t(1211),p=t(208),d=t(0),E=t.n(d),b=["fade","flipX","flipY","flipBounceX","flipBounceY","swoop","whirl","shrink","expand","bounce","bounceUp","bounceDown","bounceLeft","bounceRight","slideUp","slideDown","slideLeft","slideRight","slideUpBig","slideDownBig","slideLeftBig","slideRightBig","perspectiveUp","perspectiveDown","perspectiveLeft","perspectiveRight"],g={translateX:[0,"100%"],opacity:[1,0]},h=Object(f.a)({layoutRoot:{},box:{width:128,height:128,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:16}});a.default=function(){var e=h(),a=Object(d.useState)("fade"),t=Object(n.a)(a,2),f=t[0],y=t[1],v=Object(d.useState)(g),N=Object(n.a)(v,2),w=N[0],x=N[1],j=Object(d.useRef)();return Object(d.useEffect)((function(){return j.current=setInterval((function(){x(w?null:g)}),1e3),function(){clearInterval(j.current)}})),E.a.createElement(E.a.Fragment,null,E.a.createElement(p.a,{variant:"h4",className:"mb-24"},"Fuse Animate"),E.a.createElement(p.a,{className:"mb-16",component:"p"},E.a.createElement("code",null,"FuseAnimate")," is a container component that uses ",E.a.createElement("code",null,"VelocityComponent")," of"," ",E.a.createElement("code",null,"velocity-react")," library."),E.a.createElement(p.a,{className:"mt-32 mb-8",variant:"h5"},"Predefined Effects Usage"),E.a.createElement(p.a,{className:"mb-16",component:"p"},"You can use predefined animation effects."),E.a.createElement(l.a,{component:"pre",className:"language-jsx"},'\n                                <FuseAnimate\n                                    animation="transition.'.concat(f,'In"\n                                    duration={400}\n                                    delay={400}\n                                >\n                                     <Card className={classes.box}>\n                                        <Typography>\n                                        {selectedEffect}\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             ')),E.a.createElement("div",{className:"flex flex-wrap p-48"},E.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},E.a.createElement(s.a,{className:"w-256"},E.a.createElement(o.a,{htmlFor:"effect-helper"},"Select Effect"),E.a.createElement(u.a,{value:f,onChange:function(e){y(e.target.value)},input:E.a.createElement(i.a,{name:"effect",id:"effect-helper"})},b.map((function(e){return E.a.createElement(m.a,{key:e,value:e},"transition.",e,"In")}))))),E.a.createElement("div",{className:"flex w-full sm:w-1/2 items-center justify-center"},E.a.createElement(c.a,{animation:f&&"transition.".concat(f,"In"),duration:400,delay:400},E.a.createElement(r.a,{className:e.box},E.a.createElement(p.a,null,f))))),E.a.createElement(p.a,{className:"mt-32 mb-8",variant:"h5"},"Custom Effects Usage"),E.a.createElement(p.a,{className:"mb-16",component:"p"},"You can create custom effects."),E.a.createElement(l.a,{component:"pre",className:"language-jsx"},"\n                                <FuseAnimate\n                                    animation={{\n                                        translateX: [0, '100%'],\n                                        opacity   : [1, 0]\n                                    }}\n                                    duration={400}\n                                    delay={400}\n                                >\n                                    <Card className={classes.box}>\n                                        <Typography>\n                                            Slide left and fade in\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             "),E.a.createElement("div",{className:"p-24 flex items-center justify-center"},E.a.createElement(c.a,{animation:w,duration:400,delay:400},E.a.createElement(r.a,{className:e.box},E.a.createElement(p.a,null,"Slide left and fade in")))),E.a.createElement(p.a,{className:"mb-16",component:"p"},"For more information checkout the",E.a.createElement("a",{href:"https://github.com/google-fabric/velocity-react",target:"_blank",rel:"noopener noreferrer",className:"ml-8"},"velocity-react"),"."))}}}]);