(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[54],{1251:function(e,n,t){"use strict";t.d(n,"a",(function(){return M}));var a=t(14),l=t(128),i=t(1222),m=t(1231),r=t(1213),o=t(1239),c=t(1240),p=t(2),u=t(0),T=t.n(u),s=t(13),E=t(9),d=t(79),f=t(80),y=t(138),C=t(137),h=t(1154),b=t(632),S=t(1210),g=t(1221),I=t(8),v=t(69),D=t(412),N=t(1252),x=t.n(N),O=Object(h.a)({productionPrefix:"iframe-"}),R=function(e){Object(y.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=n.call.apply(n,[this].concat(l))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(v.b)(Object(E.a)(Object(E.a)({},Object(b.a)()),{},{plugins:[].concat(Object(s.a)(Object(b.a)().plugins),[Object(D.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return T.a.createElement(T.a.Fragment,null,T.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),T.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,a=e.theme;return T.a.createElement(x.a,{head:this.renderHead(),ref:this.handleRef,className:Object(p.default)(t.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?T.a.createElement(S.b,{jss:this.state.jss,generateClassName:O,sheetsManager:this.state.sheetsManager},T.a.createElement(g.a,{theme:a},T.a.cloneElement(n,{container:this.state.container}))):null)}}]),t}(T.a.Component),j=Object(I.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(R);function w(e){var n=Object(u.useState)(e.currentTabIndex),t=Object(a.a)(n,2),s=t[0],E=t[1],d=e.component,f=e.raw,y=e.iframe,C=e.className;return T.a.createElement(m.a,{className:Object(p.default)(C,"shadow")},T.a.createElement(i.a,{position:"static",color:"default",className:"shadow-0"},T.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:s,onChange:function(e,n){E(n)}},d&&T.a.createElement(o.a,{classes:{root:"min-w-64"},icon:T.a.createElement(r.a,null,"remove_red_eye")}),f&&T.a.createElement(o.a,{classes:{root:"min-w-64"},icon:T.a.createElement(r.a,null,"code")}))),T.a.createElement("div",{className:"flex justify-center max-w-full"},T.a.createElement("div",{className:0===s?"flex flex-1 max-w-full":"hidden"},d&&(y?T.a.createElement(j,null,T.a.createElement(d,null)):T.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},T.a.createElement(d,null)))),T.a.createElement("div",{className:1===s?"flex flex-1":"hidden"},f&&T.a.createElement("div",{className:"flex flex-1"},T.a.createElement(l.a,{component:"pre",className:"language-javascript w-full"},f.default)))))}w.defaultProps={currentTabIndex:0};var M=w},2228:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2443),m=t(2444),r=t(2445),o=t(2447),c=t(2448),p=t(2446);function u(){return l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Sleep")))}},2229:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function BasicTimeline() {\n  return (\n    <Timeline>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2230:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2443),m=t(2444),r=t(2445),o=t(2447),c=t(2448),p=t(2446);function u(){return l.a.createElement(i.a,{align:"right"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Repeat")))}},2231:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function RightAlignedTimeline() {\n  return (\n    <Timeline align=\"right\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2232:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2443),m=t(2444),r=t(2445),o=t(2447),c=t(2448),p=t(2446);function u(){return l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Repeat")))}},2233:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function AlternateTimeline() {\n  return (\n    <Timeline align=\"alternate\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2234:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2443),m=t(2444),r=t(2445),o=t(2447),c=t(2448),p=t(2446);function u(){return l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{color:"primary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{color:"secondary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Repeat")))}},2235:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function ColorsTimeline() {\n  return (\n    <Timeline align=\"alternate\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color=\"primary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color=\"secondary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2236:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2443),m=t(2444),r=t(2445),o=t(2447),c=t(2448),p=t(2446);function u(){return l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined",color:"primary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined",color:"secondary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined"})),l.a.createElement(c.a,null,"Repeat")))}},2237:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function OutlinedTimeline() {\n  return (\n    <Timeline align=\"alternate\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" color=\"primary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" color=\"secondary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2238:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),l=t.n(a),i=t(2443),m=t(2444),r=t(2445),o=t(2447),c=t(2448),p=t(2446),u=t(2449),T=t(208);function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"09:30 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Eat"))),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"10:00 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Code"))),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"12:00 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Sleep"))),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"9:00 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Repeat")))))}},2239:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\nimport TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';\nimport Typography from '@material-ui/core/Typography';\n\nexport default function OppositeContentTimeline() {\n  return (\n    <React.Fragment>\n      <Timeline align=\"alternate\">\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">09:30 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Eat</Typography>\n          </TimelineContent>\n        </TimelineItem>\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">10:00 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Code</Typography>\n          </TimelineContent>\n        </TimelineItem>\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">12:00 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Sleep</Typography>\n          </TimelineContent>\n        </TimelineItem>\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">9:00 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Repeat</Typography>\n          </TimelineContent>\n        </TimelineItem>\n      </Timeline>\n    </React.Fragment>\n  );\n}\n"},2240:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var a=t(0),l=t.n(a),i=t(1211),m=t(2443),r=t(2444),o=t(2445),c=t(2447),p=t(2448),u=t(2449),T=t(2446),s=t(2241),E=t.n(s),d=t(2242),f=t.n(d),y=t(2243),C=t.n(y),h=t(2244),b=t.n(h),S=t(207),g=t(208),I=Object(i.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function v(){var e=I();return l.a.createElement(m.a,{align:"alternate"},l.a.createElement(r.a,null,l.a.createElement(u.a,null,l.a.createElement(g.a,{variant:"body2",color:"textSecondary"},"9:30 am")),l.a.createElement(o.a,null,l.a.createElement(T.a,null,l.a.createElement(E.a,null)),l.a.createElement(c.a,null)),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Eat"),l.a.createElement(g.a,null,"Because you need strength")))),l.a.createElement(r.a,null,l.a.createElement(u.a,null,l.a.createElement(g.a,{variant:"body2",color:"textSecondary"},"10:00 am")),l.a.createElement(o.a,null,l.a.createElement(T.a,{color:"primary"},l.a.createElement(f.a,null)),l.a.createElement(c.a,null)),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Code"),l.a.createElement(g.a,null,"Because it's awesome!")))),l.a.createElement(r.a,null,l.a.createElement(o.a,null,l.a.createElement(T.a,{color:"primary",variant:"outlined"},l.a.createElement(C.a,null)),l.a.createElement(c.a,{className:e.secondaryTail})),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Sleep"),l.a.createElement(g.a,null,"Because you need rest")))),l.a.createElement(r.a,null,l.a.createElement(o.a,null,l.a.createElement(T.a,{color:"secondary"},l.a.createElement(b.a,null))),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Repeat"),l.a.createElement(g.a,null,"Because this is the life you love!")))))}},2245:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Timeline from \'@material-ui/lab/Timeline\';\nimport TimelineItem from \'@material-ui/lab/TimelineItem\';\nimport TimelineSeparator from \'@material-ui/lab/TimelineSeparator\';\nimport TimelineConnector from \'@material-ui/lab/TimelineConnector\';\nimport TimelineContent from \'@material-ui/lab/TimelineContent\';\nimport TimelineOppositeContent from \'@material-ui/lab/TimelineOppositeContent\';\nimport TimelineDot from \'@material-ui/lab/TimelineDot\';\nimport FastfoodIcon from \'@material-ui/icons/Fastfood\';\nimport LaptopMacIcon from \'@material-ui/icons/LaptopMac\';\nimport HotelIcon from \'@material-ui/icons/Hotel\';\nimport RepeatIcon from \'@material-ui/icons/Repeat\';\nimport Paper from \'@material-ui/core/Paper\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles((theme) => ({\n  paper: {\n    padding: \'6px 16px\',\n  },\n  secondaryTail: {\n    backgroundColor: theme.palette.secondary.main,\n  },\n}));\n\nexport default function CustomizedTimeline() {\n  const classes = useStyles();\n\n  return (\n    <Timeline align="alternate">\n      <TimelineItem>\n        <TimelineOppositeContent>\n          <Typography variant="body2" color="textSecondary">\n            9:30 am\n          </Typography>\n        </TimelineOppositeContent>\n        <TimelineSeparator>\n          <TimelineDot>\n            <FastfoodIcon />\n          </TimelineDot>\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Eat\n            </Typography>\n            <Typography>Because you need strength</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineOppositeContent>\n          <Typography variant="body2" color="textSecondary">\n            10:00 am\n          </Typography>\n        </TimelineOppositeContent>\n        <TimelineSeparator>\n          <TimelineDot color="primary">\n            <LaptopMacIcon />\n          </TimelineDot>\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Code\n            </Typography>\n            <Typography>Because it&apos;s awesome!</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color="primary" variant="outlined">\n            <HotelIcon />\n          </TimelineDot>\n          <TimelineConnector className={classes.secondaryTail} />\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Sleep\n            </Typography>\n            <Typography>Because you need rest</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color="secondary">\n            <RepeatIcon />\n          </TimelineDot>\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Repeat\n            </Typography>\n            <Typography>Because this is the life you love!</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n'},2442:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),i=t(1251),m=(t(128),t(1220)),r=t(1213),o=t(208),c=t(1211),p=Object(c.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return p(),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},l.a.createElement(m.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/timeline",target:"_blank",role:"button"},l.a.createElement(r.a,null,"link"),l.a.createElement("span",{className:"mx-4"},"Reference"))),l.a.createElement(o.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Timeline"),l.a.createElement(o.a,{className:"description"},"The timeline displays a list of events in chronological order."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement("strong",null,"Note:")," This component is not documented in the ",l.a.createElement("a",{href:"https://material.io/"},"Material Design guidelines"),", but Material-UI supports it."),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"A basic timeline showing list of events."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2228).default,raw:t(2229)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Right aligned timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can be positioned on the right side of the events."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2230).default,raw:t(2231)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Alternating timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can display the events on alternating sides."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2232).default,raw:t(2233)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Color"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The ",l.a.createElement("code",null,"TimelineDot")," can appear in different colors."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2234).default,raw:t(2235)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Outlined"),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2236).default,raw:t(2237)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Opposite content"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can display content on opposite sides."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2238).default,raw:t(2239)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",l.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2240).default,raw:t(2245)})))}}}]);