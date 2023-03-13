const load = async ({ params, fetch, parent }) => {
  const data = await parent();
  const packetid = params.id;
  return {
    tickets: await fetch(`/guide/tickets?packetid=${packetid}`).then((res) => res.json()) || [],
    packet: data.packets.find((packet) => packet.id === packetid)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
const component = async () => (await import('./_page.svelte-e5ef2c88.js')).default;
const file = '_app/immutable/entry/(pages)-(guide)-sales-_id_-page.svelte.f60e7058.js';
const server_id = "src/routes/(pages)/(guide)/sales/[id]/+page.server.ts";
const imports = ["_app/immutable/entry/(pages)-(guide)-sales-_id_-page.svelte.f60e7058.js","_app/immutable/chunks/index.e58ce54e.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-65af2e27.js.map
