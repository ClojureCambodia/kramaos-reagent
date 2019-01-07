// Compiled by ClojureScript 1.10.439 {}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('meta_merge.core');
goog.require('clojure.string');
goog.require('reitit.segment');
goog.require('reitit.impl');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.expand[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,opts);
} else {
var m__4348__auto____$1 = (reitit.core.expand["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));
reitit.core.walk = (function reitit$core$walk(raw_routes,p__33673){
var map__33674 = p__33673;
var map__33674__$1 = (((((!((map__33674 == null))))?(((((map__33674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33674):map__33674);
var opts = map__33674__$1;
var path = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand);
var walk_many = ((function (map__33674,map__33674__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,((function (map__33674,map__33674__$1,opts,path,data,routes,expand){
return (function (p1__33671_SHARP_,p2__33672_SHARP_){
return cljs.core.into.call(null,p1__33671_SHARP_,walk_one.call(null,p,m,p2__33672_SHARP_));
});})(map__33674,map__33674__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__33674,map__33674__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__33674,map__33674__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__33685 = routes__$1;
var seq__33686 = cljs.core.seq.call(null,vec__33685);
var first__33687 = cljs.core.first.call(null,seq__33686);
var seq__33686__$1 = cljs.core.next.call(null,seq__33686);
var path__$1 = first__33687;
var vec__33688 = seq__33686__$1;
var maybe_arg = cljs.core.nth.call(null,vec__33688,(0),null);
var args = vec__33688;
var vec__33691 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__33691,(0),null);
var childs = cljs.core.nth.call(null,vec__33691,(1),null);
var macc__$1 = cljs.core.into.call(null,macc,expand.call(null,data__$1,opts));
var child_routes = walk_many.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.call(null,cljs.core.identity,childs));
if(cljs.core.seq.call(null,childs)){
return cljs.core.seq.call(null,child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__33674,map__33674__$1,opts,path,data,routes,expand))
;
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p1__33694_SHARP_){
return cljs.core.update.call(null,p1__33694_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.call(null,(function (acc,p__33695){
var vec__33696 = p__33695;
var k = cljs.core.nth.call(null,vec__33696,(0),null);
var v = cljs.core.nth.call(null,vec__33696,(1),null);
return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__33700){
var map__33701 = p__33700;
var map__33701__$1 = (((((!((map__33701 == null))))?(((((map__33701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33701):map__33701);
var opts = map__33701__$1;
var coerce = cljs.core.get.call(null,map__33701__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__33703 = reitit.core.map_data.call(null,reitit.core.merge_data,reitit.core.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,((function (G__33703,map__33701,map__33701__$1,opts,coerce){
return (function (p1__33699_SHARP_){
return coerce.call(null,p1__33699_SHARP_,opts);
});})(G__33703,map__33701,map__33701__$1,opts,coerce))
),G__33703);
} else {
return G__33703;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
var G__33705 = (function (){var G__33709 = routes;
var vec__33710 = G__33709;
var seq__33711 = cljs.core.seq.call(null,vec__33710);
var first__33712 = cljs.core.first.call(null,seq__33711);
var seq__33711__$1 = cljs.core.next.call(null,seq__33711);
var r = first__33712;
var rest = seq__33711__$1;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var G__33709__$1 = G__33709;
var acc__$1 = acc;
while(true){
var vec__33713 = G__33709__$1;
var seq__33714 = cljs.core.seq.call(null,vec__33713);
var first__33715 = cljs.core.first.call(null,seq__33714);
var seq__33714__$1 = cljs.core.next.call(null,seq__33714);
var r__$1 = first__33715;
var rest__$1 = seq__33714__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq.call(null,rest__$1)){
var conflicting = cljs.core.set.call(null,cljs.core.keep.call(null,((function (G__33709__$1,acc__$1,vec__33713,seq__33714,first__33715,seq__33714__$1,r__$1,rest__$1,acc__$2,G__33709,vec__33710,seq__33711,first__33712,seq__33711__$1,r,rest,acc){
return (function (p1__33704_SHARP_){
if(reitit.impl.conflicting_routes_QMARK_.call(null,r__$1,p1__33704_SHARP_)){
return p1__33704_SHARP_;
} else {
return null;
}
});})(G__33709__$1,acc__$1,vec__33713,seq__33714,first__33715,seq__33714__$1,r__$1,rest__$1,acc__$2,G__33709,vec__33710,seq__33711,first__33712,seq__33711__$1,r,rest,acc))
,rest__$1));
var G__33716 = rest__$1;
var G__33717 = cljs.core.update.call(null,acc__$2,r__$1,cljs.core.fnil.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),cljs.core.PersistentHashSet.EMPTY),conflicting);
G__33709__$1 = G__33716;
acc__$1 = G__33717;
continue;
} else {
return acc__$2;
}
break;
}
})();
var G__33705__$1 = (((G__33705 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),G__33705));
var G__33705__$2 = (((G__33705__$1 == null))?null:cljs.core.seq.call(null,G__33705__$1));
if((G__33705__$2 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33705__$2);
}
});
reitit.core.path_conflicts_str = (function reitit$core$path_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.call(null,(function (p__33718){
var vec__33719 = p__33718;
var vec__33722 = cljs.core.nth.call(null,vec__33719,(0),null);
var path = cljs.core.nth.call(null,vec__33722,(0),null);
var vals = cljs.core.nth.call(null,vec__33719,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__33725 = routes;
var G__33725__$1 = (((G__33725 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__33725));
var G__33725__$2 = (((G__33725__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__33725__$1));
var G__33725__$3 = (((G__33725__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__33725__$2));
var G__33725__$4 = (((G__33725__$3 == null))?null:cljs.core.seq.call(null,G__33725__$3));
var G__33725__$5 = (((G__33725__$4 == null))?null:cljs.core.map.call(null,((function (G__33725,G__33725__$1,G__33725__$2,G__33725__$3,G__33725__$4){
return (function (p__33726){
var vec__33727 = p__33726;
var k = cljs.core.nth.call(null,vec__33727,(0),null);
var v = cljs.core.nth.call(null,vec__33727,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
});})(G__33725,G__33725__$1,G__33725__$2,G__33725__$3,G__33725__$4))
,G__33725__$4));
if((G__33725__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33725__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.call(null,(function (p__33730){
var vec__33731 = p__33730;
var name = cljs.core.nth.call(null,vec__33731,(0),null);
var vals = cljs.core.nth.call(null,vec__33731,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.call(null,f.call(null,conflicts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__33734,_){
var vec__33735 = p__33734;
var ___$1 = cljs.core.nth.call(null,vec__33735,(0),null);
var map__33738 = cljs.core.nth.call(null,vec__33735,(1),null);
var map__33738__$1 = (((((!((map__33738 == null))))?(((((map__33738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var name = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__33740_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33740_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__33741,p__33742){
var vec__33743 = p__33741;
var p = cljs.core.nth.call(null,vec__33743,(0),null);
var m = cljs.core.nth.call(null,vec__33743,(1),null);
var route = vec__33743;
var map__33746 = p__33742;
var map__33746__$1 = (((((!((map__33746 == null))))?(((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33746):map__33746);
var opts = map__33746__$1;
var compile = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__33748_SHARP_){
return reitit.core.compile_route.call(null,p1__33748_SHARP_,opts);
}),routes));
});
reitit.core.uncompile_routes = (function reitit$core$uncompile_routes(routes){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.take,(2))),routes);
});
reitit.core.route_info = (function reitit$core$route_info(route){
return cljs.core.select_keys.call(null,reitit.impl.create.call(null,route),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)], null));
});

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.router_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.router_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.routes[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.compiled_routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.options[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.options["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.route_names[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.route_names["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,path);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_path["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__33750 = arguments.length;
switch (G__33750) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,name);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,name,path_params);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,name,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33754,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33758 = k33754;
var G__33758__$1 = (((G__33758 instanceof cljs.core.Keyword))?G__33758.fqn:null);
switch (G__33758__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33754,else__4304__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33759){
var vec__33760 = p__33759;
var k__4324__auto__ = cljs.core.nth.call(null,vec__33760,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__33760,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.Match{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33753){
var self__ = this;
var G__33753__$1 = this;
return (new cljs.core.RecordIter((0),G__33753__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33755,other33756){
var self__ = this;
var this33755__$1 = this;
return (((!((other33756 == null)))) && ((this33755__$1.constructor === other33756.constructor)) && (cljs.core._EQ_.call(null,this33755__$1.template,other33756.template)) && (cljs.core._EQ_.call(null,this33755__$1.data,other33756.data)) && (cljs.core._EQ_.call(null,this33755__$1.result,other33756.result)) && (cljs.core._EQ_.call(null,this33755__$1.path_params,other33756.path_params)) && (cljs.core._EQ_.call(null,this33755__$1.path,other33756.path)) && (cljs.core._EQ_.call(null,this33755__$1.__extmap,other33756.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33753){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33763 = cljs.core.keyword_identical_QMARK_;
var expr__33764 = k__4309__auto__;
if(cljs.core.truth_(pred__33763.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__33764))){
return (new reitit.core.Match(G__33753,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33763.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33764))){
return (new reitit.core.Match(self__.template,G__33753,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33763.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__33764))){
return (new reitit.core.Match(self__.template,self__.data,G__33753,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33763.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33764))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__33753,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33763.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__33764))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__33753,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__33753),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33753){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__33753,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__33757){
var extmap__4340__auto__ = (function (){var G__33766 = cljs.core.dissoc.call(null,G__33757,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__33757)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33766);
} else {
return G__33766;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__33757),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33757),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__33757),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33757),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33757),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33769,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33773 = k33769;
var G__33773__$1 = (((G__33773 instanceof cljs.core.Keyword))?G__33773.fqn:null);
switch (G__33773__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33769,else__4304__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33774){
var vec__33775 = p__33774;
var k__4324__auto__ = cljs.core.nth.call(null,vec__33775,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__33775,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33768){
var self__ = this;
var G__33768__$1 = this;
return (new cljs.core.RecordIter((0),G__33768__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33770,other33771){
var self__ = this;
var this33770__$1 = this;
return (((!((other33771 == null)))) && ((this33770__$1.constructor === other33771.constructor)) && (cljs.core._EQ_.call(null,this33770__$1.template,other33771.template)) && (cljs.core._EQ_.call(null,this33770__$1.data,other33771.data)) && (cljs.core._EQ_.call(null,this33770__$1.result,other33771.result)) && (cljs.core._EQ_.call(null,this33770__$1.path_params,other33771.path_params)) && (cljs.core._EQ_.call(null,this33770__$1.required,other33771.required)) && (cljs.core._EQ_.call(null,this33770__$1.__extmap,other33771.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33768){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33778 = cljs.core.keyword_identical_QMARK_;
var expr__33779 = k__4309__auto__;
if(cljs.core.truth_(pred__33778.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__33779))){
return (new reitit.core.PartialMatch(G__33768,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33778.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33779))){
return (new reitit.core.PartialMatch(self__.template,G__33768,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33778.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__33779))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__33768,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33778.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33779))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__33768,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33778.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__33779))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__33768,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__33768),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33768){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__33768,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__33772){
var extmap__4340__auto__ = (function (){var G__33781 = cljs.core.dissoc.call(null,G__33772,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__33772)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33781);
} else {
return G__33781;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__33772),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33772),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__33772),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33772),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__33772),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__33784 = arguments.length;
switch (G__33784) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.call(null,this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5455__auto__ = reitit.core.match_by_name.call(null,this$,name,path_params);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
if((!(reitit.core.partial_match_QMARK_.call(null,match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__33787 = arguments.length;
switch (G__33787) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.call(null,match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__33788 = match;
var G__33788__$1 = (((G__33788 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33788));
if((G__33788__$1 == null)){
return null;
} else {
var G__33789 = G__33788__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33789),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string.call(null,query_params))].join('');
} else {
return G__33789;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),reitit.core.name_lookup,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__33791,_){
var vec__33792 = p__33791;
var ___$1 = cljs.core.nth.call(null,vec__33792,(0),null);
var map__33795 = cljs.core.nth.call(null,vec__33792,(1),null);
var map__33795__$1 = (((((!((map__33795 == null))))?(((((map__33795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33795):map__33795);
var handler = cljs.core.get.call(null,map__33795__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),cljs.core.partial.call(null,reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__33799 = arguments.length;
switch (G__33799) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33800 = cljs.core.reduce.call(null,((function (names){
return (function (p__33803,p__33804){
var vec__33805 = p__33803;
var pl = cljs.core.nth.call(null,vec__33805,(0),null);
var nl = cljs.core.nth.call(null,vec__33805,(1),null);
var vec__33808 = p__33804;
var p = cljs.core.nth.call(null,vec__33808,(0),null);
var map__33811 = cljs.core.nth.call(null,vec__33808,(1),null);
var map__33811__$1 = (((((!((map__33811 == null))))?(((((map__33811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33811):map__33811);
var data = map__33811__$1;
var name = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33808,(2),null);
var map__33813 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33813__$1 = (((((!((map__33813 == null))))?(((((map__33813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33813):map__33813);
var route = map__33813__$1;
var path_params = cljs.core.get.call(null,map__33813__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__33813,map__33813__$1,route,path_params,vec__33805,pl,nl,vec__33808,p,map__33811,map__33811__$1,data,name,result,names){
return (function (p1__33797_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__33797_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__33797_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__33797_SHARP_,path_params);
}
});})(map__33813,map__33813__$1,route,path_params,vec__33805,pl,nl,vec__33808,p,map__33811,map__33811__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,route),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33800,(0),null);
var nl = cljs.core.nth.call(null,vec__33800,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33815 = (function (compiled_routes,opts,names,vec__33800,pl,nl,lookup,routes,meta33816){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33800 = vec__33800;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33816 = meta33816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_33817,meta33816__$1){
var self__ = this;
var _33817__$1 = this;
return (new reitit.core.t_reitit$core33815(self__.compiled_routes,self__.opts,self__.names,self__.vec__33800,self__.pl,self__.nl,self__.lookup,self__.routes,meta33816__$1));
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_33817){
var self__ = this;
var _33817__$1 = this;
return self__.meta33816;
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,names,vec__33800,pl,nl,lookup,routes){
return (function (___$2,route){
var temp__5455__auto__ = new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(route).call(null,path);
if(cljs.core.truth_(temp__5455__auto__)){
var path_params = temp__5455__auto__;
return cljs.core.reduced.call(null,reitit.core.__GT_Match.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(route),reitit.impl.url_decode_coll.call(null,path_params),path));
} else {
return null;
}
});})(___$1,names,vec__33800,pl,nl,lookup,routes))
,null,self__.pl);
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.getBasis = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33800","vec__33800",552845516,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33816","meta33816",447592747,null)], null);
});})(names,vec__33800,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33815.cljs$lang$type = true;

reitit.core.t_reitit$core33815.cljs$lang$ctorStr = "reitit.core/t_reitit$core33815";

reitit.core.t_reitit$core33815.cljs$lang$ctorPrWriter = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33815");
});})(names,vec__33800,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33815.
 */
reitit.core.__GT_t_reitit$core33815 = ((function (names,vec__33800,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33815(compiled_routes__$1,opts__$1,names__$1,vec__33800__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33816){
return (new reitit.core.t_reitit$core33815(compiled_routes__$1,opts__$1,names__$1,vec__33800__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33816));
});})(names,vec__33800,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33815(compiled_routes,opts,names,vec__33800,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__33821 = arguments.length;
switch (G__33821) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5457__auto___33839 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5457__auto___33839){
var wilds_33840 = temp__5457__auto___33839;
throw cljs.core.ex_info.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_33840)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_33840,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33822 = cljs.core.reduce.call(null,((function (names){
return (function (p__33825,p__33826){
var vec__33827 = p__33825;
var pl = cljs.core.nth.call(null,vec__33827,(0),null);
var nl = cljs.core.nth.call(null,vec__33827,(1),null);
var vec__33830 = p__33826;
var p = cljs.core.nth.call(null,vec__33830,(0),null);
var map__33833 = cljs.core.nth.call(null,vec__33830,(1),null);
var map__33833__$1 = (((((!((map__33833 == null))))?(((((map__33833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33833):map__33833);
var data = map__33833__$1;
var name = cljs.core.get.call(null,map__33833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33830,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,((function (vec__33827,pl,nl,vec__33830,p,map__33833,map__33833__$1,data,name,result,names){
return (function (p1__33819_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__33819_SHARP_,p);
});})(vec__33827,pl,nl,vec__33830,p,map__33833,map__33833__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33822,(0),null);
var nl = cljs.core.nth.call(null,vec__33822,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33835 = (function (compiled_routes,opts,names,vec__33822,pl,nl,data,lookup,routes,meta33836){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33822 = vec__33822;
this.pl = pl;
this.nl = nl;
this.data = data;
this.lookup = lookup;
this.routes = routes;
this.meta33836 = meta33836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_33837,meta33836__$1){
var self__ = this;
var _33837__$1 = this;
return (new reitit.core.t_reitit$core33835(self__.compiled_routes,self__.opts,self__.names,self__.vec__33822,self__.pl,self__.nl,self__.data,self__.lookup,self__.routes,meta33836__$1));
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_33837){
var self__ = this;
var _33837__$1 = this;
return self__.meta33836;
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.getBasis = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33822","vec__33822",-31336127,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33836","meta33836",-952715570,null)], null);
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33835.cljs$lang$type = true;

reitit.core.t_reitit$core33835.cljs$lang$ctorStr = "reitit.core/t_reitit$core33835";

reitit.core.t_reitit$core33835.cljs$lang$ctorPrWriter = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33835");
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33835.
 */
reitit.core.__GT_t_reitit$core33835 = ((function (names,vec__33822,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33835(compiled_routes__$1,opts__$1,names__$1,vec__33822__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta33836){
return (new reitit.core.t_reitit$core33835(compiled_routes__$1,opts__$1,names__$1,vec__33822__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta33836));
});})(names,vec__33822,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33835(compiled_routes,opts,names,vec__33822,pl,nl,data,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__33843 = arguments.length;
switch (G__33843) {
case 1:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.segment_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33844 = cljs.core.reduce.call(null,((function (names){
return (function (p__33847,p__33848){
var vec__33849 = p__33847;
var pl = cljs.core.nth.call(null,vec__33849,(0),null);
var nl = cljs.core.nth.call(null,vec__33849,(1),null);
var vec__33852 = p__33848;
var p = cljs.core.nth.call(null,vec__33852,(0),null);
var map__33855 = cljs.core.nth.call(null,vec__33852,(1),null);
var map__33855__$1 = (((((!((map__33855 == null))))?(((((map__33855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33855):map__33855);
var data = map__33855__$1;
var name = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33852,(2),null);
var map__33857 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33857__$1 = (((((!((map__33857 == null))))?(((((map__33857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33857):map__33857);
var route = map__33857__$1;
var path_params = cljs.core.get.call(null,map__33857__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__33857,map__33857__$1,route,path_params,vec__33849,pl,nl,vec__33852,p,map__33855,map__33855__$1,data,name,result,names){
return (function (p1__33841_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__33841_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__33841_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__33841_SHARP_,path_params);
}
});})(map__33857,map__33857__$1,route,path_params,vec__33849,pl,nl,vec__33852,p,map__33855,map__33855__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33844,(0),null);
var nl = cljs.core.nth.call(null,vec__33844,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33859 = (function (compiled_routes,opts,names,vec__33844,pl,nl,lookup,routes,meta33860){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33844 = vec__33844;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33860 = meta33860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_33861,meta33860__$1){
var self__ = this;
var _33861__$1 = this;
return (new reitit.core.t_reitit$core33859(self__.compiled_routes,self__.opts,self__.names,self__.vec__33844,self__.pl,self__.nl,self__.lookup,self__.routes,meta33860__$1));
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_33861){
var self__ = this;
var _33861__$1 = this;
return self__.meta33860;
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"segment-router","segment-router",223699433);
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.segment.lookup.call(null,self__.pl,path);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.url_decode_coll.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match))),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.getBasis = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33844","vec__33844",-1141560122,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33860","meta33860",689536638,null)], null);
});})(names,vec__33844,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33859.cljs$lang$type = true;

reitit.core.t_reitit$core33859.cljs$lang$ctorStr = "reitit.core/t_reitit$core33859";

reitit.core.t_reitit$core33859.cljs$lang$ctorPrWriter = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33859");
});})(names,vec__33844,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33859.
 */
reitit.core.__GT_t_reitit$core33859 = ((function (names,vec__33844,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33859(compiled_routes__$1,opts__$1,names__$1,vec__33844__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33860){
return (new reitit.core.t_reitit$core33859(compiled_routes__$1,opts__$1,names__$1,vec__33844__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33860));
});})(names,vec__33844,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33859(compiled_routes,opts,names,vec__33844,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.segment_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__33864 = arguments.length;
switch (G__33864) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not_EQ_.call(null,cljs.core.count.call(null,compiled_routes),(1));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
}
})())){
throw cljs.core.ex_info.call(null,[":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__33865 = reitit.core.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__33865,(0),null);
var names = vec__33865;
var vec__33868 = compiled_routes;
var vec__33871 = cljs.core.nth.call(null,vec__33868,(0),null);
var p = cljs.core.nth.call(null,vec__33871,(0),null);
var data = cljs.core.nth.call(null,vec__33871,(1),null);
var result = cljs.core.nth.call(null,vec__33871,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33874 = (function (vec__33865,p,names,match,data,compiled_routes,routes,n,vec__33871,result,opts,vec__33868,meta33875){
this.vec__33865 = vec__33865;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.vec__33871 = vec__33871;
this.result = result;
this.opts = opts;
this.vec__33868 = vec__33868;
this.meta33875 = meta33875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_33876,meta33875__$1){
var self__ = this;
var _33876__$1 = this;
return (new reitit.core.t_reitit$core33874(self__.vec__33865,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.vec__33871,self__.result,self__.opts,self__.vec__33868,meta33875__$1));
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_33876){
var self__ = this;
var _33876__$1 = this;
return self__.meta33875;
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$options$arity$1 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.getBasis = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__33865","vec__33865",-2055978492,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__33871","vec__33871",1464855160,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__33868","vec__33868",22936254,null),new cljs.core.Symbol(null,"meta33875","meta33875",268198956,null)], null);
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33874.cljs$lang$type = true;

reitit.core.t_reitit$core33874.cljs$lang$ctorStr = "reitit.core/t_reitit$core33874";

reitit.core.t_reitit$core33874.cljs$lang$ctorPrWriter = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33874");
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33874.
 */
reitit.core.__GT_t_reitit$core33874 = ((function (vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core33874(vec__33865__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__33871__$1,result__$1,opts__$1,vec__33868__$1,meta33875){
return (new reitit.core.t_reitit$core33874(vec__33865__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__33871__$1,result__$1,opts__$1,vec__33868__$1,meta33875));
});})(vec__33865,n,names,vec__33868,vec__33871,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core33874(vec__33865,p__$1,names,match,data,compiled_routes,routes,n,vec__33871,result,opts,vec__33868,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__33879 = arguments.length;
switch (G__33879) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__33880 = cljs.core.group_by.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var map__33880__$1 = (((((!((map__33880 == null))))?(((((map__33880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33880):map__33880);
var wild = cljs.core.get.call(null,map__33880__$1,true);
var lookup = cljs.core.get.call(null,map__33880__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33882 = (function (names,compiled_routes,routes,map__33880,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta33883){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.map__33880 = map__33880;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta33883 = meta33883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33884,meta33883__$1){
var self__ = this;
var _33884__$1 = this;
return (new reitit.core.t_reitit$core33882(self__.names,self__.compiled_routes,self__.routes,self__.map__33880,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta33883__$1));
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33884){
var self__ = this;
var _33884__$1 = this;
return self__.meta33883;
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$routes$arity$1 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$options$arity$1 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.getBasis = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"map__33880","map__33880",1585105386,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta33883","meta33883",-1733109446,null)], null);
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33882.cljs$lang$type = true;

reitit.core.t_reitit$core33882.cljs$lang$ctorStr = "reitit.core/t_reitit$core33882";

reitit.core.t_reitit$core33882.cljs$lang$ctorPrWriter = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33882");
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33882.
 */
reitit.core.__GT_t_reitit$core33882 = ((function (map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core33882(names__$1,compiled_routes__$1,routes__$1,map__33880__$2,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta33883){
return (new reitit.core.t_reitit$core33882(names__$1,compiled_routes__$1,routes__$1,map__33880__$2,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta33883));
});})(map__33880,map__33880__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core33882(names,compiled_routes,routes,map__33880__$1,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description |
 *   | -------------|-------------|
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes (default `reitit.core/throw-on-conflicts!`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__33887 = arguments.length;
switch (G__33887) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__33888 = cljs.core.merge.call(null,reitit.core.default_router_options,opts);
var map__33888__$1 = (((((!((map__33888 == null))))?(((((map__33888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33888):map__33888);
var opts__$1 = map__33888__$1;
var router = cljs.core.get.call(null,map__33888__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var routes = reitit.core.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes.call(null,routes);
var name_conflicting = reitit.core.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.core.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.linear_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5457__auto___33891 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___33891)){
var validate_33892 = temp__5457__auto___33891;
validate_33892.call(null,compiled_routes,opts__$1);
} else {
}

var temp__5457__auto___33893 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___33893)){
var conflicts_33894 = temp__5457__auto___33893;
if(cljs.core.truth_(path_conflicting)){
conflicts_33894.call(null,path_conflicting);
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.core.throw_on_conflicts_BANG_.call(null,reitit.core.name_conflicts_str,name_conflicting);
} else {
}

return router__$1.call(null,compiled_routes,opts__$1);
});

reitit.core.router.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1545897041917
