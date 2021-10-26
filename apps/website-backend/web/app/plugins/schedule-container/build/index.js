!(function () {
  "use strict";
  var e,
    n = {
      273: function () {
        var e = window.wp.blocks,
          n = window.wp.element,
          r = window.wp.i18n,
          t = window.wp.blockEditor;
        (0, e.registerBlockType)("create-block/schedule-container", {
          edit: function () {
            return (0, n.createElement)(
              "p",
              (0, t.useBlockProps)(),
              (0, r.__)(
                "Schedule Container – hello from the editor!",
                "schedule-container"
              )
            );
          },
          save: function () {
            return (0, n.createElement)(
              "p",
              t.useBlockProps.save(),
              (0, r.__)(
                "Schedule Container – hello from the saved content!",
                "schedule-container"
              )
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
          for (var u = !0, l = 0; l < r.length; l++)
            (!1 & c || i >= c) &&
            Object.keys(t.O).every(function (e) {
              return t.O[e](r[l]);
            })
              ? r.splice(l--, 1)
              : ((u = !1), c < i && (i = c));
          if (u) {
            e.splice(s--, 1);
            var a = o();
            void 0 !== a && (n = a);
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
            l = r[2],
            a = 0;
          if (
            i.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (o in u) t.o(u, o) && (t.m[o] = u[o]);
            if (l) var s = l(t);
          }
          for (n && n(r); a < i.length; a++)
            (c = i[a]), t.o(e, c) && e[c] && e[c][0](), (e[i[a]] = 0);
          return t.O(s);
        },
        r = (self.webpackChunkschedule_container =
          self.webpackChunkschedule_container || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })();
  var o = t.O(void 0, [46], function () {
    return t(273);
  });
  o = t.O(o);
})();
