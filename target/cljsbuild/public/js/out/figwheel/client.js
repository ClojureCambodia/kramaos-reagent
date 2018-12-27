// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31233){if((e31233 instanceof Error)){
var e = e31233;
return "Error: Unable to stringify";
} else {
throw e31233;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31236 = arguments.length;
switch (G__31236) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31234_SHARP_){
if(typeof p1__31234_SHARP_ === 'string'){
return p1__31234_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31234_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31239 = arguments.length;
var i__4642__auto___31240 = (0);
while(true){
if((i__4642__auto___31240 < len__4641__auto___31239)){
args__4647__auto__.push((arguments[i__4642__auto___31240]));

var G__31241 = (i__4642__auto___31240 + (1));
i__4642__auto___31240 = G__31241;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31238){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31238));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31243 = arguments.length;
var i__4642__auto___31244 = (0);
while(true){
if((i__4642__auto___31244 < len__4641__auto___31243)){
args__4647__auto__.push((arguments[i__4642__auto___31244]));

var G__31245 = (i__4642__auto___31244 + (1));
i__4642__auto___31244 = G__31245;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31242){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31242));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31246){
var map__31247 = p__31246;
var map__31247__$1 = (((((!((map__31247 == null))))?(((((map__31247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31247):map__31247);
var message = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27910__auto___31326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto___31326,ch){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto___31326,ch){
return (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (7))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31300_31327 = state_31298__$1;
(statearr_31300_31327[(2)] = inst_31294);

(statearr_31300_31327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (1))){
var state_31298__$1 = state_31298;
var statearr_31301_31328 = state_31298__$1;
(statearr_31301_31328[(2)] = null);

(statearr_31301_31328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (4))){
var inst_31251 = (state_31298[(7)]);
var inst_31251__$1 = (state_31298[(2)]);
var state_31298__$1 = (function (){var statearr_31302 = state_31298;
(statearr_31302[(7)] = inst_31251__$1);

return statearr_31302;
})();
if(cljs.core.truth_(inst_31251__$1)){
var statearr_31303_31329 = state_31298__$1;
(statearr_31303_31329[(1)] = (5));

} else {
var statearr_31304_31330 = state_31298__$1;
(statearr_31304_31330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (15))){
var inst_31258 = (state_31298[(8)]);
var inst_31273 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31258);
var inst_31274 = cljs.core.first.call(null,inst_31273);
var inst_31275 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31274);
var inst_31276 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31275)].join('');
var inst_31277 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31276);
var state_31298__$1 = state_31298;
var statearr_31305_31331 = state_31298__$1;
(statearr_31305_31331[(2)] = inst_31277);

(statearr_31305_31331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (13))){
var inst_31282 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31306_31332 = state_31298__$1;
(statearr_31306_31332[(2)] = inst_31282);

(statearr_31306_31332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (6))){
var state_31298__$1 = state_31298;
var statearr_31307_31333 = state_31298__$1;
(statearr_31307_31333[(2)] = null);

(statearr_31307_31333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (17))){
var inst_31280 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31308_31334 = state_31298__$1;
(statearr_31308_31334[(2)] = inst_31280);

(statearr_31308_31334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (12))){
var inst_31257 = (state_31298[(9)]);
var inst_31271 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31257,opts);
var state_31298__$1 = state_31298;
if(inst_31271){
var statearr_31309_31335 = state_31298__$1;
(statearr_31309_31335[(1)] = (15));

} else {
var statearr_31310_31336 = state_31298__$1;
(statearr_31310_31336[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (2))){
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31298__$1,(4),ch);
} else {
if((state_val_31299 === (11))){
var inst_31258 = (state_31298[(8)]);
var inst_31263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31264 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31258);
var inst_31265 = cljs.core.async.timeout.call(null,(1000));
var inst_31266 = [inst_31264,inst_31265];
var inst_31267 = (new cljs.core.PersistentVector(null,2,(5),inst_31263,inst_31266,null));
var state_31298__$1 = state_31298;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31298__$1,(14),inst_31267);
} else {
if((state_val_31299 === (9))){
var inst_31258 = (state_31298[(8)]);
var inst_31284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31285 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31258);
var inst_31286 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31285);
var inst_31287 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31286)].join('');
var inst_31288 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31287);
var state_31298__$1 = (function (){var statearr_31311 = state_31298;
(statearr_31311[(10)] = inst_31284);

return statearr_31311;
})();
var statearr_31312_31337 = state_31298__$1;
(statearr_31312_31337[(2)] = inst_31288);

