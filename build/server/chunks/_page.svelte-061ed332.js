import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from './index2-f68ebe74.js';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, BarController } from 'chart.js';
import { u as useForwardEvents, C as Chart$1 } from './Chart-ff51deb4.js';

const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(BarController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    props = $$props;
    $$rendered = `${validate_component(Chart$1, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "bar" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  let { data } = $$props;
  const { chartdata, cash } = data;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"grid"}"><section style="${"height: 40vh;"}">${validate_component(Bar, "Bar").$$render(
    $$result,
    {
      data: chartdata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    },
    {},
    {}
  )}</section>
    <section>${each(cash, (c) => {
    return `<article class="${"mb-2 mt-0 p-4 font-sm"}"><div class="${"flex flex-justify-between"}"><span class="${"text-muted"}">${escape(c.kodu)}</span>
                <span${add_attribute("class", c.isNegative ? "text-danger" : "", 0)}>${escape(c.bakiye.monetize() || "0,00")}</span></div>
        </article>`;
  })}</section></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-061ed332.js.map
