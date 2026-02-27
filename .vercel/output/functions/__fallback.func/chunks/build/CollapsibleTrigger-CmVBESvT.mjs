import { v as vueExports, h as useVModel, j as createContext, k as useForwardExpose, P as Primitive, av as useEventListener, m as Presence_default } from './server.mjs';
import { u as useId } from './useId-De6qfwId.mjs';

const [injectCollapsibleRootContext, provideCollapsibleRootContext] = createContext("CollapsibleRoot");
var CollapsibleRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false
    },
    unmountOnHide: {
      type: Boolean,
      required: false,
      default: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["update:open"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const { disabled, unmountOnHide } = vueExports.toRefs(props);
    provideCollapsibleRootContext({
      contentId: "",
      disabled,
      open,
      unmountOnHide,
      onOpenToggle: () => {
        if (disabled.value) return;
        open.value = !open.value;
      }
    });
    __expose({ open });
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        as: _ctx.as,
        "as-child": props.asChild,
        "data-state": vueExports.unref(open) ? "open" : "closed",
        "data-disabled": vueExports.unref(disabled) ? "" : void 0
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { open: vueExports.unref(open) })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-state",
        "data-disabled"
      ]);
    };
  }
});
var CollapsibleRoot_default = CollapsibleRoot_vue_vue_type_script_setup_true_lang_default;
var CollapsibleContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["contentFound"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectCollapsibleRootContext();
    rootContext.contentId ||= useId(void 0, "reka-collapsible-content");
    const presentRef = vueExports.ref();
    const { forwardRef, currentElement } = useForwardExpose();
    const width = vueExports.ref(0);
    const height = vueExports.ref(0);
    const isOpen = vueExports.computed(() => rootContext.open.value);
    const isMountAnimationPrevented = vueExports.ref(isOpen.value);
    const currentStyle = vueExports.ref();
    vueExports.watch(() => [isOpen.value, presentRef.value?.present], async () => {
      await vueExports.nextTick();
      const node = currentElement.value;
      if (!node) return;
      currentStyle.value = currentStyle.value || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      height.value = rect.height;
      width.value = rect.width;
      if (!isMountAnimationPrevented.value) {
        node.style.transitionDuration = currentStyle.value.transitionDuration;
        node.style.animationName = currentStyle.value.animationName;
      }
    }, { immediate: true });
    const skipAnimation = vueExports.computed(() => isMountAnimationPrevented.value && rootContext.open.value);
    useEventListener(currentElement, "beforematch", (ev) => {
      requestAnimationFrame(() => {
        rootContext.onOpenToggle();
        emits("contentFound");
      });
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), {
        ref_key: "presentRef",
        ref: presentRef,
        present: _ctx.forceMount || vueExports.unref(rootContext).open.value,
        "force-mount": true
      }, {
        default: vueExports.withCtx(({ present }) => [vueExports.createVNode(vueExports.unref(Primitive), vueExports.mergeProps(_ctx.$attrs, {
          id: vueExports.unref(rootContext).contentId,
          ref: vueExports.unref(forwardRef),
          "as-child": props.asChild,
          as: _ctx.as,
          hidden: !present ? vueExports.unref(rootContext).unmountOnHide.value ? "" : "until-found" : void 0,
          "data-state": skipAnimation.value ? void 0 : vueExports.unref(rootContext).open.value ? "open" : "closed",
          "data-disabled": vueExports.unref(rootContext).disabled?.value ? "" : void 0,
          style: {
            [`--reka-collapsible-content-height`]: `${height.value}px`,
            [`--reka-collapsible-content-width`]: `${width.value}px`
          }
        }), {
          default: vueExports.withCtx(() => [(vueExports.unref(rootContext).unmountOnHide.value ? present : true) ? vueExports.renderSlot(_ctx.$slots, "default", { key: 0 }) : vueExports.createCommentVNode("v-if", true)]),
          _: 2
        }, 1040, [
          "id",
          "as-child",
          "as",
          "hidden",
          "data-state",
          "data-disabled",
          "style"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var CollapsibleContent_default = CollapsibleContent_vue_vue_type_script_setup_true_lang_default;
var CollapsibleTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "CollapsibleTrigger",
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
    useForwardExpose();
    const rootContext = injectCollapsibleRootContext();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        type: _ctx.as === "button" ? "button" : void 0,
        as: _ctx.as,
        "as-child": props.asChild,
        "aria-controls": vueExports.unref(rootContext).contentId,
        "aria-expanded": vueExports.unref(rootContext).open.value,
        "data-state": vueExports.unref(rootContext).open.value ? "open" : "closed",
        "data-disabled": vueExports.unref(rootContext).disabled?.value ? "" : void 0,
        disabled: vueExports.unref(rootContext).disabled?.value,
        onClick: vueExports.unref(rootContext).onOpenToggle
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "as",
        "as-child",
        "aria-controls",
        "aria-expanded",
        "data-state",
        "data-disabled",
        "disabled",
        "onClick"
      ]);
    };
  }
});
var CollapsibleTrigger_default = CollapsibleTrigger_vue_vue_type_script_setup_true_lang_default;

export { CollapsibleRoot_default as C, CollapsibleTrigger_default as a, CollapsibleContent_default as b };
//# sourceMappingURL=CollapsibleTrigger-CmVBESvT.mjs.map
