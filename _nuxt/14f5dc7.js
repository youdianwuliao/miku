(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1174:function(t,n,o){"use strict";o.r(n);o(791);var e,r=o(439);e=o(794);var c={name:"JsonEditor",head:function(){return this.$store.state.currentTool.head},data:function(){return{JSONEditor:null}},mounted:function(){this.init()},methods:{init:function(){this.JSONEditor=new e(this.$refs.jsonEditor,{mode:"code",modes:["text","code","tree","form","view"]},{Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"})},download:function(){Object(r.a)(this.JSONEditor.getText(),"main.json")}}},l=(o(796),o(2)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"json_editor"},[n("div",{ref:"jsonEditor",staticClass:"jsonEditor"}),t._v(" "),n("button",{staticClass:"nya-btn mt-15",on:{click:t.download}},[t._v("\n        下载 JSON 文件\n    ")])])}),[],!1,null,null,null);n.default=component.exports},439:function(t,n,o){"use strict";n.a=function(content,t){var n=document.createElement("a");n.download=t,n.style.display="none";var o=new Blob([content]);n.href=URL.createObjectURL(o),n.click()}},499:function(t,n,o){var content=o(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("737deebc",content,!0,{sourceMap:!1})},796:function(t,n,o){"use strict";o(499)},797:function(t,n,o){var e=o(3)((function(i){return i[1]}));e.push([t.i,".json_editor .jsonEditor{height:37.5rem}.json_editor .nya-btn{margin-top:.9375rem}",""]),e.locals={},t.exports=e}}]);