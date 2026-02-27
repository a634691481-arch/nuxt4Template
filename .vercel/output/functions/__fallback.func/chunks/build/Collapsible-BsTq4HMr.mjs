import { B as useLocale, w as useAppConfig, v as vueExports, z as tv, A as serverRenderer_cjs_prodExports, aj as transformUI, _ as _sfc_main$g, p as useForwardPropsEmits, x as reactivePick } from './server.mjs';
import { C as CollapsibleRoot_default, a as CollapsibleTrigger_default, b as CollapsibleContent_default } from './CollapsibleTrigger-CmVBESvT.mjs';
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
import './useId-De6qfwId.mjs';

const theme$1 = {
  "slots": {
    "root": "",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};
const _sfc_main$1 = {
  __name: "UCollapsible",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const ui = vueExports.computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.collapsible || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CollapsibleRoot_default), vueExports.mergeProps(vueExports.unref(rootProps), {
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: vueExports.withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CollapsibleTrigger_default), { "as-child": "" }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      vueExports.renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CollapsibleContent_default), {
              "data-slot": "content",
              class: ui.value.content({ class: props.ui?.content })
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    vueExports.renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(CollapsibleTrigger_default), {
                key: 0,
                "as-child": ""
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(vueExports.unref(CollapsibleContent_default), {
                "data-slot": "content",
                class: ui.value.content({ class: props.ui?.content })
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5",
    "trigger": [
      "group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "triggerLabel": "truncate",
    "content": "*:first:mt-2.5 *:last:mb-0 *:my-1.5"
  }
};
const _sfc_main = {
  __name: "ProseCollapsible",
  __ssrInlineRender: true,
  props: {
    icon: { type: null, required: false },
    name: { type: String, required: false },
    openText: { type: String, required: false },
    closeText: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: void 0, required: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.collapsible || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, vueExports.mergeProps({
        "unmount-on-hide": false,
        class: props.class,
        ui: vueExports.unref(transformUI)(ui.value, props.ui)
      }, _attrs), {
        default: vueExports.withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.trigger({ class: props.ui?.trigger }))}"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
              name: __props.icon || vueExports.unref(appConfig).ui.icons.chevronDown,
              class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
            }, null, _parent2, _scopeId));
            _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.triggerLabel({ class: props.ui?.triggerLabel }))}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(open ? props.closeText || vueExports.unref(t)("prose.collapsible.closeText") : props.openText || vueExports.unref(t)("prose.collapsible.openText"))} ${serverRenderer_cjs_prodExports.ssrInterpolate(props.name || vueExports.unref(t)("prose.collapsible.name"))}</span></button>`);
          } else {
            return [
              vueExports.createVNode("button", {
                class: ui.value.trigger({ class: props.ui?.trigger })
              }, [
                vueExports.createVNode(_sfc_main$g, {
                  name: __props.icon || vueExports.unref(appConfig).ui.icons.chevronDown,
                  class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
                }, null, 8, ["name", "class"]),
                vueExports.createVNode("span", {
                  class: ui.value.triggerLabel({ class: props.ui?.triggerLabel })
                }, vueExports.toDisplayString(open ? props.closeText || vueExports.unref(t)("prose.collapsible.closeText") : props.openText || vueExports.unref(t)("prose.collapsible.openText")) + " " + vueExports.toDisplayString(props.name || vueExports.unref(t)("prose.collapsible.name")), 3)
              ], 2)
            ];
          }
        }),
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Collapsible-BsTq4HMr.mjs.map
