import { v as vueExports } from './server.mjs';
import { u as useAnimatePresence, a as useMotionConfig, b as mountedStates, r as removeDoneCallback, f as frame, d as doneCallbacks } from './index-CNniXDIx.mjs';

function usePopLayout(props) {
  const styles = /* @__PURE__ */ new WeakMap();
  const config = useMotionConfig();
  function addPopStyle(state) {
    if (props.mode !== "popLayout")
      return;
    const element = state.element;
    const parent = element.offsetParent;
    const parentWidth = parent instanceof HTMLElement ? parent.offsetWidth || 0 : 0;
    const size = {
      height: element.offsetHeight || 0,
      width: element.offsetWidth || 0,
      top: element.offsetTop,
      left: element.offsetLeft,
      right: 0
    };
    size.right = parentWidth - size.width - size.left;
    const x = props.anchorX === "left" ? `left: ${size.left}` : `right: ${size.right}`;
    state.element.dataset.motionPopId = state.id;
    const style = (void 0).createElement("style");
    if (config.value.nonce) {
      style.nonce = config.value.nonce;
    }
    styles.set(state, style);
    (void 0).head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
    [data-motion-pop-id="${state.id}"] {
      position: absolute !important;
      width: ${size.width}px !important;
      height: ${size.height}px !important;
      top: ${size.top}px !important;
      ${x}px !important;
      }
      `);
    }
  }
  function removePopStyle(state) {
    const style = styles.get(state);
    if (!style)
      return;
    styles.delete(state);
    frame.render(() => {
      (void 0).head.removeChild(style);
    });
  }
  return {
    addPopStyle,
    removePopStyle,
    styles
  };
}
function delay(fn) {
  return Promise.resolve().then(() => {
    fn();
  });
}
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    name: "AnimatePresence",
    inheritAttrs: true
  },
  __name: "AnimatePresence",
  props: {
    mode: { default: "sync" },
    initial: { type: Boolean, default: true },
    as: {},
    custom: {},
    onExitComplete: {},
    anchorX: { default: "left" }
  },
  setup(__props) {
    const props = __props;
    useAnimatePresence(props);
    const { addPopStyle, removePopStyle, styles } = usePopLayout(props);
    function findMotionElement(el) {
      let current = el;
      while (current) {
        if (mountedStates.get(current)) {
          return current;
        }
        current = current.firstElementChild;
      }
      return null;
    }
    function enter(el) {
      const state = mountedStates.get(el);
      if (!state) {
        return;
      }
      removePopStyle(state);
      state.isVShow = true;
      removeDoneCallback(el);
      delay(() => {
        state.setActive("exit", false);
      });
    }
    const exitDom = /* @__PURE__ */ new Map();
    function exit(el, done) {
      var _a;
      const motionEl = findMotionElement(el);
      const state = mountedStates.get(motionEl);
      if (!motionEl || !state) {
        done();
        if (exitDom.size === 0) {
          (_a = props.onExitComplete) == null ? void 0 : _a.call(props);
        }
        return;
      }
      exitDom.set(motionEl, true);
      removeDoneCallback(motionEl);
      addPopStyle(state);
      function doneCallback(e) {
        var _a2, _b;
        if ((_a2 = e == null ? void 0 : e.detail) == null ? void 0 : _a2.isExit) {
          const projection = state.visualElement.projection;
          if ((projection == null ? void 0 : projection.animationProgress) > 0 && !state.isSafeToRemove && !state.isVShow) {
            return;
          }
          removeDoneCallback(motionEl);
          exitDom.delete(motionEl);
          if (exitDom.size === 0) {
            (_b = props.onExitComplete) == null ? void 0 : _b.call(props);
          }
          if (!styles.has(state)) {
            state.willUpdate("done");
          } else {
            removePopStyle(state);
          }
          done();
          if (!motionEl.isConnected) {
            state.unmount(true);
          }
        }
      }
      delay(() => {
        state.setActive("exit", true);
        doneCallbacks.set(motionEl, doneCallback);
        motionEl.addEventListener("motioncomplete", doneCallback);
      });
    }
    const transitionProps = vueExports.computed(() => {
      if (props.mode !== "wait") {
        return {
          tag: props.as
        };
      }
      return {
        mode: props.mode === "wait" ? "out-in" : void 0
      };
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(_ctx.mode === "wait" ? vueExports.Transition : vueExports.TransitionGroup), vueExports.mergeProps({ css: false }, transitionProps.value, {
        appear: "",
        onEnter: enter,
        onLeave: exit
      }), {
        default: vueExports.withCtx(() => [
          vueExports.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=AnimatePresence.vue-CgpYyaIT.mjs.map
