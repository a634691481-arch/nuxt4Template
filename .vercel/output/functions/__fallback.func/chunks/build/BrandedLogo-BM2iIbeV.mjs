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
  __name: "BrandedLogo",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false, default: "title" },
    logo: { type: String, required: false, default: "https://nuxt.com/assets/design-kit/logo-white.png" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        style: { backgroundImage: "linear-gradient(to right, #24243e, #302b63, #0f0c29)" },
        class: "h-full w-full flex items-start justify-start"
      }, _attrs))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-between w-full h-full p-20"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", __props.logo)} height="50"><h1 class="text-[60px] text-white font-bold text-left" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "display": "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h1></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_a763cc5bc9d4b73d6b88affead04df2d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=BrandedLogo-BM2iIbeV.mjs.map
