(this.webpackJsonpmihir_react_training=this.webpackJsonpmihir_react_training||[]).push([[0],{11:function(e,a,t){e.exports={CardHeader:"App_CardHeader__1Tvb7",CardBody:"App_CardBody__288oA",AccordionDetails:"App_AccordionDetails__6f--f"}},13:function(e,a,t){e.exports={NameLable:"UsersNameLabel_NameLable__305iu",Details:"UsersNameLabel_Details__2Ogvr"}},18:function(e,a,t){e.exports={Users:"Users_Users__2Shv0"}},21:function(e,a,t){e.exports=t(30)},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),o=(t(26),t(7)),s=t(8),i=t(10),m=t(9),u=t(11),d=t.n(u),E=t(18),p=t.n(E),f=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:p.a.Users},r.a.createElement("h2",{className:"mb-4"},r.a.createElement("b",null,e.name)),r.a.createElement("p",null,"Name:\xa0",e.name),r.a.createElement("p",null,"Age:\xa0",e.age),r.a.createElement("p",null,"City:\xa0",e.city)),r.a.createElement("p",null,e.children)))},g=t(19),h=t(13),b=t.n(h),y=t(14),v=t(15),_=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement(v.a,{md:4,className:b.a.NameLable},r.a.createElement("label",null,e.name)),r.a.createElement(v.a,{md:{span:4,offset:4}},r.a.createElement("button",{className:b.a.Details,onClick:e.click},"Click here to ",r.a.createElement("br",null)," see more"))),r.a.createElement(y.a,null,e.children)))},N=t(6),k=t(16),C=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleUsersHandler=function(e){n.setState({userId:e})},n.state={users:[{id:"bbacd",name:"Mike",city:"LA",age:20},{id:"45vgb",name:"Tyson",city:"NY",age:50}],userId:""},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{defaultActiveKey:"0"},r.a.createElement(N.a,{className:"text-center",border:"dark",eventKey:"0"},r.a.createElement(N.a.Header,{className:d.a.CardHeader},"User Details"),r.a.createElement(N.a.Body,{className:d.a.CardBody},this.state.users.map((function(a){return r.a.createElement(_,{key:a.id,name:a.name,click:function(){return e.toggleUsersHandler(a.id)}})}))),r.a.createElement(k.a.Collapse,{eventKey:"0",className:d.a.AccordionDetails},r.a.createElement(N.a.Body,null,r.a.createElement("div",null,this.state.users.filter((function(a){return a.id===e.state.userId})).map((function(e,a){return r.a.createElement(f,{name:e.name,age:e.age,city:e.city,key:e.id})}))))))))}}]),t}(n.Component),A=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={hasError:!1},e}return Object(s.a)(t,[{key:"componentDidCatch",value:function(e,a){console.log("Error log from componentDidCatch: ".concat(e)),console.log(a)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("Error log from getDerivedStateFromError: ".concat(e)),{hasError:!0}}}]),t}(n.Component);c.a.render(r.a.createElement(A,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.aa2edc50.chunk.js.map