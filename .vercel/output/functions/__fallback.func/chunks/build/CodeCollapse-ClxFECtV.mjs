import { v as vueExports, B as useLocale, w as useAppConfig, z as tv, A as serverRenderer_cjs_prodExports, K as _sfc_main$b } from './server.mjs';
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
    "root": "relative [&_pre]:h-[200px]",
    "footer": "h-16 absolute inset-x-px bottom-px rounded-b-md flex items-center justify-center",
    "trigger": "group",
    "triggerIcon": "group-data-[state=open]:rotate-180"
  },
  "variants": {
    "open": {
      "true": {
        "root": "[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12"
      },
      "false": {
        "root": "[&_pre]:overflow-hidden",
        "footer": "bg-gradient-to-t from-muted"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProseCodeCollapse",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    icon: { type: null, required: false },
    name: { type: String, required: false },
    openText: { type: String, required: false },
    closeText: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const open = vueExports.useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.codeCollapse || {} })({
      open: open.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs))}>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$b, {
        icon: __props.icon || vueExports.unref(appConfig).ui.icons.chevronDown,
        color: "neutral",
        variant: "outline",
        "data-state": open.value ? "open" : "closed",
        label: `${open.value ? props.closeText || vueExports.unref(t)("prose.codeCollapse.closeText") : props.openText || vueExports.unref(t)("prose.codeCollapse.openText")} ${props.name || vueExports.unref(t)("prose.codeCollapse.name")}`,
        class: ui.value.trigger({ class: props.ui?.trigger }),
        ui: { leadingIcon: ui.value.triggerIcon({ class: props.ui?.triggerIcon }) },
        onClick: ($event) => open.value = !open.value
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeCollapse-ClxFECtV.mjs.map
