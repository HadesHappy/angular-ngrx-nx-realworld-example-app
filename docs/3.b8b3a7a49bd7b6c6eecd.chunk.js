webpackJsonp([3],{Oo5C:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=t("ADVA"),r=t("rXA0"),o=this&&this.__assign||Object.assign||function(l){for(var n,t=1,e=arguments.length;t<e;t++)for(var u in n=arguments[t])Object.prototype.hasOwnProperty.call(n,u)&&(l[u]=n[u]);return l},i=function(){function l(l){this.store=l}return l.prototype.resolve=function(l,n){this.store.dispatch({type:"[profile] GET_PROFILE",payload:l.params.username})},l}(),a=function(){function l(l){this.store=l}return l.prototype.resolve=function(l,n){this.store.dispatch({type:"[article-list] SET_LIST_CONFIG",payload:o({},r.a.listConfig,{filters:o({},r.a.listConfig.filters,{author:l.params.username})})})},l}(),c=function(){function l(l){this.store=l}return l.prototype.resolve=function(l,n){this.store.dispatch({type:"[article-list] SET_LIST_CONFIG",payload:o({},r.a.listConfig,{filters:o({},r.a.listConfig.filters,{favorited:l.parent.params.username})})})},l}(),s=function(){},d=t("Un6q"),f=t("UHIZ"),p={username:"",bio:"",image:"",following:!1,loading:!1},v=this&&this.__assign||Object.assign||function(l){for(var n,t=1,e=arguments.length;t<e;t++)for(var u in n=arguments[t])Object.prototype.hasOwnProperty.call(n,u)&&(l[u]=n[u]);return l};function m(l,n){switch(n.type){case"[profile] GET_PROFILE":return v({},l,{loading:!0});case"[profile] GET_PROFILE_SUCCESS":return v({},n.payload,{loading:!1});case"[profile] GET_PROFILE_FAIL":return p;case"[profile] FOLLOW_SUCCESS":case"[profile] UNFOLLOW_SUCCESS":return n.payload;default:return l}}var b=function(l){return l.profile},O=t("Pqcd"),h=t("TO51"),g=t("ZO8H"),R=t("qqDE"),E=t("5O0w"),y=t("nihM"),_=function(){function l(l){this.store=l,this.isUser$=new h.a,this.unsubscribe$=new h.a}return l.prototype.ngOnInit=function(){var l=this;this.profile$=this.store.select(b),this.currentUser$=this.store.select(O.d),this.profile$.pipe(Object(g.b)(this.currentUser$),Object(y.a)(function(n){var t=n[0];l.username=t.username,l.following=t.following}),Object(R.a)(function(l){return l[0].username===l[1].username}),Object(E.a)(this.unsubscribe$)).subscribe(function(n){return l.isUser$.next(n)})},l.prototype.toggleFollowing=function(){this.store.dispatch(this.following?{type:"[profile] UNFOLLOW",payload:this.username}:{type:"[profile] FOLLOW",payload:this.username})},l.prototype.ngOnDestroy=function(){this.unsubscribe$.next(),this.unsubscribe$.complete()},l}(),S=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,89,"div",[["class","profile-page"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\t"])),(l()(),e["\u0275eld"](2,0,null,null,42,"div",[["class","user-info"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](4,0,null,null,39,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](6,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(l()(),e["\u0275eld"](8,0,null,null,33,"div",[["class","col-xs-12 col-md-10 offset-md-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](10,0,null,null,1,"img",[["class","user-img"]],[[8,"src",4]],null,null,null,null)),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](13,0,null,null,3,"h4",[],[[8,"hidden",0]],null,null,null,null)),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](15,null,["",""])),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](18,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,["",""])),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](22,0,null,null,10,"button",[["class","btn btn-sm action-btn"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggleFollowing()&&e),e},null,null)),e["\u0275did"](23,278528,null,0,d.j,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pod"](26,{"btn-outline-secondary":0,"btn-secondary":1}),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](29,0,null,null,0,"i",[["class","ion-plus-round"]],null,null,null,null,null)),(l()(),e["\u0275ted"](30,null,["\n\t\t\t\t\t\t\xa0 "," ","\n\t\t\t\t\t"])),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](34,0,null,null,6,"a",[["class","btn btn-sm btn-outline-secondary action-btn"]],[[8,"hidden",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,35).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](35,671744,null,0,f.o,[f.m,f.a,d.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](36,1),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](39,0,null,null,0,"i",[["class","ion-gear-a"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Edit Profile Settings\n\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t"])),(l()(),e["\u0275eld"](46,0,null,null,42,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](48,0,null,null,39,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(l()(),e["\u0275eld"](50,0,null,null,36,"div",[["class","col-xs-12 col-md-10 offset-md-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275eld"](52,0,null,null,30,"div",[["class","articles-toggle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](54,0,null,null,27,"ul",[["class","nav nav-pills outline-active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](56,0,null,null,11,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](58,0,null,null,8,"a",[["class","nav-link"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,59).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](59,671744,[[2,4]],0,f.o,[f.m,f.a,d.i],{routerLink:[0,"routerLink"]},null),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pad"](61,2),e["\u0275did"](62,1720320,null,2,f.n,[f.m,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),e["\u0275pod"](65,{exact:0}),(l()(),e["\u0275ted"](-1,null,["My Articles"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](69,0,null,null,11,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](71,0,null,null,8,"a",[["class","nav-link"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,72).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](72,671744,[[4,4]],0,f.o,[f.m,f.a,d.i],{routerLink:[0,"routerLink"]},null),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pad"](74,3),e["\u0275did"](75,1720320,null,2,f.n,[f.m,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),e["\u0275pod"](78,{exact:0}),(l()(),e["\u0275ted"](-1,null,["Favorited Articles"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(l()(),e["\u0275eld"](84,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](85,212992,null,0,f.q,[f.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n"]))],function(l,n){var t=n.component;l(n,23,0,"btn btn-sm action-btn",l(n,26,0,!e["\u0275unv"](n,23,1,e["\u0275nov"](n,24).transform(t.profile$)).following,e["\u0275unv"](n,23,1,e["\u0275nov"](n,25).transform(t.profile$)).following)),l(n,35,0,l(n,36,0,"/settings")),l(n,59,0,l(n,61,0,"/profile",e["\u0275unv"](n,59,0,e["\u0275nov"](n,60).transform(t.profile$)).username)),l(n,62,0,l(n,65,0,!0),"active"),l(n,72,0,l(n,74,0,"/profile",e["\u0275unv"](n,72,0,e["\u0275nov"](n,73).transform(t.profile$)).username,"favorites")),l(n,75,0,l(n,78,0,!0),"active"),l(n,85,0)},function(l,n){var t,u,r,o=n.component;l(n,10,0,null==(t=e["\u0275unv"](n,10,0,e["\u0275nov"](n,11).transform(o.profile$)))?null:t.image),l(n,13,0,e["\u0275unv"](n,13,0,e["\u0275nov"](n,14).transform(o.profile$)).loading),l(n,15,0,null==(u=e["\u0275unv"](n,15,0,e["\u0275nov"](n,16).transform(o.profile$)))?null:u.username),l(n,19,0,null==(r=e["\u0275unv"](n,19,0,e["\u0275nov"](n,20).transform(o.profile$)))?null:r.bio),l(n,22,0,e["\u0275unv"](n,22,0,e["\u0275nov"](n,27).transform(o.isUser$))),l(n,30,0,e["\u0275unv"](n,30,0,e["\u0275nov"](n,31).transform(o.profile$)).following?"Unfollow":"Follow",e["\u0275unv"](n,30,1,e["\u0275nov"](n,32).transform(o.profile$)).username),l(n,34,0,!e["\u0275unv"](n,34,0,e["\u0275nov"](n,37).transform(o.isUser$)),e["\u0275nov"](n,35).target,e["\u0275nov"](n,35).href),l(n,58,0,e["\u0275nov"](n,59).target,e["\u0275nov"](n,59).href),l(n,71,0,e["\u0275nov"](n,72).target,e["\u0275nov"](n,72).href)})}var F=e["\u0275ccf"]("app-profile",_,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-profile",[],null,null,null,C,S)),e["\u0275did"](1,245760,null,0,_,[u.Store],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),L=t("EDxg"),U=t("NARe"),j=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),k=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function A(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,2,"app-article-list",[],null,null,null,L.b,L.a)),e["\u0275did"](1,114688,null,0,U.a,[u.Store],null,null),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,1,0)},null)}var T=e["\u0275ccf"]("app-profile-articles",j,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-profile-articles",[],null,null,null,A,k)),e["\u0275did"](1,114688,null,0,j,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),w=t("zpFk"),D=t("kcbe"),I=t("hCWo"),P=t("lWwI"),$=t("Bt6m"),K=t("Tl+Y"),W=t("rzKu"),M=function(){function l(l){this.apiService=l}return l.prototype.getProfile=function(l){return this.apiService.get("/profiles/"+l).pipe(Object(R.a)(function(l){return l.profile}))},l}(),N=t("6Xbx"),q=(t("RSzd"),t("GZB0")),x=t("wORZ"),G=t("8JPw"),H=t("2xqx"),Z=t("wP3s"),z=t("5jKg"),V=function(){function l(l,n,t){var e=this;this.actions=l,this.actionsService=n,this.profileService=t,this.getProfile=this.actions.ofType("[profile] GET_PROFILE").pipe(Object(H.a)(function(l){return l.payload}),Object(Z.a)(function(l){return l.pipe(Object(R.a)(function(l){return l.payload}),Object(z.a)(function(l){return e.profileService.getProfile(l).pipe(Object(R.a)(function(l){return{type:"[profile] GET_PROFILE_SUCCESS",payload:l}}),Object(x.a)(function(l){return Object(q.of)({type:"[profile] GET_PROFILE_FAIL",payload:l})}))}))})),this.follow=this.actions.ofType("[profile] FOLLOW").pipe(Object(R.a)(function(l){return l.payload}),Object(G.a)(function(l){return e.actionsService.followUser(l).pipe(Object(R.a)(function(l){return{type:"[profile] FOLLOW_SUCCESS",payload:l}}),Object(x.a)(function(l){return Object(q.of)({type:"[profile] FOLLOW_FAIL",payload:l})}))})),this.unFollow=this.actions.ofType("[profile] UNFOLLOW").pipe(Object(R.a)(function(l){return l.payload}),Object(G.a)(function(l){return e.actionsService.unfollowUser(l).pipe(Object(R.a)(function(l){return{type:"[profile] UNFOLLOW_SUCCESS",payload:l}}),Object(x.a)(function(l){return Object(q.of)({type:"[profile] UNFOLLOW_FAIL",payload:l})}))}))}return Object(N.__decorate)([Object(K.Effect)(),Object(N.__metadata)("design:type",Object)],l.prototype,"getProfile",void 0),Object(N.__decorate)([Object(K.Effect)(),Object(N.__metadata)("design:type",Object)],l.prototype,"follow",void 0),Object(N.__decorate)([Object(K.Effect)(),Object(N.__metadata)("design:type",Object)],l.prototype,"unFollow",void 0),l}(),B=t("MkYH");t.d(n,"ProfileModuleNgFactory",function(){return J});var J=e["\u0275cmf"](s,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[F,T]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,d.n,d.m,[e.LOCALE_ID,[2,d.r]]),e["\u0275mpd"](4608,i,i,[u.Store]),e["\u0275mpd"](4608,a,a,[u.Store]),e["\u0275mpd"](4608,c,c,[u.Store]),e["\u0275mpd"](512,d.c,d.c,[]),e["\u0275mpd"](512,w.a,w.a,[]),e["\u0275mpd"](512,f.p,f.p,[[2,f.v],[2,f.m]]),e["\u0275mpd"](1024,u.STORE_FEATURES,function(){return[{key:"articleList",reducerFactory:u.combineReducers,metaReducers:[],initialState:{listConfig:{type:"ALL",currentPage:1,filters:{limit:10}},articles:{entities:[],articlesCount:0,loaded:!1,loading:!1}}},{key:"profile",reducerFactory:u.combineReducers,metaReducers:[],initialState:{username:"",bio:"",image:"",following:!1,loading:!1}}]},[]),e["\u0275mpd"](1024,u._FEATURE_REDUCERS,function(){return[D.a,m]},[]),e["\u0275mpd"](1024,u._FEATURE_REDUCERS_TOKEN,function(l,n){return[l,n]},[u._FEATURE_REDUCERS,u._FEATURE_REDUCERS]),e["\u0275mpd"](1024,u.FEATURE_REDUCERS,function(l,n,t,e,r,o){return[u._createFeatureReducers(l,n,t),u._createFeatureReducers(e,r,o)]},[e.Injector,u._FEATURE_REDUCERS,u._FEATURE_REDUCERS_TOKEN,e.Injector,u._FEATURE_REDUCERS,u._FEATURE_REDUCERS_TOKEN]),e["\u0275mpd"](131584,u.StoreFeatureModule,u.StoreFeatureModule,[u.STORE_FEATURES,u.FEATURE_REDUCERS,u.ReducerManager,u.StoreRootModule]),e["\u0275mpd"](512,I.a,I.a,[P.a]),e["\u0275mpd"](512,$.a,$.a,[K.Actions,I.a,W.a,u.Store]),e["\u0275mpd"](512,M,M,[P.a]),e["\u0275mpd"](512,V,V,[K.Actions,W.a,M]),e["\u0275mpd"](1024,K["\u0275e"],function(l,n){return[K["\u0275a"](l),K["\u0275a"](n)]},[$.a,V]),e["\u0275mpd"](512,K["\u0275c"],K["\u0275c"],[K["\u0275b"],K["\u0275e"],[2,u.StoreRootModule],[2,u.StoreFeatureModule]]),e["\u0275mpd"](512,B.a,B.a,[]),e["\u0275mpd"](512,s,s,[]),e["\u0275mpd"](1024,f.k,function(){return[[{path:"",component:_,resolve:{ProfileResolverService:i},children:[{path:"",component:j,resolve:{ProfileArticlesResolverService:a}},{path:"favorites",component:j,resolve:{ProfileFavoritesResolverService:c}}]}]]},[])])})}});