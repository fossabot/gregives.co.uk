(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{342:function(t,r,e){var content=e(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("153afd68",content,!0,{sourceMap:!1})},377:function(t,r,e){"use strict";var o=e(342);e.n(o).a},378:function(t,r,e){(r=e(15)(!1)).push([t.i,':root{--color__primary:#35f;--color__primary--muted:rgba(51,85,255,0.3);--color__primary--hue:230deg;--color__body:#f8f9fc;--color__body--overlay:#fff;--color__body--blur:hsla(0,0%,100%,0.9);--color__text:rgba(0,0,0,0.87);--color__text--muted:rgba(0,0,0,0.6);--color__text--muter:rgba(0,0,0,0.02);--box-shadow:0 0 2rem -1rem rgba(0,0,0,0.2);--box-shadow--small:0 0 0.5rem -0.25rem rgba(0,0,0,0.2);--box-shadow--primary:0 0.5rem 1rem -0.5rem #35f;--box-shadow--primary-small:0 0.25rem 0.5rem -0.25rem #35f}@media screen{:root[data-theme=dark]{--color__primary:#9af;--color__primary--muted:rgba(153,170,255,0.3);--color__primary--hue:230deg;--color__body:#191d2e;--color__body--overlay:#20253c;--color__body--blur:rgba(32,37,60,0.9);--color__text:hsla(0,0%,100%,0.87);--color__text--muted:hsla(0,0%,100%,0.6);--color__text--muter:hsla(0,0%,100%,0.05);--box-shadow:0 0 2rem -1rem rgba(0,0,0,0.4);--box-shadow--small:0 0 0.5rem -0.25rem rgba(0,0,0,0.4);--box-shadow--primary:0 0.5rem 1rem -0.5rem #20253c;--box-shadow--primary-small:0 0.25rem 0.5rem -0.25rem #20253c}}@media print{:root{--color__body:#fff}}.project{margin:0 auto;max-width:1080px;position:relative;width:90%;min-height:100vh;min-height:calc(var(--vh, 1vh)*100);padding-top:6rem;padding-bottom:3rem}@media print{.project{margin:0;padding:0;width:100%}}@supports ((-webkit-clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%)) or (clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%))){.project:before{background-image:radial-gradient(rgba(51,85,255,.3) 10%,transparent 0);background-image:radial-gradient(var(--color__primary--muted) 10%,transparent 0);background-size:1rem 1rem;-webkit-clip-path:polygon(60% 0,100% 0,100% 100%,30% 40%);clip-path:polygon(60% 0,100% 0,100% 100%,30% 40%);content:"";height:100%;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw;z-index:-1}}.project:before{height:15rem}.project__content{display:grid;grid-template-columns:100%}@media (min-width:992px){.project__content{grid-template-columns:1fr 3fr}}.project__title{font-size:calc(120% + 2vw);margin-bottom:1.75rem}@media (min-width:1200px){.project__title{font-size:calc(120% + 24px)}}.project__details{margin-bottom:1rem;margin-top:-1rem}@media (min-width:992px){.project__details{margin-top:-3.75rem}}@media (min-width:992px){.project__sticky{position:-webkit-sticky;position:sticky;top:6rem}}.project__back{color:rgba(0,0,0,.6);color:var(--color__text--muted);display:none;margin-bottom:1rem;-webkit-transition:color .15s ease-out;transition:color .15s ease-out}.project__back:hover{color:#35f;color:var(--color__primary)}.project__back--mobile{display:block}@media (min-width:992px){.project__back{display:block;margin-bottom:2rem}.project__back--mobile{display:none}}.project__date{font-family:Tiempos Headline,Georgia,Times,Times New Roman,serif;font-size:120%;margin-bottom:1rem}.project__tag-list{color:rgba(0,0,0,.6);color:var(--color__text--muted);display:none;margin-left:1rem}.project__tag-list-item:before{content:"\\2014"}@media (min-width:992px){.project__tag-list{display:block}}',""]),t.exports=r},479:function(t,r,e){"use strict";e.r(r);e(17);var o,c=e(2),n={computed:{project:function(){return this.$store.state.projects.currentProject},date:function(){return this.project.date.toLocaleString("en-GB",{year:"numeric",month:"long"})}},fetch:(o=Object(c.a)(regeneratorRuntime.mark((function t(r){var e,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.store,o=r.params,c=r.error,t.prev=1,t.next=4,e.dispatch("projects/setCurrentProject",o.project);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),c({statusCode:404,message:"This project could not be found"});case 9:case"end":return t.stop()}}),t,null,[[1,6]])}))),function(t){return o.apply(this,arguments)}),head:function(){return{title:this.project.title,meta:[{hid:"description",name:"description",content:this.project.description}]}}},l=(e(377),e(3)),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("main",{staticClass:"project"},[e("div",{staticClass:"project__content"},[e("div",[e("div",{staticClass:"project__back project__back--mobile"},[e("nuxt-link",{attrs:{to:"/projects"}},[t._v("\n          Back to projects  ←\n        ")])],1)]),t._v(" "),e("h1",{staticClass:"project__title"},[t._v(t._s(t.project.title))]),t._v(" "),e("div",{staticClass:"project__details"},[e("div",{staticClass:"project__sticky"},[e("div",{staticClass:"project__back"},[e("nuxt-link",{attrs:{to:"/projects"}},[t._v("\n            Back to projects  ←\n          ")])],1),t._v(" "),e("div",{staticClass:"project__date"},[e("div",[t._v(t._s(t.date))])]),t._v(" "),e("ul",{staticClass:"project__tag-list"},t._l(t.project.tags,(function(r){return e("li",{key:r,staticClass:"project__tag-list-item"},[t._v("\n            "+t._s(r)+"\n          ")])})),0)])]),t._v(" "),e("div",{staticClass:"project__text"},[e("markdown",{attrs:{vue:t.project.vue}})],1)])])}),[],!1,null,null,null);r.default=component.exports}}]);