"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = e(require("react")),
  n = e(require("prop-types")),
  r = e(require("classnames")),
  a = e(require("date-fns/isDate")),
  o = e(require("date-fns/isValid")),
  s = e(require("date-fns/format")),
  i = e(require("date-fns/addMinutes")),
  p = e(require("date-fns/addHours")),
  c = e(require("date-fns/addDays")),
  l = e(require("date-fns/addWeeks")),
  u = e(require("date-fns/addMonths")),
  d = e(require("date-fns/addYears"));
require("date-fns/subMinutes"), require("date-fns/subHours");
var h = e(require("date-fns/subDays")),
  m = e(require("date-fns/subWeeks")),
  f = e(require("date-fns/subMonths")),
  y = e(require("date-fns/subYears")),
  D = e(require("date-fns/getSeconds")),
  v = e(require("date-fns/getMinutes")),
  w = e(require("date-fns/getHours")),
  g = e(require("date-fns/getDay")),
  b = e(require("date-fns/getDate")),
  k = e(require("date-fns/getWeek")),
  C = e(require("date-fns/getMonth")),
  S = e(require("date-fns/getQuarter")),
  _ = e(require("date-fns/getYear")),
  M = e(require("date-fns/getTime")),
  O = e(require("date-fns/setSeconds")),
  P = e(require("date-fns/setMinutes")),
  E = e(require("date-fns/setHours")),
  N = e(require("date-fns/setMonth")),
  T = e(require("date-fns/setQuarter")),
  x = e(require("date-fns/setYear")),
  Y = e(require("date-fns/min")),
  I = e(require("date-fns/max")),
  L = e(require("date-fns/differenceInCalendarDays")),
  R = e(require("date-fns/differenceInCalendarMonths"));
require("date-fns/differenceInCalendarWeeks");
var q = e(require("date-fns/differenceInCalendarYears")),
  F = e(require("date-fns/startOfDay")),
  A = e(require("date-fns/startOfWeek")),
  W = e(require("date-fns/startOfMonth")),
  B = e(require("date-fns/startOfQuarter")),
  j = e(require("date-fns/startOfYear")),
  K = e(require("date-fns/endOfDay"));
require("date-fns/endOfWeek"), require("date-fns/endOfMonth");
var V = e(require("date-fns/isEqual")),
  H = e(require("date-fns/isSameDay")),
  Q = e(require("date-fns/isSameMonth")),
  U = e(require("date-fns/isSameYear")),
  Z = e(require("date-fns/isSameQuarter")),
  $ = e(require("date-fns/isAfter")),
  z = e(require("date-fns/isBefore")),
  G = e(require("date-fns/isWithinInterval")),
  J = e(require("date-fns/toDate")),
  X = e(require("date-fns/parse")),
  ee = e(require("date-fns/parseISO")),
  te = e(require("react-onclickoutside"));
require("date-fns");
var ne = require("react-popper"),
  re = e(require("react-dom"));
