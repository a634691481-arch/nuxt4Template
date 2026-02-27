import { v as vueExports, A as serverRenderer_cjs_prodExports, K as _sfc_main$b, L as navigateTo, w as useAppConfig, z as tv, P as Primitive, W as formErrorsInjectionKey, X as formInputsInjectionKey, Y as inputIdInjectionKey, Z as formFieldInjectionKey, $ as useFormField, a0 as useFieldGroup, a1 as useComponentIcons, _ as _sfc_main$g, E as _sfc_main$e, B as useLocale, p as useForwardPropsEmits, x as reactivePick, y as usePortal, D as isArrayOfArray, F as get, a3 as compare$1, a4 as _sfc_main$f, k as useForwardExpose, j as createContext, S as usePrimitiveElement, h as useVModel$1, d as createEventHook, a5 as getDisplayValue, T as Teleport_default, m as Presence_default, a2 as looseToNumber, l as useCollection, o as useForwardProps, U as useParentElement, b as refAutoReset, g as getActiveElement, Q as toValue$1, R as unrefElement, V as VisuallyHidden_default } from './server.mjs';
import { u as useVModel, c as createReusableTemplate } from './index-C-OSoVsH.mjs';
import { F as FocusScope_default, P as PopperRoot_default, a as PopperAnchor_default, b as PopperArrow_default, u as useBodyScrollLock, e as useHideOthers, D as DismissableLayer_default, c as PopperContent_default } from './PopperArrow-B4sRZrM8.mjs';
import { u as useDirection } from './useDirection-B67GYiMj.mjs';
import { h as handleAndDispatchCustomEvent, f as findValuesBetween } from './handleAndDispatchCustomEvent-_7h1spm1.mjs';
import { u as useTypeahead, g as getNextMatch } from './useTypeahead-BUAVJZ5Q.mjs';
import { M as MAP_KEY_TO_FOCUS_INTENT, g as getFocusIntent } from './utils-CEewrpIs.mjs';
import { u as useId } from './useId-De6qfwId.mjs';
import { Q as defu, am as isEqual } from '../_/nitro.mjs';
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

function useFilter(options) {
  const computedOptions = vueExports.computed(() => vueExports.unref(options));
  const collator = vueExports.computed(() => new Intl.Collator("en", {
    usage: "search",
    ...computedOptions.value
  }));
  const startsWith = (string, substring) => {
    if (substring.length === 0) return true;
    string = string.normalize("NFC");
    substring = substring.normalize("NFC");
    return collator.value.compare(string.slice(0, substring.length), substring) === 0;
  };
  const endsWith = (string, substring) => {
    if (substring.length === 0) return true;
    string = string.normalize("NFC");
    substring = substring.normalize("NFC");
    return collator.value.compare(string.slice(-substring.length), substring) === 0;
  };
  const contains = (string, substring) => {
    if (substring.length === 0) return true;
    string = string.normalize("NFC");
    substring = substring.normalize("NFC");
    let scan = 0;
    const sliceLen = substring.length;
    for (; scan + sliceLen <= string.length; scan++) {
      const slice = string.slice(scan, scan + sliceLen);
      if (collator.value.compare(substring, slice) === 0) return true;
    }
    return false;
  };
  return {
    startsWith,
    endsWith,
    contains
  };
}
function useFormControl(el) {
  return vueExports.computed(() => toValue$1(el) ? Boolean(unrefElement(el)?.closest("form")) : true);
}
function useKbd() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
var VisuallyHiddenInputBubble_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  inheritAttrs: false,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: null,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: void 0
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    feature: {
      type: String,
      required: false,
      default: "fully-hidden"
    }
  },
  setup(__props) {
    const props = __props;
    const { primitiveElement, currentElement } = usePrimitiveElement();
    const valueState = vueExports.computed(() => props.checked ?? props.value);
    vueExports.watch(valueState, (cur, prev) => {
      if (!currentElement.value) return;
      const input = currentElement.value;
      const inputProto = (void 0).HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
      const setValue = descriptor.set;
      if (setValue && cur !== prev) {
        const inputEvent = new Event("input", { bubbles: true });
        const changeEvent = new Event("change", { bubbles: true });
        setValue.call(input, cur);
        input.dispatchEvent(inputEvent);
        input.dispatchEvent(changeEvent);
      }
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(VisuallyHidden_default, vueExports.mergeProps({
        ref_key: "primitiveElement",
        ref: primitiveElement
      }, {
        ...props,
        ..._ctx.$attrs
      }, { as: "input" }), null, 16);
    };
  }
});
var VisuallyHiddenInputBubble_default = VisuallyHiddenInputBubble_vue_vue_type_script_setup_true_lang_default;
var VisuallyHiddenInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  inheritAttrs: false,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: null,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: void 0
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    feature: {
      type: String,
      required: false,
      default: "fully-hidden"
    }
  },
  setup(__props) {
    const props = __props;
    const isFormArrayEmptyAndRequired = vueExports.computed(() => typeof props.value === "object" && Array.isArray(props.value) && props.value.length === 0 && props.required);
    const parsedValue = vueExports.computed(() => {
      if (typeof props.value === "string" || typeof props.value === "number" || typeof props.value === "boolean" || props.value === null || props.value === void 0) return [{
        name: props.name,
        value: props.value
      }];
      else if (typeof props.value === "object" && Array.isArray(props.value)) return props.value.flatMap((obj, index) => {
        if (typeof obj === "object") return Object.entries(obj).map(([key, value]) => ({
          name: `${props.name}[${index}][${key}]`,
          value
        }));
        else return {
          name: `${props.name}[${index}]`,
          value: obj
        };
      });
      else if (props.value !== null && typeof props.value === "object" && !Array.isArray(props.value)) return Object.entries(props.value).map(([key, value]) => ({
        name: `${props.name}[${key}]`,
        value
      }));
      return [];
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createElementBlock(vueExports.Fragment, null, [vueExports.createCommentVNode(" We render single input if it's required "), isFormArrayEmptyAndRequired.value ? (vueExports.openBlock(), vueExports.createBlock(VisuallyHiddenInputBubble_default, vueExports.mergeProps({ key: _ctx.name }, {
        ...props,
        ..._ctx.$attrs
      }, {
        name: _ctx.name,
        value: _ctx.value
      }), null, 16, ["name", "value"])) : (vueExports.openBlock(true), vueExports.createElementBlock(vueExports.Fragment, { key: 1 }, vueExports.renderList(parsedValue.value, (parsed) => {
        return vueExports.openBlock(), vueExports.createBlock(VisuallyHiddenInputBubble_default, vueExports.mergeProps({ key: parsed.name }, { ref_for: true }, {
          ...props,
          ..._ctx.$attrs
        }, {
          name: parsed.name,
          value: parsed.value
        }), null, 16, ["name", "value"]);
      }), 128))], 2112);
    };
  }
});
var VisuallyHiddenInput_default = VisuallyHiddenInput_vue_vue_type_script_setup_true_lang_default;
var ComboboxAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxAnchor",
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
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperAnchor_default), {
        "as-child": "",
        reference: _ctx.reference
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), vueExports.mergeProps({
          ref: vueExports.unref(forwardRef),
          "as-child": _ctx.asChild,
          as: _ctx.as
        }, _ctx.$attrs), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["as-child", "as"])]),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
