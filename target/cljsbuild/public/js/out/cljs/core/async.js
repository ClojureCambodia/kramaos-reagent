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
var G__42047 = arguments.length;
switch (G__42047) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42048 = (function (f,blockable,meta42049){
this.f = f;
this.blockable = blockable;
this.meta42049 = meta42049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42050,meta42049__$1){
var self__ = this;
var _42050__$1 = this;
return (new cljs.core.async.t_cljs$core$async42048(self__.f,self__.blockable,meta42049__$1));
});

cljs.core.async.t_cljs$core$async42048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42050){
var self__ = this;
var _42050__$1 = this;
return self__.meta42049;
});

cljs.core.async.t_cljs$core$async42048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42049","meta42049",1849498385,null)], null);
});

cljs.core.async.t_cljs$core$async42048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42048";

cljs.core.async.t_cljs$core$async42048.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42048");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42048.
 */
cljs.core.async.__GT_t_cljs$core$async42048 = (function cljs$core$async$__GT_t_cljs$core$async42048(f__$1,blockable__$1,meta42049){
return (new cljs.core.async.t_cljs$core$async42048(f__$1,blockable__$1,meta42049));
});

}

return (new cljs.core.async.t_cljs$core$async42048(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42054 = arguments.length;
switch (G__42054) {
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
var G__42057 = arguments.length;
switch (G__42057) {
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
var G__42060 = arguments.length;
switch (G__42060) {
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
var val_42062 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42062);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42062,ret){
return (function (){
return fn1.call(null,val_42062);
});})(val_42062,ret))
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
var G__42064 = arguments.length;
switch (G__42064) {
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
var n__4518__auto___42066 = n;
var x_42067 = (0);
while(true){
if((x_42067 < n__4518__auto___42066)){
(a[x_42067] = (0));

var G__42068 = (x_42067 + (1));
x_42067 = G__42068;
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

var G__42069 = (i + (1));
i = G__42069;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42070 = (function (flag,meta42071){
this.flag = flag;
this.meta42071 = meta42071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42072,meta42071__$1){
var self__ = this;
var _42072__$1 = this;
return (new cljs.core.async.t_cljs$core$async42070(self__.flag,meta42071__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42072){
var self__ = this;
var _42072__$1 = this;
return self__.meta42071;
});})(flag))
;

cljs.core.async.t_cljs$core$async42070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42070.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42071","meta42071",-1383840078,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42070";

cljs.core.async.t_cljs$core$async42070.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42070");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42070.
 */
cljs.core.async.__GT_t_cljs$core$async42070 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42070(flag__$1,meta42071){
return (new cljs.core.async.t_cljs$core$async42070(flag__$1,meta42071));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42070(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42073 = (function (flag,cb,meta42074){
this.flag = flag;
this.cb = cb;
this.meta42074 = meta42074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42075,meta42074__$1){
var self__ = this;
var _42075__$1 = this;
return (new cljs.core.async.t_cljs$core$async42073(self__.flag,self__.cb,meta42074__$1));
});

cljs.core.async.t_cljs$core$async42073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42075){
var self__ = this;
var _42075__$1 = this;
return self__.meta42074;
});

cljs.core.async.t_cljs$core$async42073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42074","meta42074",-1389799877,null)], null);
});

cljs.core.async.t_cljs$core$async42073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42073";

cljs.core.async.t_cljs$core$async42073.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42073");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42073.
 */
cljs.core.async.__GT_t_cljs$core$async42073 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42073(flag__$1,cb__$1,meta42074){
return (new cljs.core.async.t_cljs$core$async42073(flag__$1,cb__$1,meta42074));
});

}

