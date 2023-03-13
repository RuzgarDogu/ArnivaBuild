const load = async ({ fetch }) => {
  return {
    regions: await fetch("/guide/general/regions").then((res) => res.json())
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./layout.svelte-94b3c5b9.js')).default;
const file = '_app/immutable/entry/layout.svelte.dd9af57b.js';
const server_id = "src/routes/(pages)/(guide)/sales/+layout.server.ts";
const imports = ["_app/immutable/entry/layout.svelte.dd9af57b.js","_app/immutable/chunks/index.e58ce54e.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-47365062.js.map
