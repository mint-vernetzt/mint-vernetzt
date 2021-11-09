!(function () {
  "use strict";
  var e,
    t = {
      273: function () {
        var e = window.wp.blocks,
          t = window.wp.element,
          n = (window.wp.i18n, window.wp.blockEditor);
        (0, e.registerBlockType)("create-block/schedule-item", {
          edit: function (e) {
            const {
                attributes: { headline: r, from: a, to: l },
                setAttributes: o,
              } = e,
              c = (0, n.useBlockProps)();
            return (0, t.createElement)(
              "li",
              c,
              (0, t.createElement)(n.RichText, {
                tagName: "p",
                placeholder: "9:00",
                value: a,
                onChange: (e) => {
                  o({ from: e });
                },
                className: "from",
              }),
              (0, t.createElement)(n.RichText, {
                tagName: "p",
                placeholder: "10:00",
                value: l,
                onChange: (e) => {
                  o({ to: e });
                },
                className: "to",
              }),
              (0, t.createElement)(n.RichText, {
                tagName: "h4",
                placeholder: "Headline",
                value: r,
                onChange: (e) => {
                  o({ headline: e });
                },
                className: "headline",
              }),
              (0, t.createElement)(
                "div",
                null,
                (0, t.createElement)(n.InnerBlocks, null)
              )
            );
          },
          save: function (e) {
            const {
                attributes: { headline: r, from: a, to: l },
              } = e,
              o = n.useBlockProps.save();
            return (0, t.createElement)(
              "li",
              o,
              (0, t.createElement)(n.RichText.Content, {
                tagName: "p",
                value: a,
                className: "from",
              }),
              (0, t.createElement)(n.RichText.Content, {
                tagName: "p",
                value: l,
                className: "to",
              }),
              (0, t.createElement)(n.RichText.Content, {
                tagName: "h4",
                value: r,
                className: "headline",
              }),
              (0, t.createElement)(
                "div",
                null,
                (0, t.createElement)(n.InnerBlocks.Content, null)
              )
            );
          },
        });
      },
    },
    n = {};
  function r(e) {
    var a = n[e];
    if (void 0 !== a) return a.exports;
    var l = (n[e] = { exports: {} });
    return t[e](l, l.exports, r), l.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = function (t, n, a, l) {
      if (!n) {
        var o = 1 / 0;
        for (s = 0; s < e.length; s++) {
          (n = e[s][0]), (a = e[s][1]), (l = e[s][2]);
          for (var c = !0, i = 0; i < n.length; i++)
            (!1 & l || o >= l) &&
            Object.keys(r.O).every(function (e) {
              return r.O[e](n[i]);
            })
              ? n.splice(i--, 1)
              : ((c = !1), l < o && (o = l));
          if (c) {
            e.splice(s--, 1);
            var u = a();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      l = l || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > l; s--) e[s] = e[s - 1];
      e[s] = [n, a, l];
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = { 826: 0, 46: 0 };
      r.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var a,
            l,
            o = n[0],
            c = n[1],
            i = n[2],
            u = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in c) r.o(c, a) && (r.m[a] = c[a]);
            if (i) var s = i(r);
          }
          for (t && t(n); u < o.length; u++)
            (l = o[u]), r.o(e, l) && e[l] && e[l][0](), (e[o[u]] = 0);
          return r.O(s);
        },
        n = (self.webpackChunkschedule_item =
          self.webpackChunkschedule_item || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var a = r.O(void 0, [46], function () {
    return r(273);
  });
  a = r.O(a);
})();
