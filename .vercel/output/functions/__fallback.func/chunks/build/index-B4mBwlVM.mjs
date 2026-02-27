import { M as _export_sfc, N as useToast, v as vueExports, O as useRuntimeConfig, A as serverRenderer_cjs_prodExports, f as fetchDefaults, u as useAsyncData, a as useRequestFetch, r as requireShared_cjs_prod, E as _sfc_main$e, K as _sfc_main$b, w as useAppConfig, p as useForwardPropsEmits, x as reactivePick, y as usePortal, z as tv, L as navigateTo, G as omit, k as useForwardExpose, s as injectTooltipProviderContext, h as useVModel, t as useTimeoutFn$1, j as createContext, P as Primitive, T as Teleport_default, m as Presence_default, B as useLocale, C as reactiveOmit, D as isArrayOfArray, _ as _sfc_main$g, F as get, H as _sfc_main$c, I as pickLinkProps, J as _sfc_main$d, V as VisuallyHidden_default, o as useForwardProps, e as createSharedComposable$1, q as useEmitAsProps, b as refAutoReset, d as createEventHook, n as reactiveOmit$1, l as useCollection, g as getActiveElement } from './server.mjs';
import { J as hash, Q as defu } from '../_/nitro.mjs';
import { P as PopperRoot_default, a as PopperAnchor_default, b as PopperArrow_default, D as DismissableLayer_default, c as PopperContent_default, u as useBodyScrollLock, F as FocusScope_default, d as PopperContentPropsDefaultValue, e as useHideOthers } from './PopperArrow-B4sRZrM8.mjs';
import { u as useId } from './useId-De6qfwId.mjs';
import { _ as _sfc_main$5 } from './Kbd-DeW9Lvfj.mjs';
import { u as useDirection } from './useDirection-B67GYiMj.mjs';
import { u as useArrowNavigation } from './useArrowNavigation-m9a1sGcE.mjs';
import { u as useTypeahead } from './useTypeahead-BUAVJZ5Q.mjs';
import { R as RovingFocusGroup_default } from './RovingFocusGroup-sYa4dkVe.mjs';
import { c as createReusableTemplate } from './index-C-OSoVsH.mjs';
import { m as motion } from './index-CNniXDIx.mjs';
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
import './utils-CEewrpIs.mjs';