function ae(e) {
  return (ae =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function oe(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function se(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function ie(e, t, n) {
  return t && se(e.prototype, t), n && se(e, n), e;
}
function pe(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function ce() {
  return (ce =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function le(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? le(Object(n), !0).forEach(function(t) {
          pe(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : le(Object(n)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function de(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && me(e, t);
}
function he(e) {
  return (he = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function me(e, t) {
  return (me =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function fe(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ye(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t) ? fe(e) : t;
}
function De(e) {
  var t = (function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function() {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function() {
    var n,
      r = he(e);
    if (t) {
      var a = he(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return ye(this, n);
  };
}
function ve(e, t) {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}
function we(e, t) {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}
var ge = {
    p: we,
    P: function(e, t) {
      var n,
        r = e.match(/(P+)(p+)?/),
        a = r[1],
        o = r[2];
      if (!o) return ve(e, t);
      switch (a) {
        case "P":
          n = t.dateTime({ width: "short" });
          break;
        case "PP":
          n = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          n = t.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          n = t.dateTime({ width: "full" });
      }
      return n.replace("{{date}}", ve(a, t)).replace("{{time}}", we(o, t));
    }
  },
  be = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function ke(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? ee(e)
      : J(e)
    : new Date();
  return Se(t) ? t : null;
}
function Ce(e, t, n, r) {
  var a = null,
    o = We(n) || Ae(),
    i = !0;
  return Array.isArray(t)
    ? (t.forEach(function(t) {
        var n = X(
          e,
          t.replace("DD", "dd").replace("YYYY", "yyyy"),
          new Date(),
          { locale: o }
        );
        r &&
          (i =
            Se(n) &&
            e ===
              s(n, t.replace("DD", "dd").replace("YYYY", "yyyy"), {
                awareOfUnicodeTokens: !0
              })),
          Se(n) && i && (a = n);
      }),
      a)
    : ((a = X(e, t.replace("DD", "dd").replace("YYYY", "yyyy"), new Date(), {
        locale: o
      })),
      r
        ? (i =
            Se(a) &&
            e ===
              s(a, t.replace("DD", "dd").replace("YYYY", "yyyy"), {
                awareOfUnicodeTokens: !0
              }))
        : Se(a) ||
          ((t = t
            .match(be)
            .map(function(e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? o
                  ? (0, ge[t])(e, o.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 &&
            (a = X(
              e,
              t.replace("DD", "dd").replace("YYYY", "yyyy"),
              new Date()
            )),
          Se(a) || (a = new Date(e))),
      Se(a) && i ? a : null);
}
function Se(e) {
  return o(e) && $(e, new Date("1/1/1000"));
}
function _e(e, t, n) {
  if ("en" === n) return s(e, t, { awareOfUnicodeTokens: !0 });
  var r = We(n);
  return (
    n &&
      !r &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          n,
          '"].'
        )
      ),
    !r && Ae() && We(Ae()) && (r = We(Ae())),
    s(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
  );
}
function Me(e, t) {
  var n = t.hour,
    r = void 0 === n ? 0 : n,
    a = t.minute,
    o = void 0 === a ? 0 : a,
    s = t.second;
  return E(P(O(e, void 0 === s ? 0 : s), o), r);
}
function Oe(e, t) {
  var n = (t && We(t)) || (Ae() && We(Ae()));
  return k(e, n ? { locale: n } : null);
}
function Pe(e, t) {
  return _e(e, "ddd", t);
}
function Ee(e) {
  return F(e);
}
function Ne(e, t, n) {
  var r = We(t || Ae());
  return A(e, { locale: r, weekStartsOn: n });
}
function Te(e) {
  return W(e);
}
function xe(e) {
  return B(e);
}
function Ye(e, t) {
  return e && t ? U(e, t) : !e && !t;
}
function Ie(e, t) {
  return e && t ? Q(e, t) : !e && !t;
}
function Le(e, t) {
  return e && t ? Z(e, t) : !e && !t;
}
function Re(e, t) {
  return e && t ? H(e, t) : !e && !t;
}
function qe(e, t) {
  return e && t ? V(e, t) : !e && !t;
}
function Fe(e, t, n) {
  var r,
    a = F(t),
    o = K(n);
  try {
    r = G(e, { start: a, end: o });
  } catch (e) {
    r = !1;
  }
  return r;
}
function Ae() {
  return ("undefined" != typeof window ? window : global).__localeId__;
}
function We(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : global;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Be(e, t) {
  return _e(N(ke(), e), "LLLL", t);
}
function je(e, t) {
  return _e(N(ke(), e), "LLL", t);
}
function Ke(e, t) {
  return _e(T(ke(), e), "QQQ", t);
}
function Ve(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    ze(e, { minDate: n, maxDate: r }) ||
    (a &&
      a.some(function(t) {
        return Re(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Re(e, t);
      })) ||
    (s && !s(ke(e))) ||
    !1
  );
}
function He(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.excludeDates;
  return (
    (n &&
      n.some(function(t) {
        return Re(e, t);
      })) ||
    !1
  );
}
function Qe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    ze(e, { minDate: n, maxDate: r }) ||
    (a &&
      a.some(function(t) {
        return Ie(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Ie(e, t);
      })) ||
    (s && !s(ke(e))) ||
    !1
  );
}
function Ue(e, t, n, r) {
  var a = _(e),
    o = C(e),
    s = _(t),
    i = C(t),
    p = _(r);
  return a === s && a === p
    ? o <= n && n <= i
    : a < s
    ? (p === a && o <= n) || (p === s && i >= n) || (p < s && p > a)
    : void 0;
}
function Ze(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    ze(e, { minDate: n, maxDate: r }) ||
    (a &&
      a.some(function(t) {
        return Le(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Le(e, t);
      })) ||
    (s && !s(ke(e))) ||
    !1
  );
}
function $e(e, t, n, r) {
  var a = _(e),
    o = S(e),
    s = _(t),
    i = S(t),
    p = _(r);
  return a === s && a === p
    ? o <= n && n <= i
    : a < s
    ? (p === a && o <= n) || (p === s && i >= n) || (p < s && p > a)
    : void 0;
}
function ze(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate;
  return (n && L(e, n) < 0) || (r && L(e, r) > 0);
}
function Ge(e, t) {
  for (var n = t.length, r = 0; r < n; r++)
    if (w(t[r]) === w(e) && v(t[r]) === v(e)) return !0;
  return !1;
}
function Je(e, t) {
  var n = t.minTime,
    r = t.maxTime;
  if (!n || !r) throw new Error("Both minTime and maxTime props required");
  var a,
    o = ke(),
    s = E(P(o, v(e)), w(e)),
    i = E(P(o, v(n)), w(n)),
    p = E(P(o, v(r)), w(r));
  try {
    a = !G(s, { start: i, end: p });
  } catch (e) {
    a = !1;
  }
  return a;
}
function Xe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.minDate,
    r = t.includeDates,
    a = f(e, 1);
  return (
    (n && R(n, a) > 0) ||
    (r &&
      r.every(function(e) {
        return R(e, a) > 0;
      })) ||
    !1
  );
}
function et(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.maxDate,
    r = t.includeDates,
    a = u(e, 1);
  return (
    (n && R(a, n) > 0) ||
    (r &&
      r.every(function(e) {
        return R(a, e) > 0;
      })) ||
    !1
  );
}
function tt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.minDate,
    r = t.includeDates,
    a = y(e, 1);
  return (
    (n && q(n, a) > 0) ||
    (r &&
      r.every(function(e) {
        return q(e, a) > 0;
      })) ||
    !1
  );
}
function nt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.maxDate,
    r = t.includeDates,
    a = d(e, 1);
  return (
    (n && q(a, n) > 0) ||
    (r &&
      r.every(function(e) {
        return q(a, e) > 0;
      })) ||
    !1
  );
}
function rt(e) {
  var t = e.minDate,
    n = e.includeDates;
  if (n && t) {
    var r = n.filter(function(e) {
      return L(e, t) >= 0;
    });
    return Y(r);
  }
  return n ? Y(n) : t;
}
function at(e) {
  var t = e.maxDate,
    n = e.includeDates;
  if (n && t) {
    var r = n.filter(function(e) {
      return L(e, t) <= 0;
    });
    return I(r);
  }
  return n ? I(n) : t;
}
function ot() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      n = new Map(),
      r = 0,
      o = e.length;
    r < o;
    r++
  ) {
    var s = e[r];
    if (a(s)) {
      var i = _e(s, "MM.dd.yyyy"),
        p = n.get(i) || [];
      p.includes(t) || (p.push(t), n.set(i, p));
    } else if ("object" === ae(s)) {
      var c = Object.keys(s),
        l = c[0],
        u = s[c[0]];
      if ("string" == typeof l && u.constructor === Array)
        for (var d = 0, h = u.length; d < h; d++) {
          var m = _e(u[d], "MM.dd.yyyy"),
            f = n.get(m) || [];
          f.includes(l) || (f.push(l), n.set(m, f));
        }
    }
  }
  return n;
}
function st(e, t, n, r, a) {
  for (var o = a.length, s = [], c = 0; c < o; c++) {
    var l = i(p(e, w(a[c])), v(a[c])),
      u = i(e, (n + 1) * r);
    $(l, t) && z(l, u) && s.push(a[c]);
  }
  return s;
}
function it(e) {
  return 1 === e.toString().length ? "0".concat(e) : "".concat(e);
}
function pt(e, t, n, r) {
  for (var a = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      i = !0;
    n && (i = _(n) <= s), r && i && (i = _(r) >= s), i && a.push(s);
  }
  return a;
}
var ct = (function(e) {
  de(a, t.Component);
  var n = De(a);
  function a(e) {
    var r;
    oe(this, a),
      pe(fe((r = n.call(this, e))), "renderOptions", function() {
        var e = r.props.year,
          n = r.state.yearsList.map(function(n) {
            return t.createElement(
              "div",
              {
                className:
                  e === n
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: n,
                onClick: r.onChange.bind(fe(r), n)
              },
              e === n
                ? t.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓"
                  )
                : "",
              n
            );
          }),
          a = r.props.minDate ? _(r.props.minDate) : null,
          o = r.props.maxDate ? _(r.props.maxDate) : null;
        return (
          (o &&
            r.state.yearsList.find(function(e) {
              return e === o;
            })) ||
            n.unshift(
              t.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: r.incrementYears
                },
                t.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                })
              )
            ),
          (a &&
            r.state.yearsList.find(function(e) {
              return e === a;
            })) ||
            n.push(
              t.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: r.decrementYears
                },
                t.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                })
              )
            ),
          n
        );
      }),
      pe(fe(r), "onChange", function(e) {
        r.props.onChange(e);
      }),
      pe(fe(r), "handleClickOutside", function() {
        r.props.onCancel();
      }),
      pe(fe(r), "shiftYears", function(e) {
        var t = r.state.yearsList.map(function(t) {
          return t + e;
        });
        r.setState({ yearsList: t });
      }),
      pe(fe(r), "incrementYears", function() {
        return r.shiftYears(1);
      }),
      pe(fe(r), "decrementYears", function() {
        return r.shiftYears(-1);
      });
    var o = e.yearDropdownItemNumber,
      s = e.scrollableYearDropdown,
      i = o || (s ? 10 : 5);
    return (
      (r.state = {
        yearsList: pt(r.props.year, i, r.props.minDate, r.props.maxDate)
      }),
      r
    );
  }
  return (
    ie(a, [
      {
        key: "render",
        value: function() {
          var e = r({
            "react-datepicker__year-dropdown": !0,
            "react-datepicker__year-dropdown--scrollable": this.props
              .scrollableYearDropdown
          });
          return t.createElement("div", { className: e }, this.renderOptions());
        }
      }
    ]),
    a
  );
})();
pe(ct, "propTypes", {
  minDate: n.instanceOf(Date),
  maxDate: n.instanceOf(Date),
  onCancel: n.func.isRequired,
  onChange: n.func.isRequired,
  scrollableYearDropdown: n.bool,
  year: n.number.isRequired,
  yearDropdownItemNumber: n.number
});
var lt = te(ct),
  ut = (function(e) {
    de(r, t.Component);
    var n = De(r);
    function r() {
      var e;
      oe(this, r);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        pe(fe((e = n.call.apply(n, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        pe(fe(e), "renderSelectOptions", function() {
          for (
            var n = e.props.minDate ? _(e.props.minDate) : 1900,
              r = e.props.maxDate ? _(e.props.maxDate) : 2100,
              a = [],
              o = n;
            o <= r;
            o++
          )
            a.push(t.createElement("option", { key: o, value: o }, o));
          return a;
        }),
        pe(fe(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        pe(fe(e), "renderSelectMode", function() {
          return t.createElement(
            "select",
            {
              value: e.props.year,
              className: "react-datepicker__year-select",
              onChange: e.onSelectChange
            },
            e.renderSelectOptions()
          );
        }),
        pe(fe(e), "renderReadView", function(n) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: n ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function(t) {
                return e.toggleDropdown(t);
              }
            },
            t.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              e.props.year
            )
          );
        }),
        pe(fe(e), "renderDropdown", function() {
          return t.createElement(lt, {
            key: "dropdown",
            year: e.props.year,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableYearDropdown: e.props.scrollableYearDropdown,
            yearDropdownItemNumber: e.props.yearDropdownItemNumber
          });
        }),
        pe(fe(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            n = [e.renderReadView(!t)];
          return t && n.unshift(e.renderDropdown()), n;
        }),
        pe(fe(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        pe(fe(e), "toggleDropdown", function(t) {
          e.setState({ dropdownVisible: !e.state.dropdownVisible }, function() {
            e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
          });
        }),
        pe(fe(e), "handleYearChange", function(t, n) {
          e.onSelect(t, n), e.setOpen();
        }),
        pe(fe(e), "onSelect", function(t, n) {
          e.props.onSelect && e.props.onSelect(t, n);
        }),
        pe(fe(e), "setOpen", function() {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      ie(r, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      r
    );
  })();
pe(ut, "propTypes", {
  adjustDateOnChange: n.bool,
  dropdownMode: n.oneOf(["scroll", "select"]).isRequired,
  maxDate: n.instanceOf(Date),
  minDate: n.instanceOf(Date),
  onChange: n.func.isRequired,
  scrollableYearDropdown: n.bool,
  year: n.number.isRequired,
  yearDropdownItemNumber: n.number,
  date: n.instanceOf(Date),
  onSelect: n.func,
  setOpen: n.func
});
var dt = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r() {
    var e;
    oe(this, r);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return (
      pe(
        fe((e = n.call.apply(n, [this].concat(o)))),
        "renderOptions",
        function() {
          return e.props.monthNames.map(function(n, r) {
            return t.createElement(
              "div",
              {
                className:
                  e.props.month === r
                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                    : "react-datepicker__month-option",
                key: n,
                onClick: e.onChange.bind(fe(e), r)
              },
              e.props.month === r
                ? t.createElement(
                    "span",
                    { className: "react-datepicker__month-option--selected" },
                    "✓"
                  )
                : "",
              n
            );
          });
        }
      ),
      pe(fe(e), "onChange", function(t) {
        return e.props.onChange(t);
      }),
      pe(fe(e), "handleClickOutside", function() {
        return e.props.onCancel();
      }),
      e
    );
  }
  return (
    ie(r, [
      {
        key: "render",
        value: function() {
          return t.createElement(
            "div",
            { className: "react-datepicker__month-dropdown" },
            this.renderOptions()
          );
        }
      }
    ]),
    r
  );
})();
pe(dt, "propTypes", {
  onCancel: n.func.isRequired,
  onChange: n.func.isRequired,
  month: n.number.isRequired,
  monthNames: n.arrayOf(n.string.isRequired).isRequired
});
var ht = te(dt),
  mt = (function(e) {
    de(r, t.Component);
    var n = De(r);
    function r() {
      var e;
      oe(this, r);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        pe(fe((e = n.call.apply(n, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        pe(fe(e), "renderSelectOptions", function(e) {
          return e.map(function(e, n) {
            return t.createElement("option", { key: n, value: n }, e);
          });
        }),
        pe(fe(e), "renderSelectMode", function(n) {
          return t.createElement(
            "select",
            {
              value: e.props.month,
              className: "react-datepicker__month-select",
              onChange: function(t) {
                return e.onChange(t.target.value);
              }
            },
            e.renderSelectOptions(n)
          );
        }),
        pe(fe(e), "renderReadView", function(n, r) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: n ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: e.toggleDropdown
            },
            t.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month"
              },
              r[e.props.month]
            )
          );
        }),
        pe(fe(e), "renderDropdown", function(n) {
          return t.createElement(ht, {
            key: "dropdown",
            month: e.props.month,
            monthNames: n,
            onChange: e.onChange,
            onCancel: e.toggleDropdown
          });
        }),
        pe(fe(e), "renderScrollMode", function(t) {
          var n = e.state.dropdownVisible,
            r = [e.renderReadView(!n, t)];
          return n && r.unshift(e.renderDropdown(t)), r;
        }),
        pe(fe(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        pe(fe(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      ie(r, [
        {
          key: "render",
          value: function() {
            var e,
              n = this,
              r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function(e) {
                      return je(e, n.props.locale);
                    }
                  : function(e) {
                      return Be(e, n.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(r);
                break;
              case "select":
                e = this.renderSelectMode(r);
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      r
    );
  })();
function ft(e, t) {
  for (var n = [], r = Te(e), a = Te(t); !$(r, a); )
    n.push(ke(r)), (r = u(r, 1));
  return n;
}
pe(mt, "propTypes", {
  dropdownMode: n.oneOf(["scroll", "select"]).isRequired,
  locale: n.string,
  month: n.number.isRequired,
  onChange: n.func.isRequired,
  useShortMonthInDropdown: n.bool
});
var yt = (function(e) {
  de(a, t.Component);
  var n = De(a);
  function a(e) {
    var r;
    return (
      oe(this, a),
      pe(fe((r = n.call(this, e))), "renderOptions", function() {
        return r.state.monthYearsList.map(function(e) {
          var n = M(e),
            a = Ye(r.props.date, e) && Ie(r.props.date, e);
          return t.createElement(
            "div",
            {
              className: a
                ? "react-datepicker__month-year-option --selected_month-year"
                : "react-datepicker__month-year-option",
              key: n,
              onClick: r.onChange.bind(fe(r), n)
            },
            a
              ? t.createElement(
                  "span",
                  {
                    className: "react-datepicker__month-year-option--selected"
                  },
                  "✓"
                )
              : "",
            _e(e, r.props.dateFormat)
          );
        });
      }),
      pe(fe(r), "onChange", function(e) {
        return r.props.onChange(e);
      }),
      pe(fe(r), "handleClickOutside", function() {
        r.props.onCancel();
      }),
      (r.state = { monthYearsList: ft(r.props.minDate, r.props.maxDate) }),
      r
    );
  }
  return (
    ie(a, [
      {
        key: "render",
        value: function() {
          var e = r({
            "react-datepicker__month-year-dropdown": !0,
            "react-datepicker__month-year-dropdown--scrollable": this.props
              .scrollableMonthYearDropdown
          });
          return t.createElement("div", { className: e }, this.renderOptions());
        }
      }
    ]),
    a
  );
})();
pe(yt, "propTypes", {
  minDate: n.instanceOf(Date).isRequired,
  maxDate: n.instanceOf(Date).isRequired,
  onCancel: n.func.isRequired,
  onChange: n.func.isRequired,
  scrollableMonthYearDropdown: n.bool,
  date: n.instanceOf(Date).isRequired,
  dateFormat: n.string.isRequired
});
var Dt = te(yt),
  vt = (function(e) {
    de(r, t.Component);
    var n = De(r);
    function r() {
      var e;
      oe(this, r);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        pe(fe((e = n.call.apply(n, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        pe(fe(e), "renderSelectOptions", function() {
          for (
            var n = Te(e.props.minDate), r = Te(e.props.maxDate), a = [];
            !$(n, r);

          ) {
            var o = M(n);
            a.push(
              t.createElement(
                "option",
                { key: o, value: o },
                _e(n, e.props.dateFormat, e.props.locale)
              )
            ),
              (n = u(n, 1));
          }
          return a;
        }),
        pe(fe(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        pe(fe(e), "renderSelectMode", function() {
          return t.createElement(
            "select",
            {
              value: M(Te(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange
            },
            e.renderSelectOptions()
          );
        }),
        pe(fe(e), "renderReadView", function(n) {
          var r = _e(e.props.date, e.props.dateFormat, e.props.locale);
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: n ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function(t) {
                return e.toggleDropdown(t);
              }
            },
            t.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year"
              },
              r
            )
          );
        }),
        pe(fe(e), "renderDropdown", function() {
          return t.createElement(Dt, {
            key: "dropdown",
            date: e.props.date,
            dateFormat: e.props.dateFormat,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableMonthYearDropdown: e.props.scrollableMonthYearDropdown
          });
        }),
        pe(fe(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            n = [e.renderReadView(!t)];
          return t && n.unshift(e.renderDropdown()), n;
        }),
        pe(fe(e), "onChange", function(t) {
          e.toggleDropdown();
          var n = ke(parseInt(t));
          (Ye(e.props.date, n) && Ie(e.props.date, n)) || e.props.onChange(n);
        }),
        pe(fe(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      ie(r, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      r
    );
  })();
pe(vt, "propTypes", {
  dropdownMode: n.oneOf(["scroll", "select"]).isRequired,
  dateFormat: n.string.isRequired,
  locale: n.string,
  maxDate: n.instanceOf(Date).isRequired,
  minDate: n.instanceOf(Date).isRequired,
  date: n.instanceOf(Date).isRequired,
  onChange: n.func.isRequired,
  scrollableMonthYearDropdown: n.bool
});
var wt = (function(e) {
  de(a, t.Component);
  var n = De(a);
  function a() {
    var e;
    oe(this, a);
    for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
      s[i] = arguments[i];
    return (
      pe(fe((e = n.call.apply(n, [this].concat(s)))), "dayEl", t.createRef()),
      pe(fe(e), "handleClick", function(t) {
        !e.isDisabled() && e.props.onClick && e.props.onClick(t);
      }),
      pe(fe(e), "handleMouseEnter", function(t) {
        !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
      }),
      pe(fe(e), "handleOnKeyDown", function(t) {
        " " === t.key && (t.preventDefault(), (t.key = "Enter")),
          e.props.handleOnKeyDown(t);
      }),
      pe(fe(e), "isSameDay", function(t) {
        return Re(e.props.day, t);
      }),
      pe(fe(e), "isKeyboardSelected", function() {
        return (
          !e.props.disabledKeyboardNavigation &&
          !e.props.inline &&
          !e.isSameDay(e.props.selected) &&
          e.isSameDay(e.props.preSelection)
        );
      }),
      pe(fe(e), "isDisabled", function() {
        return Ve(e.props.day, e.props);
      }),
      pe(fe(e), "isExcluded", function() {
        return He(e.props.day, e.props);
      }),
      pe(fe(e), "getHighLightedClass", function(t) {
        var n = e.props,
          r = n.day,
          a = n.highlightDates;
        if (!a) return !1;
        var o = _e(r, "MM.dd.yyyy");
        return a.get(o);
      }),
      pe(fe(e), "isInRange", function() {
        var t = e.props,
          n = t.day,
          r = t.startDate,
          a = t.endDate;
        return !(!r || !a) && Fe(n, r, a);
      }),
      pe(fe(e), "isInSelectingRange", function() {
        var t = e.props,
          n = t.day,
          r = t.selectsStart,
          a = t.selectsEnd,
          o = t.selectingDate,
          s = t.startDate,
          i = t.endDate;
        return (
          !((!r && !a) || !o || e.isDisabled()) &&
          !qe(o, i) &&
            !qe(o, s) &&
            (r && i && (z(o, i) || qe(o, i))
              ? Fe(n, o, i)
              : !(!a || !s || (!$(o, s) && !qe(o, s))) && Fe(n, s, o))
        );
      }),
      pe(fe(e), "isSelectingRangeStart", function() {
        if (!e.isInSelectingRange()) return !1;
        var t = e.props,
          n = t.day,
          r = t.selectingDate,
          a = t.startDate;
        return t.selectsStart ? Re(n, r) && z(r, a) : Re(n, a);
      }),
      pe(fe(e), "isSelectingRangeEnd", function() {
        if (!e.isInSelectingRange()) return !1;
        var t = e.props,
          n = t.day,
          r = t.selectingDate,
          a = t.endDate;
        return t.selectsEnd ? Re(n, r) && $(r, a) : Re(n, a);
      }),
      pe(fe(e), "isRangeStart", function() {
        var t = e.props,
          n = t.day,
          r = t.startDate,
          a = t.endDate;
        return !(!r || !a) && Re(r, n);
      }),
      pe(fe(e), "isRangeEnd", function() {
        var t = e.props,
          n = t.day,
          r = t.startDate,
          a = t.endDate;
        return !(!r || !a) && Re(a, n);
      }),
      pe(fe(e), "checkOverLapping", function() {
        var t = e.props,
          n = t.day,
          r = t.endDate,
          a = t.selectsEnd,
          o = t.startDate,
          s = t.selectsStart;
        return a ? Re(r, n) : !!s && Re(o, n);
      }),
      pe(fe(e), "isWeekend", function() {
        var t = g(e.props.day);
        return 0 === t || 6 === t;
      }),
      pe(fe(e), "isOutsideMonth", function() {
        return void 0 !== e.props.month && e.props.month !== C(e.props.day);
      }),
      pe(fe(e), "getClassNames", function(t) {
        var n = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
        return r(
          "react-datepicker__day",
          n,
          "react-datepicker__day--" + Pe(e.props.day),
          {
            "react-datepicker__day--disabled": e.isDisabled(),
            "react-datepicker__day--excluded": e.isExcluded(),
            "react-datepicker__day--selected": e.isSameDay(e.props.selected),
            "react-datepicker__day--keyboard-selected": e.isKeyboardSelected(),
            "react-datepicker__day--range-start": e.isRangeStart(),
            "react-datepicker__day--range-end": e.isRangeEnd(),
            "react-datepicker__day--in-range": e.isInRange(),
            "react-datepicker__day--in-selecting-range": e.isInSelectingRange(),
            "react-datepicker__day__is--overlapping-range": e.checkOverLapping(),
            "react-datepicker__day--selecting-range-start": e.isSelectingRangeStart(),
            "react-datepicker__day--selecting-range-end": e.isSelectingRangeEnd(),
            "react-datepicker__day--today": e.isSameDay(ke()),
            "react-datepicker__day--weekend": e.isWeekend(),
            "react-datepicker__day--outside-month": e.isOutsideMonth()
          },
          e.getHighLightedClass("react-datepicker__day--highlighted")
        );
      }),
      pe(fe(e), "getAriaLabel", function() {
        var t = e.props,
          n = t.day,
          r = t.ariaLabelPrefixWhenEnabled,
          a = void 0 === r ? "Choose" : r,
          o = t.ariaLabelPrefixWhenDisabled,
          s = void 0 === o ? "Not available" : o,
          i = e.isDisabled() || e.isExcluded() ? s : a;
        return "".concat(i, " ").concat(_e(n, "PPPP"));
      }),
      pe(fe(e), "getTabIndex", function(t, n) {
        var r = t || e.props.selected,
          a = n || e.props.preSelection;
        return e.isKeyboardSelected() || (e.isSameDay(r) && Re(a, r)) ? 0 : -1;
      }),
      pe(fe(e), "handleFocusDay", function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = !1;
        0 === e.getTabIndex() &&
          !t.isInputFocused &&
          e.isSameDay(e.props.preSelection) &&
          ((document.activeElement &&
            document.activeElement !== document.body) ||
            (n = !0),
          e.props.containerRef &&
            e.props.containerRef.current &&
            e.props.containerRef.current.contains(document.activeElement) &&
            document.activeElement.classList.contains(
              "react-datepicker__day"
            ) &&
            (n = !0)),
          n && e.dayEl.current.focus({ preventScroll: !0 });
      }),
      pe(fe(e), "render", function() {
        return t.createElement(
          "div",
          {
            ref: e.dayEl,
            className: e.getClassNames(e.props.day),
            onKeyDown: e.handleOnKeyDown,
            onClick: e.handleClick,
            onMouseEnter: e.handleMouseEnter,
            tabIndex: e.getTabIndex(),
            "aria-label": e.getAriaLabel(),
            role: "button",
            "aria-disabled": e.isDisabled()
          },
          t.createElement(
            "span",
            null,
            e.props.renderDayContents
              ? e.props.renderDayContents(b(e.props.day), e.props.day)
              : b(e.props.day)
          )
        );
      }),
      e
    );
  }
  return (
    ie(a, [
      {
        key: "componentDidMount",
        value: function() {
          this.handleFocusDay();
        }
      },
      {
        key: "componentDidUpdate",
        value: function(e) {
          this.handleFocusDay(e);
        }
      }
    ]),
    a
  );
})();
pe(wt, "propTypes", {
  ariaLabelPrefixWhenEnabled: n.string,
  ariaLabelPrefixWhenDisabled: n.string,
  disabledKeyboardNavigation: n.bool,
  day: n.instanceOf(Date).isRequired,
  dayClassName: n.func,
  endDate: n.instanceOf(Date),
  highlightDates: n.instanceOf(Map),
  inline: n.bool,
  month: n.number,
  onClick: n.func,
  onMouseEnter: n.func,
  preSelection: n.instanceOf(Date),
  selected: n.object,
  selectingDate: n.instanceOf(Date),
  selectsEnd: n.bool,
  selectsStart: n.bool,
  startDate: n.instanceOf(Date),
  renderDayContents: n.func,
  handleOnKeyDown: n.func,
  containerRef: n.oneOfType([
    n.func,
    n.shape({ current: n.instanceOf(Element) })
  ])
});
var gt = (function(e) {
  de(a, t.Component);
  var n = De(a);
  function a() {
    var e;
    oe(this, a);
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return (
      pe(fe((e = n.call.apply(n, [this].concat(r)))), "handleClick", function(
        t
      ) {
        e.props.onClick && e.props.onClick(t);
      }),
      e
    );
  }
  return (
    ie(a, [
      {
        key: "render",
        value: function() {
          var e = this.props,
            n = e.weekNumber,
            a = e.ariaLabelPrefix,
            o = void 0 === a ? "week " : a,
            s = {
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!e.onClick
            };
          return t.createElement(
            "div",
            {
              className: r(s),
              "aria-label": "".concat(o, " ").concat(this.props.weekNumber),
              onClick: this.handleClick
            },
            n
          );
        }
      }
    ]),
    a
  );
})();
pe(gt, "propTypes", { weekNumber: n.number.isRequired, onClick: n.func });
var bt = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r() {
    var e;
    oe(this, r);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return (
      pe(
        fe((e = n.call.apply(n, [this].concat(o)))),
        "handleDayClick",
        function(t, n) {
          e.props.onDayClick && e.props.onDayClick(t, n);
        }
      ),
      pe(fe(e), "handleDayMouseEnter", function(t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }),
      pe(fe(e), "handleWeekClick", function(t, n, r) {
        "function" == typeof e.props.onWeekSelect &&
          e.props.onWeekSelect(t, n, r),
          e.props.shouldCloseOnSelect && e.props.setOpen(!1);
      }),
      pe(fe(e), "formatWeekNumber", function(t) {
        return e.props.formatWeekNumber
          ? e.props.formatWeekNumber(t)
          : Oe(t, e.props.locale);
      }),
      pe(fe(e), "renderDays", function() {
        var n = Ne(e.props.day, e.props.locale, e.props.calendarStartDay),
          r = [],
          a = e.formatWeekNumber(n);
        if (e.props.showWeekNumber) {
          var o = e.props.onWeekSelect
            ? e.handleWeekClick.bind(fe(e), n, a)
            : void 0;
          r.push(
            t.createElement(gt, {
              key: "W",
              weekNumber: a,
              onClick: o,
              ariaLabelPrefix: e.props.ariaLabelPrefix
            })
          );
        }
        return r.concat(
          [0, 1, 2, 3, 4, 5, 6].map(function(r) {
            var a = c(n, r);
            return t.createElement(wt, {
              ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
              ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
              key: a.valueOf(),
              day: a,
              month: e.props.month,
              onClick: e.handleDayClick.bind(fe(e), a),
              onMouseEnter: e.handleDayMouseEnter.bind(fe(e), a),
              minDate: e.props.minDate,
              maxDate: e.props.maxDate,
              excludeDates: e.props.excludeDates,
              includeDates: e.props.includeDates,
              inline: e.props.inline,
              highlightDates: e.props.highlightDates,
              selectingDate: e.props.selectingDate,
              filterDate: e.props.filterDate,
              preSelection: e.props.preSelection,
              selected: e.props.selected,
              selectsStart: e.props.selectsStart,
              selectsEnd: e.props.selectsEnd,
              startDate: e.props.startDate,
              endDate: e.props.endDate,
              dayClassName: e.props.dayClassName,
              renderDayContents: e.props.renderDayContents,
              disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
              handleOnKeyDown: e.props.handleOnKeyDown,
              isInputFocused: e.props.isInputFocused,
              containerRef: e.props.containerRef
            });
          })
        );
      }),
      e
    );
  }
  return (
    ie(
      r,
      [
        {
          key: "render",
          value: function() {
            return t.createElement(
              "div",
              { className: "react-datepicker__week" },
              this.renderDays()
            );
          }
        }
      ],
      [
        {
          key: "defaultProps",
          get: function() {
            return { shouldCloseOnSelect: !0 };
          }
        }
      ]
    ),
    r
  );
})();
pe(bt, "propTypes", {
  ariaLabelPrefix: n.string,
  disabledKeyboardNavigation: n.bool,
  day: n.instanceOf(Date).isRequired,
  dayClassName: n.func,
  disabledDayAriaLabelPrefix: n.string,
  chooseDayAriaLabelPrefix: n.string,
  endDate: n.instanceOf(Date),
  excludeDates: n.array,
  filterDate: n.func,
  formatWeekNumber: n.func,
  highlightDates: n.instanceOf(Map),
  includeDates: n.array,
  inline: n.bool,
  locale: n.oneOfType([n.string, n.shape({ locale: n.object })]),
  maxDate: n.instanceOf(Date),
  minDate: n.instanceOf(Date),
  month: n.number,
  onDayClick: n.func,
  onDayMouseEnter: n.func,
  onWeekSelect: n.func,
  preSelection: n.instanceOf(Date),
  selected: n.instanceOf(Date),
  selectingDate: n.instanceOf(Date),
  selectsEnd: n.bool,
  selectsStart: n.bool,
  showWeekNumber: n.bool,
  startDate: n.instanceOf(Date),
  setOpen: n.func,
  shouldCloseOnSelect: n.bool,
  renderDayContents: n.func,
  handleOnKeyDown: n.func,
  isInputFocused: n.bool,
  containerRef: n.oneOfType([
    n.func,
    n.shape({ current: n.instanceOf(Element) })
  ]),
  calendarStartDay: n.number
});
var kt = (function(e) {
  de(a, t.Component);
  var n = De(a);
  function a() {
    var e;
    oe(this, a);
    for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
      s[i] = arguments[i];
    return (
      pe(
        fe((e = n.call.apply(n, [this].concat(s)))),
        "handleDayClick",
        function(t, n) {
          e.props.onDayClick &&
            e.props.onDayClick(t, n, e.props.orderInDisplay);
        }
      ),
      pe(fe(e), "handleDayMouseEnter", function(t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }),
      pe(fe(e), "handleMouseLeave", function() {
        e.props.onMouseLeave && e.props.onMouseLeave();
      }),
      pe(fe(e), "isRangeStartMonth", function(t) {
        var n = e.props,
          r = n.day,
          a = n.startDate,
          o = n.endDate;
        return !(!a || !o) && Ie(N(r, t), a);
      }),
      pe(fe(e), "isRangeStartQuarter", function(t) {
        var n = e.props,
          r = n.day,
          a = n.startDate,
          o = n.endDate;
        return !(!a || !o) && Le(T(r, t), a);
      }),
      pe(fe(e), "isRangeEndMonth", function(t) {
        var n = e.props,
          r = n.day,
          a = n.startDate,
          o = n.endDate;
        return !(!a || !o) && Ie(N(r, t), o);
      }),
      pe(fe(e), "isRangeEndQuarter", function(t) {
        var n = e.props,
          r = n.day,
          a = n.startDate,
          o = n.endDate;
        return !(!a || !o) && Le(T(r, t), o);
      }),
      pe(fe(e), "isWeekInMonth", function(t) {
        var n = e.props.day,
          r = c(t, 6);
        return Ie(t, n) || Ie(r, n);
      }),
      pe(fe(e), "renderWeeks", function() {
        for (
          var n = [],
            r = e.props.fixedHeight,
            a = Ne(Te(e.props.day), e.props.locale, e.props.calendarStartDay),
            o = 0,
            s = !1;
          n.push(
            t.createElement(bt, {
              ariaLabelPrefix: e.props.weekAriaLabelPrefix,
              chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
              disabledDayAriaLabelPrefix: e.props.disabledDayAriaLabelPrefix,
              key: o,
              day: a,
              month: C(e.props.day),
              onDayClick: e.handleDayClick,
              onDayMouseEnter: e.handleDayMouseEnter,
              onWeekSelect: e.props.onWeekSelect,
              formatWeekNumber: e.props.formatWeekNumber,
              locale: e.props.locale,
              minDate: e.props.minDate,
              maxDate: e.props.maxDate,
              excludeDates: e.props.excludeDates,
              includeDates: e.props.includeDates,
              inline: e.props.inline,
              highlightDates: e.props.highlightDates,
              selectingDate: e.props.selectingDate,
              filterDate: e.props.filterDate,
              preSelection: e.props.preSelection,
              selected: e.props.selected,
              selectsStart: e.props.selectsStart,
              selectsEnd: e.props.selectsEnd,
              showWeekNumber: e.props.showWeekNumbers,
              startDate: e.props.startDate,
              endDate: e.props.endDate,
              dayClassName: e.props.dayClassName,
              setOpen: e.props.setOpen,
              shouldCloseOnSelect: e.props.shouldCloseOnSelect,
              disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
              renderDayContents: e.props.renderDayContents,
              handleOnKeyDown: e.props.handleOnKeyDown,
              isInputFocused: e.props.isInputFocused,
              containerRef: e.props.containerRef,
              calendarStartDay: e.props.calendarStartDay
            })
          ),
            !s;

        ) {
          o++, (a = l(a, 1));
          var i = r && o >= 6,
            p = !r && !e.isWeekInMonth(a);
          if (i || p) {
            if (!e.props.peekNextMonth) break;
            s = !0;
          }
        }
        return n;
      }),
      pe(fe(e), "onMonthClick", function(t, n) {
        e.handleDayClick(Te(N(e.props.day, n)), t);
      }),
      pe(fe(e), "onQuarterClick", function(t, n) {
        e.handleDayClick(xe(T(e.props.day, n)), t);
      }),
      pe(fe(e), "getMonthClassNames", function(t) {
        var n = e.props,
          a = n.day,
          o = n.startDate,
          s = n.endDate,
          i = n.selected,
          p = n.minDate,
          c = n.maxDate;
        return r(
          "react-datepicker__month-text",
          "react-datepicker__month-".concat(t),
          {
            "react-datepicker__month--disabled":
              (p || c) && Qe(N(a, t), e.props),
            "react-datepicker__month--selected": C(a) === t && _(a) === _(i),
            "react-datepicker__month--in-range": Ue(o, s, t, a),
            "react-datepicker__month--range-start": e.isRangeStartMonth(t),
            "react-datepicker__month--range-end": e.isRangeEndMonth(t)
          }
        );
      }),
      pe(fe(e), "getQuarterClassNames", function(t) {
        var n = e.props,
          a = n.day,
          o = n.startDate,
          s = n.endDate,
          i = n.selected,
          p = n.minDate,
          c = n.maxDate;
        return r(
          "react-datepicker__quarter-text",
          "react-datepicker__quarter-".concat(t),
          {
            "react-datepicker__quarter--disabled":
              (p || c) && Ze(T(a, t), e.props),
            "react-datepicker__quarter--selected": S(a) === t && _(a) === _(i),
            "react-datepicker__quarter--in-range": $e(o, s, t, a),
            "react-datepicker__quarter--range-start": e.isRangeStartQuarter(t),
            "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t)
          }
        );
      }),
      pe(fe(e), "renderMonths", function() {
        var n = e.props,
          r = n.showFullMonthYearPicker,
          a = n.showTwoColumnMonthYearPicker,
          o = n.locale;
        return (a
          ? [
              [0, 1],
              [2, 3],
              [4, 5],
              [6, 7],
              [8, 9],
              [10, 11]
            ]
          : [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [9, 10, 11]
            ]
        ).map(function(n, a) {
          return t.createElement(
            "div",
            { className: "react-datepicker__month-wrapper", key: a },
            n.map(function(n, a) {
              return t.createElement(
                "div",
                {
                  key: a,
                  onClick: function(t) {
                    e.onMonthClick(t, n);
                  },
                  className: e.getMonthClassNames(n)
                },
                r ? Be(n, o) : je(n, o)
              );
            })
          );
        });
      }),
      pe(fe(e), "renderQuarters", function() {
        return t.createElement(
          "div",
          { className: "react-datepicker__quarter-wrapper" },
          [1, 2, 3, 4].map(function(n, r) {
            return t.createElement(
              "div",
              {
                key: r,
                onClick: function(t) {
                  e.onQuarterClick(t, n);
                },
                className: e.getQuarterClassNames(n)
              },
              Ke(n, e.props.locale)
            );
          })
        );
      }),
      pe(fe(e), "getClassNames", function() {
        var t = e.props,
          n = t.selectingDate,
          a = t.selectsStart,
          o = t.selectsEnd,
          s = t.showMonthYearPicker,
          i = t.showQuarterYearPicker;
        return r(
          "notranslate",
          "react-datepicker__month",
          { "react-datepicker__month--selecting-range": n && (a || o) },
          { "react-datepicker__monthPicker": s },
          { "react-datepicker__quarterPicker": i }
        );
      }),
      e
    );
  }
  return (
    ie(a, [
      {
        key: "render",
        value: function() {
          var e = this.props,
            n = e.showMonthYearPicker,
            r = e.showQuarterYearPicker,
            a = e.day,
            o = e.ariaLabelPrefix,
            s = void 0 === o ? "month " : o;
          return t.createElement(
            "div",
            {
              className: this.getClassNames(),
              onMouseLeave: this.handleMouseLeave,
              "aria-label": "".concat(s, " ").concat(_e(a, "yyyy-MM"))
            },
            n
              ? this.renderMonths()
              : r
              ? this.renderQuarters()
              : this.renderWeeks()
          );
        }
      }
    ]),
    a
  );
})();
pe(kt, "propTypes", {
  ariaLabelPrefix: n.string,
  chooseDayAriaLabelPrefix: n.string,
  disabledDayAriaLabelPrefix: n.string,
  disabledKeyboardNavigation: n.bool,
  day: n.instanceOf(Date).isRequired,
  dayClassName: n.func,
  endDate: n.instanceOf(Date),
  orderInDisplay: n.number,
  excludeDates: n.array,
  filterDate: n.func,
  fixedHeight: n.bool,
  formatWeekNumber: n.func,
  highlightDates: n.instanceOf(Map),
  includeDates: n.array,
  inline: n.bool,
  locale: n.oneOfType([n.string, n.shape({ locale: n.object })]),
  maxDate: n.instanceOf(Date),
  minDate: n.instanceOf(Date),
  onDayClick: n.func,
  onDayMouseEnter: n.func,
  onMouseLeave: n.func,
  onWeekSelect: n.func,
  peekNextMonth: n.bool,
  preSelection: n.instanceOf(Date),
  selected: n.instanceOf(Date),
  selectingDate: n.instanceOf(Date),
  selectsEnd: n.bool,
  selectsStart: n.bool,
  showWeekNumbers: n.bool,
  startDate: n.instanceOf(Date),
  setOpen: n.func,
  shouldCloseOnSelect: n.bool,
  renderDayContents: n.func,
  showMonthYearPicker: n.bool,
  showFullMonthYearPicker: n.bool,
  showTwoColumnMonthYearPicker: n.bool,
  showQuarterYearPicker: n.bool,
  handleOnKeyDown: n.func,
  isInputFocused: n.bool,
  weekAriaLabelPrefix: n.string,
  containerRef: n.oneOfType([
    n.func,
    n.shape({ current: n.instanceOf(Element) })
  ]),
  calendarStartDay: n.number
});
var Ct = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r() {
    var e;
    oe(this, r);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return (
      pe(fe((e = n.call.apply(n, [this].concat(o)))), "state", {
        height: null
      }),
      pe(fe(e), "handleClick", function(t) {
        ((e.props.minTime || e.props.maxTime) && Je(t, e.props)) ||
          (e.props.excludeTimes && Ge(t, e.props.excludeTimes)) ||
          (e.props.includeTimes && !Ge(t, e.props.includeTimes)) ||
          e.props.onChange(t);
      }),
      pe(fe(e), "liClasses", function(t, n, r) {
        var a = [
          "react-datepicker__time-list-item",
          e.props.timeClassName ? e.props.timeClassName(t, n, r) : void 0
        ];
        return (
          e.props.selected &&
            n === w(t) &&
            r === v(t) &&
            a.push("react-datepicker__time-list-item--selected"),
          (((e.props.minTime || e.props.maxTime) && Je(t, e.props)) ||
            (e.props.excludeTimes && Ge(t, e.props.excludeTimes)) ||
            (e.props.includeTimes && !Ge(t, e.props.includeTimes))) &&
            a.push("react-datepicker__time-list-item--disabled"),
          e.props.injectTimes &&
            (60 * w(t) + v(t)) % e.props.intervals != 0 &&
            a.push("react-datepicker__time-list-item--injected"),
          a.join(" ")
        );
      }),
      pe(fe(e), "renderTimes", function() {
        for (
          var n = [],
            r = e.props.format ? e.props.format : "p",
            a = e.props.intervals,
            o = e.props.selected || e.props.openToDate || ke(),
            s = w(o),
            p = v(o),
            c = Ee(ke()),
            l = 1440 / a,
            u =
              e.props.injectTimes &&
              e.props.injectTimes.sort(function(e, t) {
                return e - t;
              }),
            d = [],
            h = 0;
          h < l;
          h++
        ) {
          var m = i(c, h * a);
          if ((n.push(m), u)) {
            var f = st(c, m, h, a, u);
            n = n.concat(f);
          }
          s === w(m) && d.push(m);
        }
        return n.map(function(n, a) {
          return t.createElement(
            "li",
            {
              key: a,
              onClick: e.handleClick.bind(fe(e), n),
              className: e.liClasses(n, s, p),
              ref: function(t) {
                s === w(n) &&
                  (p >= v(n)
                    ? (e.centerLi = t)
                    : e.centerLi ||
                      d.indexOf(n) !== d.length - 1 ||
                      (e.centerLi = t));
              }
            },
            _e(n, r, e.props.locale)
          );
        });
      }),
      e
    );
  }
  return (
    ie(
      r,
      [
        {
          key: "componentDidMount",
          value: function() {
            (this.list.scrollTop = r.calcCenterPosition(
              this.props.monthRef
                ? this.props.monthRef.clientHeight - this.header.clientHeight
                : this.list.clientHeight,
              this.centerLi
            )),
              this.props.monthRef &&
                this.header &&
                this.setState({
                  height:
                    this.props.monthRef.clientHeight - this.header.clientHeight
                });
          }
        },
        {
          key: "render",
          value: function() {
            var e = this,
              n = this.state.height;
            return t.createElement(
              "div",
              {
                className: "react-datepicker__time-container ".concat(
                  this.props.todayButton
                    ? "react-datepicker__time-container--with-today-button"
                    : ""
                )
              },
              t.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--time",
                  ref: function(t) {
                    e.header = t;
                  }
                },
                t.createElement(
                  "div",
                  { className: "react-datepicker-time__header" },
                  this.props.timeCaption
                )
              ),
              t.createElement(
                "div",
                { className: "react-datepicker__time" },
                t.createElement(
                  "div",
                  { className: "react-datepicker__time-box" },
                  t.createElement(
                    "ul",
                    {
                      className: "react-datepicker__time-list",
                      ref: function(t) {
                        e.list = t;
                      },
                      style: n ? { height: n } : {}
                    },
                    this.renderTimes()
                  )
                )
              )
            );
          }
        }
      ],
      [
        {
          key: "defaultProps",
          get: function() {
            return {
              intervals: 30,
              onTimeChange: function() {},
              todayButton: null,
              timeCaption: "Time"
            };
          }
        }
      ]
    ),
    r
  );
})();
pe(Ct, "calcCenterPosition", function(e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
}),
  pe(Ct, "propTypes", {
    format: n.string,
    includeTimes: n.array,
    intervals: n.number,
    selected: n.instanceOf(Date),
    openToDate: n.instanceOf(Date),
    onChange: n.func,
    timeClassName: n.func,
    todayButton: n.node,
    minTime: n.instanceOf(Date),
    maxTime: n.instanceOf(Date),
    excludeTimes: n.array,
    monthRef: n.object,
    timeCaption: n.string,
    injectTimes: n.array,
    locale: n.oneOfType([n.string, n.shape({ locale: n.object })])
  });
var St = (function(e) {
  de(a, t.Component);
  var n = De(a);
  function a(e) {
    var t;
    return (
      oe(this, a),
      pe(fe((t = n.call(this, e))), "handleYearClick", function(e, n) {
        t.props.onDayClick && t.props.onDayClick(e, n);
      }),
      pe(fe(t), "onYearClick", function(e, n) {
        var r;
        t.handleYearClick(((r = x(t.props.date, n)), j(r)), e);
      }),
      t
    );
  }
  return (
    ie(a, [
      {
        key: "render",
        value: function() {
          for (
            var e = this,
              n = [],
              a = this.props.date,
              o = function(o, s) {
                n.push(
                  t.createElement(
                    "div",
                    {
                      onClick: function(t) {
                        e.onYearClick(t, o);
                      },
                      className: r("react-datepicker__year-container-text", {
                        "react-datepicker__year-container-text--selected":
                          o === _(a)
                      }),
                      key: o
                    },
                    o
                  )
                );
              },
              s = _(a) - 11,
              i = 0;
            s <= _(a);
            s++, i++
          )
            o(s);
          return t.createElement(
            "div",
            { className: "react-datepicker__year-container" },
            n
          );
        }
      }
    ]),
    a
  );
})();
pe(St, "propTypes", { date: n.string, onDayClick: n.func });
var _t = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r(e) {
    var a;
    oe(this, r),
      pe(fe((a = n.call(this, e))), "resetInputBox", function(e) {
        var t,
          n = e.getHours();
        "12" === a.props.timeFormat && (t = parseInt(n, 10) > 12 ? "PM" : "AM");
        var r = "12" === a.props.timeFormat ? "hh:mm" : "HH:mm";
        a.setState({ time: _e(e, r), activeState: t, notValid: !1 });
      }),
      pe(fe(a), "handleoutsideClick", function(e) {
        if (
          !e.target.className.includes("react-datepicker-time-inputbox") &&
          !e.target.className.includes("time-section-item")
        ) {
          var t = document.getElementById("time-menu-".concat(a.props.id));
          t && t.classList.add("d-none"), a.setTimeValue();
        }
      }),
      pe(fe(a), "handleTimeInput", function(e) {
        var t = e.target.value,
          n = a.props.timeFormat,
          r = a.state.notValid;
        ((t = t.replace(":", "")) && !t.match("^[0-9]*$")) ||
        (t && t.length > 4)
          ? (r = !0)
          : (t && 1 === t.length) || (t && 2 === t.length)
          ? (r = "12" === n ? parseInt(t, 10) > 12 : parseInt(t, 10) > 24)
          : t && 3 === t.length
          ? (r =
              "12" === n
                ? parseInt(t.substring(0, 1), 10) > 12 ||
                  parseInt(t.substring(1, 3), 10) > 60
                : parseInt(t.substring(0, 1), 10) > 24 ||
                  parseInt(t.substring(1, 3), 10) > 60)
          : t &&
            4 === t.length &&
            (r =
              "12" === n
                ? parseInt(t.substring(0, 2), 10) > 12 ||
                  parseInt(t.substring(2, 4), 10) > 60
                : parseInt(t.substring(0, 2), 10) > 24 ||
                  parseInt(t.substring(2, 4), 10) > 60),
          a.setState({ time: e.target.value, notValid: r }, function() {
            if (r) {
              var e = document.getElementById("time-menu-".concat(a.props.id));
              e && e.classList.add("d-none");
            }
          }),
          r || a.props.onTimeChange(e.target.value);
      }),
      pe(fe(a), "handleTimeSelectionClick", function(e) {
        a.setState({ time: _e(e, a.state.timeFormat) }, function() {
          var e = a.state.time.split(":")[0] || "00",
            t = a.state.time.split(":")[1] || "00";
          "12" === a.props.timeFormat &&
            (parseInt(e, 10) < 12 &&
              "PM" === a.state.activeState &&
              (e = parseInt(e, 10) + 12),
            parseInt(e, 10) >= 12 &&
              "AM" === a.state.activeState &&
              (e = parseInt(e, 10) - 12)),
            a.props.onTimeChange("".concat(it(e), ":").concat(t));
        });
      }),
      pe(fe(a), "setTimeValue", function() {
        var e = a.state.time;
        1 === e.toString().length
          ? (e = "0".concat(e, ":00"))
          : 2 === e.toString().length
          ? (e = "".concat(e, ":00"))
          : 3 === e.toString().length
          ? (e = "0".concat(e.substring(0, 1), ":").concat(e.substring(1, 3)))
          : 4 === e.toString().length &&
            (e = "".concat(e.substring(0, 2), ":").concat(e.substring(2, 4))),
          a.setState({ time: e }, function() {
            var t = e.split(":")[0] || "00",
              n = e.split(":")[1] || "00";
            "12" === a.props.timeFormat &&
              (0 === parseInt(t, 10) && (t = 12),
              parseInt(t, 10) < 12 &&
                "PM" === a.state.activeState &&
                (t = parseInt(t, 10) + 12),
              parseInt(t, 10) >= 12 &&
                "AM" === a.state.activeState &&
                (t = parseInt(t, 10) - 12)),
              a.props.onTimeChange(
                "".concat(it(parseInt(t, 10)), ":").concat(n)
              );
          });
      }),
      pe(fe(a), "renderTimeInput", function() {
        for (
          var e = a.state,
            n = e.time,
            r = e.notValid,
            o = a.props,
            s = o.id,
            p = o.timeFormat,
            c = a.state,
            l = (c.hour, c.mins, a.props),
            u = (l.timeString, l.customTimeInput, []),
            d = Ee(ke()),
            h = 0;
          h < 96;
          h++
        ) {
          var m = i(d, 15 * h);
          u.push(m);
        }
        return t.createElement(
          t.Fragment,
          null,
          t.createElement(
            "div",
            { className: "time-input-wrapper" },
            t.createElement("input", {
              type: "text",
              onChange: a.handleTimeInput,
              value: n,
              id: "datepicker-time-input-".concat(s),
              key: "datepicker-time-input-".concat(s),
              className: "react-datepicker-time-inputbox",
              maxLength: 5,
              onClick: function() {
                var e = document.getElementById(
                  "time-menu-".concat(a.props.id)
                );
                e && e.classList.remove("d-none");
              },
              onKeyDown: function(e) {
                13 === e.keyCode && a.setTimeValue();
              }
            }),
            r &&
              t.createElement(
                "p",
                { className: "text-danger" },
                "Invalid time entered"
              ),
            t.createElement(
              "div",
              {
                className: "time-selection-menu  d-none",
                id: "time-menu-".concat(s)
              },
              t.createElement(
                "ul",
                { className: "time-selection-ul" },
                "24" === p
                  ? u.map(function(e, n) {
                      return t.createElement(
                        "li",
                        {
                          key: n,
                          onClick: a.handleTimeSelectionClick.bind(fe(a), e),
                          className: "time-section-item"
                        },
                        _e(e, "HH:mm")
                      );
                    })
                  : u.map(function(e, n) {
                      return t.createElement(
                        "li",
                        {
                          key: n,
                          onClick: a.handleTimeSelectionClick.bind(fe(a), e),
                          className: "time-section-item"
                        },
                        _e(e, "hh:mm a")
                      );
                    })
              )
            )
          ),
          "24" !== p &&
            t.createElement(
              "div",
              { className: "react-datepicker-am-pm-switch" },
              t.createElement(
                "span",
                {
                  className: "".concat(
                    "AM" === a.state.activeState ? "active" : ""
                  ),
                  onClick: function() {
                    a.setState({ activeState: "AM" }, function() {
                      a.setTimeValue();
                    });
                  }
                },
                "AM"
              ),
              t.createElement(
                "span",
                {
                  className: "".concat(
                    "PM" === a.state.activeState ? "active" : ""
                  ),
                  onClick: function() {
                    a.setState({ activeState: "PM" }, function() {
                      a.setTimeValue();
                    });
                  }
                },
                "PM"
              )
            )
        );
      });
    var o,
      s = a.props.timeString,
      p = s.getHours();
    "12" === a.props.timeFormat && (o = parseInt(p, 10) > 12 ? "PM" : "AM");
    var c = "12" === a.props.timeFormat ? "hh:mm" : "HH:mm";
    return (
      (a.state = {
        time: _e(s, c),
        activeState: o,
        notValid: !1,
        timeFormat: c
      }),
      a
    );
  }
  return (
    ie(r, [
      {
        key: "componentDidMount",
        value: function() {
          window.addEventListener("click", this.handleoutsideClick, !0);
        }
      },
      {
        key: "componentWillUnmount",
        value: function() {
          window.removeEventListener("click", this.handleoutsideClick, !0);
        }
      },
      {
        key: "render",
        value: function() {
          return t.createElement(
            "div",
            { className: "react-datepicker-time-section" },
            t.createElement(
              "div",
              { className: "react-datepicker__input-time-container" },
              t.createElement(
                "div",
                { className: "react-datepicker-time__caption" },
                this.props.timeInputLabel
              ),
              t.createElement(
                "div",
                { className: "react-datepicker-time__input-container" },
                t.createElement(
                  "div",
                  { className: "react-datepicker-time__input" },
                  this.renderTimeInput()
                )
              )
            )
          );
        }
      }
    ]),
    r
  );
})();
function Mt(e) {
  var n = e.className,
    r = e.children,
    a = e.showPopperArrow,
    o = e.arrowProps,
    s = void 0 === o ? {} : o;
  return t.createElement(
    "div",
    { className: n },
    a &&
      t.createElement(
        "div",
        ce({ className: "react-datepicker__triangle" }, s)
      ),
    r
  );
}
pe(_t, "propTypes", {
  onTimeChange: n.func,
  timeString: n.string,
  timeInputLabel: n.string,
  customTimeInput: n.element,
  timeFormat: n.string,
  id: n.string
}),
  (Mt.propTypes = {
    className: n.string,
    children: n.node,
    arrowProps: n.object,
    showPopperArrow: n.bool
  });
var Ot = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r() {
    return oe(this, r), n.apply(this, arguments);
  }
  return (
    ie(r, [
      {
        key: "render",
        value: function() {
          return t.createElement(
            "svg",
            {
              width: "29",
              height: "24",
              viewBox: "0 0 29 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              onClick: this.props.onClick
            },
            t.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M14.9265 7.52558C15.2911 7.17656 15.2911 6.61078 14.9265 6.26176C14.5623 5.91275 13.9711 5.91275 13.6068 6.26176L8.2732 11.3681C7.90893 11.7171 7.90893 12.2829 8.2732 12.6319L13.6068 17.7382C13.9711 18.0873 14.5623 18.0873 14.9265 17.7382C15.2911 17.3892 15.2911 16.8234 14.9265 16.4744L10.2505 11.9974L14.9265 7.52558Z",
              fill: "#777A80"
            }),
            t.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M19.9265 7.52558C20.2911 7.17656 20.2911 6.61078 19.9265 6.26176C19.5623 5.91275 18.9711 5.91275 18.6068 6.26176L13.2732 11.3681C12.9089 11.7171 12.9089 12.2829 13.2732 12.6319L18.6068 17.7382C18.9711 18.0873 19.5623 18.0873 19.9265 17.7382C20.2911 17.3892 20.2911 16.8234 19.9265 16.4744L15.2505 11.9974L19.9265 7.52558Z",
              fill: "#777A80"
            })
          );
        }
      }
    ]),
    r
  );
})();
Ot.propTypes = { onClick: n.func.isRequired };
var Pt = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r() {
    return oe(this, r), n.apply(this, arguments);
  }
  return (
    ie(r, [
      {
        key: "render",
        value: function() {
          return t.createElement(
            "svg",
            {
              width: "29",
              height: "24",
              viewBox: "0 0 29 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              onClick: this.props.onClick
            },
            t.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M14.0735 7.52558C13.7089 7.17656 13.7089 6.61078 14.0735 6.26176C14.4377 5.91275 15.0289 5.91275 15.3932 6.26176L20.7268 11.3681C21.0911 11.7171 21.0911 12.2829 20.7268 12.6319L15.3932 17.7382C15.0289 18.0873 14.4377 18.0873 14.0735 17.7382C13.7089 17.3892 13.7089 16.8234 14.0735 16.4744L18.7495 11.9974L14.0735 7.52558Z",
              fill: "#777A80"
            }),
            t.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M9.07347 7.52558C8.70893 7.17656 8.70893 6.61078 9.07347 6.26176C9.43773 5.91275 10.0289 5.91275 10.3932 6.26176L15.7268 11.3681C16.0911 11.7171 16.0911 12.2829 15.7268 12.6319L10.3932 17.7382C10.0289 18.0873 9.43773 18.0873 9.07347 17.7382C8.70893 17.3892 8.70893 16.8234 9.07347 16.4744L13.7495 11.9974L9.07347 7.52558Z",
              fill: "#777A80"
            })
          );
        }
      }
    ]),
    r
  );
})();
Pt.propTypes = { onClick: n.func.isRequired };
var Et = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r() {
    return oe(this, r), n.apply(this, arguments);
  }
  return (
    ie(r, [
      {
        key: "render",
        value: function() {
          return t.createElement(
            "svg",
            {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              onClick: this.props.onClick
            },
            t.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M14.9265 7.52558C15.2911 7.17656 15.2911 6.61078 14.9265 6.26176C14.5623 5.91275 13.9711 5.91275 13.6068 6.26176L8.2732 11.3681C7.90893 11.7171 7.90893 12.2829 8.2732 12.6319L13.6068 17.7382C13.9711 18.0873 14.5623 18.0873 14.9265 17.7382C15.2911 17.3892 15.2911 16.8234 14.9265 16.4744L10.2505 11.9974L14.9265 7.52558Z",
              fill: "#777A80"
            })
          );
        }
      }
    ]),
    r
  );
})();
Et.propTypes = { onClick: n.func.isRequired };
var Nt = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r() {
    return oe(this, r), n.apply(this, arguments);
  }
  return (
    ie(r, [
      {
        key: "render",
        value: function() {
          return t.createElement(
            "svg",
            {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              onClick: this.props.onClick
            },
            t.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M8.27366 7.52558C7.90913 7.17656 7.90913 6.61078 8.27366 6.26176C8.63793 5.91275 9.22913 5.91275 9.5934 6.26176L14.927 11.3681C15.2913 11.7171 15.2913 12.2829 14.927 12.6319L9.5934 17.7382C9.22913 18.0873 8.63793 18.0873 8.27366 17.7382C7.90913 17.3892 7.90913 16.8234 8.27366 16.4744L12.9497 11.9974L8.27366 7.52558Z",
              fill: "#777A80"
            })
          );
        }
      }
    ]),
    r
  );
})();
Nt.propTypes = { onClick: n.func.isRequired };
var Tt = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select"
  ],
  xt = (function(e) {
    de(a, t.Component);
    var n = De(a);
    function a(e) {
      var o;
      return (
        oe(this, a),
        pe(fe((o = n.call(this, e))), "handleClickOutside", function(e) {
          o.props.onClickOutside(e);
        }),
        pe(fe(o), "setClickOutsideRef", function() {
          return o.containerRef.current;
        }),
        pe(fe(o), "handleDropdownFocus", function(e) {
          (function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (e.className || "").split(/\s+/);
            return Tt.some(function(e) {
              return t.indexOf(e) >= 0;
            });
          })(e.target) && o.props.onDropdownFocus();
        }),
        pe(fe(o), "getDateInView", function() {
          var e = o.props,
            t = e.preSelection,
            n = e.selected,
            r = e.openToDate,
            a = rt(o.props),
            s = at(o.props),
            i = ke(),
            p = r || n || t;
          return p || (a && z(i, a) ? a : s && $(i, s) ? s : i);
        }),
        pe(fe(o), "increaseMonth", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: u(t, 1) };
            },
            function() {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        pe(fe(o), "decreaseMonth", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: f(t, 1) };
            },
            function() {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        pe(fe(o), "handleDayClick", function(e, t, n) {
          return o.props.onSelect(e, t, n);
        }),
        pe(fe(o), "handleDayMouseEnter", function(e) {
          o.setState({ selectingDate: e }),
            o.props.onDayMouseEnter && o.props.onDayMouseEnter(e);
        }),
        pe(fe(o), "handleMonthMouseLeave", function() {
          o.setState({ selectingDate: null }),
            o.props.onMonthMouseLeave && o.props.onMonthMouseLeave();
        }),
        pe(fe(o), "handleYearChange", function(e) {
          o.props.onYearChange && o.props.onYearChange(e),
            o.props.setPreSelection && o.props.setPreSelection(e);
        }),
        pe(fe(o), "handleMonthChange", function(e) {
          o.props.onMonthChange && o.props.onMonthChange(e),
            o.props.adjustDateOnChange &&
              (o.props.onSelect && o.props.onSelect(e),
              o.props.setOpen && o.props.setOpen(!0)),
            o.props.setPreSelection && o.props.setPreSelection(e);
        }),
        pe(fe(o), "handleMonthYearChange", function(e) {
          o.handleYearChange(e), o.handleMonthChange(e);
        }),
        pe(fe(o), "changeYear", function(e) {
          o.setState(
            function(t) {
              var n = t.date;
              return { date: x(n, e) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        pe(fe(o), "changeMonth", function(e) {
          e <= C(o.props.maxDate) &&
            o.setState(
              function(t) {
                var n = t.date;
                return { date: N(n, e) };
              },
              function() {
                return o.handleMonthChange(o.state.date);
              }
            );
        }),
        pe(fe(o), "changeMonthYear", function(e) {
          o.setState(
            function(t) {
              var n = t.date;
              return { date: x(N(n, C(e)), _(e)) };
            },
            function() {
              return o.handleMonthYearChange(o.state.date);
            }
          );
        }),
        pe(fe(o), "header", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.state.date,
            n = Ne(e, o.props.locale, o.props.calendarStartDay),
            a = [];
          return (
            o.props.showWeekNumbers &&
              a.push(
                t.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  o.props.weekLabel || "#"
                )
              ),
            a.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function(e) {
                var a = c(n, e),
                  s = o.formatWeekday(a, o.props.locale),
                  i = o.props.weekDayClassName
                    ? o.props.weekDayClassName(a)
                    : void 0;
                return t.createElement(
                  "div",
                  { key: e, className: r("react-datepicker__day-name", i) },
                  s
                );
              })
            )
          );
        }),
        pe(fe(o), "formatWeekday", function(e, t) {
          return o.props.formatWeekDay
            ? (function(e, t, n) {
                return t(_e(e, "EEEE", n));
              })(e, o.props.formatWeekDay, t)
            : o.props.useWeekdaysShort
            ? (function(e, t) {
                return _e(e, "EEE", t);
              })(e, t)
            : (function(e, t) {
                return _e(e, "EEEEEE", t);
              })(e, t);
        }),
        pe(fe(o), "decreaseYear", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: y(t, o.props.showYearPicker ? 11 : 1) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        pe(fe(o), "renderPreviousButton", function() {
          if (!o.props.renderCustomHeader) {
            var e = o.props.showMonthYearPicker
              ? tt(o.state.date, o.props)
              : Xe(o.state.date, o.props);
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !e) &&
              !o.props.showTimeSelectOnly
            ) {
              var n = [
                  "react-datepicker__navigation ",
                  "react-datepicker__navigation--previous"
                ],
                r = o.decreaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (r = o.decreaseYear),
                e &&
                  o.props.showDisabledMonthNavigation &&
                  (n.push("react-datepicker__navigation--previous--disabled"),
                  (r = null));
              var a =
                  o.props.showMonthYearPicker || o.props.showQuarterYearPicker,
                s = o.props,
                i = s.previousMonthAriaLabel,
                p = void 0 === i ? "Previous Month" : i,
                c = s.previousYearAriaLabel,
                l = void 0 === c ? "Previous Year" : c;
              return t.createElement(
                "button",
                {
                  type: "button",
                  className: n.join(" "),
                  onClick: r,
                  "aria-label": a ? l : p
                },
                a
                  ? o.props.previousYearButtonLabel
                  : o.props.previousMonthButtonLabel
              );
            }
          }
        }),
        pe(fe(o), "increaseYear", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: d(t, o.props.showYearPicker ? 11 : 1) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        pe(fe(o), "renderNextButton", function() {
          if (!o.props.renderCustomHeader) {
            var e = o.props.showMonthYearPicker
              ? nt(o.state.date, o.props)
              : et(o.state.date, o.props);
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !e) &&
              !o.props.showTimeSelectOnly
            ) {
              var n = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next"
              ];
              o.props.showTimeSelect &&
                n.push("react-datepicker__navigation--next--with-time"),
                o.props.todayButton &&
                  n.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var r = o.increaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (r = o.increaseYear),
                e &&
                  o.props.showDisabledMonthNavigation &&
                  (n.push("react-datepicker__navigation--next--disabled"),
                  (r = null));
              var a =
                  o.props.showMonthYearPicker || o.props.showQuarterYearPicker,
                s = o.props,
                i = s.nextMonthAriaLabel,
                p = void 0 === i ? "Next Month" : i,
                c = s.nextYearAriaLabel,
                l = void 0 === c ? "Next Year" : c;
              return t.createElement(
                "button",
                {
                  type: "button",
                  className: n.join(" "),
                  onClick: r,
                  "aria-label": a ? l : p
                },
                a ? o.props.nextYearButtonLabel : o.props.nextMonthButtonLabel
              );
            }
          }
        }),
        pe(fe(o), "renderCurrentMonth", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.state.date,
            n = ["react-datepicker__current-month"];
          return (
            o.props.showYearDropdown &&
              n.push("react-datepicker__current-month--hasYearDropdown"),
            o.props.showMonthDropdown &&
              n.push("react-datepicker__current-month--hasMonthDropdown"),
            o.props.showMonthYearDropdown &&
              n.push("react-datepicker__current-month--hasMonthYearDropdown"),
            t.createElement(
              "div",
              { className: n.join(" ") },
              _e(e, o.props.dateFormat, o.props.locale)
            )
          );
        }),
        pe(fe(o), "renderYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.state.date;
          if (o.props.showYearDropdown)
            return t.createElement(ut, {
              adjustDateOnChange: o.props.adjustDateOnChange,
              date: o.state.date,
              onSelect: o.props.onSelect,
              setOpen: o.props.setOpen,
              dropdownMode: o.props.dropdownMode,
              onChange: o.changeYear,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              year: _(e),
              scrollableYearDropdown: o.props.scrollableYearDropdown,
              yearDropdownItemNumber: o.props.yearDropdownItemNumber
            });
        }),
        pe(fe(o), "renderMonthDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.state.date;
          if (o.props.showMonthDropdown)
            return t.createElement(mt, {
              dropdownMode: o.props.dropdownMode,
              locale: o.props.locale,
              onChange: o.changeMonth,
              month: C(e),
              useShortMonthInDropdown: o.props.useShortMonthInDropdown
            });
        }),
        pe(fe(o), "renderMonthYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (o.props.showMonthYearDropdown && !e)
            return t.createElement(vt, {
              dropdownMode: o.props.dropdownMode,
              locale: o.props.locale,
              dateFormat: o.props.dateFormat,
              onChange: o.changeMonthYear,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              date: o.state.date,
              scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown
            });
        }),
        pe(fe(o), "renderTodayButton", function() {
          if (
            o.props.todayButton &&
            !o.props.showTimeSelectOnly &&
            !o.props.showTimeInputOnly
          )
            return t.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function(e) {
                  return o.props.onSelect(F(ke()), e);
                }
              },
              o.props.todayButton
            );
        }),
        pe(fe(o), "renderDefaultHeader", function(e) {
          var n = e.monthDate;
          e.i;
          return t.createElement(
            "div",
            { className: "react-datepicker__header" },
            t.createElement(
              "div",
              {
                className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                  o.props.dropdownMode
                ),
                onFocus: o.handleDropdownFocus
              },
              o.props.showYearArrows &&
                t.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__header__arrows left-double-arrow"
                  },
                  t.createElement(Ot, {
                    onClick: function() {
                      tt(o.state.date, o.props) || o.decreaseYear();
                    }
                  })
                ),
              t.createElement(
                "span",
                { className: "react-datepicker__header__arrows left-arrow" },
                t.createElement(Et, {
                  onClick: function() {
                    Xe(o.state.date, o.props) || o.decreaseMonth();
                  }
                })
              ),
              o.renderMonthDropdown(n),
              o.renderYearDropdown(n),
              t.createElement(
                "span",
                { className: "react-datepicker__header__arrows right-arrow" },
                t.createElement(Nt, {
                  onClick: function() {
                    et(o.state.date, o.props) || o.increaseMonth();
                  }
                })
              ),
              o.props.showYearArrows &&
                t.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__header__arrows right-double-arrow"
                  },
                  t.createElement(Pt, {
                    onClick: function() {
                      nt(o.state.date, o.props) || o.increaseYear();
                    }
                  })
                )
            ),
            t.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              o.header(n)
            )
          );
        }),
        pe(fe(o), "renderCustomHeader", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.monthDate,
            r = e.i;
          if (0 !== r && void 0 !== r) return null;
          var a = Xe(o.state.date, o.props),
            s = et(o.state.date, o.props),
            i = tt(o.state.date, o.props),
            p = nt(o.state.date, o.props),
            c =
              !o.props.showMonthYearPicker &&
              !o.props.showQuarterYearPicker &&
              !o.props.showYearPicker;
          return t.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: o.props.onDropdownFocus
            },
            o.props.renderCustomHeader(
              ue(
                ue({}, o.state),
                {},
                {
                  changeMonth: o.changeMonth,
                  changeYear: o.changeYear,
                  decreaseMonth: o.decreaseMonth,
                  increaseMonth: o.increaseMonth,
                  decreaseYear: o.decreaseYear,
                  increaseYear: o.increaseYear,
                  prevMonthButtonDisabled: a,
                  nextMonthButtonDisabled: s,
                  prevYearButtonDisabled: i,
                  nextYearButtonDisabled: p
                }
              )
            ),
            c &&
              t.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                o.header(n)
              )
          );
        }),
        pe(fe(o), "renderYearHeader", function() {
          return t.createElement(
            "div",
            {
              className: "react-datepicker__header react-datepicker-year-header"
            },
            o.props.showYearPicker
              ? "".concat(_(o.state.date) - 11, " - ").concat(_(o.state.date))
              : _(o.state.date)
          );
        }),
        pe(fe(o), "renderHeader", function(e) {
          switch (!0) {
            case void 0 !== o.props.renderCustomHeader:
              return o.renderCustomHeader(e);
            case o.props.showMonthYearPicker ||
              o.props.showQuarterYearPicker ||
              o.props.showYearPicker:
              return o.renderYearHeader(e);
            default:
              return o.renderDefaultHeader(e);
          }
        }),
        pe(fe(o), "renderMonths", function() {
          if (
            !(
              o.props.showTimeSelectOnly ||
              o.props.showYearPicker ||
              o.props.showTimeInputOnly
            )
          ) {
            for (
              var e = [],
                n = o.props.showPreviousMonths ? o.props.monthsShown - 1 : 0,
                r = f(o.state.date, n),
                a = 0;
              a < o.props.monthsShown;
              ++a
            ) {
              var s = a - o.props.monthSelectedIn,
                i = u(r, s),
                p = "month-".concat(a);
              e.push(
                t.createElement(
                  "div",
                  {
                    key: p,
                    ref: function(e) {
                      o.monthContainer = e;
                    },
                    className: "react-datepicker__month-container"
                  },
                  o.renderHeader({ monthDate: i, i: a }),
                  t.createElement(kt, {
                    chooseDayAriaLabelPrefix: o.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      o.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: o.props.weekAriaLabelPrefix,
                    onChange: o.changeMonthYear,
                    day: i,
                    dayClassName: o.props.dayClassName,
                    monthClassName: o.props.monthClassName,
                    onDayClick: o.handleDayClick,
                    handleOnKeyDown: o.props.handleOnKeyDown,
                    onDayMouseEnter: o.handleDayMouseEnter,
                    onMouseLeave: o.handleMonthMouseLeave,
                    onWeekSelect: o.props.onWeekSelect,
                    orderInDisplay: a,
                    formatWeekNumber: o.props.formatWeekNumber,
                    locale: o.props.locale,
                    minDate: o.props.minDate,
                    maxDate: o.props.maxDate,
                    excludeDates: o.props.excludeDates,
                    highlightDates: o.props.highlightDates,
                    selectingDate: o.state.selectingDate,
                    includeDates: o.props.includeDates,
                    inline: o.props.inline,
                    fixedHeight: o.props.fixedHeight,
                    filterDate: o.props.filterDate,
                    preSelection: o.props.preSelection,
                    selected: o.props.selected,
                    selectsStart: o.props.selectsStart,
                    selectsEnd: o.props.selectsEnd,
                    showWeekNumbers: o.props.showWeekNumbers,
                    startDate: o.props.startDate,
                    endDate: o.props.endDate,
                    peekNextMonth: o.props.peekNextMonth,
                    setOpen: o.props.setOpen,
                    shouldCloseOnSelect: o.props.shouldCloseOnSelect,
                    renderDayContents: o.props.renderDayContents,
                    disabledKeyboardNavigation:
                      o.props.disabledKeyboardNavigation,
                    showMonthYearPicker: o.props.showMonthYearPicker,
                    showFullMonthYearPicker: o.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      o.props.showTwoColumnMonthYearPicker,
                    showYearPicker: o.props.showYearPicker,
                    showQuarterYearPicker: o.props.showQuarterYearPicker,
                    isInputFocused: o.props.isInputFocused,
                    containerRef: o.containerRef,
                    calendarStartDay: o.props.calendarStartDay
                  })
                )
              );
            }
            return e;
          }
        }),
        pe(fe(o), "renderYears", function() {
          if (!o.props.showTimeSelectOnly && !o.props.showTimeInputOnly)
            return o.props.showYearPicker
              ? t.createElement(
                  "div",
                  { className: "react-datepicker__year" },
                  o.renderHeader(),
                  t.createElement(St, {
                    onDayClick: o.handleDayClick,
                    date: o.state.date
                  })
                )
              : void 0;
        }),
        pe(fe(o), "renderTimeSection", function() {
          if (
            o.props.showTimeSelect &&
            (o.state.monthContainer || o.props.showTimeSelectOnly)
          )
            return t.createElement(Ct, {
              selected: o.props.selected,
              openToDate: o.props.openToDate,
              onChange: o.props.onTimeChange,
              timeClassName: o.props.timeClassName,
              format: o.props.timeFormat,
              includeTimes: o.props.includeTimes,
              intervals: o.props.timeIntervals,
              minTime: o.props.minTime,
              maxTime: o.props.maxTime,
              excludeTimes: o.props.excludeTimes,
              timeCaption: o.props.timeCaption,
              todayButton: o.props.todayButton,
              showMonthDropdown: o.props.showMonthDropdown,
              showMonthYearDropdown: o.props.showMonthYearDropdown,
              showYearDropdown: o.props.showYearDropdown,
              withPortal: o.props.withPortal,
              monthRef: o.state.monthContainer,
              injectTimes: o.props.injectTimes,
              locale: o.props.locale
            });
        }),
        pe(fe(o), "renderInputTimeSection", function() {
          var e = new Date(o.props.timeValue);
          if (o.props.showTimeInput)
            return t.createElement(_t, {
              timeString: e,
              id: o.props.id,
              selected: o.props.selected,
              timeInputLabel: o.props.timeInputLabel,
              onTimeChange: o.props.onTimeChange,
              customTimeInput: o.props.customTimeInput,
              timeFormat: o.props.timeFormat,
              timeValue: o.props.timeValue,
              ref: o.inputRef
            });
        }),
        (o.containerRef = t.createRef()),
        (o.inputRef = t.createRef()),
        (o.state = {
          date: o.getDateInView(),
          selectingDate: null,
          monthContainer: null
        }),
        o
      );
    }
    return (
      ie(a, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              onDropdownFocus: function() {},
              monthsShown: 1,
              monthSelectedIn: 0,
              forceShowMonthNavigation: !1,
              timeCaption: "Time",
              previousYearButtonLabel: "Previous Year",
              nextYearButtonLabel: "Next Year",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month",
              customTimeInput: null
            };
          }
        }
      ]),
      ie(a, [
        {
          key: "componentDidMount",
          value: function() {
            var e = this;
            this.props.showTimeSelect &&
              (this.assignMonthContainer = void e.setState({
                monthContainer: e.monthContainer
              }));
          }
        },
        {
          key: "componentDidUpdate",
          value: function(e) {
            this.props.preSelection &&
            !Re(this.props.preSelection, e.preSelection)
              ? this.setState({ date: this.props.preSelection })
              : this.props.openToDate &&
                !Re(this.props.openToDate, e.openToDate) &&
                this.setState({ date: this.props.openToDate }),
              this.props.selectsEnd &&
                this.props.endDate !== e.endDate &&
                this.setState({ date: this.props.endDate });
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.props.container || Mt;
            return t.createElement(
              "div",
              { ref: this.containerRef },
              t.createElement(
                e,
                {
                  className: r(
                    "react-datepicker",
                    this.props.className,
                    {
                      "react-datepicker--time-only": this.props
                        .showTimeSelectOnly
                    },
                    {
                      "react-datepicker--time--input-only": this.props
                        .showTimeInputOnly
                    }
                  ),
                  showPopperArrow: this.props.showPopperArrow,
                  arrowProps: this.props.arrowProps
                },
                this.renderMonths(),
                this.renderYears(),
                this.renderTodayButton(),
                this.renderTimeSection(),
                this.renderInputTimeSection(),
                this.props.children
              )
            );
          }
        }
      ]),
      a
    );
  })();
