!function t(e, i, n) {
    function s(a, r) {
        if (!i[a]) {
            if (!e[a]) {
                var l = "function" == typeof require && require;
                if (!r && l)return l(a, !0);
                if (o)return o(a, !0);
                throw new Error("Cannot find module '" + a + "'")
            }
            var h = i[a] = {exports: {}};
            e[a][0].call(h.exports, function (t) {
                var i = e[a][1][t];
                return s(i ? i : t)
            }, h, h.exports, t, e, i, n)
        }
        return i[a].exports
    }

    for (var o = "function" == typeof require && require, a = 0; a < n.length; a++)s(n[a]);
    return s
}({
    1: [function () {
    }, {}],
    2: [function () {
        !function (t) {
            "use strict";
            function e(t) {
                var e = {};
                if (void 0 === t.selectionStart) {
                    t.focus();
                    var i = document.selection.createRange();
                    e.length = i.text.length, i.moveStart("character", -t.value.length), e.end = i.text.length, e.start = e.end - e.length
                } else e.start = t.selectionStart, e.end = t.selectionEnd, e.length = e.end - e.start;
                return e
            }

            function i(t, e, i) {
                if (void 0 === t.selectionStart) {
                    t.focus();
                    var n = t.createTextRange();
                    n.collapse(!0), n.moveEnd("character", i), n.moveStart("character", e), n.select()
                } else t.selectionStart = e, t.selectionEnd = i
            }

            function n(e, i) {
                t.each(i, function (t, n) {
                    "function" == typeof n ? i[t] = n(e, i, t) : "function" == typeof e.autoNumeric[n] && (i[t] = e.autoNumeric[n](e, i, t))
                })
            }

            function s(t, e) {
                "string" == typeof t[e] && (t[e] *= 1)
            }

            function o(t, e) {
                n(t, e), e.oEvent = null, e.tagList = ["b", "caption", "cite", "code", "dd", "del", "div", "dfn", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "ins", "kdb", "label", "li", "output", "p", "q", "s", "sample", "span", "strong", "td", "th", "u", "var"];
                var i = e.vMax.toString().split("."), o = e.vMin || 0 === e.vMin ? e.vMin.toString().split(".") : [];
                if (s(e, "vMax"), s(e, "vMin"), s(e, "mDec"), e.mDec = "CHF" === e.mRound ? "2" : e.mDec, e.allowLeading = !0, e.aNeg = e.vMin < 0 ? "-" : "", i[0] = i[0].replace("-", ""), o[0] = o[0].replace("-", ""), e.mInt = Math.max(i[0].length, o[0].length, 1), null === e.mDec) {
                    var a = 0, r = 0;
                    i[1] && (a = i[1].length), o[1] && (r = o[1].length), e.mDec = Math.max(a, r)
                }
                null === e.altDec && e.mDec > 0 && ("." === e.aDec && "," !== e.aSep ? e.altDec = "," : "," === e.aDec && "." !== e.aSep && (e.altDec = "."));
                var l = e.aNeg ? "([-\\" + e.aNeg + "]?)" : "(-?)";
                e.aNegRegAutoStrip = l, e.skipFirstAutoStrip = new RegExp(l + "[^-" + (e.aNeg ? "\\" + e.aNeg : "") + "\\" + e.aDec + "\\d].*?(\\d|\\" + e.aDec + "\\d)"), e.skipLastAutoStrip = new RegExp("(\\d\\" + e.aDec + "?)[^\\" + e.aDec + "\\d]\\D*$");
                var h = "-" + e.aNum + "\\" + e.aDec;
                return e.allowedAutoStrip = new RegExp("[^" + h + "]", "gi"), e.numRegAutoStrip = new RegExp(l + "(?:\\" + e.aDec + "?(\\d+\\" + e.aDec + "\\d+)|(\\d*(?:\\" + e.aDec + "\\d*)?))"), e
            }

            function a(t, e, i) {
                if (e.aSign)for (; t.indexOf(e.aSign) > -1;)t = t.replace(e.aSign, "");
                t = t.replace(e.skipFirstAutoStrip, "$1$2"), t = t.replace(e.skipLastAutoStrip, "$1"), t = t.replace(e.allowedAutoStrip, ""), e.altDec && (t = t.replace(e.altDec, e.aDec));
                var n = t.match(e.numRegAutoStrip);
                if (t = n ? [n[1], n[2], n[3]].join("") : "", ("allow" === e.lZero || "keep" === e.lZero) && "strip" !== i) {
                    var s = [], o = "";
                    s = t.split(e.aDec), -1 !== s[0].indexOf("-") && (o = "-", s[0] = s[0].replace("-", "")), s[0].length > e.mInt && "0" === s[0].charAt(0) && (s[0] = s[0].slice(1)), t = o + s.join(e.aDec)
                }
                if (i && "deny" === e.lZero || i && "allow" === e.lZero && e.allowLeading === !1) {
                    var a = "^" + e.aNegRegAutoStrip + "0*(\\d" + ("leading" === i ? ")" : "|$)");
                    a = new RegExp(a), t = t.replace(a, "$1$2")
                }
                return t
            }

            function r(t, e, i) {
                return e = e.split(","), "set" === i || "focusout" === i ? (t = t.replace("-", ""), t = e[0] + t + e[1]) : "get" !== i && "focusin" !== i && "pageLoad" !== i || t.charAt(0) !== e[0] || (t = t.replace(e[0], "-"), t = t.replace(e[1], "")), t
            }

            function l(t, e, i) {
                if (e && i) {
                    var n = t.split(e);
                    n[1] && n[1].length > i && (i > 0 ? (n[1] = n[1].substring(0, i), t = n.join(e)) : t = n[0])
                }
                return t
            }

            function h(t, e, i) {
                return e && "." !== e && (t = t.replace(e, ".")), i && "-" !== i && (t = t.replace(i, "-")), t.match(/\d/) || (t += "0"), t
            }

            function c(t, e) {
                if (t) {
                    var i = +t;
                    if (1e-6 > i && i > -1)t = +t, 1e-6 > t && t > 0 && (t = (t + 10).toString(), t = t.substring(1)), 0 > t && t > -1 && (t = (t - 10).toString(), t = "-" + t.substring(2)), t = t.toString(); else {
                        var n = t.split(".");
                        void 0 !== n[1] && (0 === +n[1] ? t = n[0] : (n[1] = n[1].replace(/0*$/, ""), t = n.join(".")))
                    }
                }
                return "keep" === e.lZero ? t : t.replace(/^0*(\d)/, "$1")
            }

            function d(t, e, i) {
                return i && "-" !== i && (t = t.replace("-", i)), e && "." !== e && (t = t.replace(".", e)), t
            }

            function u(e, i) {
                e = a(e, i), e = l(e, i.aDec, i.mDec), e = h(e, i.aDec, i.aNeg);
                var n = +e;
                return "set" === i.oEvent && (n < i.vMin || n > i.vMax) && t.error("The value (" + n + ") from the 'set' method falls outside of the vMin / vMax range"), n >= i.vMin && n <= i.vMax
            }

            function p(t, e, i) {
                return "" === t || t === e.aNeg ? "zero" === e.wEmpty ? t + "0" : "sign" === e.wEmpty || i ? t + e.aSign : t : null
            }

            function f(t, e) {
                t = a(t, e);
                var i = t.replace(",", "."), n = p(t, e, !0);
                if (null !== n)return n;
                var s = "";
                s = 2 === e.dGroup ? /(\d)((\d)(\d{2}?)+)$/ : 4 === e.dGroup ? /(\d)((\d{4}?)+)$/ : /(\d)((\d{3}?)+)$/;
                var o = t.split(e.aDec);
                e.altDec && 1 === o.length && (o = t.split(e.altDec));
                var l = o[0];
                if (e.aSep)for (; s.test(l);)l = l.replace(s, "$1" + e.aSep + "$2");
                if (0 !== e.mDec && o.length > 1 ? (o[1].length > e.mDec && (o[1] = o[1].substring(0, e.mDec)), t = l + e.aDec + o[1]) : t = l, e.aSign) {
                    var h = -1 !== t.indexOf(e.aNeg);
                    t = t.replace(e.aNeg, ""), t = "p" === e.pSign ? e.aSign + t : t + e.aSign, h && (t = e.aNeg + t)
                }
                return "set" === e.oEvent && 0 > i && null !== e.nBracket && (t = r(t, e.nBracket, e.oEvent)), t
            }

            function g(t, e) {
                t = "" === t ? "0" : t.toString(), s(e, "mDec"), "CHF" === e.mRound && (t = (Math.round(20 * t) / 20).toString());
                var i = "", n = 0, o = "", a = "boolean" == typeof e.aPad || null === e.aPad ? e.aPad ? e.mDec : 0 : +e.aPad, r = function (t) {
                    var e = 0 === a ? /(\.(?:\d*[1-9])?)0*$/ : 1 === a ? /(\.\d(?:\d*[1-9])?)0*$/ : new RegExp("(\\.\\d{" + a + "}(?:\\d*[1-9])?)0*$");
                    return t = t.replace(e, "$1"), 0 === a && (t = t.replace(/\.$/, "")), t
                };
                "-" === t.charAt(0) && (o = "-", t = t.replace("-", "")), t.match(/^\d/) || (t = "0" + t), "-" === o && 0 === +t && (o = ""), (+t > 0 && "keep" !== e.lZero || t.length > 0 && "allow" === e.lZero) && (t = t.replace(/^0*(\d)/, "$1"));
                var l = t.lastIndexOf("."), h = -1 === l ? t.length - 1 : l, c = t.length - 1 - h;
                if (c <= e.mDec) {
                    if (i = t, a > c) {
                        -1 === l && (i += ".");
                        for (var d = "000000"; a > c;)d = d.substring(0, a - c), i += d, c += d.length
                    } else c > a ? i = r(i) : 0 === c && 0 === a && (i = i.replace(/\.$/, ""));
                    if ("CHF" !== e.mRound)return 0 === +i ? i : o + i;
                    "CHF" === e.mRound && (l = i.lastIndexOf("."), t = i)
                }
                var u = l + e.mDec, p = +t.charAt(u + 1), f = t.substring(0, u + 1).split(""), g = "." === t.charAt(u) ? t.charAt(u - 1) % 2 : t.charAt(u) % 2, m = !0;
                if (1 !== g && (g = 0 === g && t.substring(u + 2, t.length) > 0 ? 1 : 0), p > 4 && "S" === e.mRound || p > 4 && "A" === e.mRound && "" === o || p > 5 && "A" === e.mRound && "-" === o || p > 5 && "s" === e.mRound || p > 5 && "a" === e.mRound && "" === o || p > 4 && "a" === e.mRound && "-" === o || p > 5 && "B" === e.mRound || 5 === p && "B" === e.mRound && 1 === g || p > 0 && "C" === e.mRound && "" === o || p > 0 && "F" === e.mRound && "-" === o || p > 0 && "U" === e.mRound || "CHF" === e.mRound)for (n = f.length - 1; n >= 0; n -= 1)if ("." !== f[n]) {
                    if ("CHF" === e.mRound && f[n] <= 2 && m) {
                        f[n] = 0, m = !1;
                        break
                    }
                    if ("CHF" === e.mRound && f[n] <= 7 && m) {
                        f[n] = 5, m = !1;
                        break
                    }
                    if ("CHF" === e.mRound && m ? (f[n] = 10, m = !1) : f[n] = +f[n] + 1, f[n] < 10)break;
                    n > 0 && (f[n] = "0")
                }
                return f = f.slice(0, u + 1), i = r(f.join("")), 0 === +i ? i : o + i
            }

            function m(e, i) {
                this.settings = i, this.that = e, this.$that = t(e), this.formatted = !1, this.settingsClone = o(this.$that, this.settings), this.value = e.value
            }

            function v(e) {
                return "string" == typeof e && (e = e.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), e = "#" + e.replace(/(:|\.)/g, "\\$1")), t(e)
            }

            function y(t, e, i) {
                var n = t.data("autoNumeric");
                n || (n = {}, t.data("autoNumeric", n));
                var s = n.holder;
                return (void 0 === s && e || i) && (s = new m(t.get(0), e), n.holder = s), s
            }

            m.prototype = {
                init: function (t) {
                    this.value = this.that.value, this.settingsClone = o(this.$that, this.settings), this.ctrlKey = t.ctrlKey, this.cmdKey = t.metaKey, this.shiftKey = t.shiftKey, this.selection = e(this.that), ("keydown" === t.type || "keyup" === t.type) && (this.kdCode = t.keyCode), this.which = t.which, this.processed = !1, this.formatted = !1
                }, setSelection: function (t, e, n) {
                    t = Math.max(t, 0), e = Math.min(e, this.that.value.length), this.selection = {
                        start: t,
                        end: e,
                        length: e - t
                    }, (void 0 === n || n) && i(this.that, t, e)
                }, setPosition: function (t, e) {
                    this.setSelection(t, t, e)
                }, getBeforeAfter: function () {
                    var t = this.value, e = t.substring(0, this.selection.start), i = t.substring(this.selection.end, t.length);
                    return [e, i]
                }, getBeforeAfterStriped: function () {
                    var t = this.getBeforeAfter();
                    return t[0] = a(t[0], this.settingsClone), t[1] = a(t[1], this.settingsClone), t
                }, normalizeParts: function (t, e) {
                    var i = this.settingsClone;
                    e = a(e, i);
                    var n = e.match(/^\d/) ? !0 : "leading";
                    t = a(t, i, n), "" !== t && t !== i.aNeg || "deny" !== i.lZero || e > "" && (e = e.replace(/^0*(\d)/, "$1"));
                    var s = t + e;
                    if (i.aDec) {
                        var o = s.match(new RegExp("^" + i.aNegRegAutoStrip + "\\" + i.aDec));
                        o && (t = t.replace(o[1], o[1] + "0"), s = t + e)
                    }
                    return "zero" !== i.wEmpty || s !== i.aNeg && "" !== s || (t += "0"), [t, e]
                }, setValueParts: function (t, e) {
                    var i = this.settingsClone, n = this.normalizeParts(t, e), s = n.join(""), o = n[0].length;
                    return u(s, i) ? (s = l(s, i.aDec, i.mDec), o > s.length && (o = s.length), this.value = s, this.setPosition(o, !1), !0) : !1
                }, signPosition: function () {
                    var t = this.settingsClone, e = t.aSign, i = this.that;
                    if (e) {
                        var n = e.length;
                        if ("p" === t.pSign) {
                            var s = t.aNeg && i.value && i.value.charAt(0) === t.aNeg;
                            return s ? [1, n + 1] : [0, n]
                        }
                        var o = i.value.length;
                        return [o - n, o]
                    }
                    return [1e3, -1]
                }, expandSelectionOnSign: function (t) {
                    var e = this.signPosition(), i = this.selection;
                    i.start < e[1] && i.end > e[0] && ((i.start < e[0] || i.end > e[1]) && this.value.substring(Math.max(i.start, e[0]), Math.min(i.end, e[1])).match(/^\s*$/) ? i.start < e[0] ? this.setSelection(i.start, e[0], t) : this.setSelection(e[1], i.end, t) : this.setSelection(Math.min(i.start, e[0]), Math.max(i.end, e[1]), t))
                }, checkPaste: function () {
                    if (void 0 !== this.valuePartsBeforePaste) {
                        var t = this.getBeforeAfter(), e = this.valuePartsBeforePaste;
                        delete this.valuePartsBeforePaste, t[0] = t[0].substr(0, e[0].length) + a(t[0].substr(e[0].length), this.settingsClone), this.setValueParts(t[0], t[1]) || (this.value = e.join(""), this.setPosition(e[0].length, !1))
                    }
                }, skipAllways: function (t) {
                    var e = this.kdCode, i = this.which, n = this.ctrlKey, s = this.cmdKey, o = this.shiftKey;
                    if ((n || s) && "keyup" === t.type && void 0 !== this.valuePartsBeforePaste || o && 45 === e)return this.checkPaste(), !1;
                    if (e >= 112 && 123 >= e || e >= 91 && 93 >= e || e >= 9 && 31 >= e || 8 > e && (0 === i || i === e) || 144 === e || 145 === e || 45 === e)return !0;
                    if ((n || s) && 65 === e)return !0;
                    if ((n || s) && (67 === e || 86 === e || 88 === e))return "keydown" === t.type && this.expandSelectionOnSign(), (86 === e || 45 === e) && ("keydown" === t.type || "keypress" === t.type ? void 0 === this.valuePartsBeforePaste && (this.valuePartsBeforePaste = this.getBeforeAfter()) : this.checkPaste()), "keydown" === t.type || "keypress" === t.type || 67 === e;
                    if (n || s)return !0;
                    if (37 === e || 39 === e) {
                        var a = this.settingsClone.aSep, r = this.selection.start, l = this.that.value;
                        return "keydown" === t.type && a && !this.shiftKey && (37 === e && l.charAt(r - 2) === a ? this.setPosition(r - 1) : 39 === e && l.charAt(r + 1) === a && this.setPosition(r + 1)), !0
                    }
                    return e >= 34 && 40 >= e ? !0 : !1
                }, processAllways: function () {
                    var t;
                    return 8 === this.kdCode || 46 === this.kdCode ? (this.selection.length ? (this.expandSelectionOnSign(!1), t = this.getBeforeAfterStriped(), this.setValueParts(t[0], t[1])) : (t = this.getBeforeAfterStriped(), 8 === this.kdCode ? t[0] = t[0].substring(0, t[0].length - 1) : t[1] = t[1].substring(1, t[1].length), this.setValueParts(t[0], t[1])), !0) : !1
                }, processKeypress: function () {
                    var t = this.settingsClone, e = String.fromCharCode(this.which), i = this.getBeforeAfterStriped(), n = i[0], s = i[1];
                    return e === t.aDec || t.altDec && e === t.altDec || ("." === e || "," === e) && 110 === this.kdCode ? t.mDec && t.aDec ? t.aNeg && s.indexOf(t.aNeg) > -1 ? !0 : n.indexOf(t.aDec) > -1 ? !0 : s.indexOf(t.aDec) > 0 ? !0 : (0 === s.indexOf(t.aDec) && (s = s.substr(1)), this.setValueParts(n + t.aDec, s), !0) : !0 : "-" === e || "+" === e ? t.aNeg ? ("" === n && s.indexOf(t.aNeg) > -1 && (n = t.aNeg, s = s.substring(1, s.length)), n = n.charAt(0) === t.aNeg ? n.substring(1, n.length) : "-" === e ? t.aNeg + n : n, this.setValueParts(n, s), !0) : !0 : e >= "0" && "9" >= e ? (t.aNeg && "" === n && s.indexOf(t.aNeg) > -1 && (n = t.aNeg, s = s.substring(1, s.length)), t.vMax <= 0 && t.vMin < t.vMax && -1 === this.value.indexOf(t.aNeg) && "0" !== e && (n = t.aNeg + n), this.setValueParts(n + e, s), !0) : !0
                }, formatQuick: function () {
                    var t = this.settingsClone, e = this.getBeforeAfterStriped(), i = this.value;
                    if (("" === t.aSep || "" !== t.aSep && -1 === i.indexOf(t.aSep)) && ("" === t.aSign || "" !== t.aSign && -1 === i.indexOf(t.aSign))) {
                        var n = [], s = "";
                        n = i.split(t.aDec), n[0].indexOf("-") > -1 && (s = "-", n[0] = n[0].replace("-", ""), e[0] = e[0].replace("-", "")), n[0].length > t.mInt && "0" === e[0].charAt(0) && (e[0] = e[0].slice(1)), e[0] = s + e[0]
                    }
                    var o = f(this.value, this.settingsClone), a = o.length;
                    if (o) {
                        var r = e[0].split(""), l = 0;
                        for (l; l < r.length; l += 1)r[l].match("\\d") || (r[l] = "\\" + r[l]);
                        var h = new RegExp("^.*?" + r.join(".*?")), c = o.match(h);
                        c ? (a = c[0].length, (0 === a && o.charAt(0) !== t.aNeg || 1 === a && o.charAt(0) === t.aNeg) && t.aSign && "p" === t.pSign && (a = this.settingsClone.aSign.length + ("-" === o.charAt(0) ? 1 : 0))) : t.aSign && "s" === t.pSign && (a -= t.aSign.length)
                    }
                    this.that.value = o, this.setPosition(a), this.formatted = !0
                }
            };
            var b = {
                init: function (e) {
                    return this.each(function () {
                        var n = t(this), s = n.data("autoNumeric"), o = n.data();
                        if ("object" == typeof s)return this;
                        if (s = t.extend({}, t.fn.autoNumeric.defaults, o, e), s.aDec === s.aSep)return t.error("autoNumeric will not function properly when the decimal character aDec: '" + s.aDec + "' and thousand separator aSep: '" + s.aSep + "' are the same character"), this;
                        n.data("autoNumeric", s), s.runOnce = !1;
                        var l = y(n, s);
                        if (-1 === t.inArray(n.prop("tagName").toLowerCase(), s.tagList) && "input" !== n.prop("tagName").toLowerCase())return t.error("The <" + n.prop("tagName").toLowerCase() + "> is not supported by autoNumeric()"), this;
                        if (s.runOnce === !1 && s.aForm) {
                            if (n.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])")) {
                                var c = !0;
                                "" === n[0].value && "empty" === s.wEmpty && (n[0].value = "", c = !1), "" === n[0].value && "sign" === s.wEmpty && (n[0].value = s.aSign, c = !1), c && -1 === n[0].value.indexOf(s.aSep) && n.autoNumeric("set", n.val())
                            }
                            -1 !== t.inArray(n.prop("tagName").toLowerCase(), s.tagList) && "" !== n.text() && n.autoNumeric("set", n.text())
                        }
                        s.runOnce = !0, n.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])") && (n.on("keydown.autoNumeric", function (e) {
                            return l = y(n), l.settings.aDec === l.settings.aSep ? (t.error("autoNumeric will not function properly when the decimal character aDec: '" + l.settings.aDec + "' and thousand separator aSep: '" + l.settings.aSep + "' are the same character"), this) : l.that.readOnly ? (l.processed = !0, !0) : (l.init(e), l.settings.oEvent = "keydown", l.skipAllways(e) ? (l.processed = !0, !0) : l.processAllways() ? (l.processed = !0, l.formatQuick(), e.preventDefault(), !1) : (l.formatted = !1, !0))
                        }), n.on("keypress.autoNumeric", function (t) {
                            var e = y(n), i = e.processed;
                            return e.init(t), e.settings.oEvent = "keypress", e.skipAllways(t) ? !0 : i ? (t.preventDefault(), !1) : e.processAllways() || e.processKeypress() ? (e.formatQuick(), t.preventDefault(), !1) : (e.formatted = !1, void 0)
                        }), n.on("keyup.autoNumeric", function (t) {
                            var e = y(n);
                            e.init(t), e.settings.oEvent = "keyup";
                            var s = e.skipAllways(t);
                            return e.kdCode = 0, delete e.valuePartsBeforePaste, n[0].value === e.settings.aSign && ("s" === e.settings.pSign ? i(this, 0, 0) : i(this, e.settings.aSign.length, e.settings.aSign.length)), s ? !0 : "" === this.value ? !0 : (e.formatted || e.formatQuick(), void 0)
                        }), n.on("focusin.autoNumeric", function () {
                            var t = y(n);
                            if (t.settingsClone.oEvent = "focusin", null !== t.settingsClone.nBracket) {
                                var e = n.val();
                                n.val(r(e, t.settingsClone.nBracket, t.settingsClone.oEvent))
                            }
                            t.inVal = n.val();
                            var s = p(t.inVal, t.settingsClone, !0);
                            null !== s && (n.val(s), "s" === t.settings.pSign ? i(this, 0, 0) : i(this, t.settings.aSign.length, t.settings.aSign.length))
                        }), n.on("focusout.autoNumeric", function () {
                            var t = y(n), e = t.settingsClone, i = n.val(), s = i;
                            t.settingsClone.oEvent = "focusout";
                            var o = "";
                            "allow" === e.lZero && (e.allowLeading = !1, o = "leading"), "" !== i && (i = a(i, e, o), null === p(i, e) && u(i, e, n[0]) ? (i = h(i, e.aDec, e.aNeg), i = g(i, e), i = d(i, e.aDec, e.aNeg)) : i = "");
                            var l = p(i, e, !1);
                            null === l && (l = f(i, e)), l !== s && n.val(l), l !== t.inVal && (n.change(), delete t.inVal), null !== e.nBracket && n.autoNumeric("get") < 0 && (t.settingsClone.oEvent = "focusout", n.val(r(n.val(), e.nBracket, e.oEvent)))
                        }))
                    })
                }, destroy: function () {
                    return t(this).each(function () {
                        var e = t(this);
                        e.off(".autoNumeric"), e.removeData("autoNumeric")
                    })
                }, update: function (e) {
                    return t(this).each(function () {
                        var i = v(t(this)), n = i.data("autoNumeric");
                        if ("object" != typeof n)return t.error("You must initialize autoNumeric('init', {options}) prior to calling the 'update' method"), this;
                        var s = i.autoNumeric("get");
                        return n = t.extend(n, e), y(i, n, !0), n.aDec === n.aSep ? (t.error("autoNumeric will not function properly when the decimal character aDec: '" + n.aDec + "' and thousand separator aSep: '" + n.aSep + "' are the same character"), this) : (i.data("autoNumeric", n), "" !== i.val() || "" !== i.text() ? i.autoNumeric("set", s) : void 0)
                    })
                }, set: function (e) {
                    return null !== e ? t(this).each(function () {
                        var i = v(t(this)), n = i.data("autoNumeric"), s = e.toString(), o = e.toString();
                        return "object" != typeof n ? (t.error("You must initialize autoNumeric('init', {options}) prior to calling the 'set' method"), this) : (o !== i.attr("value") && "input" === i.prop("tagName").toLowerCase() && n.runOnce === !1 && (s = null !== n.nBracket ? r(i.val(), n.nBracket, "pageLoad") : s, s = a(s, n)), o !== i.attr("value") && o !== i.text() || n.runOnce !== !1 || (s = s.replace(",", ".")), t.isNumeric(+s) ? (s = c(s, n), n.oEvent = "set", s.toString(), "" !== s && (s = g(s, n)), s = d(s, n.aDec, n.aNeg), u(s, n) || (s = g("", n)), s = f(s, n), i.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])") ? i.val(s) : -1 !== t.inArray(i.prop("tagName").toLowerCase(), n.tagList) ? i.text(s) : (t.error("The <" + i.prop("tagName").toLowerCase() + "> is not supported by autoNumeric()"), !1)) : "")
                    }) : void 0
                }, get: function () {
                    var e = v(t(this)), i = e.data("autoNumeric");
                    if ("object" != typeof i)return t.error("You must initialize autoNumeric('init', {options}) prior to calling the 'get' method"), this;
                    i.oEvent = "get";
                    var n = "";
                    if (e.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])"))n = e.eq(0).val(); else {
                        if (-1 === t.inArray(e.prop("tagName").toLowerCase(), i.tagList))return t.error("The <" + e.prop("tagName").toLowerCase() + "> is not supported by autoNumeric()"), !1;
                        n = e.eq(0).text()
                    }
                    return "" === n && "empty" === i.wEmpty || n === i.aSign && ("sign" === i.wEmpty || "empty" === i.wEmpty) ? "" : (null !== i.nBracket && "" !== n && (n = r(n, i.nBracket, i.oEvent)), (i.runOnce || i.aForm === !1) && (n = a(n, i)), n = h(n, i.aDec, i.aNeg), 0 === +n && "keep" !== i.lZero && (n = "0"), "keep" === i.lZero ? n : n = c(n, i))
                }, getString: function () {
                    var e = !1, i = v(t(this)), n = i.serialize(), s = n.split("&"), o = t("form").index(i), a = 0;
                    for (a; a < s.length; a += 1) {
                        var r = s[a].split("="), l = t("form:eq(" + o + ') input[name="' + decodeURIComponent(r[0]) + '"]'), h = l.data("autoNumeric");
                        "object" == typeof h && null !== r[1] && (r[1] = l.autoNumeric("get"), s[a] = r.join("="), e = !0)
                    }
                    return e === !0 ? s.join("&") : n
                }, getArray: function () {
                    var e = !1, i = v(t(this)), n = i.serializeArray(), s = t("form").index(i);
                    return t.each(n, function (i, n) {
                        var o = t("form:eq(" + s + ') input[name="' + decodeURIComponent(n.name) + '"]'), a = o.data("autoNumeric");
                        "object" == typeof a && ("" !== n.value && (n.value = o.autoNumeric("get").toString()), e = !0)
                    }), e === !0 ? n : this
                }, getSettings: function () {
                    var e = v(t(this));
                    return e.eq(0).data("autoNumeric")
                }
            };
            t.fn.autoNumeric = function (e) {
                return b[e] ? b[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error('Method "' + e + '" is not supported by autoNumeric()'), void 0) : b.init.apply(this, arguments)
            }, t.fn.autoNumeric.defaults = {
                aNum: "0123456789",
                aSep: ",",
                dGroup: "3",
                aDec: ".",
                altDec: null,
                aSign: "",
                pSign: "p",
                vMax: "9999999999999.99",
                vMin: "0.00",
                mDec: null,
                mRound: "S",
                aPad: !0,
                nBracket: null,
                wEmpty: "empty",
                lZero: "allow",
                aForm: !0,
                onSomeEvent: function () {
                }
            }
        }(jQuery)
    }, {}],
    3: [function () {
        !function (t) {
            function e(t) {
                this.init(t)
            }

            e.prototype = {
                value: 0,
                size: 100,
                startAngle: -Math.PI,
                thickness: "auto",
                fill: {gradient: ["#3aeabb", "#fdd250"]},
                emptyFill: "rgba(0, 0, 0, .1)",
                animation: {duration: 1200, easing: "circleProgressEasing"},
                animationStartValue: 0,
                reverse: !1,
                lineCap: "butt",
                constructor: e,
                el: null,
                canvas: null,
                ctx: null,
                radius: 0,
                arcFill: null,
                lastFrameValue: 0,
                init: function (e) {
                    t.extend(this, e), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw()
                },
                initWidget: function () {
                    var e = this.canvas = this.canvas || t("<canvas>").prependTo(this.el)[0];
                    e.width = this.size, e.height = this.size, this.ctx = e.getContext("2d")
                },
                initFill: function () {
                    function e() {
                        var e = t("<canvas>")[0];
                        e.width = i.size, e.height = i.size, e.getContext("2d").drawImage(p, 0, 0, o, o), i.arcFill = i.ctx.createPattern(e, "no-repeat"), i.drawFrame(i.lastFrameValue)
                    }

                    var i = this, n = this.fill, s = this.ctx, o = this.size;
                    if (!n)throw Error("The fill is not specified!");
                    if (n.color && (this.arcFill = n.color), n.gradient) {
                        var a = n.gradient;
                        if (1 == a.length)this.arcFill = a[0]; else if (a.length > 1) {
                            for (var r = n.gradientAngle || 0, l = n.gradientDirection || [o / 2 * (1 - Math.cos(r)), o / 2 * (1 + Math.sin(r)), o / 2 * (1 + Math.cos(r)), o / 2 * (1 - Math.sin(r))], h = s.createLinearGradient.apply(s, l), c = 0; c < a.length; c++) {
                                var d = a[c], u = c / (a.length - 1);
                                t.isArray(d) && (u = d[1], d = d[0]), h.addColorStop(u, d)
                            }
                            this.arcFill = h
                        }
                    }
                    if (n.image) {
                        var p;
                        n.image instanceof Image ? p = n.image : (p = new Image, p.src = n.image), p.complete ? e() : p.onload = e
                    }
                },
                draw: function () {
                    this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
                },
                drawFrame: function (t) {
                    this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t)
                },
                drawArc: function (t) {
                    var e = this.ctx, i = this.radius, n = this.getThickness(), s = this.startAngle;
                    e.save(), e.beginPath(), this.reverse ? e.arc(i, i, i - n / 2, s - 2 * Math.PI * t, s) : e.arc(i, i, i - n / 2, s, s + 2 * Math.PI * t), e.lineWidth = n, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore()
                },
                drawEmptyArc: function (t) {
                    var e = this.ctx, i = this.radius, n = this.getThickness(), s = this.startAngle;
                    1 > t && (e.save(), e.beginPath(), 0 >= t ? e.arc(i, i, i - n / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - n / 2, s, s - 2 * Math.PI * t) : e.arc(i, i, i - n / 2, s + 2 * Math.PI * t, s), e.lineWidth = n, e.strokeStyle = this.emptyFill, e.stroke(), e.restore())
                },
                drawAnimated: function (e) {
                    var i = this, n = this.el;
                    n.trigger("circle-animation-start"), t(this.canvas).stop(!0, !0).css({animationProgress: 0}).animate({animationProgress: 1}, t.extend({}, this.animation, {
                        step: function (t) {
                            var s = i.animationStartValue * (1 - t) + e * t;
                            i.drawFrame(s), n.trigger("circle-animation-progress", [t, s])
                        }, complete: function () {
                            n.trigger("circle-animation-end")
                        }
                    }))
                },
                getThickness: function () {
                    return t.isNumeric(this.thickness) ? this.thickness : this.size / 14
                }
            }, t.circleProgress = {defaults: e.prototype}, t.easing.circleProgressEasing = function (t, e, i, n, s) {
                return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
            }, t.fn.circleProgress = function (i) {
                var n = "circle-progress";
                if ("widget" == i) {
                    var s = this.data(n);
                    return s && s.canvas
                }
                return this.each(function () {
                    var s = t(this), o = s.data(n), a = t.isPlainObject(i) ? i : {};
                    o ? o.init(a) : (a.el = s, o = new e(a), s.data(n, o))
                })
            }
        }(jQuery)
    }, {}],
    4: [function (t, e) {
        !function () {
            "use strict";
            /**
             * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
             *
             * @codingstandard ftlabs-jsv2
             * @copyright The Financial Times Limited [All Rights Reserved]
             * @license MIT License (see LICENSE.txt)
             */
            function t(e, i) {
                function s(t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }

                var o;
                if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = e, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !t.notNeeded(e)) {
                    for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, l = 0, h = a.length; h > l; l++)r[a[l]] = s(r[a[l]], r);
                    n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, i, n) {
                        var s = Node.prototype.removeEventListener;
                        "click" === t ? s.call(e, t, i.hijacked || i, n) : s.call(e, t, i, n)
                    }, e.addEventListener = function (t, i, n) {
                        var s = Node.prototype.addEventListener;
                        "click" === t ? s.call(e, t, i.hijacked || (i.hijacked = function (t) {
                            t.propagationStopped || i(t)
                        }), n) : s.call(e, t, i, n)
                    }), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function (t) {
                        o(t)
                    }, !1), e.onclick = null)
                }
            }

            var i = navigator.userAgent.indexOf("Windows Phone") >= 0, n = navigator.userAgent.indexOf("Android") > 0 && !i, s = /iP(ad|hone|od)/.test(navigator.userAgent) && !i, o = s && /OS 4_\d(_\d)?/.test(navigator.userAgent), a = s && /OS [6-7]_\d/.test(navigator.userAgent), r = navigator.userAgent.indexOf("BB10") > 0;
            t.prototype.needsClick = function (t) {
                switch (t.nodeName.toLowerCase()) {
                    case"button":
                    case"select":
                    case"textarea":
                        if (t.disabled)return !0;
                        break;
                    case"input":
                        if (s && "file" === t.type || t.disabled)return !0;
                        break;
                    case"label":
                    case"iframe":
                    case"video":
                        return !0
                }
                return /\bneedsclick\b/.test(t.className)
            }, t.prototype.needsFocus = function (t) {
                switch (t.nodeName.toLowerCase()) {
                    case"textarea":
                        return !0;
                    case"select":
                        return !n;
                    case"input":
                        switch (t.type) {
                            case"button":
                            case"checkbox":
                            case"file":
                            case"image":
                            case"radio":
                            case"submit":
                                return !1
                        }
                        return !t.disabled && !t.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(t.className)
                }
            }, t.prototype.sendClick = function (t, e) {
                var i, n;
                document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
            }, t.prototype.determineEventType = function (t) {
                return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
            }, t.prototype.focus = function (t) {
                var e;
                s && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
            }, t.prototype.updateScrollParent = function (t) {
                var e, i;
                if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                    i = t;
                    do {
                        if (i.scrollHeight > i.offsetHeight) {
                            e = i, t.fastClickScrollParent = i;
                            break
                        }
                        i = i.parentElement
                    } while (i)
                }
                e && (e.fastClickLastScrollTop = e.scrollTop)
            }, t.prototype.getTargetElementFromEventTarget = function (t) {
                return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
            }, t.prototype.onTouchStart = function (t) {
                var e, i, n;
                if (t.targetTouches.length > 1)return !0;
                if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], s) {
                    if (n = window.getSelection(), n.rangeCount && !n.isCollapsed)return !0;
                    if (!o) {
                        if (i.identifier && i.identifier === this.lastTouchIdentifier)return t.preventDefault(), !1;
                        this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
            }, t.prototype.touchHasMoved = function (t) {
                var e = t.changedTouches[0], i = this.touchBoundary;
                return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i ? !0 : !1
            }, t.prototype.onTouchMove = function (t) {
                return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
            }, t.prototype.findControl = function (t) {
                return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }, t.prototype.onTouchEnd = function (t) {
                var e, i, r, l, h, c = this.targetElement;
                if (!this.trackingClick)return !0;
                if (t.timeStamp - this.lastClickTime < this.tapDelay)return this.cancelNextClick = !0, !0;
                if (t.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
                if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (h = t.changedTouches[0], c = document.elementFromPoint(h.pageX - window.pageXOffset, h.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = c.tagName.toLowerCase(), "label" === r) {
                    if (e = this.findControl(c)) {
                        if (this.focus(c), n)return !1;
                        c = e
                    }
                } else if (this.needsFocus(c))return t.timeStamp - i > 100 || s && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), s && "select" === r || (this.targetElement = null, t.preventDefault()), !1);
                return s && !o && (l = c.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
            }, t.prototype.onTouchCancel = function () {
                this.trackingClick = !1, this.targetElement = null
            }, t.prototype.onMouse = function (t) {
                return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0 : !0
            }, t.prototype.onClick = function (t) {
                var e;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
            }, t.prototype.destroy = function () {
                var t = this.layer;
                n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, t.notNeeded = function (t) {
                var e, i, s, o;
                if ("undefined" == typeof window.ontouchstart)return !0;
                if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!n)return !0;
                    if (e = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== e.content.indexOf("user-scalable=no"))return !0;
                        if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth)return !0
                    }
                }
                if (r && (s = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), s[1] >= 10 && s[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                    if (-1 !== e.content.indexOf("user-scalable=no"))return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth)return !0
                }
                return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
            }, t.attach = function (e, i) {
                return new t(e, i)
            }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
                return t
            }) : "undefined" != typeof e && e.exports ? (e.exports = t.attach, e.exports.FastClick = t) : window.FastClick = t
        }()
    }, {}],
    5: [function (t, e) {/*!
     * jQuery JavaScript Library v1.11.2
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-12-17T15:27Z
     */
        !function (t, i) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function (t) {
                if (!t.document)throw new Error("jQuery requires a window with a document");
                return i(t)
            } : i(t)
        }("undefined" != typeof window ? window : this, function (t, e) {
            function i(t) {
                var e = t.length, i = se.type(t);
                return "function" === i || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
            }

            function n(t, e, i) {
                if (se.isFunction(e))return se.grep(t, function (t, n) {
                    return !!e.call(t, n, t) !== i
                });
                if (e.nodeType)return se.grep(t, function (t) {
                    return t === e !== i
                });
                if ("string" == typeof e) {
                    if (ue.test(e))return se.filter(e, t, i);
                    e = se.filter(e, t)
                }
                return se.grep(t, function (t) {
                    return se.inArray(t, e) >= 0 !== i
                })
            }

            function s(t, e) {
                do t = t[e]; while (t && 1 !== t.nodeType);
                return t
            }

            function o(t) {
                var e = xe[t] = {};
                return se.each(t.match(be) || [], function (t, i) {
                    e[i] = !0
                }), e
            }

            function a() {
                fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (fe.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
            }

            function r() {
                (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), se.ready())
            }

            function l(t, e, i) {
                if (void 0 === i && 1 === t.nodeType) {
                    var n = "data-" + e.replace(Te, "-$1").toLowerCase();
                    if (i = t.getAttribute(n), "string" == typeof i) {
                        try {
                            i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Pe.test(i) ? se.parseJSON(i) : i
                        } catch (s) {
                        }
                        se.data(t, e, i)
                    } else i = void 0
                }
                return i
            }

            function h(t) {
                var e;
                for (e in t)if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
                return !0
            }

            function c(t, e, i, n) {
                if (se.acceptData(t)) {
                    var s, o, a = se.expando, r = t.nodeType, l = r ? se.cache : t, h = r ? t[a] : t[a] && a;
                    if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e)return h || (h = r ? t[a] = Y.pop() || se.guid++ : a), l[h] || (l[h] = r ? {} : {toJSON: se.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[h] = se.extend(l[h], e) : l[h].data = se.extend(l[h].data, e)), o = l[h], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[se.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[se.camelCase(e)])) : s = o, s
                }
            }

            function d(t, e, i) {
                if (se.acceptData(t)) {
                    var n, s, o = t.nodeType, a = o ? se.cache : t, r = o ? t[se.expando] : se.expando;
                    if (a[r]) {
                        if (e && (n = i ? a[r] : a[r].data)) {
                            se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in n ? e = [e] : (e = se.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                            for (; s--;)delete n[e[s]];
                            if (i ? !h(n) : !se.isEmptyObject(n))return
                        }
                        (i || (delete a[r].data, h(a[r]))) && (o ? se.cleanData([t], !0) : ie.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
                    }
                }
            }

            function u() {
                return !0
            }

            function p() {
                return !1
            }

            function f() {
                try {
                    return fe.activeElement
                } catch (t) {
                }
            }

            function g(t) {
                var e = Le.split("|"), i = t.createDocumentFragment();
                if (i.createElement)for (; e.length;)i.createElement(e.pop());
                return i
            }

            function m(t, e) {
                var i, n, s = 0, o = typeof t.getElementsByTagName !== Se ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Se ? t.querySelectorAll(e || "*") : void 0;
                if (!o)for (o = [], i = t.childNodes || t; null != (n = i[s]); s++)!e || se.nodeName(n, e) ? o.push(n) : se.merge(o, m(n, e));
                return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], o) : o
            }

            function v(t) {
                Ae.test(t.type) && (t.defaultChecked = t.checked)
            }

            function y(t, e) {
                return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function b(t) {
                return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type, t
            }

            function x(t) {
                var e = Xe.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function w(t, e) {
                for (var i, n = 0; null != (i = t[n]); n++)se._data(i, "globalEval", !e || se._data(e[n], "globalEval"))
            }

            function C(t, e) {
                if (1 === e.nodeType && se.hasData(t)) {
                    var i, n, s, o = se._data(t), a = se._data(e, o), r = o.events;
                    if (r) {
                        delete a.handle, a.events = {};
                        for (i in r)for (n = 0, s = r[i].length; s > n; n++)se.event.add(e, i, r[i][n])
                    }
                    a.data && (a.data = se.extend({}, a.data))
                }
            }

            function S(t, e) {
                var i, n, s;
                if (1 === e.nodeType) {
                    if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                        s = se._data(e);
                        for (n in s.events)se.removeEvent(e, n, s.handle);
                        e.removeAttribute(se.expando)
                    }
                    "script" === i && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
                }
            }

            function P(e, i) {
                var n, s = se(i.createElement(e)).appendTo(i.body), o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : se.css(s[0], "display");
                return s.detach(), o
            }

            function T(t) {
                var e = fe, i = Je[t];
                return i || (i = P(t, e), "none" !== i && i || (Ke = (Ke || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ke[0].contentWindow || Ke[0].contentDocument).document, e.write(), e.close(), i = P(t, e), Ke.detach()), Je[t] = i), i
            }

            function M(t, e) {
                return {
                    get: function () {
                        var i = t();
                        if (null != i)return i ? (delete this.get, void 0) : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function k(t, e) {
                if (e in t)return e;
                for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = ui.length; s--;)if (e = ui[s] + i, e in t)return e;
                return n
            }

            function I(t, e) {
                for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++)n = t[a], n.style && (o[a] = se._data(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ie(n) && (o[a] = se._data(n, "olddisplay", T(n.nodeName)))) : (s = Ie(n), (i && "none" !== i || !s) && se._data(n, "olddisplay", s ? i : se.css(n, "display"))));
                for (a = 0; r > a; a++)n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
                return t
            }

            function _(t, e, i) {
                var n = li.exec(e);
                return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
            }

            function A(t, e, i, n, s) {
                for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === i && (a += se.css(t, i + ke[o], !0, s)), n ? ("content" === i && (a -= se.css(t, "padding" + ke[o], !0, s)), "margin" !== i && (a -= se.css(t, "border" + ke[o] + "Width", !0, s))) : (a += se.css(t, "padding" + ke[o], !0, s), "padding" !== i && (a += se.css(t, "border" + ke[o] + "Width", !0, s)));
                return a
            }

            function E(t, e, i) {
                var n = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, o = ti(t), a = ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, o);
                if (0 >= s || null == s) {
                    if (s = ei(t, e, o), (0 > s || null == s) && (s = t.style[e]), ni.test(s))return s;
                    n = a && (ie.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
                }
                return s + A(t, e, i || (a ? "border" : "content"), n, o) + "px"
            }

            function O(t, e, i, n, s) {
                return new O.prototype.init(t, e, i, n, s)
            }

            function $() {
                return setTimeout(function () {
                    pi = void 0
                }), pi = se.now()
            }

            function D(t, e) {
                var i, n = {height: t}, s = 0;
                for (e = e ? 1 : 0; 4 > s; s += 2 - e)i = ke[s], n["margin" + i] = n["padding" + i] = t;
                return e && (n.opacity = n.width = t), n
            }

            function N(t, e, i) {
                for (var n, s = (bi[e] || []).concat(bi["*"]), o = 0, a = s.length; a > o; o++)if (n = s[o].call(i, e, t))return n
            }

            function L(t, e, i) {
                var n, s, o, a, r, l, h, c, d = this, u = {}, p = t.style, f = t.nodeType && Ie(t), g = se._data(t, "fxshow");
                i.queue || (r = se._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function () {
                    r.unqueued || l()
                }), r.unqueued++, d.always(function () {
                    d.always(function () {
                        r.unqueued--, se.queue(t, "fx").length || r.empty.fire()
                    })
                })), 1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = se.css(t, "display"), c = "none" === h ? se._data(t, "olddisplay") || T(t.nodeName) : h, "inline" === c && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || d.always(function () {
                    p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                }));
                for (n in e)if (s = e[n], gi.exec(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n])continue;
                        f = !0
                    }
                    u[n] = g && g[n] || se.style(t, n)
                } else h = void 0;
                if (se.isEmptyObject(u))"inline" === ("none" === h ? T(t.nodeName) : h) && (p.display = h); else {
                    g ? "hidden"in g && (f = g.hidden) : g = se._data(t, "fxshow", {}), o && (g.hidden = !f), f ? se(t).show() : d.done(function () {
                        se(t).hide()
                    }), d.done(function () {
                        var e;
                        se._removeData(t, "fxshow");
                        for (e in u)se.style(t, e, u[e])
                    });
                    for (n in u)a = N(f ? g[n] : 0, n, d), n in g || (g[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
                }
            }

            function z(t, e) {
                var i, n, s, o, a;
                for (i in t)if (n = se.camelCase(i), s = e[n], o = t[i], se.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = se.cssHooks[n], a && "expand"in a) {
                    o = a.expand(o), delete t[n];
                    for (i in o)i in t || (t[i] = o[i], e[i] = s)
                } else e[n] = s
            }

            function W(t, e, i) {
                var n, s, o = 0, a = yi.length, r = se.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (s)return !1;
                    for (var e = pi || $(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, a = 0, l = h.tweens.length; l > a; a++)h.tweens[a].run(o);
                    return r.notifyWith(t, [h, o, i]), 1 > o && l ? i : (r.resolveWith(t, [h]), !1)
                }, h = r.promise({
                    elem: t,
                    props: se.extend({}, e),
                    opts: se.extend(!0, {specialEasing: {}}, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: pi || $(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = se.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function (e) {
                        var i = 0, n = e ? h.tweens.length : 0;
                        if (s)return this;
                        for (s = !0; n > i; i++)h.tweens[i].run(1);
                        return e ? r.resolveWith(t, [h, e]) : r.rejectWith(t, [h, e]), this
                    }
                }), c = h.props;
                for (z(c, h.opts.specialEasing); a > o; o++)if (n = yi[o].call(h, t, c, h.opts))return n;
                return se.map(c, N, h), se.isFunction(h.opts.start) && h.opts.start.call(t, h), se.fx.timer(se.extend(l, {
                    elem: t,
                    anim: h,
                    queue: h.opts.queue
                })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
            }

            function H(t) {
                return function (e, i) {
                    "string" != typeof e && (i = e, e = "*");
                    var n, s = 0, o = e.toLowerCase().match(be) || [];
                    if (se.isFunction(i))for (; n = o[s++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                }
            }

            function B(t, e, i, n) {
                function s(r) {
                    var l;
                    return o[r] = !0, se.each(t[r] || [], function (t, r) {
                        var h = r(e, i, n);
                        return "string" != typeof h || a || o[h] ? a ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
                    }), l
                }

                var o = {}, a = t === Ui;
                return s(e.dataTypes[0]) || !o["*"] && s("*")
            }

            function F(t, e) {
                var i, n, s = se.ajaxSettings.flatOptions || {};
                for (n in e)void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
                return i && se.extend(!0, t, i), t
            }

            function j(t, e, i) {
                for (var n, s, o, a, r = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                if (s)for (a in r)if (r[a] && r[a].test(s)) {
                    l.unshift(a);
                    break
                }
                if (l[0]in i)o = l[0]; else {
                    for (a in i) {
                        if (!l[0] || t.converters[a + " " + l[0]]) {
                            o = a;
                            break
                        }
                        n || (n = a)
                    }
                    o = o || n
                }
                return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
            }

            function U(t, e, i, n) {
                var s, o, a, r, l, h = {}, c = t.dataTypes.slice();
                if (c[1])for (a in t.converters)h[a.toLowerCase()] = t.converters[a];
                for (o = c.shift(); o;)if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
                    if (a = h[l + " " + o] || h["* " + o], !a)for (s in h)if (r = s.split(" "), r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                        a === !0 ? a = h[s] : h[s] !== !0 && (o = r[0], c.unshift(r[1]));
                        break
                    }
                    if (a !== !0)if (a && t["throws"])e = a(e); else try {
                        e = a(e)
                    } catch (d) {
                        return {state: "parsererror", error: a ? d : "No conversion from " + l + " to " + o}
                    }
                }
                return {state: "success", data: e}
            }

            function R(t, e, i, n) {
                var s;
                if (se.isArray(e))se.each(e, function (e, s) {
                    i || Xi.test(t) ? n(t, s) : R(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
                }); else if (i || "object" !== se.type(e))n(t, e); else for (s in e)R(t + "[" + s + "]", e[s], i, n)
            }

            function V() {
                try {
                    return new t.XMLHttpRequest
                } catch (e) {
                }
            }

            function q() {
                try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }

            function X(t) {
                return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
            }

            var Y = [], G = Y.slice, Z = Y.concat, Q = Y.push, K = Y.indexOf, J = {}, te = J.toString, ee = J.hasOwnProperty, ie = {}, ne = "1.11.2", se = function (t, e) {
                return new se.fn.init(t, e)
            }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, re = /-([\da-z])/gi, le = function (t, e) {
                return e.toUpperCase()
            };
            se.fn = se.prototype = {
                jquery: ne, constructor: se, selector: "", length: 0, toArray: function () {
                    return G.call(this)
                }, get: function (t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
                }, pushStack: function (t) {
                    var e = se.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                }, each: function (t, e) {
                    return se.each(this, t, e)
                }, map: function (t) {
                    return this.pushStack(se.map(this, function (e, i) {
                        return t.call(e, i, e)
                    }))
                }, slice: function () {
                    return this.pushStack(G.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (t) {
                    var e = this.length, i = +t + (0 > t ? e : 0);
                    return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: Q, sort: Y.sort, splice: Y.splice
            }, se.extend = se.fn.extend = function () {
                var t, e, i, n, s, o, a = arguments[0] || {}, r = 1, l = arguments.length, h = !1;
                for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || se.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)if (null != (s = arguments[r]))for (n in s)t = a[n], i = s[n], a !== i && (h && i && (se.isPlainObject(i) || (e = se.isArray(i))) ? (e ? (e = !1, o = t && se.isArray(t) ? t : []) : o = t && se.isPlainObject(t) ? t : {}, a[n] = se.extend(h, o, i)) : void 0 !== i && (a[n] = i));
                return a
            }, se.extend({
                expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () {
                },
                isFunction: function (t) {
                    return "function" === se.type(t)
                },
                isArray: Array.isArray || function (t) {
                    return "array" === se.type(t)
                },
                isWindow: function (t) {
                    return null != t && t == t.window
                },
                isNumeric: function (t) {
                    return !se.isArray(t) && t - parseFloat(t) + 1 >= 0
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t)return !1;
                    return !0
                },
                isPlainObject: function (t) {
                    var e;
                    if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t))return !1;
                    try {
                        if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return !1
                    } catch (i) {
                        return !1
                    }
                    if (ie.ownLast)for (e in t)return ee.call(t, e);
                    for (e in t);
                    return void 0 === e || ee.call(t, e)
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[te.call(t)] || "object" : typeof t
                },
                globalEval: function (e) {
                    e && se.trim(e) && (t.execScript || function (e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function (t) {
                    return t.replace(ae, "ms-").replace(re, le)
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function (t, e, n) {
                    var s, o = 0, a = t.length, r = i(t);
                    if (n) {
                        if (r)for (; a > o && (s = e.apply(t[o], n), s !== !1); o++); else for (o in t)if (s = e.apply(t[o], n), s === !1)break
                    } else if (r)for (; a > o && (s = e.call(t[o], o, t[o]), s !== !1); o++); else for (o in t)if (s = e.call(t[o], o, t[o]), s === !1)break;
                    return t
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(oe, "")
                },
                makeArray: function (t, e) {
                    var n = e || [];
                    return null != t && (i(Object(t)) ? se.merge(n, "string" == typeof t ? [t] : t) : Q.call(n, t)), n
                },
                inArray: function (t, e, i) {
                    var n;
                    if (e) {
                        if (K)return K.call(e, t, i);
                        for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in e && e[i] === t)return i
                    }
                    return -1
                },
                merge: function (t, e) {
                    for (var i = +e.length, n = 0, s = t.length; i > n;)t[s++] = e[n++];
                    if (i !== i)for (; void 0 !== e[n];)t[s++] = e[n++];
                    return t.length = s, t
                },
                grep: function (t, e, i) {
                    for (var n, s = [], o = 0, a = t.length, r = !i; a > o; o++)n = !e(t[o], o), n !== r && s.push(t[o]);
                    return s
                },
                map: function (t, e, n) {
                    var s, o = 0, a = t.length, r = i(t), l = [];
                    if (r)for (; a > o; o++)s = e(t[o], o, n), null != s && l.push(s); else for (o in t)s = e(t[o], o, n), null != s && l.push(s);
                    return Z.apply([], l)
                },
                guid: 1,
                proxy: function (t, e) {
                    var i, n, s;
                    return "string" == typeof e && (s = t[e], e = t, t = s), se.isFunction(t) ? (i = G.call(arguments, 2), n = function () {
                        return t.apply(e || this, i.concat(G.call(arguments)))
                    }, n.guid = t.guid = t.guid || se.guid++, n) : void 0
                },
                now: function () {
                    return +new Date
                },
                support: ie
            }), se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                J["[object " + e + "]"] = e.toLowerCase()
            });
            var he = /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
                function (t) {
                    function e(t, e, i, n) {
                        var s, o, a, r, l, h, d, p, f, g;
                        if ((e ? e.ownerDocument || e : B) !== O && E(e), e = e || O, i = i || [], r = e.nodeType, "string" != typeof t || !t || 1 !== r && 9 !== r && 11 !== r)return i;
                        if (!n && D) {
                            if (11 !== r && (s = ye.exec(t)))if (a = s[1]) {
                                if (9 === r) {
                                    if (o = e.getElementById(a), !o || !o.parentNode)return i;
                                    if (o.id === a)return i.push(o), i
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && W(e, o) && o.id === a)return i.push(o), i
                            } else {
                                if (s[2])return K.apply(i, e.getElementsByTagName(t)), i;
                                if ((a = s[3]) && w.getElementsByClassName)return K.apply(i, e.getElementsByClassName(a)), i
                            }
                            if (w.qsa && (!N || !N.test(t))) {
                                if (p = d = H, f = e, g = 1 !== r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                                    for (h = T(t), (d = e.getAttribute("id")) ? p = d.replace(xe, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;)h[l] = p + u(h[l]);
                                    f = be.test(t) && c(e.parentNode) || e, g = h.join(",")
                                }
                                if (g)try {
                                    return K.apply(i, f.querySelectorAll(g)), i
                                } catch (m) {
                                } finally {
                                    d || e.removeAttribute("id")
                                }
                            }
                        }
                        return k(t.replace(le, "$1"), e, i, n)
                    }

                    function i() {
                        function t(i, n) {
                            return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
                        }

                        var e = [];
                        return t
                    }

                    function n(t) {
                        return t[H] = !0, t
                    }

                    function s(t) {
                        var e = O.createElement("div");
                        try {
                            return !!t(e)
                        } catch (i) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function o(t, e) {
                        for (var i = t.split("|"), n = t.length; n--;)C.attrHandle[i[n]] = e
                    }

                    function a(t, e) {
                        var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                        if (n)return n;
                        if (i)for (; i = i.nextSibling;)if (i === e)return -1;
                        return t ? 1 : -1
                    }

                    function r(t) {
                        return function (e) {
                            var i = e.nodeName.toLowerCase();
                            return "input" === i && e.type === t
                        }
                    }

                    function l(t) {
                        return function (e) {
                            var i = e.nodeName.toLowerCase();
                            return ("input" === i || "button" === i) && e.type === t
                        }
                    }

                    function h(t) {
                        return n(function (e) {
                            return e = +e, n(function (i, n) {
                                for (var s, o = t([], i.length, e), a = o.length; a--;)i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                            })
                        })
                    }

                    function c(t) {
                        return t && "undefined" != typeof t.getElementsByTagName && t
                    }

                    function d() {
                    }

                    function u(t) {
                        for (var e = 0, i = t.length, n = ""; i > e; e++)n += t[e].value;
                        return n
                    }

                    function p(t, e, i) {
                        var n = e.dir, s = i && "parentNode" === n, o = j++;
                        return e.first ? function (e, i, o) {
                            for (; e = e[n];)if (1 === e.nodeType || s)return t(e, i, o)
                        } : function (e, i, a) {
                            var r, l, h = [F, o];
                            if (a) {
                                for (; e = e[n];)if ((1 === e.nodeType || s) && t(e, i, a))return !0
                            } else for (; e = e[n];)if (1 === e.nodeType || s) {
                                if (l = e[H] || (e[H] = {}), (r = l[n]) && r[0] === F && r[1] === o)return h[2] = r[2];
                                if (l[n] = h, h[2] = t(e, i, a))return !0
                            }
                        }
                    }

                    function f(t) {
                        return t.length > 1 ? function (e, i, n) {
                            for (var s = t.length; s--;)if (!t[s](e, i, n))return !1;
                            return !0
                        } : t[0]
                    }

                    function g(t, i, n) {
                        for (var s = 0, o = i.length; o > s; s++)e(t, i[s], n);
                        return n
                    }

                    function m(t, e, i, n, s) {
                        for (var o, a = [], r = 0, l = t.length, h = null != e; l > r; r++)(o = t[r]) && (!i || i(o, n, s)) && (a.push(o), h && e.push(r));
                        return a
                    }

                    function v(t, e, i, s, o, a) {
                        return s && !s[H] && (s = v(s)), o && !o[H] && (o = v(o, a)), n(function (n, a, r, l) {
                            var h, c, d, u = [], p = [], f = a.length, v = n || g(e || "*", r.nodeType ? [r] : r, []), y = !t || !n && e ? v : m(v, u, t, r, l), b = i ? o || (n ? t : f || s) ? [] : a : y;
                            if (i && i(y, b, r, l), s)for (h = m(b, p), s(h, [], r, l), c = h.length; c--;)(d = h[c]) && (b[p[c]] = !(y[p[c]] = d));
                            if (n) {
                                if (o || t) {
                                    if (o) {
                                        for (h = [], c = b.length; c--;)(d = b[c]) && h.push(y[c] = d);
                                        o(null, b = [], h, l)
                                    }
                                    for (c = b.length; c--;)(d = b[c]) && (h = o ? te(n, d) : u[c]) > -1 && (n[h] = !(a[h] = d))
                                }
                            } else b = m(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
                        })
                    }

                    function y(t) {
                        for (var e, i, n, s = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], r = o ? 1 : 0, l = p(function (t) {
                            return t === e
                        }, a, !0), h = p(function (t) {
                            return te(e, t) > -1
                        }, a, !0), c = [function (t, i, n) {
                            var s = !o && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                            return e = null, s
                        }]; s > r; r++)if (i = C.relative[t[r].type])c = [p(f(c), i)]; else {
                            if (i = C.filter[t[r].type].apply(null, t[r].matches), i[H]) {
                                for (n = ++r; s > n && !C.relative[t[n].type]; n++);
                                return v(r > 1 && f(c), r > 1 && u(t.slice(0, r - 1).concat({value: " " === t[r - 2].type ? "*" : ""})).replace(le, "$1"), i, n > r && y(t.slice(r, n)), s > n && y(t = t.slice(n)), s > n && u(t))
                            }
                            c.push(i)
                        }
                        return f(c)
                    }

                    function b(t, i) {
                        var s = i.length > 0, o = t.length > 0, a = function (n, a, r, l, h) {
                            var c, d, u, p = 0, f = "0", g = n && [], v = [], y = I, b = n || o && C.find.TAG("*", h), x = F += null == y ? 1 : Math.random() || .1, w = b.length;
                            for (h && (I = a !== O && a); f !== w && null != (c = b[f]); f++) {
                                if (o && c) {
                                    for (d = 0; u = t[d++];)if (u(c, a, r)) {
                                        l.push(c);
                                        break
                                    }
                                    h && (F = x)
                                }
                                s && ((c = !u && c) && p--, n && g.push(c))
                            }
                            if (p += f, s && f !== p) {
                                for (d = 0; u = i[d++];)u(g, v, a, r);
                                if (n) {
                                    if (p > 0)for (; f--;)g[f] || v[f] || (v[f] = Z.call(l));
                                    v = m(v)
                                }
                                K.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                            }
                            return h && (F = x, I = y), g
                        };
                        return s ? n(a) : a
                    }

                    var x, w, C, S, P, T, M, k, I, _, A, E, O, $, D, N, L, z, W, H = "sizzle" + 1 * new Date, B = t.document, F = 0, j = 0, U = i(), R = i(), V = i(), q = function (t, e) {
                        return t === e && (A = !0), 0
                    }, X = 1 << 31, Y = {}.hasOwnProperty, G = [], Z = G.pop, Q = G.push, K = G.push, J = G.slice, te = function (t, e) {
                        for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i;
                        return -1
                    }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", se = ne.replace("w", "w#"), oe = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ie + "*\\]", ae = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", re = new RegExp(ie + "+", "g"), le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), he = new RegExp("^" + ie + "*," + ie + "*"), ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), ue = new RegExp(ae), pe = new RegExp("^" + se + "$"), fe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ee + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), Ce = function (t, e, i) {
                        var n = "0x" + e - 65536;
                        return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    }, Se = function () {
                        E()
                    };
                    try {
                        K.apply(G = J.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
                    } catch (Pe) {
                        K = {
                            apply: G.length ? function (t, e) {
                                Q.apply(t, J.call(e))
                            } : function (t, e) {
                                for (var i = t.length, n = 0; t[i++] = e[n++];);
                                t.length = i - 1
                            }
                        }
                    }
                    w = e.support = {}, P = e.isXML = function (t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return e ? "HTML" !== e.nodeName : !1
                    }, E = e.setDocument = function (t) {
                        var e, i, n = t ? t.ownerDocument || t : B;
                        return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, $ = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Se, !1) : i.attachEvent && i.attachEvent("onunload", Se)), D = !P(n), w.attributes = s(function (t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), w.getElementsByTagName = s(function (t) {
                            return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                        }), w.getElementsByClassName = ve.test(n.getElementsByClassName), w.getById = s(function (t) {
                            return $.appendChild(t).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                        }), w.getById ? (C.find.ID = function (t, e) {
                            if ("undefined" != typeof e.getElementById && D) {
                                var i = e.getElementById(t);
                                return i && i.parentNode ? [i] : []
                            }
                        }, C.filter.ID = function (t) {
                            var e = t.replace(we, Ce);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete C.find.ID, C.filter.ID = function (t) {
                            var e = t.replace(we, Ce);
                            return function (t) {
                                var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                return i && i.value === e
                            }
                        }), C.find.TAG = w.getElementsByTagName ? function (t, e) {
                            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                        } : function (t, e) {
                            var i, n = [], s = 0, o = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; i = o[s++];)1 === i.nodeType && n.push(i);
                                return n
                            }
                            return o
                        }, C.find.CLASS = w.getElementsByClassName && function (t, e) {
                            return D ? e.getElementsByClassName(t) : void 0
                        }, L = [], N = [], (w.qsa = ve.test(n.querySelectorAll)) && (s(function (t) {
                            $.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + ie + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + H + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || N.push(".#.+[+~]")
                        }), s(function (t) {
                            var e = n.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                        })), (w.matchesSelector = ve.test(z = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && s(function (t) {
                            w.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), L.push("!=", ae)
                        }), N = N.length && new RegExp(N.join("|")), L = L.length && new RegExp(L.join("|")), e = ve.test($.compareDocumentPosition), W = e || ve.test($.contains) ? function (t, e) {
                            var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                            return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                        } : function (t, e) {
                            if (e)for (; e = e.parentNode;)if (e === t)return !0;
                            return !1
                        }, q = e ? function (t, e) {
                            if (t === e)return A = !0, 0;
                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && W(B, t) ? -1 : e === n || e.ownerDocument === B && W(B, e) ? 1 : _ ? te(_, t) - te(_, e) : 0 : 4 & i ? -1 : 1)
                        } : function (t, e) {
                            if (t === e)return A = !0, 0;
                            var i, s = 0, o = t.parentNode, r = e.parentNode, l = [t], h = [e];
                            if (!o || !r)return t === n ? -1 : e === n ? 1 : o ? -1 : r ? 1 : _ ? te(_, t) - te(_, e) : 0;
                            if (o === r)return a(t, e);
                            for (i = t; i = i.parentNode;)l.unshift(i);
                            for (i = e; i = i.parentNode;)h.unshift(i);
                            for (; l[s] === h[s];)s++;
                            return s ? a(l[s], h[s]) : l[s] === B ? -1 : h[s] === B ? 1 : 0
                        }, n) : O
                    }, e.matches = function (t, i) {
                        return e(t, null, null, i)
                    }, e.matchesSelector = function (t, i) {
                        if ((t.ownerDocument || t) !== O && E(t), i = i.replace(de, "='$1']"), !(!w.matchesSelector || !D || L && L.test(i) || N && N.test(i)))try {
                            var n = z.call(t, i);
                            if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
                        } catch (s) {
                        }
                        return e(i, O, null, [t]).length > 0
                    }, e.contains = function (t, e) {
                        return (t.ownerDocument || t) !== O && E(t), W(t, e)
                    }, e.attr = function (t, e) {
                        (t.ownerDocument || t) !== O && E(t);
                        var i = C.attrHandle[e.toLowerCase()], n = i && Y.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
                        return void 0 !== n ? n : w.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }, e.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, e.uniqueSort = function (t) {
                        var e, i = [], n = 0, s = 0;
                        if (A = !w.detectDuplicates, _ = !w.sortStable && t.slice(0), t.sort(q), A) {
                            for (; e = t[s++];)e === t[s] && (n = i.push(s));
                            for (; n--;)t.splice(i[n], 1)
                        }
                        return _ = null, t
                    }, S = e.getText = function (t) {
                        var e, i = "", n = 0, s = t.nodeType;
                        if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof t.textContent)return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling)i += S(t)
                            } else if (3 === s || 4 === s)return t.nodeValue
                        } else for (; e = t[n++];)i += S(e);
                        return i
                    }, C = e.selectors = {
                        cacheLength: 50,
                        createPseudo: n,
                        match: fe,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {dir: "parentNode", first: !0},
                            " ": {dir: "parentNode"},
                            "+": {dir: "previousSibling", first: !0},
                            "~": {dir: "previousSibling"}
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(we, Ce), t[3] = (t[3] || t[4] || t[5] || "").replace(we, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            }, CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                            }, PSEUDO: function (t) {
                                var e, i = !t[6] && t[2];
                                return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ue.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(we, Ce).toLowerCase();
                                return "*" === t ? function () {
                                    return !0
                                } : function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            }, CLASS: function (t) {
                                var e = U[t + " "];
                                return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && U(t, function (t) {
                                    return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                })
                            }, ATTR: function (t, i, n) {
                                return function (s) {
                                    var o = e.attr(s, t);
                                    return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                                }
                            }, CHILD: function (t, e, i, n, s) {
                                var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), r = "of-type" === e;
                                return 1 === n && 0 === s ? function (t) {
                                    return !!t.parentNode
                                } : function (e, i, l) {
                                    var h, c, d, u, p, f, g = o !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = r && e.nodeName.toLowerCase(), y = !l && !r;
                                    if (m) {
                                        if (o) {
                                            for (; g;) {
                                                for (d = e; d = d[g];)if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                                f = g = "only" === t && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                            for (c = m[H] || (m[H] = {}), h = c[t] || [], p = h[0] === F && h[1], u = h[0] === F && h[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (u = p = 0) || f.pop();)if (1 === d.nodeType && ++u && d === e) {
                                                c[t] = [F, p, u];
                                                break
                                            }
                                        } else if (y && (h = (e[H] || (e[H] = {}))[t]) && h[0] === F)u = h[1]; else for (; (d = ++p && d && d[g] || (u = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++u || (y && ((d[H] || (d[H] = {}))[t] = [F, u]), d !== e)););
                                        return u -= s, u === n || u % n === 0 && u / n >= 0
                                    }
                                }
                            }, PSEUDO: function (t, i) {
                                var s, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                return o[H] ? o(i) : o.length > 1 ? (s = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                                    for (var n, s = o(t, i), a = s.length; a--;)n = te(t, s[a]), t[n] = !(e[n] = s[a])
                                }) : function (t) {
                                    return o(t, 0, s)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: n(function (t) {
                                var e = [], i = [], s = M(t.replace(le, "$1"));
                                return s[H] ? n(function (t, e, i, n) {
                                    for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                                }) : function (t, n, o) {
                                    return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                                }
                            }), has: n(function (t) {
                                return function (i) {
                                    return e(t, i).length > 0
                                }
                            }), contains: n(function (t) {
                                return t = t.replace(we, Ce), function (e) {
                                    return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                                }
                            }), lang: n(function (t) {
                                return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, Ce).toLowerCase(), function (e) {
                                    var i;
                                    do if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                            }), target: function (e) {
                                var i = t.location && t.location.hash;
                                return i && i.slice(1) === e.id
                            }, root: function (t) {
                                return t === $
                            }, focus: function (t) {
                                return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            }, enabled: function (t) {
                                return t.disabled === !1
                            }, disabled: function (t) {
                                return t.disabled === !0
                            }, checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            }, selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                            }, empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                                return !0
                            }, parent: function (t) {
                                return !C.pseudos.empty(t)
                            }, header: function (t) {
                                return me.test(t.nodeName)
                            }, input: function (t) {
                                return ge.test(t.nodeName)
                            }, button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            }, text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            }, first: h(function () {
                                return [0]
                            }), last: h(function (t, e) {
                                return [e - 1]
                            }), eq: h(function (t, e, i) {
                                return [0 > i ? i + e : i]
                            }), even: h(function (t, e) {
                                for (var i = 0; e > i; i += 2)t.push(i);
                                return t
                            }), odd: h(function (t, e) {
                                for (var i = 1; e > i; i += 2)t.push(i);
                                return t
                            }), lt: h(function (t, e, i) {
                                for (var n = 0 > i ? i + e : i; --n >= 0;)t.push(n);
                                return t
                            }), gt: h(function (t, e, i) {
                                for (var n = 0 > i ? i + e : i; ++n < e;)t.push(n);
                                return t
                            })
                        }
                    }, C.pseudos.nth = C.pseudos.eq;
                    for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[x] = r(x);
                    for (x in{submit: !0, reset: !0})C.pseudos[x] = l(x);
                    return d.prototype = C.filters = C.pseudos, C.setFilters = new d, T = e.tokenize = function (t, i) {
                        var n, s, o, a, r, l, h, c = R[t + " "];
                        if (c)return i ? 0 : c.slice(0);
                        for (r = t, l = [], h = C.preFilter; r;) {
                            (!n || (s = he.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = ce.exec(r)) && (n = s.shift(), o.push({
                                value: n,
                                type: s[0].replace(le, " ")
                            }), r = r.slice(n.length));
                            for (a in C.filter)!(s = fe[a].exec(r)) || h[a] && !(s = h[a](s)) || (n = s.shift(), o.push({
                                value: n,
                                type: a,
                                matches: s
                            }), r = r.slice(n.length));
                            if (!n)break
                        }
                        return i ? r.length : r ? e.error(t) : R(t, l).slice(0)
                    }, M = e.compile = function (t, e) {
                        var i, n = [], s = [], o = V[t + " "];
                        if (!o) {
                            for (e || (e = T(t)), i = e.length; i--;)o = y(e[i]), o[H] ? n.push(o) : s.push(o);
                            o = V(t, b(s, n)), o.selector = t
                        }
                        return o
                    }, k = e.select = function (t, e, i, n) {
                        var s, o, a, r, l, h = "function" == typeof t && t, d = !n && T(t = h.selector || t);
                        if (i = i || [], 1 === d.length) {
                            if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && D && C.relative[o[1].type]) {
                                if (e = (C.find.ID(a.matches[0].replace(we, Ce), e) || [])[0], !e)return i;
                                h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                            }
                            for (s = fe.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !C.relative[r = a.type]);)if ((l = C.find[r]) && (n = l(a.matches[0].replace(we, Ce), be.test(o[0].type) && c(e.parentNode) || e))) {
                                if (o.splice(s, 1), t = n.length && u(o), !t)return K.apply(i, n), i;
                                break
                            }
                        }
                        return (h || M(t, d))(n, e, !D, i, be.test(t) && c(e.parentNode) || e), i
                    }, w.sortStable = H.split("").sort(q).join("") === H, w.detectDuplicates = !!A, E(), w.sortDetached = s(function (t) {
                        return 1 & t.compareDocumentPosition(O.createElement("div"))
                    }), s(function (t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    }) || o("type|href|height|width", function (t, e, i) {
                        return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }), w.attributes && s(function (t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    }) || o("value", function (t, e, i) {
                        return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                    }), s(function (t) {
                        return null == t.getAttribute("disabled")
                    }) || o(ee, function (t, e, i) {
                        var n;
                        return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }), e
                }(t);
            se.find = he, se.expr = he.selectors, se.expr[":"] = se.expr.pseudos, se.unique = he.uniqueSort, se.text = he.getText, se.isXMLDoc = he.isXML, se.contains = he.contains;
            var ce = se.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ue = /^.[^:#\[\.,]*$/;
            se.filter = function (t, e, i) {
                var n = e[0];
                return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? se.find.matchesSelector(n, t) ? [n] : [] : se.find.matches(t, se.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, se.fn.extend({
                find: function (t) {
                    var e, i = [], n = this, s = n.length;
                    if ("string" != typeof t)return this.pushStack(se(t).filter(function () {
                        for (e = 0; s > e; e++)if (se.contains(n[e], this))return !0
                    }));
                    for (e = 0; s > e; e++)se.find(t, n[e], i);
                    return i = this.pushStack(s > 1 ? se.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
                }, filter: function (t) {
                    return this.pushStack(n(this, t || [], !1))
                }, not: function (t) {
                    return this.pushStack(n(this, t || [], !0))
                }, is: function (t) {
                    return !!n(this, "string" == typeof t && ce.test(t) ? se(t) : t || [], !1).length
                }
            });
            var pe, fe = t.document, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, me = se.fn.init = function (t, e) {
                var i, n;
                if (!t)return this;
                if ("string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), de.test(i[1]) && se.isPlainObject(e))for (i in e)se.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (n = fe.getElementById(i[2]), n && n.parentNode) {
                        if (n.id !== i[2])return pe.find(t);
                        this.length = 1, this[0] = n
                    }
                    return this.context = fe, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
            };
            me.prototype = se.fn, pe = se(fe);
            var ve = /^(?:parents|prev(?:Until|All))/, ye = {children: !0, contents: !0, next: !0, prev: !0};
            se.extend({
                dir: function (t, e, i) {
                    for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));)1 === s.nodeType && n.push(s), s = s[e];
                    return n
                }, sibling: function (t, e) {
                    for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
                    return i
                }
            }), se.fn.extend({
                has: function (t) {
                    var e, i = se(t, this), n = i.length;
                    return this.filter(function () {
                        for (e = 0; n > e; e++)if (se.contains(this, i[e]))return !0
                    })
                }, closest: function (t, e) {
                    for (var i, n = 0, s = this.length, o = [], a = ce.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > n; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, t))) {
                        o.push(i);
                        break
                    }
                    return this.pushStack(o.length > 1 ? se.unique(o) : o)
                }, index: function (t) {
                    return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (t, e) {
                    return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
                }, addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), se.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                }, parents: function (t) {
                    return se.dir(t, "parentNode")
                }, parentsUntil: function (t, e, i) {
                    return se.dir(t, "parentNode", i)
                }, next: function (t) {
                    return s(t, "nextSibling")
                }, prev: function (t) {
                    return s(t, "previousSibling")
                }, nextAll: function (t) {
                    return se.dir(t, "nextSibling")
                }, prevAll: function (t) {
                    return se.dir(t, "previousSibling")
                }, nextUntil: function (t, e, i) {
                    return se.dir(t, "nextSibling", i)
                }, prevUntil: function (t, e, i) {
                    return se.dir(t, "previousSibling", i)
                }, siblings: function (t) {
                    return se.sibling((t.parentNode || {}).firstChild, t)
                }, children: function (t) {
                    return se.sibling(t.firstChild)
                }, contents: function (t) {
                    return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
                }
            }, function (t, e) {
                se.fn[t] = function (i, n) {
                    var s = se.map(this, e, i);
                    return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = se.filter(n, s)), this.length > 1 && (ye[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())), this.pushStack(s)
                }
            });
            var be = /\S+/g, xe = {};
            se.Callbacks = function (t) {
                t = "string" == typeof t ? xe[t] || o(t) : se.extend({}, t);
                var e, i, n, s, a, r, l = [], h = !t.once && [], c = function (o) {
                    for (i = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, e = !0; l && s > a; a++)if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                    e = !1, l && (h ? h.length && c(h.shift()) : i ? l = [] : d.disable())
                }, d = {
                    add: function () {
                        if (l) {
                            var n = l.length;
                            !function o(e) {
                                se.each(e, function (e, i) {
                                    var n = se.type(i);
                                    "function" === n ? t.unique && d.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), e ? s = l.length : i && (r = n, c(i))
                        }
                        return this
                    }, remove: function () {
                        return l && se.each(arguments, function (t, i) {
                            for (var n; (n = se.inArray(i, l, n)) > -1;)l.splice(n, 1), e && (s >= n && s--, a >= n && a--)
                        }), this
                    }, has: function (t) {
                        return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
                    }, empty: function () {
                        return l = [], s = 0, this
                    }, disable: function () {
                        return l = h = i = void 0, this
                    }, disabled: function () {
                        return !l
                    }, lock: function () {
                        return h = void 0, i || d.disable(), this
                    }, locked: function () {
                        return !h
                    }, fireWith: function (t, i) {
                        return !l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)), this
                    }, fire: function () {
                        return d.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return d
            }, se.extend({
                Deferred: function (t) {
                    var e = [["resolve", "done", se.Callbacks("once memory"), "resolved"], ["reject", "fail", se.Callbacks("once memory"), "rejected"], ["notify", "progress", se.Callbacks("memory")]], i = "pending", n = {
                        state: function () {
                            return i
                        }, always: function () {
                            return s.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return se.Deferred(function (i) {
                                se.each(e, function (e, o) {
                                    var a = se.isFunction(t[e]) && t[e];
                                    s[o[1]](function () {
                                        var t = a && a.apply(this, arguments);
                                        t && se.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? se.extend(t, n) : n
                        }
                    }, s = {};
                    return n.pipe = n.then, se.each(e, function (t, o) {
                        var a = o[2], r = o[3];
                        n[o[1]] = a.add, r && a.add(function () {
                            i = r
                        }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function () {
                            return s[o[0] + "With"](this === s ? n : this, arguments), this
                        }, s[o[0] + "With"] = a.fireWith
                    }), n.promise(s), t && t.call(s, s), s
                }, when: function (t) {
                    var e, i, n, s = 0, o = G.call(arguments), a = o.length, r = 1 !== a || t && se.isFunction(t.promise) ? a : 0, l = 1 === r ? t : se.Deferred(), h = function (t, i, n) {
                        return function (s) {
                            i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                        }
                    };
                    if (a > 1)for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++)o[s] && se.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --r;
                    return r || l.resolveWith(n, o), l.promise()
                }
            });
            var we;
            se.fn.ready = function (t) {
                return se.ready.promise().done(t), this
            }, se.extend({
                isReady: !1, readyWait: 1, holdReady: function (t) {
                    t ? se.readyWait++ : se.ready(!0)
                }, ready: function (t) {
                    if (t === !0 ? !--se.readyWait : !se.isReady) {
                        if (!fe.body)return setTimeout(se.ready);
                        se.isReady = !0, t !== !0 && --se.readyWait > 0 || (we.resolveWith(fe, [se]), se.fn.triggerHandler && (se(fe).triggerHandler("ready"), se(fe).off("ready")))
                    }
                }
            }), se.ready.promise = function (e) {
                if (!we)if (we = se.Deferred(), "complete" === fe.readyState)setTimeout(se.ready); else if (fe.addEventListener)fe.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1); else {
                    fe.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
                    var i = !1;
                    try {
                        i = null == t.frameElement && fe.documentElement
                    } catch (n) {
                    }
                    i && i.doScroll && !function s() {
                        if (!se.isReady) {
                            try {
                                i.doScroll("left")
                            } catch (t) {
                                return setTimeout(s, 50)
                            }
                            a(), se.ready()
                        }
                    }()
                }
                return we.promise(e)
            };
            var Ce, Se = "undefined";
            for (Ce in se(ie))break;
            ie.ownLast = "0" !== Ce, ie.inlineBlockNeedsLayout = !1, se(function () {
                var t, e, i, n;
                i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Se && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
            }), function () {
                var t = fe.createElement("div");
                if (null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        ie.deleteExpando = !1
                    }
                }
                t = null
            }(), se.acceptData = function (t) {
                var e = se.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
                return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
            var Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Te = /([A-Z])/g;
            se.extend({
                cache: {},
                noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
                hasData: function (t) {
                    return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando], !!t && !h(t)
                },
                data: function (t, e, i) {
                    return c(t, e, i)
                },
                removeData: function (t, e) {
                    return d(t, e)
                },
                _data: function (t, e, i) {
                    return c(t, e, i, !0)
                },
                _removeData: function (t, e) {
                    return d(t, e, !0)
                }
            }), se.fn.extend({
                data: function (t, e) {
                    var i, n, s, o = this[0], a = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (s = se.data(o), 1 === o.nodeType && !se._data(o, "parsedAttrs"))) {
                            for (i = a.length; i--;)a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(o, n, s[n])));
                            se._data(o, "parsedAttrs", !0)
                        }
                        return s
                    }
                    return "object" == typeof t ? this.each(function () {
                        se.data(this, t)
                    }) : arguments.length > 1 ? this.each(function () {
                        se.data(this, t, e)
                    }) : o ? l(o, t, se.data(o, t)) : void 0
                }, removeData: function (t) {
                    return this.each(function () {
                        se.removeData(this, t)
                    })
                }
            }), se.extend({
                queue: function (t, e, i) {
                    var n;
                    return t ? (e = (e || "fx") + "queue", n = se._data(t, e), i && (!n || se.isArray(i) ? n = se._data(t, e, se.makeArray(i)) : n.push(i)), n || []) : void 0
                }, dequeue: function (t, e) {
                    e = e || "fx";
                    var i = se.queue(t, e), n = i.length, s = i.shift(), o = se._queueHooks(t, e), a = function () {
                        se.dequeue(t, e)
                    };
                    "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
                }, _queueHooks: function (t, e) {
                    var i = e + "queueHooks";
                    return se._data(t, i) || se._data(t, i, {
                        empty: se.Callbacks("once memory").add(function () {
                            se._removeData(t, e + "queue"), se._removeData(t, i)
                        })
                    })
                }
            }), se.fn.extend({
                queue: function (t, e) {
                    var i = 2;
                    return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? se.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var i = se.queue(this, t, e);
                        se._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && se.dequeue(this, t)
                    })
                }, dequeue: function (t) {
                    return this.each(function () {
                        se.dequeue(this, t)
                    })
                }, clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                }, promise: function (t, e) {
                    var i, n = 1, s = se.Deferred(), o = this, a = this.length, r = function () {
                        --n || s.resolveWith(o, [o])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)i = se._data(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
                    return r(), s.promise(e)
                }
            });
            var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Ie = function (t, e) {
                return t = e || t, "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
            }, _e = se.access = function (t, e, i, n, s, o, a) {
                var r = 0, l = t.length, h = null == i;
                if ("object" === se.type(i)) {
                    s = !0;
                    for (r in i)se.access(t, e, r, i[r], !0, o, a)
                } else if (void 0 !== n && (s = !0, se.isFunction(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                        return h.call(se(t), i)
                    })), e))for (; l > r; r++)e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
                return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
            }, Ae = /^(?:checkbox|radio)$/i;
            !function () {
                var t = fe.createElement("input"), e = fe.createElement("div"), i = fe.createDocumentFragment();
                if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                        ie.noCloneEvent = !1
                    }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (n) {
                        ie.deleteExpando = !1
                    }
                }
            }(), function () {
                var e, i, n = fe.createElement("div");
                for (e in{
                    submit: !0,
                    change: !0,
                    focusin: !0
                })i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
                n = null
            }();
            var Ee = /^(?:input|select|textarea)$/i, Oe = /^key/, $e = /^(?:mouse|pointer|contextmenu)|click/, De = /^(?:focusinfocus|focusoutblur)$/, Ne = /^([^.]*)(?:\.(.+)|)$/;
            se.event = {
                global: {},
                add: function (t, e, i, n, s) {
                    var o, a, r, l, h, c, d, u, p, f, g, m = se._data(t);
                    if (m) {
                        for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = se.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function (t) {
                            return typeof se === Se || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(be) || [""], r = e.length; r--;)o = Ne.exec(e[r]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (h = se.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = se.event.special[p] || {}, d = se.extend({
                            type: p,
                            origType: g,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: s,
                            needsContext: s && se.expr.match.needsContext.test(s),
                            namespace: f.join(".")
                        }, l), (u = a[p]) || (u = a[p] = [], u.delegateCount = 0, h.setup && h.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), h.add && (h.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, d) : u.push(d), se.event.global[p] = !0);
                        t = null
                    }
                },
                remove: function (t, e, i, n, s) {
                    var o, a, r, l, h, c, d, u, p, f, g, m = se.hasData(t) && se._data(t);
                    if (m && (c = m.events)) {
                        for (e = (e || "").match(be) || [""], h = e.length; h--;)if (r = Ne.exec(e[h]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p) {
                            for (d = se.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, u = c[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = u.length; o--;)a = u[o], !s && g !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (u.splice(o, 1), a.selector && u.delegateCount--, d.remove && d.remove.call(t, a));
                            l && !u.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || se.removeEvent(t, p, m.handle), delete c[p])
                        } else for (p in c)se.event.remove(t, p + e[h], i, n, !0);
                        se.isEmptyObject(c) && (delete m.handle, se._removeData(t, "events"))
                    }
                },
                trigger: function (e, i, n, s) {
                    var o, a, r, l, h, c, d, u = [n || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (r = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !De.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : se.makeArray(i, [e]), h = se.event.special[p] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                        if (!s && !h.noBubble && !se.isWindow(n)) {
                            for (l = h.delegateType || p, De.test(l + p) || (r = r.parentNode); r; r = r.parentNode)u.push(r), c = r;
                            c === (n.ownerDocument || fe) && u.push(c.defaultView || c.parentWindow || t)
                        }
                        for (d = 0; (r = u[d++]) && !e.isPropagationStopped();)e.type = d > 1 ? l : h.bindType || p, o = (se._data(r, "events") || {})[e.type] && se._data(r, "handle"), o && o.apply(r, i), o = a && r[a], o && o.apply && se.acceptData(r) && (e.result = o.apply(r, i), e.result === !1 && e.preventDefault());
                        if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(u.pop(), i) === !1) && se.acceptData(n) && a && n[p] && !se.isWindow(n)) {
                            c = n[a], c && (n[a] = null), se.event.triggered = p;
                            try {
                                n[p]()
                            } catch (g) {
                            }
                            se.event.triggered = void 0, c && (n[a] = c)
                        }
                        return e.result
                    }
                },
                dispatch: function (t) {
                    t = se.event.fix(t);
                    var e, i, n, s, o, a = [], r = G.call(arguments), l = (se._data(this, "events") || {})[t.type] || [], h = se.event.special[t.type] || {};
                    if (r[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                        for (a = se.event.handlers.call(this, t, l), e = 0; (s = a[e++]) && !t.isPropagationStopped();)for (t.currentTarget = s.elem, o = 0; (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return h.postDispatch && h.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function (t, e) {
                    var i, n, s, o, a = [], r = e.delegateCount, l = t.target;
                    if (r && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], o = 0; r > o; o++)n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length), s[i] && s.push(n);
                        s.length && a.push({elem: l, handlers: s})
                    }
                    return r < e.length && a.push({elem: this, handlers: e.slice(r)}), a
                },
                fix: function (t) {
                    if (t[se.expando])return t;
                    var e, i, n, s = t.type, o = t, a = this.fixHooks[s];
                    for (a || (this.fixHooks[s] = a = $e.test(s) ? this.mouseHooks : Oe.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new se.Event(o), e = n.length; e--;)i = n[e], t[i] = o[i];
                    return t.target || (t.target = o.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var i, n, s, o = e.button, a = e.fromElement;
                        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                    }
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== f() && this.focus)try {
                                return this.focus(), !1
                            } catch (t) {
                            }
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === f() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        }, _default: function (t) {
                            return se.nodeName(t.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function (t, e, i, n) {
                    var s = se.extend(new se.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
                    n ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
                }
            }, se.removeEvent = fe.removeEventListener ? function (t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i, !1)
            } : function (t, e, i) {
                var n = "on" + e;
                t.detachEvent && (typeof t[n] === Se && (t[n] = null), t.detachEvent(n, i))
            }, se.Event = function (t, e) {
                return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), this[se.expando] = !0, void 0) : new se.Event(t, e)
            }, se.Event.prototype = {
                isDefaultPrevented: p,
                isPropagationStopped: p,
                isImmediatePropagationStopped: p,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = u, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = u, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, se.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                se.event.special[t] = {
                    delegateType: e, bindType: e, handle: function (t) {
                        var i, n = this, s = t.relatedTarget, o = t.handleObj;
                        return (!s || s !== n && !se.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                    }
                }
            }), ie.submitBubbles || (se.event.special.submit = {
                setup: function () {
                    return se.nodeName(this, "form") ? !1 : (se.event.add(this, "click._submit keypress._submit", function (t) {
                        var e = t.target, i = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
                        i && !se._data(i, "submitBubbles") && (se.event.add(i, "submit._submit", function (t) {
                            t._submit_bubble = !0
                        }), se._data(i, "submitBubbles", !0))
                    }), void 0)
                }, postDispatch: function (t) {
                    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
                }, teardown: function () {
                    return se.nodeName(this, "form") ? !1 : (se.event.remove(this, "._submit"), void 0)
                }
            }), ie.changeBubbles || (se.event.special.change = {
                setup: function () {
                    return Ee.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function (t) {
                        "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                    }), se.event.add(this, "click._change", function (t) {
                        this._just_changed && !t.isTrigger && (this._just_changed = !1), se.event.simulate("change", this, t, !0)
                    })), !1) : (se.event.add(this, "beforeactivate._change", function (t) {
                        var e = t.target;
                        Ee.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function (t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                        }), se._data(e, "changeBubbles", !0))
                    }), void 0)
                }, handle: function (t) {
                    var e = t.target;
                    return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
                }, teardown: function () {
                    return se.event.remove(this, "._change"), !Ee.test(this.nodeName)
                }
            }), ie.focusinBubbles || se.each({focus: "focusin", blur: "focusout"}, function (t, e) {
                var i = function (t) {
                    se.event.simulate(e, t.target, se.event.fix(t), !0)
                };
                se.event.special[e] = {
                    setup: function () {
                        var n = this.ownerDocument || this, s = se._data(n, e);
                        s || n.addEventListener(t, i, !0), se._data(n, e, (s || 0) + 1)
                    }, teardown: function () {
                        var n = this.ownerDocument || this, s = se._data(n, e) - 1;
                        s ? se._data(n, e, s) : (n.removeEventListener(t, i, !0), se._removeData(n, e))
                    }
                }
            }), se.fn.extend({
                on: function (t, e, i, n, s) {
                    var o, a;
                    if ("object" == typeof t) {
                        "string" != typeof e && (i = i || e, e = void 0);
                        for (o in t)this.on(o, e, i, t[o], s);
                        return this
                    }
                    if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)n = p; else if (!n)return this;
                    return 1 === s && (a = n, n = function (t) {
                        return se().off(t), a.apply(this, arguments)
                    }, n.guid = a.guid || (a.guid = se.guid++)), this.each(function () {
                        se.event.add(this, t, n, i, e)
                    })
                }, one: function (t, e, i, n) {
                    return this.on(t, e, i, n, 1)
                }, off: function (t, e, i) {
                    var n, s;
                    if (t && t.preventDefault && t.handleObj)return n = t.handleObj, se(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof t) {
                        for (s in t)this.off(s, e, t[s]);
                        return this
                    }
                    return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
                        se.event.remove(this, t, i, e)
                    })
                }, trigger: function (t, e) {
                    return this.each(function () {
                        se.event.trigger(t, e, this)
                    })
                }, triggerHandler: function (t, e) {
                    var i = this[0];
                    return i ? se.event.trigger(t, e, i, !0) : void 0
                }
            });
            var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ze = / jQuery\d+="(?:null|\d+)"/g, We = new RegExp("<(?:" + Le + ")[\\s/>]", "i"), He = /^\s+/, Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fe = /<([\w:]+)/, je = /<tbody/i, Ue = /<|&#?\w+;/, Re = /<(?:script|style|link)/i, Ve = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^$|\/(?:java|ecma)script/i, Xe = /^true\/(.*)/, Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }, Ze = g(fe), Qe = Ze.appendChild(fe.createElement("div"));
            Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, se.extend({
                clone: function (t, e, i) {
                    var n, s, o, a, r, l = se.contains(t.ownerDocument, t);
                    if (ie.html5Clone || se.isXMLDoc(t) || !We.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Qe.innerHTML = t.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t)))for (n = m(o), r = m(t), a = 0; null != (s = r[a]); ++a)n[a] && S(s, n[a]);
                    if (e)if (i)for (r = r || m(t), n = n || m(o), a = 0; null != (s = r[a]); a++)C(s, n[a]); else C(t, o);
                    return n = m(o, "script"), n.length > 0 && w(n, !l && m(t, "script")), n = r = s = null, o
                }, buildFragment: function (t, e, i, n) {
                    for (var s, o, a, r, l, h, c, d = t.length, u = g(e), p = [], f = 0; d > f; f++)if (o = t[f], o || 0 === o)if ("object" === se.type(o))se.merge(p, o.nodeType ? [o] : o); else if (Ue.test(o)) {
                        for (r = r || u.appendChild(e.createElement("div")), l = (Fe.exec(o) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, r.innerHTML = c[1] + o.replace(Be, "<$1></$2>") + c[2], s = c[0]; s--;)r = r.lastChild;
                        if (!ie.leadingWhitespace && He.test(o) && p.push(e.createTextNode(He.exec(o)[0])), !ie.tbody)for (o = "table" !== l || je.test(o) ? "<table>" !== c[1] || je.test(o) ? 0 : r : r.firstChild, s = o && o.childNodes.length; s--;)se.nodeName(h = o.childNodes[s], "tbody") && !h.childNodes.length && o.removeChild(h);
                        for (se.merge(p, r.childNodes), r.textContent = ""; r.firstChild;)r.removeChild(r.firstChild);
                        r = u.lastChild
                    } else p.push(e.createTextNode(o));
                    for (r && u.removeChild(r), ie.appendChecked || se.grep(m(p, "input"), v), f = 0; o = p[f++];)if ((!n || -1 === se.inArray(o, n)) && (a = se.contains(o.ownerDocument, o), r = m(u.appendChild(o), "script"), a && w(r), i))for (s = 0; o = r[s++];)qe.test(o.type || "") && i.push(o);
                    return r = null, u
                }, cleanData: function (t, e) {
                    for (var i, n, s, o, a = 0, r = se.expando, l = se.cache, h = ie.deleteExpando, c = se.event.special; null != (i = t[a]); a++)if ((e || se.acceptData(i)) && (s = i[r], o = s && l[s])) {
                        if (o.events)for (n in o.events)c[n] ? se.event.remove(i, n) : se.removeEvent(i, n, o.handle);
                        l[s] && (delete l[s], h ? delete i[r] : typeof i.removeAttribute !== Se ? i.removeAttribute(r) : i[r] = null, Y.push(s))
                    }
                }
            }), se.fn.extend({
                text: function (t) {
                    return _e(this, function (t) {
                        return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
                    }, null, t, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = y(this, t);
                            e.appendChild(t)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = y(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                }, remove: function (t, e) {
                    for (var i, n = t ? se.filter(t, this) : this, s = 0; null != (i = n[s]); s++)e || 1 !== i.nodeType || se.cleanData(m(i)), i.parentNode && (e && se.contains(i.ownerDocument, i) && w(m(i, "script")), i.parentNode.removeChild(i));
                    return this
                }, empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && se.cleanData(m(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                        t.options && se.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                }, clone: function (t, e) {
                    return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                        return se.clone(this, t, e)
                    })
                }, html: function (t) {
                    return _e(this, function (t) {
                        var e = this[0] || {}, i = 0, n = this.length;
                        if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(ze, "") : void 0;
                        if (!("string" != typeof t || Re.test(t) || !ie.htmlSerialize && We.test(t) || !ie.leadingWhitespace && He.test(t) || Ge[(Fe.exec(t) || ["", ""])[1].toLowerCase()])) {
                            t = t.replace(Be, "<$1></$2>");
                            try {
                                for (; n > i; i++)e = this[i] || {}, 1 === e.nodeType && (se.cleanData(m(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (s) {
                            }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                }, replaceWith: function () {
                    var t = arguments[0];
                    return this.domManip(arguments, function (e) {
                        t = this.parentNode, se.cleanData(m(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                }, detach: function (t) {
                    return this.remove(t, !0)
                }, domManip: function (t, e) {
                    t = Z.apply([], t);
                    var i, n, s, o, a, r, l = 0, h = this.length, c = this, d = h - 1, u = t[0], p = se.isFunction(u);
                    if (p || h > 1 && "string" == typeof u && !ie.checkClone && Ve.test(u))return this.each(function (i) {
                        var n = c.eq(i);
                        p && (t[0] = u.call(this, i, n.html())), n.domManip(t, e)
                    });
                    if (h && (r = se.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                        for (o = se.map(m(r, "script"), b), s = o.length; h > l; l++)n = r, l !== d && (n = se.clone(n, !0, !0), s && se.merge(o, m(n, "script"))), e.call(this[l], n, l);
                        if (s)for (a = o[o.length - 1].ownerDocument, se.map(o, x), l = 0; s > l; l++)n = o[l], qe.test(n.type || "") && !se._data(n, "globalEval") && se.contains(a, n) && (n.src ? se._evalUrl && se._evalUrl(n.src) : se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ye, "")));
                        r = i = null
                    }
                    return this
                }
            }), se.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                se.fn[t] = function (t) {
                    for (var i, n = 0, s = [], o = se(t), a = o.length - 1; a >= n; n++)i = n === a ? this : this.clone(!0), se(o[n])[e](i), Q.apply(s, i.get());
                    return this.pushStack(s)
                }
            });
            var Ke, Je = {};
            !function () {
                var t;
                ie.shrinkWrapBlocks = function () {
                    if (null != t)return t;
                    t = !1;
                    var e, i, n;
                    return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Se && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
                }
            }();
            var ti, ei, ii = /^margin/, ni = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"), si = /^(top|right|bottom|left)$/;
            t.getComputedStyle ? (ti = function (e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            }, ei = function (t, e, i) {
                var n, s, o, a, r = t.style;
                return i = i || ti(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== a || se.contains(t.ownerDocument, t) || (a = se.style(t, e)), ni.test(a) && ii.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
            }) : fe.documentElement.currentStyle && (ti = function (t) {
                return t.currentStyle
            }, ei = function (t, e, i) {
                var n, s, o, a, r = t.style;
                return i = i || ti(t), a = i ? i[e] : void 0, null == a && r && r[e] && (a = r[e]), ni.test(a) && !si.test(e) && (n = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
            }), function () {
                function e() {
                    var e, i, n, s;
                    i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, s = e.appendChild(fe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(s)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), i.removeChild(n))
                }

                var i, n, s, o, a, r, l;
                i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], n = s && s.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, se.extend(ie, {
                    reliableHiddenOffsets: function () {
                        return null == r && e(), r
                    }, boxSizingReliable: function () {
                        return null == a && e(), a
                    }, pixelPosition: function () {
                        return null == o && e(), o
                    }, reliableMarginRight: function () {
                        return null == l && e(), l
                    }
                }))
            }(), se.swap = function (t, e, i, n) {
                var s, o, a = {};
                for (o in e)a[o] = t.style[o], t.style[o] = e[o];
                s = i.apply(t, n || []);
                for (o in e)t.style[o] = a[o];
                return s
            };
            var oi = /alpha\([^)]*\)/i, ai = /opacity\s*=\s*([^)]*)/, ri = /^(none|table(?!-c[ea]).+)/, li = new RegExp("^(" + Me + ")(.*)$", "i"), hi = new RegExp("^([+-])=(" + Me + ")", "i"), ci = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, di = {letterSpacing: "0", fontWeight: "400"}, ui = ["Webkit", "O", "Moz", "ms"];
            se.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var i = ei(t, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": ie.cssFloat ? "cssFloat" : "styleFloat"},
                style: function (t, e, i, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var s, o, a, r = se.camelCase(e), l = t.style;
                        if (e = se.cssProps[r] || (se.cssProps[r] = k(l, r)), a = se.cssHooks[e] || se.cssHooks[r], void 0 === i)return a && "get"in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                        if (o = typeof i, "string" === o && (s = hi.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || se.cssNumber[r] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set"in a && void 0 === (i = a.set(t, i, n)))))try {
                            l[e] = i
                        } catch (h) {
                        }
                    }
                },
                css: function (t, e, i, n) {
                    var s, o, a, r = se.camelCase(e);
                    return e = se.cssProps[r] || (se.cssProps[r] = k(t.style, r)), a = se.cssHooks[e] || se.cssHooks[r], a && "get"in a && (o = a.get(t, !0, i)), void 0 === o && (o = ei(t, e, n)), "normal" === o && e in di && (o = di[e]), "" === i || i ? (s = parseFloat(o), i === !0 || se.isNumeric(s) ? s || 0 : o) : o
                }
            }), se.each(["height", "width"], function (t, e) {
                se.cssHooks[e] = {
                    get: function (t, i, n) {
                        return i ? ri.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, ci, function () {
                            return E(t, e, n)
                        }) : E(t, e, n) : void 0
                    }, set: function (t, i, n) {
                        var s = n && ti(t);
                        return _(t, i, n ? A(t, e, n, ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
                    }
                }
            }), ie.opacity || (se.cssHooks.opacity = {
                get: function (t, e) {
                    return ai.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                }, set: function (t, e) {
                    var i = t.style, n = t.currentStyle, s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = n && n.filter || i.filter || "";
                    i.zoom = 1, (e >= 1 || "" === e) && "" === se.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, s) : o + " " + s)
                }
            }), se.cssHooks.marginRight = M(ie.reliableMarginRight, function (t, e) {
                return e ? se.swap(t, {display: "inline-block"}, ei, [t, "marginRight"]) : void 0
            }), se.each({margin: "", padding: "", border: "Width"}, function (t, e) {
                se.cssHooks[t + e] = {
                    expand: function (i) {
                        for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)s[t + ke[n] + e] = o[n] || o[n - 2] || o[0];
                        return s
                    }
                }, ii.test(t) || (se.cssHooks[t + e].set = _)
            }), se.fn.extend({
                css: function (t, e) {
                    return _e(this, function (t, e, i) {
                        var n, s, o = {}, a = 0;
                        if (se.isArray(e)) {
                            for (n = ti(t), s = e.length; s > a; a++)o[e[a]] = se.css(t, e[a], !1, n);
                            return o
                        }
                        return void 0 !== i ? se.style(t, e, i) : se.css(t, e)
                    }, t, e, arguments.length > 1)
                }, show: function () {
                    return I(this, !0)
                }, hide: function () {
                    return I(this)
                }, toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        Ie(this) ? se(this).show() : se(this).hide()
                    })
                }
            }), se.Tween = O, O.prototype = {
                constructor: O, init: function (t, e, i, n, s, o) {
                    this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (se.cssNumber[i] ? "" : "px")
                }, cur: function () {
                    var t = O.propHooks[this.prop];
                    return t && t.get ? t.get(this) : O.propHooks._default.get(this)
                }, run: function (t) {
                    var e, i = O.propHooks[this.prop];
                    return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
                }
            }, O.prototype.init.prototype = O.prototype, O.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                    }, set: function (t) {
                        se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, se.easing = {
                linear: function (t) {
                    return t
                }, swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, se.fx = O.prototype.init, se.fx.step = {};
            var pi, fi, gi = /^(?:toggle|show|hide)$/, mi = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"), vi = /queueHooks$/, yi = [L], bi = {
                "*": [function (t, e) {
                    var i = this.createTween(t, e), n = i.cur(), s = mi.exec(e), o = s && s[3] || (se.cssNumber[t] ? "" : "px"), a = (se.cssNumber[t] || "px" !== o && +n) && mi.exec(se.css(i.elem, t)), r = 1, l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], s = s || [], a = +n || 1;
                        do r = r || ".5", a /= r, se.style(i.elem, t, a + o); while (r !== (r = i.cur() / n) && 1 !== r && --l)
                    }
                    return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
                }]
            };
            se.Animation = se.extend(W, {
                tweener: function (t, e) {
                    se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, s = t.length; s > n; n++)i = t[n], bi[i] = bi[i] || [], bi[i].unshift(e)
                }, prefilter: function (t, e) {
                    e ? yi.unshift(t) : yi.push(t)
                }
            }), se.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? se.extend({}, t) : {
                    complete: i || !i && e || se.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !se.isFunction(e) && e
                };
                return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    se.isFunction(n.old) && n.old.call(this), n.queue && se.dequeue(this, n.queue)
                }, n
            }, se.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(Ie).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
                }, animate: function (t, e, i, n) {
                    var s = se.isEmptyObject(t), o = se.speed(e, i, n), a = function () {
                        var e = W(this, se.extend({}, t), o);
                        (s || se._data(this, "finish")) && e.stop(!0)
                    };
                    return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                }, stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0, s = null != t && t + "queueHooks", o = se.timers, a = se._data(this);
                        if (s)a[s] && a[s].stop && n(a[s]); else for (s in a)a[s] && a[s].stop && vi.test(s) && n(a[s]);
                        for (s = o.length; s--;)o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        (e || !i) && se.dequeue(this, t)
                    })
                }, finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, i = se._data(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = se.timers, a = n ? n.length : 0;
                        for (i.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; a > e; e++)n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), se.each(["toggle", "show", "hide"], function (t, e) {
                var i = se.fn[e];
                se.fn[e] = function (t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, s)
                }
            }), se.each({
                slideDown: D("show"),
                slideUp: D("hide"),
                slideToggle: D("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (t, e) {
                se.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), se.timers = [], se.fx.tick = function () {
                var t, e = se.timers, i = 0;
                for (pi = se.now(); i < e.length; i++)t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                e.length || se.fx.stop(), pi = void 0
            }, se.fx.timer = function (t) {
                se.timers.push(t), t() ? se.fx.start() : se.timers.pop()
            }, se.fx.interval = 13, se.fx.start = function () {
                fi || (fi = setInterval(se.fx.tick, se.fx.interval))
            }, se.fx.stop = function () {
                clearInterval(fi), fi = null
            }, se.fx.speeds = {slow: 600, fast: 200, _default: 400}, se.fn.delay = function (t, e) {
                return t = se.fx ? se.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function () {
                        clearTimeout(n)
                    }
                })
            }, function () {
                var t, e, i, n, s;
                e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), s = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = s.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !s.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
            }();
            var xi = /\r/g;
            se.fn.extend({
                val: function (t) {
                    var e, i, n, s = this[0];
                    {
                        if (arguments.length)return n = se.isFunction(t), this.each(function (i) {
                            var s;
                            1 === this.nodeType && (s = n ? t.call(this, i, se(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : se.isArray(s) && (s = se.map(s, function (t) {
                                return null == t ? "" : t + ""
                            })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                        });
                        if (s)return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()], e && "get"in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(xi, "") : null == i ? "" : i)
                    }
                }
            }), se.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = se.find.attr(t, "value");
                            return null != e ? e : se.trim(se.text(t))
                        }
                    }, select: {
                        get: function (t) {
                            for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++)if (i = n[l], !(!i.selected && l !== s || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && se.nodeName(i.parentNode, "optgroup"))) {
                                if (e = se(i).val(), o)return e;
                                a.push(e)
                            }
                            return a
                        }, set: function (t, e) {
                            for (var i, n, s = t.options, o = se.makeArray(e), a = s.length; a--;)if (n = s[a], se.inArray(se.valHooks.option.get(n), o) >= 0)try {
                                n.selected = i = !0
                            } catch (r) {
                                n.scrollHeight
                            } else n.selected = !1;
                            return i || (t.selectedIndex = -1), s
                        }
                    }
                }
            }), se.each(["radio", "checkbox"], function () {
                se.valHooks[this] = {
                    set: function (t, e) {
                        return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
                    }
                }, ie.checkOn || (se.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            });
            var wi, Ci, Si = se.expr.attrHandle, Pi = /^(?:checked|selected)$/i, Ti = ie.getSetAttribute, Mi = ie.input;
            se.fn.extend({
                attr: function (t, e) {
                    return _e(this, se.attr, t, e, arguments.length > 1)
                }, removeAttr: function (t) {
                    return this.each(function () {
                        se.removeAttr(this, t)
                    })
                }
            }), se.extend({
                attr: function (t, e, i) {
                    var n, s, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o)return typeof t.getAttribute === Se ? se.prop(t, e, i) : (1 === o && se.isXMLDoc(t) || (e = e.toLowerCase(), n = se.attrHooks[e] || (se.expr.match.bool.test(e) ? Ci : wi)), void 0 === i ? n && "get"in n && null !== (s = n.get(t, e)) ? s : (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set"in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : (se.removeAttr(t, e), void 0))
                }, removeAttr: function (t, e) {
                    var i, n, s = 0, o = e && e.match(be);
                    if (o && 1 === t.nodeType)for (; i = o[s++];)n = se.propFix[i] || i, se.expr.match.bool.test(i) ? Mi && Ti || !Pi.test(i) ? t[n] = !1 : t[se.camelCase("default-" + i)] = t[n] = !1 : se.attr(t, i, ""), t.removeAttribute(Ti ? i : n)
                }, attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e), i && (t.value = i), e
                            }
                        }
                    }
                }
            }), Ci = {
                set: function (t, e, i) {
                    return e === !1 ? se.removeAttr(t, i) : Mi && Ti || !Pi.test(i) ? t.setAttribute(!Ti && se.propFix[i] || i, i) : t[se.camelCase("default-" + i)] = t[i] = !0, i
                }
            }, se.each(se.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var i = Si[e] || se.find.attr;
                Si[e] = Mi && Ti || !Pi.test(e) ? function (t, e, n) {
                    var s, o;
                    return n || (o = Si[e], Si[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Si[e] = o), s
                } : function (t, e, i) {
                    return i ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
                }
            }), Mi && Ti || (se.attrHooks.value = {
                set: function (t, e, i) {
                    return se.nodeName(t, "input") ? (t.defaultValue = e, void 0) : wi && wi.set(t, e, i)
                }
            }), Ti || (wi = {
                set: function (t, e, i) {
                    var n = t.getAttributeNode(i);
                    return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
                }
            }, Si.id = Si.name = Si.coords = function (t, e, i) {
                var n;
                return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
            }, se.valHooks.button = {
                get: function (t, e) {
                    var i = t.getAttributeNode(e);
                    return i && i.specified ? i.value : void 0
                }, set: wi.set
            }, se.attrHooks.contenteditable = {
                set: function (t, e, i) {
                    wi.set(t, "" === e ? !1 : e, i)
                }
            }, se.each(["width", "height"], function (t, e) {
                se.attrHooks[e] = {
                    set: function (t, i) {
                        return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                    }
                }
            })), ie.style || (se.attrHooks.style = {
                get: function (t) {
                    return t.style.cssText || void 0
                }, set: function (t, e) {
                    return t.style.cssText = e + ""
                }
            });
            var ki = /^(?:input|select|textarea|button|object)$/i, Ii = /^(?:a|area)$/i;
            se.fn.extend({
                prop: function (t, e) {
                    return _e(this, se.prop, t, e, arguments.length > 1)
                }, removeProp: function (t) {
                    return t = se.propFix[t] || t, this.each(function () {
                        try {
                            this[t] = void 0, delete this[t]
                        } catch (e) {
                        }
                    })
                }
            }), se.extend({
                propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
                    var n, s, o, a = t.nodeType;
                    if (t && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !se.isXMLDoc(t), o && (e = se.propFix[e] || e, s = se.propHooks[e]), void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get"in s && null !== (n = s.get(t, e)) ? n : t[e]
                }, propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = se.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : ki.test(t.nodeName) || Ii.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                }
            }), ie.hrefNormalized || se.each(["href", "src"], function (t, e) {
                se.propHooks[e] = {
                    get: function (t) {
                        return t.getAttribute(e, 4)
                    }
                }
            }), ie.optSelected || (se.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                }
            }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                se.propFix[this.toLowerCase()] = this
            }), ie.enctype || (se.propFix.enctype = "encoding");
            var _i = /[\t\r\n\f]/g;
            se.fn.extend({
                addClass: function (t) {
                    var e, i, n, s, o, a, r = 0, l = this.length, h = "string" == typeof t && t;
                    if (se.isFunction(t))return this.each(function (e) {
                        se(this).addClass(t.call(this, e, this.className))
                    });
                    if (h)for (e = (t || "").match(be) || []; l > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_i, " ") : " ")) {
                        for (o = 0; s = e[o++];)n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        a = se.trim(n), i.className !== a && (i.className = a)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, i, n, s, o, a, r = 0, l = this.length, h = 0 === arguments.length || "string" == typeof t && t;
                    if (se.isFunction(t))return this.each(function (e) {
                        se(this).removeClass(t.call(this, e, this.className))
                    });
                    if (h)for (e = (t || "").match(be) || []; l > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_i, " ") : "")) {
                        for (o = 0; s = e[o++];)for (; n.indexOf(" " + s + " ") >= 0;)n = n.replace(" " + s + " ", " ");
                        a = t ? se.trim(n) : "", i.className !== a && (i.className = a)
                    }
                    return this
                }, toggleClass: function (t, e) {
                    var i = typeof t;
                    return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : se.isFunction(t) ? this.each(function (i) {
                        se(this).toggleClass(t.call(this, i, this.className, e), e)
                    }) : this.each(function () {
                        if ("string" === i)for (var e, n = 0, s = se(this), o = t.match(be) || []; e = o[n++];)s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else(i === Se || "boolean" === i) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
                    })
                }, hasClass: function (t) {
                    for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(_i, " ").indexOf(e) >= 0)return !0;
                    return !1
                }
            }), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                se.fn[e] = function (t, i) {
                    return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                }
            }), se.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }, bind: function (t, e, i) {
                    return this.on(t, null, e, i)
                }, unbind: function (t, e) {
                    return this.off(t, null, e)
                }, delegate: function (t, e, i, n) {
                    return this.on(e, t, i, n)
                }, undelegate: function (t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                }
            });
            var Ai = se.now(), Ei = /\?/, Oi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            se.parseJSON = function (e) {
                if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
                var i, n = null, s = se.trim(e + "");
                return s && !se.trim(s.replace(Oi, function (t, e, s, o) {
                    return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
                })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
            }, se.parseXML = function (e) {
                var i, n;
                if (!e || "string" != typeof e)return null;
                try {
                    t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
                } catch (s) {
                    i = void 0
                }
                return i && i.documentElement && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e), i
            };
            var $i, Di, Ni = /#.*$/, Li = /([?&])_=[^&]*/, zi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Wi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Hi = /^(?:GET|HEAD)$/, Bi = /^\/\//, Fi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ji = {}, Ui = {}, Ri = "*/".concat("*");
            try {
                Di = location.href
            } catch (Vi) {
                Di = fe.createElement("a"), Di.href = "", Di = Di.href
            }
            $i = Fi.exec(Di.toLowerCase()) || [], se.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Di,
                    type: "GET",
                    isLocal: Wi.test($i[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ri,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": se.parseJSON, "text xml": se.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (t, e) {
                    return e ? F(F(t, se.ajaxSettings), e) : F(se.ajaxSettings, t)
                },
                ajaxPrefilter: H(ji),
                ajaxTransport: H(Ui),
                ajax: function (t, e) {
                    function i(t, e, i, n) {
                        var s, c, v, y, x, C = e;
                        2 !== b && (b = 2, r && clearTimeout(r), h = void 0, a = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = j(d, w, i)), y = U(d, y, w, s), s ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (se.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (se.etag[o] = x)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, s = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || C) + "", s ? f.resolveWith(u, [c, C, w]) : f.rejectWith(u, [w, C, v]), w.statusCode(m), m = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, d, s ? c : v]), g.fireWith(u, [w, C]), l && (p.trigger("ajaxComplete", [w, d]), --se.active || se.event.trigger("ajaxStop")))
                    }

                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var n, s, o, a, r, l, h, c, d = se.ajaxSetup({}, e), u = d.context || d, p = d.context && (u.nodeType || u.jquery) ? se(u) : se.event, f = se.Deferred(), g = se.Callbacks("once memory"), m = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!c)for (c = {}; e = zi.exec(a);)c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return b || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)if (2 > b)for (e in t)m[e] = [m[e], t[e]]; else w.always(t[w.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || x;
                            return h && h.abort(e), i(0, e), this
                        }
                    };
                    if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || Di) + "").replace(Ni, "").replace(Bi, $i[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = se.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (n = Fi.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === $i[1] && n[2] === $i[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === ($i[3] || ("http:" === $i[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = se.param(d.data, d.traditional)), B(ji, d, e, w), 2 === b)return w;
                    l = se.event && d.global, l && 0 === se.active++ && se.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Hi.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ei.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Li.test(o) ? o.replace(Li, "$1_=" + Ai++) : o + (Ei.test(o) ? "&" : "?") + "_=" + Ai++)), d.ifModified && (se.lastModified[o] && w.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && w.setRequestHeader("If-None-Match", se.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ri + "; q=0.01" : "") : d.accepts["*"]);
                    for (s in d.headers)w.setRequestHeader(s, d.headers[s]);
                    if (d.beforeSend && (d.beforeSend.call(u, w, d) === !1 || 2 === b))return w.abort();
                    x = "abort";
                    for (s in{success: 1, error: 1, complete: 1})w[s](d[s]);
                    if (h = B(Ui, d, e, w)) {
                        w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (r = setTimeout(function () {
                            w.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1, h.send(v, i)
                        } catch (C) {
                            if (!(2 > b))throw C;
                            i(-1, C)
                        }
                    } else i(-1, "No Transport");
                    return w
                },
                getJSON: function (t, e, i) {
                    return se.get(t, e, i, "json")
                },
                getScript: function (t, e) {
                    return se.get(t, void 0, e, "script")
                }
            }), se.each(["get", "post"], function (t, e) {
                se[e] = function (t, i, n, s) {
                    return se.isFunction(i) && (s = s || n, n = i, i = void 0), se.ajax({
                        url: t,
                        type: e,
                        dataType: s,
                        data: i,
                        success: n
                    })
                }
            }), se._evalUrl = function (t) {
                return se.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, se.fn.extend({
                wrapAll: function (t) {
                    if (se.isFunction(t))return this.each(function (e) {
                        se(this).wrapAll(t.call(this, e))
                    });
                    if (this[0]) {
                        var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                            return t
                        }).append(this)
                    }
                    return this
                }, wrapInner: function (t) {
                    return se.isFunction(t) ? this.each(function (e) {
                        se(this).wrapInner(t.call(this, e))
                    }) : this.each(function () {
                        var e = se(this), i = e.contents();
                        i.length ? i.wrapAll(t) : e.append(t)
                    })
                }, wrap: function (t) {
                    var e = se.isFunction(t);
                    return this.each(function (i) {
                        se(this).wrapAll(e ? t.call(this, i) : t)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), se.expr.filters.hidden = function (t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
            }, se.expr.filters.visible = function (t) {
                return !se.expr.filters.hidden(t)
            };
            var qi = /%20/g, Xi = /\[\]$/, Yi = /\r?\n/g, Gi = /^(?:submit|button|image|reset|file)$/i, Zi = /^(?:input|select|textarea|keygen)/i;
            se.param = function (t, e) {
                var i, n = [], s = function (t, e) {
                    e = se.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t))se.each(t, function () {
                    s(this.name, this.value)
                }); else for (i in t)R(i, t[i], e, s);
                return n.join("&").replace(qi, "+")
            }, se.fn.extend({
                serialize: function () {
                    return se.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var t = se.prop(this, "elements");
                        return t ? se.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !se(this).is(":disabled") && Zi.test(this.nodeName) && !Gi.test(t) && (this.checked || !Ae.test(t))
                    }).map(function (t, e) {
                        var i = se(this).val();
                        return null == i ? null : se.isArray(i) ? se.map(i, function (t) {
                            return {name: e.name, value: t.replace(Yi, "\r\n")}
                        }) : {name: e.name, value: i.replace(Yi, "\r\n")}
                    }).get()
                }
            }), se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || q()
            } : V;
            var Qi = 0, Ki = {}, Ji = se.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function () {
                for (var t in Ki)Ki[t](void 0, !0)
            }), ie.cors = !!Ji && "withCredentials"in Ji, Ji = ie.ajax = !!Ji, Ji && se.ajaxTransport(function (t) {
                if (!t.crossDomain || ie.cors) {
                    var e;
                    return {
                        send: function (i, n) {
                            var s, o = t.xhr(), a = ++Qi;
                            if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (s in t.xhrFields)o[s] = t.xhrFields[s];
                            t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (s in i)void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                            o.send(t.hasContent && t.data || null), e = function (i, s) {
                                var r, l, h;
                                if (e && (s || 4 === o.readyState))if (delete Ki[a], e = void 0, o.onreadystatechange = se.noop, s)4 !== o.readyState && o.abort(); else {
                                    h = {}, r = o.status, "string" == typeof o.responseText && (h.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = h.text ? 200 : 404
                                }
                                h && n(r, l, h, o.getAllResponseHeaders())
                            }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Ki[a] = e : e()
                        }, abort: function () {
                            e && e(void 0, !0)
                        }
                    }
                }
            }), se.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (t) {
                        return se.globalEval(t), t
                    }
                }
            }), se.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
            }), se.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e, i = fe.head || se("head")[0] || fe.documentElement;
                    return {
                        send: function (n, s) {
                            e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                                (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                            }, i.insertBefore(e, i.firstChild)
                        }, abort: function () {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
            var tn = [], en = /(=)\?(?=&|$)|\?\?/;
            se.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var t = tn.pop() || se.expando + "_" + Ai++;
                    return this[t] = !0, t
                }
            }), se.ajaxPrefilter("json jsonp", function (e, i, n) {
                var s, o, a, r = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
                return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Ei.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                    return a || se.error(s + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
                    a = arguments
                }, n.always(function () {
                    t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)), a && se.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), se.parseHTML = function (t, e, i) {
                if (!t || "string" != typeof t)return null;
                "boolean" == typeof e && (i = e, e = !1), e = e || fe;
                var n = de.exec(t), s = !i && [];
                return n ? [e.createElement(n[1])] : (n = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], n.childNodes))
            };
            var nn = se.fn.load;
            se.fn.load = function (t, e, i) {
                if ("string" != typeof t && nn)return nn.apply(this, arguments);
                var n, s, o, a = this, r = t.indexOf(" ");
                return r >= 0 && (n = se.trim(t.slice(r, t.length)), t = t.slice(0, r)), se.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && se.ajax({
                    url: t,
                    type: o,
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    s = arguments, a.html(n ? se("<div>").append(se.parseHTML(t)).find(n) : t)
                }).complete(i && function (t, e) {
                    a.each(i, s || [t.responseText, e, t])
                }), this
            }, se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                se.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), se.expr.filters.animated = function (t) {
                return se.grep(se.timers, function (e) {
                    return t === e.elem
                }).length
            };
            var sn = t.document.documentElement;
            se.offset = {
                setOffset: function (t, e, i) {
                    var n, s, o, a, r, l, h, c = se.css(t, "position"), d = se(t), u = {};
                    "static" === c && (t.style.position = "relative"), r = d.offset(), o = se.css(t, "top"), l = se.css(t, "left"), h = ("absolute" === c || "fixed" === c) && se.inArray("auto", [o, l]) > -1, h ? (n = d.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), se.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (u.top = e.top - r.top + a), null != e.left && (u.left = e.left - r.left + s), "using"in e ? e.using.call(t, u) : d.css(u)
                }
            }, se.fn.extend({
                offset: function (t) {
                    if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                        se.offset.setOffset(this, t, e)
                    });
                    var e, i, n = {top: 0, left: 0}, s = this[0], o = s && s.ownerDocument;
                    if (o)return e = o.documentElement, se.contains(e, s) ? (typeof s.getBoundingClientRect !== Se && (n = s.getBoundingClientRect()), i = X(o), {
                        top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : n
                }, position: function () {
                    if (this[0]) {
                        var t, e, i = {top: 0, left: 0}, n = this[0];
                        return "fixed" === se.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (i = t.offset()), i.top += se.css(t[0], "borderTopWidth", !0), i.left += se.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - i.top - se.css(n, "marginTop", !0),
                            left: e.left - i.left - se.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || sn; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");)t = t.offsetParent;
                        return t || sn
                    })
                }
            }), se.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
                var i = /Y/.test(e);
                se.fn[t] = function (n) {
                    return _e(this, function (t, n, s) {
                        var o = X(t);
                        return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : (o ? o.scrollTo(i ? se(o).scrollLeft() : s, i ? s : se(o).scrollTop()) : t[n] = s, void 0)
                    }, t, n, arguments.length, null)
                }
            }), se.each(["top", "left"], function (t, e) {
                se.cssHooks[e] = M(ie.pixelPosition, function (t, i) {
                    return i ? (i = ei(t, e), ni.test(i) ? se(t).position()[e] + "px" : i) : void 0
                })
            }), se.each({Height: "height", Width: "width"}, function (t, e) {
                se.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
                    se.fn[n] = function (n, s) {
                        var o = arguments.length && (i || "boolean" != typeof n), a = i || (n === !0 || s === !0 ? "margin" : "border");
                        return _e(this, function (e, i, n) {
                            var s;
                            return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? se.css(e, i, a) : se.style(e, i, n, a)
                        }, e, o ? n : void 0, o, null)
                    }
                })
            }), se.fn.size = function () {
                return this.length
            }, se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return se
            });
            var on = t.jQuery, an = t.$;
            return se.noConflict = function (e) {
                return t.$ === se && (t.$ = an), e && t.jQuery === se && (t.jQuery = on), se
            }, typeof e === Se && (t.jQuery = t.$ = se), se
        })
    }, {}],
    6: [function () {
        !function (t) {
            "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
        }(function (t) {
            "use strict";
            function e(e) {
                return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function () {
                    var n = t(this), s = n.data(k);
                    s || (s = new i(this, e), n.data(k, s))
                })
            }

            function i(e, i) {
                function I(e) {
                    if (!(he() || t(e.target).closest(i.excludedElements, Re).length > 0)) {
                        var n, s = e.originalEvent ? e.originalEvent : e, o = P ? s.touches[0] : s;
                        return Ve = x, P ? qe = s.touches.length : e.preventDefault(), Ne = 0, Le = null, je = null, ze = 0, We = 0, He = 0, Be = 1, Fe = 0, Xe = fe(), Ue = ve(), re(), !P || qe === i.fingers || i.fingers === y || U() ? (de(0, o), Ye = Me(), 2 == qe && (de(1, s.touches[1]), We = He = xe(Xe[0].start, Xe[1].start)), (i.swipeStatus || i.pinchStatus) && (n = N(s, Ve))) : n = !1, n === !1 ? (Ve = S, N(s, Ve), n) : (i.hold && (ti = setTimeout(t.proxy(function () {
                            Re.trigger("hold", [s.target]), i.hold && (n = i.hold.call(Re, s, s.target))
                        }, this), i.longTapThreshold)), ce(!0), null)
                    }
                }

                function _(t) {
                    var e = t.originalEvent ? t.originalEvent : t;
                    if (Ve !== C && Ve !== S && !le()) {
                        var n, s = P ? e.touches[0] : e, o = ue(s);
                        if (Ge = Me(), P && (qe = e.touches.length), i.hold && clearTimeout(ti), Ve = w, 2 == qe && (0 == We ? (de(1, e.touches[1]), We = He = xe(Xe[0].start, Xe[1].start)) : (ue(e.touches[1]), He = xe(Xe[0].end, Xe[1].end), je = Ce(Xe[0].end, Xe[1].end)), Be = we(We, He), Fe = Math.abs(We - He)), qe === i.fingers || i.fingers === y || !P || U()) {
                            if (Le = Te(o.start, o.end), F(t, Le), Ne = Se(o.start, o.end), ze = be(), ge(Le, Ne), (i.swipeStatus || i.pinchStatus) && (n = N(e, Ve)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                                var a = !0;
                                if (i.triggerOnTouchLeave) {
                                    var r = ke(this);
                                    a = Ie(o.end, r)
                                }
                                !i.triggerOnTouchEnd && a ? Ve = D(w) : i.triggerOnTouchLeave && !a && (Ve = D(C)), (Ve == S || Ve == C) && N(e, Ve)
                            }
                        } else Ve = S, N(e, Ve);
                        n === !1 && (Ve = S, N(e, Ve))
                    }
                }

                function A(t) {
                    var e = t.originalEvent;
                    return P && e.touches.length > 0 ? (ae(), !0) : (le() && (qe = Qe), Ge = Me(), ze = be(), W() || !z() ? (Ve = S, N(e, Ve)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Ve === w ? (t.preventDefault(), Ve = C, N(e, Ve)) : !i.triggerOnTouchEnd && Z() ? (Ve = C, L(e, Ve, p)) : Ve === w && (Ve = S, N(e, Ve)), ce(!1), null)
                }

                function E() {
                    qe = 0, Ge = 0, Ye = 0, We = 0, He = 0, Be = 1, re(), ce(!1)
                }

                function O(t) {
                    var e = t.originalEvent;
                    i.triggerOnTouchLeave && (Ve = D(C), N(e, Ve))
                }

                function $() {
                    Re.unbind(Ae, I), Re.unbind(De, E), Re.unbind(Ee, _), Re.unbind(Oe, A), $e && Re.unbind($e, O), ce(!1)
                }

                function D(t) {
                    var e = t, n = B(), s = z(), o = W();
                    return !n || o ? e = S : !s || t != w || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !s && t == C && i.triggerOnTouchLeave && (e = S) : e = C, e
                }

                function N(t, e) {
                    var i = void 0;
                    return X() || q() || R() || U() ? ((X() || q()) && (i = L(t, e, d)), (R() || U()) && i !== !1 && (i = L(t, e, u))) : se() && i !== !1 ? i = L(t, e, f) : oe() && i !== !1 ? i = L(t, e, g) : ne() && i !== !1 && (i = L(t, e, p)), e === S && E(t), e === C && (P ? 0 == t.touches.length && E(t) : E(t)), i
                }

                function L(e, h, c) {
                    var m = void 0;
                    if (c == d) {
                        if (Re.trigger("swipeStatus", [h, Le || null, Ne || 0, ze || 0, qe, Xe]), i.swipeStatus && (m = i.swipeStatus.call(Re, e, h, Le || null, Ne || 0, ze || 0, qe, Xe), m === !1))return !1;
                        if (h == C && V()) {
                            if (Re.trigger("swipe", [Le, Ne, ze, qe, Xe]), i.swipe && (m = i.swipe.call(Re, e, Le, Ne, ze, qe, Xe), m === !1))return !1;
                            switch (Le) {
                                case n:
                                    Re.trigger("swipeLeft", [Le, Ne, ze, qe, Xe]), i.swipeLeft && (m = i.swipeLeft.call(Re, e, Le, Ne, ze, qe, Xe));
                                    break;
                                case s:
                                    Re.trigger("swipeRight", [Le, Ne, ze, qe, Xe]), i.swipeRight && (m = i.swipeRight.call(Re, e, Le, Ne, ze, qe, Xe));
                                    break;
                                case o:
                                    Re.trigger("swipeUp", [Le, Ne, ze, qe, Xe]), i.swipeUp && (m = i.swipeUp.call(Re, e, Le, Ne, ze, qe, Xe));
                                    break;
                                case a:
                                    Re.trigger("swipeDown", [Le, Ne, ze, qe, Xe]), i.swipeDown && (m = i.swipeDown.call(Re, e, Le, Ne, ze, qe, Xe))
                            }
                        }
                    }
                    if (c == u) {
                        if (Re.trigger("pinchStatus", [h, je || null, Fe || 0, ze || 0, qe, Be, Xe]), i.pinchStatus && (m = i.pinchStatus.call(Re, e, h, je || null, Fe || 0, ze || 0, qe, Be, Xe), m === !1))return !1;
                        if (h == C && j())switch (je) {
                            case r:
                                Re.trigger("pinchIn", [je || null, Fe || 0, ze || 0, qe, Be, Xe]), i.pinchIn && (m = i.pinchIn.call(Re, e, je || null, Fe || 0, ze || 0, qe, Be, Xe));
                                break;
                            case l:
                                Re.trigger("pinchOut", [je || null, Fe || 0, ze || 0, qe, Be, Xe]), i.pinchOut && (m = i.pinchOut.call(Re, e, je || null, Fe || 0, ze || 0, qe, Be, Xe))
                        }
                    }
                    return c == p ? (h === S || h === C) && (clearTimeout(Je), clearTimeout(ti), Q() && !te() ? (Ke = Me(), Je = setTimeout(t.proxy(function () {
                        Ke = null, Re.trigger("tap", [e.target]), i.tap && (m = i.tap.call(Re, e, e.target))
                    }, this), i.doubleTapThreshold)) : (Ke = null, Re.trigger("tap", [e.target]), i.tap && (m = i.tap.call(Re, e, e.target)))) : c == f ? (h === S || h === C) && (clearTimeout(Je), Ke = null, Re.trigger("doubletap", [e.target]), i.doubleTap && (m = i.doubleTap.call(Re, e, e.target))) : c == g && (h === S || h === C) && (clearTimeout(Je), Ke = null, Re.trigger("longtap", [e.target]), i.longTap && (m = i.longTap.call(Re, e, e.target))), m
                }

                function z() {
                    var t = !0;
                    return null !== i.threshold && (t = Ne >= i.threshold), t
                }

                function W() {
                    var t = !1;
                    return null !== i.cancelThreshold && null !== Le && (t = me(Le) - Ne >= i.cancelThreshold), t
                }

                function H() {
                    return null !== i.pinchThreshold ? Fe >= i.pinchThreshold : !0
                }

                function B() {
                    var t;
                    return t = i.maxTimeThreshold ? ze >= i.maxTimeThreshold ? !1 : !0 : !0
                }

                function F(t, e) {
                    if (i.preventDefaultEvents !== !1)if (i.allowPageScroll === h)t.preventDefault(); else {
                        var r = i.allowPageScroll === c;
                        switch (e) {
                            case n:
                                (i.swipeLeft && r || !r && i.allowPageScroll != m) && t.preventDefault();
                                break;
                            case s:
                                (i.swipeRight && r || !r && i.allowPageScroll != m) && t.preventDefault();
                                break;
                            case o:
                                (i.swipeUp && r || !r && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case a:
                                (i.swipeDown && r || !r && i.allowPageScroll != v) && t.preventDefault()
                        }
                    }
                }

                function j() {
                    var t = Y(), e = G(), i = H();
                    return t && e && i
                }

                function U() {
                    return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
                }

                function R() {
                    return !(!j() || !U())
                }

                function V() {
                    var t = B(), e = z(), i = Y(), n = G(), s = W(), o = !s && n && i && e && t;
                    return o
                }

                function q() {
                    return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
                }

                function X() {
                    return !(!V() || !q())
                }

                function Y() {
                    return qe === i.fingers || i.fingers === y || !P
                }

                function G() {
                    return 0 !== Xe[0].end.x
                }

                function Z() {
                    return !!i.tap
                }

                function Q() {
                    return !!i.doubleTap
                }

                function K() {
                    return !!i.longTap
                }

                function J() {
                    if (null == Ke)return !1;
                    var t = Me();
                    return Q() && t - Ke <= i.doubleTapThreshold
                }

                function te() {
                    return J()
                }

                function ee() {
                    return (1 === qe || !P) && (isNaN(Ne) || Ne < i.threshold)
                }

                function ie() {
                    return ze > i.longTapThreshold && b > Ne
                }

                function ne() {
                    return !(!ee() || !Z())
                }

                function se() {
                    return !(!J() || !Q())
                }

                function oe() {
                    return !(!ie() || !K())
                }

                function ae() {
                    Ze = Me(), Qe = event.touches.length + 1
                }

                function re() {
                    Ze = 0, Qe = 0
                }

                function le() {
                    var t = !1;
                    if (Ze) {
                        var e = Me() - Ze;
                        e <= i.fingerReleaseThreshold && (t = !0)
                    }
                    return t
                }

                function he() {
                    return !(Re.data(k + "_intouch") !== !0)
                }

                function ce(t) {
                    t === !0 ? (Re.bind(Ee, _), Re.bind(Oe, A), $e && Re.bind($e, O)) : (Re.unbind(Ee, _, !1), Re.unbind(Oe, A, !1), $e && Re.unbind($e, O, !1)), Re.data(k + "_intouch", t === !0)
                }

                function de(t, e) {
                    var i = void 0 !== e.identifier ? e.identifier : 0;
                    return Xe[t].identifier = i, Xe[t].start.x = Xe[t].end.x = e.pageX || e.clientX, Xe[t].start.y = Xe[t].end.y = e.pageY || e.clientY, Xe[t]
                }

                function ue(t) {
                    var e = void 0 !== t.identifier ? t.identifier : 0, i = pe(e);
                    return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
                }

                function pe(t) {
                    for (var e = 0; e < Xe.length; e++)if (Xe[e].identifier == t)return Xe[e]
                }

                function fe() {
                    for (var t = [], e = 0; 5 >= e; e++)t.push({start: {x: 0, y: 0}, end: {x: 0, y: 0}, identifier: 0});
                    return t
                }

                function ge(t, e) {
                    e = Math.max(e, me(t)), Ue[t].distance = e
                }

                function me(t) {
                    return Ue[t] ? Ue[t].distance : void 0
                }

                function ve() {
                    var t = {};
                    return t[n] = ye(n), t[s] = ye(s), t[o] = ye(o), t[a] = ye(a), t
                }

                function ye(t) {
                    return {direction: t, distance: 0}
                }

                function be() {
                    return Ge - Ye
                }

                function xe(t, e) {
                    var i = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
                    return Math.round(Math.sqrt(i * i + n * n))
                }

                function we(t, e) {
                    var i = e / t * 1;
                    return i.toFixed(2)
                }

                function Ce() {
                    return 1 > Be ? l : r
                }

                function Se(t, e) {
                    return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
                }

                function Pe(t, e) {
                    var i = t.x - e.x, n = e.y - t.y, s = Math.atan2(n, i), o = Math.round(180 * s / Math.PI);
                    return 0 > o && (o = 360 - Math.abs(o)), o
                }

                function Te(t, e) {
                    var i = Pe(t, e);
                    return 45 >= i && i >= 0 ? n : 360 >= i && i >= 315 ? n : i >= 135 && 225 >= i ? s : i > 45 && 135 > i ? a : o
                }

                function Me() {
                    var t = new Date;
                    return t.getTime()
                }

                function ke(e) {
                    e = t(e);
                    var i = e.offset(), n = {
                        left: i.left,
                        right: i.left + e.outerWidth(),
                        top: i.top,
                        bottom: i.top + e.outerHeight()
                    };
                    return n
                }

                function Ie(t, e) {
                    return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
                }

                var _e = P || M || !i.fallbackToMouseEvents, Ae = _e ? M ? T ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", Ee = _e ? M ? T ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", Oe = _e ? M ? T ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", $e = _e ? null : "mouseleave", De = M ? T ? "MSPointerCancel" : "pointercancel" : "touchcancel", Ne = 0, Le = null, ze = 0, We = 0, He = 0, Be = 1, Fe = 0, je = 0, Ue = null, Re = t(e), Ve = "start", qe = 0, Xe = null, Ye = 0, Ge = 0, Ze = 0, Qe = 0, Ke = 0, Je = null, ti = null;
                try {
                    Re.bind(Ae, I), Re.bind(De, E)
                } catch (ei) {
                    t.error("events not supported " + Ae + "," + De + " on jQuery.swipe")
                }
                this.enable = function () {
                    return Re.bind(Ae, I), Re.bind(De, E), Re
                }, this.disable = function () {
                    return $(), Re
                }, this.destroy = function () {
                    $(), Re.data(k, null), Re = null
                }, this.option = function (e, n) {
                    if (void 0 !== i[e]) {
                        if (void 0 === n)return i[e];
                        i[e] = n
                    } else t.error("Option " + e + " does not exist on jQuery.swipe.options");
                    return null
                }
            }

            var n = "left", s = "right", o = "up", a = "down", r = "in", l = "out", h = "none", c = "auto", d = "swipe", u = "pinch", p = "tap", f = "doubletap", g = "longtap", m = "horizontal", v = "vertical", y = "all", b = 10, x = "start", w = "move", C = "end", S = "cancel", P = "ontouchstart"in window, T = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, M = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, k = "TouchSwipe", I = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe",
                preventDefaultEvents: !0
            };
            t.fn.swipe = function (i) {
                var n = t(this), s = n.data(k);
                if (s && "string" == typeof i) {
                    if (s[i])return s[i].apply(this, Array.prototype.slice.call(arguments, 1));
                    t.error("Method " + i + " does not exist on jQuery.swipe")
                } else if (!(s || "object" != typeof i && i))return e.apply(this, arguments);
                return n
            }, t.fn.swipe.defaults = I, t.fn.swipe.phases = {
                PHASE_START: x,
                PHASE_MOVE: w,
                PHASE_END: C,
                PHASE_CANCEL: S
            }, t.fn.swipe.directions = {
                LEFT: n,
                RIGHT: s,
                UP: o,
                DOWN: a,
                IN: r,
                OUT: l
            }, t.fn.swipe.pageScroll = {NONE: h, HORIZONTAL: m, VERTICAL: v, AUTO: c}, t.fn.swipe.fingers = {
                ONE: 1,
                TWO: 2,
                THREE: 3,
                ALL: y
            }
        })
    }, {}],
    7: [function (t, e) {
        function i(t) {
            return t ? (t._a || (t._a = {prop: {}, css: {}, anim: new l}), t._a) : {prop: {}, css: {}}
        }

        function n(t) {
            if (t) {
                var e = t._id;
                return e || (t._id = e = ++c), e
            }
            return ++c
        }

        function s(t, e, i) {
            this.element = t, this.options = a.mix({
                duration: 350,
                easing: "ease-out",
                progress: null,
                complete: null
            }, i), this.startTime = r.now(), this.endTime = this.startTime + this.options.duration, this.processProperties(e), this.running ? r.next(this.tick, this) : r.next(this.finished, this, ["complete"])
        }

        function o(t, e, n, o, a) {
            var r, l = {}, h = i(t).anim;
            return n && "object" == typeof n ? l = n : ("number" == typeof n && (l.duration = n), "string" == typeof o && (l.easing = o), "function" == typeof a && (l.complete = a)), r = new s(t, e, l), h.push(r), r
        }

        var a = t("./animate/utils"), r = t("./animate/timer"), l = t("./animate/arraymap"), h = t("./animate/css"), c = 0, d = /(\d*\.\d+|\-?\d+\.\d+|\-?\d+)(px|em|%|in|cm|mm|ex|pt|pc)?/, u = {
            process: function (t) {
                for (var e, n, s = t.changes, o = u.setters, a = {}, r = new l, h = i(t.element).css; e = s.shift();)n = o[e] ? o[e].process(e, t) : o._default.process(e, t), n && (a[n[0]] = n[1], r.push(n[0]));
                for (; e = r.shift();)a[e] != h[e] && (h[e] = a[e], t.element.style[e] = a[e])
            }, parse: function (t, e) {
                var i;
                if ("string" == typeof e) {
                    var n = e.match(d);
                    i = n ? [parseFloat(n[1]), n[2]] : [null, e]
                } else {
                    if (null == e)return null;
                    i = [e]
                }
                return i && i[0] && ("translateX" !== t && "translateY" !== t || "px" !== i[1] ? "opacity" === t && (i[0] = .01 * Math.round(i[0] / .01)) : i[0] = .5 * Math.round(i[0] / .5)), i
            }, format: function (t, e) {
                var i = null == e[0] ? "" : e[0], n = e[1] ? e[1] : "";
                return i + String(n)
            }, diff: function (t, e) {
                return null != t[0] && null != e[0] ? e[0] - t[0] : 0
            }, tween: function (t, e, i, n) {
                return null != t[0] ? i * n + t[0] : e[0]
            }, normalizeUnit: function (t, e) {
                t[1] !== e[1] && (t[1] && !e[1] ? e[1] = t[1] : t[1] = !t[1] && e[1] ? e[1] : e[1])
            }, setters: {}
        }, p = u.setters;
        p._default = {
            process: function (t, e) {
                var n = i(e.element).prop[t];
                return [h.getPrefix(t) || t, null == n ? null : n]
            }
        }, p.scaleX = p.scaleY = p.scaleZ = p.translateX = p.translateY = p.translateZ = p.rotateX = p.rotateY = p.rotateZ = p.skewX = p.skewY = p.hwAcceleration = {
            defaults: {
                hwAcceleration: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                translateX: "0px",
                translateY: "0px",
                translateZ: "0px",
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg",
                skewX: "0deg",
                skewY: "0deg"
            }, process: function (t, e) {
                for (var n = i(e.element).prop, s = this.defaults, o = Object.keys(s), a = 0, r = null, l = o.length, c = {}; l > a; a++)r = o[a], c[r] = r in n && null != n[r] ? n[r] : s[r], e.changes.remove(r);
                return $.support.transform3d && (n.hwAcceleration || c.hwAcceleration) ? [h.getPrefix("transform"), "translate3d(" + c.translateX + ", " + c.translateY + ", " + c.translateZ + ")scale3d(" + c.scaleX + ", " + c.scaleY + ", " + c.scaleZ + ") rotateX(" + c.rotateX + ") rotateY(" + c.rotateY + ") rotateZ(" + c.rotateZ + ") "] : [h.getPrefix("transform"), "translate(" + c.translateX + ", " + c.translateY + ") scale(" + c.scaleX + ", " + c.scaleY + ") "]
            }
        };
        var f = {
            waiting: !1, scheduled_obj: {}, scheduled_ids: new l, process: function (t, e) {
                if (e === !0)u.process(t); else {
                    var i = n(t.element), s = this.scheduled_obj;
                    this.scheduled_ids.push(i), s[i] ? s[i].changes.concat(t.changes) : s[i] = t, this.waiting || (r.next(this.apply, this), this.waiting = !0)
                }
            }, apply: function () {
                var t, e = this.scheduled_obj, i = this.scheduled_ids;
                for (this.waiting = !1; t = i.shift();)e[t] && (u.process(e[t]), e[t] = null)
            }
        }, g = {
            linear: function (t, e, i, n, s) {
                return e / s * n + i
            }, spring: function (t, e, i, n, s) {
                var o = e / s;
                return (1 - Math.cos(4.5 * o * Math.PI) * Math.exp(6 * -o)) * (n - i) + i
            }, "ease-out": function (t, e, i, n, s) {
                return n * Math.sin(e / s * (Math.PI / 2)) + i
            }, "ease-in-out": function (t, e, i, n, s) {
                return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
            }, "ease-in-out-reverse": function (t, e, i, n, s) {
                e = s - e;
                var o = -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i;
                return n - o + i
            }, "ease-in-out-expo": function (t, e, i, n, s) {
                return 0 === e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
            }, "ease-in-out-quart": function (t, e, i, n, s) {
                return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
            }, easeOutQuint: function (t, e, i, n, s) {
                return e /= s, e--, n * (e * e * e * e * e + 1) + i
            }, easeInQuint: function (t, e, i, n, s) {
                return e /= s, n * e * e * e * e * e + i
            }, easeInOutQuint: function (t, e, i, n, s) {
                return e /= s / 2, 1 > e ? n / 2 * e * e * e * e * e + i : (e -= 2, n / 2 * (e * e * e * e * e + 2) + i)
            }, easeInOutSine: function (t, e, i, n, s) {
                return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
            }
        };
        s.prototype = {
            tick: function () {
                if (this.running) {
                    var t, e, i = this.keys.array, n = this.options, s = this.element, a = this.from, l = this.to, h = this.diff, c = 0, d = i.length, p = {}, f = Math.min(r.now(), this.endTime) - this.startTime, m = n.duration, v = g[n.easing];
                    if (d) {
                        for (; d > c; c++)t = i[c], null != a[t][0] ? (e = v(null, f, 0, 1, m) * h[t] + a[t][0], e = [e, l[t][1]]) : e = l[t], p[t] = u.format(t, e), o.set(s, p);
                        n.progress && r.next(function (t, e, i, n) {
                            this.running && n(t, e, i)
                        }, this, [this.element, f / m, p, n.progress]), m > f ? r.next(this.tick, this) : (this.running = !1, r.next(this.finished, this, ["complete"]))
                    } else this.running = !1, r.next(this.finished, this, ["complete"])
                }
            }, processProperties: function (t) {
                for (var e, i, n = Object.keys(t), s = 0, a = n.length, r = o.get(this.element, t), h = {}, c = {}, d = {}; a > s; s++)e = n[s], i = t[e], i instanceof Array ? (r[e] = u.parse(e, i[1]), h[e] = u.parse(e, i[0]), c[e] = i[0]) : (r[e] = u.parse(e, r[e]), h[e] = u.parse(e, i), c[e] = i, r[e] || (r[e] = u.parse(e, $(this.element).css(e)), r[e] || (r[e] = [h[e][0], h[e][1]]))), u.normalizeUnit(r[e], h[e]), d[e] = u.diff(r[e], h[e]);
                this.to = h, this.to_out = c, this.from = r, this.diff = d, this.running = !!n.length, this.keys = new l(n)
            }, stop: function (t, e) {
                var i = this.keys, n = {}, s = !!e;
                if ("boolean" == typeof t && (s = t, t = null), t || (t = i.array), "string" == typeof t && (t = [t]), t instanceof Array) {
                    for (var a = t.length - 1; a >= 0; a--)i.has(t[a]) && (i.remove(t[a]), s && (n[t[a]] = u.format(this.to[t[a]])));
                    o.set(this.element, n)
                }
                !i.length && this.running && (this.running = !1, r.next(this.finished, this, ["stopped"]))
            }, finished: function (t) {
                i(this.element).anim.remove(this), "complete" === t && "function" == typeof this.options.progress && this.options.progress(this.element, 1, this.to_out), "function" == typeof this.options[t] && this.options[t](), this.from = null, this.to = null, this.element = null, this.diff = null, this.keys = null, this.options = null
            }
        }, o.stop = function (t, e, n) {
            var s = "boolean" == typeof e ? null : e, o = "boolean" == typeof e ? e : !!n;
            i(t).anim.each(function (t) {
                t.stop(s, o)
            })
        }, o.set = function (t, e, n) {
            for (var s = i(t).prop, o = Object.keys(e), a = 0, r = o.length, h = []; r > a; a++)s[o[a]] != e[o[a]] && (s[o[a]] = e[o[a]], h.push(o[a]));
            h.length && f.process({element: t, changes: new l(h)}, n)
        }, o.get = function (t, e) {
            var n, s = i(t).prop, o = [], a = 0, r = {};
            if ("string" == typeof e)return s[e];
            for (e instanceof Array ? o = e : e && "object" == typeof e && (o = Object.keys(e)), n = o.length; n > a; a++)o[a]in s && (r[o[a]] = s[o[a]]);
            return r
        }, "undefined" != typeof jQuery && (jQuery.fn.anim = function (t, e, i, n) {
            var s = this;
            if ("stop" === t)return this.each(function () {
                o.stop(this, e, i)
            });
            if (0 === e || "object" == typeof e && 0 === e.duration)return this.each(function () {
                "object" == typeof e && "function" == typeof e.begin && r.next(e.begin, this, [this, 1, t]), "object" == typeof e && "function" == typeof e.progress && r.next(e.progress, this, [this, 1, t]);
                var i, n = {};
                for (i in t)n[i] = Array.isArray(t[i]) ? t[i][0] : t[i];
                o.set(this, n)
            }), this.length && ("object" == typeof e && "function" == typeof e.complete ? r.next(e.complete, s, [s, 1, t]) : "function" == typeof n && r.next(n, s, [s, 1, t])), this;
            var a = $.Deferred();
            return "object" == typeof e && ("function" == typeof e.complete && a.done(e.complete), "function" == typeof e.begin && r.next(e.begin)), "function" == typeof n && a.done(n), n = function () {
                a.resolveWith(s)
            }, "object" == typeof e && (e.complete = n), this.each(function () {
                o(this, t, e, i, n)
            }), a.promise()
        }, jQuery.fn.animGet = function (t) {
            return o.get(this.get(0), t)
        }, jQuery.fn.animCSS = function (t, e) {
            return this.each(function () {
                o.set(this, t, e)
            })
        }, jQuery.fn.animProp = function (t) {
            return this.each(function () {
                a.mix(i(this).prop, t)
            })
        }, jQuery.animNext = jQuery.fn.animNext = a.bind(r.next, r)), e.exports = o
    }, {"./animate/arraymap": 8, "./animate/css": 9, "./animate/timer": 10, "./animate/utils": 11}],
    8: [function (t, e) {
        function i(t) {
            this.array = t || [], this.length = this.array.length
        }

        var n = t("./utils");
        i.prototype = {
            push: function (t) {
                this.has(t) || (this.array.push(t), this.length++)
            }, has: function (t) {
                return -1 !== this.array.indexOf(t)
            }, remove: function (t) {
                var e = this.array, i = e.indexOf(t);
                -1 !== i && (this.length--, e.splice(i, 1))
            }, shift: function () {
                return this.length--, this.array.shift()
            }, concat: function (t) {
                for (var e = this.array, n = t instanceof i ? t.array : t, s = 0, o = n.length, a = this.length; o > s; s++)-1 === e.indexOf(n[s]) && (e.push(n[s]), a++);
                this.length = a
            }, each: function (t, e) {
                n.each(this.array, t, e || this)
            }
        }, e.exports = i
    }, {"./utils": 11}],
    9: [function (t, e) {
        var i = document.createElement("div"), n = i.style, s = {}, o = {
            getPrefix: function (t) {
                var e = s[t];
                if (e)return e;
                for (var i, o = ["", "Moz", "webkit", "Webkit", "Khtml", "O", "ms"], a = 0, r = o.length, l = n, h = t.toLowerCase(), c = h[0].toUpperCase() + h.substr(1); r > a; a++)if (i = o[a] ? o[a] + c : h, i in l)return s[t] = i, i;
                return null
            }, hasSupport: function (t) {
                return !!o.getPrefix(t)
            }
        };
        e.exports = o
    }, {}],
    10: [function (t, e) {
        var i = t("./utils"), n = t("./arraymap"), s = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || function (t) {
                return setTimeout(t)
            }, o = window.Timer = {
            queue: new n, waiting: !1, lastKnownTime: null, tick: function () {
                o.waiting = !1;
                var t, e = o.queue, i = e.length, n = 0;
                for (o.lastKnownTime = null; i > n; n++)t = e.shift(), t()
            }, now: function () {
                return this.lastKnownTime || (this.lastKnownTime = Date.now(), this.scheduleTick()), this.lastKnownTime
            }, scheduleTick: function () {
                o.waiting || (o.waiting = !0, s(o.tick))
            }, next: function (t, e, n) {
                this.queue.push(i.bind(t, e, n)), o.scheduleTick()
            }
        };
        e.exports = o
    }, {"./arraymap": 8, "./utils": 11}],
    11: [function (t, e) {
        function i(t, e, i) {
            return e ? function (n, s, o, a, r) {
                var l = (i || []).concat(n, s, o, a, r);
                t.apply(e, l)
            } : t
        }

        function n(t, e, n) {
            for (var s = 0, o = t.length, a = i(e, n); o > s; s++)a(t[s], s, t)
        }

        function s(t, e, n) {
            for (var s, o = 0, a = t.length, r = i(e, n), l = []; a > o; o++)s = r(t[o], o, t), null != s && l.push(s);
            return s
        }

        function o(t) {
            var e, i = 0, n = 0, s = [];
            for (t.sort(); e = t[i++];)e === t[i] && (n = s.push(i));
            for (; n--;)t.splice(s[n], 1);
            return t
        }

        function a(t) {
            for (var e, i, n, s, o = 1, a = arguments.length; a > o; o++)if (e = arguments[o])for (i = Object.keys(e), n = 0, s = i.length; s > n; n++)t[i[n]] = e[i[n]];
            return t
        }

        e.exports = {bind: i, each: n, map: s, mix: a, unique: o}
    }, {}],
    12: [function (t, e) {
        function i() {
        }

        /* Simple JavaScript Inheritance
         * By John Resig http://ejohn.org/
         * MIT Licensed.
         * @author John Resig
         * @license MIT Licensed
         */
        var n, s = !1;
        n = /var xyz/.test(function () {
        }) ? /\b_super\b/ : /.*/, i.extend = function (t) {
            function e(t, e) {
                return function () {
                    var i = this._super;
                    this._super = o[t];
                    var n = e.apply(this, arguments);
                    return this._super = i, n
                }
            }

            function i() {
                !s && this.init && this.init.apply(this, arguments)
            }

            var o = this.prototype;
            s = !0;
            var a = new this;
            s = !1;
            for (var r in t)a[r] = "function" == typeof t[r] && "function" == typeof o[r] && n.test(t[r]) ? e(r, t[r]) : t[r];
            return i.prototype = a, i.prototype.constructor = i, i.extend = arguments.callee, i
        }, e.exports = i
    }, {}],
    13: [function (t, e) {
        function i(t, e, i, n, s) {
            var o, a, r, l, h, c = 2;
            return "number" == typeof s && (c = s), !n && i ? (o = i, a = t + c) : (o = i / n, a = Math.max(i, t + c)), r = Math.round(a / o), e + c > r && (r = e + c, a = Math.round(r * o)), l = Math.round((t - a) / 2), h = Math.round((e - r) / 2), {
                width: a,
                height: r,
                left: l,
                top: h
            }
        }

        i.position = function (t, e, i, n) {
            return {left: Math.round((t - i) / 2), top: Math.round((e - n) / 2)}
        }, e.exports = window.cover = i
    }, {}],
    14: [function (t, e) {
        function i(t, e, i) {
            var n, s, o, a = function () {
                n = null, i || (t.apply(s, o), s = null, o = null)
            }, r = function () {
                n = null
            };
            return function () {
                if (s = this, o = arguments, "leading" === i)n || (t.apply(s, o), n = setTimeout(r, e)); else {
                    var l = i && !n;
                    clearTimeout(n), n = setTimeout(a, e), l && (t.apply(s, o), s = null, o = null)
                }
            }
        }

        e.exports = i
    }, {}],
    15: [function (t, e) {/*!
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *       http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
        function i(t) {
            t = t || {}, google.maps.OverlayView.apply(this, arguments), this.content_ = t.content || "", this.disableAutoPan_ = t.disableAutoPan || !1, this.maxWidth_ = t.maxWidth || 0, this.pixelOffset_ = t.pixelOffset || new google.maps.Size(0, 0), this.position_ = t.position || new google.maps.LatLng(0, 0), this.zIndex_ = t.zIndex || null, this.boxClass_ = t.boxClass || "infoBox", this.boxStyle_ = t.boxStyle || {}, this.closeBoxMargin_ = t.closeBoxMargin || "2px", this.closeBoxURL_ = t.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", "" === t.closeBoxURL && (this.closeBoxURL_ = ""), this.infoBoxClearance_ = t.infoBoxClearance || new google.maps.Size(1, 1), "undefined" == typeof t.visible && (t.visible = "undefined" == typeof t.isHidden ? !0 : !t.isHidden), this.isHidden_ = !t.visible, this.alignBottom_ = t.alignBottom || !1, this.pane_ = t.pane || "floatPane", this.enableEventPropagation_ = t.enableEventPropagation || !1, this.div_ = null, this.closeListener_ = null, this.moveListener_ = null, this.contextListener_ = null, this.eventListeners_ = null, this.fixedWidthSet_ = null
        }

        i.prototype = new google.maps.OverlayView, i.prototype.createInfoBoxDiv_ = function () {
            var t, e, i, n = this, s = function (t) {
                t.cancelBubble = !0, t.stopPropagation && t.stopPropagation()
            }, o = function (t) {
                t.returnValue = !1, t.preventDefault && t.preventDefault(), n.enableEventPropagation_ || s(t)
            };
            if (!this.div_) {
                if (this.div_ = document.createElement("div"), this.setBoxStyle_(), "undefined" == typeof this.content_.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + this.content_ : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(this.content_)), this.getPanes()[this.pane_].appendChild(this.div_), this.addClickHandler_(), this.div_.style.width ? this.fixedWidthSet_ = !0 : 0 !== this.maxWidth_ && this.div_.offsetWidth > this.maxWidth_ ? (this.div_.style.width = this.maxWidth_, this.div_.style.overflow = "auto", this.fixedWidthSet_ = !0) : (i = this.getBoxWidths_(), this.div_.style.width = this.div_.offsetWidth - i.left - i.right + "px", this.fixedWidthSet_ = !1), this.panBox_(this.disableAutoPan_), !this.enableEventPropagation_) {
                    for (this.eventListeners_ = [], e = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"], t = 0; t < e.length; t++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_, e[t], s));
                    this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function () {
                        this.style.cursor = "default"
                    }))
                }
                this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", o), google.maps.event.trigger(this, "domready")
            }
        }, i.prototype.getCloseBoxImg_ = function () {
            var t = "";
            return "" !== this.closeBoxURL_ && (t = "<img", t += " src='" + this.closeBoxURL_ + "'", t += " align=right", t += " style='", t += " position: relative;", t += " cursor: pointer;", t += " margin: " + this.closeBoxMargin_ + ";", t += "'>"), t
        }, i.prototype.addClickHandler_ = function () {
            var t;
            "" !== this.closeBoxURL_ ? (t = this.div_.firstChild, this.closeListener_ = google.maps.event.addDomListener(t, "click", this.getCloseClickHandler_())) : this.closeListener_ = null
        }, i.prototype.getCloseClickHandler_ = function () {
            var t = this;
            return function (e) {
                e.cancelBubble = !0, e.stopPropagation && e.stopPropagation(), google.maps.event.trigger(t, "closeclick"), t.close()
            }
        }, i.prototype.panBox_ = function (t) {
            var e, i, n = 0, s = 0;
            if (!t && (e = this.getMap(), e instanceof google.maps.Map)) {
                e.getBounds().contains(this.position_) || e.setCenter(this.position_), i = e.getBounds();
                var o = e.getDiv(), a = o.offsetWidth, r = o.offsetHeight, l = this.pixelOffset_.width, h = this.pixelOffset_.height, c = this.div_.offsetWidth, d = this.div_.offsetHeight, u = this.infoBoxClearance_.width, p = this.infoBoxClearance_.height, f = this.getProjection().fromLatLngToContainerPixel(this.position_);
                if (f.x < -l + u ? n = f.x + l - u : f.x + c + l + u > a && (n = f.x + c + l + u - a), this.alignBottom_ ? f.y < -h + p + d ? s = f.y + h - p - d : f.y + h + p > r && (s = f.y + h + p - r) : f.y < -h + p ? s = f.y + h - p : f.y + d + h + p > r && (s = f.y + d + h + p - r), 0 !== n || 0 !== s) {
                    {
                        e.getCenter()
                    }
                    e.panBy(n, s)
                }
            }
        }, i.prototype.setBoxStyle_ = function () {
            var t, e;
            if (this.div_) {
                this.div_.className = this.boxClass_, this.div_.style.cssText = "", e = this.boxStyle_;
                for (t in e)e.hasOwnProperty(t) && (this.div_.style[t] = e[t]);
                this.div_.style.WebkitTransform = "translateZ(0)", "undefined" != typeof this.div_.style.opacity && "" !== this.div_.style.opacity && (this.div_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 100 * this.div_.style.opacity + ')"', this.div_.style.filter = "alpha(opacity=" + 100 * this.div_.style.opacity + ")"), this.div_.style.position = "absolute", this.div_.style.visibility = "hidden", null !== this.zIndex_ && (this.div_.style.zIndex = this.zIndex_)
            }
        }, i.prototype.getBoxWidths_ = function () {
            var t, e = {top: 0, bottom: 0, left: 0, right: 0}, i = this.div_;
            return document.defaultView && document.defaultView.getComputedStyle ? (t = i.ownerDocument.defaultView.getComputedStyle(i, ""), t && (e.top = parseInt(t.borderTopWidth, 10) || 0, e.bottom = parseInt(t.borderBottomWidth, 10) || 0, e.left = parseInt(t.borderLeftWidth, 10) || 0, e.right = parseInt(t.borderRightWidth, 10) || 0)) : document.documentElement.currentStyle && i.currentStyle && (e.top = parseInt(i.currentStyle.borderTopWidth, 10) || 0, e.bottom = parseInt(i.currentStyle.borderBottomWidth, 10) || 0, e.left = parseInt(i.currentStyle.borderLeftWidth, 10) || 0, e.right = parseInt(i.currentStyle.borderRightWidth, 10) || 0), e
        }, i.prototype.onRemove = function () {
            this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
        }, i.prototype.draw = function () {
            this.createInfoBoxDiv_();
            var t = this.getProjection().fromLatLngToDivPixel(this.position_);
            this.div_.style.left = t.x + this.pixelOffset_.width + "px", this.alignBottom_ ? this.div_.style.bottom = -(t.y + this.pixelOffset_.height) + "px" : this.div_.style.top = t.y + this.pixelOffset_.height + "px", this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible"
        }, i.prototype.setOptions = function (t) {
            "undefined" != typeof t.boxClass && (this.boxClass_ = t.boxClass, this.setBoxStyle_()), "undefined" != typeof t.boxStyle && (this.boxStyle_ = t.boxStyle, this.setBoxStyle_()), "undefined" != typeof t.content && this.setContent(t.content), "undefined" != typeof t.disableAutoPan && (this.disableAutoPan_ = t.disableAutoPan), "undefined" != typeof t.maxWidth && (this.maxWidth_ = t.maxWidth), "undefined" != typeof t.pixelOffset && (this.pixelOffset_ = t.pixelOffset), "undefined" != typeof t.alignBottom && (this.alignBottom_ = t.alignBottom), "undefined" != typeof t.position && this.setPosition(t.position), "undefined" != typeof t.zIndex && this.setZIndex(t.zIndex), "undefined" != typeof t.closeBoxMargin && (this.closeBoxMargin_ = t.closeBoxMargin), "undefined" != typeof t.closeBoxURL && (this.closeBoxURL_ = t.closeBoxURL), "undefined" != typeof t.infoBoxClearance && (this.infoBoxClearance_ = t.infoBoxClearance), "undefined" != typeof t.isHidden && (this.isHidden_ = t.isHidden), "undefined" != typeof t.visible && (this.isHidden_ = !t.visible), "undefined" != typeof t.enableEventPropagation && (this.enableEventPropagation_ = t.enableEventPropagation), this.div_ && this.draw()
        }, i.prototype.setContent = function (t) {
            this.content_ = t, this.div_ && (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.fixedWidthSet_ || (this.div_.style.width = ""), "undefined" == typeof t.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + t : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(t)), this.fixedWidthSet_ || (this.div_.style.width = this.div_.offsetWidth + "px", "undefined" == typeof t.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + t : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(t))), this.addClickHandler_()), google.maps.event.trigger(this, "content_changed")
        }, i.prototype.setPosition = function (t) {
            this.position_ = t, this.div_ && this.draw(), google.maps.event.trigger(this, "position_changed")
        }, i.prototype.setZIndex = function (t) {
            this.zIndex_ = t, this.div_ && (this.div_.style.zIndex = t), google.maps.event.trigger(this, "zindex_changed")
        }, i.prototype.setVisible = function (t) {
            this.isHidden_ = !t, this.div_ && (this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible")
        }, i.prototype.getContent = function () {
            return this.content_
        }, i.prototype.getPosition = function () {
            return this.position_
        }, i.prototype.getZIndex = function () {
            return this.zIndex_
        }, i.prototype.getVisible = function () {
            var t;
            return t = "undefined" == typeof this.getMap() || null === this.getMap() ? !1 : !this.isHidden_
        }, i.prototype.show = function () {
            this.isHidden_ = !1, this.div_ && (this.div_.style.visibility = "visible")
        }, i.prototype.hide = function () {
            this.isHidden_ = !0, this.div_ && (this.div_.style.visibility = "hidden")
        }, i.prototype.open = function (t, e) {
            var i = this;
            e && (this.position_ = e.getPosition(), this.moveListener_ = google.maps.event.addListener(e, "position_changed", function () {
                i.setPosition(this.getPosition())
            })), this.setMap(t), this.div_ && this.panBox_()
        }, i.prototype.close = function () {
            var t;
            if (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.eventListeners_) {
                for (t = 0; t < this.eventListeners_.length; t++)google.maps.event.removeListener(this.eventListeners_[t]);
                this.eventListeners_ = null
            }
            this.moveListener_ && (google.maps.event.removeListener(this.moveListener_), this.moveListener_ = null), this.contextListener_ && (google.maps.event.removeListener(this.contextListener_), this.contextListener_ = null), this.setMap(null)
        }, e.exports = i
    }, {}],
    16: [function (t, e, i) {
        /**
         * A JavaScript project for accessing the accelerometer and gyro from various devices
         *
         * @author Tom Gallacher <tom.gallacher23@gmail.com>
         * @copyright Tom Gallacher <http://www.tomg.co>
         * @version 0.0.1a
         * @license MIT License
         * @options frequency, callback
         */
        !function (t, n) {
            "function" == typeof define && define.amd ? define(n) : "object" == typeof i ? e.exports = n() : t.gyro = n()
        }(this, function () {
            function t(t) {
                var e = Math.PI / 180, i = t.beta * e, n = t.gamma * e;
                z = t.alpha * e;
                var s = Math.cos(i / 2), o = Math.cos(n / 2), a = Math.cos(z / 2), r = Math.sin(i / 2), l = Math.sin(n / 2), h = Math.sin(z / 2), c = s * o * a - r * l * h;
                return i = r * o * a - s * l * h, n = s * l * a + r * o * h, z = s * o * h + r * l * a, {
                    x: i,
                    y: n,
                    z: z,
                    w: c
                }
            }

            function e(t, e) {
                return {
                    w: t.w * e.w - t.x * e.x - t.y * e.y - t.z * e.z,
                    x: t.w * e.x + t.x * e.w + t.y * e.z - t.z * e.y,
                    y: t.w * e.y - t.x * e.z + t.y * e.w + t.z * e.x,
                    z: t.w * e.z + t.x * e.y - t.y * e.x + t.z * e.w
                }
            }

            function i(t, i) {
                return t = e(i, {x: t.x, y: t.y, z: t.z, w: 0}), t = e(t, {w: i.w, x: -i.x, y: -i.y, z: -i.z}), {
                    x: t.x,
                    y: t.y,
                    z: t.z
                }
            }

            function n(t, e) {
                return t.x * e.x + t.y * e.y + t.z * e.z
            }

            function s(t) {
                var e = 180 / Math.PI, s = i({
                    x: 0,
                    y: 1,
                    z: 0
                }, t), o = 0 == s.x && 0 == s.y ? 0 : -Math.atan2(s.x, s.y), a = Math.atan2(s.z, Math.sqrt(s.x * s.x + s.y * s.y)), r = {
                    x: Math.cos(o),
                    y: Math.sin(o),
                    z: 0
                }, l = {x: Math.sin(o) * Math.sin(a), y: -Math.cos(o) * Math.sin(a), z: Math.cos(a)}, h = i({
                    x: 0,
                    y: 0,
                    z: 1
                }, t), c = Math.atan2(n(h, r), n(h, l));
                return 0 > o && (o += 2 * Math.PI), c >= .5 * Math.PI ? (c -= Math.PI, o += Math.PI, a = a > 0 ? Math.PI - a : -Math.PI - a) : c < Math.PI * -.5 && (c += Math.PI, o += Math.PI, a = a > 0 ? Math.PI - a : -Math.PI - a), o >= 2 * Math.PI && (o -= 2 * Math.PI), {
                    alpha: o * e,
                    beta: a * e,
                    gamma: c * e
                }
            }

            function o() {
                function i(t) {
                    h.push("MozOrientation"), t.target.removeEventListener("MozOrientation", i, !0), t.target.addEventListener("MozOrientation", function (t) {
                        a.x = t.x - r.x, a.y = t.y - r.y, a.z = t.z - r.z
                    }, !0)
                }

                function n(t) {
                    h.push("devicemotion"), t.target.removeEventListener("devicemotion", n, !0), t.target.addEventListener("devicemotion", function (t) {
                        a.x = t.accelerationIncludingGravity.x - r.x, a.y = t.accelerationIncludingGravity.y - r.y, a.z = t.accelerationIncludingGravity.z - r.z
                    }, !0)
                }

                function o(i) {
                    h.push("deviceorientation"), i.target.removeEventListener("deviceorientation", o, !0), i.target.addEventListener("deviceorientation", function (i) {
                        var n = t({alpha: r.rawAlpha, beta: r.rawBeta, gamma: r.rawGamma});
                        n.x *= -1, n.y *= -1, n.z *= -1;
                        var o = t({alpha: i.alpha, beta: i.beta, gamma: i.gamma}), l = e(n, o), h = s(l);
                        a.alpha = h.alpha, a.beta = h.beta, a.gamma = h.gamma, a.rawAlpha = i.alpha, a.rawBeta = i.beta, a.rawGamma = i.gamma
                    }, !0)
                }

                window.addEventListener("MozOrientation", i, !0), window.addEventListener("devicemotion", n, !0), window.addEventListener("deviceorientation", o, !0)
            }

            var a = {x: null, y: null, z: null, alpha: null, beta: null, gamma: null}, r = {
                x: 0,
                y: 0,
                z: 0,
                alpha: 0,
                beta: 0,
                gamma: 0,
                rawAlpha: 0,
                rawBeta: 0,
                rawGamma: 0
            }, l = null, h = [], c = {};
            return c.frequency = 500, c.calibrate = function () {
                for (var t in a)r[t] = "number" == typeof a[t] ? a[t] : 0
            }, c.getOrientation = function () {
                return a
            }, c.startTracking = function (t) {
                l = setInterval(function () {
                    t(a)
                }, c.frequency)
            }, c.stopTracking = function () {
                clearInterval(l)
            }, c.hasFeature = function (t) {
                for (var e in h)if (t == h[e])return !0;
                return !1
            }, c.getFeatures = function () {
                return h
            }, c.eulerToQuaternion = t, window && window.addEventListener && o(), c
        })
    }, {}],
    17: [function (t, e) {
        /**
         * isMobile.js v0.3.2
         *
         * A simple library to detect Apple phones and tablets,
         * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
         * and any kind of seven inch device, via user agent sniffing.
         *
         * @author: Kai Mallea (kmallea@gmail.com)
         *
         * @license: http://creativecommons.org/publicdomain/zero/1.0/
         */
        !function () {
            var t = /iPhone/i, i = /iPod/i, n = /iPad/i, s = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, o = /Android/i, a = /IEMobile/i, r = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, l = /BlackBerry/i, h = /Opera Mini/i, c = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, d = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), u = function (t, e) {
                return t.test(e)
            }, p = function (e) {
                var p = e || navigator.userAgent;
                return this.apple = {
                    phone: u(t, p),
                    ipod: u(i, p),
                    tablet: u(n, p),
                    device: u(t, p) || u(i, p) || u(n, p)
                }, this.android = {
                    phone: u(s, p),
                    tablet: !u(s, p) && u(o, p),
                    device: u(s, p) || u(o, p)
                }, this.windows = {
                    phone: u(a, p),
                    tablet: u(r, p),
                    device: u(a, p) || u(r, p)
                }, this.other = {
                    blackberry: u(l, p),
                    opera: u(h, p),
                    firefox: u(c, p),
                    device: u(l, p) || u(h, p) || u(c, p)
                }, this.seven_inch = u(d, p), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window ? this : void 0
            }, f = function () {
                var t = new p;
                return t.Class = p, t
            };
            e.exports = f()
        }(window)
    }, {}],
    18: [function () {
        !function (t) {
            function e() {
                var e = this, i = t(this).data("mousestop");
                this.movement = !0, i.timeToStop && (this.timeToStopTimer = window.setTimeout(function () {
                    e.movement = !1, window.clearTimeout(e.timer)
                }, i.timeToStop))
            }

            function i() {
                window.clearTimeout(this.timer), window.clearTimeout(this.timeToStopTimer)
            }

            function n() {
                var e = t(this), i = e.data("mousestop");
                this.movement && (window.clearTimeout(this.timer), this.timer = window.setTimeout(function () {
                    e.trigger("mousestop")
                }, i.delay))
            }

            function s(e) {
                return t.isNumeric(e) ? e = {delay: e} : "object" != typeof e && (e = {}), t.extend({}, t.fn.mousestop.defaults, e)
            }

            t.event.special.mousestop = {
                setup: function (o) {
                    t(this).data("mousestop", s(o)).bind("mouseenter.mousestop", e).bind("mouseleave.mousestop", i).bind("mousemove.mousestop", n)
                }, teardown: function () {
                    t(this).removeData("mousestop").unbind(".mousestop")
                }
            }, t.fn.mousestop = function (t, e) {
                return "function" == typeof t && (e = t), arguments.length > 0 ? this.bind("mousestop", t, e) : this.trigger("mousestop")
            }, t.fn.mousestop.defaults = {delay: 300, timeToStop: null}
        }(jQuery)
    }, {}],
    19: [function (t, e, i) {/*!
     * jQuery Mousewheel 3.1.12
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
        !function (t) {
            "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof i ? e.exports = t : t(jQuery)
        }(function (t) {
            function e(e) {
                var a = e || window.event, r = l.call(arguments, 1), h = 0, d = 0, u = 0, p = 0, f = 0, g = 0;
                if (e = t.event.fix(a), e.type = "mousewheel", "detail"in a && (u = -1 * a.detail), "wheelDelta"in a && (u = a.wheelDelta), "wheelDeltaY"in a && (u = a.wheelDeltaY), "wheelDeltaX"in a && (d = -1 * a.wheelDeltaX), "axis"in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * u, u = 0), h = 0 === u ? d : u, "deltaY"in a && (u = -1 * a.deltaY, h = u), "deltaX"in a && (d = a.deltaX, 0 === u && (h = -1 * d)), 0 !== u || 0 !== d) {
                    if (1 === a.deltaMode) {
                        var m = t.data(this, "mousewheel-line-height");
                        h *= m, u *= m, d *= m
                    } else if (2 === a.deltaMode) {
                        var v = t.data(this, "mousewheel-page-height");
                        h *= v, u *= v, d *= v
                    }
                    if (p = Math.max(Math.abs(u), Math.abs(d)), (!o || o > p) && (o = p, n(a, p) && (o /= 40)), n(a, p) && (h /= 40, d /= 40, u /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        f = e.clientX - y.left, g = e.clientY - y.top
                    }
                    return e.deltaX = d, e.deltaY = u, e.deltaFactor = o, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, r.unshift(e, h, d, u), s && clearTimeout(s), s = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
                }
            }

            function i() {
                o = null
            }

            function n(t, e) {
                return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
            }

            var s, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], r = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], l = Array.prototype.slice;
            if (t.event.fixHooks)for (var h = a.length; h;)t.event.fixHooks[a[--h]] = t.event.mouseHooks;
            var c = t.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener)for (var i = r.length; i;)this.addEventListener(r[--i], e, !1); else this.onmousewheel = e;
                    t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener)for (var i = r.length; i;)this.removeEventListener(r[--i], e, !1); else this.onmousewheel = null;
                    t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (e) {
                    var i = t(e), n = i["offsetParent"in t.fn ? "offsetParent" : "parent"]();
                    return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                }, getPageHeight: function (e) {
                    return t(e).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            t.fn.extend({
                mousewheel: function (t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                }, unmousewheel: function (t) {
                    return this.unbind("mousewheel", t)
                }
            })
        })
    }, {}],
    20: [function (t, e) {
        /**
         * Scrollbar widget
         *
         * Dependancies:
         *     jquery.mousewheel.js  (if mousewheel functionality is enabled)
         *
         * @constructor
         * @param {Object} node Scrollbar container node
         * @param {Object} options Options, optional argument
         * @version 1.0.3
         * @author Vide Infra Group
         * @license Copyright 2014 Vide Infra Group
         */
        var i = t("./debounce");
        !function (t) {
            "use strict";
            function e(e, i) {
                var n = this.options = t.extend({}, this.DEFAULT_OPTIONS, i || {});
                this.nodeContainer = t(e), this.value = parseFloat(this.options.value);
                for (var s = ["classnameFocus"], o = 0, a = s.length; a > o; o++)n[s[o]] = n[s[o]].split("%c").join(n.classname);
                this._renderUI(), this._bindUI()
            }

            var n = "scrollbar";
            return e.prototype = {
                DEFAULT_OPTIONS: {
                    classname: "scrollbar",
                    classnameFocus: "%c-focus",
                    classnameHidden: "hidden",
                    classnameDisabled: "disabled",
                    margin: 5,
                    padding: 0,
                    innerPadding: 0,
                    mouseWheel: !0,
                    mouseWheelOffset: 30,
                    value: 0,
                    minValue: 0,
                    maxValue: 100,
                    axis: "y"
                },
                nodeContainer: null,
                node: null,
                nodeDragable: null,
                nodeInner: null,
                fnMouseMove: null,
                fnMouseUp: null,
                fnMouseWheel: null,
                containerSize: null,
                dragableSize: null,
                posMinOffset: null,
                posMaxOffset: null,
                mousePosStart: null,
                valueStart: null,
                _renderUI: function () {
                    var e = t(this._render("scrollbar"));
                    this.nodeContainer.append(e), this.node = e, this.nodeDragable = e.find("." + this.options.classname + "-dragable"), this.nodeInner = e.find("." + this.options.classname + "-b"), this.update()
                },
                _bindUI: function () {
                    if (this.fnMouseMove = i(t.proxy(this._onMouseMove, this), 30, "leading"), this.fnMouseUp = t.proxy(this._onMouseUp, this), this.fnMouseWheel = t.proxy(this._onMouseWheel, this), this.fnMouseWheelNatural = t.proxy(this._onMouseWheelNatural, this), this.nodeDragable.bind("mousedown.scroll touchstart.scroll touchmove, touchstart", t.proxy(this._onMouseDown, this)), t.fn.mousewheel)this.nodeContainer.mousewheel(this.fnMouseWheel); else {
                        var e = this.nodeContainer.get(0);
                        window.addEventListener ? (e.addEventListener("DOMMouseScroll", this.fnMouseWheelNatural, !1), e.addEventListener("mousewheel", this.fnMouseWheelNatural, !1), e.addEventListener("MozMousePixelScroll", function (t) {
                            t.preventDefault()
                        }, !1)) : options.scroll && (e.onmousewheel = this.fnMouseWheelNatural)
                    }
                },
                _onMouseWheelNatural: function (e) {
                    var i = e || window.event, n = i.wheelDelta ? i.wheelDelta / 120 : -i.detail / 3;
                    i = t.event.fix(i), i.preventDefault(), this._onMouseWheel(i, n, n, n)
                },
                _onMouseWheel: function (t, e, i, n) {
                    var s = 0, o = this.options.mouseWheelOffset, a = "x" == this.options.axis ? i : n;
                    return s = a > 0 ? -o : o, s && this.setValue(this.value + s), !1
                },
                _onMouseMove: function (t) {
                    var e = this._getEventPosition(t) - this.mousePosStart, i = 0, n = this.options.minValue, s = this.options.maxValue;
                    e && s != n && (i = e / (this.posMaxOffset - this.posMinOffset) * (s - n) + n), this.setValue(this.valueStart + i)
                },
                _onMouseDown: function (e) {
                    return this.valueStart = this.value, this.mousePosStart = this._getEventPosition(e), this.node.addClass(this.options.classnameFocus), t(document).bind("mousemove.scroll touchmove.scroll", this.fnMouseMove), t(document).bind("mouseup.scroll touchend.scroll", this.fnMouseUp), !1
                },
                _onMouseUp: function () {
                    this.node.removeClass(this.options.classnameFocus), t(document).unbind("mousemove.scroll touchmove.scroll"), t(document).unbind("mouseup.scroll touchend.scroll")
                },
                _getEventPosition: function (t) {
                    var e = "x" == this.options.axis ? "clientX" : "clientY";
                    return t[e] ? t[e] : (t = t.originalEvent, t.touches ? t.touches[0][e] : 0)
                },
                _render: function (t) {
                    var e = this.options.renderer;
                    if (t in e) {
                        var i = [this.options];
                        return e[t].apply(this, i)
                    }
                    return ""
                },
                hide: function () {
                    this.node.addClass(this.options.classnameHidden)
                },
                show: function () {
                    this.node.removeClass(this.options.classnameHidden)
                },
                setValue: function (t) {
                    t != this.value && (t = Math.min(this.options.maxValue, Math.max(this.options.minValue, parseFloat(t))), t != this.value && (this.value = t, this.updateDragable(), this.node.trigger("scrollbarScroll", {value: t})))
                },
                getValue: function () {
                    return this.value
                },
                setMin: function (t) {
                    var e = this.options.maxValue, i = this.options.value;
                    this.options.minValue = t = parseFloat(t), t > e && (e = this.options.maxValue = t), i > e || t > i ? this.setValue(Math.min(t, Math.max(t, i))) : this.updateDragable()
                },
                setMax: function (t) {
                    var e = this.options.minValue, i = this.options.value;
                    this.options.maxValue = t = parseFloat(t), e > t && (e = this.options.minValue = t), i > t || e > i ? this.setValue(Math.min(e, Math.max(e, i))) : this.updateDragable()
                },
                updateDragable: function () {
                    var t = this.options.axis, e = this.containerSize, i = "x" == t ? "left" : "top";
                    if (!e)return this.update();
                    var n = this.options, s = this.posMinOffset, o = this.posMaxOffset, a = 0;
                    a = this.value != n.minValue ? ~~((o - s) * (this.value - n.minValue) / (n.maxValue - n.minValue) + s) : ~~s, this.nodeDragable.css(i, a + "px")
                },
                update: function () {
                    var t = this.options.axis, e = "x" == t ? this.nodeContainer.innerWidth() : this.nodeContainer.innerHeight(), i = "x" == t ? "width" : "height", n = "x" == t ? "left" : "top";
                    if (e) {
                        this.containerSize = e, this.dragableSize = this.nodeDragable[i]();
                        var s = this.options, o = e - 2 * s.margin - s.innerPadding;
                        this.nodeInner.css(i, o + "px");
                        var a = "x" == t ? this.node.innerWidth() : this.node.innerHeight(), r = s.padding, l = a - s.padding - s.innerPadding - this.dragableSize, h = 0;
                        this.posMinOffset = r, this.posMaxOffset = l, h = this.value != s.minValue ? ~~((l - r) * (this.value - s.minValue) / (s.maxValue - s.minValue) + r) : ~~r, this.nodeDragable.css(n, h + "px")
                    }
                },
                destroy: function () {
                    this.nodeContainer.unbind("mousewheel", this.fnMouseWheel), this.nodeContainer.remove(), delete this.nodeContainer, delete this.node, delete this.nodeDragable, delete this.nodeInner, delete this.fnMouseMove, delete this.fnMouseUp, delete this.fnMouseWheel
                }
            }, e.prototype.DEFAULT_OPTIONS.renderer = e.RENDERER = {
                scrollbar: function (t) {
                    return '<div class="' + t.classname + " " + t.classname + "-" + t.axis + '">	<div class="' + t.classname + '-t"><div class="' + t.classname + '-b"></div></div>	<div class="' + t.classname + '-dragable"></div></div>'
                }
            }, t.fn.scrollbar = function (t) {
                for (var i, s, o = null, a = 0, r = this.length; r > a; a++)i = this.eq(a), s = i.data(n), s ? o || (o = s) : (o = new e(i, t), i.data(n, o));
                return o
            }, t.Scrollbar = e, e
        }(jQuery), e.exports = $.Scrollbar
    }, {"./debounce": 14}],
    21: [function (t, e) {
        /**
         * Dropdown widget
         * Replaces standard <select> element with custom dropdown
         *
         * @version 1.1.4
         * @docs http://sitesupra.vig/supra7/js/jquery.select
         * @license Copyright 2014 Vide Infra
         */
        !function (t, i) {
            "function" == typeof define && define.amd ? define(["jquery"], function (t) {
                return i(t)
            }) : "undefined" != typeof e && e.exports ? e.exports = i(jQuery) : i(jQuery)
        }(this, function (t) {
            "use strict";
            function e(e, i) {
                var n = t.extend({}, e.data()), s = this.DEFAULT_OPTIONS, o = null;
                for (o in n)o in s || delete n[o];
                var a = this.options = t.extend({}, s, {
                    tabIndex: t(e).attr("tabIndex") || 0,
                    multiple: t(e).prop("multiple")
                }, n, i || {});
                this.nodeInput = null, this.values = [], this.valuesObject = {}, this.itemsOutput = [];
                for (var r = ["classnameFocus", "classnameMultiple", "classnameTouch", "classnameOpen", "classnameDisabled", "classnameReadonly", "classnameItem", "classnamePopup", "classnamePopupScrollable", "classnamePopupList", "classnamePopupItem", "classnamePopupGroup", "classnameSelectedItem", "classnameActiveItem"], l = 0, h = r.length; h > l; l++)a[r[l]] = a[r[l]].split("%c").join(a.classname);
                this._renderUI(t(e)), this._bindUI()
            }

            var i = !1;
            return i = t.browser ? t.browser.msie : /(msie|trident)/.test(navigator.userAgent.toLowerCase()), e.prototype = {
                DEFAULT_OPTIONS: {
                    classname: "input-select-fake",
                    classnameMultiple: "%c-multiple",
                    classnameTouch: "%c-touch",
                    classnameFocus: "%c-focus",
                    classnameOpen: "%c-open",
                    classnameDisabled: "%c-disabled",
                    classnameReadonly: "%c-readonly",
                    classnameItem: "%c-item",
                    classnamePopup: "%c-popup",
                    classnamePopupScrollable: "%c-scrollable",
                    classnamePopupList: "%c-list",
                    classnamePopupItem: "%c-list-item",
                    classnamePopupGroup: "%c-list-group",
                    classnameSelectedItem: "%c-list-item-selected",
                    classnameActiveItem: "%c-list-item-active",
                    classnameInput: "invisible",
                    classnameHidden: "hidden",
                    selectorCheckbox: ".checkbox",
                    customCheckbox: t.fn.checkbox,
                    multiple: !1,
                    maxHeight: 250,
                    customScrollbar: !0,
                    showEmptyValue: !1,
                    preventDefault: !0,
                    renderer: null
                },
                nodeInput: null,
                nodeDropdown: null,
                nodeItem: null,
                nodePopup: null,
                nodeList: null,
                value: "",
                index: 0,
                values: [],
                valuesObject: {},
                itemsOutput: [],
                hasFocus: !1,
                silent: !1,
                popupVisible: !1,
                popupIndex: -1,
                touchActivated: !1,
                touchScrolled: !1,
                clickActivatedApplyDefault: !1,
                keystrokeLine: "",
                keystrokeTimer: null,
                keystrokeCallback: null,
                disabled: !1,
                readonly: !1,
                scrollbar: null,
                getIndexByValue: function (t) {
                    for (var e = this.values, i = this._normalizeValue(t), n = 0, s = e.length, o = 0, a = i.length; a > o; o++)for (n = 0; s > n; n++)if (e[n] == i[o])return n;
                    return -1
                },
                getValue: function () {
                    return this.value
                },
                setValue: function (t, e) {
                    var i = this._filterValue(this._normalizeValue(t));
                    if (!this._compareValues(this.value, i)) {
                        this.silent = !0, this.value = i;
                        var n = this.index = this.getIndexByValue(i);
                        this.nodeInput && this.nodeInput.val(i).change(), this.nodeItem.html(this.render("item")), this._setPopupIndex(n, e, !0), this.options.multiple && this._toggleMultipleItems(i), this.silent = !1
                    }
                    return this
                },
                getIndex: function () {
                    return this.index
                },
                setIndex: function (t) {
                    if (this.index != t && t >= 0 && t < this.values.length) {
                        this.silent = !0;
                        var e = this.value = this.values[t];
                        this.index = t, this.nodeInput && this.nodeInput.val(e).change(), this.nodeItem.html(this.render("item")), this._setPopupIndex(t, !1, !0), this.silent = !1
                    }
                    return this
                },
                setDisabled: function (t) {
                    return this.disabled != t && (this.disabled = !!t, t ? (this._hidePopup(), this.nodeDropdown.removeAttr("tabIndex"), this.nodeDropdown.addClass(this.options.classnameDisabled), this.nodeInput && this.nodeInput.attr("disabled", "disabled")) : (this.nodeDropdown.attr("tabIndex", this.options.tabIndex), this.nodeDropdown.removeClass(this.options.classnameDisabled), this.nodeInput && this.nodeInput.removeAttr("disabled"))), this
                },
                getDisabled: function () {
                    return this.disabled
                },
                setReadOnly: function (t) {
                    return this.readonly != t && (this.readonly = !!t, t ? (this._hidePopup(), this.nodeDropdown.addClass(this.options.classnameReadonly), this.nodeInput && this.nodeInput.attr("readonly", "readonly")) : (this.nodeDropdown.removeClass(this.options.classnameReadonly), this.nodeInput && this.nodeInput.removeAttr("readonly"))), this
                },
                getReadOnly: function () {
                    return this.readonly
                },
                getHasFocus: function () {
                    return this.hasFocus
                },
                update: function () {
                    if (this.nodeInput) {
                        for (var t = this.nodeInput.find("option, optgroup"), e = "", i = "", n = this.options.showEmptyValue, s = [], o = {}, a = this.valuesObject, r = [], l = this.itemsOutput, h = !1, c = 0, d = t.length; d > c; c++)option = t.eq(c), option.is("optgroup") ? (i = option.attr("label"), r.push({
                            type: "group",
                            label: i
                        }), (l.length < c || "group" != l[c].type || l[c].label != i) && (h = !0)) : (e = option.get(0).value, (e || n) && (s.push(e), r.push({
                            type: "item",
                            value: e
                        })), o[e] = option.get(0).text, e in a && a[e] == o[e] || (h = !0));
                        l.length !== r.length && (h = !0), h && (e = this._filterValue(this.nodeInput.val()), this.values = s, this.valuesObject = o, this.itemsOutput = r, this.nodeList.html(this.render("popupList")), this.options.multiple && "function" == typeof this.options.customCheckbox && this.options.customCheckbox.call(this.nodeList.find('input[type="checkbox"]')), this.value = null, this.setValue(e));
                        var u = this.nodeInput.attr("disabled"), p = this.nodeInput.attr("readonly");
                        u = !(u === !1 || void 0 === u), p = !(p === !1 || void 0 === p), this.setDisabled(u), this.setReadOnly(p)
                    }
                },
                escape: function (t, e) {
                    return t = String(t || ""), "quotes" == e ? t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/'/g, "\\'") : t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                },
                unescape: function (t, e) {
                    return t = String(t || ""), "quotes" == e ? t.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, "\\") : t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&guot;/g, '"').replace(/&amp;/g, "&")
                },
                _classnameToSelector: function (t) {
                    return "." + t.split(" ").join(".")
                },
                setHidden: function (t) {
                    this.nodeDropdown.toggleClass(this.options.classnameHidden, t)
                },
                render: function (t) {
                    var e = this.options.renderer;
                    if (t in e) {
                        var i = [this.options];
                        if ("item" == t)i = [this.options, this.value, this._getLabels(this.value)]; else if ("popupListItem" == t)return "";
                        return e[t].apply(this, i)
                    }
                    return ""
                },
                _renderUI: function (t) {
                    t.is("select") ? (this.nodeInput = t, this._renderUIFromSelect()) : (this.nodeDropdown = t, this._renderUIFromHTML())
                },
                _renderUIFromSelect: function () {
                    for (var e, i = this.nodeInput.find("option, optgroup"), n = null, s = "", o = "", a = this.options.showEmptyValue, r = this.values, l = this.itemsOutput, h = this.valuesObject, c = 0, d = i.length; d > c; c++)n = i.eq(c), n.is("optgroup") ? (o = n.attr("label"), l.push({
                        type: "group",
                        label: o
                    })) : (s = n.get(0).value, (s || a) && (r.push(s), l.push({
                        type: "item",
                        value: s
                    })), h[s] = n.get(0).text);
                    s = this.value = this._filterValue(this.nodeInput.val()), this.options.multiple || this.value.length || (this.value = [this.values[0]]), this.index = this.getIndexByValue(s), this.popupIndex = -1;
                    var u = t(this.render("dropdown"));
                    u.find(this._classnameToSelector(this.options.classnamePopupList)).html(this.render("popupList")), e = t.trim(this.nodeInput.attr("class")), e && (u.addClass(e), u.removeClass(this.options.classnameInput)), this.nodeInput.addClass(this.options.classnameInput), this.nodeInput.attr("tabIndex", "-1"), u.insertAfter(this.nodeInput), u.attr("tabIndex", this.options.tabIndex), this.nodeDropdown = u, this.nodePopup = u.find(this._classnameToSelector(this.options.classnamePopup)), this.nodeItem = u.find(this._classnameToSelector(this.options.classnameItem)), this.nodeList = u.find(this._classnameToSelector(this.options.classnamePopupList)), this.options.multiple && "function" == typeof this.options.customCheckbox && this.options.customCheckbox.call(this.nodeList.find('input[type="checkbox"]')), this.options.maxHeight && this.nodeList.css("max-height", this.options.maxHeight + "px");
                    var p = this.nodeInput.attr("disabled"), f = this.nodeInput.attr("readonly");
                    p !== !1 && void 0 !== p && this.setDisabled(!0), f !== !1 && void 0 !== f && this.setReadOnly(!0), "ontouchstart"in document && this.nodeDropdown.addClass(this.options.classnameTouch)
                },
                _renderUIFromHTML: function () {
                    var t = this.nodeDropdown, e = t.prev();
                    this.nodePopup = t.find(this._classnameToSelector(this.options.classnamePopup)), this.nodeItem = t.find(this._classnameToSelector(this.options.classnameItem)), this.nodeList = t.find(this._classnameToSelector(this.options.classnamePopupList)), this.nodeInput = e.length ? e : null, this.options.maxHeight && this.nodeList.css("max-height", this.options.maxHeight + "px");
                    for (var i, n = this.values = [], s = this.valuesObject = {}, o = null, a = null, r = this.nodePopup.find("li"), l = 0, h = r.length; h > l; l++)i = r.eq(l).find("a").eq(0), i.length || (i = r.eq(l)), o = this.unescape(r.eq(l).attr("data")), a = this.unescape(i.text()), n.push(o), s[o] = a, r.eq(l).hasClass(this.options.classnameActiveItem) && (this.value = o, this.index = l, this.popupIndex = -1);
                    this.index || (this.index = 0, this.value = n[0]), t.hasClass(this.options.classnameDisabled) && (this.disabled = !0), t.hasClass(this.options.classnameReadonly) && (this.readonly = !0), "ontouchstart"in document && this.nodeDropdown.addClass(this.options.classnameTouch)
                },
                _bindUI: function () {
                    var e = this._onBlur;
                    this._onBlur = t.proxy(function () {
                        return e.apply(this, arguments)
                    }, this), i || this.nodeDropdown.blur(this._onBlur), this.nodeDropdown.focus(t.proxy(this._onFocus, this)).keydown(t.proxy(this._onKey, this)), this._onChange = t.proxy(this._onChange, this), this.nodeInput && this.nodeInput.change(this._onChange), this.nodeDropdown.bind("touchstart", t.proxy(this._resetTouchScroll, this)), this.nodeDropdown.bind("mousedown touchend", t.proxy(this._onClick, this));
                    var n = this.nodeList.children().prop("tagName") || "", s = this, o = n + this._classnameToSelector(this.options.classnamePopupItem), a = o + " *";
                    this.nodeList.delegate(a, "mouseenter", function (e) {
                        var i = t(e.target).closest(o), n = s.nodeList.find(o).index(i);
                        s._setPopupIndex(n, !0)
                    }), this.nodePopup.bind("scrollbarScroll", t.proxy(function (t, e) {
                        e && this.nodeList.scrollTop(~~e.value)
                    }, this)), "ontouchstart"in document && this.nodeList.bind("scroll", t.proxy(function () {
                        var t = this.nodeList.scrollTop();
                        this.touchScrolled = !0, this.scrollbar.setValue(t)
                    }, this)), this.keystrokeCallback = t.proxy(function () {
                        this.keystrokeLine = ""
                    }, this)
                },
                _getLabels: function (t) {
                    t = this._normalizeValue(t) || [];
                    for (var e = 0, i = t.length, n = [], s = this.valuesObject; i > e; e++)t[e]in s && n.push(s[t[e]]);
                    if (-1 != n.toString().indexOf("m2")) {
                        var o = "ru" == LOCALE ? "м" : "sq. m.";
                        n = n.toString().replace("m2", "" + o + "<sup>2</sup>")
                    }
                    return !this.options.multiple || n.length || this.options.showEmptyValue || ""in s && n.push(s[""]), n
                },
                _findValue: function (t) {
                    for (var e, i = this.values, n = this.valuesObject, s = t.toUpperCase(), o = 0, a = i.length; a > o; o++)if (e = i[o], 0 === n[e].toUpperCase().indexOf(s))return o;
                    return -1
                },
                _filterValue: function (e) {
                    for (var i = this.valuesObject, n = this._normalizeValue(e) || [], s = 0, o = n.length, a = []; o > s; s++)n[s]in i && a.push(n[s]);
                    return t.unique(a)
                },
                _compareValues: function (t, e) {
                    if (t = (this._normalizeValue(t) || []).sort(), e = (this._normalizeValue(e) || []).sort(), t.length != e.length)return !1;
                    for (var i = 0, n = t.length; n > i; i++)if (t[i] != e[i])return !1;
                    return !0
                },
                _normalizeValue: function (e) {
                    var i = typeof e;
                    return "string" === i || "number" === i ? [e] : t.isArray(e) ? t.unique(e) : null
                },
                _toggleMultipleItem: function (t, e) {
                    if (t >= -1 && t < this.values.length) {
                        {
                            var i, n = this.nodeList.children().filter("." + this.options.classnamePopupItem), s = n.eq(t);
                            this.options.classnameSelectedItem
                        }
                        -1 != t && (i = s.find("input"), "boolean" != typeof e && (e = !i.prop("checked")), i.prop("checked", e).change())
                    }
                    return this
                },
                _toggleMultipleItems: function (e) {
                    for (var i = this.nodeList.children().filter("." + this.options.classnamePopupItem), n = t(), s = 0, o = e.length, a = 0; o > s; s++)a = this.getIndexByValue(e[s]), -1 != a && (n = n.add(i.eq(a).find("input")));
                    i.find("input").not(n).prop("checked", !1).change(), n.prop("checked", !0).change()
                },
                _getMultipleSelectedValue: function () {
                    for (var t, e = this.nodeList.find('input[type="checkbox"]:checked'), i = [], n = 0, s = e.length; s > n; n++)t = e.eq(n).closest("." + this.options.classnamePopupItem), i.push(t.attr("data"));
                    return i
                },
                _setPopupIndex: function (t, e, i) {
                    if (t >= -1 && t < this.values.length) {
                        var n = this.nodeList.find(this._classnameToSelector(this.options.classnamePopupItem)), s = null, o = this.options.classnameSelectedItem;
                        -1 != t && (s = n.eq(t)), this.options.multiple || i && (n.removeClass(this.options.classnameActiveItem), -1 != t && s.addClass(this.options.classnameActiveItem)), t != this.popupIndex && (-1 != this.popupIndex && n.eq(this.popupIndex).removeClass(o), -1 != t && s.addClass(o), this.popupIndex = t), t > -1 && !e && this._scrollToItem(s)
                    }
                    return this
                },
                _scrollToItem: function (t) {
                    var e = 0;
                    if (t && t.get(0)) {
                        var i = this.nodeList.height(), n = this.nodeList.scrollTop(), s = t.get(0).offsetTop, o = t.height();
                        e = Math.min(s, n), n > s ? e = s : s + o > i + n && (e = s - i + o)
                    }
                    this.nodeList.scrollTop(e), this.scrollbar && this.scrollbar.setValue(e), this.touchScrolled = !1
                },
                _hidePopup: function () {
                    if (this.popupVisible) {
                        var e = this.nodeDropdown, i = this.nodePopup, n = this.options;
                        if (this.popupVisible = !1, this.keystrokeLine = "", t.fn.velocity ? this.nodePopup.velocity({
                                opacity: [0, 1],
                                translateY: [5, 0]
                            }, {
                                duration: 150, complete: function () {
                                    e.removeClass(n.classnameOpen), i.addClass(n.classnameHidden)
                                }
                            }) : (e.removeClass(n.classnameOpen), i.addClass(n.classnameHidden)), this.options.multiple) {
                            var s = this._getMultipleSelectedValue();
                            this.setValue(s)
                        }
                    }
                    return this
                },
                _showPopup: function () {
                    if (!this.disabled && !this.readonly && !this.popupVisible) {
                        if (this.nodeDropdown.addClass(this.options.classnameOpen), this.nodePopup.removeClass(this.options.classnameHidden), this.popupVisible = !0, this.keystrokeLine = "", t.fn.velocity && this.nodePopup.velocity({
                                opacity: [1, 0],
                                translateY: [0, 5]
                            }, {duration: 150}), this.options.maxHeight && this.options.customScrollbar && t.Scrollbar) {
                            var e = this.nodeList.get(0), n = -e.offsetHeight + e.scrollHeight;
                            if (n >= 3)if (this.nodePopup.addClass(this.options.classnamePopupScrollable), this.scrollbar)this.scrollbar.setMax(n), this.scrollbar.show(); else {
                                var s = {};
                                "object" == typeof this.options.customScrollbar && (s = t.extend({}, this.options.customScrollbar)), this.scrollbar = new t.Scrollbar(this.nodePopup, t.extend(s, {
                                    maxValue: n,
                                    value: e.scrollTop,
                                    margin: 0
                                }))
                            } else this.scrollbar && this.scrollbar.hide(), this.nodePopup.removeClass(this.options.classnamePopupScrollable)
                        }
                        this._setPopupIndex(this.index, !1, !0), this.options.multiple && this._toggleMultipleItems(this.value), i && t(document).on("mousedown", this._onBlur)
                    }
                    return this
                },
                _onClick: function (e) {
                    if ("touchend" == e.type)this.touchActivated = !0; else if ("mousedown" == e.type && this.touchActivated)return this.touchActivated = !1, void 0;
                    if ("mousedown" != e.type || 1 == e.which)if (this.popupVisible) {
                        var i = t(e.target), n = i.closest(this._classnameToSelector(this.options.classnamePopupItem)), s = this.unescape(n.attr("data")), o = this.touchScrolled;
                        if (this.touchScrolled = !1, n.length)if ("undefined" != typeof s) {
                            if (this.options.preventDefault)return this.touchActivated && o ? !1 : this.options.multiple ? (i.closest("input, " + this.options.selectorCheckbox).length || this._toggleMultipleItem(this.getIndexByValue(s)), !1) : (this.setValue(s, !0), this._hidePopup(), !1);
                            this.clickActivatedApplyDefault = !0
                        } else this.options.preventDefault || (this.clickActivatedApplyDefault = !0); else {
                            if (i.closest(this._classnameToSelector(this.options.classnamePopupGroup)).length)return !1;
                            i.closest(this._classnameToSelector(this.options.classnameItem)).length && this._hidePopup()
                        }
                    } else this._showPopup()
                },
                _resetTouchScroll: function () {
                    this.touchScrolled = !1
                },
                _onChange: function () {
                    !this.silent && this.nodeInput && this.setValue(this.nodeInput.val())
                },
                _onFocus: function () {
                    this.nodeDropdown.addClass(this.options.classnameFocus), this.hasFocus = !0, this.keystrokeLine = ""
                },
                _onBlur: function (e) {
                    if (this.clickActivatedApplyDefault)return this.clickActivatedApplyDefault = !1, void 0;
                    if (i) {
                        var n = t(e.target).closest(this._classnameToSelector(this.options.classname));
                        if (n.get(0) === this.nodeDropdown.get(0))return;
                        t(document).unbind("mousedown", this._onBlur)
                    }
                    this.nodeDropdown.removeClass(this.options.classnameFocus), this.hasFocus = !1, this._hidePopup()
                },
                _onKey: function (t) {
                    if (!this.disabled && !this.readonly && this.hasFocus) {
                        var e, i, n, s, o, a = t.keyCode || t.which;
                        switch (a) {
                            case 40:
                                return this.popupVisible ? this._setPopupIndex(this.popupIndex + 1) : this.options.multiple ? this._showPopup() : this.setIndex(this.index + 1), this.keystrokeCallback(), !1;
                            case 38:
                                return this.popupVisible ? (e = -1 == this.popupIndex ? -1 : Math.max(0, this.popupIndex - 1), this._setPopupIndex(e)) : this.options.multiple || this.setIndex(this.index - 1), this.keystrokeCallback(), !1;
                            case 13:
                                return this.popupVisible && -1 != this.popupIndex ? (this.options.multiple ? this._toggleMultipleItem(this.popupIndex) : (this.setIndex(this.popupIndex), this._hidePopup()), this.options.preventDefault || (i = this.nodeList.find('[data="' + this.value + '"] a'), n = i.attr("href"), s = i.attr("target"), n && ("_blank" == s ? window.open(n) : document.location = n))) : this.popupVisible || this._showPopup(), !1;
                            case 27:
                                this._hidePopup();
                                break;
                            default:
                                o = String.fromCharCode(a).replace(/[^\x20-\x7E]/, ""), o && (this.keystrokeLine += o, clearTimeout(this.keystrokeTimer), this.keystrokeTimer = setTimeout(this.keystrokeCallback, 1e3), e = this._findValue(this.keystrokeLine), -1 != e && (this.popupVisible ? this._setPopupIndex(e) : this.options.multiple || this.setIndex(e)))
                        }
                    }
                },
                destroy: function () {
                    this.scrollbar && this.scrollbar.destroy(), this.nodeInput && (this.nodeInput.removeClass(this.options.classnameInput), this.nodeInput.attr("tabIndex", this.options.tabIndex), this.nodeInput.removeData("select"), this.nodeInput.unbind("change", this._onChange)), this.nodeDropdown.remove(), delete this.scrollbar, delete this.nodeInput, delete this.nodeDropdown, delete this.options, delete this.nodeItem, delete this.nodePopup, delete this.nodeList, delete this.values, delete this.valuesObject, delete this.itemsOutput, delete this.keystrokeCallback, delete this._onChange
                }
            }, e.DEFAULT_OPTIONS = e.prototype.DEFAULT_OPTIONS, e.prototype.DEFAULT_OPTIONS.renderer = e.RENDERER = {
                dropdown: function (t) {
                    var e = this.disabled ? " " + t.classnameDisabled : "", i = this.readonly ? " " + t.classnameReadonly : "", n = t.multiple ? " " + t.classnameMultiple : "";
                    return '<div tabindex="0" class="' + t.classname + e + i + n + '">	' + this.render("popup") + '	<a class="' + t.classnameItem + '">' + this.render("item") + "</a></div>"
                }, item: function (t, e, i) {
                    return i
                }, popup: function (t) {
                    return '<div class="' + t.classnamePopup + " " + t.classnameHidden + '"><ul class="' + t.classnamePopupList + '"></ul></div>'
                }, popupItem: function (t, e, i) {
                    var n = (this.escape(e), this.escape(i), "");
                    return t.preventDefault || (n = e), '<li class="' + t.classnamePopupItem + '" data="' + e + '"><a' + (n ? ' href="' + n + '"' : "") + ">" + i + "</a></li>"
                }, popupItemMultiple: function (t, e, i) {
                    var n = this.escape(e, "quotes"), s = this.escape(i), o = ("select_chb_" + +new Date + "_" + ~~(1e4 * Math.random()), "<label>" + s + "</label>");
                    return t.preventDefault || (o = "<a" + (n ? ' href="' + n + '"' : "") + ">" + s + "</a>"), '<li class="' + t.classnamePopupItem + '" data="' + n + '"><input tabindex="-1" type="checkbox" />' + o + "</li>"
                }, popupGroup: function (t, e) {
                    var i = this.escape(e);
                    return '<li class="' + t.classnamePopupGroup + '">' + i + "</li>"
                }, popupList: function (t) {
                    for (var e = "", i = this.itemsOutput, n = t.showEmptyValue, s = t.multiple ? t.renderer.popupItemMultiple : t.renderer.popupItem, o = t.renderer.popupGroup, a = null, r = 0, l = i.length - 1; l >= r; r++)"item" == i[r].type ? (i[r] || n) && (a = [t, i[r].value, this.valuesObject[i[r].value], 0 === r, r === l], e += s.apply(this, a)) : (a = [t, i[r].label, 0 === r, r === l], e += o.apply(this, a));
                    return e
                }
            }, t.fn.select = function (i) {
                var n, s, o = this.find("select").add(this.filter("select"));
                return "string" == typeof i && "function" == typeof e.prototype[i] ? (n = i, s = [].splice.call(arguments, 1), i = {}) : "object" != typeof i && (i = {}), o.each(function () {
                    var o = t(this), a = o.data("select");
                    a || (a = new e(o, i), o.data("select", a)), n && a[n].apply(a, s)
                }), this
            }, t.DropDown = e, e
        })
    }, {}],
    22: [function (t, e) {
        window.Modernizr = function (t, e, i) {
            function n(t) {
                p.cssText = t
            }

            function s(t, e) {
                return typeof t === e
            }

            var o, a, r, l = "2.8.3", h = {}, c = e.documentElement, d = "modernizr", u = e.createElement(d), p = u.style, f = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), g = {}, m = [], v = m.slice, y = function (t, i, n, s) {
                var o, a, r, l, h = e.createElement("div"), u = e.body, p = u || e.createElement("body");
                if (parseInt(n, 10))for (; n--;)r = e.createElement("div"), r.id = s ? s[n] : d + (n + 1), h.appendChild(r);
                return o = ["&#173;", '<style id="s', d, '">', t, "</style>"].join(""), h.id = d, (u ? h : p).innerHTML += o, p.appendChild(h), u || (p.style.background = "", p.style.overflow = "hidden", l = c.style.overflow, c.style.overflow = "hidden", c.appendChild(p)), a = i(h, t), u ? h.parentNode.removeChild(h) : (p.parentNode.removeChild(p), c.style.overflow = l), !!a
            }, b = {}.hasOwnProperty;
            r = s(b, "undefined") || s(b.call, "undefined") ? function (t, e) {
                return e in t && s(t.constructor.prototype[e], "undefined")
            } : function (t, e) {
                return b.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function (t) {
                var e = this;
                if ("function" != typeof e)throw new TypeError;
                var i = v.call(arguments, 1), n = function () {
                    if (this instanceof n) {
                        var s = function () {
                        };
                        s.prototype = e.prototype;
                        var o = new s, a = e.apply(o, i.concat(v.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return e.apply(t, i.concat(v.call(arguments)))
                };
                return n
            }), g.touch = function () {
                var i;
                return "ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : y(["@media (", f.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                    i = 9 === t.offsetTop
                }), i
            };
            for (var x in g)r(g, x) && (a = x.toLowerCase(), h[a] = g[x](), m.push((h[a] ? "" : "no-") + a));
            return h.addTest = function (t, e) {
                if ("object" == typeof t)for (var n in t)r(t, n) && h.addTest(n, t[n]); else {
                    if (t = t.toLowerCase(), h[t] !== i)return h;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof enableClasses && enableClasses && (c.className += " " + (e ? "" : "no-") + t), h[t] = e
                }
                return h
            }, n(""), u = o = null, h._version = l, h._prefixes = f, h.testStyles = y, h
        }(window, window.document), e.exports = window.Modernizr
    }, {}],
    23: [function (t, e) {
        var i = {
            _queue: [], _images: {}, _concurrent_count: 0, _next: function () {
                function t() {
                    i.element.remove(), i.deferred.resolve(i.url), n._concurrent_count--, n._next()
                }

                function e() {
                    i.element.remove(), i.deferred.reject(i.url), n._concurrent_count--, n._next()
                }

                if (!(this._concurrent_count >= $.preload.CONCURRENT_CONNECTIONS) && this._queue.length) {
                    var i = this._images[this._queue.shift()], n = this;
                    i.element = $("<img />"), i.element.attr({alt: "", src: i.url}), i.element.css({
                        position: "absolute",
                        left: "-9000px",
                        top: "-9000px"
                    }), i.element.appendTo(document.body), this._concurrent_count++, i.element.get(0).complete ? t() : (i.element.bind("load", t), i.element.bind("error", e)), this._next()
                }
            }, getElement: function (t) {
                return t in this._images ? this._images[t].element : null
            }, preload: function (t) {
                var e, i, n, s, o = null;
                if ($.isArray(t)) {
                    for (n = 0, s = t.length, e = []; s > n; n++)e.push($.preload(t[n]));
                    return $.when.apply($, e)
                }
                return t in this._images ? (i = this._images[t], o = i.deferred) : (o = $.Deferred(), i = this._images[t] = {
                    url: t,
                    element: null,
                    deferred: o
                }, this._queue.push(t), this._next()), o.promise()
            }
        };
        $.preload = $.proxy(i.preload, i), $.preload.element = $.proxy(i.getElement, i), $.fn.preload = function () {
            var t = [];
            return $(this).each(function () {
                var e = $(this), i = e.data("src") || e.attr("src");
                i && t.push($.preload(i).done(function () {
                    e.attr("src", i)
                }))
            }), $.when.apply($, t)
        }, $.preload.CONCURRENT_CONNECTIONS = 4, e.exports = $.preload
    }, {}],
    24: [function (t, e) {
        function i() {
            var t, e = $(window), i = (document.body, $(document.activeElement));
            return b || $.support.mobile.phone && i.is("input, textarea") ? f : (t = [window.innerWidth || e.width(), window.innerHeight || e.height()], f && f[0] === t[0] && f[1] === t[1] || (f = t, r(t, m)), t)
        }

        function n(t) {
            var e = $("header.header"), i = 0, n = $(document.activeElement);
            return b || $.support.mobile.phone && n.is("input, textarea") ? g : (e.hasClass("ui-light") && (i = 80), matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches && e.hasClass("ui-light") && (i = 40), g = [t[0], t[1] - i], r(g, v), g)
        }

        function s() {
            y || (y = !0, $(window).on("resize", p(i, 60, !1)))
        }

        function o(t, e, i) {
            s(), "resize" === t && "function" == typeof e && i.push(e)
        }

        function a(t, e, i) {
            var n = 0, s = i.length;
            if ("resize" === t)for (; s > n; n++)if (i[n] === e) {
                i.splice(n, 1);
                break
            }
        }

        function r(t, e) {
            for (var i = 0, n = e.length; n > i; i++)e[i](t)
        }

        function l() {
            return f ? f : i()
        }

        function h() {
            return g ? g : n(l())
        }

        function c() {
            x && (clearTimeout(x), x = null);
            var t = $('meta[name="viewport"]');
            t.attr("content", "user-scalable=0, width=" + f[0] + ", height=" + f[1] + ", initial-scale=1, maximum-scale=1, minimal-ui"), b = !0
        }

        function d() {
            b = !1, x = null;
            var t = $('meta[name="viewport"]');
            t.attr("content", "user-scalable=0, width=device-width, initial-scale=1, maximum-scale=1, minimal-ui"), r(f, m)
        }

        function u() {
            x && clearTimeout(x), x = setTimeout(d, 500)
        }

        var p = t("./debounce"), f = null, g = null, m = [], v = [], y = !1, b = !1, x = null;
        l.on = function (t, e) {
            o(t, e, m)
        }, l.off = function (t, e) {
            a(t, e, m)
        }, h.on = function (t, e) {
            o(t, e, v)
        }, h.off = function (t, e) {
            a(t, e, v)
        }, h.freeze = l.freeze = c, h.unfreeze = l.unfreeze = u, $.winSize = l, $.contentSize = h, l.on("resize", function (t) {
            n(t)
        }), e.exports = l
    }, {"./debounce": 14}],
    25: [function (t, e) {
        $.support.transform = function () {
            for (var t = document.body.style, e = ["transform", "MozTransform", "webkitTransform", "WebkitTransform", "KhtmlTransform", "OTransform", "msTransform"], i = 0, n = e.length; n > i; i++)if (e[i]in t)return e[i];
            return !1
        }(), $.support.transform3d = function () {
            var t = document.createElement("div"), e = t.style;
            return e[$.support.transform] = "rotateY(90deg)", !!e[$.support.transform]
        }(), $.support.transition = function () {
            for (var t = document.body.style, e = ["transition", "MozTransition", "webkitTransition", "WebkitTransition", "KhtmlTransition", "OTransition", "msTransition"], i = 0, n = e.length; n > i; i++)if (e[i]in t)return e[i];
            return !1
        }(), $.support.device = function () {
            var t, e = navigator.userAgent, i = {os: {ios: 0, ios7: !1, android: 0}};
            return (t = e.match(/OS ([\d\_]+) like Mac OS X/i)) ? (i.os.ios = parseFloat(t[1].replace("_", ".")), i.os.ios7 = i.os.ios < 8 ? !0 : !1) : (t = e.match(/Android ([\d\.]+)/i)) && (i.os.android = parseFloat(t[1].replace("_", "."))), i
        }(), $.support.mobile = t("./ismobile"), $.support.touch = $.support.mobile.any && Modernizr.touch, $.support.clickEvent = $.support.touch ? "touchend" : "click", e.exports = $.support
    }, {"./ismobile": 17}],
    26: [function (t, e) {
        function i() {
            this.points = []
        }

        function n(t, e) {
            this.ns = ".t" + ++s, this.element = $(t), this.options = $.extend({
                activateDistance: null,
                activateFunction: null,
                eventPrefix: ""
            }, e), this.startXY = [0, 0], this.lastXY = [0, 0], this.deltaXY = [0, 0], this.activated = !1, this.preventClick = !1, this.momentum = new i;
            var n = $.support.touch ? "touchstart" + this.ns : "mousedown" + this.ns;
            this.element.on(n, this.handleTouchStart.bind(this)), this.element.on("click" + this.ns, this.handleClick.bind(this))
        }

        var s = (t("./debounce"), 0), o = {cancel: !0, end: !0};
        i.prototype = {
            MAX: 10, points: null, last_point: null, timer: null, start: function () {
                clearInterval(this.timer), this.timer = setInterval(this._add.bind(this), 16)
            }, stop: function () {
                clearInterval(this.timer), this.timer = null
            }, add: function (t, e) {
                this.last_point || this.start(), this.last_point = [t, e]
            }, _add: function () {
                if (this.last_point) {
                    var t = this.points, e = this.MAX;
                    t.length === e && t.shift(), t.push(this.last_point)
                }
            }, purge: function () {
                this.points = [], this.last_point = null, this.stop()
            }, getMomentum: function () {
                var t = this.points, e = 1, i = t.length, n = [0, 0];
                if (i > 1) {
                    for (; i > e; e++)n[0] += t[e][0] - t[e - 1][0], n[1] += t[e][1] - t[e - 1][1];
                    n[0] = n[0] / (i - 1), n[1] = n[1] / (i - 1)
                }
                return n
            }
        }, n.prototype = {
            ns: null,
            identifier: null,
            activated: !1,
            startXY: null,
            lastXY: null,
            deltaXY: null,
            memory: null,
            preventClick: !1,
            handleClick: function (t) {
                this.preventClick && (this.preventClick = !1, t.preventDefault())
            },
            handleTouchStart: function (t) {
                var e = this.getTouchInfo(t), i = $.support.touch ? "touchmove" + this.ns : "mousemove" + this.ns, n = $.support.touch ? "touchend" + this.ns + " touchcancel" + this.ns : "mouseup" + this.ns;
                this.preventClick = !1, this.activated = !1, this.startXY = [e.clientX, e.clientY], this.lastXY = [e.clientX, e.clientY], this.deltaXY = [0, 0], this.memory = {}, this.identifier = e.identifier, this.momentum.add(e.clientX, e.clientY), $(document).on(i, this.handleTouchMove.bind(this)), $(document).on(n, this.end.bind(this)), this.element.on(n, this.end.bind(this))
            },
            handleTouchMove: function (t) {
                var e, i = this.getTouchInfo(t, this.identifier), n = this.startXY, s = this.lastXY, o = this.deltaXY, a = "dragmove";
                if (i) {
                    if (this.options.eventPrefix && (a = this.options.eventPrefix + "Dragmove"), s[0] = i.clientX, s[1] = i.clientY, o[0] = s[0] - n[0], o[1] = s[1] - n[1], this.momentum.add(i.clientX, i.clientY), !this.activated) {
                        if (!this.checkActivation(t))return;
                        this.activated = !0, a = "dragstart", this.options.eventPrefix && (a = this.options.eventPrefix + "Dragstart")
                    }
                    e = jQuery.Event(a, {
                        store: this.memory,
                        xy: s,
                        deltaXY: o,
                        startXY: n,
                        momentum: this.momentum.getMomentum.bind(this.momentum)
                    }), this.element.trigger(e)
                }
            },
            checkActivation: function (t) {
                var e = this.deltaXY, i = this.options, n = !1;
                return "number" == typeof i.activateDistance && (n = !0, Math.abs(e[0]) >= i.activateDistance || Math.abs(e[1]) >= i.activateDistance) ? !0 : "function" == typeof i.activateFunction && (n = !0, i.activateFunction(t, {
                    store: this.memory,
                    xy: this.lastXY,
                    deltaXY: this.deltaXY,
                    startXY: this.startXY
                })) ? !0 : n ? !1 : !0
            },
            getTouchInfo: function (t, e) {
                var i = t.originalEvent, n = i.touches, s = 0, o = n ? n.length : 0;
                if (-1 !== t.type.indexOf("mouse"))return t;
                if (n)for (; o > s; s++)if (!e || e === n[s].identifier)return n[s];
                return null
            },
            end: function (t) {
                var e, i, n = this.startXY, s = this.lastXY, o = this.deltaXY;
                this.activated && (i = this.options.eventPrefix ? this.options.eventPrefix + "Dragend" : "dragend", e = jQuery.Event(i, {
                    store: this.memory,
                    xy: n,
                    deltaXY: o,
                    startXY: s,
                    momentum: this.momentum.getMomentum.bind(this.momentum),
                    preventClick: function () {
                        this.preventClick = !0, t && "touchend" === t.type && t.preventDefault && t.preventDefault(), setTimeout(function () {
                            this.preventClick = !1
                        }.bind(this), 350)
                    }.bind(this)
                }), this.element.trigger(e)), this.activated = !1, this.memory = null, this.identifier = null, this.momentum.purge();
                var a = $.support.touch ? "touchmove" + this.ns : "mousemove" + this.ns, r = $.support.touch ? "touchend" + this.ns + " touchcancel" + this.ns : "mousemove" + this.ns;
                $(document).off(a), $(document).off(r), this.element.off(r)
            },
            cancel: function (t) {
                var e = this.startXY, i = this.lastXY, n = this.deltaXY;
                i[0] = e[0], i[1] = e[1], n[0] = 0, n[1] = 0, this.momentum.purge(), this.end(t)
            }
        }, $.fn.draggable = function (t) {
            var e = t && "object" == typeof t ? t : {}, i = "string" == typeof t;
            return this.each(function () {
                var t = $(this), s = t.data("touchdrag");
                s || (s = new n(t, e), t.data("touchdrag", s)), i && s[i] && o[i] && s[i]()
            })
        }, e.exports = n
    }, {"./debounce": 14}],
    27: [function (t, e) {
        function i(t) {
            for (var e = {}, i = 0, n = t.length; n > i; i++)e[t[i].id] = t[i];
            return e
        }

        function n(t, e) {
            for (var i = t, n = 0, s = e.length; s > n; n++) {
                if (!(i && e[n]in i))return null;
                i = i[e[n]]
            }
            return i
        }

        function s(t) {
            var e = {};
            return function (i) {
                return i in e ? e[i] : e[i] = t.call(this, i)
            }
        }

        function o(t, e) {
            for (var i, n = [], s = 0, o = t.length; o > s; s++)i = e(t[s], s, t), void 0 !== i && n.push(i);
            return n
        }

        function a(t) {
            return String(t).split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quote;")
        }

        function r(t, e) {
            for (var i = parseFloat(t).toFixed(e || 0).split("."), n = i[0], s = ""; n.length > 3;)s = n.substr(-3, 3) + (s ? " " + s : ""), n = n.substring(0, n.length - 3);
            return n + (n && s ? " " : "") + s + (i[1] ? "," : "") + (i[1] || "")
        }

        function l(t, e) {
            return t.replace(/\{\s*([^}]+?)\s*\}/g, function (t, i) {
                var n = e[i];
                return null == n ? "" : a(n)
            })
        }

        function h() {
            var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
            if (e > 0)return !0;
            var i = t.indexOf("Trident/");
            if (i > 0)return !0;
            var n = t.indexOf("Edge/");
            return n > 0 ? !0 : !1
        }

        e.exports = {
            arrayToObject: i,
            traverseObject: n,
            memoize: s,
            map: o,
            escapeHTML: a,
            formatNumber: r,
            template: l,
            detectIE: h
        }
    }, {}],
    28: [function (t, e) {
        function i(t) {
            var e = $.extend({from: 0, to: 100, force: 2, precision: 1}, t);
            this.options = e, this.paused = !0, this.idle = !0, this.handle = null, this.valueRaw = e.from, this.value = this.aproximateValue(e.from), this.listeners = {
                tick: [],
                change: [],
                start: [],
                end: []
            }, this._tick = $.proxy(this._tick, this)
        }

        var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (t) {
                return setTimeout(t, 16)
            }, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || function (t) {
                return clearTimeout(t, 16)
            };
        i.prototype = {
            valueRaw: 0, value: 0, paused: !0, idle: !1, listeners: null, handle: null, start: function () {
                return this.idle && Math.abs(this.value - this.options.to) > this.options.precision && (this.idle = !1, this.emit("start", {
                    valueRaw: this.valueRaw,
                    value: this.value
                }), this.paused || (this.handle = n(this._tick))), this.paused && (this.paused = !1, this.idle || (this.handle = n(this._tick))), this
            }, stop: function () {
                return this.paused || (s(this.handle), this.handle = null, this.paused = !0), this
            }, aproximateValue: function (t) {
                var e = this.options.precision;
                return Math.round(t / e) * e
            }, _tick: function () {
                var t, e = this.valueRaw, i = (this.options.from, this.options.to), o = this.options.precision, a = this.options.force;
                e += (i - e) * a / 60, t = this.aproximateValue(e), Math.abs(t - i) < o ? (s(this.handle), this.handle = null, this.idle = !0, e = t = i) : this.handle = n(this._tick), this.valueRaw = e, this.value !== t && (this.value = t, this.emit("change", {
                    valueRaw: e,
                    value: t
                })), this.emit("tick", {valueRaw: e, value: t}), this.idle && this.emit("end", {
                    valueRaw: this.valueRaw,
                    value: this.value
                })
            }, setValue: function (t) {
                return this.valueRaw === t || !t && 0 !== t || (this.valueRaw = t, this.value = this.aproximateValue(t)), this
            }, getValue: function () {
                return this.value
            }, setFrom: function (t) {
                return this.options.from === t || !t && 0 !== t || (this.options.from = t), this
            }, getFrom: function () {
                return this.options.from
            }, setTo: function (t) {
                return this.options.to === t || !t && 0 !== t || (this.options.to = t), this
            }, getTo: function () {
                return this.options.to
            }, on: function (t, e) {
                var i = this.listeners;
                return i[t] && i[t].push(e), this
            }, emit: function (t, e) {
                for (var i = this.listeners[t], n = 0, s = i ? i.length : 0; s > n; n++)i[n](e);
                return this
            }
        }, e.exports = i
    }, {}],
    29: [function (t, e) {
        "use strict";
        {
            var i = t("./base");
            t("./../plugins/debounce")
        }
        t("./../plugins/jquery.mousewheel.js"), t("./../plugins/jquery.scrollbar.js"), e.exports = i.extend({
            NAME: "scrollable",
            init: function (t) {
                var e, i = t.find(".form-cover"), n = t.find("form"), s = t.find(".form-result");
                this.captchaField = n.find("input[name=captcha]"), this.captchaField.get(0) && (this.captchaImage = n.find(".captcha-image"), this.captchaReloadBtn = Widgets.getById("captcha-reload", t), this.captchaReloadBtn.on($.support.clickEvent, this.reloadCaptcha.bind(this))), this.views = {
                    cover: i.length ? i : null,
                    form: n,
                    result: s
                }, this._super(t), Widgets.init(this.el), this.views.form.on("submit", this.handleFormSubmit.bind(this)), e = this.getChildWidget("show-cover"), e && e.on($.support.clickEvent, this.showCover.bind(this)), e = this.getChildWidget("show-form"), e && e.on($.support.clickEvent, this.showForm.bind(this))
            },
            handlePropChange: function (t, e, i) {
                "view" === t ? this.uiUpdateView(e, i, !0) : "disabled" === t && this.uiUpdateDisabled()
            },
            getInitialState: function () {
                var t = this.views.cover && !this.views.cover.hasClass("hidden"), e = !this.views.form.hasClass("hidden");
                return {disabled: !1, view: t ? "cover" : e ? "form" : "result"}
            },
            handleFormSubmit: function () {
                if (this.getProp("disabled"))return !1;
                var t = this.views.form, e = t.attr("action") || document.location.pathname, i = t.attr("method"), n = t.serialize(), s = t.find(".btn"), o = t.find(".loader");
                return this.setProp("disabled", !0), this.showLoader(s, o), $.ajax(e, {
                    cache: !1,
                    data: n,
                    type: i,
                    dataType: "json"
                }).done(this.hideLoader(s, o), this.handleResponseSuccess.bind(this)).fail(this.handleResponseError.bind(this)).always(this.handleResponse.bind(this)), !1
            },
            handleResponse: function () {
            },
            handleResponseSuccess: function (t) {
                t && t.success ? (this.setProp("disabled", !1), this.el.find(".error").removeClass("error"), this.setProp("view", "result", !0), location.replace('/order_success/')) : this.handleResponseError(t)
            },
            showSuccessMessage: function (t, e) {
                t.fadeOut(300, function () {
                    e.fadeIn(300)
                })
            },
            handleResponseError: function (t) {
                if (this.setProp("disabled", !1), t && t.errors && this.el.parent().hasClass("form-wrapper")) {
                    var e = t.errors, i = 0, n = e.length, s = this.el, o = s.find(".footer"), a = o.find(".no-connection");
                    if (s.find(".error-text").removeClass("hidden"), s.find(".form-group.error").removeClass("error"), e.length)for (; n > i; i++)s.find('[name="' + e[i] + '"]').closest(".form-group").addClass("error"); else o.find(".form-result:visible").fadeOut(300, function () {
                        a.fadeIn(300)
                    })
                }
            },
            showLoader: function (t, e) {
                t.animate({opacity: 0}, 300, function () {
                    $(this).addClass("btn-invisible")
                }), e.animate({opacity: 1}, 300)
            },
            hideLoader: function (t, e) {
                t.animate({opacity: 1}, 300, function () {
                    $(this).removeClass("btn-invisible")
                }), e.animate({opacity: 0}, 300)
            },
            showForm: function () {
                this.setProp("view", "form")
            },
            showCover: function () {
                this.views.cover && this.setProp("view", "cover")
            },
            validateCaptcha: function () {
                return "" != this.captchaField.val()
            },
            reloadCaptcha: function () {
                var t = this.views.form, e = t.attr("action") || document.location.pathname, i = t.attr("method"), n = {
                    block_id: t.find("input[name=block_id]").val(),
                    action: "generateCaptcha"
                };
                $.ajax(e, {
                    cache: !1,
                    data: n,
                    type: i,
                    dataType: "json"
                }).done(this.onCaptchaReloadSuccess.bind(this)).fail(function () {
                })
            },
            onCaptchaReloadSuccess: function (t) {
                this.captchaImage.attr("src", t.captcha)
            },
            uiUpdateView: function (t, e, i) {
                var n = this.views[t], s = this.views[e];
                s.anim({opacity: [0, 1]}, {
                    duration: i ? 175 : 0, complete: function () {
                        s.addClass("hidden"), n.animCSS({opacity: 0}, !0), n.removeClass("hidden"), n.anim({opacity: [1, 0]}, {duration: i ? 175 : 0})
                    }
                })
            },
            uiUpdateDisabled: function () {
                var t = this.getProp("disabled");
                this.views.form.find("input,select,textarea,button").prop("disabled", t)
            }
        })
    }, {
        "./../plugins/debounce": 14,
        "./../plugins/jquery.mousewheel.js": 19,
        "./../plugins/jquery.scrollbar.js": 20,
        "./base": 31
    }],
    30: [function (t, e) {
        var i = t("./base"), n = t("./../plugins/debounce");
        t("./../plugins/jquery.mousewheel.js"), t("./../plugins/jquery.scrollbar.js"), e.exports = i.extend({
            NAME: "scrollable",
            dragging: !1,
            init: function (t) {
                this._super(t), Widgets.init(this.el), this.elContent = this.el.find(".scrollable-content").eq(0), this.el.scrollbar({
                    margin: 12,
                    padding: 12,
                    maxValue: this.getScrollMaxPos()
                }), this.el.on("scrollbarScroll", this.handleScroll.bind(this));
                var e = this.preventEventPropagation.bind(this);
                this.el.on("touchstart touchmove touchend", e), $.support.touch && (this.el.on("touchstart", function () {
                    this.dragging = !1
                }.bind(this)), this.el.on("touchmove", function () {
                    this.dragging = !0
                }.bind(this))), this.el.on("DOMMouseScroll mousewheel", this.handleMouseWheel.bind(this)), this.el.on("DOMMouseScroll mousewheel", n(this.handleMouseWheelPrevent.bind(this), 100, "before"))
            },
            updateUI: function () {
                var t = this.getScrollMaxPos(), e = this.el.scrollbar();
                t ? (e.setMax(t), e.show(), e.update()) : e.hide()
            },
            getScrollMaxPos: function () {
                var t = this.elContent, e = Math.max(0, t.get(0).scrollHeight - t.get(0).offsetHeight);
                return e
            },
            handleScroll: function (t, e) {
                if (e) {
                    var i = this.elContent;
                    i.scrollTop(e.value)
                }
            },
            preventEventPropagation: function (t) {
                t.stopPropagation()
            },
            handleMouseWheel: function (t) {
                if (this.continueToPreventScroll)return t.stopPropagation(), void 0;
                if (t.originalEvent.wheelDelta ? wheel = t.originalEvent.wheelDelta : t.originalEvent.detail && (wheel = -t.originalEvent.detail), wheel > 0) {
                    if (this.isScrollBoundary("min"))return
                } else if (this.isScrollBoundary("max"))return;
                t.stopPropagation(), this.continueToPreventScroll = !0
            },
            handleMouseWheelPrevent: function () {
                this.continueToPreventScroll = !1
            },
            isScrollBoundary: function (t) {
                var e, i, n = this.elContent.scrollTop();
                return "min" === t ? 0 === n ? !0 : !1 : (i = this.el.get(0), e = i.scrollHeight - i.offsetHeight, n >= e ? !0 : !1)
            },
            scrollToTop: function () {
                this.elContent.animate({scrollTop: 0}, 700)
            },
            getScrollPos: function () {
                return this.elContent.scrollTop()
            },
            setScrollPos: function (t) {
                var e = this.el.scrollbar();
                this.elContent.scrollTop(t), e.update(), e.setValue(t)
            },
            scrollTo: function (t, e) {
                this.elContent.animate({scrollTop: t}, 700, function () {
                    e && "function" == typeof e && e()
                })
            }
        })
    }, {
        "./../plugins/debounce": 14,
        "./../plugins/jquery.mousewheel.js": 19,
        "./../plugins/jquery.scrollbar.js": 20,
        "./base": 31
    }],
    31: [function (t, e) {
        var i = t("../plugins/class"), n = 0;
        e.exports = i.extend({
            NAME: "base", screenSize: null, init: function (t, e) {
                this.el = $(t), this.el.data("widget", this), this.props = this.getInitialState(), this.timers = [], this.setProps(e), $.contentSize.on("resize", this.handleViewportResize.bind(this))
            }, getChildWidget: function (t) {
                return Widgets.getById(t, this.el)
            }, getParentWidget: function () {
                return Widgets.getFromNode(this.el.parent().closest("[data-attach]"))
            }, on: function (t, e, i, n) {
                return this.el.on(t, e, i, n), this
            }, one: function (t, e, i, n) {
                return this.el.on(t, e, i, n), this
            }, off: function (t, e, i) {
                return this.el.off(t, e, i), this
            }, _timerInvokeImmediately: !1, startTimer: function (t, e) {
                var i, s, o = ++n;
                return i = setTimeout(function () {
                    s.fn(), s.cancel()
                }.bind(this), e), s = {
                    id: o, fn: function () {
                        s.active = !0, t.call(this)
                    }.bind(this), active: !1, handle: i, cancel: function () {
                        this._timerCancel(s.id)
                    }.bind(this)
                }, this.timers.push(s), s
            }, stopTimer: function (t) {
                if (this._timerInvokeImmediately)return this;
                this._timerInvokeImmediately = !0;
                for (var e, i = this.timers; e = i.shift();)e.active || (clearTimeout(e.handle), t ? e.fn() : e.cancel());
                return this.timers = [], this._timerInvokeImmediately = !1, this
            }, _timerCancel: function (t) {
                for (var e = this.timers, i = 0, n = e.length; n > i; i++)if (e[i].id === t) {
                    clearTimeout(e[i].handle), e[i].cancel = e[i].fn = null, e.splice(i, 1);
                    break
                }
            }, handleViewportResize: function () {
                this.setProp("orientation", this.getOrientation())
            }, getOrientation: function () {
                var t = $.winSize();
                return t[0] > 1024 || t[0] > t[1] ? "landscape" : "portrait"
            }, getProp: function (t) {
                return this.props[t]
            }, setProp: function (t, e) {
                if (this.props[t] !== e && void 0 !== e) {
                    var i = this.props[t];
                    this.props[t] = e, this.handlePropChange(t, e, i) === !1 ? this.props[t] = i : this.el.trigger("propChange:" + this.NAME, {
                        name: t,
                        value: e,
                        prevValue: i
                    })
                }
                return this
            }, setProps: function (t) {
                var e;
                if (t)for (e in t)tihs.setProp(e, t[e]);
                return this
            }, handlePropChange: function () {
            }, getInitialState: function () {
                return {
                    id: this.el.data("id") || this.el.attr("id") || "widget" + ++n,
                    orientation: this.getOrientation()
                }
            }, getElementSize: function (t, e, i) {
                var n, s, o, a = t.not(".invisible").eq(0), r = a.data("calculatedSize" + (e || ""));
                return r ? r : (i || (r = [a.outerWidth(!0), a.outerHeight(!0)]), r && r[0] && r[1] || (o = a.outerWidth(!0), n = a.clone(), n.addClass("invisible").css({
                    display: "block",
                    width: o ? o + "px" : "auto",
                    height: "auto"
                }).insertBefore(a), "function" == typeof i && (s = i(n)), r = $.isArray(s) ? s : [n.outerWidth(!0), n.outerHeight(!0)], n.remove()), r && r[1] && r[0] && a.data("calculatedSize" + (e || ""), r), r)
            }
        })
    }, {"../plugins/class": 12}],
    32: [function (t, e) {
        var i = t("./button"), n = t("./../tween/spring");
        e.exports = i.extend({
            CIRCLE_LENGTH: 2 * Math.PI * 29, init: function (t, e) {
                this._super(t, e);
                var i, s, o = matchMedia("(max-width: 667px)").matches;
                i = o ? '<svg width="30" height="30" viewport="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">	<circle r="14" cx="15" cy="15" fill="transparent" transform="rotate(-90) translate(-30 0)" stroke-dasharray="' + this.CIRCLE_LENGTH + '" style="stroke-dashoffset: ' + this.CIRCLE_LENGTH + 'px; stroke-width: 2px;"></circle></svg>' : '<svg width="60" height="60" viewport="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">	<circle r="29" cx="30" cy="30" fill="transparent" transform="rotate(-90) translate(-60 0)" stroke-dasharray="' + this.CIRCLE_LENGTH + '" style="stroke-dashoffset: ' + this.CIRCLE_LENGTH + 'px; stroke-width: 2px;"></circle></svg>', s = $(i), this.svg = s, this.svgCircle = s.find("circle"), this.el.append(s), this.springTween = new n({
                    precision: .25,
                    force: 5
                }), this.springTween.on("change", this.handleSpringTick.bind(this))
            }, handlePropChange: function (t, e, i) {
                this._super(t, e, i), "progress" === t && this.uiProgress(e)
            }, getInitialState: function () {
                return $.extend(this._super(), {progress: this.el.data("progress") || 0})
            }, handleSpringTick: function (t) {
                this.setProp("progress", t.value)
            }, uiProgress: function (t) {
                var e = this.CIRCLE_LENGTH * Math.min(100, Math.max(0, 100 - t)) / 100, i = this.svgCircle;
                i.anim("stop"), i.animCSS({strokeDashoffset: e + "px"})
            }, spring: function (t) {
                "stop" === t ? this.springTween.stop() : "number" == typeof t && this.springTween.setTo(t).start()
            }, animate: function (t, e) {
                var i = this.CIRCLE_LENGTH, n = this.getProp("progress"), s = Math.max(0, Math.min(100, t)), o = i * (100 - n) / 100;
                offsetEnd = i * (100 - s) / 100, this.springTween.stop(), this.svgCircle.anim("stop"), this.svgCircle.anim({strokeDashoffset: [offsetEnd + "px", o + "px"]}, {
                    duration: e,
                    progress: function (t, e) {
                        this.props.progress = Math.round((s - n) * e + n)
                    }.bind(this)
                })
            }
        })
    }, {"./../tween/spring": 28, "./button": 33}],
    33: [function (t, e) {
        var i = t("./base");
        e.exports = i.extend({
            NAME: "button", init: function (t, e) {
                this._super(t, e), "hover" !== this.props.activateOn || Modernizr.touch || this.el.hover(function () {
                    this.setProp("active", !0)
                }.bind(this), function () {
                    this.setProp("active", !1)
                }.bind(this)), this.el.data("active") && this.setProp("active", !0), this.el.data("visible") === !1 && this.setProp("visible", !1), this.el.on("mousedown touchstart", function () {
                    this.setProp("down", !0)
                }.bind(this)), this.el.on("mouseup mouseout touchend", function () {
                    this.setProp("down", !1)
                }.bind(this))
            }, handlePropChange: function (t, e, i) {
                "icon" === t ? this.uiTransitionIcons(e, i) : "active" === t && this.props.types.collapsed ? this.uiTransitionToggle(e) : "active" === t && this.props.types["lbl-outter"] ? this.uiTransitionSize(e) : "active" === t ? this.uiTransitionActive(e) : "down" === t ? this.uiTransitionDown(e) : "visible" === t ? this.uiTransitionVisible(e) : "label" === t && this.uiUpdateLabel(e)
            }, getInitialState: function () {
                var t, e, i = this.el, n = i.find(".icon").attr("class") || "", s = i.attr("class") || "", o = i.find(".label").text(), a = {};
                for (n = (t = n.match(/(?:^|\s)icon-([a-z0-9-_]+)(?:$|\s)/)) ? t[1] : "", e = /(?:^|\s+)(?:btn-)([a-z0-9-_]+)/g; t = e.exec(s);)a[t[1]] = !0;
                return $.extend(this._super(), {
                    down: !1,
                    icon: n,
                    types: a,
                    active: !1,
                    activateOn: this.el.data("activateOn"),
                    visible: !0,
                    label: o
                })
            }, uiTransitionActive: function () {
            }, uiTransitionDown: function (t) {
                this.el.toggleClass("down", t)
            }, uiTransitionVisible: function (t) {
                this.el.toggleClass("hidden", !t)
            }, uiTransitionToggle: function (t) {
                var e = this.el, i = this.el.find(".lbl");
                if (e.toggleClass("active", t), t) {
                    var n = this._uiGetLabelSize();
                    i.css("width", n + "px")
                } else i.css("width", "0px")
            }, uiTransitionSize: function (t) {
                var e = this.el, i = (this.el.find(".lbl"), this.props.types["lbl-right"] ? "Left" : "Right");
                e.toggleClass("active", t), t ? e.css("margin" + i, this._uiGetLabelSize() + "px") : e.css("margin" + i, "0px")
            }, _uiGetLabelSize: function () {
                var t = this.el.find(".lbl");
                return this.getElementSize(t)[0]
            }, uiTransitionIcons: function (t, e) {
                Math.random();
                this.stopTimer(!0);
                var i = this.el.find(".icon");
                i.addClass("icon-out"), this.startTimer(function () {
                    e && i.removeClass("icon-" + e), t && i.addClass("icon-" + t), i.removeClass("icon-out").addClass("icon-in"), this.startTimer(function () {
                        i.removeClass("icon-in")
                    }, 150)
                }, 150)
            }, uiUpdateLabel: function (t) {
                this.el.find(".label").text(t)
            }
        })
    }, {"./base": 31}],
    34: [function (t, e) {
        var i = t("./base");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e), this.carousel = this.el, this.inner = this.carousel.find(".carousel-inner"), this.slides = this.carousel.find(".item"), this.indicators = this.carousel.find(".carousel-indicators"), this.renderIndicators(this.indicators), this.indicators.delegate("li", "touchend click", this.handleIndicatorClick.bind(this)), this.inner.animCSS({width: 100 * this.slides.length + "%"}), this.slides.animCSS({width: Math.ceil(100 / this.slides.length) + "%"}), this.setProp("slide", 0)
            }, handlePropChange: function (t, e, i) {
                "slide" === t && this.handleSlidePropChange(e, i)
            }, getInitialState: function () {
                return $.extend(this._super(), {slide: null})
            }, handleIndicatorClick: function (t) {
                t.stopPropagation();
                var e = $(t.currentTarget);
                this.setProp("slide", e.data("slide-to"))
            }, renderIndicators: function (t) {
                var e = (this.inner, 0), i = this.slides.length;
                if (t.html(""), this.slides.length > 1)for (; i > e; e++) {
                    var n = '<li data-slide-to="' + e + '"></li>';
                    t.append(n)
                }
            }, handleSlidePropChange: function (t) {
                this.inner.anim("stop", ["translateX"]), this.inner.anim({translateX: t * (-100 / this.slides.length) + "%"}, {
                    duration: 350,
                    easing: "ease-out"
                }), this.indicators.children("li").removeClass("active"), this.indicators.children("li").eq(t).addClass("active")
            }
        })
    }, {"./base": 31}],
    35: [function (t, e) {
        e.exports = t(29)
    }, {
        "./../plugins/debounce": 14,
        "./../plugins/jquery.mousewheel.js": 19,
        "./../plugins/jquery.scrollbar.js": 20,
        "./base": 31
    }],
    36: [function (t, e) {
        var i = t("./base"), n = t("./../plugins/cover"), s = t("./../plugins/debounce"), o = t("./../plugins/utils");
        e.exports = i.extend({
            NAME: "fs-gallery", init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.slider = this.el.find(".fs-gallery-slider"), this.inner = this.slider.find(".fs-gallery-slider-inner"), this.slides = this.slider.find(".fs-gallery-slide"), this.cloneFirstSlide(), this.slideParts = this.slides.find(".fs-gallery-slide-part"), this.backgrounds = this.slides.find(".bg"), this.toggleButton = this.el.find(".fs-gallery-toggle"), $.contentSize.on("resize", this.uiUpdate.bind(this)), $.support.touch ? (this.el.swipe({
                    allowPageScroll: "none",
                    swipeLeft: function () {
                        this.setProp("swipeDirection", "left"), this.prevSlide()
                    }.bind(this),
                    swipeRight: function () {
                        this.setProp("swipeDirection", "right"), this.nextSlide()
                    }.bind(this),
                    threshold: 75
                }), this.nextButton = this.getChildWidget("fs-gallery-next"), this.prevButton = this.getChildWidget("fs-gallery-prev"), this.prevButton.on($.support.clickEvent, function (t) {
                    t.preventDefault(), this.setProp("swipeDirection", "left"), this.prevSlide()
                }.bind(this)), this.nextButton.on($.support.clickEvent, function (t) {
                    t.preventDefault(), this.setProp("swipeDirection", "right"), this.nextSlide()
                }.bind(this))) : (this.el.on("mousemove", s(this.handleMouseMove.bind(this), 100, "leading")), this.el.on($.support.clickEvent, this.handleClick.bind(this))), this.toggleButton && this.toggleButton.on($.support.clickEvent, this.handleToggleButton.bind(this)), this.slideParts && !$.support.touch && (this.slideParts.on("mouseenter", this.handleSlidePartMouseOver.bind(this)), this.slideParts.on("mouseleave", this.handleSlidePartMouseLeave.bind(this)));
                var i = $(".ie-prevbutton"), n = $(".ie-nextbutton");
                o.detectIE() && (i.show(), n.show())
            }, cloneFirstSlide: function () {
                var t = this.slides, e = t.eq(0).clone(!0);
                t.eq(-1).after(e), this.slides = t.add(e)
            }, handlePropChange: function (t, e, i) {
                "active" === t ? (this.uiTransitionActive(e, i), e && this.uiUpdate()) : "slide" === t && (e > this.slides.length - 2 ? e = 0 : 0 > e && (e = this.slides.length - 2), this.uiTransitionSlide(e, i))
            }, getInitialState: function () {
                return $.extend(this._super(), {active: !1, slide: 0, swipeDirection: "right"})
            }, handleSlidePartMouseLeave: function () {
                this.slideParts.removeClass("active inactive")
            }, handleSlidePartMouseOver: function (t) {
                var e = $(t.currentTarget), i = e.parent();
                this.slideParts.removeClass("active inactive"), e.addClass("active"), i.find(".fs-gallery-slide-part").not(e).addClass("inactive")
            }, handleMouseMove: function (t) {
                var e = t.pageX / this.el.width() * 100;
                this.el.removeClass("cursor-left cursor-right"), e > 50 ? this.el.addClass("cursor-right") : this.el.addClass("cursor-left")
            }, handleClick: function (t) {
                var e;
                e = $.support.touch ? t.originalEvent.changedTouches[0].pageX / this.el.width() * 100 : t.pageX / this.el.width() * 100, e > 50 ? this.nextSlide() : this.prevSlide()
            }, handleToggleButton: function (t) {
                t.stopPropagation(), this.toggle()
            }, nextSlide: function () {
                var t = this.getProp("slide");
                t += 1, t > this.slides.length - 2 && (t = 0), this.setProp("slide", t)
            }, prevSlide: function () {
                var t = this.getProp("slide");
                t -= 1, 0 > t && (t = this.slides.length - 2), this.setProp("slide", t)
            }, toggle: function () {
                this.setProp("active", !this.getProp("active"))
            }, uiUpdate: function () {
                this.uiUpdateInnerSize(), this.uiUpdateSlidesSize(), this.uiUpdateBackgroundSize()
            }, uiUpdateSlidesSize: function () {
                this.slides.animCSS({width: 100 / this.slides.length + "%"})
            }, uiUpdateInnerSize: function () {
                this.inner.animCSS({width: 100 * this.slides.length + "%"})
            }, uiTransitionSlide: function (t, e) {
                var i, n = t, s = this.slides.length;
                if ("undefined" == typeof t && (n = this.getProp("slide")), this.inner.anim("stop", ["translateX"]), i = n, $.support.touch) {
                    if ("number" == typeof e) {
                        var o;
                        "left" == this.getProp("swipeDirection") ? (o = this.slides.eq(e).clone(!0), this.slides.eq(n).before(o), this.inner.animCSS({translateX: n * (-100 / s) + "%"}, !0), i = n + 1) : (o = this.slides.eq(e).clone(!0), this.slides.eq(n).after(o), this.inner.animCSS({translateX: (n + 1) * (-100 / s) + "%"}, !0), i = n), this.inner.anim({translateX: i * (-100 / s) + "%"}, {
                            duration: 500,
                            easing: "ease-out",
                            complete: function () {
                                "left" == this.getProp("swipeDirection") && this.inner.animCSS({translateX: (i - 1) * (-100 / s) + "%"}, !0), o.remove()
                            }.bind(this)
                        })
                    }
                } else"number" == typeof e && (0 === e && n === s - 2 ? this.inner.animCSS({translateX: (s - 1) * (-100 / s) + "%"}) : e === s - 2 && 0 === n && (i = s - 1)), this.inner.anim({translateX: i * (-100 / s) + "%"}, {
                    duration: 350,
                    easing: "ease-out",
                    complete: function () {
                        i !== n && this.inner.animCSS({translateX: n * (-100 / s) + "%"})
                    }.bind(this)
                })
            }, uiUpdateBackgroundSize: function (t) {
                for (var e, i, s, o, a, r = this.backgrounds.find(t || "img, video"), l = null, h = 0, c = r.length, d = $.contentSize(); c > h; h++)e = r.eq(h), l = e.closest("[data-bg-container]"), l.size() && l.is(":visible") && (s = l.width(), o = l.height()), s = s || d[0], o = o || d[1], i = e.data("ratio"), i || (i = parseInt(e.attr("width") || e.width()) / parseInt(e.attr("height") || e.height()), e.data("ratio", i)), a = n(s, o, i), e.animCSS({
                    width: a.width + "px",
                    height: a.height + "px",
                    left: a.left + "px",
                    top: a.top + "px"
                })
            }, uiTransitionActive: function (t) {
                var e = this.el;
                t ? (e.removeClass("hidden"), this.stopTimer(!0), this.startTimer(function () {
                    this.el.addClass("active"), this.uiTransitionSlide()
                }, 16)) : (this.stopTimer(!0), this.startTimer(function () {
                    this.el.removeClass("active"), this.startTimer(function () {
                        this.el.addClass("hidden")
                    }, 700)
                }))
            }
        })
    }, {"./../plugins/cover": 13, "./../plugins/debounce": 14, "./../plugins/utils": 27, "./base": 31}],
    37: [function (t, e) {
        var i = t("./../../components/widgets/base"), n = t("./../../components/plugins/utils");
        e.exports = i.extend({
            SPRITE: {
                home: {anchor: [22, 60], size: [60, 60], origin: [0, 0]},
                target: {anchor: [22, 60], size: [60, 60], origin: [0, 66]}
            }, map: null, mapCenter: null, markers: null, userLocation: null, retina: !1, init: function (t, e) {
                this._super(t, e), this.markers = {}, this.elDuration = this.el.siblings(".duration"), this.elDuration.find("span").animProp({value: 0}), this.controls = this.el.siblings(".map-controls"), window.devicePixelRatio > 1 && (this.retina = !0), this.controls && (this.controls.find('a[data-action="map-zoomin"]').on($.support.clickEvent, this.mapZoomIn.bind(this)), this.controls.find('a[data-action="map-zoomout"]').on($.support.clickEvent, this.mapZoomOut.bind(this))), this.content = this.el.siblings(".content"), $.contentSize.on("resize", this.uiUpdate.bind(this)), this.is_mobile = matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches
            }, handlePropChange: function (t, e, i) {
                "active" === t ? e && this.createMap() : "userLocation" === t ? this.uiUpdateUserLocation(e) : "durationMinor" === t ? this.uiUpdateDurationMinor(e, i) : "durationMajor" === t ? this.uiUpdateDurationMajor(e, i) : "durationProgress" === t ? this.uiUpdateDurationProgress(e, i) : "officeLocation" === t && e && this.createMap(e)
            }, getInitialState: function () {
                return {
                    userLocation: null,
                    targetLocation: [55.743654, 37.288017],
                    durationMajor: 0,
                    durationProgress: 0,
                    durationMinor: ""
                }
            }, createMap: function (t) {
                if (!this.map) {
                    var e = this.getProp("targetLocation"), i = t ? new google.maps.LatLng(t[0], t[1]) : new google.maps.LatLng(e[0], e[1]), n = {
                        center: i,
                        zoom: 12,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        disableDefaultUI: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.RIGHT_BOTTOM
                        },
                        styles: [{stylers: [{visibility: "off"}]}, {
                            featureType: "water",
                            elementType: "geometry.fill",
                            stylers: [{visibility: "on"}, {color: "#688193"}]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry.fill",
                            stylers: [{visibility: "on"}, {color: "#475563"}]
                        }, {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [{visibility: "on"}, {color: "#5b6f7f"}]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [{visibility: "on"}, {color: "#1d2730"}]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.stroke",
                            stylers: [{visibility: "on"}, {color: "#688193"}]
                        }, {
                            featureType: "administrative.locality",
                            elementType: "labels.text.fill",
                            stylers: [{visibility: "on"}, {color: "#6a89a3"}]
                        }, {featureType: "poi", elementType: "labels", stylers: [{visibility: "on"}]}, {
                            featureType: "poi",
                            elementType: "labels.text.fill",
                            stylers: [{visibility: "on"}, {color: "#1d2730"}]
                        }, {
                            featureType: "poi",
                            elementType: "labels.text.stroke",
                            stylers: [{visibility: "on"}, {color: "#688193"}]
                        }, {
                            featureType: "poi",
                            elementType: "labels.icon",
                            stylers: [{hue: "#0099ff"}, {visibility: "on"}]
                        }]
                    };
                    n.zoomControl = this.controls ? !1 : !0;
                    var s = new google.maps.Map(this.el.get(0), n);
                    this.map = s, this.mapCenter = i;
                    var o = t ? "target" : "home";
                    this.getMarker(o), google.maps.event.addListener(s, "click", function (t) {
                        this.setProp("userLocation", [t.latLng.lat(), t.latLng.lng()])
                    }.bind(this))
                }
            }, createMarker: function (t, e) {
                var i = this.SPRITE[t], n = new google.maps.Marker({
                    position: e || this.mapCenter,
                    map: this.map,
                    title: "",
                    icon: {
                        anchor: new google.maps.Point(i.anchor[0], i.anchor[1]),
                        origin: new google.maps.Point(i.origin[0], i.origin[1]),
                        size: new google.maps.Size(i.size[0], i.size[1]),
                        scaledSize: new google.maps.Size(60, 126),
                        url: this.retina ? "./case02_files/map-icons_retina.png" : "./case02_files/map-icons.png"
                    }
                });
                return n
            }, getMarker: function (t) {
                return this.markers[t] || (this.markers[t] = this.createMarker(t))
            }, drawRoute: function (t) {
                var e = this.mapDirectionsDisplay, i = this.mapDirectionsService, s = (this.map, $.Deferred());
                e || (e = new google.maps.DirectionsRenderer({
                    hideRouteList: !0,
                    markerOptions: {visible: !1},
                    polylineOptions: {strokeColor: "#fff", strokeWeight: 2}
                }), e.setMap(this.map), this.mapDirectionsDisplay = e), i || (i = new google.maps.DirectionsService, this.mapDirectionsService = i);
                var o = {origin: t, destination: this.mapCenter, travelMode: google.maps.TravelMode.DRIVING};
                return i.route(o, function (t, i) {
                    if (i == google.maps.DirectionsStatus.OK) {
                        e.setDirections(t);
                        var o = n.traverseObject(t, ["routes", 0, "legs", 0, "duration", "text"]), a = o ? o.match(/([\d\.]+)\s*(.*)/) : null, r = n.traverseObject(t, ["routes", 0, "legs", 0, "duration", "value"]);
                        r = Math.min(60, r / 60) / 60, window.routeResult = t, this.content && this.content.fadeOut(), r >= 1 && a ? (a[2] = a[2].replace(/hours|hour/gi, "H"), a[2] = a[2].replace(/mins|min/gi, "M"), a[2] = a[2].replace(/час/gi, "ч")) : 1 > r && a && (a[2] = a[2].replace(/mins/gi, "min")), this.setProp("durationProgress", r), this.setProp("durationMajor", a ? parseInt(a[1], 10) : 0), this.setProp("durationMinor", a ? a[2] : ""), s.resolve(t)
                    } else s.reject(t)
                }.bind(this)), s.promise()
            }, getRoutePath: function (t) {
                var e = n.traverseObject(t, ["routes", 0, "overview_path"]);
                return this.coordinatesToPath(e)
            }, coordinatesToPath: function (t) {
                for (var e, i = this.map, n = Math.pow(2, i.getZoom()), s = new google.maps.LatLng(i.getBounds().getNorthEast().lat(), i.getBounds().getSouthWest().lng()), o = i.getProjection().fromLatLngToPoint(s), a = 0, r = t.length, l = []; r > a; a++)e = i.getProjection().fromLatLngToPoint(new google.maps.LatLng(t[a].k, t[a].D)), l.push([Math.floor((e.x - o.x) * n), Math.floor((e.y - o.y) * n)]);
                return l
            }, isLocationDetectionSupported: function () {
                return !!navigator.geolocation
            }, detectUserLocation: function () {
                var t = $.Deferred();
                return this.isLocationDetectionSupported() ? navigator.geolocation.getCurrentPosition($.proxy(function (e) {
                    var i = new google.maps.LatLng(e.coords.latitude, e.coords.longitude);
                    this.drawRoute(i).then(function () {
                        t.resolve()
                    }, function () {
                        t.reject()
                    })
                }, this), $.proxy(function (e) {
                    var i;
                    switch (e.code) {
                        case e.PERMISSION_DENIED:
                            i = "Access to your location is turned off. Change your settings to turn it back on.";
                            break;
                        case e.POSITION_UNAVAILABLE:
                            i = "Data from location services is currently unavailable.";
                            break;
                        case e.TIMEOUT:
                            i = "Location could not be determined."
                    }
                    i && alert(i), t.reject()
                }, this)) : t.reject(), t.promise()
            }, mapZoomIn: function () {
                this.map && this.map.setZoom(this.map.getZoom() + 1)
            }, mapZoomOut: function () {
                this.map && this.map.setZoom(this.map.getZoom() - 1)
            }, getMapSize: function () {
                var t, e = this.getParentWidget();
                return e && e.getUISizes && (t = e.getUISizes(), t.containerMaxWidth) ? [t.containerMaxWidth, t.containerMaxHeight || t.containerHeight] : $.contentSize()
            }, uiUpdate: function () {
                this.uiUpdateMapSize()
            }, uiUpdateMapSize: function () {
                if (this.map) {
                    var t = this.getMapSize();
                    this.el.animCSS({
                        width: t[0] + "px",
                        height: t[1] + "px"
                    }, !0), google.maps.event.trigger(this.map, "resize")
                }
            }, uiUpdateUserLocation: function (t) {
                if (t) {
                    var e = this.getMarker("target"), i = new google.maps.LatLng(t[0], t[1]);
                    this.userLocation = i, e.setPosition(i), this.drawRoute(i)
                }
            }, uiUpdateDurationMinor: function (t) {
                if (t) {
                    var e = this.elDuration.find("small");
                    e.text(n.escapeHTML(t))
                }
            }, uiUpdateDurationMajor: function (t, e) {
                var i = this.elDuration, n = i.find("span");
                !t && e ? i.anim({opacity: [0, 1]}, {
                    duration: 350, complete: function () {
                        i.addClass("hidden"), n.animProp({value: 0}).text("0")
                    }
                }) : t && !e && i.anim({opacity: [1, 0]}, {
                    duration: 350, begin: function () {
                        i.removeClass("hidden")
                    }
                }), t && n.anim({value: t}, {
                    duration: 1200, easing: "ease-out", progress: function (t, e, i) {
                        $(t).text(Math.round(i.value))
                    }
                })
            }, uiUpdateDurationProgress: function (t, e) {
                var i = this.elDuration.find("div"), n = 102;
                this.is_mobile && (n = 49), t && i.circleProgress({
                    startAngle: -Math.PI / 2,
                    value: t,
                    animationStartValue: e,
                    size: n,
                    thickness: 2,
                    fill: {color: "#465662"},
                    emptyFill: "rgba(0, 0, 0, 0)"
                })
            }
        })
    }, {"./../../components/plugins/utils": 27, "./../../components/widgets/base": 31}],
    38: [function (t, e) {
        var i = t("./base"), n = t("./../plugins/cover");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e), $.contentSize.on("resize", this.uiSizeChange.bind(this)), this.uiSizeChange()
            }, uiSizeChange: function () {
                this.uiUpdateSectionSize(), this.uiUpdateBackgroundSize(this.el.find(".bg"))
            }, uiUpdateSectionSize: function () {
                this.el.animCSS({height: $.contentSize()[1] + "px"}, !0)
            }, uiUpdateBackgroundSize: function (t, e) {
                for (var i, s, o, a, r, l = t.find(e || "img, video"), h = null, c = 0, d = l.length, u = $.contentSize(); d > c; c++)i = l.eq(c), h = i.closest("[data-bg-container]"), h.size() && h.is(":visible") && (o = h.width(), a = h.height()), o = o || u[0], a = a || u[1], s = i.data("ratio"), s || (s = parseInt(i.attr("width") || i.width()) / parseInt(i.attr("height") || i.height()), i.data("ratio", s)), r = n(o, a, s), i.animCSS({
                    width: r.width + "px",
                    height: r.height + "px",
                    left: r.left + "px",
                    top: r.top + "px"
                })
            }
        })
    }, {"./../plugins/cover": 13, "./base": 31}],
    39: [function (t, e) {
        var i = t("./base");
        e.exports = i.extend({
            NAME: "slide", slideAnimationDuration: 1200, init: function (t, e) {
                this._super(t, e), this.initDragScroll(), $.contentSize.on("resize", function () {
                    this.uiUpdateSize()
                }.bind(this)), this.uiUpdateSize(), Widgets.init(this.el);
                var i = this.getChildWidget("left"), n = this.getChildWidget("right");
                i && n && (i.on("propChange:slidepart", {connected: n}, this.handleChildPropChange.bind(this)), n.on("propChange:slidepart", {connected: i}, this.handleChildPropChange.bind(this)))
            }, initDragScroll: function () {
                if ($.support.touch && Widgets.getById("controller")) {
                    var t = this.el.find(".slide-part");
                    t.length || (t = this.el), this.el.draggable({
                        activateFunction: function (t, e) {
                            {
                                var i = Math.abs(e.deltaXY[0] / (e.deltaXY[1] || 0));
                                Widgets.getById("controller")
                            }
                            return Math.abs(e.deltaXY[1]) < 50 ? !1 : i > .75 ? !1 : !0
                        }.bind(this)
                    }).on("dragend", function (t) {
                        var e = Widgets.getById("controller");
                        t.momentum()[1] < -10 && e.next() ? t.preventClick() : t.momentum()[1] > 10 && e.previous() && t.preventClick()
                    }.bind(this))
                }
            }, handleChildPropChange: function (t, e) {
                "active" === e.name && t.data.connected.setProp("inactive", e.value)
            }, handlePropChange: function (t, e) {
                if ("active" === t) {
                    this.uiActiveToggle(e);
                    var i = this.getChildWidget("left"), n = this.getChildWidget("right");
                    i && i.uiUpdate(), n && n.uiUpdate()
                }
            }, getInitialState: function () {
                return $.extend(this._super(), {active: this.el.hasClass("active")})
            }, scrollNext: function () {
                var t = this.getChildWidget("left"), e = this.getChildWidget("right");
                return t && t.scrollNext() ? !0 : e && e.scrollNext() ? !0 : !1
            }, scrollPrevious: function () {
                var t = this.getChildWidget("left"), e = this.getChildWidget("right");
                return t && t.scrollPrevious() ? !0 : e && e.scrollPrevious() ? !0 : !1
            }, pepareForTransition: function () {
                var t = $.Deferred(), e = this.getChildWidget("left"), i = this.getChildWidget("right");
                return this.getProp("animating") || !e && !i ? t.resolve() : (e && e.setProp("active", !1), i && i.setProp("active", !1), this.setProp("animating", !0), $.when(e.whenInactive, i.whenInactive).done(t.resolve.bind(t))), t.promise()
            }, uiUpdateSize: function () {
                this.el.animCSS({height: $.contentSize()[1] + "px"}, !0)
            }, uiActiveToggle: function (t) {
                this.el.toggleClass("active", t), t || this.el.find("video").not(".video video").each(function () {
                    try {
                        this.currentTime = 0
                    } catch (t) {
                    }
                })
            }, animateIn: function (t, e) {
                this.setProp("animating", !0), this.setProp("active", !0);
                var i = this.el.find(".slide-part"), n = i.eq(0), s = i.eq(1), o = $(), a = $(), r = this.getChildWidget("left"), l = this.getChildWidget("right");
                if (r && r.uiUpdate(), l && l.uiUpdate(), $.support.mobile && $.support.mobile.apple && $.support.mobile.apple.device && (o = n.find(".valign-middle, footer"), a = s.find(".valign-middle, footer"), o.animCSS({hwAcceleration: !0}), a.animCSS({hwAcceleration: !0})), this.el.addClass("slide-transition-in"), i.length) {
                    this.el.addClass("ontop");
                    var h = "main" === e ? "easeOutQuint" : "easeInOutQuint";
                    "landscape" === this.getProp("orientation") ? (n.addClass("slide-no-overflow"), n.anim("stop", ["translateY"]), n.anim({translateY: ["0%", 100 * t + "%"]}, {
                        duration: this.slideAnimationDuration,
                        easing: h,
                        complete: function () {
                            n.removeClass("slide-no-overflow")
                        }
                    }), s.anim("stop", ["translateY"]), s.anim({translateY: ["0%", 100 * -t + "%"]}, {
                        duration: this.slideAnimationDuration,
                        easing: h,
                        complete: function () {
                            this.el.removeClass("slide-transition-in"), this.setProp("animating", !1)
                        }.bind(this)
                    })) : (n.anim("stop", ["translateX"]), n.anim({translateX: ["0%", 100 * t + "%"]}, {
                        duration: this.slideAnimationDuration,
                        easing: h
                    }), s.anim("stop", ["translateX"]), s.anim({translateX: ["0%", 100 * -t + "%"]}, {
                        duration: this.slideAnimationDuration,
                        easing: h,
                        complete: function () {
                            this.el.removeClass("slide-transition-in"), this.setProp("animating", !1)
                        }.bind(this)
                    })), this.startTimer(function () {
                        o.animCSS({hwAcceleration: !1}), a.animCSS({hwAcceleration: !1}), this.el.removeClass("ontop")
                    }, this.slideAnimationDuration + 315)
                } else this.el.find("video").not(".video video").animCSS({translateX: null}, !0), this.startTimer(function () {
                    o.animCSS({hwAcceleration: !1}), a.animCSS({hwAcceleration: !1}), this.el.removeClass("slide-transition-in"), this.setProp("animating", !1)
                }, 700)
            }, animateOut: function (t, e) {
                this.setProp("active", !0), this.setProp("animating", !0);
                var i, n = this.el.find(".slide-part"), s = n.eq(0), o = n.eq(1);
                this.el.addClass("slide-transition-out"), n.length ? (i = s.widget(), i && i.handleDeactivation && i.handleDeactivation(), i = o.widget(), i && i.handleDeactivation && i.handleDeactivation(), "landscape" === this.getProp("orientation") ? "main" === e ? (s.addClass("slide-no-overflow"), s.anim("stop", ["translateX"]), s.anim({translateX: "-100%"}, {
                    duration: 750,
                    easing: "easeInOutQuint",
                    complete: function () {
                        s.removeClass("slide-no-overflow")
                    }
                }), o.anim("stop", ["translateX"]), o.anim({translateX: "200%"}, {
                    duration: 750,
                    easing: "easeInOutQuint",
                    complete: function () {
                        this.setProp("active", !1), this.setProp("animating", !1), s.animCSS({
                            translateX: "0%",
                            translateY: "-100%"
                        }), o.animCSS({
                            translateX: "90.9090%",
                            translateY: "-100%"
                        }), this.el.removeClass("slide-transition-out")
                    }.bind(this)
                })) : (s.addClass("slide-no-overflow"), s.anim("stop", ["translateY"]), s.anim({translateY: [100 * -t + "%", "0%"]}, {
                    duration: this.slideAnimationDuration + 300,
                    easing: "easeInOutQuint",
                    complete: function () {
                        s.removeClass("slide-no-overflow")
                    }
                }), o.anim("stop", ["translateY"]), o.anim({translateY: [100 * t + "%", "0%"]}, {
                    duration: this.slideAnimationDuration + 300,
                    easing: "easeInOutQuint",
                    complete: function () {
                        this.setProp("active", !1), this.setProp("animating", !1), this.el.removeClass("slide-transition-out")
                    }.bind(this)
                })) : (s.anim("stop", ["translateX"]), s.anim({translateX: [100 * -t + "%", "0%"]}, {
                    duration: this.slideAnimationDuration + 300,
                    easing: "easeInOutQuint"
                }), o.anim("stop", ["translateX"]), o.anim({translateX: [100 * t + "%", "0%"]}, {
                    duration: this.slideAnimationDuration + 300,
                    easing: "easeInOutQuint",
                    complete: function () {
                        this.setProp("active", !1), this.setProp("animating", !1), this.el.removeClass("slide-transition-out")
                    }.bind(this)
                }))) : this.startTimer(function () {
                    this.el.find("video").not(".video video").animCSS({translateX: "-3000px"}, !0), this.startTimer(function () {
                        this.setProp("active", !1), this.setProp("animating", !1), this.el.removeClass("slide-transition-out")
                    }, 1)
                }, 800)
            }
        })
    }, {"./base": 31}],
    40: [function (t, e) {
        var i = t("./base"), n = t("./../plugins/debounce"), s = t("./../plugins/cover");
        e.exports = i.extend({
            NAME: "slidepart",
            bgPositions: {normal: 0, active: 0, inactive: 0},
            bgSizeRatio: 1,
            uiState: null,
            uiStateHash: 0,
            init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), $.support.touch || (this.el.on("mousemove", n(this.handleMouseOver.bind(this), 16, "leading")), this.el.on("mouseleave", this.handleMouseOut.bind(this)));
                var i = this.getParentWidget().getProp("active");
                "landscape" === this.getProp("orientation") ? this.el.animProp({
                    translateY: i ? "0%" : this.el.prev().hasClass("slide-part") ? "-100%" : "100%",
                    translateX: this.el.prev().hasClass("slide-part") ? "90.9090%" : "0%"
                }) : this.el.animProp({
                    translateY: "0%",
                    translateX: i ? "0%" : this.el.prev().hasClass("slide-part") ? "-100%" : "100%"
                });
                var s = this.getChildWidget("more");
                s && (this.buttonMore = s, s.on($.support.clickEvent, this.handleMoreClick.bind(this))), $.support.touch && this.el.on($.support.clickEvent, this.handleContentToggle.bind(this)), this.whenInactive = $.Deferred().resolve().promise(), this.elFooter = this.el.find("footer"), this.elFooter.on($.support.clickEvent, this.handleFooterClick.bind(this)), this.bgContainers = this.getBackgroundContainer(), $.contentSize.on("resize", function () {
                    this.uiUpdate()
                }.bind(this)), this.bgVideo = this.el.find(".overlay-bottom video"), this.bgVideo.on("timeupdate", this.handleVideoProgress.bind(this))
            },
            getBackgroundContainer: function () {
                return this.el.find(".bg")
            },
            handleMoreClick: function (t) {
                var e;
                e = $(t.currentTarget).is("footer") ? $(t.currentTarget).find("a").attr("href") : $(t.currentTarget).attr("href"), this.getProp("active") ? e && "" != e && (document.location.href = document.location.origin + e) : (t.preventDefault(), t.stopPropagation(), this.getParentWidget().getProp("animating") || this.setProp("active", !0))
            },
            handleContentToggle: function (t) {
                if (t.isDefaultPrevented())return !1;
                var e = $(t.target).closest("a, .top");
                if (e.hasClass("allow-touch-on-active")) {
                    if (this.getProp("active"))return !0;
                    t.preventDefault(), t.stopPropagation()
                } else if (e.length)return !1;
                this.getParentWidget().getProp("animating") || this.setProp("active", !this.getProp("active"))
            },
            handlePropChange: function (t, e) {
                if ("active" === t) {
                    this.el.toggleClass(t, e), e && this.setProp("inactive", !1), e || this.setProp("active-part", !1), this.uiUpdate(this.getProp("animate"));
                    var i = this.getChildWidget("more");
                    i && i.setProp("active", e), i = this.getChildWidget("more-right"), i && i.setProp("active", !0)
                } else"inactive" === t ? (this.el.toggleClass(t, e), e && this.setProp("active", !1), e && this.setProp("active-part", !1), this.uiUpdate(this.getProp("animate"))) : "active-part" === t && this.uiUpdate(this.getProp("animate"))
            },
            handleDeactivation: function () {
            },
            getInitialState: function () {
                return $.extend(this._super(), {
                    animate: !0,
                    active: this.el.hasClass("active"),
                    inactive: this.el.hasClass("inactive"),
                    "active-part": !1
                })
            },
            handleVideoProgress: function () {
                var t, e = this.buttonMore, i = this.bgVideo.get(0);
                e && this.getProp("active") && (t = Math.round(i.currentTime / i.duration * 100), 0 == t ? (e.spring("stop"), e.springTween.setValue(0), e.setProp("progress", 0)) : e.spring(t))
            },
            handleFooterClick: function (t) {
                this.buttonMore && this.getProp("active") && this.handleMoreClick(t)
            },
            scrollNext: function () {
                return !1
            },
            scrollPrevious: function () {
                return !1
            },
            handleMouseOver: function () {
                this.getParentWidget().getProp("animating") || this.setProp("active", !0)
            },
            handleMouseOut: function () {
                this.setProp("active", !1)
            },
            uiUpdate: function (t) {
                var e = this.getUISizes();
                return this.applyUISizes(e, t)
            },
            getUIContentSizes: function (t) {
                var e, i, n = this.el.find(".content, .content-partial"), s = this.el.find(".collapsed, .collapsed-partial");
                return e = this.getElementSize(n, null, function (t) {
                    t.find(".slideshow-slide").slice(1).remove(), t.find(".collapsed, .collapsed-partial").addClass("hidden")
                })[1], i = this.getElementSize(s)[1], t.active ? [i, e] : [0, e]
            },
            getUISizes: function (t, e) {
                var i, n = !!e, o = $.extend({
                    id: this.getProp("id"),
                    active: this.getProp("active"),
                    inactive: this.getProp("inactive"),
                    orientation: this.getProp("orientation"),
                    "active-part": this.getProp("active-part")
                }, e), a = this.el.find(".content"), r = o.active, l = r ? !1 : o.inactive, h = o["active-part"], c = $.contentSize(), d = o.orientation, u = matchMedia("(max-width: 667px)").matches, p = matchMedia("(max-width: 1024px)").matches, f = "portrait" === d && matchMedia("(max-height: 767px)").matches, g = "right" === o.id, m = r && a.hasClass("valign-top-middle");
                if (i = [0 | r, 0 | l, h || ""].concat(c).join(","), this.uiStateHash === i)return t ? null : this.uiState;
                var v, y, b, x = {
                    active: r,
                    inactive: l,
                    active_part: h,
                    side: o.id,
                    orientation: d,
                    is_mobile: u,
                    is_vertical_mobile: f,
                    is_tablet: p,
                    is_right_side: g,
                    containerMaxWidth: 0,
                    containerWidth: 0,
                    containerHeight: 0,
                    containerOffset: 0,
                    contentHeight: 0,
                    contentOffset: 0,
                    contentSize: [0, 0],
                    collapsedHeight: 0,
                    footerOffset: 0,
                    topAreaHeight: 0,
                    backgroundSize: [0, 0],
                    backgroundPosition: [0, 0],
                    videoVisible: !1
                }, w = this.getUIContentSizes(x), C = 30;
                if (f ? (v = 25, y = 40) : u ? (v = 25, y = 40) : p ? (v = 42, y = 90) : (v = 42, y = 120), "portrait" === d ? (x.containerMaxWidth = c[0], x.containerWidth = c[0], f ? (r ? (x.containerOffset = g ? "-23.111%" : "0%", x.containerHeight = Math.ceil(.65 * c[1])) : l ? (x.containerOffset = g ? "42.2%" : "0%", x.containerHeight = Math.ceil(.35 * c[1])) : (x.containerOffset = "0%", x.containerHeight = Math.ceil(.5 * c[1])), x.containerMaxHeight = Math.ceil(.65 * c[1])) : (x.containerHeight = Math.ceil(.5 * c[1]), x.containerMaxHeight = x.containerHeight), x.topAreaHeight = x.containerHeight) : (x.containerMaxWidth = Math.ceil(.55 * c[0]), x.containerWidth = Math.ceil(c[0] * (r ? .55 : l ? .45 : .5)), x.containerHeight = c[1], x.containerMaxHeight = c[1], u && (x.containerMaxWidth = Math.ceil(.8 * c[0]), x.containerWidth = Math.ceil(c[0] * (r ? .8 : l ? .2 : .5)), x.containerHeight = c[1]), g && (x.containerOffset = u ? r ? "24.967%" : l ? "100%" : "62.4175%" : r ? "81.8181%" : l ? "100%" : "90.909%"), x.topAreaHeight = u || !m ? x.containerHeight : Math.ceil(x.containerHeight / 2)), x.contentHeight += w[0] + w[1], x.collapsedHeight = w[0], x.contentOffset = -x.contentHeight / 2, x.contentOffset -= C, x.contentOffset += (x.topAreaHeight - x.containerHeight) / 2, "portrait" !== d || g ? "landscape" === d && (u || m) && (x.contentOffset += v) : x.contentOffset += v, x.contentOffset = Math.round(x.contentOffset), r || (x.footerOffset = -x.containerHeight / 2 + y, x.footerOffset += x.contentOffset + x.contentHeight, x.footerOffset = Math.round(x.footerOffset)), b = s(x.containerMaxWidth, x.containerMaxHeight, this.bgSizeRatio), x.backgroundSize = [b.width, b.height], b = s.position(x.containerWidth, x.containerHeight, b.width, b.height), x.backgroundPosition = [b.left, 0], "landscape" === d && !u && m && (x.videoVisible = !0, $.support.device.os.ios7)) {
                    x.videoSize = [0, 0], x.videoPosition = [0, 0];
                    var S = this.bgVideo;
                    S.length && (b = s(x.containerMaxWidth, x.containerMaxHeight - x.topAreaHeight, parseInt(S.attr("width")) / parseInt(S.attr("height"))), x.videoSize = [b.width, b.height], x.videoPosition = [b.left, b.top])
                }
                return n || (this.uiStateHash = i, this.uiState = x), x
            },
            applyUISizes: function (t, e) {
                t && ("pending" !== this.whenInactive.state() && (this.whenInactive = $.Deferred()), this.applyUIFooterPosition(t, e), this.applyUIBackground(t, e), this.applyUIValign(t, e), this.applyUIContentSize(t, e), this.applyUIBackgroundVideoPlayback(t, e), this.applyUIFadeIn(t, e), this.applyUIFadeOut(t, e), this.applyUIOverlay(t, e), this.applyUISlideshow(t, e), this.applyUIMoreButton(t, e), this.applyUIContentHeight(t, e), this.whenInactiveTimer && this.whenInactiveTimer.cancel && (this.whenInactiveTimer.cancel(), this.whenInactiveTimer = null), t.active || (e ? this.whenInactiveTimer = this.startTimer(this.whenInactive.resolve.bind(this.whenInactive), 350) : this.whenInactive.resolve()))
            },
            applyUIFooterPosition: function (t, e) {
                var i = this.elFooter;
                i.length && (i.anim("stop"), i[e ? "anim" : "animCSS"]({translateY: t.footerOffset + "px"}, {
                    duration: 250,
                    easing: "easeInOutQuint"
                }))
            },
            applyUIBackground: function (t, e) {
                var i = this.bgContainers, n = this.bgVideo;
                i.length && (i.animProp({hwAcceleration: !0}), i.animCSS({backgroundSize: t.backgroundSize[0] + "px " + t.backgroundSize[1] + "px"}), i.anim("stop", ["translateX"]), i[e ? "anim" : "animCSS"]({
                    translateX: t.backgroundPosition[0] + "px",
                    translateY: t.backgroundPosition[1] + "px"
                }, {
                    duration: 350,
                    easing: "ease-in-out"
                })), n.length && $.support.device.os.ios7 && t.videoSize && n.animCSS({
                    width: t.videoSize[0] + "px",
                    height: t.videoSize[1] + "px",
                    translateX: t.videoPosition[0] + "px",
                    translateY: t.videoPosition[1] + "px"
                })
            },
            applyUIValign: function (t, e) {
                var i = this.el.find(".content.valign-middle, .content-partial.valign-middle");
                if (i.length) {
                    var n = 200;
                    t.active && (n = Math.round((Math.max(350, Math.min(t.contentHeight, 500)) - 350) / 150 * 150 + 200)), i.anim("stop"), i[e ? "anim" : "animCSS"]({translateY: t.contentOffset + "px"}, {
                        duration: n,
                        easing: "easeInOutQuint"
                    })
                }
            },
            applyUIContentSize: function (t, e) {
                var i = this.el;
                "landscape" === t.orientation ? (i.anim("stop", ["translateX"]), i[e ? "anim" : "animCSS"]({translateX: t.containerOffset}, {
                    duration: 550,
                    easing: "easeOutQuint"
                })) : t.is_vertical_mobile && (i.anim("stop", ["translateY"]), i[e ? "anim" : "animCSS"]({
                    translateY: t.containerOffset,
                    height: t.containerHeight + "px"
                }, {duration: 350, easing: "easeOutQuint"}))
            },
            applyUIBackgroundVideoPlayback: function (t) {
                var e = this.bgVideo;
                e.length && (t.videoVisible ? e.get(0).play() : e.get(0).pause())
            },
            applyUIFadeIn: function (t, e) {
                var i = this.el.find(".fade-in-on-active");
                i.length && (t.active && i.removeClass("hidden"), i.anim("stop", ["opacity"]), i[e ? "anim" : "animCSS"]({opacity: t.active ? 1 : 0}, {
                    duration: 350,
                    easing: "ease-in-out",
                    complete: function () {
                        t.active || i.addClass("hidden")
                    }
                }))
            },
            applyUIFadeOut: function (t, e) {
                var i = this.el.find(".fade-out-on-active");
                i.length && (t.active || i.removeClass("hidden"), i.anim("stop", ["opacity"]), i[e ? "anim" : "animCSS"]({opacity: t.active ? 0 : 1}, {
                    duration: 350,
                    easing: "ease-in-out",
                    complete: function () {
                        t.active && i.addClass("hidden")
                    }
                }))
            },
            applyUIOverlay: function (t, e) {
                var i = this.el.find(".overlay");
                i.length && (i.anim("stop", ["opacity"]), i[e ? "anim" : "animCSS"]({opacity: t.active ? 1 : 0}, {
                    duration: 250,
                    easing: "ease-in-out-quart"
                }))
            },
            applyUISlideshow: function (t) {
                var e = this.getChildWidget("slideshow");
                !t.active && e && e.setProp("slide", 0)
            },
            applyUIMoreButton: function (t) {
                var e = this.getChildWidget("more");
                e && e.setProp("icon", t.active ? "plus" : "arrow")
            },
            applyUIContentHeight: function (t, e) {
                var i = this.el.find(".collapsed");
                if (i.length)if (t.active) {
                    var n = Math.round((Math.max(350, Math.min(t.contentHeight, 500)) - 350) / 150 * 250 + 300);
                    i.anim("stop"), i[e ? "anim" : "animCSS"]({
                        height: t.collapsedHeight + "px",
                        opacity: 1,
                        translateY: ["0", t.collapsedHeight + "px"]
                    }, {duration: n, easing: "easeInQuint"})
                } else i.anim("stop"), i[e ? "anim" : "animCSS"]({height: "0px", opacity: 0}, {
                    duration: 250,
                    easing: "ease-in-out"
                })
            }
        })
    }, {"./../plugins/cover": 13, "./../plugins/debounce": 14, "./base": 31}],
    41: [function (t, e) {
        var i = t("./slidepart"), n = (t("./../plugins/debounce"), t("./../plugins/cover"));
        e.exports = i.extend({
            NAME: "slidepartthird",
            bgSizeRatio: 426 / 620,
            slideParts: [],
            connected: [],
            init: function (t, e) {
                switch (this._super(t, e), this.initUISlideSizes(), this.setProp("inactive", !0), this.connected = [], this.slideParts = [], this.getProp("id")) {
                    case"left":
                        this.connected.push(this.getParentWidget().getChildWidget("center")), this.connected.push(this.getParentWidget().getChildWidget("right")), this.slideParts.push(this), this.slideParts.push(this.getParentWidget().getChildWidget("center")), this.slideParts.push(this.getParentWidget().getChildWidget("right"));
                        break;
                    case"center":
                        this.connected.push(this.getParentWidget().getChildWidget("left")), this.connected.push(this.getParentWidget().getChildWidget("right")), this.slideParts.push(this.getParentWidget().getChildWidget("left")), this.slideParts.push(this), this.slideParts.push(this.getParentWidget().getChildWidget("right"));
                        break;
                    case"right":
                        this.connected.push(this.getParentWidget().getChildWidget("left")), this.connected.push(this.getParentWidget().getChildWidget("center")), this.slideParts.push(this.getParentWidget().getChildWidget("left")), this.slideParts.push(this.getParentWidget().getChildWidget("center")), this.slideParts.push(this)
                }
                $.support.touch && this.applyUISlideSizes(!1)
            },
            getInitialState: function () {
                return $.extend(this._super(), {collapsed: !1})
            },
            handlePropChange: function (t, e) {
                if ("active" === t) {
                    if (this.el.toggleClass(t, e), e && this.setProp("inactive", !1), e || this.setProp("active-part", !1), e)this.connected.forEach(function (t) {
                        t.setProp("collapsed", !0)
                    }); else {
                        var i = !1;
                        this.connected.forEach(function (t) {
                            t.getProp("active") && (i = !0)
                        }), this.connected.forEach(function (t) {
                            t.setProp("collapsed", i)
                        }), i || this.setProp("collapsed", !1)
                    }
                    this.uiUpdate(this.getProp("animate"));
                    var n = this.getChildWidget("more");
                    n && n.setProp("active", e), n = this.getChildWidget("more-right"), n && n.setProp("active", !0)
                } else"inactive" === t ? (this.el.toggleClass(t, e), e && this.setProp("active", !1), e && this.setProp("active-part", !1), this.uiUpdate(this.getProp("animate"))) : "active-part" === t && this.uiUpdate(this.getProp("animate"))
            },
            handleContentToggle: function (t) {
                this._super(t) !== !1 && this.uiToggleContent()
            },
            handleMoreClick: function (t) {
                t.preventDefault();
                var e = $(t.currentTarget).attr("href");
                this.getProp("active") ? e && "" != e && (document.location.href = document.location.origin + e) : this.getParentWidget().getProp("animating") || (this.setProp("active", !0), this.uiToggleContent())
            },
            getUIContentSizes: function (t) {
                var e, i, n = this.el.find(".content, .content-partial"), s = this.el.find(".collapsed, .collapsed-partial"), o = this.getProp("collapsed") ? "collapsed" : "";
                return e = this.getElementSize(n, o, function (t) {
                    t.find(".slideshow-slide").slice(1).remove(), t.find(".collapsed, .collapsed-partial").addClass("hidden")
                })[1], i = this.getElementSize(s)[1], t.active ? [i, e] : [0, e]
            },
            applyUIContentSize: function () {
            },
            initUISlideSizes: function () {
                var t = this.el.index();
                "landscape" === this.getProp("orientation") ? this.el.animProp({
                    translateY: "0%",
                    translateX: 98.038 * t + "%",
                    width: "34%"
                }) : this.el.animProp({translateY: 98.038 * t + "%", translateX: "0%", height: "34%"})
            },
            applyUISlideSizes: function (t) {
                var e, i, n, s, o = this.getProp("active"), a = this.getProp("id"), r = this.getProp("orientation"), l = [], h = {};
                switch (a) {
                    case"left":
                        "landscape" == r ? (e = 33, i = 50, n = 66, s = 75) : (e = 33, i = 60, n = 66, s = 80);
                        break;
                    case"center":
                        "landscape" == r ? (e = 33, i = 25, n = 66, s = 75) : (e = 33, i = 20, n = 66, s = 80);
                        break;
                    case"right":
                        "landscape" == r ? (e = 33, i = 25, n = 66, s = 50) : (e = 33, i = 20, n = 66, s = 40)
                }
                l = "landscape" == r ? ["width", "left"] : ["height", "top"];
                var c = 350;
                h = {}, h[l[0]] = "landscape" == r ? o ? "51%" : "34%" : o ? "61%" : "34%", this.el[t ? "anim" : "animCSS"](h, c, "linear"), h = {}, h[l[0]] = "landscape" == r ? o ? "26%" : "34%" : o ? "21%" : "34%", this.connected.forEach(function (e) {
                    e.el[t ? "anim" : "animCSS"](h, c, "linear")
                }), this.slideParts.forEach(function (a) {
                    switch (a.getProp("id")) {
                        case"center":
                            h = {}, h[l[1]] = (o ? i : e) + "%", a.el[t ? "anim" : "animCSS"](h, c, "linear");
                            break;
                        case"right":
                            h = {}, h[l[1]] = (o ? s : n) + "%", a.el[t ? "anim" : "animCSS"](h, c, "linear")
                    }
                })
            },
            getUISizes: function (t) {
                var e, i = this.el.find(".content"), s = this.getProp("active"), o = s ? !1 : this.getProp("inactive"), a = this.getProp("collapsed"), r = this.getProp("active-part"), l = $.contentSize(), h = this.getProp("orientation"), c = matchMedia("(max-width: 667px)").matches, d = matchMedia("(max-width: 1024px)").matches, u = "portrait" === h && matchMedia("(max-height: 767px)").matches, p = "right" === this.getProp("id"), f = s && i.hasClass("valign-top-middle");
                if (e = [0 | s, 0 | o, r || "", 0 | a].concat(l).join(","), this.uiStateHash === e)return t ? null : this.uiState;
                var g, m, v, y = {
                    active: s,
                    inactive: o,
                    active_part: r,
                    side: this.getProp("id"),
                    orientation: h,
                    is_mobile: c,
                    is_vertical_mobile: u,
                    is_tablet: d,
                    containerMaxWidth: 0,
                    containerWidth: 0,
                    containerHeight: 0,
                    containerOffset: 98.038 * this.el.index(),
                    contentHeight: 0,
                    contentOffset: 0,
                    contentSize: [0, 0],
                    collapsedHeight: 0,
                    footerOffset: 0,
                    topAreaHeight: 0,
                    backgroundSize: [0, 0],
                    backgroundPosition: [0, 0],
                    videoVisible: !1
                }, b = this.getUIContentSizes(y), x = 30;
                if (u ? (g = 25, m = 40) : c ? (g = 25, m = 40) : d ? (g = 42, m = 90) : (g = 42, m = 120), "portrait" === h ? (y.containerMaxWidth = l[0], y.containerWidth = l[0], u ? (s ? (y.containerOffset = p ? "-23.111%" : "0%", y.containerHeight = Math.ceil(.65 * l[1])) : o ? (y.containerOffset = p ? "42.2%" : "0%", y.containerHeight = Math.ceil(.35 * l[1])) : (y.containerOffset = "0%", y.containerHeight = Math.ceil(.5 * l[1])), y.containerMaxHeight = Math.ceil(.65 * l[1])) : (y.containerHeight = Math.ceil(.5 * l[1]), y.containerMaxHeight = y.containerHeight), y.topAreaHeight = y.containerHeight) : (y.containerMaxWidth = Math.ceil(.34 * l[0]), y.containerWidth = Math.ceil(.34 * l[0]), y.containerHeight = l[1], y.containerMaxHeight = l[1], c && (y.containerMaxWidth = Math.ceil(.8 * l[0]), y.containerWidth = Math.ceil(l[0] * (s ? .8 : o ? .2 : .5)), y.containerHeight = l[1]), y.topAreaHeight = y.containerHeight), y.contentHeight += b[0] + b[1], y.collapsedHeight = b[0], y.contentOffset = -y.contentHeight / 2, y.contentOffset -= x, y.contentOffset += (y.topAreaHeight - y.containerHeight) / 2, "portrait" === h ? y.contentOffset += g : "landscape" === h && (c || f) && (y.contentOffset += g), y.contentOffset = Math.round(y.contentOffset), s || (y.footerOffset = -y.containerHeight / 2 + m, y.footerOffset += y.contentOffset + y.contentHeight, y.footerOffset = Math.round(y.footerOffset)), v = n(y.containerMaxWidth, y.containerMaxHeight, this.bgSizeRatio), y.backgroundSize = [v.width, v.height], v = n.position(y.containerWidth, y.containerHeight, v.width, v.height), y.backgroundPosition = [v.left, 0], "landscape" === h && !c && f && (y.videoVisible = !0, $.support.device.os.ios7)) {
                    y.videoSize = [0, 0], y.videoPosition = [0, 0];
                    var w = this.bgVideo;
                    w.length && (v = n(y.containerMaxWidth, y.containerMaxHeight - y.topAreaHeight, parseInt(w.attr("width")) / parseInt(w.attr("height"))), y.videoSize = [v.width, v.height], y.videoPosition = [v.left, v.top])
                }
                return this.uiStateHash = e, this.uiState = y, y
            },
            applyUIBackground: function (t, e) {
                this._super(t, e);
                var i = this.el.find(".overlay"), n = this.getProp("orientation");
                i.length && (i.animProp({hwAcceleration: !0}), $.support.touch && "landscape" == n ? i.animCSS({
                    backgroundSize: "100%",
                    width: "100%",
                    height: t.backgroundSize[1] + "px"
                }) : (i.animCSS({
                    backgroundSize: t.backgroundSize[0] + "px " + t.backgroundSize[1] + "px",
                    width: t.backgroundSize[0] + "px",
                    height: t.backgroundSize[1] + "px"
                }), i.anim("stop", ["translateX"]), i[e ? "anim" : "animCSS"]({translateX: t.backgroundPosition[0] + "px"}, {
                    duration: 350,
                    transition: "ease-in-out"
                })))
            },
            uiToggleContent: function () {
                this.applyUISlideSizes(!0), this.connected.forEach(function (t) {
                    t.setProp("inactive", !0)
                })
            },
            uiUpdate: function (t, e) {
                this._super(t), ("undefined" == typeof e || e) && this.startTimer(function () {
                    this.connected.forEach(function (e) {
                        e.uiUpdate(t, !1)
                    }), this.getProp("active") && $.support.touch && this.uiUpdateContentSize(t)
                }.bind(this), 400)
            },
            uiUpdateContentSize: function (t) {
                var e = this.uiState, i = this.getProp("active"), n = this.el.find(".content"), s = this.getUIContentSizes({active: !1}), o = this.getProp("orientation"), a = 30, r = 0, l = matchMedia("(max-width: 667px)").matches, h = matchMedia("(max-width: 1024px)").matches, c = "portrait" === o && matchMedia("(max-height: 767px)").matches, d = i && n.hasClass("valign-top-middle");
                s[0] = this.getElementSize(this.el.find(".collapsed, .collapsed-partial"), "touchActive")[1], r = c ? 25 : l ? 25 : h ? 42 : 42, e.contentHeight = s[0] + s[1], e.collapsedHeight = s[0], e.contentOffset = -e.contentHeight / 2, e.contentOffset -= a, e.contentOffset += (e.topAreaHeight - e.containerHeight) / 2, "portrait" === o ? e.contentOffset += r : "landscape" === o && (l || d) && (e.contentOffset += r), e.contentOffset = Math.round(e.contentOffset), this.applyUIValign(e, t), this.applyUIContentHeight(e, t)
            }
        })
    }, {"./../plugins/cover": 13, "./../plugins/debounce": 14, "./slidepart": 40}],
    42: [function (t, e) {
        {
            var i = t("./../../components/widgets/section");
            t("./../../components/plugins/debounce")
        }
        e.exports = i.extend({
            startCount: 3, endCount: 0, init: function (t, e) {
                this._super(t, e), this.bgParts = this.el.find(".bg-part"), this.animationBgParts = this.el.find(".slide-unbalance").find(".bg-part"), this.counter = this.el.find(".counter"), this.balanceSlide = this.el.find(".slide-balance"), this.unbalanceSlide = this.el.find(".slide-unbalance"), this.uiAnimate(), this.count()
            }, uiAnimate: function () {
                var t;
                this.animationBgParts.each(function (e, i) {
                    t = {translateY: ["0%", e % 2 === 0 ? "-4%" : "4%"]}, $(i).find("img").anim(t, {duration: 4e3})
                }), this.counter.find("span").anim({translateY: ["-300%", "0%"]}, {duration: 4e3, easing: "linear"})
            }, count: function () {
                var t = 0;
                this.countID = setInterval(function () {
                    this.countTick(t), t++
                }.bind(this), 1e3)
            }, countTick: function (t) {
                var e = this.startCount - t;
                e == this.endCount && (clearInterval(this.countID), this.onCountEnd())
            }, onCountEnd: function () {
                var t = this;
                this.unbalanceSlide.fadeOut(), this.balanceSlide.fadeIn(function () {
                    setTimeout(t.redirect.bind(t), 1e3)
                })
            }, redirect: function () {
                document.location = "/"
            }, uiUpdateBackgroundSize: function (t, e) {
                for (var i, n, s, o, a, r = t.find(e || "img, video"), l = null, h = 0, c = r.length, d = $.contentSize(); c > h; h++) {
                    i = r.eq(h), l = i.closest("[data-bg-container]"), l.size() && l.is(":visible") && (s = l.width(), o = l.height()), s = s || d[0], o = o || d[1], n = i.data("ratio"), n || (n = parseInt(i.attr("width") || i.width()) / parseInt(i.attr("height") || i.height()), i.data("ratio", n)), a = cover(s, o, n);
                    var u = i.closest(".bg");
                    0 === u.index() ? u.animCSS({left: $.contentSize()[0] / 2 - a.width + "px"}, !0) : 3 === u.index() && u.animCSS({left: $.contentSize()[0] / 2 + a.width + "px"}, !0), u.animCSS({width: a.width + 1 + "px"}, !0), i.animCSS({
                        width: a.width + "px",
                        height: a.height + "px",
                        left: "0",
                        top: a.top + "px"
                    }, !0)
                }
            }
        })
    }, {"./../../components/plugins/debounce": 14, "./../../components/widgets/section": 38}],
    43: [function (t, e) {
        var i = t("./../../components/widgets/section"), n = t("./../../components/plugins/debounce");
        t("./../../components/plugins/jquery.mousestop.js"), e.exports = i.extend({
            BIG_LETTERS: {
                l: {
                    width: 517,
                    height: 591,
                    ratio: 591 / 517,
                    globalWidthRatio: 1
                },
                e: {width: 462, height: 591, ratio: 591 / 462, globalWidthRatio: 1},
                v: {width: 624, height: 591, ratio: 591 / 624, globalWidthRatio: 1}
            },
            SMALL_LETTERS: {
                l: {width: 180, height: 287, ratio: 287 / 180, globalWidthRatio: 1},
                e: {width: 189, height: 287, ratio: 287 / 189, globalWidthRatio: 1},
                v: {width: 272, height: 287, ratio: 287 / 272, globalWidthRatio: 1}
            },
            lastMousePosition: {x: 0, y: 0},
            prevActiveColumn: null,
            init: function (t, e) {
                this._super(t, e), this.grid = this.el.find(".grid"), this.columns = this.grid.find(".letter-col"), this.letters = this.columns.find(".letter"), this.smallLetters = this.columns.find(".small-letter"), this.slider = this.el.find(".slider"), this.slides = this.slider.find(".slide"), this.loaded = !1;
                var i = this.el.find("#v1-big").find(".letter").find(".letter-img");
                i.on("load", function () {
                    $.contentSize.on("resize", this.uiUpdateLetterSize.bind(this)), this.el.on("mousemove", n(this.handleMouseMove.bind(this), 32, "leading")), this.uiInitLetterSize(), this.loaded = !0
                }.bind(this)), setTimeout(function () {
                    this.loaded || (i.load(), this.loaded = !0)
                }.bind(this), 50), this.el.on($.support.clickEvent, this.openOverlay.bind(this))
            },
            openOverlay: function () {
                var t = Widgets.getById("slide-overlay");
                t.setProp("active", !0), t.animateIn(1)
            },
            handlePropChange: function (t, e) {
                "slide" === t && this.uiChangeSlide(e)
            },
            getInitialState: function () {
                return $.extend(this._super(), {scene: 0})
            },
            handleMouseMove: function (t) {
                this.lastMousePosition.x = t.pageX, this.lastMousePosition.y = t.pageY;
                var e = t.pageX / this.grid.width() * 100, i = (t.pageY - this.grid.offset().top) / this.grid.height() * 100, n = Math.floor(e / 20), s = this.columns.eq(n);
                this.prevActiveColumn != n && (this.uiChangeColumn(s), this.prevActiveColumn = n);
                var o = 50;
                o = i > 50 ? 50 + (i - 50) / 2 : 50 - (50 - i) / 2;
                var a = $(".left-letter-col"), r = $(".right-letter-col");
                s.hasClass("left-letter-col") ? (a.find(".letter").animCSS({top: i + "%"}), a.find(".small-letter").animCSS({top: o + "%"}), r.find(".letter").animCSS({top: 100 - i + "%"}), r.find(".small-letter").animCSS({top: 100 - o + "%"})) : s.hasClass("right-letter-col") ? (r.find(".letter").animCSS({top: i + "%"}), r.find(".small-letter").animCSS({top: o + "%"}), a.find(".letter").animCSS({top: 100 - i + "%"}), a.find(".small-letter").animCSS({top: 100 - o + "%"})) : s.hasClass("center-letter-col") && (i > 50 ? ($(".letter[data-letter-position=top]").animCSS({top: 100 - i + "%"}), $(".letter[data-letter-position=bottom]").animCSS({top: i + "%"}), $(".small-letter[data-letter-position=top]").animCSS({top: 100 - i / 2 + "%"}), $(".small-letter[data-letter-position=bottom]").animCSS({top: i / 2 + "%"})) : ($(".letter[data-letter-position=top]").animCSS({top: i + "%"}), $(".letter[data-letter-position=bottom]").animCSS({top: 100 - i + "%"}), $(".small-letter[data-letter-position=top]").animCSS({top: 50 + i / 2 + "%"}), $(".small-letter[data-letter-position=bottom]").animCSS({top: (100 - i) / 2 + "%"}))), e >= 40 && 60 > e && i >= 40 && 60 > i ? ($(".letter[data-letter-position=top], .letter[data-letter-position=bottom]").hide(), $(".letter[data-letter-position=center]").show(), this.letters.animCSS({top: "50%"}), this.columns.addClass("balanced")) : ($(".letter[data-letter-position=top], .letter[data-letter-position=bottom]").show(), $(".letter[data-letter-position=center]").hide(), this.columns.removeClass("balanced"));
                var l = this.slides.eq(Math.floor(i / 20));
                this.setProp("slide", l)
            },
            uiChangeSlide: function (t) {
                this.slides.removeClass("active"), t.addClass("active")
            },
            uiChangeColumn: function (t) {
                var e = (this.grid.find(".letter-col").filter(".active"), t.add($(t.data("reverse-column"))));
                this.columns.removeClass("active"), e.addClass("active")
            },
            uiUpdateLetterSize: function () {
                var t = this;
                this.letters.each(function () {
                    var e = t.BIG_LETTERS[$(this).data("letter")], i = Math.round($(".letter-col").width() * e.globalWidthRatio), n = Math.round(i * e.ratio), s = t.SMALL_LETTERS[$(this).data("letter")], o = Math.round(.55 * n), a = Math.round(o / s.ratio);
                    t.el.find('.small-letter[data-letter="' + $(this).data("letter") + '"]').animCSS({
                        height: o + "px",
                        width: a + "px"
                    }).find(".letter-img").animCSS({height: o + "px"}), $(this).animCSS({
                        height: n + "px",
                        width: i + "px",
                        left: "50%",
                        marginLeft: -(i / 2) + "px"
                    }).find(".letter-img").animCSS({height: n + "px"})
                })
            },
            uiInitLetterSize: function () {
                var t = this, e = this.el.find("#v1-big").find(".letter").find(".letter-img").height(), i = Math.round(.55 * e);
                this.letters.each(function () {
                    var n = t.BIG_LETTERS[$(this).data("letter")], s = t.SMALL_LETTERS[$(this).data("letter")], o = Math.round(e / n.ratio), a = Math.round(i / s.ratio);
                    t.el.find('.small-letter[data-letter="' + $(this).data("letter") + '"]').animCSS({
                        height: i + "px",
                        width: a + "px"
                    }).find(".letter-img").animCSS({height: i + "px"}), $(this).animCSS({
                        height: e + "px",
                        width: o + "px",
                        left: "50%",
                        marginLeft: -(o / 2) + "px"
                    }).find(".letter-img").animCSS({height: e + "px"}), t.BIG_LETTERS[$(this).data("letter")].globalWidthRatio = o / $(".letter-col").width()
                })
            }
        })
    }, {
        "./../../components/plugins/debounce": 14,
        "./../../components/plugins/jquery.mousestop.js": 18,
        "./../../components/widgets/section": 38
    }],
    44: [function (t, e) {
        var i = t("./../../components/widgets/slidepart");
        e.exports = i.extend({
            NAME: "slidepart", dragging: !1, init: function (t, e) {
                this._super(t, e);
                var i = this.getChildWidget("overlay-toggle");
                if (i && i.on($.support.clickEvent, this.closeOverlay.bind(this)), $.support.touch) {
                    this.getParentWidget().setProp("active", !0), this.uiUpdate(!1), this.el.animProp({
                        translateY: "0%",
                        translateX: "0%"
                    }, !0);
                    var n;
                    this.el.on("touchstart", function (t) {
                        n = t.originalEvent.touches[0].clientY, this.dragging = !1
                    }.bind(this)), this.el.on("touchmove", function (t) {
                        if (this.dragging = !0, this.getProp("active")) {
                            var e, i = t.originalEvent.changedTouches[0].clientY;
                            n > i + 5 ? e = "down" : i - 5 > n && (e = "up");
                            var s = this.el.find(".content"), o = this.el.innerHeight(), a = s.get(0).scrollHeight, r = s.scrollTop(), l = !1;
                            a > o && (l = !0), r >= a - o && "down" == e && (t.preventDefault(), l = !1, s.scrollTop(r - 1)), 0 >= r && "up" == e && (t.preventDefault(), l = !1, s.scrollTop(1)), l && t.stopPropagation()
                        }
                    }.bind(this))
                }
            }, handleContentToggle: function (t) {
                this.dragging || this._super(t)
            }, handlePropChange: function (t, e, i) {
                this._super(t, e, i), "orientation" === t && document.location.reload()
            }, closeOverlay: function () {
                this.getParentWidget().animateOut(-1)
            }, getUISizes: function (t, e) {
                var i, n = !!e, s = $.extend({
                    id: this.getProp("id"),
                    active: this.getProp("active"),
                    inactive: this.getProp("inactive"),
                    orientation: this.getProp("orientation"),
                    "active-part": this.getProp("active-part")
                }, e), o = this.el.find(".content"), a = s.active, r = a ? !1 : s.inactive, l = s["active-part"], h = $.contentSize(), c = s.orientation, d = matchMedia("(max-width: 667px)").matches, u = matchMedia("(max-width: 1024px)").matches, p = "portrait" === c && matchMedia("(max-height: 767px)").matches, f = "right" === s.id, g = a && o.hasClass("valign-top-middle");
                if (i = [0 | a, 0 | r, l || ""].concat(h).join(","), this.uiStateHash === i)return t ? null : this.uiState;
                var m, v, y = {
                    active: a,
                    inactive: r,
                    active_part: l,
                    side: s.id,
                    orientation: c,
                    is_mobile: d,
                    is_vertical_mobile: p,
                    is_tablet: u,
                    containerMaxWidth: 0,
                    containerWidth: 0,
                    containerHeight: 0,
                    containerOffset: 0,
                    contentHeight: 0,
                    contentOffset: 0,
                    contentSize: [0, 0],
                    collapsedHeight: 0,
                    footerOffset: 0,
                    topAreaHeight: 0,
                    backgroundSize: [0, 0],
                    backgroundPosition: [0, 0],
                    videoVisible: !1
                }, b = this.getUIContentSizes(y);
                if (m = p ? 25 : d ? 25 : u ? 42 : 42, "portrait" === c ? (y.containerMaxWidth = h[0], y.containerWidth = h[0], p ? (a ? (y.containerOffset = f ? "-23.111%" : "0%", y.containerHeight = Math.ceil(.65 * h[1])) : r ? (y.containerOffset = f ? "42.2%" : "0%", y.containerHeight = Math.ceil(.35 * h[1])) : (y.containerOffset = 0, y.containerHeight = Math.ceil(.5 * h[1])), y.containerMaxHeight = Math.ceil(.65 * h[1])) : (y.containerHeight = Math.ceil(.5 * h[1]), y.containerMaxHeight = y.containerHeight), y.topAreaHeight = y.containerHeight) : (y.containerMaxWidth = Math.ceil(.55 * h[0]), y.containerWidth = Math.ceil(h[0] * (a ? .55 : r ? .45 : .5)), y.containerHeight = h[1], y.containerMaxHeight = h[1], d && (y.containerMaxWidth = Math.ceil(.8 * h[0]), y.containerWidth = Math.ceil(h[0] * (a ? .8 : r ? .2 : .5)), y.containerHeight = h[1]), f && (y.containerOffset = d ? a ? "97.9090%" : r ? "97.9090%" : "97.9090%" : a ? "81.8181%" : r ? "100%" : "90.909%"), y.topAreaHeight = d || !g ? y.containerHeight : Math.ceil(y.containerHeight / 2)), y.contentHeight += b[0] + b[1], y.collapsedHeight = b[0], y.contentOffset = -y.contentHeight / 2, y.contentOffset += (y.topAreaHeight - y.containerHeight) / 2, "portrait" !== c || f ? "landscape" === c && (d || g) && (y.contentOffset += m) : y.contentOffset += m, y.contentOffset = d ? 0 : Math.round(y.contentOffset), a || (y.footerOffset = -y.containerHeight / 2, y.footerOffset += y.contentOffset + y.contentHeight, y.footerOffset = Math.round(y.footerOffset)), v = cover(y.containerMaxWidth, y.containerMaxHeight, this.bgSizeRatio), y.backgroundSize = [v.width, v.height], v = cover.position(y.containerWidth, y.containerHeight, v.width, v.height), y.backgroundPosition = [v.left, 0], "landscape" === c && !d && g && (y.videoVisible = !0, $.support.device.os.ios7)) {
                    y.videoSize = [0, 0], y.videoPosition = [0, 0];
                    var x = this.bgVideo;
                    x.length && (v = cover(y.containerMaxWidth, y.containerMaxHeight - y.topAreaHeight, parseInt(x.attr("width")) / parseInt(x.attr("height"))), y.videoSize = [v.width, v.height], y.videoPosition = [v.left, v.top])
                }
                return n || (this.uiStateHash = i, this.uiState = y), y
            }, applyUIValign: function (t, e) {
                if (this.uiState.is_mobile) {
                    var i = this.el.find(".content.valign-middle, .content-partial.valign-middle");
                    if (!i.length)return;
                    var n = 200;
                    t.active && (n = Math.round((Math.max(350, Math.min(t.contentHeight, 500)) - 350) / 150 * 150 + 200)), i.animCSS({position: "absolute"}), i.anim("stop"), i[e ? "anim" : "animCSS"]({translateY: t.contentOffset + "px"}, {
                        duration: n,
                        complete: function () {
                            t.active && i.animCSS({position: "static"})
                        }
                    })
                } else this._super(t, e)
            }, applyUIContentHeight: function (t, e) {
                if (this.uiState.is_mobile) {
                    var i = this.el.find(".collapsed");
                    if (!i.length)return;
                    if (t.active) {
                        var n = Math.round((Math.max(350, Math.min(t.contentHeight, 500)) - 350) / 150 * 250 + 300);
                        i.anim("stop"), i[e ? "anim" : "animCSS"]({height: t.collapsedHeight + "px"}, {duration: n}), i[e ? "anim" : "animCSS"]({opacity: 1}, {
                            duration: 350,
                            easing: "ease-in-out"
                        })
                    } else i.anim("stop"), i[e ? "anim" : "animCSS"]({height: "0px", opacity: 0}, {
                        duration: 250,
                        easing: "ease-in-out"
                    })
                } else this._super(t, e)
            }
        })
    }, {"./../../components/widgets/slidepart": 40}],
    45: [function (t, e) {
        var i = t("./../../components/widgets/button");
        e.exports = i.extend({
            NAME: "button", init: function (t, e) {
                this._super(t, e), $.support.touch || this.el.hover(this.handleMouseOver.bind(this), this.handleMouseOut.bind(this))
            }, handleMouseOver: function () {
                this.getProp("disabled") || this.setProp("hover", !0)
            }, handleMouseOut: function () {
                this.setProp("hover", !1)
            }, getInitialState: function () {
                var t = this._super();
                return $.extend(t, {hover: !1, iconNormal: t.icon, iconHover: ""})
            }, handlePropChange: function (t, e, i) {
                this._super(t, e, i), ("hover" === t || "iconNormal" === t || "iconHover" === t) && this.uiTransitionIcon()
            }, uiTransitionIcon: function () {
                var t = this.getProp("iconNormal"), e = this.getProp("iconHover"), i = this.getProp("hover");
                i && e ? this.setProp("icon", e) : this.setProp("icon", t || "")
            }
        })
    }, {"./../../components/widgets/button": 33}],
    46: [function (t, e) {
        var i, n = t("./../../components/widgets/slidepart"), s = (t("./../../components/plugins/debounce"), t("./../../components/plugins/cover"));
        e.exports = i = n.extend({
            NAME: "slidepart", bgSizeRatio: 1, data: [], dataIndexed: {}, init: function (t, e) {
                this._super(t, e), this.uiUpdate(), $.support.touch && "portrait" == this.getProp("orientation") ? (this.uiUpdateMobileContentSize(!1), "left" === this.getProp("id") && (this.scrollable = this.getChildWidget("scrollable"), this.initMobilePortraitGalleries(), this.collectData(), this.el.find(".slide-part-eight").on($.support.clickEvent, this.handleItemClick.bind(this)))) : (this.el.find(".slide-part-eight").on($.support.clickEvent, this.handleItemClick.bind(this)), this.collectData(), this.scrollable = this.getChildWidget("scrollable"), this.scrollable.elContent.on("scroll", this.handleListScroll.bind(this)), "left" === this.getProp("id") && this.handleListScroll());
                var i = document.location.hash;
                i && this.getIdFromHash(i)
            }, handleContentToggle: function () {
            }, initMobilePortraitGalleries: function () {
                var t = this.getParentWidget().getChildWidget("right"), e = this;
                t.el.find(".slide-part-eight").each(function () {
                    e.scrollable.elContent.append($(this))
                }), this.scrollable.updateUI()
            }, getBackgroundContainer: function () {
                return this.el.find(".slide-part-eight .bg")
            }, handlePropChange: function (t, e, i) {
                if (this._super(t, e, i), "overlay" === t) {
                    var n = "right" === this.getProp("id"), s = matchMedia("(max-width: 667px)").matches, o = matchMedia("(max-width: 1024px)").matches, a = this.getChildWidget("gallery"), r = this.getChildWidget("content"), l = this.getParentWidget().getChildWidget(n ? "left" : "right");
                    l.setProp("overlay", e), a && a.setProp("active", e), r && r.setProp("active", e), e ? (this.setProp("active", !1), this.setProp("inactive", !1)) : (s || o || (this.setProp("active", !n), this.setProp("inactive", n)), this.uiUpdateMobileContentSize(!0))
                }
            }, getInitialState: function () {
                return $.extend(this._super(), {overlay: !1})
            }, handleItemClick: function (t) {
                if (!this.scrollable.dragging) {
                    var e = $(t.target).closest(".slide-part-eight").data("id"), i = this.getItem(e);
                    this.openSection(e, i)
                }
            }, getIdFromHash: function (t) {
                t = t.replace("#", "");
                var e, i, n = this.el.find('[data-icon-name="' + t + '"]');
                n.size() && n.hasClass("slide-part-eight") && (e = n.data("id"), i = this.getItem(e), this.openSection(e, i))
            }, openSection: function (t, e) {
                var i = this.getParentWidget().getChildWidget("gallery"), n = this.getParentWidget().getChildWidget("content");
                i && i.setProp("theme", e.theme), n && n.setProp("theme", e.theme), this.setProp("overlay", t)
            }, handleListScroll: function () {
                if (!this.freezeScroll) {
                    this.freezeScroll = !0;
                    var t, e = this.scrollable, i = e.getScrollPos(), n = e.getScrollMaxPos(), s = "right" === this.getProp("id"), o = this.getParentWidget().getChildWidget(s ? "left" : "right").getChildWidget("scrollable");
                    o && (t = i / n * o.getScrollMaxPos(), o.setScrollPos(o.getScrollMaxPos() - t)), this.freezeScroll = !1
                }
            }, scrollNext: function () {
                var t, e = this.getProp("overlay");
                return e && !this.isAnyPartAnimating() && (t = this.dataIndexed[e], t && !t.isLast) ? (this.setProp("overlay", this.data[t.index + 1].id), !1) : !0
            }, scrollPrevious: function () {
                var t, e = this.getProp("overlay");
                return e && !this.isAnyPartAnimating() && (t = this.dataIndexed[e], t && !t.isFirst) ? (this.setProp("overlay", this.data[t.index - 1].id), !0) : !1
            }, isAnyPartAnimating: function () {
                var t = this.getParentWidget().getChildWidget("gallery"), e = this.getParentWidget().getChildWidget("content");
                return t.getProp("animating") || e.getProp("animating") ? !0 : !1
            }, collectData: function () {
                for (var t, e, i = this.data, n = this.dataIndexed, s = this.el.find(".slide-part-eight"), o = 0, a = s.length, r = this.el.data("theme"); a > o; o++)t = s.eq(o), e = {
                    id: t.data("id"),
                    iconName: t.data("iconName"),
                    heading: t.find("h2").text(),
                    textElement: t.find("p"),
                    index: i.length,
                    isFirst: 0 === o,
                    isLast: o === a - 1,
                    theme: r
                }, i.push(e), n[e.id] = e
            }, getItemByIndex: function (t) {
                return this.data[t]
            }, getItem: function (t) {
                return this.dataIndexed[t]
            }, handleMouseOver: function () {
                this.getParentWidget().getProp("animating") || this.getProp("overlay") || this.setProp("active", !0)
            }, uiUpdateMobileContentSize: function (t) {
                $.support.touch && "portrait" == this.getProp("orientation") && ("left" === this.getProp("id") ? t ? this.el.anim({height: "100%"}) : this.el.animCSS({height: "100%"}, !0) : this.el[t ? "anim" : "animCSS"]({
                    height: "0px",
                    opacity: "0"
                }))
            }, applyUIBackground: function (t, e) {
                t.is_mobile || this._super(t, e)
            }, applyUIContentSize: function (t, e) {
                t.is_mobile || this._super(t, e)
            }, getUISizes: function (t) {
                var e = this._super(t);
                if (!e)return e;
                {
                    var i;
                    $.contentSize()
                }
                return i = s(e.containerMaxWidth, Math.ceil(e.containerMaxHeight / 4), this.bgSizeRatio), e.backgroundSize = [i.width, i.height], i = s.position(e.containerWidth, Math.ceil(e.containerHeight / ($.support.touch && "portrait" == this.getProp("orientation") ? 2 : 4)), i.width, i.height), e.backgroundPosition = [i.left, i.top], e
            }
        })
    }, {
        "./../../components/plugins/cover": 13,
        "./../../components/plugins/debounce": 14,
        "./../../components/widgets/slidepart": 40
    }],
    47: [function (t, e) {
        {
            var i = t("./../../components/widgets/base");
            t("./../../components/plugins/debounce"), t("./../../components/plugins/cover")
        }
        e.exports = i.extend({
            NAME: "slidepartcontent", elements: null, init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.elContents = this.el.children(), $.contentSize.on("resize", function () {
                    this.uiUpdate()
                }.bind(this));
                var i = Widgets.getById("controller");
                this.buttonPrevious = this.getChildWidget("previous"), this.buttonNext = this.getChildWidget("next"), this.buttonPrevious.on($.support.clickEvent, i.previous.bind(i)), this.buttonNext.on($.support.clickEvent, i.next.bind(i))
            }, copyContent: function () {
                for (var t, e, i = this.getParentWidget().data, n = 0, s = i.length, o = this.el, a = {}; s > n; n++)e = i[n], t = $('<div class="slide-part-' + e.id + ' hidden"></div>'), t.append(e.textElement.clone().removeClass("hidden")), o.append(t), a[e.id] = t;
                this.elements = a
            }, handlePropChange: function (t, e, i) {
                "active" === t ? e && !i ? (this.elements || this.copyContent(), this.uiUpdate(), this.uiSlideIntoView(e, i)) : !e && i ? this.uiSlideOutOfView(e, i) : (this.uiUpdate(), this.uiTransitionSlides(e, i)) : "theme" === t && this.uiUpdateTheme(e, i)
            }, getInitialState: function () {
                return $.extend(this._super(), {active: null, theme: "light", animating: !1})
            }, getUISizes: function (t) {
                var e = slide_part.getUISizes(t);
                return e
            }, uiUpdate: function () {
                var t = this.getProp("active"), e = this.getParentWidget(), i = e.getItem(t), n = this.buttonPrevious, s = this.buttonNext;
                i && (i.isFirst ? n.setProp("visible", !1) : (n.setProp("visible", !0), n.setProp("label", e.getItemByIndex(i.index - 1).heading), n.setProp("iconHover", e.getItemByIndex(i.index - 1).iconName)), i.isLast ? s.setProp("visible", !1) : (s.setProp("visible", !0), s.setProp("label", e.getItemByIndex(i.index + 1).heading), s.setProp("iconHover", e.getItemByIndex(i.index + 1).iconName)))
            }, uiTransitionSlides: function (t, e) {
                var i = this.elements[t], n = this.elements[e], s = n.index() < i.index() ? 100 : -100, o = this;
                this.setProp("animating", !0), i.animCSS({
                    "z-index": 1,
                    translateX: "0%",
                    translateY: s + "%"
                }, !0), i.removeClass("hidden"), i.animNext(function () {
                    i.anim({translateY: "0%"}, {
                        duration: 500, easing: "ease-in-out", delay: 32, begin: function () {
                            i.removeClass("hidden")
                        }
                    }), n.animCSS({translateX: "0%", "z-index": 0}).anim({translateY: [-s + "%", "0%"]}, {
                        duration: 550,
                        easing: "ease-in-out",
                        complete: function () {
                            n.addClass("hidden"), o.setProp("animating", !1)
                        }
                    })
                })
            }, uiSlideIntoView: function (t) {
                var e = this.el, i = this.elements[t], n = this;
                this.setProp("animating", !0), i.removeClass("hidden").animCSS({
                    translateY: "0%",
                    translateX: "0%"
                }), e.anim("stop"), e.animCSS({translateX: "100%"}), $.support.touch && "portrait" == this.getProp("orientation") && this.getParentWidget().el.animCSS({
                    height: "50%",
                    opacity: "1"
                }), e.animNext(function () {
                    e.removeClass("hidden"), e.anim({translateX: ["0%", "100%"]}, {
                        duration: 500,
                        easing: "ease-in-out",
                        complete: function () {
                            n.setProp("animating", !1)
                        }
                    })
                })
            }, uiSlideOutOfView: function (t, e) {
                var i = this.el, n = this.elements[e], s = this;
                this.setProp("animating", !0), i.anim("stop"), i.anim({translateX: "-100%"}, {
                    duration: 500,
                    easing: "ease-in-out",
                    complete: function () {
                        i.addClass("hidden"), n.addClass("hidden"), s.setProp("animating", !1)
                    }
                })
            }, uiUpdateTheme: function (t, e) {
                this.el.removeClass("ui-" + e), this.el.addClass("ui-" + t), this.buttonNext.setProp("iconNormal", "next" + ("light" === t ? "-light" : "")), this.buttonPrevious.setProp("iconNormal", "prev" + ("light" === t ? "-light" : ""))
            }
        })
    }, {
        "./../../components/plugins/cover": 13,
        "./../../components/plugins/debounce": 14,
        "./../../components/widgets/base": 31
    }],
    48: [function (t, e) {
        var i = t("./../../components/widgets/base"), n = (t("./../../components/plugins/debounce"), t("./../../components/plugins/cover"));
        e.exports = i.extend({
            NAME: "slidepartgallery", bgSizeRatio: 1, init: function (t, e) {
                this.copyContent(t), this._super(t, e), Widgets.init(this.el), this.bgContainers = this.getBackgroundContainer(), this.bgImages = this.bgContainers.parent(), $.contentSize.on("resize", function () {
                    this.uiUpdate()
                }.bind(this)), this.getChildWidget("back").on($.support.clickEvent, this.handleBackClick.bind(this));
                var i = Widgets.getById("controller");
                this.buttonPrevious = this.getChildWidget("previous"), this.buttonPrevious && this.buttonPrevious.on("click", i.previous.bind(i))
            }, copyContent: function (t) {
                var e = t.closest(".slide").find(".slide-part-eight");
                e = e.clone(), e.find("p").remove(), e.removeClass("slide-part-eight").addClass("hidden").appendTo(t)
            }, handleBackClick: function () {
                this.getParentWidget().setProp("overlay", null)
            }, handlePropChange: function (t, e, i) {
                "active" === t ? e && !i ? (this.uiUpdate(), this.uiUpdateButtons(), this.uiSlideIntoView(e, i)) : !e && i ? this.uiSlideOutOfView(e, i) : (this.uiUpdateButtons(), this.uiTransitionImages(e, i)) : "theme" === t && this.uiUpdateTheme(e, i)
            }, getInitialState: function () {
                return $.extend(this._super(), {active: null, theme: "light", animating: !1})
            }, getBackgroundContainer: function () {
                return this.el.find(".bg")
            }, uiUpdateButtons: function () {
                var t = this.getProp("active"), e = this.getParentWidget(), i = e.getItem(t), n = this.buttonPrevious;
                i.isFirst ? n.setProp("visible", !1) : (n.setProp("visible", !0), n.setProp("label", e.getItemByIndex(i.index - 1).heading), n.setProp("iconHover", e.getItemByIndex(i.index - 1).iconName))
            }, uiUpdate: function (t) {
                var e = this.getUISizes();
                return this.applyUIBackground(e, t)
            }, getUISizes: function (t) {
                var e = this.getParentWidget(), i = e.getUISizes(t);
                if (!i)return i;
                {
                    var s;
                    $.contentSize()
                }
                return s = n(i.containerMaxWidth, i.containerMaxHeight, this.bgSizeRatio), i.backgroundSize = [s.width, s.height], s = n.position(i.containerMaxWidth, i.containerMaxHeight, s.width, s.height), i.backgroundPosition = [s.left, s.top], i
            }, applyUIBackground: function (t) {
                var e = this.bgContainers;
                t && e.length && (e.animProp({hwAcceleration: !0}), e.animCSS({
                    backgroundSize: t.backgroundSize[0] + "px " + t.backgroundSize[1] + "px",
                    translateX: t.backgroundPosition[0] + "px",
                    translateY: t.backgroundPosition[1] + "px"
                }))
            }, uiTransitionImages: function (t, e) {
                var i = this.bgImages.filter('[data-id="' + t + '"]'), n = this.bgImages.filter('[data-id="' + e + '"]'), s = this;
                this.setProp("animating", !0), i.animCSS({
                    "z-index": 1,
                    translateX: "100%"
                }, !0), i.removeClass("hidden"), i.animNext(function () {
                    i.anim({translateX: "0%"}, {
                        duration: 500, easing: "ease-in-out", delay: 32, begin: function () {
                            i.removeClass("hidden")
                        }
                    }), n.animCSS({"z-index": 0}).anim({translateX: ["-100%", "0%"]}, {
                        duration: 550,
                        easing: "ease-in-out",
                        complete: function () {
                            n.addClass("hidden"), s.setProp("animating", !1)
                        }
                    })
                })
            }, uiSlideIntoView: function () {
                var t = this.getProp("active"), e = this.el, i = this.bgImages.filter('[data-id="' + t + '"]'), n = this;
                this.setProp("animating", !0), i.removeClass("hidden").animCSS({translateX: "0%"}), e.anim("stop"), e.animCSS({translateX: "100%"}), $.support.touch && "portrait" == this.getProp("orientation") && (this.getParentWidget().setProp("animate", !0), this.getParentWidget().el.anim({height: "50%"}, {
                    duration: 300,
                    complete: function () {
                        n.getParentWidget().setProp("animate", !1)
                    }
                })), e.animNext(function () {
                    e.removeClass("hidden"), e.anim({translateX: ["0%", "100%"]}, {
                        duration: 500,
                        easing: "ease-in-out",
                        complete: function () {
                            n.setProp("animating", !1)
                        }
                    })
                })
            }, uiSlideOutOfView: function (t, e) {
                var i = this.el, n = this.bgImages.filter('[data-id="' + e + '"]'), s = this;
                this.setProp("animating", !0), i.anim("stop"), i.anim({translateX: "-100%"}, {
                    duration: 500,
                    easing: "ease-in-out",
                    complete: function () {
                        i.addClass("hidden"), n.addClass("hidden"), s.setProp("animating", !1)
                    }
                })
            }, uiUpdateTheme: function (t, e) {
                this.el.removeClass("ui-" + e), this.el.addClass("ui-" + t), this.buttonPrevious.setProp("iconNormal", "prev" + ("light" === t ? "-light" : ""))
            }
        })
    }, {
        "./../../components/plugins/cover": 13,
        "./../../components/plugins/debounce": 14,
        "./../../components/widgets/base": 31
    }],
    49: [function (t, e) {
        var i = t("./../../components/widgets/base"), n = t("./../../components/plugins/utils");
        e.exports = i.extend({
            NAME: "SlidePartCalculator",
            BANK_DATA: null,
            BANK_DATA_INDEXED: null,
            init: function (t, e) {
                this._super(t, e), Widgets.init(t), this.BANK_DATA = "undefined" != typeof BANK_DATA ? BANK_DATA : [], this.BANK_DATA_INDEXED = n.arrayToObject(this.BANK_DATA), this.content = this.el.find(".content"), this.formScrollable = this.el.find(".allow-scroll"), this.formResult = this.el.find(".form-result"), this.bankField = this.el.find("select[name=bank]"), this.priceField = this.el.find("input[name=price]"), this.firstCallField = this.el.find("input[name=firstCall]"), this.termField = this.el.find("input[name=term]"), this.rateField = this.el.find("input[name=rate]"), this.fields = [this.priceField, this.firstCallField, this.termField, this.rateField], this.is_mobile = matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches, $.each(this.fields, function (t, e) {
                    this.autoNumericInit(e), e.on("keyup change", this.onFieldChange.bind(this))
                }.bind(this)), $.support.touch && $.each(this.fields, function (t, e) {
                    this.autoNumericInit(e), e.on("blur", function () {
                        this.validateForm() && this.content.animate({scrollTop: this.formResult.offset().top}, 350)
                    }.bind(this))
                }.bind(this)), this.initSelect()
            },
            getInitialState: function () {
                return $.extend(this._super(), {bank: null})
            },
            handlePropChange: function (t, e, i) {
                "bank" === t ? this.onBankChange() : "orientation" === t ? this.is_mobile && document.location.reload() : this._super(t, e, i)
            },
            onFieldChange: function () {
                this.validateForm()
            },
            onBankChange: function () {
                var t = this.getBankById(this.getProp("bank"));
                this.rateField.val(t.rate), this.validateForm()
            },
            initSelect: function () {
                {
                    var t, e, i, n, s = this.bankField, o = s.find("option");
                    s.find(":selected")
                }
                s.on("change", function () {
                    this.setProp("bank", s.val())
                }.bind(this)), this.setProp("bank", s.val()), $.DropDown.prototype.DEFAULT_OPTIONS.renderer.item = function (t, e, o) {
                    var a = s.find(":selected");
                    return n = this.getBankById($(a).val()), n.icon ? (i = $("<img/>", {src: n.icon}), i[0].outerHTML + o) : o
                }.bind(this), s.select(), t = s.siblings(".input-select-fake"), e = t.find("li a"), o.each(function (t, s) {
                    n = this.getBankById($(s).val()), n.icon && (i = $("<img/>", {src: n.icon}), e.eq(t).prepend(i))
                }.bind(this))
            },
            getBankById: function (t) {
                return this.BANK_DATA_INDEXED[t]
            },
            checkFirstCall: function () {
                var t = this.getBankById(this.getProp("bank")), e = parseFloat(this.firstCallField.autoNumeric("get")), i = this.firstCallField.closest(".pure-g"), n = i.find(".error").find(".value");
                return isNaN(e) ? !1 : (this.autoNumericInit(n), t.firstCall > e ? (n.autoNumeric("set", t.firstCall), this.onFieldError(this.firstCallField), !1) : (this.onFieldSuccess(this.firstCallField), !0))
            },
            checkTerm: function () {
                var t = this.getBankById(this.getProp("bank")), e = parseFloat(this.termField.autoNumeric("get")), i = this.termField.closest(".pure-g"), n = i.find(".error").find(".value");
                return isNaN(e) ? !1 : t.term < e ? (n.text(t.term), this.onFieldError(this.termField), !1) : (this.onFieldSuccess(this.termField), !0)
            },
            onFieldSuccess: function (t) {
                var e = t.closest(".pure-g");
                e.removeClass("has-error")
            },
            onFieldError: function (t) {
                var e = t.closest(".pure-g"), i = e.find(".error");
                this.is_mobile || i.animCSS({height: t.closest("[class^=pure-u]").height() + "px"}, !0), e.addClass("has-error")
            },
            validateForm: function () {
                var t = !0;
                return t = this.checkFirstCall() && t, t = this.checkTerm() && t, t ? this.onFormValid() : this.onFormInvalid(), t
            },
            onFormInvalid: function () {
                this.formResult.addClass("hidden")
            },
            onFormValid: function () {
                var t, e = parseFloat(this.priceField.autoNumeric("get")), i = parseFloat(this.firstCallField.autoNumeric("get")), n = 12 * parseInt(this.termField.autoNumeric("get")), s = parseFloat(this.rateField.autoNumeric("get")), o = e - i, a = s / 1200, r = this.formResult.find(".value");
                return t = o * a * Math.pow(1 + a, n) / (Math.pow(1 + a, n) - 1), t = t.toFixed(2), this.formResult.addClass("hidden"), isNaN(t) || 0 > t ? !1 : (this.autoNumericInit(r), r.autoNumeric("set", t), this.formResult.removeClass("hidden"), void 0)
            },
            autoNumericInit: function (t) {
                t.autoNumeric("init", {aSep: " ", aPad: !1})
            },
            uiToggleForm: function (t, e, i) {
                e ? (this.el.show(), this.formScrollable.animCSS({height: this.el.innerHeight() - this.formScrollable.position().top + "px"}, !0), this.el[t ? "anim" : "animCSS"]({top: ["0%", i ? "0%" : "100%"]}, {duration: 350})) : this.el.hide()
            }
        })
    }, {"./../../components/plugins/utils": 27, "./../../components/widgets/base": 31}],
    50: [function (t, e) {
        var i = t("./../../components/widgets/base");
        e.exports = i.extend({
            NAME: "SlidePartContacts", init: function (t, e) {
                this._super(t, e), Widgets.init(t), this.formWrapper = this.el.find(".content-form"), this.formScrollable = this.formWrapper.find(".allow-scroll"), this.is_mobile = matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches
            }, uiToggleForm: function (t, e, i) {
                e && (this.formWrapper.addClass("active"), this.is_mobile && "portrait" == this.getProp("orientation") ? (this.el[t ? "anim" : "animCSS"]({
                    top: ["0%", i ? "0%" : "50%"],
                    height: ["100%", i ? "100%" : "50%"]
                }, {duration: 350}), this.formWrapper[t ? "anim" : "animCSS"]({top: ["0px", this.formWrapper.position().top + "px"]}, {duration: 350})) : (this.formScrollable.animCSS({height: this.formWrapper.innerHeight() - this.formScrollable.position().top + "px"}, !0), i && this.formWrapper.animCSS({top: "0px"}, !0), this.formWrapper[t ? "anim" : "animCSS"]({top: ["0px", i ? "0px" : this.formWrapper.position().top + "px"]}, {duration: 350})))
            }
        })
    }, {"./../../components/widgets/base": 31}],
    51: [function (t, e) {
        var i = t("./../../components/widgets/section");
        e.exports = i.extend({
            NAME: "SectionCalculator", init: function (t, e) {
                this._super(t, e), Widgets.init(t), $.support.touch && this.touchScroll(), this.contactsWidget = this.getChildWidget("left"), this.calculatorWidget = this.getChildWidget("right"), this.formSwitch = this.el.find(".form-switch"), this.formSwitchers = this.formSwitch.find("a"), this.formSwitchers.on($.support.clickEvent, this.switchForm.bind(this)), this.inquieryForm = this.getChildWidget("inquiry-form"), this.callForm = this.getChildWidget("call-form"), this.calculatorForm = this.getChildWidget("calculator-form"), this.forms = {
                    "inquiry-form": this.inquieryForm,
                    "call-form": this.callForm,
                    "calculator-form": this.calculatorForm
                }, this.is_mobile = matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches
            }, getInitialState: function () {
                return $.extend(this._super(), {activeForm: null})
            }, handlePropChange: function (t, e, i) {
                "activeForm" === t ? e && this.onFormChange(e, i) : this._super(t, e, i)
            }, onFormChange: function (t, e) {
                "calculator-form" == t || this.is_mobile && "landscape" == this.getProp("orientation") ? ($.each(this.forms, function (t, e) {
                    e.el.hide()
                }), "calculator-form" == t ? this.calculatorWidget.uiToggleForm(!0, t, e) : (this.calculatorWidget.uiToggleForm(!0, !1), this.contactsWidget.uiToggleForm(!0, t, e))) : (this.forms["inquiry-form"].el.hide(), this.forms["call-form"].el.hide(), this.contactsWidget.uiToggleForm(!0, t, e)), this.forms[t].el.show()
            }, switchForm: function (t) {
                t.preventDefault(), this.formSwitch.addClass("active"), this.formSwitchers.removeClass("active");
                var e = $(t.target);
                e.addClass("active"), this.formSwitchers.filter("[data-form=" + e.attr("data-form") + "]").addClass("active"), this.setProp("activeForm", e.attr("data-form"))
            }, touchScroll: function () {
                var t;
                this.el.on("touchstart", function (e) {
                    t = e.originalEvent.touches[0].clientY
                }.bind(this)), this.el.on("touchmove", function (e) {
                    if ($(".allow-scroll").has($(e.target)).length) {
                        var i, n = e.originalEvent.changedTouches[0].clientY;
                        t > n + 5 ? i = "down" : n - 5 > t && (i = "up");
                        var s = $(e.target).closest(".allow-scroll"), o = s.innerHeight(), a = s.get(0).scrollHeight, r = s.scrollTop(), l = !1;
                        a > o && (l = !0), r >= a - o && "down" == i && (e.preventDefault(), l = !1), 0 >= r && "up" == i && (e.preventDefault(), l = !1), l && e.stopPropagation()
                    } else e.preventDefault()
                }.bind(this))
            }
        })
    }, {"./../../components/widgets/section": 38}],
    52: [function (t, e) {
        function i() {
            "undefined" != typeof google && "undefined" != typeof google.maps ? o.resolve() : o.tries > 0 ? (o.tries--, setTimeout(i, 16)) : o.reject()
        }

        var n, s = t("./../../components/widgets/base"), o = (t("./../../components/plugins/jquery.scrollbar"), window.GoogleMapsReady = $.Deferred());
        o.tries = 125, i(), o.done(function () {
            n = t("./../../components/plugins/gmap.infobox")
        }), e.exports = s.extend({
            NAME: "contacts", init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.slide = this.el.closest(".slide-part");
                var i = this.slide.find("select"), n = this.el.find(".form-trigger"), s = (this.slide.find("form"), this.slide.next()), o = s.find(".map").widget(), a = s.find(".show-map-btn");
                this.slideRight = s, this.mapWidget = o, this.map = s.find(".map"), this.mapButton = a, this.closeMapButton = $(".close-map-btn"), i.select({showEmptyValue: !0}), n.on($.support.clickEvent, this.animateForm.bind(this)), this.closeBtn = this.slide.find(".close-form"), this.closeBtn.on($.support.clickEvent, this.hideForm.bind(this)), this.buttonLocation = $('[data-id="find-location"]').widget(), this.isTablet = window.matchMedia("(max-width: 979px) and (min-width:736px) and (orientation: portrait)").matches, this.isPhone = window.matchMedia("(max-width: 736px)").matches, this.landscape = window.matchMedia("(orientation: landscape)").matches, this.smallPhone = window.matchMedia("(max-height: 550px)").matches, this.isPhone && (this.slide.find(".form-wrapper .form").hide(), this.el.find(".active").removeClass("active")), this.mapInit(), this.mapWidget.isLocationDetectionSupported() ? this.buttonLocation.on($.support.clickEvent, this.handleLocationClick.bind(this)) : this.buttonLocation.setProp("visible", !1), this.isPhone && this.map.fadeOut()
            }, mapInit: function () {
                var t = this.map.widget(), e = this.mapButton, i = this.closeMapButton;
                t.setProp("officeLocation", ["55.743654", "37.288017"]), t.getMarker("home"), e.on($.support.clickEvent, $.proxy(this.handleMapButtonClick, this)), i.on($.support.clickEvent, $.proxy(this.handleMapButtonClick, this))
            }, animateForm: function (t) {
                var e = $(t.currentTarget), i = $('input[value="' + e.data("form") + '"]').closest("div"), n = this.slide.find(".form:visible");
                this.slide.hasClass("mobile-form-visible") ? this.switchForms(n, i, e) : this.showForm(e, i, this.slide)
            }, handleLocationClick: function () {
                var t = this.buttonLocation;
                t.setProp("icon", "map-loading"), t.setProp("disabled", !0), this.mapWidget.detectUserLocation().always(function () {
                    t.setProp("icon", "location"), t.setProp("disabled", !1)
                })
            }, showForm: function (t, e, i) {
                if (!t.hasClass("active")) {
                    var n = e, s = t.closest(".content"), o = s.find("article").outerHeight() + 30;
                    n.show(), this.slide.find(".form").not(n).hide(), this.form = n, this.wrapper = s, this.slide = i, this.articleH = o, this.target = t, this.isPhone && (this.slide.addClass("mobile-form-visible"), this.slide.anim({translateY: ["0%", "56%"]}, {duration: 700}), this.closeBtn.anim({opacity: [1, 0]}, {duration: 500})), t.addClass("active").siblings("a").removeClass("active")
                }
            }, hideForm: function () {
                var t = (this.articleH, this.slide, this.wrapper, this.slide.find(".form")), e = (this.target, this.landscape ? "80%" : "80%"), i = this.landscape ? 700 : 570;
                this.isPhone && (this.slide.anim({translateY: [e, "0%"]}, {duration: 700}), setTimeout($.proxy(function () {
                    this.slide.removeClass("mobile-form-visible")
                }, this), i), t.fadeOut(700), t.removeClass("active"), this.target.removeClass("active")), this.closeBtn.anim({opacity: [0, 1]}, {duration: 500})
            }, switchForms: function (t, e, i) {
                i.hasClass("active") || (t.fadeOut(300, function () {
                    e.fadeIn(300), t.find(".form-group.error").removeClass("error"), t.find(".error-text").addClass("hidden"), this.is_mobile && e.closest(".form-wrapper").scrollTop(0)
                }.bind(this)), i.addClass("active").siblings("a").removeClass("active"))
            }, handleMapButtonClick: function () {
                var t, e = this.slide.next().find(".show-map-btn"), i = LOCALE, n = [$(".duration"), $(".btn-location"), $(".map-controls")];
                this.isPhone && n.push($(".close-map-btn")), e.hasClass("active") ? (t = "ru" == i ? "показать на карте" : "show on map", e.text(t), this.hideMap(n), e.removeClass("active")) : (t = "ru" == i ? "закрыть карту" : "hide map", e.text(t), this.showMap(n), e.addClass("active"))
            }, showMap: function (t) {
                var e = (this.slide, this.slideRight);
                if (this.isTablet)e.anim({
                    top: ["12%", "65%"],
                    height: ["90%", "50%"]
                }, {duration: 400}), this.map.anim({top: ["38%", "70%"]}, {
                    duration: 400, complete: $.proxy(function () {
                        this.map.addClass("visible")
                    }, this)
                }), $.each(t, function (e) {
                    t[e].fadeIn(400)
                }); else {
                    if (!this.isPhone)return !1;
                    this.landscape && e.anim({height: ["100%", "80%"]}, {
                        duration: 400, complete: $.proxy(function () {
                            this.map.addClass("visible")
                        }, this)
                    }), $.each(t, function (e) {
                        t[e].fadeIn(400)
                    }), this.map.addClass("visible").fadeIn(400)
                }
            }, hideMap: function (t) {
                {
                    var e = (this.slide, this.slideRight);
                    $(".duration")
                }
                if (this.isTablet)e.anim({
                    top: ["65%", "12%"],
                    height: ["50%", "90%"]
                }, {duration: 400}), this.map.anim({top: ["70%", "38%"]}, {duration: 400}), this.map.removeClass("visible"), $.each(t, function (e) {
                    t[e].fadeOut(400)
                }); else {
                    if (!this.isPhone)return !1;
                    this.landscape && e.anim({height: ["81%", "100%"]}, {duration: 400}), $.each(t, function (e) {
                        t[e].fadeOut(400)
                    }), this.map.removeClass("visible").fadeOut(400)
                }
            }
        })
    }, {
        "./../../components/plugins/gmap.infobox": 15,
        "./../../components/plugins/jquery.scrollbar": 20,
        "./../../components/widgets/base": 31
    }],
    53: [function (t, e) {
        "use strict";
        var i = t("./../../components/widgets/form");
        e.exports = i.extend({
            init: function (t) {
                this._super(t), this.siblingForm = this.el.siblings(".form")
            }, onCaptchaReloadSuccess: function (t) {
                this._super(t);
                var e = Widgets.getFromNode(this.siblingForm);
                e.captchaImage.attr("src", t.captcha)
            }
        })
    }, {"./../../components/widgets/form": 35}],
    54: [function (t, e) {
        var i = t("./../../components/widgets/slidepartthird");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e)
            }, handleMoreClick: function (t) {
                $.support.touch ? this.getProp("active") || this.getParentWidget().getProp("animating") || (this.setProp("active", !0), this.uiToggleContent()) : this.getProp("active") ? this.openVideoPlayer(t) : this._super(t)
            }, openVideoPlayer: function (t) {
                Widgets.getById("header").stopAudio(), Widgets.getById("video").setProp("active", !0), t && t.preventDefault && t.preventDefault()
            }
        })
    }, {"./../../components/widgets/slidepartthird": 41}],
    55: [function (t, e) {
        var i = t("./../../components/widgets/slidepartthird");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e)
            }, handleMoreClick: function (t) {
                $.support.touch ? this.getProp("active") ? this.openGallery() : this.getParentWidget().getProp("animating") || (this.setProp("active", !0), this.uiToggleContent()) : (this._super(t), this.openGallery())
            }, openGallery: function () {
                Widgets.getById("gallery-exterior").setProp("active", !0)
            }
        })
    }, {"./../../components/widgets/slidepartthird": 41}],
    56: [function (t, e) {
        var i = t("./../../components/widgets/slidepartthird");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e)
            }, handleMoreClick: function (t) {
                $.support.touch ? this.getProp("active") ? this.openGallery() : this.getParentWidget().getProp("animating") || (this.setProp("active", !0), this.uiToggleContent()) : (this._super(t), this.openGallery())
            }, openGallery: function () {
                Widgets.getById("gallery-interior").setProp("active", !0)
            }
        })
    }, {"./../../components/widgets/slidepartthird": 41}],
    57: [function (t, e) {
        "use strict";
        var i = t("./../../components/widgets/form");
        e.exports = i.extend({
            init: function (t) {
                this._super(t), this.elErrorMessage = this.views.cover.find(".error-text").not(".error-text-captcha"), this.elCaptchaErrorMessage = this.views.cover.find(".error-text-captcha"), this.contactInput = t.find("input[name=contact]"), this.contactBlock = this.contactInput.closest(".input-text"), this.contactInput.on("input", this.validateContact.bind(this)), this.captchaTitle = t.find(".captch-title"), this.captchaBlock = t.find(".input-captcha"), this.nextStepBtn = this.getChildWidget("next-step"), this.nextStepBtn.on($.support.clickEvent, this.showCaptcha.bind(this))
            }, handlePropChange: function (t, e, i) {
                this._super(t, e, i), "view" === t && "cover" === e && (this.elErrorMessage.addClass("hidden"), this.elCaptchaErrorMessage.addClass("hidden"), this.toggleCaptcha(!1))
            }, handleResponseError: function (t) {
                this._super(t), this.showCover(), t && t.errors && -1 != $.inArray("captcha", t.errors) ? (this.elCaptchaErrorMessage.removeClass("hidden"), this.toggleCaptcha(!0)) : this.elErrorMessage.removeClass("hidden")
            }, validateContact: function () {
                var t = this.contactInput, e = $.trim(t.val()), i = this.views.form.find(".error-text");
                return i.addClass("hidden"), "" == e ? !1 : e.length > 50 ? (i.removeClass("hidden"), !1) : !0
            }, handleFormSubmit: function () {
                return this.validateContact() && this.validateCaptcha() ? this._super() : !1
            }, handleResponse: function () {
                this.captchaField.val("")
            }, showCaptcha: function () {
                return this.validateContact() ? (this.toggleCaptcha(!0), void 0) : !1
            }, toggleCaptcha: function (t) {
                t ? (this.el.find("h3").fadeOut(), this.contactBlock.fadeOut(function () {
                    this.captchaBlock.removeClass("hidden").fadeIn(), this.captchaTitle.removeClass("hidden").fadeIn()
                }.bind(this))) : (this.captchaTitle.addClass("hidden").fadeOut(), this.captchaBlock.addClass("hidden").fadeOut(), this.contactBlock.fadeIn(), this.el.find("h3").fadeIn(), this.reloadCaptcha())
            }
        })
    }, {"./../../components/widgets/form": 35}],
    58: [function (t, e) {
        "use strict";
        var i = t("./../../components/widgets/base"), n = t("./../../components/plugins/utils");
        e.exports = i.extend({
            listIsRendered: !1, init: function (t, e) {
                this._super(t, e), this.slide = this.getParentWidget(), this.renderAppartmentList(), this.is_mobile = matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches, this.el.animProp({translateX: "-100%"}), this.btnToggle = this.getChildWidget("toggle"), this.btnToggle.on("click", this.toggleActiveState.bind(this)), this.btnCloseFloorInfo = this.getChildWidget("close-floor-info"), this.btnCloseFloorInfo.on($.support.clickEvent, this.closeFloorInfo.bind(this)), this.elList = this.el.find(".floor-list"), this.elInfo = this.el.find(".floor-info"), this.elReserve = this.elInfo.find(".form-reserve"), this.elNotify = this.elInfo.find(".form-notify"), this.columnHeadings = this.el.find(".th"), this.pantrySelect = this.el.find('select[name="pantry"]'), this.el.delegate(this.pantrySelect, "change", this.handlePantryChange.bind(this)), this.parkingSelect = this.el.find('select[name="parking"]'), this.el.delegate(this.parkingSelect, "change", this.handleParkingChange.bind(this)), this.columnHeadings.on($.support.clickEvent, this.handleDataSort.bind(this)), this.pantries = PANTRY_DATA, this.is_mobile ? (this.setProp("active", !0), this.uiInitMobile()) : this.scrollable = this.getChildWidget("scrollable"), this.elContent = this.scrollable ? this.scrollable.elContent : this.elList, this.elContent.on($.support.clickEvent, "tr", this.handleAppartmentClick.bind(this)), this.apartmentMouseOverEvents()
            }, getInitialState: function () {
                return $.extend(this._super(), {active: !1, appartment: null})
            }, handlePropChange: function (t, e) {
                if ("active" === t)e ? this.renderAppartmentList() : ("apartment" === this.slide.getProp("data_type") && this.slide.setProp("highlighted", null), this.getProp("appartment") && this.slide.mapPositionOffset[0] <= 320 && (this.slide.mapPositionOffset[0] = 0, this.slide.uiUpdateSize(!0))), this.uiUpdateAppartment(), this.uiUpdate(!0); else if ("appartment" === t) {
                    this.slide.setProp("data_type", "apartment"), this.uiUpdateAppartment(), this.uiUpdate(this.getProp("active"));
                    var i = this.slide.getAppartmentCenterXY(e), n = $.contentSize();
                    this.slide.mapPositionOffset[0] = i[0] >= n[0] / 2 ? (i[0] - n[0] / 2) * this.slide.mapScaleFactor : -(n[0] / 2 - i[0]) * this.slide.mapScaleFactor, this.slide.mapPositionOffset[1] = i[1] >= n[1] / 2 ? (i[1] - n[1] / 2) * this.slide.mapScaleFactor : -(n[1] / 2 - i[1]) * this.slide.mapScaleFactor, this.slide.uiUpdateSize(!0)
                }
            }, handleViewportResize: function () {
                var t = $.contentSize();
                this._super(), this.el.animCSS({height: t[1] + "px"}), this.uiUpdate(!1)
            }, toggleActiveState: function () {
                var t = this.getProp("active");
                t ? this.setProp("active", !1) : (this.setProp("appartment", null), this.setProp("active", !0))
            }, handleAppartmentClick: function (t) {
                if (!(this.scrollable && this.scrollable.dragging || this.dragging)) {
                    var e = $(t.target).closest("tr").data("id");
                    e && this.setProp("appartment", e)
                }
            }, uiUpdate: function (t) {
                var e, i = this.getProp("active"), n = this.getProp("appartment"), s = $.contentSize();
                this.is_mobile ? n ? this.elInfo.fadeIn() : this.elInfo.fadeOut() : (e = n ? 320 : Math.round(.5 * s[0]), this.el.anim({
                    translateX: i ? "0%" : "-100%",
                    width: e + "px"
                }, {duration: t ? 350 : 0}), this.elList.anim({width: Math.round(.5 * s[0]) + "px"}), this.elList.anim({translateX: n ? -Math.round(.5 * s[0]) + "px" : "0px"}, {duration: t ? 350 : 0}), this.elInfo.anim({translateX: n ? "0px" : Math.round(.5 * s[0]) + "px"}, {duration: t ? 350 : 0}), this.btnToggle.setProp("icon", i ? "close-sidebar" : "sidebar")), i && this.scrollable && $.animNext(this.scrollable.updateUI.bind(this.scrollable))
            }, uiUpdateAppartment: function () {
                var t, e = this.getProp("active"), i = this.getProp("appartment");
                e && i && (t = this.slide.getAppartmentById(i), this.renderAppartmentInfo(t))
            }, uiInitMobile: function () {
                this.el.find(".table-heading").on("touchstart touchmove touchend", function (t) {
                    t.preventDefault()
                }.bind(this));
                var t;
                this.el.on("touchstart", function (e) {
                    this.dragging = !1, t = e.originalEvent.touches[0].clientY
                }.bind(this)), this.el.on("touchmove", function (e) {
                    this.dragging = !0;
                    var i, n = e.originalEvent.changedTouches[0].clientY;
                    t > n + 5 ? i = "down" : n - 5 > t && (i = "up");
                    var s = this.el.find(".scrollable-content"), o = this.el.innerHeight() - 40, a = s.get(0).scrollHeight, r = s.scrollTop(), l = !1;
                    a > o && (l = !0), r >= a - o && "down" == i && (e.preventDefault(), l = !1, s.scrollTop(r - 1)), 0 >= r && "up" == i && (e.preventDefault(), l = !1, s.scrollTop(1)), l && e.stopPropagation()
                }.bind(this))
            }, closeFloorInfo: function () {
                this.setProp("appartment", null)
            }, renderAppartmentList: function () {
                if (!this.listIsRendered) {
                    this.listIsRendered = !0;
                    var t, e = this.slide.DATA.apartment.data, i = this.el.find("tbody"), s = {
                        100: "available",
                        200: "reserved",
                        300: "sold"
                    }, o = i.html();
                    t = n.map(e, function (t) {
                        return 300 != t.status ? n.template(o, $.extend({
                            formattedArea: n.formatNumber(t.totalArea, 2),
                            formattedPrice: n.formatNumber(t.price),
                            formattedStatus: s[t.status]
                        }, t)) : void 0
                    }).join(""), t += "</tbody></table>", i.html(t)
                }
            }, handleDataSort: function (t, e) {
                for (var i, n = t && "undefined" != typeof t ? $(t.currentTarget) : e, s = n.data("sort"), o = this.el.find("tbody"), a = o.find("tr"), r = [], l = n.hasClass("ascending") ? 0 : 1, h = 0, c = a.size(); c > h; h++)r.push(a[h]);
                this.columnHeadings.filter(".active").removeClass("active"), n.addClass("active"), i = this.sortArray(r, s, l), n.toggleClass("ascending descending"), o.html(i)
            }, sortArray: function (t, e, i) {
                return t.sort($.proxy(function (t, n) {
                    var s = this.getArrElementValue(t, e), o = this.getArrElementValue(n, e), a = this.getArrElementIndex(t), r = this.getArrElementIndex(n), l = i ? 1 : -1, h = i ? -1 : 1;
                    return s === o ? a > r ? 1 : -1 : s > o ? l : h
                }, this))
            }, getArrElementIndex: function (t) {
                var e, i = $(t).data("index");
                return "undefined" != typeof i ? i : (e = $(t).index(), $(t).data("index", e), e)
            }, getArrElementValue: function (t, e) {
                var i, n = $(t).data(e);
                return "undefined" != typeof n ? n : ("status" == e ? (i = $(t).find(".th-" + e).data("status"), n = parseInt(i)) : (i = $(t).find(".th-" + e).text().replace(/(\s|,)/g, "."), n = parseFloat(i)), $(t).data(e, n), n)
            }, apartmentMouseOverEvents: function () {
                var t = this;
                $.support.touch ? this.elContent.on("touchend", "tr", function () {
                    return t.dragging ? !1 : ($(this).addClass("hovered"), void 0)
                }).on("touchstart", "tr", function () {
                    t.elContent.find("tr").removeClass("hovered")
                }) : this.elContent.on({
                    mouseenter: function () {
                        $(this).addClass("hovered")
                    }, mouseleave: function () {
                        $(this).removeClass("hovered")
                    }
                }, "tr")
            }, renderAppartmentInfo: function (t) {
                var e = this.appartmentTemplate, i = this.elInfo.find(".top-info");
                if (this.slide.removeBgContainerFirstClick(), this.slide.setProp("floor", t.floor - 1), this.slide.setProp("highlighted", t.id), e || (e = this.appartmentTemplate = i.html()), i.html(n.template(e, $.extend({
                        totalArea: n.formatNumber(t.totalArea, 2),
                        livingArea: n.formatNumber(t.livingArea, 2)
                    }, t))), this.elReserve.find("h3 span").text(t.id), this.elNotify.find("h3 span").text(t.id), this.elReserve.get(0) || this.elNotify.get(0)) {
                    var s = this.elReserve, o = this.elNotify;
                    this.elInfo.find('input[name="flatNumber"]').val(t.id), 100 == t.status ? this.getChildWidget("form-reserve").setProp("view", "cover") : 200 == t.status && this.getChildWidget("form-notify").setProp("view", "cover"), s.toggleClass("hidden", 100 != t.status), o.toggleClass("hidden", 200 != t.status)
                }
                this.renderPantrySelect(t), this.renderParkingSelect(), Widgets.init(i)
            }, renderParkingSelect: function () {
                var t = this.el.find('select[name="parking"]');
                t.select()
            }, renderPantrySelect: function (t) {
                var e, i, n, s, o = this.pantries, a = t.block, r = t.price, l = (o[a], this.el.find('select[name="pantry"]')), h = [];
                this.appartmentPrice = r, $.each(o, function (t) {
                    o[t][a] && (e = o[t][a])
                }), $.each(e, function (t, e) {
                    i = '<option value="' + t + '" data-pantry-price="' + e.price + '" data-pantry-area="' + e.area + '">' + e.area + " m<sup>2</sup></option>", h.push(i)
                }), s = "ru" == LOCALE ? "Без кладовой" : "Without pantry", n = '<option value="null">' + s + "</option>", l.append(n), l.append(h), l.each($.proxy(function (t, e) {
                    this.setUpSelect($(e))
                }, this)), this.el.find('input[name="pantry"]').val(null)
            }, handlePantryChange: function () {
                var t = $('select[name="pantry"]:visible'), e = t.find("option:selected"), i = this.el.find(".with-pantry"), n = this.el.find(".pantry-area"), s = this.el.find('input[name="pantry"]');
                "" != e.val() && "null" != e.val() ? (this.updateAppartmentPrice(e.data("pantry-price"), e.data("pantry-area")), s.val(e.val())) : (i.addClass("hidden"), n.parent().addClass("hidden"), s.val(null))
            }, handleParkingChange: function () {
                var t = $('select[name="parking"]:visible'), e = this.el.find('input[name="parking"]');
                e.val(t.val())
            }, updateAppartmentPrice: function (t, e) {
                var i = this.el.find(".price span"), n = this.el.find(".pantry-area");
                i.html(this.appartmentPrice + t), n.html(e), n.parent().removeClass("hidden"), i.parent().next().removeClass("hidden")
            }, setUpSelect: function (t) {
                t.select();
                for (var e = $(".input-select-fake-popup"), i = e.find("li a"), n = 0, s = i.size(), o = (e.next(), LOCALE), a = "ru" == o ? "м" : "sq. m."; s > n; n++)i.eq(n).html(i.eq(n).html().replace("m2", "" + a + "<sup>2</sup>"))
            }
        })
    }, {"./../../components/plugins/utils": 27, "./../../components/widgets/base": 31}],
    59: [function (t, e) {
        var i = t("./../../components/widgets/slide"), n = (t("./../../components/plugins/debounce"), t("./../../components/plugins/cover")), s = t("./../../components/plugins/utils");
        e.exports = i.extend({
            DATA: {
                apartment: {
                    data: null,
                    data_indexed: null,
                    masks: {},
                    masks_path: "./case02_files/masks-assets/appartments.json"
                },
                parking: {
                    data: null,
                    data_indexed: null,
                    masks: {},
                    masks_path: "./case02_files/parking-masks-assets/parking.json"
                }
            },
            FLOOR_DATA: null,
            ICONS: [],
            IMAGES: ["./case02_files/plan-1.jpg", "./case02_files/plan-2.jpg", "./case02_files/plan-3.jpg", "./case02_files/plan-4.jpg", "./case02_files/plan-parking-1.jpg", "./case02_files/plan-parking-2.jpg", "./case02_files/plan-5.jpg"],
            IMAGE_WIDTH: 1280,
            IMAGE_HEIGHT: 720,
            slideOffset: [0, 0],
            mapSize: [0, 0],
            mapScaleFactor: 1,
            mapPositionOffset: [0, 0],
            mapPositionBounds: [0, 0],
            bgContainer: null,
            bgImages: null,
            ready: !1,
            init: function (t, e) {
                this.DATA.apartment.data = "undefined" != typeof FLAT_DATA ? FLAT_DATA : [], this.DATA.apartment.data_indexed = s.arrayToObject(this.DATA.apartment.data), this.DATA.parking.data = "undefined" != typeof PARKING_SPACE_DATA ? PARKING_SPACE_DATA : [], this.DATA.parking.data_indexed = s.arrayToObject(this.DATA.parking.data), this.FLOOR_DATA = {}, this.bgContainer = $(t).find(".floor-plan"), this.elTexts = $(t).find(".floor-texts"), this.bgImages = $(), this.instructions = $(t).find(".floor-plan-instructions"), this.bgContainer.find(".floor-plan-icon").each(function (t, e) {
                    var i = $(e).attr("data-floor");
                    this.ICONS[i] || (this.ICONS[i] = []), this.ICONS[i].push($(e)), $(e).on($.support.clickEvent, this.onIconClick.bind(this))
                }.bind(this)), this.is_mobile = matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches, this._super(t, e), this.elFloorNav = this.el.find(".floor-nav a"), $.getJSON(this.DATA.apartment.masks_path).done(this.handleMaskLoad.bind(this, "apartment")).done(this.onReady.bind(this)), $.getJSON(this.DATA.parking.masks_path).done(this.handleMaskLoad.bind(this, "parking")), this.uiInitialAnimations()
            },
            onReady: function () {
                this.setProp("floor", 6), this.bgContainer.on($.support.clickEvent + ".bgContainer", this.bgContainerFirstClick.bind(this)), this.elFloorNav.on($.support.clickEvent, this.handleNavigationClick.bind(this))
            },
            handlePropChange: function (t, e, i) {
                if (this._super(t, e, i), "orientation" === t && document.location.reload(), "floor" === t) {
                    if (e > 3 ? this.setProp("data_type", "parking") : this.setProp("data_type", "apartment"), $.preload(this.IMAGES[e]).done(function () {
                            this.uiChangeFloorPlan(e, i)
                        }.bind(this)), this.getProp("highlighted") && "apartment" === this.getProp("data_type")) {
                        var n = this.getAppartmentById(this.getProp("highlighted"));
                        e == n.floor - 1 && this.uiChangeHighlight(n.id)
                    }
                    this.ready || (this.bgContainer.removeClass("roof"), this.bgContainer.draggable().on("dragstart", this.handleDragStart.bind(this)).on("dragmove", this.handleDragMove.bind(this)).on("click", this.handleAppartmentClick.bind(this)), $.support.touch || (this.bgContainer.on("mousemove", this.handleAreaMove.bind(this)), this.bgContainer.on("mouseleave", this.handleAreaLeave.bind(this))), this.ready = !0)
                } else"apartment" === t ? (e ? this.bgContainer.addClass("cursor") : this.bgContainer.removeClass("cursor"), this.uiHighlightAppartment(e, i)) : "highlighted" === t ? this.uiChangeHighlight(e, i) : "orientation" === t && this.handleOrientationChange(e)
            },
            handleNavigationClick: function (t) {
                this.removeBgContainerFirstClick();
                var e = $(t.target).closest("a").data("floor");
                return "undefined" == typeof e ? !1 : (this.setProp("floor", e), !1)
            },
            getInitialState: function () {
                return $.extend(this._super(), {
                    floor: -1,
                    apartment: null,
                    highlighted: null,
                    cursor: "",
                    data_type: ""
                })
            },
            handleMaskLoad: function (t, e) {
                this.DATA[t].masks = e;
                {
                    var i = this.DATA[t].data;
                    i.length
                }
                $.each(this.DATA[t].data, function (t) {
                    300 == t.status && this.getAppartmentOverlay(t.id)
                })
            },
            handleAppartmentClick: function (t) {
                if ("parking" == this.getProp("data_type"))return !1;
                var e = this.mapScaleFactor, i = (t.clientX + this.mapPositionOffset[0] - this.slideOffset[0]) / e, n = (t.clientY + this.mapPositionOffset[1] - this.slideOffset[1]) / e, s = this.getAppartmentUnderXY([i, n]);
                s && 300 != s.status && (this.setProp("highlighted", s.id), this.getChildWidget("sidebar").setProp("active", !0), this.getChildWidget("sidebar").setProp("appartment", s.id))
            },
            bgContainerFirstClick: function () {
                this.setProp("floor", 3)
            },
            removeBgContainerFirstClick: function () {
                this.bgContainer.off(".bgContainer")
            },
            handleOrientationChange: function () {
                var t = this.getProp("floor") + 1;
                for (var e in this.DATA[this.getProp("data_type")].data_indexed)if (this.DATA[this.getProp("data_type")].data_indexed.hasOwnProperty(e)) {
                    var i = this.DATA[this.getProp("data_type")].data_indexed[e];
                    i.hasOwnProperty("text") && i.hasOwnProperty("floor") && i.floor != t && delete i.text
                }
            },
            handleAreaMove: function (t) {
                var e = this.mapScaleFactor, i = (t.clientX + this.mapPositionOffset[0] - this.slideOffset[0]) / e, n = (t.clientY + this.mapPositionOffset[1] - this.slideOffset[1]) / e, s = this.getAppartmentUnderXY([i, n]);
                this.setProp("apartment", s ? s.id : null)
            },
            handleAreaLeave: function () {
                this.setProp("apartment", null)
            },
            getAppartmentById: function (t) {
                return this.DATA[this.getProp("data_type")].data_indexed[t]
            },
            getAppartmentUnderXY: function (t) {
                var e, i = this.getAppartmentsByFloor(this.getProp("floor")), n = this.DATA[this.getProp("data_type")].masks, s = 0, o = i.length;
                if (n)for (; o > s; s++)if (e = i[s].id, n[e] && this.pointInPolygon(t, n[e]))return i[s]
            },
            getAppartmentCenterXY: function (t, e) {
                e = e || this.getProp("data_type");
                {
                    var i = this.DATA[e].masks;
                    this.mapScaleFactor
                }
                return i[t] ? this.centerOfPolygon(i[t]) : [0, 0]
            },
            getAppartmentsByFloor: function (t) {
                if (0 > t)return [];
                var e = this.FLOOR_DATA[t];
                return e ? e : (e = t > 3 ? s.map(this.DATA.parking.data, function (e) {
                    return Math.abs(e.floor - 3) == t ? e : void 0
                }) : s.map(this.DATA.apartment.data, function (e) {
                    return e.floor - 1 == t ? e : void 0
                }), e.length && (this.FLOOR_DATA[t] = e), e)
            },
            pointInPolygon: function (t, e) {
                for (var i = t[0], n = t[1], s = !1, o = 0, a = e.length - 1; o < e.length; a = o++) {
                    var r = e[o][0], l = e[o][1], h = e[a][0], c = e[a][1], d = l > n != c > n && (h - r) * (n - l) / (c - l) + r > i;
                    d && (s = !s)
                }
                return s
            },
            centerOfPolygon: function (t) {
                for (var e = 0, i = 0, n = 0, s = t.length; s > n; n++)e += t[n][0], i += t[n][1];
                return [Math.round(e / s), Math.round(i / s)]
            },
            getAppartmentOverlay: function (t) {
                var e, i, n = this.DATA[this.getProp("data_type")].masks[t], s = this.DATA[this.getProp("data_type")].data_indexed[t];
                return s.overlay ? s.overlay : n ? (i = '<svg class="status-' + s.status + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M', i += $.map(n, function (t) {
                    return t.join(",")
                }).join(" L"), i += ' Z" /></g></svg>', e = $(i), e.animCSS({opacity: 1}, !0), this.bgContainer.append(e), this.DATA[this.getProp("data_type")].data_indexed[t].overlay = e, e) : null
            },
            getAppartmentTextOverlay: function (t, e) {
                e = e || this.getProp("data_type");
                var i = this.DATA[e].data_indexed[t];
                if (i.text)return i.text;
                var n, o, a, r = "en" == LOCALE ? !0 : !1, l = "label-" + e;
                return n = "parking" === e ? null : s.formatNumber(i.totalArea), a = 200 == i.status ? r ? "reserved" : "резерв" : i.statusName, o = '<div class="label hidden ' + l + '"><span>' + i.id + "</span>" + (n ? '<small class="sold">' + n + " <small>m</small><sup>2</sup></small>" : "") + '<small class="status-name">' + a + "</small></div>", o = $(o), o.animCSS({opacity: 0}, !0), this.el.find(".floor-texts").append(o), this.DATA[e].data_indexed[t].text = o, o
            },
            getIconsByFloor: function (t) {
                return this.ICONS[t] ? this.ICONS[t] : []
            },
            onIconClick: function (t) {
                var e, i = $(t.currentTarget), n = this.getProp("floor"), s = i.attr("data-title"), o = i.data("floor-icon-popup");
                o || (e = $("<div/>", {"class": "close-btn"}), e.on($.support.clickEvent, function (t) {
                    t.stopPropagation(), o.removeClass("active"), i.removeClass("active")
                }.bind(this)), o = $("<div/>", {
                    "class": "floor-icon-popup",
                    html: s
                }), o.append(e), i.data("floor-icon-popup", o), this.elTexts.append(o)), o.animCSS({
                    top: i.position().top + "px",
                    left: i.position().left + "px",
                    scaleX: this.mapScaleFactor,
                    scaleY: this.mapScaleFactor,
                    translateY: "-100%"
                }), $.each(this.ICONS[n], function (t, e) {
                    var i = e.data("floor-icon-popup");
                    i && i.removeClass("active"), e.removeClass("active")
                }), o.addClass("active"), i.addClass("active")
            },
            handleDragStart: function (t) {
                var e = this.mapPositionOffset;
                t.store.offset = [].concat(e)
            },
            handleDragMove: function (t) {
                var e = this.mapPositionBounds, i = 0;
                this.getChildWidget("sidebar").getProp("appartment") && this.getChildWidget("sidebar").getProp("active") && (i = -320);
                var n = [Math.min(Math.max(i, t.store.offset[0] - t.deltaXY[0]), e[0]), Math.min(Math.max(0, t.store.offset[1] - t.deltaXY[1]), e[1])];
                this.bgContainer.animCSS({
                    translateX: -n[0] + "px",
                    translateY: -n[1] + "px"
                }), this.elTexts.animCSS({
                    translateX: -n[0] + "px",
                    translateY: -n[1] + "px"
                }), this.mapPositionOffset = n
            },
            uiUpdateSize: function (t) {
                this.el.animCSS({height: $.contentSize()[1] + "px"});
                var e, i = $.contentSize(), s = n(i[0], i[1], this.IMAGE_WIDTH, this.IMAGE_HEIGHT, 0), o = this.mapPositionOffset;
                s = [Math.max(s.width, this.IMAGE_WIDTH), Math.max(s.height, this.IMAGE_HEIGHT)], e = [s[0] - i[0], s[1] - i[1]];
                var a = e[0];
                this.getChildWidget("sidebar").getProp("appartment") && this.getChildWidget("sidebar").getProp("active") && (a = -320), o = [Math.min(Math.max(a, o[0]), e[0]), Math.min(Math.max(0, o[1]), e[1])], this.mapSize = s, this.mapPositionBounds = e, this.mapPositionOffset = o, this.mapScaleFactor = s[0] / this.IMAGE_WIDTH, this.bgImages.animCSS({
                    width: this.IMAGE_WIDTH + "px",
                    height: this.IMAGE_HEIGHT + "px"
                }), this.bgContainer[t ? "anim" : "animCSS"]({
                    width: this.IMAGE_WIDTH + "px",
                    height: this.IMAGE_HEIGHT + "px",
                    scaleX: this.mapScaleFactor,
                    scaleY: this.mapScaleFactor,
                    translateX: -o[0] + "px",
                    translateY: -o[1] + "px"
                }), this.elTexts[t ? "anim" : "animCSS"]({
                    translateX: -o[0] + "px",
                    translateY: -o[1] + "px"
                }), $.each(this.ICONS, function (e, i) {
                    i && $.each(i, function (e, i) {
                        var n = i.data("floor-icon-popup");
                        n && n.anim("stop")[t ? "anim" : "animCSS"]({
                            scaleX: this.mapScaleFactor,
                            scaleY: this.mapScaleFactor,
                            top: i.position().top + "px",
                            left: i.position().left + "px"
                        })
                    }.bind(this))
                }.bind(this)), this.slideOffset = [$.winSize()[0] - $.contentSize()[0], $.winSize()[1] - $.contentSize()[1]];
                var r, l, h, c, d, u;
                $.each(this.FLOOR_DATA, function (t, e) {
                    r = t > 3 ? "parking" : "apartment", $.each(e, function (t, e) {
                        l = e.id, h = this.getAppartmentTextOverlay(l, r), c = this.getAppartmentCenterXY(l, r), d = c[0] * this.mapScaleFactor + "px", u = c[1] * this.mapScaleFactor + "px", h.animCSS({
                            translateX: c[0] * this.mapScaleFactor + "px",
                            translateY: c[1] * this.mapScaleFactor + "px"
                        })
                    }.bind(this))
                }.bind(this))
            },
            uiChangeFloorPlan: function (t, e) {
                var i = $('<img alt="" class="front" />').attr("src", this.IMAGES[t]), n = this.bgImages;
                i.animCSS({
                    width: this.IMAGE_WIDTH + "px",
                    height: this.IMAGE_HEIGHT + "px",
                    opacity: 0
                }, !0), i.anim({opacity: 1}, {
                    duration: 250, complete: function () {
                        n.remove(), i.removeClass("front"), this.bgImages = i
                    }.bind(this)
                }), this.bgImages = this.bgImages.add(i), this.bgContainer.append(i), this.elFloorNav.filter('[data-floor="' + t + '"]').addClass("active"), this.elFloorNav.filter('[data-floor="' + e + '"]').removeClass("active"), $.each(this.getAppartmentsByFloor(t), function (t, e) {
                    var i = this.getAppartmentOverlay(e.id);
                    return i && i.anim("stop").removeClass("hidden").anim({opacity: .7}, {
                        duration: 250,
                        delay: 250
                    }), e.text ? (e.text.css("opacity", "1").removeClass("hidden"), void 0) : (this.uiHighlightAppartment(e.id, !1, !0), void 0)
                }.bind(this)), $.each(this.getAppartmentsByFloor(e), function (t, e) {
                    if (e.overlay) {
                        var i = e.overlay;
                        i.attr("class", i.attr("class").replace("selected", "")), i.anim("stop").anim({opacity: 0}, {
                            duration: 250,
                            complete: function () {
                                i.addClass("hidden")
                            }
                        }), e.text.css("opacity", "0")
                    }
                }), $.each(this.getIconsByFloor(e), function (t, e) {
                    e.data("floor-icon-popup") && e.data("floor-icon-popup").removeClass("active"), e.anim("stop").anim({opacity: 0}, {
                        duration: 250,
                        complete: function () {
                            e.addClass("hidden").removeClass("active")
                        }
                    })
                }), $.each(this.getIconsByFloor(t), function (t, e) {
                    e.anim("stop").removeClass("hidden").anim({opacity: 1}, {duration: 250})
                })
            },
            uiChangeHighlight: function (t, e) {
                var i;
                t && (i = this.getAppartmentOverlay(t), i.attr("class", i.attr("class") + " selected")), e && (i = this.getAppartmentOverlay(e), i.attr("class", i.attr("class").replace("selected", "")))
            },
            uiHighlightAppartment: function (t, e, i) {
                var n, s, o, a;
                if (t && (n = this.getAppartmentOverlay(t), o = this.getAppartmentById(t), n)) {
                    {
                        parseFloat(n.css("opacity")).toFixed(2)
                    }
                    300 == o.status ? this.el.find(".floor-plan").removeClass("cursor") : this.el.find(".floor-plan").addClass("cursor"), i || 300 == o.status || n.removeClass("hidden").anim({opacity: .7}, {duration: 250}), s = this.getAppartmentTextOverlay(t), a = this.getAppartmentCenterXY(t), s && a && (s.animCSS({
                        translateX: a[0] * this.mapScaleFactor + "px",
                        translateY: a[1] * this.mapScaleFactor + "px"
                    }), "1" == s.css("opacity") ? s.stop().animate({height: "60px", top: "-28px"}, {
                        duration: 250,
                        complete: function () {
                            s.removeClass("hidden")
                        }
                    }) : s.anim("stop").removeClass("hidden").anim({opacity: 1}, {duration: 250}))
                }
                e && (o = this.DATA[this.getProp("data_type")].data_indexed[e], n = o.overlay, n && (n.anim("stop").anim({opacity: .7}, {
                    duration: 250,
                    complete: function () {
                        n.addClass("hidden")
                    }
                }), s = o.text, s && s.stop().animate({height: "20px", top: "-8px"}, {
                    duration: 250,
                    complete: function () {
                    }
                })))
            },
            uiInitialAnimations: function () {
                var t = $.contentSize();
                if (t[0] >= 1100 || this.is_mobile)return !1;
                this.instructions.show();
                var e = this.mapPositionOffset;
                setTimeout(function () {
                    this.instructions.addClass("drag-right"), this.bgContainer.anim({translateX: "0px"}, {duration: 700})
                }.bind(this), 1e3), setTimeout(function () {
                    this.instructions.removeClass("drag-right").addClass("drag-left"), this.bgContainer.anim({translateX: -e[0] + "px"}, {duration: 700})
                }.bind(this), 2e3), setTimeout(function () {
                    this.instructions.fadeOut(300, function () {
                        this.instructions.removeClass("drag-right")
                    }.bind(this))
                }.bind(this), 3e3)
            }
        })
    }, {
        "./../../components/plugins/cover": 13,
        "./../../components/plugins/debounce": 14,
        "./../../components/plugins/utils": 27,
        "./../../components/widgets/slide": 39
    }],
    60: [function (t, e) {
        var i = t("./../components/widgets/button");
        e.exports = i.extend({
            animation: [5, 14, 7, 9, 5], animationNodes: null, init: function (t, e) {
                this._super(t, e);
                var i = this.animation, n = 0, s = i.length;
                for (this.animationNodes = this.el.find("rect"); s > n; n++)this.animationNodes.eq(n).animProp({bar: i[n]})
            }, uiTransitionActive: function (t) {
                t ? this.uiIconAnimationNext() : this.stopTimer()
            }, uiIconAnimationNext: function () {
                for (var t = 14, e = 5, i = this.animation, n = [].concat(i), s = i[0], o = 0, a = 0, r = 150; 2 > o || o > 4;)s = Math.round((t - e) * Math.random()) + e, o = Math.abs(i[0] - s);
                for (i.pop(), i.unshift(s); 5 > a; a++)this.animationNodes.eq(a).anim("stop").anim({bar: [i[a], n[a]]}, {
                    duration: r,
                    easing: "linear",
                    progress: this.uiIconProgress
                });
                this.getProp("active") && this.startTimer(this.uiIconAnimationNext, r)
            }, uiIconProgress: function (t, e, i) {
                var n = 14, s = 9;
                if (i.bar) {
                    var o = parseInt(i.bar);
                    t.setAttribute("height", o), t.setAttribute("y", n - o + s)
                }
            }
        })
    }, {"./../components/widgets/button": 33}],
    61: [function (t, e) {
        var i = t("./../components/widgets/base");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.getChildWidget("menu-button").on($.support.clickEvent, this.toggleMenu.bind(this)), this.getChildWidget("sound-button").on($.support.clickEvent, this.toggleAudio.bind(this)), this.updateUI(!1), !$.support.mobile.any && this.getAudioPlaybackState() && this.playAudio(), this.phoneLink = this.el.find(".phone"), this.phoneLink.on($.support.clickEvent, this.handlePhoneClick.bind(this))
            }, saveAudioPlaybackState: function (t) {
                localStorage.setItem("playAudio", String(t))
            }, getAudioPlaybackState: function () {
                var t = localStorage.getItem("playAudio");
                return "0" !== t
            }, home: function (t) {
                var e = Widgets.getById("controller");
                e.setProp("slide", "main"), t && t.preventDefault && t.preventDefault()
            }, toggleMenu: function () {
                var t = !this.getProp("menuActive");
                this.setProp("menuActive", t);
                var e = Widgets.getById("menu");
                e.setProp("active", t)
            }, getInitialState: function () {
                return $.extend(this._super(), {menuActive: !1, logoVisible: !1})
            }, handlePropChange: function (t, e) {
                "menuActive" === t ? this.el.find(".align-right").toggleClass("menu-active", e) : "logoVisible" === t && this.updateUI(!0)
            }, handlePhoneClick: function (t) {
                $.support.touch || t.preventDefault()
            }, updateUI: function (t) {
                var e, i = this.getProp("logoVisible"), n = this.el.find(".logo"), s = this.getProp("orientation");
                "landscape" === s ? (n.anim("stop"), n[t ? "anim" : "animCSS"]({
                    opacity: i ? [1, 0] : [0, 1],
                    translateY: i ? ["0px", "100px"] : ["0px", "0px"]
                }, {
                    duration: 750,
                    easing: "ease-in-out"
                })) : (e = $.support.mobile.phone ? 0 : Math.round(1.2 * $.winSize()[0]), n.anim("stop"), n[t ? "anim" : "animCSS"]({
                    opacity: i ? [1, 0] : [0, 1],
                    translateX: i ? ["0px", e + "px"] : [e + "px", "0px"]
                }, {duration: 750, easing: "ease-in-out"}))
            }, audioElement: null, audioIsPlaying: !1, audioIsPaused: !1, initAudio: function () {
                if (!this.audioElement) {
                    var t = $('<audio loop><source src="./case02_files/InnerWarmth.ogg" type="audio/ogg"><source src="./case02_files/InnerWarmth.mp3" type="audio/mpeg"></audio>');
                    t.appendTo(document.body), this.audioElement = t.get(0)
                }
                window.onbeforeunload = function () {
                    localStorage.setItem("currentPlaybackTime", t.get(0).currentTime)
                }
            }, toggleAudio: function () {
                !this.audioElement || this.audioElement.paused ? this.playAudio() : this.stopAudio()
            }, playAudio: function () {
                this.audioElement || this.initAudio();
                var t = localStorage.getItem("currentPlaybackTime"), e = this.audioElement.duration;
                t && (e ? this.audioElement.currentTime = t : $(this.audioElement).one("canplay", $.proxy(function () {
                    this.audioElement.currentTime = t
                }, this))), this.audioIsPlaying = !0, this.audioIsPaused = !1, this.audioElement.play(), this.saveAudioPlaybackState(1), this.startTimer(function () {
                    this.audioElement.paused || Widgets.getById("sound-button").setProp("active", !0)
                })
            }, resumeAudio: function () {
                this.audioIsPaused && (this.audioIsPlaying = !0, this.audioIsPaused = !1, this.audioElement.play(), Widgets.getById("sound-button").setProp("active", !0))
            }, pauseAudio: function () {
                this.audioElement && !this.audioElement.paused && (this.audioIsPlaying = !1, this.audioIsPaused = !0, this.audioElement.pause(), Widgets.getById("sound-button").setProp("active", !1))
            }, stopAudio: function () {
                this.audioIsPlaying && (this.audioIsPlaying = !1, this.audioIsPaused = !1, this.audioElement.pause(), this.saveAudioPlaybackState(0), Widgets.getById("sound-button").setProp("active", !1))
            }
        })
    }, {"./../components/widgets/base": 31}],
    62: [function (t, e) {
        function i() {
            "undefined" != typeof google && "undefined" != typeof google.maps ? o.resolve() : o.tries > 0 ? (o.tries--, setTimeout(i, 16)) : o.reject()
        }

        var n, s = t("./../../components/widgets/section"), o = window.GoogleMapsReady = $.Deferred();
        o.tries = 125, i(), o.done(function () {
            n = t("./../../components/plugins/gmap.infobox")
        }), t("./../../components/plugins/jquery.mousewheel.js"), t("./../../components/plugins/jquery.scrollbar.js"), e.exports = s.extend({
            zoom: 14,
            maxZoom: 18,
            circleRadiusOnMaxZoom: .03875,
            halfCircleSeparator: 625e-7,
            markersImagesPath: "./case02_files/",
            mapMarkers: {},
            mapCircles: [],
            mapCirclesLabels: {},
            mapFillColorRect: null,
            maxDistance: 0,
            retina: !1,
            categoryDragging: !1,
            init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.map = this.el.find(".map"), this.controls = this.map.siblings(".map-controls"), window.devicePixelRatio > 1 && (this.markersImagesPath = "./case02_files/", this.retina = !0), this.controls && (this.controls.find('a[data-action="map-zoomin"]').on($.support.clickEvent, this.mapZoomIn.bind(this)), this.controls.find('a[data-action="map-zoomout"]').on($.support.clickEvent, this.mapZoomOut.bind(this))), this.sidebar = this.el.find(".places-menu"), this.categoriesWrapper = this.sidebar.find(".places-categories"), this.categories = this.categoriesWrapper.find("li"), this.placesWrapper = this.sidebar.find(".places"), this.places = this.placesWrapper.find("ul"), this.categories.on($.support.clickEvent, this.handleCategoryClick.bind(this)), this.toggleButton = this.el.find(".sidebar-toggle"), this.toggleButton.on($.support.clickEvent, this.toggleSidebar.bind(this)), this.scrollable = this.getChildWidget("scrollable"), this.is_mobile = matchMedia("(max-width: 979px) and (max-height: 415px) and (orientation: landscape), (max-width: 668px)").matches, this.initPlacesMenuTransition(), o.done($.proxy(function () {
                    this.mapCenter = new google.maps.LatLng(55.743654, 37.288017), this.initMap(), this.ifHash()
                }, this)), $.contentSize.on("resize", this.onContentResize.bind(this)), this.is_mobile && this.initMobileCategoryScroll()
            },
            ifHash: function () {
                var t, e, i = document.location.hash;
                i && (t = i.replace("#", ""), e = this.categories.filter('[data-place="' + t + '"]'), e.get(0) && (this.setProp(t), this.toggleSidebar(), e.trigger($.support.clickEvent)))
            },
            getInitialState: function () {
                return $.extend(this._super(), {
                    category: "",
                    place: "",
                    sidebarState: !1,
                    placesMenuState: !1,
                    placesMenuAnimation: !1
                })
            },
            handlePropChange: function (t, e, i) {
                "orientation" === t ? document.location.reload() : "category" == t ? this.handleCategoryChange(e, i) : "place" == t ? this.handlePlaceChange(e, i) : "sidebarState" == t && this.handleSidebarStateChange(e)
            },
            isTabletPortrait: function () {
                return matchMedia("(min-width: 668px) and (max-width: 979px) and (min-height: 416px)").matches && "portrait" == this.getProp("orientation")
            },
            initMap: function () {
                var t = {
                    center: this.mapCenter,
                    zoom: this.zoom,
                    maxZoom: this.maxZoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: !0,
                    styles: [{stylers: [{visibility: "off"}]}, {
                        featureType: "water",
                        elementType: "geometry.fill",
                        stylers: [{visibility: "on"}, {color: "#688193"}]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry.fill",
                        stylers: [{visibility: "on"}, {color: "#475563"}]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{visibility: "on"}, {color: "#5b6f7f"}]
                    }, {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{visibility: "on"}, {color: "#1d2730"}]
                    }, {
                        featureType: "road",
                        elementType: "labels.text.stroke",
                        stylers: [{visibility: "on"}, {color: "#688193"}]
                    }, {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{visibility: "on"}, {color: "#6a89a3"}]
                    }, {featureType: "poi", elementType: "labels", stylers: [{visibility: "on"}]}, {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{visibility: "on"}, {color: "#1d2730"}]
                    }, {
                        featureType: "poi",
                        elementType: "labels.text.stroke",
                        stylers: [{visibility: "on"}, {color: "#688193"}]
                    }, {
                        featureType: "poi",
                        elementType: "labels.icon",
                        stylers: [{hue: "#0099ff"}, {visibility: "on"}]
                    }]
                };
                this.gMap = new google.maps.Map(this.map.get(0), t), google.maps.event.addListener(this.gMap, "zoom_changed", this.handleMapZoomChange.bind(this)), this.is_mobile && google.maps.event.addListener(this.gMap, "click", function () {
                    this.getProp("sidebarState") && this.toggleSidebar()
                }.bind(this)), this.calculateDistanceToPlaces(), this.drawCircles(), this.initMapMarkers()
            },
            handleMapZoomChange: function () {
                this.drawCircles()
            },
            drawCircles: function () {
                for (var t = this.circleRadiusOnMaxZoom, e = 0; e < this.maxZoom - this.gMap.getZoom(); e++)t *= 2;
                for (var i = {
                    path: "M 0,-4 0,1",
                    strokeOpacity: .5,
                    strokeColor: "#dddedb",
                    scale: 2
                }, n = Math.ceil(this.maxDistance / 1e3), s = this.mapCircles.length > 0, o = 0; n > o; o++) {
                    var a, r, l, h, c, d;
                    1 & o ? l = this.drawCircle(this.mapCenter, t + t * o, 1) : (a = this.drawHalfCircle(this.mapCenter, t + t * o, 1, o), r = this.drawHalfCircle(this.mapCenter, t + t * o, -1, o)), s ? 1 & o ? this.mapCircles[o].circle.setPath(l) : (this.mapCircles[o].top.setPath(a), this.mapCircles[o].bot.setPath(r)) : (1 & o ? d = new google.maps.Polyline({
                        path: l,
                        strokeOpacity: 0,
                        icons: [{icon: i, offset: "0", repeat: "25px"}],
                        map: this.gMap,
                        zIndex: 2
                    }) : (h = new google.maps.Polyline({
                        path: a,
                        strokeOpacity: 0,
                        icons: [{icon: i, offset: "0", repeat: "25px"}],
                        map: this.gMap,
                        zIndex: 2
                    }), c = new google.maps.Polyline({
                        path: r,
                        strokeOpacity: 0,
                        icons: [{icon: i, offset: "0", repeat: "25px"}],
                        map: this.gMap,
                        zIndex: 2
                    })), this.mapCircles.push({top: h, bot: c, circle: d}))
                }
            },
            drawHalfCircle: function (t, e, i, s) {
                var o, a, r = Math.PI / 180, l = 180 / Math.PI, h = 3963, c = 128, d = e / h * l, u = d / Math.cos(t.lat() * r), p = [];
                1 == i ? (o = 0, a = Math.ceil((c + 1) / 2)) : (o = c, a = Math.floor(o / 2) - 1);
                for (var f = this.halfCircleSeparator, g = 0; g < this.maxZoom - this.gMap.getZoom(); g++)f *= 2;
                s in this.mapCirclesLabels || (this.mapCirclesLabels[s] = []);
                for (var m = o; 1 == i ? a > m : m > a; m += i) {
                    var v = Math.PI * (m / (c / 2));
                    ey = t.lng() + u * Math.cos(v), ex = t.lat() + d * Math.sin(v), 1 == i ? ex += f : ex -= f;
                    var y = new google.maps.LatLng(ex, ey);
                    if (p.push(y), 1 == i && (m == o || m == a - 1)) {
                        var b, x = !1;
                        Object.keys(this.mapCirclesLabels[s]).length >= 2 && (x = !0);
                        var w = Math.round(google.maps.geometry.spherical.computeDistanceBetween(this.mapCenter, y)), C = (w / 1e3).toFixed(1).replace(".", ","), S = document.createElement("div");
                        if (S.innerHTML = C, x)b = this.mapCirclesLabels[s][m == o ? "top" : "bot"], b.setPosition(y), b.setContent(S); else {
                            var P = {
                                disableAutoPan: !0,
                                position: y,
                                maxWidth: 0,
                                zIndex: 1,
                                boxClass: "gmap-info-distance",
                                pane: "floatPane",
                                closeBoxURL: "",
                                enableEventPropagation: !1,
                                pixelOffset: new google.maps.Size(0, 7)
                            };
                            P.content = S, b = new n(P), b.open(this.gMap), this.mapCirclesLabels[s][m == o ? "top" : "bot"] = b
                        }
                    }
                }
                return p
            },
            drawCircle: function (t, e, i) {
                var n, s, o = Math.PI / 180, a = 180 / Math.PI, r = 3963, l = 128, h = e / r * a, c = h / Math.cos(t.lat() * o), d = [];
                1 == i ? (n = 0, s = l + 1) : (n = l + 1, s = 0);
                for (var u = n; 1 == i ? s > u : u > s; u += i) {
                    var p = Math.PI * (u / (l / 2));
                    ey = t.lng() + c * Math.cos(p), ex = t.lat() + h * Math.sin(p), d.push(new google.maps.LatLng(ex, ey))
                }
                return d
            },
            initMapMarkers: function () {
                var t = this, e = {
                    url: this.markersImagesPath + "home.png",
                    size: null,
                    origin: null,
                    anchor: null,
                    scaledSize: this.retina ? new google.maps.Size(59, 61) : null
                }, i = new google.maps.Marker({
                    position: this.mapCenter,
                    map: this.gMap,
                    icon: e,
                    zIndex: 1
                }), n = {marker: i, place: this.mapCenter};
                this.places.each(function () {
                    var e = $(this).data("place");
                    e in t.mapMarkers || (t.mapMarkers[e] = []), $(this).children("li").each(function () {
                        var s = new google.maps.LatLng($(this).data("lat"), $(this).data("long")), o = {
                            url: t.markersImagesPath + e + ".png",
                            size: null,
                            origin: null,
                            anchor: null,
                            scaledSize: t.retina ? new google.maps.Size(59, 61) : null
                        }, a = new google.maps.Marker({position: s, map: t.gMap, icon: o, zIndex: 1}), r = {
                            marker: a,
                            place: $(this),
                            category: e
                        };
                        google.maps.event.addListener(a, "click", t.handleMarkerClick.bind(t, r)), google.maps.event.addListener(i, "click", t.handleMarkerMouseOver.bind(t, n)), google.maps.event.addListener(t.gMap, "click", t.handleMarkerMouseOut.bind(t, r)), $(this).on($.support.clickEvent, t.handlePlaceClick.bind(t, r)), t.mapMarkers[e].push(r)
                    })
                })
            },
            calculateDistanceToPlaces: function () {
                var t = this;
                this.places.each(function () {
                    $(this).children("li").each(function () {
                        var e = new google.maps.LatLng($(this).data("lat"), $(this).data("long")), i = Math.round(google.maps.geometry.spherical.computeDistanceBetween(t.mapCenter, e));
                        t.maxDistance = Math.max(t.maxDistance, i);
                        var n;
                        n = 1e3 > i ? i + " м" : (i / 1e3).toFixed(1).replace(".", ",") + " км";
                        var s = $("<div/>", {"class": "distance", text: n});
                        $(this).append(s)
                    })
                })
            },
            handleMarkerMouseOver: function (t) {
                this.changeMarkerState(t.marker, t.category, !0), this.showInfoWindow(t.place)
            },
            handleMarkerMouseOut: function (t) {
                return this.is_mobile || this.getProp("sidebarState") && this.getProp("placesMenuState") ? !1 : (this.changeMarkerState(t.marker, t.category, !1), this.closeInfoWindow(), void 0)
            },
            handleMarkerClick: function (t) {
                this.getProp("placesMenuAnimation") || (this.setProp("place", t.place), this.changeMarkerState(t.marker, t.category, !0))
            },
            handlePlaceClick: function (t) {
                if (!this.scrollable.dragging) {
                    this.setProp("place", t.place), this.changeMarkerState(t.marker, t.category, !0);
                    var e = new google.maps.LatLng(t.place.data("lat"), t.place.data("long"));
                    this.centerMap(e)
                }
            },
            handleCategoryChange: function (t) {
                if (!this.getProp("placesMenuAnimation")) {
                    this.sidebar.addClass("category-active"), this.categories.removeClass("active"), this.categories.filter("[data-place=" + t + "]").addClass("active");
                    for (var e in this.mapMarkers)this.mapMarkers[e].forEach(function (t) {
                        this.changeMarkerState(t.marker, e, !1)
                    }.bind(this));
                    this.uiTransitionPlacesMenu(this.places.filter("[data-place=" + t + "]"));
                    var i = {width: ["50%", this.getProp("placesMenuState") ? "50%" : "25%"]};
                    this.is_mobile && "portrait" == this.getProp("orientation") ? i.width = ["78%", this.getProp("placesMenuState") ? "78%" : "65%"] : this.is_mobile && (i.width = ["84%", this.getProp("placesMenuState") ? "84%" : "84%"]), this.sidebar.anim(i, {
                        duration: 600,
                        easing: "ease-in-out-quart",
                        complete: function () {
                            if (this.doMapFitBounds) {
                                var e = new google.maps.LatLngBounds;
                                this.mapMarkers[t].forEach(function (t) {
                                    e.extend(t.marker.getPosition()), t.marker.setZIndex(3)
                                }), this.is_mobile || this.fitMapBounds(e), this.doMapFitBounds = !1
                            }
                            this.updateScrollable()
                        }.bind(this)
                    })
                }
            },
            fitMapBounds: function (t) {
                this.gMap.fitBounds(t)
            },
            handleCategoryClick: function (t) {
                if (!this.getProp("placesMenuAnimation")) {
                    if (this.is_mobile) {
                        if (this.categoryDragging)return
                    } else this.uiTransitionMap(50, !0);
                    {
                        var e = $(t.currentTarget).data("place");
                        this.getProp("category")
                    }
                    this.doMapFitBounds = !0, this.setProp("place", null), this.setProp("category", e), this.setProp("placesMenuState", !0), this.changeMarkerState(this.mapMarkers[e], e, !0)
                }
            },
            handlePlaceChange: function (t, e) {
                if (e && !t) {
                    this.togglePlace(e, !1), prevCat = e.parent().data("place"), this.closeInfoWindow();
                    for (var i in this.mapMarkers)this.mapMarkers[prevCat].forEach(function (t) {
                        this.changeMarkerState(t.marker, prevCat, !1)
                    }.bind(this))
                }
                if (e && this.togglePlace(e, !1), t) {
                    var n = t.closest("ul").data("place"), s = this.getProp("category");
                    this.setProp("category", n);
                    for (var i in this.mapMarkers)this.mapMarkers[i].forEach(function (t) {
                        this.changeMarkerState(t.marker, i, !1)
                    }.bind(this));
                    s && s == n && this.togglePlace(t, !0), this.showInfoWindow(t)
                }
            },
            changeMarkerState: function (t, e, i) {
                var n, s;
                if (e) {
                    var o = i ? "-active.png" : ".png";
                    n = i ? 5 : 1, s = {
                        url: this.markersImagesPath + e + o,
                        size: null,
                        origin: null,
                        anchor: null,
                        scaledSize: this.retina ? new google.maps.Size(59, 61) : null
                    }, t.constructor === Array ? t.forEach(function (t) {
                        t.marker.setIcon(s), t.marker.setZIndex(n)
                    }) : (t.setIcon(s), t.setZIndex(n))
                }
            },
            centerMap: function (t) {
                this.gMap.panTo(t)
            },
            closeInfoWindow: function () {
                this.infoBox instanceof n && this.infoBox.close()
            },
            showInfoWindow: function (t) {
                this.closeInfoWindow();
                var e = "function" == typeof t.data, i = e ? t.data("lat") : t.k, s = e ? t.data("long") : t.D, o = new google.maps.LatLng(i, s), a = {
                    disableAutoPan: !1,
                    position: o,
                    maxWidth: 0,
                    zIndex: 100,
                    boxClass: "gmap-infobox",
                    alignBottom: !0,
                    pane: "floatPane",
                    closeBoxURL: "",
                    enableEventPropagation: !1,
                    pixelOffset: new google.maps.Size(-40, -70)
                }, r = e ? t.find(".title").text() : '<img width="79px" src="./case02_files/header/level-logo-light.png">', l = document.createElement("div");
                if (this.getProp("sidebarState")) {
                    l.className = "map-info-window map-info-window-small";
                    var h = e ? t.find(".title").text() : r;
                    l.innerHTML = "<h2>" + h + "</h2>"
                } else {
                    var c = e ? t.find(".address").text() : "ru" == window.locale ? "здесь вы живёте" : "you live here";
                    l.className = "map-info-window", l.innerHTML = "<h2>" + r + '</h2><div class="address">' + c + "</div>";
                    var d = document.createElement("div");
                    d.className = "more", e && l.appendChild(d), a.closeBoxURL = this.retina ? "./case02_files/close-infobox.png" : "./case02_files/close-infobox.png", a.closeBoxMargin = "0", google.maps.event.addDomListener(d, "click", this.handleInfoBoxClick.bind(this))
                }
                a.content = l, this.infoBox = new n(a), this.infoBox.open(this.gMap), google.maps.event.addListener(this.infoBox, "closeclick", this.handleInfoBoxClose.bind(this))
            },
            handleInfoBoxClose: function () {
                this.setProp("place", null)
            },
            handleInfoBoxClick: function (t) {
                t.stopPropagation(), this.setProp("placesMenuState", !0), this.setProp("sidebarState", !0)
            },
            handleSidebarStateChange: function (t) {
                this.uiTransitionSidebar(t, !0);
                var e = 100;
                if (t ? (this.toggleButton.addClass("toggled"), e = 75, "" !== this.getProp("category") && (e = 50)) : this.toggleButton.removeClass("toggled"), this.getProp("place")) {
                    var i = this.getProp("place");
                    this.showInfoWindow(i);
                    var n = new google.maps.LatLng(i.data("lat"), i.data("long"));
                    this.centerMap(n)
                }
                this.is_mobile || this.uiTransitionMap(e, !0)
            },
            toggleSidebar: function () {
                this.setProp("sidebarState", !this.getProp("sidebarState"))
            },
            updateScrollable: function () {
                this.scrollable.updateUI()
            },
            initMobileCategoryScroll: function () {
                var t;
                this.categoriesWrapper.on("touchstart", function (e) {
                    t = e.originalEvent.touches[0].clientY, this.categoryDragging = !1
                }.bind(this)), this.categoriesWrapper.on("touchmove", function (e) {
                    this.categoryDragging = !0;
                    var i, n = e.originalEvent.changedTouches[0].clientY;
                    t > n + 5 ? i = "down" : n - 5 > t && (i = "up");
                    var s = this.categoriesWrapper, o = this.categoriesWrapper.innerHeight(), a = s.get(0).scrollHeight, r = s.scrollTop(), l = !1;
                    a > o && (l = !0), r >= a - o && "down" == i && (e.preventDefault(), l = !1, s.scrollTop(r - 1)), 0 >= r && "up" == i && (e.preventDefault(), l = !1, s.scrollTop(1)), l && e.stopPropagation()
                }.bind(this))
            },
            mapZoomIn: function () {
                this.gMap && this.gMap.setZoom(this.gMap.getZoom() + 1)
            },
            mapZoomOut: function () {
                this.gMap && this.gMap.setZoom(this.gMap.getZoom() - 1)
            },
            uiTransitionSidebar: function (t, e) {
                var i = this;
                this.sidebar.anim("stop", ["translateX"]);
                var n;
                !this.getProp("placesMenuState") || this.is_mobile || this.isTabletPortrait() || (n = Math.floor(this.sidebar.width() / 2), this.categoriesWrapper.animCSS({width: n + "px"}, !0), this.placesWrapper.animCSS({width: n + 1 + "px"}, !0)), t ? this.sidebar[e ? "anim" : "animCSS"]({translateX: ["0%", "-100%"]}, {
                    duration: 600,
                    easing: "ease-in-out-quart",
                    complete: function () {
                        i.getProp("placesMenuState") || i.is_mobile || i.isTabletPortrait() || (n = i.sidebar.width() + "px", i.categoriesWrapper.animCSS({width: n + "px"}, !0), i.placesWrapper.animCSS({width: n + 1 + "px"}, !0))
                    }
                }) : this.sidebar[e ? "anim" : "animCSS"]({translateX: ["-100%", "0%"]}, {
                    duration: 600,
                    easing: "ease-in-out-quart"
                })
            },
            initPlacesMenuTransition: function () {
                this.places.animCSS({translateX: "-100%"})
            },
            uiTransitionPlacesMenu: function (t) {
                var e = this;
                if (this.setProp("placesMenuAnimation", !0), this.places.filter(".active").length)this.places.filter(".active").anim({translateX: "-100%"}, {
                    duration: 300,
                    complete: function () {
                        $(this).removeClass("active"), t.addClass("active"), t.anim({translateX: "0%"}, {
                            duration: 300,
                            complete: e.onPlacesMenuTransitionEnd.bind(e)
                        })
                    }
                }); else {
                    if (t.addClass("active"), !this.is_mobile && !this.isTabletPortrait()) {
                        var i;
                        i = this.getProp("placesMenuState") ? Math.floor(this.sidebar.width() / 2) : this.sidebar.width(), this.categoriesWrapper.animCSS({width: i + "px"}, !0), this.placesWrapper.animCSS({width: i + 1 + "px"}, !0)
                    }
                    t.anim({translateX: "0%"}, {duration: 300, complete: this.onPlacesMenuTransitionEnd.bind(this)})
                }
            },
            uiTransitionMap: function (t, e) {
                this.map.anim("stop", ["left", "width"]), this.map[e ? "anim" : "animCSS"]({
                    left: 100 - t + "%",
                    width: t + "%"
                }, {duration: 600, easing: "ease-in-out-quart", complete: this.uiUpdateMapSize.bind(this)})
            },
            uiUpdateMapSize: function () {
                if (this.gMap) {
                    var t = this.gMap.getCenter();
                    google.maps.event.trigger(this.gMap, "resize"), this.centerMap(t)
                }
            },
            uiSizeChange: function () {
                this._super(), this.uiUpdateMapSize()
            },
            onContentResize: function () {
                if (this.updateScrollable(), !this.is_mobile)if (this.isTabletPortrait())this.getProp("placesMenuState") ? (this.categoriesWrapper.animCSS({width: "15%"}, !0), this.placesWrapper.animCSS({width: "85%"}, !0)) : (this.categoriesWrapper.animCSS({width: "100%"}, !0), this.placesWrapper.animCSS({width: "100%"}, !0)); else {
                    var t;
                    t = this.getProp("placesMenuState") ? Math.floor(this.sidebar.width() / 2) : this.sidebar.width(), this.categoriesWrapper.animCSS({width: t + "px"}, !0), this.placesWrapper.animCSS({width: t + 1 + "px"}, !0)
                }
            },
            onPlacesMenuTransitionEnd: function () {
                this.setProp("placesMenuState", !0), this.getProp("place") ? this.togglePlace(this.getProp("place"), !0) : (this.updateScrollable(), this.scrollable.setScrollPos(0)), this.setProp("placesMenuAnimation", !1)
            },
            scrollToPlace: function () {
                var t = this.getProp("place");
                if (t) {
                    var e = this.scrollable, i = e.elContent, n = (i.get(0).offsetHeight, e.el.scrollbar()), s = t.position().top;
                    s = Math.min(n.options.maxValue, Math.max(n.options.minValue, s)), e.scrollTo(s), n.value = s, n.updateDragable()
                }
            },
            togglePlace: function (t, e) {
                var i = this, n = t.find(".carousel");
                e ? (t.addClass("active"), n.length && n.anim({"max-height": ["500px", "0px"]}, {
                    complete: function () {
                        i.updateScrollable(), i.scrollToPlace()
                    }
                })) : (t.removeClass("active"), n.length && n.anim({"max-height": "0px"}, {
                    complete: function () {
                        i.updateScrollable()
                    }
                }))
            }
        })
    }, {
        "./../../components/plugins/gmap.infobox": 15,
        "./../../components/plugins/jquery.mousewheel.js": 19,
        "./../../components/plugins/jquery.scrollbar.js": 20,
        "./../../components/widgets/section": 38
    }],
    63: [function (t, e) {
        {
            var i = t("./../slide-controller");
            t("./../components/plugins/debounce")
        }
        e.exports = i.extend({
            NAME: "LandingSlideController",
            SLIDES: ["main", "1", "2", "3", "4"],
            init: function (t, e) {
                if (this._super(t, e), window.location.hash) {
                    var i = window.location.hash.substring(1), n = this.getChildWidget(i), s = n.getProp("id");
                    this.setProp("slide", s.substring(s.length - 1))
                }
            },
            handlePropChange: function (t, e, i) {
                "slide" === t ? ("2" === i && this.handleSecondSlideChange(), ("1" === e || "1" === i) && this.handleFirstSlideChange(), this.handleSlideChange(e, i), this.uiTransitionSlide(e, i)) : this._super(t, e, i)
            },
            handleSlideChange: function (t) {
                var e = this.getChildWidget("slide-" + t), i = e.el.attr("id");
                window.location.hash = i ? i : ""
            },
            handleFirstSlideChange: function () {
                var t = this.getChildWidget("slide-1"), e = t.getChildWidget("right"), i = Widgets.getById("header");
                e.on("propChange:slidepart", function (t, e) {
                    "active" == e.name && i.el.find(".align-right").toggleClass("ui-light", e.value)
                }.bind(this))
            },
            handleSecondSlideChange: function () {
                var t = this.getChildWidget("slide-2"), e = t.getChildWidget("map");
                e.getProp("active") && e.setProp("active", !1)
            }
        })
    }, {"./../components/plugins/debounce": 1, "./../slide-controller": 75}],
    64: [function (t, e) {
        {
            var i = t("./../../components/widgets/section");
            t("./../../components/plugins/debounce")
        }
        t("./../../components/plugins/jquery.mousestop.js"), e.exports = i.extend({
            NAME: "SlideEcoTech",
            init: function (t, e) {
                this._super(t, e), Widgets.init(this.el);
                var i = this.el, n = i.find(".icon-trigger"), s = n.find("a");
                this.wrapper = n, $.support.touch ? s.on($.support.clickEvent, this.onTouch.bind(this)) : (s.on("mouseenter", $.proxy(this.onMouseEnter, this)), s.on("mouseleave", $.proxy(this.onMouseLeave, this)))
            },
            onTouch: function (t) {
                t.stopPropagation()
            },
            onMouseEnter: function (t) {
                var e = $(t.currentTarget), i = this.wrapper.find("a").not(e), n = e.index() + 1;
                e.addClass("active"), i.anim({opacity: 0}), this.showIcon(n)
            },
            onMouseLeave: function () {
                var t = this.wrapper.find("a").not(".active");
                this.wrapper.find(".active").removeClass("active"), t.anim({opacity: 1}), this.hideIcon()
            },
            showIcon: function (t) {
                var e = this.el.find(".icons-lg"), i = e.find(".icon-" + t);
                i.fadeIn()
            },
            hideIcon: function () {
                var t = this.el.find(".icons-lg");
                t.find("figure:visible").hide()
            }
        })
    }, {
        "./../../components/plugins/debounce": 14,
        "./../../components/plugins/jquery.mousestop.js": 18,
        "./../../components/widgets/section": 38
    }],
    65: [function (t, e) {
        {
            var i = t("./../../components/widgets/base"), n = t("./../../components/widgets/slidepart"), s = n.prototype;
            t("./../../components/plugins/debounce")
        }
        e.exports = i.extend({
            PATH_DISTANCE: 18,
            init: function (t, e) {
                this._super(t, e), this.bgContainers = this.el.find(".bg"), this.bgVideo = $(), this.elSVGContainer = this.el.find(".svg"), this.elSVG = this.elSVGContainer.find("svg"), this.elSVGPath = this.elSVG.find("path"), this.elDistance = this.el.find(".duration"), this.getChildWidget("close-left").on($.support.clickEvent, this.handleCloseClick.bind(this)), this.getChildWidget("close-right").on($.support.clickEvent, this.handleCloseClick.bind(this)), this.el.find(".bgMap").animProp({translateX: "0%"}), $.support.touch || (this.el.find(".map-image-left").on("mouseenter", this.handleMouseEnterLeft.bind(this)), this.el.find(".map-image-right").on("mouseenter", this.handleMouseEnterRight.bind(this)), this.el.on("mousemove", this.handleMouseMove.bind(this)))
            },
            getInitialState: function () {
                return $.extend(this._super(), {active: null, position: 0})
            },
            handlePropChange: function (t, e, i) {
                "active" === t ? (e && (i ? this.uiUpdate(!0) : this.uiUpdate(!1)), e && !i && this.fadeIntoView(), !e && i && this.fadeOutOfView(i)) : "value" === t && this.uiUpdateValue(!0)
            },
            handleCloseClick: function () {
                this.setProp("active", null), this.initial = !1
            },
            handleMouseEnterLeft: function () {
                this.setProp("active", "left")
            },
            handleMouseEnterRight: function () {
                this.setProp("active", "right")
            },
            handleMouseMove: function (t) {
                var e, i = t.clientX / $.contentSize()[0], n = "left" === this.getProp("active") ? .55 : .45, s = -1, o = .2, a = 1 - 2 * o;
                i >= n && (i -= n, s = 1), i /= n, i = Math.min(Math.max(0, i - o), a) / a, e = 1e3 * (0 > s ? i - 1 : i), this.setProp("value", e)
            },
            uiUpdateValue: function (t, e) {
                e = e || this.getProp("value") || 0;
                var i, n = this.elDistance.find("div"), s = this.elDistance.find("span");
                i = Math.round(this.PATH_DISTANCE - this.PATH_DISTANCE * Math.abs(e) / 1e3), i = Math.min(this.PATH_DISTANCE, Math.max(1, i)), this.elSVGPath[t ? "anim" : "animCSS"]({
                    strokeDashoffset: e + "px",
                    "stroke-dashoffset": e + "px"
                }, {easing: "easeOutQuint"}), s.text(i), n.circleProgress({
                    startAngle: -Math.PI / 2,
                    value: i / 60,
                    size: 102,
                    thickness: 2,
                    fill: {color: "#465662"},
                    emptyFill: "rgba(0, 0, 0, 0)",
                    animation: {duration: 0}
                })
            },
            fadeIntoView: function () {
                var t = this.el;
                t.anim({opacity: [1, 0]}, {
                    duration: 500, begin: function () {
                        t.removeClass("hidden")
                    }
                })
            },
            fadeOutOfView: function (t) {
                var e = this.el, i = this.getParentWidget().getChildWidget(t), n = this.getParentWidget().getChildWidget("left" === t ? "right" : "left");
                n.setProp("animate", !1), i.setProp("animate", !1).setProp("active", !0).setProp("animate", !0), n.setProp("animate", !0), e.anim({opacity: 0}, {
                    duration: 500,
                    complete: function () {
                        e.addClass("hidden")
                    }
                })
            },
            getUISizes: function () {
                var t, e = this.getProp("active"), i = "left" === e ? "right" : "left", n = this.getParentWidget().getChildWidget(e), s = this.getParentWidget().getChildWidget(i);
                return t = {
                    active: $.extend({contentVisible: !0, mapOffset: "0%"}, n.getUISizes(!1, {
                        active: !0,
                        inactive: !1
                    })),
                    inactive: $.extend({
                        contentVisible: !1,
                        mapOffset: "left" === i ? "-18.19%" : "0%"
                    }, s.getUISizes(!1, {active: !1, inactive: !0}))
                }
            },
            uiUpdate: function (t) {
                var e = this.getProp("active"), i = "left" === e ? "right" : "left", n = this.getUISizes(), s = this.el;
                this.el = s.find(".map-image-" + e), this.applyUISizes(n.active, t), this.el = s, this.el = s.find(".map-image-" + i), this.applyUISizes(n.inactive, t), this.el = s, this.elSVGContainer.anim({translateX: "right" === e ? "-5.1%" : "5.1%"}, {duration: t ? 350 : 0}), this.el.find(".icon-home").anim({opacity: 1}, {duration: t ? 550 : 0}), this.el.find(".icon-office").anim({opacity: 1}, {duration: t ? 550 : 0}), this.initial ? this.uiUpdateValue(!1) : (this.uiUpdateValue(!1, 0), this.initial = !0)
            },
            applyUISizes: function (t, e) {
                if (t) {
                    t.contentVisible && this.applyUIValign(t, !1), this.applyUIContentSize(t, e), this.applyUIBackground(t, e);
                    var i = this.el.find(".content, footer, .bg-map"), n = this.el.find(".map-overlay"), s = this.el.find(".bg-map");
                    i.anim({opacity: t.contentVisible ? 1 : 0}, {
                        easing: "ease-in-out",
                        duration: e ? 350 : 0
                    }), n.anim({opacity: t.contentVisible ? 0 : 1}, {
                        easing: "ease-in-out",
                        duration: e ? 350 : 0
                    }), s.anim({translateX: t.mapOffset}, {duration: e ? 350 : 0})
                }
            },
            applyUIValign: s.applyUIValign,
            applyUIContentSize: s.applyUIContentSize,
            applyUIBackground: s.applyUIBackground
        })
    }, {
        "./../../components/plugins/debounce": 14,
        "./../../components/widgets/base": 31,
        "./../../components/widgets/slidepart": 40
    }],
    66: [function (t, e) {
        var i = t("./../../components/widgets/slidepart"), n = (t("./../../components/plugins/debounce"), t("./../../components/plugins/cover"));
        e.exports = i.extend({
            videoRatio: 1280 / 720, videoDuration: 3, videoCanPlay: !1, init: function (t, e) {
                this._super(t, e), this.spaceContent = this.el.find(".space-content .available"), this.videoOverlay = this.getParentWidget().el.find(".space-overlay-bottom"), this.video = this.videoOverlay.find("video"), this.buttonRight = this.getChildWidget("more-right"), this.buttonRight.on($.support.clickEvent, this.handleSpaceToggle.bind(this)), $.support.touch || (this.el.on("mousemove", this.handleMouseMove.bind(this)), this.videoOverlay.on("mousemove", this.handleMouseMove.bind(this))), Widgets.getById("controller").on("propChange:LandingSlideController", this.handleSlideChange.bind(this))
            }, handlePropChange: function (t, e, i) {
                if ("space" !== t && "spaceOverHalf" !== t && this.getProp("space"))return !1;
                if ("space" === t) {
                    var n = this.video.get(0);
                    e ? (this.setProp("spaceOverHalf", !0), this.setProp("active", !0), n.load(), n.play(), n.addEventListener("canplaythrough", this.onVideoCanPlay.bind(this))) : (this.videoCanPlay = !1, n.currentTime = n._currentTime = 0, n.pause()), this.el.toggleClass("hide-mark"), this.uiUpdate(!0), this.applyUISpace({space: e}, !0)
                } else this._super(t, e, i);
                ("space" === t || "spaceOverHalf" === t) && this.applyUISpaceOverHalf({
                    spaceOverHalf: this.getProp("spaceOverHalf"),
                    contentHidden: !this.getProp("spaceOverHalf") && this.getProp("space")
                }, !0)
            }, getInitialState: function () {
                return $.extend(this._super(), {space: !1, spaceOverHalf: !0})
            }, handleSlideChange: function () {
                this.setProp("space", !1), this.setProp("spaceOverHalf", !0), this.setProp("active", !1)
            }, handleSpaceToggle: function (t) {
                $.support.touch ? this.handleMoreClick(t) : (this.setProp("space", !this.getProp("space")), t && t.preventDefault && t.preventDefault())
            }, handleMouseOut: function () {
                this.getProp("space") || this.setProp("active", !1)
            }, handleMouseMove: function (t) {
                if (this.getProp("space")) {
                    var e = $.contentSize(), i = t.clientX / e[0], n = this.video.get(0);
                    this.setProp("spaceOverHalf", i > .5), this.videoCanPlay && (n._currentTime = n.currentTime = this.videoDuration * (1 - i))
                }
            }, onVideoCanPlay: function () {
                var t = this.video.get(0);
                this.videoCanPlay = !0, t.pause(), t.removeEventListener("canplaythrough", this.onVideoCanPlay.bind(this))
            }, getUISizes: function (t, e) {
                var i = this._super(t, e);
                return i.space = this.getProp("space"), i
            }, applyUIContentSize: function (t, e) {
                this._super(t, e), this.applyUIVideoSize(t, e)
            }, applyUIVideoSize: function () {
                {
                    var t = $.contentSize(), e = n(t[0], t[1], this.videoRatio);
                    this.video
                }
                this.video.animCSS({
                    width: e.width + "px",
                    height: e.height + "px",
                    translateX: e.left + "px",
                    translateY: e.top + "px"
                })
            }, applyUIBackground: function (t, e) {
                this._super(t, e);
                var i = this.bgContainers, n = this.videoOverlay;
                t.space ? (i.addClass("hidden"), n.removeClass("hidden").anim("stop", ["opacity"]), n[e ? "anim" : "animCSS"]({opacity: 1}, {
                    duration: 250,
                    easing: "ease-in-out-quart"
                })) : (n.anim("stop", ["opacity"]), n[e ? "anim" : "animCSS"]({opacity: 0}, {
                    duration: 250,
                    easing: "ease-in-out-quart",
                    complete: function () {
                        n.addClass("hidden"), i.removeClass("hidden")
                    }
                }))
            }, applyUIOverlay: function (t, e) {
                var i = this.el.find(".overlay");
                i.length && (i.anim("stop", ["opacity"]), i[e ? "anim" : "animCSS"]({opacity: t.active && !t.space ? 1 : 0}, {
                    duration: t.space ? 500 : 100,
                    easing: "ease-in-out-quart"
                }))
            }, applyUISpace: function (t) {
                this.buttonRight.setProp("icon", t.space ? "close-sm" : "plus")
            }, applyUISpaceOverHalf: function (t, e) {
                var i = this.el.find(".content");
                i.anim("stop", ["opacity"]), i[e ? "anim" : "animCSS"]({opacity: t.contentHidden ? 0 : 1}, {
                    duration: 250,
                    easing: "ease-in-out-quart"
                }), this.spaceContent.text(t.spaceOverHalf ? "82" : "209")
            }
        })
    }, {
        "./../../components/plugins/cover": 13,
        "./../../components/plugins/debounce": 14,
        "./../../components/widgets/slidepart": 40
    }],
    67: [function (t, e) {
        var i = t("./../../components/widgets/slidepart");
        e.exports = i.extend({
            NAME: "SlidePartInfra", init: function (t, e) {
                this._super(t, e), $.support.touch && this.el.find(".infrastructure-links a").on($.support.clickEvent, this.onTouch.bind(this))
            }, onTouch: function (t) {
                t.stopPropagation()
            }
        })
    }, {"./../../components/widgets/slidepart": 40}],
    68: [function (t, e) {
        var i = t("./../../components/widgets/slidepart");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e), this.map = this.getParentWidget().getChildWidget("map")
            }, handleMapToggle: function () {
                this.map.setProp("active", this.getProp("id"))
            }, handleMoreClick: function (t) {
                !$.support.touch && this.map ? (t.preventDefault(), this.handleMapToggle()) : this._super(t)
            }
        })
    }, {"./../../components/widgets/slidepart": 40}],
    69: [function (t, e) {
        var i = t("./../../components/widgets/base"), n = t("./../../components/plugins/cover");
        e.exports = i.extend({
            NAME: "space", player: !1, videoRatio: 1280 / 720, init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.slidePart = $(".slide-part-architect").widget(), this.elFooter = this.el.find("footer");
                var i = this.getChildWidget("more");
                i && i.on($.support.clickEvent, this.handleMoreClick.bind(this)), this.video = this.el.find("video"), Widgets.getById("controller").on("propChange:controller", this.handleSlideChange.bind(this)), $.contentSize.on("resize", function () {
                    this.uiUpdate()
                }.bind(this))
            }, handleSlideChange: function (t, e) {
                this.getProp("active") && "slide" === e.name && 3 !== e.value && this.setProp("active", !1)
            }, handlePropChange: function (t, e, i) {
                "active" === t && (this.uiTransitionActive(e, i), e && this.uiUpdate())
            }, getInitialState: function () {
                return $.extend(this._super(), {active: !1})
            }, close: function () {
                this.setProp("active", !1)
            }, seek: function () {
                !this.getProp("active")
            }, uiUpdate: function () {
                {
                    var t = $.contentSize(), e = n(t[0], t[1], this.videoRatio);
                    this.video
                }
                this.video.animCSS({
                    width: e.width + "px",
                    height: e.height + "px",
                    translateX: e.left + "px",
                    translateY: e.top + "px"
                });
                this.slidePart.getUISizes(!1, {active: !0, inactive: !1})
            }, uiTransitionActive: function (t) {
                var e = this.el;
                t ? (e.removeClass("hidden"), this.stopTimer(!0), this.startTimer(function () {
                    this.el.addClass("active"), this.startTimer(function () {
                    }, 700)
                }, 16)) : (this.stopTimer(!0), this.startTimer(function () {
                    this.el.removeClass("active"), this.startTimer(function () {
                        this.el.addClass("hidden")
                    }, 700)
                }))
            }
        })
    }, {"./../../components/plugins/cover": 13, "./../../components/widgets/base": 31}],
    70: [function (t, e) {
        var i = t("./../../components/widgets/slide");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e), this.map = this.getChildWidget("map"), this.buttonLocation = this.getChildWidget("find-location"), this.getChildWidget("map").setProp("active", !0), this.map.isLocationDetectionSupported() ? this.buttonLocation.on($.support.clickEvent, this.handleLocationClick.bind(this)) : this.buttonLocation.setProp("visible", !1)
            }, handleLocationClick: function () {
                var t = this.buttonLocation;
                t.setProp("icon", "map-loading"), t.setProp("disabled", !0), this.map.detectUserLocation().always(function () {
                    t.setProp("icon", "location"), t.setProp("disabled", !1)
                })
            }
        })
    }, {"./../../components/widgets/slide": 39}],
    71: [function (t, e) {
        var i = t("./../components/widgets/base");
        e.exports = i.extend({
            init: function (t, e) {
                if (this._super(t, e), this.menu = this.el.find(".menu"), this.menuOverlay = this.menu.find(".overlay"), $.support.transform3d) {
                    var i = this.clone = this.el.clone();
                    this.cloneMenu = i.find(".menu"), i.insertAfter(this.el), i.addClass("cloned").addClass("hidden")
                }
                this.uiUpdateSize = this.uiUpdateSize.bind(this), $.winSize.on("resize", this.uiUpdateSize), Widgets.init(this.el), this.phoneLink = this.el.find(".phone"), this.phoneLink.on($.support.clickEvent, this.handlePhoneClick.bind(this))
            }, getInitialState: function () {
                return $.extend(this._super(), {active: !1})
            }, handlePropChange: function (t, e) {
                "active" === t && (this.uiToggleContent(e), e ? $.winSize.on("change", this.uiUpdateSize) : $.winSize.off("change", this.uiUpdateSize))
            }, handlePhoneClick: function (t) {
                $.support.touch || t.preventDefault()
            }, uiUpdateSize: function () {
                var t, e = this.el, i = this.clone, n = e.find(".valign-middle"), s = i ? i.find(".valign-middle") : null;
                n.length && (t = -Math.round(this.getElementSize(n)[1] / 2), n.css("marginTop", t + "px"), s && s.css("marginTop", t + "px")), e.css("height", $.winSize()[1] + "px"), i && i.css("height", $.winSize()[1] + "px")
            }, projectPoint: function (t, e) {
                var i = 2e3, n = t * Math.PI / 180, s = Math.cos(n) * e, o = Math.abs(Math.sin(n) * e), a = i / (o + i), r = s * a;
                return r
            }, uiSetProgress: function (t) {
                var e = this.getElementSize(this.el), i = 90 * -(1 - t), n = -i, s = 2 * this.projectPoint(i, e[0] / 2), o = .08 * (1 - t);
                this.menu.get(0).style[$.support.transform] = "rotateY(" + i + "deg)", this.menuOverlay.get(0).style.opacity = o, this.cloneMenu.get(0).style[$.support.transform] = "rotateY(" + n + "deg)", this.clone.get(0).style.marginRight = s + "px"
            }, uiToggleContent: function (t) {
                {
                    var e = this.el, i = this.menu, n = this.menuOverlay, s = this.clone;
                    this.getElementSize(this.el)
                }
                $.support.transform3d ? t ? (e.addClass("active"), s.removeClass("hidden"), this.uiUpdateSize(), i.anim({z: [1, 0]}, {
                    queue: !1,
                    begin: function () {
                        n.removeClass("hidden")
                    }.bind(this),
                    progress: function (t, e) {
                        this.uiSetProgress(e)
                    }.bind(this),
                    easing: "easeOutQuint",
                    complete: function () {
                        s.addClass("hidden"), n.addClass("hidden")
                    }.bind(this)
                })) : (s.removeClass("hidden"), i.anim({z: [1, 0]}, {
                    queue: !1, begin: function () {
                        n.removeClass("hidden")
                    }.bind(this), progress: function (t, e) {
                        this.uiSetProgress(1 - e)
                    }.bind(this), easing: "easeInQuint", complete: function () {
                        e.removeClass("active"), s.addClass("hidden"), n.addClass("hidden")
                    }.bind(this)
                })) : t ? i.anim({translateX: ["0%", "100%"]}, {
                    begin: function () {
                        e.addClass("active"), this.uiUpdateSize()
                    }.bind(this)
                }) : i.anim({translateX: "100%"}, {
                    complete: function () {
                        e.removeClass("active")
                    }
                })
            }
        })
    }, {"./../components/widgets/base": 31}],
    72: [function (t, e) {
        function i(t) {
            for (var e, i = t.parent(); i && i.length;) {
                if (e = i.css("position"), console.log(e), "absolute" === e || "fixed" === e || "relative" === e)return i;
                i = i.parent()
            }
            return t
        }

        e.exports = {
            init: function () {
                var e = $.winSize(), n = t("./../components/plugins/debounce");
                if ($.support.mobile.phone) {
                    window.scrollTo(0, 0), $("span.reduced-mobile").html("...");
                    var s = n(function () {
                        $(window).scrollTop(0)
                    }, 60);
                    $(window).on("scroll", function () {
                        var t = $(window).scrollTop();
                        t > 0 && s()
                    })
                }
                $.support.mobile.phone && $(document).on("focusin", "input, textarea", function () {
                    $.winSize.freeze();
                    var t, e, n, s = $(this), o = s.closest(".allow-scroll").length, a = s.height(), r = s.width(), l = s.prev("label").text();
                    t = $('<div class="input-focused-placeholder" />').css({
                        height: a + "px",
                        width: r + "px",
                        "float": s.css("float")
                    }), $("body").addClass("input-focused"), s.addClass("focused"), l && s.attr("placeholder", l).data("placeholder-replaced", !0), o ? s.addClass("focused-fixed") : (n = i(s).offset(), console.log(i(s).get(0), n), s.css({
                        top: -n.top + "px",
                        left: -n.left + "px",
                        width: $.winSize()[0] + "px"
                    }), e = $("header.header"), e.addClass("hidden")), t.insertBefore(s)
                }).on("focusout", "input, textarea", function () {
                    $.winSize.unfreeze();
                    var t = $(this), e = t.prev(".input-focused-placeholder"), i = $("header.header");
                    $("body").removeClass("input-focused"), e.remove(), t.removeAttr("style"), t.removeClass("focused").removeClass("focused-fixed"), t.data("placeholder-replaced") && t.attr("placeholder", ""), i.removeClass("hidden")
                }), (372 === e[1] || 232 === e[1]) && $.support.device.os.ios >= 8 && (body.addClass("reduced-size"), e[0] > e[1] ? ($("span.reduced, span.reduced-landscape").html("..."), $("li.reduced, li.reduced-landscape").remove()) : ($("span.reduced, span.reduced-portrait").html("..."), $("li.reduced, li.reduced-portrait").remove()))
            }
        }
    }, {"./../components/plugins/debounce": 14}],
    73: [function (t, e) {
        {
            var i = t("./../../components/widgets/base");
            t("./../../components/widgets/carousel"), t("./../../components/plugins/debounce")
        }
        e.exports = i.extend({
            NAME: "InfiniteScroll", init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.updated = !1, this.blockId = NEWS_LIST_BLOCK_ID, this.moreNews = MORE_NEWS, this.newsPerPage = parseInt(NEWS_PER_PAGE), this.offset = 5, this.moreNews && this.el.on("scroll", $.proxy(this.onScrollEnd, this))
            }, calculateSize: function () {
                return this.el.height()
            }, onScrollEnd: function () {
                var t = this.calculateSize();
                newsItem = this.el.find(".news-item"), itemSize = newsItem.size(), lastItem = newsItem.eq(itemSize - 1), itemPos = lastItem.offset().top, (!this.data || this.data.moreNews) && t > itemPos && !this.updated && this.moreNews && (this.requestData(), this.updated = !0)
            }, updateContent: function (t) {
                {
                    var e = this.el, i = $(".gallery-slide"), n = i.widget();
                    $(".carousel").eq(0).widget()
                }
                this.offset = this.offset + this.newsPerPage;
                var s = n.uiState.is_vertical_mobile;
                if (t) {
                    if (e.append(t.newsList), s) {
                        var o, a = t.slideshow, r = $('<div class="tmp">'), l = 0;
                        for ($("body").append(r.append(a)), o = r.find(">div").size(); o > l; l++) {
                            var h = r.find(">div").eq(l), c = h.data("id"), d = this.el.find('.news-item[data-id="' + c + '"]'), u = h.clone();
                            u.removeClass("hidden"), d.prepend(u)
                        }
                        r.remove()
                    } else i.append(t.slideshow);
                    var p = this.getParentWidget();
                    p && p.updateUI(), n.uiUpdateBackgrounds();
                    var f, l = this.offset - this.newsPerPage, g = $(".carousel").size();
                    for (f = s ? this.el : i; g > l; l++) {
                        var m = s ? l : l - 1, v = $('.carousel[data-id="' + m + '"]').widget();
                        v.init(f.find('.carousel[data-id="' + m + '"]'))
                    }
                    this.updated = !1
                }
            }, requestData: function () {
                var t = this;
                $.ajax({
                    url: window.location.pathname + "?block_id=" + this.blockId,
                    type: "POST",
                    data: {offset: this.offset},
                    success: $.proxy(function (e) {
                        e = $.parseJSON(e), t.data = e, t.updateContent(e)
                    })
                })
            }
        })
    }, {
        "./../../components/plugins/debounce": 14,
        "./../../components/widgets/base": 31,
        "./../../components/widgets/carousel": 34
    }],
    74: [function (t, e) {
        var i, n = t("./../../components/widgets/slidepart"), s = (t("./../../components/plugins/debounce"), t("./../../components/plugins/cover"));
        e.exports = i = n.extend({
            NAME: "slidepart", bgSizeRatio: 640 / 620, init: function (t, e) {
                if (this._super(t, e), this.uiUpdate(!1), Widgets.init(this.el), "right" === this.getProp("id")) {
                    var i = this.getParentWidget().getChildWidget("left");
                    this.scrollable = this.getChildWidget("scrollable"), $.contentSize.on("resize", this.scrollable.updateUI.bind(this.scrollable)), this.news = this.el.find(".news-item"), this.newsActiveTriangle = this.el.find(".news-triangle"), this.galleries = i.el.find(".carousel"), $.support.touch || (this.el.delegate(".news-item", "mouseenter", this.handleNewsMouseOver.bind(this)), this.el.delegate(".news-item", "mouseleave", this.handleNewsMouseOut.bind(this)), this.scrollable.el.on("scrollbarScroll", this.handleScroll.bind(this))), this.el.delegate(".news-item", "click touchend", this.handleNewsClick.bind(this)), this.el.delegate(".close-btn", "click touchend", this.handleCloseClick.bind(this)), this.uiState.is_vertical_mobile && this.initMobilePortraitGalleries()
                }
            }, initMobilePortraitGalleries: function () {
                var t, e = this;
                this.galleries.each(function () {
                    var i = $(this).attr("data-id");
                    $(this).removeClass("hidden"), t = e.news.filter("[data-id=" + i + "]").prepend($(this))
                }), this.scrollable.updateUI()
            }, handleCloseClick: function (t) {
                t.stopPropagation();
                var e = $(t.currentTarget).closest(".news-item");
                this.transitionNewsItem(e, !1)
            }, handleNewsClick: function (t) {
                var e = this, i = $(t.currentTarget), n = this.el.find(".news-item");
                n.not(i).each(function () {
                    e.transitionNewsItem($(this), !1)
                }), this.transitionNewsItem(i, !0), this.uiState.is_mobile && "landscape" === this.uiState.orientation && this.transitionGallery(i.data("id"))
            }, handleNewsMouseOver: function (t) {
                var e = $(t.currentTarget);
                this.newsActiveTriangle.addClass("hovered"), e.addClass("hovered"), e.hasClass("active") ? this.newsActiveTriangle.addClass("active") : this.newsActiveTriangle.removeClass("active"), this.transitionNewsTriangle(), this.transitionGallery(e.data("id"))
            }, handleNewsMouseOut: function (t) {
                var e = $(t.currentTarget);
                this.newsActiveTriangle.removeClass("hovered"), e.removeClass("hovered")
            }, handleScroll: function () {
                this.transitionNewsTriangle()
            }, applyUIContentSize: function (t, e) {
                "landscape" === t.orientation && this._super(t, e)
            }, uiUpdateBackgrounds: function () {
                this.bgContainers = this.getBackgroundContainer(), this.bgContainers.size() || (this.bgContainers = this.el.next().find(".bg")), this.uiUpdate()
            }, transitionNewsItem: function (t, e) {
                var i, n = this;
                if (e) {
                    var s = t.clone();
                    s.addClass("active"), s.find(".text").css("max-height", "none"), this.scrollable.elContent.append(s), i = s.outerHeight(), s.remove()
                } else i = 0;
                t.find(".text").anim({"max-height": i + "px"}, {
                    duration: 350,
                    easing: "ease-in-out",
                    complete: function () {
                        if (e ? t.addClass("active") : t.removeClass("active"), e ? n.newsActiveTriangle.addClass("active") : n.newsActiveTriangle.removeClass("active"), n.scrollable.updateUI(), n.transitionNewsTriangle(), e) {
                            var i = t.position().top + n.scrollable.getScrollPos();
                            i = Math.min(n.scrollable.el.scrollbar().options.maxValue, Math.max(n.scrollable.el.scrollbar().options.minValue, parseFloat(i))), n.scrollable.scrollTo(i, function () {
                                n.transitionNewsTriangle()
                            }), n.scrollable.el.scrollbar().value = i, n.scrollable.el.scrollbar().updateDragable()
                        }
                    }
                })
            }, transitionGallery: function (t) {
                var e = this, i = $(".carousel").filter("[data-id=" + t + "]");
                return i.hasClass("active") ? !1 : (this.setProp("animating", !0), i.addClass("active").removeClass("hidden").animCSS({
                    translateX: "100%",
                    zIndex: 2
                }), $(".carousel").not(i).animCSS({zIndex: 1}), i.animNext(function () {
                    i.anim({translateX: "0%"}, {
                        duration: 500, easing: "ease-in-out", complete: function () {
                            $(".carousel").not(i).removeClass("active").animCSS({translateX: "100%"}), e.setProp("animating", !1)
                        }
                    })
                }), void 0)
            }, transitionNewsTriangle: function () {
                if (!$.support.touch) {
                    var t = this.el.find(".news-item").filter(".hovered");
                    this.newsActiveTriangle.animCSS({top: t.position().top + 105 + "px"})
                }
            }, getUISizes: function (t, e) {
                var i, n = !!e, o = $.extend({
                    id: this.getProp("id"),
                    active: this.getProp("active"),
                    inactive: this.getProp("inactive"),
                    orientation: this.getProp("orientation"),
                    "active-part": this.getProp("active-part")
                }, e), a = this.el.find(".content"), r = o.active, l = r ? !1 : o.inactive, h = o["active-part"], c = $.contentSize(), d = o.orientation, u = matchMedia("(max-width: 667px)").matches, p = matchMedia("(max-width: 1024px)").matches, f = p && "portrait" === d && matchMedia("(max-width: 768px)").matches, g = "portrait" === d && matchMedia("(max-height: 767px)").matches, m = "right" === o.id, v = r && a.hasClass("valign-top-middle");
                if (i = [0 | r, 0 | l, h || ""].concat(c).join(","), this.uiStateHash === i)return t ? null : this.uiState;
                var y, b, x, w = {
                    active: r,
                    inactive: l,
                    active_part: h,
                    side: o.id,
                    orientation: d,
                    is_mobile: u,
                    is_vertical_mobile: g,
                    is_tablet: p,
                    is_vertical_tablet: f,
                    is_right_side: m,
                    containerMaxWidth: 0,
                    containerWidth: 0,
                    containerHeight: 0,
                    containerOffset: 0,
                    contentHeight: 0,
                    contentOffset: 0,
                    contentSize: [0, 0],
                    collapsedHeight: 0,
                    footerOffset: 0,
                    topAreaHeight: 0,
                    backgroundSize: [0, 0],
                    backgroundPosition: [0, 0],
                    videoVisible: !1
                }, C = this.getUIContentSizes(w), S = 30;
                if (g ? (y = 25, b = 40) : u ? (y = 25, b = 40) : p ? (y = 42, b = 90) : (y = 42, b = 120), console.dir({
                        orientation: d,
                        is_mobile: u,
                        is_vertical_mobile: g,
                        is_tablet: p,
                        is_vertical_tablet: f
                    }), "portrait" === d ? (w.containerMaxWidth = c[0], w.containerWidth = c[0], f ? g ? (r ? (w.containerOffset = m ? "-23.111%" : "0%", w.containerHeight = Math.ceil(.65 * c[1])) : l ? (w.containerOffset = m ? "42.2%" : "0%", w.containerHeight = Math.ceil(.35 * c[1])) : (w.containerOffset = "0%", w.containerHeight = Math.ceil(.5 * c[1])), w.containerMaxHeight = Math.ceil(.65 * c[1])) : (w.containerHeight = Math.ceil(.5 * c[1]), w.containerMaxHeight = w.containerHeight) : (w.containerWidth = w.containerMaxWidth = Math.round(.5 * c[0]), w.containerHeight = w.containerMaxHeight = c[1]), w.topAreaHeight = w.containerHeight) : (w.containerMaxWidth = Math.ceil(.55 * c[0]), w.containerWidth = Math.ceil(c[0] * (r ? .55 : l ? .45 : .5)), w.containerHeight = c[1], w.containerMaxHeight = c[1], u && (w.containerMaxWidth = Math.ceil(.8 * c[0]), w.containerWidth = Math.ceil(c[0] * (r ? .8 : l ? .2 : .5)), w.containerHeight = c[1]), m && (w.containerOffset = u ? r ? "24.967%" : l ? "100%" : "62.4175%" : r ? "81.8181%" : l ? "100%" : "90.909%"), w.topAreaHeight = u || !v ? w.containerHeight : Math.ceil(w.containerHeight / 2)), w.contentHeight += C[0] + C[1], w.collapsedHeight = C[0], w.contentOffset = -w.contentHeight / 2, w.contentOffset -= S, w.contentOffset += (w.topAreaHeight - w.containerHeight) / 2, "portrait" !== d || m ? "landscape" === d && (u || v) && (w.contentOffset += y) : w.contentOffset += y, w.contentOffset = Math.round(w.contentOffset), r || (w.footerOffset = -w.containerHeight / 2 + b, w.footerOffset += w.contentOffset + w.contentHeight, w.footerOffset = Math.round(w.footerOffset)), x = s(w.containerMaxWidth, w.containerMaxHeight, this.bgSizeRatio), w.backgroundSize = [x.width, x.height], x = s.position(w.containerWidth, w.containerHeight, x.width, x.height), w.backgroundPosition = [x.left, 0], "landscape" === d && !u && v && (w.videoVisible = !0, $.support.device.os.ios7)) {
                    w.videoSize = [0, 0], w.videoPosition = [0, 0];
                    var P = this.bgVideo;
                    P.length && (x = s(w.containerMaxWidth, w.containerMaxHeight - w.topAreaHeight, parseInt(P.attr("width")) / parseInt(P.attr("height"))), w.videoSize = [x.width, x.height], w.videoPosition = [x.left, x.top])
                }
                return n || (this.uiStateHash = i, this.uiState = w), w
            }, applyUIBackground: function (t, e) {
                var i = this.bgContainers;
                i.length && i.animCSS({height: $.contentSize()[1] + "px"}), this._super(t, e)
            }
        })
    }, {
        "./../../components/plugins/cover": 13,
        "./../../components/plugins/debounce": 14,
        "./../../components/widgets/slidepart": 40
    }],
    75: [function (t, e) {
        var i = t("./../components/widgets/base"), n = t("./../components/plugins/debounce");
        e.exports = i.extend({
            NAME: "controller", SLIDES: ["main"], init: function (t, e) {
                this._super(t, e), this.getChildWidget("slide-" + this.getProp("slide")), $(document).on("keydown", this.handleKeyPress.bind(this)), $(document).on("DOMMouseScroll mousewheel", n(this.handleMouseWheel.bind(this), 60, !0)), $.contentSize.on("resize", function () {
                    this.handleResize()
                }.bind(this)), this.handleResize()
            }, handlePropChange: function (t, e, i) {
                "slide" === t ? this.uiTransitionSlide(e, i) : "orientation" === t && document.location.reload()
            }, handleKeyPress: function (t) {
                34 === t.which ? this.next() : 33 === t.which && this.previous()
            }, handleMouseWheel: function (t) {
                {
                    var e = Date.now();
                    this.previousTrigger || e
                }
                this.previousTrigger = e, t.originalEvent.wheelDelta ? wheel = t.originalEvent.wheelDelta : t.originalEvent.detail && (wheel = -t.originalEvent.detail), wheel > 0 ? this.previous() : this.next()
            }, handleResize: function () {
                var t = $.contentSize()[1], e = parseInt(this.el.css("top"), 10) || 0;
                this.setProp("height", t - e)
            }, getInitialState: function () {
                return $.extend(this._super(), {slide: this.SLIDES[0], height: 0})
            }, next: function () {
                var t = this.SLIDES, e = $.inArray(this.getProp("slide"), t), i = this.getChildWidget("slide-" + this.getProp("slide"));
                return !i.getProp("animating") && !i.scrollNext() && e < t.length - 1 ? (this.setProp("slide", t[e + 1]), !0) : void 0
            }, previous: function () {
                var t = this.SLIDES, e = $.inArray(this.getProp("slide"), t), i = this.getChildWidget("slide-" + this.getProp("slide"));
                return !i.getProp("animating") && !i.scrollPrevious() && e > 0 ? (this.setProp("slide", t[e - 1]), !0) : void 0
            }, uiTransitionSlide: function (t, e) {
                var i = this.SLIDES, n = this.getChildWidget("slide-" + t), s = this.getChildWidget("slide-" + e), o = $.inArray(t, i), a = $.inArray(e, i), r = this.getChildWidget("navigation"), l = o > a ? 1 : -1;
                $.when(n.pepareForTransition(), s.pepareForTransition()).done(function () {
                    s.animateOut(l, t), n.animateIn(l, e), "main" === t ? Widgets.getById("header").setProp("logoVisible", !1) : "main" === e && Widgets.getById("header").setProp("logoVisible", !0)
                }), "main" !== t ? (r.setProp("active", !0), r.setProp("index", o)) : r.setProp("active", !1)
            }
        })
    }, {"./../components/plugins/debounce": 14, "./../components/widgets/base": 31}],
    76: [function (t, e) {
        var i = t("./../components/widgets/slide"), n = t("./../components/plugins/debounce"), s = t("./../components/plugins/cover");
        e.exports = i.extend({
            bgSizeRatio: 1280 / 720, init: function (t, e) {
                this._super(t, e), this.slideWrapper = this.el.find(".slide-main-wrap"), this.slideParts = this.el.find(".slide-part-main"), $.support.mobile.phone || this.el.find(".play-video").removeAttr("href").removeAttr("target"), $.support.mobile.any ? this.el.find(".play-video").one("click", this.initVideo.bind(this)) : this.initVideo(), this.el.find(".play-video").on("click", this.toggleVideo.bind(this)), this.el.find("footer .btn").on($.support.clickEvent, this.handleNextSlide.bind(this)), $.support.touch || this.slideParts.on("mousemove", n(this.handleMouseOver.bind(this), 16, "leading")).on("mouseleave", this.handleMouseOut.bind(this)), this.whenInactive = $.Deferred().resolve().promise(), $.contentSize.on("resize", function () {
                    this.uiUpdate()
                }.bind(this)), $.support.mobile.any && (gyro.startTracking(this.handleMotionUpdate.bind(this)), gyro.frequency = 250), this.uiUpdate(!1), this.uiInitialAnimations()
            }, initVideo: function () {
                var t, e = "background";
                $.support.mobile.tablet && $.support.device.os.ios7 && (e = "background_audio"), $.support.mobile.phone ? this.video = $() : (t = $('<video							preload="none"							autoplay							muted							width="100" height="100"							poster="./case02_files/background.jpg">							<source src="./case02_files/' + e + '.mp4" type="video/mp4" />							<source src="./case02_files/' + e + '.webm" type="video/webm" />							/*<source src="/assets/dist/videos/slide-main/' + e + '.ogv" type="video/ogg" />*/						</video>'), t.on("timeupdate", this.handleVideoProgress.bind(this)), this.el.prepend(t), this.video = t, this.applyUIBackgroundVideoSize())
            }, toggleVideo: function () {
                var t = this.video ? this.video.get(0) : null;
                !t || t.paused ? this.playVideo() : this.stopVideo()
            }, playVideo: function () {
                var t = this.video ? this.video.get(0) : null, e = Widgets.getById("header");
                if (t && !$.support.mobile.phone && t.paused && t && t.play)if (t.currentTime < 41.5)t.play(), this.getChildWidget("play").setProp("icon", "pause-lg"); else {
                    try {
                        t.currentTime = 0
                    } catch (i) {
                    }
                    t.currentTime < 41.5 && (t.play(), this.getChildWidget("play").setProp("icon", "pause-lg"))
                }
                $.support.mobile.phone || $.support.mobile.tablet && $.support.device.os.ios7 ? e.audioIsPlaying && e.pauseAudio() : e.audioIsPlaying ? $.support.mobile.any && e.playAudio() : (e.initAudio(), $.support.mobile.any && e.playAudio())
            }, stopVideo: function () {
                var t = this.video ? this.video.get(0) : null;
                t && t.pause && (t.pause(), this.getChildWidget("play").setProp("icon", "play-lg"))
            }, handleVideoProgress: function () {
                var t = this.video ? this.video.get(0) : null;
                t.currentTime > 41.5 && (t.pause(), t.currentTime = 41.5, this.getChildWidget("play").setProp("icon", "play-lg"))
            }, handleNextSlide: function () {
                Widgets.getById("controller").next()
            }, handlePropChange: function (t, e, i) {
                this._super(t, e, i), "active" === t ? e ? ($.support.mobile.any || this.playVideo(), this.uiUpdate(!0), $.support.mobile.any && gyro.startTracking(this.handleMotionUpdate.bind(this))) : (this.setProp("active-part", null), this.stopVideo(), gyro.stopTracking()) : "active-part" === t && this.uiUpdate(!0)
            }, getInitialState: function () {
                return $.extend(this._super(), {active: !0, "active-part": null, animate: !1})
            }, handleMotionUpdate: function (t) {
                var e = "y", i = "left", n = "right", s = window.orientation;
                (0 == s || 180 == s) && (e = "x", mult = -1), t[e] >= .8 ? this.setProp("active-part", i) : t[e] <= -.8 ? this.setProp("active-part", n) : this.setProp("active-part", null)
            }, handleMouseOver: function (t) {
                if (!this.getProp("animating")) {
                    var e = $(t.target).closest(".slide-part-main");
                    this.setProp("active-part", e.hasClass("slide-part-main-left") ? "left" : "right")
                }
            }, handleMouseOut: function () {
                this.setProp("active-part", null)
            }, uiInitialAnimations: function () {
                this.setProp("animate", !0);
                {
                    var t = this.el.find("h1, .h1"), e = t.find("span"), i = (this.uiState.is_mobile ? 81 : 161, this.uiState.is_mobile ? 55 : 105), n = 1e3;
                    this.el.find("footer")
                }
                e.animCSS({opacity: 0}), t.eq(0).css({
                    "background-position": "0px 0px",
                    transition: "background-position " + n + "ms cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                }), t.eq(1).css({
                    "background-position": "0px 0px",
                    transition: "background-position " + n + "ms cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                }), setTimeout(function () {
                    e.anim({top: [i + "px", i + 100 + "px"], opacity: [1, 0]}, {
                        duration: n,
                        easing: "easeInOutSine",
                        complete: function () {
                            this.setProp("animate", !1)
                        }.bind(this)
                    })
                }.bind(this), 500)
            }, uiUpdate: function (t) {
                if (!this.getProp("animate")) {
                    var e = this.getUISizes();
                    return this.applyUISizes(e, t)
                }
            }, getUISizes: function (t) {
                {
                    var e, i = this.el.find(".content"), n = this.getProp("active"), s = this.getProp("active-part"), o = $.contentSize(), a = this.getProp("orientation"), r = matchMedia("(max-width: 667px)").matches;
                    matchMedia("(max-width: 1024px)").matches, "portrait" === a && matchMedia("(max-height: 767px)").matches
                }
                if (e = [0 | n, 0, s || ""].concat(o).join(","), this.uiStateHash === e)return t ? null : this.uiState;
                var l = {
                    active: n,
                    "active-part": s,
                    containerOffset: 0,
                    leftOffset: "-20%",
                    rightOffset: "20%",
                    leftOpacity: 0,
                    rightOpacity: 0,
                    leftVAlignOffset: 0,
                    rightVAlignOffset: 0,
                    is_mobile: r
                };
                return l.containerOffset = "left" === s ? 0 : "right" === s ? Math.round(1.384365 * o[0] * -.277752) : Math.round(1.384365 * o[0] * -.138826), "left" === s ? (l.leftOffset = "0%", l.leftOpacity = 1) : "right" === s && (l.rightOffset = "0%", l.rightOpacity = 1), l.leftVAlignOffset = Math.round(-i.eq(0).height() / 2), l.rightVAlignOffset = Math.round(-i.eq(1).height() / 2), this.uiStateHash = e, this.uiState = l, l
            }, applyUISizes: function (t, e) {
                t && ("pending" !== this.whenInactive.state() && (this.whenInactive = $.Deferred()), this.applyUIContainerPosition(t, e), this.applyUIOverlays(t, e), this.applyUIContent(t, e), this.applyUIBackgroundVideoSize(t, e), this.whenInactiveTimer && this.whenInactiveTimer.cancel && (this.whenInactiveTimer.cancel(), this.whenInactiveTimer = null), t["active-part"] || (e ? this.whenInactiveTimer = this.startTimer(this.whenInactive.resolve.bind(this.whenInactive), 350) : this.whenInactive.resolve()))
            }, applyUIContainerPosition: function (t, e) {
                var i = this.slideWrapper;
                i.anim("stop"), i[e ? "anim" : "animCSS"]({translateX: t.containerOffset + "px"}, {
                    duration: 350,
                    transition: "ease-in-out"
                })
            }, applyUIOverlays: function (t, e) {
                var i = this.slideParts.find(".overlay"), n = this.el.find("h1, .h1"), s = n.find("span");
                i.anim("stop"), n.anim("stop"), s.anim("stop"), i.eq(0)[e ? "anim" : "animCSS"]({opacity: .3 * t.leftOpacity}, {
                    duration: 350,
                    easing: "ease-in-out"
                }), i.eq(1)[e ? "anim" : "animCSS"]({opacity: .3 * t.rightOpacity}, {
                    duration: 350,
                    easing: "ease-in-out"
                }), n.eq(0)[e ? "anim" : "animCSS"]({opacity: 1 - t.leftOpacity}, {
                    duration: 350,
                    easing: "ease-in-out"
                }), n.eq(1)[e ? "anim" : "animCSS"]({opacity: 1 - t.rightOpacity}, {
                    duration: 350,
                    easing: "ease-in-out"
                }), s[e ? "anim" : "animCSS"]({opacity: t.leftOpacity || t.rightOpacity ? 0 : 1}, {
                    duration: 350,
                    easing: "ease-in-out"
                })
            }, applyUIContent: function (t, e) {
                var i = this.slideParts.find(".content");
                i.anim("stop"), i.eq(0).animCSS({translateY: t.leftVAlignOffset + "px"}), i.eq(1).animCSS({translateY: t.rightVAlignOffset + "px"}), i.eq(0)[e ? "anim" : "animCSS"]({
                    opacity: t.leftOpacity,
                    translateX: t.leftOffset
                }, {
                    duration: t.leftOpacity ? 500 : 250,
                    easing: "ease-in-out"
                }), i.eq(1)[e ? "anim" : "animCSS"]({
                    opacity: t.rightOpacity,
                    translateX: t.rightOffset
                }, {duration: t.rightOpacity ? 500 : 250, easing: "ease-in-out"})
            }, applyUIBackgroundVideoSize: function () {
                if ($.support.device.os.ios7 && this.video && this.video.length) {
                    var t = $.contentSize(), e = s(t[0], t[1], this.bgSizeRatio), i = this.video;
                    i.animCSS({
                        width: e.width + "px",
                        height: e.height + "px",
                        translateX: e.left + "px",
                        translateY: e.top + "px"
                    })
                }
            }
        })
    }, {
        "./../components/plugins/cover": 13,
        "./../components/plugins/debounce": 14,
        "./../components/widgets/slide": 39
    }],
    77: [function (t, e) {
        var i = t("./../components/widgets/button");
        e.exports = i.extend({
            init: function (t, e) {
                this._super(t, e)
            }, uiTransitionActive: function (t) {
                var e = this.getProp("icon");
                t ? e += "-light" : e = e.replace("-light", ""), this.setProp("icon", e), this.el.toggleClass("active", t)
            }
        })
    }, {"./../components/widgets/button": 33}],
    78: [function (t, e) {
        var i = t("./../components/widgets/base");
        e.exports = i.extend({
            NAME: "navigation", init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.controller = Widgets.getById("controller"), this.prev = this.getChildWidget("previous"), this.next = this.getChildWidget("next"), this.prev.on($.support.clickEvent, this.controller.previous.bind(this.controller)), this.next.on($.support.clickEvent, this.controller.next.bind(this.controller))
            }, handlePropChange: function (t, e) {
                if ("active" === t)this.uiTransitionActive(e); else if ("index" === t) {
                    var i = e > 10 ? e : "0" + e;
                    this.el.find(".current").text(i);
                    var n = this.controller.SLIDES;
                    e == n.length - 1 ? this.onLastSlideActive() : this.onSlideActive()
                }
            }, getInitialState: function () {
                return $.extend(this._super(), {active: this.el.hasClass("active"), index: 1})
            }, onSlideActive: function () {
                this.next.el.removeClass("disabled")
            }, onLastSlideActive: function () {
                this.next.el.addClass("disabled")
            }, uiTransitionActive: function (t) {
                $.support.transform3d ? t ? (this.el.removeClass("hidden"), this.startTimer(function () {
                    this.el.addClass("active"), this.startTimer(function () {
                        this.el.addClass("transition-fix")
                    }, 350)
                }, 700)) : (this.el.removeClass("transition-fix"), this.startTimer(function () {
                    this.el.removeClass("active"), this.startTimer(function () {
                        this.el.addClass("hidden")
                    }, 350)
                }, 16)) : t ? this.startTimer(function () {
                    this.el.anim({translateX: ["0%", "100%"]}, {
                        duration: 300, begin: function () {
                            this.el.removeClass("hidden")
                        }.bind(this)
                    })
                }, 700) : this.el.anim({translateX: "100%"}, {
                    duration: 300, complete: function () {
                        this.el.addClass("hidden")
                    }.bind(this)
                })
            }
        })
    }, {"./../components/widgets/base": 31}],
    79: [function (t, e) {
        var i = t("./../components/widgets/slidepart");
        e.exports = i.extend({
            NAME: "slidepart",
            IMAGES: ["./case02_files/background-nature-1.jpg", "./case02_files/background-nature-2.jpg", "./case02_files/background-nature-3.jpg", "./case02_files/background-nature-4.jpg", "./case02_files/background-nature-5.jpg"],
            TRANSITION_INTERVAL: 5e3,
            init: function (t, e) {
                this._super(t, e), this.startTimer(function () {
                    this.getParentWidget().on("propChange:slide", this.handleSlideActivePropChange.bind(this))
                }, 1), this.enableTimer(), this.el.find(".bg, .gallery").animProp({hwAcceleration: !0}), this.el.find("footer").animProp({hwAcceleration: !0})
            },
            getBackgroundContainer: function () {
                return this.el.find(".bg, .gallery")
            },
            handlePropChange: function (t, e, i) {
                this._super(t, e, i), "image" === t && this.uiTransitionImage(e, i), "active" === t && (e ? this.disableTimer() : this.enableTimer())
            },
            getInitialState: function () {
                return $.extend(this._super(), {image: 0})
            },
            handleSlideActivePropChange: function (t, e) {
                "active" === e.name && (e.value ? this.enableTimer() : this.disableTimer())
            },
            enableTimer: function () {
                var t = this.getChildWidget("more");
                t.spring("stop"), t.setProp("progress", 0), t.animate(100, this.TRANSITION_INTERVAL), this.galleryTimer = this.startTimer(function () {
                    var e = this.getProp("image"), i = (e + 1) % this.IMAGES.length;
                    this.setProp("image", i), t.setProp("progress", 0), this.enableTimer()
                }, this.TRANSITION_INTERVAL);
                var e = this.getProp("image"), i = (e + 1) % this.IMAGES.length;
                $.preload(this.IMAGES[i])
            },
            disableTimer: function () {
                this.galleryTimer && this.galleryTimer.cancel && (this.galleryTimer.cancel(), this.galleryTimer = null);
                var t = this.getChildWidget("more");
                t.setProp("progress", 0)
            },
            uiTransitionImage: function (t, e) {
                var i = this.el, n = i.find(".bg"), s = i.find(".gallery");
                s.animCSS({
                    backgroundImage: "url(" + this.IMAGES[e] + ")",
                    opacity: 1
                }), n.animCSS({backgroundImage: "url(" + this.IMAGES[t] + ")"}), s.anim({opacity: [0, 1]}, {
                    easing: "ease-out",
                    duration: 700
                })
            }
        })
    }, {"./../components/widgets/slidepart": 40}],
    80: [function (t, e) {
        var i = t("./../components/widgets/slidepart");
        e.exports = i.extend({
            NAME: "slidepart", bgSizeRatio: 800 / 450, init: function (t, e) {
                this._super(t, e);
                var i = this.el.find(".top"), n = this.el.find(".bottom"), s = this.getChildWidget("button-video"), o = this.getChildWidget("bottom-more");
                $.support.touch ? (i.on($.support.clickEvent, function () {
                    s.el.click()
                }.bind(this)), n.on($.support.clickEvent, this.handleContentToggle.bind(this))) : (i.on("mouseenter", this.activateTop.bind(this)), n.on("mouseenter", this.activateBottom.bind(this))), s.on($.support.clickEvent, this.openVideoPlayer.bind(this)), o.on($.support.clickEvent, this.handleMoreClick.bind(this)), "landscape" === this.getProp("orientation") && this.el.find(".top .valign-middle").animProp({translateX: "-4.5455%"}), i.animProp({height: "50%"}), n.animProp({height: "50%"}), this.bgTop = i, this.bgVideo = $()
            }, handleMoreClick: function (t) {
                this.getProp("active-part") || (t.preventDefault(), this.setProp("active", !0), this.setProp("active-part", "bottom"))
            }, handlePropChange: function (t, e, i) {
                if (this._super(t, e, i), "active-part" === t) {
                    var n = this.getChildWidget("bottom-more");
                    n.setProp("active", "bottom" === e), n.setProp("icon", "bottom" === e ? "plus" : "arrow")
                }
            }, getInitialState: function () {
                return $.extend(this._super(), {"active-part": null})
            }, activateTop: function () {
                this.setProp("active-part", "top")
            }, activateBottom: function () {
                this.setProp("active", !0), this.setProp("active-part", "bottom")
            }, handleContentToggle: function (t) {
                t.stopPropagation(), $(t.target).closest("a").length || this.getParentWidget().getProp("animating") || (this.getProp("active") ? this.setProp("active", !1) : (this.setProp("active", !0), this.setProp("active-part", "bottom")))
            }, openVideoPlayer: function (t) {
                $.support.mobile.any ? Widgets.getById("header").stopAudio() : (Widgets.getById("video").setProp("active", !0), t && t.preventDefault && t.preventDefault())
            }, closeVideoPlayer: function () {
                Widgets.getById("video").setProp("active", !1)
            }, getUIContentSizes: function (t) {
                {
                    var e, i = this.el.find(".content-partial"), n = this.el.find(".collapsed-partial");
                    this.getProp("active-part")
                }
                return e = this.getElementSize(i, null, function (t) {
                    t.find(".slideshow-slide").slice(1).remove(), t.find(".collapsed, .collapsed-partial").addClass("hidden")
                })[1], "full" === t.contentMode ? [this.getElementSize(n, "full", function (t) {
                    t.find(".fulltext").removeClass("hidden")
                })[1], e] : "partial" === t.contentMode ? [this.getElementSize(n, "half", function (t) {
                    t.find(".fulltext").addClass("hidden")
                })[1], e] : [0, e]
            }, getUISizes: function (t) {
                var e, i = this._super(t), n = 30, s = 120, o = Widgets.getById("controller").getProp("height");
                return i.is_vertical_mobile ? i.is_vertical_mobile && 529 > o ? (n = 10, s = 60) : (n = 0, s = 40) : i.is_mobile ? (n = 10, s = 75) : s = i.is_tablet ? 90 : 120, $.extend(i, {
                    contentMode: "none",
                    collapsedOverflow: !1,
                    topContainerMaxHeight: 0,
                    bottomAreaHeight: 0,
                    topContainerHeight: 50,
                    bottomContainerHeight: 50,
                    topContentOffset: "-4.5455%",
                    videoVisible: !i.is_mobile && i.active
                }), "top" === i.active_part ? (i.topContainerHeight = 64, i.bottomContainerHeight = 36) : "bottom" === i.active_part && (i.bottomContainerHeight = 70.85, i.topContainerHeight = 100 - i.bottomContainerHeight), i.topContainerMaxHeight = i.is_vertical_mobile ? Math.ceil(i.containerHeight / 2) : Math.ceil(.64 * i.containerHeight), i.topAreaHeight = Math.ceil(i.containerHeight * i.topContainerHeight / 100), i.bottomAreaHeight = i.containerHeight - i.topAreaHeight, "landscape" === i.orientation ? i.is_mobile ? i.topContentOffset = i.active ? "-16.5%" : i.inactive ? "-37.5%" : "-15%" : i.active ? i.topContentOffset = "0%" : i.inactive && (i.topContentOffset = "-9%") : i.is_mobile && (i.topContentOffset = "0%"), "bottom" === i.active_part ? i.contentMode = "portrait" === i.orientation || i.is_mobile ? "partial" : "full" : i.active_part || (i.contentMode = "portrait" === i.orientation || i.is_mobile ? "none" : "partial"), e = this.getUIContentSizes(i), i.contentHeight = e[0] + e[1], i.collapsedHeight = e[0], "full" != i.contentMode || i.is_mobile || i.is_tablet || i.bottomAreaHeight - 130 < i.contentHeight && (i.contentHeight = i.bottomAreaHeight - 130, i.collapsedHeight = i.contentHeight - 130, i.collapsedOverflow = !0), i.contentOffset = -i.contentHeight / 2, i.contentOffset -= n, i.contentOffset = Math.round(i.contentOffset), i.active || (i.is_vertical_mobile && 529 > o ? i.footerOffset = 5 : (i.footerOffset = -i.bottomAreaHeight / 2 + s, i.footerOffset += i.contentOffset + i.contentHeight, 529 > o && (i.footerOffset -= 35), i.footerOffset = Math.round(i.footerOffset))), tmp = cover(i.containerMaxWidth, i.topContainerMaxHeight, this.bgSizeRatio), i.backgroundSize = [tmp.width, tmp.height], tmp = cover.position(i.containerWidth, i.topAreaHeight, tmp.width, tmp.height), i.backgroundPosition = [tmp.left, tmp.top], i
            }, applyUISizes: function (t, e) {
                t && (this._super(t, e), this.applyUIPartsHeight(t, e), this.applyUIButtonPosition(t, e))
            }, applyUIBackground: function (t, e) {
                var i = this.bgVideo, n = this.bgTop;
                n.animCSS({backgroundSize: t.backgroundSize[0] + "px " + t.backgroundSize[1] + "px"}), n[e ? "anim" : "animCSS"]({backgroundPositionX: t.backgroundPosition[0] + "px"}, {
                    duration: 350,
                    easing: "ease-in-out"
                }), i.length && (i.animCSS({
                    width: t.backgroundSize[0] + "px",
                    height: t.backgroundSize[1] + "px"
                }), i.anim("stop", ["translateX"]), i[e ? "anim" : "animCSS"]({translateX: t.backgroundPosition[0] + "px"}, {
                    duration: 350,
                    easing: "ease-in-out"
                }))
            }, applyUIPartsHeight: function (t, e) {
                var i = this.el.find(".top"), n = this.el.find(".bottom");
                (i.length || element_bottom.length) && (i.anim("stop", ["height"]), i[e ? "anim" : "animCSS"]({height: t.topContainerHeight + "%"}, {
                    duration: 350,
                    easing: "ease-out"
                }), n.anim("stop", ["height"]), n[e ? "anim" : "animCSS"]({height: t.bottomContainerHeight + "%"}, {
                    duration: 350,
                    easing: "ease-out"
                }))
            }, applyUIButtonPosition: function (t, e) {
                var i = this.el.find(".top .valign-middle");
                i.length && (i.anim("stop", ["translateX"]), i[e ? "anim" : "animCSS"]({translateX: t.topContentOffset}, {
                    duration: 350,
                    easing: "ease-in-out"
                }))
            }, applyUIContentHeight: function (t, e) {
                var i = this.el.find(".collapsed, .collapsed-partial");
                if (i.length) {
                    var n = i.find(".fulltext"), s = t.active ? 350 : 250;
                    n.hasClass("hidden") && (n.removeClass("hidden"), n.animProp({opacity: 0})), i.anim("stop"), n.anim("stop"), "full" === t.contentMode ? (i[e ? "anim" : "animCSS"]({
                        height: t.collapsedHeight + "px",
                        opacity: 1
                    }, {duration: s}), n[e ? "anim" : "animCSS"]({opacity: 1}, {duration: s})) : "partial" === t.contentMode ? (i[e ? "anim" : "animCSS"]({
                        height: t.collapsedHeight + "px",
                        opacity: 1
                    }, {duration: s}), n[e ? "anim" : "animCSS"]({opacity: 0}, {duration: s})) : (i[e ? "anim" : "animCSS"]({
                        height: t.collapsedHeight + "px",
                        opacity: 0
                    }, {duration: s}), n[e ? "anim" : "animCSS"]({opacity: 0}, {duration: s}))
                }
            }, applyUIBackgroundVideoPlayback: function (t) {
                var e = this.bgVideo;
                e && e.length || !t.videoVisible || (e = this.bgVideo = $('<video					loop muted					autoplay					autostart="false"					preload="none"					width="800" height="450"					poster="./case02_files/background-video.jpg">					<source src="/assets/dist/videos/slide-3/interview-preview.mp4" type="video/mp4" />				</video>'), e.animCSS({
                    width: this.bgTop.animGet("width"),
                    height: this.bgTop.animGet("height"),
                    translateX: this.bgTop.animGet("backgroundPositionX"),
                    opacity: 0
                }, !0), e.get(0).volume = 0, e.on("timeupdate", this.handleVideoProgress.bind(this)), this.bgTop.prepend(e), this.startTimer(function () {
                    e.css("opacity", 1)
                }, 16)), e && e.length && (t.videoVisible ? e.get(0).play() : e.get(0).pause())
            }
        })
    }, {"./../components/widgets/slidepart": 40}],
    81: [function (t, e) {
        {
            var i = t("./../components/widgets/base");
            t("./../components/plugins/touchdrag")
        }
        e.exports = i.extend({
            NAME: "slideshow", init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.slides = this.el.find(".slideshow-slide"), this.count = this.slides.length, this.inner = this.el.find(".slideshow-inner"), this.inner.animProp({translateX: "0%"}), this.button = this.getParentWidget().getChildWidget("slideshow-toggle"), this.button && this.button.on($.support.clickEvent, this.toggle.bind(this)), $.support.touch && this.el.draggable({
                    activateFunction: function (t) {
                        if (this.getParentWidget().getProp("active") === !1)return !1;
                        if (Math.abs(t.deltaXY[0]) < 10)return !1;
                        var e = Math.abs(t.deltaXY[0] / (t.deltaXY[1] || 0));
                        return 1.25 > e ? !1 : !0
                    }.bind(this)
                }).on("dragstart", function (t) {
                    var e = this.el.width(), i = 1 / e / this.count;
                    t.store.width = e, t.store.rate = i
                }.bind(this)).on("dragmove", function (t) {
                    var e = this.getProp("slide"), i = this.count, n = t.deltaXY[0];
                    0 > n && i - 1 > e ? (n = -e / i + Math.max(n, -t.store.width) * t.store.rate, this.inner.anim("stop").animCSS({translateX: 100 * n + "%"})) : n > 0 && e > 0 && (n = -e / i + Math.max(n, -t.store.width) * t.store.rate, this.inner.anim("stop").animCSS({translateX: 100 * n + "%"}))
                }.bind(this)).on("dragend", function (t) {
                    var e = !0;
                    t.preventClick(), t.momentum()[0] < -5 ? this.next() && (e = !1) : t.momentum()[0] > 5 && this.previous() && (e = !1), e && this.uiTransitionSlide(this.getProp("slide")), t.stopPropagation()
                }.bind(this))
            }, handlePropChange: function (t, e, i) {
                "slide" === t && this.uiTransitionSlide(e, i)
            }, getInitialState: function () {
                return $.extend(this._super(), {slide: 0, icon: "icon-next-large"})
            }, next: function () {
                var t = this.getProp("slide");
                return t < this.count - 1 ? (this.setProp("slide", t + 1), !0) : void 0
            }, previous: function () {
                var t = this.getProp("slide");
                return t > 0 ? (this.setProp("slide", t - 1), !0) : void 0
            }, toggle: function () {
                var t = this.getProp("slide");
                0 === t ? this.next() : this.previous()
            }, uiTransitionSlide: function (t) {
                this.slides;
                this.button && (t > 0 ? this.button.setProp("icon", "prev-large") : this.button.setProp("icon", "next-large")), this.inner.anim("stop", ["translateX"]), this.inner.anim({translateX: -50 * t + "%"}, {
                    duration: 350,
                    easing: "ease-out"
                })
            }
        })
    }, {"./../components/plugins/touchdrag": 26, "./../components/widgets/base": 31}],
    82: [function (t, e) {
        var i = t("./../components/widgets/base"), n = t("./../components/plugins/cover");
        e.exports = i.extend({
            NAME: "button",
            script_loaded: !1,
            player: !1,
            videoRatio: 1280 / 720,
            init: function (t, e) {
                this._super(t, e), Widgets.init(this.el), this.video = this.el.find("video"), this.video.on($.support.clickEvent, this.close.bind(this)), Widgets.getById("controller").on("propChange:controller", this.handleSlideChange.bind(this)), this.el.find(".logo-overlay").animProp({opacity: 0}), $.contentSize.on("resize", function () {
                    this.uiUpdate()
                }.bind(this));
                var i = $(".ie-closebutton");
                (window.location.hash = !!window.MSInputMethodContext) && (i.show(), i.on($.support.clickEvent, this.close.bind(this)))
            },
            handleSlideChange: function (t, e) {
                this.getProp("active") && "slide" === e.name && 3 !== e.value && this.setProp("active", !1)
            },
            handleTimeUpdate: function () {
                var t = this.player;
                t.currentTime() > t.duration() - .7 ? this.setProp("completed", !0) : this.setProp("completed", !1)
            },
            handlePropChange: function (t, e, i) {
                "active" === t ? (this.uiTransitionActive(e, i), e ? this.uiUpdate() : this.stopVideo()) : "completed" === t && this.uiTransitionLogo(e)
            },
            getInitialState: function () {
                return $.extend(this._super(), {active: !1, completed: !1})
            },
            close: function () {
                this.setProp("active", !1)
            },
            playVideo: function () {
                this.getProp("active") && (Widgets.getById("header").pauseAudio(), this.player ? this.player.play() : this.initVideo())
            },
            stopVideo: function () {
                this.player && this.player.pause(), Widgets.getById("header").resumeAudio()
            },
            initVideo: function () {
                "undefined" != typeof videojs && (this.player = videojs(this.el.find("video").get(0), {controls: !0}), this.player.on("timeupdate", this.handleTimeUpdate.bind(this)), this.player.on("seeked", this.player.play.bind(this.player)), this.playVideo())
            },
            loadScript: function () {
                this.script_loaded = !0, $.getScript("/assets/dist/scripts/video.js", function () {
                    setTimeout(function () {
                        this.playVideo()
                    }.bind(this), 16)
                }.bind(this))
            },
            uiUpdate: function () {
                {
                    var t = $.contentSize(), e = n(t[0], t[1], this.videoRatio);
                    this.video
                }
                this.video.animCSS({
                    width: e.width + "px",
                    height: e.height + "px",
                    translateX: e.left + "px",
                    translateY: e.top + "px"
                })
            },
            uiTransitionActive: function (t) {
                var e = this.el;
                t ? (e.removeClass("hidden"), this.stopTimer(!0), this.startTimer(function () {
                    this.el.addClass("active"), this.startTimer(function () {
                        this.script_loaded ? this.playVideo() : this.loadScript()
                    }, 700)
                }, 16)) : (this.stopVideo(), this.stopTimer(!0), this.startTimer(function () {
                    this.el.removeClass("active"), this.startTimer(function () {
                        this.el.addClass("hidden")
                    }, 700)
                }))
            },
            uiTransitionLogo: function (t) {
                var e = this.el.find(".logo-overlay");
                t && e.removeClass("hidden"), e.anim("stop"), e.anim({opacity: t ? 1 : 0}, {
                    duration: 350,
                    complete: function () {
                        t || e.addClass("hidden")
                    }.bind(this)
                })
            }
        })
    }, {"./../components/plugins/cover": 13, "./../components/widgets/base": 31}],
    83: [function (t, e) {
        var i = (t("./components/widgets/base"), window.WidgetClasses = {
            Button: t("./components/widgets/button"),
            ButtonProgress: t("./components/widgets/button-progress-bar"),
            Slide: t("./components/widgets/slide"),
            SlidePart: t("./components/widgets/slidepart"),
            SlidePartThird: t("./components/widgets/slidepartthird"),
            Scrollable: t("./components/widgets/Scrollable"),
            Form: t("./components/widgets/Form"),
            Gallery: t("./components/widgets/gallery"),
            Carousel: t("./components/widgets/carousel"),
            Map: t("./components/widgets/map"),
            Header: t("./modules/header"),
            HeaderSoundButton: t("./modules/header-sound-button"),
            Menu: t("./modules/menu"),
            Video: t("./modules/video"),
            Slideshow: t("./modules/slideshow"),
            SlideController: t("./modules/slide-controller"),
            SlideNavigation: t("./modules/slide-navigation"),
            SlideNavigationButton: t("./modules/slide-navigation-button"),
            SlideMain: t("./modules/slide-main"),
            SlidePartVideo: t("./modules/slide-part-video"),
            SlidePartGallery: t("./modules/slide-part-gallery"),
            LandingSlideController: t("./modules/landing/slide-controller"),
            SlidePartLocation: t("./modules/landing/slide-part-location"),
            SlidePartArchitect: t("./modules/landing/slide-part-arhitect"),
            SlideMapLocation: t("./modules/landing/slide-map-location"),
            SlideEcoTech: t("./modules/landing/slide-eco-tech"),
            SlidePartInfra: t("./modules/landing/slide-part-infra"),
            Space: t("./modules/landing/space"),
            SectionAbout: t("./modules/about/a1"),
            SectionAboutOverlay: t("./modules/about/slidepart"),
            DesignSlidePartArchitect: t("./modules/design/slide-part-architect"),
            DesignSlidePartExterior: t("./modules/design/slide-part-exterior"),
            DesignSlidePartInterior: t("./modules/design/slide-part-interior"),
            SectionInfrastructure: t("./modules/infrastructure/i1"),
            SectionFloorPlan: t("./modules/floor-plans/slide"),
            SectionFloorPlanSidebar: t("./modules/floor-plans/sidebar"),
            SectionFloorPlanForm: t("./modules/floor-plans/form"),
            SectionAmenitiesSlidePart: t("./modules/amenities/slide-part-amenities"),
            SectionAmenitiesSlidePartGallery: t("./modules/amenities/slide-part-gallery"),
            SectionAmenitiesSlidePartContent: t("./modules/amenities/slide-part-content"),
            SectionAmenitiesContentButton: t("./modules/amenities/button"),
            SlideLocation: t("./modules/location/slide"),
            Contacts: t("./modules/contacts/contacts"),
            ContactsForm: t("./modules/contacts/form"),
            SectionCalculator: t("./modules/calculator/slide"),
            SlidePartContacts: t("./modules/calculator/slide-part-contacts"),
            SlidePartCalculator: t("./modules/calculator/slide-part-calculator"),
            SectionNewsSlidePart: t("./modules/news/slide-part-news"),
            InfiniteScroll: t("./modules/news/infinite-scroll"),
            Section404: t("./modules/404/section")
        }), n = {
            getFromNode: function (t) {
                var e, n = t.data("widget") || null;
                return n || (e = t.data("attach"), e && i[e] && (n = new i[e](t))), n
            }, getById: function (t, e) {
                var i = (e || $("body")).find('[data-id="' + t + '"], [id="' + t + '"]');
                return this.getFromNode(i)
            }, init: function (t) {
                for (var e, i, n = t && t.el ? t.el : t || $("body"), s = this.findTopElements(n), o = 0, a = s.length, r = {}; a > o; o++)e = s.eq(o), i = e.data("widget"), i || (i = this.getFromNode(e)), i && (r[i.getProp("id")] = i);
                return r
            }, findTopElements: function (t) {
                for (var e, i, n = t || $("body"), s = n.find("[data-attach]"), o = 0, a = s.length, r = (n.parent(), $()); a > o; o++)e = s.eq(o), i = e.parent().closest("[data-attach]"), i.length && !n.closest(i).length || (r = r.add(e));
                return r
            }
        };
        $.fn.widget = function () {
            return n.getFromNode(this)
        }, e.exports = n
    }, {
        "./components/widgets/Form": 29,
        "./components/widgets/Scrollable": 30,
        "./components/widgets/base": 31,
        "./components/widgets/button": 33,
        "./components/widgets/button-progress-bar": 32,
        "./components/widgets/carousel": 34,
        "./components/widgets/gallery": 36,
        "./components/widgets/map": 37,
        "./components/widgets/slide": 39,
        "./components/widgets/slidepart": 40,
        "./components/widgets/slidepartthird": 41,
        "./modules/404/section": 42,
        "./modules/about/a1": 43,
        "./modules/about/slidepart": 44,
        "./modules/amenities/button": 45,
        "./modules/amenities/slide-part-amenities": 46,
        "./modules/amenities/slide-part-content": 47,
        "./modules/amenities/slide-part-gallery": 48,
        "./modules/calculator/slide": 51,
        "./modules/calculator/slide-part-calculator": 49,
        "./modules/calculator/slide-part-contacts": 50,
        "./modules/contacts/contacts": 52,
        "./modules/contacts/form": 53,
        "./modules/design/slide-part-architect": 54,
        "./modules/design/slide-part-exterior": 55,
        "./modules/design/slide-part-interior": 56,
        "./modules/floor-plans/form": 57,
        "./modules/floor-plans/sidebar": 58,
        "./modules/floor-plans/slide": 59,
        "./modules/header": 61,
        "./modules/header-sound-button": 60,
        "./modules/infrastructure/i1": 62,
        "./modules/landing/slide-controller": 63,
        "./modules/landing/slide-eco-tech": 64,
        "./modules/landing/slide-map-location": 65,
        "./modules/landing/slide-part-arhitect": 66,
        "./modules/landing/slide-part-infra": 67,
        "./modules/landing/slide-part-location": 68,
        "./modules/landing/space": 69,
        "./modules/location/slide": 70,
        "./modules/menu": 71,
        "./modules/news/infinite-scroll": 73,
        "./modules/news/slide-part-news": 74,
        "./modules/slide-controller": 75,
        "./modules/slide-main": 76,
        "./modules/slide-navigation": 78,
        "./modules/slide-navigation-button": 77,
        "./modules/slide-part-gallery": 79,
        "./modules/slide-part-video": 80,
        "./modules/slideshow": 81,
        "./modules/video": 82
    }],
    84: [function (t) {
        var e = t("./../bower/fastclick");
        t("./app/components/plugins/modernizr"), window.$ = window.jQuery = t("./../bower/jquery"), t("./../bower/circle-progress"), t("./../bower/autoNumeric"), t("./../bower/jquery.touchSwipe"), t("./app/components/plugins/preloader"), t("./app/components/plugins/support"), t("./app/components/plugins/resize"), t("./app/components/plugins/jquery.select"), window.gyro = t("./app/components/plugins/gyro"), window.matchMedia = window.matchMedia || function (t) {
            var e = window.styleMedia || window.media;
            return {matches: e.matchMedium(t || "all"), media: t || "all"}
        }, $.support.mobile.tablet && $.support.device.os.ios && $.support.device.os.ios < 8 && (window.navigator.standalone || $("html").addClass("ios7-overflow-fix")), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Opera") && $("html").addClass("safari"), $(document).bind("touchmove", !1);
        {
            var i = window.Widgets = t("./app/widgets");
            window.Animate = t("./app/components/animate")
        }
        $(function () {
            e(document.body);
            var n = $("body"), s = t("./app/modules/mobile");
            s.init(), n.removeClass("disable-transitions").addClass($.support.touch ? "touch" : "no-touch").addClass("js-ui"), i.init()
        })
    }, {
        "./../bower/autoNumeric": 2,
        "./../bower/circle-progress": 3,
        "./../bower/fastclick": 4,
        "./../bower/jquery": 5,
        "./../bower/jquery.touchSwipe": 6,
        "./app/components/animate": 7,
        "./app/components/plugins/gyro": 16,
        "./app/components/plugins/jquery.select": 21,
        "./app/components/plugins/modernizr": 22,
        "./app/components/plugins/preloader": 23,
        "./app/components/plugins/resize": 24,
        "./app/components/plugins/support": 25,
        "./app/modules/mobile": 72,
        "./app/widgets": 83
    }]
}, {}, [84]);