// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47166_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47166_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47167 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47168 = null;
var count__47169 = (0);
var i__47170 = (0);
while(true){
if((i__47170 < count__47169)){
var n = cljs.core._nth.call(null,chunk__47168,i__47170);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47171 = seq__47167;
var G__47172 = chunk__47168;
var G__47173 = count__47169;
var G__47174 = (i__47170 + (1));
seq__47167 = G__47171;
chunk__47168 = G__47172;
count__47169 = G__47173;
i__47170 = G__47174;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47167);
if(temp__5457__auto__){
var seq__47167__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47167__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47167__$1);
var G__47175 = cljs.core.chunk_rest.call(null,seq__47167__$1);
var G__47176 = c__4461__auto__;
var G__47177 = cljs.core.count.call(null,c__4461__auto__);
var G__47178 = (0);
seq__47167 = G__47175;
chunk__47168 = G__47176;
count__47169 = G__47177;
i__47170 = G__47178;
continue;
} else {
var n = cljs.core.first.call(null,seq__47167__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47179 = cljs.core.next.call(null,seq__47167__$1);
var G__47180 = null;
var G__47181 = (0);
var G__47182 = (0);
seq__47167 = G__47179;
chunk__47168 = G__47180;
count__47169 = G__47181;
i__47170 = G__47182;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__47183){
var vec__47184 = p__47183;
var _ = cljs.core.nth.call(null,vec__47184,(0),null);
var v = cljs.core.nth.call(null,vec__47184,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__47187){
var vec__47188 = p__47187;
var k = cljs.core.nth.call(null,vec__47188,(0),null);
var v = cljs.core.nth.call(null,vec__47188,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47200_47208 = cljs.core.seq.call(null,deps);
var chunk__47201_47209 = null;
var count__47202_47210 = (0);
var i__47203_47211 = (0);
while(true){
if((i__47203_47211 < count__47202_47210)){
var dep_47212 = cljs.core._nth.call(null,chunk__47201_47209,i__47203_47211);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47212;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47212));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47212,(depth + (1)),state);
} else {
}


var G__47213 = seq__47200_47208;
var G__47214 = chunk__47201_47209;
var G__47215 = count__47202_47210;
var G__47216 = (i__47203_47211 + (1));
seq__47200_47208 = G__47213;
chunk__47201_47209 = G__47214;
count__47202_47210 = G__47215;
i__47203_47211 = G__47216;
continue;
} else {
var temp__5457__auto___47217 = cljs.core.seq.call(null,seq__47200_47208);
if(temp__5457__auto___47217){
var seq__47200_47218__$1 = temp__5457__auto___47217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47200_47218__$1)){
var c__4461__auto___47219 = cljs.core.chunk_first.call(null,seq__47200_47218__$1);
var G__47220 = cljs.core.chunk_rest.call(null,seq__47200_47218__$1);
var G__47221 = c__4461__auto___47219;
var G__47222 = cljs.core.count.call(null,c__4461__auto___47219);
var G__47223 = (0);
seq__47200_47208 = G__47220;
chunk__47201_47209 = G__47221;
count__47202_47210 = G__47222;
i__47203_47211 = G__47223;
continue;
} else {
var dep_47224 = cljs.core.first.call(null,seq__47200_47218__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47224;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47224));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47224,(depth + (1)),state);
} else {
}


var G__47225 = cljs.core.next.call(null,seq__47200_47218__$1);
var G__47226 = null;
var G__47227 = (0);
var G__47228 = (0);
seq__47200_47208 = G__47225;
chunk__47201_47209 = G__47226;
count__47202_47210 = G__47227;
i__47203_47211 = G__47228;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47204){
var vec__47205 = p__47204;
var seq__47206 = cljs.core.seq.call(null,vec__47205);
var first__47207 = cljs.core.first.call(null,seq__47206);
var seq__47206__$1 = cljs.core.next.call(null,seq__47206);
var x = first__47207;
var xs = seq__47206__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47205,seq__47206,first__47207,seq__47206__$1,x,xs,get_deps__$1){
return (function (p1__47191_SHARP_){
return clojure.set.difference.call(null,p1__47191_SHARP_,x);
});})(vec__47205,seq__47206,first__47207,seq__47206__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47229 = cljs.core.seq.call(null,provides);
var chunk__47230 = null;
var count__47231 = (0);
var i__47232 = (0);
while(true){
if((i__47232 < count__47231)){
var prov = cljs.core._nth.call(null,chunk__47230,i__47232);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47233_47241 = cljs.core.seq.call(null,requires);
var chunk__47234_47242 = null;
var count__47235_47243 = (0);
var i__47236_47244 = (0);
while(true){
if((i__47236_47244 < count__47235_47243)){
var req_47245 = cljs.core._nth.call(null,chunk__47234_47242,i__47236_47244);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47245,prov);


var G__47246 = seq__47233_47241;
var G__47247 = chunk__47234_47242;
var G__47248 = count__47235_47243;
var G__47249 = (i__47236_47244 + (1));
seq__47233_47241 = G__47246;
chunk__47234_47242 = G__47247;
count__47235_47243 = G__47248;
i__47236_47244 = G__47249;
continue;
} else {
var temp__5457__auto___47250 = cljs.core.seq.call(null,seq__47233_47241);
if(temp__5457__auto___47250){
var seq__47233_47251__$1 = temp__5457__auto___47250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47233_47251__$1)){
var c__4461__auto___47252 = cljs.core.chunk_first.call(null,seq__47233_47251__$1);
var G__47253 = cljs.core.chunk_rest.call(null,seq__47233_47251__$1);
var G__47254 = c__4461__auto___47252;
var G__47255 = cljs.core.count.call(null,c__4461__auto___47252);
var G__47256 = (0);
seq__47233_47241 = G__47253;
chunk__47234_47242 = G__47254;
count__47235_47243 = G__47255;
i__47236_47244 = G__47256;
continue;
} else {
var req_47257 = cljs.core.first.call(null,seq__47233_47251__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47257,prov);


var G__47258 = cljs.core.next.call(null,seq__47233_47251__$1);
var G__47259 = null;
var G__47260 = (0);
var G__47261 = (0);
seq__47233_47241 = G__47258;
chunk__47234_47242 = G__47259;
count__47235_47243 = G__47260;
i__47236_47244 = G__47261;
continue;
}
} else {
}
}
break;
}


