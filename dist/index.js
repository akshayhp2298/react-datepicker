"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = e(require("react"));
require("prop-types");
var r = e(require("classnames")),
  n = e(require("date-fns/isDate")),
  a = e(require("date-fns/isValid")),
  o = e(require("date-fns/format")),
  s = e(require("date-fns/addMinutes")),
  i = e(require("date-fns/addHours")),
  p = e(require("date-fns/addDays")),
  c = e(require("date-fns/addWeeks")),
  l = e(require("date-fns/addMonths")),
  d = e(require("date-fns/addYears"));
require("date-fns/subMinutes"), require("date-fns/subHours");
var u = e(require("date-fns/subDays")),
  h = e(require("date-fns/subWeeks")),
  m = e(require("date-fns/subMonths")),
  f = e(require("date-fns/subYears")),
  v = e(require("date-fns/getSeconds")),
  y = e(require("date-fns/getMinutes")),
  w = e(require("date-fns/getHours")),
  D = e(require("date-fns/getDay")),
  k = e(require("date-fns/getDate")),
  g = e(require("date-fns/getWeek")),
  C = e(require("date-fns/getMonth")),
  b = e(require("date-fns/getQuarter")),
  _ = e(require("date-fns/getYear")),
  S = e(require("date-fns/getTime")),
  M = e(require("date-fns/setSeconds")),
  E = e(require("date-fns/setMinutes")),
  P = e(require("date-fns/setHours")),
  N = e(require("date-fns/setMonth")),
  Y = e(require("date-fns/setQuarter")),
  x = e(require("date-fns/setYear")),
  O = e(require("date-fns/min")),
  T = e(require("date-fns/max")),
  I = e(require("date-fns/differenceInCalendarDays")),
  L = e(require("date-fns/differenceInCalendarMonths"));
require("date-fns/differenceInCalendarWeeks");
var R = e(require("date-fns/differenceInCalendarYears")),
  F = e(require("date-fns/startOfDay")),
  q = e(require("date-fns/startOfWeek")),
  A = e(require("date-fns/startOfMonth")),
  B = e(require("date-fns/startOfQuarter")),
  W = e(require("date-fns/startOfYear")),
  V = e(require("date-fns/endOfDay"));
require("date-fns/endOfWeek"), require("date-fns/endOfMonth");
var j = e(require("date-fns/isEqual")),
  H = e(require("date-fns/isSameDay")),
  K = e(require("date-fns/isSameMonth")),
  Q = e(require("date-fns/isSameYear")),
  U = e(require("date-fns/isSameQuarter")),
  Z = e(require("date-fns/isAfter")),
  $ = e(require("date-fns/isBefore")),
  z = e(require("date-fns/isWithinInterval")),
  G = e(require("date-fns/toDate")),
  J = e(require("date-fns/parse")),
  X = e(require("date-fns/parseISO")),
  ee = e(require("react-onclickoutside"));
require("date-fns");
var te = require("react-popper"),
  re = e(require("react-dom"));
