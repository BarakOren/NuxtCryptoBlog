(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{341:function(t,e,n){"use strict";n.r(e);n(40),n(34),n(36),n(15),n(52),n(35),n(53);var o=n(27),r=n(150),c=n(149);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{AppControlInput:r.default,AppButton:c.default},props:{post:{type:Object,required:!1}},data:function(){return{editedPost:this.post?d({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}},m=n(8),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave.apply(null,arguments)}}},[n("AppControlInput",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("Author Name")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("Thumbnail Link")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("Content")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("Preview Text")]),t._v(" "),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")])],1)}),[],!1,null,"288ef2ba",null);e.default=component.exports},357:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("e4ad27b0",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n(357)},372:function(t,e,n){var o=n(22)(!1);o.push([t.i,".update-form[data-v-e71024ba]{width:50%;margin:20px auto}@media (min-width:768px){.new-post-form[data-v-e71024ba]{width:500px}}",""]),t.exports=o},383:function(t,e,n){"use strict";n.r(e);n(40),n(34),n(36),n(15),n(52),n(35),n(53);var o=n(27),r=n(341),c=n(29),l=n.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",middleware:["checkAuth","auth"],components:{AdminPostForm:r.default},asyncData:function(t){return l.a.get("https://nuxt-blog-92d4c-default-rtdb.europe-west1.firebasedatabase.app/posts/"+t.params.postId+".json").then((function(e){return{loadedPost:f(f({},e.data),{},{id:t.params.postId})}})).catch((function(e){return t.error()}))},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("editPost",t).then((function(){e.$router.push("/admin")}))}}},v=(n(371),n(8)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-post-page"},[n("section",{staticClass:"update-form"},[n("AdminPostForm",{attrs:{post:t.loadedPost},on:{submit:t.onSubmitted}})],1)])}),[],!1,null,"e71024ba",null);e.default=component.exports;installComponents(component,{AdminPostForm:n(341).default})}}]);