!(function () {
  "use strict";
  var e,
    n = {
      799: function () {
        var e = window.wp.blocks;
        function n() {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  for (var t in r)
                    Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                }
                return e;
              }),
            n.apply(this, arguments)
          );
        }
        var r = window.wp.element,
          t = (window.wp.i18n, window.wp.blockEditor);
        (0, e.registerBlockType)("create-block/schedule-container", {
          edit: function () {
            const e = (0, t.useBlockProps)();
            return (0, r.createElement)(
              "aside",
              n({ id: "schedule-container" }, e),
              (0, r.createElement)(t.InnerBlocks, null)
            );
          },
          save: function () {
            const e = t.useBlockProps.save();
            return (0, r.createElement)(
              "aside",
              n({ id: "schedule-container" }, e),
              (0, r.createElement)(t.InnerBlocks.Content, null)
            );
          },
        });
      },
    },
    r = {};
  function t(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var c = (r[e] = { exports: {} });
    return n[e](c, c.exports, t), c.exports;
  }
  (t.m = n),
    (e = []),
    (t.O = function (n, r, o, c) {
      if (!r) {
        var i = 1 / 0;
        for (s = 0; s < e.length; s++) {
          (r = e[s][0]), (o = e[s][1]), (c = e[s][2]);
          for (var u = !0, a = 0; a < r.length; a++)
            (!1 & c || i >= c) &&
            Object.keys(t.O).every(function (e) {
              return t.O[e](r[a]);
            })
              ? r.splice(a--, 1)
              : ((u = !1), c < i && (i = c));
          if (u) {
            e.splice(s--, 1);
            var l = o();
            void 0 !== l && (n = l);
          }
        }
        return n;
      }
      c = c || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > c; s--) e[s] = e[s - 1];
      e[s] = [r, o, c];
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (function () {
      var e = { 826: 0, 46: 0 };
      t.O.j = function (n) {
        return 0 === e[n];
      };
      var n = function (n, r) {
          var o,
            c,
            i = r[0],
            u = r[1],
            a = r[2],
            l = 0;
          if (
            i.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (o in u) t.o(u, o) && (t.m[o] = u[o]);
            if (a) var s = a(t);
          }
          for (n && n(r); l < i.length; l++)
            (c = i[l]), t.o(e, c) && e[c] && e[c][0](), (e[i[l]] = 0);
          return t.O(s);
        },
        r = (self.webpackChunkschedule_container =
          self.webpackChunkschedule_container || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })();
  var o = t.O(void 0, [46], function () {
    return t(799);
  });
  o = t.O(o);
})();
