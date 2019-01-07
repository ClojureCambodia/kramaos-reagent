// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33082 = arguments.length;
var i__4642__auto___33083 = (0);
while(true){
if((i__4642__auto___33083 < len__4641__auto___33082)){
args__4647__auto__.push((arguments[i__4642__auto___33083]));

var G__33084 = (i__4642__auto___33083 + (1));
i__4642__auto___33083 = G__33084;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33078){
var vec__33079 = p__33078;
var default$ = cljs.core.nth.call(null,vec__33079,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if((!((cljs.core.deref.call(null,temp_a) == null)))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq33076){
var G__33077 = cljs.core.first.call(null,seq33076);
var seq33076__$1 = cljs.core.next.call(null,seq33076);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33077,seq33076__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33091 = arguments.length;
var i__4642__auto___33092 = (0);
while(true){
if((i__4642__auto___33092 < len__4641__auto___33091)){
args__4647__auto__.push((arguments[i__4642__auto___33092]));

var G__33093 = (i__4642__auto___33092 + (1));
i__4642__auto___33092 = G__33093;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33087){
var vec__33088 = p__33087;
var default$ = cljs.core.nth.call(null,vec__33088,(0),null);
var or__4047__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq33085){
var G__33086 = cljs.core.first.call(null,seq33085);
var seq33085__$1 = cljs.core.next.call(null,seq33085);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33086,seq33085__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33096 = arguments.length;
var i__4642__auto___33097 = (0);
while(true){
if((i__4642__auto___33097 < len__4641__auto___33096)){
args__4647__auto__.push((arguments[i__4642__auto___33097]));

var G__33098 = (i__4642__auto___33097 + (1));
i__4642__auto___33097 = G__33098;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq33094){
var G__33095 = cljs.core.first.call(null,seq33094);
var seq33094__$1 = cljs.core.next.call(null,seq33094);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33095,seq33094__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33105 = arguments.length;
var i__4642__auto___33106 = (0);
while(true){
if((i__4642__auto___33106 < len__4641__auto___33105)){
args__4647__auto__.push((arguments[i__4642__auto___33106]));

var G__33107 = (i__4642__auto___33106 + (1));
i__4642__auto___33106 = G__33107;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33101){
var vec__33102 = p__33101;
var default$ = cljs.core.nth.call(null,vec__33102,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq33099){
var G__33100 = cljs.core.first.call(null,seq33099);
var seq33099__$1 = cljs.core.next.call(null,seq33099);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33100,seq33099__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33114 = arguments.length;
var i__4642__auto___33115 = (0);
while(true){
if((i__4642__auto___33115 < len__4641__auto___33114)){
args__4647__auto__.push((arguments[i__4642__auto___33115]));

var G__33116 = (i__4642__auto___33115 + (1));
i__4642__auto___33115 = G__33116;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33110){
var vec__33111 = p__33110;
var default$ = cljs.core.nth.call(null,vec__33111,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq33108){
var G__33109 = cljs.core.first.call(null,seq33108);
var seq33108__$1 = cljs.core.next.call(null,seq33108);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33109,seq33108__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33121 = arguments.length;
var i__4642__auto___33122 = (0);
while(true){
if((i__4642__auto___33122 < len__4641__auto___33121)){
args__4647__auto__.push((arguments[i__4642__auto___33122]));

var G__33123 = (i__4642__auto___33122 + (1));
i__4642__auto___33122 = G__33123;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33117_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__33117_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq33118){
var G__33119 = cljs.core.first.call(null,seq33118);
var seq33118__$1 = cljs.core.next.call(null,seq33118);
var G__33120 = cljs.core.first.call(null,seq33118__$1);
var seq33118__$2 = cljs.core.next.call(null,seq33118__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33119,G__33120,seq33118__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33128 = arguments.length;
var i__4642__auto___33129 = (0);
while(true){
if((i__4642__auto___33129 < len__4641__auto___33128)){
args__4647__auto__.push((arguments[i__4642__auto___33129]));

var G__33130 = (i__4642__auto___33129 + (1));
i__4642__auto___33129 = G__33130;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33124_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__33124_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq33125){
var G__33126 = cljs.core.first.call(null,seq33125);
var seq33125__$1 = cljs.core.next.call(null,seq33125);
var G__33127 = cljs.core.first.call(null,seq33125__$1);
var seq33125__$2 = cljs.core.next.call(null,seq33125__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33126,G__33127,seq33125__$2);
});


//# sourceMappingURL=session.js.map?rel=1545897039468