pe(xt, "propTypes", {
  adjustDateOnChange: n.bool,
  arrowProps: n.object,
  chooseDayAriaLabelPrefix: n.string,
  className: n.string,
  children: n.node,
  container: n.func,
  dateFormat: n.oneOfType([n.string, n.array]).isRequired,
  dayClassName: n.func,
  weekDayClassName: n.func,
  disabledDayAriaLabelPrefix: n.string,
  monthClassName: n.func,
  timeClassName: n.func,
  disabledKeyboardNavigation: n.bool,
  dropdownMode: n.oneOf(["scroll", "select"]),
  endDate: n.instanceOf(Date),
  excludeDates: n.array,
  filterDate: n.func,
  fixedHeight: n.bool,
  formatWeekNumber: n.func,
  highlightDates: n.instanceOf(Map),
  includeDates: n.array,
  includeTimes: n.array,
  injectTimes: n.array,
  inline: n.bool,
  locale: n.oneOfType([n.string, n.shape({ locale: n.object })]),
  maxDate: n.instanceOf(Date),
  minDate: n.instanceOf(Date),
  monthsShown: n.number,
  monthSelectedIn: n.number,
  nextMonthAriaLabel: n.string,
  nextYearAriaLabel: n.string,
  onClickOutside: n.func.isRequired,
  onMonthChange: n.func,
  onYearChange: n.func,
  forceShowMonthNavigation: n.bool,
  onDropdownFocus: n.func,
  onSelect: n.func.isRequired,
  onWeekSelect: n.func,
  showTimeSelect: n.bool,
  showTimeInput: n.bool,
  showMonthYearPicker: n.bool,
  showFullMonthYearPicker: n.bool,
  showTwoColumnMonthYearPicker: n.bool,
  showYearPicker: n.bool,
  showQuarterYearPicker: n.bool,
  showTimeSelectOnly: n.bool,
  timeFormat: n.string,
  timeIntervals: n.number,
  onTimeChange: n.func,
  timeInputLabel: n.string,
  minTime: n.instanceOf(Date),
  maxTime: n.instanceOf(Date),
  excludeTimes: n.array,
  timeCaption: n.string,
  openToDate: n.instanceOf(Date),
  peekNextMonth: n.bool,
  previousMonthAriaLabel: n.string,
  previousYearAriaLabel: n.string,
  scrollableYearDropdown: n.bool,
  scrollableMonthYearDropdown: n.bool,
  preSelection: n.instanceOf(Date),
  selected: n.instanceOf(Date),
  selectsEnd: n.bool,
  selectsStart: n.bool,
  showMonthDropdown: n.bool,
  showPreviousMonths: n.bool,
  showMonthYearDropdown: n.bool,
  showWeekNumbers: n.bool,
  showYearDropdown: n.bool,
  startDate: n.instanceOf(Date),
  todayButton: n.string,
  useWeekdaysShort: n.bool,
  formatWeekDay: n.func,
  withPortal: n.bool,
  weekLabel: n.string,
  yearDropdownItemNumber: n.number,
  setOpen: n.func,
  shouldCloseOnSelect: n.bool,
  useShortMonthInDropdown: n.bool,
  showDisabledMonthNavigation: n.bool,
  previousMonthButtonLabel: n.oneOfType([n.string, n.node]),
  nextMonthButtonLabel: n.oneOfType([n.string, n.node]),
  previousYearButtonLabel: n.string,
  nextYearButtonLabel: n.string,
  renderCustomHeader: n.func,
  renderDayContents: n.func,
  onDayMouseEnter: n.func,
  onMonthMouseLeave: n.func,
  showPopperArrow: n.bool,
  handleOnKeyDown: n.func,
  isInputFocused: n.bool,
  customTimeInput: n.element,
  weekAriaLabelPrefix: n.string,
  setPreSelection: n.func,
  calendarStartDay: n.number,
  id: n.string,
  timeValue: n.instanceOf(Date),
  showTimeInputOnly: n.bool,
  showYearArrows: n.bool
});
var Yt = function(e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  It = (function(e) {
    de(r, t.Component);
    var n = De(r);
    function r(e) {
      var a;
      return (
        oe(this, r),
        pe(fe((a = n.call(this, e))), "getTabChildren", function() {
          return Array.prototype.slice
            .call(
              a.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Yt);
        }),
        pe(fe(a), "handleFocusStart", function(e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        pe(fe(a), "handleFocusEnd", function(e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (a.tabLoopRef = t.createRef()),
        a
      );
    }
    return (
      ie(r, null, [
        {
          key: "defaultProps",
          get: function() {
            return { enableTabLoop: !0 };
          }
        }
      ]),
      ie(r, [
        {
          key: "render",
          value: function() {
            return this.props.enableTabLoop
              ? t.createElement(
                  "div",
                  {
                    className: "react-datepicker__tab-loop",
                    ref: this.tabLoopRef
                  },
                  t.createElement("div", {
                    className: "react-datepicker__tab-loop__start",
                    tabIndex: "0",
                    onFocus: this.handleFocusStart
                  }),
                  this.props.children,
                  t.createElement("div", {
                    className: "react-datepicker__tab-loop__end",
                    tabIndex: "0",
                    onFocus: this.handleFocusEnd
                  })
                )
              : this.props.children;
          }
        }
      ]),
      r
    );
  })();
pe(It, "propTypes", { children: n.any, enableTabLoop: n.bool });
var Lt = (function(e) {
  de(r, t.Component);
  var n = De(r);
  function r(e) {
    var t;
    return (
      oe(this, r), ((t = n.call(this, e)).el = document.createElement("div")), t
    );
  }
  return (
    ie(r, [
      {
        key: "componentDidMount",
        value: function() {
          (this.portalRoot = document.getElementById(this.props.portalId)),
            this.portalRoot ||
              ((this.portalRoot = document.createElement("div")),
              this.portalRoot.setAttribute("id", this.props.portalId),
              document.body.appendChild(this.portalRoot)),
            this.portalRoot.appendChild(this.el);
        }
      },
      {
        key: "componentWillUnmount",
        value: function() {
          this.portalRoot.removeChild(this.el);
        }
      },
      {
        key: "render",
        value: function() {
          return re.createPortal(this.props.children, this.el);
        }
      }
    ]),
    r
  );
})();
pe(Lt, "propTypes", { children: n.any, portalId: n.string });
var Rt = ne.placements,
  qt = (function(e) {
    de(a, t.Component);
    var n = De(a);
    function a() {
      return oe(this, a), n.apply(this, arguments);
    }
    return (
      ie(
        a,
        [
          {
            key: "render",
            value: function() {
              var e,
                n = this.props,
                a = n.className,
                o = n.wrapperClassName,
                s = n.hidePopper,
                i = n.popperComponent,
                p = n.popperModifiers,
                c = n.popperPlacement,
                l = n.popperProps,
                u = n.targetComponent,
                d = n.enableTabLoop,
                h = n.popperOnKeyDown,
                m = n.portalId;
              if (!s) {
                var f = r("react-datepicker-popper", a);
                e = t.createElement(
                  ne.Popper,
                  ce({ modifiers: p, placement: c }, l),
                  function(e) {
                    var n = e.ref,
                      r = e.style,
                      a = e.placement,
                      o = e.arrowProps;
                    return t.createElement(
                      It,
                      { enableTabLoop: d },
                      t.createElement(
                        "div",
                        ce(
                          { ref: n, style: r },
                          { className: f, "data-placement": a, onKeyDown: h }
                        ),
                        t.cloneElement(i, { arrowProps: o })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (e = t.createElement(this.props.popperContainer, {}, e)),
                m && !s && (e = t.createElement(Lt, { portalId: m }, e));
              var y = r("react-datepicker-wrapper", o);
              return t.createElement(
                ne.Manager,
                { className: "react-datepicker-manager" },
                t.createElement(ne.Reference, null, function(e) {
                  var n = e.ref;
                  return t.createElement("div", { ref: n, className: y }, u);
                }),
                e
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return {
                hidePopper: !0,
                popperModifiers: {
                  preventOverflow: {
                    enabled: !0,
                    escapeWithReference: !0,
                    boundariesElement: "viewport"
                  }
                },
                popperProps: {},
                popperPlacement: "bottom-start"
              };
            }
          }
        ]
      ),
      a
    );
  })();
pe(qt, "propTypes", {
  className: n.string,
  wrapperClassName: n.string,
  hidePopper: n.bool,
  popperComponent: n.element,
  popperModifiers: n.object,
  popperPlacement: n.oneOf(Rt),
  popperContainer: n.func,
  popperProps: n.object,
  targetComponent: n.element,
  enableTabLoop: n.bool,
  popperOnKeyDown: n.func,
  portalId: n.string
});
var Ft = te(xt);
var At = (function(e) {
  de(o, t.Component);
  var n = De(o);
  function o(e) {
    var s;
    return (
      oe(this, o),
      pe(fe((s = n.call(this, e))), "getPreSelection", function() {
        return s.props.openToDate
          ? s.props.openToDate
          : s.props.selectsEnd && s.props.startDate
          ? s.props.startDate
          : s.props.selectsStart && s.props.endDate
          ? s.props.endDate
          : ke();
      }),
      pe(fe(s), "calcInitialState", function() {
        var e = s.getPreSelection(),
          t = rt(s.props),
          n = at(s.props),
          r = t && z(e, t) ? t : n && $(e, n) ? n : e;
        return {
          open: s.props.startOpen || !1,
          preventFocus: !1,
          preSelection: s.props.selected ? s.props.selected : r,
          highlightDates: ot(s.props.highlightDates),
          focused: !1
        };
      }),
      pe(fe(s), "clearPreventFocusTimeout", function() {
        s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
      }),
      pe(fe(s), "setFocus", function() {
        s.input && s.input.focus && s.input.focus({ preventScroll: !0 });
      }),
      pe(fe(s), "setBlur", function() {
        s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
      }),
      pe(fe(s), "setOpen", function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        s.setState(
          {
            open: e,
            preSelection:
              e && s.state.open
                ? s.state.preSelection
                : s.calcInitialState().preSelection,
            lastPreSelectChange: Bt
          },
          function() {
            e ||
              s.setState(
                function(e) {
                  return { focused: !!t && e.focused };
                },
                function() {
                  !t && s.setBlur(), s.setState({ inputValue: null });
                }
              );
          }
        );
      }),
      pe(fe(s), "inputOk", function() {
        return a(s.state.preSelection);
      }),
      pe(fe(s), "isCalendarOpen", function() {
        return void 0 === s.props.open
          ? s.state.open && !s.props.disabled && !s.props.readOnly
          : s.props.open;
      }),
      pe(fe(s), "handleFocus", function(e) {
        s.state.preventFocus ||
          (s.props.onFocus(e),
          s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)),
          s.setState({ focused: !0 });
      }),
      pe(fe(s), "cancelFocusInput", function() {
        clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
      }),
      pe(fe(s), "deferFocusInput", function() {
        s.cancelFocusInput(),
          (s.inputFocusTimeout = setTimeout(function() {
            return s.setFocus();
          }, 1));
      }),
      pe(fe(s), "handleDropdownFocus", function() {
        s.cancelFocusInput();
      }),
      pe(fe(s), "handleBlur", function(e) {
        (!s.state.open || s.props.withPortal || s.props.showTimeInput) &&
          s.props.onBlur(e),
          s.setState({ focused: !1 });
      }),
      pe(fe(s), "handleCalendarClickOutside", function(e) {
        s.props.inline || s.setOpen(!1),
          s.props.onClickOutside(e),
          s.props.withPortal && e.preventDefault();
      }),
      pe(fe(s), "handleChange", function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = t[0];
        if (
          !s.props.onChangeRaw ||
          (s.props.onChangeRaw.apply(fe(s), t),
          "function" == typeof r.isDefaultPrevented && !r.isDefaultPrevented())
        ) {
          s.setState({ inputValue: r.target.value, lastPreSelectChange: Wt });
          var a = Ce(r.target.value, s.props.dateFormat, s.props.locale);
          (!a && r.target.value) || s.setSelected(a, r, !0);
        }
      }),
      pe(fe(s), "handleSelect", function(e, t, n) {
        s.setState({ preventFocus: !0 }, function() {
          return (
            (s.preventFocusTimeout = setTimeout(function() {
              return s.setState({ preventFocus: !1 });
            }, 50)),
            s.preventFocusTimeout
          );
        }),
          s.props.onChangeRaw && s.props.onChangeRaw(t),
          s.props.selectsStart || s.props.selectsEnd
            ? s.props.onChange(e, t)
            : (s.setSelected(e, t, !1, n),
              !s.props.shouldCloseOnSelect || s.props.showTimeSelect
                ? s.setPreSelection(e)
                : s.props.inline || s.setOpen(!1));
      }),
      pe(fe(s), "setSelected", function(e, t, n, r) {
        var a = e;
        (null !== a && Ve(a, s.props)) ||
          ((qe(s.props.selected, a) && !s.props.allowSameDay) ||
            (null !== a &&
              (!s.props.selected ||
                (n &&
                  (s.props.showTimeSelect ||
                    s.props.showTimeSelectOnly ||
                    s.props.showTimeInput)) ||
                (a = Me(a, {
                  hour: w(s.props.selected),
                  minute: v(s.props.selected),
                  second: D(s.props.selected)
                })),
              s.props.inline || s.setState({ preSelection: a }),
              s.props.focusSelectedMonth || s.setState({ monthSelectedIn: r })),
            s.props.onChange(a, t)),
          n || (s.props.onSelect(a, t), s.setState({ inputValue: null })));
      }),
      pe(fe(s), "setPreSelection", function(e) {
        var t = void 0 !== s.props.minDate,
          n = void 0 !== s.props.maxDate,
          r = !0;
        e &&
          (t && n
            ? (r = Fe(e, s.props.minDate, s.props.maxDate))
            : t
            ? (r = $(e, s.props.minDate))
            : n && (r = z(e, s.props.maxDate))),
          r && s.setState({ preSelection: e });
      }),
      pe(fe(s), "handleTimeChange", function(e) {
        var t = Me(s.props.selected ? s.props.selected : s.getPreSelection(), {
          hour: w(e),
          minute: v(e)
        });
        s.setState({ preSelection: t }),
          s.props.onChange(t),
          s.props.shouldCloseOnSelect && s.setOpen(!1),
          s.props.showTimeInput && s.setOpen(!0),
          s.setState({ inputValue: null });
      }),
      pe(fe(s), "onInputClick", function() {
        s.props.disabled || s.props.readOnly || s.setOpen(!0),
          s.props.onInputClick();
      }),
      pe(fe(s), "onInputKeyDown", function(e) {
        s.props.onKeyDown(e);
        var t = e.key;
        if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
          if (s.state.open) {
            if ("ArrowDown" === t || "ArrowUp" === t) {
              e.preventDefault();
              var n =
                s.calendar.componentNode &&
                s.calendar.componentNode.querySelector(
                  '.react-datepicker__day[tabindex="0"]'
                );
              return void (n && n.focus({ preventScroll: !0 }));
            }
            var r = ke(s.state.preSelection);
            "Enter" === t
              ? (e.preventDefault(),
                s.inputOk() && s.state.lastPreSelectChange === Bt
                  ? (s.handleSelect(r, e),
                    !s.props.shouldCloseOnSelect && s.setPreSelection(r))
                  : s.setOpen(!1))
              : "Escape" === t && (e.preventDefault(), s.setOpen(!1)),
              s.inputOk() ||
                s.props.onInputError({ code: 1, msg: "Date input not valid." });
          }
        } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || s.onInputClick();
      }),
      pe(fe(s), "onDayKeyDown", function(e) {
        s.props.onKeyDown(e);
        var t = e.key,
          n = ke(s.state.preSelection);
        if ("Enter" === t)
          e.preventDefault(),
            s.handleSelect(n, e),
            !s.props.shouldCloseOnSelect && s.setPreSelection(n);
        else if ("Escape" === t)
          e.preventDefault(),
            s.setOpen(!1),
            s.inputOk() ||
              s.props.onInputError({ code: 1, msg: "Date input not valid." });
        else if (!s.props.disabledKeyboardNavigation) {
          var r;
          switch (t) {
            case "ArrowLeft":
              r = h(n, 1);
              break;
            case "ArrowRight":
              r = c(n, 1);
              break;
            case "ArrowUp":
              r = m(n, 1);
              break;
            case "ArrowDown":
              r = l(n, 1);
              break;
            case "PageUp":
              r = f(n, 1);
              break;
            case "PageDown":
              r = u(n, 1);
              break;
            case "Home":
              r = y(n, 1);
              break;
            case "End":
              r = d(n, 1);
          }
          if (!r)
            return void (
              s.props.onInputError &&
              s.props.onInputError({ code: 1, msg: "Date input not valid." })
            );
          e.preventDefault(),
            s.setState({ lastPreSelectChange: Bt }),
            s.props.adjustDateOnChange && s.setSelected(r),
            s.setPreSelection(r);
        }
      }),
      pe(fe(s), "onPopperKeyDown", function(e) {
        "Escape" === e.key &&
          (e.preventDefault(),
          s.setState({ preventFocus: !0 }, function() {
            s.setOpen(!1),
              setTimeout(function() {
                s.setFocus(), s.setState({ preventFocus: !1 });
              });
          }));
      }),
      pe(fe(s), "resetInput", function(e) {
        e &&
          (s.calendar &&
            s.calendar.instanceRef &&
            s.calendar.instanceRef.inputRef &&
            s.calendar.instanceRef.inputRef.current &&
            s.calendar.instanceRef.inputRef.current.resetInputBox(e),
          s.setState({ preSelection: e }));
      }),
      pe(fe(s), "changeOnlyTimePickerValue", function(e) {
        e &&
          s.calendar &&
          s.calendar.instanceRef &&
          s.calendar.instanceRef.inputRef &&
          s.calendar.instanceRef.inputRef.current &&
          s.calendar.instanceRef.inputRef.current.resetInputBox(e);
      }),
      pe(fe(s), "onClearClick", function(e) {
        e && e.preventDefault && e.preventDefault(),
          s.props.onChange(null, e),
          s.setState({ inputValue: null });
      }),
      pe(fe(s), "clear", function() {
        s.onClearClick();
      }),
      pe(fe(s), "renderCalendar", function() {
        return s.props.inline || s.isCalendarOpen()
          ? t.createElement(
              Ft,
              {
                ref: function(e) {
                  s.calendar = e;
                },
                locale: s.props.locale,
                chooseDayAriaLabelPrefix: s.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: s.props.disabledDayAriaLabelPrefix,
                weekAriaLabelPrefix: s.props.weekAriaLabelPrefix,
                adjustDateOnChange: s.props.adjustDateOnChange,
                setOpen: s.setOpen,
                shouldCloseOnSelect: s.props.shouldCloseOnSelect,
                dateFormat: s.props.dateFormatCalendar,
                useWeekdaysShort: s.props.useWeekdaysShort,
                formatWeekDay: s.props.formatWeekDay,
                dropdownMode: s.props.dropdownMode,
                selected: s.props.selected,
                preSelection: s.state.preSelection,
                onSelect: s.handleSelect,
                onWeekSelect: s.props.onWeekSelect,
                openToDate: s.props.openToDate,
                minDate: s.props.minDate,
                maxDate: s.props.maxDate,
                selectsStart: s.props.selectsStart,
                selectsEnd: s.props.selectsEnd,
                startDate: s.props.startDate,
                endDate: s.props.endDate,
                excludeDates: s.props.excludeDates,
                filterDate: s.props.filterDate,
                onClickOutside: s.handleCalendarClickOutside,
                formatWeekNumber: s.props.formatWeekNumber,
                highlightDates: s.state.highlightDates,
                includeDates: s.props.includeDates,
                includeTimes: s.props.includeTimes,
                injectTimes: s.props.injectTimes,
                inline: s.props.inline,
                peekNextMonth: s.props.peekNextMonth,
                showMonthDropdown: s.props.showMonthDropdown,
                showPreviousMonths: s.props.showPreviousMonths,
                useShortMonthInDropdown: s.props.useShortMonthInDropdown,
                showMonthYearDropdown: s.props.showMonthYearDropdown,
                showWeekNumbers: s.props.showWeekNumbers,
                showYearDropdown: s.props.showYearDropdown,
                withPortal: s.props.withPortal,
                forceShowMonthNavigation: s.props.forceShowMonthNavigation,
                showDisabledMonthNavigation:
                  s.props.showDisabledMonthNavigation,
                scrollableYearDropdown: s.props.scrollableYearDropdown,
                scrollableMonthYearDropdown:
                  s.props.scrollableMonthYearDropdown,
                todayButton: s.props.todayButton,
                weekLabel: s.props.weekLabel,
                outsideClickIgnoreClass:
                  "react-datepicker-ignore-onclickoutside",
                fixedHeight: s.props.fixedHeight,
                monthsShown: s.props.monthsShown,
                monthSelectedIn: s.state.monthSelectedIn,
                onDropdownFocus: s.handleDropdownFocus,
                onMonthChange: s.props.onMonthChange,
                onYearChange: s.props.onYearChange,
                dayClassName: s.props.dayClassName,
                weekDayClassName: s.props.weekDayClassName,
                monthClassName: s.props.monthClassName,
                timeClassName: s.props.timeClassName,
                showTimeSelect: s.props.showTimeSelect,
                showTimeSelectOnly: s.props.showTimeSelectOnly,
                onTimeChange: s.props.onTimeChange,
                timeFormat: s.props.timeFormat,
                timeIntervals: s.props.timeIntervals,
                minTime: s.props.minTime,
                maxTime: s.props.maxTime,
                excludeTimes: s.props.excludeTimes,
                timeCaption: s.props.timeCaption,
                className: s.props.calendarClassName,
                container: s.props.calendarContainer,
                yearDropdownItemNumber: s.props.yearDropdownItemNumber,
                previousMonthButtonLabel: s.props.previousMonthButtonLabel,
                nextMonthButtonLabel: s.props.nextMonthButtonLabel,
                previousYearButtonLabel: s.props.previousYearButtonLabel,
                nextYearButtonLabel: s.props.nextYearButtonLabel,
                timeInputLabel: s.props.timeInputLabel,
                disabledKeyboardNavigation: s.props.disabledKeyboardNavigation,
                renderCustomHeader: s.props.renderCustomHeader,
                popperProps: s.props.popperProps,
                renderDayContents: s.props.renderDayContents,
                onDayMouseEnter: s.props.onDayMouseEnter,
                onMonthMouseLeave: s.props.onMonthMouseLeave,
                showTimeInput: s.props.showTimeInput,
                showMonthYearPicker: s.props.showMonthYearPicker,
                showFullMonthYearPicker: s.props.showFullMonthYearPicker,
                showTwoColumnMonthYearPicker:
                  s.props.showTwoColumnMonthYearPicker,
                showYearPicker: s.props.showYearPicker,
                showQuarterYearPicker: s.props.showQuarterYearPicker,
                showPopperArrow: s.props.showPopperArrow,
                excludeScrollbar: s.props.excludeScrollbar,
                handleOnKeyDown: s.onDayKeyDown,
                isInputFocused: s.state.focused,
                customTimeInput: s.props.customTimeInput,
                setPreSelection: s.setPreSelection,
                calendarStartDay: s.props.calendarStartDay,
                id: s.props.id,
                timeValue: s.props.timeValue,
                showTimeInputOnly: s.props.showTimeInputOnly,
                showYearArrows: s.props.showYearArrows
              },
              s.props.children
            )
          : null;
      }),
      pe(fe(s), "renderDateInput", function() {
        var e,
          n,
          a,
          o,
          i,
          p = r(
            s.props.className,
            pe({}, "react-datepicker-ignore-onclickoutside", s.state.open)
          ),
          c = s.props.customInput || t.createElement("input", { type: "text" }),
          l = s.props.customInputRef || "ref",
          u =
            "string" == typeof s.props.value
              ? s.props.value
              : "string" == typeof s.state.inputValue
              ? s.state.inputValue
              : ((n = s.props.selected),
                (a = s.props),
                (o = a.dateFormat),
                (i = a.locale),
                (n &&
                  _e(
                    n,
                    Array.isArray(o)
                      ? o[0].replace("DD", "dd").replace("YYYY", "yyyy")
                      : o.replace("DD", "dd").replace("YYYY", "yyyy"),
                    i
                  )) ||
                  "");
        return t.cloneElement(
          c,
          (pe((e = {}), l, function(e) {
            s.input = e;
          }),
          pe(e, "value", u),
          pe(e, "onBlur", s.handleBlur),
          pe(e, "onChange", s.handleChange),
          pe(e, "onClick", s.onInputClick),
          pe(e, "onFocus", s.handleFocus),
          pe(e, "onKeyDown", s.onInputKeyDown),
          pe(e, "id", s.props.id),
          pe(e, "name", s.props.name),
          pe(e, "autoFocus", s.props.autoFocus),
          pe(e, "placeholder", s.props.placeholderText),
          pe(e, "disabled", s.props.disabled),
          pe(e, "autoComplete", s.props.autoComplete),
          pe(e, "className", r(c.props.className, p)),
          pe(e, "title", s.props.title),
          pe(e, "readOnly", s.props.readOnly),
          pe(e, "required", s.props.required),
          pe(e, "tabIndex", s.props.tabIndex),
          pe(e, "aria-labelledby", s.props.ariaLabelledBy),
          e)
        );
      }),
      pe(fe(s), "renderClearButton", function() {
        var e = s.props,
          n = e.isClearable,
          r = e.selected,
          a = e.clearButtonTitle,
          o = e.ariaLabelClose,
          i = void 0 === o ? "Close" : o;
        return n && null != r
          ? t.createElement("button", {
              type: "button",
              className: "react-datepicker__close-icon",
              "aria-label": i,
              onClick: s.onClearClick,
              title: a,
              tabIndex: -1
            })
          : null;
      }),
      (s.state = s.calcInitialState()),
      s
    );
  }
  return (
    ie(o, null, [
      {
        key: "defaultProps",
        get: function() {
          return {
            allowSameDay: !1,
            dateFormat: "MM/dd/yyyy",
            dateFormatCalendar: "LLLL yyyy",
            onChange: function() {},
            disabled: !1,
            disabledKeyboardNavigation: !1,
            dropdownMode: "scroll",
            onFocus: function() {},
            onBlur: function() {},
            onKeyDown: function() {},
            onInputClick: function() {},
            onSelect: function() {},
            onClickOutside: function() {},
            onMonthChange: function() {},
            onCalendarOpen: function() {},
            onCalendarClose: function() {},
            preventOpenOnFocus: !1,
            onYearChange: function() {},
            onInputError: function() {},
            monthsShown: 1,
            readOnly: !1,
            withPortal: !1,
            shouldCloseOnSelect: !0,
            showTimeSelect: !1,
            showTimeInput: !1,
            showTimeInputOnly: !1,
            showPreviousMonths: !1,
            showMonthYearPicker: !1,
            showFullMonthYearPicker: !1,
            showTwoColumnMonthYearPicker: !1,
            showYearPicker: !1,
            showQuarterYearPicker: !1,
            strictParsing: !1,
            timeIntervals: 30,
            timeCaption: "Time",
            previousMonthButtonLabel: "Previous Month",
            nextMonthButtonLabel: "Next Month",
            previousYearButtonLabel: "Previous Year",
            nextYearButtonLabel: "Next Year",
            timeInputLabel: "",
            enableTabLoop: !0,
            renderDayContents: function(e) {
              return e;
            },
            focusSelectedMonth: !1,
            showPopperArrow: !0,
            excludeScrollbar: !0,
            customTimeInput: null,
            calendarStartDay: 0
          };
        }
      }
    ]),
    ie(o, [
      {
        key: "componentDidUpdate",
        value: function(e, t) {
          var n, r;
          e.inline &&
            ((n = e.selected),
            (r = this.props.selected),
            n && r ? C(n) !== C(r) || _(n) !== _(r) : n !== r) &&
            this.setPreSelection(this.props.selected),
            void 0 !== this.state.monthSelectedIn &&
              e.monthsShown !== this.props.monthsShown &&
              this.setState({ monthSelectedIn: 0 }),
            e.highlightDates !== this.props.highlightDates &&
              this.setState({ highlightDates: ot(this.props.highlightDates) }),
            t.focused ||
              qe(e.selected, this.props.selected) ||
              this.setState({ inputValue: null }),
            t.open !== this.state.open &&
              (!1 === t.open &&
                !0 === this.state.open &&
                this.props.onCalendarOpen(),
              !0 === t.open &&
                !1 === this.state.open &&
                this.props.onCalendarClose());
        }
      },
      {
        key: "componentWillUnmount",
        value: function() {
          this.clearPreventFocusTimeout();
        }
      },
      {
        key: "render",
        value: function() {
          var e = this.renderCalendar();
          return this.props.inline && !this.props.withPortal
            ? e
            : this.props.withPortal
            ? t.createElement(
                "div",
                null,
                this.props.inline
                  ? null
                  : t.createElement(
                      "div",
                      { className: "react-datepicker__input-container" },
                      this.renderDateInput(),
                      this.renderClearButton()
                    ),
                this.state.open || this.props.inline
                  ? t.createElement(
                      "div",
                      { className: "react-datepicker__portal" },
                      e
                    )
                  : null
              )
            : t.createElement(qt, {
                className: this.props.popperClassName,
                wrapperClassName: this.props.wrapperClassName,
                hidePopper: !this.isCalendarOpen(),
                portalId: this.props.portalId,
                popperModifiers: this.props.popperModifiers,
                targetComponent: t.createElement(
                  "div",
                  { className: "react-datepicker__input-container" },
                  this.renderDateInput(),
                  this.renderClearButton()
                ),
                popperContainer: this.props.popperContainer,
                popperComponent: e,
                popperPlacement: this.props.popperPlacement,
                popperProps: this.props.popperProps,
                popperOnKeyDown: this.onPopperKeyDown,
                enableTabLoop: this.props.enableTabLoop
              });
        }
      }
    ]),
    o
  );
})();
pe(At, "propTypes", {
  adjustDateOnChange: n.bool,
  allowSameDay: n.bool,
  ariaLabelClose: n.string,
  ariaLabelledBy: n.string,
  autoComplete: n.string,
  autoFocus: n.bool,
  calendarClassName: n.string,
  calendarContainer: n.func,
  children: n.node,
  chooseDayAriaLabelPrefix: n.string,
  className: n.string,
  customInput: n.element,
  customInputRef: n.string,
  dateFormat: n.oneOfType([n.string, n.array]),
  dateFormatCalendar: n.string,
  dayClassName: n.func,
  weekDayClassName: n.func,
  disabledDayAriaLabelPrefix: n.string,
  monthClassName: n.func,
  timeClassName: n.func,
  disabled: n.bool,
  disabledKeyboardNavigation: n.bool,
  dropdownMode: n.oneOf(["scroll", "select"]).isRequired,
  endDate: n.instanceOf(Date),
  excludeDates: n.array,
  filterDate: n.func,
  fixedHeight: n.bool,
  formatWeekNumber: n.func,
  highlightDates: n.array,
  id: n.string,
  includeDates: n.array,
  includeTimes: n.array,
  injectTimes: n.array,
  inline: n.bool,
  isClearable: n.bool,
  locale: n.oneOfType([n.string, n.shape({ locale: n.object })]),
  maxDate: n.instanceOf(Date),
  minDate: n.instanceOf(Date),
  monthsShown: n.number,
  name: n.string,
  onBlur: n.func,
  onChange: n.func.isRequired,
  onSelect: n.func,
  onWeekSelect: n.func,
  onClickOutside: n.func,
  onChangeRaw: n.func,
  onFocus: n.func,
  onInputClick: n.func,
  onKeyDown: n.func,
  onMonthChange: n.func,
  onYearChange: n.func,
  onInputError: n.func,
  open: n.bool,
  onCalendarOpen: n.func,
  onCalendarClose: n.func,
  openToDate: n.instanceOf(Date),
  peekNextMonth: n.bool,
  placeholderText: n.string,
  popperContainer: n.func,
  popperClassName: n.string,
  popperModifiers: n.object,
  popperPlacement: n.oneOf(Rt),
  popperProps: n.object,
  preventOpenOnFocus: n.bool,
  readOnly: n.bool,
  required: n.bool,
  scrollableYearDropdown: n.bool,
  scrollableMonthYearDropdown: n.bool,
  selected: n.instanceOf(Date),
  selectsEnd: n.bool,
  selectsStart: n.bool,
  showMonthDropdown: n.bool,
  showPreviousMonths: n.bool,
  showMonthYearDropdown: n.bool,
  showWeekNumbers: n.bool,
  showYearDropdown: n.bool,
  strictParsing: n.bool,
  forceShowMonthNavigation: n.bool,
  showDisabledMonthNavigation: n.bool,
  startDate: n.instanceOf(Date),
  startOpen: n.bool,
  tabIndex: n.number,
  timeCaption: n.string,
  title: n.string,
  todayButton: n.node,
  useWeekdaysShort: n.bool,
  formatWeekDay: n.func,
  value: n.string,
  weekLabel: n.string,
  withPortal: n.bool,
  portalId: n.string,
  yearDropdownItemNumber: n.number,
  shouldCloseOnSelect: n.bool,
  showTimeInput: n.bool,
  showMonthYearPicker: n.bool,
  showFullMonthYearPicker: n.bool,
  showTwoColumnMonthYearPicker: n.bool,
  showYearPicker: n.bool,
  showQuarterYearPicker: n.bool,
  showTimeSelect: n.bool,
  showTimeSelectOnly: n.bool,
  timeFormat: n.string,
  timeIntervals: n.number,
  minTime: n.instanceOf(Date),
  maxTime: n.instanceOf(Date),
  excludeTimes: n.array,
  useShortMonthInDropdown: n.bool,
  clearButtonTitle: n.string,
  previousMonthButtonLabel: n.oneOfType([n.string, n.node]),
  nextMonthButtonLabel: n.oneOfType([n.string, n.node]),
  previousYearButtonLabel: n.string,
  nextYearButtonLabel: n.string,
  timeInputLabel: n.string,
  renderCustomHeader: n.func,
  renderDayContents: n.func,
  wrapperClassName: n.string,
  focusSelectedMonth: n.bool,
  onDayMouseEnter: n.func,
  onMonthMouseLeave: n.func,
  showPopperArrow: n.bool,
  excludeScrollbar: n.bool,
  enableTabLoop: n.bool,
  customTimeInput: n.element,
  weekAriaLabelPrefix: n.string,
  calendarStartDay: n.number,
  timeValue: n.instanceOf(Date),
  onTimeChange: n.func,
  showTimeInputOnly: n.bool,
  showYearArrows: n.bool
});
var Wt = "input",
  Bt = "navigate";
(exports.CalendarContainer = Mt),
  (exports.default = At),
  (exports.getDefaultLocale = Ae),
  (exports.registerLocale = function(e, t) {
    var n = "undefined" != typeof window ? window : global;
    n.__localeData__ || (n.__localeData__ = {}), (n.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function(e) {
    ("undefined" != typeof window ? window : global).__localeId__ = e;
  });
