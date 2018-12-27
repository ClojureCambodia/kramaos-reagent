// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49293){
var map__49294 = p__49293;
var map__49294__$1 = (((((!((map__49294 == null))))?(((((map__49294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49294):map__49294);
var m = map__49294__$1;
var n = cljs.core.get.call(null,map__49294__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49296_49318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49297_49319 = null;
var count__49298_49320 = (0);
var i__49299_49321 = (0);
while(true){
if((i__49299_49321 < count__49298_49320)){
var f_49322 = cljs.core._nth.call(null,chunk__49297_49319,i__49299_49321);
cljs.core.println.call(null,"  ",f_49322);


var G__49323 = seq__49296_49318;
var G__49324 = chunk__49297_49319;
var G__49325 = count__49298_49320;
var G__49326 = (i__49299_49321 + (1));
seq__49296_49318 = G__49323;
chunk__49297_49319 = G__49324;
count__49298_49320 = G__49325;
i__49299_49321 = G__49326;
continue;
} else {
var temp__5457__auto___49327 = cljs.core.seq.call(null,seq__49296_49318);
if(temp__5457__auto___49327){
var seq__49296_49328__$1 = temp__5457__auto___49327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49296_49328__$1)){
var c__4461__auto___49329 = cljs.core.chunk_first.call(null,seq__49296_49328__$1);
var G__49330 = cljs.core.chunk_rest.call(null,seq__49296_49328__$1);
var G__49331 = c__4461__auto___49329;
var G__49332 = cljs.core.count.call(null,c__4461__auto___49329);
var G__49333 = (0);
seq__49296_49318 = G__49330;
chunk__49297_49319 = G__49331;
count__49298_49320 = G__49332;
i__49299_49321 = G__49333;
continue;
} else {
var f_49334 = cljs.core.first.call(null,seq__49296_49328__$1);
cljs.core.println.call(null,"  ",f_49334);


var G__49335 = cljs.core.next.call(null,seq__49296_49328__$1);
var G__49336 = null;
var G__49337 = (0);
var G__49338 = (0);
seq__49296_49318 = G__49335;
chunk__49297_49319 = G__49336;
count__49298_49320 = G__49337;
i__49299_49321 = G__49338;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49339 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49339);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49339)))?cljs.core.second.call(null,arglists_49339):arglists_49339));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49300_49340 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49301_49341 = null;
var count__49302_49342 = (0);
var i__49303_49343 = (0);
while(true){
if((i__49303_49343 < count__49302_49342)){
var vec__49304_49344 = cljs.core._nth.call(null,chunk__49301_49341,i__49303_49343);
var name_49345 = cljs.core.nth.call(null,vec__49304_49344,(0),null);
var map__49307_49346 = cljs.core.nth.call(null,vec__49304_49344,(1),null);
var map__49307_49347__$1 = (((((!((map__49307_49346 == null))))?(((((map__49307_49346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49307_49346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49307_49346):map__49307_49346);
var doc_49348 = cljs.core.get.call(null,map__49307_49347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49349 = cljs.core.get.call(null,map__49307_49347__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49345);

cljs.core.println.call(null," ",arglists_49349);

if(cljs.core.truth_(doc_49348)){
cljs.core.println.call(null," ",doc_49348);
} else {
}


var G__49350 = seq__49300_49340;
var G__49351 = chunk__49301_49341;
var G__49352 = count__49302_49342;
var G__49353 = (i__49303_49343 + (1));
seq__49300_49340 = G__49350;
chunk__49301_49341 = G__49351;
count__49302_49342 = G__49352;
i__49303_49343 = G__49353;
continue;
} else {
var temp__5457__auto___49354 = cljs.core.seq.call(null,seq__49300_49340);
if(temp__5457__auto___49354){
var seq__49300_49355__$1 = temp__5457__auto___49354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49300_49355__$1)){
var c__4461__auto___49356 = cljs.core.chunk_first.call(null,seq__49300_49355__$1);
var G__49357 = cljs.core.chunk_rest.call(null,seq__49300_49355__$1);
var G__49358 = c__4461__auto___49356;
var G__49359 = cljs.core.count.call(null,c__4461__auto___49356);
var G__49360 = (0);
seq__49300_49340 = G__49357;
chunk__49301_49341 = G__49358;
count__49302_49342 = G__49359;
i__49303_49343 = G__49360;
continue;
} else {
var vec__49309_49361 = cljs.core.first.call(null,seq__49300_49355__$1);
var name_49362 = cljs.core.nth.call(null,vec__49309_49361,(0),null);
var map__49312_49363 = cljs.core.nth.call(null,vec__49309_49361,(1),null);
var map__49312_49364__$1 = (((((!((map__49312_49363 == null))))?(((((map__49312_49363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49312_49363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49312_49363):map__49312_49363);
var doc_49365 = cljs.core.get.call(null,map__49312_49364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49366 = cljs.core.get.call(null,map__49312_49364__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49362);

cljs.core.println.call(null," ",arglists_49366);

if(cljs.core.truth_(doc_49365)){
cljs.core.println.call(null," ",doc_49365);
} else {
}


var G__49367 = cljs.core.next.call(null,seq__49300_49355__$1);
var G__49368 = null;
var G__49369 = (0);
var G__49370 = (0);
seq__49300_49340 = G__49367;
chunk__49301_49341 = G__49368;
count__49302_49342 = G__49369;
i__49303_49343 = G__49370;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__49314 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49315 = null;
var count__49316 = (0);
var i__49317 = (0);
while(true){
if((i__49317 < count__49316)){
var role = cljs.core._nth.call(null,chunk__49315,i__49317);
var temp__5457__auto___49371__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49371__$1)){
var spec_49372 = temp__5457__auto___49371__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49372));
} else {
}


var G__49373 = seq__49314;
var G__49374 = chunk__49315;
var G__49375 = count__49316;
var G__49376 = (i__49317 + (1));
seq__49314 = G__49373;
chunk__49315 = G__49374;
count__49316 = G__49375;
i__49317 = G__49376;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__49314);
if(temp__5457__auto____$1){
var seq__49314__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49314__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__49314__$1);
var G__49377 = cljs.core.chunk_rest.call(null,seq__49314__$1);
var G__49378 = c__4461__auto__;
var G__49379 = cljs.core.count.call(null,c__4461__auto__);
var G__49380 = (0);
seq__49314 = G__49377;
chunk__49315 = G__49378;
count__49316 = G__49379;
i__49317 = G__49380;
continue;
} else {
var role = cljs.core.first.call(null,seq__49314__$1);
var temp__5457__auto___49381__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49381__$2)){
var spec_49382 = temp__5457__auto___49381__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49382));
} else {
}


var G__49383 = cljs.core.next.call(null,seq__49314__$1);
var G__49384 = null;
var G__49385 = (0);
var G__49386 = (0);
seq__49314 = G__49383;
chunk__49315 = G__49384;
count__49316 = G__49385;
i__49317 = G__49386;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1545903865346
