(this["webpackJsonptype-it"]=this["webpackJsonptype-it"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(7),i=s.n(c),r=(s(13),s(14),s(15),s(0)),o=function(){return Object(r.jsx)("div",{className:"nav",children:"TypeIt"})},d=(s(17),s.p+"static/media/xlr8.6178511a.jpg"),l=s(8),j=s.n(l),u=function(){return Object(r.jsxs)("div",{className:"landing-container",children:[Object(r.jsx)("div",{"data-aos":"fade-right",className:"landing-left",children:Object(r.jsxs)("div",{className:"landing-typewriter",children:[Object(r.jsx)("div",{className:"landing-header",children:"Are you good at typing..."}),Object(r.jsx)("div",{className:"landing-typewriter",children:Object(r.jsx)(j.a,{options:{strings:["Fast?","Quick?","Correct?"],autoStart:!0,loop:!0}})})]})}),Object(r.jsx)("div",{"data-aos":"fade-left",className:"landing-right",children:Object(r.jsx)("img",{src:d,alt:"hero",className:"hero-img"})})]})},h=s(2),b=(s(18),function(e){var t=e.wordCount,s=e.charCount,a=e.wpm;return Object(r.jsxs)("div",{className:"stats-container",children:[Object(r.jsxs)("div",{className:"stat","data-aos":"fade-up",children:[Object(r.jsx)("div",{className:"statHead",children:"Chars"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"statValue",children:s})]}),Object(r.jsxs)("div",{className:"stat","data-aos":"fade-up",children:[Object(r.jsx)("div",{className:"statHead",children:"Words"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"statValue",children:t})]}),Object(r.jsxs)("div",{className:"stat","data-aos":"fade-up",children:[Object(r.jsx)("div",{className:"statHead",children:"Speed"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"statValue",children:[a," wpm"]})]})]})}),m=s(6),O=(s(19),function(e){var t=e.letter,s=e.status;return Object(r.jsx)("span",{className:s,children:t})}),f=(s(20),function(e){var t=e.testPara,s=e.userText,n=e.setUserText,c=e.timerActive,i=e.setTimerActivity,o=Object(a.useState)([]),d=Object(h.a)(o,2),l=d[0],j=d[1];Object(a.useEffect)((function(){var e=[];t.split("").forEach((function(t,s){return e.push({letter:t,status:""})})),j([].concat(e))}),[t]);return Object(r.jsxs)("div",{className:"typing-challenge-contianer",children:[Object(r.jsx)("div",{className:"test-para",children:l.map((function(e,t){return Object(r.jsx)(O,{letter:e.letter,status:e.status},t)}))}),Object(r.jsx)("div",{className:"user-text-container",children:Object(r.jsx)("textarea",{className:"user-text-area",onChange:function(e){return function(e){c||i(!0);var t=e.target.value,s=t.length,a=l;a.slice(s).forEach((function(e){return e.status=""})),Object(m.a)(t).forEach((function(e,t){t<l.length&&(a[t].status=a[t].letter===e?"correct":"incorrect")})),j(Object(m.a)(a)),n(t)}(e)},value:s,placeholder:c?"":"Type to start the test..."})})]})}),p=(s(21),function(e){var t=e.wordCount,s=e.charCount,a=e.wpm,n=e.resetTest;return Object(r.jsxs)("div",{className:"result-container",children:[Object(r.jsx)("div",{className:"results-header",children:"Test Results"}),Object(r.jsxs)("div",{className:"results",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Words:"})," ",t]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Characters:"})," ",s]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Speed:"})," ",a," wpm"]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"retry-button",onClick:function(){return n()},children:"RETRY"})})]})}),x=(s(22),function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(""),i=Object(h.a)(c,2),o=i[0],d=i[1],l=Object(a.useState)(!1),j=Object(h.a)(l,2),u=j[0],m=j[1],O=Object(a.useState)(60),x=Object(h.a)(O,2),v=x[0],g=x[1];Object(a.useEffect)((function(){fetch("https://mashape-community-skate-ipsum.p.rapidapi.com/3/0/JSON",{method:"GET",headers:{"x-rapidapi-key":"3d15874e0amshf1bdb48a55c5499p100e08jsn9ee781838fa3","x-rapidapi-host":"mashape-community-skate-ipsum.p.rapidapi.com"}}).then((function(e){return e.text()})).then((function(e){return n(e)})).catch((function(e){n("An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.")}))}),[]),Object(a.useEffect)((function(){if(u){var e=setInterval((function(){v>0&&g((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}}),[u,v]);var N=o.length>0?o.trim().split(" ").length:0,w=o.length,y=60-v,T=y>0?parseInt(N/y*60):0;return v>0?Object(r.jsxs)("div",{className:"test-container",children:[Object(r.jsx)(b,{wordCount:N,charCount:w,wpm:T}),Object(r.jsxs)("div",{className:"countdown-timer",children:["00:",v>9?v:"0"+v]}),Object(r.jsx)(f,{testPara:s,userText:o,setUserText:d,timerActive:u,setTimerActivity:m})]}):Object(r.jsx)(p,{wordCount:N,charCount:w,wpm:T,resetTest:function(){d(""),m(!1),g(60)}})}),v=(s(23),function(){return Object(r.jsxs)("div",{className:"challenge-section",children:[Object(r.jsx)("div",{className:"test-header","data-aos":"fade-down",children:"TAKE THE CHALLENGE NOW !"}),Object(r.jsx)(x,{})]})});var g=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(u,{}),Object(r.jsx)(v,{})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),N()}],[[24,1,2]]]);
//# sourceMappingURL=main.bc3e81d5.chunk.js.map