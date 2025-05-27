import {
  J as Ie,
  K as Ee,
  r as u,
  j as e,
  L as $e,
  N as U,
  O as V,
  P as Re,
  Q as W,
  T as Ae,
  U as K,
  V as q,
  W as Me,
  X as Fe,
  Y as G,
  Z as Le,
  _ as J,
  $ as X,
  a0 as Oe,
  a1 as Q,
  a2 as ze,
  a3 as Y,
  a4 as Z,
  a5 as _e,
  a6 as Be,
  a7 as ee,
  a8 as He,
  a9 as Ue,
  aa as te,
  ab as Ve,
  ac as se,
  ad as We,
  ae,
  af as oe,
  ag as ne,
  ah as re,
  ai as ie,
  aj as Ke,
  ak as qe,
} from './vendor-HCosByvC.js';
import { X as A, C as le, a as Ge, b as Je, P as R, T as Xe, M as Qe } from './lucide-DFTFaQve.js';
import {
  D as Ye,
  u as Ze,
  a as et,
  b as tt,
  P as st,
  c as at,
  d as ot,
  C as nt,
  S as rt,
  r as it,
} from './dnd-kit-BYhS-_cm.js';
import { m as de } from './framer-motion-BqqH-E-_.js';
(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const l of r)
      if (l.type === 'childList')
        for (const h of l.addedNodes) h.tagName === 'LINK' && h.rel === 'modulepreload' && a(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const l = {};
    return (
      r.integrity && (l.integrity = r.integrity),
      r.referrerPolicy && (l.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const l = s(r);
    fetch(r.href, l);
  }
})();
function v(...t) {
  return Ie(Ee(t));
}
const M = U(
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
  C = u.forwardRef(({ className: t, variant: o, size: s, asChild: a = !1, ...r }, l) => {
    const h = a ? $e : 'button';
    return e.jsx(h, { className: v(M({ variant: o, size: s, className: t })), ref: l, ...r });
  });
C.displayName = 'Button';
const lt = Me,
  dt = Fe,
  ct = Re,
  ce = u.forwardRef(({ className: t, ...o }, s) =>
    e.jsx(V, {
      className: v(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        t
      ),
      ...o,
      ref: s,
    })
  );
ce.displayName = V.displayName;
const mt = U(
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
  me = u.forwardRef(({ side: t = 'right', className: o, children: s, ...a }, r) =>
    e.jsxs(ct, {
      children: [
        e.jsx(ce, {}),
        e.jsxs(W, {
          ref: r,
          className: v(mt({ side: t }), o),
          ...a,
          children: [
            e.jsxs(Ae, {
              className:
                'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
              children: [
                e.jsx(A, { className: 'h-4 w-4' }),
                e.jsx('span', { className: 'sr-only', children: 'Close' }),
              ],
            }),
            s,
          ],
        }),
      ],
    })
  );
me.displayName = W.displayName;
const ue = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(K, { ref: s, className: v('text-lg font-semibold text-foreground', t), ...o })
);
ue.displayName = K.displayName;
const xe = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(q, { ref: s, className: v('text-sm text-muted-foreground', t), ...o })
);
xe.displayName = q.displayName;
const ut = He,
  xt = Ue,
  pe = u.forwardRef(({ className: t, children: o, ...s }, a) =>
    e.jsxs(G, {
      ref: a,
      className: v(
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        t
      ),
      ...s,
      children: [
        o,
        e.jsx(Le, { asChild: !0, children: e.jsx(le, { className: 'h-4 w-4 opacity-50' }) }),
      ],
    })
  );