var ComboboxAnchor_default = ComboboxAnchor_vue_vue_type_script_setup_true_lang_default;
function queryCheckedElement(parentEl) {
  return parentEl?.querySelector("[data-state=checked]");
}
function valueComparator(value, currentValue, comparator) {
  if (value === void 0) return false;
  else if (Array.isArray(value)) return value.some((val) => compare(val, currentValue, comparator));
  else return compare(value, currentValue, comparator);
}
function compare(value, currentValue, comparator) {
  if (value === void 0 || currentValue === void 0) return false;
  if (typeof value === "string") return value === currentValue;
  if (typeof comparator === "function") return comparator(value, currentValue);
  if (typeof comparator === "string") return value?.[comparator] === currentValue?.[comparator];
  return isEqual(value, currentValue);
}
const [injectListboxRootContext, provideListboxRootContext] = createContext("ListboxRoot");
var ListboxRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: false
    },
    defaultValue: {
      type: null,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false
    },
    orientation: {
      type: String,
      required: false,
      default: "vertical"
    },
    dir: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    selectionBehavior: {
      type: String,
      required: false,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: false
    },
    by: {
      type: [String, Function],
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
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { multiple, highlightOnHover, orientation, disabled, selectionBehavior, dir: propDir } = vueExports.toRefs(props);
    const { getItems } = useCollection({ isProvider: true });
    const { handleTypeaheadSearch } = useTypeahead();
    const { primitiveElement, currentElement } = usePrimitiveElement();
    const kbd = useKbd();
    const dir = useDirection(propDir);
    const isFormControl = useFormControl(currentElement);
    const firstValue = vueExports.ref();
    const isUserAction = vueExports.ref(false);
    const focusable = vueExports.ref(true);
    const modelValue = useVModel$1(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
      passive: props.modelValue === void 0,
      deep: true
    });
    function onValueChange(val) {
      isUserAction.value = true;
      if (props.multiple) {
        const modelArray = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
        const index = modelArray.findIndex((i) => compare(i, val, props.by));
        if (props.selectionBehavior === "toggle") {
          index === -1 ? modelArray.push(val) : modelArray.splice(index, 1);
          modelValue.value = modelArray;
        } else {
          modelValue.value = [val];
          firstValue.value = val;
        }
      } else if (props.selectionBehavior === "toggle") if (compare(modelValue.value, val, props.by)) modelValue.value = void 0;
      else modelValue.value = val;
      else modelValue.value = val;
      setTimeout(() => {
        isUserAction.value = false;
      }, 1);
    }
    const highlightedElement = vueExports.ref(null);
    const previousElement = vueExports.ref(null);
    const isVirtual = vueExports.ref(false);
    const isComposing = vueExports.ref(false);
    const virtualFocusHook = createEventHook();
    const virtualKeydownHook = createEventHook();
    const virtualHighlightHook = createEventHook();
    function getCollectionItem() {
      return getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "");
    }
    function changeHighlight(el, scrollIntoView = true) {
      if (!el) return;
      highlightedElement.value = el;
      if (focusable.value) highlightedElement.value.focus();
      if (scrollIntoView) highlightedElement.value.scrollIntoView({ block: "nearest" });
      const highlightedItem = getItems().find((i) => i.ref === el);
      emits("highlight", highlightedItem);
    }
    function highlightItem(value) {
      if (isVirtual.value) virtualHighlightHook.trigger(value);
      else {
        const item = getItems().find((i) => compare(i.value, value, props.by));
        if (item) {
          highlightedElement.value = item.ref;
          changeHighlight(item.ref);
        }
      }
    }
    function onKeydownEnter(event) {
      if (highlightedElement.value && highlightedElement.value.isConnected) {
        event.preventDefault();
        event.stopPropagation();
        if (!isComposing.value) highlightedElement.value.click();
      }
    }
    function onKeydownTypeAhead(event) {
      if (!focusable.value) return;
      isUserAction.value = true;
      if (isVirtual.value) virtualKeydownHook.trigger(event);
      else {
        const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
        if (isMetaKey && event.key === "a" && multiple.value) {
          const collection = getItems();
          const values = collection.map((i) => i.value);
          modelValue.value = [...values];
          event.preventDefault();
          changeHighlight(collection[collection.length - 1].ref);
        } else if (!isMetaKey) {
          const el = handleTypeaheadSearch(event.key, getItems());
          if (el) changeHighlight(el);
        }
      }
      setTimeout(() => {
        isUserAction.value = false;
      }, 1);
    }
    function onCompositionStart() {
      isComposing.value = true;
    }
    function onCompositionEnd() {
      vueExports.nextTick(() => {
        isComposing.value = false;
      });
    }
    function highlightFirstItem() {
      vueExports.nextTick(() => {
        const event = new KeyboardEvent("keydown", { key: "PageUp" });
        onKeydownNavigation(event);
      });
    }
    function onLeave(event) {
      const el = highlightedElement.value;
      if (el?.isConnected) previousElement.value = el;
      highlightedElement.value = null;
      emits("leave", event);
    }
    function onEnter(event) {
      const entryFocusEvent = new CustomEvent("listbox.entryFocus", {
        bubbles: false,
        cancelable: true
      });
      event.currentTarget?.dispatchEvent(entryFocusEvent);
      emits("entryFocus", entryFocusEvent);
      if (entryFocusEvent.defaultPrevented) return;
      if (previousElement.value) changeHighlight(previousElement.value);
      else {
        const el = getCollectionItem()?.[0];
        changeHighlight(el);
      }
    }
    function onKeydownNavigation(event) {
      const intent = getFocusIntent(event, orientation.value, dir.value);
      if (!intent) return;
      let collection = getCollectionItem();
      if (highlightedElement.value) {
        if (intent === "last") collection.reverse();
        else if (intent === "prev" || intent === "next") {
          if (intent === "prev") collection.reverse();
          const currentIndex = collection.indexOf(highlightedElement.value);
          collection = collection.slice(currentIndex + 1);
        }
        handleMultipleReplace(event, collection[0]);
      }
      if (collection.length) {
        const index = !highlightedElement.value && intent === "prev" ? collection.length - 1 : 0;
        changeHighlight(collection[index]);
      }
      if (isVirtual.value) return virtualKeydownHook.trigger(event);
    }
    function handleMultipleReplace(event, targetEl) {
      if (isVirtual.value || props.selectionBehavior !== "replace" || !multiple.value || !Array.isArray(modelValue.value)) return;
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      if (isMetaKey && !event.shiftKey) return;
      if (event.shiftKey) {
        const collection = getItems().filter((i) => i.ref.dataset.disabled !== "");
        let lastValue = collection.find((i) => i.ref === targetEl)?.value;
        if (event.key === kbd.END) lastValue = collection[collection.length - 1].value;
        else if (event.key === kbd.HOME) lastValue = collection[0].value;
        if (!lastValue || !firstValue.value) return;
        const values = findValuesBetween(collection.map((i) => i.value), firstValue.value, lastValue);
        modelValue.value = values;
      }
    }
    async function highlightSelected(event) {
      await vueExports.nextTick();
      if (isVirtual.value) virtualFocusHook.trigger(event);
      else {
        const collection = getCollectionItem();
        const item = collection.find((i) => i.dataset.state === "checked");
        if (item) changeHighlight(item);
        else if (collection.length) changeHighlight(collection[0]);
      }
    }
    vueExports.watch(modelValue, () => {
      if (!isUserAction.value) vueExports.nextTick(() => {
        highlightSelected();
      });
    }, {
      immediate: true,
      deep: true
    });
    __expose({
      highlightedElement,
      highlightItem,
      highlightFirstItem,
      highlightSelected,
      getItems
    });
    provideListboxRootContext({
      modelValue,
      onValueChange,
      multiple,
      orientation,
      dir,
      disabled,
      highlightOnHover,
      highlightedElement,
      isVirtual,
      virtualFocusHook,
      virtualKeydownHook,
      virtualHighlightHook,
      by: props.by,
      firstValue,
      selectionBehavior,
      focusable,
      onLeave,
      onEnter,
      changeHighlight,
      onKeydownEnter,
      onKeydownNavigation,
      onKeydownTypeAhead,
      onCompositionStart,
      onCompositionEnd,
      highlightFirstItem
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        dir: vueExports.unref(dir),
        "data-disabled": vueExports.unref(disabled) ? "" : void 0,
        onPointerleave: onLeave,
        onFocusout: _cache[0] || (_cache[0] = async (event) => {
          const target = event.relatedTarget || event.target;
          await vueExports.nextTick();
          if (highlightedElement.value && vueExports.unref(currentElement) && !vueExports.unref(currentElement).contains(target)) onLeave(event);
        })
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { modelValue: vueExports.unref(modelValue) }), vueExports.unref(isFormControl) && _ctx.name ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VisuallyHiddenInput_default), {
          key: 0,
          name: _ctx.name,
          value: vueExports.unref(modelValue),
          disabled: vueExports.unref(disabled),
          required: _ctx.required
        }, null, 8, [
          "name",
          "value",
          "disabled",
          "required"
        ])) : vueExports.createCommentVNode("v-if", true)]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "dir",
        "data-disabled"
      ]);
    };
  }
});
var ListboxRoot_default = ListboxRoot_vue_vue_type_script_setup_true_lang_default;
var ListboxContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ListboxContent",
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
    const { CollectionSlot } = useCollection();
    const rootContext = injectListboxRootContext();
    const isClickFocus = refAutoReset(false, 10);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(CollectionSlot), null, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), {
          role: "listbox",
          as: _ctx.as,
          "as-child": _ctx.asChild,
          tabindex: vueExports.unref(rootContext).focusable.value ? vueExports.unref(rootContext).highlightedElement.value ? "-1" : "0" : "-1",
          "aria-orientation": vueExports.unref(rootContext).orientation.value,
          "aria-multiselectable": !!vueExports.unref(rootContext).multiple.value,
          "data-orientation": vueExports.unref(rootContext).orientation.value,
          onMousedown: _cache[0] || (_cache[0] = vueExports.withModifiers(($event) => isClickFocus.value = true, ["left"])),
          onFocus: _cache[1] || (_cache[1] = (ev) => {
            if (vueExports.unref(isClickFocus)) return;
            vueExports.unref(rootContext).onEnter(ev);
          }),
          onKeydown: [
            _cache[2] || (_cache[2] = vueExports.withKeys((event) => {
              if (vueExports.unref(rootContext).orientation.value === "vertical" && (event.key === "ArrowLeft" || event.key === "ArrowRight") || vueExports.unref(rootContext).orientation.value === "horizontal" && (event.key === "ArrowUp" || event.key === "ArrowDown")) return;
              event.preventDefault();
              vueExports.unref(rootContext).focusable.value && vueExports.unref(rootContext).onKeydownNavigation(event);
            }, [
              "down",
              "up",
              "left",
              "right",
              "home",
              "end"
            ])),
            vueExports.withKeys(vueExports.unref(rootContext).onKeydownEnter, ["enter"]),
            vueExports.unref(rootContext).onKeydownTypeAhead
          ]
        }, {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "tabindex",
          "aria-orientation",
          "aria-multiselectable",
          "data-orientation",
          "onKeydown"
        ])]),
        _: 3
      });
    };
  }
});
var ListboxContent_default = ListboxContent_vue_vue_type_script_setup_true_lang_default;
var ListboxFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: false
    },
    autoFocus: {
      type: Boolean,
      required: false
    },
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
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel$1(props, "modelValue", emits, {
      defaultValue: "",
      passive: props.modelValue === void 0
    });
    const rootContext = injectListboxRootContext();
    const { primitiveElement } = usePrimitiveElement();
    const disabled = vueExports.computed(() => props.disabled || rootContext.disabled.value || false);
    const activedescendant = vueExports.ref();
    vueExports.watchSyncEffect(() => activedescendant.value = rootContext.highlightedElement.value?.id);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        value: vueExports.unref(modelValue),
        disabled: disabled.value ? "" : void 0,
        "data-disabled": disabled.value ? "" : void 0,
        "aria-disabled": disabled.value ?? void 0,
        "aria-activedescendant": activedescendant.value,
        type: "text",
        onKeydown: [vueExports.withKeys(vueExports.withModifiers(vueExports.unref(rootContext).onKeydownNavigation, ["prevent"]), [
          "down",
          "up",
          "home",
          "end"
        ]), vueExports.withKeys(vueExports.unref(rootContext).onKeydownEnter, ["enter"])],
        onInput: _cache[0] || (_cache[0] = (event) => {
          modelValue.value = event.target.value;
          vueExports.unref(rootContext).highlightFirstItem();
        }),
        onCompositionstart: vueExports.unref(rootContext).onCompositionStart,
        onCompositionend: vueExports.unref(rootContext).onCompositionEnd
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { modelValue: vueExports.unref(modelValue) })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "value",
        "disabled",
        "data-disabled",
        "aria-disabled",
        "aria-activedescendant",
        "onKeydown",
        "onCompositionstart",
        "onCompositionend"
      ]);
    };
  }
});
var ListboxFilter_default = ListboxFilter_vue_vue_type_script_setup_true_lang_default;
const [injectListboxGroupContext, provideListboxGroupContext] = createContext("ListboxGroup");
var ListboxGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ListboxGroup",
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
    const id = useId(void 0, "reka-listbox-group");
    provideListboxGroupContext({ id });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps({ role: "group" }, props, { "aria-labelledby": vueExports.unref(id) }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["aria-labelledby"]);
    };
  }
});
var ListboxGroup_default = ListboxGroup_vue_vue_type_script_setup_true_lang_default;
const LISTBOX_SELECT = "listbox.select";
const [injectListboxItemContext, provideListboxItemContext] = createContext("ListboxItem");
var ListboxItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: true
    },
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
      default: "div"
    }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const id = useId(void 0, "reka-listbox-item");
    const { CollectionItem } = useCollection();
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectListboxRootContext();
    const isHighlighted = vueExports.computed(() => currentElement.value === rootContext.highlightedElement.value);
    const isSelected = vueExports.computed(() => valueComparator(rootContext.modelValue.value, props.value, rootContext.by));
    const disabled = vueExports.computed(() => rootContext.disabled.value || props.disabled);
    async function handleSelect(ev) {
      emits("select", ev);
      if (ev?.defaultPrevented) return;
      if (!disabled.value && ev) {
        rootContext.onValueChange(props.value);
        rootContext.changeHighlight(currentElement.value);
      }
    }
    function handleSelectCustomEvent(ev) {
      const eventDetail = {
        originalEvent: ev,
        value: props.value
      };
      handleAndDispatchCustomEvent(LISTBOX_SELECT, handleSelect, eventDetail);
    }
    provideListboxItemContext({ isSelected });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(CollectionItem), { value: _ctx.value }, {
        default: vueExports.withCtx(() => [vueExports.withMemo([isHighlighted.value, isSelected.value], () => vueExports.createVNode(vueExports.unref(Primitive), vueExports.mergeProps({ id: vueExports.unref(id) }, _ctx.$attrs, {
          ref: vueExports.unref(forwardRef),
          role: "option",
          tabindex: vueExports.unref(rootContext).focusable.value ? isHighlighted.value ? "0" : "-1" : -1,
          "aria-selected": isSelected.value,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          disabled: disabled.value ? "" : void 0,
          "data-disabled": disabled.value ? "" : void 0,
          "data-highlighted": isHighlighted.value ? "" : void 0,
          "data-state": isSelected.value ? "checked" : "unchecked",
          onClick: handleSelectCustomEvent,
          onKeydown: vueExports.withKeys(vueExports.withModifiers(handleSelectCustomEvent, ["prevent"]), ["space"]),
          onPointermove: _cache[0] || (_cache[0] = () => {
            if (vueExports.unref(rootContext).highlightedElement.value === vueExports.unref(currentElement)) return;
            if (vueExports.unref(rootContext).highlightOnHover.value && !vueExports.unref(rootContext).focusable.value) vueExports.unref(rootContext).changeHighlight(vueExports.unref(currentElement), false);
          })
        }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "tabindex",
          "aria-selected",
          "as",
          "as-child",
          "disabled",
          "data-disabled",
          "data-highlighted",
          "data-state",
          "onKeydown"
        ]), _cache, 1)]),
        _: 3
      }, 8, ["value"]);
    };
  }
});
var ListboxItem_default = ListboxItem_vue_vue_type_script_setup_true_lang_default;
var ListboxItemIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ListboxItemIndicator",
  props: {
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
    const props = __props;
    useForwardExpose();
    const itemContext = injectListboxItemContext();
    return (_ctx, _cache) => {
      return vueExports.unref(itemContext).isSelected.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps({
        key: 0,
        "aria-hidden": "true"
      }, props), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16)) : vueExports.createCommentVNode("v-if", true);
    };
  }
});
var ListboxItemIndicator_default = ListboxItemIndicator_vue_vue_type_script_setup_true_lang_default;
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  function memoizedFunction() {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${""}`);
  } else {
    return value;
  }
}
const approxEqual = (a, b) => Math.abs(a - b) < 1.01;
const debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};
const getRect = (element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
};
const defaultKeyExtractor = (index) => index;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const addEventListenerOptions = {
  passive: true
};
const supportsScrollend = true;
const observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
};
const measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
const elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get2 = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              this._measureElement(entry.target, entry);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get2()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: "production" !== "production",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i = min; i < count; i++) {
          const key = getItemKey(i);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "production" !== "production",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset,
          lanes
        }) : null;
      },
      {
        key: "production" !== "production",
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count
        });
      },
      {
        key: "production" !== "production",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index = this.indexFromElement(node);
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index, size) => {
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "production" !== "production",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size) / 2;
      } else if (align === "end") {
        toOffset -= size;
      }
      const maxOffset = this.getTotalSize() + this.options.scrollMargin - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.measurementsCache[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      index = Math.max(0, Math.min(index, this.options.count - 1));
      let attempts = 0;
      const maxAttempts = 10;
      const tryScroll = (currentAlign) => {
        if (!this.targetWindow) return;
        const offsetInfo = this.getOffsetForIndex(index, currentAlign);
        if (!offsetInfo) {
          console.warn("Failed to get offset for index:", index);
          return;
        }
        const [offset, align] = offsetInfo;
        this._scrollToOffset(offset, { adjustments: void 0, behavior });
        this.targetWindow.requestAnimationFrame(() => {
          const currentOffset = this.getScrollOffset();
          const afterInfo = this.getOffsetForIndex(index, align);
          if (!afterInfo) {
            console.warn("Failed to get offset for index:", index);
            return;
          }
          if (!approxEqual(afterInfo[0], currentOffset)) {
            scheduleRetry(align);
          }
        });
      };
      const scheduleRetry = (align) => {
        if (!this.targetWindow) return;
        attempts++;
        if (attempts < maxAttempts) {
          this.targetWindow.requestAnimationFrame(() => tryScroll(align));
        } else {
          console.warn(
            `Failed to scroll to index ${index} after ${maxAttempts} attempts.`
          );
        }
      };
      tryScroll(initialAlign);
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        end = ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0;
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset,
  lanes
}) {
  const lastIndex = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  if (measurements.length <= lanes) {
    return {
      startIndex: 0,
      endIndex: lastIndex
    };
  }
  let startIndex = findNearestBinarySearch(
    0,
    lastIndex,
    getOffset,
    scrollOffset
  );
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}
function useVirtualizerBase(options) {
  const virtualizer = new Virtualizer(vueExports.unref(options));
  const state = vueExports.shallowRef(virtualizer);
  const cleanup = virtualizer._didMount();
  vueExports.watch(
    () => vueExports.unref(options).getScrollElement(),
    (el) => {
      if (el) {
        virtualizer._willUpdate();
      }
    },
    {
      immediate: true
    }
  );
  vueExports.watch(
    () => vueExports.unref(options),
    (options2) => {
      virtualizer.setOptions({
        ...options2,
        onChange: (instance, sync) => {
          var _a;
          vueExports.triggerRef(state);
          (_a = options2.onChange) == null ? void 0 : _a.call(options2, instance, sync);
        }
      });
      virtualizer._willUpdate();
      vueExports.triggerRef(state);
    },
    {
      immediate: true
    }
  );
  vueExports.onScopeDispose(cleanup);
  return state;
}
function useVirtualizer(options) {
  return useVirtualizerBase(
    vueExports.computed(() => ({
      observeElementRect,
      observeElementOffset,
      scrollToFn: elementScroll,
      ...vueExports.unref(options)
    }))
  );
}
var ListboxVirtualizer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ListboxVirtualizer",
  props: {
    options: {
      type: Array,
      required: true
    },
    overscan: {
      type: Number,
      required: false
    },
    estimateSize: {
      type: Number,
      required: false
    },
    textContent: {
      type: Function,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const slots = vueExports.useSlots();
    const rootContext = injectListboxRootContext();
    const parentEl = useParentElement();
    const { getItems } = useCollection();
    rootContext.isVirtual.value = true;
    const padding = vueExports.computed(() => {
      const el = parentEl.value;
      if (!el) return {
        start: 0,
        end: 0
      };
      else {
        const styles = (void 0).getComputedStyle(el);
        return {
          start: Number.parseFloat(styles.paddingBlockStart || styles.paddingTop),
          end: Number.parseFloat(styles.paddingBlockEnd || styles.paddingBottom)
        };
      }
    });
    const virtualizer = useVirtualizer({
      get scrollPaddingStart() {
        return padding.value.start;
      },
      get scrollPaddingEnd() {
        return padding.value.end;
      },
      get count() {
        return props.options.length;
      },
      get horizontal() {
        return rootContext.orientation.value === "horizontal";
      },
      estimateSize() {
        return props.estimateSize ?? 28;
      },
      getScrollElement() {
        return parentEl.value;
      },
      overscan: props.overscan ?? 12
    });
    const virtualizedItems = vueExports.computed(() => virtualizer.value.getVirtualItems().map((item) => {
      const defaultNode = slots.default({
        option: props.options[item.index],
        virtualizer: virtualizer.value,
        virtualItem: item
      })[0];
      const targetNode = defaultNode.type === vueExports.Fragment && Array.isArray(defaultNode.children) ? defaultNode.children[0] : defaultNode;
      return {
        item,
        is: vueExports.cloneVNode(targetNode, {
          "key": `${item.key}`,
          "data-index": item.index,
          "aria-setsize": props.options.length,
          "aria-posinset": item.index + 1,
          "style": {
            position: "absolute",
            top: 0,
            left: 0,
            transform: `translateY(${item.start}px)`,
            overflowAnchor: "none"
          }
        })
      };
    }));
    rootContext.virtualFocusHook.on((event) => {
      const index = props.options.findIndex((option) => {
        if (Array.isArray(rootContext.modelValue.value)) return compare(option, rootContext.modelValue.value[0], rootContext.by);
        else return compare(option, rootContext.modelValue.value, rootContext.by);
      });
      if (index !== -1) {
        event?.preventDefault();
        virtualizer.value.scrollToIndex(index, { align: "start" });
        requestAnimationFrame(() => {
          const item = queryCheckedElement(parentEl.value);
          if (item) {
            rootContext.changeHighlight(item);
            if (event) item?.focus();
          }
        });
      } else rootContext.highlightFirstItem();
    });
    rootContext.virtualHighlightHook.on((value) => {
      const index = props.options.findIndex((option) => {
        return compare(option, value, rootContext.by);
      });
      virtualizer.value.scrollToIndex(index, { align: "start" });
      requestAnimationFrame(() => {
        const item = queryCheckedElement(parentEl.value);
        if (item) rootContext.changeHighlight(item);
      });
    });
    const search = refAutoReset("", 1e3);
    const optionsWithMetadata = vueExports.computed(() => {
      const parseTextContent = (option) => {
        if (props.textContent) return props.textContent(option);
        else return option?.toString().toLowerCase();
      };
      return props.options.map((option, index) => ({
        index,
        textContent: parseTextContent(option)
      }));
    });
    function handleMultipleReplace(event, intent) {
      if (!rootContext.firstValue?.value || !rootContext.multiple.value || !Array.isArray(rootContext.modelValue.value)) return;
      const collection = getItems().filter((i) => i.ref.dataset.disabled !== "");
      const lastValue = collection.find((i) => i.ref === rootContext.highlightedElement.value)?.value;
      if (!lastValue) return;
      let value = null;
      switch (intent) {
        case "prev":
        case "next": {
          value = findValuesBetween(props.options, rootContext.firstValue.value, lastValue);
          break;
        }
        case "first": {
          value = findValuesBetween(props.options, rootContext.firstValue.value, props.options?.[0]);
          break;
        }
        case "last": {
          value = findValuesBetween(props.options, rootContext.firstValue.value, props.options?.[props.options.length - 1]);
          break;
        }
      }
      rootContext.modelValue.value = value;
    }
    rootContext.virtualKeydownHook.on((event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) return;
      let intent = MAP_KEY_TO_FOCUS_INTENT[event.key];
      if (isMetaKey && event.key === "a" && rootContext.multiple.value) {
        event.preventDefault();
        rootContext.modelValue.value = [...props.options];
        intent = "last";
      } else if (event.shiftKey && intent) handleMultipleReplace(event, intent);
      if (["first", "last"].includes(intent)) {
        event.preventDefault();
        const index = intent === "first" ? 0 : props.options.length - 1;
        virtualizer.value.scrollToIndex(index);
        requestAnimationFrame(() => {
          const items = getItems();
          const item = intent === "first" ? items[0] : items[items.length - 1];
          if (item) rootContext.changeHighlight(item.ref);
        });
      } else if (!intent && !isMetaKey) {
        search.value += event.key;
        const currentIndex = Number(getActiveElement()?.getAttribute("data-index"));
        const currentMatch = optionsWithMetadata.value[currentIndex].textContent;
        const filteredOptions = optionsWithMetadata.value.map((i) => i.textContent ?? "");
        const next = getNextMatch(filteredOptions, search.value, currentMatch);
        const nextMatch = optionsWithMetadata.value.find((option) => option.textContent === next);
        if (nextMatch) {
          virtualizer.value.scrollToIndex(nextMatch.index, { align: "start" });
          requestAnimationFrame(() => {
            const item = parentEl.value.querySelector(`[data-index="${nextMatch.index}"]`);
            if (item instanceof HTMLElement) rootContext.changeHighlight(item);
          });
        }
      }
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createElementBlock("div", {
        "data-reka-virtualizer": "",
        style: vueExports.normalizeStyle({
          position: "relative",
          width: "100%",
          height: `${vueExports.unref(virtualizer).getTotalSize()}px`
        })
      }, [(vueExports.openBlock(true), vueExports.createElementBlock(vueExports.Fragment, null, vueExports.renderList(virtualizedItems.value, ({ is, item }) => {
        return vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(is), { key: item.index });
      }), 128))], 4);
    };
  }
});
var ListboxVirtualizer_default = ListboxVirtualizer_vue_vue_type_script_setup_true_lang_default;
const [injectComboboxRootContext, provideComboboxRootContext] = createContext("ComboboxRoot");
var ComboboxRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: false
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: false,
      default: true
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      required: false,
      default: false
    },
    openOnClick: {
      type: Boolean,
      required: false,
      default: false
    },
    ignoreFilter: {
      type: Boolean,
      required: false
    },
    resetModelValueOnClear: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: null,
      required: false
    },
    defaultValue: {
      type: null,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    highlightOnHover: {
      type: Boolean,
      required: false,
      default: true
    },
    by: {
      type: [String, Function],
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
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
    const { multiple, disabled, ignoreFilter, resetSearchTermOnSelect, openOnFocus, openOnClick, dir: propDir, resetModelValueOnClear, highlightOnHover } = vueExports.toRefs(props);
    const dir = useDirection(propDir);
    const modelValue = useVModel$1(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
      passive: props.modelValue === void 0,
      deep: true
    });
    const open = useVModel$1(props, "open", emits, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    async function onOpenChange(val) {
      open.value = val;
      filterSearch.value = "";
      if (val) {
        await vueExports.nextTick();
        primitiveElement.value?.highlightSelected();
        isUserInputted.value = true;
      } else isUserInputted.value = false;
      inputElement.value?.focus();
      setTimeout(() => {
        if (!val && props.resetSearchTermOnBlur) resetSearchTerm.trigger();
      }, 1);
    }
    const resetSearchTerm = createEventHook();
    const isUserInputted = vueExports.ref(false);
    const isVirtual = vueExports.ref(false);
    const inputElement = vueExports.ref();
    const triggerElement = vueExports.ref();
    const highlightedElement = vueExports.computed(() => primitiveElement.value?.highlightedElement ?? void 0);
    const allItems = vueExports.ref(/* @__PURE__ */ new Map());
    const allGroups = vueExports.ref(/* @__PURE__ */ new Map());
    const { contains } = useFilter({ sensitivity: "base" });
    const filterSearch = vueExports.ref("");
    const filterState = vueExports.computed((oldValue) => {
      if (!filterSearch.value || props.ignoreFilter || isVirtual.value) return {
        count: allItems.value.size,
        items: oldValue?.items ?? /* @__PURE__ */ new Map(),
        groups: oldValue?.groups ?? new Set(allGroups.value.keys())
      };
      let itemCount = 0;
      const filteredItems = /* @__PURE__ */ new Map();
      const filteredGroups = /* @__PURE__ */ new Set();
      for (const [id, value] of allItems.value) {
        const score = contains(value, filterSearch.value);
        filteredItems.set(id, score ? 1 : 0);
        if (score) itemCount++;
      }
      for (const [groupId, group] of allGroups.value) for (const itemId of group) if (filteredItems.get(itemId) > 0) {
        filteredGroups.add(groupId);
        break;
      }
      return {
        count: itemCount,
        items: filteredItems,
        groups: filteredGroups
      };
    });
    vueExports.getCurrentInstance();
    __expose({
      filtered: filterState,
      highlightedElement,
      highlightItem: primitiveElement.value?.highlightItem,
      highlightFirstItem: primitiveElement.value?.highlightFirstItem,
      highlightSelected: primitiveElement.value?.highlightSelected
    });
    provideComboboxRootContext({
      modelValue,
      multiple,
      disabled,
      open,
      onOpenChange,
      contentId: "",
      isUserInputted,
      isVirtual,
      inputElement,
      highlightedElement,
      onInputElementChange: (val) => inputElement.value = val,
      triggerElement,
      onTriggerElementChange: (val) => triggerElement.value = val,
      parentElement,
      resetSearchTermOnSelect,
      onResetSearchTerm: resetSearchTerm.on,
      allItems,
      allGroups,
      filterSearch,
      filterState,
      ignoreFilter,
      openOnFocus,
      openOnClick,
      resetModelValueOnClear
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperRoot_default), null, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(ListboxRoot_default), vueExports.mergeProps({
          ref_key: "primitiveElement",
          ref: primitiveElement
        }, _ctx.$attrs, {
          modelValue: vueExports.unref(modelValue),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vueExports.isRef(modelValue) ? modelValue.value = $event : null),
          style: { pointerEvents: vueExports.unref(open) ? "auto" : void 0 },
          as: _ctx.as,
          "as-child": _ctx.asChild,
          dir: vueExports.unref(dir),
          multiple: vueExports.unref(multiple),
          name: _ctx.name,
          required: _ctx.required,
          disabled: vueExports.unref(disabled),
          "highlight-on-hover": vueExports.unref(highlightOnHover),
          by: props.by,
          onHighlight: _cache[1] || (_cache[1] = ($event) => emits("highlight", $event))
        }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {
            open: vueExports.unref(open),
            modelValue: vueExports.unref(modelValue)
          })]),
          _: 3
        }, 16, [
          "modelValue",
          "style",
          "as",
          "as-child",
          "dir",
          "multiple",
          "name",
          "required",
          "disabled",
          "highlight-on-hover",
          "by"
        ])]),
        _: 3
      });
    };
  }
});
var ComboboxRoot_default = ComboboxRoot_vue_vue_type_script_setup_true_lang_default;
const [injectComboboxContentContext, provideComboboxContentContext] = createContext("ComboboxContent");
var ComboboxContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: false,
      default: "inline"
    },
    bodyLock: {
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
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { position } = vueExports.toRefs(props);
    const rootContext = injectComboboxRootContext();
    const { forwardRef } = useForwardExpose();
    useBodyScrollLock(props.bodyLock);
    useHideOthers(rootContext.parentElement);
    const pickedProps = vueExports.computed(() => {
      if (props.position === "popper") return props;
      else return {};
    });
    const forwardedProps = useForwardProps(pickedProps.value);
    const popperStyle = {
      "boxSizing": "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    provideComboboxContentContext({ position });
    vueExports.ref(false);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ListboxContent_default), { "as-child": "" }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(DismissableLayer_default), {
          "as-child": "",
          "disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
          onDismiss: _cache[0] || (_cache[0] = ($event) => vueExports.unref(rootContext).onOpenChange(false)),
          onFocusOutside: _cache[1] || (_cache[1] = (ev) => {
            if (vueExports.unref(rootContext).parentElement.value?.contains(ev.target)) ev.preventDefault();
            emits("focusOutside", ev);
          }),
          onInteractOutside: _cache[2] || (_cache[2] = ($event) => emits("interactOutside", $event)),
          onEscapeKeyDown: _cache[3] || (_cache[3] = ($event) => emits("escapeKeyDown", $event)),
          onPointerDownOutside: _cache[4] || (_cache[4] = (ev) => {
            if (vueExports.unref(rootContext).parentElement.value?.contains(ev.target)) ev.preventDefault();
            emits("pointerDownOutside", ev);
          })
        }, {
          default: vueExports.withCtx(() => [(vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(vueExports.unref(position) === "popper" ? vueExports.unref(PopperContent_default) : vueExports.unref(Primitive)), vueExports.mergeProps({
            ..._ctx.$attrs,
            ...vueExports.unref(forwardedProps)
          }, {
            id: vueExports.unref(rootContext).contentId,
            ref: vueExports.unref(forwardRef),
            "data-state": vueExports.unref(rootContext).open.value ? "open" : "closed",
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none",
              ...vueExports.unref(position) === "popper" ? popperStyle : {}
            }
          }), {
            default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "style"
          ]))]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      });
    };
  }
});
var ComboboxContentImpl_default = ComboboxContentImpl_vue_vue_type_script_setup_true_lang_default;
var ComboboxArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxArrow",
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
    const rootContext = injectComboboxRootContext();
    const contentContext = injectComboboxContentContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.unref(rootContext).open.value && vueExports.unref(contentContext).position.value === "popper" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PopperArrow_default), vueExports.normalizeProps(vueExports.mergeProps({ key: 0 }, props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16)) : vueExports.createCommentVNode("v-if", true);
    };
  }
});
var ComboboxArrow_default = ComboboxArrow_vue_vue_type_script_setup_true_lang_default;
var ComboboxContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    position: {
      type: String,
      required: false
    },
    bodyLock: {
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
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    const rootContext = injectComboboxRootContext();
    rootContext.contentId ||= useId(void 0, "reka-combobox-content");
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), { present: _ctx.forceMount || vueExports.unref(rootContext).open.value }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(ComboboxContentImpl_default, vueExports.mergeProps({
          ...vueExports.unref(forwarded),
          ..._ctx.$attrs
        }, { ref: vueExports.unref(forwardRef) }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var ComboboxContent_default = ComboboxContent_vue_vue_type_script_setup_true_lang_default;
var ComboboxEmpty_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxEmpty",
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
    const rootContext = injectComboboxRootContext();
    const isRender = vueExports.computed(() => rootContext.ignoreFilter.value ? rootContext.allItems.value.size === 0 : rootContext.filterState.value.count === 0);
    return (_ctx, _cache) => {
      return isRender.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.normalizeProps(vueExports.mergeProps({ key: 0 }, props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = vueExports.createTextVNode("No options"))])]),
        _: 3
      }, 16)) : vueExports.createCommentVNode("v-if", true);
    };
  }
});
var ComboboxEmpty_default = ComboboxEmpty_vue_vue_type_script_setup_true_lang_default;
const [injectComboboxGroupContext, provideComboboxGroupContext] = createContext("ComboboxGroup");
var ComboboxGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxGroup",
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
    const id = useId(void 0, "reka-combobox-group");
    const rootContext = injectComboboxRootContext();
    const isRender = vueExports.computed(() => rootContext.ignoreFilter.value ? true : !rootContext.filterSearch.value ? true : rootContext.filterState.value.groups.has(id));
    const context = provideComboboxGroupContext({
      id,
      labelId: ""
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ListboxGroup_default), vueExports.mergeProps({
        id: vueExports.unref(id),
        "aria-labelledby": vueExports.unref(context).labelId
      }, props, { hidden: isRender.value ? void 0 : true }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "aria-labelledby",
        "hidden"
      ]);
    };
  }
});
var ComboboxGroup_default = ComboboxGroup_vue_vue_type_script_setup_true_lang_default;
var ComboboxInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: false
    },
    modelValue: {
      type: String,
      required: false
    },
    autoFocus: {
      type: Boolean,
      required: false
    },
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
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectComboboxRootContext();
    const listboxContext = injectListboxRootContext();
    const { primitiveElement } = usePrimitiveElement();
    const modelValue = useVModel$1(props, "modelValue", emits, { passive: props.modelValue === void 0 });
    function handleKeyDown(ev) {
      if (!rootContext.open.value) rootContext.onOpenChange(true);
    }
    function handleInput(event) {
      const target = event.target;
      if (!rootContext.open.value) {
        rootContext.onOpenChange(true);
        vueExports.nextTick(() => {
          if (target.value) {
            rootContext.filterSearch.value = target.value;
            listboxContext.highlightFirstItem();
          }
        });
      } else rootContext.filterSearch.value = target.value;
    }
    function handleFocus() {
      if (rootContext.openOnFocus.value && !rootContext.open.value) rootContext.onOpenChange(true);
    }
    function handleClick() {
      if (rootContext.openOnClick.value && !rootContext.open.value) rootContext.onOpenChange(true);
    }
    function resetSearchTerm() {
      const rootModelValue = rootContext.modelValue.value;
      if (props.displayValue) modelValue.value = props.displayValue(rootModelValue);
      else if (!rootContext.multiple.value && rootModelValue && !Array.isArray(rootModelValue)) if (typeof rootModelValue !== "object") modelValue.value = rootModelValue.toString();
      else modelValue.value = "";
      else modelValue.value = "";
      vueExports.nextTick(() => {
        modelValue.value = modelValue.value;
      });
    }
    rootContext.onResetSearchTerm(() => {
      resetSearchTerm();
    });
    vueExports.watch(rootContext.modelValue, async () => {
      if (!rootContext.isUserInputted.value && rootContext.resetSearchTermOnSelect.value) resetSearchTerm();
    }, {
      immediate: true,
      deep: true
    });
    vueExports.watch(rootContext.filterState, () => {
      if (!rootContext.isVirtual.value && !rootContext.highlightedElement.value) listboxContext.highlightFirstItem();
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ListboxFilter_default), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        modelValue: vueExports.unref(modelValue),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vueExports.isRef(modelValue) ? modelValue.value = $event : null),
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "auto-focus": _ctx.autoFocus,
        disabled: _ctx.disabled,
        "aria-expanded": vueExports.unref(rootContext).open.value,
        "aria-controls": vueExports.unref(rootContext).contentId,
        "aria-autocomplete": "list",
        role: "combobox",
        autocomplete: "off",
        onClick: handleClick,
        onInput: handleInput,
        onKeydown: vueExports.withKeys(vueExports.withModifiers(handleKeyDown, ["prevent"]), ["down", "up"]),
        onFocus: handleFocus
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "modelValue",
        "as",
        "as-child",
        "auto-focus",
        "disabled",
        "aria-expanded",
        "aria-controls",
        "onKeydown"
      ]);
    };
  }
});
var ComboboxInput_default = ComboboxInput_vue_vue_type_script_setup_true_lang_default;
var ComboboxItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: false
    },
    value: {
      type: null,
      required: true
    },
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
      required: false
    }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const id = useId(void 0, "reka-combobox-item");
    const rootContext = injectComboboxRootContext();
    injectComboboxGroupContext(null);
    const { primitiveElement } = usePrimitiveElement();
    if (props.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const isRender = vueExports.computed(() => {
      if (rootContext.isVirtual.value || rootContext.ignoreFilter.value || !rootContext.filterSearch.value) return true;
      else {
        const filteredCurrentItem = rootContext.filterState.value.items.get(id);
        if (filteredCurrentItem === void 0) return true;
        return filteredCurrentItem > 0;
      }
    });
    return (_ctx, _cache) => {
      return isRender.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ListboxItem_default), vueExports.mergeProps({ key: 0 }, props, {
        id: vueExports.unref(id),
        ref_key: "primitiveElement",
        ref: primitiveElement,
        disabled: vueExports.unref(rootContext).disabled.value || _ctx.disabled,
        onSelect: _cache[0] || (_cache[0] = (event) => {
          emits("select", event);
          if (event.defaultPrevented) return;
          if (!vueExports.unref(rootContext).multiple.value && !_ctx.disabled && !vueExports.unref(rootContext).disabled.value) {
            event.preventDefault();
            vueExports.unref(rootContext).onOpenChange(false);
            vueExports.unref(rootContext).modelValue.value = props.value;
          }
        })
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [vueExports.createTextVNode(vueExports.toDisplayString(_ctx.value), 1)])]),
        _: 3
      }, 16, ["id", "disabled"])) : vueExports.createCommentVNode("v-if", true);
    };
  }
});
var ComboboxItem_default = ComboboxItem_vue_vue_type_script_setup_true_lang_default;
var ComboboxItemIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxItemIndicator",
  props: {
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
    const props = __props;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ListboxItemIndicator_default), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var ComboboxItemIndicator_default = ComboboxItemIndicator_vue_vue_type_script_setup_true_lang_default;
var ComboboxLabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxLabel",
  props: {
    for: {
      type: String,
      required: false
    },
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
    useForwardExpose();
    const groupContext = injectComboboxGroupContext({
      id: "",
      labelId: ""
    });
    groupContext.labelId ||= useId(void 0, "reka-combobox-group-label");
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, { id: vueExports.unref(groupContext).labelId }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var ComboboxLabel_default = ComboboxLabel_vue_vue_type_script_setup_true_lang_default;
var ComboboxPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxPortal",
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
var ComboboxPortal_default = ComboboxPortal_vue_vue_type_script_setup_true_lang_default;
var ComboboxSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxSeparator",
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
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, { "aria-hidden": "true" }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var ComboboxSeparator_default = ComboboxSeparator_vue_vue_type_script_setup_true_lang_default;
var ComboboxTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxTrigger",
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
    const { forwardRef } = useForwardExpose();
    const rootContext = injectComboboxRootContext();
    const disabled = vueExports.computed(() => props.disabled || rootContext.disabled.value || false);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        ref: vueExports.unref(forwardRef),
        type: _ctx.as === "button" ? "button" : void 0,
        tabindex: "-1",
        "aria-label": "Show popup",
        "aria-haspopup": "listbox",
        "aria-expanded": vueExports.unref(rootContext).open.value,
        "aria-controls": vueExports.unref(rootContext).contentId,
        "data-state": vueExports.unref(rootContext).open.value ? "open" : "closed",
        disabled: disabled.value,
        "data-disabled": disabled.value ? "" : void 0,
        "aria-disabled": disabled.value ?? void 0,
        onClick: _cache[0] || (_cache[0] = ($event) => vueExports.unref(rootContext).onOpenChange(!vueExports.unref(rootContext).open.value))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "disabled",
        "data-disabled",
        "aria-disabled"
      ]);
    };
  }
});
var ComboboxTrigger_default = ComboboxTrigger_vue_vue_type_script_setup_true_lang_default;
var ComboboxVirtualizer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ComboboxVirtualizer",
  props: {
    options: {
      type: Array,
      required: true
    },
    overscan: {
      type: Number,
      required: false
    },
    estimateSize: {
      type: Number,
      required: false
    },
    textContent: {
      type: Function,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectComboboxRootContext();
    rootContext.isVirtual.value = true;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(ListboxVirtualizer_default, vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx((slotProps) => [vueExports.renderSlot(_ctx.$slots, "default", vueExports.normalizeProps(vueExports.guardReactiveProps(slotProps)))]),
        _: 3
      }, 16);
    };
  }
});
var ComboboxVirtualizer_default = ComboboxVirtualizer_vue_vue_type_script_setup_true_lang_default;
var Label_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "label"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, { onMousedown: _cache[0] || (_cache[0] = (event) => {
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }) }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var Label_default = Label_vue_vue_type_script_setup_true_lang_default;
const theme$3 = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$4 = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = vueExports.useSlots();
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.card || {} })({
      variant: props.variant
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div data-slot="header" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div data-slot="body" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                "data-slot": "header",
                class: ui.value.header({ class: props.ui?.header })
              }, [
                vueExports.renderSlot(_ctx.$slots, "header")
              ], 2)) : vueExports.createCommentVNode("", true),
              !!slots.default ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 1,
                "data-slot": "body",
                class: ui.value.body({ class: props.ui?.body })
              }, [
                vueExports.renderSlot(_ctx.$slots, "default")
              ], 2)) : vueExports.createCommentVNode("", true),
              !!slots.footer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 2,
                "data-slot": "footer",
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                vueExports.renderSlot(_ctx.$slots, "footer")
              ], 2)) : vueExports.createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "",
    "wrapper": "",
    "labelWrapper": "flex content-center items-center justify-between",
    "label": "block font-medium text-default",
    "container": "mt-1 relative",
    "description": "text-muted",
    "error": "mt-2 text-error",
    "hint": "text-muted",
    "help": "mt-2 text-muted"
  },
  "variants": {
    "size": {
      "xs": {
        "root": "text-xs"
      },
      "sm": {
        "root": "text-xs"
      },
      "md": {
        "root": "text-sm"
      },
      "lg": {
        "root": "text-sm"
      },
      "xl": {
        "root": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$3 = {
  __name: "UFormField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    errorPattern: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    help: { type: String, required: false },
    error: { type: [Boolean, String], required: false },
    hint: { type: String, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    eagerValidation: { type: Boolean, required: false },
    validateOnInputDelay: { type: Number, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = vueExports.useSlots();
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.formField || {} })({
      size: props.size,
      required: props.required
    }));
    const formErrors = vueExports.inject(formErrorsInjectionKey, null);
    const error = vueExports.computed(() => props.error || formErrors?.value?.find((error2) => error2.name === props.name || props.errorPattern && error2.name?.match(props.errorPattern))?.message);
    const id = vueExports.ref(vueExports.useId());
    const ariaId = id.value;
    const formInputs = vueExports.inject(formInputsInjectionKey, void 0);
    vueExports.watch(id, () => {
      if (formInputs && props.name) {
        formInputs.value[props.name] = { id: id.value, pattern: props.errorPattern };
      }
    }, { immediate: true });
    vueExports.provide(inputIdInjectionKey, id);
    vueExports.provide(formFieldInjectionKey, vueExports.computed(() => ({
      error: error.value,
      name: props.name,
      size: props.size,
      eagerValidation: props.eagerValidation,
      validateOnInputDelay: props.validateOnInputDelay,
      errorPattern: props.errorPattern,
      hint: props.hint,
      description: props.description,
      help: props.help,
      ariaId
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.label || !!slots.label) {
              _push2(`<div data-slot="labelWrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.labelWrapper({ class: props.ui?.labelWrapper }))}"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Label_default), {
                for: id.value,
                "data-slot": "label",
                class: ui.value.label({ class: props.ui?.label })
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                      _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      vueExports.renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                        vueExports.createTextVNode(vueExports.toDisplayString(__props.label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (__props.hint || !!slots.hint) {
                _push2(`<span${serverRenderer_cjs_prodExports.ssrRenderAttr("id", `${vueExports.unref(ariaId)}-hint`)} data-slot="hint" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.hint({ class: props.ui?.hint }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "hint", { hint: __props.hint }, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.hint)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description || !!slots.description) {
              _push2(`<p${serverRenderer_cjs_prodExports.ssrRenderAttr("id", `${vueExports.unref(ariaId)}-description`)} data-slot="description" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: props.ui?.container })])}"${_scopeId}>`);
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { error: error.value }, null, _push2, _parent2, _scopeId);
            if (typeof error.value === "string" && error.value || !!slots.error) {
              _push2(`<div${serverRenderer_cjs_prodExports.ssrRenderAttr("id", `${vueExports.unref(ariaId)}-error`)} data-slot="error" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.error({ class: props.ui?.error }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "error", { error: error.value }, () => {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(error.value)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else if (__props.help || !!slots.help) {
              _push2(`<div${serverRenderer_cjs_prodExports.ssrRenderAttr("id", `${vueExports.unref(ariaId)}-help`)} data-slot="help" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.help({ class: props.ui?.help }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "help", { help: __props.help }, () => {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.help)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  "data-slot": "labelWrapper",
                  class: ui.value.labelWrapper({ class: props.ui?.labelWrapper })
                }, [
                  vueExports.createVNode(vueExports.unref(Label_default), {
                    for: id.value,
                    "data-slot": "label",
                    class: ui.value.label({ class: props.ui?.label })
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                        vueExports.createTextVNode(vueExports.toDisplayString(__props.label), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["for", "class"]),
                  __props.hint || !!slots.hint ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 0,
                    id: `${vueExports.unref(ariaId)}-hint`,
                    "data-slot": "hint",
                    class: ui.value.hint({ class: props.ui?.hint })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, "hint", { hint: __props.hint }, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(__props.hint), 1)
                    ])
                  ], 10, ["id"])) : vueExports.createCommentVNode("", true)
                ], 2)) : vueExports.createCommentVNode("", true),
                __props.description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                  key: 1,
                  id: `${vueExports.unref(ariaId)}-description`,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  vueExports.renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    vueExports.createTextVNode(vueExports.toDisplayString(__props.description), 1)
                  ])
                ], 10, ["id"])) : vueExports.createCommentVNode("", true)
              ], 2),
              vueExports.createVNode("div", {
                class: [(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: props.ui?.container })]
              }, [
                vueExports.renderSlot(_ctx.$slots, "default", { error: error.value }),
                typeof error.value === "string" && error.value || !!slots.error ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  id: `${vueExports.unref(ariaId)}-error`,
                  "data-slot": "error",
                  class: ui.value.error({ class: props.ui?.error })
                }, [
                  vueExports.renderSlot(_ctx.$slots, "error", { error: error.value }, () => [
                    vueExports.createTextVNode(vueExports.toDisplayString(error.value), 1)
                  ])
                ], 10, ["id"])) : __props.help || !!slots.help ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 1,
                  id: `${vueExports.unref(ariaId)}-help`,
                  "data-slot": "help",
                  class: ui.value.help({ class: props.ui?.help })
                }, [
                  vueExports.renderSlot(_ctx.$slots, "help", { help: __props.help }, () => [
                    vueExports.createTextVNode(vueExports.toDisplayString(__props.help), 1)
                  ])
                ], 10, ["id"])) : vueExports.createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/FormField.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInput",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autocomplete: { type: null, required: false, default: "off" },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelModifiers: { type: Object, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig = useAppConfig();
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, emitFormFocus, ariaAttrs } = useFormField(props, { deferInputValidation: true });
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = vueExports.computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = vueExports.computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.input || {} })({
      type: props.type,
      color: color.value,
      variant: props.variant,
      size: inputSize?.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const inputRef = vueExports.useTemplateRef("inputRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
              id: vueExports.unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: __props.type,
              value: vueExports.unref(modelValue),
              name: vueExports.unref(name),
              placeholder: __props.placeholder,
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base }),
              disabled: vueExports.unref(disabled),
              required: __props.required,
              autocomplete: __props.autocomplete
            }, { ..._ctx.$attrs, ...vueExports.unref(ariaAttrs) }))}${_scopeId}>`);
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (vueExports.unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (vueExports.unref(isLeading) && vueExports.unref(leadingIconName)) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                    name: vueExports.unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$e, vueExports.mergeProps({
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (vueExports.unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (vueExports.unref(trailingIconName)) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                    name: vueExports.unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode("input", vueExports.mergeProps({
                id: vueExports.unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: __props.type,
                value: vueExports.unref(modelValue),
                name: vueExports.unref(name),
                placeholder: __props.placeholder,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base }),
                disabled: vueExports.unref(disabled),
                required: __props.required,
                autocomplete: __props.autocomplete
              }, { ..._ctx.$attrs, ...vueExports.unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: vueExports.unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              vueExports.renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              vueExports.unref(isLeading) || !!__props.avatar || !!slots.leading ? (vueExports.openBlock(), vueExports.createBlock("span", {
                key: 0,
                "data-slot": "leading",
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                vueExports.renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  vueExports.unref(isLeading) && vueExports.unref(leadingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                    key: 0,
                    name: vueExports.unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                    key: 1,
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                ])
              ], 2)) : vueExports.createCommentVNode("", true),
              vueExports.unref(isTrailing) || !!slots.trailing ? (vueExports.openBlock(), vueExports.createBlock("span", {
                key: 1,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                vueExports.renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  vueExports.unref(trailingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                    key: 0,
                    name: vueExports.unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                ])
              ], 2)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function hasDescription(item, descriptionKey) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const value = get(item, descriptionKey);
  return value !== void 0 && value !== null && value !== "";
}
function getSize(size, hasDescription2) {
  if (hasDescription2) {
    return {
      xs: 44,
      sm: 48,
      md: 52,
      lg: 56,
      xl: 60
    }[size];
  }
  return {
    xs: 24,
    sm: 28,
    md: 32,
    lg: 36,
    xl: 40
  }[size];
}
function getEstimateSize(items, size, descriptionKey) {
  const anyHasDescription = descriptionKey ? items.some((item) => hasDescription(item, descriptionKey)) : false;
  return getSize(size, anyHasDescription);
}
const theme = {
  "slots": {
    "base": [
      "relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed",
    "value": "truncate pointer-events-none",
    "placeholder": "truncate text-dimmed",
    "arrow": "fill-default",
    "content": [
      "max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col",
      "origin-(--reka-combobox-content-transform-origin) w-(--reka-combobox-trigger-width)"
    ],
    "viewport": "relative scroll-py-1 overflow-y-auto flex-1",
    "group": "p-1 isolate",
    "empty": "text-center text-muted",
    "label": "font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": [
      "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
      "transition-colors before:transition-colors"
    ],
    "itemLeadingIcon": [
      "shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
      "transition-colors"
    ],
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemWrapper": "flex-1 flex flex-col min-w-0",
    "itemLabel": "truncate",
    "itemDescription": "truncate text-muted",
    "input": "border-b border-default",
    "focusScope": "flex flex-col min-h-0"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1 text-[10px]/3 gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "empty": "p-1 text-xs"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1.5 text-[10px]/3 gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "empty": "p-1.5 text-xs"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "empty": "p-1.5 text-sm"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-2 text-xs gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "empty": "p-2 text-sm"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemLeadingChip": "size-6",
        "itemLeadingChipSize": "lg",
        "itemTrailingIcon": "size-6",
        "empty": "p-2 text-base"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    },
    "virtualize": {
      "true": {
        "viewport": "p-1 isolate"
      },
      "false": {
        "viewport": "divide-y divide-default"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "USelectMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    id: { type: String, required: false },
    placeholder: { type: String, required: false },
    searchInput: { type: [Boolean, Object], required: false, default: true },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    selectedIcon: { type: null, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    virtualize: { type: [Boolean, Object], required: false, default: false },
    valueKey: { type: null, required: false },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    items: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    createItem: { type: [Boolean, String, Object], required: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    name: { type: String, required: false },
    resetSearchTermOnBlur: { type: Boolean, required: false, default: true },
    resetSearchTermOnSelect: { type: Boolean, required: false, default: true },
    highlightOnHover: { type: Boolean, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ vueExports.mergeModels(["update:open", "change", "blur", "focus", "create", "highlight", "update:modelValue"], ["update:searchTerm"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const searchTerm = vueExports.useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const { contains } = useFilter({ sensitivity: "base" });
    const rootProps = useForwardPropsEmits(reactivePick(props, "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "highlightOnHover"), emits);
    const portalProps = usePortal(vueExports.toRef(() => props.portal));
    const contentProps = vueExports.toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = vueExports.toRef(() => props.arrow);
    const virtualizerProps = vueExports.toRef(() => {
      if (!props.virtualize) return false;
      return defu(typeof props.virtualize === "boolean" ? {} : props.virtualize, {
        estimateSize: getEstimateSize(items.value, props.size || "md", props.descriptionKey)
      });
    });
    const searchInputProps = vueExports.toRef(() => defu(props.searchInput, { placeholder: t("selectMenu.search"), variant: "none" }));
    const { emitFormBlur, emitFormFocus, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(vueExports.toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const selectSize = vueExports.computed(() => fieldGroupSize.value || formGroupSize.value);
    const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: {
          type: [Object, String, Number, Boolean],
          required: true
        },
        index: {
          type: Number,
          required: false
        }
      }
    });
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.selectMenu || {} })({
      color: color.value,
      variant: props.variant,
      size: selectSize?.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value,
      virtualize: !!props.virtualize
    }));
    function displayValue(value) {
      if (props.multiple && Array.isArray(value)) {
        const displayedValues = value.map((item) => getDisplayValue(items.value, item, {
          labelKey: props.labelKey,
          valueKey: props.valueKey
        })).filter((v) => v != null && v !== "");
        return displayedValues.length > 0 ? displayedValues.join(", ") : void 0;
      }
      return getDisplayValue(items.value, value, {
        labelKey: props.labelKey,
        valueKey: props.valueKey
      });
    }
    const groups = vueExports.computed(
      () => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []
    );
    const items = vueExports.computed(() => groups.value.flatMap((group) => group));
    const filteredGroups = vueExports.computed(() => {
      if (props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) ? props.filterFields : [props.labelKey];
      return groups.value.map((items2) => items2.filter((item) => {
        if (item === void 0 || item === null) {
          return false;
        }
        if (typeof item !== "object") {
          return contains(String(item), searchTerm.value);
        }
        if (item.type && ["label", "separator"].includes(item.type)) {
          return true;
        }
        return fields.some((field) => {
          const value = get(item, field);
          return value !== void 0 && value !== null && contains(String(value), searchTerm.value);
        });
      })).filter((group) => group.filter(
        (item) => !isSelectItem(item) || (!item.type || !["label", "separator"].includes(item.type))
      ).length > 0);
    });
    const filteredItems = vueExports.computed(() => filteredGroups.value.flatMap((group) => group));
    const createItem = vueExports.computed(() => {
      if (!props.createItem || !searchTerm.value) {
        return false;
      }
      const newItem = props.valueKey ? { [props.valueKey]: searchTerm.value } : searchTerm.value;
      if (typeof props.createItem === "object" && props.createItem.when === "always" || props.createItem === "always") {
        return !filteredItems.value.find((item) => compare$1(item, newItem, props.valueKey));
      }
      return !filteredItems.value.length;
    });
    const createItemPosition = vueExports.computed(() => typeof props.createItem === "object" ? props.createItem.position : "bottom");
    const triggerRef = vueExports.useTemplateRef("triggerRef");
    function onUpdate(value) {
      if (vueExports.toRaw(props.modelValue) === value) {
        return;
      }
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
      if (props.resetSearchTermOnSelect) {
        searchTerm.value = "";
      }
    }
    function onUpdateOpen(value) {
      let timeoutId;
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
        if (props.resetSearchTermOnBlur) {
          const STATE_ANIMATION_DELAY_MS = 100;
          timeoutId = setTimeout(() => {
            searchTerm.value = "";
          }, STATE_ANIMATION_DELAY_MS);
        }
      } else {
        const event = new FocusEvent("focus");
        emits("focus", event);
        emitFormFocus();
        clearTimeout(timeoutId);
      }
    }
    function onCreate(e) {
      e.preventDefault();
      e.stopPropagation();
      emits("create", searchTerm.value);
    }
    function onSelect(e, item) {
      if (!isSelectItem(item)) {
        return;
      }
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      item.onSelect?.(e);
    }
    function isSelectItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      triggerRef: vueExports.toRef(() => triggerRef.value?.$el)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineCreateItemTemplate), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxItem_default), {
              "data-slot": "item",
              class: ui.value.item({ class: props.ui?.item }),
              value: searchTerm.value,
              onSelect: onCreate
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-slot="itemLabel" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.itemLabel({ class: props.ui?.itemLabel }))}"${_scopeId2}>`);
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
                    _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("selectMenu.create", { label: searchTerm.value }))}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  return [
                    vueExports.createVNode("span", {
                      "data-slot": "itemLabel",
                      class: ui.value.itemLabel({ class: props.ui?.itemLabel })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                        vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                      ])
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(ComboboxItem_default), {
                "data-slot": "item",
                class: ui.value.item({ class: props.ui?.item }),
                value: searchTerm.value,
                onSelect: onCreate
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("span", {
                    "data-slot": "itemLabel",
                    class: ui.value.itemLabel({ class: props.ui?.itemLabel })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                    ])
                  ], 2)
                ]),
                _: 3
              }, 8, ["class", "value"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineItemTemplate), null, {
        default: vueExports.withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isSelectItem(item) && item.type === "label") {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxLabel_default), {
                "data-slot": "label",
                class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get)(item, props.labelKey))}`);
                  } else {
                    return [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get)(item, props.labelKey)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (isSelectItem(item) && item.type === "separator") {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxSeparator_default), {
                "data-slot": "separator",
                class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
              }, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxItem_default), {
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                disabled: isSelectItem(item) && item.disabled,
                value: props.valueKey && isSelectItem(item) ? vueExports.unref(get)(item, props.valueKey) : item,
                onSelect: ($event) => onSelect($event, item)
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "item", {
                      item,
                      index,
                      ui: ui.value
                    }, () => {
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "item-leading", {
                        item,
                        index,
                        ui: ui.value
                      }, () => {
                        if (isSelectItem(item) && item.icon) {
                          _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                          }, null, _parent3, _scopeId2));
                        } else if (isSelectItem(item) && item.avatar) {
                          _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$e, vueExports.mergeProps({
                            size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                          }), null, _parent3, _scopeId2));
                        } else if (isSelectItem(item) && item.chip) {
                          _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$f, vueExports.mergeProps({
                            size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`<span data-slot="itemWrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] }))}"${_scopeId2}><span data-slot="itemLabel" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] }))}"${_scopeId2}>`);
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "item-label", {
                        item,
                        index
                      }, () => {
                        _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(isSelectItem(item) ? vueExports.unref(get)(item, props.labelKey) : item)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</span>`);
                      if (isSelectItem(item) && (vueExports.unref(get)(item, props.descriptionKey) || !!slots["item-description"])) {
                        _push3(`<span data-slot="itemDescription" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] }))}"${_scopeId2}>`);
                        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "item-description", {
                          item,
                          index
                        }, () => {
                          _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get)(item, props.descriptionKey))}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</span><span data-slot="itemTrailing" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] }))}"${_scopeId2}>`);
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "item-trailing", {
                        item,
                        index,
                        ui: ui.value
                      }, null, _push3, _parent3, _scopeId2);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxItemIndicator_default), { "as-child": "" }, {
                        default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                              name: __props.selectedIcon || vueExports.unref(appConfig).ui.icons.check,
                              "data-slot": "itemTrailingIcon",
                              class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(_sfc_main$g, {
                                name: __props.selectedIcon || vueExports.unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                              }, null, 8, ["name", "class"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</span>`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      vueExports.renderSlot(_ctx.$slots, "item", {
                        item,
                        index,
                        ui: ui.value
                      }, () => [
                        vueExports.renderSlot(_ctx.$slots, "item-leading", {
                          item,
                          index,
                          ui: ui.value
                        }, () => [
                          isSelectItem(item) && item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                            key: 0,
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                          }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                            key: 1,
                            size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                          }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$f, vueExports.mergeProps({
                            key: 2,
                            size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                          }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                        ]),
                        vueExports.createVNode("span", {
                          "data-slot": "itemWrapper",
                          class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
                        }, [
                          vueExports.createVNode("span", {
                            "data-slot": "itemLabel",
                            class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "item-label", {
                              item,
                              index
                            }, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(isSelectItem(item) ? vueExports.unref(get)(item, props.labelKey) : item), 1)
                            ])
                          ], 2),
                          isSelectItem(item) && (vueExports.unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                            key: 0,
                            "data-slot": "itemDescription",
                            class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "item-description", {
                              item,
                              index
                            }, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get)(item, props.descriptionKey)), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true)
                        ], 2),
                        vueExports.createVNode("span", {
                          "data-slot": "itemTrailing",
                          class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "item-trailing", {
                            item,
                            index,
                            ui: ui.value
                          }),
                          vueExports.createVNode(vueExports.unref(ComboboxItemIndicator_default), { "as-child": "" }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_sfc_main$g, {
                                name: __props.selectedIcon || vueExports.unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                              }, null, 8, ["name", "class"])
                            ]),
                            _: 2
                          }, 1024)
                        ], 2)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
          } else {
            return [
              isSelectItem(item) && item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxLabel_default), {
                key: 0,
                "data-slot": "label",
                class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get)(item, props.labelKey)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxSeparator_default), {
                key: 1,
                "data-slot": "separator",
                class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
              }, null, 8, ["class"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxItem_default), {
                key: 2,
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                disabled: isSelectItem(item) && item.disabled,
                value: props.valueKey && isSelectItem(item) ? vueExports.unref(get)(item, props.valueKey) : item,
                onSelect: ($event) => onSelect($event, item)
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.renderSlot(_ctx.$slots, "item", {
                    item,
                    index,
                    ui: ui.value
                  }, () => [
                    vueExports.renderSlot(_ctx.$slots, "item-leading", {
                      item,
                      index,
                      ui: ui.value
                    }, () => [
                      isSelectItem(item) && item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                        key: 0,
                        name: item.icon,
                        "data-slot": "itemLeadingIcon",
                        class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                      }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                        key: 1,
                        size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                      }, item.avatar, {
                        "data-slot": "itemLeadingAvatar",
                        class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                      }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$f, vueExports.mergeProps({
                        key: 2,
                        size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                        inset: "",
                        standalone: ""
                      }, item.chip, {
                        "data-slot": "itemLeadingChip",
                        class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                      }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                    ]),
                    vueExports.createVNode("span", {
                      "data-slot": "itemWrapper",
                      class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
                    }, [
                      vueExports.createVNode("span", {
                        "data-slot": "itemLabel",
                        class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "item-label", {
                          item,
                          index
                        }, () => [
                          vueExports.createTextVNode(vueExports.toDisplayString(isSelectItem(item) ? vueExports.unref(get)(item, props.labelKey) : item), 1)
                        ])
                      ], 2),
                      isSelectItem(item) && (vueExports.unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                        key: 0,
                        "data-slot": "itemDescription",
                        class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "item-description", {
                          item,
                          index
                        }, () => [
                          vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get)(item, props.descriptionKey)), 1)
                        ])
                      ], 2)) : vueExports.createCommentVNode("", true)
                    ], 2),
                    vueExports.createVNode("span", {
                      "data-slot": "itemTrailing",
                      class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "item-trailing", {
                        item,
                        index,
                        ui: ui.value
                      }),
                      vueExports.createVNode(vueExports.unref(ComboboxItemIndicator_default), { "as-child": "" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_sfc_main$g, {
                            name: __props.selectedIcon || vueExports.unref(appConfig).ui.icons.check,
                            "data-slot": "itemTrailingIcon",
                            class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                          }, null, 8, ["name", "class"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 2)
                  ])
                ]),
                _: 2
              }, 1032, ["class", "disabled", "value", "onSelect"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxRoot_default), vueExports.mergeProps({ id: vueExports.unref(id) }, { ...vueExports.unref(rootProps), ..._ctx.$attrs, ...vueExports.unref(ariaAttrs) }, {
        "ignore-filter": "",
        "as-child": "",
        name: vueExports.unref(name),
        disabled: vueExports.unref(disabled),
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }), {
        default: vueExports.withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxAnchor_default), { "as-child": "" }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxTrigger_default), {
                    ref_key: "triggerRef",
                    ref: triggerRef,
                    "data-slot": "base",
                    class: ui.value.base({ class: [props.ui?.base, props.class] }),
                    tabindex: "0"
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (vueExports.unref(isLeading) || !!__props.avatar || !!slots.leading) {
                          _push4(`<span data-slot="leading" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId3}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "leading", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            if (vueExports.unref(isLeading) && vueExports.unref(leadingIconName)) {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                                name: vueExports.unref(leadingIconName),
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (!!__props.avatar) {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$e, vueExports.mergeProps({
                                size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                              }, __props.avatar, {
                                "data-slot": "itemLeadingAvatar",
                                class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => {
                          _push4(`<!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList([displayValue(modelValue)], (displayedModelValue) => {
                            _push4(`<!--[-->`);
                            if (displayedModelValue !== void 0 && displayedModelValue !== null) {
                              _push4(`<span data-slot="value" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.value({ class: props.ui?.value }))}"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(displayedModelValue)}</span>`);
                            } else {
                              _push4(`<span data-slot="placeholder" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.placeholder({ class: props.ui?.placeholder }))}"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.placeholder ?? " ")}</span>`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                        }, _push4, _parent4, _scopeId3);
                        if (vueExports.unref(isTrailing) || !!slots.trailing) {
                          _push4(`<span data-slot="trailing" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId3}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            if (vueExports.unref(trailingIconName)) {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                                name: vueExports.unref(trailingIconName),
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          vueExports.unref(isLeading) || !!__props.avatar || !!slots.leading ? (vueExports.openBlock(), vueExports.createBlock("span", {
                            key: 0,
                            "data-slot": "leading",
                            class: ui.value.leading({ class: props.ui?.leading })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => [
                              vueExports.unref(isLeading) && vueExports.unref(leadingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                                key: 0,
                                name: vueExports.unref(leadingIconName),
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, 8, ["name", "class"])) : !!__props.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                                key: 1,
                                size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                              }, __props.avatar, {
                                "data-slot": "itemLeadingAvatar",
                                class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                              }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true),
                          vueExports.renderSlot(_ctx.$slots, "default", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList([displayValue(modelValue)], (displayedModelValue) => {
                              return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: displayedModelValue }, [
                                displayedModelValue !== void 0 && displayedModelValue !== null ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 0,
                                  "data-slot": "value",
                                  class: ui.value.value({ class: props.ui?.value })
                                }, vueExports.toDisplayString(displayedModelValue), 3)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  "data-slot": "placeholder",
                                  class: ui.value.placeholder({ class: props.ui?.placeholder })
                                }, vueExports.toDisplayString(__props.placeholder ?? " "), 3))
                              ], 64);
                            }), 128))
                          ]),
                          vueExports.unref(isTrailing) || !!slots.trailing ? (vueExports.openBlock(), vueExports.createBlock("span", {
                            key: 1,
                            "data-slot": "trailing",
                            class: ui.value.trailing({ class: props.ui?.trailing })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "trailing", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => [
                              vueExports.unref(trailingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                                key: 0,
                                name: vueExports.unref(trailingIconName),
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                              }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ComboboxTrigger_default), {
                      ref_key: "triggerRef",
                      ref: triggerRef,
                      "data-slot": "base",
                      class: ui.value.base({ class: [props.ui?.base, props.class] }),
                      tabindex: "0"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.unref(isLeading) || !!__props.avatar || !!slots.leading ? (vueExports.openBlock(), vueExports.createBlock("span", {
                          key: 0,
                          "data-slot": "leading",
                          class: ui.value.leading({ class: props.ui?.leading })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "leading", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => [
                            vueExports.unref(isLeading) && vueExports.unref(leadingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                              key: 0,
                              name: vueExports.unref(leadingIconName),
                              "data-slot": "leadingIcon",
                              class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                            }, null, 8, ["name", "class"])) : !!__props.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                              key: 1,
                              size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                            }, __props.avatar, {
                              "data-slot": "itemLeadingAvatar",
                              class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                            }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true),
                        vueExports.renderSlot(_ctx.$slots, "default", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList([displayValue(modelValue)], (displayedModelValue) => {
                            return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: displayedModelValue }, [
                              displayedModelValue !== void 0 && displayedModelValue !== null ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                key: 0,
                                "data-slot": "value",
                                class: ui.value.value({ class: props.ui?.value })
                              }, vueExports.toDisplayString(displayedModelValue), 3)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                key: 1,
                                "data-slot": "placeholder",
                                class: ui.value.placeholder({ class: props.ui?.placeholder })
                              }, vueExports.toDisplayString(__props.placeholder ?? " "), 3))
                            ], 64);
                          }), 128))
                        ]),
                        vueExports.unref(isTrailing) || !!slots.trailing ? (vueExports.openBlock(), vueExports.createBlock("span", {
                          key: 1,
                          "data-slot": "trailing",
                          class: ui.value.trailing({ class: props.ui?.trailing })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => [
                            vueExports.unref(trailingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                              key: 0,
                              name: vueExports.unref(trailingIconName),
                              "data-slot": "trailingIcon",
                              class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                            }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxPortal_default), vueExports.unref(portalProps), {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxContent_default), vueExports.mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value), {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(FocusScope_default), {
                          trapped: "",
                          "data-slot": "focusScope",
                          class: ui.value.focusScope({ class: props.ui?.focusScope })
                        }, {
                          default: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push5, _parent5, _scopeId4);
                              if (!!__props.searchInput) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxInput_default), {
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: vueExports.withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, vueExports.mergeProps({
                                        autofocus: "",
                                        autocomplete: "off",
                                        size: __props.size
                                      }, searchInputProps.value, {
                                        "data-slot": "input",
                                        class: ui.value.input({ class: props.ui?.input }),
                                        onChange: () => {
                                        }
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, vueExports.mergeProps({
                                          autofocus: "",
                                          autocomplete: "off",
                                          size: __props.size
                                        }, searchInputProps.value, {
                                          "data-slot": "input",
                                          class: ui.value.input({ class: props.ui?.input }),
                                          onChange: vueExports.withModifiers(() => {
                                          }, ["stop"])
                                        }), null, 16, ["size", "class", "onChange"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxEmpty_default), {
                                "data-slot": "empty",
                                class: ui.value.empty({ class: props.ui?.empty })
                              }, {
                                default: vueExports.withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                                      _push6(`${serverRenderer_cjs_prodExports.ssrInterpolate(searchTerm.value ? vueExports.unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : vueExports.unref(t)("selectMenu.noData"))}`);
                                    }, _push6, _parent6, _scopeId5);
                                  } else {
                                    return [
                                      vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                        vueExports.createTextVNode(vueExports.toDisplayString(searchTerm.value ? vueExports.unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : vueExports.unref(t)("selectMenu.noData")), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<div role="presentation" data-slot="viewport" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId4}>`);
                              if (!!__props.virtualize) {
                                _push5(`<!--[-->`);
                                if (createItem.value && createItemPosition.value === "top") {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxVirtualizer_default), vueExports.mergeProps({
                                  options: filteredItems.value,
                                  "text-content": (item2) => isSelectItem(item2) ? vueExports.unref(get)(item2, props.labelKey) : String(item2)
                                }, virtualizerProps.value), {
                                  default: vueExports.withCtx(({ option: item, virtualItem }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                        item,
                                        index: virtualItem.index
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                          item,
                                          index: virtualItem.index
                                        }, null, 8, ["item", "index"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                if (createItem.value && createItemPosition.value === "bottom") {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!--[-->`);
                                if (createItem.value && createItemPosition.value === "top") {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxGroup_default), {
                                    "data-slot": "group",
                                    class: ui.value.group({ class: props.ui?.group })
                                  }, {
                                    default: vueExports.withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--[-->`);
                                serverRenderer_cjs_prodExports.ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxGroup_default), {
                                    key: `group-${groupIndex}`,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: props.ui?.group })
                                  }, {
                                    default: vueExports.withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        serverRenderer_cjs_prodExports.ssrRenderList(group, (item, index) => {
                                          _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                            key: `group-${groupIndex}-${index}`,
                                            item,
                                            index
                                          }, null, _parent6, _scopeId5));
                                        });
                                        _push6(`<!--]-->`);
                                      } else {
                                        return [
                                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                            return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseItemTemplate), {
                                              key: `group-${groupIndex}-${index}`,
                                              item,
                                              index
                                            }, null, 8, ["item", "index"]);
                                          }), 128))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                if (createItem.value && createItemPosition.value === "bottom") {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxGroup_default), {
                                    "data-slot": "group",
                                    class: ui.value.group({ class: props.ui?.group })
                                  }, {
                                    default: vueExports.withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--]-->`);
                              }
                              _push5(`</div>`);
                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                vueExports.renderSlot(_ctx.$slots, "content-top"),
                                !!__props.searchInput ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxInput_default), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, vueExports.mergeProps({
                                      autofocus: "",
                                      autocomplete: "off",
                                      size: __props.size
                                    }, searchInputProps.value, {
                                      "data-slot": "input",
                                      class: ui.value.input({ class: props.ui?.input }),
                                      onChange: vueExports.withModifiers(() => {
                                      }, ["stop"])
                                    }), null, 16, ["size", "class", "onChange"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode(vueExports.unref(ComboboxEmpty_default), {
                                  "data-slot": "empty",
                                  class: ui.value.empty({ class: props.ui?.empty })
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      vueExports.createTextVNode(vueExports.toDisplayString(searchTerm.value ? vueExports.unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : vueExports.unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                vueExports.createVNode("div", {
                                  role: "presentation",
                                  "data-slot": "viewport",
                                  class: ui.value.viewport({ class: props.ui?.viewport })
                                }, [
                                  !!__props.virtualize ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 0 })) : vueExports.createCommentVNode("", true),
                                    vueExports.createVNode(vueExports.unref(ComboboxVirtualizer_default), vueExports.mergeProps({
                                      options: filteredItems.value,
                                      "text-content": (item2) => isSelectItem(item2) ? vueExports.unref(get)(item2, props.labelKey) : String(item2)
                                    }, virtualizerProps.value), {
                                      default: vueExports.withCtx(({ option: item, virtualItem }) => [
                                        vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                          item,
                                          index: virtualItem.index
                                        }, null, 8, ["item", "index"])
                                      ]),
                                      _: 1
                                    }, 16, ["options", "text-content"]),
                                    createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 1 })) : vueExports.createCommentVNode("", true)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                    createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                      key: 0,
                                      "data-slot": "group",
                                      class: ui.value.group({ class: props.ui?.group })
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : vueExports.createCommentVNode("", true),
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(filteredGroups.value, (group, groupIndex) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                        key: `group-${groupIndex}`,
                                        "data-slot": "group",
                                        class: ui.value.group({ class: props.ui?.group })
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                            return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseItemTemplate), {
                                              key: `group-${groupIndex}-${index}`,
                                              item,
                                              index
                                            }, null, 8, ["item", "index"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                      key: 1,
                                      "data-slot": "group",
                                      class: ui.value.group({ class: props.ui?.group })
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : vueExports.createCommentVNode("", true)
                                  ], 64))
                                ], 2),
                                vueExports.renderSlot(_ctx.$slots, "content-bottom")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!!__props.arrow) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ComboboxArrow_default), vueExports.mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(FocusScope_default), {
                            trapped: "",
                            "data-slot": "focusScope",
                            class: ui.value.focusScope({ class: props.ui?.focusScope })
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, "content-top"),
                              !!__props.searchInput ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxInput_default), {
                                key: 0,
                                modelValue: searchTerm.value,
                                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                "display-value": () => searchTerm.value,
                                "as-child": ""
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(_sfc_main$2, vueExports.mergeProps({
                                    autofocus: "",
                                    autocomplete: "off",
                                    size: __props.size
                                  }, searchInputProps.value, {
                                    "data-slot": "input",
                                    class: ui.value.input({ class: props.ui?.input }),
                                    onChange: vueExports.withModifiers(() => {
                                    }, ["stop"])
                                  }), null, 16, ["size", "class", "onChange"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode(vueExports.unref(ComboboxEmpty_default), {
                                "data-slot": "empty",
                                class: ui.value.empty({ class: props.ui?.empty })
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                    vueExports.createTextVNode(vueExports.toDisplayString(searchTerm.value ? vueExports.unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : vueExports.unref(t)("selectMenu.noData")), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"]),
                              vueExports.createVNode("div", {
                                role: "presentation",
                                "data-slot": "viewport",
                                class: ui.value.viewport({ class: props.ui?.viewport })
                              }, [
                                !!__props.virtualize ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 0 })) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode(vueExports.unref(ComboboxVirtualizer_default), vueExports.mergeProps({
                                    options: filteredItems.value,
                                    "text-content": (item2) => isSelectItem(item2) ? vueExports.unref(get)(item2, props.labelKey) : String(item2)
                                  }, virtualizerProps.value), {
                                    default: vueExports.withCtx(({ option: item, virtualItem }) => [
                                      vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                        item,
                                        index: virtualItem.index
                                      }, null, 8, ["item", "index"])
                                    ]),
                                    _: 1
                                  }, 16, ["options", "text-content"]),
                                  createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 1 })) : vueExports.createCommentVNode("", true)
                                ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                  createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                    key: 0,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: props.ui?.group })
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : vueExports.createCommentVNode("", true),
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(filteredGroups.value, (group, groupIndex) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                      key: `group-${groupIndex}`,
                                      "data-slot": "group",
                                      class: ui.value.group({ class: props.ui?.group })
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseItemTemplate), {
                                            key: `group-${groupIndex}-${index}`,
                                            item,
                                            index
                                          }, null, 8, ["item", "index"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]);
                                  }), 128)),
                                  createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                    key: 1,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: props.ui?.group })
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : vueExports.createCommentVNode("", true)
                                ], 64))
                              ], 2),
                              vueExports.renderSlot(_ctx.$slots, "content-bottom")
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
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
                    vueExports.createVNode(vueExports.unref(ComboboxContent_default), vueExports.mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: props.ui?.content })
                    }, contentProps.value), {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(FocusScope_default), {
                          trapped: "",
                          "data-slot": "focusScope",
                          class: ui.value.focusScope({ class: props.ui?.focusScope })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.renderSlot(_ctx.$slots, "content-top"),
                            !!__props.searchInput ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxInput_default), {
                              key: 0,
                              modelValue: searchTerm.value,
                              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                              "display-value": () => searchTerm.value,
                              "as-child": ""
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$2, vueExports.mergeProps({
                                  autofocus: "",
                                  autocomplete: "off",
                                  size: __props.size
                                }, searchInputProps.value, {
                                  "data-slot": "input",
                                  class: ui.value.input({ class: props.ui?.input }),
                                  onChange: vueExports.withModifiers(() => {
                                  }, ["stop"])
                                }), null, 16, ["size", "class", "onChange"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode(vueExports.unref(ComboboxEmpty_default), {
                              "data-slot": "empty",
                              class: ui.value.empty({ class: props.ui?.empty })
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                  vueExports.createTextVNode(vueExports.toDisplayString(searchTerm.value ? vueExports.unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : vueExports.unref(t)("selectMenu.noData")), 1)
                                ])
                              ]),
                              _: 3
                            }, 8, ["class"]),
                            vueExports.createVNode("div", {
                              role: "presentation",
                              "data-slot": "viewport",
                              class: ui.value.viewport({ class: props.ui?.viewport })
                            }, [
                              !!__props.virtualize ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 0 })) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode(vueExports.unref(ComboboxVirtualizer_default), vueExports.mergeProps({
                                  options: filteredItems.value,
                                  "text-content": (item2) => isSelectItem(item2) ? vueExports.unref(get)(item2, props.labelKey) : String(item2)
                                }, virtualizerProps.value), {
                                  default: vueExports.withCtx(({ option: item, virtualItem }) => [
                                    vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                      item,
                                      index: virtualItem.index
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 1
                                }, 16, ["options", "text-content"]),
                                createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 1 })) : vueExports.createCommentVNode("", true)
                              ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                  key: 0,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: props.ui?.group })
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                  ]),
                                  _: 1
                                }, 8, ["class"])) : vueExports.createCommentVNode("", true),
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(filteredGroups.value, (group, groupIndex) => {
                                  return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                    key: `group-${groupIndex}`,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: props.ui?.group })
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseItemTemplate), {
                                          key: `group-${groupIndex}-${index}`,
                                          item,
                                          index
                                        }, null, 8, ["item", "index"]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128)),
                                createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                  key: 1,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: props.ui?.group })
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                  ]),
                                  _: 1
                                }, 8, ["class"])) : vueExports.createCommentVNode("", true)
                              ], 64))
                            ], 2),
                            vueExports.renderSlot(_ctx.$slots, "content-bottom")
                          ]),
                          _: 3
                        }, 8, ["class"]),
                        !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
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
              vueExports.createVNode(vueExports.unref(ComboboxAnchor_default), { "as-child": "" }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ComboboxTrigger_default), {
                    ref_key: "triggerRef",
                    ref: triggerRef,
                    "data-slot": "base",
                    class: ui.value.base({ class: [props.ui?.base, props.class] }),
                    tabindex: "0"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.unref(isLeading) || !!__props.avatar || !!slots.leading ? (vueExports.openBlock(), vueExports.createBlock("span", {
                        key: 0,
                        "data-slot": "leading",
                        class: ui.value.leading({ class: props.ui?.leading })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "leading", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => [
                          vueExports.unref(isLeading) && vueExports.unref(leadingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                            key: 0,
                            name: vueExports.unref(leadingIconName),
                            "data-slot": "leadingIcon",
                            class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                          }, null, 8, ["name", "class"])) : !!__props.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                            key: 1,
                            size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, __props.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                          }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                        ])
                      ], 2)) : vueExports.createCommentVNode("", true),
                      vueExports.renderSlot(_ctx.$slots, "default", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList([displayValue(modelValue)], (displayedModelValue) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: displayedModelValue }, [
                            displayedModelValue !== void 0 && displayedModelValue !== null ? (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 0,
                              "data-slot": "value",
                              class: ui.value.value({ class: props.ui?.value })
                            }, vueExports.toDisplayString(displayedModelValue), 3)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 1,
                              "data-slot": "placeholder",
                              class: ui.value.placeholder({ class: props.ui?.placeholder })
                            }, vueExports.toDisplayString(__props.placeholder ?? " "), 3))
                          ], 64);
                        }), 128))
                      ]),
                      vueExports.unref(isTrailing) || !!slots.trailing ? (vueExports.openBlock(), vueExports.createBlock("span", {
                        key: 1,
                        "data-slot": "trailing",
                        class: ui.value.trailing({ class: props.ui?.trailing })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "trailing", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => [
                          vueExports.unref(trailingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, {
                            key: 0,
                            name: vueExports.unref(trailingIconName),
                            "data-slot": "trailingIcon",
                            class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                          }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                        ])
                      ], 2)) : vueExports.createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1024),
              vueExports.createVNode(vueExports.unref(ComboboxPortal_default), vueExports.unref(portalProps), {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ComboboxContent_default), vueExports.mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value), {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(FocusScope_default), {
                        trapped: "",
                        "data-slot": "focusScope",
                        class: ui.value.focusScope({ class: props.ui?.focusScope })
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.renderSlot(_ctx.$slots, "content-top"),
                          !!__props.searchInput ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxInput_default), {
                            key: 0,
                            modelValue: searchTerm.value,
                            "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                            "display-value": () => searchTerm.value,
                            "as-child": ""
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_sfc_main$2, vueExports.mergeProps({
                                autofocus: "",
                                autocomplete: "off",
                                size: __props.size
                              }, searchInputProps.value, {
                                "data-slot": "input",
                                class: ui.value.input({ class: props.ui?.input }),
                                onChange: vueExports.withModifiers(() => {
                                }, ["stop"])
                              }), null, 16, ["size", "class", "onChange"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : vueExports.createCommentVNode("", true),
                          vueExports.createVNode(vueExports.unref(ComboboxEmpty_default), {
                            "data-slot": "empty",
                            class: ui.value.empty({ class: props.ui?.empty })
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(searchTerm.value ? vueExports.unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : vueExports.unref(t)("selectMenu.noData")), 1)
                              ])
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          vueExports.createVNode("div", {
                            role: "presentation",
                            "data-slot": "viewport",
                            class: ui.value.viewport({ class: props.ui?.viewport })
                          }, [
                            !!__props.virtualize ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                              createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 0 })) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode(vueExports.unref(ComboboxVirtualizer_default), vueExports.mergeProps({
                                options: filteredItems.value,
                                "text-content": (item2) => isSelectItem(item2) ? vueExports.unref(get)(item2, props.labelKey) : String(item2)
                              }, virtualizerProps.value), {
                                default: vueExports.withCtx(({ option: item, virtualItem }) => [
                                  vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                    item,
                                    index: virtualItem.index
                                  }, null, 8, ["item", "index"])
                                ]),
                                _: 1
                              }, 16, ["options", "text-content"]),
                              createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseCreateItemTemplate), { key: 1 })) : vueExports.createCommentVNode("", true)
                            ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                              createItem.value && createItemPosition.value === "top" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                key: 0,
                                "data-slot": "group",
                                class: ui.value.group({ class: props.ui?.group })
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : vueExports.createCommentVNode("", true),
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(filteredGroups.value, (group, groupIndex) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                  key: `group-${groupIndex}`,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: props.ui?.group })
                                }, {
                                  default: vueExports.withCtx(() => [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseItemTemplate), {
                                        key: `group-${groupIndex}-${index}`,
                                        item,
                                        index
                                      }, null, 8, ["item", "index"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128)),
                              createItem.value && createItemPosition.value === "bottom" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxGroup_default), {
                                key: 1,
                                "data-slot": "group",
                                class: ui.value.group({ class: props.ui?.group })
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : vueExports.createCommentVNode("", true)
                            ], 64))
                          ], 2),
                          vueExports.renderSlot(_ctx.$slots, "content-bottom")
                        ]),
                        _: 3
                      }, 8, ["class"]),
                      !!__props.arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ComboboxArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_c8c45511c3ca5af34ce239e30ac6bdb3/node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "images",
  __ssrInlineRender: true,
  setup(__props) {
    const images = vueExports.ref([]);
    const loading = vueExports.ref(false);
    const pagination = vueExports.reactive({
      currentPage: 1,
      itemsPerPage: 12,
      totalPages: 1,
      totalItems: 0
    });
    const filters = vueExports.reactive({
      type: ""
    });
    const goHome = () => {
      navigateTo("/");
    };
    const fetchImages = async () => {
      loading.value = true;
      try {
        const result = await $fetch("/api/images/get-links", {
          params: {
            page: pagination.currentPage,
            limit: pagination.itemsPerPage,
            type: filters.type
          }
        });
        if (result.success) {
          images.value = result.data || [];
          pagination.totalItems = result.pagination?.totalImages || 0;
          pagination.totalPages = result.pagination?.totalPages || 1;
        } else {
          console.error("获取图片失败:", result.error);
        }
      } catch (err) {
        console.error("获取图片失败:", err);
      } finally {
        loading.value = false;
      }
    };
    const prevPage = () => {
      if (pagination.currentPage > 1) {
        pagination.currentPage--;
        fetchImages();
      }
    };
    const nextPage = () => {
      if (pagination.currentPage < pagination.totalPages) {
        pagination.currentPage++;
        fetchImages();
      }
    };
    const copyLink = async (url) => {
      try {
        await (void 0).clipboard.writeText(`${(void 0).location.origin}${url}`);
        console.log("链接已复制到剪贴板:", url);
      } catch (err) {
        console.error("复制链接失败:", err);
      }
    };
    const deleteImage = async (id) => {
      if (!confirm("确定要删除这张图片吗？此操作不可逆。")) {
        return;
      }
      try {
        const result = await $fetch(`/api/images/${id}`, {
          method: "DELETE"
        });
        if (result.success) {
          images.value = images.value.filter((img) => img.id !== id);
          pagination.totalItems--;
          if (images.value.length === 0 && pagination.currentPage > 1) {
            pagination.currentPage--;
            fetchImages();
          }
          console.log("图片删除成功:", id);
        } else {
          console.error("删除图片失败:", result.message);
        }
      } catch (err) {
        console.error("删除图片失败:", err);
      }
    };
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("zh-CN");
    };
    const onImageError = (e) => {
      const target = e.target;
      target.src = "https://placehold.co/300x300?text=Image+Not+Found";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      const _component_UCard = _sfc_main$4;
      const _component_UFormField = _sfc_main$3;
      const _component_UInput = _sfc_main$2;
      const _component_USelectMenu = _sfc_main$1;
      const _component_UActivityIndicator = vueExports.resolveComponent("UActivityIndicator");
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto p-6" }, _attrs))}><div class="mb-6">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "i-heroicons-arrow-left-20-solid",
        onClick: goHome
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`返回首页`);
          } else {
            return [
              vueExports.createTextVNode("返回首页")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCard, null, {
        header: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-bold"${_scopeId}>图片链接管理</h2>`);
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-xl font-bold" }, "图片链接管理")
            ];
          }
        }),
        footer: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              disabled: vueExports.unref(pagination).currentPage <= 1,
              onClick: prevPage
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`上一页`);
                } else {
                  return [
                    vueExports.createTextVNode("上一页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-sm"${_scopeId}>第 ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(pagination).currentPage)} 页，共 ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(pagination).totalPages)} 页</div><div${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              disabled: vueExports.unref(pagination).currentPage >= vueExports.unref(pagination).totalPages,
              onClick: nextPage
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`下一页`);
                } else {
                  return [
                    vueExports.createTextVNode("下一页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "flex justify-between items-center" }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode(_component_UButton, {
                    disabled: vueExports.unref(pagination).currentPage <= 1,
                    onClick: prevPage
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode("上一页")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                vueExports.createVNode("div", { class: "text-sm" }, "第 " + vueExports.toDisplayString(vueExports.unref(pagination).currentPage) + " 页，共 " + vueExports.toDisplayString(vueExports.unref(pagination).totalPages) + " 页", 1),
                vueExports.createVNode("div", null, [
                  vueExports.createVNode(_component_UButton, {
                    disabled: vueExports.unref(pagination).currentPage >= vueExports.unref(pagination).totalPages,
                    onClick: nextPage
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode("下一页")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ];
          }
        }),
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "页面",
              name: "page",
              class: "w-32"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(pagination).currentPage,
                    "onUpdate:modelValue": ($event) => vueExports.unref(pagination).currentPage = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "1"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(pagination).currentPage,
                      "onUpdate:modelValue": ($event) => vueExports.unref(pagination).currentPage = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "每页数量",
              name: "limit",
              class: "w-32"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(pagination).itemsPerPage,
                    "onUpdate:modelValue": ($event) => vueExports.unref(pagination).itemsPerPage = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "1",
                    max: "50"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(pagination).itemsPerPage,
                      "onUpdate:modelValue": ($event) => vueExports.unref(pagination).itemsPerPage = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1",
                      max: "50"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "类型",
              name: "type"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_USelectMenu, {
                    modelValue: vueExports.unref(filters).type,
                    "onUpdate:modelValue": ($event) => vueExports.unref(filters).type = $event,
                    options: ["", "jpg", "png", "gif", "jpeg"],
                    placeholder: "全部类型"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_USelectMenu, {
                      modelValue: vueExports.unref(filters).type,
                      "onUpdate:modelValue": ($event) => vueExports.unref(filters).type = $event,
                      options: ["", "jpg", "png", "gif", "jpeg"],
                      placeholder: "全部类型"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              onClick: fetchImages,
              class: "self-end"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`搜索`);
                } else {
                  return [
                    vueExports.createTextVNode("搜索")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-4 text-sm text-gray-600"${_scopeId}> 共找到 ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(pagination).totalItems)} 张图片， 第 ${serverRenderer_cjs_prodExports.ssrInterpolate((vueExports.unref(pagination).currentPage - 1) * vueExports.unref(pagination).itemsPerPage + 1)} - ${serverRenderer_cjs_prodExports.ssrInterpolate(Math.min(vueExports.unref(pagination).currentPage * vueExports.unref(pagination).itemsPerPage, vueExports.unref(pagination).totalItems))} 条 </div>`);
            if (vueExports.unref(loading)) {
              _push2(`<div class="flex justify-center py-10"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UActivityIndicator, { size: "lg" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (vueExports.unref(images).length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(images), (image) => {
                _push2(`<div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow relative group"${_scopeId}><div class="aspect-square bg-gray-100 flex items-center justify-center"${_scopeId}><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", image.url)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", image.name)} class="object-contain w-full h-full"${_scopeId}></div><div class="p-3"${_scopeId}><div class="font-medium truncate text-sm"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(image.name)}</div><div class="text-xs text-gray-500 mt-1"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatFileSize(image.size))}</div><div class="text-xs text-gray-500"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(image.createdAt))}</div><div class="mt-2 grid grid-cols-2 gap-1"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "primary",
                  variant: "ghost",
                  onClick: ($event) => copyLink(image.url)
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`复制链接`);
                    } else {
                      return [
                        vueExports.createTextVNode("复制链接")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "error",
                  variant: "ghost",
                  onClick: ($event) => deleteImage(image.id)
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`删除`);
                    } else {
                      return [
                        vueExports.createTextVNode("删除")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                  icon: "i-heroicons-trash-20-solid",
                  size: "xs",
                  color: "error",
                  variant: "solid",
                  class: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
                  onClick: ($event) => deleteImage(image.id)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-10 text-gray-500"${_scopeId}>没有找到图片</div>`);
            }
          } else {
            return [
              vueExports.createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6" }, [
                vueExports.createVNode(_component_UFormField, {
                  label: "页面",
                  name: "page",
                  class: "w-32"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(pagination).currentPage,
                      "onUpdate:modelValue": ($event) => vueExports.unref(pagination).currentPage = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "每页数量",
                  name: "limit",
                  class: "w-32"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(pagination).itemsPerPage,
                      "onUpdate:modelValue": ($event) => vueExports.unref(pagination).itemsPerPage = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1",
                      max: "50"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "类型",
                  name: "type"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_USelectMenu, {
                      modelValue: vueExports.unref(filters).type,
                      "onUpdate:modelValue": ($event) => vueExports.unref(filters).type = $event,
                      options: ["", "jpg", "png", "gif", "jpeg"],
                      placeholder: "全部类型"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UButton, {
                  onClick: fetchImages,
                  class: "self-end"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createTextVNode("搜索")
                  ]),
                  _: 1
                })
              ]),
              vueExports.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " 共找到 " + vueExports.toDisplayString(vueExports.unref(pagination).totalItems) + " 张图片， 第 " + vueExports.toDisplayString((vueExports.unref(pagination).currentPage - 1) * vueExports.unref(pagination).itemsPerPage + 1) + " - " + vueExports.toDisplayString(Math.min(vueExports.unref(pagination).currentPage * vueExports.unref(pagination).itemsPerPage, vueExports.unref(pagination).totalItems)) + " 条 ", 1),
              vueExports.unref(loading) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "flex justify-center py-10"
              }, [
                vueExports.createVNode(_component_UActivityIndicator, { size: "lg" })
              ])) : vueExports.unref(images).length > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(images), (image) => {
                  return vueExports.openBlock(), vueExports.createBlock("div", {
                    key: image.id,
                    class: "border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow relative group"
                  }, [
                    vueExports.createVNode("div", { class: "aspect-square bg-gray-100 flex items-center justify-center" }, [
                      vueExports.createVNode("img", {
                        src: image.url,
                        alt: image.name,
                        class: "object-contain w-full h-full",
                        onError: onImageError
                      }, null, 40, ["src", "alt"])
                    ]),
                    vueExports.createVNode("div", { class: "p-3" }, [
                      vueExports.createVNode("div", { class: "font-medium truncate text-sm" }, vueExports.toDisplayString(image.name), 1),
                      vueExports.createVNode("div", { class: "text-xs text-gray-500 mt-1" }, vueExports.toDisplayString(formatFileSize(image.size)), 1),
                      vueExports.createVNode("div", { class: "text-xs text-gray-500" }, vueExports.toDisplayString(formatDate(image.createdAt)), 1),
                      vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-1" }, [
                        vueExports.createVNode(_component_UButton, {
                          size: "xs",
                          color: "primary",
                          variant: "ghost",
                          onClick: ($event) => copyLink(image.url)
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createTextVNode("复制链接")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        vueExports.createVNode(_component_UButton, {
                          size: "xs",
                          color: "error",
                          variant: "ghost",
                          onClick: ($event) => deleteImage(image.id)
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createTextVNode("删除")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    vueExports.createVNode(_component_UButton, {
                      icon: "i-heroicons-trash-20-solid",
                      size: "xs",
                      color: "error",
                      variant: "solid",
                      class: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
                      onClick: ($event) => deleteImage(image.id)
                    }, null, 8, ["onClick"])
                  ]);
                }), 128))
              ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 2,
                class: "text-center py-10 text-gray-500"
              }, "没有找到图片"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/images.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=images-DM20m8jP.mjs.map
