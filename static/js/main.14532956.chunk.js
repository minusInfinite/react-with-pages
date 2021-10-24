(this["webpackJsonpreact-with-pages"]=this["webpackJsonpreact-with-pages"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(3),c=n.n(r),s=(n(10),n(4)),o=n(0);function l(){return Object(o.jsx)("footer",{children:Object(o.jsx)("h2",{children:"Made by minusInfinite"})})}var j=function(e){var t=e.currentContent,n=e.handleContentChange;return Object(o.jsxs)("nav",{children:[Object(o.jsx)("a",{href:"#about-me",onClick:function(){return n("About")},className:"About"===t?"active":"",children:"About Me"}),Object(o.jsx)("a",{href:"#projects",onClick:function(){return n("Projects")},className:"Projects"===t?"active":"",children:"Projects"}),Object(o.jsx)("a",{href:"#social-links",onClick:function(){return n("Contacts")},className:"Contacts"===t?"active":"",children:"Social Links"})]})};function h(e){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Porfolio - Ashley Mann"}),Object(o.jsx)(j,{currentContent:e.currentContent,handleContentChange:e.handleContentChange})]})}function b(){return Object(o.jsxs)("section",{id:"about-me",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsxs)("div",{className:"about-me",children:[Object(o.jsx)("img",{className:".avatar",alt:"avatar",src:"./assets/images/avatar_blue_2021.png"}),Object(o.jsx)("p",{children:"Hi, My name is Ashley, also known as minusInfinite. I've had a fair long history of creating interactive experience but haven't been able to find the time. My previous experience was mostly around the use of a software programme called Flash. It allowed for making animations and interactions that could be used to build really interesting websites. Unfortunately, my career took a more methodical turn and all the fun and time tinkering with webpage and web technology felt like a misuse of my free time."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"All that said, we'll call this a personal renaissance"})]})]})}function m(){return Object(o.jsxs)("section",{id:"social-links",children:[Object(o.jsx)("h2",{children:"Socials"}),Object(o.jsxs)("div",{className:"social-link",children:[Object(o.jsx)("a",{href:"https://www.twitter.com/minusinfinite",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-twitter fa-3x"})}),Object(o.jsx)("p",{children:"The easiest way to contact me direct is via twitter"})]}),Object(o.jsxs)("div",{className:"social-link",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/ashley-minusinfinite-mann/",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-linkedin-in fa-3x"})}),Object(o.jsx)("p",{children:"For my Carrer and Experience History feel free to review via LinkedIn."})]}),Object(o.jsxs)("div",{className:"social-link",children:[Object(o.jsx)("a",{href:"https://github.com/minusInfinite",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-github fa-3x"})}),Object(o.jsx)("p",{children:"For my coding projects, past and present here is a link to my Github."})]}),Object(o.jsxs)("div",{className:"social-link",children:[Object(o.jsx)("a",{href:"https://minusInfinite.net",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-blogger-b fa-3x"})}),Object(o.jsx)("p",{children:"I also occationaly write reviews and commentry on other interests here."})]})]})}var d=n(5);function u(e){return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("figure",{children:[Object(o.jsx)("a",{href:e.projectLink,rel:"noreferrer",target:"_blank",children:Object(o.jsx)("img",{src:e.projectImg,alt:e.imgAlt,title:e.imgTitle})}),Object(o.jsxs)("figcaption",{children:[e.projectcaption,Object(o.jsx)("a",{href:e.projectSource,rel:"noreferrer",target:"_blank",children:"Github"})]})]})})}function p(){return Object(o.jsxs)("section",{id:"projects",children:[Object(o.jsx)("h2",{children:"Projects"}),Object(o.jsx)("div",{className:"projects",children:[{projectLink:"https://nodebbs-demo.herokuapp.com/",projectImg:"./assets/images/project-nodebbs.png",imgAlt:"nodebbs homepage",imgTitle:"The landing page for NodeBBS",projectcaption:"A concept for a classNameic Buliten Board forum in Node/Express/Handlebars -",projectSource:"https://github.com/minusInfinite/nodebbs"},{projectLink:"https://boot-dev-blog.herokuapp.com/",projectImg:"./assets/images/project-devblog.png",imgAlt:"devblog homepage",imgTitle:"the landing page for a Dev Blog",projectcaption:"A Node/Express/Handlebars blogging Web App -",projectSource:"https://github.com/minusInfinite/devblog"},{projectLink:"https://minusinfinite.id.au/shaztxt",projectImg:"./assets/images/project-shaztxt-small.png",imgAlt:"The Landing page for ShazTXT",imgTitle:"The Landing page for ShazTXT",projectcaption:"ShazTXT - Lyric Search with Genius and Youtube APIs -",projectSource:"https://github.com/minusInfinite/nodebbs"},{projectLink:"https://minusinfinite.github.io/weather-dashboard/",projectImg:"./assets/images/project-weather_dashboard.png",imgAlt:"Landing page for my Weather Dashboard",imgTitle:"Landing page for my Weather Dashboard",projectcaption:"A concept for a classNameic Buliten Board forum in Node/Express/Handlebars -",projectSource:"https://github.com/minusInfinite/weather-dashboard"},{projectLink:"https://github.com/minusInfinite/employee-managment-cli",projectImg:"./assets/images/project-emp-man.png",imgAlt:"link to the Github employee-managment-cli",imgTitle:"link to the Github employee-managment-cli",projectcaption:"A fun little CLI that could be used to manage a small team -",projectSource:"https://github.com/minusInfinite/employee-managment-cli"}].map((function(e,t){return Object(o.jsx)(u,Object(d.a)({},e),t.toString())}))})]})}var g=function(){var e=Object(i.useState)("About"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{currentContent:n,handleContentChange:function(e){return a(e)}}),"About"===n?Object(o.jsx)(b,{}):"Projects"===n?Object(o.jsx)(p,{}):Object(o.jsx)(m,{}),Object(o.jsx)(l,{})]})};var f=function(){return Object(o.jsx)(g,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),x()}},[[12,1,2]]]);
//# sourceMappingURL=main.14532956.chunk.js.map