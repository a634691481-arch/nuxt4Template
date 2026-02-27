import { A as serverRenderer_cjs_prodExports, v as vueExports } from './server.mjs';
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

const _sfc_main = {
  __name: "WithEmoji",
  __ssrInlineRender: true,
  props: {
    emoji: { type: String, required: false, default: "👋" },
    title: { type: String, required: false, default: "title" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "h-full w-full flex items-start justify-start bg-sky-50" }, _attrs))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-center items-center px-20 w-full h-full text-center"><p class="text-[120px] mx-auto text-center font-bold mb-0">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.emoji)}</p><h1 class="text-[60px] font-bold" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "display": "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h1></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_a763cc5bc9d4b73d6b88affead04df2d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=WithEmoji-Bc7TBLGL.mjs.map
