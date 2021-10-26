!(function () {
  "use strict";
  var e,
    r = {
      273: function () {
        var e = window.wp.blocks,
          r = window.wp.element,
          n = window.wp.i18n,
          t = window.wp.blockEditor;
        (0, e.registerBlockType)("create-block/schedule", {
          edit: function () {
            return (0, r.createElement)(
              "p",
              (0, t.useBlockProps)(),
              (0, n.__)("Schedule – hello from the editor!", "schedule")
            );
          },
          save: function () {
            return (0, r.createElement)(
              "p",
              t.useBlockProps.save(),
              (0, n.__)("Schedule – hello from the saved content!", "schedule")
            );
          },
        });
      },
    },
    n = {};
  function t(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var u = (n[e] = { exports: {} });
    return r[e](u, u.exports, t), u.exports;
  }
  (t.m = r),
    (e = []),
    (t.O = function (r, n, o, u) {
      if (!n) {
        var c = 1 / 0;
        for (f = 0; f < e.length; f++) {
          (n = e[f][0]), (o = e[f][1]), (u = e[f][2]);
          for (var i = !0, l = 0; l < n.length; l++)
            (!1 & u || c >= u) &&
            Object.keys(t.O).every(function (e) {
              return t.O[e](n[l]);
            })
              ? n.splice(l--, 1)
              : ((i = !1), u < c && (c = u));
          if (i) {
            e.splice(f--, 1);
            var s = o();
            void 0 !== s && (r = s);
          }
        }
        return r;
      }
      u = u || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > u; f--) e[f] = e[f - 1];
      e[f] = [n, o, u];
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (function () {
      var e = { 826: 0, 46: 0 };
      t.O.j = function (r) {
        return 0 === e[r];
      };
      var r = function (r, n) {
          var o,
            u,
            c = n[0],
            i = n[1],
            l = n[2],
            s = 0;
          if (
            c.some(function (r) {
              return 0 !== e[r];
            })
          ) {
            for (o in i) t.o(i, o) && (t.m[o] = i[o]);
            if (l) var f = l(t);
          }
          for (r && r(n); s < c.length; s++)
            (u = c[s]), t.o(e, u) && e[u] && e[u][0](), (e[c[s]] = 0);
          return t.O(f);
        },
        n = (self.webpackChunkschedule = self.webpackChunkschedule || []);
      n.forEach(r.bind(null, 0)), (n.push = r.bind(null, n.push.bind(n)));
    })();
  var o = t.O(void 0, [46], function () {
    return t(273);
  });
  o = t.O(o);
})();
