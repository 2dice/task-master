function Y0(a, o) {
  for (var r = 0; r < o.length; r++) {
    const c = o[r];
    if (typeof c != 'string' && !Array.isArray(c)) {
      for (const s in c)
        if (s !== 'default' && !(s in a)) {
          const d = Object.getOwnPropertyDescriptor(c, s);
          d && Object.defineProperty(a, s, d.get ? d : { enumerable: !0, get: () => c[s] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s);
  new MutationObserver((s) => {
    for (const d of s)
      if (d.type === 'childList')
        for (const m of d.addedNodes) m.tagName === 'LINK' && m.rel === 'modulepreload' && c(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const d = {};
    return (
      s.integrity && (d.integrity = s.integrity),
      s.referrerPolicy && (d.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (d.credentials = 'omit')
          : (d.credentials = 'same-origin'),
      d
    );
  }
  function c(s) {
    if (s.ep) return;
    s.ep = !0;
    const d = r(s);
    fetch(s.href, d);
  }
})();
function cv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default') ? a.default : a;
}
var Dr = { exports: {} },
  Ei = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sh;
function G0() {
  if (Sh) return Ei;
  Sh = 1;
  var a = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment');
  function r(c, s, d) {
    var m = null;
    if ((d !== void 0 && (m = '' + d), s.key !== void 0 && (m = '' + s.key), 'key' in s)) {
      d = {};
      for (var v in s) v !== 'key' && (d[v] = s[v]);
    } else d = s;
    return (s = d.ref), { $$typeof: a, type: c, key: m, ref: s !== void 0 ? s : null, props: d };
  }
  return (Ei.Fragment = o), (Ei.jsx = r), (Ei.jsxs = r), Ei;
}
var xh;
function V0() {
  return xh || ((xh = 1), (Dr.exports = G0())), Dr.exports;
}
var N = V0(),
  zr = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eh;
function k0() {
  if (Eh) return ve;
  Eh = 1;
  var a = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    d = Symbol.for('react.consumer'),
    m = Symbol.for('react.context'),
    v = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    w = Symbol.iterator;
  function R(x) {
    return x === null || typeof x != 'object'
      ? null
      : ((x = (w && x[w]) || x['@@iterator']), typeof x == 'function' ? x : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    E = {};
  function _(x, V, P) {
    (this.props = x), (this.context = V), (this.refs = E), (this.updater = P || D);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (x, V) {
      if (typeof x != 'object' && typeof x != 'function' && x != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, x, V, 'setState');
    }),
    (_.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, 'forceUpdate');
    });
  function q() {}
  q.prototype = _.prototype;
  function L(x, V, P) {
    (this.props = x), (this.context = V), (this.refs = E), (this.updater = P || D);
  }
  var B = (L.prototype = new q());
  (B.constructor = L), H(B, _.prototype), (B.isPureReactComponent = !0);
  var Z = Array.isArray,
    k = { H: null, A: null, T: null, S: null, V: null },
    I = Object.prototype.hasOwnProperty;
  function W(x, V, P, J, F, me) {
    return (P = me.ref), { $$typeof: a, type: x, key: V, ref: P !== void 0 ? P : null, props: me };
  }
  function K(x, V) {
    return W(x.type, V, void 0, void 0, void 0, x.props);
  }
  function ce(x) {
    return typeof x == 'object' && x !== null && x.$$typeof === a;
  }
  function ge(x) {
    var V = { '=': '=0', ':': '=2' };
    return (
      '$' +
      x.replace(/[=:]/g, function (P) {
        return V[P];
      })
    );
  }
  var Se = /\/+/g;
  function fe(x, V) {
    return typeof x == 'object' && x !== null && x.key != null ? ge('' + x.key) : V.toString(36);
  }
  function pe() {}
  function he(x) {
    switch (x.status) {
      case 'fulfilled':
        return x.value;
      case 'rejected':
        throw x.reason;
      default:
        switch (
          (typeof x.status == 'string'
            ? x.then(pe, pe)
            : ((x.status = 'pending'),
              x.then(
                function (V) {
                  x.status === 'pending' && ((x.status = 'fulfilled'), (x.value = V));
                },
                function (V) {
                  x.status === 'pending' && ((x.status = 'rejected'), (x.reason = V));
                }
              )),
          x.status)
        ) {
          case 'fulfilled':
            return x.value;
          case 'rejected':
            throw x.reason;
        }
    }
    throw x;
  }
  function de(x, V, P, J, F) {
    var me = typeof x;
    (me === 'undefined' || me === 'boolean') && (x = null);
    var ie = !1;
    if (x === null) ie = !0;
    else
      switch (me) {
        case 'bigint':
        case 'string':
        case 'number':
          ie = !0;
          break;
        case 'object':
          switch (x.$$typeof) {
            case a:
            case o:
              ie = !0;
              break;
            case b:
              return (ie = x._init), de(ie(x._payload), V, P, J, F);
          }
      }
    if (ie)
      return (
        (F = F(x)),
        (ie = J === '' ? '.' + fe(x, 0) : J),
        Z(F)
          ? ((P = ''),
            ie != null && (P = ie.replace(Se, '$&/') + '/'),
            de(F, V, P, '', function (Ne) {
              return Ne;
            }))
          : F != null &&
            (ce(F) &&
              (F = K(
                F,
                P +
                  (F.key == null || (x && x.key === F.key)
                    ? ''
                    : ('' + F.key).replace(Se, '$&/') + '/') +
                  ie
              )),
            V.push(F)),
        1
      );
    ie = 0;
    var $ = J === '' ? '.' : J + ':';
    if (Z(x))
      for (var ue = 0; ue < x.length; ue++)
        (J = x[ue]), (me = $ + fe(J, ue)), (ie += de(J, V, P, me, F));
    else if (((ue = R(x)), typeof ue == 'function'))
      for (x = ue.call(x), ue = 0; !(J = x.next()).done; )
        (J = J.value), (me = $ + fe(J, ue++)), (ie += de(J, V, P, me, F));
    else if (me === 'object') {
      if (typeof x.then == 'function') return de(he(x), V, P, J, F);
      throw (
        ((V = String(x)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (V === '[object Object]' ? 'object with keys {' + Object.keys(x).join(', ') + '}' : V) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return ie;
  }
  function O(x, V, P) {
    if (x == null) return x;
    var J = [],
      F = 0;
    return (
      de(x, J, '', '', function (me) {
        return V.call(P, me, F++);
      }),
      J
    );
  }
  function Q(x) {
    if (x._status === -1) {
      var V = x._result;
      (V = V()),
        V.then(
          function (P) {
            (x._status === 0 || x._status === -1) && ((x._status = 1), (x._result = P));
          },
          function (P) {
            (x._status === 0 || x._status === -1) && ((x._status = 2), (x._result = P));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = V));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var j =
    typeof reportError == 'function'
      ? reportError
      : function (x) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var V = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == 'object' && x !== null && typeof x.message == 'string'
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(V)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', x);
            return;
          }
          console.error(x);
        };
  function ae() {}
  return (
    (ve.Children = {
      map: O,
      forEach: function (x, V, P) {
        O(
          x,
          function () {
            V.apply(this, arguments);
          },
          P
        );
      },
      count: function (x) {
        var V = 0;
        return (
          O(x, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (x) {
        return (
          O(x, function (V) {
            return V;
          }) || []
        );
      },
      only: function (x) {
        if (!ce(x))
          throw Error('React.Children.only expected to receive a single React element child.');
        return x;
      },
    }),
    (ve.Component = _),
    (ve.Fragment = r),
    (ve.Profiler = s),
    (ve.PureComponent = L),
    (ve.StrictMode = c),
    (ve.Suspense = p),
    (ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (ve.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return k.H.useMemoCache(x);
      },
    }),
    (ve.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (ve.cloneElement = function (x, V, P) {
      if (x == null) throw Error('The argument must be a React element, but you passed ' + x + '.');
      var J = H({}, x.props),
        F = x.key,
        me = void 0;
      if (V != null)
        for (ie in (V.ref !== void 0 && (me = void 0), V.key !== void 0 && (F = '' + V.key), V))
          !I.call(V, ie) ||
            ie === 'key' ||
            ie === '__self' ||
            ie === '__source' ||
            (ie === 'ref' && V.ref === void 0) ||
            (J[ie] = V[ie]);
      var ie = arguments.length - 2;
      if (ie === 1) J.children = P;
      else if (1 < ie) {
        for (var $ = Array(ie), ue = 0; ue < ie; ue++) $[ue] = arguments[ue + 2];
        J.children = $;
      }
      return W(x.type, F, void 0, void 0, me, J);
    }),
    (ve.createContext = function (x) {
      return (
        (x = {
          $$typeof: m,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: d, _context: x }),
        x
      );
    }),
    (ve.createElement = function (x, V, P) {
      var J,
        F = {},
        me = null;
      if (V != null)
        for (J in (V.key !== void 0 && (me = '' + V.key), V))
          I.call(V, J) && J !== 'key' && J !== '__self' && J !== '__source' && (F[J] = V[J]);
      var ie = arguments.length - 2;
      if (ie === 1) F.children = P;
      else if (1 < ie) {
        for (var $ = Array(ie), ue = 0; ue < ie; ue++) $[ue] = arguments[ue + 2];
        F.children = $;
      }
      if (x && x.defaultProps)
        for (J in ((ie = x.defaultProps), ie)) F[J] === void 0 && (F[J] = ie[J]);
      return W(x, me, void 0, void 0, null, F);
    }),
    (ve.createRef = function () {
      return { current: null };
    }),
    (ve.forwardRef = function (x) {
      return { $$typeof: v, render: x };
    }),
    (ve.isValidElement = ce),
    (ve.lazy = function (x) {
      return { $$typeof: b, _payload: { _status: -1, _result: x }, _init: Q };
    }),
    (ve.memo = function (x, V) {
      return { $$typeof: g, type: x, compare: V === void 0 ? null : V };
    }),
    (ve.startTransition = function (x) {
      var V = k.T,
        P = {};
      k.T = P;
      try {
        var J = x(),
          F = k.S;
        F !== null && F(P, J),
          typeof J == 'object' && J !== null && typeof J.then == 'function' && J.then(ae, j);
      } catch (me) {
        j(me);
      } finally {
        k.T = V;
      }
    }),
    (ve.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (ve.use = function (x) {
      return k.H.use(x);
    }),
    (ve.useActionState = function (x, V, P) {
      return k.H.useActionState(x, V, P);
    }),
    (ve.useCallback = function (x, V) {
      return k.H.useCallback(x, V);
    }),
    (ve.useContext = function (x) {
      return k.H.useContext(x);
    }),
    (ve.useDebugValue = function () {}),
    (ve.useDeferredValue = function (x, V) {
      return k.H.useDeferredValue(x, V);
    }),
    (ve.useEffect = function (x, V, P) {
      var J = k.H;
      if (typeof P == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return J.useEffect(x, V);
    }),
    (ve.useId = function () {
      return k.H.useId();
    }),
    (ve.useImperativeHandle = function (x, V, P) {
      return k.H.useImperativeHandle(x, V, P);
    }),
    (ve.useInsertionEffect = function (x, V) {
      return k.H.useInsertionEffect(x, V);
    }),
    (ve.useLayoutEffect = function (x, V) {
      return k.H.useLayoutEffect(x, V);
    }),
    (ve.useMemo = function (x, V) {
      return k.H.useMemo(x, V);
    }),
    (ve.useOptimistic = function (x, V) {
      return k.H.useOptimistic(x, V);
    }),
    (ve.useReducer = function (x, V, P) {
      return k.H.useReducer(x, V, P);
    }),
    (ve.useRef = function (x) {
      return k.H.useRef(x);
    }),
    (ve.useState = function (x) {
      return k.H.useState(x);
    }),
    (ve.useSyncExternalStore = function (x, V, P) {
      return k.H.useSyncExternalStore(x, V, P);
    }),
    (ve.useTransition = function () {
      return k.H.useTransition();
    }),
    (ve.version = '19.1.0'),
    ve
  );
}
var wh;
function rs() {
  return wh || ((wh = 1), (zr.exports = k0())), zr.exports;
}
var y = rs();
const $t = cv(y),
  rv = Y0({ __proto__: null, default: $t }, [y]);
var Ur = { exports: {} },
  wi = {},
  jr = { exports: {} },
  Hr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ah;
function X0() {
  return (
    Ah ||
      ((Ah = 1),
      (function (a) {
        function o(O, Q) {
          var j = O.length;
          O.push(Q);
          e: for (; 0 < j; ) {
            var ae = (j - 1) >>> 1,
              x = O[ae];
            if (0 < s(x, Q)) (O[ae] = Q), (O[j] = x), (j = ae);
            else break e;
          }
        }
        function r(O) {
          return O.length === 0 ? null : O[0];
        }
        function c(O) {
          if (O.length === 0) return null;
          var Q = O[0],
            j = O.pop();
          if (j !== Q) {
            O[0] = j;
            e: for (var ae = 0, x = O.length, V = x >>> 1; ae < V; ) {
              var P = 2 * (ae + 1) - 1,
                J = O[P],
                F = P + 1,
                me = O[F];
              if (0 > s(J, j))
                F < x && 0 > s(me, J)
                  ? ((O[ae] = me), (O[F] = j), (ae = F))
                  : ((O[ae] = J), (O[P] = j), (ae = P));
              else if (F < x && 0 > s(me, j)) (O[ae] = me), (O[F] = j), (ae = F);
              else break e;
            }
          }
          return Q;
        }
        function s(O, Q) {
          var j = O.sortIndex - Q.sortIndex;
          return j !== 0 ? j : O.id - Q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var m = Date,
            v = m.now();
          a.unstable_now = function () {
            return m.now() - v;
          };
        }
        var p = [],
          g = [],
          b = 1,
          w = null,
          R = 3,
          D = !1,
          H = !1,
          E = !1,
          _ = !1,
          q = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          B = typeof setImmediate < 'u' ? setImmediate : null;
        function Z(O) {
          for (var Q = r(g); Q !== null; ) {
            if (Q.callback === null) c(g);
            else if (Q.startTime <= O) c(g), (Q.sortIndex = Q.expirationTime), o(p, Q);
            else break;
            Q = r(g);
          }
        }
        function k(O) {
          if (((E = !1), Z(O), !H))
            if (r(p) !== null) (H = !0), I || ((I = !0), fe());
            else {
              var Q = r(g);
              Q !== null && de(k, Q.startTime - O);
            }
        }
        var I = !1,
          W = -1,
          K = 5,
          ce = -1;
        function ge() {
          return _ ? !0 : !(a.unstable_now() - ce < K);
        }
        function Se() {
          if (((_ = !1), I)) {
            var O = a.unstable_now();
            ce = O;
            var Q = !0;
            try {
              e: {
                (H = !1), E && ((E = !1), L(W), (W = -1)), (D = !0);
                var j = R;
                try {
                  t: {
                    for (Z(O), w = r(p); w !== null && !(w.expirationTime > O && ge()); ) {
                      var ae = w.callback;
                      if (typeof ae == 'function') {
                        (w.callback = null), (R = w.priorityLevel);
                        var x = ae(w.expirationTime <= O);
                        if (((O = a.unstable_now()), typeof x == 'function')) {
                          (w.callback = x), Z(O), (Q = !0);
                          break t;
                        }
                        w === r(p) && c(p), Z(O);
                      } else c(p);
                      w = r(p);
                    }
                    if (w !== null) Q = !0;
                    else {
                      var V = r(g);
                      V !== null && de(k, V.startTime - O), (Q = !1);
                    }
                  }
                  break e;
                } finally {
                  (w = null), (R = j), (D = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? fe() : (I = !1);
            }
          }
        }
        var fe;
        if (typeof B == 'function')
          fe = function () {
            B(Se);
          };
        else if (typeof MessageChannel < 'u') {
          var pe = new MessageChannel(),
            he = pe.port2;
          (pe.port1.onmessage = Se),
            (fe = function () {
              he.postMessage(null);
            });
        } else
          fe = function () {
            q(Se, 0);
          };
        function de(O, Q) {
          W = q(function () {
            O(a.unstable_now());
          }, Q);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (a.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (K = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (a.unstable_next = function (O) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = R;
            }
            var j = R;
            R = Q;
            try {
              return O();
            } finally {
              R = j;
            }
          }),
          (a.unstable_requestPaint = function () {
            _ = !0;
          }),
          (a.unstable_runWithPriority = function (O, Q) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var j = R;
            R = O;
            try {
              return Q();
            } finally {
              R = j;
            }
          }),
          (a.unstable_scheduleCallback = function (O, Q, j) {
            var ae = a.unstable_now();
            switch (
              (typeof j == 'object' && j !== null
                ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? ae + j : ae))
                : (j = ae),
              O)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = j + x),
              (O = {
                id: b++,
                callback: Q,
                priorityLevel: O,
                startTime: j,
                expirationTime: x,
                sortIndex: -1,
              }),
              j > ae
                ? ((O.sortIndex = j),
                  o(g, O),
                  r(p) === null && O === r(g) && (E ? (L(W), (W = -1)) : (E = !0), de(k, j - ae)))
                : ((O.sortIndex = x), o(p, O), H || D || ((H = !0), I || ((I = !0), fe()))),
              O
            );
          }),
          (a.unstable_shouldYield = ge),
          (a.unstable_wrapCallback = function (O) {
            var Q = R;
            return function () {
              var j = R;
              R = Q;
              try {
                return O.apply(this, arguments);
              } finally {
                R = j;
              }
            };
          });
      })(Hr)),
    Hr
  );
}
var Th;
function Q0() {
  return Th || ((Th = 1), (jr.exports = X0())), jr.exports;
}
var Br = { exports: {} },
  rt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rh;
function Z0() {
  if (Rh) return rt;
  Rh = 1;
  var a = rs();
  function o(p) {
    var g = 'https://react.dev/errors/' + p;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) g += '&args[]=' + encodeURIComponent(arguments[b]);
    }
    return (
      'Minified React error #' +
      p +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var c = {
      d: {
        f: r,
        r: function () {
          throw Error(o(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for('react.portal');
  function d(p, g, b) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: w == null ? null : '' + w,
      children: p,
      containerInfo: g,
      implementation: b,
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(p, g) {
    if (p === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (rt.createPortal = function (p, g) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(o(299));
      return d(p, g, null, b);
    }),
    (rt.flushSync = function (p) {
      var g = m.T,
        b = c.p;
      try {
        if (((m.T = null), (c.p = 2), p)) return p();
      } finally {
        (m.T = g), (c.p = b), c.d.f();
      }
    }),
    (rt.preconnect = function (p, g) {
      typeof p == 'string' &&
        (g
          ? ((g = g.crossOrigin),
            (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        c.d.C(p, g));
    }),
    (rt.prefetchDNS = function (p) {
      typeof p == 'string' && c.d.D(p);
    }),
    (rt.preinit = function (p, g) {
      if (typeof p == 'string' && g && typeof g.as == 'string') {
        var b = g.as,
          w = v(b, g.crossOrigin),
          R = typeof g.integrity == 'string' ? g.integrity : void 0,
          D = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        b === 'style'
          ? c.d.S(p, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: w,
              integrity: R,
              fetchPriority: D,
            })
          : b === 'script' &&
            c.d.X(p, {
              crossOrigin: w,
              integrity: R,
              fetchPriority: D,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    (rt.preinitModule = function (p, g) {
      if (typeof p == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var b = v(g.as, g.crossOrigin);
            c.d.M(p, {
              crossOrigin: b,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && c.d.M(p);
    }),
    (rt.preload = function (p, g) {
      if (typeof p == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var b = g.as,
          w = v(b, g.crossOrigin);
        c.d.L(p, b, {
          crossOrigin: w,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    (rt.preloadModule = function (p, g) {
      if (typeof p == 'string')
        if (g) {
          var b = v(g.as, g.crossOrigin);
          c.d.m(p, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: b,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else c.d.m(p);
    }),
    (rt.requestFormReset = function (p) {
      c.d.r(p);
    }),
    (rt.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (rt.useFormState = function (p, g, b) {
      return m.H.useFormState(p, g, b);
    }),
    (rt.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (rt.version = '19.1.0'),
    rt
  );
}
var Oh;
function sv() {
  if (Oh) return Br.exports;
  Oh = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (o) {
        console.error(o);
      }
  }
  return a(), (Br.exports = Z0()), Br.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mh;
function K0() {
  if (Mh) return wi;
  Mh = 1;
  var a = Q0(),
    o = rs(),
    r = sv();
  function c(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (d(e) !== e) throw Error(c(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (((l = i.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return v(i), e;
          if (u === l) return v(i), t;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) (n = i), (l = u);
      else {
        for (var f = !1, h = i.child; h; ) {
          if (h === n) {
            (f = !0), (n = i), (l = u);
            break;
          }
          if (h === l) {
            (f = !0), (l = i), (n = u);
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = u.child; h; ) {
            if (h === n) {
              (f = !0), (n = u), (l = i);
              break;
            }
            if (h === l) {
              (f = !0), (l = u), (n = i);
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = g(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    w = Symbol.for('react.element'),
    R = Symbol.for('react.transitional.element'),
    D = Symbol.for('react.portal'),
    H = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    _ = Symbol.for('react.profiler'),
    q = Symbol.for('react.provider'),
    L = Symbol.for('react.consumer'),
    B = Symbol.for('react.context'),
    Z = Symbol.for('react.forward_ref'),
    k = Symbol.for('react.suspense'),
    I = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    K = Symbol.for('react.lazy'),
    ce = Symbol.for('react.activity'),
    ge = Symbol.for('react.memo_cache_sentinel'),
    Se = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Se && e[Se]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var pe = Symbol.for('react.client.reference');
  function he(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case H:
        return 'Fragment';
      case _:
        return 'Profiler';
      case E:
        return 'StrictMode';
      case k:
        return 'Suspense';
      case I:
        return 'SuspenseList';
      case ce:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case D:
          return 'Portal';
        case B:
          return (e.displayName || 'Context') + '.Provider';
        case L:
          return (e._context.displayName || 'Context') + '.Consumer';
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case W:
          return (t = e.displayName || null), t !== null ? t : he(e.type) || 'Memo';
        case K:
          (t = e._payload), (e = e._init);
          try {
            return he(e(t));
          } catch {}
      }
    return null;
  }
  var de = Array.isArray,
    O = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = { pending: !1, data: null, method: null, action: null },
    ae = [],
    x = -1;
  function V(e) {
    return { current: e };
  }
  function P(e) {
    0 > x || ((e.current = ae[x]), (ae[x] = null), x--);
  }
  function J(e, t) {
    x++, (ae[x] = e.current), (e.current = t);
  }
  var F = V(null),
    me = V(null),
    ie = V(null),
    $ = V(null);
  function ue(e, t) {
    switch ((J(ie, t), J(me, e), J(F, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Jm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) (t = Jm(t)), (e = Wm(t, e));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    P(F), J(F, e);
  }
  function Ne() {
    P(F), P(me), P(ie);
  }
  function Re(e) {
    e.memoizedState !== null && J($, e);
    var t = F.current,
      n = Wm(t, e.type);
    t !== n && (J(me, e), J(F, n));
  }
  function Ee(e) {
    me.current === e && (P(F), P(me)), $.current === e && (P($), (pi._currentValue = j));
  }
  var we = Object.prototype.hasOwnProperty,
    nt = a.unstable_scheduleCallback,
    dt = a.unstable_cancelCallback,
    Fn = a.unstable_shouldYield,
    In = a.unstable_requestPaint,
    ut = a.unstable_now,
    So = a.unstable_getCurrentPriorityLevel,
    el = a.unstable_ImmediatePriority,
    Ms = a.unstable_UserBlockingPriority,
    _i = a.unstable_NormalPriority,
    xp = a.unstable_LowPriority,
    Cs = a.unstable_IdlePriority,
    Ep = a.log,
    wp = a.unstable_setDisableYieldValue,
    Ta = null,
    bt = null;
  function xn(e) {
    if ((typeof Ep == 'function' && wp(e), bt && typeof bt.setStrictMode == 'function'))
      try {
        bt.setStrictMode(Ta, e);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Rp,
    Ap = Math.log,
    Tp = Math.LN2;
  function Rp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ap(e) / Tp) | 0)) | 0;
  }
  var Di = 256,
    zi = 4194304;
  function tl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ui(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var h = l & 134217727;
    return (
      h !== 0
        ? ((l = h & ~u),
          l !== 0
            ? (i = tl(l))
            : ((f &= h), f !== 0 ? (i = tl(f)) : n || ((n = h & ~e), n !== 0 && (i = tl(n)))))
        : ((h = l & ~u),
          h !== 0
            ? (i = tl(h))
            : f !== 0
              ? (i = tl(f))
              : n || ((n = l & ~e), n !== 0 && (i = tl(n)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & u) === 0 &&
            ((u = i & -i), (n = t & -t), u >= n || (u === 32 && (n & 4194048) !== 0))
          ? t
          : i
    );
  }
  function Ra(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Op(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ns() {
    var e = Di;
    return (Di <<= 1), (Di & 4194048) === 0 && (Di = 256), e;
  }
  function _s() {
    var e = zi;
    return (zi <<= 1), (zi & 62914560) === 0 && (zi = 4194304), e;
  }
  function xo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Oa(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Mp(e, t, n, l, i, u) {
    var f = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var h = e.entanglements,
      S = e.expirationTimes,
      C = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var Y = 31 - St(n),
        X = 1 << Y;
      (h[Y] = 0), (S[Y] = -1);
      var z = C[Y];
      if (z !== null)
        for (C[Y] = null, Y = 0; Y < z.length; Y++) {
          var U = z[Y];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~X;
    }
    l !== 0 && Ds(e, l, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Ds(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - St(t);
    (e.entangledLanes |= t), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194090));
  }
  function zs(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - St(n),
        i = 1 << l;
      (i & t) | (e[l] & t) && (e[l] |= t), (n &= ~i);
    }
  }
  function Eo(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function wo(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function Us() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : hh(e.type));
  }
  function Cp(e, t) {
    var n = Q.p;
    try {
      return (Q.p = e), t();
    } finally {
      Q.p = n;
    }
  }
  var En = Math.random().toString(36).slice(2),
    ot = '__reactFiber$' + En,
    mt = '__reactProps$' + En,
    Tl = '__reactContainer$' + En,
    Ao = '__reactEvents$' + En,
    Np = '__reactListeners$' + En,
    _p = '__reactHandles$' + En,
    js = '__reactResources$' + En,
    Ma = '__reactMarker$' + En;
  function To(e) {
    delete e[ot], delete e[mt], delete e[Ao], delete e[Np], delete e[_p];
  }
  function Rl(e) {
    var t = e[ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Tl] || n[ot])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Im(e); e !== null; ) {
            if ((n = e[ot])) return n;
            e = Im(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Ol(e) {
    if ((e = e[ot] || e[Tl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ca(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Ml(e) {
    var t = e[js];
    return t || (t = e[js] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function Fe(e) {
    e[Ma] = !0;
  }
  var Hs = new Set(),
    Bs = {};
  function nl(e, t) {
    Cl(e, t), Cl(e + 'Capture', t);
  }
  function Cl(e, t) {
    for (Bs[e] = t, e = 0; e < t.length; e++) Hs.add(t[e]);
  }
  var Dp = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Ls = {},
    qs = {};
  function zp(e) {
    return we.call(qs, e)
      ? !0
      : we.call(Ls, e)
        ? !1
        : Dp.test(e)
          ? (qs[e] = !0)
          : ((Ls[e] = !0), !1);
  }
  function ji(e, t, n) {
    if (zp(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + n);
      }
  }
  function Hi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + n);
    }
  }
  function nn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, '' + l);
    }
  }
  var Ro, Ys;
  function Nl(e) {
    if (Ro === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (Ro = (t && t[1]) || ''),
          (Ys =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Ro +
      e +
      Ys
    );
  }
  var Oo = !1;
  function Mo(e, t) {
    if (!e || Oo) return '';
    Oo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (U) {
                  var z = U;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  z = U;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                z = U;
              }
              (X = e()) && typeof X.catch == 'function' && X.catch(function () {});
            }
          } catch (U) {
            if (U && z && typeof U.stack == 'string') return [U.stack, z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var i = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = l.DetermineComponentFrameRoot(),
        f = u[0],
        h = u[1];
      if (f && h) {
        var S = f.split(`
`),
          C = h.split(`
`);
        for (i = l = 0; l < S.length && !S[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; i < C.length && !C[i].includes('DetermineComponentFrameRoot'); ) i++;
        if (l === S.length || i === C.length)
          for (l = S.length - 1, i = C.length - 1; 1 <= l && 0 <= i && S[l] !== C[i]; ) i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (S[l] !== C[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || S[l] !== C[i])) {
                  var Y =
                    `
` + S[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      Y.includes('<anonymous>') &&
                      (Y = Y.replace('<anonymous>', e.displayName)),
                    Y
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      (Oo = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : '') ? Nl(n) : '';
  }
  function Up(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Nl(e.type);
      case 16:
        return Nl('Lazy');
      case 13:
        return Nl('Suspense');
      case 19:
        return Nl('SuspenseList');
      case 0:
      case 15:
        return Mo(e.type, !1);
      case 11:
        return Mo(e.type.render, !1);
      case 1:
        return Mo(e.type, !0);
      case 31:
        return Nl('Activity');
      default:
        return '';
    }
  }
  function Gs(e) {
    try {
      var t = '';
      do (t += Up(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Nt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Vs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function jp(e) {
    var t = Vs(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var i = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (f) {
            (l = '' + f), u.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (f) {
            l = '' + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Bi(e) {
    e._valueTracker || (e._valueTracker = jp(e));
  }
  function ks(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = Vs(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Li(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Hp = /[\n"\\]/g;
  function _t(e) {
    return e.replace(Hp, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Co(e, t, n, l, i, u, f, h) {
    (e.name = ''),
      f != null && typeof f != 'function' && typeof f != 'symbol' && typeof f != 'boolean'
        ? (e.type = f)
        : e.removeAttribute('type'),
      t != null
        ? f === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Nt(t))
          : e.value !== '' + Nt(t) && (e.value = '' + Nt(t))
        : (f !== 'submit' && f !== 'reset') || e.removeAttribute('value'),
      t != null
        ? No(e, f, Nt(t))
        : n != null
          ? No(e, f, Nt(n))
          : l != null && e.removeAttribute('value'),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      h != null && typeof h != 'function' && typeof h != 'symbol' && typeof h != 'boolean'
        ? (e.name = '' + Nt(h))
        : e.removeAttribute('name');
  }
  function Xs(e, t, n, l, i, u, f, h) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) return;
      (n = n != null ? '' + Nt(n) : ''),
        (t = t != null ? '' + Nt(t) : n),
        h || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? i),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = h ? e.checked : !!l),
      (e.defaultChecked = !!l),
      f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean' &&
        (e.name = f);
  }
  function No(e, t, n) {
    (t === 'number' && Li(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function _l(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && l && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + Nt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), l && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qs(e, t, n) {
    if (t != null && ((t = '' + Nt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Nt(n) : '';
  }
  function Zs(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (de(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ''), (t = n);
    }
    (n = Nt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l);
  }
  function Dl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bp = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ks(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Bp.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Js(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(c(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var i in t) (l = t[i]), t.hasOwnProperty(i) && n[i] !== l && Ks(e, i, l);
    } else for (var u in t) t.hasOwnProperty(u) && Ks(e, u, t[u]);
  }
  function _o(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Lp = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    qp =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qi(e) {
    return qp.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Do = null;
  function zo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zl = null,
    Ul = null;
  function Ws(e) {
    var t = Ol(e);
    if (t && (e = t.stateNode)) {
      var n = e[mt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Co(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name="' + _t('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var i = l[mt] || null;
                if (!i) throw Error(c(90));
                Co(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < n.length; t++) (l = n[t]), l.form === e.form && ks(l);
          }
          break e;
        case 'textarea':
          Qs(e, n.value, n.defaultValue);
          break e;
        case 'select':
          (t = n.value), t != null && _l(e, !!n.multiple, t, !1);
      }
    }
  }
  var Uo = !1;
  function Ps(e, t, n) {
    if (Uo) return e(t, n);
    Uo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Uo = !1),
        (zl !== null || Ul !== null) &&
          (Au(), zl && ((t = zl), (e = Ul), (Ul = zl = null), Ws(t), e)))
      )
        for (t = 0; t < e.length; t++) Ws(e[t]);
    }
  }
  function Na(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[mt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(c(231, t, typeof n));
    return n;
  }
  var ln = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    jo = !1;
  if (ln)
    try {
      var _a = {};
      Object.defineProperty(_a, 'passive', {
        get: function () {
          jo = !0;
        },
      }),
        window.addEventListener('test', _a, _a),
        window.removeEventListener('test', _a, _a);
    } catch {
      jo = !1;
    }
  var wn = null,
    Ho = null,
    Yi = null;
  function $s() {
    if (Yi) return Yi;
    var e,
      t = Ho,
      n = t.length,
      l,
      i = 'value' in wn ? wn.value : wn.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var f = n - e;
    for (l = 1; l <= f && t[n - l] === i[u - l]; l++);
    return (Yi = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Gi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Vi() {
    return !0;
  }
  function Fs() {
    return !1;
  }
  function ht(e) {
    function t(n, l, i, u, f) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = f),
        (this.currentTarget = null);
      for (var h in e) e.hasOwnProperty(h) && ((n = e[h]), (this[h] = n ? n(u) : u[h]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Vi
          : Fs),
        (this.isPropagationStopped = Fs),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Vi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Vi));
        },
        persist: function () {},
        isPersistent: Vi,
      }),
      t
    );
  }
  var ll = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ki = ht(ll),
    Da = b({}, ll, { view: 0, detail: 0 }),
    Yp = ht(Da),
    Bo,
    Lo,
    za,
    Xi = b({}, Da, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== za &&
              (za && e.type === 'mousemove'
                ? ((Bo = e.screenX - za.screenX), (Lo = e.screenY - za.screenY))
                : (Lo = Bo = 0),
              (za = e)),
            Bo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Lo;
      },
    }),
    Is = ht(Xi),
    Gp = b({}, Xi, { dataTransfer: 0 }),
    Vp = ht(Gp),
    kp = b({}, Da, { relatedTarget: 0 }),
    qo = ht(kp),
    Xp = b({}, ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qp = ht(Xp),
    Zp = b({}, ll, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Kp = ht(Zp),
    Jp = b({}, ll, { data: 0 }),
    ef = ht(Jp),
    Wp = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Pp = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    $p = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Fp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $p[e]) ? !!t[e] : !1;
  }
  function Yo() {
    return Fp;
  }
  var Ip = b({}, Da, {
      key: function (e) {
        if (e.key) {
          var t = Wp[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Gi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Pp[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yo,
      charCode: function (e) {
        return e.type === 'keypress' ? Gi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Gi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    ey = ht(Ip),
    ty = b({}, Xi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    tf = ht(ty),
    ny = b({}, Da, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yo,
    }),
    ly = ht(ny),
    ay = b({}, ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    iy = ht(ay),
    uy = b({}, Xi, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    oy = ht(uy),
    cy = b({}, ll, { newState: 0, oldState: 0 }),
    ry = ht(cy),
    sy = [9, 13, 27, 32],
    Go = ln && 'CompositionEvent' in window,
    Ua = null;
  ln && 'documentMode' in document && (Ua = document.documentMode);
  var fy = ln && 'TextEvent' in window && !Ua,
    nf = ln && (!Go || (Ua && 8 < Ua && 11 >= Ua)),
    lf = ' ',
    af = !1;
  function uf(e, t) {
    switch (e) {
      case 'keyup':
        return sy.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function of(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var jl = !1;
  function dy(e, t) {
    switch (e) {
      case 'compositionend':
        return of(t);
      case 'keypress':
        return t.which !== 32 ? null : ((af = !0), lf);
      case 'textInput':
        return (e = t.data), e === lf && af ? null : e;
      default:
        return null;
    }
  }
  function my(e, t) {
    if (jl)
      return e === 'compositionend' || (!Go && uf(e, t))
        ? ((e = $s()), (Yi = Ho = wn = null), (jl = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return nf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var hy = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!hy[e.type] : t === 'textarea';
  }
  function rf(e, t, n, l) {
    zl ? (Ul ? Ul.push(l) : (Ul = [l])) : (zl = l),
      (t = Nu(t, 'onChange')),
      0 < t.length &&
        ((n = new ki('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t }));
  }
  var ja = null,
    Ha = null;
  function vy(e) {
    km(e, 0);
  }
  function Qi(e) {
    var t = Ca(e);
    if (ks(t)) return e;
  }
  function sf(e, t) {
    if (e === 'change') return t;
  }
  var ff = !1;
  if (ln) {
    var Vo;
    if (ln) {
      var ko = 'oninput' in document;
      if (!ko) {
        var df = document.createElement('div');
        df.setAttribute('oninput', 'return;'), (ko = typeof df.oninput == 'function');
      }
      Vo = ko;
    } else Vo = !1;
    ff = Vo && (!document.documentMode || 9 < document.documentMode);
  }
  function mf() {
    ja && (ja.detachEvent('onpropertychange', hf), (Ha = ja = null));
  }
  function hf(e) {
    if (e.propertyName === 'value' && Qi(Ha)) {
      var t = [];
      rf(t, Ha, e, zo(e)), Ps(vy, t);
    }
  }
  function gy(e, t, n) {
    e === 'focusin'
      ? (mf(), (ja = t), (Ha = n), ja.attachEvent('onpropertychange', hf))
      : e === 'focusout' && mf();
  }
  function py(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Qi(Ha);
  }
  function yy(e, t) {
    if (e === 'click') return Qi(t);
  }
  function by(e, t) {
    if (e === 'input' || e === 'change') return Qi(t);
  }
  function Sy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xt = typeof Object.is == 'function' ? Object.is : Sy;
  function Ba(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!we.call(t, i) || !xt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function vf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function gf(e, t) {
    var n = vf(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t)) return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = vf(n);
    }
  }
  function pf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? pf(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function yf(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Li(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Li(e.document);
    }
    return t;
  }
  function Xo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var xy = ln && 'documentMode' in document && 11 >= document.documentMode,
    Hl = null,
    Qo = null,
    La = null,
    Zo = !1;
  function bf(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zo ||
      Hl == null ||
      Hl !== Li(l) ||
      ((l = Hl),
      'selectionStart' in l && Xo(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (La && Ba(La, l)) ||
        ((La = l),
        (l = Nu(Qo, 'onSelect')),
        0 < l.length &&
          ((t = new ki('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Hl))));
  }
  function al(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Bl = {
      animationend: al('Animation', 'AnimationEnd'),
      animationiteration: al('Animation', 'AnimationIteration'),
      animationstart: al('Animation', 'AnimationStart'),
      transitionrun: al('Transition', 'TransitionRun'),
      transitionstart: al('Transition', 'TransitionStart'),
      transitioncancel: al('Transition', 'TransitionCancel'),
      transitionend: al('Transition', 'TransitionEnd'),
    },
    Ko = {},
    Sf = {};
  ln &&
    ((Sf = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Bl.animationend.animation,
      delete Bl.animationiteration.animation,
      delete Bl.animationstart.animation),
    'TransitionEvent' in window || delete Bl.transitionend.transition);
  function il(e) {
    if (Ko[e]) return Ko[e];
    if (!Bl[e]) return e;
    var t = Bl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Sf) return (Ko[e] = t[n]);
    return e;
  }
  var xf = il('animationend'),
    Ef = il('animationiteration'),
    wf = il('animationstart'),
    Ey = il('transitionrun'),
    wy = il('transitionstart'),
    Ay = il('transitioncancel'),
    Af = il('transitionend'),
    Tf = new Map(),
    Jo =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Jo.push('scrollEnd');
  function qt(e, t) {
    Tf.set(e, t), nl(t, [e]);
  }
  var Rf = new WeakMap();
  function Dt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Rf.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: Gs(t) }), Rf.set(e, t), t);
    }
    return { value: e, source: t, stack: Gs(t) };
  }
  var zt = [],
    Ll = 0,
    Wo = 0;
  function Zi() {
    for (var e = Ll, t = (Wo = Ll = 0); t < e; ) {
      var n = zt[t];
      zt[t++] = null;
      var l = zt[t];
      zt[t++] = null;
      var i = zt[t];
      zt[t++] = null;
      var u = zt[t];
      if (((zt[t++] = null), l !== null && i !== null)) {
        var f = l.pending;
        f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)), (l.pending = i);
      }
      u !== 0 && Of(n, i, u);
    }
  }
  function Ki(e, t, n, l) {
    (zt[Ll++] = e),
      (zt[Ll++] = t),
      (zt[Ll++] = n),
      (zt[Ll++] = l),
      (Wo |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Po(e, t, n, l) {
    return Ki(e, t, n, l), Ji(e);
  }
  function ql(e, t) {
    return Ki(e, null, null, t), Ji(e);
  }
  function Of(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      (u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - St(n)),
          (e = u.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Ji(e) {
    if (50 < ri) throw ((ri = 0), (nr = null), Error(c(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Yl = {};
  function Ty(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Et(e, t, n, l) {
    return new Ty(e, t, n, l);
  }
  function $o(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function an(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Et(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Mf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Wi(e, t, n, l, i, u) {
    var f = 0;
    if (((l = e), typeof e == 'function')) $o(e) && (f = 1);
    else if (typeof e == 'string')
      f = O0(e, n, F.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case ce:
          return (e = Et(31, n, t, i)), (e.elementType = ce), (e.lanes = u), e;
        case H:
          return ul(n.children, i, u, t);
        case E:
          (f = 8), (i |= 24);
          break;
        case _:
          return (e = Et(12, n, t, i | 2)), (e.elementType = _), (e.lanes = u), e;
        case k:
          return (e = Et(13, n, t, i)), (e.elementType = k), (e.lanes = u), e;
        case I:
          return (e = Et(19, n, t, i)), (e.elementType = I), (e.lanes = u), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case q:
              case B:
                f = 10;
                break e;
              case L:
                f = 9;
                break e;
              case Z:
                f = 11;
                break e;
              case W:
                f = 14;
                break e;
              case K:
                (f = 16), (l = null);
                break e;
            }
          (f = 29), (n = Error(c(130, e === null ? 'null' : typeof e, ''))), (l = null);
      }
    return (t = Et(f, n, t, i)), (t.elementType = e), (t.type = l), (t.lanes = u), t;
  }
  function ul(e, t, n, l) {
    return (e = Et(7, e, l, t)), (e.lanes = n), e;
  }
  function Fo(e, t, n) {
    return (e = Et(6, e, null, t)), (e.lanes = n), e;
  }
  function Io(e, t, n) {
    return (
      (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Gl = [],
    Vl = 0,
    Pi = null,
    $i = 0,
    Ut = [],
    jt = 0,
    ol = null,
    un = 1,
    on = '';
  function cl(e, t) {
    (Gl[Vl++] = $i), (Gl[Vl++] = Pi), (Pi = e), ($i = t);
  }
  function Cf(e, t, n) {
    (Ut[jt++] = un), (Ut[jt++] = on), (Ut[jt++] = ol), (ol = e);
    var l = un;
    e = on;
    var i = 32 - St(l) - 1;
    (l &= ~(1 << i)), (n += 1);
    var u = 32 - St(t) + i;
    if (30 < u) {
      var f = i - (i % 5);
      (u = (l & ((1 << f) - 1)).toString(32)),
        (l >>= f),
        (i -= f),
        (un = (1 << (32 - St(t) + i)) | (n << i) | l),
        (on = u + e);
    } else (un = (1 << u) | (n << i) | l), (on = e);
  }
  function ec(e) {
    e.return !== null && (cl(e, 1), Cf(e, 1, 0));
  }
  function tc(e) {
    for (; e === Pi; ) (Pi = Gl[--Vl]), (Gl[Vl] = null), ($i = Gl[--Vl]), (Gl[Vl] = null);
    for (; e === ol; )
      (ol = Ut[--jt]),
        (Ut[jt] = null),
        (on = Ut[--jt]),
        (Ut[jt] = null),
        (un = Ut[--jt]),
        (Ut[jt] = null);
  }
  var ft = null,
    Ve = null,
    Ce = !1,
    rl = null,
    Zt = !1,
    nc = Error(c(519));
  function sl(e) {
    var t = Error(c(418, ''));
    throw (Ga(Dt(t, e)), nc);
  }
  function Nf(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[ot] = e), (t[mt] = l), n)) {
      case 'dialog':
        Te('cancel', t), Te('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Te('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < fi.length; n++) Te(fi[n], t);
        break;
      case 'source':
        Te('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        Te('error', t), Te('load', t);
        break;
      case 'details':
        Te('toggle', t);
        break;
      case 'input':
        Te('invalid', t),
          Xs(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
          Bi(t);
        break;
      case 'select':
        Te('invalid', t);
        break;
      case 'textarea':
        Te('invalid', t), Zs(t, l.value, l.defaultValue, l.children), Bi(t);
    }
    (n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      Km(t.textContent, n)
        ? (l.popover != null && (Te('beforetoggle', t), Te('toggle', t)),
          l.onScroll != null && Te('scroll', t),
          l.onScrollEnd != null && Te('scrollend', t),
          l.onClick != null && (t.onclick = _u),
          (t = !0))
        : (t = !1),
      t || sl(e);
  }
  function _f(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
        case 5:
        case 13:
          Zt = !1;
          return;
        case 27:
        case 3:
          Zt = !0;
          return;
        default:
          ft = ft.return;
      }
  }
  function qa(e) {
    if (e !== ft) return !1;
    if (!Ce) return _f(e), (Ce = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || yr(e.type, e.memoizedProps))),
        (n = !n)),
      n && Ve && sl(e),
      _f(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === '/$')) {
              if (t === 0) {
                Ve = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else
      t === 27
        ? ((t = Ve), qn(e.type) ? ((e = Er), (Er = null), (Ve = e)) : (Ve = t))
        : (Ve = ft ? Gt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ya() {
    (Ve = ft = null), (Ce = !1);
  }
  function Df() {
    var e = rl;
    return e !== null && (pt === null ? (pt = e) : pt.push.apply(pt, e), (rl = null)), e;
  }
  function Ga(e) {
    rl === null ? (rl = [e]) : rl.push(e);
  }
  var lc = V(null),
    fl = null,
    cn = null;
  function An(e, t, n) {
    J(lc, t._currentValue), (t._currentValue = n);
  }
  function rn(e) {
    (e._currentValue = lc.current), P(lc);
  }
  function ac(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ic(e, t, n, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var f = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var h = u;
          u = i;
          for (var S = 0; S < t.length; S++)
            if (h.context === t[S]) {
              (u.lanes |= n),
                (h = u.alternate),
                h !== null && (h.lanes |= n),
                ac(u.return, n, e),
                l || (f = null);
              break e;
            }
          u = h.next;
        }
      } else if (i.tag === 18) {
        if (((f = i.return), f === null)) throw Error(c(341));
        (f.lanes |= n), (u = f.alternate), u !== null && (u.lanes |= n), ac(f, n, e), (f = null);
      } else f = i.child;
      if (f !== null) f.return = i;
      else
        for (f = i; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((i = f.sibling), i !== null)) {
            (i.return = f.return), (f = i);
            break;
          }
          f = f.return;
        }
      i = f;
    }
  }
  function Va(e, t, n, l) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(c(387));
        if (((f = f.memoizedProps), f !== null)) {
          var h = i.type;
          xt(i.pendingProps.value, f.value) || (e !== null ? e.push(h) : (e = [h]));
        }
      } else if (i === $.current) {
        if (((f = i.alternate), f === null)) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(pi) : (e = [pi]));
      }
      i = i.return;
    }
    e !== null && ic(t, e, n, l), (t.flags |= 262144);
  }
  function Fi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function dl(e) {
    (fl = e), (cn = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function ct(e) {
    return zf(fl, e);
  }
  function Ii(e, t) {
    return fl === null && dl(e), zf(e, t);
  }
  function zf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), cn === null)) {
      if (e === null) throw Error(c(308));
      (cn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else cn = cn.next = t;
    return n;
  }
  var Ry =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    Oy = a.unstable_scheduleCallback,
    My = a.unstable_NormalPriority,
    We = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function uc() {
    return { controller: new Ry(), data: new Map(), refCount: 0 };
  }
  function ka(e) {
    e.refCount--,
      e.refCount === 0 &&
        Oy(My, function () {
          e.controller.abort();
        });
  }
  var Xa = null,
    oc = 0,
    kl = 0,
    Xl = null;
  function Cy(e, t) {
    if (Xa === null) {
      var n = (Xa = []);
      (oc = 0),
        (kl = rr()),
        (Xl = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return oc++, t.then(Uf, Uf), t;
  }
  function Uf() {
    if (--oc === 0 && Xa !== null) {
      Xl !== null && (Xl.status = 'fulfilled');
      var e = Xa;
      (Xa = null), (kl = 0), (Xl = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ny(e, t) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          (l.status = 'fulfilled'), (l.value = t);
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (l.status = 'rejected', l.reason = i, i = 0; i < n.length; i++) (0, n[i])(void 0);
        }
      ),
      l
    );
  }
  var jf = O.S;
  O.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && Cy(e, t),
      jf !== null && jf(e, t);
  };
  var ml = V(null);
  function cc() {
    var e = ml.current;
    return e !== null ? e : Le.pooledCache;
  }
  function eu(e, t) {
    t === null ? J(ml, ml.current) : J(ml, t.pool);
  }
  function Hf() {
    var e = cc();
    return e === null ? null : { parent: We._currentValue, pool: e };
  }
  var Qa = Error(c(460)),
    Bf = Error(c(474)),
    tu = Error(c(542)),
    rc = { then: function () {} };
  function Lf(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function nu() {}
  function qf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(nu, nu), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Gf(e), e);
      default:
        if (typeof t.status == 'string') t.then(nu, nu);
        else {
          if (((e = Le), e !== null && 100 < e.shellSuspendCounter)) throw Error(c(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var i = t;
                  (i.status = 'fulfilled'), (i.value = l);
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var i = t;
                  (i.status = 'rejected'), (i.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Gf(e), e);
        }
        throw ((Za = t), Qa);
    }
  }
  var Za = null;
  function Yf() {
    if (Za === null) throw Error(c(459));
    var e = Za;
    return (Za = null), e;
  }
  function Gf(e) {
    if (e === Qa || e === tu) throw Error(c(483));
  }
  var Tn = !1;
  function sc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function fc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Rn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function On(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (_e & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = Ji(e)),
        Of(e, null, n),
        t
      );
    }
    return Ki(e, l, t, n), Ji(e);
  }
  function Ka(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), zs(e, n);
    }
  }
  function dc(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var i = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          u === null ? (i = u = f) : (u = u.next = f), (n = n.next);
        } while (n !== null);
        u === null ? (i = u = t) : (u = u.next = t);
      } else i = u = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var mc = !1;
  function Ja() {
    if (mc) {
      var e = Xl;
      if (e !== null) throw e;
    }
  }
  function Wa(e, t, n, l) {
    mc = !1;
    var i = e.updateQueue;
    Tn = !1;
    var u = i.firstBaseUpdate,
      f = i.lastBaseUpdate,
      h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var S = h,
        C = S.next;
      (S.next = null), f === null ? (u = C) : (f.next = C), (f = S);
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (h = Y.lastBaseUpdate),
        h !== f && (h === null ? (Y.firstBaseUpdate = C) : (h.next = C), (Y.lastBaseUpdate = S)));
    }
    if (u !== null) {
      var X = i.baseState;
      (f = 0), (Y = C = S = null), (h = u);
      do {
        var z = h.lane & -536870913,
          U = z !== h.lane;
        if (U ? (Oe & z) === z : (l & z) === z) {
          z !== 0 && z === kl && (mc = !0),
            Y !== null &&
              (Y = Y.next =
                { lane: 0, tag: h.tag, payload: h.payload, callback: null, next: null });
          e: {
            var se = e,
              oe = h;
            z = t;
            var je = n;
            switch (oe.tag) {
              case 1:
                if (((se = oe.payload), typeof se == 'function')) {
                  X = se.call(je, X, z);
                  break e;
                }
                X = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = oe.payload),
                  (z = typeof se == 'function' ? se.call(je, X, z) : se),
                  z == null)
                )
                  break e;
                X = b({}, X, z);
                break e;
              case 2:
                Tn = !0;
            }
          }
          (z = h.callback),
            z !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = i.callbacks),
              U === null ? (i.callbacks = [z]) : U.push(z));
        } else
          (U = { lane: z, tag: h.tag, payload: h.payload, callback: h.callback, next: null }),
            Y === null ? ((C = Y = U), (S = X)) : (Y = Y.next = U),
            (f |= z);
        if (((h = h.next), h === null)) {
          if (((h = i.shared.pending), h === null)) break;
          (U = h), (h = U.next), (U.next = null), (i.lastBaseUpdate = U), (i.shared.pending = null);
        }
      } while (!0);
      Y === null && (S = X),
        (i.baseState = S),
        (i.firstBaseUpdate = C),
        (i.lastBaseUpdate = Y),
        u === null && (i.shared.lanes = 0),
        (jn |= f),
        (e.lanes = f),
        (e.memoizedState = X);
    }
  }
  function Vf(e, t) {
    if (typeof e != 'function') throw Error(c(191, e));
    e.call(t);
  }
  function kf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Vf(n[e], t);
  }
  var Ql = V(null),
    lu = V(0);
  function Xf(e, t) {
    (e = gn), J(lu, e), J(Ql, t), (gn = e | t.baseLanes);
  }
  function hc() {
    J(lu, gn), J(Ql, Ql.current);
  }
  function vc() {
    (gn = lu.current), P(Ql), P(lu);
  }
  var Mn = 0,
    ye = null,
    ze = null,
    Ke = null,
    au = !1,
    Zl = !1,
    hl = !1,
    iu = 0,
    Pa = 0,
    Kl = null,
    _y = 0;
  function Xe() {
    throw Error(c(321));
  }
  function gc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!xt(e[n], t[n])) return !1;
    return !0;
  }
  function pc(e, t, n, l, i, u) {
    return (
      (Mn = u),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? Od : Md),
      (hl = !1),
      (u = n(l, i)),
      (hl = !1),
      Zl && (u = Zf(t, n, l, i)),
      Qf(e),
      u
    );
  }
  function Qf(e) {
    O.H = fu;
    var t = ze !== null && ze.next !== null;
    if (((Mn = 0), (Ke = ze = ye = null), (au = !1), (Pa = 0), (Kl = null), t)) throw Error(c(300));
    e === null || Ie || ((e = e.dependencies), e !== null && Fi(e) && (Ie = !0));
  }
  function Zf(e, t, n, l) {
    ye = e;
    var i = 0;
    do {
      if ((Zl && (Kl = null), (Pa = 0), (Zl = !1), 25 <= i)) throw Error(c(301));
      if (((i += 1), (Ke = ze = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (O.H = Ly), (u = t(n, l));
    } while (Zl);
    return u;
  }
  function Dy() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? $a(t) : t),
      (e = e.useState()[0]),
      (ze !== null ? ze.memoizedState : null) !== e && (ye.flags |= 1024),
      t
    );
  }
  function yc() {
    var e = iu !== 0;
    return (iu = 0), e;
  }
  function bc(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Sc(e) {
    if (au) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      au = !1;
    }
    (Mn = 0), (Ke = ze = ye = null), (Zl = !1), (Pa = iu = 0), (Kl = null);
  }
  function vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ke === null ? (ye.memoizedState = Ke = e) : (Ke = Ke.next = e), Ke;
  }
  function Je() {
    if (ze === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Ke === null ? ye.memoizedState : Ke.next;
    if (t !== null) (Ke = t), (ze = e);
    else {
      if (e === null) throw ye.alternate === null ? Error(c(467)) : Error(c(310));
      (ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        Ke === null ? (ye.memoizedState = Ke = e) : (Ke = Ke.next = e);
    }
    return Ke;
  }
  function xc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $a(e) {
    var t = Pa;
    return (
      (Pa += 1),
      Kl === null && (Kl = []),
      (e = qf(Kl, e, t)),
      (t = ye),
      (Ke === null ? t.memoizedState : Ke.next) === null &&
        ((t = t.alternate), (O.H = t === null || t.memoizedState === null ? Od : Md)),
      e
    );
  }
  function uu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return $a(e);
      if (e.$$typeof === B) return ct(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ec(e) {
    var t = null,
      n = ye.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = ye.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = xc()), (ye.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = ge;
    return t.index++, n;
  }
  function sn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ou(e) {
    var t = Je();
    return wc(t, ze, e);
  }
  function wc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var i = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (i !== null) {
        var f = i.next;
        (i.next = u.next), (u.next = f);
      }
      (t.baseQueue = i = u), (l.pending = null);
    }
    if (((u = e.baseState), i === null)) e.memoizedState = u;
    else {
      t = i.next;
      var h = (f = null),
        S = null,
        C = t,
        Y = !1;
      do {
        var X = C.lane & -536870913;
        if (X !== C.lane ? (Oe & X) === X : (Mn & X) === X) {
          var z = C.revertLane;
          if (z === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              X === kl && (Y = !0);
          else if ((Mn & z) === z) {
            (C = C.next), z === kl && (Y = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              S === null ? ((h = S = X), (f = u)) : (S = S.next = X),
              (ye.lanes |= z),
              (jn |= z);
          (X = C.action), hl && n(u, X), (u = C.hasEagerState ? C.eagerState : n(u, X));
        } else
          (z = {
            lane: X,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            S === null ? ((h = S = z), (f = u)) : (S = S.next = z),
            (ye.lanes |= X),
            (jn |= X);
        C = C.next;
      } while (C !== null && C !== t);
      if (
        (S === null ? (f = u) : (S.next = h),
        !xt(u, e.memoizedState) && ((Ie = !0), Y && ((n = Xl), n !== null)))
      )
        throw n;
      (e.memoizedState = u), (e.baseState = f), (e.baseQueue = S), (l.lastRenderedState = u);
    }
    return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Ac(e) {
    var t = Je(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      i = n.pending,
      u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = (i = i.next);
      do (u = e(u, f.action)), (f = f.next);
      while (f !== i);
      xt(u, t.memoizedState) || (Ie = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, l];
  }
  function Kf(e, t, n) {
    var l = ye,
      i = Je(),
      u = Ce;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var f = !xt((ze || i).memoizedState, n);
    f && ((i.memoizedState = n), (Ie = !0)), (i = i.queue);
    var h = Pf.bind(null, l, i, e);
    if (
      (Fa(2048, 8, h, [e]), i.getSnapshot !== t || f || (Ke !== null && Ke.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), Jl(9, cu(), Wf.bind(null, l, i, n, t), null), Le === null))
        throw Error(c(349));
      u || (Mn & 124) !== 0 || Jf(l, t, n);
    }
    return n;
  }
  function Jf(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = xc()), (ye.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Wf(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), $f(t) && Ff(e);
  }
  function Pf(e, t, n) {
    return n(function () {
      $f(t) && Ff(e);
    });
  }
  function $f(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !xt(e, n);
    } catch {
      return !0;
    }
  }
  function Ff(e) {
    var t = ql(e, 2);
    t !== null && Ot(t, e, 2);
  }
  function Tc(e) {
    var t = vt();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), hl)) {
        xn(!0);
        try {
          n();
        } finally {
          xn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function If(e, t, n, l) {
    return (e.baseState = n), wc(e, ze, typeof l == 'function' ? l : sn);
  }
  function zy(e, t, n, l, i) {
    if (su(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          u.listeners.push(f);
        },
      };
      O.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), ed(t, u))
          : ((u.next = n.next), (t.pending = n.next = u));
    }
  }
  function ed(e, t) {
    var n = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = O.T,
        f = {};
      O.T = f;
      try {
        var h = n(i, l),
          S = O.S;
        S !== null && S(f, h), td(e, t, h);
      } catch (C) {
        Rc(e, t, C);
      } finally {
        O.T = u;
      }
    } else
      try {
        (u = n(i, l)), td(e, t, u);
      } catch (C) {
        Rc(e, t, C);
      }
  }
  function td(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            nd(e, t, l);
          },
          function (l) {
            return Rc(e, t, l);
          }
        )
      : nd(e, t, n);
  }
  function nd(e, t, n) {
    (t.status = 'fulfilled'),
      (t.value = n),
      ld(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), ed(e, n)));
  }
  function Rc(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = 'rejected'), (t.reason = n), ld(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function ld(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ad(e, t) {
    return t;
  }
  function id(e, t) {
    if (Ce) {
      var n = Le.formState;
      if (n !== null) {
        e: {
          var l = ye;
          if (Ce) {
            if (Ve) {
              t: {
                for (var i = Ve, u = Zt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = Gt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                (u = i.data), (i = u === 'F!' || u === 'F' ? i : null);
              }
              if (i) {
                (Ve = Gt(i.nextSibling)), (l = i.data === 'F!');
                break e;
              }
            }
            sl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = vt()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ad,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Ad.bind(null, ye, l)),
      (l.dispatch = n),
      (l = Tc(!1)),
      (u = _c.bind(null, ye, !1, l.queue)),
      (l = vt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (n = zy.bind(null, ye, i, u, n)),
      (i.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function ud(e) {
    var t = Je();
    return od(t, ze, e);
  }
  function od(e, t, n) {
    if (
      ((t = wc(e, t, ad)[0]),
      (e = ou(sn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = $a(t);
      } catch (f) {
        throw f === Qa ? tu : f;
      }
    else l = t;
    t = Je();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState && ((ye.flags |= 2048), Jl(9, cu(), Uy.bind(null, i, n), null)),
      [l, u, e]
    );
  }
  function Uy(e, t) {
    e.action = t;
  }
  function cd(e) {
    var t = Je(),
      n = ze;
    if (n !== null) return od(t, n, e);
    Je(), (t = t.memoizedState), (n = Je());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function Jl(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = xc()), (ye.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function cu() {
    return { destroy: void 0, resource: void 0 };
  }
  function rd() {
    return Je().memoizedState;
  }
  function ru(e, t, n, l) {
    var i = vt();
    (l = l === void 0 ? null : l), (ye.flags |= e), (i.memoizedState = Jl(1 | t, cu(), n, l));
  }
  function Fa(e, t, n, l) {
    var i = Je();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    ze !== null && l !== null && gc(l, ze.memoizedState.deps)
      ? (i.memoizedState = Jl(t, u, n, l))
      : ((ye.flags |= e), (i.memoizedState = Jl(1 | t, u, n, l)));
  }
  function sd(e, t) {
    ru(8390656, 8, e, t);
  }
  function fd(e, t) {
    Fa(2048, 8, e, t);
  }
  function dd(e, t) {
    return Fa(4, 2, e, t);
  }
  function md(e, t) {
    return Fa(4, 4, e, t);
  }
  function hd(e, t) {
    if (typeof t == 'function') {
      e = e();
      var n = t(e);
      return function () {
        typeof n == 'function' ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function vd(e, t, n) {
    (n = n != null ? n.concat([e]) : null), Fa(4, 4, hd.bind(null, t, e), n);
  }
  function Oc() {}
  function gd(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && gc(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function pd(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && gc(t, l[1])) return l[0];
    if (((l = e()), hl)) {
      xn(!0);
      try {
        e();
      } finally {
        xn(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function Mc(e, t, n) {
    return n === void 0 || (Mn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Sm()), (ye.lanes |= e), (jn |= e), n);
  }
  function yd(e, t, n, l) {
    return xt(n, t)
      ? n
      : Ql.current !== null
        ? ((e = Mc(e, n, l)), xt(e, t) || (Ie = !0), e)
        : (Mn & 42) === 0
          ? ((Ie = !0), (e.memoizedState = n))
          : ((e = Sm()), (ye.lanes |= e), (jn |= e), t);
  }
  function bd(e, t, n, l, i) {
    var u = Q.p;
    Q.p = u !== 0 && 8 > u ? u : 8;
    var f = O.T,
      h = {};
    (O.T = h), _c(e, !1, t, n);
    try {
      var S = i(),
        C = O.S;
      if (
        (C !== null && C(h, S), S !== null && typeof S == 'object' && typeof S.then == 'function')
      ) {
        var Y = Ny(S, l);
        Ia(e, t, Y, Rt(e));
      } else Ia(e, t, l, Rt(e));
    } catch (X) {
      Ia(e, t, { then: function () {}, status: 'rejected', reason: X }, Rt());
    } finally {
      (Q.p = u), (O.T = f);
    }
  }
  function jy() {}
  function Cc(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Sd(e).queue;
    bd(
      e,
      i,
      t,
      j,
      n === null
        ? jy
        : function () {
            return xd(e), n(l);
          }
    );
  }
  function Sd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: j,
      baseState: j,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sn,
        lastRenderedState: j,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: sn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function xd(e) {
    var t = Sd(e).next.queue;
    Ia(e, t, {}, Rt());
  }
  function Nc() {
    return ct(pi);
  }
  function Ed() {
    return Je().memoizedState;
  }
  function wd() {
    return Je().memoizedState;
  }
  function Hy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Rt();
          e = Rn(n);
          var l = On(t, e, n);
          l !== null && (Ot(l, t, n), Ka(l, t, n)), (t = { cache: uc() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function By(e, t, n) {
    var l = Rt();
    (n = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
      su(e) ? Td(t, n) : ((n = Po(e, t, n, l)), n !== null && (Ot(n, e, l), Rd(n, t, l)));
  }
  function Ad(e, t, n) {
    var l = Rt();
    Ia(e, t, n, l);
  }
  function Ia(e, t, n, l) {
    var i = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (su(e)) Td(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var f = t.lastRenderedState,
            h = u(f, n);
          if (((i.hasEagerState = !0), (i.eagerState = h), xt(h, f)))
            return Ki(e, t, i, 0), Le === null && Zi(), !1;
        } catch {
        } finally {
        }
      if (((n = Po(e, t, i, l)), n !== null)) return Ot(n, e, l), Rd(n, t, l), !0;
    }
    return !1;
  }
  function _c(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: rr(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      su(e))
    ) {
      if (t) throw Error(c(479));
    } else (t = Po(e, n, l, 2)), t !== null && Ot(t, e, 2);
  }
  function su(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function Td(e, t) {
    Zl = au = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function Rd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), zs(e, n);
    }
  }
  var fu = {
      readContext: ct,
      use: uu,
      useCallback: Xe,
      useContext: Xe,
      useEffect: Xe,
      useImperativeHandle: Xe,
      useLayoutEffect: Xe,
      useInsertionEffect: Xe,
      useMemo: Xe,
      useReducer: Xe,
      useRef: Xe,
      useState: Xe,
      useDebugValue: Xe,
      useDeferredValue: Xe,
      useTransition: Xe,
      useSyncExternalStore: Xe,
      useId: Xe,
      useHostTransitionStatus: Xe,
      useFormState: Xe,
      useActionState: Xe,
      useOptimistic: Xe,
      useMemoCache: Xe,
      useCacheRefresh: Xe,
    },
    Od = {
      readContext: ct,
      use: uu,
      useCallback: function (e, t) {
        return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ct,
      useEffect: sd,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null), ru(4194308, 4, hd.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return ru(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ru(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = vt();
        t = t === void 0 ? null : t;
        var l = e();
        if (hl) {
          xn(!0);
          try {
            e();
          } finally {
            xn(!1);
          }
        }
        return (n.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, n) {
        var l = vt();
        if (n !== void 0) {
          var i = n(t);
          if (hl) {
            xn(!0);
            try {
              n(t);
            } finally {
              xn(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = By.bind(null, ye, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Tc(e);
        var t = e.queue,
          n = Ad.bind(null, ye, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: Oc,
      useDeferredValue: function (e, t) {
        var n = vt();
        return Mc(n, e, t);
      },
      useTransition: function () {
        var e = Tc(!1);
        return (e = bd.bind(null, ye, e.queue, !0, !1)), (vt().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, t, n) {
        var l = ye,
          i = vt();
        if (Ce) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), Le === null)) throw Error(c(349));
          (Oe & 124) !== 0 || Jf(l, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          sd(Pf.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          Jl(9, cu(), Wf.bind(null, l, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = Le.identifierPrefix;
        if (Ce) {
          var n = on,
            l = un;
          (n = (l & ~(1 << (32 - St(l) - 1))).toString(32) + n),
            (t = '«' + t + 'R' + n),
            (n = iu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '»');
        } else (n = _y++), (t = '«' + t + 'r' + n.toString(32) + '»');
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Nc,
      useFormState: id,
      useActionState: id,
      useOptimistic: function (e) {
        var t = vt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (t.queue = n), (t = _c.bind(null, ye, !0, n)), (n.dispatch = t), [e, t];
      },
      useMemoCache: Ec,
      useCacheRefresh: function () {
        return (vt().memoizedState = Hy.bind(null, ye));
      },
    },
    Md = {
      readContext: ct,
      use: uu,
      useCallback: gd,
      useContext: ct,
      useEffect: fd,
      useImperativeHandle: vd,
      useInsertionEffect: dd,
      useLayoutEffect: md,
      useMemo: pd,
      useReducer: ou,
      useRef: rd,
      useState: function () {
        return ou(sn);
      },
      useDebugValue: Oc,
      useDeferredValue: function (e, t) {
        var n = Je();
        return yd(n, ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ou(sn)[0],
          t = Je().memoizedState;
        return [typeof e == 'boolean' ? e : $a(e), t];
      },
      useSyncExternalStore: Kf,
      useId: Ed,
      useHostTransitionStatus: Nc,
      useFormState: ud,
      useActionState: ud,
      useOptimistic: function (e, t) {
        var n = Je();
        return If(n, ze, e, t);
      },
      useMemoCache: Ec,
      useCacheRefresh: wd,
    },
    Ly = {
      readContext: ct,
      use: uu,
      useCallback: gd,
      useContext: ct,
      useEffect: fd,
      useImperativeHandle: vd,
      useInsertionEffect: dd,
      useLayoutEffect: md,
      useMemo: pd,
      useReducer: Ac,
      useRef: rd,
      useState: function () {
        return Ac(sn);
      },
      useDebugValue: Oc,
      useDeferredValue: function (e, t) {
        var n = Je();
        return ze === null ? Mc(n, e, t) : yd(n, ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ac(sn)[0],
          t = Je().memoizedState;
        return [typeof e == 'boolean' ? e : $a(e), t];
      },
      useSyncExternalStore: Kf,
      useId: Ed,
      useHostTransitionStatus: Nc,
      useFormState: cd,
      useActionState: cd,
      useOptimistic: function (e, t) {
        var n = Je();
        return ze !== null ? If(n, ze, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Ec,
      useCacheRefresh: wd,
    },
    Wl = null,
    ei = 0;
  function du(e) {
    var t = ei;
    return (ei += 1), Wl === null && (Wl = []), qf(Wl, e, t);
  }
  function ti(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function mu(e, t) {
    throw t.$$typeof === w
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function Cd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Nd(e) {
    function t(T, A) {
      if (e) {
        var M = T.deletions;
        M === null ? ((T.deletions = [A]), (T.flags |= 16)) : M.push(A);
      }
    }
    function n(T, A) {
      if (!e) return null;
      for (; A !== null; ) t(T, A), (A = A.sibling);
      return null;
    }
    function l(T) {
      for (var A = new Map(); T !== null; )
        T.key !== null ? A.set(T.key, T) : A.set(T.index, T), (T = T.sibling);
      return A;
    }
    function i(T, A) {
      return (T = an(T, A)), (T.index = 0), (T.sibling = null), T;
    }
    function u(T, A, M) {
      return (
        (T.index = M),
        e
          ? ((M = T.alternate),
            M !== null
              ? ((M = M.index), M < A ? ((T.flags |= 67108866), A) : M)
              : ((T.flags |= 67108866), A))
          : ((T.flags |= 1048576), A)
      );
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, A, M, G) {
      return A === null || A.tag !== 6
        ? ((A = Fo(M, T.mode, G)), (A.return = T), A)
        : ((A = i(A, M)), (A.return = T), A);
    }
    function S(T, A, M, G) {
      var ee = M.type;
      return ee === H
        ? Y(T, A, M.props.children, G, M.key)
        : A !== null &&
            (A.elementType === ee ||
              (typeof ee == 'object' && ee !== null && ee.$$typeof === K && Cd(ee) === A.type))
          ? ((A = i(A, M.props)), ti(A, M), (A.return = T), A)
          : ((A = Wi(M.type, M.key, M.props, null, T.mode, G)), ti(A, M), (A.return = T), A);
    }
    function C(T, A, M, G) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== M.containerInfo ||
        A.stateNode.implementation !== M.implementation
        ? ((A = Io(M, T.mode, G)), (A.return = T), A)
        : ((A = i(A, M.children || [])), (A.return = T), A);
    }
    function Y(T, A, M, G, ee) {
      return A === null || A.tag !== 7
        ? ((A = ul(M, T.mode, G, ee)), (A.return = T), A)
        : ((A = i(A, M)), (A.return = T), A);
    }
    function X(T, A, M) {
      if ((typeof A == 'string' && A !== '') || typeof A == 'number' || typeof A == 'bigint')
        return (A = Fo('' + A, T.mode, M)), (A.return = T), A;
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case R:
            return (M = Wi(A.type, A.key, A.props, null, T.mode, M)), ti(M, A), (M.return = T), M;
          case D:
            return (A = Io(A, T.mode, M)), (A.return = T), A;
          case K:
            var G = A._init;
            return (A = G(A._payload)), X(T, A, M);
        }
        if (de(A) || fe(A)) return (A = ul(A, T.mode, M, null)), (A.return = T), A;
        if (typeof A.then == 'function') return X(T, du(A), M);
        if (A.$$typeof === B) return X(T, Ii(T, A), M);
        mu(T, A);
      }
      return null;
    }
    function z(T, A, M, G) {
      var ee = A !== null ? A.key : null;
      if ((typeof M == 'string' && M !== '') || typeof M == 'number' || typeof M == 'bigint')
        return ee !== null ? null : h(T, A, '' + M, G);
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case R:
            return M.key === ee ? S(T, A, M, G) : null;
          case D:
            return M.key === ee ? C(T, A, M, G) : null;
          case K:
            return (ee = M._init), (M = ee(M._payload)), z(T, A, M, G);
        }
        if (de(M) || fe(M)) return ee !== null ? null : Y(T, A, M, G, null);
        if (typeof M.then == 'function') return z(T, A, du(M), G);
        if (M.$$typeof === B) return z(T, A, Ii(T, M), G);
        mu(T, M);
      }
      return null;
    }
    function U(T, A, M, G, ee) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return (T = T.get(M) || null), h(A, T, '' + G, ee);
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case R:
            return (T = T.get(G.key === null ? M : G.key) || null), S(A, T, G, ee);
          case D:
            return (T = T.get(G.key === null ? M : G.key) || null), C(A, T, G, ee);
          case K:
            var xe = G._init;
            return (G = xe(G._payload)), U(T, A, M, G, ee);
        }
        if (de(G) || fe(G)) return (T = T.get(M) || null), Y(A, T, G, ee, null);
        if (typeof G.then == 'function') return U(T, A, M, du(G), ee);
        if (G.$$typeof === B) return U(T, A, M, Ii(A, G), ee);
        mu(A, G);
      }
      return null;
    }
    function se(T, A, M, G) {
      for (
        var ee = null, xe = null, le = A, re = (A = 0), tt = null;
        le !== null && re < M.length;
        re++
      ) {
        le.index > re ? ((tt = le), (le = null)) : (tt = le.sibling);
        var Me = z(T, le, M[re], G);
        if (Me === null) {
          le === null && (le = tt);
          break;
        }
        e && le && Me.alternate === null && t(T, le),
          (A = u(Me, A, re)),
          xe === null ? (ee = Me) : (xe.sibling = Me),
          (xe = Me),
          (le = tt);
      }
      if (re === M.length) return n(T, le), Ce && cl(T, re), ee;
      if (le === null) {
        for (; re < M.length; re++)
          (le = X(T, M[re], G)),
            le !== null &&
              ((A = u(le, A, re)), xe === null ? (ee = le) : (xe.sibling = le), (xe = le));
        return Ce && cl(T, re), ee;
      }
      for (le = l(le); re < M.length; re++)
        (tt = U(le, T, re, M[re], G)),
          tt !== null &&
            (e && tt.alternate !== null && le.delete(tt.key === null ? re : tt.key),
            (A = u(tt, A, re)),
            xe === null ? (ee = tt) : (xe.sibling = tt),
            (xe = tt));
      return (
        e &&
          le.forEach(function (Xn) {
            return t(T, Xn);
          }),
        Ce && cl(T, re),
        ee
      );
    }
    function oe(T, A, M, G) {
      if (M == null) throw Error(c(151));
      for (
        var ee = null, xe = null, le = A, re = (A = 0), tt = null, Me = M.next();
        le !== null && !Me.done;
        re++, Me = M.next()
      ) {
        le.index > re ? ((tt = le), (le = null)) : (tt = le.sibling);
        var Xn = z(T, le, Me.value, G);
        if (Xn === null) {
          le === null && (le = tt);
          break;
        }
        e && le && Xn.alternate === null && t(T, le),
          (A = u(Xn, A, re)),
          xe === null ? (ee = Xn) : (xe.sibling = Xn),
          (xe = Xn),
          (le = tt);
      }
      if (Me.done) return n(T, le), Ce && cl(T, re), ee;
      if (le === null) {
        for (; !Me.done; re++, Me = M.next())
          (Me = X(T, Me.value, G)),
            Me !== null &&
              ((A = u(Me, A, re)), xe === null ? (ee = Me) : (xe.sibling = Me), (xe = Me));
        return Ce && cl(T, re), ee;
      }
      for (le = l(le); !Me.done; re++, Me = M.next())
        (Me = U(le, T, re, Me.value, G)),
          Me !== null &&
            (e && Me.alternate !== null && le.delete(Me.key === null ? re : Me.key),
            (A = u(Me, A, re)),
            xe === null ? (ee = Me) : (xe.sibling = Me),
            (xe = Me));
      return (
        e &&
          le.forEach(function (q0) {
            return t(T, q0);
          }),
        Ce && cl(T, re),
        ee
      );
    }
    function je(T, A, M, G) {
      if (
        (typeof M == 'object' &&
          M !== null &&
          M.type === H &&
          M.key === null &&
          (M = M.props.children),
        typeof M == 'object' && M !== null)
      ) {
        switch (M.$$typeof) {
          case R:
            e: {
              for (var ee = M.key; A !== null; ) {
                if (A.key === ee) {
                  if (((ee = M.type), ee === H)) {
                    if (A.tag === 7) {
                      n(T, A.sibling), (G = i(A, M.props.children)), (G.return = T), (T = G);
                      break e;
                    }
                  } else if (
                    A.elementType === ee ||
                    (typeof ee == 'object' && ee !== null && ee.$$typeof === K && Cd(ee) === A.type)
                  ) {
                    n(T, A.sibling), (G = i(A, M.props)), ti(G, M), (G.return = T), (T = G);
                    break e;
                  }
                  n(T, A);
                  break;
                } else t(T, A);
                A = A.sibling;
              }
              M.type === H
                ? ((G = ul(M.props.children, T.mode, G, M.key)), (G.return = T), (T = G))
                : ((G = Wi(M.type, M.key, M.props, null, T.mode, G)),
                  ti(G, M),
                  (G.return = T),
                  (T = G));
            }
            return f(T);
          case D:
            e: {
              for (ee = M.key; A !== null; ) {
                if (A.key === ee)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === M.containerInfo &&
                    A.stateNode.implementation === M.implementation
                  ) {
                    n(T, A.sibling), (G = i(A, M.children || [])), (G.return = T), (T = G);
                    break e;
                  } else {
                    n(T, A);
                    break;
                  }
                else t(T, A);
                A = A.sibling;
              }
              (G = Io(M, T.mode, G)), (G.return = T), (T = G);
            }
            return f(T);
          case K:
            return (ee = M._init), (M = ee(M._payload)), je(T, A, M, G);
        }
        if (de(M)) return se(T, A, M, G);
        if (fe(M)) {
          if (((ee = fe(M)), typeof ee != 'function')) throw Error(c(150));
          return (M = ee.call(M)), oe(T, A, M, G);
        }
        if (typeof M.then == 'function') return je(T, A, du(M), G);
        if (M.$$typeof === B) return je(T, A, Ii(T, M), G);
        mu(T, M);
      }
      return (typeof M == 'string' && M !== '') || typeof M == 'number' || typeof M == 'bigint'
        ? ((M = '' + M),
          A !== null && A.tag === 6
            ? (n(T, A.sibling), (G = i(A, M)), (G.return = T), (T = G))
            : (n(T, A), (G = Fo(M, T.mode, G)), (G.return = T), (T = G)),
          f(T))
        : n(T, A);
    }
    return function (T, A, M, G) {
      try {
        ei = 0;
        var ee = je(T, A, M, G);
        return (Wl = null), ee;
      } catch (le) {
        if (le === Qa || le === tu) throw le;
        var xe = Et(29, le, null, T.mode);
        return (xe.lanes = G), (xe.return = T), xe;
      } finally {
      }
    };
  }
  var Pl = Nd(!0),
    _d = Nd(!1),
    Ht = V(null),
    Kt = null;
  function Cn(e) {
    var t = e.alternate;
    J(Pe, Pe.current & 1),
      J(Ht, e),
      Kt === null && (t === null || Ql.current !== null || t.memoizedState !== null) && (Kt = e);
  }
  function Dd(e) {
    if (e.tag === 22) {
      if ((J(Pe, Pe.current), J(Ht, e), Kt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Kt = e);
      }
    } else Nn();
  }
  function Nn() {
    J(Pe, Pe.current), J(Ht, Ht.current);
  }
  function fn(e) {
    P(Ht), Kt === e && (Kt = null), P(Pe);
  }
  var Pe = V(0);
  function hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || xr(n))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Dc(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var zc = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Rt(),
        i = Rn(l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = On(e, i, l)),
        t !== null && (Ot(t, e, l), Ka(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Rt(),
        i = Rn(l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = On(e, i, l)),
        t !== null && (Ot(t, e, l), Ka(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Rt(),
        l = Rn(n);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = On(e, l, n)),
        t !== null && (Ot(t, e, n), Ka(t, e, n));
    },
  };
  function zd(e, t, n, l, i, u, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, u, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ba(n, l) || !Ba(i, u)
          : !0
    );
  }
  function Ud(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && zc.enqueueReplaceState(t, t.state, null);
  }
  function vl(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = b({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  var vu =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function jd(e) {
    vu(e);
  }
  function Hd(e) {
    console.error(e);
  }
  function Bd(e) {
    vu(e);
  }
  function gu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Ld(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Uc(e, t, n) {
    return (
      (n = Rn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        gu(e, t);
      }),
      n
    );
  }
  function qd(e) {
    return (e = Rn(e)), (e.tag = 3), e;
  }
  function Yd(e, t, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == 'function') {
      var u = l.value;
      (e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          Ld(t, n, l);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == 'function' &&
      (e.callback = function () {
        Ld(t, n, l),
          typeof i != 'function' && (Hn === null ? (Hn = new Set([this])) : Hn.add(this));
        var h = l.stack;
        this.componentDidCatch(l.value, { componentStack: h !== null ? h : '' });
      });
  }
  function qy(e, t, n, l, i) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = n.alternate), t !== null && Va(t, n, i, !0), (n = Ht.current), n !== null)) {
        switch (n.tag) {
          case 13:
            return (
              Kt === null ? ar() : n.alternate === null && ke === 0 && (ke = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              l === rc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  ur(e, l, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === rc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  ur(e, l, i)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return ur(e, l, i), ar(), !1;
    }
    if (Ce)
      return (
        (t = Ht.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== nc && ((e = Error(c(422), { cause: l })), Ga(Dt(e, n))))
          : (l !== nc && ((t = Error(c(423), { cause: l })), Ga(Dt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = Dt(l, n)),
            (i = Uc(e.stateNode, l, i)),
            dc(e, i),
            ke !== 4 && (ke = 2)),
        !1
      );
    var u = Error(c(520), { cause: l });
    if (((u = Dt(u, n)), ci === null ? (ci = [u]) : ci.push(u), ke !== 4 && (ke = 2), t === null))
      return !0;
    (l = Dt(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Uc(n.stateNode, l, e)),
            dc(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (Hn === null || !Hn.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = qd(i)),
              Yd(i, e, n, l),
              dc(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Gd = Error(c(461)),
    Ie = !1;
  function lt(e, t, n, l) {
    t.child = e === null ? _d(t, null, n, l) : Pl(t, e.child, n, l);
  }
  function Vd(e, t, n, l, i) {
    n = n.render;
    var u = t.ref;
    if ('ref' in l) {
      var f = {};
      for (var h in l) h !== 'ref' && (f[h] = l[h]);
    } else f = l;
    return (
      dl(t),
      (l = pc(e, t, n, f, u, i)),
      (h = yc()),
      e !== null && !Ie
        ? (bc(e, t, i), dn(e, t, i))
        : (Ce && h && ec(t), (t.flags |= 1), lt(e, t, l, i), t.child)
    );
  }
  function kd(e, t, n, l, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !$o(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Xd(e, t, u, l, i))
        : ((e = Wi(n.type, null, l, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Vc(e, i))) {
      var f = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Ba), n(f, l) && e.ref === t.ref))
        return dn(e, t, i);
    }
    return (t.flags |= 1), (e = an(u, l)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Xd(e, t, n, l, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ba(u, l) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = l = u), Vc(e, i))) (e.flags & 131072) !== 0 && (Ie = !0);
        else return (t.lanes = e.lanes), dn(e, t, i);
    }
    return jc(e, t, n, l, i);
  }
  function Qd(e, t, n) {
    var l = t.pendingProps,
      i = l.children,
      u = e !== null ? e.memoizedState : null;
    if (l.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((l = u !== null ? u.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, u = 0; i !== null; )
            (u = u | i.lanes | i.childLanes), (i = i.sibling);
          t.childLanes = u & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return Zd(e, t, l, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && eu(t, u !== null ? u.cachePool : null),
          u !== null ? Xf(t, u) : hc(),
          Dd(t);
      else
        return (t.lanes = t.childLanes = 536870912), Zd(e, t, u !== null ? u.baseLanes | n : n, n);
    } else
      u !== null
        ? (eu(t, u.cachePool), Xf(t, u), Nn(), (t.memoizedState = null))
        : (e !== null && eu(t, null), hc(), Nn());
    return lt(e, t, i, n), t.child;
  }
  function Zd(e, t, n, l) {
    var i = cc();
    return (
      (i = i === null ? null : { parent: We._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: n, cachePool: i }),
      e !== null && eu(t, null),
      hc(),
      Dd(t),
      e !== null && Va(e, t, l, !0),
      null
    );
  }
  function pu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function jc(e, t, n, l, i) {
    return (
      dl(t),
      (n = pc(e, t, n, l, void 0, i)),
      (l = yc()),
      e !== null && !Ie
        ? (bc(e, t, i), dn(e, t, i))
        : (Ce && l && ec(t), (t.flags |= 1), lt(e, t, n, i), t.child)
    );
  }
  function Kd(e, t, n, l, i, u) {
    return (
      dl(t),
      (t.updateQueue = null),
      (n = Zf(t, l, n, i)),
      Qf(e),
      (l = yc()),
      e !== null && !Ie
        ? (bc(e, t, u), dn(e, t, u))
        : (Ce && l && ec(t), (t.flags |= 1), lt(e, t, n, u), t.child)
    );
  }
  function Jd(e, t, n, l, i) {
    if ((dl(t), t.stateNode === null)) {
      var u = Yl,
        f = n.contextType;
      typeof f == 'object' && f !== null && (u = ct(f)),
        (u = new n(l, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = zc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        sc(t),
        (f = n.contextType),
        (u.context = typeof f == 'object' && f !== null ? ct(f) : Yl),
        (u.state = t.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == 'function' && (Dc(t, n, f, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((f = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          f !== u.state && zc.enqueueReplaceState(u, u.state, null),
          Wa(t, l, u, i),
          Ja(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      u = t.stateNode;
      var h = t.memoizedProps,
        S = vl(n, h);
      u.props = S;
      var C = u.context,
        Y = n.contextType;
      (f = Yl), typeof Y == 'object' && Y !== null && (f = ct(Y));
      var X = n.getDerivedStateFromProps;
      (Y = typeof X == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (h = t.pendingProps !== h),
        Y ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((h || C !== f) && Ud(t, u, l, f)),
        (Tn = !1);
      var z = t.memoizedState;
      (u.state = z),
        Wa(t, l, u, i),
        Ja(),
        (C = t.memoizedState),
        h || z !== C || Tn
          ? (typeof X == 'function' && (Dc(t, n, X, l), (C = t.memoizedState)),
            (S = Tn || zd(t, n, S, l, z, C, f))
              ? (Y ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = C)),
            (u.props = l),
            (u.state = C),
            (u.context = f),
            (l = S))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1));
    } else {
      (u = t.stateNode),
        fc(e, t),
        (f = t.memoizedProps),
        (Y = vl(n, f)),
        (u.props = Y),
        (X = t.pendingProps),
        (z = u.context),
        (C = n.contextType),
        (S = Yl),
        typeof C == 'object' && C !== null && (S = ct(C)),
        (h = n.getDerivedStateFromProps),
        (C = typeof h == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((f !== X || z !== S) && Ud(t, u, l, S)),
        (Tn = !1),
        (z = t.memoizedState),
        (u.state = z),
        Wa(t, l, u, i),
        Ja();
      var U = t.memoizedState;
      f !== X || z !== U || Tn || (e !== null && e.dependencies !== null && Fi(e.dependencies))
        ? (typeof h == 'function' && (Dc(t, n, h, l), (U = t.memoizedState)),
          (Y =
            Tn ||
            zd(t, n, Y, l, z, U, S) ||
            (e !== null && e.dependencies !== null && Fi(e.dependencies)))
            ? (C ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, U, S),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(l, U, S)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (f === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (f === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = U)),
          (u.props = l),
          (u.state = U),
          (u.context = S),
          (l = Y))
        : (typeof u.componentDidUpdate != 'function' ||
            (f === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (f === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      pu(e, t),
      (l = (t.flags & 128) !== 0),
      u || l
        ? ((u = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Pl(t, e.child, null, i)), (t.child = Pl(t, null, n, i)))
            : lt(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = dn(e, t, i)),
      e
    );
  }
  function Wd(e, t, n, l) {
    return Ya(), (t.flags |= 256), lt(e, t, n, l), t.child;
  }
  var Hc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Bc(e) {
    return { baseLanes: e, cachePool: Hf() };
  }
  function Lc(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Bt), e;
  }
  function Pd(e, t, n) {
    var l = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      f;
    if (
      ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0),
      f && ((i = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ce) {
        if ((i ? Cn(t) : Nn(), Ce)) {
          var h = Ve,
            S;
          if ((S = h)) {
            e: {
              for (S = h, h = Zt; S.nodeType !== 8; ) {
                if (!h) {
                  h = null;
                  break e;
                }
                if (((S = Gt(S.nextSibling)), S === null)) {
                  h = null;
                  break e;
                }
              }
              h = S;
            }
            h !== null
              ? ((t.memoizedState = {
                  dehydrated: h,
                  treeContext: ol !== null ? { id: un, overflow: on } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = Et(18, null, null, 0)),
                (S.stateNode = h),
                (S.return = t),
                (t.child = S),
                (ft = t),
                (Ve = null),
                (S = !0))
              : (S = !1);
          }
          S || sl(t);
        }
        if (((h = t.memoizedState), h !== null && ((h = h.dehydrated), h !== null)))
          return xr(h) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        fn(t);
      }
      return (
        (h = l.children),
        (l = l.fallback),
        i
          ? (Nn(),
            (i = t.mode),
            (h = yu({ mode: 'hidden', children: h }, i)),
            (l = ul(l, i, n, null)),
            (h.return = t),
            (l.return = t),
            (h.sibling = l),
            (t.child = h),
            (i = t.child),
            (i.memoizedState = Bc(n)),
            (i.childLanes = Lc(e, f, n)),
            (t.memoizedState = Hc),
            l)
          : (Cn(t), qc(t, h))
      );
    }
    if (((S = e.memoizedState), S !== null && ((h = S.dehydrated), h !== null))) {
      if (u)
        t.flags & 256
          ? (Cn(t), (t.flags &= -257), (t = Yc(e, t, n)))
          : t.memoizedState !== null
            ? (Nn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Nn(),
              (i = l.fallback),
              (h = t.mode),
              (l = yu({ mode: 'visible', children: l.children }, h)),
              (i = ul(i, h, n, null)),
              (i.flags |= 2),
              (l.return = t),
              (i.return = t),
              (l.sibling = i),
              (t.child = l),
              Pl(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = Bc(n)),
              (l.childLanes = Lc(e, f, n)),
              (t.memoizedState = Hc),
              (t = i));
      else if ((Cn(t), xr(h))) {
        if (((f = h.nextSibling && h.nextSibling.dataset), f)) var C = f.dgst;
        (f = C),
          (l = Error(c(419))),
          (l.stack = ''),
          (l.digest = f),
          Ga({ value: l, source: null, stack: null }),
          (t = Yc(e, t, n));
      } else if ((Ie || Va(e, t, n, !1), (f = (n & e.childLanes) !== 0), Ie || f)) {
        if (
          ((f = Le),
          f !== null &&
            ((l = n & -n),
            (l = (l & 42) !== 0 ? 1 : Eo(l)),
            (l = (l & (f.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== S.retryLane))
        )
          throw ((S.retryLane = l), ql(e, l), Ot(f, e, l), Gd);
        h.data === '$?' || ar(), (t = Yc(e, t, n));
      } else
        h.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (Ve = Gt(h.nextSibling)),
            (ft = t),
            (Ce = !0),
            (rl = null),
            (Zt = !1),
            e !== null &&
              ((Ut[jt++] = un),
              (Ut[jt++] = on),
              (Ut[jt++] = ol),
              (un = e.id),
              (on = e.overflow),
              (ol = t)),
            (t = qc(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (Nn(),
        (i = l.fallback),
        (h = t.mode),
        (S = e.child),
        (C = S.sibling),
        (l = an(S, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 65011712),
        C !== null ? (i = an(C, i)) : ((i = ul(i, h, n, null)), (i.flags |= 2)),
        (i.return = t),
        (l.return = t),
        (l.sibling = i),
        (t.child = l),
        (l = i),
        (i = t.child),
        (h = e.child.memoizedState),
        h === null
          ? (h = Bc(n))
          : ((S = h.cachePool),
            S !== null
              ? ((C = We._currentValue), (S = S.parent !== C ? { parent: C, pool: C } : S))
              : (S = Hf()),
            (h = { baseLanes: h.baseLanes | n, cachePool: S })),
        (i.memoizedState = h),
        (i.childLanes = Lc(e, f, n)),
        (t.memoizedState = Hc),
        l)
      : (Cn(t),
        (n = e.child),
        (e = n.sibling),
        (n = an(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((f = t.deletions), f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function qc(e, t) {
    return (t = yu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function yu(e, t) {
    return (
      (e = Et(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Yc(e, t, n) {
    return (
      Pl(t, e.child, null, n),
      (e = qc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function $d(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ac(e.return, t, n);
  }
  function Gc(e, t, n, l, i) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: i,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = l),
        (u.tail = n),
        (u.tailMode = i));
  }
  function Fd(e, t, n) {
    var l = t.pendingProps,
      i = l.revealOrder,
      u = l.tail;
    if ((lt(e, t, l.children, n), (l = Pe.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $d(e, n, t);
          else if (e.tag === 19) $d(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((J(Pe, l), i)) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && hu(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Gc(t, !1, i, n, u);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && hu(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Gc(t, !0, n, null, u);
        break;
      case 'together':
        Gc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function dn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (jn |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Va(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = an(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Vc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Fi(e)));
  }
  function Yy(e, t, n) {
    switch (t.tag) {
      case 3:
        ue(t, t.stateNode.containerInfo), An(t, We, e.memoizedState.cache), Ya();
        break;
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        ue(t, t.stateNode.containerInfo);
        break;
      case 10:
        An(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Cn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Pd(e, t, n)
              : (Cn(t), (e = dn(e, t, n)), e !== null ? e.sibling : null);
        Cn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Va(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return Fd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          J(Pe, Pe.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Qd(e, t, n);
      case 24:
        An(t, We, e.memoizedState.cache);
    }
    return dn(e, t, n);
  }
  function Id(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ie = !0;
      else {
        if (!Vc(e, n) && (t.flags & 128) === 0) return (Ie = !1), Yy(e, t, n);
        Ie = (e.flags & 131072) !== 0;
      }
    else (Ie = !1), Ce && (t.flags & 1048576) !== 0 && Cf(t, $i, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            i = l._init;
          if (((l = i(l._payload)), (t.type = l), typeof l == 'function'))
            $o(l)
              ? ((e = vl(l, e)), (t.tag = 1), (t = Jd(null, t, l, e, n)))
              : ((t.tag = 0), (t = jc(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((i = l.$$typeof), i === Z)) {
                (t.tag = 11), (t = Vd(null, t, l, e, n));
                break e;
              } else if (i === W) {
                (t.tag = 14), (t = kd(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = he(l) || l), Error(c(306, t, '')));
          }
        }
        return t;
      case 0:
        return jc(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (i = vl(l, t.pendingProps)), Jd(e, t, l, i, n);
      case 3:
        e: {
          if ((ue(t, t.stateNode.containerInfo), e === null)) throw Error(c(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          (i = u.element), fc(e, t), Wa(t, l, null, n);
          var f = t.memoizedState;
          if (
            ((l = f.cache),
            An(t, We, l),
            l !== u.cache && ic(t, [We], n, !0),
            Ja(),
            (l = f.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Wd(e, t, l, n);
              break e;
            } else if (l !== i) {
              (i = Dt(Error(c(424)), t)), Ga(i), (t = Wd(e, t, l, n));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Ve = Gt(e.firstChild),
                  ft = t,
                  Ce = !0,
                  rl = null,
                  Zt = !0,
                  n = _d(t, null, l, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((Ya(), l === i)) {
              t = dn(e, t, n);
              break e;
            }
            lt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          pu(e, t),
          e === null
            ? (n = lh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ce ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Du(ie.current).createElement(n)),
                (l[ot] = t),
                (l[mt] = e),
                it(l, n, e),
                Fe(l),
                (t.stateNode = l))
            : (t.memoizedState = lh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Re(t),
          e === null &&
            Ce &&
            ((l = t.stateNode = eh(t.type, t.pendingProps, ie.current)),
            (ft = t),
            (Zt = !0),
            (i = Ve),
            qn(t.type) ? ((Er = i), (Ve = Gt(l.firstChild))) : (Ve = i)),
          lt(e, t, t.pendingProps.children, n),
          pu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ce &&
            ((i = l = Ve) &&
              ((l = h0(l, t.type, t.pendingProps, Zt)),
              l !== null
                ? ((t.stateNode = l), (ft = t), (Ve = Gt(l.firstChild)), (Zt = !1), (i = !0))
                : (i = !1)),
            i || sl(t)),
          Re(t),
          (i = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (l = u.children),
          yr(i, u) ? (l = null) : f !== null && yr(i, f) && (t.flags |= 32),
          t.memoizedState !== null && ((i = pc(e, t, Dy, null, null, n)), (pi._currentValue = i)),
          pu(e, t),
          lt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ce &&
            ((e = n = Ve) &&
              ((n = v0(n, t.pendingProps, Zt)),
              n !== null ? ((t.stateNode = n), (ft = t), (Ve = null), (e = !0)) : (e = !1)),
            e || sl(t)),
          null
        );
      case 13:
        return Pd(e, t, n);
      case 4:
        return (
          ue(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Pl(t, null, l, n)) : lt(e, t, l, n),
          t.child
        );
      case 11:
        return Vd(e, t, t.type, t.pendingProps, n);
      case 7:
        return lt(e, t, t.pendingProps, n), t.child;
      case 8:
        return lt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return lt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (l = t.pendingProps), An(t, t.type, l.value), lt(e, t, l.children, n), t.child;
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          dl(t),
          (i = ct(i)),
          (l = l(i)),
          (t.flags |= 1),
          lt(e, t, l, n),
          t.child
        );
      case 14:
        return kd(e, t, t.type, t.pendingProps, n);
      case 15:
        return Xd(e, t, t.type, t.pendingProps, n);
      case 19:
        return Fd(e, t, n);
      case 31:
        return (
          (l = t.pendingProps),
          (n = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((n = yu(l, n)), (n.ref = t.ref), (t.child = n), (n.return = t), (t = n))
            : ((n = an(e.child, l)), (n.ref = t.ref), (t.child = n), (n.return = t), (t = n)),
          t
        );
      case 22:
        return Qd(e, t, n);
      case 24:
        return (
          dl(t),
          (l = ct(We)),
          e === null
            ? ((i = cc()),
              i === null &&
                ((i = Le),
                (u = uc()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: l, cache: i }),
              sc(t),
              An(t, We, i))
            : ((e.lanes & n) !== 0 && (fc(e, t), Wa(t, null, null, n), Ja()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                  An(t, We, l))
                : ((l = u.cache), An(t, We, l), l !== i.cache && ic(t, [We], n, !0))),
          lt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function mn(e) {
    e.flags |= 4;
  }
  function em(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !ch(t))) {
      if (
        ((t = Ht.current),
        t !== null &&
          ((Oe & 4194048) === Oe
            ? Kt !== null
            : ((Oe & 62914560) !== Oe && (Oe & 536870912) === 0) || t !== Kt))
      )
        throw ((Za = rc), Bf);
      e.flags |= 8192;
    }
  }
  function bu(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? _s() : 536870912), (e.lanes |= t), (ea |= t));
  }
  function ni(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var l = null; n !== null; ) n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function Gy(e, t, n) {
    var l = t.pendingProps;
    switch ((tc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return Ge(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          rn(We),
          Ne(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (qa(t)
              ? mn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Df())),
          Ge(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (mn(t), n !== null ? (Ge(t), em(t, n)) : (Ge(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (mn(t), Ge(t), em(t, n))
                : (Ge(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && mn(t), Ge(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Ee(t), (n = ie.current);
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return Ge(t), null;
          }
          (e = F.current), qa(t) ? Nf(t) : ((e = eh(i, l, n)), (t.stateNode = e), mn(t));
        }
        return Ge(t), null;
      case 5:
        if ((Ee(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return Ge(t), null;
          }
          if (((e = F.current), qa(t))) Nf(t);
          else {
            switch (((i = Du(ie.current)), e)) {
              case 1:
                e = i.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                e = i.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    e = i.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    e = i.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                    break;
                  case 'script':
                    (e = i.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof l.is == 'string'
                        ? i.createElement('select', { is: l.is })
                        : i.createElement('select')),
                      l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == 'string'
                        ? i.createElement(n, { is: l.is })
                        : i.createElement(n);
                }
            }
            (e[ot] = t), (e[mt] = l);
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = e;
            e: switch ((it(e, n, l), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && mn(t);
          }
        }
        return Ge(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && mn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(c(166));
          if (((e = ie.current), qa(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (i = ft), i !== null))
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            (e[ot] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Km(e.nodeValue, n)
              )),
              e || sl(t);
          } else (e = Du(e).createTextNode(l)), (e[ot] = t), (t.stateNode = e);
        }
        return Ge(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = qa(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(c(317));
              i[ot] = t;
            } else Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Ge(t), (i = !1);
          } else
            (i = Df()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
              (i = !0);
          if (!i) return t.flags & 256 ? (fn(t), t) : (fn(t), null);
        }
        if ((fn(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (((n = l !== null), (e = e !== null && e.memoizedState !== null), n)) {
          (l = t.child),
            (i = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (i = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
            u !== i && (l.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), bu(t, t.updateQueue), Ge(t), null;
      case 4:
        return Ne(), e === null && mr(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return rn(t.type), Ge(t), null;
      case 19:
        if ((P(Pe), (i = t.memoizedState), i === null)) return Ge(t), null;
        if (((l = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (l) ni(i, !1);
          else {
            if (ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = hu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ni(i, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      bu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Mf(n, e), (n = n.sibling);
                  return J(Pe, (Pe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ut() > Eu &&
              ((t.flags |= 128), (l = !0), ni(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = hu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                bu(t, e),
                ni(i, !0),
                i.tail === null && i.tailMode === 'hidden' && !u.alternate && !Ce)
              )
                return Ge(t), null;
            } else
              2 * ut() - i.renderingStartTime > Eu &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), ni(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = i.last), e !== null ? (e.sibling = u) : (t.child = u), (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ut()),
            (t.sibling = null),
            (e = Pe.current),
            J(Pe, l ? (e & 1) | 2 : e & 1),
            t)
          : (Ge(t), null);
      case 22:
      case 23:
        return (
          fn(t),
          vc(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ge(t),
          (n = t.updateQueue),
          n !== null && bu(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && P(ml),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          rn(We),
          Ge(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Vy(e, t) {
    switch ((tc(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          rn(We),
          Ne(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 13:
        if ((fn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340));
          Ya();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return P(Pe), null;
      case 4:
        return Ne(), null;
      case 10:
        return rn(t.type), null;
      case 22:
      case 23:
        return (
          fn(t),
          vc(),
          e !== null && P(ml),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return rn(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tm(e, t) {
    switch ((tc(t), t.tag)) {
      case 3:
        rn(We), Ne();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        Ne();
        break;
      case 13:
        fn(t);
        break;
      case 19:
        P(Pe);
        break;
      case 10:
        rn(t.type);
        break;
      case 22:
      case 23:
        fn(t), vc(), e !== null && P(ml);
        break;
      case 24:
        rn(We);
    }
  }
  function li(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create,
              f = n.inst;
            (l = u()), (f.destroy = l);
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (h) {
      He(t, t.return, h);
    }
  }
  function _n(e, t, n) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var f = l.inst,
              h = f.destroy;
            if (h !== void 0) {
              (f.destroy = void 0), (i = t);
              var S = n,
                C = h;
              try {
                C();
              } catch (Y) {
                He(i, S, Y);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (Y) {
      He(t, t.return, Y);
    }
  }
  function nm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        kf(t, n);
      } catch (l) {
        He(e, e.return, l);
      }
    }
  }
  function lm(e, t, n) {
    (n.props = vl(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      He(e, t, l);
    }
  }
  function ai(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == 'function' ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (i) {
      He(e, t, i);
    }
  }
  function Jt(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (i) {
          He(e, t, i);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (i) {
          He(e, t, i);
        }
      else n.current = null;
  }
  function am(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && l.focus();
          break e;
        case 'img':
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function kc(e, t, n) {
    try {
      var l = e.stateNode;
      r0(l, e.type, n, t), (l[mt] = t);
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function im(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && qn(e.type)) || e.tag === 4
    );
  }
  function Xc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || im(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && qn(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t = n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = _u));
    else if (
      l !== 4 &&
      (l === 27 && qn(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Qc(e, t, n), e = e.sibling; e !== null; ) Qc(e, t, n), (e = e.sibling);
  }
  function Su(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && qn(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Su(e, t, n), e = e.sibling; e !== null; ) Su(e, t, n), (e = e.sibling);
  }
  function um(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
      it(t, l, n), (t[ot] = e), (t[mt] = n);
    } catch (u) {
      He(e, e.return, u);
    }
  }
  var hn = !1,
    Qe = !1,
    Zc = !1,
    om = typeof WeakSet == 'function' ? WeakSet : Set,
    et = null;
  function ky(e, t) {
    if (((e = e.containerInfo), (gr = Lu), (e = yf(e)), Xo(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              h = -1,
              S = -1,
              C = 0,
              Y = 0,
              X = e,
              z = null;
            t: for (;;) {
              for (
                var U;
                X !== n || (i !== 0 && X.nodeType !== 3) || (h = f + i),
                  X !== u || (l !== 0 && X.nodeType !== 3) || (S = f + l),
                  X.nodeType === 3 && (f += X.nodeValue.length),
                  (U = X.firstChild) !== null;

              )
                (z = X), (X = U);
              for (;;) {
                if (X === e) break t;
                if (
                  (z === n && ++C === i && (h = f),
                  z === u && ++Y === l && (S = f),
                  (U = X.nextSibling) !== null)
                )
                  break;
                (X = z), (z = X.parentNode);
              }
              X = U;
            }
            n = h === -1 || S === -1 ? null : { start: h, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (pr = { focusedElem: e, selectionRange: n }, Lu = !1, et = t; et !== null; )
      if (((t = et), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
        (e.return = t), (et = e);
      else
        for (; et !== null; ) {
          switch (((t = et), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (n = t),
                  (i = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = n.stateNode);
                try {
                  var se = vl(n.type, i, n.elementType === n.type);
                  (e = l.getSnapshotBeforeUpdate(se, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (oe) {
                  He(n, n.return, oe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) Sr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Sr(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (et = e);
            break;
          }
          et = t.return;
        }
  }
  function cm(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dn(e, n), l & 4 && li(5, n);
        break;
      case 1:
        if ((Dn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              He(n, n.return, f);
            }
          else {
            var i = vl(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              He(n, n.return, f);
            }
          }
        l & 64 && nm(n), l & 512 && ai(n, n.return);
        break;
      case 3:
        if ((Dn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            kf(e, t);
          } catch (f) {
            He(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && um(n);
      case 26:
      case 5:
        Dn(e, n), t === null && l & 4 && am(n), l & 512 && ai(n, n.return);
        break;
      case 12:
        Dn(e, n);
        break;
      case 13:
        Dn(e, n),
          l & 4 && fm(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = Fy.bind(null, n)), g0(e, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || hn), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Qe), (i = hn);
          var u = Qe;
          (hn = l),
            (Qe = t) && !u ? zn(e, n, (n.subtreeFlags & 8772) !== 0) : Dn(e, n),
            (hn = i),
            (Qe = u);
        }
        break;
      case 30:
        break;
      default:
        Dn(e, n);
    }
  }
  function rm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), rm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && To(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ye = null,
    gt = !1;
  function vn(e, t, n) {
    for (n = n.child; n !== null; ) sm(e, t, n), (n = n.sibling);
  }
  function sm(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == 'function')
      try {
        bt.onCommitFiberUnmount(Ta, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Qe || Jt(n, t),
          vn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Qe || Jt(n, t);
        var l = Ye,
          i = gt;
        qn(n.type) && ((Ye = n.stateNode), (gt = !1)),
          vn(e, t, n),
          mi(n.stateNode),
          (Ye = l),
          (gt = i);
        break;
      case 5:
        Qe || Jt(n, t);
      case 6:
        if (((l = Ye), (i = gt), (Ye = null), vn(e, t, n), (Ye = l), (gt = i), Ye !== null))
          if (gt)
            try {
              (Ye.nodeType === 9
                ? Ye.body
                : Ye.nodeName === 'HTML'
                  ? Ye.ownerDocument.body
                  : Ye
              ).removeChild(n.stateNode);
            } catch (u) {
              He(n, t, u);
            }
          else
            try {
              Ye.removeChild(n.stateNode);
            } catch (u) {
              He(n, t, u);
            }
        break;
      case 18:
        Ye !== null &&
          (gt
            ? ((e = Ye),
              Fm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              xi(e))
            : Fm(Ye, n.stateNode));
        break;
      case 4:
        (l = Ye),
          (i = gt),
          (Ye = n.stateNode.containerInfo),
          (gt = !0),
          vn(e, t, n),
          (Ye = l),
          (gt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qe || _n(2, n, t), Qe || _n(4, n, t), vn(e, t, n);
        break;
      case 1:
        Qe ||
          (Jt(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && lm(n, t, l)),
          vn(e, t, n);
        break;
      case 21:
        vn(e, t, n);
        break;
      case 22:
        (Qe = (l = Qe) || n.memoizedState !== null), vn(e, t, n), (Qe = l);
        break;
      default:
        vn(e, t, n);
    }
  }
  function fm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        xi(e);
      } catch (n) {
        He(t, t.return, n);
      }
  }
  function Xy(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new om()), t;
      case 22:
        return (
          (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new om()), t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Kc(e, t) {
    var n = Xy(e);
    t.forEach(function (l) {
      var i = Iy.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l],
          u = e,
          f = t,
          h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (qn(h.type)) {
                (Ye = h.stateNode), (gt = !1);
                break e;
              }
              break;
            case 5:
              (Ye = h.stateNode), (gt = !1);
              break e;
            case 3:
            case 4:
              (Ye = h.stateNode.containerInfo), (gt = !0);
              break e;
          }
          h = h.return;
        }
        if (Ye === null) throw Error(c(160));
        sm(u, f, i),
          (Ye = null),
          (gt = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) dm(t, e), (t = t.sibling);
  }
  var Yt = null;
  function dm(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wt(t, e), At(e), l & 4 && (_n(3, e, e.return), li(3, e), _n(5, e, e.return));
        break;
      case 1:
        wt(t, e),
          At(e),
          l & 512 && (Qe || n === null || Jt(n, n.return)),
          l & 64 &&
            hn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var i = Yt;
        if ((wt(t, e), At(e), l & 512 && (Qe || n === null || Jt(n, n.return)), l & 4)) {
          var u = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i);
                  t: switch (l) {
                    case 'title':
                      (u = i.getElementsByTagName('title')[0]),
                        (!u ||
                          u[Ma] ||
                          u[ot] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = i.createElement(l)),
                          i.head.insertBefore(u, i.querySelector('head > title'))),
                        it(u, l, n),
                        (u[ot] = e),
                        Fe(u),
                        (l = u);
                      break e;
                    case 'link':
                      var f = uh('link', 'href', i).get(l + (n.href || ''));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (
                            ((u = f[h]),
                            u.getAttribute('href') ===
                              (n.href == null || n.href === '' ? null : n.href) &&
                              u.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              u.getAttribute('title') === (n.title == null ? null : n.title) &&
                              u.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      (u = i.createElement(l)), it(u, l, n), i.head.appendChild(u);
                      break;
                    case 'meta':
                      if ((f = uh('meta', 'content', i).get(l + (n.content || '')))) {
                        for (h = 0; h < f.length; h++)
                          if (
                            ((u = f[h]),
                            u.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              u.getAttribute('name') === (n.name == null ? null : n.name) &&
                              u.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      (u = i.createElement(l)), it(u, l, n), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  (u[ot] = e), Fe(u), (l = u);
                }
                e.stateNode = l;
              } else oh(i, e.type, e.stateNode);
            else e.stateNode = ih(i, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null ? oh(i, e.type, e.stateNode) : ih(i, l, e.memoizedProps))
              : l === null && e.stateNode !== null && kc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        wt(t, e),
          At(e),
          l & 512 && (Qe || n === null || Jt(n, n.return)),
          n !== null && l & 4 && kc(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if ((wt(t, e), At(e), l & 512 && (Qe || n === null || Jt(n, n.return)), e.flags & 32)) {
          i = e.stateNode;
          try {
            Dl(i, '');
          } catch (U) {
            He(e, e.return, U);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), kc(e, i, n !== null ? n.memoizedProps : i)),
          l & 1024 && (Zc = !0);
        break;
      case 6:
        if ((wt(t, e), At(e), l & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (U) {
            He(e, e.return, U);
          }
        }
        break;
      case 3:
        if (
          ((ju = null),
          (i = Yt),
          (Yt = zu(t.containerInfo)),
          wt(t, e),
          (Yt = i),
          At(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            xi(t.containerInfo);
          } catch (U) {
            He(e, e.return, U);
          }
        Zc && ((Zc = !1), mm(e));
        break;
      case 4:
        (l = Yt), (Yt = zu(e.stateNode.containerInfo)), wt(t, e), At(e), (Yt = l);
        break;
      case 12:
        wt(t, e), At(e);
        break;
      case 13:
        wt(t, e),
          At(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Ic = ut()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Kc(e, l)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          C = hn,
          Y = Qe;
        if (((hn = C || i), (Qe = Y || S), wt(t, e), (Qe = Y), (hn = C), At(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || S || hn || Qe || gl(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (((u = S.stateNode), i))
                    (f = u.style),
                      typeof f.setProperty == 'function'
                        ? f.setProperty('display', 'none', 'important')
                        : (f.display = 'none');
                  else {
                    h = S.stateNode;
                    var X = S.memoizedProps.style,
                      z = X != null && X.hasOwnProperty('display') ? X.display : null;
                    h.style.display = z == null || typeof z == 'boolean' ? '' : ('' + z).trim();
                  }
                } catch (U) {
                  He(S, S.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = i ? '' : S.memoizedProps;
                } catch (U) {
                  He(S, S.return, U);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Kc(e, n))));
        break;
      case 19:
        wt(t, e),
          At(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Kc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wt(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (im(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              u = Xc(e);
            Su(e, u, i);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Dl(f, ''), (n.flags &= -33));
            var h = Xc(e);
            Su(e, h, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              C = Xc(e);
            Qc(e, C, S);
            break;
          default:
            throw Error(c(161));
        }
      } catch (Y) {
        He(e, e.return, Y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function mm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        mm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function Dn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) cm(e, t.alternate, t), (t = t.sibling);
  }
  function gl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _n(4, t, t.return), gl(t);
          break;
        case 1:
          Jt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == 'function' && lm(t, t.return, n), gl(t);
          break;
        case 27:
          mi(t.stateNode);
        case 26:
        case 5:
          Jt(t, t.return), gl(t);
          break;
        case 22:
          t.memoizedState === null && gl(t);
          break;
        case 30:
          gl(t);
          break;
        default:
          gl(t);
      }
      e = e.sibling;
    }
  }
  function zn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        u = t,
        f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          zn(i, u, n), li(4, u);
          break;
        case 1:
          if ((zn(i, u, n), (l = u), (i = l.stateNode), typeof i.componentDidMount == 'function'))
            try {
              i.componentDidMount();
            } catch (C) {
              He(l, l.return, C);
            }
          if (((l = u), (i = l.updateQueue), i !== null)) {
            var h = l.stateNode;
            try {
              var S = i.shared.hiddenCallbacks;
              if (S !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < S.length; i++) Vf(S[i], h);
            } catch (C) {
              He(l, l.return, C);
            }
          }
          n && f & 64 && nm(u), ai(u, u.return);
          break;
        case 27:
          um(u);
        case 26:
        case 5:
          zn(i, u, n), n && l === null && f & 4 && am(u), ai(u, u.return);
          break;
        case 12:
          zn(i, u, n);
          break;
        case 13:
          zn(i, u, n), n && f & 4 && fm(i, u);
          break;
        case 22:
          u.memoizedState === null && zn(i, u, n), ai(u, u.return);
          break;
        case 30:
          break;
        default:
          zn(i, u, n);
      }
      t = t.sibling;
    }
  }
  function Jc(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ka(n));
  }
  function Wc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ka(e));
  }
  function Wt(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) hm(e, t, n, l), (t = t.sibling);
  }
  function hm(e, t, n, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Wt(e, t, n, l), i & 2048 && li(9, t);
        break;
      case 1:
        Wt(e, t, n, l);
        break;
      case 3:
        Wt(e, t, n, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ka(e)));
        break;
      case 12:
        if (i & 2048) {
          Wt(e, t, n, l), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              f = u.id,
              h = u.onPostCommit;
            typeof h == 'function' &&
              h(f, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (S) {
            He(t, t.return, S);
          }
        } else Wt(e, t, n, l);
        break;
      case 13:
        Wt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Wt(e, t, n, l)
              : ii(e, t)
            : u._visibility & 2
              ? Wt(e, t, n, l)
              : ((u._visibility |= 2), $l(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && Jc(f, t);
        break;
      case 24:
        Wt(e, t, n, l), i & 2048 && Wc(t.alternate, t);
        break;
      default:
        Wt(e, t, n, l);
    }
  }
  function $l(e, t, n, l, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        f = t,
        h = n,
        S = l,
        C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          $l(u, f, h, S, i), li(8, f);
          break;
        case 23:
          break;
        case 22:
          var Y = f.stateNode;
          f.memoizedState !== null
            ? Y._visibility & 2
              ? $l(u, f, h, S, i)
              : ii(u, f)
            : ((Y._visibility |= 2), $l(u, f, h, S, i)),
            i && C & 2048 && Jc(f.alternate, f);
          break;
        case 24:
          $l(u, f, h, S, i), i && C & 2048 && Wc(f.alternate, f);
          break;
        default:
          $l(u, f, h, S, i);
      }
      t = t.sibling;
    }
  }
  function ii(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            ii(n, l), i & 2048 && Jc(l.alternate, l);
            break;
          case 24:
            ii(n, l), i & 2048 && Wc(l.alternate, l);
            break;
          default:
            ii(n, l);
        }
        t = t.sibling;
      }
  }
  var ui = 8192;
  function Fl(e) {
    if (e.subtreeFlags & ui) for (e = e.child; e !== null; ) vm(e), (e = e.sibling);
  }
  function vm(e) {
    switch (e.tag) {
      case 26:
        Fl(e), e.flags & ui && e.memoizedState !== null && C0(Yt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Fl(e);
        break;
      case 3:
      case 4:
        var t = Yt;
        (Yt = zu(e.stateNode.containerInfo)), Fl(e), (Yt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ui), (ui = 16777216), Fl(e), (ui = t))
            : Fl(e));
        break;
      default:
        Fl(e);
    }
  }
  function gm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function oi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (et = l), ym(l, e);
        }
      gm(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) pm(e), (e = e.sibling);
  }
  function pm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        oi(e), e.flags & 2048 && _n(9, e, e.return);
        break;
      case 3:
        oi(e);
        break;
      case 12:
        oi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), xu(e))
          : oi(e);
        break;
      default:
        oi(e);
    }
  }
  function xu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (et = l), ym(l, e);
        }
      gm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          _n(8, t, t.return), xu(t);
          break;
        case 22:
          (n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), xu(t));
          break;
        default:
          xu(t);
      }
      e = e.sibling;
    }
  }
  function ym(e, t) {
    for (; et !== null; ) {
      var n = et;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          _n(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ka(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (et = l);
      else
        e: for (n = e; et !== null; ) {
          l = et;
          var i = l.sibling,
            u = l.return;
          if ((rm(l), l === n)) {
            et = null;
            break e;
          }
          if (i !== null) {
            (i.return = u), (et = i);
            break e;
          }
          et = u;
        }
    }
  }
  var Qy = {
      getCacheForType: function (e) {
        var t = ct(We),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    Zy = typeof WeakMap == 'function' ? WeakMap : Map,
    _e = 0,
    Le = null,
    Ae = null,
    Oe = 0,
    De = 0,
    Tt = null,
    Un = !1,
    Il = !1,
    Pc = !1,
    gn = 0,
    ke = 0,
    jn = 0,
    pl = 0,
    $c = 0,
    Bt = 0,
    ea = 0,
    ci = null,
    pt = null,
    Fc = !1,
    Ic = 0,
    Eu = 1 / 0,
    wu = null,
    Hn = null,
    at = 0,
    Bn = null,
    ta = null,
    na = 0,
    er = 0,
    tr = null,
    bm = null,
    ri = 0,
    nr = null;
  function Rt() {
    if ((_e & 2) !== 0 && Oe !== 0) return Oe & -Oe;
    if (O.T !== null) {
      var e = kl;
      return e !== 0 ? e : rr();
    }
    return Us();
  }
  function Sm() {
    Bt === 0 && (Bt = (Oe & 536870912) === 0 || Ce ? Ns() : 536870912);
    var e = Ht.current;
    return e !== null && (e.flags |= 32), Bt;
  }
  function Ot(e, t, n) {
    ((e === Le && (De === 2 || De === 9)) || e.cancelPendingCommit !== null) &&
      (la(e, 0), Ln(e, Oe, Bt, !1)),
      Oa(e, n),
      ((_e & 2) === 0 || e !== Le) &&
        (e === Le && ((_e & 2) === 0 && (pl |= n), ke === 4 && Ln(e, Oe, Bt, !1)), Pt(e));
  }
  function xm(e, t, n) {
    if ((_e & 6) !== 0) throw Error(c(327));
    var l = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ra(e, t),
      i = l ? Wy(e, t) : ir(e, t, !0),
      u = l;
    do {
      if (i === 0) {
        Il && !l && Ln(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !Ky(n))) {
          (i = ir(e, t, !1)), (u = !1);
          continue;
        }
        if (i === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var f = 0;
          else (f = e.pendingLanes & -536870913), (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            e: {
              var h = e;
              i = ci;
              var S = h.current.memoizedState.isDehydrated;
              if ((S && (la(h, f).flags |= 256), (f = ir(h, f, !1)), f !== 2)) {
                if (Pc && !S) {
                  (h.errorRecoveryDisabledLanes |= u), (pl |= u), (i = 4);
                  break e;
                }
                (u = pt), (pt = i), u !== null && (pt === null ? (pt = u) : pt.push.apply(pt, u));
              }
              i = f;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          la(e, 0), Ln(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (u = i), u)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ln(l, t, Bt, !Un);
              break e;
            case 2:
              pt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((i = Ic + 300 - ut()), 10 < i)) {
            if ((Ln(l, t, Bt, !Un), Ui(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = Pm(
              Em.bind(null, l, n, pt, wu, Fc, t, Bt, pl, ea, Un, u, 2, -0, 0),
              i
            );
            break e;
          }
          Em(l, n, pt, wu, Fc, t, Bt, pl, ea, Un, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Pt(e);
  }
  function Em(e, t, n, l, i, u, f, h, S, C, Y, X, z, U) {
    if (
      ((e.timeoutHandle = -1),
      (X = t.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((gi = { stylesheets: null, count: 0, unsuspend: M0 }), vm(t), (X = N0()), X !== null))
    ) {
      (e.cancelPendingCommit = X(Cm.bind(null, e, t, u, n, l, i, f, h, S, Y, 1, z, U))),
        Ln(e, u, f, !C);
      return;
    }
    Cm(e, t, u, n, l, i, f, h, S);
  }
  function Ky(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var i = n[l],
            u = i.getSnapshot;
          i = i.value;
          try {
            if (!xt(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Ln(e, t, n, l) {
    (t &= ~$c),
      (t &= ~pl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var i = t; 0 < i; ) {
      var u = 31 - St(i),
        f = 1 << u;
      (l[u] = -1), (i &= ~f);
    }
    n !== 0 && Ds(e, n, t);
  }
  function Au() {
    return (_e & 6) === 0 ? (si(0), !1) : !0;
  }
  function lr() {
    if (Ae !== null) {
      if (De === 0) var e = Ae.return;
      else (e = Ae), (cn = fl = null), Sc(e), (Wl = null), (ei = 0), (e = Ae);
      for (; e !== null; ) tm(e.alternate, e), (e = e.return);
      Ae = null;
    }
  }
  function la(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), f0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      lr(),
      (Le = e),
      (Ae = n = an(e.current, null)),
      (Oe = t),
      (De = 0),
      (Tt = null),
      (Un = !1),
      (Il = Ra(e, t)),
      (Pc = !1),
      (ea = Bt = $c = pl = jn = ke = 0),
      (pt = ci = null),
      (Fc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - St(l),
          u = 1 << i;
        (t |= e[i]), (l &= ~u);
      }
    return (gn = t), Zi(), n;
  }
  function wm(e, t) {
    (ye = null),
      (O.H = fu),
      t === Qa || t === tu
        ? ((t = Yf()), (De = 3))
        : t === Bf
          ? ((t = Yf()), (De = 4))
          : (De =
              t === Gd
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Tt = t),
      Ae === null && ((ke = 1), gu(e, Dt(t, e.current)));
  }
  function Am() {
    var e = O.H;
    return (O.H = fu), e === null ? fu : e;
  }
  function Tm() {
    var e = O.A;
    return (O.A = Qy), e;
  }
  function ar() {
    (ke = 4),
      Un || ((Oe & 4194048) !== Oe && Ht.current !== null) || (Il = !0),
      ((jn & 134217727) === 0 && (pl & 134217727) === 0) || Le === null || Ln(Le, Oe, Bt, !1);
  }
  function ir(e, t, n) {
    var l = _e;
    _e |= 2;
    var i = Am(),
      u = Tm();
    (Le !== e || Oe !== t) && ((wu = null), la(e, t)), (t = !1);
    var f = ke;
    e: do
      try {
        if (De !== 0 && Ae !== null) {
          var h = Ae,
            S = Tt;
          switch (De) {
            case 8:
              lr(), (f = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ht.current === null && (t = !0);
              var C = De;
              if (((De = 0), (Tt = null), aa(e, h, S, C), n && Il)) {
                f = 0;
                break e;
              }
              break;
            default:
              (C = De), (De = 0), (Tt = null), aa(e, h, S, C);
          }
        }
        Jy(), (f = ke);
        break;
      } catch (Y) {
        wm(e, Y);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (cn = fl = null),
      (_e = l),
      (O.H = i),
      (O.A = u),
      Ae === null && ((Le = null), (Oe = 0), Zi()),
      f
    );
  }
  function Jy() {
    for (; Ae !== null; ) Rm(Ae);
  }
  function Wy(e, t) {
    var n = _e;
    _e |= 2;
    var l = Am(),
      i = Tm();
    Le !== e || Oe !== t ? ((wu = null), (Eu = ut() + 500), la(e, t)) : (Il = Ra(e, t));
    e: do
      try {
        if (De !== 0 && Ae !== null) {
          t = Ae;
          var u = Tt;
          t: switch (De) {
            case 1:
              (De = 0), (Tt = null), aa(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Lf(u)) {
                (De = 0), (Tt = null), Om(t);
                break;
              }
              (t = function () {
                (De !== 2 && De !== 9) || Le !== e || (De = 7), Pt(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              De = 7;
              break e;
            case 4:
              De = 5;
              break e;
            case 7:
              Lf(u) ? ((De = 0), (Tt = null), Om(t)) : ((De = 0), (Tt = null), aa(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (Ae.tag) {
                case 26:
                  f = Ae.memoizedState;
                case 5:
                case 27:
                  var h = Ae;
                  if (!f || ch(f)) {
                    (De = 0), (Tt = null);
                    var S = h.sibling;
                    if (S !== null) Ae = S;
                    else {
                      var C = h.return;
                      C !== null ? ((Ae = C), Tu(C)) : (Ae = null);
                    }
                    break t;
                  }
              }
              (De = 0), (Tt = null), aa(e, t, u, 5);
              break;
            case 6:
              (De = 0), (Tt = null), aa(e, t, u, 6);
              break;
            case 8:
              lr(), (ke = 6);
              break e;
            default:
              throw Error(c(462));
          }
        }
        Py();
        break;
      } catch (Y) {
        wm(e, Y);
      }
    while (!0);
    return (
      (cn = fl = null),
      (O.H = l),
      (O.A = i),
      (_e = n),
      Ae !== null ? 0 : ((Le = null), (Oe = 0), Zi(), ke)
    );
  }
  function Py() {
    for (; Ae !== null && !Fn(); ) Rm(Ae);
  }
  function Rm(e) {
    var t = Id(e.alternate, e, gn);
    (e.memoizedProps = e.pendingProps), t === null ? Tu(e) : (Ae = t);
  }
  function Om(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Kd(n, t, t.pendingProps, t.type, void 0, Oe);
        break;
      case 11:
        t = Kd(n, t, t.pendingProps, t.type.render, t.ref, Oe);
        break;
      case 5:
        Sc(t);
      default:
        tm(n, t), (t = Ae = Mf(t, gn)), (t = Id(n, t, gn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Tu(e) : (Ae = t);
  }
  function aa(e, t, n, l) {
    (cn = fl = null), Sc(t), (Wl = null), (ei = 0);
    var i = t.return;
    try {
      if (qy(e, i, t, n, Oe)) {
        (ke = 1), gu(e, Dt(n, e.current)), (Ae = null);
        return;
      }
    } catch (u) {
      if (i !== null) throw ((Ae = i), u);
      (ke = 1), gu(e, Dt(n, e.current)), (Ae = null);
      return;
    }
    t.flags & 32768
      ? (Ce || l === 1
          ? (e = !0)
          : Il || (Oe & 536870912) !== 0
            ? (e = !1)
            : ((Un = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Ht.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Mm(t, e))
      : Tu(t);
  }
  function Tu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Mm(t, Un);
        return;
      }
      e = t.return;
      var n = Gy(t.alternate, t, gn);
      if (n !== null) {
        Ae = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function Mm(e, t) {
    do {
      var n = Vy(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ae = e;
        return;
      }
      Ae = e = n;
    } while (e !== null);
    (ke = 6), (Ae = null);
  }
  function Cm(e, t, n, l, i, u, f, h, S) {
    e.cancelPendingCommit = null;
    do Ru();
    while (at !== 0);
    if ((_e & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Wo),
        Mp(e, n, u, f, h, S),
        e === Le && ((Ae = Le = null), (Oe = 0)),
        (ta = t),
        (Bn = e),
        (na = n),
        (er = u),
        (tr = i),
        (bm = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            e0(_i, function () {
              return Um(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = O.T), (O.T = null), (i = Q.p), (Q.p = 2), (f = _e), (_e |= 4);
        try {
          ky(e, t, n);
        } finally {
          (_e = f), (Q.p = i), (O.T = l);
        }
      }
      (at = 1), Nm(), _m(), Dm();
    }
  }
  function Nm() {
    if (at === 1) {
      at = 0;
      var e = Bn,
        t = ta,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = O.T), (O.T = null);
        var l = Q.p;
        Q.p = 2;
        var i = _e;
        _e |= 4;
        try {
          dm(t, e);
          var u = pr,
            f = yf(e.containerInfo),
            h = u.focusedElem,
            S = u.selectionRange;
          if (f !== h && h && h.ownerDocument && pf(h.ownerDocument.documentElement, h)) {
            if (S !== null && Xo(h)) {
              var C = S.start,
                Y = S.end;
              if ((Y === void 0 && (Y = C), 'selectionStart' in h))
                (h.selectionStart = C), (h.selectionEnd = Math.min(Y, h.value.length));
              else {
                var X = h.ownerDocument || document,
                  z = (X && X.defaultView) || window;
                if (z.getSelection) {
                  var U = z.getSelection(),
                    se = h.textContent.length,
                    oe = Math.min(S.start, se),
                    je = S.end === void 0 ? oe : Math.min(S.end, se);
                  !U.extend && oe > je && ((f = je), (je = oe), (oe = f));
                  var T = gf(h, oe),
                    A = gf(h, je);
                  if (
                    T &&
                    A &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== T.node ||
                      U.anchorOffset !== T.offset ||
                      U.focusNode !== A.node ||
                      U.focusOffset !== A.offset)
                  ) {
                    var M = X.createRange();
                    M.setStart(T.node, T.offset),
                      U.removeAllRanges(),
                      oe > je
                        ? (U.addRange(M), U.extend(A.node, A.offset))
                        : (M.setEnd(A.node, A.offset), U.addRange(M));
                  }
                }
              }
            }
            for (X = [], U = h; (U = U.parentNode); )
              U.nodeType === 1 && X.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (typeof h.focus == 'function' && h.focus(), h = 0; h < X.length; h++) {
              var G = X[h];
              (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
            }
          }
          (Lu = !!gr), (pr = gr = null);
        } finally {
          (_e = i), (Q.p = l), (O.T = n);
        }
      }
      (e.current = t), (at = 2);
    }
  }
  function _m() {
    if (at === 2) {
      at = 0;
      var e = Bn,
        t = ta,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = O.T), (O.T = null);
        var l = Q.p;
        Q.p = 2;
        var i = _e;
        _e |= 4;
        try {
          cm(e, t.alternate, t);
        } finally {
          (_e = i), (Q.p = l), (O.T = n);
        }
      }
      at = 3;
    }
  }
  function Dm() {
    if (at === 4 || at === 3) {
      (at = 0), In();
      var e = Bn,
        t = ta,
        n = na,
        l = bm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (at = 5)
        : ((at = 0), (ta = Bn = null), zm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Hn = null),
        wo(n),
        (t = t.stateNode),
        bt && typeof bt.onCommitFiberRoot == 'function')
      )
        try {
          bt.onCommitFiberRoot(Ta, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = O.T), (i = Q.p), (Q.p = 2), (O.T = null);
        try {
          for (var u = e.onRecoverableError, f = 0; f < l.length; f++) {
            var h = l[f];
            u(h.value, { componentStack: h.stack });
          }
        } finally {
          (O.T = t), (Q.p = i);
        }
      }
      (na & 3) !== 0 && Ru(),
        Pt(e),
        (i = e.pendingLanes),
        (n & 4194090) !== 0 && (i & 42) !== 0 ? (e === nr ? ri++ : ((ri = 0), (nr = e))) : (ri = 0),
        si(0);
    }
  }
  function zm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ka(t)));
  }
  function Ru(e) {
    return Nm(), _m(), Dm(), Um();
  }
  function Um() {
    if (at !== 5) return !1;
    var e = Bn,
      t = er;
    er = 0;
    var n = wo(na),
      l = O.T,
      i = Q.p;
    try {
      (Q.p = 32 > n ? 32 : n), (O.T = null), (n = tr), (tr = null);
      var u = Bn,
        f = na;
      if (((at = 0), (ta = Bn = null), (na = 0), (_e & 6) !== 0)) throw Error(c(331));
      var h = _e;
      if (
        ((_e |= 4),
        pm(u.current),
        hm(u, u.current, f, n),
        (_e = h),
        si(0, !1),
        bt && typeof bt.onPostCommitFiberRoot == 'function')
      )
        try {
          bt.onPostCommitFiberRoot(Ta, u);
        } catch {}
      return !0;
    } finally {
      (Q.p = i), (O.T = l), zm(e, t);
    }
  }
  function jm(e, t, n) {
    (t = Dt(n, t)), (t = Uc(e.stateNode, t, 2)), (e = On(e, t, 2)), e !== null && (Oa(e, 2), Pt(e));
  }
  function He(e, t, n) {
    if (e.tag === 3) jm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          jm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (Hn === null || !Hn.has(l)))
          ) {
            (e = Dt(n, e)),
              (n = qd(2)),
              (l = On(t, n, 2)),
              l !== null && (Yd(n, l, t, e), Oa(l, 2), Pt(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function ur(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Zy();
      var i = new Set();
      l.set(t, i);
    } else (i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i));
    i.has(n) || ((Pc = !0), i.add(n), (e = $y.bind(null, e, t, n)), t.then(e, e));
  }
  function $y(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Le === e &&
        (Oe & n) === n &&
        (ke === 4 || (ke === 3 && (Oe & 62914560) === Oe && 300 > ut() - Ic)
          ? (_e & 2) === 0 && la(e, 0)
          : ($c |= n),
        ea === Oe && (ea = 0)),
      Pt(e);
  }
  function Hm(e, t) {
    t === 0 && (t = _s()), (e = ql(e, t)), e !== null && (Oa(e, t), Pt(e));
  }
  function Fy(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Hm(e, n);
  }
  function Iy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(t), Hm(e, n);
  }
  function e0(e, t) {
    return nt(e, t);
  }
  var Ou = null,
    ia = null,
    or = !1,
    Mu = !1,
    cr = !1,
    yl = 0;
  function Pt(e) {
    e !== ia && e.next === null && (ia === null ? (Ou = ia = e) : (ia = ia.next = e)),
      (Mu = !0),
      or || ((or = !0), n0());
  }
  function si(e, t) {
    if (!cr && Mu) {
      cr = !0;
      do
        for (var n = !1, l = Ou; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = l.suspendedLanes,
                h = l.pingedLanes;
              (u = (1 << (31 - St(42 | e) + 1)) - 1),
                (u &= i & ~(f & ~h)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), Ym(l, u));
          } else
            (u = Oe),
              (u = Ui(
                l,
                l === Le ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ra(l, u) || ((n = !0), Ym(l, u));
          l = l.next;
        }
      while (n);
      cr = !1;
    }
  }
  function t0() {
    Bm();
  }
  function Bm() {
    Mu = or = !1;
    var e = 0;
    yl !== 0 && (s0() && (e = yl), (yl = 0));
    for (var t = ut(), n = null, l = Ou; l !== null; ) {
      var i = l.next,
        u = Lm(l, t);
      u === 0
        ? ((l.next = null), n === null ? (Ou = i) : (n.next = i), i === null && (ia = n))
        : ((n = l), (e !== 0 || (u & 3) !== 0) && (Mu = !0)),
        (l = i);
    }
    si(e);
  }
  function Lm(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var f = 31 - St(u),
        h = 1 << f,
        S = i[f];
      S === -1
        ? ((h & n) === 0 || (h & l) !== 0) && (i[f] = Op(h, t))
        : S <= t && (e.expiredLanes |= h),
        (u &= ~h);
    }
    if (
      ((t = Le),
      (n = Oe),
      (n = Ui(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      n === 0 || (e === t && (De === 2 || De === 9)) || e.cancelPendingCommit !== null)
    )
      return l !== null && l !== null && dt(l), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((n & 3) === 0 || Ra(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && dt(l), wo(n))) {
        case 2:
        case 8:
          n = Ms;
          break;
        case 32:
          n = _i;
          break;
        case 268435456:
          n = Cs;
          break;
        default:
          n = _i;
      }
      return (
        (l = qm.bind(null, e)), (n = nt(n, l)), (e.callbackPriority = t), (e.callbackNode = n), t
      );
    }
    return l !== null && l !== null && dt(l), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function qm(e, t) {
    if (at !== 0 && at !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (Ru() && e.callbackNode !== n) return null;
    var l = Oe;
    return (
      (l = Ui(e, e === Le ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0
        ? null
        : (xm(e, l, t),
          Lm(e, ut()),
          e.callbackNode != null && e.callbackNode === n ? qm.bind(null, e) : null)
    );
  }
  function Ym(e, t) {
    if (Ru()) return null;
    xm(e, t, !0);
  }
  function n0() {
    d0(function () {
      (_e & 6) !== 0 ? nt(el, t0) : Bm();
    });
  }
  function rr() {
    return yl === 0 && (yl = Ns()), yl;
  }
  function Gm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : qi('' + e);
  }
  function Vm(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function l0(e, t, n, l, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var u = Gm((i[mt] || null).action),
        f = l.submitter;
      f &&
        ((t = (t = f[mt] || null) ? Gm(t.formAction) : f.getAttribute('formAction')),
        t !== null && ((u = t), (f = null)));
      var h = new ki('action', 'action', null, l, i);
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (yl !== 0) {
                  var S = f ? Vm(i, f) : new FormData(i);
                  Cc(n, { pending: !0, data: S, method: i.method, action: u }, null, S);
                }
              } else
                typeof u == 'function' &&
                  (h.preventDefault(),
                  (S = f ? Vm(i, f) : new FormData(i)),
                  Cc(n, { pending: !0, data: S, method: i.method, action: u }, u, S));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var sr = 0; sr < Jo.length; sr++) {
    var fr = Jo[sr],
      a0 = fr.toLowerCase(),
      i0 = fr[0].toUpperCase() + fr.slice(1);
    qt(a0, 'on' + i0);
  }
  qt(xf, 'onAnimationEnd'),
    qt(Ef, 'onAnimationIteration'),
    qt(wf, 'onAnimationStart'),
    qt('dblclick', 'onDoubleClick'),
    qt('focusin', 'onFocus'),
    qt('focusout', 'onBlur'),
    qt(Ey, 'onTransitionRun'),
    qt(wy, 'onTransitionStart'),
    qt(Ay, 'onTransitionCancel'),
    qt(Af, 'onTransitionEnd'),
    Cl('onMouseEnter', ['mouseout', 'mouseover']),
    Cl('onMouseLeave', ['mouseout', 'mouseover']),
    Cl('onPointerEnter', ['pointerout', 'pointerover']),
    Cl('onPointerLeave', ['pointerout', 'pointerover']),
    nl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    nl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    nl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    nl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    nl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    nl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var fi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    u0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(fi)
    );
  function km(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        i = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = l.length - 1; 0 <= f; f--) {
            var h = l[f],
              S = h.instance,
              C = h.currentTarget;
            if (((h = h.listener), S !== u && i.isPropagationStopped())) break e;
            (u = h), (i.currentTarget = C);
            try {
              u(i);
            } catch (Y) {
              vu(Y);
            }
            (i.currentTarget = null), (u = S);
          }
        else
          for (f = 0; f < l.length; f++) {
            if (
              ((h = l[f]),
              (S = h.instance),
              (C = h.currentTarget),
              (h = h.listener),
              S !== u && i.isPropagationStopped())
            )
              break e;
            (u = h), (i.currentTarget = C);
            try {
              u(i);
            } catch (Y) {
              vu(Y);
            }
            (i.currentTarget = null), (u = S);
          }
      }
    }
  }
  function Te(e, t) {
    var n = t[Ao];
    n === void 0 && (n = t[Ao] = new Set());
    var l = e + '__bubble';
    n.has(l) || (Xm(t, e, 2, !1), n.add(l));
  }
  function dr(e, t, n) {
    var l = 0;
    t && (l |= 4), Xm(n, e, l, t);
  }
  var Cu = '_reactListening' + Math.random().toString(36).slice(2);
  function mr(e) {
    if (!e[Cu]) {
      (e[Cu] = !0),
        Hs.forEach(function (n) {
          n !== 'selectionchange' && (u0.has(n) || dr(n, !1, e), dr(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cu] || ((t[Cu] = !0), dr('selectionchange', !1, t));
    }
  }
  function Xm(e, t, n, l) {
    switch (hh(t)) {
      case 2:
        var i = z0;
        break;
      case 8:
        i = U0;
        break;
      default:
        i = Or;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !jo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
  }
  function hr(e, t, n, l, i) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var h = l.stateNode.containerInfo;
          if (h === i) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === i) return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (((f = Rl(h)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = u = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    Ps(function () {
      var C = u,
        Y = zo(n),
        X = [];
      e: {
        var z = Tf.get(e);
        if (z !== void 0) {
          var U = ki,
            se = e;
          switch (e) {
            case 'keypress':
              if (Gi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              U = ey;
              break;
            case 'focusin':
              (se = 'focus'), (U = qo);
              break;
            case 'focusout':
              (se = 'blur'), (U = qo);
              break;
            case 'beforeblur':
            case 'afterblur':
              U = qo;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              U = Is;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = Vp;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = ly;
              break;
            case xf:
            case Ef:
            case wf:
              U = Qp;
              break;
            case Af:
              U = iy;
              break;
            case 'scroll':
            case 'scrollend':
              U = Yp;
              break;
            case 'wheel':
              U = oy;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = Kp;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = tf;
              break;
            case 'toggle':
            case 'beforetoggle':
              U = ry;
          }
          var oe = (t & 4) !== 0,
            je = !oe && (e === 'scroll' || e === 'scrollend'),
            T = oe ? (z !== null ? z + 'Capture' : null) : z;
          oe = [];
          for (var A = C, M; A !== null; ) {
            var G = A;
            if (
              ((M = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                M === null ||
                T === null ||
                ((G = Na(A, T)), G != null && oe.push(di(A, G, M))),
              je)
            )
              break;
            A = A.return;
          }
          0 < oe.length && ((z = new U(z, se, null, n, Y)), X.push({ event: z, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === 'mouseover' || e === 'pointerover'),
            (U = e === 'mouseout' || e === 'pointerout'),
            z && n !== Do && (se = n.relatedTarget || n.fromElement) && (Rl(se) || se[Tl]))
          )
            break e;
          if (
            (U || z) &&
            ((z =
              Y.window === Y
                ? Y
                : (z = Y.ownerDocument)
                  ? z.defaultView || z.parentWindow
                  : window),
            U
              ? ((se = n.relatedTarget || n.toElement),
                (U = C),
                (se = se ? Rl(se) : null),
                se !== null &&
                  ((je = d(se)), (oe = se.tag), se !== je || (oe !== 5 && oe !== 27 && oe !== 6)) &&
                  (se = null))
              : ((U = null), (se = C)),
            U !== se)
          ) {
            if (
              ((oe = Is),
              (G = 'onMouseLeave'),
              (T = 'onMouseEnter'),
              (A = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((oe = tf), (G = 'onPointerLeave'), (T = 'onPointerEnter'), (A = 'pointer')),
              (je = U == null ? z : Ca(U)),
              (M = se == null ? z : Ca(se)),
              (z = new oe(G, A + 'leave', U, n, Y)),
              (z.target = je),
              (z.relatedTarget = M),
              (G = null),
              Rl(Y) === C &&
                ((oe = new oe(T, A + 'enter', se, n, Y)),
                (oe.target = M),
                (oe.relatedTarget = je),
                (G = oe)),
              (je = G),
              U && se)
            )
              t: {
                for (oe = U, T = se, A = 0, M = oe; M; M = ua(M)) A++;
                for (M = 0, G = T; G; G = ua(G)) M++;
                for (; 0 < A - M; ) (oe = ua(oe)), A--;
                for (; 0 < M - A; ) (T = ua(T)), M--;
                for (; A--; ) {
                  if (oe === T || (T !== null && oe === T.alternate)) break t;
                  (oe = ua(oe)), (T = ua(T));
                }
                oe = null;
              }
            else oe = null;
            U !== null && Qm(X, z, U, oe, !1), se !== null && je !== null && Qm(X, je, se, oe, !0);
          }
        }
        e: {
          if (
            ((z = C ? Ca(C) : window),
            (U = z.nodeName && z.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && z.type === 'file'))
          )
            var ee = sf;
          else if (cf(z))
            if (ff) ee = by;
            else {
              ee = py;
              var xe = gy;
            }
          else
            (U = z.nodeName),
              !U || U.toLowerCase() !== 'input' || (z.type !== 'checkbox' && z.type !== 'radio')
                ? C && _o(C.elementType) && (ee = sf)
                : (ee = yy);
          if (ee && (ee = ee(e, C))) {
            rf(X, ee, n, Y);
            break e;
          }
          xe && xe(e, z, C),
            e === 'focusout' &&
              C &&
              z.type === 'number' &&
              C.memoizedProps.value != null &&
              No(z, 'number', z.value);
        }
        switch (((xe = C ? Ca(C) : window), e)) {
          case 'focusin':
            (cf(xe) || xe.contentEditable === 'true') && ((Hl = xe), (Qo = C), (La = null));
            break;
          case 'focusout':
            La = Qo = Hl = null;
            break;
          case 'mousedown':
            Zo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Zo = !1), bf(X, n, Y);
            break;
          case 'selectionchange':
            if (xy) break;
          case 'keydown':
          case 'keyup':
            bf(X, n, Y);
        }
        var le;
        if (Go)
          e: {
            switch (e) {
              case 'compositionstart':
                var re = 'onCompositionStart';
                break e;
              case 'compositionend':
                re = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                re = 'onCompositionUpdate';
                break e;
            }
            re = void 0;
          }
        else
          jl
            ? uf(e, n) && (re = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (re = 'onCompositionStart');
        re &&
          (nf &&
            n.locale !== 'ko' &&
            (jl || re !== 'onCompositionStart'
              ? re === 'onCompositionEnd' && jl && (le = $s())
              : ((wn = Y), (Ho = 'value' in wn ? wn.value : wn.textContent), (jl = !0))),
          (xe = Nu(C, re)),
          0 < xe.length &&
            ((re = new ef(re, e, null, n, Y)),
            X.push({ event: re, listeners: xe }),
            le ? (re.data = le) : ((le = of(n)), le !== null && (re.data = le)))),
          (le = fy ? dy(e, n) : my(e, n)) &&
            ((re = Nu(C, 'onBeforeInput')),
            0 < re.length &&
              ((xe = new ef('onBeforeInput', 'beforeinput', null, n, Y)),
              X.push({ event: xe, listeners: re }),
              (xe.data = le))),
          l0(X, e, C, n, Y);
      }
      km(X, t);
    });
  }
  function di(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Nu(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = Na(e, n)),
          i != null && l.unshift(di(e, i, u)),
          (i = Na(e, t)),
          i != null && l.push(di(e, i, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function ua(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Qm(e, t, n, l, i) {
    for (var u = t._reactName, f = []; n !== null && n !== l; ) {
      var h = n,
        S = h.alternate,
        C = h.stateNode;
      if (((h = h.tag), S !== null && S === l)) break;
      (h !== 5 && h !== 26 && h !== 27) ||
        C === null ||
        ((S = C),
        i
          ? ((C = Na(n, u)), C != null && f.unshift(di(n, C, S)))
          : i || ((C = Na(n, u)), C != null && f.push(di(n, C, S)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var o0 = /\r\n?/g,
    c0 = /\u0000|\uFFFD/g;
  function Zm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        o0,
        `
`
      )
      .replace(c0, '');
  }
  function Km(e, t) {
    return (t = Zm(t)), Zm(e) === t;
  }
  function _u() {}
  function Ue(e, t, n, l, i, u) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || Dl(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && Dl(e, '' + l);
        break;
      case 'className':
        Hi(e, 'class', l);
        break;
      case 'tabIndex':
        Hi(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Hi(e, n, l);
        break;
      case 'style':
        Js(e, l, u);
        break;
      case 'data':
        if (t !== 'object') {
          Hi(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        (l = qi('' + l)), e.setAttribute(n, l);
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && Ue(e, t, 'name', i.name, i, null),
                Ue(e, t, 'formEncType', i.formEncType, i, null),
                Ue(e, t, 'formMethod', i.formMethod, i, null),
                Ue(e, t, 'formTarget', i.formTarget, i, null))
              : (Ue(e, t, 'encType', i.encType, i, null),
                Ue(e, t, 'method', i.method, i, null),
                Ue(e, t, 'target', i.target, i, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        (l = qi('' + l)), e.setAttribute(n, l);
        break;
      case 'onClick':
        l != null && (e.onclick = _u);
        break;
      case 'onScroll':
        l != null && Te('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Te('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (n = qi('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '' + l)
          : e.removeAttribute(n);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(n, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case 'popover':
        Te('beforetoggle', e), Te('toggle', e), ji(e, 'popover', l);
        break;
      case 'xlinkActuate':
        nn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        nn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        nn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        nn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        nn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        nn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        nn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        nn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        nn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        ji(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Lp.get(n) || n), ji(e, n, l));
    }
  }
  function vr(e, t, n, l, i, u) {
    switch (n) {
      case 'style':
        Js(e, l, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Dl(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Dl(e, '' + l);
        break;
      case 'onScroll':
        l != null && Te('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Te('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = _u);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Bs.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((i = n.endsWith('Capture')),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (u = e[mt] || null),
              (u = u != null ? u[n] : null),
              typeof u == 'function' && e.removeEventListener(t, u, i),
              typeof l == 'function')
            ) {
              typeof u != 'function' &&
                u !== null &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, i);
              break e;
            }
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : ji(e, n, l);
          }
    }
  }
  function it(e, t, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        Te('error', e), Te('load', e);
        var l = !1,
          i = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  i = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(c(137, t));
                default:
                  Ue(e, t, u, f, n, null);
              }
          }
        i && Ue(e, t, 'srcSet', n.srcSet, n, null), l && Ue(e, t, 'src', n.src, n, null);
        return;
      case 'input':
        Te('invalid', e);
        var h = (u = f = i = null),
          S = null,
          C = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var Y = n[l];
            if (Y != null)
              switch (l) {
                case 'name':
                  i = Y;
                  break;
                case 'type':
                  f = Y;
                  break;
                case 'checked':
                  S = Y;
                  break;
                case 'defaultChecked':
                  C = Y;
                  break;
                case 'value':
                  u = Y;
                  break;
                case 'defaultValue':
                  h = Y;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (Y != null) throw Error(c(137, t));
                  break;
                default:
                  Ue(e, t, l, Y, n, null);
              }
          }
        Xs(e, u, h, S, C, f, i, !1), Bi(e);
        return;
      case 'select':
        Te('invalid', e), (l = f = u = null);
        for (i in n)
          if (n.hasOwnProperty(i) && ((h = n[i]), h != null))
            switch (i) {
              case 'value':
                u = h;
                break;
              case 'defaultValue':
                f = h;
                break;
              case 'multiple':
                l = h;
              default:
                Ue(e, t, i, h, n, null);
            }
        (t = u),
          (n = f),
          (e.multiple = !!l),
          t != null ? _l(e, !!l, t, !1) : n != null && _l(e, !!l, n, !0);
        return;
      case 'textarea':
        Te('invalid', e), (u = i = l = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((h = n[f]), h != null))
            switch (f) {
              case 'value':
                l = h;
                break;
              case 'defaultValue':
                i = h;
                break;
              case 'children':
                u = h;
                break;
              case 'dangerouslySetInnerHTML':
                if (h != null) throw Error(c(91));
                break;
              default:
                Ue(e, t, f, h, n, null);
            }
        Zs(e, l, i, u), Bi(e);
        return;
      case 'option':
        for (S in n)
          if (n.hasOwnProperty(S) && ((l = n[S]), l != null))
            switch (S) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Ue(e, t, S, l, n, null);
            }
        return;
      case 'dialog':
        Te('beforetoggle', e), Te('toggle', e), Te('cancel', e), Te('close', e);
        break;
      case 'iframe':
      case 'object':
        Te('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < fi.length; l++) Te(fi[l], e);
        break;
      case 'image':
        Te('error', e), Te('load', e);
        break;
      case 'details':
        Te('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Te('error', e), Te('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(c(137, t));
              default:
                Ue(e, t, C, l, n, null);
            }
        return;
      default:
        if (_o(t)) {
          for (Y in n)
            n.hasOwnProperty(Y) && ((l = n[Y]), l !== void 0 && vr(e, t, Y, l, n, void 0));
          return;
        }
    }
    for (h in n) n.hasOwnProperty(h) && ((l = n[h]), l != null && Ue(e, t, h, l, n, null));
  }
  function r0(e, t, n, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var i = null,
          u = null,
          f = null,
          h = null,
          S = null,
          C = null,
          Y = null;
        for (U in n) {
          var X = n[U];
          if (n.hasOwnProperty(U) && X != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                S = X;
              default:
                l.hasOwnProperty(U) || Ue(e, t, U, null, l, X);
            }
        }
        for (var z in l) {
          var U = l[z];
          if (((X = n[z]), l.hasOwnProperty(z) && (U != null || X != null)))
            switch (z) {
              case 'type':
                u = U;
                break;
              case 'name':
                i = U;
                break;
              case 'checked':
                C = U;
                break;
              case 'defaultChecked':
                Y = U;
                break;
              case 'value':
                f = U;
                break;
              case 'defaultValue':
                h = U;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(c(137, t));
                break;
              default:
                U !== X && Ue(e, t, z, U, l, X);
            }
        }
        Co(e, f, h, S, C, Y, u, i);
        return;
      case 'select':
        U = f = h = z = null;
        for (u in n)
          if (((S = n[u]), n.hasOwnProperty(u) && S != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                U = S;
              default:
                l.hasOwnProperty(u) || Ue(e, t, u, null, l, S);
            }
        for (i in l)
          if (((u = l[i]), (S = n[i]), l.hasOwnProperty(i) && (u != null || S != null)))
            switch (i) {
              case 'value':
                z = u;
                break;
              case 'defaultValue':
                h = u;
                break;
              case 'multiple':
                f = u;
              default:
                u !== S && Ue(e, t, i, u, l, S);
            }
        (t = h),
          (n = f),
          (l = U),
          z != null
            ? _l(e, !!n, z, !1)
            : !!l != !!n && (t != null ? _l(e, !!n, t, !0) : _l(e, !!n, n ? [] : '', !1));
        return;
      case 'textarea':
        U = z = null;
        for (h in n)
          if (((i = n[h]), n.hasOwnProperty(h) && i != null && !l.hasOwnProperty(h)))
            switch (h) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ue(e, t, h, null, l, i);
            }
        for (f in l)
          if (((i = l[f]), (u = n[f]), l.hasOwnProperty(f) && (i != null || u != null)))
            switch (f) {
              case 'value':
                z = i;
                break;
              case 'defaultValue':
                U = i;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== u && Ue(e, t, f, i, l, u);
            }
        Qs(e, z, U);
        return;
      case 'option':
        for (var se in n)
          if (((z = n[se]), n.hasOwnProperty(se) && z != null && !l.hasOwnProperty(se)))
            switch (se) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Ue(e, t, se, null, l, z);
            }
        for (S in l)
          if (((z = l[S]), (U = n[S]), l.hasOwnProperty(S) && z !== U && (z != null || U != null)))
            switch (S) {
              case 'selected':
                e.selected = z && typeof z != 'function' && typeof z != 'symbol';
                break;
              default:
                Ue(e, t, S, z, l, U);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var oe in n)
          (z = n[oe]),
            n.hasOwnProperty(oe) && z != null && !l.hasOwnProperty(oe) && Ue(e, t, oe, null, l, z);
        for (C in l)
          if (((z = l[C]), (U = n[C]), l.hasOwnProperty(C) && z !== U && (z != null || U != null)))
            switch (C) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (z != null) throw Error(c(137, t));
                break;
              default:
                Ue(e, t, C, z, l, U);
            }
        return;
      default:
        if (_o(t)) {
          for (var je in n)
            (z = n[je]),
              n.hasOwnProperty(je) &&
                z !== void 0 &&
                !l.hasOwnProperty(je) &&
                vr(e, t, je, void 0, l, z);
          for (Y in l)
            (z = l[Y]),
              (U = n[Y]),
              !l.hasOwnProperty(Y) ||
                z === U ||
                (z === void 0 && U === void 0) ||
                vr(e, t, Y, z, l, U);
          return;
        }
    }
    for (var T in n)
      (z = n[T]),
        n.hasOwnProperty(T) && z != null && !l.hasOwnProperty(T) && Ue(e, t, T, null, l, z);
    for (X in l)
      (z = l[X]),
        (U = n[X]),
        !l.hasOwnProperty(X) || z === U || (z == null && U == null) || Ue(e, t, X, z, l, U);
  }
  var gr = null,
    pr = null;
  function Du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Jm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Wm(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function yr(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var br = null;
  function s0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === br ? !1 : ((br = e), !0)) : ((br = null), !1);
  }
  var Pm = typeof setTimeout == 'function' ? setTimeout : void 0,
    f0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $m = typeof Promise == 'function' ? Promise : void 0,
    d0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof $m < 'u'
          ? function (e) {
              return $m.resolve(null).then(e).catch(m0);
            }
          : Pm;
  function m0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function qn(e) {
    return e === 'head';
  }
  function Fm(e, t) {
    var n = t,
      l = 0,
      i = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === '/$')) {
          if (0 < l && 8 > l) {
            n = l;
            var f = e.ownerDocument;
            if ((n & 1 && mi(f.documentElement), n & 2 && mi(f.body), n & 4))
              for (n = f.head, mi(n), f = n.firstChild; f; ) {
                var h = f.nextSibling,
                  S = f.nodeName;
                f[Ma] ||
                  S === 'SCRIPT' ||
                  S === 'STYLE' ||
                  (S === 'LINK' && f.rel.toLowerCase() === 'stylesheet') ||
                  n.removeChild(f),
                  (f = h);
              }
          }
          if (i === 0) {
            e.removeChild(u), xi(t);
            return;
          }
          i--;
        } else n === '$' || n === '$?' || n === '$!' ? i++ : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = u;
    } while (n);
    xi(t);
  }
  function Sr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Sr(n), To(n);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(n);
    }
  }
  function h0(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Ma])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== i.rel ||
                e.getAttribute('href') !== (i.href == null || i.href === '' ? null : i.href) ||
                e.getAttribute('crossorigin') !== (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute('title') !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (i.src == null ? null : i.src) ||
                  e.getAttribute('type') !== (i.type == null ? null : i.type) ||
                  e.getAttribute('crossorigin') !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = i.name == null ? null : '' + i.name;
        if (i.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = Gt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function v0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = Gt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function xr(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function g0(e, t) {
    var n = e.ownerDocument;
    if (e.data !== '$?' || n.readyState === 'complete') t();
    else {
      var l = function () {
        t(), n.removeEventListener('DOMContentLoaded', l);
      };
      n.addEventListener('DOMContentLoaded', l), (e._reactRetry = l);
    }
  }
  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var Er = null;
  function Im(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function eh(e, t, n) {
    switch (((t = Du(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function mi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    To(e);
  }
  var Lt = new Map(),
    th = new Set();
  function zu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var pn = Q.d;
  Q.d = { f: p0, r: y0, D: b0, C: S0, L: x0, m: E0, X: A0, S: w0, M: T0 };
  function p0() {
    var e = pn.f(),
      t = Au();
    return e || t;
  }
  function y0(e) {
    var t = Ol(e);
    t !== null && t.tag === 5 && t.type === 'form' ? xd(t) : pn.r(e);
  }
  var oa = typeof document > 'u' ? null : document;
  function nh(e, t, n) {
    var l = oa;
    if (l && typeof t == 'string' && t) {
      var i = _t(t);
      (i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        th.has(i) ||
          (th.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement('link')), it(t, 'link', e), Fe(t), l.head.appendChild(t)));
    }
  }
  function b0(e) {
    pn.D(e), nh('dns-prefetch', e, null);
  }
  function S0(e, t) {
    pn.C(e, t), nh('preconnect', e, t);
  }
  function x0(e, t, n) {
    pn.L(e, t, n);
    var l = oa;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + _t(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + _t(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (i += '[imagesizes="' + _t(n.imageSizes) + '"]'))
        : (i += '[href="' + _t(e) + '"]');
      var u = i;
      switch (t) {
        case 'style':
          u = ca(e);
          break;
        case 'script':
          u = ra(e);
      }
      Lt.has(u) ||
        ((e = b(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        Lt.set(u, e),
        l.querySelector(i) !== null ||
          (t === 'style' && l.querySelector(hi(u))) ||
          (t === 'script' && l.querySelector(vi(u))) ||
          ((t = l.createElement('link')), it(t, 'link', e), Fe(t), l.head.appendChild(t)));
    }
  }
  function E0(e, t) {
    pn.m(e, t);
    var n = oa;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        i = 'link[rel="modulepreload"][as="' + _t(l) + '"][href="' + _t(e) + '"]',
        u = i;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = ra(e);
      }
      if (
        !Lt.has(u) &&
        ((e = b({ rel: 'modulepreload', href: e }, t)), Lt.set(u, e), n.querySelector(i) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(vi(u))) return;
        }
        (l = n.createElement('link')), it(l, 'link', e), Fe(l), n.head.appendChild(l);
      }
    }
  }
  function w0(e, t, n) {
    pn.S(e, t, n);
    var l = oa;
    if (l && e) {
      var i = Ml(l).hoistableStyles,
        u = ca(e);
      t = t || 'default';
      var f = i.get(u);
      if (!f) {
        var h = { loading: 0, preload: null };
        if ((f = l.querySelector(hi(u)))) h.loading = 5;
        else {
          (e = b({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Lt.get(u)) && wr(e, n);
          var S = (f = l.createElement('link'));
          Fe(S),
            it(S, 'link', e),
            (S._p = new Promise(function (C, Y) {
              (S.onload = C), (S.onerror = Y);
            })),
            S.addEventListener('load', function () {
              h.loading |= 1;
            }),
            S.addEventListener('error', function () {
              h.loading |= 2;
            }),
            (h.loading |= 4),
            Uu(f, t, l);
        }
        (f = { type: 'stylesheet', instance: f, count: 1, state: h }), i.set(u, f);
      }
    }
  }
  function A0(e, t) {
    pn.X(e, t);
    var n = oa;
    if (n && e) {
      var l = Ml(n).hoistableScripts,
        i = ra(e),
        u = l.get(i);
      u ||
        ((u = n.querySelector(vi(i))),
        u ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Lt.get(i)) && Ar(e, t),
          (u = n.createElement('script')),
          Fe(u),
          it(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(i, u));
    }
  }
  function T0(e, t) {
    pn.M(e, t);
    var n = oa;
    if (n && e) {
      var l = Ml(n).hoistableScripts,
        i = ra(e),
        u = l.get(i);
      u ||
        ((u = n.querySelector(vi(i))),
        u ||
          ((e = b({ src: e, async: !0, type: 'module' }, t)),
          (t = Lt.get(i)) && Ar(e, t),
          (u = n.createElement('script')),
          Fe(u),
          it(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(i, u));
    }
  }
  function lh(e, t, n, l) {
    var i = (i = ie.current) ? zu(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = ca(n.href)),
            (n = Ml(i).hoistableStyles),
            (l = n.get(t)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), n.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = ca(n.href);
          var u = Ml(i).hoistableStyles,
            f = u.get(e);
          if (
            (f ||
              ((i = i.ownerDocument || i),
              (f = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, f),
              (u = i.querySelector(hi(e))) && !u._p && ((f.instance = u), (f.state.loading = 5)),
              Lt.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Lt.set(e, n),
                u || R0(i, e, n, f.state))),
            t && l === null)
          )
            throw Error(c(528, ''));
          return f;
        }
        if (t && l !== null) throw Error(c(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = ra(n)),
              (n = Ml(i).hoistableScripts),
              (l = n.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function ca(e) {
    return 'href="' + _t(e) + '"';
  }
  function hi(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function ah(e) {
    return b({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function R0(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        it(t, 'link', n),
        Fe(t),
        e.head.appendChild(t));
  }
  function ra(e) {
    return '[src="' + _t(e) + '"]';
  }
  function vi(e) {
    return 'script[async]' + e;
  }
  function ih(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + _t(n.href) + '"]');
          if (l) return (t.instance = l), Fe(l), l;
          var i = b({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Fe(l),
            it(l, 'style', i),
            Uu(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          i = ca(n.href);
          var u = e.querySelector(hi(i));
          if (u) return (t.state.loading |= 4), (t.instance = u), Fe(u), u;
          (l = ah(n)),
            (i = Lt.get(i)) && wr(l, i),
            (u = (e.ownerDocument || e).createElement('link')),
            Fe(u);
          var f = u;
          return (
            (f._p = new Promise(function (h, S) {
              (f.onload = h), (f.onerror = S);
            })),
            it(u, 'link', l),
            (t.state.loading |= 4),
            Uu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = ra(n.src)),
            (i = e.querySelector(vi(u)))
              ? ((t.instance = i), Fe(i), i)
              : ((l = n),
                (i = Lt.get(u)) && ((l = b({}, n)), Ar(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                Fe(i),
                it(i, 'link', l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case 'void':
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Uu(l, n.precedence, e));
    return t.instance;
  }
  function Uu(e, t, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        i = l.length ? l[l.length - 1] : null,
        u = i,
        f = 0;
      f < l.length;
      f++
    ) {
      var h = l[f];
      if (h.dataset.precedence === t) u = h;
      else if (u !== i) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function wr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Ar(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var ju = null;
  function uh(e, t, n) {
    if (ju === null) {
      var l = new Map(),
        i = (ju = new Map());
      i.set(n, l);
    } else (i = ju), (l = i.get(n)), l || ((l = new Map()), i.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (
        !(u[Ma] || u[ot] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var f = u.getAttribute(t) || '';
        f = e + f;
        var h = l.get(f);
        h ? h.push(u) : l.set(f, [u]);
      }
    }
    return l;
  }
  function oh(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null);
  }
  function O0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (e = t.disabled), typeof t.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function ch(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var gi = null;
  function M0() {}
  function C0(e, t, n) {
    if (gi === null) throw Error(c(475));
    var l = gi;
    if (
      t.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = ca(n.href),
          u = e.querySelector(hi(i));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = Hu.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = u),
            Fe(u);
          return;
        }
        (u = e.ownerDocument || e),
          (n = ah(n)),
          (i = Lt.get(i)) && wr(n, i),
          (u = u.createElement('link')),
          Fe(u);
        var f = u;
        (f._p = new Promise(function (h, S) {
          (f.onload = h), (f.onerror = S);
        })),
          it(u, 'link', n),
          (t.instance = u);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Hu.bind(l)),
          e.addEventListener('load', t),
          e.addEventListener('error', t));
    }
  }
  function N0() {
    if (gi === null) throw Error(c(475));
    var e = gi;
    return (
      e.stylesheets && e.count === 0 && Tr(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Tr(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Hu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Tr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Bu = null;
  function Tr(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Bu = new Map()), t.forEach(_0, e), (Bu = null), Hu.call(e));
  }
  function _0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Bu.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Bu.set(e, n);
        for (
          var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < i.length;
          u++
        ) {
          var f = i[u];
          (f.nodeName === 'LINK' || f.getAttribute('media') !== 'not all') &&
            (n.set(f.dataset.precedence, f), (l = f));
        }
        l && n.set(null, l);
      }
      (i = t.instance),
        (f = i.getAttribute('data-precedence')),
        (u = n.get(f) || l),
        u === l && n.set(null, i),
        n.set(f, i),
        this.count++,
        (l = Hu.bind(this)),
        i.addEventListener('load', l),
        i.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(i, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var pi = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: j,
    _currentValue2: j,
    _threadCount: 0,
  };
  function D0(e, t, n, l, i, u, f, h) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = xo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xo(0)),
      (this.hiddenUpdates = xo(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function rh(e, t, n, l, i, u, f, h, S, C, Y, X) {
    return (
      (e = new D0(e, t, n, f, h, S, C, X)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Et(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = uc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      sc(u),
      e
    );
  }
  function sh(e) {
    return e ? ((e = Yl), e) : Yl;
  }
  function fh(e, t, n, l, i, u) {
    (i = sh(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = Rn(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = On(e, l, t)),
      n !== null && (Ot(n, e, t), Ka(n, e, t));
  }
  function dh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Rr(e, t) {
    dh(e, t), (e = e.alternate) && dh(e, t);
  }
  function mh(e) {
    if (e.tag === 13) {
      var t = ql(e, 67108864);
      t !== null && Ot(t, e, 67108864), Rr(e, 67108864);
    }
  }
  var Lu = !0;
  function z0(e, t, n, l) {
    var i = O.T;
    O.T = null;
    var u = Q.p;
    try {
      (Q.p = 2), Or(e, t, n, l);
    } finally {
      (Q.p = u), (O.T = i);
    }
  }
  function U0(e, t, n, l) {
    var i = O.T;
    O.T = null;
    var u = Q.p;
    try {
      (Q.p = 8), Or(e, t, n, l);
    } finally {
      (Q.p = u), (O.T = i);
    }
  }
  function Or(e, t, n, l) {
    if (Lu) {
      var i = Mr(l);
      if (i === null) hr(e, t, l, qu, n), vh(e, l);
      else if (H0(i, e, t, n, l)) l.stopPropagation();
      else if ((vh(e, l), t & 4 && -1 < j0.indexOf(e))) {
        for (; i !== null; ) {
          var u = Ol(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var f = tl(u.pendingLanes);
                  if (f !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - St(f));
                      (h.entanglements[1] |= S), (f &= ~S);
                    }
                    Pt(u), (_e & 6) === 0 && ((Eu = ut() + 500), si(0));
                  }
                }
                break;
              case 13:
                (h = ql(u, 2)), h !== null && Ot(h, u, 2), Au(), Rr(u, 2);
            }
          if (((u = Mr(l)), u === null && hr(e, t, l, qu, n), u === i)) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else hr(e, t, l, null, n);
    }
  }
  function Mr(e) {
    return (e = zo(e)), Cr(e);
  }
  var qu = null;
  function Cr(e) {
    if (((qu = null), (e = Rl(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (qu = e), null;
  }
  function hh(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (So()) {
          case el:
            return 2;
          case Ms:
            return 8;
          case _i:
          case xp:
            return 32;
          case Cs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nr = !1,
    Yn = null,
    Gn = null,
    Vn = null,
    yi = new Map(),
    bi = new Map(),
    kn = [],
    j0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function vh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Yn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Gn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Vn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        yi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        bi.delete(t.pointerId);
    }
  }
  function Si(e, t, n, l, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = Ol(t)), t !== null && mh(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function H0(e, t, n, l, i) {
    switch (t) {
      case 'focusin':
        return (Yn = Si(Yn, e, t, n, l, i)), !0;
      case 'dragenter':
        return (Gn = Si(Gn, e, t, n, l, i)), !0;
      case 'mouseover':
        return (Vn = Si(Vn, e, t, n, l, i)), !0;
      case 'pointerover':
        var u = i.pointerId;
        return yi.set(u, Si(yi.get(u) || null, e, t, n, l, i)), !0;
      case 'gotpointercapture':
        return (u = i.pointerId), bi.set(u, Si(bi.get(u) || null, e, t, n, l, i)), !0;
    }
    return !1;
  }
  function gh(e) {
    var t = Rl(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = m(n)), t !== null)) {
            (e.blockedOn = t),
              Cp(e.priority, function () {
                if (n.tag === 13) {
                  var l = Rt();
                  l = Eo(l);
                  var i = ql(n, l);
                  i !== null && Ot(i, n, l), Rr(n, l);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Mr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Do = l), n.target.dispatchEvent(l), (Do = null);
      } else return (t = Ol(n)), t !== null && mh(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ph(e, t, n) {
    Yu(e) && n.delete(t);
  }
  function B0() {
    (Nr = !1),
      Yn !== null && Yu(Yn) && (Yn = null),
      Gn !== null && Yu(Gn) && (Gn = null),
      Vn !== null && Yu(Vn) && (Vn = null),
      yi.forEach(ph),
      bi.forEach(ph);
  }
  function Gu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Nr || ((Nr = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, B0)));
  }
  var Vu = null;
  function yh(e) {
    Vu !== e &&
      ((Vu = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Vu === e && (Vu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != 'function') {
            if (Cr(l || n) === null) continue;
            break;
          }
          var u = Ol(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Cc(u, { pending: !0, data: i, method: n.method, action: l }, l, i));
        }
      }));
  }
  function xi(e) {
    function t(S) {
      return Gu(S, e);
    }
    Yn !== null && Gu(Yn, e),
      Gn !== null && Gu(Gn, e),
      Vn !== null && Gu(Vn, e),
      yi.forEach(t),
      bi.forEach(t);
    for (var n = 0; n < kn.length; n++) {
      var l = kn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
      gh(n), n.blockedOn === null && kn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var i = n[l],
          u = n[l + 1],
          f = i[mt] || null;
        if (typeof u == 'function') f || yh(n);
        else if (f) {
          var h = null;
          if (u && u.hasAttribute('formAction')) {
            if (((i = u), (f = u[mt] || null))) h = f.formAction;
            else if (Cr(i) !== null) continue;
          } else h = f.action;
          typeof h == 'function' ? (n[l + 1] = h) : (n.splice(l, 3), (l -= 3)), yh(n);
        }
      }
  }
  function _r(e) {
    this._internalRoot = e;
  }
  (ku.prototype.render = _r.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var n = t.current,
        l = Rt();
      fh(n, l, e, t, null, null);
    }),
    (ku.prototype.unmount = _r.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fh(e.current, 2, null, e, null, null), Au(), (t[Tl] = null);
        }
      });
  function ku(e) {
    this._internalRoot = e;
  }
  ku.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Us();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
      kn.splice(n, 0, e), n === 0 && gh(e);
    }
  };
  var bh = o.version;
  if (bh !== '19.1.0') throw Error(c(527, bh, '19.1.0'));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(c(188))
        : ((e = Object.keys(e).join(',')), Error(c(268, e)));
    return (e = p(t)), (e = e !== null ? g(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var L0 = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: O,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xu.isDisabled && Xu.supportsFiber)
      try {
        (Ta = Xu.inject(L0)), (bt = Xu);
      } catch {}
  }
  return (
    (wi.createRoot = function (e, t) {
      if (!s(e)) throw Error(c(299));
      var n = !1,
        l = '',
        i = jd,
        u = Hd,
        f = Bd,
        h = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)),
        (t = rh(e, 1, !1, null, null, n, l, i, u, f, h, null)),
        (e[Tl] = t.current),
        mr(e),
        new _r(t)
      );
    }),
    (wi.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(c(299));
      var l = !1,
        i = '',
        u = jd,
        f = Hd,
        h = Bd,
        S = null,
        C = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 && (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (C = n.formState)),
        (t = rh(e, 1, !0, t, n ?? null, l, i, u, f, h, S, C)),
        (t.context = sh(null)),
        (n = t.current),
        (l = Rt()),
        (l = Eo(l)),
        (i = Rn(l)),
        (i.callback = null),
        On(n, i, l),
        (n = l),
        (t.current.lanes = n),
        Oa(t, n),
        Pt(t),
        (e[Tl] = t.current),
        mr(e),
        new ku(t)
      );
    }),
    (wi.version = '19.1.0'),
    wi
  );
}
var Ch;
function J0() {
  if (Ch) return Ur.exports;
  Ch = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (o) {
        console.error(o);
      }
  }
  return a(), (Ur.exports = K0()), Ur.exports;
}
var W0 = J0();
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P0 = (a) => a.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  $0 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, r, c) => (c ? c.toUpperCase() : r.toLowerCase())),
  Nh = (a) => {
    const o = $0(a);
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  fv = (...a) =>
    a
      .filter((o, r, c) => !!o && o.trim() !== '' && c.indexOf(o) === r)
      .join(' ')
      .trim(),
  F0 = (a) => {
    for (const o in a) if (o.startsWith('aria-') || o === 'role' || o === 'title') return !0;
  };
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var I0 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eb = y.forwardRef(
  (
    {
      color: a = 'currentColor',
      size: o = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: c,
      className: s = '',
      children: d,
      iconNode: m,
      ...v
    },
    p
  ) =>
    y.createElement(
      'svg',
      {
        ref: p,
        ...I0,
        width: o,
        height: o,
        stroke: a,
        strokeWidth: c ? (Number(r) * 24) / Number(o) : r,
        className: fv('lucide', s),
        ...(!d && !F0(v) && { 'aria-hidden': 'true' }),
        ...v,
      },
      [...m.map(([g, b]) => y.createElement(g, b)), ...(Array.isArray(d) ? d : [d])]
    )
);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mi = (a, o) => {
  const r = y.forwardRef(({ className: c, ...s }, d) =>
    y.createElement(eb, {
      ref: d,
      iconNode: o,
      className: fv(`lucide-${P0(Nh(a))}`, `lucide-${a}`, c),
      ...s,
    })
  );
  return (r.displayName = Nh(a)), r;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tb = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  nb = Mi('check', tb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lb = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  dv = Mi('chevron-down', lb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ab = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
  ib = Mi('chevron-up', ab);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ub = [
    ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
    ['line', { x1: '4', x2: '20', y1: '6', y2: '6', key: '1owob3' }],
    ['line', { x1: '4', x2: '20', y1: '18', y2: '18', key: 'yk5zj1' }],
  ],
  ob = Mi('menu', ub);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cb = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  rb = Mi('x', cb);
function _h(a, o) {
  if (typeof a == 'function') return a(o);
  a != null && (a.current = o);
}
function mv(...a) {
  return (o) => {
    let r = !1;
    const c = a.map((s) => {
      const d = _h(s, o);
      return !r && typeof d == 'function' && (r = !0), d;
    });
    if (r)
      return () => {
        for (let s = 0; s < c.length; s++) {
          const d = c[s];
          typeof d == 'function' ? d() : _h(a[s], null);
        }
      };
  };
}
function Ze(...a) {
  return y.useCallback(mv(...a), a);
}
function ya(a) {
  const o = fb(a),
    r = y.forwardRef((c, s) => {
      const { children: d, ...m } = c,
        v = y.Children.toArray(d),
        p = v.find(mb);
      if (p) {
        const g = p.props.children,
          b = v.map((w) =>
            w === p
              ? y.Children.count(g) > 1
                ? y.Children.only(null)
                : y.isValidElement(g)
                  ? g.props.children
                  : null
              : w
          );
        return N.jsx(o, {
          ...m,
          ref: s,
          children: y.isValidElement(g) ? y.cloneElement(g, void 0, b) : null,
        });
      }
      return N.jsx(o, { ...m, ref: s, children: d });
    });
  return (r.displayName = `${a}.Slot`), r;
}
var sb = ya('Slot');
function fb(a) {
  const o = y.forwardRef((r, c) => {
    const { children: s, ...d } = r;
    if (y.isValidElement(s)) {
      const m = vb(s),
        v = hb(d, s.props);
      return s.type !== y.Fragment && (v.ref = c ? mv(c, m) : m), y.cloneElement(s, v);
    }
    return y.Children.count(s) > 1 ? y.Children.only(null) : null;
  });
  return (o.displayName = `${a}.SlotClone`), o;
}
var db = Symbol('radix.slottable');
function mb(a) {
  return (
    y.isValidElement(a) &&
    typeof a.type == 'function' &&
    '__radixId' in a.type &&
    a.type.__radixId === db
  );
}
function hb(a, o) {
  const r = { ...o };
  for (const c in o) {
    const s = a[c],
      d = o[c];
    /^on[A-Z]/.test(c)
      ? s && d
        ? (r[c] = (...v) => {
            d(...v), s(...v);
          })
        : s && (r[c] = s)
      : c === 'style'
        ? (r[c] = { ...s, ...d })
        : c === 'className' && (r[c] = [s, d].filter(Boolean).join(' '));
  }
  return { ...a, ...r };
}
function vb(a) {
  var c, s;
  let o = (c = Object.getOwnPropertyDescriptor(a.props, 'ref')) == null ? void 0 : c.get,
    r = o && 'isReactWarning' in o && o.isReactWarning;
  return r
    ? a.ref
    : ((o = (s = Object.getOwnPropertyDescriptor(a, 'ref')) == null ? void 0 : s.get),
      (r = o && 'isReactWarning' in o && o.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
function hv(a) {
  var o,
    r,
    c = '';
  if (typeof a == 'string' || typeof a == 'number') c += a;
  else if (typeof a == 'object')
    if (Array.isArray(a)) {
      var s = a.length;
      for (o = 0; o < s; o++) a[o] && (r = hv(a[o])) && (c && (c += ' '), (c += r));
    } else for (r in a) a[r] && (c && (c += ' '), (c += r));
  return c;
}
function vv() {
  for (var a, o, r = 0, c = '', s = arguments.length; r < s; r++)
    (a = arguments[r]) && (o = hv(a)) && (c && (c += ' '), (c += o));
  return c;
}
const Dh = (a) => (typeof a == 'boolean' ? `${a}` : a === 0 ? '0' : a),
  zh = vv,
  gv = (a, o) => (r) => {
    var c;
    if ((o == null ? void 0 : o.variants) == null)
      return zh(a, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const { variants: s, defaultVariants: d } = o,
      m = Object.keys(s).map((g) => {
        const b = r == null ? void 0 : r[g],
          w = d == null ? void 0 : d[g];
        if (b === null) return null;
        const R = Dh(b) || Dh(w);
        return s[g][R];
      }),
      v =
        r &&
        Object.entries(r).reduce((g, b) => {
          let [w, R] = b;
          return R === void 0 || (g[w] = R), g;
        }, {}),
      p =
        o == null || (c = o.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((g, b) => {
              let { class: w, className: R, ...D } = b;
              return Object.entries(D).every((H) => {
                let [E, _] = H;
                return Array.isArray(_) ? _.includes({ ...d, ...v }[E]) : { ...d, ...v }[E] === _;
              })
                ? [...g, w, R]
                : g;
            }, []);
    return zh(a, m, p, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  },
  ss = '-',
  gb = (a) => {
    const o = yb(a),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: c } = a;
    return {
      getClassGroupId: (m) => {
        const v = m.split(ss);
        return v[0] === '' && v.length !== 1 && v.shift(), pv(v, o) || pb(m);
      },
      getConflictingClassGroupIds: (m, v) => {
        const p = r[m] || [];
        return v && c[m] ? [...p, ...c[m]] : p;
      },
    };
  },
  pv = (a, o) => {
    var m;
    if (a.length === 0) return o.classGroupId;
    const r = a[0],
      c = o.nextPart.get(r),
      s = c ? pv(a.slice(1), c) : void 0;
    if (s) return s;
    if (o.validators.length === 0) return;
    const d = a.join(ss);
    return (m = o.validators.find(({ validator: v }) => v(d))) == null ? void 0 : m.classGroupId;
  },
  Uh = /^\[(.+)\]$/,
  pb = (a) => {
    if (Uh.test(a)) {
      const o = Uh.exec(a)[1],
        r = o == null ? void 0 : o.substring(0, o.indexOf(':'));
      if (r) return 'arbitrary..' + r;
    }
  },
  yb = (a) => {
    const { theme: o, classGroups: r } = a,
      c = { nextPart: new Map(), validators: [] };
    for (const s in r) Wr(r[s], c, s, o);
    return c;
  },
  Wr = (a, o, r, c) => {
    a.forEach((s) => {
      if (typeof s == 'string') {
        const d = s === '' ? o : jh(o, s);
        d.classGroupId = r;
        return;
      }
      if (typeof s == 'function') {
        if (bb(s)) {
          Wr(s(c), o, r, c);
          return;
        }
        o.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([d, m]) => {
        Wr(m, jh(o, d), r, c);
      });
    });
  },
  jh = (a, o) => {
    let r = a;
    return (
      o.split(ss).forEach((c) => {
        r.nextPart.has(c) || r.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(c));
      }),
      r
    );
  },
  bb = (a) => a.isThemeGetter,
  Sb = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      r = new Map(),
      c = new Map();
    const s = (d, m) => {
      r.set(d, m), o++, o > a && ((o = 0), (c = r), (r = new Map()));
    };
    return {
      get(d) {
        let m = r.get(d);
        if (m !== void 0) return m;
        if ((m = c.get(d)) !== void 0) return s(d, m), m;
      },
      set(d, m) {
        r.has(d) ? r.set(d, m) : s(d, m);
      },
    };
  },
  Pr = '!',
  $r = ':',
  xb = $r.length,
  Eb = (a) => {
    const { prefix: o, experimentalParseClassName: r } = a;
    let c = (s) => {
      const d = [];
      let m = 0,
        v = 0,
        p = 0,
        g;
      for (let H = 0; H < s.length; H++) {
        let E = s[H];
        if (m === 0 && v === 0) {
          if (E === $r) {
            d.push(s.slice(p, H)), (p = H + xb);
            continue;
          }
          if (E === '/') {
            g = H;
            continue;
          }
        }
        E === '[' ? m++ : E === ']' ? m-- : E === '(' ? v++ : E === ')' && v--;
      }
      const b = d.length === 0 ? s : s.substring(p),
        w = wb(b),
        R = w !== b,
        D = g && g > p ? g - p : void 0;
      return {
        modifiers: d,
        hasImportantModifier: R,
        baseClassName: w,
        maybePostfixModifierPosition: D,
      };
    };
    if (o) {
      const s = o + $r,
        d = c;
      c = (m) =>
        m.startsWith(s)
          ? d(m.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: m,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const s = c;
      c = (d) => r({ className: d, parseClassName: s });
    }
    return c;
  },
  wb = (a) =>
    a.endsWith(Pr) ? a.substring(0, a.length - 1) : a.startsWith(Pr) ? a.substring(1) : a,
  Ab = (a) => {
    const o = Object.fromEntries(a.orderSensitiveModifiers.map((c) => [c, !0]));
    return (c) => {
      if (c.length <= 1) return c;
      const s = [];
      let d = [];
      return (
        c.forEach((m) => {
          m[0] === '[' || o[m] ? (s.push(...d.sort(), m), (d = [])) : d.push(m);
        }),
        s.push(...d.sort()),
        s
      );
    };
  },
  Tb = (a) => ({ cache: Sb(a.cacheSize), parseClassName: Eb(a), sortModifiers: Ab(a), ...gb(a) }),
  Rb = /\s+/,
  Ob = (a, o) => {
    const {
        parseClassName: r,
        getClassGroupId: c,
        getConflictingClassGroupIds: s,
        sortModifiers: d,
      } = o,
      m = [],
      v = a.trim().split(Rb);
    let p = '';
    for (let g = v.length - 1; g >= 0; g -= 1) {
      const b = v[g],
        {
          isExternal: w,
          modifiers: R,
          hasImportantModifier: D,
          baseClassName: H,
          maybePostfixModifierPosition: E,
        } = r(b);
      if (w) {
        p = b + (p.length > 0 ? ' ' + p : p);
        continue;
      }
      let _ = !!E,
        q = c(_ ? H.substring(0, E) : H);
      if (!q) {
        if (!_) {
          p = b + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        if (((q = c(H)), !q)) {
          p = b + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        _ = !1;
      }
      const L = d(R).join(':'),
        B = D ? L + Pr : L,
        Z = B + q;
      if (m.includes(Z)) continue;
      m.push(Z);
      const k = s(q, _);
      for (let I = 0; I < k.length; ++I) {
        const W = k[I];
        m.push(B + W);
      }
      p = b + (p.length > 0 ? ' ' + p : p);
    }
    return p;
  };
function Mb() {
  let a = 0,
    o,
    r,
    c = '';
  for (; a < arguments.length; ) (o = arguments[a++]) && (r = yv(o)) && (c && (c += ' '), (c += r));
  return c;
}
const yv = (a) => {
  if (typeof a == 'string') return a;
  let o,
    r = '';
  for (let c = 0; c < a.length; c++) a[c] && (o = yv(a[c])) && (r && (r += ' '), (r += o));
  return r;
};
function Cb(a, ...o) {
  let r,
    c,
    s,
    d = m;
  function m(p) {
    const g = o.reduce((b, w) => w(b), a());
    return (r = Tb(g)), (c = r.cache.get), (s = r.cache.set), (d = v), v(p);
  }
  function v(p) {
    const g = c(p);
    if (g) return g;
    const b = Ob(p, r);
    return s(p, b), b;
  }
  return function () {
    return d(Mb.apply(null, arguments));
  };
}
const $e = (a) => {
    const o = (r) => r[a] || [];
    return (o.isThemeGetter = !0), o;
  },
  bv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Sv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Nb = /^\d+\/\d+$/,
  _b = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Db =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  zb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Ub = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  jb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  sa = (a) => Nb.test(a),
  be = (a) => !!a && !Number.isNaN(Number(a)),
  Qn = (a) => !!a && Number.isInteger(Number(a)),
  Lr = (a) => a.endsWith('%') && be(a.slice(0, -1)),
  yn = (a) => _b.test(a),
  Hb = () => !0,
  Bb = (a) => Db.test(a) && !zb.test(a),
  xv = () => !1,
  Lb = (a) => Ub.test(a),
  qb = (a) => jb.test(a),
  Yb = (a) => !te(a) && !ne(a),
  Gb = (a) => Sa(a, Av, xv),
  te = (a) => bv.test(a),
  bl = (a) => Sa(a, Tv, Bb),
  qr = (a) => Sa(a, Zb, be),
  Hh = (a) => Sa(a, Ev, xv),
  Vb = (a) => Sa(a, wv, qb),
  Qu = (a) => Sa(a, Rv, Lb),
  ne = (a) => Sv.test(a),
  Ai = (a) => xa(a, Tv),
  kb = (a) => xa(a, Kb),
  Bh = (a) => xa(a, Ev),
  Xb = (a) => xa(a, Av),
  Qb = (a) => xa(a, wv),
  Zu = (a) => xa(a, Rv, !0),
  Sa = (a, o, r) => {
    const c = bv.exec(a);
    return c ? (c[1] ? o(c[1]) : r(c[2])) : !1;
  },
  xa = (a, o, r = !1) => {
    const c = Sv.exec(a);
    return c ? (c[1] ? o(c[1]) : r) : !1;
  },
  Ev = (a) => a === 'position' || a === 'percentage',
  wv = (a) => a === 'image' || a === 'url',
  Av = (a) => a === 'length' || a === 'size' || a === 'bg-size',
  Tv = (a) => a === 'length',
  Zb = (a) => a === 'number',
  Kb = (a) => a === 'family-name',
  Rv = (a) => a === 'shadow',
  Jb = () => {
    const a = $e('color'),
      o = $e('font'),
      r = $e('text'),
      c = $e('font-weight'),
      s = $e('tracking'),
      d = $e('leading'),
      m = $e('breakpoint'),
      v = $e('container'),
      p = $e('spacing'),
      g = $e('radius'),
      b = $e('shadow'),
      w = $e('inset-shadow'),
      R = $e('text-shadow'),
      D = $e('drop-shadow'),
      H = $e('blur'),
      E = $e('perspective'),
      _ = $e('aspect'),
      q = $e('ease'),
      L = $e('animate'),
      B = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      Z = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      k = () => [...Z(), ne, te],
      I = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      W = () => ['auto', 'contain', 'none'],
      K = () => [ne, te, p],
      ce = () => [sa, 'full', 'auto', ...K()],
      ge = () => [Qn, 'none', 'subgrid', ne, te],
      Se = () => ['auto', { span: ['full', Qn, ne, te] }, Qn, ne, te],
      fe = () => [Qn, 'auto', ne, te],
      pe = () => ['auto', 'min', 'max', 'fr', ne, te],
      he = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      de = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
      O = () => ['auto', ...K()],
      Q = () => [
        sa,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ...K(),
      ],
      j = () => [a, ne, te],
      ae = () => [...Z(), Bh, Hh, { position: [ne, te] }],
      x = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      V = () => ['auto', 'cover', 'contain', Xb, Gb, { size: [ne, te] }],
      P = () => [Lr, Ai, bl],
      J = () => ['', 'none', 'full', g, ne, te],
      F = () => ['', be, Ai, bl],
      me = () => ['solid', 'dashed', 'dotted', 'double'],
      ie = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      $ = () => [be, Lr, Bh, Hh],
      ue = () => ['', 'none', H, ne, te],
      Ne = () => ['none', be, ne, te],
      Re = () => ['none', be, ne, te],
      Ee = () => [be, ne, te],
      we = () => [sa, 'full', ...K()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [yn],
        breakpoint: [yn],
        color: [Hb],
        container: [yn],
        'drop-shadow': [yn],
        ease: ['in', 'out', 'in-out'],
        font: [Yb],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [yn],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
        radius: [yn],
        shadow: [yn],
        spacing: ['px', be],
        text: [yn],
        'text-shadow': [yn],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', sa, te, ne, _] }],
        container: ['container'],
        columns: [{ columns: [be, te, ne, v] }],
        'break-after': [{ 'break-after': B() }],
        'break-before': [{ 'break-before': B() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: k() }],
        overflow: [{ overflow: I() }],
        'overflow-x': [{ 'overflow-x': I() }],
        'overflow-y': [{ 'overflow-y': I() }],
        overscroll: [{ overscroll: W() }],
        'overscroll-x': [{ 'overscroll-x': W() }],
        'overscroll-y': [{ 'overscroll-y': W() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: ce() }],
        'inset-x': [{ 'inset-x': ce() }],
        'inset-y': [{ 'inset-y': ce() }],
        start: [{ start: ce() }],
        end: [{ end: ce() }],
        top: [{ top: ce() }],
        right: [{ right: ce() }],
        bottom: [{ bottom: ce() }],
        left: [{ left: ce() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Qn, 'auto', ne, te] }],
        basis: [{ basis: [sa, 'full', 'auto', v, ...K()] }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [be, sa, 'auto', 'initial', 'none', te] }],
        grow: [{ grow: ['', be, ne, te] }],
        shrink: [{ shrink: ['', be, ne, te] }],
        order: [{ order: [Qn, 'first', 'last', 'none', ne, te] }],
        'grid-cols': [{ 'grid-cols': ge() }],
        'col-start-end': [{ col: Se() }],
        'col-start': [{ 'col-start': fe() }],
        'col-end': [{ 'col-end': fe() }],
        'grid-rows': [{ 'grid-rows': ge() }],
        'row-start-end': [{ row: Se() }],
        'row-start': [{ 'row-start': fe() }],
        'row-end': [{ 'row-end': fe() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': pe() }],
        'auto-rows': [{ 'auto-rows': pe() }],
        gap: [{ gap: K() }],
        'gap-x': [{ 'gap-x': K() }],
        'gap-y': [{ 'gap-y': K() }],
        'justify-content': [{ justify: [...he(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...de(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...de()] }],
        'align-content': [{ content: ['normal', ...he()] }],
        'align-items': [{ items: [...de(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...de(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': he() }],
        'place-items': [{ 'place-items': [...de(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...de()] }],
        p: [{ p: K() }],
        px: [{ px: K() }],
        py: [{ py: K() }],
        ps: [{ ps: K() }],
        pe: [{ pe: K() }],
        pt: [{ pt: K() }],
        pr: [{ pr: K() }],
        pb: [{ pb: K() }],
        pl: [{ pl: K() }],
        m: [{ m: O() }],
        mx: [{ mx: O() }],
        my: [{ my: O() }],
        ms: [{ ms: O() }],
        me: [{ me: O() }],
        mt: [{ mt: O() }],
        mr: [{ mr: O() }],
        mb: [{ mb: O() }],
        ml: [{ ml: O() }],
        'space-x': [{ 'space-x': K() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': K() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: Q() }],
        w: [{ w: [v, 'screen', ...Q()] }],
        'min-w': [{ 'min-w': [v, 'screen', 'none', ...Q()] }],
        'max-w': [{ 'max-w': [v, 'screen', 'none', 'prose', { screen: [m] }, ...Q()] }],
        h: [{ h: ['screen', ...Q()] }],
        'min-h': [{ 'min-h': ['screen', 'none', ...Q()] }],
        'max-h': [{ 'max-h': ['screen', ...Q()] }],
        'font-size': [{ text: ['base', r, Ai, bl] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [c, ne, qr] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Lr,
              te,
            ],
          },
        ],
        'font-family': [{ font: [kb, te, o] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [s, ne, te] }],
        'line-clamp': [{ 'line-clamp': [be, 'none', ne, qr] }],
        leading: [{ leading: [d, ...K()] }],
        'list-image': [{ 'list-image': ['none', ne, te] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', ne, te] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'placeholder-color': [{ placeholder: j() }],
        'text-color': [{ text: j() }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...me(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: [be, 'from-font', 'auto', ne, bl] }],
        'text-decoration-color': [{ decoration: j() }],
        'underline-offset': [{ 'underline-offset': [be, 'auto', ne, te] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: K() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              ne,
              te,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', ne, te] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: ae() }],
        'bg-repeat': [{ bg: x() }],
        'bg-size': [{ bg: V() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Qn, ne, te],
                radial: ['', ne, te],
                conic: [Qn, ne, te],
              },
              Qb,
              Vb,
            ],
          },
        ],
        'bg-color': [{ bg: j() }],
        'gradient-from-pos': [{ from: P() }],
        'gradient-via-pos': [{ via: P() }],
        'gradient-to-pos': [{ to: P() }],
        'gradient-from': [{ from: j() }],
        'gradient-via': [{ via: j() }],
        'gradient-to': [{ to: j() }],
        rounded: [{ rounded: J() }],
        'rounded-s': [{ 'rounded-s': J() }],
        'rounded-e': [{ 'rounded-e': J() }],
        'rounded-t': [{ 'rounded-t': J() }],
        'rounded-r': [{ 'rounded-r': J() }],
        'rounded-b': [{ 'rounded-b': J() }],
        'rounded-l': [{ 'rounded-l': J() }],
        'rounded-ss': [{ 'rounded-ss': J() }],
        'rounded-se': [{ 'rounded-se': J() }],
        'rounded-ee': [{ 'rounded-ee': J() }],
        'rounded-es': [{ 'rounded-es': J() }],
        'rounded-tl': [{ 'rounded-tl': J() }],
        'rounded-tr': [{ 'rounded-tr': J() }],
        'rounded-br': [{ 'rounded-br': J() }],
        'rounded-bl': [{ 'rounded-bl': J() }],
        'border-w': [{ border: F() }],
        'border-w-x': [{ 'border-x': F() }],
        'border-w-y': [{ 'border-y': F() }],
        'border-w-s': [{ 'border-s': F() }],
        'border-w-e': [{ 'border-e': F() }],
        'border-w-t': [{ 'border-t': F() }],
        'border-w-r': [{ 'border-r': F() }],
        'border-w-b': [{ 'border-b': F() }],
        'border-w-l': [{ 'border-l': F() }],
        'divide-x': [{ 'divide-x': F() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': F() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...me(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...me(), 'hidden', 'none'] }],
        'border-color': [{ border: j() }],
        'border-color-x': [{ 'border-x': j() }],
        'border-color-y': [{ 'border-y': j() }],
        'border-color-s': [{ 'border-s': j() }],
        'border-color-e': [{ 'border-e': j() }],
        'border-color-t': [{ 'border-t': j() }],
        'border-color-r': [{ 'border-r': j() }],
        'border-color-b': [{ 'border-b': j() }],
        'border-color-l': [{ 'border-l': j() }],
        'divide-color': [{ divide: j() }],
        'outline-style': [{ outline: [...me(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [be, ne, te] }],
        'outline-w': [{ outline: ['', be, Ai, bl] }],
        'outline-color': [{ outline: j() }],
        shadow: [{ shadow: ['', 'none', b, Zu, Qu] }],
        'shadow-color': [{ shadow: j() }],
        'inset-shadow': [{ 'inset-shadow': ['none', w, Zu, Qu] }],
        'inset-shadow-color': [{ 'inset-shadow': j() }],
        'ring-w': [{ ring: F() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: j() }],
        'ring-offset-w': [{ 'ring-offset': [be, bl] }],
        'ring-offset-color': [{ 'ring-offset': j() }],
        'inset-ring-w': [{ 'inset-ring': F() }],
        'inset-ring-color': [{ 'inset-ring': j() }],
        'text-shadow': [{ 'text-shadow': ['none', R, Zu, Qu] }],
        'text-shadow-color': [{ 'text-shadow': j() }],
        opacity: [{ opacity: [be, ne, te] }],
        'mix-blend': [{ 'mix-blend': [...ie(), 'plus-darker', 'plus-lighter'] }],
        'bg-blend': [{ 'bg-blend': ie() }],
        'mask-clip': [
          { 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
          'mask-no-clip',
        ],
        'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
        'mask-image-linear-pos': [{ 'mask-linear': [be] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': $() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': $() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': j() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': j() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': $() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': $() }],
        'mask-image-t-from-color': [{ 'mask-t-from': j() }],
        'mask-image-t-to-color': [{ 'mask-t-to': j() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': $() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': $() }],
        'mask-image-r-from-color': [{ 'mask-r-from': j() }],
        'mask-image-r-to-color': [{ 'mask-r-to': j() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': $() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': $() }],
        'mask-image-b-from-color': [{ 'mask-b-from': j() }],
        'mask-image-b-to-color': [{ 'mask-b-to': j() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': $() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': $() }],
        'mask-image-l-from-color': [{ 'mask-l-from': j() }],
        'mask-image-l-to-color': [{ 'mask-l-to': j() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': $() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': $() }],
        'mask-image-x-from-color': [{ 'mask-x-from': j() }],
        'mask-image-x-to-color': [{ 'mask-x-to': j() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': $() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': $() }],
        'mask-image-y-from-color': [{ 'mask-y-from': j() }],
        'mask-image-y-to-color': [{ 'mask-y-to': j() }],
        'mask-image-radial': [{ 'mask-radial': [ne, te] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': $() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': $() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': j() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': j() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          { 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': Z() }],
        'mask-image-conic-pos': [{ 'mask-conic': [be] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': $() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': $() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': j() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': j() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          { 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
        ],
        'mask-position': [{ mask: ae() }],
        'mask-repeat': [{ mask: x() }],
        'mask-size': [{ mask: V() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', ne, te] }],
        filter: [{ filter: ['', 'none', ne, te] }],
        blur: [{ blur: ue() }],
        brightness: [{ brightness: [be, ne, te] }],
        contrast: [{ contrast: [be, ne, te] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', D, Zu, Qu] }],
        'drop-shadow-color': [{ 'drop-shadow': j() }],
        grayscale: [{ grayscale: ['', be, ne, te] }],
        'hue-rotate': [{ 'hue-rotate': [be, ne, te] }],
        invert: [{ invert: ['', be, ne, te] }],
        saturate: [{ saturate: [be, ne, te] }],
        sepia: [{ sepia: ['', be, ne, te] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', ne, te] }],
        'backdrop-blur': [{ 'backdrop-blur': ue() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [be, ne, te] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [be, ne, te] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', be, ne, te] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [be, ne, te] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', be, ne, te] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [be, ne, te] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [be, ne, te] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', be, ne, te] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': K() }],
        'border-spacing-x': [{ 'border-spacing-x': K() }],
        'border-spacing-y': [{ 'border-spacing-y': K() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', ne, te] },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [be, 'initial', ne, te] }],
        ease: [{ ease: ['linear', 'initial', q, ne, te] }],
        delay: [{ delay: [be, ne, te] }],
        animate: [{ animate: ['none', L, ne, te] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [E, ne, te] }],
        'perspective-origin': [{ 'perspective-origin': k() }],
        rotate: [{ rotate: Ne() }],
        'rotate-x': [{ 'rotate-x': Ne() }],
        'rotate-y': [{ 'rotate-y': Ne() }],
        'rotate-z': [{ 'rotate-z': Ne() }],
        scale: [{ scale: Re() }],
        'scale-x': [{ 'scale-x': Re() }],
        'scale-y': [{ 'scale-y': Re() }],
        'scale-z': [{ 'scale-z': Re() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: Ee() }],
        'skew-x': [{ 'skew-x': Ee() }],
        'skew-y': [{ 'skew-y': Ee() }],
        transform: [{ transform: [ne, te, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: k() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: we() }],
        'translate-x': [{ 'translate-x': we() }],
        'translate-y': [{ 'translate-y': we() }],
        'translate-z': [{ 'translate-z': we() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: j() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: j() }],
        'color-scheme': [
          { scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              ne,
              te,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': K() }],
        'scroll-mx': [{ 'scroll-mx': K() }],
        'scroll-my': [{ 'scroll-my': K() }],
        'scroll-ms': [{ 'scroll-ms': K() }],
        'scroll-me': [{ 'scroll-me': K() }],
        'scroll-mt': [{ 'scroll-mt': K() }],
        'scroll-mr': [{ 'scroll-mr': K() }],
        'scroll-mb': [{ 'scroll-mb': K() }],
        'scroll-ml': [{ 'scroll-ml': K() }],
        'scroll-p': [{ 'scroll-p': K() }],
        'scroll-px': [{ 'scroll-px': K() }],
        'scroll-py': [{ 'scroll-py': K() }],
        'scroll-ps': [{ 'scroll-ps': K() }],
        'scroll-pe': [{ 'scroll-pe': K() }],
        'scroll-pt': [{ 'scroll-pt': K() }],
        'scroll-pr': [{ 'scroll-pr': K() }],
        'scroll-pb': [{ 'scroll-pb': K() }],
        'scroll-pl': [{ 'scroll-pl': K() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', ne, te] }],
        fill: [{ fill: ['none', ...j()] }],
        'stroke-w': [{ stroke: [be, Ai, bl, qr] }],
        stroke: [{ stroke: ['none', ...j()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  Wb = Cb(Jb);
function yt(...a) {
  return Wb(vv(a));
}
const Pb = gv(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
          outline:
            'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2',
          sm: 'h-8 rounded-md px-3 text-xs',
          lg: 'h-10 rounded-md px-8',
          icon: 'h-9 w-9',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  ),
  Ov = y.forwardRef(({ className: a, variant: o, size: r, asChild: c = !1, ...s }, d) => {
    const m = c ? sb : 'button';
    return N.jsx(m, { className: yt(Pb({ variant: o, size: r, className: a })), ref: d, ...s });
  });
Ov.displayName = 'Button';
function qe(a, o, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((a == null || a(s), r === !1 || !s.defaultPrevented)) return o == null ? void 0 : o(s);
  };
}
function $b(a, o) {
  const r = y.createContext(o),
    c = (d) => {
      const { children: m, ...v } = d,
        p = y.useMemo(() => v, Object.values(v));
      return N.jsx(r.Provider, { value: p, children: m });
    };
  c.displayName = a + 'Provider';
  function s(d) {
    const m = y.useContext(r);
    if (m) return m;
    if (o !== void 0) return o;
    throw new Error(`\`${d}\` must be used within \`${a}\``);
  }
  return [c, s];
}
function ro(a, o = []) {
  let r = [];
  function c(d, m) {
    const v = y.createContext(m),
      p = r.length;
    r = [...r, m];
    const g = (w) => {
      var q;
      const { scope: R, children: D, ...H } = w,
        E = ((q = R == null ? void 0 : R[a]) == null ? void 0 : q[p]) || v,
        _ = y.useMemo(() => H, Object.values(H));
      return N.jsx(E.Provider, { value: _, children: D });
    };
    g.displayName = d + 'Provider';
    function b(w, R) {
      var E;
      const D = ((E = R == null ? void 0 : R[a]) == null ? void 0 : E[p]) || v,
        H = y.useContext(D);
      if (H) return H;
      if (m !== void 0) return m;
      throw new Error(`\`${w}\` must be used within \`${d}\``);
    }
    return [g, b];
  }
  const s = () => {
    const d = r.map((m) => y.createContext(m));
    return function (v) {
      const p = (v == null ? void 0 : v[a]) || d;
      return y.useMemo(() => ({ [`__scope${a}`]: { ...v, [a]: p } }), [v, p]);
    };
  };
  return (s.scopeName = a), [c, Fb(s, ...o)];
}
function Fb(...a) {
  const o = a[0];
  if (a.length === 1) return o;
  const r = () => {
    const c = a.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (d) {
      const m = c.reduce((v, { useScope: p, scopeName: g }) => {
        const w = p(d)[`__scope${g}`];
        return { ...v, ...w };
      }, {});
      return y.useMemo(() => ({ [`__scope${o.scopeName}`]: m }), [m]);
    };
  };
  return (r.scopeName = o.scopeName), r;
}
var st = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
  Ib = rv[' useId '.trim().toString()] || (() => {}),
  eS = 0;
function va(a) {
  const [o, r] = y.useState(Ib());
  return (
    st(() => {
      r((c) => c ?? String(eS++));
    }, [a]),
    o ? `radix-${o}` : ''
  );
}
var tS = rv[' useInsertionEffect '.trim().toString()] || st;
function Fr({ prop: a, defaultProp: o, onChange: r = () => {}, caller: c }) {
  const [s, d, m] = nS({ defaultProp: o, onChange: r }),
    v = a !== void 0,
    p = v ? a : s;
  {
    const b = y.useRef(a !== void 0);
    y.useEffect(() => {
      const w = b.current;
      w !== v &&
        console.warn(
          `${c} is changing from ${w ? 'controlled' : 'uncontrolled'} to ${v ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (b.current = v);
    }, [v, c]);
  }
  const g = y.useCallback(
    (b) => {
      var w;
      if (v) {
        const R = lS(b) ? b(a) : b;
        R !== a && ((w = m.current) == null || w.call(m, R));
      } else d(b);
    },
    [v, a, d, m]
  );
  return [p, g];
}
function nS({ defaultProp: a, onChange: o }) {
  const [r, c] = y.useState(a),
    s = y.useRef(r),
    d = y.useRef(o);
  return (
    tS(() => {
      d.current = o;
    }, [o]),
    y.useEffect(() => {
      var m;
      s.current !== r && ((m = d.current) == null || m.call(d, r), (s.current = r));
    }, [r, s]),
    [r, c, d]
  );
}
function lS(a) {
  return typeof a == 'function';
}
var Ci = sv();
const aS = cv(Ci);
var iS = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  Be = iS.reduce((a, o) => {
    const r = ya(`Primitive.${o}`),
      c = y.forwardRef((s, d) => {
        const { asChild: m, ...v } = s,
          p = m ? r : o;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), N.jsx(p, { ...v, ref: d })
        );
      });
    return (c.displayName = `Primitive.${o}`), { ...a, [o]: c };
  }, {});
function uS(a, o) {
  a && Ci.flushSync(() => a.dispatchEvent(o));
}
function Sl(a) {
  const o = y.useRef(a);
  return (
    y.useEffect(() => {
      o.current = a;
    }),
    y.useMemo(
      () =>
        (...r) => {
          var c;
          return (c = o.current) == null ? void 0 : c.call(o, ...r);
        },
      []
    )
  );
}
function oS(a, o = globalThis == null ? void 0 : globalThis.document) {
  const r = Sl(a);
  y.useEffect(() => {
    const c = (s) => {
      s.key === 'Escape' && r(s);
    };
    return (
      o.addEventListener('keydown', c, { capture: !0 }),
      () => o.removeEventListener('keydown', c, { capture: !0 })
    );
  }, [r, o]);
}
var cS = 'DismissableLayer',
  Ir = 'dismissableLayer.update',
  rS = 'dismissableLayer.pointerDownOutside',
  sS = 'dismissableLayer.focusOutside',
  Lh,
  Mv = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  fs = y.forwardRef((a, o) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: s,
        onFocusOutside: d,
        onInteractOutside: m,
        onDismiss: v,
        ...p
      } = a,
      g = y.useContext(Mv),
      [b, w] = y.useState(null),
      R =
        (b == null ? void 0 : b.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, D] = y.useState({}),
      H = Ze(o, (W) => w(W)),
      E = Array.from(g.layers),
      [_] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      q = E.indexOf(_),
      L = b ? E.indexOf(b) : -1,
      B = g.layersWithOutsidePointerEventsDisabled.size > 0,
      Z = L >= q,
      k = mS((W) => {
        const K = W.target,
          ce = [...g.branches].some((ge) => ge.contains(K));
        !Z || ce || (s == null || s(W), m == null || m(W), W.defaultPrevented || v == null || v());
      }, R),
      I = hS((W) => {
        const K = W.target;
        [...g.branches].some((ge) => ge.contains(K)) ||
          (d == null || d(W), m == null || m(W), W.defaultPrevented || v == null || v());
      }, R);
    return (
      oS((W) => {
        L === g.layers.size - 1 &&
          (c == null || c(W), !W.defaultPrevented && v && (W.preventDefault(), v()));
      }, R),
      y.useEffect(() => {
        if (b)
          return (
            r &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Lh = R.body.style.pointerEvents), (R.body.style.pointerEvents = 'none')),
              g.layersWithOutsidePointerEventsDisabled.add(b)),
            g.layers.add(b),
            qh(),
            () => {
              r &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (R.body.style.pointerEvents = Lh);
            }
          );
      }, [b, R, r, g]),
      y.useEffect(
        () => () => {
          b && (g.layers.delete(b), g.layersWithOutsidePointerEventsDisabled.delete(b), qh());
        },
        [b, g]
      ),
      y.useEffect(() => {
        const W = () => D({});
        return document.addEventListener(Ir, W), () => document.removeEventListener(Ir, W);
      }, []),
      N.jsx(Be.div, {
        ...p,
        ref: H,
        style: { pointerEvents: B ? (Z ? 'auto' : 'none') : void 0, ...a.style },
        onFocusCapture: qe(a.onFocusCapture, I.onFocusCapture),
        onBlurCapture: qe(a.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: qe(a.onPointerDownCapture, k.onPointerDownCapture),
      })
    );
  });
fs.displayName = cS;
var fS = 'DismissableLayerBranch',
  dS = y.forwardRef((a, o) => {
    const r = y.useContext(Mv),
      c = y.useRef(null),
      s = Ze(o, c);
    return (
      y.useEffect(() => {
        const d = c.current;
        if (d)
          return (
            r.branches.add(d),
            () => {
              r.branches.delete(d);
            }
          );
      }, [r.branches]),
      N.jsx(Be.div, { ...a, ref: s })
    );
  });
dS.displayName = fS;
function mS(a, o = globalThis == null ? void 0 : globalThis.document) {
  const r = Sl(a),
    c = y.useRef(!1),
    s = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const d = (v) => {
          if (v.target && !c.current) {
            let p = function () {
              Cv(rS, r, g, { discrete: !0 });
            };
            const g = { originalEvent: v };
            v.pointerType === 'touch'
              ? (o.removeEventListener('click', s.current),
                (s.current = p),
                o.addEventListener('click', s.current, { once: !0 }))
              : p();
          } else o.removeEventListener('click', s.current);
          c.current = !1;
        },
        m = window.setTimeout(() => {
          o.addEventListener('pointerdown', d);
        }, 0);
      return () => {
        window.clearTimeout(m),
          o.removeEventListener('pointerdown', d),
          o.removeEventListener('click', s.current);
      };
    }, [o, r]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function hS(a, o = globalThis == null ? void 0 : globalThis.document) {
  const r = Sl(a),
    c = y.useRef(!1);
  return (
    y.useEffect(() => {
      const s = (d) => {
        d.target && !c.current && Cv(sS, r, { originalEvent: d }, { discrete: !1 });
      };
      return o.addEventListener('focusin', s), () => o.removeEventListener('focusin', s);
    }, [o, r]),
    { onFocusCapture: () => (c.current = !0), onBlurCapture: () => (c.current = !1) }
  );
}
function qh() {
  const a = new CustomEvent(Ir);
  document.dispatchEvent(a);
}
function Cv(a, o, r, { discrete: c }) {
  const s = r.originalEvent.target,
    d = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: r });
  o && s.addEventListener(a, o, { once: !0 }), c ? uS(s, d) : s.dispatchEvent(d);
}
var Yr = 'focusScope.autoFocusOnMount',
  Gr = 'focusScope.autoFocusOnUnmount',
  Yh = { bubbles: !1, cancelable: !0 },
  vS = 'FocusScope',
  ds = y.forwardRef((a, o) => {
    const { loop: r = !1, trapped: c = !1, onMountAutoFocus: s, onUnmountAutoFocus: d, ...m } = a,
      [v, p] = y.useState(null),
      g = Sl(s),
      b = Sl(d),
      w = y.useRef(null),
      R = Ze(o, (E) => p(E)),
      D = y.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    y.useEffect(() => {
      if (c) {
        let E = function (B) {
            if (D.paused || !v) return;
            const Z = B.target;
            v.contains(Z) ? (w.current = Z) : Zn(w.current, { select: !0 });
          },
          _ = function (B) {
            if (D.paused || !v) return;
            const Z = B.relatedTarget;
            Z !== null && (v.contains(Z) || Zn(w.current, { select: !0 }));
          },
          q = function (B) {
            if (document.activeElement === document.body)
              for (const k of B) k.removedNodes.length > 0 && Zn(v);
          };
        document.addEventListener('focusin', E), document.addEventListener('focusout', _);
        const L = new MutationObserver(q);
        return (
          v && L.observe(v, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', E),
              document.removeEventListener('focusout', _),
              L.disconnect();
          }
        );
      }
    }, [c, v, D.paused]),
      y.useEffect(() => {
        if (v) {
          Vh.add(D);
          const E = document.activeElement;
          if (!v.contains(E)) {
            const q = new CustomEvent(Yr, Yh);
            v.addEventListener(Yr, g),
              v.dispatchEvent(q),
              q.defaultPrevented ||
                (gS(xS(Nv(v)), { select: !0 }), document.activeElement === E && Zn(v));
          }
          return () => {
            v.removeEventListener(Yr, g),
              setTimeout(() => {
                const q = new CustomEvent(Gr, Yh);
                v.addEventListener(Gr, b),
                  v.dispatchEvent(q),
                  q.defaultPrevented || Zn(E ?? document.body, { select: !0 }),
                  v.removeEventListener(Gr, b),
                  Vh.remove(D);
              }, 0);
          };
        }
      }, [v, g, b, D]);
    const H = y.useCallback(
      (E) => {
        if ((!r && !c) || D.paused) return;
        const _ = E.key === 'Tab' && !E.altKey && !E.ctrlKey && !E.metaKey,
          q = document.activeElement;
        if (_ && q) {
          const L = E.currentTarget,
            [B, Z] = pS(L);
          B && Z
            ? !E.shiftKey && q === Z
              ? (E.preventDefault(), r && Zn(B, { select: !0 }))
              : E.shiftKey && q === B && (E.preventDefault(), r && Zn(Z, { select: !0 }))
            : q === L && E.preventDefault();
        }
      },
      [r, c, D.paused]
    );
    return N.jsx(Be.div, { tabIndex: -1, ...m, ref: R, onKeyDown: H });
  });
ds.displayName = vS;
function gS(a, { select: o = !1 } = {}) {
  const r = document.activeElement;
  for (const c of a) if ((Zn(c, { select: o }), document.activeElement !== r)) return;
}
function pS(a) {
  const o = Nv(a),
    r = Gh(o, a),
    c = Gh(o.reverse(), a);
  return [r, c];
}
function Nv(a) {
  const o = [],
    r = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (c) => {
        const s = c.tagName === 'INPUT' && c.type === 'hidden';
        return c.disabled || c.hidden || s
          ? NodeFilter.FILTER_SKIP
          : c.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) o.push(r.currentNode);
  return o;
}
function Gh(a, o) {
  for (const r of a) if (!yS(r, { upTo: o })) return r;
}
function yS(a, { upTo: o }) {
  if (getComputedStyle(a).visibility === 'hidden') return !0;
  for (; a; ) {
    if (o !== void 0 && a === o) return !1;
    if (getComputedStyle(a).display === 'none') return !0;
    a = a.parentElement;
  }
  return !1;
}
function bS(a) {
  return a instanceof HTMLInputElement && 'select' in a;
}
function Zn(a, { select: o = !1 } = {}) {
  if (a && a.focus) {
    const r = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== r && bS(a) && o && a.select();
  }
}
var Vh = SS();
function SS() {
  let a = [];
  return {
    add(o) {
      const r = a[0];
      o !== r && (r == null || r.pause()), (a = kh(a, o)), a.unshift(o);
    },
    remove(o) {
      var r;
      (a = kh(a, o)), (r = a[0]) == null || r.resume();
    },
  };
}
function kh(a, o) {
  const r = [...a],
    c = r.indexOf(o);
  return c !== -1 && r.splice(c, 1), r;
}
function xS(a) {
  return a.filter((o) => o.tagName !== 'A');
}
var ES = 'Portal',
  ms = y.forwardRef((a, o) => {
    var v;
    const { container: r, ...c } = a,
      [s, d] = y.useState(!1);
    st(() => d(!0), []);
    const m =
      r ||
      (s && ((v = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : v.body));
    return m ? aS.createPortal(N.jsx(Be.div, { ...c, ref: o }), m) : null;
  });
ms.displayName = ES;
function wS(a, o) {
  return y.useReducer((r, c) => o[r][c] ?? r, a);
}
var so = (a) => {
  const { present: o, children: r } = a,
    c = AS(o),
    s = typeof r == 'function' ? r({ present: c.isPresent }) : y.Children.only(r),
    d = Ze(c.ref, TS(s));
  return typeof r == 'function' || c.isPresent ? y.cloneElement(s, { ref: d }) : null;
};
so.displayName = 'Presence';
function AS(a) {
  const [o, r] = y.useState(),
    c = y.useRef(null),
    s = y.useRef(a),
    d = y.useRef('none'),
    m = a ? 'mounted' : 'unmounted',
    [v, p] = wS(m, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    y.useEffect(() => {
      const g = Ku(c.current);
      d.current = v === 'mounted' ? g : 'none';
    }, [v]),
    st(() => {
      const g = c.current,
        b = s.current;
      if (b !== a) {
        const R = d.current,
          D = Ku(g);
        a
          ? p('MOUNT')
          : D === 'none' || (g == null ? void 0 : g.display) === 'none'
            ? p('UNMOUNT')
            : p(b && R !== D ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (s.current = a);
      }
    }, [a, p]),
    st(() => {
      if (o) {
        let g;
        const b = o.ownerDocument.defaultView ?? window,
          w = (D) => {
            const E = Ku(c.current).includes(D.animationName);
            if (D.target === o && E && (p('ANIMATION_END'), !s.current)) {
              const _ = o.style.animationFillMode;
              (o.style.animationFillMode = 'forwards'),
                (g = b.setTimeout(() => {
                  o.style.animationFillMode === 'forwards' && (o.style.animationFillMode = _);
                }));
            }
          },
          R = (D) => {
            D.target === o && (d.current = Ku(c.current));
          };
        return (
          o.addEventListener('animationstart', R),
          o.addEventListener('animationcancel', w),
          o.addEventListener('animationend', w),
          () => {
            b.clearTimeout(g),
              o.removeEventListener('animationstart', R),
              o.removeEventListener('animationcancel', w),
              o.removeEventListener('animationend', w);
          }
        );
      } else p('ANIMATION_END');
    }, [o, p]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(v),
      ref: y.useCallback((g) => {
        (c.current = g ? getComputedStyle(g) : null), r(g);
      }, []),
    }
  );
}
function Ku(a) {
  return (a == null ? void 0 : a.animationName) || 'none';
}
function TS(a) {
  var c, s;
  let o = (c = Object.getOwnPropertyDescriptor(a.props, 'ref')) == null ? void 0 : c.get,
    r = o && 'isReactWarning' in o && o.isReactWarning;
  return r
    ? a.ref
    : ((o = (s = Object.getOwnPropertyDescriptor(a, 'ref')) == null ? void 0 : s.get),
      (r = o && 'isReactWarning' in o && o.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
var Vr = 0;
function _v() {
  y.useEffect(() => {
    const a = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', a[0] ?? Xh()),
      document.body.insertAdjacentElement('beforeend', a[1] ?? Xh()),
      Vr++,
      () => {
        Vr === 1 &&
          document.querySelectorAll('[data-radix-focus-guard]').forEach((o) => o.remove()),
          Vr--;
      }
    );
  }, []);
}
function Xh() {
  const a = document.createElement('span');
  return (
    a.setAttribute('data-radix-focus-guard', ''),
    (a.tabIndex = 0),
    (a.style.outline = 'none'),
    (a.style.opacity = '0'),
    (a.style.position = 'fixed'),
    (a.style.pointerEvents = 'none'),
    a
  );
}
var Ft = function () {
  return (
    (Ft =
      Object.assign ||
      function (o) {
        for (var r, c = 1, s = arguments.length; c < s; c++) {
          r = arguments[c];
          for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && (o[d] = r[d]);
        }
        return o;
      }),
    Ft.apply(this, arguments)
  );
};
function Dv(a, o) {
  var r = {};
  for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && o.indexOf(c) < 0 && (r[c] = a[c]);
  if (a != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var s = 0, c = Object.getOwnPropertySymbols(a); s < c.length; s++)
      o.indexOf(c[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, c[s]) &&
        (r[c[s]] = a[c[s]]);
  return r;
}
function RS(a, o, r) {
  if (r || arguments.length === 2)
    for (var c = 0, s = o.length, d; c < s; c++)
      (d || !(c in o)) && (d || (d = Array.prototype.slice.call(o, 0, c)), (d[c] = o[c]));
  return a.concat(d || Array.prototype.slice.call(o));
}
var eo = 'right-scroll-bar-position',
  to = 'width-before-scroll-bar',
  OS = 'with-scroll-bars-hidden',
  MS = '--removed-body-scroll-bar-size';
function kr(a, o) {
  return typeof a == 'function' ? a(o) : a && (a.current = o), a;
}
function CS(a, o) {
  var r = y.useState(function () {
    return {
      value: a,
      callback: o,
      facade: {
        get current() {
          return r.value;
        },
        set current(c) {
          var s = r.value;
          s !== c && ((r.value = c), r.callback(c, s));
        },
      },
    };
  })[0];
  return (r.callback = o), r.facade;
}
var NS = typeof window < 'u' ? y.useLayoutEffect : y.useEffect,
  Qh = new WeakMap();
function _S(a, o) {
  var r = CS(null, function (c) {
    return a.forEach(function (s) {
      return kr(s, c);
    });
  });
  return (
    NS(
      function () {
        var c = Qh.get(r);
        if (c) {
          var s = new Set(c),
            d = new Set(a),
            m = r.current;
          s.forEach(function (v) {
            d.has(v) || kr(v, null);
          }),
            d.forEach(function (v) {
              s.has(v) || kr(v, m);
            });
        }
        Qh.set(r, a);
      },
      [a]
    ),
    r
  );
}
function DS(a) {
  return a;
}
function zS(a, o) {
  o === void 0 && (o = DS);
  var r = [],
    c = !1,
    s = {
      read: function () {
        if (c)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return r.length ? r[r.length - 1] : a;
      },
      useMedium: function (d) {
        var m = o(d, c);
        return (
          r.push(m),
          function () {
            r = r.filter(function (v) {
              return v !== m;
            });
          }
        );
      },
      assignSyncMedium: function (d) {
        for (c = !0; r.length; ) {
          var m = r;
          (r = []), m.forEach(d);
        }
        r = {
          push: function (v) {
            return d(v);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (d) {
        c = !0;
        var m = [];
        if (r.length) {
          var v = r;
          (r = []), v.forEach(d), (m = r);
        }
        var p = function () {
            var b = m;
            (m = []), b.forEach(d);
          },
          g = function () {
            return Promise.resolve().then(p);
          };
        g(),
          (r = {
            push: function (b) {
              m.push(b), g();
            },
            filter: function (b) {
              return (m = m.filter(b)), r;
            },
          });
      },
    };
  return s;
}
function US(a) {
  a === void 0 && (a = {});
  var o = zS(null);
  return (o.options = Ft({ async: !0, ssr: !1 }, a)), o;
}
var zv = function (a) {
  var o = a.sideCar,
    r = Dv(a, ['sideCar']);
  if (!o) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  var c = o.read();
  if (!c) throw new Error('Sidecar medium not found');
  return y.createElement(c, Ft({}, r));
};
zv.isSideCarExport = !0;
function jS(a, o) {
  return a.useMedium(o), zv;
}
var Uv = US(),
  Xr = function () {},
  fo = y.forwardRef(function (a, o) {
    var r = y.useRef(null),
      c = y.useState({ onScrollCapture: Xr, onWheelCapture: Xr, onTouchMoveCapture: Xr }),
      s = c[0],
      d = c[1],
      m = a.forwardProps,
      v = a.children,
      p = a.className,
      g = a.removeScrollBar,
      b = a.enabled,
      w = a.shards,
      R = a.sideCar,
      D = a.noIsolation,
      H = a.inert,
      E = a.allowPinchZoom,
      _ = a.as,
      q = _ === void 0 ? 'div' : _,
      L = a.gapMode,
      B = Dv(a, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      Z = R,
      k = _S([r, o]),
      I = Ft(Ft({}, B), s);
    return y.createElement(
      y.Fragment,
      null,
      b &&
        y.createElement(Z, {
          sideCar: Uv,
          removeScrollBar: g,
          shards: w,
          noIsolation: D,
          inert: H,
          setCallbacks: d,
          allowPinchZoom: !!E,
          lockRef: r,
          gapMode: L,
        }),
      m
        ? y.cloneElement(y.Children.only(v), Ft(Ft({}, I), { ref: k }))
        : y.createElement(q, Ft({}, I, { className: p, ref: k }), v)
    );
  });
fo.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
fo.classNames = { fullWidth: to, zeroRight: eo };
var HS = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function BS() {
  if (!document) return null;
  var a = document.createElement('style');
  a.type = 'text/css';
  var o = HS();
  return o && a.setAttribute('nonce', o), a;
}
function LS(a, o) {
  a.styleSheet ? (a.styleSheet.cssText = o) : a.appendChild(document.createTextNode(o));
}
function qS(a) {
  var o = document.head || document.getElementsByTagName('head')[0];
  o.appendChild(a);
}
var YS = function () {
    var a = 0,
      o = null;
    return {
      add: function (r) {
        a == 0 && (o = BS()) && (LS(o, r), qS(o)), a++;
      },
      remove: function () {
        a--, !a && o && (o.parentNode && o.parentNode.removeChild(o), (o = null));
      },
    };
  },
  GS = function () {
    var a = YS();
    return function (o, r) {
      y.useEffect(
        function () {
          return (
            a.add(o),
            function () {
              a.remove();
            }
          );
        },
        [o && r]
      );
    };
  },
  jv = function () {
    var a = GS(),
      o = function (r) {
        var c = r.styles,
          s = r.dynamic;
        return a(c, s), null;
      };
    return o;
  },
  VS = { left: 0, top: 0, right: 0, gap: 0 },
  Qr = function (a) {
    return parseInt(a || '', 10) || 0;
  },
  kS = function (a) {
    var o = window.getComputedStyle(document.body),
      r = o[a === 'padding' ? 'paddingLeft' : 'marginLeft'],
      c = o[a === 'padding' ? 'paddingTop' : 'marginTop'],
      s = o[a === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Qr(r), Qr(c), Qr(s)];
  },
  XS = function (a) {
    if ((a === void 0 && (a = 'margin'), typeof window > 'u')) return VS;
    var o = kS(a),
      r = document.documentElement.clientWidth,
      c = window.innerWidth;
    return { left: o[0], top: o[1], right: o[2], gap: Math.max(0, c - r + o[2] - o[0]) };
  },
  QS = jv(),
  ga = 'data-scroll-locked',
  ZS = function (a, o, r, c) {
    var s = a.left,
      d = a.top,
      m = a.right,
      v = a.gap;
    return (
      r === void 0 && (r = 'margin'),
      `
  .`
        .concat(
          OS,
          ` {
   overflow: hidden `
        )
        .concat(
          c,
          `;
   padding-right: `
        )
        .concat(v, 'px ')
        .concat(
          c,
          `;
  }
  body[`
        )
        .concat(
          ga,
          `] {
    overflow: hidden `
        )
        .concat(
          c,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            o && 'position: relative '.concat(c, ';'),
            r === 'margin' &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `
                )
                .concat(
                  d,
                  `px;
    padding-right: `
                )
                .concat(
                  m,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(v, 'px ')
                .concat(
                  c,
                  `;
    `
                ),
            r === 'padding' && 'padding-right: '.concat(v, 'px ').concat(c, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          eo,
          ` {
    right: `
        )
        .concat(v, 'px ')
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(
          to,
          ` {
    margin-right: `
        )
        .concat(v, 'px ')
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(eo, ' .')
        .concat(
          eo,
          ` {
    right: 0 `
        )
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(to, ' .')
        .concat(
          to,
          ` {
    margin-right: 0 `
        )
        .concat(
          c,
          `;
  }
  
  body[`
        )
        .concat(
          ga,
          `] {
    `
        )
        .concat(MS, ': ')
        .concat(
          v,
          `px;
  }
`
        )
    );
  },
  Zh = function () {
    var a = parseInt(document.body.getAttribute(ga) || '0', 10);
    return isFinite(a) ? a : 0;
  },
  KS = function () {
    y.useEffect(function () {
      return (
        document.body.setAttribute(ga, (Zh() + 1).toString()),
        function () {
          var a = Zh() - 1;
          a <= 0 ? document.body.removeAttribute(ga) : document.body.setAttribute(ga, a.toString());
        }
      );
    }, []);
  },
  JS = function (a) {
    var o = a.noRelative,
      r = a.noImportant,
      c = a.gapMode,
      s = c === void 0 ? 'margin' : c;
    KS();
    var d = y.useMemo(
      function () {
        return XS(s);
      },
      [s]
    );
    return y.createElement(QS, { styles: ZS(d, !o, s, r ? '' : '!important') });
  },
  es = !1;
if (typeof window < 'u')
  try {
    var Ju = Object.defineProperty({}, 'passive', {
      get: function () {
        return (es = !0), !0;
      },
    });
    window.addEventListener('test', Ju, Ju), window.removeEventListener('test', Ju, Ju);
  } catch {
    es = !1;
  }
var fa = es ? { passive: !1 } : !1,
  WS = function (a) {
    return a.tagName === 'TEXTAREA';
  },
  Hv = function (a, o) {
    if (!(a instanceof Element)) return !1;
    var r = window.getComputedStyle(a);
    return r[o] !== 'hidden' && !(r.overflowY === r.overflowX && !WS(a) && r[o] === 'visible');
  },
  PS = function (a) {
    return Hv(a, 'overflowY');
  },
  $S = function (a) {
    return Hv(a, 'overflowX');
  },
  Kh = function (a, o) {
    var r = o.ownerDocument,
      c = o;
    do {
      typeof ShadowRoot < 'u' && c instanceof ShadowRoot && (c = c.host);
      var s = Bv(a, c);
      if (s) {
        var d = Lv(a, c),
          m = d[1],
          v = d[2];
        if (m > v) return !0;
      }
      c = c.parentNode;
    } while (c && c !== r.body);
    return !1;
  },
  FS = function (a) {
    var o = a.scrollTop,
      r = a.scrollHeight,
      c = a.clientHeight;
    return [o, r, c];
  },
  IS = function (a) {
    var o = a.scrollLeft,
      r = a.scrollWidth,
      c = a.clientWidth;
    return [o, r, c];
  },
  Bv = function (a, o) {
    return a === 'v' ? PS(o) : $S(o);
  },
  Lv = function (a, o) {
    return a === 'v' ? FS(o) : IS(o);
  },
  e1 = function (a, o) {
    return a === 'h' && o === 'rtl' ? -1 : 1;
  },
  t1 = function (a, o, r, c, s) {
    var d = e1(a, window.getComputedStyle(o).direction),
      m = d * c,
      v = r.target,
      p = o.contains(v),
      g = !1,
      b = m > 0,
      w = 0,
      R = 0;
    do {
      var D = Lv(a, v),
        H = D[0],
        E = D[1],
        _ = D[2],
        q = E - _ - d * H;
      (H || q) && Bv(a, v) && ((w += q), (R += H)),
        v instanceof ShadowRoot ? (v = v.host) : (v = v.parentNode);
    } while ((!p && v !== document.body) || (p && (o.contains(v) || o === v)));
    return ((b && Math.abs(w) < 1) || (!b && Math.abs(R) < 1)) && (g = !0), g;
  },
  Wu = function (a) {
    return 'changedTouches' in a
      ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY]
      : [0, 0];
  },
  Jh = function (a) {
    return [a.deltaX, a.deltaY];
  },
  Wh = function (a) {
    return a && 'current' in a ? a.current : a;
  },
  n1 = function (a, o) {
    return a[0] === o[0] && a[1] === o[1];
  },
  l1 = function (a) {
    return `
  .block-interactivity-`
      .concat(
        a,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        a,
        ` {pointer-events: all;}
`
      );
  },
  a1 = 0,
  da = [];
function i1(a) {
  var o = y.useRef([]),
    r = y.useRef([0, 0]),
    c = y.useRef(),
    s = y.useState(a1++)[0],
    d = y.useState(jv)[0],
    m = y.useRef(a);
  y.useEffect(
    function () {
      m.current = a;
    },
    [a]
  ),
    y.useEffect(
      function () {
        if (a.inert) {
          document.body.classList.add('block-interactivity-'.concat(s));
          var E = RS([a.lockRef.current], (a.shards || []).map(Wh), !0).filter(Boolean);
          return (
            E.forEach(function (_) {
              return _.classList.add('allow-interactivity-'.concat(s));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(s)),
                E.forEach(function (_) {
                  return _.classList.remove('allow-interactivity-'.concat(s));
                });
            }
          );
        }
      },
      [a.inert, a.lockRef.current, a.shards]
    );
  var v = y.useCallback(function (E, _) {
      if (('touches' in E && E.touches.length === 2) || (E.type === 'wheel' && E.ctrlKey))
        return !m.current.allowPinchZoom;
      var q = Wu(E),
        L = r.current,
        B = 'deltaX' in E ? E.deltaX : L[0] - q[0],
        Z = 'deltaY' in E ? E.deltaY : L[1] - q[1],
        k,
        I = E.target,
        W = Math.abs(B) > Math.abs(Z) ? 'h' : 'v';
      if ('touches' in E && W === 'h' && I.type === 'range') return !1;
      var K = Kh(W, I);
      if (!K) return !0;
      if ((K ? (k = W) : ((k = W === 'v' ? 'h' : 'v'), (K = Kh(W, I))), !K)) return !1;
      if ((!c.current && 'changedTouches' in E && (B || Z) && (c.current = k), !k)) return !0;
      var ce = c.current || k;
      return t1(ce, _, E, ce === 'h' ? B : Z);
    }, []),
    p = y.useCallback(function (E) {
      var _ = E;
      if (!(!da.length || da[da.length - 1] !== d)) {
        var q = 'deltaY' in _ ? Jh(_) : Wu(_),
          L = o.current.filter(function (k) {
            return (
              k.name === _.type &&
              (k.target === _.target || _.target === k.shadowParent) &&
              n1(k.delta, q)
            );
          })[0];
        if (L && L.should) {
          _.cancelable && _.preventDefault();
          return;
        }
        if (!L) {
          var B = (m.current.shards || [])
              .map(Wh)
              .filter(Boolean)
              .filter(function (k) {
                return k.contains(_.target);
              }),
            Z = B.length > 0 ? v(_, B[0]) : !m.current.noIsolation;
          Z && _.cancelable && _.preventDefault();
        }
      }
    }, []),
    g = y.useCallback(function (E, _, q, L) {
      var B = { name: E, delta: _, target: q, should: L, shadowParent: u1(q) };
      o.current.push(B),
        setTimeout(function () {
          o.current = o.current.filter(function (Z) {
            return Z !== B;
          });
        }, 1);
    }, []),
    b = y.useCallback(function (E) {
      (r.current = Wu(E)), (c.current = void 0);
    }, []),
    w = y.useCallback(function (E) {
      g(E.type, Jh(E), E.target, v(E, a.lockRef.current));
    }, []),
    R = y.useCallback(function (E) {
      g(E.type, Wu(E), E.target, v(E, a.lockRef.current));
    }, []);
  y.useEffect(function () {
    return (
      da.push(d),
      a.setCallbacks({ onScrollCapture: w, onWheelCapture: w, onTouchMoveCapture: R }),
      document.addEventListener('wheel', p, fa),
      document.addEventListener('touchmove', p, fa),
      document.addEventListener('touchstart', b, fa),
      function () {
        (da = da.filter(function (E) {
          return E !== d;
        })),
          document.removeEventListener('wheel', p, fa),
          document.removeEventListener('touchmove', p, fa),
          document.removeEventListener('touchstart', b, fa);
      }
    );
  }, []);
  var D = a.removeScrollBar,
    H = a.inert;
  return y.createElement(
    y.Fragment,
    null,
    H ? y.createElement(d, { styles: l1(s) }) : null,
    D ? y.createElement(JS, { gapMode: a.gapMode }) : null
  );
}
function u1(a) {
  for (var o = null; a !== null; )
    a instanceof ShadowRoot && ((o = a.host), (a = a.host)), (a = a.parentNode);
  return o;
}
const o1 = jS(Uv, i1);
var hs = y.forwardRef(function (a, o) {
  return y.createElement(fo, Ft({}, a, { ref: o, sideCar: o1 }));
});
hs.classNames = fo.classNames;
var c1 = function (a) {
    if (typeof document > 'u') return null;
    var o = Array.isArray(a) ? a[0] : a;
    return o.ownerDocument.body;
  },
  ma = new WeakMap(),
  Pu = new WeakMap(),
  $u = {},
  Zr = 0,
  qv = function (a) {
    return a && (a.host || qv(a.parentNode));
  },
  r1 = function (a, o) {
    return o
      .map(function (r) {
        if (a.contains(r)) return r;
        var c = qv(r);
        return c && a.contains(c)
          ? c
          : (console.error('aria-hidden', r, 'in not contained inside', a, '. Doing nothing'),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  s1 = function (a, o, r, c) {
    var s = r1(o, Array.isArray(a) ? a : [a]);
    $u[r] || ($u[r] = new WeakMap());
    var d = $u[r],
      m = [],
      v = new Set(),
      p = new Set(s),
      g = function (w) {
        !w || v.has(w) || (v.add(w), g(w.parentNode));
      };
    s.forEach(g);
    var b = function (w) {
      !w ||
        p.has(w) ||
        Array.prototype.forEach.call(w.children, function (R) {
          if (v.has(R)) b(R);
          else
            try {
              var D = R.getAttribute(c),
                H = D !== null && D !== 'false',
                E = (ma.get(R) || 0) + 1,
                _ = (d.get(R) || 0) + 1;
              ma.set(R, E),
                d.set(R, _),
                m.push(R),
                E === 1 && H && Pu.set(R, !0),
                _ === 1 && R.setAttribute(r, 'true'),
                H || R.setAttribute(c, 'true');
            } catch (q) {
              console.error('aria-hidden: cannot operate on ', R, q);
            }
        });
    };
    return (
      b(o),
      v.clear(),
      Zr++,
      function () {
        m.forEach(function (w) {
          var R = ma.get(w) - 1,
            D = d.get(w) - 1;
          ma.set(w, R),
            d.set(w, D),
            R || (Pu.has(w) || w.removeAttribute(c), Pu.delete(w)),
            D || w.removeAttribute(r);
        }),
          Zr--,
          Zr || ((ma = new WeakMap()), (ma = new WeakMap()), (Pu = new WeakMap()), ($u = {}));
      }
    );
  },
  Yv = function (a, o, r) {
    r === void 0 && (r = 'data-aria-hidden');
    var c = Array.from(Array.isArray(a) ? a : [a]),
      s = c1(a);
    return s
      ? (c.push.apply(c, Array.from(s.querySelectorAll('[aria-live]'))), s1(c, s, r, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  mo = 'Dialog',
  [Gv, _E] = ro(mo),
  [f1, Qt] = Gv(mo),
  Vv = (a) => {
    const {
        __scopeDialog: o,
        children: r,
        open: c,
        defaultOpen: s,
        onOpenChange: d,
        modal: m = !0,
      } = a,
      v = y.useRef(null),
      p = y.useRef(null),
      [g, b] = Fr({ prop: c, defaultProp: s ?? !1, onChange: d, caller: mo });
    return N.jsx(f1, {
      scope: o,
      triggerRef: v,
      contentRef: p,
      contentId: va(),
      titleId: va(),
      descriptionId: va(),
      open: g,
      onOpenChange: b,
      onOpenToggle: y.useCallback(() => b((w) => !w), [b]),
      modal: m,
      children: r,
    });
  };
Vv.displayName = mo;
var kv = 'DialogTrigger',
  Xv = y.forwardRef((a, o) => {
    const { __scopeDialog: r, ...c } = a,
      s = Qt(kv, r),
      d = Ze(o, s.triggerRef);
    return N.jsx(Be.button, {
      type: 'button',
      'aria-haspopup': 'dialog',
      'aria-expanded': s.open,
      'aria-controls': s.contentId,
      'data-state': ps(s.open),
      ...c,
      ref: d,
      onClick: qe(a.onClick, s.onOpenToggle),
    });
  });
Xv.displayName = kv;
var vs = 'DialogPortal',
  [d1, Qv] = Gv(vs, { forceMount: void 0 }),
  Zv = (a) => {
    const { __scopeDialog: o, forceMount: r, children: c, container: s } = a,
      d = Qt(vs, o);
    return N.jsx(d1, {
      scope: o,
      forceMount: r,
      children: y.Children.map(c, (m) =>
        N.jsx(so, {
          present: r || d.open,
          children: N.jsx(ms, { asChild: !0, container: s, children: m }),
        })
      ),
    });
  };
Zv.displayName = vs;
var lo = 'DialogOverlay',
  Kv = y.forwardRef((a, o) => {
    const r = Qv(lo, a.__scopeDialog),
      { forceMount: c = r.forceMount, ...s } = a,
      d = Qt(lo, a.__scopeDialog);
    return d.modal
      ? N.jsx(so, { present: c || d.open, children: N.jsx(h1, { ...s, ref: o }) })
      : null;
  });
Kv.displayName = lo;
var m1 = ya('DialogOverlay.RemoveScroll'),
  h1 = y.forwardRef((a, o) => {
    const { __scopeDialog: r, ...c } = a,
      s = Qt(lo, r);
    return N.jsx(hs, {
      as: m1,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: N.jsx(Be.div, {
        'data-state': ps(s.open),
        ...c,
        ref: o,
        style: { pointerEvents: 'auto', ...c.style },
      }),
    });
  }),
  xl = 'DialogContent',
  Jv = y.forwardRef((a, o) => {
    const r = Qv(xl, a.__scopeDialog),
      { forceMount: c = r.forceMount, ...s } = a,
      d = Qt(xl, a.__scopeDialog);
    return N.jsx(so, {
      present: c || d.open,
      children: d.modal ? N.jsx(v1, { ...s, ref: o }) : N.jsx(g1, { ...s, ref: o }),
    });
  });
Jv.displayName = xl;
var v1 = y.forwardRef((a, o) => {
    const r = Qt(xl, a.__scopeDialog),
      c = y.useRef(null),
      s = Ze(o, r.contentRef, c);
    return (
      y.useEffect(() => {
        const d = c.current;
        if (d) return Yv(d);
      }, []),
      N.jsx(Wv, {
        ...a,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: qe(a.onCloseAutoFocus, (d) => {
          var m;
          d.preventDefault(), (m = r.triggerRef.current) == null || m.focus();
        }),
        onPointerDownOutside: qe(a.onPointerDownOutside, (d) => {
          const m = d.detail.originalEvent,
            v = m.button === 0 && m.ctrlKey === !0;
          (m.button === 2 || v) && d.preventDefault();
        }),
        onFocusOutside: qe(a.onFocusOutside, (d) => d.preventDefault()),
      })
    );
  }),
  g1 = y.forwardRef((a, o) => {
    const r = Qt(xl, a.__scopeDialog),
      c = y.useRef(!1),
      s = y.useRef(!1);
    return N.jsx(Wv, {
      ...a,
      ref: o,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (d) => {
        var m, v;
        (m = a.onCloseAutoFocus) == null || m.call(a, d),
          d.defaultPrevented ||
            (c.current || (v = r.triggerRef.current) == null || v.focus(), d.preventDefault()),
          (c.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (d) => {
        var p, g;
        (p = a.onInteractOutside) == null || p.call(a, d),
          d.defaultPrevented ||
            ((c.current = !0), d.detail.originalEvent.type === 'pointerdown' && (s.current = !0));
        const m = d.target;
        ((g = r.triggerRef.current) == null ? void 0 : g.contains(m)) && d.preventDefault(),
          d.detail.originalEvent.type === 'focusin' && s.current && d.preventDefault();
      },
    });
  }),
  Wv = y.forwardRef((a, o) => {
    const { __scopeDialog: r, trapFocus: c, onOpenAutoFocus: s, onCloseAutoFocus: d, ...m } = a,
      v = Qt(xl, r),
      p = y.useRef(null),
      g = Ze(o, p);
    return (
      _v(),
      N.jsxs(N.Fragment, {
        children: [
          N.jsx(ds, {
            asChild: !0,
            loop: !0,
            trapped: c,
            onMountAutoFocus: s,
            onUnmountAutoFocus: d,
            children: N.jsx(fs, {
              role: 'dialog',
              id: v.contentId,
              'aria-describedby': v.descriptionId,
              'aria-labelledby': v.titleId,
              'data-state': ps(v.open),
              ...m,
              ref: g,
              onDismiss: () => v.onOpenChange(!1),
            }),
          }),
          N.jsxs(N.Fragment, {
            children: [
              N.jsx(p1, { titleId: v.titleId }),
              N.jsx(b1, { contentRef: p, descriptionId: v.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  gs = 'DialogTitle',
  Pv = y.forwardRef((a, o) => {
    const { __scopeDialog: r, ...c } = a,
      s = Qt(gs, r);
    return N.jsx(Be.h2, { id: s.titleId, ...c, ref: o });
  });
Pv.displayName = gs;
var $v = 'DialogDescription',
  Fv = y.forwardRef((a, o) => {
    const { __scopeDialog: r, ...c } = a,
      s = Qt($v, r);
    return N.jsx(Be.p, { id: s.descriptionId, ...c, ref: o });
  });
Fv.displayName = $v;
var Iv = 'DialogClose',
  eg = y.forwardRef((a, o) => {
    const { __scopeDialog: r, ...c } = a,
      s = Qt(Iv, r);
    return N.jsx(Be.button, {
      type: 'button',
      ...c,
      ref: o,
      onClick: qe(a.onClick, () => s.onOpenChange(!1)),
    });
  });
eg.displayName = Iv;
function ps(a) {
  return a ? 'open' : 'closed';
}
var tg = 'DialogTitleWarning',
  [DE, ng] = $b(tg, { contentName: xl, titleName: gs, docsSlug: 'dialog' }),
  p1 = ({ titleId: a }) => {
    const o = ng(tg),
      r = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
    return (
      y.useEffect(() => {
        a && (document.getElementById(a) || console.error(r));
      }, [r, a]),
      null
    );
  },
  y1 = 'DialogDescriptionWarning',
  b1 = ({ contentRef: a, descriptionId: o }) => {
    const c = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ng(y1).contentName}}.`;
    return (
      y.useEffect(() => {
        var d;
        const s = (d = a.current) == null ? void 0 : d.getAttribute('aria-describedby');
        o && s && (document.getElementById(o) || console.warn(c));
      }, [c, a, o]),
      null
    );
  },
  S1 = Vv,
  x1 = Xv,
  E1 = Zv,
  lg = Kv,
  ag = Jv,
  ig = Pv,
  ug = Fv,
  w1 = eg;
const A1 = S1,
  T1 = x1,
  R1 = E1,
  og = y.forwardRef(({ className: a, ...o }, r) =>
    N.jsx(lg, {
      className: yt(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        a
      ),
      ...o,
      ref: r,
    })
  );
og.displayName = lg.displayName;
const O1 = gv(
    'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
    {
      variants: {
        side: {
          top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
          right:
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        },
      },
      defaultVariants: { side: 'right' },
    }
  ),
  cg = y.forwardRef(({ side: a = 'right', className: o, children: r, ...c }, s) =>
    N.jsxs(R1, {
      children: [
        N.jsx(og, {}),
        N.jsxs(ag, {
          ref: s,
          className: yt(O1({ side: a }), o),
          ...c,
          children: [
            N.jsxs(w1, {
              className:
                'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
              children: [
                N.jsx(rb, { className: 'h-4 w-4' }),
                N.jsx('span', { className: 'sr-only', children: 'Close' }),
              ],
            }),
            r,
          ],
        }),
      ],
    })
  );
cg.displayName = ag.displayName;
const rg = y.forwardRef(({ className: a, ...o }, r) =>
  N.jsx(ig, { ref: r, className: yt('text-lg font-semibold text-foreground', a), ...o })
);
rg.displayName = ig.displayName;
const sg = y.forwardRef(({ className: a, ...o }, r) =>
  N.jsx(ug, { ref: r, className: yt('text-sm text-muted-foreground', a), ...o })
);
sg.displayName = ug.displayName;
function Ph(a, [o, r]) {
  return Math.min(r, Math.max(o, a));
}
function M1(a) {
  const o = a + 'CollectionProvider',
    [r, c] = ro(o),
    [s, d] = r(o, { collectionRef: { current: null }, itemMap: new Map() }),
    m = (E) => {
      const { scope: _, children: q } = E,
        L = $t.useRef(null),
        B = $t.useRef(new Map()).current;
      return N.jsx(s, { scope: _, itemMap: B, collectionRef: L, children: q });
    };
  m.displayName = o;
  const v = a + 'CollectionSlot',
    p = ya(v),
    g = $t.forwardRef((E, _) => {
      const { scope: q, children: L } = E,
        B = d(v, q),
        Z = Ze(_, B.collectionRef);
      return N.jsx(p, { ref: Z, children: L });
    });
  g.displayName = v;
  const b = a + 'CollectionItemSlot',
    w = 'data-radix-collection-item',
    R = ya(b),
    D = $t.forwardRef((E, _) => {
      const { scope: q, children: L, ...B } = E,
        Z = $t.useRef(null),
        k = Ze(_, Z),
        I = d(b, q);
      return (
        $t.useEffect(() => (I.itemMap.set(Z, { ref: Z, ...B }), () => void I.itemMap.delete(Z))),
        N.jsx(R, { [w]: '', ref: k, children: L })
      );
    });
  D.displayName = b;
  function H(E) {
    const _ = d(a + 'CollectionConsumer', E);
    return $t.useCallback(() => {
      const L = _.collectionRef.current;
      if (!L) return [];
      const B = Array.from(L.querySelectorAll(`[${w}]`));
      return Array.from(_.itemMap.values()).sort(
        (I, W) => B.indexOf(I.ref.current) - B.indexOf(W.ref.current)
      );
    }, [_.collectionRef, _.itemMap]);
  }
  return [{ Provider: m, Slot: g, ItemSlot: D }, H, c];
}
var C1 = y.createContext(void 0);
function N1(a) {
  const o = y.useContext(C1);
  return a || o || 'ltr';
}
const _1 = ['top', 'right', 'bottom', 'left'],
  Kn = Math.min,
  Mt = Math.max,
  ao = Math.round,
  Fu = Math.floor,
  It = (a) => ({ x: a, y: a }),
  D1 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  z1 = { start: 'end', end: 'start' };
function ts(a, o, r) {
  return Mt(a, Kn(o, r));
}
function bn(a, o) {
  return typeof a == 'function' ? a(o) : a;
}
function Sn(a) {
  return a.split('-')[0];
}
function Ea(a) {
  return a.split('-')[1];
}
function ys(a) {
  return a === 'x' ? 'y' : 'x';
}
function bs(a) {
  return a === 'y' ? 'height' : 'width';
}
function Jn(a) {
  return ['top', 'bottom'].includes(Sn(a)) ? 'y' : 'x';
}
function Ss(a) {
  return ys(Jn(a));
}
function U1(a, o, r) {
  r === void 0 && (r = !1);
  const c = Ea(a),
    s = Ss(a),
    d = bs(s);
  let m =
    s === 'x' ? (c === (r ? 'end' : 'start') ? 'right' : 'left') : c === 'start' ? 'bottom' : 'top';
  return o.reference[d] > o.floating[d] && (m = io(m)), [m, io(m)];
}
function j1(a) {
  const o = io(a);
  return [ns(a), o, ns(o)];
}
function ns(a) {
  return a.replace(/start|end/g, (o) => z1[o]);
}
function H1(a, o, r) {
  const c = ['left', 'right'],
    s = ['right', 'left'],
    d = ['top', 'bottom'],
    m = ['bottom', 'top'];
  switch (a) {
    case 'top':
    case 'bottom':
      return r ? (o ? s : c) : o ? c : s;
    case 'left':
    case 'right':
      return o ? d : m;
    default:
      return [];
  }
}
function B1(a, o, r, c) {
  const s = Ea(a);
  let d = H1(Sn(a), r === 'start', c);
  return s && ((d = d.map((m) => m + '-' + s)), o && (d = d.concat(d.map(ns)))), d;
}
function io(a) {
  return a.replace(/left|right|bottom|top/g, (o) => D1[o]);
}
function L1(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function fg(a) {
  return typeof a != 'number' ? L1(a) : { top: a, right: a, bottom: a, left: a };
}
function uo(a) {
  const { x: o, y: r, width: c, height: s } = a;
  return { width: c, height: s, top: r, left: o, right: o + c, bottom: r + s, x: o, y: r };
}
function $h(a, o, r) {
  let { reference: c, floating: s } = a;
  const d = Jn(o),
    m = Ss(o),
    v = bs(m),
    p = Sn(o),
    g = d === 'y',
    b = c.x + c.width / 2 - s.width / 2,
    w = c.y + c.height / 2 - s.height / 2,
    R = c[v] / 2 - s[v] / 2;
  let D;
  switch (p) {
    case 'top':
      D = { x: b, y: c.y - s.height };
      break;
    case 'bottom':
      D = { x: b, y: c.y + c.height };
      break;
    case 'right':
      D = { x: c.x + c.width, y: w };
      break;
    case 'left':
      D = { x: c.x - s.width, y: w };
      break;
    default:
      D = { x: c.x, y: c.y };
  }
  switch (Ea(o)) {
    case 'start':
      D[m] -= R * (r && g ? -1 : 1);
      break;
    case 'end':
      D[m] += R * (r && g ? -1 : 1);
      break;
  }
  return D;
}
const q1 = async (a, o, r) => {
  const { placement: c = 'bottom', strategy: s = 'absolute', middleware: d = [], platform: m } = r,
    v = d.filter(Boolean),
    p = await (m.isRTL == null ? void 0 : m.isRTL(o));
  let g = await m.getElementRects({ reference: a, floating: o, strategy: s }),
    { x: b, y: w } = $h(g, c, p),
    R = c,
    D = {},
    H = 0;
  for (let E = 0; E < v.length; E++) {
    const { name: _, fn: q } = v[E],
      {
        x: L,
        y: B,
        data: Z,
        reset: k,
      } = await q({
        x: b,
        y: w,
        initialPlacement: c,
        placement: R,
        strategy: s,
        middlewareData: D,
        rects: g,
        platform: m,
        elements: { reference: a, floating: o },
      });
    (b = L ?? b),
      (w = B ?? w),
      (D = { ...D, [_]: { ...D[_], ...Z } }),
      k &&
        H <= 50 &&
        (H++,
        typeof k == 'object' &&
          (k.placement && (R = k.placement),
          k.rects &&
            (g =
              k.rects === !0
                ? await m.getElementRects({ reference: a, floating: o, strategy: s })
                : k.rects),
          ({ x: b, y: w } = $h(g, R, p))),
        (E = -1));
  }
  return { x: b, y: w, placement: R, strategy: s, middlewareData: D };
};
async function Ri(a, o) {
  var r;
  o === void 0 && (o = {});
  const { x: c, y: s, platform: d, rects: m, elements: v, strategy: p } = a,
    {
      boundary: g = 'clippingAncestors',
      rootBoundary: b = 'viewport',
      elementContext: w = 'floating',
      altBoundary: R = !1,
      padding: D = 0,
    } = bn(o, a),
    H = fg(D),
    _ = v[R ? (w === 'floating' ? 'reference' : 'floating') : w],
    q = uo(
      await d.getClippingRect({
        element:
          (r = await (d.isElement == null ? void 0 : d.isElement(_))) == null || r
            ? _
            : _.contextElement ||
              (await (d.getDocumentElement == null ? void 0 : d.getDocumentElement(v.floating))),
        boundary: g,
        rootBoundary: b,
        strategy: p,
      })
    ),
    L =
      w === 'floating'
        ? { x: c, y: s, width: m.floating.width, height: m.floating.height }
        : m.reference,
    B = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(v.floating)),
    Z = (await (d.isElement == null ? void 0 : d.isElement(B)))
      ? (await (d.getScale == null ? void 0 : d.getScale(B))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    k = uo(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: v,
            rect: L,
            offsetParent: B,
            strategy: p,
          })
        : L
    );
  return {
    top: (q.top - k.top + H.top) / Z.y,
    bottom: (k.bottom - q.bottom + H.bottom) / Z.y,
    left: (q.left - k.left + H.left) / Z.x,
    right: (k.right - q.right + H.right) / Z.x,
  };
}
const Y1 = (a) => ({
    name: 'arrow',
    options: a,
    async fn(o) {
      const { x: r, y: c, placement: s, rects: d, platform: m, elements: v, middlewareData: p } = o,
        { element: g, padding: b = 0 } = bn(a, o) || {};
      if (g == null) return {};
      const w = fg(b),
        R = { x: r, y: c },
        D = Ss(s),
        H = bs(D),
        E = await m.getDimensions(g),
        _ = D === 'y',
        q = _ ? 'top' : 'left',
        L = _ ? 'bottom' : 'right',
        B = _ ? 'clientHeight' : 'clientWidth',
        Z = d.reference[H] + d.reference[D] - R[D] - d.floating[H],
        k = R[D] - d.reference[D],
        I = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(g));
      let W = I ? I[B] : 0;
      (!W || !(await (m.isElement == null ? void 0 : m.isElement(I)))) &&
        (W = v.floating[B] || d.floating[H]);
      const K = Z / 2 - k / 2,
        ce = W / 2 - E[H] / 2 - 1,
        ge = Kn(w[q], ce),
        Se = Kn(w[L], ce),
        fe = ge,
        pe = W - E[H] - Se,
        he = W / 2 - E[H] / 2 + K,
        de = ts(fe, he, pe),
        O =
          !p.arrow &&
          Ea(s) != null &&
          he !== de &&
          d.reference[H] / 2 - (he < fe ? ge : Se) - E[H] / 2 < 0,
        Q = O ? (he < fe ? he - fe : he - pe) : 0;
      return {
        [D]: R[D] + Q,
        data: { [D]: de, centerOffset: he - de - Q, ...(O && { alignmentOffset: Q }) },
        reset: O,
      };
    },
  }),
  G1 = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: 'flip',
        options: a,
        async fn(o) {
          var r, c;
          const {
              placement: s,
              middlewareData: d,
              rects: m,
              initialPlacement: v,
              platform: p,
              elements: g,
            } = o,
            {
              mainAxis: b = !0,
              crossAxis: w = !0,
              fallbackPlacements: R,
              fallbackStrategy: D = 'bestFit',
              fallbackAxisSideDirection: H = 'none',
              flipAlignment: E = !0,
              ..._
            } = bn(a, o);
          if ((r = d.arrow) != null && r.alignmentOffset) return {};
          const q = Sn(s),
            L = Jn(v),
            B = Sn(v) === v,
            Z = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)),
            k = R || (B || !E ? [io(v)] : j1(v)),
            I = H !== 'none';
          !R && I && k.push(...B1(v, E, H, Z));
          const W = [v, ...k],
            K = await Ri(o, _),
            ce = [];
          let ge = ((c = d.flip) == null ? void 0 : c.overflows) || [];
          if ((b && ce.push(K[q]), w)) {
            const he = U1(s, m, Z);
            ce.push(K[he[0]], K[he[1]]);
          }
          if (((ge = [...ge, { placement: s, overflows: ce }]), !ce.every((he) => he <= 0))) {
            var Se, fe;
            const he = (((Se = d.flip) == null ? void 0 : Se.index) || 0) + 1,
              de = W[he];
            if (de) return { data: { index: he, overflows: ge }, reset: { placement: de } };
            let O =
              (fe = ge
                .filter((Q) => Q.overflows[0] <= 0)
                .sort((Q, j) => Q.overflows[1] - j.overflows[1])[0]) == null
                ? void 0
                : fe.placement;
            if (!O)
              switch (D) {
                case 'bestFit': {
                  var pe;
                  const Q =
                    (pe = ge
                      .filter((j) => {
                        if (I) {
                          const ae = Jn(j.placement);
                          return ae === L || ae === 'y';
                        }
                        return !0;
                      })
                      .map((j) => [
                        j.placement,
                        j.overflows.filter((ae) => ae > 0).reduce((ae, x) => ae + x, 0),
                      ])
                      .sort((j, ae) => j[1] - ae[1])[0]) == null
                      ? void 0
                      : pe[0];
                  Q && (O = Q);
                  break;
                }
                case 'initialPlacement':
                  O = v;
                  break;
              }
            if (s !== O) return { reset: { placement: O } };
          }
          return {};
        },
      }
    );
  };
function Fh(a, o) {
  return {
    top: a.top - o.height,
    right: a.right - o.width,
    bottom: a.bottom - o.height,
    left: a.left - o.width,
  };
}
function Ih(a) {
  return _1.some((o) => a[o] >= 0);
}
const V1 = function (a) {
  return (
    a === void 0 && (a = {}),
    {
      name: 'hide',
      options: a,
      async fn(o) {
        const { rects: r } = o,
          { strategy: c = 'referenceHidden', ...s } = bn(a, o);
        switch (c) {
          case 'referenceHidden': {
            const d = await Ri(o, { ...s, elementContext: 'reference' }),
              m = Fh(d, r.reference);
            return { data: { referenceHiddenOffsets: m, referenceHidden: Ih(m) } };
          }
          case 'escaped': {
            const d = await Ri(o, { ...s, altBoundary: !0 }),
              m = Fh(d, r.floating);
            return { data: { escapedOffsets: m, escaped: Ih(m) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function k1(a, o) {
  const { placement: r, platform: c, elements: s } = a,
    d = await (c.isRTL == null ? void 0 : c.isRTL(s.floating)),
    m = Sn(r),
    v = Ea(r),
    p = Jn(r) === 'y',
    g = ['left', 'top'].includes(m) ? -1 : 1,
    b = d && p ? -1 : 1,
    w = bn(o, a);
  let {
    mainAxis: R,
    crossAxis: D,
    alignmentAxis: H,
  } = typeof w == 'number'
    ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: w.mainAxis || 0, crossAxis: w.crossAxis || 0, alignmentAxis: w.alignmentAxis };
  return (
    v && typeof H == 'number' && (D = v === 'end' ? H * -1 : H),
    p ? { x: D * b, y: R * g } : { x: R * g, y: D * b }
  );
}
const X1 = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: 'offset',
        options: a,
        async fn(o) {
          var r, c;
          const { x: s, y: d, placement: m, middlewareData: v } = o,
            p = await k1(o, a);
          return m === ((r = v.offset) == null ? void 0 : r.placement) &&
            (c = v.arrow) != null &&
            c.alignmentOffset
            ? {}
            : { x: s + p.x, y: d + p.y, data: { ...p, placement: m } };
        },
      }
    );
  },
  Q1 = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: 'shift',
        options: a,
        async fn(o) {
          const { x: r, y: c, placement: s } = o,
            {
              mainAxis: d = !0,
              crossAxis: m = !1,
              limiter: v = {
                fn: (_) => {
                  let { x: q, y: L } = _;
                  return { x: q, y: L };
                },
              },
              ...p
            } = bn(a, o),
            g = { x: r, y: c },
            b = await Ri(o, p),
            w = Jn(Sn(s)),
            R = ys(w);
          let D = g[R],
            H = g[w];
          if (d) {
            const _ = R === 'y' ? 'top' : 'left',
              q = R === 'y' ? 'bottom' : 'right',
              L = D + b[_],
              B = D - b[q];
            D = ts(L, D, B);
          }
          if (m) {
            const _ = w === 'y' ? 'top' : 'left',
              q = w === 'y' ? 'bottom' : 'right',
              L = H + b[_],
              B = H - b[q];
            H = ts(L, H, B);
          }
          const E = v.fn({ ...o, [R]: D, [w]: H });
          return { ...E, data: { x: E.x - r, y: E.y - c, enabled: { [R]: d, [w]: m } } };
        },
      }
    );
  },
  Z1 = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(o) {
          const { x: r, y: c, placement: s, rects: d, middlewareData: m } = o,
            { offset: v = 0, mainAxis: p = !0, crossAxis: g = !0 } = bn(a, o),
            b = { x: r, y: c },
            w = Jn(s),
            R = ys(w);
          let D = b[R],
            H = b[w];
          const E = bn(v, o),
            _ =
              typeof E == 'number'
                ? { mainAxis: E, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...E };
          if (p) {
            const B = R === 'y' ? 'height' : 'width',
              Z = d.reference[R] - d.floating[B] + _.mainAxis,
              k = d.reference[R] + d.reference[B] - _.mainAxis;
            D < Z ? (D = Z) : D > k && (D = k);
          }
          if (g) {
            var q, L;
            const B = R === 'y' ? 'width' : 'height',
              Z = ['top', 'left'].includes(Sn(s)),
              k =
                d.reference[w] -
                d.floating[B] +
                ((Z && ((q = m.offset) == null ? void 0 : q[w])) || 0) +
                (Z ? 0 : _.crossAxis),
              I =
                d.reference[w] +
                d.reference[B] +
                (Z ? 0 : ((L = m.offset) == null ? void 0 : L[w]) || 0) -
                (Z ? _.crossAxis : 0);
            H < k ? (H = k) : H > I && (H = I);
          }
          return { [R]: D, [w]: H };
        },
      }
    );
  },
  K1 = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: 'size',
        options: a,
        async fn(o) {
          var r, c;
          const { placement: s, rects: d, platform: m, elements: v } = o,
            { apply: p = () => {}, ...g } = bn(a, o),
            b = await Ri(o, g),
            w = Sn(s),
            R = Ea(s),
            D = Jn(s) === 'y',
            { width: H, height: E } = d.floating;
          let _, q;
          w === 'top' || w === 'bottom'
            ? ((_ = w),
              (q =
                R === ((await (m.isRTL == null ? void 0 : m.isRTL(v.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((q = w), (_ = R === 'end' ? 'top' : 'bottom'));
          const L = E - b.top - b.bottom,
            B = H - b.left - b.right,
            Z = Kn(E - b[_], L),
            k = Kn(H - b[q], B),
            I = !o.middlewareData.shift;
          let W = Z,
            K = k;
          if (
            ((r = o.middlewareData.shift) != null && r.enabled.x && (K = B),
            (c = o.middlewareData.shift) != null && c.enabled.y && (W = L),
            I && !R)
          ) {
            const ge = Mt(b.left, 0),
              Se = Mt(b.right, 0),
              fe = Mt(b.top, 0),
              pe = Mt(b.bottom, 0);
            D
              ? (K = H - 2 * (ge !== 0 || Se !== 0 ? ge + Se : Mt(b.left, b.right)))
              : (W = E - 2 * (fe !== 0 || pe !== 0 ? fe + pe : Mt(b.top, b.bottom)));
          }
          await p({ ...o, availableWidth: K, availableHeight: W });
          const ce = await m.getDimensions(v.floating);
          return H !== ce.width || E !== ce.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function ho() {
  return typeof window < 'u';
}
function wa(a) {
  return dg(a) ? (a.nodeName || '').toLowerCase() : '#document';
}
function Ct(a) {
  var o;
  return (a == null || (o = a.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function tn(a) {
  var o;
  return (o = (dg(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : o.documentElement;
}
function dg(a) {
  return ho() ? a instanceof Node || a instanceof Ct(a).Node : !1;
}
function kt(a) {
  return ho() ? a instanceof Element || a instanceof Ct(a).Element : !1;
}
function en(a) {
  return ho() ? a instanceof HTMLElement || a instanceof Ct(a).HTMLElement : !1;
}
function ev(a) {
  return !ho() || typeof ShadowRoot > 'u'
    ? !1
    : a instanceof ShadowRoot || a instanceof Ct(a).ShadowRoot;
}
function Ni(a) {
  const { overflow: o, overflowX: r, overflowY: c, display: s } = Xt(a);
  return /auto|scroll|overlay|hidden|clip/.test(o + c + r) && !['inline', 'contents'].includes(s);
}
function J1(a) {
  return ['table', 'td', 'th'].includes(wa(a));
}
function vo(a) {
  return [':popover-open', ':modal'].some((o) => {
    try {
      return a.matches(o);
    } catch {
      return !1;
    }
  });
}
function xs(a) {
  const o = Es(),
    r = kt(a) ? Xt(a) : a;
  return (
    ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((c) =>
      r[c] ? r[c] !== 'none' : !1
    ) ||
    (r.containerType ? r.containerType !== 'normal' : !1) ||
    (!o && (r.backdropFilter ? r.backdropFilter !== 'none' : !1)) ||
    (!o && (r.filter ? r.filter !== 'none' : !1)) ||
    ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((c) =>
      (r.willChange || '').includes(c)
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((c) => (r.contain || '').includes(c))
  );
}
function W1(a) {
  let o = Wn(a);
  for (; en(o) && !ba(o); ) {
    if (xs(o)) return o;
    if (vo(o)) return null;
    o = Wn(o);
  }
  return null;
}
function Es() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function ba(a) {
  return ['html', 'body', '#document'].includes(wa(a));
}
function Xt(a) {
  return Ct(a).getComputedStyle(a);
}
function go(a) {
  return kt(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function Wn(a) {
  if (wa(a) === 'html') return a;
  const o = a.assignedSlot || a.parentNode || (ev(a) && a.host) || tn(a);
  return ev(o) ? o.host : o;
}
function mg(a) {
  const o = Wn(a);
  return ba(o) ? (a.ownerDocument ? a.ownerDocument.body : a.body) : en(o) && Ni(o) ? o : mg(o);
}
function Oi(a, o, r) {
  var c;
  o === void 0 && (o = []), r === void 0 && (r = !0);
  const s = mg(a),
    d = s === ((c = a.ownerDocument) == null ? void 0 : c.body),
    m = Ct(s);
  if (d) {
    const v = ls(m);
    return o.concat(m, m.visualViewport || [], Ni(s) ? s : [], v && r ? Oi(v) : []);
  }
  return o.concat(s, Oi(s, [], r));
}
function ls(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function hg(a) {
  const o = Xt(a);
  let r = parseFloat(o.width) || 0,
    c = parseFloat(o.height) || 0;
  const s = en(a),
    d = s ? a.offsetWidth : r,
    m = s ? a.offsetHeight : c,
    v = ao(r) !== d || ao(c) !== m;
  return v && ((r = d), (c = m)), { width: r, height: c, $: v };
}
function ws(a) {
  return kt(a) ? a : a.contextElement;
}
function pa(a) {
  const o = ws(a);
  if (!en(o)) return It(1);
  const r = o.getBoundingClientRect(),
    { width: c, height: s, $: d } = hg(o);
  let m = (d ? ao(r.width) : r.width) / c,
    v = (d ? ao(r.height) : r.height) / s;
  return (
    (!m || !Number.isFinite(m)) && (m = 1), (!v || !Number.isFinite(v)) && (v = 1), { x: m, y: v }
  );
}
const P1 = It(0);
function vg(a) {
  const o = Ct(a);
  return !Es() || !o.visualViewport
    ? P1
    : { x: o.visualViewport.offsetLeft, y: o.visualViewport.offsetTop };
}
function $1(a, o, r) {
  return o === void 0 && (o = !1), !r || (o && r !== Ct(a)) ? !1 : o;
}
function El(a, o, r, c) {
  o === void 0 && (o = !1), r === void 0 && (r = !1);
  const s = a.getBoundingClientRect(),
    d = ws(a);
  let m = It(1);
  o && (c ? kt(c) && (m = pa(c)) : (m = pa(a)));
  const v = $1(d, r, c) ? vg(d) : It(0);
  let p = (s.left + v.x) / m.x,
    g = (s.top + v.y) / m.y,
    b = s.width / m.x,
    w = s.height / m.y;
  if (d) {
    const R = Ct(d),
      D = c && kt(c) ? Ct(c) : c;
    let H = R,
      E = ls(H);
    for (; E && c && D !== H; ) {
      const _ = pa(E),
        q = E.getBoundingClientRect(),
        L = Xt(E),
        B = q.left + (E.clientLeft + parseFloat(L.paddingLeft)) * _.x,
        Z = q.top + (E.clientTop + parseFloat(L.paddingTop)) * _.y;
      (p *= _.x), (g *= _.y), (b *= _.x), (w *= _.y), (p += B), (g += Z), (H = Ct(E)), (E = ls(H));
    }
  }
  return uo({ width: b, height: w, x: p, y: g });
}
function As(a, o) {
  const r = go(a).scrollLeft;
  return o ? o.left + r : El(tn(a)).left + r;
}
function gg(a, o, r) {
  r === void 0 && (r = !1);
  const c = a.getBoundingClientRect(),
    s = c.left + o.scrollLeft - (r ? 0 : As(a, c)),
    d = c.top + o.scrollTop;
  return { x: s, y: d };
}
function F1(a) {
  let { elements: o, rect: r, offsetParent: c, strategy: s } = a;
  const d = s === 'fixed',
    m = tn(c),
    v = o ? vo(o.floating) : !1;
  if (c === m || (v && d)) return r;
  let p = { scrollLeft: 0, scrollTop: 0 },
    g = It(1);
  const b = It(0),
    w = en(c);
  if ((w || (!w && !d)) && ((wa(c) !== 'body' || Ni(m)) && (p = go(c)), en(c))) {
    const D = El(c);
    (g = pa(c)), (b.x = D.x + c.clientLeft), (b.y = D.y + c.clientTop);
  }
  const R = m && !w && !d ? gg(m, p, !0) : It(0);
  return {
    width: r.width * g.x,
    height: r.height * g.y,
    x: r.x * g.x - p.scrollLeft * g.x + b.x + R.x,
    y: r.y * g.y - p.scrollTop * g.y + b.y + R.y,
  };
}
function I1(a) {
  return Array.from(a.getClientRects());
}
function ex(a) {
  const o = tn(a),
    r = go(a),
    c = a.ownerDocument.body,
    s = Mt(o.scrollWidth, o.clientWidth, c.scrollWidth, c.clientWidth),
    d = Mt(o.scrollHeight, o.clientHeight, c.scrollHeight, c.clientHeight);
  let m = -r.scrollLeft + As(a);
  const v = -r.scrollTop;
  return (
    Xt(c).direction === 'rtl' && (m += Mt(o.clientWidth, c.clientWidth) - s),
    { width: s, height: d, x: m, y: v }
  );
}
function tx(a, o) {
  const r = Ct(a),
    c = tn(a),
    s = r.visualViewport;
  let d = c.clientWidth,
    m = c.clientHeight,
    v = 0,
    p = 0;
  if (s) {
    (d = s.width), (m = s.height);
    const g = Es();
    (!g || (g && o === 'fixed')) && ((v = s.offsetLeft), (p = s.offsetTop));
  }
  return { width: d, height: m, x: v, y: p };
}
function nx(a, o) {
  const r = El(a, !0, o === 'fixed'),
    c = r.top + a.clientTop,
    s = r.left + a.clientLeft,
    d = en(a) ? pa(a) : It(1),
    m = a.clientWidth * d.x,
    v = a.clientHeight * d.y,
    p = s * d.x,
    g = c * d.y;
  return { width: m, height: v, x: p, y: g };
}
function tv(a, o, r) {
  let c;
  if (o === 'viewport') c = tx(a, r);
  else if (o === 'document') c = ex(tn(a));
  else if (kt(o)) c = nx(o, r);
  else {
    const s = vg(a);
    c = { x: o.x - s.x, y: o.y - s.y, width: o.width, height: o.height };
  }
  return uo(c);
}
function pg(a, o) {
  const r = Wn(a);
  return r === o || !kt(r) || ba(r) ? !1 : Xt(r).position === 'fixed' || pg(r, o);
}
function lx(a, o) {
  const r = o.get(a);
  if (r) return r;
  let c = Oi(a, [], !1).filter((v) => kt(v) && wa(v) !== 'body'),
    s = null;
  const d = Xt(a).position === 'fixed';
  let m = d ? Wn(a) : a;
  for (; kt(m) && !ba(m); ) {
    const v = Xt(m),
      p = xs(m);
    !p && v.position === 'fixed' && (s = null),
      (
        d
          ? !p && !s
          : (!p && v.position === 'static' && !!s && ['absolute', 'fixed'].includes(s.position)) ||
            (Ni(m) && !p && pg(a, m))
      )
        ? (c = c.filter((b) => b !== m))
        : (s = v),
      (m = Wn(m));
  }
  return o.set(a, c), c;
}
function ax(a) {
  let { element: o, boundary: r, rootBoundary: c, strategy: s } = a;
  const m = [...(r === 'clippingAncestors' ? (vo(o) ? [] : lx(o, this._c)) : [].concat(r)), c],
    v = m[0],
    p = m.reduce(
      (g, b) => {
        const w = tv(o, b, s);
        return (
          (g.top = Mt(w.top, g.top)),
          (g.right = Kn(w.right, g.right)),
          (g.bottom = Kn(w.bottom, g.bottom)),
          (g.left = Mt(w.left, g.left)),
          g
        );
      },
      tv(o, v, s)
    );
  return { width: p.right - p.left, height: p.bottom - p.top, x: p.left, y: p.top };
}
function ix(a) {
  const { width: o, height: r } = hg(a);
  return { width: o, height: r };
}
function ux(a, o, r) {
  const c = en(o),
    s = tn(o),
    d = r === 'fixed',
    m = El(a, !0, d, o);
  let v = { scrollLeft: 0, scrollTop: 0 };
  const p = It(0);
  if (c || (!c && !d))
    if (((wa(o) !== 'body' || Ni(s)) && (v = go(o)), c)) {
      const R = El(o, !0, d, o);
      (p.x = R.x + o.clientLeft), (p.y = R.y + o.clientTop);
    } else s && (p.x = As(s));
  const g = s && !c && !d ? gg(s, v) : It(0),
    b = m.left + v.scrollLeft - p.x - g.x,
    w = m.top + v.scrollTop - p.y - g.y;
  return { x: b, y: w, width: m.width, height: m.height };
}
function Kr(a) {
  return Xt(a).position === 'static';
}
function nv(a, o) {
  if (!en(a) || Xt(a).position === 'fixed') return null;
  if (o) return o(a);
  let r = a.offsetParent;
  return tn(a) === r && (r = r.ownerDocument.body), r;
}
function yg(a, o) {
  const r = Ct(a);
  if (vo(a)) return r;
  if (!en(a)) {
    let s = Wn(a);
    for (; s && !ba(s); ) {
      if (kt(s) && !Kr(s)) return s;
      s = Wn(s);
    }
    return r;
  }
  let c = nv(a, o);
  for (; c && J1(c) && Kr(c); ) c = nv(c, o);
  return c && ba(c) && Kr(c) && !xs(c) ? r : c || W1(a) || r;
}
const ox = async function (a) {
  const o = this.getOffsetParent || yg,
    r = this.getDimensions,
    c = await r(a.floating);
  return {
    reference: ux(a.reference, await o(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: c.width, height: c.height },
  };
};
function cx(a) {
  return Xt(a).direction === 'rtl';
}
const rx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: F1,
  getDocumentElement: tn,
  getClippingRect: ax,
  getOffsetParent: yg,
  getElementRects: ox,
  getClientRects: I1,
  getDimensions: ix,
  getScale: pa,
  isElement: kt,
  isRTL: cx,
};
function bg(a, o) {
  return a.x === o.x && a.y === o.y && a.width === o.width && a.height === o.height;
}
function sx(a, o) {
  let r = null,
    c;
  const s = tn(a);
  function d() {
    var v;
    clearTimeout(c), (v = r) == null || v.disconnect(), (r = null);
  }
  function m(v, p) {
    v === void 0 && (v = !1), p === void 0 && (p = 1), d();
    const g = a.getBoundingClientRect(),
      { left: b, top: w, width: R, height: D } = g;
    if ((v || o(), !R || !D)) return;
    const H = Fu(w),
      E = Fu(s.clientWidth - (b + R)),
      _ = Fu(s.clientHeight - (w + D)),
      q = Fu(b),
      B = {
        rootMargin: -H + 'px ' + -E + 'px ' + -_ + 'px ' + -q + 'px',
        threshold: Mt(0, Kn(1, p)) || 1,
      };
    let Z = !0;
    function k(I) {
      const W = I[0].intersectionRatio;
      if (W !== p) {
        if (!Z) return m();
        W
          ? m(!1, W)
          : (c = setTimeout(() => {
              m(!1, 1e-7);
            }, 1e3));
      }
      W === 1 && !bg(g, a.getBoundingClientRect()) && m(), (Z = !1);
    }
    try {
      r = new IntersectionObserver(k, { ...B, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(k, B);
    }
    r.observe(a);
  }
  return m(!0), d;
}
function fx(a, o, r, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: d = !0,
      elementResize: m = typeof ResizeObserver == 'function',
      layoutShift: v = typeof IntersectionObserver == 'function',
      animationFrame: p = !1,
    } = c,
    g = ws(a),
    b = s || d ? [...(g ? Oi(g) : []), ...Oi(o)] : [];
  b.forEach((q) => {
    s && q.addEventListener('scroll', r, { passive: !0 }), d && q.addEventListener('resize', r);
  });
  const w = g && v ? sx(g, r) : null;
  let R = -1,
    D = null;
  m &&
    ((D = new ResizeObserver((q) => {
      let [L] = q;
      L &&
        L.target === g &&
        D &&
        (D.unobserve(o),
        cancelAnimationFrame(R),
        (R = requestAnimationFrame(() => {
          var B;
          (B = D) == null || B.observe(o);
        }))),
        r();
    })),
    g && !p && D.observe(g),
    D.observe(o));
  let H,
    E = p ? El(a) : null;
  p && _();
  function _() {
    const q = El(a);
    E && !bg(E, q) && r(), (E = q), (H = requestAnimationFrame(_));
  }
  return (
    r(),
    () => {
      var q;
      b.forEach((L) => {
        s && L.removeEventListener('scroll', r), d && L.removeEventListener('resize', r);
      }),
        w == null || w(),
        (q = D) == null || q.disconnect(),
        (D = null),
        p && cancelAnimationFrame(H);
    }
  );
}
const dx = X1,
  mx = Q1,
  hx = G1,
  vx = K1,
  gx = V1,
  lv = Y1,
  px = Z1,
  yx = (a, o, r) => {
    const c = new Map(),
      s = { platform: rx, ...r },
      d = { ...s.platform, _c: c };
    return q1(a, o, { ...s, platform: d });
  };
var no = typeof document < 'u' ? y.useLayoutEffect : y.useEffect;
function oo(a, o) {
  if (a === o) return !0;
  if (typeof a != typeof o) return !1;
  if (typeof a == 'function' && a.toString() === o.toString()) return !0;
  let r, c, s;
  if (a && o && typeof a == 'object') {
    if (Array.isArray(a)) {
      if (((r = a.length), r !== o.length)) return !1;
      for (c = r; c-- !== 0; ) if (!oo(a[c], o[c])) return !1;
      return !0;
    }
    if (((s = Object.keys(a)), (r = s.length), r !== Object.keys(o).length)) return !1;
    for (c = r; c-- !== 0; ) if (!{}.hasOwnProperty.call(o, s[c])) return !1;
    for (c = r; c-- !== 0; ) {
      const d = s[c];
      if (!(d === '_owner' && a.$$typeof) && !oo(a[d], o[d])) return !1;
    }
    return !0;
  }
  return a !== a && o !== o;
}
function Sg(a) {
  return typeof window > 'u' ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function av(a, o) {
  const r = Sg(a);
  return Math.round(o * r) / r;
}
function Jr(a) {
  const o = y.useRef(a);
  return (
    no(() => {
      o.current = a;
    }),
    o
  );
}
function bx(a) {
  a === void 0 && (a = {});
  const {
      placement: o = 'bottom',
      strategy: r = 'absolute',
      middleware: c = [],
      platform: s,
      elements: { reference: d, floating: m } = {},
      transform: v = !0,
      whileElementsMounted: p,
      open: g,
    } = a,
    [b, w] = y.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: o,
      middlewareData: {},
      isPositioned: !1,
    }),
    [R, D] = y.useState(c);
  oo(R, c) || D(c);
  const [H, E] = y.useState(null),
    [_, q] = y.useState(null),
    L = y.useCallback((j) => {
      j !== I.current && ((I.current = j), E(j));
    }, []),
    B = y.useCallback((j) => {
      j !== W.current && ((W.current = j), q(j));
    }, []),
    Z = d || H,
    k = m || _,
    I = y.useRef(null),
    W = y.useRef(null),
    K = y.useRef(b),
    ce = p != null,
    ge = Jr(p),
    Se = Jr(s),
    fe = Jr(g),
    pe = y.useCallback(() => {
      if (!I.current || !W.current) return;
      const j = { placement: o, strategy: r, middleware: R };
      Se.current && (j.platform = Se.current),
        yx(I.current, W.current, j).then((ae) => {
          const x = { ...ae, isPositioned: fe.current !== !1 };
          he.current &&
            !oo(K.current, x) &&
            ((K.current = x),
            Ci.flushSync(() => {
              w(x);
            }));
        });
    }, [R, o, r, Se, fe]);
  no(() => {
    g === !1 &&
      K.current.isPositioned &&
      ((K.current.isPositioned = !1), w((j) => ({ ...j, isPositioned: !1 })));
  }, [g]);
  const he = y.useRef(!1);
  no(
    () => (
      (he.current = !0),
      () => {
        he.current = !1;
      }
    ),
    []
  ),
    no(() => {
      if ((Z && (I.current = Z), k && (W.current = k), Z && k)) {
        if (ge.current) return ge.current(Z, k, pe);
        pe();
      }
    }, [Z, k, pe, ge, ce]);
  const de = y.useMemo(
      () => ({ reference: I, floating: W, setReference: L, setFloating: B }),
      [L, B]
    ),
    O = y.useMemo(() => ({ reference: Z, floating: k }), [Z, k]),
    Q = y.useMemo(() => {
      const j = { position: r, left: 0, top: 0 };
      if (!O.floating) return j;
      const ae = av(O.floating, b.x),
        x = av(O.floating, b.y);
      return v
        ? {
            ...j,
            transform: 'translate(' + ae + 'px, ' + x + 'px)',
            ...(Sg(O.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: r, left: ae, top: x };
    }, [r, v, O.floating, b.x, b.y]);
  return y.useMemo(
    () => ({ ...b, update: pe, refs: de, elements: O, floatingStyles: Q }),
    [b, pe, de, O, Q]
  );
}
const Sx = (a) => {
    function o(r) {
      return {}.hasOwnProperty.call(r, 'current');
    }
    return {
      name: 'arrow',
      options: a,
      fn(r) {
        const { element: c, padding: s } = typeof a == 'function' ? a(r) : a;
        return c && o(c)
          ? c.current != null
            ? lv({ element: c.current, padding: s }).fn(r)
            : {}
          : c
            ? lv({ element: c, padding: s }).fn(r)
            : {};
      },
    };
  },
  xx = (a, o) => ({ ...dx(a), options: [a, o] }),
  Ex = (a, o) => ({ ...mx(a), options: [a, o] }),
  wx = (a, o) => ({ ...px(a), options: [a, o] }),
  Ax = (a, o) => ({ ...hx(a), options: [a, o] }),
  Tx = (a, o) => ({ ...vx(a), options: [a, o] }),
  Rx = (a, o) => ({ ...gx(a), options: [a, o] }),
  Ox = (a, o) => ({ ...Sx(a), options: [a, o] });
var Mx = 'Arrow',
  xg = y.forwardRef((a, o) => {
    const { children: r, width: c = 10, height: s = 5, ...d } = a;
    return N.jsx(Be.svg, {
      ...d,
      ref: o,
      width: c,
      height: s,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: a.asChild ? r : N.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
xg.displayName = Mx;
var Cx = xg;
function Nx(a) {
  const [o, r] = y.useState(void 0);
  return (
    st(() => {
      if (a) {
        r({ width: a.offsetWidth, height: a.offsetHeight });
        const c = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const d = s[0];
          let m, v;
          if ('borderBoxSize' in d) {
            const p = d.borderBoxSize,
              g = Array.isArray(p) ? p[0] : p;
            (m = g.inlineSize), (v = g.blockSize);
          } else (m = a.offsetWidth), (v = a.offsetHeight);
          r({ width: m, height: v });
        });
        return c.observe(a, { box: 'border-box' }), () => c.unobserve(a);
      } else r(void 0);
    }, [a]),
    o
  );
}
var Ts = 'Popper',
  [Eg, wg] = ro(Ts),
  [_x, Ag] = Eg(Ts),
  Tg = (a) => {
    const { __scopePopper: o, children: r } = a,
      [c, s] = y.useState(null);
    return N.jsx(_x, { scope: o, anchor: c, onAnchorChange: s, children: r });
  };
Tg.displayName = Ts;
var Rg = 'PopperAnchor',
  Og = y.forwardRef((a, o) => {
    const { __scopePopper: r, virtualRef: c, ...s } = a,
      d = Ag(Rg, r),
      m = y.useRef(null),
      v = Ze(o, m);
    return (
      y.useEffect(() => {
        d.onAnchorChange((c == null ? void 0 : c.current) || m.current);
      }),
      c ? null : N.jsx(Be.div, { ...s, ref: v })
    );
  });
Og.displayName = Rg;
var Rs = 'PopperContent',
  [Dx, zx] = Eg(Rs),
  Mg = y.forwardRef((a, o) => {
    var $, ue, Ne, Re, Ee, we;
    const {
        __scopePopper: r,
        side: c = 'bottom',
        sideOffset: s = 0,
        align: d = 'center',
        alignOffset: m = 0,
        arrowPadding: v = 0,
        avoidCollisions: p = !0,
        collisionBoundary: g = [],
        collisionPadding: b = 0,
        sticky: w = 'partial',
        hideWhenDetached: R = !1,
        updatePositionStrategy: D = 'optimized',
        onPlaced: H,
        ...E
      } = a,
      _ = Ag(Rs, r),
      [q, L] = y.useState(null),
      B = Ze(o, (nt) => L(nt)),
      [Z, k] = y.useState(null),
      I = Nx(Z),
      W = (I == null ? void 0 : I.width) ?? 0,
      K = (I == null ? void 0 : I.height) ?? 0,
      ce = c + (d !== 'center' ? '-' + d : ''),
      ge = typeof b == 'number' ? b : { top: 0, right: 0, bottom: 0, left: 0, ...b },
      Se = Array.isArray(g) ? g : [g],
      fe = Se.length > 0,
      pe = { padding: ge, boundary: Se.filter(jx), altBoundary: fe },
      {
        refs: he,
        floatingStyles: de,
        placement: O,
        isPositioned: Q,
        middlewareData: j,
      } = bx({
        strategy: 'fixed',
        placement: ce,
        whileElementsMounted: (...nt) => fx(...nt, { animationFrame: D === 'always' }),
        elements: { reference: _.anchor },
        middleware: [
          xx({ mainAxis: s + K, alignmentAxis: m }),
          p && Ex({ mainAxis: !0, crossAxis: !1, limiter: w === 'partial' ? wx() : void 0, ...pe }),
          p && Ax({ ...pe }),
          Tx({
            ...pe,
            apply: ({ elements: nt, rects: dt, availableWidth: Fn, availableHeight: In }) => {
              const { width: ut, height: So } = dt.reference,
                el = nt.floating.style;
              el.setProperty('--radix-popper-available-width', `${Fn}px`),
                el.setProperty('--radix-popper-available-height', `${In}px`),
                el.setProperty('--radix-popper-anchor-width', `${ut}px`),
                el.setProperty('--radix-popper-anchor-height', `${So}px`);
            },
          }),
          Z && Ox({ element: Z, padding: v }),
          Hx({ arrowWidth: W, arrowHeight: K }),
          R && Rx({ strategy: 'referenceHidden', ...pe }),
        ],
      }),
      [ae, x] = _g(O),
      V = Sl(H);
    st(() => {
      Q && (V == null || V());
    }, [Q, V]);
    const P = ($ = j.arrow) == null ? void 0 : $.x,
      J = (ue = j.arrow) == null ? void 0 : ue.y,
      F = ((Ne = j.arrow) == null ? void 0 : Ne.centerOffset) !== 0,
      [me, ie] = y.useState();
    return (
      st(() => {
        q && ie(window.getComputedStyle(q).zIndex);
      }, [q]),
      N.jsx('div', {
        ref: he.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...de,
          transform: Q ? de.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: me,
          '--radix-popper-transform-origin': [
            (Re = j.transformOrigin) == null ? void 0 : Re.x,
            (Ee = j.transformOrigin) == null ? void 0 : Ee.y,
          ].join(' '),
          ...(((we = j.hide) == null ? void 0 : we.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: a.dir,
        children: N.jsx(Dx, {
          scope: r,
          placedSide: ae,
          onArrowChange: k,
          arrowX: P,
          arrowY: J,
          shouldHideArrow: F,
          children: N.jsx(Be.div, {
            'data-side': ae,
            'data-align': x,
            ...E,
            ref: B,
            style: { ...E.style, animation: Q ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
Mg.displayName = Rs;
var Cg = 'PopperArrow',
  Ux = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  Ng = y.forwardRef(function (o, r) {
    const { __scopePopper: c, ...s } = o,
      d = zx(Cg, c),
      m = Ux[d.placedSide];
    return N.jsx('span', {
      ref: d.onArrowChange,
      style: {
        position: 'absolute',
        left: d.arrowX,
        top: d.arrowY,
        [m]: 0,
        transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
          d.placedSide
        ],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[d.placedSide],
        visibility: d.shouldHideArrow ? 'hidden' : void 0,
      },
      children: N.jsx(Cx, { ...s, ref: r, style: { ...s.style, display: 'block' } }),
    });
  });
Ng.displayName = Cg;
function jx(a) {
  return a !== null;
}
var Hx = (a) => ({
  name: 'transformOrigin',
  options: a,
  fn(o) {
    var _, q, L;
    const { placement: r, rects: c, middlewareData: s } = o,
      m = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0,
      v = m ? 0 : a.arrowWidth,
      p = m ? 0 : a.arrowHeight,
      [g, b] = _g(r),
      w = { start: '0%', center: '50%', end: '100%' }[b],
      R = (((q = s.arrow) == null ? void 0 : q.x) ?? 0) + v / 2,
      D = (((L = s.arrow) == null ? void 0 : L.y) ?? 0) + p / 2;
    let H = '',
      E = '';
    return (
      g === 'bottom'
        ? ((H = m ? w : `${R}px`), (E = `${-p}px`))
        : g === 'top'
          ? ((H = m ? w : `${R}px`), (E = `${c.floating.height + p}px`))
          : g === 'right'
            ? ((H = `${-p}px`), (E = m ? w : `${D}px`))
            : g === 'left' && ((H = `${c.floating.width + p}px`), (E = m ? w : `${D}px`)),
      { data: { x: H, y: E } }
    );
  },
});
function _g(a) {
  const [o, r = 'center'] = a.split('-');
  return [o, r];
}
var Bx = Tg,
  Lx = Og,
  qx = Mg,
  Yx = Ng;
function Gx(a) {
  const o = y.useRef({ value: a, previous: a });
  return y.useMemo(
    () => (
      o.current.value !== a && ((o.current.previous = o.current.value), (o.current.value = a)),
      o.current.previous
    ),
    [a]
  );
}
var Dg = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }),
  Vx = 'VisuallyHidden',
  kx = y.forwardRef((a, o) => N.jsx(Be.span, { ...a, ref: o, style: { ...Dg, ...a.style } }));
kx.displayName = Vx;
var Xx = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  Qx = [' ', 'Enter'],
  wl = 'Select',
  [po, yo, Zx] = M1(wl),
  [Aa, zE] = ro(wl, [Zx, wg]),
  bo = wg(),
  [Kx, Pn] = Aa(wl),
  [Jx, Wx] = Aa(wl),
  zg = (a) => {
    const {
        __scopeSelect: o,
        children: r,
        open: c,
        defaultOpen: s,
        onOpenChange: d,
        value: m,
        defaultValue: v,
        onValueChange: p,
        dir: g,
        name: b,
        autoComplete: w,
        disabled: R,
        required: D,
        form: H,
      } = a,
      E = bo(o),
      [_, q] = y.useState(null),
      [L, B] = y.useState(null),
      [Z, k] = y.useState(!1),
      I = N1(g),
      [W, K] = Fr({ prop: c, defaultProp: s ?? !1, onChange: d, caller: wl }),
      [ce, ge] = Fr({ prop: m, defaultProp: v, onChange: p, caller: wl }),
      Se = y.useRef(null),
      fe = _ ? H || !!_.closest('form') : !0,
      [pe, he] = y.useState(new Set()),
      de = Array.from(pe)
        .map((O) => O.props.value)
        .join(';');
    return N.jsx(Bx, {
      ...E,
      children: N.jsxs(Kx, {
        required: D,
        scope: o,
        trigger: _,
        onTriggerChange: q,
        valueNode: L,
        onValueNodeChange: B,
        valueNodeHasChildren: Z,
        onValueNodeHasChildrenChange: k,
        contentId: va(),
        value: ce,
        onValueChange: ge,
        open: W,
        onOpenChange: K,
        dir: I,
        triggerPointerDownPosRef: Se,
        disabled: R,
        children: [
          N.jsx(po.Provider, {
            scope: o,
            children: N.jsx(Jx, {
              scope: a.__scopeSelect,
              onNativeOptionAdd: y.useCallback((O) => {
                he((Q) => new Set(Q).add(O));
              }, []),
              onNativeOptionRemove: y.useCallback((O) => {
                he((Q) => {
                  const j = new Set(Q);
                  return j.delete(O), j;
                });
              }, []),
              children: r,
            }),
          }),
          fe
            ? N.jsxs(
                lp,
                {
                  'aria-hidden': !0,
                  required: D,
                  tabIndex: -1,
                  name: b,
                  autoComplete: w,
                  value: ce,
                  onChange: (O) => ge(O.target.value),
                  disabled: R,
                  form: H,
                  children: [ce === void 0 ? N.jsx('option', { value: '' }) : null, Array.from(pe)],
                },
                de
              )
            : null,
        ],
      }),
    });
  };
zg.displayName = wl;
var Ug = 'SelectTrigger',
  jg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, disabled: c = !1, ...s } = a,
      d = bo(r),
      m = Pn(Ug, r),
      v = m.disabled || c,
      p = Ze(o, m.onTriggerChange),
      g = yo(r),
      b = y.useRef('touch'),
      [w, R, D] = ip((E) => {
        const _ = g().filter((B) => !B.disabled),
          q = _.find((B) => B.value === m.value),
          L = up(_, E, q);
        L !== void 0 && m.onValueChange(L.value);
      }),
      H = (E) => {
        v || (m.onOpenChange(!0), D()),
          E &&
            (m.triggerPointerDownPosRef.current = {
              x: Math.round(E.pageX),
              y: Math.round(E.pageY),
            });
      };
    return N.jsx(Lx, {
      asChild: !0,
      ...d,
      children: N.jsx(Be.button, {
        type: 'button',
        role: 'combobox',
        'aria-controls': m.contentId,
        'aria-expanded': m.open,
        'aria-required': m.required,
        'aria-autocomplete': 'none',
        dir: m.dir,
        'data-state': m.open ? 'open' : 'closed',
        disabled: v,
        'data-disabled': v ? '' : void 0,
        'data-placeholder': ap(m.value) ? '' : void 0,
        ...s,
        ref: p,
        onClick: qe(s.onClick, (E) => {
          E.currentTarget.focus(), b.current !== 'mouse' && H(E);
        }),
        onPointerDown: qe(s.onPointerDown, (E) => {
          b.current = E.pointerType;
          const _ = E.target;
          _.hasPointerCapture(E.pointerId) && _.releasePointerCapture(E.pointerId),
            E.button === 0 &&
              E.ctrlKey === !1 &&
              E.pointerType === 'mouse' &&
              (H(E), E.preventDefault());
        }),
        onKeyDown: qe(s.onKeyDown, (E) => {
          const _ = w.current !== '';
          !(E.ctrlKey || E.altKey || E.metaKey) && E.key.length === 1 && R(E.key),
            !(_ && E.key === ' ') && Xx.includes(E.key) && (H(), E.preventDefault());
        }),
      }),
    });
  });
jg.displayName = Ug;
var Hg = 'SelectValue',
  Bg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, className: c, style: s, children: d, placeholder: m = '', ...v } = a,
      p = Pn(Hg, r),
      { onValueNodeHasChildrenChange: g } = p,
      b = d !== void 0,
      w = Ze(o, p.onValueNodeChange);
    return (
      st(() => {
        g(b);
      }, [g, b]),
      N.jsx(Be.span, {
        ...v,
        ref: w,
        style: { pointerEvents: 'none' },
        children: ap(p.value) ? N.jsx(N.Fragment, { children: m }) : d,
      })
    );
  });
Bg.displayName = Hg;
var Px = 'SelectIcon',
  Lg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, children: c, ...s } = a;
    return N.jsx(Be.span, { 'aria-hidden': !0, ...s, ref: o, children: c || '▼' });
  });
Lg.displayName = Px;
var $x = 'SelectPortal',
  qg = (a) => N.jsx(ms, { asChild: !0, ...a });
qg.displayName = $x;
var Al = 'SelectContent',
  Yg = y.forwardRef((a, o) => {
    const r = Pn(Al, a.__scopeSelect),
      [c, s] = y.useState();
    if (
      (st(() => {
        s(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const d = c;
      return d
        ? Ci.createPortal(
            N.jsx(Gg, {
              scope: a.__scopeSelect,
              children: N.jsx(po.Slot, {
                scope: a.__scopeSelect,
                children: N.jsx('div', { children: a.children }),
              }),
            }),
            d
          )
        : null;
    }
    return N.jsx(Vg, { ...a, ref: o });
  });
Yg.displayName = Al;
var Vt = 10,
  [Gg, $n] = Aa(Al),
  Fx = 'SelectContentImpl',
  Ix = ya('SelectContent.RemoveScroll'),
  Vg = y.forwardRef((a, o) => {
    const {
        __scopeSelect: r,
        position: c = 'item-aligned',
        onCloseAutoFocus: s,
        onEscapeKeyDown: d,
        onPointerDownOutside: m,
        side: v,
        sideOffset: p,
        align: g,
        alignOffset: b,
        arrowPadding: w,
        collisionBoundary: R,
        collisionPadding: D,
        sticky: H,
        hideWhenDetached: E,
        avoidCollisions: _,
        ...q
      } = a,
      L = Pn(Al, r),
      [B, Z] = y.useState(null),
      [k, I] = y.useState(null),
      W = Ze(o, ($) => Z($)),
      [K, ce] = y.useState(null),
      [ge, Se] = y.useState(null),
      fe = yo(r),
      [pe, he] = y.useState(!1),
      de = y.useRef(!1);
    y.useEffect(() => {
      if (B) return Yv(B);
    }, [B]),
      _v();
    const O = y.useCallback(
        ($) => {
          const [ue, ...Ne] = fe().map((we) => we.ref.current),
            [Re] = Ne.slice(-1),
            Ee = document.activeElement;
          for (const we of $)
            if (
              we === Ee ||
              (we == null || we.scrollIntoView({ block: 'nearest' }),
              we === ue && k && (k.scrollTop = 0),
              we === Re && k && (k.scrollTop = k.scrollHeight),
              we == null || we.focus(),
              document.activeElement !== Ee)
            )
              return;
        },
        [fe, k]
      ),
      Q = y.useCallback(() => O([K, B]), [O, K, B]);
    y.useEffect(() => {
      pe && Q();
    }, [pe, Q]);
    const { onOpenChange: j, triggerPointerDownPosRef: ae } = L;
    y.useEffect(() => {
      if (B) {
        let $ = { x: 0, y: 0 };
        const ue = (Re) => {
            var Ee, we;
            $ = {
              x: Math.abs(
                Math.round(Re.pageX) - (((Ee = ae.current) == null ? void 0 : Ee.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(Re.pageY) - (((we = ae.current) == null ? void 0 : we.y) ?? 0)
              ),
            };
          },
          Ne = (Re) => {
            $.x <= 10 && $.y <= 10 ? Re.preventDefault() : B.contains(Re.target) || j(!1),
              document.removeEventListener('pointermove', ue),
              (ae.current = null);
          };
        return (
          ae.current !== null &&
            (document.addEventListener('pointermove', ue),
            document.addEventListener('pointerup', Ne, { capture: !0, once: !0 })),
          () => {
            document.removeEventListener('pointermove', ue),
              document.removeEventListener('pointerup', Ne, { capture: !0 });
          }
        );
      }
    }, [B, j, ae]),
      y.useEffect(() => {
        const $ = () => j(!1);
        return (
          window.addEventListener('blur', $),
          window.addEventListener('resize', $),
          () => {
            window.removeEventListener('blur', $), window.removeEventListener('resize', $);
          }
        );
      }, [j]);
    const [x, V] = ip(($) => {
        const ue = fe().filter((Ee) => !Ee.disabled),
          Ne = ue.find((Ee) => Ee.ref.current === document.activeElement),
          Re = up(ue, $, Ne);
        Re && setTimeout(() => Re.ref.current.focus());
      }),
      P = y.useCallback(
        ($, ue, Ne) => {
          const Re = !de.current && !Ne;
          ((L.value !== void 0 && L.value === ue) || Re) && (ce($), Re && (de.current = !0));
        },
        [L.value]
      ),
      J = y.useCallback(() => (B == null ? void 0 : B.focus()), [B]),
      F = y.useCallback(
        ($, ue, Ne) => {
          const Re = !de.current && !Ne;
          ((L.value !== void 0 && L.value === ue) || Re) && Se($);
        },
        [L.value]
      ),
      me = c === 'popper' ? as : kg,
      ie =
        me === as
          ? {
              side: v,
              sideOffset: p,
              align: g,
              alignOffset: b,
              arrowPadding: w,
              collisionBoundary: R,
              collisionPadding: D,
              sticky: H,
              hideWhenDetached: E,
              avoidCollisions: _,
            }
          : {};
    return N.jsx(Gg, {
      scope: r,
      content: B,
      viewport: k,
      onViewportChange: I,
      itemRefCallback: P,
      selectedItem: K,
      onItemLeave: J,
      itemTextRefCallback: F,
      focusSelectedItem: Q,
      selectedItemText: ge,
      position: c,
      isPositioned: pe,
      searchRef: x,
      children: N.jsx(hs, {
        as: Ix,
        allowPinchZoom: !0,
        children: N.jsx(ds, {
          asChild: !0,
          trapped: L.open,
          onMountAutoFocus: ($) => {
            $.preventDefault();
          },
          onUnmountAutoFocus: qe(s, ($) => {
            var ue;
            (ue = L.trigger) == null || ue.focus({ preventScroll: !0 }), $.preventDefault();
          }),
          children: N.jsx(fs, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: d,
            onPointerDownOutside: m,
            onFocusOutside: ($) => $.preventDefault(),
            onDismiss: () => L.onOpenChange(!1),
            children: N.jsx(me, {
              role: 'listbox',
              id: L.contentId,
              'data-state': L.open ? 'open' : 'closed',
              dir: L.dir,
              onContextMenu: ($) => $.preventDefault(),
              ...q,
              ...ie,
              onPlaced: () => he(!0),
              ref: W,
              style: { display: 'flex', flexDirection: 'column', outline: 'none', ...q.style },
              onKeyDown: qe(q.onKeyDown, ($) => {
                const ue = $.ctrlKey || $.altKey || $.metaKey;
                if (
                  ($.key === 'Tab' && $.preventDefault(),
                  !ue && $.key.length === 1 && V($.key),
                  ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes($.key))
                ) {
                  let Re = fe()
                    .filter((Ee) => !Ee.disabled)
                    .map((Ee) => Ee.ref.current);
                  if (
                    (['ArrowUp', 'End'].includes($.key) && (Re = Re.slice().reverse()),
                    ['ArrowUp', 'ArrowDown'].includes($.key))
                  ) {
                    const Ee = $.target,
                      we = Re.indexOf(Ee);
                    Re = Re.slice(we + 1);
                  }
                  setTimeout(() => O(Re)), $.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Vg.displayName = Fx;
var eE = 'SelectItemAlignedPosition',
  kg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, onPlaced: c, ...s } = a,
      d = Pn(Al, r),
      m = $n(Al, r),
      [v, p] = y.useState(null),
      [g, b] = y.useState(null),
      w = Ze(o, (W) => b(W)),
      R = yo(r),
      D = y.useRef(!1),
      H = y.useRef(!0),
      { viewport: E, selectedItem: _, selectedItemText: q, focusSelectedItem: L } = m,
      B = y.useCallback(() => {
        if (d.trigger && d.valueNode && v && g && E && _ && q) {
          const W = d.trigger.getBoundingClientRect(),
            K = g.getBoundingClientRect(),
            ce = d.valueNode.getBoundingClientRect(),
            ge = q.getBoundingClientRect();
          if (d.dir !== 'rtl') {
            const Ee = ge.left - K.left,
              we = ce.left - Ee,
              nt = W.left - we,
              dt = W.width + nt,
              Fn = Math.max(dt, K.width),
              In = window.innerWidth - Vt,
              ut = Ph(we, [Vt, Math.max(Vt, In - Fn)]);
            (v.style.minWidth = dt + 'px'), (v.style.left = ut + 'px');
          } else {
            const Ee = K.right - ge.right,
              we = window.innerWidth - ce.right - Ee,
              nt = window.innerWidth - W.right - we,
              dt = W.width + nt,
              Fn = Math.max(dt, K.width),
              In = window.innerWidth - Vt,
              ut = Ph(we, [Vt, Math.max(Vt, In - Fn)]);
            (v.style.minWidth = dt + 'px'), (v.style.right = ut + 'px');
          }
          const Se = R(),
            fe = window.innerHeight - Vt * 2,
            pe = E.scrollHeight,
            he = window.getComputedStyle(g),
            de = parseInt(he.borderTopWidth, 10),
            O = parseInt(he.paddingTop, 10),
            Q = parseInt(he.borderBottomWidth, 10),
            j = parseInt(he.paddingBottom, 10),
            ae = de + O + pe + j + Q,
            x = Math.min(_.offsetHeight * 5, ae),
            V = window.getComputedStyle(E),
            P = parseInt(V.paddingTop, 10),
            J = parseInt(V.paddingBottom, 10),
            F = W.top + W.height / 2 - Vt,
            me = fe - F,
            ie = _.offsetHeight / 2,
            $ = _.offsetTop + ie,
            ue = de + O + $,
            Ne = ae - ue;
          if (ue <= F) {
            const Ee = Se.length > 0 && _ === Se[Se.length - 1].ref.current;
            v.style.bottom = '0px';
            const we = g.clientHeight - E.offsetTop - E.offsetHeight,
              nt = Math.max(me, ie + (Ee ? J : 0) + we + Q),
              dt = ue + nt;
            v.style.height = dt + 'px';
          } else {
            const Ee = Se.length > 0 && _ === Se[0].ref.current;
            v.style.top = '0px';
            const nt = Math.max(F, de + E.offsetTop + (Ee ? P : 0) + ie) + Ne;
            (v.style.height = nt + 'px'), (E.scrollTop = ue - F + E.offsetTop);
          }
          (v.style.margin = `${Vt}px 0`),
            (v.style.minHeight = x + 'px'),
            (v.style.maxHeight = fe + 'px'),
            c == null || c(),
            requestAnimationFrame(() => (D.current = !0));
        }
      }, [R, d.trigger, d.valueNode, v, g, E, _, q, d.dir, c]);
    st(() => B(), [B]);
    const [Z, k] = y.useState();
    st(() => {
      g && k(window.getComputedStyle(g).zIndex);
    }, [g]);
    const I = y.useCallback(
      (W) => {
        W && H.current === !0 && (B(), L == null || L(), (H.current = !1));
      },
      [B, L]
    );
    return N.jsx(nE, {
      scope: r,
      contentWrapper: v,
      shouldExpandOnScrollRef: D,
      onScrollButtonChange: I,
      children: N.jsx('div', {
        ref: p,
        style: { display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: Z },
        children: N.jsx(Be.div, {
          ...s,
          ref: w,
          style: { boxSizing: 'border-box', maxHeight: '100%', ...s.style },
        }),
      }),
    });
  });
kg.displayName = eE;
var tE = 'SelectPopperPosition',
  as = y.forwardRef((a, o) => {
    const { __scopeSelect: r, align: c = 'start', collisionPadding: s = Vt, ...d } = a,
      m = bo(r);
    return N.jsx(qx, {
      ...m,
      ...d,
      ref: o,
      align: c,
      collisionPadding: s,
      style: {
        boxSizing: 'border-box',
        ...d.style,
        '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
        '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
        '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
        '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
      },
    });
  });
as.displayName = tE;
var [nE, Os] = Aa(Al, {}),
  is = 'SelectViewport',
  Xg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, nonce: c, ...s } = a,
      d = $n(is, r),
      m = Os(is, r),
      v = Ze(o, d.onViewportChange),
      p = y.useRef(0);
    return N.jsxs(N.Fragment, {
      children: [
        N.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: c,
        }),
        N.jsx(po.Slot, {
          scope: r,
          children: N.jsx(Be.div, {
            'data-radix-select-viewport': '',
            role: 'presentation',
            ...s,
            ref: v,
            style: { position: 'relative', flex: 1, overflow: 'hidden auto', ...s.style },
            onScroll: qe(s.onScroll, (g) => {
              const b = g.currentTarget,
                { contentWrapper: w, shouldExpandOnScrollRef: R } = m;
              if (R != null && R.current && w) {
                const D = Math.abs(p.current - b.scrollTop);
                if (D > 0) {
                  const H = window.innerHeight - Vt * 2,
                    E = parseFloat(w.style.minHeight),
                    _ = parseFloat(w.style.height),
                    q = Math.max(E, _);
                  if (q < H) {
                    const L = q + D,
                      B = Math.min(H, L),
                      Z = L - B;
                    (w.style.height = B + 'px'),
                      w.style.bottom === '0px' &&
                        ((b.scrollTop = Z > 0 ? Z : 0), (w.style.justifyContent = 'flex-end'));
                  }
                }
              }
              p.current = b.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Xg.displayName = is;
var Qg = 'SelectGroup',
  [lE, aE] = Aa(Qg),
  iE = y.forwardRef((a, o) => {
    const { __scopeSelect: r, ...c } = a,
      s = va();
    return N.jsx(lE, {
      scope: r,
      id: s,
      children: N.jsx(Be.div, { role: 'group', 'aria-labelledby': s, ...c, ref: o }),
    });
  });
iE.displayName = Qg;
var Zg = 'SelectLabel',
  Kg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, ...c } = a,
      s = aE(Zg, r);
    return N.jsx(Be.div, { id: s.id, ...c, ref: o });
  });
Kg.displayName = Zg;
var co = 'SelectItem',
  [uE, Jg] = Aa(co),
  Wg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, value: c, disabled: s = !1, textValue: d, ...m } = a,
      v = Pn(co, r),
      p = $n(co, r),
      g = v.value === c,
      [b, w] = y.useState(d ?? ''),
      [R, D] = y.useState(!1),
      H = Ze(o, (L) => {
        var B;
        return (B = p.itemRefCallback) == null ? void 0 : B.call(p, L, c, s);
      }),
      E = va(),
      _ = y.useRef('touch'),
      q = () => {
        s || (v.onValueChange(c), v.onOpenChange(!1));
      };
    if (c === '')
      throw new Error(
        'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
      );
    return N.jsx(uE, {
      scope: r,
      value: c,
      disabled: s,
      textId: E,
      isSelected: g,
      onItemTextChange: y.useCallback((L) => {
        w((B) => B || ((L == null ? void 0 : L.textContent) ?? '').trim());
      }, []),
      children: N.jsx(po.ItemSlot, {
        scope: r,
        value: c,
        disabled: s,
        textValue: b,
        children: N.jsx(Be.div, {
          role: 'option',
          'aria-labelledby': E,
          'data-highlighted': R ? '' : void 0,
          'aria-selected': g && R,
          'data-state': g ? 'checked' : 'unchecked',
          'aria-disabled': s || void 0,
          'data-disabled': s ? '' : void 0,
          tabIndex: s ? void 0 : -1,
          ...m,
          ref: H,
          onFocus: qe(m.onFocus, () => D(!0)),
          onBlur: qe(m.onBlur, () => D(!1)),
          onClick: qe(m.onClick, () => {
            _.current !== 'mouse' && q();
          }),
          onPointerUp: qe(m.onPointerUp, () => {
            _.current === 'mouse' && q();
          }),
          onPointerDown: qe(m.onPointerDown, (L) => {
            _.current = L.pointerType;
          }),
          onPointerMove: qe(m.onPointerMove, (L) => {
            var B;
            (_.current = L.pointerType),
              s
                ? (B = p.onItemLeave) == null || B.call(p)
                : _.current === 'mouse' && L.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: qe(m.onPointerLeave, (L) => {
            var B;
            L.currentTarget === document.activeElement &&
              ((B = p.onItemLeave) == null || B.call(p));
          }),
          onKeyDown: qe(m.onKeyDown, (L) => {
            var Z;
            (((Z = p.searchRef) == null ? void 0 : Z.current) !== '' && L.key === ' ') ||
              (Qx.includes(L.key) && q(), L.key === ' ' && L.preventDefault());
          }),
        }),
      }),
    });
  });
Wg.displayName = co;
var Ti = 'SelectItemText',
  Pg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, className: c, style: s, ...d } = a,
      m = Pn(Ti, r),
      v = $n(Ti, r),
      p = Jg(Ti, r),
      g = Wx(Ti, r),
      [b, w] = y.useState(null),
      R = Ze(
        o,
        (q) => w(q),
        p.onItemTextChange,
        (q) => {
          var L;
          return (L = v.itemTextRefCallback) == null ? void 0 : L.call(v, q, p.value, p.disabled);
        }
      ),
      D = b == null ? void 0 : b.textContent,
      H = y.useMemo(
        () => N.jsx('option', { value: p.value, disabled: p.disabled, children: D }, p.value),
        [p.disabled, p.value, D]
      ),
      { onNativeOptionAdd: E, onNativeOptionRemove: _ } = g;
    return (
      st(() => (E(H), () => _(H)), [E, _, H]),
      N.jsxs(N.Fragment, {
        children: [
          N.jsx(Be.span, { id: p.textId, ...d, ref: R }),
          p.isSelected && m.valueNode && !m.valueNodeHasChildren
            ? Ci.createPortal(d.children, m.valueNode)
            : null,
        ],
      })
    );
  });
Pg.displayName = Ti;
var $g = 'SelectItemIndicator',
  Fg = y.forwardRef((a, o) => {
    const { __scopeSelect: r, ...c } = a;
    return Jg($g, r).isSelected ? N.jsx(Be.span, { 'aria-hidden': !0, ...c, ref: o }) : null;
  });
Fg.displayName = $g;
var us = 'SelectScrollUpButton',
  Ig = y.forwardRef((a, o) => {
    const r = $n(us, a.__scopeSelect),
      c = Os(us, a.__scopeSelect),
      [s, d] = y.useState(!1),
      m = Ze(o, c.onScrollButtonChange);
    return (
      st(() => {
        if (r.viewport && r.isPositioned) {
          let v = function () {
            const g = p.scrollTop > 0;
            d(g);
          };
          const p = r.viewport;
          return v(), p.addEventListener('scroll', v), () => p.removeEventListener('scroll', v);
        }
      }, [r.viewport, r.isPositioned]),
      s
        ? N.jsx(tp, {
            ...a,
            ref: m,
            onAutoScroll: () => {
              const { viewport: v, selectedItem: p } = r;
              v && p && (v.scrollTop = v.scrollTop - p.offsetHeight);
            },
          })
        : null
    );
  });
Ig.displayName = us;
var os = 'SelectScrollDownButton',
  ep = y.forwardRef((a, o) => {
    const r = $n(os, a.__scopeSelect),
      c = Os(os, a.__scopeSelect),
      [s, d] = y.useState(!1),
      m = Ze(o, c.onScrollButtonChange);
    return (
      st(() => {
        if (r.viewport && r.isPositioned) {
          let v = function () {
            const g = p.scrollHeight - p.clientHeight,
              b = Math.ceil(p.scrollTop) < g;
            d(b);
          };
          const p = r.viewport;
          return v(), p.addEventListener('scroll', v), () => p.removeEventListener('scroll', v);
        }
      }, [r.viewport, r.isPositioned]),
      s
        ? N.jsx(tp, {
            ...a,
            ref: m,
            onAutoScroll: () => {
              const { viewport: v, selectedItem: p } = r;
              v && p && (v.scrollTop = v.scrollTop + p.offsetHeight);
            },
          })
        : null
    );
  });
ep.displayName = os;
var tp = y.forwardRef((a, o) => {
    const { __scopeSelect: r, onAutoScroll: c, ...s } = a,
      d = $n('SelectScrollButton', r),
      m = y.useRef(null),
      v = yo(r),
      p = y.useCallback(() => {
        m.current !== null && (window.clearInterval(m.current), (m.current = null));
      }, []);
    return (
      y.useEffect(() => () => p(), [p]),
      st(() => {
        var b;
        const g = v().find((w) => w.ref.current === document.activeElement);
        (b = g == null ? void 0 : g.ref.current) == null || b.scrollIntoView({ block: 'nearest' });
      }, [v]),
      N.jsx(Be.div, {
        'aria-hidden': !0,
        ...s,
        ref: o,
        style: { flexShrink: 0, ...s.style },
        onPointerDown: qe(s.onPointerDown, () => {
          m.current === null && (m.current = window.setInterval(c, 50));
        }),
        onPointerMove: qe(s.onPointerMove, () => {
          var g;
          (g = d.onItemLeave) == null || g.call(d),
            m.current === null && (m.current = window.setInterval(c, 50));
        }),
        onPointerLeave: qe(s.onPointerLeave, () => {
          p();
        }),
      })
    );
  }),
  oE = 'SelectSeparator',
  np = y.forwardRef((a, o) => {
    const { __scopeSelect: r, ...c } = a;
    return N.jsx(Be.div, { 'aria-hidden': !0, ...c, ref: o });
  });
np.displayName = oE;
var cs = 'SelectArrow',
  cE = y.forwardRef((a, o) => {
    const { __scopeSelect: r, ...c } = a,
      s = bo(r),
      d = Pn(cs, r),
      m = $n(cs, r);
    return d.open && m.position === 'popper' ? N.jsx(Yx, { ...s, ...c, ref: o }) : null;
  });
cE.displayName = cs;
var rE = 'SelectBubbleInput',
  lp = y.forwardRef(({ __scopeSelect: a, value: o, ...r }, c) => {
    const s = y.useRef(null),
      d = Ze(c, s),
      m = Gx(o);
    return (
      y.useEffect(() => {
        const v = s.current;
        if (!v) return;
        const p = window.HTMLSelectElement.prototype,
          b = Object.getOwnPropertyDescriptor(p, 'value').set;
        if (m !== o && b) {
          const w = new Event('change', { bubbles: !0 });
          b.call(v, o), v.dispatchEvent(w);
        }
      }, [m, o]),
      N.jsx(Be.select, { ...r, style: { ...Dg, ...r.style }, ref: d, defaultValue: o })
    );
  });
lp.displayName = rE;
function ap(a) {
  return a === '' || a === void 0;
}
function ip(a) {
  const o = Sl(a),
    r = y.useRef(''),
    c = y.useRef(0),
    s = y.useCallback(
      (m) => {
        const v = r.current + m;
        o(v),
          (function p(g) {
            (r.current = g),
              window.clearTimeout(c.current),
              g !== '' && (c.current = window.setTimeout(() => p(''), 1e3));
          })(v);
      },
      [o]
    ),
    d = y.useCallback(() => {
      (r.current = ''), window.clearTimeout(c.current);
    }, []);
  return y.useEffect(() => () => window.clearTimeout(c.current), []), [r, s, d];
}
function up(a, o, r) {
  const s = o.length > 1 && Array.from(o).every((g) => g === o[0]) ? o[0] : o,
    d = r ? a.indexOf(r) : -1;
  let m = sE(a, Math.max(d, 0));
  s.length === 1 && (m = m.filter((g) => g !== r));
  const p = m.find((g) => g.textValue.toLowerCase().startsWith(s.toLowerCase()));
  return p !== r ? p : void 0;
}
function sE(a, o) {
  return a.map((r, c) => a[(o + c) % a.length]);
}
var fE = zg,
  op = jg,
  dE = Bg,
  mE = Lg,
  hE = qg,
  cp = Yg,
  vE = Xg,
  rp = Kg,
  sp = Wg,
  gE = Pg,
  pE = Fg,
  fp = Ig,
  dp = ep,
  mp = np;
const yE = fE,
  bE = dE,
  hp = y.forwardRef(({ className: a, children: o, ...r }, c) =>
    N.jsxs(op, {
      ref: c,
      className: yt(
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        a
      ),
      ...r,
      children: [
        o,
        N.jsx(mE, { asChild: !0, children: N.jsx(dv, { className: 'h-4 w-4 opacity-50' }) }),
      ],
    })
  );
hp.displayName = op.displayName;
const vp = y.forwardRef(({ className: a, ...o }, r) =>
  N.jsx(fp, {
    ref: r,
    className: yt('flex cursor-default items-center justify-center py-1', a),
    ...o,
    children: N.jsx(ib, { className: 'h-4 w-4' }),
  })
);
vp.displayName = fp.displayName;
const gp = y.forwardRef(({ className: a, ...o }, r) =>
  N.jsx(dp, {
    ref: r,
    className: yt('flex cursor-default items-center justify-center py-1', a),
    ...o,
    children: N.jsx(dv, { className: 'h-4 w-4' }),
  })
);
gp.displayName = dp.displayName;
const pp = y.forwardRef(({ className: a, children: o, position: r = 'popper', ...c }, s) =>
  N.jsx(hE, {
    children: N.jsxs(cp, {
      ref: s,
      className: yt(
        'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
        r === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        a
      ),
      position: r,
      ...c,
      children: [
        N.jsx(vp, {}),
        N.jsx(vE, {
          className: yt(
            'p-1',
            r === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          ),
          children: o,
        }),
        N.jsx(gp, {}),
      ],
    }),
  })
);
pp.displayName = cp.displayName;
const SE = y.forwardRef(({ className: a, ...o }, r) =>
  N.jsx(rp, { ref: r, className: yt('px-2 py-1.5 text-sm font-semibold', a), ...o })
);
SE.displayName = rp.displayName;
const ha = y.forwardRef(({ className: a, children: o, ...r }, c) =>
  N.jsxs(sp, {
    ref: c,
    className: yt(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      a
    ),
    ...r,
    children: [
      N.jsx('span', {
        className: 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
        children: N.jsx(pE, { children: N.jsx(nb, { className: 'h-4 w-4' }) }),
      }),
      N.jsx(gE, { children: o }),
    ],
  })
);
ha.displayName = sp.displayName;
const xE = y.forwardRef(({ className: a, ...o }, r) =>
  N.jsx(mp, { ref: r, className: yt('-mx-1 my-1 h-px bg-muted', a), ...o })
);
xE.displayName = mp.displayName;
var EE = 'Separator',
  iv = 'horizontal',
  wE = ['horizontal', 'vertical'],
  yp = y.forwardRef((a, o) => {
    const { decorative: r, orientation: c = iv, ...s } = a,
      d = AE(c) ? c : iv,
      v = r
        ? { role: 'none' }
        : { 'aria-orientation': d === 'vertical' ? d : void 0, role: 'separator' };
    return N.jsx(Be.div, { 'data-orientation': d, ...v, ...s, ref: o });
  });
yp.displayName = EE;
function AE(a) {
  return wE.includes(a);
}
var bp = yp;
const Sp = y.forwardRef(
  ({ className: a, orientation: o = 'horizontal', decorative: r = !0, ...c }, s) =>
    N.jsx(bp, {
      ref: s,
      decorative: r,
      orientation: o,
      className: yt(
        'shrink-0 bg-border',
        o === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        a
      ),
      ...c,
    })
);
Sp.displayName = bp.displayName;
const uv = (a) => {
    let o;
    const r = new Set(),
      c = (g, b) => {
        const w = typeof g == 'function' ? g(o) : g;
        if (!Object.is(w, o)) {
          const R = o;
          (o = (b ?? (typeof w != 'object' || w === null)) ? w : Object.assign({}, o, w)),
            r.forEach((D) => D(o, R));
        }
      },
      s = () => o,
      v = {
        setState: c,
        getState: s,
        getInitialState: () => p,
        subscribe: (g) => (r.add(g), () => r.delete(g)),
      },
      p = (o = a(c, s, v));
    return v;
  },
  TE = (a) => (a ? uv(a) : uv),
  RE = (a) => a;
function OE(a, o = RE) {
  const r = $t.useSyncExternalStore(
    a.subscribe,
    () => o(a.getState()),
    () => o(a.getInitialState())
  );
  return $t.useDebugValue(r), r;
}
const ov = (a) => {
    const o = TE(a),
      r = (c) => OE(o, c);
    return Object.assign(r, o), r;
  },
  ME = (a) => (a ? ov(a) : ov),
  CE = [
    { id: 'preset-1', name: '宿題をする', duration1: 30, color: 'bg-blue-200', isPreset: !0 },
    { id: 'preset-2', name: '歯みがき', duration1: 5, color: 'bg-green-200', isPreset: !0 },
    { id: 'preset-3', name: '朝ごはん', duration1: 15, color: 'bg-yellow-200', isPreset: !0 },
    { id: 'preset-4', name: '着替え', duration1: 10, color: 'bg-purple-200', isPreset: !0 },
    { id: 'preset-5', name: 'かばん準備', duration1: 5, color: 'bg-pink-200', isPreset: !0 },
  ],
  Iu = ME((a) => ({
    level: 1,
    availableTasks: [...CE],
    taskPool: [],
    layoutTasks: [],
    showSideMenu: !1,
    showingInterruption: !1,
    setLevel: (o) => a({ level: o }),
    toggleSideMenu: () => a((o) => ({ showSideMenu: !o.showSideMenu })),
    addTask: (o) => a((r) => ({ availableTasks: [...r.availableTasks, o] })),
    updateTask: (o, r) =>
      a((c) => ({
        availableTasks: c.availableTasks.map((s) => (s.id === o ? { ...s, ...r } : s)),
        taskPool: c.taskPool.map((s) => (s.id === o ? { ...s, ...r } : s)),
      })),
    deleteTask: (o) =>
      a((r) => ({
        availableTasks: r.availableTasks.filter((c) => c.id !== o || c.isPreset),
        taskPool: r.taskPool.filter((c) => c.id !== o),
        layoutTasks: r.layoutTasks.filter((c) => c.id !== o),
      })),
    moveTaskToPool: (o) =>
      a((r) =>
        r.taskPool.some((c) => c.id === o.id)
          ? { taskPool: r.taskPool }
          : { taskPool: [...r.taskPool, o] }
      ),
    removeTaskFromPool: (o) => a((r) => ({ taskPool: r.taskPool.filter((c) => c.id !== o) })),
    addTaskToLayout: (o) => a((r) => ({ layoutTasks: [...r.layoutTasks, o] })),
    removeTaskFromLayout: (o) =>
      a((r) => ({ layoutTasks: r.layoutTasks.filter((c) => c.id !== o) })),
    updateLayoutTask: (o, r) =>
      a((c) => ({ layoutTasks: c.layoutTasks.map((s) => (s.id === o ? { ...s, ...r } : s)) })),
  }));
function NE() {
  const a = Iu((s) => s.level),
    o = Iu((s) => s.showSideMenu),
    r = Iu((s) => s.setLevel),
    c = Iu((s) => s.toggleSideMenu);
  return (
    y.useEffect(() => {}, []),
    N.jsxs('div', {
      className: 'flex flex-col h-screen w-screen min-w-full max-w-none bg-slate-100 app-container',
      children: [
        N.jsxs('header', {
          className:
            'w-full min-w-full bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10',
          children: [
            N.jsxs('div', {
              className: 'flex items-center gap-3',
              children: [
                N.jsxs(A1, {
                  open: o,
                  onOpenChange: c,
                  children: [
                    N.jsx(T1, {
                      asChild: !0,
                      children: N.jsx(Ov, {
                        variant: 'ghost',
                        size: 'icon',
                        className: 'md:flex hover:bg-slate-100',
                        children: N.jsx(ob, { className: 'h-5 w-5' }),
                      }),
                    }),
                    N.jsxs(cg, {
                      side: 'left',
                      className:
                        'w-[85vw] sm:w-[400px] md:w-[350px] lg:max-w-sm border-r-2 bg-white p-6',
                      children: [
                        N.jsx(rg, { children: 'タスク確認・作成' }),
                        N.jsx(sg, { children: 'タスクの作成・編集・削除ができます' }),
                        N.jsx('div', {
                          className: 'h-full flex flex-col mt-6',
                          children: N.jsx('div', {
                            className: 'flex-grow overflow-auto',
                            children: N.jsx('div', {
                              className:
                                'p-4 rounded-lg bg-slate-50 border border-slate-200 text-center',
                              children: N.jsx('p', {
                                className: 'text-slate-500',
                                children: 'ここにタスク作成UIが入ります',
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                N.jsx('h1', {
                  className: 'text-xl font-bold text-indigo-600',
                  children: 'タスクマスター',
                }),
              ],
            }),
            N.jsxs(yE, {
              value: a.toString(),
              onValueChange: (s) => r(Number(s)),
              children: [
                N.jsx(hp, {
                  className: 'w-[180px] md:w-[220px] lg:w-[280px] bg-white border-slate-200',
                  children: N.jsx(bE, { placeholder: 'レベルを選択' }),
                }),
                N.jsxs(pp, {
                  children: [
                    N.jsx(ha, { value: '1', children: 'レベル 1: 基本の時間管理' }),
                    N.jsx(ha, { value: '2', children: 'レベル 2: 条件付きタスク' }),
                    N.jsx(ha, { value: '3', children: 'レベル 3: 待ち時間あり' }),
                    N.jsx(ha, { value: '4', children: 'レベル 4: 複雑な依存関係' }),
                    N.jsx(ha, { value: '5', children: 'レベル 5: 割り込み対応' }),
                  ],
                }),
              ],
            }),
          ],
        }),
        N.jsxs('div', {
          className: 'flex-grow flex flex-col w-full min-w-full',
          children: [
            N.jsx('main', {
              className: 'flex-grow p-4 w-full min-w-full',
              children: N.jsx('div', {
                className:
                  'h-full w-full border-2 border-dashed border-indigo-200 bg-white rounded-lg flex items-center justify-center',
                children: N.jsx('p', {
                  className: 'text-indigo-400 font-medium',
                  children: 'タスクレイアウトエリア',
                }),
              }),
            }),
            N.jsx(Sp, { className: 'w-full bg-slate-300' }),
            N.jsx('div', {
              className:
                'h-1/4 md:h-1/5 lg:h-1/4 bg-white p-4 shadow-inner border-t border-slate-200 w-full min-w-full',
              children: N.jsx('div', {
                className:
                  'h-full w-full border-2 border-dashed border-indigo-200 bg-slate-50 rounded-lg flex items-center justify-center',
                children: N.jsx('p', {
                  className: 'text-indigo-400 font-medium',
                  children: 'タスクプールエリア',
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
W0.createRoot(document.getElementById('root')).render(
  N.jsx(y.StrictMode, { children: N.jsx(NE, {}) })
);