(statearr_31312_31337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (5))){
var inst_31251 = (state_31298[(7)]);
var inst_31253 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31254 = (new cljs.core.PersistentArrayMap(null,2,inst_31253,null));
var inst_31255 = (new cljs.core.PersistentHashSet(null,inst_31254,null));
var inst_31256 = figwheel.client.focus_msgs.call(null,inst_31255,inst_31251);
var inst_31257 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31256);
var inst_31258 = cljs.core.first.call(null,inst_31256);
var inst_31259 = figwheel.client.autoload_QMARK_.call(null);
var state_31298__$1 = (function (){var statearr_31313 = state_31298;
(statearr_31313[(8)] = inst_31258);

(statearr_31313[(9)] = inst_31257);

return statearr_31313;
})();
if(cljs.core.truth_(inst_31259)){
var statearr_31314_31338 = state_31298__$1;
(statearr_31314_31338[(1)] = (8));

} else {
var statearr_31315_31339 = state_31298__$1;
(statearr_31315_31339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (14))){
var inst_31269 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31316_31340 = state_31298__$1;
(statearr_31316_31340[(2)] = inst_31269);

(statearr_31316_31340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (16))){
var state_31298__$1 = state_31298;
var statearr_31317_31341 = state_31298__$1;
(statearr_31317_31341[(2)] = null);

(statearr_31317_31341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (10))){
var inst_31290 = (state_31298[(2)]);
var state_31298__$1 = (function (){var statearr_31318 = state_31298;
(statearr_31318[(11)] = inst_31290);

return statearr_31318;
})();
var statearr_31319_31342 = state_31298__$1;
(statearr_31319_31342[(2)] = null);

(statearr_31319_31342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (8))){
var inst_31257 = (state_31298[(9)]);
var inst_31261 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31257,opts);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31261)){
var statearr_31320_31343 = state_31298__$1;
(statearr_31320_31343[(1)] = (11));

} else {
var statearr_31321_31344 = state_31298__$1;
(statearr_31321_31344[(1)] = (12));

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
});})(c__27910__auto___31326,ch))
;
return ((function (switch__27887__auto__,c__27910__auto___31326,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_31322 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31322[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__);

(statearr_31322[(1)] = (1));

return statearr_31322;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1 = (function (state_31298){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_31298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e31323){if((e31323 instanceof Object)){
var ex__27891__auto__ = e31323;
var statearr_31324_31345 = state_31298;
(statearr_31324_31345[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31346 = state_31298;
state_31298 = G__31346;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto___31326,ch))
})();
var state__27912__auto__ = (function (){var statearr_31325 = f__27911__auto__.call(null);
(statearr_31325[(6)] = c__27910__auto___31326);

return statearr_31325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto___31326,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31347_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31347_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31353 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31353){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31349 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31350 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31351 = true;
var _STAR_print_fn_STAR__temp_val__31352 = ((function (_STAR_print_newline_STAR__orig_val__31349,_STAR_print_fn_STAR__orig_val__31350,_STAR_print_newline_STAR__temp_val__31351,sb,base_path_31353){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__31349,_STAR_print_fn_STAR__orig_val__31350,_STAR_print_newline_STAR__temp_val__31351,sb,base_path_31353))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31351;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31352;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31350;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31349;
}}catch (e31348){if((e31348 instanceof Error)){
var e = e31348;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31353], null));
} else {
var e = e31348;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31353))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31354){
var map__31355 = p__31354;
var map__31355__$1 = (((((!((map__31355 == null))))?(((((map__31355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31355):map__31355);
var opts = map__31355__$1;
var build_id = cljs.core.get.call(null,map__31355__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31355,map__31355__$1,opts,build_id){
return (function (p__31357){
var vec__31358 = p__31357;
var seq__31359 = cljs.core.seq.call(null,vec__31358);
var first__31360 = cljs.core.first.call(null,seq__31359);
var seq__31359__$1 = cljs.core.next.call(null,seq__31359);
var map__31361 = first__31360;
var map__31361__$1 = (((((!((map__31361 == null))))?(((((map__31361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31361):map__31361);
var msg = map__31361__$1;
var msg_name = cljs.core.get.call(null,map__31361__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31359__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31358,seq__31359,first__31360,seq__31359__$1,map__31361,map__31361__$1,msg,msg_name,_,map__31355,map__31355__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31358,seq__31359,first__31360,seq__31359__$1,map__31361,map__31361__$1,msg,msg_name,_,map__31355,map__31355__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31355,map__31355__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31363){
var vec__31364 = p__31363;
var seq__31365 = cljs.core.seq.call(null,vec__31364);
var first__31366 = cljs.core.first.call(null,seq__31365);
var seq__31365__$1 = cljs.core.next.call(null,seq__31365);
var map__31367 = first__31366;
var map__31367__$1 = (((((!((map__31367 == null))))?(((((map__31367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31367):map__31367);
var msg = map__31367__$1;
var msg_name = cljs.core.get.call(null,map__31367__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31365__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31369){
var map__31370 = p__31369;
var map__31370__$1 = (((((!((map__31370 == null))))?(((((map__31370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31370):map__31370);
var on_compile_warning = cljs.core.get.call(null,map__31370__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31370__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31370,map__31370__$1,on_compile_warning,on_compile_fail){
return (function (p__31372){
var vec__31373 = p__31372;
var seq__31374 = cljs.core.seq.call(null,vec__31373);
var first__31375 = cljs.core.first.call(null,seq__31374);
var seq__31374__$1 = cljs.core.next.call(null,seq__31374);
var map__31376 = first__31375;
var map__31376__$1 = (((((!((map__31376 == null))))?(((((map__31376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31376):map__31376);
var msg = map__31376__$1;
var msg_name = cljs.core.get.call(null,map__31376__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31374__$1;
var pred__31378 = cljs.core._EQ_;
var expr__31379 = msg_name;
if(cljs.core.truth_(pred__31378.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31379))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31378.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31379))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31370,map__31370__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__,msg_hist,msg_names,msg){
return (function (state_31468){
var state_val_31469 = (state_31468[(1)]);
if((state_val_31469 === (7))){
var inst_31388 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
if(cljs.core.truth_(inst_31388)){
var statearr_31470_31517 = state_31468__$1;
(statearr_31470_31517[(1)] = (8));

} else {
var statearr_31471_31518 = state_31468__$1;
(statearr_31471_31518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (20))){
var inst_31462 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31472_31519 = state_31468__$1;
(statearr_31472_31519[(2)] = inst_31462);

(statearr_31472_31519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (27))){
var inst_31458 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31473_31520 = state_31468__$1;
(statearr_31473_31520[(2)] = inst_31458);

(statearr_31473_31520[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (1))){
var inst_31381 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31468__$1 = state_31468;
if(cljs.core.truth_(inst_31381)){
var statearr_31474_31521 = state_31468__$1;
(statearr_31474_31521[(1)] = (2));

} else {
var statearr_31475_31522 = state_31468__$1;
(statearr_31475_31522[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (24))){
var inst_31460 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31476_31523 = state_31468__$1;
(statearr_31476_31523[(2)] = inst_31460);

(statearr_31476_31523[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (4))){
var inst_31466 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31468__$1,inst_31466);
} else {
if((state_val_31469 === (15))){
var inst_31464 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31477_31524 = state_31468__$1;
(statearr_31477_31524[(2)] = inst_31464);

(statearr_31477_31524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (21))){
var inst_31417 = (state_31468[(2)]);
var inst_31418 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31419 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31418);
var state_31468__$1 = (function (){var statearr_31478 = state_31468;
(statearr_31478[(7)] = inst_31417);

return statearr_31478;
})();
var statearr_31479_31525 = state_31468__$1;
(statearr_31479_31525[(2)] = inst_31419);

(statearr_31479_31525[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (31))){
var inst_31447 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31468__$1 = state_31468;
if(inst_31447){
var statearr_31480_31526 = state_31468__$1;
(statearr_31480_31526[(1)] = (34));

} else {
var statearr_31481_31527 = state_31468__$1;
(statearr_31481_31527[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (32))){
var inst_31456 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31482_31528 = state_31468__$1;
(statearr_31482_31528[(2)] = inst_31456);

(statearr_31482_31528[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (33))){
var inst_31443 = (state_31468[(2)]);
var inst_31444 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31445 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31444);
var state_31468__$1 = (function (){var statearr_31483 = state_31468;
(statearr_31483[(8)] = inst_31443);

return statearr_31483;
})();
var statearr_31484_31529 = state_31468__$1;
(statearr_31484_31529[(2)] = inst_31445);

(statearr_31484_31529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (13))){
var inst_31402 = figwheel.client.heads_up.clear.call(null);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(16),inst_31402);
} else {
if((state_val_31469 === (22))){
var inst_31423 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31424 = figwheel.client.heads_up.append_warning_message.call(null,inst_31423);
var state_31468__$1 = state_31468;
var statearr_31485_31530 = state_31468__$1;
(statearr_31485_31530[(2)] = inst_31424);

(statearr_31485_31530[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (36))){
var inst_31454 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31486_31531 = state_31468__$1;
(statearr_31486_31531[(2)] = inst_31454);

(statearr_31486_31531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (29))){
var inst_31434 = (state_31468[(2)]);
var inst_31435 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31436 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31435);
var state_31468__$1 = (function (){var statearr_31487 = state_31468;
(statearr_31487[(9)] = inst_31434);

return statearr_31487;
})();
var statearr_31488_31532 = state_31468__$1;
(statearr_31488_31532[(2)] = inst_31436);

(statearr_31488_31532[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (6))){
var inst_31383 = (state_31468[(10)]);
var state_31468__$1 = state_31468;
var statearr_31489_31533 = state_31468__$1;
(statearr_31489_31533[(2)] = inst_31383);

(statearr_31489_31533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (28))){
var inst_31430 = (state_31468[(2)]);
var inst_31431 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31432 = figwheel.client.heads_up.display_warning.call(null,inst_31431);
var state_31468__$1 = (function (){var statearr_31490 = state_31468;
(statearr_31490[(11)] = inst_31430);

return statearr_31490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(29),inst_31432);
} else {
if((state_val_31469 === (25))){
var inst_31428 = figwheel.client.heads_up.clear.call(null);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(28),inst_31428);
} else {
if((state_val_31469 === (34))){
var inst_31449 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(37),inst_31449);
} else {
if((state_val_31469 === (17))){
var inst_31408 = (state_31468[(2)]);
var inst_31409 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31410 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31409);
var state_31468__$1 = (function (){var statearr_31491 = state_31468;
(statearr_31491[(12)] = inst_31408);

return statearr_31491;
})();
var statearr_31492_31534 = state_31468__$1;
(statearr_31492_31534[(2)] = inst_31410);

(statearr_31492_31534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (3))){
var inst_31400 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31468__$1 = state_31468;
if(inst_31400){
var statearr_31493_31535 = state_31468__$1;
(statearr_31493_31535[(1)] = (13));

} else {
var statearr_31494_31536 = state_31468__$1;
(statearr_31494_31536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (12))){
var inst_31396 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31495_31537 = state_31468__$1;
(statearr_31495_31537[(2)] = inst_31396);

(statearr_31495_31537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (2))){
var inst_31383 = (state_31468[(10)]);
var inst_31383__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31468__$1 = (function (){var statearr_31496 = state_31468;
(statearr_31496[(10)] = inst_31383__$1);

return statearr_31496;
})();
if(cljs.core.truth_(inst_31383__$1)){
var statearr_31497_31538 = state_31468__$1;
(statearr_31497_31538[(1)] = (5));

} else {
var statearr_31498_31539 = state_31468__$1;
(statearr_31498_31539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (23))){
var inst_31426 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31468__$1 = state_31468;
if(inst_31426){
var statearr_31499_31540 = state_31468__$1;
(statearr_31499_31540[(1)] = (25));

} else {
var statearr_31500_31541 = state_31468__$1;
(statearr_31500_31541[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (35))){
var state_31468__$1 = state_31468;
var statearr_31501_31542 = state_31468__$1;
(statearr_31501_31542[(2)] = null);

(statearr_31501_31542[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (19))){
var inst_31421 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31468__$1 = state_31468;
if(inst_31421){
var statearr_31502_31543 = state_31468__$1;
(statearr_31502_31543[(1)] = (22));

} else {
var statearr_31503_31544 = state_31468__$1;
(statearr_31503_31544[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (11))){
var inst_31392 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31504_31545 = state_31468__$1;
(statearr_31504_31545[(2)] = inst_31392);

(statearr_31504_31545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (9))){
var inst_31394 = figwheel.client.heads_up.clear.call(null);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(12),inst_31394);
} else {
if((state_val_31469 === (5))){
var inst_31385 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31468__$1 = state_31468;
var statearr_31505_31546 = state_31468__$1;
(statearr_31505_31546[(2)] = inst_31385);

(statearr_31505_31546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (14))){
var inst_31412 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31468__$1 = state_31468;
if(inst_31412){
var statearr_31506_31547 = state_31468__$1;
(statearr_31506_31547[(1)] = (18));

} else {
var statearr_31507_31548 = state_31468__$1;
(statearr_31507_31548[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (26))){
var inst_31438 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31468__$1 = state_31468;
if(inst_31438){
var statearr_31508_31549 = state_31468__$1;
(statearr_31508_31549[(1)] = (30));

} else {
var statearr_31509_31550 = state_31468__$1;
(statearr_31509_31550[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (16))){
var inst_31404 = (state_31468[(2)]);
var inst_31405 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31406 = figwheel.client.heads_up.display_exception.call(null,inst_31405);
var state_31468__$1 = (function (){var statearr_31510 = state_31468;
(statearr_31510[(13)] = inst_31404);

return statearr_31510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(17),inst_31406);
} else {
if((state_val_31469 === (30))){
var inst_31440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31441 = figwheel.client.heads_up.display_warning.call(null,inst_31440);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(33),inst_31441);
} else {
if((state_val_31469 === (10))){
var inst_31398 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31511_31551 = state_31468__$1;
(statearr_31511_31551[(2)] = inst_31398);

(statearr_31511_31551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (18))){
var inst_31414 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31415 = figwheel.client.heads_up.display_exception.call(null,inst_31414);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(21),inst_31415);
} else {
if((state_val_31469 === (37))){
var inst_31451 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31512_31552 = state_31468__$1;
(statearr_31512_31552[(2)] = inst_31451);

(statearr_31512_31552[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (8))){
var inst_31390 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(11),inst_31390);
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
});})(c__27910__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27887__auto__,c__27910__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0 = (function (){
var statearr_31513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31513[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__);

(statearr_31513[(1)] = (1));

return statearr_31513;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1 = (function (state_31468){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_31468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e31514){if((e31514 instanceof Object)){
var ex__27891__auto__ = e31514;
var statearr_31515_31553 = state_31468;
(statearr_31515_31553[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31554 = state_31468;
state_31468 = G__31554;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__ = function(state_31468){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1.call(this,state_31468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__,msg_hist,msg_names,msg))
})();
var state__27912__auto__ = (function (){var statearr_31516 = f__27911__auto__.call(null);
(statearr_31516[(6)] = c__27910__auto__);

return statearr_31516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__,msg_hist,msg_names,msg))
);

return c__27910__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27910__auto___31583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto___31583,ch){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto___31583,ch){
return (function (state_31569){
var state_val_31570 = (state_31569[(1)]);
if((state_val_31570 === (1))){
var state_31569__$1 = state_31569;
var statearr_31571_31584 = state_31569__$1;
(statearr_31571_31584[(2)] = null);

(statearr_31571_31584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (2))){
var state_31569__$1 = state_31569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31569__$1,(4),ch);
} else {
if((state_val_31570 === (3))){
var inst_31567 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31569__$1,inst_31567);
} else {
if((state_val_31570 === (4))){
var inst_31557 = (state_31569[(7)]);
var inst_31557__$1 = (state_31569[(2)]);
var state_31569__$1 = (function (){var statearr_31572 = state_31569;
(statearr_31572[(7)] = inst_31557__$1);

return statearr_31572;
})();
if(cljs.core.truth_(inst_31557__$1)){
var statearr_31573_31585 = state_31569__$1;
(statearr_31573_31585[(1)] = (5));

} else {
var statearr_31574_31586 = state_31569__$1;
(statearr_31574_31586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (5))){
var inst_31557 = (state_31569[(7)]);
var inst_31559 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31557);
var state_31569__$1 = state_31569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31569__$1,(8),inst_31559);
} else {
if((state_val_31570 === (6))){
var state_31569__$1 = state_31569;
var statearr_31575_31587 = state_31569__$1;
(statearr_31575_31587[(2)] = null);

(statearr_31575_31587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (7))){
var inst_31565 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
var statearr_31576_31588 = state_31569__$1;
(statearr_31576_31588[(2)] = inst_31565);

(statearr_31576_31588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (8))){
var inst_31561 = (state_31569[(2)]);
var state_31569__$1 = (function (){var statearr_31577 = state_31569;
(statearr_31577[(8)] = inst_31561);

return statearr_31577;
})();
var statearr_31578_31589 = state_31569__$1;
(statearr_31578_31589[(2)] = null);

(statearr_31578_31589[(1)] = (2));


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
});})(c__27910__auto___31583,ch))
;
return ((function (switch__27887__auto__,c__27910__auto___31583,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_31579 = [null,null,null,null,null,null,null,null,null];
(statearr_31579[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27888__auto__);

(statearr_31579[(1)] = (1));

return statearr_31579;
});
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1 = (function (state_31569){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_31569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e31580){if((e31580 instanceof Object)){
var ex__27891__auto__ = e31580;
var statearr_31581_31590 = state_31569;
(statearr_31581_31590[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31591 = state_31569;
state_31569 = G__31591;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__ = function(state_31569){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1.call(this,state_31569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto___31583,ch))
})();
var state__27912__auto__ = (function (){var statearr_31582 = f__27911__auto__.call(null);
(statearr_31582[(6)] = c__27910__auto___31583);

return statearr_31582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto___31583,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__){
return (function (state_31597){
var state_val_31598 = (state_31597[(1)]);
if((state_val_31598 === (1))){
var inst_31592 = cljs.core.async.timeout.call(null,(3000));
var state_31597__$1 = state_31597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31597__$1,(2),inst_31592);
} else {
if((state_val_31598 === (2))){
var inst_31594 = (state_31597[(2)]);
var inst_31595 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31597__$1 = (function (){var statearr_31599 = state_31597;
(statearr_31599[(7)] = inst_31594);

return statearr_31599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31597__$1,inst_31595);
} else {
return null;
}
}
});})(c__27910__auto__))
;
return ((function (switch__27887__auto__,c__27910__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_31600 = [null,null,null,null,null,null,null,null];
(statearr_31600[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__);

(statearr_31600[(1)] = (1));

return statearr_31600;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1 = (function (state_31597){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_31597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e31601){if((e31601 instanceof Object)){
var ex__27891__auto__ = e31601;
var statearr_31602_31604 = state_31597;
(statearr_31602_31604[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31605 = state_31597;
state_31597 = G__31605;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__ = function(state_31597){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1.call(this,state_31597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__))
})();
var state__27912__auto__ = (function (){var statearr_31603 = f__27911__auto__.call(null);
(statearr_31603[(6)] = c__27910__auto__);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__))
);

return c__27910__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31612){
var state_val_31613 = (state_31612[(1)]);
if((state_val_31613 === (1))){
var inst_31606 = cljs.core.async.timeout.call(null,(2000));
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31612__$1,(2),inst_31606);
} else {
if((state_val_31613 === (2))){
var inst_31608 = (state_31612[(2)]);
var inst_31609 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31610 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31609);
var state_31612__$1 = (function (){var statearr_31614 = state_31612;
(statearr_31614[(7)] = inst_31608);

return statearr_31614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31612__$1,inst_31610);
} else {
return null;
}
}
});})(c__27910__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27887__auto__,c__27910__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_31615 = [null,null,null,null,null,null,null,null];
(statearr_31615[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__);

(statearr_31615[(1)] = (1));

return statearr_31615;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1 = (function (state_31612){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_31612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e31616){if((e31616 instanceof Object)){
var ex__27891__auto__ = e31616;
var statearr_31617_31619 = state_31612;
(statearr_31617_31619[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31620 = state_31612;
state_31612 = G__31620;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__ = function(state_31612){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1.call(this,state_31612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27912__auto__ = (function (){var statearr_31618 = f__27911__auto__.call(null);
(statearr_31618[(6)] = c__27910__auto__);

return statearr_31618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__,figwheel_version,temp__5457__auto__))
);

return c__27910__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31621){
var map__31622 = p__31621;
var map__31622__$1 = (((((!((map__31622 == null))))?(((((map__31622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31622):map__31622);
var file = cljs.core.get.call(null,map__31622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31622__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31622__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31624 = "";
var G__31624__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31624),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31624);
var G__31624__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31624__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31624__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31624__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31624__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31625){
var map__31626 = p__31625;
var map__31626__$1 = (((((!((map__31626 == null))))?(((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);
var ed = map__31626__$1;
var formatted_exception = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31628_31632 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31629_31633 = null;
var count__31630_31634 = (0);
var i__31631_31635 = (0);
while(true){
if((i__31631_31635 < count__31630_31634)){
var msg_31636 = cljs.core._nth.call(null,chunk__31629_31633,i__31631_31635);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31636);


var G__31637 = seq__31628_31632;
var G__31638 = chunk__31629_31633;
var G__31639 = count__31630_31634;
var G__31640 = (i__31631_31635 + (1));
seq__31628_31632 = G__31637;
chunk__31629_31633 = G__31638;
count__31630_31634 = G__31639;
i__31631_31635 = G__31640;
continue;
} else {
var temp__5457__auto___31641 = cljs.core.seq.call(null,seq__31628_31632);
if(temp__5457__auto___31641){
var seq__31628_31642__$1 = temp__5457__auto___31641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31628_31642__$1)){
var c__4461__auto___31643 = cljs.core.chunk_first.call(null,seq__31628_31642__$1);
var G__31644 = cljs.core.chunk_rest.call(null,seq__31628_31642__$1);
var G__31645 = c__4461__auto___31643;
var G__31646 = cljs.core.count.call(null,c__4461__auto___31643);
var G__31647 = (0);
seq__31628_31632 = G__31644;
chunk__31629_31633 = G__31645;
count__31630_31634 = G__31646;
i__31631_31635 = G__31647;
continue;
} else {
var msg_31648 = cljs.core.first.call(null,seq__31628_31642__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31648);


var G__31649 = cljs.core.next.call(null,seq__31628_31642__$1);
var G__31650 = null;
var G__31651 = (0);
var G__31652 = (0);
seq__31628_31632 = G__31649;
chunk__31629_31633 = G__31650;
count__31630_31634 = G__31651;
i__31631_31635 = G__31652;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31653){
var map__31654 = p__31653;
var map__31654__$1 = (((((!((map__31654 == null))))?(((((map__31654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31654):map__31654);
var w = map__31654__$1;
var message = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31656 = cljs.core.seq.call(null,plugins);
var chunk__31657 = null;
var count__31658 = (0);
var i__31659 = (0);
while(true){
if((i__31659 < count__31658)){
var vec__31660 = cljs.core._nth.call(null,chunk__31657,i__31659);
var k = cljs.core.nth.call(null,vec__31660,(0),null);
var plugin = cljs.core.nth.call(null,vec__31660,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31666 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31656,chunk__31657,count__31658,i__31659,pl_31666,vec__31660,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31666.call(null,msg_hist);
});})(seq__31656,chunk__31657,count__31658,i__31659,pl_31666,vec__31660,k,plugin))
);
} else {
}


var G__31667 = seq__31656;
var G__31668 = chunk__31657;
var G__31669 = count__31658;
var G__31670 = (i__31659 + (1));
seq__31656 = G__31667;
chunk__31657 = G__31668;
count__31658 = G__31669;
i__31659 = G__31670;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31656);
if(temp__5457__auto__){
var seq__31656__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31656__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31656__$1);
var G__31671 = cljs.core.chunk_rest.call(null,seq__31656__$1);
var G__31672 = c__4461__auto__;
var G__31673 = cljs.core.count.call(null,c__4461__auto__);
var G__31674 = (0);
seq__31656 = G__31671;
chunk__31657 = G__31672;
count__31658 = G__31673;
i__31659 = G__31674;
continue;
} else {
var vec__31663 = cljs.core.first.call(null,seq__31656__$1);
var k = cljs.core.nth.call(null,vec__31663,(0),null);
var plugin = cljs.core.nth.call(null,vec__31663,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31675 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31656,chunk__31657,count__31658,i__31659,pl_31675,vec__31663,k,plugin,seq__31656__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31675.call(null,msg_hist);
});})(seq__31656,chunk__31657,count__31658,i__31659,pl_31675,vec__31663,k,plugin,seq__31656__$1,temp__5457__auto__))
);
} else {
}


var G__31676 = cljs.core.next.call(null,seq__31656__$1);
var G__31677 = null;
var G__31678 = (0);
var G__31679 = (0);
seq__31656 = G__31676;
chunk__31657 = G__31677;
count__31658 = G__31678;
i__31659 = G__31679;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31681 = arguments.length;
switch (G__31681) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31682_31687 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31683_31688 = null;
var count__31684_31689 = (0);
var i__31685_31690 = (0);
while(true){
if((i__31685_31690 < count__31684_31689)){
var msg_31691 = cljs.core._nth.call(null,chunk__31683_31688,i__31685_31690);
figwheel.client.socket.handle_incoming_message.call(null,msg_31691);


var G__31692 = seq__31682_31687;
var G__31693 = chunk__31683_31688;
var G__31694 = count__31684_31689;
var G__31695 = (i__31685_31690 + (1));
seq__31682_31687 = G__31692;
chunk__31683_31688 = G__31693;
count__31684_31689 = G__31694;
i__31685_31690 = G__31695;
continue;
} else {
var temp__5457__auto___31696 = cljs.core.seq.call(null,seq__31682_31687);
if(temp__5457__auto___31696){
var seq__31682_31697__$1 = temp__5457__auto___31696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31682_31697__$1)){
var c__4461__auto___31698 = cljs.core.chunk_first.call(null,seq__31682_31697__$1);
var G__31699 = cljs.core.chunk_rest.call(null,seq__31682_31697__$1);
var G__31700 = c__4461__auto___31698;
var G__31701 = cljs.core.count.call(null,c__4461__auto___31698);
var G__31702 = (0);
seq__31682_31687 = G__31699;
chunk__31683_31688 = G__31700;
count__31684_31689 = G__31701;
i__31685_31690 = G__31702;
continue;
} else {
var msg_31703 = cljs.core.first.call(null,seq__31682_31697__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31703);


var G__31704 = cljs.core.next.call(null,seq__31682_31697__$1);
var G__31705 = null;
var G__31706 = (0);
var G__31707 = (0);
seq__31682_31687 = G__31704;
chunk__31683_31688 = G__31705;
count__31684_31689 = G__31706;
i__31685_31690 = G__31707;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31712 = arguments.length;
var i__4642__auto___31713 = (0);
while(true){
if((i__4642__auto___31713 < len__4641__auto___31712)){
args__4647__auto__.push((arguments[i__4642__auto___31713]));

var G__31714 = (i__4642__auto___31713 + (1));
i__4642__auto___31713 = G__31714;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31709){
var map__31710 = p__31709;
var map__31710__$1 = (((((!((map__31710 == null))))?(((((map__31710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31710):map__31710);
var opts = map__31710__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31708){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31708));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31715){if((e31715 instanceof Error)){
var e = e31715;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31715;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31716){
var map__31717 = p__31716;
var map__31717__$1 = (((((!((map__31717 == null))))?(((((map__31717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31717):map__31717);
var msg_name = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545901508744
