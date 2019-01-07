// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44612 = arguments.length;
switch (G__44612) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44613 = (function (f,blockable,meta44614){
this.f = f;
this.blockable = blockable;
this.meta44614 = meta44614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44615,meta44614__$1){
var self__ = this;
var _44615__$1 = this;
return (new cljs.core.async.t_cljs$core$async44613(self__.f,self__.blockable,meta44614__$1));
});

cljs.core.async.t_cljs$core$async44613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44615){
var self__ = this;
var _44615__$1 = this;
return self__.meta44614;
});

cljs.core.async.t_cljs$core$async44613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44614","meta44614",1128539002,null)], null);
});

cljs.core.async.t_cljs$core$async44613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44613";

cljs.core.async.t_cljs$core$async44613.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async44613");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44613.
 */
cljs.core.async.__GT_t_cljs$core$async44613 = (function cljs$core$async$__GT_t_cljs$core$async44613(f__$1,blockable__$1,meta44614){
return (new cljs.core.async.t_cljs$core$async44613(f__$1,blockable__$1,meta44614));
});

}

return (new cljs.core.async.t_cljs$core$async44613(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44619 = arguments.length;
switch (G__44619) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44622 = arguments.length;
switch (G__44622) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44625 = arguments.length;
switch (G__44625) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44627 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44627);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44627,ret){
return (function (){
return fn1.call(null,val_44627);
});})(val_44627,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44629 = arguments.length;
switch (G__44629) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___44631 = n;
var x_44632 = (0);
while(true){
if((x_44632 < n__4518__auto___44631)){
(a[x_44632] = (0));

var G__44633 = (x_44632 + (1));
x_44632 = G__44633;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44634 = (i + (1));
i = G__44634;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44635 = (function (flag,meta44636){
this.flag = flag;
this.meta44636 = meta44636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44637,meta44636__$1){
var self__ = this;
var _44637__$1 = this;
return (new cljs.core.async.t_cljs$core$async44635(self__.flag,meta44636__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44637){
var self__ = this;
var _44637__$1 = this;
return self__.meta44636;
});})(flag))
;

cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44635.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44636","meta44636",-84870939,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44635";

cljs.core.async.t_cljs$core$async44635.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async44635");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44635.
 */
cljs.core.async.__GT_t_cljs$core$async44635 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44635(flag__$1,meta44636){
return (new cljs.core.async.t_cljs$core$async44635(flag__$1,meta44636));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44635(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44638 = (function (flag,cb,meta44639){
this.flag = flag;
this.cb = cb;
this.meta44639 = meta44639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44640,meta44639__$1){
var self__ = this;
var _44640__$1 = this;
return (new cljs.core.async.t_cljs$core$async44638(self__.flag,self__.cb,meta44639__$1));
});

cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44640){
var self__ = this;
var _44640__$1 = this;
return self__.meta44639;
});

cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44639","meta44639",-1387679883,null)], null);
});

cljs.core.async.t_cljs$core$async44638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44638";

cljs.core.async.t_cljs$core$async44638.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async44638");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44638.
 */
cljs.core.async.__GT_t_cljs$core$async44638 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44638(flag__$1,cb__$1,meta44639){
return (new cljs.core.async.t_cljs$core$async44638(flag__$1,cb__$1,meta44639));
});

}

