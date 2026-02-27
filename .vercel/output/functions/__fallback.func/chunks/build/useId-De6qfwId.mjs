import { am as vue, v as vueExports, a7 as injectConfigProviderContext } from './server.mjs';

let count = 0;
function useId(deterministicId, prefix = "reka") {
  if ("useId" in vue) return `${prefix}-${vueExports.useId?.()}`;
  const configProviderContext = injectConfigProviderContext({ useId: void 0 });
  if (configProviderContext.useId) return `${prefix}-${configProviderContext.useId()}`;
  return `${prefix}-${++count}`;
}

export { useId as u };
//# sourceMappingURL=useId-De6qfwId.mjs.map
