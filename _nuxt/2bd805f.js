(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1202:function(t,r,e){"use strict";e.r(r);var n=e(451).a,o=e(2),component=Object(o.a)(n,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"ssr_decode"},[r("nya-container",{attrs:{title:"SS/SSR/V2ray 配置解析"}},[r("nya-input",{staticClass:"mb-15",attrs:{label:"请输入SSR/SS/V2ray 配置",autocomplete:"off",autofocus:"",fullwidth:""},model:{value:t.configText,callback:function(r){t.configText="string"==typeof r?r.trim():r},expression:"configText"}})],1),t._v(" "),t.results?r("nya-container",{attrs:{title:"解析成功"}},[r("pre",[t._v(t._s(t.results))])]):t._e(),t._v(" "),r("nya-container",{attrs:{title:"说明"}},[r("ul",{staticClass:"nya-list"},[r("li",[t._v("所有解析均在本地进行，不会收集任何配置")])])])],1)}),[],!1,null,null,null);r.default=component.exports},451:function(t,r,e){"use strict";(function(t){e(116),e(202),e(25),e(11),e(46),e(47),e(51),e(48),e(21),e(27),e(40),e(41),e(42);var n=e(452);function o(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return l(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(f)throw o}}}}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}r.a={name:"SsrDecode",head:function(){return this.$store.state.currentTool.head},data:function(){return{configText:"",requestIn:!1}},computed:{results:function(){var r,e=[],l=[],c=o(this.configText.split(" "));try{for(c.s();!(r=c.n()).done;){var f=r.value;""!==f&&e.push(f.replace(/#\w.*/,""))}}catch(t){c.e(t)}finally{c.f()}if(e.length){var m,h=o(e);try{for(h.s();!(m=h.n()).done;){var y=m.value,d=Boolean(y.match(/^ssr?:\/\//)),text=y.replace(/(vmess|ssr?):\/\//,""),v=t.from(text,"base64").toString();if(d){var S={},w=v.split(":");if(y.match(/^ssr:\/\//)){var x=Object(n.a)(w[5]);S.IP=w[0],S["端口"]=w[1],S["协议"]=w[2],S["加密"]=w[3],S["混淆"]=w[4],Object.keys(x).length&&(S["密码"]=t.from(w[5].split("/")[0],"base64").toString()),x.group&&(S["分组"]=t.from(x.group,"base64").toString()),x.remarks&&(S["备注"]=t.from(x.remarks,"base64").toString()),x.protoparam&&(S["协议参数"]=t.from(x.protoparam,"base64").toString()),x.obfsparam&&(S["混淆参数"]=t.from(x.obfsparam,"base64").toString())}else S["加密"]=w[0],S["密码"]=w[1].split("@")[0],S.IP=w[1].split("@")[1],S["端口"]=w[2];l.push(S)}else try{l.push(JSON.parse(v))}catch(t){l.push("解析失败，请检查配置是否正确")}}}catch(t){h.e(t)}finally{h.f()}return l}return!1}}}}).call(this,e(12).Buffer)},452:function(t,r,e){"use strict";e(116);r.a=function(t){if(t&&t.indexOf("?")>-1){var r=t.split("?")[1],e={},n=r.length?r.split("&"):[],o=null,l=null,c=null,i=0,f=n.length;for(i=0;i<f;i++)o=n[i].split("="),l=decodeURIComponent(o[0]),c=decodeURIComponent(o[1]),l.length&&(e[l]=c);return e}return{}}}}]);