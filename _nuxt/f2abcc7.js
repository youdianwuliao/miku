(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1119:function(t,e,n){"use strict";n(531)},1120:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".d2h-file-header{display:none}.d2h-file-wrapper{border:none;border-radius:none;margin-bottom:none}",""]),r.locals={},t.exports=r},1191:function(t,e,n){"use strict";n.r(e);n(91),n(70);var r=n(52),o=n(529),l=n(1147),c=(n(1117),{name:"TextDiff",components:{Dynamic:r.a},data:function(){return{oldString:"",newString:"",results:""}},methods:{diff:function(){if(this.oldString)if(this.newString){var input=Object(o.createPatch)("文件",this.oldString,this.newString),t=l.a(input,{drawFileList:!1,matching:"lines",outputFormat:"side-by-side",diffTooBigMessage:"文本差异过大"});t.includes("File without changes")?this.$noty.error("没有找到差异"):this.results=t}else this.$noty.error("请输入新文本");else this.$noty.error("请输入旧文本")}}}),f=(n(1119),n(2)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"textdiff"},[e("nya-container",{attrs:{title:"文本对比"}},[e("nya-input",{staticClass:"mb-15",attrs:{fullwidth:"",rows:"5",type:"textarea",autofocus:"",autocomplete:"off",label:"旧文本",placeholder:"console.log('JustGame')"},model:{value:t.oldString,callback:function(e){t.oldString=e},expression:"oldString"}}),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{fullwidth:"",rows:"5",type:"textarea",autocomplete:"off",label:"新文本",placeholder:"console.info('JustGame')"},model:{value:t.newString,callback:function(e){t.newString=e},expression:"newString"}}),t._v(" "),e("div",{staticClass:"nya-btn",on:{click:t.diff}},[t._v("\n            生成对比\n        ")])],1),t._v(" "),t.results.length?e("nya-container",{attrs:{title:"对比结果"}},[e("Dynamic",{attrs:{template:t.results}})],1):t._e(),t._v(" "),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("\n                使用："),e("a",{attrs:{href:"https://github.com/kpdecker/jsdiff",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsdiff")]),t._v("生成对比数据\n            ")]),t._v(" "),e("li",[t._v("\n                使用："),e("a",{attrs:{href:"https://github.com/rtfpessoa/diff2html",target:"_blank",rel:"noopener noreferrer"}},[t._v("diff2html")]),t._v("渲染对比结果\n            ")])])])],1)}),[],!1,null,null,null);e.default=component.exports},531:function(t,e,n){var content=n(1120);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("0fd7876e",content,!0,{sourceMap:!1})}}]);