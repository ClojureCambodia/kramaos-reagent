// Compiled by ClojureScript 1.10.439 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._header[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._header["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._has_body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._has_body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27072 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27072["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27073 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27073["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27074 = temp__5455__auto____$2;
return (o27074["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27075 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27075["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27076 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27076["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27077 = temp__5455__auto____$2;
return (o27077["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27078 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27078["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27079 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27079["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27080 = temp__5455__auto____$2;
return (o27080["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27081 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27081["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27082 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27082["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27083 = temp__5455__auto____$2;
return (o27083["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27084 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27084["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27085 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27085["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27086 = temp__5455__auto____$2;
return (o27086["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27087 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27087["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27088 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27088["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27089 = temp__5455__auto____$2;
return (o27089["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27090 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27090["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27091 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27091["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27092 = temp__5455__auto____$2;
return (o27092["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27094 = arguments.length;
var i__4642__auto___27095 = (0);
while(true){
if((i__4642__auto___27095 < len__4641__auto___27094)){
args__4647__auto__.push((arguments[i__4642__auto___27095]));

var G__27096 = (i__4642__auto___27095 + (1));
i__4642__auto___27095 = G__27096;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq27093){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27093));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27098 = arguments.length;
var i__4642__auto___27099 = (0);
while(true){
if((i__4642__auto___27099 < len__4641__auto___27098)){
args__4647__auto__.push((arguments[i__4642__auto___27099]));

var G__27100 = (i__4642__auto___27099 + (1));
i__4642__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq27097){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27097));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27102 = arguments.length;
var i__4642__auto___27103 = (0);
while(true){
if((i__4642__auto___27103 < len__4641__auto___27102)){
args__4647__auto__.push((arguments[i__4642__auto___27103]));

var G__27104 = (i__4642__auto___27103 + (1));
i__4642__auto___27103 = G__27104;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq27101){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27101));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27106 = arguments.length;
var i__4642__auto___27107 = (0);
while(true){
if((i__4642__auto___27107 < len__4641__auto___27106)){
args__4647__auto__.push((arguments[i__4642__auto___27107]));

var G__27108 = (i__4642__auto___27107 + (1));
i__4642__auto___27107 = G__27108;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27105){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27105));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27110 = arguments.length;
var i__4642__auto___27111 = (0);
while(true){
if((i__4642__auto___27111 < len__4641__auto___27110)){
args__4647__auto__.push((arguments[i__4642__auto___27111]));

var G__27112 = (i__4642__auto___27111 + (1));
i__4642__auto___27111 = G__27112;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq27109){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27109));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27114 = arguments.length;
var i__4642__auto___27115 = (0);
while(true){
if((i__4642__auto___27115 < len__4641__auto___27114)){
args__4647__auto__.push((arguments[i__4642__auto___27115]));

var G__27116 = (i__4642__auto___27115 + (1));
i__4642__auto___27115 = G__27116;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq27113){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27113));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27118 = arguments.length;
var i__4642__auto___27119 = (0);
while(true){
if((i__4642__auto___27119 < len__4641__auto___27118)){
args__4647__auto__.push((arguments[i__4642__auto___27119]));

var G__27120 = (i__4642__auto___27119 + (1));
i__4642__auto___27119 = G__27120;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq27117){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27117));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27128 = arguments.length;
var i__4642__auto___27129 = (0);
while(true){
if((i__4642__auto___27129 < len__4641__auto___27128)){
args__4647__auto__.push((arguments[i__4642__auto___27129]));

var G__27130 = (i__4642__auto___27129 + (1));
i__4642__auto___27129 = G__27130;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27124){
var vec__27125 = p__27124;
var state_override = cljs.core.nth.call(null,vec__27125,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__27125,state_override){
return (function (p1__27121_SHARP_){
return cljs.core.merge.call(null,p1__27121_SHARP_,state_override);
});})(vec__27125,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq27122){
var G__27123 = cljs.core.first.call(null,seq27122);
var seq27122__$1 = cljs.core.next.call(null,seq27122);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27123,seq27122__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27132 = arguments.length;
var i__4642__auto___27133 = (0);
while(true){
if((i__4642__auto___27133 < len__4641__auto___27132)){
args__4647__auto__.push((arguments[i__4642__auto___27133]));

var G__27134 = (i__4642__auto___27133 + (1));
i__4642__auto___27133 = G__27134;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq27131){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27131));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27137 = arguments.length;
var i__4642__auto___27138 = (0);
while(true){
if((i__4642__auto___27138 < len__4641__auto___27137)){
args__4647__auto__.push((arguments[i__4642__auto___27138]));

var G__27139 = (i__4642__auto___27138 + (1));
i__4642__auto___27138 = G__27139;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27135){
var G__27136 = cljs.core.first.call(null,seq27135);
var seq27135__$1 = cljs.core.next.call(null,seq27135);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27136,seq27135__$1);
});


//# sourceMappingURL=format.js.map?rel=1545903826133
