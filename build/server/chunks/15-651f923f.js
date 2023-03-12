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
const file = '_app/immutable/entry/(pages)-(guide)-sales-_id_-_ticketid_-page.svelte.ced7c321.js';
const server_id = "src/routes/(pages)/(guide)/sales/[id]/[ticketid]/+page.server.ts";
const imports = ["_app/immutable/entry/(pages)-(guide)-sales-_id_-_ticketid_-page.svelte.ced7c321.js","_app/immutable/chunks/index.bc7c65c9.js","_app/immutable/chunks/navigation.f5e505e3.js","_app/immutable/chunks/singletons.49a35693.js","_app/immutable/chunks/index.53433d2b.js","_app/immutable/chunks/SalesForm.2958a698.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-651f923f.js.map
