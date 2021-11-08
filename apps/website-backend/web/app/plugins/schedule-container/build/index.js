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
              "section",
              n({ id: "schedule" }, e),
              (0, r.createElement)(
                "ul",
                null,
                (0, r.createElement)(t.InnerBlocks, {
                  allowedBlocks: ["create-block/schedule-item"],
                })
              )
            );
          },
          save: function () {
            const e = t.useBlockProps.save();
            return (0, r.createElement)(
              "section",
              n({ id: "schedule" }, e),
              (0, r.createElement)(
                "ul",
                null,
                (0, r.createElement)(t.InnerBlocks.Content, null)
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
        var l = 1 / 0;
        for (s = 0; s < e.length; s++) {
          (r = e[s][0]), (o = e[s][1]), (c = e[s][2]);
          for (var i = !0, u = 0; u < r.length; u++)
            (!1 & c || l >= c) &&
            Object.keys(t.O).every(function (e) {
              return t.O[e](r[u]);
            })
              ? r.splice(u--, 1)
              : ((i = !1), c < l && (l = c));
          if (i) {
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
            l = r[0],
            i = r[1],
            u = r[2],
            a = 0;
          if (
            l.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (o in i) t.o(i, o) && (t.m[o] = i[o]);
            if (u) var s = u(t);
          }
          for (n && n(r); a < l.length; a++)
            (c = l[a]), t.o(e, c) && e[c] && e[c][0](), (e[l[a]] = 0);
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
