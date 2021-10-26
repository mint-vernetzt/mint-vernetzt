!(function () {
  "use strict";
  var e,
    r = {
      273: function () {
        var e = window.wp.blocks,
          r = window.wp.element,
          n = window.wp.i18n,
          t = window.wp.blockEditor;
        (0, e.registerBlockType)("create-block/schedule-item", {
          edit: function () {
            return (0, r.createElement)(
              "p",
              (0, t.useBlockProps)(),
              (0, n.__)(
                "Schedule Item – hello from the editor!",
                "schedule-item"
              )
            );
          },
          save: function () {
            return (0, r.createElement)(
              "p",
              t.useBlockProps.save(),
              (0, n.__)(
                "Schedule Item – hello from the saved content!",
                "schedule-item"
              )
            );
          },
        });
      },
    },
    n = {};
  function t(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var i = (n[e] = { exports: {} });
    return r[e](i, i.exports, t), i.exports;
  }
  (t.m = r),
    (e = []),
    (t.O = function (r, n, o, i) {
      if (!n) {
        var u = 1 / 0;
        for (f = 0; f < e.length; f++) {
          (n = e[f][0]), (o = e[f][1]), (i = e[f][2]);
          for (var c = !0, l = 0; l < n.length; l++)
            (!1 & i || u >= i) &&
            Object.keys(t.O).every(function (e) {
              return t.O[e](n[l]);
            })
              ? n.splice(l--, 1)
              : ((c = !1), i < u && (u = i));
          if (c) {
            e.splice(f--, 1);
            var s = o();
            void 0 !== s && (r = s);
          }
        }
        return r;
      }
      i = i || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > i; f--) e[f] = e[f - 1];
      e[f] = [n, o, i];
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
            i,
            u = n[0],
            c = n[1],
            l = n[2],
            s = 0;
          if (
            u.some(function (r) {
              return 0 !== e[r];
            })
          ) {
            for (o in c) t.o(c, o) && (t.m[o] = c[o]);
            if (l) var f = l(t);
          }
          for (r && r(n); s < u.length; s++)
            (i = u[s]), t.o(e, i) && e[i] && e[i][0](), (e[u[s]] = 0);
          return t.O(f);
        },
        n = (self.webpackChunkschedule_item =
          self.webpackChunkschedule_item || []);
      n.forEach(r.bind(null, 0)), (n.push = r.bind(null, n.push.bind(n)));
    })();
  var o = t.O(void 0, [46], function () {
    return t(273);
  });
  o = t.O(o);
})();
