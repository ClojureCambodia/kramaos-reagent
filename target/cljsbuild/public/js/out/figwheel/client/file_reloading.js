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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29693_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29693_SHARP_));
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
var seq__29694 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29695 = null;
var count__29696 = (0);
var i__29697 = (0);
while(true){
if((i__29697 < count__29696)){
var n = cljs.core._nth.call(null,chunk__29695,i__29697);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29698 = seq__29694;
var G__29699 = chunk__29695;
var G__29700 = count__29696;
var G__29701 = (i__29697 + (1));
seq__29694 = G__29698;
chunk__29695 = G__29699;
count__29696 = G__29700;
i__29697 = G__29701;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29694);
if(temp__5457__auto__){
var seq__29694__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29694__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29694__$1);
var G__29702 = cljs.core.chunk_rest.call(null,seq__29694__$1);
var G__29703 = c__4461__auto__;
var G__29704 = cljs.core.count.call(null,c__4461__auto__);
var G__29705 = (0);
seq__29694 = G__29702;
chunk__29695 = G__29703;
count__29696 = G__29704;
i__29697 = G__29705;
continue;
} else {
var n = cljs.core.first.call(null,seq__29694__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29706 = cljs.core.next.call(null,seq__29694__$1);
var G__29707 = null;
var G__29708 = (0);
var G__29709 = (0);
seq__29694 = G__29706;
chunk__29695 = G__29707;
count__29696 = G__29708;
i__29697 = G__29709;
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
return cljs.core.some.call(null,(function (p__29710){
var vec__29711 = p__29710;
var _ = cljs.core.nth.call(null,vec__29711,(0),null);
var v = cljs.core.nth.call(null,vec__29711,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__29714){
var vec__29715 = p__29714;
var k = cljs.core.nth.call(null,vec__29715,(0),null);
var v = cljs.core.nth.call(null,vec__29715,(1),null);
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

var seq__29727_29735 = cljs.core.seq.call(null,deps);
var chunk__29728_29736 = null;
var count__29729_29737 = (0);
var i__29730_29738 = (0);
while(true){
if((i__29730_29738 < count__29729_29737)){
var dep_29739 = cljs.core._nth.call(null,chunk__29728_29736,i__29730_29738);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29739;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29739));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29739,(depth + (1)),state);
} else {
}


var G__29740 = seq__29727_29735;
var G__29741 = chunk__29728_29736;
var G__29742 = count__29729_29737;
var G__29743 = (i__29730_29738 + (1));
seq__29727_29735 = G__29740;
chunk__29728_29736 = G__29741;
count__29729_29737 = G__29742;
i__29730_29738 = G__29743;
continue;
} else {
var temp__5457__auto___29744 = cljs.core.seq.call(null,seq__29727_29735);
if(temp__5457__auto___29744){
var seq__29727_29745__$1 = temp__5457__auto___29744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29727_29745__$1)){
var c__4461__auto___29746 = cljs.core.chunk_first.call(null,seq__29727_29745__$1);
var G__29747 = cljs.core.chunk_rest.call(null,seq__29727_29745__$1);
var G__29748 = c__4461__auto___29746;
var G__29749 = cljs.core.count.call(null,c__4461__auto___29746);
var G__29750 = (0);
seq__29727_29735 = G__29747;
chunk__29728_29736 = G__29748;
count__29729_29737 = G__29749;
i__29730_29738 = G__29750;
continue;
} else {
var dep_29751 = cljs.core.first.call(null,seq__29727_29745__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29751;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29751));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29751,(depth + (1)),state);
} else {
}


var G__29752 = cljs.core.next.call(null,seq__29727_29745__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29727_29735 = G__29752;
chunk__29728_29736 = G__29753;
count__29729_29737 = G__29754;
i__29730_29738 = G__29755;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29731){
var vec__29732 = p__29731;
var seq__29733 = cljs.core.seq.call(null,vec__29732);
var first__29734 = cljs.core.first.call(null,seq__29733);
var seq__29733__$1 = cljs.core.next.call(null,seq__29733);
var x = first__29734;
var xs = seq__29733__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29732,seq__29733,first__29734,seq__29733__$1,x,xs,get_deps__$1){
return (function (p1__29718_SHARP_){
return clojure.set.difference.call(null,p1__29718_SHARP_,x);
});})(vec__29732,seq__29733,first__29734,seq__29733__$1,x,xs,get_deps__$1))
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
var seq__29756 = cljs.core.seq.call(null,provides);
var chunk__29757 = null;
var count__29758 = (0);
var i__29759 = (0);
while(true){
if((i__29759 < count__29758)){
var prov = cljs.core._nth.call(null,chunk__29757,i__29759);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29760_29768 = cljs.core.seq.call(null,requires);
var chunk__29761_29769 = null;
var count__29762_29770 = (0);
var i__29763_29771 = (0);
while(true){
if((i__29763_29771 < count__29762_29770)){
var req_29772 = cljs.core._nth.call(null,chunk__29761_29769,i__29763_29771);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29772,prov);


var G__29773 = seq__29760_29768;
var G__29774 = chunk__29761_29769;
var G__29775 = count__29762_29770;
var G__29776 = (i__29763_29771 + (1));
seq__29760_29768 = G__29773;
chunk__29761_29769 = G__29774;
count__29762_29770 = G__29775;
i__29763_29771 = G__29776;
continue;
} else {
var temp__5457__auto___29777 = cljs.core.seq.call(null,seq__29760_29768);
if(temp__5457__auto___29777){
var seq__29760_29778__$1 = temp__5457__auto___29777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29760_29778__$1)){
var c__4461__auto___29779 = cljs.core.chunk_first.call(null,seq__29760_29778__$1);
var G__29780 = cljs.core.chunk_rest.call(null,seq__29760_29778__$1);
var G__29781 = c__4461__auto___29779;
var G__29782 = cljs.core.count.call(null,c__4461__auto___29779);
var G__29783 = (0);
seq__29760_29768 = G__29780;
chunk__29761_29769 = G__29781;
count__29762_29770 = G__29782;
i__29763_29771 = G__29783;
continue;
} else {
var req_29784 = cljs.core.first.call(null,seq__29760_29778__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29784,prov);


var G__29785 = cljs.core.next.call(null,seq__29760_29778__$1);
var G__29786 = null;
var G__29787 = (0);
var G__29788 = (0);
seq__29760_29768 = G__29785;
chunk__29761_29769 = G__29786;
count__29762_29770 = G__29787;
i__29763_29771 = G__29788;
continue;
}
} else {
}
}
break;
}


