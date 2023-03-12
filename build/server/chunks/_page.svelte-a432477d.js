import { c as create_ssr_component, v as validate_component } from './index2-f68ebe74.js';
import { S as SalesForm } from './SalesForm-913fe4b9.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { packet, packets, ...formcontent } = data, formdata = {};
  const updateFormContent = () => {
    formcontent = {
      tours: data.tours,
      regions: data.regions,
      operators: data.operators
    };
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      updateFormContent();
    }
    $$rendered = `<main class="${"container"}">${validate_component(SalesForm, "SalesForm").$$render(
      $$result,
      {
        title: "Düzenle",
        packet,
        formcontent,
        formdata
      },
      {
        formdata: ($$value) => {
          formdata = $$value;
          $$settled = false;
        }
      },
      {}
    )}</main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a432477d.js.map
