import { M as _export_sfc, A as serverRenderer_cjs_prodExports, ay as __nuxt_component_0, v as vueExports, K as _sfc_main$b } from './server.mjs';
import { _ as _sfc_main$2 } from './AnimatePresence.vue-CgpYyaIT.mjs';
import { m as motion } from './index-CNniXDIx.mjs';
import '../_/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import '@iconify/utils';
import 'node:crypto';
import 'node:fs';
import 'node:path';
import 'tailwindcss/colors';
import '@yeger/vue-masonry-wall';
import 'v-viewer';
import 'node:stream';

const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "BackToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = vueExports.ref(false);
    function toTop() {
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AnimatePresence = _sfc_main$2;
      const _component_UButton = _sfc_main$b;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AnimatePresence, vueExports.mergeProps({ initial: false }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (visible.value) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(motion).div, {
                class: "fixed right-6 bottom-6 z-50 cursor-pointer",
                initial: { opacity: 0, scale: 0 },
                animate: { opacity: 1, scale: 1, rotate: 360 * 4 },
                exit: { opacity: 0, scale: 0 },
                transition: { duration: 1 },
                whileHover: { scale: 1.1 },
                whilePress: { scale: 0.9 }
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                      size: "lg",
                      color: "primary",
                      icon: "i-heroicons-arrow-up",
                      onClick: toTop
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_component_UButton, {
                        size: "lg",
                        color: "primary",
                        icon: "i-heroicons-arrow-up",
                        onClick: toTop
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              visible.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(motion).div, {
                key: 0,
                class: "fixed right-6 bottom-6 z-50 cursor-pointer",
                initial: { opacity: 0, scale: 0 },
                animate: { opacity: 1, scale: 1, rotate: 360 * 4 },
                exit: { opacity: 0, scale: 0 },
                transition: { duration: 1 },
                whileHover: { scale: 1.1 },
                whilePress: { scale: 0.9 }
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UButton, {
                    size: "lg",
                    color: "primary",
                    icon: "i-heroicons-arrow-up",
                    onClick: toTop
                  })
                ]),
                _: 1
              })) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "BackToTop" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  const _component_BackToTop = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_BackToTop, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BaXblmjF.mjs.map