var shared_cjs_prodExports = /* @__PURE__ */ requireShared_cjs_prod();
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = vueExports.computed(() => vueExports.toValue(request));
  const key = vueExports.computed(() => vueExports.toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = vueExports.reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!vueExports.toValue(opts.baseURL) || vueExports.toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    vueExports.toValue(opts.method)?.toUpperCase() || "GET",
    vueExports.toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = vueExports.toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[vueExports.toValue(key)] = vueExports.toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = vueExports.toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (shared_cjs_prodExports.isPlainObject(value)) {
      segments.push(hash(vueExports.reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
function useFocusGuards() {
  vueExports.watchEffect((cleanupFn) => {
    return;
  });
}
function useGraceArea(triggerElement, containerElement) {
  const isPointerInTransit = refAutoReset(false, 300);
  const pointerGraceArea = vueExports.ref(null);
  const pointerExit = createEventHook();
  function handleRemoveGraceArea() {
    pointerGraceArea.value = null;
    isPointerInTransit.value = false;
  }
  function handleCreateGraceArea(event, hoverTarget) {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    pointerGraceArea.value = graceArea;
    isPointerInTransit.value = true;
  }
  vueExports.watchEffect((cleanupFn) => {
    if (triggerElement.value && containerElement.value) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, containerElement.value);
      const handleContentLeave = (event) => handleCreateGraceArea(event, triggerElement.value);
      triggerElement.value.addEventListener("pointerleave", handleTriggerLeave);
      containerElement.value.addEventListener("pointerleave", handleContentLeave);
      cleanupFn(() => {
        triggerElement.value?.removeEventListener("pointerleave", handleTriggerLeave);
        containerElement.value?.removeEventListener("pointerleave", handleContentLeave);
      });
    }
  });
  vueExports.watchEffect((cleanupFn) => {
    if (pointerGraceArea.value) {
      const handleTrackPointerGrace = (event) => {
        if (!pointerGraceArea.value || !(event.target instanceof Element)) return;
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = triggerElement.value?.contains(target) || containerElement.value?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon$1(pointerPosition, pointerGraceArea.value);
        const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
        if (hasEnteredTarget) handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
          handleRemoveGraceArea();
          pointerExit.trigger();
        }
      };
      triggerElement.value?.ownerDocument.addEventListener("pointermove", handleTrackPointerGrace);
      cleanupFn(() => triggerElement.value?.ownerDocument.removeEventListener("pointermove", handleTrackPointerGrace));
    }
  });
  return {
    isPointerInTransit,
    onPointerExit: pointerExit.on
  };
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function isPointInPolygon$1(point, polygon) {
  const { x: x2, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x2 < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
const ITEM_SELECT = "menu.itemSelect";
const SELECTION_KEYS = ["Enter", " "];
const FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
const LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
const SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function isPointInPolygon(point, polygon) {
  const { x: x2, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x2 < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return isPointInPolygon(cursorPos, area);
}
function isMouseEvent(event) {
  return event.pointerType === "mouse";
}
var MenuAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
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
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperAnchor_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuAnchor_default = MenuAnchor_vue_vue_type_script_setup_true_lang_default;
var MenuArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuArrow",
  props: {
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    rounded: {
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
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperArrow_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuArrow_default = MenuArrow_vue_vue_type_script_setup_true_lang_default;
function useIsUsingKeyboardImpl() {
  const isUsingKeyboard = vueExports.ref(false);
  return isUsingKeyboard;
}
const useIsUsingKeyboard = createSharedComposable$1(useIsUsingKeyboardImpl);
const [injectMenuContext, provideMenuContext] = createContext(["MenuRoot", "MenuSub"], "MenuContext");
const [injectMenuRootContext, provideMenuRootContext] = createContext("MenuRoot");
var MenuRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    dir: {
      type: String,
      required: false
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
    const emits = __emit;
    const { modal, dir: propDir } = vueExports.toRefs(props);
    const dir = useDirection(propDir);
    const open = useVModel(props, "open", emits);
    const content = vueExports.ref();
    const isUsingKeyboardRef = useIsUsingKeyboard();
    provideMenuContext({
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      content,
      onContentChange: (element) => {
        content.value = element;
      }
    });
    provideMenuRootContext({
      onClose: () => {
        open.value = false;
      },
      isUsingKeyboardRef,
      dir,
      modal
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperRoot_default), null, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
var MenuRoot_default = MenuRoot_vue_vue_type_script_setup_true_lang_default;
const [injectMenuContentContext, provideMenuContentContext] = createContext("MenuContent");
var MenuContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ vueExports.mergeDefaults({
    loop: {
      type: Boolean,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    },
    disableOutsideScroll: {
      type: Boolean,
      required: false
    },
    trapFocus: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  }, { ...PopperContentPropsDefaultValue }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    const { trapFocus, disableOutsidePointerEvents, loop } = vueExports.toRefs(props);
    useFocusGuards();
    useBodyScrollLock(disableOutsidePointerEvents.value);
    const searchRef = vueExports.ref("");
    const timerRef = vueExports.ref(0);
    const pointerGraceTimerRef = vueExports.ref(0);
    const pointerGraceIntentRef = vueExports.ref(null);
    const pointerDirRef = vueExports.ref("right");
    const lastPointerXRef = vueExports.ref(0);
    const currentItemId = vueExports.ref(null);
    const rovingFocusGroupRef = vueExports.ref();
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const { handleTypeaheadSearch } = useTypeahead();
    vueExports.watch(contentElement, (el) => {
      menuContext.onContentChange(el);
    });
    function isPointerMovingToSubmenu(event) {
      const isMovingTowards = pointerDirRef.value === pointerGraceIntentRef.value?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.value?.area);
    }
    async function handleMountAutoFocus(event) {
      emits("openAutoFocus", event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      contentElement.value?.focus({ preventScroll: true });
    }
    function handleKeyDown(event) {
      if (event.defaultPrevented) return;
      const target = event.target;
      const isKeyDownInside = target.closest("[data-reka-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      const el = useArrowNavigation(event, getActiveElement(), contentElement.value, {
        loop: loop.value,
        arrowKeyOptions: "vertical",
        dir: rootContext?.dir.value,
        focus: true,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (el) return el?.focus();
      if (event.code === "Space") return;
      const collectionItems = rovingFocusGroupRef.value?.getItems() ?? [];
      if (isKeyDownInside) {
        if (event.key === "Tab") event.preventDefault();
        if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key, collectionItems);
      }
      if (event.target !== contentElement.value) return;
      if (!FIRST_LAST_KEYS.includes(event.key)) return;
      event.preventDefault();
      const candidateNodes = [...collectionItems.map((item) => item.ref)];
      if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
      focusFirst(candidateNodes);
    }
    function handleBlur(event) {
      if (!event?.currentTarget?.contains?.(event.target)) {
        (void 0).clearTimeout(timerRef.value);
        searchRef.value = "";
      }
    }
    function handlePointerMove(event) {
      if (!isMouseEvent(event)) return;
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.value !== event.clientX;
      if (event?.currentTarget?.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.value ? "right" : "left";
        pointerDirRef.value = newDir;
        lastPointerXRef.value = event.clientX;
      }
    }
    provideMenuContentContext({
      onItemEnter: (event) => {
        if (isPointerMovingToSubmenu(event)) return true;
        else return false;
      },
      onItemLeave: (event) => {
        if (isPointerMovingToSubmenu(event)) return;
        contentElement.value?.focus();
        currentItemId.value = null;
      },
      onTriggerLeave: (event) => {
        if (isPointerMovingToSubmenu(event)) return true;
        else return false;
      },
      searchRef,
      pointerGraceTimerRef,
      onPointerGraceIntentChange: (intent) => {
        pointerGraceIntentRef.value = intent;
      }
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(FocusScope_default), {
        "as-child": "",
        trapped: vueExports.unref(trapFocus),
        onMountAutoFocus: handleMountAutoFocus,
        onUnmountAutoFocus: _cache[7] || (_cache[7] = ($event) => emits("closeAutoFocus", $event))
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(DismissableLayer_default), {
          "as-child": "",
          "disable-outside-pointer-events": vueExports.unref(disableOutsidePointerEvents),
          onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
          onPointerDownOutside: _cache[3] || (_cache[3] = ($event) => emits("pointerDownOutside", $event)),
          onFocusOutside: _cache[4] || (_cache[4] = ($event) => emits("focusOutside", $event)),
          onInteractOutside: _cache[5] || (_cache[5] = ($event) => emits("interactOutside", $event)),
          onDismiss: _cache[6] || (_cache[6] = ($event) => emits("dismiss"))
        }, {
          default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(RovingFocusGroup_default), {
            ref_key: "rovingFocusGroupRef",
            ref: rovingFocusGroupRef,
            "current-tab-stop-id": currentItemId.value,
            "onUpdate:currentTabStopId": _cache[0] || (_cache[0] = ($event) => currentItemId.value = $event),
            "as-child": "",
            orientation: "vertical",
            dir: vueExports.unref(rootContext).dir.value,
            loop: vueExports.unref(loop),
            onEntryFocus: _cache[1] || (_cache[1] = (event) => {
              emits("entryFocus", event);
              if (!vueExports.unref(rootContext).isUsingKeyboardRef.value) event.preventDefault();
            })
          }, {
            default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(PopperContent_default), {
              ref: vueExports.unref(forwardRef),
              role: "menu",
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "aria-orientation": "vertical",
              "data-reka-menu-content": "",
              "data-state": vueExports.unref(getOpenState)(vueExports.unref(menuContext).open.value),
              dir: vueExports.unref(rootContext).dir.value,
              side: _ctx.side,
              "side-offset": _ctx.sideOffset,
              align: _ctx.align,
              "align-offset": _ctx.alignOffset,
              "avoid-collisions": _ctx.avoidCollisions,
              "collision-boundary": _ctx.collisionBoundary,
              "collision-padding": _ctx.collisionPadding,
              "arrow-padding": _ctx.arrowPadding,
              "prioritize-position": _ctx.prioritizePosition,
              "position-strategy": _ctx.positionStrategy,
              "update-position-strategy": _ctx.updatePositionStrategy,
              sticky: _ctx.sticky,
              "hide-when-detached": _ctx.hideWhenDetached,
              reference: _ctx.reference,
              onKeydown: handleKeyDown,
              onBlur: handleBlur,
              onPointermove: handlePointerMove
            }, {
              default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
              _: 3
            }, 8, [
              "as",
              "as-child",
              "data-state",
              "dir",
              "side",
              "side-offset",
              "align",
              "align-offset",
              "avoid-collisions",
              "collision-boundary",
              "collision-padding",
              "arrow-padding",
              "prioritize-position",
              "position-strategy",
              "update-position-strategy",
              "sticky",
              "hide-when-detached",
              "reference"
            ])]),
            _: 3
          }, 8, [
            "current-tab-stop-id",
            "dir",
            "loop"
          ])]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      }, 8, ["trapped"]);
    };
  }
});
var MenuContentImpl_default = MenuContentImpl_vue_vue_type_script_setup_true_lang_default;
var MenuItemImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  inheritAttrs: false,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  setup(__props) {
    const props = __props;
    const contentContext = injectMenuContentContext();
    const { forwardRef } = useForwardExpose();
    const { CollectionItem } = useCollection();
    const isFocused = vueExports.ref(false);
    async function handlePointerMove(event) {
      if (event.defaultPrevented) return;
      if (!isMouseEvent(event)) return;
      if (props.disabled) contentContext.onItemLeave(event);
      else {
        const defaultPrevented = contentContext.onItemEnter(event);
        if (!defaultPrevented) {
          const item = event.currentTarget;
          item?.focus({ preventScroll: true });
        }
      }
    }
    async function handlePointerLeave(event) {
      await vueExports.nextTick();
      if (event.defaultPrevented) return;
      if (!isMouseEvent(event)) return;
      contentContext.onItemLeave(event);
    }
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(CollectionItem), { value: { textValue: _ctx.textValue } }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), vueExports.mergeProps({
          ref: vueExports.unref(forwardRef),
          role: "menuitem",
          tabindex: "-1"
        }, _ctx.$attrs, {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-disabled": _ctx.disabled || void 0,
          "data-disabled": _ctx.disabled ? "" : void 0,
          "data-highlighted": isFocused.value ? "" : void 0,
          onPointermove: handlePointerMove,
          onPointerleave: handlePointerLeave,
          onFocus: _cache[0] || (_cache[0] = async (event) => {
            await vueExports.nextTick();
            if (event.defaultPrevented || _ctx.disabled) return;
            isFocused.value = true;
          }),
          onBlur: _cache[1] || (_cache[1] = async (event) => {
            await vueExports.nextTick();
            if (event.defaultPrevented) return;
            isFocused.value = false;
          })
        }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "as",
          "as-child",
          "aria-disabled",
          "data-disabled",
          "data-highlighted"
        ])]),
        _: 3
      }, 8, ["value"]);
    };
  }
});
var MenuItemImpl_default = MenuItemImpl_vue_vue_type_script_setup_true_lang_default;
var MenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectMenuRootContext();
    const contentContext = injectMenuContentContext();
    const isPointerDownRef = vueExports.ref(false);
    async function handleSelect() {
      const menuItem = currentElement.value;
      if (!props.disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
          bubbles: true,
          cancelable: true
        });
        emits("select", itemSelectEvent);
        await vueExports.nextTick();
        if (itemSelectEvent.defaultPrevented) isPointerDownRef.value = false;
        else rootContext.onClose();
      }
    }
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(MenuItemImpl_default, vueExports.mergeProps(props, {
        ref: vueExports.unref(forwardRef),
        onClick: handleSelect,
        onPointerdown: _cache[0] || (_cache[0] = () => {
          isPointerDownRef.value = true;
        }),
        onPointerup: _cache[1] || (_cache[1] = async (event) => {
          await vueExports.nextTick();
          if (event.defaultPrevented) return;
          if (!isPointerDownRef.value) event.currentTarget?.click();
        }),
        onKeydown: _cache[2] || (_cache[2] = async (event) => {
          const isTypingAhead = vueExports.unref(contentContext).searchRef.value !== "";
          if (_ctx.disabled || isTypingAhead && event.key === " ") return;
          if (vueExports.unref(SELECTION_KEYS).includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuItem_default = MenuItem_vue_vue_type_script_setup_true_lang_default;
const [injectMenuItemIndicatorContext, provideMenuItemIndicatorContext] = createContext(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext");
var MenuItemIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuItemIndicator",
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
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const indicatorContext = injectMenuItemIndicatorContext({ modelValue: vueExports.ref(false) });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), { present: _ctx.forceMount || vueExports.unref(isIndeterminate)(vueExports.unref(indicatorContext).modelValue.value) || vueExports.unref(indicatorContext).modelValue.value === true }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "data-state": vueExports.unref(getCheckedState)(vueExports.unref(indicatorContext).modelValue.value)
        }, {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "data-state"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var MenuItemIndicator_default = MenuItemIndicator_vue_vue_type_script_setup_true_lang_default;
var MenuCheckboxItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuCheckboxItem",
  props: {
    modelValue: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit$1(props, ["modelValue"]);
    const forwarded = useForwardProps(delegatedProps);
    const modelValue = useVModel(props, "modelValue", emits);
    provideMenuItemIndicatorContext({ modelValue });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(MenuItem_default, vueExports.mergeProps({ role: "menuitemcheckbox" }, vueExports.unref(forwarded), {
        "aria-checked": vueExports.unref(isIndeterminate)(vueExports.unref(modelValue)) ? "mixed" : vueExports.unref(modelValue),
        "data-state": vueExports.unref(getCheckedState)(vueExports.unref(modelValue)),
        onSelect: _cache[0] || (_cache[0] = async (event) => {
          emits("select", event);
          if (vueExports.unref(isIndeterminate)(vueExports.unref(modelValue))) modelValue.value = true;
          else modelValue.value = !vueExports.unref(modelValue);
        })
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { modelValue: vueExports.unref(modelValue) })]),
        _: 3
      }, 16, ["aria-checked", "data-state"]);
    };
  }
});
var MenuCheckboxItem_default = MenuCheckboxItem_vue_vue_type_script_setup_true_lang_default;
var MenuRootContentModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    const { forwardRef, currentElement } = useForwardExpose();
    useHideOthers(currentElement);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(MenuContentImpl_default, vueExports.mergeProps(vueExports.unref(forwarded), {
        ref: vueExports.unref(forwardRef),
        "trap-focus": vueExports.unref(menuContext).open.value,
        "disable-outside-pointer-events": vueExports.unref(menuContext).open.value,
        "disable-outside-scroll": true,
        onDismiss: _cache[0] || (_cache[0] = ($event) => vueExports.unref(menuContext).onOpenChange(false)),
        onFocusOutside: _cache[1] || (_cache[1] = vueExports.withModifiers(($event) => emits("focusOutside", $event), ["prevent"]))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["trap-focus", "disable-outside-pointer-events"]);
    };
  }
});
var MenuRootContentModal_default = MenuRootContentModal_vue_vue_type_script_setup_true_lang_default;
var MenuRootContentNonModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(MenuContentImpl_default, vueExports.mergeProps(vueExports.unref(forwarded), {
        "trap-focus": false,
        "disable-outside-pointer-events": false,
        "disable-outside-scroll": false,
        onDismiss: _cache[0] || (_cache[0] = ($event) => vueExports.unref(menuContext).onOpenChange(false))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuRootContentNonModal_default = MenuRootContentNonModal_vue_vue_type_script_setup_true_lang_default;
var MenuContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), { present: _ctx.forceMount || vueExports.unref(menuContext).open.value }, {
        default: vueExports.withCtx(() => [vueExports.unref(rootContext).modal.value ? (vueExports.openBlock(), vueExports.createBlock(MenuRootContentModal_default, vueExports.normalizeProps(vueExports.mergeProps({ key: 0 }, {
          ..._ctx.$attrs,
          ...vueExports.unref(forwarded)
        })), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)) : (vueExports.openBlock(), vueExports.createBlock(MenuRootContentNonModal_default, vueExports.normalizeProps(vueExports.mergeProps({ key: 1 }, {
          ..._ctx.$attrs,
          ...vueExports.unref(forwarded)
        })), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16))]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var MenuContent_default = MenuContent_vue_vue_type_script_setup_true_lang_default;
var MenuGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps({ role: "group" }, props), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuGroup_default = MenuGroup_vue_vue_type_script_setup_true_lang_default;
var MenuLabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuLabel_default = MenuLabel_vue_vue_type_script_setup_true_lang_default;
var MenuPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuPortal",
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
var MenuPortal_default = MenuPortal_vue_vue_type_script_setup_true_lang_default;
const [injectMenuRadioGroupContext, provideMenuRadioGroupContext] = createContext("MenuRadioGroup");
var MenuRadioGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: ""
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
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit$1(props, ["modelValue"]);
    const forwarded = useForwardProps(delegatedProps);
    const modelValue = useVModel(props, "modelValue", emits);
    provideMenuRadioGroupContext({
      modelValue,
      onValueChange: (payload) => {
        modelValue.value = payload;
      }
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(MenuGroup_default, vueExports.normalizeProps(vueExports.guardReactiveProps(vueExports.unref(forwarded))), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { modelValue: vueExports.unref(modelValue) })]),
        _: 3
      }, 16);
    };
  }
});
var MenuRadioGroup_default = MenuRadioGroup_vue_vue_type_script_setup_true_lang_default;
var MenuRadioItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit$1(props, ["value"]);
    const forwarded = useForwardProps(delegatedProps);
    const { value } = vueExports.toRefs(props);
    const radioGroupContext = injectMenuRadioGroupContext();
    const modelValue = vueExports.computed(() => radioGroupContext.modelValue.value === value?.value);
    provideMenuItemIndicatorContext({ modelValue });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(MenuItem_default, vueExports.mergeProps({ role: "menuitemradio" }, vueExports.unref(forwarded), {
        "aria-checked": modelValue.value,
        "data-state": vueExports.unref(getCheckedState)(modelValue.value),
        onSelect: _cache[0] || (_cache[0] = async (event) => {
          emits("select", event);
          vueExports.unref(radioGroupContext).onValueChange(vueExports.unref(value));
        })
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["aria-checked", "data-state"]);
    };
  }
});
var MenuRadioItem_default = MenuRadioItem_vue_vue_type_script_setup_true_lang_default;
var MenuSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        role: "separator",
        "aria-orientation": "horizontal"
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuSeparator_default = MenuSeparator_vue_vue_type_script_setup_true_lang_default;
const [injectMenuSubContext, provideMenuSubContext] = createContext("MenuSub");
var MenuSub_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuSub",
  props: { open: {
    type: Boolean,
    required: false,
    default: void 0
  } },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const open = useVModel(props, "open", emits, {
      defaultValue: false,
      passive: props.open === void 0
    });
    const parentMenuContext = injectMenuContext();
    const trigger = vueExports.ref();
    const content = vueExports.ref();
    vueExports.watchEffect((cleanupFn) => {
      if (parentMenuContext?.open.value === false) open.value = false;
      cleanupFn(() => open.value = false);
    });
    provideMenuContext({
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      content,
      onContentChange: (element) => {
        content.value = element;
      }
    });
    provideMenuSubContext({
      triggerId: "",
      contentId: "",
      trigger,
      onTriggerChange: (element) => {
        trigger.value = element;
      }
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperRoot_default), null, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
var MenuSub_default = MenuSub_vue_vue_type_script_setup_true_lang_default;
var MenuSubContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuSubContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false,
      default: true
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    const menuSubContext = injectMenuSubContext();
    const { forwardRef, currentElement: subContentElement } = useForwardExpose();
    menuSubContext.contentId ||= useId(void 0, "reka-menu-sub-content");
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), { present: _ctx.forceMount || vueExports.unref(menuContext).open.value }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(MenuContentImpl_default, vueExports.mergeProps(vueExports.unref(forwarded), {
          id: vueExports.unref(menuSubContext).contentId,
          ref: vueExports.unref(forwardRef),
          "aria-labelledby": vueExports.unref(menuSubContext).triggerId,
          align: "start",
          side: vueExports.unref(rootContext).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: _cache[0] || (_cache[0] = vueExports.withModifiers((event) => {
            if (vueExports.unref(rootContext).isUsingKeyboardRef.value) vueExports.unref(subContentElement)?.focus();
          }, ["prevent"])),
          onCloseAutoFocus: _cache[1] || (_cache[1] = vueExports.withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: _cache[2] || (_cache[2] = (event) => {
            if (event.defaultPrevented) return;
            if (event.target !== vueExports.unref(menuSubContext).trigger.value) vueExports.unref(menuContext).onOpenChange(false);
          }),
          onEscapeKeyDown: _cache[3] || (_cache[3] = (event) => {
            vueExports.unref(rootContext).onClose();
            event.preventDefault();
          }),
          onKeydown: _cache[4] || (_cache[4] = (event) => {
            const isKeyDownInside = event.currentTarget?.contains(event.target);
            const isCloseKey = vueExports.unref(SUB_CLOSE_KEYS)[vueExports.unref(rootContext).dir.value].includes(event.key);
            if (isKeyDownInside && isCloseKey) {
              vueExports.unref(menuContext).onOpenChange(false);
              vueExports.unref(menuSubContext).trigger.value?.focus();
              event.preventDefault();
            }
          })
        }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "aria-labelledby",
          "side"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var MenuSubContent_default = MenuSubContent_vue_vue_type_script_setup_true_lang_default;
var MenuSubTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  setup(__props) {
    const props = __props;
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    const subContext = injectMenuSubContext();
    const contentContext = injectMenuContentContext();
    const openTimerRef = vueExports.ref(null);
    subContext.triggerId ||= useId(void 0, "reka-menu-sub-trigger");
    function clearOpenTimer() {
      if (openTimerRef.value) (void 0).clearTimeout(openTimerRef.value);
      openTimerRef.value = null;
    }
    function handlePointerMove(event) {
      if (!isMouseEvent(event)) return;
      const defaultPrevented = contentContext.onItemEnter(event);
      if (defaultPrevented) return;
      if (!props.disabled && !menuContext.open.value && !openTimerRef.value) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.value = (void 0).setTimeout(() => {
          menuContext.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    }
    async function handlePointerLeave(event) {
      if (!isMouseEvent(event)) return;
      clearOpenTimer();
      const contentRect = menuContext.content.value?.getBoundingClientRect();
      if (contentRect?.width) {
        const side = menuContext.content.value?.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        (void 0).clearTimeout(contentContext.pointerGraceTimerRef.value);
        contentContext.pointerGraceTimerRef.value = (void 0).setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
      } else {
        const defaultPrevented = contentContext.onTriggerLeave(event);
        if (defaultPrevented) return;
        contentContext.onPointerGraceIntentChange(null);
      }
    }
    async function handleKeyDown(event) {
      const isTypingAhead = contentContext.searchRef.value !== "";
      if (props.disabled || isTypingAhead && event.key === " ") return;
      if (SUB_OPEN_KEYS[rootContext.dir.value].includes(event.key)) {
        menuContext.onOpenChange(true);
        await vueExports.nextTick();
        menuContext.content.value?.focus();
        event.preventDefault();
      }
    }
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(MenuAnchor_default, { "as-child": "" }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(MenuItemImpl_default, vueExports.mergeProps(props, {
          id: vueExports.unref(subContext).triggerId,
          ref: (vnode) => {
            vueExports.unref(subContext)?.onTriggerChange(vnode?.$el);
            return void 0;
          },
          "aria-haspopup": "menu",
          "aria-expanded": vueExports.unref(menuContext).open.value,
          "aria-controls": vueExports.unref(subContext).contentId,
          "data-state": vueExports.unref(getOpenState)(vueExports.unref(menuContext).open.value),
          onClick: _cache[0] || (_cache[0] = async (event) => {
            if (props.disabled || event.defaultPrevented) return;
            event.currentTarget.focus();
            if (!vueExports.unref(menuContext).open.value) vueExports.unref(menuContext).onOpenChange(true);
          }),
          onPointermove: handlePointerMove,
          onPointerleave: handlePointerLeave,
          onKeydown: handleKeyDown
        }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "aria-expanded",
          "aria-controls",
          "data-state"
        ])]),
        _: 3
      });
    };
  }
});
var MenuSubTrigger_default = MenuSubTrigger_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuArrow_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuArrow_default = DropdownMenuArrow_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuCheckboxItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    modelValue: {
      type: [Boolean, String],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const emitsAsProps = useEmitAsProps(emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuCheckboxItem_default), vueExports.normalizeProps(vueExports.guardReactiveProps({
        ...props,
        ...vueExports.unref(emitsAsProps)
      })), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuCheckboxItem_default = DropdownMenuCheckboxItem_vue_vue_type_script_setup_true_lang_default;
const [injectDropdownMenuRootContext, provideDropdownMenuRootContext] = createContext("DropdownMenuRoot");
var DropdownMenuRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
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
    useForwardExpose();
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = vueExports.ref();
    const { modal, dir: propDir } = vueExports.toRefs(props);
    const dir = useDirection(propDir);
    provideDropdownMenuRootContext({
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      triggerId: "",
      triggerElement,
      contentId: "",
      modal,
      dir
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuRoot_default), {
        open: vueExports.unref(open),
        "onUpdate:open": _cache[0] || (_cache[0] = ($event) => vueExports.isRef(open) ? open.value = $event : null),
        dir: vueExports.unref(dir),
        modal: vueExports.unref(modal)
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { open: vueExports.unref(open) })]),
        _: 3
      }, 8, [
        "open",
        "dir",
        "modal"
      ]);
    };
  }
});
var DropdownMenuRoot_default = DropdownMenuRoot_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    useForwardExpose();
    const rootContext = injectDropdownMenuRootContext();
    const hasInteractedOutsideRef = vueExports.ref(false);
    function handleCloseAutoFocus(event) {
      if (event.defaultPrevented) return;
      if (!hasInteractedOutsideRef.value) setTimeout(() => {
        rootContext.triggerElement.value?.focus();
      }, 0);
      hasInteractedOutsideRef.value = false;
      event.preventDefault();
    }
    rootContext.contentId ||= useId(void 0, "reka-dropdown-menu-content");
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuContent_default), vueExports.mergeProps(vueExports.unref(forwarded), {
        id: vueExports.unref(rootContext).contentId,
        "aria-labelledby": vueExports.unref(rootContext)?.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: handleCloseAutoFocus,
        onInteractOutside: _cache[0] || (_cache[0] = (event) => {
          if (event.defaultPrevented) return;
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!vueExports.unref(rootContext).modal.value || isRightClick) hasInteractedOutsideRef.value = true;
          if (vueExports.unref(rootContext).triggerElement.value?.contains(event.target)) event.preventDefault();
        })
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
});
var DropdownMenuContent_default = DropdownMenuContent_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuGroup_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuGroup_default = DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const emitsAsProps = useEmitAsProps(emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuItem_default), vueExports.normalizeProps(vueExports.guardReactiveProps({
        ...props,
        ...vueExports.unref(emitsAsProps)
      })), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuItem_default = DropdownMenuItem_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuItemIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuItemIndicator",
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
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuItemIndicator_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuItemIndicator_default = DropdownMenuItemIndicator_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuLabel_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuLabel_default = DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuPortal",
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
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuPortal_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuPortal_default = DropdownMenuPortal_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuRadioGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {
      type: String,
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
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const emitsAsProps = useEmitAsProps(emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuRadioGroup_default), vueExports.normalizeProps(vueExports.guardReactiveProps({
        ...props,
        ...vueExports.unref(emitsAsProps)
      })), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuRadioGroup_default = DropdownMenuRadioGroup_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuRadioItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuRadioItem_default), vueExports.normalizeProps(vueExports.guardReactiveProps(vueExports.unref(forwarded))), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuRadioItem_default = DropdownMenuRadioItem_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuSeparator_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuSeparator_default = DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSub_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = useVModel(props, "open", emit, {
      passive: props.open === void 0,
      defaultValue: props.defaultOpen ?? false
    });
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuSub_default), {
        open: vueExports.unref(open),
        "onUpdate:open": _cache[0] || (_cache[0] = ($event) => vueExports.isRef(open) ? open.value = $event : null)
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { open: vueExports.unref(open) })]),
        _: 3
      }, 8, ["open"]);
    };
  }
});
var DropdownMenuSub_default = DropdownMenuSub_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSubContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuSubContent_default), vueExports.mergeProps(vueExports.unref(forwarded), { style: {
        "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
      } }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuSubContent_default = DropdownMenuSubContent_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSubTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuSubTrigger_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuSubTrigger_default = DropdownMenuSubTrigger_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
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
    const rootContext = injectDropdownMenuRootContext();
    const { forwardRef } = useForwardExpose();
    rootContext.triggerId ||= useId(void 0, "reka-dropdown-menu-trigger");
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(MenuAnchor_default), { "as-child": "" }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), {
          id: vueExports.unref(rootContext).triggerId,
          ref: vueExports.unref(forwardRef),
          type: _ctx.as === "button" ? "button" : void 0,
          "as-child": props.asChild,
          as: _ctx.as,
          "aria-haspopup": "menu",
          "aria-expanded": vueExports.unref(rootContext).open.value,
          "aria-controls": vueExports.unref(rootContext).open.value ? vueExports.unref(rootContext).contentId : void 0,
          "data-disabled": _ctx.disabled ? "" : void 0,
          disabled: _ctx.disabled,
          "data-state": vueExports.unref(rootContext).open.value ? "open" : "closed",
          onClick: _cache[0] || (_cache[0] = async (event) => {
            if (!_ctx.disabled && event.button === 0 && event.ctrlKey === false) {
              vueExports.unref(rootContext)?.onOpenToggle();
              await vueExports.nextTick();
              if (vueExports.unref(rootContext).open.value) event.preventDefault();
            }
          }),
          onKeydown: _cache[1] || (_cache[1] = vueExports.withKeys((event) => {
            if (_ctx.disabled) return;
            if (["Enter", " "].includes(event.key)) vueExports.unref(rootContext).onOpenToggle();
            if (event.key === "ArrowDown") vueExports.unref(rootContext).onOpenChange(true);
            if ([
              "Enter",
              " ",
              "ArrowDown"
            ].includes(event.key)) event.preventDefault();
          }, [
            "enter",
            "space",
            "arrow-down"
          ]))
        }, {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "id",
          "type",
          "as-child",
          "as",
          "aria-expanded",
          "aria-controls",
          "data-disabled",
          "disabled",
          "data-state"
        ])]),
        _: 3
      });
    };
  }
});
var DropdownMenuTrigger_default = DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default;
var TooltipArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TooltipArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperArrow_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var TooltipArrow_default = TooltipArrow_vue_vue_type_script_setup_true_lang_default;
const TOOLTIP_OPEN = "tooltip.open";
const [injectTooltipRootContext, provideTooltipRootContext] = createContext("TooltipRoot");
var TooltipRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TooltipRoot",
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
    delayDuration: {
      type: Number,
      required: false,
      default: void 0
    },
    disableHoverableContent: {
      type: Boolean,
      required: false,
      default: void 0
    },
    disableClosingTrigger: {
      type: Boolean,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false,
      default: void 0
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useForwardExpose();
    const providerContext = injectTooltipProviderContext();
    const disableHoverableContent = vueExports.computed(() => props.disableHoverableContent ?? providerContext.disableHoverableContent.value);
    const disableClosingTrigger = vueExports.computed(() => props.disableClosingTrigger ?? providerContext.disableClosingTrigger.value);
    const disableTooltip = vueExports.computed(() => props.disabled ?? providerContext.disabled.value);
    const delayDuration = vueExports.computed(() => props.delayDuration ?? providerContext.delayDuration.value);
    const ignoreNonKeyboardFocus = vueExports.computed(() => props.ignoreNonKeyboardFocus ?? providerContext.ignoreNonKeyboardFocus.value);
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    vueExports.watch(open, (isOpen) => {
      if (!providerContext.onClose) return;
      if (isOpen) {
        providerContext.onOpen();
        (void 0).dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else providerContext.onClose();
    });
    const wasOpenDelayedRef = vueExports.ref(false);
    const trigger = vueExports.ref();
    const stateAttribute = vueExports.computed(() => {
      if (!open.value) return "closed";
      return wasOpenDelayedRef.value ? "delayed-open" : "instant-open";
    });
    const { start: startTimer, stop: clearTimer } = useTimeoutFn$1(() => {
      wasOpenDelayedRef.value = true;
      open.value = true;
    }, delayDuration, { immediate: false });
    function handleOpen() {
      clearTimer();
      wasOpenDelayedRef.value = false;
      open.value = true;
    }
    function handleClose() {
      clearTimer();
      open.value = false;
    }
    function handleDelayedOpen() {
      startTimer();
    }
    provideTooltipRootContext({
      contentId: "",
      open,
      stateAttribute,
      trigger,
      onTriggerChange(el) {
        trigger.value = el;
      },
      onTriggerEnter() {
        if (providerContext.isOpenDelayed.value) handleDelayedOpen();
        else handleOpen();
      },
      onTriggerLeave() {
        if (disableHoverableContent.value) handleClose();
        else clearTimer();
      },
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      disableClosingTrigger,
      disabled: disableTooltip,
      ignoreNonKeyboardFocus
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperRoot_default), null, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { open: vueExports.unref(open) })]),
        _: 3
      });
    };
  }
});
var TooltipRoot_default = TooltipRoot_vue_vue_type_script_setup_true_lang_default;
var TooltipContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    side: {
      type: null,
      required: false,
      default: "top"
    },
    sideOffset: {
      type: Number,
      required: false,
      default: 0
    },
    align: {
      type: null,
      required: false,
      default: "center"
    },
    alignOffset: {
      type: Number,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false,
      default: true
    },
    collisionBoundary: {
      type: null,
      required: false,
      default: () => []
    },
    collisionPadding: {
      type: [Number, Object],
      required: false,
      default: 0
    },
    arrowPadding: {
      type: Number,
      required: false,
      default: 0
    },
    sticky: {
      type: String,
      required: false,
      default: "partial"
    },
    hideWhenDetached: {
      type: Boolean,
      required: false,
      default: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectTooltipRootContext();
    const { forwardRef } = useForwardExpose();
    const slot = vueExports.useSlots();
    const defaultSlot = vueExports.computed(() => slot.default?.({}));
    const ariaLabel = vueExports.computed(() => {
      if (props.ariaLabel) return props.ariaLabel;
      let content = "";
      function recursiveTextSearch(node) {
        if (typeof node.children === "string" && node.type !== vueExports.Comment) content += node.children;
        else if (Array.isArray(node.children)) node.children.forEach((child) => recursiveTextSearch(child));
      }
      defaultSlot.value?.forEach((node) => recursiveTextSearch(node));
      return content;
    });
    const popperContentProps = vueExports.computed(() => {
      const { ariaLabel: _, ...restProps } = props;
      return restProps;
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DismissableLayer_default), {
        "as-child": "",
        "disable-outside-pointer-events": false,
        onEscapeKeyDown: _cache[0] || (_cache[0] = ($event) => emits("escapeKeyDown", $event)),
        onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
          if (vueExports.unref(rootContext).disableClosingTrigger.value && vueExports.unref(rootContext).trigger.value?.contains(event.target)) event.preventDefault();
          emits("pointerDownOutside", event);
        }),
        onFocusOutside: _cache[2] || (_cache[2] = vueExports.withModifiers(() => {
        }, ["prevent"])),
        onDismiss: _cache[3] || (_cache[3] = ($event) => vueExports.unref(rootContext).onClose())
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(PopperContent_default), vueExports.mergeProps({
          ref: vueExports.unref(forwardRef),
          "data-state": vueExports.unref(rootContext).stateAttribute.value
        }, {
          ..._ctx.$attrs,
          ...popperContentProps.value
        }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default"), vueExports.createVNode(vueExports.unref(VisuallyHidden_default), {
            id: vueExports.unref(rootContext).contentId,
            role: "tooltip"
          }, {
            default: vueExports.withCtx(() => [vueExports.createTextVNode(vueExports.toDisplayString(ariaLabel.value), 1)]),
            _: 1
          }, 8, ["id"])]),
          _: 3
        }, 16, ["data-state"])]),
        _: 3
      });
    };
  }
});
var TooltipContentImpl_default = TooltipContentImpl_vue_vue_type_script_setup_true_lang_default;
var TooltipContentHoverable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    const { forwardRef, currentElement } = useForwardExpose();
    const { trigger, onClose } = injectTooltipRootContext();
    const providerContext = injectTooltipProviderContext();
    const { isPointerInTransit, onPointerExit } = useGraceArea(trigger, currentElement);
    providerContext.isPointerInTransitRef = isPointerInTransit;
    onPointerExit(() => {
      onClose();
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(TooltipContentImpl_default, vueExports.mergeProps({ ref: vueExports.unref(forwardRef) }, vueExports.unref(forwardedProps)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var TooltipContentHoverable_default = TooltipContentHoverable_vue_vue_type_script_setup_true_lang_default;
var TooltipContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TooltipContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    ariaLabel: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    side: {
      type: null,
      required: false,
      default: "top"
    },
    sideOffset: {
      type: Number,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectTooltipRootContext();
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), { present: _ctx.forceMount || vueExports.unref(rootContext).open.value }, {
        default: vueExports.withCtx(() => [(vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(vueExports.unref(rootContext).disableHoverableContent.value ? TooltipContentImpl_default : TooltipContentHoverable_default), vueExports.mergeProps({ ref: vueExports.unref(forwardRef) }, vueExports.unref(forwarded)), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16))]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var TooltipContent_default = TooltipContent_vue_vue_type_script_setup_true_lang_default;
var TooltipPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TooltipPortal",
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
var TooltipPortal_default = TooltipPortal_vue_vue_type_script_setup_true_lang_default;
var TooltipTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TooltipTrigger",
  props: {
    reference: {
      type: null,
      required: false
    },
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
    const rootContext = injectTooltipRootContext();
    const providerContext = injectTooltipProviderContext();
    rootContext.contentId ||= useId(void 0, "reka-tooltip-content");
    const { forwardRef } = useForwardExpose();
    const isPointerDown = vueExports.ref(false);
    const hasPointerMoveOpened = vueExports.ref(false);
    const tooltipListeners = vueExports.computed(() => {
      if (rootContext.disabled.value) return {};
      return {
        click: handleClick,
        focus: handleFocus,
        pointermove: handlePointerMove,
        pointerleave: handlePointerLeave,
        pointerdown: handlePointerDown,
        blur: handleBlur
      };
    });
    function handlePointerUp() {
      setTimeout(() => {
        isPointerDown.value = false;
      }, 1);
    }
    function handlePointerDown() {
      if (rootContext.open && !rootContext.disableClosingTrigger.value) rootContext.onClose();
      isPointerDown.value = true;
      (void 0).addEventListener("pointerup", handlePointerUp, { once: true });
    }
    function handlePointerMove(event) {
      if (event.pointerType === "touch") return;
      if (!hasPointerMoveOpened.value && !providerContext.isPointerInTransitRef.value) {
        rootContext.onTriggerEnter();
        hasPointerMoveOpened.value = true;
      }
    }
    function handlePointerLeave() {
      rootContext.onTriggerLeave();
      hasPointerMoveOpened.value = false;
    }
    function handleFocus(event) {
      if (isPointerDown.value) return;
      if (rootContext.ignoreNonKeyboardFocus.value && !event.target.matches?.(":focus-visible")) return;
      rootContext.onOpen();
    }
    function handleBlur() {
      rootContext.onClose();
    }
    function handleClick() {
      if (!rootContext.disableClosingTrigger.value) rootContext.onClose();
    }
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperAnchor_default), {
        "as-child": "",
        reference: _ctx.reference
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), vueExports.mergeProps({
          ref: vueExports.unref(forwardRef),
          "aria-describedby": vueExports.unref(rootContext).open.value ? vueExports.unref(rootContext).contentId : void 0,
          "data-state": vueExports.unref(rootContext).stateAttribute.value,
          as: _ctx.as,
          "as-child": props.asChild,
          "data-grace-area-trigger": ""
        }, vueExports.toHandlers(tooltipListeners.value)), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "aria-describedby",
          "data-state",
          "as",
          "as-child"
        ])]),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
var TooltipTrigger_default = TooltipTrigger_vue_vue_type_script_setup_true_lang_default;
const theme$1 = {
  "slots": {
    "content": "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
    "arrow": "fill-default",
    "text": "truncate",
    "kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",
    "kbdsSize": "sm"
  }
};
const _sfc_main$4 = {
  __name: "UTooltip",
  __ssrInlineRender: true,
  props: {
    text: { type: String, required: false },
    kbds: { type: Array, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    delayDuration: { type: Number, required: false },
    disableHoverableContent: { type: Boolean, required: false },
    disableClosingTrigger: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ignoreNonKeyboardFocus: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus"), emits);
    const portalProps = usePortal(vueExports.toRef(() => props.portal));
    const contentProps = vueExports.toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = vueExports.toRef(() => props.arrow);
    const ui = vueExports.computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.tooltip || {} })({
      side: contentProps.value.side
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TooltipRoot_default), vueExports.mergeProps(vueExports.unref(rootProps), {
        disabled: !(__props.text || __props.kbds?.length || !!slots.content) || props.disabled
      }, _attrs), {
        default: vueExports.withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TooltipTrigger_default), vueExports.mergeProps(_ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
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
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TooltipPortal_default), vueExports.unref(portalProps), {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TooltipContent_default), vueExports.mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }), {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
                          if (__props.text) {
                            _push4(`<span data-slot="text" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.text({ class: props.ui?.text }))}"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.text)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (__props.kbds?.length) {
                            _push4(`<span data-slot="kbds" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.kbds({ class: props.ui?.kbds }))}"${_scopeId3}><!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(__props.kbds, (kbd, index2) => {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, vueExports.mergeProps({
                                key: index2,
                                size: props.ui?.kbdsSize || ui.value.kbdsSize()
                              }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TooltipArrow_default), vueExports.mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          vueExports.renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [
                            __props.text ? (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 0,
                              "data-slot": "text",
                              class: ui.value.text({ class: props.ui?.text })
                            }, vueExports.toDisplayString(__props.text), 3)) : vueExports.createCommentVNode("", true),
                            __props.kbds?.length ? (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 1,
                              "data-slot": "kbds",
                              class: ui.value.kbds({ class: props.ui?.kbds })
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(__props.kbds, (kbd, index2) => {
                                return vueExports.openBlock(), vueExports.createBlock(_sfc_main$5, vueExports.mergeProps({
                                  key: index2,
                                  size: props.ui?.kbdsSize || ui.value.kbdsSize()
                                }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                              }), 128))
                            ], 2)) : vueExports.createCommentVNode("", true)
                          ]),
                          !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(TooltipArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(TooltipContent_default), vueExports.mergeProps(contentProps.value, {
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }), {
                      default: vueExports.withCtx(() => [
                        vueExports.renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [
                          __props.text ? (vueExports.openBlock(), vueExports.createBlock("span", {
                            key: 0,
                            "data-slot": "text",
                            class: ui.value.text({ class: props.ui?.text })
                          }, vueExports.toDisplayString(__props.text), 3)) : vueExports.createCommentVNode("", true),
                          __props.kbds?.length ? (vueExports.openBlock(), vueExports.createBlock("span", {
                            key: 1,
                            "data-slot": "kbds",
                            class: ui.value.kbds({ class: props.ui?.kbds })
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(__props.kbds, (kbd, index2) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$5, vueExports.mergeProps({
                                key: index2,
                                size: props.ui?.kbdsSize || ui.value.kbdsSize()
                              }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                            }), 128))
                          ], 2)) : vueExports.createCommentVNode("", true)
                        ]),
                        !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(TooltipArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(TooltipTrigger_default), vueExports.mergeProps({ key: 0 }, _ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
                default: vueExports.withCtx(() => [
                  vueExports.renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1040, ["reference", "class"])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(vueExports.unref(TooltipPortal_default), vueExports.unref(portalProps), {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(TooltipContent_default), vueExports.mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }), {
                    default: vueExports.withCtx(() => [
                      vueExports.renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [
                        __props.text ? (vueExports.openBlock(), vueExports.createBlock("span", {
                          key: 0,
                          "data-slot": "text",
                          class: ui.value.text({ class: props.ui?.text })
                        }, vueExports.toDisplayString(__props.text), 3)) : vueExports.createCommentVNode("", true),
                        __props.kbds?.length ? (vueExports.openBlock(), vueExports.createBlock("span", {
                          key: 1,
                          "data-slot": "kbds",
                          class: ui.value.kbds({ class: props.ui?.kbds })
                        }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(__props.kbds, (kbd, index2) => {
                            return vueExports.openBlock(), vueExports.createBlock(_sfc_main$5, vueExports.mergeProps({
                              key: index2,
                              size: props.ui?.kbdsSize || ui.value.kbdsSize()
                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                          }), 128))
                        ], 2)) : vueExports.createCommentVNode("", true)
                      ]),
                      !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(TooltipArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
                        "data-slot": "arrow",
                        class: ui.value.arrow({ class: props.ui?.arrow })
                      }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 16, ["class"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DropdownMenu = {
  Root: DropdownMenuRoot_default,
  Trigger: DropdownMenuTrigger_default,
  Portal: DropdownMenuPortal_default,
  Content: DropdownMenuContent_default,
  Arrow: DropdownMenuArrow_default,
  Item: DropdownMenuItem_default,
  Group: DropdownMenuGroup_default,
  Separator: DropdownMenuSeparator_default,
  CheckboxItem: DropdownMenuCheckboxItem_default,
  ItemIndicator: DropdownMenuItemIndicator_default,
  Label: DropdownMenuLabel_default,
  RadioGroup: DropdownMenuRadioGroup_default,
  RadioItem: DropdownMenuRadioItem_default,
  Sub: DropdownMenuSub_default,
  SubContent: DropdownMenuSubContent_default,
  SubTrigger: DropdownMenuSubTrigger_default
};
const _sfc_main$3 = {
  __name: "UDropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    items: { type: null, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true },
    sub: { type: Boolean, required: false },
    labelKey: { type: null, required: true },
    descriptionKey: { type: null, required: true },
    checkedIcon: { type: null, required: false },
    loadingIcon: { type: null, required: false },
    externalIcon: { type: [Boolean, String], required: false, skipCheck: true },
    class: { type: null, required: false },
    ui: { type: null, required: true },
    uiOverride: { type: null, required: false },
    loop: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false },
    sideFlip: { type: Boolean, required: false },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    alignFlip: { type: Boolean, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    positionStrategy: { type: String, required: false },
    updatePositionStrategy: { type: String, required: false },
    disableUpdateOnLayoutShift: { type: Boolean, required: false },
    prioritizePosition: { type: Boolean, required: false },
    reference: { type: null, required: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const portalProps = usePortal(vueExports.toRef(() => props.portal));
    const contentProps = useForwardPropsEmits(reactiveOmit(props, "sub", "items", "portal", "labelKey", "descriptionKey", "checkedIcon", "loadingIcon", "externalIcon", "class", "ui", "uiOverride"), emits);
    const getProxySlots = () => omit(slots, ["default"]);
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
    const childrenIcon = vueExports.computed(() => dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight);
    const groups = vueExports.computed(
      () => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineItemTemplate), null, {
        default: vueExports.withCtx(({ item, active, index: index2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index: index2,
              ui: __props.ui
            }, () => {
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index: index2,
                ui: __props.ui
              }, () => {
                if (item.loading) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                    name: __props.loadingIcon || vueExports.unref(appConfig).ui.icons.loading,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, loading: true })
                  }, null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                    name: item.icon,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, active })
                  }, null, _parent2, _scopeId));
                } else if (item.avatar) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$e, vueExports.mergeProps({
                    size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize()
                  }, item.avatar, {
                    "data-slot": "itemLeadingAvatar",
                    class: __props.ui.itemLeadingAvatar({ class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if (vueExports.unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || (vueExports.unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"])) {
                _push2(`<span data-slot="itemWrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] }))}"${_scopeId}><span data-slot="itemLabel" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemLabel({ class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel], active }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index: index2
                }, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && __props.externalIcon !== false) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : vueExports.unref(appConfig).ui.icons.external,
                    "data-slot": "itemLabelExternalIcon",
                    class: __props.ui.itemLabelExternalIcon({ class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon], color: item?.color, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
                if (vueExports.unref(get)(item, props.descriptionKey)) {
                  _push2(`<span data-slot="itemDescription" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] }))}"${_scopeId}>`);
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
                    item,
                    active,
                    index: index2
                  }, () => {
                    _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get)(item, props.descriptionKey))}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span data-slot="itemTrailing" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                item,
                active,
                index: index2,
                ui: __props.ui
              }, () => {
                if (item.children?.length) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                    name: childrenIcon.value,
                    "data-slot": "itemTrailingIcon",
                    class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color, active })
                  }, null, _parent2, _scopeId));
                } else if (item.kbds?.length) {
                  _push2(`<span data-slot="itemTrailingKbds" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] }))}"${_scopeId}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                    _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, vueExports.mergeProps({
                      key: kbdIndex,
                      size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
                    }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></span>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                      name: __props.checkedIcon || vueExports.unref(appConfig).ui.icons.check,
                      "data-slot": "itemTrailingIcon",
                      class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color })
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_sfc_main$g, {
                        name: __props.checkedIcon || vueExports.unref(appConfig).ui.icons.check,
                        "data-slot": "itemTrailingIcon",
                        class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color })
                      }, null, 8, ["name", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index: index2,
                ui: __props.ui
              }, () => [
                vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                  item,
                  active,
                  index: index2,
                  ui: __props.ui
                }, () => [
                  item.loading ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                    key: 0,
                    name: __props.loadingIcon || vueExports.unref(appConfig).ui.icons.loading,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, loading: true })
                  }, null, 8, ["name", "class"])) : item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                    key: 1,
                    name: item.icon,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, active })
                  }, null, 8, ["name", "class"])) : item.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                    key: 2,
                    size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize()
                  }, item.avatar, {
                    "data-slot": "itemLeadingAvatar",
                    class: __props.ui.itemLeadingAvatar({ class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active })
                  }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                ]),
                vueExports.unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || (vueExports.unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 0,
                  "data-slot": "itemWrapper",
                  class: __props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] })
                }, [
                  vueExports.createVNode("span", {
                    "data-slot": "itemLabel",
                    class: __props.ui.itemLabel({ class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel], active })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index: index2
                    }, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && __props.externalIcon !== false ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                      key: 0,
                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : vueExports.unref(appConfig).ui.icons.external,
                      "data-slot": "itemLabelExternalIcon",
                      class: __props.ui.itemLabelExternalIcon({ class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon], color: item?.color, active })
                    }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                  ], 2),
                  vueExports.unref(get)(item, props.descriptionKey) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 0,
                    "data-slot": "itemDescription",
                    class: __props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
                      item,
                      active,
                      index: index2
                    }, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get)(item, props.descriptionKey)), 1)
                    ])
                  ], 2)) : vueExports.createCommentVNode("", true)
                ], 2)) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("span", {
                  "data-slot": "itemTrailing",
                  class: __props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] })
                }, [
                  vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                    item,
                    active,
                    index: index2,
                    ui: __props.ui
                  }, () => [
                    item.children?.length ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                      key: 0,
                      name: childrenIcon.value,
                      "data-slot": "itemTrailingIcon",
                      class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color, active })
                    }, null, 8, ["name", "class"])) : item.kbds?.length ? (vueExports.openBlock(), vueExports.createBlock("span", {
                      key: 1,
                      "data-slot": "itemTrailingKbds",
                      class: __props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(item.kbds, (kbd, kbdIndex) => {
                        return vueExports.openBlock(), vueExports.createBlock(_sfc_main$5, vueExports.mergeProps({
                          key: kbdIndex,
                          size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
                        }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                      }), 128))
                    ], 2)) : vueExports.createCommentVNode("", true)
                  ]),
                  vueExports.createVNode(vueExports.unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_sfc_main$g, {
                        name: __props.checkedIcon || vueExports.unref(appConfig).ui.icons.check,
                        "data-slot": "itemTrailingIcon",
                        class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color })
                      }, null, 8, ["name", "class"])
                    ]),
                    _: 2
                  }, 1024)
                ], 2)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Portal, vueExports.unref(portalProps), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(__props.sub ? vueExports.unref(DropdownMenu).SubContent : vueExports.unref(DropdownMenu).Content), vueExports.mergeProps({
              "data-slot": "content",
              class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
            }, vueExports.unref(contentProps)), {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<div role="presentation" data-slot="viewport" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.viewport({ class: __props.uiOverride?.viewport }))}"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(groups.value, (group, groupIndex) => {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Group, {
                      key: `group-${groupIndex}`,
                      "data-slot": "group",
                      class: __props.ui.group({ class: __props.uiOverride?.group })
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(group, (item, index2) => {
                            _push4(`<!--[-->`);
                            if (item.type === "label") {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Label, {
                                "data-slot": "label",
                                class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                              }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                      item,
                                      index: index2
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                        item,
                                        index: index2
                                      }, null, 8, ["item", "index"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (item.type === "separator") {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Separator, {
                                "data-slot": "separator",
                                class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                              }, null, _parent4, _scopeId3));
                            } else if (item?.children?.length) {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Sub, {
                                open: item.open,
                                "default-open": item.defaultOpen
                              }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).SubTrigger, {
                                      as: "button",
                                      type: "button",
                                      disabled: item.disabled,
                                      "text-value": vueExports.unref(get)(item, props.labelKey),
                                      "data-slot": "item",
                                      class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                    }, {
                                      default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                            item,
                                            index: index2
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              index: index2
                                            }, null, 8, ["item", "index"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, vueExports.mergeProps({
                                      sub: "",
                                      class: item.ui?.content,
                                      ui: __props.ui,
                                      "ui-override": __props.uiOverride,
                                      portal: __props.portal,
                                      items: item.children,
                                      align: "start",
                                      "align-offset": -4,
                                      "side-offset": 3,
                                      "label-key": __props.labelKey,
                                      "description-key": __props.descriptionKey,
                                      "checked-icon": __props.checkedIcon,
                                      "loading-icon": __props.loadingIcon,
                                      "external-icon": __props.externalIcon
                                    }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                      vueExports.renderList(getProxySlots(), (_5, name) => {
                                        return {
                                          name,
                                          fn: vueExports.withCtx((slotData, _push6, _parent6, _scopeId5) => {
                                            if (_push6) {
                                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData), null, _push6, _parent6, _scopeId5);
                                            } else {
                                              return [
                                                vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                              ];
                                            }
                                          })
                                        };
                                      })
                                    ]), _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                        as: "button",
                                        type: "button",
                                        disabled: item.disabled,
                                        "text-value": vueExports.unref(get)(item, props.labelKey),
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                            item,
                                            index: index2
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "class"]),
                                      vueExports.createVNode(_sfc_main$3, vueExports.mergeProps({
                                        sub: "",
                                        class: item.ui?.content,
                                        ui: __props.ui,
                                        "ui-override": __props.uiOverride,
                                        portal: __props.portal,
                                        items: item.children,
                                        align: "start",
                                        "align-offset": -4,
                                        "side-offset": 3,
                                        "label-key": __props.labelKey,
                                        "description-key": __props.descriptionKey,
                                        "checked-icon": __props.checkedIcon,
                                        "loading-icon": __props.loadingIcon,
                                        "external-icon": __props.externalIcon
                                      }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                        vueExports.renderList(getProxySlots(), (_5, name) => {
                                          return {
                                            name,
                                            fn: vueExports.withCtx((slotData) => [
                                              vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (item.type === "checkbox") {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).CheckboxItem, {
                                "model-value": item.checked,
                                disabled: item.disabled,
                                "text-value": vueExports.unref(get)(item, props.labelKey),
                                "data-slot": "item",
                                class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                "onUpdate:modelValue": item.onUpdateChecked,
                                onSelect: item.onSelect
                              }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                      item,
                                      index: index2
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                        item,
                                        index: index2
                                      }, null, 8, ["item", "index"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Item, {
                                "as-child": "",
                                disabled: item.disabled,
                                "text-value": vueExports.unref(get)(item, props.labelKey),
                                onSelect: item.onSelect
                              }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$c, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                      default: vueExports.withCtx(({ active, ...slotProps }, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$d, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                            "data-slot": "item",
                                            class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                          }), {
                                            default: vueExports.withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                                  item,
                                                  active,
                                                  index: index2
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                    item,
                                                    active,
                                                    index: index2
                                                  }, null, 8, ["item", "active", "index"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                              "data-slot": "item",
                                              class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                            }), {
                                              default: vueExports.withCtx(() => [
                                                vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                  item,
                                                  active,
                                                  index: index2
                                                }, null, 8, ["item", "active", "index"])
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(_sfc_main$c, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                        default: vueExports.withCtx(({ active, ...slotProps }) => [
                                          vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                            "data-slot": "item",
                                            class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                          }), {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                item,
                                                active,
                                                index: index2
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index2) => {
                              return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                key: `group-${groupIndex}-${index2}`
                              }, [
                                item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Label, {
                                  key: 0,
                                  "data-slot": "label",
                                  class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                      item,
                                      index: index2
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])) : item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Separator, {
                                  key: 1,
                                  "data-slot": "separator",
                                  class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                                }, null, 8, ["class"])) : item?.children?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Sub, {
                                  key: 2,
                                  open: item.open,
                                  "default-open": item.defaultOpen
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                      as: "button",
                                      type: "button",
                                      disabled: item.disabled,
                                      "text-value": vueExports.unref(get)(item, props.labelKey),
                                      "data-slot": "item",
                                      class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                          item,
                                          index: index2
                                        }, null, 8, ["item", "index"])
                                      ]),
                                      _: 2
                                    }, 1032, ["disabled", "text-value", "class"]),
                                    vueExports.createVNode(_sfc_main$3, vueExports.mergeProps({
                                      sub: "",
                                      class: item.ui?.content,
                                      ui: __props.ui,
                                      "ui-override": __props.uiOverride,
                                      portal: __props.portal,
                                      items: item.children,
                                      align: "start",
                                      "align-offset": -4,
                                      "side-offset": 3,
                                      "label-key": __props.labelKey,
                                      "description-key": __props.descriptionKey,
                                      "checked-icon": __props.checkedIcon,
                                      "loading-icon": __props.loadingIcon,
                                      "external-icon": __props.externalIcon
                                    }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                      vueExports.renderList(getProxySlots(), (_4, name) => {
                                        return {
                                          name,
                                          fn: vueExports.withCtx((slotData) => [
                                            vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                          ])
                                        };
                                      })
                                    ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).CheckboxItem, {
                                  key: 3,
                                  "model-value": item.checked,
                                  disabled: item.disabled,
                                  "text-value": vueExports.unref(get)(item, props.labelKey),
                                  "data-slot": "item",
                                  class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                  "onUpdate:modelValue": item.onUpdateChecked,
                                  onSelect: item.onSelect
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                      item,
                                      index: index2
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Item, {
                                  key: 4,
                                  "as-child": "",
                                  disabled: item.disabled,
                                  "text-value": vueExports.unref(get)(item, props.labelKey),
                                  onSelect: item.onSelect
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$c, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                      default: vueExports.withCtx(({ active, ...slotProps }) => [
                                        vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                          "data-slot": "item",
                                          class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                        }), {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              active,
                                              index: index2
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["disabled", "text-value", "onSelect"]))
                              ], 64);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    vueExports.renderSlot(_ctx.$slots, "content-top"),
                    vueExports.createVNode("div", {
                      role: "presentation",
                      "data-slot": "viewport",
                      class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(groups.value, (group, groupIndex) => {
                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Group, {
                          key: `group-${groupIndex}`,
                          "data-slot": "group",
                          class: __props.ui.group({ class: __props.uiOverride?.group })
                        }, {
                          default: vueExports.withCtx(() => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index2) => {
                              return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                key: `group-${groupIndex}-${index2}`
                              }, [
                                item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Label, {
                                  key: 0,
                                  "data-slot": "label",
                                  class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                      item,
                                      index: index2
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])) : item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Separator, {
                                  key: 1,
                                  "data-slot": "separator",
                                  class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                                }, null, 8, ["class"])) : item?.children?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Sub, {
                                  key: 2,
                                  open: item.open,
                                  "default-open": item.defaultOpen
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                      as: "button",
                                      type: "button",
                                      disabled: item.disabled,
                                      "text-value": vueExports.unref(get)(item, props.labelKey),
                                      "data-slot": "item",
                                      class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                          item,
                                          index: index2
                                        }, null, 8, ["item", "index"])
                                      ]),
                                      _: 2
                                    }, 1032, ["disabled", "text-value", "class"]),
                                    vueExports.createVNode(_sfc_main$3, vueExports.mergeProps({
                                      sub: "",
                                      class: item.ui?.content,
                                      ui: __props.ui,
                                      "ui-override": __props.uiOverride,
                                      portal: __props.portal,
                                      items: item.children,
                                      align: "start",
                                      "align-offset": -4,
                                      "side-offset": 3,
                                      "label-key": __props.labelKey,
                                      "description-key": __props.descriptionKey,
                                      "checked-icon": __props.checkedIcon,
                                      "loading-icon": __props.loadingIcon,
                                      "external-icon": __props.externalIcon
                                    }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                      vueExports.renderList(getProxySlots(), (_3, name) => {
                                        return {
                                          name,
                                          fn: vueExports.withCtx((slotData) => [
                                            vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                          ])
                                        };
                                      })
                                    ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).CheckboxItem, {
                                  key: 3,
                                  "model-value": item.checked,
                                  disabled: item.disabled,
                                  "text-value": vueExports.unref(get)(item, props.labelKey),
                                  "data-slot": "item",
                                  class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                  "onUpdate:modelValue": item.onUpdateChecked,
                                  onSelect: item.onSelect
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                      item,
                                      index: index2
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Item, {
                                  key: 4,
                                  "as-child": "",
                                  disabled: item.disabled,
                                  "text-value": vueExports.unref(get)(item, props.labelKey),
                                  onSelect: item.onSelect
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$c, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                      default: vueExports.withCtx(({ active, ...slotProps }) => [
                                        vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                          "data-slot": "item",
                                          class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                        }), {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              active,
                                              index: index2
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["disabled", "text-value", "onSelect"]))
                              ], 64);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2),
                    vueExports.renderSlot(_ctx.$slots, "default"),
                    vueExports.renderSlot(_ctx.$slots, "content-bottom")
                  ];
                }
              }),
              _: 3
            }), _parent2, _scopeId);
          } else {
            return [
              (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(__props.sub ? vueExports.unref(DropdownMenu).SubContent : vueExports.unref(DropdownMenu).Content), vueExports.mergeProps({
                "data-slot": "content",
                class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
              }, vueExports.unref(contentProps)), {
                default: vueExports.withCtx(() => [
                  vueExports.renderSlot(_ctx.$slots, "content-top"),
                  vueExports.createVNode("div", {
                    role: "presentation",
                    "data-slot": "viewport",
                    class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(groups.value, (group, groupIndex) => {
                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Group, {
                        key: `group-${groupIndex}`,
                        "data-slot": "group",
                        class: __props.ui.group({ class: __props.uiOverride?.group })
                      }, {
                        default: vueExports.withCtx(() => [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index2) => {
                            return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                              key: `group-${groupIndex}-${index2}`
                            }, [
                              item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Label, {
                                key: 0,
                                "data-slot": "label",
                                class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                    item,
                                    index: index2
                                  }, null, 8, ["item", "index"])
                                ]),
                                _: 2
                              }, 1032, ["class"])) : item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Separator, {
                                key: 1,
                                "data-slot": "separator",
                                class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                              }, null, 8, ["class"])) : item?.children?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Sub, {
                                key: 2,
                                open: item.open,
                                "default-open": item.defaultOpen
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                    as: "button",
                                    type: "button",
                                    disabled: item.disabled,
                                    "text-value": vueExports.unref(get)(item, props.labelKey),
                                    "data-slot": "item",
                                    class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                        item,
                                        index: index2
                                      }, null, 8, ["item", "index"])
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "text-value", "class"]),
                                  vueExports.createVNode(_sfc_main$3, vueExports.mergeProps({
                                    sub: "",
                                    class: item.ui?.content,
                                    ui: __props.ui,
                                    "ui-override": __props.uiOverride,
                                    portal: __props.portal,
                                    items: item.children,
                                    align: "start",
                                    "align-offset": -4,
                                    "side-offset": 3,
                                    "label-key": __props.labelKey,
                                    "description-key": __props.descriptionKey,
                                    "checked-icon": __props.checkedIcon,
                                    "loading-icon": __props.loadingIcon,
                                    "external-icon": __props.externalIcon
                                  }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                    vueExports.renderList(getProxySlots(), (_2, name) => {
                                      return {
                                        name,
                                        fn: vueExports.withCtx((slotData) => [
                                          vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                        ])
                                      };
                                    })
                                  ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])
                                ]),
                                _: 2
                              }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).CheckboxItem, {
                                key: 3,
                                "model-value": item.checked,
                                disabled: item.disabled,
                                "text-value": vueExports.unref(get)(item, props.labelKey),
                                "data-slot": "item",
                                class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                "onUpdate:modelValue": item.onUpdateChecked,
                                onSelect: item.onSelect
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                    item,
                                    index: index2
                                  }, null, 8, ["item", "index"])
                                ]),
                                _: 2
                              }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Item, {
                                key: 4,
                                "as-child": "",
                                disabled: item.disabled,
                                "text-value": vueExports.unref(get)(item, props.labelKey),
                                onSelect: item.onSelect
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(_sfc_main$c, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                    default: vueExports.withCtx(({ active, ...slotProps }) => [
                                      vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                      }), {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                            item,
                                            active,
                                            index: index2
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 2
                              }, 1032, ["disabled", "text-value", "onSelect"]))
                            ], 64);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ], 2),
                  vueExports.renderSlot(_ctx.$slots, "default"),
                  vueExports.renderSlot(_ctx.$slots, "content-bottom")
                ]),
                _: 3
              }, 16, ["class"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "content": "min-w-32 bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col",
    "viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
    "arrow": "fill-default",
    "group": "p-1 isolate",
    "label": "w-full flex items-center font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
    "itemTrailingKbdsSize": "",
    "itemWrapper": "flex-1 flex flex-col text-start min-w-0",
    "itemLabel": "truncate",
    "itemDescription": "truncate text-muted",
    "itemLabelExternalIcon": "inline-block size-3 align-top text-dimmed"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "active": {
      "true": {
        "item": "text-highlighted before:bg-elevated",
        "itemLeadingIcon": "text-default"
      },
      "false": {
        "item": [
          "text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    },
    "size": {
      "xs": {
        "label": "p-1 text-xs gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "sm": {
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "md": {
        "label": "p-1.5 text-sm gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "md"
      },
      "lg": {
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "md"
      },
      "xl": {
        "label": "p-2 text-base gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemTrailingIcon": "size-6",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "lg"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "active": false,
      "class": {
        "item": "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10",
        "itemLeadingIcon": "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "active": false,
      "class": {
        "item": "text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10",
        "itemLeadingIcon": "text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "active": false,
      "class": {
        "item": "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10",
        "itemLeadingIcon": "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "active": false,
      "class": {
        "item": "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10",
        "itemLeadingIcon": "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "active": false,
      "class": {
        "item": "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10",
        "itemLeadingIcon": "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "active": false,
      "class": {
        "item": "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10",
        "itemLeadingIcon": "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "primary",
      "active": true,
      "class": {
        "item": "text-primary before:bg-primary/10",
        "itemLeadingIcon": "text-primary"
      }
    },
    {
      "color": "secondary",
      "active": true,
      "class": {
        "item": "text-secondary before:bg-secondary/10",
        "itemLeadingIcon": "text-secondary"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "item": "text-success before:bg-success/10",
        "itemLeadingIcon": "text-success"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "item": "text-info before:bg-info/10",
        "itemLeadingIcon": "text-info"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "item": "text-warning before:bg-warning/10",
        "itemLeadingIcon": "text-warning"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "item": "text-error before:bg-error/10",
        "itemLeadingIcon": "text-error"
      }
    }
  ],
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$2 = {
  __name: "UDropdownMenu",
  __ssrInlineRender: true,
  props: {
    size: { type: null, required: false },
    items: { type: null, required: false },
    checkedIcon: { type: null, required: false },
    loadingIcon: { type: null, required: false },
    externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    disabled: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "modal"), emits);
    const contentProps = vueExports.toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = vueExports.toRef(() => props.arrow);
    const getProxySlots = () => omit(slots, ["default"]);
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.dropdownMenu || {} })({
      size: props.size
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenuRoot_default), vueExports.mergeProps(vueExports.unref(rootProps), _attrs), {
        default: vueExports.withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenuTrigger_default), {
                "as-child": "",
                class: props.class,
                disabled: __props.disabled
              }, {
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
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, vueExports.mergeProps({
              class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] }),
              ui: ui.value,
              "ui-override": props.ui
            }, contentProps.value, {
              items: __props.items,
              portal: __props.portal,
              "label-key": __props.labelKey,
              "description-key": __props.descriptionKey,
              "checked-icon": __props.checkedIcon,
              "loading-icon": __props.loadingIcon,
              "external-icon": __props.externalIcon
            }), vueExports.createSlots({
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!!__props.arrow) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenuArrow_default), vueExports.mergeProps(arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: props.ui?.arrow })
                    }), null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenuArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: props.ui?.arrow })
                    }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              vueExports.renderList(getProxySlots(), (_, name) => {
                return {
                  name,
                  fn: vueExports.withCtx((slotData, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        vueExports.renderSlot(_ctx.$slots, name, slotData)
                      ];
                    }
                  })
                };
              })
            ]), _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenuTrigger_default), {
                key: 0,
                "as-child": "",
                class: props.class,
                disabled: __props.disabled
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class", "disabled"])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(_sfc_main$3, vueExports.mergeProps({
                class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] }),
                ui: ui.value,
                "ui-override": props.ui
              }, contentProps.value, {
                items: __props.items,
                portal: __props.portal,
                "label-key": __props.labelKey,
                "description-key": __props.descriptionKey,
                "checked-icon": __props.checkedIcon,
                "loading-icon": __props.loadingIcon,
                "external-icon": __props.externalIcon
              }), vueExports.createSlots({
                default: vueExports.withCtx(() => [
                  !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenuArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
                    "data-slot": "arrow",
                    class: ui.value.arrow({ class: props.ui?.arrow })
                  }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                ]),
                _: 2
              }, [
                vueExports.renderList(getProxySlots(), (_, name) => {
                  return {
                    name,
                    fn: vueExports.withCtx((slotData) => [
                      vueExports.renderSlot(_ctx.$slots, name, slotData)
                    ])
                  };
                })
              ]), 1040, ["class", "ui", "ui-override", "items", "portal", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UserInforMation",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: {}
    }
  },
  emits: ["changeFilter", "resetFilter"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const isDark = vueExports.ref(false);
    function applyTheme(mode) {
      isDark.value = mode === "dark";
      const el = (void 0).documentElement;
      if (isDark.value) el.classList.add("dark");
      else el.classList.remove("dark");
      localStorage.setItem("theme", isDark.value ? "dark" : "light");
    }
    function toggleTheme() {
      applyTheme(isDark.value ? "light" : "dark");
    }
    const dropdownOpen = vueExports.ref(false);
    const filterItems = vueExports.ref([
      [
        {
          label: "排序方式",
          icon: "i-heroicons-arrows-up-down-20-solid",
          type: "label"
        }
      ],
      [
        {
          label: "日期(最新的在前)",
          icon: "i-heroicons-calendar-days-20-solid",
          onSelect: () => {
            console.log("日期(最新的在前)");
            e.preventDefault();
            dropdownOpen.value = true;
          }
        },
        {
          label: "日期(最旧的在前)",
          icon: "i-heroicons-calendar-days-20-solid",
          onSelect: () => {
            console.log("日期(最旧的在前)");
            e.preventDefault();
            dropdownOpen.value = true;
          }
        },
        {
          label: "文件大小(升序)",
          icon: "i-heroicons-bars-arrow-up-20-solid",
          onSelect: () => {
            console.log("文件大小(升序)");
            e.preventDefault();
            dropdownOpen.value = true;
          }
        },
        {
          label: "文件大小(降序)",
          icon: "i-heroicons-bars-arrow-down-20-solid",
          onSelect: () => {
            console.log("文件大小(降序)");
            e.preventDefault();
            dropdownOpen.value = true;
          }
        }
      ],
      [
        {
          label: "重置",
          icon: "i-heroicons-arrow-path-20-solid"
        }
      ]
    ]);
    function refreshItems() {
      emit("resetFilter");
    }
    function uploadImage() {
      navigateTo("/upload");
    }
    const themeOpen = vueExports.ref(false);
    function setThemeColor(name) {
      const palettes = {
        green: { p400: "#00dc82", p500: "#00c16a", p600: "#00a155" },
        blue: { p400: "#60a5fa", p500: "#3b82f6", p600: "#2563eb" },
        amber: { p400: "#fbbf24", p500: "#f59e0b", p600: "#d97706" },
        rose: { p400: "#fb7185", p500: "#f43f5e", p600: "#e11d48" },
        violet: { p400: "#a78bfa", p500: "#8b5cf6", p600: "#7c3aed" }
      };
      const p = palettes[name] || palettes.green;
      const el = (void 0).documentElement;
      el.style.setProperty("--color-primary-400", p.p400);
      el.style.setProperty("--color-primary-500", p.p500);
      el.style.setProperty("--color-primary-600", p.p600);
      localStorage.setItem("themeColor", name);
    }
    const themeItems = vueExports.ref([
      [{ label: "选择主题色", type: "label", icon: "i-heroicons-swatch-20-solid" }],
      [
        {
          label: "绿色",
          icon: "i-heroicons-sparkles-20-solid",
          onSelect: (e2) => {
            e2.preventDefault();
            themeOpen.value = true;
            setThemeColor("green");
          }
        },
        {
          label: "蓝色",
          icon: "i-heroicons-sparkles-20-solid",
          onSelect: (e2) => {
            e2.preventDefault();
            themeOpen.value = true;
            setThemeColor("blue");
          }
        },
        {
          label: "琥珀",
          icon: "i-heroicons-sparkles-20-solid",
          onSelect: (e2) => {
            e2.preventDefault();
            themeOpen.value = true;
            setThemeColor("amber");
          }
        },
        {
          label: "玫瑰",
          icon: "i-heroicons-sparkles-20-solid",
          onSelect: (e2) => {
            e2.preventDefault();
            themeOpen.value = true;
            setThemeColor("rose");
          }
        },
        {
          label: "紫罗兰",
          icon: "i-heroicons-sparkles-20-solid",
          onSelect: (e2) => {
            e2.preventDefault();
            themeOpen.value = true;
            setThemeColor("violet");
          }
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = _sfc_main$e;
      const _component_UTooltip = _sfc_main$4;
      const _component_UButton = _sfc_main$b;
      const _component_UDropdownMenu = _sfc_main$2;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "justify-evenly size-full dark:bg-neutral-900/75 border-white/40 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 flex flex-col items-center bg-white border" }, _attrs))}><div class="size-16">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UAvatar, {
        src: props.user.avatar,
        name: props.user.name,
        size: "20"
      }, null, _parent));
      _push(`</div><div class="text-neutral-900 dark:text-neutral-100 text-sm font-semibold text-center">${serverRenderer_cjs_prodExports.ssrInterpolate(props.user.name)}</div><div class="text-neutral-600 dark:text-neutral-400 text-xs text-center">共 9999 张照片</div><div class="text-neutral-700 dark:text-neutral-200 flex items-center gap-1">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTooltip, { text: "上传图片" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "soft",
              icon: "i-heroicons-cloud-arrow-up-20-solid",
              onClick: uploadImage
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_UButton, {
                color: "primary",
                variant: "soft",
                icon: "i-heroicons-cloud-arrow-up-20-solid",
                onClick: uploadImage
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTooltip, { text: "主题色" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UDropdownMenu, {
              open: themeOpen.value,
              "onUpdate:open": ($event) => themeOpen.value = $event,
              items: themeItems.value,
              ui: { content: "w-44" },
              content: { align: "center", side: "bottom" }
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    icon: "i-heroicons-swatch-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UButton, {
                      color: "primary",
                      variant: "soft",
                      icon: "i-heroicons-swatch-20-solid"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_UDropdownMenu, {
                open: themeOpen.value,
                "onUpdate:open": ($event) => themeOpen.value = $event,
                items: themeItems.value,
                ui: { content: "w-44" },
                content: { align: "center", side: "bottom" }
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    icon: "i-heroicons-swatch-20-solid"
                  })
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTooltip, { text: "筛选" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UDropdownMenu, {
              open: dropdownOpen.value,
              "onUpdate:open": ($event) => dropdownOpen.value = $event,
              items: filterItems.value,
              ui: {
                content: "w-50"
              },
              content: {
                align: "center",
                side: "bottom"
              }
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    icon: "i-heroicons-funnel-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UButton, {
                      color: "primary",
                      variant: "soft",
                      icon: "i-heroicons-funnel-20-solid"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_UDropdownMenu, {
                open: dropdownOpen.value,
                "onUpdate:open": ($event) => dropdownOpen.value = $event,
                items: filterItems.value,
                ui: {
                  content: "w-50"
                },
                content: {
                  align: "center",
                  side: "bottom"
                }
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    icon: "i-heroicons-funnel-20-solid"
                  })
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTooltip, { text: "刷新" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "soft",
              icon: "i-heroicons-arrow-path-20-solid",
              onClick: refreshItems
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_UButton, {
                color: "primary",
                variant: "soft",
                icon: "i-heroicons-arrow-path-20-solid",
                onClick: refreshItems
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTooltip, { text: "明暗切换" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "soft",
              icon: isDark.value ? "i-heroicons-sun-20-solid" : "i-heroicons-moon-20-solid",
              onClick: toggleTheme
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_UButton, {
                color: "primary",
                variant: "soft",
                icon: isDark.value ? "i-heroicons-sun-20-solid" : "i-heroicons-moon-20-solid",
                onClick: toggleTheme
              }, null, 8, ["icon"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserInforMation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "UserInforMation" });
const pageSize = 60;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useToast();
    const items = vueExports.ref([]);
    const count = vueExports.ref(0);
    vueExports.ref(1);
    const loading = vueExports.ref(false);
    const noMore = vueExports.ref(false);
    const imageCache = vueExports.reactive(/* @__PURE__ */ new Map());
    const [imagesRes, countRes] = ([__temp, __restore] = vueExports.withAsyncContext(() => Promise.all([
      useFetch(`${useRuntimeConfig().public.apiBase}/pub.index.getImages`, {
        method: "GET",
        query: {
          page: 1,
          size: pageSize
        }
      }, "$orW8SXrfeA"),
      useFetch(`${useRuntimeConfig().public.apiBase}/pub.index.getCount`, {
        method: "GET"
      }, "$Esc5XvxuRO")
    ])), __temp = await __temp, __restore(), __temp);
    items.value = imagesRes.data.value?.data || [];
    count.value = countRes.data.value?.data || 0;
    const resetFilter = () => {
      items.value = x.data;
    };
    const getImageAspectRatio = (item) => {
      const cached = imageCache.get(item.url);
      if (cached) {
        return `${cached.width} / ${cached.height}`;
      }
      return "1 / 1";
    };
    const onImageLoad = (event, item) => {
      const img = event.target;
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      imageCache.set(item.url, { width, height });
    };
    const user = {
      name: "Yangliu",
      avatar: `https://i.pravatar.cc/64?u=${Math.floor(Math.random() * 1e4)}`
    };
    const viewerOptions = {
      toolbar: true,
      navbar: true,
      title: false,
      movable: true,
      zoomable: true,
      rotatable: true,
      transition: true
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MasonryWall = vueExports.resolveComponent("MasonryWall");
      const _component_UserInforMation = __nuxt_component_0;
      const _directive_viewer = vueExports.resolveDirective("viewer");
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "p-1" }, _attrs, serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_viewer, viewerOptions)))} data-v-14302432>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_MasonryWall, {
        items: vueExports.unref(items),
        "column-width": 200,
        gap: 5,
        "ssr-columns": 1
      }, {
        default: vueExports.withCtx((x2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (x2.index == 0) {
              _push2(`<div class="absolute inset-0 z-40 bg-gray-700" data-v-14302432${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UserInforMation, {
                user,
                count: vueExports.unref(count),
                onResetFilter: resetFilter
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(motion).div, {
              initial: { opacity: 0, scale: 1.08 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.6, delay: 0.1 },
              class: "overflow-hidden"
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="group bg-neutral-100 relative w-full overflow-hidden" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ aspectRatio: getImageAspectRatio(x2.item) })}" data-v-14302432${_scopeId2}>`);
                  if (!x2.item.type || x2.item.type === "image") {
                    _push3(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", x2.item.url || "")} alt="图片" class="group-hover:scale-105 z-0 object-cover w-full h-full transition-transform duration-300 cursor-pointer" loading="lazy" data-v-14302432${_scopeId2}>`);
                  } else {
                    _push3(`<video${serverRenderer_cjs_prodExports.ssrRenderAttr("src", x2.item.url)} autoplay loop muted playsinline class="z-0 object-cover w-full h-full cursor-pointer" preload="auto" controls data-v-14302432${_scopeId2}></video>`);
                  }
                  if (!x2.item.type || x2.item.type === "image") {
                    _push3(`<div class="group-hover:opacity-100 bg-img group-hover:translate-y-0 absolute inset-x-0 bottom-0 z-20 p-3 text-white transition-all duration-300 translate-y-2 opacity-0" data-v-14302432${_scopeId2}><div class="text-xs" data-v-14302432${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(x2?.item?._add_time_str)}</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", {
                      class: "group bg-neutral-100 relative w-full overflow-hidden",
                      style: { aspectRatio: getImageAspectRatio(x2.item) }
                    }, [
                      !x2.item.type || x2.item.type === "image" ? (vueExports.openBlock(), vueExports.createBlock("img", {
                        key: 0,
                        src: x2.item.url || "",
                        alt: "图片",
                        class: "group-hover:scale-105 z-0 object-cover w-full h-full transition-transform duration-300 cursor-pointer",
                        loading: "lazy",
                        onLoad: ($event) => onImageLoad($event, x2.item)
                      }, null, 40, ["src", "onLoad"])) : (vueExports.openBlock(), vueExports.createBlock("video", {
                        key: 1,
                        src: x2.item.url,
                        autoplay: "",
                        loop: "",
                        muted: "",
                        playsinline: "",
                        class: "z-0 object-cover w-full h-full cursor-pointer",
                        preload: "auto",
                        controls: ""
                      }, null, 8, ["src"])),
                      !x2.item.type || x2.item.type === "image" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 2,
                        class: "group-hover:opacity-100 bg-img group-hover:translate-y-0 absolute inset-x-0 bottom-0 z-20 p-3 text-white transition-all duration-300 translate-y-2 opacity-0"
                      }, [
                        vueExports.createVNode("div", { class: "text-xs" }, vueExports.toDisplayString(x2?.item?._add_time_str), 1)
                      ])) : vueExports.createCommentVNode("", true)
                    ], 4)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              x2.index == 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "absolute inset-0 z-40 bg-gray-700"
              }, [
                vueExports.createVNode(_component_UserInforMation, {
                  user,
                  count: vueExports.unref(count),
                  onResetFilter: resetFilter
                }, null, 8, ["count"])
              ])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(vueExports.unref(motion).div, {
                initial: { opacity: 0, scale: 1.08 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6, delay: 0.1 },
                class: "overflow-hidden"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", {
                    class: "group bg-neutral-100 relative w-full overflow-hidden",
                    style: { aspectRatio: getImageAspectRatio(x2.item) }
                  }, [
                    !x2.item.type || x2.item.type === "image" ? (vueExports.openBlock(), vueExports.createBlock("img", {
                      key: 0,
                      src: x2.item.url || "",
                      alt: "图片",
                      class: "group-hover:scale-105 z-0 object-cover w-full h-full transition-transform duration-300 cursor-pointer",
                      loading: "lazy",
                      onLoad: ($event) => onImageLoad($event, x2.item)
                    }, null, 40, ["src", "onLoad"])) : (vueExports.openBlock(), vueExports.createBlock("video", {
                      key: 1,
                      src: x2.item.url,
                      autoplay: "",
                      loop: "",
                      muted: "",
                      playsinline: "",
                      class: "z-0 object-cover w-full h-full cursor-pointer",
                      preload: "auto",
                      controls: ""
                    }, null, 8, ["src"])),
                    !x2.item.type || x2.item.type === "image" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: "group-hover:opacity-100 bg-img group-hover:translate-y-0 absolute inset-x-0 bottom-0 z-20 p-3 text-white transition-all duration-300 translate-y-2 opacity-0"
                    }, [
                      vueExports.createVNode("div", { class: "text-xs" }, vueExports.toDisplayString(x2?.item?._add_time_str), 1)
                    ])) : vueExports.createCommentVNode("", true)
                  ], 4)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (vueExports.unref(loading)) {
        _push(`<div class="flex items-center justify-center py-8" data-v-14302432><div class="text-gray-500" data-v-14302432>加载中...</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(noMore)) {
        _push(`<div class="flex items-center justify-center py-8" data-v-14302432><div class="text-sm text-gray-400" data-v-14302432>没有更多了</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14302432"]]);

export { index as default };
//# sourceMappingURL=index-B4mBwlVM.mjs.map
