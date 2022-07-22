var g = function() {
  var e = this, r = e.$createElement, t = e._self._c || r;
  return t("div", {
    staticClass: "hello"
  }, [t("h1", [e._v(e._s(e.msg))]), e._m(0), t("h3", [e._v("Installed CLI Plugins")]), e._m(1), t("h3", [e._v("Essential Links")]), e._m(2), t("h3", [e._v("Ecosystem")]), e._m(3)]);
}, d = [function() {
  var e = this, r = e.$createElement, t = e._self._c || r;
  return t("p", [e._v(" For a guide and recipes on how to configure / customize this project,"), t("br"), e._v(" check out the "), t("a", {
    attrs: {
      href: "https://cli.vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("vue-cli documentation")]), e._v(". ")]);
}, function() {
  var e = this, r = e.$createElement, t = e._self._c || r;
  return t("ul", [t("li", [t("a", {
    attrs: {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("babel")])]), t("li", [t("a", {
    attrs: {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("eslint")])])]);
}, function() {
  var e = this, r = e.$createElement, t = e._self._c || r;
  return t("ul", [t("li", [t("a", {
    attrs: {
      href: "https://vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("Core Docs")])]), t("li", [t("a", {
    attrs: {
      href: "https://forum.vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("Forum")])]), t("li", [t("a", {
    attrs: {
      href: "https://chat.vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("Community Chat")])]), t("li", [t("a", {
    attrs: {
      href: "https://twitter.com/vuejs",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("Twitter")])]), t("li", [t("a", {
    attrs: {
      href: "https://news.vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("News")])])]);
}, function() {
  var e = this, r = e.$createElement, t = e._self._c || r;
  return t("ul", [t("li", [t("a", {
    attrs: {
      href: "https://router.vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("vue-router")])]), t("li", [t("a", {
    attrs: {
      href: "https://vuex.vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("vuex")])]), t("li", [t("a", {
    attrs: {
      href: "https://github.com/vuejs/vue-devtools#vue-devtools",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("vue-devtools")])]), t("li", [t("a", {
    attrs: {
      href: "https://vue-loader.vuejs.org",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("vue-loader")])]), t("li", [t("a", {
    attrs: {
      href: "https://github.com/vuejs/awesome-vue",
      target: "_blank",
      rel: "noopener"
    }
  }, [e._v("awesome-vue")])])]);
}];
function b(e, r, t, h, s, _, i, f) {
  var n = typeof e == "function" ? e.options : e;
  r && (n.render = r, n.staticRenderFns = t, n._compiled = !0), h && (n.functional = !0), _ && (n._scopeId = "data-v-" + _);
  var a;
  if (i ? (a = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), s && s.call(this, o), o && o._registeredComponents && o._registeredComponents.add(i);
  }, n._ssrRegister = a) : s && (a = f ? function() {
    s.call(this, (n.functional ? this.parent : this).$root.$options.shadowRoot);
  } : s), a)
    if (n.functional) {
      n._injectStyles = a;
      var p = n.render;
      n.render = function(m, u) {
        return a.call(u), p(m, u);
      };
    } else {
      var v = n.beforeCreate;
      n.beforeCreate = v ? [].concat(v, a) : [a];
    }
  return {
    exports: e,
    options: n
  };
}
const k = {
  name: "HelloWorld",
  props: {
    msg: String
  }
}, c = {};
var C = /* @__PURE__ */ b(k, g, d, !1, j, "56c14ef2", null, null);
function j(e) {
  for (let r in c)
    this[r] = c[r];
}
const l = /* @__PURE__ */ function() {
  return C.exports;
}();
l.install = function(e) {
  e.component(l.name, l);
};
const $ = [l], E = function(e, r = {}) {
  $.forEach((t) => {
    e.component(t.name, t);
  });
}, w = { install: E, HelloWorld: l };
export {
  l as HelloWorld,
  w as default
};
