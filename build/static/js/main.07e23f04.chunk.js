(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"projects":[{"title":"CodeDoc","desc":"lorem","tools":["React","Javascript","AWS","Node"],"images":["codedoc/codedoc-1.png","codedoc/codedoc-2.png","codedoc/codedoc-3.png","codedoc/codedoc-4.png"],"link":"https://adoring-meitner-4b38b9.netlify.app/"},{"title":"clipz","desc":"lorem","tools":["Angular","Typescript","WASM","Firebase"],"images":["clipz/clipz-1.png","clipz/clipz-2.png","clipz/clipz-3.png","clipz/clipz-4.png"],"link":"https://clips-six.vercel.app/"},{"title":"SoundOff","desc":"lorem","tools":["React","Javascript","Material UI","Firebase"],"images":["soundoff/soundoff-1.png","soundoff/soundoff-2.png","soundoff/soundoff-3.png","soundoff/soundoff-4.png"],"link":"https://silly-goldberg-49d4fb.netlify.app/"}],"social":[{"icon":"ion-social-linkedin","link":"https://www.linkedin.com/in/jason-murphy-3704ba1b8/"},{"icon":"ion-social-github","link":"https://github.com/jmurphy1196"}],"introText":["Problem Solver","Front End Developer","Back End Developer"]}')},function(e,a,t){e.exports=t.p+"static/media/male1.72ca3a1c.png"},,,function(e,a,t){e.exports=t.p+"static/media/male.72ca3a1c.png"},,function(e,a,t){e.exports=t.p+"static/media/earth.67af05e1.jpg"},function(e,a,t){e.exports=t(33)},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/myImage.bd80794f.png"},function(e,a,t){e.exports=t.p+"static/media/code-doc.b490707a.png"},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(9),r=t.n(l),o=(t(18),t(19),t(20),t(21),t(22),t(23),t(24),t(25),t(26),t(1)),s=t.n(o);s.a.easing.jswing=s.a.easing.swing,s.a.extend(s.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,c){return s.a.easing[s.a.easing.def](e,a,t,n,c)},easeInQuad:function(e,a,t,n,c){return n*(a/=c)*a+t},easeOutQuad:function(e,a,t,n,c){return-n*(a/=c)*(a-2)+t},easeInOutQuad:function(e,a,t,n,c){return(a/=c/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,c){return n*(a/=c)*a*a+t},easeOutCubic:function(e,a,t,n,c){return n*((a=a/c-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,c){return(a/=c/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,c){return n*(a/=c)*a*a*a+t},easeOutQuart:function(e,a,t,n,c){return-n*((a=a/c-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,c){return(a/=c/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,c){return n*(a/=c)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,c){return n*((a=a/c-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,c){return(a/=c/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,c){return-n*Math.cos(a/c*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,c){return n*Math.sin(a/c*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,c){return-n/2*(Math.cos(Math.PI*a/c)-1)+t},easeInExpo:function(e,a,t,n,c){return 0==a?t:n*Math.pow(2,10*(a/c-1))+t},easeOutExpo:function(e,a,t,n,c){return a==c?t+n:n*(1-Math.pow(2,-10*a/c))+t},easeInOutExpo:function(e,a,t,n,c){return 0==a?t:a==c?t+n:(a/=c/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,c){return-n*(Math.sqrt(1-(a/=c)*a)-1)+t},easeOutCirc:function(e,a,t,n,c){return n*Math.sqrt(1-(a=a/c-1)*a)+t},easeInOutCirc:function(e,a,t,n,c){return(a/=c/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,c){var l=1.70158,r=0,o=n;if(0==a)return t;if(1==(a/=c))return t+n;if(r||(r=.3*c),o<Math.abs(n)){o=n;l=r/4}else l=r/(2*Math.PI)*Math.asin(n/o);return-o*Math.pow(2,10*(a-=1))*Math.sin((a*c-l)*(2*Math.PI)/r)+t},easeOutElastic:function(e,a,t,n,c){var l=1.70158,r=0,o=n;if(0==a)return t;if(1==(a/=c))return t+n;if(r||(r=.3*c),o<Math.abs(n)){o=n;l=r/4}else l=r/(2*Math.PI)*Math.asin(n/o);return o*Math.pow(2,-10*a)*Math.sin((a*c-l)*(2*Math.PI)/r)+n+t},easeInOutElastic:function(e,a,t,n,c){var l=1.70158,r=0,o=n;if(0==a)return t;if(2==(a/=c/2))return t+n;if(r||(r=c*(.3*1.5)),o<Math.abs(n)){o=n;l=r/4}else l=r/(2*Math.PI)*Math.asin(n/o);return a<1?o*Math.pow(2,10*(a-=1))*Math.sin((a*c-l)*(2*Math.PI)/r)*-.5+t:o*Math.pow(2,-10*(a-=1))*Math.sin((a*c-l)*(2*Math.PI)/r)*.5+n+t},easeInBack:function(e,a,t,n,c,l){return void 0==l&&(l=1.70158),n*(a/=c)*a*((l+1)*a-l)+t},easeOutBack:function(e,a,t,n,c,l){return void 0==l&&(l=1.70158),n*((a=a/c-1)*a*((l+1)*a+l)+1)+t},easeInOutBack:function(e,a,t,n,c,l){return void 0==l&&(l=1.70158),(a/=c/2)<1?n/2*(a*a*((1+(l*=1.525))*a-l))+t:n/2*((a-=2)*a*((1+(l*=1.525))*a+l)+2)+t},easeInBounce:function(e,a,t,n,c){return n-s.a.easing.easeOutBounce(e,c-a,0,n,c)+t},easeOutBounce:function(e,a,t,n,c){return(a/=c)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,c){return a<c/2?.5*s.a.easing.easeInBounce(e,2*a,0,n,c)+t:.5*s.a.easing.easeOutBounce(e,2*a-c,0,n,c)+.5*n+t}});t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),m=t(3),u=t(5),d=t(4),p=t(7),f=t.n(p),v=t(10),b=t.n(v),E=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={logo:f.a},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=s()("nav").outerHeight();s()(".navbar-toggler").on("click",(function(){s()("#mainNav").hasClass("navbar-reduce")||s()("#mainNav").addClass("navbar-reduce")})),s()("body").scrollspy({target:"#mainNav",offset:a}),s()(".js-scroll").on("click",(function(){s()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:b.a})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:f.a}))})),s()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=s()(this.hash);if((e=e.length?e:s()("[name="+this.hash.slice(1)+"]")).length)return s()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),s()(".js-scroll").on("click",(function(){s()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},c.a.createElement("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})),c.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),t}(c.a.Component),h=(t(30),t(11)),g=t.n(h),N=t(6),k=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"home",className:"intro route bg-image background"},c.a.createElement("div",{id:"stars"}),c.a.createElement("div",{id:"stars2"}),c.a.createElement("div",{id:"stars3"}),c.a.createElement("div",{className:"intro-content display-table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Jason"),c.a.createElement("p",{className:"intro-subtitle"},c.a.createElement("span",{className:"text-slider-items"}),c.a.createElement("strong",{className:"text-slider"},c.a.createElement(g.a,{strings:N.introText,typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),c.a.createElement("p",{className:"pt-3"},c.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Work"))))))}}]),t}(c.a.Component),y=(t(31),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"},{id:"JavaScript_skill",content:"TypeScript/JavaScript",porcentage:"90%",value:"90"},{id:"PHP_skill",content:"PHP",porcentage:"70%",value:"70"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:"80"},{id:"Python_skill",content:"Node",porcentage:"75%",value:"75"},{id:"VanillaJS_skill",content:"Git",porcentage:"85%",value:"85"},{id:"Wordpress_skill",content:"Angular",porcentage:"65%",value:"80"}],about_me:[{id:"first-p-about",content:"My name is Jason Murphy. I am a front-end web developer who replicates designs using various front-end technologies"},{id:"second-p-about",content:"Currently, I am building new projects, studying python, and cloud technologies such as AWS. I love solving problems and learning new technologies."},{id:"third-p-about",content:"While not coding or learning, I enjoy watching tv (probably star trek), playing games (probably halo), and also spending time with friends and family."}]},e}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"box-shadow-full"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},c.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},c.a.createElement("img",{className:"img-fluid rounded b-shadow-a",alt:""})))),c.a.createElement("div",{className:"skill-mf"},this.state.skills.map((function(e){return c.a.createElement(c.a.Fragment,{key:e.id},c.a.createElement("span",null,e.content)," ",c.a.createElement("span",{className:"pull-right"},e.porcentage),c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"about-me pt-4 pt-md-0"},c.a.createElement("div",{className:"title-box-2"},c.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return c.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(c.a.Component));t(32);function w(e){var a=e.projectName,t=(e.desc,e.tools),n=e.images,l=e.link,r=n[0];return c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"work-box"},c.a.createElement("a",{href:"".concat("","/images/").concat(r),"data-lightbox":"gallery-vmarine"},c.a.createElement("div",{className:"work-img"},c.a.createElement("img",{src:"".concat("","/images/").concat(r),alt:"",className:"img-fluid"})),c.a.createElement("div",{className:"work-content"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("h2",{className:"w-title"},a),c.a.createElement("div",{className:"w-more"},c.a.createElement("span",{className:"w-ctegory"},t.join(", ")),c.a.createElement("br",null))),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("div",{className:"w-like"},c.a.createElement("span",{className:"ion-ios-plus-outline"})))))),n.map((function(e){return c.a.createElement("a",{href:"".concat("","/images/").concat(e),"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning")})),c.a.createElement("button",{onClick:function(){window.open(l,"_blank")},className:"btn btn-block btn-primary"},"Visit")))}var O=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"title-box text-center"},c.a.createElement("h3",{className:"title-a"},"Projects"),c.a.createElement("p",{className:"subtitle-a"},"Take a look at my work"),c.a.createElement("div",{className:"line-mf"})))),c.a.createElement("div",{className:"row"},N.projects.map((function(e,a){return c.a.createElement(w,{projectName:e.title,tools:e.tools,desc:e.desc,images:e.images,key:a,link:e.link})})))))}}]),t}(c.a.Component),j=t(12),M=t.n(j);function x(e){var a=e.icon,t=e.link;return c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("span",{className:"ico-circle"},c.a.createElement("i",{className:a})))}var I=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+M.a+")"}},c.a.createElement("div",{className:"overlay-mf"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"contact-mf"},c.a.createElement("div",{id:"contact",className:"box-shadow-full"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"title-box-2"},c.a.createElement("h5",{className:"title-left"},"Send A Message")),c.a.createElement("div",null,c.a.createElement("form",{action:"https://formspree.io/f/xqknrlvj",method:"POST",className:"contactForm"},c.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),c.a.createElement("div",{id:"errormessage"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 mb-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),c.a.createElement("div",{className:"validation"}))),c.a.createElement("div",{className:"col-md-12 mb-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),c.a.createElement("div",{className:"validation"}))),c.a.createElement("div",{className:"col-md-12 mb-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),c.a.createElement("div",{className:"validation"}))),c.a.createElement("div",{className:"col-md-12 mb-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),c.a.createElement("div",{className:"validation"}))),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},c.a.createElement("h5",{className:"title-left"},"Get in Touch")),c.a.createElement("div",{className:"more-info"},c.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'm looking forward to hearing from you.",c.a.createElement("br",null))),c.a.createElement("div",{className:"socials"},c.a.createElement("ul",null,N.social.map((function(e){return c.a.createElement("li",null,c.a.createElement(x,{icon:e.icon,link:e.link}))}))))))))))),c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"copyright-box"}))))))}}]),t}(c.a.Component),S=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){s()(".back-to-top").click((function(){return s()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return c.a.createElement("a",{href:"#",className:"back-to-top animated"},c.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),t}(c.a.Component),P=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){s()(window).on("load",(function(){s()("#preloader").length&&s()("#preloader").delay(100).fadeOut("slow",(function(){s()(this).remove()}))}))}},{key:"render",value:function(){return c.a.createElement("div",{id:"preloader"})}}]),t}(c.a.Component);r.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement(k,null),c.a.createElement(y,null),c.a.createElement(O,null),c.a.createElement(I,null),c.a.createElement(S,null),c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.07e23f04.chunk.js.map