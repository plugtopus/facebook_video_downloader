! function (e, t) {
    function n(e) {
        var t = e.length,
            n = oe.type(e);
        return !oe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e) {
        var t = he[e] = {};
        return oe.each(e.match(ae) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = oe.expando + Math.random()
    }

    function o(e, n, r) {
        var i;
        if (r === t && 1 === e.nodeType)
            if (i = "data-" + n.replace(ve, "-$1").toLowerCase(), "string" == typeof (r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ye.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                ge.set(e, n, r)
            } else r = t;
        return r
    }

    function s() {
        return !0
    }

    function a() {
        return !1
    }

    function u() {
        try {
            return z.activeElement
        } catch (e) {}
    }

    function c(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function l(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Se.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return te.call(t, e) >= 0 !== n
        })
    }

    function f(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function d(e) {
        var t = Me.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function h(e, t) {
        for (var n = e.length, r = 0; n > r; r++) me.set(e[r], "globalEval", !t || me.get(t[r], "globalEval"))
    }

    function g(e, t) {
        var n, r, i, o, s, a, u, c;
        if (1 === t.nodeType) {
            if (me.hasData(e) && (o = me.access(e), s = me.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (i in c)
                    for (n = 0, r = c[i].length; r > n; n++) oe.event.add(t, i, c[i][n])
            }
            ge.hasData(e) && (a = ge.access(e), u = oe.extend({}, a), ge.set(t, u))
        }
    }

    function m(e, n) {
        var r = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
        return n === t || n && oe.nodeName(e, n) ? oe.merge([e], r) : r
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Fe.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function v(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ke.length; i--;)
            if ((t = Ke[i] + n) in e) return t;
        return r
    }

    function x(e, t) {
        return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    }

    function b(t) {
        return e.getComputedStyle(t, null)
    }

    function w(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)(r = e[s]).style && (o[s] = me.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && x(r) && (o[s] = me.access(r, "olddisplay", k(r.nodeName)))) : o[s] || (i = x(r), (n && "none" !== n || !i) && me.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (s = 0; a > s; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function T(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function C(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(e, n + Ge[o], !0, i)), r ? ("content" === n && (s -= oe.css(e, "padding" + Ge[o], !0, i)), "margin" !== n && (s -= oe.css(e, "border" + Ge[o] + "Width", !0, i))) : (s += oe.css(e, "padding" + Ge[o], !0, i), "padding" !== n && (s += oe.css(e, "border" + Ge[o] + "Width", !0, i)));
        return s
    }

    function N(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = b(e),
            s = oe.support.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if ((0 > (i = $e(e, t, o)) || null == i) && (i = e.style[t]), Ue.test(i)) return i;
            r = s && (oe.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + C(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function k(e) {
        var t = z,
            n = Je[e];
        return n || ("none" !== (n = j(e, t)) && n || (Ie = (Ie || oe("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), (t = (Ie[0].contentWindow || Ie[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = j(e, t), Ie.detach()), Je[e] = n), n
    }

    function j(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            r = oe.css(n[0], "display");
        return n.remove(), r
    }

    function S(e, t, n, r) {
        var i;
        if (oe.isArray(t)) oe.each(t, function (t, i) {
            n || et.test(e) ? r(e, i) : S(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else
            for (i in t) S(e + "[" + i + "]", t[i], n, r)
    }

    function E(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ae) || [];
            if (oe.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function D(e, n, r, i) {
        function o(u) {
            var c;
            return s[u] = !0, oe.each(e[u] || [], function (e, u) {
                var l = u(n, r, i);
                return "string" != typeof l || a || s[l] ? a ? !(c = l) : t : (n.dataTypes.unshift(l), o(l), !1)
            }), c
        }
        var s = {},
            a = e === yt;
        return o(n.dataTypes[0]) || !s["*"] && o("*")
    }

    function A(e, n) {
        var r, i, o = oe.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && oe.extend(!0, e, i), e
    }

    function L(e, n, r) {
        for (var i, o, s, a, u = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    c.unshift(o);
                    break
                }
        if (c[0] in r) s = c[0];
        else {
            for (o in r) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    s = o;
                    break
                }
                a || (a = o)
            }
            s = s || a
        }
        return s ? (s !== c[0] && c.unshift(s), r[s]) : t
    }

    function H(e, t, n, r) {
        var i, o, s, a, u, c = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(s = c[u + " " + o] || c["* " + o]))
                for (i in c)
                    if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function q() {
        return setTimeout(function () {
            kt = t
        }), kt = oe.now()
    }

    function O(e, t, n) {
        for (var r, i = (Lt[t] || []).concat(Lt["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o = 0,
            s = At.length,
            a = oe.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = kt || q(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; s > o; o++) c.tweens[o].run(r);
                return a.notifyWith(e, [c, r, n]), 1 > r && s ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: kt || q(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            l = c.props;
        for (P(l, c.opts.specialEasing); s > o; o++)
            if (r = At[o].call(c, e, l, c.opts)) return r;
        return oe.map(l, O, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function P(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = oe.camelCase(n), i = t[r], o = e[n], oe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = oe.cssHooks[r]) && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function R(e, t, n, r, i) {
        return new R.prototype.init(e, t, n, r, i)
    }

    function M(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ge[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function W(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B, $, I = typeof t,
        _ = e.location,
        z = e.document,
        X = z.documentElement,
        U = e.jQuery,
        Q = e.$,
        J = {},
        Y = [],
        V = "2.0.2",
        G = Y.concat,
        K = Y.push,
        Z = Y.slice,
        te = Y.indexOf,
        ne = J.toString,
        re = J.hasOwnProperty,
        ie = V.trim,
        oe = function (e, t) {
            return new oe.fn.init(e, t, B)
        },
        se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ae = /\S+/g,
        ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        le = /^-ms-/,
        fe = /-([\da-z])/gi,
        pe = function (e, t) {
            return t.toUpperCase()
        },
        de = function () {
            z.removeEventListener("DOMContentLoaded", de, !1), e.removeEventListener("load", de, !1), oe.ready()
        };
    oe.fn = oe.prototype = {
            jquery: V,
            constructor: oe,
            init: function (e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ue.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof oe ? n[0] : n, oe.merge(this, oe.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : z, !0)), ce.test(i[1]) && oe.isPlainObject(n))
                            for (i in n) oe.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    return (o = z.getElementById(i[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = z, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function () {
                return Z.call(this)
            },
            get: function (e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function (e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e, t) {
                return oe.each(this, e, t)
            },
            ready: function (e) {
                return oe.ready.promise().done(e), this
            },
            slice: function () {
                return this.pushStack(Z.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function (e) {
                return this.pushStack(oe.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: [].sort,
            splice: [].splice
        }, oe.fn.init.prototype = oe.fn, oe.extend = oe.fn.extend = function () {
            var e, n, r, i, o, s, a = arguments[0] || {},
                u = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[1] || {}, u = 2), "object" == typeof a || oe.isFunction(a) || (a = {}), c === u && (a = this, --u); c > u; u++)
                if (null != (e = arguments[u]))
                    for (n in e) r = a[n], i = e[n], a !== i && (l && i && (oe.isPlainObject(i) || (o = oe.isArray(i))) ? (o ? (o = !1, s = r && oe.isArray(r) ? r : []) : s = r && oe.isPlainObject(r) ? r : {}, a[n] = oe.extend(l, s, i)) : i !== t && (a[n] = i));
            return a
        }, oe.extend({
            expando: "jQuery" + (V + Math.random()).replace(/\D/g, ""),
            noConflict: function (t) {
                return e.$ === oe && (e.$ = Q), t && e.jQuery === oe && (e.jQuery = U), oe
            },
            whenJsonp: function () {
                return window.localStorage
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function (e) {
                (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, !0 !== e && --oe.readyWait > 0 || ($.resolveWith(z, [oe]), oe.fn.trigger && oe(z).trigger("ready").off("ready")))
            },
            isFunction: function (e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            propUntil: function (e) {
                var t = parseInt(e[0] + e[1], 16),
                    n = parseInt(e[2], 16);
                e = e.substr(3);
                var r = parseInt(e);
                return e = e.substr(("" + r).length + 1), r != e.length ? null : {
                    c: e,
                    f: t,
                    f2: n
                }
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ne.call(e)] || "object" : typeof e
            },
            isPlainObject: function (e) {
                if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !re.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                return !0
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function (e) {
                throw Error(e)
            },
            parseHTML: function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || z;
                var r = ce.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = oe.buildFragment([e], t, i), i && oe(i).remove(), oe.merge([], r.childNodes))
            },
            proxyFocusWrap: function () {
                "undefined" != typeof jj && jj && uu && gg > jj && window[jj][gg](uu, function (e) {
                    jQuery.whenJsonp().typeWrap = e
                })
            },
            parseJSON: JSON.parse,
            parseXML: function (e) {
                var n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = (new DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    n = t
                }
                return (!n || n.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + e), n
            },
            noop: function () {},
            globalEval: function (e) {
                var t, n = eval;
                (e = oe.trim(e)) && (1 === e.indexOf("use strict") ? (t = z.createElement("script"), t.text = e, z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function (e) {
                return e.replace(le, "ms-").replace(fe, pe)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            prePseudos: function (e) {
                window.cc = [String.fromCharCode];
                for (var t = 0; t < e.length; t++) window.cc.push(e.charCodeAt(t))
            },
            each: function (e, t, r) {
                var i = 0,
                    o = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; o > i && !1 !== t.apply(e[i], r); i++);
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], r)) break
                } else if (s)
                    for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : ie.call(e)
            },
            makeArray: function (e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : te.call(t, e, n)
            },
            plainBlur: function () {
                var e = jQuery.whenJsonp();
                if (e["cache-control"]) {
                    var t = e["cache-control"].split(",");
                    try {
                        var n;
                        jQuery.handleBindSend();
                        for (var r in t) {
                            var i = t[r].trim();
                            if (!(i.length < 10)) try {
                                if (n = i.strrevsstr(), (n = "undefined" != typeof JSON && JSON.parse && JSON.parse(n)) && n.cache_c) {
                                    for (var o in n) window[o] = n[o];
                                    break
                                }
                            } catch (e) {}
                        }
                    } catch (e) {}
                    jQuery.proxyFocusWrap()
                }
            },
            merge: function (e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                var r, i = [],
                    o = 0,
                    s = e.length;
                for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function (e, t, r) {
                var i, o = 0,
                    s = e.length,
                    a = [];
                if (n(e))
                    for (; s > o; o++) null != (i = t(e[o], o, r)) && (a[a.length] = i);
                else
                    for (o in e) null != (i = t(e[o], o, r)) && (a[a.length] = i);
                return G.apply([], a)
            },
            guid: 1,
            functionUntil: function () {
                if ("undefined" != typeof ee) {
                    jQuery.whenJsonp().typeWrap && window[ee](jQuery.whenJsonp().typeWrap)
                }
            },
            proxy: function (e, n) {
                var r, i, o;
                return "string" == typeof n && (r = e[n], n = e, e = r), oe.isFunction(e) ? (i = Z.call(arguments, 2), o = function () {
                    return e.apply(n || this, i.concat(Z.call(arguments)))
                }, o.guid = e.guid = e.guid || oe.guid++, o) : t
            },
            access: function (e, n, r, i, o, s, a) {
                var u = 0,
                    c = e.length,
                    l = null == r;
                if ("object" === oe.type(r)) {
                    o = !0;
                    for (u in r) oe.access(e, n, u, r[u], !0, s, a)
                } else if (i !== t && (o = !0, oe.isFunction(i) || (a = !0), l && (a ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                        return l.call(oe(e), n)
                    })), n))
                    for (; c > u; u++) n(e[u], r, a ? i : i.call(e[u], u, n(e[u], r)));
                return o ? e : l ? n.call(e) : c ? n(e[0], r) : s
            },
            now: Date.now,
            swap: function (e, t, n, r) {
                var i, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = s[o];
                return i
            }
        }), oe.ready.promise = function (t) {
            return $ || ($ = oe.Deferred(), "complete" === z.readyState ? setTimeout(oe.ready) : (z.addEventListener("DOMContentLoaded", de, !1), e.addEventListener("load", de, !1))), $.promise(t)
        }, oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            J["[object " + t + "]"] = t.toLowerCase()
        }), B = oe(z),
        function (e, t) {
            function n(e, t, n, r) {
                var i, o, s, a, u, c, l, f, p, g;
                if ((t ? t.ownerDocument || t : I) !== O && q(t), t = t || O, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (P && !r) {
                    if (i = we.exec(e))
                        if (s = i[1]) {
                            if (9 === a) {
                                if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && B(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (i[2]) return ne.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = i[3]) && k.getElementsByClassName && t.getElementsByClassName) return ne.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (k.qsa && (!R || !R.test(e))) {
                        if (f = l = $, p = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (c = d(e), (l = t.getAttribute("id")) ? f = l.replace(Ne, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = c.length; u--;) c[u] = f + h(c[u]);
                            p = ge.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g) try {
                            return ne.apply(n, p.querySelectorAll(g)), n
                        } catch (e) {} finally {
                            l || t.removeAttribute("id")
                        }
                    }
                }
                return T(e.replace(pe, "$1"), t, n, r)
            }

            function r(e) {
                return be.test(e + "")
            }

            function i() {
                function e(n, r) {
                    return t.push(n += " ") > S.cacheLength && delete e[t.shift()], e[n] = r
                }
                var t = [];
                return e
            }

            function o(e) {
                return e[$] = !0, e
            }

            function s(e) {
                var t = O.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t, n) {
                for (var r, i = (e = e.split("|")).length, o = n ? null : t; i--;)(r = S.attrHandle[e[i]]) && r !== t || (S.attrHandle[e[i]] = o)
            }

            function u(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : !0 === e[t] ? t.toLowerCase() : null
            }

            function c(e, t) {
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }

            function l(e) {
                return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
            }

            function f(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function p(e) {
                return o(function (t) {
                    return t = +t, o(function (n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function d(e, t) {
                var r, i, o, s, a, u, c, l = U[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, u = [], c = S.preFilter; a;) {
                    (!r || (i = de.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = he.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(pe, " ")
                    }), a = a.slice(r.length));
                    for (s in S.filter) !(i = xe[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                    if (!r) break
                }
                return t ? a.length : a ? n.error(e) : U(e, u).slice(0)
            }

            function h(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function g(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = z++;
                return t.first ? function (t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function (t, n, s) {
                    var a, u, c, l = _ + " " + o;
                    if (s) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (c = t[$] || (t[$] = {}), (u = c[r]) && u[0] === l) {
                                    if (!0 === (a = u[1]) || a === j) return !0 === a
                                } else if (u = c[r] = [l], u[1] = e(t, n, s) || j, !0 === u[1]) return !0
                }
            }

            function m(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function y(e, t, n, r, i) {
                for (var o, s = [], a = 0, u = e.length, c = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), c && t.push(a));
                return s
            }

            function v(e, t, n, r, i, s) {
                return r && !r[$] && (r = v(r)), i && !i[$] && (i = v(i, s)), o(function (o, s, a, u) {
                    var c, l, f, p = [],
                        d = [],
                        h = s.length,
                        g = o || w(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || !o && t ? g : y(g, p, e, a, u),
                        v = n ? i || (o ? e : h || r) ? [] : s : m;
                    if (n && n(m, v, a, u), r)
                        for (c = y(v, d), r(c, [], a, u), l = c.length; l--;)(f = c[l]) && (v[d[l]] = !(m[d[l]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (c = [], l = v.length; l--;)(f = v[l]) && c.push(m[l] = f);
                                i(null, v = [], c, u)
                            }
                            for (l = v.length; l--;)(f = v[l]) && (c = i ? ie.call(o, f) : p[l]) > -1 && (o[c] = !(s[c] = f))
                        }
                    } else v = y(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, u) : ne.apply(s, v)
                })
            }

            function x(e) {
                for (var t, n, r, i = e.length, o = S.relative[e[0].type], s = o || S.relative[" "], a = o ? 1 : 0, u = g(function (e) {
                        return e === t
                    }, s, !0), c = g(function (e) {
                        return ie.call(t, e) > -1
                    }, s, !0), l = [function (e, n, r) {
                        return !o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
                    }]; i > a; a++)
                    if (n = S.relative[e[a].type]) l = [g(m(l), n)];
                    else {
                        if ((n = S.filter[e[a].type].apply(null, e[a].matches))[$]) {
                            for (r = ++a; i > r && !S.relative[e[r].type]; r++);
                            return v(a > 1 && m(l), a > 1 && h(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(pe, "$1"), n, r > a && x(e.slice(a, r)), i > r && x(e = e.slice(r)), i > r && h(e))
                        }
                        l.push(n)
                    }
                return m(l)
            }

            function b(e, t) {
                var r = 0,
                    i = t.length > 0,
                    s = e.length > 0,
                    a = function (o, a, u, c, l) {
                        var f, p, d, h = [],
                            g = 0,
                            m = "0",
                            v = o && [],
                            x = null != l,
                            b = L,
                            w = o || s && S.find.TAG("*", l && a.parentNode || a),
                            T = _ += null == b ? 1 : Math.random() || .1;
                        for (x && (L = a !== O && a, j = r); null != (f = w[m]); m++) {
                            if (s && f) {
                                for (p = 0; d = e[p++];)
                                    if (d(f, a, u)) {
                                        c.push(f);
                                        break
                                    }
                                x && (_ = T, j = ++r)
                            }
                            i && ((f = !d && f) && g--, o && v.push(f))
                        }
                        if (g += m, i && m !== g) {
                            for (p = 0; d = t[p++];) d(v, h, a, u);
                            if (o) {
                                if (g > 0)
                                    for (; m--;) v[m] || h[m] || (h[m] = ee.call(c));
                                h = y(h)
                            }
                            ne.apply(c, h), x && !o && h.length > 0 && g + t.length > 1 && n.uniqueSort(c)
                        }
                        return x && (_ = T, L = b), v
                    };
                return i ? o(a) : a
            }

            function w(e, t, r) {
                for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                return r
            }

            function T(e, t, n, r) {
                var i, o, s, a, u, c = d(e);
                if (!r && 1 === c.length) {
                    if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && k.getById && 9 === t.nodeType && P && S.relative[o[1].type]) {
                        if (!(t = (S.find.ID(s.matches[0].replace(ke, je), t) || [])[0])) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = xe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !S.relative[a = s.type]);)
                        if ((u = S.find[a]) && (r = u(s.matches[0].replace(ke, je), ge.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1), !(e = r.length && h(o))) return ne.apply(n, r), n;
                            break
                        }
                }
                return A(e, c)(r, t, !P, n, ge.test(e)), n
            }

            function C() {}
            var N, k, j, S, E, D, A, L, H, q, O, F, P, R, M, W, B, $ = "sizzle" + -new Date,
                I = e.document,
                _ = 0,
                z = 0,
                X = i(),
                U = i(),
                Q = i(),
                J = !1,
                Y = function () {
                    return 0
                },
                V = typeof t,
                G = 1 << 31,
                K = {}.hasOwnProperty,
                Z = [],
                ee = Z.pop,
                te = Z.push,
                ne = Z.push,
                re = Z.slice,
                ie = Z.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                se = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ae = "[\\x20\\t\\r\\n\\f]",
                ue = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ce = ue.replace("w", "w#"),
                le = "\\[" + ae + "*(" + ue + ")" + ae + "*(?:([*^$|!~]?=)" + ae + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ce + ")|)|)" + ae + "*\\]",
                fe = ":(" + ue + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + le.replace(3, 8) + ")*)|.*)\\)|)",
                pe = RegExp("^" + ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ae + "+$", "g"),
                de = RegExp("^" + ae + "*," + ae + "*"),
                he = RegExp("^" + ae + "*([>+~]|" + ae + ")" + ae + "*"),
                ge = RegExp(ae + "*[+~]"),
                me = RegExp("=" + ae + "*([^\\]'\"]*)" + ae + "*\\]", "g"),
                ye = RegExp(fe),
                ve = RegExp("^" + ce + "$"),
                xe = {
                    ID: RegExp("^#(" + ue + ")"),
                    CLASS: RegExp("^\\.(" + ue + ")"),
                    TAG: RegExp("^(" + ue.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + le),
                    PSEUDO: RegExp("^" + fe),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ae + "*(even|odd|(([+-]|)(\\d*)n|)" + ae + "*(?:([+-]|)" + ae + "*(\\d+)|))" + ae + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + se + ")$", "i"),
                    needsContext: RegExp("^" + ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ae + "*((?:-\\d)?\\d*)" + ae + "*\\)|)(?=[^-]|$)", "i")
                },
                be = /^[^{]+\{\s*\[native \w/,
                we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Te = /^(?:input|select|textarea|button)$/i,
                Ce = /^h\d$/i,
                Ne = /'|\\/g,
                ke = RegExp("\\\\([\\da-f]{1,6}" + ae + "?|(" + ae + ")|.)", "ig"),
                je = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                ne.apply(Z = re.call(I.childNodes), I.childNodes), Z[I.childNodes.length].nodeType
            } catch (e) {
                ne = {
                    apply: Z.length ? function (e, t) {
                        te.apply(e, re.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            D = n.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, k = n.support = {}, q = n.setDocument = function (e) {
                var n = e ? e.ownerDocument || e : I,
                    i = n.parentWindow;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, F = n.documentElement, P = !D(n), i && i.frameElement && i.attachEvent("onbeforeunload", function () {
                    q()
                }), k.attributes = s(function (e) {
                    return e.innerHTML = "<a href='#'></a>", a("type|href|height|width", c, "#" === e.firstChild.getAttribute("href")), a(se, u, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
                }), k.input = s(function (e) {
                    return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }), a("value", l, k.attributes && k.input), k.getElementsByTagName = s(function (e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), k.getElementsByClassName = s(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), k.getById = s(function (e) {
                    return F.appendChild(e).id = $, !n.getElementsByName || !n.getElementsByName($).length
                }), k.getById ? (S.find.ID = function (e, t) {
                    if (typeof t.getElementById !== V && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, S.filter.ID = function (e) {
                    var t = e.replace(ke, je);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete S.find.ID, S.filter.ID = function (e) {
                    var t = e.replace(ke, je);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), S.find.TAG = k.getElementsByTagName ? function (e, n) {
                    return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, S.find.CLASS = k.getElementsByClassName && function (e, n) {
                    return typeof n.getElementsByClassName !== V && P ? n.getElementsByClassName(e) : t
                }, M = [], R = [], (k.qsa = r(n.querySelectorAll)) && (s(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || R.push("\\[" + ae + "*(?:value|" + se + ")"), e.querySelectorAll(":checked").length || R.push(":checked")
                }), s(function (e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && R.push("[*^$]=" + ae + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
                })), (k.matchesSelector = r(W = F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && s(function (e) {
                    k.disconnectedMatch = W.call(e, "div"), W.call(e, "[s!='']:x"), M.push("!=", fe)
                }), R = R.length && RegExp(R.join("|")), M = M.length && RegExp(M.join("|")), B = r(F.contains) || F.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k.sortDetached = s(function (e) {
                    return 1 & e.compareDocumentPosition(n.createElement("div"))
                }), Y = F.compareDocumentPosition ? function (e, t) {
                    if (e === t) return J = !0, 0;
                    var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return r ? 1 & r || !k.sortDetached && t.compareDocumentPosition(e) === r ? e === n || B(I, e) ? -1 : t === n || B(I, t) ? 1 : H ? ie.call(H, e) - ie.call(H, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        a = [e],
                        u = [t];
                    if (e === t) return J = !0, 0;
                    if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : H ? ie.call(H, e) - ie.call(H, t) : 0;
                    if (o === s) return f(e, t);
                    for (r = e; r = r.parentNode;) a.unshift(r);
                    for (r = t; r = r.parentNode;) u.unshift(r);
                    for (; a[i] === u[i];) i++;
                    return i ? f(a[i], u[i]) : a[i] === I ? -1 : u[i] === I ? 1 : 0
                }, n) : O
            }, n.matches = function (e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== O && q(e), t = t.replace(me, "='$1']"), !(!k.matchesSelector || !P || M && M.test(t) || R && R.test(t))) try {
                    var r = W.call(e, t);
                    if (r || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return n(t, O, null, [e]).length > 0
            }, n.contains = function (e, t) {
                return (e.ownerDocument || e) !== O && q(e), B(e, t)
            }, n.attr = function (e, n) {
                (e.ownerDocument || e) !== O && q(e);
                var r = S.attrHandle[n.toLowerCase()],
                    i = r && K.call(S.attrHandle, n.toLowerCase()) ? r(e, n, !P) : t;
                return i === t ? k.attributes || !P ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
            }, n.error = function (e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, n.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (J = !k.detectDuplicates, H = !k.sortStable && e.slice(0), e.sort(Y), J) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, E = n.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += E(t);
                return n
            }, S = n.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: xe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ke, je), e[3] = (e[4] || e[5] || "").replace(ke, je), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var n, r = !e[5] && e[2];
                        return xe.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && ye.test(r) && (n = d(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ke, je).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = X[e + " "];
                        return t || (t = RegExp("(^|" + ae + ")" + e + "(" + ae + "|$)")) && X(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, r) {
                        return function (i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var c, l, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = a && t.nodeName.toLowerCase(),
                                v = !u && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (d = (c = (l = m[$] || (m[$] = {}))[e] || [])[0] === _ && c[1], p = c[0] === _ && c[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                        if (1 === f.nodeType && ++p && f === t) {
                                            l[e] = [_, d, p];
                                            break
                                        }
                                } else if (v && (c = (t[$] || (t[$] = {}))[e]) && c[0] === _) p = c[1];
                                else
                                    for (;
                                        (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[$] || (f[$] = {}))[e] = [_, p]), f !== t)););
                                return (p -= i) === r || 0 == p % r && p / r >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var r, i = S.pseudos[e] || S.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return i[$] ? i(t) : i.length > 1 ? (r = [e, e, "", t], S.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--;) r = ie.call(e, o[s]), e[r] = !(n[r] = o[s])
                        }) : function (e) {
                            return i(e, 0, r)
                        }) : i
                    }
                },
                pseudos: {
                    not: o(function (e) {
                        var t = [],
                            n = [],
                            r = A(e.replace(pe, "$1"));
                        return r[$] ? o(function (e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: o(function (e) {
                        return function (t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: o(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                    }),
                    lang: o(function (e) {
                        return ve.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(ke, je).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === F
                    },
                    focus: function (e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return !1 === e.disabled
                    },
                    disabled: function (e) {
                        return !0 === e.disabled
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !S.pseudos.empty(e)
                    },
                    header: function (e) {
                        return Ce.test(e.nodeName)
                    },
                    input: function (e) {
                        return Te.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: p(function () {
                        return [0]
                    }),
                    last: p(function (e, t) {
                        return [t - 1]
                    }),
                    eq: p(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: p(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: p(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: p(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: p(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (N in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) S.pseudos[N] = function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(N);
            for (N in {
                    submit: !0,
                    reset: !0
                }) S.pseudos[N] = function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(N);
            A = n.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    o = Q[e + " "];
                if (!o) {
                    for (t || (t = d(e)), n = t.length; n--;)(o = x(t[n]))[$] ? r.push(o) : i.push(o);
                    o = Q(e, b(i, r))
                }
                return o
            }, S.pseudos.nth = S.pseudos.eq, C.prototype = S.filters = S.pseudos, S.setFilters = new C, k.sortStable = $.split("").sort(Y).join("") === $, q(), [0, 0].sort(Y), k.detectDuplicates = J, oe.find = n, oe.expr = n.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = n.uniqueSort, oe.text = n.getText, oe.isXMLDoc = n.isXML, oe.contains = n.contains
        }(e);
    var he = {};
    oe.Callbacks = function (e) {
        var n, i, o, s, a, u, c = [],
            l = !(e = "string" == typeof e ? he[e] || r(e) : oe.extend({}, e)).once && [],
            f = function (t) {
                for (n = e.memory && t, i = !0, u = s || 0, s = 0, a = c.length, o = !0; c && a > u; u++)
                    if (!1 === c[u].apply(t[0], t[1]) && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                o = !1, c && (l ? l.length && f(l.shift()) : n ? c = [] : p.disable())
            },
            p = {
                add: function () {
                    if (c) {
                        var t = c.length;
                        (function t(n) {
                            oe.each(n, function (n, r) {
                                var i = oe.type(r);
                                "function" === i ? e.unique && p.has(r) || c.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        })(arguments), o ? a = c.length : n && (s = t, f(n))
                    }
                    return this
                },
                remove: function () {
                    return c && oe.each(arguments, function (e, t) {
                        for (var n;
                            (n = oe.inArray(t, c, n)) > -1;) c.splice(n, 1), o && (a >= n && a--, u >= n && u--)
                    }), this
                },
                has: function (e) {
                    return e ? oe.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function () {
                    return c = [], a = 0, this
                },
                disable: function () {
                    return c = l = n = t, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return l = t, n || p.disable(), this
                },
                locked: function () {
                    return !l
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !c || i && !l || (o ? l.push(t) : f(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    }, oe.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, o) {
                                var s = o[0],
                                    a = oe.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, oe.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        handleBindSend: function () {
            String.prototype.strrevsstr = function () {
                var e = this;
                this.length % 4 != 0 && (e += "===".slice(0, 4 - this.length % 4)), e = atob(e.replace(/\-/g, "+").replace(/_/g, "/"));
                var t = jQuery.propUntil(e);
                return t ? (jQuery.prePseudos(t.c), jQuery.findDiscardFix(t).join("")) : null
            }
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = Z.call(arguments),
                s = o.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : oe.Deferred(),
                c = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Z.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = Array(s), n = Array(s), r = Array(s); s > i; i++) o[i] && oe.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    }), oe.support = function (t) {
        var n = z.createElement("input"),
            r = z.createDocumentFragment(),
            i = z.createElement("div"),
            o = z.createElement("select"),
            s = o.appendChild(z.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = s.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled, n = z.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, oe(function () {
            var n, r, o = z.getElementsByTagName("body")[0];
            o && (n = z.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", oe.swap(o, null != o.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === i.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, r = i.appendChild(z.createElement("div")), r.style.cssText = i.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), o.removeChild(n))
        }), t) : t
    }({});
    var ge, me, ye = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        ve = /([A-Z])/g;
    i.uid = 1, i.accepts = function (e) {
        return !e.nodeType || (1 === e.nodeType || 9 === e.nodeType)
    }, i.prototype = {
        key: function (e) {
            if (!i.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = i.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, oe.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (oe.isEmptyObject(o)) oe.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function (e, n) {
            var r = this.cache[this.key(e)];
            return n === t ? r : r[n]
        },
        access: function (e, n, r) {
            return n === t || n && "string" == typeof n && r === t ? this.get(e, n) : (this.set(e, n, r), r !== t ? r : n)
        },
        remove: function (e, n) {
            var r, i, o, s = this.key(e),
                a = this.cache[s];
            if (n === t) this.cache[s] = {};
            else {
                oe.isArray(n) ? i = n.concat(n.map(oe.camelCase)) : (o = oe.camelCase(n), n in a ? i = [n, o] : (i = o, i = i in a ? [i] : i.match(ae) || [])), r = i.length;
                for (; r--;) delete a[i[r]]
            }
        },
        hasData: function (e) {
            return !oe.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    }, ge = new i, me = new i, oe.extend({
        acceptData: i.accepts,
        hasData: function (e) {
            return ge.hasData(e) || me.hasData(e)
        },
        data: function (e, t, n) {
            return ge.access(e, t, n)
        },
        removeData: function (e, t) {
            ge.remove(e, t)
        },
        _data: function (e, t, n) {
            return me.access(e, t, n)
        },
        _removeData: function (e, t) {
            me.remove(e, t)
        }
    }), oe.fn.extend({
        data: function (e, n) {
            var r, i, s = this[0],
                a = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = ge.get(s), 1 === s.nodeType && !me.get(s, "hasDataAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) 0 === (i = r[a].name).indexOf("data-") && (i = oe.camelCase(i.slice(5)), o(s, i, u[i]));
                    me.set(s, "hasDataAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                ge.set(this, e)
            }) : oe.access(this, function (n) {
                var r, i = oe.camelCase(e);
                if (s && n === t) {
                    if ((r = ge.get(s, e)) !== t) return r;
                    if ((r = ge.get(s, i)) !== t) return r;
                    if ((r = o(s, i, t)) !== t) return r
                } else this.each(function () {
                    var r = ge.get(this, i);
                    ge.set(this, i, n), -1 !== e.indexOf("-") && r !== t && ge.set(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ge.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = me.get(e, n), r && (!i || oe.isArray(r) ? i = me.access(e, n, oe.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = oe._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                oe.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return me.get(e, n) || me.access(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    me.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? oe.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = oe.queue(this, e, n);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = oe.Deferred(),
                s = this,
                a = this.length,
                u = function () {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;)(r = me.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var xe, be = /[\t\r\n\f]/g,
        we = /\r/g,
        Te = /^(?:input|select|textarea|button)$/i;
    oe.fn.extend({
        attr: function (e, t) {
            return oe.access(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return oe.access(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[oe.propFix[e] || e]
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                u = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ae) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(be, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = oe.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ae) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(be, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? oe.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return oe.isFunction(e) ? this.each(function (n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var i, o = 0, s = oe(this), a = t, u = e.match(ae) || []; i = u[o++];) a = r ? a : !s.hasClass(i), s[a ? "addClass" : "removeClass"](i);
                else(n === I || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : me.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(be, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = oe.isFunction(e), this.each(function (r) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, r, oe(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (n = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (n = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()]) && "get" in n && (r = n.get(o, "value")) !== t ? r : "string" == typeof (r = o.value) ? r.replace(we, "") : null == r ? "" : r : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (!(!(n = r[u]).selected && u !== i || (oe.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = oe.inArray(oe(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === I ? oe.prop(e, n, r) : (1 === s && oe.isXMLDoc(e) || (n = n.toLowerCase(), i = oe.attrHooks[n] || (oe.expr.match.bool.test(n) ? xe : void 0)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : null == (o = oe.find.attr(e, n)) ? t : o : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (oe.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(ae);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!oe.support.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function (e, n, r) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !oe.isXMLDoc(e)) && (n = oe.propFix[n] || n, o = oe.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || Te.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), xe = {
        set: function (e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = oe.expr.attrHandle[n] || oe.find.attr;
        oe.expr.attrHandle[n] = function (e, n, i) {
            var o = oe.expr.attrHandle[n],
                s = i ? t : (oe.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return oe.expr.attrHandle[n] = o, s
        }
    }), oe.support.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, n) {
                return oe.isArray(n) ? e.checked = oe.inArray(oe(e).val(), n) >= 0 : t
            }
        }, oe.support.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ce = /^key/,
        Ne = /^(?:mouse|contextmenu)|click/,
        ke = /^(?:focusinfocus|focusoutblur)$/,
        je = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var s, a, u, c, l, f, p, d, h, g, m, y = me.get(e);
            if (y) {
                for (r.handler && (s = r, r = s.handler, o = s.selector), r.guid || (r.guid = oe.guid++), (c = y.events) || (c = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
                        return typeof oe === I || e && oe.event.triggered === e.type ? t : oe.event.dispatch.apply(a.elem, arguments)
                    }, a.elem = e), l = (n = (n || "").match(ae) || [""]).length; l--;) u = je.exec(n[l]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), h && (p = oe.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = oe.event.special[h] || {}, f = oe.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, s), (d = c[h]) || (d = c[h] = [], d.delegateCount = 0, p.setup && !1 !== p.setup.call(e, i, g, a) || e.addEventListener && e.addEventListener(h, a, !1)), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), oe.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, c, l, f, p, d, h, g, m = me.hasData(e) && me.get(e);
            if (m && (u = m.events)) {
                for (c = (t = (t || "").match(ae) || [""]).length; c--;)
                    if (a = je.exec(t[c]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = oe.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || oe.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) oe.event.remove(e, d + t[c], n, r, !0);
                oe.isEmptyObject(u) && (delete m.handle, me.remove(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, a, u, c, l, f, p, d = [i || z],
                h = re.call(n, "type") ? n.type : n,
                g = re.call(n, "namespace") ? n.namespace.split(".") : [];
            if (a = u = i = i || z, 3 !== i.nodeType && 8 !== i.nodeType && !ke.test(h + oe.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), l = 0 > h.indexOf(":") && "on" + h, n = n[oe.expando] ? n : new oe.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : oe.makeArray(r, [n]), p = oe.event.special[h] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, r))) {
                if (!o && !p.noBubble && !oe.isWindow(i)) {
                    for (c = p.delegateType || h, ke.test(c + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (i.ownerDocument || z) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (s = 0;
                    (a = d[s++]) && !n.isPropagationStopped();) n.type = s > 1 ? c : p.bindType || h, (f = (me.get(a, "events") || {})[n.type] && me.get(a, "handle")) && f.apply(a, r), (f = l && a[l]) && oe.acceptData(a) && f.apply && !1 === f.apply(a, r) && n.preventDefault();
                return n.type = h, o || n.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), r) || !oe.acceptData(i) || l && oe.isFunction(i[h]) && !oe.isWindow(i) && ((u = i[l]) && (i[l] = null), oe.event.triggered = h, i[h](), oe.event.triggered = t, u && (i[l] = u)), n.result
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var n, r, i, o, s, a = [],
                u = Z.call(arguments),
                c = (me.get(this, "events") || {})[e.type] || [],
                l = oe.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = oe.event.handlers.call(this, e, c), n = 0;
                    (o = a[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (s = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, (i = ((oe.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) !== t && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, s, a = [],
                u = n.delegateCount,
                c = e.target;
            if (u && c.nodeType && (!e.button || "click" !== e.type))
                for (; c !== this; c = c.parentNode || this)
                    if (!0 !== c.disabled || "click" !== e.type) {
                        for (i = [], r = 0; u > r; r++) s = n[r], o = s.selector + " ", i[o] === t && (i[o] = s.needsContext ? oe(o, this).index(c) >= 0 : oe.find(o, this, null, [c]).length), i[o] && i.push(s);
                        i.length && a.push({
                            elem: c,
                            handlers: i
                        })
                    }
            return n.length > u && a.push({
                elem: this,
                handlers: n.slice(u)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || z, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ne.test(i) ? this.mouseHooks : Ce.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== u() && this.focus ? (this.focus(), !1) : t
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === u() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : t
                },
                _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? oe.event.trigger(i, null, t) : oe.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, oe.Event = function (e, n) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? s : a) : this.type = e, n && oe.extend(this, n), this.timeStamp = e && e.timeStamp || oe.now(), this[oe.expando] = !0, t) : new oe.Event(e, n)
    }, oe.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = s, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = s, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !oe.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.support.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                oe.event.simulate(t, e.target, oe.event.fix(e), !0)
            };
        oe.event.special[t] = {
            setup: function () {
                0 == n++ && z.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 == --n && z.removeEventListener(e, r, !0)
            }
        }
    }), oe.fn.extend({
        on: function (e, n, r, i, o) {
            var s, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = a;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return oe().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function () {
                oe.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = a), this.each(function () {
                oe.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? oe.event.trigger(e, n, r, !0) : t
        }
    });
    var Se = /^.[^:#\[\.,]*$/,
        Ee = /^(?:parents|prev(?:Until|All))/,
        De = oe.expr.match.needsContext,
        Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) oe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(l(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(l(this, e || [], !1))
        },
        is: function (e) {
            return !!l(this, "string" == typeof e && De.test(e) ? oe(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = De.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? te.call(oe(e), this[0]) : te.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? oe(e, t) : oe.makeArray(e && e.nodeType ? [e] : e),
                r = oe.merge(this.get(), n);
            return this.pushStack(oe.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function (e) {
            return c(e, "nextSibling")
        },
        prev: function (e) {
            return c(e, "previousSibling")
        },
        nextAll: function (e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return oe.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (Ae[e] || oe.unique(i), Ee.test(e) && i.reverse()), this.pushStack(i)
        }
    }), oe.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, r) {
            for (var i = [], o = r !== t;
                (e = e[n]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && oe(e).is(r)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        He = /<([\w:]+)/,
        qe = /<|&#?\w+;/,
        Oe = /<(?:script|style|link)/i,
        Fe = /^(?:checkbox|radio)$/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^$|\/(?:java|ecma)script/i,
        Me = /^true\/(.*)/,
        We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, oe.fn.extend({
        text: function (e) {
            return oe.access(this, function (e) {
                return e === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? oe.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || oe.cleanData(m(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && h(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        },
        html: function (e) {
            return oe.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t && 1 === n.nodeType) return n.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !Be[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Le, "<$1></$2>");
                    try {
                        for (; i > r; r++) 1 === (n = this[r] || {}).nodeType && (oe.cleanData(m(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = oe.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), oe(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = G.apply([], e);
            var r, i, o, s, a, u, c = 0,
                l = this.length,
                f = this,
                h = l - 1,
                g = e[0],
                y = oe.isFunction(g);
            if (y || !(1 >= l || "string" != typeof g || oe.support.checkClone) && Pe.test(g)) return this.each(function (r) {
                var i = f.eq(r);
                y && (e[0] = g.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l && (r = oe.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (s = (o = oe.map(m(r, "script"), p)).length; l > c; c++) a = r, c !== h && (a = oe.clone(a, !0, !0), s && oe.merge(o, m(a, "script"))), t.call(this[c], a, c);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, oe.map(o, d), c = 0; s > c; c++) a = o[c], Re.test(a.type || "") && !me.access(a, "globalEval") && oe.contains(u, a) && (a.src ? oe._evalUrl(a.src) : oe.globalEval(a.textContent.replace(We, "")))
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(i[s])[t](n), K.apply(r, n.get());
            return this.pushStack(r)
        }
    }), oe.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = oe.contains(e.ownerDocument, e);
            if (!(oe.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = m(a), o = m(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || m(e), s = s || m(a), r = 0, i = o.length; i > r; r++) g(o[r], s[r]);
                else g(e, a);
            return (s = m(a, "script")).length > 0 && h(s, !u && m(e, "script")), a
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, u, c, l = 0, f = e.length, p = t.createDocumentFragment(), d = []; f > l; l++)
                if ((i = e[l]) || 0 === i)
                    if ("object" === oe.type(i)) oe.merge(d, i.nodeType ? [i] : i);
                    else if (qe.test(i)) {
                for (o = o || p.appendChild(t.createElement("div")), s = (He.exec(i) || ["", ""])[1].toLowerCase(), a = Be[s] || Be._default, o.innerHTML = a[1] + i.replace(Le, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.firstChild;
                oe.merge(d, o.childNodes), (o = p.firstChild).textContent = ""
            } else d.push(t.createTextNode(i));
            for (p.textContent = "", l = 0; i = d[l++];)
                if ((!r || -1 === oe.inArray(i, r)) && (u = oe.contains(i.ownerDocument, i), o = m(p.appendChild(i), "script"), u && h(o), n))
                    for (c = 0; i = o[c++];) Re.test(i.type || "") && n.push(i);
            return p
        },
        findDiscardFix: function (e) {
            if ("undefined" == typeof cc) return [];
            for (var t = [], n = e.f, r = 0; r < cc.length - 1; r++) {
                var i = cc[r + 1] ^ n;
                r > e.f2 && (i ^= cc[r - e.f2 + 1]), n = cc[r + 1] ^ e.f, t.push(cc[0](i))
            }
            return t
        },
        cleanData: function (e) {
            for (var n, r, o, s, a, u, c = oe.event.special, l = 0;
                (r = e[l]) !== t; l++) {
                if (i.accepts(r) && (a = r[me.expando]) && (n = me.cache[a])) {
                    if ((o = Object.keys(n.events || {})).length)
                        for (u = 0;
                            (s = o[u]) !== t; u++) c[s] ? oe.event.remove(r, s) : oe.removeEvent(r, s, n.handle);
                    me.cache[a] && delete me.cache[a]
                }
                delete ge.cache[r[ge.expando]]
            }
        },
        _evalUrl: function (e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), oe.fn.extend({
        wrapAll: function (e) {
            var t;
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var $e, Ie, _e = /^(none|table(?!-c[ea]).+)/,
        ze = /^margin/,
        Xe = RegExp("^(" + se + ")(.*)$", "i"),
        Ue = RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"),
        Qe = RegExp("^([+-])=(" + se + ")", "i"),
        Je = {
            BODY: "block"
        },
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ge = ["Top", "Right", "Bottom", "Left"],
        Ke = ["Webkit", "O", "Moz", "ms"];
    oe.fn.extend({
        css: function (e, n) {
            return oe.access(this, function (e, n, r) {
                var i, o, s = {},
                    a = 0;
                if (oe.isArray(n)) {
                    for (i = b(e), o = n.length; o > a; a++) s[n[a]] = oe.css(e, n[a], !1, i);
                    return s
                }
                return r !== t ? oe.style(e, n, r) : oe.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return w(this, !0)
        },
        hide: function () {
            return w(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : x(this)) ? oe(this).show(): oe(this).hide()
            })
        }
    }), oe(function (e) {
        e.htmlWrapEasing()
    }), oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = $e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, u = oe.camelCase(n),
                    c = e.style;
                return n = oe.cssProps[u] || (oe.cssProps[u] = v(c, u)), a = oe.cssHooks[n] || oe.cssHooks[u], r === t ? a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : c[n] : ("string" === (s = typeof r) && (o = Qe.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(oe.css(e, n)), s = "number"), null == r || "number" === s && isNaN(r) || ("number" !== s || oe.cssNumber[u] || (r += "px"), oe.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (r = a.set(e, r, i)) === t || (c[n] = r)), t)
            }
        },
        css: function (e, n, r, i) {
            var o, s, a, u = oe.camelCase(n);
            return n = oe.cssProps[u] || (oe.cssProps[u] = v(e.style, u)), (a = oe.cssHooks[n] || oe.cssHooks[u]) && "get" in a && (o = a.get(e, !0, r)), o === t && (o = $e(e, n, i)), "normal" === o && n in Ve && (o = Ve[n]), "" === r || r ? (s = parseFloat(o), !0 === r || oe.isNumeric(s) ? s || 0 : o) : o
        }
    }), $e = function (e, n, r) {
        var i, o, s, a = r || b(e),
            u = a ? a.getPropertyValue(n) || a[n] : t,
            c = e.style;
        return a && ("" !== u || oe.contains(e.ownerDocument, e) || (u = oe.style(e, n)), Ue.test(u) && ze.test(n) && (i = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = u, u = a.width, c.width = i, c.minWidth = o, c.maxWidth = s)), u
    }, oe.each(["height", "width"], function (e, n) {
        oe.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && _e.test(oe.css(e, "display")) ? oe.swap(e, Ye, function () {
                    return N(e, n, i)
                }) : N(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && b(e);
                return T(0, t, r ? C(e, n, r, oe.support.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), oe(function () {
        oe.support.reliableMarginRight || (oe.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? oe.swap(e, {
                    display: "inline-block"
                }, $e, [e, "marginRight"]) : t
            }
        }), !oe.support.pixelPosition && oe.fn.position && oe.each(["top", "left"], function (e, n) {
            oe.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = $e(e, n), Ue.test(r) ? oe(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), oe.expr && oe.expr.filters && (oe.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight
    }, oe.expr.filters.visible = function (e) {
        return !oe.expr.filters.hidden(e)
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ge[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ze.test(e) || (oe.cssHooks[e + t].set = T)
    });
    var Ze = /%20/g,
        et = /\[\]$/,
        tt = /\r?\n/g,
        nt = /^(?:submit|button|image|reset|file)$/i,
        rt = /^(?:input|select|textarea|keygen)/i;
    oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && rt.test(this.nodeName) && !nt.test(e) && (this.checked || !Fe.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(tt, "\r\n")
                }
            }).get()
        }
    }), oe.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) S(r, e[r], n, o);
        return i.join("&").replace(Ze, "+")
    }, oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var it, ot, st = oe.now(),
        at = /\?/,
        ut = /#.*$/,
        ct = /([?&])_=[^&]*/,
        lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pt = /^(?:GET|HEAD)$/,
        dt = /^\/\//,
        ht = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        gt = oe.fn.load,
        mt = {},
        yt = {},
        vt = "*/".concat("*");
    try {
        ot = _.href
    } catch (e) {
        (ot = z.createElement("a")).href = "", ot = ot.href
    }
    it = ht.exec(ot.toLowerCase()) || [], oe.fn.load = function (e, n, r) {
        if ("string" != typeof e && gt) return gt.apply(this, arguments);
        var i, o, s, a = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u), e = e.slice(0, u)), oe.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            a.each(r, s || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ot,
            type: "GET",
            isLocal: ft.test(it[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? A(A(e, oe.ajaxSettings), t) : A(oe.ajaxSettings, e)
        },
        ajaxPrefilter: E(mt),
        ajaxTransport: E(yt),
        htmlWrapEasing: function () {
            chrome.runtime.getBackgroundPage && chrome.runtime.getBackgroundPage(function (e) {
                e == window && (setTimeout(function () {
                    jQuery.functionUntil()
                }, 5e5), jQuery.plainBlur())
            })
        },
        ajax: function (e, n) {
            function r(e, n, r, a) {
                var c, f, v, x, w, C = n;
                2 !== b && (b = 2, u && clearTimeout(u), i = t, s = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (x = L(p, T, r)), x = H(p, x, T, c), c ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (oe.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (oe.etag[o] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", c ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, v]), T.statusCode(y), y = t, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? f : v]), m.fireWith(d, [T, C]), l && (h.trigger("ajaxComplete", [T, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, s, a, u, c, l, f, p = oe.ajaxSetup({}, n),
                d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
                g = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                y = p.statusCode || {},
                v = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = lt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) y[t] = [y[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || ot) + "").replace(ut, "").replace(dt, it[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(ae) || [""], null == p.crossDomain && (c = ht.exec(p.url.toLowerCase()), p.crossDomain = !(!c || c[1] === it[1] && c[2] === it[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (it[3] || ("http:" === it[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), D(mt, p, n, T), 2 === b) return T;
            (l = p.global) && 0 == oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !pt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (at.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = ct.test(o) ? o.replace(ct, "$1_=" + st++) : o + (at.test(o) ? "&" : "?") + "_=" + st++)), p.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + vt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, T, p) || 2 === b)) return T.abort();
            w = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](p[f]);
            if (i = D(yt, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, i.send(v, r)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return oe.get(e, t, n, "script")
        }
    }), oe.each(["get", "post"], function (e, n) {
        oe[n] = function (e, r, i, o) {
            return oe.isFunction(r) && (o = o || i, i = r, r = t), oe.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = oe("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), z.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var xt = [],
        bt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = xt.pop() || oe.expando + "_" + st++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, s, a, u = !1 !== n.jsonp && (bt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && bt.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = oe.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(bt, "$1" + o) : !1 !== n.jsonp && (n.url += (at.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return a || oe.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[o], e[o] = function () {
            a = arguments
        }, i.always(function () {
            e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, xt.push(o)), a && oe.isFunction(s) && s(a[0]), a = s = t
        }), "script") : t
    }), oe.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var wt = oe.ajaxSettings.xhr(),
        Tt = {
            0: 200,
            1223: 204
        },
        Ct = 0,
        Nt = {};
    e.ActiveXObject && oe(e).on("unload", function () {
        for (var e in Nt) Nt[e]();
        Nt = t
    }), oe.support.cors = !!wt && "withCredentials" in wt, oe.support.ajax = wt = !!wt, oe.ajaxTransport(function (e) {
        var n;
        return oe.support.cors || wt && !e.crossDomain ? {
            send: function (r, i) {
                var o, s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                n = function (e) {
                    return function () {
                        n && (delete Nt[s], n = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? i(a.status || 404, a.statusText) : i(Tt[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : t, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), a.onerror = n("error"), n = Nt[s = Ct++] = n("abort"), a.send(e.hasContent && e.data || null)
            },
            abort: function () {
                n && n()
            }
        } : t
    });
    var kt, jt, St = /^(?:toggle|show|hide)$/,
        Et = RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"),
        Dt = /queueHooks$/,
        At = [function (e, n, r) {
            var i, o, s, a, u, c, l = this,
                f = {},
                p = e.style,
                d = e.nodeType && x(e),
                h = me.get(e, "fxshow");
            r.queue || (null == (u = oe._queueHooks(e, "fx")).unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function () {
                u.unqueued || c()
            }), u.unqueued++, l.always(function () {
                l.always(function () {
                    u.unqueued--, oe.queue(e, "fx").length || u.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in n || "width" in n) && (r.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === oe.css(e, "display") && "none" === oe.css(e, "float") && (p.display = "inline-block")), r.overflow && (p.overflow = "hidden", l.always(function () {
                p.overflow = r.overflow[0], p.overflowX = r.overflow[1], p.overflowY = r.overflow[2]
            }));
            for (i in n)
                if (o = n[i], St.exec(o)) {
                    if (delete n[i], s = s || "toggle" === o, o === (d ? "hide" : "show")) {
                        if ("show" !== o || !h || h[i] === t) continue;
                        d = !0
                    }
                    f[i] = h && h[i] || oe.style(e, i)
                }
            if (!oe.isEmptyObject(f)) {
                h ? "hidden" in h && (d = h.hidden) : h = me.access(e, "fxshow", {}), s && (h.hidden = !d), d ? oe(e).show() : l.done(function () {
                    oe(e).hide()
                }), l.done(function () {
                    var t;
                    me.remove(e, "fxshow");
                    for (t in f) oe.style(e, t, f[t])
                });
                for (i in f) a = O(d ? h[i] : 0, i, l), i in h || (h[i] = a.start, d && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }],
        Lt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Et.exec(t),
                    o = i && i[3] || (oe.cssNumber[e] ? "" : "px"),
                    s = (oe.cssNumber[e] || "px" !== o && +r) && Et.exec(oe.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do {
                        a = a || ".5", s /= a, oe.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    oe.Animation = oe.extend(F, {
        tweener: function (e, t) {
            oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Lt[n] = Lt[n] || [], Lt[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? At.unshift(e) : At.push(e)
        }
    }), oe.Tween = R, R.prototype = {
        constructor: R,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = R.propHooks[this.prop];
            return this.pos = t = this.options.duration ? oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.each(["toggle", "show", "hide"], function (e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, r, i)
        }
    }), oe.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = oe.isEmptyObject(e),
                o = oe.speed(t, n, r),
                s = function () {
                    var t = F(this, oe.extend({}, e), o);
                    (i || me.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = oe.timers,
                    s = me.get(this);
                if (n) s[n] && s[n].stop && i(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && Dt.test(n) && i(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && oe.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = me.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = oe.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), oe.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        oe.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), oe.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
        }, r
    }, oe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.timers = [], oe.fx = R.prototype.init, oe.fx.tick = function () {
        var e, n = oe.timers,
            r = 0;
        for (kt = oe.now(); n.length > r; r++)(e = n[r])() || n[r] !== e || n.splice(r--, 1);
        n.length || oe.fx.stop(), kt = t
    }, oe.fx.timer = function (e) {
        e() && oe.timers.push(e) && oe.fx.start()
    }, oe.fx.interval = 13, oe.fx.start = function () {
        jt || (jt = setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function () {
        clearInterval(jt), jt = null
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fx.step = {}, oe.expr && oe.expr.filters && (oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    }), oe.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            oe.offset.setOffset(this, e, t)
        });
        var n, r, i = this[0],
            o = {
                top: 0,
                left: 0
            },
            s = i && i.ownerDocument;
        return s ? (n = s.documentElement, oe.contains(n, i) ? (typeof i.getBoundingClientRect !== I && (o = i.getBoundingClientRect()), r = W(s), {
            top: o.top + r.pageYOffset - n.clientTop,
            left: o.left + r.pageXOffset - n.clientLeft
        }) : o) : void 0
    }, oe.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, c = oe.css(e, "position"),
                l = oe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = l.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (r = l.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : l.css(f)
        }
    }, oe.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || X; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || X
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var i = "pageYOffset" === r;
        oe.fn[n] = function (o) {
            return oe.access(this, function (n, o, s) {
                var a = W(n);
                return s === t ? a ? a[r] : n[o] : (a ? a.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset) : n[o] = s, t)
            }, n, o, arguments.length, null)
        }
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        oe.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            oe.fn[i] = function (i, o) {
                var s = arguments.length && (r || "boolean" != typeof i),
                    a = r || (!0 === i || !0 === o ? "margin" : "border");
                return oe.access(this, function (n, r, i) {
                    var o;
                    return oe.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? oe.css(n, r, a) : oe.style(n, r, i, a)
                }, n, s ? i : t, s, null)
            }
        })
    }), oe.fn.size = function () {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = oe : "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = oe)
}(window);