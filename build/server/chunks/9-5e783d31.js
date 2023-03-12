const load = async ({ fetch }) => {
  const cash = await fetch("/admin/cash").then((res) => res.json());
  const labels = cash.map((c) => c.kodu);
  const chartdata = {
    labels,
    datasets: [{
      axis: "y",
      label: "Kasa Bakiyesi",
      data: cash.map((c) => c.bakiye),
      fill: false,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)"
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)"
      ],
      borderWidth: 1
    }]
  };
  return {
    chartdata,
    cash: cash.map((c) => {
      const isNegative = c.bakiye < 0;
      return {
        ...c,
        isNegative
      };
    })
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const component = async () => (await import('./_page.svelte-061ed332.js')).default;
const file = '_app/immutable/entry/(pages)-(admin)-(home)-live-page.svelte.c5abb321.js';
const server_id = "src/routes/(pages)/(admin)/(home)/live/+page.server.ts";
const imports = ["_app/immutable/entry/(pages)-(admin)-(home)-live-page.svelte.c5abb321.js","_app/immutable/chunks/index.3c704159.js","_app/immutable/chunks/navigation.f6eadf3d.js","_app/immutable/chunks/singletons.48eb4c2a.js","_app/immutable/chunks/index.f314ca2f.js","_app/immutable/chunks/Chart.1eb2c688.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-5e783d31.js.map
