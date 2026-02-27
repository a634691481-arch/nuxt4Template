import { v as vueExports, i as injectHead, c as createError } from './server.mjs';
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

const islandComponents = {
  "BrandedLogoDVue": vueExports.defineAsyncComponent(() => import(
    './BrandedLogo.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/branded-logo-d-vue-server" */
  ).then((c) => c.default || c)),
  "BrandedLogo": vueExports.defineAsyncComponent(() => import(
    './BrandedLogo-BM2iIbeV.mjs'
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "FrameDVue": vueExports.defineAsyncComponent(() => import(
    './Frame.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/frame-d-vue-server" */
  ).then((c) => c.default || c)),
  "Frame": vueExports.defineAsyncComponent(() => import(
    './Frame-CIobmNXc.mjs'
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "NuxtDVue": vueExports.defineAsyncComponent(() => import(
    './Nuxt.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/nuxt-d-vue-server" */
  ).then((c) => c.default || c)),
  "Nuxt": vueExports.defineAsyncComponent(() => import(
    './Nuxt-ChpglA0R.mjs'
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeoDVue": vueExports.defineAsyncComponent(() => import(
    './NuxtSeo.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/nuxt-seo-d-vue-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": vueExports.defineAsyncComponent(() => import(
    './NuxtSeo-DsptiMgt.mjs'
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "PergelDVue": vueExports.defineAsyncComponent(() => import(
    './Pergel.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/pergel-d-vue-server" */
  ).then((c) => c.default || c)),
  "Pergel": vueExports.defineAsyncComponent(() => import(
    './Pergel-Zb9-ZpcA.mjs'
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlogDVue": vueExports.defineAsyncComponent(() => import(
    './SimpleBlog.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/simple-blog-d-vue-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": vueExports.defineAsyncComponent(() => import(
    './SimpleBlog-Bl1SRtZj.mjs'
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJsDVue": vueExports.defineAsyncComponent(() => import(
    './UnJs.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/un-js-d-vue-server" */
  ).then((c) => c.default || c)),
  "UnJs": vueExports.defineAsyncComponent(() => import(
    './UnJs-CnzRaoCC.mjs'
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "WaveDVue": vueExports.defineAsyncComponent(() => import(
    './Wave.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/wave-d-vue-server" */
  ).then((c) => c.default || c)),
  "Wave": vueExports.defineAsyncComponent(() => import(
    './Wave-YzGMdsCr.mjs'
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmojiDVue": vueExports.defineAsyncComponent(() => import(
    './WithEmoji.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/with-emoji-d-vue-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": vueExports.defineAsyncComponent(() => import(
    './WithEmoji-Bc7TBLGL.mjs'
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = vueExports.defineComponent({
  name: "IslandRenderer",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const head = injectHead();
    head.entries.clear();
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    vueExports.onErrorCaptured((e) => {
      console.log(e);
    });
    return () => vueExports.createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-Ct64988P.mjs.map
