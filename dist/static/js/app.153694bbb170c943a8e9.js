webpackJsonp([1],{"4rUl":function(t,e){},"61VY":function(t,e){},B6ae:function(t,e){},E5w3:function(t,e){},EP2K:function(t,e){},"I+WE":function(t,e){},"K5/q":function(t,e){},KPLK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("kxiW"),o=n.n(s),i={name:"App",beforeCreate:function(){console.log("app-mounted"),this.$store.dispatch("syncSetCurrentUser");var t=new Date;this.$store.commit("setCurrentDate",{year:t.getFullYear(),month:t.getMonth(),date:t.getDate()}),this.$store.dispatch("asyncSetRecords")}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(i,r,!1,function(t){n("K5/q")},null,null).exports,u=n("NYxO"),l={setCurrentuser:function(t,e){t.user=e},signIn:function(t,e){t.user=e,Q.replace("/home")},signOut:function(t){t.user=null},setCurrentDate:function(t,e){t.currentDate=e},setRecords:function(t,e){t.records=e}},d=n("mtWM"),m=n.n(d),v={syncSetCurrentUser:function(t){var e=t.commit;o.a.auth().onAuthStateChanged(function(t){t?(console.log("user setCurrentUser"),console.log(t),e("setCurrentuser",t)):(console.log("no user setCurrentUser"),e("setCurrentuser",null))})},syncSignIn:function(t,e){var n=t.commit;o.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){console.log("signIn"),console.log(t.user),console.log(state),n("signIn",t.user)},function(t){alert("error : "+t)})},syncSignOut:function(t){var e=t.commit;o.a.auth().signOut().then(function(){alert("로그아웃 되었습니다."),e("signOut")})},asyncSetRecords:function(t){var e=t.commit,n=void 0;m.a.get("https://frozen-reef-96493.herokuapp.com/post/").then(function(t){console.log(t.data),n=t.data}),e("setRecords",n)}};a.a.use(u.a);var f=new u.a.Store({state:{user:null,currentDate:null,records:null},getters:{getUser:function(t){return t.user},getCurrentDate:function(t){return t.currentDate}},mutations:l,actions:v}),p=n("/ocq"),h={name:"YearBoard",props:{recordYear:{type:Object,required:!0}},data:function(){return{yearData:null,month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},computed:{dateObject:function(){return new Date(this.recordYear.year)},monthLength:function(){for(var t=[],e=this.recordYear.year,n=0,a=0;a<12;a++)t[a]=32-new Date(e,n,32).getDate(),n++;return t},beforeYear:function(){return new Date(this.recordYear.year,0,1).getDay()}},methods:{roll:function(t){var e=t.target,n=e.scrollTop,a=e.scrollHeight-e.clientHeight,s=this.$refs.yearBoard,o=s.getElementsByClassName("curtain")[0].style,i=s.getElementsByClassName("curtain")[1].style;console.log(n),n<=10?o.display="none":n>10&&n<101?(o.opacity=n/80,o.display="block"):n<a-10&&n>a-100?(i.opacity=(a-n)/80,i.display="block"):n>=a-10&&(i.display="none")},focusCurrentDate:function(t,e){this.$store.commit("setCurrentDate",{year:this.recordYear.year,month:t,date:e})},monthUp:function(t){var e=this.$refs.yearBoard,n=e.getElementsByClassName("month-box")[t-1],a=e.getElementsByClassName("text")[t-1];n.style.opacity=1,n.classList.add("day-box-acitve"),a.style.opacity=1},monthOut:function(t){var e=this.$refs.yearBoard,n=e.getElementsByClassName("month-box")[t-1],a=e.getElementsByClassName("text")[t-1];n.style.opacity=.7,n.classList.remove("day-box-acitve"),a.style.opacity=.7}},mounted:function(){var t=this.$refs.yearBoard,e=t.getElementsByClassName("text"),n=t.getElementsByClassName("day-box"),a=null,s=this.monthLength;this.$nextTick(function(){for(var t=1;t<12;t++)a+=s[t-1],e[t].style.top=n[a].offsetTop+"px"})}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"yearBoard",staticClass:"YearBoard",on:{scroll:t.roll}},[n("div",{staticClass:"month-head"},t._l(t.month,function(e){return n("div",{key:"m"+e,staticClass:"text"},[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"Table"},[t._l(t.beforeYear,function(t){return n("div",{key:"beforeDay"+t,staticClass:"before-box"})}),t._v(" "),t._l(12,function(e){return n("div",{key:"month"+e,staticClass:"month-box",on:{mouseover:function(n){t.monthUp(e)},mouseout:function(n){t.monthOut(e)}}},t._l(t.monthLength[e-1],function(a){return n("div",{key:"day"+a,staticClass:"day-box",on:{click:function(n){t.focusCurrentDate(e,a)}}},[t._v(t._s(e)+","+t._s(a))])}))})],2),t._v(" "),n("div",{staticClass:"curtain curtain--head"}),t._v(" "),n("div",{staticClass:"curtain curtain--foot"})])},staticRenderFns:[]};var _=n("VU/8")(h,g,!1,function(t){n("KPLK")},"data-v-38344619",null).exports,y=n("KnHq");y.d.use([y.a,y.b,y.c]);var C={name:"navYear",data:function(){return{years:[{year:2015},{year:2016},{year:2017},{year:2018}]}},components:{YearBoard:_},mounted:function(){new y.d(".swiper-container",{slidesPerView:4,spaceBetween:65,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets"}})}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navigation",{attrs:{order:1}},[n("h1",{attrs:{slot:"head"},slot:"head"},[t._v("2018")]),t._v(" "),n("h2",{attrs:{slot:"subHead"},slot:"subHead"},[t._v("year")]),t._v(" "),n("div",{staticClass:"Contents",attrs:{slot:"contents"},slot:"contents"},[n("div",{staticClass:"head-line"}),t._v(" "),n("div",{staticClass:"Contents_body"},[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.years,function(e,a){return n("div",{key:a,staticClass:"swiper-slide"},[n("div",{staticClass:"slide_head"},[t._v("\n              "+t._s(e.year)+"\n            ")]),t._v(" "),n("year-board",{attrs:{recordYear:e}})],1)}))])])])])},staticRenderFns:[]};var w=n("VU/8")(C,b,!1,function(t){n("B6ae")},"data-v-589c772c",null).exports,x={data:function(){return{days:["Sun","Mon","Tue","Wed","Thr","Fri","Sat"],month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},computed:{presentDateObject:function(){return this.$store.getters.getCurrentDate},stringYearMonth:function(t){var e=this.$store.getters.getCurrentDate;return"https://frozen-reef-96493.herokuapp.com/post/"+e.year+"/"+(e.month-1)+"/"+t},beforeDays:function(){return new Date(this.presentDateObject.year,this.presentDateObject.month-1,1).getDay()},afterDays:function(){return 35-this.monthLength+this.beforeDays},monthLength:function(){return 32-new Date(this.presentDateObject.year,this.presentDateObject.month-1,32).getDate()}},methods:{focusCurrentDate:function(t){this.$store.commit("setCurrentDate",{year:this.presentDateObject.year,month:this.presentDateObject.month,date:t})}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navigation",{staticClass:"NavMonth",attrs:{order:2}},[n("h1",{attrs:{slot:"head"},slot:"head"},[t._v(t._s(t.month[t.presentDateObject.month-1]))]),t._v(" "),n("h2",{attrs:{slot:"subHead"},slot:"subHead"},[t._v("Month")]),t._v(" "),n("div",{staticClass:"Contents",attrs:{slot:"contents"},slot:"contents"},[n("div",{staticClass:"Contents_wrap"},[t._l(t.days,function(e,a){return n("div",{key:e+a,staticClass:"Contents_Head"},[t._v(t._s(e))])}),t._v(" "),t._l(t.beforeDays,function(t){return n("div",{key:"before"+t,staticClass:"Contents_Dummy_before dayBox"})}),t._v(" "),t._l(t.monthLength,function(e){return n("div",{key:e,staticClass:"Contents_Body dayBox",on:{click:function(n){t.focusCurrentDate(e)}}},[n("img",{staticClass:"Img",attrs:{src:t.stringYearMonth(e)}}),t._v(" "),n("div",{staticClass:"Text"},[t._v(t._s(e))])])}),t._v(" "),t._l(t.afterDays,function(t){return n("div",{key:"after"+t,staticClass:"Contents_Dummy_after dayBox"})})],2)])])},staticRenderFns:[]};var B=n("VU/8")(x,D,!1,function(t){n("E5w3")},"data-v-05018df5",null).exports,E=n("c/Tr"),P=n.n(E);y.d.use([y.a,y.b,y.c]);var U=void 0,k={name:"MusicSlide",data:function(){return{isPlay:!1,beforeTrack:null}},computed:{playButton:function(){return this.isPlay?"fas fa-pause":"fas fa-play"},monthLength:function(){var t=this.$store.getters.getCurrentDate;return 32-new Date(t.year,t.month-1,32).getDate()}},methods:{playing:function(){var t=document.getElementById("audio");this.isPlay?t.pause():t.play(),this.isPlay=!this.isPlay},coverClick:function(t){var e=document.getElementsByClassName("cover"),n=P()(e).indexOf(t.currentTarget);t.currentTarget.classList.add("cover-active"),null!==this.beforeTrack&&(console.log(this.beforeTrack),e[this.beforeTrack].classList.remove("cover-active")),this.beforeTrack=n}},watch:{isPlay:function(){var t=document.getElementsByClassName("cover_img")[0];this.isPlay?t.classList.add("play-active"):t.classList.remove("play-active")}},mounted:function(){U=new y.d(".music-swiper-container",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,direction:"horizontal"})},updated:function(){U.slideTo(this.$store.getters.getCurrentDate.date-1)}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MusicSlide"},[n("div",{staticClass:"music-swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.monthLength,function(e){return n("div",{key:e,staticClass:"swiper-slide"},[n("div",{staticClass:"month-head"},[t._v(t._s(e)+"th")]),t._v(" "),n("div",{staticClass:"cover",on:{click:t.coverClick}},[n("img",{staticClass:"cover_img",attrs:{src:"http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/02/2017021615033620072-540x540.jpg",alt:""}})])])}))]),t._v(" "),t._m(0),t._v(" "),n("span",{staticClass:"button button-play"},[n("i",{class:t.playButton,on:{click:t.playing}})]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"button button-backward"},[e("i",{staticClass:"fas fa-step-backward"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"button button-forward"},[e("i",{staticClass:"fas fa-step-forward"})])}]};var $={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MusicNote wrap"},[n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[n("i",{staticClass:"fas fa-music"}),t._v(" CIFIKA - SasdfasfasdfOAK(Oddman jay Remix)\n      "),n("i",{staticClass:"fas fa-music"})]),t._v(" "),n("div",{staticClass:"diary"},[n("div",{staticClass:"contents gray-box"},[t._v("\n        옛날에 오빠가 추천해준 노랜데 문득 생각나서 요즈음 한창 듣고 있다. "),n("br"),t._v(" 매력적인 목소리에 신나는 비트가 정말 좋다. "),n("br"),t._v(" 미세먼지 때문에 기분이 꿀꿀해서 그런지 신나는 노래만 듣게 된다.\n      ")])]),t._v(" "),n("div",{staticClass:"information gray-box"},[n("div",{staticClass:"temperature"},[n("i",{staticClass:"fas fa-umbrella"}),t._v(" 24℃\n      ")]),t._v(" "),n("div",{staticClass:"location"},[t._v("전주시 덕진구 덕진광장로 12 할리스커피 전북대점")])])])])}]};var N={name:"MusicPlayer",data:function(){return{canvasWidth:500,currentTime:"0 :00",duration:"0 :00",audioDuration:0,percentage:0,volume:1}},computed:{audioEl:function(){return document.getElementById("audio")},volumePercentage:function(){return 100*this.volume}},methods:{userPrint:function(){console.log(o.a.auth().currentUser)},logout:function(){this.$store.dispatch("syncSignOut")},updateBar:function(t){this.currentTime=this.convertElapsedTime(t.target.currentTime),this.percentage=this.audioEl.currentTime/this.audioEl.duration*100},convertElapsedTime:function(t){var e=Math.floor(t%60);return e<10&&(e="0"+e),Math.floor(t/60)+" :"+e},trackClick:function(t){var e=document.getElementById("progress"),n=t.offsetX/e.clientWidth;this.audioEl.currentTime=n*this.audioDuration},tracDrag:function(t){var e=document.getElementById("progress"),n=t.offsetX/e.clientWidth;this.audioEl.currentTime=n*this.audioDuration}},mounted:function(){var t=this,e=document.getElementById("audio");e.ondurationchange=function(){t.audioDuration=e.duration,t.duration=t.convertElapsedTime(e.duration),t.volume=e.volume};var n=document.getElementById("progress"),a=null,s=!1,o=function(s){a=s.offsetX/n.clientWidth,e.currentTime=a*t.audioDuration};n.onmousedown=function(t){t.preventDefault(),s=!0},n.onmouseup=function(t){t.preventDefault(),s=!1,o(t)},n.onmousemove=function(t){s&&o(t)};var i=document.getElementById("volume_progress"),r=(document.getElementById("volume_meter"),!1);i.onmousedown=function(t){t.preventDefault(),r=!0},i.onmouseup=function(n){n.preventDefault(),r=!1;var a=1-n.offsetY/i.clientHeight;t.volume=a,e.volume=a},i.onmousemove=function(n){if(r){var a=1-n.offsetY/i.clientHeight;t.volume=a,e.volume=a}}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MusicPlayer"},[a("audio",{attrs:{id:"audio"},on:{timeupdate:t.updateBar}},[a("source",{attrs:{src:n("Pe7J"),type:"audio/mp3"}})]),t._v(" "),a("div",{staticClass:"container"},[a("button",{on:{click:t.userPrint}},[t._v("TODAY")]),t._v(" "),a("div",{attrs:{id:"player"}},[a("div",{staticClass:"time-text",attrs:{id:"current-time"}},[t._v(t._s(t.currentTime))]),t._v(" "),a("div",{attrs:{id:"progress"}},[a("div",{style:{width:t.percentage+"%"},attrs:{id:"meter"}})]),t._v(" "),a("div",{staticClass:"time-text",attrs:{id:"duration"}},[t._v(t._s(t.duration))]),t._v(" "),a("div",{attrs:{id:"volume"}},[a("div",{attrs:{id:"volume_controler"}},[a("div",{attrs:{id:"volume_progress"}},[a("div",{style:{height:t.volumePercentage+"%"},attrs:{id:"volume_meter"}})])]),t._v(" "),a("i",{staticClass:"fas fa-volume-up"})])]),t._v(" "),a("button",{on:{click:t.logout}},[t._v("Logout")])])])},staticRenderFns:[]};var L={name:"RecordContent",components:{musicSlide:n("VU/8")(k,S,!1,function(t){n("61VY")},"data-v-59d63318",null).exports,MusicNote:n("VU/8")({name:"MusicNote"},$,!1,function(t){n("bHcr")},"data-v-358c3326",null).exports,MusicPlayer:n("VU/8")(N,F,!1,function(t){n("4rUl")},"data-v-5dbeb8ba",null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"RecordContent"},[e("music-slide",{staticClass:"music-slide"}),this._v(" "),e("music-note",{staticClass:"music-note"}),this._v(" "),e("music-player",{staticClass:"music-player"})],1)},staticRenderFns:[]};var M={name:"home",components:{navYear:w,navMonth:B,RecordContent:n("VU/8")(L,T,!1,function(t){n("hpbn")},"data-v-7d7d2414",null).exports},beforeUpdate:function(){}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("record-content",{staticClass:"record-content"}),this._v(" "),e("nav-month",{staticClass:"nav-month"}),this._v(" "),e("nav-year",{staticClass:"nav-year"})],1)},staticRenderFns:[]};var R=n("VU/8")(M,O,!1,function(t){n("EP2K")},"data-v-56e71b1f",null).exports,I={data:function(){return{buttonGroup:[{logo:["fab","fa-facebook-f"],name:"Facebook"},{logo:["fab","fa-twitter"],name:"Twitter"},{logo:["fab","fa-google-plus-g"],name:"Google +"},{logo:["fab","fa-soundcloud"],name:"Soundcloud"}]}},methods:{userPrint:function(){console.log(o.a.auth().currentUser)}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ButtonBox"},t._l(t.buttonGroup,function(e,a){return n("button",{key:a,staticClass:"ButtonBox_Items",on:{click:t.userPrint}},[n("i",{staticClass:"ButtonBox_logo",class:e.logo}),t._v(" "),n("div",{staticClass:"ButtonBox_text"},[t._v("Login with "+t._s(e.name))])])}))},staticRenderFns:[]};var j=n("VU/8")(I,Y,!1,function(t){n("S5jr")},"data-v-af8b55c6",null).exports,A=n("Dd8w"),H=n.n(A),V={name:"SignUp",props:["isPopUp"],data:function(){return{id:null,pw:null,rePw:null}},computed:{isEqualPw:function(){return this.pw===this.rePw}},methods:{close:function(){this.$emit("close")},submit:function(){var t=this;this.isEqualPw&&o.a.auth().createUserWithEmailAndPassword(this.id,this.pw).then(function(e){console.log(e.user),o.a.database().ref("/users/"+e.user.uid).set({userData:{displayName:e.user.displayName,email:e.user.email,phoneNumber:e.user.phoneNumber,photoURL:e.user.photoURL}}),t.close()}).catch(function(t){alert("Oops"+t.message)})}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{staticClass:"SignUp",attrs:{isPopUp:t.isPopUp},on:{close:t.close}},[n("form",{staticClass:"SignUp_Form",attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"layout"},[n("div",{staticClass:"label"},[t._v("아이디")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"input",attrs:{type:"text",placeholder:"이메일을 입력해주세요"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"layout"},[n("div",{staticClass:"label"},[t._v("비밀번호")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pw,expression:"pw"}],staticClass:"input",attrs:{type:"password",placeholder:"패스워드를 입력해주세요"},domProps:{value:t.pw},on:{input:function(e){e.target.composing||(t.pw=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"layout"},[n("div",{staticClass:"label"},[t._v("재입력")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rePw,expression:"rePw"}],staticClass:"input",attrs:{type:"password",placeholder:"다시 패스워드를 입력해주세요"},domProps:{value:t.rePw},on:{input:function(e){e.target.composing||(t.rePw=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"layout"},[n("button",{on:{click:t.submit}},[t._v("확인")])])])])])},staticRenderFns:[]};var W={name:"FormBox",data:function(){return{isSignUp:!1,email:null,password:null}},components:{SignUp:n("VU/8")(V,K,!1,function(t){n("h8Lz")},"data-v-6eac0616",null).exports},methods:H()({},Object(u.c)([]),Object(u.b)(["login"]),{open:function(){this.isSignUp=!0},close:function(){this.isSignUp=!1},signIn:function(){var t={email:this.email,password:this.password};this.$store.dispatch("syncSignIn",t)}}),mounted:function(){}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"FormBox"},[n("form",{staticClass:"FormBox_Form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"FormBox_inputText",attrs:{type:"text",name:"id",id:"id",autocomplete:"off",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"FormBox_inputText",attrs:{type:"password",name:"pw",id:"pw",autocomplete:"off",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("input",{staticClass:"FormBox_login",attrs:{type:"button",value:"Login"},on:{click:t.signIn}}),t._v(" "),n("div",{staticClass:"FormBox_signUp",on:{click:function(e){t.isSignUp=!t.isSignUp}}},[t._v("sign up")])]),t._v(" "),n("sign-up",{attrs:{isPopUp:t.isSignUp},on:{close:t.close}})],1)},staticRenderFns:[]};var J={name:"Login",components:{ButtonBox:j,FormBox:n("VU/8")(W,q,!1,function(t){n("I+WE")},"data-v-039e99ff",null).exports}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Login"},[e("div",{staticClass:"container"},[e("div",{staticClass:"Login_LogoBox"}),this._v(" "),e("form-box",{staticClass:"Login_FormBox"}),this._v(" "),e("button-box",{staticClass:"Login_ButtonBox"})],1)])},staticRenderFns:[]};var X=n("VU/8")(J,z,!1,function(t){n("i5P7")},"data-v-4b45762c",null).exports,G=n("yviF"),Z=n.n(G);a.a.use(p.a);var Q=new p.a({mode:"history",routes:[{path:"/",name:"login",component:X,beforeEnter:function(t,e,n){Z.a.auth().onAuthStateChanged(function(t){t?n("/home"):n()})}},{path:"/login",redirect:"/"},{path:"/home",name:"home",component:R,meta:{requiresAuth:!0},beforeEnter:function(t,e,n){Z.a.auth().onAuthStateChanged(function(t){t?n():n("/login")})}}]}),tt={props:{isPopUp:{type:Boolean,default:!1,required:!0}},methods:{close:function(){this.$emit("close")}}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"modal"}},[this.isPopUp?e("div",{staticClass:"Modal"},[e("div",{staticClass:"container"},[e("div",{staticClass:"Modal_Head"},[e("div",{staticClass:"Modal_Head_closebtn"},[e("i",{staticClass:"fas fa-times",on:{click:this.close}})])]),this._v(" "),e("div",{staticClass:"Modal_Body"},[this._t("body",[this._v("\n          body\n        ")])],2)])]):this._e()])},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("dK41")},"data-v-6fa5fc67",null).exports,at={name:"Navigation",props:{order:{type:Number,required:!1,default:1}},data:function(){return{isDraw:!0}},computed:{marginLeft:function(){return 100*this.order+1}},methods:{draw:function(){this.isDraw?this.$refs.NavigationContent.style.transform="translateX(calc("+this.marginLeft+"px - 100%))":this.$refs.NavigationContent.style.transform="translateX(0)",this.isDraw=!this.isDraw}},mounted:function(){this.$refs.NavigationContent.style.transform="translateX(calc("+this.marginLeft+"px - 100%))"}},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"Navigation"},[n("div",{staticClass:"NavigationContent"},[n("div",{ref:"NavigationContent",staticClass:"container"},[t._t("contents")],2)]),t._v(" "),n("div",{staticClass:"NavigationCover",on:{click:t.draw}},[n("div",{ref:"NavigationCover",staticClass:"container"},[t._t("head",[t._v("Head")]),t._v(" "),t._t("subHead",[t._v("subHead")])],2)])])},staticRenderFns:[]};var ot=n("VU/8")(at,st,!1,function(t){n("Q6sZ")},"data-v-0f90c67b",null).exports;a.a.component("modal",nt),a.a.component("navigation",ot);var it=a.a;n("mgS3");a.a.config.productionTip=!1;o.a.initializeApp({apiKey:"AIzaSyAgjby0j8uBlnoXljiB9SHCep7_ZMpKMqo",authDomain:"tracord-firbase.firebaseapp.com",databaseURL:"https://tracord-firbase.firebaseio.com",projectId:"tracord-firbase",storageBucket:"tracord-firbase.appspot.com",messagingSenderId:"94357205"}),new a.a({el:"#app",router:Q,store:f,components:{App:c,GlobalComponents:it},template:"<App/>"})},Pe7J:function(t,e,n){t.exports=n.p+"static/media/KARD_Ride on the wind.c0b2c51.mp3"},Q6sZ:function(t,e){},S5jr:function(t,e){},bHcr:function(t,e){},dK41:function(t,e){},h8Lz:function(t,e){},hpbn:function(t,e){},i5P7:function(t,e){},mgS3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.153694bbb170c943a8e9.js.map