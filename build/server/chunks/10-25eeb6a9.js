const groupSales = (arr) => {
  const grouped = arr.reduce((acc, curr) => {
    const { rehber_adi, doviz_kodu, toplamtutardov, ...rest } = curr;
    if (!acc[rehber_adi]) {
      acc[rehber_adi] = {
        name: rehber_adi,
        toplamtutardov: [{ doviz_kodu, tutar: curr.toplamtutardov }],
        data: [{ ...rest, toplamtutardov, doviz_kodu }]
      };
    } else {
      const index = acc[rehber_adi].toplamtutardov.findIndex(
        (item) => item.doviz_kodu === curr.doviz_kodu
      );
      if (index === -1) {
        acc[rehber_adi].toplamtutardov.push({
          doviz_kodu,
          tutar: curr.toplamtutardov
        });
      } else {
        acc[rehber_adi].toplamtutardov[index].tutar += curr.toplamtutardov;
      }
      acc[rehber_adi].data.push({ ...rest, toplamtutardov, doviz_kodu });
    }
    return acc;
  }, {});
  const groupedArray = Object.values(grouped);
  return groupedArray;
};
let ids = [], branches = [];
const load = async ({ fetch }) => {
  branches = await fetch("/admin/branches").then((res) => res.json());
  if (ids.length === 0) {
    ids = branches.map((branch) => branch.id);
  }
  const sales = await fetch("/admin/report", {
    method: "POST",
    body: JSON.stringify(ids)
  }).then((res) => res.json());
  const groupedSales = groupSales(sales);
  return {
    branches,
    sales,
    groupedSales
  };
};
const actions = {
  default: async ({ request }) => {
    const { branches: branches2 } = Object.fromEntries(
      await request.formData()
    );
    ids = branches2.split(",");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 10;
const component = async () => (await import('./_page.svelte-f58d91b3.js')).default;
const file = '_app/immutable/entry/(pages)-(admin)-report-page.svelte.fe863af9.js';
const server_id = "src/routes/(pages)/(admin)/report/+page.server.ts";
const imports = ["_app/immutable/entry/(pages)-(admin)-report-page.svelte.fe863af9.js","_app/immutable/chunks/index.e58ce54e.js","_app/immutable/chunks/monetize.363172c8.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.6943d2ca.js","_app/immutable/chunks/index.76836604.js","_app/immutable/chunks/navigation.489e6dcc.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-25eeb6a9.js.map
