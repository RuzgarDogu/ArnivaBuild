const load = async ({ parent, params, depends, fetch, url }) => {
  depends("formdata");
  const data = await parent();
  const regionid = url.searchParams.get("region") || "";
  const tourgroupid = url.searchParams.get("tour") || "";
  return {
    packet: data.packets.find((packet) => packet.id === params.id) || null,
    tours: await fetch(`/guide/general/tours?regionid=${regionid}`).then((res) => res.json()) || [],
    operators: await fetch(`/guide/general/operators?tourgroupid=${tourgroupid}&regionid=${regionid}`).then((res) => res.json()) || []
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
const component = async () => (await import('./_page.svelte-a432477d.js')).default;
const file = '_app/immutable/entry/(pages)-(guide)-sales-_id_-_ticketid_-page.svelte.4ee41886.js';
const server_id = "src/routes/(pages)/(guide)/sales/[id]/[ticketid]/+page.server.ts";
const imports = ["_app/immutable/entry/(pages)-(guide)-sales-_id_-_ticketid_-page.svelte.4ee41886.js","_app/immutable/chunks/index.e58ce54e.js","_app/immutable/chunks/navigation.489e6dcc.js","_app/immutable/chunks/singletons.6943d2ca.js","_app/immutable/chunks/index.76836604.js","_app/immutable/chunks/SalesForm.23239e7e.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-679a01d6.js.map
