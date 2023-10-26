/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1153:function(t,r,e){"use strict";e.r(r);var o=e(6),n=(e(49),e(11),e(46),e(47),e(38),e(403)),l=e(726),c=e.n(l),f=(e(420),e(48),function(image){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=image.width,this.height=this.canvas.height=image.height,this.context.drawImage(image,0,0,this.width,this.height)});f.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},f.prototype.update=function(t){this.context.putImageData(t,0,0)},f.prototype.getPixelCount=function(){return this.width*this.height},f.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},f.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var h=function(){};if(h.prototype.getColor=function(t,r){return this.getPalette(t,5,r)[0]},h.prototype.getPalette=function(t,r,e){(void 0===r||r<2||r>256)&&(r=10),(void 0===e||e<1)&&(e=10);for(var o,n,g,b,image=new f(t),l=image.getImageData().data,c=image.getPixelCount(),h=[],i=0;i<c;i+=e)n=l[(o=4*i)+0],g=l[o+1],b=l[o+2],l[o+3]>=125&&(n>250&&g>250&&b>250||h.push([n,g,b]));var v=m.quantize(h,r),d=v?v.palette():null;return image.removeCanvas(),d},h.prototype.getColorFromUrl=function(t,r,e){var o=document.createElement("img"),n=this;o.addEventListener("load",(function(){var l=n.getPalette(o,5,e)[0];r(l,t)})),o.src=t},h.prototype.getImageData=function(t,r){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var e=new Array(i),i=0;i<t.length;i++)e[i]=String.fromCharCode(t[i]);var data=e.join(""),o=window.btoa(data);r("data:image/png;base64,"+o)}},e.send()},h.prototype.getColorAsync=function(t,r,e){var o=this;this.getImageData(t,(function(t){var n=document.createElement("img");n.addEventListener("load",(function(){var t=o.getPalette(n,5,e)[0];r(t,this)})),n.src=t}))},!v)var v={map:function(t,r){var e={};return r?t.map((function(t,i){return e.index=i,r.call(e,t)})):t.slice()},naturalOrder:function(a,b){return a<b?-1:a>b?1:0},sum:function(t,r){var e={};return t.reduce(r?function(p,t,i){return e.index=i,p+r.call(e,t)}:function(p,t){return p+t},0)},max:function(t,r){return Math.max.apply(null,r?v.map(t,r):t)}};var d,m=function(){var t=5,r=8-t;function e(r,g,b){return(r<<2*t)+(g<<t)+b}function o(t){var r=[],e=!1;function o(){r.sort(t),e=!0}return{push:function(t){r.push(t),e=!1},peek:function(t){return e||o(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return e||o(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return e||o(),r}}}function n(t,r,e,o,n,l,c){var f=this;f.r1=t,f.r2=r,f.g1=e,f.g2=o,f.b1=n,f.b2=l,f.histo=c}function l(){this.vboxes=new o((function(a,b){return v.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())}))}function c(t,r){if(r.count()){var o=r.r2-r.r1+1,n=r.g2-r.g1+1,l=r.b2-r.b1+1,c=v.max([o,n,l]);if(1==r.count())return[r.copy()];var i,f,h,d,m=0,w=[],x=[];if(c==o)for(i=r.r1;i<=r.r2;i++){for(d=0,f=r.g1;f<=r.g2;f++)for(h=r.b1;h<=r.b2;h++)d+=t[e(i,f,h)]||0;m+=d,w[i]=m}else if(c==n)for(i=r.g1;i<=r.g2;i++){for(d=0,f=r.r1;f<=r.r2;f++)for(h=r.b1;h<=r.b2;h++)d+=t[e(f,i,h)]||0;m+=d,w[i]=m}else for(i=r.b1;i<=r.b2;i++){for(d=0,f=r.r1;f<=r.r2;f++)for(h=r.g1;h<=r.g2;h++)d+=t[e(f,h,i)]||0;m+=d,w[i]=m}return w.forEach((function(t,i){x[i]=m-t})),y(c==o?"r":c==n?"g":"b")}function y(t){var e,o,n,l,c,f=t+"1",h=t+"2",v=0;for(i=r[f];i<=r[h];i++)if(w[i]>m/2){for(n=r.copy(),l=r.copy(),c=(e=i-r[f])<=(o=r[h]-i)?Math.min(r[h]-1,~~(i+o/2)):Math.max(r[f],~~(i-1-e/2));!w[c];)c++;for(v=x[c];!v&&w[c-1];)v=x[--c];return n[h]=c,l[f]=n[h]+1,[n,l]}}}return n.prototype={volume:function(t){var r=this;return r._volume&&!t||(r._volume=(r.r2-r.r1+1)*(r.g2-r.g1+1)*(r.b2-r.b1+1)),r._volume},count:function(t){var r=this,o=r.histo;if(!r._count_set||t){var i,n,l,c=0;for(i=r.r1;i<=r.r2;i++)for(n=r.g1;n<=r.g2;n++)for(l=r.b1;l<=r.b2;l++)c+=o[e(i,n,l)]||0;r._count=c,r._count_set=!0}return r._count},copy:function(){var t=this;return new n(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(r){var o=this,n=o.histo;if(!o._avg||r){var l,i,c,f,h=0,v=1<<8-t,d=0,m=0,w=0;for(i=o.r1;i<=o.r2;i++)for(c=o.g1;c<=o.g2;c++)for(f=o.b1;f<=o.b2;f++)h+=l=n[e(i,c,f)]||0,d+=l*(i+.5)*v,m+=l*(c+.5)*v,w+=l*(f+.5)*v;o._avg=h?[~~(d/h),~~(m/h),~~(w/h)]:[~~(v*(o.r1+o.r2+1)/2),~~(v*(o.g1+o.g2+1)/2),~~(v*(o.b1+o.b2+1)/2)]}return o._avg},contains:function(t){var e=this,o=t[0]>>r,n=t[1]>>r,l=t[2]>>r;return o>=e.r1&&o<=e.r2&&n>=e.g1&&n<=e.g2&&l>=e.b1&&l<=e.b2}},l.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,i=0;i<r.size();i++)if(r.peek(i).vbox.contains(t))return r.peek(i).color;return this.nearest(t)},nearest:function(t){for(var r,e,o,n=this.vboxes,i=0;i<n.size();i++)((e=Math.sqrt(Math.pow(t[0]-n.peek(i).color[0],2)+Math.pow(t[1]-n.peek(i).color[1],2)+Math.pow(t[2]-n.peek(i).color[2],2)))<r||void 0===r)&&(r=e,o=n.peek(i).color);return o},forcebw:function(){var t=this.vboxes;t.sort((function(a,b){return v.naturalOrder(v.sum(a.color),v.sum(b.color))}));var r=t[0].color;r[0]<5&&r[1]<5&&r[2]<5&&(t[0].color=[0,0,0]);var e=t.length-1,o=t[e].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[e].color=[255,255,255])}},{quantize:function(f,h){if(!f.length||h<2||h>256)return!1;var d=function(o){var n,l,c,f,h=new Array(1<<3*t);return o.forEach((function(t){l=t[0]>>r,c=t[1]>>r,f=t[2]>>r,n=e(l,c,f),h[n]=(h[n]||0)+1})),h}(f);d.forEach((function(){0}));var m=function(t,e){var o,l,c,f=1e6,h=0,v=1e6,d=0,m=1e6,w=0;return t.forEach((function(t){o=t[0]>>r,l=t[1]>>r,c=t[2]>>r,o<f?f=o:o>h&&(h=o),l<v?v=l:l>d&&(d=l),c<m?m=c:c>w&&(w=c)})),new n(f,h,v,d,m,w,e)}(f,d),w=new o((function(a,b){return v.naturalOrder(a.count(),b.count())}));function x(t,r){for(var e,o=1,n=0;n<1e3;)if((e=t.pop()).count()){var l=c(d,e),f=l[0],h=l[1];if(!f)return;if(t.push(f),h&&(t.push(h),o++),o>=r)return;if(n++>1e3)return}else t.push(e),n++}w.push(m),x(w,.75*h);for(var y=new o((function(a,b){return v.naturalOrder(a.count()*a.volume(),b.count()*b.volume())}));w.size();)y.push(w.pop());x(y,h-y.size());for(var _=new l;y.size();)_.push(y.pop());return _}}}(),w=h;e(388);d=e(389);var x={name:"Color",head:function(){return this.$store.state.currentTool.head},components:{"slider-picker":n.Slider,VueSlider:d},data:function(){return{colorVal:"",n:null,file:null,colors:"#00ADB5",alpha:1,preview:"",results:"",imgColor:{color:"",palette:""},requestIn:!1,colorthief:new w}},computed:{handleColor:function(){var t=c()(this.colors);return{"RGB(A)":t.toString("rgb").toUpperCase(),HEX6:t.toHexString().toUpperCase(),HEX8:t.toHex8String().toUpperCase(),"HSL(A)":t.toString("hsl").toUpperCase(),"HSV(A)":t.toString("hsv").toUpperCase()}}},watch:{colors:function(t){var r=c()(t);this.alpha=r.getAlpha()}},methods:{updateAlpha:function(){var t=c()(this.colors);t.setAlpha(this.alpha),this.colors=t.toHex8String()},updateColor:function(t){var r=c()(t.hex);r.setAlpha(this.alpha),this.colors=r.toHex8String()},handleChange:function(t){var r=this;if(this.requestIn)return!1;var e=t.target.files;if(!e.length)return!1;var n=e[0];this.requestIn=!0;var l=new FileReader;l.readAsDataURL(n),l.addEventListener("load",Object(o.a)(regeneratorRuntime.mark((function t(){var img;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preview=l.result,(img=new Image).onload=function(){var t=r.colorthief.getPalette(img).map((function(t){return c()("rgb(".concat(t.toString(),")")).toHexString()})),e=c()("rgb(".concat(r.colorthief.getColor(img).toString(),")")).toHexString();r.imgColor.palette=t,r.imgColor.color=e,r.colors=e,r.requestIn=!1},img.src=r.preview;case 4:case"end":return t.stop()}}),t)}))),!1)},handleColorVal:function(t){var r=c()(t);r.isValid()&&(this.colors=r.toHex8String())}}},y=(e(727),e(2)),component=Object(y.a)(x,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"color"},[r("nya-container",{attrs:{title:"颜色转换"}},[r("nya-input",{attrs:{label:"输入颜色代码",placeholder:"#ffffff",autocomplete:"off",autofocus:"",fullwidth:""},on:{input:t.handleColorVal},model:{value:t.colorVal,callback:function(r){t.colorVal=r},expression:"colorVal"}}),t._v(" "),r("client-only",[r("slider-picker",{attrs:{value:t.colors},on:{input:t.updateColor}})],1),t._v(" "),r("client-only",[r("vue-slider",{attrs:{interval:.1,lazy:"",min:0,max:1},on:{change:t.updateAlpha},model:{value:t.alpha,callback:function(r){t.alpha=r},expression:"alpha"}})],1),t._v(" "),r("nya-input",{attrs:{type:"file",accept:"image/*",label:"请选择要提取主色的图片",placeholder:"点击这里上传文件",fullwidth:""},on:{change:t.handleChange},model:{value:t.n,callback:function(r){t.n=r},expression:"n"}}),t._v(" "),t.preview?r("div",{staticClass:"preview"},[r("div",{staticClass:"nya-subtitle"},[t._v("\n                预览\n            ")]),t._v(" "),r("img",{attrs:{src:t.preview,alt:"preview"}})]):t._e(),t._v(" "),t.preview?r("div",{staticClass:"img-colors"},[r("div",{staticClass:"img-color"},[r("div",{staticClass:"nya-subtitle"},[t._v("\n                    主色\n                ")]),t._v(" "),r("div",{style:{"background-color":t.imgColor.color}},[t._v("\n                    "+t._s(t.imgColor.color)+"\n                ")])]),t._v(" "),r("div",{staticClass:"img-palette"},[r("div",{staticClass:"nya-subtitle"},[t._v("\n                    调色盘\n                ")]),t._v(" "),r("ul",t._l(t.imgColor.palette,(function(e,o){return r("li",{key:o,style:{"background-color":e}},[t._v("\n                        "+t._s(e)+"\n                    ")])})),0)])]):t._e()],1),t._v(" "),t.colors?r("nya-container",{attrs:{title:"结果"}},[r("div",{staticClass:"text",style:{color:t.colors}},[t._v("\n            文字效果\n        ")]),t._v(" "),t._l(t.handleColor,(function(e,o){return r("p",{key:o},[r("b",[t._v(t._s(o)+"：")]),r("span",[t._v(t._s(e))])])}))],2):t._e()],1)}),[],!1,null,null,null);r.default=component.exports},484:function(t,r,e){var content=e(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("7dbdae10",content,!0,{sourceMap:!1})},727:function(t,r,e){"use strict";e(484)},728:function(t,r,e){var o=e(3)((function(i){return i[1]}));o.push([t.i,".color .img-colors,.color .nya-input,.color .preview,.color .vc-slider,.color .vue-slider{margin-bottom:.9375rem}.color .vc-slider{width:100%}.color .img-colors .img-color div:not(.nya-subtitle){color:#fff;display:inline-block;padding:.625rem;text-shadow:.125rem .125rem .125rem rgba(0,0,0,.2)}.color .img-colors .img-palette{margin-top:.9375rem}.color .img-colors .img-palette ul{margin:0;padding:0}.color .img-colors .img-palette li{box-sizing:border-box;color:#fff;display:inline-block;font-size:1rem;margin:0;padding:.625rem;text-align:center;text-shadow:.125rem .125rem .125rem rgba(0,0,0,.2)}@media(max-width:850px){.color .img-colors .img-palette li{width:30%}}.color .preview{font-size:0}.color .preview img{max-width:100%;width:18.75rem}",""]),o.locals={},t.exports=o}}]);