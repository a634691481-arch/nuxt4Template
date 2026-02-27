import { v as vueExports, w as useAppConfig, z as tv, A as serverRenderer_cjs_prodExports, P as Primitive } from './server.mjs';
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

const theme = {
  "slots": {
    "root": "my-5",
    "container": "flex items-center gap-3 font-mono text-sm",
    "name": "font-semibold text-primary",
    "wrapper": "flex-1 flex items-center gap-1.5 text-xs",
    "required": "rounded-sm bg-error/10 text-error px-1.5 py-0.5",
    "type": "rounded-sm bg-elevated text-toned px-1.5 py-0.5",
    "description": "mt-3 text-muted text-sm [&_code]:text-xs/4"
  }
};
const _sfc_main = {
  __name: "ProseField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    description: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = vueExports.useSlots();
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.field || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            if (__props.name) {
              _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.name({ class: props.ui?.name }))}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.type || __props.required) {
              _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (__props.type) {
                _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.type({ class: props.ui?.type }))}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.type)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.required) {
                _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.required({ class: props.ui?.required }))}"${_scopeId}> required </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!!slots.default || __props.description) {
              _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode("div", {
                class: ui.value.container({ class: props.ui?.container })
              }, [
                __props.name ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 0,
                  class: ui.value.name({ class: props.ui?.name })
                }, vueExports.toDisplayString(__props.name), 3)) : vueExports.createCommentVNode("", true),
                __props.type || __props.required ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 1,
                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                }, [
                  __props.type ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 0,
                    class: ui.value.type({ class: props.ui?.type })
                  }, vueExports.toDisplayString(__props.type), 3)) : vueExports.createCommentVNode("", true),
                  __props.required ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 1,
                    class: ui.value.required({ class: props.ui?.required })
                  }, " required ", 2)) : vueExports.createCommentVNode("", true)
                ], 2)) : vueExports.createCommentVNode("", true)
              ], 2),
              !!slots.default || __props.description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: ui.value.description({ class: props.ui?.description })
              }, [
                vueExports.renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => [
                  vueExports.createTextVNode(vueExports.toDisplayString(__props.description), 1)
                ])
              ], 2)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Field-Bd3lhAGI.mjs.map
