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
reitit.core.walk = (function reitit$core$walk(raw_routes,p__38272){
var map__38273 = p__38272;
var map__38273__$1 = (((((!((map__38273 == null))))?(((((map__38273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38273):map__38273);
var opts = map__38273__$1;
var path = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand);
var walk_many = ((function (map__38273,map__38273__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,((function (map__38273,map__38273__$1,opts,path,data,routes,expand){
return (function (p1__38270_SHARP_,p2__38271_SHARP_){
return cljs.core.into.call(null,p1__38270_SHARP_,walk_one.call(null,p,m,p2__38271_SHARP_));
});})(map__38273,map__38273__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__38273,map__38273__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__38273,map__38273__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__38284 = routes__$1;
var seq__38285 = cljs.core.seq.call(null,vec__38284);
var first__38286 = cljs.core.first.call(null,seq__38285);
var seq__38285__$1 = cljs.core.next.call(null,seq__38285);
var path__$1 = first__38286;
var vec__38287 = seq__38285__$1;
var maybe_arg = cljs.core.nth.call(null,vec__38287,(0),null);
var args = vec__38287;
var vec__38290 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__38290,(0),null);
var childs = cljs.core.nth.call(null,vec__38290,(1),null);
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
});})(map__38273,map__38273__$1,opts,path,data,routes,expand))
;
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p1__38293_SHARP_){
return cljs.core.update.call(null,p1__38293_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.call(null,(function (acc,p__38294){
var vec__38295 = p__38294;
var k = cljs.core.nth.call(null,vec__38295,(0),null);
var v = cljs.core.nth.call(null,vec__38295,(1),null);
return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__38299){
var map__38300 = p__38299;
var map__38300__$1 = (((((!((map__38300 == null))))?(((((map__38300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38300):map__38300);
var opts = map__38300__$1;
var coerce = cljs.core.get.call(null,map__38300__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__38302 = reitit.core.map_data.call(null,reitit.core.merge_data,reitit.core.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,((function (G__38302,map__38300,map__38300__$1,opts,coerce){
return (function (p1__38298_SHARP_){
return coerce.call(null,p1__38298_SHARP_,opts);
});})(G__38302,map__38300,map__38300__$1,opts,coerce))
),G__38302);
} else {
return G__38302;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
var G__38304 = (function (){var G__38308 = routes;
var vec__38309 = G__38308;
var seq__38310 = cljs.core.seq.call(null,vec__38309);
var first__38311 = cljs.core.first.call(null,seq__38310);
var seq__38310__$1 = cljs.core.next.call(null,seq__38310);
var r = first__38311;
var rest = seq__38310__$1;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var G__38308__$1 = G__38308;
var acc__$1 = acc;
while(true){
var vec__38312 = G__38308__$1;
var seq__38313 = cljs.core.seq.call(null,vec__38312);
var first__38314 = cljs.core.first.call(null,seq__38313);
var seq__38313__$1 = cljs.core.next.call(null,seq__38313);
var r__$1 = first__38314;
var rest__$1 = seq__38313__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq.call(null,rest__$1)){
var conflicting = cljs.core.set.call(null,cljs.core.keep.call(null,((function (G__38308__$1,acc__$1,vec__38312,seq__38313,first__38314,seq__38313__$1,r__$1,rest__$1,acc__$2,G__38308,vec__38309,seq__38310,first__38311,seq__38310__$1,r,rest,acc){
return (function (p1__38303_SHARP_){
if(reitit.impl.conflicting_routes_QMARK_.call(null,r__$1,p1__38303_SHARP_)){
return p1__38303_SHARP_;
} else {
return null;
}
});})(G__38308__$1,acc__$1,vec__38312,seq__38313,first__38314,seq__38313__$1,r__$1,rest__$1,acc__$2,G__38308,vec__38309,seq__38310,first__38311,seq__38310__$1,r,rest,acc))
,rest__$1));
var G__38315 = rest__$1;
var G__38316 = cljs.core.update.call(null,acc__$2,r__$1,cljs.core.fnil.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),cljs.core.PersistentHashSet.EMPTY),conflicting);
G__38308__$1 = G__38315;
acc__$1 = G__38316;
continue;
} else {
return acc__$2;
}
break;
}
})();
var G__38304__$1 = (((G__38304 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),G__38304));
var G__38304__$2 = (((G__38304__$1 == null))?null:cljs.core.seq.call(null,G__38304__$1));
if((G__38304__$2 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__38304__$2);
}
});
reitit.core.path_conflicts_str = (function reitit$core$path_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.call(null,(function (p__38317){
var vec__38318 = p__38317;
var vec__38321 = cljs.core.nth.call(null,vec__38318,(0),null);
var path = cljs.core.nth.call(null,vec__38321,(0),null);
var vals = cljs.core.nth.call(null,vec__38318,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__38324 = routes;
var G__38324__$1 = (((G__38324 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__38324));
var G__38324__$2 = (((G__38324__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__38324__$1));
var G__38324__$3 = (((G__38324__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__38324__$2));
var G__38324__$4 = (((G__38324__$3 == null))?null:cljs.core.seq.call(null,G__38324__$3));
var G__38324__$5 = (((G__38324__$4 == null))?null:cljs.core.map.call(null,((function (G__38324,G__38324__$1,G__38324__$2,G__38324__$3,G__38324__$4){
return (function (p__38325){
var vec__38326 = p__38325;
var k = cljs.core.nth.call(null,vec__38326,(0),null);
var v = cljs.core.nth.call(null,vec__38326,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
});})(G__38324,G__38324__$1,G__38324__$2,G__38324__$3,G__38324__$4))
,G__38324__$4));
if((G__38324__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__38324__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.call(null,(function (p__38329){
var vec__38330 = p__38329;
var name = cljs.core.nth.call(null,vec__38330,(0),null);
var vals = cljs.core.nth.call(null,vec__38330,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.call(null,f.call(null,conflicts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__38333,_){
var vec__38334 = p__38333;
var ___$1 = cljs.core.nth.call(null,vec__38334,(0),null);
var map__38337 = cljs.core.nth.call(null,vec__38334,(1),null);
var map__38337__$1 = (((((!((map__38337 == null))))?(((((map__38337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38337):map__38337);
var name = cljs.core.get.call(null,map__38337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__38339_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__38339_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__38340,p__38341){
var vec__38342 = p__38340;
var p = cljs.core.nth.call(null,vec__38342,(0),null);
var m = cljs.core.nth.call(null,vec__38342,(1),null);
var route = vec__38342;
var map__38345 = p__38341;
var map__38345__$1 = (((((!((map__38345 == null))))?(((((map__38345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38345):map__38345);
var opts = map__38345__$1;
var compile = cljs.core.get.call(null,map__38345__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__38347_SHARP_){
return reitit.core.compile_route.call(null,p1__38347_SHARP_,opts);
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
var G__38349 = arguments.length;
switch (G__38349) {
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

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k38353,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__38357 = k38353;
var G__38357__$1 = (((G__38357 instanceof cljs.core.Keyword))?G__38357.fqn:null);
switch (G__38357__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k38353,else__4304__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__38358){
var vec__38359 = p__38358;
var k__4324__auto__ = cljs.core.nth.call(null,vec__38359,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__38359,(1),null);
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

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38352){
var self__ = this;
var G__38352__$1 = this;
return (new cljs.core.RecordIter((0),G__38352__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38354,other38355){
var self__ = this;
var this38354__$1 = this;
return (((!((other38355 == null)))) && ((this38354__$1.constructor === other38355.constructor)) && (cljs.core._EQ_.call(null,this38354__$1.template,other38355.template)) && (cljs.core._EQ_.call(null,this38354__$1.data,other38355.data)) && (cljs.core._EQ_.call(null,this38354__$1.result,other38355.result)) && (cljs.core._EQ_.call(null,this38354__$1.path_params,other38355.path_params)) && (cljs.core._EQ_.call(null,this38354__$1.path,other38355.path)) && (cljs.core._EQ_.call(null,this38354__$1.__extmap,other38355.__extmap)));
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

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__38352){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__38362 = cljs.core.keyword_identical_QMARK_;
var expr__38363 = k__4309__auto__;
if(cljs.core.truth_(pred__38362.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__38363))){
return (new reitit.core.Match(G__38352,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38362.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__38363))){
return (new reitit.core.Match(self__.template,G__38352,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38362.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__38363))){
return (new reitit.core.Match(self__.template,self__.data,G__38352,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38362.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__38363))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__38352,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38362.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__38363))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__38352,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__38352),null));
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

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__38352){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__38352,self__.__extmap,self__.__hash));
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
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__38356){
var extmap__4340__auto__ = (function (){var G__38365 = cljs.core.dissoc.call(null,G__38356,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__38356)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__38365);
} else {
return G__38365;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__38356),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__38356),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__38356),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__38356),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__38356),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
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

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k38368,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__38372 = k38368;
var G__38372__$1 = (((G__38372 instanceof cljs.core.Keyword))?G__38372.fqn:null);
switch (G__38372__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k38368,else__4304__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__38373){
var vec__38374 = p__38373;
var k__4324__auto__ = cljs.core.nth.call(null,vec__38374,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__38374,(1),null);
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

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38367){
var self__ = this;
var G__38367__$1 = this;
return (new cljs.core.RecordIter((0),G__38367__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38369,other38370){
var self__ = this;
var this38369__$1 = this;
return (((!((other38370 == null)))) && ((this38369__$1.constructor === other38370.constructor)) && (cljs.core._EQ_.call(null,this38369__$1.template,other38370.template)) && (cljs.core._EQ_.call(null,this38369__$1.data,other38370.data)) && (cljs.core._EQ_.call(null,this38369__$1.result,other38370.result)) && (cljs.core._EQ_.call(null,this38369__$1.path_params,other38370.path_params)) && (cljs.core._EQ_.call(null,this38369__$1.required,other38370.required)) && (cljs.core._EQ_.call(null,this38369__$1.__extmap,other38370.__extmap)));
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

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__38367){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__38377 = cljs.core.keyword_identical_QMARK_;
var expr__38378 = k__4309__auto__;
if(cljs.core.truth_(pred__38377.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__38378))){
return (new reitit.core.PartialMatch(G__38367,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38377.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__38378))){
return (new reitit.core.PartialMatch(self__.template,G__38367,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38377.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__38378))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__38367,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38377.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__38378))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__38367,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38377.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__38378))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__38367,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__38367),null));
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

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__38367){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__38367,self__.__extmap,self__.__hash));
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
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__38371){
var extmap__4340__auto__ = (function (){var G__38380 = cljs.core.dissoc.call(null,G__38371,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__38371)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__38380);
} else {
return G__38380;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__38371),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__38371),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__38371),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__38371),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__38371),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__38383 = arguments.length;
switch (G__38383) {
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
var G__38386 = arguments.length;
switch (G__38386) {
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
var G__38387 = match;
var G__38387__$1 = (((G__38387 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__38387));
if((G__38387__$1 == null)){
return null;
} else {
var G__38388 = G__38387__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38388),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string.call(null,query_params))].join('');
} else {
return G__38388;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),reitit.core.name_lookup,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__38390,_){
var vec__38391 = p__38390;
var ___$1 = cljs.core.nth.call(null,vec__38391,(0),null);
var map__38394 = cljs.core.nth.call(null,vec__38391,(1),null);
var map__38394__$1 = (((((!((map__38394 == null))))?(((((map__38394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38394):map__38394);
var handler = cljs.core.get.call(null,map__38394__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),cljs.core.partial.call(null,reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__38398 = arguments.length;
switch (G__38398) {
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
var vec__38399 = cljs.core.reduce.call(null,((function (names){
return (function (p__38402,p__38403){
var vec__38404 = p__38402;
var pl = cljs.core.nth.call(null,vec__38404,(0),null);
var nl = cljs.core.nth.call(null,vec__38404,(1),null);
var vec__38407 = p__38403;
var p = cljs.core.nth.call(null,vec__38407,(0),null);
var map__38410 = cljs.core.nth.call(null,vec__38407,(1),null);
var map__38410__$1 = (((((!((map__38410 == null))))?(((((map__38410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38410):map__38410);
var data = map__38410__$1;
var name = cljs.core.get.call(null,map__38410__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__38407,(2),null);
var map__38412 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__38412__$1 = (((((!((map__38412 == null))))?(((((map__38412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38412):map__38412);
var route = map__38412__$1;
var path_params = cljs.core.get.call(null,map__38412__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__38412,map__38412__$1,route,path_params,vec__38404,pl,nl,vec__38407,p,map__38410,map__38410__$1,data,name,result,names){
return (function (p1__38396_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__38396_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__38396_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__38396_SHARP_,path_params);
}
});})(map__38412,map__38412__$1,route,path_params,vec__38404,pl,nl,vec__38407,p,map__38410,map__38410__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,route),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__38399,(0),null);
var nl = cljs.core.nth.call(null,vec__38399,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core38414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core38414 = (function (compiled_routes,opts,names,vec__38399,pl,nl,lookup,routes,meta38415){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__38399 = vec__38399;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta38415 = meta38415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core38414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_38416,meta38415__$1){
var self__ = this;
var _38416__$1 = this;
return (new reitit.core.t_reitit$core38414(self__.compiled_routes,self__.opts,self__.names,self__.vec__38399,self__.pl,self__.nl,self__.lookup,self__.routes,meta38415__$1));
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_38416){
var self__ = this;
var _38416__$1 = this;
return self__.meta38415;
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,names,vec__38399,pl,nl,lookup,routes){
return (function (___$2,route){
var temp__5455__auto__ = new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(route).call(null,path);
if(cljs.core.truth_(temp__5455__auto__)){
var path_params = temp__5455__auto__;
return cljs.core.reduced.call(null,reitit.core.__GT_Match.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(route),reitit.impl.url_decode_coll.call(null,path_params),path));
} else {
return null;
}
});})(___$1,names,vec__38399,pl,nl,lookup,routes))
,null,self__.pl);
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__38399,pl,nl,lookup,routes){
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
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__38399,pl,nl,lookup,routes){
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
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.getBasis = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__38399","vec__38399",1926611235,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta38415","meta38415",1024437983,null)], null);
});})(names,vec__38399,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38414.cljs$lang$type = true;

reitit.core.t_reitit$core38414.cljs$lang$ctorStr = "reitit.core/t_reitit$core38414";

reitit.core.t_reitit$core38414.cljs$lang$ctorPrWriter = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core38414");
});})(names,vec__38399,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core38414.
 */
reitit.core.__GT_t_reitit$core38414 = ((function (names,vec__38399,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core38414(compiled_routes__$1,opts__$1,names__$1,vec__38399__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta38415){
return (new reitit.core.t_reitit$core38414(compiled_routes__$1,opts__$1,names__$1,vec__38399__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta38415));
});})(names,vec__38399,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core38414(compiled_routes,opts,names,vec__38399,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__38420 = arguments.length;
switch (G__38420) {
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
var temp__5457__auto___38438 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5457__auto___38438){
var wilds_38439 = temp__5457__auto___38438;
throw cljs.core.ex_info.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_38439)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_38439,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__38421 = cljs.core.reduce.call(null,((function (names){
return (function (p__38424,p__38425){
var vec__38426 = p__38424;
var pl = cljs.core.nth.call(null,vec__38426,(0),null);
var nl = cljs.core.nth.call(null,vec__38426,(1),null);
var vec__38429 = p__38425;
var p = cljs.core.nth.call(null,vec__38429,(0),null);
var map__38432 = cljs.core.nth.call(null,vec__38429,(1),null);
var map__38432__$1 = (((((!((map__38432 == null))))?(((((map__38432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38432):map__38432);
var data = map__38432__$1;
var name = cljs.core.get.call(null,map__38432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__38429,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,((function (vec__38426,pl,nl,vec__38429,p,map__38432,map__38432__$1,data,name,result,names){
return (function (p1__38418_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__38418_SHARP_,p);
});})(vec__38426,pl,nl,vec__38429,p,map__38432,map__38432__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__38421,(0),null);
var nl = cljs.core.nth.call(null,vec__38421,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core38434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core38434 = (function (compiled_routes,opts,names,vec__38421,pl,nl,data,lookup,routes,meta38435){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__38421 = vec__38421;
this.pl = pl;
this.nl = nl;
this.data = data;
this.lookup = lookup;
this.routes = routes;
this.meta38435 = meta38435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core38434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_38436,meta38435__$1){
var self__ = this;
var _38436__$1 = this;
return (new reitit.core.t_reitit$core38434(self__.compiled_routes,self__.opts,self__.names,self__.vec__38421,self__.pl,self__.nl,self__.data,self__.lookup,self__.routes,meta38435__$1));
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_38436){
var self__ = this;
var _38436__$1 = this;
return self__.meta38435;
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
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
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
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
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.getBasis = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__38421","vec__38421",-975293520,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta38435","meta38435",1748209632,null)], null);
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core38434.cljs$lang$type = true;

reitit.core.t_reitit$core38434.cljs$lang$ctorStr = "reitit.core/t_reitit$core38434";

reitit.core.t_reitit$core38434.cljs$lang$ctorPrWriter = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core38434");
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core38434.
 */
reitit.core.__GT_t_reitit$core38434 = ((function (names,vec__38421,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core38434(compiled_routes__$1,opts__$1,names__$1,vec__38421__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta38435){
return (new reitit.core.t_reitit$core38434(compiled_routes__$1,opts__$1,names__$1,vec__38421__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta38435));
});})(names,vec__38421,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core38434(compiled_routes,opts,names,vec__38421,pl,nl,data,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__38442 = arguments.length;
switch (G__38442) {
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
var vec__38443 = cljs.core.reduce.call(null,((function (names){
return (function (p__38446,p__38447){
var vec__38448 = p__38446;
var pl = cljs.core.nth.call(null,vec__38448,(0),null);
var nl = cljs.core.nth.call(null,vec__38448,(1),null);
var vec__38451 = p__38447;
var p = cljs.core.nth.call(null,vec__38451,(0),null);
var map__38454 = cljs.core.nth.call(null,vec__38451,(1),null);
var map__38454__$1 = (((((!((map__38454 == null))))?(((((map__38454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38454):map__38454);
var data = map__38454__$1;
var name = cljs.core.get.call(null,map__38454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__38451,(2),null);
var map__38456 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__38456__$1 = (((((!((map__38456 == null))))?(((((map__38456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38456):map__38456);
var route = map__38456__$1;
var path_params = cljs.core.get.call(null,map__38456__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__38456,map__38456__$1,route,path_params,vec__38448,pl,nl,vec__38451,p,map__38454,map__38454__$1,data,name,result,names){
return (function (p1__38440_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__38440_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__38440_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__38440_SHARP_,path_params);
}
});})(map__38456,map__38456__$1,route,path_params,vec__38448,pl,nl,vec__38451,p,map__38454,map__38454__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__38443,(0),null);
var nl = cljs.core.nth.call(null,vec__38443,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core38458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core38458 = (function (compiled_routes,opts,names,vec__38443,pl,nl,lookup,routes,meta38459){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__38443 = vec__38443;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta38459 = meta38459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core38458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (_38460,meta38459__$1){
var self__ = this;
var _38460__$1 = this;
return (new reitit.core.t_reitit$core38458(self__.compiled_routes,self__.opts,self__.names,self__.vec__38443,self__.pl,self__.nl,self__.lookup,self__.routes,meta38459__$1));
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (_38460){
var self__ = this;
var _38460__$1 = this;
return self__.meta38459;
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"segment-router","segment-router",223699433);
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__38443,pl,nl,lookup,routes){
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
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__38443,pl,nl,lookup,routes){
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
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__38443,pl,nl,lookup,routes){
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
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.getBasis = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__38443","vec__38443",198257153,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta38459","meta38459",1860535274,null)], null);
});})(names,vec__38443,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core38458.cljs$lang$type = true;

reitit.core.t_reitit$core38458.cljs$lang$ctorStr = "reitit.core/t_reitit$core38458";

reitit.core.t_reitit$core38458.cljs$lang$ctorPrWriter = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core38458");
});})(names,vec__38443,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core38458.
 */
reitit.core.__GT_t_reitit$core38458 = ((function (names,vec__38443,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core38458(compiled_routes__$1,opts__$1,names__$1,vec__38443__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta38459){
return (new reitit.core.t_reitit$core38458(compiled_routes__$1,opts__$1,names__$1,vec__38443__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta38459));
});})(names,vec__38443,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core38458(compiled_routes,opts,names,vec__38443,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.segment_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__38463 = arguments.length;
switch (G__38463) {
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

var vec__38464 = reitit.core.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__38464,(0),null);
var names = vec__38464;
var vec__38467 = compiled_routes;
var vec__38470 = cljs.core.nth.call(null,vec__38467,(0),null);
var p = cljs.core.nth.call(null,vec__38470,(0),null);
var data = cljs.core.nth.call(null,vec__38470,(1),null);
var result = cljs.core.nth.call(null,vec__38470,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core38473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core38473 = (function (vec__38467,p,names,match,data,compiled_routes,routes,vec__38464,n,vec__38470,result,opts,meta38474){
this.vec__38467 = vec__38467;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__38464 = vec__38464;
this.n = n;
this.vec__38470 = vec__38470;
this.result = result;
this.opts = opts;
this.meta38474 = meta38474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core38473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_38475,meta38474__$1){
var self__ = this;
var _38475__$1 = this;
return (new reitit.core.t_reitit$core38473(self__.vec__38467,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__38464,self__.n,self__.vec__38470,self__.result,self__.opts,meta38474__$1));
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_38475){
var self__ = this;
var _38475__$1 = this;
return self__.meta38474;
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$options$arity$1 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.getBasis = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__38467","vec__38467",-1895060253,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__38464","vec__38464",-1347372563,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__38470","vec__38470",-1290921136,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta38474","meta38474",1520180965,null)], null);
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core38473.cljs$lang$type = true;

reitit.core.t_reitit$core38473.cljs$lang$ctorStr = "reitit.core/t_reitit$core38473";

reitit.core.t_reitit$core38473.cljs$lang$ctorPrWriter = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core38473");
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core38473.
 */
reitit.core.__GT_t_reitit$core38473 = ((function (vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core38473(vec__38467__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__38464__$1,n__$1,vec__38470__$1,result__$1,opts__$1,meta38474){
return (new reitit.core.t_reitit$core38473(vec__38467__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__38464__$1,n__$1,vec__38470__$1,result__$1,opts__$1,meta38474));
});})(vec__38464,n,names,vec__38467,vec__38470,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core38473(vec__38467,p__$1,names,match,data,compiled_routes,routes,vec__38464,n,vec__38470,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__38478 = arguments.length;
switch (G__38478) {
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
var map__38479 = cljs.core.group_by.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var map__38479__$1 = (((((!((map__38479 == null))))?(((((map__38479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38479):map__38479);
var wild = cljs.core.get.call(null,map__38479__$1,true);
var lookup = cljs.core.get.call(null,map__38479__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core38481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core38481 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,map__38479,meta38482){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.map__38479 = map__38479;
this.meta38482 = meta38482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core38481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_38483,meta38482__$1){
var self__ = this;
var _38483__$1 = this;
return (new reitit.core.t_reitit$core38481(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,self__.map__38479,meta38482__$1));
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_38483){
var self__ = this;
var _38483__$1 = this;
return self__.meta38482;
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$routes$arity$1 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$options$arity$1 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.getBasis = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"map__38479","map__38479",-1824247201,null),new cljs.core.Symbol(null,"meta38482","meta38482",88667321,null)], null);
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core38481.cljs$lang$type = true;

reitit.core.t_reitit$core38481.cljs$lang$ctorStr = "reitit.core/t_reitit$core38481";

reitit.core.t_reitit$core38481.cljs$lang$ctorPrWriter = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core38481");
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core38481.
 */
reitit.core.__GT_t_reitit$core38481 = ((function (map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core38481(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,map__38479__$2,meta38482){
return (new reitit.core.t_reitit$core38481(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,map__38479__$2,meta38482));
});})(map__38479,map__38479__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core38481(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,map__38479__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
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
var G__38486 = arguments.length;
switch (G__38486) {
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
var map__38487 = cljs.core.merge.call(null,reitit.core.default_router_options,opts);
var map__38487__$1 = (((((!((map__38487 == null))))?(((((map__38487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38487):map__38487);
var opts__$1 = map__38487__$1;
var router = cljs.core.get.call(null,map__38487__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var routes = reitit.core.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes.call(null,routes);
var name_conflicting = reitit.core.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.core.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.linear_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5457__auto___38490 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___38490)){
var validate_38491 = temp__5457__auto___38490;
validate_38491.call(null,compiled_routes,opts__$1);
} else {
}

var temp__5457__auto___38492 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___38492)){
var conflicts_38493 = temp__5457__auto___38492;
if(cljs.core.truth_(path_conflicting)){
conflicts_38493.call(null,path_conflicting);
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


//# sourceMappingURL=core.js.map?rel=1545903845063
