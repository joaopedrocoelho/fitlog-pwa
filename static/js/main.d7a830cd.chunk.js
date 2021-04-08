(this["webpackJsonpfitlog-pwa"]=this["webpackJsonpfitlog-pwa"]||[]).push([[0],{43:function(e,t,c){},57:function(e,t,c){},76:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(44),r=c.n(s),i=(c(57),c(3)),o=c(9),u=c(8),l=c(11),d=c(17),b=c(2),j=function(e){var t=e.name,c=e.exercises,a=Object(n.useState)(c),s=Object(i.a)(a,1)[0];return Object(b.jsxs)("div",{className:"ProgramExercises",children:[Object(b.jsx)("h5",{children:t}),Object(b.jsx)("ul",{className:"exercises",children:s.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})]})},h=function(e){var t=e.name,c=e.data,n=Object.entries(c);return Object(b.jsxs)("div",{className:"ProgramPart",children:[Object(b.jsx)("h2",{children:t}),n.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(b.jsx)(j,{name:n,exercises:a},t)}))]})},O=function(e){var t=e.data,c=Object.entries(t);return Object(b.jsx)("div",{className:"ProgramDay",children:c.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(b.jsx)(h,{name:n,data:a},t)}))})},f=c(13),x=c(14),m=function(e){var t=e.caption,c=e.callback,n=e.styleClass,a=void 0===n?"add-btn":n;return Object(b.jsxs)("button",{className:a,onClick:function(){c&&c()},children:[Object(b.jsx)(f.a,{icon:x.g}),t]})},p=c(39),g=(c(76),function(e){var t=e.onClickEdit,c=e.onClickDel,n=e.size,a=e.children,s=e.deleteVisible;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{icon:x.f,className:"edit-icon",onClick:function(e){s=!0,t&&t(e)},size:n||"1x"}),a,Object(b.jsx)(f.a,{icon:x.i,className:s?"delete-icon visible":"delete-icon",onClick:c,size:n||"1x"})]})}),v=function(e){var t=e.labelText,c=e.editElement,s=e.deleteElement,r=e.size,o=(e.onInputClick,a.a.useRef(null)),u=a.a.useRef(null),l=Object(n.useState)(t),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(n.useState)(t),m=Object(i.a)(O,2),p=m[0],v=(m[1],Object(n.useState)(!1)),y=Object(i.a)(v,2),C=y[0],w=y[1],E=function(e){var t;!1===(null===(t=u.current)||void 0===t?void 0:t.contains(e.target))&&w(!1)};return Object(n.useEffect)((function(){return document.addEventListener("click",E),function(){document.removeEventListener("click",E)}}),[]),Object(n.useEffect)((function(){o.current&&C&&o.current.focus()}),[C]),Object(b.jsx)("span",{className:"edit-buttons",ref:u,children:Object(b.jsxs)(g,{onClickEdit:function(e){w(!0),console.log("editable",C)},onClickDel:s,size:r,deleteVisible:C,children:[Object(b.jsx)("input",{className:"editable-label",style:{width:"".concat(j.length,"em")},ref:o,onChange:function(e){h(e.target.value)},value:j,disabled:!C}),Object(b.jsxs)("span",{className:C?"fa-layers fa-fw visible":"fa-layers fa-fw hidden",onClick:function(e){h(p),w(!C)},children:[Object(b.jsx)(f.a,{icon:x.d,color:"var(--light-red)",size:r}),Object(b.jsx)(f.a,{icon:x.h,color:"white",size:"2x"===r?"lg":"lg"===r?"sm":"xs"})]}),Object(b.jsx)(f.a,{icon:x.c,className:C?"check-edit visible":"check-edit",onClick:function(e){c(j),w(!1)},size:r})]})})},y={program:void 0,days:void 0,setProgram:function(e){}},C=a.a.createContext(y),w={dayEdit:"Day 1",setDay:function(e){}},E=a.a.createContext(w),S={section:"Biceps",setSection:function(e){}},k=a.a.createContext(S),L={muscle:"",setMuscle:function(e){}},P=a.a.createContext(L),D=c(15),N=c.n(D),B=c(23),M=c(45),R=c(46),A=c(29),I=(c(78),c(89),["Warm-up","Main","Secondary"]),F={Shoulders:["Arnold Dumbbell Press","Barbell Front Raises","Behind The Neck Barbell Press","Cable Face Pull","Front Dumbbell Raise","Hammer Strength Shoulder Press","Incline Rear Delt Dumbbell Row","Lateral Dumbbell Raise","Lateral Machine Raise","Low-Pulley Bent-over Lateral Raises","Low-Pulley Standing Lateral Raises","Military Press","One-Arm Standing Dumbbell Press","Overhead Press","Push Press","Rear Delt Dumbbell Raise","Rear Delt Machine Fly","Seated Barbell Press","Seated Barbell Press Smith Machine","Seated Dumbbell Lateral Raise","Seated Dumbbell Press","Smith Machine Overhead Press","Upright Row"],Triceps:["Cable Overhead Triceps Extension","Close Grip Barbell Bench Press","Dumbbell Overhead Triceps Extension","Dumbell Kickback","EZ-Bar Skullcrusher","Lying Triceps Extension","Narrow Push-ups","One Arm Reverse Pushdown","Parallel Bar Triceps Dip","Ring Dip","Rope Push Down","Smith Machine Close Grip Bench Press","V-Bar Push Down"],Biceps:["Barbell Curl","Barbell Curl Against Incline","Cable Curl","Dumbbell Concentration Curl","Dumbbel Curl","Dumbbell Hammer Curl","Dumbbell Preacher Curl","EZ-Bar Curl","EZ-Bar Preacher Curl","Machine Preacher Curl","Seated Dumbbell Curl","Seated Incline Dumbbell Curl","Seated Machine Curl"],Chest:["Cable Crossover","Decline Barbell Bench Press","Decline Hammer Strength Chest Press","Flat Barbell Bench Press","Flat Dumbbell Bench Press","Flat Dumbbell Fly","Incline Barbell Bench Press","Incline Dumbbell Bench Press","Incline Dumbbell Fly","Incline Hammer Strength Chest Press","Parallel Bar Dips","Pectoral Fly","Push-ups","Seated Machine Fly"],Back:["Barbell Row","Barbell Shrug","Chin Up","Deadlift","Dual Pulley Seated Cable Row","Dumbbell Row","Good Morning","Hammer Strength Row","Hyperextension","Lat Pulldown","Machine Shrug","Neutral Chin Up","Pendlay Row","Pull Up","Rack Pull","Seated Cable Row","Seated Row Machine","Straight-Arm Cable Pushdown","T-Bar Row"],Legs:["Barbell Calf Raise","Barbell Front Squat","Barbell Glute Bridge","Barbell Squat","Barbell Squat Smith Machine","Donkey Calf Raise","Glute Machine","Glute-Ham Raise","Leg Extension Machine","Leg Press","Lying Leg Curl Machine","Romanian Deadlift","Seated Calf Raise Machine","Seated Leg Curl Machine","Standing Calf Raise Machine","Standing Glute Extension Machine","Stiff-Legged Deadlift","Sumo Deadlift","Walking Lunges"],Abs:["Ab-Wheel Rollout","Butt Ups","Cable Crunch","Crunch","Crunch Machine","Decline Crunch","Dragon Flag","Hanging Knee Raise","Hanging Leg Raise","Plank","Side Dumbbell/Weight Bend","Side Plank","Standings Side Dumbbell"]},W=["Shoulders","Triceps","Biceps","Chest","Back","Legs","Abs"],T={apiKey:"AIzaSyAs9I7_F506XxHtb85WTU5n00GCs3uCzDU",authDomain:"fitlog-typescript.firebaseapp.com",projectId:"fitlog-typescript",storageBucket:"fitlog-typescript.appspot.com",messagingSenderId:"626280586926",appId:"1:626280586926:web:21fd8bfba9451a9d31d73f"},U=new(function(){function e(){Object(M.a)(this,e),this.auth=void 0,this.user=void 0,this.db=void 0,this.userProgram=void 0,this.muscleList=void 0,this.sectionList=void 0,this.exercisesList=void 0,A.a.initializeApp(T),this.auth=A.a.auth(),this.db=A.a.firestore(),this.userProgram={},this.muscleList=W,this.sectionList=I,this.exercisesList=F}return Object(R.a)(e,[{key:"register",value:function(){var e=Object(B.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.user){e.next=3;break}return e.next=3,this.db.collection("users").doc(this.user.uid).set({name:this.user.displayName,email:this.user.email,userId:this.user.uid,program:{},muscleList:this.muscleList,sectionList:this.sectionList,exerciseList:this.exercisesList});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkIn",value:function(){var e=Object(B.a)(N.a.mark((function e(t){var c,n=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.user=t,e.next=3,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).get().then((function(e){var t,c,a,s;e.exists?(n.userProgram=null===(t=e.data())||void 0===t?void 0:t.program,n.muscleList=null===(c=e.data())||void 0===c?void 0:c.muscleList,n.sectionList=null===(a=e.data())||void 0===a?void 0:a.sectionList,n.exercisesList=null===(s=e.data())||void 0===s?void 0:s.exerciseList,console.log("properties",n.userProgram,n.muscleList,n.sectionList,n.exercisesList)):n.register()}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(B.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new A.a.auth.GoogleAuthProvider,e.next=3,this.auth.signInWithRedirect(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(B.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signOut().then((function(){return console.log("logged out")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateProgram",value:function(){var e=Object(B.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({program:t}).then((function(){return console.log("Program updated successfully!")})).catch((function(e){return console.error("Error updating program:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateMuscleList",value:function(){var e=Object(B.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({SectionList:t}).then((function(){return console.log("List of muscles updated successfully!")})).catch((function(e){return console.error("Error updating list:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateSectionList",value:function(){var e=Object(B.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({SectionList:t}).then((function(){return console.log("List of sections updated successfully!")})).catch((function(e){return console.error("Error updating list:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateExerciseList",value:function(){var e=Object(B.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({exerciseList:t}).then((function(){return console.log("List of exercises updated successfully!")})).catch((function(e){return console.error("Error updating list:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),z=U,H=function(e){var t=e.name,c=e.exercises,a=e.dayId,s=e.dayName,r=e.muscleId,o=e.typeId,l=Object(n.useContext)(C),d=l.days,j=l.setProgram,h=Object(n.useContext)(E),O=h.dayEdit,f=h.setDay,x=Object(n.useContext)(P),g=x.muscle,y=x.setMuscle,w=Object(n.useContext)(k),S=w.section,L=w.setSection,D=d&&Object.entries(d[a][1]),N=Object(u.g)(),B=D&&Object.entries(D[r][1]),M=Object(n.useState)(c),R=Object(i.a)(M,2),A=R[0],I=R[1];return d&&D&&B?Object(b.jsxs)("div",{className:"ProgramExercises",children:[Object(b.jsx)("h5",{children:Object(b.jsx)(v,{labelText:t,editElement:function(e){if(t!==e){B[o][0]=e;var c=Object.fromEntries(B);D[r][1]=c,d[a][1]=Object.fromEntries(D),z.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))}},deleteElement:function(){B.splice(o,1);var e=Object.fromEntries(B);D[r][1]=e,d[a][1]=Object.fromEntries(D),z.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))},size:"2x"})}),Object(b.jsxs)("ul",{className:"edit-exercises",children:[Object(b.jsx)(m,{caption:"exercise",callback:function(){f(s),L(B[o][0]),y(D[r][0]),N.push({pathname:"/add-exercise",search:"?day=".concat(O,"&group=").concat(g,"&sectionQ=").concat(S)})}}),A.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(v,{labelText:e,editElement:function(n){e!==n&&(c[t]=n,I(Object(p.a)(c)),B[o][1]=c,D[r][1]=Object.fromEntries(B),d[a][1]=Object.fromEntries(D),z.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d)))},deleteElement:function(){A.splice(t,1),I(Object(p.a)(A)),B[o][1]=c,D[r][1]=Object.fromEntries(B),d[a][1]=Object.fromEntries(D),z.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))},size:"lg"})},t)}))]})]}):Object(b.jsx)("div",{children:" "})},G=function(e){var t=e.name,c=e.data,a=e.dayId,s=e.muscleId,r=e.dayName,o=Object.entries(c),l=Object(n.useContext)(C),d=l.days,j=l.setProgram,h=Object(n.useContext)(E),O=h.dayEdit,f=h.setDay,x=Object(n.useContext)(P),p=x.muscle,g=x.setMuscle,y=Object(n.useState)(),w=Object(i.a)(y,2),S=w[0],k=w[1];Object(n.useEffect)((function(){d&&k(Object.entries(d[a][1]))}),[]);var L=Object(u.g)();return Object(b.jsxs)("div",{className:"ProgramPart",children:[Object(b.jsx)("h2",{className:"edit",children:Object(b.jsx)(v,{labelText:t,editElement:function(e){if(S&&d&&t!==e){S[s][0]=e;var c=Object.fromEntries(S);d[a][1]=c,z.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))}},deleteElement:function(){if(S&&d){S.splice(s,1);var e=Object.fromEntries(S);d[a][1]=e,z.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))}}})}),Object(b.jsx)(m,{caption:"exercise type",callback:function(){f(r),g(t),L.push({pathname:"/add-section",search:"?day=".concat(O,"&group=").concat(p)})}}),o.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],o=c[1];return Object(b.jsx)(H,{name:n,exercises:o,dayId:a,dayName:r,muscleId:s,typeId:t})}))]})},Q=function(e){var t=e.data,c=e.dayId,n=e.dayName,a=Object.entries(t);return Object(b.jsx)("div",{className:"ProgramDay",children:a.map((function(e,t){var a=Object(i.a)(e,2),s=a[0],r=a[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(G,{name:s,data:r,dayId:c,dayName:n,muscleId:t})})}))})},V=function(){var e=Object(n.useState)(-1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(u.g)(),r=Object(n.useContext)(C),o=r.program,l=r.days,d=r.setProgram,j=Object(n.useContext)(E).setDay;return Object(n.useEffect)((function(){}),[o]),Object(b.jsxs)("section",{className:"Program",children:[Object(b.jsx)("h2",{children:" Edit or add days to your workout:"}),Object(b.jsx)("ul",{className:"fa-ul add",children:l&&l.map((function(e,t){var n=Object(i.a)(e,2),r=n[0],o=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("li",{onClick:function(e){return function(e,t){console.log("openList ran"),a(t===c?-1:t)}(0,t)},children:[Object(b.jsx)(f.a,{icon:x.b,listItem:!0,className:t===c?"rotate":"li-arrow"}),Object(b.jsx)(v,{labelText:r,editElement:function(e){if(r!==e){l[t][0]=e;var c=Object.fromEntries(l);z.updateProgram(c),d(c)}},deleteElement:function(){l.splice(t,1);var e=Object.fromEntries(l);z.updateProgram(e),d(e)}})]},"day-".concat(t)),Object(b.jsxs)("div",{className:t===c?"show-schedule":"hide",children:[Object(b.jsx)(m,{caption:"muscle group",callback:function(){j(r),s.push({pathname:"/add-muscle-group",search:"?day=".concat(r)})}}),Object(b.jsx)(Q,{data:o,dayId:t,dayName:r})]})]})}))}),Object(b.jsx)(m,{caption:"day",styleClass:"add-day-btn",callback:function(){s.push({pathname:"/add-new-day"})}})]})},q=(c(85),function(e){var t=e.defaultValue,c=e.label,a=e.buttonLabel,s=e.callback,r=Object(n.useState)(t),o=Object(i.a)(r,2),u=o[0],l=o[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){d.current&&d.current.focus()})),Object(b.jsxs)("section",{className:"add-day",children:[Object(b.jsx)("label",{htmlFor:"day-name",children:Object(b.jsx)("h2",{className:"add-header",children:c||"Name"})}),Object(b.jsx)("input",{type:"text",value:u,className:"add-label",name:"day-name",contentEditable:!0,ref:d,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)(m,{caption:a||"",callback:function(){s&&s(u)}})]})}),K=c(40),Z=c(48),J=(c(43),function(e){return Object(b.jsx)("div",{className:"loading-code-container",children:Object(b.jsxs)(Z.a,Object(K.a)(Object(K.a)({speed:2,width:340,height:84,viewBox:"0 0 340 84",backgroundColor:"hsl(213, 74%, 20%)",foregroundColor:"hsl(205, 58%, 40%)"},e),{},{children:[Object(b.jsx)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"67",height:"11"}),Object(b.jsx)("rect",{x:"76",y:"0",rx:"3",ry:"3",width:"140",height:"11"}),Object(b.jsx)("rect",{x:"127",y:"48",rx:"3",ry:"3",width:"53",height:"11"}),Object(b.jsx)("rect",{x:"187",y:"48",rx:"3",ry:"3",width:"72",height:"11"}),Object(b.jsx)("rect",{x:"18",y:"48",rx:"3",ry:"3",width:"100",height:"11"}),Object(b.jsx)("rect",{x:"0",y:"71",rx:"3",ry:"3",width:"37",height:"11"}),Object(b.jsx)("rect",{x:"18",y:"23",rx:"3",ry:"3",width:"140",height:"11"}),Object(b.jsx)("rect",{x:"166",y:"23",rx:"3",ry:"3",width:"173",height:"11"})]}))})}),X=a.a.createContext({muscleList:W,sectionList:I,exercisesList:F,setUsersList:function(e){}}),$=function(e){var t=e.header,c=e.callback,a=Object(d.a)(z.auth),s=Object(i.a)(a,3),r=(s[0],s[1],s[2],Object(n.useContext)(E)),o=r.dayEdit,j=r.setDay,h=Object(n.useContext)(P),O=h.muscle,f=h.setMuscle,x=Object(n.useContext)(k),m=x.section,p=x.setSection,g=Object(n.useContext)(X),v=g.muscleList,y=g.sectionList,C=g.exercisesList,w=(g.setUsersList,Object(n.useState)(Object.keys(C||{}))),S=Object(i.a)(w,2),L=S[0],D=S[1],N=Object(n.useState)(),B=Object(i.a)(N,2),M=B[0],R=B[1],A=Object(n.useState)(!1),I=Object(i.a)(A,2),F=I[0],W=I[1],T=Object(l.c)({day:l.b,group:l.b,sectionQ:l.b}),U=Object(i.a)(T,2),H=U[0],G=(U[1],H.day),Q=H.group,V=H.sectionQ;Object(n.useEffect)((function(){""!==m&&""!==O&&""!==o||(W(!0),G||Q||V?(G&&j(G),Q&&f(Q),V&&p(V),W(!1),console.log("state",M,L)):q.push("/"))}),[]);var q=Object(u.g)();return Object(n.useEffect)((function(){switch(C&&R(C[O]),C&&D(Object.keys(C)),t){case"Muscle":R(v);break;case"Section":R(y);break;case"Exercise":L.find((function(e){return e===O}))&&R(C[O])}})),!F&&M?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("ul",{className:"add-list",children:M&&M.map((function(e,t){return Object(b.jsx)("li",{onClick:function(e){c&&c(e.target.innerHTML)},children:e},"".concat(t,"-").concat(e))}))})]}):Object(b.jsx)(J,{})},_=function(){var e=Object(u.g)(),t=Object(n.useContext)(E).dayEdit,c=Object(n.useContext)(P).setMuscle;return Object(n.useEffect)((function(){}),[t]),Object(b.jsx)($,{header:"Muscle",callback:function(n){c(n),e.push({pathname:"/add-muscle-group/2",search:"?day=".concat(t,"&group=").concat(n)})}})},Y=function(){var e=Object(u.g)(),t=Object(n.useContext)(E).dayEdit,c=Object(n.useContext)(P).muscle,a=Object(n.useContext)(k),s=a.section,r=a.setSection;return Object(b.jsx)($,{header:"Section",callback:function(n){r(n),e.push({pathname:"/add-muscle-group/3",search:"?day=".concat(t,"&group=").concat(c,"&sectionQ=").concat(s)})}})},ee=function(){var e=Object(u.g)(),t=Object(n.useContext)(C),c=t.program,a=t.setProgram,s=Object(n.useContext)(E).dayEdit,r=Object(n.useContext)(P).muscle,o=Object(n.useContext)(k).section,l=Object(n.useState)(),d=Object(i.a)(l,2),j=d[0],h=d[1];return Object(n.useEffect)((function(){c&&h(c)}),[c]),Object(b.jsx)($,{header:"Exercise",callback:function(t){j&&(j[s][r]={},j[s][r][o]=[],j[s][r][o].push(t),z.updateProgram(j),a(j),e.push("/".concat(s)))}})},te=function(){var e=Object(u.g)(),t=Object(n.useContext)(E).dayEdit,c=Object(n.useContext)(P).muscle,a=Object(n.useContext)(k),s=a.section,r=a.setSection;return Object(b.jsx)($,{header:"Section",callback:function(n){r(n),e.push({pathname:"/add-section/2",search:"?day=".concat(t,"&group=").concat(c,"&sectionQ=").concat(s)})}})},ce=function(){var e=Object(u.g)(),t=Object(n.useContext)(C),c=t.program,a=t.setProgram,s=Object(n.useContext)(E).dayEdit,r=Object(n.useContext)(P).muscle,o=Object(n.useContext)(k).section,l=Object(n.useState)(),d=Object(i.a)(l,2),j=d[0],h=d[1];return Object(n.useEffect)((function(){c&&h(c)}),[c]),Object(b.jsx)($,{header:"Exercise",callback:function(t){j&&(j[s][r][o]=[],j[s][r][o].push(t),z.updateProgram(j),a(j),e.push("/".concat(s)))}})},ne=function(){var e=Object(u.g)(),t=Object(n.useContext)(C),c=t.program,a=t.setProgram,s=Object(n.useContext)(E).dayEdit,r=Object(n.useContext)(P).muscle,o=Object(n.useContext)(k).section,l=Object(n.useState)(),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(n.useState)(),f=Object(i.a)(O,2),x=f[0],m=f[1];return Object(n.useEffect)((function(){c&&(h(c),m(c))}),[]),Object(b.jsx)($,{header:"Exercise",callback:function(t){j&&x&&(j[s][r][o].push(t),x[s]=j[s],z.updateProgram(x),a(x),e.push("/".concat(s)))}})},ae=function(){var e=Object(n.useContext)(C).days,t=Object(n.useContext)(E).setDay,c=Object(u.g)();return Object(b.jsx)(q,{defaultValue:e?"Day ".concat(e.length+1):"Day 1",label:"Choose a name",buttonLabel:"day",callback:function(e){e&&t(e),c.push({pathname:"/add-new-day/2",search:"?day=".concat(e)})}})},se=function(){var e=Object(u.g)(),t=Object(l.c)({day:l.b}),c=Object(i.a)(t,2),a=c[0],s=(c[1],a.day,Object(n.useContext)(E)),r=s.dayEdit,o=(s.setDay,Object(n.useContext)(P).setMuscle);return Object(b.jsx)($,{header:"Muscle",callback:function(t){o(t),e.push({pathname:"/add-new-day/3",search:"?day=".concat(r,"&group=").concat(t)})}})},re=function(){var e=Object(u.g)(),t=Object(l.c)({day:l.b,group:l.b}),c=Object(i.a)(t,2),a=c[0],s=(c[1],a.day,a.group,Object(n.useContext)(E)),r=s.dayEdit,o=(s.setDay,Object(n.useContext)(P)),d=o.muscle,j=(o.setMuscle,Object(n.useContext)(k)),h=(j.section,j.setSection);return Object(b.jsx)($,{header:"Section",callback:function(t){h(t),e.push({pathname:"/add-new-day/4",search:"?day=".concat(r,"&group=").concat(d,"&sectionQ=").concat(t)})}})},ie=function(){var e=Object(u.g)(),t=Object(l.c)({day:l.b,group:l.b,sectionQ:l.b}),c=Object(i.a)(t,1)[0],a=(c.day,c.group,c.sectionQ,Object(n.useContext)(C)),s=a.program,r=a.setProgram,o=Object(n.useContext)(E),d=o.dayEdit,j=(o.setDay,Object(n.useContext)(P)),h=j.muscle,O=(j.setMuscle,Object(n.useContext)(k)),f=O.section,x=(O.setSection,Object(n.useState)()),m=Object(i.a)(x,2),p=m[0],g=m[1];return Object(n.useEffect)((function(){g(s||{})}),[s]),Object(b.jsx)($,{header:"Exercise",callback:function(t){p&&(p[d]={},p[d][h]={},p[d][h][f]=[],p[d][h][f].push(t),z.updateProgram(p),r(p),e.push("/".concat(d)))}})},oe=c(49),ue=function(){return Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),z.login()},className:"sign-in-btn",children:"Sign in with Google"})},le=function(){var e=Object(n.useContext)(C).setProgram,t=Object(u.g)();return Object(b.jsx)("button",{onClick:function(){z.logout().then((function(){e({}),t.push("/home"),console.log(t)}))},children:"Sign Out"})},de=function(e){var t=e.isOpen,c=e.callback,n=Object(d.a)(z.auth),a=Object(i.a)(n,1)[0];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:t?"burger-menu menu-active":"burger-menu",children:Object(b.jsx)("ul",{children:Object(b.jsxs)("li",{className:"user-info",children:[a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:a.photoURL,alt:a.displayName}),a.displayName]}),Object(b.jsx)("span",{onClick:function(){return c()},children:a?Object(b.jsx)(le,{}):Object(b.jsx)(ue,{})})]})})})})},be=(c(87),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),u=r[0],l=r[1],j=Object(d.a)(z.auth),h=Object(i.a)(j,1)[0];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(de,{isOpen:u,callback:function(){a(!1),l(!1)}}),Object(b.jsx)(oe.a,{isActive:c,className:"burger-menu-btn",toggleButton:function(){a(!c),l(!u)},barColor:"white"}),Object(b.jsx)("h3",{className:"nav-header",children:"Workout"}),h&&Object(b.jsx)(o.b,{to:"/edit",children:Object(b.jsx)(f.a,{icon:x.e,size:"1x"})})]})}),je=function(){var e=Object(u.g)();return Object(b.jsx)(f.a,{icon:x.a,className:"back-button",onClick:function(){e.goBack()}})},he=function(e){var t=e.header,c=Object(n.useContext)(P).muscle,a=Object(u.g)(),s=Object(n.useState)({pathname:"",search:"?"}),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){"Add Exercise"===t?l({pathname:"/add-to-exercise-list",search:"?group=".concat(c)}):"Add Section"===t?l({pathname:"/add-to-section-list",search:""}):"Add Muscle"===t&&l({pathname:"/add-to-muscle-list",search:""})}),[t]),Object(b.jsx)(f.a,{icon:x.g,className:"plus-button",onClick:function(){a.push(o)}})},Oe=function(e){var t=e.header,c=e.plus,a=void 0===c||c,s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(u.h)();return Object(n.useEffect)((function(){d.pathname.startsWith("/add-muscle")?("/add-muscle-group"===d.pathname&&l("Add Muscle"),"/add-muscle-group/2"===d.pathname&&l("Add Section"),"/add-muscle-group/3"===d.pathname&&l("Add Exercise")):d.pathname.startsWith("/add-section")?("/add-section"===d.pathname&&l("Add Section"),"/add-section/2"===d.pathname&&l("Add Exercise")):d.pathname.startsWith("/add-exercise")?l("Add Exercise"):d.pathname.startsWith("/add-new-day")&&("/add-new-day"===d.pathname&&l("Add Day"),"/add-new-day/2"===d.pathname&&l("Add Muscle"),"/add-new-day/3"===d.pathname&&l("Add Section"),"/add-new-day/4"===d.pathname&&l("Add Exercise"))}),[d.pathname]),Object(b.jsxs)("nav",{className:"add",children:[Object(b.jsx)(je,{}),Object(b.jsx)("h3",{className:"nav-header",children:t||o}),a&&"/add-new-day"!==d.pathname&&Object(b.jsx)(he,{header:o&&o})]})},fe=Object(u.i)((function(){var e=Object(n.useContext)(C).days,t=Object(u.h)(),c=Object(n.useState)(),a=Object(i.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(),j=Object(i.a)(l,2),h=j[0],O=j[1],f=Object(d.a)(z.auth),x=Object(i.a)(f,1)[0];return Object(n.useEffect)((function(){x?x&&!t.pathname.startsWith("/add")?(O(Object(b.jsx)(be,{})),r(e?e.map((function(e,c){var n=Object(i.a)(e,2),a=n[0];n[1];return Object(b.jsx)(o.c,{to:"/".concat(a),className:t.pathname==="/".concat(a)?"active":"",children:a})})):void 0)):(O(Object(b.jsx)(Oe,{})),r(void 0)):(O(Object(b.jsx)(be,{})),r(void 0))}),[e,t.pathname,x]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{children:h}),s&&Object(b.jsx)("nav",{className:"days-container",children:s})]})})),xe=Object(u.i)((function(e){var t=Object(d.a)(z.auth),c=Object(i.a)(t,3),a=c[0],s=(c[1],c[2],Object(n.useContext)(C).days),r=Object(u.g)();return Object(n.useEffect)((function(){s&&void 0!==s[0]&&r.push("/".concat(s[0][0]))}),[s]),Object(b.jsx)("div",{children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Hello, ",a.displayName,"! let's start creating your workout:"]}),Object(b.jsx)(m,{caption:"day",styleClass:"add-day-btn",callback:function(){r.push({pathname:"/add-new-day"})}})]}):Object(b.jsx)(ue,{})})})),me=function(){var e=Object(n.useContext)(C),t=e.days,c=e.program,a=e.setProgram,s=Object(n.useContext)(X),r=s.muscleList,j=s.sectionList,h=s.exercisesList,f=s.setUsersList,x=Object(n.useContext)(P).muscle,m=Object(d.a)(z.auth),p=Object(i.a)(m,1)[0],g=Object(n.useState)(),v=Object(i.a)(g,2),y=v[0],w=v[1],E=Object(u.h)(),S=Object(u.g)(),k=Object(n.useState)(),L=Object(i.a)(k,2),D=L[0],N=L[1];return Object(n.useEffect)((function(){p&&(N(!0),z.checkIn(p).then((function(){a(z.userProgram),f({newMuscleList:z.muscleList,newSectionList:z.sectionList,newExercisesList:z.exercisesList}),N(!1)})))}),[p]),Object(n.useEffect)((function(){t&&w(t.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(b.jsx)(u.b,{exact:!0,path:"/".concat(n),children:Object(b.jsx)(O,{data:a},t)})})))}),[t,E.pathname]),Object(b.jsx)(o.a,{children:Object(b.jsxs)(l.a,{ReactRouterRoute:u.b,children:[D?Object(b.jsx)(J,{}):Object(b.jsx)(fe,{}),Object(b.jsxs)(u.d,{children:[y,p?Object(b.jsxs)(u.b,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(u.a,{to:c&&t&&t[0]?"".concat(t[0][0]):"/home"})}}),Object(b.jsx)(u.b,{exact:!0,path:"/home",children:p?Object(b.jsx)(xe,{}):Object(b.jsx)(ue,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/edit",children:Object(b.jsx)(V,{})}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-muscle-group",children:[Object(b.jsx)(_,{}),";"]}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-muscle-group/2",children:[Object(b.jsx)(Y,{}),";"]}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-muscle-group/3",children:[Object(b.jsx)(ee,{}),";"]}),Object(b.jsx)(u.b,{exact:!0,path:"/add-section",children:Object(b.jsx)(te,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-section/2",children:Object(b.jsx)(ce,{})}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-exercise",children:[Object(b.jsx)(ne,{}),";"]}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day",children:Object(b.jsx)(ae,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day/2",children:Object(b.jsx)(se,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day/3",children:Object(b.jsx)(re,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day/4",children:Object(b.jsx)(ie,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-to-exercise-list",children:Object(b.jsx)(q,{defaultValue:"new exercise",label:"Add Exercise to ".concat(x),buttonLabel:"add exercise",callback:function(e){if(e){var t=h;t&&t[x].push(e),f({newExercisesList:t}),z.updateExerciseList(t),S.goBack()}}})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-to-section-list",children:Object(b.jsx)(q,{defaultValue:"new section",label:"Add a New Section",buttonLabel:"add section",callback:function(e){if(e){var t=j;t&&t.push(e),z.updateSectionList(t),S.goBack()}}})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-to-muscle-list",children:Object(b.jsx)(q,{defaultValue:"new muscle",label:"Add a New Exercise Group",buttonLabel:"add group",callback:function(e){if(e){var t=r;t&&t.push(e);var c=h;c&&(c[e]=[]),z.updateMuscleList(t),z.updateExerciseList(c),S.goBack()}}})})]}):Object(b.jsx)(u.b,{path:"/",children:Object(b.jsx)(ue,{})})]})]})})},pe={defaultObj:void 0,setAdd:function(e){}},ge=a.a.createContext(pe);var ve=function(){var e=function(){var e=a.a.useState(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=a.a.useState(c&&Object.entries(c)),r=Object(i.a)(s,2),o=r[0],u=r[1];return{program:c,days:o,setProgram:a.a.useCallback((function(e){n(e),u(Object.entries(e))}),[])}}(),t=function(){var e=a.a.useState({}),t=Object(i.a)(e,2),c=t[0],n=t[1];return{defaultObj:c,setAdd:a.a.useCallback((function(e){n(e)}),[])}}(),c=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return{muscle:c,setMuscle:a.a.useCallback((function(e){n(e)}),[])}}(),s=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return{section:c,setSection:a.a.useCallback((function(e){n(e)}),[])}}(),r=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return{dayEdit:c,setDay:a.a.useCallback((function(e){n(e)}),[])}}(),u=function(){var e=a.a.useState(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=a.a.useState(),r=Object(i.a)(s,2),o=r[0],u=r[1],l=a.a.useState(),d=Object(i.a)(l,2),b=d[0],j=d[1];return{muscleList:c,sectionList:o,exercisesList:b,setUsersList:a.a.useCallback((function(e){e.newMuscleList&&n(e.newMuscleList),e.newSectionList&&u(e.newSectionList),e.newExercisesList&&j(e.newExercisesList)}),[])}}(),l=Object(d.a)(U.auth),j=Object(i.a)(l,3),h=j[0],O=j[1];return j[2],Object(n.useEffect)((function(){if(h)return window.onbeforeunload=function(){return!0},function(){window.onbeforeunload=null}}),[h]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(X.Provider,{value:u,children:Object(b.jsx)(C.Provider,{value:e,children:Object(b.jsx)(ge.Provider,{value:t,children:Object(b.jsx)(P.Provider,{value:c,children:Object(b.jsx)(k.Provider,{value:s,children:Object(b.jsx)(E.Provider,{value:r,children:Object(b.jsx)(o.a,{children:O?Object(b.jsx)(J,{}):Object(b.jsx)(me,{})})})})})})})})})},ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var we=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ve,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fitlog-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/fitlog-pwa","/service-worker.js");ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ce(t,e)}))}}(),we()}},[[88,1,2]]]);
//# sourceMappingURL=main.d7a830cd.chunk.js.map