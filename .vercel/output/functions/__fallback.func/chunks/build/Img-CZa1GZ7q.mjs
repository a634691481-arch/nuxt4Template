import { w as useAppConfig, v as vueExports, z as tv, O as useRuntimeConfig, A as serverRenderer_cjs_prodExports, ax as ImageComponent, h as useVModel, j as createContext, k as useForwardExpose, P as Primitive, T as Teleport_default } from './server.mjs';
import { ab as withLeadingSlash, F as withTrailingSlash, T as joinURL } from '../_/nitro.mjs';
import { u as useId } from './useId-De6qfwId.mjs';
import { _ as _sfc_main$1 } from './AnimatePresence.vue-CgpYyaIT.mjs';
import { M as Motion } from './index-CNniXDIx.mjs';
import { c as createReusableTemplate, a as useEventListener } from './index-C-OSoVsH.mjs';
import 'tailwindcss/colors';
import '@yeger/vue-masonry-wall';
import 'v-viewer';
import 'node:stream';
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

const [injectDialogRootContext, provideDialogRootContext] = createContext("DialogRoot");
var DialogRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  inheritAttrs: false,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = vueExports.ref();
    const contentElement = vueExports.ref();
    const { modal } = vueExports.toRefs(props);
    provideDialogRootContext({
      open,
      modal,
      openModal: () => {
        open.value = true;
      },
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement,
      contentElement
    });
    return (_ctx, _cache) => {
      return vueExports.renderSlot(_ctx.$slots, "default", {
        open: vueExports.unref(open),
        close: () => open.value = false
      });
    };
  }
});
var DialogRoot_default = DialogRoot_vue_vue_type_script_setup_true_lang_default;
var DialogPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Teleport_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DialogPortal_default = DialogPortal_vue_vue_type_script_setup_true_lang_default;
var DialogTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectDialogRootContext();
    const { forwardRef } = useForwardExpose();
    rootContext.contentId ||= useId(void 0, "reka-dialog-content");
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        ref: vueExports.unref(forwardRef),
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": vueExports.unref(rootContext).open.value || false,
        "aria-controls": vueExports.unref(rootContext).open.value ? vueExports.unref(rootContext).contentId : void 0,
        "data-state": vueExports.unref(rootContext).open.value ? "open" : "closed",
        onClick: vueExports.unref(rootContext).onOpenToggle
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "onClick"
      ]);
    };
  }
});
var DialogTrigger_default = DialogTrigger_vue_vue_type_script_setup_true_lang_default;
const theme = {
  "slots": {
    "base": "rounded-md w-full",
    "overlay": "fixed inset-0 bg-default/75 backdrop-blur-sm will-change-opacity",
    "content": "fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none",
    "zoomedImage": "w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md"
  },
  "variants": {
    "zoom": {
      "true": "will-change-transform"
    },
    "open": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "zoom": true,
      "open": false,
      "class": "cursor-zoom-in"
    }
  ]
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    class: { type: null, required: false },
    zoom: { type: Boolean, required: false, default: true },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const [DefineImageTemplate, ReuseImageTemplate] = createReusableTemplate();
    const [DefineZoomedImageTemplate, ReuseZoomedImageTemplate] = createReusableTemplate();
    const open = vueExports.ref(false);
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.img || {} })({
      zoom: props.zoom,
      open: open.value
    }));
    const refinedSrc = vueExports.computed(() => {
      if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
        if (_base !== "/" && !props.src.startsWith(_base)) {
          return joinURL(_base, props.src);
        }
      }
      return props.src;
    });
    const layoutId = vueExports.computed(() => `${refinedSrc.value}::${vueExports.useId()}`);
    if (props.zoom) {
      useEventListener(void 0, "scroll", () => {
        open.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineImageTemplate), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(vueExports.unref(ImageComponent)), vueExports.mergeProps({
              src: refinedSrc.value,
              alt: __props.alt,
              width: __props.width,
              height: __props.height
            }, _ctx.$attrs, {
              class: ui.value.base({ class: [props.ui?.base, props.class] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(vueExports.unref(ImageComponent)), vueExports.mergeProps({
                src: refinedSrc.value,
                alt: __props.alt,
                width: __props.width,
                height: __props.height
              }, _ctx.$attrs, {
                class: ui.value.base({ class: [props.ui?.base, props.class] })
              }), null, 16, ["src", "alt", "width", "height", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineZoomedImageTemplate), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(vueExports.unref(ImageComponent)), vueExports.mergeProps({
              src: refinedSrc.value,
              alt: __props.alt
            }, _ctx.$attrs, {
              class: ui.value.zoomedImage({ class: [props.ui?.zoomedImage] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(vueExports.unref(ImageComponent)), vueExports.mergeProps({
                src: refinedSrc.value,
                alt: __props.alt
              }, _ctx.$attrs, {
                class: ui.value.zoomedImage({ class: [props.ui?.zoomedImage] })
              }), null, 16, ["src", "alt", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.zoom) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DialogRoot_default), {
          open: open.value,
          "onUpdate:open": ($event) => open.value = $event,
          modal: false
        }, {
          default: vueExports.withCtx(({ close }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DialogTrigger_default), { "as-child": "" }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseImageTemplate), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(ReuseImageTemplate))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(Motion), {
                        "layout-id": layoutId.value,
                        "as-child": "",
                        transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(ReuseImageTemplate))
                        ]),
                        _: 1
                      }, 8, ["layout-id"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DialogPortal_default), null, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), null, {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (open.value) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Motion), {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              class: ui.value.overlay({ class: [props.ui?.overlay] })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (open.value) {
                            _push4(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.content({ class: [props.ui?.content] }))}"${_scopeId3}>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseZoomedImageTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    vueExports.createVNode(vueExports.unref(ReuseZoomedImageTemplate))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            open.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Motion), {
                              key: 0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              class: ui.value.overlay({ class: [props.ui?.overlay] })
                            }, null, 8, ["class"])) : vueExports.createCommentVNode("", true),
                            open.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 1,
                              class: ui.value.content({ class: [props.ui?.content] }),
                              onClick: close
                            }, [
                              vueExports.createVNode(vueExports.unref(Motion), {
                                "as-child": "",
                                "layout-id": layoutId.value,
                                transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(ReuseZoomedImageTemplate))
                                ]),
                                _: 1
                              }, 8, ["layout-id"])
                            ], 10, ["onClick"])) : vueExports.createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$1), null, {
                        default: vueExports.withCtx(() => [
                          open.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Motion), {
                            key: 0,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            class: ui.value.overlay({ class: [props.ui?.overlay] })
                          }, null, 8, ["class"])) : vueExports.createCommentVNode("", true),
                          open.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: ui.value.content({ class: [props.ui?.content] }),
                            onClick: close
                          }, [
                            vueExports.createVNode(vueExports.unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(ReuseZoomedImageTemplate))
                              ]),
                              _: 1
                            }, 8, ["layout-id"])
                          ], 10, ["onClick"])) : vueExports.createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode(vueExports.unref(DialogTrigger_default), { "as-child": "" }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(ReuseImageTemplate))
                      ]),
                      _: 1
                    }, 8, ["layout-id"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(vueExports.unref(DialogPortal_default), null, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(_sfc_main$1), null, {
                      default: vueExports.withCtx(() => [
                        open.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Motion), {
                          key: 0,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          class: ui.value.overlay({ class: [props.ui?.overlay] })
                        }, null, 8, ["class"])) : vueExports.createCommentVNode("", true),
                        open.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 1,
                          class: ui.value.content({ class: [props.ui?.content] }),
                          onClick: close
                        }, [
                          vueExports.createVNode(vueExports.unref(Motion), {
                            "as-child": "",
                            "layout-id": layoutId.value,
                            transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(ReuseZoomedImageTemplate))
                            ]),
                            _: 1
                          }, 8, ["layout-id"])
                        ], 10, ["onClick"])) : vueExports.createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseImageTemplate), null, null, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Img-CZa1GZ7q.mjs.map
