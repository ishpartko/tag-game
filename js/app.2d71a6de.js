(function(e){function t(t){for(var r,a,o=t[0],s=t[1],u=t[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tag-game/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"156a":function(e,t,n){},"3b5c":function(e,t,n){"use strict";var r=n("c557"),c=n.n(r);c.a},"3d3a":function(e,t,n){"use strict";var r=n("e44c"),c=n.n(r);c.a},"40c9":function(e,t,n){},"452c":function(e,t,n){},"4cbf":function(e,t,n){"use strict";var r=n("bd1f"),c=n.n(r);c.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag-game-app",attrs:{id:"app"}},[e.screenName===e.typesOfScreen.begin?n("BeginScreen",{on:{"new-game":e.onNewGame}}):e.screenName===e.typesOfScreen.game?n("GameBox",{attrs:{"seconds-to-end":180},on:{lose:e.onLose,win:e.onWin}}):e.screenName===e.typesOfScreen.endLose||e.screenName===e.typesOfScreen.endWin?n("EndScreen",{attrs:{type:e.screenName},on:{"new-game":e.onNewGame}}):e._e()],1)},i=[],a=(n("fa6d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("GameBoxTimer",{staticClass:"game-box-timer-margin",attrs:{seconds:e.leftSeconds}}),n("section",{staticClass:"game-box game-box-gap"},e._l(e.cards,(function(t,r){return n("GameBoxItem",{key:r,staticClass:"game-box-item-gap",attrs:{card:t,disabled:e.wasCardsDisabled},on:{flip:e.flipCardWithId}})})),1)],1)}),o=[],s=(n("a4d3"),n("99af"),n("4de4"),n("4e82"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("07ac"),n("159b"),n("ade3")),u=n("2909"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"game-box-item",class:{"game-box-item_highlight":e.card.highlight},attrs:{disabled:e.disabled},on:{click:e.flip}},[e._v(" "+e._s(e.card.opened?e.card.value:"?")+" ")])},l=[],f={props:{card:{type:Object,required:!0},disabled:{type:Boolean,default:!1}},methods:{flip:function(){this.$emit("flip",this.card)}}},p=f,h=(n("9a8c"),n("2877")),b=Object(h["a"])(p,d,l,!1,null,"30e13cfe",null),m=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timer"},[e._v(" "+e._s(e.displayTime)+" ")])},O=[],v=n("b166"),y=n("590d"),w={props:{seconds:{type:Number,default:0}},computed:{displayTime:function(){return Object(v["a"])(Object(y["a"])(new Date(1e3*this.seconds),Math.abs((new Date).getTimezoneOffset()/60)),"mm:ss")}}},j=w,_=(n("3b5c"),Object(h["a"])(j,g,O,!1,null,null,null)),x=_.exports;function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={components:{GameBoxItem:m,GameBoxTimer:x},props:{secondsToEnd:{type:Number,required:!0}},data:function(){return{cards:{},flipedId:null,leftSeconds:0,wasCardsDisabled:!1}},created:function(){this.runTimer(),this.cards=this.getRandomCards([1,2,3,4,5,6,7,8])},watch:{flipedId:function(e,t){var n=this;null!==t&&null!==e&&(this.cards[e].value!==this.cards[t].value?(this.wasCardsDisabled=!0,window.setTimeout((function(){n.hideCardWithId(e),n.hideCardWithId(t),n.wasCardsDisabled=!1}),1e3)):e!==t&&this.cards[e].value===this.cards[t].value&&(this.highlightPair(e,t),window.setTimeout((function(){n.checkWin()}),0)),this.resetFlippedId())}},methods:{highlightPair:function(e,t){this.cards[e].highlight=!0,this.cards[t].highlight=!0},showCardWithId:function(e){this.cards[e].opened=!0},hideCardWithId:function(e){this.cards[e].opened=!1},resetFlippedId:function(){this.flipedId=null},checkWin:function(){Object.values(this.cards).every((function(e){return e.highlight}))&&this.$emit("win")},flipCardWithId:function(e){var t=e.id;this.showCardWithId(t),this.flipedId=t},getRandomCards:function(e){var t=[].concat(Object(u["a"])(e),Object(u["a"])(e)).sort((function(){return Math.random()-.5})),n={};return t.reduce((function(e,t,n){return S({},e,Object(s["a"])({},n,{id:n,value:t,opened:!1,highlight:!1}))}),n)},runTimer:function(){var e=this;this.leftSeconds=this.secondsToEnd;var t=window.setInterval((function(){e.leftSeconds,0===e.leftSeconds?(window.clearInterval(t),e.$emit("lose")):e.leftSeconds--}),1e3)}}},I=C,T=(n("3d3a"),Object(h["a"])(I,a,o,!1,null,"7a9bc34c",null)),W=T.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("GameButton",{on:{click:function(t){return e.$emit("new-game")}}},[e._v(" Начать игру ")])},D=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"game-button",attrs:{type:"button"},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},$=[],k={},B=k,G=(n("a967"),Object(h["a"])(B,N,$,!1,null,"60b83d39",null)),L=G.exports,M={components:{GameButton:L}},q=M,F=Object(h["a"])(q,E,D,!1,null,null,null),J=F.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"end-screen"},[n("h1",{staticClass:"end-text"},[e._v(" "+e._s(e.endText)+" ")]),n("GameButton",{on:{click:function(t){return e.$emit("new-game")}}},[e._v(" Начать заново ")])],1)},z=[];n("caad"),n("2532");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={endWin:"endWin",endLose:"endLose"},Q=H({},K,{begin:"begin",game:"game"}),U={components:{GameButton:L},props:{type:{type:String,required:!0,validator:function(e){return Object.values(K).includes(e)}}},computed:{endText:function(){switch(this.type){case K.endWin:return"Победа";case K.endLose:return"Поражение"}return""}}},V=U,X=(n("a1d9"),Object(h["a"])(V,R,z,!1,null,"79d62f7e",null)),Y=X.exports,Z={name:"app",components:{GameBox:W,EndScreen:Y,BeginScreen:J},data:function(){return{screenName:Q.begin}},computed:{typesOfScreen:function(){return Q}},methods:{onWin:function(){this.screenName=Q.endWin},onLose:function(){this.screenName=Q.endLose},onNewGame:function(){this.screenName=Q.game}}},ee=Z,te=(n("4cbf"),n("b0a0"),Object(h["a"])(ee,c,i,!1,null,"24069bfc",null)),ne=te.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ne)}}).$mount("#app")},"852d":function(e,t,n){},"9a8c":function(e,t,n){"use strict";var r=n("40c9"),c=n.n(r);c.a},a1d9:function(e,t,n){"use strict";var r=n("156a"),c=n.n(r);c.a},a967:function(e,t,n){"use strict";var r=n("852d"),c=n.n(r);c.a},b0a0:function(e,t,n){"use strict";var r=n("452c"),c=n.n(r);c.a},bd1f:function(e,t,n){},c557:function(e,t,n){},e44c:function(e,t,n){}});
//# sourceMappingURL=app.2d71a6de.js.map