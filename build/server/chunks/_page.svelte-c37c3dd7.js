import { c as create_ssr_component, v as validate_component } from './index2-f68ebe74.js';
import { S as SalesForm } from './SalesForm-913fe4b9.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="${"container"}">${validate_component(SalesForm, "SalesForm").$$render($$result, {}, {}, {})}</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c37c3dd7.js.map
