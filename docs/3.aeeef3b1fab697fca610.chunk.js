webpackJsonp([3],{Oo5C:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("LMZF"),u=l("ADVA"),r=l("rXA0"),o=this&&this.__assign||Object.assign||function(n){for(var t,l=1,e=arguments.length;l<e;l++)for(var u in t=arguments[l])Object.prototype.hasOwnProperty.call(t,u)&&(n[u]=t[u]);return n},i=function(){function n(n){this.store=n}return n.prototype.resolve=function(n,t){this.store.dispatch({type:"[profile] GET_PROFILE",payload:n.params.username})},n}(),a=function(){function n(n){this.store=n}return n.prototype.resolve=function(n,t){this.store.dispatch({type:"[article-list] SET_LIST_CONFIG",payload:o({},r.a.listConfig,{filters:o({},r.a.listConfig.filters,{author:n.params.username})})})},n}(),c=function(){function n(n){this.store=n}return n.prototype.resolve=function(n,t){this.store.dispatch({type:"[article-list] SET_LIST_CONFIG",payload:o({},r.a.listConfig,{filters:o({},r.a.listConfig.filters,{favorited:n.parent.params.username})})})},n}(),s=function(){},d=l("Un6q"),p=l("UHIZ"),f={username:"",bio:"",image:"",following:!1,loading:!1},v=this&&this.__assign||Object.assign||function(n){for(var t,l=1,e=arguments.length;l<e;l++)for(var u in t=arguments[l])Object.prototype.hasOwnProperty.call(t,u)&&(n[u]=t[u]);return n};function m(n,t){switch(t.type){case"[profile] GET_PROFILE":return v({},n,{loading:!0});case"[profile] GET_PROFILE_SUCCESS":return v({},t.payload,{loading:!1});case"[profile] GET_PROFILE_FAIL":return f;case"[profile] FOLLOW_SUCCESS":case"[profile] UNFOLLOW_SUCCESS":return t.payload;default:return n}}var b=function(n){return n.profile},O=l("Pqcd"),h=l("TO51"),g=l("ZO8H"),R=l("qqDE"),E=l("5O0w"),y=l("nihM"),_=function(){function n(n){this.store=n,this.isUser$=new h.a,this.unsubscribe$=new h.a}return n.prototype.ngOnInit=function(){var n=this;this.profile$=this.store.select(b),this.currentUser$=this.store.select(O.d),this.profile$.pipe(Object(g.b)(this.currentUser$),Object(y.a)(function(t){var l=t[0];n.username=l.username,n.following=l.following}),Object(R.a)(function(n){return n[0].username===n[1].username}),Object(E.a)(this.unsubscribe$)).subscribe(function(t){return n.isUser$.next(t)})},n.prototype.toggleFollowing=function(){this.store.dispatch(this.following?{type:"[profile] UNFOLLOW",payload:this.username}:{type:"[profile] FOLLOW",payload:this.username})},n.prototype.ngOnDestroy=function(){this.unsubscribe$.next(),this.unsubscribe$.complete()},n}(),S=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,89,"div",[["class","profile-page"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\n\t"])),(n()(),e["\u0275eld"](2,0,null,null,42,"div",[["class","user-info"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t"])),(n()(),e["\u0275eld"](4,0,null,null,39,"div",[["class","container"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(n()(),e["\u0275eld"](6,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(n()(),e["\u0275eld"](8,0,null,null,33,"div",[["class","col-xs-12 col-md-10 offset-md-1"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(n()(),e["\u0275eld"](10,0,null,null,1,"img",[["class","user-img"]],[[8,"src",4]],null,null,null,null)),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(n()(),e["\u0275eld"](13,0,null,null,3,"h4",[],[[8,"hidden",0]],null,null,null,null)),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](15,null,["",""])),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(n()(),e["\u0275eld"](18,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](19,null,["",""])),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(n()(),e["\u0275eld"](22,0,null,null,10,"button",[["class","btn btn-sm action-btn"]],[[8,"hidden",0]],[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.toggleFollowing()&&e),e},null,null)),e["\u0275did"](23,278528,null,0,d.j,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pod"](26,{"btn-outline-secondary":0,"btn-secondary":1}),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(n()(),e["\u0275eld"](29,0,null,null,0,"i",[["class","ion-plus-round"]],null,null,null,null,null)),(n()(),e["\u0275ted"](30,null,["\n\t\t\t\t\t\t\xa0 "," ","\n\t\t\t\t\t"])),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(n()(),e["\u0275eld"](34,0,null,null,6,"a",[["class","btn btn-sm btn-outline-secondary action-btn"]],[[8,"hidden",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var u=!0;return"click"===t&&(u=!1!==e["\u0275nov"](n,35).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&u),u},null,null)),e["\u0275did"](35,671744,null,0,p.o,[p.m,p.a,d.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](36,1),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(n()(),e["\u0275eld"](39,0,null,null,0,"i",[["class","ion-gear-a"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Edit Profile Settings\n\t\t\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\t"])),(n()(),e["\u0275ted"](-1,null,["\n\n\t"])),(n()(),e["\u0275eld"](46,0,null,null,42,"div",[["class","container"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t"])),(n()(),e["\u0275eld"](48,0,null,null,39,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(n()(),e["\u0275eld"](50,0,null,null,36,"div",[["class","col-xs-12 col-md-10 offset-md-1"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(n()(),e["\u0275eld"](52,0,null,null,30,"div",[["class","articles-toggle"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(n()(),e["\u0275eld"](54,0,null,null,27,"ul",[["class","nav nav-pills outline-active"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(n()(),e["\u0275eld"](56,0,null,null,11,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(n()(),e["\u0275eld"](58,0,null,null,8,"a",[["class","nav-link"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var u=!0;return"click"===t&&(u=!1!==e["\u0275nov"](n,59).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&u),u},null,null)),e["\u0275did"](59,671744,[[2,4]],0,p.o,[p.m,p.a,d.i],{routerLink:[0,"routerLink"]},null),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pad"](61,2),e["\u0275did"](62,1720320,null,2,p.n,[p.m,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),e["\u0275pod"](65,{exact:0}),(n()(),e["\u0275ted"](-1,null,["My Articles"])),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(n()(),e["\u0275eld"](69,0,null,null,11,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(n()(),e["\u0275eld"](71,0,null,null,8,"a",[["class","nav-link"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var u=!0;return"click"===t&&(u=!1!==e["\u0275nov"](n,72).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&u),u},null,null)),e["\u0275did"](72,671744,[[4,4]],0,p.o,[p.m,p.a,d.i],{routerLink:[0,"routerLink"]},null),e["\u0275pid"](131072,d.b,[e.ChangeDetectorRef]),e["\u0275pad"](74,3),e["\u0275did"](75,1720320,null,2,p.n,[p.m,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),e["\u0275pod"](78,{exact:0}),(n()(),e["\u0275ted"](-1,null,["Favorited Articles"])),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(n()(),e["\u0275eld"](84,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](85,212992,null,0,p.q,[p.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null),(n()(),e["\u0275ted"](-1,null,["\n\n\t\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\n\t\t"])),(n()(),e["\u0275ted"](-1,null,["\n\t"])),(n()(),e["\u0275ted"](-1,null,["\n\n"]))],function(n,t){var l=t.component;n(t,23,0,"btn btn-sm action-btn",n(t,26,0,!e["\u0275unv"](t,23,1,e["\u0275nov"](t,24).transform(l.profile$)).following,e["\u0275unv"](t,23,1,e["\u0275nov"](t,25).transform(l.profile$)).following)),n(t,35,0,n(t,36,0,"/settings")),n(t,59,0,n(t,61,0,"/profile",e["\u0275unv"](t,59,0,e["\u0275nov"](t,60).transform(l.profile$)).username)),n(t,62,0,n(t,65,0,!0),"active"),n(t,72,0,n(t,74,0,"/profile",e["\u0275unv"](t,72,0,e["\u0275nov"](t,73).transform(l.profile$)).username,"favorites")),n(t,75,0,n(t,78,0,!0),"active"),n(t,85,0)},function(n,t){var l,u,r,o=t.component;n(t,10,0,null==(l=e["\u0275unv"](t,10,0,e["\u0275nov"](t,11).transform(o.profile$)))?null:l.image),n(t,13,0,e["\u0275unv"](t,13,0,e["\u0275nov"](t,14).transform(o.profile$)).loading),n(t,15,0,null==(u=e["\u0275unv"](t,15,0,e["\u0275nov"](t,16).transform(o.profile$)))?null:u.username),n(t,19,0,null==(r=e["\u0275unv"](t,19,0,e["\u0275nov"](t,20).transform(o.profile$)))?null:r.bio),n(t,22,0,e["\u0275unv"](t,22,0,e["\u0275nov"](t,27).transform(o.isUser$))),n(t,30,0,e["\u0275unv"](t,30,0,e["\u0275nov"](t,31).transform(o.profile$)).following?"Unfollow":"Follow",e["\u0275unv"](t,30,1,e["\u0275nov"](t,32).transform(o.profile$)).username),n(t,34,0,!e["\u0275unv"](t,34,0,e["\u0275nov"](t,37).transform(o.isUser$)),e["\u0275nov"](t,35).target,e["\u0275nov"](t,35).href),n(t,58,0,e["\u0275nov"](t,59).target,e["\u0275nov"](t,59).href),n(t,71,0,e["\u0275nov"](t,72).target,e["\u0275nov"](t,72).href)})}var F=e["\u0275ccf"]("app-profile",_,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-profile",[],null,null,null,C,S)),e["\u0275did"](1,245760,null,0,_,[u.Store],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),L=l("EDxg"),U=l("NARe"),j=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),k=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function A(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,2,"app-article-list",[],null,null,null,L.b,L.a)),e["\u0275did"](1,114688,null,0,U.a,[u.Store],null,null),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,t){n(t,1,0)},null)}var w=e["\u0275ccf"]("app-profile-articles",j,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-profile-articles",[],null,null,null,A,k)),e["\u0275did"](1,114688,null,0,j,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),T=l("Cd5i"),D=l("6Pz1"),P=l("9iV4"),I=l("xbAL"),$=l("zpFk"),K=l("kcbe"),W=l("hCWo"),M=l("lWwI"),N=l("rzKu"),x=l("Bt6m"),q=l("Tl+Y"),G=function(){function n(n){this.apiService=n}return n.prototype.getProfile=function(n){return this.apiService.get("/profiles/"+n).pipe(Object(R.a)(function(n){return n.profile}))},n}(),H=l("6Xbx"),Z=(l("RSzd"),l("GZB0")),z=l("wORZ"),V=l("8JPw"),B=l("2xqx"),J=l("wP3s"),X=l("5jKg"),Y=function(){function n(n,t,l){var e=this;this.actions=n,this.actionsService=t,this.profileService=l,this.getProfile=this.actions.ofType("[profile] GET_PROFILE").pipe(Object(B.a)(function(n){return n.payload}),Object(J.a)(function(n){return n.pipe(Object(R.a)(function(n){return n.payload}),Object(X.a)(function(n){return e.profileService.getProfile(n).pipe(Object(R.a)(function(n){return{type:"[profile] GET_PROFILE_SUCCESS",payload:n}}),Object(z.a)(function(n){return Object(Z.of)({type:"[profile] GET_PROFILE_FAIL",payload:n})}))}))})),this.follow=this.actions.ofType("[profile] FOLLOW").pipe(Object(R.a)(function(n){return n.payload}),Object(V.a)(function(n){return e.actionsService.followUser(n).pipe(Object(R.a)(function(n){return{type:"[profile] FOLLOW_SUCCESS",payload:n}}),Object(z.a)(function(n){return Object(Z.of)({type:"[profile] FOLLOW_FAIL",payload:n})}))})),this.unFollow=this.actions.ofType("[profile] UNFOLLOW").pipe(Object(R.a)(function(n){return n.payload}),Object(V.a)(function(n){return e.actionsService.unfollowUser(n).pipe(Object(R.a)(function(n){return{type:"[profile] UNFOLLOW_SUCCESS",payload:n}}),Object(z.a)(function(n){return Object(Z.of)({type:"[profile] UNFOLLOW_FAIL",payload:n})}))}))}return Object(H.__decorate)([Object(q.Effect)(),Object(H.__metadata)("design:type",Object)],n.prototype,"getProfile",void 0),Object(H.__decorate)([Object(q.Effect)(),Object(H.__metadata)("design:type",Object)],n.prototype,"follow",void 0),Object(H.__decorate)([Object(q.Effect)(),Object(H.__metadata)("design:type",Object)],n.prototype,"unFollow",void 0),n}(),Q=l("MkYH");l.d(t,"ProfileModuleNgFactory",function(){return nn});var nn=e["\u0275cmf"](s,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[F,w]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,d.n,d.m,[e.LOCALE_ID,[2,d.r]]),e["\u0275mpd"](4608,T.a,T.a,[]),e["\u0275mpd"](4608,D.a,D.a,[T.a,u.Store]),e["\u0275mpd"](5120,P.a,function(n,t){return[new D.a(n,t)]},[T.a,u.Store]),e["\u0275mpd"](4608,i,i,[u.Store]),e["\u0275mpd"](4608,a,a,[u.Store]),e["\u0275mpd"](4608,c,c,[u.Store]),e["\u0275mpd"](512,d.c,d.c,[]),e["\u0275mpd"](512,I.a,I.a,[]),e["\u0275mpd"](512,$.a,$.a,[]),e["\u0275mpd"](512,p.p,p.p,[[2,p.v],[2,p.m]]),e["\u0275mpd"](1024,u.STORE_FEATURES,function(){return[{key:"articleList",reducerFactory:u.combineReducers,metaReducers:[],initialState:{listConfig:{type:"ALL",currentPage:1,filters:{limit:10}},articles:{entities:[],articlesCount:0,loaded:!1,loading:!1}}},{key:"profile",reducerFactory:u.combineReducers,metaReducers:[],initialState:{username:"",bio:"",image:"",following:!1,loading:!1}}]},[]),e["\u0275mpd"](1024,u._FEATURE_REDUCERS,function(){return[K.a,m]},[]),e["\u0275mpd"](1024,u._FEATURE_REDUCERS_TOKEN,function(n,t){return[n,t]},[u._FEATURE_REDUCERS,u._FEATURE_REDUCERS]),e["\u0275mpd"](1024,u.FEATURE_REDUCERS,function(n,t,l,e,r,o){return[u._createFeatureReducers(n,t,l),u._createFeatureReducers(e,r,o)]},[e.Injector,u._FEATURE_REDUCERS,u._FEATURE_REDUCERS_TOKEN,e.Injector,u._FEATURE_REDUCERS,u._FEATURE_REDUCERS_TOKEN]),e["\u0275mpd"](131584,u.StoreFeatureModule,u.StoreFeatureModule,[u.STORE_FEATURES,u.FEATURE_REDUCERS,u.ReducerManager,u.StoreRootModule]),e["\u0275mpd"](512,W.a,W.a,[M.a]),e["\u0275mpd"](512,N.a,N.a,[M.a]),e["\u0275mpd"](512,x.a,x.a,[q.Actions,W.a,N.a,u.Store]),e["\u0275mpd"](512,G,G,[M.a]),e["\u0275mpd"](512,Y,Y,[q.Actions,N.a,G]),e["\u0275mpd"](1024,q["\u0275e"],function(n,t){return[q["\u0275a"](n),q["\u0275a"](t)]},[x.a,Y]),e["\u0275mpd"](512,q["\u0275c"],q["\u0275c"],[q["\u0275b"],q["\u0275e"],[2,u.StoreRootModule],[2,u.StoreFeatureModule]]),e["\u0275mpd"](512,Q.a,Q.a,[]),e["\u0275mpd"](512,s,s,[]),e["\u0275mpd"](1024,p.k,function(){return[[{path:"",component:_,resolve:{ProfileResolverService:i},children:[{path:"",component:j,resolve:{ProfileArticlesResolverService:a}},{path:"favorites",component:j,resolve:{ProfileFavoritesResolverService:c}}]}]]},[])])})}});