return (new cljs.core.async.t_cljs$core$async42073(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42076_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42076_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42077_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42077_SHARP_,port], null));
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
var G__42078 = (i + (1));
i = G__42078;
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
var len__4641__auto___42084 = arguments.length;
var i__4642__auto___42085 = (0);
while(true){
if((i__4642__auto___42085 < len__4641__auto___42084)){
args__4647__auto__.push((arguments[i__4642__auto___42085]));

var G__42086 = (i__4642__auto___42085 + (1));
i__4642__auto___42085 = G__42086;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42081){
var map__42082 = p__42081;
var map__42082__$1 = (((((!((map__42082 == null))))?(((((map__42082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42082):map__42082);
var opts = map__42082__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42079){
var G__42080 = cljs.core.first.call(null,seq42079);
var seq42079__$1 = cljs.core.next.call(null,seq42079);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42080,seq42079__$1);
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
var G__42088 = arguments.length;
switch (G__42088) {
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
var c__33157__auto___42134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42134){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42134){
return (function (state_42112){
var state_val_42113 = (state_42112[(1)]);
if((state_val_42113 === (7))){
var inst_42108 = (state_42112[(2)]);
var state_42112__$1 = state_42112;
var statearr_42114_42135 = state_42112__$1;
(statearr_42114_42135[(2)] = inst_42108);

(statearr_42114_42135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (1))){
var state_42112__$1 = state_42112;
var statearr_42115_42136 = state_42112__$1;
(statearr_42115_42136[(2)] = null);

(statearr_42115_42136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (4))){
var inst_42091 = (state_42112[(7)]);
var inst_42091__$1 = (state_42112[(2)]);
var inst_42092 = (inst_42091__$1 == null);
var state_42112__$1 = (function (){var statearr_42116 = state_42112;
(statearr_42116[(7)] = inst_42091__$1);

return statearr_42116;
})();
if(cljs.core.truth_(inst_42092)){
var statearr_42117_42137 = state_42112__$1;
(statearr_42117_42137[(1)] = (5));

} else {
var statearr_42118_42138 = state_42112__$1;
(statearr_42118_42138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (13))){
var state_42112__$1 = state_42112;
var statearr_42119_42139 = state_42112__$1;
(statearr_42119_42139[(2)] = null);

(statearr_42119_42139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (6))){
var inst_42091 = (state_42112[(7)]);
var state_42112__$1 = state_42112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42112__$1,(11),to,inst_42091);
} else {
if((state_val_42113 === (3))){
var inst_42110 = (state_42112[(2)]);
var state_42112__$1 = state_42112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42112__$1,inst_42110);
} else {
if((state_val_42113 === (12))){
var state_42112__$1 = state_42112;
var statearr_42120_42140 = state_42112__$1;
(statearr_42120_42140[(2)] = null);

(statearr_42120_42140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (2))){
var state_42112__$1 = state_42112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42112__$1,(4),from);
} else {
if((state_val_42113 === (11))){
var inst_42101 = (state_42112[(2)]);
var state_42112__$1 = state_42112;
if(cljs.core.truth_(inst_42101)){
var statearr_42121_42141 = state_42112__$1;
(statearr_42121_42141[(1)] = (12));

} else {
var statearr_42122_42142 = state_42112__$1;
(statearr_42122_42142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (9))){
var state_42112__$1 = state_42112;
var statearr_42123_42143 = state_42112__$1;
(statearr_42123_42143[(2)] = null);

(statearr_42123_42143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (5))){
var state_42112__$1 = state_42112;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42124_42144 = state_42112__$1;
(statearr_42124_42144[(1)] = (8));

} else {
var statearr_42125_42145 = state_42112__$1;
(statearr_42125_42145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (14))){
var inst_42106 = (state_42112[(2)]);
var state_42112__$1 = state_42112;
var statearr_42126_42146 = state_42112__$1;
(statearr_42126_42146[(2)] = inst_42106);

(statearr_42126_42146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (10))){
var inst_42098 = (state_42112[(2)]);
var state_42112__$1 = state_42112;
var statearr_42127_42147 = state_42112__$1;
(statearr_42127_42147[(2)] = inst_42098);

(statearr_42127_42147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (8))){
var inst_42095 = cljs.core.async.close_BANG_.call(null,to);
var state_42112__$1 = state_42112;
var statearr_42128_42148 = state_42112__$1;
(statearr_42128_42148[(2)] = inst_42095);

(statearr_42128_42148[(1)] = (10));


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
});})(c__33157__auto___42134))
;
return ((function (switch__32990__auto__,c__33157__auto___42134){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_42129 = [null,null,null,null,null,null,null,null];
(statearr_42129[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_42129[(1)] = (1));

return statearr_42129;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_42112){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42130){if((e42130 instanceof Object)){
var ex__32994__auto__ = e42130;
var statearr_42131_42149 = state_42112;
(statearr_42131_42149[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42150 = state_42112;
state_42112 = G__42150;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_42112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_42112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42134))
})();
var state__33159__auto__ = (function (){var statearr_42132 = f__33158__auto__.call(null);
(statearr_42132[(6)] = c__33157__auto___42134);

return statearr_42132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42134))
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
return (function (p__42151){
var vec__42152 = p__42151;
var v = cljs.core.nth.call(null,vec__42152,(0),null);
var p = cljs.core.nth.call(null,vec__42152,(1),null);
var job = vec__42152;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33157__auto___42323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42323,res,vec__42152,v,p,job,jobs,results){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42323,res,vec__42152,v,p,job,jobs,results){
return (function (state_42159){
var state_val_42160 = (state_42159[(1)]);
if((state_val_42160 === (1))){
var state_42159__$1 = state_42159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42159__$1,(2),res,v);
} else {
if((state_val_42160 === (2))){
var inst_42156 = (state_42159[(2)]);
var inst_42157 = cljs.core.async.close_BANG_.call(null,res);
var state_42159__$1 = (function (){var statearr_42161 = state_42159;
(statearr_42161[(7)] = inst_42156);

return statearr_42161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42159__$1,inst_42157);
} else {
return null;
}
}
});})(c__33157__auto___42323,res,vec__42152,v,p,job,jobs,results))
;
return ((function (switch__32990__auto__,c__33157__auto___42323,res,vec__42152,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42162 = [null,null,null,null,null,null,null,null];
(statearr_42162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42162[(1)] = (1));

return statearr_42162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42159){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42163){if((e42163 instanceof Object)){
var ex__32994__auto__ = e42163;
var statearr_42164_42324 = state_42159;
(statearr_42164_42324[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42325 = state_42159;
state_42159 = G__42325;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42323,res,vec__42152,v,p,job,jobs,results))
})();
var state__33159__auto__ = (function (){var statearr_42165 = f__33158__auto__.call(null);
(statearr_42165[(6)] = c__33157__auto___42323);

return statearr_42165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42323,res,vec__42152,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42166){
var vec__42167 = p__42166;
var v = cljs.core.nth.call(null,vec__42167,(0),null);
var p = cljs.core.nth.call(null,vec__42167,(1),null);
var job = vec__42167;
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
var n__4518__auto___42326 = n;
var __42327 = (0);
while(true){
if((__42327 < n__4518__auto___42326)){
var G__42170_42328 = type;
var G__42170_42329__$1 = (((G__42170_42328 instanceof cljs.core.Keyword))?G__42170_42328.fqn:null);
switch (G__42170_42329__$1) {
case "compute":
var c__33157__auto___42331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42327,c__33157__auto___42331,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (__42327,c__33157__auto___42331,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async){
return (function (state_42183){
var state_val_42184 = (state_42183[(1)]);
if((state_val_42184 === (1))){
var state_42183__$1 = state_42183;
var statearr_42185_42332 = state_42183__$1;
(statearr_42185_42332[(2)] = null);

(statearr_42185_42332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (2))){
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42183__$1,(4),jobs);
} else {
if((state_val_42184 === (3))){
var inst_42181 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42183__$1,inst_42181);
} else {
if((state_val_42184 === (4))){
var inst_42173 = (state_42183[(2)]);
var inst_42174 = process.call(null,inst_42173);
var state_42183__$1 = state_42183;
if(cljs.core.truth_(inst_42174)){
var statearr_42186_42333 = state_42183__$1;
(statearr_42186_42333[(1)] = (5));

} else {
var statearr_42187_42334 = state_42183__$1;
(statearr_42187_42334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (5))){
var state_42183__$1 = state_42183;
var statearr_42188_42335 = state_42183__$1;
(statearr_42188_42335[(2)] = null);

(statearr_42188_42335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (6))){
var state_42183__$1 = state_42183;
var statearr_42189_42336 = state_42183__$1;
(statearr_42189_42336[(2)] = null);

(statearr_42189_42336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (7))){
var inst_42179 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
var statearr_42190_42337 = state_42183__$1;
(statearr_42190_42337[(2)] = inst_42179);

(statearr_42190_42337[(1)] = (3));


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
});})(__42327,c__33157__auto___42331,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async))
;
return ((function (__42327,switch__32990__auto__,c__33157__auto___42331,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42191 = [null,null,null,null,null,null,null];
(statearr_42191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42191[(1)] = (1));

return statearr_42191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42183){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42192){if((e42192 instanceof Object)){
var ex__32994__auto__ = e42192;
var statearr_42193_42338 = state_42183;
(statearr_42193_42338[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42339 = state_42183;
state_42183 = G__42339;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(__42327,switch__32990__auto__,c__33157__auto___42331,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42194 = f__33158__auto__.call(null);
(statearr_42194[(6)] = c__33157__auto___42331);

return statearr_42194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(__42327,c__33157__auto___42331,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async))
);


break;
case "async":
var c__33157__auto___42340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42327,c__33157__auto___42340,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (__42327,c__33157__auto___42340,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async){
return (function (state_42207){
var state_val_42208 = (state_42207[(1)]);
if((state_val_42208 === (1))){
var state_42207__$1 = state_42207;
var statearr_42209_42341 = state_42207__$1;
(statearr_42209_42341[(2)] = null);

(statearr_42209_42341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (2))){
var state_42207__$1 = state_42207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42207__$1,(4),jobs);
} else {
if((state_val_42208 === (3))){
var inst_42205 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42207__$1,inst_42205);
} else {
if((state_val_42208 === (4))){
var inst_42197 = (state_42207[(2)]);
var inst_42198 = async.call(null,inst_42197);
var state_42207__$1 = state_42207;
if(cljs.core.truth_(inst_42198)){
var statearr_42210_42342 = state_42207__$1;
(statearr_42210_42342[(1)] = (5));

} else {
var statearr_42211_42343 = state_42207__$1;
(statearr_42211_42343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (5))){
var state_42207__$1 = state_42207;
var statearr_42212_42344 = state_42207__$1;
(statearr_42212_42344[(2)] = null);

(statearr_42212_42344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (6))){
var state_42207__$1 = state_42207;
var statearr_42213_42345 = state_42207__$1;
(statearr_42213_42345[(2)] = null);

(statearr_42213_42345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (7))){
var inst_42203 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
var statearr_42214_42346 = state_42207__$1;
(statearr_42214_42346[(2)] = inst_42203);

(statearr_42214_42346[(1)] = (3));


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
});})(__42327,c__33157__auto___42340,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async))
;
return ((function (__42327,switch__32990__auto__,c__33157__auto___42340,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42215 = [null,null,null,null,null,null,null];
(statearr_42215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42215[(1)] = (1));

return statearr_42215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42207){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42216){if((e42216 instanceof Object)){
var ex__32994__auto__ = e42216;
var statearr_42217_42347 = state_42207;
(statearr_42217_42347[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42348 = state_42207;
state_42207 = G__42348;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(__42327,switch__32990__auto__,c__33157__auto___42340,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42218 = f__33158__auto__.call(null);
(statearr_42218[(6)] = c__33157__auto___42340);

return statearr_42218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(__42327,c__33157__auto___42340,G__42170_42328,G__42170_42329__$1,n__4518__auto___42326,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42170_42329__$1)].join('')));

}

var G__42349 = (__42327 + (1));
__42327 = G__42349;
continue;
} else {
}
break;
}

var c__33157__auto___42350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42350,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42350,jobs,results,process,async){
return (function (state_42240){
var state_val_42241 = (state_42240[(1)]);
if((state_val_42241 === (1))){
var state_42240__$1 = state_42240;
var statearr_42242_42351 = state_42240__$1;
(statearr_42242_42351[(2)] = null);

(statearr_42242_42351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (2))){
var state_42240__$1 = state_42240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42240__$1,(4),from);
} else {
if((state_val_42241 === (3))){
var inst_42238 = (state_42240[(2)]);
var state_42240__$1 = state_42240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42240__$1,inst_42238);
} else {
if((state_val_42241 === (4))){
var inst_42221 = (state_42240[(7)]);
var inst_42221__$1 = (state_42240[(2)]);
var inst_42222 = (inst_42221__$1 == null);
var state_42240__$1 = (function (){var statearr_42243 = state_42240;
(statearr_42243[(7)] = inst_42221__$1);

return statearr_42243;
})();
if(cljs.core.truth_(inst_42222)){
var statearr_42244_42352 = state_42240__$1;
(statearr_42244_42352[(1)] = (5));

} else {
var statearr_42245_42353 = state_42240__$1;
(statearr_42245_42353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (5))){
var inst_42224 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42240__$1 = state_42240;
var statearr_42246_42354 = state_42240__$1;
(statearr_42246_42354[(2)] = inst_42224);

(statearr_42246_42354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (6))){
var inst_42226 = (state_42240[(8)]);
var inst_42221 = (state_42240[(7)]);
var inst_42226__$1 = cljs.core.async.chan.call(null,(1));
var inst_42227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42228 = [inst_42221,inst_42226__$1];
var inst_42229 = (new cljs.core.PersistentVector(null,2,(5),inst_42227,inst_42228,null));
var state_42240__$1 = (function (){var statearr_42247 = state_42240;
(statearr_42247[(8)] = inst_42226__$1);

return statearr_42247;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42240__$1,(8),jobs,inst_42229);
} else {
if((state_val_42241 === (7))){
var inst_42236 = (state_42240[(2)]);
var state_42240__$1 = state_42240;
var statearr_42248_42355 = state_42240__$1;
(statearr_42248_42355[(2)] = inst_42236);

(statearr_42248_42355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (8))){
var inst_42226 = (state_42240[(8)]);
var inst_42231 = (state_42240[(2)]);
var state_42240__$1 = (function (){var statearr_42249 = state_42240;
(statearr_42249[(9)] = inst_42231);

return statearr_42249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42240__$1,(9),results,inst_42226);
} else {
if((state_val_42241 === (9))){
var inst_42233 = (state_42240[(2)]);
var state_42240__$1 = (function (){var statearr_42250 = state_42240;
(statearr_42250[(10)] = inst_42233);

return statearr_42250;
})();
var statearr_42251_42356 = state_42240__$1;
(statearr_42251_42356[(2)] = null);

(statearr_42251_42356[(1)] = (2));


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
});})(c__33157__auto___42350,jobs,results,process,async))
;
return ((function (switch__32990__auto__,c__33157__auto___42350,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42252[(1)] = (1));

return statearr_42252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42240){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42253){if((e42253 instanceof Object)){
var ex__32994__auto__ = e42253;
var statearr_42254_42357 = state_42240;
(statearr_42254_42357[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42358 = state_42240;
state_42240 = G__42358;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42350,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42255 = f__33158__auto__.call(null);
(statearr_42255[(6)] = c__33157__auto___42350);

return statearr_42255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42350,jobs,results,process,async))
);


var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,jobs,results,process,async){
return (function (state_42293){
var state_val_42294 = (state_42293[(1)]);
if((state_val_42294 === (7))){
var inst_42289 = (state_42293[(2)]);
var state_42293__$1 = state_42293;
var statearr_42295_42359 = state_42293__$1;
(statearr_42295_42359[(2)] = inst_42289);

(statearr_42295_42359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (20))){
var state_42293__$1 = state_42293;
var statearr_42296_42360 = state_42293__$1;
(statearr_42296_42360[(2)] = null);

(statearr_42296_42360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (1))){
var state_42293__$1 = state_42293;
var statearr_42297_42361 = state_42293__$1;
(statearr_42297_42361[(2)] = null);

(statearr_42297_42361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (4))){
var inst_42258 = (state_42293[(7)]);
var inst_42258__$1 = (state_42293[(2)]);
var inst_42259 = (inst_42258__$1 == null);
var state_42293__$1 = (function (){var statearr_42298 = state_42293;
(statearr_42298[(7)] = inst_42258__$1);

return statearr_42298;
})();
if(cljs.core.truth_(inst_42259)){
var statearr_42299_42362 = state_42293__$1;
(statearr_42299_42362[(1)] = (5));

} else {
var statearr_42300_42363 = state_42293__$1;
(statearr_42300_42363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (15))){
var inst_42271 = (state_42293[(8)]);
var state_42293__$1 = state_42293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42293__$1,(18),to,inst_42271);
} else {
if((state_val_42294 === (21))){
var inst_42284 = (state_42293[(2)]);
var state_42293__$1 = state_42293;
var statearr_42301_42364 = state_42293__$1;
(statearr_42301_42364[(2)] = inst_42284);

(statearr_42301_42364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (13))){
var inst_42286 = (state_42293[(2)]);
var state_42293__$1 = (function (){var statearr_42302 = state_42293;
(statearr_42302[(9)] = inst_42286);

return statearr_42302;
})();
var statearr_42303_42365 = state_42293__$1;
(statearr_42303_42365[(2)] = null);

(statearr_42303_42365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (6))){
var inst_42258 = (state_42293[(7)]);
var state_42293__$1 = state_42293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42293__$1,(11),inst_42258);
} else {
if((state_val_42294 === (17))){
var inst_42279 = (state_42293[(2)]);
var state_42293__$1 = state_42293;
if(cljs.core.truth_(inst_42279)){
var statearr_42304_42366 = state_42293__$1;
(statearr_42304_42366[(1)] = (19));

} else {
var statearr_42305_42367 = state_42293__$1;
(statearr_42305_42367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (3))){
var inst_42291 = (state_42293[(2)]);
var state_42293__$1 = state_42293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42293__$1,inst_42291);
} else {
if((state_val_42294 === (12))){
var inst_42268 = (state_42293[(10)]);
var state_42293__$1 = state_42293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42293__$1,(14),inst_42268);
} else {
if((state_val_42294 === (2))){
var state_42293__$1 = state_42293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42293__$1,(4),results);
} else {
if((state_val_42294 === (19))){
var state_42293__$1 = state_42293;
var statearr_42306_42368 = state_42293__$1;
(statearr_42306_42368[(2)] = null);

(statearr_42306_42368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (11))){
var inst_42268 = (state_42293[(2)]);
var state_42293__$1 = (function (){var statearr_42307 = state_42293;
(statearr_42307[(10)] = inst_42268);

return statearr_42307;
})();
var statearr_42308_42369 = state_42293__$1;
(statearr_42308_42369[(2)] = null);

(statearr_42308_42369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (9))){
var state_42293__$1 = state_42293;
var statearr_42309_42370 = state_42293__$1;
(statearr_42309_42370[(2)] = null);

(statearr_42309_42370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (5))){
var state_42293__$1 = state_42293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42310_42371 = state_42293__$1;
(statearr_42310_42371[(1)] = (8));

} else {
var statearr_42311_42372 = state_42293__$1;
(statearr_42311_42372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (14))){
var inst_42271 = (state_42293[(8)]);
var inst_42273 = (state_42293[(11)]);
var inst_42271__$1 = (state_42293[(2)]);
var inst_42272 = (inst_42271__$1 == null);
var inst_42273__$1 = cljs.core.not.call(null,inst_42272);
var state_42293__$1 = (function (){var statearr_42312 = state_42293;
(statearr_42312[(8)] = inst_42271__$1);

(statearr_42312[(11)] = inst_42273__$1);

return statearr_42312;
})();
if(inst_42273__$1){
var statearr_42313_42373 = state_42293__$1;
(statearr_42313_42373[(1)] = (15));

} else {
var statearr_42314_42374 = state_42293__$1;
(statearr_42314_42374[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (16))){
var inst_42273 = (state_42293[(11)]);
var state_42293__$1 = state_42293;
var statearr_42315_42375 = state_42293__$1;
(statearr_42315_42375[(2)] = inst_42273);

(statearr_42315_42375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (10))){
var inst_42265 = (state_42293[(2)]);
var state_42293__$1 = state_42293;
var statearr_42316_42376 = state_42293__$1;
(statearr_42316_42376[(2)] = inst_42265);

(statearr_42316_42376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (18))){
var inst_42276 = (state_42293[(2)]);
var state_42293__$1 = state_42293;
var statearr_42317_42377 = state_42293__$1;
(statearr_42317_42377[(2)] = inst_42276);

(statearr_42317_42377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42294 === (8))){
var inst_42262 = cljs.core.async.close_BANG_.call(null,to);
var state_42293__$1 = state_42293;
var statearr_42318_42378 = state_42293__$1;
(statearr_42318_42378[(2)] = inst_42262);

(statearr_42318_42378[(1)] = (10));


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
});})(c__33157__auto__,jobs,results,process,async))
;
return ((function (switch__32990__auto__,c__33157__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42319 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42319[(1)] = (1));

return statearr_42319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42293){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42320){if((e42320 instanceof Object)){
var ex__32994__auto__ = e42320;
var statearr_42321_42379 = state_42293;
(statearr_42321_42379[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42380 = state_42293;
state_42293 = G__42380;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42322 = f__33158__auto__.call(null);
(statearr_42322[(6)] = c__33157__auto__);

return statearr_42322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,jobs,results,process,async))
);

return c__33157__auto__;
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
var G__42382 = arguments.length;
switch (G__42382) {
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
var G__42385 = arguments.length;
switch (G__42385) {
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
var G__42388 = arguments.length;
switch (G__42388) {
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
var c__33157__auto___42437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42437,tc,fc){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42437,tc,fc){
return (function (state_42414){
var state_val_42415 = (state_42414[(1)]);
if((state_val_42415 === (7))){
var inst_42410 = (state_42414[(2)]);
var state_42414__$1 = state_42414;
var statearr_42416_42438 = state_42414__$1;
(statearr_42416_42438[(2)] = inst_42410);

(statearr_42416_42438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (1))){
var state_42414__$1 = state_42414;
var statearr_42417_42439 = state_42414__$1;
(statearr_42417_42439[(2)] = null);

(statearr_42417_42439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (4))){
var inst_42391 = (state_42414[(7)]);
var inst_42391__$1 = (state_42414[(2)]);
var inst_42392 = (inst_42391__$1 == null);
var state_42414__$1 = (function (){var statearr_42418 = state_42414;
(statearr_42418[(7)] = inst_42391__$1);

return statearr_42418;
})();
if(cljs.core.truth_(inst_42392)){
var statearr_42419_42440 = state_42414__$1;
(statearr_42419_42440[(1)] = (5));

} else {
var statearr_42420_42441 = state_42414__$1;
(statearr_42420_42441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (13))){
var state_42414__$1 = state_42414;
var statearr_42421_42442 = state_42414__$1;
(statearr_42421_42442[(2)] = null);

(statearr_42421_42442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (6))){
var inst_42391 = (state_42414[(7)]);
var inst_42397 = p.call(null,inst_42391);
var state_42414__$1 = state_42414;
if(cljs.core.truth_(inst_42397)){
var statearr_42422_42443 = state_42414__$1;
(statearr_42422_42443[(1)] = (9));

} else {
var statearr_42423_42444 = state_42414__$1;
(statearr_42423_42444[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (3))){
var inst_42412 = (state_42414[(2)]);
var state_42414__$1 = state_42414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42414__$1,inst_42412);
} else {
if((state_val_42415 === (12))){
var state_42414__$1 = state_42414;
var statearr_42424_42445 = state_42414__$1;
(statearr_42424_42445[(2)] = null);

(statearr_42424_42445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (2))){
var state_42414__$1 = state_42414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42414__$1,(4),ch);
} else {
if((state_val_42415 === (11))){
var inst_42391 = (state_42414[(7)]);
var inst_42401 = (state_42414[(2)]);
var state_42414__$1 = state_42414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42414__$1,(8),inst_42401,inst_42391);
} else {
if((state_val_42415 === (9))){
var state_42414__$1 = state_42414;
var statearr_42425_42446 = state_42414__$1;
(statearr_42425_42446[(2)] = tc);

(statearr_42425_42446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (5))){
var inst_42394 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42395 = cljs.core.async.close_BANG_.call(null,fc);
var state_42414__$1 = (function (){var statearr_42426 = state_42414;
(statearr_42426[(8)] = inst_42394);

return statearr_42426;
})();
var statearr_42427_42447 = state_42414__$1;
(statearr_42427_42447[(2)] = inst_42395);

(statearr_42427_42447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (14))){
var inst_42408 = (state_42414[(2)]);
var state_42414__$1 = state_42414;
var statearr_42428_42448 = state_42414__$1;
(statearr_42428_42448[(2)] = inst_42408);

(statearr_42428_42448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (10))){
var state_42414__$1 = state_42414;
var statearr_42429_42449 = state_42414__$1;
(statearr_42429_42449[(2)] = fc);

(statearr_42429_42449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42415 === (8))){
var inst_42403 = (state_42414[(2)]);
var state_42414__$1 = state_42414;
if(cljs.core.truth_(inst_42403)){
var statearr_42430_42450 = state_42414__$1;
(statearr_42430_42450[(1)] = (12));

} else {
var statearr_42431_42451 = state_42414__$1;
(statearr_42431_42451[(1)] = (13));

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
});})(c__33157__auto___42437,tc,fc))
;
return ((function (switch__32990__auto__,c__33157__auto___42437,tc,fc){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_42432 = [null,null,null,null,null,null,null,null,null];
(statearr_42432[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_42432[(1)] = (1));

return statearr_42432;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_42414){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42433){if((e42433 instanceof Object)){
var ex__32994__auto__ = e42433;
var statearr_42434_42452 = state_42414;
(statearr_42434_42452[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42453 = state_42414;
state_42414 = G__42453;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_42414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_42414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42437,tc,fc))
})();
var state__33159__auto__ = (function (){var statearr_42435 = f__33158__auto__.call(null);
(statearr_42435[(6)] = c__33157__auto___42437);

return statearr_42435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42437,tc,fc))
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
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_42474){
var state_val_42475 = (state_42474[(1)]);
if((state_val_42475 === (7))){
var inst_42470 = (state_42474[(2)]);
var state_42474__$1 = state_42474;
var statearr_42476_42494 = state_42474__$1;
(statearr_42476_42494[(2)] = inst_42470);

(statearr_42476_42494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (1))){
var inst_42454 = init;
var state_42474__$1 = (function (){var statearr_42477 = state_42474;
(statearr_42477[(7)] = inst_42454);

return statearr_42477;
})();
var statearr_42478_42495 = state_42474__$1;
(statearr_42478_42495[(2)] = null);

(statearr_42478_42495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (4))){
var inst_42457 = (state_42474[(8)]);
var inst_42457__$1 = (state_42474[(2)]);
var inst_42458 = (inst_42457__$1 == null);
var state_42474__$1 = (function (){var statearr_42479 = state_42474;
(statearr_42479[(8)] = inst_42457__$1);

return statearr_42479;
})();
if(cljs.core.truth_(inst_42458)){
var statearr_42480_42496 = state_42474__$1;
(statearr_42480_42496[(1)] = (5));

} else {
var statearr_42481_42497 = state_42474__$1;
(statearr_42481_42497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (6))){
var inst_42454 = (state_42474[(7)]);
var inst_42457 = (state_42474[(8)]);
var inst_42461 = (state_42474[(9)]);
var inst_42461__$1 = f.call(null,inst_42454,inst_42457);
var inst_42462 = cljs.core.reduced_QMARK_.call(null,inst_42461__$1);
var state_42474__$1 = (function (){var statearr_42482 = state_42474;
(statearr_42482[(9)] = inst_42461__$1);

return statearr_42482;
})();
if(inst_42462){
var statearr_42483_42498 = state_42474__$1;
(statearr_42483_42498[(1)] = (8));

} else {
var statearr_42484_42499 = state_42474__$1;
(statearr_42484_42499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (3))){
var inst_42472 = (state_42474[(2)]);
var state_42474__$1 = state_42474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42474__$1,inst_42472);
} else {
if((state_val_42475 === (2))){
var state_42474__$1 = state_42474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42474__$1,(4),ch);
} else {
if((state_val_42475 === (9))){
var inst_42461 = (state_42474[(9)]);
var inst_42454 = inst_42461;
var state_42474__$1 = (function (){var statearr_42485 = state_42474;
(statearr_42485[(7)] = inst_42454);

return statearr_42485;
})();
var statearr_42486_42500 = state_42474__$1;
(statearr_42486_42500[(2)] = null);

(statearr_42486_42500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (5))){
var inst_42454 = (state_42474[(7)]);
var state_42474__$1 = state_42474;
var statearr_42487_42501 = state_42474__$1;
(statearr_42487_42501[(2)] = inst_42454);

(statearr_42487_42501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (10))){
var inst_42468 = (state_42474[(2)]);
var state_42474__$1 = state_42474;
var statearr_42488_42502 = state_42474__$1;
(statearr_42488_42502[(2)] = inst_42468);

(statearr_42488_42502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (8))){
var inst_42461 = (state_42474[(9)]);
var inst_42464 = cljs.core.deref.call(null,inst_42461);
var state_42474__$1 = state_42474;
var statearr_42489_42503 = state_42474__$1;
(statearr_42489_42503[(2)] = inst_42464);

(statearr_42489_42503[(1)] = (10));


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
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32991__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32991__auto____0 = (function (){
var statearr_42490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42490[(0)] = cljs$core$async$reduce_$_state_machine__32991__auto__);

(statearr_42490[(1)] = (1));

return statearr_42490;
});
var cljs$core$async$reduce_$_state_machine__32991__auto____1 = (function (state_42474){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42491){if((e42491 instanceof Object)){
var ex__32994__auto__ = e42491;
var statearr_42492_42504 = state_42474;
(statearr_42492_42504[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42505 = state_42474;
state_42474 = G__42505;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32991__auto__ = function(state_42474){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32991__auto____1.call(this,state_42474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32991__auto____0;
cljs$core$async$reduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32991__auto____1;
return cljs$core$async$reduce_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_42493 = f__33158__auto__.call(null);
(statearr_42493[(6)] = c__33157__auto__);

return statearr_42493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,f__$1){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,f__$1){
return (function (state_42511){
var state_val_42512 = (state_42511[(1)]);
if((state_val_42512 === (1))){
var inst_42506 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42511__$1 = state_42511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42511__$1,(2),inst_42506);
} else {
if((state_val_42512 === (2))){
var inst_42508 = (state_42511[(2)]);
var inst_42509 = f__$1.call(null,inst_42508);
var state_42511__$1 = state_42511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42511__$1,inst_42509);
} else {
return null;
}
}
});})(c__33157__auto__,f__$1))
;
return ((function (switch__32990__auto__,c__33157__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32991__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32991__auto____0 = (function (){
var statearr_42513 = [null,null,null,null,null,null,null];
(statearr_42513[(0)] = cljs$core$async$transduce_$_state_machine__32991__auto__);

(statearr_42513[(1)] = (1));

return statearr_42513;
});
var cljs$core$async$transduce_$_state_machine__32991__auto____1 = (function (state_42511){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42514){if((e42514 instanceof Object)){
var ex__32994__auto__ = e42514;
var statearr_42515_42517 = state_42511;
(statearr_42515_42517[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42518 = state_42511;
state_42511 = G__42518;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32991__auto__ = function(state_42511){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32991__auto____1.call(this,state_42511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32991__auto____0;
cljs$core$async$transduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32991__auto____1;
return cljs$core$async$transduce_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,f__$1))
})();
var state__33159__auto__ = (function (){var statearr_42516 = f__33158__auto__.call(null);
(statearr_42516[(6)] = c__33157__auto__);

return statearr_42516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,f__$1))
);

return c__33157__auto__;
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
var G__42520 = arguments.length;
switch (G__42520) {
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
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_42545){
var state_val_42546 = (state_42545[(1)]);
if((state_val_42546 === (7))){
var inst_42527 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
var statearr_42547_42568 = state_42545__$1;
(statearr_42547_42568[(2)] = inst_42527);

(statearr_42547_42568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (1))){
var inst_42521 = cljs.core.seq.call(null,coll);
var inst_42522 = inst_42521;
var state_42545__$1 = (function (){var statearr_42548 = state_42545;
(statearr_42548[(7)] = inst_42522);

return statearr_42548;
})();
var statearr_42549_42569 = state_42545__$1;
(statearr_42549_42569[(2)] = null);

(statearr_42549_42569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (4))){
var inst_42522 = (state_42545[(7)]);
var inst_42525 = cljs.core.first.call(null,inst_42522);
var state_42545__$1 = state_42545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42545__$1,(7),ch,inst_42525);
} else {
if((state_val_42546 === (13))){
var inst_42539 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
var statearr_42550_42570 = state_42545__$1;
(statearr_42550_42570[(2)] = inst_42539);

(statearr_42550_42570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (6))){
var inst_42530 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
if(cljs.core.truth_(inst_42530)){
var statearr_42551_42571 = state_42545__$1;
(statearr_42551_42571[(1)] = (8));

} else {
var statearr_42552_42572 = state_42545__$1;
(statearr_42552_42572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (3))){
var inst_42543 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42545__$1,inst_42543);
} else {
if((state_val_42546 === (12))){
var state_42545__$1 = state_42545;
var statearr_42553_42573 = state_42545__$1;
(statearr_42553_42573[(2)] = null);

(statearr_42553_42573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (2))){
var inst_42522 = (state_42545[(7)]);
var state_42545__$1 = state_42545;
if(cljs.core.truth_(inst_42522)){
var statearr_42554_42574 = state_42545__$1;
(statearr_42554_42574[(1)] = (4));

} else {
var statearr_42555_42575 = state_42545__$1;
(statearr_42555_42575[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (11))){
var inst_42536 = cljs.core.async.close_BANG_.call(null,ch);
var state_42545__$1 = state_42545;
var statearr_42556_42576 = state_42545__$1;
(statearr_42556_42576[(2)] = inst_42536);

(statearr_42556_42576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (9))){
var state_42545__$1 = state_42545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42557_42577 = state_42545__$1;
(statearr_42557_42577[(1)] = (11));

} else {
var statearr_42558_42578 = state_42545__$1;
(statearr_42558_42578[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (5))){
var inst_42522 = (state_42545[(7)]);
var state_42545__$1 = state_42545;
var statearr_42559_42579 = state_42545__$1;
(statearr_42559_42579[(2)] = inst_42522);

(statearr_42559_42579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (10))){
var inst_42541 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
var statearr_42560_42580 = state_42545__$1;
(statearr_42560_42580[(2)] = inst_42541);

(statearr_42560_42580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (8))){
var inst_42522 = (state_42545[(7)]);
var inst_42532 = cljs.core.next.call(null,inst_42522);
var inst_42522__$1 = inst_42532;
var state_42545__$1 = (function (){var statearr_42561 = state_42545;
(statearr_42561[(7)] = inst_42522__$1);

return statearr_42561;
})();
var statearr_42562_42581 = state_42545__$1;
(statearr_42562_42581[(2)] = null);

(statearr_42562_42581[(1)] = (2));


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
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_42563 = [null,null,null,null,null,null,null,null];
(statearr_42563[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_42563[(1)] = (1));

return statearr_42563;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_42545){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42564){if((e42564 instanceof Object)){
var ex__32994__auto__ = e42564;
var statearr_42565_42582 = state_42545;
(statearr_42565_42582[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42583 = state_42545;
state_42545 = G__42583;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_42545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_42545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_42566 = f__33158__auto__.call(null);
(statearr_42566[(6)] = c__33157__auto__);

return statearr_42566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42584 = (function (ch,cs,meta42585){
this.ch = ch;
this.cs = cs;
this.meta42585 = meta42585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42586,meta42585__$1){
var self__ = this;
var _42586__$1 = this;
return (new cljs.core.async.t_cljs$core$async42584(self__.ch,self__.cs,meta42585__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42586){
var self__ = this;
var _42586__$1 = this;
return self__.meta42585;
});})(cs))
;

cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42584.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42584.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42585","meta42585",1550240617,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42584";

cljs.core.async.t_cljs$core$async42584.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42584");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42584.
 */
cljs.core.async.__GT_t_cljs$core$async42584 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42584(ch__$1,cs__$1,meta42585){
return (new cljs.core.async.t_cljs$core$async42584(ch__$1,cs__$1,meta42585));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42584(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33157__auto___42806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42806,cs,m,dchan,dctr,done){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42806,cs,m,dchan,dctr,done){
return (function (state_42721){
var state_val_42722 = (state_42721[(1)]);
if((state_val_42722 === (7))){
var inst_42717 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42723_42807 = state_42721__$1;
(statearr_42723_42807[(2)] = inst_42717);

(statearr_42723_42807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (20))){
var inst_42620 = (state_42721[(7)]);
var inst_42632 = cljs.core.first.call(null,inst_42620);
var inst_42633 = cljs.core.nth.call(null,inst_42632,(0),null);
var inst_42634 = cljs.core.nth.call(null,inst_42632,(1),null);
var state_42721__$1 = (function (){var statearr_42724 = state_42721;
(statearr_42724[(8)] = inst_42633);

return statearr_42724;
})();
if(cljs.core.truth_(inst_42634)){
var statearr_42725_42808 = state_42721__$1;
(statearr_42725_42808[(1)] = (22));

} else {
var statearr_42726_42809 = state_42721__$1;
(statearr_42726_42809[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (27))){
var inst_42662 = (state_42721[(9)]);
var inst_42664 = (state_42721[(10)]);
var inst_42589 = (state_42721[(11)]);
var inst_42669 = (state_42721[(12)]);
var inst_42669__$1 = cljs.core._nth.call(null,inst_42662,inst_42664);
var inst_42670 = cljs.core.async.put_BANG_.call(null,inst_42669__$1,inst_42589,done);
var state_42721__$1 = (function (){var statearr_42727 = state_42721;
(statearr_42727[(12)] = inst_42669__$1);

return statearr_42727;
})();
if(cljs.core.truth_(inst_42670)){
var statearr_42728_42810 = state_42721__$1;
(statearr_42728_42810[(1)] = (30));

} else {
var statearr_42729_42811 = state_42721__$1;
(statearr_42729_42811[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (1))){
var state_42721__$1 = state_42721;
var statearr_42730_42812 = state_42721__$1;
(statearr_42730_42812[(2)] = null);

(statearr_42730_42812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (24))){
var inst_42620 = (state_42721[(7)]);
var inst_42639 = (state_42721[(2)]);
var inst_42640 = cljs.core.next.call(null,inst_42620);
var inst_42598 = inst_42640;
var inst_42599 = null;
var inst_42600 = (0);
var inst_42601 = (0);
var state_42721__$1 = (function (){var statearr_42731 = state_42721;
(statearr_42731[(13)] = inst_42600);

(statearr_42731[(14)] = inst_42598);

(statearr_42731[(15)] = inst_42639);

(statearr_42731[(16)] = inst_42599);

(statearr_42731[(17)] = inst_42601);

return statearr_42731;
})();
var statearr_42732_42813 = state_42721__$1;
(statearr_42732_42813[(2)] = null);

(statearr_42732_42813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (39))){
var state_42721__$1 = state_42721;
var statearr_42736_42814 = state_42721__$1;
(statearr_42736_42814[(2)] = null);

(statearr_42736_42814[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (4))){
var inst_42589 = (state_42721[(11)]);
var inst_42589__$1 = (state_42721[(2)]);
var inst_42590 = (inst_42589__$1 == null);
var state_42721__$1 = (function (){var statearr_42737 = state_42721;
(statearr_42737[(11)] = inst_42589__$1);

return statearr_42737;
})();
if(cljs.core.truth_(inst_42590)){
var statearr_42738_42815 = state_42721__$1;
(statearr_42738_42815[(1)] = (5));

} else {
var statearr_42739_42816 = state_42721__$1;
(statearr_42739_42816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (15))){
var inst_42600 = (state_42721[(13)]);
var inst_42598 = (state_42721[(14)]);
var inst_42599 = (state_42721[(16)]);
var inst_42601 = (state_42721[(17)]);
var inst_42616 = (state_42721[(2)]);
var inst_42617 = (inst_42601 + (1));
var tmp42733 = inst_42600;
var tmp42734 = inst_42598;
var tmp42735 = inst_42599;
var inst_42598__$1 = tmp42734;
var inst_42599__$1 = tmp42735;
var inst_42600__$1 = tmp42733;
var inst_42601__$1 = inst_42617;
var state_42721__$1 = (function (){var statearr_42740 = state_42721;
(statearr_42740[(13)] = inst_42600__$1);

(statearr_42740[(18)] = inst_42616);

(statearr_42740[(14)] = inst_42598__$1);

(statearr_42740[(16)] = inst_42599__$1);

(statearr_42740[(17)] = inst_42601__$1);

return statearr_42740;
})();
var statearr_42741_42817 = state_42721__$1;
(statearr_42741_42817[(2)] = null);

(statearr_42741_42817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (21))){
var inst_42643 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42745_42818 = state_42721__$1;
(statearr_42745_42818[(2)] = inst_42643);

(statearr_42745_42818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (31))){
var inst_42669 = (state_42721[(12)]);
var inst_42673 = done.call(null,null);
var inst_42674 = cljs.core.async.untap_STAR_.call(null,m,inst_42669);
var state_42721__$1 = (function (){var statearr_42746 = state_42721;
(statearr_42746[(19)] = inst_42673);

return statearr_42746;
})();
var statearr_42747_42819 = state_42721__$1;
(statearr_42747_42819[(2)] = inst_42674);

(statearr_42747_42819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (32))){
var inst_42662 = (state_42721[(9)]);
var inst_42664 = (state_42721[(10)]);
var inst_42663 = (state_42721[(20)]);
var inst_42661 = (state_42721[(21)]);
var inst_42676 = (state_42721[(2)]);
var inst_42677 = (inst_42664 + (1));
var tmp42742 = inst_42662;
var tmp42743 = inst_42663;
var tmp42744 = inst_42661;
var inst_42661__$1 = tmp42744;
var inst_42662__$1 = tmp42742;
var inst_42663__$1 = tmp42743;
var inst_42664__$1 = inst_42677;
var state_42721__$1 = (function (){var statearr_42748 = state_42721;
(statearr_42748[(9)] = inst_42662__$1);

(statearr_42748[(10)] = inst_42664__$1);

(statearr_42748[(20)] = inst_42663__$1);

(statearr_42748[(22)] = inst_42676);

(statearr_42748[(21)] = inst_42661__$1);

return statearr_42748;
})();
var statearr_42749_42820 = state_42721__$1;
(statearr_42749_42820[(2)] = null);

(statearr_42749_42820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (40))){
var inst_42689 = (state_42721[(23)]);
var inst_42693 = done.call(null,null);
var inst_42694 = cljs.core.async.untap_STAR_.call(null,m,inst_42689);
var state_42721__$1 = (function (){var statearr_42750 = state_42721;
(statearr_42750[(24)] = inst_42693);

return statearr_42750;
})();
var statearr_42751_42821 = state_42721__$1;
(statearr_42751_42821[(2)] = inst_42694);

(statearr_42751_42821[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (33))){
var inst_42680 = (state_42721[(25)]);
var inst_42682 = cljs.core.chunked_seq_QMARK_.call(null,inst_42680);
var state_42721__$1 = state_42721;
if(inst_42682){
var statearr_42752_42822 = state_42721__$1;
(statearr_42752_42822[(1)] = (36));

} else {
var statearr_42753_42823 = state_42721__$1;
(statearr_42753_42823[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (13))){
var inst_42610 = (state_42721[(26)]);
var inst_42613 = cljs.core.async.close_BANG_.call(null,inst_42610);
var state_42721__$1 = state_42721;
var statearr_42754_42824 = state_42721__$1;
(statearr_42754_42824[(2)] = inst_42613);

(statearr_42754_42824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (22))){
var inst_42633 = (state_42721[(8)]);
var inst_42636 = cljs.core.async.close_BANG_.call(null,inst_42633);
var state_42721__$1 = state_42721;
var statearr_42755_42825 = state_42721__$1;
(statearr_42755_42825[(2)] = inst_42636);

(statearr_42755_42825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (36))){
var inst_42680 = (state_42721[(25)]);
var inst_42684 = cljs.core.chunk_first.call(null,inst_42680);
var inst_42685 = cljs.core.chunk_rest.call(null,inst_42680);
var inst_42686 = cljs.core.count.call(null,inst_42684);
var inst_42661 = inst_42685;
var inst_42662 = inst_42684;
var inst_42663 = inst_42686;
var inst_42664 = (0);
var state_42721__$1 = (function (){var statearr_42756 = state_42721;
(statearr_42756[(9)] = inst_42662);

(statearr_42756[(10)] = inst_42664);

(statearr_42756[(20)] = inst_42663);

(statearr_42756[(21)] = inst_42661);

return statearr_42756;
})();
var statearr_42757_42826 = state_42721__$1;
(statearr_42757_42826[(2)] = null);

(statearr_42757_42826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (41))){
var inst_42680 = (state_42721[(25)]);
var inst_42696 = (state_42721[(2)]);
var inst_42697 = cljs.core.next.call(null,inst_42680);
var inst_42661 = inst_42697;
var inst_42662 = null;
var inst_42663 = (0);
var inst_42664 = (0);
var state_42721__$1 = (function (){var statearr_42758 = state_42721;
(statearr_42758[(27)] = inst_42696);

(statearr_42758[(9)] = inst_42662);

(statearr_42758[(10)] = inst_42664);

(statearr_42758[(20)] = inst_42663);

(statearr_42758[(21)] = inst_42661);

return statearr_42758;
})();
var statearr_42759_42827 = state_42721__$1;
(statearr_42759_42827[(2)] = null);

(statearr_42759_42827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (43))){
var state_42721__$1 = state_42721;
var statearr_42760_42828 = state_42721__$1;
(statearr_42760_42828[(2)] = null);

(statearr_42760_42828[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (29))){
var inst_42705 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42761_42829 = state_42721__$1;
(statearr_42761_42829[(2)] = inst_42705);

(statearr_42761_42829[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (44))){
var inst_42714 = (state_42721[(2)]);
var state_42721__$1 = (function (){var statearr_42762 = state_42721;
(statearr_42762[(28)] = inst_42714);

return statearr_42762;
})();
var statearr_42763_42830 = state_42721__$1;
(statearr_42763_42830[(2)] = null);

(statearr_42763_42830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (6))){
var inst_42653 = (state_42721[(29)]);
var inst_42652 = cljs.core.deref.call(null,cs);
var inst_42653__$1 = cljs.core.keys.call(null,inst_42652);
var inst_42654 = cljs.core.count.call(null,inst_42653__$1);
var inst_42655 = cljs.core.reset_BANG_.call(null,dctr,inst_42654);
var inst_42660 = cljs.core.seq.call(null,inst_42653__$1);
var inst_42661 = inst_42660;
var inst_42662 = null;
var inst_42663 = (0);
var inst_42664 = (0);
var state_42721__$1 = (function (){var statearr_42764 = state_42721;
(statearr_42764[(9)] = inst_42662);

(statearr_42764[(10)] = inst_42664);

(statearr_42764[(20)] = inst_42663);

(statearr_42764[(30)] = inst_42655);

(statearr_42764[(29)] = inst_42653__$1);

(statearr_42764[(21)] = inst_42661);

return statearr_42764;
})();
var statearr_42765_42831 = state_42721__$1;
(statearr_42765_42831[(2)] = null);

(statearr_42765_42831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (28))){
var inst_42680 = (state_42721[(25)]);
var inst_42661 = (state_42721[(21)]);
var inst_42680__$1 = cljs.core.seq.call(null,inst_42661);
var state_42721__$1 = (function (){var statearr_42766 = state_42721;
(statearr_42766[(25)] = inst_42680__$1);

return statearr_42766;
})();
if(inst_42680__$1){
var statearr_42767_42832 = state_42721__$1;
(statearr_42767_42832[(1)] = (33));

} else {
var statearr_42768_42833 = state_42721__$1;
(statearr_42768_42833[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (25))){
var inst_42664 = (state_42721[(10)]);
var inst_42663 = (state_42721[(20)]);
var inst_42666 = (inst_42664 < inst_42663);
var inst_42667 = inst_42666;
var state_42721__$1 = state_42721;
if(cljs.core.truth_(inst_42667)){
var statearr_42769_42834 = state_42721__$1;
(statearr_42769_42834[(1)] = (27));

} else {
var statearr_42770_42835 = state_42721__$1;
(statearr_42770_42835[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (34))){
var state_42721__$1 = state_42721;
var statearr_42771_42836 = state_42721__$1;
(statearr_42771_42836[(2)] = null);

(statearr_42771_42836[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (17))){
var state_42721__$1 = state_42721;
var statearr_42772_42837 = state_42721__$1;
(statearr_42772_42837[(2)] = null);

(statearr_42772_42837[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (3))){
var inst_42719 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42721__$1,inst_42719);
} else {
if((state_val_42722 === (12))){
var inst_42648 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42773_42838 = state_42721__$1;
(statearr_42773_42838[(2)] = inst_42648);

(statearr_42773_42838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (2))){
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42721__$1,(4),ch);
} else {
if((state_val_42722 === (23))){
var state_42721__$1 = state_42721;
var statearr_42774_42839 = state_42721__$1;
(statearr_42774_42839[(2)] = null);

(statearr_42774_42839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (35))){
var inst_42703 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42775_42840 = state_42721__$1;
(statearr_42775_42840[(2)] = inst_42703);

(statearr_42775_42840[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (19))){
var inst_42620 = (state_42721[(7)]);
var inst_42624 = cljs.core.chunk_first.call(null,inst_42620);
var inst_42625 = cljs.core.chunk_rest.call(null,inst_42620);
var inst_42626 = cljs.core.count.call(null,inst_42624);
var inst_42598 = inst_42625;
var inst_42599 = inst_42624;
var inst_42600 = inst_42626;
var inst_42601 = (0);
var state_42721__$1 = (function (){var statearr_42776 = state_42721;
(statearr_42776[(13)] = inst_42600);

(statearr_42776[(14)] = inst_42598);

(statearr_42776[(16)] = inst_42599);

(statearr_42776[(17)] = inst_42601);

return statearr_42776;
})();
var statearr_42777_42841 = state_42721__$1;
(statearr_42777_42841[(2)] = null);

(statearr_42777_42841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (11))){
var inst_42598 = (state_42721[(14)]);
var inst_42620 = (state_42721[(7)]);
var inst_42620__$1 = cljs.core.seq.call(null,inst_42598);
var state_42721__$1 = (function (){var statearr_42778 = state_42721;
(statearr_42778[(7)] = inst_42620__$1);

return statearr_42778;
})();
if(inst_42620__$1){
var statearr_42779_42842 = state_42721__$1;
(statearr_42779_42842[(1)] = (16));

} else {
var statearr_42780_42843 = state_42721__$1;
(statearr_42780_42843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (9))){
var inst_42650 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42781_42844 = state_42721__$1;
(statearr_42781_42844[(2)] = inst_42650);

(statearr_42781_42844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (5))){
var inst_42596 = cljs.core.deref.call(null,cs);
var inst_42597 = cljs.core.seq.call(null,inst_42596);
var inst_42598 = inst_42597;
var inst_42599 = null;
var inst_42600 = (0);
var inst_42601 = (0);
var state_42721__$1 = (function (){var statearr_42782 = state_42721;
(statearr_42782[(13)] = inst_42600);

(statearr_42782[(14)] = inst_42598);

(statearr_42782[(16)] = inst_42599);

(statearr_42782[(17)] = inst_42601);

return statearr_42782;
})();
var statearr_42783_42845 = state_42721__$1;
(statearr_42783_42845[(2)] = null);

(statearr_42783_42845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (14))){
var state_42721__$1 = state_42721;
var statearr_42784_42846 = state_42721__$1;
(statearr_42784_42846[(2)] = null);

(statearr_42784_42846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (45))){
var inst_42711 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42785_42847 = state_42721__$1;
(statearr_42785_42847[(2)] = inst_42711);

(statearr_42785_42847[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (26))){
var inst_42653 = (state_42721[(29)]);
var inst_42707 = (state_42721[(2)]);
var inst_42708 = cljs.core.seq.call(null,inst_42653);
var state_42721__$1 = (function (){var statearr_42786 = state_42721;
(statearr_42786[(31)] = inst_42707);

return statearr_42786;
})();
if(inst_42708){
var statearr_42787_42848 = state_42721__$1;
(statearr_42787_42848[(1)] = (42));

} else {
var statearr_42788_42849 = state_42721__$1;
(statearr_42788_42849[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (16))){
var inst_42620 = (state_42721[(7)]);
var inst_42622 = cljs.core.chunked_seq_QMARK_.call(null,inst_42620);
var state_42721__$1 = state_42721;
if(inst_42622){
var statearr_42789_42850 = state_42721__$1;
(statearr_42789_42850[(1)] = (19));

} else {
var statearr_42790_42851 = state_42721__$1;
(statearr_42790_42851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (38))){
var inst_42700 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42791_42852 = state_42721__$1;
(statearr_42791_42852[(2)] = inst_42700);

(statearr_42791_42852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (30))){
var state_42721__$1 = state_42721;
var statearr_42792_42853 = state_42721__$1;
(statearr_42792_42853[(2)] = null);

(statearr_42792_42853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (10))){
var inst_42599 = (state_42721[(16)]);
var inst_42601 = (state_42721[(17)]);
var inst_42609 = cljs.core._nth.call(null,inst_42599,inst_42601);
var inst_42610 = cljs.core.nth.call(null,inst_42609,(0),null);
var inst_42611 = cljs.core.nth.call(null,inst_42609,(1),null);
var state_42721__$1 = (function (){var statearr_42793 = state_42721;
(statearr_42793[(26)] = inst_42610);

return statearr_42793;
})();
if(cljs.core.truth_(inst_42611)){
var statearr_42794_42854 = state_42721__$1;
(statearr_42794_42854[(1)] = (13));

} else {
var statearr_42795_42855 = state_42721__$1;
(statearr_42795_42855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (18))){
var inst_42646 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42796_42856 = state_42721__$1;
(statearr_42796_42856[(2)] = inst_42646);

(statearr_42796_42856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (42))){
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42721__$1,(45),dchan);
} else {
if((state_val_42722 === (37))){
var inst_42680 = (state_42721[(25)]);
var inst_42589 = (state_42721[(11)]);
var inst_42689 = (state_42721[(23)]);
var inst_42689__$1 = cljs.core.first.call(null,inst_42680);
var inst_42690 = cljs.core.async.put_BANG_.call(null,inst_42689__$1,inst_42589,done);
var state_42721__$1 = (function (){var statearr_42797 = state_42721;
(statearr_42797[(23)] = inst_42689__$1);

return statearr_42797;
})();
if(cljs.core.truth_(inst_42690)){
var statearr_42798_42857 = state_42721__$1;
(statearr_42798_42857[(1)] = (39));

} else {
var statearr_42799_42858 = state_42721__$1;
(statearr_42799_42858[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (8))){
var inst_42600 = (state_42721[(13)]);
var inst_42601 = (state_42721[(17)]);
var inst_42603 = (inst_42601 < inst_42600);
var inst_42604 = inst_42603;
var state_42721__$1 = state_42721;
if(cljs.core.truth_(inst_42604)){
var statearr_42800_42859 = state_42721__$1;
(statearr_42800_42859[(1)] = (10));

} else {
var statearr_42801_42860 = state_42721__$1;
(statearr_42801_42860[(1)] = (11));

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
});})(c__33157__auto___42806,cs,m,dchan,dctr,done))
;
return ((function (switch__32990__auto__,c__33157__auto___42806,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32991__auto__ = null;
var cljs$core$async$mult_$_state_machine__32991__auto____0 = (function (){
var statearr_42802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42802[(0)] = cljs$core$async$mult_$_state_machine__32991__auto__);

(statearr_42802[(1)] = (1));

return statearr_42802;
});
var cljs$core$async$mult_$_state_machine__32991__auto____1 = (function (state_42721){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42803){if((e42803 instanceof Object)){
var ex__32994__auto__ = e42803;
var statearr_42804_42861 = state_42721;
(statearr_42804_42861[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42862 = state_42721;
state_42721 = G__42862;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32991__auto__ = function(state_42721){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32991__auto____1.call(this,state_42721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32991__auto____0;
cljs$core$async$mult_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32991__auto____1;
return cljs$core$async$mult_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42806,cs,m,dchan,dctr,done))
})();
var state__33159__auto__ = (function (){var statearr_42805 = f__33158__auto__.call(null);
(statearr_42805[(6)] = c__33157__auto___42806);

return statearr_42805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42806,cs,m,dchan,dctr,done))
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
var G__42864 = arguments.length;
switch (G__42864) {
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
var len__4641__auto___42876 = arguments.length;
var i__4642__auto___42877 = (0);
while(true){
if((i__4642__auto___42877 < len__4641__auto___42876)){
args__4647__auto__.push((arguments[i__4642__auto___42877]));

var G__42878 = (i__4642__auto___42877 + (1));
i__4642__auto___42877 = G__42878;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42870){
var map__42871 = p__42870;
var map__42871__$1 = (((((!((map__42871 == null))))?(((((map__42871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42871):map__42871);
var opts = map__42871__$1;
var statearr_42873_42879 = state;
(statearr_42873_42879[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__42871,map__42871__$1,opts){
return (function (val){
var statearr_42874_42880 = state;
(statearr_42874_42880[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42871,map__42871__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_42875_42881 = state;
(statearr_42875_42881[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42866){
var G__42867 = cljs.core.first.call(null,seq42866);
var seq42866__$1 = cljs.core.next.call(null,seq42866);
var G__42868 = cljs.core.first.call(null,seq42866__$1);
var seq42866__$2 = cljs.core.next.call(null,seq42866__$1);
var G__42869 = cljs.core.first.call(null,seq42866__$2);
var seq42866__$3 = cljs.core.next.call(null,seq42866__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42867,G__42868,G__42869,seq42866__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42882 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42883){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42883 = meta42883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42884,meta42883__$1){
var self__ = this;
var _42884__$1 = this;
return (new cljs.core.async.t_cljs$core$async42882(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42883__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42884){
var self__ = this;
var _42884__$1 = this;
return self__.meta42883;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42882.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42883","meta42883",-1506793294,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42882";

cljs.core.async.t_cljs$core$async42882.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42882");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42882.
 */
cljs.core.async.__GT_t_cljs$core$async42882 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42882(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42883){
return (new cljs.core.async.t_cljs$core$async42882(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42883));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42882(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33157__auto___43046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42986){
var state_val_42987 = (state_42986[(1)]);
if((state_val_42987 === (7))){
var inst_42901 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
var statearr_42988_43047 = state_42986__$1;
(statearr_42988_43047[(2)] = inst_42901);

(statearr_42988_43047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (20))){
var inst_42913 = (state_42986[(7)]);
var state_42986__$1 = state_42986;
var statearr_42989_43048 = state_42986__$1;
(statearr_42989_43048[(2)] = inst_42913);

(statearr_42989_43048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (27))){
var state_42986__$1 = state_42986;
var statearr_42990_43049 = state_42986__$1;
(statearr_42990_43049[(2)] = null);

(statearr_42990_43049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (1))){
var inst_42888 = (state_42986[(8)]);
var inst_42888__$1 = calc_state.call(null);
var inst_42890 = (inst_42888__$1 == null);
var inst_42891 = cljs.core.not.call(null,inst_42890);
var state_42986__$1 = (function (){var statearr_42991 = state_42986;
(statearr_42991[(8)] = inst_42888__$1);

return statearr_42991;
})();
if(inst_42891){
var statearr_42992_43050 = state_42986__$1;
(statearr_42992_43050[(1)] = (2));

} else {
var statearr_42993_43051 = state_42986__$1;
(statearr_42993_43051[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (24))){
var inst_42946 = (state_42986[(9)]);
var inst_42960 = (state_42986[(10)]);
var inst_42937 = (state_42986[(11)]);
var inst_42960__$1 = inst_42937.call(null,inst_42946);
var state_42986__$1 = (function (){var statearr_42994 = state_42986;
(statearr_42994[(10)] = inst_42960__$1);

return statearr_42994;
})();
if(cljs.core.truth_(inst_42960__$1)){
var statearr_42995_43052 = state_42986__$1;
(statearr_42995_43052[(1)] = (29));

} else {
var statearr_42996_43053 = state_42986__$1;
(statearr_42996_43053[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (4))){
var inst_42904 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
if(cljs.core.truth_(inst_42904)){
var statearr_42997_43054 = state_42986__$1;
(statearr_42997_43054[(1)] = (8));

} else {
var statearr_42998_43055 = state_42986__$1;
(statearr_42998_43055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (15))){
var inst_42931 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
if(cljs.core.truth_(inst_42931)){
var statearr_42999_43056 = state_42986__$1;
(statearr_42999_43056[(1)] = (19));

} else {
var statearr_43000_43057 = state_42986__$1;
(statearr_43000_43057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (21))){
var inst_42936 = (state_42986[(12)]);
var inst_42936__$1 = (state_42986[(2)]);
var inst_42937 = cljs.core.get.call(null,inst_42936__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42938 = cljs.core.get.call(null,inst_42936__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42939 = cljs.core.get.call(null,inst_42936__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42986__$1 = (function (){var statearr_43001 = state_42986;
(statearr_43001[(11)] = inst_42937);

(statearr_43001[(12)] = inst_42936__$1);

(statearr_43001[(13)] = inst_42938);

return statearr_43001;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42986__$1,(22),inst_42939);
} else {
if((state_val_42987 === (31))){
var inst_42968 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
if(cljs.core.truth_(inst_42968)){
var statearr_43002_43058 = state_42986__$1;
(statearr_43002_43058[(1)] = (32));

} else {
var statearr_43003_43059 = state_42986__$1;
(statearr_43003_43059[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (32))){
var inst_42945 = (state_42986[(14)]);
var state_42986__$1 = state_42986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42986__$1,(35),out,inst_42945);
} else {
if((state_val_42987 === (33))){
var inst_42936 = (state_42986[(12)]);
var inst_42913 = inst_42936;
var state_42986__$1 = (function (){var statearr_43004 = state_42986;
(statearr_43004[(7)] = inst_42913);

return statearr_43004;
})();
var statearr_43005_43060 = state_42986__$1;
(statearr_43005_43060[(2)] = null);

(statearr_43005_43060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (13))){
var inst_42913 = (state_42986[(7)]);
var inst_42920 = inst_42913.cljs$lang$protocol_mask$partition0$;
var inst_42921 = (inst_42920 & (64));
var inst_42922 = inst_42913.cljs$core$ISeq$;
var inst_42923 = (cljs.core.PROTOCOL_SENTINEL === inst_42922);
var inst_42924 = ((inst_42921) || (inst_42923));
var state_42986__$1 = state_42986;
if(cljs.core.truth_(inst_42924)){
var statearr_43006_43061 = state_42986__$1;
(statearr_43006_43061[(1)] = (16));

} else {
var statearr_43007_43062 = state_42986__$1;
(statearr_43007_43062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (22))){
var inst_42946 = (state_42986[(9)]);
var inst_42945 = (state_42986[(14)]);
var inst_42944 = (state_42986[(2)]);
var inst_42945__$1 = cljs.core.nth.call(null,inst_42944,(0),null);
var inst_42946__$1 = cljs.core.nth.call(null,inst_42944,(1),null);
var inst_42947 = (inst_42945__$1 == null);
var inst_42948 = cljs.core._EQ_.call(null,inst_42946__$1,change);
var inst_42949 = ((inst_42947) || (inst_42948));
var state_42986__$1 = (function (){var statearr_43008 = state_42986;
(statearr_43008[(9)] = inst_42946__$1);

(statearr_43008[(14)] = inst_42945__$1);

return statearr_43008;
})();
if(cljs.core.truth_(inst_42949)){
var statearr_43009_43063 = state_42986__$1;
(statearr_43009_43063[(1)] = (23));

} else {
var statearr_43010_43064 = state_42986__$1;
(statearr_43010_43064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (36))){
var inst_42936 = (state_42986[(12)]);
var inst_42913 = inst_42936;
var state_42986__$1 = (function (){var statearr_43011 = state_42986;
(statearr_43011[(7)] = inst_42913);

return statearr_43011;
})();
var statearr_43012_43065 = state_42986__$1;
(statearr_43012_43065[(2)] = null);

(statearr_43012_43065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (29))){
var inst_42960 = (state_42986[(10)]);
var state_42986__$1 = state_42986;
var statearr_43013_43066 = state_42986__$1;
(statearr_43013_43066[(2)] = inst_42960);

(statearr_43013_43066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (6))){
var state_42986__$1 = state_42986;
var statearr_43014_43067 = state_42986__$1;
(statearr_43014_43067[(2)] = false);

(statearr_43014_43067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (28))){
var inst_42956 = (state_42986[(2)]);
var inst_42957 = calc_state.call(null);
var inst_42913 = inst_42957;
var state_42986__$1 = (function (){var statearr_43015 = state_42986;
(statearr_43015[(15)] = inst_42956);

(statearr_43015[(7)] = inst_42913);

return statearr_43015;
})();
var statearr_43016_43068 = state_42986__$1;
(statearr_43016_43068[(2)] = null);

(statearr_43016_43068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (25))){
var inst_42982 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
var statearr_43017_43069 = state_42986__$1;
(statearr_43017_43069[(2)] = inst_42982);

(statearr_43017_43069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (34))){
var inst_42980 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
var statearr_43018_43070 = state_42986__$1;
(statearr_43018_43070[(2)] = inst_42980);

(statearr_43018_43070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (17))){
var state_42986__$1 = state_42986;
var statearr_43019_43071 = state_42986__$1;
(statearr_43019_43071[(2)] = false);

(statearr_43019_43071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (3))){
var state_42986__$1 = state_42986;
var statearr_43020_43072 = state_42986__$1;
(statearr_43020_43072[(2)] = false);

(statearr_43020_43072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (12))){
var inst_42984 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42986__$1,inst_42984);
} else {
if((state_val_42987 === (2))){
var inst_42888 = (state_42986[(8)]);
var inst_42893 = inst_42888.cljs$lang$protocol_mask$partition0$;
var inst_42894 = (inst_42893 & (64));
var inst_42895 = inst_42888.cljs$core$ISeq$;
var inst_42896 = (cljs.core.PROTOCOL_SENTINEL === inst_42895);
var inst_42897 = ((inst_42894) || (inst_42896));
var state_42986__$1 = state_42986;
if(cljs.core.truth_(inst_42897)){
var statearr_43021_43073 = state_42986__$1;
(statearr_43021_43073[(1)] = (5));

} else {
var statearr_43022_43074 = state_42986__$1;
(statearr_43022_43074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (23))){
var inst_42945 = (state_42986[(14)]);
var inst_42951 = (inst_42945 == null);
var state_42986__$1 = state_42986;
if(cljs.core.truth_(inst_42951)){
var statearr_43023_43075 = state_42986__$1;
(statearr_43023_43075[(1)] = (26));

} else {
var statearr_43024_43076 = state_42986__$1;
(statearr_43024_43076[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (35))){
var inst_42971 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
if(cljs.core.truth_(inst_42971)){
var statearr_43025_43077 = state_42986__$1;
(statearr_43025_43077[(1)] = (36));

} else {
var statearr_43026_43078 = state_42986__$1;
(statearr_43026_43078[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (19))){
var inst_42913 = (state_42986[(7)]);
var inst_42933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42913);
var state_42986__$1 = state_42986;
var statearr_43027_43079 = state_42986__$1;
(statearr_43027_43079[(2)] = inst_42933);

(statearr_43027_43079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (11))){
var inst_42913 = (state_42986[(7)]);
var inst_42917 = (inst_42913 == null);
var inst_42918 = cljs.core.not.call(null,inst_42917);
var state_42986__$1 = state_42986;
if(inst_42918){
var statearr_43028_43080 = state_42986__$1;
(statearr_43028_43080[(1)] = (13));

} else {
var statearr_43029_43081 = state_42986__$1;
(statearr_43029_43081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (9))){
var inst_42888 = (state_42986[(8)]);
var state_42986__$1 = state_42986;
var statearr_43030_43082 = state_42986__$1;
(statearr_43030_43082[(2)] = inst_42888);

(statearr_43030_43082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (5))){
var state_42986__$1 = state_42986;
var statearr_43031_43083 = state_42986__$1;
(statearr_43031_43083[(2)] = true);

(statearr_43031_43083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (14))){
var state_42986__$1 = state_42986;
var statearr_43032_43084 = state_42986__$1;
(statearr_43032_43084[(2)] = false);

(statearr_43032_43084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (26))){
var inst_42946 = (state_42986[(9)]);
var inst_42953 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42946);
var state_42986__$1 = state_42986;
var statearr_43033_43085 = state_42986__$1;
(statearr_43033_43085[(2)] = inst_42953);

(statearr_43033_43085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (16))){
var state_42986__$1 = state_42986;
var statearr_43034_43086 = state_42986__$1;
(statearr_43034_43086[(2)] = true);

(statearr_43034_43086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (38))){
var inst_42976 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
var statearr_43035_43087 = state_42986__$1;
(statearr_43035_43087[(2)] = inst_42976);

(statearr_43035_43087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (30))){
var inst_42946 = (state_42986[(9)]);
var inst_42937 = (state_42986[(11)]);
var inst_42938 = (state_42986[(13)]);
var inst_42963 = cljs.core.empty_QMARK_.call(null,inst_42937);
var inst_42964 = inst_42938.call(null,inst_42946);
var inst_42965 = cljs.core.not.call(null,inst_42964);
var inst_42966 = ((inst_42963) && (inst_42965));
var state_42986__$1 = state_42986;
var statearr_43036_43088 = state_42986__$1;
(statearr_43036_43088[(2)] = inst_42966);

(statearr_43036_43088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (10))){
var inst_42888 = (state_42986[(8)]);
var inst_42909 = (state_42986[(2)]);
var inst_42910 = cljs.core.get.call(null,inst_42909,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42911 = cljs.core.get.call(null,inst_42909,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42912 = cljs.core.get.call(null,inst_42909,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42913 = inst_42888;
var state_42986__$1 = (function (){var statearr_43037 = state_42986;
(statearr_43037[(16)] = inst_42910);

(statearr_43037[(17)] = inst_42911);

(statearr_43037[(18)] = inst_42912);

(statearr_43037[(7)] = inst_42913);

return statearr_43037;
})();
var statearr_43038_43089 = state_42986__$1;
(statearr_43038_43089[(2)] = null);

(statearr_43038_43089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (18))){
var inst_42928 = (state_42986[(2)]);
var state_42986__$1 = state_42986;
var statearr_43039_43090 = state_42986__$1;
(statearr_43039_43090[(2)] = inst_42928);

(statearr_43039_43090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (37))){
var state_42986__$1 = state_42986;
var statearr_43040_43091 = state_42986__$1;
(statearr_43040_43091[(2)] = null);

(statearr_43040_43091[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42987 === (8))){
var inst_42888 = (state_42986[(8)]);
var inst_42906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42888);
var state_42986__$1 = state_42986;
var statearr_43041_43092 = state_42986__$1;
(statearr_43041_43092[(2)] = inst_42906);

(statearr_43041_43092[(1)] = (10));


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
});})(c__33157__auto___43046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32990__auto__,c__33157__auto___43046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32991__auto__ = null;
var cljs$core$async$mix_$_state_machine__32991__auto____0 = (function (){
var statearr_43042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43042[(0)] = cljs$core$async$mix_$_state_machine__32991__auto__);

(statearr_43042[(1)] = (1));

return statearr_43042;
});
var cljs$core$async$mix_$_state_machine__32991__auto____1 = (function (state_42986){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43043){if((e43043 instanceof Object)){
var ex__32994__auto__ = e43043;
var statearr_43044_43093 = state_42986;
(statearr_43044_43093[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43094 = state_42986;
state_42986 = G__43094;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32991__auto__ = function(state_42986){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32991__auto____1.call(this,state_42986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32991__auto____0;
cljs$core$async$mix_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32991__auto____1;
return cljs$core$async$mix_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33159__auto__ = (function (){var statearr_43045 = f__33158__auto__.call(null);
(statearr_43045[(6)] = c__33157__auto___43046);

return statearr_43045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__43096 = arguments.length;
switch (G__43096) {
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
var G__43100 = arguments.length;
switch (G__43100) {
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
return (function (p1__43098_SHARP_){
if(cljs.core.truth_(p1__43098_SHARP_.call(null,topic))){
return p1__43098_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43098_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43101 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43102){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43102 = meta43102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43103,meta43102__$1){
var self__ = this;
var _43103__$1 = this;
return (new cljs.core.async.t_cljs$core$async43101(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43102__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43103){
var self__ = this;
var _43103__$1 = this;
return self__.meta43102;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43101.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43102","meta43102",-945000579,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43101";

cljs.core.async.t_cljs$core$async43101.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43101");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43101.
 */
cljs.core.async.__GT_t_cljs$core$async43101 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43101(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43102){
return (new cljs.core.async.t_cljs$core$async43101(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43102));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43101(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33157__auto___43221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43221,mults,ensure_mult,p){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43221,mults,ensure_mult,p){
return (function (state_43175){
var state_val_43176 = (state_43175[(1)]);
if((state_val_43176 === (7))){
var inst_43171 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43177_43222 = state_43175__$1;
(statearr_43177_43222[(2)] = inst_43171);

(statearr_43177_43222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (20))){
var state_43175__$1 = state_43175;
var statearr_43178_43223 = state_43175__$1;
(statearr_43178_43223[(2)] = null);

(statearr_43178_43223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (1))){
var state_43175__$1 = state_43175;
var statearr_43179_43224 = state_43175__$1;
(statearr_43179_43224[(2)] = null);

(statearr_43179_43224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (24))){
var inst_43154 = (state_43175[(7)]);
var inst_43163 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43154);
var state_43175__$1 = state_43175;
var statearr_43180_43225 = state_43175__$1;
(statearr_43180_43225[(2)] = inst_43163);

(statearr_43180_43225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (4))){
var inst_43106 = (state_43175[(8)]);
var inst_43106__$1 = (state_43175[(2)]);
var inst_43107 = (inst_43106__$1 == null);
var state_43175__$1 = (function (){var statearr_43181 = state_43175;
(statearr_43181[(8)] = inst_43106__$1);

return statearr_43181;
})();
if(cljs.core.truth_(inst_43107)){
var statearr_43182_43226 = state_43175__$1;
(statearr_43182_43226[(1)] = (5));

} else {
var statearr_43183_43227 = state_43175__$1;
(statearr_43183_43227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (15))){
var inst_43148 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43184_43228 = state_43175__$1;
(statearr_43184_43228[(2)] = inst_43148);

(statearr_43184_43228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (21))){
var inst_43168 = (state_43175[(2)]);
var state_43175__$1 = (function (){var statearr_43185 = state_43175;
(statearr_43185[(9)] = inst_43168);

return statearr_43185;
})();
var statearr_43186_43229 = state_43175__$1;
(statearr_43186_43229[(2)] = null);

(statearr_43186_43229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (13))){
var inst_43130 = (state_43175[(10)]);
var inst_43132 = cljs.core.chunked_seq_QMARK_.call(null,inst_43130);
var state_43175__$1 = state_43175;
if(inst_43132){
var statearr_43187_43230 = state_43175__$1;
(statearr_43187_43230[(1)] = (16));

} else {
var statearr_43188_43231 = state_43175__$1;
(statearr_43188_43231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (22))){
var inst_43160 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
if(cljs.core.truth_(inst_43160)){
var statearr_43189_43232 = state_43175__$1;
(statearr_43189_43232[(1)] = (23));

} else {
var statearr_43190_43233 = state_43175__$1;
(statearr_43190_43233[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (6))){
var inst_43106 = (state_43175[(8)]);
var inst_43154 = (state_43175[(7)]);
var inst_43156 = (state_43175[(11)]);
var inst_43154__$1 = topic_fn.call(null,inst_43106);
var inst_43155 = cljs.core.deref.call(null,mults);
var inst_43156__$1 = cljs.core.get.call(null,inst_43155,inst_43154__$1);
var state_43175__$1 = (function (){var statearr_43191 = state_43175;
(statearr_43191[(7)] = inst_43154__$1);

(statearr_43191[(11)] = inst_43156__$1);

return statearr_43191;
})();
if(cljs.core.truth_(inst_43156__$1)){
var statearr_43192_43234 = state_43175__$1;
(statearr_43192_43234[(1)] = (19));

} else {
var statearr_43193_43235 = state_43175__$1;
(statearr_43193_43235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (25))){
var inst_43165 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43194_43236 = state_43175__$1;
(statearr_43194_43236[(2)] = inst_43165);

(statearr_43194_43236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (17))){
var inst_43130 = (state_43175[(10)]);
var inst_43139 = cljs.core.first.call(null,inst_43130);
var inst_43140 = cljs.core.async.muxch_STAR_.call(null,inst_43139);
var inst_43141 = cljs.core.async.close_BANG_.call(null,inst_43140);
var inst_43142 = cljs.core.next.call(null,inst_43130);
var inst_43116 = inst_43142;
var inst_43117 = null;
var inst_43118 = (0);
var inst_43119 = (0);
var state_43175__$1 = (function (){var statearr_43195 = state_43175;
(statearr_43195[(12)] = inst_43118);

(statearr_43195[(13)] = inst_43117);

(statearr_43195[(14)] = inst_43119);

(statearr_43195[(15)] = inst_43141);

(statearr_43195[(16)] = inst_43116);

return statearr_43195;
})();
var statearr_43196_43237 = state_43175__$1;
(statearr_43196_43237[(2)] = null);

(statearr_43196_43237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (3))){
var inst_43173 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43175__$1,inst_43173);
} else {
if((state_val_43176 === (12))){
var inst_43150 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43197_43238 = state_43175__$1;
(statearr_43197_43238[(2)] = inst_43150);

(statearr_43197_43238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (2))){
var state_43175__$1 = state_43175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43175__$1,(4),ch);
} else {
if((state_val_43176 === (23))){
var state_43175__$1 = state_43175;
var statearr_43198_43239 = state_43175__$1;
(statearr_43198_43239[(2)] = null);

(statearr_43198_43239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (19))){
var inst_43106 = (state_43175[(8)]);
var inst_43156 = (state_43175[(11)]);
var inst_43158 = cljs.core.async.muxch_STAR_.call(null,inst_43156);
var state_43175__$1 = state_43175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43175__$1,(22),inst_43158,inst_43106);
} else {
if((state_val_43176 === (11))){
var inst_43130 = (state_43175[(10)]);
var inst_43116 = (state_43175[(16)]);
var inst_43130__$1 = cljs.core.seq.call(null,inst_43116);
var state_43175__$1 = (function (){var statearr_43199 = state_43175;
(statearr_43199[(10)] = inst_43130__$1);

return statearr_43199;
})();
if(inst_43130__$1){
var statearr_43200_43240 = state_43175__$1;
(statearr_43200_43240[(1)] = (13));

} else {
var statearr_43201_43241 = state_43175__$1;
(statearr_43201_43241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (9))){
var inst_43152 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43202_43242 = state_43175__$1;
(statearr_43202_43242[(2)] = inst_43152);

(statearr_43202_43242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (5))){
var inst_43113 = cljs.core.deref.call(null,mults);
var inst_43114 = cljs.core.vals.call(null,inst_43113);
var inst_43115 = cljs.core.seq.call(null,inst_43114);
var inst_43116 = inst_43115;
var inst_43117 = null;
var inst_43118 = (0);
var inst_43119 = (0);
var state_43175__$1 = (function (){var statearr_43203 = state_43175;
(statearr_43203[(12)] = inst_43118);

(statearr_43203[(13)] = inst_43117);

(statearr_43203[(14)] = inst_43119);

(statearr_43203[(16)] = inst_43116);

return statearr_43203;
})();
var statearr_43204_43243 = state_43175__$1;
(statearr_43204_43243[(2)] = null);

(statearr_43204_43243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (14))){
var state_43175__$1 = state_43175;
var statearr_43208_43244 = state_43175__$1;
(statearr_43208_43244[(2)] = null);

(statearr_43208_43244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (16))){
var inst_43130 = (state_43175[(10)]);
var inst_43134 = cljs.core.chunk_first.call(null,inst_43130);
var inst_43135 = cljs.core.chunk_rest.call(null,inst_43130);
var inst_43136 = cljs.core.count.call(null,inst_43134);
var inst_43116 = inst_43135;
var inst_43117 = inst_43134;
var inst_43118 = inst_43136;
var inst_43119 = (0);
var state_43175__$1 = (function (){var statearr_43209 = state_43175;
(statearr_43209[(12)] = inst_43118);

(statearr_43209[(13)] = inst_43117);

(statearr_43209[(14)] = inst_43119);

(statearr_43209[(16)] = inst_43116);

return statearr_43209;
})();
var statearr_43210_43245 = state_43175__$1;
(statearr_43210_43245[(2)] = null);

(statearr_43210_43245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (10))){
var inst_43118 = (state_43175[(12)]);
var inst_43117 = (state_43175[(13)]);
var inst_43119 = (state_43175[(14)]);
var inst_43116 = (state_43175[(16)]);
var inst_43124 = cljs.core._nth.call(null,inst_43117,inst_43119);
var inst_43125 = cljs.core.async.muxch_STAR_.call(null,inst_43124);
var inst_43126 = cljs.core.async.close_BANG_.call(null,inst_43125);
var inst_43127 = (inst_43119 + (1));
var tmp43205 = inst_43118;
var tmp43206 = inst_43117;
var tmp43207 = inst_43116;
var inst_43116__$1 = tmp43207;
var inst_43117__$1 = tmp43206;
var inst_43118__$1 = tmp43205;
var inst_43119__$1 = inst_43127;
var state_43175__$1 = (function (){var statearr_43211 = state_43175;
(statearr_43211[(12)] = inst_43118__$1);

(statearr_43211[(13)] = inst_43117__$1);

(statearr_43211[(17)] = inst_43126);

(statearr_43211[(14)] = inst_43119__$1);

(statearr_43211[(16)] = inst_43116__$1);

return statearr_43211;
})();
var statearr_43212_43246 = state_43175__$1;
(statearr_43212_43246[(2)] = null);

(statearr_43212_43246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (18))){
var inst_43145 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43213_43247 = state_43175__$1;
(statearr_43213_43247[(2)] = inst_43145);

(statearr_43213_43247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (8))){
var inst_43118 = (state_43175[(12)]);
var inst_43119 = (state_43175[(14)]);
var inst_43121 = (inst_43119 < inst_43118);
var inst_43122 = inst_43121;
var state_43175__$1 = state_43175;
if(cljs.core.truth_(inst_43122)){
var statearr_43214_43248 = state_43175__$1;
(statearr_43214_43248[(1)] = (10));

} else {
var statearr_43215_43249 = state_43175__$1;
(statearr_43215_43249[(1)] = (11));

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
});})(c__33157__auto___43221,mults,ensure_mult,p))
;
return ((function (switch__32990__auto__,c__33157__auto___43221,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43216[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43216[(1)] = (1));

return statearr_43216;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43175){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43217){if((e43217 instanceof Object)){
var ex__32994__auto__ = e43217;
var statearr_43218_43250 = state_43175;
(statearr_43218_43250[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43251 = state_43175;
state_43175 = G__43251;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43221,mults,ensure_mult,p))
})();
var state__33159__auto__ = (function (){var statearr_43219 = f__33158__auto__.call(null);
(statearr_43219[(6)] = c__33157__auto___43221);

return statearr_43219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43221,mults,ensure_mult,p))
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
var G__43253 = arguments.length;
switch (G__43253) {
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
var G__43256 = arguments.length;
switch (G__43256) {
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
var G__43259 = arguments.length;
switch (G__43259) {
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
var c__33157__auto___43326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43298){
var state_val_43299 = (state_43298[(1)]);
if((state_val_43299 === (7))){
var state_43298__$1 = state_43298;
var statearr_43300_43327 = state_43298__$1;
(statearr_43300_43327[(2)] = null);

(statearr_43300_43327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (1))){
var state_43298__$1 = state_43298;
var statearr_43301_43328 = state_43298__$1;
(statearr_43301_43328[(2)] = null);

(statearr_43301_43328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (4))){
var inst_43262 = (state_43298[(7)]);
var inst_43264 = (inst_43262 < cnt);
var state_43298__$1 = state_43298;
if(cljs.core.truth_(inst_43264)){
var statearr_43302_43329 = state_43298__$1;
(statearr_43302_43329[(1)] = (6));

} else {
var statearr_43303_43330 = state_43298__$1;
(statearr_43303_43330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (15))){
var inst_43294 = (state_43298[(2)]);
var state_43298__$1 = state_43298;
var statearr_43304_43331 = state_43298__$1;
(statearr_43304_43331[(2)] = inst_43294);

(statearr_43304_43331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (13))){
var inst_43287 = cljs.core.async.close_BANG_.call(null,out);
var state_43298__$1 = state_43298;
var statearr_43305_43332 = state_43298__$1;
(statearr_43305_43332[(2)] = inst_43287);

(statearr_43305_43332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (6))){
var state_43298__$1 = state_43298;
var statearr_43306_43333 = state_43298__$1;
(statearr_43306_43333[(2)] = null);

(statearr_43306_43333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (3))){
var inst_43296 = (state_43298[(2)]);
var state_43298__$1 = state_43298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43298__$1,inst_43296);
} else {
if((state_val_43299 === (12))){
var inst_43284 = (state_43298[(8)]);
var inst_43284__$1 = (state_43298[(2)]);
var inst_43285 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43284__$1);
var state_43298__$1 = (function (){var statearr_43307 = state_43298;
(statearr_43307[(8)] = inst_43284__$1);

return statearr_43307;
})();
if(cljs.core.truth_(inst_43285)){
var statearr_43308_43334 = state_43298__$1;
(statearr_43308_43334[(1)] = (13));

} else {
var statearr_43309_43335 = state_43298__$1;
(statearr_43309_43335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (2))){
var inst_43261 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43262 = (0);
var state_43298__$1 = (function (){var statearr_43310 = state_43298;
(statearr_43310[(9)] = inst_43261);

(statearr_43310[(7)] = inst_43262);

return statearr_43310;
})();
var statearr_43311_43336 = state_43298__$1;
(statearr_43311_43336[(2)] = null);

(statearr_43311_43336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (11))){
var inst_43262 = (state_43298[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43298,(10),Object,null,(9));
var inst_43271 = chs__$1.call(null,inst_43262);
var inst_43272 = done.call(null,inst_43262);
var inst_43273 = cljs.core.async.take_BANG_.call(null,inst_43271,inst_43272);
var state_43298__$1 = state_43298;
var statearr_43312_43337 = state_43298__$1;
(statearr_43312_43337[(2)] = inst_43273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (9))){
var inst_43262 = (state_43298[(7)]);
var inst_43275 = (state_43298[(2)]);
var inst_43276 = (inst_43262 + (1));
var inst_43262__$1 = inst_43276;
var state_43298__$1 = (function (){var statearr_43313 = state_43298;
(statearr_43313[(10)] = inst_43275);

(statearr_43313[(7)] = inst_43262__$1);

return statearr_43313;
})();
var statearr_43314_43338 = state_43298__$1;
(statearr_43314_43338[(2)] = null);

(statearr_43314_43338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (5))){
var inst_43282 = (state_43298[(2)]);
var state_43298__$1 = (function (){var statearr_43315 = state_43298;
(statearr_43315[(11)] = inst_43282);

return statearr_43315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43298__$1,(12),dchan);
} else {
if((state_val_43299 === (14))){
var inst_43284 = (state_43298[(8)]);
var inst_43289 = cljs.core.apply.call(null,f,inst_43284);
var state_43298__$1 = state_43298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43298__$1,(16),out,inst_43289);
} else {
if((state_val_43299 === (16))){
var inst_43291 = (state_43298[(2)]);
var state_43298__$1 = (function (){var statearr_43316 = state_43298;
(statearr_43316[(12)] = inst_43291);

return statearr_43316;
})();
var statearr_43317_43339 = state_43298__$1;
(statearr_43317_43339[(2)] = null);

(statearr_43317_43339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (10))){
var inst_43266 = (state_43298[(2)]);
var inst_43267 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43298__$1 = (function (){var statearr_43318 = state_43298;
(statearr_43318[(13)] = inst_43266);

return statearr_43318;
})();
var statearr_43319_43340 = state_43298__$1;
(statearr_43319_43340[(2)] = inst_43267);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (8))){
var inst_43280 = (state_43298[(2)]);
var state_43298__$1 = state_43298;
var statearr_43320_43341 = state_43298__$1;
(statearr_43320_43341[(2)] = inst_43280);

(statearr_43320_43341[(1)] = (5));


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
});})(c__33157__auto___43326,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32990__auto__,c__33157__auto___43326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43321[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43321[(1)] = (1));

return statearr_43321;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43298){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43322){if((e43322 instanceof Object)){
var ex__32994__auto__ = e43322;
var statearr_43323_43342 = state_43298;
(statearr_43323_43342[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43343 = state_43298;
state_43298 = G__43343;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43326,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33159__auto__ = (function (){var statearr_43324 = f__33158__auto__.call(null);
(statearr_43324[(6)] = c__33157__auto___43326);

return statearr_43324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43326,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43346 = arguments.length;
switch (G__43346) {
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
var c__33157__auto___43400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43400,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43400,out){
return (function (state_43378){
var state_val_43379 = (state_43378[(1)]);
if((state_val_43379 === (7))){
var inst_43358 = (state_43378[(7)]);
var inst_43357 = (state_43378[(8)]);
var inst_43357__$1 = (state_43378[(2)]);
var inst_43358__$1 = cljs.core.nth.call(null,inst_43357__$1,(0),null);
var inst_43359 = cljs.core.nth.call(null,inst_43357__$1,(1),null);
var inst_43360 = (inst_43358__$1 == null);
var state_43378__$1 = (function (){var statearr_43380 = state_43378;
(statearr_43380[(7)] = inst_43358__$1);

(statearr_43380[(8)] = inst_43357__$1);

(statearr_43380[(9)] = inst_43359);

return statearr_43380;
})();
if(cljs.core.truth_(inst_43360)){
var statearr_43381_43401 = state_43378__$1;
(statearr_43381_43401[(1)] = (8));

} else {
var statearr_43382_43402 = state_43378__$1;
(statearr_43382_43402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43379 === (1))){
var inst_43347 = cljs.core.vec.call(null,chs);
var inst_43348 = inst_43347;
var state_43378__$1 = (function (){var statearr_43383 = state_43378;
(statearr_43383[(10)] = inst_43348);

return statearr_43383;
})();
var statearr_43384_43403 = state_43378__$1;
(statearr_43384_43403[(2)] = null);

(statearr_43384_43403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43379 === (4))){
var inst_43348 = (state_43378[(10)]);
var state_43378__$1 = state_43378;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43378__$1,(7),inst_43348);
} else {
if((state_val_43379 === (6))){
var inst_43374 = (state_43378[(2)]);
var state_43378__$1 = state_43378;
var statearr_43385_43404 = state_43378__$1;
(statearr_43385_43404[(2)] = inst_43374);

(statearr_43385_43404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43379 === (3))){
var inst_43376 = (state_43378[(2)]);
var state_43378__$1 = state_43378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43378__$1,inst_43376);
} else {
if((state_val_43379 === (2))){
var inst_43348 = (state_43378[(10)]);
var inst_43350 = cljs.core.count.call(null,inst_43348);
var inst_43351 = (inst_43350 > (0));
var state_43378__$1 = state_43378;
if(cljs.core.truth_(inst_43351)){
var statearr_43387_43405 = state_43378__$1;
(statearr_43387_43405[(1)] = (4));

} else {
var statearr_43388_43406 = state_43378__$1;
(statearr_43388_43406[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43379 === (11))){
var inst_43348 = (state_43378[(10)]);
var inst_43367 = (state_43378[(2)]);
var tmp43386 = inst_43348;
var inst_43348__$1 = tmp43386;
var state_43378__$1 = (function (){var statearr_43389 = state_43378;
(statearr_43389[(11)] = inst_43367);

(statearr_43389[(10)] = inst_43348__$1);

return statearr_43389;
})();
var statearr_43390_43407 = state_43378__$1;
(statearr_43390_43407[(2)] = null);

(statearr_43390_43407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43379 === (9))){
var inst_43358 = (state_43378[(7)]);
var state_43378__$1 = state_43378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43378__$1,(11),out,inst_43358);
} else {
if((state_val_43379 === (5))){
var inst_43372 = cljs.core.async.close_BANG_.call(null,out);
var state_43378__$1 = state_43378;
var statearr_43391_43408 = state_43378__$1;
(statearr_43391_43408[(2)] = inst_43372);

(statearr_43391_43408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43379 === (10))){
var inst_43370 = (state_43378[(2)]);
var state_43378__$1 = state_43378;
var statearr_43392_43409 = state_43378__$1;
(statearr_43392_43409[(2)] = inst_43370);

(statearr_43392_43409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43379 === (8))){
var inst_43358 = (state_43378[(7)]);
var inst_43357 = (state_43378[(8)]);
var inst_43359 = (state_43378[(9)]);
var inst_43348 = (state_43378[(10)]);
var inst_43362 = (function (){var cs = inst_43348;
var vec__43353 = inst_43357;
var v = inst_43358;
var c = inst_43359;
return ((function (cs,vec__43353,v,c,inst_43358,inst_43357,inst_43359,inst_43348,state_val_43379,c__33157__auto___43400,out){
return (function (p1__43344_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43344_SHARP_);
});
;})(cs,vec__43353,v,c,inst_43358,inst_43357,inst_43359,inst_43348,state_val_43379,c__33157__auto___43400,out))
})();
var inst_43363 = cljs.core.filterv.call(null,inst_43362,inst_43348);
var inst_43348__$1 = inst_43363;
var state_43378__$1 = (function (){var statearr_43393 = state_43378;
(statearr_43393[(10)] = inst_43348__$1);

return statearr_43393;
})();
var statearr_43394_43410 = state_43378__$1;
(statearr_43394_43410[(2)] = null);

(statearr_43394_43410[(1)] = (2));


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
});})(c__33157__auto___43400,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43400,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43395[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43395[(1)] = (1));

return statearr_43395;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43378){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43396){if((e43396 instanceof Object)){
var ex__32994__auto__ = e43396;
var statearr_43397_43411 = state_43378;
(statearr_43397_43411[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43412 = state_43378;
state_43378 = G__43412;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43400,out))
})();
var state__33159__auto__ = (function (){var statearr_43398 = f__33158__auto__.call(null);
(statearr_43398[(6)] = c__33157__auto___43400);

return statearr_43398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43400,out))
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
var G__43414 = arguments.length;
switch (G__43414) {
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
var c__33157__auto___43459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43459,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43459,out){
return (function (state_43438){
var state_val_43439 = (state_43438[(1)]);
if((state_val_43439 === (7))){
var inst_43420 = (state_43438[(7)]);
var inst_43420__$1 = (state_43438[(2)]);
var inst_43421 = (inst_43420__$1 == null);
var inst_43422 = cljs.core.not.call(null,inst_43421);
var state_43438__$1 = (function (){var statearr_43440 = state_43438;
(statearr_43440[(7)] = inst_43420__$1);

return statearr_43440;
})();
if(inst_43422){
var statearr_43441_43460 = state_43438__$1;
(statearr_43441_43460[(1)] = (8));

} else {
var statearr_43442_43461 = state_43438__$1;
(statearr_43442_43461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (1))){
var inst_43415 = (0);
var state_43438__$1 = (function (){var statearr_43443 = state_43438;
(statearr_43443[(8)] = inst_43415);

return statearr_43443;
})();
var statearr_43444_43462 = state_43438__$1;
(statearr_43444_43462[(2)] = null);

(statearr_43444_43462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (4))){
var state_43438__$1 = state_43438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43438__$1,(7),ch);
} else {
if((state_val_43439 === (6))){
var inst_43433 = (state_43438[(2)]);
var state_43438__$1 = state_43438;
var statearr_43445_43463 = state_43438__$1;
(statearr_43445_43463[(2)] = inst_43433);

(statearr_43445_43463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (3))){
var inst_43435 = (state_43438[(2)]);
var inst_43436 = cljs.core.async.close_BANG_.call(null,out);
var state_43438__$1 = (function (){var statearr_43446 = state_43438;
(statearr_43446[(9)] = inst_43435);

return statearr_43446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43438__$1,inst_43436);
} else {
if((state_val_43439 === (2))){
var inst_43415 = (state_43438[(8)]);
var inst_43417 = (inst_43415 < n);
var state_43438__$1 = state_43438;
if(cljs.core.truth_(inst_43417)){
var statearr_43447_43464 = state_43438__$1;
(statearr_43447_43464[(1)] = (4));

} else {
var statearr_43448_43465 = state_43438__$1;
(statearr_43448_43465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (11))){
var inst_43415 = (state_43438[(8)]);
var inst_43425 = (state_43438[(2)]);
var inst_43426 = (inst_43415 + (1));
var inst_43415__$1 = inst_43426;
var state_43438__$1 = (function (){var statearr_43449 = state_43438;
(statearr_43449[(10)] = inst_43425);

(statearr_43449[(8)] = inst_43415__$1);

return statearr_43449;
})();
var statearr_43450_43466 = state_43438__$1;
(statearr_43450_43466[(2)] = null);

(statearr_43450_43466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (9))){
var state_43438__$1 = state_43438;
var statearr_43451_43467 = state_43438__$1;
(statearr_43451_43467[(2)] = null);

(statearr_43451_43467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (5))){
var state_43438__$1 = state_43438;
var statearr_43452_43468 = state_43438__$1;
(statearr_43452_43468[(2)] = null);

(statearr_43452_43468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (10))){
var inst_43430 = (state_43438[(2)]);
var state_43438__$1 = state_43438;
var statearr_43453_43469 = state_43438__$1;
(statearr_43453_43469[(2)] = inst_43430);

(statearr_43453_43469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (8))){
var inst_43420 = (state_43438[(7)]);
var state_43438__$1 = state_43438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43438__$1,(11),out,inst_43420);
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
});})(c__33157__auto___43459,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43459,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43454[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43454[(1)] = (1));

return statearr_43454;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43438){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43455){if((e43455 instanceof Object)){
var ex__32994__auto__ = e43455;
var statearr_43456_43470 = state_43438;
(statearr_43456_43470[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43471 = state_43438;
state_43438 = G__43471;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43459,out))
})();
var state__33159__auto__ = (function (){var statearr_43457 = f__33158__auto__.call(null);
(statearr_43457[(6)] = c__33157__auto___43459);

return statearr_43457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43459,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43473 = (function (f,ch,meta43474){
this.f = f;
this.ch = ch;
this.meta43474 = meta43474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43475,meta43474__$1){
var self__ = this;
var _43475__$1 = this;
return (new cljs.core.async.t_cljs$core$async43473(self__.f,self__.ch,meta43474__$1));
});

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43475){
var self__ = this;
var _43475__$1 = this;
return self__.meta43474;
});

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43476 = (function (f,ch,meta43474,_,fn1,meta43477){
this.f = f;
this.ch = ch;
this.meta43474 = meta43474;
this._ = _;
this.fn1 = fn1;
this.meta43477 = meta43477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43478,meta43477__$1){
var self__ = this;
var _43478__$1 = this;
return (new cljs.core.async.t_cljs$core$async43476(self__.f,self__.ch,self__.meta43474,self__._,self__.fn1,meta43477__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43478){
var self__ = this;
var _43478__$1 = this;
return self__.meta43477;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43472_SHARP_){
return f1.call(null,(((p1__43472_SHARP_ == null))?null:self__.f.call(null,p1__43472_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43476.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43474","meta43474",1740492402,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43473","cljs.core.async/t_cljs$core$async43473",-1187395624,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43477","meta43477",419715682,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43476";

cljs.core.async.t_cljs$core$async43476.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43476");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43476.
 */
cljs.core.async.__GT_t_cljs$core$async43476 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43476(f__$1,ch__$1,meta43474__$1,___$2,fn1__$1,meta43477){
return (new cljs.core.async.t_cljs$core$async43476(f__$1,ch__$1,meta43474__$1,___$2,fn1__$1,meta43477));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43476(self__.f,self__.ch,self__.meta43474,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43474","meta43474",1740492402,null)], null);
});

cljs.core.async.t_cljs$core$async43473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43473";

cljs.core.async.t_cljs$core$async43473.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43473");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43473.
 */
cljs.core.async.__GT_t_cljs$core$async43473 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43473(f__$1,ch__$1,meta43474){
return (new cljs.core.async.t_cljs$core$async43473(f__$1,ch__$1,meta43474));
});

}

return (new cljs.core.async.t_cljs$core$async43473(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43479 = (function (f,ch,meta43480){
this.f = f;
this.ch = ch;
this.meta43480 = meta43480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43481,meta43480__$1){
var self__ = this;
var _43481__$1 = this;
return (new cljs.core.async.t_cljs$core$async43479(self__.f,self__.ch,meta43480__$1));
});

cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43481){
var self__ = this;
var _43481__$1 = this;
return self__.meta43480;
});

cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43480","meta43480",1891636092,null)], null);
});

cljs.core.async.t_cljs$core$async43479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43479";

cljs.core.async.t_cljs$core$async43479.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43479");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43479.
 */
cljs.core.async.__GT_t_cljs$core$async43479 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43479(f__$1,ch__$1,meta43480){
return (new cljs.core.async.t_cljs$core$async43479(f__$1,ch__$1,meta43480));
});

}

return (new cljs.core.async.t_cljs$core$async43479(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43482 = (function (p,ch,meta43483){
this.p = p;
this.ch = ch;
this.meta43483 = meta43483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43484,meta43483__$1){
var self__ = this;
var _43484__$1 = this;
return (new cljs.core.async.t_cljs$core$async43482(self__.p,self__.ch,meta43483__$1));
});

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43484){
var self__ = this;
var _43484__$1 = this;
return self__.meta43483;
});

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43483","meta43483",141436702,null)], null);
});

cljs.core.async.t_cljs$core$async43482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43482";

cljs.core.async.t_cljs$core$async43482.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43482");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43482.
 */
cljs.core.async.__GT_t_cljs$core$async43482 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43482(p__$1,ch__$1,meta43483){
return (new cljs.core.async.t_cljs$core$async43482(p__$1,ch__$1,meta43483));
});

}

return (new cljs.core.async.t_cljs$core$async43482(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43486 = arguments.length;
switch (G__43486) {
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
var c__33157__auto___43526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43526,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43526,out){
return (function (state_43507){
var state_val_43508 = (state_43507[(1)]);
if((state_val_43508 === (7))){
var inst_43503 = (state_43507[(2)]);
var state_43507__$1 = state_43507;
var statearr_43509_43527 = state_43507__$1;
(statearr_43509_43527[(2)] = inst_43503);

(statearr_43509_43527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (1))){
var state_43507__$1 = state_43507;
var statearr_43510_43528 = state_43507__$1;
(statearr_43510_43528[(2)] = null);

(statearr_43510_43528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (4))){
var inst_43489 = (state_43507[(7)]);
var inst_43489__$1 = (state_43507[(2)]);
var inst_43490 = (inst_43489__$1 == null);
var state_43507__$1 = (function (){var statearr_43511 = state_43507;
(statearr_43511[(7)] = inst_43489__$1);

return statearr_43511;
})();
if(cljs.core.truth_(inst_43490)){
var statearr_43512_43529 = state_43507__$1;
(statearr_43512_43529[(1)] = (5));

} else {
var statearr_43513_43530 = state_43507__$1;
(statearr_43513_43530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (6))){
var inst_43489 = (state_43507[(7)]);
var inst_43494 = p.call(null,inst_43489);
var state_43507__$1 = state_43507;
if(cljs.core.truth_(inst_43494)){
var statearr_43514_43531 = state_43507__$1;
(statearr_43514_43531[(1)] = (8));

} else {
var statearr_43515_43532 = state_43507__$1;
(statearr_43515_43532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (3))){
var inst_43505 = (state_43507[(2)]);
var state_43507__$1 = state_43507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43507__$1,inst_43505);
} else {
if((state_val_43508 === (2))){
var state_43507__$1 = state_43507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43507__$1,(4),ch);
} else {
if((state_val_43508 === (11))){
var inst_43497 = (state_43507[(2)]);
var state_43507__$1 = state_43507;
var statearr_43516_43533 = state_43507__$1;
(statearr_43516_43533[(2)] = inst_43497);

(statearr_43516_43533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (9))){
var state_43507__$1 = state_43507;
var statearr_43517_43534 = state_43507__$1;
(statearr_43517_43534[(2)] = null);

(statearr_43517_43534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (5))){
var inst_43492 = cljs.core.async.close_BANG_.call(null,out);
var state_43507__$1 = state_43507;
var statearr_43518_43535 = state_43507__$1;
(statearr_43518_43535[(2)] = inst_43492);

(statearr_43518_43535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (10))){
var inst_43500 = (state_43507[(2)]);
var state_43507__$1 = (function (){var statearr_43519 = state_43507;
(statearr_43519[(8)] = inst_43500);

return statearr_43519;
})();
var statearr_43520_43536 = state_43507__$1;
(statearr_43520_43536[(2)] = null);

(statearr_43520_43536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (8))){
var inst_43489 = (state_43507[(7)]);
var state_43507__$1 = state_43507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43507__$1,(11),out,inst_43489);
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
});})(c__33157__auto___43526,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43526,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43521 = [null,null,null,null,null,null,null,null,null];
(statearr_43521[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43521[(1)] = (1));

return statearr_43521;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43507){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43522){if((e43522 instanceof Object)){
var ex__32994__auto__ = e43522;
var statearr_43523_43537 = state_43507;
(statearr_43523_43537[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43538 = state_43507;
state_43507 = G__43538;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43526,out))
})();
var state__33159__auto__ = (function (){var statearr_43524 = f__33158__auto__.call(null);
(statearr_43524[(6)] = c__33157__auto___43526);

return statearr_43524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43526,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43540 = arguments.length;
switch (G__43540) {
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
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_43603){
var state_val_43604 = (state_43603[(1)]);
if((state_val_43604 === (7))){
var inst_43599 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43605_43643 = state_43603__$1;
(statearr_43605_43643[(2)] = inst_43599);

(statearr_43605_43643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (20))){
var inst_43569 = (state_43603[(7)]);
var inst_43580 = (state_43603[(2)]);
var inst_43581 = cljs.core.next.call(null,inst_43569);
var inst_43555 = inst_43581;
var inst_43556 = null;
var inst_43557 = (0);
var inst_43558 = (0);
var state_43603__$1 = (function (){var statearr_43606 = state_43603;
(statearr_43606[(8)] = inst_43556);

(statearr_43606[(9)] = inst_43580);

(statearr_43606[(10)] = inst_43555);

(statearr_43606[(11)] = inst_43558);

(statearr_43606[(12)] = inst_43557);

return statearr_43606;
})();
var statearr_43607_43644 = state_43603__$1;
(statearr_43607_43644[(2)] = null);

(statearr_43607_43644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (1))){
var state_43603__$1 = state_43603;
var statearr_43608_43645 = state_43603__$1;
(statearr_43608_43645[(2)] = null);

(statearr_43608_43645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (4))){
var inst_43544 = (state_43603[(13)]);
var inst_43544__$1 = (state_43603[(2)]);
var inst_43545 = (inst_43544__$1 == null);
var state_43603__$1 = (function (){var statearr_43609 = state_43603;
(statearr_43609[(13)] = inst_43544__$1);

return statearr_43609;
})();
if(cljs.core.truth_(inst_43545)){
var statearr_43610_43646 = state_43603__$1;
(statearr_43610_43646[(1)] = (5));

} else {
var statearr_43611_43647 = state_43603__$1;
(statearr_43611_43647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (15))){
var state_43603__$1 = state_43603;
var statearr_43615_43648 = state_43603__$1;
(statearr_43615_43648[(2)] = null);

(statearr_43615_43648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (21))){
var state_43603__$1 = state_43603;
var statearr_43616_43649 = state_43603__$1;
(statearr_43616_43649[(2)] = null);

(statearr_43616_43649[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (13))){
var inst_43556 = (state_43603[(8)]);
var inst_43555 = (state_43603[(10)]);
var inst_43558 = (state_43603[(11)]);
var inst_43557 = (state_43603[(12)]);
var inst_43565 = (state_43603[(2)]);
var inst_43566 = (inst_43558 + (1));
var tmp43612 = inst_43556;
var tmp43613 = inst_43555;
var tmp43614 = inst_43557;
var inst_43555__$1 = tmp43613;
var inst_43556__$1 = tmp43612;
var inst_43557__$1 = tmp43614;
var inst_43558__$1 = inst_43566;
var state_43603__$1 = (function (){var statearr_43617 = state_43603;
(statearr_43617[(8)] = inst_43556__$1);

(statearr_43617[(10)] = inst_43555__$1);

(statearr_43617[(11)] = inst_43558__$1);

(statearr_43617[(12)] = inst_43557__$1);

(statearr_43617[(14)] = inst_43565);

return statearr_43617;
})();
var statearr_43618_43650 = state_43603__$1;
(statearr_43618_43650[(2)] = null);

(statearr_43618_43650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (22))){
var state_43603__$1 = state_43603;
var statearr_43619_43651 = state_43603__$1;
(statearr_43619_43651[(2)] = null);

(statearr_43619_43651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (6))){
var inst_43544 = (state_43603[(13)]);
var inst_43553 = f.call(null,inst_43544);
var inst_43554 = cljs.core.seq.call(null,inst_43553);
var inst_43555 = inst_43554;
var inst_43556 = null;
var inst_43557 = (0);
var inst_43558 = (0);
var state_43603__$1 = (function (){var statearr_43620 = state_43603;
(statearr_43620[(8)] = inst_43556);

(statearr_43620[(10)] = inst_43555);

(statearr_43620[(11)] = inst_43558);

(statearr_43620[(12)] = inst_43557);

return statearr_43620;
})();
var statearr_43621_43652 = state_43603__$1;
(statearr_43621_43652[(2)] = null);

(statearr_43621_43652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (17))){
var inst_43569 = (state_43603[(7)]);
var inst_43573 = cljs.core.chunk_first.call(null,inst_43569);
var inst_43574 = cljs.core.chunk_rest.call(null,inst_43569);
var inst_43575 = cljs.core.count.call(null,inst_43573);
var inst_43555 = inst_43574;
var inst_43556 = inst_43573;
var inst_43557 = inst_43575;
var inst_43558 = (0);
var state_43603__$1 = (function (){var statearr_43622 = state_43603;
(statearr_43622[(8)] = inst_43556);

(statearr_43622[(10)] = inst_43555);

(statearr_43622[(11)] = inst_43558);

(statearr_43622[(12)] = inst_43557);

return statearr_43622;
})();
var statearr_43623_43653 = state_43603__$1;
(statearr_43623_43653[(2)] = null);

(statearr_43623_43653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (3))){
var inst_43601 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43603__$1,inst_43601);
} else {
if((state_val_43604 === (12))){
var inst_43589 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43624_43654 = state_43603__$1;
(statearr_43624_43654[(2)] = inst_43589);

(statearr_43624_43654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (2))){
var state_43603__$1 = state_43603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43603__$1,(4),in$);
} else {
if((state_val_43604 === (23))){
var inst_43597 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43625_43655 = state_43603__$1;
(statearr_43625_43655[(2)] = inst_43597);

(statearr_43625_43655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (19))){
var inst_43584 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43626_43656 = state_43603__$1;
(statearr_43626_43656[(2)] = inst_43584);

(statearr_43626_43656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (11))){
var inst_43569 = (state_43603[(7)]);
var inst_43555 = (state_43603[(10)]);
var inst_43569__$1 = cljs.core.seq.call(null,inst_43555);
var state_43603__$1 = (function (){var statearr_43627 = state_43603;
(statearr_43627[(7)] = inst_43569__$1);

return statearr_43627;
})();
if(inst_43569__$1){
var statearr_43628_43657 = state_43603__$1;
(statearr_43628_43657[(1)] = (14));

} else {
var statearr_43629_43658 = state_43603__$1;
(statearr_43629_43658[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (9))){
var inst_43591 = (state_43603[(2)]);
var inst_43592 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43603__$1 = (function (){var statearr_43630 = state_43603;
(statearr_43630[(15)] = inst_43591);

return statearr_43630;
})();
if(cljs.core.truth_(inst_43592)){
var statearr_43631_43659 = state_43603__$1;
(statearr_43631_43659[(1)] = (21));

} else {
var statearr_43632_43660 = state_43603__$1;
(statearr_43632_43660[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (5))){
var inst_43547 = cljs.core.async.close_BANG_.call(null,out);
var state_43603__$1 = state_43603;
var statearr_43633_43661 = state_43603__$1;
(statearr_43633_43661[(2)] = inst_43547);

(statearr_43633_43661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (14))){
var inst_43569 = (state_43603[(7)]);
var inst_43571 = cljs.core.chunked_seq_QMARK_.call(null,inst_43569);
var state_43603__$1 = state_43603;
if(inst_43571){
var statearr_43634_43662 = state_43603__$1;
(statearr_43634_43662[(1)] = (17));

} else {
var statearr_43635_43663 = state_43603__$1;
(statearr_43635_43663[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (16))){
var inst_43587 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43636_43664 = state_43603__$1;
(statearr_43636_43664[(2)] = inst_43587);

(statearr_43636_43664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (10))){
var inst_43556 = (state_43603[(8)]);
var inst_43558 = (state_43603[(11)]);
var inst_43563 = cljs.core._nth.call(null,inst_43556,inst_43558);
var state_43603__$1 = state_43603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43603__$1,(13),out,inst_43563);
} else {
if((state_val_43604 === (18))){
var inst_43569 = (state_43603[(7)]);
var inst_43578 = cljs.core.first.call(null,inst_43569);
var state_43603__$1 = state_43603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43603__$1,(20),out,inst_43578);
} else {
if((state_val_43604 === (8))){
var inst_43558 = (state_43603[(11)]);
var inst_43557 = (state_43603[(12)]);
var inst_43560 = (inst_43558 < inst_43557);
var inst_43561 = inst_43560;
var state_43603__$1 = state_43603;
if(cljs.core.truth_(inst_43561)){
var statearr_43637_43665 = state_43603__$1;
(statearr_43637_43665[(1)] = (10));

} else {
var statearr_43638_43666 = state_43603__$1;
(statearr_43638_43666[(1)] = (11));

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
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_43639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43639[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__);

(statearr_43639[(1)] = (1));

return statearr_43639;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____1 = (function (state_43603){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43640){if((e43640 instanceof Object)){
var ex__32994__auto__ = e43640;
var statearr_43641_43667 = state_43603;
(statearr_43641_43667[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43668 = state_43603;
state_43603 = G__43668;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__ = function(state_43603){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____1.call(this,state_43603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_43642 = f__33158__auto__.call(null);
(statearr_43642[(6)] = c__33157__auto__);

return statearr_43642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43670 = arguments.length;
switch (G__43670) {
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
var G__43673 = arguments.length;
switch (G__43673) {
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
var G__43676 = arguments.length;
switch (G__43676) {
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
var c__33157__auto___43723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43723,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43723,out){
return (function (state_43700){
var state_val_43701 = (state_43700[(1)]);
if((state_val_43701 === (7))){
var inst_43695 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43702_43724 = state_43700__$1;
(statearr_43702_43724[(2)] = inst_43695);

(statearr_43702_43724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (1))){
var inst_43677 = null;
var state_43700__$1 = (function (){var statearr_43703 = state_43700;
(statearr_43703[(7)] = inst_43677);

return statearr_43703;
})();
var statearr_43704_43725 = state_43700__$1;
(statearr_43704_43725[(2)] = null);

(statearr_43704_43725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (4))){
var inst_43680 = (state_43700[(8)]);
var inst_43680__$1 = (state_43700[(2)]);
var inst_43681 = (inst_43680__$1 == null);
var inst_43682 = cljs.core.not.call(null,inst_43681);
var state_43700__$1 = (function (){var statearr_43705 = state_43700;
(statearr_43705[(8)] = inst_43680__$1);

return statearr_43705;
})();
if(inst_43682){
var statearr_43706_43726 = state_43700__$1;
(statearr_43706_43726[(1)] = (5));

} else {
var statearr_43707_43727 = state_43700__$1;
(statearr_43707_43727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (6))){
var state_43700__$1 = state_43700;
var statearr_43708_43728 = state_43700__$1;
(statearr_43708_43728[(2)] = null);

(statearr_43708_43728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (3))){
var inst_43697 = (state_43700[(2)]);
var inst_43698 = cljs.core.async.close_BANG_.call(null,out);
var state_43700__$1 = (function (){var statearr_43709 = state_43700;
(statearr_43709[(9)] = inst_43697);

return statearr_43709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43700__$1,inst_43698);
} else {
if((state_val_43701 === (2))){
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(4),ch);
} else {
if((state_val_43701 === (11))){
var inst_43680 = (state_43700[(8)]);
var inst_43689 = (state_43700[(2)]);
var inst_43677 = inst_43680;
var state_43700__$1 = (function (){var statearr_43710 = state_43700;
(statearr_43710[(7)] = inst_43677);

(statearr_43710[(10)] = inst_43689);

return statearr_43710;
})();
var statearr_43711_43729 = state_43700__$1;
(statearr_43711_43729[(2)] = null);

(statearr_43711_43729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (9))){
var inst_43680 = (state_43700[(8)]);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43700__$1,(11),out,inst_43680);
} else {
if((state_val_43701 === (5))){
var inst_43677 = (state_43700[(7)]);
var inst_43680 = (state_43700[(8)]);
var inst_43684 = cljs.core._EQ_.call(null,inst_43680,inst_43677);
var state_43700__$1 = state_43700;
if(inst_43684){
var statearr_43713_43730 = state_43700__$1;
(statearr_43713_43730[(1)] = (8));

} else {
var statearr_43714_43731 = state_43700__$1;
(statearr_43714_43731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (10))){
var inst_43692 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43715_43732 = state_43700__$1;
(statearr_43715_43732[(2)] = inst_43692);

(statearr_43715_43732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (8))){
var inst_43677 = (state_43700[(7)]);
var tmp43712 = inst_43677;
var inst_43677__$1 = tmp43712;
var state_43700__$1 = (function (){var statearr_43716 = state_43700;
(statearr_43716[(7)] = inst_43677__$1);

return statearr_43716;
})();
var statearr_43717_43733 = state_43700__$1;
(statearr_43717_43733[(2)] = null);

(statearr_43717_43733[(1)] = (2));


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
});})(c__33157__auto___43723,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43723,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43718[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43718[(1)] = (1));

return statearr_43718;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43700){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43719){if((e43719 instanceof Object)){
var ex__32994__auto__ = e43719;
var statearr_43720_43734 = state_43700;
(statearr_43720_43734[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43735 = state_43700;
state_43700 = G__43735;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43723,out))
})();
var state__33159__auto__ = (function (){var statearr_43721 = f__33158__auto__.call(null);
(statearr_43721[(6)] = c__33157__auto___43723);

return statearr_43721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43723,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43737 = arguments.length;
switch (G__43737) {
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
var c__33157__auto___43803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43803,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43803,out){
return (function (state_43775){
var state_val_43776 = (state_43775[(1)]);
if((state_val_43776 === (7))){
var inst_43771 = (state_43775[(2)]);
var state_43775__$1 = state_43775;
var statearr_43777_43804 = state_43775__$1;
(statearr_43777_43804[(2)] = inst_43771);

(statearr_43777_43804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (1))){
var inst_43738 = (new Array(n));
var inst_43739 = inst_43738;
var inst_43740 = (0);
var state_43775__$1 = (function (){var statearr_43778 = state_43775;
(statearr_43778[(7)] = inst_43740);

(statearr_43778[(8)] = inst_43739);

return statearr_43778;
})();
var statearr_43779_43805 = state_43775__$1;
(statearr_43779_43805[(2)] = null);

(statearr_43779_43805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (4))){
var inst_43743 = (state_43775[(9)]);
var inst_43743__$1 = (state_43775[(2)]);
var inst_43744 = (inst_43743__$1 == null);
var inst_43745 = cljs.core.not.call(null,inst_43744);
var state_43775__$1 = (function (){var statearr_43780 = state_43775;
(statearr_43780[(9)] = inst_43743__$1);

return statearr_43780;
})();
if(inst_43745){
var statearr_43781_43806 = state_43775__$1;
(statearr_43781_43806[(1)] = (5));

} else {
var statearr_43782_43807 = state_43775__$1;
(statearr_43782_43807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (15))){
var inst_43765 = (state_43775[(2)]);
var state_43775__$1 = state_43775;
var statearr_43783_43808 = state_43775__$1;
(statearr_43783_43808[(2)] = inst_43765);

(statearr_43783_43808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (13))){
var state_43775__$1 = state_43775;
var statearr_43784_43809 = state_43775__$1;
(statearr_43784_43809[(2)] = null);

(statearr_43784_43809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (6))){
var inst_43740 = (state_43775[(7)]);
var inst_43761 = (inst_43740 > (0));
var state_43775__$1 = state_43775;
if(cljs.core.truth_(inst_43761)){
var statearr_43785_43810 = state_43775__$1;
(statearr_43785_43810[(1)] = (12));

} else {
var statearr_43786_43811 = state_43775__$1;
(statearr_43786_43811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (3))){
var inst_43773 = (state_43775[(2)]);
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43775__$1,inst_43773);
} else {
if((state_val_43776 === (12))){
var inst_43739 = (state_43775[(8)]);
var inst_43763 = cljs.core.vec.call(null,inst_43739);
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43775__$1,(15),out,inst_43763);
} else {
if((state_val_43776 === (2))){
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43775__$1,(4),ch);
} else {
if((state_val_43776 === (11))){
var inst_43755 = (state_43775[(2)]);
var inst_43756 = (new Array(n));
var inst_43739 = inst_43756;
var inst_43740 = (0);
var state_43775__$1 = (function (){var statearr_43787 = state_43775;
(statearr_43787[(7)] = inst_43740);

(statearr_43787[(8)] = inst_43739);

(statearr_43787[(10)] = inst_43755);

return statearr_43787;
})();
var statearr_43788_43812 = state_43775__$1;
(statearr_43788_43812[(2)] = null);

(statearr_43788_43812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (9))){
var inst_43739 = (state_43775[(8)]);
var inst_43753 = cljs.core.vec.call(null,inst_43739);
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43775__$1,(11),out,inst_43753);
} else {
if((state_val_43776 === (5))){
var inst_43740 = (state_43775[(7)]);
var inst_43743 = (state_43775[(9)]);
var inst_43739 = (state_43775[(8)]);
var inst_43748 = (state_43775[(11)]);
var inst_43747 = (inst_43739[inst_43740] = inst_43743);
var inst_43748__$1 = (inst_43740 + (1));
var inst_43749 = (inst_43748__$1 < n);
var state_43775__$1 = (function (){var statearr_43789 = state_43775;
(statearr_43789[(12)] = inst_43747);

(statearr_43789[(11)] = inst_43748__$1);

return statearr_43789;
})();
if(cljs.core.truth_(inst_43749)){
var statearr_43790_43813 = state_43775__$1;
(statearr_43790_43813[(1)] = (8));

} else {
var statearr_43791_43814 = state_43775__$1;
(statearr_43791_43814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (14))){
var inst_43768 = (state_43775[(2)]);
var inst_43769 = cljs.core.async.close_BANG_.call(null,out);
var state_43775__$1 = (function (){var statearr_43793 = state_43775;
(statearr_43793[(13)] = inst_43768);

return statearr_43793;
})();
var statearr_43794_43815 = state_43775__$1;
(statearr_43794_43815[(2)] = inst_43769);

(statearr_43794_43815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (10))){
var inst_43759 = (state_43775[(2)]);
var state_43775__$1 = state_43775;
var statearr_43795_43816 = state_43775__$1;
(statearr_43795_43816[(2)] = inst_43759);

(statearr_43795_43816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (8))){
var inst_43739 = (state_43775[(8)]);
var inst_43748 = (state_43775[(11)]);
var tmp43792 = inst_43739;
var inst_43739__$1 = tmp43792;
var inst_43740 = inst_43748;
var state_43775__$1 = (function (){var statearr_43796 = state_43775;
(statearr_43796[(7)] = inst_43740);

(statearr_43796[(8)] = inst_43739__$1);

return statearr_43796;
})();
var statearr_43797_43817 = state_43775__$1;
(statearr_43797_43817[(2)] = null);

(statearr_43797_43817[(1)] = (2));


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
});})(c__33157__auto___43803,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43803,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43798[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43798[(1)] = (1));

return statearr_43798;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43775){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43799){if((e43799 instanceof Object)){
var ex__32994__auto__ = e43799;
var statearr_43800_43818 = state_43775;
(statearr_43800_43818[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43819 = state_43775;
state_43775 = G__43819;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43803,out))
})();
var state__33159__auto__ = (function (){var statearr_43801 = f__33158__auto__.call(null);
(statearr_43801[(6)] = c__33157__auto___43803);

return statearr_43801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43803,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43821 = arguments.length;
switch (G__43821) {
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
var c__33157__auto___43891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43891,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43891,out){
return (function (state_43863){
var state_val_43864 = (state_43863[(1)]);
if((state_val_43864 === (7))){
var inst_43859 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
var statearr_43865_43892 = state_43863__$1;
(statearr_43865_43892[(2)] = inst_43859);

(statearr_43865_43892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (1))){
var inst_43822 = [];
var inst_43823 = inst_43822;
var inst_43824 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43863__$1 = (function (){var statearr_43866 = state_43863;
(statearr_43866[(7)] = inst_43823);

(statearr_43866[(8)] = inst_43824);

return statearr_43866;
})();
var statearr_43867_43893 = state_43863__$1;
(statearr_43867_43893[(2)] = null);

(statearr_43867_43893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (4))){
var inst_43827 = (state_43863[(9)]);
var inst_43827__$1 = (state_43863[(2)]);
var inst_43828 = (inst_43827__$1 == null);
var inst_43829 = cljs.core.not.call(null,inst_43828);
var state_43863__$1 = (function (){var statearr_43868 = state_43863;
(statearr_43868[(9)] = inst_43827__$1);

return statearr_43868;
})();
if(inst_43829){
var statearr_43869_43894 = state_43863__$1;
(statearr_43869_43894[(1)] = (5));

} else {
var statearr_43870_43895 = state_43863__$1;
(statearr_43870_43895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (15))){
var inst_43853 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
var statearr_43871_43896 = state_43863__$1;
(statearr_43871_43896[(2)] = inst_43853);

(statearr_43871_43896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (13))){
var state_43863__$1 = state_43863;
var statearr_43872_43897 = state_43863__$1;
(statearr_43872_43897[(2)] = null);

(statearr_43872_43897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (6))){
var inst_43823 = (state_43863[(7)]);
var inst_43848 = inst_43823.length;
var inst_43849 = (inst_43848 > (0));
var state_43863__$1 = state_43863;
if(cljs.core.truth_(inst_43849)){
var statearr_43873_43898 = state_43863__$1;
(statearr_43873_43898[(1)] = (12));

} else {
var statearr_43874_43899 = state_43863__$1;
(statearr_43874_43899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (3))){
var inst_43861 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43863__$1,inst_43861);
} else {
if((state_val_43864 === (12))){
var inst_43823 = (state_43863[(7)]);
var inst_43851 = cljs.core.vec.call(null,inst_43823);
var state_43863__$1 = state_43863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43863__$1,(15),out,inst_43851);
} else {
if((state_val_43864 === (2))){
var state_43863__$1 = state_43863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43863__$1,(4),ch);
} else {
if((state_val_43864 === (11))){
var inst_43831 = (state_43863[(10)]);
var inst_43827 = (state_43863[(9)]);
var inst_43841 = (state_43863[(2)]);
var inst_43842 = [];
var inst_43843 = inst_43842.push(inst_43827);
var inst_43823 = inst_43842;
var inst_43824 = inst_43831;
var state_43863__$1 = (function (){var statearr_43875 = state_43863;
(statearr_43875[(7)] = inst_43823);

(statearr_43875[(11)] = inst_43843);

(statearr_43875[(8)] = inst_43824);

(statearr_43875[(12)] = inst_43841);

return statearr_43875;
})();
var statearr_43876_43900 = state_43863__$1;
(statearr_43876_43900[(2)] = null);

(statearr_43876_43900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (9))){
var inst_43823 = (state_43863[(7)]);
var inst_43839 = cljs.core.vec.call(null,inst_43823);
var state_43863__$1 = state_43863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43863__$1,(11),out,inst_43839);
} else {
if((state_val_43864 === (5))){
var inst_43831 = (state_43863[(10)]);
var inst_43827 = (state_43863[(9)]);
var inst_43824 = (state_43863[(8)]);
var inst_43831__$1 = f.call(null,inst_43827);
var inst_43832 = cljs.core._EQ_.call(null,inst_43831__$1,inst_43824);
var inst_43833 = cljs.core.keyword_identical_QMARK_.call(null,inst_43824,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43834 = ((inst_43832) || (inst_43833));
var state_43863__$1 = (function (){var statearr_43877 = state_43863;
(statearr_43877[(10)] = inst_43831__$1);

return statearr_43877;
})();
if(cljs.core.truth_(inst_43834)){
var statearr_43878_43901 = state_43863__$1;
(statearr_43878_43901[(1)] = (8));

} else {
var statearr_43879_43902 = state_43863__$1;
(statearr_43879_43902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (14))){
var inst_43856 = (state_43863[(2)]);
var inst_43857 = cljs.core.async.close_BANG_.call(null,out);
var state_43863__$1 = (function (){var statearr_43881 = state_43863;
(statearr_43881[(13)] = inst_43856);

return statearr_43881;
})();
var statearr_43882_43903 = state_43863__$1;
(statearr_43882_43903[(2)] = inst_43857);

(statearr_43882_43903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (10))){
var inst_43846 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
var statearr_43883_43904 = state_43863__$1;
(statearr_43883_43904[(2)] = inst_43846);

(statearr_43883_43904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (8))){
var inst_43831 = (state_43863[(10)]);
var inst_43827 = (state_43863[(9)]);
var inst_43823 = (state_43863[(7)]);
var inst_43836 = inst_43823.push(inst_43827);
var tmp43880 = inst_43823;
var inst_43823__$1 = tmp43880;
var inst_43824 = inst_43831;
var state_43863__$1 = (function (){var statearr_43884 = state_43863;
(statearr_43884[(7)] = inst_43823__$1);

(statearr_43884[(8)] = inst_43824);

(statearr_43884[(14)] = inst_43836);

return statearr_43884;
})();
var statearr_43885_43905 = state_43863__$1;
(statearr_43885_43905[(2)] = null);

(statearr_43885_43905[(1)] = (2));


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
});})(c__33157__auto___43891,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43891,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43886[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43886[(1)] = (1));

return statearr_43886;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43863){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43887){if((e43887 instanceof Object)){
var ex__32994__auto__ = e43887;
var statearr_43888_43906 = state_43863;
(statearr_43888_43906[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43907 = state_43863;
state_43863 = G__43907;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43891,out))
})();
var state__33159__auto__ = (function (){var statearr_43889 = f__33158__auto__.call(null);
(statearr_43889[(6)] = c__33157__auto___43891);

return statearr_43889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43891,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545903854553
