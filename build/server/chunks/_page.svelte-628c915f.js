import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './index2-f68ebe74.js';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, ArcElement, DoughnutController } from 'chart.js';
import { u as useForwardEvents, C as Chart$1 } from './Chart-ff51deb4.js';

const Doughnut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(DoughnutController);
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
      Object.assign({}, { type: "doughnut" }, props, { this: baseChartRef }, { chart }),
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
  let general;
  let chartdata;
  let updatePageData;
  Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, ArcElement);
  let { data } = $$props;
  let options = {
    responsive: true,
    borderRadius: "1",
    cutout: "85%",
    spacing: 5,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 11 }
        }
      },
      title: { display: false }
    }
  };
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ general, chartdata, updatePageData } = data);
  return `<div class="${"grid"}"><section class="${"mb-4"}">${validate_component(Doughnut, "Doughnut").$$render($$result, { data: chartdata, options }, {}, {})}</section>
    <section><form method="${"POST"}" class="${"grid grid-2 p-0"}"><input class="${"font-sm h-3"}" name="${"start"}" type="${"date"}"${add_attribute("value", data.startdate, 0)}>
            <input class="${"font-sm h-3"}" name="${"end"}" type="${"date"}"${add_attribute("value", data.enddate, 0)}></form>
        <article class="${"mb-2 mt-0 p-4 font-sm"}"><div class="${"flex flex-justify-between"}"><span class="${"text-muted"}">Toplam Satış:</span>
                <span>${escape(general?.toplamsatis?.monetize() || "0,00")}</span></div></article>
        <article class="${"mb-2 mt-0 p-4 font-sm"}"><div class="${"flex flex-justify-between"}"><span class="${"text-muted"}">Taban:</span>
                <span>${escape(general?.toplamtaban?.monetize() || "0,00")}</span></div></article>
        <article class="${"mb-2 mt-0 p-4 font-sm"}"><div class="${"flex flex-justify-between"}"><span class="${"text-muted"}">Rehber Hakedişi:</span>
            <span>${escape(general?.toplamahkedis?.monetize() || "0,00")}</span></div></article>
    <article class="${"mb-2 mt-0 p-4 font-sm"}"><div class="${"flex flex-justify-between"}"><span class="${"text-muted"}">Taban İndirimi:</span>
            <span>${escape(general?.tabanindirimi?.monetize() || "0,00")}</span></div></article>
    <article class="${"mb-2 mt-0 p-4 font-sm"}"><div class="${"flex flex-justify-between"}"><span class="${"text-muted"}">Şirket Hakedişi:</span>
            <span>${escape(general?.firmahakedis?.monetize() || "0,00")}</span></div></article>
    <article class="${"mb-2 mt-0 p-4 font-sm"}"><div class="${"flex flex-justify-between text-green"}"><span class="${"text-green"}">Şirket Karı:</span>
            <span>${escape((general?.firmahakedis + general.tabanindirimi).monetize() || "0,00")}</span></div></article></section></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-628c915f.js.map
