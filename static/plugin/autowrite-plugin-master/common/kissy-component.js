/*! 2014-06-11 12:06:41 */
KISSY.add("sizzle/impl", 
function() {
    function a(a, b, c, d, e, f) {
        e = 0;
        for (var g = d.length; g > e; e++) {
            var h = d[e];
            if (h) {
                var i = !1;
                for (h = h[a]; h;) {
                    if (h.sizcache === c) {
                        i = d[h.sizset];
                        break
                    }
                    if (1 !== h.nodeType || f || (h.sizcache = c, h.sizset = e), h.nodeName.toLowerCase() === b) {
                        i = h;
                        break
                    }
                    h = h[a]
                }
                d[e] = i
            }
        }
    }
    function b(a, b, c, d, e, f) {
        e = 0;
        for (var g = d.length; g > e; e++) {
            var h = d[e];
            if (h) {
                var i = !1;
                for (h = h[a]; h;) {
                    if (h.sizcache === c) {
                        i = d[h.sizset];
                        break
                    }
                    if (1 === h.nodeType) if (f || (h.sizcache = c, h.sizset = e), "string" != typeof b) {
                        if (h === b) {
                            i = !0;
                            break
                        }
                    } else if (j.filter(b, [h]).length > 0) {
                        i = h;
                        break
                    }
                    h = h[a]
                }
                d[e] = i
            }
        }
    }
    var c = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
    d = 0,
    e = Object.prototype.toString,
    f = !1,
    g = !0,
    h = /\\/g,
    i = /\W/; [0, 0].sort(function() {
        return g = !1,
        0
    });
    var j = function(a, b, d, f) {
        d = d || [];
        var g = b = b || document;
        if (1 !== b.nodeType && 9 !== b.nodeType) return [];
        if (!a || "string" != typeof a) return d;
        var h,
        i,
        k,
        n,
        p,
        q = !0,
        r = j.isXML(b),
        t = [],
        u = a;
        do
        if (c.exec(""), (h = c.exec(u)) && (u = h[3], t.push(h[1]), h[2])) {
            n = h[3];
            break
        }
        while (h);
        if (t.length > 1 && m.exec(a)) if (2 === t.length && l.relative[t[0]]) i = s(t[0] + t[1], b);
        else for (i = l.relative[t[0]] ? [b] : j(t.shift(), b); t.length;) a = t.shift(),
        l.relative[a] && (a += t.shift()),
        i = s(a, i);
        else if (!f && t.length > 1 && 9 === b.nodeType && !r && l.match.ID.test(t[0]) && !l.match.ID.test(t[t.length - 1]) && (h = j.find(t.shift(), b, r), b = h.expr ? j.filter(h.expr, h.set)[0] : h.set[0]), b) for (h = f ? {
            expr: t.pop(),
            set: o(f)
        }: j.find(t.pop(), 1 !== t.length || "~" !== t[0] && "+" !== t[0] || !b.parentNode ? b: b.parentNode, r), i = h.expr ? j.filter(h.expr, h.set) : h.set, t.length > 0 ? k = o(i) : q = !1; t.length;) h = p = t.pop(),
        l.relative[p] ? h = t.pop() : p = "",
        null == h && (h = b),
        l.relative[p](k, h, r);
        else k = [];
        if (k || (k = i), k || j.error(p || a), "[object Array]" === e.call(k)) if (q) if (b && 1 === b.nodeType) for (a = 0; null != k[a]; a++) k[a] && (k[a] === !0 || 1 === k[a].nodeType && j.contains(b, k[a])) && d.push(i[a]);
        else for (a = 0; null != k[a]; a++) k[a] && 1 === k[a].nodeType && d.push(i[a]);
        else d.push.apply(d, k);
        else o(k, d);
        return n && (j(n, g, d, f), j.uniqueSort(d)),
        d
    };
    j.uniqueSort = function(a) {
        if (q && (f = g, a.sort(q), f)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
        return a
    },
    j.matches = function(a, b) {
        return j(a, null, null, b)
    },
    j.matchesSelector = function(a, b) {
        return j(b, null, null, [a]).length > 0
    },
    j.find = function(a, b, c) {
        var d;
        if (!a) return [];
        for (var e = 0, f = l.order.length; f > e; e++) {
            var g,
            i = l.order[e];
            if (g = l.leftMatch[i].exec(a)) {
                var j = g[1];
                if (g.splice(1, 1), "\\" !== j.substr(j.length - 1) && (g[1] = (g[1] || "").replace(h, ""), d = l.find[i](g, b, c), null != d)) {
                    a = a.replace(l.match[i], "");
                    break
                }
            }
        }
        return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []),
        {
            set: d,
            expr: a
        }
    },
    j.filter = function(a, b, c, d) {
        for (var e, f, g = a, h = [], i = b, k = b && b[0] && j.isXML(b[0]); a && b.length;) {
            for (var m in l.filter) if (null != (e = l.leftMatch[m].exec(a)) && e[2]) {
                var n,
                o,
                p = l.filter[m];
                if (o = e[1], f = !1, e.splice(1, 1), "\\" !== o.substr(o.length - 1)) {
                    if (i === h && (h = []), l.preFilter[m]) if (e = l.preFilter[m](e, i, c, h, d, k)) {
                        if (e === !0) continue
                    } else f = n = !0;
                    if (e) for (var q = 0; null != (o = i[q]); q++) if (o) {
                        n = p(o, e, q, i);
                        var r = d ^ !!n;
                        c && null != n ? r ? f = !0: i[q] = !1: r && (h.push(o), f = !0)
                    }
                    if (void 0 !== n) {
                        if (c || (i = h), a = a.replace(l.match[m], ""), !f) return [];
                        break
                    }
                }
            }
            if (a === g) {
                if (null != f) break;
                j.error(a)
            }
            g = a
        }
        return i
    },
    j.error = function(a) {
        throw "Syntax error, unrecognized expression: " + a
    };
    var k,
    l = j.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
        },
        leftMatch: {},
        attrMap: {
            "class": "className",
            "for": "htmlFor"
        },
        attrHandle: {
            href: function(a) {
                return a.getAttribute("href")
            },
            type: function(a) {
                return a.getAttribute("type")
            }
        },
        relative: {
            "+": function(a, b) {
                var c = "string" == typeof b,
                d = c && !i.test(b);
                c = c && !d,
                d && (b = b.toLowerCase()),
                d = 0;
                for (var e, f = a.length; f > d; d++) if (e = a[d]) {
                    for (; (e = e.previousSibling) && 1 !== e.nodeType;);
                    a[d] = c || e && e.nodeName.toLowerCase() === b ? e || !1: e === b
                }
                c && j.filter(b, a, !0)
            },
            ">": function(a, b) {
                var c,
                d = "string" == typeof b,
                e = 0,
                f = a.length;
                if (d && !i.test(b)) for (b = b.toLowerCase(); f > e; e++)(c = a[e]) && (c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c: !1);
                else {
                    for (; f > e; e++)(c = a[e]) && (a[e] = d ? c.parentNode: c.parentNode === b);
                    d && j.filter(b, a, !0)
                }
            },
            "": function(c, e, f) {
                var g,
                h = d++,
                j = b;
                "string" != typeof e || i.test(e) || (g = e = e.toLowerCase(), j = a),
                j("parentNode", e, h, c, g, f)
            },
            "~": function(c, e, f) {
                var g,
                h = d++,
                j = b;
                "string" != typeof e || i.test(e) || (g = e = e.toLowerCase(), j = a),
                j("previousSibling", e, h, c, g, f)
            }
        },
        find: {
            ID: function(a, b, c) {
                return "undefined" == typeof b.getElementById || c ? void 0: (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
            },
            NAME: function(a, b) {
                if ("undefined" != typeof b.getElementsByName) {
                    for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                    return 0 === c.length ? null: c
                }
            },
            TAG: function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
            }
        },
        preFilter: {
            CLASS: function(a, b, c, d, e, f) {
                if (a = " " + a[1].replace(h, "") + " ", f) return a;
                f = 0;
                for (var g; null != (g = b[f]); f++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[f] = !1));
                return ! 1
            },
            ID: function(a) {
                return a[1].replace(h, "")
            },
            TAG: function(a) {
                return a[1].replace(h, "").toLowerCase()
            },
            CHILD: function(a) {
                if ("nth" === a[1]) {
                    a[2] || j.error(a[0]),
                    a[2] = a[2].replace(/^\+|\s*/g, "");
                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                    a[2] = b[1] + (b[2] || 1) - 0,
                    a[3] = b[3] - 0
                } else a[2] && j.error(a[0]);
                return a[0] = d++,
                a
            },
            ATTR: function(a, b, c, d, e, f) {
                return b = a[1] = a[1].replace(h, ""),
                !f && l.attrMap[b] && (a[1] = l.attrMap[b]),
                a[4] = (a[4] || a[5] || "").replace(h, ""),
                "~=" === a[2] && (a[4] = " " + a[4] + " "),
                a
            },
            PSEUDO: function(a, b, d, e, f) {
                if ("not" === a[1]) {
                    if (! ((c.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) return a = j.filter(a[3], b, d, !0 ^ f),
                    d || e.push.apply(e, a),
                    !1;
                    a[3] = j(a[3], null, null, b)
                } else if (l.match.POS.test(a[0]) || l.match.CHILD.test(a[0])) return ! 0;
                return a
            },
            POS: function(a) {
                return a.unshift(!0),
                a
            }
        },
        filters: {
            enabled: function(a) {
                return a.disabled === !1 && "hidden" !== a.type
            },
            disabled: function(a) {
                return a.disabled === !0
            },
            checked: function(a) {
                return a.checked === !0
            },
            selected: function(a) {
                return a.selected === !0
            },
            parent: function(a) {
                return !! a.firstChild
            },
            empty: function(a) {
                return ! a.firstChild
            },
            has: function(a, b, c) {
                return !! j(c[3], a).length
            },
            header: function(a) {
                return /h\d/i.test(a.nodeName)
            },
            text: function(a) {
                var b = a.getAttribute("type"),
                c = a.type;
                return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
            },
            radio: function(a) {
                return "input" === a.nodeName.toLowerCase() && "radio" === a.type
            },
            checkbox: function(a) {
                return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
            },
            file: function(a) {
                return "input" === a.nodeName.toLowerCase() && "file" === a.type
            },
            password: function(a) {
                return "input" === a.nodeName.toLowerCase() && "password" === a.type
            },
            submit: function(a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b || "button" === b) && "submit" === a.type
            },
            image: function(a) {
                return "input" === a.nodeName.toLowerCase() && "image" === a.type
            },
            reset: function(a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b || "button" === b) && "reset" === a.type
            },
            button: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && "button" === a.type || "button" === b
            },
            input: function(a) {
                return /input|select|textarea|button/i.test(a.nodeName)
            },
            focus: function(a) {
                return a === a.ownerDocument.activeElement
            }
        },
        setFilters: {
            first: function(a, b) {
                return 0 === b
            },
            last: function(a, b, c, d) {
                return b === d.length - 1
            },
            even: function(a, b) {
                return b % 2 === 0
            },
            odd: function(a, b) {
                return b % 2 === 1
            },
            lt: function(a, b, c) {
                return b < c[3] - 0
            },
            gt: function(a, b, c) {
                return b > c[3] - 0
            },
            nth: function(a, b, c) {
                return c[3] - 0 === b
            },
            eq: function(a, b, c) {
                return c[3] - 0 === b
            }
        },
        filter: {
            PSEUDO: function(a, b, c, d) {
                var e = b[1],
                f = l.filters[e];
                if (f) return f(a, c, b, d);
                if ("contains" === e) return (a.textContent || a.innerText || j.getText([a]) || "").indexOf(b[3]) >= 0;
                if ("not" === e) {
                    for (b = b[3], c = 0, d = b.length; d > c; c++) if (b[c] === a) return ! 1;
                    return ! 0
                }
                j.error(e)
            },
            CHILD: function(a, b) {
                var c = b[1],
                d = a;
                switch (c) {
                case "only":
                case "first":
                    for (; d = d.previousSibling;) if (1 === d.nodeType) return ! 1;
                    if ("first" === c) return ! 0;
                    d = a;
                case "last":
                    for (; d = d.nextSibling;) if (1 === d.nodeType) return ! 1;
                    return ! 0;
                case "nth":
                    c = b[2];
                    var e = b[3];
                    if (1 === c && 0 === e) return ! 0;
                    var f = b[0],
                    g = a.parentNode;
                    if (g && (g.sizcache !== f || !a.nodeIndex)) {
                        var h = 0;
                        for (d = g.firstChild; d; d = d.nextSibling) 1 === d.nodeType && (d.nodeIndex = ++h);
                        g.sizcache = f
                    }
                    return d = a.nodeIndex - e,
                    0 === c ? 0 === d: d % c === 0 && d / c >= 0
                }
            },
            ID: function(a, b) {
                return 1 === a.nodeType && a.getAttribute("id") === b
            },
            TAG: function(a, b) {
                return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
            },
            CLASS: function(a, b) {
                return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
            },
            ATTR: function(a, b) {
                var c = b[1];
                c = l.attrHandle[c] ? l.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c);
                var d = c + "",
                e = b[2],
                f = b[4];
                return null == c ? "!=" === e: "=" === e ? d === f: "*=" === e ? d.indexOf(f) >= 0: "~=" === e ? (" " + d + " ").indexOf(f) >= 0: f ? "!=" === e ? d !== f: "^=" === e ? 0 === d.indexOf(f) : "$=" === e ? d.substr(d.length - f.length) === f: "|=" === e ? d === f || d.substr(0, f.length + 1) === f + "-": !1: d && c !== !1
            },
            POS: function(a, b, c, d) {
                var e = l.setFilters[b[2]];
                return e ? e(a, c, b, d) : void 0
            }
        }
    },
    m = l.match.POS,
    n = function(a, b) {
        return "\\" + (b - 0 + 1)
    };
    for (k in l.match) l.match[k] = RegExp(l.match[k].source + /(?![^\[]*\])(?![^\(]*\))/.source),
    l.leftMatch[k] = RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[k].source.replace(/\\(\d+)/g, n));
    var o = function(a, b) {
        return a = Array.prototype.slice.call(a, 0),
        b ? (b.push.apply(b, a), b) : a
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)
    } catch(p) {
        o = function(a, b) {
            var c = 0,
            d = b || [];
            if ("[object Array]" === e.call(a)) Array.prototype.push.apply(d, a);
            else if ("number" == typeof a.length) for (var f = a.length; f > c; c++) d.push(a[c]);
            else for (; a[c]; c++) d.push(a[c]);
            return d
        }
    }
    var q,
    r;
    document.documentElement.compareDocumentPosition ? q = function(a, b) {
        return a === b ? (f = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1: 1: a.compareDocumentPosition ? -1: 1
    }: (q = function(a, b) {
        if (a === b) return f = !0,
        0;
        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
        var c,
        d,
        e = [],
        g = [];
        c = a.parentNode,
        d = b.parentNode;
        var h = c;
        if (c === d) return r(a, b);
        if (!c) return - 1;
        if (!d) return 1;
        for (; h;) e.unshift(h),
        h = h.parentNode;
        for (h = d; h;) g.unshift(h),
        h = h.parentNode;
        for (c = e.length, d = g.length, h = 0; c > h && d > h; h++) if (e[h] !== g[h]) return r(e[h], g[h]);
        return h === c ? r(a, g[h], -1) : r(e[h], b, 1)
    },
    r = function(a, b, c) {
        if (a === b) return c;
        for (a = a.nextSibling; a;) {
            if (a === b) return - 1;
            a = a.nextSibling
        }
        return 1
    }),
    j.getText = function(a) {
        for (var b, c = "", d = 0; a[d]; d++) b = a[d],
        3 === b.nodeType || 4 === b.nodeType ? c += b.nodeValue: 8 !== b.nodeType && (c += j.getText(b.childNodes));
        return c
    },
    function() {
        var a = document.createElement("div"),
        b = "script" + (new Date).getTime(),
        c = document.documentElement;
        a.innerHTML = "<a name='" + b + "'/>",
        c.insertBefore(a, c.firstChild),
        document.getElementById(b) && (l.find.ID = function(a, b, c) {
            return "undefined" == typeof b.getElementById || c ? void 0: (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : void 0: []
        },
        l.filter.ID = function(a, b) {
            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
            return 1 === a.nodeType && c && c.nodeValue === b
        }),
        c.removeChild(a),
        c = a = null
    } (),
    function() {
        var a = document.createElement("div");
        a.appendChild(document.createComment("")),
        a.getElementsByTagName("*").length > 0 && (l.find.TAG = function(a, b) {
            var c = b.getElementsByTagName(a[1]);
            if ("*" === a[1]) {
                for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                c = d
            }
            return c
        }),
        a.innerHTML = "<a href='#'></a>",
        a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (l.attrHandle.href = function(a) {
            return a.getAttribute("href", 2)
        }),
        a = null
    } (),
    document.querySelectorAll && 
    function() {
        var a = j,
        b = document.createElement("div");
        if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
            j = function(b, c, d, e) {
                if (c = c || document, !e && !j.isXML(c)) {
                    var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                        if (f[1]) return o(c.getElementsByTagName(b), d);
                        if (f[2] && l.find.CLASS && c.getElementsByClassName) return o(c.getElementsByClassName(f[2]), d)
                    }
                    if (9 === c.nodeType) {
                        if ("body" === b && c.body) return o([c.body], d);
                        if (f && f[3]) {
                            var g = c.getElementById(f[3]);
                            if (!g || !g.parentNode) return o([], d);
                            if (g.id === f[3]) return o([g], d)
                        }
                        try {
                            return o(c.querySelectorAll(b), d)
                        } catch(h) {}
                    } else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                        f = c;
                        var i = (g = c.getAttribute("id")) || "__sizzle__",
                        k = c.parentNode,
                        m = /^\s*[+~]/.test(b);
                        g ? i = i.replace(/'/g, "\\$&") : c.setAttribute("id", i),
                        m && k && (c = c.parentNode);
                        try {
                            if (!m || k) return o(c.querySelectorAll("[id='" + i + "'] " + b), d)
                        } catch(n) {} finally {
                            g || f.removeAttribute("id")
                        }
                    }
                }
                return a(b, c, d, e)
            };
            for (var c in a) j[c] = a[c];
            b = null
        }
    } (),
    function() {
        var a = document.documentElement,
        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
        if (b) {
            var c = !b.call(document.createElement("div"), "div"),
            d = !1;
            try {
                b.call(document.documentElement, "[test!='']:sizzle")
            } catch(e) {
                d = !0
            }
            j.matchesSelector = function(a, e) {
                if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !j.isXML(a)) try {
                    if (d || !l.match.PSEUDO.test(e) && !/!=/.test(e)) {
                        var f = b.call(a, e);
                        if (f || !c || a.document && 11 !== a.document.nodeType) return f
                    }
                } catch(g) {}
                return j(e, null, null, [a]).length > 0
            }
        }
    } (),
    function() {
        var a = document.createElement("div");
        a.innerHTML = "<div class='test e'></div><div class='test'></div>",
        a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (l.order.splice(1, 0, "CLASS"), l.find.CLASS = function(a, b, c) {
            return "undefined" == typeof b.getElementsByClassName || c ? void 0: b.getElementsByClassName(a[1])
        },
        a = null))
    } (),
    j.contains = document.documentElement.contains ? 
    function(a, b) {
        return a !== b && (a.contains ? a.contains(b) : !0)
    }: document.documentElement.compareDocumentPosition ? 
    function(a, b) {
        return !! (16 & a.compareDocumentPosition(b))
    }: function() {
        return ! 1
    },
    j.isXML = function(a) {
        return (a = (a ? a.ownerDocument || a: 0).documentElement) ? "HTML" !== a.nodeName: !1
    };
    var s = function(a, b) {
        for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = l.match.PSEUDO.exec(a);) e += c[0],
        a = a.replace(l.match.PSEUDO, "");
        a = l.relative[a] ? a + "*": a,
        c = 0;
        for (var g = f.length; g > c; c++) j(a, f[c], d);
        return j.filter(e, d)
    };
    return j
}),
KISSY.add("sizzle", 
function(a, b) {
    return b
},
{
    requires: ["sizzle/impl"]
}),
KISSY.add("datalazyload/impl", 
function(a, b, c, d) {
    function e(c, f) {
        return this instanceof e ? (f === d && (f = c, c = [h]), a.isArray(c) || (c = [b.get(c) || h]), this.containers = c, this.config = a.merge(k, f), this.callbacks = {
            els: [],
            fns: []
        },
        this._init(), d) : new e(c, f)
    }
    var f = window,
    g = .1,
    h = document,
    i = "scroll",
    j = "resize",
    k = {
        mod: "manual",
        diff: "default",
        placeholder: "none",
        execScript: !0
    };
    return a.augment(e, {
        _init: function() {
            this.threshold = this._getThreshold(),
            this._filterItems(),
            this._initLoadEvent()
        },
        _filterItems: function() {
            var c,
            d,
            e,
            f = this.containers,
            g = [],
            h = [];
            for (c = 0, d = f.length; d > c; ++c) e = b.query("img", f[c]),
            g = g.concat(a.filter(e, this._filterImg, this)),
            e = b.query("textarea", f[c]),
            h = h.concat(a.filter(e, this._filterArea, this));
            this.images = g,
            this.areaes = h
        },
        _filterImg: function(a) {
            var c = a.getAttribute("data-ks-lazyload"),
            d = this.threshold,
            e = this.config.placeholder;
            if ("manual" === this.config.mod) {
                if (c) return "none" !== e && (a.src = e),
                !0
            } else if (b.offset(a).top > d && !c) return b.attr(a, "data-ks-lazyload", a.src),
            "none" !== e ? a.src = e: a.removeAttribute("src"),
            !0
        },
        _filterArea: function(a) {
            return b.hasClass(a, "ks-datalazyload")
        },
        _initLoadEvent: function() {
            function b() {
                e || (e = a.later(function() {
                    d(),
                    e = null
                },
                g))
            }
            function d() {
                k._loadItems(),
                0 === k._getItemsLength() && (c.remove(f, i, b), c.remove(f, j, h))
            }
            var e,
            h,
            k = this;
            c.on(f, i, b),
            c.on(f, j, h = function() {
                k.threshold = k._getThreshold(),
                b()
            }),
            k._getItemsLength() && a.ready(function() {
                d()
            })
        },
        _loadItems: function() {
            this._loadImgs(),
            this._loadAreas(),
            this._fireCallbacks()
        },
        _loadImgs: function() {
            this.images = a.filter(this.images, this._loadImg, this)
        },
        _loadImg: function(a) {
            var c = this.threshold + b.scrollTop();
            return b.offset(a).top <= c ? void this._loadImgSrc(a) : !0
        },
        _loadImgSrc: function(a, b) {
            b = b || "data-ks-lazyload";
            var c = a.getAttribute(b);
            c && a.src != c && (a.src = c, a.removeAttribute(b))
        },
        _loadAreas: function() {
            this.areaes = a.filter(this.areaes, this._loadArea, this)
        },
        _loadArea: function(a) {
            var c = "none" === b.css(a, "display");
            return b.offset(c ? a.parentNode: a).top <= this.threshold + b.scrollTop() ? void this._loadAreaData(a.parentNode, a, this.config.execScript) : !0
        },
        _loadAreaData: function(a, c, e) {
            c.style.display = "none",
            c.className = "",
            a = b.create("<div>"),
            c.parentNode.insertBefore(a, c),
            b.html(a, c.value, e === d ? !0: e)
        },
        _fireCallbacks: function() {
            var a,
            c,
            d,
            e = this.callbacks,
            f = e.els,
            g = e.fns,
            h = this.threshold + b.scrollTop(),
            i = [],
            j = [];
            for (a = 0; (c = f[a]) && (d = g[a++]);) b.offset(c).top <= h ? d.call(c) : (i.push(c), j.push(d));
            e.els = i,
            e.fns = j
        },
        addCallback: function(c, d) {
            var e = this.callbacks; (c = b.get(c)) && a.isFunction(d) && (e.els.push(c), e.fns.push(d)),
            this._fireCallbacks()
        },
        _getThreshold: function() {
            var a = this.config.diff,
            c = b.viewportHeight();
            return "default" === a ? 2 * c: c + +a
        },
        _getItemsLength: function() {
            return this.images.length + this.areaes.length + this.callbacks.els.length
        },
        loadCustomLazyData: function(c, d) {
            var e,
            f,
            g = this;
            "img-src" === d && (d = "img"),
            a.isArray(c) || (c = [b.get(c)]),
            a.each(c, 
            function(c) {
                switch (d) {
                case "img":
                    f = "IMG" === c.nodeName ? [c] : b.query("img", c),
                    a.each(f, 
                    function(a) {
                        g._loadImgSrc(a, "data-ks-lazyload-custom")
                    });
                    break;
                default:
                    (e = b.get("textarea", c)) && b.hasClass(e, "ks-datalazyload-custom") && g._loadAreaData(c, e)
                }
            })
        }
    }),
    a.mix(e, e.prototype, !0, ["loadCustomLazyData", "_loadImgSrc", "_loadAreaData"]),
    e
},
{
    requires: ["dom", "event"]
}),
KISSY.add("datalazyload", 
function(a, b) {
    return a.DataLazyload = b
},
{
    requires: ["datalazyload/impl"]
}),
KISSY.add("menu/delmenuitem", 
function(a, b, c, d, e, f) {
    function g(a) {
        var b = a.get("parent");
        b.fire("beforeDelete", {
            target: a
        }) !== !1 && (b.removeChild(a, !0), b.set("highlightedItem", null), b.fire("delete", {
            target: a
        }))
    }
    var h = b.all;
    a = f.CLS;
    var i = f.DEL_CLS;
    return c = c.create(e, {
        _performInternal: function(a) {
            return h(a.target).hasClass(this.getCls(i)) ? (g(this), !0) : e.prototype._performInternal.call(this, a)
        },
        _handleKeydown: function(a) {
            return a.keyCode === b.KeyCodes.D ? (g(this), !0) : void 0
        }
    },
    {
        ATTRS: {
            delTooltip: {
                view: !0
            }
        },
        DefaultRender: f
    }),
    d.UIStore.setUIByClass(a, {
        priority: d.UIStore.PRIORITY.LEVEL4,
        ui: c
    }),
    c
},
{
    requires: ["node", "uibase", "component", "./menuitem", "./delmenuitemrender"]
}),
KISSY.add("menu/delmenuitemrender", 
function(a, b, c, d, e) {
    function f(b) {
        b.get("contentEl").append(a.substitute(g, {
            prefixCls: b.get("prefixCls"),
            tooltip: b.get("delTooltip")
        }))
    }
    var g = '<span class="{prefixCls}menuitem-delete" title="{tooltip}">X</span>';
    return c.create(e, {
        createDom: function() {
            f(this)
        },
        _uiSetContent: function(a) {
            e.prototype._uiSetContent.call(this, a),
            f(this)
        },
        _uiSetDelTooltip: function() {
            this._uiSetContent(this.get("content"))
        }
    },
    {
        ATTRS: {
            delTooltip: {}
        },
        HTML_PARSER: {
            delEl: function(a) {
                return a.one(this.getCls("menuitem-delete"))
            }
        },
        CLS: "menuitem-deletable",
        DEL_CLS: "menuitem-delete"
    })
},
{
    requires: ["node", "uibase", "component", "./menuitemrender"]
}),
KISSY.add("menu/filtermenu", 
function(a, b, c, d, e) {
    var f = b.create(d, {
        bindUI: function() {
            this.get("view").get("filterInput").on("keyup", this.handleFilterEvent, this)
        },
        _handleMouseEnter: function() {
            f.superclass._handleMouseEnter.apply(this, arguments),
            this.getKeyEventTarget()[0].select()
        },
        handleFilterEvent: function() {
            var a = this.get("view").get("filterInput"),
            b = this.get("highlightedItem");
            this.set("filterStr", a.val()),
            b && b.get("visible") || this.set("highlightedItem", this._getNextEnabledHighlighted(0, 1))
        },
        _uiSetFilterStr: function(a) {
            this.filterItems(a)
        },
        filterItems: function(b) {
            var c = this.get("view"),
            d = c.get("labelEl");
            if (c = c.get("filterInput"), d[b ? "hide": "show"](), this.get("allowMultiple")) {
                d = [];
                var e;
                e = b.match(/(.+)[,\uff0c]\s*([^\uff0c,]*)/);
                var f = [];
                e && (f = e[1].split(/[,\uff0c]/)),
                /[,\uff0c]$/.test(b) ? (d = [], e && (d = f, e = f[f.length - 1], (f = (f = this.get("highlightedItem")) && f.get("content")) && f.indexOf(e) > -1 && e && (d[d.length - 1] = f), c.val(d.join(",") + ",")), b = "") : (e && (b = e[2] || ""), d = f),
                this.get("enteredItems").length != d.length && this.set("enteredItems", d)
            }
            c = this.get("children");
            var g = b && RegExp(b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "ig"),
            h = this.getCls("menuitem-hit");
            a.each(c, 
            function(a) {
                var c = a.get("content");
                b ? c.indexOf(b) > -1 ? (a.set("visible", !0), a.get("contentEl").html(c.replace(g, 
                function(a) {
                    return "<span class='" + h + "'>" + a + "</span>"
                }))) : a.set("visible", !1) : (a.get("contentEl").html(c), a.set("visible", !0))
            })
        },
        decorateInternal: function(a) {
            this.set("el", a),
            this.decorateChildren(a.one("." + this.getCls("menu-content")))
        },
        reset: function() {
            var a = this.get("view");
            this.set("filterStr", ""),
            this.set("enteredItems", []),
            (a = a && a.get("filterInput")) && a.val("")
        },
        destructor: function() {
            var a = this.get("view"); (a = a && a.get("filterInput")) && a.detach()
        }
    },
    {
        ATTRS: {
            label: {
                view: !0
            },
            filterStr: {},
            enteredItems: {
                value: []
            },
            allowMultiple: {
                value: !1
            }
        },
        DefaultRender: e
    });
    return c.UIStore.setUIByClass("filtermenu", {
        priority: c.UIStore.PRIORITY.LEVEL2,
        ui: f
    }),
    f
},
{
    requires: ["uibase", "component", "./menu", "./filtermenurender"]
}),
KISSY.add("menu/filtermenurender", 
function(a, b, c, d) {
    var e = b.all;
    return c.create(d, {
        getContentElement: function() {
            return this.get("menuContent")
        },
        getKeyEventTarget: function() {
            return this.get("filterInput")
        },
        createDom: function() {
            var a = d.prototype.getContentElement.call(this),
            b = this.get("filterWrap");
            b || this.set("filterWrap", b = e("<div class='" + this.getCls("menu-filter") + "'/>").appendTo(a)),
            this.get("labelEl") || this.set("labelEl", e("<div class='" + this.getCls("menu-filter-label") + "'/>").appendTo(b)),
            this.get("filterInput") || this.set("filterInput", e("<input autocomplete='off'/>").appendTo(b)),
            this.get("menuContent") || this.set("menuContent", e("<div class='" + this.getCls("menu-content") + "'/>").appendTo(a))
        },
        _uiSetLabel: function(a) {
            this.get("labelEl").html(a)
        }
    },
    {
        ATTRS: {
            label: {}
        },
        HTML_PARSER: {
            labelEl: function(a) {
                return a.one("." + this.getCls("menu-filter")).one("." + this.getCls("menu-filter-label"))
            },
            filterWrap: function(a) {
                return a.one("." + this.getCls("menu-filter"))
            },
            menuContent: function(a) {
                return a.one("." + this.getCls("menu-content"))
            },
            filterInput: function(a) {
                return a.one("." + this.getCls("menu-filter")).one("input")
            }
        }
    })
},
{
    requires: ["node", "uibase", "./menurender"]
}),
KISSY.add("menu/menu", 
function(a, b, c, d, e) {
    function f() {
        this.set("highlightedItem", void 0)
    }
    var g = b.KeyCodes,
    h = c.create(d.Container, {
        _uiSetHighlightedItem: function(a, b) {
            var c = b && b.prevVal;
            c && c.set("highlighted", !1),
            a && a.set("highlighted", !0),
            this.set("activeItem", a)
        },
        _handleBlur: function(a) {
            h.superclass._handleBlur.call(this, a),
            this.set("highlightedItem", void 0)
        },
        _getNextEnabledHighlighted: function(a, b) {
            var c = this.get("children"),
            d = c.length,
            e = a;
            do {
                var f = c[a];
                if (!f.get("disabled") && f.get("visible") !== !1) return c[a];
                a = (a + b + d) % d
            }
            while (a != e)
        },
        _handleKeydown: function(a) {
            return this._handleKeyEventInternal(a) ? (a.halt(), !0) : void 0
        },
        _handleKeyEventInternal: function(b) {
            var c = this.get("highlightedItem");
            if (c && c._handleKeydown(b)) return ! 0;
            var d = this.get("children"),
            e = d.length;
            if (0 !== e) {
                switch (b.keyCode) {
                case g.ESC:
                    return;
                case g.HOME:
                    this.set("highlightedItem", this._getNextEnabledHighlighted(0, 1));
                    break;
                case g.END:
                    this.set("highlightedItem", this._getNextEnabledHighlighted(e - 1, -1));
                    break;
                case g.UP:
                    c ? (b = a.indexOf(c, d), e = (b - 1 + e) % e) : e -= 1,
                    this.set("highlightedItem", this._getNextEnabledHighlighted(e, -1));
                    break;
                case g.DOWN:
                    c ? (b = a.indexOf(c, d), e = (b + 1 + e) % e) : e = 0,
                    this.set("highlightedItem", this._getNextEnabledHighlighted(e, 1));
                    break;
                default:
                    return
                }
                return ! 0
            }
        },
        bindUI: function() {
            this.on("hide", f, this)
        },
        containsElement: function(a) {
            if (!this.get("view") || this.get("view").containsElement(a)) return ! 0;
            for (var b = this.get("children"), c = 0, d = b.length; d > c; c++) {
                var e = b[c];
                if ("function" == typeof e.containsElement && e.containsElement(a)) return ! 0
            }
            return ! 1
        }
    },
    {
        ATTRS: {
            focusable: {
                value: !0
            },
            visibleMode: {
                value: "display"
            },
            highlightedItem: {},
            activeItem: {
                view: !0
            }
        },
        DefaultRender: e
    });
    return d.UIStore.setUIByClass("menu", {
        priority: d.UIStore.PRIORITY.LEVEL1,
        ui: h
    }),
    h
},
{
    requires: ["event", "uibase", "component", "./menurender", "./submenu"]
}),
KISSY.add("menu/menuitem", 
function(a, b, c, d) {
    var e = a.all,
    f = b.create(c.ModelControl, [b.Contentbox], {
        _handleMouseEnter: function(a) {
            return f.superclass._handleMouseEnter.call(this, a) ? !0: void this.get("parent").set("highlightedItem", this)
        },
        _handleMouseLeave: function(a) {
            return f.superclass._handleMouseLeave.call(this, a) ? !0: void this.get("parent").set("highlightedItem", void 0)
        },
        _performInternal: function() {
            return this.get("selectable") && this.set("selected", !0),
            this.get("checkable") && this.set("checked", !this.get("checked")),
            this.get("parent").fire("click", {
                target: this
            }),
            !0
        },
        _uiSetChecked: function(a) {
            this._forwardSetAttrToView("checked", a)
        },
        _uiSetSelected: function(a) {
            this._forwardSetAttrToView("selected", a)
        },
        _uiSetHighlighted: function(a) {
            if (f.superclass._uiSetHighlighted.apply(this, arguments), a) {
                var b = this.get("el"),
                c = b.parent(function(a) {
                    return "visible" != e(a).css("overflow")
                },
                this.get("parent").get("el").parent());
                c && b.scrollIntoView(c, void 0, void 0, !0)
            }
        },
        containsElement: function(a) {
            return this.get("view") && this.get("view").containsElement(a)
        }
    },
    {
        ATTRS: {
            focusable: {
                value: !1
            },
            visibleMode: {
                value: "display"
            },
            handleMouseEvents: {
                value: !1
            },
            selectable: {
                view: !0
            },
            checkable: {
                view: !0
            },
            value: {},
            checked: {},
            selected: {}
        },
        HTML_PARSER: {
            selectable: function(a) {
                var b = this.getCls("menuitem-selectable");
                return a.hasClass(b)
            }
        }
    });
    return f.DefaultRender = d,
    c.UIStore.setUIByClass("menuitem", {
        priority: c.UIStore.PRIORITY.LEVEL1,
        ui: f
    }),
    f
},
{
    requires: ["uibase", "component", "./menuitemrender"]
}),
KISSY.add("menu/menuitemrender", 
function(a, b, c, d) {
    return c.create(d.Render, [c.Contentbox.Render], {
        renderUI: function() {
            var b = this.get("el");
            b.attr("role", "menuitem"),
            this.get("contentEl").addClass(this.getCls("menuitem-content")),
            b.attr("id") || b.attr("id", a.guid("ks-menuitem"))
        },
        _setSelected: function(a, b) {
            var c = this.get("el"),
            d = this._completeClasses(b, "-selected");
            c[a ? "addClass": "removeClass"](d)
        },
        _setChecked: function(a, b) {
            var c = this.get("el"),
            d = this._completeClasses(b, "-checked");
            c[a ? "addClass": "removeClass"](d)
        },
        _uiSetSelectable: function(a) {
            this.get("el").attr("role", a ? "menuitemradio": "menuitem")
        },
        _uiSetCheckable: function(a) {
            if (a) {
                var c = this.get("el"),
                d = this.getCls("menuitem-checkbox"),
                e = c.one("." + d);
                e || (e = new b("<div class='" + d + "'/>").prependTo(c), e.unselectable())
            }
            this.get("el").attr("role", a ? "menuitemcheckbox": "menuitem")
        },
        containsElement: function(a) {
            var b = this.get("el");
            return b[0] == a || b.contains(a)
        }
    },
    {
        ATTRS: {
            selected: {},
            checked: {}
        }
    })
},
{
    requires: ["node", "uibase", "component"]
}),
KISSY.add("menu/menurender", 
function(a, b, c, d) {
    return c.create(d.Render, [c.Contentbox.Render], {
        renderUI: function() {
            var b = this.get("el");
            b.attr("role", "menu").attr("aria-haspopup", !0),
            b.attr("id") || b.attr("id", a.guid("ks-menu"))
        },
        _uiSetActiveItem: function(a) {
            var b = this.get("el");
            a ? (a = a.get("el").attr("id"), b.attr("aria-activedescendant", a)) : b.attr("aria-activedescendant", "")
        },
        containsElement: function(a) {
            var b = this.get("el");
            return b[0] === a || b.contains(a)
        }
    },
    {
        ATTRS: {
            activeItem: {}
        }
    })
},
{
    requires: ["ua", "uibase", "component"]
}),
KISSY.add("menu/popupmenu", 
function(a, b, c, d, e) {
    function f(a) {
        var b,
        c = a.get("parent");
        return c && c.get("menu") === a && (b = c.get("parent")),
        b
    }
    function g(a) {
        return (a = f(a)) && a.get(h) ? a: 0
    }
    var h = "autoHideOnMouseLeave",
    i = b.create(d, [b.Position, b.Align], {
        _clearLeaveHideTimers: function() {
            var a,
            b,
            c;
            if (this.get(h)) { (a = this._leaveHideTimer) && (clearTimeout(a), this._leaveHideTimer = 0);
                var d = this.get("children");
                for (a = 0; a < d.length; a++) b = d[a],
                (c = b.get("menu")) && c.get(h) && c._clearLeaveHideTimers()
            }
        },
        _handleMouseLeave: function() {
            var a = this;
            a.get(h) && (a._leaveHideTimer = setTimeout(function() {
                for (var b, c = b = a; c && (b = c, c = g(b), c););
                b = b,
                b.hide(),
                (b = f(b)) && b.set("highlightedItem", null)
            },
            a.get("autoHideDelay")))
        },
        _handleMouseEnter: function() {
            var a = g(this);
            a ? a._clearLeaveHideTimers() : this._clearLeaveHideTimers()
        },
        _handleBlur: function() {
            i.superclass._handleBlur.apply(this, arguments),
            this.hide()
        }
    },
    {
        ATTRS: {
            focusable: {
                value: !1
            },
            visibleMode: {
                value: "visibility"
            },
            autoHideOnMouseLeave: {},
            autoHideDelay: {
                value: 100
            }
        },
        DefaultRender: e
    });
    return c.UIStore.setUIByClass("popupmenu", {
        priority: c.UIStore.PRIORITY.LEVEL2,
        ui: i
    }),
    i
},
{
    requires: ["uibase", "component", "./menu", "./popupmenurender"]
}),
KISSY.add("menu/popupmenurender", 
function(a, b, c, d) {
    return c.create(d, [c.Position.Render, 6 === b.ie ? c.Shim.Render: null])
},
{
    requires: ["ua", "uibase", "./menurender"]
}),
KISSY.add("menu/separator", 
function(a, b, c, d) {
    return a = b.create(c.ModelControl, {},
    {
        ATTRS: {
            focusable: {
                value: !1
            },
            disabled: {
                value: !0
            },
            handleMouseEvents: {
                value: !1
            }
        },
        DefaultRender: d
    }),
    c.UIStore.setUIByClass("menuseparator", {
        priority: c.UIStore.PRIORITY.LEVEL2,
        ui: a
    }),
    a
},
{
    requires: ["uibase", "component", "./separatorrender"]
}),
KISSY.add("menu/separatorrender", 
function(a, b, c) {
    return b.create(c.Render, {
        createDom: function() {
            this.get("el").attr("role", "separator")
        }
    })
},
{
    requires: ["uibase", "component"]
}),
KISSY.add("menu/submenu", 
function(a, b, c, d, e, f) {
    function g(a) {
        var b = this.get("menu");
        a = a.target;
        var c = this.get("el");
        c.contains(a) || c[0] === a || b.containsElement(a) || (b.hide(), this.get("parent").set("highlightedItem", null))
    }
    var h = b.KeyCodes,
    i = document,
    j = c.create(e, [d.DecorateChild], {
        _onParentHide: function() {
            this.get("menu") && this.get("menu").hide()
        },
        bindUI: function() {
            var a = this.get("parent"),
            c = this.get("menu");
            a && (a.on("hide", this._onParentHide, this), c.on("click", 
            function(b) {
                a.fire("click", {
                    target: b.target
                })
            }), a.__bindDocClickToHide || (b.on(i, "click", g, this), c.__bindDocClickToHide = 1), c.on("afterActiveItemChange", 
            function(b) {
                a.set("activeItem", b.newVal)
            })),
            c.on("beforeHighlightedItemChange", this.onChildHighlight_, this)
        },
        _handleMouseEnter: function(b) {
            return j.superclass._handleMouseEnter.call(this, b) ? !0: (this.clearTimers(), void(this.showTimer_ = a.later(this.showMenu, this.get("menuDelay"), !1, this)))
        },
        showMenu: function() {
            var b = this.get("menu");
            b.set("align", a.mix({
                node: this.get("el"),
                points: ["tr", "tl"]
            },
            this.get("menuAlign"))),
            b.render(),
            this.get("el").attr("aria-haspopup", b.get("el").attr("id")),
            b.show()
        },
        clearTimers: function() {
            this.dismissTimer_ && (this.dismissTimer_.cancel(), this.dismissTimer_ = null),
            this.showTimer_ && (this.showTimer_.cancel(), this.showTimer_ = null)
        },
        onChildHighlight_: function(a) {
            a.newVal && this.get("menu").get("parent") == this && (this.clearTimers(), this.get("parent").set("highlightedItem", this))
        },
        hideMenu: function() {
            var a = this.get("menu");
            a && a.hide()
        },
        _performInternal: function() {
            this.clearTimers(),
            this.showMenu(),
            j.superclass._performInternal.apply(this, arguments)
        },
        _handleKeydown: function(a) {
            var c = this.get("menu"),
            d = c && c.get("visible"),
            e = a.keyCode;
            if (d) {
                if (!c._handleKeydown(a)) {
                    if (e != h.LEFT) return;
                    this.hideMenu(),
                    this.get("parent").set("activeItem", this)
                }
            } else {
                if (e != h.RIGHT) return a.keyCode == b.KeyCodes.ENTER ? this._performInternal(a) : void 0;
                this.showMenu(),
                a = c.get("children"),
                a[0] && c.set("highlightedItem", a[0])
            }
            return ! 0
        },
        _uiSetHighlighted: function(b, c) {
            j.superclass._uiSetHighlighted.call(this, b, c),
            b || (this.dismissTimer_ && this.dismissTimer_.cancel(), this.dismissTimer_ = a.later(this.hideMenu, this.get("menuDelay"), !1, this))
        },
        containsElement: function(a) {
            var b = this.get("menu");
            return b && b.containsElement(a)
        },
        decorateChildrenInternal: function(b, c, d) {
            c.css("visibility", "hidden"),
            a.one(c[0].ownerDocument.body).prepend(c),
            this.set("menu", new b({
                srcNode: c,
                prefixCls: d
            }))
        },
        destructor: function() {
            var a = this.get("parent"),
            c = this.get("menu");
            this.clearTimers(),
            b.remove(i, "click", g, this),
            a && a.detach("hide", this._onParentHide, this),
            !this.get("externalSubMenu") && c && c.destroy()
        }
    },
    {
        ATTRS: {
            menuDelay: {
                value: 300
            },
            externalSubMenu: {
                value: !1
            },
            menuAlign: {},
            menu: {
                setter: function(a) {
                    a.set("parent", this)
                }
            },
            decorateChildCls: {
                value: "popupmenu"
            }
        },
        DefaultRender: f
    });
    return d.UIStore.setUIByClass("submenu", {
        priority: d.UIStore.PRIORITY.LEVEL2,
        ui: j
    }),
    j
},
{
    requires: ["event", "uibase", "component", "./menuitem", "./submenurender"]
}),
KISSY.add("menu/submenurender", 
function(a, b, c) {
    var d;
    return d = b.create(c, {
        renderUI: function() {
            var b = this.get("el"),
            c = this.get("contentEl");
            b.attr("aria-haspopup", "true"),
            c.append(a.substitute('<span class="{prefixCls}submenu-arrow">►</span>', {
                prefixCls: this.get("prefixCls")
            }))
        },
        _uiSetContent: function(b) {
            d.superclass._uiSetContent.call(this, b),
            this.get("contentEl").append(a.substitute('<span class="{prefixCls}submenu-arrow">►</span>', {
                prefixCls: this.get("prefixCls")
            }))
        }
    })
},
{
    requires: ["uibase", "./menuitemrender"]
}),
KISSY.add("menu", 
function(a, b, c, d, e, f, g, h, i, j, k, l) {
    return b.Render = c,
    b.Item = d,
    b.Item.Render = e,
    b.SubMenu = f,
    f.Render = g,
    b.Separator = h,
    b.PopupMenu = j,
    b.FilterMenu = k,
    b.DelMenuItem = l,
    b
},
{
    requires: ["menu/menu", "menu/menurender", "menu/menuitem", "menu/menuitemrender", "menu/submenu", "menu/submenurender", "menu/separator", "menu/separatorrender", "menu/popupmenu", "menu/filtermenu", "menu/delmenuitem", "menu/delmenuitemrender"]
}),
KISSY.add("menubutton/menubutton", 
function(a, b, c, d, e, f, g, h) {
    function i() {
        var b = this,
        c = b.get("menu"),
        d = b.get("el");
        c && c.get("visible") && c.set("align", a.merge({
            node: d
        },
        l, b.get("menuAlign")))
    }
    var j = c.all,
    k = c.KeyCodes,
    l = {
        points: ["bl", "tl"],
        overflow: {
            failX: 1,
            failY: 1,
            adjustX: 1,
            adjustY: 1
        }
    },
    m = b.create(d, [g.DecorateChild], {
        initializer: function() {
            this._reposition = a.buffer(i, 50, this)
        },
        _hideMenu: function() {
            var a = this.get("menu");
            a && a.hide()
        },
        _showMenu: function() {
            var b = this,
            c = b.get("el"),
            d = b.get("menu");
            d && !d.get("visible") && (d.set("align", a.merge({
                node: c
            },
            l, b.get("menuAlign"))), d.show(), c.attr("aria-haspopup", d.get("el").attr("id")))
        },
        _uiSetCollapsed: function(a) {
            a ? this._hideMenu() : this._showMenu()
        },
        __bindMenu: function() {
            var b = this,
            c = this.get("menu");
            c && (c.on("afterActiveItemChange", 
            function(a) {
                b.set("activeItem", a.newVal)
            }), c.on("click", b._handleMenuClick, b), j(window).on("resize", b._reposition, b), b.__bindMenu = a.noop)
        },
        _handleMenuClick: function(a) {
            this.fire("click", {
                target: a.target
            }),
            this.set("collapsed", !0)
        },
        bindUI: function() {
            this.__bindMenu()
        },
        _handleKeyEventInternal: function(a) {
            var b = this,
            c = b.get("menu");
            if (a.keyCode == k.SPACE) {
                if (a.preventDefault(), "keyup" != a.type) return h
            } else if ("keydown" != a.type) return h;
            if (c && c.get("visible")) {
                var d = c._handleKeydown(a);
                return a.keyCode == k.ESC ? (b.set("collapsed", !0), !0) : d
            }
            return a.keyCode == k.SPACE || a.keyCode == k.DOWN || a.keyCode == k.UP ? (b.set("collapsed", !1), !0) : h
        },
        _performInternal: function() {
            var a = this,
            b = a.get("menu");
            b && (b.get("visible") ? a.set("collapsed", !0) : a.set("collapsed", !1))
        },
        _handleBlur: function(a) {
            m.superclass._handleBlur.call(this, a),
            this.set("collapsed", !0)
        },
        getMenu: function() {
            var b = this,
            c = b.get("menu");
            return c || (c = new f.PopupMenu(a.mix({
                prefixCls: this.get("prefixCls")
            },
            b.get("menuCfg"))), b.set("menu", c), b.__bindMenu()),
            c
        },
        addItem: function(a, b) {
            this.getMenu().addChild(a, b)
        },
        removeItem: function(a, b) {
            var c = this.get("menu");
            c && c.removeChild(a, b)
        },
        removeItems: function(a) {
            this.get("menu") && this.get("menu").removeChildren(a)
        },
        getItemAt: function(a) {
            return this.get("menu") && this.get("menu").getChildAt(a)
        },
        _uiSetDisabled: function(b) {
            m.superclass._uiSetDisabled.apply(this, a.makeArray(arguments)),
            !b && this.set("collapsed", !0)
        },
        decorateChildrenInternal: function(b, c, d) {
            c.css("visibility", "hidden");
            var e = a.one(c[0].ownerDocument.body);
            e.prepend(c);
            var f = new b(a.mix({
                srcNode: c,
                prefixCls: d
            },
            this.get("menuCfg")));
            this.set("menu", f)
        },
        destructor: function() {
            var a = this,
            b = a.get("menu");
            j(window).detach("resize", a._reposition, a),
            b && b.destroy()
        }
    },
    {
        ATTRS: {
            activeItem: {
                view: !0
            },
            menuAlign: {
                value: {}
            },
            menuCfg: {},
            decorateChildCls: {
                value: "popupmenu"
            },
            menu: {
                setter: function(a) {
                    a.set("parent", this)
                }
            },
            collapsed: {
                value: !0,
                view: !0
            }
        },
        DefaultRender: e
    });
    return g.UIStore.setUIByClass("menu-button", {
        priority: g.UIStore.PRIORITY.LEVEL2,
        ui: m
    }),
    m
},
{
    requires: ["uibase", "node", "button", "./menubuttonrender", "menu", "component"]
}),
KISSY.add("menubutton/menubuttonrender", 
function(a, b, c) {
    var d = '<div class="{prefixCls}inline-block {prefixCls}menu-button-caption">{content}</div><div class="{prefixCls}inline-block {prefixCls}menu-button-dropdown">&nbsp;</div>',
    e = "menu-button-caption",
    f = "menu-button-open";
    return b.create(c.Render, {
        createDom: function() {
            var b = this.get("innerEl"),
            c = a.substitute(d, {
                content: this.get("content") || "",
                prefixCls: this.get("prefixCls")
            });
            b.html(c).attr("aria-haspopup", !0)
        },
        _uiSetContent: function(a) {
            var b = this.get("el").one("." + this.getCls(e));
            b.html(""),
            a && b.append(a)
        },
        _uiSetCollapsed: function(a) {
            var b = this,
            c = b.get("el"),
            d = b.getCls(f);
            c[a ? "removeClass": "addClass"](d).attr("aria-expanded", !a)
        },
        _uiSetActiveItem: function(a) {
            this.get("el").attr("aria-activedescendant", a && a.get("el").attr("id") || "")
        }
    },
    {
        ATTRS: {
            activeItem: {},
            collapsed: {}
        }
    })
},
{
    requires: ["uibase", "button"]
}),
KISSY.add("menubutton/option", 
function(a, b, c, d) {
    var e = d.Item,
    f = b.create(e, {},
    {
        ATTRS: {
            selectable: {
                value: !0
            }
        }
    });
    return c.UIStore.setUIByClass("option", {
        priority: 10,
        ui: f
    }),
    f
},
{
    requires: ["uibase", "component", "menu"]
}),
KISSY.add("menubutton/select", 
function(a, b, c, d, e, f, g) {
    function h(a) {
        return a.get("menu") && a.get("menu").get("children") || []
    }
    var i = c.create(e, {
        __bindMenu: function() {
            var a = this,
            b = a.get("menu");
            i.superclass.__bindMenu.call(a),
            b && b.on("show", a._handleMenuShow, a)
        },
        _handleMenuShow: function() {
            var a = this;
            a.get("menu").set("highlightedItem", a.get("selectedItem") || a.get("menu").getChildAt(0))
        },
        _updateCaption: function() {
            var a = this,
            b = a.get("selectedItem");
            a.set("content", b ? b.get("content") : a.get("defaultCaption"))
        },
        _handleMenuClick: function(a) {
            var b = this;
            b.set("selectedItem", a.target),
            b.set("collapsed", !0),
            i.superclass._handleMenuClick.call(b, a)
        },
        removeItems: function() {
            var a = this;
            i.superclass.removeItems.apply(a, arguments),
            a.set("selectedItem", null)
        },
        removeItem: function(a) {
            var b = this;
            i.superclass.removeItem.apply(b, arguments),
            a == b.get("selectedItem") && b.set("selectedItem", null)
        },
        _uiSetSelectedItem: function(a, b) {
            b && b.prevVal && b.prevVal.set("selected", !1),
            this._updateCaption()
        },
        _uiSetDefaultCaption: function() {
            this._updateCaption()
        }
    },
    {
        ATTRS: {
            value: {
                getter: function() {
                    var a = this.get("selectedItem");
                    return a && a.get("value")
                },
                setter: function(a) {
                    for (var b = this, c = h(b), d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (e.get("value") == a) return void b.set("selectedItem", e)
                    }
                    return b.set("selectedItem", null),
                    null
                }
            },
            selectedItem: {},
            selectedIndex: {
                setter: function(a) {
                    var b = this,
                    c = h(b);
                    return 0 > a || a >= c.length ? -1: void b.set("selectedItem", c[a])
                },
                getter: function() {
                    return a.indexOf(this.get("selectedItem"), h(this))
                }
            },
            defaultCaption: {
                value: ""
            }
        }
    });
    return i.decorate = function(c, d) {
        c = a.one(c),
        d = d || {},
        d.elBefore = c;
        var e,
        f,
        h = new i(d),
        j = c.val(),
        k = c.all("option");
        if (k.each(function(a) {
            var b = new g({
                content: a.text(),
                prefixCls: d.prefixCls,
                elCls: a.attr("class"),
                value: a.val()
            });
            j == a.val() && (f = b),
            h.addItem(b)
        }), h.set("selectedItem", f), h.render(), e = c.attr("name")) {
            var l = new b("<input type='hidden' name='" + e + "' value='" + j + "'>").insertBefore(c);
            h.on("afterSelectedItemChange", 
            function(a) {
                l.val(a.newVal ? a.newVal.get("value") : "")
            })
        }
        return c.remove(),
        h
    },
    d.UIStore.setUIByClass("select", {
        priority: d.UIStore.PRIORITY.LEVEL3,
        ui: i
    }),
    i
},
{
    requires: ["node", "uibase", "component", "./menubutton", "menu", "./option"]
}),
KISSY.add("menubutton", 
function(a, b, c, d, e) {
    return b.Render = c,
    b.Select = d,
    b.Option = e,
    b
},
{
    requires: ["menubutton/menubutton", "menubutton/menubuttonrender", "menubutton/select", "menubutton/option"]
}),
KISSY.add("overlay/overlayrender", 
function(a, b, c, d) {
    function e(b) {
        return a.require("uibase/" + b)
    }
    return c.create(d.Render, [e("contentboxrender"), e("positionrender"), e("loadingrender"), 6 === b.ie ? e("shimrender") : null, e("closerender"), e("maskrender")])
},
{
    requires: ["ua", "uibase", "component"]
}),
KISSY.add("overlay/ariarender", 
function(a, b) {
    function c() {}
    function d(a) {
        var b = a.keyCode,
        c = this.get("el");
        if (b == f) {
            b = e(a.target);
            var d = this.__ariaArchor;
            if (b.equals(c) && a.shiftKey) d[0].focus(),
            a.halt();
            else if (b.equals(d) && !a.shiftKey) c[0].focus(),
            a.halt();
            else if (b.equals(c) || c.contains(b)) return;
            a.halt()
        }
    }
    var e = b.all,
    f = b.KeyCodes.TAB;
    return c.prototype = {
        __renderUI: function() {
            var b = this.get("el"),
            c = this.get("header");
            this.get("aria") && (b.attr("role", "dialog"), b.attr("tabindex", 0), c.attr("id") || c.attr("id", a.guid("ks-dialog-header")), b.attr("aria-labelledby", c.attr("id")), this.__ariaArchor = e("<div tabindex='0'></div>").appendTo(b))
        },
        __bindUI: function() {
            var a = this;
            if (a.get("aria")) {
                var b,
                c = a.get("el");
                a.on("afterVisibleChange", 
                function(e) {
                    e.newVal ? (b = document.activeElement, c[0].focus(), c.attr("aria-hidden", "false"), c.on("keydown", d, a)) : (c.attr("aria-hidden", "true"), c.detach("keydown", d, a), b && b.focus())
                })
            }
        }
    },
    c
},
{
    requires: ["node"]
}),
KISSY.add("overlay/aria", 
function(a, b) {
    function c() {}
    return c.ATTRS = {
        aria: {
            view: !0
        }
    },
    c.prototype = {
        __bindUI: function() {
            var a = this,
            c = a.get("el");
            a.get("aria") && c.on("keydown", 
            function(c) {
                c.keyCode === b.KeyCodes.ESC && (a.hide(), c.halt())
            })
        }
    },
    c
},
{
    requires: ["event"]
}),
KISSY.add("overlay/effect", 
function(a) {
    function b() {}
    var c = {
        fade: ["Out", "In"],
        slide: ["Up", "Down"]
    },
    d = ["block", "none"];
    return b.ATTRS = {
        effect: {
            value: {
                effect: "none",
                duration: .5,
                easing: "easeOut"
            },
            setter: function(b) {
                var d = b.effect;
                a.isString(d) && !c[d] && (b.effect = "none")
            }
        }
    },
    b.prototype = {
        __bindUI: function() {
            var a = this;
            a.on("afterVisibleChange", 
            function(b) {
                var e = a.get("effect").effect;
                if ("none" != e) {
                    var f = b.newVal;
                    b = Number(f);
                    var g = a.get("el");
                    g.stop(1, 1),
                    g.css({
                        visibility: "visible",
                        display: d[b]
                    }),
                    g[e + c[e][b]](a.get("effect").duration, 
                    function() {
                        g.css({
                            display: d[0],
                            visibility: f ? "visible": "hidden"
                        })
                    },
                    a.get("effect").easing, !1)
                }
            })
        }
    },
    b
},
{
    requires: ["anim"]
}),
KISSY.add("overlay/overlay", 
function(a, b, c, d, e) {
    function f(b) {
        return a.require("uibase/" + b)
    }
    return b = b.create(c.ModelControl, [f("contentbox"), f("position"), f("loading"), f("align"), f("close"), f("resize"), f("mask"), e], {},
    {
        ATTRS: {
            focusable: {
                value: !1
            },
            closable: {
                value: !1
            },
            handleMouseEvents: {
                value: !1
            },
            allowTextSelection_: {
                value: !0
            },
            visibleMode: {
                value: "visibility"
            }
        }
    }),
    b.DefaultRender = d,
    c.UIStore.setUIByClass("overlay", {
        priority: c.UIStore.PRIORITY.LEVEL1,
        ui: b
    }),
    b
},
{
    requires: ["uibase", "component", "./overlayrender", "./effect"]
}),
KISSY.add("overlay/dialogrender", 
function(a, b, c, d) {
    return b.create(c, [a.require("uibase/stdmodrender"), d])
},
{
    requires: ["uibase", "./overlayrender", "./ariarender"]
}),
KISSY.add("overlay/dialog", 
function(a, b, c, d, e, f) {
    return a = d.create(c, [a.require("uibase/stdmod"), a.require("uibase/drag"), a.require("uibase/constrain"), f], {},
    {
        ATTRS: {
            closable: {
                value: !0
            },
            handlers: {
                valueFn: function() {
                    var a = this;
                    return [function() {
                        return a.get("view").get("header")
                    }]
                }
            }
        }
    }),
    a.DefaultRender = e,
    b.UIStore.setUIByClass("dialog", {
        priority: b.UIStore.PRIORITY.LEVEL2,
        ui: a
    }),
    a
},
{
    requires: ["component", "overlay/overlay", "uibase", "overlay/dialogrender", "./aria"]
}),
KISSY.add("overlay/popup", 
function(a, b, c, d) {
    function e(b, c) {
        a.isUndefined(c) ? c = b: c.srcNode = b,
        e.superclass.constructor.call(this, c)
    }
    return e.ATTRS = {
        trigger: {
            setter: function(b) {
                return a.one(b)
            }
        },
        triggerType: {
            value: "click"
        }
    },
    a.extend(e, c, {
        initializer: function() {
            var a = this;
            a.get("trigger") && ("mouse" === a.get("triggerType") ? (a._bindTriggerMouse(), a.on("bindUI", 
            function() {
                a._bindContainerMouse()
            })) : a._bindTriggerClick())
        },
        _bindTriggerMouse: function() {
            var b,
            c = this,
            e = c.get("trigger");
            c.__mouseEnterPopup = function() {
                c._clearHiddenTimer(),
                b = a.later(function() {
                    c.show(),
                    b = d
                },
                100)
            },
            e.on("mouseenter", c.__mouseEnterPopup),
            c._mouseLeavePopup = function() {
                b && (b.cancel(), b = d),
                c._setHiddenTimer()
            },
            e.on("mouseleave", c._mouseLeavePopup)
        },
        _bindContainerMouse: function() {
            this.get("el").on("mouseleave", this._setHiddenTimer, this).on("mouseenter", this._clearHiddenTimer, this)
        },
        _setHiddenTimer: function() {
            var b = this;
            b._hiddenTimer = a.later(function() {
                b.hide()
            },
            100)
        },
        _clearHiddenTimer: function() {
            this._hiddenTimer && (this._hiddenTimer.cancel(), this._hiddenTimer = d)
        },
        _bindTriggerClick: function() {
            var a = this;
            a.__clickPopup = function(b) {
                b.halt(),
                a.show()
            },
            a.get("trigger").on("click", a.__clickPopup)
        },
        destructor: function() {
            var a = this.get("trigger");
            a && (this.__clickPopup && a.detach("click", this.__clickPopup), this.__mouseEnterPopup && a.detach("mouseenter", this.__mouseEnterPopup), this._mouseLeavePopup && a.detach("mouseleave", this._mouseLeavePopup)),
            this.get("el") && this.get("el").detach("mouseleave", this._setHiddenTimer, this).detach("mouseenter", this._clearHiddenTimer, this)
        }
    }),
    b.UIStore.setUIByClass("popup", {
        priority: b.UIStore.PRIORITY.LEVEL1,
        ui: e
    }),
    e
},
{
    requires: ["component", "./overlay"]
}),
KISSY.add("overlay", 
function(a, b, c, d, e, f) {
    return b.Render = c,
    d.Render = e,
    b.Dialog = d,
    a.Overlay = b,
    a.Dialog = d,
    b.Popup = a.Popup = f,
    b
},
{
    requires: ["overlay/overlay", "overlay/overlayrender", "overlay/dialog", "overlay/dialogrender", "overlay/popup"]
}),
KISSY.add("button/base", 
function(a, b, c, d, e) {
    var f = b.KeyCodes;
    return a = c.create(d.ModelControl, [c.Contentbox], {
        bindUI: function() {
            this.get("el").on("keyup", this._handleKeyEventInternal, this)
        },
        _handleKeyEventInternal: function(a) {
            return a.keyCode == f.ENTER && "keydown" == a.type || a.keyCode == f.SPACE && "keyup" == a.type ? this._performInternal(a) : a.keyCode == f.SPACE
        },
        _performInternal: function() {
            this.fire("click")
        }
    },
    {
        ATTRS: {
            value: {},
            describedby: {
                view: !0
            },
            tooltip: {
                view: !0
            },
            collapseSide: {
                view: !0
            }
        }
    }),
    a.DefaultRender = e,
    d.UIStore.setUIByClass("button", {
        priority: d.UIStore.PRIORITY.LEVEL1,
        ui: a
    }),
    a
},
{
    requires: ["event", "uibase", "component", "./customrender"]
}),
KISSY.add("button/buttonrender", 
function(a, b, c) {
    return b.create(c.Render, {
        createDom: function() {
            this.get("el").attr("role", "button").addClass(this.getCls("inline-block button"))
        },
        _uiSetTooltip: function(a) {
            this.get("el").attr("title", a)
        },
        _uiSetDescribedby: function(a) {
            this.get("el").attr("aria-describedby", a)
        },
        _uiSetCollapseSide: function(a) {
            var b = this.getCls("button-collapse-"),
            c = this.get("el");
            c.removeClass(b + "left " + b + "right"),
            a && c.addClass(b + a)
        }
    },
    {
        ATTRS: {
            describedby: {},
            tooltip: {},
            collapseSide: {}
        }
    })
},
{
    requires: ["uibase", "component"]
}),
KISSY.add("button/customrender", 
function(a, b, c, d) {
    return c.create(d, [c.Contentbox.Render], {
        createDom: function() {
            var c = this.get("el"),
            d = this.get("contentEl"),
            e = a.guid("ks-button-labelby");
            for (c.attr("aria-labelledby", e), d.addClass(this.getCls("button-outer-box")), c = a.makeArray(d[0].childNodes), d = new b("<div id='" + e + "' class='" + this.getCls("button-inner-box") + "'/>").appendTo(d), e = 0; e < c.length; e++) d.append(c[e]);
            this.set("innerEl", d)
        },
        _uiSetContent: function(a) {
            var b = this.get("innerEl");
            b.html(""),
            a && b.append(a)
        }
    },
    {
        innerEL: {}
    })
},
{
    requires: ["node", "uibase", "./buttonrender"]
}),
KISSY.add("button/split", 
function(a) {
    function b() {
        b.superclass.constructor.apply(this, arguments)
    }
    var c = {
        content: function(a) {
            a = a.target,
            this.set("content", a.get("content")),
            this.set("value", a.get("value"))
        },
        value: function(a) {
            this.set("value", a.target.get("value"))
        }
    };
    return b.ATTRS = {
        first: {},
        second: {},
        eventType: {
            value: "click"
        },
        eventHandler: {
            value: "content"
        }
    },
    a.extend(b, a.Base, {
        render: function() {
            var a = this.get("eventType"),
            b = c[this.get("eventHandler")],
            d = this.get("first"),
            e = this.get("second");
            d.set("collapseSide", "right"),
            e.set("collapseSide", "left"),
            d.render(),
            e.render(),
            a && b && e.on(a, b, d)
        }
    }),
    b
},
{
    requires: ["base"]
}),
KISSY.add("button", 
function(a, b, c, d) {
    return b.Render = c,
    b.Split = d,
    b
},
{
    requires: ["button/base", "button/customrender", "button/split"]
}),
KISSY.add("component/container", 
function(a, b, c, d, e, f) {
    return b.create(c, [e, f])
},
{
    requires: ["uibase", "./modelcontrol", "./uistore", "./delegatechildren", "./decoratechildren"]
}),
KISSY.add("component/decoratechild", 
function(a, b) {
    function c() {}
    return a.augment(c, b, {
        decorateInternal: function(a) {
            this.set("el", a);
            var b = this.get("decorateChildCls"),
            c = this.get("prefixCls"); (a = a.one("." + this.getCls(b))) && ((b = this._findUIByClass(a)) ? this.decorateChildrenInternal(b, a, c) : this.decorateChildren(a))
        }
    }),
    c
},
{
    requires: ["./decoratechildren"]
}),
KISSY.add("component/decoratechildren", 
function(a, b) {
    function c() {}
    return a.augment(c, {
        decorateInternal: function(a) {
            this.set("el", a),
            this.decorateChildren(a)
        },
        decorateChildrenInternal: function(a, b, c) {
            this.addChild(new a({
                srcNode: b,
                prefixCls: c
            }))
        },
        _findUIByClass: function(a) {
            a = a.attr("class") || "";
            var c = this.get("prefixCls");
            return a = a.replace(RegExp("\\b" + c, "ig"), ""),
            b.getUIByClass(a)
        },
        decorateChildren: function(a) {
            var b = this;
            a = a.children();
            var c = b.get("prefixCls");
            a.each(function(a) {
                var d = b._findUIByClass(a);
                b.decorateChildrenInternal(d, a, c)
            })
        }
    }),
    c
},
{
    requires: ["./uistore"]
}),
KISSY.add("component/delegatechildren", 
function(a) {
    function b() {}
    return a.augment(b, {
        __bindUI: function() {
            this.get("el").on("mousedown mouseup mouseover mouseout dblclick", this._handleChildMouseEvents, this)
        },
        _handleChildMouseEvents: function(a) {
            var b = this.getOwnerControl(a.target);
            if (b) switch (a.type) {
            case "mousedown":
                b._handleMouseDown(a);
                break;
            case "mouseup":
                b._handleMouseUp(a);
                break;
            case "mouseover":
                b._handleMouseOver(a);
                break;
            case "mouseout":
                b._handleMouseOut(a);
                break;
            case "dblclick":
                b._handleDblClick(a)
            }
        },
        getOwnerControl: function(a) {
            for (var b = this.get("children"), c = b.length, d = this.get("el")[0]; a && a !== d;) {
                for (var e = 0; c > e; e++) if (b[e].get("el")[0] === a) return b[e];
                a = a.parentNode
            }
            return null
        }
    }),
    b
}),
KISSY.add("component/modelcontrol", 
function(a, b, c, d, e) {
    function f(a) {
        return function(b) {
            b = b.newVal,
            this.get("view") && this.get("view").set(a, b)
        }
    }
    function g(a) {
        return function(b) {
            return void 0 === b ? this.get("view") && this.get("view").get(a) : b
        }
    }
    function h(a, b, c) {
        a.create();
        var d = a.getContentElement();
        b.set("parent", a),
        b.set("render", d),
        b.set("elBefore", c),
        a.get("rendered") ? b.render() : (b.create(), d[0].insertBefore(b.get("el")[0], c && c[0] || null))
    }
    function i(a) {
        if (a.__componentClasses) return a.__componentClasses;
        for (var b = a.constructor, c = []; b && b != j;) {
            var e = d.getClsByUI(b);
            e && c.push(e),
            b = b.superclass && b.superclass.constructor
        }
        return a.__componentClasses = c.join(" ")
    }
    var j = c.create([c.Box], {
        getCls: d.getCls,
        initializer: function() {
            var a,
            b = this.__attrs || {};
            for (a in b) if (b.hasOwnProperty(a)) {
                var c = b[a];
                c.view && (this.on("after" + (a.charAt(0).toUpperCase() + a.substring(1)) + "Change", f(a)), c.getter = g(a))
            }
        },
        renderUI: function() {
            var b = this;
            b.get("view").render();
            var c = b.get("children");
            a.each(c, 
            function(a) {
                h(b, a),
                a.render()
            })
        },
        createDom: function() {
            var a;
            if (! (a = this.get("view"))) {
                a = this.constructor;
                for (var b; a && !b;) b = a.DefaultRender,
                a = a.superclass && a.superclass.constructor;
                if (b) {
                    a = this.__attrs || {};
                    var c,
                    d = {};
                    for (c in a) if (a.hasOwnProperty(c)) {
                        var e;
                        a[c].view && void 0 !== (e = this.get(c)) && (d[c] = e)
                    }
                    a = new b(d)
                } else a = 0
            } (b = a) && (b.create(), b._renderCls(i(this)), this.get("allowTextSelection_") || b.get("el").unselectable(), this.set("view", b))
        },
        getContentElement: function() {
            var a = this.get("view");
            return a && a.getContentElement()
        },
        addChild: function(a, b) {
            var c = this.get("children"),
            d = null;
            void 0 !== b ? (c.splice(b, 0, a), d = c[b] || null) : c.push(a),
            h(this, a, d)
        },
        removeChild: function(b, c) {
            var d = this.get("children"),
            e = a.indexOf(b, d); - 1 != e && d.splice(e, 1),
            c && b.destroy()
        },
        removeChildren: function(b) {
            var c = this,
            d = [].concat(c.get("children"));
            a.each(d, 
            function(a) {
                c.removeChild(a, b)
            }),
            c.set("children", [])
        },
        getChildAt: function(a) {
            return this.get("children")[a]
        },
        _uiSetHandleMouseEvents: function(a) {
            var b = this.get("el");
            a ? (b.on("mouseenter", this._handleMouseEnter, this), b.on("mouseleave", this._handleMouseLeave, this), b.on("mousedown", this._handleMouseDown, this), b.on("mouseup", this._handleMouseUp, this), b.on("dblclick", this._handleDblClick, this)) : (b.detach("mouseenter", this._handleMouseEnter, this), b.detach("mouseleave", this._handleMouseLeave, this), b.detach("mousedown", this._handleMouseDown, this), b.detach("mouseup", this._handleMouseUp, this), b.detach("dblclick", this._handleDblClick, this))
        },
        _handleDblClick: function(a) {
            this.get("disabled") || this._performInternal(a)
        },
        _isMouseEventWithinElement: function(a, b) {
            var c = a.relatedTarget;
            return c ? c === b[0] || b.contains(c) ? !0: void 0: !1
        },
        _handleMouseOver: function(a) {
            var b = this.get("el");
            return this.get("disabled") ? !0: void(this._isMouseEventWithinElement(a, b) || this._handleMouseEnter(a))
        },
        _handleMouseOut: function(a) {
            var b = this.get("el");
            return this.get("disabled") ? !0: void(this._isMouseEventWithinElement(a, b) || this._handleMouseLeave(a))
        },
        _handleMouseEnter: function() {
            return this.get("disabled") ? !0: void this.set("highlighted", !0)
        },
        _handleMouseLeave: function() {
            return this.get("disabled") ? !0: (this.set("active", !1), void this.set("highlighted", !1))
        },
        _handleMouseDown: function(a) {
            if (this.get("disabled")) return ! 0;
            1 == a.which && this.get("activeable") && this.set("active", !0);
            var b = this.getKeyEventTarget();
            1 == a.which && b.attr("tabindex") >= 0 && b[0].focus(),
            1 == a.which && !this.get("allowTextSelection_") && a.preventDefault()
        },
        _uiSetFocusable: function(a) {
            var b = this.getKeyEventTarget();
            a ? (b.on("focus", this._handleFocus, this), b.on("blur", this._handleBlur, this), b.on("keydown", this._handleKeydown, this)) : (b.detach("focus", this._handleFocus, this), b.detach("blur", this._handleBlur, this), b.detach("keydown", this._handleKeydown, this))
        },
        _uiSetFocused: function(a) {
            this._forwardSetAttrToView("focused", a)
        },
        _uiSetHighlighted: function(a) {
            this._forwardSetAttrToView("highlighted", a)
        },
        _forwardSetAttrToView: function(a, b) {
            var c = this.get("view");
            c["_set" + (a.charAt(0).toUpperCase() + a.substring(1))].call(c, b, i(this))
        },
        _uiSetDisabled: function(a) {
            this._forwardSetAttrToView("disabled", a)
        },
        _uiSetActive: function(a) {
            this._forwardSetAttrToView("active", a)
        },
        getKeyEventTarget: function() {
            return this.get("view").getKeyEventTarget()
        },
        _handleMouseUp: function(a) {
            return this.get("disabled") ? !0: void(this.get("active") && 1 == a.which && (this._performInternal(a), this.set("active", !1)))
        },
        _handleFocus: function() {
            this.set("focused", !0)
        },
        _handleBlur: function() {
            this.set("focused", !1)
        },
        _handleKeyEventInternal: function(a) {
            return a.keyCode == b.KeyCodes.ENTER ? this._performInternal(a) : void 0
        },
        _handleKeydown: function(a) {
            return this.get("disabled") ? !0: this._handleKeyEventInternal(a) ? (a.halt(), !0) : void 0
        },
        _performInternal: function() {},
        destructor: function() {
            var b = this.get("children");
            a.each(b, 
            function(a) {
                a.destroy()
            }),
            (b = this.get("view")) && b.destroy()
        }
    },
    {
        ATTRS: {
            handleMouseEvents: {
                value: !0
            },
            focusable: {
                view: !0,
                value: !0
            },
            activeable: {
                value: !0
            },
            focused: {},
            active: {},
            highlighted: {},
            children: {
                value: []
            },
            prefixCls: {
                view: !0,
                value: "ks-"
            },
            parent: {},
            view: {},
            disabled: {},
            allowTextSelection_: {
                value: !1
            }
        },
        DefaultRender: e
    });
    return j
},
{
    requires: ["event", "uibase", "./uistore", "./render"]
}),
KISSY.add("component/render", 
function(a, b, c) {
    function d(a, b, c) {
        return a.getCls(b.split(/\s+/).join(c + " ") + c)
    }
    return b.create([b.Box.Render], {
        _completeClasses: function(a, b) {
            return d(this, a, b)
        },
        _renderCls: function(a) {
            this.get("el").addClass(this.getCls(a))
        },
        getCls: c.getCls,
        getKeyEventTarget: function() {
            return this.get("el")
        },
        getContentElement: function() {
            return this.get("contentEl") || this.get("el")
        },
        _uiSetFocusable: function(a) {
            var b = this.getKeyEventTarget(),
            c = b.attr("tabindex");
            c >= 0 && !a ? b.attr("tabindex", -1) : !(c >= 0) && a && b.attr("tabindex", 0)
        },
        _setHighlighted: function(a, b) {
            this.get("el")[a ? "addClass": "removeClass"](d(this, b, "-hover"))
        },
        _setDisabled: function(a, b) {
            this.get("el")[a ? "addClass": "removeClass"](d(this, b, "-disabled")).attr({
                tabindex: a ? -1: 0,
                "aria-disabled": a
            })
        },
        _setActive: function(a, b) {
            this.get("el")[a ? "addClass": "removeClass"](d(this, b, "-active")).attr("aria-pressed", !!a)
        },
        _setFocused: function(a, b) {
            this.get("el")[a ? "addClass": "removeClass"](d(this, b, "-focused"))
        }
    },
    {
        ATTRS: {
            prefixCls: {},
            focusable: {}
        }
    })
},
{
    requires: ["uibase", "./uistore"]
}),
KISSY.add("component/uistore", 
function(a) {
    function b(a) {
        for (var b in c) if (c[b].ui == a) return b;
        return 0
    }
    var c = {};
    return {
        getCls: function(b) {
            b = a.trim(b).split(/\s+/);
            for (var c = 0; c < b.length; c++) b[c] && (b[c] = this.get("prefixCls") + b[c]);
            return b.join(" ")
        },
        getClsByUI: b,
        getClsByInstance: function(a) {
            return b(a.constructor)
        },
        getUIByClass: function(a) {
            a = a.split(/\s+/);
            for (var b = null, d = 0; d < a.length; d++) {
                var e = c[a[d]];
                e && e.priority > -1 && (b = e.ui)
            }
            return b
        },
        setUIByClass: function(a, b) {
            c[a] = b
        },
        PRIORITY: {
            LEVEL1: 10,
            LEVEL2: 20,
            LEVEL3: 30,
            LEVEL4: 40,
            LEVEL5: 50,
            LEVEL6: 60
        }
    }
}),
KISSY.add("component", 
function(a, b, c, d, e, f, g, h) {
    return {
        ModelControl: b,
        Render: c,
        Container: d,
        UIStore: e,
        DelegateChildren: f,
        DecorateChild: h,
        DecorateChildren: g
    }
},
{
    requires: ["component/modelcontrol", "component/render", "component/container", "component/uistore", "component/delegatechildren", "component/decoratechildren", "component/decoratechild"]
}),
KISSY.add("uibase/align", 
function(a, b, c, d) {
    function e(a) {
        for (var b = a.ownerDocument.body, d = c.css(a, "position"), e = "fixed" == d || "absolute" == d, a = a.parentNode; a && a != b; a = a.parentNode) if (d = c.css(a, "position"), e = e && "static" == d, "visible" != c.css(a, "overflow") && (!e || "fixed" == d || "absolute" == d || "relative" == d)) return a;
        return null
    }
    function f(a) {
        for (var b in a) if (0 === b.indexOf("fail")) return ! 0;
        return ! 1
    }
    function g(d) {
        var g,
        h = d.offset,
        i = d.node,
        k = d.points,
        l = this.get("el"),
        h = h || [0, 0];
        g = l.offset(),
        i = j(i, k[0]),
        k = j(l, k[1]),
        k = [k.left - i.left, k.top - i.top],
        g = {
            left: g.left - k[0] + +h[0],
            top: g.top - k[1] + +h[1]
        };
        a: {
            if (h = g, g = this.get("el"), l = {},
            k = {
                width: g.outerWidth(),
                height: g.outerHeight()
            },
            i = a.clone(k), !a.isEmptyObject(d.overflow)) {
                for (var l = {
                    left: 0,
                    right: 1 / 0,
                    top: 0,
                    bottom: 1 / 0
                },
                m = g[0]; m = e(m);) {
                    var n = m.clientWidth;
                    if (!b.ie || 0 !== n) {
                        var n = m.clientLeft,
                        o = m.clientTop,
                        p = c.offset(m);
                        p.left += n,
                        p.top += o,
                        l.top = Math.max(l.top, p.top),
                        l.right = Math.min(l.right, p.left + m.clientWidth),
                        l.bottom = Math.min(l.bottom, p.top + m.clientHeight),
                        l.left = Math.max(l.left, p.left)
                    }
                }
                if (m = c.scrollLeft(), n = c.scrollTop(), l.left = Math.max(l.left, m), l.top = Math.max(l.top, n), l.right = Math.min(l.right, m + c.viewportWidth()), l.bottom = Math.min(l.bottom, n + c.viewportHeight()), l = 0 <= l.top && 0 <= l.left && l.bottom > l.top && l.right > l.left ? l: null, d = d.overflow || {},
                m = {},
                h.left < l.left && d.adjustX && (h.left = l.left, m.adjustX = 1), h.left < l.left && h.left + i.width > l.right && d.resizeWidth && (i.width -= h.left + i.width - l.right, m.resizeWidth = 1), h.left + i.width > l.right && d.adjustX && (h.left = Math.max(l.right - i.width, l.left), m.adjustX = 1), d.failX && (m.failX = h.left < l.left || h.left + i.width > l.right), h.top < l.top && d.adjustY && (h.top = l.top, m.adjustY = 1), h.top >= l.top && h.top + i.height > l.bottom && d.resizeHeight && (i.height -= h.top + i.height - l.bottom, m.resizeHeight = 1), h.top + i.height > l.bottom && d.adjustY && (h.top = Math.max(l.bottom - i.height, l.top), m.adjustY = 1), d.failY && (m.failY = h.top < l.top || h.top + i.height > l.bottom), l = m, f(l)) {
                    d = l;
                    break a
                }
            }
            this.set("x", h.left),
            this.set("y", h.top),
            (i.width != k.width || i.height != k.height) && (g.width(i.width), g.height(i.height)),
            d = l
        }
        return d
    }
    function h(b, c, d) {
        var e = [];
        return a.each(b, 
        function(a) {
            e.push(a.replace(c, 
            function(a) {
                return d[a]
            }))
        }),
        e
    }
    function i() {}
    function j(a, b) {
        var e,
        f,
        g,
        h,
        i = b.charAt(0),
        j = b.charAt(1);
        return a ? (a = d.one(a), e = a.offset(), f = a.outerWidth(), g = a.outerHeight()) : (e = {
            left: c.scrollLeft(),
            top: c.scrollTop()
        },
        f = c.viewportWidth(), g = c.viewportHeight()),
        h = e.left,
        e = e.top,
        "c" === i ? e += g / 2: "b" === i && (e += g),
        "c" === j ? h += f / 2: "r" === j && (h += f),
        {
            left: h,
            top: e
        }
    }
    return i.ATTRS = {
        align: {}
    },
    i.prototype = {
        _uiSetAlign: function(b) {
            a.isPlainObject(b) && this.align(b.node, b.points, b.offset, b.overflow)
        },
        align: function(b, c, d, e) {
            var i = {},
            e = a.clone(e || {}),
            d = d && [].concat(d) || [0, 0];
            e.failX && (i.failX = 1),
            e.failY && (i.failY = 1);
            var j = g.call(this, {
                node: b,
                points: c,
                offset: d,
                overflow: i
            });
            f(j) && (j.failX && (c = h(c, /[lr]/gi, {
                l: "r",
                r: "l"
            }), d[0] = -d[0]), j.failY) && (c = h(c, /[tb]/gi, {
                t: "b",
                b: "t"
            }), j = d, j[1] = -j[1], d = j),
            j = g.call(this, {
                node: b,
                points: c,
                offset: d,
                overflow: i
            }),
            f(j) && (delete e.failX, delete e.failY, g.call(this, {
                node: b,
                points: c,
                offset: d,
                overflow: e
            }))
        },
        center: function(a) {
            this.set("align", {
                node: a,
                points: ["cc", "cc"],
                offset: [0, 0]
            })
        }
    },
    i
},
{
    requires: ["ua", "dom", "node"]
}),
KISSY.add("uibase/base", 
function(a, b, c) {
    function d(a) {
        return a.charAt(0).toUpperCase() + a.substring(1)
    }
    function e(d) {
        b.apply(this, arguments);
        for (var e = d, h = this.constructor; h;) {
            if (e && e[g] && h.HTML_PARSER && (e[g] = c.one(e[g]))) {
                var i = e[g],
                j = h.HTML_PARSER,
                k = void 0,
                l = void 0;
                for (k in j) j.hasOwnProperty(k) && (l = j[k], a.isFunction(l) ? this.__set(k, l.call(this, i)) : a.isString(l) ? this.__set(k, i.one(l)) : a.isArray(l) && l[0] && this.__set(k, i.all(l[0])))
            }
            h = h.superclass && h.superclass.constructor
        }
        f(this, "initializer", "constructor"),
        d && d.autoRender && this.render()
    }
    function f(a, b, c) {
        for (var d, e, f, g, h = a.constructor, i = []; h;) {
            if (g = [], f = h.__ks_exts) for (var j = 0; j < f.length; j++)(d = f[j]) && ("constructor" != c && (d = d.prototype.hasOwnProperty(c) ? d.prototype[c] : null), d && g.push(d));
            h.prototype.hasOwnProperty(b) && (e = h.prototype[b]) && g.push(e),
            g.length && i.push.apply(i, g.reverse()),
            h = h.superclass && h.superclass.constructor
        }
        for (j = i.length - 1; j >= 0; j--) i[j] && i[j].call(a)
    }
    var g = "srcNode",
    h = function() {};
    return e.HTML_PARSER = {},
    e.ATTRS = {
        rendered: {
            value: !1
        },
        created: {
            value: !1
        }
    },
    a.extend(e, b, {
        create: function() {
            this.get("created") || (this._createDom(), this.fire("createDom"), f(this, "createDom", "__createDom"), this.fire("afterCreateDom"), this.set("created", !0))
        },
        render: function() {
            this.get("rendered") || (this.create(), this._renderUI(), this.fire("renderUI"), f(this, "renderUI", "__renderUI"), this.fire("afterRenderUI"), this._bindUI(), this.fire("bindUI"), f(this, "bindUI", "__bindUI"), this.fire("afterBindUI"), this._syncUI(), this.fire("syncUI"), f(this, "syncUI", "__syncUI"), this.fire("afterSyncUI"), this.set("rendered", !0))
        },
        _createDom: h,
        _renderUI: h,
        renderUI: h,
        _bindUI: function() {
            var a,
            b,
            c = this,
            e = c.__attrs;
            for (a in e) e.hasOwnProperty(a) && (b = "_uiSet" + d(a), c[b] && 
            function(a, b) {
                c.on("after" + d(a) + "Change", 
                function(a) {
                    c[b](a.newVal, a)
                })
            } (a, b))
        },
        bindUI: h,
        _syncUI: function() {
            var a,
            b = this.__attrs;
            for (a in b) if (b.hasOwnProperty(a)) {
                var c = "_uiSet" + d(a);
                this[c] && !1 !== b[a].sync && void 0 !== this.get(a) && this[c](this.get(a))
            }
        },
        syncUI: h,
        destroy: function() {
            for (var a, b, c, d = this.constructor; d;) {
                if (d.prototype.hasOwnProperty("destructor") && d.prototype.destructor.apply(this), a = d.__ks_exts) for (c = a.length - 1; c >= 0; c--)(b = a[c] && a[c].prototype.__destructor) && b.apply(this);
                d = d.superclass && d.superclass.constructor
            }
            this.fire("destroy"),
            this.detach()
        }
    }),
    e.create = function(b, c, d, f) {
        function g() {
            e.apply(this, arguments)
        }
        if (a.isArray(b) && (f = d, d = c, c = b, b = e), b = b || e, a.isObject(c) && (f = d, d = c, c = []), a.extend(g, b, d, f), c) {
            g.__ks_exts = c;
            var h = {},
            b = c.concat(g);
            a.each(b, 
            function(b) {
                b && a.each(["ATTRS", "HTML_PARSER"], 
                function(c) {
                    b[c] && (h[c] = h[c] || {},
                    a.mix(h[c], b[c], !0, void 0, !0))
                })
            }),
            a.each(h, 
            function(a, b) {
                g[b] = a
            });
            var i = {};
            a.each(b, 
            function(a) {
                if (a) {
                    var b,
                    a = a.prototype;
                    for (b in a) a.hasOwnProperty(b) && (i[b] = a[b])
                }
            }),
            a.each(i, 
            function(a, b) {
                g.prototype[b] = a
            })
        }
        return g
    },
    e
},
{
    requires: ["base", "node"]
}),
KISSY.add("uibase/box", 
function() {
    function a() {}
    return a.ATTRS = {
        html: {
            view: !0,
            sync: !1
        },
        width: {
            view: !0
        },
        height: {
            view: !0
        },
        elCls: {
            view: !0
        },
        elStyle: {
            view: !0
        },
        elAttrs: {
            view: !0
        },
        elBefore: {
            view: !0
        },
        el: {
            view: !0
        },
        render: {
            view: !0
        },
        visibleMode: {
            value: "display",
            view: !0
        },
        visible: {
            view: !0
        },
        srcNode: {
            view: !0
        }
    },
    a.HTML_PARSER = {
        el: function(a) {
            return this.decorateInternal && this.decorateInternal(a),
            a
        }
    },
    a.prototype = {
        _uiSetVisible: function(a) {
            this.fire(a ? "show": "hide")
        },
        show: function() {
            this.render(),
            this.set("visible", !0)
        },
        hide: function() {
            this.set("visible", !1)
        }
    },
    a
}),
KISSY.add("uibase/boxrender", 
function(a, b) {
    function c() {}
    function d(a, b, c, d, e, f) {
        b = b || {},
        c && (b.width = c),
        d && (b.height = d);
        var g,
        c = "";
        for (g in b) b.hasOwnProperty(g) && (c += g + ":" + b[g] + ";");
        var h,
        b = "";
        for (h in f) f.hasOwnProperty(h) && (b += " " + h + "='" + f[h] + "' ");
        return "<" + e + (c ? " style='" + c + "' ": "") + b + (a ? " class='" + a + "' ": "") + "></" + e + ">"
    }
    var e = a.all;
    return c.ATTRS = {
        el: {
            setter: function(a) {
                return e(a)
            }
        },
        elCls: {},
        elStyle: {},
        width: {},
        height: {},
        elTagName: {
            value: "div"
        },
        elAttrs: {},
        elBefore: {},
        render: {},
        html: {
            sync: !1
        },
        visible: {},
        visibleMode: {}
    },
    c.construct = d,
    c.HTML_PARSER = {
        html: function(a) {
            return a.html()
        }
    },
    c.prototype = {
        __renderUI: function() {
            if (this.__boxRenderNew) {
                var a = this.get("render"),
                b = this.get("el"),
                c = this.get("elBefore");
                c ? b.insertBefore(c) : b.appendTo(a ? a: "body")
            }
        },
        __createDom: function() {
            var a = this.get("el");
            a || (this.__boxRenderNew = !0, a = new b(d(this.get("elCls"), this.get("elStyle"), this.get("width"), this.get("height"), this.get("elTagName"), this.get("elAttrs"))), this.set("el", a), this.get("html") && a.html(this.get("html")))
        },
        _uiSetElAttrs: function(a) {
            this.get("el").attr(a)
        },
        _uiSetElCls: function(a) {
            this.get("el").addClass(a)
        },
        _uiSetElStyle: function(a) {
            this.get("el").css(a)
        },
        _uiSetWidth: function(a) {
            this.get("el").width(a)
        },
        _uiSetHeight: function(a) {
            this.get("el").height(a)
        },
        _uiSetHtml: function(a) {
            this.get("el").html(a)
        },
        _uiSetVisible: function(a) {
            var b = this.get("el");
            "visibility" == this.get("visibleMode") ? b.css("visibility", a ? "visible": "hidden") : b.css("display", a ? "": "none")
        },
        show: function() {
            this.render(),
            this.set("visible", !0)
        },
        hide: function() {
            this.set("visible", !1)
        },
        __destructor: function() {
            var a = this.get("el");
            a && (a.detach(), a.remove())
        }
    },
    c
},
{
    requires: ["node"]
}),
KISSY.add("uibase/close", 
function() {
    function a() {}
    a.ATTRS = {
        closable: {
            view: !0
        },
        closeAction: {
            value: "hide"
        }
    };
    var b = {
        hide: "hide",
        destroy: "destroy"
    };
    return a.prototype = {
        __bindUI: function() {
            var a = this,
            c = a.get("view").get("closeBtn");
            c && c.on("click", 
            function(c) {
                a[b[a.get("closeAction")] || "hide"](),
                c.preventDefault()
            })
        }
    },
    a
}),
KISSY.add("uibase/closerender", 
function(a, b) {
    function c() {}
    return c.ATTRS = {
        closable: {
            value: !0
        },
        closeBtn: {}
    },
    c.HTML_PARSER = {
        closeBtn: function(a) {
            return a.one("." + this.get("prefixCls") + "ext-close")
        }
    },
    c.prototype = {
        _uiSetClosable: function(a) {
            var b = this.get("closeBtn");
            b && (a ? b.css("display", "") : b.css("display", "none"))
        },
        __renderUI: function() {
            var a = this.get("closeBtn"),
            c = this.get("el"); ! a && c && (a = new b("<a tabindex='0' href='javascript:void(\"关闭\")' role='button' class='" + this.get("prefixCls") + "ext-close'><span class='" + this.get("prefixCls") + "ext-close-x'>关闭</span></a>").appendTo(c), this.set("closeBtn", a))
        },
        __destructor: function() {
            var a = this.get("closeBtn");
            a && a.detach()
        }
    },
    c
},
{
    requires: ["node"]
}),
KISSY.add("uibase/constrain", 
function(a, b, c) {
    function d() {}
    function e(d) {
        var e;
        if (!d) return e;
        var f = this.get("el");
        return ! 0 !== d ? (d = c.one(d), e = d.offset(), a.mix(e, {
            maxLeft: e.left + d.outerWidth() - f.outerWidth(),
            maxTop: e.top + d.outerHeight() - f.outerHeight()
        })) : (d = document.documentElement.clientWidth, e = {
            left: b.scrollLeft(),
            top: b.scrollTop()
        },
        a.mix(e, {
            maxLeft: e.left + d - f.outerWidth(),
            maxTop: e.top + b.viewportHeight() - f.outerHeight()
        })),
        e
    }
    return d.ATTRS = {
        constrain: {
            value: !1
        }
    },
    d.prototype = {
        __renderUI: function() {
            var a = this,
            b = a.getAttrs(),
            c = b.x,
            b = b.y,
            d = c.setter,
            f = b.setter;
            c.setter = function(b) {
                var c = d && d.call(a, b);
                return void 0 === c && (c = b),
                a.get("constrain") ? (b = e.call(a, a.get("constrain")), Math.min(Math.max(c, b.left), b.maxLeft)) : c
            },
            b.setter = function(b) {
                var c = f && f.call(a, b);
                return void 0 === c && (c = b),
                a.get("constrain") ? (b = e.call(a, a.get("constrain")), Math.min(Math.max(c, b.top), b.maxTop)) : c
            },
            a.addAttr("x", c),
            a.addAttr("y", b)
        }
    },
    d
},
{
    requires: ["dom", "node"]
}),
KISSY.add("uibase/contentbox", 
function() {
    function a() {}
    return a.ATTRS = {
        content: {
            view: !0,
            sync: !1
        },
        contentEl: {
            view: !0
        },
        contentElAttrs: {
            view: !0
        },
        contentElStyle: {
            view: !0
        },
        contentTagName: {
            view: !0
        }
    },
    a.prototype = {},
    a
}),
KISSY.add("uibase/contentboxrender", 
function(a, b, c) {
    function d() {}
    function e(a, b) {
        var c = a.get("contentEl");
        c.html(""),
        b && c.append(b)
    }
    d.ATTRS = {
        contentEl: {},
        contentElAttrs: {},
        contentElCls: {
            value: ""
        },
        contentElStyle: {},
        contentTagName: {
            value: "div"
        },
        content: {
            sync: !1
        }
    },
    d.HTML_PARSER = {
        content: function(a) {
            return a.html()
        }
    };
    var f = c.construct;
    return d.prototype = {
        __renderUI: function() {},
        __createDom: function() {
            var c,
            d;
            c = this.get("el");
            var g = a.makeArray(c[0].childNodes);
            if (c = new b(f(this.get("prefixCls") + "contentbox " + this.get("contentElCls"), this.get("contentElStyle"), void 0, void 0, this.get("contentTagName"), this.get("contentElAttrs"))).appendTo(c), this.set("contentEl", c), g.length) for (d = 0; d < g.length; d++) c.append(g[d]);
            else(d = this.get("content")) && e(this, d)
        },
        _uiSetContentElCls: function(a) {
            this.get("contentEl").addClass(a)
        },
        _uiSetContentElAttrs: function(a) {
            this.get("contentEl").attr(a)
        },
        _uiSetContentElStyle: function(a) {
            this.get("contentEl").css(a)
        },
        _uiSetContent: function(a) {
            e(this, a)
        }
    },
    d
},
{
    requires: ["node", "./boxrender"]
}),
KISSY.add("uibase/drag", 
function(a) {
    function b() {}
    return b.ATTRS = {
        handlers: {
            value: []
        },
        draggable: {
            value: !0
        }
    },
    b.prototype = {
        _uiSetHandlers: function(a) {
            a && 0 < a.length && this.__drag && this.__drag.set("handlers", a)
        },
        __bindUI: function() {
            var b = a.require("dd/draggable"),
            c = this.get("el");
            this.get("draggable") && b && (this.__drag = new b({
                node: c
            }))
        },
        _uiSetDraggable: function(a) {
            var b = this.__drag;
            b && (a ? (b.detach("drag"), b.on("drag", this._dragExtAction, this)) : b.detach("drag"))
        },
        _dragExtAction: function(a) {
            this.set("xy", [a.left, a.top])
        },
        __destructor: function() {
            var a = this.__drag;
            a && a.destroy()
        }
    },
    b
}),
KISSY.add("uibase/loading", 
function() {
    function a() {}
    return a.prototype = {
        loading: function() {
            this.get("view").loading()
        },
        unloading: function() {
            this.get("view").unloading()
        }
    },
    a
}),
KISSY.add("uibase/loadingrender", 
function(a, b) {
    function c() {}
    return c.prototype = {
        loading: function() {
            this._loadingExtEl || (this._loadingExtEl = new b("<div class='" + this.get("prefixCls") + "ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'/>").appendTo(this.get("el"))),
            this._loadingExtEl.show()
        },
        unloading: function() {
            var a = this._loadingExtEl;
            a && a.hide()
        }
    },
    c
},
{
    requires: ["node"]
}),
KISSY.add("uibase/mask", 
function() {
    function a() {}
    return a.ATTRS = {
        mask: {
            value: !1
        }
    },
    a.prototype = {
        _uiSetMask: function(a) {
            a ? (this.on("show", this.get("view")._maskExtShow, this.get("view")), this.on("hide", this.get("view")._maskExtHide, this.get("view"))) : (this.detach("show", this.get("view")._maskExtShow, this.get("view")), this.detach("hide", this.get("view")._maskExtHide, this.get("view")))
        },
        __destructor: function() {
            this.get("mask") && this.get("view")._maskExtHide()
        }
    },
    a
},
{
    requires: ["ua"]
}),
KISSY.add("uibase/maskrender", 
function(a, b, c) {
    function d() {
        return j ? n.width() + k: "100%"
    }
    function e() {
        return j ? n.height() + k: "100%"
    }
    function f() {
        h = l("<div class='" + this.get("prefixCls") + "ext-mask'/>").prependTo("body"),
        h.css({
            position: j ? "absolute": "fixed",
            left: 0,
            top: 0,
            width: d(),
            height: e()
        }),
        j && (i = l("<iframe style='position:absolute;left:0px;top:0px;background:red;width:" + d() + ";height:" + e() + ";filter:alpha(opacity=0);z-index:-1;'/>").insertBefore(h)),
        h.unselectable(),
        h.on("mousedown", 
        function(a) {
            a.preventDefault()
        })
    }
    function g() {}
    var h,
    i,
    j = 6 === b.ie,
    k = "px",
    l = c.all,
    m = l(window),
    n = l(document),
    o = 0,
    p = a.throttle(function() {
        var a = {
            width: d(),
            height: e()
        };
        h.css(a),
        i && i.css(a)
    },
    50);
    return g.prototype = {
        _maskExtShow: function() {
            h || f.call(this);
            var a = {
                "z-index": this.get("zIndex") - 1
            },
            b = {
                display: ""
            };
            h.css(a),
            i && i.css(a),
            o++,
            1 == o && (h.css(b), i && i.css(b), j) && m.on("resize scroll", p)
        },
        _maskExtHide: function() {
            if (o--, 0 >= o && (o = 0), !o) {
                var a = {
                    display: "none"
                };
                h && h.css(a),
                i && i.css(a),
                j && m.detach("resize scroll", p)
            }
        }
    },
    g
},
{
    requires: ["ua", "node"]
}),
KISSY.add("uibase/position", 
function(a) {
    function b() {}
    return b.ATTRS = {
        x: {
            view: !0
        },
        y: {
            view: !0
        },
        xy: {
            setter: function(b) {
                var c = a.makeArray(b);
                return c.length && (c[0] && this.set("x", c[0]), c[1] && this.set("y", c[1])),
                b
            },
            getter: function() {
                return [this.get("x"), this.get("y")]
            }
        },
        zIndex: {
            view: !0
        }
    },
    b.prototype = {
        move: function(b, c) {
            a.isArray(b) && (c = b[1], b = b[0]),
            this.set("xy", [b, c])
        }
    },
    b
}),
KISSY.add("uibase/positionrender", 
function() {
    function a() {}
    return a.ATTRS = {
        x: {
            valueFn: function() {
                return this.get("el") && this.get("el").offset().left
            }
        },
        y: {
            valueFn: function() {
                return this.get("el") && this.get("el").offset().top
            }
        },
        zIndex: {
            value: 2e4
        }
    },
    a.prototype = {
        __renderUI: function() {
            this.get("el").addClass(this.get("prefixCls") + "ext-position")
        },
        _uiSetZIndex: function(a) {
            this.get("el").css("z-index", a)
        },
        _uiSetX: function(a) {
            this.get("el").offset({
                left: a
            })
        },
        _uiSetY: function(a) {
            this.get("el").offset({
                top: a
            })
        }
    },
    a
}),
KISSY.add("uibase/resize", 
function(a) {
    function b() {}
    return b.ATTRS = {
        resize: {
            value: {}
        }
    },
    b.prototype = {
        __destructor: function() {
            this.resizer && this.resizer.destroy()
        },
        _uiSetResize: function(b) {
            var c = a.require("resizable");
            c && (this.resizer && this.resizer.destroy(), b.node = this.get("el"), b.autoRender = !0, b.handlers && (this.resizer = new c(b)))
        }
    },
    b
}),
KISSY.add("uibase/shimrender", 
function(a, b) {
    function c() {}
    return c.ATTRS = {
        shim: {
            value: !0
        }
    },
    c.prototype = {
        _uiSetShim: function(a) {
            var c = this.get("el");
            a && !this.__shimEl ? (this.__shimEl = new b("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'/>"), c.prepend(this.__shimEl)) : !a && this.__shimEl && (this.__shimEl.remove(), delete this.__shimEl)
        }
    },
    c
},
{
    requires: ["node"]
}),
KISSY.add("uibase/stdmod", 
function() {
    function a() {}
    return a.ATTRS = {
        header: {
            view: !0
        },
        body: {
            view: !0
        },
        footer: {
            view: !0
        },
        bodyStyle: {
            view: !0
        },
        footerStyle: {
            view: !0
        },
        headerStyle: {
            view: !0
        },
        headerContent: {
            view: !0
        },
        bodyContent: {
            view: !0
        },
        footerContent: {
            view: !0
        }
    },
    a.prototype = {},
    a
}),
KISSY.add("uibase/stdmodrender", 
function(a, b) {
    function c() {}
    function d(a, c) {
        var d = a.get("contentEl"),
        f = a.get(c);
        f || (f = new b("<div class='" + a.get("prefixCls") + e + c + "'/>").appendTo(d), a.set(c, f))
    }
    var e = "stdmod-";
    return c.ATTRS = {
        header: {},
        body: {},
        footer: {},
        bodyStyle: {},
        footerStyle: {},
        headerStyle: {},
        headerContent: {},
        bodyContent: {},
        footerContent: {}
    },
    c.HTML_PARSER = {
        header: function(a) {
            return a.one("." + this.get("prefixCls") + e + "header")
        },
        body: function(a) {
            return a.one("." + this.get("prefixCls") + e + "body")
        },
        footer: function(a) {
            return a.one("." + this.get("prefixCls") + e + "footer")
        }
    },
    c.prototype = {
        _setStdModContent: function(b, c) {
            a.isString(c) ? this.get(b).html(c) : (this.get(b).html(""), this.get(b).append(c))
        },
        _uiSetBodyStyle: function(a) {
            this.get("body").css(a)
        },
        _uiSetHeaderStyle: function(a) {
            this.get("header").css(a)
        },
        _uiSetFooterStyle: function(a) {
            this.get("footer").css(a)
        },
        _uiSetBodyContent: function(a) {
            this._setStdModContent("body", a)
        },
        _uiSetHeaderContent: function(a) {
            this._setStdModContent("header", a)
        },
        _uiSetFooterContent: function(a) {
            this._setStdModContent("footer", a)
        },
        __renderUI: function() {
            d(this, "header"),
            d(this, "body"),
            d(this, "footer")
        }
    },
    c
},
{
    requires: ["node"]
}),
KISSY.add("uibase", 
function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    return f.Render = g,
    l.Render = m,
    n.Render = o,
    p.Render = q,
    t.Render = u,
    d.Render = e,
    i.Render = j,
    a.mix(b, {
        Align: c,
        Box: d,
        Close: f,
        Contrain: h,
        Contentbox: i,
        Drag: k,
        Loading: l,
        Mask: n,
        Position: p,
        Shim: {
            Render: r
        },
        Resize: s,
        StdMod: t
    }),
    a.UIBase = b
},
{
    requires: "uibase/base,uibase/align,uibase/box,uibase/boxrender,uibase/close,uibase/closerender,uibase/constrain,uibase/contentbox,uibase/contentboxrender,uibase/drag,uibase/loading,uibase/loadingrender,uibase/mask,uibase/maskrender,uibase/position,uibase/positionrender,uibase/shimrender,uibase/resize,uibase/stdmod,uibase/stdmodrender".split(",")
}),
KISSY.add("switchable/base", 
function(a, b, c, d) {
    function e(c, d) {
        d = d || {},
        "markupType" in d || (d.panelCls ? d.markupType = 1: d.panels && (d.markupType = 2));
        for (var e = this.constructor; e;) d = a.merge(e.Config, d),
        e = e.superclass ? e.superclass.constructor: null;
        this.container = b.get(c),
        this.config = d,
        this.activeIndex = this.completedIndex = d.activeIndex,
        !( - 1 < this.activeIndex) && "number" != typeof d.switchTo && (this.completedIndex = this.activeIndex = 0),
        this._init(),
        this._initPlugins(),
        this.fire(i),
        -1 < this.activeIndex || "number" == typeof d.switchTo && this.switchTo(d.switchTo)
    }
    function f(a) {
        var b = {};
        return b.type = a.originalEvent.type,
        b.target = a.originalEvent.target || a.originalEvent.srcElement,
        {
            originalEvent: b
        }
    }
    var g = a.makeArray,
    h = c.Target,
    i = "init";
    return e.getDomEvent = f,
    e.Config = {
        markupType: 0,
        navCls: "ks-switchable-nav",
        contentCls: "ks-switchable-content",
        triggerCls: "ks-switchable-trigger",
        panelCls: "ks-switchable-panel",
        triggers: [],
        panels: [],
        hasTriggers: !0,
        triggerType: "mouse",
        delay: .1,
        activeIndex: -1,
        activeTriggerCls: "ks-active",
        steps: 1,
        viewSize: []
    },
    e.Plugins = [],
    a.augment(e, h, {
        _initPlugins: function() {
            for (var b = this, c = b.constructor; c;) a.each(c.Plugins, 
            function(a) {
                a.init && a.init(b)
            }),
            c = c.superclass ? c.superclass.constructor: null
        },
        _init: function() {
            var a = this.config;
            this._parseMarkup(),
            a.hasTriggers && this._bindTriggers()
        },
        _parseMarkup: function() {
            var a,
            c,
            d = this.container,
            e = this.config,
            f = [],
            h = [];
            switch (e.markupType) {
            case 0:
                (a = b.get("." + e.navCls, d)) && (f = b.children(a)),
                c = b.get("." + e.contentCls, d),
                h = b.children(c);
                break;
            case 1:
                f = b.query("." + e.triggerCls, d),
                h = b.query("." + e.panelCls, d);
                break;
            case 2:
                f = e.triggers,
                h = e.panels
            }
            d = h.length,
            this.length = Math.ceil(d / e.steps),
            e.hasTriggers && d > 0 && 0 === f.length && (f = this._generateTriggersMarkup(this.length)),
            this.triggers = g(f),
            this.panels = g(h),
            this.content = c || h[0].parentNode,
            this.nav = a || e.hasTriggers && f[0].parentNode
        },
        _generateTriggersMarkup: function(a) {
            var c,
            d,
            e = this.config,
            f = b.create("<ul>");
            for (f.className = e.navCls, d = 0; a > d; d++) c = b.create("<li>"),
            d === this.activeIndex && (c.className = e.activeTriggerCls),
            c.innerHTML = d + 1,
            f.appendChild(c);
            return this.container.appendChild(f),
            b.children(f)
        },
        _bindTriggers: function() {
            var a,
            b,
            d = this,
            e = d.config,
            f = d.triggers,
            g = f.length;
            for (b = 0; g > b; b++)(function(b) {
                a = f[b],
                c.on(a, "click", 
                function(a) {
                    d._onFocusTrigger(b, a)
                }),
                "mouse" === e.triggerType && (c.on(a, "mouseenter", 
                function(a) {
                    d._onMouseEnterTrigger(b, a)
                }), c.on(a, "mouseleave", 
                function() {
                    d._onMouseLeaveTrigger(b)
                }))
            })(b)
        },
        _onFocusTrigger: function(a, b) {
            this._triggerIsValid(a) && (this._cancelSwitchTimer(), this.switchTo(a, d, f(b)))
        },
        _onMouseEnterTrigger: function(b, c) {
            var e = this;
            if (e._triggerIsValid(b)) {
                var g = f(c);
                e.switchTimer = a.later(function() {
                    e.switchTo(b, d, g)
                },
                1e3 * e.config.delay)
            }
        },
        _onMouseLeaveTrigger: function() {
            this._cancelSwitchTimer()
        },
        _triggerIsValid: function(a) {
            return this.activeIndex !== a
        },
        _cancelSwitchTimer: function() {
            this.switchTimer && (this.switchTimer.cancel(), this.switchTimer = d)
        },
        switchTo: function(a, b, c, e) {
            var f = this,
            g = f.config,
            h = f.triggers,
            i = f.panels,
            j = f.activeIndex,
            k = g.steps,
            l = j * k,
            m = a * k;
            return f._triggerIsValid(a) && !1 !== f.fire("beforeSwitch", {
                toIndex: a
            }) ? (g.hasTriggers && f._switchTrigger(j > -1 ? h[j] : null, h[a]), b === d && (b = a > j ? "forward": "backward"), f._switchView(j > -1 ? i.slice(l, l + k) : null, i.slice(m, m + k), a, b, c, 
            function() {
                e && e.call(f, a),
                f.completedIndex = a
            }), f.activeIndex = a, f) : f
        },
        _switchTrigger: function(a, c) {
            var d = this.config.activeTriggerCls;
            a && b.removeClass(a, d),
            b.addClass(c, d)
        },
        _switchView: function(a, c, d, e, f, g) {
            a && b.css(a, "display", "none"),
            b.css(c, "display", "block"),
            this._fireOnSwitch(d, f),
            g && g.call(this)
        },
        _fireOnSwitch: function(b, c) {
            this.fire("switch", a.mix(c || {},
            {
                currentIndex: b
            }))
        },
        prev: function(a) {
            var b = this.activeIndex;
            this.switchTo(b > 0 ? b - 1: this.length - 1, "backward", a)
        },
        next: function(a) {
            var b = this.activeIndex;
            this.switchTo(b < this.length - 1 ? b + 1: 0, "forward", a)
        }
    }),
    e
},
{
    requires: ["dom", "event"]
}),
KISSY.add("switchable/aria", 
function(a, b, c, d) {
    function e() {
        this.stop && this.stop()
    }
    function f() {
        this.start && this.start()
    }
    d.Plugins.push({
        name: "aria",
        init: function(a) {
            if (a.config.aria) {
                var b = a.container;
                c.on(b, "focusin", e, a),
                c.on(b, "focusout", f, a)
            }
        }
    });
    var g = ["a", "input", "button", "object"];
    return {
        setTabIndex: function(c, d) {
            c.tabIndex = d,
            b.query("*", c).each(function(c) {
                var e = c.nodeName.toLowerCase();
                a.inArray(e, g) && (b.hasAttr(c, "oriTabIndex") || b.attr(c, "oriTabIndex", c.tabIndex), c.tabIndex = -1 != d ? b.attr(c, "oriTabIndex") : d)
            })
        }
    }
},
{
    requires: ["dom", "event", "./base"]
}),
KISSY.add("switchable/accordion/base", 
function(a, b, c) {
    function d(a, b) {
        return this instanceof d ? void d.superclass.constructor.apply(this, arguments) : new d(a, b)
    }
    return a.extend(d, c, {
        _switchTrigger: function(a, c) {
            var e = this.config;
            e.multiple ? b.toggleClass(c, e.activeTriggerCls) : d.superclass._switchTrigger.apply(this, arguments)
        },
        _triggerIsValid: function(a) {
            return this.config.multiple || d.superclass._triggerIsValid.call(this, a)
        },
        _switchView: function(a, c, e, f, g, h) {
            var i = c[0];
            this.config.multiple ? (b.toggle(i), this._fireOnSwitch(e, g), h && h.call(this)) : d.superclass._switchView.apply(this, arguments)
        }
    }),
    d.Plugins = [],
    d.Config = {
        markupType: 1,
        triggerType: "click",
        multiple: !1
    },
    d
},
{
    requires: ["dom", "../base"]
}),
KISSY.add("switchable/accordion/aria", 
function(a, b, c, d, e) {
    function f(c) {
        var d;
        return a.each(this.triggers, 
        function(a) { (a == c || b.contains(a, c)) && (d = a)
        }),
        d
    }
    function g(c) {
        var d;
        return a.each(this.panels, 
        function(a) { (a == c || b.contains(a, c)) && (d = a)
        }),
        d
    }
    function h(b) {
        var c = f.call(this, b);
        return c || (b = g.call(this, b), c = this.triggers[a.indexOf(b, this.panels)]),
        c
    }
    function i(a) {
        switch (a.keyCode) {
        case o:
        case p:
            a.ctrlKey && !a.altKey && !a.shiftKey && a.halt();
            break;
        case w:
            a.ctrlKey && !a.altKey && a.halt()
        }
    }
    function j(b) {
        var c = b.target,
        d = this.triggers,
        e = !b.ctrlKey && !b.shiftKey && !b.altKey,
        g = b.ctrlKey && !b.shiftKey && !b.altKey;
        switch (b.keyCode) {
        case y:
        case x:
            (c = f.call(this, c)) && e && (this.switchTo(a.indexOf(c, this.triggers)), b.halt());
            break;
        case s:
        case t:
            (c = f.call(this, c)) && (l.call(this, c), b.halt());
            break;
        case u:
        case v:
            (c = f.call(this, c)) && (m.call(this, c), b.halt());
            break;
        case p:
            g && (b.halt(), c = h.call(this, c), m.call(this, c));
            break;
        case o:
            g && (b.halt(), c = h.call(this, c), l.call(this, c));
            break;
        case r:
            e && (h.call(this, c), k.call(this, 0, !0), b.halt());
            break;
        case q:
            e && (h.call(this, c), k.call(this, d.length - 1, !0), b.halt());
            break;
        case w:
            b.ctrlKey && !b.altKey && (b.halt(), c = h.call(this, c), b.shiftKey ? l.call(this, c) : m.call(this, c))
        }
    }
    function k(c, d) {
        var e = this.triggers,
        f = e[c];
        a.each(e, 
        function(a) {
            a !== f && (z(a, "-1"), b.removeClass(a, "ks-switchable-select"), a.setAttribute("aria-selected", "false"))
        }),
        d && f.focus(),
        z(f, "0"),
        b.addClass(f, "ks-switchable-select"),
        f.setAttribute("aria-selected", "true")
    }
    function l(b) {
        var c = this.triggers,
        b = a.indexOf(b, c);
        k.call(this, 0 == b ? c.length - 1: b - 1, !0)
    }
    function m(b) {
        var c = this.triggers,
        b = a.indexOf(b, c);
        k.call(this, b == c.length - 1 ? 0: b + 1, !0)
    }
    function n(b) {
        var c = !(!b.originalEvent.target && !b.originalEvent.srcElement),
        b = b.currentIndex,
        d = this.panels,
        e = this.triggers,
        f = e[b],
        g = d[b];
        this.config.multiple || (a.each(d, 
        function(a) {
            a !== g && a.setAttribute("aria-hidden", "true")
        }), a.each(e, 
        function(a) {
            a !== f && a.setAttribute("aria-hidden", "true")
        })),
        d = g.getAttribute("aria-hidden"),
        g.setAttribute("aria-hidden", "false" == d ? "true": "false"),
        f.setAttribute("aria-expanded", "false" == d ? "false": "true"),
        k.call(this, b, c)
    }
    var o = 33,
    p = 34,
    q = 35,
    r = 36,
    s = 37,
    t = 38,
    u = 39,
    v = 40,
    w = 9,
    x = 32,
    y = 13;
    a.mix(e.Config, {
        aria: !0
    }),
    e.Plugins.push({
        name: "aria",
        init: function(d) {
            if (d.config.aria) {
                var e = d.container,
                f = d.activeIndex;
                b.attr(e, "aria-multiselectable", d.config.multiple ? "true": "false"),
                d.nav && b.attr(d.nav, "role", "tablist");
                var g = d.triggers,
                h = d.panels,
                k = 0;
                a.each(h, 
                function(b) {
                    b.id || (b.id = a.guid("ks-accordion-tab-panel"))
                }),
                a.each(g, 
                function(b) {
                    b.id || (b.id = a.guid("ks-accordion-tab"))
                }),
                a.each(g, 
                function(a) {
                    a.setAttribute("role", "tab"),
                    a.setAttribute("aria-expanded", f == k ? "true": "false"),
                    a.setAttribute("aria-selected", f == k ? "true": "false"),
                    a.setAttribute("aria-controls", h[k].id),
                    z(a, f == k ? "0": "-1"),
                    k++
                }),
                k = 0,
                a.each(h, 
                function(a) {
                    var b = g[k];
                    a.setAttribute("role", "tabpanel"),
                    a.setAttribute("aria-hidden", f == k ? "false": "true"),
                    a.setAttribute("aria-labelledby", b.id),
                    k++
                }),
                d.on("switch", n, d),
                c.on(e, "keydown", j, d),
                c.on(e, "keypress", i, d)
            }
        }
    });
    var z = d.setTabIndex
},
{
    requires: ["dom", "event", "../aria", "./base"]
}),
KISSY.add("switchable/autoplay", 
function(a, b, c, d) {
    return a.mix(c.Config, {
        autoplay: !1,
        interval: 5,
        pauseOnHover: !0
    }),
    c.Plugins.push({
        name: "autoplay",
        init: function(c) {
            function e() {
                f = a.later(function() {
                    c.paused || c.switchTo(c.activeIndex < c.length - 1 ? c.activeIndex + 1: 0, "forward")
                },
                h, !0)
            }
            var f,
            g = c.config,
            h = 1e3 * g.interval;
            g.autoplay && (e(), c.stop = function() {
                f && (f.cancel(), f = d),
                c.paused = !0
            },
            c.start = function() {
                f && (f.cancel(), f = d),
                c.paused = !1,
                e()
            },
            g.pauseOnHover && (b.on(c.container, "mouseenter", c.stop, c), b.on(c.container, "mouseleave", c.start, c)))
        }
    }),
    c
},
{
    requires: ["event", "./base"]
}),
KISSY.add("switchable/autorender", 
function(a, b, c, d) {
    d.autoRender = function(d, e) {
        b.query("." + (d || "KS_Widget"), e).each(function(b) {
            var d,
            e = b.getAttribute("data-widget-type");
            if (e && -1 < "Switchable Tabs Slide Carousel Accordion".indexOf(e)) try { (d = b.getAttribute("data-widget-config")) && (d = d.replace(/'/g, '"')),
                new a[e](b, c.parse(d))
            } catch(f) {}
        })
    }
},
{
    requires: ["dom", "json", "switchable/base"]
}),
KISSY.add("switchable/carousel/base", 
function(a, b, c, d, e) {
    function f(a, b) {
        return this instanceof f ? void f.superclass.constructor.apply(this, arguments) : new f(a, b)
    }
    var g = {
        originalEvent: {
            target: 1
        }
    };
    return f.Config = {
        circular: !0,
        prevBtnCls: "ks-switchable-prev-btn",
        nextBtnCls: "ks-switchable-next-btn",
        disableBtnCls: "ks-switchable-disable-btn"
    },
    f.Plugins = [],
    a.extend(f, d, {
        _init: function() {
            var d = this;
            f.superclass._init.call(d);
            var h = d.config,
            i = h.disableBtnCls;
            a.each(["prev", "next"], 
            function(a) {
                var e = d[a + "Btn"] = b.get("." + h[a + "BtnCls"], d.container);
                c.on(e, "mousedown", 
                function(b) {
                    b.preventDefault(),
                    b = d.activeIndex,
                    "prev" != a || 0 == b && !h.circular || d[a](g),
                    "next" != a || b == d.length - 1 && !h.circular || d[a](g)
                })
            }),
            h.circular || d.on("switch", 
            function(a) {
                a = a.currentIndex,
                a = 0 === a ? d.prevBtn: a === d.length - 1 ? d.nextBtn: e,
                b.removeClass([d.prevBtn, d.nextBtn], i),
                a && b.addClass(a, i)
            }),
            c.on(d.panels, "click", 
            function() {
                d.fire("itemSelected", {
                    item: this
                })
            })
        }
    }),
    f
},
{
    requires: ["dom", "event", "../base"]
}),
KISSY.add("switchable/carousel/aria", 
function(a, b, c, d, e) {
    function f(b) {
        var c = b.currentIndex,
        d = this.activeIndex,
        e = this.panels,
        f = e[c * this.config.steps],
        g = this.triggers,
        c = g[c]; ((b = !(!b.originalEvent.target && !b.originalEvent.srcElement)) || -1 == d) && (a.each(g, 
        function(a) {
            r(a, -1)
        }), a.each(e, 
        function(a) {
            r(a, -1)
        }), c && r(c, 0), r(f, 0), b && f.focus())
    }
    function g(c) {
        var d;
        return a.each(this.triggers, 
        function(a) {
            return a == c || b.contains(a, c) ? (d = a, !1) : void 0
        }),
        d
    }
    function h(c) {
        var d = c.target;
        switch (c.keyCode) {
        case o:
        case n:
            if (d = g.call(this, d)) {
                var e = b.next(d),
                f = this.triggers;
                e || (e = f[0]),
                r(d, -1),
                e && (r(e, 0), e.focus()),
                c.halt()
            }
            break;
        case m:
        case l:
            (d = g.call(this, d)) && (e = b.prev(d), f = this.triggers, e || (e = f[f.length - 1]), r(d, -1), e && (r(e, 0), e.focus()), c.halt());
            break;
        case q:
        case p:
            (d = g.call(this, d)) && (this.switchTo(a.indexOf(d, this.triggers), void 0, s), c.halt())
        }
    }
    function i(c) {
        var d;
        return a.each(this.panels, 
        function(a) {
            return a == c || b.contains(a, c) ? (d = a, !1) : void 0
        }),
        d
    }
    function j(b, c) {
        var d = a.indexOf(b, this.panels),
        e = this.config.steps,
        f = Math.floor(d / e);
        return f == this.activeIndex ? 1: 0 == d % e || d % e == e - 1 ? (this.switchTo(f, c, s), 0) : 1
    }
    function k(a) {
        var c = a.target;
        switch (a.keyCode) {
        case o:
        case n:
            if (c = i.call(this, c)) {
                var d = b.next(c),
                e = this.panels;
                d || (d = e[0]),
                r(c, -1),
                r(d, 0),
                j.call(this, d, t) && d.focus(),
                a.halt()
            }
            break;
        case m:
        case l:
            (c = i.call(this, c)) && (d = b.prev(c), e = this.panels, d || (d = e[e.length - 1]), r(c, -1), r(d, 0), j.call(this, d, u) && d.focus(), a.halt());
            break;
        case q:
        case p:
            (c = i.call(this, c)) && (this.fire("itemSelected", {
                item: c
            }), a.halt())
        }
    }
    var l = 37,
    m = 38,
    n = 39,
    o = 40,
    p = 32,
    q = 13,
    r = d.setTabIndex,
    s = {
        originalEvent: {
            target: 1
        }
    },
    t = "forward",
    u = "backward";
    a.mix(e.Config, {
        aria: !1
    }),
    e.Plugins.push({
        name: "aria",
        init: function(b) {
            if (b.config.aria) {
                var d = b.triggers,
                e = b.panels,
                g = b.content,
                i = b.activeIndex;
                g.id || (g.id = a.guid("ks-switchbale-content")),
                g.setAttribute("role", "listbox");
                var j = 0;
                a.each(d, 
                function(a) {
                    r(a, i == j ? "0": "-1"),
                    a.setAttribute("role", "button"),
                    a.setAttribute("aria-controls", g.id),
                    j++
                }),
                j = 0,
                a.each(e, 
                function(a) {
                    r(a, "-1"),
                    a.setAttribute("role", "option"),
                    j++
                }),
                b.on("switch", f, b),
                (d = b.nav) && c.on(d, "keydown", h, b),
                c.on(g, "keydown", k, b),
                d = b.prevBtn,
                e = b.nextBtn,
                d && (r(d, 0), d.setAttribute("role", "button"), c.on(d, "keydown", 
                function(a) { (a.keyCode == q || a.keyCode == p) && (b.prev(s), a.preventDefault())
                })),
                e && (r(e, 0), e.setAttribute("role", "button"), c.on(e, "keydown", 
                function(a) { (a.keyCode == q || a.keyCode == p) && (b.next(s), a.preventDefault())
                }))
            }
        }
    })
},
{
    requires: ["dom", "event", "../aria", "./base"]
}),
KISSY.add("switchable/effect", 
function(a, b, c, d, e, f) {
    var g;
    return a.mix(e.Config, {
        effect: "none",
        duration: .5,
        easing: "easeNone"
    }),
    e.Effects = {
        none: function(a, c, d) {
            a && b.css(a, "display", "none"),
            b.css(c, "display", "block"),
            d && d()
        },
        fade: function(a, c, e) {
            var g = this,
            h = g.config,
            i = a ? a[0] : null,
            j = c[0];
            g.anim && (g.anim.stop(), b.css(g.anim.fromEl, {
                zIndex: 1,
                opacity: 0
            }), b.css(g.anim.toEl, "zIndex", 9)),
            b.css(j, "opacity", 1),
            i ? (g.anim = new d(i, {
                opacity: 0
            },
            h.duration, h.easing, 
            function() {
                g.anim = f,
                b.css(j, "z-index", 9),
                b.css(i, "z-index", 1),
                e && e()
            }).run(), g.anim.toEl = j, g.anim.fromEl = i) : (b.css(j, "z-index", 9), e && e())
        },
        scroll: function(a, c, e, g) {
            var h = this,
            c = h.config,
            i = "scrollx" === c.effect,
            j = {};
            j[i ? "left": "top"] = -(h.viewSize[i ? 0: 1] * g) + "px",
            h.anim && h.anim.stop(),
            a ? h.anim = new d(h.content, j, c.duration, c.easing, 
            function() {
                h.anim = f,
                e && e()
            }).run() : (b.css(h.content, j), e && e())
        }
    },
    g = e.Effects,
    g.scrollx = g.scrolly = g.scroll,
    e.Plugins.push({
        name: "effect",
        init: function(c) {
            var d = c.config,
            e = d.effect,
            f = c.panels,
            g = c.content,
            h = d.steps,
            i = c.activeIndex,
            j = f.length;
            if (c.viewSize = [d.viewSize[0] || f[0].offsetWidth * h, d.viewSize[1] || f[0].offsetHeight * h], "none" !== e) switch (b.css(f, "display", "block"), e) {
            case "scrollx":
            case "scrolly":
                b.css(g, "position", "absolute"),
                "static" == b.css(g.parentNode, "position") && b.css(g.parentNode, "position", "relative"),
                "scrollx" === e && (b.css(f, "float", "left"), b.width(g, c.viewSize[0] * (j / h)));
                break;
            case "fade":
                var k,
                l = i * h,
                m = l + h - 1;
                a.each(f, 
                function(a, c) {
                    k = c >= l && m >= c,
                    b.css(a, {
                        opacity: k ? 1: 0,
                        position: "absolute",
                        zIndex: k ? 9: 1
                    })
                })
            }
        }
    }),
    a.augment(e, {
        _switchView: function(b, c, d, e, f, h) {
            var i = this,
            j = i.config.effect; (a.isFunction(j) ? j: g[j]).call(i, b, c, 
            function() {
                i._fireOnSwitch(d, f),
                h && h.call(i)
            },
            d, e)
        }
    }),
    e
},
{
    requires: ["dom", "event", "anim", "switchable/base"]
}),
KISSY.add("switchable/circular", 
function(a, b, c, d) {
    function e(a, d, e, h, i) {
        var l,
        q = this,
        d = q.config,
        r = q.length,
        s = q.activeIndex,
        t = d.scrollType === p,
        u = t ? j: k,
        v = q.viewSize[t ? 0: 1],
        t = -v * h,
        w = {},
        x = i === o; (l = x && 0 === s && h === r - 1 || i === n && s === r - 1 && 0 === h) && (t = f.call(q, q.panels, h, x, u, v)),
        w[u] = t + m,
        q.anim && (q.anim.stop(), "relative" == q.panels[s * d.steps].style.position && g.call(q, q.panels, s, s, u, v)),
        a ? q.anim = new c(q.content, w, d.duration, d.easing, 
        function() {
            l && g.call(q, q.panels, h, x, u, v),
            q.anim = void 0,
            e && e()
        }).run() : (b.css(q.content, w), e && e())
    }
    function f(a, c, d, e, f) {
        var g = this.config.steps,
        c = this.length,
        j = d ? c - 1: 0,
        a = a.slice(j * g, (j + 1) * g);
        return b.css(a, h, i),
        b.css(a, e, (d ? -1: 1) * f * c),
        d ? f: -f * c
    }
    function g(a, c, d, e, f) {
        var g = this.config.steps,
        c = this.length,
        i = d ? c - 1: 0,
        a = a.slice(i * g, (i + 1) * g);
        b.css(a, h, l),
        b.css(a, e, l),
        b.css(this.content, e, d ? -f * (c - 1) : l)
    }
    var h = "position",
    i = "relative",
    j = "left",
    k = "top",
    l = "",
    m = "px",
    n = "forward",
    o = "backward",
    p = "scrollx";
    a.mix(d.Config, {
        circular: !1
    }),
    d.Plugins.push({
        name: "circular",
        init: function(a) {
            a = a.config,
            !a.circular || a.effect !== p && "scrolly" !== a.effect || (a.scrollType = a.effect, a.effect = e)
        }
    })
},
{
    requires: ["dom", "anim", "./base", "./effect"]
}),
KISSY.add("switchable/countdown", 
function(a, b, c, d, e, f) {
    return a.mix(e.Config, {
        countdown: !1,
        countdownFromStyle: "",
        countdownToStyle: "width: 0"
    }),
    e.Plugins.push({
        name: "countdown",
        init: function(e) {
            function g(a) {
                h(),
                j = new d(m[a], o, l - 1).run()
            }
            function h() {
                i && (clearTimeout(i), i = null),
                j && (j.stop(), j = f)
            }
            var i,
            j,
            k = e.config,
            l = k.interval,
            m = [],
            n = k.countdownFromStyle,
            o = k.countdownToStyle;
            k.autoplay && k.hasTriggers && k.countdown && (a.each(e.triggers, 
            function(a, b) {
                a.innerHTML = '<div class="ks-switchable-trigger-mask"></div><div class="ks-switchable-trigger-content">' + a.innerHTML + "</div>",
                m[b] = a.firstChild
            }), k.pauseOnHover && (c.on(e.container, "mouseenter", 
            function() {
                h();
                var a = m[e.activeIndex];
                n ? j = new d(a, n, .2, "easeOut").run() : b.attr(a, "style", "")
            }), c.on(e.container, "mouseleave", 
            function() {
                h();
                var a = e.activeIndex;
                b.attr(m[a], "style", n),
                i = setTimeout(function() {
                    g(a)
                },
                200)
            })), e.on("beforeSwitch", 
            function() {
                h(),
                m[e.activeIndex] && b.attr(m[e.activeIndex], "style", n || "")
            }), e.on("switch", 
            function(a) {
                e.paused || g(a.currentIndex)
            }), -1 < e.activeIndex && g(e.activeIndex))
        }
    }),
    e
},
{
    requires: ["dom", "event", "anim", "./base"]
}),
KISSY.add("switchable/lazyload", 
function(a, b, c) {
    var d = "beforeSwitch",
    e = "img",
    f = "textarea",
    g = {};
    return g[e] = "data-ks-lazyload-custom",
    g[f] = "ks-datalazyload-custom",
    a.mix(c.Config, {
        lazyDataType: f
    }),
    c.Plugins.push({
        name: "lazyload",
        init: function(c) {
            function h(a) {
                var g = l.steps,
                a = a.toIndex * g;
                k.loadCustomLazyData(c.panels.slice(a, a + g), i);
                a: {
                    if (a = (g = i === e) ? "img": i === f ? "textarea": "") for (var a = b.query(a, c.container), m = 0, n = a.length; n > m; m++) {
                        var o = a[m];
                        if (g ? b.attr(o, j) : b.hasClass(o, j)) {
                            g = !1;
                            break a
                        }
                    }
                    g = !0
                }
                g && c.detach(d, h)
            }
            var i,
            j,
            k = a.require("datalazyload"),
            l = c.config;
            "img-src" === l.lazyDataType && (l.lazyDataType = e),
            "area-data" === l.lazyDataType && (l.lazyDataType = f),
            i = l.lazyDataType,
            j = g[i],
            k && i && j && c.on(d, h)
        }
    }),
    c
},
{
    requires: ["dom", "./base"]
}),
KISSY.add("switchable/slide/base", 
function(a, b) {
    function c(a, b) {
        return this instanceof c ? void c.superclass.constructor.apply(this, arguments) : new c(a, b)
    }
    return c.Config = {
        autoplay: !0,
        circular: !0
    },
    c.Plugins = [],
    a.extend(c, b),
    c
},
{
    requires: ["../base"]
}),
KISSY.add("switchable/slide/aria", 
function(a, b, c, d, e) {
    function f(a) {
        switch (a.keyCode) {
        case j:
        case i:
            this.next(k),
            a.halt();
            break;
        case h:
        case g:
            this.prev(k),
            a.halt()
        }
    }
    var g = 37,
    h = 38,
    i = 39,
    j = 40;
    a.mix(e.Config, {
        aria: !1
    });
    var k = {
        originalEvent: {
            target: 1
        }
    },
    l = d.setTabIndex;
    e.Plugins.push({
        name: "aria",
        init: function(d) {
            if (d.config.aria) {
                var e = d.panels,
                g = 0,
                h = d.activeIndex;
                a.each(d.triggers, 
                function(a) {
                    l(a, "-1"),
                    g++
                }),
                g = 0,
                a.each(e, 
                function(a) {
                    l(a, h == g ? "0": "-1"),
                    b.attr(a, "role", "option"),
                    g++
                });
                var i = d.content;
                b.attr(i, "role", "listbox"),
                c.on(i, "keydown", f, d),
                l(e[0], 0),
                d.on("switch", 
                function(a) {
                    var b = a.currentIndex,
                    a = !(!a.originalEvent.target && !a.originalEvent.srcElement),
                    c = d.completedIndex;
                    c > -1 && l(e[c], -1),
                    l(e[b], 0),
                    a && e[b].focus()
                })
            }
        }
    })
},
{
    requires: ["dom", "event", "../aria", "./base"]
}),
KISSY.add("switchable/tabs/base", 
function(a, b) {
    function c(a, b) {
        return this instanceof c ? (c.superclass.constructor.call(this, a, b), 0) : new c(a, b)
    }
    return a.extend(c, b),
    c.Config = {},
    c.Plugins = [],
    c
},
{
    requires: ["../base"]
}),
KISSY.add("switchable/tabs/aria", 
function(a, b, c, d, e, f) {
    function g(c) {
        var d;
        return a.each(this.triggers, 
        function(a) { (a == c || b.contains(a, c)) && (d = a)
        }),
        d
    }
    function h(a) {
        switch (a.keyCode) {
        case k:
        case l:
            a.ctrlKey && !a.altKey && !a.shiftKey && a.halt();
            break;
        case q:
            a.ctrlKey && !a.altKey && a.halt()
        }
    }
    function i(a) {
        var b = a.target,
        c = a.ctrlKey && !a.shiftKey && !a.altKey;
        switch (a.keyCode) {
        case m:
        case n:
            g.call(this, b) && (this.prev(s(a)), a.halt());
            break;
        case o:
        case p:
            g.call(this, b) && (this.next(s(a)), a.halt());
            break;
        case l:
            c && (a.halt(), this.next(s(a)));
            break;
        case k:
            c && (a.halt(), this.prev(s(a)));
            break;
        case q:
            a.ctrlKey && !a.altKey && (a.halt(), a.shiftKey ? this.prev(s(a)) : this.next(s(a)))
        }
    }
    function j(a) {
        var b = !(!a.originalEvent.target && !a.originalEvent.srcElement),
        c = this.completedIndex,
        d = a.currentIndex;
        if (c != d) {
            var a = this.triggers[c],
            e = this.triggers[d],
            c = this.panels[c],
            d = this.panels[d];
            a && r(a, "-1"),
            r(e, "0"),
            b && e.focus(),
            c && c.setAttribute("aria-hidden", "true"),
            d.setAttribute("aria-hidden", "false")
        }
    }
    var k = 33,
    l = 34,
    m = 37,
    n = 38,
    o = 39,
    p = 40,
    q = 9;
    a.mix(f.Config, {
        aria: !0
    }),
    f.Plugins.push({
        name: "aria",
        init: function(d) {
            if (d.config.aria) {
                var e = d.triggers,
                f = d.activeIndex,
                g = d.panels,
                k = d.container;
                d.nav && b.attr(d.nav, "role", "tablist");
                var l = 0;
                a.each(e, 
                function(b) {
                    b.setAttribute("role", "tab"),
                    r(b, f == l ? "0": "-1"),
                    b.id || (b.id = a.guid("ks-switchable")),
                    l++
                }),
                l = 0,
                a.each(g, 
                function(a) {
                    var b = e[l];
                    a.setAttribute("role", "tabpanel"),
                    a.setAttribute("aria-hidden", f == l ? "false": "true"),
                    a.setAttribute("aria-labelledby", b.id),
                    l++
                }),
                d.on("switch", j, d),
                c.on(k, "keydown", i, d),
                c.on(k, "keypress", h, d)
            }
        }
    });
    var r = e.setTabIndex,
    s = d.getDomEvent
},
{
    requires: ["dom", "event", "../base", "../aria", "./base"]
}),
KISSY.add("switchable", 
function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    return a.Switchable = b,
    c = {
        Accordion: d,
        Carousel: h,
        Slide: n,
        Tabs: p
    },
    a.mix(a, c),
    a.mix(b, c),
    b
},
{
    requires: "switchable/base,switchable/aria,switchable/accordion/base,switchable/accordion/aria,switchable/autoplay,switchable/autorender,switchable/carousel/base,switchable/carousel/aria,switchable/circular,switchable/countdown,switchable/effect,switchable/lazyload,switchable/slide/base,switchable/slide/aria,switchable/tabs/base,switchable/tabs/aria".split(",")
}),
KISSY.add("cookie/base", 
function(a) {
    var b = document,
    c = encodeURIComponent,
    d = decodeURIComponent;
    return {
        get: function(c) {
            var e;
            return a.isString(c) && "" !== c && (c = String(b.cookie).match(RegExp("(?:^| )" + c + "(?:(?:=([^;]*))|;|$)"))) && (e = c[1] ? d(c[1]) : ""),
            e
        },
        set: function(d, e, f, g, h, i) {
            e = String(c(e));
            var j = f;
            "number" == typeof j && (j = new Date, j.setTime(j.getTime() + 864e5 * f)),
            j instanceof Date && (e += "; expires=" + j.toUTCString()),
            a.isString(g) && "" !== g && (e += "; domain=" + g),
            a.isString(h) && "" !== h && (e += "; path=" + h),
            i && (e += "; secure"),
            b.cookie = d + "=" + e
        },
        remove: function(a, b, c, d) {
            this.set(a, "", -1, b, c, d)
        }
    }
}),
KISSY.add("cookie", 
function(a, b) {
    return b
},
{
    requires: ["cookie/base"]
}),
KISSY.add("pagination", 
function(a, b, c, d, e) {
    "use strict";
    function f(b, c) {
        if (! (this instanceof f)) return new f(b, c);
        if (a.isObject(b)) this.con = b;
        else if (/^#/i.test(b)) this.con = a.one(b);
        else if (a.one("#" + b)) this.con = a.one("#" + b);
        else {
            if (!a.one(b)) throw new Error("Pagination Container Hooker not found");
            this.con = a.one(b)
        }
        f.superclass.constructor.call(this, c),
        this.init()
    }
    return f.ATTRS = {
        totalPage: {
            value: 10
        },
        currentPage: {
            value: 1
        },
        preposePagesCount: {
            value: 2
        },
        postposePagesCount: {
            value: 1
        },
        firstPagesCount: {
            value: 2
        },
        lastPagesCount: {
            value: 0
        },
        render: {
            value: !0
        }
    },
    a.extend(f, a.Base, {
        init: function() {
            this.get("render") && this.render()
        },
        render: function() {
            this.renderUI(),
            this.bindUI(),
            this.syncUI()
        },
        renderUI: function() {
            this._resetPagination()
        },
        bindUI: function() {
            var a = this;
            c.delegate(a.con, "click", ".pagination-spec", 
            function(b) {
                var c = b.currentTarget,
                d = parseInt(e.attr(c, "data-page"));
                a._switchToPage(d)
            }),
            c.delegate(a.con, "click", ".pagination-prev", 
            function() {
                var b = a.get("currentPage") - 1;
                a._switchToPage(b)
            }),
            c.delegate(a.con, "click", ".pagination-next", 
            function() {
                var b = a.get("currentPage") + 1;
                a._switchToPage(b)
            })
        },
        syncUI: function() {},
        _resetPagination: function() {
            var a,
            b = "",
            c = this.get("totalPage") > 0 ? this.get("totalPage") : 1,
            d = (this.get("currentPage") <= c && this.get("currentPage")) > 0 ? this.get("currentPage") : 1,
            f = this.get("preposePagesCount") >= 0 ? this.get("preposePagesCount") : 2,
            g = this.get("postposePagesCount") >= 0 ? this.get("postposePagesCount") : 1,
            h = this.get("firstPagesCount") >= 0 ? this.get("firstPagesCount") : 2,
            i = this.get("lastPagesCount") >= 0 ? this.get("lastPagesCount") : 0;
            if (b += 1 === d ? '<span class="pagination-start"><span>上一页</span></span>': '<a class="pagination-prev"><span>上一页</span></a>', h + f + 1 >= d) for (var j = 1; d > j; j++) b += this._renderActivePage(j);
            else {
                for (var j = 1; h >= j; j++) b += this._renderActivePage(j);
                b += '<span class="pagination-break">...</span>';
                for (var j = d - f; d - 1 >= j; j++) b += this._renderActivePage(j)
            }
            if (b += '<span class="pagination-curr">' + d + "</span>", d >= c - i - g) {
                a = d + 1;
                for (var j = d + 1; c >= j; j++) b += this._renderActivePage(j)
            } else {
                for (var j = d + 1; d + g >= j; j++) b += this._renderActivePage(j);
                b += '<span class="pagination-break">...</span>';
                for (var j = c - i + 1; c >= j; j++) b += this._renderActivePage(j)
            }
            b += d === c ? '<span class="pagination-end"><span>下一页</span></span>': '<a class="pagination-next"><span>下一页<span></a>',
            e.html(this.con, b)
        },
        _renderActivePage: function(a) {
            return '<a class="pagination-spec" data-page="' + a + '">' + a + "</a>"
        },
        _switchToPage: function(a) {
            this.set("currentPage", a),
            this._resetPagination(),
            this.fire("switch", {
                toPage: this.get("currentPage")
            })
        },
        show: function() {
            this.con.show()
        },
        hide: function() {
            this.con.hide()
        }
    }),
    f
},
{
    requires: ["base", "event", "node", "dom"]
}),
KISSY.add("mustache", 
function() {
    var a = function() {
        var a = function() {};
        return a.prototype = {
            otag: "{{",
            ctag: "}}",
            pragmas: {},
            buffer: [],
            pragmas_implemented: {
                "IMPLICIT-ITERATOR": !0
            },
            context: {},
            render: function(a, b, c, d) {
                if (d || (this.context = b, this.buffer = []), !this.includes("", a)) return d ? a: void this.send(a);
                a = this.render_pragmas(a);
                var e = this.render_section(a, b, c);
                return d ? this.render_tags(e, b, c, d) : void this.render_tags(e, b, c, d)
            },
            send: function(a) {
                "" !== a && this.buffer.push(a)
            },
            render_pragmas: function(a) {
                if (!this.includes("%", a)) return a;
                var b = this,
                c = new RegExp(this.otag + "%([\\w-]+) ?([\\w]+=[\\w]+)?" + this.ctag, "g");
                return a.replace(c, 
                function(a, c, d) {
                    if (!b.pragmas_implemented[c]) throw {
                        message: "This implementation of mustache doesn't understand the '" + c + "' pragma"
                    };
                    if (b.pragmas[c] = {},
                    d) {
                        var e = d.split("=");
                        b.pragmas[c][e[0]] = e[1]
                    }
                    return ""
                })
            },
            render_partial: function(a, b, c) {
                if (a = this.trim(a), !c || void 0 === c[a]) throw {
                    message: "unknown_partial '" + a + "'"
                };
                return "object" != typeof b[a] ? this.render(c[a], b, c, !0) : this.render(c[a], b[a], c, !0)
            },
            render_section: function(a, b, c) {
                if (!this.includes("#", a) && !this.includes("^", a)) return a;
                var d = this,
                e = new RegExp(this.otag + "(\\^|\\#)\\s*(.+)\\s*" + this.ctag + "\n*([\\s\\S]+?)" + this.otag + "\\/\\s*\\2\\s*" + this.ctag + "\\s*", "mg");
                return a.replace(e, 
                function(a, e, f, g) {
                    var h = d.find(f, b);
                    return "^" == e ? !h || d.is_array(h) && 0 === h.length ? d.render(g, b, c, !0) : "": "#" == e ? d.is_array(h) ? d.map(h, 
                    function(a) {
                        return d.render(g, d.create_context(a), c, !0)
                    }).join("") : d.is_object(h) ? d.render(g, d.create_context(h), c, !0) : "function" == typeof h ? h.call(b, g, 
                    function(a) {
                        return d.render(a, b, c, !0)
                    }) : h ? d.render(g, b, c, !0) : "": void 0
                })
            },
            render_tags: function(a, b, c, d) {
                for (var e = this, f = function() {
                    return new RegExp(e.otag + "(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?" + e.ctag + "+", "g")
                },
                g = f(), h = function(a, d, h) {
                    switch (d) {
                    case "!":
                        return "";
                    case "=":
                        return e.set_delimiters(h),
                        g = f(),
                        "";
                    case ">":
                        return e.render_partial(h, b, c);
                    case "{":
                        return e.find(h, b);
                    default:
                        return e.escape(e.find(h, b))
                    }
                },
                i = a.split("\n"), j = 0; j < i.length; j++) i[j] = i[j].replace(g, h, this),
                d || this.send(i[j]);
                return d ? i.join("\n") : void 0
            },
            set_delimiters: function(a) {
                var b = a.split(" ");
                this.otag = this.escape_regex(b[0]),
                this.ctag = this.escape_regex(b[1])
            },
            escape_regex: function(a) {
                if (!arguments.callee.sRE) {
                    var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"];
                    arguments.callee.sRE = new RegExp("(\\" + b.join("|\\") + ")", "g")
                }
                return a.replace(arguments.callee.sRE, "\\$1")
            },
            find: function(a, b) {
                function c(a) {
                    return a === !1 || 0 === a || a
                }
                a = this.trim(a);
                var d;
                return c(b[a]) ? d = b[a] : c(this.context[a]) && (d = this.context[a]),
                "function" == typeof d ? d.apply(b) : void 0 !== d ? d: ""
            },
            includes: function(a, b) {
                return - 1 != b.indexOf(this.otag + a)
            },
            escape: function(a) {
                return a = String(null === a ? "": a),
                a.replace(/&(?!\w+;)|["'<>\\]/g, 
                function(a) {
                    switch (a) {
                    case "&":
                        return "&amp;";
                    case "\\":
                        return "\\\\";
                    case '"':
                        return "&quot;";
                    case "'":
                        return "&#39;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    default:
                        return a
                    }
                })
            },
            create_context: function(a) {
                if (this.is_object(a)) return a;
                var b = ".";
                this.pragmas["IMPLICIT-ITERATOR"] && (b = this.pragmas["IMPLICIT-ITERATOR"].iterator);
                var c = {};
                return c[b] = a,
                c
            },
            is_object: function(a) {
                return a && "object" == typeof a
            },
            is_array: function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            trim: function(a) {
                return a.replace(/^\s*|\s*$/g, "")
            },
            map: function(a, b) {
                if ("function" == typeof a.map) return a.map(b);
                for (var c = [], d = a.length, e = 0; d > e; e++) c.push(b(a[e]));
                return c
            }
        },
        {
            name: "mustache.js",
            version: "0.3.1-dev",
            to_html: function(b, c, d, e) {
                var f = new a;
                return e && (f.send = e),
                f.render(b, c, d),
                e ? void 0: f.buffer.join("\n")
            }
        }
    } ();
    return a
}),
KISSY.add("mu", 
function(a, b) {
    function c(a, b) {
        for (var c = d(a), f = "", g = 0; g < c.length; g++) f = "if(" + c[g] + ")",
        b[f] || (b[f] = e(c[g]))
    }
    function d(a) {
        var b = /\{{2,3}[\^#]?if\((.*?)\)\}{2,3}?/gi,
        c = /\{{2,3}[\^#]?if\((.*?)\)\}{2,3}?/i,
        d = a.match(b),
        e = [];
        if (d) for (var f = 0; f < d.length; f++) e.push(d[f].match(c)[1]);
        return e
    }
    function e(a) {
        a = a.split("==");
        var b = function() {
            for (var b = a[0].split("."), c = a[1], d = this, e = b.length - 1; e > -1; e--) {
                var f = b.slice(e),
                g = d;
                try {
                    for (var h = 0; h < f.length - 1; h++) g = g[f[h]];
                    if (f[f.length - 1] in g) return g[f[f.length - 1]].toString() === c ? !0: !1
                } catch(i) {}
            }
            return ! 1
        };
        return b
    }
    function f(a, b) {
        var c,
        d;
        for (c in a) d = a[c],
        d instanceof Array ? g(d) : "object" == typeof d && 5 > b && f(d, b + 1)
    }
    function g(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            "object" == typeof c && (0 === b ? c.__first__ = !0: b === a.length - 1 ? c.__last__ = !0: c.__mid__ = !0, c.__index__ = b)
        }
    }
    var h = /\s*<script[^>]+type\s*=\s*(['"])\s*text\/tmpl\1[^>]*>([\s\S]*?)<\/script>\s*/gi;
    return {
        to_html: function(a, d) {
            "object" == typeof d && f(d, 0);
            var e = a.match(h);
            if (e && (a = a.replace(h, 
            function() {
                return '<script type="text/tmpl"></script>'
            })), a = a.replace(/(\{{2,3})@if/gi, "$1#if"), c(a, d), a = b.to_html.apply(this, arguments), e) {
                var g = 0;
                a = a.replace(h, 
                function() {
                    return e[g++]
                })
            }
            return a
        },
        name: b.name,
        version: b.version,
        tags: b.tags,
        Scanner: b.Scanner,
        Context: b.Context,
        Writer: b.Writer,
        escape: b.escape,
        parse: b.parse,
        clearCache: b.clearCache,
        compile: b.compile,
        compilePartial: b.compilePartial,
        compileTokens: b.compileTokens,
        render: function() {
            return this.to_html.apply(this, arguments)
        }
    }
},
{
    requires: ["mustache"]
}),
KISSY.add("Stat", 
function(a) {
    var b = a.DOM,
    c = function(a, b, c, d) {
        var e = "chrome",
        f = "chrome";
        f.indexOf("gruntReplaceBrows") < 0 && (e = f),
        navigator && navigator.userAgent && navigator.userAgent.toUpperCase().indexOf("LBBROWSER") > 0 && (e = "liebao"),
        a = a.replace(new RegExp("{{browser}}", "gm"), e);
        var g = (new Date).getTime(),
        h = "log_" + g,
        i = window[h] = new Image;
        if (i.onload = i.onerror = function() {
            window[h] = null
        },
        c) i.src = c;
        else {
            var j = b ? (  "sfrom=" + KISSY.replace_all(window.location.host, ".","_") + "&pid=" + KISSY.jm_peerid + "&") : "sfrom=" + KISSY.replace_all(window.location.host, ".","_") + "&" + ("&pid=" + KISSY.jm_peerid + "&");
            d = d ? d: "http://stat.walatao.com/walstat.js?";
            i.src = d + j + "t=" + g + "&plugin="+((chrome && chrome.extension && chrome.extension.onMessage)?true:false)+'&'+ encodeURI(a);
        }
        i = null
    };
    c.pv = function(c, d, e, f) {
        var g = document.referrer ? "&pre=" + escape(document.referrer) : "",
        c = c ? c: "#J_PvStat";
        if (c) {
            var h = b.attr(c, "data-stat") + g;
            a.Stat(h, d, e, f)
        }
    },
    c.orderForm = function(c, d, e) {
        var f = a.Cookie.get("pid");
        a.Event.on(document, "click", 
        function(g) {
            var h = g.target;
            if ("A" == h.tagName.toUpperCase() || (h = b.parent(h, "a"))) {
                for (var i = a.trim(b.attr(h, "data-stat")), j = i, k = h.href, l = [], m = l.length, n = !1; m--;) if (k.indexOf(l[m]) > -1) {
                    n = !0;
                    break
                }
                if (i && n) {
                    if (f) {
                        for (var o = i.split("."), p = (o.length, 7), q = 0; p > q; q++) o[q] || "0" === o[q] || o.push("0");
                        o[p - 1] = f,
                        i = o.join(".")
                    }
                    if (i = "stp=" + i, -1 !== k.indexOf("stp=")) {
                        var r = new RegExp("[&?]stp=[^&]*(&|$)", "i");
                        h.href = k.replace(r, "$1")
                    }
                    h.href = -1 === h.href.indexOf("?") ? h.href + "?": h.href + "&",
                    h.href += i
					
                }
                if (j && a.Stat) {
                    var s = document.referrer ? "&pre=" + escape(document.referrer) : "",
                    j = "click=" + j + s;
                    a.Stat(j, c, d, e)
                }
            }
        })
    },
    c.init = function(a, b, c, d) {
        KISSY.Stat.pv(a, b, c, d),
        KISSY.Stat.orderForm(b, c, d)
    },
    a.Stat = c
}),
KISSY.add("gallery/kcharts/1.2/linechart/theme", 
function() {
    var a = "{COLOR}",
    b = {
        "ks-chart-default": {
            title: {
                content: "",
                css: {
                    "text-align": "center",
                    "font-size": "16px",
                    "font-weight": "bold",
                    color: "#666"
                },
                isShow: !0
            },
            subTitle: {
                content: "",
                css: {
                    "text-align": "center",
                    "font-size": "12px",
                    color: "#666"
                },
                isShow: !0
            },
            points: {
                attr: {
                    stroke: "#fff",
                    r: 4,
                    "stroke-width": 1.5,
                    fill: a
                },
                hoverAttr: {
                    stroke: "#fff",
                    r: 5,
                    fill: a,
                    "stroke-width": 0
                }
            },
            xGrids: {
                css: {
                    color: "#eee"
                }
            },
            yGrids: {
                css: {
                    color: "#eee"
                }
            },
            yAxis: {
                css: {
                    color: "#ccc"
                }
            },
            xAxis: {
                css: {
                    color: "#ccc"
                }
            },
            xLabels: {
                css: {
                    color: "#666",
                    "font-size": "12px"
                }
            },
            yLabels: {
                css: {
                    color: "#666",
                    "font-size": "12px"
                }
            },
            pointLine: {
                css: {
                    color: "#ccc"
                }
            },
            tip: {
                css: {
                    border: "1px solid {COLOR}"
                }
            }
        },
        "ks-chart-analytiks": {
            title: {
                content: "",
                css: {
                    "text-align": "center",
                    "font-size": "16px",
                    "font-weight": "bold",
                    color: "#666"
                },
                isShow: !0
            },
            subTitle: {
                content: "",
                css: {
                    "text-align": "center",
                    "font-size": "12px",
                    color: "#666"
                },
                isShow: !0
            },
            points: {
                attr: {
                    type: "circle",
                    stroke: "{COLOR}",
                    fill: "#fff",
                    r: 4,
                    "stroke-width": 2
                },
                hoverAttr: {
                    type: "circle",
                    stroke: "{COLOR}",
                    fill: "#fff",
                    r: 5,
                    "stroke-width": 2
                }
            },
            xGrids: {
                css: {
                    color: "#eee"
                }
            },
            yGrids: {
                css: {
                    color: "#eee"
                }
            },
            yAxis: {
                css: {
                    color: "#ccc"
                }
            },
            xAxis: {
                css: {
                    color: "#ccc"
                }
            },
            xLabels: {
                css: {
                    color: "#666",
                    "font-size": "12px"
                }
            },
            yLabels: {
                css: {
                    color: "#666",
                    "font-size": "12px"
                }
            },
            pointLine: {
                css: {
                    color: "#ccc"
                }
            },
            tip: {
                css: {
                    border: "1px solid {COLOR}"
                }
            }
        },
        "ks-chart-rainbow": {
            title: {
                content: "",
                css: {
                    "text-align": "center",
                    "font-size": "16px",
                    "font-weight": "bold",
                    color: "#666"
                },
                isShow: !0
            },
            subTitle: {
                content: "",
                css: {
                    "text-align": "center",
                    "font-size": "12px",
                    color: "#666"
                },
                isShow: !0
            },
            points: {
                attr: {
                    type: "circle",
                    stroke: "#fff",
                    r: 4,
                    "stroke-width": 1.5,
                    fill: a
                },
                hoverAttr: {
                    type: "circle",
                    stroke: "#fff",
                    r: 5,
                    fill: a,
                    "stroke-width": 0
                }
            },
            xGrids: {
                css: {
                    color: "#eee"
                }
            },
            yGrids: {
                css: {
                    color: "#eee"
                }
            },
            yAxis: {
                css: {
                    color: "#ccc"
                }
            },
            xAxis: {
                css: {
                    color: "#ccc"
                }
            },
            xLabels: {
                css: {
                    color: "#666",
                    "font-size": "12px"
                }
            },
            yLabels: {
                css: {
                    color: "#666",
                    "font-size": "12px"
                }
            },
            pointLine: {
                css: {
                    color: "#ccc"
                }
            },
            tip: {
                css: {
                    border: "1px solid {COLOR}"
                }
            }
        }
    };
    return b
}),
KISSY.add("gallery/kcharts/1.2/linechart/index", 
function(a, b, c, d, f, g, h, i, j, k, l, m, n) {
    var o,
    p = a.all,
    q = a.Event,
    r = "ks-chart-",
    s = r + "default",
    t = r + "evtlayout",
    u = "{COLOR}",
    v = ["circle", "triangle", "rhomb", "square"],
    x = function(a) {
        var b = this;
        b._cfg = a,
        b.init()
    };
    return a.extend(x, f, {
        init: function() {
            var b,
            c = this;
            if (f.prototype.init.call(c, c._cfg), c.chartType = "linechart", c._$ctnNode[0]) {
                var d = {
                    themeCls: s,
                    autoRender: !0,
                    comparable: !1,
                    lineType: "straight",
                    colors: [],
                    title: {
                        content: "",
                        css: {
                            "text-align": "center",
                            "font-size": "16px"
                        },
                        isShow: !0
                    },
                    subTitle: {
                        content: "",
                        css: {
                            "text-align": "center",
                            "font-size": "12px"
                        },
                        isShow: !0
                    },
                    points: {
                        attr: {
                            type: "circle",
                            stroke: "#fff",
                            r: 4,
                            "stroke-width": 1.5,
                            fill: u
                        },
                        hoverAttr: {
                            type: "circle",
                            stroke: "#fff",
                            r: 5,
                            fill: u,
                            "stroke-width": 0
                        }
                    },
                    xLabels: {
                        isShow: !0,
                        css: {
                            color: "#666",
                            "font-size": "12px",
                            "white-space": "nowrap",
                            position: "absolute"
                        }
                    },
                    yLabels: {
                        isShow: !0,
                        css: {
                            color: "#666",
                            "font-size": "12px",
                            "white-space": "nowrap",
                            position: "absolute"
                        }
                    },
                    xAxis: {
                        isShow: !0,
                        css: {
                            zIndex: 10
                        }
                    },
                    yAxis: {
                        isShow: !0,
                        css: {
                            zIndex: 10
                        },
                        num: 5
                    },
                    xGrids: {
                        isShow: !0,
                        css: {}
                    },
                    yGrids: {
                        isShow: !0,
                        css: {}
                    },
                    areas: {
                        isShow: !1,
                        css: {}
                    },
                    line: {
                        isShow: !0,
                        attr: {
                            "stroke-width": "3px"
                        },
                        hoverAttr: {
                            "stroke-width": "4px"
                        }
                    },
                    pointLine: {
                        isShow: !1,
                        css: {}
                    },
                    legend: {
                        isShow: !1
                    },
                    tip: {
                        isShow: !0,
                        clsName: "",
                        template: "",
                        css: {},
                        offset: {
                            x: 0,
                            y: 0
                        },
                        boundryDetect: !0
                    }
                };
                c._lines = {},
                c._finished = [],
                s = c._cfg.themeCls || d.themeCls,
                c._cfg = a.mix(a.mix(d, j[s], k, k, !0), c._cfg, k, k, !0),
                c.color = o = new g({
                    themeCls: s
                }),
                c._cfg.colors.length > 0 && o.removeAllColors();
                for (var e in c._cfg.colors) o.setColor(c._cfg.colors[e]);
                c.__cfg = c.cloneSeriesConfig(["line", "points"]),
                b = c._points[0],
                w = Math.round(b && b[0] && b[1] && b[1].x - b[0].x || c.getInnerContainer().width),
                w && c.set("area-width", w),
                c._cfg.autoRender && c.render(!0)
            }
        },
        cloneSeriesConfig: function(b) {
            var c,
            d = this,
            e = {},
            f = a.clone(d._cfg);
            if (b) {
                for (var g in b) for (var h in d._cfg.series) c = d._cfg.series[h][b[g]] ? a.mix(f[b[g]], d._cfg.series[h][b[g]], k, k, !0) : d._cfg[b[g]],
                c && (e[b[g]] || (e[b[g]] = []), e[b[g]][h] = c);
                return e
            }
        },
        drawTitle: function() {
            var b = this,
            c = b.htmlPaper,
            d = s + "-title",
            e = b._cfg,
            f = b._innerContainer,
            g = .6 * f.y;
            e.title.isShow && "" != e.title.content && (b._title = c.rect(0, 0, b._$ctnNode.width(), g).addClass(d).css(a.mix({
                "line-height": g + "px"
            },
            e.title.css)).html(e.title.content))
        },
        drawSubTitle: function() {
            var b = this,
            c = b.htmlPaper,
            d = s + "-subtitle",
            e = b._cfg,
            f = b._innerContainer,
            g = .4 * f.y;
            e.subTitle.isShow && "" != e.subTitle.content && (b._subTitle = c.rect(0, .6 * f.y, b._$ctnNode.width(), g).addClass(d).css(a.mix({
                "line-height": g + "px"
            },
            e.subTitle.css)).html(e.subTitle.content))
        },
        getRealPointsNum: function(a) {
            var b = 0;
            for (var c in a) a[c].x && a[c].y && b++;
            return b
        },
        getVisableLineNum: function() {
            for (var a = this, b = a._cfg, c = b.series.length, d = c, e = 0; c > e; e++) 0 == b.series[e].isShow && d--;
            return d
        },
        drawLine: function(a, b) {
            var c = this,
            d = c._points[a];
            if (d && d.length) {
                var e = c.getLinePath(d),
                f = c.paper,
                g = c.color.getColor(a).DEFAULT,
                h = c.__cfg.line[a].attr,
                i = f.path(e).attr(h).attr({
                    stroke: g
                }),
                j = c.getVisableLineNum();
                return c._stocks[a].stocks = c.drawStocks(a, c.processAttr(c._cfg.points.attr, g)),
                c._finished.push(!0),
                c._finished.length == j && b && b(),
                i
            }
        },
        getFirstUnEmptyPointIndex: function(a) {
            var b = this,
            c = b._points[a];
            for (var d in c) if (!b.isEmptyPoint(c[d])) return d
        },
        animateLine: function(b, c) {
            var e,
            f,
            g,
            h,
            i,
            j = this,
            k = [],
            l = 0,
            n = 0,
            p = j._cfg,
            q = j.paper,
            r = j._points[b],
            s = j._stocks[b].type,
            t = j.getLinePath(r),
            u = d.getTotalLength(t),
            v = (r.length || 0, j.getRealPointsNum(r), p.anim ? p.anim.duration || 500: 500),
            w = "easeNone",
            x = j.get("area-width"),
            y = a.mix({
                stroke: o.getColor(b).DEFAULT
            },
            p.line.attr),
            z = j.__cfg.line[b].attr,
            A = q.path(e).attr(z).attr({
                stroke: o.getColor(b).DEFAULT
            });
            for (var B in j._points[b]) k[B] = "";
            return i = j.getFirstUnEmptyPointIndex(b),
            k[i] = j.drawStock(r[i].x, r[i].y, j.processAttr(p.points.attr, y.stroke), s),
            h = j.getVisableLineNum(),
            new m({},
            {},
            {
                duration: v,
                easing: w,
                frame: function() {
                    f = arguments[1] * u,
                    e = d.getSubpath(t, n, f),
                    g = d.pathBBox(e),
                    l = Math.floor(1.01 * g.width / x) - -i,
                    !k[l] && r[l] && (k[l] = j.drawStock(r[l].x, r[l].y, j.processAttr(p.points.attr, y.stroke), s));
                    for (var a in r) l > a && (k[a] || (k[a] = j.drawStock(r[a].x, r[a].y, j.processAttr(p.points.attr, y.stroke), s)));
                    A && A.attr({
                        path: e
                    })
                },
                endframe: function() {
                    j._stocks[b].stocks = k,
                    j._finished.push(!0),
                    j._finished.length == h && c && c()
                }
            }),
            A
        },
        getLinePath: function(a) {
            var b = this,
            c = "",
            d = (b._innerContainer.bl.y, b.getRealPointsNum(a)),
            e = 0;
            if (!a) return "";
            if (e = function() {
                for (var c in a) if (!b.isEmptyPoint(a[c])) return Math.round(c)
            } (), c += "M" + a[e].x + "," + a[e].y, "arc" == b._cfg.lineType && d > 2) {
                c += " R";
                for (var f = e + 1, d = a.length; d > f; f++) a[f].x && a[f].y && (c += a[f].x + "," + a[f].y + " ")
            } else for (var f = e + 1, d = a.length; d > f; f++) a[f].x && a[f].y && (c += " L" + a[f].x + "," + a[f].y);
            return c
        },
        drawLines: function(b) {
            var c = this,
            d = c._cfg,
            e = v.length;
            c._lines = {},
            c._stocks = {};
            for (var f in c._points) {
                var g,
                h = c.getLinePath(c._points[f]),
                i = o.getColor(f),
                j = c.processAttr(c._cfg.points.attr, i.DEFAULT),
                l = c.processAttr(c._cfg.points.hoverAttr, i.HOVER);
                if (c._stocks[f] = {
                    points: c._points[f],
                    color: i,
                    attr: j,
                    hoverAttr: l,
                    type: "auto" == j.type ? v[f % e] : j.type
                },
                d.anim) try {
                    g = 0 == d.series[f].isShow ? k: c.animateLine(f, b)
                } catch(m) {
                    g = 0 == d.series[f].isShow ? k: c.drawLine(f, b)
                } else g = 0 == d.series[f].isShow ? k: c.drawLine(f, b);
                c._lines[f] = {
                    line: g,
                    path: h,
                    points: c._points[f],
                    color: i,
                    attr: a.mix({
                        stroke: i.DEFAULT
                    },
                    c._cfg.line.attr),
                    isShow: d.series[f].isShow === !1 ? !1: !0
                }
            }
            return c._lines
        },
        processAttr: function(b, c) {
            var d = a.clone(b);
            for (var e in d) d[e] && "string" == typeof d[e] && (d[e] = d[e].replace(u, c));
            return d
        },
        drawStocks: function(a, b) {
            var c = this,
            d = [],
            e = c._points[a],
            f = c._stocks[a].type;
            for (var g in e) d.push(e[g].x && e[g].y ? c.drawStock(e[g].x, e[g].y, b, f) : "");
            return d
        },
        drawStock: function(a, b, c, d) {
            var e,
            f = this,
            g = f.paper,
            h = f._cfg.points.attr;
            if (a && b) {
                switch (d) {
                case "triangle":
                    e = n.triangle(g, a, b, 1.4 * h.r);
                    break;
                case "rhomb":
                    e = n.rhomb(g, a, b, 2.4 * h.r, 2.4 * h.r);
                    break;
                case "square":
                    e = n.rhomb(g, a, b, 2.4 * h.r, 2.4 * h.r, 45);
                    break;
                default:
                    e = g.circle(a, b, h.r, c)
                }
                return e.attr(h).attr(c),
                e
            }
            return ""
        },
        drawGridsX: function() {
            for (var a = this, b = a._points[0], c = function() {
                var a = b.length,
                c = [];
                if (a > 1) {
                    var d = (b[1].x - b[0].x) / 2;
                    c.push({
                        x: b[0].x - d
                    });
                    for (var e in b) c.push({
                        x: b[e].x - -d
                    })
                }
                return c
            } (), d = 0, e = c.length; e > d; d++) {
                var f = a.drawGridX(c[d]);
                a._gridsX.push(f)
            }
            return a._gridsX
        },
        drawGridX: function(a, b) {
            var c = this,
            d = c._innerContainer.tl.y,
            e = c._innerContainer.height,
            b = b || c._cfg.xGrids.css,
            f = c.htmlPaper,
            g = c._cfg.themeCls + "-gridsx";
            return f.lineY(a.x, d, e).addClass(g).css(c._cfg.xGrids.css)
        },
        drawGridY: function(a, b) {
            var c = this,
            d = c._innerContainer.width,
            b = b || c._cfg.yGrids.css,
            e = c.htmlPaper,
            f = c._cfg.themeCls + "-gridsy";
            return e.lineX(a.x, a.y, d).addClass(f).css(b)
        },
        drawGridsY: function() {
            for (var a = this, b = a._innerContainer.tl.x, c = a._pointsY, d = 0, e = c.length; e > d; d++) a._gridsY[d] = {
                0: a.drawGridY({
                    x: b,
                    y: c[d].y
                }),
                num: a.coordNum[d]
            }
        },
        drawAreas: function() {
            for (var a = this, b = a._innerContainer, c = b.tl.y, d = a._points[0], e = Math.round(d && d[0] && d[1] && d[1].x - d[0].x || b.width), f = Math.round(a._innerContainer.height), g = a.htmlPaper, h = a._cfg.themeCls + "-areas", i = a._cfg.areas.css, j = 0, k = d.length; k > j; j++) {
                var l = g.rect(d[j].x - e / 2, c, e, f).addClass(h).css(i);
                a._areas.push(l)
            }
        },
        drawAxisX: function() {
            var a = this,
            b = a._innerContainer,
            c = b.bl,
            d = b.width,
            e = a.htmlPaper,
            f = a._cfg.themeCls + "-axisx";
            return a._axisX = e.lineX(c.x, c.y, d).addClass(f).css(a._cfg.xAxis.css || {}),
            a._axisX
        },
        drawAxisY: function() {
            var a = this,
            b = a._innerContainer,
            c = b.tl,
            d = b.height,
            e = a.htmlPaper,
            f = a._cfg.themeCls + "-axisy";
            return a._axisY = e.lineY(c.x, c.y, d).addClass(f).css(a._cfg.yAxis.css || {}),
            a._axisY
        },
        drawLabelsX: function() {
            var a = this,
            b = a._cfg.xAxis.text;
            for (var c in b) a._labelX[c] = a.drawLabelX(c, b[c])
        },
        drawLabelsY: function() {
            var a = this;
            for (var b in a._pointsY) a._labelY[b] = {
                0: a.drawLabelY(b, a._pointsY[b].number),
                num: a._pointsY[b].number
            };
            return a._labelY
        },
        drawLabelX: function(b, d) {
            var e,
            f = this,
            g = f.htmlPaper,
            h = f._pointsX,
            i = h.length || 0,
            j = f._cfg.themeCls + "-xlabels",
            l = "{{data}}",
            m = "";
            return i > b ? (l = f._cfg.xLabels.template || l, m = a.isFunction(l) ? l(b, d) : c(l).render({
                data: d
            }), e = h[b], e[0] = g.text(e.x, e.y, "<span class=" + j + ">" + m + "</span>", "center").children().css(f._cfg.xLabels.css), e[0]) : k
        },
        drawLabelY: function(b, d) {
            var e = this,
            f = e.htmlPaper,
            g = e._cfg.themeCls + "-ylabels",
            h = "{{data}}",
            i = "";
            return h = e._cfg.yLabels.template || h,
            i = a.isFunction(h) ? h(b, d) : c(h).render({
                data: d
            }),
            i && f.text(e._pointsY[b].x, e._pointsY[b].y, "<span class=" + g + ">" + i + "</span>", "right", "middle").children().css(e._cfg.yLabels.css)
        },
        drawPointLine: function() {
            var a = this,
            b = a.htmlPaper,
            c = a._cfg.themeCls + "-pointline",
            d = a._innerContainer;
            return a._pointline = b.lineY(0, d.tl.y, d.height).addClass(c).css(a._cfg.pointLine.css).css({
                display: "none"
            }),
            a._pointline
        },
        renderTip: function() {
            var b = this,
            c = b._cfg,
            d = b._innerContainer,
            e = c.tip.boundryDetect ? {
                x: d.tl.x,
                y: d.tl.y,
                width: d.width,
                height: d.height
            }: {},
            f = a.mix(c.tip, {
                rootNode: b._$ctnNode,
                clsName: c.themeCls,
                boundry: e
            },
            k, k, !0);
            return b.tip = new l(f),
            b.tip
        },
        renderEvtLayout: function() {
            var a,
            b = this,
            c = b._innerContainer,
            d = (c.tl.y, b._points[0]),
            e = d && d[0] && d[1] && d[1].x - d[0].x || c.width,
            f = c.height,
            g = b._multiple,
            i = b._evtEls._areas = [],
            j = b._evtEls._rects = [];
            a = b._evtEls.paper ? b._evtEls.paper: b._evtEls.paper = new h(b._$ctnNode, {
                clsName: t,
                prependTo: !1,
                width: c.width,
                height: f,
                left: c.tl.x,
                top: c.tl.y,
                css: {
                    "z-index": 20,
                    background: "#fff",
                    filter: "alpha(opacity =1)",
                    "-moz-opacity": .01,
                    "-khtml-opacity": .01,
                    opacity: .01
                }
            });
            for (var k = 0, l = d.length; l > k; k++) i[k] = {
                x: d[k].x - e / 2,
                y: c.tl.y,
                width: e,
                height: f
            };
            if (g) for (var k in b._stocks) {
                var m = b._stocks[k],
                j = [],
                d = m.points;
                if (m.stocks) {
                    for (var n in d) j[n] = {
                        x: d[n].x - e / 2,
                        y: d[n].y - 5,
                        width: e,
                        height: 10
                    };
                    b._evtEls._rects[k] = j
                }
            }
        },
        clearEvtLayout: function() {
            var a = this;
            a._evtEls._areas && a._evtEls._areas.length && (a._evtEls._areas = []),
            a._evtEls._rects && a._evtEls._rects.length && (a._evtEls._rects = [])
        },
        renderLegend: function() {
            var b = this,
            c = b._cfg.legend,
            d = c.container && p(c.container)[0] ? p(c.container) : b._$ctnNode,
            e = b._stocks,
            f = b._innerContainer,
            g = b.color._colors,
            h = g.length,
            j = b._cfg,
            k = b._cfg.series,
            l = a.map(k, 
            function(a, b) {
                b %= h;
                var c = {},
                d = g[b];
                c.text = a.text,
                c.DEFAULT = d.DEFAULT,
                c.HOVER = d.HOVER;
                var f = e[b].type;
                return c.icontype = "line" + f,
                c.iconsize = [1, 1],
                c
            }),
            m = a.merge({
                interval: 20,
                iconright: 5,
                showicon: !0
            },
            j.legend.globalConfig);
            return b.legend = new i({
                container: d,
                papper: b.paper,
                bbox: {
                    width: f.width,
                    height: f.height,
                    left: f.x,
                    top: f.y
                },
                align: j.legend.align || "bc",
                offset: j.legend.offset || [0, 30],
                globalConfig: m,
                config: l
            }),
            b.legend.on("click", 
            function(a) {
                var b = a.index,
                c = (a.text, a.icon, a.el);
                1 != c.hide ? (this.hideLine(b), c.hide = 1, c.disable()) : (this.showLine(b), c.hide = 0, c.enable())
            },
            this),
            b.legend
        },
        render: function(b) {
            var c = this,
            e = c._cfg,
            f = e.themeCls;
            c.beforeRender(),
            b && c._$ctnNode.html(""),
            c.paper = d(c._$ctnNode[0], e.width, e.height),
            c.htmlPaper = new h(c._$ctnNode, {
                clsName: f
            }),
            c.drawTitle(),
            c.drawSubTitle(),
            e.tip.isShow && c.renderTip(),
            e.areas.isShow && c.drawAreas(),
            e.xGrids.isShow && c.drawGridsX(),
            e.yGrids.isShow && c.drawGridsY(),
            c._cfg.comparable && c.drawPointLine(),
            e.xAxis.isShow && c.drawAxisX(),
            e.yAxis.isShow && c.drawAxisY(),
            e.xLabels.isShow && c.drawLabelsX(),
            e.yLabels.isShow && c.drawLabelsY(),
            e.anim ? c.drawLines(function() {
                c.renderEvtLayout(),
                c.bindEvt(),
                e.legend.isShow && c.renderLegend(),
                a.log("finish"),
                c.afterRender()
            }) : (c.drawLines(), c.renderEvtLayout(), c.bindEvt(), e.legend.isShow && c.renderLegend(), c.afterRender()),
            a.log(c)
        },
        bindEvt: function() {
            var a = this,
            b = (a._cfg, a._evtEls);
            a.curStockIndex = function() {
                for (var b in a._stocks) if (a._stocks[b].stocks) return b
            } (),
            a.curLineIndex = a.getFirstVisibleLineIndex(),
            q.detach(b.paper.$paper, "mouseleave"),
            q.on(b.paper.$paper, "mouseleave", 
            function() {
                a._lines[0].line.attr(a._lines[0].attr),
                a.tip && a.tip.hide(),
                a._pointline && a._pointline.hide();
                for (var b in a._stocks) for (var c in a._stocks[b].stocks) a._stocks[b].stocks[c] && a._stocks[b].stocks[c].attr && a._stocks[b].stocks[c].attr(a._stocks[b].attr);
                a.curStockIndex = k,
                a.paperLeave()
            }),
            q.detach(b.paper.$paper, "mousemove"),
            q.on(b.paper.$paper, "mousemove", 
            function(b) {
                b = a.getOffset(b),
                a.delegateMouseMove(b)
            })
        },
        delegateMouseMove: function(a) {
            var b = this,
            c = b.getInnerContainer(),
            d = b.curStockIndex;
            for (var e in b._evtEls._areas) {
                var f = b._evtEls._areas[e];
                if (b.isInSide(a.offsetX + c.x, a.offsetY + c.y, f.x, f.y, f.width, f.height) && (d === k || d != e)) return b.curStockIndex = e,
                b.tipHandler(b.curLineIndex, b.curStockIndex),
                k
            }
            for (var e in b._evtEls._rects) for (var g in b._evtEls._rects[e]) {
                var h = b._evtEls._rects[e][g];
                if (b.isInSide(a.offsetX + c.x, a.offsetY + c.y, h.x, h.y, h.width, h.height)) {
                    if (b.curLineIndex === e) return;
                    return b.lineChangeTo(e),
                    b.tipHandler(b.curLineIndex, b.curStockIndex),
                    k
                }
            }
        },
        tipHandler: function(b, c) {
            var d = this;
            if (b !== k && c !== k) {
                var e,
                g = d.tip,
                h = d._cfg,
                i = h.series,
                j = h.tip.template,
                l = (g.getInstance(), d._cfg.themeCls + "-areas-hover"),
                m = d._points[b][c],
                n = d._lines[b].color.DEFAULT;
                if (j && h.tip.isShow && d.curStockIndex !== k) {
                    if (currentPoints = d._points[b], currentStocks = d._stocks[b], currentPoints && !d.isEmptyPoint(currentPoints[c]) && d._lines[b].isShow) {
                        d._pointline && d._pointline.css({
                            "margin-left": d._pointsX[c].x
                        }).show();
                        for (var o in d._stocks) for (var p in d._stocks[o].stocks) d._stocks[o].stocks[p] && d._stocks[o].stocks[p].attr && d._stocks[o].stocks[p].attr(d._stocks[o].attr);
                        if (d._cfg.comparable) for (var o in d._stocks) d._stocks[o].stocks && d._stocks[o].stocks[c] && d._stocks[o].stocks[c].attr && d._stocks[o].stocks[c].attr(d._stocks[o].hoverAttr);
                        else currentStocks && currentStocks.stocks && currentStocks.stocks[c] && currentStocks.stocks[c].attr && currentStocks.stocks[c].attr(currentStocks.hoverAttr);
                        d._areas[c] && d._areas[c].addClass(l).siblings().removeClass(l)
                    } else {
                        var q = d.getFirstNotEmptyPointsLineIndex(c);
                        q && d.lineChangeTo(q)
                    }
                    if (d._points[b][c].dataInfo && d._lines[b].isShow && d.stockChange(b, c), d._cfg.comparable) {
                        var r = {
                            datas: {}
                        },
                        s = [];
                        for (var o in d._points) if (d._stocks[o].stocks && d._points[o][c].dataInfo) {
                            d._points[o][c].dataInfo.color = d._stocks[o].color.DEFAULT;
                            var t = a.merge(d._points[o][c].dataInfo, i[o]);
                            delete t.data,
                            r.datas[o] = t
                        }
                        for (var o in r.datas) s.push(r.datas[o]);
                        r.datas = f.prototype.arraySort(s, !0, "y"),
                        e = r
                    } else {
                        var e = a.merge(d._points[b][c].dataInfo, i[b]);
                        delete e.data
                    }
                    d.areaChange(c),
                    d.isEmptyPoint(currentPoints[c]) || (a.mix(e, {
                        lineindex: b,
                        pointindex: c
                    }), g.fire("setcontent", {
                        data: e
                    }), g.fire("move", {
                        x: m.x,
                        y: m.y,
                        style: d.processAttr(h.tip.css, n)
                    }))
                }
            }
        },
        getFirstNotEmptyPointsLineIndex: function(a) {
            var b = this;
            for (var c in b._points) if (!b.isEmptyPoint(b._points[c][a]) && b._lines[c].isShow) return c + "";
            return ""
        },
        getFirstVisibleLineIndex: function() {
            var a = this;
            for (var b in a._lines) if (a._lines[b].isShow) return b
        },
        isEmptyPoint: function(a) {
            return a && a.dataInfo ? !1: !0
        },
        hideLine: function(b) {
            var c,
            d = this,
            e = 500;
            if (d._lines[b].isShow) {
                d._lines[b].isShow = !1,
                b == d.curLineIndex && (d.curLineIndex = d.getFirstVisibleLineIndex()),
                f.prototype.removeData.call(d, b),
                d.animateGridsAndLabels(),
                d._lines[b].line.remove();
                for (var g in d._stocks) {
                    if (b == g) {
                        for (var h in d._stocks[b].stocks) d._stocks[b].stocks[h] && d._stocks[b].stocks[h].remove();
                        delete d._stocks[b].stocks
                    }
                    d._stocks[g].points = d._points[g]
                }
                for (var g in d._lines) if (g != b) {
                    var i = d.getLinePath(d._points[g]),
                    j = d._lines[g].path;
                    if (j != i && "" != i) {
                        d._isAnimating = !0,
                        d._lines[g].line && d._lines[g].line.stop() && d._lines[g].line.animate({
                            path: i
                        },
                        e, 
                        function() {
                            d._isAnimating = !1
                        }),
                        d._lines[g].path = i;
                        for (var h in d._stocks[g].stocks) d._stocks[g].stocks[h] && (c = d._stocks[g].stocks[h], c.stop().animate({
                            transform: "T" + (d._stocks[g].points[h].x - d._stocks[g].stocks[h].attr("cx")) + "," + (d._stocks[g].points[h].y - d._stocks[g].stocks[h].attr("cy"))
                        },
                        e))
                    }
                }
                d.clearEvtLayout(),
                d.renderEvtLayout(),
                d.bindEvt(),
                a.log(d)
            }
        },
        showLine: function(a) {
            var b,
            c = this,
            d = 500;
            if (!c._lines[a].isShow) {
                c._lines[a].isShow = !0,
                c._cfg.series[a].isShow = !0,
                f.prototype.recoveryData.call(c, a),
                c.animateGridsAndLabels(),
                c._lines[a].line = c.drawLine(a);
                for (var e in c._stocks) c._stocks[e].points = c._points[e];
                for (var e in c._lines) {
                    var g = c.getLinePath(c._points[e]),
                    h = c._lines[e].path;
                    if (h != g && c._lines[e].line) {
                        c._isAnimating = !0,
                        c._lines[e].line && c._lines[e].line.stop().animate({
                            path: g
                        },
                        d, 
                        function() {
                            c._isAnimating = !1
                        }),
                        c._lines[e].path = g;
                        for (var i in c._stocks[e].stocks) c._stocks[e].stocks[i] && (b = c._stocks[e].stocks[i], b.stop(), b.animate({
                            transform: "T" + (c._stocks[e].points[i].x - c._stocks[e].stocks[i].attr("cx")) + "," + (c._stocks[e].points[i].y - c._stocks[e].stocks[i].attr("cy"))
                        },
                        d))
                    }
                }
                c.clearEvtLayout(),
                c.renderEvtLayout(),
                c.bindEvt()
            }
        },
        animateGridsAndLabels: function() {
            if (this._cfg.yLabels.isShow) {
                var a,
                b,
                c,
                d = this,
                e = (Math.max(d._pointsY.length, d._gridsY.length), d.coordNum);
                if (e) {
                    a = Math.max.apply(null, e),
                    b = Math.min.apply(null, e),
                    c = a / 2 + b / 2;
                    for (var f in d._labelY) d._labelY[f] && d._labelY[f][0] && d._labelY[f][0].remove(),
                    d._gridsY[f] && d._gridsY[f][0] && d._gridsY[f][0].remove();
                    d.drawGridsY(),
                    d.drawLabelsY()
                }
            }
        },
        lineChangeTo: function(a) {
            var b = this,
            c = (b._cfg, b.__cfg.line[a].hoverAttr);
            if (!b._isAnimating && b._lines[a].isShow) {
                for (var d in b._stocks) b._stocks[d].points = b._points[d];
                for (var d in b._lines) d != a && b._lines[d].line && b._lines[d].line.attr(b.__cfg.line[d].attr);
                b._lines[a].line.remove();
                for (var d in b._stocks[a].stocks) b._stocks[a].stocks[d] && b._stocks[a].stocks[d].remove && b._stocks[a].stocks[d].remove();
                b._lines[a].line = b.drawLine(a).attr(c);
                for (var d in b._stocks) for (var e in b._stocks[d].stocks) if (b._stocks[d].stocks[e]) {
                    var f = b._stocks[d].stocks[e];
                    f.attr && f.attr(b._stocks[d].attr)
                }
                b.curLineIndex = a
            }
        },
        areaChange: function(a) {
            var b = this;
            b.fire("areaChange", {
                index: a
            })
        },
        paperLeave: function() {
            var a = this;
            a.fire("paperLeave", a)
        },
        stockChange: function(b, c) {
            var d = this,
            f = d._stocks[b],
            g = f.stocks && f.stocks[c];
            e = a.mix({
                target: g,
                currentTarget: g,
                lineIndex: Math.round(b),
                stockIndex: Math.round(c)
            },
            f.points[c]),
            d.fire("stockChange", e)
        },
        beforeRender: function() {
            var a = this;
            a.fire("beforeRender", a)
        },
        afterRender: function() {
            var a = this;
            a.fire("afterRender", a)
        },
        getPaper: function() {
            return this.htmlPaper
        },
        getRaphaelPaper: function() {
            return this.paper
        },
        clear: function() {
            this._$ctnNode.html("")
        }
    }),
    x
},
{
    requires: ["base", "gallery/template/1.0/index", "gallery/kcharts/1.2/raphael/index", "gallery/kcharts/1.2/basechart/index", "gallery/kcharts/1.2/tools/color/index", "gallery/kcharts/1.2/tools/htmlpaper/index", "gallery/kcharts/1.2/legend/index", "./theme", "gallery/kcharts/1.2/tools/touch/index", "gallery/kcharts/1.2/tip/index", "gallery/kcharts/1.2/animate/index", "gallery/kcharts/1.2/tools/graphtool/index"]
}),
KISSY.add("gallery/template/1.0/index", 
function(a) {
    function b(b) {
        if (!c[b]) {
            var d,
            e,
            m = a.guid(f),
            n = [j, m, k, e = o(b), l];
            try {
                d = new Function(m, n.join(""))
            } catch(p) {
                n[3] = g + h + i + "," + p.message + g + h,
                d = new Function(m, n.join(""))
            }
            c[b] = {
                name: m,
                o: e,
                parser: n.join(""),
                render: d
            }
        }
        return c[b]
    }
    var c = {},
    d = {
        "#": "start",
        "@": "start",
        "/": "end"
    },
    e = RegExp("KS_TEMPL_STAT_PARAM", "g"),
    f = "KS_DATA_",
    g = '");',
    h = 'KS_TEMPL.push("',
    i = "KISSY.Template: Syntax Error. ",
    j = "var KS_TEMPL=[],KS_TEMPL_STAT_PARAM=false;with(",
    k = '||{}){try{KS_TEMPL.push("',
    l = '");}catch(e){KS_TEMPL=["KISSY.Template: Render Error. " + e.message]}};return KS_TEMPL.join("");',
    m = function(a) {
        return a.replace(/"/g, '\\"')
    },
    n = a.trim,
    o = function(b) {
        var c,
        f;
        return m(n(b).replace(/[\r\t\n]/g, " ").replace(/\\/g, "\\\\")).replace(/\{\{([#/@]?)(?!\}\})([^}]*)\}\}/g,
		function(b,i,j){return c="",j=n(j).replace(/\\"/g,'"'),i?(f=j.indexOf(" "),j=-1===f?[j,""]:[j.substring(0,f),j.substring(f)],b=j[0],j=n(j[1]),(b=p[b])&&d[i]&&(i=b[d[i]],c=""+(a.isFunction(i)?i.apply(this,j.split(/\s+/)):i.replace(e,j)))):c="KS_TEMPL.push(typeof ("+j+') ==="undefined"?"":'+j+");",g+c+h})},p={"if":{start:'if(typeof (KS_TEMPL_STAT_PARAM) !=="undefined" && KS_TEMPL_STAT_PARAM){',end:"}"},"else":{start:"}else{"},elseif:{start:"}else if(KS_TEMPL_STAT_PARAM){"},each:{start:function(a,b,c,d){var e="_ks_value",f="_ks_index";return"as"===b&&c&&(e=c||e,f=d||f),"KISSY.each("+a+", function("+e+", "+f+"){"},end:"});"},"!":{start:"/*KS_TEMPL_STAT_PARAM*/"}};return a.mix(b,{log:function(d){d in c?a.log(c[d].parser,"info"):(b(d),this.log(d))},addStatement:function(b,c){"string"==typeof b?p[b]=c:a.mix(p,b)}}),a.Template=b}),KISSY.add("gallery/kcharts/1.2/raphael/index",function(){return function(a){var b,c,d="0.3.4",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),0>h[p].zIndex&&(m[h[p].zIndex]=h[p]));for(l.sort(i);0>l[j];)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,!d[c[e]]&&(d[c[e]]={n:{}}),d=d[c[e]];for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){c=1},k.nt=function(a){return a?RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.off=k.unbind=function(a,b){var c,d,h,i,k,l,m,n=a.split(f),o=[j];for(i=0,k=n.length;k>i;i++)for(l=0;o.length>l;l+=h.length-2){if(h=[l,1],c=o[l].n,n[i]!=g)c[n[i]]&&h.push(c[n[i]]);else for(d in c)c[e](d)&&h.push(c[d]);o.splice.apply(o,h)}for(i=0,k=o.length;k>i;i++)for(c=o[i];c.n;){if(b){if(c.f){for(l=0,m=c.f.length;m>l;l++)if(c.f[l]==b){c.f.splice(l,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var p=c.n[d].f;for(l=0,m=p.length;m>l;l++)if(p[l]==b){p.splice(l,1);break}!p.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);return k.unbind(a,c),d};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k
		}):a.eve=k}(window),function(){function a(b){if(a.is(b,"function"))return s?b():eve.on("raphael.DOMload",b);if(a.is(b,T))return a._engine.create[B](a,b.splice(0,3+a.is(b[0],R))).add(b);var c=Array.prototype.slice.call(arguments,0);if(a.is(c[c.length-1],"function")){var d=c.pop();return s?d.call(a._engine.create[B](a,c)):eve.on("raphael.DOMload",function(){d.call(a._engine.create[B](a,c))})}return a._engine.create[B](a,arguments)}function b(a){if(Object(a)!==a)return a;var c=new a.constructor;for(var d in a)a[x](d)&&(c[d]=b(a[d]));return c}function c(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function d(a,b,d){function e(){var f=Array.prototype.slice.call(arguments,0),g=f.join("?"),h=e.cache=e.cache||{},i=e.count=e.count||[];return h[x](g)?(c(i,g),d?d(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[B](b,f),d?d(h[g]):h[g])}return e}function e(){return this.hex}function f(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function g(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function h(a,b,c,d,e,f,h,i,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=g(q,a,c,e,h),s=g(q,b,d,f,i),t=r*r+s*s;o+=n[p]*L.sqrt(t)}return k*o}function i(a,b,c,d,e,f,g,i,j){if(!(0>j||j>h(a,b,c,d,e,f,g,i))){var k,l=1,m=l/2,n=l-m,o=.01;for(k=h(a,b,c,d,e,f,g,i,n);O(k-j)>o;)m/=2,n+=(j>k?1:-1)*m,k=h(a,b,c,d,e,f,g,i,n);return n}}function j(a,b,c,d,e,f,g,h){if(!(M(a,c)<N(e,g)||N(a,c)>M(e,g)||M(b,d)<N(f,h)||N(b,d)>M(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(+N(a,c).toFixed(2)>n||n>+M(a,c).toFixed(2)||+N(e,g).toFixed(2)>n||n>+M(e,g).toFixed(2)||+N(b,d).toFixed(2)>o||o>+M(b,d).toFixed(2)||+N(f,h).toFixed(2)>o||o>+M(f,h).toFixed(2)))return{x:l,y:m}}}}function k(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];for(var g=h.apply(0,b),i=h.apply(0,c),k=~~(g/5),l=~~(i/5),m=[],n=[],o={},p=d?0:[],q=0;k+1>q;q++){var r=a.findDotsAtSegment.apply(a,b.concat(q/k));m.push({x:r.x,y:r.y,t:q/k})}for(q=0;l+1>q;q++)r=a.findDotsAtSegment.apply(a,c.concat(q/l)),n.push({x:r.x,y:r.y,t:q/l});for(q=0;k>q;q++)for(var s=0;l>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=.001>O(u.x-t.x)?"y":"x",y=.001>O(w.x-v.x)?"y":"x",z=j(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+O((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+O((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1>=A&&B>=0&&1>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:A,t2:B}))}}return p}function l(b,c,d){b=a._path2curve(b),c=a._path2curve(c);for(var e,f,g,h,i,j,l,m,n,o,p=d?0:[],q=0,r=b.length;r>q;q++){var s=b[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=c.length;u>t;t++){var v=c[t];if("M"==v[0])g=l=v[1],h=m=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,l,m,l,m],g=l,h=m);var w=k(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function m(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function n(){return this.x+F+this.y+F+this.width+" × "+this.height}function o(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+
m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,b>O(f))return e;if(h=(3*l*e+2*k)*e+j,1e-6>O(h))break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),b>O(f-a))return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function p(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[x](e)&&(d[Z(e)]=a[e],c.push(Z(e)));c.sort(jb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function q(b,c,d,e,f,g){d=Z(d);var h,i,j,k,l,n,p=b.ms,q={},r={},s={};if(e)for(v=0,w=fc.length;w>v;v++){var t=fc[v];if(t.el.id==c.id&&t.anim==b){t.percent!=d?(fc.splice(v,1),j=1):i=t,c.attr(t.totalOrigin);break}}else e=+r;for(var v=0,w=b.percents.length;w>v;v++){if(b.percents[v]==d||b.percents[v]>e*b.top){d=b.percents[v],l=b.percents[v-1]||0,p=p/b.top*(d-l),k=b.percents[v+1],h=b.anim[d];break}e&&c.attr(b.anim[b.percents[v]])}if(h){if(i)i.initstatus=e,i.start=new Date-i.ms*e;else{for(var y in h)if(h[x](y)&&(bb[x](y)||c.paper.customAttributes[x](y)))switch(q[y]=c.attr(y),null==q[y]&&(q[y]=ab[y]),r[y]=h[y],bb[y]){case R:s[y]=(r[y]-q[y])/p;break;case"colour":q[y]=a.getRGB(q[y]);var z=a.getRGB(r[y]);s[y]={r:(z.r-q[y].r)/p,g:(z.g-q[y].g)/p,b:(z.b-q[y].b)/p};break;case"path":var A=Ib(q[y],r[y]),B=A[1];for(q[y]=A[0],s[y]=[],v=0,w=q[y].length;w>v;v++){s[y][v]=[0];for(var D=1,E=q[y][v].length;E>D;D++)s[y][v][D]=(B[v][D]-q[y][v][D])/p}break;case"transform":var F=c._,I=Nb(F[y],r[y]);if(I)for(q[y]=I.from,r[y]=I.to,s[y]=[],s[y].real=!0,v=0,w=q[y].length;w>v;v++)for(s[y][v]=[q[y][v][0]],D=1,E=q[y][v].length;E>D;D++)s[y][v][D]=(r[y][v][D]-q[y][v][D])/p;else{var J=c.matrix||new m,K={_:{transform:F.transform},getBBox:function(){return c.getBBox(1)}};q[y]=[J.a,J.b,J.c,J.d,J.e,J.f],Lb(K,r[y]),r[y]=K._.transform,s[y]=[(K.matrix.a-J.a)/p,(K.matrix.b-J.b)/p,(K.matrix.c-J.c)/p,(K.matrix.d-J.d)/p,(K.matrix.e-J.e)/p,(K.matrix.f-J.f)/p]}break;case"csv":var L=G(h[y])[H](u),M=G(q[y])[H](u);if("clip-rect"==y)for(q[y]=M,s[y]=[],v=M.length;v--;)s[y][v]=(L[v]-q[y][v])/p;r[y]=L;break;default:for(L=[][C](h[y]),M=[][C](q[y]),s[y]=[],v=c.paper.customAttributes[y].length;v--;)s[y][v]=((L[v]||0)-(M[v]||0))/p}var N=h.easing,O=a.easing_formulas[N];if(!O)if(O=G(N).match(X),O&&5==O.length){var P=O;O=function(a){return o(a,+P[1],+P[2],+P[3],+P[4],p)}}else O=lb;if(n=h.start||b.start||+new Date,t={anim:b,percent:d,timestamp:n,start:n+(b.del||0),status:0,initstatus:e||0,stop:!1,ms:p,easing:O,from:q,diff:s,to:r,el:c,callback:h.callback,prev:l,next:k,repeat:g||b.times,origin:c.attr(),totalOrigin:f},fc.push(t),e&&!i&&!j&&(t.stop=!0,t.start=new Date-p*e,1==fc.length))return hc();j&&(t.start=new Date-t.ms*e),1==fc.length&&gc(hc)}eve("raphael.anim.start."+c.id,c,b)}}function r(a){for(var b=0;fc.length>b;b++)fc[b].el.paper==a&&fc.splice(b--,1)}a.version="2.1.0",a.eve=eve;var s,t,u=/[, ]+/,v={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},w=/\{(\d+)\}/g,x="hasOwnProperty",y={doc:document,win:window},z={was:Object.prototype[x].call(y.win,"Raphael"),is:y.win.Raphael},A=function(){this.ca=this.customAttributes={}},B="apply",C="concat",D="createTouch"in y.doc,E="",F=" ",G=String,H="split",I="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[H](F),J={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},K=G.prototype.toLowerCase,L=Math,M=L.max,N=L.min,O=L.abs,P=L.pow,Q=L.PI,R="number",S="string",T="array",U=Object.prototype.toString,V=(a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), W = {        NaN: 1,        Infinity: 1,        "-Infinity": 1
    },
    X = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, Y = L.round, Z = parseFloat, $ = parseInt, _ = G.prototype.toUpperCase, ab = a._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    },
    bb = a._availableAnimAttrs = {
        blur: R,
        "clip-rect": "csv",
        cx: R,
        cy: R,
        fill: "colour",
        "fill-opacity": R,
        "font-size": R,
        height: R,
        opacity: R,
        path: "path",
        r: R,
        rx: R,
        ry: R,
        stroke: "colour",
        "stroke-opacity": R,
        "stroke-width": R,
        transform: "transform",
        width: R,
        x: R,
        y: R
    },
    cb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, db = {
        hs: 1,
        rg: 1
    },
    eb = /,?([achlmqrstvxz]),?/gi, fb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, gb = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, hb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, ib = (a._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), jb = function(a, b) {
        return Z(a) - Z(b)
    },
    kb = function() {},
    lb = function(a) {
        return a
    },
    mb = a._rectPath = function(a, b, c, d, e) {
        return e ? [["M", a + e, b], ["l", c - 2 * e, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - 2 * e], ["a", e, e, 0, 0, 1, -e, e], ["l", 2 * e - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, 2 * e - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]] : [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]]
    },
    nb = function(a, b, c, d) {
        return null == d && (d = c),
        [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]]
    },
    ob = a._getPath = {
        path: function(a) {
            return a.attr("path")
        },
        circle: function(a) {
            var b = a.attrs;
            return nb(b.cx, b.cy, b.r)
        },
        ellipse: function(a) {
            var b = a.attrs;
            return nb(b.cx, b.cy, b.rx, b.ry)
        },
        rect: function(a) {
            var b = a.attrs;
            return mb(b.x, b.y, b.width, b.height, b.r)
        },
        image: function(a) {
            var b = a.attrs;
            return mb(b.x, b.y, b.width, b.height)
        },
        text: function(a) {
            var b = a._getBBox();
            return mb(b.x, b.y, b.width, b.height)
        }
    },
    pb = a.mapPath = function(a, b) {
        if (!b) return a;
        var c,
        d,
        e,
        f,
        g,
        h,
        i;
        for (a = Ib(a), e = 0, g = a.length; g > e; e++) for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]),
        d = b.y(i[f], i[f + 1]),
        i[f] = c,
        i[f + 1] = d;
        return a
    };
    if (a._g = y, a.type = y.win.SVGAngle || y.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG": "VML", "VML" == a.type) {
        var qb,
        rb = y.doc.createElement("div");
        if (rb.innerHTML = '<v:shape adj="1"/>', qb = rb.firstChild, qb.style.behavior = "url(#default#VML)", !qb || "object" != typeof qb.adj) return a.type = E;
        rb = null
    }
    a.svg = !(a.vml = "VML" == a.type), a._Paper = A, a.fn = t = A.prototype = a.prototype, a._id = 0, a._oid = 0, a.is = function(a, b) {
        return b = K.call(b),
        "finite" == b ? !W[x]( + a) : "array" == b ? a instanceof Array: "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || U.call(a).slice(8, -1).toLowerCase() == b
    },
    a.angle = function(b, c, d, e, f, g) {
        if (null == f) {
            var h = b - d,
            i = c - e;
            return h || i ? (180 + 180 * L.atan2( - i, -h) / Q + 360) % 360: 0
        }
        return a.angle(b, c, f, g) - a.angle(d, e, f, g)
    },
    a.rad = function(a) {
        return a % 360 * Q / 180
    },
    a.deg = function(a) {
        return 180 * a / Q % 360
    },
    a.snapTo = function(b, c, d) {
        if (d = a.is(d, "finite") ? d: 10, a.is(b, T)) {
            for (var e = b.length; e--;) if (d >= O(b[e] - c)) return b[e]
        } else {
            b = +b;
            var f = c % b;
            if (d > f) return c - f;
            if (f > b - d) return c - f + b
        }
        return c
    },
    a.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    } (/[xy]/g, 
    function(a) {
        var b = 0 | 16 * L.random(),
        c = "x" == a ? b: 8 | 3 & b;
        return c.toString(16)
    }), a.setWindow = function(b) {
        eve("raphael.setWindow", a, y.win, b),
        y.win = b,
        y.doc = y.win.document,
        a._engine.initWin && a._engine.initWin(y.win)
    };
    var sb = function(b) {
        if (a.vml) {
            var c,
            e = /^\s+|\s+$/g;
            try {
                var f = new ActiveXObject("htmlfile");
                f.write("<body>"),
                f.close(),
                c = f.body
            } catch(g) {
                c = createPopup().document.body
            }
            var h = c.createTextRange();
            sb = d(function(a) {
                try {
                    c.style.color = G(a).replace(e, E);
                    var b = h.queryCommandValue("ForeColor");
                    return b = (255 & b) << 16 | 65280 & b | (16711680 & b) >>> 16,
                    "#" + ("000000" + b.toString(16)).slice( - 6)
                } catch(d) {
                    return "none"
                }
            })
        } else {
            var i = y.doc.createElement("i");
            i.title = "Rapha?l Colour Picker",
            i.style.display = "none",
            y.doc.body.appendChild(i),
            sb = d(function(a) {
                return i.style.color = a,
                y.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color")
            })
        }
        return sb(b)
    },
    tb = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    },
    ub = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    },
    vb = function() {
        return this.hex
    },
    wb = function(b, c, d) {
        if (null == c && a.is(b, "object") && "r" in b && "g" in b && "b" in b && (d = b.b, c = b.g, b = b.r), null == c && a.is(b, S)) {
            var e = a.getRGB(b);
            b = e.r,
            c = e.g,
            d = e.b
        }
        return (b > 1 || c > 1 || d > 1) && (b /= 255, c /= 255, d /= 255),
        [b, c, d]
    },
    xb = function(b, c, d, e) {
        b *= 255,
        c *= 255,
        d *= 255;
        var f = {
            r: b,
            g: c,
            b: d,
            hex: a.rgb(b, c, d),
            toString: vb
        };
        return a.is(e, "finite") && (f.opacity = e),
        f
    };a.color = function(b) {
        var c;
        return a.is(b, "object") && "h" in b && "s" in b && "b" in b ? (c = a.hsb2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : a.is(b, "object") && "h" in b && "s" in b && "l" in b ? (c = a.hsl2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : (a.is(b, "string") && (b = a.getRGB(b)), a.is(b, "object") && "r" in b && "g" in b && "b" in b ? (c = a.rgb2hsl(b), b.h = c.h, b.s = c.s, b.l = c.l, c = a.rgb2hsb(b), b.v = c.b) : (b = {
            hex: "none"
        },
        b.r = b.g = b.b = b.h = b.s = b.v = b.l = -1)),
        b.toString = vb,
        b
    },
    a.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o),
        a *= 360;
        var e,
        f,
        g,
        h,
        i;
        return a = a % 360 / 60,
        i = c * b,
        h = i * (1 - O(a % 2 - 1)),
        e = f = g = c - i,
        a = ~~a,
        e += [i, h, 0, 0, h, i][a],
        f += [h, i, i, h, 0, 0][a],
        g += [0, 0, h, i, i, h][a],
        xb(e, f, g, d)
    },
    a.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h),
        (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100),
        a *= 360;
        var e,
        f,
        g,
        h,
        i;
        return a = a % 360 / 60,
        i = 2 * b * (.5 > c ? c: 1 - c),
        h = i * (1 - O(a % 2 - 1)),
        e = f = g = c - i / 2,
        a = ~~a,
        e += [i, h, 0, 0, h, i][a],
        f += [h, i, i, h, 0, 0][a],
        g += [0, 0, h, i, i, h][a],
        xb(e, f, g, d)
    },
    a.rgb2hsb = function(a, b, c) {
        c = wb(a, b, c),
        a = c[0],
        b = c[1],
        c = c[2];
        var d,
        e,
        f,
        g;
        return f = M(a, b, c),
        g = f - N(a, b, c),
        d = 0 == g ? null: f == a ? (b - c) / g: f == b ? (c - a) / g + 2: (a - b) / g + 4,
        d = 60 * ((d + 360) % 6) / 360,
        e = 0 == g ? 0: g / f,
        {
            h: d,
            s: e,
            b: f,
            toString: tb
        }
    },
    a.rgb2hsl = function(a, b, c) {
        c = wb(a, b, c),
        a = c[0],
        b = c[1],
        c = c[2];
        var d,
        e,
        f,
        g,
        h,
        i;
        return g = M(a, b, c),
        h = N(a, b, c),
        i = g - h,
        d = 0 == i ? null: g == a ? (b - c) / i: g == b ? (c - a) / i + 2: (a - b) / i + 4,
        d = 60 * ((d + 360) % 6) / 360,
        f = (g + h) / 2,
        e = 0 == i ? 0: .5 > f ? i / (2 * f) : i / (2 - 2 * f),
        {
            h: d,
            s: e,
            l: f,
            toString: ub
        }
    },
    a._path2string = function() {
        return this.join(",").replace(eb, "$1")
    },
    a._preload = function(a, b) {
        var c = y.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em",
        c.onload = function() {
            b.call(this),
            this.onload = null,
            y.doc.body.removeChild(this)
        },
        c.onerror = function() {
            y.doc.body.removeChild(this)
        },
        y.doc.body.appendChild(c),
        c.src = a
    },
    a.getRGB = d(function(b) {
        if (!b || (b = G(b)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: e
        };
        if ("none" == b) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: e
        }; ! (db[x](b.toLowerCase().substring(0, 2)) || "#" == b.charAt()) && (b = sb(b));
        var c,
        d,
        f,
        g,
        h,
        i,
        j = b.match(V);
        return j ? (j[2] && (f = $(j[2].substring(5), 16), d = $(j[2].substring(3, 5), 16), c = $(j[2].substring(1, 3), 16)), j[3] && (f = $((h = j[3].charAt(3)) + h, 16), d = $((h = j[3].charAt(2)) + h, 16), c = $((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][H](cb), c = Z(i[0]), "%" == i[0].slice( - 1) && (c *= 2.55), d = Z(i[1]), "%" == i[1].slice( - 1) && (d *= 2.55), f = Z(i[2]), "%" == i[2].slice( - 1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = Z(i[3])), i[3] && "%" == i[3].slice( - 1) && (g /= 100)), j[5] ? (i = j[5][H](cb), c = Z(i[0]), "%" == i[0].slice( - 1) && (c *= 2.55), d = Z(i[1]), "%" == i[1].slice( - 1) && (d *= 2.55), f = Z(i[2]), "%" == i[2].slice( - 1) && (f *= 2.55), ("deg" == i[0].slice( - 3) || "°" == i[0].slice( - 1)) && (c /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = Z(i[3])), i[3] && "%" == i[3].slice( - 1) && (g /= 100), a.hsb2rgb(c, d, f, g)) : j[6] ? (i = j[6][H](cb), c = Z(i[0]), "%" == i[0].slice( - 1) && (c *= 2.55), d = Z(i[1]), "%" == i[1].slice( - 1) && (d *= 2.55), f = Z(i[2]), "%" == i[2].slice( - 1) && (f *= 2.55), ("deg" == i[0].slice( - 3) || "°" == i[0].slice( - 1)) && (c /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = Z(i[3])), i[3] && "%" == i[3].slice( - 1) && (g /= 100), a.hsl2rgb(c, d, f, g)) : (j = {
            r: c,
            g: d,
            b: f,
            toString: e
        },
        j.hex = "#" + (16777216 | f | d << 8 | c << 16).toString(16).slice(1), a.is(g, "finite") && (j.opacity = g), j)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: e
        }
    },
    a), a.hsb = d(function(b, c, d) {
        return a.hsb2rgb(b, c, d).hex
    }), a.hsl = d(function(b, c, d) {
        return a.hsl2rgb(b, c, d).hex
    }), a.rgb = d(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), a.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: a || .75
        },
        c = this.hsb2rgb(b.h, b.s, b.b);
        return b.h += .075,
        b.h > 1 && (b.h = 0, b.s -= .2, 0 >= b.s && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        })),
        c.hex
    },
    a.getColor.reset = function() {
        delete this.start
    },
    a.parsePathString = function(b) {
        if (!b) return null;
        var c = yb(b);
        if (c.arr) return Ab(c.arr);
        var d = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        },
        e = [];
        return a.is(b, T) && a.is(b[0], T) && (e = Ab(b)),
        e.length || G(b).replace(fb, 
        function(a, b, c) {
            var f = [],
            g = b.toLowerCase();
            if (c.replace(hb, 
            function(a, b) {
                b && f.push( + b)
            }), "m" == g && f.length > 2 && (e.push([b][C](f.splice(0, 2))), g = "l", b = "m" == b ? "l": "L"), "r" == g) e.push([b][C](f));
            else for (; f.length >= d[g] && (e.push([b][C](f.splice(0, d[g]))), d[g]););
        }),
        e.toString = a._path2string,
        c.arr = Ab(e),
        e
    },
    a.parseTransformString = d(function(b) {
        if (!b) return null;
        var c = [];
        return a.is(b, T) && a.is(b[0], T) && (c = Ab(b)),
        c.length || G(b).replace(gb, 
        function(a, b, d) {
            var e = [];
            K.call(b),
            d.replace(hb, 
            function(a, b) {
                b && e.push( + b)
            }),
            c.push([b][C](e))
        }),
        c.toString = a._path2string,
        c
    });
    var yb = function(a) {
        var b = yb.ps = yb.ps || {};
        return b[a] ? b[a].sleep = 100: b[a] = {
            sleep: 100
        },
        setTimeout(function() {
            for (var c in b) b[x](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        }),
        b[a]
    };a.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
        k = P(j, 3),
        l = P(j, 2),
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
        y = 90 - 180 * L.atan2(q - s, r - t) / Q;
        return (q > s || t > r) && (y += 180),
        {
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
    },
    a.bezierBBox = function(b, c, d, e, f, g, h, i) {
        a.is(b, "array") || (b = [b, c, d, e, f, g, h, i]);
        var j = Hb.apply(null, b);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    },
    a.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && a.x2 >= b && c >= a.y && a.y2 >= c
    },
    a.isBBoxIntersect = function(b, c) {
        var d = a.isPointInsideBBox;
        return d(c, b.x, b.y) || d(c, b.x2, b.y) || d(c, b.x, b.y2) || d(c, b.x2, b.y2) || d(b, c.x, c.y) || d(b, c.x2, c.y) || d(b, c.x, c.y2) || d(b, c.x2, c.y2) || (b.x < c.x2 && b.x > c.x || c.x < b.x2 && c.x > b.x) && (b.y < c.y2 && b.y > c.y || c.y < b.y2 && c.y > b.y)
    },
    a.pathIntersection = function(a, b) {
        return l(a, b)
    },
    a.pathIntersectionNumber = function(a, b) {
        return l(a, b, 1)
    },
    a.isPointInsidePath = function(b, c, d) {
        var e = a.pathBBox(b);
        return a.isPointInsideBBox(e, c, d) && 1 == l(b, [["M", c, d], ["H", e.x2 + 10]], 1) % 2
    },
    a._removedFactory = function(a) {
        return function() {
            eve("raphael.log", null, "Rapha?l: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var zb = a.pathBBox = function(a) {
        var c = yb(a);
        if (c.bbox) return c.bbox;
        if (!a) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0
        };
        a = Ib(a);
        for (var d, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++) if (d = a[i], "M" == d[0]) e = d[1],
        f = d[2],
        g.push(e),
        h.push(f);
        else {
            var k = Hb(e, f, d[1], d[2], d[3], d[4], d[5], d[6]);
            g = g[C](k.min.x, k.max.x),
            h = h[C](k.min.y, k.max.y),
            e = d[5],
            f = d[6]
        }
        var l = N[B](0, g),
        m = N[B](0, h),
        n = M[B](0, g),
        o = M[B](0, h),
        p = {
            x: l,
            y: m,
            x2: n,
            y2: o,
            width: n - l,
            height: o - m
        };
        return c.bbox = b(p),
        p
    },
    Ab = function(c) {
        var d = b(c);
        return d.toString = a._path2string,
        d
    },
    Bb = a._pathToRelative = function(b) {
        var c = yb(b);
        if (c.rel) return Ab(c.rel);
        a.is(b, T) && a.is(b && b[0], T) || (b = a.parsePathString(b));
        var d = [],
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0;
        "M" == b[0][0] && (e = b[0][1], f = b[0][2], g = e, h = f, i++, d.push(["M", e, f]));
        for (var j = i, k = b.length; k > j; j++) {
            var l = d[j] = [],
            m = b[j];
            if (m[0] != K.call(m[0])) switch (l[0] = K.call(m[0]), l[0]) {
            case "a":
                l[1] = m[1],
                l[2] = m[2],
                l[3] = m[3],
                l[4] = m[4],
                l[5] = m[5],
                l[6] = +(m[6] - e).toFixed(3),
                l[7] = +(m[7] - f).toFixed(3);
                break;
            case "v":
                l[1] = +(m[1] - f).toFixed(3);
                break;
            case "m":
                g = m[1],
                h = m[2];
            default:
                for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e: f)).toFixed(3)
            } else {
                l = d[j] = [],
                "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
            }
            var r = d[j].length;
            switch (d[j][0]) {
            case "z":
                e = g,
                f = h;
                break;
            case "h":
                e += +d[j][r - 1];
                break;
            case "v":
                f += +d[j][r - 1];
                break;
            default:
                e += +d[j][r - 2],
                f += +d[j][r - 1]
            }
        }
        return d.toString = a._path2string,
        c.rel = Ab(d),
        d
    },
    Cb = a._pathToAbsolute = function(b) {
        var c = yb(b);
        if (c.abs) return Ab(c.abs);
        if (a.is(b, T) && a.is(b && b[0], T) || (b = a.parsePathString(b)), !b || !b.length) return [["M", 0, 0]];
        var d = [],
        e = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
        "M" == b[0][0] && (e = +b[0][1], g = +b[0][2], h = e, i = g, j++, d[0] = ["M", e, g]);
        for (var k, l, m = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), n = j, o = b.length; o > n; n++) {
            if (d.push(k = []), l = b[n], l[0] != _.call(l[0])) switch (k[0] = _.call(l[0]), k[0]) {
            case "A":
                k[1] = l[1],
                k[2] = l[2],
                k[3] = l[3],
                k[4] = l[4],
                k[5] = l[5],
                k[6] = +(l[6] + e),
                k[7] = +(l[7] + g);
                break;
            case "V":
                k[1] = +l[1] + g;
                break;
            case "H":
                k[1] = +l[1] + e;
                break;
            case "R":
                for (var p = [e, g][C](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e,
                p[++q] = +p[q] + g;
                d.pop(),
                d = d[C](f(p, m));
                break;
            case "M":
                h = +l[1] + e,
                i = +l[2] + g;
            default:
                for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e: g)
            } else if ("R" == l[0]) p = [e, g][C](l.slice(1)),
            d.pop(),
            d = d[C](f(p, m)),
            k = ["R"][C](l.slice( - 2));
            else for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
            switch (k[0]) {
            case "Z":
                e = h,
                g = i;
                break;
            case "H":
                e = k[1];
                break;
            case "V":
                g = k[1];
                break;
            case "M":
                h = k[k.length - 2],
                i = k[k.length - 1];
            default:
                e = k[k.length - 2],
                g = k[k.length - 1]
            }
        }
        return d.toString = a._path2string,
        c.abs = Ab(d),
        d
    },
    Db = function(a, b, c, d) {
        return [a, b, c, d, c, d]
    },
    Eb = function(a, b, c, d, e, f) {
        var g = 1 / 3,
        h = 2 / 3;
        return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    },
    Fb = function(a, b, c, e, f, g, h, i, j, k) {
        var l,
        m = 120 * Q / 180,
        n = Q / 180 * ( + f || 0),
        o = [],
        p = d(function(a, b, c) {
            var d = a * L.cos(c) - b * L.sin(c),
            e = a * L.sin(c) + b * L.cos(c);
            return {
                x: d,
                y: e
            }
        });
        if (k) y = k[0],
        z = k[1],
        w = k[2],
        x = k[3];
        else {
            l = p(a, b, -n),
            a = l.x,
            b = l.y,
            l = p(i, j, -n),
            i = l.x,
            j = l.y;
            var q = (L.cos(Q / 180 * f), L.sin(Q / 180 * f), (a - i) / 2),
            r = (b - j) / 2,
            s = q * q / (c * c) + r * r / (e * e);
            s > 1 && (s = L.sqrt(s), c = s * c, e = s * e);
            var t = c * c,
            u = e * e,
            v = (g == h ? -1: 1) * L.sqrt(O((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
            w = v * c * r / e + (a + i) / 2,
            x = v * -e * q / c + (b + j) / 2,
            y = L.asin(((b - x) / e).toFixed(9)),
            z = L.asin(((j - x) / e).toFixed(9));
            y = w > a ? Q - y: y,
            z = w > i ? Q - z: z,
            0 > y && (y = 2 * Q + y),
            0 > z && (z = 2 * Q + z),
            h && y > z && (y -= 2 * Q),
            !h && z > y && (z -= 2 * Q)
        }
        var A = z - y;
        if (O(A) > m) {
            var B = z,
            D = i,
            E = j;
            z = y + m * (h && z > y ? 1: -1),
            i = w + c * L.cos(z),
            j = x + e * L.sin(z),
            o = Fb(i, j, c, e, f, 0, h, D, E, [z, B, w, x])
        }
        A = z - y;
        var F = L.cos(y),
        G = L.sin(y),
        I = L.cos(z),
        J = L.sin(z),
        K = L.tan(A / 4),
        M = 4 / 3 * c * K,
        N = 4 / 3 * e * K,
        P = [a, b],
        R = [a + M * G, b - N * F],
        S = [i + M * J, j - N * I],
        T = [i, j];
        if (R[0] = 2 * P[0] - R[0], R[1] = 2 * P[1] - R[1], k) return [R, S, T][C](o);
        o = [R, S, T][C](o).join()[H](",");
        for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y: p(o[V], o[V + 1], n).x;
        return U
    },
    Gb = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i;
        return {
            x: P(j, 3) * a + 3 * P(j, 2) * i * c + 3 * j * i * i * e + P(i, 3) * g,
            y: P(j, 3) * b + 3 * P(j, 2) * i * d + 3 * j * i * i * f + P(i, 3) * h
        }
    },
    Hb = d(function(a, b, c, d, e, f, g, h) {
        var i,
        j = e - 2 * c + a - (g - 2 * e + c),
        k = 2 * (c - a) - 2 * (e - c),
        l = a - c,
        m = ( - k + L.sqrt(k * k - 4 * j * l)) / 2 / j,
        n = ( - k - L.sqrt(k * k - 4 * j * l)) / 2 / j,
        o = [b, h],
        p = [a, g];
        return O(m) > "1e12" && (m = .5),
        O(n) > "1e12" && (n = .5),
        m > 0 && 1 > m && (i = Gb(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)),
        n > 0 && 1 > n && (i = Gb(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)),
        j = f - 2 * d + b - (h - 2 * f + d),
        k = 2 * (d - b) - 2 * (f - d),
        l = b - d,
        m = ( - k + L.sqrt(k * k - 4 * j * l)) / 2 / j,
        n = ( - k - L.sqrt(k * k - 4 * j * l)) / 2 / j,
        O(m) > "1e12" && (m = .5),
        O(n) > "1e12" && (n = .5),
        m > 0 && 1 > m && (i = Gb(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)),
        n > 0 && 1 > n && (i = Gb(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)),
        {
            min: {
                x: N[B](0, p),
                y: N[B](0, o)
            },
            max: {
                x: M[B](0, p),
                y: M[B](0, o)
            }
        }
    }), Ib = a._path2curve = d(function(a, b) {
        var c = !b && yb(a);
        if (!b && c.curve) return Ab(c.curve);
        for (var d = Cb(a), e = b && Cb(b), f = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        },
        g = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        },
        h = (function(a, b) {
            var c,
            d;
            if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
            switch (! (a[0] in {
                T: 1,
                Q: 1
            }) && (b.qx = b.qy = null), a[0]) {
            case "M":
                b.X = a[1],
                b.Y = a[2];
                break;
            case "A":
                a = ["C"][C](Fb[B](0, [b.x, b.y][C](a.slice(1))));
                break;
            case "S":
                c = b.x + (b.x - (b.bx || b.x)),
                d = b.y + (b.y - (b.by || b.y)),
                a = ["C", c, d][C](a.slice(1));
                break;
            case "T":
                b.qx = b.x + (b.x - (b.qx || b.x)),
                b.qy = b.y + (b.y - (b.qy || b.y)),
                a = ["C"][C](Eb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                break;
            case "Q":
                b.qx = a[1],
                b.qy = a[2],
                a = ["C"][C](Eb(b.x, b.y, a[1], a[2], a[3], a[4]));
                break;
            case "L":
                a = ["C"][C](Db(b.x, b.y, a[1], a[2]));
                break;
            case "H":
                a = ["C"][C](Db(b.x, b.y, a[1], b.y));
                break;
            case "V":
                a = ["C"][C](Db(b.x, b.y, b.x, a[1]));
                break;
            case "Z":
                a = ["C"][C](Db(b.x, b.y, b.X, b.Y))
            }
            return a
        }), i = function(a, b) {
            if (a[b].length > 7) {
                a[b].shift();
                for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][C](c.splice(0, 6)));
                a.splice(b, 1),
                l = M(d.length, e && e.length || 0)
            }
        },
        j = function(a, b, c, f, g) {
            a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = M(d.length, e && e.length || 0))
        },
        k = 0, l = M(d.length, e && e.length || 0); l > k; k++) {
            d[k] = h(d[k], f),
            i(d, k),
            e && (e[k] = h(e[k], g)),
            e && i(e, k),
            j(d, e, f, g, k),
            j(e, d, g, f, k);
            var m = d[k],
            n = e && e[k],
            o = m.length,
            p = e && n.length;
            f.x = m[o - 2],
            f.y = m[o - 1],
            f.bx = Z(m[o - 4]) || f.x,
            f.by = Z(m[o - 3]) || f.y,
            g.bx = e && (Z(n[p - 4]) || g.x),
            g.by = e && (Z(n[p - 3]) || g.y),
            g.x = e && n[p - 2],
            g.y = e && n[p - 1]
        }
        return e || (c.curve = Ab(d)),
        e ? [d, e] : d
    },
    null, Ab), Jb = (a._parseDots = d(function(b) {
        for (var c = [], d = 0, e = b.length; e > d; d++) {
            var f = {},
            g = b[d].match(/^([^:]*):?([\d\.]*)/);
            if (f.color = a.getRGB(g[1]), f.color.error) return null;
            f.color = f.color.hex,
            g[2] && (f.offset = g[2] + "%"),
            c.push(f)
        }
        for (d = 1, e = c.length - 1; e > d; d++) if (!c[d].offset) {
            for (var h = Z(c[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++) if (c[j].offset) {
                i = c[j].offset;
                break
            }
            i || (i = 100, j = e),
            i = Z(i);
            for (var k = (i - h) / (j - d + 1); j > d; d++) h += k,
            c[d].offset = h + "%"
        }
        return c
    }), a._tear = function(a, b) {
        a == b.top && (b.top = a.prev),
        a == b.bottom && (b.bottom = a.next),
        a.next && (a.next.prev = a.prev),
        a.prev && (a.prev.next = a.next)
    }), Kb = (a._tofront = function(a, b) {
        b.top !== a && (Jb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
    },
    a._toback = function(a, b) {
        b.bottom !== a && (Jb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
    },
    a._insertafter = function(a, b, c) {
        Jb(a, c),
        b == c.top && (c.top = a),
        b.next && (b.next.prev = a),
        a.next = b.next,
        a.prev = b,
        b.next = a
    },
    a._insertbefore = function(a, b, c) {
        Jb(a, c),
        b == c.bottom && (c.bottom = a),
        b.prev && (b.prev.next = a),
        a.prev = b.prev,
        b.prev = a,
        a.next = b
    },
    a.toMatrix = function(a, b) {
        var c = zb(a),
        d = {
            _: {
                transform: E
            },
            getBBox: function() {
                return c
            }
        };
        return Lb(d, b),
        d.matrix
    }), Lb = (a.transformPath = function(a, b) {
        return pb(a, Kb(a, b))
    },
    a._extractTransform = function(b, c) {
        if (null == c) return b._.transform;
        c = G(c).replace(/\.{3}|\u2026/g, b._.transform || E);
        var d = a.parseTransformString(c),
        e = 0,
        f = 0,
        g = 0,
        h = 1,
        i = 1,
        j = b._,
        k = new m;
        if (j.transform = d || [], d) for (var l = 0, n = d.length; n > l; l++) {
            var o,
            p,
            q,
            r,
            s,
            t = d[l],
            u = t.length,
            v = G(t[0]).toLowerCase(),
            w = t[0] != v,
            x = w ? k.invert() : 0;
            "t" == v && 3 == u ? w ? (o = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - o, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || b.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || b.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]),
            j.dirtyT = 1,
            b.matrix = k
        }
        b.matrix = k,
        j.sx = h,
        j.sy = i,
        j.deg = e,
        j.dx = f = k.e,
        j.dy = g = k.f,
        1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
    }), Mb = function(a) {
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
    },
    Nb = a._equaliseTransform = function(b, c) {
        c = G(c).replace(/\.{3}|\u2026/g, b),
        b = a.parseTransformString(b) || [],
        c = a.parseTransformString(c) || [];
        for (var d, e, f, g, h = M(b.length, c.length), i = [], j = [], k = 0; h > k; k++) {
            if (f = b[k] || Mb(c[k]), g = c[k] || Mb(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
            for (i[k] = [], j[k] = [], d = 0, e = M(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]),
            d in g && (j[k][d] = g[d])
        }
        return {
            from: i,
            to: j
        }
    };a._getContainer = function(b, c, d, e) {
        var f;
        return f = null != e || a.is(b, "object") ? b: y.doc.getElementById(b),
        null != f ? f.tagName ? null == c ? {
            container: f,
            width: f.style.pixelWidth || f.offsetWidth,
            height: f.style.pixelHeight || f.offsetHeight
        }: {
            container: f,
            width: c,
            height: d
        }: {
            container: 1,
            x: b,
            y: c,
            width: d,
            height: e
        }: void 0
    },
    a.pathToRelative = Bb, a._engine = {},
    a.path2curve = Ib, a.matrix = function(a, b, c, d, e, f) {
        return new m(a, b, c, d, e, f)
    },
    function(b) {
        function c(a) {
            return a[0] * a[0] + a[1] * a[1]
        }
        function d(a) {
            var b = L.sqrt(c(a));
            a[0] && (a[0] /= b),
            a[1] && (a[1] /= b)
        }
        b.add = function(a, b, c, d, e, f) {
            var g,
            h,
            i,
            j,
            k = [[], [], []],
            l = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            n = [[a, c, e], [b, d, f], [0, 0, 1]];
            for (a && a instanceof m && (n = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]), g = 0; 3 > g; g++) for (h = 0; 3 > h; h++) {
                for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * n[i][h];
                k[g][h] = j
            }
            this.a = k[0][0],
            this.b = k[1][0],
            this.c = k[0][1],
            this.d = k[1][1],
            this.e = k[0][2],
            this.f = k[1][2]
        },
        b.invert = function() {
            var a = this,
            b = a.a * a.d - a.b * a.c;
            return new m(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
        },
        b.clone = function() {
            return new m(this.a, this.b, this.c, this.d, this.e, this.f)
        },
        b.translate = function(a, b) {
            this.add(1, 0, 0, 1, a, b)
        },
        b.scale = function(a, b, c, d) {
            null == b && (b = a),
            (c || d) && this.add(1, 0, 0, 1, c, d),
            this.add(a, 0, 0, b, 0, 0),
            (c || d) && this.add(1, 0, 0, 1, -c, -d)
        },
        b.rotate = function(b, c, d) {
            b = a.rad(b),
            c = c || 0,
            d = d || 0;
            var e = +L.cos(b).toFixed(9),
            f = +L.sin(b).toFixed(9);
            this.add(e, f, -f, e, c, d),
            this.add(1, 0, 0, 1, -c, -d)
        },
        b.x = function(a, b) {
            return a * this.a + b * this.c + this.e
        },
        b.y = function(a, b) {
            return a * this.b + b * this.d + this.f
        },
        b.get = function(a) {
            return + this[G.fromCharCode(97 + a)].toFixed(4)
        },
        b.toString = function() {
            return a.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")": [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        },
        b.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        },
        b.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        },
        b.split = function() {
            var b = {};
            b.dx = this.e,
            b.dy = this.f;
            var e = [[this.a, this.c], [this.b, this.d]];
            b.scalex = L.sqrt(c(e[0])),
            d(e[0]),
            b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1],
            e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear],
            b.scaley = L.sqrt(c(e[1])),
            d(e[1]),
            b.shear /= b.scaley;
            var f = -e[0][1],
            g = e[1][1];
            return 0 > g ? (b.rotate = a.deg(L.acos(g)), 0 > f && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(L.asin(f)),
            b.isSimple = !( + b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate),
            b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate,
            b.noRotation = !+b.shear.toFixed(9) && !b.rotate,
            b

        },
        b.toTransformString = function(a) {
            var b = a || this[H]();
            return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : E) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : E) + (b.rotate ? "r" + [b.rotate, 0, 0] : E)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    } (m.prototype);
    var Ob = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);t.safari = "Apple Computer, Inc." == navigator.vendor && (Ob && 4 > Ob[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ob && 8 > Ob[1] ? 
    function() {
        var a = this.rect( - 99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove()
        })
    }: kb;
    for (var Pb = function() {
        this.returnValue = !1
    },
    Qb = function() {
        return this.originalEvent.preventDefault()
    },
    Rb = function() {
        this.cancelBubble = !0
    },
    Sb = function() {
        return this.originalEvent.stopPropagation()
    },
    Tb = function() {
        return y.doc.addEventListener ? 
        function(a, b, c, d) {
            var e = D && J[b] ? J[b] : b,
            f = function(e) {
                var f = y.doc.documentElement.scrollTop || y.doc.body.scrollTop,
                g = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft,
                h = e.clientX + g,
                i = e.clientY + f;
                if (D && J[x](b)) for (var j = 0, k = e.targetTouches && e.targetTouches.length; k > j; j++) if (e.targetTouches[j].target == a) {
                    var l = e;
                    e = e.targetTouches[j],
                    e.originalEvent = l,
                    e.preventDefault = Qb,
                    e.stopPropagation = Sb;
                    break
                }
                return c.call(d, e, h, i)
            };
            return a.addEventListener(e, f, !1),
            function() {
                return a.removeEventListener(e, f, !1),
                !0
            }
        }: y.doc.attachEvent ? 
        function(a, b, c, d) {
            var e = function(a) {
                a = a || y.win.event;
                var b = y.doc.documentElement.scrollTop || y.doc.body.scrollTop,
                e = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft,
                f = a.clientX + e,
                g = a.clientY + b;
                return a.preventDefault = a.preventDefault || Pb,
                a.stopPropagation = a.stopPropagation || Rb,
                c.call(d, a, f, g)
            };
            a.attachEvent("on" + b, e);
            var f = function() {
                return a.detachEvent("on" + b, e),
                !0
            };
            return f
        }: void 0
    } (), Ub = [], Vb = function(a) {
        for (var b, c = a.clientX, d = a.clientY, e = y.doc.documentElement.scrollTop || y.doc.body.scrollTop, f = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft, g = Ub.length; g--;) {
            if (b = Ub[g], D) {
                for (var h, i = a.touches.length; i--;) if (h = a.touches[i], h.identifier == b.el._drag.id) {
                    c = h.clientX,
                    d = h.clientY,
                    (a.originalEvent ? a.originalEvent: a).preventDefault();
                    break
                }
            } else a.preventDefault();
            var j,
            k = b.el.node,
            l = k.nextSibling,
            m = k.parentNode,
            n = k.style.display;
            y.win.opera && m.removeChild(k),
            k.style.display = "none",
            j = b.el.paper.getElementByPoint(c, d),
            k.style.display = n,
            y.win.opera && (l ? m.insertBefore(k, l) : m.appendChild(k)),
            j && eve("raphael.drag.over." + b.el.id, b.el, j),
            c += f,
            d += e,
            eve("raphael.drag.move." + b.el.id, b.move_scope || b.el, c - b.el._drag.x, d - b.el._drag.y, c, d, a)
        }
    },
    Wb = function(b) {
        a.unmousemove(Vb).unmouseup(Wb);
        for (var c, d = Ub.length; d--;) c = Ub[d],
        c.el._drag = {},
        eve("raphael.drag.end." + c.el.id, c.end_scope || c.start_scope || c.move_scope || c.el, b);
        Ub = []
    },
    Xb = a.el = {},
    Yb = I.length; Yb--;)(function(b) {
        a[b] = Xb[b] = function(c, d) {
            return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                name: b,
                f: c,
                unbind: Tb(this.shape || this.node || y.doc, b, c, d || this)
            })),
            this
        },
        a["un" + b] = Xb["un" + b] = function(a) {
            for (var c = this.events || [], d = c.length; d--;) if (c[d].name == b && c[d].f == a) return c[d].unbind(),
            c.splice(d, 1),
            !c.length && delete this.events,
            this;
            return this
        }
    })(I[Yb]);Xb.data = function(b, c) {
        var d = ib[this.id] = ib[this.id] || {};
        if (1 == arguments.length) {
            if (a.is(b, "object")) {
                for (var e in b) b[x](e) && this.data(e, b[e]);
                return this
            }
            return eve("raphael.data.get." + this.id, this, d[b], b),
            d[b]
        }
        return d[b] = c,
        eve("raphael.data.set." + this.id, this, c, b),
        this
    },
    Xb.removeData = function(a) {
        return null == a ? ib[this.id] = {}: ib[this.id] && delete ib[this.id][a],
        this
    },
    Xb.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    },
    Xb.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var Zb = [];Xb.drag = function(b, c, d, e, f, g) {
        function h(h) { (h.originalEvent || h).preventDefault();
            var i = y.doc.documentElement.scrollTop || y.doc.body.scrollTop,
            j = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft;
            this._drag.x = h.clientX + j,
            this._drag.y = h.clientY + i,
            this._drag.id = h.identifier,
            !Ub.length && a.mousemove(Vb).mouseup(Wb),
            Ub.push({
                el: this,
                move_scope: e,
                start_scope: f,
                end_scope: g
            }),
            c && eve.on("raphael.drag.start." + this.id, c),
            b && eve.on("raphael.drag.move." + this.id, b),
            d && eve.on("raphael.drag.end." + this.id, d),
            eve("raphael.drag.start." + this.id, f || e || this, h.clientX + j, h.clientY + i, h)
        }
        return this._drag = {},
        Zb.push({
            el: this,
            start: h
        }),
        this.mousedown(h),
        this
    },
    Xb.onDragOver = function(a) {
        a ? eve.on("raphael.drag.over." + this.id, a) : eve.unbind("raphael.drag.over." + this.id)
    },
    Xb.undrag = function() {
        for (var b = Zb.length; b--;) Zb[b].el == this && (this.unmousedown(Zb[b].start), Zb.splice(b, 1), eve.unbind("raphael.drag.*." + this.id)); ! Zb.length && a.unmousemove(Vb).unmouseup(Wb)
    },
    t.circle = function(b, c, d) {
        var e = a._engine.circle(this, b || 0, c || 0, d || 0);
        return this.__set__ && this.__set__.push(e),
        e
    },
    t.rect = function(b, c, d, e, f) {
        var g = a._engine.rect(this, b || 0, c || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g),
        g
    },
    t.ellipse = function(b, c, d, e) {
        var f = a._engine.ellipse(this, b || 0, c || 0, d || 0, e || 0);
        return this.__set__ && this.__set__.push(f),
        f
    },
    t.path = function(b) {
        b && !a.is(b, S) && !a.is(b[0], T) && (b += E);
        var c = a._engine.path(a.format[B](a, arguments), this);
        return this.__set__ && this.__set__.push(c),
        c
    },
    t.image = function(b, c, d, e, f) {
        var g = a._engine.image(this, b || "about:blank", c || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g),
        g
    },
    t.text = function(b, c, d) {
        var e = a._engine.text(this, b || 0, c || 0, G(d));
        return this.__set__ && this.__set__.push(e),
        e
    },
    t.set = function(b) { ! a.is(b, "array") && (b = Array.prototype.splice.call(arguments, 0, arguments.length));
        var c = new jc(b);
        return this.__set__ && this.__set__.push(c),
        c
    },
    t.setStart = function(a) {
        this.__set__ = a || this.set()
    },
    t.setFinish = function() {
        var a = this.__set__;
        return delete this.__set__,
        a
    },
    t.setSize = function(b, c) {
        return a._engine.setSize.call(this, b, c)
    },
    t.setViewBox = function(b, c, d, e, f) {
        return a._engine.setViewBox.call(this, b, c, d, e, f)
    },
    t.top = t.bottom = null, t.raphael = a;
    var $b = function(a) {
        var b = a.getBoundingClientRect(),
        c = a.ownerDocument,
        d = c.body,
        e = c.documentElement,
        f = e.clientTop || d.clientTop || 0,
        g = e.clientLeft || d.clientLeft || 0,
        h = b.top + (y.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
        i = b.left + (y.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: h,
            x: i
        }
    };t.getElementByPoint = function(a, b) {
        var c = this,
        d = c.canvas,
        e = y.doc.elementFromPoint(a, b);
        if (y.win.opera && "svg" == e.tagName) {
            var f = $b(d),
            g = d.createSVGRect();
            g.x = a - f.x,
            g.y = b - f.y,
            g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1])
        }
        if (!e) return null;
        for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
        return e == c.canvas.parentNode && (e = d),
        e = e && e.raphael ? c.getById(e.raphaelid) : null
    },
    t.getById = function(a) {
        for (var b = this.bottom; b;) {
            if (b.id == a) return b;
            b = b.next
        }
        return null
    },
    t.forEach = function(a, b) {
        for (var c = this.bottom; c;) {
            if (a.call(b, c) === !1) return this;
            c = c.next
        }
        return this
    },
    t.getElementsByPoint = function(a, b) {
        var c = this.set();
        return this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        }),
        c
    },
    Xb.isPointInside = function(b, c) {
        var d = this.realPath = this.realPath || ob[this.type](this);
        return a.isPointInsidePath(d, b, c)
    },
    Xb.getBBox = function(a) {
        if (this.removed) return {};
        var b = this._;
        return a ? ((b.dirty || !b.bboxwt) && (this.realPath = ob[this.type](this), b.bboxwt = zb(this.realPath), b.bboxwt.toString = n, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = ob[this.type](this)), b.bbox = zb(pb(this.realPath, this.matrix)), b.bbox.toString = n, b.dirty = b.dirtyT = 0), b.bbox)
    },
    Xb.clone = function() {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(a),
        a
    },
    Xb.glow = function(a) {
        if ("text" == this.type) return null;
        a = a || {};
        var b = {
            width: (a.width || 10) + ( + this.attr("stroke-width") || 1),
            fill: a.fill || !1,
            opacity: a.opacity || .5,
            offsetx: a.offsetx || 0,
            offsety: a.offsety || 0,
            color: a.color || "#000"
        },
        c = b.width / 2,
        d = this.paper,
        e = d.set(),
        f = this.realPath || ob[this.type](this);
        f = this.matrix ? pb(f, this.matrix) : f;
        for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
            stroke: b.color,
            fill: b.fill ? b.color: "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(b.width / c * g).toFixed(3),
            opacity: +(b.opacity / c).toFixed(3)
        }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var _b = function(b, c, d, e, f, g, j, k, l) {
        return null == l ? h(b, c, d, e, f, g, j, k) : a.findDotsAtSegment(b, c, d, e, f, g, j, k, i(b, c, d, e, f, g, j, k, l))
    },
    ac = function(b, c) {
        return function(d, e, f) {
            d = Ib(d);
            for (var g, h, i, j, k, l = "", m = {},
            n = 0, o = 0, p = d.length; p > o; o++) {
                if (i = d[o], "M" == i[0]) g = +i[1],
                h = +i[2];
                else {
                    if (j = _b(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                        if (c && !m.start) {
                            if (k = _b(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                            m.start = l,
                            l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(),
                            n += j,
                            g = +i[5],
                            h = +i[6];
                            continue
                        }
                        if (!b && !c) return k = _b(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n),
                        {
                            x: k.x,
                            y: k.y,
                            alpha: k.alpha
                        }
                    }
                    n += j,
                    g = +i[5],
                    h = +i[6]
                }
                l += i.shift() + i
            }
            return m.end = l,
            k = b ? n: c ? m: a.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1),
            k.alpha && (k = {
                x: k.x,
                y: k.y,
                alpha: k.alpha
            }),
            k
        }
    },
    bc = ac(1), cc = ac(), dc = ac(0, 1);a.getTotalLength = bc, a.getPointAtLength = cc, a.getSubpath = function(a, b, c) {
        if (1e-6 > this.getTotalLength(a) - c) return dc(a, b).end;
        var d = dc(a, c, 1);
        return b ? dc(d, b).end: d
    },
    Xb.getTotalLength = function() {
        return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : bc(this.attrs.path) : void 0
    },
    Xb.getPointAtLength = function(a) {
        return "path" == this.type ? cc(this.attrs.path, a) : void 0
    },
    Xb.getSubpath = function(b, c) {
        return "path" == this.type ? a.getSubpath(this.attrs.path, b, c) : void 0
    };
    var ec = a.easing_formulas = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return P(a, 1.7)
        },
        ">": function(a) {
            return P(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04,
            c = L.sqrt(.1734 + b * b),
            d = c - b,
            e = P(O(d), 1 / 3) * (0 > d ? -1: 1),
            f = -c - b,
            g = P(O(f), 1 / 3) * (0 > f ? -1: 1),
            h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            return a == !!a ? a: P(2, -10 * a) * L.sin(2 * (a - .075) * Q / .3) + 1
        },
        bounce: function(a) {
            var b,
            c = 7.5625,
            d = 2.75;
            return 1 / d > a ? b = c * a * a: 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375),
            b
        }
    };ec.easeIn = ec["ease-in"] = ec["<"], ec.easeOut = ec["ease-out"] = ec[">"], ec.easeInOut = ec["ease-in-out"] = ec["<>"], ec["back-in"] = ec.backIn, ec["back-out"] = ec.backOut;
    var fc = [], gc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || 
    function(a) {
        setTimeout(a, 16)
    },
    hc = function() {
        for (var b = +new Date, c = 0; fc.length > c; c++) {
            var d = fc[c];
            if (!d.el.removed && !d.paused) {
                var e,
                f,
                g = b - d.start,
                h = d.ms,
                i = d.easing,
                j = d.from,
                k = d.diff,
                l = d.to,
                m = (d.t, d.el),
                n = {},
                o = {};
                if (d.initstatus ? (g = (d.initstatus * d.anim.top - d.prev) / (d.percent - d.prev) * h, d.status = d.initstatus, delete d.initstatus, d.stop && fc.splice(c--, 1)) : d.status = (d.prev + (d.percent - d.prev) * (g / h)) / d.anim.top, !(0 > g)) if (h > g) {
                    var p = i(g / h);
                    for (var r in j) if (j[x](r)) {
                        switch (bb[r]) {
                        case R:
                            e = +j[r] + p * h * k[r];
                            break;
                        case "colour":
                            e = "rgb(" + [ic(Y(j[r].r + p * h * k[r].r)), ic(Y(j[r].g + p * h * k[r].g)), ic(Y(j[r].b + p * h * k[r].b))].join(",") + ")";
                            break;
                        case "path":
                            e = [];
                            for (var s = 0, t = j[r].length; t > s; s++) {
                                e[s] = [j[r][s][0]];
                                for (var u = 1, v = j[r][s].length; v > u; u++) e[s][u] = +j[r][s][u] + p * h * k[r][s][u];
                                e[s] = e[s].join(F)
                            }
                            e = e.join(F);
                            break;
                        case "transform":
                            if (k[r].real) for (e = [], s = 0, t = j[r].length; t > s; s++) for (e[s] = [j[r][s][0]], u = 1, v = j[r][s].length; v > u; u++) e[s][u] = j[r][s][u] + p * h * k[r][s][u];
                            else {
                                var w = function(a) {
                                    return + j[r][a] + p * h * k[r][a]
                                };
                                e = [["m", w(0), w(1), w(2), w(3), w(4), w(5)]]
                            }
                            break;
                        case "csv":
                            if ("clip-rect" == r) for (e = [], s = 4; s--;) e[s] = +j[r][s] + p * h * k[r][s];
                            break;
                        default:
                            var y = [][C](j[r]);
                            for (e = [], s = m.paper.customAttributes[r].length; s--;) e[s] = +y[s] + p * h * k[r][s]
                        }
                        n[r] = e
                    }
                    m.attr(n),
                    function(a, b, c) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + a, b, c)
                        })
                    } (m.id, m, d.anim)
                } else {
                    if (function(b, c, d) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + c.id, c, d),
                            eve("raphael.anim.finish." + c.id, c, d),
                            a.is(b, "function") && b.call(c)
                        })
                    } (d.callback, m, d.anim), m.attr(l), fc.splice(c--, 1), d.repeat > 1 && !d.next) {
                        for (f in l) l[x](f) && (o[f] = d.totalOrigin[f]);
                        d.el.attr(o),
                        q(d.anim, d.el, d.anim.percents[0], null, d.totalOrigin, d.repeat - 1)
                    }
                    d.next && !d.stop && q(d.anim, d.el, d.next, null, d.totalOrigin, d.repeat)
                }
            }
        }
        a.svg && m && m.paper && m.paper.safari(),
        fc.length && gc(hc)
    },
    ic = function(a) {
        return a > 255 ? 255: 0 > a ? 0: a
    };Xb.animateWith = function(b, c, d, e, f, g) {
        var h = this;
        if (h.removed) return g && g.call(h),
        h;
        var i = d instanceof p ? d: a.animation(d, e, f, g);
        q(i, h, i.percents[0], null, h.attr());
        for (var j = 0, k = fc.length; k > j; j++) if (fc[j].anim == c && fc[j].el == b) {
            fc[k - 1].start = fc[j].start;
            break
        }
        return h
    },
    Xb.onAnimation = function(a) {
        return a ? eve.on("raphael.anim.frame." + this.id, a) : eve.unbind("raphael.anim.frame." + this.id),
        this
    },
    p.prototype.delay = function(a) {
        var b = new p(this.anim, this.ms);
        return b.times = this.times,
        b.del = +a || 0,
        b
    },
    p.prototype.repeat = function(a) {
        var b = new p(this.anim, this.ms);
        return b.del = this.del,
        b.times = L.floor(M(a, 0)) || 1,
        b
    },
    a.animation = function(b, c, d, e) {
        if (b instanceof p) return b; (a.is(d, "function") || !d) && (e = e || d || null, d = null),
        b = Object(b),
        c = +c || 0;
        var f,
        g,
        h = {};
        for (g in b) b[x](g) && Z(g) != g && Z(g) + "%" != g && (f = !0, h[g] = b[g]);
        return f ? (d && (h.easing = d), e && (h.callback = e), new p({
            100: h
        },
        c)) : new p(b, c)
    },
    Xb.animate = function(b, c, d, e) {
        var f = this;
        if (f.removed) return e && e.call(f),
        f;
        var g = b instanceof p ? b: a.animation(b, c, d, e);
        return q(g, f, g.percents[0], null, f.attr()),
        f
    },
    Xb.setTime = function(a, b) {
        return a && null != b && this.status(a, N(b, a.ms) / a.ms),
        this
    },
    Xb.status = function(a, b) {
        var c,
        d,
        e = [],
        f = 0;
        if (null != b) return q(a, this, -1, N(b, 1)),
        this;
        for (c = fc.length; c > f; f++) if (d = fc[f], d.el.id == this.id && (!a || d.anim == a)) {
            if (a) return d.status;
            e.push({
                anim: d.anim,
                status: d.status
            })
        }
        return a ? 0: e
    },
    Xb.pause = function(a) {
        for (var b = 0; fc.length > b; b++) fc[b].el.id != this.id || a && fc[b].anim != a || eve("raphael.anim.pause." + this.id, this, fc[b].anim) !== !1 && (fc[b].paused = !0);
        return this
    },
    Xb.resume = function(a) {
        for (var b = 0; fc.length > b; b++) if (fc[b].el.id == this.id && (!a || fc[b].anim == a)) {
            var c = fc[b];
            eve("raphael.anim.resume." + this.id, this, c.anim) !== !1 && (delete c.paused, this.status(c.anim, c.status))
        }
        return this
    },
    Xb.stop = function(a) {
        for (var b = 0; fc.length > b; b++) fc[b].el.id != this.id || a && fc[b].anim != a || eve("raphael.anim.stop." + this.id, this, fc[b].anim) !== !1 && fc.splice(b--, 1);
        return this
    },
    eve.on("raphael.remove", r), eve.on("raphael.clear", r), Xb.toString = function() {
        return "Rapha?l’s object"
    };
    var jc = function(a) {
        if (this.items = [], this.length = 0, this.type = "set", a) for (var b = 0, c = a.length; c > b; b++) ! a[b] || a[b].constructor != Xb.constructor && a[b].constructor != jc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    },
    kc = jc.prototype;kc.push = function() {
        for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c],
        !a || a.constructor != Xb.constructor && a.constructor != jc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    },
    kc.pop = function() {
        return this.length && delete this[this.length--],
        this.items.pop()
    },
    kc.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; d > c; c++) if (a.call(b, this.items[c], c) === !1) return this;
        return this
    };
    for (var lc in Xb) Xb[x](lc) && (kc[lc] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a][B](c, b)
            })
        }
    } (lc));kc.attr = function(b, c) {
        if (b && a.is(b, T) && a.is(b[0], "object")) for (var d = 0, e = b.length; e > d; d++) this.items[d].attr(b[d]);
        else for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(b, c);
        return this
    },
    kc.clear = function() {
        for (; this.length;) this.pop()
    },
    kc.splice = function(a, b) {
        a = 0 > a ? M(this.length + a, 0) : a,
        b = M(0, N(this.length - a, b));
        var c,
        d = [],
        e = [],
        f = [];
        for (c = 2; arguments.length > c; c++) f.push(arguments[c]);
        for (c = 0; b > c; c++) e.push(this[a + c]);
        for (; this.length - a > c; c++) d.push(this[a + c]);
        var g = f.length;
        for (c = 0; g + d.length > c; c++) this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
        for (c = this.items.length = this.length -= b - g; this[c];) delete this[c++];
        return new jc(e)
    },
    kc.exclude = function(a) {
        for (var b = 0, c = this.length; c > b; b++) if (this[b] == a) return this.splice(b, 1),
        !0
    },
    kc.animate = function(b, c, d, e) { (a.is(d, "function") || !d) && (e = d || null);
        var f,
        g,
        h = this.items.length,
        i = h,
        j = this;
        if (!h) return this;
        e && (g = function() { ! --h && e.call(j)
        }),
        d = a.is(d, S) ? d: g;
        var k = a.animation(b, c, d, g);
        for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k);
        return this
    },
    kc.insertAfter = function(a) {
        for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
        return this
    },
    kc.getBBox = function() {
        for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;) if (!this.items[e].removed) {
            var f = this.items[e].getBBox();
            a.push(f.x),
            b.push(f.y),
            c.push(f.x + f.width),
            d.push(f.y + f.height)
        }
        return a = N[B](0, a),
        b = N[B](0, b),
        c = M[B](0, c),
        d = M[B](0, d),
        {
            x: a,
            y: b,
            x2: c,
            y2: d,
            width: c - a,
            height: d - b
        }
    },
    kc.clone = function(a) {
        a = new jc;
        for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
        return a
    },
    kc.toString = function() {
        return "Rapha?l‘s set"
    },
    a.registerFont = function(a) {
        if (!a.face) return a;
        this.fonts = this.fonts || {};
        var b = {
            w: a.w,
            face: {},
            glyphs: {}
        },
        c = a.face["font-family"];
        for (var d in a.face) a.face[x](d) && (b.face[d] = a.face[d]);
        if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
            b.face["units-per-em"] = $(a.face["units-per-em"], 10);
            for (var e in a.glyphs) if (a.glyphs[x](e)) {
                var f = a.glyphs[e];
                if (b.glyphs[e] = {
                    w: f.w,
                    k: {},
                    d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, 
                    function(a) {
                        return {
                            l: "L",
                            c: "C",
                            x: "z",
                            t: "m",
                            r: "l",
                            v: "c"
                        } [a] || "M"
                    }) + "z"
                },
                f.k) for (var g in f.k) f[x](g) && (b.glyphs[e].k[g] = f.k[g])
            }
        }
        return a
    },
    t.getFont = function(b, c, d, e) {
        if (e = e || "normal", d = d || "normal", c = +c || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        } [c] || 400, a.fonts) {
            var f = a.fonts[b];
            if (!f) {
                var g = RegExp("(^|\\s)" + b.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
                for (var h in a.fonts) if (a.fonts[x](h) && g.test(h)) {
                    f = a.fonts[h];
                    break
                }
            }
            var i;
            if (f) for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != c || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
            return i
        }
    },
    t.print = function(b, c, d, e, f, g, h) {
        g = g || "middle",
        h = M(N(h || 0, 1), -1);
        var i,
        j = G(d)[H](E),
        k = 0,
        l = 0,
        m = E;
        if (a.is(e, d) && (e = this.getFont(e)), e) {
            i = (f || 16) / e.face["units-per-em"];
            for (var n = e.face.bbox[H](u), o = +n[0], p = n[3] - n[1], q = 0, r = +n[1] + ("baseline" == g ? p + +e.face.descent: p / 2), s = 0, t = j.length; t > s; s++) {
                if ("\n" == j[s]) k = 0,
                w = 0,
                l = 0,
                q += p;
                else {
                    var v = l && e.glyphs[j[s - 1]] || {},
                    w = e.glyphs[j[s]];
                    k += l ? (v.w || e.w) + (v.k && v.k[j[s]] || 0) + e.w * h: 0,
                    l = 1
                }
                w && w.d && (m += a.transformPath(w.d, ["t", k * i, q * i, "s", i, i, o, r, "t", (b - o) / i, (c - r) / i]))
            }
        }
        return this.path(m).attr({
            fill: "#000",
            stroke: "none"
        })
    },
    t.add = function(b) {
        if (a.is(b, "array")) for (var c, d = this.set(), e = 0, f = b.length; f > e; e++) c = b[e] || {},
        v[x](c.type) && d.push(this[c.type]().attr(c));
        return d
    },
    a.format = function(b, c) {
        var d = a.is(c, T) ? [0][C](c) : arguments;
        return b && a.is(b, S) && d.length - 1 && (b = b.replace(w, 
        function(a, b) {
            return null == d[++b] ? E: d[b]
        })),
        b || E
    },
    a.fullfill = function() {
        var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
        c = function(a, c, d) {
            var e = d;
            return c.replace(b, 
            function(a, b, c, d, f) {
                b = b || d,
                e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
            }),
            e = (null == e || e == d ? a: e) + ""
        };
        return function(b, d) {
            return (b + "").replace(a, 
            function(a, b) {
                return c(a, b, d)
            })
        }
    } (), a.ninja = function() {
        return z.was ? y.win.Raphael = z.is: delete Raphael,
        a
    },
    a.st = kc, 
    function(b, c, d) {
        function e() { /in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}null==b.readyState&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),z.was?y.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){s=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink ",
		o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Rapha ? l "+this.version};
		var q=function(d,e){if(e){"string "==typeof d&&(d=q(d));for(var f in e)e[b](f)&&("xlink: "==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){if(e=c(e).replace(a._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,0>u[2]&&(u[0]=-u[2],u[2]=0),0>u[3]&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient),!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=c(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;a._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=a._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-E*u):(g=E*u,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=Raphael.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-g):(g=0,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:Raphael.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[b](k)&&!p[k]){var F=a._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){if(b=u[c(b).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;h--;)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if("a"!=u.tagName.toLowerCase()){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}"target"==o?u.setAttributeNS(n,"show","blank"==p?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(4==x.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var E=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(E,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(E),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(E,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var F=a.getRGB(p);if(F.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=c(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var G=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(G){var H=G.getElementsByTagName("stop");q(H[H.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});F[b]("opacity")&&q(i,{"fill-opacity":F.opacity>1?F.opacity/100:F.opacity});case"stroke":F=a.getRGB(p),i.setAttribute(o,F.hex),"stroke"==o&&F[b]("opacity")&&q(i,{"stroke-opacity":F.opacity>1?F.opacity/100:F.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=c(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){G=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),G&&(H=G.getElementsByTagName("stop"),q(H[H.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var I=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[I]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=c(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(a._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(m[0],{dy:r})}},z=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,b,e){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(b=e),null==b||null==e){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,b,e]])),this},A.scale=function(a,b,e,f){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==b&&(b=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this},A.translate=function(a,b){return this.removed?this:(a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]])),this)},A.transform=function(c){var d=this._;if(null==c)return d.transform;if(a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]="function"==typeof this[c]?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(c,d){if(this.removed)return this;if(null==c){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&a.is(c,"string")){if("fill"==c&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==c)return this._.transform;for(var g=c.split(j),h={},i=0,l=g.length;l>i;i++)c=g[i],h[c]=c in this.attrs?this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?this.paper.customAttributes[c].def:a._availableAttrs[c];return l-1?h:h[g[0]]}if(null==d&&a.is(c,"array")){for(h={},i=0,l=c.length;l>i;i++)h[c[i]]=this.attr(c[i]);return h}if(null!=d){var m={};m[c]=d}else null!=c&&a.is(c,"object")&&(m=c);
            for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
            for (n in this.paper.customAttributes) if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
                var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                this.attrs[n] = m[n];
                for (var p in o) o[b](p) && (m[p] = o[p])
            }
            return w(this, m),
            this
        },
        A.toFront = function() {
            if (this.removed) return this;
            "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
            var b = this.paper;
            return b.top != this && a._tofront(this, b),
            this
        },
        A.toBack = function() {
            if (this.removed) return this;
            var b = this.node.parentNode;
            return "a" == b.tagName.toLowerCase() ? b.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : b.firstChild != this.node && b.insertBefore(this.node, this.node.parentNode.firstChild),
            a._toback(this, this.paper),
            this.paper,
            this
        },
        A.insertAfter = function(b) {
            if (this.removed) return this;
            var c = b.node || b[b.length - 1].node;
            return c.nextSibling ? c.parentNode.insertBefore(this.node, c.nextSibling) : c.parentNode.appendChild(this.node),
            a._insertafter(this, b, this.paper),
            this
        },
        A.insertBefore = function(b) {
            if (this.removed) return this;
            var c = b.node || b[0].node;
            return c.parentNode.insertBefore(this.node, c),
            a._insertbefore(this, b, this.paper),
            this
        },
        A.blur = function(b) {
            var c = this;
            if (0 !== +b) {
                var d = q("filter"),
                e = q("feGaussianBlur");
                c.attrs.blur = b,
                d.id = a.createUUID(),
                q(e, {
                    stdDeviation: +b || 1.5
                }),
                d.appendChild(e),
                c.paper.defs.appendChild(d),
                c._blur = d,
                q(c.node, {
                    filter: "url(#" + d.id + ")"
                })
            } else c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur),
            c.node.removeAttribute("filter")
        },
        a._engine.circle = function(a, b, c, d) {
            var e = q("circle");
            a.canvas && a.canvas.appendChild(e);
            var f = new z(e, a);
            return f.attrs = {
                cx: b,
                cy: c,
                r: d,
                fill: "none",
                stroke: "#000"
            },
            f.type = "circle",
            q(e, f.attrs),
            f
        },
        a._engine.rect = function(a, b, c, d, e, f) {
            var g = q("rect");
            a.canvas && a.canvas.appendChild(g);
            var h = new z(g, a);
            return h.attrs = {
                x: b,
                y: c,
                width: d,
                height: e,
                r: f || 0,
                rx: f || 0,
                ry: f || 0,
                fill: "none",
                stroke: "#000"
            },
            h.type = "rect",
            q(g, h.attrs),
            h
        },
        a._engine.ellipse = function(a, b, c, d, e) {
            var f = q("ellipse");
            a.canvas && a.canvas.appendChild(f);
            var g = new z(f, a);
            return g.attrs = {
                cx: b,
                cy: c,
                rx: d,
                ry: e,
                fill: "none",
                stroke: "#000"
            },
            g.type = "ellipse",
            q(f, g.attrs),
            g
        },
        a._engine.image = function(a, b, c, d, e, f) {
            var g = q("image");
            q(g, {
                x: c,
                y: d,
                width: e,
                height: f,
                preserveAspectRatio: "none"
            }),
            g.setAttributeNS(n, "href", b),
            a.canvas && a.canvas.appendChild(g);
            var h = new z(g, a);
            return h.attrs = {
                x: c,
                y: d,
                width: e,
                height: f,
                src: b
            },
            h.type = "image",
            h
        },
        a._engine.text = function(b, c, d, e) {
            var f = q("text");
            b.canvas && b.canvas.appendChild(f);
            var g = new z(f, b);
            return g.attrs = {
                x: c,
                y: d,
                "text-anchor": "middle",
                text: e,
                font: a._availableAttrs.font,
                stroke: "none",
                fill: "#000"
            },
            g.type = "text",
            w(g, g.attrs),
            g
        },
        a._engine.setSize = function(a, b) {
            return this.width = a || this.width,
            this.height = b || this.height,
            this.canvas.setAttribute("width", this.width),
            this.canvas.setAttribute("height", this.height),
            this._viewBox && this.setViewBox.apply(this, this._viewBox),
            this
        },
        a._engine.create = function() {
            var b = a._getContainer.apply(0, arguments),
            c = b && b.container,
            d = b.x,
            e = b.y,
            f = b.width,
            g = b.height;
            if (!c) throw Error("SVG container not found.");
            var h,
            i = q("svg"),
            j = "overflow:hidden;";
            return d = d || 0,
            e = e || 0,
            f = f || 512,
            g = g || 170,
            q(i, {
                height: g,
                version: 1.1,
                width: f,
                xmlns: "http://www.w3.org/2000/svg"
            }),
            1 == c ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:absolute;left:0px", c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i)),
            c = new a._Paper,
            c.width = f,
            c.height = g,
            c.canvas = i,
            c.clear(),
            c._left = c._top = 0,
            h && (c.renderfix = function() {}),
            c.renderfix(),
            c
        },
        a._engine.setViewBox = function(a, b, c, d, e) {
            k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
            var f,
            h,
            i = g(c / this.width, d / this.height),
            j = this.top,
            l = e ? "meet": "xMinYMin";
            for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
                viewBox: f,
                preserveAspectRatio: l
            }); i && j;) h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1,
            j.attr({
                "stroke-width": h
            }),
            j._.dirty = 1,
            j._.dirtyT = 1,
            j = j.prev;
            return this._viewBox = [a, b, c, d, !!e],
            this
        },
        a.prototype.renderfix = function() {
            var a,
            b = this.canvas;
            b.style;
            try {
                a = b.getScreenCTM() || b.createSVGMatrix()
            } catch(c) {
                a = b.createSVGMatrix()
            }
            var d = -a.e % 1,
            e = -a.f % 1; (d || e) && (d && (this._left = (this._left + d) % 1), e && (this._top = (this._top + e) % 1))
        },
        a.prototype.clear = function() {
            a.eve("raphael.clear", this);
            for (var b = this.canvas; b.firstChild;) b.removeChild(b.firstChild);
            this.bottom = this.top = null,
            (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Rapha?l " + a.version)),
            b.appendChild(this.desc),
            b.appendChild(this.defs = q("defs"))
        },
        a.prototype.remove = function() {
            k("raphael.remove", this),
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null
        };
        var B = a.st;
        for (var C in A) A[b](C) && !B[b](C) && (B[C] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a].apply(c, b)
                })
            }
        } (C))
    } (window.Raphael), window.Raphael.vml && 
    function(a) {
        var b = "hasOwnProperty",
        c = String,
        d = parseFloat,
        e = Math,
        f = e.round,
        g = e.max,
        h = e.min,
        i = e.abs,
        j = "fill",
        k = /[, ]+/,
        l = a.eve,
        m = " progid:DXImageTransform.Microsoft",
        n = " ",
        o = "",
        p = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
        },
        q = /([clmz]),?([^clmz]*)/gi,
        r = / progid:\S+Blur\([^\)]+\)/g,
        s = /-?[^,\s-]+/g,
        t = "position:absolute;left:0;top:0;width:1px;height:1px",
        u = 21600,
        v = {
            path: 1,
            rect: 1,
            image: 1
        },
        w = {
            circle: 1,
            ellipse: 1
        },
        x = function(b) {
            var d = /[ahqstv]/gi,
            e = a._pathToAbsolute;
            if (c(b).match(d) && (e = a._path2curve), d = /[clmz]/g, e == a._pathToAbsolute && !c(b).match(d)) {
                var g = c(b).replace(q, 
                function(a, b, c) {
                    var d = [],
                    e = "m" == b.toLowerCase(),
                    g = p[b];
                    return c.replace(s, 
                    function(a) {
                        e && 2 == d.length && (g += d + p["m" == b ? "l": "L"], d = []),
                        d.push(f(a * u))
                    }),
                    g + d
                });
                return g
            }
            var h,
            i,
            j = e(b);
            g = [];
            for (var k = 0, l = j.length; l > k; k++) {
                h = j[k],
                i = j[k][0].toLowerCase(),
                "z" == i && (i = "x");
                for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? ",": o);
                g.push(i)
            }
            return g.join(n)
        },
        y = function(b, c, d) {
            var e = a.matrix();
            return e.rotate( - b, .5, .5),
            {
                dx: e.x(c, d),
                dy: e.y(c, d)
            }
        },
        z = function(a, b, c, d, e, f) {
            var g = a._,
            h = a.matrix,
            k = g.fillpos,
            l = a.node,
            m = l.style,
            o = 1,
            p = "",
            q = u / b,
            r = u / c;
            if (m.visibility = "hidden", b && c) {
                if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1: 1), f) {
                    var s = y(f, d, e);
                    d = s.dx,
                    e = s.dy
                }
                if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                    var t = l.getElementsByTagName(j);
                    t = t && t[0],
                    l.removeChild(t),
                    k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o),
                    g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)),
                    l.appendChild(t)
                }
                m.visibility = "visible"
            }
        };
        a.toString = function() {
            return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Rapha?l " + this.version
        };
        var A = function(a, b, d) {
            for (var e = c(b).toLowerCase().split("-"), f = d ? "end": "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
            case "block":
            case "classic":
            case "oval":
            case "diamond":
            case "open":
            case "none":
                h = e[g];
                break;
            case "wide":
            case "narrow":
                j = e[g];
                break;
            case "long":
            case "short":
                i = e[g]
            }
            var k = a.node.getElementsByTagName("stroke")[0];
            k[f + "arrow"] = h,
            k[f + "arrowlength"] = i,
            k[f + "arrowwidth"] = j
        },
        B = function(e, i) {
            e.attrs = e.attrs || {};
            var l = e.node,
            m = e.attrs,
            p = l.style,
            q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
            r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
            s = e;
            for (var t in i) i[b](t) && (m[t] = i[t]);
            if (q && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
                var y = +m.cx,
                B = +m.cy,
                D = +m.rx || +m.r || 0,
                E = +m.ry || +m.r || 0;
                l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u))
            }
            if ("clip-rect" in i) {
                var G = c(i["clip-rect"]).split(k);
                if (4 == G.length) {
                    G[2] = +G[2] + +G[0],
                    G[3] = +G[3] + +G[1];
                    var H = l.clipRect || a._g.doc.createElement("div"),
                    I = H.style;
                    I.clip = a.format("rect({1}px {2}px {3}px {0}px)", G),
                    l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
                }
                i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
            }
            if (e.textpath) {
                var J = e.textpath.style;
                i.font && (J.font = i.font),
                i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'),
                i["font-size"] && (J.fontSize = i["font-size"]),
                i["font-weight"] && (J.fontWeight = i["font-weight"]),
                i["font-style"] && (J.fontStyle = i["font-style"])
            }
            if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                var K = l.getElementsByTagName(j),
                L = !1;
                if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                    var M = c(i.fill).match(a._ISURL);
                    if (M) {
                        K.parentNode == l && l.removeChild(K),
                        K.rotate = !0,
                        K.src = M[1],
                        K.type = "tile";
                        var N = e.getBBox(1);
                        K.position = N.x + n + N.y,
                        e._.fillpos = [N.x, N.y],
                        a._preload(M[1], 
                        function() {
                            e._.fillsize = [this.offsetWidth, this.offsetHeight]
                        })
                    } else K.color = a.getRGB(i.fill).hex,
                    K.src = o,
                    K.type = "solid",
                    a.getRGB(i.fill).error && (s.type in {
                        circle: 1,
                        ellipse: 1
                    } || "r" != c(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
                }
                if ("fill-opacity" in i || "opacity" in i) {
                    var O = (( + m["fill-opacity"] + 1 || 2) - 1) * (( + m.opacity + 1 || 2) - 1) * (( + a.getRGB(i.fill).o + 1 || 2) - 1);
                    O = h(g(O, 0), 1),
                    K.opacity = O,
                    K.src && (K.color = "none")
                }
                l.appendChild(K);
                var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                Q = !1; ! P && (Q = P = F("stroke")),
                (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0),
                ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
                var R = a.getRGB(i.stroke);
                P.on && i.stroke && (P.color = R.hex),
                O = (( + m["stroke-opacity"] + 1 || 2) - 1) * (( + m.opacity + 1 || 2) - 1) * (( + R.o + 1 || 2) - 1);
                var S = .75 * (d(i["stroke-width"]) || 1);
                if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat": "square" == i["stroke-linecap"] ? "square": "round"), i["stroke-dasharray"]) {
                    var T = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    };
                    P.dashstyle = T[b](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
                }
                Q && l.appendChild(P)
            }
            if ("text" == s.type) {
                s.paper.canvas.style.display = o;
                var U = s.paper.span,
                V = 100,
                W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                p = U.style,
                m.font && (p.font = m.font),
                m["font-family"] && (p.fontFamily = m["font-family"]),
                m["font-weight"] && (p.fontWeight = m["font-weight"]),
                m["font-style"] && (p.fontStyle = m["font-style"]),
                W = d(m["font-size"] || W && W[0]) || 10,
                p.fontSize = W * V + "px",
                s.textpath.string && (U.innerHTML = c(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                var X = U.getBoundingClientRect();
                s.W = m.w = (X.right - X.left) / V,
                s.H = m.h = (X.bottom - X.top) / V,
                s.X = m.x,
                s.Y = m.y + s.H / 2,
                ("x" in i || "y" in i) && (s.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++) if (Y[Z] in i) {
                    s._.dirty = 1;
                    break
                }
                switch (m["text-anchor"]) {
                case "start":
                    s.textpath.style["v-text-align"] = "left",
                    s.bbx = s.W / 2;
                    break;
                case "end":
                    s.textpath.style["v-text-align"] = "right",
                    s.bbx = -s.W / 2;
                    break;
                default:
                    s.textpath.style["v-text-align"] = "center",
                    s.bbx = 0
                }
                s.textpath.style["v-text-kern"] = !0
            }
        },
        C = function(b, f, g) {
            b.attrs = b.attrs || {};
            var h = (b.attrs, Math.pow),
            i = "linear",
            j = ".5 .5";
            if (b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, 
            function(a, b, c) {
                return i = "radial",
                b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c),
                o
            }), f = f.split(/\s*\-\s*/), "linear" == i) {
                var k = f.shift();
                if (k = -d(k), isNaN(k)) return null
            }
            var l = a._parseDots(f);
            if (!l) return null;
            if (b = b.shape || b.node, l.length) {
                b.removeChild(g),
                g.on = !0,
                g.method = "none",
                g.color = l[0].color,
                g.color2 = l[l.length - 1].color;
                for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
                g.colors = m.length ? m.join() : "0% " + g.color,
                "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360),
                b.appendChild(g)
            }
            return 1
        },
        D = function(b, c) {
            this[0] = this.node = b,
            b.raphael = !0,
            this.id = a._oid++,
            b.raphaelid = this.id,
            this.X = 0,
            this.Y = 0,
            this.attrs = {},
            this.paper = c,
            this.matrix = a.matrix(),
            this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                dx: 0,
                dy: 0,
                deg: 0,
                dirty: 1,
                dirtyT: 1
            },
            !c.bottom && (c.bottom = this),
            this.prev = c.top,
            c.top && (c.top.next = this),
            c.top = this,
            this.next = null
        },
        E = a.el;
        D.prototype = E,
        E.constructor = D,
        E.transform = function(b) {
            if (null == b) return this._.transform;
            var d,
            e = this.paper._viewBoxShift,
            f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
            e && (d = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)),
            a._extractTransform(this, f + b);
            var g,
            h = this.matrix.clone(),
            i = this.skew,
            j = this.node,
            k = ~c(this.attrs.fill).indexOf("-"),
            l = !c(this.attrs.fill).indexOf("url(");
            if (h.translate( - .5, -.5), l || k || "image" == this.type) if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
                j.style.filter = h.toFilter();
                var m = this.getBBox(),
                p = this.getBBox(1),
                q = m.x - p.x,
                r = m.y - p.y;
                j.coordorigin = q * -u + n + r * -u,
                z(this, 1, 1, q, r, 0)
            } else j.style.filter = o,
            z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
            else j.style.filter = o,
            i.matrix = c(h),
            i.offset = h.offset();
            return d && (this._.transform = d),
            this
        },
        E.rotate = function(a, b, e) {
            if (this.removed) return this;
            if (null != a) {
                if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e), null == b || null == e) {
                    var f = this.getBBox(1);
                    b = f.x + f.width / 2,
                    e = f.y + f.height / 2
                }
                return this._.dirtyT = 1,
                this.transform(this._.transform.concat([["r", a, b, e]])),
                this
            }
        },
        E.translate = function(a, b) {
            return this.removed ? this: (a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([["t", a, b]])), this)
        },
        E.scale = function(a, b, e, f) {
            if (this.removed) return this;
            if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == b && (b = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
            return e = null == e ? g.x + g.width / 2: e,
            f = null == f ? g.y + g.height / 2: f,
            this.transform(this._.transform.concat([["s", a, b, e, f]])),
            this._.dirtyT = 1,
            this
        },
        E.hide = function() {
            return ! this.removed && (this.node.style.display = "none"),
            this
        },
        E.show = function() {
            return ! this.removed && (this.node.style.display = o),
            this
        },
        E._getBBox = function() {
            return this.removed ? {}: {
                x: this.X + (this.bbx || 0) - this.W / 2,
                y: this.Y - this.H,
                width: this.W,
                height: this.H
            }
        },
        E.remove = function() {
            if (!this.removed && this.node.parentNode) {
                this.paper.__set__ && this.paper.__set__.exclude(this),
                a.eve.unbind("raphael.*.*." + this.id),
                a._tear(this, this.paper),
                this.node.parentNode.removeChild(this.node),
                this.shape && this.shape.parentNode.removeChild(this.shape);
                for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
                this.removed = !0
            }
        },
        E.attr = function(c, d) {
            if (this.removed) return this;
            if (null == c) {
                var e = {};
                for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
                return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient,
                e.transform = this._.transform,
                e
            }
            if (null == d && a.is(c, "string")) {
                if (c == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                for (var g = c.split(k), h = {},
                i = 0, m = g.length; m > i; i++) c = g[i],
                h[c] = c in this.attrs ? this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? this.paper.customAttributes[c].def: a._availableAttrs[c];
                return m - 1 ? h: h[g[0]]
            }
            if (this.attrs && null == d && a.is(c, "array")) {
                for (h = {},
                i = 0, m = c.length; m > i; i++) h[c[i]] = this.attr(c[i]);
                return h
            }
            var n;
            null != d && (n = {},
            n[c] = d),
            null == d && a.is(c, "object") && (n = c);
            for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
            if (n) {
                for (o in this.paper.customAttributes) if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
                    var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                    this.attrs[o] = n[o];
                    for (var q in p) p[b](q) && (n[q] = p[q])
                }
                n.text && "text" == this.type && (this.textpath.string = n.text),
                B(this, n)
            }
            return this
        },
        E.toFront = function() {
            return ! this.removed && this.node.parentNode.appendChild(this.node),
            this.paper && this.paper.top != this && a._tofront(this, this.paper),
            this
        },
        E.toBack = function() {
            return this.removed ? this: (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper)), this)
        },
        E.insertAfter = function(b) {
            return this.removed ? this: (b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper), this)
        },
        E.insertBefore = function(b) {
            return this.removed ? this: (b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper), this)
        },
        E.blur = function(b) {
            var c = this.node.runtimeStyle,
            d = c.filter;
            d = d.replace(r, o),
            0 !== +b ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + ( + b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f( + b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur)
        },
        a._engine.path = function(a, b) {
            var c = F("shape");
            c.style.cssText = t,
            c.coordsize = u + n + u,
            c.coordorigin = b.coordorigin;
            var d = new D(c, b),
            e = {
                fill: "none",
                stroke: "#000"
            };
            a && (e.path = a),
            d.type = "path",
            d.path = [],
            d.Path = o,
            B(d, e),
            b.canvas.appendChild(c);
            var f = F("skew");
            return f.on = !0,
            c.appendChild(f),
            d.skew = f,
            d.transform(o),
            d
        },
        a._engine.rect = function(b, c, d, e, f, g) {
            var h = a._rectPath(c, d, e, f, g),
            i = b.path(h),
            j = i.attrs;
            return i.X = j.x = c,
            i.Y = j.y = d,
            i.W = j.width = e,
            i.H = j.height = f,
            j.r = g,
            j.path = h,
            i.type = "rect",
            i
        },
        a._engine.ellipse = function(a, b, c, d, e) {
            var f = a.path();
            return f.attrs,
            f.X = b - d,
            f.Y = c - e,
            f.W = 2 * d,
            f.H = 2 * e,
            f.type = "ellipse",
            B(f, {
                cx: b,
                cy: c,
                rx: d,
                ry: e
            }),
            f
        },
        a._engine.circle = function(a, b, c, d) {
            var e = a.path();
            return e.attrs,
            e.X = b - d,
            e.Y = c - d,
            e.W = e.H = 2 * d,
            e.type = "circle",
            B(e, {
                cx: b,
                cy: c,
                r: d
            }),
            e
        },
        a._engine.image = function(b, c, d, e, f, g) {
            var h = a._rectPath(d, e, f, g),
            i = b.path(h).attr({
                stroke: "none"
            }),
            k = i.attrs,
            l = i.node,
            m = l.getElementsByTagName(j)[0];
            return k.src = c,
            i.X = k.x = d,
            i.Y = k.y = e,
            i.W = k.width = f,
            i.H = k.height = g,
            k.path = h,
            i.type = "image",
            m.parentNode == l && l.removeChild(m),
            m.rotate = !0,
            m.src = c,
            m.type = "tile",
            i._.fillpos = [d, e],
            i._.fillsize = [f, g],
            l.appendChild(m),
            z(i, 1, 1, 0, 0, 0),
            i
        },
        a._engine.text = function(b, d, e, g) {
            var h = F("shape"),
            i = F("path"),
            j = F("textpath");
            d = d || 0,
            e = e || 0,
            g = g || "",
            i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1),
            i.textpathok = !0,
            j.string = c(g),
            j.on = !0,
            h.style.cssText = t,
            h.coordsize = u + n + u,
            h.coordorigin = "0 0";
            var k = new D(h, b),
            l = {
                fill: "#000",
                stroke: "none",
                font: a._availableAttrs.font,
                text: g
            };
            k.shape = h,
            k.path = i,
            k.textpath = j,
            k.type = "text",
            k.attrs.text = c(g),
            k.attrs.x = d,
            k.attrs.y = e,
            k.attrs.w = 1,
            k.attrs.h = 1,
            B(k, l),
            h.appendChild(j),
            h.appendChild(i),
            b.canvas.appendChild(h);
            var m = F("skew");
            return m.on = !0,
            h.appendChild(m),
            k.skew = m,
            k.transform(o),
            k
        },
        a._engine.setSize = function(b, c) {
            var d = this.canvas.style;
            return this.width = b,
            this.height = c,
            b == +b && (b += "px"),
            c == +c && (c += "px"),
            d.width = b,
            d.height = c,
            d.clip = "rect(0 " + b + " " + c + " 0)",
            this._viewBox && a._engine.setViewBox.apply(this, this._viewBox),
            this
        },
        a._engine.setViewBox = function(b, c, d, e, f) {
            a.eve("raphael.setViewBox", this, this._viewBox, [b, c, d, e, f]);
            var h,
            i,
            j = this.width,
            k = this.height,
            l = 1 / g(d / j, e / k);
            return f && (h = k / e, i = j / d, j > d * h && (b -= (j - d * h) / 2 / h), k > e * i && (c -= (k - e * i) / 2 / i)),
            this._viewBox = [b, c, d, e, !!f],
            this._viewBoxShift = {
                dx: -b,
                dy: -c,
                scale: l
            },
            this.forEach(function(a) {
                a.transform("...")
            }),
            this
        };
        var F;
        a._engine.initWin = function(a) {
            var b = a.document;
            b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try { ! b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                F = function(a) {
                    return b.createElement("<rvml:" + a + ' class="rvml">')
                }
            } catch(c) {
                F = function(a) {
                    return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                }
            }
        },
        a._engine.initWin(a._g.win),
        a._engine.create = function() {
            var b = a._getContainer.apply(0, arguments),
            c = b.container,
            d = b.height,
            e = b.width,
            f = b.x,
            g = b.y;
            if (!c) throw Error("VML container not found.");
            var h = new a._Paper,
            i = h.canvas = a._g.doc.createElement("div"),
            j = i.style;
            return f = f || 0,
            g = g || 0,
            e = e || 512,
            d = d || 342,
            h.width = e,
            h.height = d,
            e == +e && (e += "px"),
            d == +d && (d += "px"),
            h.coordsize = 1e3 * u + n + 1e3 * u,
            h.coordorigin = "0 0",
            h.span = a._g.doc.createElement("span"),
            h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",
            i.appendChild(h.span),
            j.cssText = a.format("width:{0};height:{1};display:inline-block;position:absolute;clip:rect(0 {0} {1} 0);overflow:hidden", e, d),
            1 == c ? (a._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i),
            h.renderfix = function() {},
            h
        },
        a.prototype.clear = function() {
            a.eve("raphael.clear", this),
            this.canvas.innerHTML = o,
            this.span = a._g.doc.createElement("span"),
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",
            this.canvas.appendChild(this.span),
            this.bottom = this.top = null
        },
        a.prototype.remove = function() {
            a.eve("raphael.remove", this),
            this.canvas.parentNode.removeChild(this.canvas);
            for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
            return ! 0
        };
        var G = a.st;
        for (var H in E) E[b](H) && !G[b](H) && (G[H] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a].apply(c, b)
                })
            }
        } (H))
    } (window.Raphael), window.Raphael
}), KISSY.add("gallery/kcharts/1.2/basechart/index", 
function(a, c) {
    function d(a) {
        for (var b = {
            X: 0,
            Y: 0
        }; a;) b.X += a.offsetLeft,
        b.Y += a.offsetTop,
        a = a.offsetParent;
        return b
    }
    var e = a.all,
    f = !1,
    g = !1,
    h = function() {};
    return a.extend(h, c, {
        init: function(b) {
            var c,
            d,
            f = this;
            if (b && b.renderTo) {
                c = f._cfg = a.mix({
                    zIndex: 0,
                    yAxis: {},
                    canvasAttr: {
                        x: 60,
                        y: 60
                    },
                    defineKey: {},
                    zoomType: "x"
                },
                b),
                f._$ctnNode = e(b.renderTo),
                f._$ctnNode.css({
                    "-webkit-text-size-adjust": "none",
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }),
                f.createContainer(),
                a.mix(f, {
                    _datas: {
                        cur: {},
                        total: {}
                    },
                    _points: {},
                    _centerPoints: [],
                    _pointsX: [],
                    _pointsY: [],
                    _gridsX: [],
                    _gridsY: [],
                    _areas: [],
                    _axisX: null,
                    _axisY: null,
                    _labelX: [],
                    _labelY: [],
                    _evtEls: [],
                    _gridPoints: [],
                    _multiple: !1,
                    stackable: !1
                });
                for (var g in Array.prototype) delete Array.prototype[g];
                if (d = c.series || null, "barchart" == f.chartType && (c.xAxis.min = 0, c.yAxis.min = 0), !d || 0 >= d.length || !d[0].data) return;
                d.length > 1 ? f._multiple = !0: void 0;
                for (var g in d) f._datas.total[g] = {
                    index: g,
                    data: d[g].data
                },
                f._datas.cur[g] = {
                    index: g,
                    data: d[g].data
                };
                f.dataFormat()
            }
        },
        removeData: function(a) {
            var b = this;
            delete b._datas.cur[a],
            b.dataFormat()
        },
        recoveryData: function(a) {
            var b = this;
            b._datas.cur[a] = b._datas.total[a],
            b.dataFormat()
        },
        createContainer: function() {
            var b = this,
            c = b._$ctnNode,
            d = a.mix(b._cfg.canvasAttr),
            e = d.width || c.width() - 2 * d.x,
            f = d.height || c.height() - 2 * d.y,
            g = d.x,
            h = d.y,
            i = e,
            j = f,
            k = {
                x: g,
                y: h
            },
            l = {
                x: g + e,
                y: h
            },
            m = {
                x: g,
                y: h + j
            },
            n = {
                x: g + e,
                y: h + j
            };
            b._innerContainer = {
                x: g,
                y: h,
                width: i,
                height: j,
                tl: k,
                tr: l,
                bl: m,
                br: n
            }
        },
        getInnerContainer: function() {
            return this._innerContainer
        },
        getAllDatas: function() {
            var b,
            c = this,
            d = c._cfg,
            e = [],
            f = d.zoomType,
            g = arguments[0],
            h = c.getDataType();
            if (d.stackable) for (var i in c._datas.cur) {
                "object" == h && d.defineKey.y && d.defineKey.x ? b = c.getArrayByKey(c._datas.cur[i].data, d.defineKey.y) : a.isArray(c._datas.cur[i].data) && (b = c._datas.cur[i].data);
                for (var j in b) e[j] = e[j] ? b[j] - 0 + (e[j] - 0) : b[j]
            } else for (var i in c._datas.cur)"object" == h && d.defineKey.y && d.defineKey.x ? b = c.getArrayByKey(c._datas.cur[i].data, d.defineKey.y) : a.isArray(c._datas.cur[i].data) && (b = "xy" == f ? c.getArrayByKey(c._datas.cur[i].data, g) : c._datas.cur[i].data),
            e.push(b.join(","));
            return e.length ? e.join(",").split(",") : []
        },
        getDataType: function() {
            var b = this;
            if (b._datas.total[0] && b._datas.total[0].data) for (var c in b._datas.total[0].data) {
                if (a.isPlainObject(b._datas.total[0].data[c])) return "object";
                if (a.isNumber(b._datas.total[0].data[c] - 0)) return "number"
            }
        },
        _getScales: function(b, c) {
            var d = this;
            if (c.text && a.isArray(c.text)) return c.text;
            var e = isNaN(c.max - 0) ? 0: c.max - 0,
            h = isNaN(c.min - 0) ? 0: c.min - 0,
            i = c.num || 5,
            j = Math.max.apply(null, b),
            k = Math.min.apply(null, b);
            f = 0 >= j ? 1: 0,
            g = k >= 0 ? 1: 0;
            var l = .1 * (j - k),
            m = (e || 0 == e) && e >= j ? e: j + l,
            n = (h || 0 == h) && k >= h ? h: k - l;
            return d.getScales(m, n, i)
        },
        dataFormat: function() {
            var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i = this,
            j = i._cfg,
            k = j.zoomType,
            l = i._innerContainer,
            m = l.width,
            n = l.height,
            o = l.x,
            p = l.y;
            i._pointsY = [],
            i._pointsX = [],
            "x" == k ? (b = i.getAllDatas(), h = d = i.coordNum = i._getScales(b, j.yAxis), f = i.data2GrapicData(d, !1, !0)) : "y" == k ? (c = i.getAllDatas(), h = e = i.coordNumX = i._getScales(c, j.xAxis), g = i.data2GrapicData(e, !0, !1)) : "xy" == k && (b = i.getAllDatas(0), c = i.getAllDatas(1), h = d = i.coordNum = i._getScales(b, j.xAxis), e = i.coordNumX = i._getScales(c, j.yAxis), f = i.data2GrapicData(d, !1, !1), g = i.data2GrapicData(e, !0, !0));
            var q = function(b, c, d) {
                var e = j.series[c],
                f = Math.max.apply(null, d),
                g = Math.min.apply(null, d),
                h = j.defineKey,
                l = h.x,
                q = h.y,
                r = [],
                s = 0,
                t = i.getDataType();
                if ("x" == k) if (l && q && "object" == t) for (var u in i._pointsX) b[s] && j.xAxis.text[u] == b[s][l] ? (r[u] = {
                    x: i._pointsX[u].x,
                    y: i.data2Grapic(b[s][q], f, g, n, p, !0),
                    dataInfo: b[s],
                    index: Math.round(u)
                },
                s++) : r[u] = {
                    x: i._pointsX[u].x,
                    index: Math.round(u)
                };
                else for (var u in i._pointsX) r[u] = "" === b[u] || null === b[u] ? {
                    x: i._pointsX[u].x,
                    index: Math.round(u)
                }: {
                    x: i._pointsX[u].x,
                    y: i.data2Grapic(b[u], f, g, n, p, !0),
                    dataInfo: {
                        y: b[u],
                        x: j.xAxis.text[u]
                    },
                    index: Math.round(u)
                };
                else if ("y" == k) if (l && q && a.isPlainObject(i._datas.total[0].data[0])) for (var u in i._pointsY) b[s] && j.yAxis.text[u] == b[s][l] ? (r[u] = {
                    x: i.data2Grapic(b[s][q], f, g, m, o),
                    y: i._pointsY[u].y,
                    dataInfo: {
                        y: b[s]
                    },
                    index: Math.round(u)
                },
                s++) : r[u] = {
                    y: i._pointsY[u].y,
                    index: Math.round(u)
                };
                else for (var u in i._pointsY) r[u] = {
                    x: i.data2Grapic(b[u], f, g, m, o),
                    y: i._pointsY[u].y,
                    dataInfo: {
                        y: b[u],
                        x: j.yAxis.text[u]
                    },
                    index: Math.round(u)
                };
                else if ("xy" == k) {
                    var v = i.data2GrapicData(i.getArrayByKey(e.data, 0)),
                    w = i.data2GrapicData(i.getArrayByKey(e.data, 1), !0, !0);
                    for (var u in e.data) r[u] = {
                        x: v[u],
                        y: w[u],
                        dataInfo: {
                            y: b[u]
                        },
                        index: Math.round(u)
                    }
                }
                return r
            };
            if ("x" == k) {
                for (var r in f) i._pointsY[r] = {
                    number: d[r] + "",
                    y: f[r],
                    x: o
                };
                try {
                    i._gridPoints = i.getSplitPoints(o, p + n, o + m, p + n, j.xAxis.text.length, !0),
                    i._pointsX = i.getCenterPoints(i._gridPoints)
                } catch(s) {
                    throw Error("未配置正确的xAxis.text数组")
                }
            } else if ("y" == k) {
                for (var r in g) i._pointsX[r] = {
                    number: e[r] + "",
                    y: p + n,
                    x: g[r]
                };
                try {
                    i._pointsY = i.getSplitPoints(o, p, o, p + n, j.yAxis.text.length + 1)
                } catch(s) {
                    throw Error("未配置正确的yAxis.text数组")
                }
            } else if ("xy" == k) {
                for (var r in g) i._pointsY[r] = {
                    number: e[r] + "",
                    y: g[r],
                    x: o
                };
                for (var r in f) i._pointsX[r] = {
                    number: d[r] + "",
                    y: p + n,
                    x: f[r]
                }
            }
            for (var r in i._datas.cur) i._points[r] = q(i._datas.cur[r].data, r, h)
        },
        data2GrapicData: function(b, c, d) {
            if (void 0 !== b) {
                var e,
                f = this,
                g = f._innerContainer,
                h = c ? g.x: g.y,
                i = g.height,
                j = g.width,
                k = f._cfg.zoomType,
                l = c ? Math.max.apply(null, f.coordNumX) : Math.max.apply(null, f.coordNum),
                m = c ? Math.min.apply(null, f.coordNumX) : Math.min.apply(null, f.coordNum),
                n = [];
                if ("xy" == k ? e = c ? i: j: "x" == k ? e = i: "y" == k && (e = j), a.isArray(b)) {
                    for (var o in b) n.push(f.data2Grapic(b[o], l, m, e, h, d));
                    return n
                }
                return f.data2Grapic(b, l, m, e, h, d)
            }
        },
        data2Grapic: function(a, b, c, d, e, f) {
            return 0 >= b - c ? void 0: f ? d * (1 - (a - c) / (b - c)) + e: d * (a - c) / (b - c) + e
        },
        getSplitPoints: function(a, b, c, d, e, f) {
            var g = (c - a) / e,
            h = (d - b) / e,
            i = [];
            f && i.push({
                x: a,
                y: b
            });
            for (var j = 0; e - 1 > j; j++) i.push({
                x: a + (j + 1) * g,
                y: b + (j + 1) * h
            });
            return f && i.push({
                x: c,
                y: d
            }),
            i
        },
        getCenterPoints: function(a) {
            var b = [],
            c = a.length;
            if (c > 1) for (var d = 0; c - 1 > d; d++) b[d] = {
                x: (a[d].x + a[d + 1].x) / 2,
                y: (a[d].y + a[d + 1].y) / 2
            };
            return b
        },
        getScales: function(a, b, c) {
            var d,
            e,
            h,
            i,
            j,
            k,
            l,
            m = this,
            n = Math.log,
            o = Math.pow,
            p = [],
            q = 0;
            if (! (b >= a)) {
                for (d = (a - b) / c, h = Math.floor(n(d) / n(10)) + 1, e = d / o(10, h), e = e > 0 && .1 >= e ? .1: e > .1 && .2 >= e ? .2: e > .2 && .25 >= e ? .25: e > .25 && .5 >= e ? .5: 1, i = e * o(10, h), l = (a + b) / 2 - (a + b) / 2 % i, j = k = l; j > b;) j -= i;
                for (; a > k;) k += i;
                if (m.isFloat(i)) {
                    var r = i + "";
                    r.indexOf(".") > -1 && (q = r.split(".")[1].length > 4 ? 4: r.split(".")[1].length)
                }
                for (var s = j; k >= s; s += i) p.push(parseFloat(s).toFixed(q));
                if (f) for (s in p) p[s] > 0 && p.splice(s, 1);
                else if (g) for (s in p) 0 > p[s] && p.splice(s, 1);
                return p
            }
        },
        arraySort: function(a, b, c) {
            return a.sort(function(a, d) {
                return b ? "object" == typeof a && "object" == typeof d ? d[c] - a[c] : d - a: "object" == typeof a && "object" == typeof d ? a[c] - d[c] : a - d
            })
        },
        getArrayByKey: function(b, c) {
            var d = [];
            for (var e in b)(b[e][c] || a.isNumber(b[e][c])) && d.push(b[e][c]);
            return d
        },
        isFloat: function(a) {
            return /^([+-]?)\d*\.\d+$/.test(a)
        },
        obj2Array: function(a, b) {
            var c = [];
            for (var d in a) c.push(b ? a[b] : a[d]);
            return c
        },
        getObjKeys: function(a) {
            var c = [];
            for (b in a) c.push(b);
            return c
        },
        isInSide: function(a, b, c, d, e, f) {
            return a > c && c - -e > a && b > d && d - -f > b ? !0: !1
        },
        getOffset: function(a) {
            var b,
            c,
            e,
            f = a.currentTarget;
            return a.offsetX ? {
                offsetX: a.offsetX,
                offsetY: a.offsetY
            }: (c = d(f), b = {
                X: window.pageXOffset + a.clientX,
                Y: window.pageYOffset + a.clientY
            },
            e = {
                offsetX: b.X - c.X,
                offsetY: b.Y - c.Y
            })
        }
    }),
    h
},
{
    requires: ["base"]
}), KISSY.add("gallery/kcharts/1.2/tools/color/index", 
function(a) {
    function b(a, b) {
        var c = parseInt(a.substring(1, 3), 16),
        d = parseInt(a.substring(3, 5), 16),
        e = parseInt(a.substring(5, 7), 16);
        c = parseInt(c * (100 + b) / 100),
        d = parseInt(d * (100 + b) / 100),
        e = parseInt(e * (100 + b) / 100),
        c = 255 > c ? c: 255,
        d = 255 > d ? d: 255,
        e = 255 > e ? e: 255;
        var f = 1 == c.toString(16).length ? "0" + c.toString(16) : c.toString(16),
        g = 1 == d.toString(16).length ? "0" + d.toString(16) : d.toString(16),
        h = 1 == e.toString(16).length ? "0" + e.toString(16) : e.toString(16);
        return "#" + f + g + h
    }
    var c = function(a) {
        this.init(a)
    };
    return a.augment(c, {
        init: function(a) {
            var b = a && a.themeCls || "ks-chart-default";
            this._colors = this.colorCfg[b] || this.colorCfg["ks-chart-default"]
        },
        colorCfg: {
            "ks-chart-default": [{
                DEFAULT: "#00adef",
                HOVER: "#1176ba"
            },
            {
                DEFAULT: "#8cc63e",
                HOVER: "#066839"
            },
            {
                DEFAULT: "#f7941d",
                HOVER: "#ef3e38"
            },
            {
                DEFAULT: "#ee217e",
                HOVER: "#cd7db2"
            },
            {
                DEFAULT: "#603814",
                HOVER: "#8a5e3b"
            },
            {
                DEFAULT: "#662e91",
                HOVER: "#492062"
            },
            {
                DEFAULT: "#bf1e2d",
                HOVER: "#ec1d23"
            }],
            "ks-chart-analytiks": [{
                DEFAULT: "#48BAF4",
                HOVER: "#48BAF4"
            },
            {
                DEFAULT: "#ff7b6c",
                HOVER: "#ff7b6c"
            },
            {
                DEFAULT: "#999",
                HOVER: "#999"
            },
            {
                DEFAULT: "#c17e7e",
                HOVER: "#c17e7e"
            }],
            "ks-chart-rainbow": [{
                DEFAULT: "#4573a7",
                HOVER: "#5E8BC0"
            },
            {
                DEFAULT: "#aa4644",
                HOVER: "#C35F5C"
            },
            {
                DEFAULT: "#89a54e",
                HOVER: "#A2BE67"
            },
            {
                DEFAULT: "#806a9b",
                HOVER: "#9982B4"
            },
            {
                DEFAULT: "#3e96ae",
                HOVER: "#56AFC7"
            },
            {
                DEFAULT: "#d9853f",
                HOVER: "#F49D56"
            },
            {
                DEFAULT: "#808080",
                HOVER: "#A2A2A2"
            },
            {
                DEFAULT: "#188AD7",
                HOVER: "#299BE8"
            },
            {
                DEFAULT: "#90902C",
                HOVER: "#B7B738"
            },
            {
                DEFAULT: "#AFE65D",
                HOVER: "#C5ED89"
            }]
        },
        removeAllColors: function() {
            return this._colors = [],
            this._colors
        },
        setColor: function(a) {
            var c = 10;
            a && (a.DEFAULT && a.HOVER || (a.DEFAULT && !a.HOVER ? a.HOVER = b(a.DEFAULT, c) : a = {
                DEFAULT: a,
                HOVER: b(a, c)
            })),
            this._colors.push(a)
        },
        getColor: function(a) {
            return this._colors[a % this._colors.length]
        },
        getColors: function() {
            var a,
            b = 0,
            c = this,
            d = [];
            arguments[1] ? (b = arguments[0], a = arguments[1]) : a = arguments[0];
            for (var e = b; a - b > e; e++) d.push(c.getColor(e));
            return d
        }
    }),
    c
}), KISSY.add("gallery/kcharts/1.2/tools/htmlpaper/index", 
function(a) {
    var b = a.all,
    c = function(a, c) {
        var d = this;
        return a ? (d.$tgt = b(a), d._init(c)) : void 0
    };
    return a.augment(c, {
        _init: function(b) {
            var c = this;
            c._cfg = a.mix({
                clsName: "ks-charts-container",
                prependTo: !0,
                width: void 0,
                height: void 0,
                left: 0,
                top: 0,
                css: {}
            },
            b),
            c.$paper = c._createPaper()
        },
        _createPaper: function() {
            var a = this,
            c = a.$tgt,
            d = a._cfg,
            e = b("<div></div>").addClass(d.clsName).css({
                width: d.width || c.width(),
                height: d.height || c.height(),
                position: "absolute",
                marginTop: d.top || 0,
                marginLeft: d.left || 0
            }).css(d.css);
            return d.prependTo ? e.prependTo(c) : e.appendTo(c),
            e
        },
        text: function(a, c, d, e, f) {
            var g,
            h,
            i = this,
            j = 0,
            k = 0,
            a = a - i._cfg.left,
            c = c - i._cfg.top,
            l = b("<div></div>").html(d).css({
                display: "block",
                position: "absolute"
            });
            switch (l.appendTo(i.$paper), g = l.outerWidth(), h = l.outerHeight(), e) {
            case "right":
                j = -g;
                break;
            case "center":
                j = -g / 2
            }
            switch (f) {
            case "middle":
                k = -h / 2;
                break;
            case "bottom":
                k = -h
            }
            return l.css({
                marginLeft: a + j,
                marginTop: c + k
            }),
            l
        },
        rect: function(a, c, d, e) {
            var f = this,
            a = a - f._cfg.left,
            c = c - f._cfg.top,
            g = b("<div></div>").css({
                marginLeft: a,
                marginTop: c,
                width: d,
                height: e,
                "font-size": "1px",
                display: "block",
                position: "absolute"
            });
            return g.appendTo(f.$paper)
        },
        lineX: function(a, c, d) {
            var e = this,
            a = a - e._cfg.left,
            c = c - e._cfg.top,
            f = b("<div></div>").css({
                marginLeft: a,
                marginTop: c,
                display: "block",
                position: "absolute",
                width: d,
                height: 0,
                borderTop: "1px solid"
            });
            return f.appendTo(e.$paper)
        },
        lineY: function(a, c, d) {
            var e = this,
            a = a - e._cfg.left,
            c = c - e._cfg.top,
            f = b("<div></div>").css({
                marginLeft: a,
                marginTop: c,
                display: "block",
                position: "absolute",
                width: 0,
                height: d,
                borderLeft: "1px solid"
            });
            return f.appendTo(e.$paper)
        },
        clear: function() {
            var a = this;
            return a.$paper.html(""),
            a.$paper
        }
    }),
    c
}), KISSY.add("gallery/kcharts/1.2/legend/index", 
function(a, b, c, d, e) {
    function f(c) {
        l || (l = a.Node("<div/>").css({
            visibility: "hidden",
            position: "fixed",
            left: "-9999em",
            top: 0
        }).appendTo(p)),
        b.append(c, l);
        var d = {
            width: b.outerWidth(l),
            height: b.outerHeight(l)
        };
        return l.html(""),
        d
    }
    function g(a, b) {
        var c = this.el,
        d = c.icon,
        e = c.des;
        "cy" === a ? d.transform("t0," + b) : "top" === a && e.css("top", b + "px")
    }
    function h(a, b) {
        var c = this.el,
        d = c.icon,
        e = c.des;
        "cx" === a ? d.transform("t" + b + ",0") : "left" === a && e.css(a, b + "px")
    }
    function i(b) {
        var c = b.get("disablestyle"),
        d = {
            icon: {
                stroke: "#ccc",
                fill: "#ccc"
            },
            text: {
                color: "#ccc"
            }
        };
        d = a.isFunction(c) ? a.mix(d, c(this, this.index)) : a.mix(d, c);
        var e = this.icon,
        f = this.des;
        e.attr(d.icon),
        f.css(d.text)
    }
    function j(b, c) {
        var d = b.get("enablestyle"),
        e = {
            icon: {
                stroke: c.DEFAULT,
                fill: c.DEFAULT
            },
            text: {
                color: c.DEFAULT
            }
        };
        e = a.isFunction(d) ? a.mix(e, d(this, this.index)) : a.mix(e, d);
        var f = this.icon,
        g = this.des;
        f.attr(e.icon),
        g.css(e.text)
    }
    function k(b) {
        b = a.merge(q, b),
        this.set(b),
        this.init()
    }
    a.merge;
    var l,
    m = d.BASIC[1],
    n = window,
    o = n.Raphael,
    p = a.one(document.body),
    q = {
        offset: [0, 0],
        globalConfig: {
            interval: 5
        }
    };
    return a.extend(k, a.Base, {
        init: function() {
            this._setupPaper(),
            this._setupCon();
            var b = (this.get("bbox"), this.get("paper"), this.get("align")),
            c = this.get("iconfn");
            c && a.isFunction(c) && (this.icon = c),
            this.align(b)
        },
        _setupPaper: function() {
            var a = this.get("paper");
            if (!a) {
                var c = this.get("container");
                a = o(c[0], b.width(c), b.height(c)),
                this.set("paper", a)
            }
            "VML" == o.type || (a.canvas.style.zIndex = 10)
        },
        bindEvent: function() {
            var b = this.get("els"),
            c = this;
            a.each(b, 
            function(b) {
                var d = b.icon,
                e = b.des,
                f = {
                    icon: d,
                    text: e,
                    index: b.index,
                    el: b
                };
                a.each(["click", "mouseover", "mouseout"], 
                function(a) {
                    d[a](function() {
                        c.fire(a, f)
                    }),
                    e.on(a, 
                    function() {
                        c.fire(a, f)
                    })
                })
            })
        },
        onframeend: function() {
            this.bindEvent()
        },
        _setupCon: function() {
            var a = this.get("container"),
            c = b.css(a, "position");
            "static" == c && b.css(a, "position", "relative")
        },
        item: function(a) {
            var b = this.get("els");
            return b[a]
        },
        icon: function(a, b, c, e) {
            var f,
            g = this.get("paper"),
            h = c;
            switch (e) {
            case "triangle":
                f = d.triangle(a, b, {
                    paper: g,
                    size: h
                });
                break;
            case "linetriangle":
                f = d.linetriangle(a, b, {
                    paper: g,
                    size: h
                });
                break;
            case "rhomb":
            case "diamon":
                f = d.diamond(a, b, {
                    paper: g,
                    size: h
                });
                break;
            case "linerhomb":
            case "linediamond":
                f = d.linediamond(a, b, {
                    paper: g,
                    size: h
                });
                break;
            case "square":
                f = d.square(a, b, {
                    paper: g,
                    size: h
                });
                break;
            case "linesquare":
                f = d.linesquare(a, b, {
                    paper: g,
                    size: h
                });
                break;
            case "linecircle":
                f = d.linecircle(a, b, {
                    paper: g,
                    size: h
                });
                break;
            default:
                f = d.circle(a, b, {
                    paper: g,
                    size: h
                })
            }
            return f
        },
        align: function(a) {
            var b = {
                tl: "alignTopLeft",
                tc: "alignTopCenter",
                tr: "alignTopRight",
                rt: "alignRightTop",
                rm: "alignRightMiddle",
                rb: "alignRightBottom",
                bl: "alignBottomLeft",
                bc: "alignBottomCenter",
                br: "alignBottomRight",
                lt: "alignLeftTop",
                lm: "alignLeftMiddle",
                lb: "alignLeftBottom"
            },
            c = b[a] || "alignRight";
            this[c]()
        },
        alignTop: function(c, d) {
            var g = this.get("container"),
            k = this.get("bbox"),
            l = this.get("offset"),
            n = (this.get("paper"), this.get("config")),
            o = this.get("globalConfig"),
            p = this,
            q = o.iconsize || [1, 1],
            r = q * m || 6,
            s = o.icontype,
            t = 0,
            u = [];
            a.each(n, 
            function(b, c) {
                var d = b.text || "data" + c,
                e = a.Node('<span class="kcharts-legend-item">' + d + "</span>"),
                g = f(e);
                t += g.width,
                u.push({
                    el: e,
                    width: g.width,
                    height: g.height,
                    zIndex: 10,
                    cursor: "pointer"
                })
            });
            var v = t,
            w = p.icon( - 9999, 9999, q, s),
            x = w.getBBox(),
            y = o.iconright || 0,
            z = o.interval || 0;
            w.remove(),
            v += (x.width + y) * n.length + z * (n.length - 1);
            var A = k.left + l[0],
            B = k.top + l[1] - 2 * r,
            C = A + (k.width - v) / 2 + r,
            D = B;
            if (d && (D = D + 4 * r + k.height), "l" == c) C = 0 + l[0] + r;
            else if ("r" == c) {
                var E = b.width(g);
                C = E - v
            }
            var F = [],
            G = this.get("alignhook"),
            H = this.get("iconAttrHook"),
            I = this.get("spanAttrHook"),
            J = [],
            K = this.get("anim"),
            L = K ? b.width(g) : 0,
            M = {
                icontype: s,
                iconsize: r,
                iconright: y
            };
            a.each(n, 
            function(c, d) {
                G && (M = G.call(p, M, d));
                var e = C,
                k = D;
                e += L;
                var l = p.icon(e, k, q, c.icontype || M.icontype),
                m = l.getBBox(),
                n = {};
                a.mix(n, c, !0, ["DEFAULT", "HOVER"]);
                var o = {
                    fill: n.DEFAULT
                };
                H && (o = a.merge({
                    fill: n.DEFAULT
                },
                H.call(p, d))),
                o.stroke = o.fill,
                l.attr(o);
                var r = c.text || "data" + d,
                s = b.create('<span class="kcharts-legend-item"></span>');
                b.html(s, r);
                var t,
                u,
                v = f(s);
                s = a.Node('<span class="kcharts-legend-item">' + r + "</span>"),
                t = C + M.iconsize + M.iconright,
                u = D - (m.height / 2 + (v.height - m.height) / 2),
                t += L;
                var w = {
                    left: t + "px",
                    top: u + "px",
                    position: "absolute",
                    zIndex: 10,
                    cursor: "pointer"
                };
                n.DEFAULT && (w.color = n.DEFAULT),
                I && (w = a.merge(w, I.call(p, d))),
                s.css(w),
                s.appendTo(g),
                C += v.width + 2 * M.iconsize + z + M.iconright;
                var x = {
                    icon: l,
                    des: s,
                    index: d,
                    disable: function() {
                        i.call(x, p, c)
                    },
                    enable: function() {
                        j.call(x, p, c)
                    }
                };
                F.push(x),
                K && J.push({
                    el: x,
                    frame: h,
                    from: {
                        cx: 0,
                        left: t
                    },
                    to: {
                        cx: -L,
                        left: t - L
                    }
                })
            }),
            this.set("els", F),
            K ? (K.endframe = function() {
                p.onframeend()
            },
            e.AnimateObject(J, K)) : p.onframeend()
        },
        alignTopLeft: function() {
            this.alignTop("l")
        },
        alignTopCenter: function() {
            this.alignTop("c")
        },
        alignTopRight: function() {
            this.alignTop("r")
        },
        alignRight: function(a) {
            this.alignLeft(a, !0)
        },
        alignRightTop: function() {
            this.alignRight("t")
        },
        alignRightMiddle: function() {
            this.alignRight("m")
        },
        alignRightBottom: function() {
            this.alignRight("b")
        },
        alignBottomLeft: function() {
            this.alignTop("l", !0)
        },
        alignBottomCenter: function() {
            this.alignTop("c", !0)
        },
        alignBottomRight: function() {
            this.alignTop("r", !0)
        },
        alignLeft: function(c, d) {
            var h = this.get("container"),
            k = this.get("bbox"),
            l = this.get("offset"),
            n = (this.get("paper"), this.get("config")),
            o = this.get("globalConfig"),
            p = this,
            q = o.iconsize || [1, 1],
            r = q * m || 6,
            s = o.icontype,
            t = 0,
            u = n[0],
            v = p.icon( - 9999, -9999, q, s),
            w = v.getBBox(),
            x = n.length,
            y = o.iconright || 0,
            z = o.interval;
            v.remove();
            var A = u.text || "data",
            B = a.Node('<span class="kcharts-legend-item">' + A + "</span>"),
            C = f(B),
            D = Math.max(C.height, w.height);
            t += D * x + z * (x - 1);
            var E,
            F,
            G,
            H,
            I = 0,
            J = [];
            a.each(n, 
            function(b, c) {
                var d = a.Node('<span class="kcharts-legend-item">' + b.text + "</span>"),
                e = f(d);
                b.text || "data" + c,
                e.width > I && (I = e.width),
                J.push({
                    el: d,
                    width: e.width,
                    height: e.height
                })
            }),
            I += y,
            d ? (E = k.left + k.width + l[0], F = k.top + l[1], G = E + r, H = F) : (E = k.left + l[0], F = k.top + l[1], G = E, H = F),
            "m" == c ? H = k.top + (k.height - t) / 2: "b" == c && (H = k.top + k.height - t);
            var K = [],
            L = this.get("alignhook"),
            M = this.get("iconAttrHook"),
            N = this.get("spanAttrHook"),
            O = [],
            P = this.get("anim"),
            Q = P ? b.height(h) : 0,
            R = {
                icontype: s,
                iconright: y
            };
            a.each(n, 
            function(b, c) {
                L && (R = L.call(p, R, c));
                var e,
                f;
                d ? (e = G + l[0], f = H + l[1]) : (e = G - I - r + l[0], f = H + l[1]),
                f += Q;
                var k = p.icon(e, f, q, b.icontype || R.icontype),
                m = k.getBBox(),
                n = J[c],
                o = {};
                a.mix(o, b, !0, ["DEFAULT", "HOVER"]);
                var s = {
                    fill: o.DEFAULT
                };
                M && (s = a.merge(s, M.call(p, c))),
                s.stroke = s.fill,
                k.attr(s);
                var t,
                u,
                v = a.Node('<span class="kcharts-legend-item">' + b.text + "</span>");
                d ? (t = G + r + m.width + l[0], u = H - (m.height / 2 + (C.height - m.height) / 2) + l[1]) : (t = G + l[0] - I + R.iconright, u = H - (m.height / 2 + (n.height - m.height) / 2) + l[1]),
                u += Q;
                var w = {
                    left: t + "px",
                    top: u + "px",
                    position: "absolute",
                    zIndex: 10,
                    cursor: "pointer"
                };
                o.DEFAULT && (w.color = o.DEFAULT),
                N && (w = a.merge(w, N.call(p, c))),
                v.css(w),
                v.appendTo(h);
                var x = Math.max(n.height, m.height);
                H += x + z;
                var y = {
                    icon: k,
                    des: v,
                    index: c,
                    disable: function() {
                        i.call(y, p, b)
                    },
                    enable: function() {
                        j.call(y, p, b)
                    }
                };
                K.push(y),
                P && O.push({
                    el: y,
                    frame: g,
                    from: {
                        cy: 0,
                        top: u
                    },
                    to: {
                        cy: -Q,
                        top: u - Q
                    }
                })
            }),
            this.set("els", K),
            P ? (P.endframe = function() {
                p.onframeend()
            },
            e.AnimateObject(O, P)) : p.onframeend()
        },
        alignLeftTop: function() {
            this.alignLeft("t")
        },
        alignLeftMiddle: function() {
            this.alignLeft("m")
        },
        alignLeftBottom: function() {
            this.alignLeft("b")
        }
    }),
    k
},
{
    requires: ["dom", "event", "gallery/kcharts/1.2/icons/index", "gallery/kcharts/1.2/animate/index", "gallery/kcharts/1.2/raphael/index"]
}), KISSY.add("gallery/kcharts/1.2/tools/touch/index", 
function(a) {
    function b(a, b) {
        if (! (a.touches.length > 1)) {
            var c = a.changedTouches,
            d = c[0],
            e = document.createEvent("MouseEvent");
            e.initMouseEvent(b, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null),
            a.target.dispatchEvent(e)
        }
    }
    function c(a) {
        var c = f(a);
        g || c || (g = !0, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
    }
    function d(a) {
        g && (b(a, "mousemove"), h = !0)
    }
    function e(a) {
        g && (b(a, "mouseup"), h && b(a, "mouseout"), h = !1, g = !1)
    }
    function f(a) {
        return "INPUT" == a.target.tagName.toUpperCase() ? !0: !1
    }
    if (!a.UA.ie) {
        var g,
        h = !1;
        document.addEventListener("touchstart", c, !0),
        document.addEventListener("touchmove", d, !0),
        document.addEventListener("touchend", e, !0)
    }
}), KISSY.add("gallery/kcharts/1.2/tip/index", 
function(a, b, c, d) {
    function e(b) {
        if (b) {
            var c = this,
            e = {
                clsName: "ks-chart-default",
                autoRender: !0,
                isVisable: !1,
                boundry: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                rootNode: f("body"),
                tpl: "",
                corner: {
                    isShow: !1,
                    tpl: "corner",
                    css: {
                        position: "absolute",
                        marginLeft: 0,
                        marginTop: 0
                    }
                },
                anim: {
                    easing: "easeOut",
                    duration: .25
                },
                offset: {
                    x: 0,
                    y: 0
                },
                alignX: "left",
                alignY: "top"
            };
            c._events = {
                MOVE: "move",
                SETCONT: "setcontent",
                HIDE: "hide"
            },
            c._cfg = a.mix(e, b, d, d, !0),
            c._cfg.rootNode = f(c._cfg.rootNode),
            c.init()
        }
    }
    var f = a.all;
    return a.Event,
    a.augment(e, b, {
        init: function() {
            var a = this,
            b = a._cfg;
            a._data = {},
            a._tpl = b.tpl,
            a.$tip,
            a.bindEvent(),
            b.autoRender && a.render()
        },
        bindEvent: function() {
            var b = this,
            c = b._cfg.template,
            d = b._events;
            b.on(d.MOVE, 
            function(a) {
                var c = a.x,
                d = a.y,
                e = a.style;
                b.isVisable() && b._cfg.anim ? b.animateTo(c, d) : b.moveTo(c, d),
                e && b.$tip.css(e)
            }),
            b.on(d.SETCONT, 
            function(d) {
                a.isFunction(c) ? b.setContent(c(d.data)) : b.renderTemplate(c, d.data)
            }),
            b.on(d.HIDE, 
            function() {
                b.hide()
            })
        },
        getInstance: function() {
            return this.$tip
        },
        isVisable: function() {
            return "none" == this.$tip.css("display") ? !1: !0
        },
        show: function() {
            var a = this;
            return a.$tip && a.$tip.show(),
            a
        },
        hide: function() {
            var a = this;
            return a.$tip && a.$tip.stop() && a.$tip.hide(),
            a
        },
        moveTo: function(a, b) {
            var c = this;
            c._prevtime = (new Date).getTime(),
            c.show();
            var d = c.getInstance(),
            e = c._cfg,
            f = (c._cfg.anim, c.getPos(a, b)),
            g = (e.corner.css["margin-top"] || e.corner.css.marginTop || 0, e.corner.css["margin-left"] || e.corner.css.marginLeft || 0),
            h = c.$corner;
            h && h.css({
                "margin-left": g + a - f.x
            }),
            d.css({
                "margin-top": f.y,
                "margin-left": f.x
            })
        },
        animateTo: function(a, b, c) {
            var d = this,
            e = d._cfg,
            f = e.anim,
            g = (new Date).getTime();
            d._prevtime && 100 > g - d._prevtime && d.animateFast(a, b, c),
            d.show(),
            d._prevtime = (new Date).getTime();
            var h = d.getInstance(),
            i = d.getPos(a, b),
            j = (e.corner.css["margin-top"] || e.corner.css.marginTop || 0, e.corner.css["margin-left"] || e.corner.css.marginLeft || 0),
            k = d.$corner;
            k && k.css({
                "margin-left": j + a - i.x
            }),
            h.stop().animate({
                "margin-top": i.y,
                "margin-left": i.x
            },
            f.duration, f.easing, 
            function() {
                c && c()
            })
        },
        animateFast: function(a, b, c) {
            var e,
            f,
            g = this,
            h = g.get("x"),
            i = g.get("y"),
            j = .2;
            g._prevtime = (new Date).getTime(),
            g.show(),
            h !== d && (e = h / 1 + (a - h) * j, f = i / 1 + (b - i) * j);
            var k = g.getInstance(),
            l = g._cfg,
            m = g._cfg.anim,
            n = g.getPos(e, f),
            o = (l.corner.css["margin-top"] || l.corner.css.marginTop || 0, l.corner.css["margin-left"] || l.corner.css.marginLeft || 0),
            p = g.$corner;
            p && p.css({
                "margin-left": o + a - n.x
            }),
            k.css({
                "margin-top": n.y,
                "margin-left": n.x
            });
            var q = g.getPos(a, b);
            k.stop().animate({
                "margin-top": q.y,
                "margin-left": q.x
            },
            m.duration, m.easing, 
            function() {
                c && c()
            })
        },
        renderTemplate: function(a, b) {
            return this.setContent(c(a).render(b))
        },
        setContent: function(a) {
            return f("." + this._cfg.clsName + "-tip-content", this.$tip).html(a)
        },
        getPos: function(a, b) {
            var c = this,
            d = c._cfg,
            e = d.offset,
            f = b + e.y,
            g = a + e.x,
            h = d.alignX,
            i = d.alignY,
            j = c.getInstance(),
            k = j.outerWidth(),
            l = j.outerHeight(),
            m = d.boundry;
            switch (c.set("x", a || 0), c.set("y", b || 0), h) {
            case "center":
                g = Math.round(a) + e.x - k / 2;
                break;
            case "right":
                g = Math.round(a) + e.x - k
            }
            switch (i) {
            case "middle":
                f = Math.round(b) + e.y - l / 2;
                break;
            case "bottom":
                f = Math.round(b) + e.y - l
            }
            if (m.width && m.height) {
                var n = m.x || 0,
                o = m.y || 0,
                p = m.width,
                q = m.height;
                o > f ? f = b - -Math.abs(e.y) : f > o + q - l && (f = b - l - Math.abs(e.y)),
                n > g ? g = a - -Math.abs(e.x) : g > n + p - k && (g = a - k - Math.abs(e.x))
            }
            return {
                x: g,
                y: f
            }
        },
        _isExist: function() {
            return this.$tip && this.$tip[0]
        },
        render: function() {
            var a = this,
            b = a._cfg,
            c = a._tpl,
            e = a._data,
            g = b.isVisable ? "inline-block": "none",
            h = b.rootNode.offset();
            return b.rootNode.offset() ? (a.$tip = !a._isExist() && f('<span class="' + b.clsName + '-tip" style="*zoom:1;"><span class="' + b.clsName + '-tip-content"></span></span>').css({
                display: g
            }).appendTo(b.rootNode), a.$corner = b.corner.isShow && b.corner.tpl ? f("<div class='" + b.clsName + "-corner'>" + b.corner.tpl + "</div>").css(b.corner.css).appendTo(a.$tip) : d, a.$tip.css({
                "left":"0px",
                "margin-top": h.top + b.offset.y,
                "margin-left": h.left + b.offset.x,
                position: "absolute"
            }), a.renderTemplate(c, e), a.$tip) : void 0
        }
    }),
    a.KCharts && a.KCharts.Tip || a.namespace("KISSY.KCharts"),
    a.KCharts.Tip = e,
    e
},
{
    requires: ["base", "gallery/template/1.0/index"]
}), KISSY.add("gallery/kcharts/1.2/animate/index", 
function(a, b) {
    function c(b, c, h) {
        function i() {
            t || (m = +new Date, x = !0)
        }
        function j() {
            var a = +new Date;
            w = w + a - m,
            x = !1
        }
        h || (h = {}),
        h = a.merge(d, h);
        var k,
        l,
        m,
        n = +new Date,
        o = (n + h.duration, n),
        p = h.duration,
        q = e[h.easing],
        r = h.frame || a.noop,
        s = {},
        t = !1,
        u = h.duration,
        v = 0,
        w = 0,
        x = !1;
        for (var y in b) c[y] || 0 == c[y] ? s[y] = null: delete b[y];
        k = function() {
            var d,
            e;
            if (e = v / p, d = q(e), a.isArray(b)) for (var g = 0, i = b.length; i > g; g++) s[g] = b[g] + (c[g] - b[g]) * d;
            else for (var j in b) s[j] = b[j] + (c[j] - b[j]) * d;
            u > v ? (r.call(z, s, e), l = f(k)) : (r.call(z, c, 1), t = !0, h.endframe && h.endframe.call(z, c, 1)),
            o = +new Date,
            v = o - n - w
        };
        var z = {
            stop: function() {
                g(l)
            },
            resume: function() {
                x && (j(), k())
            },
            pause: function() {
                x || (i(), g(l))
            },
            isRunning: function() {
                return ! t
            }
        };
        return k(),
        z
    }
    var d,
    e = b.Easing,
    f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || 
    function(a) {
        return setTimeout(a, 16)
    },
    g = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || clearTimeout;
    return d = {
        duration: 1e3,
        easing: "easeNone"
    },
    c.AnimateObject = function(b, d) {
        var e = [],
        f = 0,
        g = {},
        h = {},
        i = b.length;
        a.each(b, 
        function(a, b) {
            var c,
            d = a.from,
            i = a.to;
            for (var j in d) c = f++,
            e[c] = [a, j, b],
            g[c] = d[j],
            h[c] = i[j]
        });
        var j = c(g, h, {
            easing: d.easing,
            duration: d.duration,
            frame: function(a) {
                for (var b in a) {
                    var c = e,
                    d = c[b][0],
                    f = c[b][1],
                    g = c[b][2],
                    h = d.from;
                    h[f] = a[b],
                    d.frame && d.frame(f, a[b], a, g, i)
                }
            },
            endframe: function(a) {
                for (var b in a) {
                    var c = e,
                    f = c[b][0],
                    g = c[b][1],
                    h = c[b][2];
                    f.endframe && f.endframe(g, a[b], h, a)
                }
                d.endframe && d.endframe()
            }
        });
        return j
    },
    c
},
{
    requires: ["anim"]
}), KISSY.add("gallery/kcharts/1.2/tools/graphtool/index", 
function(a) {
    var b = Math.sqrt,
    c = {},
    d = function(a, c, d, e, f) {
        var g,
        h = ["M" + [c, d - e].join(","), "L" + [c - e * b(3) / 2, d - 0 + 1 * e / 2].join(","), [c - 0 + e * b(3) / 2, d - 0 + 1 * e / 2].join(","), "Z"].join(" ");
        return a && a.path ? (g = a.path(h).attr({
            cx: c,
            cy: d
        }), g.rotate(f, c, d), g) : void 0
    },
    e = function(a, b, c, d, e, f) {
        var g,
        h = ["M" + [b, c - e / 2].join(","), "L" + [b - 0 + d / 2, c].join(","), [b, c - 0 + e / 2].join(","), [b - d / 2, c].join(","), "Z"].join(",");
        return a && a.path ? (g = a.path(h).attr({
            cx: b,
            cy: c
        }), g.rotate(f, b, c), g) : void 0
    };
    return c = a.merge(c, {
        triangle: d,
        rhomb: e
    })
},
{
    requires: ["gallery/kcharts/1.2/raphael/index"]
}), KISSY.add("gallery/kcharts/1.2/icons/index", 
function(a) {
    var b = a.merge,
    c = a.isArray,
    d = [10, 6],
    e = "M",
    f = "L",
    g = "Z",
    h = {
        trianglePath: function(a, b, c) {
            var d = Math.sqrt(3) / 3 * c,
            h = 1 / 6 * c,
            i = [a, b - 2 / 3 * c + h],
            j = [a - d, b + 1 / 3 * c + h],
            k = [a + d, b + 1 / 3 * c + h],
            l = [e, i[0], i[1], f, j[0], j[1], f, k[0], k[1], g];
            return l
        },
        lineThrouth: function(a, b, c, d) {
            var f = d.paper,
            g = d.size[0];
            return f.path([e, a - 1.1 * g * c, b, a + 1.1 * g * c, b].join(","))
        }
    },
    i = {
        rect: function(a, c, e) {
            var f = e.width || d[0],
            g = e.height || d[1],
            h = a - f / 2,
            i = c - g / 2,
            j = e.paper.rect(h, i, f, g).attr(b({},
            e.attrs));
            return j
        },
        square: function(a, c, e) {
            return this.rect(a, c, b({
                width: d[1]
            },
            e))
        },
        linesquare: function(a, b, c) {
            var e = this.square(a, b, c),
            f = d[1],
            g = c.paper.set();
            g.push(e);
            var i = h.lineThrouth(a, b, f, c);
            return g.push(i),
            g
        },
        diamond: function(a, b, c) {
            var d = this.square(a, b, c).attr("transform", "r45");
            return d
        },
        linediamond: function(a, b, c) {
            var e = this.square(a, b, c).attr("transform", "r45"),
            f = d[1],
            g = c.paper.set();
            g.push(e);
            var i = h.lineThrouth(a, b, f, c);
            return g.push(i),
            g
        },
        circle: function(a, b, c) {
            var e;
            return e = c.paper.circle(a, b, d[1] / 2)
        },
        linecircle: function(a, b, c) {
            var e = this.circle(a, b, c),
            f = d[1],
            g = c.paper.set();
            g.push(e);
            var i = h.lineThrouth(a, b, f, c);
            return g.push(i),
            g
        },
        triangle: function(a, b, c) {
            var e = d[1],
            f = h.trianglePath(a, b, e);
            return c.paper.path(f.join(","))
        },
        linetriangle: function(a, b, c) {
            var e = d[1],
            f = h.trianglePath(a, b, e),
            g = c.paper.set();
            g.push(c.paper.path(f.join(",")));
            var i = h.lineThrouth(a, b, e, c);
            return g.push(i),
            g
        }
    },
    j = {};
    for (var k in i)(function(b) {
        var d = i[b];
        j[b] = function(b, e, f) {
            var g = d.call(i, b, e, f);
            f.size && (c(f.size) || (f.size = [f.size, f.size]), g.scale(f.size[0], f.size[1]));
            var h,
            j,
            k = f.attrs || {};
            return g.clear ? (h = g[0], j = g[1], j.attr({
                stroke: k.fill || "#000",
                "stroke-width": 2 * f.size[1]
            })) : h = g,
            h.attr(a.merge({
                "stroke-width": 0
            },
            f.attrs)),
            g
        }
    })(k);
    return j.BASIC = d,
    j
}), KISSY.add("dd/ddm", 
function(a, b, c, d, e, f) {
    function g() {
        g.superclass.constructor.apply(this, arguments)
    }
    function h(b, c) {
        var d,
        e = b.get("activeDrag"),
        f = e.get("mode"),
        g = b.get("drops"),
        h = 0,
        i = 0,
        j = k(e.get("node")),
        o = m(j);
        a.each(g, 
        function(a) {
            var b;
            if (b = a.getNodeFromTarget(c, e.get("dragNode")[0], e.get("node")[0])) if ("point" == f) l(k(b), e.mousePos) && (b = m(k(b)), d ? i > b && (d = a, i = b) : (d = a, i = b));
            else if ("intersect" == f) b = m(n(j, k(b))),
            b > i && (i = b, d = a);
            else if ("strict" == f && (b = m(n(j, k(b))), b == o)) return d = a,
            !1
        }),
        (h = b.get("activeDrop")) && h != d && (h._handleOut(c), e._handleOut(c)),
        b.set("activeDrop", d),
        d && (h != d ? d._handleEnter(c) : d._handleOver(c))
    }
    function i(a) {
        var b = document;
        a._shim = new e("<div style='background-color:red;position:" + (q ? "absolute": "fixed") + ";left:0;width:100%;height:100%;top:0;cursor:" + u.get("dragCursor") + ";z-index:" + s + ";'></div>").prependTo(b.body || b.documentElement).css("opacity", 0),
        i = j,
        q && d.on(p, "resize scroll", t, a),
        j(a)
    }
    function j(a) {
        var b = a.get("activeDrag").get("activeHandler"),
        c = "auto";
        b && (c = b.css("cursor")),
        "auto" == c && (c = a.get("dragCursor")),
        a._shim.css({
            cursor: c,
            display: "block"
        }),
        q && t.call(a)
    }
    function k(a) {
        var b = a.offset();
        return {
            left: b.left,
            right: b.left + a.outerWidth(),
            top: b.top,
            bottom: b.top + a.outerHeight()
        }
    }
    function l(a, b) {
        return a.left <= b.left && a.right >= b.left && a.top <= b.top && a.bottom >= b.top
    }
    function m(a) {
        return a.top >= a.bottom || a.left >= a.right ? 0: (a.right - a.left) * (a.bottom - a.top)
    }
    function n(a, b) {
        var c = Math.max(a.top, b.top),
        d = Math.min(a.right, b.right),
        e = Math.min(a.bottom, b.bottom);
        return {
            left: Math.max(a.left, b.left),
            right: d,
            top: c,
            bottom: e
        }
    }
    var o = document,
    p = window,
    q = 6 === b.ie,
    r = a.throttle(function(a) {
        var b = this.__activeToDrag,
        c = this.get("activeDrag"); (c || b) && a.preventDefault(),
        c ? (c._move(a), h(this, a)) : b && b._move(a)
    },
    30),
    s = 999999;
    g.ATTRS = {
        prefixCls: {
            value: "ks-dd-"
        },
        dragCursor: {
            value: "move"
        },
        clickPixelThresh: {
            value: 3
        },
        bufferTime: {
            value: 1e3
        },
        activeDrag: {},
        activeDrop: {},
        drops: {
            value: []
        }
    };
    var t = a.throttle(function() {
        var a; (a = this.get("activeDrag")) && a.get("shim") && this._shim.css({
            width: c.docWidth(),
            height: c.docHeight()
        })
    },
    30);
    a.extend(g, f, {
        __activeToDrag: 0,
        _regDrop: function(a) {
            this.get("drops").push(a)
        },
        _unregDrop: function(b) {
            b = a.indexOf(b, this.get("drops")),
            -1 != b && this.get("drops").splice(b, 1)
        },
        _regToDrag: function(a) {
            d.on(o, w, this._end, this),
            d.on(o, v, r, this),
            this.__activeToDrag = a
        },
        _start: function() {
            var a = this.__activeToDrag;
            this.set("activeDrag", a),
            this.__activeToDrag = 0,
            a.get("shim") && i(this),
            this.fire("dragstart", {
                drag: a
            })
        },
        _end: function() {
            var a = this.get("activeDrag"),
            b = this.get("activeDrop"),
            c = {
                drag: a,
                drop: b
            };
            d.remove(o, v, r, this),
            d.remove(o, w, this._end, this),
            this.__activeToDrag && (this.__activeToDrag._end(), this.__activeToDrag = 0),
            this._shim && this._shim.hide(),
            a && (a._end(), b ? (b._end(), this.fire("drophit", c), this.fire("dragdrophit", c)) : this.fire("dragdropmiss", {
                drag: a
            }), this.fire("dragend", {
                drag: a
            }), this.set("activeDrag", null), this.set("activeDrop", null))
        }
    });
    var u = new g;
    u.inRegion = l,
    u.region = k,
    u.area = m,
    b = "ontouchstart" in o,
    u.DRAG_START_EVENT = b ? "touchstart": "mousedown";
    var v = u.DRAG_MOVE_EVENT = b ? "touchmove": "mousemove",
    w = u.DRAG_END_EVENT = b ? "touchend": "mouseup";
    return u._normalHandlePreDragStart = function(a) {
        return function(b) {
            var c;
            if (c = b.originalEvent.touches) {
                if (1 != c.length) return;
                c = c[0],
                b.target = b.target || c.target,
                b.currentTarget = b.currentTarget || c.currentTarget,
                b.button = b.button || 0
            }
            a.call(this, b)
        }
    },
    u
},
{
    requires: ["ua", "dom", "event", "node", "base"]
}), KISSY.add("dd/draggable", 
function(a, b, c, d, e) {
    function f() {
        f.superclass.constructor.apply(this, arguments),
        this._init()
    }
    function g() {
        return ! 1
    }
    var h = a.each,
    i = b.ie,
    j = document;
    f.POINT = "point",
    f.INTERSECT = "intersect",
    f.STRICT = "strict",
    f.ATTRS = {
        node: {
            setter: function(a) {
                return c.one(a)
            }
        },
        clickPixelThresh: {
            valueFn: function() {
                return e.get("clickPixelThresh")
            }
        },
        bufferTime: {
            valueFn: function() {
                return e.get("bufferTime")
            }
        },
        dragNode: {},
        shim: {
            value: !0
        },
        handlers: {
            value: [],
            getter: function(b) {
                var d = this;
                return b.length || (b[0] = d.get("node")),
                h(b, 
                function(e, f) {
                    a.isFunction(e) && (e = e.call(d)),
                    (a.isString(e) || e.nodeType) && (e = c.one(e)),
                    b[f] = e
                }),
                d.__set("handlers", b),
                b
            }
        },
        activeHandler: {},
        dragging: {
            value: !1,
            setter: function(a) {
                this.get("dragNode")[a ? "addClass": "removeClass"](e.get("prefixCls") + "dragging")
            }
        },
        mode: {
            value: "point"
        },
        disabled: {
            value: !1,
            setter: function(a) {
                return this.get("dragNode")[a ? "addClass": "removeClass"](e.get("prefixCls") + "-disabled"),
                a
            }
        },
        move: {
            value: !1
        },
        primaryButtonOnly: {
            value: !0
        },
        halt: {
            value: !0
        }
    };
    var k,
    l = e._normalHandlePreDragStart(function(a) {
        var b = a.target;
        this._checkMouseDown(a) && this._check(b) && this._prepare(a)
    });
    return a.extend(f, d, {
        startMousePos: null,
        startNodePos: null,
        _diff: null,
        _bufferTimer: null,
        _init: function() {
            var a = this.get("node");
            this.set("dragNode", a),
            a.on(e.DRAG_START_EVENT, l, this).on("dragstart", this._fixDragStart)
        },
        _fixDragStart: function(a) {
            a.preventDefault()
        },
        destroy: function() {
            this.get("dragNode").detach(e.DRAG_START_EVENT, l, this).detach("dragstart", this._fixDragStart),
            this.detach()
        },
        _check: function(a) {
            var b = this,
            c = b.get("handlers"),
            d = 0;
            return h(c, 
            function(c) {
                return c.contains(a) || c[0] == a ? (d = 1, b.set("activeHandler", c), !1) : void 0
            }),
            d
        },
        _checkMouseDown: function(a) {
            return this.get("primaryButtonOnly") && 1 < a.button || this.get("disabled") ? 0: 1
        },
        _prepare: function(a) {
            var b = this;
            i && (k = j.body.onselectstart, j.body.onselectstart = g),
            b.get("halt") ? a.halt() : a.preventDefault();
            var c = b.get("node"),
            d = a.pageX,
            a = a.pageY,
            c = c.offset();
            b.startMousePos = b.mousePos = {
                left: d,
                top: a
            },
            b.startNodePos = c,
            b._diff = {
                left: d - c.left,
                top: a - c.top
            },
            e._regToDrag(b),
            (d = b.get("bufferTime")) && (b._bufferTimer = setTimeout(function() {
                b._start()
            },
            d))
        },
        _clearBufferTimer: function() {
            this._bufferTimer && (clearTimeout(this._bufferTimer), this._bufferTimer = 0)
        },
        _move: function(a) {
            var b,
            c = this._diff;
            b = this.startMousePos;
            var d = a.pageX,
            a = a.pageY,
            f = d - c.left,
            c = a - c.top;
            this.get("dragging") ? (this.mousePos = {
                left: d,
                top: a
            },
            b = {
                left: f,
                top: c,
                pageX: d,
                pageY: a,
                drag: this
            },
            d = 1, !1 === this.fire("drag", b) && (d = 0), !1 === e.fire("drag", b) && (d = 0), d && this.get("move") && this.get("node").offset(b)) : (c = this.get("clickPixelThresh"), (Math.abs(d - b.left) >= c || Math.abs(a - b.top) >= c) && this._start())
        },
        _end: function() {
            var a;
            this._clearBufferTimer(),
            i && (j.body.onselectstart = k),
            this.get("dragging") && (this.get("node").removeClass(e.get("prefixCls") + "drag-over"), (a = e.get("activeDrop")) ? this.fire("dragdrophit", {
                drag: this,
                drop: a
            }) : this.fire("dragdropmiss", {
                drag: this
            }), this.set("dragging", 0), this.fire("dragend", {
                drag: this
            }))
        },
        _handleOut: function() {
            this.get("node").removeClass(e.get("prefixCls") + "drag-over"),
            this.fire("dragexit", {
                drag: this,
                drop: e.get("activeDrop")
            })
        },
        _handleEnter: function(a) {
            this.get("node").addClass(e.get("prefixCls") + "drag-over"),
            this.fire("dragenter", a)
        },
        _handleOver: function(a) {
            this.fire("dragover", a)
        },
        _start: function() {
            this._clearBufferTimer(),
            this.set("dragging", 1),
            e._start(),
            this.fire("dragstart", {
                drag: this
            })
        }
    }),
    f
},
{
    requires: ["ua", "node", "base", "./ddm"]
}), KISSY.add("dd/droppable", 
function(a, b, c, d) {
    function e() {
        e.superclass.constructor.apply(this, arguments),
        this._init()
    }
    return e.ATTRS = {
        node: {
            setter: function(a) {
                return a ? b.one(a) : void 0
            }
        }
    },
    a.extend(e, c, {
        getNodeFromTarget: function(a, b, c) {
            var a = this.get("node"),
            d = a[0];
            return d == b || d == c ? null: a
        },
        _init: function() {
            d._regDrop(this)
        },
        __getCustomEvt: function(b) {
            return a.mix({
                drag: d.get("activeDrag"),
                drop: this
            },
            b)
        },
        _handleOut: function() {
            var a = this.__getCustomEvt();
            this.get("node").removeClass(d.get("prefixCls") + "drop-over"),
            this.fire("dropexit", a),
            d.fire("dropexit", a),
            d.fire("dragexit", a)
        },
        _handleEnter: function(a) {
            a = this.__getCustomEvt(a),
            a.drag._handleEnter(a),
            this.get("node").addClass(d.get("prefixCls") + "drop-over"),
            this.fire("dropenter", a),
            d.fire("dragenter", a),
            d.fire("dropenter", a)
        },
        _handleOver: function(a) {
            a = this.__getCustomEvt(a),
            a.drag._handleOver(a),
            this.fire("dropover", a),
            d.fire("dragover", a),
            d.fire("dropover", a)
        },
        _end: function() {
            var a = this.__getCustomEvt();
            this.get("node").removeClass(d.get("prefixCls") + "drop-over"),
            this.fire("drophit", a)
        },
        destroy: function() {
            d._unregDrop(this)
        }
    }),
    e
},
{
    requires: ["node", "base", "./ddm"]
}), KISSY.add("dd/proxy", 
function(a, b, c) {
    function d() {
        d.superclass.constructor.apply(this, arguments),
        this[e] = {}
    }
    var e = "__proxy_destructors",
    f = a.stamp,
    g = a.guid("__dd_proxy"),
    h = "__proxy";
    return d.ATTRS = {
        node: {
            value: function(a) {
                return new b(a.get("node").clone(!0))
            }
        },
        destroyOnEnd: {
            value: !1
        },
        moveOnEnd: {
            value: !0
        }
    },
    a.extend(d, c, {
        attach: function(b) {
            function c() {
                var c = i.get("node"),
                d = b.get("node");
                i[h] ? c = i[h] : a.isFunction(c) && (c = c(b), c.addClass("ks-dd-proxy"), c.css("position", "absolute"), i[h] = c),
                d.parent().append(c),
                c.show(),
                c.offset(d.offset()),
                b.__set("dragNode", d),
                b.__set("node", c)
            }
            function d() {
                var a = i[h];
                i.get("moveOnEnd") && b.get("dragNode").offset(a.offset()),
                i.get("destroyOnEnd") ? (a.remove(), i[h] = 0) : a.hide(),
                b.__set("node", b.get("dragNode"))
            }
            var i = this,
            j = f(b, 1, g);
            j && i[e][j] || (b.on("dragstart", c), b.on("dragend", d), j = f(b, 0, g), i[e][j] = {
                drag: b,
                fn: function() {
                    b.detach("dragstart", c),
                    b.detach("dragend", d)
                }
            })
        },
        unAttach: function(a) {
            var a = f(a, 1, g),
            b = this[e];
            a && b[a] && (b[a].fn(), delete b[a])
        },
        destroy: function() {
            var b = this.get("node"),
            c = this[e];
            b && !a.isFunction(b) && b.remove();
            for (var d in c) this.unAttach(c[d].drag)
        }
    }),
    d
},
{
    requires: ["node", "base"]
}), KISSY.add("dd/draggable-delegate", 
function(a, b, c, d, e) {
    function f() {
        f.superclass.constructor.apply(this, arguments)
    }
    var g = b._normalHandlePreDragStart(function(a) {
        var b,
        c;
        if (this._checkMouseDown(a)) {
            b = this.get("handlers");
            var d = new e(a.target); (b = b.length ? this._getHandler(d) : d) && (c = this._getNode(b)),
            c && (this.__set("activeHandler", b), this.__set("node", c), this.__set("dragNode", c), this._prepare(a))
        }
    });
    return a.extend(f, c, {
        _init: function() {
            this.get("container").on(b.DRAG_START_EVENT, g, this).on("dragstart", this._fixDragStart)
        },
        _getHandler: function(b) {
            for (var c, e = this.get("container"), f = this.get("handlers"); b && b[0] !== e[0] && (a.each(f, 
            function(a) {
                return d.test(b[0], a) ? (c = b, !1) : void 0
            }), !c);) b = b.parent();
            return c
        },
        _getNode: function(a) {
            return a.closest(this.get("selector"), this.get("container"))
        },
        destroy: function() {
            this.get("container").detach(b.DRAG_START_EVENT, g, this).detach("dragstart", this._fixDragStart),
            this.detach()
        }
    },
    {
        ATTRS: {
            container: {
                setter: function(a) {
                    return e.one(a)
                }
            },
            selector: {},
            handlers: {
                value: [],
                getter: 0
            },
            disabled: {
                setter: function(a) {
                    return this.get("container")[a ? "addClass": "removeClass"](b.get("prefixCls") + "-disabled"),
                    a
                }
            }
        }
    }),
    f
},
{
    requires: ["./ddm", "./draggable", "dom", "node"]
}), KISSY.add("dd/droppable-delegate", 
function(a, b, c, d, e) {
    function f() {
        var a = this.get("container"),
        b = this.get("selector");
        this.__allNodes = a.all(b)
    }
    function g() {
        g.superclass.constructor.apply(this, arguments),
        b.on("dragstart", f, this)
    }
    return a.extend(g, c, {
        getNodeFromTarget: function(a, c, d) {
            var e = {
                left: a.pageX,
                top: a.pageY
            },
            a = this.__allNodes,
            f = 0,
            g = Number.MAX_VALUE;
            return a && a.each(function(a) {
                var h = a[0];
                h !== d && h !== c && b.inRegion(b.region(a), e) && (h = b.area(b.region(a)), g > h && (g = h, f = a))
            }),
            f && (this.set("lastNode", this.get("node")), this.set("node", f)),
            f
        },
        _handleOut: function() {
            g.superclass._handleOut.apply(this, arguments),
            this.set("node", 0),
            this.set("lastNode", 0)
        },
        _handleOver: function(a) {
            var b = this.get("node"),
            c = g.superclass._handleOut,
            d = g.superclass._handleOver,
            e = g.superclass._handleEnter,
            f = this.get("lastNode");
            f[0] !== b[0] ? (this.set("node", f), c.apply(this, arguments), this.set("node", b), e.call(this, a)) : d.call(this, a)
        }
    },
    {
        ATTRS: {
            lastNode: {},
            selector: {},
            container: {
                setter: function(a) {
                    return e.one(a)
                }
            }
        }
    }),
    g
},
{
    requires: ["./ddm", "./droppable", "dom", "node"]
}), KISSY.add("dd/scroll", 
function(a, b, c, d, e) {
    function f() {
        f.superclass.constructor.apply(this, arguments),
        this[j] = {}
    }
    var g = window,
    h = a.stamp,
    i = 100,
    j = "__dd_scrolls";
    f.ATTRS = {
        node: {
            valueFn: function() {
                return d.one(g)
            },
            setter: function(a) {
                return d.one(a)
            }
        },
        rate: {
            value: [10, 10]
        },
        diff: {
            value: [20, 20]
        }
    };
    var k = a.isWindow;
    return a.extend(f, c, {
        getRegion: function(a) {
            return k(a[0]) ? {
                width: e.viewportWidth(),
                height: e.viewportHeight()
            }: {
                width: a.outerWidth(),
                height: a.outerHeight()
            }
        },
        getOffset: function(a) {
            return k(a[0]) ? {
                left: e.scrollLeft(),
                top: e.scrollTop()
            }: a.offset()
        },
        getScroll: function(a) {
            return {
                left: a.scrollLeft(),
                top: a.scrollTop()
            }
        },
        setScroll: function(a, b) {
            a.scrollLeft(b.left),
            a.scrollTop(b.top)
        },
        unAttach: function(a) {
            var b,
            c = this[j]; (b = h(a, 1, "__dd-scroll-id-")) && c[b] && (c[b].fn(), delete c[b])
        },
        destroy: function() {
            var a,
            b = this[j];
            for (a in b) this.unAttach(b[a].drag)
        },
        attach: function(c) {
            function d() {
                if (k(m[0])) return 0;
                var a = c.mousePos,
                d = b.region(m);
                return b.inRegion(d, a) ? 0: (clearTimeout(t), t = 0, 1)
            }
            function e(b) { ! b.fake && !d() && (p = b, q = a.clone(c.mousePos), b = l.getOffset(m), q.left -= b.left, q.top -= b.top, t || g())
            }
            function f() {
                clearTimeout(t),
                t = null
            }
            function g() {
                if (!d()) {
                    var b = l.getRegion(m),
                    e = b.width,
                    b = b.height,
                    f = l.getScroll(m),
                    h = a.clone(f),
                    j = !1;
                    q.top - b >= -s[1] && (f.top += r[1], j = !0),
                    q.top <= s[1] && (f.top -= r[1], j = !0),
                    q.left - e >= -s[0] && (f.left += r[0], j = !0),
                    q.left <= s[0] && (f.left -= r[0], j = !0),
                    j ? (l.setScroll(m, f), t = setTimeout(g, i), p.fake = !0, k(m[0]) && (f = l.getScroll(m), p.left += f.left - h.left, p.top += f.top - h.top), c.get("move") && c.get("node").offset(p), c.fire("drag", p)) : t = null
                }
            }
            var l = this,
            m = l.get("node"),
            n = h(c, 0, "__dd-scroll-id-"),
            o = l[j];
            if (!o[n]) {
                var p,
                q,
                r = l.get("rate"),
                s = l.get("diff"),
                t = null;
                c.on("drag", e),
                c.on("dragend", f),
                o[n] = {
                    drag: c,
                    fn: function() {
                        c.detach("drag", e),
                        c.detach("dragend", f)
                    }
                }
            }
        }
    }),
    f
},
{
    requires: ["./ddm", "base", "node", "dom"]
}), KISSY.add("dd", 
function(a, b, c, d, e, f, g, h) {
    return b = {
        Draggable: c,
        Droppable: d,
        DDM: b,
        Proxy: e,
        DraggableDelegate: f,
        DroppableDelegate: g,
        Scroll: h
    },
    a.mix(a, b),
    b
},
{
    requires: "dd/ddm,dd/draggable,dd/droppable,dd/proxy,dd/draggable-delegate,dd/droppable-delegate,dd/scroll".split(",")
});