pe.displayName = G.displayName;
const ge = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(J, {
    ref: s,
    className: v('flex cursor-default items-center justify-center py-1', t),
    ...o,
    children: e.jsx(Ge, { className: 'h-4 w-4' }),
  })
);
ge.displayName = J.displayName;
const fe = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(X, {
    ref: s,
    className: v('flex cursor-default items-center justify-center py-1', t),
    ...o,
    children: e.jsx(le, { className: 'h-4 w-4' }),
  })
);
fe.displayName = X.displayName;
const he = u.forwardRef(({ className: t, children: o, position: s = 'popper', ...a }, r) =>
  e.jsx(Oe, {
    children: e.jsxs(Q, {
      ref: r,
      className: v(
        'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
        s === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        t
      ),
      position: s,
      ...a,
      children: [
        e.jsx(ge, {}),
        e.jsx(ze, {
          className: v(
            'p-1',
            s === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          ),
          children: o,
        }),
        e.jsx(fe, {}),
      ],
    }),
  })
);
he.displayName = Q.displayName;
const pt = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(Y, { ref: s, className: v('px-2 py-1.5 text-sm font-semibold', t), ...o })
);
pt.displayName = Y.displayName;
const I = u.forwardRef(({ className: t, children: o, ...s }, a) =>
  e.jsxs(Z, {
    ref: a,
    className: v(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      t
    ),
    ...s,
    children: [
      e.jsx('span', {
        className: 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
        children: e.jsx(_e, { children: e.jsx(Je, { className: 'h-4 w-4' }) }),
      }),
      e.jsx(Be, { children: o }),
    ],
  })
);
I.displayName = Z.displayName;
const gt = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(ee, { ref: s, className: v('-mx-1 my-1 h-px bg-muted', t), ...o })
);
gt.displayName = ee.displayName;
const be = u.forwardRef(
  ({ className: t, orientation: o = 'horizontal', decorative: s = !0, ...a }, r) =>
    e.jsx(te, {
      ref: r,
      decorative: s,
      orientation: o,
      className: v(
        'shrink-0 bg-border',
        o === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        t
      ),
      ...a,
    })
);
be.displayName = te.displayName;
const ft = [
    { id: 'preset-1', name: '宿題をする', duration1: 30, color: 'bg-blue-200', isPreset: !0 },
    { id: 'preset-2', name: '歯みがき', duration1: 5, color: 'bg-green-200', isPreset: !0 },
    { id: 'preset-3', name: '朝ごはん', duration1: 15, color: 'bg-yellow-200', isPreset: !0 },
    { id: 'preset-4', name: '着替え', duration1: 10, color: 'bg-purple-200', isPreset: !0 },
    { id: 'preset-5', name: 'かばん準備', duration1: 5, color: 'bg-pink-200', isPreset: !0 },
  ],
  y = Ve((t, o) => ({
    level: 1,
    availableTasks: [...ft],
    taskPool: [],
    layoutTasks: [],
    showSideMenu: !1,
    showingInterruption: !1,
    error: null,
    setLevel: (s) => t({ level: s }),
    toggleSideMenu: () => t((s) => ({ showSideMenu: !s.showSideMenu })),
    addTask: (s) => t((a) => ({ availableTasks: [...a.availableTasks, s] })),
    updateTask: (s, a) =>
      t((r) => ({
        availableTasks: r.availableTasks.map((l) => (l.id === s ? { ...l, ...a } : l)),
        taskPool: r.taskPool.map((l) => (l.id === s ? { ...l, ...a } : l)),
      })),
    deleteTask: (s) =>
      t((a) => ({
        availableTasks: a.availableTasks.filter((r) => r.id !== s),
        taskPool: a.taskPool.filter((r) => r.id !== s),
        layoutTasks: a.layoutTasks.filter((r) => r.id !== s),
      })),
    moveTaskToPool: (s) =>
      t((a) => {
        const r = { ...s, id: `pool-${Date.now()}-${Math.random().toString(36).substring(2, 9)}` };
        return { taskPool: [...a.taskPool, r] };
      }),
    removeTaskFromPool: (s) => t((a) => ({ taskPool: a.taskPool.filter((r) => r.id !== s) })),
    addTaskToLayout: (s) =>
      t((a) => {
        var p;
        const r = a.layoutTasks.map((f) =>
            f.waitEndTime !== void 0 && !f.phase2Placed ? f.startTime + f.duration1 : f.endTime
          ),
          l = r.length > 0 ? Math.max(...r) : 0,
          h = s.duration1,
          b = ((p = s.waitTime) == null ? void 0 : p.duration) ?? 0,
          j = l + h,
          w = b > 0 ? j + b : void 0,
          n = void 0,
          d = l + h + b,
          m = (f, N) => f === N || f.includes(N) || N.includes(f);
        if (
          s.condition &&
          !o().layoutTasks.some((N) => m(N.id, s.condition) || m(N.name, s.condition))
        )
          return (
            console.warn('条件未満で配置不可'),
            { error: '条件を満たしていないため配置できません💦' }
          );
        const x = a.layoutTasks.length,
          i = {
            ...s,
            startTime: l,
            endTime: d,
            rowIndex: x,
            waitEndTime: w,
            phase2StartTime: n,
            phase2Placed: !1,
          };
        return { layoutTasks: [...a.layoutTasks, i] };
      }),
    removeTaskFromLayout: (s) =>
      t((a) => ({ layoutTasks: a.layoutTasks.filter((r) => r.id !== s) })),
    updateLayoutTask: (s, a) =>
      t((r) => ({ layoutTasks: r.layoutTasks.map((l) => (l.id === s ? { ...l, ...a } : l)) })),
    removeTaskFromLayoutAndAddToPool: (s) =>
      t((a) => {
        const r = a.layoutTasks.find((n) => n.id === s);
        if (!r) return a;
        const l = r.startTime,
          h = [],
          b = [];
        a.layoutTasks.forEach((n) => {
          if (n.startTime >= l) {
            h.push(n);
            return;
          }
          if (n.phase2Placed && n.phase2StartTime !== void 0 && n.phase2StartTime >= l) {
            const d = n.waitEndTime ?? n.startTime + n.duration1;
            b.push({ ...n, phase2Placed: !1, phase2StartTime: void 0, endTime: d });
            return;
          }
          b.push(n);
        });
        const j = b.map((n, d) => ({ ...n, rowIndex: d })),
          w = h.map(({ startTime: n, endTime: d, rowIndex: m, ...x }) => x);
        return { layoutTasks: j, taskPool: [...a.taskPool, ...w] };
      }),
    placePhase2: (s) =>
      t((a) => {
        const r = a.layoutTasks.findIndex((n) => n.id === s);
        if (r === -1) return {};
        const l = a.layoutTasks[r];
        if (!l.duration2 || l.phase2Placed) return {};
        const h = a.layoutTasks.reduce((n, d) => (d.id === l.id ? n : Math.max(n, d.endTime)), 0),
          b = Math.max(l.waitEndTime ?? l.startTime, h),
          j = {
            ...l,
            phase2Placed: !0,
            phase2StartTime: b,
            startTime: l.startTime,
            endTime: b + l.duration2,
          },
          w = [...a.layoutTasks];
        return (w[r] = j), { layoutTasks: w };
      }),
    setError: (s) => t({ error: s }),
    clearError: () => t({ error: null }),
  })),
  ht = [1, 3, 5, 10, 15, 20, 30, 45, 60, 90, 120],
  _ = [
    'bg-red-200',
    'bg-pink-200',
    'bg-purple-200',
    'bg-indigo-200',
    'bg-blue-200',
    'bg-cyan-200',
    'bg-teal-200',
    'bg-green-200',
    'bg-lime-200',
    'bg-yellow-200',
    'bg-amber-200',
    'bg-orange-200',
  ],
  bt = () => {
    const [t, o] = u.useState(!1),
      [s, a] = u.useState(''),
      [r, l] = u.useState(5),
      [h, b] = u.useState(''),
      [j, w] = u.useState(0),
      [n, d] = u.useState(0),
      m = y((g) => g.addTask),
      x = y((g) => g.availableTasks),
      i = Array.from(new Set(x.map((g) => g.name))),
      p = () => {
        const g = {};
        x.forEach((c) => {
          g[c.color] ? g[c.color]++ : (g[c.color] = 1);
        });
        let k = _[0],
          T = 1 / 0;
        return (
          _.forEach((c) => {
            const S = g[c] || 0;
            S < T && ((T = S), (k = c));
          }),
          k
        );
      },
      f = (g) => {
        if ((g.preventDefault(), !s.trim())) return;
        m({
          id: `task-${Date.now()}`,
          name: s.trim(),
          duration1: r,
          color: p(),
          isPreset: !1,
          ...(h.trim() && { condition: h.trim() }),
          ...(j > 0 && { waitTime: { duration: j } }),
          ...(n > 0 && { duration2: n }),
        }),
          a(''),
          l(5),
          b(''),
          w(0),
          d(0),
          o(!1);
        const k = document.getElementById('task-list-scroll');
        k == null || k.scrollTo({ top: 0, behavior: 'smooth' }),
          console.log('新しいタスクを作成しました:', { name: s.trim(), duration1: r });
      },
      N = () => {
        o(!t);
      };
    return e.jsxs('div', {
      className: 'mt-4',
      children: [
        e.jsxs('div', {
          className: 'flex justify-between items-center',
          children: [
            e.jsx('h3', {
              className: 'font-medium text-sm text-indigo-700',
              children: '新しいタスクを作る',
            }),
            e.jsx(C, {
              variant: 'ghost',
              size: 'sm',
              className: 'h-6 w-6 p-0',
              onClick: N,
              children: t ? e.jsx(A, { className: 'h-4 w-4' }) : e.jsx(R, { className: 'h-4 w-4' }),
            }),
          ],
        }),
        t &&
          e.jsxs('form', {
            onSubmit: f,
            className: 'space-y-3 mt-2',
            children: [
              e.jsxs('div', {
                children: [
                  e.jsx('label', {
                    htmlFor: 'task-name',
                    className: 'block text-xs text-gray-600 mb-1',
                    children: 'タスク名',
                  }),
                  e.jsx('input', {
                    id: 'task-name',
                    type: 'text',
                    value: s,
                    onChange: (g) => a(g.target.value),
                    className:
                      'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    placeholder: '例: 宿題をする',
                    required: !0,
                  }),
                ],
              }),
              e.jsxs('div', {
                children: [
                  e.jsx('label', {
                    htmlFor: 'task-duration',
                    className: 'block text-xs text-gray-600 mb-1',
                    children: '所要時間',
                  }),
                  e.jsx('select', {
                    id: 'task-duration',
                    value: r,
                    onChange: (g) => l(parseInt(g.target.value)),
                    className:
                      'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    children: ht.map((g) => e.jsxs('option', { value: g, children: [g, '分'] }, g)),
                  }),
                ],
              }),
              e.jsxs('div', {
                children: [
                  e.jsx('label', {
                    htmlFor: 'task-condition',
                    className: 'block text-xs text-gray-600 mb-1',
                    children: '前提タスク (オプション)',
                  }),
                  e.jsxs('select', {
                    id: 'task-condition',
                    value: h,
                    onChange: (g) => b(g.target.value),
                    className:
                      'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    children: [
                      e.jsx('option', { value: '', children: 'なし' }),
                      i.map((g) => e.jsx('option', { value: g, children: g }, g)),
                    ],
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'grid grid-cols-2 gap-2',
                children: [
                  e.jsxs('div', {
                    children: [
                      e.jsx('label', {
                        htmlFor: 'task-wait',
                        className: 'block text-xs text-gray-600 mb-1',
                        children: '待ち時間 (分)',
                      }),
                      e.jsx('input', {
                        id: 'task-wait',
                        type: 'number',
                        min: '0',
                        value: j,
                        onChange: (g) => w(parseInt(g.target.value)),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    children: [
                      e.jsx('label', {
                        htmlFor: 'task-duration2',
                        className: 'block text-xs text-gray-600 mb-1',
                        children: '所要時間2 (分)',
                      }),
                      e.jsx('input', {
                        id: 'task-duration2',
                        type: 'number',
                        min: '0',
                        value: n,
                        onChange: (g) => d(parseInt(g.target.value)),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx('div', {
                className: 'flex justify-end',
                children: e.jsxs(C, {
                  type: 'submit',
                  className: 'bg-indigo-600 hover:bg-indigo-700',
                  children: [e.jsx(R, { className: 'mr-1 h-4 w-4' }), ' 追加'],
                }),
              }),
            ],
          }),
      ],
    });
  },
  yt = [1, 3, 5, 10, 15, 20, 30, 45, 60, 90, 120],
  vt = [
    'bg-red-200',
    'bg-pink-200',
    'bg-purple-200',
    'bg-indigo-200',
    'bg-blue-200',
    'bg-cyan-200',
    'bg-teal-200',
    'bg-green-200',
    'bg-lime-200',
    'bg-yellow-200',
    'bg-amber-200',
    'bg-orange-200',
  ],
  jt = ({ task: t, onClose: o }) => {
    const [s, a] = u.useState(''),
      [r, l] = u.useState(5),
      [h, b] = u.useState(''),
      [j, w] = u.useState(''),
      [n, d] = u.useState(0),
      [m, x] = u.useState(0),
      i = y((c) => c.updateTask),
      p = y((c) => c.deleteTask),
      f = y((c) => c.availableTasks),
      N = u.useMemo(() => Array.from(new Set(f.map((c) => c.name))), [f]);
    u.useEffect(() => {
      var c;
      t &&
        (a(t.name),
        l(t.duration1),
        b(t.color),
        w(t.condition ?? ''),
        d(((c = t.waitTime) == null ? void 0 : c.duration) ?? 0),
        x(t.duration2 ?? 0));
    }, [t]);
    const g = (c) => {
        c.target === c.currentTarget && o();
      },
      k = (c) => {
        c.preventDefault(),
          !(!t || !s.trim()) &&
            (i(t.id, {
              name: s.trim(),
              duration1: r,
              color: h,
              condition: j.trim() || void 0,
              waitTime: n > 0 ? { duration: n } : void 0,
              duration2: m > 0 ? m : void 0,
            }),
            y
              .getState()
              .updateLayoutTask(t.id, {
                name: s.trim(),
                duration1: r,
                color: h,
                condition: j.trim() || void 0,
                waitTime: n > 0 ? { duration: n } : void 0,
                duration2: m > 0 ? m : void 0,
              }),
            console.log('タスクを更新しました:', { id: t.id, name: s.trim(), duration1: r }),
            o());
      },
      T = () => {
        t &&
          window.confirm(`「${t.name}」を削除してもよろしいですか？`) &&
          (p(t.id), console.log('タスクを削除しました:', t.id), o());
      };
    return t
      ? e.jsx('div', {
          className: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50',
          onClick: g,
          children: e.jsxs('div', {
            className: 'bg-white rounded-lg w-[90%] max-w-md p-4',
            children: [
              e.jsxs('div', {
                className: 'flex justify-between items-center mb-4',
                children: [
                  e.jsx('h2', { className: 'text-lg font-medium', children: 'タスクを編集' }),
                  e.jsx(C, {
                    variant: 'ghost',
                    size: 'sm',
                    onClick: o,
                    children: e.jsx(A, { className: 'h-4 w-4' }),
                  }),
                ],
              }),
              e.jsxs('form', {
                onSubmit: k,
                className: 'space-y-4',
                children: [
                  e.jsxs('div', {
                    children: [
                      e.jsx('label', {
                        htmlFor: 'edit-task-name',
                        className: 'block text-sm text-gray-600 mb-1',
                        children: 'タスク名',
                      }),
                      e.jsx('input', {
                        id: 'edit-task-name',
                        type: 'text',
                        value: s,
                        onChange: (c) => a(c.target.value),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                        required: !0,
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    children: [
                      e.jsx('label', {
                        htmlFor: 'edit-task-duration',
                        className: 'block text-sm text-gray-600 mb-1',
                        children: '所要時間',
                      }),
                      e.jsx('select', {
                        id: 'edit-task-duration',
                        value: r,
                        onChange: (c) => l(parseInt(c.target.value)),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                        children: yt.map((c) =>
                          e.jsxs('option', { value: c, children: [c, '分'] }, c)
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    children: [
                      e.jsx('label', {
                        className: 'block text-sm text-gray-600 mb-1',
                        children: 'カラー',
                      }),
                      e.jsx('div', {
                        className: 'grid grid-cols-6 gap-2',
                        children: vt.map((c) =>
                          e.jsx(
                            'div',
                            {
                              className: `h-6 rounded cursor-pointer ${c} ${h === c ? 'ring-2 ring-indigo-600' : ''}`,
                              onClick: () => b(c),
                            },
                            c
                          )
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    children: [
                      e.jsx('label', {
                        htmlFor: 'edit-task-condition',
                        className: 'block text-sm text-gray-600 mb-1',
                        children: '前提タスク (オプション)',
                      }),
                      e.jsxs('select', {
                        id: 'edit-task-condition',
                        value: j,
                        onChange: (c) => w(c.target.value),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                        children: [
                          e.jsx('option', { value: '', children: 'なし' }),
                          N.map((c) => e.jsx('option', { value: c, children: c }, c)),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'grid grid-cols-2 gap-2',
                    children: [
                      e.jsxs('div', {
                        children: [
                          e.jsx('label', {
                            htmlFor: 'edit-task-wait',
                            className: 'block text-sm text-gray-600 mb-1',
                            children: '待ち時間 (分)',
                          }),
                          e.jsx('input', {
                            id: 'edit-task-wait',
                            type: 'number',
                            min: '0',
                            value: n,
                            onChange: (c) => d(parseInt(c.target.value)),
                            className:
                              'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        children: [
                          e.jsx('label', {
                            htmlFor: 'edit-task-duration2',
                            className: 'block text-sm text-gray-600 mb-1',
                            children: '所要時間2 (分)',
                          }),
                          e.jsx('input', {
                            id: 'edit-task-duration2',
                            type: 'number',
                            min: '0',
                            value: m,
                            onChange: (c) => x(parseInt(c.target.value)),
                            className:
                              'w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'flex justify-between pt-2',
                    children: [
                      e.jsx(C, {
                        type: 'button',
                        variant: 'destructive',
                        onClick: T,
                        children: '削除',
                      }),
                      e.jsx(C, {
                        type: 'submit',
                        className: 'bg-indigo-600 hover:bg-indigo-700',
                        children: '保存',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Tt = ({ task: t, onEdit: o }) => {
    const s = y((r) => r.moveTaskToPool),
      a = () => {
        s(t), console.log('タスクをプールに追加しました:', t.name);
      };
    return e.jsxs('div', {
      className:
        'flex items-center gap-2 p-2 rounded-md bg-white border border-gray-200 mb-2 group',
      children: [
        e.jsxs('div', {
          className: `flex-grow py-1.5 px-3 rounded-md ${t.color} shadow-sm cursor-pointer`,
          onClick: () => o(t),
          children: [
            e.jsx('h3', { className: 'font-medium text-sm text-gray-800', children: t.name }),
            e.jsxs('div', {
              className: 'flex flex-wrap justify-between items-center mt-1 gap-1 text-xs',
              children: [
                e.jsxs('span', { className: 'text-gray-600', children: [t.duration1, '分'] }),
                t.waitTime &&
                  t.waitTime.duration > 0 &&
                  e.jsxs('span', {
                    className: 'bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded',
                    children: ['待', t.waitTime.duration, '分'],
                  }),
                t.duration2 &&
                  t.duration2 > 0 &&
                  e.jsxs('span', {
                    className: 'bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded',
                    children: ['②', t.duration2, '分'],
                  }),
                t.condition &&
                  e.jsxs('span', {
                    className: 'bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded',
                    children: ['条件: ', t.condition],
                  }),
              ],
            }),
          ],
        }),
        e.jsx(C, {
          size: 'sm',
          variant: 'ghost',
          className: 'opacity-60 group-hover:opacity-100',
          onClick: a,
          children: e.jsx(R, { className: 'h-4 w-4' }),
        }),
      ],
    });
  },
  wt = () => {
    const t = y((a) => a.availableTasks),
      [o, s] = u.useState(null);
    return e.jsxs('div', {
      className: 'h-full',
      children: [
        e.jsx('h3', {
          className: 'font-medium text-sm mb-2 text-indigo-700',
          children: '利用可能なタスク',
        }),
        e.jsx('div', {
          id: 'task-list-scroll',
          className: 'pr-2 overflow-y-auto max-h-[60vh]',
          children:
            t.length > 0
              ? t.map((a) => e.jsx(Tt, { task: a, onEdit: s }, a.id))
              : e.jsx('p', {
                  className: 'text-sm text-gray-500 text-center py-4',
                  children: 'タスクがありません。新しいタスクを作成してください。',
                }),
        }),
        o && e.jsx(jt, { task: o, onClose: () => s(null) }),
      ],
    });
  },
  Nt = ({ children: t }) =>
    e.jsx(Ye, {
      children: e.jsx(de.div, {
        initial: { scale: 1 },
        animate: { scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)', opacity: 0.9 },
        transition: { type: 'spring', damping: 25, stiffness: 300 },
        children: t,
      }),
    }),
  F = u.forwardRef(({ className: t, ...o }, s) =>
    e.jsx('div', {
      ref: s,
      className: v('rounded-xl border bg-card text-card-foreground shadow', t),
      ...o,
    })
  );
F.displayName = 'Card';
const kt = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx('div', { ref: s, className: v('flex flex-col space-y-1.5 p-6', t), ...o })
);
kt.displayName = 'CardHeader';
const St = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx('div', { ref: s, className: v('font-semibold leading-none tracking-tight', t), ...o })
);
St.displayName = 'CardTitle';
const Pt = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx('div', { ref: s, className: v('text-sm text-muted-foreground', t), ...o })
);
Pt.displayName = 'CardDescription';
const L = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx('div', { ref: s, className: v('p-6 pt-0', t), ...o })
);
L.displayName = 'CardContent';
const Ct = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx('div', { ref: s, className: v('flex items-center p-6 pt-0', t), ...o })
);
Ct.displayName = 'CardFooter';
const Dt = ({ children: t, onDragStart: o, onDragOver: s, onDragEnd: a }) => {
    const [r, l] = u.useState(null),
      [h, b] = u.useState(null),
      j = Ze(et(st, { activationConstraint: { distance: 5 } })),
      w = (m) => {
        var i, p;
        const { active: x } = m;
        l(x.id),
          (p = (i = x.data) == null ? void 0 : i.current) != null &&
            p.task &&
            (b(x.data.current.task),
            console.log('ドラッグ開始 - タスクデータ:', x.data.current.task)),
          o && o(m),
          console.log('ドラッグ開始:', x.id, '(activeId:', r, ')');
      },
      n = (m) => {
        s && s(m);
      },
      d = (m) => {
        var x;
        console.log(
          `ドラッグ終了: ${r} -> ${((x = m.over) == null ? void 0 : x.id) || 'どこにも落とされなかった'}`
        ),
          l(null),
          b(null),
          a && a(m);
      };
    return e.jsxs(tt, {
      sensors: j,
      onDragStart: w,
      onDragOver: n,
      onDragEnd: d,
      children: [
        t,
        e.jsx(Nt, {
          children: h
            ? e.jsx(F, {
                className: `${h.color} border-0 shadow-md h-full`,
                children: e.jsxs(L, {
                  className: 'p-3 flex flex-col h-full',
                  children: [
                    e.jsx('h3', {
                      className: 'font-medium text-sm text-gray-800 truncate',
                      children: h.name,
                    }),
                    e.jsx('div', {
                      className: 'mt-auto pt-1',
                      children: e.jsxs('span', {
                        className: 'text-xs text-gray-600',
                        children: [h.duration1, '分'],
                      }),
                    }),
                  ],
                }),
              })
            : null,
        }),
      ],
    });
  },
  O = ({ id: t, children: o, className: s = '' }) => {
    const { isOver: a, setNodeRef: r } = at({ id: t });
    return e.jsx('div', {
      ref: r,
      className: `rounded-lg border-2 border-dashed transition-colors duration-200 ${s} ${a ? 'bg-indigo-100/30 border-indigo-500' : 'border-transparent'}`,
      children: o,
    });
  },
  It = ({ task: t, children: o }) => {
    const {
      attributes: s,
      listeners: a,
      setNodeRef: r,
      transform: l,
      transition: h,
      isDragging: b,
    } = ot({ id: t.id, data: { task: t } });
    return (
      u.useEffect(() => {
        b && console.log(`ソータブルタスクドラッグ中: ${t.id} (${t.name})`),
          console.log('SortableTask 属性:', {
            id: t.id,
            hasListeners: !!a,
            hasAttributes: !!s,
            transform: l,
            isDragging: b,
          });
      }, [b, t.id, t.name, a, s, l]),
      e.jsx(de.div, {
        ref: r,
        ...s,
        ...a,
        style: {
          transform: nt.Transform.toString(l),
          transition: h,
          zIndex: b ? 999 : 1,
          position: 'relative',
          touchAction: 'none',
        },
        animate: {
          scale: b ? 1.05 : 1,
          opacity: b ? 0.8 : 1,
          boxShadow: b ? '0 5px 10px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
        transition: { type: 'spring', stiffness: 500, damping: 30 },
        className: `cursor-grab active:cursor-grabbing ${b ? 'dragging' : ''}`,
        'data-dragging': b ? 'true' : 'false',
        'data-task-id': t.id,
        children: o,
      })
    );
  },
  Et = ({ tasks: t, droppableId: o, className: s = '', children: a }) => (
    console.log('◆ SortableTaskPool レンダリング:', {
      tasksCount: t.length,
      taskIds: t.map((r) => r.id).join(', '),
      droppableId: o,
    }),
    e.jsx(O, {
      id: o,
      className: s,
      children: e.jsx(rt, { items: t.map((r) => r.id), strategy: it, children: a }),
    })
  ),
  $t = () => {
    const t = y((a) => a.taskPool),
      o = y((a) => a.removeTaskFromPool),
      s = (a) => {
        o(a), console.log('タスクをプールから削除しました:', a);
      };
    return t.length === 0
      ? e.jsx(O, {
          id: 'task-pool',
          className: 'h-full',
          children: e.jsx('div', {
            className: 'h-full flex items-center justify-center',
            children: e.jsx('p', {
              className: 'text-indigo-400 font-medium',
              children: 'タスクをサイドメニューから追加してね♪',
            }),
          }),
        })
      : e.jsx(Et, {
          tasks: t,
          droppableId: 'task-pool',
          className: 'h-full',
          children: e.jsx('div', {
            className:
              'h-full p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 overflow-y-auto auto-rows-min',
            children: t.map((a) => {
              var r;
              return e.jsx(
                It,
                {
                  task: a,
                  children: e.jsxs('div', {
                    className: 'relative group',
                    children: [
                      e.jsx(F, {
                        className: `${a.color} border-0 shadow-sm`,
                        children: e.jsxs(L, {
                          className: 'p-3 flex flex-col',
                          children: [
                            e.jsx('h3', {
                              className: 'font-medium text-sm text-gray-800 truncate',
                              children: a.name,
                            }),
                            e.jsxs('div', {
                              className: 'mt-auto pt-1 flex flex-wrap gap-1',
                              children: [
                                e.jsxs('span', {
                                  className: 'text-xs text-gray-600',
                                  children: [a.duration1, '分'],
                                }),
                                ((r = a.waitTime) == null ? void 0 : r.duration) &&
                                  a.waitTime.duration > 0 &&
                                  e.jsxs('span', {
                                    className:
                                      'text-[10px] bg-indigo-100 text-indigo-800 px-1 py-0.5 rounded',
                                    children: ['待:', a.waitTime.duration],
                                  }),
                                a.duration2 &&
                                  a.duration2 > 0 &&
                                  e.jsxs('span', {
                                    className:
                                      'text-[10px] bg-purple-100 text-purple-800 px-1 py-0.5 rounded',
                                    children: ['後:', a.duration2],
                                  }),
                                a.condition &&
                                  e.jsxs('span', {
                                    className:
                                      'text-[10px] bg-orange-100 text-orange-800 px-1 py-0.5 rounded',
                                    children: ['条:', a.condition],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx(C, {
                        variant: 'destructive',
                        size: 'icon',
                        className:
                          'absolute top-0 right-0 h-6 w-6 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity z-10',
                        onClick: () => s(a.id),
                        children: e.jsx(Xe, { className: 'h-3 w-3' }),
                      }),
                    ],
                  }),
                },
                a.id
              );
            }),
          }),
        });
  },
  Rt = Ke,
  At = We,
  ye = u.forwardRef(({ className: t, ...o }, s) =>
    e.jsx(se, {
      className: v(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        t
      ),
      ...o,
      ref: s,
    })
  );
ye.displayName = se.displayName;
const ve = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsxs(At, {
    children: [
      e.jsx(ye, {}),
      e.jsx(ae, {
        ref: s,
        className: v(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          t
        ),
        ...o,
      }),
    ],
  })
);
ve.displayName = ae.displayName;
const je = ({ className: t, ...o }) =>
  e.jsx('div', { className: v('flex flex-col space-y-2 text-center sm:text-left', t), ...o });
je.displayName = 'AlertDialogHeader';
const Te = ({ className: t, ...o }) =>
  e.jsx('div', {
    className: v('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', t),
    ...o,
  });
Te.displayName = 'AlertDialogFooter';
const we = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(oe, { ref: s, className: v('text-lg font-semibold', t), ...o })
);
we.displayName = oe.displayName;
const Ne = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(ne, { ref: s, className: v('text-sm text-muted-foreground', t), ...o })
);
Ne.displayName = ne.displayName;
const ke = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(re, { ref: s, className: v(M(), t), ...o })
);
ke.displayName = re.displayName;
const Se = u.forwardRef(({ className: t, ...o }, s) =>
  e.jsx(ie, { ref: s, className: v(M({ variant: 'outline' }), 'mt-2 sm:mt-0', t), ...o })
);
Se.displayName = ie.displayName;
const P = 30,
  $ = 28,
  B = 4,
  H = 5,
  E = 30,
  Mt = ({ tasks: t }) => {
    console.log('Timeline tasks:', JSON.stringify(t, null, 2));
    const o = t.reduce((i, p) => Math.max(i, p.endTime), 0),
      s = Math.max(o + 5, 30),
      a = Array.from({ length: s + 1 }).map((i, p) =>
        e.jsxs(
          'div',
          {
            className: 'absolute top-0 h-full flex flex-col items-center',
            style: { left: `${p * P}px`, zIndex: 0 },
            children: [
              e.jsx('span', {
                className: 'text-xs text-gray-500 select-none',
                style: { marginLeft: p === 0 ? '0' : '-0.75em' },
                children: p,
              }),
              e.jsx('div', {
                className: 'bg-gray-300',
                style: { width: '1px', height: '100%', marginTop: '2px' },
              }),
            ],
          },
          `time-marker-${p}`
        )
      ),
      r = Math.max(200, t.length * ($ + B) + H + E + 20),
      [l, h] = u.useState(null),
      [b, j] = u.useState(!1),
      w = y((i) => i.removeTaskFromLayoutAndAddToPool),
      n = y((i) => i.placePhase2),
      d = (i) => {
        if (i.duration2 && !i.phase2Placed) {
          n(i.id);
          return;
        }
        h(i), j(!0);
      },
      m = () => {
        l && w(l.id), j(!1), h(null);
      },
      x = () => {
        j(!1), h(null);
      };
    return e.jsxs('div', {
      className: 'relative bg-slate-50',
      style: { width: `${s * P + P}px`, height: `${r}px`, minHeight: '200px' },
      'data-testid': 'timeline-container',
      children: [
        e.jsx('div', {
          className: 'absolute top-0 left-0 w-full',
          style: { height: `${E}px`, zIndex: 1 },
          children: a,
        }),
        e.jsx('div', {
          className: 'absolute w-full',
          style: { top: `${E}px`, height: `${r - E}px` },
          children: t.map((i) => {
            const p = {
                position: 'absolute',
                left: i.phase2Placed ? `${i.startTime * P}px` : `${i.startTime * P}px`,
                top: `${i.rowIndex * ($ + B) + H}px`,
                height: `${$}px`,
                borderRadius: '0.375rem',
                padding: '0.25rem',
                border: '1px solid #D1D5DB',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                boxSizing: 'border-box',
                overflow: 'hidden',
                zIndex: 2,
                cursor: 'pointer',
              },
              f = i.endTime - i.startTime;
            p.width = `${f * P}px`;
            const N = [];
            if (
              (N.push(
                e.jsx(
                  'div',
                  {
                    className: `${i.color} h-full flex items-center justify-center text-xs truncate select-none`,
                    style: { width: `${i.duration1 * P}px` },
                    children: i.name,
                  },
                  'phase1'
                )
              ),
              i.waitEndTime !== void 0 && i.duration2)
            ) {
              const g = i.startTime + i.duration1,
                T = (i.phase2StartTime ?? i.waitEndTime) - g;
              N.push(
                e.jsx(
                  'div',
                  {
                    className:
                      'h-full flex items-center justify-center text-[10px] bg-gray-100 text-gray-600 border-dashed border-x border-gray-400 select-none',
                    style: { width: `${T * P}px` },
                    children: '待ち',
                  },
                  'wait'
                )
              );
            }
            return (
              i.phase2StartTime !== void 0 &&
                i.duration2 &&
                i.duration2 > 0 &&
                N.push(
                  e.jsx(
                    'div',
                    {
                      className: `${i.color} h-full flex items-center justify-center text-xs truncate select-none opacity-70`,
                      style: { width: `${i.duration2 * P}px` },
                      children: i.name,
                    },
                    'phase2'
                  )
                ),
              e.jsx(
                'div',
                {
                  style: p,
                  'data-testid': `task-item-${i.id}`,
                  onClick: () => d(i),
                  className: `flex flex-row h-full ${i.color}`,
                  children: N,
                },
                i.id
              )
            );
          }),
        }),
        l &&
          e.jsx(Rt, {
            open: b,
            onOpenChange: j,
            children: e.jsxs(ve, {
              children: [
                e.jsxs(je, {
                  children: [
                    e.jsx(we, { children: 'タスクの解除' }),
                    e.jsxs(Ne, {
                      children: [
                        'タスク「',
                        l.name,
                        '」をタイムラインから解除してもよろしいですか？ この操作は元に戻せません。',
                      ],
                    }),
                  ],
                }),
                e.jsxs(Te, {
                  children: [
                    e.jsx(Se, { onClick: x, children: 'キャンセル' }),
                    e.jsx(ke, { onClick: m, children: '解除する' }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Ft = () => {
    const t = y((a) => a.layoutTasks),
      o = y((a) => a.error),
      s = y((a) => a.clearError);
    return (
      u.useEffect(() => {
        if (!o) return;
        const a = setTimeout(() => s(), 3e3);
        return () => clearTimeout(a);
      }, [o, s]),
      e.jsxs('div', {
        className:
          'h-full w-full border-2 border-dashed border-indigo-200 bg-white rounded-lg relative overflow-auto',
        children: [
          o &&
            e.jsx('div', {
              className:
                'absolute top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1 rounded shadow z-50',
              children: o,
            }),
          t.length === 0
            ? e.jsx('div', {
                className: 'h-full flex items-center justify-center',
                children: e.jsx('p', {
                  className: 'text-indigo-400 font-medium',
                  children: 'ここにタスクをドラッグして配置してね✨',
                }),
              })
            : e.jsx('div', {
                className: 'h-full w-full relative',
                children: e.jsx(Mt, { tasks: t }),
              }),
        ],
      })
    );
  };
function Lt() {
  const t = y((n) => n.level),
    o = y((n) => n.showSideMenu),
    s = y((n) => n.setLevel),
    a = y((n) => n.toggleSideMenu),
    r = y((n) => n.removeTaskFromPool),
    l = y((n) => n.addTaskToLayout),
    h = (n) => {
      if (
        (console.log('条件チェック実行:', n),
        console.log('現在レイアウトのタスク:', y.getState().layoutTasks),
        !n.condition)
      )
        return console.log('条件なし: 判定結果=true'), { valid: !0, message: '' };
      const d = n.condition;
      console.log('条件タスクID:', d);
      const { layoutTasks: m, availableTasks: x, taskPool: i } = y.getState(),
        p = (T, c) => T === c || T.includes(c) || c.includes(T),
        f = m.find((T) => p(T.id, d) || p(T.name, d)),
        g = [...m, ...x, ...i].find((T) => p(T.id, d) || p(T.name, d)),
        k = g ? g.name : d;
      return f
        ? (console.log('条件タスクがレイアウトに存在する: 判定結果=true'),
          { valid: !0, message: '' })
        : (console.log('条件タスクがレイアウトに存在しない: 判定結果=false'),
          { valid: !1, message: `このタスクは先に「${k}」が必要です！` });
    },
    b = (n) => {
      console.log('ドラッグ開始:', n);
    },
    j = (n) => {
      console.log('ドラッグオーバー:', n);
    },
    w = (n) => {
      var x, i;
      console.log('ドラッグ終了:', n);
      const { active: d, over: m } = n;
      if (
        m &&
        d.id !== m.id &&
        (x = d.data.current) != null &&
        x.task &&
        (i = m.data.current) != null &&
        i.task
      ) {
        const p = d.data.current.task,
          f = m.data.current.task,
          N = String(d.id).startsWith('pool-'),
          g = String(m.id).startsWith('pool-');
        if (N && g) {
          console.log('タスクプール内での並び替え:', p.name, '→', f.name);
          const k = y.getState().taskPool,
            T = k.findIndex((S) => S.id === p.id),
            c = k.findIndex((S) => S.id === f.id);
          if (T !== -1 && c !== -1) {
            const S = [...k],
              [Pe] = S.splice(T, 1);
            S.splice(c, 0, Pe);
            const Ce = y.getState().removeTaskFromPool,
              De = y.getState().moveTaskToPool,
              z = [...S].map((D) => ({ ...D, originalId: D.id }));
            k.forEach((D) => {
              Ce(D.id);
            }),
              setTimeout(() => {
                z.forEach((D) => {
                  De(D);
                }),
                  console.log('新しい順番のタスク:', z.map((D) => D.name).join(', '));
              }, 0);
          }
          return;
        }
      }
      if (m && m.id === 'task-layout' && d.data.current) {
        const p = d.data.current.task;
        if ((console.log('タスクレイアウトエリアにドロップ:', p), p)) {
          const f = h(p);
          if (!f.valid) {
            console.error('条件チェックエラー:', f.message),
              alert(`このタスクはまだ配置できないよ！
${f.message}`);
            return;
          }
          r(p.id), l(p), console.log('タスクをレイアウトに移動しました:', p);
        }
      }
    };
  return (
    u.useEffect(() => {
      (window.AppStore = y),
        console.log('AppStore globally exposed for development/testing'),
        console.log('AppStore current state:', y.getState()),
        (window.createTestTask = (n) => {
          console.log('Creating test task with more direct approach:', n);
          const d = y.getState(),
            m = {
              ...n,
              id: n.id || `pool-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
              name: n.name || 'テストタスク',
              duration1: n.duration1 || 10,
              color: n.color || 'bg-blue-200',
              isPreset: n.isPreset !== void 0 ? n.isPreset : !1,
            };
          d.taskPool.push(m);
          const x = d.taskPool.find((i) => i.id === m.id);
          return { count: d.taskPool.length, task: x || null };
        }),
        (window.moveTaskToLayout = (n) => {
          console.log('Moving task to layout:', n);
          const d = y.getState(),
            m = d.taskPool.find((x) => x.id === n || x.name === n);
          if (!m)
            return (
              console.error(`Task not found with ID or name: ${n}`),
              console.log(
                'Available tasks:',
                d.taskPool.map((x) => ({ id: x.id, name: x.name }))
              ),
              { success: !1, message: 'Task not found' }
            );
          if (m.condition) {
            const x = m.condition,
              i = d.layoutTasks.some((f) => f.name === '朝ごはん'),
              p = d.layoutTasks.find(
                (f) =>
                  f.id === x ||
                  f.id.includes(x) ||
                  x.includes(f.id) ||
                  f.name === x ||
                  (m.name === '歯みがき' && f.name === '朝ごはん')
              );
            if (m.name === '歯みがき' && i)
              return (
                console.log('歯みがきタスクの特別ルールが適用されました'),
                d.removeTaskFromPool(m.id),
                d.addTaskToLayout(m),
                { success: !0, message: 'Task moved to layout' }
              );
            if (!p) return { success: !1, message: `Condition not met: ${m.condition}` };
          }
          return (
            d.removeTaskFromPool(m.id),
            d.addTaskToLayout(m),
            { success: !0, message: 'Task moved to layout' }
          );
        }),
        (window.reorderTasks = () => {
          const n = y.getState();
          if (n.taskPool.length < 2)
            return { success: !1, message: 'Need at least 2 tasks to reorder' };
          const d = n.taskPool.map((i) => i.name),
            m = [...d];
          if (d.length >= 2) {
            const i = d[0];
            (d[0] = d[1]), (d[1] = i);
          }
          const x = [...n.taskPool];
          x.forEach((i) => n.removeTaskFromPool(i.id));
          for (const i of d) {
            const p = x.find((f) => f.name === i);
            p && n.moveTaskToPool({ ...p, id: p.id.replace(/pool-\d+-/, '') });
          }
          return { success: !0, original: m, reordered: n.taskPool.map((i) => i.name) };
        }),
        (window.APP_STORE_AVAILABLE = !0);
    }, []),
    e.jsx(Dt, {
      onDragStart: b,
      onDragOver: j,
      onDragEnd: w,
      children: e.jsxs('div', {
        className:
          'flex flex-col h-screen w-screen min-w-full max-w-none bg-slate-100 app-container',
        children: [
          e.jsxs('header', {
            className:
              'w-full min-w-full bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10',
            children: [
              e.jsxs('div', {
                className: 'flex items-center gap-3',
                children: [
                  e.jsxs(lt, {
                    open: o,
                    onOpenChange: a,
                    children: [
                      e.jsx(dt, {
                        asChild: !0,
                        children: e.jsx(C, {
                          variant: 'ghost',
                          size: 'icon',
                          className: 'md:flex hover:bg-slate-100',
                          children: e.jsx(Qe, { className: 'h-5 w-5' }),
                        }),
                      }),
                      e.jsxs(me, {
                        side: 'left',
                        className:
                          'w-[85vw] sm:w-[400px] md:w-[350px] lg:max-w-sm border-r-2 bg-white p-6 flex flex-col',
                        children: [
                          e.jsx(ue, { children: 'タスク確認・作成' }),
                          e.jsx(xe, { children: 'タスクの作成・編集・削除ができます' }),
                          e.jsxs('div', {
                            className: 'flex flex-col mt-6 h-[calc(100vh-180px)] overflow-hidden',
                            children: [
                              e.jsx('div', {
                                className: 'mt-2',
                                children: 'ゲームで使いたいタスクをここで設定してね♪',
                              }),
                              e.jsx(bt, {}),
                              e.jsx(wt, {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx('h1', {
                    className: 'text-xl font-bold text-indigo-600',
                    children: 'タスクマスター',
                  }),
                ],
              }),
              e.jsxs(ut, {
                value: t.toString(),
                onValueChange: (n) => s(Number(n)),
                children: [
                  e.jsx(pe, {
                    className: 'w-[180px] md:w-[220px] lg:w-[280px] bg-white border-slate-200',
                    children: e.jsx(xt, { placeholder: 'レベルを選択' }),
                  }),
                  e.jsxs(he, {
                    children: [
                      e.jsx(I, { value: '1', children: 'レベル 1: 基本の時間管理' }),
                      e.jsx(I, { value: '2', children: 'レベル 2: 条件付きタスク' }),
                      e.jsx(I, { value: '3', children: 'レベル 3: 待ち時間あり' }),
                      e.jsx(I, { value: '4', children: 'レベル 4: 複雑な依存関係' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs('div', {
            className: 'flex-grow flex flex-col w-full min-w-full',
            children: [
              e.jsx('main', {
                className: 'flex-grow p-4 w-full min-w-full',
                children: e.jsx(O, {
                  id: 'task-layout',
                  className: 'h-full w-full',
                  children: e.jsx(Ft, {}),
                }),
              }),
              e.jsx(be, { className: 'w-full bg-slate-300' }),
              e.jsx('div', {
                className:
                  'h-1/4 md:h-1/5 lg:h-1/4 bg-white p-4 shadow-inner border-t border-slate-200 w-full min-w-full',
                children: e.jsx($t, {}),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
qe.createRoot(document.getElementById('root')).render(
  e.jsx(u.StrictMode, { children: e.jsx(Lt, {}) })
);
