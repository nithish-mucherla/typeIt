(this["webpackJsonptype-it"]=this["webpackJsonptype-it"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(8),r=s.n(c),i=(s(14),s(15),s(16),s(0)),o=function(){return Object(i.jsx)("div",{className:"nav",children:"TypeIt"})},u=(s(18),s.p+"static/media/xlr8.6178511a.jpg"),d=s(3),l=s.n(d),j=s(9),h=s(2),b=(s(20),function(e){var t=e.words,s=e.loop,a=Object(n.useState)(""),c=Object(h.a)(a,2),r=c[0],o=c[1],u=function(e){return new Promise((function(t,s){setTimeout(t,e)}))};return Object(n.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.a.mark((function e(s){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t[s],a=l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(150);case 2:o((function(e){return e+n[t]}));case 3:case"end":return e.stop()}}),e)})),c=0;case 3:if(!(c<n.length)){e.next=8;break}return e.delegateYield(a(c),"t0",5);case 5:c++,e.next=3;break;case 8:return e.next=10,u(400);case 10:r=l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(150);case 2:o((function(e){return n.slice(0,n.length-t-1)}));case 3:case"end":return e.stop()}}),e)})),i=0;case 12:if(!(i<n.length)){e.next=17;break}return e.delegateYield(r(i),"t1",14);case 14:i++,e.next=12;break;case 17:case"end":return e.stop()}}),e)})),a=0;case 2:if(!(a<t.length)){e.next=7;break}return e.delegateYield(n(a),"t0",4);case 4:a++,e.next=2;break;case 7:if(s){e.next=0;break}case 8:case"end":return e.stop()}}),e)})))()}),[s,t]),Object(i.jsxs)("span",{children:[r,Object(i.jsx)("span",{className:"cursor",children:"|"})]})}),f=function(){return Object(i.jsxs)("div",{className:"landing-container",children:[Object(i.jsx)("div",{"data-aos":"fade-right",className:"landing-left",children:Object(i.jsxs)("div",{className:"landing-typewriter",children:[Object(i.jsx)("div",{className:"landing-header",children:"Are you good at typing..."}),Object(i.jsx)("div",{className:"landing-typewriter",children:Object(i.jsx)(b,{words:["Fast?","Quick?","Correct?"],loop:!0})})]})}),Object(i.jsx)("div",{"data-aos":"fade-left",className:"landing-right",children:Object(i.jsx)("img",{src:u,alt:"hero",className:"hero-img"})})]})},x=(s(21),function(e){var t=e.wordCount,s=e.charCount,n=e.wpm;return Object(i.jsxs)("div",{className:"stats-container",children:[Object(i.jsxs)("div",{className:"stat","data-aos":"fade-up",children:[Object(i.jsx)("div",{className:"statHead",children:"Chars"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"statValue",children:s})]}),Object(i.jsxs)("div",{className:"stat","data-aos":"fade-up",children:[Object(i.jsx)("div",{className:"statHead",children:"Words"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"statValue",children:t})]}),Object(i.jsxs)("div",{className:"stat","data-aos":"fade-up",children:[Object(i.jsx)("div",{className:"statHead",children:"Speed"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"statValue",children:[n," wpm"]})]})]})}),m=s(7),p=(s(22),function(e){var t=e.letter,s=e.status;return Object(i.jsx)("span",{className:s,children:t})}),O=(s(23),function(e){var t=e.testPara,s=e.userText,a=e.setUserText,c=e.timerActive,r=e.setTimerActivity,o=Object(n.useState)([]),u=Object(h.a)(o,2),d=u[0],l=u[1];Object(n.useEffect)((function(){var e=[];t.split("").forEach((function(t,s){return e.push({letter:t,status:""})})),l([].concat(e))}),[t]);return Object(i.jsxs)("div",{className:"typing-challenge-contianer",children:[Object(i.jsx)("div",{className:"test-para",children:d.map((function(e,t){return Object(i.jsx)(p,{letter:e.letter,status:e.status},t)}))}),Object(i.jsx)("div",{className:"user-text-container",children:Object(i.jsx)("textarea",{className:"user-text-area",onChange:function(e){return function(e){c||r(!0);var t=e.target.value,s=t.length,n=d;n.slice(s).forEach((function(e){return e.status=""})),Object(m.a)(t).forEach((function(e,t){t<d.length&&(n[t].status=n[t].letter===e?"correct":"incorrect")})),l(Object(m.a)(n)),a(t)}(e)},value:s,placeholder:c?"":"Type to start the test..."})})]})}),v=(s(24),function(e){var t=e.wordCount,s=e.charCount,n=e.wpm,a=e.resetTest;return Object(i.jsxs)("div",{className:"result-container",children:[Object(i.jsx)("div",{className:"results-header",children:"Test Results"}),Object(i.jsxs)("div",{className:"results",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Words:"})," ",t]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Characters:"})," ",s]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Speed:"})," ",n," wpm"]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"retry-button",onClick:function(){return a()},children:"RETRY"})})]})}),g=(s(25),function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),r=Object(h.a)(c,2),o=r[0],u=r[1],d=Object(n.useState)(!1),l=Object(h.a)(d,2),j=l[0],b=l[1],f=Object(n.useState)(60),m=Object(h.a)(f,2),p=m[0],g=m[1];Object(n.useEffect)((function(){fetch("https://mashape-community-skate-ipsum.p.rapidapi.com/1/0/JSON",{method:"GET",headers:{"x-rapidapi-key":"3d15874e0amshf1bdb48a55c5499p100e08jsn9ee781838fa3","x-rapidapi-host":"mashape-community-skate-ipsum.p.rapidapi.com"}}).then((function(e){return e.text()})).then((function(e){return a(e.slice(2,e.length-2))})).catch((function(e){a("An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.")}))}),[]),Object(n.useEffect)((function(){if(j){var e=setInterval((function(){p>0&&g((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}}),[j,p]);var N=o.length>0?o.trim().split(" ").length:0,w=o.length,k=60-p,T=k>0?parseInt(N/k*60):0;return p>0?Object(i.jsxs)("div",{className:"test-container",children:[Object(i.jsx)(x,{wordCount:N,charCount:w,wpm:T}),Object(i.jsxs)("div",{className:"countdown-timer",children:["00:",p>9?p:"0"+p]}),Object(i.jsx)(O,{testPara:s,userText:o,setUserText:u,timerActive:j,setTimerActivity:b})]}):Object(i.jsx)(v,{wordCount:N,charCount:w,wpm:T,resetTest:function(){u(""),b(!1),g(60)}})}),N=(s(26),function(){return Object(i.jsxs)("div",{className:"challenge-section",children:[Object(i.jsx)("div",{className:"test-header","data-aos":"fade-down",children:"TAKE THE CHALLENGE NOW !"}),Object(i.jsx)(g,{})]})});var w=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(N,{})]})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,28)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),k()}],[[27,1,2]]]);
//# sourceMappingURL=main.4f4f27cd.chunk.js.map