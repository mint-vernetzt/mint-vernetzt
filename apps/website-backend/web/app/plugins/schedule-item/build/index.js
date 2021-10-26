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
                attributes: { title: r, body: a, date: o, time: i },
                setAttributes: c,
              } = e,
              l = (0, n.useBlockProps)();
            return (0, t.createElement)(
              "li",
              l,
              (0, t.createElement)(n.RichText, {
                tagName: "p",
                placeholder: "e.g. 19. September",
                value: o,
                onChange: (e) => {
                  c({ date: e });
                },
              }),
              (0, t.createElement)(n.RichText, {
                tagName: "p",
                placeholder: "e.g. 12:30-14:00",
                value: i,
                onChange: (e) => {
                  c({ time: e });
                },
              }),
              (0, t.createElement)(n.RichText, {
                tagName: "h4",
                placeholder: "Title",
                value: r,
                onChange: (e) => {
                  c({ title: e });
                },
              }),
              (0, t.createElement)(n.RichText, {
                tagName: "p",
                placeholder: "Body",
                value: a,
                onChange: (e) => {
                  c({ body: e });
                },
              })
            );
          },
          save: function (e) {
            const {
                attributes: { title: r, body: a, date: o, time: i },
              } = e,
              c = n.useBlockProps.save();
            return (0, t.createElement)(
              "li",
              c,
              (0, t.createElement)(n.RichText.Content, {
                tagName: "p",
                value: o,
              }),
              (0, t.createElement)(n.RichText.Content, {
                tagName: "p",
                value: `${i} Uhr`,
              }),
              (0, t.createElement)(n.RichText.Content, {
                tagName: "h4",
                value: r,
              }),
              (0, t.createElement)(n.RichText.Content, {
                tagName: "p",
                value: a,
              })
            );
          },
        });
      },
    },
    n = {};
  function r(e) {
    var a = n[e];
    if (void 0 !== a) return a.exports;
    var o = (n[e] = { exports: {} });
    return t[e](o, o.exports, r), o.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = function (t, n, a, o) {
      if (!n) {
        var i = 1 / 0;
        for (h = 0; h < e.length; h++) {
          (n = e[h][0]), (a = e[h][1]), (o = e[h][2]);
          for (var c = !0, l = 0; l < n.length; l++)
            (!1 & o || i >= o) &&
            Object.keys(r.O).every(function (e) {
              return r.O[e](n[l]);
            })
              ? n.splice(l--, 1)
              : ((c = !1), o < i && (i = o));
          if (c) {
            e.splice(h--, 1);
            var u = a();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var h = e.length; h > 0 && e[h - 1][2] > o; h--) e[h] = e[h - 1];
      e[h] = [n, a, o];
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
            o,
            i = n[0],
            c = n[1],
            l = n[2],
            u = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in c) r.o(c, a) && (r.m[a] = c[a]);
            if (l) var h = l(r);
          }
          for (t && t(n); u < i.length; u++)
            (o = i[u]), r.o(e, o) && e[o] && e[o][0](), (e[i[u]] = 0);
          return r.O(h);
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
