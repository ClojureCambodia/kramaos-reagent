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
var len__4641__auto___37913 = arguments.length;
var i__4642__auto___37914 = (0);
while(true){
if((i__4642__auto___37914 < len__4641__auto___37913)){
args__4647__auto__.push((arguments[i__4642__auto___37914]));

var G__37915 = (i__4642__auto___37914 + (1));
i__4642__auto___37914 = G__37915;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__37909){
var vec__37910 = p__37909;
var default$ = cljs.core.nth.call(null,vec__37910,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if((!((cljs.core.deref.call(null,temp_a) == null)))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq37907){
var G__37908 = cljs.core.first.call(null,seq37907);
var seq37907__$1 = cljs.core.next.call(null,seq37907);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37908,seq37907__$1);
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
var len__4641__auto___37922 = arguments.length;
var i__4642__auto___37923 = (0);
while(true){
if((i__4642__auto___37923 < len__4641__auto___37922)){
args__4647__auto__.push((arguments[i__4642__auto___37923]));

var G__37924 = (i__4642__auto___37923 + (1));
i__4642__auto___37923 = G__37924;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__37918){
var vec__37919 = p__37918;
var default$ = cljs.core.nth.call(null,vec__37919,(0),null);
var or__4047__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq37916){
var G__37917 = cljs.core.first.call(null,seq37916);
var seq37916__$1 = cljs.core.next.call(null,seq37916);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37917,seq37916__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37927 = arguments.length;
var i__4642__auto___37928 = (0);
while(true){
if((i__4642__auto___37928 < len__4641__auto___37927)){
args__4647__auto__.push((arguments[i__4642__auto___37928]));

var G__37929 = (i__4642__auto___37928 + (1));
i__4642__auto___37928 = G__37929;
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
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq37925){
var G__37926 = cljs.core.first.call(null,seq37925);
var seq37925__$1 = cljs.core.next.call(null,seq37925);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37926,seq37925__$1);
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
var len__4641__auto___37936 = arguments.length;
var i__4642__auto___37937 = (0);
while(true){
if((i__4642__auto___37937 < len__4641__auto___37936)){
args__4647__auto__.push((arguments[i__4642__auto___37937]));

var G__37938 = (i__4642__auto___37937 + (1));
i__4642__auto___37937 = G__37938;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__37932){
var vec__37933 = p__37932;
var default$ = cljs.core.nth.call(null,vec__37933,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq37930){
var G__37931 = cljs.core.first.call(null,seq37930);
var seq37930__$1 = cljs.core.next.call(null,seq37930);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37931,seq37930__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37945 = arguments.length;
var i__4642__auto___37946 = (0);
while(true){
if((i__4642__auto___37946 < len__4641__auto___37945)){
args__4647__auto__.push((arguments[i__4642__auto___37946]));

var G__37947 = (i__4642__auto___37946 + (1));
i__4642__auto___37946 = G__37947;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__37941){
var vec__37942 = p__37941;
var default$ = cljs.core.nth.call(null,vec__37942,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq37939){
var G__37940 = cljs.core.first.call(null,seq37939);
var seq37939__$1 = cljs.core.next.call(null,seq37939);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37940,seq37939__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37952 = arguments.length;
var i__4642__auto___37953 = (0);
while(true){
if((i__4642__auto___37953 < len__4641__auto___37952)){
args__4647__auto__.push((arguments[i__4642__auto___37953]));

var G__37954 = (i__4642__auto___37953 + (1));
i__4642__auto___37953 = G__37954;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__37948_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__37948_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq37949){
var G__37950 = cljs.core.first.call(null,seq37949);
var seq37949__$1 = cljs.core.next.call(null,seq37949);
var G__37951 = cljs.core.first.call(null,seq37949__$1);
var seq37949__$2 = cljs.core.next.call(null,seq37949__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37950,G__37951,seq37949__$2);
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
var len__4641__auto___37959 = arguments.length;
var i__4642__auto___37960 = (0);
while(true){
if((i__4642__auto___37960 < len__4641__auto___37959)){
args__4647__auto__.push((arguments[i__4642__auto___37960]));

var G__37961 = (i__4642__auto___37960 + (1));
i__4642__auto___37960 = G__37961;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__37955_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__37955_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq37956){
var G__37957 = cljs.core.first.call(null,seq37956);
var seq37956__$1 = cljs.core.next.call(null,seq37956);
var G__37958 = cljs.core.first.call(null,seq37956__$1);
var seq37956__$2 = cljs.core.next.call(null,seq37956__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37957,G__37958,seq37956__$2);
});


//# sourceMappingURL=session.js.map?rel=1545903843615
