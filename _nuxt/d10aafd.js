(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(t,e,o){var content=o(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("787d3230",content,!0,{sourceMap:!1})},373:function(t,e,o){"use strict";o(358)},374:function(t,e,o){var n=o(22)(!1);n.push([t.i,".PostPage[data-v-92289110]{color:#fff}.post[data-v-92289110],.PostPage[data-v-92289110]{width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;text-align:center}.postTitle[data-v-92289110]{width:90%;font-size:4vw;margin-bottom:10px}.img[data-v-92289110]{width:50%;height:350px;background-position:50%;background-size:cover;margin:20px 0}.text[data-v-92289110]{width:60%;line-height:23px;margin-bottom:30px}",""]),t.exports=n},384:function(t,e,o){"use strict";o.r(e);var n=o(29),d=o.n(n),l={asyncData:function(t){return d.a.get("https://nuxt-blog-92d4c-default-rtdb.europe-west1.firebasedatabase.app/posts/"+t.params.id+".json").then((function(t){return{loadedPost:t.data}})).catch((function(e){return t.error(e)}))}},r=(o(373),o(8)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"PostPage"},[o("section",{staticClass:"post"},[o("h1",{staticClass:"postTitle"},[t._v(t._s(t.loadedPost.title))]),t._v(" "),o("div",{staticClass:"img",style:{backgroundImage:"url("+t.loadedPost.thumbnail+")"}}),t._v(" "),o("div",{staticClass:"postDetails"},[o("p",[t._v(t._s(t._f("date")(t.loadedPost.updatedDate)))]),t._v(" "),o("p",[t._v("By "+t._s(t.loadedPost.author))])]),t._v(" "),o("p",{staticClass:"text"},[t._v(t._s(t.loadedPost.content))])])])}),[],!1,null,"92289110",null);e.default=component.exports}}]);