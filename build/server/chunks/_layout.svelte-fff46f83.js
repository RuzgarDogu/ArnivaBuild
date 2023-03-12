import { c as create_ssr_component } from './index2-f68ebe74.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"grid grid-2 pl-4 pr-4 text-center"}"><a href="${"/dashboard"}" class="${"p-1 font-sm"}">Genel Durum</a>
    <a href="${"/live"}" class="${"outline p-1 font-sm"}">Canlı Veri</a></div>

<section class="${"p-4"}">${slots.default ? slots.default({}) : ``}</section>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-fff46f83.js.map