var G__29789 = seq__29756;
var G__29790 = chunk__29757;
var G__29791 = count__29758;
var G__29792 = (i__29759 + (1));
seq__29756 = G__29789;
chunk__29757 = G__29790;
count__29758 = G__29791;
i__29759 = G__29792;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29756);
if(temp__5457__auto__){
var seq__29756__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29756__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29756__$1);
var G__29793 = cljs.core.chunk_rest.call(null,seq__29756__$1);
var G__29794 = c__4461__auto__;
var G__29795 = cljs.core.count.call(null,c__4461__auto__);
var G__29796 = (0);
seq__29756 = G__29793;
chunk__29757 = G__29794;
count__29758 = G__29795;
i__29759 = G__29796;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29756__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29764_29797 = cljs.core.seq.call(null,requires);
var chunk__29765_29798 = null;
var count__29766_29799 = (0);
var i__29767_29800 = (0);
while(true){
if((i__29767_29800 < count__29766_29799)){
var req_29801 = cljs.core._nth.call(null,chunk__29765_29798,i__29767_29800);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29801,prov);


var G__29802 = seq__29764_29797;
var G__29803 = chunk__29765_29798;
var G__29804 = count__29766_29799;
var G__29805 = (i__29767_29800 + (1));
seq__29764_29797 = G__29802;
chunk__29765_29798 = G__29803;
count__29766_29799 = G__29804;
i__29767_29800 = G__29805;
continue;
} else {
var temp__5457__auto___29806__$1 = cljs.core.seq.call(null,seq__29764_29797);
if(temp__5457__auto___29806__$1){
var seq__29764_29807__$1 = temp__5457__auto___29806__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29764_29807__$1)){
var c__4461__auto___29808 = cljs.core.chunk_first.call(null,seq__29764_29807__$1);
var G__29809 = cljs.core.chunk_rest.call(null,seq__29764_29807__$1);
var G__29810 = c__4461__auto___29808;
var G__29811 = cljs.core.count.call(null,c__4461__auto___29808);
var G__29812 = (0);
seq__29764_29797 = G__29809;
chunk__29765_29798 = G__29810;
count__29766_29799 = G__29811;
i__29767_29800 = G__29812;
continue;
} else {
var req_29813 = cljs.core.first.call(null,seq__29764_29807__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29813,prov);


var G__29814 = cljs.core.next.call(null,seq__29764_29807__$1);
var G__29815 = null;
var G__29816 = (0);
var G__29817 = (0);
seq__29764_29797 = G__29814;
chunk__29765_29798 = G__29815;
count__29766_29799 = G__29816;
i__29767_29800 = G__29817;
continue;
}
} else {
}
}
break;
}


