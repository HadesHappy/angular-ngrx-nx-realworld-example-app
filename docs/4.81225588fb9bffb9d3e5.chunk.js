webpackJsonp([4],{"8T4T":function(l,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("LMZF"),u=function(){},i=n("Un6q"),o=n("EDxg"),a=n("NARe"),s=n("ADVA"),r=function(){return function(){this.setListTag=new e.EventEmitter}}(),c=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function d(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"a",[["class","tag-pill tag-default"]],null,[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.setListTag.emit(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,t){l(t,1,0,t.context.$implicit)})}function p(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Popular Tags"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](3,0,null,null,4,"div",[["class","tag-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](6,802816,null,0,i.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,t){l(t,6,0,t.component.tags)},null)}var f=n("UHIZ"),g={tags:[]},m=this&&this.__assign||Object.assign||function(l){for(var t,n=1,e=arguments.length;n<e;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(l[u]=t[u]);return l};function v(l,t){switch(void 0===l&&(l=g),t.type){case"[home] LOAD_TAGS_SUCCESS":return m({},l,{tags:t.payload});case"[home] LOAD_TAGS_FAIL":return m({},l,{tags:[]});default:return l}}var E=function(l){return l.home.tags},h=n("Pqcd"),R=n("kcbe"),T=n("rXA0"),_=n("TO51"),C=n("5O0w"),S=this&&this.__assign||Object.assign||function(l){for(var t,n=1,e=arguments.length;n<e;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(l[u]=t[u]);return l},b=function(){function l(l,t){this.store=l,this.router=t,this.unsubscribe$=new _.a}return l.prototype.ngOnInit=function(){var l=this;this.store.select(h.b).pipe(Object(C.a)(this.unsubscribe$)).subscribe(function(t){l.isAuthenticated=t,l.getArticles()}),this.listConfig$=this.store.select(R.d),this.tags$=this.store.select(E)},l.prototype.setListTo=function(l){void 0===l&&(l="ALL"),this.store.dispatch({type:"[article-list] SET_LIST_CONFIG",payload:S({},T.a.listConfig,{type:l})})},l.prototype.getArticles=function(){this.setListTo(this.isAuthenticated?"FEED":"ALL")},l.prototype.setListTag=function(l){this.store.dispatch({type:"[article-list] SET_LIST_CONFIG",payload:S({},T.a.listConfig,{filters:S({},T.a.listConfig.filters,{tag:l})})})},l.prototype.ngOnDestroy=function(){this.unsubscribe$.next(),this.unsubscribe$.complete()},l}(),y=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function A(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,70,"div",[["class","home-page"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\t"])),(l()(),e["\u0275eld"](2,0,null,null,10,"div",[["class","banner"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](4,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](6,0,null,null,1,"h1",[["class","logo-font"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["conduit"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["A place to share your knowledge."])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t"])),(l()(),e["\u0275eld"](14,0,null,null,55,"div",[["class","container page"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](16,0,null,null,52,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(l()(),e["\u0275eld"](18,0,null,null,39,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275eld"](20,0,null,null,33,"div",[["class","feed-toggle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](22,0,null,null,30,"ul",[["class","nav nav-pills outline-active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](24,0,null,null,7,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](26,0,null,null,4,"a",[["class","nav-link"]],null,[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.setListTo("FEED")&&e),e},null,null)),e["\u0275did"](27,278528,null,0,i.j,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef]),e["\u0275pod"](29,{active:0}),(l()(),e["\u0275ted"](-1,null,["Your Feed"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](33,0,null,null,8,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](35,0,null,null,5,"a",[["class","nav-link"]],null,[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.setListTo("ALL")&&e),e},null,null)),e["\u0275did"](36,278528,null,0,i.j,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef]),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef]),e["\u0275pod"](39,{active:0}),(l()(),e["\u0275ted"](-1,null,["Global Feed"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](43,0,null,null,8,"li",[["class","nav-item"]],[[8,"hidden",0]],null,null,null,null)),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](46,0,null,null,4,"a",[["class","nav-link active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](48,0,null,null,0,"i",[["class","ion-pound"]],null,null,null,null,null)),(l()(),e["\u0275ted"](49,null,[" ","\n\t\t\t\t\t\t\t"])),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(l()(),e["\u0275eld"](55,0,null,null,1,"app-article-list",[],null,null,null,o.b,o.a)),e["\u0275did"](56,114688,null,0,a.a,[s.Store],null,null),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(l()(),e["\u0275eld"](59,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275eld"](61,0,null,null,5,"div",[["class","sidebar"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](63,0,null,null,2,"app-tags-list",[],null,[[null,"setListTag"]],function(l,t,n){var e=!0;return"setListTag"===t&&(e=!1!==l.component.setListTag(n)&&e),e},p,c)),e["\u0275did"](64,49152,null,0,r,[],{tags:[0,"tags"]},{setListTag:"setListTag"}),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\n"]))],function(l,t){var n,u,i=t.component;l(t,27,0,"nav-link",l(t,29,0,"FEED"===(null==(n=e["\u0275unv"](t,27,1,e["\u0275nov"](t,28).transform(i.listConfig$)))?null:n.type))),l(t,36,0,"nav-link",l(t,39,0,"ALL"===(null==(u=e["\u0275unv"](t,36,1,e["\u0275nov"](t,37).transform(i.listConfig$)))?null:u.type)&&!(null!=e["\u0275unv"](t,36,1,e["\u0275nov"](t,38).transform(i.listConfig$)).filters&&e["\u0275unv"](t,36,1,e["\u0275nov"](t,38).transform(i.listConfig$)).filters.tag))),l(t,56,0),l(t,64,0,e["\u0275unv"](t,64,0,e["\u0275nov"](t,65).transform(i.tags$)))},function(l,t){var n=t.component;l(t,43,0,!(null!=e["\u0275unv"](t,43,0,e["\u0275nov"](t,44).transform(n.listConfig$)).filters&&e["\u0275unv"](t,43,0,e["\u0275nov"](t,44).transform(n.listConfig$)).filters.tag)),l(t,49,0,null==e["\u0275unv"](t,49,0,e["\u0275nov"](t,50).transform(n.listConfig$)).filters?null:e["\u0275unv"](t,49,0,e["\u0275nov"](t,50).transform(n.listConfig$)).filters.tag)})}var O=e["\u0275ccf"]("app-home",b,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,A,y)),e["\u0275did"](1,245760,null,0,b,[s.Store,f.m],null,null)],function(l,t){l(t,1,0)},null)},{},{},[]),L=n("Cd5i"),F=n("6Pz1"),D=n("9iV4"),U=n("GZB0"),k=function(){function l(l){this.store=l}return l.prototype.resolve=function(l,t){return this.store.dispatch({type:"[home] LOAD_TAGS"}),Object(U.of)(!0)},l}(),j=n("xbAL"),$=n("zpFk"),I=n("hCWo"),w=n("lWwI"),M=n("rzKu"),G=n("Bt6m"),N=n("Tl+Y"),K=function(){function l(l){this.apiService=l}return l.prototype.getTags=function(){return this.apiService.get("/tags")},l}(),P=n("6Xbx"),x=n("wORZ"),V=n("qqDE"),q=n("5jKg"),H=function(){function l(l,t){var n=this;this.actions=l,this.homeService=t,this.loadTags=this.actions.ofType("[home] LOAD_TAGS").pipe(Object(q.a)(function(){return n.homeService.getTags().pipe(Object(V.a)(function(l){return{type:"[home] LOAD_TAGS_SUCCESS",payload:l.tags}}),Object(x.a)(function(l){return Object(U.of)({type:"[home] LOAD_TAGS_FAIL",payload:l})}))}))}return Object(P.__decorate)([Object(N.Effect)(),Object(P.__metadata)("design:type",Object)],l.prototype,"loadTags",void 0),l}(),Z=n("MkYH");n.d(t,"HomeModuleNgFactory",function(){return z});var z=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[O]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.n,i.m,[e.LOCALE_ID,[2,i.r]]),e["\u0275mpd"](4608,L.a,L.a,[]),e["\u0275mpd"](4608,F.a,F.a,[L.a,s.Store]),e["\u0275mpd"](5120,D.a,function(l,t){return[new F.a(l,t)]},[L.a,s.Store]),e["\u0275mpd"](4608,k,k,[s.Store]),e["\u0275mpd"](512,i.c,i.c,[]),e["\u0275mpd"](512,j.a,j.a,[]),e["\u0275mpd"](512,$.a,$.a,[]),e["\u0275mpd"](512,f.p,f.p,[[2,f.v],[2,f.m]]),e["\u0275mpd"](1024,s.STORE_FEATURES,function(){return[{key:"articleList",reducerFactory:s.combineReducers,metaReducers:[],initialState:{listConfig:{type:"ALL",currentPage:1,filters:{limit:10}},articles:{entities:[],articlesCount:0,loaded:!1,loading:!1}}},{key:"home",reducerFactory:s.combineReducers,metaReducers:[],initialState:{tags:[]}}]},[]),e["\u0275mpd"](1024,s._FEATURE_REDUCERS,function(){return[R.a,v]},[]),e["\u0275mpd"](1024,s._FEATURE_REDUCERS_TOKEN,function(l,t){return[l,t]},[s._FEATURE_REDUCERS,s._FEATURE_REDUCERS]),e["\u0275mpd"](1024,s.FEATURE_REDUCERS,function(l,t,n,e,u,i){return[s._createFeatureReducers(l,t,n),s._createFeatureReducers(e,u,i)]},[e.Injector,s._FEATURE_REDUCERS,s._FEATURE_REDUCERS_TOKEN,e.Injector,s._FEATURE_REDUCERS,s._FEATURE_REDUCERS_TOKEN]),e["\u0275mpd"](131584,s.StoreFeatureModule,s.StoreFeatureModule,[s.STORE_FEATURES,s.FEATURE_REDUCERS,s.ReducerManager,s.StoreRootModule]),e["\u0275mpd"](512,I.a,I.a,[w.a]),e["\u0275mpd"](512,M.a,M.a,[w.a]),e["\u0275mpd"](512,G.a,G.a,[N.Actions,I.a,M.a,s.Store]),e["\u0275mpd"](512,K,K,[w.a]),e["\u0275mpd"](512,H,H,[N.Actions,K]),e["\u0275mpd"](1024,N["\u0275e"],function(l,t){return[N["\u0275a"](l),N["\u0275a"](t)]},[G.a,H]),e["\u0275mpd"](512,N["\u0275c"],N["\u0275c"],[N["\u0275b"],N["\u0275e"],[2,s.StoreRootModule],[2,s.StoreFeatureModule]]),e["\u0275mpd"](512,Z.a,Z.a,[]),e["\u0275mpd"](512,u,u,[]),e["\u0275mpd"](1024,f.k,function(){return[[{path:"",pathMatch:"full",component:b,resolve:{HomeResolverService:k}}]]},[])])})}});