return (new cljs.core.async.t_cljs$core$async44638(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44641_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44641_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44642_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44642_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44643 = (i + (1));
i = G__44643;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___44649 = arguments.length;
var i__4642__auto___44650 = (0);
while(true){
if((i__4642__auto___44650 < len__4641__auto___44649)){
args__4647__auto__.push((arguments[i__4642__auto___44650]));

var G__44651 = (i__4642__auto___44650 + (1));
i__4642__auto___44650 = G__44651;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44646){
var map__44647 = p__44646;
var map__44647__$1 = (((((!((map__44647 == null))))?(((((map__44647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44647):map__44647);
var opts = map__44647__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44644){
var G__44645 = cljs.core.first.call(null,seq44644);
var seq44644__$1 = cljs.core.next.call(null,seq44644);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44645,seq44644__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44653 = arguments.length;
switch (G__44653) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28227__auto___44699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___44699){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___44699){
return (function (state_44677){
var state_val_44678 = (state_44677[(1)]);
if((state_val_44678 === (7))){
var inst_44673 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44679_44700 = state_44677__$1;
(statearr_44679_44700[(2)] = inst_44673);

(statearr_44679_44700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (1))){
var state_44677__$1 = state_44677;
var statearr_44680_44701 = state_44677__$1;
(statearr_44680_44701[(2)] = null);

(statearr_44680_44701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (4))){
var inst_44656 = (state_44677[(7)]);
var inst_44656__$1 = (state_44677[(2)]);
var inst_44657 = (inst_44656__$1 == null);
var state_44677__$1 = (function (){var statearr_44681 = state_44677;
(statearr_44681[(7)] = inst_44656__$1);

return statearr_44681;
})();
if(cljs.core.truth_(inst_44657)){
var statearr_44682_44702 = state_44677__$1;
(statearr_44682_44702[(1)] = (5));

} else {
var statearr_44683_44703 = state_44677__$1;
(statearr_44683_44703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (13))){
var state_44677__$1 = state_44677;
var statearr_44684_44704 = state_44677__$1;
(statearr_44684_44704[(2)] = null);

(statearr_44684_44704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (6))){
var inst_44656 = (state_44677[(7)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44677__$1,(11),to,inst_44656);
} else {
if((state_val_44678 === (3))){
var inst_44675 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44677__$1,inst_44675);
} else {
if((state_val_44678 === (12))){
var state_44677__$1 = state_44677;
var statearr_44685_44705 = state_44677__$1;
(statearr_44685_44705[(2)] = null);

(statearr_44685_44705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (2))){
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44677__$1,(4),from);
} else {
if((state_val_44678 === (11))){
var inst_44666 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
if(cljs.core.truth_(inst_44666)){
var statearr_44686_44706 = state_44677__$1;
(statearr_44686_44706[(1)] = (12));

} else {
var statearr_44687_44707 = state_44677__$1;
(statearr_44687_44707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (9))){
var state_44677__$1 = state_44677;
var statearr_44688_44708 = state_44677__$1;
(statearr_44688_44708[(2)] = null);

(statearr_44688_44708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (5))){
var state_44677__$1 = state_44677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44689_44709 = state_44677__$1;
(statearr_44689_44709[(1)] = (8));

} else {
var statearr_44690_44710 = state_44677__$1;
(statearr_44690_44710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (14))){
var inst_44671 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44691_44711 = state_44677__$1;
(statearr_44691_44711[(2)] = inst_44671);

(statearr_44691_44711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (10))){
var inst_44663 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44692_44712 = state_44677__$1;
(statearr_44692_44712[(2)] = inst_44663);

(statearr_44692_44712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (8))){
var inst_44660 = cljs.core.async.close_BANG_.call(null,to);
var state_44677__$1 = state_44677;
var statearr_44693_44713 = state_44677__$1;
(statearr_44693_44713[(2)] = inst_44660);

(statearr_44693_44713[(1)] = (10));


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
});})(c__28227__auto___44699))
;
return ((function (switch__28060__auto__,c__28227__auto___44699){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_44694 = [null,null,null,null,null,null,null,null];
(statearr_44694[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_44694[(1)] = (1));

return statearr_44694;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_44677){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_44677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e44695){if((e44695 instanceof Object)){
var ex__28064__auto__ = e44695;
var statearr_44696_44714 = state_44677;
(statearr_44696_44714[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44715 = state_44677;
state_44677 = G__44715;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_44677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_44677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___44699))
})();
var state__28229__auto__ = (function (){var statearr_44697 = f__28228__auto__.call(null);
(statearr_44697[(6)] = c__28227__auto___44699);

return statearr_44697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___44699))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44716){
var vec__44717 = p__44716;
var v = cljs.core.nth.call(null,vec__44717,(0),null);
var p = cljs.core.nth.call(null,vec__44717,(1),null);
var job = vec__44717;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28227__auto___44888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___44888,res,vec__44717,v,p,job,jobs,results){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___44888,res,vec__44717,v,p,job,jobs,results){
return (function (state_44724){
var state_val_44725 = (state_44724[(1)]);
if((state_val_44725 === (1))){
var state_44724__$1 = state_44724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44724__$1,(2),res,v);
} else {
if((state_val_44725 === (2))){
var inst_44721 = (state_44724[(2)]);
var inst_44722 = cljs.core.async.close_BANG_.call(null,res);
var state_44724__$1 = (function (){var statearr_44726 = state_44724;
(statearr_44726[(7)] = inst_44721);

return statearr_44726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44724__$1,inst_44722);
} else {
return null;
}
}
});})(c__28227__auto___44888,res,vec__44717,v,p,job,jobs,results))
;
return ((function (switch__28060__auto__,c__28227__auto___44888,res,vec__44717,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0 = (function (){
var statearr_44727 = [null,null,null,null,null,null,null,null];
(statearr_44727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__);

(statearr_44727[(1)] = (1));

return statearr_44727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1 = (function (state_44724){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_44724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e44728){if((e44728 instanceof Object)){
var ex__28064__auto__ = e44728;
var statearr_44729_44889 = state_44724;
(statearr_44729_44889[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44890 = state_44724;
state_44724 = G__44890;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = function(state_44724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1.call(this,state_44724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___44888,res,vec__44717,v,p,job,jobs,results))
})();
var state__28229__auto__ = (function (){var statearr_44730 = f__28228__auto__.call(null);
(statearr_44730[(6)] = c__28227__auto___44888);

return statearr_44730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___44888,res,vec__44717,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44731){
var vec__44732 = p__44731;
var v = cljs.core.nth.call(null,vec__44732,(0),null);
var p = cljs.core.nth.call(null,vec__44732,(1),null);
var job = vec__44732;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___44891 = n;
var __44892 = (0);
while(true){
if((__44892 < n__4518__auto___44891)){
var G__44735_44893 = type;
var G__44735_44894__$1 = (((G__44735_44893 instanceof cljs.core.Keyword))?G__44735_44893.fqn:null);
switch (G__44735_44894__$1) {
case "compute":
var c__28227__auto___44896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44892,c__28227__auto___44896,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (__44892,c__28227__auto___44896,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async){
return (function (state_44748){
var state_val_44749 = (state_44748[(1)]);
if((state_val_44749 === (1))){
var state_44748__$1 = state_44748;
var statearr_44750_44897 = state_44748__$1;
(statearr_44750_44897[(2)] = null);

(statearr_44750_44897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44749 === (2))){
var state_44748__$1 = state_44748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44748__$1,(4),jobs);
} else {
if((state_val_44749 === (3))){
var inst_44746 = (state_44748[(2)]);
var state_44748__$1 = state_44748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44748__$1,inst_44746);
} else {
if((state_val_44749 === (4))){
var inst_44738 = (state_44748[(2)]);
var inst_44739 = process.call(null,inst_44738);
var state_44748__$1 = state_44748;
if(cljs.core.truth_(inst_44739)){
var statearr_44751_44898 = state_44748__$1;
(statearr_44751_44898[(1)] = (5));

} else {
var statearr_44752_44899 = state_44748__$1;
(statearr_44752_44899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44749 === (5))){
var state_44748__$1 = state_44748;
var statearr_44753_44900 = state_44748__$1;
(statearr_44753_44900[(2)] = null);

(statearr_44753_44900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44749 === (6))){
var state_44748__$1 = state_44748;
var statearr_44754_44901 = state_44748__$1;
(statearr_44754_44901[(2)] = null);

(statearr_44754_44901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44749 === (7))){
var inst_44744 = (state_44748[(2)]);
var state_44748__$1 = state_44748;
var statearr_44755_44902 = state_44748__$1;
(statearr_44755_44902[(2)] = inst_44744);

(statearr_44755_44902[(1)] = (3));


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
});})(__44892,c__28227__auto___44896,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async))
;
return ((function (__44892,switch__28060__auto__,c__28227__auto___44896,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0 = (function (){
var statearr_44756 = [null,null,null,null,null,null,null];
(statearr_44756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__);

(statearr_44756[(1)] = (1));

return statearr_44756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1 = (function (state_44748){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_44748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e44757){if((e44757 instanceof Object)){
var ex__28064__auto__ = e44757;
var statearr_44758_44903 = state_44748;
(statearr_44758_44903[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44904 = state_44748;
state_44748 = G__44904;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = function(state_44748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1.call(this,state_44748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__;
})()
;})(__44892,switch__28060__auto__,c__28227__auto___44896,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async))
})();
var state__28229__auto__ = (function (){var statearr_44759 = f__28228__auto__.call(null);
(statearr_44759[(6)] = c__28227__auto___44896);

return statearr_44759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(__44892,c__28227__auto___44896,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async))
);


break;
case "async":
var c__28227__auto___44905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44892,c__28227__auto___44905,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (__44892,c__28227__auto___44905,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async){
return (function (state_44772){
var state_val_44773 = (state_44772[(1)]);
if((state_val_44773 === (1))){
var state_44772__$1 = state_44772;
var statearr_44774_44906 = state_44772__$1;
(statearr_44774_44906[(2)] = null);

(statearr_44774_44906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44773 === (2))){
var state_44772__$1 = state_44772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44772__$1,(4),jobs);
} else {
if((state_val_44773 === (3))){
var inst_44770 = (state_44772[(2)]);
var state_44772__$1 = state_44772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44772__$1,inst_44770);
} else {
if((state_val_44773 === (4))){
var inst_44762 = (state_44772[(2)]);
var inst_44763 = async.call(null,inst_44762);
var state_44772__$1 = state_44772;
if(cljs.core.truth_(inst_44763)){
var statearr_44775_44907 = state_44772__$1;
(statearr_44775_44907[(1)] = (5));

} else {
var statearr_44776_44908 = state_44772__$1;
(statearr_44776_44908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44773 === (5))){
var state_44772__$1 = state_44772;
var statearr_44777_44909 = state_44772__$1;
(statearr_44777_44909[(2)] = null);

(statearr_44777_44909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44773 === (6))){
var state_44772__$1 = state_44772;
var statearr_44778_44910 = state_44772__$1;
(statearr_44778_44910[(2)] = null);

(statearr_44778_44910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44773 === (7))){
var inst_44768 = (state_44772[(2)]);
var state_44772__$1 = state_44772;
var statearr_44779_44911 = state_44772__$1;
(statearr_44779_44911[(2)] = inst_44768);

(statearr_44779_44911[(1)] = (3));


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
});})(__44892,c__28227__auto___44905,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async))
;
return ((function (__44892,switch__28060__auto__,c__28227__auto___44905,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0 = (function (){
var statearr_44780 = [null,null,null,null,null,null,null];
(statearr_44780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__);

(statearr_44780[(1)] = (1));

return statearr_44780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1 = (function (state_44772){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_44772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e44781){if((e44781 instanceof Object)){
var ex__28064__auto__ = e44781;
var statearr_44782_44912 = state_44772;
(statearr_44782_44912[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44913 = state_44772;
state_44772 = G__44913;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = function(state_44772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1.call(this,state_44772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__;
})()
;})(__44892,switch__28060__auto__,c__28227__auto___44905,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async))
})();
var state__28229__auto__ = (function (){var statearr_44783 = f__28228__auto__.call(null);
(statearr_44783[(6)] = c__28227__auto___44905);

return statearr_44783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(__44892,c__28227__auto___44905,G__44735_44893,G__44735_44894__$1,n__4518__auto___44891,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44735_44894__$1)].join('')));

}

var G__44914 = (__44892 + (1));
__44892 = G__44914;
continue;
} else {
}
break;
}

var c__28227__auto___44915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___44915,jobs,results,process,async){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___44915,jobs,results,process,async){
return (function (state_44805){
var state_val_44806 = (state_44805[(1)]);
if((state_val_44806 === (1))){
var state_44805__$1 = state_44805;
var statearr_44807_44916 = state_44805__$1;
(statearr_44807_44916[(2)] = null);

(statearr_44807_44916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (2))){
var state_44805__$1 = state_44805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44805__$1,(4),from);
} else {
if((state_val_44806 === (3))){
var inst_44803 = (state_44805[(2)]);
var state_44805__$1 = state_44805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44805__$1,inst_44803);
} else {
if((state_val_44806 === (4))){
var inst_44786 = (state_44805[(7)]);
var inst_44786__$1 = (state_44805[(2)]);
var inst_44787 = (inst_44786__$1 == null);
var state_44805__$1 = (function (){var statearr_44808 = state_44805;
(statearr_44808[(7)] = inst_44786__$1);

return statearr_44808;
})();
if(cljs.core.truth_(inst_44787)){
var statearr_44809_44917 = state_44805__$1;
(statearr_44809_44917[(1)] = (5));

} else {
var statearr_44810_44918 = state_44805__$1;
(statearr_44810_44918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (5))){
var inst_44789 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44805__$1 = state_44805;
var statearr_44811_44919 = state_44805__$1;
(statearr_44811_44919[(2)] = inst_44789);

(statearr_44811_44919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (6))){
var inst_44791 = (state_44805[(8)]);
var inst_44786 = (state_44805[(7)]);
var inst_44791__$1 = cljs.core.async.chan.call(null,(1));
var inst_44792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44793 = [inst_44786,inst_44791__$1];
var inst_44794 = (new cljs.core.PersistentVector(null,2,(5),inst_44792,inst_44793,null));
var state_44805__$1 = (function (){var statearr_44812 = state_44805;
(statearr_44812[(8)] = inst_44791__$1);

return statearr_44812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44805__$1,(8),jobs,inst_44794);
} else {
if((state_val_44806 === (7))){
var inst_44801 = (state_44805[(2)]);
var state_44805__$1 = state_44805;
var statearr_44813_44920 = state_44805__$1;
(statearr_44813_44920[(2)] = inst_44801);

(statearr_44813_44920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (8))){
var inst_44791 = (state_44805[(8)]);
var inst_44796 = (state_44805[(2)]);
var state_44805__$1 = (function (){var statearr_44814 = state_44805;
(statearr_44814[(9)] = inst_44796);

return statearr_44814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44805__$1,(9),results,inst_44791);
} else {
if((state_val_44806 === (9))){
var inst_44798 = (state_44805[(2)]);
var state_44805__$1 = (function (){var statearr_44815 = state_44805;
(statearr_44815[(10)] = inst_44798);

return statearr_44815;
})();
var statearr_44816_44921 = state_44805__$1;
(statearr_44816_44921[(2)] = null);

(statearr_44816_44921[(1)] = (2));


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
});})(c__28227__auto___44915,jobs,results,process,async))
;
return ((function (switch__28060__auto__,c__28227__auto___44915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0 = (function (){
var statearr_44817 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__);

(statearr_44817[(1)] = (1));

return statearr_44817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1 = (function (state_44805){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_44805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e44818){if((e44818 instanceof Object)){
var ex__28064__auto__ = e44818;
var statearr_44819_44922 = state_44805;
(statearr_44819_44922[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44923 = state_44805;
state_44805 = G__44923;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = function(state_44805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1.call(this,state_44805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___44915,jobs,results,process,async))
})();
var state__28229__auto__ = (function (){var statearr_44820 = f__28228__auto__.call(null);
(statearr_44820[(6)] = c__28227__auto___44915);

return statearr_44820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___44915,jobs,results,process,async))
);


var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__,jobs,results,process,async){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__,jobs,results,process,async){
return (function (state_44858){
var state_val_44859 = (state_44858[(1)]);
if((state_val_44859 === (7))){
var inst_44854 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44860_44924 = state_44858__$1;
(statearr_44860_44924[(2)] = inst_44854);

(statearr_44860_44924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (20))){
var state_44858__$1 = state_44858;
var statearr_44861_44925 = state_44858__$1;
(statearr_44861_44925[(2)] = null);

(statearr_44861_44925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (1))){
var state_44858__$1 = state_44858;
var statearr_44862_44926 = state_44858__$1;
(statearr_44862_44926[(2)] = null);

(statearr_44862_44926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (4))){
var inst_44823 = (state_44858[(7)]);
var inst_44823__$1 = (state_44858[(2)]);
var inst_44824 = (inst_44823__$1 == null);
var state_44858__$1 = (function (){var statearr_44863 = state_44858;
(statearr_44863[(7)] = inst_44823__$1);

return statearr_44863;
})();
if(cljs.core.truth_(inst_44824)){
var statearr_44864_44927 = state_44858__$1;
(statearr_44864_44927[(1)] = (5));

} else {
var statearr_44865_44928 = state_44858__$1;
(statearr_44865_44928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (15))){
var inst_44836 = (state_44858[(8)]);
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44858__$1,(18),to,inst_44836);
} else {
if((state_val_44859 === (21))){
var inst_44849 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44866_44929 = state_44858__$1;
(statearr_44866_44929[(2)] = inst_44849);

(statearr_44866_44929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (13))){
var inst_44851 = (state_44858[(2)]);
var state_44858__$1 = (function (){var statearr_44867 = state_44858;
(statearr_44867[(9)] = inst_44851);

return statearr_44867;
})();
var statearr_44868_44930 = state_44858__$1;
(statearr_44868_44930[(2)] = null);

(statearr_44868_44930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (6))){
var inst_44823 = (state_44858[(7)]);
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44858__$1,(11),inst_44823);
} else {
if((state_val_44859 === (17))){
var inst_44844 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
if(cljs.core.truth_(inst_44844)){
var statearr_44869_44931 = state_44858__$1;
(statearr_44869_44931[(1)] = (19));

} else {
var statearr_44870_44932 = state_44858__$1;
(statearr_44870_44932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (3))){
var inst_44856 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44858__$1,inst_44856);
} else {
if((state_val_44859 === (12))){
var inst_44833 = (state_44858[(10)]);
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44858__$1,(14),inst_44833);
} else {
if((state_val_44859 === (2))){
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44858__$1,(4),results);
} else {
if((state_val_44859 === (19))){
var state_44858__$1 = state_44858;
var statearr_44871_44933 = state_44858__$1;
(statearr_44871_44933[(2)] = null);

(statearr_44871_44933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (11))){
var inst_44833 = (state_44858[(2)]);
var state_44858__$1 = (function (){var statearr_44872 = state_44858;
(statearr_44872[(10)] = inst_44833);

return statearr_44872;
})();
var statearr_44873_44934 = state_44858__$1;
(statearr_44873_44934[(2)] = null);

(statearr_44873_44934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (9))){
var state_44858__$1 = state_44858;
var statearr_44874_44935 = state_44858__$1;
(statearr_44874_44935[(2)] = null);

(statearr_44874_44935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (5))){
var state_44858__$1 = state_44858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44875_44936 = state_44858__$1;
(statearr_44875_44936[(1)] = (8));

} else {
var statearr_44876_44937 = state_44858__$1;
(statearr_44876_44937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (14))){
var inst_44836 = (state_44858[(8)]);
var inst_44838 = (state_44858[(11)]);
var inst_44836__$1 = (state_44858[(2)]);
var inst_44837 = (inst_44836__$1 == null);
var inst_44838__$1 = cljs.core.not.call(null,inst_44837);
var state_44858__$1 = (function (){var statearr_44877 = state_44858;
(statearr_44877[(8)] = inst_44836__$1);

(statearr_44877[(11)] = inst_44838__$1);

return statearr_44877;
})();
if(inst_44838__$1){
var statearr_44878_44938 = state_44858__$1;
(statearr_44878_44938[(1)] = (15));

} else {
var statearr_44879_44939 = state_44858__$1;
(statearr_44879_44939[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (16))){
var inst_44838 = (state_44858[(11)]);
var state_44858__$1 = state_44858;
var statearr_44880_44940 = state_44858__$1;
(statearr_44880_44940[(2)] = inst_44838);

(statearr_44880_44940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (10))){
var inst_44830 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44881_44941 = state_44858__$1;
(statearr_44881_44941[(2)] = inst_44830);

(statearr_44881_44941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (18))){
var inst_44841 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44882_44942 = state_44858__$1;
(statearr_44882_44942[(2)] = inst_44841);

(statearr_44882_44942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (8))){
var inst_44827 = cljs.core.async.close_BANG_.call(null,to);
var state_44858__$1 = state_44858;
var statearr_44883_44943 = state_44858__$1;
(statearr_44883_44943[(2)] = inst_44827);

(statearr_44883_44943[(1)] = (10));


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
});})(c__28227__auto__,jobs,results,process,async))
;
return ((function (switch__28060__auto__,c__28227__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0 = (function (){
var statearr_44884 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__);

(statearr_44884[(1)] = (1));

return statearr_44884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1 = (function (state_44858){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_44858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e44885){if((e44885 instanceof Object)){
var ex__28064__auto__ = e44885;
var statearr_44886_44944 = state_44858;
(statearr_44886_44944[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44945 = state_44858;
state_44858 = G__44945;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__ = function(state_44858){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1.call(this,state_44858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__,jobs,results,process,async))
})();
var state__28229__auto__ = (function (){var statearr_44887 = f__28228__auto__.call(null);
(statearr_44887[(6)] = c__28227__auto__);

return statearr_44887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__,jobs,results,process,async))
);

return c__28227__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44947 = arguments.length;
switch (G__44947) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44950 = arguments.length;
switch (G__44950) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44953 = arguments.length;
switch (G__44953) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28227__auto___45002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___45002,tc,fc){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___45002,tc,fc){
return (function (state_44979){
var state_val_44980 = (state_44979[(1)]);
if((state_val_44980 === (7))){
var inst_44975 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
var statearr_44981_45003 = state_44979__$1;
(statearr_44981_45003[(2)] = inst_44975);

(statearr_44981_45003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (1))){
var state_44979__$1 = state_44979;
var statearr_44982_45004 = state_44979__$1;
(statearr_44982_45004[(2)] = null);

(statearr_44982_45004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (4))){
var inst_44956 = (state_44979[(7)]);
var inst_44956__$1 = (state_44979[(2)]);
var inst_44957 = (inst_44956__$1 == null);
var state_44979__$1 = (function (){var statearr_44983 = state_44979;
(statearr_44983[(7)] = inst_44956__$1);

return statearr_44983;
})();
if(cljs.core.truth_(inst_44957)){
var statearr_44984_45005 = state_44979__$1;
(statearr_44984_45005[(1)] = (5));

} else {
var statearr_44985_45006 = state_44979__$1;
(statearr_44985_45006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (13))){
var state_44979__$1 = state_44979;
var statearr_44986_45007 = state_44979__$1;
(statearr_44986_45007[(2)] = null);

(statearr_44986_45007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (6))){
var inst_44956 = (state_44979[(7)]);
var inst_44962 = p.call(null,inst_44956);
var state_44979__$1 = state_44979;
if(cljs.core.truth_(inst_44962)){
var statearr_44987_45008 = state_44979__$1;
(statearr_44987_45008[(1)] = (9));

} else {
var statearr_44988_45009 = state_44979__$1;
(statearr_44988_45009[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (3))){
var inst_44977 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44979__$1,inst_44977);
} else {
if((state_val_44980 === (12))){
var state_44979__$1 = state_44979;
var statearr_44989_45010 = state_44979__$1;
(statearr_44989_45010[(2)] = null);

(statearr_44989_45010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (2))){
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44979__$1,(4),ch);
} else {
if((state_val_44980 === (11))){
var inst_44956 = (state_44979[(7)]);
var inst_44966 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44979__$1,(8),inst_44966,inst_44956);
} else {
if((state_val_44980 === (9))){
var state_44979__$1 = state_44979;
var statearr_44990_45011 = state_44979__$1;
(statearr_44990_45011[(2)] = tc);

(statearr_44990_45011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (5))){
var inst_44959 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44960 = cljs.core.async.close_BANG_.call(null,fc);
var state_44979__$1 = (function (){var statearr_44991 = state_44979;
(statearr_44991[(8)] = inst_44959);

return statearr_44991;
})();
var statearr_44992_45012 = state_44979__$1;
(statearr_44992_45012[(2)] = inst_44960);

(statearr_44992_45012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (14))){
var inst_44973 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
var statearr_44993_45013 = state_44979__$1;
(statearr_44993_45013[(2)] = inst_44973);

(statearr_44993_45013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (10))){
var state_44979__$1 = state_44979;
var statearr_44994_45014 = state_44979__$1;
(statearr_44994_45014[(2)] = fc);

(statearr_44994_45014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (8))){
var inst_44968 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
if(cljs.core.truth_(inst_44968)){
var statearr_44995_45015 = state_44979__$1;
(statearr_44995_45015[(1)] = (12));

} else {
var statearr_44996_45016 = state_44979__$1;
(statearr_44996_45016[(1)] = (13));

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
});})(c__28227__auto___45002,tc,fc))
;
return ((function (switch__28060__auto__,c__28227__auto___45002,tc,fc){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_44997 = [null,null,null,null,null,null,null,null,null];
(statearr_44997[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_44997[(1)] = (1));

return statearr_44997;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_44979){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_44979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e44998){if((e44998 instanceof Object)){
var ex__28064__auto__ = e44998;
var statearr_44999_45017 = state_44979;
(statearr_44999_45017[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45018 = state_44979;
state_44979 = G__45018;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_44979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_44979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___45002,tc,fc))
})();
var state__28229__auto__ = (function (){var statearr_45000 = f__28228__auto__.call(null);
(statearr_45000[(6)] = c__28227__auto___45002);

return statearr_45000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___45002,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__){
return (function (state_45039){
var state_val_45040 = (state_45039[(1)]);
if((state_val_45040 === (7))){
var inst_45035 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45041_45059 = state_45039__$1;
(statearr_45041_45059[(2)] = inst_45035);

(statearr_45041_45059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (1))){
var inst_45019 = init;
var state_45039__$1 = (function (){var statearr_45042 = state_45039;
(statearr_45042[(7)] = inst_45019);

return statearr_45042;
})();
var statearr_45043_45060 = state_45039__$1;
(statearr_45043_45060[(2)] = null);

(statearr_45043_45060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (4))){
var inst_45022 = (state_45039[(8)]);
var inst_45022__$1 = (state_45039[(2)]);
var inst_45023 = (inst_45022__$1 == null);
var state_45039__$1 = (function (){var statearr_45044 = state_45039;
(statearr_45044[(8)] = inst_45022__$1);

return statearr_45044;
})();
if(cljs.core.truth_(inst_45023)){
var statearr_45045_45061 = state_45039__$1;
(statearr_45045_45061[(1)] = (5));

} else {
var statearr_45046_45062 = state_45039__$1;
(statearr_45046_45062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (6))){
var inst_45026 = (state_45039[(9)]);
var inst_45022 = (state_45039[(8)]);
var inst_45019 = (state_45039[(7)]);
var inst_45026__$1 = f.call(null,inst_45019,inst_45022);
var inst_45027 = cljs.core.reduced_QMARK_.call(null,inst_45026__$1);
var state_45039__$1 = (function (){var statearr_45047 = state_45039;
(statearr_45047[(9)] = inst_45026__$1);

return statearr_45047;
})();
if(inst_45027){
var statearr_45048_45063 = state_45039__$1;
(statearr_45048_45063[(1)] = (8));

} else {
var statearr_45049_45064 = state_45039__$1;
(statearr_45049_45064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (3))){
var inst_45037 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45039__$1,inst_45037);
} else {
if((state_val_45040 === (2))){
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45039__$1,(4),ch);
} else {
if((state_val_45040 === (9))){
var inst_45026 = (state_45039[(9)]);
var inst_45019 = inst_45026;
var state_45039__$1 = (function (){var statearr_45050 = state_45039;
(statearr_45050[(7)] = inst_45019);

return statearr_45050;
})();
var statearr_45051_45065 = state_45039__$1;
(statearr_45051_45065[(2)] = null);

(statearr_45051_45065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (5))){
var inst_45019 = (state_45039[(7)]);
var state_45039__$1 = state_45039;
var statearr_45052_45066 = state_45039__$1;
(statearr_45052_45066[(2)] = inst_45019);

(statearr_45052_45066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (10))){
var inst_45033 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45053_45067 = state_45039__$1;
(statearr_45053_45067[(2)] = inst_45033);

(statearr_45053_45067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (8))){
var inst_45026 = (state_45039[(9)]);
var inst_45029 = cljs.core.deref.call(null,inst_45026);
var state_45039__$1 = state_45039;
var statearr_45054_45068 = state_45039__$1;
(statearr_45054_45068[(2)] = inst_45029);

(statearr_45054_45068[(1)] = (10));


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
});})(c__28227__auto__))
;
return ((function (switch__28060__auto__,c__28227__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28061__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28061__auto____0 = (function (){
var statearr_45055 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45055[(0)] = cljs$core$async$reduce_$_state_machine__28061__auto__);

(statearr_45055[(1)] = (1));

return statearr_45055;
});
var cljs$core$async$reduce_$_state_machine__28061__auto____1 = (function (state_45039){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45056){if((e45056 instanceof Object)){
var ex__28064__auto__ = e45056;
var statearr_45057_45069 = state_45039;
(statearr_45057_45069[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45070 = state_45039;
state_45039 = G__45070;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28061__auto__ = function(state_45039){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28061__auto____1.call(this,state_45039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28061__auto____0;
cljs$core$async$reduce_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28061__auto____1;
return cljs$core$async$reduce_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__))
})();
var state__28229__auto__ = (function (){var statearr_45058 = f__28228__auto__.call(null);
(statearr_45058[(6)] = c__28227__auto__);

return statearr_45058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__))
);

return c__28227__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__,f__$1){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__,f__$1){
return (function (state_45076){
var state_val_45077 = (state_45076[(1)]);
if((state_val_45077 === (1))){
var inst_45071 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45076__$1 = state_45076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45076__$1,(2),inst_45071);
} else {
if((state_val_45077 === (2))){
var inst_45073 = (state_45076[(2)]);
var inst_45074 = f__$1.call(null,inst_45073);
var state_45076__$1 = state_45076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45076__$1,inst_45074);
} else {
return null;
}
}
});})(c__28227__auto__,f__$1))
;
return ((function (switch__28060__auto__,c__28227__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28061__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28061__auto____0 = (function (){
var statearr_45078 = [null,null,null,null,null,null,null];
(statearr_45078[(0)] = cljs$core$async$transduce_$_state_machine__28061__auto__);

(statearr_45078[(1)] = (1));

return statearr_45078;
});
var cljs$core$async$transduce_$_state_machine__28061__auto____1 = (function (state_45076){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45079){if((e45079 instanceof Object)){
var ex__28064__auto__ = e45079;
var statearr_45080_45082 = state_45076;
(statearr_45080_45082[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45083 = state_45076;
state_45076 = G__45083;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28061__auto__ = function(state_45076){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28061__auto____1.call(this,state_45076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28061__auto____0;
cljs$core$async$transduce_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28061__auto____1;
return cljs$core$async$transduce_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__,f__$1))
})();
var state__28229__auto__ = (function (){var statearr_45081 = f__28228__auto__.call(null);
(statearr_45081[(6)] = c__28227__auto__);

return statearr_45081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__,f__$1))
);

return c__28227__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45085 = arguments.length;
switch (G__45085) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__){
return (function (state_45110){
var state_val_45111 = (state_45110[(1)]);
if((state_val_45111 === (7))){
var inst_45092 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45112_45133 = state_45110__$1;
(statearr_45112_45133[(2)] = inst_45092);

(statearr_45112_45133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (1))){
var inst_45086 = cljs.core.seq.call(null,coll);
var inst_45087 = inst_45086;
var state_45110__$1 = (function (){var statearr_45113 = state_45110;
(statearr_45113[(7)] = inst_45087);

return statearr_45113;
})();
var statearr_45114_45134 = state_45110__$1;
(statearr_45114_45134[(2)] = null);

(statearr_45114_45134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (4))){
var inst_45087 = (state_45110[(7)]);
var inst_45090 = cljs.core.first.call(null,inst_45087);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45110__$1,(7),ch,inst_45090);
} else {
if((state_val_45111 === (13))){
var inst_45104 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45115_45135 = state_45110__$1;
(statearr_45115_45135[(2)] = inst_45104);

(statearr_45115_45135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (6))){
var inst_45095 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
if(cljs.core.truth_(inst_45095)){
var statearr_45116_45136 = state_45110__$1;
(statearr_45116_45136[(1)] = (8));

} else {
var statearr_45117_45137 = state_45110__$1;
(statearr_45117_45137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (3))){
var inst_45108 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45110__$1,inst_45108);
} else {
if((state_val_45111 === (12))){
var state_45110__$1 = state_45110;
var statearr_45118_45138 = state_45110__$1;
(statearr_45118_45138[(2)] = null);

(statearr_45118_45138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (2))){
var inst_45087 = (state_45110[(7)]);
var state_45110__$1 = state_45110;
if(cljs.core.truth_(inst_45087)){
var statearr_45119_45139 = state_45110__$1;
(statearr_45119_45139[(1)] = (4));

} else {
var statearr_45120_45140 = state_45110__$1;
(statearr_45120_45140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (11))){
var inst_45101 = cljs.core.async.close_BANG_.call(null,ch);
var state_45110__$1 = state_45110;
var statearr_45121_45141 = state_45110__$1;
(statearr_45121_45141[(2)] = inst_45101);

(statearr_45121_45141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (9))){
var state_45110__$1 = state_45110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45122_45142 = state_45110__$1;
(statearr_45122_45142[(1)] = (11));

} else {
var statearr_45123_45143 = state_45110__$1;
(statearr_45123_45143[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (5))){
var inst_45087 = (state_45110[(7)]);
var state_45110__$1 = state_45110;
var statearr_45124_45144 = state_45110__$1;
(statearr_45124_45144[(2)] = inst_45087);

(statearr_45124_45144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (10))){
var inst_45106 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45125_45145 = state_45110__$1;
(statearr_45125_45145[(2)] = inst_45106);

(statearr_45125_45145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (8))){
var inst_45087 = (state_45110[(7)]);
var inst_45097 = cljs.core.next.call(null,inst_45087);
var inst_45087__$1 = inst_45097;
var state_45110__$1 = (function (){var statearr_45126 = state_45110;
(statearr_45126[(7)] = inst_45087__$1);

return statearr_45126;
})();
var statearr_45127_45146 = state_45110__$1;
(statearr_45127_45146[(2)] = null);

(statearr_45127_45146[(1)] = (2));


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
});})(c__28227__auto__))
;
return ((function (switch__28060__auto__,c__28227__auto__){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_45128 = [null,null,null,null,null,null,null,null];
(statearr_45128[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_45128[(1)] = (1));

return statearr_45128;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_45110){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45129){if((e45129 instanceof Object)){
var ex__28064__auto__ = e45129;
var statearr_45130_45147 = state_45110;
(statearr_45130_45147[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45148 = state_45110;
state_45110 = G__45148;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_45110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_45110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__))
})();
var state__28229__auto__ = (function (){var statearr_45131 = f__28228__auto__.call(null);
(statearr_45131[(6)] = c__28227__auto__);

return statearr_45131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__))
);

return c__28227__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45149 = (function (ch,cs,meta45150){
this.ch = ch;
this.cs = cs;
this.meta45150 = meta45150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45151,meta45150__$1){
var self__ = this;
var _45151__$1 = this;
return (new cljs.core.async.t_cljs$core$async45149(self__.ch,self__.cs,meta45150__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45151){
var self__ = this;
var _45151__$1 = this;
return self__.meta45150;
});})(cs))
;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45149.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45150","meta45150",-1343354428,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45149";

cljs.core.async.t_cljs$core$async45149.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async45149");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45149.
 */
cljs.core.async.__GT_t_cljs$core$async45149 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45149(ch__$1,cs__$1,meta45150){
return (new cljs.core.async.t_cljs$core$async45149(ch__$1,cs__$1,meta45150));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45149(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28227__auto___45371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___45371,cs,m,dchan,dctr,done){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___45371,cs,m,dchan,dctr,done){
return (function (state_45286){
var state_val_45287 = (state_45286[(1)]);
if((state_val_45287 === (7))){
var inst_45282 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45288_45372 = state_45286__$1;
(statearr_45288_45372[(2)] = inst_45282);

(statearr_45288_45372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (20))){
var inst_45185 = (state_45286[(7)]);
var inst_45197 = cljs.core.first.call(null,inst_45185);
var inst_45198 = cljs.core.nth.call(null,inst_45197,(0),null);
var inst_45199 = cljs.core.nth.call(null,inst_45197,(1),null);
var state_45286__$1 = (function (){var statearr_45289 = state_45286;
(statearr_45289[(8)] = inst_45198);

return statearr_45289;
})();
if(cljs.core.truth_(inst_45199)){
var statearr_45290_45373 = state_45286__$1;
(statearr_45290_45373[(1)] = (22));

} else {
var statearr_45291_45374 = state_45286__$1;
(statearr_45291_45374[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (27))){
var inst_45234 = (state_45286[(9)]);
var inst_45229 = (state_45286[(10)]);
var inst_45227 = (state_45286[(11)]);
var inst_45154 = (state_45286[(12)]);
var inst_45234__$1 = cljs.core._nth.call(null,inst_45227,inst_45229);
var inst_45235 = cljs.core.async.put_BANG_.call(null,inst_45234__$1,inst_45154,done);
var state_45286__$1 = (function (){var statearr_45292 = state_45286;
(statearr_45292[(9)] = inst_45234__$1);

return statearr_45292;
})();
if(cljs.core.truth_(inst_45235)){
var statearr_45293_45375 = state_45286__$1;
(statearr_45293_45375[(1)] = (30));

} else {
var statearr_45294_45376 = state_45286__$1;
(statearr_45294_45376[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (1))){
var state_45286__$1 = state_45286;
var statearr_45295_45377 = state_45286__$1;
(statearr_45295_45377[(2)] = null);

(statearr_45295_45377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (24))){
var inst_45185 = (state_45286[(7)]);
var inst_45204 = (state_45286[(2)]);
var inst_45205 = cljs.core.next.call(null,inst_45185);
var inst_45163 = inst_45205;
var inst_45164 = null;
var inst_45165 = (0);
var inst_45166 = (0);
var state_45286__$1 = (function (){var statearr_45296 = state_45286;
(statearr_45296[(13)] = inst_45164);

(statearr_45296[(14)] = inst_45165);

(statearr_45296[(15)] = inst_45204);

(statearr_45296[(16)] = inst_45163);

(statearr_45296[(17)] = inst_45166);

return statearr_45296;
})();
var statearr_45297_45378 = state_45286__$1;
(statearr_45297_45378[(2)] = null);

(statearr_45297_45378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (39))){
var state_45286__$1 = state_45286;
var statearr_45301_45379 = state_45286__$1;
(statearr_45301_45379[(2)] = null);

(statearr_45301_45379[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (4))){
var inst_45154 = (state_45286[(12)]);
var inst_45154__$1 = (state_45286[(2)]);
var inst_45155 = (inst_45154__$1 == null);
var state_45286__$1 = (function (){var statearr_45302 = state_45286;
(statearr_45302[(12)] = inst_45154__$1);

return statearr_45302;
})();
if(cljs.core.truth_(inst_45155)){
var statearr_45303_45380 = state_45286__$1;
(statearr_45303_45380[(1)] = (5));

} else {
var statearr_45304_45381 = state_45286__$1;
(statearr_45304_45381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (15))){
var inst_45164 = (state_45286[(13)]);
var inst_45165 = (state_45286[(14)]);
var inst_45163 = (state_45286[(16)]);
var inst_45166 = (state_45286[(17)]);
var inst_45181 = (state_45286[(2)]);
var inst_45182 = (inst_45166 + (1));
var tmp45298 = inst_45164;
var tmp45299 = inst_45165;
var tmp45300 = inst_45163;
var inst_45163__$1 = tmp45300;
var inst_45164__$1 = tmp45298;
var inst_45165__$1 = tmp45299;
var inst_45166__$1 = inst_45182;
var state_45286__$1 = (function (){var statearr_45305 = state_45286;
(statearr_45305[(18)] = inst_45181);

(statearr_45305[(13)] = inst_45164__$1);

(statearr_45305[(14)] = inst_45165__$1);

(statearr_45305[(16)] = inst_45163__$1);

(statearr_45305[(17)] = inst_45166__$1);

return statearr_45305;
})();
var statearr_45306_45382 = state_45286__$1;
(statearr_45306_45382[(2)] = null);

(statearr_45306_45382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (21))){
var inst_45208 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45310_45383 = state_45286__$1;
(statearr_45310_45383[(2)] = inst_45208);

(statearr_45310_45383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (31))){
var inst_45234 = (state_45286[(9)]);
var inst_45238 = done.call(null,null);
var inst_45239 = cljs.core.async.untap_STAR_.call(null,m,inst_45234);
var state_45286__$1 = (function (){var statearr_45311 = state_45286;
(statearr_45311[(19)] = inst_45238);

return statearr_45311;
})();
var statearr_45312_45384 = state_45286__$1;
(statearr_45312_45384[(2)] = inst_45239);

(statearr_45312_45384[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (32))){
var inst_45228 = (state_45286[(20)]);
var inst_45229 = (state_45286[(10)]);
var inst_45226 = (state_45286[(21)]);
var inst_45227 = (state_45286[(11)]);
var inst_45241 = (state_45286[(2)]);
var inst_45242 = (inst_45229 + (1));
var tmp45307 = inst_45228;
var tmp45308 = inst_45226;
var tmp45309 = inst_45227;
var inst_45226__$1 = tmp45308;
var inst_45227__$1 = tmp45309;
var inst_45228__$1 = tmp45307;
var inst_45229__$1 = inst_45242;
var state_45286__$1 = (function (){var statearr_45313 = state_45286;
(statearr_45313[(22)] = inst_45241);

(statearr_45313[(20)] = inst_45228__$1);

(statearr_45313[(10)] = inst_45229__$1);

(statearr_45313[(21)] = inst_45226__$1);

(statearr_45313[(11)] = inst_45227__$1);

return statearr_45313;
})();
var statearr_45314_45385 = state_45286__$1;
(statearr_45314_45385[(2)] = null);

(statearr_45314_45385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (40))){
var inst_45254 = (state_45286[(23)]);
var inst_45258 = done.call(null,null);
var inst_45259 = cljs.core.async.untap_STAR_.call(null,m,inst_45254);
var state_45286__$1 = (function (){var statearr_45315 = state_45286;
(statearr_45315[(24)] = inst_45258);

return statearr_45315;
})();
var statearr_45316_45386 = state_45286__$1;
(statearr_45316_45386[(2)] = inst_45259);

(statearr_45316_45386[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (33))){
var inst_45245 = (state_45286[(25)]);
var inst_45247 = cljs.core.chunked_seq_QMARK_.call(null,inst_45245);
var state_45286__$1 = state_45286;
if(inst_45247){
var statearr_45317_45387 = state_45286__$1;
(statearr_45317_45387[(1)] = (36));

} else {
var statearr_45318_45388 = state_45286__$1;
(statearr_45318_45388[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (13))){
var inst_45175 = (state_45286[(26)]);
var inst_45178 = cljs.core.async.close_BANG_.call(null,inst_45175);
var state_45286__$1 = state_45286;
var statearr_45319_45389 = state_45286__$1;
(statearr_45319_45389[(2)] = inst_45178);

(statearr_45319_45389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (22))){
var inst_45198 = (state_45286[(8)]);
var inst_45201 = cljs.core.async.close_BANG_.call(null,inst_45198);
var state_45286__$1 = state_45286;
var statearr_45320_45390 = state_45286__$1;
(statearr_45320_45390[(2)] = inst_45201);

(statearr_45320_45390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (36))){
var inst_45245 = (state_45286[(25)]);
var inst_45249 = cljs.core.chunk_first.call(null,inst_45245);
var inst_45250 = cljs.core.chunk_rest.call(null,inst_45245);
var inst_45251 = cljs.core.count.call(null,inst_45249);
var inst_45226 = inst_45250;
var inst_45227 = inst_45249;
var inst_45228 = inst_45251;
var inst_45229 = (0);
var state_45286__$1 = (function (){var statearr_45321 = state_45286;
(statearr_45321[(20)] = inst_45228);

(statearr_45321[(10)] = inst_45229);

(statearr_45321[(21)] = inst_45226);

(statearr_45321[(11)] = inst_45227);

return statearr_45321;
})();
var statearr_45322_45391 = state_45286__$1;
(statearr_45322_45391[(2)] = null);

(statearr_45322_45391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (41))){
var inst_45245 = (state_45286[(25)]);
var inst_45261 = (state_45286[(2)]);
var inst_45262 = cljs.core.next.call(null,inst_45245);
var inst_45226 = inst_45262;
var inst_45227 = null;
var inst_45228 = (0);
var inst_45229 = (0);
var state_45286__$1 = (function (){var statearr_45323 = state_45286;
(statearr_45323[(20)] = inst_45228);

(statearr_45323[(10)] = inst_45229);

(statearr_45323[(21)] = inst_45226);

(statearr_45323[(11)] = inst_45227);

(statearr_45323[(27)] = inst_45261);

return statearr_45323;
})();
var statearr_45324_45392 = state_45286__$1;
(statearr_45324_45392[(2)] = null);

(statearr_45324_45392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (43))){
var state_45286__$1 = state_45286;
var statearr_45325_45393 = state_45286__$1;
(statearr_45325_45393[(2)] = null);

(statearr_45325_45393[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (29))){
var inst_45270 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45326_45394 = state_45286__$1;
(statearr_45326_45394[(2)] = inst_45270);

(statearr_45326_45394[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (44))){
var inst_45279 = (state_45286[(2)]);
var state_45286__$1 = (function (){var statearr_45327 = state_45286;
(statearr_45327[(28)] = inst_45279);

return statearr_45327;
})();
var statearr_45328_45395 = state_45286__$1;
(statearr_45328_45395[(2)] = null);

(statearr_45328_45395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (6))){
var inst_45218 = (state_45286[(29)]);
var inst_45217 = cljs.core.deref.call(null,cs);
var inst_45218__$1 = cljs.core.keys.call(null,inst_45217);
var inst_45219 = cljs.core.count.call(null,inst_45218__$1);
var inst_45220 = cljs.core.reset_BANG_.call(null,dctr,inst_45219);
var inst_45225 = cljs.core.seq.call(null,inst_45218__$1);
var inst_45226 = inst_45225;
var inst_45227 = null;
var inst_45228 = (0);
var inst_45229 = (0);
var state_45286__$1 = (function (){var statearr_45329 = state_45286;
(statearr_45329[(30)] = inst_45220);

(statearr_45329[(20)] = inst_45228);

(statearr_45329[(10)] = inst_45229);

(statearr_45329[(21)] = inst_45226);

(statearr_45329[(11)] = inst_45227);

(statearr_45329[(29)] = inst_45218__$1);

return statearr_45329;
})();
var statearr_45330_45396 = state_45286__$1;
(statearr_45330_45396[(2)] = null);

(statearr_45330_45396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (28))){
var inst_45226 = (state_45286[(21)]);
var inst_45245 = (state_45286[(25)]);
var inst_45245__$1 = cljs.core.seq.call(null,inst_45226);
var state_45286__$1 = (function (){var statearr_45331 = state_45286;
(statearr_45331[(25)] = inst_45245__$1);

return statearr_45331;
})();
if(inst_45245__$1){
var statearr_45332_45397 = state_45286__$1;
(statearr_45332_45397[(1)] = (33));

} else {
var statearr_45333_45398 = state_45286__$1;
(statearr_45333_45398[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (25))){
var inst_45228 = (state_45286[(20)]);
var inst_45229 = (state_45286[(10)]);
var inst_45231 = (inst_45229 < inst_45228);
var inst_45232 = inst_45231;
var state_45286__$1 = state_45286;
if(cljs.core.truth_(inst_45232)){
var statearr_45334_45399 = state_45286__$1;
(statearr_45334_45399[(1)] = (27));

} else {
var statearr_45335_45400 = state_45286__$1;
(statearr_45335_45400[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (34))){
var state_45286__$1 = state_45286;
var statearr_45336_45401 = state_45286__$1;
(statearr_45336_45401[(2)] = null);

(statearr_45336_45401[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (17))){
var state_45286__$1 = state_45286;
var statearr_45337_45402 = state_45286__$1;
(statearr_45337_45402[(2)] = null);

(statearr_45337_45402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (3))){
var inst_45284 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45286__$1,inst_45284);
} else {
if((state_val_45287 === (12))){
var inst_45213 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45338_45403 = state_45286__$1;
(statearr_45338_45403[(2)] = inst_45213);

(statearr_45338_45403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (2))){
var state_45286__$1 = state_45286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45286__$1,(4),ch);
} else {
if((state_val_45287 === (23))){
var state_45286__$1 = state_45286;
var statearr_45339_45404 = state_45286__$1;
(statearr_45339_45404[(2)] = null);

(statearr_45339_45404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (35))){
var inst_45268 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45340_45405 = state_45286__$1;
(statearr_45340_45405[(2)] = inst_45268);

(statearr_45340_45405[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (19))){
var inst_45185 = (state_45286[(7)]);
var inst_45189 = cljs.core.chunk_first.call(null,inst_45185);
var inst_45190 = cljs.core.chunk_rest.call(null,inst_45185);
var inst_45191 = cljs.core.count.call(null,inst_45189);
var inst_45163 = inst_45190;
var inst_45164 = inst_45189;
var inst_45165 = inst_45191;
var inst_45166 = (0);
var state_45286__$1 = (function (){var statearr_45341 = state_45286;
(statearr_45341[(13)] = inst_45164);

(statearr_45341[(14)] = inst_45165);

(statearr_45341[(16)] = inst_45163);

(statearr_45341[(17)] = inst_45166);

return statearr_45341;
})();
var statearr_45342_45406 = state_45286__$1;
(statearr_45342_45406[(2)] = null);

(statearr_45342_45406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (11))){
var inst_45163 = (state_45286[(16)]);
var inst_45185 = (state_45286[(7)]);
var inst_45185__$1 = cljs.core.seq.call(null,inst_45163);
var state_45286__$1 = (function (){var statearr_45343 = state_45286;
(statearr_45343[(7)] = inst_45185__$1);

return statearr_45343;
})();
if(inst_45185__$1){
var statearr_45344_45407 = state_45286__$1;
(statearr_45344_45407[(1)] = (16));

} else {
var statearr_45345_45408 = state_45286__$1;
(statearr_45345_45408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (9))){
var inst_45215 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45346_45409 = state_45286__$1;
(statearr_45346_45409[(2)] = inst_45215);

(statearr_45346_45409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (5))){
var inst_45161 = cljs.core.deref.call(null,cs);
var inst_45162 = cljs.core.seq.call(null,inst_45161);
var inst_45163 = inst_45162;
var inst_45164 = null;
var inst_45165 = (0);
var inst_45166 = (0);
var state_45286__$1 = (function (){var statearr_45347 = state_45286;
(statearr_45347[(13)] = inst_45164);

(statearr_45347[(14)] = inst_45165);

(statearr_45347[(16)] = inst_45163);

(statearr_45347[(17)] = inst_45166);

return statearr_45347;
})();
var statearr_45348_45410 = state_45286__$1;
(statearr_45348_45410[(2)] = null);

(statearr_45348_45410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (14))){
var state_45286__$1 = state_45286;
var statearr_45349_45411 = state_45286__$1;
(statearr_45349_45411[(2)] = null);

(statearr_45349_45411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (45))){
var inst_45276 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45350_45412 = state_45286__$1;
(statearr_45350_45412[(2)] = inst_45276);

(statearr_45350_45412[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (26))){
var inst_45218 = (state_45286[(29)]);
var inst_45272 = (state_45286[(2)]);
var inst_45273 = cljs.core.seq.call(null,inst_45218);
var state_45286__$1 = (function (){var statearr_45351 = state_45286;
(statearr_45351[(31)] = inst_45272);

return statearr_45351;
})();
if(inst_45273){
var statearr_45352_45413 = state_45286__$1;
(statearr_45352_45413[(1)] = (42));

} else {
var statearr_45353_45414 = state_45286__$1;
(statearr_45353_45414[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (16))){
var inst_45185 = (state_45286[(7)]);
var inst_45187 = cljs.core.chunked_seq_QMARK_.call(null,inst_45185);
var state_45286__$1 = state_45286;
if(inst_45187){
var statearr_45354_45415 = state_45286__$1;
(statearr_45354_45415[(1)] = (19));

} else {
var statearr_45355_45416 = state_45286__$1;
(statearr_45355_45416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (38))){
var inst_45265 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45356_45417 = state_45286__$1;
(statearr_45356_45417[(2)] = inst_45265);

(statearr_45356_45417[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (30))){
var state_45286__$1 = state_45286;
var statearr_45357_45418 = state_45286__$1;
(statearr_45357_45418[(2)] = null);

(statearr_45357_45418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (10))){
var inst_45164 = (state_45286[(13)]);
var inst_45166 = (state_45286[(17)]);
var inst_45174 = cljs.core._nth.call(null,inst_45164,inst_45166);
var inst_45175 = cljs.core.nth.call(null,inst_45174,(0),null);
var inst_45176 = cljs.core.nth.call(null,inst_45174,(1),null);
var state_45286__$1 = (function (){var statearr_45358 = state_45286;
(statearr_45358[(26)] = inst_45175);

return statearr_45358;
})();
if(cljs.core.truth_(inst_45176)){
var statearr_45359_45419 = state_45286__$1;
(statearr_45359_45419[(1)] = (13));

} else {
var statearr_45360_45420 = state_45286__$1;
(statearr_45360_45420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (18))){
var inst_45211 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45361_45421 = state_45286__$1;
(statearr_45361_45421[(2)] = inst_45211);

(statearr_45361_45421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (42))){
var state_45286__$1 = state_45286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45286__$1,(45),dchan);
} else {
if((state_val_45287 === (37))){
var inst_45245 = (state_45286[(25)]);
var inst_45254 = (state_45286[(23)]);
var inst_45154 = (state_45286[(12)]);
var inst_45254__$1 = cljs.core.first.call(null,inst_45245);
var inst_45255 = cljs.core.async.put_BANG_.call(null,inst_45254__$1,inst_45154,done);
var state_45286__$1 = (function (){var statearr_45362 = state_45286;
(statearr_45362[(23)] = inst_45254__$1);

return statearr_45362;
})();
if(cljs.core.truth_(inst_45255)){
var statearr_45363_45422 = state_45286__$1;
(statearr_45363_45422[(1)] = (39));

} else {
var statearr_45364_45423 = state_45286__$1;
(statearr_45364_45423[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (8))){
var inst_45165 = (state_45286[(14)]);
var inst_45166 = (state_45286[(17)]);
var inst_45168 = (inst_45166 < inst_45165);
var inst_45169 = inst_45168;
var state_45286__$1 = state_45286;
if(cljs.core.truth_(inst_45169)){
var statearr_45365_45424 = state_45286__$1;
(statearr_45365_45424[(1)] = (10));

} else {
var statearr_45366_45425 = state_45286__$1;
(statearr_45366_45425[(1)] = (11));

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
});})(c__28227__auto___45371,cs,m,dchan,dctr,done))
;
return ((function (switch__28060__auto__,c__28227__auto___45371,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28061__auto__ = null;
var cljs$core$async$mult_$_state_machine__28061__auto____0 = (function (){
var statearr_45367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45367[(0)] = cljs$core$async$mult_$_state_machine__28061__auto__);

(statearr_45367[(1)] = (1));

return statearr_45367;
});
var cljs$core$async$mult_$_state_machine__28061__auto____1 = (function (state_45286){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45368){if((e45368 instanceof Object)){
var ex__28064__auto__ = e45368;
var statearr_45369_45426 = state_45286;
(statearr_45369_45426[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45427 = state_45286;
state_45286 = G__45427;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28061__auto__ = function(state_45286){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28061__auto____1.call(this,state_45286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28061__auto____0;
cljs$core$async$mult_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28061__auto____1;
return cljs$core$async$mult_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___45371,cs,m,dchan,dctr,done))
})();
var state__28229__auto__ = (function (){var statearr_45370 = f__28228__auto__.call(null);
(statearr_45370[(6)] = c__28227__auto___45371);

return statearr_45370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___45371,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45429 = arguments.length;
switch (G__45429) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___45441 = arguments.length;
var i__4642__auto___45442 = (0);
while(true){
if((i__4642__auto___45442 < len__4641__auto___45441)){
args__4647__auto__.push((arguments[i__4642__auto___45442]));

var G__45443 = (i__4642__auto___45442 + (1));
i__4642__auto___45442 = G__45443;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45435){
var map__45436 = p__45435;
var map__45436__$1 = (((((!((map__45436 == null))))?(((((map__45436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45436):map__45436);
var opts = map__45436__$1;
var statearr_45438_45444 = state;
(statearr_45438_45444[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__45436,map__45436__$1,opts){
return (function (val){
var statearr_45439_45445 = state;
(statearr_45439_45445[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45436,map__45436__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_45440_45446 = state;
(statearr_45440_45446[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45431){
var G__45432 = cljs.core.first.call(null,seq45431);
var seq45431__$1 = cljs.core.next.call(null,seq45431);
var G__45433 = cljs.core.first.call(null,seq45431__$1);
var seq45431__$2 = cljs.core.next.call(null,seq45431__$1);
var G__45434 = cljs.core.first.call(null,seq45431__$2);
var seq45431__$3 = cljs.core.next.call(null,seq45431__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45432,G__45433,G__45434,seq45431__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45447 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45448){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45448 = meta45448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45449,meta45448__$1){
var self__ = this;
var _45449__$1 = this;
return (new cljs.core.async.t_cljs$core$async45447(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45448__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45449){
var self__ = this;
var _45449__$1 = this;
return self__.meta45448;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45448","meta45448",-1916293872,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45447";

cljs.core.async.t_cljs$core$async45447.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async45447");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45447.
 */
cljs.core.async.__GT_t_cljs$core$async45447 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45447(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45448){
return (new cljs.core.async.t_cljs$core$async45447(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45448));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45447(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28227__auto___45611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___45611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___45611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45551){
var state_val_45552 = (state_45551[(1)]);
if((state_val_45552 === (7))){
var inst_45466 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
var statearr_45553_45612 = state_45551__$1;
(statearr_45553_45612[(2)] = inst_45466);

(statearr_45553_45612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (20))){
var inst_45478 = (state_45551[(7)]);
var state_45551__$1 = state_45551;
var statearr_45554_45613 = state_45551__$1;
(statearr_45554_45613[(2)] = inst_45478);

(statearr_45554_45613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (27))){
var state_45551__$1 = state_45551;
var statearr_45555_45614 = state_45551__$1;
(statearr_45555_45614[(2)] = null);

(statearr_45555_45614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (1))){
var inst_45453 = (state_45551[(8)]);
var inst_45453__$1 = calc_state.call(null);
var inst_45455 = (inst_45453__$1 == null);
var inst_45456 = cljs.core.not.call(null,inst_45455);
var state_45551__$1 = (function (){var statearr_45556 = state_45551;
(statearr_45556[(8)] = inst_45453__$1);

return statearr_45556;
})();
if(inst_45456){
var statearr_45557_45615 = state_45551__$1;
(statearr_45557_45615[(1)] = (2));

} else {
var statearr_45558_45616 = state_45551__$1;
(statearr_45558_45616[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (24))){
var inst_45525 = (state_45551[(9)]);
var inst_45502 = (state_45551[(10)]);
var inst_45511 = (state_45551[(11)]);
var inst_45525__$1 = inst_45502.call(null,inst_45511);
var state_45551__$1 = (function (){var statearr_45559 = state_45551;
(statearr_45559[(9)] = inst_45525__$1);

return statearr_45559;
})();
if(cljs.core.truth_(inst_45525__$1)){
var statearr_45560_45617 = state_45551__$1;
(statearr_45560_45617[(1)] = (29));

} else {
var statearr_45561_45618 = state_45551__$1;
(statearr_45561_45618[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (4))){
var inst_45469 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45469)){
var statearr_45562_45619 = state_45551__$1;
(statearr_45562_45619[(1)] = (8));

} else {
var statearr_45563_45620 = state_45551__$1;
(statearr_45563_45620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (15))){
var inst_45496 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45496)){
var statearr_45564_45621 = state_45551__$1;
(statearr_45564_45621[(1)] = (19));

} else {
var statearr_45565_45622 = state_45551__$1;
(statearr_45565_45622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (21))){
var inst_45501 = (state_45551[(12)]);
var inst_45501__$1 = (state_45551[(2)]);
var inst_45502 = cljs.core.get.call(null,inst_45501__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45503 = cljs.core.get.call(null,inst_45501__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45504 = cljs.core.get.call(null,inst_45501__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45551__$1 = (function (){var statearr_45566 = state_45551;
(statearr_45566[(13)] = inst_45503);

(statearr_45566[(10)] = inst_45502);

(statearr_45566[(12)] = inst_45501__$1);

return statearr_45566;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45551__$1,(22),inst_45504);
} else {
if((state_val_45552 === (31))){
var inst_45533 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45533)){
var statearr_45567_45623 = state_45551__$1;
(statearr_45567_45623[(1)] = (32));

} else {
var statearr_45568_45624 = state_45551__$1;
(statearr_45568_45624[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (32))){
var inst_45510 = (state_45551[(14)]);
var state_45551__$1 = state_45551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45551__$1,(35),out,inst_45510);
} else {
if((state_val_45552 === (33))){
var inst_45501 = (state_45551[(12)]);
var inst_45478 = inst_45501;
var state_45551__$1 = (function (){var statearr_45569 = state_45551;
(statearr_45569[(7)] = inst_45478);

return statearr_45569;
})();
var statearr_45570_45625 = state_45551__$1;
(statearr_45570_45625[(2)] = null);

(statearr_45570_45625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (13))){
var inst_45478 = (state_45551[(7)]);
var inst_45485 = inst_45478.cljs$lang$protocol_mask$partition0$;
var inst_45486 = (inst_45485 & (64));
var inst_45487 = inst_45478.cljs$core$ISeq$;
var inst_45488 = (cljs.core.PROTOCOL_SENTINEL === inst_45487);
var inst_45489 = ((inst_45486) || (inst_45488));
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45489)){
var statearr_45571_45626 = state_45551__$1;
(statearr_45571_45626[(1)] = (16));

} else {
var statearr_45572_45627 = state_45551__$1;
(statearr_45572_45627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (22))){
var inst_45510 = (state_45551[(14)]);
var inst_45511 = (state_45551[(11)]);
var inst_45509 = (state_45551[(2)]);
var inst_45510__$1 = cljs.core.nth.call(null,inst_45509,(0),null);
var inst_45511__$1 = cljs.core.nth.call(null,inst_45509,(1),null);
var inst_45512 = (inst_45510__$1 == null);
var inst_45513 = cljs.core._EQ_.call(null,inst_45511__$1,change);
var inst_45514 = ((inst_45512) || (inst_45513));
var state_45551__$1 = (function (){var statearr_45573 = state_45551;
(statearr_45573[(14)] = inst_45510__$1);

(statearr_45573[(11)] = inst_45511__$1);

return statearr_45573;
})();
if(cljs.core.truth_(inst_45514)){
var statearr_45574_45628 = state_45551__$1;
(statearr_45574_45628[(1)] = (23));

} else {
var statearr_45575_45629 = state_45551__$1;
(statearr_45575_45629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (36))){
var inst_45501 = (state_45551[(12)]);
var inst_45478 = inst_45501;
var state_45551__$1 = (function (){var statearr_45576 = state_45551;
(statearr_45576[(7)] = inst_45478);

return statearr_45576;
})();
var statearr_45577_45630 = state_45551__$1;
(statearr_45577_45630[(2)] = null);

(statearr_45577_45630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (29))){
var inst_45525 = (state_45551[(9)]);
var state_45551__$1 = state_45551;
var statearr_45578_45631 = state_45551__$1;
(statearr_45578_45631[(2)] = inst_45525);

(statearr_45578_45631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (6))){
var state_45551__$1 = state_45551;
var statearr_45579_45632 = state_45551__$1;
(statearr_45579_45632[(2)] = false);

(statearr_45579_45632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (28))){
var inst_45521 = (state_45551[(2)]);
var inst_45522 = calc_state.call(null);
var inst_45478 = inst_45522;
var state_45551__$1 = (function (){var statearr_45580 = state_45551;
(statearr_45580[(7)] = inst_45478);

(statearr_45580[(15)] = inst_45521);

return statearr_45580;
})();
var statearr_45581_45633 = state_45551__$1;
(statearr_45581_45633[(2)] = null);

(statearr_45581_45633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (25))){
var inst_45547 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
var statearr_45582_45634 = state_45551__$1;
(statearr_45582_45634[(2)] = inst_45547);

(statearr_45582_45634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (34))){
var inst_45545 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
var statearr_45583_45635 = state_45551__$1;
(statearr_45583_45635[(2)] = inst_45545);

(statearr_45583_45635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (17))){
var state_45551__$1 = state_45551;
var statearr_45584_45636 = state_45551__$1;
(statearr_45584_45636[(2)] = false);

(statearr_45584_45636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (3))){
var state_45551__$1 = state_45551;
var statearr_45585_45637 = state_45551__$1;
(statearr_45585_45637[(2)] = false);

(statearr_45585_45637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (12))){
var inst_45549 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45551__$1,inst_45549);
} else {
if((state_val_45552 === (2))){
var inst_45453 = (state_45551[(8)]);
var inst_45458 = inst_45453.cljs$lang$protocol_mask$partition0$;
var inst_45459 = (inst_45458 & (64));
var inst_45460 = inst_45453.cljs$core$ISeq$;
var inst_45461 = (cljs.core.PROTOCOL_SENTINEL === inst_45460);
var inst_45462 = ((inst_45459) || (inst_45461));
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45462)){
var statearr_45586_45638 = state_45551__$1;
(statearr_45586_45638[(1)] = (5));

} else {
var statearr_45587_45639 = state_45551__$1;
(statearr_45587_45639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (23))){
var inst_45510 = (state_45551[(14)]);
var inst_45516 = (inst_45510 == null);
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45516)){
var statearr_45588_45640 = state_45551__$1;
(statearr_45588_45640[(1)] = (26));

} else {
var statearr_45589_45641 = state_45551__$1;
(statearr_45589_45641[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (35))){
var inst_45536 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45536)){
var statearr_45590_45642 = state_45551__$1;
(statearr_45590_45642[(1)] = (36));

} else {
var statearr_45591_45643 = state_45551__$1;
(statearr_45591_45643[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (19))){
var inst_45478 = (state_45551[(7)]);
var inst_45498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45478);
var state_45551__$1 = state_45551;
var statearr_45592_45644 = state_45551__$1;
(statearr_45592_45644[(2)] = inst_45498);

(statearr_45592_45644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (11))){
var inst_45478 = (state_45551[(7)]);
var inst_45482 = (inst_45478 == null);
var inst_45483 = cljs.core.not.call(null,inst_45482);
var state_45551__$1 = state_45551;
if(inst_45483){
var statearr_45593_45645 = state_45551__$1;
(statearr_45593_45645[(1)] = (13));

} else {
var statearr_45594_45646 = state_45551__$1;
(statearr_45594_45646[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (9))){
var inst_45453 = (state_45551[(8)]);
var state_45551__$1 = state_45551;
var statearr_45595_45647 = state_45551__$1;
(statearr_45595_45647[(2)] = inst_45453);

(statearr_45595_45647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (5))){
var state_45551__$1 = state_45551;
var statearr_45596_45648 = state_45551__$1;
(statearr_45596_45648[(2)] = true);

(statearr_45596_45648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (14))){
var state_45551__$1 = state_45551;
var statearr_45597_45649 = state_45551__$1;
(statearr_45597_45649[(2)] = false);

(statearr_45597_45649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (26))){
var inst_45511 = (state_45551[(11)]);
var inst_45518 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45511);
var state_45551__$1 = state_45551;
var statearr_45598_45650 = state_45551__$1;
(statearr_45598_45650[(2)] = inst_45518);

(statearr_45598_45650[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (16))){
var state_45551__$1 = state_45551;
var statearr_45599_45651 = state_45551__$1;
(statearr_45599_45651[(2)] = true);

(statearr_45599_45651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (38))){
var inst_45541 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
var statearr_45600_45652 = state_45551__$1;
(statearr_45600_45652[(2)] = inst_45541);

(statearr_45600_45652[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (30))){
var inst_45503 = (state_45551[(13)]);
var inst_45502 = (state_45551[(10)]);
var inst_45511 = (state_45551[(11)]);
var inst_45528 = cljs.core.empty_QMARK_.call(null,inst_45502);
var inst_45529 = inst_45503.call(null,inst_45511);
var inst_45530 = cljs.core.not.call(null,inst_45529);
var inst_45531 = ((inst_45528) && (inst_45530));
var state_45551__$1 = state_45551;
var statearr_45601_45653 = state_45551__$1;
(statearr_45601_45653[(2)] = inst_45531);

(statearr_45601_45653[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (10))){
var inst_45453 = (state_45551[(8)]);
var inst_45474 = (state_45551[(2)]);
var inst_45475 = cljs.core.get.call(null,inst_45474,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45476 = cljs.core.get.call(null,inst_45474,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45477 = cljs.core.get.call(null,inst_45474,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45478 = inst_45453;
var state_45551__$1 = (function (){var statearr_45602 = state_45551;
(statearr_45602[(16)] = inst_45475);

(statearr_45602[(7)] = inst_45478);

(statearr_45602[(17)] = inst_45477);

(statearr_45602[(18)] = inst_45476);

return statearr_45602;
})();
var statearr_45603_45654 = state_45551__$1;
(statearr_45603_45654[(2)] = null);

(statearr_45603_45654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (18))){
var inst_45493 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
var statearr_45604_45655 = state_45551__$1;
(statearr_45604_45655[(2)] = inst_45493);

(statearr_45604_45655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (37))){
var state_45551__$1 = state_45551;
var statearr_45605_45656 = state_45551__$1;
(statearr_45605_45656[(2)] = null);

(statearr_45605_45656[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45552 === (8))){
var inst_45453 = (state_45551[(8)]);
var inst_45471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45453);
var state_45551__$1 = state_45551;
var statearr_45606_45657 = state_45551__$1;
(statearr_45606_45657[(2)] = inst_45471);

(statearr_45606_45657[(1)] = (10));


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
});})(c__28227__auto___45611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28060__auto__,c__28227__auto___45611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28061__auto__ = null;
var cljs$core$async$mix_$_state_machine__28061__auto____0 = (function (){
var statearr_45607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45607[(0)] = cljs$core$async$mix_$_state_machine__28061__auto__);

(statearr_45607[(1)] = (1));

return statearr_45607;
});
var cljs$core$async$mix_$_state_machine__28061__auto____1 = (function (state_45551){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45608){if((e45608 instanceof Object)){
var ex__28064__auto__ = e45608;
var statearr_45609_45658 = state_45551;
(statearr_45609_45658[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45659 = state_45551;
state_45551 = G__45659;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28061__auto__ = function(state_45551){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28061__auto____1.call(this,state_45551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28061__auto____0;
cljs$core$async$mix_$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28061__auto____1;
return cljs$core$async$mix_$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___45611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28229__auto__ = (function (){var statearr_45610 = f__28228__auto__.call(null);
(statearr_45610[(6)] = c__28227__auto___45611);

return statearr_45610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___45611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45661 = arguments.length;
switch (G__45661) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45665 = arguments.length;
switch (G__45665) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__45663_SHARP_){
if(cljs.core.truth_(p1__45663_SHARP_.call(null,topic))){
return p1__45663_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45663_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45666 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45667){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45667 = meta45667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45668,meta45667__$1){
var self__ = this;
var _45668__$1 = this;
return (new cljs.core.async.t_cljs$core$async45666(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45667__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45668){
var self__ = this;
var _45668__$1 = this;
return self__.meta45667;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45667","meta45667",1400835184,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45666";

cljs.core.async.t_cljs$core$async45666.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async45666");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45666.
 */
cljs.core.async.__GT_t_cljs$core$async45666 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45666(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45667){
return (new cljs.core.async.t_cljs$core$async45666(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45667));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45666(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28227__auto___45786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___45786,mults,ensure_mult,p){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___45786,mults,ensure_mult,p){
return (function (state_45740){
var state_val_45741 = (state_45740[(1)]);
if((state_val_45741 === (7))){
var inst_45736 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45742_45787 = state_45740__$1;
(statearr_45742_45787[(2)] = inst_45736);

(statearr_45742_45787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (20))){
var state_45740__$1 = state_45740;
var statearr_45743_45788 = state_45740__$1;
(statearr_45743_45788[(2)] = null);

(statearr_45743_45788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (1))){
var state_45740__$1 = state_45740;
var statearr_45744_45789 = state_45740__$1;
(statearr_45744_45789[(2)] = null);

(statearr_45744_45789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (24))){
var inst_45719 = (state_45740[(7)]);
var inst_45728 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45719);
var state_45740__$1 = state_45740;
var statearr_45745_45790 = state_45740__$1;
(statearr_45745_45790[(2)] = inst_45728);

(statearr_45745_45790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (4))){
var inst_45671 = (state_45740[(8)]);
var inst_45671__$1 = (state_45740[(2)]);
var inst_45672 = (inst_45671__$1 == null);
var state_45740__$1 = (function (){var statearr_45746 = state_45740;
(statearr_45746[(8)] = inst_45671__$1);

return statearr_45746;
})();
if(cljs.core.truth_(inst_45672)){
var statearr_45747_45791 = state_45740__$1;
(statearr_45747_45791[(1)] = (5));

} else {
var statearr_45748_45792 = state_45740__$1;
(statearr_45748_45792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (15))){
var inst_45713 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45749_45793 = state_45740__$1;
(statearr_45749_45793[(2)] = inst_45713);

(statearr_45749_45793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (21))){
var inst_45733 = (state_45740[(2)]);
var state_45740__$1 = (function (){var statearr_45750 = state_45740;
(statearr_45750[(9)] = inst_45733);

return statearr_45750;
})();
var statearr_45751_45794 = state_45740__$1;
(statearr_45751_45794[(2)] = null);

(statearr_45751_45794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (13))){
var inst_45695 = (state_45740[(10)]);
var inst_45697 = cljs.core.chunked_seq_QMARK_.call(null,inst_45695);
var state_45740__$1 = state_45740;
if(inst_45697){
var statearr_45752_45795 = state_45740__$1;
(statearr_45752_45795[(1)] = (16));

} else {
var statearr_45753_45796 = state_45740__$1;
(statearr_45753_45796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (22))){
var inst_45725 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
if(cljs.core.truth_(inst_45725)){
var statearr_45754_45797 = state_45740__$1;
(statearr_45754_45797[(1)] = (23));

} else {
var statearr_45755_45798 = state_45740__$1;
(statearr_45755_45798[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (6))){
var inst_45719 = (state_45740[(7)]);
var inst_45721 = (state_45740[(11)]);
var inst_45671 = (state_45740[(8)]);
var inst_45719__$1 = topic_fn.call(null,inst_45671);
var inst_45720 = cljs.core.deref.call(null,mults);
var inst_45721__$1 = cljs.core.get.call(null,inst_45720,inst_45719__$1);
var state_45740__$1 = (function (){var statearr_45756 = state_45740;
(statearr_45756[(7)] = inst_45719__$1);

(statearr_45756[(11)] = inst_45721__$1);

return statearr_45756;
})();
if(cljs.core.truth_(inst_45721__$1)){
var statearr_45757_45799 = state_45740__$1;
(statearr_45757_45799[(1)] = (19));

} else {
var statearr_45758_45800 = state_45740__$1;
(statearr_45758_45800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (25))){
var inst_45730 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45759_45801 = state_45740__$1;
(statearr_45759_45801[(2)] = inst_45730);

(statearr_45759_45801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (17))){
var inst_45695 = (state_45740[(10)]);
var inst_45704 = cljs.core.first.call(null,inst_45695);
var inst_45705 = cljs.core.async.muxch_STAR_.call(null,inst_45704);
var inst_45706 = cljs.core.async.close_BANG_.call(null,inst_45705);
var inst_45707 = cljs.core.next.call(null,inst_45695);
var inst_45681 = inst_45707;
var inst_45682 = null;
var inst_45683 = (0);
var inst_45684 = (0);
var state_45740__$1 = (function (){var statearr_45760 = state_45740;
(statearr_45760[(12)] = inst_45682);

(statearr_45760[(13)] = inst_45684);

(statearr_45760[(14)] = inst_45683);

(statearr_45760[(15)] = inst_45681);

(statearr_45760[(16)] = inst_45706);

return statearr_45760;
})();
var statearr_45761_45802 = state_45740__$1;
(statearr_45761_45802[(2)] = null);

(statearr_45761_45802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (3))){
var inst_45738 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45740__$1,inst_45738);
} else {
if((state_val_45741 === (12))){
var inst_45715 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45762_45803 = state_45740__$1;
(statearr_45762_45803[(2)] = inst_45715);

(statearr_45762_45803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (2))){
var state_45740__$1 = state_45740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45740__$1,(4),ch);
} else {
if((state_val_45741 === (23))){
var state_45740__$1 = state_45740;
var statearr_45763_45804 = state_45740__$1;
(statearr_45763_45804[(2)] = null);

(statearr_45763_45804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (19))){
var inst_45721 = (state_45740[(11)]);
var inst_45671 = (state_45740[(8)]);
var inst_45723 = cljs.core.async.muxch_STAR_.call(null,inst_45721);
var state_45740__$1 = state_45740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45740__$1,(22),inst_45723,inst_45671);
} else {
if((state_val_45741 === (11))){
var inst_45695 = (state_45740[(10)]);
var inst_45681 = (state_45740[(15)]);
var inst_45695__$1 = cljs.core.seq.call(null,inst_45681);
var state_45740__$1 = (function (){var statearr_45764 = state_45740;
(statearr_45764[(10)] = inst_45695__$1);

return statearr_45764;
})();
if(inst_45695__$1){
var statearr_45765_45805 = state_45740__$1;
(statearr_45765_45805[(1)] = (13));

} else {
var statearr_45766_45806 = state_45740__$1;
(statearr_45766_45806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (9))){
var inst_45717 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45767_45807 = state_45740__$1;
(statearr_45767_45807[(2)] = inst_45717);

(statearr_45767_45807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (5))){
var inst_45678 = cljs.core.deref.call(null,mults);
var inst_45679 = cljs.core.vals.call(null,inst_45678);
var inst_45680 = cljs.core.seq.call(null,inst_45679);
var inst_45681 = inst_45680;
var inst_45682 = null;
var inst_45683 = (0);
var inst_45684 = (0);
var state_45740__$1 = (function (){var statearr_45768 = state_45740;
(statearr_45768[(12)] = inst_45682);

(statearr_45768[(13)] = inst_45684);

(statearr_45768[(14)] = inst_45683);

(statearr_45768[(15)] = inst_45681);

return statearr_45768;
})();
var statearr_45769_45808 = state_45740__$1;
(statearr_45769_45808[(2)] = null);

(statearr_45769_45808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (14))){
var state_45740__$1 = state_45740;
var statearr_45773_45809 = state_45740__$1;
(statearr_45773_45809[(2)] = null);

(statearr_45773_45809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (16))){
var inst_45695 = (state_45740[(10)]);
var inst_45699 = cljs.core.chunk_first.call(null,inst_45695);
var inst_45700 = cljs.core.chunk_rest.call(null,inst_45695);
var inst_45701 = cljs.core.count.call(null,inst_45699);
var inst_45681 = inst_45700;
var inst_45682 = inst_45699;
var inst_45683 = inst_45701;
var inst_45684 = (0);
var state_45740__$1 = (function (){var statearr_45774 = state_45740;
(statearr_45774[(12)] = inst_45682);

(statearr_45774[(13)] = inst_45684);

(statearr_45774[(14)] = inst_45683);

(statearr_45774[(15)] = inst_45681);

return statearr_45774;
})();
var statearr_45775_45810 = state_45740__$1;
(statearr_45775_45810[(2)] = null);

(statearr_45775_45810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (10))){
var inst_45682 = (state_45740[(12)]);
var inst_45684 = (state_45740[(13)]);
var inst_45683 = (state_45740[(14)]);
var inst_45681 = (state_45740[(15)]);
var inst_45689 = cljs.core._nth.call(null,inst_45682,inst_45684);
var inst_45690 = cljs.core.async.muxch_STAR_.call(null,inst_45689);
var inst_45691 = cljs.core.async.close_BANG_.call(null,inst_45690);
var inst_45692 = (inst_45684 + (1));
var tmp45770 = inst_45682;
var tmp45771 = inst_45683;
var tmp45772 = inst_45681;
var inst_45681__$1 = tmp45772;
var inst_45682__$1 = tmp45770;
var inst_45683__$1 = tmp45771;
var inst_45684__$1 = inst_45692;
var state_45740__$1 = (function (){var statearr_45776 = state_45740;
(statearr_45776[(12)] = inst_45682__$1);

(statearr_45776[(13)] = inst_45684__$1);

(statearr_45776[(14)] = inst_45683__$1);

(statearr_45776[(15)] = inst_45681__$1);

(statearr_45776[(17)] = inst_45691);

return statearr_45776;
})();
var statearr_45777_45811 = state_45740__$1;
(statearr_45777_45811[(2)] = null);

(statearr_45777_45811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (18))){
var inst_45710 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45778_45812 = state_45740__$1;
(statearr_45778_45812[(2)] = inst_45710);

(statearr_45778_45812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (8))){
var inst_45684 = (state_45740[(13)]);
var inst_45683 = (state_45740[(14)]);
var inst_45686 = (inst_45684 < inst_45683);
var inst_45687 = inst_45686;
var state_45740__$1 = state_45740;
if(cljs.core.truth_(inst_45687)){
var statearr_45779_45813 = state_45740__$1;
(statearr_45779_45813[(1)] = (10));

} else {
var statearr_45780_45814 = state_45740__$1;
(statearr_45780_45814[(1)] = (11));

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
});})(c__28227__auto___45786,mults,ensure_mult,p))
;
return ((function (switch__28060__auto__,c__28227__auto___45786,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_45781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45781[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_45781[(1)] = (1));

return statearr_45781;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_45740){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45782){if((e45782 instanceof Object)){
var ex__28064__auto__ = e45782;
var statearr_45783_45815 = state_45740;
(statearr_45783_45815[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45816 = state_45740;
state_45740 = G__45816;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_45740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_45740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___45786,mults,ensure_mult,p))
})();
var state__28229__auto__ = (function (){var statearr_45784 = f__28228__auto__.call(null);
(statearr_45784[(6)] = c__28227__auto___45786);

return statearr_45784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___45786,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45818 = arguments.length;
switch (G__45818) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45821 = arguments.length;
switch (G__45821) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45824 = arguments.length;
switch (G__45824) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28227__auto___45891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___45891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___45891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45863){
var state_val_45864 = (state_45863[(1)]);
if((state_val_45864 === (7))){
var state_45863__$1 = state_45863;
var statearr_45865_45892 = state_45863__$1;
(statearr_45865_45892[(2)] = null);

(statearr_45865_45892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (1))){
var state_45863__$1 = state_45863;
var statearr_45866_45893 = state_45863__$1;
(statearr_45866_45893[(2)] = null);

(statearr_45866_45893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (4))){
var inst_45827 = (state_45863[(7)]);
var inst_45829 = (inst_45827 < cnt);
var state_45863__$1 = state_45863;
if(cljs.core.truth_(inst_45829)){
var statearr_45867_45894 = state_45863__$1;
(statearr_45867_45894[(1)] = (6));

} else {
var statearr_45868_45895 = state_45863__$1;
(statearr_45868_45895[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (15))){
var inst_45859 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45869_45896 = state_45863__$1;
(statearr_45869_45896[(2)] = inst_45859);

(statearr_45869_45896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (13))){
var inst_45852 = cljs.core.async.close_BANG_.call(null,out);
var state_45863__$1 = state_45863;
var statearr_45870_45897 = state_45863__$1;
(statearr_45870_45897[(2)] = inst_45852);

(statearr_45870_45897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (6))){
var state_45863__$1 = state_45863;
var statearr_45871_45898 = state_45863__$1;
(statearr_45871_45898[(2)] = null);

(statearr_45871_45898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (3))){
var inst_45861 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45863__$1,inst_45861);
} else {
if((state_val_45864 === (12))){
var inst_45849 = (state_45863[(8)]);
var inst_45849__$1 = (state_45863[(2)]);
var inst_45850 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45849__$1);
var state_45863__$1 = (function (){var statearr_45872 = state_45863;
(statearr_45872[(8)] = inst_45849__$1);

return statearr_45872;
})();
if(cljs.core.truth_(inst_45850)){
var statearr_45873_45899 = state_45863__$1;
(statearr_45873_45899[(1)] = (13));

} else {
var statearr_45874_45900 = state_45863__$1;
(statearr_45874_45900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (2))){
var inst_45826 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45827 = (0);
var state_45863__$1 = (function (){var statearr_45875 = state_45863;
(statearr_45875[(7)] = inst_45827);

(statearr_45875[(9)] = inst_45826);

return statearr_45875;
})();
var statearr_45876_45901 = state_45863__$1;
(statearr_45876_45901[(2)] = null);

(statearr_45876_45901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (11))){
var inst_45827 = (state_45863[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45863,(10),Object,null,(9));
var inst_45836 = chs__$1.call(null,inst_45827);
var inst_45837 = done.call(null,inst_45827);
var inst_45838 = cljs.core.async.take_BANG_.call(null,inst_45836,inst_45837);
var state_45863__$1 = state_45863;
var statearr_45877_45902 = state_45863__$1;
(statearr_45877_45902[(2)] = inst_45838);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (9))){
var inst_45827 = (state_45863[(7)]);
var inst_45840 = (state_45863[(2)]);
var inst_45841 = (inst_45827 + (1));
var inst_45827__$1 = inst_45841;
var state_45863__$1 = (function (){var statearr_45878 = state_45863;
(statearr_45878[(7)] = inst_45827__$1);

(statearr_45878[(10)] = inst_45840);

return statearr_45878;
})();
var statearr_45879_45903 = state_45863__$1;
(statearr_45879_45903[(2)] = null);

(statearr_45879_45903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (5))){
var inst_45847 = (state_45863[(2)]);
var state_45863__$1 = (function (){var statearr_45880 = state_45863;
(statearr_45880[(11)] = inst_45847);

return statearr_45880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45863__$1,(12),dchan);
} else {
if((state_val_45864 === (14))){
var inst_45849 = (state_45863[(8)]);
var inst_45854 = cljs.core.apply.call(null,f,inst_45849);
var state_45863__$1 = state_45863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45863__$1,(16),out,inst_45854);
} else {
if((state_val_45864 === (16))){
var inst_45856 = (state_45863[(2)]);
var state_45863__$1 = (function (){var statearr_45881 = state_45863;
(statearr_45881[(12)] = inst_45856);

return statearr_45881;
})();
var statearr_45882_45904 = state_45863__$1;
(statearr_45882_45904[(2)] = null);

(statearr_45882_45904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (10))){
var inst_45831 = (state_45863[(2)]);
var inst_45832 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45863__$1 = (function (){var statearr_45883 = state_45863;
(statearr_45883[(13)] = inst_45831);

return statearr_45883;
})();
var statearr_45884_45905 = state_45863__$1;
(statearr_45884_45905[(2)] = inst_45832);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (8))){
var inst_45845 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45885_45906 = state_45863__$1;
(statearr_45885_45906[(2)] = inst_45845);

(statearr_45885_45906[(1)] = (5));


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
});})(c__28227__auto___45891,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28060__auto__,c__28227__auto___45891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_45886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45886[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_45886[(1)] = (1));

return statearr_45886;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_45863){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45887){if((e45887 instanceof Object)){
var ex__28064__auto__ = e45887;
var statearr_45888_45907 = state_45863;
(statearr_45888_45907[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45908 = state_45863;
state_45863 = G__45908;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_45863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_45863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___45891,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28229__auto__ = (function (){var statearr_45889 = f__28228__auto__.call(null);
(statearr_45889[(6)] = c__28227__auto___45891);

return statearr_45889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___45891,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45911 = arguments.length;
switch (G__45911) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28227__auto___45965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___45965,out){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___45965,out){
return (function (state_45943){
var state_val_45944 = (state_45943[(1)]);
if((state_val_45944 === (7))){
var inst_45922 = (state_45943[(7)]);
var inst_45923 = (state_45943[(8)]);
var inst_45922__$1 = (state_45943[(2)]);
var inst_45923__$1 = cljs.core.nth.call(null,inst_45922__$1,(0),null);
var inst_45924 = cljs.core.nth.call(null,inst_45922__$1,(1),null);
var inst_45925 = (inst_45923__$1 == null);
var state_45943__$1 = (function (){var statearr_45945 = state_45943;
(statearr_45945[(7)] = inst_45922__$1);

(statearr_45945[(9)] = inst_45924);

(statearr_45945[(8)] = inst_45923__$1);

return statearr_45945;
})();
if(cljs.core.truth_(inst_45925)){
var statearr_45946_45966 = state_45943__$1;
(statearr_45946_45966[(1)] = (8));

} else {
var statearr_45947_45967 = state_45943__$1;
(statearr_45947_45967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (1))){
var inst_45912 = cljs.core.vec.call(null,chs);
var inst_45913 = inst_45912;
var state_45943__$1 = (function (){var statearr_45948 = state_45943;
(statearr_45948[(10)] = inst_45913);

return statearr_45948;
})();
var statearr_45949_45968 = state_45943__$1;
(statearr_45949_45968[(2)] = null);

(statearr_45949_45968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (4))){
var inst_45913 = (state_45943[(10)]);
var state_45943__$1 = state_45943;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45943__$1,(7),inst_45913);
} else {
if((state_val_45944 === (6))){
var inst_45939 = (state_45943[(2)]);
var state_45943__$1 = state_45943;
var statearr_45950_45969 = state_45943__$1;
(statearr_45950_45969[(2)] = inst_45939);

(statearr_45950_45969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (3))){
var inst_45941 = (state_45943[(2)]);
var state_45943__$1 = state_45943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45943__$1,inst_45941);
} else {
if((state_val_45944 === (2))){
var inst_45913 = (state_45943[(10)]);
var inst_45915 = cljs.core.count.call(null,inst_45913);
var inst_45916 = (inst_45915 > (0));
var state_45943__$1 = state_45943;
if(cljs.core.truth_(inst_45916)){
var statearr_45952_45970 = state_45943__$1;
(statearr_45952_45970[(1)] = (4));

} else {
var statearr_45953_45971 = state_45943__$1;
(statearr_45953_45971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (11))){
var inst_45913 = (state_45943[(10)]);
var inst_45932 = (state_45943[(2)]);
var tmp45951 = inst_45913;
var inst_45913__$1 = tmp45951;
var state_45943__$1 = (function (){var statearr_45954 = state_45943;
(statearr_45954[(11)] = inst_45932);

(statearr_45954[(10)] = inst_45913__$1);

return statearr_45954;
})();
var statearr_45955_45972 = state_45943__$1;
(statearr_45955_45972[(2)] = null);

(statearr_45955_45972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (9))){
var inst_45923 = (state_45943[(8)]);
var state_45943__$1 = state_45943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45943__$1,(11),out,inst_45923);
} else {
if((state_val_45944 === (5))){
var inst_45937 = cljs.core.async.close_BANG_.call(null,out);
var state_45943__$1 = state_45943;
var statearr_45956_45973 = state_45943__$1;
(statearr_45956_45973[(2)] = inst_45937);

(statearr_45956_45973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (10))){
var inst_45935 = (state_45943[(2)]);
var state_45943__$1 = state_45943;
var statearr_45957_45974 = state_45943__$1;
(statearr_45957_45974[(2)] = inst_45935);

(statearr_45957_45974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (8))){
var inst_45922 = (state_45943[(7)]);
var inst_45913 = (state_45943[(10)]);
var inst_45924 = (state_45943[(9)]);
var inst_45923 = (state_45943[(8)]);
var inst_45927 = (function (){var cs = inst_45913;
var vec__45918 = inst_45922;
var v = inst_45923;
var c = inst_45924;
return ((function (cs,vec__45918,v,c,inst_45922,inst_45913,inst_45924,inst_45923,state_val_45944,c__28227__auto___45965,out){
return (function (p1__45909_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45909_SHARP_);
});
;})(cs,vec__45918,v,c,inst_45922,inst_45913,inst_45924,inst_45923,state_val_45944,c__28227__auto___45965,out))
})();
var inst_45928 = cljs.core.filterv.call(null,inst_45927,inst_45913);
var inst_45913__$1 = inst_45928;
var state_45943__$1 = (function (){var statearr_45958 = state_45943;
(statearr_45958[(10)] = inst_45913__$1);

return statearr_45958;
})();
var statearr_45959_45975 = state_45943__$1;
(statearr_45959_45975[(2)] = null);

(statearr_45959_45975[(1)] = (2));


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
});})(c__28227__auto___45965,out))
;
return ((function (switch__28060__auto__,c__28227__auto___45965,out){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_45960 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45960[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_45960[(1)] = (1));

return statearr_45960;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_45943){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_45943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e45961){if((e45961 instanceof Object)){
var ex__28064__auto__ = e45961;
var statearr_45962_45976 = state_45943;
(statearr_45962_45976[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45977 = state_45943;
state_45943 = G__45977;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_45943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_45943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___45965,out))
})();
var state__28229__auto__ = (function (){var statearr_45963 = f__28228__auto__.call(null);
(statearr_45963[(6)] = c__28227__auto___45965);

return statearr_45963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___45965,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45979 = arguments.length;
switch (G__45979) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28227__auto___46024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___46024,out){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___46024,out){
return (function (state_46003){
var state_val_46004 = (state_46003[(1)]);
if((state_val_46004 === (7))){
var inst_45985 = (state_46003[(7)]);
var inst_45985__$1 = (state_46003[(2)]);
var inst_45986 = (inst_45985__$1 == null);
var inst_45987 = cljs.core.not.call(null,inst_45986);
var state_46003__$1 = (function (){var statearr_46005 = state_46003;
(statearr_46005[(7)] = inst_45985__$1);

return statearr_46005;
})();
if(inst_45987){
var statearr_46006_46025 = state_46003__$1;
(statearr_46006_46025[(1)] = (8));

} else {
var statearr_46007_46026 = state_46003__$1;
(statearr_46007_46026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (1))){
var inst_45980 = (0);
var state_46003__$1 = (function (){var statearr_46008 = state_46003;
(statearr_46008[(8)] = inst_45980);

return statearr_46008;
})();
var statearr_46009_46027 = state_46003__$1;
(statearr_46009_46027[(2)] = null);

(statearr_46009_46027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (4))){
var state_46003__$1 = state_46003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46003__$1,(7),ch);
} else {
if((state_val_46004 === (6))){
var inst_45998 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46010_46028 = state_46003__$1;
(statearr_46010_46028[(2)] = inst_45998);

(statearr_46010_46028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (3))){
var inst_46000 = (state_46003[(2)]);
var inst_46001 = cljs.core.async.close_BANG_.call(null,out);
var state_46003__$1 = (function (){var statearr_46011 = state_46003;
(statearr_46011[(9)] = inst_46000);

return statearr_46011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46003__$1,inst_46001);
} else {
if((state_val_46004 === (2))){
var inst_45980 = (state_46003[(8)]);
var inst_45982 = (inst_45980 < n);
var state_46003__$1 = state_46003;
if(cljs.core.truth_(inst_45982)){
var statearr_46012_46029 = state_46003__$1;
(statearr_46012_46029[(1)] = (4));

} else {
var statearr_46013_46030 = state_46003__$1;
(statearr_46013_46030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (11))){
var inst_45980 = (state_46003[(8)]);
var inst_45990 = (state_46003[(2)]);
var inst_45991 = (inst_45980 + (1));
var inst_45980__$1 = inst_45991;
var state_46003__$1 = (function (){var statearr_46014 = state_46003;
(statearr_46014[(10)] = inst_45990);

(statearr_46014[(8)] = inst_45980__$1);

return statearr_46014;
})();
var statearr_46015_46031 = state_46003__$1;
(statearr_46015_46031[(2)] = null);

(statearr_46015_46031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (9))){
var state_46003__$1 = state_46003;
var statearr_46016_46032 = state_46003__$1;
(statearr_46016_46032[(2)] = null);

(statearr_46016_46032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (5))){
var state_46003__$1 = state_46003;
var statearr_46017_46033 = state_46003__$1;
(statearr_46017_46033[(2)] = null);

(statearr_46017_46033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (10))){
var inst_45995 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46018_46034 = state_46003__$1;
(statearr_46018_46034[(2)] = inst_45995);

(statearr_46018_46034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (8))){
var inst_45985 = (state_46003[(7)]);
var state_46003__$1 = state_46003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46003__$1,(11),out,inst_45985);
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
});})(c__28227__auto___46024,out))
;
return ((function (switch__28060__auto__,c__28227__auto___46024,out){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_46019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46019[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_46019[(1)] = (1));

return statearr_46019;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_46003){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_46003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e46020){if((e46020 instanceof Object)){
var ex__28064__auto__ = e46020;
var statearr_46021_46035 = state_46003;
(statearr_46021_46035[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46036 = state_46003;
state_46003 = G__46036;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_46003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_46003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___46024,out))
})();
var state__28229__auto__ = (function (){var statearr_46022 = f__28228__auto__.call(null);
(statearr_46022[(6)] = c__28227__auto___46024);

return statearr_46022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___46024,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46038 = (function (f,ch,meta46039){
this.f = f;
this.ch = ch;
this.meta46039 = meta46039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46040,meta46039__$1){
var self__ = this;
var _46040__$1 = this;
return (new cljs.core.async.t_cljs$core$async46038(self__.f,self__.ch,meta46039__$1));
});

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46040){
var self__ = this;
var _46040__$1 = this;
return self__.meta46039;
});

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46041 = (function (f,ch,meta46039,_,fn1,meta46042){
this.f = f;
this.ch = ch;
this.meta46039 = meta46039;
this._ = _;
this.fn1 = fn1;
this.meta46042 = meta46042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46043,meta46042__$1){
var self__ = this;
var _46043__$1 = this;
return (new cljs.core.async.t_cljs$core$async46041(self__.f,self__.ch,self__.meta46039,self__._,self__.fn1,meta46042__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46043){
var self__ = this;
var _46043__$1 = this;
return self__.meta46042;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46037_SHARP_){
return f1.call(null,(((p1__46037_SHARP_ == null))?null:self__.f.call(null,p1__46037_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46041.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46039","meta46039",2031641048,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46038","cljs.core.async/t_cljs$core$async46038",-284710377,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46042","meta46042",-1116692854,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46041";

cljs.core.async.t_cljs$core$async46041.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async46041");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46041.
 */
cljs.core.async.__GT_t_cljs$core$async46041 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46041(f__$1,ch__$1,meta46039__$1,___$2,fn1__$1,meta46042){
return (new cljs.core.async.t_cljs$core$async46041(f__$1,ch__$1,meta46039__$1,___$2,fn1__$1,meta46042));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46041(self__.f,self__.ch,self__.meta46039,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46039","meta46039",2031641048,null)], null);
});

cljs.core.async.t_cljs$core$async46038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46038";

cljs.core.async.t_cljs$core$async46038.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async46038");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46038.
 */
cljs.core.async.__GT_t_cljs$core$async46038 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46038(f__$1,ch__$1,meta46039){
return (new cljs.core.async.t_cljs$core$async46038(f__$1,ch__$1,meta46039));
});

}

return (new cljs.core.async.t_cljs$core$async46038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46044 = (function (f,ch,meta46045){
this.f = f;
this.ch = ch;
this.meta46045 = meta46045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46046,meta46045__$1){
var self__ = this;
var _46046__$1 = this;
return (new cljs.core.async.t_cljs$core$async46044(self__.f,self__.ch,meta46045__$1));
});

cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46046){
var self__ = this;
var _46046__$1 = this;
return self__.meta46045;
});

cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46045","meta46045",-1419482735,null)], null);
});

cljs.core.async.t_cljs$core$async46044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46044";

cljs.core.async.t_cljs$core$async46044.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async46044");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46044.
 */
cljs.core.async.__GT_t_cljs$core$async46044 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46044(f__$1,ch__$1,meta46045){
return (new cljs.core.async.t_cljs$core$async46044(f__$1,ch__$1,meta46045));
});

}

return (new cljs.core.async.t_cljs$core$async46044(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46047 = (function (p,ch,meta46048){
this.p = p;
this.ch = ch;
this.meta46048 = meta46048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46049,meta46048__$1){
var self__ = this;
var _46049__$1 = this;
return (new cljs.core.async.t_cljs$core$async46047(self__.p,self__.ch,meta46048__$1));
});

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46049){
var self__ = this;
var _46049__$1 = this;
return self__.meta46048;
});

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46048","meta46048",-1505198241,null)], null);
});

cljs.core.async.t_cljs$core$async46047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46047";

cljs.core.async.t_cljs$core$async46047.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async46047");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46047.
 */
cljs.core.async.__GT_t_cljs$core$async46047 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46047(p__$1,ch__$1,meta46048){
return (new cljs.core.async.t_cljs$core$async46047(p__$1,ch__$1,meta46048));
});

}

return (new cljs.core.async.t_cljs$core$async46047(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46051 = arguments.length;
switch (G__46051) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28227__auto___46091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___46091,out){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___46091,out){
return (function (state_46072){
var state_val_46073 = (state_46072[(1)]);
if((state_val_46073 === (7))){
var inst_46068 = (state_46072[(2)]);
var state_46072__$1 = state_46072;
var statearr_46074_46092 = state_46072__$1;
(statearr_46074_46092[(2)] = inst_46068);

(statearr_46074_46092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (1))){
var state_46072__$1 = state_46072;
var statearr_46075_46093 = state_46072__$1;
(statearr_46075_46093[(2)] = null);

(statearr_46075_46093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (4))){
var inst_46054 = (state_46072[(7)]);
var inst_46054__$1 = (state_46072[(2)]);
var inst_46055 = (inst_46054__$1 == null);
var state_46072__$1 = (function (){var statearr_46076 = state_46072;
(statearr_46076[(7)] = inst_46054__$1);

return statearr_46076;
})();
if(cljs.core.truth_(inst_46055)){
var statearr_46077_46094 = state_46072__$1;
(statearr_46077_46094[(1)] = (5));

} else {
var statearr_46078_46095 = state_46072__$1;
(statearr_46078_46095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (6))){
var inst_46054 = (state_46072[(7)]);
var inst_46059 = p.call(null,inst_46054);
var state_46072__$1 = state_46072;
if(cljs.core.truth_(inst_46059)){
var statearr_46079_46096 = state_46072__$1;
(statearr_46079_46096[(1)] = (8));

} else {
var statearr_46080_46097 = state_46072__$1;
(statearr_46080_46097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (3))){
var inst_46070 = (state_46072[(2)]);
var state_46072__$1 = state_46072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46072__$1,inst_46070);
} else {
if((state_val_46073 === (2))){
var state_46072__$1 = state_46072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46072__$1,(4),ch);
} else {
if((state_val_46073 === (11))){
var inst_46062 = (state_46072[(2)]);
var state_46072__$1 = state_46072;
var statearr_46081_46098 = state_46072__$1;
(statearr_46081_46098[(2)] = inst_46062);

(statearr_46081_46098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (9))){
var state_46072__$1 = state_46072;
var statearr_46082_46099 = state_46072__$1;
(statearr_46082_46099[(2)] = null);

(statearr_46082_46099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (5))){
var inst_46057 = cljs.core.async.close_BANG_.call(null,out);
var state_46072__$1 = state_46072;
var statearr_46083_46100 = state_46072__$1;
(statearr_46083_46100[(2)] = inst_46057);

(statearr_46083_46100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (10))){
var inst_46065 = (state_46072[(2)]);
var state_46072__$1 = (function (){var statearr_46084 = state_46072;
(statearr_46084[(8)] = inst_46065);

return statearr_46084;
})();
var statearr_46085_46101 = state_46072__$1;
(statearr_46085_46101[(2)] = null);

(statearr_46085_46101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (8))){
var inst_46054 = (state_46072[(7)]);
var state_46072__$1 = state_46072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46072__$1,(11),out,inst_46054);
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
});})(c__28227__auto___46091,out))
;
return ((function (switch__28060__auto__,c__28227__auto___46091,out){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_46086 = [null,null,null,null,null,null,null,null,null];
(statearr_46086[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_46086[(1)] = (1));

return statearr_46086;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_46072){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_46072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e46087){if((e46087 instanceof Object)){
var ex__28064__auto__ = e46087;
var statearr_46088_46102 = state_46072;
(statearr_46088_46102[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46103 = state_46072;
state_46072 = G__46103;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_46072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_46072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___46091,out))
})();
var state__28229__auto__ = (function (){var statearr_46089 = f__28228__auto__.call(null);
(statearr_46089[(6)] = c__28227__auto___46091);

return statearr_46089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___46091,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46105 = arguments.length;
switch (G__46105) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto__){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto__){
return (function (state_46168){
var state_val_46169 = (state_46168[(1)]);
if((state_val_46169 === (7))){
var inst_46164 = (state_46168[(2)]);
var state_46168__$1 = state_46168;
var statearr_46170_46208 = state_46168__$1;
(statearr_46170_46208[(2)] = inst_46164);

(statearr_46170_46208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (20))){
var inst_46134 = (state_46168[(7)]);
var inst_46145 = (state_46168[(2)]);
var inst_46146 = cljs.core.next.call(null,inst_46134);
var inst_46120 = inst_46146;
var inst_46121 = null;
var inst_46122 = (0);
var inst_46123 = (0);
var state_46168__$1 = (function (){var statearr_46171 = state_46168;
(statearr_46171[(8)] = inst_46145);

(statearr_46171[(9)] = inst_46120);

(statearr_46171[(10)] = inst_46121);

(statearr_46171[(11)] = inst_46123);

(statearr_46171[(12)] = inst_46122);

return statearr_46171;
})();
var statearr_46172_46209 = state_46168__$1;
(statearr_46172_46209[(2)] = null);

(statearr_46172_46209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (1))){
var state_46168__$1 = state_46168;
var statearr_46173_46210 = state_46168__$1;
(statearr_46173_46210[(2)] = null);

(statearr_46173_46210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (4))){
var inst_46109 = (state_46168[(13)]);
var inst_46109__$1 = (state_46168[(2)]);
var inst_46110 = (inst_46109__$1 == null);
var state_46168__$1 = (function (){var statearr_46174 = state_46168;
(statearr_46174[(13)] = inst_46109__$1);

return statearr_46174;
})();
if(cljs.core.truth_(inst_46110)){
var statearr_46175_46211 = state_46168__$1;
(statearr_46175_46211[(1)] = (5));

} else {
var statearr_46176_46212 = state_46168__$1;
(statearr_46176_46212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (15))){
var state_46168__$1 = state_46168;
var statearr_46180_46213 = state_46168__$1;
(statearr_46180_46213[(2)] = null);

(statearr_46180_46213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (21))){
var state_46168__$1 = state_46168;
var statearr_46181_46214 = state_46168__$1;
(statearr_46181_46214[(2)] = null);

(statearr_46181_46214[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (13))){
var inst_46120 = (state_46168[(9)]);
var inst_46121 = (state_46168[(10)]);
var inst_46123 = (state_46168[(11)]);
var inst_46122 = (state_46168[(12)]);
var inst_46130 = (state_46168[(2)]);
var inst_46131 = (inst_46123 + (1));
var tmp46177 = inst_46120;
var tmp46178 = inst_46121;
var tmp46179 = inst_46122;
var inst_46120__$1 = tmp46177;
var inst_46121__$1 = tmp46178;
var inst_46122__$1 = tmp46179;
var inst_46123__$1 = inst_46131;
var state_46168__$1 = (function (){var statearr_46182 = state_46168;
(statearr_46182[(9)] = inst_46120__$1);

(statearr_46182[(14)] = inst_46130);

(statearr_46182[(10)] = inst_46121__$1);

(statearr_46182[(11)] = inst_46123__$1);

(statearr_46182[(12)] = inst_46122__$1);

return statearr_46182;
})();
var statearr_46183_46215 = state_46168__$1;
(statearr_46183_46215[(2)] = null);

(statearr_46183_46215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (22))){
var state_46168__$1 = state_46168;
var statearr_46184_46216 = state_46168__$1;
(statearr_46184_46216[(2)] = null);

(statearr_46184_46216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (6))){
var inst_46109 = (state_46168[(13)]);
var inst_46118 = f.call(null,inst_46109);
var inst_46119 = cljs.core.seq.call(null,inst_46118);
var inst_46120 = inst_46119;
var inst_46121 = null;
var inst_46122 = (0);
var inst_46123 = (0);
var state_46168__$1 = (function (){var statearr_46185 = state_46168;
(statearr_46185[(9)] = inst_46120);

(statearr_46185[(10)] = inst_46121);

(statearr_46185[(11)] = inst_46123);

(statearr_46185[(12)] = inst_46122);

return statearr_46185;
})();
var statearr_46186_46217 = state_46168__$1;
(statearr_46186_46217[(2)] = null);

(statearr_46186_46217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (17))){
var inst_46134 = (state_46168[(7)]);
var inst_46138 = cljs.core.chunk_first.call(null,inst_46134);
var inst_46139 = cljs.core.chunk_rest.call(null,inst_46134);
var inst_46140 = cljs.core.count.call(null,inst_46138);
var inst_46120 = inst_46139;
var inst_46121 = inst_46138;
var inst_46122 = inst_46140;
var inst_46123 = (0);
var state_46168__$1 = (function (){var statearr_46187 = state_46168;
(statearr_46187[(9)] = inst_46120);

(statearr_46187[(10)] = inst_46121);

(statearr_46187[(11)] = inst_46123);

(statearr_46187[(12)] = inst_46122);

return statearr_46187;
})();
var statearr_46188_46218 = state_46168__$1;
(statearr_46188_46218[(2)] = null);

(statearr_46188_46218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (3))){
var inst_46166 = (state_46168[(2)]);
var state_46168__$1 = state_46168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46168__$1,inst_46166);
} else {
if((state_val_46169 === (12))){
var inst_46154 = (state_46168[(2)]);
var state_46168__$1 = state_46168;
var statearr_46189_46219 = state_46168__$1;
(statearr_46189_46219[(2)] = inst_46154);

(statearr_46189_46219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (2))){
var state_46168__$1 = state_46168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46168__$1,(4),in$);
} else {
if((state_val_46169 === (23))){
var inst_46162 = (state_46168[(2)]);
var state_46168__$1 = state_46168;
var statearr_46190_46220 = state_46168__$1;
(statearr_46190_46220[(2)] = inst_46162);

(statearr_46190_46220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (19))){
var inst_46149 = (state_46168[(2)]);
var state_46168__$1 = state_46168;
var statearr_46191_46221 = state_46168__$1;
(statearr_46191_46221[(2)] = inst_46149);

(statearr_46191_46221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (11))){
var inst_46120 = (state_46168[(9)]);
var inst_46134 = (state_46168[(7)]);
var inst_46134__$1 = cljs.core.seq.call(null,inst_46120);
var state_46168__$1 = (function (){var statearr_46192 = state_46168;
(statearr_46192[(7)] = inst_46134__$1);

return statearr_46192;
})();
if(inst_46134__$1){
var statearr_46193_46222 = state_46168__$1;
(statearr_46193_46222[(1)] = (14));

} else {
var statearr_46194_46223 = state_46168__$1;
(statearr_46194_46223[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (9))){
var inst_46156 = (state_46168[(2)]);
var inst_46157 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46168__$1 = (function (){var statearr_46195 = state_46168;
(statearr_46195[(15)] = inst_46156);

return statearr_46195;
})();
if(cljs.core.truth_(inst_46157)){
var statearr_46196_46224 = state_46168__$1;
(statearr_46196_46224[(1)] = (21));

} else {
var statearr_46197_46225 = state_46168__$1;
(statearr_46197_46225[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (5))){
var inst_46112 = cljs.core.async.close_BANG_.call(null,out);
var state_46168__$1 = state_46168;
var statearr_46198_46226 = state_46168__$1;
(statearr_46198_46226[(2)] = inst_46112);

(statearr_46198_46226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (14))){
var inst_46134 = (state_46168[(7)]);
var inst_46136 = cljs.core.chunked_seq_QMARK_.call(null,inst_46134);
var state_46168__$1 = state_46168;
if(inst_46136){
var statearr_46199_46227 = state_46168__$1;
(statearr_46199_46227[(1)] = (17));

} else {
var statearr_46200_46228 = state_46168__$1;
(statearr_46200_46228[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (16))){
var inst_46152 = (state_46168[(2)]);
var state_46168__$1 = state_46168;
var statearr_46201_46229 = state_46168__$1;
(statearr_46201_46229[(2)] = inst_46152);

(statearr_46201_46229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46169 === (10))){
var inst_46121 = (state_46168[(10)]);
var inst_46123 = (state_46168[(11)]);
var inst_46128 = cljs.core._nth.call(null,inst_46121,inst_46123);
var state_46168__$1 = state_46168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46168__$1,(13),out,inst_46128);
} else {
if((state_val_46169 === (18))){
var inst_46134 = (state_46168[(7)]);
var inst_46143 = cljs.core.first.call(null,inst_46134);
var state_46168__$1 = state_46168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46168__$1,(20),out,inst_46143);
} else {
if((state_val_46169 === (8))){
var inst_46123 = (state_46168[(11)]);
var inst_46122 = (state_46168[(12)]);
var inst_46125 = (inst_46123 < inst_46122);
var inst_46126 = inst_46125;
var state_46168__$1 = state_46168;
if(cljs.core.truth_(inst_46126)){
var statearr_46202_46230 = state_46168__$1;
(statearr_46202_46230[(1)] = (10));

} else {
var statearr_46203_46231 = state_46168__$1;
(statearr_46203_46231[(1)] = (11));

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
});})(c__28227__auto__))
;
return ((function (switch__28060__auto__,c__28227__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28061__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28061__auto____0 = (function (){
var statearr_46204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46204[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28061__auto__);

(statearr_46204[(1)] = (1));

return statearr_46204;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28061__auto____1 = (function (state_46168){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_46168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e46205){if((e46205 instanceof Object)){
var ex__28064__auto__ = e46205;
var statearr_46206_46232 = state_46168;
(statearr_46206_46232[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46233 = state_46168;
state_46168 = G__46233;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28061__auto__ = function(state_46168){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28061__auto____1.call(this,state_46168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28061__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28061__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto__))
})();
var state__28229__auto__ = (function (){var statearr_46207 = f__28228__auto__.call(null);
(statearr_46207[(6)] = c__28227__auto__);

return statearr_46207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto__))
);

return c__28227__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46235 = arguments.length;
switch (G__46235) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46238 = arguments.length;
switch (G__46238) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46241 = arguments.length;
switch (G__46241) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28227__auto___46288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___46288,out){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___46288,out){
return (function (state_46265){
var state_val_46266 = (state_46265[(1)]);
if((state_val_46266 === (7))){
var inst_46260 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46267_46289 = state_46265__$1;
(statearr_46267_46289[(2)] = inst_46260);

(statearr_46267_46289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (1))){
var inst_46242 = null;
var state_46265__$1 = (function (){var statearr_46268 = state_46265;
(statearr_46268[(7)] = inst_46242);

return statearr_46268;
})();
var statearr_46269_46290 = state_46265__$1;
(statearr_46269_46290[(2)] = null);

(statearr_46269_46290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (4))){
var inst_46245 = (state_46265[(8)]);
var inst_46245__$1 = (state_46265[(2)]);
var inst_46246 = (inst_46245__$1 == null);
var inst_46247 = cljs.core.not.call(null,inst_46246);
var state_46265__$1 = (function (){var statearr_46270 = state_46265;
(statearr_46270[(8)] = inst_46245__$1);

return statearr_46270;
})();
if(inst_46247){
var statearr_46271_46291 = state_46265__$1;
(statearr_46271_46291[(1)] = (5));

} else {
var statearr_46272_46292 = state_46265__$1;
(statearr_46272_46292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (6))){
var state_46265__$1 = state_46265;
var statearr_46273_46293 = state_46265__$1;
(statearr_46273_46293[(2)] = null);

(statearr_46273_46293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (3))){
var inst_46262 = (state_46265[(2)]);
var inst_46263 = cljs.core.async.close_BANG_.call(null,out);
var state_46265__$1 = (function (){var statearr_46274 = state_46265;
(statearr_46274[(9)] = inst_46262);

return statearr_46274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46265__$1,inst_46263);
} else {
if((state_val_46266 === (2))){
var state_46265__$1 = state_46265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46265__$1,(4),ch);
} else {
if((state_val_46266 === (11))){
var inst_46245 = (state_46265[(8)]);
var inst_46254 = (state_46265[(2)]);
var inst_46242 = inst_46245;
var state_46265__$1 = (function (){var statearr_46275 = state_46265;
(statearr_46275[(7)] = inst_46242);

(statearr_46275[(10)] = inst_46254);

return statearr_46275;
})();
var statearr_46276_46294 = state_46265__$1;
(statearr_46276_46294[(2)] = null);

(statearr_46276_46294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (9))){
var inst_46245 = (state_46265[(8)]);
var state_46265__$1 = state_46265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46265__$1,(11),out,inst_46245);
} else {
if((state_val_46266 === (5))){
var inst_46242 = (state_46265[(7)]);
var inst_46245 = (state_46265[(8)]);
var inst_46249 = cljs.core._EQ_.call(null,inst_46245,inst_46242);
var state_46265__$1 = state_46265;
if(inst_46249){
var statearr_46278_46295 = state_46265__$1;
(statearr_46278_46295[(1)] = (8));

} else {
var statearr_46279_46296 = state_46265__$1;
(statearr_46279_46296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (10))){
var inst_46257 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46280_46297 = state_46265__$1;
(statearr_46280_46297[(2)] = inst_46257);

(statearr_46280_46297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (8))){
var inst_46242 = (state_46265[(7)]);
var tmp46277 = inst_46242;
var inst_46242__$1 = tmp46277;
var state_46265__$1 = (function (){var statearr_46281 = state_46265;
(statearr_46281[(7)] = inst_46242__$1);

return statearr_46281;
})();
var statearr_46282_46298 = state_46265__$1;
(statearr_46282_46298[(2)] = null);

(statearr_46282_46298[(1)] = (2));


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
});})(c__28227__auto___46288,out))
;
return ((function (switch__28060__auto__,c__28227__auto___46288,out){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_46283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46283[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_46283[(1)] = (1));

return statearr_46283;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_46265){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_46265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e46284){if((e46284 instanceof Object)){
var ex__28064__auto__ = e46284;
var statearr_46285_46299 = state_46265;
(statearr_46285_46299[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46300 = state_46265;
state_46265 = G__46300;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_46265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_46265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___46288,out))
})();
var state__28229__auto__ = (function (){var statearr_46286 = f__28228__auto__.call(null);
(statearr_46286[(6)] = c__28227__auto___46288);

return statearr_46286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___46288,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46302 = arguments.length;
switch (G__46302) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28227__auto___46368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___46368,out){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___46368,out){
return (function (state_46340){
var state_val_46341 = (state_46340[(1)]);
if((state_val_46341 === (7))){
var inst_46336 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46342_46369 = state_46340__$1;
(statearr_46342_46369[(2)] = inst_46336);

(statearr_46342_46369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (1))){
var inst_46303 = (new Array(n));
var inst_46304 = inst_46303;
var inst_46305 = (0);
var state_46340__$1 = (function (){var statearr_46343 = state_46340;
(statearr_46343[(7)] = inst_46304);

(statearr_46343[(8)] = inst_46305);

return statearr_46343;
})();
var statearr_46344_46370 = state_46340__$1;
(statearr_46344_46370[(2)] = null);

(statearr_46344_46370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (4))){
var inst_46308 = (state_46340[(9)]);
var inst_46308__$1 = (state_46340[(2)]);
var inst_46309 = (inst_46308__$1 == null);
var inst_46310 = cljs.core.not.call(null,inst_46309);
var state_46340__$1 = (function (){var statearr_46345 = state_46340;
(statearr_46345[(9)] = inst_46308__$1);

return statearr_46345;
})();
if(inst_46310){
var statearr_46346_46371 = state_46340__$1;
(statearr_46346_46371[(1)] = (5));

} else {
var statearr_46347_46372 = state_46340__$1;
(statearr_46347_46372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (15))){
var inst_46330 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46348_46373 = state_46340__$1;
(statearr_46348_46373[(2)] = inst_46330);

(statearr_46348_46373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (13))){
var state_46340__$1 = state_46340;
var statearr_46349_46374 = state_46340__$1;
(statearr_46349_46374[(2)] = null);

(statearr_46349_46374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (6))){
var inst_46305 = (state_46340[(8)]);
var inst_46326 = (inst_46305 > (0));
var state_46340__$1 = state_46340;
if(cljs.core.truth_(inst_46326)){
var statearr_46350_46375 = state_46340__$1;
(statearr_46350_46375[(1)] = (12));

} else {
var statearr_46351_46376 = state_46340__$1;
(statearr_46351_46376[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (3))){
var inst_46338 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46340__$1,inst_46338);
} else {
if((state_val_46341 === (12))){
var inst_46304 = (state_46340[(7)]);
var inst_46328 = cljs.core.vec.call(null,inst_46304);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46340__$1,(15),out,inst_46328);
} else {
if((state_val_46341 === (2))){
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46340__$1,(4),ch);
} else {
if((state_val_46341 === (11))){
var inst_46320 = (state_46340[(2)]);
var inst_46321 = (new Array(n));
var inst_46304 = inst_46321;
var inst_46305 = (0);
var state_46340__$1 = (function (){var statearr_46352 = state_46340;
(statearr_46352[(7)] = inst_46304);

(statearr_46352[(8)] = inst_46305);

(statearr_46352[(10)] = inst_46320);

return statearr_46352;
})();
var statearr_46353_46377 = state_46340__$1;
(statearr_46353_46377[(2)] = null);

(statearr_46353_46377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (9))){
var inst_46304 = (state_46340[(7)]);
var inst_46318 = cljs.core.vec.call(null,inst_46304);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46340__$1,(11),out,inst_46318);
} else {
if((state_val_46341 === (5))){
var inst_46304 = (state_46340[(7)]);
var inst_46305 = (state_46340[(8)]);
var inst_46308 = (state_46340[(9)]);
var inst_46313 = (state_46340[(11)]);
var inst_46312 = (inst_46304[inst_46305] = inst_46308);
var inst_46313__$1 = (inst_46305 + (1));
var inst_46314 = (inst_46313__$1 < n);
var state_46340__$1 = (function (){var statearr_46354 = state_46340;
(statearr_46354[(12)] = inst_46312);

(statearr_46354[(11)] = inst_46313__$1);

return statearr_46354;
})();
if(cljs.core.truth_(inst_46314)){
var statearr_46355_46378 = state_46340__$1;
(statearr_46355_46378[(1)] = (8));

} else {
var statearr_46356_46379 = state_46340__$1;
(statearr_46356_46379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (14))){
var inst_46333 = (state_46340[(2)]);
var inst_46334 = cljs.core.async.close_BANG_.call(null,out);
var state_46340__$1 = (function (){var statearr_46358 = state_46340;
(statearr_46358[(13)] = inst_46333);

return statearr_46358;
})();
var statearr_46359_46380 = state_46340__$1;
(statearr_46359_46380[(2)] = inst_46334);

(statearr_46359_46380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (10))){
var inst_46324 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46360_46381 = state_46340__$1;
(statearr_46360_46381[(2)] = inst_46324);

(statearr_46360_46381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (8))){
var inst_46304 = (state_46340[(7)]);
var inst_46313 = (state_46340[(11)]);
var tmp46357 = inst_46304;
var inst_46304__$1 = tmp46357;
var inst_46305 = inst_46313;
var state_46340__$1 = (function (){var statearr_46361 = state_46340;
(statearr_46361[(7)] = inst_46304__$1);

(statearr_46361[(8)] = inst_46305);

return statearr_46361;
})();
var statearr_46362_46382 = state_46340__$1;
(statearr_46362_46382[(2)] = null);

(statearr_46362_46382[(1)] = (2));


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
});})(c__28227__auto___46368,out))
;
return ((function (switch__28060__auto__,c__28227__auto___46368,out){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_46363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46363[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_46363[(1)] = (1));

return statearr_46363;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_46340){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_46340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e46364){if((e46364 instanceof Object)){
var ex__28064__auto__ = e46364;
var statearr_46365_46383 = state_46340;
(statearr_46365_46383[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46384 = state_46340;
state_46340 = G__46384;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_46340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_46340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___46368,out))
})();
var state__28229__auto__ = (function (){var statearr_46366 = f__28228__auto__.call(null);
(statearr_46366[(6)] = c__28227__auto___46368);

return statearr_46366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___46368,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46386 = arguments.length;
switch (G__46386) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28227__auto___46456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28227__auto___46456,out){
return (function (){
var f__28228__auto__ = (function (){var switch__28060__auto__ = ((function (c__28227__auto___46456,out){
return (function (state_46428){
var state_val_46429 = (state_46428[(1)]);
if((state_val_46429 === (7))){
var inst_46424 = (state_46428[(2)]);
var state_46428__$1 = state_46428;
var statearr_46430_46457 = state_46428__$1;
(statearr_46430_46457[(2)] = inst_46424);

(statearr_46430_46457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (1))){
var inst_46387 = [];
var inst_46388 = inst_46387;
var inst_46389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46428__$1 = (function (){var statearr_46431 = state_46428;
(statearr_46431[(7)] = inst_46388);

(statearr_46431[(8)] = inst_46389);

return statearr_46431;
})();
var statearr_46432_46458 = state_46428__$1;
(statearr_46432_46458[(2)] = null);

(statearr_46432_46458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (4))){
var inst_46392 = (state_46428[(9)]);
var inst_46392__$1 = (state_46428[(2)]);
var inst_46393 = (inst_46392__$1 == null);
var inst_46394 = cljs.core.not.call(null,inst_46393);
var state_46428__$1 = (function (){var statearr_46433 = state_46428;
(statearr_46433[(9)] = inst_46392__$1);

return statearr_46433;
})();
if(inst_46394){
var statearr_46434_46459 = state_46428__$1;
(statearr_46434_46459[(1)] = (5));

} else {
var statearr_46435_46460 = state_46428__$1;
(statearr_46435_46460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (15))){
var inst_46418 = (state_46428[(2)]);
var state_46428__$1 = state_46428;
var statearr_46436_46461 = state_46428__$1;
(statearr_46436_46461[(2)] = inst_46418);

(statearr_46436_46461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (13))){
var state_46428__$1 = state_46428;
var statearr_46437_46462 = state_46428__$1;
(statearr_46437_46462[(2)] = null);

(statearr_46437_46462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (6))){
var inst_46388 = (state_46428[(7)]);
var inst_46413 = inst_46388.length;
var inst_46414 = (inst_46413 > (0));
var state_46428__$1 = state_46428;
if(cljs.core.truth_(inst_46414)){
var statearr_46438_46463 = state_46428__$1;
(statearr_46438_46463[(1)] = (12));

} else {
var statearr_46439_46464 = state_46428__$1;
(statearr_46439_46464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (3))){
var inst_46426 = (state_46428[(2)]);
var state_46428__$1 = state_46428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46428__$1,inst_46426);
} else {
if((state_val_46429 === (12))){
var inst_46388 = (state_46428[(7)]);
var inst_46416 = cljs.core.vec.call(null,inst_46388);
var state_46428__$1 = state_46428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46428__$1,(15),out,inst_46416);
} else {
if((state_val_46429 === (2))){
var state_46428__$1 = state_46428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46428__$1,(4),ch);
} else {
if((state_val_46429 === (11))){
var inst_46396 = (state_46428[(10)]);
var inst_46392 = (state_46428[(9)]);
var inst_46406 = (state_46428[(2)]);
var inst_46407 = [];
var inst_46408 = inst_46407.push(inst_46392);
var inst_46388 = inst_46407;
var inst_46389 = inst_46396;
var state_46428__$1 = (function (){var statearr_46440 = state_46428;
(statearr_46440[(11)] = inst_46406);

(statearr_46440[(7)] = inst_46388);

(statearr_46440[(8)] = inst_46389);

(statearr_46440[(12)] = inst_46408);

return statearr_46440;
})();
var statearr_46441_46465 = state_46428__$1;
(statearr_46441_46465[(2)] = null);

(statearr_46441_46465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (9))){
var inst_46388 = (state_46428[(7)]);
var inst_46404 = cljs.core.vec.call(null,inst_46388);
var state_46428__$1 = state_46428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46428__$1,(11),out,inst_46404);
} else {
if((state_val_46429 === (5))){
var inst_46396 = (state_46428[(10)]);
var inst_46392 = (state_46428[(9)]);
var inst_46389 = (state_46428[(8)]);
var inst_46396__$1 = f.call(null,inst_46392);
var inst_46397 = cljs.core._EQ_.call(null,inst_46396__$1,inst_46389);
var inst_46398 = cljs.core.keyword_identical_QMARK_.call(null,inst_46389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46399 = ((inst_46397) || (inst_46398));
var state_46428__$1 = (function (){var statearr_46442 = state_46428;
(statearr_46442[(10)] = inst_46396__$1);

return statearr_46442;
})();
if(cljs.core.truth_(inst_46399)){
var statearr_46443_46466 = state_46428__$1;
(statearr_46443_46466[(1)] = (8));

} else {
var statearr_46444_46467 = state_46428__$1;
(statearr_46444_46467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (14))){
var inst_46421 = (state_46428[(2)]);
var inst_46422 = cljs.core.async.close_BANG_.call(null,out);
var state_46428__$1 = (function (){var statearr_46446 = state_46428;
(statearr_46446[(13)] = inst_46421);

return statearr_46446;
})();
var statearr_46447_46468 = state_46428__$1;
(statearr_46447_46468[(2)] = inst_46422);

(statearr_46447_46468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (10))){
var inst_46411 = (state_46428[(2)]);
var state_46428__$1 = state_46428;
var statearr_46448_46469 = state_46428__$1;
(statearr_46448_46469[(2)] = inst_46411);

(statearr_46448_46469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46429 === (8))){
var inst_46388 = (state_46428[(7)]);
var inst_46396 = (state_46428[(10)]);
var inst_46392 = (state_46428[(9)]);
var inst_46401 = inst_46388.push(inst_46392);
var tmp46445 = inst_46388;
var inst_46388__$1 = tmp46445;
var inst_46389 = inst_46396;
var state_46428__$1 = (function (){var statearr_46449 = state_46428;
(statearr_46449[(7)] = inst_46388__$1);

(statearr_46449[(8)] = inst_46389);

(statearr_46449[(14)] = inst_46401);

return statearr_46449;
})();
var statearr_46450_46470 = state_46428__$1;
(statearr_46450_46470[(2)] = null);

(statearr_46450_46470[(1)] = (2));


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
});})(c__28227__auto___46456,out))
;
return ((function (switch__28060__auto__,c__28227__auto___46456,out){
return (function() {
var cljs$core$async$state_machine__28061__auto__ = null;
var cljs$core$async$state_machine__28061__auto____0 = (function (){
var statearr_46451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46451[(0)] = cljs$core$async$state_machine__28061__auto__);

(statearr_46451[(1)] = (1));

return statearr_46451;
});
var cljs$core$async$state_machine__28061__auto____1 = (function (state_46428){
while(true){
var ret_value__28062__auto__ = (function (){try{while(true){
var result__28063__auto__ = switch__28060__auto__.call(null,state_46428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28063__auto__;
}
break;
}
}catch (e46452){if((e46452 instanceof Object)){
var ex__28064__auto__ = e46452;
var statearr_46453_46471 = state_46428;
(statearr_46453_46471[(5)] = ex__28064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46472 = state_46428;
state_46428 = G__46472;
continue;
} else {
return ret_value__28062__auto__;
}
break;
}
});
cljs$core$async$state_machine__28061__auto__ = function(state_46428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28061__auto____1.call(this,state_46428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28061__auto____0;
cljs$core$async$state_machine__28061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28061__auto____1;
return cljs$core$async$state_machine__28061__auto__;
})()
;})(switch__28060__auto__,c__28227__auto___46456,out))
})();
var state__28229__auto__ = (function (){var statearr_46454 = f__28228__auto__.call(null);
(statearr_46454[(6)] = c__28227__auto___46456);

return statearr_46454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28229__auto__);
});})(c__28227__auto___46456,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545897060074