var G__29818 = cljs.core.next.call(null,seq__29756__$1);
var G__29819 = null;
var G__29820 = (0);
var G__29821 = (0);
seq__29756 = G__29818;
chunk__29757 = G__29819;
count__29758 = G__29820;
i__29759 = G__29821;
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
var seq__29822_29826 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29823_29827 = null;
var count__29824_29828 = (0);
var i__29825_29829 = (0);
while(true){
if((i__29825_29829 < count__29824_29828)){
var ns_29830 = cljs.core._nth.call(null,chunk__29823_29827,i__29825_29829);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29830);


var G__29831 = seq__29822_29826;
var G__29832 = chunk__29823_29827;
var G__29833 = count__29824_29828;
var G__29834 = (i__29825_29829 + (1));
seq__29822_29826 = G__29831;
chunk__29823_29827 = G__29832;
count__29824_29828 = G__29833;
i__29825_29829 = G__29834;
continue;
} else {
var temp__5457__auto___29835 = cljs.core.seq.call(null,seq__29822_29826);
if(temp__5457__auto___29835){
var seq__29822_29836__$1 = temp__5457__auto___29835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29822_29836__$1)){
var c__4461__auto___29837 = cljs.core.chunk_first.call(null,seq__29822_29836__$1);
var G__29838 = cljs.core.chunk_rest.call(null,seq__29822_29836__$1);
var G__29839 = c__4461__auto___29837;
var G__29840 = cljs.core.count.call(null,c__4461__auto___29837);
var G__29841 = (0);
seq__29822_29826 = G__29838;
chunk__29823_29827 = G__29839;
count__29824_29828 = G__29840;
i__29825_29829 = G__29841;
continue;
} else {
var ns_29842 = cljs.core.first.call(null,seq__29822_29836__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29842);


var G__29843 = cljs.core.next.call(null,seq__29822_29836__$1);
var G__29844 = null;
var G__29845 = (0);
var G__29846 = (0);
seq__29822_29826 = G__29843;
chunk__29823_29827 = G__29844;
count__29824_29828 = G__29845;
i__29825_29829 = G__29846;
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
var G__29847__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29848__i = 0, G__29848__a = new Array(arguments.length -  0);
while (G__29848__i < G__29848__a.length) {G__29848__a[G__29848__i] = arguments[G__29848__i + 0]; ++G__29848__i;}
  args = new cljs.core.IndexedSeq(G__29848__a,0,null);
} 
return G__29847__delegate.call(this,args);};
G__29847.cljs$lang$maxFixedArity = 0;
G__29847.cljs$lang$applyTo = (function (arglist__29849){
var args = cljs.core.seq(arglist__29849);
return G__29847__delegate(args);
});
G__29847.cljs$core$IFn$_invoke$arity$variadic = G__29847__delegate;
return G__29847;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29850_SHARP_,p2__29851_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29850_SHARP_)),p2__29851_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29852_SHARP_,p2__29853_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29852_SHARP_),p2__29853_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29854 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29854.addCallback(((function (G__29854){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29854))
);

G__29854.addErrback(((function (G__29854){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29854))
);

return G__29854;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29855){if((e29855 instanceof Error)){
var e = e29855;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29855;

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
}catch (e29856){if((e29856 instanceof Error)){
var e = e29856;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29856;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29857 = cljs.core._EQ_;
var expr__29858 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29857.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29858))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29857.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29858))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29857.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29858))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29857,expr__29858){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29857,expr__29858))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29860,callback){
var map__29861 = p__29860;
var map__29861__$1 = (((((!((map__29861 == null))))?(((((map__29861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29861):map__29861);
var file_msg = map__29861__$1;
var request_url = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29861,map__29861__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29861,map__29861__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__){
return (function (state_29899){
var state_val_29900 = (state_29899[(1)]);
if((state_val_29900 === (7))){
var inst_29895 = (state_29899[(2)]);
var state_29899__$1 = state_29899;
var statearr_29901_29927 = state_29899__$1;
(statearr_29901_29927[(2)] = inst_29895);

(statearr_29901_29927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (1))){
var state_29899__$1 = state_29899;
var statearr_29902_29928 = state_29899__$1;
(statearr_29902_29928[(2)] = null);

(statearr_29902_29928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (4))){
var inst_29865 = (state_29899[(7)]);
var inst_29865__$1 = (state_29899[(2)]);
var state_29899__$1 = (function (){var statearr_29903 = state_29899;
(statearr_29903[(7)] = inst_29865__$1);

return statearr_29903;
})();
if(cljs.core.truth_(inst_29865__$1)){
var statearr_29904_29929 = state_29899__$1;
(statearr_29904_29929[(1)] = (5));

} else {
var statearr_29905_29930 = state_29899__$1;
(statearr_29905_29930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (15))){
var inst_29878 = (state_29899[(8)]);
var inst_29880 = (state_29899[(9)]);
var inst_29882 = inst_29880.call(null,inst_29878);
var state_29899__$1 = state_29899;
var statearr_29906_29931 = state_29899__$1;
(statearr_29906_29931[(2)] = inst_29882);

(statearr_29906_29931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (13))){
var inst_29889 = (state_29899[(2)]);
var state_29899__$1 = state_29899;
var statearr_29907_29932 = state_29899__$1;
(statearr_29907_29932[(2)] = inst_29889);

(statearr_29907_29932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (6))){
var state_29899__$1 = state_29899;
var statearr_29908_29933 = state_29899__$1;
(statearr_29908_29933[(2)] = null);

(statearr_29908_29933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (17))){
var inst_29886 = (state_29899[(2)]);
var state_29899__$1 = state_29899;
var statearr_29909_29934 = state_29899__$1;
(statearr_29909_29934[(2)] = inst_29886);

(statearr_29909_29934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (3))){
var inst_29897 = (state_29899[(2)]);
var state_29899__$1 = state_29899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29899__$1,inst_29897);
} else {
if((state_val_29900 === (12))){
var state_29899__$1 = state_29899;
var statearr_29910_29935 = state_29899__$1;
(statearr_29910_29935[(2)] = null);

(statearr_29910_29935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (2))){
var state_29899__$1 = state_29899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29899__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29900 === (11))){
var inst_29870 = (state_29899[(10)]);
var inst_29876 = figwheel.client.file_reloading.blocking_load.call(null,inst_29870);
var state_29899__$1 = state_29899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29899__$1,(14),inst_29876);
} else {
if((state_val_29900 === (9))){
var inst_29870 = (state_29899[(10)]);
var state_29899__$1 = state_29899;
if(cljs.core.truth_(inst_29870)){
var statearr_29911_29936 = state_29899__$1;
(statearr_29911_29936[(1)] = (11));

} else {
var statearr_29912_29937 = state_29899__$1;
(statearr_29912_29937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (5))){
var inst_29871 = (state_29899[(11)]);
var inst_29865 = (state_29899[(7)]);
var inst_29870 = cljs.core.nth.call(null,inst_29865,(0),null);
var inst_29871__$1 = cljs.core.nth.call(null,inst_29865,(1),null);
var state_29899__$1 = (function (){var statearr_29913 = state_29899;
(statearr_29913[(10)] = inst_29870);

(statearr_29913[(11)] = inst_29871__$1);

return statearr_29913;
})();
if(cljs.core.truth_(inst_29871__$1)){
var statearr_29914_29938 = state_29899__$1;
(statearr_29914_29938[(1)] = (8));

} else {
var statearr_29915_29939 = state_29899__$1;
(statearr_29915_29939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (14))){
var inst_29870 = (state_29899[(10)]);
var inst_29880 = (state_29899[(9)]);
var inst_29878 = (state_29899[(2)]);
var inst_29879 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29880__$1 = cljs.core.get.call(null,inst_29879,inst_29870);
var state_29899__$1 = (function (){var statearr_29916 = state_29899;
(statearr_29916[(8)] = inst_29878);

(statearr_29916[(9)] = inst_29880__$1);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29880__$1)){
var statearr_29917_29940 = state_29899__$1;
(statearr_29917_29940[(1)] = (15));

} else {
var statearr_29918_29941 = state_29899__$1;
(statearr_29918_29941[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (16))){
var inst_29878 = (state_29899[(8)]);
var inst_29884 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29878);
var state_29899__$1 = state_29899;
var statearr_29919_29942 = state_29899__$1;
(statearr_29919_29942[(2)] = inst_29884);

(statearr_29919_29942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (10))){
var inst_29891 = (state_29899[(2)]);
var state_29899__$1 = (function (){var statearr_29920 = state_29899;
(statearr_29920[(12)] = inst_29891);

return statearr_29920;
})();
var statearr_29921_29943 = state_29899__$1;
(statearr_29921_29943[(2)] = null);

(statearr_29921_29943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29900 === (8))){
var inst_29871 = (state_29899[(11)]);
var inst_29873 = eval(inst_29871);
var state_29899__$1 = state_29899;
var statearr_29922_29944 = state_29899__$1;
(statearr_29922_29944[(2)] = inst_29873);

(statearr_29922_29944[(1)] = (10));


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
});})(c__27910__auto__))
;
return ((function (switch__27887__auto__,c__27910__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27888__auto__ = null;
var figwheel$client$file_reloading$state_machine__27888__auto____0 = (function (){
var statearr_29923 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29923[(0)] = figwheel$client$file_reloading$state_machine__27888__auto__);

(statearr_29923[(1)] = (1));

return statearr_29923;
});
var figwheel$client$file_reloading$state_machine__27888__auto____1 = (function (state_29899){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29924){if((e29924 instanceof Object)){
var ex__27891__auto__ = e29924;
var statearr_29925_29945 = state_29899;
(statearr_29925_29945[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29946 = state_29899;
state_29899 = G__29946;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27888__auto__ = function(state_29899){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27888__auto____1.call(this,state_29899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27888__auto____0;
figwheel$client$file_reloading$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27888__auto____1;
return figwheel$client$file_reloading$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__))
})();
var state__27912__auto__ = (function (){var statearr_29926 = f__27911__auto__.call(null);
(statearr_29926[(6)] = c__27910__auto__);

return statearr_29926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__))
);

return c__27910__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29948 = arguments.length;
switch (G__29948) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29950,callback){
var map__29951 = p__29950;
var map__29951__$1 = (((((!((map__29951 == null))))?(((((map__29951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29951):map__29951);
var file_msg = map__29951__$1;
var namespace = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29951,map__29951__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29951,map__29951__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29953){
var map__29954 = p__29953;
var map__29954__$1 = (((((!((map__29954 == null))))?(((((map__29954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29954):map__29954);
var file_msg = map__29954__$1;
var namespace = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29956){
var map__29957 = p__29956;
var map__29957__$1 = (((((!((map__29957 == null))))?(((((map__29957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29957):map__29957);
var file_msg = map__29957__$1;
var namespace = cljs.core.get.call(null,map__29957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29959,callback){
var map__29960 = p__29959;
var map__29960__$1 = (((((!((map__29960 == null))))?(((((map__29960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29960):map__29960);
var file_msg = map__29960__$1;
var request_url = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27910__auto___30010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto___30010,out){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto___30010,out){
return (function (state_29995){
var state_val_29996 = (state_29995[(1)]);
if((state_val_29996 === (1))){
var inst_29969 = cljs.core.seq.call(null,files);
var inst_29970 = cljs.core.first.call(null,inst_29969);
var inst_29971 = cljs.core.next.call(null,inst_29969);
var inst_29972 = files;
var state_29995__$1 = (function (){var statearr_29997 = state_29995;
(statearr_29997[(7)] = inst_29970);

(statearr_29997[(8)] = inst_29971);

(statearr_29997[(9)] = inst_29972);

return statearr_29997;
})();
var statearr_29998_30011 = state_29995__$1;
(statearr_29998_30011[(2)] = null);

(statearr_29998_30011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (2))){
var inst_29978 = (state_29995[(10)]);
var inst_29972 = (state_29995[(9)]);
var inst_29977 = cljs.core.seq.call(null,inst_29972);
var inst_29978__$1 = cljs.core.first.call(null,inst_29977);
var inst_29979 = cljs.core.next.call(null,inst_29977);
var inst_29980 = (inst_29978__$1 == null);
var inst_29981 = cljs.core.not.call(null,inst_29980);
var state_29995__$1 = (function (){var statearr_29999 = state_29995;
(statearr_29999[(10)] = inst_29978__$1);

(statearr_29999[(11)] = inst_29979);

return statearr_29999;
})();
if(inst_29981){
var statearr_30000_30012 = state_29995__$1;
(statearr_30000_30012[(1)] = (4));

} else {
var statearr_30001_30013 = state_29995__$1;
(statearr_30001_30013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (3))){
var inst_29993 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29995__$1,inst_29993);
} else {
if((state_val_29996 === (4))){
var inst_29978 = (state_29995[(10)]);
var inst_29983 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29978);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29995__$1,(7),inst_29983);
} else {
if((state_val_29996 === (5))){
var inst_29989 = cljs.core.async.close_BANG_.call(null,out);
var state_29995__$1 = state_29995;
var statearr_30002_30014 = state_29995__$1;
(statearr_30002_30014[(2)] = inst_29989);

(statearr_30002_30014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (6))){
var inst_29991 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_30003_30015 = state_29995__$1;
(statearr_30003_30015[(2)] = inst_29991);

(statearr_30003_30015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (7))){
var inst_29979 = (state_29995[(11)]);
var inst_29985 = (state_29995[(2)]);
var inst_29986 = cljs.core.async.put_BANG_.call(null,out,inst_29985);
var inst_29972 = inst_29979;
var state_29995__$1 = (function (){var statearr_30004 = state_29995;
(statearr_30004[(12)] = inst_29986);

(statearr_30004[(9)] = inst_29972);

return statearr_30004;
})();
var statearr_30005_30016 = state_29995__$1;
(statearr_30005_30016[(2)] = null);

(statearr_30005_30016[(1)] = (2));


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
});})(c__27910__auto___30010,out))
;
return ((function (switch__27887__auto__,c__27910__auto___30010,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____0 = (function (){
var statearr_30006 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30006[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__);

(statearr_30006[(1)] = (1));

return statearr_30006;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____1 = (function (state_29995){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e30007){if((e30007 instanceof Object)){
var ex__27891__auto__ = e30007;
var statearr_30008_30017 = state_29995;
(statearr_30008_30017[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30018 = state_29995;
state_29995 = G__30018;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__ = function(state_29995){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____1.call(this,state_29995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto___30010,out))
})();
var state__27912__auto__ = (function (){var statearr_30009 = f__27911__auto__.call(null);
(statearr_30009[(6)] = c__27910__auto___30010);

return statearr_30009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto___30010,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30019,opts){
var map__30020 = p__30019;
var map__30020__$1 = (((((!((map__30020 == null))))?(((((map__30020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30020):map__30020);
var eval_body = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30022){var e = e30022;
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
return (function (p1__30023_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30023_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30024){
var vec__30025 = p__30024;
var k = cljs.core.nth.call(null,vec__30025,(0),null);
var v = cljs.core.nth.call(null,vec__30025,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30028){
var vec__30029 = p__30028;
var k = cljs.core.nth.call(null,vec__30029,(0),null);
var v = cljs.core.nth.call(null,vec__30029,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30035,p__30036){
var map__30037 = p__30035;
var map__30037__$1 = (((((!((map__30037 == null))))?(((((map__30037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30037):map__30037);
var opts = map__30037__$1;
var before_jsload = cljs.core.get.call(null,map__30037__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30037__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30037__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30038 = p__30036;
var map__30038__$1 = (((((!((map__30038 == null))))?(((((map__30038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038):map__30038);
var msg = map__30038__$1;
var files = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30192){
var state_val_30193 = (state_30192[(1)]);
if((state_val_30193 === (7))){
var inst_30053 = (state_30192[(7)]);
var inst_30055 = (state_30192[(8)]);
var inst_30052 = (state_30192[(9)]);
var inst_30054 = (state_30192[(10)]);
var inst_30060 = cljs.core._nth.call(null,inst_30053,inst_30055);
var inst_30061 = figwheel.client.file_reloading.eval_body.call(null,inst_30060,opts);
var inst_30062 = (inst_30055 + (1));
var tmp30194 = inst_30053;
var tmp30195 = inst_30052;
var tmp30196 = inst_30054;
var inst_30052__$1 = tmp30195;
var inst_30053__$1 = tmp30194;
var inst_30054__$1 = tmp30196;
var inst_30055__$1 = inst_30062;
var state_30192__$1 = (function (){var statearr_30197 = state_30192;
(statearr_30197[(11)] = inst_30061);

(statearr_30197[(7)] = inst_30053__$1);

(statearr_30197[(8)] = inst_30055__$1);

(statearr_30197[(9)] = inst_30052__$1);

(statearr_30197[(10)] = inst_30054__$1);

return statearr_30197;
})();
var statearr_30198_30281 = state_30192__$1;
(statearr_30198_30281[(2)] = null);

(statearr_30198_30281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (20))){
var inst_30095 = (state_30192[(12)]);
var inst_30103 = figwheel.client.file_reloading.sort_files.call(null,inst_30095);
var state_30192__$1 = state_30192;
var statearr_30199_30282 = state_30192__$1;
(statearr_30199_30282[(2)] = inst_30103);

(statearr_30199_30282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (27))){
var state_30192__$1 = state_30192;
var statearr_30200_30283 = state_30192__$1;
(statearr_30200_30283[(2)] = null);

(statearr_30200_30283[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (1))){
var inst_30044 = (state_30192[(13)]);
var inst_30041 = before_jsload.call(null,files);
var inst_30042 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30043 = (function (){return ((function (inst_30044,inst_30041,inst_30042,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30032_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30032_SHARP_);
});
;})(inst_30044,inst_30041,inst_30042,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30044__$1 = cljs.core.filter.call(null,inst_30043,files);
var inst_30045 = cljs.core.not_empty.call(null,inst_30044__$1);
var state_30192__$1 = (function (){var statearr_30201 = state_30192;
(statearr_30201[(14)] = inst_30041);

(statearr_30201[(13)] = inst_30044__$1);

(statearr_30201[(15)] = inst_30042);

return statearr_30201;
})();
if(cljs.core.truth_(inst_30045)){
var statearr_30202_30284 = state_30192__$1;
(statearr_30202_30284[(1)] = (2));

} else {
var statearr_30203_30285 = state_30192__$1;
(statearr_30203_30285[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (24))){
var state_30192__$1 = state_30192;
var statearr_30204_30286 = state_30192__$1;
(statearr_30204_30286[(2)] = null);

(statearr_30204_30286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (39))){
var inst_30145 = (state_30192[(16)]);
var state_30192__$1 = state_30192;
var statearr_30205_30287 = state_30192__$1;
(statearr_30205_30287[(2)] = inst_30145);

(statearr_30205_30287[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (46))){
var inst_30187 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30206_30288 = state_30192__$1;
(statearr_30206_30288[(2)] = inst_30187);

(statearr_30206_30288[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (4))){
var inst_30089 = (state_30192[(2)]);
var inst_30090 = cljs.core.List.EMPTY;
var inst_30091 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30090);
var inst_30092 = (function (){return ((function (inst_30089,inst_30090,inst_30091,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30033_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30033_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30033_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30033_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_30089,inst_30090,inst_30091,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30093 = cljs.core.filter.call(null,inst_30092,files);
var inst_30094 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30095 = cljs.core.concat.call(null,inst_30093,inst_30094);
var state_30192__$1 = (function (){var statearr_30207 = state_30192;
(statearr_30207[(12)] = inst_30095);

(statearr_30207[(17)] = inst_30089);

(statearr_30207[(18)] = inst_30091);

return statearr_30207;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30208_30289 = state_30192__$1;
(statearr_30208_30289[(1)] = (16));

} else {
var statearr_30209_30290 = state_30192__$1;
(statearr_30209_30290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (15))){
var inst_30079 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30210_30291 = state_30192__$1;
(statearr_30210_30291[(2)] = inst_30079);

(statearr_30210_30291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (21))){
var inst_30105 = (state_30192[(19)]);
var inst_30105__$1 = (state_30192[(2)]);
var inst_30106 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30105__$1);
var state_30192__$1 = (function (){var statearr_30211 = state_30192;
(statearr_30211[(19)] = inst_30105__$1);

return statearr_30211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30192__$1,(22),inst_30106);
} else {
if((state_val_30193 === (31))){
var inst_30190 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30192__$1,inst_30190);
} else {
if((state_val_30193 === (32))){
var inst_30145 = (state_30192[(16)]);
var inst_30150 = inst_30145.cljs$lang$protocol_mask$partition0$;
var inst_30151 = (inst_30150 & (64));
var inst_30152 = inst_30145.cljs$core$ISeq$;
var inst_30153 = (cljs.core.PROTOCOL_SENTINEL === inst_30152);
var inst_30154 = ((inst_30151) || (inst_30153));
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30154)){
var statearr_30212_30292 = state_30192__$1;
(statearr_30212_30292[(1)] = (35));

} else {
var statearr_30213_30293 = state_30192__$1;
(statearr_30213_30293[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (40))){
var inst_30167 = (state_30192[(20)]);
var inst_30166 = (state_30192[(2)]);
var inst_30167__$1 = cljs.core.get.call(null,inst_30166,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30168 = cljs.core.get.call(null,inst_30166,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30169 = cljs.core.not_empty.call(null,inst_30167__$1);
var state_30192__$1 = (function (){var statearr_30214 = state_30192;
(statearr_30214[(21)] = inst_30168);

(statearr_30214[(20)] = inst_30167__$1);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30169)){
var statearr_30215_30294 = state_30192__$1;
(statearr_30215_30294[(1)] = (41));

} else {
var statearr_30216_30295 = state_30192__$1;
(statearr_30216_30295[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (33))){
var state_30192__$1 = state_30192;
var statearr_30217_30296 = state_30192__$1;
(statearr_30217_30296[(2)] = false);

(statearr_30217_30296[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (13))){
var inst_30065 = (state_30192[(22)]);
var inst_30069 = cljs.core.chunk_first.call(null,inst_30065);
var inst_30070 = cljs.core.chunk_rest.call(null,inst_30065);
var inst_30071 = cljs.core.count.call(null,inst_30069);
var inst_30052 = inst_30070;
var inst_30053 = inst_30069;
var inst_30054 = inst_30071;
var inst_30055 = (0);
var state_30192__$1 = (function (){var statearr_30218 = state_30192;
(statearr_30218[(7)] = inst_30053);

(statearr_30218[(8)] = inst_30055);

(statearr_30218[(9)] = inst_30052);

(statearr_30218[(10)] = inst_30054);

return statearr_30218;
})();
var statearr_30219_30297 = state_30192__$1;
(statearr_30219_30297[(2)] = null);

(statearr_30219_30297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (22))){
var inst_30105 = (state_30192[(19)]);
var inst_30108 = (state_30192[(23)]);
var inst_30113 = (state_30192[(24)]);
var inst_30109 = (state_30192[(25)]);
var inst_30108__$1 = (state_30192[(2)]);
var inst_30109__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30108__$1);
var inst_30110 = (function (){var all_files = inst_30105;
var res_SINGLEQUOTE_ = inst_30108__$1;
var res = inst_30109__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30105,inst_30108,inst_30113,inst_30109,inst_30108__$1,inst_30109__$1,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30034_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30034_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30105,inst_30108,inst_30113,inst_30109,inst_30108__$1,inst_30109__$1,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30111 = cljs.core.filter.call(null,inst_30110,inst_30108__$1);
var inst_30112 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30113__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30112);
var inst_30114 = cljs.core.not_empty.call(null,inst_30113__$1);
var state_30192__$1 = (function (){var statearr_30220 = state_30192;
(statearr_30220[(23)] = inst_30108__$1);

(statearr_30220[(24)] = inst_30113__$1);

(statearr_30220[(26)] = inst_30111);

(statearr_30220[(25)] = inst_30109__$1);

return statearr_30220;
})();
if(cljs.core.truth_(inst_30114)){
var statearr_30221_30298 = state_30192__$1;
(statearr_30221_30298[(1)] = (23));

} else {
var statearr_30222_30299 = state_30192__$1;
(statearr_30222_30299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (36))){
var state_30192__$1 = state_30192;
var statearr_30223_30300 = state_30192__$1;
(statearr_30223_30300[(2)] = false);

(statearr_30223_30300[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (41))){
var inst_30167 = (state_30192[(20)]);
var inst_30171 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30172 = cljs.core.map.call(null,inst_30171,inst_30167);
var inst_30173 = cljs.core.pr_str.call(null,inst_30172);
var inst_30174 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30173)].join('');
var inst_30175 = figwheel.client.utils.log.call(null,inst_30174);
var state_30192__$1 = state_30192;
var statearr_30224_30301 = state_30192__$1;
(statearr_30224_30301[(2)] = inst_30175);

(statearr_30224_30301[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (43))){
var inst_30168 = (state_30192[(21)]);
var inst_30178 = (state_30192[(2)]);
var inst_30179 = cljs.core.not_empty.call(null,inst_30168);
var state_30192__$1 = (function (){var statearr_30225 = state_30192;
(statearr_30225[(27)] = inst_30178);

return statearr_30225;
})();
if(cljs.core.truth_(inst_30179)){
var statearr_30226_30302 = state_30192__$1;
(statearr_30226_30302[(1)] = (44));

} else {
var statearr_30227_30303 = state_30192__$1;
(statearr_30227_30303[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (29))){
var inst_30105 = (state_30192[(19)]);
var inst_30145 = (state_30192[(16)]);
var inst_30108 = (state_30192[(23)]);
var inst_30113 = (state_30192[(24)]);
var inst_30111 = (state_30192[(26)]);
var inst_30109 = (state_30192[(25)]);
var inst_30141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30144 = (function (){var all_files = inst_30105;
var res_SINGLEQUOTE_ = inst_30108;
var res = inst_30109;
var files_not_loaded = inst_30111;
var dependencies_that_loaded = inst_30113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30145,inst_30108,inst_30113,inst_30111,inst_30109,inst_30141,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30143){
var map__30228 = p__30143;
var map__30228__$1 = (((((!((map__30228 == null))))?(((((map__30228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30228):map__30228);
var namespace = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30145,inst_30108,inst_30113,inst_30111,inst_30109,inst_30141,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30145__$1 = cljs.core.group_by.call(null,inst_30144,inst_30111);
var inst_30147 = (inst_30145__$1 == null);
var inst_30148 = cljs.core.not.call(null,inst_30147);
var state_30192__$1 = (function (){var statearr_30230 = state_30192;
(statearr_30230[(16)] = inst_30145__$1);

(statearr_30230[(28)] = inst_30141);

return statearr_30230;
})();
if(inst_30148){
var statearr_30231_30304 = state_30192__$1;
(statearr_30231_30304[(1)] = (32));

} else {
var statearr_30232_30305 = state_30192__$1;
(statearr_30232_30305[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (44))){
var inst_30168 = (state_30192[(21)]);
var inst_30181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30168);
var inst_30182 = cljs.core.pr_str.call(null,inst_30181);
var inst_30183 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30182)].join('');
var inst_30184 = figwheel.client.utils.log.call(null,inst_30183);
var state_30192__$1 = state_30192;
var statearr_30233_30306 = state_30192__$1;
(statearr_30233_30306[(2)] = inst_30184);

(statearr_30233_30306[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (6))){
var inst_30086 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30234_30307 = state_30192__$1;
(statearr_30234_30307[(2)] = inst_30086);

(statearr_30234_30307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (28))){
var inst_30111 = (state_30192[(26)]);
var inst_30138 = (state_30192[(2)]);
var inst_30139 = cljs.core.not_empty.call(null,inst_30111);
var state_30192__$1 = (function (){var statearr_30235 = state_30192;
(statearr_30235[(29)] = inst_30138);

return statearr_30235;
})();
if(cljs.core.truth_(inst_30139)){
var statearr_30236_30308 = state_30192__$1;
(statearr_30236_30308[(1)] = (29));

} else {
var statearr_30237_30309 = state_30192__$1;
(statearr_30237_30309[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (25))){
var inst_30109 = (state_30192[(25)]);
var inst_30125 = (state_30192[(2)]);
var inst_30126 = cljs.core.not_empty.call(null,inst_30109);
var state_30192__$1 = (function (){var statearr_30238 = state_30192;
(statearr_30238[(30)] = inst_30125);

return statearr_30238;
})();
if(cljs.core.truth_(inst_30126)){
var statearr_30239_30310 = state_30192__$1;
(statearr_30239_30310[(1)] = (26));

} else {
var statearr_30240_30311 = state_30192__$1;
(statearr_30240_30311[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (34))){
var inst_30161 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30161)){
var statearr_30241_30312 = state_30192__$1;
(statearr_30241_30312[(1)] = (38));

} else {
var statearr_30242_30313 = state_30192__$1;
(statearr_30242_30313[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (17))){
var state_30192__$1 = state_30192;
var statearr_30243_30314 = state_30192__$1;
(statearr_30243_30314[(2)] = recompile_dependents);

(statearr_30243_30314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (3))){
var state_30192__$1 = state_30192;
var statearr_30244_30315 = state_30192__$1;
(statearr_30244_30315[(2)] = null);

(statearr_30244_30315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (12))){
var inst_30082 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30245_30316 = state_30192__$1;
(statearr_30245_30316[(2)] = inst_30082);

(statearr_30245_30316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (2))){
var inst_30044 = (state_30192[(13)]);
var inst_30051 = cljs.core.seq.call(null,inst_30044);
var inst_30052 = inst_30051;
var inst_30053 = null;
var inst_30054 = (0);
var inst_30055 = (0);
var state_30192__$1 = (function (){var statearr_30246 = state_30192;
(statearr_30246[(7)] = inst_30053);

(statearr_30246[(8)] = inst_30055);

(statearr_30246[(9)] = inst_30052);

(statearr_30246[(10)] = inst_30054);

return statearr_30246;
})();
var statearr_30247_30317 = state_30192__$1;
(statearr_30247_30317[(2)] = null);

(statearr_30247_30317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (23))){
var inst_30105 = (state_30192[(19)]);
var inst_30108 = (state_30192[(23)]);
var inst_30113 = (state_30192[(24)]);
var inst_30111 = (state_30192[(26)]);
var inst_30109 = (state_30192[(25)]);
var inst_30116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30118 = (function (){var all_files = inst_30105;
var res_SINGLEQUOTE_ = inst_30108;
var res = inst_30109;
var files_not_loaded = inst_30111;
var dependencies_that_loaded = inst_30113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30108,inst_30113,inst_30111,inst_30109,inst_30116,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30117){
var map__30248 = p__30117;
var map__30248__$1 = (((((!((map__30248 == null))))?(((((map__30248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30248):map__30248);
var request_url = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30108,inst_30113,inst_30111,inst_30109,inst_30116,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30119 = cljs.core.reverse.call(null,inst_30113);
var inst_30120 = cljs.core.map.call(null,inst_30118,inst_30119);
var inst_30121 = cljs.core.pr_str.call(null,inst_30120);
var inst_30122 = figwheel.client.utils.log.call(null,inst_30121);
var state_30192__$1 = (function (){var statearr_30250 = state_30192;
(statearr_30250[(31)] = inst_30116);

return statearr_30250;
})();
var statearr_30251_30318 = state_30192__$1;
(statearr_30251_30318[(2)] = inst_30122);

(statearr_30251_30318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (35))){
var state_30192__$1 = state_30192;
var statearr_30252_30319 = state_30192__$1;
(statearr_30252_30319[(2)] = true);

(statearr_30252_30319[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (19))){
var inst_30095 = (state_30192[(12)]);
var inst_30101 = figwheel.client.file_reloading.expand_files.call(null,inst_30095);
var state_30192__$1 = state_30192;
var statearr_30253_30320 = state_30192__$1;
(statearr_30253_30320[(2)] = inst_30101);

(statearr_30253_30320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (11))){
var state_30192__$1 = state_30192;
var statearr_30254_30321 = state_30192__$1;
(statearr_30254_30321[(2)] = null);

(statearr_30254_30321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (9))){
var inst_30084 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30255_30322 = state_30192__$1;
(statearr_30255_30322[(2)] = inst_30084);

(statearr_30255_30322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (5))){
var inst_30055 = (state_30192[(8)]);
var inst_30054 = (state_30192[(10)]);
var inst_30057 = (inst_30055 < inst_30054);
var inst_30058 = inst_30057;
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30058)){
var statearr_30256_30323 = state_30192__$1;
(statearr_30256_30323[(1)] = (7));

} else {
var statearr_30257_30324 = state_30192__$1;
(statearr_30257_30324[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (14))){
var inst_30065 = (state_30192[(22)]);
var inst_30074 = cljs.core.first.call(null,inst_30065);
var inst_30075 = figwheel.client.file_reloading.eval_body.call(null,inst_30074,opts);
var inst_30076 = cljs.core.next.call(null,inst_30065);
var inst_30052 = inst_30076;
var inst_30053 = null;
var inst_30054 = (0);
var inst_30055 = (0);
var state_30192__$1 = (function (){var statearr_30258 = state_30192;
(statearr_30258[(7)] = inst_30053);

(statearr_30258[(8)] = inst_30055);

(statearr_30258[(9)] = inst_30052);

(statearr_30258[(32)] = inst_30075);

(statearr_30258[(10)] = inst_30054);

return statearr_30258;
})();
var statearr_30259_30325 = state_30192__$1;
(statearr_30259_30325[(2)] = null);

(statearr_30259_30325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (45))){
var state_30192__$1 = state_30192;
var statearr_30260_30326 = state_30192__$1;
(statearr_30260_30326[(2)] = null);

(statearr_30260_30326[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (26))){
var inst_30105 = (state_30192[(19)]);
var inst_30108 = (state_30192[(23)]);
var inst_30113 = (state_30192[(24)]);
var inst_30111 = (state_30192[(26)]);
var inst_30109 = (state_30192[(25)]);
var inst_30128 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30130 = (function (){var all_files = inst_30105;
var res_SINGLEQUOTE_ = inst_30108;
var res = inst_30109;
var files_not_loaded = inst_30111;
var dependencies_that_loaded = inst_30113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30108,inst_30113,inst_30111,inst_30109,inst_30128,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30129){
var map__30261 = p__30129;
var map__30261__$1 = (((((!((map__30261 == null))))?(((((map__30261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30261):map__30261);
var namespace = cljs.core.get.call(null,map__30261__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30108,inst_30113,inst_30111,inst_30109,inst_30128,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30131 = cljs.core.map.call(null,inst_30130,inst_30109);
var inst_30132 = cljs.core.pr_str.call(null,inst_30131);
var inst_30133 = figwheel.client.utils.log.call(null,inst_30132);
var inst_30134 = (function (){var all_files = inst_30105;
var res_SINGLEQUOTE_ = inst_30108;
var res = inst_30109;
var files_not_loaded = inst_30111;
var dependencies_that_loaded = inst_30113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30108,inst_30113,inst_30111,inst_30109,inst_30128,inst_30130,inst_30131,inst_30132,inst_30133,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30105,inst_30108,inst_30113,inst_30111,inst_30109,inst_30128,inst_30130,inst_30131,inst_30132,inst_30133,state_val_30193,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30135 = setTimeout(inst_30134,(10));
var state_30192__$1 = (function (){var statearr_30263 = state_30192;
(statearr_30263[(33)] = inst_30128);

(statearr_30263[(34)] = inst_30133);

return statearr_30263;
})();
var statearr_30264_30327 = state_30192__$1;
(statearr_30264_30327[(2)] = inst_30135);

(statearr_30264_30327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (16))){
var state_30192__$1 = state_30192;
var statearr_30265_30328 = state_30192__$1;
(statearr_30265_30328[(2)] = reload_dependents);

(statearr_30265_30328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (38))){
var inst_30145 = (state_30192[(16)]);
var inst_30163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30145);
var state_30192__$1 = state_30192;
var statearr_30266_30329 = state_30192__$1;
(statearr_30266_30329[(2)] = inst_30163);

(statearr_30266_30329[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (30))){
var state_30192__$1 = state_30192;
var statearr_30267_30330 = state_30192__$1;
(statearr_30267_30330[(2)] = null);

(statearr_30267_30330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (10))){
var inst_30065 = (state_30192[(22)]);
var inst_30067 = cljs.core.chunked_seq_QMARK_.call(null,inst_30065);
var state_30192__$1 = state_30192;
if(inst_30067){
var statearr_30268_30331 = state_30192__$1;
(statearr_30268_30331[(1)] = (13));

} else {
var statearr_30269_30332 = state_30192__$1;
(statearr_30269_30332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (18))){
var inst_30099 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30099)){
var statearr_30270_30333 = state_30192__$1;
(statearr_30270_30333[(1)] = (19));

} else {
var statearr_30271_30334 = state_30192__$1;
(statearr_30271_30334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (42))){
var state_30192__$1 = state_30192;
var statearr_30272_30335 = state_30192__$1;
(statearr_30272_30335[(2)] = null);

(statearr_30272_30335[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (37))){
var inst_30158 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30273_30336 = state_30192__$1;
(statearr_30273_30336[(2)] = inst_30158);

(statearr_30273_30336[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (8))){
var inst_30065 = (state_30192[(22)]);
var inst_30052 = (state_30192[(9)]);
var inst_30065__$1 = cljs.core.seq.call(null,inst_30052);
var state_30192__$1 = (function (){var statearr_30274 = state_30192;
(statearr_30274[(22)] = inst_30065__$1);

return statearr_30274;
})();
if(inst_30065__$1){
var statearr_30275_30337 = state_30192__$1;
(statearr_30275_30337[(1)] = (10));

} else {
var statearr_30276_30338 = state_30192__$1;
(statearr_30276_30338[(1)] = (11));

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
});})(c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27887__auto__,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____0 = (function (){
var statearr_30277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30277[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__);

(statearr_30277[(1)] = (1));

return statearr_30277;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____1 = (function (state_30192){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_30192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e30278){if((e30278 instanceof Object)){
var ex__27891__auto__ = e30278;
var statearr_30279_30339 = state_30192;
(statearr_30279_30339[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30340 = state_30192;
state_30192 = G__30340;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__ = function(state_30192){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____1.call(this,state_30192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27912__auto__ = (function (){var statearr_30280 = f__27911__auto__.call(null);
(statearr_30280[(6)] = c__27910__auto__);

return statearr_30280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__,map__30037,map__30037__$1,opts,before_jsload,on_jsload,reload_dependents,map__30038,map__30038__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27910__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30343,link){
var map__30344 = p__30343;
var map__30344__$1 = (((((!((map__30344 == null))))?(((((map__30344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30344):map__30344);
var file = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30344,map__30344__$1,file){
return (function (p1__30341_SHARP_,p2__30342_SHARP_){
if(cljs.core._EQ_.call(null,p1__30341_SHARP_,p2__30342_SHARP_)){
return p1__30341_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30344,map__30344__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30347){
var map__30348 = p__30347;
var map__30348__$1 = (((((!((map__30348 == null))))?(((((map__30348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30348):map__30348);
var match_length = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30346_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30346_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30350_SHARP_,p2__30351_SHARP_){
return cljs.core.assoc.call(null,p1__30350_SHARP_,cljs.core.get.call(null,p2__30351_SHARP_,key),p2__30351_SHARP_);
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
var loaded_f_datas_30352 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30352);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30352);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30353,p__30354){
var map__30355 = p__30353;
var map__30355__$1 = (((((!((map__30355 == null))))?(((((map__30355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30355):map__30355);
var on_cssload = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30356 = p__30354;
var map__30356__$1 = (((((!((map__30356 == null))))?(((((map__30356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);
var files_msg = map__30356__$1;
var files = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1545901506802
