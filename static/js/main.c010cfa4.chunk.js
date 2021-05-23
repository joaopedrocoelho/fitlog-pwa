(this["webpackJsonpfitlog-pwa"]=this["webpackJsonpfitlog-pwa"]||[]).push([[0],{43:function(e,t,c){},58:function(e,t,c){},77:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(44),r=c.n(s),i=(c(58),c(3)),o=c(9),u=c(8),l=c(28),d=c(20),b=c(2),j=function(e){var t=e.name,c=e.exercises,a=Object(n.useState)(c),s=Object(i.a)(a,1)[0];return Object(b.jsxs)("div",{className:"ProgramExercises",children:[Object(b.jsx)("h5",{children:t}),Object(b.jsx)("ul",{className:"exercises",children:s.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})]})},h=function(e){var t=e.name,c=e.data,n=Object.entries(c);return Object(b.jsxs)("div",{className:"ProgramPart",children:[Object(b.jsx)("h2",{children:t}),n.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(b.jsx)(j,{name:n,exercises:a},t)}))]})},O=function(e){var t=e.data,c=Object.entries(t);return Object(b.jsx)("div",{className:"ProgramDay",children:c.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(b.jsx)(h,{name:n,data:a},t)}))})},f=c(10),x=c(11),m=function(e){var t=e.caption,c=e.callback,n=e.styleClass,a=void 0===n?"add-btn":n;return Object(b.jsxs)("button",{className:a,onClick:function(){c&&c()},children:[Object(b.jsx)(f.a,{icon:x.g}),t]})},p=c(16),g=(c(77),function(e){var t=e.onClickEdit,c=e.onClickDel,n=e.size,a=e.children,s=e.deleteVisible;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{icon:x.f,className:"edit-icon",onClick:function(e){s=!0,t&&t(e)},size:n||"1x"}),a,Object(b.jsx)(f.a,{icon:x.j,className:s?"delete-icon visible":"delete-icon",onClick:c,size:n||"1x"})]})}),v=function(e){var t=e.labelText,c=e.editElement,s=e.deleteElement,r=e.size,o=(e.onInputClick,a.a.useRef(null)),u=a.a.useRef(null),l=Object(n.useState)(t),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(n.useState)(t),m=Object(i.a)(O,1)[0],p=Object(n.useState)(!1),v=Object(i.a)(p,2),y=v[0],C=v[1],w=function(e){var t;!1===(null===(t=u.current)||void 0===t?void 0:t.contains(e.target))&&C(!1)};return Object(n.useEffect)((function(){return document.addEventListener("click",w),function(){document.removeEventListener("click",w)}}),[]),Object(n.useEffect)((function(){o.current&&y&&o.current.focus()}),[y]),Object(b.jsx)("span",{className:"edit-buttons",ref:u,children:Object(b.jsxs)(g,{onClickEdit:function(e){C(!0),console.log("editable",y)},onClickDel:s,size:r,deleteVisible:y,children:[Object(b.jsx)("input",{className:"editable-label",style:{width:"".concat(j.length,"em")},ref:o,onChange:function(e){h(e.target.value)},value:j,disabled:!y}),Object(b.jsx)(f.a,{icon:x.i,color:"var(--light-red)",size:r,className:y?"visible":"hidden",onClick:function(e){h(m),C(!y)}}),Object(b.jsx)(f.a,{icon:x.c,className:y?"check-edit visible":"check-edit",onClick:function(e){c(j),C(!1)},size:r})]})})},y={program:void 0,days:void 0,setProgram:function(e){}},C=a.a.createContext(y),w={dayEdit:"Day 1",setDay:function(e){}},S=a.a.createContext(w),E={section:"Biceps",setSection:function(e){}},k=a.a.createContext(E),L={muscle:"",setMuscle:function(e){}},P=a.a.createContext(L),D=c(14),N=c.n(D),A=c(23),B=c(45),M=c(46),R=c(31),I=(c(79),c(90),["Warm-up","Main","Secondary"]),F={Shoulders:["Arnold Dumbbell Press","Barbell Front Raises","Behind The Neck Barbell Press","Cable Face Pull","Front Dumbbell Raise","Hammer Strength Shoulder Press","Incline Rear Delt Dumbbell Row","Lateral Dumbbell Raise","Lateral Machine Raise","Low-Pulley Bent-over Lateral Raises","Low-Pulley Standing Lateral Raises","Military Press","One-Arm Standing Dumbbell Press","Overhead Press","Push Press","Rear Delt Dumbbell Raise","Rear Delt Machine Fly","Seated Barbell Press","Seated Barbell Press Smith Machine","Seated Dumbbell Lateral Raise","Seated Dumbbell Press","Smith Machine Overhead Press","Upright Row"],Triceps:["Cable Overhead Triceps Extension","Close Grip Barbell Bench Press","Dumbbell Overhead Triceps Extension","Dumbell Kickback","EZ-Bar Skullcrusher","Lying Triceps Extension","Narrow Push-ups","One Arm Reverse Pushdown","Parallel Bar Triceps Dip","Ring Dip","Rope Push Down","Smith Machine Close Grip Bench Press","V-Bar Push Down"],Biceps:["Barbell Curl","Barbell Curl Against Incline","Cable Curl","Dumbbell Concentration Curl","Dumbbel Curl","Dumbbell Hammer Curl","Dumbbell Preacher Curl","EZ-Bar Curl","EZ-Bar Preacher Curl","Machine Preacher Curl","Seated Dumbbell Curl","Seated Incline Dumbbell Curl","Seated Machine Curl"],Chest:["Cable Crossover","Decline Barbell Bench Press","Decline Hammer Strength Chest Press","Flat Barbell Bench Press","Flat Dumbbell Bench Press","Flat Dumbbell Fly","Incline Barbell Bench Press","Incline Dumbbell Bench Press","Incline Dumbbell Fly","Incline Hammer Strength Chest Press","Parallel Bar Dips","Pectoral Fly","Push-ups","Seated Machine Fly"],Back:["Barbell Row","Barbell Shrug","Chin Up","Deadlift","Dual Pulley Seated Cable Row","Dumbbell Row","Good Morning","Hammer Strength Row","Hyperextension","Lat Pulldown","Machine Shrug","Neutral Chin Up","Pendlay Row","Pull Up","Rack Pull","Seated Cable Row","Seated Row Machine","Straight-Arm Cable Pushdown","T-Bar Row"],Legs:["Barbell Calf Raise","Barbell Front Squat","Barbell Glute Bridge","Barbell Squat","Barbell Squat Smith Machine","Donkey Calf Raise","Glute Machine","Glute-Ham Raise","Leg Extension Machine","Leg Press","Lying Leg Curl Machine","Romanian Deadlift","Seated Calf Raise Machine","Seated Leg Curl Machine","Standing Calf Raise Machine","Standing Glute Extension Machine","Stiff-Legged Deadlift","Sumo Deadlift","Walking Lunges"],Abs:["Ab-Wheel Rollout","Butt Ups","Cable Crunch","Crunch","Crunch Machine","Decline Crunch","Dragon Flag","Hanging Knee Raise","Hanging Leg Raise","Plank","Side Dumbbell/Weight Bend","Side Plank","Standings Side Dumbbell"]},T=["Shoulders","Triceps","Biceps","Chest","Back","Legs","Abs"],W={apiKey:"AIzaSyAs9I7_F506XxHtb85WTU5n00GCs3uCzDU",authDomain:"fitlog-typescript.firebaseapp.com",projectId:"fitlog-typescript",storageBucket:"fitlog-typescript.appspot.com",messagingSenderId:"626280586926",appId:"1:626280586926:web:21fd8bfba9451a9d31d73f"},z=new(function(){function e(){Object(B.a)(this,e),this.auth=void 0,this.user=void 0,this.db=void 0,this.userProgram=void 0,this.muscleList=void 0,this.sectionList=void 0,this.exercisesList=void 0,R.a.initializeApp(W),this.auth=R.a.auth(),this.db=R.a.firestore(),this.userProgram={},this.muscleList=T,this.sectionList=I,this.exercisesList=F}return Object(M.a)(e,[{key:"register",value:function(){var e=Object(A.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.user){e.next=3;break}return e.next=3,this.db.collection("users").doc(this.user.uid).set({name:this.user.displayName,email:this.user.email,userId:this.user.uid,program:{},muscleList:this.muscleList,sectionList:this.sectionList,exerciseList:this.exercisesList});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkIn",value:function(){var e=Object(A.a)(N.a.mark((function e(t){var c,n=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.user=t,e.next=3,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).get().then((function(e){var t,c,a,s;e.exists?(n.userProgram=null===(t=e.data())||void 0===t?void 0:t.program,n.muscleList=null===(c=e.data())||void 0===c?void 0:c.muscleList,n.sectionList=null===(a=e.data())||void 0===a?void 0:a.sectionList,n.exercisesList=null===(s=e.data())||void 0===s?void 0:s.exerciseList):n.register()}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(A.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new R.a.auth.GoogleAuthProvider,e.next=3,this.auth.signInWithRedirect(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(A.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signOut().then((function(){return console.log("logged out")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateProgram",value:function(){var e=Object(A.a)(N.a.mark((function e(t){var c,n=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({program:t}).then((function(){return console.log("Program updated successfully!",n.userProgram)})).catch((function(e){return console.error("Error updating program:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateMuscleList",value:function(){var e=Object(A.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({SectionList:t}).then((function(){return console.log("List of muscles updated successfully!")})).catch((function(e){return console.error("Error updating list:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateSectionList",value:function(){var e=Object(A.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({SectionList:t}).then((function(){return console.log("List of sections updated successfully!")})).catch((function(e){return console.error("Error updating list:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateExerciseList",value:function(){var e=Object(A.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc(null===(c=this.user)||void 0===c?void 0:c.uid).update({exerciseList:t}).then((function(){return console.log("List of exercises updated successfully!")})).catch((function(e){return console.error("Error updating list:",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),H=z,U=function(e){var t=e.name,c=e.exercises,a=e.dayId,s=e.dayName,r=e.muscleId,o=e.typeId,l=Object(n.useContext)(C),d=l.days,j=l.setProgram,h=Object(n.useContext)(S),O=h.dayEdit,f=h.setDay,x=Object(n.useContext)(P),g=x.muscle,y=x.setMuscle,w=Object(n.useContext)(k),E=w.section,L=w.setSection,D=d&&Object.entries(d[a][1]),N=Object(u.g)(),A=D&&Object.entries(D[r][1]),B=Object(n.useState)(c),M=Object(i.a)(B,2),R=M[0],I=M[1];return d&&D&&A?Object(b.jsxs)("div",{className:"ProgramExercises",children:[Object(b.jsx)("h5",{children:Object(b.jsx)(v,{labelText:t,editElement:function(e){if(t!==e){A[o][0]=e;var c=Object.fromEntries(A);D[r][1]=c,d[a][1]=Object.fromEntries(D),H.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))}},deleteElement:function(){A.splice(o,1);var e=Object.fromEntries(A);D[r][1]=e,d[a][1]=Object.fromEntries(D),H.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))},size:"2x"})}),Object(b.jsxs)("ul",{className:"edit-exercises",children:[Object(b.jsx)(m,{caption:"exercise",callback:function(){f(s),L(A[o][0]),y(D[r][0]),N.push({pathname:"/add-exercise",search:"?day=".concat(O,"&group=").concat(g,"&sectionQ=").concat(E)})}}),R.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(v,{labelText:e,editElement:function(n){e!==n&&(c[t]=n,I(Object(p.a)(c)),A[o][1]=c,D[r][1]=Object.fromEntries(A),d[a][1]=Object.fromEntries(D),H.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d)))},deleteElement:function(){R.splice(t,1),I(Object(p.a)(R)),A[o][1]=c,D[r][1]=Object.fromEntries(A),d[a][1]=Object.fromEntries(D),H.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))},size:"lg"})},"".concat(e,"-").concat(t))}))]})]}):Object(b.jsx)("div",{children:" "})},G=function(e){var t=e.name,c=e.data,a=e.dayId,s=e.muscleId,r=e.dayName,o=Object.entries(c),l=Object(n.useContext)(C),d=l.days,j=l.setProgram,h=Object(n.useContext)(S),O=h.dayEdit,f=h.setDay,x=Object(n.useContext)(P),p=x.muscle,g=x.setMuscle,y=Object(n.useState)(),w=Object(i.a)(y,2),E=w[0],k=w[1];Object(n.useEffect)((function(){d&&k(Object.entries(d[a][1]))}),[]);var L=Object(u.g)();return Object(b.jsxs)("div",{className:"ProgramPart",children:[Object(b.jsx)("h2",{className:"edit",children:Object(b.jsx)(v,{labelText:t,editElement:function(e){if(E&&d&&t!==e){E[s][0]=e;var c=Object.fromEntries(E);d[a][1]=c,H.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))}},deleteElement:function(){if(E&&d){E.splice(s,1);var e=Object.fromEntries(E);d[a][1]=e,H.updateProgram(Object.fromEntries(d)),j(Object.fromEntries(d))}}})}),Object(b.jsx)(m,{caption:"exercise type",callback:function(){f(r),g(t),L.push({pathname:"/add-section",search:"?day=".concat(O,"&group=").concat(p)})}}),o.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],o=c[1];return Object(b.jsx)(U,{name:n,exercises:o,dayId:a,dayName:r,muscleId:s,typeId:t},"".concat(n,"-").concat(t))}))]})},V=function(e){var t=e.data,c=e.dayId,n=e.dayName,a=Object.entries(t);return Object(b.jsx)("div",{className:"ProgramDay",children:a.map((function(e,t){var a=Object(i.a)(e,2),s=a[0],r=a[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(G,{name:s,data:r,dayId:c,dayName:n,muscleId:t},"".concat(s,"-").concat(t))})}))})},Q=function(){var e=Object(n.useState)(-1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(u.g)(),r=Object(n.useContext)(C),o=r.program,l=r.days,d=r.setProgram,j=Object(n.useState)(),h=Object(i.a)(j,2),O=h[0],p=h[1],g=Object(n.useContext)(S).setDay;return Object(n.useEffect)((function(){p(l),console.log("days",l),console.log("DayList",O)}),[o]),Object(b.jsxs)("section",{className:"Program",children:[Object(b.jsx)("h2",{children:" Edit or add days to your workout:"}),Object(b.jsx)("ul",{className:"fa-ul add",children:l&&O&&O.map((function(e,t){var n=Object(i.a)(e,2),r=n[0],o=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("li",{onClick:function(e){return function(e,t){a(t===c?-1:t)}(0,t)},children:[Object(b.jsx)(f.a,{icon:x.b,listItem:!0,className:t===c?"rotate":"li-arrow"}),Object(b.jsx)(v,{labelText:r,editElement:function(e){if(r!==e){l[t][0]=e;var c=Object.fromEntries(l);H.updateProgram(c),d(c)}},deleteElement:function(){var e=l;e.splice(t,1);var c=Object.fromEntries(e);H.updateProgram(c),d(c)}})]},"day-".concat(t)),Object(b.jsxs)("div",{className:t===c?"show-schedule":"hide",children:[Object(b.jsx)(m,{caption:"muscle group",callback:function(){g(r),s.push({pathname:"/add-muscle-group",search:"?day=".concat(r)})}}),Object(b.jsx)(V,{data:o,dayId:t,dayName:r})]})]})}))}),Object(b.jsx)(m,{caption:"day",styleClass:"add-day-btn",callback:function(){s.push({pathname:"/add-new-day"})}})]})},q=(c(86),function(e){var t=e.defaultValue,c=e.label,a=e.buttonLabel,s=e.callback,r=Object(n.useState)(t),o=Object(i.a)(r,2),u=o[0],l=o[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){d.current&&d.current.focus()})),Object(b.jsxs)("section",{className:"add-day",children:[Object(b.jsx)("label",{htmlFor:"day-name",children:Object(b.jsx)("h2",{className:"add-header",children:c||"Name"})}),Object(b.jsx)("input",{type:"text",value:u,className:"add-label",name:"day-name",contentEditable:!0,ref:d,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)(m,{caption:a||"",callback:function(){s&&s(u)}})]})}),K=c(24),Z=c(49),J=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.cancelable&&e.preventDefault()},X=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=c.shouldPreventDefault,s=void 0===a||a,r=c.delay,o=void 0===r?300:r,u=Object(n.useState)(!1),l=Object(i.a)(u,2),d=l[0],b=l[1],j=Object(n.useRef)(),h=Object(n.useRef)(),O=Object(n.useCallback)((function(t){s&&t.target&&(t.target.addEventListener("touchend",J,{passive:!1}),h.current=t.target),j.current=setTimeout((function(){e(t),b(!0)}),o)}),[e,o,s]),f=Object(n.useCallback)((function(e){var c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];j.current&&clearTimeout(j.current),c&&!d&&t(e),b(!1),s&&h.current&&h.current.removeEventListener("touchend",J)}),[s,t,d]);return{onMouseDown:function(e){return O(e)},onTouchStart:function(e){return O(e)},onMouseUp:function(e){return f(e)},onMouseLeave:function(e){return f(e,!1)},onTouchEnd:function(e){return f(e)}}},$=c(48),_=(c(43),function(e){return Object(b.jsx)("div",{className:"loading-code-container",children:Object(b.jsxs)($.a,Object(K.a)(Object(K.a)({speed:2,width:340,height:84,viewBox:"0 0 340 84",backgroundColor:"hsl(213, 74%, 20%)",foregroundColor:"hsl(205, 58%, 40%)"},e),{},{children:[Object(b.jsx)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"67",height:"11"}),Object(b.jsx)("rect",{x:"76",y:"0",rx:"3",ry:"3",width:"140",height:"11"}),Object(b.jsx)("rect",{x:"127",y:"48",rx:"3",ry:"3",width:"53",height:"11"}),Object(b.jsx)("rect",{x:"187",y:"48",rx:"3",ry:"3",width:"72",height:"11"}),Object(b.jsx)("rect",{x:"18",y:"48",rx:"3",ry:"3",width:"100",height:"11"}),Object(b.jsx)("rect",{x:"0",y:"71",rx:"3",ry:"3",width:"37",height:"11"}),Object(b.jsx)("rect",{x:"18",y:"23",rx:"3",ry:"3",width:"140",height:"11"}),Object(b.jsx)("rect",{x:"166",y:"23",rx:"3",ry:"3",width:"173",height:"11"})]}))})}),Y=a.a.createContext({muscleList:T,sectionList:I,exercisesList:F,setUsersList:function(e){}}),ee=function(e){var t=e.header,c=e.callback,a=Object(n.useContext)(S),s=a.dayEdit,r=a.setDay,o=Object(n.useContext)(P),d=o.muscle,j=o.setMuscle,h=Object(n.useContext)(k),O=h.section,m=h.setSection,g=Object(n.useRef)(!1),v=Object(Z.useSwipeable)({onSwipeStart:function(e){g.current=e.first,console.log("onSwipeStart",g.current)},onSwiped:function(e){setTimeout((function(){return g.current=e.first}),100)}}),y=Object(n.useContext)(Y),C=y.muscleList,w=y.sectionList,E=y.exercisesList,L=(y.setUsersList,Object(n.useState)(!1)),D=Object(i.a)(L,2),N=D[0],A=D[1],B=Object(n.useState)([]),M=Object(i.a)(B,2),R=M[0],I=M[1],F=Object(n.useState)(Object.keys(E||{})),T=Object(i.a)(F,2),W=T[0],z=T[1],H=Object(n.useState)(),U=Object(i.a)(H,2),G=U[0],V=U[1],Q=Object(n.useState)(!1),q=Object(i.a)(Q,2),J=q[0],$=q[1],ee=Object(l.c)({day:l.b,group:l.b,sectionQ:l.b}),te=Object(i.a)(ee,2),ce=te[0],ne=(te[1],Object(n.useCallback)((function(){W.find((function(e){return e===d}))&&V(E[d])}),[E,W,d])),ae=Object(n.useCallback)((function(){switch(t){case"Muscle":V(C);break;case"Section":V(w);break;case"Exercise":E&&V(E[d]),E&&z(Object.keys(E)),ne()}}),[E,t,d,C,ne,w]),se=function(e){if(!g.current)if(N)if(R.includes(e.target.innerHTML)){var t=R.filter((function(t){return t!==e.target.innerHTML}));I(t)}else I((function(t){return[].concat(Object(p.a)(t),[e.target.innerHTML])}));else c&&c(e.target.innerHTML)},re=X((function(e){"Exercise"===t?(A(!0),I((function(t){return[].concat(Object(p.a)(t),[e.target.innerHTML])}))):se(e)}),se,{shouldPreventDefault:!0,delay:500}),ie=ce.day,oe=ce.group,ue=ce.sectionQ;Object(n.useEffect)((function(){""!==O&&""!==d&&""!==s||($(!0),ie||oe||ue?(ie&&r(ie),oe&&j(oe),ue&&m(ue),$(!1),ae()):le.push("/"))}),[O,d,s]);var le=Object(u.g)();return Object(n.useEffect)((function(){ae()}),[]),!J&&G?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:t}),"Exercise"===t&&Object(b.jsx)("h4",{children:"press and hold to select multiple exercises"}),Object(b.jsx)("ul",Object(K.a)(Object(K.a)({className:"add-list"},v),{},{children:G&&G.map((function(e,t){return Object(n.createElement)("li",Object(K.a)(Object(K.a)({},re),{},{key:"".concat(t,"-").concat(e),id:"".concat(t,"-").concat(e),className:R.includes(e)?"selected-exercise":""}),e)}))})),N&&Object(b.jsxs)("div",{className:"multiselect-buttons",children:[Object(b.jsxs)("span",{className:"fa-layers fa-fw visible",onClick:function(e){I([]),A(!1)},children:[Object(b.jsx)(f.a,{icon:x.d,color:"var(--light-red)",size:"4x"}),Object(b.jsx)(f.a,{icon:x.h,color:"white",size:"3x"})]}),Object(b.jsx)(f.a,{icon:x.c,className:"check-edit visible",onClick:function(e){c&&c(R)},size:"4x"})]})]}):Object(b.jsx)(_,{})},te=function(){var e=Object(u.g)(),t=Object(n.useContext)(S).dayEdit,c=Object(n.useContext)(P).setMuscle;return Object(n.useEffect)((function(){}),[t]),Object(b.jsx)(ee,{header:"Muscle",callback:function(n){!Array.isArray(n)&&c(n),e.push({pathname:"/add-muscle-group/2",search:"?day=".concat(t,"&group=").concat(n)})}})},ce=function(){var e=Object(u.g)(),t=Object(n.useContext)(S).dayEdit,c=Object(n.useContext)(P).muscle,a=Object(n.useContext)(k),s=a.section,r=a.setSection;return Object(b.jsx)(ee,{header:"Section",callback:function(n){!Array.isArray(n)&&r(n),e.push({pathname:"/add-muscle-group/3",search:"?day=".concat(t,"&group=").concat(c,"&sectionQ=").concat(s)})}})},ne=function(){var e=Object(u.g)(),t=Object(n.useContext)(C),c=t.program,a=t.setProgram,s=Object(n.useContext)(S).dayEdit,r=Object(n.useContext)(P).muscle,o=Object(n.useContext)(k).section,l=Object(n.useState)(),d=Object(i.a)(l,2),j=d[0],h=d[1];return Object(n.useEffect)((function(){c&&h(c)}),[c]),Object(b.jsx)(ee,{header:"Exercise",callback:function(t){var c;j&&(j[s][r]={},j[s][r][o]=[],Array.isArray(t)?(c=j[s][r][o]).push.apply(c,Object(p.a)(t)):j[s][r][o].push(t),H.updateProgram(j),a(j),e.push("/".concat(s)))}})},ae=function(){var e=Object(u.g)(),t=Object(n.useContext)(S).dayEdit,c=Object(n.useContext)(P).muscle,a=Object(n.useContext)(k),s=a.section,r=a.setSection;return Object(b.jsx)(ee,{header:"Section",callback:function(n){!Array.isArray(n)&&r(n),e.push({pathname:"/add-section/2",search:"?day=".concat(t,"&group=").concat(c,"&sectionQ=").concat(s)})}})},se=function(){var e=Object(u.g)(),t=Object(n.useContext)(C),c=t.program,a=t.setProgram,s=Object(n.useContext)(S).dayEdit,r=Object(n.useContext)(P).muscle,o=Object(n.useContext)(k).section,l=Object(n.useState)(),d=Object(i.a)(l,2),j=d[0],h=d[1];return Object(n.useEffect)((function(){c&&h(c)}),[c]),Object(b.jsx)(ee,{header:"Exercise",callback:function(t){var c;j&&(j[s][r][o]=[],Array.isArray(t)?(c=j[s][r][o]).push.apply(c,Object(p.a)(t)):j[s][r][o].push(t),H.updateProgram(j),a(j),e.push("/".concat(s)))}})},re=function(){var e=Object(u.g)(),t=Object(n.useContext)(C),c=t.program,a=t.setProgram,s=Object(n.useContext)(S).dayEdit,r=Object(n.useContext)(P).muscle,o=Object(n.useContext)(k).section,l=Object(n.useState)(),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(n.useState)(),f=Object(i.a)(O,2),x=f[0],m=f[1];return Object(n.useEffect)((function(){c&&(h(c),m(c))}),[c]),Object(b.jsx)(ee,{header:"Exercise",callback:function(t){var c;j&&x&&(Array.isArray(t)?(c=j[s][r][o]).push.apply(c,Object(p.a)(t)):j[s][r][o].push(t),x[s]=j[s],H.updateProgram(x),a(x),e.push("/".concat(s)))}})},ie=function(){var e=Object(n.useContext)(C).days,t=Object(n.useContext)(S).setDay,c=Object(u.g)();return Object(b.jsx)(q,{defaultValue:e?"Day ".concat(e.length+1):"Day 1",label:"Choose a name",buttonLabel:"day",callback:function(e){e&&t(e),c.push({pathname:"/add-new-day/2",search:"?day=".concat(e)})}})},oe=function(){var e=Object(u.g)(),t=Object(n.useContext)(S).dayEdit,c=Object(n.useContext)(P).setMuscle;return Object(b.jsx)(ee,{header:"Muscle",callback:function(n){!Array.isArray(n)&&c(n),e.push({pathname:"/add-new-day/3",search:"?day=".concat(t,"&group=").concat(n)})}})},ue=function(){var e=Object(u.g)(),t=Object(n.useContext)(S).dayEdit,c=Object(n.useContext)(P).muscle,a=Object(n.useContext)(k).setSection;return Object(b.jsx)(ee,{header:"Section",callback:function(n){!Array.isArray(n)&&a(n),e.push({pathname:"/add-new-day/4",search:"?day=".concat(t,"&group=").concat(c,"&sectionQ=").concat(n)})}})},le=function(){var e=Object(u.g)(),t=Object(n.useContext)(C),c=t.program,a=t.setProgram,s=Object(n.useContext)(S).dayEdit,r=Object(n.useContext)(P).muscle,o=Object(n.useContext)(k).section,l=Object(n.useState)(),d=Object(i.a)(l,2),j=d[0],h=d[1];return Object(n.useEffect)((function(){h(c||{})}),[c]),Object(b.jsx)(ee,{header:"Exercise",callback:function(t){var c;j&&(j[s]={},j[s][r]={},j[s][r][o]=[],Array.isArray(t)?(c=j[s][r][o]).push.apply(c,Object(p.a)(t)):j[s][r][o].push(t),H.updateProgram(j),a(j),e.push("/".concat(s)))}})},de=c(50),be=function(){return Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),H.login()},className:"sign-in-btn",children:"Sign in with Google"})},je=function(){var e=Object(n.useContext)(C).setProgram,t=Object(u.g)();return Object(b.jsx)("button",{onClick:function(){H.logout().then((function(){e({}),t.push("/home"),console.log(t)}))},children:"Sign Out"})},he=function(e){var t=e.isOpen,c=e.callback,n=Object(d.a)(H.auth),a=Object(i.a)(n,1)[0];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:t?"burger-menu menu-active":"burger-menu",children:Object(b.jsx)("ul",{children:Object(b.jsxs)("li",{className:"user-info",children:[a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:a.photoURL,alt:a.displayName}),a.displayName]}),Object(b.jsx)("span",{onClick:function(){return c()},children:a?Object(b.jsx)(je,{}):Object(b.jsx)(be,{})})]})})})})},Oe=(c(88),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),u=r[0],l=r[1],j=Object(d.a)(H.auth),h=Object(i.a)(j,1)[0];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(he,{isOpen:u,callback:function(){a(!1),l(!1)}}),Object(b.jsx)(de.a,{isActive:c,className:"burger-menu-btn",toggleButton:function(){a(!c),l(!u)},barColor:"white"}),Object(b.jsx)("h3",{className:"nav-header",children:"Workout"}),h&&Object(b.jsx)(o.b,{to:"/edit",children:Object(b.jsx)(f.a,{icon:x.e,size:"1x"})})]})}),fe=function(){var e=Object(u.g)();return Object(b.jsx)(f.a,{icon:x.a,className:"back-button",onClick:function(){e.goBack()}})},xe=function(e){var t=e.header,c=Object(n.useContext)(P).muscle,a=Object(u.g)(),s=Object(n.useState)({pathname:"",search:"?"}),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){"Add Exercise"===t?l({pathname:"/add-to-exercise-list",search:"?group=".concat(c)}):"Add Section"===t?l({pathname:"/add-to-section-list",search:""}):"Add Muscle"===t&&l({pathname:"/add-to-muscle-list",search:""})}),[t]),Object(b.jsx)(f.a,{icon:x.g,className:"plus-button",onClick:function(){a.push(o)}})},me=function(e){var t=e.header,c=e.plus,a=void 0===c||c,s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(u.h)();return Object(n.useEffect)((function(){d.pathname.startsWith("/add-muscle")?("/add-muscle-group"===d.pathname&&l("Add Muscle"),"/add-muscle-group/2"===d.pathname&&l("Add Section"),"/add-muscle-group/3"===d.pathname&&l("Add Exercise")):d.pathname.startsWith("/add-section")?("/add-section"===d.pathname&&l("Add Section"),"/add-section/2"===d.pathname&&l("Add Exercise")):d.pathname.startsWith("/add-exercise")?l("Add Exercise"):d.pathname.startsWith("/add-new-day")&&("/add-new-day"===d.pathname&&l("Add Day"),"/add-new-day/2"===d.pathname&&l("Add Muscle"),"/add-new-day/3"===d.pathname&&l("Add Section"),"/add-new-day/4"===d.pathname&&l("Add Exercise"))}),[d.pathname]),Object(b.jsxs)("nav",{className:"add",children:[Object(b.jsx)(fe,{}),Object(b.jsx)("h3",{className:"nav-header",children:t||o}),a&&"/add-new-day"!==d.pathname&&Object(b.jsx)(xe,{header:o&&o})]})},pe=Object(u.i)((function(){var e=Object(n.useContext)(C).days,t=Object(u.h)(),c=Object(n.useState)(),a=Object(i.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(),j=Object(i.a)(l,2),h=j[0],O=j[1],f=Object(d.a)(H.auth),x=Object(i.a)(f,1)[0];return Object(n.useEffect)((function(){x?x&&!t.pathname.startsWith("/add")?(O(Object(b.jsx)(Oe,{})),r(e?e.map((function(e,c){var n=Object(i.a)(e,2),a=n[0];n[1];return Object(b.jsx)(o.c,{to:"/".concat(a),className:t.pathname==="/".concat(a)?"active":"",children:a})})):void 0)):(O(Object(b.jsx)(me,{})),r(void 0)):(O(Object(b.jsx)(Oe,{})),r(void 0))}),[e,t.pathname,x]),Object(n.useEffect)((function(){"/pdf"===t.pathname&&(O(void 0),r(void 0))}),[t.pathname]),Object(b.jsxs)(b.Fragment,{children:[h&&Object(b.jsx)("nav",{children:h}),s&&Object(b.jsx)("nav",{className:"days-container",children:s})]})})),ge=Object(u.i)((function(e){var t=Object(d.a)(H.auth),c=Object(i.a)(t,3),a=c[0],s=(c[1],c[2],Object(n.useContext)(C).days),r=Object(u.g)();return Object(n.useEffect)((function(){s&&void 0!==s[0]&&r.push("/".concat(s[0][0]))}),[s]),Object(b.jsx)("div",{children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Hello, ",a.displayName,"! let's start creating your workout:"]}),Object(b.jsx)(m,{caption:"day",styleClass:"add-day-btn",callback:function(){r.push({pathname:"/add-new-day"})}})]}):Object(b.jsx)(be,{})})})),ve=function(){var e=Object(n.useContext)(C),t=e.days,c=e.program,a=e.setProgram,s=Object(n.useContext)(Y),r=s.muscleList,j=s.sectionList,h=s.exercisesList,f=s.setUsersList,x=Object(n.useContext)(P).muscle,m=Object(d.a)(H.auth),p=Object(i.a)(m,1)[0],g=Object(n.useState)(),v=Object(i.a)(g,2),y=v[0],w=v[1],S=Object(u.h)(),E=Object(u.g)(),k=Object(n.useState)(),L=Object(i.a)(k,2),D=L[0],N=L[1];return Object(n.useEffect)((function(){p&&(N(!0),H.checkIn(p).then((function(){a(H.userProgram),f({newMuscleList:H.muscleList,newSectionList:H.sectionList,newExercisesList:H.exercisesList}),N(!1)})))}),[p]),Object(n.useEffect)((function(){t&&w(t.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(b.jsx)(u.b,{exact:!0,path:"/".concat(n),children:Object(b.jsx)(O,{data:a},t)})})))}),[t,S.pathname]),Object(b.jsx)(o.a,{basename:"/fitlog-pwa",children:Object(b.jsxs)(l.a,{ReactRouterRoute:u.b,children:[D?Object(b.jsx)(_,{}):Object(b.jsx)(pe,{}),Object(b.jsxs)(u.d,{children:[y,p?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(u.a,{to:c&&t&&t[0]?"".concat(t[0][0]):"/home"})}}),Object(b.jsx)(u.b,{exact:!0,path:"/home",children:p?Object(b.jsx)(ge,{}):Object(b.jsx)(be,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/edit",children:Object(b.jsx)(Q,{})}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-muscle-group",children:[Object(b.jsx)(te,{}),";"]}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-muscle-group/2",children:[Object(b.jsx)(ce,{}),";"]}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-muscle-group/3",children:[Object(b.jsx)(ne,{}),";"]}),Object(b.jsx)(u.b,{exact:!0,path:"/add-section",children:Object(b.jsx)(ae,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-section/2",children:Object(b.jsx)(se,{})}),Object(b.jsxs)(u.b,{exact:!0,path:"/add-exercise",children:[Object(b.jsx)(re,{}),";"]}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day",children:Object(b.jsx)(ie,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day/2",children:Object(b.jsx)(oe,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day/3",children:Object(b.jsx)(ue,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-new-day/4",children:Object(b.jsx)(le,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-to-exercise-list",children:Object(b.jsx)(q,{defaultValue:"new exercise",label:"Add Exercise to ".concat(x),buttonLabel:"add exercise",callback:function(e){if(e){var t=h;t&&t[x].push(e),f({newExercisesList:t}),H.updateExerciseList(t),E.goBack()}}})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-to-section-list",children:Object(b.jsx)(q,{defaultValue:"new section",label:"Add a New Section",buttonLabel:"add section",callback:function(e){if(e){var t=j;t&&t.push(e),H.updateSectionList(t),E.goBack()}}})}),Object(b.jsx)(u.b,{exact:!0,path:"/add-to-muscle-list",children:Object(b.jsx)(q,{defaultValue:"new muscle",label:"Add a New Exercise Group",buttonLabel:"add group",callback:function(e){if(e){var t=r;t&&t.push(e);var c=h;c&&(c[e]=[]),H.updateMuscleList(t),H.updateExerciseList(c),E.goBack()}}})})]}):Object(b.jsx)(u.b,{path:"/",children:Object(b.jsx)(be,{})})]})]})})},ye={defaultObj:void 0,setAdd:function(e){}},Ce=a.a.createContext(ye);var we=function(){var e=function(){var e=a.a.useState(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=a.a.useState(c&&Object.entries(c)),r=Object(i.a)(s,2),o=r[0],u=r[1];return{program:c,days:o,setProgram:a.a.useCallback((function(e){n(e),u(Object.entries(e))}),[])}}(),t=function(){var e=a.a.useState({}),t=Object(i.a)(e,2),c=t[0],n=t[1];return{defaultObj:c,setAdd:a.a.useCallback((function(e){n(e)}),[])}}(),c=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return{muscle:c,setMuscle:a.a.useCallback((function(e){n(e)}),[])}}(),s=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return{section:c,setSection:a.a.useCallback((function(e){n(e)}),[])}}(),r=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return{dayEdit:c,setDay:a.a.useCallback((function(e){n(e)}),[])}}(),u=function(){var e=a.a.useState(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=a.a.useState(),r=Object(i.a)(s,2),o=r[0],u=r[1],l=a.a.useState(),d=Object(i.a)(l,2),b=d[0],j=d[1];return{muscleList:c,sectionList:o,exercisesList:b,setUsersList:a.a.useCallback((function(e){e.newMuscleList&&n(e.newMuscleList),e.newSectionList&&u(e.newSectionList),e.newExercisesList&&j(e.newExercisesList)}),[])}}(),l=Object(d.a)(z.auth),j=Object(i.a)(l,3),h=j[0],O=j[1];return j[2],Object(n.useEffect)((function(){if(h)return window.onbeforeunload=function(){return!0},function(){window.onbeforeunload=null}}),[h]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(Y.Provider,{value:u,children:Object(b.jsx)(C.Provider,{value:e,children:Object(b.jsx)(Ce.Provider,{value:t,children:Object(b.jsx)(P.Provider,{value:c,children:Object(b.jsx)(k.Provider,{value:s,children:Object(b.jsx)(S.Provider,{value:r,children:Object(b.jsx)(o.a,{children:O?Object(b.jsx)(_,{}):Object(b.jsx)(ve,{})})})})})})})})})},Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ke=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(we,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fitlog-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/fitlog-pwa","/service-worker.js");Se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ee(t,e)}))}}(),ke()}},[[89,1,2]]]);
//# sourceMappingURL=main.c010cfa4.chunk.js.map