function ne(e) {
  return (ne =
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
function ae(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oe(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function se(e, t, r) {
  return t && oe(e.prototype, t), r && oe(e, r), e;
}
function ie(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = r),
    e
  );
}
function pe() {
  return (pe =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function ce(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ce(Object(r), !0).forEach(function(t) {
          ie(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ce(Object(r)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
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
    t && he(e, t);
}
function ue(e) {
  return (ue = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function he(e, t) {
  return (he =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function me(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function fe(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t) ? me(e) : t;
}
function ve(e) {
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
    var r,
      n = ue(e);
    if (t) {
      var a = ue(this).constructor;
      r = Reflect.construct(n, arguments, a);
    } else r = n.apply(this, arguments);
    return fe(this, r);
  };
}
function ye(e, t) {
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
var De = {
    p: we,
    P: function(e, t) {
      var r,
        n = e.match(/(P+)(p+)?/),
        a = n[1],
        o = n[2];
      if (!o) return ye(e, t);
      switch (a) {
        case "P":
          r = t.dateTime({ width: "short" });
          break;
        case "PP":
          r = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          r = t.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          r = t.dateTime({ width: "full" });
      }
      return r.replace("{{date}}", ye(a, t)).replace("{{time}}", we(o, t));
    }
  },
  ke = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function ge(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? X(e)
      : G(e)
    : new Date();
  return be(t) ? t : null;
}
function Ce(e, t, r, n) {
  var a = null,
    s = Ae(r) || qe(),
    i = !0;
  return Array.isArray(t)
    ? (t.forEach(function(t) {
        var r = J(
          e,
          t.replace("DD", "dd").replace("YYYY", "yyyy"),
          new Date(),
          { locale: s }
        );
        n &&
          (i =
            be(r) &&
            e ===
              o(r, t.replace("DD", "dd").replace("YYYY", "yyyy"), {
                awareOfUnicodeTokens: !0
              })),
          be(r) && i && (a = r);
      }),
      a)
    : ((a = J(e, t.replace("DD", "dd").replace("YYYY", "yyyy"), new Date(), {
        locale: s
      })),
      n
        ? (i =
            be(a) &&
            e ===
              o(a, t.replace("DD", "dd").replace("YYYY", "yyyy"), {
                awareOfUnicodeTokens: !0
              }))
        : be(a) ||
          ((t = t
            .match(ke)
            .map(function(e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? s
                  ? (0, De[t])(e, s.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 &&
            (a = J(
              e,
              t.replace("DD", "dd").replace("YYYY", "yyyy"),
              new Date()
            )),
          be(a) || (a = new Date(e))),
      be(a) && i ? a : null);
}
function be(e) {
  return a(e) && Z(e, new Date("1/1/1000"));
}
function _e(e, t, r) {
  if ("en" === r) return o(e, t, { awareOfUnicodeTokens: !0 });
  var n = Ae(r);
  return (
    r &&
      !n &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    !n && qe() && Ae(qe()) && (n = Ae(qe())),
    o(e, t, { locale: n || null, awareOfUnicodeTokens: !0 })
  );
}
function Se(e, t) {
  var r = t.hour,
    n = void 0 === r ? 0 : r,
    a = t.minute,
    o = void 0 === a ? 0 : a,
    s = t.second;
  return P(E(M(e, void 0 === s ? 0 : s), o), n);
}
function Me(e, t) {
  var r = (t && Ae(t)) || (qe() && Ae(qe()));
  return g(e, r ? { locale: r } : null);
}
function Ee(e, t) {
  return _e(e, "ddd", t);
}
function Pe(e) {
  return F(e);
}
function Ne(e, t, r) {
  var n = Ae(t || qe());
  return q(e, { locale: n, weekStartsOn: r });
}
function Ye(e) {
  return A(e);
}
function xe(e) {
  return B(e);
}
function Oe(e, t) {
  return e && t ? Q(e, t) : !e && !t;
}
function Te(e, t) {
  return e && t ? K(e, t) : !e && !t;
}
function Ie(e, t) {
  return e && t ? U(e, t) : !e && !t;
}
function Le(e, t) {
  return e && t ? H(e, t) : !e && !t;
}
function Re(e, t) {
  return e && t ? j(e, t) : !e && !t;
}
function Fe(e, t, r) {
  var n,
    a = F(t),
    o = V(r);
  try {
    n = z(e, { start: a, end: o });
  } catch (e) {
    n = !1;
  }
  return n;
}
function qe() {
  return ("undefined" != typeof window ? window : global).__localeId__;
}
function Ae(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : global;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Be(e, t) {
  return _e(N(ge(), e), "LLLL", t);
}
function We(e, t) {
  return _e(N(ge(), e), "LLL", t);
}
function Ve(e, t) {
  return _e(Y(ge(), e), "QQQ", t);
}
function je(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    $e(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return Le(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Le(e, t);
      })) ||
    (s && !s(ge(e))) ||
    !1
  );
}
function He(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeDates;
  return (
    (r &&
      r.some(function(t) {
        return Le(e, t);
      })) ||
    !1
  );
}
function Ke(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    $e(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return Te(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Te(e, t);
      })) ||
    (s && !s(ge(e))) ||
    !1
  );
}
function Qe(e, t, r, n) {
  var a = _(e),
    o = C(e),
    s = _(t),
    i = C(t),
    p = _(n);
  return a === s && a === p
    ? o <= r && r <= i
    : a < s
    ? (p === a && o <= r) || (p === s && i >= r) || (p < s && p > a)
    : void 0;
}
function Ue(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    $e(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return Ie(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Ie(e, t);
      })) ||
    (s && !s(ge(e))) ||
    !1
  );
}
function Ze(e, t, r, n) {
  var a = _(e),
    o = b(e),
    s = _(t),
    i = b(t),
    p = _(n);
  return a === s && a === p
    ? o <= r && r <= i
    : a < s
    ? (p === a && o <= r) || (p === s && i >= r) || (p < s && p > a)
    : void 0;
}
function $e(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate;
  return (r && I(e, r) < 0) || (n && I(e, n) > 0);
}
function ze(e, t) {
  for (var r = t.length, n = 0; n < r; n++)
    if (w(t[n]) === w(e) && y(t[n]) === y(e)) return !0;
  return !1;
}
function Ge(e, t) {
  var r = t.minTime,
    n = t.maxTime;
  if (!r || !n) throw new Error("Both minTime and maxTime props required");
  var a,
    o = ge(),
    s = P(E(o, y(e)), w(e)),
    i = P(E(o, y(r)), w(r)),
    p = P(E(o, y(n)), w(n));
  try {
    a = !z(s, { start: i, end: p });
  } catch (e) {
    a = !1;
  }
  return a;
}
function Je(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    a = m(e, 1);
  return (
    (r && L(r, a) > 0) ||
    (n &&
      n.every(function(e) {
        return L(e, a) > 0;
      })) ||
    !1
  );
}
function Xe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    a = l(e, 1);
  return (
    (r && L(a, r) > 0) ||
    (n &&
      n.every(function(e) {
        return L(a, e) > 0;
      })) ||
    !1
  );
}
function et(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    a = f(e, 1);
  return (
    (r && R(r, a) > 0) ||
    (n &&
      n.every(function(e) {
        return R(e, a) > 0;
      })) ||
    !1
  );
}
function tt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    a = d(e, 1);
  return (
    (r && R(a, r) > 0) ||
    (n &&
      n.every(function(e) {
        return R(a, e) > 0;
      })) ||
    !1
  );
}
function rt(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return I(e, t) >= 0;
    });
    return O(n);
  }
  return r ? O(r) : t;
}
function nt(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return I(e, t) <= 0;
    });
    return T(n);
  }
  return r ? T(r) : t;
}
function at() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      r = new Map(),
      a = 0,
      o = e.length;
    a < o;
    a++
  ) {
    var s = e[a];
    if (n(s)) {
      var i = _e(s, "MM.dd.yyyy"),
        p = r.get(i) || [];
      p.includes(t) || (p.push(t), r.set(i, p));
    } else if ("object" === ne(s)) {
      var c = Object.keys(s),
        l = c[0],
        d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = _e(d[u], "MM.dd.yyyy"),
            f = r.get(m) || [];
          f.includes(l) || (f.push(l), r.set(m, f));
        }
    }
  }
  return r;
}
function ot(e, t, r, n, a) {
  for (var o = a.length, p = [], c = 0; c < o; c++) {
    var l = s(i(e, w(a[c])), y(a[c])),
      d = s(e, (r + 1) * n);
    Z(l, t) && $(l, d) && p.push(a[c]);
  }
  return p;
}
function st(e) {
  return 1 === e.toString().length ? "0".concat(e) : "".concat(e);
}
function it(e, t, r, n) {
  for (var a = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      i = !0;
    r && (i = _(r) <= s), n && i && (i = _(n) >= s), i && a.push(s);
  }
  return a;
}
var pt = ee(
    (function(e) {
      de(a, t.Component);
      var n = ve(a);
      function a(e) {
        var r;
        ae(this, a),
          ie(me((r = n.call(this, e))), "renderOptions", function() {
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
                    onClick: r.onChange.bind(me(r), n)
                  },
                  e === n
                    ? t.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected"
                        },
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
          ie(me(r), "onChange", function(e) {
            r.props.onChange(e);
          }),
          ie(me(r), "handleClickOutside", function() {
            r.props.onCancel();
          }),
          ie(me(r), "shiftYears", function(e) {
            var t = r.state.yearsList.map(function(t) {
              return t + e;
            });
            r.setState({ yearsList: t });
          }),
          ie(me(r), "incrementYears", function() {
            return r.shiftYears(1);
          }),
          ie(me(r), "decrementYears", function() {
            return r.shiftYears(-1);
          });
        var o = e.yearDropdownItemNumber,
          s = e.scrollableYearDropdown,
          i = o || (s ? 10 : 5);
        return (
          (r.state = {
            yearsList: it(r.props.year, i, r.props.minDate, r.props.maxDate)
          }),
          r
        );
      }
      return (
        se(a, [
          {
            key: "render",
            value: function() {
              var e = r({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable": this.props
                  .scrollableYearDropdown
              });
              return t.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            }
          }
        ]),
        a
      );
    })()
  ),
  ct = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      ae(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        ie(me((e = r.call.apply(r, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        ie(me(e), "renderSelectOptions", function() {
          for (
            var r = e.props.minDate ? _(e.props.minDate) : 1900,
              n = e.props.maxDate ? _(e.props.maxDate) : 2100,
              a = [],
              o = r;
            o <= n;
            o++
          )
            a.push(t.createElement("option", { key: o, value: o }, o));
          return a;
        }),
        ie(me(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        ie(me(e), "renderSelectMode", function() {
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
        ie(me(e), "renderReadView", function(r) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
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
        ie(me(e), "renderDropdown", function() {
          return t.createElement(pt, {
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
        ie(me(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        ie(me(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        ie(me(e), "toggleDropdown", function(t) {
          e.setState({ dropdownVisible: !e.state.dropdownVisible }, function() {
            e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
          });
        }),
        ie(me(e), "handleYearChange", function(t, r) {
          e.onSelect(t, r), e.setOpen();
        }),
        ie(me(e), "onSelect", function(t, r) {
          e.props.onSelect && e.props.onSelect(t, r);
        }),
        ie(me(e), "setOpen", function() {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      se(n, [
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
      n
    );
  })(),
  lt = ee(
    (function(e) {
      de(n, t.Component);
      var r = ve(n);
      function n() {
        var e;
        ae(this, n);
        for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
          o[s] = arguments[s];
        return (
          ie(
            me((e = r.call.apply(r, [this].concat(o)))),
            "renderOptions",
            function() {
              return e.props.monthNames.map(function(r, n) {
                return t.createElement(
                  "div",
                  {
                    className:
                      e.props.month === n
                        ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                        : "react-datepicker__month-option",
                    key: r,
                    onClick: e.onChange.bind(me(e), n)
                  },
                  e.props.month === n
                    ? t.createElement(
                        "span",
                        {
                          className: "react-datepicker__month-option--selected"
                        },
                        "✓"
                      )
                    : "",
                  r
                );
              });
            }
          ),
          ie(me(e), "onChange", function(t) {
            return e.props.onChange(t);
          }),
          ie(me(e), "handleClickOutside", function() {
            return e.props.onCancel();
          }),
          e
        );
      }
      return (
        se(n, [
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
        n
      );
    })()
  ),
  dt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      ae(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        ie(me((e = r.call.apply(r, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        ie(me(e), "renderSelectOptions", function(e) {
          return e.map(function(e, r) {
            return t.createElement("option", { key: r, value: r }, e);
          });
        }),
        ie(me(e), "renderSelectMode", function(r) {
          return t.createElement(
            "select",
            {
              value: e.props.month,
              className: "react-datepicker__month-select",
              onChange: function(t) {
                return e.onChange(t.target.value);
              }
            },
            e.renderSelectOptions(r)
          );
        }),
        ie(me(e), "renderReadView", function(r, n) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
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
              n[e.props.month]
            )
          );
        }),
        ie(me(e), "renderDropdown", function(r) {
          return t.createElement(lt, {
            key: "dropdown",
            month: e.props.month,
            monthNames: r,
            onChange: e.onChange,
            onCancel: e.toggleDropdown
          });
        }),
        ie(me(e), "renderScrollMode", function(t) {
          var r = e.state.dropdownVisible,
            n = [e.renderReadView(!r, t)];
          return r && n.unshift(e.renderDropdown(t)), n;
        }),
        ie(me(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        ie(me(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      se(n, [
        {
          key: "render",
          value: function() {
            var e,
              r = this,
              n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function(e) {
                      return We(e, r.props.locale);
                    }
                  : function(e) {
                      return Be(e, r.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(n);
                break;
              case "select":
                e = this.renderSelectMode(n);
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
      n
    );
  })();
function ut(e, t) {
  for (var r = [], n = Ye(e), a = Ye(t); !Z(n, a); )
    r.push(ge(n)), (n = l(n, 1));
  return r;
}
var ht = ee(
    (function(e) {
      de(a, t.Component);
      var n = ve(a);
      function a(e) {
        var r;
        return (
          ae(this, a),
          ie(me((r = n.call(this, e))), "renderOptions", function() {
            return r.state.monthYearsList.map(function(e) {
              var n = S(e),
                a = Oe(r.props.date, e) && Te(r.props.date, e);
              return t.createElement(
                "div",
                {
                  className: a
                    ? "react-datepicker__month-year-option --selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: n,
                  onClick: r.onChange.bind(me(r), n)
                },
                a
                  ? t.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected"
                      },
                      "✓"
                    )
                  : "",
                _e(e, r.props.dateFormat)
              );
            });
          }),
          ie(me(r), "onChange", function(e) {
            return r.props.onChange(e);
          }),
          ie(me(r), "handleClickOutside", function() {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: ut(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        se(a, [
          {
            key: "render",
            value: function() {
              var e = r({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable": this.props
                  .scrollableMonthYearDropdown
              });
              return t.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            }
          }
        ]),
        a
      );
    })()
  ),
  mt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      ae(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        ie(me((e = r.call.apply(r, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        ie(me(e), "renderSelectOptions", function() {
          for (
            var r = Ye(e.props.minDate), n = Ye(e.props.maxDate), a = [];
            !Z(r, n);

          ) {
            var o = S(r);
            a.push(
              t.createElement(
                "option",
                { key: o, value: o },
                _e(r, e.props.dateFormat, e.props.locale)
              )
            ),
              (r = l(r, 1));
          }
          return a;
        }),
        ie(me(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        ie(me(e), "renderSelectMode", function() {
          return t.createElement(
            "select",
            {
              value: S(Ye(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange
            },
            e.renderSelectOptions()
          );
        }),
        ie(me(e), "renderReadView", function(r) {
          var n = _e(e.props.date, e.props.dateFormat, e.props.locale);
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
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
              n
            )
          );
        }),
        ie(me(e), "renderDropdown", function() {
          return t.createElement(ht, {
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
        ie(me(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        ie(me(e), "onChange", function(t) {
          e.toggleDropdown();
          var r = ge(parseInt(t));
          (Oe(e.props.date, r) && Te(e.props.date, r)) || e.props.onChange(r);
        }),
        ie(me(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      se(n, [
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
      n
    );
  })(),
  ft = (function(e) {
    de(a, t.Component);
    var n = ve(a);
    function a() {
      var e;
      ae(this, a);
      for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
        s[i] = arguments[i];
      return (
        ie(me((e = n.call.apply(n, [this].concat(s)))), "dayEl", t.createRef()),
        ie(me(e), "handleClick", function(t) {
          !e.isDisabled() && e.props.onClick && e.props.onClick(t);
        }),
        ie(me(e), "handleMouseEnter", function(t) {
          !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
        }),
        ie(me(e), "handleOnKeyDown", function(t) {
          " " === t.key && (t.preventDefault(), (t.key = "Enter")),
            e.props.handleOnKeyDown(t);
        }),
        ie(me(e), "isSameDay", function(t) {
          return Le(e.props.day, t);
        }),
        ie(me(e), "isKeyboardSelected", function() {
          return (
            !e.props.disabledKeyboardNavigation &&
            !e.props.inline &&
            !e.isSameDay(e.props.selected) &&
            e.isSameDay(e.props.preSelection)
          );
        }),
        ie(me(e), "isDisabled", function() {
          return je(e.props.day, e.props);
        }),
        ie(me(e), "isExcluded", function() {
          return He(e.props.day, e.props);
        }),
        ie(me(e), "getHighLightedClass", function(t) {
          var r = e.props,
            n = r.day,
            a = r.highlightDates;
          if (!a) return !1;
          var o = _e(n, "MM.dd.yyyy");
          return a.get(o);
        }),
        ie(me(e), "isInRange", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            a = t.endDate;
          return !(!n || !a) && Fe(r, n, a);
        }),
        ie(me(e), "isInSelectingRange", function() {
          var t = e.props,
            r = t.day,
            n = t.selectsStart,
            a = t.selectsEnd,
            o = t.selectingDate,
            s = t.startDate,
            i = t.endDate;
          return (
            !((!n && !a) || !o || e.isDisabled()) &&
            !Re(o, i) &&
              !Re(o, s) &&
              (n && i && ($(o, i) || Re(o, i))
                ? Fe(r, o, i)
                : !(!a || !s || (!Z(o, s) && !Re(o, s))) && Fe(r, s, o))
          );
        }),
        ie(me(e), "isSelectingRangeStart", function() {
          if (!e.isInSelectingRange()) return !1;
          var t = e.props,
            r = t.day,
            n = t.selectingDate,
            a = t.startDate;
          return t.selectsStart ? Le(r, n) && $(n, a) : Le(r, a);
        }),
        ie(me(e), "isSelectingRangeEnd", function() {
          if (!e.isInSelectingRange()) return !1;
          var t = e.props,
            r = t.day,
            n = t.selectingDate,
            a = t.endDate;
          return t.selectsEnd ? Le(r, n) && Z(n, a) : Le(r, a);
        }),
        ie(me(e), "isRangeStart", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            a = t.endDate;
          return !(!n || !a) && Le(n, r);
        }),
        ie(me(e), "isRangeEnd", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            a = t.endDate;
          return !(!n || !a) && Le(a, r);
        }),
        ie(me(e), "checkOverLapping", function() {
          var t = e.props,
            r = t.day,
            n = t.endDate,
            a = t.selectsEnd,
            o = t.startDate,
            s = t.selectsStart;
          return a ? Le(n, r) : !!s && Le(o, r);
        }),
        ie(me(e), "isWeekend", function() {
          var t = D(e.props.day);
          return 0 === t || 6 === t;
        }),
        ie(me(e), "isOutsideMonth", function() {
          return void 0 !== e.props.month && e.props.month !== C(e.props.day);
        }),
        ie(me(e), "getClassNames", function(t) {
          var n = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
          return r(
            "react-datepicker__day",
            n,
            "react-datepicker__day--" + Ee(e.props.day),
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
              "react-datepicker__day--today": e.isSameDay(ge()),
              "react-datepicker__day--weekend": e.isWeekend(),
              "react-datepicker__day--outside-month": e.isOutsideMonth()
            },
            e.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        ie(me(e), "getAriaLabel", function() {
          var t = e.props,
            r = t.day,
            n = t.ariaLabelPrefixWhenEnabled,
            a = void 0 === n ? "Choose" : n,
            o = t.ariaLabelPrefixWhenDisabled,
            s = void 0 === o ? "Not available" : o,
            i = e.isDisabled() || e.isExcluded() ? s : a;
          return "".concat(i, " ").concat(_e(r, "PPPP"));
        }),
        ie(me(e), "getTabIndex", function(t, r) {
          var n = t || e.props.selected,
            a = r || e.props.preSelection;
          return e.isKeyboardSelected() || (e.isSameDay(n) && Le(a, n))
            ? 0
            : -1;
        }),
        ie(me(e), "handleFocusDay", function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = !1;
          0 === e.getTabIndex() &&
            !t.isInputFocused &&
            e.isSameDay(e.props.preSelection) &&
            ((document.activeElement &&
              document.activeElement !== document.body) ||
              (r = !0),
            e.props.containerRef &&
              e.props.containerRef.current &&
              e.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement.classList.contains(
                "react-datepicker__day"
              ) &&
              (r = !0)),
            r && e.dayEl.current.focus({ preventScroll: !0 });
        }),
        ie(me(e), "render", function() {
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
                ? e.props.renderDayContents(k(e.props.day), e.props.day)
                : k(e.props.day)
            )
          );
        }),
        e
      );
    }
    return (
      se(a, [
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
  })(),
  vt = (function(e) {
    de(a, t.Component);
    var n = ve(a);
    function a() {
      var e;
      ae(this, a);
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return (
        ie(me((e = n.call.apply(n, [this].concat(r)))), "handleClick", function(
          t
        ) {
          e.props.onClick && e.props.onClick(t);
        }),
        e
      );
    }
    return (
      se(a, [
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
  })(),
  yt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      ae(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        ie(
          me((e = r.call.apply(r, [this].concat(o)))),
          "handleDayClick",
          function(t, r) {
            e.props.onDayClick && e.props.onDayClick(t, r);
          }
        ),
        ie(me(e), "handleDayMouseEnter", function(t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        ie(me(e), "handleWeekClick", function(t, r, n) {
          "function" == typeof e.props.onWeekSelect &&
            e.props.onWeekSelect(t, r, n),
            e.props.shouldCloseOnSelect && e.props.setOpen(!1);
        }),
        ie(me(e), "formatWeekNumber", function(t) {
          return e.props.formatWeekNumber
            ? e.props.formatWeekNumber(t)
            : Me(t, e.props.locale);
        }),
        ie(me(e), "renderDays", function() {
          var r = Ne(e.props.day, e.props.locale, e.props.calendarStartDay),
            n = [],
            a = e.formatWeekNumber(r);
          if (e.props.showWeekNumber) {
            var o = e.props.onWeekSelect
              ? e.handleWeekClick.bind(me(e), r, a)
              : void 0;
            n.push(
              t.createElement(vt, {
                key: "W",
                weekNumber: a,
                onClick: o,
                ariaLabelPrefix: e.props.ariaLabelPrefix
              })
            );
          }
          return n.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(n) {
              var a = p(r, n);
              return t.createElement(ft, {
                ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
                key: a.valueOf(),
                day: a,
                month: e.props.month,
                onClick: e.handleDayClick.bind(me(e), a),
                onMouseEnter: e.handleDayMouseEnter.bind(me(e), a),
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
      se(
        n,
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
      n
    );
  })(),
  wt = (function(e) {
    de(a, t.Component);
    var n = ve(a);
    function a() {
      var e;
      ae(this, a);
      for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
        s[i] = arguments[i];
      return (
        ie(
          me((e = n.call.apply(n, [this].concat(s)))),
          "handleDayClick",
          function(t, r) {
            e.props.onDayClick &&
              e.props.onDayClick(t, r, e.props.orderInDisplay);
          }
        ),
        ie(me(e), "handleDayMouseEnter", function(t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        ie(me(e), "handleMouseLeave", function() {
          e.props.onMouseLeave && e.props.onMouseLeave();
        }),
        ie(me(e), "isRangeStartMonth", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Te(N(n, t), a);
        }),
        ie(me(e), "isRangeStartQuarter", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Ie(Y(n, t), a);
        }),
        ie(me(e), "isRangeEndMonth", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Te(N(n, t), o);
        }),
        ie(me(e), "isRangeEndQuarter", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Ie(Y(n, t), o);
        }),
        ie(me(e), "isWeekInMonth", function(t) {
          var r = e.props.day,
            n = p(t, 6);
          return Te(t, r) || Te(n, r);
        }),
        ie(me(e), "renderWeeks", function() {
          for (
            var r = [],
              n = e.props.fixedHeight,
              a = Ne(Ye(e.props.day), e.props.locale, e.props.calendarStartDay),
              o = 0,
              s = !1;
            r.push(
              t.createElement(yt, {
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
            o++, (a = c(a, 1));
            var i = n && o >= 6,
              p = !n && !e.isWeekInMonth(a);
            if (i || p) {
              if (!e.props.peekNextMonth) break;
              s = !0;
            }
          }
          return r;
        }),
        ie(me(e), "onMonthClick", function(t, r) {
          e.handleDayClick(Ye(N(e.props.day, r)), t);
        }),
        ie(me(e), "onQuarterClick", function(t, r) {
          e.handleDayClick(xe(Y(e.props.day, r)), t);
        }),
        ie(me(e), "getMonthClassNames", function(t) {
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
                (p || c) && Ke(N(a, t), e.props),
              "react-datepicker__month--selected": C(a) === t && _(a) === _(i),
              "react-datepicker__month--in-range": Qe(o, s, t, a),
              "react-datepicker__month--range-start": e.isRangeStartMonth(t),
              "react-datepicker__month--range-end": e.isRangeEndMonth(t)
            }
          );
        }),
        ie(me(e), "getQuarterClassNames", function(t) {
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
                (p || c) && Ue(Y(a, t), e.props),
              "react-datepicker__quarter--selected":
                b(a) === t && _(a) === _(i),
              "react-datepicker__quarter--in-range": Ze(o, s, t, a),
              "react-datepicker__quarter--range-start": e.isRangeStartQuarter(
                t
              ),
              "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t)
            }
          );
        }),
        ie(me(e), "renderMonths", function() {
          var r = e.props,
            n = r.showFullMonthYearPicker,
            a = r.showTwoColumnMonthYearPicker,
            o = r.locale;
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
          ).map(function(r, a) {
            return t.createElement(
              "div",
              { className: "react-datepicker__month-wrapper", key: a },
              r.map(function(r, a) {
                return t.createElement(
                  "div",
                  {
                    key: a,
                    onClick: function(t) {
                      e.onMonthClick(t, r);
                    },
                    className: e.getMonthClassNames(r)
                  },
                  n ? Be(r, o) : We(r, o)
                );
              })
            );
          });
        }),
        ie(me(e), "renderQuarters", function() {
          return t.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            [1, 2, 3, 4].map(function(r, n) {
              return t.createElement(
                "div",
                {
                  key: n,
                  onClick: function(t) {
                    e.onQuarterClick(t, r);
                  },
                  className: e.getQuarterClassNames(r)
                },
                Ve(r, e.props.locale)
              );
            })
          );
        }),
        ie(me(e), "getClassNames", function() {
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
      se(a, [
        {
          key: "render",
          value: function() {
            var e = this.props,
              r = e.showMonthYearPicker,
              n = e.showQuarterYearPicker,
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
              r
                ? this.renderMonths()
                : n
                ? this.renderQuarters()
                : this.renderWeeks()
            );
          }
        }
      ]),
      a
    );
  })(),
  Dt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      ae(this, n);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      return (
        ie(me((e = r.call.apply(r, [this].concat(o)))), "state", {
          height: null
        }),
        ie(me(e), "handleClick", function(t) {
          ((e.props.minTime || e.props.maxTime) && Ge(t, e.props)) ||
            (e.props.excludeTimes && ze(t, e.props.excludeTimes)) ||
            (e.props.includeTimes && !ze(t, e.props.includeTimes)) ||
            e.props.onChange(t);
        }),
        ie(me(e), "liClasses", function(t, r, n) {
          var a = [
            "react-datepicker__time-list-item",
            e.props.timeClassName ? e.props.timeClassName(t, r, n) : void 0
          ];
          return (
            e.props.selected &&
              r === w(t) &&
              n === y(t) &&
              a.push("react-datepicker__time-list-item--selected"),
            (((e.props.minTime || e.props.maxTime) && Ge(t, e.props)) ||
              (e.props.excludeTimes && ze(t, e.props.excludeTimes)) ||
              (e.props.includeTimes && !ze(t, e.props.includeTimes))) &&
              a.push("react-datepicker__time-list-item--disabled"),
            e.props.injectTimes &&
              (60 * w(t) + y(t)) % e.props.intervals != 0 &&
              a.push("react-datepicker__time-list-item--injected"),
            a.join(" ")
          );
        }),
        ie(me(e), "renderTimes", function() {
          for (
            var r = [],
              n = e.props.format ? e.props.format : "p",
              a = e.props.intervals,
              o = e.props.selected || e.props.openToDate || ge(),
              i = w(o),
              p = y(o),
              c = Pe(ge()),
              l = 1440 / a,
              d =
                e.props.injectTimes &&
                e.props.injectTimes.sort(function(e, t) {
                  return e - t;
                }),
              u = [],
              h = 0;
            h < l;
            h++
          ) {
            var m = s(c, h * a);
            if ((r.push(m), d)) {
              var f = ot(c, m, h, a, d);
              r = r.concat(f);
            }
            i === w(m) && u.push(m);
          }
          return r.map(function(r, a) {
            return t.createElement(
              "li",
              {
                key: a,
                onClick: e.handleClick.bind(me(e), r),
                className: e.liClasses(r, i, p),
                ref: function(t) {
                  i === w(r) &&
                    (p >= y(r)
                      ? (e.centerLi = t)
                      : e.centerLi ||
                        u.indexOf(r) !== u.length - 1 ||
                        (e.centerLi = t));
                }
              },
              _e(r, n, e.props.locale)
            );
          });
        }),
        e
      );
    }
    return (
      se(
        n,
        [
          {
            key: "componentDidMount",
            value: function() {
              (this.list.scrollTop = n.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi
              )),
                this.props.monthRef &&
                  this.header &&
                  this.setState({
                    height:
                      this.props.monthRef.clientHeight -
                      this.header.clientHeight
                  });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                r = this.state.height;
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
                        style: r ? { height: r } : {}
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
      n
    );
  })();
ie(Dt, "calcCenterPosition", function(e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var kt = (function(e) {
    de(a, t.Component);
    var n = ve(a);
    function a(e) {
      var t;
      return (
        ae(this, a),
        ie(me((t = n.call(this, e))), "handleYearClick", function(e, r) {
          t.props.onDayClick && t.props.onDayClick(e, r);
        }),
        ie(me(t), "onYearClick", function(e, r) {
          var n;
          t.handleYearClick(((n = x(t.props.date, r)), W(n)), e);
        }),
        t
      );
    }
    return (
      se(a, [
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
  })(),
  gt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n(e) {
      var a;
      ae(this, n),
        ie(me((a = r.call(this, e))), "resetInputBox", function(e) {
          var t,
            r = e.getHours();
          "12" === a.props.timeFormat &&
            (t = parseInt(r, 10) > 12 ? "PM" : "AM");
          var n = "12" === a.props.timeFormat ? "hh:mm" : "HH:mm";
          a.setState({ time: _e(e, n), activeState: t, notValid: !1 });
        }),
        ie(me(a), "handleoutsideClick", function(e) {
          if (
            !e.target.className.includes("react-datepicker-time-inputbox") &&
            !e.target.className.includes("time-section-item")
          ) {
            var t = document.getElementById("time-menu-".concat(a.props.id));
            t && t.classList.add("d-none"), a.setTimeValue();
          }
        }),
        ie(me(a), "handleTimeInput", function(e) {
          var t = e.target.value,
            r = a.props.timeFormat,
            n = a.state.notValid,
            o = t.split(":"),
            s = parseInt(o[0], 10),
            i = parseInt(o[1], 10);
          (n =
            !(i >= 0 && i <= 59) ||
            (!("12" === r && s >= 1 && s <= 12) &&
              !("24" === r && s >= 0 && s <= 23))),
            isNaN(s) && (s = ""),
            isNaN(i) && (i = ""),
            a.setState({ time: e.target.value, notValid: n }, function() {
              if (n) {
                var e = document.getElementById(
                  "time-menu-".concat(a.props.id)
                );
                e && e.classList.add("d-none");
              }
            }),
            n
              ? a.props.onTimeChange("InvalidDate")
              : a.props.onTimeChange(e.target.value);
        }),
        ie(me(a), "handleTimeSelectionClick", function(e) {
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
              a.props.onTimeChange("".concat(e, ":").concat(t));
          });
        }),
        ie(me(a), "setTimeValue", function() {
          var e = a.state.time;
          if (a.state.notValid) a.props.onTimeChange("InvalidDate");
          else {
            var t = e.split(":")[0] || "00",
              r = e.split(":")[1] || "00";
            "12" === a.props.timeFormat &&
              (0 === parseInt(t, 10) && (t = 12),
              parseInt(t, 10) < 12 &&
                "PM" === a.state.activeState &&
                (t = parseInt(t, 10) + 12),
              parseInt(t, 10) >= 12 &&
                "AM" === a.state.activeState &&
                (t = parseInt(t, 10) - 12));
            var n = "".concat(st(parseInt(t, 10)), ":").concat(st(parseInt(r)));
            a.setState({ time: e }, function() {
              a.props.onTimeChange(n);
            });
          }
        }),
        ie(me(a), "handleFocus", function(e) {
          var t,
            r,
            n,
            o = a.state.time;
          (t = o),
            (r = ""
              .concat(parseFloat(t.replace(":", ".")) + 0.3)
              .replace(".", ":")),
            (n = document.getElementById(r)) ||
              (n = document.getElementById(t)),
            n &&
              n.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
              }),
            e.stopPropagation();
        }),
        ie(me(a), "renderTimeInput", function() {
          for (
            var e = a.state,
              r = e.time,
              n = e.notValid,
              o = a.props,
              i = o.id,
              p = o.timeFormat,
              c = a.state,
              l = (c.hour, c.mins, a.props),
              d = (l.timeString, l.customTimeInput, []),
              u = Pe(ge()),
              h = 0;
            h < 96;
            h++
          ) {
            var m = s(u, 15 * h);
            d.push(m);
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
                value: r,
                id: "datepicker-time-input-".concat(i),
                key: "datepicker-time-input-".concat(i),
                onFocus: a.handleFocus,
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
              n &&
                t.createElement(
                  "p",
                  { className: "text-danger" },
                  "Invalid time entered"
                ),
              t.createElement(
                "div",
                {
                  className: "time-selection-menu  d-none",
                  id: "time-menu-".concat(i)
                },
                t.createElement(
                  "ul",
                  { className: "time-selection-ul" },
                  "24" === p
                    ? d.map(function(e, r) {
                        return t.createElement(
                          "li",
                          {
                            key: r,
                            id: _e(e, "HH:mm"),
                            onClick: a.handleTimeSelectionClick.bind(me(a), e),
                            className: "time-section-item"
                          },
                          _e(e, "HH:mm")
                        );
                      })
                    : d.map(function(e, r) {
                        return t.createElement(
                          "li",
                          {
                            key: r,
                            id: _e(e, "HH:mm"),
                            onClick: a.handleTimeSelectionClick.bind(me(a), e),
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
        i = a.props.timeString,
        p = i.getHours();
      "12" === a.props.timeFormat && (o = parseInt(p, 10) > 12 ? "PM" : "AM");
      var c = "12" === a.props.timeFormat ? "hh:mm" : "HH:mm";
      return (
        (a.state = {
          time: _e(i, c),
          activeState: o,
          notValid: !1,
          timeFormat: c
        }),
        a
      );
    }
    return (
      se(n, [
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
      n
    );
  })();
function Ct(e) {
  var r = e.className,
    n = e.children,
    a = e.showPopperArrow,
    o = e.arrowProps,
    s = void 0 === o ? {} : o;
  return t.createElement(
    "div",
    { className: r },
    a &&
      t.createElement(
        "div",
        pe({ className: "react-datepicker__triangle" }, s)
      ),
    n
  );
}
var bt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      return ae(this, n), r.apply(this, arguments);
    }
    return (
      se(n, [
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
      n
    );
  })(),
  _t = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      return ae(this, n), r.apply(this, arguments);
    }
    return (
      se(n, [
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
      n
    );
  })(),
  St = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      return ae(this, n), r.apply(this, arguments);
    }
    return (
      se(n, [
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
      n
    );
  })(),
  Mt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      return ae(this, n), r.apply(this, arguments);
    }
    return (
      se(n, [
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
      n
    );
  })(),
  Et = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select"
  ],
  Pt = (function(e) {
    de(a, t.Component);
    var n = ve(a);
    function a(e) {
      var o;
      return (
        ae(this, a),
        ie(me((o = n.call(this, e))), "handleClickOutside", function(e) {
          o.props.onClickOutside(e);
        }),
        ie(me(o), "setClickOutsideRef", function() {
          return o.containerRef.current;
        }),
        ie(me(o), "handleDropdownFocus", function(e) {
          (function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (e.className || "").split(/\s+/);
            return Et.some(function(e) {
              return t.indexOf(e) >= 0;
            });
          })(e.target) && o.props.onDropdownFocus();
        }),
        ie(me(o), "getDateInView", function() {
          var e = o.props,
            t = e.preSelection,
            r = e.selected,
            n = e.openToDate,
            a = rt(o.props),
            s = nt(o.props),
            i = ge(),
            p = n || r || t;
          return p || (a && $(i, a) ? a : s && Z(i, s) ? s : i);
        }),
        ie(me(o), "increaseMonth", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: l(t, 1) };
            },
            function() {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        ie(me(o), "decreaseMonth", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: m(t, 1) };
            },
            function() {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        ie(me(o), "handleDayClick", function(e, t, r) {
          return o.props.onSelect(e, t, r);
        }),
        ie(me(o), "handleDayMouseEnter", function(e) {
          o.setState({ selectingDate: e }),
            o.props.onDayMouseEnter && o.props.onDayMouseEnter(e);
        }),
        ie(me(o), "handleMonthMouseLeave", function() {
          o.setState({ selectingDate: null }),
            o.props.onMonthMouseLeave && o.props.onMonthMouseLeave();
        }),
        ie(me(o), "handleYearChange", function(e) {
          o.props.onYearChange && o.props.onYearChange(e),
            o.props.setPreSelection && o.props.setPreSelection(e);
        }),
        ie(me(o), "handleMonthChange", function(e) {
          o.props.onMonthChange && o.props.onMonthChange(e),
            o.props.adjustDateOnChange &&
              (o.props.onSelect && o.props.onSelect(e),
              o.props.setOpen && o.props.setOpen(!0)),
            o.props.setPreSelection && o.props.setPreSelection(e);
        }),
        ie(me(o), "handleMonthYearChange", function(e) {
          o.handleYearChange(e), o.handleMonthChange(e);
        }),
        ie(me(o), "changeYear", function(e) {
          o.setState(
            function(t) {
              var r = t.date;
              return { date: x(r, e) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        ie(me(o), "changeMonth", function(e) {
          e <= C(o.props.maxDate) &&
            o.setState(
              function(t) {
                var r = t.date;
                return { date: N(r, e) };
              },
              function() {
                return o.handleMonthChange(o.state.date);
              }
            );
        }),
        ie(me(o), "changeMonthYear", function(e) {
          o.setState(
            function(t) {
              var r = t.date;
              return { date: x(N(r, C(e)), _(e)) };
            },
            function() {
              return o.handleMonthYearChange(o.state.date);
            }
          );
        }),
        ie(me(o), "header", function() {
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
                var a = p(n, e),
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
        ie(me(o), "formatWeekday", function(e, t) {
          return o.props.formatWeekDay
            ? (function(e, t, r) {
                return t(_e(e, "EEEE", r));
              })(e, o.props.formatWeekDay, t)
            : o.props.useWeekdaysShort
            ? (function(e, t) {
                return _e(e, "EEE", t);
              })(e, t)
            : (function(e, t) {
                return _e(e, "EEEEEE", t);
              })(e, t);
        }),
        ie(me(o), "decreaseYear", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: f(t, o.props.showYearPicker ? 11 : 1) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        ie(me(o), "renderPreviousButton", function() {
          if (!o.props.renderCustomHeader) {
            var e = o.props.showMonthYearPicker
              ? et(o.state.date, o.props)
              : Je(o.state.date, o.props);
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !e) &&
              !o.props.showTimeSelectOnly
            ) {
              var r = [
                  "react-datepicker__navigation ",
                  "react-datepicker__navigation--previous"
                ],
                n = o.decreaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (n = o.decreaseYear),
                e &&
                  o.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--previous--disabled"),
                  (n = null));
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
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": a ? l : p
                },
                a
                  ? o.props.previousYearButtonLabel
                  : o.props.previousMonthButtonLabel
              );
            }
          }
        }),
        ie(me(o), "increaseYear", function() {
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
        ie(me(o), "renderNextButton", function() {
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
              var r = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next"
              ];
              o.props.showTimeSelect &&
                r.push("react-datepicker__navigation--next--with-time"),
                o.props.todayButton &&
                  r.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var n = o.increaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (n = o.increaseYear),
                e &&
                  o.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--next--disabled"),
                  (n = null));
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
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": a ? l : p
                },
                a ? o.props.nextYearButtonLabel : o.props.nextMonthButtonLabel
              );
            }
          }
        }),
        ie(me(o), "renderCurrentMonth", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.state.date,
            r = ["react-datepicker__current-month"];
          return (
            o.props.showYearDropdown &&
              r.push("react-datepicker__current-month--hasYearDropdown"),
            o.props.showMonthDropdown &&
              r.push("react-datepicker__current-month--hasMonthDropdown"),
            o.props.showMonthYearDropdown &&
              r.push("react-datepicker__current-month--hasMonthYearDropdown"),
            t.createElement(
              "div",
              { className: r.join(" ") },
              _e(e, o.props.dateFormat, o.props.locale)
            )
          );
        }),
        ie(me(o), "renderYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.state.date;
          if (o.props.showYearDropdown)
            return t.createElement(ct, {
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
        ie(me(o), "renderMonthDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.state.date;
          if (o.props.showMonthDropdown)
            return t.createElement(dt, {
              dropdownMode: o.props.dropdownMode,
              locale: o.props.locale,
              onChange: o.changeMonth,
              month: C(e),
              useShortMonthInDropdown: o.props.useShortMonthInDropdown
            });
        }),
        ie(me(o), "renderMonthYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (o.props.showMonthYearDropdown && !e)
            return t.createElement(mt, {
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
        ie(me(o), "renderTodayButton", function() {
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
                  return o.props.onSelect(F(ge()), e);
                }
              },
              o.props.todayButton
            );
        }),
        ie(me(o), "renderDefaultHeader", function(e) {
          var r = e.monthDate;
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
                  t.createElement(bt, {
                    onClick: function() {
                      et(o.state.date, o.props) || o.decreaseYear();
                    }
                  })
                ),
              t.createElement(
                "span",
                { className: "react-datepicker__header__arrows left-arrow" },
                t.createElement(St, {
                  onClick: function() {
                    Je(o.state.date, o.props) || o.decreaseMonth();
                  }
                })
              ),
              o.renderMonthDropdown(r),
              o.renderYearDropdown(r),
              t.createElement(
                "span",
                { className: "react-datepicker__header__arrows right-arrow" },
                t.createElement(Mt, {
                  onClick: function() {
                    Xe(o.state.date, o.props) || o.increaseMonth();
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
                  t.createElement(_t, {
                    onClick: function() {
                      tt(o.state.date, o.props) || o.increaseYear();
                    }
                  })
                )
            ),
            t.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              o.header(r)
            )
          );
        }),
        ie(me(o), "renderCustomHeader", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.monthDate,
            n = e.i;
          if (0 !== n && void 0 !== n) return null;
          var a = Je(o.state.date, o.props),
            s = Xe(o.state.date, o.props),
            i = et(o.state.date, o.props),
            p = tt(o.state.date, o.props),
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
              le(
                le({}, o.state),
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
                o.header(r)
              )
          );
        }),
        ie(me(o), "renderYearHeader", function() {
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
        ie(me(o), "renderHeader", function(e) {
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
        ie(me(o), "renderMonths", function() {
          if (
            !(
              o.props.showTimeSelectOnly ||
              o.props.showYearPicker ||
              o.props.showTimeInputOnly
            )
          ) {
            for (
              var e = [],
                r = o.props.showPreviousMonths ? o.props.monthsShown - 1 : 0,
                n = m(o.state.date, r),
                a = 0;
              a < o.props.monthsShown;
              ++a
            ) {
              var s = a - o.props.monthSelectedIn,
                i = l(n, s),
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
                  t.createElement(wt, {
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
        ie(me(o), "renderYears", function() {
          if (!o.props.showTimeSelectOnly && !o.props.showTimeInputOnly)
            return o.props.showYearPicker
              ? t.createElement(
                  "div",
                  { className: "react-datepicker__year" },
                  o.renderHeader(),
                  t.createElement(kt, {
                    onDayClick: o.handleDayClick,
                    date: o.state.date
                  })
                )
              : void 0;
        }),
        ie(me(o), "renderTimeSection", function() {
          if (
            o.props.showTimeSelect &&
            (o.state.monthContainer || o.props.showTimeSelectOnly)
          )
            return t.createElement(Dt, {
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
        ie(me(o), "renderInputTimeSection", function() {
          var e = new Date(o.props.timeValue);
          if (o.props.showTimeInput)
            return t.createElement(gt, {
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
      se(a, null, [
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
      se(a, [
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
            !Le(this.props.preSelection, e.preSelection)
              ? this.setState({ date: this.props.preSelection })
              : this.props.openToDate &&
                !Le(this.props.openToDate, e.openToDate) &&
                this.setState({ date: this.props.openToDate }),
              this.props.selectsEnd &&
                this.props.endDate !== e.endDate &&
                this.setState({ date: this.props.endDate });
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.props.container || Ct;
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
  })(),
  Nt = function(e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  Yt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n(e) {
      var a;
      return (
        ae(this, n),
        ie(me((a = r.call(this, e))), "getTabChildren", function() {
          return Array.prototype.slice
            .call(
              a.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Nt);
        }),
        ie(me(a), "handleFocusStart", function(e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        ie(me(a), "handleFocusEnd", function(e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (a.tabLoopRef = t.createRef()),
        a
      );
    }
    return (
      se(n, null, [
        {
          key: "defaultProps",
          get: function() {
            return { enableTabLoop: !0 };
          }
        }
      ]),
      se(n, [
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
      n
    );
  })(),
  xt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n(e) {
      var t;
      return (
        ae(this, n),
        ((t = r.call(this, e)).el = document.createElement("div")),
        t
      );
    }
    return (
      se(n, [
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
      n
    );
  })(),
  Ot = (function(e) {
    de(a, t.Component);
    var n = ve(a);
    function a() {
      return ae(this, a), n.apply(this, arguments);
    }
    return (
      se(
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
                d = n.targetComponent,
                u = n.enableTabLoop,
                h = n.popperOnKeyDown,
                m = n.portalId;
              if (!s) {
                var f = r("react-datepicker-popper", a);
                e = t.createElement(
                  te.Popper,
                  pe({ modifiers: p, placement: c }, l),
                  function(e) {
                    var r = e.ref,
                      n = e.style,
                      a = e.placement,
                      o = e.arrowProps;
                    return t.createElement(
                      Yt,
                      { enableTabLoop: u },
                      t.createElement(
                        "div",
                        pe(
                          { ref: r, style: n },
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
                m && !s && (e = t.createElement(xt, { portalId: m }, e));
              var v = r("react-datepicker-wrapper", o);
              return t.createElement(
                te.Manager,
                { className: "react-datepicker-manager" },
                t.createElement(te.Reference, null, function(e) {
                  var r = e.ref;
                  return t.createElement("div", { ref: r, className: v }, d);
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
  })(),
  Tt = ee(Pt);
var It = (function(e) {
    de(o, t.Component);
    var a = ve(o);
    function o(e) {
      var s;
      return (
        ae(this, o),
        ie(me((s = a.call(this, e))), "getPreSelection", function() {
          return s.props.openToDate
            ? s.props.openToDate
            : s.props.selectsEnd && s.props.startDate
            ? s.props.startDate
            : s.props.selectsStart && s.props.endDate
            ? s.props.endDate
            : ge();
        }),
        ie(me(s), "calcInitialState", function() {
          var e = s.getPreSelection(),
            t = rt(s.props),
            r = nt(s.props),
            n = t && $(e, t) ? t : r && Z(e, r) ? r : e;
          return {
            open: s.props.startOpen || !1,
            preventFocus: !1,
            preSelection: s.props.selected ? s.props.selected : n,
            highlightDates: at(s.props.highlightDates),
            focused: !1
          };
        }),
        ie(me(s), "clearPreventFocusTimeout", function() {
          s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
        }),
        ie(me(s), "setFocus", function() {
          s.input && s.input.focus && s.input.focus({ preventScroll: !0 });
        }),
        ie(me(s), "setBlur", function() {
          s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
        }),
        ie(me(s), "setOpen", function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          s.setState(
            {
              open: e,
              preSelection:
                e && s.state.open
                  ? s.state.preSelection
                  : s.calcInitialState().preSelection,
              lastPreSelectChange: Rt
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
        ie(me(s), "inputOk", function() {
          return n(s.state.preSelection);
        }),
        ie(me(s), "isCalendarOpen", function() {
          return void 0 === s.props.open
            ? s.state.open && !s.props.disabled && !s.props.readOnly
            : s.props.open;
        }),
        ie(me(s), "handleFocus", function(e) {
          s.state.preventFocus ||
            (s.props.onFocus(e),
            s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)),
            s.setState({ focused: !0 });
        }),
        ie(me(s), "cancelFocusInput", function() {
          clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
        }),
        ie(me(s), "deferFocusInput", function() {
          s.cancelFocusInput(),
            (s.inputFocusTimeout = setTimeout(function() {
              return s.setFocus();
            }, 1));
        }),
        ie(me(s), "handleDropdownFocus", function() {
          s.cancelFocusInput();
        }),
        ie(me(s), "handleBlur", function(e) {
          (!s.state.open || s.props.withPortal || s.props.showTimeInput) &&
            s.props.onBlur(e),
            s.setState({ focused: !1 });
        }),
        ie(me(s), "handleCalendarClickOutside", function(e) {
          s.props.inline || s.setOpen(!1),
            s.props.onClickOutside(e),
            s.props.withPortal && e.preventDefault();
        }),
        ie(me(s), "handleChange", function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = t[0];
          if (
            !s.props.onChangeRaw ||
            (s.props.onChangeRaw.apply(me(s), t),
            "function" == typeof n.isDefaultPrevented &&
              !n.isDefaultPrevented())
          ) {
            s.setState({ inputValue: n.target.value, lastPreSelectChange: Lt });
            var a = Ce(n.target.value, s.props.dateFormat, s.props.locale);
            (!a && n.target.value) || s.setSelected(a, n, !0);
          }
        }),
        ie(me(s), "handleSelect", function(e, t, r) {
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
              : (s.setSelected(e, t, !1, r),
                !s.props.shouldCloseOnSelect || s.props.showTimeSelect
                  ? s.setPreSelection(e)
                  : s.props.inline || s.setOpen(!1));
        }),
        ie(me(s), "setSelected", function(e, t, r, n) {
          var a = e;
          (null !== a && je(a, s.props)) ||
            ((Re(s.props.selected, a) && !s.props.allowSameDay) ||
              (null !== a &&
                (!s.props.selected ||
                  (r &&
                    (s.props.showTimeSelect ||
                      s.props.showTimeSelectOnly ||
                      s.props.showTimeInput)) ||
                  (a = Se(a, {
                    hour: w(s.props.selected),
                    minute: y(s.props.selected),
                    second: v(s.props.selected)
                  })),
                s.props.inline || s.setState({ preSelection: a }),
                s.props.focusSelectedMonth ||
                  s.setState({ monthSelectedIn: n })),
              s.props.onChange(a, t)),
            r || (s.props.onSelect(a, t), s.setState({ inputValue: null })));
        }),
        ie(me(s), "setPreSelection", function(e) {
          var t = void 0 !== s.props.minDate,
            r = void 0 !== s.props.maxDate,
            n = !0;
          e &&
            (t && r
              ? (n = Fe(e, s.props.minDate, s.props.maxDate))
              : t
              ? (n = Z(e, s.props.minDate))
              : r && (n = $(e, s.props.maxDate))),
            n && s.setState({ preSelection: e });
        }),
        ie(me(s), "handleTimeChange", function(e) {
          var t = Se(
            s.props.selected ? s.props.selected : s.getPreSelection(),
            { hour: w(e), minute: y(e) }
          );
          s.setState({ preSelection: t }),
            s.props.onChange(t),
            s.props.shouldCloseOnSelect && s.setOpen(!1),
            s.props.showTimeInput && s.setOpen(!0),
            s.setState({ inputValue: null });
        }),
        ie(me(s), "onInputClick", function() {
          s.props.disabled || s.props.readOnly || s.setOpen(!0),
            s.props.onInputClick();
        }),
        ie(me(s), "onInputKeyDown", function(e) {
          s.props.onKeyDown(e);
          var t = e.key;
          if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
            if (s.state.open) {
              if ("ArrowDown" === t || "ArrowUp" === t) {
                e.preventDefault();
                var r =
                  s.calendar.componentNode &&
                  s.calendar.componentNode.querySelector(
                    '.react-datepicker__day[tabindex="0"]'
                  );
                return void (r && r.focus({ preventScroll: !0 }));
              }
              var n = ge(s.state.preSelection);
              "Enter" === t
                ? (e.preventDefault(),
                  s.inputOk() && s.state.lastPreSelectChange === Rt
                    ? (s.handleSelect(n, e),
                      !s.props.shouldCloseOnSelect && s.setPreSelection(n))
                    : s.setOpen(!1))
                : "Escape" === t && (e.preventDefault(), s.setOpen(!1)),
                s.inputOk() ||
                  s.props.onInputError({
                    code: 1,
                    msg: "Date input not valid."
                  });
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || s.onInputClick();
        }),
        ie(me(s), "onDayKeyDown", function(e) {
          s.props.onKeyDown(e);
          var t = e.key,
            r = ge(s.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              s.handleSelect(r, e),
              !s.props.shouldCloseOnSelect && s.setPreSelection(r);
          else if ("Escape" === t)
            e.preventDefault(),
              s.setOpen(!1),
              s.inputOk() ||
                s.props.onInputError({ code: 1, msg: "Date input not valid." });
          else if (!s.props.disabledKeyboardNavigation) {
            var n;
            switch (t) {
              case "ArrowLeft":
                n = u(r, 1);
                break;
              case "ArrowRight":
                n = p(r, 1);
                break;
              case "ArrowUp":
                n = h(r, 1);
                break;
              case "ArrowDown":
                n = c(r, 1);
                break;
              case "PageUp":
                n = m(r, 1);
                break;
              case "PageDown":
                n = l(r, 1);
                break;
              case "Home":
                n = f(r, 1);
                break;
              case "End":
                n = d(r, 1);
            }
            if (!n)
              return void (
                s.props.onInputError &&
                s.props.onInputError({ code: 1, msg: "Date input not valid." })
              );
            e.preventDefault(),
              s.setState({ lastPreSelectChange: Rt }),
              s.props.adjustDateOnChange && s.setSelected(n),
              s.setPreSelection(n);
          }
        }),
        ie(me(s), "onPopperKeyDown", function(e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            s.setState({ preventFocus: !0 }, function() {
              s.setOpen(!1),
                setTimeout(function() {
                  s.setFocus(), s.setState({ preventFocus: !1 });
                });
            }));
        }),
        ie(me(s), "resetInput", function(e) {
          e &&
            (s.calendar &&
              s.calendar.instanceRef &&
              s.calendar.instanceRef.inputRef &&
              s.calendar.instanceRef.inputRef.current &&
              s.calendar.instanceRef.inputRef.current.resetInputBox(e),
            s.setState({ preSelection: e }));
        }),
        ie(me(s), "changeOnlyTimePickerValue", function(e) {
          e &&
            s.calendar &&
            s.calendar.instanceRef &&
            s.calendar.instanceRef.inputRef &&
            s.calendar.instanceRef.inputRef.current &&
            s.calendar.instanceRef.inputRef.current.resetInputBox(e);
        }),
        ie(me(s), "onClearClick", function(e) {
          e && e.preventDefault && e.preventDefault(),
            s.props.onChange(null, e),
            s.setState({ inputValue: null });
        }),
        ie(me(s), "clear", function() {
          s.onClearClick();
        }),
        ie(me(s), "renderCalendar", function() {
          return s.props.inline || s.isCalendarOpen()
            ? t.createElement(
                Tt,
                {
                  ref: function(e) {
                    s.calendar = e;
                  },
                  locale: s.props.locale,
                  chooseDayAriaLabelPrefix: s.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    s.props.disabledDayAriaLabelPrefix,
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
                  disabledKeyboardNavigation:
                    s.props.disabledKeyboardNavigation,
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
        ie(me(s), "renderDateInput", function() {
          var e,
            n,
            a,
            o,
            i,
            p = r(
              s.props.className,
              ie({}, "react-datepicker-ignore-onclickoutside", s.state.open)
            ),
            c =
              s.props.customInput || t.createElement("input", { type: "text" }),
            l = s.props.customInputRef || "ref",
            d =
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
            (ie((e = {}), l, function(e) {
              s.input = e;
            }),
            ie(e, "value", d),
            ie(e, "onBlur", s.handleBlur),
            ie(e, "onChange", s.handleChange),
            ie(e, "onClick", s.onInputClick),
            ie(e, "onFocus", s.handleFocus),
            ie(e, "onKeyDown", s.onInputKeyDown),
            ie(e, "id", s.props.id),
            ie(e, "name", s.props.name),
            ie(e, "autoFocus", s.props.autoFocus),
            ie(e, "placeholder", s.props.placeholderText),
            ie(e, "disabled", s.props.disabled),
            ie(e, "autoComplete", s.props.autoComplete),
            ie(e, "className", r(c.props.className, p)),
            ie(e, "title", s.props.title),
            ie(e, "readOnly", s.props.readOnly),
            ie(e, "required", s.props.required),
            ie(e, "tabIndex", s.props.tabIndex),
            ie(e, "aria-labelledby", s.props.ariaLabelledBy),
            e)
          );
        }),
        ie(me(s), "renderClearButton", function() {
          var e = s.props,
            r = e.isClearable,
            n = e.selected,
            a = e.clearButtonTitle,
            o = e.ariaLabelClose,
            i = void 0 === o ? "Close" : o;
          return r && null != n
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
      se(o, null, [
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
      se(o, [
        {
          key: "componentDidUpdate",
          value: function(e, t) {
            var r, n;
            e.inline &&
              ((r = e.selected),
              (n = this.props.selected),
              r && n ? C(r) !== C(n) || _(r) !== _(n) : r !== n) &&
              this.setPreSelection(this.props.selected),
              void 0 !== this.state.monthSelectedIn &&
                e.monthsShown !== this.props.monthsShown &&
                this.setState({ monthSelectedIn: 0 }),
              e.highlightDates !== this.props.highlightDates &&
                this.setState({
                  highlightDates: at(this.props.highlightDates)
                }),
              t.focused ||
                Re(e.selected, this.props.selected) ||
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
              : t.createElement(Ot, {
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
  })(),
  Lt = "input",
  Rt = "navigate";
(exports.CalendarContainer = Ct),
  (exports.default = It),
  (exports.getDefaultLocale = qe),
  (exports.registerLocale = function(e, t) {
    var r = "undefined" != typeof window ? window : global;
    r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function(e) {
    ("undefined" != typeof window ? window : global).__localeId__ = e;
  });
