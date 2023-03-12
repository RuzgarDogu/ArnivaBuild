import moment from 'moment';

let startdate = moment().startOf("month").format("DD.MM.YYYY");
let enddate = moment().format("DD.MM.YYYY");
const load = async ({ fetch }) => {
  const url = "/admin/general?startdate=" + startdate + "&enddate=" + enddate;
  const general = await fetch(url).then((res) => res.json());
  const chartdata = {
    labels: ["Toplam Satış", "Taban", "Rehber Hakedişi", "Taban İndirimi", "Şirket Hakedişi", "Şirket Karı"],
    datasets: [
      {
        label: "% Satışlar",
        data: [general.toplamsatis, general.toplamtaban, general.toplamahkedis, general.tabanindirimi, general.firmahakedis, general.tabanindirimi + general.firmahakedis],
        backgroundColor: [
          "rgba(255, 134,159,0.4)",
          "rgba(98,  182, 239,0.4)",
          "rgba(255, 218, 128,0.4)",
          "rgba(113, 205, 205,0.4)",
          "rgba(170, 128, 252,0.4)",
          "rgba(255, 177, 101,0.4)"
        ],
        borderWidth: 2,
        borderColor: [
          "rgba(255, 134, 159, 1)",
          "rgba(98,  182, 239, 1)",
          "rgba(255, 218, 128, 1)",
          "rgba(113, 205, 205, 1)",
          "rgba(170, 128, 252, 1)",
          "rgba(255, 177, 101, 1)"
        ]
      }
    ]
  };
  return {
    general,
    startdate: moment(startdate, "DD.MM.YYYY").format("YYYY-MM-DD"),
    enddate: moment(enddate, "DD.MM.YYYY").format("YYYY-MM-DD"),
    chartdata
  };
};
const actions = {
  default: async ({ request }) => {
    const { start, end } = Object.fromEntries(
      await request.formData()
    );
    startdate = moment(start, "YYYY-MM-DD").format("DD.MM.YYYY");
    enddate = moment(end, "YYYY-MM-DD").format("DD.MM.YYYY");
    console.log(startdate, enddate);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
const component = async () => (await import('./_page.svelte-628c915f.js')).default;
const file = '_app/immutable/entry/(pages)-(admin)-(home)-dashboard-page.svelte.b5c7ab9c.js';
const server_id = "src/routes/(pages)/(admin)/(home)/dashboard/+page.server.ts";
const imports = ["_app/immutable/entry/(pages)-(admin)-(home)-dashboard-page.svelte.b5c7ab9c.js","_app/immutable/chunks/index.bc7c65c9.js","_app/immutable/chunks/Chart.847c59bc.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-bd15cf12.js.map