var G__47262 = seq__47229;
var G__47263 = chunk__47230;
var G__47264 = count__47231;
var G__47265 = (i__47232 + (1));
seq__47229 = G__47262;
chunk__47230 = G__47263;
count__47231 = G__47264;
i__47232 = G__47265;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47229);
if(temp__5457__auto__){
var seq__47229__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47229__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47229__$1);
var G__47266 = cljs.core.chunk_rest.call(null,seq__47229__$1);
var G__47267 = c__4461__auto__;
var G__47268 = cljs.core.count.call(null,c__4461__auto__);
var G__47269 = (0);
seq__47229 = G__47266;
chunk__47230 = G__47267;
count__47231 = G__47268;
i__47232 = G__47269;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47229__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47237_47270 = cljs.core.seq.call(null,requires);
var chunk__47238_47271 = null;
var count__47239_47272 = (0);
var i__47240_47273 = (0);
while(true){
if((i__47240_47273 < count__47239_47272)){
var req_47274 = cljs.core._nth.call(null,chunk__47238_47271,i__47240_47273);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47274,prov);


var G__47275 = seq__47237_47270;
var G__47276 = chunk__47238_47271;
var G__47277 = count__47239_47272;
var G__47278 = (i__47240_47273 + (1));
seq__47237_47270 = G__47275;
chunk__47238_47271 = G__47276;
count__47239_47272 = G__47277;
i__47240_47273 = G__47278;
continue;
} else {
var temp__5457__auto___47279__$1 = cljs.core.seq.call(null,seq__47237_47270);
if(temp__5457__auto___47279__$1){
var seq__47237_47280__$1 = temp__5457__auto___47279__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47237_47280__$1)){
var c__4461__auto___47281 = cljs.core.chunk_first.call(null,seq__47237_47280__$1);
var G__47282 = cljs.core.chunk_rest.call(null,seq__47237_47280__$1);
var G__47283 = c__4461__auto___47281;
var G__47284 = cljs.core.count.call(null,c__4461__auto___47281);
var G__47285 = (0);
seq__47237_47270 = G__47282;
chunk__47238_47271 = G__47283;
count__47239_47272 = G__47284;
i__47240_47273 = G__47285;
continue;
} else {
var req_47286 = cljs.core.first.call(null,seq__47237_47280__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47286,prov);


var G__47287 = cljs.core.next.call(null,seq__47237_47280__$1);
var G__47288 = null;
var G__47289 = (0);
var G__47290 = (0);
seq__47237_47270 = G__47287;
chunk__47238_47271 = G__47288;
count__47239_47272 = G__47289;
i__47240_47273 = G__47290;
continue;
}
} else {
}
}
break;
}


