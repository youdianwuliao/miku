(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1156:function(t,e,n){"use strict";n.r(e);n(11),n(420),n(48),n(46),n(47),n(38);var r=function(t){return t.reduce((function(s,t){return 2*s+t}),0)},o=function(t){for(var a=[],i=7;i>=0;i--)a.push(!!(t&1<<i));return a},l=function(data){this.data=data,this.len=this.data.length,this.pos=0,this.readByte=function(){if(this.pos>=this.data.length)throw new Error("Attempted to read past end of stream.");return data instanceof Uint8Array?data[this.pos++]:255&data.charCodeAt(this.pos++)},this.readBytes=function(t){for(var e=[],i=0;i<t;i++)e.push(this.readByte());return e},this.read=function(t){for(var s="",i=0;i<t;i++)s+=String.fromCharCode(this.readByte());return s},this.readUnsigned=function(){var a=this.readBytes(2);return(a[1]<<8)+a[0]}},c=function(t,e){e||(e={});var n=function(e){for(var n=[],i=0;i<e;i++)n.push(t.readBytes(3));return n},l=function(){var e,data;data="";do{e=t.readByte(),data+=t.read(e)}while(0!==e);return data},c=function(img){img.leftPos=t.readUnsigned(),img.topPos=t.readUnsigned(),img.width=t.readUnsigned(),img.height=t.readUnsigned();var c=o(t.readByte());img.lctFlag=c.shift(),img.interlaced=c.shift(),img.sorted=c.shift(),img.reserved=c.splice(0,2),img.lctSize=r(c.splice(0,3)),img.lctFlag&&(img.lct=n(1<<img.lctSize+1)),img.lzwMinCodeSize=t.readByte();var d=l();img.pixels=function(t,data){for(var code,e,n=0,r=function(t){for(var code=0,i=0;i<t;i++)data.charCodeAt(n>>3)&1<<(7&n)&&(code|=1<<i),n++;return code},output=[],o=1<<t,l=o+1,c=t+1,d=[],h=function(){d=[],c=t+1;for(var i=0;i<o;i++)d[i]=[i];d[o]=[],d[l]=null};;)if(e=code,(code=r(c))!==o){if(code===l)break;if(code<d.length)e!==o&&d.push(d[e].concat(d[code][0]));else{if(code!==d.length)throw new Error("Invalid LZW code.");d.push(d[e].concat(d[e][0]))}output.push.apply(output,d[code]),d.length===1<<c&&c<12&&c++}else h();return output}(img.lzwMinCodeSize,d),img.interlaced&&(img.pixels=function(t,e){for(var n=new Array(t.length),r=t.length/e,o=function(r,o){var l=t.slice(o*e,(o+1)*e);n.splice.apply(n,[r*e,e].concat(l))},l=[0,4,2,1],c=[8,8,4,2],d=0,h=0;h<4;h++)for(var f=l[h];f<r;f+=c[h])o(f,d),d++;return n}(img.pixels,img.width)),e.img&&e.img(img)},d=function n(){var d={};switch(d.sentinel=t.readByte(),String.fromCharCode(d.sentinel)){case"!":d.type="ext",function(n){switch(n.label=t.readByte(),n.label){case 249:n.extType="gce",function(n){t.readByte();var l=o(t.readByte());n.reserved=l.splice(0,3),n.disposalMethod=r(l.splice(0,3)),n.userInput=l.shift(),n.transparencyGiven=l.shift(),n.delayTime=t.readUnsigned(),n.transparencyIndex=t.readByte(),n.terminator=t.readByte(),e.gce&&e.gce(n)}(n);break;case 254:n.extType="com",function(t){t.comment=l(),e.com&&e.com(t)}(n);break;case 1:n.extType="pte",function(n){t.readByte(),n.ptHeader=t.readBytes(12),n.ptData=l(),e.pte&&e.pte(n)}(n);break;case 255:n.extType="app",function(n){t.readByte(),n.identifier=t.read(8),n.authCode=t.read(3),"NETSCAPE"===n.identifier?function(n){t.readByte(),n.unknown=t.readByte(),n.iterations=t.readUnsigned(),n.terminator=t.readByte(),e.app&&e.app.NETSCAPE&&e.app.NETSCAPE(n)}(n):function(t){t.appData=l(),e.app&&e.app[t.identifier]&&e.app[t.identifier](t)}(n)}(n);break;default:n.extType="unknown",function(t){t.data=l(),e.unknown&&e.unknown(t)}(n)}}(d);break;case",":d.type="img",c(d);break;case";":d.type="eof",e.eof&&e.eof(d);break;default:throw new Error("Unknown block: 0x"+d.sentinel.toString(16))}"eof"!==d.type&&setTimeout(n,0)};!function(){var l={};if(l.sig=t.read(3),l.ver=t.read(3),"GIF"!==l.sig)throw new Error("Not a GIF file.");l.width=t.readUnsigned(),l.height=t.readUnsigned();var c=o(t.readByte());l.gctFlag=c.shift(),l.colorRes=r(c.splice(0,3)),l.sorted=c.shift(),l.gctSize=r(c.splice(0,3)),l.bgColor=t.readByte(),l.pixelAspectRatio=t.readByte(),l.gctFlag&&(l.gct=n(1<<l.gctSize+1)),e.hdr&&e.hdr(l)}(),setTimeout(d,0)},d=function(t){var e,n,r={vp_l:0,vp_t:0,vp_w:null,vp_h:null,c_w:null,c_h:null};for(var i in t)r[i]=t[i];r.vp_w&&r.vp_h&&(r.is_vp=!0);var o=null,d=!1,h=null,f=null,_=null,v=null,y=null,w=null,m=null,x=!0,C=!1,T=[],B=[],k=r.gif;void 0===r.auto_play&&(r.auto_play=!k.getAttribute("rel:auto_play")||"1"==k.getAttribute("rel:auto_play"));var canvas,E,A,S,I=r.on_end?r.on_end:null,R=r.loop_delay?r.loop_delay:0,U=r.loop_mode?r.loop_mode:"auto",P=!r.draw_while_loading||r.draw_while_loading,F=!!P&&(!r.show_progress_bar||r.show_progress_bar),z=r.progressbar_height?r.progressbar_height:25,L=r.progressbar_background_color?r.progressbar_background_color:"rgba(255,255,255,0.4)",D=r.progressbar_foreground_color?r.progressbar_foreground_color:"rgba(255,0,22,.8)",G=function(){h=null,f=null,y=_,_=null,w=null},M=function(){try{c(e,X)}catch(t){O("parse")}},N=function(t,e){canvas.width=t*K(),canvas.height=e*K(),A.style.minWidth=t*K()+"px",S.width=t,S.height=e,S.style.width=t+"px",S.style.height=e+"px",S.getContext("2d").setTransform(1,0,0,1,0,0)},j=function(t,e,n){if(n&&F){var o,l,c,d=z;r.is_vp?C?(l=(r.vp_t+r.vp_h-d)/K(),d/=K(),o=r.vp_l/K()+t/e*(r.vp_w/K()),c=canvas.width/K()):(l=r.vp_t+r.vp_h-d,o=r.vp_l+t/e*r.vp_w,c=canvas.width):(l=(canvas.height-d)/(C?K():1),o=t/e*canvas.width/(C?K():1),c=canvas.width/(C?K():1),d/=C?K():1),E.fillStyle=L,E.fillRect(o,l,c-o,d),E.fillStyle=D,E.fillRect(0,l,o,d)}},O=function(t){o=t,n={width:k.width,height:k.height},T=[],E.fillStyle="black",E.fillRect(0,0,r.c_w?r.c_w:n.width,r.c_h?r.c_h:n.height),E.strokeStyle="red",E.lineWidth=3,E.moveTo(0,0),E.lineTo(r.c_w?r.c_w:n.width,r.c_h?r.c_h:n.height),E.moveTo(0,r.c_h?r.c_h:n.height),E.lineTo(r.c_w?r.c_w:n.width,0),E.stroke()},W=function(){w&&(T.push({data:w.getImageData(0,0,n.width,n.height),delay:f}),B.push({x:0,y:0}))},H=function(){var t,e,n,i=-1,l=0,c=function(t){i+=t,h()},d=(t=!1,e=function(){null!==I&&I(k),l++,!1!==U||l<0?n():(t=!1,x=!1)},n=function n(){if(t=x){c(1);var r=10*T[i].delay;r||(r=100),0==(i+1+T.length)%T.length?(r+=R,setTimeout(e,r)):setTimeout(n,r)}},function(){t||setTimeout(n,0)}),h=function(){var t;(i=parseInt(i,10))>T.length-1&&(i=0),i<0&&(i=0),t=B[i],S.getContext("2d").putImageData(T[i].data,t.x,t.y),E.globalCompositeOperation="copy",E.drawImage(S,0,0)};return{init:function(){o||(r.c_w&&r.c_h||E.scale(K(),K()),r.auto_play?d():(i=0,h()))},step:d,play:function(){x=!0,d()},pause:function(){x=!1},playing:x,move_relative:c,current_frame:function(){return i},length:function(){return T.length},move_to:function(t){i=t,h()}}}(),$=function(t){j(e.pos,e.data.length,t)},J=function(){},V=function(t,e){return function(n){t(n),$(e)}},X={hdr:V((function(t){N((n=t).width,n.height)})),gce:V((function(t){W(),G(),h=t.transparencyGiven?t.transparencyIndex:null,f=t.delayTime,_=t.disposalMethod})),com:V(J),app:{NETSCAPE:V(J)},img:V((function(img){w||(w=S.getContext("2d"));var t=T.length,e=img.lctFlag?img.lct:n.gct;t>0&&(3===y?null!==v?w.putImageData(T[v].data,0,0):w.clearRect(m.leftPos,m.topPos,m.width,m.height):v=t-1,2===y&&w.clearRect(m.leftPos,m.topPos,m.width,m.height));var o=w.getImageData(img.leftPos,img.topPos,img.width,img.height);img.pixels.forEach((function(t,i){t!==h&&(o.data[4*i+0]=e[t][0],o.data[4*i+1]=e[t][1],o.data[4*i+2]=e[t][2],o.data[4*i+3]=255)})),w.putImageData(o,img.leftPos,img.topPos),C||(E.scale(K(),K()),C=!0),P&&(E.drawImage(S,0,0),P=r.auto_play),m=img}),!0),eof:function(){W(),$(!1),r.c_w&&r.c_h||(canvas.width=n.width*K(),canvas.height=n.height*K()),H.init(),d=!1,Y&&Y(k)}},Z=function(){var div=document.createElement("div");canvas=document.createElement("canvas"),E=canvas.getContext("2d"),A=document.createElement("div"),S=document.createElement("canvas"),div.width=canvas.width=k.width,div.height=canvas.height=k.height,A.style.minWidth=k.width+"px",div.className="jsgif",A.className="jsgif_toolbar",div.appendChild(canvas),div.appendChild(A),r.c_w&&r.c_h&&N(r.c_w,r.c_h),Q=!0},K=function(){return r.max_width&&n&&n.width>r.max_width?r.max_width/n.width:1},Q=!1,Y=!1,tt=function(t){return!d&&(Y=t||!1,d=!0,T=[],G(),v=null,y=null,w=null,m=null,!0)};return{play:H.play,pause:H.pause,move_relative:H.move_relative,move_to:H.move_to,get_playing:function(){return x},get_canvas:function(){return canvas},get_canvas_scale:function(){return K()},get_loading:function(){return d},get_auto_play:function(){return r.auto_play},get_length:function(){return H.length()},get_current_frame:function(){return H.current_frame()},load_url:function(t,n){if(tt(n)){var r=new XMLHttpRequest;r.open("GET",t,!0),"overrideMimeType"in r?r.overrideMimeType("text/plain; charset=x-user-defined"):"responseType"in r?r.responseType="arraybuffer":r.setRequestHeader("Accept-Charset","x-user-defined"),r.onloadstart=function(){Q||Z()},r.onload=function(){200!=this.status&&O("xhr - response"),"response"in this||(this.response=new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));var data=this.response;data.toString().indexOf("ArrayBuffer")>0&&(data=new Uint8Array(data)),e=new l(data),setTimeout(M,0)},r.onprogress=function(t){t.lengthComputable&&j(t.loaded,t.total,!0)},r.onerror=function(){O("xhr")},r.send()}},load:function(t){this.load_url(k.getAttribute("rel:animated_src")||k.src,t)},load_raw:function(t,n){tt(n)&&(Q||Z(),e=new l(t),setTimeout(M,0))},set_frame_offset:function(t,e){B[t]?(void 0!==e.x&&(B[t].x=e.x),void 0!==e.y&&(B[t].y=e.y)):B[t]=e}}},h={name:"GifSplitter",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",file:null,progress:"",loading:!1,results:[]}},methods:{handleChange:function(t){var e=t.target.files;if(!e.length)return!1;var n=e[0];/gif$/.test(n.type)?this.file=n:(this.$swal({type:"error",title:"识别失败",text:"ERROR: 该文件获取不是一张GIF图片"}),this.n=null)},start:function(){var t=this;if(!this.file)return!1;this.loading=!0,this.results=[],this.progress="Loadging...",this.loadFile().then((function(e){var n=new d({gif:e}),r=[];n.load((function(){for(var i=1;i<=n.get_length();i++)n.move_to(i),r.push(n.get_canvas().toDataURL());t.results=r,t.loading=!1}))}))},loadFile:function(){var t=this;return new Promise((function(e,n){var r=new FileReader;r.addEventListener("load",(function(){var n=new Image;n.src=r.result,n.setAttribute("rel:animated_src",URL.createObjectURL(t.file)),n.setAttribute("rel:auto_play","0"),n.addEventListener("load",(function(){e(n)}))})),r.addEventListener("error",(function(){n(r.error)})),r.readAsDataURL(t.file)}))}}},f=(n(779),n(2)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"gif_splitter"},[e("nya-container",{attrs:{title:"GIF 分解"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{staticClass:"upfile",attrs:{type:"file",accept:"image/*",label:"请选择要分解的GIF图片",placeholder:"点击这里上传文件"},on:{change:t.handleChange},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.start}},[t._v("\n                "+t._s(t.loading?"分解中":"开始分解")+"\n            ")])],1)]),t._v(" "),t.results.length?e("nya-container",{staticClass:"results",attrs:{title:"分解成功"}},t._l(t.results,(function(t,n){return e("div",{key:n,staticClass:"image"},[e("img",{attrs:{src:t,alt:""}})])})),0):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,n){var content=n(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("744b046c",content,!0,{sourceMap:!1})},779:function(t,e,n){"use strict";n(493)},780:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".gif_splitter .results{font-size:0}.gif_splitter .results .image{box-sizing:border-box;display:inline-block;padding:.1875rem;width:25%}@media(max-width:600px){.gif_splitter .results .image{width:33.3333333333%}}.gif_splitter .results img{width:100%}",""]),r.locals={},t.exports=r}}]);