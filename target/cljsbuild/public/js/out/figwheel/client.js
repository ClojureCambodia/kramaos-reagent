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
}catch (e50261){if((e50261 instanceof Error)){
var e = e50261;
return "Error: Unable to stringify";
} else {
throw e50261;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50264 = arguments.length;
switch (G__50264) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50262_SHARP_){
if(typeof p1__50262_SHARP_ === 'string'){
return p1__50262_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50262_SHARP_);
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
var len__4641__auto___50267 = arguments.length;
var i__4642__auto___50268 = (0);
while(true){
if((i__4642__auto___50268 < len__4641__auto___50267)){
args__4647__auto__.push((arguments[i__4642__auto___50268]));

var G__50269 = (i__4642__auto___50268 + (1));
i__4642__auto___50268 = G__50269;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50266){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50266));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___50271 = arguments.length;
var i__4642__auto___50272 = (0);
while(true){
if((i__4642__auto___50272 < len__4641__auto___50271)){
args__4647__auto__.push((arguments[i__4642__auto___50272]));

var G__50273 = (i__4642__auto___50272 + (1));
i__4642__auto___50272 = G__50273;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50270){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50270));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50274){
var map__50275 = p__50274;
var map__50275__$1 = (((((!((map__50275 == null))))?(((((map__50275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50275):map__50275);
var message = cljs.core.get.call(null,map__50275__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50275__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28227__auto___50354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___50354,ch){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___50354,ch){
return (function (state_50326){
var state_val_50327 = (state_50326[(1)]);
if((state_val_50327 === (7))){
var inst_50322 = (state_50326[(2)]);
var state_50326__$1 = state_50326;
var statearr_50328_50355 = state_50326__$1;
(statearr_50328_50355[(2)] = inst_50322);

(statearr_50328_50355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (1))){
var state_50326__$1 = state_50326;
var statearr_50329_50356 = state_50326__$1;
(statearr_50329_50356[(2)] = null);

(statearr_50329_50356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (4))){
var inst_50279 = (state_50326[(7)]);
var inst_50279__$1 = (state_50326[(2)]);
var state_50326__$1 = (function (){var statearr_50330 = state_50326;
(statearr_50330[(7)] = inst_50279__$1);

return statearr_50330;
})();
if(cljs.core.truth_(inst_50279__$1)){
var statearr_50331_50357 = state_50326__$1;
(statearr_50331_50357[(1)] = (5));

} else {
var statearr_50332_50358 = state_50326__$1;
(statearr_50332_50358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (15))){
var inst_50286 = (state_50326[(8)]);
var inst_50301 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50286);
var inst_50302 = cljs.core.first.call(null,inst_50301);
var inst_50303 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50302);
var inst_50304 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50303)].join('');
var inst_50305 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50304);
var state_50326__$1 = state_50326;
var statearr_50333_50359 = state_50326__$1;
(statearr_50333_50359[(2)] = inst_50305);

(statearr_50333_50359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (13))){
var inst_50310 = (state_50326[(2)]);
var state_50326__$1 = state_50326;
var statearr_50334_50360 = state_50326__$1;
(statearr_50334_50360[(2)] = inst_50310);

(statearr_50334_50360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (6))){
var state_50326__$1 = state_50326;
var statearr_50335_50361 = state_50326__$1;
(statearr_50335_50361[(2)] = null);

(statearr_50335_50361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (17))){
var inst_50308 = (state_50326[(2)]);
var state_50326__$1 = state_50326;
var statearr_50336_50362 = state_50326__$1;
(statearr_50336_50362[(2)] = inst_50308);

(statearr_50336_50362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (3))){
var inst_50324 = (state_50326[(2)]);
var state_50326__$1 = state_50326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50326__$1,inst_50324);
} else {
if((state_val_50327 === (12))){
var inst_50285 = (state_50326[(9)]);
var inst_50299 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50285,opts);
var state_50326__$1 = state_50326;
if(inst_50299){
var statearr_50337_50363 = state_50326__$1;
(statearr_50337_50363[(1)] = (15));

} else {
var statearr_50338_50364 = state_50326__$1;
(statearr_50338_50364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (2))){
var state_50326__$1 = state_50326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50326__$1,(4),ch);
} else {
if((state_val_50327 === (11))){
var inst_50286 = (state_50326[(8)]);
var inst_50291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50292 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50286);
var inst_50293 = cljs.core.async.timeout.call(null,(1000));
var inst_50294 = [inst_50292,inst_50293];
var inst_50295 = (new cljs.core.PersistentVector(null,2,(5),inst_50291,inst_50294,null));
var state_50326__$1 = state_50326;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50326__$1,(14),inst_50295);
} else {
if((state_val_50327 === (9))){
var inst_50286 = (state_50326[(8)]);
var inst_50312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50313 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50286);
var inst_50314 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50313);
var inst_50315 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50314)].join('');
var inst_50316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50315);
var state_50326__$1 = (function (){var statearr_50339 = state_50326;
(statearr_50339[(10)] = inst_50312);

return statearr_50339;
})();
var statearr_50340_50365 = state_50326__$1;
(statearr_50340_50365[(2)] = inst_50316);

(statearr_50340_50365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (5))){
var inst_50279 = (state_50326[(7)]);
var inst_50281 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50282 = (new cljs.core.PersistentArrayMap(null,2,inst_50281,null));
var inst_50283 = (new cljs.core.PersistentHashSet(null,inst_50282,null));
var inst_50284 = figwheel.client.focus_msgs.call(null,inst_50283,inst_50279);
var inst_50285 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50284);
var inst_50286 = cljs.core.first.call(null,inst_50284);
var inst_50287 = figwheel.client.autoload_QMARK_.call(null);
var state_50326__$1 = (function (){var statearr_50341 = state_50326;
(statearr_50341[(8)] = inst_50286);

(statearr_50341[(9)] = inst_50285);

return statearr_50341;
})();
if(cljs.core.truth_(inst_50287)){
var statearr_50342_50366 = state_50326__$1;
(statearr_50342_50366[(1)] = (8));

} else {
var statearr_50343_50367 = state_50326__$1;
(statearr_50343_50367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (14))){
var inst_50297 = (state_50326[(2)]);
var state_50326__$1 = state_50326;
var statearr_50344_50368 = state_50326__$1;
(statearr_50344_50368[(2)] = inst_50297);

(statearr_50344_50368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (16))){
var state_50326__$1 = state_50326;
var statearr_50345_50369 = state_50326__$1;
(statearr_50345_50369[(2)] = null);

(statearr_50345_50369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (10))){
var inst_50318 = (state_50326[(2)]);
var state_50326__$1 = (function (){var statearr_50346 = state_50326;
(statearr_50346[(11)] = inst_50318);

return statearr_50346;
})();
var statearr_50347_50370 = state_50326__$1;
(statearr_50347_50370[(2)] = null);

(statearr_50347_50370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50327 === (8))){
var inst_50285 = (state_50326[(9)]);
var inst_50289 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50285,opts);
var state_50326__$1 = state_50326;
if(cljs.core.truth_(inst_50289)){
var statearr_50348_50371 = state_50326__$1;
(statearr_50348_50371[(1)] = (11));

} else {
var statearr_50349_50372 = state_50326__$1;
(statearr_50349_50372[(1)] = (12));

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
});})(c__28227__auto___50354,ch))
;
return ((function (switch__28060__auto__,c__28227__auto___50354,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28061__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28061__auto____0 = (function (){
var statearr_50350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50350[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28061__auto__);

(statearr_50350[(1)] = (1));

return statearr_50350;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28061__auto____1 = (function (state_50326){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_50326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e50351){if((e50351 instanceof Object)){
var ex__28064__auto__ = e50351;
var statearr_50352_50373 = state_50326;
(statearr_50352_50373[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50374 = state_50326;
state_50326 = G__50374;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28061__auto__ = function(state_50326){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28061__auto____1.call(this,state_50326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28061__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28061__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___50354,ch))
})();
var state__28229__auto__ = (function (){var statearr_50353 = f__28228__auto__.call(null);
(statearr_50353[(6)] = c__28227__auto___50354);

return statearr_50353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___50354,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50375_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50375_SHARP_));
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
var base_path_50381 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50381){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50378 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50379 = true;
var _STAR_print_fn_STAR__temp_val__50380 = ((function (_STAR_print_newline_STAR__orig_val__50377,_STAR_print_fn_STAR__orig_val__50378,_STAR_print_newline_STAR__temp_val__50379,sb,base_path_50381){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__50377,_STAR_print_fn_STAR__orig_val__50378,_STAR_print_newline_STAR__temp_val__50379,sb,base_path_50381))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50379;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50380;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50378;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50377;
}}catch (e50376){if((e50376 instanceof Error)){
var e = e50376;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50381], null));
} else {
var e = e50376;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_50381))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50382){
var map__50383 = p__50382;
var map__50383__$1 = (((((!((map__50383 == null))))?(((((map__50383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50383):map__50383);
var opts = map__50383__$1;
var build_id = cljs.core.get.call(null,map__50383__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50383,map__50383__$1,opts,build_id){
return (function (p__50385){
var vec__50386 = p__50385;
var seq__50387 = cljs.core.seq.call(null,vec__50386);
var first__50388 = cljs.core.first.call(null,seq__50387);
var seq__50387__$1 = cljs.core.next.call(null,seq__50387);
var map__50389 = first__50388;
var map__50389__$1 = (((((!((map__50389 == null))))?(((((map__50389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50389):map__50389);
var msg = map__50389__$1;
var msg_name = cljs.core.get.call(null,map__50389__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50387__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50386,seq__50387,first__50388,seq__50387__$1,map__50389,map__50389__$1,msg,msg_name,_,map__50383,map__50383__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50386,seq__50387,first__50388,seq__50387__$1,map__50389,map__50389__$1,msg,msg_name,_,map__50383,map__50383__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50383,map__50383__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50391){
var vec__50392 = p__50391;
var seq__50393 = cljs.core.seq.call(null,vec__50392);
var first__50394 = cljs.core.first.call(null,seq__50393);
var seq__50393__$1 = cljs.core.next.call(null,seq__50393);
var map__50395 = first__50394;
var map__50395__$1 = (((((!((map__50395 == null))))?(((((map__50395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50395):map__50395);
var msg = map__50395__$1;
var msg_name = cljs.core.get.call(null,map__50395__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50393__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50397){
var map__50398 = p__50397;
var map__50398__$1 = (((((!((map__50398 == null))))?(((((map__50398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50398):map__50398);
var on_compile_warning = cljs.core.get.call(null,map__50398__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50398__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50398,map__50398__$1,on_compile_warning,on_compile_fail){
return (function (p__50400){
var vec__50401 = p__50400;
var seq__50402 = cljs.core.seq.call(null,vec__50401);
var first__50403 = cljs.core.first.call(null,seq__50402);
var seq__50402__$1 = cljs.core.next.call(null,seq__50402);
var map__50404 = first__50403;
var map__50404__$1 = (((((!((map__50404 == null))))?(((((map__50404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50404):map__50404);
var msg = map__50404__$1;
var msg_name = cljs.core.get.call(null,map__50404__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50402__$1;
var pred__50406 = cljs.core._EQ_;
var expr__50407 = msg_name;
if(cljs.core.truth_(pred__50406.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50407))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50406.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50407))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50398,map__50398__$1,on_compile_warning,on_compile_fail))
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
var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__,msg_hist,msg_names,msg){
return (function (state_50496){
var state_val_50497 = (state_50496[(1)]);
if((state_val_50497 === (7))){
var inst_50416 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
if(cljs.core.truth_(inst_50416)){
var statearr_50498_50545 = state_50496__$1;
(statearr_50498_50545[(1)] = (8));

} else {
var statearr_50499_50546 = state_50496__$1;
(statearr_50499_50546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (20))){
var inst_50490 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50500_50547 = state_50496__$1;
(statearr_50500_50547[(2)] = inst_50490);

(statearr_50500_50547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (27))){
var inst_50486 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50501_50548 = state_50496__$1;
(statearr_50501_50548[(2)] = inst_50486);

(statearr_50501_50548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (1))){
var inst_50409 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50496__$1 = state_50496;
if(cljs.core.truth_(inst_50409)){
var statearr_50502_50549 = state_50496__$1;
(statearr_50502_50549[(1)] = (2));

} else {
var statearr_50503_50550 = state_50496__$1;
(statearr_50503_50550[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (24))){
var inst_50488 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50504_50551 = state_50496__$1;
(statearr_50504_50551[(2)] = inst_50488);

(statearr_50504_50551[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (4))){
var inst_50494 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50496__$1,inst_50494);
} else {
if((state_val_50497 === (15))){
var inst_50492 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50505_50552 = state_50496__$1;
(statearr_50505_50552[(2)] = inst_50492);

(statearr_50505_50552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (21))){
var inst_50445 = (state_50496[(2)]);
var inst_50446 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50447 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50446);
var state_50496__$1 = (function (){var statearr_50506 = state_50496;
(statearr_50506[(7)] = inst_50445);

return statearr_50506;
})();
var statearr_50507_50553 = state_50496__$1;
(statearr_50507_50553[(2)] = inst_50447);

(statearr_50507_50553[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (31))){
var inst_50475 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50496__$1 = state_50496;
if(inst_50475){
var statearr_50508_50554 = state_50496__$1;
(statearr_50508_50554[(1)] = (34));

} else {
var statearr_50509_50555 = state_50496__$1;
(statearr_50509_50555[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (32))){
var inst_50484 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50510_50556 = state_50496__$1;
(statearr_50510_50556[(2)] = inst_50484);

(statearr_50510_50556[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (33))){
var inst_50471 = (state_50496[(2)]);
var inst_50472 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50473 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50472);
var state_50496__$1 = (function (){var statearr_50511 = state_50496;
(statearr_50511[(8)] = inst_50471);

return statearr_50511;
})();
var statearr_50512_50557 = state_50496__$1;
(statearr_50512_50557[(2)] = inst_50473);

(statearr_50512_50557[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (13))){
var inst_50430 = figwheel.client.heads_up.clear.call(null);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(16),inst_50430);
} else {
if((state_val_50497 === (22))){
var inst_50451 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50452 = figwheel.client.heads_up.append_warning_message.call(null,inst_50451);
var state_50496__$1 = state_50496;
var statearr_50513_50558 = state_50496__$1;
(statearr_50513_50558[(2)] = inst_50452);

(statearr_50513_50558[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (36))){
var inst_50482 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50514_50559 = state_50496__$1;
(statearr_50514_50559[(2)] = inst_50482);

(statearr_50514_50559[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (29))){
var inst_50462 = (state_50496[(2)]);
var inst_50463 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50464 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50463);
var state_50496__$1 = (function (){var statearr_50515 = state_50496;
(statearr_50515[(9)] = inst_50462);

return statearr_50515;
})();
var statearr_50516_50560 = state_50496__$1;
(statearr_50516_50560[(2)] = inst_50464);

(statearr_50516_50560[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (6))){
var inst_50411 = (state_50496[(10)]);
var state_50496__$1 = state_50496;
var statearr_50517_50561 = state_50496__$1;
(statearr_50517_50561[(2)] = inst_50411);

(statearr_50517_50561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (28))){
var inst_50458 = (state_50496[(2)]);
var inst_50459 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50460 = figwheel.client.heads_up.display_warning.call(null,inst_50459);
var state_50496__$1 = (function (){var statearr_50518 = state_50496;
(statearr_50518[(11)] = inst_50458);

return statearr_50518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(29),inst_50460);
} else {
if((state_val_50497 === (25))){
var inst_50456 = figwheel.client.heads_up.clear.call(null);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(28),inst_50456);
} else {
if((state_val_50497 === (34))){
var inst_50477 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(37),inst_50477);
} else {
if((state_val_50497 === (17))){
var inst_50436 = (state_50496[(2)]);
var inst_50437 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50438 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50437);
var state_50496__$1 = (function (){var statearr_50519 = state_50496;
(statearr_50519[(12)] = inst_50436);

return statearr_50519;
})();
var statearr_50520_50562 = state_50496__$1;
(statearr_50520_50562[(2)] = inst_50438);

(statearr_50520_50562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (3))){
var inst_50428 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50496__$1 = state_50496;
if(inst_50428){
var statearr_50521_50563 = state_50496__$1;
(statearr_50521_50563[(1)] = (13));

} else {
var statearr_50522_50564 = state_50496__$1;
(statearr_50522_50564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (12))){
var inst_50424 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50523_50565 = state_50496__$1;
(statearr_50523_50565[(2)] = inst_50424);

(statearr_50523_50565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (2))){
var inst_50411 = (state_50496[(10)]);
var inst_50411__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50496__$1 = (function (){var statearr_50524 = state_50496;
(statearr_50524[(10)] = inst_50411__$1);

return statearr_50524;
})();
if(cljs.core.truth_(inst_50411__$1)){
var statearr_50525_50566 = state_50496__$1;
(statearr_50525_50566[(1)] = (5));

} else {
var statearr_50526_50567 = state_50496__$1;
(statearr_50526_50567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (23))){
var inst_50454 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50496__$1 = state_50496;
if(inst_50454){
var statearr_50527_50568 = state_50496__$1;
(statearr_50527_50568[(1)] = (25));

} else {
var statearr_50528_50569 = state_50496__$1;
(statearr_50528_50569[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (35))){
var state_50496__$1 = state_50496;
var statearr_50529_50570 = state_50496__$1;
(statearr_50529_50570[(2)] = null);

(statearr_50529_50570[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (19))){
var inst_50449 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50496__$1 = state_50496;
if(inst_50449){
var statearr_50530_50571 = state_50496__$1;
(statearr_50530_50571[(1)] = (22));

} else {
var statearr_50531_50572 = state_50496__$1;
(statearr_50531_50572[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (11))){
var inst_50420 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50532_50573 = state_50496__$1;
(statearr_50532_50573[(2)] = inst_50420);

(statearr_50532_50573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (9))){
var inst_50422 = figwheel.client.heads_up.clear.call(null);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(12),inst_50422);
} else {
if((state_val_50497 === (5))){
var inst_50413 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50496__$1 = state_50496;
var statearr_50533_50574 = state_50496__$1;
(statearr_50533_50574[(2)] = inst_50413);

(statearr_50533_50574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (14))){
var inst_50440 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50496__$1 = state_50496;
if(inst_50440){
var statearr_50534_50575 = state_50496__$1;
(statearr_50534_50575[(1)] = (18));

} else {
var statearr_50535_50576 = state_50496__$1;
(statearr_50535_50576[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (26))){
var inst_50466 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50496__$1 = state_50496;
if(inst_50466){
var statearr_50536_50577 = state_50496__$1;
(statearr_50536_50577[(1)] = (30));

} else {
var statearr_50537_50578 = state_50496__$1;
(statearr_50537_50578[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (16))){
var inst_50432 = (state_50496[(2)]);
var inst_50433 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50434 = figwheel.client.heads_up.display_exception.call(null,inst_50433);
var state_50496__$1 = (function (){var statearr_50538 = state_50496;
(statearr_50538[(13)] = inst_50432);

return statearr_50538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(17),inst_50434);
} else {
if((state_val_50497 === (30))){
var inst_50468 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50469 = figwheel.client.heads_up.display_warning.call(null,inst_50468);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(33),inst_50469);
} else {
if((state_val_50497 === (10))){
var inst_50426 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50539_50579 = state_50496__$1;
(statearr_50539_50579[(2)] = inst_50426);

(statearr_50539_50579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (18))){
var inst_50442 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50443 = figwheel.client.heads_up.display_exception.call(null,inst_50442);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(21),inst_50443);
} else {
if((state_val_50497 === (37))){
var inst_50479 = (state_50496[(2)]);
var state_50496__$1 = state_50496;
var statearr_50540_50580 = state_50496__$1;
(statearr_50540_50580[(2)] = inst_50479);

(statearr_50540_50580[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50497 === (8))){
var inst_50418 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50496__$1 = state_50496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50496__$1,(11),inst_50418);
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
});})(c__28227__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28060__auto__,c__28227__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto____0 = (function (){
var statearr_50541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50541[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto__);

(statearr_50541[(1)] = (1));

return statearr_50541;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto____1 = (function (state_50496){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_50496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e50542){if((e50542 instanceof Object)){
var ex__28064__auto__ = e50542;
var statearr_50543_50581 = state_50496;
(statearr_50543_50581[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50582 = state_50496;
state_50496 = G__50582;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto__ = function(state_50496){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto____1.call(this,state_50496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__,msg_hist,msg_names,msg))
})();
var state__28229__auto__ = (function (){var statearr_50544 = f__28228__auto__.call(null);
(statearr_50544[(6)] = c__28227__auto__);

return statearr_50544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__,msg_hist,msg_names,msg))
);

return c__28227__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28227__auto___50611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___50611,ch){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___50611,ch){
return (function (state_50597){
var state_val_50598 = (state_50597[(1)]);
if((state_val_50598 === (1))){
var state_50597__$1 = state_50597;
var statearr_50599_50612 = state_50597__$1;
(statearr_50599_50612[(2)] = null);

(statearr_50599_50612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50598 === (2))){
var state_50597__$1 = state_50597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50597__$1,(4),ch);
} else {
if((state_val_50598 === (3))){
var inst_50595 = (state_50597[(2)]);
var state_50597__$1 = state_50597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50597__$1,inst_50595);
} else {
if((state_val_50598 === (4))){
var inst_50585 = (state_50597[(7)]);
var inst_50585__$1 = (state_50597[(2)]);
var state_50597__$1 = (function (){var statearr_50600 = state_50597;
(statearr_50600[(7)] = inst_50585__$1);

return statearr_50600;
})();
if(cljs.core.truth_(inst_50585__$1)){
var statearr_50601_50613 = state_50597__$1;
(statearr_50601_50613[(1)] = (5));

} else {
var statearr_50602_50614 = state_50597__$1;
(statearr_50602_50614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50598 === (5))){
var inst_50585 = (state_50597[(7)]);
var inst_50587 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50585);
var state_50597__$1 = state_50597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50597__$1,(8),inst_50587);
} else {
if((state_val_50598 === (6))){
var state_50597__$1 = state_50597;
var statearr_50603_50615 = state_50597__$1;
(statearr_50603_50615[(2)] = null);

(statearr_50603_50615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50598 === (7))){
var inst_50593 = (state_50597[(2)]);
var state_50597__$1 = state_50597;
var statearr_50604_50616 = state_50597__$1;
(statearr_50604_50616[(2)] = inst_50593);

(statearr_50604_50616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50598 === (8))){
var inst_50589 = (state_50597[(2)]);
var state_50597__$1 = (function (){var statearr_50605 = state_50597;
(statearr_50605[(8)] = inst_50589);

return statearr_50605;
})();
var statearr_50606_50617 = state_50597__$1;
(statearr_50606_50617[(2)] = null);

(statearr_50606_50617[(1)] = (2));


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
});})(c__28227__auto___50611,ch))
;
return ((function (switch__28060__auto__,c__28227__auto___50611,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28061__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28061__auto____0 = (function (){
var statearr_50607 = [null,null,null,null,null,null,null,null,null];
(statearr_50607[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28061__auto__);

(statearr_50607[(1)] = (1));

return statearr_50607;
});
var figwheel$client$heads_up_plugin_$_state_machine__28061__auto____1 = (function (state_50597){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_50597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e50608){if((e50608 instanceof Object)){
var ex__28064__auto__ = e50608;
var statearr_50609_50618 = state_50597;
(statearr_50609_50618[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50619 = state_50597;
state_50597 = G__50619;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28061__auto__ = function(state_50597){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28061__auto____1.call(this,state_50597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28061__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28061__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___50611,ch))
})();
var state__28229__auto__ = (function (){var statearr_50610 = f__28228__auto__.call(null);
(statearr_50610[(6)] = c__28227__auto___50611);

return statearr_50610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___50611,ch))
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
var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__){
return (function (state_50625){
var state_val_50626 = (state_50625[(1)]);
if((state_val_50626 === (1))){
var inst_50620 = cljs.core.async.timeout.call(null,(3000));
var state_50625__$1 = state_50625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50625__$1,(2),inst_50620);
} else {
if((state_val_50626 === (2))){
var inst_50622 = (state_50625[(2)]);
var inst_50623 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50625__$1 = (function (){var statearr_50627 = state_50625;
(statearr_50627[(7)] = inst_50622);

return statearr_50627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50625__$1,inst_50623);
} else {
return null;
}
}
});})(c__28227__auto__))
;
return ((function (switch__28060__auto__,c__28227__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28061__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28061__auto____0 = (function (){
var statearr_50628 = [null,null,null,null,null,null,null,null];
(statearr_50628[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28061__auto__);

(statearr_50628[(1)] = (1));

return statearr_50628;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28061__auto____1 = (function (state_50625){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_50625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e50629){if((e50629 instanceof Object)){
var ex__28064__auto__ = e50629;
var statearr_50630_50632 = state_50625;
(statearr_50630_50632[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50633 = state_50625;
state_50625 = G__50633;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28061__auto__ = function(state_50625){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28061__auto____1.call(this,state_50625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28061__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28061__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__))
})();
var state__28229__auto__ = (function (){var statearr_50631 = f__28228__auto__.call(null);
(statearr_50631[(6)] = c__28227__auto__);

return statearr_50631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__))
);

return c__28227__auto__;
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
var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__,figwheel_version,temp__5457__auto__){
return (function (state_50640){
var state_val_50641 = (state_50640[(1)]);
if((state_val_50641 === (1))){
var inst_50634 = cljs.core.async.timeout.call(null,(2000));
var state_50640__$1 = state_50640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50640__$1,(2),inst_50634);
} else {
if((state_val_50641 === (2))){
var inst_50636 = (state_50640[(2)]);
var inst_50637 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50638 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50637);
var state_50640__$1 = (function (){var statearr_50642 = state_50640;
(statearr_50642[(7)] = inst_50636);

return statearr_50642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50640__$1,inst_50638);
} else {
return null;
}
}
});})(c__28227__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__28060__auto__,c__28227__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto____0 = (function (){
var statearr_50643 = [null,null,null,null,null,null,null,null];
(statearr_50643[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto__);

(statearr_50643[(1)] = (1));

return statearr_50643;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto____1 = (function (state_50640){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_50640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e50644){if((e50644 instanceof Object)){
var ex__28064__auto__ = e50644;
var statearr_50645_50647 = state_50640;
(statearr_50645_50647[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50648 = state_50640;
state_50640 = G__50648;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto__ = function(state_50640){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto____1.call(this,state_50640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28229__auto__ = (function (){var statearr_50646 = f__28228__auto__.call(null);
(statearr_50646[(6)] = c__28227__auto__);

return statearr_50646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__,figwheel_version,temp__5457__auto__))
);

return c__28227__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50649){
var map__50650 = p__50649;
var map__50650__$1 = (((((!((map__50650 == null))))?(((((map__50650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50650):map__50650);
var file = cljs.core.get.call(null,map__50650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50650__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50650__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50652 = "";
var G__50652__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50652),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50652);
var G__50652__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50652__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50652__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50652__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50652__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50653){
var map__50654 = p__50653;
var map__50654__$1 = (((((!((map__50654 == null))))?(((((map__50654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50654):map__50654);
var ed = map__50654__$1;
var formatted_exception = cljs.core.get.call(null,map__50654__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50654__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50654__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50656_50660 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50657_50661 = null;
var count__50658_50662 = (0);
var i__50659_50663 = (0);
while(true){
if((i__50659_50663 < count__50658_50662)){
var msg_50664 = cljs.core._nth.call(null,chunk__50657_50661,i__50659_50663);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50664);


var G__50665 = seq__50656_50660;
var G__50666 = chunk__50657_50661;
var G__50667 = count__50658_50662;
var G__50668 = (i__50659_50663 + (1));
seq__50656_50660 = G__50665;
chunk__50657_50661 = G__50666;
count__50658_50662 = G__50667;
i__50659_50663 = G__50668;
continue;
} else {
var temp__5457__auto___50669 = cljs.core.seq.call(null,seq__50656_50660);
if(temp__5457__auto___50669){
var seq__50656_50670__$1 = temp__5457__auto___50669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50656_50670__$1)){
var c__4461__auto___50671 = cljs.core.chunk_first.call(null,seq__50656_50670__$1);
var G__50672 = cljs.core.chunk_rest.call(null,seq__50656_50670__$1);
var G__50673 = c__4461__auto___50671;
var G__50674 = cljs.core.count.call(null,c__4461__auto___50671);
var G__50675 = (0);
seq__50656_50660 = G__50672;
chunk__50657_50661 = G__50673;
count__50658_50662 = G__50674;
i__50659_50663 = G__50675;
continue;
} else {
var msg_50676 = cljs.core.first.call(null,seq__50656_50670__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50676);


var G__50677 = cljs.core.next.call(null,seq__50656_50670__$1);
var G__50678 = null;
var G__50679 = (0);
var G__50680 = (0);
seq__50656_50660 = G__50677;
chunk__50657_50661 = G__50678;
count__50658_50662 = G__50679;
i__50659_50663 = G__50680;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50681){
var map__50682 = p__50681;
var map__50682__$1 = (((((!((map__50682 == null))))?(((((map__50682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50682):map__50682);
var w = map__50682__$1;
var message = cljs.core.get.call(null,map__50682__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50684 = cljs.core.seq.call(null,plugins);
var chunk__50685 = null;
var count__50686 = (0);
var i__50687 = (0);
while(true){
if((i__50687 < count__50686)){
var vec__50688 = cljs.core._nth.call(null,chunk__50685,i__50687);
var k = cljs.core.nth.call(null,vec__50688,(0),null);
var plugin = cljs.core.nth.call(null,vec__50688,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50694 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50684,chunk__50685,count__50686,i__50687,pl_50694,vec__50688,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50694.call(null,msg_hist);
});})(seq__50684,chunk__50685,count__50686,i__50687,pl_50694,vec__50688,k,plugin))
);
} else {
}


var G__50695 = seq__50684;
var G__50696 = chunk__50685;
var G__50697 = count__50686;
var G__50698 = (i__50687 + (1));
seq__50684 = G__50695;
chunk__50685 = G__50696;
count__50686 = G__50697;
i__50687 = G__50698;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50684);
if(temp__5457__auto__){
var seq__50684__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50684__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__50684__$1);
var G__50699 = cljs.core.chunk_rest.call(null,seq__50684__$1);
var G__50700 = c__4461__auto__;
var G__50701 = cljs.core.count.call(null,c__4461__auto__);
var G__50702 = (0);
seq__50684 = G__50699;
chunk__50685 = G__50700;
count__50686 = G__50701;
i__50687 = G__50702;
continue;
} else {
var vec__50691 = cljs.core.first.call(null,seq__50684__$1);
var k = cljs.core.nth.call(null,vec__50691,(0),null);
var plugin = cljs.core.nth.call(null,vec__50691,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50703 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50684,chunk__50685,count__50686,i__50687,pl_50703,vec__50691,k,plugin,seq__50684__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50703.call(null,msg_hist);
});})(seq__50684,chunk__50685,count__50686,i__50687,pl_50703,vec__50691,k,plugin,seq__50684__$1,temp__5457__auto__))
);
} else {
}


var G__50704 = cljs.core.next.call(null,seq__50684__$1);
var G__50705 = null;
var G__50706 = (0);
var G__50707 = (0);
seq__50684 = G__50704;
chunk__50685 = G__50705;
count__50686 = G__50706;
i__50687 = G__50707;
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
var G__50709 = arguments.length;
switch (G__50709) {
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

var seq__50710_50715 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50711_50716 = null;
var count__50712_50717 = (0);
var i__50713_50718 = (0);
while(true){
if((i__50713_50718 < count__50712_50717)){
var msg_50719 = cljs.core._nth.call(null,chunk__50711_50716,i__50713_50718);
figwheel.client.socket.handle_incoming_message.call(null,msg_50719);


var G__50720 = seq__50710_50715;
var G__50721 = chunk__50711_50716;
var G__50722 = count__50712_50717;
var G__50723 = (i__50713_50718 + (1));
seq__50710_50715 = G__50720;
chunk__50711_50716 = G__50721;
count__50712_50717 = G__50722;
i__50713_50718 = G__50723;
continue;
} else {
var temp__5457__auto___50724 = cljs.core.seq.call(null,seq__50710_50715);
if(temp__5457__auto___50724){
var seq__50710_50725__$1 = temp__5457__auto___50724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50710_50725__$1)){
var c__4461__auto___50726 = cljs.core.chunk_first.call(null,seq__50710_50725__$1);
var G__50727 = cljs.core.chunk_rest.call(null,seq__50710_50725__$1);
var G__50728 = c__4461__auto___50726;
var G__50729 = cljs.core.count.call(null,c__4461__auto___50726);
var G__50730 = (0);
seq__50710_50715 = G__50727;
chunk__50711_50716 = G__50728;
count__50712_50717 = G__50729;
i__50713_50718 = G__50730;
continue;
} else {
var msg_50731 = cljs.core.first.call(null,seq__50710_50725__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50731);


var G__50732 = cljs.core.next.call(null,seq__50710_50725__$1);
var G__50733 = null;
var G__50734 = (0);
var G__50735 = (0);
seq__50710_50715 = G__50732;
chunk__50711_50716 = G__50733;
count__50712_50717 = G__50734;
i__50713_50718 = G__50735;
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
var len__4641__auto___50740 = arguments.length;
var i__4642__auto___50741 = (0);
while(true){
if((i__4642__auto___50741 < len__4641__auto___50740)){
args__4647__auto__.push((arguments[i__4642__auto___50741]));

var G__50742 = (i__4642__auto___50741 + (1));
i__4642__auto___50741 = G__50742;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50737){
var map__50738 = p__50737;
var map__50738__$1 = (((((!((map__50738 == null))))?(((((map__50738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50738):map__50738);
var opts = map__50738__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50736){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50736));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50743){if((e50743 instanceof Error)){
var e = e50743;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50743;

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
return (function (p__50744){
var map__50745 = p__50744;
var map__50745__$1 = (((((!((map__50745 == null))))?(((((map__50745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50745):map__50745);
var msg_name = cljs.core.get.call(null,map__50745__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545897065478