var G__47291 = cljs.core.next.call(null,seq__47229__$1);
var G__47292 = null;
var G__47293 = (0);
var G__47294 = (0);
seq__47229 = G__47291;
chunk__47230 = G__47292;
count__47231 = G__47293;
i__47232 = G__47294;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47295_47299 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47296_47300 = null;
var count__47297_47301 = (0);
var i__47298_47302 = (0);
while(true){
if((i__47298_47302 < count__47297_47301)){
var ns_47303 = cljs.core._nth.call(null,chunk__47296_47300,i__47298_47302);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47303);


var G__47304 = seq__47295_47299;
var G__47305 = chunk__47296_47300;
var G__47306 = count__47297_47301;
var G__47307 = (i__47298_47302 + (1));
seq__47295_47299 = G__47304;
chunk__47296_47300 = G__47305;
count__47297_47301 = G__47306;
i__47298_47302 = G__47307;
continue;
} else {
var temp__5457__auto___47308 = cljs.core.seq.call(null,seq__47295_47299);
if(temp__5457__auto___47308){
var seq__47295_47309__$1 = temp__5457__auto___47308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47295_47309__$1)){
var c__4461__auto___47310 = cljs.core.chunk_first.call(null,seq__47295_47309__$1);
var G__47311 = cljs.core.chunk_rest.call(null,seq__47295_47309__$1);
var G__47312 = c__4461__auto___47310;
var G__47313 = cljs.core.count.call(null,c__4461__auto___47310);
var G__47314 = (0);
seq__47295_47299 = G__47311;
chunk__47296_47300 = G__47312;
count__47297_47301 = G__47313;
i__47298_47302 = G__47314;
continue;
} else {
var ns_47315 = cljs.core.first.call(null,seq__47295_47309__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47315);


var G__47316 = cljs.core.next.call(null,seq__47295_47309__$1);
var G__47317 = null;
var G__47318 = (0);
var G__47319 = (0);
seq__47295_47299 = G__47316;
chunk__47296_47300 = G__47317;
count__47297_47301 = G__47318;
i__47298_47302 = G__47319;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47320__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47321__i = 0, G__47321__a = new Array(arguments.length -  0);
while (G__47321__i < G__47321__a.length) {G__47321__a[G__47321__i] = arguments[G__47321__i + 0]; ++G__47321__i;}
  args = new cljs.core.IndexedSeq(G__47321__a,0,null);
} 
return G__47320__delegate.call(this,args);};
G__47320.cljs$lang$maxFixedArity = 0;
G__47320.cljs$lang$applyTo = (function (arglist__47322){
var args = cljs.core.seq(arglist__47322);
return G__47320__delegate(args);
});
G__47320.cljs$core$IFn$_invoke$arity$variadic = G__47320__delegate;
return G__47320;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47323_SHARP_,p2__47324_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47323_SHARP_)),p2__47324_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47325_SHARP_,p2__47326_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47325_SHARP_),p2__47326_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47327 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47327.addCallback(((function (G__47327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47327))
);

G__47327.addErrback(((function (G__47327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47327))
);

return G__47327;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47328){if((e47328 instanceof Error)){
var e = e47328;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47328;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47329){if((e47329 instanceof Error)){
var e = e47329;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47329;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47330 = cljs.core._EQ_;
var expr__47331 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47330.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47331))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47330.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47331))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47330.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47331))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47330,expr__47331){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47330,expr__47331))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47333,callback){
var map__47334 = p__47333;
var map__47334__$1 = (((((!((map__47334 == null))))?(((((map__47334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47334):map__47334);
var file_msg = map__47334__$1;
var request_url = cljs.core.get.call(null,map__47334__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47334,map__47334__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47334,map__47334__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__){
return (function (state_47372){
var state_val_47373 = (state_47372[(1)]);
if((state_val_47373 === (7))){
var inst_47368 = (state_47372[(2)]);
var state_47372__$1 = state_47372;
var statearr_47374_47400 = state_47372__$1;
(statearr_47374_47400[(2)] = inst_47368);

(statearr_47374_47400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (1))){
var state_47372__$1 = state_47372;
var statearr_47375_47401 = state_47372__$1;
(statearr_47375_47401[(2)] = null);

(statearr_47375_47401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (4))){
var inst_47338 = (state_47372[(7)]);
var inst_47338__$1 = (state_47372[(2)]);
var state_47372__$1 = (function (){var statearr_47376 = state_47372;
(statearr_47376[(7)] = inst_47338__$1);

return statearr_47376;
})();
if(cljs.core.truth_(inst_47338__$1)){
var statearr_47377_47402 = state_47372__$1;
(statearr_47377_47402[(1)] = (5));

} else {
var statearr_47378_47403 = state_47372__$1;
(statearr_47378_47403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (15))){
var inst_47351 = (state_47372[(8)]);
var inst_47353 = (state_47372[(9)]);
var inst_47355 = inst_47353.call(null,inst_47351);
var state_47372__$1 = state_47372;
var statearr_47379_47404 = state_47372__$1;
(statearr_47379_47404[(2)] = inst_47355);

(statearr_47379_47404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (13))){
var inst_47362 = (state_47372[(2)]);
var state_47372__$1 = state_47372;
var statearr_47380_47405 = state_47372__$1;
(statearr_47380_47405[(2)] = inst_47362);

(statearr_47380_47405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (6))){
var state_47372__$1 = state_47372;
var statearr_47381_47406 = state_47372__$1;
(statearr_47381_47406[(2)] = null);

(statearr_47381_47406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (17))){
var inst_47359 = (state_47372[(2)]);
var state_47372__$1 = state_47372;
var statearr_47382_47407 = state_47372__$1;
(statearr_47382_47407[(2)] = inst_47359);

(statearr_47382_47407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (3))){
var inst_47370 = (state_47372[(2)]);
var state_47372__$1 = state_47372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47372__$1,inst_47370);
} else {
if((state_val_47373 === (12))){
var state_47372__$1 = state_47372;
var statearr_47383_47408 = state_47372__$1;
(statearr_47383_47408[(2)] = null);

(statearr_47383_47408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (2))){
var state_47372__$1 = state_47372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47372__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47373 === (11))){
var inst_47343 = (state_47372[(10)]);
var inst_47349 = figwheel.client.file_reloading.blocking_load.call(null,inst_47343);
var state_47372__$1 = state_47372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47372__$1,(14),inst_47349);
} else {
if((state_val_47373 === (9))){
var inst_47343 = (state_47372[(10)]);
var state_47372__$1 = state_47372;
if(cljs.core.truth_(inst_47343)){
var statearr_47384_47409 = state_47372__$1;
(statearr_47384_47409[(1)] = (11));

} else {
var statearr_47385_47410 = state_47372__$1;
(statearr_47385_47410[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (5))){
var inst_47338 = (state_47372[(7)]);
var inst_47344 = (state_47372[(11)]);
var inst_47343 = cljs.core.nth.call(null,inst_47338,(0),null);
var inst_47344__$1 = cljs.core.nth.call(null,inst_47338,(1),null);
var state_47372__$1 = (function (){var statearr_47386 = state_47372;
(statearr_47386[(10)] = inst_47343);

(statearr_47386[(11)] = inst_47344__$1);

return statearr_47386;
})();
if(cljs.core.truth_(inst_47344__$1)){
var statearr_47387_47411 = state_47372__$1;
(statearr_47387_47411[(1)] = (8));

} else {
var statearr_47388_47412 = state_47372__$1;
(statearr_47388_47412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (14))){
var inst_47353 = (state_47372[(9)]);
var inst_47343 = (state_47372[(10)]);
var inst_47351 = (state_47372[(2)]);
var inst_47352 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47353__$1 = cljs.core.get.call(null,inst_47352,inst_47343);
var state_47372__$1 = (function (){var statearr_47389 = state_47372;
(statearr_47389[(8)] = inst_47351);

(statearr_47389[(9)] = inst_47353__$1);

return statearr_47389;
})();
if(cljs.core.truth_(inst_47353__$1)){
var statearr_47390_47413 = state_47372__$1;
(statearr_47390_47413[(1)] = (15));

} else {
var statearr_47391_47414 = state_47372__$1;
(statearr_47391_47414[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (16))){
var inst_47351 = (state_47372[(8)]);
var inst_47357 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47351);
var state_47372__$1 = state_47372;
var statearr_47392_47415 = state_47372__$1;
(statearr_47392_47415[(2)] = inst_47357);

(statearr_47392_47415[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (10))){
var inst_47364 = (state_47372[(2)]);
var state_47372__$1 = (function (){var statearr_47393 = state_47372;
(statearr_47393[(12)] = inst_47364);

return statearr_47393;
})();
var statearr_47394_47416 = state_47372__$1;
(statearr_47394_47416[(2)] = null);

(statearr_47394_47416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47373 === (8))){
var inst_47344 = (state_47372[(11)]);
var inst_47346 = eval(inst_47344);
var state_47372__$1 = state_47372;
var statearr_47395_47417 = state_47372__$1;
(statearr_47395_47417[(2)] = inst_47346);

(statearr_47395_47417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28227__auto__))
;
return ((function (switch__28060__auto__,c__28227__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28061__auto__ = null;
var figwheel$client$file_reloading$state_machine__28061__auto____0 = (function (){
var statearr_47396 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47396[(0)] = figwheel$client$file_reloading$state_machine__28061__auto__);

(statearr_47396[(1)] = (1));

return statearr_47396;
});
var figwheel$client$file_reloading$state_machine__28061__auto____1 = (function (state_47372){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_47372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e47397){if((e47397 instanceof Object)){
var ex__28064__auto__ = e47397;
var statearr_47398_47418 = state_47372;
(statearr_47398_47418[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47419 = state_47372;
state_47372 = G__47419;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28061__auto__ = function(state_47372){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28061__auto____1.call(this,state_47372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28061__auto____0;
figwheel$client$file_reloading$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28061__auto____1;
return figwheel$client$file_reloading$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__))
})();
var state__28229__auto__ = (function (){var statearr_47399 = f__28228__auto__.call(null);
(statearr_47399[(6)] = c__28227__auto__);

return statearr_47399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__))
);

return c__28227__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47421 = arguments.length;
switch (G__47421) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47423,callback){
var map__47424 = p__47423;
var map__47424__$1 = (((((!((map__47424 == null))))?(((((map__47424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47424):map__47424);
var file_msg = map__47424__$1;
var namespace = cljs.core.get.call(null,map__47424__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47424,map__47424__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47424,map__47424__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47426){
var map__47427 = p__47426;
var map__47427__$1 = (((((!((map__47427 == null))))?(((((map__47427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47427):map__47427);
var file_msg = map__47427__$1;
var namespace = cljs.core.get.call(null,map__47427__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47429){
var map__47430 = p__47429;
var map__47430__$1 = (((((!((map__47430 == null))))?(((((map__47430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47430):map__47430);
var file_msg = map__47430__$1;
var namespace = cljs.core.get.call(null,map__47430__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47432,callback){
var map__47433 = p__47432;
var map__47433__$1 = (((((!((map__47433 == null))))?(((((map__47433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47433):map__47433);
var file_msg = map__47433__$1;
var request_url = cljs.core.get.call(null,map__47433__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47433__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28227__auto___47483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___47483,out){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___47483,out){
return (function (state_47468){
var state_val_47469 = (state_47468[(1)]);
if((state_val_47469 === (1))){
var inst_47442 = cljs.core.seq.call(null,files);
var inst_47443 = cljs.core.first.call(null,inst_47442);
var inst_47444 = cljs.core.next.call(null,inst_47442);
var inst_47445 = files;
var state_47468__$1 = (function (){var statearr_47470 = state_47468;
(statearr_47470[(7)] = inst_47444);

(statearr_47470[(8)] = inst_47445);

(statearr_47470[(9)] = inst_47443);

return statearr_47470;
})();
var statearr_47471_47484 = state_47468__$1;
(statearr_47471_47484[(2)] = null);

(statearr_47471_47484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (2))){
var inst_47445 = (state_47468[(8)]);
var inst_47451 = (state_47468[(10)]);
var inst_47450 = cljs.core.seq.call(null,inst_47445);
var inst_47451__$1 = cljs.core.first.call(null,inst_47450);
var inst_47452 = cljs.core.next.call(null,inst_47450);
var inst_47453 = (inst_47451__$1 == null);
var inst_47454 = cljs.core.not.call(null,inst_47453);
var state_47468__$1 = (function (){var statearr_47472 = state_47468;
(statearr_47472[(10)] = inst_47451__$1);

(statearr_47472[(11)] = inst_47452);

return statearr_47472;
})();
if(inst_47454){
var statearr_47473_47485 = state_47468__$1;
(statearr_47473_47485[(1)] = (4));

} else {
var statearr_47474_47486 = state_47468__$1;
(statearr_47474_47486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (3))){
var inst_47466 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47468__$1,inst_47466);
} else {
if((state_val_47469 === (4))){
var inst_47451 = (state_47468[(10)]);
var inst_47456 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47451);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47468__$1,(7),inst_47456);
} else {
if((state_val_47469 === (5))){
var inst_47462 = cljs.core.async.close_BANG_.call(null,out);
var state_47468__$1 = state_47468;
var statearr_47475_47487 = state_47468__$1;
(statearr_47475_47487[(2)] = inst_47462);

(statearr_47475_47487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (6))){
var inst_47464 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47476_47488 = state_47468__$1;
(statearr_47476_47488[(2)] = inst_47464);

(statearr_47476_47488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (7))){
var inst_47452 = (state_47468[(11)]);
var inst_47458 = (state_47468[(2)]);
var inst_47459 = cljs.core.async.put_BANG_.call(null,out,inst_47458);
var inst_47445 = inst_47452;
var state_47468__$1 = (function (){var statearr_47477 = state_47468;
(statearr_47477[(8)] = inst_47445);

(statearr_47477[(12)] = inst_47459);

return statearr_47477;
})();
var statearr_47478_47489 = state_47468__$1;
(statearr_47478_47489[(2)] = null);

(statearr_47478_47489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28227__auto___47483,out))
;
return ((function (switch__28060__auto__,c__28227__auto___47483,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto____0 = (function (){
var statearr_47479 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47479[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto__);

(statearr_47479[(1)] = (1));

return statearr_47479;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto____1 = (function (state_47468){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_47468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e47480){if((e47480 instanceof Object)){
var ex__28064__auto__ = e47480;
var statearr_47481_47490 = state_47468;
(statearr_47481_47490[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47491 = state_47468;
state_47468 = G__47491;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto__ = function(state_47468){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto____1.call(this,state_47468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___47483,out))
})();
var state__28229__auto__ = (function (){var statearr_47482 = f__28228__auto__.call(null);
(statearr_47482[(6)] = c__28227__auto___47483);

return statearr_47482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___47483,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47492,opts){
var map__47493 = p__47492;
var map__47493__$1 = (((((!((map__47493 == null))))?(((((map__47493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47493):map__47493);
var eval_body = cljs.core.get.call(null,map__47493__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47493__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47495){var e = e47495;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47496_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47496_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47497){
var vec__47498 = p__47497;
var k = cljs.core.nth.call(null,vec__47498,(0),null);
var v = cljs.core.nth.call(null,vec__47498,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47501){
var vec__47502 = p__47501;
var k = cljs.core.nth.call(null,vec__47502,(0),null);
var v = cljs.core.nth.call(null,vec__47502,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47508,p__47509){
var map__47510 = p__47508;
var map__47510__$1 = (((((!((map__47510 == null))))?(((((map__47510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47510):map__47510);
var opts = map__47510__$1;
var before_jsload = cljs.core.get.call(null,map__47510__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47510__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47510__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47511 = p__47509;
var map__47511__$1 = (((((!((map__47511 == null))))?(((((map__47511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47511):map__47511);
var msg = map__47511__$1;
var files = cljs.core.get.call(null,map__47511__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47511__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47511__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47665){
var state_val_47666 = (state_47665[(1)]);
if((state_val_47666 === (7))){
var inst_47525 = (state_47665[(7)]);
var inst_47527 = (state_47665[(8)]);
var inst_47528 = (state_47665[(9)]);
var inst_47526 = (state_47665[(10)]);
var inst_47533 = cljs.core._nth.call(null,inst_47526,inst_47528);
var inst_47534 = figwheel.client.file_reloading.eval_body.call(null,inst_47533,opts);
var inst_47535 = (inst_47528 + (1));
var tmp47667 = inst_47525;
var tmp47668 = inst_47527;
var tmp47669 = inst_47526;
var inst_47525__$1 = tmp47667;
var inst_47526__$1 = tmp47669;
var inst_47527__$1 = tmp47668;
var inst_47528__$1 = inst_47535;
var state_47665__$1 = (function (){var statearr_47670 = state_47665;
(statearr_47670[(7)] = inst_47525__$1);

(statearr_47670[(8)] = inst_47527__$1);

(statearr_47670[(9)] = inst_47528__$1);

(statearr_47670[(10)] = inst_47526__$1);

(statearr_47670[(11)] = inst_47534);

return statearr_47670;
})();
var statearr_47671_47754 = state_47665__$1;
(statearr_47671_47754[(2)] = null);

(statearr_47671_47754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (20))){
var inst_47568 = (state_47665[(12)]);
var inst_47576 = figwheel.client.file_reloading.sort_files.call(null,inst_47568);
var state_47665__$1 = state_47665;
var statearr_47672_47755 = state_47665__$1;
(statearr_47672_47755[(2)] = inst_47576);

(statearr_47672_47755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (27))){
var state_47665__$1 = state_47665;
var statearr_47673_47756 = state_47665__$1;
(statearr_47673_47756[(2)] = null);

(statearr_47673_47756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (1))){
var inst_47517 = (state_47665[(13)]);
var inst_47514 = before_jsload.call(null,files);
var inst_47515 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47516 = (function (){return ((function (inst_47517,inst_47514,inst_47515,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47505_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47505_SHARP_);
});
;})(inst_47517,inst_47514,inst_47515,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47517__$1 = cljs.core.filter.call(null,inst_47516,files);
var inst_47518 = cljs.core.not_empty.call(null,inst_47517__$1);
var state_47665__$1 = (function (){var statearr_47674 = state_47665;
(statearr_47674[(14)] = inst_47515);

(statearr_47674[(13)] = inst_47517__$1);

(statearr_47674[(15)] = inst_47514);

return statearr_47674;
})();
if(cljs.core.truth_(inst_47518)){
var statearr_47675_47757 = state_47665__$1;
(statearr_47675_47757[(1)] = (2));

} else {
var statearr_47676_47758 = state_47665__$1;
(statearr_47676_47758[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (24))){
var state_47665__$1 = state_47665;
var statearr_47677_47759 = state_47665__$1;
(statearr_47677_47759[(2)] = null);

(statearr_47677_47759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (39))){
var inst_47618 = (state_47665[(16)]);
var state_47665__$1 = state_47665;
var statearr_47678_47760 = state_47665__$1;
(statearr_47678_47760[(2)] = inst_47618);

(statearr_47678_47760[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (46))){
var inst_47660 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47679_47761 = state_47665__$1;
(statearr_47679_47761[(2)] = inst_47660);

(statearr_47679_47761[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (4))){
var inst_47562 = (state_47665[(2)]);
var inst_47563 = cljs.core.List.EMPTY;
var inst_47564 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47563);
var inst_47565 = (function (){return ((function (inst_47562,inst_47563,inst_47564,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47506_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47506_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47506_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47506_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_47562,inst_47563,inst_47564,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47566 = cljs.core.filter.call(null,inst_47565,files);
var inst_47567 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47568 = cljs.core.concat.call(null,inst_47566,inst_47567);
var state_47665__$1 = (function (){var statearr_47680 = state_47665;
(statearr_47680[(17)] = inst_47564);

(statearr_47680[(18)] = inst_47562);

(statearr_47680[(12)] = inst_47568);

return statearr_47680;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47681_47762 = state_47665__$1;
(statearr_47681_47762[(1)] = (16));

} else {
var statearr_47682_47763 = state_47665__$1;
(statearr_47682_47763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (15))){
var inst_47552 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47683_47764 = state_47665__$1;
(statearr_47683_47764[(2)] = inst_47552);

(statearr_47683_47764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (21))){
var inst_47578 = (state_47665[(19)]);
var inst_47578__$1 = (state_47665[(2)]);
var inst_47579 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47578__$1);
var state_47665__$1 = (function (){var statearr_47684 = state_47665;
(statearr_47684[(19)] = inst_47578__$1);

return statearr_47684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47665__$1,(22),inst_47579);
} else {
if((state_val_47666 === (31))){
var inst_47663 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47665__$1,inst_47663);
} else {
if((state_val_47666 === (32))){
var inst_47618 = (state_47665[(16)]);
var inst_47623 = inst_47618.cljs$lang$protocol_mask$partition0$;
var inst_47624 = (inst_47623 & (64));
var inst_47625 = inst_47618.cljs$core$ISeq$;
var inst_47626 = (cljs.core.PROTOCOL_SENTINEL === inst_47625);
var inst_47627 = ((inst_47624) || (inst_47626));
var state_47665__$1 = state_47665;
if(cljs.core.truth_(inst_47627)){
var statearr_47685_47765 = state_47665__$1;
(statearr_47685_47765[(1)] = (35));

} else {
var statearr_47686_47766 = state_47665__$1;
(statearr_47686_47766[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (40))){
var inst_47640 = (state_47665[(20)]);
var inst_47639 = (state_47665[(2)]);
var inst_47640__$1 = cljs.core.get.call(null,inst_47639,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47641 = cljs.core.get.call(null,inst_47639,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47642 = cljs.core.not_empty.call(null,inst_47640__$1);
var state_47665__$1 = (function (){var statearr_47687 = state_47665;
(statearr_47687[(21)] = inst_47641);

(statearr_47687[(20)] = inst_47640__$1);

return statearr_47687;
})();
if(cljs.core.truth_(inst_47642)){
var statearr_47688_47767 = state_47665__$1;
(statearr_47688_47767[(1)] = (41));

} else {
var statearr_47689_47768 = state_47665__$1;
(statearr_47689_47768[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (33))){
var state_47665__$1 = state_47665;
var statearr_47690_47769 = state_47665__$1;
(statearr_47690_47769[(2)] = false);

(statearr_47690_47769[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (13))){
var inst_47538 = (state_47665[(22)]);
var inst_47542 = cljs.core.chunk_first.call(null,inst_47538);
var inst_47543 = cljs.core.chunk_rest.call(null,inst_47538);
var inst_47544 = cljs.core.count.call(null,inst_47542);
var inst_47525 = inst_47543;
var inst_47526 = inst_47542;
var inst_47527 = inst_47544;
var inst_47528 = (0);
var state_47665__$1 = (function (){var statearr_47691 = state_47665;
(statearr_47691[(7)] = inst_47525);

(statearr_47691[(8)] = inst_47527);

(statearr_47691[(9)] = inst_47528);

(statearr_47691[(10)] = inst_47526);

return statearr_47691;
})();
var statearr_47692_47770 = state_47665__$1;
(statearr_47692_47770[(2)] = null);

(statearr_47692_47770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (22))){
var inst_47586 = (state_47665[(23)]);
var inst_47582 = (state_47665[(24)]);
var inst_47581 = (state_47665[(25)]);
var inst_47578 = (state_47665[(19)]);
var inst_47581__$1 = (state_47665[(2)]);
var inst_47582__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47581__$1);
var inst_47583 = (function (){var all_files = inst_47578;
var res_SINGLEQUOTE_ = inst_47581__$1;
var res = inst_47582__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47586,inst_47582,inst_47581,inst_47578,inst_47581__$1,inst_47582__$1,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47507_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47507_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47586,inst_47582,inst_47581,inst_47578,inst_47581__$1,inst_47582__$1,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47584 = cljs.core.filter.call(null,inst_47583,inst_47581__$1);
var inst_47585 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47586__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47585);
var inst_47587 = cljs.core.not_empty.call(null,inst_47586__$1);
var state_47665__$1 = (function (){var statearr_47693 = state_47665;
(statearr_47693[(23)] = inst_47586__$1);

(statearr_47693[(24)] = inst_47582__$1);

(statearr_47693[(26)] = inst_47584);

(statearr_47693[(25)] = inst_47581__$1);

return statearr_47693;
})();
if(cljs.core.truth_(inst_47587)){
var statearr_47694_47771 = state_47665__$1;
(statearr_47694_47771[(1)] = (23));

} else {
var statearr_47695_47772 = state_47665__$1;
(statearr_47695_47772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (36))){
var state_47665__$1 = state_47665;
var statearr_47696_47773 = state_47665__$1;
(statearr_47696_47773[(2)] = false);

(statearr_47696_47773[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (41))){
var inst_47640 = (state_47665[(20)]);
var inst_47644 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47645 = cljs.core.map.call(null,inst_47644,inst_47640);
var inst_47646 = cljs.core.pr_str.call(null,inst_47645);
var inst_47647 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47646)].join('');
var inst_47648 = figwheel.client.utils.log.call(null,inst_47647);
var state_47665__$1 = state_47665;
var statearr_47697_47774 = state_47665__$1;
(statearr_47697_47774[(2)] = inst_47648);

(statearr_47697_47774[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (43))){
var inst_47641 = (state_47665[(21)]);
var inst_47651 = (state_47665[(2)]);
var inst_47652 = cljs.core.not_empty.call(null,inst_47641);
var state_47665__$1 = (function (){var statearr_47698 = state_47665;
(statearr_47698[(27)] = inst_47651);

return statearr_47698;
})();
if(cljs.core.truth_(inst_47652)){
var statearr_47699_47775 = state_47665__$1;
(statearr_47699_47775[(1)] = (44));

} else {
var statearr_47700_47776 = state_47665__$1;
(statearr_47700_47776[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (29))){
var inst_47586 = (state_47665[(23)]);
var inst_47582 = (state_47665[(24)]);
var inst_47584 = (state_47665[(26)]);
var inst_47618 = (state_47665[(16)]);
var inst_47581 = (state_47665[(25)]);
var inst_47578 = (state_47665[(19)]);
var inst_47614 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47617 = (function (){var all_files = inst_47578;
var res_SINGLEQUOTE_ = inst_47581;
var res = inst_47582;
var files_not_loaded = inst_47584;
var dependencies_that_loaded = inst_47586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47618,inst_47581,inst_47578,inst_47614,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47616){
var map__47701 = p__47616;
var map__47701__$1 = (((((!((map__47701 == null))))?(((((map__47701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47701):map__47701);
var namespace = cljs.core.get.call(null,map__47701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47618,inst_47581,inst_47578,inst_47614,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47618__$1 = cljs.core.group_by.call(null,inst_47617,inst_47584);
var inst_47620 = (inst_47618__$1 == null);
var inst_47621 = cljs.core.not.call(null,inst_47620);
var state_47665__$1 = (function (){var statearr_47703 = state_47665;
(statearr_47703[(16)] = inst_47618__$1);

(statearr_47703[(28)] = inst_47614);

return statearr_47703;
})();
if(inst_47621){
var statearr_47704_47777 = state_47665__$1;
(statearr_47704_47777[(1)] = (32));

} else {
var statearr_47705_47778 = state_47665__$1;
(statearr_47705_47778[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (44))){
var inst_47641 = (state_47665[(21)]);
var inst_47654 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47641);
var inst_47655 = cljs.core.pr_str.call(null,inst_47654);
var inst_47656 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47655)].join('');
var inst_47657 = figwheel.client.utils.log.call(null,inst_47656);
var state_47665__$1 = state_47665;
var statearr_47706_47779 = state_47665__$1;
(statearr_47706_47779[(2)] = inst_47657);

(statearr_47706_47779[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (6))){
var inst_47559 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47707_47780 = state_47665__$1;
(statearr_47707_47780[(2)] = inst_47559);

(statearr_47707_47780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (28))){
var inst_47584 = (state_47665[(26)]);
var inst_47611 = (state_47665[(2)]);
var inst_47612 = cljs.core.not_empty.call(null,inst_47584);
var state_47665__$1 = (function (){var statearr_47708 = state_47665;
(statearr_47708[(29)] = inst_47611);

return statearr_47708;
})();
if(cljs.core.truth_(inst_47612)){
var statearr_47709_47781 = state_47665__$1;
(statearr_47709_47781[(1)] = (29));

} else {
var statearr_47710_47782 = state_47665__$1;
(statearr_47710_47782[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (25))){
var inst_47582 = (state_47665[(24)]);
var inst_47598 = (state_47665[(2)]);
var inst_47599 = cljs.core.not_empty.call(null,inst_47582);
var state_47665__$1 = (function (){var statearr_47711 = state_47665;
(statearr_47711[(30)] = inst_47598);

return statearr_47711;
})();
if(cljs.core.truth_(inst_47599)){
var statearr_47712_47783 = state_47665__$1;
(statearr_47712_47783[(1)] = (26));

} else {
var statearr_47713_47784 = state_47665__$1;
(statearr_47713_47784[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (34))){
var inst_47634 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
if(cljs.core.truth_(inst_47634)){
var statearr_47714_47785 = state_47665__$1;
(statearr_47714_47785[(1)] = (38));

} else {
var statearr_47715_47786 = state_47665__$1;
(statearr_47715_47786[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (17))){
var state_47665__$1 = state_47665;
var statearr_47716_47787 = state_47665__$1;
(statearr_47716_47787[(2)] = recompile_dependents);

(statearr_47716_47787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (3))){
var state_47665__$1 = state_47665;
var statearr_47717_47788 = state_47665__$1;
(statearr_47717_47788[(2)] = null);

(statearr_47717_47788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (12))){
var inst_47555 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47718_47789 = state_47665__$1;
(statearr_47718_47789[(2)] = inst_47555);

(statearr_47718_47789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (2))){
var inst_47517 = (state_47665[(13)]);
var inst_47524 = cljs.core.seq.call(null,inst_47517);
var inst_47525 = inst_47524;
var inst_47526 = null;
var inst_47527 = (0);
var inst_47528 = (0);
var state_47665__$1 = (function (){var statearr_47719 = state_47665;
(statearr_47719[(7)] = inst_47525);

(statearr_47719[(8)] = inst_47527);

(statearr_47719[(9)] = inst_47528);

(statearr_47719[(10)] = inst_47526);

return statearr_47719;
})();
var statearr_47720_47790 = state_47665__$1;
(statearr_47720_47790[(2)] = null);

(statearr_47720_47790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (23))){
var inst_47586 = (state_47665[(23)]);
var inst_47582 = (state_47665[(24)]);
var inst_47584 = (state_47665[(26)]);
var inst_47581 = (state_47665[(25)]);
var inst_47578 = (state_47665[(19)]);
var inst_47589 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47591 = (function (){var all_files = inst_47578;
var res_SINGLEQUOTE_ = inst_47581;
var res = inst_47582;
var files_not_loaded = inst_47584;
var dependencies_that_loaded = inst_47586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47581,inst_47578,inst_47589,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47590){
var map__47721 = p__47590;
var map__47721__$1 = (((((!((map__47721 == null))))?(((((map__47721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47721):map__47721);
var request_url = cljs.core.get.call(null,map__47721__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47581,inst_47578,inst_47589,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47592 = cljs.core.reverse.call(null,inst_47586);
var inst_47593 = cljs.core.map.call(null,inst_47591,inst_47592);
var inst_47594 = cljs.core.pr_str.call(null,inst_47593);
var inst_47595 = figwheel.client.utils.log.call(null,inst_47594);
var state_47665__$1 = (function (){var statearr_47723 = state_47665;
(statearr_47723[(31)] = inst_47589);

return statearr_47723;
})();
var statearr_47724_47791 = state_47665__$1;
(statearr_47724_47791[(2)] = inst_47595);

(statearr_47724_47791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (35))){
var state_47665__$1 = state_47665;
var statearr_47725_47792 = state_47665__$1;
(statearr_47725_47792[(2)] = true);

(statearr_47725_47792[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (19))){
var inst_47568 = (state_47665[(12)]);
var inst_47574 = figwheel.client.file_reloading.expand_files.call(null,inst_47568);
var state_47665__$1 = state_47665;
var statearr_47726_47793 = state_47665__$1;
(statearr_47726_47793[(2)] = inst_47574);

(statearr_47726_47793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (11))){
var state_47665__$1 = state_47665;
var statearr_47727_47794 = state_47665__$1;
(statearr_47727_47794[(2)] = null);

(statearr_47727_47794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (9))){
var inst_47557 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47728_47795 = state_47665__$1;
(statearr_47728_47795[(2)] = inst_47557);

(statearr_47728_47795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (5))){
var inst_47527 = (state_47665[(8)]);
var inst_47528 = (state_47665[(9)]);
var inst_47530 = (inst_47528 < inst_47527);
var inst_47531 = inst_47530;
var state_47665__$1 = state_47665;
if(cljs.core.truth_(inst_47531)){
var statearr_47729_47796 = state_47665__$1;
(statearr_47729_47796[(1)] = (7));

} else {
var statearr_47730_47797 = state_47665__$1;
(statearr_47730_47797[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (14))){
var inst_47538 = (state_47665[(22)]);
var inst_47547 = cljs.core.first.call(null,inst_47538);
var inst_47548 = figwheel.client.file_reloading.eval_body.call(null,inst_47547,opts);
var inst_47549 = cljs.core.next.call(null,inst_47538);
var inst_47525 = inst_47549;
var inst_47526 = null;
var inst_47527 = (0);
var inst_47528 = (0);
var state_47665__$1 = (function (){var statearr_47731 = state_47665;
(statearr_47731[(32)] = inst_47548);

(statearr_47731[(7)] = inst_47525);

(statearr_47731[(8)] = inst_47527);

(statearr_47731[(9)] = inst_47528);

(statearr_47731[(10)] = inst_47526);

return statearr_47731;
})();
var statearr_47732_47798 = state_47665__$1;
(statearr_47732_47798[(2)] = null);

(statearr_47732_47798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (45))){
var state_47665__$1 = state_47665;
var statearr_47733_47799 = state_47665__$1;
(statearr_47733_47799[(2)] = null);

(statearr_47733_47799[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (26))){
var inst_47586 = (state_47665[(23)]);
var inst_47582 = (state_47665[(24)]);
var inst_47584 = (state_47665[(26)]);
var inst_47581 = (state_47665[(25)]);
var inst_47578 = (state_47665[(19)]);
var inst_47601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47603 = (function (){var all_files = inst_47578;
var res_SINGLEQUOTE_ = inst_47581;
var res = inst_47582;
var files_not_loaded = inst_47584;
var dependencies_that_loaded = inst_47586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47581,inst_47578,inst_47601,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47602){
var map__47734 = p__47602;
var map__47734__$1 = (((((!((map__47734 == null))))?(((((map__47734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47734):map__47734);
var namespace = cljs.core.get.call(null,map__47734__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47734__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47581,inst_47578,inst_47601,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47604 = cljs.core.map.call(null,inst_47603,inst_47582);
var inst_47605 = cljs.core.pr_str.call(null,inst_47604);
var inst_47606 = figwheel.client.utils.log.call(null,inst_47605);
var inst_47607 = (function (){var all_files = inst_47578;
var res_SINGLEQUOTE_ = inst_47581;
var res = inst_47582;
var files_not_loaded = inst_47584;
var dependencies_that_loaded = inst_47586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47581,inst_47578,inst_47601,inst_47603,inst_47604,inst_47605,inst_47606,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47586,inst_47582,inst_47584,inst_47581,inst_47578,inst_47601,inst_47603,inst_47604,inst_47605,inst_47606,state_val_47666,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47608 = setTimeout(inst_47607,(10));
var state_47665__$1 = (function (){var statearr_47736 = state_47665;
(statearr_47736[(33)] = inst_47606);

(statearr_47736[(34)] = inst_47601);

return statearr_47736;
})();
var statearr_47737_47800 = state_47665__$1;
(statearr_47737_47800[(2)] = inst_47608);

(statearr_47737_47800[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (16))){
var state_47665__$1 = state_47665;
var statearr_47738_47801 = state_47665__$1;
(statearr_47738_47801[(2)] = reload_dependents);

(statearr_47738_47801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (38))){
var inst_47618 = (state_47665[(16)]);
var inst_47636 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47618);
var state_47665__$1 = state_47665;
var statearr_47739_47802 = state_47665__$1;
(statearr_47739_47802[(2)] = inst_47636);

(statearr_47739_47802[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (30))){
var state_47665__$1 = state_47665;
var statearr_47740_47803 = state_47665__$1;
(statearr_47740_47803[(2)] = null);

(statearr_47740_47803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (10))){
var inst_47538 = (state_47665[(22)]);
var inst_47540 = cljs.core.chunked_seq_QMARK_.call(null,inst_47538);
var state_47665__$1 = state_47665;
if(inst_47540){
var statearr_47741_47804 = state_47665__$1;
(statearr_47741_47804[(1)] = (13));

} else {
var statearr_47742_47805 = state_47665__$1;
(statearr_47742_47805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (18))){
var inst_47572 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
if(cljs.core.truth_(inst_47572)){
var statearr_47743_47806 = state_47665__$1;
(statearr_47743_47806[(1)] = (19));

} else {
var statearr_47744_47807 = state_47665__$1;
(statearr_47744_47807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (42))){
var state_47665__$1 = state_47665;
var statearr_47745_47808 = state_47665__$1;
(statearr_47745_47808[(2)] = null);

(statearr_47745_47808[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (37))){
var inst_47631 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47746_47809 = state_47665__$1;
(statearr_47746_47809[(2)] = inst_47631);

(statearr_47746_47809[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (8))){
var inst_47538 = (state_47665[(22)]);
var inst_47525 = (state_47665[(7)]);
var inst_47538__$1 = cljs.core.seq.call(null,inst_47525);
var state_47665__$1 = (function (){var statearr_47747 = state_47665;
(statearr_47747[(22)] = inst_47538__$1);

return statearr_47747;
})();
if(inst_47538__$1){
var statearr_47748_47810 = state_47665__$1;
(statearr_47748_47810[(1)] = (10));

} else {
var statearr_47749_47811 = state_47665__$1;
(statearr_47749_47811[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28060__auto__,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto____0 = (function (){
var statearr_47750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47750[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto__);

(statearr_47750[(1)] = (1));

return statearr_47750;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto____1 = (function (state_47665){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_47665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e47751){if((e47751 instanceof Object)){
var ex__28064__auto__ = e47751;
var statearr_47752_47812 = state_47665;
(statearr_47752_47812[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47813 = state_47665;
state_47665 = G__47813;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto__ = function(state_47665){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto____1.call(this,state_47665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28229__auto__ = (function (){var statearr_47753 = f__28228__auto__.call(null);
(statearr_47753[(6)] = c__28227__auto__);

return statearr_47753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__,map__47510,map__47510__$1,opts,before_jsload,on_jsload,reload_dependents,map__47511,map__47511__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28227__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47816,link){
var map__47817 = p__47816;
var map__47817__$1 = (((((!((map__47817 == null))))?(((((map__47817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47817):map__47817);
var file = cljs.core.get.call(null,map__47817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__47817,map__47817__$1,file){
return (function (p1__47814_SHARP_,p2__47815_SHARP_){
if(cljs.core._EQ_.call(null,p1__47814_SHARP_,p2__47815_SHARP_)){
return p1__47814_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__47817,map__47817__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47820){
var map__47821 = p__47820;
var map__47821__$1 = (((((!((map__47821 == null))))?(((((map__47821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47821):map__47821);
var match_length = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47819_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47819_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47823_SHARP_,p2__47824_SHARP_){
return cljs.core.assoc.call(null,p1__47823_SHARP_,cljs.core.get.call(null,p2__47824_SHARP_,key),p2__47824_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_47825 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47825);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47825);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47826,p__47827){
var map__47828 = p__47826;
var map__47828__$1 = (((((!((map__47828 == null))))?(((((map__47828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47828):map__47828);
var on_cssload = cljs.core.get.call(null,map__47828__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47829 = p__47827;
var map__47829__$1 = (((((!((map__47829 == null))))?(((((map__47829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47829):map__47829);
var files_msg = map__47829__$1;
var files = cljs.core.get.call(null,map__47829__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545897061519
