(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1170:function(t,e,n){"use strict";n.r(e);n(21),n(70);var r=n(457),o=n(23),c=n.n(o),l={name:"HideTool",components:{Search:r.a},head:function(){return this.$store.state.currentTool.head},data:function(){return{searchText:""}},computed:{toolsLost:function(){var t=[];return this.$store.state.tools.forEach((function(e){t=t.concat(e.list)})),t}},methods:{enterFirst:function(t){this.hide(t.path)},hide:function(path){if(["/hide_tool","/links"].includes(path))return this.$swal({type:"error",title:"操作失败",text:"ERROR: 该项目无法隐藏"}),!1;var t=c.a.chain(this.$store.state.setting.hide);-1===t.indexOf(path).value()?t.push(path).value():t.pull(path).value(),this.$store.commit("SET_STORE",{key:"setting.hide",value:t.value()})},handleClass:function(path){return{hide:-1!==this.$store.state.setting.hide.indexOf(path)}}}},h=(n(781),n(2)),component=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"hide_tool"},[e("Search",{on:{enter:t.enterFirst},scopedSlots:t._u([{key:"default",fn:function(data){return t._l(data.data,(function(n){return e("button",{key:n.path,staticClass:"nya-btn",class:t.handleClass(n.path),attrs:{type:"button"},on:{click:function(e){return t.hide(n.path)}}},[t._v("\n                "+t._s(n.name)+"\n            ")])}))}}]),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:!t.searchText,expression:"!searchText"}],attrs:{title:"网站工具隐藏"}},t._l(t.$store.state.tools,(function(n,r){return e("div",{key:r},[t._l(n.list,(function(n){return e("button",{key:n.path,staticClass:"nya-btn",class:t.handleClass(n.path),attrs:{type:"button"},on:{click:function(e){return t.hide(n.path)}}},[t._v("\n                "+t._s(n.name)+"\n            ")])})),t._v(" "),e("hr")],2)})),0),t._v(" "),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("如果你不希望某些工具在首页显示，可以点击改至透明后进行隐藏")])])])],1)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("03162ad9",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";n(407)},438:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".search-component .nya-container{margin-bottom:2.1875rem!important}.search-component .search{align-items:center;background-color:#fff;border-radius:.5rem;box-shadow:.5rem .875rem 2.375rem rgba(39,44,49,.06),.0625rem .1875rem .5rem rgba(39,44,49,.03);box-sizing:border-box;display:flex;margin-bottom:3.125rem;margin-top:1.125rem;padding:1rem;transition:all .3s ease;width:100%}.search-component .search.transparent{background-color:hsla(0,0%,100%,.65)}.search-component .search.focus{background-color:var(--theme);box-shadow:0 .5rem .625rem rgba(36,159,253,.302);color:#fff;transform:scale(1.02)}.search-component .search.focus input{color:#fff}.search-component .search.focus input::-moz-placeholder{color:#fff}.search-component .search.focus input::placeholder{color:#fff}.search-component .search i{font-size:1.5625rem;margin-right:.9375rem}.search-component .search input{background-color:transparent;border:none;box-shadow:none;color:var(--t1);outline:none;width:100%}.search-component .search input::-moz-placeholder{padding-left:.3125rem;-moz-transition:color .3s ease;transition:color .3s ease}.search-component .search input::placeholder{padding-left:.3125rem;transition:color .3s ease}.search-component .search-placeholder{font-size:1.25rem;font-weight:700;letter-spacing:.09375rem;position:relative;text-align:center;top:-.5rem;width:100%}",""]),r.locals={},t.exports=r},457:function(t,e,n){"use strict";n(50),n(207),n(21),n(117);var r={name:"Search",inheritAttrs:!1,props:{value:{default:null,type:[String,Number]}},data:function(){return{focus:!1}},computed:{toolsList:function(){var t=[];return this.$store.state.tools.forEach((function(e){t=t.concat(e.list)})),t},searchList:function(){var t=this;if(!this.value)return[];var e=[],n=this.value.toLowerCase();return this.toolsList.forEach((function(r){return!("/hide_tool"!==t.$route.path&&!t.showBtn(r))&&(r.pinyin.first.find((function(i){return i.indexOf(n)>=0}))||r.pinyin.pinyin.find((function(i){return i.indexOf(n)>=0}))?e.push(r):void(r.name.toLowerCase().indexOf(n)>=0&&e.push(r)))})),e}},mounted:function(){window.addEventListener("keydown",this.ctrlF)},beforeDestroy:function(){window.removeEventListener("keydown",this.ctrlF)},methods:{ctrlF:function(t){70==t.keyCode&&t.ctrlKey&&(t.preventDefault(),this.$refs.search.focus())},enterFirst:function(){if(!this.searchList.length)return!1;this.$emit("enter",this.searchList[0])},showBtn:function(t){return this.$store.state.setting.hide.indexOf(t.path)<0}}},o=(n(437),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-component"},[e("div",{staticClass:"search",class:{transparent:"none"!==t.$store.state.setting.bg.type&&t.$store.state.setting.bg.transparentEl,focus:t.focus}},[e("i",{staticClass:"eva eva-search-outline"}),t._v(" "),e("input",t._b({ref:"search",attrs:{type:"search",placeholder:"搜索工具".concat(t.$store.state.isMobile.any?"":"(Ctrl+F)")},domProps:{value:t.value},on:{change:function(e){return t.$emit("change",e)},input:function(e){return t.$emit("input",e.target.value)},keyup:[function(e){return t.$emit("keyup",e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterFirst.apply(null,arguments)}],focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}},"input",t.$attrs,!1))]),t._v(" "),t.value?e("nya-container",{attrs:{title:"搜索结果",icon:"search-outline"}},[t._t("default",null,{data:t.searchList}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.searchList.length,expression:"!searchList.length"}],staticClass:"search-placeholder"},[t._v("\n            暂无搜索结果\n        ")])],2):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},494:function(t,e,n){var content=n(782);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("2fc01640",content,!0,{sourceMap:!1})},781:function(t,e,n){"use strict";n(494)},782:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".hide_tool .nya-btn{font-weight:400;margin:.3125rem;padding:.3125rem .625rem}.hide_tool .nya-btn.hide{opacity:.5}@media(max-width:600px){.hide_tool .nya-btn{box-sizing:border-box;margin:.3125rem;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:calc(50% - .625rem)}}",""]),r.locals={},t.exports=r}}]);