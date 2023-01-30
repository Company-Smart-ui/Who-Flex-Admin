/****************************************************************************************************
 * @name:       LivIconsEvo.tools.js - the third party libraries for LivIcons (Live Icons) Evolution
 * @version:    2.8.XXX (XXX is a total number of icons)
 * @URL:        https://livicons.com
 *
 * Content:     Snap.svg 0.5.1
 *              GreenSock TweenMax 2.1.2
 *              GreenSock DrawSVGPlugin 0.2.1
 *              GreenSock MorphSVGPlugin 0.8.11
 *              verge 1.10.2+201705300050
 *
 * @licenses:   see details in the comments for each library
 *****************************************************************************************************/

// Snap.svg 0.5.1
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-07

! function(a) {
    var b, c, d = "0.5.0",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = /\s*,\s*/,
        h = "*",
        i = function(a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function() {
            for (var a = 0, b = this.length; b > a; a++)
                if ("undefined" != typeof this[a]) return this[a]
        },
        l = function() {
            for (var a = this.length; --a;)
                if ("undefined" != typeof this[a]) return this[a]
        },
        m = Object.prototype.toString,
        n = String,
        o = Array.isArray || function(a) {
            return a instanceof Array || "[object Array]" == m.call(a)
        };
    eve = function(a, d) {
        var e, f = c,
            g = Array.prototype.slice.call(arguments, 2),
            h = eve.listeners(a),
            j = 0,
            m = [],
            n = {},
            o = [],
            p = b;
        o.firstDefined = k, o.lastDefined = l, b = a, c = 0;
        for (var q = 0, r = h.length; r > q; q++) "zIndex" in h[q] && (m.push(h[q].zIndex), h[q].zIndex < 0 && (n[h[q].zIndex] = h[q]));
        for (m.sort(i); m[j] < 0;)
            if (e = n[m[j++]], o.push(e.apply(d, g)), c) return c = f, o;
        for (q = 0; r > q; q++)
            if (e = h[q], "zIndex" in e)
                if (e.zIndex == m[j]) {
                    if (o.push(e.apply(d, g)), c) break;
                    do
                        if (j++, e = n[m[j]], e && o.push(e.apply(d, g)), c) break; while (e)
                } else n[e.zIndex] = e;
        else if (o.push(e.apply(d, g)), c) break;
        return c = f, b = p, o
    }, eve._events = j, eve.listeners = function(a) {
        var b, c, d, e, g, i, k, l, m = o(a) ? a : a.split(f),
            n = j,
            p = [n],
            q = [];
        for (e = 0, g = m.length; g > e; e++) {
            for (l = [], i = 0, k = p.length; k > i; i++)
                for (n = p[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), q = q.concat(b.f || []));
            p = l
        }
        return q
    }, eve.separator = function(a) {
        a ? (a = n(a).replace(/(?=[\.\^\]\[\-])/g, "\\"), a = "[" + a + "]", f = new RegExp(a)) : f = /[\.\/]/
    }, eve.on = function(a, b) {
        if ("function" != typeof b) return function() {};
        for (var c = o(a) ? o(a[0]) ? a : [a] : n(a).split(g), d = 0, e = c.length; e > d; d++) ! function(a) {
            for (var c, d = o(a) ? a : n(a).split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
                n: {}
            });
            for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
                if (e.f[g] == b) {
                    c = !0;
                    break
                }!c && e.f.push(b)
        }(c[d]);
        return function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, eve.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            eve.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, eve.stop = function() {
        c = 1
    }, eve.nt = function(a) {
        var c = o(b) ? b.join(".") : b;
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(c) : c
    }, eve.nts = function() {
        return o(b) ? b : b.split(f)
    }, eve.off = eve.unbind = function(a, b) {
        if (!a) return void(eve._events = j = {
            n: {}
        });
        var c = o(a) ? o(a[0]) ? a : [a] : n(a).split(g);
        if (c.length > 1)
            for (var d = 0, i = c.length; i > d; d++) eve.off(c[d], b);
        else {
            c = o(a) ? a : n(a).split(f);
            var k, l, m, d, i, p, q, r = [j],
                s = [];
            for (d = 0, i = c.length; i > d; d++)
                for (p = 0; p < r.length; p += m.length - 2) {
                    if (m = [p, 1], k = r[p].n, c[d] != h) k[c[d]] && (m.push(k[c[d]]), s.unshift({
                        n: k,
                        name: c[d]
                    }));
                    else
                        for (l in k) k[e](l) && (m.push(k[l]), s.unshift({
                            n: k,
                            name: l
                        }));
                    r.splice.apply(r, m)
                }
            for (d = 0, i = r.length; i > d; d++)
                for (k = r[d]; k.n;) {
                    if (b) {
                        if (k.f) {
                            for (p = 0, q = k.f.length; q > p; p++)
                                if (k.f[p] == b) {
                                    k.f.splice(p, 1);
                                    break
                                }!k.f.length && delete k.f
                        }
                        for (l in k.n)
                            if (k.n[e](l) && k.n[l].f) {
                                var t = k.n[l].f;
                                for (p = 0, q = t.length; q > p; p++)
                                    if (t[p] == b) {
                                        t.splice(p, 1);
                                        break
                                    }!t.length && delete k.n[l].f
                            }
                    } else {
                        delete k.f;
                        for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
                    }
                    k = k.n
                }
            a: for (d = 0, i = s.length; i > d; d++) {
                k = s[d];
                for (l in k.n[k.name].f) continue a;
                for (l in k.n[k.name].n) continue a;
                delete k.n[k.name]
            }
        }
    }, eve.once = function(a, b) {
        var c = function() {
            return eve.off(a, c), b.apply(this, arguments)
        };
        return eve.on(a, c)
    }, eve.version = d, eve.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function() {
        return eve
    }) : a.eve = eve
}(this),
function(a, b) {
    if ("function" == typeof define && define.amd) define(["eve"], function(c) {
        return b(a, c)
    });
    else if ("undefined" != typeof exports) {
        var c = require("eve");
        module.exports = b(a, c)
    } else b(a, a.eve)
}(window || this, function(a, b) {
    var c = function(b) {
            var c, d = {},
                e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
                    return setTimeout(a, 16, (new Date).getTime()), !0
                },
                f = Array.isArray || function(a) {
                    return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
                },
                g = 0,
                h = "M" + (+new Date).toString(36),
                i = function() {
                    return h + (g++).toString(36)
                },
                j = Date.now || function() {
                    return +new Date
                },
                k = function(a) {
                    var b = this;
                    if (null == a) return b.s;
                    var c = b.s - a;
                    b.b += b.dur * c, b.B += b.dur * c, b.s = a
                },
                l = function(a) {
                    var b = this;
                    return null == a ? b.spd : void(b.spd = a)
                },
                m = function(a) {
                    var b = this;
                    return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
                },
                n = function() {
                    var a = this;
                    delete d[a.id], a.update(), b("mina.stop." + a.id, a)
                },
                o = function() {
                    var a = this;
                    a.pdif || (delete d[a.id], a.update(), a.pdif = a.get() - a.b)
                },
                p = function() {
                    var a = this;
                    a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, d[a.id] = a, r())
                },
                q = function() {
                    var a, b = this;
                    if (f(b.start)) {
                        a = [];
                        for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                    } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                    b.set(a)
                },
                r = function(a) {
                    if (!a) return void(c || (c = e(r)));
                    var f = 0;
                    for (var g in d)
                        if (d.hasOwnProperty(g)) {
                            var h = d[g],
                                i = h.get();
                            f++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete d[g], h.s = 1, f--, function(a) {
                                setTimeout(function() {
                                    b("mina.finish." + a.id, a)
                                })
                            }(h)), h.update()
                        }
                    c = f ? e(r) : !1
                },
                s = function(a, b, c, e, f, g, h) {
                    var j = {
                        id: i(),
                        start: a,
                        end: b,
                        b: c,
                        s: 0,
                        dur: e - c,
                        spd: 1,
                        get: f,
                        set: g,
                        easing: h || s.linear,
                        status: k,
                        speed: l,
                        duration: m,
                        stop: n,
                        pause: o,
                        resume: p,
                        update: q
                    };
                    d[j.id] = j;
                    var t, u = 0;
                    for (t in d)
                        if (d.hasOwnProperty(t) && (u++, 2 == u)) break;
                    return 1 == u && r(), j
                };
            return s.time = j, s.getById = function(a) {
                return d[a] || null
            }, s.linear = function(a) {
                return a
            }, s.easeout = function(a) {
                return Math.pow(a, 1.7)
            }, s.easein = function(a) {
                return Math.pow(a, .48)
            }, s.easeinout = function(a) {
                if (1 == a) return 1;
                if (0 == a) return 0;
                var b = .48 - a / 1.04,
                    c = Math.sqrt(.1734 + b * b),
                    d = c - b,
                    e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                    f = -c - b,
                    g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                    h = e + g + .5;
                return 3 * (1 - h) * h * h + h * h * h
            }, s.backin = function(a) {
                if (1 == a) return 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            }, s.backout = function(a) {
                if (0 == a) return 0;
                a -= 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a + b) + 1
            }, s.elastic = function(a) {
                return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * (2 * Math.PI) / .3) + 1
            }, s.bounce = function(a) {
                var b, c = 7.5625,
                    d = 2.75;
                return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
            }, a.mina = s, s
        }("undefined" == typeof b ? function() {} : b),
        d = function(a) {
            function c(a, b) {
                if (a) {
                    if (a.nodeType) return w(a);
                    if (e(a, "array") && c.set) return c.set.apply(c, a);
                    if (a instanceof s) return a;
                    if (null == b) try {
                        return a = y.doc.querySelector(String(a)), w(a)
                    } catch (d) {
                        return null
                    }
                }
                return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b)
            }

            function d(a, b) {
                if (b) {
                    if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
                    if (1 == a.nodeType) {
                        for (var c in b)
                            if (b[z](c)) {
                                var e = A(b[c]);
                                e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c)
                            }
                    } else "text" in b && (a.nodeValue = b.text)
                } else a = y.doc.createElementNS(U, a);
                return a
            }

            function e(a, b) {
                return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || J.call(a).slice(8, -1).toLowerCase() == b
            }

            function f(a) {
                if ("function" == typeof a || Object(a) !== a) return a;
                var b = new a.constructor;
                for (var c in a) a[z](c) && (b[c] = f(a[c]));
                return b
            }

            function h(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function i(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        f = e.join("␀"),
                        g = d.cache = d.cache || {},
                        i = d.count = d.count || [];
                    return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }
                return d
            }

            function j(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c,
                        h = b - d;
                    return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0
                }
                return j(a, b, e, f) - j(c, d, e, f)
            }

            function k(a) {
                return a % 360 * H / 180
            }

            function l(a) {
                return 180 * a / H % 360
            }

            function m(a) {
                var b = [];
                return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
                    return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push(["m", 1, 0, D.tan(k(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, D.tan(k(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a
                }), b
            }

            function n(a, b) {
                var d = aa(a),
                    e = new c.Matrix;
                if (d)
                    for (var f = 0, g = d.length; g > f; f++) {
                        var h, i, j, k, l, m = d[f],
                            n = m.length,
                            o = A(m[0]).toLowerCase(),
                            p = m[0] != o,
                            q = p ? e.invert() : 0;
                        "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
                    }
                return e
            }

            function o(a) {
                var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
                    d = b.select("defs"),
                    e = null == d ? !1 : d.node;
                return e || (e = u("defs", b.node).node), e
            }

            function p(a) {
                return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg")
            }

            function q(a, b, c) {
                function e(a) {
                    if (null == a) return I;
                    if (a == +a) return a;
                    d(j, {
                        width: a
                    });
                    try {
                        return j.getBBox().width
                    } catch (b) {
                        return 0
                    }
                }

                function f(a) {
                    if (null == a) return I;
                    if (a == +a) return a;
                    d(j, {
                        height: a
                    });
                    try {
                        return j.getBBox().height
                    } catch (b) {
                        return 0
                    }
                }

                function g(d, e) {
                    null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
                }
                var h = p(a).node,
                    i = {},
                    j = h.querySelector(".svg---mgr");
                switch (j || (j = d("rect"), d(j, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                }), h.appendChild(j)), a.type) {
                    case "rect":
                        g("rx", e), g("ry", f);
                    case "image":
                        g("width", e), g("height", f);
                    case "text":
                        g("x", e), g("y", f);
                        break;
                    case "circle":
                        g("cx", e), g("cy", f), g("r", e);
                        break;
                    case "ellipse":
                        g("cx", e), g("cy", f), g("rx", e), g("ry", f);
                        break;
                    case "line":
                        g("x1", e), g("x2", e), g("y1", f), g("y2", f);
                        break;
                    case "marker":
                        g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
                        break;
                    case "radialGradient":
                        g("fx", e), g("fy", f);
                        break;
                    case "tspan":
                        g("dx", e), g("dy", f);
                        break;
                    default:
                        g(b, e)
                }
                return h.removeChild(j), i
            }

            function r(a) {
                e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
                    d.appendChild(a.node)
                }) : d.appendChild(a[b].node);
                var f = d.childNodes;
                for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
                return this
            }

            function s(a) {
                if (a.snap in V) return V[a.snap];
                var b;
                try {
                    b = a.ownerSVGElement
                } catch (c) {}
                this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
                var d = this.id = S(this);
                if (this.anims = {}, this._ = {
                        transform: []
                    }, a.snap = d, V[d] = this, "g" == this.type && (this.add = r), this.type in {
                        g: 1,
                        mask: 1,
                        pattern: 1,
                        symbol: 1
                    })
                    for (var e in v.prototype) v.prototype[z](e) && (this[e] = v.prototype[e])
            }

            function t(a) {
                this.node = a
            }

            function u(a, b) {
                var c = d(a);
                b.appendChild(c);
                var e = w(c);
                return e
            }

            function v(a, b) {
                var c, e, f, g = v.prototype;
                if (a && a.tagName && "svg" == a.tagName.toLowerCase()) {
                    if (a.snap in V) return V[a.snap];
                    var h = a.ownerDocument;
                    c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var i in g) g[z](i) && (c[i] = g[i]);
                    c.paper = c.root = c
                } else c = u("svg", y.doc.body), d(c.node, {
                    height: b,
                    version: 1.1,
                    width: a,
                    xmlns: U
                });
                return c
            }

            function w(a) {
                return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a
            }

            function x(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = {
                            type: a[c].type,
                            attr: a[c].attr()
                        },
                        f = a[c].children();
                    b.push(e), f.length && x(f, e.childNodes = [])
                }
            }
            c.version = "0.5.1", c.toString = function() {
                return "Snap v" + this.version
            }, c._ = {};
            var y = {
                win: a.window,
                doc: a.window.document
            };
            c._.glob = y;
            var z = "hasOwnProperty",
                A = String,
                B = parseFloat,
                C = parseInt,
                D = Math,
                E = D.max,
                F = D.min,
                G = D.abs,
                H = (D.pow, D.PI),
                I = (D.round, ""),
                J = Object.prototype.toString,
                K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                M = {
                    hs: 1,
                    rg: 1
                },
                N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                P = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                Q = 0,
                R = "S" + (+new Date).toString(36),
                S = function(a) {
                    return (a && a.type ? a.type : I) + R + (Q++).toString(36)
                },
                T = "http://www.w3.org/1999/xlink",
                U = "http://www.w3.org/2000/svg",
                V = {};
            c.url = function(a) {
                return "url('#" + a + "')"
            };
            c._.$ = d, c._.id = S, c.format = function() {
                var a = /\{([^\}]+)\}/g,
                    b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    c = function(a, c, d) {
                        var e = d;
                        return c.replace(b, function(a, b, c, d, f) {
                            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                        }), e = (null == e || e == d ? a : e) + ""
                    };
                return function(b, d) {
                    return A(b).replace(a, function(a, b) {
                        return c(a, b, d)
                    })
                }
            }(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function(a) {
                return D.sin(c.rad(a))
            }, c.tan = function(a) {
                return D.tan(c.rad(a))
            }, c.cos = function(a) {
                return D.cos(c.rad(a))
            }, c.asin = function(a) {
                return c.deg(D.asin(a))
            }, c.acos = function(a) {
                return c.deg(D.acos(a))
            }, c.atan = function(a) {
                return c.deg(D.atan(a))
            }, c.atan2 = function(a) {
                return c.deg(D.atan2(a))
            }, c.angle = j, c.len = function(a, b, d, e) {
                return Math.sqrt(c.len2(a, b, d, e))
            }, c.len2 = function(a, b, c, d) {
                return (a - c) * (a - c) + (b - d) * (b - d)
            }, c.closestPoint = function(a, b, c) {
                function d(a) {
                    var d = a.x - b,
                        e = a.y - c;
                    return d * d + e * e
                }
                for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; j >= m; m += k)(h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
                for (k *= .5; k > .5;) {
                    var n, o, p, q, r, s;
                    (p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5
                }
                return e = {
                    x: e.x,
                    y: e.y,
                    length: f,
                    distance: Math.sqrt(l)
                }
            }, c.is = e, c.snapTo = function(a, b, c) {
                if (c = e(c, "finite") ? c : 10, e(a, "array")) {
                    for (var d = a.length; d--;)
                        if (G(a[d] - b) <= c) return a[d]
                } else {
                    a = +a;
                    var f = b % a;
                    if (c > f) return b - f;
                    if (f > a - c) return b - f + a
                }
                return b
            }, c.getRGB = i(function(a) {
                if (!a || (a = A(a)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: Z
                };
                if ("none" == a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: Z
                };
                if (!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: Z
                };
                var b, d, f, g, h, i, j = a.match(K);
                return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
                    r: b,
                    g: d,
                    b: f,
                    toString: Z
                }, j.hex = "#" + (16777216 | f | d << 8 | b << 16).toString(16).slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: Z
                }
            }, c), c.hsb = i(function(a, b, d) {
                return c.hsb2rgb(a, b, d).hex
            }), c.hsl = i(function(a, b, d) {
                return c.hsl2rgb(a, b, d).hex
            }), c.rgb = i(function(a, b, c, d) {
                if (e(d, "finite")) {
                    var f = D.round;
                    return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")"
                }
                return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
            });
            var W = function(a) {
                    var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
                        c = "rgb(255, 0, 0)";
                    return (W = i(function(a) {
                        if ("red" == a.toLowerCase()) return c;
                        b.style.color = c, b.style.color = a;
                        var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
                        return d == c ? null : d
                    }))(a)
                },
                X = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                Y = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                Z = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                $ = function(a, b, d) {
                    if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
                        var f = c.getRGB(a);
                        a = f.r, b = f.g, d = f.b
                    }
                    return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
                },
                _ = function(a, b, d, f) {
                    a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
                    var g = {
                        r: a,
                        g: b,
                        b: d,
                        opacity: e(f, "finite") ? f : 1,
                        hex: c.rgb(a, b, d),
                        toString: Z
                    };
                    return e(f, "finite") && (g.opacity = f), g
                };
            c.color = function(a) {
                var b;
                return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
                    hex: "none"
                }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a
            }, c.hsb2rgb = function(a, b, c, d) {
                e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
                var f, g, h, i, j;
                return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
            }, c.hsl2rgb = function(a, b, c, d) {
                e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var f, g, h, i, j;
                return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
            }, c.rgb2hsb = function(a, b, c) {
                c = $(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: X
                }
            }, c.rgb2hsl = function(a, b, c) {
                c = $(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: Y
                }
            }, c.parsePathString = function(a) {
                if (!a) return null;
                var b = c.path(a);
                if (b.arr) return c.path.clone(b.arr);
                var d = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    f = [];
                return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a).replace(N, function(a, b, c) {
                    var e = [],
                        g = b.toLowerCase();
                    if (c.replace(P, function(a, b) {
                            b && e.push(+b)
                        }), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));
                    else
                        for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
                }), f.toString = c.path.toString, b.arr = c.path.clone(f), f
            };
            var aa = c.parseTransformString = function(a) {
                if (!a) return null;
                var b = [];
                return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a).replace(O, function(a, c, d) {
                    var e = [];
                    c.toLowerCase();
                    d.replace(P, function(a, b) {
                        b && e.push(+b)
                    }), b.push([c].concat(e))
                }), b.toString = c.path.toString, b
            };
            c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q;
            y.doc.contains || y.doc.compareDocumentPosition ? function(a, b) {
                var c = 9 == a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b;)
                        if (b = b.parentNode, b == a) return !0;
                return !1
            };
            c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function(a) {
                return a = A(a).replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a))
            }, c.selectAll = function(a) {
                for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
                return d
            }, setInterval(function() {
                for (var a in V)
                    if (V[z](a)) {
                        var b = V[a],
                            c = b.node;
                        ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a]
                    }
            }, 1e4), s.prototype.attr = function(a, c) {
                var d = this,
                    f = d.node;
                if (!a) {
                    if (1 != f.nodeType) return {
                        text: f.nodeValue
                    };
                    for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) h[g[i].nodeName] = g[i].nodeValue;
                    return h
                }
                if (e(a, "string")) {
                    if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                    var k = {};
                    k[a] = c, a = k
                }
                for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
                return d
            }, c.parse = function(a) {
                var b = y.doc.createDocumentFragment(),
                    c = !0,
                    d = y.doc.createElement("div");
                if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                    if (c) b = a;
                    else
                        for (; a.firstChild;) b.appendChild(a.firstChild);
                return new t(b)
            }, c.fragment = function() {
                for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
                    var f = a[d];
                    f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node)
                }
                return new t(b)
            }, c._.make = u, c._.wrap = w, v.prototype.el = function(a, b) {
                var c = u(a, this.node);
                return b && c.attr(b), c
            }, s.prototype.children = function() {
                for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) a[d] = c(b[d]);
                return a
            }, s.prototype.toJSON = function() {
                var a = [];
                return x([this], a), a[0]
            }, b.on("snap.util.getattr", function() {
                var a = b.nt();
                a = a.substring(a.lastIndexOf(".") + 1);
                var c = a.replace(/[A-Z]/g, function(a) {
                    return "-" + a.toLowerCase()
                });
                return ba[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a)
            });
            var ba = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            b.on("snap.util.attr", function(a) {
                    var c = b.nt(),
                        e = {};
                    c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
                    var f = c.replace(/-(\w)/gi, function(a, b) {
                            return b.toUpperCase()
                        }),
                        g = c.replace(/[A-Z]/g, function(a) {
                            return "-" + a.toLowerCase()
                        });
                    ba[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e)
                }),
                function(a) {}(v.prototype), c.ajax = function(a, c, d, f) {
                    var g = new XMLHttpRequest,
                        h = S();
                    if (g) {
                        if (e(c, "function")) f = d, d = c, c = null;
                        else if (e(c, "object")) {
                            var i = [];
                            for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                            c = i.join("&")
                        }
                        return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                            4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g)
                        }, 4 == g.readyState ? g : (g.send(c), g)
                    }
                }, c.load = function(a, b, d) {
                    c.ajax(a, function(a) {
                        var e = c.parse(a.responseText);
                        d ? b.call(d, e) : b(e)
                    })
                };
            var ca = function(a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    h = e.clientLeft || d.clientLeft || 0,
                    i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return {
                    y: i,
                    x: j
                }
            };
            return c.getElementByPoint = function(a, b) {
                var c = this,
                    d = (c.canvas, y.doc.elementFromPoint(a, b));
                if (y.win.opera && "svg" == d.tagName) {
                    var e = ca(d),
                        f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? w(d) : null
            }, c.plugin = function(a) {
                a(c, s, v, y, t)
            }, y.win.Snap = c, c
        }(a || this);
    return d.plugin(function(c, d, e, f, g) {
        function h(a, b) {
            if (null == b) {
                var d = !0;
                if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new c.Matrix;
                b = c._.svgTransform2string(b)
            } else b = c._.rgTransform.test(b) ? m(b).replace(/\.{3}|\u2026/g, a._.transform || "") : c._.svgTransform2string(b), l(b, "array") && (b = c.path ? c.path.toString.call(b) : m(b)), a._.transform = b;
            var e = c._.transform2matrix(b, a.getBBox(1));
            return d ? e : void(a.matrix = e)
        }

        function i(a) {
            function b(a, b) {
                var d = o(a.node, b);
                d = d && d.match(g), d = d && d[2], d && "#" == d.charAt() && (d = d.substring(1), d && (i[d] = (i[d] || []).concat(function(d) {
                    var e = {};
                    e[b] = c.url(d), o(a.node, e)
                })))
            }

            function d(a) {
                var b = o(a.node, "xlink:href");
                b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function(b) {
                    a.attr("xlink:href", "#" + b)
                })))
            }
            for (var e, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                e = f[j], b(e, "fill"), b(e, "stroke"), b(e, "filter"), b(e, "mask"), b(e, "clip-path"), d(e);
                var l = o(e.node, "id");
                l && (o(e.node, {
                    id: e.id
                }), h.push({
                    old: l,
                    id: e.id
                }))
            }
            for (j = 0, k = h.length; k > j; j++) {
                var m = i[h[j].old];
                if (m)
                    for (var n = 0, p = m.length; p > n; n++) m[n](h[j].id)
            }
        }

        function j(a) {
            return function() {
                var b = a ? "<" + this.type : "",
                    c = this.node.attributes,
                    d = this.node.childNodes;
                if (a)
                    for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                if (d.length) {
                    for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += s(d[e]).toString());
                    a && (b += "</" + this.type + ">")
                } else a && (b += "/>");
                return b
            }
        }
        var k = d.prototype,
            l = c.is,
            m = String,
            n = c._unit2px,
            o = c._.$,
            p = c._.make,
            q = c._.getSomeDefs,
            r = "hasOwnProperty",
            s = c._.wrap;
        k.getBBox = function(a) {
            if ("tspan" == this.type) return c._.box(this.node.getClientRects().item(0));
            if (!c.Matrix || !c.path) return this.node.getBBox();
            var b = this,
                d = new c.Matrix;
            if (b.removed) return c._.box();
            for (;
                "use" == b.type;)
                if (a || (d = d.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
                else {
                    var e = b.attr("xlink:href");
                    b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
                }
            var f = b._,
                g = c.path.get[b.type] || c.path.get.deflt;
            try {
                return a ? (f.bboxwt = g ? c.path.getBBox(b.realPath = g(b)) : c._.box(b.node.getBBox()), c._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = c.path.getBBox(c.path.map(b.realPath, d.add(b.matrix))), c._.box(f.bbox))
            } catch (h) {
                return c._.box()
            }
        };
        var t = function() {
            return this.string
        };
        k.transform = function(a) {
            var b = this._;
            if (null == a) {
                for (var d, e = this, f = new c.Matrix(this.node.getCTM()), g = h(this), i = [g], j = new c.Matrix, k = g.toTransformString(), l = m(g) == m(this.matrix) ? m(b.transform) : k;
                    "svg" != e.type && (e = e.parent());) i.push(h(e));
                for (d = i.length; d--;) j.add(i[d]);
                return {
                    string: l,
                    globalMatrix: f,
                    totalMatrix: j,
                    localMatrix: g,
                    diffMatrix: f.clone().add(g.invert()),
                    global: f.toTransformString(),
                    total: j.toTransformString(),
                    local: k,
                    toString: t
                }
            }
            return a instanceof c.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : h(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? o(this.node, {
                gradientTransform: this.matrix
            }) : "pattern" == this.type ? o(this.node, {
                patternTransform: this.matrix
            }) : o(this.node, {
                transform: this.matrix
            })), this
        }, k.parent = function() {
            return s(this.node.parentNode)
        }, k.append = k.add = function(a) {
            if (a) {
                if ("set" == a.type) {
                    var b = this;
                    return a.forEach(function(a) {
                        b.add(a)
                    }), this
                }
                a = s(a), this.node.appendChild(a.node), a.paper = this.paper
            }
            return this
        }, k.appendTo = function(a) {
            return a && (a = s(a), a.append(this)), this
        }, k.prepend = function(a) {
            if (a) {
                if ("set" == a.type) {
                    var b, c = this;
                    return a.forEach(function(a) {
                        b ? b.after(a) : c.prepend(a), b = a
                    }), this
                }
                a = s(a);
                var d = a.parent();
                this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
            }
            return this
        }, k.prependTo = function(a) {
            return a = s(a), a.prepend(this), this
        }, k.before = function(a) {
            if ("set" == a.type) {
                var b = this;
                return a.forEach(function(a) {
                    var c = a.parent();
                    b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                }), this.parent().add(), this
            }
            a = s(a);
            var c = a.parent();
            return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
        }, k.after = function(a) {
            a = s(a);
            var b = a.parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
        }, k.insertBefore = function(a) {
            a = s(a);
            var b = this.parent();
            return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
        }, k.insertAfter = function(a) {
            a = s(a);
            var b = this.parent();
            return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
        }, k.remove = function() {
            var a = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
        }, k.select = function(a) {
            return s(this.node.querySelector(a))
        }, k.selectAll = function(a) {
            for (var b = this.node.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(s(b[e]));
            return d
        }, k.asPX = function(a, b) {
            return null == b && (b = this.attr(a)), +n(this, a, b)
        }, k.use = function() {
            var a, b = this.node.id;
            return b || (b = this.id, o(this.node, {
                id: b
            })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? p(this.type, this.node.parentNode) : p("use", this.node.parentNode), o(a.node, {
                "xlink:href": "#" + b
            }), a.original = this, a
        }, k.clone = function() {
            var a = s(this.node.cloneNode(!0));
            return o(a.node, "id") && o(a.node, {
                id: a.id
            }), i(a), a.insertAfter(this), a
        }, k.toDefs = function() {
            var a = q(this);
            return a.appendChild(this.node), this
        }, k.pattern = k.toPattern = function(a, b, c, d) {
            var e = p("pattern", q(this));
            return null == a && (a = this.getBBox()), l(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), o(e.node, {
                x: a,
                y: b,
                width: c,
                height: d,
                patternUnits: "userSpaceOnUse",
                id: e.id,
                viewBox: [a, b, c, d].join(" ")
            }), e.node.appendChild(this.node), e
        }, k.marker = function(a, b, c, d, e, f) {
            var g = p("marker", q(this));
            return null == a && (a = this.getBBox()), l(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), o(g.node, {
                viewBox: [a, b, c, d].join(" "),
                markerWidth: c,
                markerHeight: d,
                orient: "auto",
                refX: e || 0,
                refY: f || 0,
                id: g.id
            }), g.node.appendChild(this.node), g
        };
        var u = {};
        k.data = function(a, d) {
            var e = u[this.id] = u[this.id] || {};
            if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
            if (1 == arguments.length) {
                if (c.is(a, "object")) {
                    for (var f in a) a[r](f) && this.data(f, a[f]);
                    return this
                }
                return b("snap.data.get." + this.id, this, e[a], a), e[a]
            }
            return e[a] = d, b("snap.data.set." + this.id, this, d, a), this
        }, k.removeData = function(a) {
            return null == a ? u[this.id] = {} : u[this.id] && delete u[this.id][a], this
        }, k.outerSVG = k.toString = j(1), k.innerSVG = j(), k.toDataURL = function() {
            if (a && a.btoa) {
                var b = this.getBBox(),
                    d = c.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                        x: +b.x.toFixed(3),
                        y: +b.y.toFixed(3),
                        width: +b.width.toFixed(3),
                        height: +b.height.toFixed(3),
                        contents: this.outerSVG()
                    });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(d)))
            }
        }, g.prototype.select = k.select, g.prototype.selectAll = k.selectAll
    }), d.plugin(function(a, d, e, f, g) {
        function h(a, b, c) {
            return function(d) {
                var e = d.slice(a, b);
                return 1 == e.length && (e = e[0]), c ? c(e) : e
            }
        }
        var i = d.prototype,
            j = a.is,
            k = String,
            l = "hasOwnProperty",
            m = function(a, b, d, e) {
                "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
            };
        a._.Animation = m, a.animation = function(a, b, c, d) {
            return new m(a, b, c, d)
        }, i.inAnim = function() {
            var a = this,
                b = [];
            for (var c in a.anims) a.anims[l](c) && ! function(a) {
                b.push({
                    anim: new m(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function(b) {
                        return a.status(b)
                    },
                    stop: function() {
                        a.stop()
                    }
                })
            }(a.anims[c]);
            return b
        }, a.animate = function(a, d, e, f, g, h) {
            "function" != typeof g || g.length || (h = g, g = c.linear);
            var i = c.time(),
                j = c(a, d, i, i + f, c.time, e, g);
            return h && b.once("mina.finish." + j.id, h), j
        }, i.stop = function() {
            for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
            return this
        }, i.animate = function(a, d, e, f) {
            "function" != typeof e || e.length || (f = e, e = c.linear), a instanceof m && (f = a.callback, e = a.easing, d = a.dur, a = a.attr);
            var g, i, n, o, p = [],
                q = [],
                r = {},
                s = this;
            for (var t in a)
                if (a[l](t)) {
                    s.equal ? (o = s.equal(t, k(a[t])), g = o.from, i = o.to, n = o.f) : (g = +s.attr(t), i = +a[t]);
                    var u = j(g, "array") ? g.length : 1;
                    r[t] = h(p.length, p.length + u, n), p = p.concat(g), q = q.concat(i)
                }
            var v = c.time(),
                w = c(p, q, v, v + d, c.time, function(a) {
                    var b = {};
                    for (var c in r) r[l](c) && (b[c] = r[c](a));
                    s.attr(b)
                }, e);
            return s.anims[w.id] = w, w._attrs = a, w._callback = f, b("snap.animcreated." + s.id, w), b.once("mina.finish." + w.id, function() {
                b.off("mina.*." + w.id), delete s.anims[w.id], f && f.call(s)
            }), b.once("mina.stop." + w.id, function() {
                b.off("mina.*." + w.id), delete s.anims[w.id]
            }), s
        }
    }), d.plugin(function(a, b, c, d, e) {
        function f(a, b, c, d, e, f) {
            return null == b && "[object SVGMatrix]" == g.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var g = Object.prototype.toString,
            h = String,
            i = Math,
            j = "";
        ! function(b) {
            function c(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function d(a) {
                var b = i.sqrt(c(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }
            b.add = function(a, b, c, d, e, g) {
                if (a && a instanceof f) return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
                var h = a * this.a + b * this.c,
                    i = a * this.b + b * this.d;
                return this.e += e * this.a + g * this.c, this.f += e * this.b + g * this.d, this.c = c * this.a + d * this.c, this.d = c * this.b + d * this.d, this.a = h, this.b = i, this
            }, f.prototype.multLeft = function(a, b, c, d, e, g) {
                if (a && a instanceof f) return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
                var h = a * this.a + c * this.b,
                    i = a * this.c + c * this.d,
                    j = a * this.e + c * this.f + e;
                return this.b = b * this.a + d * this.b, this.d = b * this.c + d * this.d, this.f = b * this.e + d * this.f + g, this.a = h, this.c = i, this.e = j, this
            }, b.invert = function() {
                var a = this,
                    b = a.a * a.d - a.b * a.c;
                return new f(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
            }, b.clone = function() {
                return new f(this.a, this.b, this.c, this.d, this.e, this.f)
            }, b.translate = function(a, b) {
                return this.e += a * this.a + b * this.c, this.f += a * this.b + b * this.d, this
            }, b.scale = function(a, b, c, d) {
                return null == b && (b = a), (c || d) && this.translate(c, d), this.a *= a, this.b *= a, this.c *= b, this.d *= b, (c || d) && this.translate(-c, -d), this
            }, b.rotate = function(b, c, d) {
                b = a.rad(b), c = c || 0, d = d || 0;
                var e = +i.cos(b).toFixed(9),
                    f = +i.sin(b).toFixed(9);
                return this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
            }, b.skewX = function(a) {
                return this.skew(a, 0)
            }, b.skewY = function(a) {
                return this.skew(0, a)
            }, b.skew = function(b, c) {
                b = b || 0, c = c || 0, b = a.rad(b), c = a.rad(c);
                var d = i.tan(b).toFixed(9),
                    e = i.tan(c).toFixed(9);
                return this.add(1, e, d, 1, 0, 0)
            }, b.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }, b.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }, b.get = function(a) {
                return +this[h.fromCharCode(97 + a)].toFixed(4)
            }, b.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, b.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, b.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, b.split = function() {
                var b = {};
                b.dx = this.e, b.dy = this.f;
                var e = [
                    [this.a, this.b],
                    [this.c, this.d]
                ];
                b.scalex = i.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = i.sqrt(c(e[1])), d(e[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
                var f = e[0][1],
                    g = e[1][1];
                return 0 > g ? (b.rotate = a.deg(i.acos(g)), 0 > f && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(i.asin(f)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
            }, b.toTransformString = function(a) {
                var b = a || this.split();
                return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : j) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : j) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : j))
            }
        }(f.prototype), a.Matrix = f, a.matrix = function(a, b, c, d, e, g) {
            return new f(a, b, c, d, e, g)
        }
    }), d.plugin(function(a, c, d, e, f) {
        function g(d) {
            return function(e) {
                if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
                    if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                        e.node.id || p(e.node, {
                            id: e.id
                        });
                        var g = q(e.node.id)
                    } else g = e.attr(d);
                else if (g = a.color(e), g.error) {
                    var h = a(n(this).ownerSVGElement).gradient(e);
                    h ? (h.node.id || p(h.node, {
                        id: h.id
                    }), g = q(h.node.id)) : g = e
                } else g = r(g);
                var i = {};
                i[d] = g, p(this.node, i), this.node.style[d] = t
            }
        }

        function h(a) {
            b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
        }

        function i(a) {
            for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(i(f)))
            }
            return b
        }

        function j() {
            return b.stop(), this.node.style.fontSize
        }
        var k = a._.make,
            l = a._.wrap,
            m = a.is,
            n = a._.getSomeDefs,
            o = /^url\((['"]?)([^)]+)\1\)$/,
            p = a._.$,
            q = a.url,
            r = String,
            s = a._.separator,
            t = "";
        a.deurl = function(a) {
                var b = String(a).match(o);
                return b ? b[2] : a
            }, b.on("snap.util.attr.mask", function(a) {
                if (a instanceof c || a instanceof f) {
                    if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
                    else d = k("mask", n(this)), d.node.appendChild(a.node);
                    !d.node.id && p(d.node, {
                        id: d.id
                    }), p(this.node, {
                        mask: q(d.id)
                    })
                }
            }),
            function(a) {
                b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
            }(function(a) {
                if (a instanceof c || a instanceof f) {
                    b.stop();
                    for (var d, e = a.node; e;) {
                        if ("clipPath" === e.nodeName) {
                            d = new c(e);
                            break
                        }
                        if ("svg" === e.nodeName) {
                            d = void 0;
                            break
                        }
                        e = e.parentNode
                    }
                    d || (d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
                        id: d.id
                    })), p(this.node, {
                        "clip-path": q(d.node.id || d.id)
                    })
                }
            }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
        var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function(a) {
                function b(a, b) {
                    for (var c = (b - h) / (a - i), d = i; a > d; d++) f[d].offset = +(+h + c * (d - i)).toFixed(2);
                    i = a, h = b
                }
                a = r(a);
                var c = a.match(u);
                if (!c) return null;
                var d = c[1],
                    e = c[2],
                    f = c[3];
                e = e.split(/\s*,\s*/).map(function(a) {
                    return +a == a ? +a : a
                }), 1 == e.length && 0 == e[0] && (e = []), f = f.split("-"), f = f.map(function(a) {
                    a = a.split(":");
                    var b = {
                        color: a[0]
                    };
                    return a[1] && (b.offset = parseFloat(a[1])), b
                });
                var g = f.length,
                    h = 0,
                    i = 0;
                g--;
                for (var j = 0; g > j; j++) "offset" in f[j] && b(j, f[j].offset);
                return f[g].offset = f[g].offset || 100, b(g, f[g].offset), {
                    type: d,
                    params: e,
                    stops: f
                }
            }), b.on("snap.util.attr.d", function(c) {
                b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
                    d: c
                })
            })(-1), b.on("snap.util.attr.#text", function(a) {
                b.stop(), a = r(a);
                for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(c)
            })(-1), b.on("snap.util.attr.path", function(a) {
                b.stop(), this.attr({
                    d: a
                })
            })(-1), b.on("snap.util.attr.class", function(a) {
                b.stop(), this.node.className.baseVal = a
            })(-1), b.on("snap.util.attr.viewBox", function(a) {
                var c;
                c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
                    viewBox: c
                }), b.stop()
            })(-1), b.on("snap.util.attr.transform", function(a) {
                this.transform(a), b.stop()
            })(-1), b.on("snap.util.attr.r", function(a) {
                "rect" == this.type && (b.stop(), p(this.node, {
                    rx: a,
                    ry: a
                }))
            })(-1), b.on("snap.util.attr.textpath", function(a) {
                if (b.stop(), "text" == this.type) {
                    var d, e, f;
                    if (!a && this.textPath) {
                        for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                        return e.remove(), void delete this.textPath
                    }
                    if (m(a, "string")) {
                        var g = n(this),
                            h = l(g.parentNode).path(a);
                        g.appendChild(h.node), d = h.id, h.attr({
                            id: d
                        })
                    } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
                        id: d
                    })));
                    if (d)
                        if (e = this.textPath, f = this.node, e) e.attr({
                            "xlink:href": "#" + d
                        });
                        else {
                            for (e = p("textPath", {
                                    "xlink:href": "#" + d
                                }); f.firstChild;) e.appendChild(f.firstChild);
                            f.appendChild(e), this.textPath = l(e)
                        }
                }
            })(-1), b.on("snap.util.attr.text", function(a) {
                if ("text" == this.type) {
                    for (var c = this.node, d = function(a) {
                            var b = p("tspan");
                            if (m(a, "array"))
                                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                            else b.appendChild(e.doc.createTextNode(a));
                            return b.normalize && b.normalize(), b
                        }; c.firstChild;) c.removeChild(c.firstChild);
                    for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
                }
                b.stop()
            })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
                return b.stop(), this.transform()
            })(-1), b.on("snap.util.getattr.textpath", function() {
                return b.stop(), this.textPath
            })(-1),
            function() {
                function c(c) {
                    return function() {
                        b.stop();
                        var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                        return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
                    }
                }

                function d(a) {
                    return function(c) {
                        b.stop();
                        var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                        if ("" == c || !c) return void(this.node.style[d] = "none");
                        if ("marker" == c.type) {
                            var e = c.node.id;
                            return e || p(c.node, {
                                id: c.id
                            }), void(this.node.style[d] = q(e))
                        }
                    }
                }
                b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
            }(), b.on("snap.util.getattr.r", function() {
                return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
            })(-1), b.on("snap.util.getattr.text", function() {
                if ("text" == this.type || "tspan" == this.type) {
                    b.stop();
                    var a = i(this.node);
                    return 1 == a.length ? a[0] : a
                }
            })(-1), b.on("snap.util.getattr.#text", function() {
                return this.node.textContent
            })(-1), b.on("snap.util.getattr.fill", function(c) {
                if (!c) {
                    b.stop();
                    var d = b("snap.util.getattr.fill", this, !0).firstDefined();
                    return a(a.deurl(d)) || d
                }
            })(-1), b.on("snap.util.getattr.stroke", function(c) {
                if (!c) {
                    b.stop();
                    var d = b("snap.util.getattr.stroke", this, !0).firstDefined();
                    return a(a.deurl(d)) || d
                }
            })(-1), b.on("snap.util.getattr.viewBox", function() {
                b.stop();
                var c = p(this.node, "viewBox");
                return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
            })(-1), b.on("snap.util.getattr.points", function() {
                var a = p(this.node, "points");
                return b.stop(), a ? a.split(s) : void 0
            })(-1), b.on("snap.util.getattr.path", function() {
                var a = p(this.node, "d");
                return b.stop(), a
            })(-1), b.on("snap.util.getattr.class", function() {
                return this.node.className.baseVal
            })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
    }), d.plugin(function(a, b, c, d, e) {
        var f = /\S+/g,
            g = String,
            h = b.prototype;
        h.addClass = function(a) {
            var b, c, d, e, h = g(a || "").match(f) || [],
                i = this.node,
                j = i.className.baseVal,
                k = j.match(f) || [];
            if (h.length) {
                for (b = 0; d = h[b++];) c = k.indexOf(d), ~c || k.push(d);
                e = k.join(" "), j != e && (i.className.baseVal = e)
            }
            return this
        }, h.removeClass = function(a) {
            var b, c, d, e, h = g(a || "").match(f) || [],
                i = this.node,
                j = i.className.baseVal,
                k = j.match(f) || [];
            if (k.length) {
                for (b = 0; d = h[b++];) c = k.indexOf(d), ~c && k.splice(c, 1);
                e = k.join(" "), j != e && (i.className.baseVal = e)
            }
            return this
        }, h.hasClass = function(a) {
            var b = this.node,
                c = b.className.baseVal,
                d = c.match(f) || [];
            return !!~d.indexOf(a)
        }, h.toggleClass = function(a, b) {
            if (null != b) return b ? this.addClass(a) : this.removeClass(a);
            var c, d, e, g, h = (a || "").match(f) || [],
                i = this.node,
                j = i.className.baseVal,
                k = j.match(f) || [];
            for (c = 0; e = h[c++];) d = k.indexOf(e), ~d ? k.splice(d, 1) : k.push(e);
            return g = k.join(" "), j != g && (i.className.baseVal = g), this
        }
    }), d.plugin(function(a, c, d, e, f) {
        function g(a) {
            return a
        }

        function h(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }
        var i = {
                "+": function(a, b) {
                    return a + b
                },
                "-": function(a, b) {
                    return a - b
                },
                "/": function(a, b) {
                    return a / b
                },
                "*": function(a, b) {
                    return a * b
                }
            },
            j = String,
            k = /[a-z]+$/i,
            l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        b.on("snap.util.attr", function(a) {
            var c = j(a).match(l);
            if (c) {
                var d = b.nt(),
                    e = d.substring(d.lastIndexOf(".") + 1),
                    f = this.attr(e),
                    g = {};
                b.stop();
                var h = c[3] || "",
                    m = f.match(k),
                    n = i[c[1]];
                if (m && m == h ? a = n(parseFloat(f), +c[2]) : (f = this.asPX(e), a = n(this.asPX(e), this.asPX(e, c[2] + h))), isNaN(f) || isNaN(a)) return;
                g[e] = a, this.attr(g)
            }
        })(-10), b.on("snap.util.equal", function(a, c) {
            var d = j(this.attr(a) || ""),
                e = j(c).match(l);
            if (e) {
                b.stop();
                var f = e[3] || "",
                    m = d.match(k),
                    n = i[e[1]];
                return m && m == f ? {
                    from: parseFloat(d),
                    to: n(parseFloat(d), +e[2]),
                    f: h(m)
                } : (d = this.asPX(a), {
                    from: d,
                    to: n(d, this.asPX(a, e[2] + f)),
                    f: g
                })
            }
        })(-10)
    }), d.plugin(function(c, d, e, f, g) {
        var h = e.prototype,
            i = c.is;
        h.rect = function(a, b, c, d, e, f) {
            var g;
            return null == f && (f = e), i(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
                x: a,
                y: b,
                width: c,
                height: d
            }, null != e && (g.rx = e, g.ry = f)), this.el("rect", g)
        }, h.circle = function(a, b, c) {
            var d;
            return i(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                cx: a,
                cy: b,
                r: c
            }), this.el("circle", d)
        };
        var j = function() {
            function a() {
                this.parentNode.removeChild(this)
            }
            return function(b, c) {
                var d = f.doc.createElement("img"),
                    e = f.doc.body;
                d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
                    c.call(d), d.onload = d.onerror = null, e.removeChild(d)
                }, d.onerror = a, e.appendChild(d), d.src = b
            }
        }();
        h.image = function(a, b, d, e, f) {
                var g = this.el("image");
                if (i(a, "object") && "src" in a) g.attr(a);
                else if (null != a) {
                    var h = {
                        "xlink:href": a,
                        preserveAspectRatio: "none"
                    };
                    null != b && null != d && (h.x = b, h.y = d), null != e && null != f ? (h.width = e, h.height = f) : j(a, function() {
                        c._.$(g.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        })
                    }), c._.$(g.node, h)
                }
                return g
            }, h.ellipse = function(a, b, c, d) {
                var e;
                return i(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
                    cx: a,
                    cy: b,
                    rx: c,
                    ry: d
                }), this.el("ellipse", e)
            }, h.path = function(a) {
                var b;
                return i(a, "object") && !i(a, "array") ? b = a : a && (b = {
                    d: a
                }), this.el("path", b)
            }, h.group = h.g = function(a) {
                var b = this.el("g");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, h.svg = function(a, b, c, d, e, f, g, h) {
                var j = {};
                return i(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h && (j.viewBox = [e, f, g, h])), this.el("svg", j)
            }, h.mask = function(a) {
                var b = this.el("mask");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, h.ptrn = function(a, b, c, d, e, f, g, h) {
                if (i(a, "object")) var j = a;
                else j = {
                    patternUnits: "userSpaceOnUse"
                }, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h ? j.viewBox = [e, f, g, h] : j.viewBox = [a || 0, b || 0, c || 0, d || 0];
                return this.el("pattern", j)
            }, h.use = function(a) {
                return null != a ? (a instanceof d && (a.attr("id") || a.attr({
                    id: c._.id(a)
                }), a = a.attr("id")), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", {
                    "xlink:href": "#" + a
                })) : d.prototype.use.call(this)
            }, h.symbol = function(a, b, c, d) {
                var e = {};
                return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e)
            }, h.text = function(a, b, c) {
                var d = {};
                return i(a, "object") ? d = a : null != a && (d = {
                    x: a,
                    y: b,
                    text: c || ""
                }), this.el("text", d)
            }, h.line = function(a, b, c, d) {
                var e = {};
                return i(a, "object") ? e = a : null != a && (e = {
                    x1: a,
                    x2: c,
                    y1: b,
                    y2: d
                }), this.el("line", e)
            }, h.polyline = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polyline", b)
            }, h.polygon = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polygon", b)
            },
            function() {
                function d() {
                    return this.selectAll("stop")
                }

                function e(a, b) {
                    var d = l("stop"),
                        e = {
                            offset: +b + "%"
                        };
                    a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), l(d, e);
                    for (var f, g = this.stops(), h = 0; h < g.length; h++) {
                        var i = parseFloat(g[h].attr("offset"));
                        if (i > b) {
                            this.node.insertBefore(d, g[h].node), f = !0;
                            break
                        }
                    }
                    return f || this.node.appendChild(d), this
                }

                function f() {
                    if ("linearGradient" == this.type) {
                        var a = l(this.node, "x1") || 0,
                            b = l(this.node, "x2") || 1,
                            d = l(this.node, "y1") || 0,
                            e = l(this.node, "y2") || 0;
                        return c._.box(a, d, math.abs(b - a), math.abs(e - d))
                    }
                    var f = this.node.cx || .5,
                        g = this.node.cy || .5,
                        h = this.node.r || 0;
                    return c._.box(f - h, g - h, 2 * h, 2 * h)
                }

                function g(a) {
                    var d = a,
                        e = this.stops();
                    if ("string" == typeof a && (d = b("snap.util.grad.parse", null, "l(0,0,0,1)" + a).firstDefined().stops), c.is(d, "array")) {
                        for (var f = 0; f < e.length; f++)
                            if (d[f]) {
                                var g = c.color(d[f].color),
                                    h = {
                                        offset: d[f].offset + "%"
                                    };
                                h["stop-color"] = g.hex, g.opacity < 1 && (h["stop-opacity"] = g.opacity), e[f].attr(h)
                            } else e[f].remove();
                        for (f = e.length; f < d.length; f++) this.addStop(d[f].color, d[f].offset);
                        return this
                    }
                }

                function i(a, c) {
                    var d, e = b("snap.util.grad.parse", null, c).firstDefined();
                    if (!e) return null;
                    e.params.unshift(a), d = "l" == e.type.toLowerCase() ? j.apply(0, e.params) : k.apply(0, e.params), e.type != e.type.toLowerCase() && l(d.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    for (var f = e.stops, g = f.length, h = 0; g > h; h++) {
                        var i = f[h];
                        d.addStop(i.color, i.offset)
                    }
                    return d
                }

                function j(a, b, h, i, j) {
                    var k = c._.make("linearGradient", a);
                    return k.stops = d, k.addStop = e, k.getBBox = f, k.setStops = g, null != b && l(k.node, {
                        x1: b,
                        y1: h,
                        x2: i,
                        y2: j
                    }), k
                }

                function k(a, b, g, h, i, j) {
                    var k = c._.make("radialGradient", a);
                    return k.stops = d, k.addStop = e, k.getBBox = f, null != b && l(k.node, {
                        cx: b,
                        cy: g,
                        r: h
                    }), null != i && null != j && l(k.node, {
                        fx: i,
                        fy: j
                    }), k
                }
                var l = c._.$;
                h.gradient = function(a) {
                    return i(this.defs, a)
                }, h.gradientLinear = function(a, b, c, d) {
                    return j(this.defs, a, b, c, d)
                }, h.gradientRadial = function(a, b, c, d, e) {
                    return k(this.defs, a, b, c, d, e)
                }, h.toString = function() {
                    var a, b = this.node.ownerDocument,
                        d = b.createDocumentFragment(),
                        e = b.createElement("div"),
                        f = this.node.cloneNode(!0);
                    return d.appendChild(e), e.appendChild(f), c._.$(f, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), a = e.innerHTML, d.removeChild(d.firstChild), a
                }, h.toDataURL = function() {
                    return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
                }, h.clear = function() {
                    for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : h.clear.call({
                        node: b
                    }), b = a
                }
            }()
    }), d.plugin(function(a, b, c, d) {
        function e(a) {
            var b = e.ps = e.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {
                sleep: 100
            }, setTimeout(function() {
                for (var c in b) b[M](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }), b[a]
        }

        function f(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: P.min(c, d) / 2,
                r2: P.max(c, d) / 2,
                r0: P.sqrt(c * c + d * d) / 2,
                path: y(a, b, c, d),
                vb: [a, b, c, d].join(" ")
            }
        }

        function g() {
            return this.join(",").replace(N, "$1")
        }

        function h(a) {
            var b = L(a);
            return b.toString = g, b
        }

        function i(a, b, c, d, e, f, g, h, i) {
            return null == i ? p(a, b, c, d, e, f, g, h) : k(a, b, c, d, e, f, g, h, q(a, b, c, d, e, f, g, h, i))
        }

        function j(c, d) {
            function e(a) {
                return +(+a).toFixed(3)
            }
            return a._.cacher(function(a, f, g) {
                a instanceof b && (a = a.attr("d")), a = G(a);
                for (var h, j, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) h = +l[1], j = +l[2];
                    else {
                        if (m = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], g) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, h = +l[5], j = +l[6];
                                continue
                            }
                            if (!c && !d) return n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, h = +l[5], j = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : k(h, j, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function k(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i,
                k = T(j, 3),
                l = T(j, 2),
                m = i * i,
                n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                u = j * a + i * c,
                v = j * b + i * d,
                w = j * e + i * g,
                x = j * f + i * h,
                y = 90 - 180 * P.atan2(q - s, r - t) / Q;
            return {
                x: o,
                y: p,
                m: {
                    x: q,
                    y: r
                },
                n: {
                    x: s,
                    y: t
                },
                start: {
                    x: u,
                    y: v
                },
                end: {
                    x: w,
                    y: x
                },
                alpha: y
            }
        }

        function l(b, c, d, e, g, h, i, j) {
            a.is(b, "array") || (b = [b, c, d, e, g, h, i, j]);
            var k = F.apply(null, b);
            return f(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }

        function m(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }

        function n(a, b) {
            return a = f(a), b = f(b), m(b, a.x, a.y) || m(b, a.x2, a.y) || m(b, a.x, a.y2) || m(b, a.x2, a.y2) || m(a, b.x, b.y) || m(a, b.x2, b.y) || m(a, b.x, b.y2) || m(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }

        function o(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e,
                g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function p(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j,
                    r = o(q, a, c, e, g),
                    s = o(q, b, d, f, h),
                    t = r * r + s * s;
                n += m[p] * P.sqrt(t)
            }
            return j * n
        }

        function q(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || p(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1,
                    l = k / 2,
                    m = k - l,
                    n = .01;
                for (j = p(a, b, c, d, e, f, g, h, m); U(j - i) > n;) l /= 2, m += (i > j ? 1 : -1) * l, j = p(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function r(a, b, c, d, e, f, g, h) {
            if (!(S(a, c) < R(e, g) || R(a, c) > S(e, g) || S(b, d) < R(f, h) || R(b, d) > S(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k,
                        m = j / k,
                        n = +l.toFixed(2),
                        o = +m.toFixed(2);
                    if (!(n < +R(a, c).toFixed(2) || n > +S(a, c).toFixed(2) || n < +R(e, g).toFixed(2) || n > +S(e, g).toFixed(2) || o < +R(b, d).toFixed(2) || o > +S(b, d).toFixed(2) || o < +R(f, h).toFixed(2) || o > +S(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    }
                }
            }
        }

        function s(a, b, c) {
            var d = l(a),
                e = l(b);
            if (!n(d, e)) return c ? 0 : [];
            for (var f = p.apply(0, a), g = p.apply(0, b), h = ~~(f / 8), i = ~~(g / 8), j = [], m = [], o = {}, q = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = k.apply(0, a.concat(s / h));
                j.push({
                    x: t.x,
                    y: t.y,
                    t: s / h
                })
            }
            for (s = 0; i + 1 > s; s++) t = k.apply(0, b.concat(s / i)), m.push({
                x: t.x,
                y: t.y,
                t: s / i
            });
            for (s = 0; h > s; s++)
                for (var u = 0; i > u; u++) {
                    var v = j[s],
                        w = j[s + 1],
                        x = m[u],
                        y = m[u + 1],
                        z = U(w.x - v.x) < .001 ? "y" : "x",
                        A = U(y.x - x.x) < .001 ? "y" : "x",
                        B = r(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (o[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                        o[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + U((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                            D = x.t + U((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? q++ : q.push({
                            x: B.x,
                            y: B.y,
                            t1: C,
                            t2: D
                        }))
                    }
                }
            return q
        }

        function t(a, b) {
            return v(a, b)
        }

        function u(a, b) {
            return v(a, b, 1)
        }

        function v(a, b, c) {
            a = G(a), b = G(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var q = a[o];
                if ("M" == q[0]) d = h = q[1], e = i = q[2];
                else {
                    "C" == q[0] ? (l = [d, e].concat(q.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var r = 0, t = b.length; t > r; r++) {
                        var u = b[r];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2];
                        else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = s(l, m, c);
                            if (c) n += v;
                            else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = r, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function w(a, b, c) {
            var d = x(a);
            return m(d, b, c) && v(a, [
                ["M", b, c],
                ["H", d.x2 + 10]
            ], 1) % 2 == 1
        }

        function x(a) {
            var b = e(a);
            if (b.bbox) return L(b.bbox);
            if (!a) return f();
            a = G(a);
            for (var c, d = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                if (c = a[j], "M" == c[0]) d = c[1], g = c[2], h.push(d), i.push(g);
                else {
                    var l = F(d, g, c[1], c[2], c[3], c[4], c[5], c[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), d = c[5], g = c[6]
                }
            var m = R.apply(0, h),
                n = R.apply(0, i),
                o = S.apply(0, h),
                p = S.apply(0, i),
                q = f(m, n, o - m, p - n);
            return b.bbox = L(q), q
        }

        function y(a, b, c, d, e) {
            if (e) return [
                ["M", +a + +e, b],
                ["l", c - 2 * e, 0],
                ["a", e, e, 0, 0, 1, e, e],
                ["l", 0, d - 2 * e],
                ["a", e, e, 0, 0, 1, -e, e],
                ["l", 2 * e - c, 0],
                ["a", e, e, 0, 0, 1, -e, -e],
                ["l", 0, 2 * e - d],
                ["a", e, e, 0, 0, 1, e, -e],
                ["z"]
            ];
            var f = [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ];
            return f.toString = g, f
        }

        function z(a, b, c, d, e) {
            if (null == e && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != e) var f = Math.PI / 180,
                h = a + c * Math.cos(-d * f),
                i = a + c * Math.cos(-e * f),
                j = b + c * Math.sin(-d * f),
                k = b + c * Math.sin(-e * f),
                l = [
                    ["M", h, j],
                    ["A", c, c, 0, +(e - d > 180), 0, i, k]
                ];
            else l = [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ];
            return l.toString = g, l
        }

        function A(b) {
            var c = e(b),
                d = String.prototype.toLowerCase;
            if (c.rel) return h(c.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var f = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, f.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = f[n] = [],
                    q = b[n];
                if (q[0] != d.call(q[0])) switch (p[0] = d.call(q[0]), p[0]) {
                    case "a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case "v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case "m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else {
                    p = f[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) f[n][t] = q[t]
                }
                var v = f[n].length;
                switch (f[n][0]) {
                    case "z":
                        i = k, j = l;
                        break;
                    case "h":
                        i += +f[n][v - 1];
                        break;
                    case "v":
                        j += +f[n][v - 1];
                        break;
                    default:
                        i += +f[n][v - 2], j += +f[n][v - 1]
                }
            }
            return f.toString = g, c.rel = h(f), f
        }

        function B(b) {
            var c = e(b);
            if (c.abs) return h(c.abs);
            if (K(b, "array") && K(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
                ["M", 0, 0]
            ];
            var d, f = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, f[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (f.push(n = []), o = b[q], d = o[0], d != d.toUpperCase()) switch (n[0] = d.toUpperCase(), n[0]) {
                        case "A":
                            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                            break;
                        case "V":
                            n[1] = +o[1] + j;
                            break;
                        case "H":
                            n[1] = +o[1] + i;
                            break;
                        case "R":
                            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                            f.pop(), f = f.concat(I(s, p));
                            break;
                        case "O":
                            f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);
                            break;
                        case "U":
                            f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));
                            break;
                        case "M":
                            k = +o[1] + i, l = +o[2] + j;
                        default:
                            for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                    } else if ("R" == d) s = [i, j].concat(o.slice(1)), f.pop(), f = f.concat(I(s, p)), n = ["R"].concat(o.slice(-2));
                    else if ("O" == d) f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);
                else if ("U" == d) f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));
                else
                    for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (d = d.toUpperCase(), "O" != d) switch (n[0]) {
                    case "Z":
                        i = +k, j = +l;
                        break;
                    case "H":
                        i = n[1];
                        break;
                    case "V":
                        j = n[1];
                        break;
                    case "M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return f.toString = g, c.abs = h(f), f
        }

        function C(a, b, c, d) {
            return [a, b, c, d, c, d]
        }

        function D(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function E(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * Q / 180,
                n = Q / 180 * (+f || 0),
                o = [],
                p = a._.cacher(function(a, b, c) {
                    var d = a * P.cos(c) - b * P.sin(c),
                        e = a * P.sin(c) + b * P.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (!d || !e) return [b, c, i, j, i, j];
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (P.cos(Q / 180 * f), P.sin(Q / 180 * f), (b - i) / 2),
                    r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = P.sqrt(s), d = s * d, e = s * e);
                var t = d * d,
                    u = e * e,
                    v = (g == h ? -1 : 1) * P.sqrt(U((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2,
                    x = v * -e * q / d + (c + j) / 2,
                    y = P.asin(((c - x) / e).toFixed(9)),
                    z = P.asin(((j - x) / e).toFixed(9));
                y = w > b ? Q - y : y, z = w > i ? Q - z : z, 0 > y && (y = 2 * Q + y), 0 > z && (z = 2 * Q + z), h && y > z && (y -= 2 * Q), !h && z > y && (z -= 2 * Q)
            }
            var A = z - y;
            if (U(A) > m) {
                var B = z,
                    C = i,
                    D = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * P.cos(z), j = x + e * P.sin(z), o = E(i, j, d, e, f, 0, h, C, D, [z, B, w, x])
            }
            A = z - y;
            var F = P.cos(y),
                G = P.sin(y),
                H = P.cos(z),
                I = P.sin(z),
                J = P.tan(A / 4),
                K = 4 / 3 * d * J,
                L = 4 / 3 * e * J,
                M = [b, c],
                N = [b + K * G, c - L * F],
                O = [i + K * I, j - L * H],
                R = [i, j];
            if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [N, O, R].concat(o);
            o = [N, O, R].concat(o).join().split(",");
            for (var S = [], T = 0, V = o.length; V > T; T++) S[T] = T % 2 ? p(o[T - 1], o[T], n).y : p(o[T], o[T + 1], n).x;
            return S
        }

        function F(a, b, c, d, e, f, g, h) {
            for (var i, j, k, l, m, n, o, p, q = [], r = [
                    [],
                    []
                ], s = 0; 2 > s; ++s)
                if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), U(i) < 1e-12) {
                    if (U(j) < 1e-12) continue;
                    l = -k / j, l > 0 && 1 > l && q.push(l)
                } else o = j * j - 4 * k * i, p = P.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
            for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
            return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                min: {
                    x: R.apply(0, r[0]),
                    y: R.apply(0, r[1])
                },
                max: {
                    x: S.apply(0, r[0]),
                    y: S.apply(0, r[1])
                }
            }
        }

        function G(a, b) {
            var c = !b && e(a);
            if (!b && c.curve) return h(c.curve);
            for (var d = B(a), f = b && B(b), g = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, j = (function(a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"].concat(E.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(D(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(D(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"].concat(C(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"].concat(C(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"].concat(C(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"].concat(C(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) m[b] = "A", f && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), r = S(d.length, f && f.length || 0)
                    }
                }, l = function(a, b, c, e, g) {
                    a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", e.x, e.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], r = S(d.length, f && f.length || 0))
                }, m = [], n = [], o = "", p = "", q = 0, r = S(d.length, f && f.length || 0); r > q; q++) {
                d[q] && (o = d[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), d[q] = j(d[q], g, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(d, q), f && (f[q] && (o = f[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), f[q] = j(f[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(f, q)), l(d, f, g, i, q), l(f, d, i, g, q);
                var s = d[q],
                    t = f && f[q],
                    u = s.length,
                    v = f && t.length;
                g.x = s[u - 2], g.y = s[u - 1], g.bx = O(s[u - 4]) || g.x, g.by = O(s[u - 3]) || g.y, i.bx = f && (O(t[v - 4]) || i.x), i.by = f && (O(t[v - 3]) || i.y), i.x = f && t[v - 2], i.y = f && t[v - 1]
            }
            return f || (c.curve = h(d)), f ? [d, f] : d
        }

        function H(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = G(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function I(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{
                    x: +a[d - 2],
                    y: +a[d - 1]
                }, {
                    x: +a[d],
                    y: +a[d + 1]
                }, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {
                    x: +a[d + 4],
                    y: +a[d + 5]
                }];
                b ? d ? e - 4 == d ? f[3] = {
                    x: +a[0],
                    y: +a[1]
                } : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {
                    x: +a[2],
                    y: +a[3]
                }) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }
        var J = b.prototype,
            K = a.is,
            L = a._.clone,
            M = "hasOwnProperty",
            N = /,?([a-z]),?/gi,
            O = parseFloat,
            P = Math,
            Q = P.PI,
            R = P.min,
            S = P.max,
            T = P.pow,
            U = P.abs,
            V = j(1),
            W = j(),
            X = j(0, 1),
            Y = a._unit2px,
            Z = {
                path: function(a) {
                    return a.attr("path")
                },
                circle: function(a) {
                    var b = Y(a);
                    return z(b.cx, b.cy, b.r)
                },
                ellipse: function(a) {
                    var b = Y(a);
                    return z(b.cx || 0, b.cy || 0, b.rx, b.ry)
                },
                rect: function(a) {
                    var b = Y(a);
                    return y(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                },
                image: function(a) {
                    var b = Y(a);
                    return y(b.x || 0, b.y || 0, b.width, b.height)
                },
                line: function(a) {
                    return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                },
                polyline: function(a) {
                    return "M" + a.attr("points")
                },
                polygon: function(a) {
                    return "M" + a.attr("points") + "z"
                },
                deflt: function(a) {
                    var b = a.node.getBBox();
                    return y(b.x, b.y, b.width, b.height)
                }
            };
        a.path = e, a.path.getTotalLength = V, a.path.getPointAtLength = W, a.path.getSubpath = function(a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return X(a, b).end;
            var d = X(a, c, 1);
            return b ? X(d, b).end : d
        }, J.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, J.getPointAtLength = function(a) {
            return W(this.attr("d"), a)
        }, J.getSubpath = function(b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = f, a.path.findDotsAtSegment = k, a.path.bezierBBox = l, a.path.isPointInsideBBox = m, a.closest = function(b, c, d, e) {
            for (var g = 100, h = f(b - g / 2, c - g / 2, g, g), i = [], j = d[0].hasOwnProperty("x") ? function(a) {
                    return {
                        x: d[a].x,
                        y: d[a].y
                    }
                } : function(a) {
                    return {
                        x: d[a],
                        y: e[a]
                    }
                }, k = 0; 1e6 >= g && !k;) {
                for (var l = 0, n = d.length; n > l; l++) {
                    var o = j(l);
                    if (m(h, o.x, o.y)) {
                        k++, i.push(o);
                        break
                    }
                }
                k || (g *= 2, h = f(b - g / 2, c - g / 2, g, g))
            }
            if (1e6 != g) {
                var p, q = 1 / 0;
                for (l = 0, n = i.length; n > l; l++) {
                    var r = a.len(b, c, i[l].x, i[l].y);
                    q > r && (q = r, i[l].len = r, p = i[l])
                }
                return p
            }
        }, a.path.isBBoxIntersect = n, a.path.intersection = t, a.path.intersectionNumber = u, a.path.isPointInside = w, a.path.getBBox = x, a.path.get = Z, a.path.toRelative = A, a.path.toAbsolute = B, a.path.toCubic = G, a.path.map = H, a.path.toString = g, a.path.clone = h
    }), d.plugin(function(a, d, e, f) {
        var g = Math.max,
            h = Math.min,
            i = function(a) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
                    for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            },
            j = i.prototype;
        j.push = function() {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
            return this
        }, j.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, j.forEach = function(a, b) {
            for (var c = 0, d = this.items.length; d > c; c++)
                if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, j.animate = function(d, e, f, g) {
            "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
            var h = arguments;
            if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
            var j, k = function() {
                    j ? this.b = j : j = this.b
                },
                l = 0,
                m = this,
                n = g && function() {
                    ++l == m.length && g.call(this)
                };
            return this.forEach(function(a, c) {
                b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n)
            })
        }, j.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, j.bind = function(a, b, c) {
            var d = {};
            if ("function" == typeof b) this.bindings[a] = b;
            else {
                var e = c || a;
                this.bindings[a] = function(a) {
                    d[e] = a, b.attr(d)
                }
            }
            return this
        }, j.attr = function(a) {
            var b = {};
            for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
            for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
            return this
        }, j.clear = function() {
            for (; this.length;) this.pop()
        }, j.splice = function(a, b, c) {
            a = 0 > a ? g(this.length + a, 0) : a, b = g(0, h(this.length - a, b));
            var d, e = [],
                f = [],
                j = [];
            for (d = 2; d < arguments.length; d++) j.push(arguments[d]);
            for (d = 0; b > d; d++) f.push(this[a + d]);
            for (; d < this.length - a; d++) e.push(this[a + d]);
            var k = j.length;
            for (d = 0; d < k + e.length; d++) this.items[a + d] = this[a + d] = k > d ? j[d] : e[d - k];
            for (d = this.items.length = this.length -= b - k; this[d];) delete this[d++];
            return new i(f)
        }, j.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, j.insertAfter = function(a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, j.getBBox = function() {
            for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
                if (!this.items[e].removed) {
                    var f = this.items[e].getBBox();
                    a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
                }
            return a = h.apply(0, a), b = h.apply(0, b), c = g.apply(0, c), d = g.apply(0, d), {
                x: a,
                y: b,
                x2: c,
                y2: d,
                width: c - a,
                height: d - b,
                cx: a + (c - a) / 2,
                cy: b + (d - b) / 2
            }
        }, j.clone = function(a) {
            a = new i;
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, j.toString = function() {
            return "Snap‘s set"
        }, j.type = "set", a.Set = i, a.set = function() {
            var a = new i;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
    }), d.plugin(function(a, c, d, e) {
        function f(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function g(b, c, d) {
            b = b || new a.Matrix, c = c || new a.Matrix, b = a.parseTransformString(b.toTransformString()) || [], c = a.parseTransformString(c.toTransformString()) || [];
            for (var e, g, h, i, j = Math.max(b.length, c.length), k = [], n = [], o = 0; j > o; o++) {
                if (h = b[o] || f(c[o]), i = c[o] || f(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
                    b = a._.transform2matrix(b, d()), c = a._.transform2matrix(c, d()), k = [
                        ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                    ], n = [
                        ["m", c.a, c.b, c.c, c.d, c.e, c.f]
                    ];
                    break
                }
                for (k[o] = [], n[o] = [], e = 0, g = Math.max(h.length, i.length); g > e; e++) e in h && (k[o][e] = h[e]), e in i && (n[o][e] = i[e])
            }
            return {
                from: m(k),
                to: m(n),
                f: l(k)
            }
        }

        function h(a) {
            return a
        }

        function i(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }

        function j(a) {
            return a.join(" ")
        }

        function k(b) {
            return a.rgb(b[0], b[1], b[2], b[3])
        }

        function l(a) {
            var b, c, d, e, f, g, h = 0,
                i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function m(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }

        function n(a) {
            return isFinite(a)
        }

        function o(b, c) {
            return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1
        }
        var p = {},
            q = /[%a-z]+$/i,
            r = String;
        p.stroke = p.fill = "colour", c.prototype.equal = function(a, c) {
            return b("snap.util.equal", this, a, c).firstDefined()
        }, b.on("snap.util.equal", function(b, c) {
            var d, e, f = r(this.attr(b) || ""),
                s = this;
            if ("colour" == p[b]) return d = a.color(f), e = a.color(c), {
                from: [d.r, d.g, d.b, d.opacity],
                to: [e.r, e.g, e.b, e.opacity],
                f: k
            };
            if ("viewBox" == b) return d = this.attr(b).vb.split(" ").map(Number), e = c.split(" ").map(Number), {
                from: d,
                to: e,
                f: j
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return "string" == typeof c && (c = r(c).replace(/\.{3}|\u2026/g, f)), f = this.matrix, c = a._.rgTransform.test(c) ? a._.transform2matrix(c, this.getBBox()) : a._.transform2matrix(a._.svgTransform2string(c), this.getBBox()), g(f, c, function() {
                return s.getBBox(1)
            });
            if ("d" == b || "path" == b) return d = a.path.toCubic(f, c), {
                from: m(d[0]),
                to: m(d[1]),
                f: l(d[0])
            };
            if ("points" == b) return d = r(f).split(a._.separator), e = r(c).split(a._.separator), {
                from: d,
                to: e,
                f: function(a) {
                    return a
                }
            };
            if (n(f) && n(c)) return {
                from: parseFloat(f),
                to: parseFloat(c),
                f: h
            };
            var t = f.match(q),
                u = r(c).match(q);
            return t && o(t, u) ? {
                from: parseFloat(f),
                to: parseFloat(c),
                f: i(t)
            } : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: h
            }
        })
    }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, k = (function(a, b) {
                var c = "y" == a ? "scrollTop" : "scrollLeft",
                    d = b && b.node ? b.node.ownerDocument : e.doc;
                return d[c in d.documentElement ? "documentElement" : "body"][c]
            }), l = function() {
                return this.originalEvent.preventDefault()
            }, m = function() {
                return this.originalEvent.stopPropagation()
            }, n = function(a, b, c, d) {
                var e = h && j[b] ? j[b] : b,
                    f = function(e) {
                        var f = k("y", d),
                            i = k("x", d);
                        if (h && j[g](b))
                            for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++)
                                if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
                                    var p = e;
                                    e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
                                    break
                                }
                        var q = e.clientX + i,
                            r = e.clientY + f;
                        return c.call(d, e, q, r)
                    };
                return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                    function() {
                        return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                    }
            }, o = [], p = function(a) {
                for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
                    if (c = o[i], h) {
                        for (var j, l = a.touches && a.touches.length; l--;)
                            if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                                d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                                break
                            }
                    } else a.preventDefault();
                    var m = c.el.node;
                    m.nextSibling, m.parentNode, m.style.display;
                    d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
                }
            }, q = function(c) {
                a.unmousemove(p).unmouseup(q);
                for (var d, e = o.length; e--;) d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
                o = []
            }, r = i.length; r--;) ! function(b) {
            a[b] = f[b] = function(c, d) {
                if (a.is(c, "function")) this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: n(this.node || document, b, c, d || this)
                });
                else
                    for (var e = 0, f = this.events.length; f > e; e++)
                        if (this.events[e].name == b) try {
                            this.events[e].f.call(this)
                        } catch (g) {}
                return this
            }, a["un" + b] = f["un" + b] = function(a) {
                for (var c = this.events || [], d = c.length; d--;)
                    if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[r]);
        f.hover = function(a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function(a, b) {
            return this.unmouseover(a).unmouseout(b)
        };
        var s = [];
        f.drag = function(c, d, e, f, g, h) {
            function i(i, j, l) {
                (i.originalEvent || i).preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p).mouseup(q), o.push({
                    el: k,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i)
            }

            function j(a, c, d) {
                b("snap.draginit." + k.id, k, a, c, d)
            }
            var k = this;
            if (!arguments.length) {
                var l;
                return k.drag(function(a, b) {
                    this.attr({
                        transform: l + (l ? "T" : "t") + [a, b]
                    })
                }, function() {
                    l = this.transform().local
                })
            }
            return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
                el: k,
                start: i,
                init: j
            }), k.mousedown(j), k
        }, f.undrag = function() {
            for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
            return !s.length && a.unmousemove(p).unmouseup(q), this
        }
    }), d.plugin(function(a, c, d, e) {
        var f = (c.prototype, d.prototype),
            g = /^\s*url\((.+)\)/,
            h = String,
            i = a._.$;
        a.filter = {}, f.filter = function(b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(h(b)),
                f = a._.id(),
                g = (d.node.offsetWidth, d.node.offsetHeight, i("filter"));
            return i(g, {
                id: f,
                filterUnits: "userSpaceOnUse"
            }), g.appendChild(e.node), d.defs.appendChild(g), new c(g)
        }, b.on("snap.util.getattr.filter", function() {
            b.stop();
            var c = i(this.node, "filter");
            if (c) {
                var d = h(c).match(g);
                return d && a.select(d[1])
            }
        }), b.on("snap.util.attr.filter", function(d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (i(d.node, {
                    id: d.id
                }), e = d.id), i(this.node, {
                    filter: a.url(e)
                })
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function(b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [b, c];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            })
        }, a.filter.blur.toString = function() {
            return this()
        }, a.filter.shadow = function(b, c, d, e, f) {
            return null == f && (null == e ? (f = d, d = 4, e = "#000") : (f = e, e = d, d = 4)), null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d,
                opacity: f
            })
        }, a.filter.shadow.toString = function() {
            return this()
        }, a.filter.grayscale = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            })
        }, a.filter.grayscale.toString = function() {
            return this()
        }, a.filter.sepia = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            })
        }, a.filter.sepia.toString = function() {
            return this()
        }, a.filter.saturate = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - b
            })
        }, a.filter.saturate.toString = function() {
            return this()
        }, a.filter.hueRotate = function(b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: b
            })
        }, a.filter.hueRotate.toString = function() {
            return this()
        }, a.filter.invert = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            })
        }, a.filter.invert.toString = function() {
            return this()
        }, a.filter.brightness = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: b
            })
        }, a.filter.brightness.toString = function() {
            return this()
        }, a.filter.contrast = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            })
        }, a.filter.contrast.toString = function() {
            return this()
        }
    }), d.plugin(function(a, b, c, d, e) {
        var f = a._.box,
            g = a.is,
            h = /^[^a-z]*([tbmlrc])/i,
            i = function() {
                return "T" + this.dx + "," + this.dy
            };
        b.prototype.getAlign = function(a, b) {
            null == b && g(a, "string") && (b = a, a = null), a = a || this.paper;
            var c = a.getBBox ? a.getBBox() : f(a),
                d = this.getBBox(),
                e = {};
            switch (b = b && b.match(h), b = b ? b[1].toLowerCase() : "c") {
                case "t":
                    e.dx = 0, e.dy = c.y - d.y;
                    break;
                case "b":
                    e.dx = 0, e.dy = c.y2 - d.y2;
                    break;
                case "m":
                    e.dx = 0, e.dy = c.cy - d.cy;
                    break;
                case "l":
                    e.dx = c.x - d.x, e.dy = 0;
                    break;
                case "r":
                    e.dx = c.x2 - d.x2, e.dy = 0;
                    break;
                default:
                    e.dx = c.cx - d.cx, e.dy = 0
            }
            return e.toString = i, e
        }, b.prototype.align = function(a, b) {
            return this.transform("..." + this.getAlign(a, b))
        }
    }), d.plugin(function(b, c, d, e) {
        function f(a) {
            a = a.split(/(?=#)/);
            var b = new String(a[5]);
            return b[50] = a[0], b[100] = a[1], b[200] = a[2], b[300] = a[3], b[400] = a[4], b[500] = a[5], b[600] = a[6], b[700] = a[7], b[800] = a[8], b[900] = a[9], a[10] && (b.A100 = a[10], b.A200 = a[11], b.A400 = a[12], b.A700 = a[13]), b
        }
        var g = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
            h = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
            i = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
            j = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
            k = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
            l = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
            m = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
            n = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
            o = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
            p = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
            q = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
            r = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
            s = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
            t = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
            u = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
            v = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
            w = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
            x = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
            y = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
        b.mui = {}, b.flat = {}, b.mui.red = f(g), b.mui.pink = f(h), b.mui.purple = f(i), b.mui.deeppurple = f(j), b.mui.indigo = f(k), b.mui.blue = f(l), b.mui.lightblue = f(m), b.mui.cyan = f(n), b.mui.teal = f(o), b.mui.green = f(p), b.mui.lightgreen = f(q), b.mui.lime = f(r), b.mui.yellow = f(s), b.mui.amber = f(t), b.mui.orange = f(u), b.mui.deeporange = f(v), b.mui.brown = f(w), b.mui.grey = f(x), b.mui.bluegrey = f(y), b.flat.turquoise = "#1abc9c", b.flat.greensea = "#16a085", b.flat.sunflower = "#f1c40f", b.flat.orange = "#f39c12", b.flat.emerland = "#2ecc71", b.flat.nephritis = "#27ae60", b.flat.carrot = "#e67e22", b.flat.pumpkin = "#d35400", b.flat.peterriver = "#3498db", b.flat.belizehole = "#2980b9", b.flat.alizarin = "#e74c3c", b.flat.pomegranate = "#c0392b", b.flat.amethyst = "#9b59b6", b.flat.wisteria = "#8e44ad", b.flat.clouds = "#ecf0f1", b.flat.silver = "#bdc3c7", b.flat.wetasphalt = "#34495e", b.flat.midnightblue = "#2c3e50", b.flat.concrete = "#95a5a6", b.flat.asbestos = "#7f8c8d", b.importMUIColors = function() {
            for (var c in b.mui) b.mui.hasOwnProperty(c) && (a[c] = b.mui[c])
        }
    }), d
});

/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    e = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
                        delete a.cycle
                    },
                    f = function(a) {
                        if ("function" == typeof a) return a;
                        var b = "object" == typeof a ? a : {
                                each: a
                            },
                            c = b.ease,
                            d = b.from || 0,
                            e = b.base || 0,
                            f = {},
                            g = isNaN(d),
                            h = b.axis,
                            i = {
                                center: .5,
                                end: 1
                            }[d] || 0;
                        return function(a, j, k) {
                            var l, m, n, o, p, q, r, s, t, u = (k || b).length,
                                v = f[u];
                            if (!v) {
                                if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
                                    for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;);
                                    t--
                                }
                                for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
                                v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e
                            }
                            return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v
                        }
                    },
                    g = function(a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = g.prototype.render
                    },
                    h = 1e-8,
                    i = c._internals,
                    j = i.isSelector,
                    k = i.isArray,
                    l = g.prototype = c.to({}, .1, {}),
                    m = [];
                g.version = "2.1.2", l.constructor = g, l.kill()._gc = !1, g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf, g.getTweensOf = c.getTweensOf, g.lagSmoothing = c.lagSmoothing, g.ticker = c.ticker, g.render = c.render, g.distribute = f, l.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this)
                }, l.updateTo = function(a, b) {
                    var d, e = this,
                        f = e.ratio,
                        g = e.vars.immediateRender || a.immediateRender;
                    b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time, e._uncache(!1), e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay));
                    for (d in a) e.vars[d] = a[d];
                    if (e._initted || g)
                        if (b) e._initted = !1, g && e.render(0, !0, !0);
                        else if (e._gc && e._enabled(!0, !1), e._notifyPluginsOfEnabled && e._firstPT && c._onPluginEvent("_onDisable", e), e._time / e._duration > .998) {
                        var h = e._totalTime;
                        e.render(0, !0, !1), e._initted = !1, e.render(h, !0, !1)
                    } else if (e._initted = !1, e._init(), e._time > 0 || g)
                        for (var i, j = 1 / (1 - f), k = e._firstPT; k;) i = k.s + k.c, k.c *= j, k.s = i - k.c, k = k._next;
                    return e
                }, l.render = function(a, b, d) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var e, f, g, j, k, l, m, n, o, p = this,
                        q = p._dirty ? p.totalDuration() : p._totalDuration,
                        r = p._time,
                        s = p._totalTime,
                        t = p._cycle,
                        u = p._duration,
                        v = p._rawPrevTime;
                    if (a >= q - h && a >= 0 ? (p._totalTime = q, p._cycle = p._repeat, p._yoyo && 0 !== (1 & p._cycle) ? (p._time = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u, p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1), p._reversed || (e = !0, f = "onComplete", d = d || p._timeline.autoRemoveChildren), 0 === u && (p._initted || !p.vars.lazy || d) && (p._startTime === p._timeline._duration && (a = 0), (0 > v || 0 >= a && a >= -h || v === h && "isPause" !== p.data) && v !== a && (d = !0, v > h && (f = "onReverseComplete")), p._rawPrevTime = n = !b || a || v === a ? a : h)) : h > a ? (p._totalTime = p._time = p._cycle = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0, (0 !== s || 0 === u && v > 0) && (f = "onReverseComplete", e = p._reversed), a > -h ? a = 0 : 0 > a && (p._active = !1, 0 === u && (p._initted || !p.vars.lazy || d) && (v >= 0 && (d = !0), p._rawPrevTime = n = !b || a || v === a ? a : h)), p._initted || (d = !0)) : (p._totalTime = p._time = a, 0 !== p._repeat && (j = u + p._repeatDelay, p._cycle = p._totalTime / j >> 0, 0 !== p._cycle && p._cycle === p._totalTime / j && a >= s && p._cycle--, p._time = p._totalTime - p._cycle * j, p._yoyo && 0 !== (1 & p._cycle) && (p._time = u - p._time, o = p._yoyoEase || p.vars.yoyoEase, o && (p._yoyoEase || (o !== !0 || p._initted ? p._yoyoEase = o = o === !0 ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease, p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)), p._time > u ? p._time = u : p._time < 0 && (p._time = 0)), p._easeType && !o ? (k = p._time / u, l = p._easeType, m = p._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))), r === p._time && !d && t === p._cycle) return void(s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
                    if (!p._initted) {
                        if (p._init(), !p._initted || p._gc) return;
                        if (!d && p._firstPT && (p.vars.lazy !== !1 && p._duration || p.vars.lazy && !p._duration)) return p._time = r, p._totalTime = s, p._rawPrevTime = v, p._cycle = t, i.lazyTweens.push(p), void(p._lazy = [a, b]);
                        !p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u)
                    }
                    for (p._lazy !== !1 && (p._lazy = !1), p._active || !p._paused && p._time !== r && a >= 0 && (p._active = !0), 0 === s && (2 === p._initted && a > 0 && p._init(), p._startAt && (a >= 0 ? p._startAt.render(a, !0, d) : f || (f = "_dummyGS")), p.vars.onStart && (0 !== p._totalTime || 0 === u) && (b || p._callback("onStart"))), g = p._firstPT; g;) g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s, g = g._next;
                    p._onUpdate && (0 > a && p._startAt && p._startTime && p._startAt.render(a, !0, d), b || (p._totalTime !== s || f) && p._callback("onUpdate")), p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")), f && (!p._gc || d) && (0 > a && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d), e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[f] && p._callback(f), 0 === u && p._rawPrevTime === h && n !== h && (p._rawPrevTime = 0))
                }, g.to = function(a, b, c) {
                    return new g(a, b, c)
                }, g.from = function(a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new g(a, b, c)
                }, g.fromTo = function(a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new g(a, b, d)
                }, g.staggerTo = g.allTo = function(a, b, h, i, l, n, o) {
                    var p, q, r, s, t = [],
                        u = f(h.stagger || i),
                        v = h.cycle,
                        w = (h.startAt || m).cycle;
                    for (k(a) || ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a))), a = a || [], p = a.length - 1, r = 0; p >= r; r++) {
                        q = {};
                        for (s in h) q[s] = h[s];
                        if (v && (e(q, a, r), null != q.duration && (b = q.duration, delete q.duration)), w) {
                            w = q.startAt = {};
                            for (s in h.startAt) w[s] = h.startAt[s];
                            e(q.startAt, a, r)
                        }
                        q.delay = u(r, a[r], a) + (q.delay || 0), r === p && l && (q.onComplete = function() {
                            h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(o || h.callbackScope || this, n || m)
                        }), t[r] = new g(a[r], b, q)
                    }
                    return t
                }, g.staggerFrom = g.allFrom = function(a, b, c, d, e, f, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, g.staggerTo(a, b, c, d, e, f, h)
                }, g.staggerFromTo = g.allFromTo = function(a, b, c, d, e, f, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, g.staggerTo(a, b, d, e, f, h, i)
                }, g.delayedCall = function(a, b, c, d, e) {
                    return new g(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        callbackScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        immediateRender: !1,
                        useFrames: e,
                        overwrite: 0
                    })
                }, g.set = function(a, b) {
                    return new g(a, 0, b)
                }, g.isTweening = function(a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var n = function(a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(n(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    o = g.getAllTweens = function(b) {
                        return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b))
                    };
                g.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = o(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, g.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var e, f, h, l, m, n = i.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a)), k(a))
                            for (l = a.length; --l > -1;) g.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (h in n)
                                for (f = n[h].target.parentNode; f;) f === a && (e = e.concat(n[h].tweens)), f = f.parentNode;
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(a, c, d, e) {
                    c = c !== !1, d = d !== !1, e = e !== !1;
                    for (var f, g, h = o(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return g.pauseAll = function(a, b, c) {
                    p(!0, a, b, c)
                }, g.resumeAll = function(a, b, c) {
                    p(!1, a, b, c)
                }, g.globalTimeScale = function(b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || h, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, l.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                }, l.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                }, l.time = function(a, b) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var c = this._duration,
                        d = this._cycle,
                        e = d * (c + this._repeatDelay);
                    return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b)
                }, l.duration = function(b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, l.totalDuration = function(a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, g
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a);
                        var c, d, e = this,
                            f = e.vars;
                        e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, e._sortChildren = !0, e._onUpdate = f.onUpdate;
                        for (d in f) c = f[d], i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
                        i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger)
                    },
                    e = 1e-8,
                    f = c._internals,
                    g = d._internals = {},
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function(a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    n = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
                        delete a.cycle
                    },
                    o = g.pauseCallback = function() {},
                    p = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    q = function(a, b, c, d) {
                        var e = "immediateRender";
                        return e in b || (b[e] = !(c && c[e] === !1 || d)), b
                    },
                    r = function(a) {
                        if ("function" == typeof a) return a;
                        var b = "object" == typeof a ? a : {
                                each: a
                            },
                            c = b.ease,
                            d = b.from || 0,
                            e = b.base || 0,
                            f = {},
                            g = isNaN(d),
                            h = b.axis,
                            i = {
                                center: .5,
                                end: 1
                            }[d] || 0;
                        return function(a, j, k) {
                            var l, m, n, o, p, q, r, s, t, u = (k || b).length,
                                v = f[u];
                            if (!v) {
                                if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
                                    for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;);
                                    t--
                                }
                                for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
                                v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e
                            }
                            return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v
                        }
                    },
                    s = d.prototype = new b;
                return d.version = "2.1.2", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = !1, s.to = function(a, b, d, e) {
                    var f = d.repeat && l.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }, s.from = function(a, b, d, e) {
                    return this.add((d.repeat && l.TweenMax || c).from(a, b, q(this, d)), e)
                }, s.fromTo = function(a, b, d, e, f) {
                    var g = e.repeat && l.TweenMax || c;
                    return e = q(this, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, s.staggerTo = function(a, b, e, f, g, i, j, k) {
                    var l, o, q = new d({
                            onComplete: i,
                            onCompleteParams: j,
                            callbackScope: k,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        s = r(e.stagger || f),
                        t = e.startAt,
                        u = e.cycle;
                    for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), o = 0; o < a.length; o++) l = m(e), t && (l.startAt = m(t), t.cycle && n(l.startAt, a, o)), u && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
                    return this.add(q, g)
                }, s.staggerFrom = function(a, b, c, d, e, f, g, h) {
                    return c.runBackwards = !0, this.staggerTo(a, b, q(this, c), d, e, f, g, h)
                }, s.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, this.staggerTo(a, b, q(this, d, c), e, f, g, h, i)
                }, s.call = function(a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, s.set = function(a, b, d) {
                    return this.add(new c(a, 0, q(this, b, null, !0)), d)
                }, d.exportRoot = function(a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g, h, i = new d(a),
                        j = i._timeline;
                    for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
                    return j.add(i, 0), e && i.totalDuration(), i
                }, s.add = function(e, f, g, h) {
                    var j, k, l, m, n, o, p = this;
                    if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) {
                            for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                                tweens: m
                            })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                            return p._uncache(!0)
                        }
                        if ("string" == typeof e) return p.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime > 1e-5) && e.render(j, !1, !1)), (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration())
                        for (n = p, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return p
                }, s.remove = function(b) {
                    if (b instanceof a) {
                        this._remove(b, !1);
                        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
                    }
                    if (b instanceof Array || b && b.push && i(b)) {
                        for (var d = b.length; --d > -1;) this.remove(b[d]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, s._remove = function(a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, s.append = function(a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, s.insert = s.insertMultiple = function(a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, s.appendMultiple = function(a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, s.addLabel = function(a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, s.addPause = function(a, b, d, e) {
                    var f = c.delayedCall(0, o, d, e || this);
                    return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
                }, s.removeLabel = function(a) {
                    return delete this._labels[a], this
                }, s.getLabelTime = function(a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, s._parseTimeOrLabel = function(b, c, d, e) {
                    var f, g;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                    if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
                    else {
                        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                    }
                    return Number(b) + c
                }, s.seek = function(a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, s.stop = function() {
                    return this.paused(!0)
                }, s.gotoAndPlay = function(a, b) {
                    return this.play(a, b)
                }, s.gotoAndStop = function(a, b) {
                    return this.pause(a, b)
                }, s.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, l, m, n, o = this,
                        p = o._time,
                        q = o._dirty ? o.totalDuration() : o._totalDuration,
                        r = o._startTime,
                        s = o._timeScale,
                        t = o._paused;
                    if (p !== o._time && (a += o._time - p), a >= q - e && a >= 0) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (0 >= a && a >= -e || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0, o._rawPrevTime > e && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, a = q + 1e-4;
                    else if (e > a)
                        if (o._totalTime = o._time = 0, a > -e && (a = 0), (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (o._rawPrevTime > 0 || 0 > a && o._rawPrevTime >= 0)) && (h = "onReverseComplete", f = o._reversed), 0 > a) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, h = "onReverseComplete") : o._rawPrevTime >= 0 && o._first && (i = !0), o._rawPrevTime = a;
                        else {
                            if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = o._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, o._initted || (i = !0)
                        }
                    else {
                        if (o._hasPause && !o._forcingPlayhead && !b) {
                            if (a >= p)
                                for (d = o._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), d = d._next;
                            else
                                for (d = o._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                            l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + a / o._timeScale)
                        }
                        o._totalTime = o._time = o._rawPrevTime = a
                    }
                    if (o._time !== p && o._first || c || i || l) {
                        if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && a > 0 && (o._active = !0), 0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), m = o._time, m >= p)
                            for (d = o._first; d && (g = d._next, m === o._time && (!o._paused || t));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t));) {
                                if (d._active || d._startTime <= p && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > o._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                        l = null, o.pause(), o._pauseTime = n
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = g
                            }
                        o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || (r === o._startTime || s !== o._timeScale) && (0 === o._time || q >= o.totalDuration()) && (f && (j.length && k(), o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)))
                    }
                }, s._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, s.getChildren = function(a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, s.getTweensOf = function(a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, s.recent = function() {
                    return this._recent
                }, s._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, s.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, s._kill = function(a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, s.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, s.invalidate = function() {
                    for (var b = this._first; b;) b.invalidate(), b = b._next;
                    return a.prototype.invalidate.call(this)
                }, s._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, s.totalTime = function(b, c, d) {
                    this._forcingPlayhead = !0;
                    var e = a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, s.duration = function(a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, s.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f;) b = f._prev, f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), c = f._startTime + f._totalDuration / f._timeScale, c > d && (d = c), f = b;
                            e._duration = e._totalDuration = d, e._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                }, s.paused = function(b) {
                    if (b === !1 && this._paused)
                        for (var c = this._first; c;) c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                    return a.prototype.paused.apply(this, arguments)
                }, s.usesFrames = function() {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, s.rawTime = function(a) {
                    return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
                }, d
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                    },
                    e = 1e-8,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = d.prototype = new a;
                return k.constructor = d, k.kill()._gc = !1, d.version = "2.1.2", k.invalidate = function() {
                    return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, k.addCallback = function(a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, k.removeCallback = function(a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, k.removePause = function(b) {
                    return this.removeCallback(a._internals.pauseCallback, b)
                }, k.tweenTo = function(a, c) {
                    c = c || {};
                    var d, e, f, g = {
                            ease: j,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        h = c.repeat && i.TweenMax || b;
                    for (e in c) g[e] = c[e];
                    return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function() {
                        f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
                    }, f
                }, k.tweenFromTo = function(a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        callbackScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, k.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, i, j, k, l, m, n, o, p = this,
                        q = p._time,
                        r = p._dirty ? p.totalDuration() : p._totalDuration,
                        s = p._duration,
                        t = p._totalTime,
                        u = p._startTime,
                        v = p._timeScale,
                        w = p._rawPrevTime,
                        x = p._paused,
                        y = p._cycle;
                    if (q !== p._time && (a += p._time - q), a >= r - e && a >= 0) p._locked || (p._totalTime = r, p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (0 >= a && a >= -e || 0 > w || w === e) && w !== a && p._first && (k = !0, w > e && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e, p._yoyo && 1 & p._cycle ? p._time = a = 0 : (p._time = s, a = s + 1e-4);
                    else if (e > a)
                        if (p._locked || (p._totalTime = p._cycle = 0), p._time = 0, a > -e && (a = 0), (0 !== q || 0 === s && w !== e && (w > 0 || 0 > a && w >= 0) && !p._locked) && (j = "onReverseComplete", f = p._reversed), 0 > a) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, j = "onReverseComplete") : w >= 0 && p._first && (k = !0), p._rawPrevTime = a;
                        else {
                            if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = p._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, p._initted || (k = !0)
                        }
                    else if (0 === s && 0 > w && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && a >= t && p._cycle--, p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), p._time > s ? (p._time = s, a = s + 1e-4) : p._time < 0 ? p._time = a = 0 : a = p._time)), p._hasPause && !p._forcingPlayhead && !b) {
                        if (a = p._time, a >= q || p._repeat && y !== p._cycle)
                            for (d = p._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), d = d._next;
                        else
                            for (d = p._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                        m && (o = p._startTime + m._startTime / p._timeScale, m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)))
                    }
                    if (p._cycle !== y && !p._locked) {
                        var z = p._yoyo && 0 !== (1 & y),
                            A = z === (p._yoyo && 0 !== (1 & p._cycle)),
                            B = p._totalTime,
                            C = p._cycle,
                            D = p._rawPrevTime,
                            E = p._time;
                        if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, p._callback("onRepeat")), q !== p._time) return;
                        if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -1e-4, p.render(q, !0, !1)), p._locked = !1, p._paused && !x) return;
                        p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D
                    }
                    if (!(p._time !== q && p._first || c || k || m)) return void(t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
                    if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && a > 0 && (p._active = !0), 0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), n = p._time, n >= q)
                        for (d = p._first; d && (i = d._next, n === p._time && (!p._paused || x));)(d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
                    else
                        for (d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x));) {
                            if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                                if (m === d) {
                                    for (m = d._prev; m && m.endTime() > p._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                                    m = null, p.pause(), p._pauseTime = o
                                }
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                            }
                            d = i
                        }
                    p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))), j && (p._locked || p._gc || (u === p._startTime || v !== p._timeScale) && (0 === p._time || r >= p.totalDuration()) && (f && (g.length && h(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)))
                }, k.getActive = function(a, b, c) {
                    var d, e, f = [],
                        g = this.getChildren(a || null == a, b || null == a, !!c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, k.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, k.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, k.getLabelsArray = function() {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function(a, b) {
                        return a.time - b.time
                    }), b
                }, k.invalidate = function() {
                    return this._locked = !1, a.prototype.invalidate.call(this)
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0
                }, k.totalDuration = function(b) {
                    return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, k.time = function(a, b) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var c = this._duration,
                        d = this._cycle,
                        e = d * (c + this._repeatDelay);
                    return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b)
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, k.currentLabel = function(a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e)
                }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function(a, b, c, d) {
                        c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, e, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function(a, d, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    l = function(a, f, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                }
                            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n]);
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function(a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                                    d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (b < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                    this._s1 = l[e - 1], this._si = e
                                } else if (b < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, x = this._autoRotate;
                                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function() {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new p;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x ? [
                                    ["x", "y", "rotation", j, !1]
                                ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, q._mod = function(a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b)
                }, q._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var c, d, e, f, g = function() {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = g.prototype = new a("css");
                j.constructor = g, g.version = "2.1.0", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    width: j,
                    height: j,
                    fontSize: j,
                    padding: j,
                    margin: j,
                    perspective: j,
                    lineHeight: ""
                };
                var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    y = /opacity:([^;]*)/i,
                    z = /alpha\(opacity *=.+?\)/i,
                    A = /^(rgb|hsl)/,
                    B = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function(a, b) {
                        return b.toUpperCase()
                    },
                    F = /(?:Left|Right|Width)/i,
                    G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    K = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    N = {
                        style: {}
                    },
                    O = _gsScope.document || {
                        createElement: function() {
                            return N
                        }
                    },
                    P = function(a, b) {
                        return b && O.createElementNS ? O.createElementNS(b, a) : O.createElement(a)
                    },
                    Q = P("div"),
                    R = P("img"),
                    S = g._internals = {
                        _specialProps: i
                    },
                    T = (_gsScope.navigator || {}).userAgent || "",
                    U = function() {
                        var a = T.indexOf("Android"),
                            b = P("a");
                        return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
                    }(),
                    V = function(a) {
                        return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(a) {
                        _gsScope.console && console.log(a)
                    },
                    X = "",
                    Y = "",
                    Z = function(a, b) {
                        b = b || Q;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
                    },
                    $ = "undefined" != typeof window ? window : O.defaultView || {
                        getComputedStyle: function() {}
                    },
                    _ = function(a) {
                        return $.getComputedStyle(a)
                    },
                    aa = g.getStyle = function(a, b, c, d, e) {
                        var f;
                        return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || _(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
                    },
                    ba = S.convertToPixels = function(a, c, d, e, f) {
                        if ("px" === e || !e && "lineHeight" !== c) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = F.test(c),
                            l = a,
                            m = Q.style,
                            n = 0 > d,
                            o = 1 === d;
                        if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                            if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (m.cssText = "border:0 solid red;position:" + aa(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (l = a.parentNode || O.body, -1 !== aa(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                    m[k ? "width" : "height"] = d + e
                                }
                                l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = ba(a, c, d, e, !0))
                            }
                        else i = _(a).lineHeight, a.style.lineHeight = d, h = parseFloat(_(a).lineHeight), a.style.lineHeight = i;
                        return o && (h /= 100), n ? -h : h
                    },
                    ca = S.calculateOffset = function(a, b, c) {
                        if ("absolute" !== aa(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = aa(a, "margin" + d, c);
                        return a["offset" + d] - (ba(a, b, parseFloat(e), e.replace(w, "")) || 0)
                    },
                    da = function(a, b) {
                        var c, d, e, f = {};
                        if (b = b || _(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Ea === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                            else
                                for (c in b)(-1 === c.indexOf("Transform") || Da === c) && (f[c] = b[c]);
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                        return U || (f.opacity = V(a)), d = Sa(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ga && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                    },
                    ea = function(a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ca(a, g), void 0 !== j[g] && (h = new ta(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    fa = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ga = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ha = function(a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || _(a))[b] || 0;
                        if (a.getCTM && Pa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = fa[b],
                            f = e.length;
                        for (c = c || _(a, null); --f > -1;) d -= parseFloat(aa(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(aa(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ia = function(a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c, d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) {
                            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ia(d[c]));
                            return a.join(",")
                        }
                        return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
                    },
                    ja = function(a, b) {
                        return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                    },
                    ka = function(a, b) {
                        "function" == typeof a && (a = a(r, q));
                        var c = "string" == typeof a && "=" === a.charAt(1);
                        return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                    },
                    la = function(a, b, c, d) {
                        var e, f, g, h, i, j = 1e-6;
                        return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
                    },
                    ma = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    na = function(a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                    },
                    oa = g.parseColor = function(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                            else {
                                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ma[a]) c = ma[a];
                                else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                                else if ("hsl" === a.substr(0, 3))
                                    if (c = m = a.match(s), b) {
                                        if (-1 !== a.indexOf("=")) return a.match(t)
                                    } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = na(g + 1 / 3, d, e), c[1] = na(g, d, e), c[2] = na(g - 1 / 3, d, e);
                                else c = a.match(s) || ma.transparent;
                                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                            }
                        else c = ma.black;
                        return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                    },
                    pa = function(a, b) {
                        var c, d, e, f = a.match(qa) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = oa(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                        return h + a.substr(g)
                    },
                    qa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in ma) qa += "|" + j + "\\b";
                qa = new RegExp(qa + ")", "gi"), g.colorStringFilter = function(a) {
                    var b, c = a[0] + " " + a[1];
                    qa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = pa(a[0], b), a[1] = pa(a[1], b)), qa.lastIndex = 0
                }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var ra = function(a, b, c, d) {
                        if (null == a) return function(a) {
                            return a
                        };
                        var e, f = b ? (a.match(qa) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k ? e = b ? function(a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(qa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function(a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(u) || [], m = b.length, k > m--)
                                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                            return h + b.join(j) + i
                        } : function(a) {
                            return a
                        }
                    },
                    sa = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    ta = (S._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                        if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a)
                            for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                if (c = i.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c[f] = e
                                    }
                                } else c[f] = c.s + c.xs0;
                                i = i._next
                            }
                    }, function(a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ua = (S._parseToProxy = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = M;
                        for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new ta(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new ta(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ua || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    va = function(a, b, c, d, e, f) {
                        var g = new ua(a, b, c, d - c, e, -1, f);
                        return g.b = c, g.e = g.xs0 = d, g
                    },
                    wa = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                        c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ua(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && qa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                        var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = k !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, qa.lastIndex = 0, m = 0; F > m; m++)
                            if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ja(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);
                            else if (e && qa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = oa(p, C), u = oa(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ja(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ja(u[1], p[1]), "%,", !1).appendXtra("", p[2], ja(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), qa.lastIndex = 0;
                        else if (v = p.match(s)) {
                            if (w = u.match(t), !w || w.length !== v.length) return h;
                            for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ja(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
                            h["xs" + h.l] += p.substr(o)
                        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m]
                        }
                        return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                    },
                    xa = 9;
                for (j = ua.prototype, j.l = j.pr = 0; --xa > 0;) j["xn" + xa] = 0, j["xs" + xa] = "";
                j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ua(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var ya = function(a, b) {
                        b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || ra(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.allowFunc = b.allowFunc, this.pr = b.priority || 0
                    },
                    za = S._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new ya(f[d], b)
                    },
                    Aa = S._registerPluginProp = function(a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            za(a, {
                                parser: function(a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                j = ya.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return wa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, j.parse = function(a, b, c, d, f, g, h) {
                    return this.parseComplex(a.style, this.format(aa(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function(a, b, c) {
                    za(a, {
                        parser: function(a, d, e, f, g, h, i) {
                            var j = new ua(a, e, 0, 0, g, 2, e, !1, c);
                            return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                        },
                        priority: c
                    })
                }, g.useSVGTransformAttr = !0;
                var Ba, Ca = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Da = Z("transform"),
                    Ea = X + "transform",
                    Fa = Z("transformOrigin"),
                    Ga = null !== Z("perspective"),
                    Ha = S.Transform = function() {
                        this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Ga ? g.defaultForce3D || "auto" : !1
                    },
                    Ia = _gsScope.SVGElement,
                    Ja = function(a, b, c) {
                        var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e
                    },
                    Ka = O.documentElement || {},
                    La = function() {
                        var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
                        return O.createElementNS && !d && (a = Ja("svg", Ka), b = Ja("rect", a, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), c = b.getBoundingClientRect().width, b.style[Fa] = "50% 50%", b.style[Da] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ga), Ka.removeChild(a)), d
                    }(),
                    Ma = function(a, b, c, d, e, f) {
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                            w = Ra(a, !0);
                        v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                            x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                            y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), b = ia(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Qa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                    },
                    Na = function(a) {
                        var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if (Ka.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                            b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Na
                        } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), Ka.removeChild(c), this.style.cssText = f, b
                    },
                    Oa = function(a) {
                        try {
                            return a.getBBox()
                        } catch (b) {
                            return Na.call(a, !0)
                        }
                    },
                    Pa = function(a) {
                        return !(!Ia || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Oa(a))
                    },
                    Qa = [1, 0, 0, 1, 0, 0],
                    Ra = function(a, b) {
                        var c, d, e, f, g, h, i, j = a._gsTransform || new Ha,
                            k = 1e5,
                            l = a.style;
                        if (Da ? d = aa(a, Ea, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), j.x || 0, j.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, Da && c && !a.offsetParent && (f = l.display, l.display = "block", i = a.parentNode, i && a.offsetParent || (g = 1, h = a.nextSibling, Ka.appendChild(a)), d = aa(a, Ea, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? l.display = f : Wa(l, "display"), g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : Ka.removeChild(a))), (j.svg || a.getCTM && Pa(a)) && (c && -1 !== (l[Da] + "").indexOf("matrix") && (d = l[Da], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Qa;
                        for (e = (d || "").match(s) || [], xa = e.length; --xa > -1;) f = Number(e[xa]), e[xa] = (g = f - (f |= 0)) ? (g * k + (0 > g ? -.5 : .5) | 0) / k + f : f;
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                    },
                    Sa = S.getTransform = function(a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f, h, i, j, k, l, m = d ? a._gsTransform || new Ha : new Ha,
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Ga ? parseFloat(aa(a, Fa, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (m.svg = !(!a.getCTM || !Pa(a)), m.svg && (Ma(a, aa(a, Fa, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Ba = g.useSVGTransformAttr || La), f = Ra(a), f !== Qa) {
                            if (16 === f.length) {
                                var s, t, u, v, w, x = f[0],
                                    y = f[1],
                                    z = f[2],
                                    A = f[3],
                                    B = f[4],
                                    C = f[5],
                                    D = f[6],
                                    E = f[7],
                                    F = f[8],
                                    G = f[9],
                                    H = f[10],
                                    I = f[12],
                                    J = f[13],
                                    K = f[14],
                                    M = f[11],
                                    N = Math.atan2(D, H);
                                m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                            } else if (!Ga || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ga && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                            }
                            Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                        }
                        return d && (a._gsTransform = m, m.svg && (Ba && a.style[Da] ? b.delayedCall(.001, function() {
                            Wa(a.style, Da)
                        }) : !Ba && a.getAttribute("transform") && b.delayedCall(.001, function() {
                            a.removeAttribute("transform")
                        }))), m
                    },
                    Ta = function(a) {
                        var b, c, d = this.data,
                            e = -d.rotation * K,
                            f = e + d.skewX * K,
                            g = 1e5,
                            h = (Math.cos(e) * d.scaleX * g | 0) / g,
                            i = (Math.sin(e) * d.scaleX * g | 0) / g,
                            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                            k = (Math.cos(f) * d.scaleY * g | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, o, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + q * d.xPercent / 100,
                                v = d.y + r * d.yPercent / 100;
                            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > p ? 1 : -1;
                                for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), xa = 0; 4 > xa; xa++) z = ga[xa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : ba(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > xa ? -d.ieOffsetX : -d.ieOffsetY : 2 > xa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === xa || 2 === xa ? 1 : B))) + "px"
                            }
                        }
                    },
                    Ua = S.set3DTransformRatio = S.setTransformRatio = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                            A = this.t.style,
                            B = z.rotation,
                            C = z.rotationX,
                            D = z.rotationY,
                            E = z.scaleX,
                            F = z.scaleY,
                            G = z.scaleZ,
                            H = z.x,
                            I = z.y,
                            J = z.z,
                            L = z.svg,
                            M = z.perspective,
                            N = z.force3D,
                            O = z.skewY,
                            P = z.skewX;
                        if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Ba && L || !Ga) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Ba && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Ba ? this.t.setAttribute("transform", "matrix(" + u) : A[Da] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Da] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                        if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                        else {
                            if (!(D || C || 1 !== G || M || L)) return void(A[Da] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                            c = g = 1, d = f = 0
                        }
                        k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Da] = u
                    };
                j = Ha.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,
                    j.scaleX = j.scaleY = j.scaleZ = 1, za("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(a, b, c, d, f, h, i) {
                            if (d._lastParsedTransform === i) return f;
                            d._lastParsedTransform = i;
                            var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
                            j && (i.scale = j(r, a));
                            var k, l, m, n, o, p, s, t, u, v = a._gsTransform,
                                w = a.style,
                                x = 1e-6,
                                y = Ca.length,
                                z = i,
                                A = {},
                                B = "transformOrigin",
                                C = Sa(a, e, !0, z.parseTransform),
                                D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
                            if (C.skewType = z.skewType || C.skewType || g.defaultSkewType, d._transform = C, "rotationZ" in z && (z.rotation = z.rotationZ), D && "string" == typeof D && Da) l = Q.style, l[Da] = D, l.display = "block", l.position = "absolute", -1 !== D.indexOf("%") && (l.width = aa(a, "width"), l.height = aa(a, "height")), O.body.appendChild(Q), k = Sa(Q, null, !1), "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * K)), C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, Ma(a, ia(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Ra(Q, !0), k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), O.body.removeChild(Q), k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = ka(z.xPercent, C.xPercent)), null != z.yPercent && (k.yPercent = ka(z.yPercent, C.yPercent));
                            else if ("object" == typeof z) {
                                if (k = {
                                        scaleX: ka(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
                                        scaleY: ka(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
                                        scaleZ: ka(z.scaleZ, C.scaleZ),
                                        x: ka(z.x, C.x),
                                        y: ka(z.y, C.y),
                                        z: ka(z.z, C.z),
                                        xPercent: ka(z.xPercent, C.xPercent),
                                        yPercent: ka(z.yPercent, C.yPercent),
                                        perspective: ka(z.transformPerspective, C.perspective)
                                    }, o = z.directionalRotation, null != o)
                                    if ("object" == typeof o)
                                        for (l in o) z[l] = o[l];
                                    else z.rotation = o;
                                "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = ka(z.x, C.xPercent)), "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = ka(z.y, C.yPercent)), k.rotation = la("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A), Ga && (k.rotationX = la("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), k.rotationY = la("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), k.skewX = la(z.skewX, C.skewX), k.skewY = la(z.skewY, C.skewY)
                            }
                            for (Ga && null != z.force3D && (C.force3D = z.force3D, n = !0), m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, m || null == z.scale || (k.scaleZ = 1); --y > -1;) u = Ca[y], D = k[u] - C[u], (D > x || -x > D || null != z[u] || null != M[u]) && (n = !0, f = new ua(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                            return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r, q) : z.transformOrigin, C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Ma(a, ia(D), k, z.svgOrigin, z.smoothOrigin), f = va(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = va(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), (p !== C.xOffset || s !== C.yOffset) && (f = va(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), f = va(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = "0px 0px"), (D || Ga && m && C.zOrigin) && (Da ? (n = !0, u = Fa, D || (D = (aa(a, u, e, !1, "50% 50%") + "").split(" "), D = D[0] + " " + D[1] + " " + C.zOrigin + "px"), D += "", f = new ua(w, u, 0, 0, f, -1, B), f.b = w[u], f.plugin = h, Ga ? (l = C.zOrigin, D = D.split(" "), C.zOrigin = (D.length > 2 ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", f = new ua(C, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ia(D + "", C)), n && (d._transformType = C.svg && Ba || !m && 3 !== this._transformType ? 2 : 3), j && (i.scale = j), f
                        },
                        allowFunc: !0,
                        prefix: !0
                    }), za("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), za("clipPath", {
                        defaultValue: "inset(0px)",
                        prefix: !0,
                        multi: !0,
                        formatter: ra("inset(0px 0px 0px 0px)", !1, !0)
                    }), za("borderRadius", {
                        defaultValue: "0px",
                        parser: function(a, b, c, f, g, h) {
                            b = this.format(b);
                            var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                z = a.style;
                            for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = aa(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = ba(a, "borderLeft", o, t), w = ba(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = ba(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = wa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                            return g
                        },
                        prefix: !0,
                        formatter: ra("0px 0px 0px 0px", !1, !0)
                    }), za("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(a, b, c, d, f, g) {
                            return wa(a.style, c, this.format(aa(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                        },
                        prefix: !0,
                        formatter: ra("0px 0px", !1, !0)
                    }), za("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(a, b, c, d, f, g) {
                            var h, i, j, k, l, m, n = "background-position",
                                o = e || _(a, null),
                                q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                                r = this.format(b);
                            if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = aa(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                                for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                                q = h.join(" ")
                            }
                            return this.parseComplex(a.style, q, r, f, g)
                        },
                        formatter: ia
                    }), za("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(a) {
                            return a += "", "co" === a.substr(0, 2) ? a : ia(-1 === a.indexOf(" ") ? a + " " + a : a)
                        }
                    }), za("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), za("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), za("transformStyle", {
                        prefix: !0
                    }), za("backfaceVisibility", {
                        prefix: !0
                    }), za("userSelect", {
                        prefix: !0
                    }), za("margin", {
                        parser: sa("marginTop,marginRight,marginBottom,marginLeft")
                    }), za("padding", {
                        parser: sa("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), za("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(a, b, c, d, f, g) {
                            var h, i, j;
                            return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(aa(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                        }
                    }), za("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), za("autoRound,strictUnits", {
                        parser: function(a, b, c, d, e) {
                            return e
                        }
                    }), za("border", {
                        defaultValue: "0px solid #000",
                        parser: function(a, b, c, d, f, g) {
                            var h = aa(a, "borderTopWidth", e, !1, "0px"),
                                i = this.format(b).split(" "),
                                j = i[0].replace(w, "");
                            return "px" !== j && (h = parseFloat(h) / ba(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + aa(a, "borderTopStyle", e, !1, "solid") + " " + aa(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                        },
                        color: !0,
                        formatter: function(a) {
                            var b = a.split(" ");
                            return b[0] + " " + (b[1] || "solid") + " " + (a.match(qa) || ["#000"])[0]
                        }
                    }), za("borderWidth", {
                        parser: sa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), za("float,cssFloat,styleFloat", {
                        parser: function(a, b, c, d, e, f) {
                            var g = a.style,
                                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                            return new ua(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                        }
                    });
                var Va = function(a) {
                    var b, c = this.t,
                        d = c.filter || aa(this.data, "filter") || "",
                        e = this.s + this.c * a | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !aa(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
                };
                za("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, f, g) {
                        var h = parseFloat(aa(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === aa(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ua(i, "opacity", h, b - h, f) : (f = new ua(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Va), j && (f = new ua(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Wa = function(a, b) {
                        b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
                    },
                    Xa = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Wa(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                za("className", {
                    parser: function(a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ua(a, d, 0, 0, g, 2), g.setRatio = Xa, g.pr = -11, c = !0, g.b = o, k = da(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = ea(a, k, da(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                    }
                });
                var Ya = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f, g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) g.cssText = "", e = !0;
                        else
                            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Fa : i[c].p), Wa(g, c);
                        e && (Wa(g, Da), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (za("clearProps", {
                        parser: function(a, b, d, e, f) {
                            return f = new ua(a, d, 0, 0, f, 2), f.setRatio = Ya, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), xa = j.length; xa--;) Aa(j[xa]);
                j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
                    if (!a.nodeType) return !1;
                    this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = _(a, ""), f = this._overwriteProps;
                    var n, p, s, t, u, v, w, x, z, A = a.style;
                    if (l && "" === A.zIndex && (n = aa(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = da(a, e), A.cssText = t + ";" + b, n = ea(a, n, da(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                        for (z = 3 === this._transformType, Da ? m && (l = !0, "" === A.zIndex && (w = aa(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                        x = new ua(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Da ? Ua : Ta, x.data = this._transform || Sa(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                    }
                    if (c) {
                        for (; p;) {
                            for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                            (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                        }
                        this._firstPT = t
                    }
                    return !0
                }, j.parse = function(a, b, c, f) {
                    var g, h, j, l, m, n, o, p, s, t, u = a.style;
                    for (g in b) {
                        if (n = b[g], h = i[g], "function" != typeof n || h && h.allowFunc || (n = n(r, q)), h) c = h.parse(a, n, g, this, c, f, b);
                        else {
                            if ("--" === g.substr(0, 2)) {
                                this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", _(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                continue
                            }
                            m = aa(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = oa(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = wa(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = wa(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ha(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ca(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = ba(a, g, j, o), "%" === p ? (j /= ba(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ba(a, g, 1, p) : "px" !== p && (l = ba(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ua(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ua(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
                        }
                        f && c && !c.plugin && (c.plugin = f)
                    }
                    return c
                }, j.setRatio = function(a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (b = e.r(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next
                            }
                }, j._enableTransforms = function(a) {
                    this._transform = this._transform || Sa(this._target, e, !0), this._transformType = this._transform.svg && Ba || !a && 3 !== this._transformType ? 2 : 3
                };
                var Za = function(a) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                j._addLazySet = function(a, b, c) {
                    var d = this._firstPT = new ua(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = Za, d.data = this
                }, j._linkCSSP = function(a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, j._mod = function(a) {
                    for (var b = this._firstPT; b;) "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next
                }, j._kill = function(b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                    return a.prototype._kill.call(this, f)
                };
                var $a = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) $a(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(da(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || $a(f, b, c)
                };
                return g.cascadeTo = function(a, c, d) {
                    var e, f, g, h, i = b.to(a, c, d),
                        j = [i],
                        k = [],
                        l = [],
                        m = [],
                        n = b._internals.reservedProps;
                    for (a = i._targets || i.target, $a(a, k, m), i.render(c, !0, !0), $a(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                        if (f = ea(m[e], k[e], l[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) n[g] && (f[g] = d[g]);
                            h = {};
                            for (g in f) h[g] = k[e][g];
                            j.push(b.fromTo(m[e], c, h, f))
                        }
                    return j
                }, a.activate([g]), g
            }, !0),
            function() {
                var a = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = function(a) {
                        var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
                        return function(c) {
                            return (Math.round(c / a) * a * b | 0) / b
                        }
                    },
                    c = function(a, b) {
                        for (; a;) a.f || a.blob || (a.m = b || Math.round), a = a._next
                    },
                    d = a.prototype;
                d._onInitAllProps = function() {
                    var a, d, e, f, g = this._tween,
                        h = g.vars.roundProps,
                        i = {},
                        j = g._propLookup.roundProps;
                    if ("object" != typeof h || h.push)
                        for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;) i[h[e]] = Math.round;
                    else
                        for (f in h) i[f] = b(h[f]);
                    for (f in i)
                        for (a = g._firstPT; a;) d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d;
                    return !1
                }, d._add = function(a, b, c, d, e) {
                    this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(a, b, c, d) {
                        var e, f;
                        if ("function" != typeof a.setAttribute) return !1;
                        for (e in b) f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(a, b, c, d) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (e in b) "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope,
                    g = f.com.greensock,
                    h = 2 * Math.PI,
                    i = Math.PI / 2,
                    j = g._class,
                    k = function(b, c) {
                        var d = j("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    l = a.register || function() {},
                    m = function(a, b, c, d, e) {
                        var f = j("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return l(f, a), f
                    },
                    n = function(a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    o = function(b, c) {
                        var d = j("easing." + b, function(a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) {
                            return new d(a)
                        }, d
                    },
                    p = m("Back", o("BackOut", function(a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), o("BackIn", function(a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), o("BackInOut", function(a) {
                        return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    q = j("easing.SlowMo", function(a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    r = q.prototype = new a;
                return r.constructor = q, r.getRatio = function(a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, q.ease = new q(.7, .7), r.config = q.config = function(a, b, c) {
                    return new q(a, b, c)
                }, b = j("easing.SteppedEase", function(a, b) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0
                }, !0), r = b.prototype = new a, r.constructor = b, r.getRatio = function(a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1
                }, r.config = b.config = function(a, c) {
                    return new b(a, c)
                }, c = j("easing.ExpoScaleEase", function(a, b, c) {
                    this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c
                }, !0), r = c.prototype = new a, r.constructor = c, r.getRatio = function(a) {
                    return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
                }, r.config = c.config = function(a, b, d) {
                    return new c(a, b, d)
                }, d = j("easing.RoughEase", function(b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function(a, b) {
                            return a.x - b.x
                        }), h = new n(1, 1, null), m = l; --m > -1;) g = j[m], h = new n(g.x, g.y, h);
                    this._prev = new n(0, 0, 0 !== h.t ? h : h.next)
                }, !0), r = d.prototype = new a, r.constructor = d, r.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, r.config = function(a) {
                    return new d(a)
                }, d.ease = new d, m("Bounce", k("BounceOut", function(a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), k("BounceIn", function(a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), k("BounceInOut", function(a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), m("Circ", k("CircOut", function(a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), k("CircIn", function(a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), k("CircInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), e = function(b, c, d) {
                    var e = j("easing." + b, function(a, b) {
                            this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                        return new e(a, b)
                    }, e
                }, m("Elastic", e("ElasticOut", function(a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                }, .3), e("ElasticIn", function(a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
                }, .3), e("ElasticInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                }, .45)), m("Expo", k("ExpoOut", function(a) {
                    return 1 - Math.pow(2, -10 * a)
                }), k("ExpoIn", function(a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), k("ExpoInOut", function(a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), m("Sine", k("SineOut", function(a) {
                    return Math.sin(a * i)
                }), k("SineIn", function(a) {
                    return -Math.cos(a * i) + 1
                }), k("SineInOut", function(a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), j("easing.EaseLookup", {
                    find: function(b) {
                        return a.map[b]
                    }
                }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = a.GreenSockGlobals = a.GreenSockGlobals || a,
            f = e[b];
        if (f) return "undefined" != typeof module && module.exports && (module.exports = f), f;
        var g, h, i, j, k, l = function(a) {
                var b, c = a.split("."),
                    d = e;
                for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                return d
            },
            m = l("com.greensock"),
            n = 1e-8,
            o = function(a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            p = function() {},
            q = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                }
            }(),
            r = {},
            s = function(d, f, g, h) {
                this.sc = r[d] ? r[d].sc : [], r[d] = this, this.gsClass = null, this.func = g;
                var i = [];
                this.check = function(j) {
                    for (var k, m, n, o, p = f.length, q = p; --p > -1;)(k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this);
                    if (0 === q && g) {
                        if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                            if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                                if (d === b) {
                                    module.exports = c[b] = o;
                                    for (p in c) o[p] = c[p]
                                } else c[b] && (c[b][n] = o);
                        else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                            return o
                        });
                        for (p = 0; p < this.sc.length; p++) this.sc[p].check()
                    }
                }, this.check(!0)
            },
            t = a._gsDefine = function(a, b, c, d) {
                return new s(a, b, c, d)
            },
            u = m._class = function(a, b, c) {
                return b = b || function() {}, t(a, [], function() {
                    return b
                }, c), b
            };
        t.globals = e;
        var v = [0, 0, 1, 1],
            w = u("easing.Ease", function(a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v
            }, !0),
            x = w.map = {},
            y = w.register = function(a, b, c, d) {
                for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                    for (f = i[j], e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; --g > -1;) h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (i = w.prototype, i._calcEnd = !1, i.getRatio = function(a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut");
        x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
        var z = u("events.EventDispatcher", function(a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        i = z.prototype, i.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, g, h = this._listeners[a],
                i = 0;
            for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
            h.splice(i, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            })
        }, i.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, i.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c))
        };
        var A = a.requestAnimationFrame,
            B = a.cancelAnimationFrame,
            C = Date.now || function() {
                return (new Date).getTime()
            },
            D = C();
        for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A;) A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
        u("Ticker", function(a, b) {
            var c, e, f, g, h, i = this,
                l = C(),
                m = b !== !1 && A ? "auto" : !1,
                o = 500,
                q = 33,
                r = "tick",
                s = function(a) {
                    var b, d, j = C() - D;
                    j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r)
                };
            z.call(i), i.time = i.frame = 0, i.tick = function() {
                s(!0)
            }, i.lagSmoothing = function(a, b) {
                return arguments.length ? (o = a || 1 / n, void(q = Math.min(b, o, 0))) : 1 / n > o
            }, i.sleep = function() {
                null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1))
            }, i.wake = function(a) {
                null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p : m && A ? A : function(a) {
                    return setTimeout(a, 1e3 * (h - i.time) + 1 | 0)
                }, i === j && (k = !0), s(2)
            }, i.fps = function(a) {
                return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c
            }, i.useRAF = function(a) {
                return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m
            }, i.fps(a), setTimeout(function() {
                "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1)
            }, 1500)
        }), i = m.Ticker.prototype = new m.events.EventDispatcher, i.constructor = m.Ticker;
        var E = u("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !!b.immediateRender, this.data = b.data, this._reversed = !!b.reversed, Z) {
                k || j.wake();
                var c = this.vars.useFrames ? Y : Z;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        j = E.ticker = new m.Ticker, i = E.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
        var F = function() {
            k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
            var a = setTimeout(F, 2e3);
            a.unref && a.unref()
        };
        F(), i.play = function(a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, i.pause = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, i.resume = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, i.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, i.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, i.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, i.render = function(a, b, c) {}, i.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, i.isActive = function() {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n
        }, i._enabled = function(a, b) {
            return k || j.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, i._kill = function(a, b) {
            return this._enabled(!1, !1)
        }, i.kill = function(a, b) {
            return this._kill(a, b), this
        }, i._uncache = function(a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, i._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, i._callback = function(a) {
            var b = this.vars,
                c = b[a],
                d = b[a + "Params"],
                e = b[a + "Scope"] || b.callbackScope || this,
                f = d ? d.length : 0;
            switch (f) {
                case 0:
                    c.call(e);
                    break;
                case 1:
                    c.call(e, d[0]);
                    break;
                case 2:
                    c.call(e, d[0], d[1]);
                    break;
                default:
                    c.apply(e, d)
            }
        }, i.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, i.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, i.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, i.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, i.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, i.totalTime = function(a, b, c) {
            if (k || j.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && _(), this.render(a, b, !1), K.length && _())
            }
            return this
        }, i.progress = i.totalProgress = function(a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
        }, i.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, i.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, i.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            var b, c;
            for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
            return this
        }, i.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, i.paused = function(a) {
            if (!arguments.length) return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (k || a || j.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        var G = u("core.SimpleTimeline", function(a) {
            E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        i = G.prototype = new E, i.constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                for (f = a._startTime; e && e._startTime > f;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
        }, i._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, i.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, i.rawTime = function() {
            return k || j.wake(), this._totalTime
        };
        var H = u("TweenLite", function(b, c, d) {
                if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
                this.target = b = "string" != typeof b ? b : H.selector(b) || b;
                var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                    i = this.vars.overwrite;
                if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0])
                    for (this._targets = g = o(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                else this._propLookup = {}, this._siblings = aa(b, this, !1), 1 === i && this._siblings.length > 1 && ca(b, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay)))
            }, !0),
            I = function(b) {
                return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            },
            J = function(a, b) {
                var c, d = {};
                for (c in a) W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        i = H.prototype = new E, i.constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.1.2", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function(a, b) {
            j.lagSmoothing(a, b)
        }, H.selector = a.$ || a.jQuery || function(b) {
            var c = a.$ || a.jQuery;
            return c ? (H.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b)
        };
        var K = [],
            L = {},
            M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            N = /[\+-]=-?[\.\d]/,
            O = function(a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
            },
            P = function(a) {
                return (1e3 * a | 0) / 1e3 + ""
            },
            Q = function(a, b, c, d) {
                var e, f, g, h, i, j, k, l = [],
                    m = 0,
                    n = "",
                    o = 0;
                for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : P
                }), m += k.length;
                return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l
            },
            R = function(a, b, c, d, e, f, g, h, i) {
                "function" == typeof d && (d = d(i || 0, a));
                var j, k = typeof a[b],
                    l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                    m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                    n = "string" == typeof d && "=" === d.charAt(1),
                    o = {
                        t: a,
                        p: b,
                        s: m,
                        f: "function" === k,
                        pg: 0,
                        n: e || b,
                        m: f ? "function" == typeof f ? f : Math.round : 0,
                        pr: 0,
                        c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                    };
                return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = {
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0,
                    m: 0
                }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
            },
            S = H._internals = {
                isArray: q,
                isSelector: I,
                lazyTweens: K,
                blobDif: Q
            },
            T = H._plugins = {},
            U = S.tweenLookup = {},
            V = 0,
            W = S.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            },
            X = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            Y = E._rootFramesTimeline = new G,
            Z = E._rootTimeline = new G,
            $ = 30,
            _ = S.lazyRender = function() {
                var a, b, c = K.length;
                for (L = {}, a = 0; c > a; a++) b = K[a], b && b._lazy !== !1 && (b.render(b._lazy[0], b._lazy[1], !0), b._lazy = !1);
                K.length = 0
            };
        Z._startTime = j.time, Y._startTime = j.frame, Z._active = Y._active = !0, setTimeout(_, 1), E._updateRoot = H.render = function() {
            var a, b, c;
            if (K.length && _(), Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1), K.length && _(), j.frame >= $) {
                $ = j.frame + (parseInt(H.autoSleep, 10) || 120);
                for (c in U) {
                    for (b = U[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete U[c]
                }
                if (c = Z._first, (!c || c._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || j.sleep()
                }
            }
        }, j.addEventListener("tick", E._updateRoot);
        var aa = function(a, b, c) {
                var d, e, f = a._gsTweenID;
                if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
                        target: a,
                        tweens: []
                    }), b && (d = U[f].tweens, d[e = d.length] = b, c))
                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                return U[f].tweens
            },
            ba = function(a, b, c, d) {
                var e, f, g = a.vars.onOverwrite;
                return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
            },
            ca = function(a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var j, k = b._startTime + n,
                    l = [],
                    m = 0,
                    o = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o), 0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n || (l[m++] = h)));
                for (f = m; --f > -1;)
                    if (h = l[f], i = h._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted && i) {
                        if (2 !== d && !ba(h, b)) continue;
                        h._enabled(!1, !1) && (g = !0)
                    }
                return g
            },
            da = function(a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n
            };
        i._init = function() {
            var a, b, c, d, e, f, g = this.vars,
                h = this._overwrittenProps,
                i = this._duration,
                j = !!g.immediateRender,
                k = g.ease,
                l = this._startAt;
            if (g.startAt) {
                l && (l.render(-1, !0), l.kill()), e = {};
                for (d in g.startAt) e[d] = g.startAt[d];
                if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== i) return
            } else if (g.runBackwards && 0 !== i)
                if (l) l.render(-1, !0), l.kill(), this._startAt = null;
                else {
                    0 !== this._time && (j = !1), c = {};
                    for (d in g) W[d] && "autoCSS" !== d || (c[d] = g[d]);
                    if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
            if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = g.onUpdate, this._initted = !0
        }, i._initProps = function(b, c, d, e, f) {
            var g, h, i, j, k, l;
            if (null == b) return !1;
            L[b._gsTweenID] && _(), this.vars.css || b.style && b !== a && b.nodeType && T.css && this.vars.autoCSS !== !1 && J(this.vars, b);
            for (g in this.vars)
                if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                else if (T[g] && (j = new T[g])._onInitTween(b, this.vars[g], this, f)) {
                for (this._firstPT = k = {
                        _next: this._firstPT,
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: g,
                        pg: 1,
                        pr: j._priority,
                        m: 0
                    }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
            } else c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i)
        }, i.render = function(a, b, c) {
            var d, e, f, g, h = this,
                i = h._time,
                j = h._duration,
                k = h._rawPrevTime;
            if (a >= j - n && a >= 0) h._totalTime = h._time = j, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1, h._reversed || (d = !0, e = "onComplete", c = c || h._timeline.autoRemoveChildren), 0 === j && (h._initted || !h.vars.lazy || c) && (h._startTime === h._timeline._duration && (a = 0), (0 > k || 0 >= a && a >= -n || k === n && "isPause" !== h.data) && k !== a && (c = !0, k > n && (e = "onReverseComplete")), h._rawPrevTime = g = !b || a || k === a ? a : n);
            else if (n > a) h._totalTime = h._time = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== i || 0 === j && k > 0) && (e = "onReverseComplete", d = h._reversed), a > -n ? a = 0 : 0 > a && (h._active = !1, 0 === j && (h._initted || !h.vars.lazy || c) && (k >= 0 && (k !== n || "isPause" !== h.data) && (c = !0), h._rawPrevTime = g = !b || a || k === a ? a : n)), (!h._initted || h._startAt && h._startAt.progress()) && (c = !0);
            else if (h._totalTime = h._time = a, h._easeType) {
                var l = a / j,
                    m = h._easeType,
                    o = h._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l), h.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / j ? l / 2 : 1 - l / 2
            } else h.ratio = h._ease.getRatio(a / j);
            if (h._time !== i || c) {
                if (!h._initted) {
                    if (h._init(), !h._initted || h._gc) return;
                    if (!c && h._firstPT && (h.vars.lazy !== !1 && h._duration || h.vars.lazy && !h._duration)) return h._time = h._totalTime = i, h._rawPrevTime = k, K.push(h), void(h._lazy = [a, b]);
                    h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1))
                }
                for (h._lazy !== !1 && (h._lazy = !1), h._active || !h._paused && h._time !== i && a >= 0 && (h._active = !0), 0 === i && (h._startAt && (a >= 0 ? h._startAt.render(a, !0, c) : e || (e = "_dummyGS")), h.vars.onStart && (0 !== h._time || 0 === j) && (b || h._callback("onStart"))), f = h._firstPT; f;) f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s, f = f._next;
                h._onUpdate && (0 > a && h._startAt && a !== -1e-4 && h._startAt.render(a, !0, c), b || (h._time !== i || d || c) && h._callback("onUpdate")), e && (!h._gc || c) && (0 > a && h._startAt && !h._onUpdate && a !== -1e-4 && h._startAt.render(a, !0, c), d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !b && h.vars[e] && h._callback(e), 0 === j && h._rawPrevTime === n && g !== n && (h._rawPrevTime = 0))
            }
        }, i._kill = function(a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline,
                n = this._firstPT;
            if ((q(b) || I(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;)
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) h[f] && (l || (l = []), l.push(f));
                        if ((l || !a) && !ba(this, c, b, l)) return !1
                    }
                    for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    !this._firstPT && this._initted && n && this._enabled(!1, !1)
                }
            }
            return i
        }, i.invalidate = function() {
            this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
            var a = this._time;
            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(a, !1, this.vars.lazy !== !1)), this
        }, i._enabled = function(a, b) {
            if (k || j.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = aa(d[c], this, !0);
                else this._siblings = aa(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, H.to = function(a, b, c) {
            return new H(a, b, c)
        }, H.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c)
        }, H.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d)
        }, H.delayedCall = function(a, b, c, d, e) {
            return new H(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }, H.set = function(a, b) {
            return new H(a, 0, b)
        }, H.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : H.selector(a) || a;
            var c, d, e, f;
            if ((q(a) || I(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(H.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)
                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else if (a._gsTweenID)
                for (d = aa(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d || []
        }, H.killTweensOf = H.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var ea = u("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ea.prototype
        }, !0);
        if (i = ea.prototype, ea.version = "1.19.0", ea.API = 2, i._firstPT = null, i._addTween = R, i.setRatio = O, i._kill = function(a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, i._mod = i._roundProps = function(a) {
                for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
            }, H._onPluginEvent = function(a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, ea.activate = function(a) {
                for (var b = a.length; --b > -1;) a[b].API === ea.API && (T[(new a[b])._propName] = a[b]);
                return !0
            }, t.plugin = function(a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    e = a.overwriteProps,
                    f = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                        ea.call(this, c, d), this._overwriteProps = e || []
                    }, a.global === !0),
                    h = g.prototype = new ea(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, ea.activate([g]), g
            }, g = a._gsQueue) {
            for (h = 0; h < g.length; h++) g[h]();
            for (i in r) r[i].func || a.console.log("GSAP encountered missing dependency: " + i)
        }
        k = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/*!
 * VERSION: 0.2.1
 * DATE: 2019-02-07
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";

        function a(a, b, c, d, e, f) {
            return c = (parseFloat(c || 0) - parseFloat(a || 0)) * e, d = (parseFloat(d || 0) - parseFloat(b || 0)) * f, Math.sqrt(c * c + d * d)
        }

        function b(a) {
            return "string" != typeof a && a.nodeType || (a = _gsScope.TweenLite.selector(a), a.length && (a = a[0])), a
        }

        function c(a, b, c) {
            var d, e, f = a.indexOf(" ");
            return -1 === f ? (d = void 0 !== c ? c + "" : a, e = a) : (d = a.substr(0, f), e = a.substr(f + 1)), d = -1 !== d.indexOf("%") ? parseFloat(d) / 100 * b : parseFloat(d), e = -1 !== e.indexOf("%") ? parseFloat(e) / 100 * b : parseFloat(e), d > e ? [e, d] : [d, e]
        }

        function d(c) {
            if (!c) return 0;
            c = b(c);
            var d, e, f, g, h, i, k, m = c.tagName.toLowerCase(),
                n = 1,
                o = 1;
            "non-scaling-stroke" === c.getAttribute("vector-effect") && (o = c.getScreenCTM(), n = Math.sqrt(o.a * o.a + o.b * o.b), o = Math.sqrt(o.d * o.d + o.c * o.c));
            try {
                e = c.getBBox()
            } catch (p) {
                console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).")
            }
            if (e && (e.width || e.height) || !l[m] || (e = {
                    width: parseFloat(c.getAttribute(l[m][0])),
                    height: parseFloat(c.getAttribute(l[m][1]))
                }, "rect" !== m && "line" !== m && (e.width *= 2, e.height *= 2), "line" === m && (e.x = parseFloat(c.getAttribute("x1")), e.y = parseFloat(c.getAttribute("y1")), e.width = Math.abs(e.width - e.x), e.height = Math.abs(e.height - e.y))), "path" === m) g = c.style.strokeDasharray, c.style.strokeDasharray = "none", d = c.getTotalLength() || 0, n !== o && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), d *= (n + o) / 2, c.style.strokeDasharray = g;
            else if ("rect" === m) d = 2 * e.width * n + 2 * e.height * o;
            else if ("line" === m) d = a(e.x, e.y, e.x + e.width, e.y + e.height, n, o);
            else if ("polyline" === m || "polygon" === m)
                for (f = c.getAttribute("points").match(j) || [], "polygon" === m && f.push(f[0], f[1]), d = 0, h = 2; h < f.length; h += 2) d += a(f[h - 2], f[h - 1], f[h], f[h + 1], n, o) || 0;
            else("circle" === m || "ellipse" === m) && (i = e.width / 2 * n, k = e.height / 2 * o, d = Math.PI * (3 * (i + k) - Math.sqrt((3 * i + k) * (i + 3 * k))));
            return d || 0
        }

        function e(a, c) {
            if (!a) return [0, 0];
            a = b(a), c = c || d(a) + 1;
            var e = i(a),
                f = e.strokeDasharray || "",
                g = parseFloat(e.strokeDashoffset),
                h = f.indexOf(",");
            return 0 > h && (h = f.indexOf(" ")), f = 0 > h ? c : parseFloat(f.substr(0, h)) || 1e-5, f > c && (f = c), [Math.max(0, -g), Math.max(0, f - g)]
        }
        var f, g = _gsScope.document,
            h = "undefined" != typeof window ? window : g.defaultView || {
                getComputedStyle: function() {}
            },
            i = function(a) {
                return h.getComputedStyle(a)
            },
            j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            k = -1 !== ((_gsScope.navigator || {}).userAgent || "").indexOf("Edge"),
            l = {
                rect: ["width", "height"],
                circle: ["r", "r"],
                ellipse: ["rx", "ry"],
                line: ["x2", "y2"]
            };
        f = _gsScope._gsDefine.plugin({
            propName: "drawSVG",
            API: 2,
            version: "0.2.1",
            global: !0,
            overwriteProps: ["drawSVG"],
            init: function(a, b, f, g) {
                if (!a.getBBox) return !1;
                var h, j, l, m, n = d(a) + 1;
                return this._style = a.style, this._target = a, "function" == typeof b && (b = b(g, a)), b === !0 || "true" === b ? b = "0 100%" : b ? -1 === (b + "").indexOf(" ") && (b = "0 " + b) : b = "0 0", h = e(a, n), j = c(b, n, h[0]), this._length = n + 10, 0 === h[0] && 0 === j[0] ? (l = Math.max(1e-5, j[1] - n), this._dash = n + l, this._offset = n - h[1] + l, this._offsetPT = this._addTween(this, "_offset", this._offset, n - j[1] + l, "drawSVG")) : (this._dash = h[1] - h[0] || 1e-6, this._offset = -h[0], this._dashPT = this._addTween(this, "_dash", this._dash, j[1] - j[0] || 1e-5, "drawSVG"), this._offsetPT = this._addTween(this, "_offset", this._offset, -j[0], "drawSVG")), k && (m = i(a), m.strokeLinecap !== m.strokeLinejoin && (j = parseFloat(m.strokeMiterlimit), this._addTween(a.style, "strokeMiterlimit", j, j + 1e-4, "strokeMiterlimit"))), this._live = "non-scaling-stroke" === a.getAttribute("vector-effect") || -1 !== (b + "").indexOf("live"), !0
            },
            set: function(a) {
                if (this._firstPT) {
                    if (this._live) {
                        var b, c = d(this._target) + 11;
                        c !== this._length && (b = c / this._length, this._length = c, this._offsetPT.s *= b, this._offsetPT.c *= b, this._dashPT ? (this._dashPT.s *= b, this._dashPT.c *= b) : this._dash *= b)
                    }
                    this._super.setRatio.call(this, a), this._style.strokeDashoffset = this._offset, 1 === a || 0 === a ? this._style.strokeDasharray = this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._style.strokeDasharray = this._dash + "px," + this._length + "px"
                }
            }
        }), f.getLength = d, f.getPosition = e
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b)
    }("DrawSVGPlugin");

/*!
 * VERSION: 0.8.11
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var a = Math.PI / 180,
            b = 180 / Math.PI,
            c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            d = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            e = /(^[#\.][a-z]|[a-y][a-z])/gi,
            f = /[achlmqstvz]/gi,
            g = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            h = _gsScope._gsDefine.globals.TweenLite,
            i = function(a) {
                _gsScope.console && console.log(a)
            },
            j = function(b, c) {
                var d, e, f, g, h, i, j = Math.ceil(Math.abs(c) / 90),
                    k = 0,
                    l = [];
                for (b *= a, c *= a, d = c / j, e = 4 / 3 * Math.sin(d / 2) / (1 + Math.cos(d / 2)), i = 0; j > i; i++) f = b + i * d, g = Math.cos(f), h = Math.sin(f), l[k++] = g - e * h, l[k++] = h + e * g, f += d, g = Math.cos(f), h = Math.sin(f), l[k++] = g + e * h, l[k++] = h - e * g, l[k++] = g, l[k++] = h;
                return l
            },
            k = function(c, d, e, f, g, h, i, k, l) {
                if (c !== k || d !== l) {
                    e = Math.abs(e), f = Math.abs(f);
                    var m = g % 360 * a,
                        n = Math.cos(m),
                        o = Math.sin(m),
                        p = (c - k) / 2,
                        q = (d - l) / 2,
                        r = n * p + o * q,
                        s = -o * p + n * q,
                        t = e * e,
                        u = f * f,
                        v = r * r,
                        w = s * s,
                        x = v / t + w / u;
                    x > 1 && (e = Math.sqrt(x) * e, f = Math.sqrt(x) * f, t = e * e, u = f * f);
                    var y = h === i ? -1 : 1,
                        z = (t * u - t * w - u * v) / (t * w + u * v);
                    0 > z && (z = 0);
                    var A = y * Math.sqrt(z),
                        B = A * (e * s / f),
                        C = A * -(f * r / e),
                        D = (c + k) / 2,
                        E = (d + l) / 2,
                        F = D + (n * B - o * C),
                        G = E + (o * B + n * C),
                        H = (r - B) / e,
                        I = (s - C) / f,
                        J = (-r - B) / e,
                        K = (-s - C) / f,
                        L = Math.sqrt(H * H + I * I),
                        M = H;
                    y = 0 > I ? -1 : 1;
                    var N = y * Math.acos(M / L) * b;
                    L = Math.sqrt((H * H + I * I) * (J * J + K * K)), M = H * J + I * K, y = 0 > H * K - I * J ? -1 : 1;
                    var O = y * Math.acos(M / L) * b;
                    !i && O > 0 ? O -= 360 : i && 0 > O && (O += 360), O %= 360, N %= 360;
                    var P, Q, R, S = j(N, O),
                        T = n * e,
                        U = o * e,
                        V = o * -f,
                        W = n * f,
                        X = S.length - 2;
                    for (P = 0; X > P; P += 2) Q = S[P], R = S[P + 1], S[P] = Q * T + R * V + F, S[P + 1] = Q * U + R * W + G;
                    return S[S.length - 2] = k, S[S.length - 1] = l, S
                }
            },
            l = function(a) {
                var b, d, e, f, h, j, l, m, n, o, p, q, r, s = (a + "").replace(g, function(a) {
                        var b = +a;
                        return 1e-4 > b && b > -1e-4 ? 0 : b
                    }).match(c) || [],
                    t = [],
                    u = 0,
                    v = 0,
                    w = s.length,
                    x = 2,
                    y = 0;
                if (!a || !isNaN(s[0]) || isNaN(s[1])) return i("ERROR: malformed path data: " + a), t;
                for (b = 0; w > b; b++)
                    if (r = h, isNaN(s[b]) ? (h = s[b].toUpperCase(), j = h !== s[b]) : b--, e = +s[b + 1], f = +s[b + 2], j && (e += u, f += v), 0 === b && (m = e, n = f), "M" === h) l && l.length < 8 && (t.length -= 1, x = 0), u = m = e, v = n = f, l = [e, f], y += x, x = 2, t.push(l), b += 2, h = "L";
                    else if ("C" === h) l || (l = [0, 0]), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u + 1 * s[b + 3], l[x++] = v + 1 * s[b + 4], l[x++] = u += 1 * s[b + 5], l[x++] = v += 1 * s[b + 6], b += 6;
                else if ("S" === h) "C" === r || "S" === r ? (o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p) : (l[x++] = u, l[x++] = v), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u += 1 * s[b + 3], l[x++] = v += 1 * s[b + 4], b += 4;
                else if ("Q" === h) o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, j || (u = v = 0), u += 1 * s[b + 3], v += 1 * s[b + 4], o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, l[x++] = u, l[x++] = v, b += 4;
                else if ("T" === h) o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p, o = u + 1.5 * o - e, p = v + 1.5 * p - f, l[x++] = e + 2 * o / 3, l[x++] = f + 2 * p / 3, l[x++] = u = e, l[x++] = v = f, b += 2;
                else if ("H" === h) f = v, l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = u = e, l[x++] = f, b += 1;
                else if ("V" === h) f = e, e = u, j && (f += v - u), l[x++] = e, l[x++] = v + (f - v) / 3, l[x++] = e, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = v = f, b += 1;
                else if ("L" === h || "Z" === h) "Z" === h && (e = m, f = n, l.closed = !0), ("L" === h || Math.abs(u - e) > .5 || Math.abs(v - f) > .5) && (l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = f, "L" === h && (b += 2)), u = e, v = f;
                else if ("A" === h) {
                    if (q = k(u, v, 1 * s[b + 1], 1 * s[b + 2], 1 * s[b + 3], 1 * s[b + 4], 1 * s[b + 5], (j ? u : 0) + 1 * s[b + 6], (j ? v : 0) + 1 * s[b + 7]))
                        for (d = 0; d < q.length; d++) l[x++] = q[d];
                    u = l[x - 2], v = l[x - 1], b += 7
                } else i("Error: malformed path data: " + a);
                return t.totalPoints = y + x, t
            },
            m = function(a, b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = 0,
                    r = .999999,
                    s = a.length,
                    t = b / ((s - 2) / 6);
                for (o = 2; s > o; o += 6)
                    for (q += t; q > r;) c = a[o - 2], d = a[o - 1], e = a[o], f = a[o + 1], g = a[o + 2], h = a[o + 3], i = a[o + 4], j = a[o + 5], p = 1 / (Math.floor(q) + 1), k = c + (e - c) * p, m = e + (g - e) * p, k += (m - k) * p, m += (g + (i - g) * p - m) * p, l = d + (f - d) * p, n = f + (h - f) * p, l += (n - l) * p, n += (h + (j - h) * p - n) * p, a.splice(o, 4, c + (e - c) * p, d + (f - d) * p, k, l, k + (m - k) * p, l + (n - l) * p, m, n, g + (i - g) * p, h + (j - h) * p), o += 6, s += 6, q--;
                return a
            },
            n = function(a) {
                var b, c, d, e, f = "",
                    g = a.length,
                    h = 100;
                for (c = 0; g > c; c++) {
                    for (e = a[c], f += "M" + e[0] + "," + e[1] + " C", b = e.length, d = 2; b > d; d++) f += (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d] * h | 0) / h + " ";
                    e.closed && (f += "z")
                }
                return f
            },
            o = function(a) {
                for (var b = [], c = a.length - 1, d = 0; --c > -1;) b[d++] = a[c], b[d++] = a[c + 1], c--;
                for (c = 0; d > c; c++) a[c] = b[c];
                a.reversed = a.reversed ? !1 : !0
            },
            p = function(a) {
                var b, c = a.length,
                    d = 0,
                    e = 0;
                for (b = 0; c > b; b++) d += a[b++], e += a[b];
                return [d / (c / 2), e / (c / 2)]
            },
            q = function(a) {
                var b, c, d, e = a.length,
                    f = a[0],
                    g = f,
                    h = a[1],
                    i = h;
                for (d = 6; e > d; d += 6) b = a[d], c = a[d + 1], b > f ? f = b : g > b && (g = b), c > h ? h = c : i > c && (i = c);
                return a.centerX = (f + g) / 2, a.centerY = (h + i) / 2, a.size = (f - g) * (h - i)
            },
            r = function(a) {
                for (var b, c, d, e, f, g = a.length, h = a[0][0], i = h, j = a[0][1], k = j; --g > -1;)
                    for (f = a[g], b = f.length, e = 6; b > e; e += 6) c = f[e], d = f[e + 1], c > h ? h = c : i > c && (i = c), d > j ? j = d : k > d && (k = d);
                return a.centerX = (h + i) / 2, a.centerY = (j + k) / 2, a.size = (h - i) * (j - k)
            },
            s = function(a, b) {
                return b.length - a.length
            },
            t = function(a, b) {
                var c = a.size || q(a),
                    d = b.size || q(b);
                return Math.abs(d - c) < (c + d) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : d - c
            },
            u = function(a, b) {
                var c, d, e = a.slice(0),
                    f = a.length,
                    g = f - 2;
                for (b = 0 | b, c = 0; f > c; c++) d = (c + b) % g, a[c++] = e[d], a[c] = e[d + 1]
            },
            v = function(a, b, c, d, e) {
                var f, g, h, i, j = a.length,
                    k = 0,
                    l = j - 2;
                for (c *= 6, g = 0; j > g; g += 6) f = (g + c) % l, i = a[f] - (b[g] - d), h = a[f + 1] - (b[g + 1] - e), k += Math.sqrt(h * h + i * i);
                return k
            },
            w = function(a, b, c) {
                var d, e, f, g = a.length,
                    h = p(a),
                    i = p(b),
                    j = i[0] - h[0],
                    k = i[1] - h[1],
                    l = v(a, b, 0, j, k),
                    m = 0;
                for (f = 6; g > f; f += 6) e = v(a, b, f / 6, j, k), l > e && (l = e, m = f);
                if (c)
                    for (d = a.slice(0), o(d), f = 6; g > f; f += 6) e = v(d, b, f / 6, j, k), l > e && (l = e, m = -f);
                return m / 6
            },
            x = function(a, b, c) {
                for (var d, e, f, g, h, i, j = a.length, k = 99999999999, l = 0, m = 0; --j > -1;)
                    for (d = a[j], i = d.length, h = 0; i > h; h += 6) e = d[h] - b, f = d[h + 1] - c, g = Math.sqrt(e * e + f * f), k > g && (k = g, l = d[h], m = d[h + 1]);
                return [l, m]
            },
            y = function(a, b, c, d, e, f) {
                var g, h, i, j, k, l = b.length,
                    m = 0,
                    n = Math.min(a.size || q(a), b[c].size || q(b[c])) * d,
                    o = 999999999999,
                    p = a.centerX + e,
                    r = a.centerY + f;
                for (h = c; l > h && (g = b[h].size || q(b[h]), !(n > g)); h++) i = b[h].centerX - p, j = b[h].centerY - r, k = Math.sqrt(i * i + j * j), o > k && (m = h, o = k);
                return k = b[m], b.splice(m, 1), k
            },
            z = function(a, b, c, d) {
                var e, f, g, h, j, k, l, n = b.length - a.length,
                    p = n > 0 ? b : a,
                    v = n > 0 ? a : b,
                    z = 0,
                    A = "complexity" === d ? s : t,
                    B = "position" === d ? 0 : "number" == typeof d ? d : .8,
                    C = v.length,
                    D = "object" == typeof c && c.push ? c.slice(0) : [c],
                    E = "reverse" === D[0] || D[0] < 0,
                    F = "log" === c;
                if (v[0]) {
                    if (p.length > 1 && (a.sort(A), b.sort(A), k = p.size || r(p), k = v.size || r(v), k = p.centerX - v.centerX, l = p.centerY - v.centerY, A === t))
                        for (C = 0; C < v.length; C++) p.splice(C, 0, y(v[C], p, C, B, k, l));
                    if (n)
                        for (0 > n && (n = -n), p[0].length > v[0].length && m(v[0], (p[0].length - v[0].length) / 6 | 0), C = v.length; n > z;) h = p[C].size || q(p[C]), g = x(v, p[C].centerX, p[C].centerY), h = g[0], j = g[1], v[C++] = [h, j, h, j, h, j, h, j], v.totalPoints += 8, z++;
                    for (C = 0; C < a.length; C++) e = b[C], f = a[C], n = e.length - f.length, 0 > n ? m(e, -n / 6 | 0) : n > 0 && m(f, n / 6 | 0), E && !f.reversed && o(f), c = D[C] || 0 === D[C] ? D[C] : "auto", c && (f.closed || Math.abs(f[0] - f[f.length - 2]) < .5 && Math.abs(f[1] - f[f.length - 1]) < .5 ? "auto" === c || "log" === c ? (D[C] = c = w(f, e, 0 === C), 0 > c && (E = !0, o(f), c = -c), u(f, 6 * c)) : "reverse" !== c && (C && 0 > c && o(f), u(f, 6 * (0 > c ? -c : c))) : !E && ("auto" === c && Math.abs(e[0] - f[0]) + Math.abs(e[1] - f[1]) + Math.abs(e[e.length - 2] - f[f.length - 2]) + Math.abs(e[e.length - 1] - f[f.length - 1]) > Math.abs(e[0] - f[f.length - 2]) + Math.abs(e[1] - f[f.length - 1]) + Math.abs(e[e.length - 2] - f[0]) + Math.abs(e[e.length - 1] - f[1]) || c % 2) ? (o(f), D[C] = -1, E = !0) : "auto" === c ? D[C] = 0 : "reverse" === c && (D[C] = -1), f.closed !== e.closed && (f.closed = e.closed = !1));
                    return F && i("shapeIndex:[" + D.join(",") + "]"), D
                }
            },
            A = function(a, b, c, d) {
                var e = l(a[0]),
                    f = l(a[1]);
                z(e, f, b || 0 === b ? b : "auto", c) && (a[0] = n(e), a[1] = n(f), ("log" === d || d === !0) && i('precompile:["' + a[0] + '","' + a[1] + '"]'))
            },
            B = function(a, b, c) {
                return b || c || a || 0 === a ? function(d) {
                    A(d, a, b, c)
                } : A
            },
            C = function(a, b) {
                if (!b) return a;
                var c, e, f, g = a.match(d) || [],
                    h = g.length,
                    i = "";
                for ("reverse" === b ? (e = h - 1, c = -2) : (e = (2 * (parseInt(b, 10) || 0) + 1 + 100 * h) % h, c = 2), f = 0; h > f; f += 2) i += g[e - 1] + "," + g[e] + " ", e = (e + c) % h;
                return i
            },
            D = function(a, b) {
                var c, d, e, f, g, h, i, j = 0,
                    k = parseFloat(a[0]),
                    l = parseFloat(a[1]),
                    m = k + "," + l + " ",
                    n = .999999;
                for (e = a.length, c = .5 * b / (.5 * e - 1), d = 0; e - 2 > d; d += 2) {
                    if (j += c, h = parseFloat(a[d + 2]), i = parseFloat(a[d + 3]), j > n)
                        for (g = 1 / (Math.floor(j) + 1), f = 1; j > n;) m += (k + (h - k) * g * f).toFixed(2) + "," + (l + (i - l) * g * f).toFixed(2) + " ", j--, f++;
                    m += h + "," + i + " ", k = h, l = i
                }
                return m
            },
            E = function(a) {
                var b = a[0].match(d) || [],
                    c = a[1].match(d) || [],
                    e = c.length - b.length;
                e > 0 ? a[0] = D(b, e) : a[1] = D(c, -e)
            },
            F = function(a) {
                return isNaN(a) ? E : function(b) {
                    E(b), b[1] = C(b[1], parseInt(a, 10))
                }
            },
            G = function(a, b) {
                var c, d = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    e = Array.prototype.slice.call(a.attributes),
                    f = e.length;
                for (b = "," + b + ","; --f > -1;) c = e[f].nodeName.toLowerCase(), -1 === b.indexOf("," + c + ",") && d.setAttributeNS(null, c, e[f].nodeValue);
                return d
            },
            H = function(a, b) {
                var c, e, f, g, h, i, j, k, m, o, p, q, r, s, t, u, v, w, x, y, z, A = a.tagName.toLowerCase(),
                    B = .552284749831;
                return "path" !== A && a.getBBox ? (i = G(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === A ? (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, e = +a.getAttribute("x") || 0, f = +a.getAttribute("y") || 0, o = (+a.getAttribute("width") || 0) - 2 * g, p = (+a.getAttribute("height") || 0) - 2 * h, g || h ? (q = e + g * (1 - B), r = e + g, s = r + o, t = s + g * B, u = s + g, v = f + h * (1 - B), w = f + h, x = w + p, y = x + h * B, z = x + h, c = "M" + u + "," + w + " V" + x + " C" + [u, y, t, z, s, z, s - (s - r) / 3, z, r + (s - r) / 3, z, r, z, q, z, e, y, e, x, e, x - (x - w) / 3, e, w + (x - w) / 3, e, w, e, v, q, f, r, f, r + (s - r) / 3, f, s - (s - r) / 3, f, s, f, t, f, u, v, u, w].join(",") + "z") : c = "M" + (e + o) + "," + f + " v" + p + " h" + -o + " v" + -p + " h" + o + "z") : "circle" === A || "ellipse" === A ? ("circle" === A ? (g = h = +a.getAttribute("r") || 0, k = g * B) : (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, k = h * B), e = +a.getAttribute("cx") || 0, f = +a.getAttribute("cy") || 0, j = g * B, c = "M" + (e + g) + "," + f + " C" + [e + g, f + k, e + j, f + h, e, f + h, e - j, f + h, e - g, f + k, e - g, f, e - g, f - k, e - j, f - h, e, f - h, e + j, f - h, e + g, f - k, e + g, f].join(",") + "z") : "line" === A ? c = n(l("M" + (a.getAttribute("x1") || 0) + "," + (a.getAttribute("y1") || 0) + " L" + (a.getAttribute("x2") || 0) + "," + (a.getAttribute("y2") || 0))) : ("polyline" === A || "polygon" === A) && (m = (a.getAttribute("points") + "").match(d) || [], e = m.shift(), f = m.shift(), c = "M" + e + "," + f + " L" + m.join(","), "polygon" === A && (c += "," + e + "," + f + "z")), i.setAttribute("d", c), b && a.parentNode && (a.parentNode.insertBefore(i, a), a.parentNode.removeChild(a)), i) : a
            },
            I = function(a, b, c) {
                var f, g, j = "string" == typeof a;
                return (!j || e.test(a) || (a.match(d) || []).length < 3) && (f = j ? h.selector(a) : a && a[0] ? a : [a], f && f[0] ? (f = f[0], g = f.nodeName.toUpperCase(), b && "PATH" !== g && (f = H(f, !1), g = "PATH"), a = f.getAttribute("PATH" === g ? "d" : "points") || "", f === c && (a = f.getAttributeNS(null, "data-original") || a)) : (i("WARNING: invalid morph to: " + a), a = !1)), a
            },
            J = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
            K = _gsScope._gsDefine.plugin({
                propName: "morphSVG",
                API: 2,
                global: !0,
                version: "0.8.11",
                init: function(a, b, c, d) {
                    var e, g, h, j, k;
                    return "function" != typeof a.setAttribute ? !1 : ("function" == typeof b && (b = b(d, a)), e = a.nodeName.toUpperCase(), k = "POLYLINE" === e || "POLYGON" === e, "PATH" === e || k ? (g = "PATH" === e ? "d" : "points", ("string" == typeof b || b.getBBox || b[0]) && (b = {
                        shape: b
                    }), j = I(b.shape || b.d || b.points || "", "d" === g, a), k && f.test(j) ? (i("WARNING: a <" + e + "> cannot accept path data. " + J), !1) : (j && (this._target = a, a.getAttributeNS(null, "data-original") || a.setAttributeNS(null, "data-original", a.getAttribute(g)), h = this._addTween(a, "setAttribute", a.getAttribute(g) + "", j + "", "morphSVG", !1, g, "object" == typeof b.precompile ? function(a) {
                        a[0] = b.precompile[0], a[1] = b.precompile[1]
                    } : "d" === g ? B(b.shapeIndex, b.map || K.defaultMap, b.precompile) : F(b.shapeIndex)), h && (this._overwriteProps.push("morphSVG"), h.end = j, h.endProp = g)), !0)) : (i("WARNING: cannot morph a <" + e + "> SVG element. " + J), !1))
                },
                set: function(a) {
                    var b;
                    if (this._super.setRatio.call(this, a), 1 === a)
                        for (b = this._firstPT; b;) b.end && this._target.setAttribute(b.endProp, b.end), b = b._next
                }
            });
        K.pathFilter = A, K.pointsFilter = E, K.subdivideRawBezier = m, K.defaultMap = "size", K.pathDataToRawBezier = function(a) {
            return l(I(a, !0))
        }, K.equalizeSegmentQuantity = z, K.convertToPath = function(a, b) {
            "string" == typeof a && (a = h.selector(a));
            for (var c = a && 0 !== a.length ? a.length && a[0] && a[0].nodeType ? Array.prototype.slice.call(a, 0) : [a] : [], d = c.length; --d > -1;) c[d] = H(c[d], b !== !1);
            return c
        }, K.pathDataToBezier = function(a, b) {
            var c, d, e, f, g, i, j, k, m = l(I(a, !0))[0] || [],
                n = 0;
            if (b = b || {}, k = b.align || b.relative, f = b.matrix || [1, 0, 0, 1, 0, 0], g = b.offsetX || 0, i = b.offsetY || 0, "relative" === k || k === !0 ? (g -= m[0] * f[0] + m[1] * f[2], i -= m[0] * f[1] + m[1] * f[3], n = "+=") : (g += f[4], i += f[5], k && (k = "string" == typeof k ? h.selector(k) : k && k[0] ? k : [k], k && k[0] && (j = k[0].getBBox() || {
                    x: 0,
                    y: 0
                }, g -= j.x, i -= j.y))), c = [], e = m.length, f && "1,0,0,1,0,0" !== f.join(","))
                for (d = 0; e > d; d += 2) c.push({
                    x: n + (m[d] * f[0] + m[d + 1] * f[2] + g),
                    y: n + (m[d] * f[1] + m[d + 1] * f[3] + i)
                });
            else
                for (d = 0; e > d; d += 2) c.push({
                    x: n + (m[d] + g),
                    y: n + (m[d + 1] + i)
                });
            return c
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b)
    }("MorphSVGPlugin");

/*!
 * verge 1.10.2+201705300050
 * http://npm.im/verge
 * MIT Ryan Van Etten
 */
! function(a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c()
}(this, "verge", function() {
    function a() {
        return {
            width: k(),
            height: l()
        }
    }

    function b(a, b) {
        var c = {};
        return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c
    }

    function c(a, c) {
        return !(!(a = a && !a.nodeType ? a[0] : a) || 1 !== a.nodeType) && b(a.getBoundingClientRect(), c)
    }

    function d(b) {
        b = null == b ? a() : 1 === b.nodeType ? c(b) : b;
        var d = b.height,
            e = b.width;
        return d = "function" == typeof d ? d.call(b) : d, (e = "function" == typeof e ? e.call(b) : e) / d
    }
    var e = {},
        f = "undefined" != typeof window && window,
        g = "undefined" != typeof document && document,
        h = g && g.documentElement,
        i = f.matchMedia || f.msMatchMedia,
        j = i ? function(a) {
            return !!i.call(f, a).matches
        } : function() {
            return !1
        },
        k = e.viewportW = function() {
            var a = h.clientWidth,
                b = f.innerWidth;
            return a < b ? b : a
        },
        l = e.viewportH = function() {
            var a = h.clientHeight,
                b = f.innerHeight;
            return a < b ? b : a
        };
    return e.mq = j, e.matchMedia = i ? function() {
        return i.apply(f, arguments)
    } : function() {
        return {}
    }, e.viewport = a, e.scrollX = function() {
        return f.pageXOffset || h.scrollLeft
    }, e.scrollY = function() {
        return f.pageYOffset || h.scrollTop
    }, e.rectangle = c, e.aspect = d, e.inX = function(a, b) {
        var d = c(a, b);
        return !!d && d.right >= 0 && d.left <= k()
    }, e.inY = function(a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.top <= l()
    }, e.inViewport = function(a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k()
    }, e
});